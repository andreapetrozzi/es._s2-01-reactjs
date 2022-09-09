import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import scifi from '../src/data/scifi.json';
import BookList from './components/BookList';
import CommentsArea from './components/CommentsArea';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Component } from 'react';


class App extends Component {

  state = {
    asin: ''
  };


  setAsin = (asin) => {
    this.setState({ asin: asin });
  };

  render() {
    return (
      <div className='App'>

        {/* <WarningSign alert="Alert di React Bootstrap" />
        <MyBadge text="Questo è un badge personalizzato" color="success" /> */}

        <Container fluid>
        
          <Jumbotron fluid>
            <Container>
              <h1>Strive Books</h1>
              <p>Libreria scifi open-source commentabile</p>
            </Container>
          </Jumbotron>
        
          <Row>
            
            <Col><BookList books={scifi} setAsin={this.setAsin} /></Col>

            <Col xs={6} lg={4}><CommentsArea asin={this.state.asin} setAsin={this.setAsin} /></Col>

          </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;


// npm i bootstrap@4.6.1
// npm i react - bootstrap@1.6.5z




// TRACCIA: Migliorie per StriveBooks

    // 01 - Fai il refactor della struttura della tua pagina principale: 
    // dovranno esserci due colonne.
    // Una a sinistra contenente la griglia con i libri e una sulla destra con il componente CommentArea.
    // Entrambi dovranno essere sempre visibili.
    // Se inizialmente nessun libro è selezionato, il CommentArea non deve mostrare alcun contenuto.
    
    // 02 - Quando un libro sulla sinistra viene selezionato, 
    // il suo codice asin dovrà essere salvato nello stato del componente principale; 
    // in questo modo potrà essere passato giù al CommentArea via prop.
    // Quando CommentArea rileva un nuovo valore di asin con il metodo componentDidUpdate(), 
    // dovrà effettuare un fetch per ricevere i commenti che verranno poi visualizzati.



