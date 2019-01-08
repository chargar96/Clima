const axios = require('axios');

const getTemperatura = async(direccion, lat, lng) =>{

    

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=2d4d8ac2694e1994078b4d334828518b`)
    
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontraron resultados de: ${ direccion }` );
    }

        return {
            temperatura: resp.data.main.temp
        }
        
    
}



    module.exports = {
        getTemperatura
    }