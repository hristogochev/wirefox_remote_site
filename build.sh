#!/bin/bash

mkdir -p ./dist
npx tailwindcss -i ./src/input.css -o ./src/build.css --minify
cp ./CNAME ./dist
cp ./src/index.html ./dist
cp ./src/build.css ./dist
cp ./src/scripts.js ./dist
cp -r ./src/img ./dist/img
cp ./src/privacy.html ./dist
cp -r ./src/versions ./dist/versions
