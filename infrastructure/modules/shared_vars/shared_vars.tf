locals {
  app_name = "geniusapc"
  env      = terraform.workspace
}

# _________________________________________OUTPUT _______________________

output "app_name" {
  value = local.app_name
}

output "env" {
  value = local.env
}

output "common_tags" {
  value = {
    Name        = local.app_name
    Environment = terraform.workspace
  }
}
