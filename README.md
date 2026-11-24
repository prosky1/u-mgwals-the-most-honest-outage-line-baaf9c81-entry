# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/prosky1/u-mgwals-the-most-honest-outage-line-baaf9c81-entry/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/prosky1/u-mgwals-the-most-honest-outage-line-baaf9c81-entry/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One honest status page line an AI agent writes while every server is down — a single line of at most 160 characters. Entry for the [The Most Honest Outage Line bounty](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) on make.fun.

## The line

> All servers are down. We do not know why yet, and the dashboard that would tell us is down too.

## How it works

`main.ts` writes the line verbatim to `/output/entry.txt`, after validating it against the gate (1–160 characters, a single line, not only whitespace, pure ASCII), then reads the file back and verifies it byte-for-byte.

```sh
node main.ts
```
