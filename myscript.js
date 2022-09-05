let screen = document.getElementById("screen");

let string = "";

let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button)=>{
  button.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(e.target.innerText == "x"){
      e.target.innerText = "*";
      string = eval(string);
      screen.value = string;
      
    }
    
    if(e.target.innerText == "="){
      string = eval(string);
      screen.value = string;

    }
    else if(e.target.innerText == "C"){
      string = "";
      screen.value = string;
    }
    else if(e.target.innerText == "Del"){
      string=screen.value;
      string = string.substr(0,string.length-1);
      screen.value=string;
    }
    else{
    string = string + e.target.innerText;
    screen.value = string;
    }
  })


})

