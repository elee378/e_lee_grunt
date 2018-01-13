var myApp = {
  mainMessage : "Welcome to my app!",

  mainGreeting(){
    console.log('this is my main greeting');
  }
};

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, "I am a module!");
  },
  doSomething() {
    console.log('do something function');
  }
};

myApp.module1 = {
  doSomethingElse() {
    console.log('do something 2');
  }
};

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('whats up');

  function myFunc(){
    var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
  };
  myFunc();
})();
