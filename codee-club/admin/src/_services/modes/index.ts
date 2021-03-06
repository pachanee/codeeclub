import dedent from 'dedent-js'
import readline from 'readline'

import { randomElement } from '@codee-club/common/dist/utils/random'

const modeArg = process.argv.find((arg) => arg.startsWith('--mode='))
export const MODE = modeArg?.split('=')[1].toLowerCase() ?? 'emu'

const phews = ['Phew; that was close!', 'Good choice bro!']

export const productionWarning = async (filename: string): Promise<void> => {
  const filePathParts = filename.split(/[/\\]/)
  const [file, folder] = [filePathParts.pop(), filePathParts.pop()]
  console.info(`Begin: ${folder ?? ''}/${file ?? ''}`)

  if (MODE !== 'emu') {
    // Warn & require confirmation
    const warning = dedent(`
      
      ******* WARNING *******
       Running in [${MODE.toUpperCase()}] mode
      ***********************

      Are you sure you want to continue? [y|N] `)

    const ui = readline.createInterface({ input: process.stdin, output: process.stdout })
    const result = await new Promise<string>((resolve) => ui.question(warning, (answer) => resolve(answer)))
    ui.close()

    // Kill if no confirmation
    if (result.toLowerCase() !== 'y') {
      console.info(`${randomElement(phews)} Execution cancelled`)
      process.exit(0)
    }
  }
}
