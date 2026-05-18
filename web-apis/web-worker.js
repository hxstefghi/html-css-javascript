let count = 0;

function countMessage() {
  count++;
  postMessage(count);
  setTimeout("countMessage()", 500);
}

countMessage(); 
