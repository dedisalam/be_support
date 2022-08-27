include .env.production.local
export $(shell sed 's/=.*//' .env.production.local)

APP_NAME = dedisalam/be_support

all: clean \
build-source \
build-image \
run

build-image:
	docker build -t ${APP_NAME} .

build-source:
	npm install
	npm run build

clean:
	docker system prune -f
	docker rmi -f ${APP_NAME}

run:
	docker run -d -it -p ${PORT}:${PORT} ${APP_NAME}

