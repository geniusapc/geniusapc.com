terra-format:
	cd infrastructure && terraform fmt --recursive
terra-check:
	cd infrastructure &&  terraform init && terraform plan
terra-pre-push: terra-format terra-check
terra-push:
	cd infrastructure && terraform apply --auto-approve
