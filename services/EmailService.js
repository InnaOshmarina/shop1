const SendGridMail = require('@sendgrid/mail');
const globalConfig = require('../config/globalConfig');

class EmailService {

    static sendEmail(data) {
        SendGridMail.setApiKey(globalConfig.sendGridKey);

        const emailData = {
            to: [{
                email: data.to
            }],
            from: {
                email: data.from || globalConfig.noreplyEmail
            },
            content: [{ // TODO: Get email template from Mongo
                type: 'text/html',
                value: `<div>${data.message}</div>`
            }],
            subject: `${data.subject}`
        };


        return SendGridMail.send(emailData);
    }
}

module.exports = EmailService;
