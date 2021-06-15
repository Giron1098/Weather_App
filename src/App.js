import React, { Component } from 'react';

//Componentes
import ClimaInfo from './components/ClimaInfo';
import FormConsulta from './components/FormConsulta';
import {API_KEY} from './keys';

class App extends Component {

  state = {
    temperatura:'',
    descripcion:'',
    ciudad:'',
    pais:'',
    icono:'',
    temp_min:'',
    temp_max:'',
    //Elemento 1
    fechaF1: '',
    tempF1: '',
    temp_minF1: '',
    temp_maxF1: '',
    descripcionF1:'',
    iconoF1:'',
    //Elemento 2
    fechaF2: '',
    tempF2: '',
    temp_minF2: '',
    temp_maxF2: '',
    descripcionF2:'',
    iconoF2:'',
    //Elemento 3
    fechaF3: '',
    tempF3: '',
    temp_minF3: '',
    temp_maxF3: '',
    descripcionF3:'',
    iconoF3:'',
    //Elemento 4
    fechaF4: '',
    tempF4: '',
    temp_minF4: '',
    temp_maxF4: '',
    descripcionF4:'',
    iconoF4:'',
    //Elemento 5
    fechaF5: '',
    tempF5: '',
    temp_minF5: '',
    temp_maxF5: '',
    descripcionF5:'',
    iconoF5:'',
    //Elemento 6
    fechaF6: '',
    tempF6: '',
    temp_minF6: '',
    temp_maxF6: '',
    descripcionF6:'',
    iconoF6:'',
    //Elemento 7
    fechaF7: '',
    tempF7: '',
    temp_minF7: '',
    temp_maxF7: '',
    descripcionF7:'',
    iconoF7:'',
    //Elemento 8
    fechaF8: '',
    tempF8: '',
    temp_minF8: '',
    temp_maxF8: '',
    descripcionF8:'',
    iconoF8:'',
    error: null
  };


  obtenerClima = async (evento) => {
    evento.preventDefault();

    const { city, country } = evento.target.elements;

    const nameCity = city.value;
    const nameCountry = country.value;

    if(nameCity && nameCountry)
    {
      //OBTENER CLIMA
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${nameCity},${nameCountry}&appid=${API_KEY}&lang=es&units=Metric`
      const respuesta = await fetch(API_URL);
      const datos = await respuesta.json();

      //OBTENER PRONOSTICO
      const API_URL_FORECAST = `http://api.openweathermap.org/data/2.5/forecast?q=${nameCity},${nameCountry}&appid=${API_KEY}&lang=es&units=Metric&cnt=8`
      const response = await fetch(API_URL_FORECAST);
      const data = await response.json();


      if(data.cod === "404" || datos.cod === "404")
      {
        this.setState({error: 'Debe ingresar el nombre de una ciudad y un país válidos'})
      }else
      {
        //State Clima
      this.setState({
  
        temperatura: datos.main.temp,
        descripcion: datos.weather[0].description,
        ciudad: datos.name,
        pais: datos.sys.country,
        icono: datos.weather[0].icon,
        temp_min:datos.main.temp_min,
        temp_max:datos.main.temp_max,
        //Elemento 1
        fechaF1: data.list[0].dt_txt,
        tempF1: data.list[0].main.temp,
        temp_minF1: data.list[0].main.temp_min,
        temp_maxF1: data.list[0].main.temp_max,
        descripcionF1:data.list[0].weather[0].description,
        iconoF1:data.list[0].weather[0].icon,
        //Elemento 2
        fechaF2: data.list[1].dt_txt,
        tempF2: data.list[1].main.temp,
        temp_minF2: data.list[1].main.temp_min,
        temp_maxF2: data.list[1].main.temp_max,
        descripcionF2:data.list[1].weather[0].description,
        iconoF2:data.list[1].weather[0].icon,
        //Elemento 3
        fechaF3: data.list[2].dt_txt,
        tempF3: data.list[2].main.temp,
        temp_minF3: data.list[2].main.temp_min,
        temp_maxF3: data.list[2].main.temp_max,
        descripcionF3:data.list[2].weather[0].description,
        iconoF3:data.list[2].weather[0].icon,
        //Elemento 4
        fechaF4: data.list[3].dt_txt,
        tempF4: data.list[3].main.temp,
        temp_minF4: data.list[3].main.temp_min,
        temp_maxF4: data.list[3].main.temp_max,
        descripcionF4:data.list[3].weather[0].description,
        iconoF4:data.list[3].weather[0].icon,
        //Elemento 5
        fechaF5: data.list[4].dt_txt,
        tempF5: data.list[4].main.temp,
        temp_minF5: data.list[4].main.temp_min,
        temp_maxF5: data.list[4].main.temp_max,
        descripcionF5:data.list[4].weather[0].description,
        iconoF5:data.list[4].weather[0].icon,
        //Elemento 6
        fechaF6: data.list[5].dt_txt,
        tempF6: data.list[5].main.temp,
        temp_minF6: data.list[5].main.temp_min,
        temp_maxF6: data.list[5].main.temp_max,
        descripcionF6:data.list[5].weather[0].description,
        iconoF6:data.list[5].weather[0].icon,
        //Elemento 7
        fechaF7: data.list[6].dt_txt,
        tempF7: data.list[6].main.temp,
        temp_minF7: data.list[6].main.temp_min,
        temp_maxF7: data.list[6].main.temp_max,
        descripcionF7:data.list[6].weather[0].description,
        iconoF7:data.list[6].weather[0].icon,
        //Elemento 8
        fechaF8: data.list[7].dt_txt,
        tempF8: data.list[7].main.temp,
        temp_minF8: data.list[7].main.temp_min,
        temp_maxF8: data.list[7].main.temp_max,
        descripcionF8:data.list[7].weather[0].description,
        iconoF8:data.list[7].weather[0].icon,

        error:null
  
      }, () => console.log("Working"));
      }

    }else
    {
      this.setState({error: 'Debe ingresar el nombre de una ciudad y un país válidos'})
    }
  }


  render()
  {
    return(
      <div className="container p-4">

        <div className="row">

          <div className="col-md-8 mx-auto">
            
            <FormConsulta obtenerClima={this.obtenerClima}/>

          </div>

          <div className="col-md-12 mx-auto" >
            <ClimaInfo {...this.state}/>
          </div>

        </div>

      </div>
    )
  }
}

export default App;