// Function to toggle description visibility
function toggleDescription(button) {
    const description = button.parentElement.previousElementSibling;
    description.classList.toggle('show');
    button.textContent = description.classList.contains('show') ? 'Hide Description' : 'Show Description';
}

// Function to switch categories
function switchCategory(categoryId) {
    // Hide all categories
    document.querySelectorAll('.category').forEach(cat => {
        cat.classList.remove('active');
    });

    // Show selected category
    document.getElementById(categoryId).classList.add('active');

    // Update navigation highlighting
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === categoryId) {
            link.classList.add('active');
        }
    });
}

// Add event listeners to category links
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', () => {
        switchCategory(link.dataset.category);
    });
});

// Initialize the first category as active
document.addEventListener('DOMContentLoaded', () => {
    switchCategory('Fiction');
});



// Function to create book cards
function createBookCard(book) {
    return `
        <div class="book-card">
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">By ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <div class="book-actions">
                    <button class="btn btn-primary">Add to Cart</button>
                    <button class="btn btn-secondary">Borrow</button>
                </div>
                <button class="btn btn-text" onclick="toggleDescription(this)">Show Description</button>
            </div>
        </div>
    `;
}
