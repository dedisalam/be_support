# app name should be overridden.
# ex) production-stage: make build APP_NAME=<APP_NAME>
# ex) development-stage: make build-dev APP_NAME=<APP_NAME>

APP_NAME = dedisalam/be_support
APP_NAME := $(APP_NAME)

.PHONY: build

all: clean build

# Build the container image - Production
build:
	npm install
	npm run build
	docker build -t ${APP_NAME}\
		-f Dockerfile .

# Clean the container image
clean:
	docker rmi -f ${APP_NAME}

# Run the container image
run:
	docker run -d -it -p 11000:11000 ${APP_NAME}

