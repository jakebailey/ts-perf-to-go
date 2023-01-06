# ts-perf-to-go

This repo contains scripts which convert ts-perf's `.benchmark` files to Go's benchmark output format.

For example:

```sh
$ ./tsbenchstat.mjs main-2.benchmark pr49929-2.benchmark
name                                   old s/op   new s/op   delta
Angular_v16_17_1_parseTime             3.93 ± 0%  3.93 ± 1%    ~     (p=0.278 n=9+10)
Angular_v16_17_1_parseTimeRaw          2.79 ± 0%  2.79 ± 0%    ~     (p=0.938 n=7+10)
Angular_v16_17_1_bindTime              1.11 ± 3%  1.12 ± 2%    ~     (p=0.436 n=10+10)
Angular_v16_17_1_bindTimeRaw           0.79 ± 2%  0.79 ± 2%    ~     (p=0.374 n=10+10)
Angular_v16_17_1_checkTime             10.0 ± 1%  10.0 ± 1%    ~     (p=0.971 n=10+10)
Angular_v16_17_1_checkTimeRaw          7.07 ± 1%  7.07 ± 1%    ~     (p=0.953 n=10+10)
Angular_v16_17_1_emitTime              9.07 ± 1%  9.06 ± 1%    ~     (p=0.579 n=10+10)
Angular_v16_17_1_emitTimeRaw           6.44 ± 1%  6.43 ± 1%    ~     (p=0.806 n=10+10)
Angular_v16_17_1_totalTime             24.1 ± 1%  24.0 ± 0%    ~     (p=0.063 n=9+9)
Angular_v16_17_1_totalTimeRaw          17.1 ± 0%  17.1 ± 1%    ~     (p=0.868 n=10+10)
```
