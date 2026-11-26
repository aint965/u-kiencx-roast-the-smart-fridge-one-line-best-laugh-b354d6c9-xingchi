import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge shows me ads for milk while I'm staring at the milk, like a waiter reading the menu to the chef.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
