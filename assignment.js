//spash function 
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },4000);
})
var x = document.getElementById("one");

var y = document.getElementById("two");
var z = document.getElementById("three");
// one \
function changecolor() {
    
    if (y.style.display === "block" && z.style.display === "block") {
     // document.body.style.backgroundColor = "black";
      y.style.display = "none";
      z.style.display = "none";
      document.body.style.backgroundColor = "black";
    } else {
      
      y.style.display = "block";
      z.style.display = "block";
      document.body.style.backgroundColor = 'white'
    }
    /*if (z.style.display === "block") {
      
      z.style.display = "none";
    } else {
      
      z.style.display = "block";
    }*/
  }

//two 
/*function changeimage() {
      
    if (x.style.display === "block") {
      document.body.style.backgroundImage = "url('a.jpg')";
      x.style.display = "none";
    } else {
      document.body.style.backgroundImage = "none"
      x.style.display = "block";
    }
    if (z.style.display === "block") {
      
      z.style.display = "none";
    } else {
      
      z.style.display = "block";
    }
  }*/
  function changeimage() {
      
    if (x.style.display === "block" && z.style.display === "block" ) {
      document.body.style.backgroundImage = "url('a.jpg')";
      x.style.display = "none";
      z.style.display = "none";
    } else {
      document.body.style.backgroundImage = "none"
      x.style.display = "block";
      z.style.display = "block";
    }
}


// three with hiding and undo it 
function alerthello() { 
    if (x.style.display === "block" && y.style.display === "block") {
        x.style.display = "none";
     y.style.display = "none";
        myVar = setInterval(function(){ alert("You're repeating hello"); }, 3000);
      
     
    } else {  
        
      x.style.display = "block";
      y.style.display = "block";
      clearInterval(myVar);
    }
}
   /* if (y.style.display === "block") {
      
      y.style.display = "none";
    } else {
      
      y.style.display = "block";
    }
  */

  function alertFunc() 
  {
    alert("Hello!");
  }

