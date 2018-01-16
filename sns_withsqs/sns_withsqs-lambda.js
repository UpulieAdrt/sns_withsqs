let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("succesfully triggered");

	sns.publish({
		Message: 'Message Body for the SQS',
		Subject: 'Subject_MessagetoSQS',
		MessageAttributes: {
			'name': {
				DataType: 'String',
				StringValue: 'fname'
			},
			'class': {
				DataType: 'String',
				StringValue: 'class2'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:New_upuliesqs'
	}).promise()
		.then(data => {
			// your code goes here
       
	    console.log("successfully published to sqs",data);

		})
		.catch(err => {
			// error handling goes here

		console.log("Error encountered" ,err );	
		});



}