docker build -f configs/docker/Dockerfile -t be-testing .
docker-compose -f configs/docker/docker-compose.yml up -d