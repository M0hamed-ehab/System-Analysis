// Cart management functionality
export class CartManager {
  constructor() {
    this.loadCart();
    this.bindEvents();
    this.updateUI();
  }

  loadCart() {
    const savedCart = localStorage.getItem('bookHavenCart');
    this.cart = savedCart ? JSON.parse(savedCart) : {};
  }

  saveCart() {
    localStorage.setItem('bookHavenCart', JSON.stringify(this.cart));
  }

  updateQuantity(bookId, delta) {
    if (!this.cart[bookId]) {
      this.cart[bookId] = 0;
    }
    
    this.cart[bookId] = Math.max(0, this.cart[bookId] + delta);
    
    if (this.cart[bookId] === 0) {
      delete this.cart[bookId];
    }
    
    this.saveCart();
    this.updateUI();
  }

  calculateTotals() {
    const subtotal = Object.entries(this.cart).reduce((total, [bookId, quantity]) => {
      const book = window.books.find(b => b.id === parseInt(bookId));
      return total + (book.price * quantity);
    }, 0);

    const shipping = Object.keys(this.cart).length > 0 ? 4.99 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return { subtotal, shipping, tax, total };
  }

  updateUI() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const { subtotal, shipping, tax, total } = this.calculateTotals();

    // Update cart items
    cartItemsContainer.innerHTML = Object.entries(this.cart).map(([bookId, quantity]) => {
      const book = window.books.find(b => b.id === parseInt(bookId));
      return `
        <div class="cart-item" data-book-id="${book.id}">
          <img src="${book.cover}" alt="${book.title}" class="book-cover">
          <div class="book-info">
            <div>
              <h3 class="book-title">${book.title}</h3>
              <p class="book-author">${book.author}</p>
              <p class="book-format">${book.format}</p>
            </div>
            <div class="quantity-controls">
              <button class="quantity-btn decrease">-</button>
              <input type="number" class="quantity" value="${quantity}" min="1">
              <button class="quantity-btn increase">+</button>
            </div>
          </div>
          <div class="price">$${(book.price * quantity).toFixed(2)}</div>
        </div>
      `;
    }).join('') || '<div class="empty-cart">Your cart is empty</div>';

    // Update summary
    document.querySelector('[data-summary="subtotal"]').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('[data-summary="shipping"]').textContent = `$${shipping.toFixed(2)}`;
    document.querySelector('[data-summary="tax"]').textContent = `$${tax.toFixed(2)}`;
    document.querySelector('[data-summary="total"]').textContent = `$${total.toFixed(2)}`;
  }

  bindEvents() {
    document.querySelector('.cart-items').addEventListener('click', (e) => {
      if (!e.target.classList.contains('quantity-btn')) return;
      
      const cartItem = e.target.closest('.cart-item');
      const bookId = parseInt(cartItem.dataset.bookId);
      const delta = e.target.classList.contains('increase') ? 1 : -1;
      
      this.updateQuantity(bookId, delta);
    });

    document.querySelector('.cart-items').addEventListener('change', (e) => {
      if (!e.target.classList.contains('quantity')) return;
      
      const cartItem = e.target.closest('.cart-item');
      const bookId = parseInt(cartItem.dataset.bookId);
      const newQuantity = parseInt(e.target.value) || 0;
      const currentQuantity = this.cart[bookId] || 0;
      
      this.updateQuantity(bookId, newQuantity - currentQuantity);
    });
  }
}