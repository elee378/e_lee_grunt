(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('whats up');

  function myFunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  };
  myFunc();
})();
