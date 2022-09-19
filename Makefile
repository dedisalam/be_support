

all: 
	docker container stop backend-production || true
	docker system prune -f
	rm -rf ./dist
	npm run build
	docker build -t dedisalam/be_support -f docker-prod.Dockerfile .
	docker push dedisalam/be_support
	docker rmi -f dedisalam/be_support
	docker compose -f docker-prod.yml up -d

dev:
	docker compose -f docker-dev.yml up -d