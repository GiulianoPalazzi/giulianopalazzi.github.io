let flipMode = localStorage.getItem('flipMode'); 

var root = document.getElementsByTagName( "html" )[0];

const flipModeToggle = document.querySelector('#flip-toggle');

const enableFlipMode = () => {
  // 1. Add the class to the body
  root.classList.add('flip');
  // 2. Update flipMode in localStorage
  localStorage.setItem('flipMode', 'enabled');
}

const disableFlipMode = () => {
  // 1. Remove the class from the body
  root.classList.remove('flip');
  // 2. Update flipMode in localStorage 
  localStorage.setItem('flipMode', null);
}
 
// If the user already visited and enabled flipMode
// start things off with it on
if (flipMode === 'enabled') {
  enableFlipMode();
}

// When someone clicks the button
flipModeToggle.addEventListener('click', () => {
  console.log("click");
  // if it not current enabled, enable it
  if (localStorage.getItem('flipMode') !== 'enabled') {
    enableFlipMode();
  // if it has been enabled, turn it off  
  } else {  
    disableFlipMode(); 
  }
});
