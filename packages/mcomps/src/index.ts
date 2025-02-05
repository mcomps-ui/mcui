#!/usr/bin/env node
import { init } from "@/src/commands/init";
import { Command } from "commander";

import packageJson from "../package.json"

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("mcomps")
    .description("add components and dependencies to your project")
    .version(
      packageJson.version || "1.0.0",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(init);
  // program.addCommand(init).addCommand(add).addCommand(diff);

  program.parse();
}

main();

// export * from "./registry/api"
