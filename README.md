A command line app on a running node process.

I initially wanted to create an inventory command line app to explore a few
ideas with object oriented JavaScript via prototypal inheritance. It soon dawned
on me that in order to have the user of the application interact directly with
the data model and not just a persistence layer (JSON file) I would need to have
the app running on a continuous node process.

This prototype app demonstrates just that.

Run the app
```
git clone git@github.com:msolorio/180122-command-line-app.git

npm i

node index.js
```
