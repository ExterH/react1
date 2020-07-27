import React from 'react';
import {Link} from 'react-router-dom';

export default class Register extends React.Component
{
    state = 
    {
        nombre: '',
        app: '',
        fn: '',
        genero: 0,
        img: '',
        id_grupo: '1',
        grupos: [],
        alta: ''
    }
    componentDidMount()
    {
        fetch('http://localhost/itic-91/public/api/get01g')
        .then(response => response.json())
        .then(gruposJson => this.setState({grupos: gruposJson}))
    }
    changeField = (event) => 
    {
        this.setState
        (
            {
                [event.target.name]: event.target.value
            }
        ) 
    }
    subForm = (event) =>
    {
        event.preventDefault();
        let Data = 
        {
            nombre: this.state.nombre,
            app: this.state.app,
            fn: this.state.fn,
            genero:this.state.genero,
            img: this.state.img,
            id_grupo: this.state.id_grupo
        };
        fetch('http://localhost/itic-91/public/api/post01',
        {
            method:'POST',
            headers: 
            {
                'Accept':'applications/json',
                'Content-Type': 'applications/json',
            },
            mode: "cors",
            body: JSON.stringify(Data)
        })
        .then(response => response.json())
        .then(alta => this.setState
        (
            {
                alta: "¡¡¡Registro exitoso!!!"
            }
        ))
    }
    render()
    {
        const{grupos, alta}=this.state
        return(
            <div className="container" style={{width: "30%"}}>
                <br/>
                <h1>Alta alumno</h1>
                {
                    alta?
                    <div className="alert alert-success" role="alert">
                        {alta}
                    </div>
                    :
                    ""
                }
                <br/>
                <form onSubmit={this.subForm}>
                    <div className="form-group" >
                        <label>Nombre(s): </label>
                        <input type="text" name="nombre" onChange={this.changeField} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Apellido paterno: </label>
                        <input type="text" name="app" onChange={this.changeField} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Fecha de nacimiento: </label>
                        <input type="date" name="fn" onChange={this.changeField} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Genero:</label><br/>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="rgenero01" 
                            name="genero" value="0" onChange={this.changeField} />
                            <label className="custom-control-label" htmlFor="rgenero01" >Femenino</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="rgenero02" 
                            name="genero" value="1" onChange={this.changeField} />
                            <label className="custom-control-label" htmlFor="rgenero02" >Masculino</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sGroup"></label>
                            <select className="form-control" name="id_grupo" id="sGroup" >
                                { grupos.map(
                                    (grupo, i) =>
                                    <option value={grupo.id_grupo} key={i} >
                                        {grupo.id_grupo+' '+grupo.clave + ' - ' + grupo.nombre}
                                    </option>
                                    )}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Foto: </label>
                        <input type="text" name="img" onChange={this.changeField} className="form-control" />
                    </div>
                    <button className="btn btn-primary">Registrar</button>
                </form><br/>
                <Link to="/">
                    <button type="button" className="btn btn-outline-light">
                        Regresar
                    </button>
                </Link><br/><br/><br/><br/>
            </div>
        )
    }
}
