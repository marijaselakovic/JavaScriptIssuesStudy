#!/bin/bash

printf "${PWD##*/}: "
../../measureDiffSize.sh cheerio_before/lib/api/attributes.js cheerio_after/lib/api/attributes.js
