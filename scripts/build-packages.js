/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Script for build packages
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
const { exec } = require('child_process')
const concat = require('concat-files')

const distDir = './dist'

console.log('Start building packages...')

exec('npm run build:packages', (error, stdout, stderr) => {
  if (!error) {
    const dependenciesFiles = [
      './node_modules/react-datepicker/dist/react-datepicker.css',
      './node_modules/react-tippy/dist/tippy.css',
    ]

    concat(dependenciesFiles, `${distDir}/omise-react-ui.css`, (err) => {
      if (err) throw err
    })

    console.log(stdout)
  }
  else {
    console.error(stderr)
  }
})
