import React from'react';
// import { Component } from 'react';
import Hornedbeast from './Hornedbeast';
import {Row, Container} from 'react-bootstrap';


class Main extends React.Component {
  render () {
    return(
      <div>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {this.props.data.map(beast =>
              <Hornedbeast
                beastarr={beast}
              />
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Main;
