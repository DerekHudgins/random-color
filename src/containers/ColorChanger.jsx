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

    const newColor =
      colorOptions[Math.floor(Math.random() * colorOptions.length)];

    if(newColor !== this.state.color) return newColor;
    else
      return 'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")';
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
