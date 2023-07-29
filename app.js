//  const request=require("request")
// const url="https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=30.05,31.25"
// const url="https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=40.3,35.4"

// request({url,json:true},(error,response)=>{
//     if(error) {
//         console.log('unable to connect')
//     }else if(response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name +" the country  : " + response.body.location.country
//         + " the temperature :" + response.body.current.temp_c)
//     }
// })

////////////////////////////////////////////////////////////////////////////////////////
// const geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
// const geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"


// request({url:geocode,json:true},(error,response)=>{
//     if(error){
//         console.log("unable to connect")
//     }else if(response.body.message){
//         console.log(response.body.message)
//     }else  if(response.body.features.length == 0){
//        Console.log("Unable to find location")
//     }else {
//         const country=response.body.query[0]
//         const latation=response.body.features[0].center[0]
//         const longation=response.body.features[0].center[1]
//         console.log(" the name of country   : " + country )
//         console.log(" the name of latation  : " + latation )
//         console.log(" the name of longation : " + longation )

//     }
// })

////////////////////////////////////////////////////////////////////////////////////////
//  const forcast=(latation,longation,callback)=>{
//     const url="https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latation+ ","+longation

//      request({url ,json:true},(error ,response)=>{
 
//         if(error){
//             callback("unable to connect",undefined)
//         }else if(response.body.error){
//             callback(response.body.error.message,undefined)
//         }else {
//             callback(undefined,response.body.location.name)
//         }
//     })

// }
// forcast(29.871903452398,26.4941838299718,(error,data)=>{
//     console.log("error : " + error)
//     console.log("data :"+data)
// })

////////////////////////////////////////////////////////////////////////////////
// const forecast=require('./Data/forecast')
// forecast.forecast(29.871903452398,26.4941838299718,(error,data)=>{
//     console.log("Error : "+ error)
//     console.log("Data  : " + data)
// })

//////////////////////////////////////////////////////////////////////////////
// const forecast=require("./Data/forecast")
// const geocode=require("./Data/geocode")
// const country=process.argv[2]
// geocode(country,(error,data)=>{
//     console.log("Error : " + error)
//     console.log("Data  : "+ data)
//     if(data){
//        forecast(data.latation,(error,data)=>{
//         console.log("Error : " + error)
//         console.log("Data : "+ data)
//        })
//     }else {
//         console.log("Data Enter Has Error")
//     }
// })
///////////////////////////////////////
const geocode = require ('./Data.js/geocode')
const forecast = require ('./Data.js/forecast')

const country = process.argv[2]

geocode ( country , (error , data) => {
    // console.log("ERROR : " , error)
    console.log("DATA  : " , data)

    if (data) {
        forecast( data.latitude , data.longtitude , (error , data) => {
            console.log("ERROR : " , error)
            console.log("DATA  : " , data)
       } )
    } else {
        console.log("Data Entered have An Error")
    }
   
} ) 
