# QuizatHome  

## Description
This project is an interactive quiz that uses questions stored in a JSON file. Users can select answers and check their results. The project is built with Node.js and Express and offers a simple and intuitive interface.

## Features
- Load questions from a JSON file
- Randomized display of questions
- Answer selection via radio buttons
- Check answers and display final score
- Option to view the correct answer
- Save a file with final score per user


##Load your data.json with question as below:
```
[
    {
        "Question": "where is the A?",
        "Choice": ["A", "B", "C", "D"],
        "Answer": "A"
    },
    {
        "Question": "where is the Lion?",
        "Choice": ["Jungle", "City", "Moon", "Sea"],
        "Answer": "A"
    }
]
```
## Technologies Used
- Node.js
- Express
- JavaScript
- HTML
- CSS

## Installation

   ```bash
   git clone https://github.com/your-username/quiz-project.git
   cd quizathome
   npm install
   node server.js
   ```


## Project Structure
```
quizathome/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── data.json
│
├── server.js
└── package.json
```
