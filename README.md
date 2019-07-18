# Challenge: Rock Paper Scissors (RPS), the web game

## Notes on branches
* The repository for this project is located here: https://github.com/CA-ma/RPS_challenge_npm
* _development_ is currently deployed with Netlify: https://ca-ma-rps.netlify.com/
* _test_ is configured to run tests using End to End (e2e) Training Wheels: https://www.npmjs.com/package/e2e_training_wheels
* _02_migrate_files_from_past_project_ includes files that were scripted originally by the author of this project but were initially committed in a different repository.  The commit history for these files can be found here: https://github.com/CA-ma/RPS_challenge

## Notes on the challenge
This was a nights-and-weekends exercise to bring newly learned JS into practice and to be creative with the e2e Training Wheels NPM package.  This package can implement both unit and feature tests, so it was used by the author to,
1. test the logic of the RPS game mechanics in the style of unit tests of specific functions, 'unit.spec.js', and
2. test the messages that appear on the view that bring attention to the user choices and game outcomes, 'application.feature.js'.

Pay particular attention to the unit tests as they test the inputs and outputs of the methods in 'app.js' as well as the statistical outcomes of the random number generator used to generate Rock, Paper, or Scissors.

## Testing on your terminal
1. Fork the project to a personal repository and clone to a local workspace.
2. In the local workspace, install e2e Training Wheels using the following commands,
```
$ npm init
$ npm i e2e_training_wheels --save-dev
$ node ./node_modules/e2e_training_wheels/dist/install.js
```
3. FROM THE TEST BRANCH run,
```
$ npm test
```
to run the feature and unit tests together.

## User stories for BDD
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

## Authors
Max Aubain

## Acknowledgements
Thank you to Craft Academy for organizing this challenge.