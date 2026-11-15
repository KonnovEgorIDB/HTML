const btn = document.querySelector('.button');

const result = [];
btn.onclick = function() { 
  result.push('first event');
}
btn.onclick = () => {
  result.push('second event');
};

btn.click(); 
// Как сейчас: result -> ["second event"]
// Как должно быть: result -> ["first event", "second event"]