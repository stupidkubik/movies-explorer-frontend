import { React } from 'react';
import PropTypes from 'prop-types';

function LoadMore({ loadMore }) {
  return (
    <button className="loadMore" type="button" onClick={loadMore}>Ещё</button>
  );
}

export default LoadMore;

LoadMore.propTypes = {
  loadMore: PropTypes.func,
};
