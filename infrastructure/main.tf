module "s3_module" {
  app_name     = var.app_name
  source       = "./modules/s3_module"
}