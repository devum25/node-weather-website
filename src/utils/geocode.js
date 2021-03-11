
const request = require('request')


const geocode = (address,callback)=>{

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGV2dW05OSIsImEiOiJja20zYWx5czgwOXl4MnJxZDZvcXBra2xnIn0.Rd_UzspgO1a4QScTC_WpBw&limit=1';


    request({url,json:true},(error,response)=>{
        debugger
        if(error) callback('Unable to connect to the remote server!',undefined);
    
        else if(response.body.features.length === 0) callback('Unable to find this location, try another search!',undefined);

        else callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name
        })

    })
}



module.exports = geocode