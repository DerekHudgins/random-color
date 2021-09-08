import React, { Component } from 'react';
import TileColor from '../components/display/TileColor';

export default class ColorCahanger extends Component {
  state = {
    color: '#FFFFFF',
  };

  randomColor = () => {
    const colorOptions = [
      '#257912',
      '#116193',
      '#3B097C',
      '#67061B',
      '#CF6014',
    ];

    return colorOptions[Math.floor(Math.random() * colorOptions.length)];
  };

  changeColor = () =>
    setInterval(() => {
      this.setState({ color: this.randomColor() });
    }, 1000);

  componentDidMount = () => {
    this.changeColor();
  };
  render() {
    return <TileColor color={this.state.color} />;
  }
}
