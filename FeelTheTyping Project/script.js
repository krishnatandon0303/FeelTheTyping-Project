// Audio for success
const successSound = new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=');

// Game State
let currentLyrics = [];
let startTime, endTime, timerInterval;
let correctChars = 0;
let totalCharsTyped = 0;
let isPlaying = false;

// DOM Elements
const songSelect = document.getElementById('songSelect');
const startBtn = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timer');
const typingArea = document.getElementById('typingArea');
const inputField = document.getElementById('inputField');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const charCountDisplay = document.getElementById('charCount');
const progressBar = document.getElementById('progressBar');
const darkModeToggle = document.getElementById('darkModeToggle');

// Initialize
loadLeaderboard();

// Event Listeners
startBtn.addEventListener('click', startGame);
inputField.addEventListener('input', handleInput);
darkModeToggle.addEventListener('click', toggleDarkMode);

async function startGame() {
    const song = songSelect.value;
    if (!song) return alert('Please select a song!');
    
    startBtn.disabled = true;
    inputField.disabled = false;
    inputField.value = '';
    inputField.focus();
    
    // Fetch lyrics
    currentLyrics = await fetchLyrics(song);
    typingArea.innerHTML = currentLyrics.map(line => 
        `<div class="lyric-line">${line.split('').map(char => `<span class="char">${char}</span>`).join('')}</div>`
    ).join('');
    
    // Start timer
    let timeLeft = 60;
    startTime = Date.now();
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        progressBar.style.width = `${((60 - timeLeft)/60)*100}%`;
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function handleInput() {
    if (!isPlaying) {
        isPlaying = true;
        startTime = Date.now();
    }
    
    const typedText = inputField.value;
    totalCharsTyped = typedText.length;
    const targetText = currentLyrics.join('\n');
    
    let correctSoFar = 0;
    typingArea.querySelectorAll('.char').forEach((charSpan, index) => {
        const typedChar = typedText[index] || '';
        if (typedChar === charSpan.textContent) {
            charSpan.classList.add('char-correct');
            charSpan.classList.remove('char-incorrect');
            correctSoFar++;
        } else {
            charSpan.classList.add('char-incorrect');
            charSpan.classList.remove('char-correct');
        }
    });
    
    correctChars = correctSoFar;
    updateStats();
}

function updateStats() {
    const timeElapsed = (Date.now() - startTime) / 1000;
    const wpm = Math.round((correctChars / 5) / (timeElapsed / 60));
    const accuracy = Math.round((correctChars / totalCharsTyped) * 100) || 0;
    
    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = accuracy;
    charCountDisplay.textContent = totalCharsTyped;
}

function endGame() {
    clearInterval(timerInterval);
    inputField.disabled = true;
    startBtn.disabled = false;
    isPlaying = false;
    
    const timeTaken = 60 - parseInt(timerDisplay.textContent);
    const finalWPM = Math.round((correctChars / 5) / (timeTaken / 60));
    const finalAccuracy = Math.round((correctChars / totalCharsTyped) * 100) || 0;
    
    // Play sound
    successSound.play();
    
    // Save to leaderboard
    saveToLeaderboard(finalWPM, finalAccuracy);
    loadLeaderboard();
    
    // Show final stats
    alert(`Time's up!\nWPM: ${finalWPM}\nAccuracy: ${finalAccuracy}%\nCharacters: ${totalCharsTyped}`);
}

async function fetchLyrics(song) {
    // For demo purposes, using hardcoded lyrics
    const sampleLyrics = {
        'queen/bohemian rhapsody': [
            "Is this the real life? Is this just fantasy?",
            "Caught in a landslide, no escape from reality"
        ],
        'beatles/yesterday': [
            "Yesterday, all my troubles seemed so far away",
            "Now it looks as though they're here to stay"
        ],
        'whitney houston/i will always love you': [
            "If I should stay, I would only be in your way",
            "So I'll go, but I know I'll think of you every step of the way"
        ]
    };
    return sampleLyrics[song] || [];
}

// Leaderboard Functions
function saveToLeaderboard(wpm, accuracy) {
    const entry = {
        wpm,
        accuracy,
        date: new Date().toLocaleString()
    };
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    leaderboard.push(entry);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = leaderboard
        .sort((a, b) => b.wpm - a.wpm)
        .slice(0, 10)
        .map((entry, index) => `
            <li>
                ${index + 1}. ${entry.wpm} WPM (${entry.accuracy}%) - ${entry.date}
            </li>
        `).join('');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}