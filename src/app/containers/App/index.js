import React from 'react';
import LeftBar from '../../components/LeftBar';
import Header from '../../components/Header';
import ToDo from '../../components/ToDo';
import logoFox from '../../../assets/images/logo-fox.svg';
import './App.css';

const App = () =>  (
  <div>
    <Header />
    <section>
      <img src={logoFox} alt="fox" />
      <LeftBar />
      <ToDo />
    </section>
  </div>
);

export default App;