var msg;        // Message
//var level = 2;  // Level
var level = 'second1';  // Level
// Determine message based on level             //变量level的匹配  无论格式只看内容？
switch (level) {
case 1:
    msg = 'Good luck on the first test';
    break;

case 'second2':
    msg = 'Second of three - keep going!';
    break;

case 'second1':
    msg = 'Final round, almost there!';
    break;

default:
    msg = 'Good luck!';
    break;
}
console.log(level);
var el = document.getElementById('answer');
el.textContent = msg;