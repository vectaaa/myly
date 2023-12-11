 let bar27 = document.querySelector("#bar27")
let bar2 = document.getElementById("bar2")
 let revelation = document.getElementsByClassName("zoom")
 console.log(revelation)
bar27.addEventListener("click", () => {
    // bar27.classList.toggle("forlink--open")
    console.log(bar27) 
   
        revelation.style.display = "block"
     
   })
   bar2.addEventListener("click", () => {
   bar2.classList.toggle("forlink--open")
  
   console.log(bar2)
   })

   function zoom(){
    if(revelation.style.display == "none"){
        revelation.style.display = "block"
      }
      else{
        revelation.style.display = "none";
      }
   }