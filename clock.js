let fullName = prompt("Please enter your name");
let myName =document.querySelector('#myName')
  myName.innerHTML= `${fullName}`;
   
  
  function showTime() {
       let d = new Date(); 
       let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
        let time = document.querySelector('#myClock') 
        time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`
         setTimeout(showTime, 1000);}
         showTime();