import PropTypes from 'prop-types';
import { useState } from 'react';

const Cat = ({name, personality, color, caretaker}) => {
  const [petCount, setPetCount] = useState(0);

  const increasePets = () => {
    setPetCount((prePetCount) => prePetCount + 1 );
  };
  return (
    <li className="cat">
      <h2>{name}</h2>
      <p>Color: {color}</p>
      <p>Personality {personality}</p>
      <p>Caretaker {caretaker}</p>
      <p>Neow! I have been pet {petCount} times {caretaker}</p>
      <button onClick={event => increasePets()}>Pet</button>
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