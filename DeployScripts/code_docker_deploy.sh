#!/bin/bash
set -ev

cd docker/
docker build -f Dockerfile.code -t tds_iriscode .
docker tag tds_iriscode:latest osucass/tds_iriscode:$BRANCH
docker push osucass/tds_iriscode:$BRANCH