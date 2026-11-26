import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge shows me ads for milk while I'm staring at the milk, like a waiter reading the menu to the chef.";

// Validate the roast line against the competition gate before writing it:
// 1-160 characters, a single line (no newline characters), not only whitespace.
if (LINE.length < 1 || LINE.length > 160) {
  console.error(`Invalid roast line: ${LINE.length} characters (must be 1-160).`);
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("Invalid roast line: must be a single line (no newline characters).");
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("Invalid roast line: must not be only whitespace.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
