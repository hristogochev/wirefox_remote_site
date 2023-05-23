#!/bin/bash

mkdir -p ./dist
npx tailwindcss -i ./input.css -o ./build.css
cp ./CNAME ./dist
cp ./index.html ./dist
cp ./build.css ./dist
cp ./scripts.js ./dist
cp -r ./img ./dist/img
cp ./privacy.html ./dist
cp -r ./versions ./dist/versions