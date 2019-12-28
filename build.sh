#!/bin/bash
set -e
cd `dirname $0`
echo "检查yarn"

if ! which yarn -v &> /dev/null ;then
  echo "安装yarn"
  npm i -g yarn
fi

if $NODE_ENV === 'production' ;then
  rm -rf ../production
  mkdir ../production
  cp ./* ../production/
  cd ../production/
  echo "拷贝对应的环境文件"
  echo $PWD
  cd "${$PWD}/source"
  cp "${$PWD}/production.env" "${$PWD}/source/production.env"
else
  rm -rf ../development
  mkdir ../development
  cp ./* ../development/
  cd ../development/
  echo "拷贝对应的环境文件"
  echo $PWD
  cd "${$PWD}/source"
  cp "${$PWD}/development.env" "${$PWD}/source/development.env"
fi

echo "build project"
yarn --frozen-lockfile && yarn build

echo "启动项目"
yarn start
