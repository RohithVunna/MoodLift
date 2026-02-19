let selectedMood = "";

const moodTips = {
    "😊 Happy": [
        "Keep doing what makes you happy!",
        "Share your positivity with someone today.",
        "Write down what made you feel good."
    ],
    "😐 Neutral": [
        "Try going for a short walk.",
        "Listen to your favorite music.",
        "Call a friend or family member."
    ],
    "😢 Sad": [
        "Take 5 deep breaths slowly.",
        "Write your feelings down.",
        "Talk to someone you trust.",
        "Watch something comforting."
    ],
    "😡 Angry": [
        "Step away for 5 minutes.",
        "Take slow deep breaths (4 seconds in, 4 seconds out).",
        "Drink some water.",
        "Try light exercise or stretching."
    ]
};

function setMood(mood) {
    selectedMood = mood;

    const tips = moodTips[mood];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    alert("Selected Mood: " + mood + "\n\nSuggestion:\n" + randomTip);
}

function saveMood() {
    const note = document.getElementById("note").value;

    if (!selectedMood) {
        alert("Please select a mood!");
        return;
    }

    const entry = {
        mood: selectedMood,
        note: note,
        date: new Date().toLocaleString()
    };

    let history = JSON.parse(localStorage.getItem("moodHistory")) || [];
    history.push(entry);
    localStorage.setItem("moodHistory", JSON.stringify(history));

    document.getElementById("note").value = "";
    selectedMood = "";

    loadHistory();
}

function loadHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";

    let history = JSON.parse(localStorage.getItem("moodHistory")) || [];

    history.slice().reverse().forEach(entry => {
        historyDiv.innerHTML += `
            <div class="entry">
                <strong>${entry.mood}</strong><br>
                <small>${entry.date}</small>
                <p>${entry.note}</p>
            </div>
        `;
    });
}

loadHistory();
