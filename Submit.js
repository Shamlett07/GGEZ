const reviewForm = document.getElementById('review-form');
        const reviewList = document.getElementById('review-list');

        reviewForm.addEventListener('submit', function (e) 
		{
            e.preventDefault();

            const username = document.getElementById('username').value;
            const gameTitle = document.getElementById('game-title').value;
            const reviewText = document.getElementById('review-text').value;

            // Create a new review item
            const reviewItem = document.createElement('li');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <strong>${username}</strong> reviewed <em>${gameTitle}</em>:<br>${reviewText}
            `;
    
			const reviewList = document.getElementById("review-list");
			reviewList.insertBefore(reviewItem, reviewList.firstChild);
			
			document.getElementById("username").value = "";
            document.getElementById("game-title").value = "";
            document.getElementById("review-text").value = "";
			
            // Add the review item to the list
            reviewList.appendChild(reviewItem);

            // Reset the form
            reviewForm.reset();
        });