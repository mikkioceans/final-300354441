
function start() {

    // Set the date we're counting down to

    const inputDate = document.querySelector("#birthday")
   // console.log(inputDate.valueAsNumber)
    todayDate = new Date().getTime();

   var  dateDistance  = inputDate.valueAsNumber - todayDate 
   console.log(todayDate)

   var days = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
   console.log(days)
  var hours = Math.floor((dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((dateDistance % (1000 * 60)) / 1000);
  var dicseconds =  Math.floor((dateDistance % (1000000 * 60)) / 1000);

  daysTexts = document.querySelector("#demo")
  daysTexts.innerHTML = days + "days " + hours + "hours "
  + minutes + "minutes " + seconds + "seconds " + dicseconds + "dicseconds";
  
   

   if (dateDistance < 0) {
    clearInterval(PROJECT)
    daysTexts.innerHTML = "EXPIRED"
   }


    
   
   
  

    
}

var PROJECT = setInterval(function start() {

    

    const inputDate = document.querySelector("#birthday")
   
    todayDate = new Date().getTime();

   var  dateDistance  = inputDate.valueAsNumber - todayDate 
   console.log(todayDate)

   var days = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
   console.log(days)
  var hours = Math.floor((dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((dateDistance % (1000 * 60)) / 1000);
  var dicseconds =  Math.floor((dateDistance % ((0.1) * 60)) / 1000);

  daysTexts = document.querySelector("#demo")
  daysTexts.innerHTML = days + "days " + hours + "hours "
  + minutes + "minutes " + seconds + "seconds " + dicseconds + "dicseconds";
  
   

   if (dateDistance < 0) {
    clearInterval(PROJECT)
    
    alert("Your date is Expired ")
    daysTexts.innerHTML = "EXPIRED"
   }


    
   
   
  

    
}, 1000)

