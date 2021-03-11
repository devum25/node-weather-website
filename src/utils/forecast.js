const request = require('request');




const forecast = (latitude,longitude,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=96602556b9bb56f57eac4d8093a8b7f1&query='+latitude+','+longitude;

    request({url,json:true},(error,response)=>{
        if(error) callback('Unable to connect to remote server!');

        else if(response.body.error) console.log('Unable to find this location!');

        else callback(undefined,response.body.current);
    })

}



module.exports = forecast

