variable "filename" {}
variable "serviceName" {}
variable "handler" { default = "index.lambda_handler" }
variable "runtime" { default = "python3.8" }

module "shared_vars" {
  source = "../shared_vars"
}

resource "aws_iam_role" "lambda_exec" {
  name = "${module.shared_vars.app_name}-${module.shared_vars.env}-${var.serviceName}"

  assume_role_policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
POLICY
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "lambda_function" {
  filename      = var.filename
  function_name = "${module.shared_vars.app_name}-${module.shared_vars.env}-${var.serviceName}-service"
  role          = aws_iam_role.lambda_exec.arn
  handler       = var.handler
  runtime       = var.runtime
  tags          = module.shared_vars.common_tags
}

# ---------------------------------------- API-GATEWAY ----------------------------------------------

resource "aws_apigatewayv2_api" "api_gateway" {
  name          = "${module.shared_vars.app_name}-${var.serviceName}"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "dev" {
  api_id      = aws_apigatewayv2_api.api_gateway.id
  name        = module.shared_vars.env
  auto_deploy = true
}


# ---------------------------------------- API-GATEWAY INTEGRATION -----------------------------------

resource "aws_apigatewayv2_integration" "gateway_integration" {
  api_id             = aws_apigatewayv2_api.api_gateway.id
  integration_type   = "AWS_PROXY"
  connection_type    = "INTERNET"
  description        = aws_lambda_function.lambda_function.function_name
  integration_method = "POST"
  integration_uri    = aws_lambda_function.lambda_function.invoke_arn
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api_gateway.execution_arn}/*/*"
}

resource "aws_cloudwatch_log_group" "main_api_gw" {
  name              = "/aws/api-gw/${aws_apigatewayv2_api.api_gateway.name}"
  retention_in_days = 14
}

# ---------------------------------------- OUTPUT -----------------------------------


output "api_gateway_id" {
  value = aws_apigatewayv2_api.api_gateway.id
}

output "api_gateway_integration_id" {
  value = aws_apigatewayv2_integration.gateway_integration.id
}






