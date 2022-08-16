module "shared_vars" {
    source = "../shared_vars"
}

resource "aws_s3_bucket" "site" {
  bucket = "${module.shared_vars.app_name}-${module.shared_vars.env}"
  tags = module.shared_vars.common_tags
}

resource "aws_s3_bucket_acl" "site_acl" {
  bucket = aws_s3_bucket.site.id
  acl    = "private"
}

output "site_id" {
    value =   aws_s3_bucket.site.id
}