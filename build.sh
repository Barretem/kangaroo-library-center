#!/bin/bash
echo "build project"
yarn --frozen-lockfile

echo "启动项目"
yarn start
