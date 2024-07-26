let currentOperation;
        let currentAnswer;

        document.addEventListener("keypress", function(e) {
            if (e.key === 'Enter') {
                const userInput = document.getElementById('field').value;
                const userInputValue = parseInt(userInput, 10);
                console.log(currentAnswer);
                console.log(userInputValue);

                if (!isNaN(userInputValue) && currentAnswer === userInputValue) {
                    generateProblemByOperation(currentOperation);
                    addPoints();
                    reset();
                }
            }
        });

        function generateHeaderByOperation(operation) {
            const headers = {
                addition: 'Addition',
                subtraction: 'Subtraction',
                division: 'Division',
                multiplication: 'Multiplication'
            };
            document.getElementById('new-header').textContent = headers[operation] || '';
        }

        function generateProblemByOperation(operation) {
            const operations = {
                addition: addProblems,
                subtraction: subProblems,
                division: divProblems,
                multiplication: multiProblems
            };
            if (operations[operation]) operations[operation]();
        }

        document.getElementById("operation").addEventListener('change', function () {
            const select = document.getElementById("operation");
            currentOperation = select.value;
            generateProblemByOperation(currentOperation);
        });

        document.getElementById('go').addEventListener('click', function() {
            const field = document.getElementById("field");
            const select = document.getElementById("operation");
            currentOperation = select.value;
            document.getElementById("high-score").textContent = "";
            generateHeaderByOperation(currentOperation);
            startTimer();
            showHideDiv();
            field.focus();
        });

        function addProblems() {
            let number = Math.floor(Math.random() * 10) + 1;
            let number2 = Math.floor(Math.random() * 10) + 1;
            let problem = `What is ${number} + ${number2}`;
            currentAnswer = number + number2;
            document.getElementById('math-question').textContent = problem;
        }

        function divProblems() {
            let a, b;
            do {
                a = Math.floor(Math.random() * 100) + 1;
                b = Math.floor(Math.random() * 100) + 1;
            } while (a % b !== 0);
            let problem = `What is ${a} / ${b}`;
            currentAnswer = a / b;
            document.getElementById('math-question').textContent = problem;
        }

        function multiProblems() {
            let number = Math.floor(Math.random() * 10) + 1;
            let number2 = Math.floor(Math.random() * 10) + 1;
            let problem = `What is ${number} * ${number2}`;
            currentAnswer = number * number2;
            document.getElementById('math-question').textContent = problem;
        }

        function subProblems() {
            let number = Math.floor(Math.random() * 20) + 1;
            let number2 = Math.floor(Math.random() * number) + 1;
            let problem = `What is ${number} - ${number2}`;
            currentAnswer = number - number2;
            document.getElementById('math-question').textContent = problem;
        }

        function startTimer() {
            let counter = 30;
            let timer = setInterval(function() {
                document.getElementById("time-left").textContent = counter;
                counter--;
                if(counter == -1) {
                    clearInterval(timer);
                    gameOver();
                    playAgain();
                }
            }, 1000);
        }

        function writeNumber(e) {
            const field = document.getElementById("field");
            let number = e.currentTarget.value;
            field.value = field.value + number;
            field.focus();
        }

        const buttons = document.querySelectorAll(".btn");
        for (const button of buttons) {
            button.addEventListener("click", writeNumber);
        }

        function reset() {
            const inputValue = document.getElementById("field");
            inputValue.value = "";
        }

        let score = 0;
        function addPoints() {
            score++;
            document.getElementById("score").textContent = `${score}`;
        }

        function gameOver() {
            document.getElementById("numpad").style.display = "none";
            document.getElementById("game-over-div").style.display = "block";
            document.getElementById("high-score").textContent = `Your final score is ${score}`;
        }

        function showHideDiv() {
            document.getElementById("numpad").style.display = "block";
            document.getElementById("select-menu").style.display = "none";
        }

        function clearHeader() {
            document.getElementById("new-header").textContent = "";
        }

        function resetScore() {
            score = 0;
            document.getElementById("score").textContent = `${score}`;
        }

        function playAgain() {
            document.getElementById("play-again-btn").addEventListener("click", function() {
                document.getElementById("select-menu").style.display = "block";
                document.getElementById("game-over-div").style.display = "none";
                clearHeader();
                resetScore();
            });
        }

        window.addEventListener('load', function() {
            const numPad = document.getElementById('numpad');
            const button = document.getElementsByClassName('num');
            const operation = document.getElementById('math-facts1');
        });

        // JavaScript for rotating the quotes
        let quotes = [
            { text: "The only way to do great work is to love what you do. - Steve Jobs", author: "Steve Jobs" },
            { text: "Believe you can and you're halfway there. - Theodore Roosevelt", author: "Theodore Roosevelt" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill", author: "Winston Churchill" }
        ];

        let currentQuoteIndex = 0;

        function rotateQuote() {
            let quoteElement = document.getElementById("quote");
            quoteElement.textContent = `"${quotes[currentQuoteIndex].text}" - ${quotes[currentQuoteIndex].author}`;
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }

        setInterval(rotateQuote, 10000);