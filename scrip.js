fetch('manhwa.json')
    .then(response => response.json())
    .then(data => {
        const manhwaList = document.getElementById('manhwa-list');
        const searchInput = document.getElementById('search');

        const displayManhwa = (manhwaData) => {
            manhwaList.innerHTML = '';
            manhwaData.forEach(manhwa => {
                const manhwaItem = document.createElement('div');
                manhwaItem.className = 'manhwa-item';
                manhwaItem.innerHTML = `
                    <h2 class="title"><a href="manhwa-detail.html?title=${manhwa.title}">${manhwa.title}</a></h2>
                    <p class="genre">${manhwa.genre}</p>
                    <p class="description">${manhwa.description}</p>
                `;
                manhwaList.appendChild(manhwaItem);
            });
        };

        // Initial display
        displayManhwa(data);

        // Search functionality
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredManhwa = data.filter(manhwa => manhwa.title.toLowerCase().includes(searchTerm));
            displayManhwa(filteredManhwa);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

