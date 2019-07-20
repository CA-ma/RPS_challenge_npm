# Challenge: Rock Paper Scissors (RPS), the web game
Developed by,
* Max Aubain

## Notes on repository branches
* The `development` branch is used to deploy [the application](https://ca-ma-rps.netlify.com/) with Netlify.
* The `test` branch is configured to run unit and feature tests using [End to End (e2e) Training Wheels](https://www.npmjs.com/package/e2e_training_wheels).
* The `02_migrate_files_from_past_project` branch includes files that were scripted originally by the author of this project but copied from another repository.  If you would like to see the detailed commit commit history for these files, they can be found [here](https://github.com/CA-ma/RPS_challenge/commits/05_see_outcome).

## Notes on the challenge
This was a nights-and-weekends exercise to design a simple web game in JS to be tested with a rigorous testing framework.  e2e Training Wheels can implement both unit and feature tests so it was used by the author to,
1. Test the logic of the RPS game mechanics in the style of unit tests of specific methods in `/src/js/app.js`.  These unit tests are located in `/spec/unit.spec.js`.
2. Test text that appears on the view that bring attention to user choices and game outcomes. These feature tests are located in `/features/application.feature.js`.

## Testing on your terminal
1. Fork the project to a personal repository and clone to a local workspace.
2. In the local workspace, install e2e Training Wheels using [the automated protocol](https://www.npmjs.com/package/e2e_training_wheels#installation) with the following commands,
```
$ npm init
$ npm i e2e_training_wheels --save-dev
$ node ./node_modules/e2e_training_wheels/dist/install.js
```
3. **WHILE SITUATED IN THE TEST BRANCH** use the command,
```
$ npm test
```
to run the feature tests and unit tests sequentially.

## User stories for BDD
User stories were drafted to guide the scripting process in a Behavior Driven Design (BDD) framework.
```
As a player of Rock Paper Scissors (RPS),
In order to know what game I am playing,
I want to see a game title.


As a player of RPS,
In order to play a round of RPS,
I want to play against the computer.

As a player of RPS,
In order to play the game,
I want to choose rock, paper, or scissors each round.

As a player of RPS,
In order to see the outcome of the round,
I want to have a visual cue of who is the winner.
```

## Acknowledgements
Thank you to Craft Academy in Stockholm, Sweden for organizing and providing feedback on this challenge.