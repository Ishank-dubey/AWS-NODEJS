/**
 * Simple S3 bucket operations
 */
var AWS = require('aws-sdk');

var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users

var myBucket = 'ishankserverless';

var params = {
		  Bucket: myBucket /* required */
		};
		s3.getBucketAccelerateConfiguration(params, function(err, data) {
		  if (err) console.log(err, err.stack); // an error occurred
		  else    { 
			  	console.log(data);
			  	console.log('success');
			  	params.Key = 'index.html';  	
			  	getObject();
		  }           // successful response
		});
		
		function getObject(){
		 s3.getObject(params, function(err, data) {
			   if (err) console.log(err); // an error occurred
			  else     console.log(data);           // successful response
			 });		
		 }