import React from 'react';
import {Link} from 'react-router-dom';

export default class Pg_00 extends React.Component
{
    state =
    {
        alumno:[]
    }
    componentDidMount()
    {
        fetch('http://localhost/itic-91/public/api/get04/'+this.props.location.state.id)
        .then(response => response.json())
        .then(alumnoJson => this.setState({alumno: alumnoJson}))

        fetch('http://localhost/itic-91/public/api/del01/'+this.props.location.state.id, {method:'delete'});

    }
    render()
    {
        const { alumno } =this.state
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getMinutes();
        return(
            <center>
                <br/>
                <h2>
                    Borrar alumno
                </h2><br/>
                <div className="card mb-3" style={{maxWidth:"540px", color:"#000000", backgroundColor:"#FAFA00"}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={alumno.img} className="card-img" alt={alumno.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {alumno.app}, {alumno.nombre} </h5>
                                <p className="card-text">
                                    <b>Fecha: </b>{alumno.fn}<br/>
                                    <b>Genero: </b>{(alumno.genero === 0)? 'Femenino':'Masculino'}<br/>
                                    <b>Grupo: </b>{alumno.id_grupo}<br/>
                                </p>
                                <p className="card-text">
                                    <small className="text-mute">
                                        Ultima actualización hace: <br/> {alumno.created_at}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="alert alert-success" role="alert" style={{maxWidth:"750px"}}>
                    <h4 className="alert-heading">Bien hecho!!</h4>
                    <p>El alumno ha borrado el registro exitosamente</p>
                    <hr/>
                    <p className="mb-0"> {date+' || '+time} </p>
                </div>
                <Link to="/">
                    <button type="button" className="btn btn-outline-light">
                        Regresar
                    </button>
                </Link>
            </center>
        )
    }
}