import React from 'react';
import PropTypes from 'prop-types';
import style from './tile.css';

const TileColor = ({ color }) => {
  return <div className={style.tile} style={{ background: color }}></div>;
};

TileColor.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TileColor;
