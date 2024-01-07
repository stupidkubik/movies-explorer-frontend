import { React } from 'react';
import PropTypes from 'prop-types';

function LoadMore({ loadMore }) {
  return (
    <button className="loadMore" type="button" onClick={loadMore}>More</button>
  );
}

export default LoadMore;

LoadMore.propTypes = {
  loadMore: PropTypes.func,
};
