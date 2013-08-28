path = require 'path'
fs = require 'fs'

cli = require '../cli'
{error, warn, info, debug, log} = require('./logger')('utils/dirs')

exports.root = ->
  path.join __dirname, '..', '..'

exports.pwd = ->
  argv = cli.argv()
  
  if argv.base?
    unless fs.existsSync (pwd = path.resolve argv.base)
      error 'Dir informed with [--base] option doesn\'t exist ~>', argv.base
      return null
    else return pwd
  
  path.resolve '.'

exports.relative = (filepath)->
  path.relative exports.pwd(), filepath