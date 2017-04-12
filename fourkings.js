/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');


const languageStrings = {

    'en-US': {
        translation: {
            FINSHED_GAMES:[
            ],
            RHYMES: [
                'bat',
                'shoe',
                'glitch',
                'echo',
                'time',
                'boat',
                'car',
                'soup',
                'movie',
                'smart',
                'button',
                'tree',
                'rock',
                'orange...lol'
            ],
            CATEGORIES: [
            'car brands',
            'basketball teams',
            'baseball teams',
            'Music genres',
            'state capitols',
            'band names',
            'soda flavours',
            'pizza toppings',
            'beer brands',
            'vodka brands',
            'desserts',
            'cereal brands',
            'fast food chains'

            ],
            GAMES: [
                "Waterfall! Starting with whoever drew the card, the person to the left of you can't stop drinking until you do.",
                "Waterfall! Starting with whoever drew the card, the person to the left of you can't stop drinking until you do.",
                "Waterfall! Starting with whoever drew the card, the person to the left of you can't stop drinking until you do.",
                "Waterfall! Starting with whoever drew the card, the person to the left of you can't stop drinking until you do.",
                "You drew a two of hearts. Pick someone less drunk than you to have a drink",
                "You drew a two of diamonds. Pick someone to drink whos not driving home tonight. seriously.",
                "You drew a two of clubs. Pick a poor soul to take a drink.",
                "You drew a two of spades. Pick someone who looks lonely to take a drink.",
                "Lucky you! You drew of three of hearts. Take a drink. ",
                "Congratulations. You drew a three of diamonds. Take a drink.",
                "Another one. You drew a three of clubs. Take another one.",
                "You look thirsty, and you drew a three of spades. Quench your thirst.",
                "Four of hearts. Time to drive. Current player starts and may go in either direction.",
                "Four of diamonds. Time to drive. Current play starts and may go in either direction.",
                "Four of clubs. Grab your keys, its time to drive. Current play starts and may go in either direction.",
                "Four of spades. Vroom Vroom. Time to drive. Current play starts and may go in either direction.",
                "Five of hearts.The current player is the viking master.",
                "Five of diamonds. You have slain the viking master.",
                "Five of clubs. You are now the viking master. Congratulations",
                "Five of spades. You are the viking master. Congratulations, brother.",
                "six of hearts....... whoever is last to put their thumb on the table must drink",
                "six of diamonds....... whoever is last to put their thumb on the table must drink",
                "six of clubs....... whoever is last to put their thumb on the table must drink",
                "six of spades....... whoever is last to put their thumb on the table must drink",
                "seven of hearts. Put your hands in the air and wave them like you just dont care",
                "seven of diamonds. I hope your hands are up",
                "seven of clubs. insert clever comment about putting your hands up",
                "seven of spades. Reach for the sky - Woody",
                "eight of hearts. mate. I drink, you drink",
                "eight of diamonds. Mate. Pick a drinking partner",
                "eight of clubs. Mate. Pick a victim to drink with",
                "eight of spades. Mate. Pick someone whos not driving to take a drink.safety first",
                "five",
                "six",
                "seven",
                "eight",
                "nine",
                "ten",
                "eleven",
                "tweleve",
                "jack of hearts. Its a good day to be a dude. All guys drink.",
                "jack of diamonds. Its a bad day to be a guy. All dudes drink.",
                "jack of spades. Its always the weekend when you are a robot. All guys drink.",
                "jack of clubs. If you stand when you pee, take a drink.",
                "queen of hearts.Ladies night. If you aren't pregnant, take a drink. If you are, please go home.",
                "queen of diamonds. Ladies, drink until the guy to the right of you is attractive. Actually, that might take too long. Just take one drink.",
                "Queen of spades. Ladies get to drink. Guys get to watch ",
                "queen of clubs. beyonce says drink. so drink!",
                "one",
                "two",
                "three",
                "four"
            ],
            WELCOME: 'Welcome all sober ones. Lets change that. Say draw card to begin, or ask me how to play.',
            SKILL_NAME: 'Kings Cup',
            GET_GAME_MESSAGE: " Drawing card...",
            VIKING_MESSAGE: "You play vikings by putting your fingers on your head like horns.",
            HELP_MESSAGE: 'You can ask to draw a card, or ask how to play',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Thanks for playing. Remember, I can get you an ride!',
            INSTRUCTIONS: 'Each player must draw a card from the deck by saying draw card. They must then do whatever I say. The game ends when all four king cards have been drawn.',
            HOWTOWIN: 'The player who is the most drunk wins! seems simple, right?'
        },
    },
};
// */there is an event called "x", launch code */
const handlers = {
    /* Just opening the skill*/
    'LaunchRequest': function () {
        this.emit('Welcome');
    },
    /*Alexa get me fact */
    'GetNewCardIntent': function () {
        this.emit('NewCard');
    },
    'Getinstruction' : function() {
       const speechOutput=this.t('INSTRUCTIONS');
       this.emit(':tell',speechOutput)
   },
   'HowToWin' : function(){
       const speechOutput=this.t('HOWTOWIN');
       this.emit(':tell',speechOutput)
   },
    'NewCard': function () {
       // Get a random space fact from the space facts list
       // Use this.t() to get corresponding language data
       const gameArr = this.t('GAMES');
       const rhymesArr = this.t('RHYMES');
       const catsArr = this.t('CATEGORIES');
       const randRhyme = rhymesArr[Math.floor(Math.random() * rhymesArr.length)];
       const randCat = catsArr[Math.floor(Math.random() * catsArr.length)];
       const gameIndex = Math.floor(Math.random() * gameArr.length);
       const randomGame = gameArr[gameIndex];
       const finishedGame =this.t('FINSHED_GAMES');
       gameArr[gameIndex] = gameArr[gameArr.length];
       gameArr.pop();
       var Game;
       var Count = 5;
       var word;
       if(randomGame == "one"){
        Game = "You pulled King of hearts ";
        Count--;
        if(Count == 1){
            Count = "YOU ARE THE KING CLAIM YOUR DRINK!!!"
        }
        const speechOutput = Game + Count;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "two"){
        Game = "You pulled King of diamonds ";
        Count--;
        if(Count == 1){
            Count = "YOU ARE THE KING CLAIM YOUR DRINK!!!"
        }
        const speechOutput = Game + Count;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "three"){
        Game = "You pulled King of spades ";
        Count--;
        if(Count == 1){
            Count = "YOU ARE THE KING CLAIM YOUR DRINK!!!"
        }
        const speechOutput = Game + Count;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "four"){
        Game = "You pulled King of clubs ";
        Count--;
        if(Count == 1){
            Count = "YOU ARE THE KING CLAIM YOUR DRINK!!!"
        }
        const speechOutput = Game + Count;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "five"){
        Game = "You pulled nine of hearts";
        word = " the first rhyme word is " + rhymesArr[randRhyme]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "six"){
        Game = "You pulled nine of diamonds";
        word = " the first rhyme word is " + rhymesArr[randRhyme]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "seven"){
        Game = "You pulled nine of clubs";
        word = " the first rhyme word is " + rhymesArr[randRhyme]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "eight"){
        Game = "You pulled nine of spades";
        word = " the first rhyme word is " + rhymesArr[randRhyme]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "nine"){
        Game = "You pulled ten of hearts";
        word = " the category is " + catsArr[randCat]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "ten"){
        Game = "You pulled ten of diamonds";
        word = " the category is " + catsArr[randCat]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "eleven"){
        Game = "You pulled ten of spades";
        word = " the category is " + catsArr[randCat]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else if(randomGame == "tweleve"){
        Game = "You pulled ten of clubs";
        word = " the category is " + catsArr[randCat]
        const speechOutput = Game + word;
        this.emit(':tell', speechOutput);
       }
       else{
        // Create speech output
        const speechOutput = this.t('GET_GAME_MESSAGE') + randomGame;
        this.emit(':tell', speechOutput);
       }
    },
    'Welcome': function () {
       // Create speech output
       const speechOutput = this.t('WELCOME');
       this.emit(':tell', speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
