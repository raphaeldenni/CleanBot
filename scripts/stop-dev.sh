#!/usr/bin/sh

# Stop dev env
docker compose -f compose-dev.yaml down --rmi 'all'
