const axios = require('axios');

const getLugarLating = async(direccion) =>{

    let encodedUrl = encodeURI( direccion );

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontraron resultados de: ${ direccion }` );
    }
    
   
        
        let location = resp.data.results[0];

        return {
            direccion: location.formatted_address,
            lat: location.geometry.location.lat,
            lng: location.geometry.location.lng 

        }
        
    
}



    module.exports = {
        getLugarLating
    }