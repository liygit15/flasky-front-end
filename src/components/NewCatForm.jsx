import { useState } from 'react';
import PropTypes from 'prop-types';
const kDefaultsFormState = {
  name: '',
  personality: '',
  color: ''
};

const NewCatForm = ({ onHandleSubmit }) => {
  const [formData, setFormData] = useState(kDefaultsFormState);
  // const [color, setColor] = useState('');
  // const [personality, setPersonality] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    // console.log(inputName, inputValue)
    setFormData (formData => {
      return {
        ...formData,
        [inputName]: inputValue
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit(formData);
    setFormData(kDefaultsFormState);
    // const newCat = {
    //   name,
    //   personality: 'festive',
    //   color: 'Silver and Gold',
    //   // pet_count: 0
    //   // petCount: 0
    // };
    // onHandleSubmit(newCat);
    // setName('');
  };

  const makeControlledInput = (inputName, labelText) => {
  const id = `input-${inputName}`;

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={'text'}
        name={inputName}
        id={id}
        value={formData[inputName]}
        onChange={handleChange}
      />
    </div>
  );
};


  return (
    <form onSubmit={handleSubmit}>
      {makeControlledInput('name', 'Cat Name')}
      {makeControlledInput('color', 'Color')}
      {makeControlledInput('personality', 'Personality')}
      <input type="submit" value="Add a cat" />
    </form>
  );
};

NewCatForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};

export default NewCatForm;