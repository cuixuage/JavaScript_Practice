// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];                 // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');                    // Create element
var newTextLast = document.createTextNode('cream');                // Create text node
newItemLast.appendChild(newTextLast);                              // Add text node to element
list.appendChild(newItemLast);                                     // Add element end of list
//结点插入到了最后(child位置最后)


// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li');                   // Create element
var newTextFirst = document.createTextNode('kale');                // Create text node


//newItemFirst.setAttribute('class','hot');
//***************************************************这里设置clasName后面也会被覆盖


newItemFirst.appendChild(newTextFirst);                            // Add text node to element
list.insertBefore(newItemFirst, list.firstChild);                  // Add element to list

//insertbefore 函数将newItem插入到指定结点的前面(按照child结点位置插入,执行后)


var listItems = document.querySelectorAll('li');                   // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                                             // Counter variable
for (i = 0; i < listItems.length; i++) {                           // Loop through elements
  listItems[i].className = 'cool';                                 // Change class to cool

}

//****************************************加以改变className
listItems[0].className='hot';
listItems[listItems.length-1].setAttribute('class','hot');
console.log(listItems[listItems.length-1].getAttribute('class'));



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;                                    // Update h2 using innerHTML (not textContent) because it contains markup