terra-format:
	cd terraform && terraform fmt --recursive
terra-check:
	cd terraform &&  terraform init && terraform plan
terra-pre-push: terra-format terra-check
terra-push:
	cd terraform && terraform apply --auto-approve
