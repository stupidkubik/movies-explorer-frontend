import { React } from 'react';
import PropTypes from 'prop-types';

function MainTitle({ text }) {
  return (
    <h2 className="main__title">{text}</h2>
  );
}

export default MainTitle;

MainTitle.propTypes = {
  text: PropTypes.string,
};
