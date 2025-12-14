import PropTypes from 'prop-types';

const Cat = ({name, personality, color, caretaker}) => {
  return (
    <li className="cat">
      <h2>{name}</h2>
      <p>Color: {color}</p>
      <p>Personality {personality}</p>
      <p>Caretaker {caretaker}</p>
      <button>Pet</button>
    </li>
  );
};

Cat.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired
}

export default Cat;