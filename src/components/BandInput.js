import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    bandName: ''
  }

  handleOnChange = ({value}) => {
    this.setState({
      bandName: {value},
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
