import { div } from 'prelude-ls';
import React from 'react';
import sin_peticion from '../assets/images/sin_peticion.png';

const ClimaInfo = function(data)
{

    return (

        <div>

            {
                data.error &&
                <div className="alert alert-danger">
                    <p>{data.error}</p>
                </div>
            }
            {
                data.temperatura ?
                <div>

                    <div className="card" style={{margin:'4rem', backgroundColor:'#4A88EA', border:'none'}}>
                        <img src={`http://openweathermap.org/img/wn/${data.icono}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcion} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                        <div className="card-body">
                        <h2 style={{textAlign:'center'}} >
                            <span>{data.ciudad}</span>
                            <sup style={{padding: '0.1em 0.1em', margin_left:'0.6em',border_radius: '30px', color: '#fff', background: '#ff8c00'}} >{data.pais}</sup>
                        </h2>
                        
                        <h1 className="display-1" style={{textAlign:'center'}}>
                            <span>{Math.round(data.temperatura)}</span>
                            <sup>°C</sup>
                        </h1>

                        <div className="row">
                            <div className="col" style={{textAlign:'center'}}>
                            <label>MIN.</label>
                                <h2 className="display-4">
                                    {Math.round(data.temp_min)}
                                    <sup>°C</sup>
                                </h2>
                            </div>
                            <div className="col" style={{textAlign:'center'}}>
                            <label>MAX.</label>
                                <h2 className="display-4">
                                    {Math.round(data.temp_max)}
                                    <sup>°C</sup>
                                </h2>
                            </div>
                        </div>
                        <h2 style={{textAlign:'center'}} >
                            {capitalizar(data.descripcion)}
                        </h2>
                        </div>
                    </div>

                    <section>
                        <div className="card" style={{backgroundColor:'#4A88EA',  border:'none'}}>
                            <div className="card-body">
                                <h2 style={{textAlign:'center'}} >Pronóstico para las próximas horas</h2>
                                <div className="row row-cols-1 row-cols-md-3 g-4">

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF1}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF1} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF1)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF1)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF1)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF1)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF1)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF1)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF2}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF2} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF2)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF2)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF2)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF2)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF2)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF2)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF3}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF3} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF3)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF3)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF3)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF3)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF3)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF3)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF4}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF4} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF4)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF4)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF4)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF4)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>

                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF4)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF4)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF5}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF5} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF5)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF5)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF5)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF5)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>

                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF5)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF5)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF6}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF6} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF6)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF6)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF6)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF6)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>

                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF6)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF6)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF7}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF7} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF7)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF7)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF7)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF7)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>

                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF7)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF7)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="card" style={{backgroundColor:'#CED890', border:'none'}}>
                                            <img src={`http://openweathermap.org/img/wn/${data.iconoF8}@2x.png`} className="card-img-top mx-auto d-block" alt={data.descripcionF8} style={{margin_top:'10px', width: '100px',height:'100px'}}></img>
                                            <div className="card-body">
                                               <h2 style={{textAlign:'center'}} >
                                                   {capitalizar(data.descripcionF8)}
                                               </h2>
                                               <h1 className="display-1" style={{textAlign:'center'}}>
                                                    <span>{Math.round(data.tempF8)}</span>
                                                    <sup>°C</sup>
                                                </h1>

                                                <div className="row">
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MIN.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_minF8)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                    <div className="col" style={{textAlign:'center'}}>
                                                    <label>MAX.</label>
                                                        <h2 className="display-4">
                                                            {Math.round(data.temp_maxF8)}
                                                            <sup>°C</sup>
                                                        </h2>
                                                    </div>
                                                </div>

                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {
                                                            date(data.fechaF8)
                                                        }
                                                </p>
                                                <p style={{textAlign:'center', fontSize:'45px'}} >
                                                        {hour(data.fechaF8)} hrs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                :
                <div className="card" style={{margin:'4rem', backgroundColor:'#CED890', border:'none'}}>

                    <img src={sin_peticion} className="card-img-top mx-auto d-block img-fluid" alt="Sin peticiones" style={{width:'400px', height:'400px'}}></img>

                    <div className="card-body">
                        <h2 style={{textAlign:'center'}} >
                            Indique una locación por favor.
                        </h2>
                    </div>

                </div>
            }

        </div>

    )
}

function date(fecha)
{
    var date = fecha;

    var year = date.substr(0, 4);

    var newDate = date.substr(5,6);

    var month = newDate.substr(0, 2);

    var newDate2 = date.substr(5,5);

    var day = newDate2.substr(3,4)
    
    const fullDate = new Date (year, month-1, day);

    const completeDate = new Intl.DateTimeFormat("es-ES", {
        dateStyle:"medium"
    }).format(fullDate);

    return completeDate;
}
function hour(hora)
{
    var date = hora;
    var time = date.substr(5,11);
    var final_time = time.substr(6,11)

    return final_time;
}

function capitalizar (palabra)
{
    if(palabra==='')
    {
        return '';
    }else
    {
        return palabra[0].toUpperCase() + palabra.slice(1);
    }
}

export default ClimaInfo;