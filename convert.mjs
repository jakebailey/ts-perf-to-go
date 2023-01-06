#!/usr/bin/env node

import { convert } from "./lib/convert.mjs";

console.log(convert(process.argv[2]))
