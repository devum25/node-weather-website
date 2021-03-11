const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const app = express()



const pathToPublicFolder = path.join(__dirname,'../public');

app.set('views',path.join(__dirname,'../templates/views')); 

app.set('view engine','hbs');

hbs.registerPartials(path.join(__dirname,'../templates/partials'))

app.use(express.static(pathToPublicFolder));

app.get('',(req,res)=>{

    res.render('index',{
        title:'Weather',
        name:'devum lala'
    });

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About us'
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help'
    });
})

app.get('/weather',(req,res)=>{
    if(!req.query?.address){
        return res.send({error:'No address parameter found in request!'});
    }
    
   geocode(req.query?.address,(error,{latitude,longitude,location}={})=>{

      if(error) return res.send({error:'Some error occured while retrieving geo code!'});

      forecast(latitude,longitude,(error,forecastdata)=>{
            if(error) return res.send({error:  'Unable to find location with latitude ' + latitude + 'and longitude ' + longitude});

            return res.send({
                forecastdata
            })
      })
        
   })
  

    // res.send({
    //     address:req.query?.address,
    //     location:'Bengaluru'
    // })
})

app.get('/products',(req,res)=>{
    if(!req.query?.search){
         return res.send({error:'No search parameter found!'});
    }

    res.send({
        products:[]
    })
})

app.get('*',(req,res)=>{
    res.send('404 Endpoint not found!');
})

app.listen('5781',()=>{
    console.log('Server is running on port 5781!');
})