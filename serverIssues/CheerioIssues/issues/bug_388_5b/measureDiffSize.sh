#!/bin/bash

printf "${PWD##*/}: "
../../measureDiffSize.sh cheerio_before/lib/render.js cheerio_after/lib/render.js
