import './style.css';
import Header from './components/Header';
import Hornform from './components/Hornform';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './data.json';
import { Component } from 'react';

class App extends Component{
  constructor (props) {
    super(props);
    this.state = {
      beastData: Data,
      selectHorns: 0
    };
  }

  // changeHorns = (num) => {
  //   if (num === 'default'){
  //     this.setState({ selectHorns: num});
  //   } else {
  //     this.setState({ selectHorns: parseInt(num)});
  //   }
  // }
  // filterHorns = () => {
  //   if (this.state.selectHorns === 'default') {
  //     this.setState({beastData: Data});
  //   } else {
  //     let filteredHorns  = Data.filter((value) => value.horns === this.state.selectHorns);
  //   this.setState({beastData: filteredHorns});
  //   }
  // }

  filterHorns = (hornValue) => {
    if (hornValue === 'default') {
      this.setState({beastData: Data});
    } else {
      let filteredHorns  = Data.filter((value) => value.horns === parseInt(hornValue));
      this.setState({beastData: filteredHorns});
    }
  }

  render () {
    return (
      <div>
        <Header title="Horned Beast"/>
        <Hornform
          filterHorns={this.filterHorns}
          changeHorns={this.changeHorns}
        />
        <Main data={this.state.beastData}/>
        <Footer author="Author:Kyle"/>
      </div>
    );
  }
}
export default App;
