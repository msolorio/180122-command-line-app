const performAsyncAction = require('./performAsyncAction');
const Prompt = require('../prompt/Prompt');

const commandSchema = {
  properties: {
    command: {
      description: 'Enter a command ("exit" to exit)',
      required: true,
      // specifies an error message
      message: 'No command was entered'
    }
  }
};

const commandPrompt = new Prompt(commandSchema);

function initializeCommandPrompt() {
  commandPrompt.trigger()
    .then((response) => {
      return performAsyncAction(response.command);
    })
    .then((completionMessage) => {
      if (completionMessage !== 'exit') {
        console.log(completionMessage);
        initializeCommandPrompt();
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

module.exports = initializeCommandPrompt;
