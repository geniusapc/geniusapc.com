terraform {
  backend "s3" {
    bucket = "geniusapc-terraform-backend-bucket"
    key    = "geniusapc/terraform.tfstate"
    region = "us-east-1"
  }
}

module "s3_module" {
  source = "./modules/s3_module"
}