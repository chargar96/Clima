const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require ('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Ciudad a consultar sobre su clima',
        demand: true
    }
}).argv;


lugar.getLugarLating( argv.direccion)
        .then(resp => {
            console.log(`la temperatura de ${resp.direccion} es de:`);
            clima.getTemperatura(resp.direccion, resp.lat, resp.lng)
                .then(resp => {
                    console.log(`${resp.temperatura} C grados`);
                })
                .catch(e => console.log('error'));
        })
        .catch(e => console.log(e));