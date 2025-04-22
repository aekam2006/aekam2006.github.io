const pollResults = {
    Maxwell: 7,
    Tenley: 6,
    Mona: 4,
    Rocky: 5,
};

// Update poll results in the UI
function updatePollResults() {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Clear the previous results

    // Loop through pollResults and update the displayed list
    for (const cat in pollResults) {
        const li = document.createElement('li');
        li.textContent = `${cat}: ${pollResults[cat]}`;
        resultsList.appendChild(li);  // Append updated result
    }
}

// Handle poll form submission
function submitPoll() {
    const userName = document.getElementById('username').value;
    const favoriteCat = document.getElementById('favorite-cat').value;

    // Validate username
    if (!userName.trim()) {
        alert('Please enter your name!');
        return;
    }

    // Check if the favoriteCat exists in the pollResults object
    if (pollResults[favoriteCat] !== undefined) {
        // Increment the poll count for the selected cat
        pollResults[favoriteCat] += 1;
        
        // Notify the user and update the results
        alert(`Thank you, ${userName}, for voting for ${favoriteCat}!`);
    } else {
        alert('Invalid cat selection!');
    }

    // Re-render updated poll results
    updatePollResults();
}

// Initialize by displaying the initial poll results
updatePollResults();
