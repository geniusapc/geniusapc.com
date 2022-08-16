terra-pre-push:
	cd infrastructure && terraform init && terraform plan
terra-push:
	cd infrastructure && terraform apply --auto-approve