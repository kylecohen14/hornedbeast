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
            {this.props.data.map( (value) =>
              <Hornedbeast
                title={value.title}
                image_url={value.image_url}
                description={value.description}
                horns={value.horns}/>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Main;
