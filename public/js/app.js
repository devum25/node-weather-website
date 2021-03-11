console.log('Client side script loaded!');

fetch('/weather?address=Bengaluru').then((response)=>{

   response.json().then((data)=>{
               console.log(data);
   })

})