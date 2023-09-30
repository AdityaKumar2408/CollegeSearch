//This script.js unable to get open in raw bcoz of bulky data store of college details.
// Here what is written inside:




function displaySuggestions(searchTerm) {
	const suggestionList = document.getElementById('suggestionList');

	// Clear the suggestion list if the search term is empty
	if (!searchTerm) {
		suggestionList.innerHTML = '';
		return;
	}

	const suggestions = colleges
		.filter(college => college.CollegeName.toLowerCase().includes(searchTerm.toLowerCase()))
		.map(college => college.CollegeName)
		.slice(0,5);

	suggestionList.innerHTML = '';

	suggestions.forEach(suggestion => {
		const listItem = document.createElement('li');
		listItem.textContent = suggestion;

		// Add click event to populate the search field
		listItem.addEventListener('click', () => {
			document.getElementById('collegeSearch').value = suggestion;
			suggestionList.innerHTML = '';  
		});

		// Add CSS class and style
		listItem.classList.add('suggestion-item');
		listItem.style.cursor = 'pointer';

		suggestionList.appendChild(listItem);
	});
}

function searchColleges() {
	const searchTerm = document.getElementById('collegeSearch').value.toLowerCase();
const matchingColleges = colleges.filter(college => college.CollegeName.toLowerCase().includes(searchTerm));
console.log('Matching Colleges:', matchingColleges); // Check if matching colleges are correct

const encodedColleges = encodeURIComponent(JSON.stringify(matchingColleges));
window.location.href = `results.html?colleges=${encodedColleges}`;
}

const searchInput = document.getElementById('collegeSearch');
searchInput.addEventListener('input', () => {
	const searchTerm = searchInput.value;
	displaySuggestions(searchTerm);
});


// const colleges=[
//     {
//         // details of colleges
//     }
// ]