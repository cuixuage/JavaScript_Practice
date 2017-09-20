var table = 3;             // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message

if (operator == 'addition') {   // ===是严格等于的含义
  // Do addition
  while (i < 11) {    //相同operator 则是加法
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';            // br是换行符
    i++;
  }
} else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

/*
在 HTML 中，<br> 标签没有结束标签。
在 XHTML 中，<br> 标签必须被正确地关闭，比如这样：<br />。
*/