import PropTypes from 'prop-types';

const Error = ({icon, text}) => {
  return (
    <p className="error">
      <span>{icon}</span> {text}
    </p>
  );
}


Error.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string
}

Error.defaultProps = {
  text: 'There was an error fecthing questions.',
  icon: '💥'
}

export default Error;
