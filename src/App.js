import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './data.json';
import { Component } from 'react';

class App extends Component{
  constructor (props) {
    super(props);
    this.state = {
      beastData: Data,
      // selectHorns: '',
    };
  }

  render () {
  return (
    <div>
      <Header title="Horned Beast"/>
      <Main data={this.state.beastData}/>
      <Footer author="Author:Kyle"/>
    </div>
  );
}
}
export default App;
