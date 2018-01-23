let count = 0;

function performAsyncAction(actionName) {
  return new Promise((resolve, reject) => {
    switch(actionName) {
      case 'add':
        setTimeout(() => {
          count += 1;
          resolve(`count added: ${count}`);
        }, 2000);
        return;

      case 'clear':
        setTimeout(() => {
          count = 0;
          resolve(`count cleared: ${count}`);
        }, 2000);
        return;

      case 'exit':
        resolve('exit');
        return;

      default:
        const message = 'action not recognized';
        resolve(message);
        return;
    }
  });
}

module.exports = performAsyncAction;
