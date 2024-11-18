// Select the search bar and recipe cards
const searchBar = document.getElementById('search-bar');
const recipeCards = document.querySelectorAll('.recipe-card');

// Add an event listener for the Enter key
searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission or page reload
        const searchText = searchBar.value.toLowerCase().trim(); // Get search text and trim whitespace
        let matchFound = false; // Track if a match is found

        recipeCards.forEach(card => {
            // Get the recipe keywords from the data-recipe attribute
            const keywords = card.getAttribute('data-recipe').toLowerCase();
            console.log(`Checking card with keywords: ${keywords}`); // Debugging

            // Check if any word in the search text matches the keywords
            if (searchText.split(' ').some(word => keywords.includes(word))) {
                card.style.display = 'block'; // Show matching recipes
                matchFound = true;
                console.log(`Match found for: ${keywords}`); // Debugging
            } else {
                card.style.display = 'none'; // Hide non-matching recipes
                console.log(`No match for: ${keywords}`); // Debugging
            }
        });

        // Show a "No results found" message if no matches
        const noResultsMessage = document.getElementById('no-results');
        if (!matchFound) {
            noResultsMessage.style.display = 'block';
            console.log('No matches found. Showing "No results" message.'); // Debugging
        } else {
            noResultsMessage.style.display = 'none';
            console.log('Matches found. Hiding "No results" message.'); // Debugging
        }
    }
});

