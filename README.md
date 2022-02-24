# wordle-with-friends

## Overview

**Wordle with Friends** is a Wordle game clone that allows users to create a 5-letter mystery word that other users can attempt to solve in 6 guesses. Users can rate the difficulty of the word puzzles they have completed and flag any words that do not meet World with Friend's word requirements. 
Link to the original Wordle game: https://www.nytimes.com/games/wordle/index.html
<br>

## MVP
- Users can sign-up & login to WordleWithFriends
- Users can create their own Wordle game 
- Users can play Wordle games created by other users & leave a difficulty rating
- The game has conditional design (dots will change color if the guessed letter is correct)
- Full CRUD capabilities between the game (index, show, create, delete) & ratings (show, create, edit, delete)

## Goals
- Create a well-designed, easy to navigate website for users to create their own wordles and play wordles created by other users. 

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | |
|   React Router   | |
|   Axios          |  |
| React Bootstrap  | Styling library built specifically for React|
|    Ruby on Rails | Backend |
|    CORS          |  |

<br>

### Client (Front End)

#### Wireframes

![wireframe1](https://user-images.githubusercontent.com/91965654/155563100-bcc1e30d-0399-43e1-9e5b-91155edb03ed.png)
![wireframe2](https://user-images.githubusercontent.com/91965654/155563104-9df77f90-1afd-4a31-8d29-2fb8a41edc7c.png)
Link to wireframes: https://www.figma.com/file/vny95Kohk4AOCBbce6Z0hp/WordleWithFriends?node-id=0%3A1

#### Component Tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ NavBar.jsx
      |__ CreateWord.jsx
      |__ DeleteWord.jsx
      |__ CreateRating.jsx
      |__ EditRating.jsx
      |__ DeleteRating.jsx
|__ services/
      |__ apiConfig.jx
      |__ users.js
      |__ words.js
      |__ wordGames.js
      |__ ratings.js
|__ screens
      |__ WordList.jsx
      |__ WordGame.jsx
      |__ CreateWord.jsx
      |__ Login.jsx
      |__ Signup.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal            |    H     |      3 hrs      |      hrs     |     hrs    |
| Setup  Backend      |    H     |      4 hrs      |      hrs     |     hrs    |
| Backend full CRUD   |    H     |      2 hrs      |      hrs     |     hrs    |
| Login & Sign Up Form|    H     |      2 hrs      |      hrs     |     hrs    |
| Build word game (basic)    |    H     |      6 hrs      |      hrs     |     hrs    |
| Authorizations on words|    H     |      3 hrs      |      hrs     |     hrs    |
| Words CRUD    |    H     |      2 hrs      |      hrs     |     hrs    |
| Ratings CRUD    |    H     |      2 hrs      |      hrs     |     hrs    |
| Add conditional styling    |    3 H     |      hrs      |      hrs     |     hrs    |
| Styling             |    H     |     8 hrs      |      hrs     |     hrs    |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model
![ERD - Wordle with Friends](https://user-images.githubusercontent.com/91965654/155542070-6e7add24-e88b-4539-9ac5-a376b394de39.png)
<br>

***

## Post-MVP
- Implement conditional design on the game's keyboard (letters guessed witll change color)
- Users can view their game stats on their profile (total number of games played, average number of guesses)

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.



