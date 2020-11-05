import PropTypes from 'prop-types';

const Movie = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  genre: PropTypes.string,
  runtime: PropTypes.string,
  url: PropTypes.string,
});

export default Movie;
