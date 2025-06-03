#!/bin/bash

mkdir -p ./dist
npx tailwindcss -i ./src/input.css -o ./dist/build.css --minify
cp ./CNAME ./dist
cp ./src/index.html ./dist
cp ./src/scripts.js ./dist
cp -r ./src/img ./dist
cp ./src/privacy.html ./dist
cp -r ./src/versions ./dist
