# SiMem

SiMem is a take on the traditional Simon Says game reassembled into my own original style with a modern feature added to it. SiMem is an easy to use game primarily targeted towards a general demographic of anyone looking to play a game and improve  their memory skills while having fun.
With SiMem's Night Mode it allows for a more modern approach to app design allowing the user to safely play the game at night. We all like to go on our phones at night but it's also important to minimise eye strain where possible. 
The skill to entry level is quite low on this game making it suitable for people of all ages.

# UX

## How To Play
When starting to play any game the first question that comes to mind is "How do I play this?". In big font a "How To Play" button has been added to the screen that a user can click on to prompt a pop up. 
The pop up is from an alert() added to the button. It outlines clearly the steps to start the game, how to play the game, what to do if you mess up, winning criteria and a good luck message to finish off.
This ensures that nobody can arrive to the page and not know how to proceed with playing the game.   

## Clicks To Play
As SiMem is for anyone the one aspect of the app that effects everyone is how many clicks it takes to begin the game. SiMem has been specifically designed to be playable in 2 clicks, 4 if one decides to select the "How To Play" button. 
All clicks are also on the one page meaning once the page has been initially loaded there are no more pages to load thereafter. From personal experience having to sive through pages just to play the game each time can be extremely off putting over multiple plays. 

## User Ambitions
The user group for SiMem is anyone with basic computer skills simply look to play a game trying to: 

* Get a small win in their day
* Play something easy and fun
* Be somewhat mentally stimulated
* relax and unwind

These ambitions are achieved through SiMems: 

* Having an easy to use gaming experience
* Encouraging messages in the How To Play pop up and Win! message when one completes the game
* Having a night mode feature to reduce harsh lighting and flashes throughout the gameplay
* Minimalistic approach via as few buttons as possible with only one page to play the game compared to other apps nowadays.

## User Stories

As a general user who plays games on the internet, I want to:

 * See my progress as I play through the game.
 * Have quick access to the rules of the game displayed in a simple form.
 * Start playing the game in as few clicks as possible.
 * Play the game with a simplistic layout so I can focus on the game.
 * Have the option to reduce the intensity of the brightness on my screen. 

## Mockup Design

Originally SiMem was under the name of Membrane in an initial brainstorm idea. As you can see some features of the original can be seen in the final edition of the game. 

### Link To Membrane:
https://drive.google.com/file/d/1oxHTh8vgk1qMRi2Tmb8fSshU0MzsMpMC/view?usp=sharing


# features

## Night Mode
The night mode feature has two purposes. Upon clicking the Night Mode button it turns the blue sky background, light blue banner and yellow image all into the night sky with the opacity decreased on the game options section to reduce intensity of flashes. 

It serves both the purpose of:

 * Changing the mood from bright and entertaining to calm and relaxing depending on the environment and feelings of the user.
 * Reduce intensity of screen brightness through the opacity and using the dark black background of the night sky. 

## Level Counter display
Next to the Night Mode button we have the level counter display. When the user powers up the game it starts with the display set to 1 to show that the user is on the first level. 

As you the user progresses through the game the counter will go up by 1 to reflect each level the user is on. Once the user passes the 6th level they will have completed the game where the Level Display Counter will convey "Win!". This lets the user know they have successfully completed the game. 

If the user gets something incorrect the Display will convey "No!" to show that they did not match what the computer selected. 

## Power 
Once the user has selected the power button this will prompt the computer to begin the game. The game is completely unresponsive until the Power button is selected. 

## How To Play
The "How To Play" button brings the user to another page showing the user the rules of the game, winning criteria and what to do if an incorrect option is selected. Below that is another button "Back To SiMem" to bring the user back to the game. 

## options
In first the level the computer will highlight one of the squares and then wait for the user to select that square. Each level will add another highlighted square to the sequence every level until the user is finally prompted to complete the 6th level before completing the game. 


# Features Left To Implement

## More Levels button

If time was on my side I would change the value input of 6 for the winning criteria to a variable called levelWin. Following that I would create a function called moreLevels() that when the user clicked a "More Levels" button on the game banner an event lister would be activated adding +5 to the LevelWin variable. 

This allows for both longer version of the game and since it is a memory game that gets harder with each level you would also be increasing the difficulty later in the game. 

# Technologies Used

 * HTML, CSS and Javascript were the programming languages used in the coding of this project.
 * For scaling Bootstrap CDN was used to add a more responsive website
 
# Testing 

### As a general user who plays games on the internet, I want to see my progress as I play through the game

The level display counter increments by 1 every time the user completes a level. This notifies them that they have progressed to the next round. Once they have completed they game they will know as the display counter will say "WIN!".

### As a general user I want to have quick access to the rules of the game displayed in a simple form

In big writing there is a How To Play button which takes the user to another page with the instructions simply laid out in bullet points. 

### As a general user I want to Start playing the game in as few clicks as possible.

Once the user is familiar with the instructions they can begin the game in as little as 2 clicks and won't have to load through endless menus before getting to the game. Simply power on as instructed and click the Start button to begin. 

If they are new to the website in 4 clicks they can be playing the SiMem game via clicking How To Play, Back To Game and then proceeding to Power on the game and Start to begin.

### As a general user I want to Play the game with a simplistic layout so I can focus on the game.

When the user loads the website they are given all options to begin the game in one row above the options panel. If they are new to the site they can access all the instructions layed out simply in bullet points on the How To Play page. 

This way there is no question on how to navigate the game and keep the focus on beating SiMem

### As a general user I want to Have the option to reduce the intensity of the brightness on my screen.

Testing completed with the lights off while in the dark to evaluate the difference in intensity of the light. 

When the user selects the Night Mode button the blue sky background is replace with the dark night sky. Instantly the strain on the users eyes are reduced due to the lack of white light being projected from the screen from the bright colour blue. 

The opacity factor on the options instantly comes into play in order to reduce the harsh bright effect of the flash while playing the game. 



