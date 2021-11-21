import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendMail(event, context) {
  try {
    const result = await ses.sendEmail({
      Source: 'falencelemungoh@gmail.com',
      Destination: {
        ToAddresses: ['falencepixelate@gmail.com', 'falence.lemungoh@ubuea.cm'],
      },
      Message: {
        Body: {
          Text: {
            Data: 'Hello from Falence Pixelate!',
          },
        },
        Subject: {
          Data: 'Test Mail',
        },
      },
    }).promise();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const handler = sendMail;


