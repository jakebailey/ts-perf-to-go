#!/usr/bin/env node

import fs from "fs";
import foregroundChild from "foreground-child";
import tmp from "tmp";
import path from "path";

import { convert } from "./lib/convert.mjs";

const { name: tmpDir } = tmp.dirSync({ prefix: "tsbenchstat" });

const childArgs = process.argv.slice(2).map((filename, index) => {
    const content = convert(filename);
    const outPath = path.join(tmpDir, `${index}.txt`);
    fs.writeFileSync(outPath, content);
    return `${path.basename(filename)}=${outPath}`;
});

foregroundChild("benchstat", childArgs);
