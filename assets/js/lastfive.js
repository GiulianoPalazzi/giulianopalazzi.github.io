var a = document.createElement('a');
a.target = '_blank';
a.href = window.history.state.prevUrl;
a.innerText = 'Hello';

var container = document.querySelector('.container');
container.appendChild(a);
container.appendChild(document.createElement('br'));
