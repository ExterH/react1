import React from 'react';
import {Link} from 'react-router-dom';

export default class Pg_00 extends React.Component
{
    state =
    {
        alumnos:[]
    }
    componentDidMount()
    {
        fetch('http://localhost/itic-91/public/api/get07')
        .then(response => response.json())
        .then(alumnosJson => this.setState({alumnos: alumnosJson}))
    }
    render()
    {
        const{alumnos}=this.state
        return(
            <div className="container">
                <br/>
                <h2>
                    Alumnos ({alumnos.length})
                    <p style={{textAlign:"right"}}>
                        <Link to={{pathname: '/register'}}>
                            <button className="btn btn-outline-success btn-sm">
                                Alumno Nuevo 
                            </button>
                        </Link>
                    </p>
                </h2>
                <br/>
                <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Alumno</th>
                            <th scope="col">Fecha N</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Grupo</th>
                            <th scope="col">Otros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alumnos.map((alumno, i)=>
                            <tr key={i}>
                                <th scope="row"> {i+1} </th>
                                <td>
                                    <img src={alumno.img} alt={alumno.nombre} width='30px' />
                                </td>
                                <td> {alumno.nombre} </td>
                                <td> {alumno.fn} </td>
                                <td> {alumno.genero} </td>
                                <td> {alumno.clave} </td>
                                <td>
                                    <Link to={{pathname: '/detail', state: {id: alumno.id_alumno}}}>
                                        <button className="btn btn-outline-info btn-sm">
                                            Detalle ({alumno.id_alumno})
                                        </button>
                                    </Link>
                                    { ' ' }
                                    <Link to={{pathname: '/delete', state: {id: alumno.id_alumno}}}>
                                        <button className="btn btn-outline-danger btn-sm">
                                            Borrar ({alumno.id_alumno})
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}