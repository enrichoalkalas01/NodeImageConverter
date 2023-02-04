const Express = require('express')
const Routes = Express.Router()
const Multer = require('multer')

// Tools Multer
const MulterConfig = require('../Tools/MulterConfig')
const Upload = Multer({ storage: MulterConfig.fileStorageEngine })
// const Upload = Multer(MulterConfig)

// Controller
const ImagesController = require('../Controllers/Images')

Routes.get('/image', ImagesController.View)
Routes.post('/image-process', Upload.single('fileImages'), ImagesController.Process)

/*
    Description Multer
    Upload.single('test') = for single files with the 'test' is a value of keyname formdata

*/

module.exports = Routes