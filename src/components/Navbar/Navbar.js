import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    render(){
        return(
            <React.Fragment>
                <header className='encabezado bg-success text-white p-2 '>
                        <h1>Aplicación de películas</h1>
                        <section className='opciones'>
                            <p>Ordenar ASC/ DESC</p>
                            <i className="fas fa-th"></i>
                            <i className="fas fa-align-justify"></i>
                            <form action="">
                                <input type="text" name="search" id="" placeholder="Search"/>
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </section>
                </header>
            </React.Fragment>
        )
    }

}
export default Navbar;