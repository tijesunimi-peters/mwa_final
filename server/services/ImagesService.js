const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID,
    region: "us-east-2"
});

const s3 = new aws.S3()

class ImageService {
    static upload = multer({
        storage: multerS3(
            {
                s3: s3,
                bucket: 'farmart-product-images',
                acl: 'public-read',
                metadata: function (req, file, cb) {
                    cb(null, {fieldName: 'TESTING META_DATA!'});
                },
                key: function (req, file, cb) {
                    cb(null, Date.now().toString())
                }
            }
        )
    })
}

module.exports = ImageService;
