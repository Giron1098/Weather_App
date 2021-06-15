import React from 'react'

const FormConsulta = function(data)
{
    return(

        <div className="card" style={{backgroundColor:'#4A88EA', border:'none'}} >

            <div className="card-body">

                <h2 style={{textAlign:'center'}} >Consulte el clima en su ciudad</h2>

                <form className="row" onSubmit={data.obtenerClima}>

                    <div className="form-floating col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" >
                        <input type="text" className="form-control" id="city" placeholder="Nombre de tu ciudad" ></input>
                        <label htmlFor="city">Ciudad</label>
                    </div>

                    <div className="form-floating col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" >
                        <input type="text" className="form-control" id="country" placeholder="Nombre de tu país" ></input>
                        <label htmlFor="country">País</label>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" style={{textAlign:'center'}}> 
                        <button className="btn btn-light" >Consultar clima</button>
                    </div>

                </form>

            </div>

        </div>

    )
}

export default FormConsulta;