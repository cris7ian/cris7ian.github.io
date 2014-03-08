#!/bin/sh
grunt build
cd dist
git add -A
git commit -am "New Client Version"
git push origin master
heroku open