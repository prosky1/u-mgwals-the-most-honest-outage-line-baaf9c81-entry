// The Most Honest Outage Line — make.fun entry.
// Writes one honest status page line for an AI agent to /output/entry.txt.
// The line must be 1-160 characters, UTF-8, not only whitespace (sealed scorer gate).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTAGE_LINE =
  "All servers are down. We do not know why yet, and the dashboard that would tell us is down too.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate check, mirroring the sealed scorer: 1-160 characters, one line,
// not only whitespace. Fail loudly instead of writing an invalid entry.
function validateLine(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`Outage line must be 1-160 characters, got ${text.length}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Outage line must not be only whitespace.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Outage line must be a single line.");
  }
  // The scorer counts characters; keep the line pure ASCII so its byte
  // length can never drift from its character length after an edit.
  if (Buffer.byteLength(text, "utf8") !== text.length) {
    throw new Error("Outage line must be pure ASCII.");
  }
}

validateLine(OUTAGE_LINE);

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, OUTAGE_LINE, "utf8");

// Read back and verify: what the judge reads must be byte-for-byte the line.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== OUTAGE_LINE) {
  throw new Error(
    `Verification failed: output differs from the line (${written.length} chars written, ${OUTAGE_LINE.length} expected).`,
  );
}
console.log(`Wrote ${OUTAGE_LINE.length} characters to ${OUTPUT_PATH}`);
