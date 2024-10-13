const params = new URLSearchParams(window.location.search);
const title = params.get('title');

fetch('manhwa.json')
    .then(response => response.json())
    .then(data => {
        const manhwa = data.find(m => m.title === title);
        if (manhwa) {
            document.getElementById('manhwa-detail').innerHTML = `
                <h1>${manhwa.title}</h1>
                <p class="genre">${manhwa.genre}</p>
                <p>${manhwa.description}</p>
                <button onclick="goBack()">Back to List</button>
            `;
        }
    })
    .catch(error => console.error('Error fetching data:', error));

function goBack() {
    window.history.back();
}

const commentsList = document.getElementById('comments-list');

document.getElementById('submit-comment').addEventListener('click', () => {
    const comment = document.getElementById('comment-input').value;
    if (comment) {
        const commentItem = document.createElement('div');
        commentItem.textContent = comment;
        commentsList.appendChild(commentItem);
        document.getElementById('comment-input').value = ''; // Clear input
    }
});

