console.log('Client side script loaded!');

fetch('http://localhost:5781/weather?address=Bengaluru').then((response)=>{

   response.json().then((data)=>{
               console.log(data);
   })

})