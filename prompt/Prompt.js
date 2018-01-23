const prompt = require('prompt');

function Prompt(schema) {
  this.schema = schema;
}

Prompt.prototype.trigger = function() {
  return new Promise((resolve, reject) => {
    prompt.start();

    prompt.get(this.schema, (error, response) => {
      if (error) reject(error);

      console.log(
        'response in trigger:',
        response
      );

      resolve(response);
    });
  });
}

module.exports = Prompt;
