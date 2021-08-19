import React from 'react';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import heart from '../img/simple-red-heart.jpg';
import Selectedbeast from './SelectedBeast';

class Hornedbeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voteBeast: 0,
      showModal: false
    };
  }
  vote = () => {
    this.setState({
      voteBeast: this.state.voteBeast + 1,
    });
  }

  showAsModal = () => {
    this.setState({ showModal: !this.state.showModal});
  };
  render() {
    return(
      <div>
        <Card bg='info' style={{ width: '18rem', height: '38rem'}} border="primary">
          <Card.Title><h2>{this.props.beastarr.title}</h2></Card.Title>
          <img />
          <Card.Img variant="top" onClick={this.showAsModal} src={this.props.beastarr.image_url} alt={this.props.beastarr.keyword} />
          <Card.Body>
            <Card.Text>
              <p>Description: {this.props.beastarr.description}</p>
            </Card.Text>
            <p>Number of horns: {this.props.beastarr.horns}</p>
            <span>Number of times faviorted: {this.state.voteBeast}</span>
            <img src={heart} onClick={this.vote} width='20px' height='auto'/>
          </Card.Body>
          <Selectedbeast
            showModal={this.state.showModal}
            selectBeast={this.state.modal}
            modalOn={this.showAsModal}
            title={this.props.beastarr.title}
            image={this.props.beastarr.image_url}
            description={this.props.beastarr.description}
            horns={this.props.beastarr.horns}
          />
        </Card>
      </div>
    );
  }
}

export default Hornedbeast;
