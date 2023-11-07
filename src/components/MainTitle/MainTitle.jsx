import { React } from 'react';
import PropTypes from 'prop-types';

function MainTitle({ text }) {
  return (
    <p className="main__title">{text}</p>
  );
}

export default MainTitle;

MainTitle.propTypes = {
  text: PropTypes.string,
};
