#!/bin/bash

printf "${PWD##*/}: "
../../measureDiffSize.sh chalk_before.js chalk_after.js
