variable "app_name" {}

locals {
  env = terraform.workspace
}

resource "aws_s3_bucket" "site" {
  bucket = "${var.app_name}-${local.env}"

  tags = {
    Name        = "${var.app_name}"
    Environment = local.env
  }
}

resource "aws_s3_bucket_acl" "site_acl" {
  bucket = aws_s3_bucket.site.id
  acl    = "private"
}

output "site_id" {
    value =   aws_s3_bucket.site.id
  
}