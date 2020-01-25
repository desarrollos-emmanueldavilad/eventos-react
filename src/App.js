import React , {Component, Fragment} from 'react';
import Header from './components/header';
import ListaNoticias from './components/listaNoticias';
import Formulario from './components/formulario';


class App extends Component {
  state = {  
    noticias :[]
  }


  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'technology') =>{
    const url = `https://newsapi.org/v2/top-headlines?country=ie&category=${categoria}&apiKey=92f5e7c748864fb0a68a3dc53127be7a`;
  
  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias : noticias.articles
    })
  }

  render() { 
    
    return ( 
      <Fragment>
        <Header 
        titulo='Noticias React Api'
        />
        <div className="container white contenedor-noticias">
          <Formulario
          consultarNoticias={this.consultarNoticias}
          />
      <ListaNoticias 
        noticias = {this.state.noticias}
      />
        </div>
      </Fragment>
     );
  }
}
 
export default App;


