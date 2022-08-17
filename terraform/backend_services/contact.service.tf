data "archive_file" "contact_service" {
  type        = "zip"
  source_dir  = "${path.module}/../../backend/contact"
  output_path = "${path.module}/../files/contact-lambda-function.zip"
}

module "contact_module" {
  filename    = data.archive_file.contact_service.output_path
  serviceName = "contact"
  source      = "../modules/api_gateway_lambda_module"
}



resource "aws_apigatewayv2_route" "get_hello" {
  api_id    = module.contact_module.api_gateway_id
  route_key = "GET /contact"
  target    = "integrations/${module.contact_module.api_gateway_integration_id}"
}