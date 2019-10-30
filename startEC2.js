'use strict';
const AWS = require('aws-sdk');

module.exports.startEC2 = (event, context, callback) => {
  const ec2 = new AWS.EC2();
  const params = {
    InstanceIds: [
      event.instanceId
    ]
  }

  return ec2.startInstances(params).promise().then(() => {
    callback(null, `Your ${event.instanceId} instance started successfully`);
  }).catch(error => {
    callback(error.message);
  });
};