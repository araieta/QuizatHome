let quizData = [];
let score = 0;

function loadQuiz() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            quizData = shuffleArray(data); // Mescola le domande
            displayQuiz();
        })
        .catch(error => console.error('Error loading quiz:', error));
}

// Funzione per mescolare l'array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question card p-3';
        
        const questionTitle = document.createElement('h2');
        questionTitle.className = 'card-title';
        questionTitle.innerText = `${index + 1} ${item.Question}`; // Numerazione
        questionElement.appendChild(questionTitle);

        item.Choice.forEach(choice => {
            const choiceElement = document.createElement('div');
            choiceElement.className = 'form-check';

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.name = `question${index}`;
            radioInput.value = choice;
            radioInput.className = 'form-check-input';

            const label = document.createElement('label');
            label.innerText = choice;
            label.className = 'form-check-label';
            label.appendChild(radioInput);
            choiceElement.appendChild(label);
            questionElement.appendChild(choiceElement);
        });

        const answerElement = document.createElement('div');
        answerElement.className = 'answer';
        answerElement.style.display = 'none';
        answerElement.innerText = `Risposta corretta: ${item.Answer}`;
        questionElement.appendChild(answerElement);

        const showAnswerButton = document.createElement('button');
        showAnswerButton.className = 'btn btn-info mt-2';
        showAnswerButton.innerText = `Mostra Risposta Corretta ${index + 1}`;
        showAnswerButton.addEventListener('click', () => {
            answerElement.style.display = answerElement.style.display === 'none' ? 'block' : 'none';
        });
        questionElement.appendChild(showAnswerButton);

        quizContainer.appendChild(questionElement);
    });

    const checkButton = document.createElement('button');
    checkButton.className = 'btn btn-primary mt-3';
    checkButton.innerText = 'Controlla le risposte';
    checkButton.addEventListener('click', checkAnswers);
    quizContainer.appendChild(checkButton);

    const resetButton = document.createElement('button');
    resetButton.className = 'btn btn-secondary mt-2';
    resetButton.innerText = 'Reset';
    resetButton.addEventListener('click', resetQuiz);
    quizContainer.appendChild(resetButton);
}

function checkAnswers() {
    score = 0;
    const results = {
        correct: [],
        incorrect: []
    };

    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === item.Answer) {
            score++;
            results.correct.push(item.Question);
        } else {
            results.incorrect.push(item.Question);
        }
    });

    alert(`Hai risposto correttamente a ${score} su ${quizData.length} domande.`);
    document.getElementById('user-section').style.display = 'block';
}

function resetQuiz() {
    score = 0;
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach(answer => {
        answer.style.display = 'none';
    });
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('user-section').style.display = 'none';
}

window.onload = loadQuiz;
