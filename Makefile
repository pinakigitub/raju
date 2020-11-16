.PHONY: start test help stop startd
.DEFAULT_GOAL: help

default: help

help:   ## Output available commands to execute commands using docker compose
	@echo "Available commands:"
	@echo
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

start:  ## Run a development environment using docker compose on port 3000
	@docker-compose -f docker-compose.yml build
	@docker-compose -f docker-compose.yml up

startd: ## Run a development environment using docker compose in detached mode on port 3000
		@docker-compose -f docker-compose.yml build
		@docker-compose -f docker-compose.yml up -d

test:   ## Run the current test suite using docker compose
	@docker-compose -f docker-compose.yml build test
	@docker-compose -f docker-compose.yml run --rm test

stop:   ## Stop the developmeent environment using docker compose
	@docker-compose -f docker-compose.yml down
