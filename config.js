import fs, { watchFile, unwatchFile, readFileSync } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

global.owner = [
  ['6289519009370', 'Ekuzika OfC', true],
  ['628889616144', 'Ekuzika', true],
]
// [number, dia creator/owner?, dia developer?]
// Put your number here
global.mods = ['6289519009370'] // Want some help?
global.prems = JSON.parse(readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.wm = 'PANEL EXZ'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(file)
})
