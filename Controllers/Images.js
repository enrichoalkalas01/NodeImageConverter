const Sharp = require('sharp')
const FS = require('fs')
const Path = require('path')

exports.View = (req, res) => {
    res.send('image here..')
}

exports.Process = async (req, res) => {
    console.log(req.file)
    
    await Sharp(req.file.path)
    // .resize({ width: 360 }) // resize by width
    // .resize(2500) // resize by bytes
    .resize(1750) // resize by bytes under 500kb
    .toFile(`${ req.file.destination }/${ Date.now() }--resized.${ req.file.mimetype.replace('image/','') }`)

    FS.unlinkSync(req.file.path)
    res.send('Process Images Here..')
}