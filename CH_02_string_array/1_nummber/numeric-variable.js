// Create three variables to store the information needed.
var price;
var quantity;
var total;

// Assign values to the price and quantity variables.
price = 5;
quantity = 25;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Get the element with an id of cost.
var el = document.getElementById('cost');           //js这里拿到html中某元素ID接着处理  
//el.textContent = '$' + total;
console.log(total);
el.innerHTML = '$'+ total;

/* 
访问某个 HTML 元素，您可以使用 document.getElementById(id) 方法
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
*/