let playerScore = 0;
let cpuScore = 0;

const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const drawSound = document.getElementById("drawSound");

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const cpuChoice = choices[Math.floor(Math.random() * 3)];

    let resultText = "";

    if (playerChoice === cpuChoice) {
        resultText = "🤝 Draw!";
        drawSound.play();
    }
    else if (
        (playerChoice === "rock" && cpuChoice === "scissors") ||
        (playerChoice === "paper" && cpuChoice === "rock") ||
        (playerChoice === "scissors" && cpuChoice === "paper")
    ) {
        resultText = "🎉 You Win!";
        playerScore++;
        winSound.play();
    }
    else {
        resultText = "😢 You Lose!";
        cpuScore++;
        loseSound.play();
    }

    document.getElementById("result").innerText =
        `You: ${playerChoice} | CPU: ${cpuChoice}\n${resultText}`;

    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("cpuScore").innerText = cpuScore;
}

function resetGame() {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("playerScore").innerText = 0;
    document.getElementById("cpuScore").innerText = 0;
    document.getElementById("result").innerText = "Game Reset! Play again 🎮";
}