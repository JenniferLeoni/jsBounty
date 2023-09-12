// an object to represent the user's shopping cart
const shoppingCart = {
    items: [], // Array to store cart items
    total: 0, // Total cart value
  };
  
  // Function to add an item to the cart
  function addItemToCart(itemName, itemPrice, itemQuantity) {
    const item = {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
    };
  
    shoppingCart.items.push(item);
    shoppingCart.total += item.price * item.quantity;
  }
  
  // Function to remove an item from the cart
  function removeItemFromCart(index) {
    if (index < 0 || index >= shoppingCart.items.length) {
      throw new Error("Invalid item index");
    }
  
    const removedItem = shoppingCart.items.splice(index, 1)[0];
    shoppingCart.total -= removedItem.price * removedItem.quantity;
  }
  
  // Function to update the cart display
  function updateCartDisplay() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = ''; // Clear previous items

  // Create an object to store the quantity and total price per product
  const productTotals = {};

  shoppingCart.items.forEach((item) => {
    if (!productTotals[item.name]) {
      productTotals[item.name] = {
        quantity: 0,
        total: 0,
      };
    }
    productTotals[item.name].quantity += item.quantity;
    productTotals[item.name].total += item.price * item.quantity;
  });

  for (const productName in productTotals) {
    if (productTotals.hasOwnProperty(productName)) {
      const productInfo = productTotals[productName];
      const listItem = document.createElement('li');
      listItem.textContent = `${productName} x ${productInfo.quantity} - $${productInfo.total.toFixed(2)}`;
      cartItemsList.appendChild(listItem);
    }
  }

  const cartTotal = document.getElementById('cart-total');
  cartTotal.textContent = `$${shoppingCart.total.toFixed(2)}`;
}
  
  // Function to update the cart count
  function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = shoppingCart.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  // Function to display an error message
  function displayError(message) {
    alert(`Error: ${message}`);
  }
  
  // Event listener for adding and removing items to/from the cart
  const cartButtons = document.querySelectorAll('.add-to-cart, .remove-from-cart');
  cartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productArticle = button.closest('.product');
      const productName = productArticle.querySelector('h2').textContent;
      const productPrice = parseFloat(productArticle.querySelector('.price').textContent.slice(1));
      const productQuantity = 1; 
  
      switch (event.target.className) {
        case 'add-to-cart':
          addItemToCart(productName, productPrice, productQuantity);
          break;
        case 'remove-from-cart':
          const itemIndex = shoppingCart.items.findIndex((item) => item.name === productName);
          if (itemIndex !== -1) {
            try {
              removeItemFromCart(itemIndex);
            } catch (error) {
              displayError(error.message);
            }
          }
          break;
        default:
          break;
      }
  
      updateCartDisplay();
      updateCartCount();
    });
  });
  
  // Initialize cart display
  updateCartDisplay();
  