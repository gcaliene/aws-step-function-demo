'use strict';
const AWS = require('aws-sdk');

module.exports.writeS3 = (event, context, callback) => {
  const s3 = new AWS.S3();
const bucketParams = {
  Bucket : 'sls-logs-bucket',
  ACL : 'public-read'
};

  s3.createBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Location);
    }
  });


  const params = {
    Bucket: 'sls-logs-bucket',
    Body: event.randomNumber,
    Key: 'success!!'
 }

  return s3.putObject(params).promise().then(() => {
    callback(null, `a log writed successfully`);
  }).catch(error => {
    console.log(error)
    callback(error.message);
  });
};