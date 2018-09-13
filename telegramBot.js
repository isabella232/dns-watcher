require('dotenv').config();
const logger = require('./logger').verbose;
const request = require('request-promise-native');

function sendUpdate(toSend) {
  if (typeof toSend === 'string') {

    var options = {
      method: 'POST',
      url: 'https://api.telegram.org/bot654177986:AAG2XPtWIQorabuqb6-KLmQF5uP53KGc6ZM/sendMessage',
      headers:
        {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      form: {
        chat_id: '-290489995',
        text: toSend
      }
    };
    request(options)
      .catch(error => {
        logger.error(error); // todo remove dev item
      });
  }

}

module.exports = sendUpdate;
