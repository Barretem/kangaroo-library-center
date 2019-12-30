#!/bin/bash
echo "build project"
yarn --frozen-lockfile && yarn build

echo "启动项目"
yarn start:prod
