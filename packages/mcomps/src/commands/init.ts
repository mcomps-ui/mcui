import path from "path";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";
import { Command } from "commander";
import { z } from "zod"

export const initOptionsSchema = z.object({
  cwd: z.string(),
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  defaults: z.boolean(),
  force: z.boolean(),
  silent: z.boolean(),
  isNewProject: z.boolean(),
  srcDir: z.boolean().optional(),
})

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
  .action(async (components, opts) => {
    try {
      const options = initOptionsSchema.parse({
        cwd: path.resolve(opts.cwd),
        isNewProject: false,
        components,
        ...opts,
      })

      await runInit(options)

      logger.log(
        `${highlighter.success(
          "Success!"
        )} Project initialization completed.\nYou may now add components.`
      )
      logger.break()
    } catch (error) {
      logger.break()
      handleError(error)
    }
  })
   
export async function runInit(
  options: z.infer<typeof initOptionsSchema> & {
    skipPreflight?: boolean
  }) {}
