all:
	npm run build && \
	docker image prune && \
	docker-compose up -d --build

dev:
	npm run dev

delete:
	docker-compose down