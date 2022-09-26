start:
	docker-compose \
		-f docker-compose.yaml \
		up \
		--build \
		server

clean:
	docker-compose \
		down --rmi all --volumes \
	&& docker-compose \
		rm -f
