import { Command } from "commander";

export const init = new Command()
  .name("init")
  .description("initialiaze your project and install dependencies")
  .argument(
    "[components...]",
    "the components to add or a url to the component"
)
  .option("-y, --yes", "skip confirmation prompt", true)
  .option("-d, --defaults", "use default configuration", false)
  .option("-f, --force", "force overwrite of existing configuration", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory",
    process.cwd()
  )
  .option("-s, --silent", "mute output.", false)
  .option(
    "--src-dir",
    "user the src directory when creating a new project",
    false
  )
  .action(async (components, opts) => { })
