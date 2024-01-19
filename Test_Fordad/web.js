var i = 0;        // Start Point
var images = [];    // Images Array
var time = 3000;    // Time Between Switch

// Image List
images[0] = "http://lorempixel.com/400/200/animals";
images[1] = "http://lorempixel.com/400/200/sports";
images[2] = "http://lorempixel.com/400/200/food";
images[3] = "http://lorempixel.com/400/200/people";
images[4] = "http://lorempixel.com/400/200/game";

// Change Image
function changeImg() {
    document.getElementById('slide').src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To 0
        i = 0;
    }

    // Run function every x seconds
    setTimeout(changeImg, time);
}

// Run function when page loads
window.onload = changeImg;

function addToCart(productName) {
    // Add the product to the cart
    var cartItems = document.getElementById("cartItems");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(productName));
    cartItems.appendChild(listItem);
    // Provide feedback to the user
    alert(productName + " added to cart!");
}