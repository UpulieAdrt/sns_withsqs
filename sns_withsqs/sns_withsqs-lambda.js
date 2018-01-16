let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("succesfully triggered");
	sns.publish({
		Message: 'This is the message for SQS',
		Subject: 'SQS Message subject',
		MessageAttributes: {
			'name': {
				DataType: 'String',
				StringValue: 'sam'
			},
			'class': {
				DataType: 'String',
				StringValue: 'class2'
			}
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new_topicU'
	}).promise()
		.then(data => {
			// your code goes here

			console.log("Published to sqs", data)
		})
		.catch(err => {
			// error handling goes here

			console.log("Error", err);
		});



}