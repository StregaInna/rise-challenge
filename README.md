## Weclome to my solution to the Rise Developer Challenge 

UPDATE: I have resolved the bug. It was fixed by changed the clickhandler in question into an async function. I've left the next paragraph explaining the bug so I can learn from this in the future.

There was a stubborn bug that was not been able to figure out in this solution. The bug was manifesting in the feedbackCard.jscomponent, though its source seemed like it might be elsewhere. When clicking the "take again" button, I got an error telling me that the thunk I was dispatching through react-redux connect was not a function. This was particularly perplexing as it usies the same thunk creator as the "submit" button in the answerForm, and as far as I could tell it was being imported and connected in the same way. My attempts at googling what might be causing this error yielded no fruitful results. I eventually tried changing the click handler to an async function because the submit handler that uses this thunk creator in the answer form was async, and it resolved the problem. It seems that when I try dispatching an async thunk the function dispatching might also need to be async, but it is not fully clear to me why failing to do this would result in the dispatch function being "undefined."

Otherwise I believe this solution is up to the requirements. It populates using the server provided, which I modified slightly by moving the database to a new file and added routes for user-form-state. It uses react to dynamically render the knowledge check blocks upon loading them. It stores user state in the "database" (not an actual database, but a data file on the server end) using my added api routes and reloads a user's state upon their return. In this solution, because I did not implement an actual database on the back end but merely mimic one using memory on the server, that state is not user specific and only persists as long as the server is running. Restarting the server will reset the user's form state, but refreshing the browser will not.  

This solution uses create-react-app on the fron end, as suggested. I've also made use of the redux and react-redux libraries. To run, open a terminal in the server folder use npm install followed by npm run start, then in a different terminal do the same in the client folder.


## Welcome to the Rise Developer Challenge!

### The coding challenge

Your goal is to implement one of Rise's interactive blocks (see [this Rise course](https://rise.articulate.com/share/IUB9zxbEaKjSQ89lw74eevjW1qC7d-54) for more details).

At a minimum, your implementation should:
1. populate your interactive block's configuration from the provided REST API (see [`/server`](/server))
1. use `react` for your UI components
1. persist your interactive block's UI state by extending the provided REST API

What you choose to implement from there is up to you. :)

### Implementation notes:

- your interactive block implementation should live in the [`/client`](/client) directory and have its own `package.json`, `node_modules`, etc.
- feel free to bootstrap your solution with [create-react-app](https://github.com/facebookincubator/create-react-app) (or whatever tools you prefer)
- the beginnings of a REST API lives in [`/server`](/server) and is reachable at http://localhost:5000
  - the REST API currently uses variables as a makeshift in-memory database

### Getting started

To get the REST API up and running on your dev machine:

1. `cd server`
1. `yarn install` (or `npm install`)
1. `yarn start` (or `npm start`)
