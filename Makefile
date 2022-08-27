include .env.production.local
export $(shell sed 's/=.*//' .env.production.local)


all: clean \
build-source \
build-image \
push-image \
run

build-image:
	docker build -t ${OWNER_APP}/${APP_NAME} .

build-source:
	npm install
	npm run build

push-image:
	docker push ${OWNER_APP}/${APP_NAME}
	docker rmi -f ${OWNER_APP}/${APP_NAME}

clean:
	docker-compose down || true
	rm -rf dist
	docker system prune -f

run:
	docker-compose up -d


