const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');l
 
aws.config.update({
    secretAccessKey: 'PPE+rWLGuhybovfFosmCWzbtlFxZsJ77vfHSOSkt',
    accessKeyId: 'AKIAWTMGP25FAA4MRMO3',
    region: 'us-east-2'

})

const s3 = new aws.S3()
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'farmart-product-images ',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING META_DATA!'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})
module.exports = upload;