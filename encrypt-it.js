
(function() {
  "use strict";
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signaling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /*
   * TODO: Write a function comment using JSDoc.
   */
  function init() 
  {
    console.log("Window loaded!");

    const encryptBtn = document.getElementById("encrypt-it");
    const resetBtn = document.getElementById("reset");

    encryptBtn.addEventListener("click", handleClick);
    resetBtn.addEventListener("click", handleReset);

  }

  function handleClick()
  {
    console.log("Button clicked!");

    let text = document.getElementById("input-text").value;
    text = text.toLowerCase();
    let result = shiftCipher(text);

    document.getElementById("result").textContent = result;

  }
  
  function handleReset()
  {
    document.getElementById("input-text").value = "";
    document.getElementById("result").textContent = "";
  }

  function shiftCipher(text)
  {
    let result = "";

    for (let i = 0; i < text.length; i++) 
    {
      if (text[i] < 'a' || text[i] > 'z') 
      {
        result += text[i];
      } 
      else if (text[i] == 'z') 
      {
        result += 'a';
      } 
      else 
      { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
