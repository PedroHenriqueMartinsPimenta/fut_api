import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Campeonato from './components/Campeonato'
import Tabela from './components/Tabela';
import Time from './components/Time';
import Artilharia from './components/Artilharia';
import PrxJogo from './components/PrxJogo';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12' id='head'>
            <h2>Futboll</h2>
          </div>
          <hr></hr>
        </div>
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Campeonato}/>
                <Route path='/tabela/:id' Component={Tabela}></Route>
                <Route path='/time/:id' Component={Time}></Route>
                <Route path='/artilharia/:id' Component={Artilharia}></Route>
                <Route path='/partidas/next/:id' Component={PrxJogo}></Route>
            </Routes>
        </BrowserRouter>
        <div className='row'>
          <div className='col-md-12'>
            <a href='javascript: window.history.back()' className='btn btn-outline-danger'>Voltar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
