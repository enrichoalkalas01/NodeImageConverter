const Multer = require('multer')
const Path = require('path')
const Sharp = require('sharp')

// function multer to save files
exports.fileStorageEngine = Multer.diskStorage({
    // cb is a funtion to save file data to the path
    destination: (req, file, cb) => {
        console.log(file)
        cb(null, Path.join(__dirname, '..', 'Public/Images'));
        
    },
    // cb is a funtion to save file data to the name files in the path
    filename: (req, file, cb) => { cb(null, Date.now() + '--' + file.originalname)}
})

// module.exports = {
//     storage : new Multer.diskStorage({
//         destination : Path.resolve(__dirname, ".","uploads"),
//         filename : function(req, file, callback) {
//             callback(null, file.originalname)
//         }
//     })
// }