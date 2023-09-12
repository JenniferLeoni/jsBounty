# Online Shop Website Walkthrough

## Introduction

This online shop website is designed to simulate a shopping experience where users can browse products, add them to their cart, and view their shopping cart. The website incorporates several programming concepts, including the use of classes, switch statements, and try-catch-finally statements.

### HTML Structure

The HTML structure of the website is organized into three main sections: the header, the product listings, and the shopping cart.

## Classes in JavaScript

JavaScript classes are used to model the structure of objects. In this website, we have a shopping cart object represented as a class.

```javascript
// Define an object to represent the user's shopping cart
const shoppingCart = {
    items: [], // Array to store cart items
    total: 0, // Total cart value
};
```

Here, the `shoppingCart` object is structured using a class-like object notation to store items and calculate the total value of the cart.

## Switch Statements

Switch statements are used for decision-making based on the value of an expression. In this website, switch statements are employed to differentiate between adding items to the cart and removing items from the cart.

```javascript
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
```

Here, within the event listener, a switch statement is used to handle the click event on either the "Add to Cart" or "Remove" button. Depending on the class name of the clicked button, the corresponding case is executed, either adding or removing items from the cart.

## Try-Catch-Finally Statements

Try-catch-finally statements are essential for handling exceptions and errors gracefully in JavaScript. In this website, try-catch-finally blocks are employed when removing items from the cart to handle potential errors like invalid item indices.

```javascript
try {
    removeItemFromCart(itemIndex);
} catch (error) {
    displayError(error.message);
}
```

In the above code snippet, we attempt to remove an item from the cart. If an invalid item index is provided, it will throw an error, which is caught in the catch block. The `displayError` function is called to inform the user about the error.