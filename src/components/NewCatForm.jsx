// import axios from 'axios';
import { useState } from 'react';


const NewCatForm = ({onHandleSubmit}) => {
    const [name, setName] =useState('');

    const handleNameChange = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        const newCat = {
            name,
            personality:'festive',
            color:'silver and Gold',
            // petCount:0
        };
        onHandleSubmit(newCat);
        setName('');
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cat Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
            <div>
                <input type="submit"  value="Add a cat"/>
                <p value='what'>hello</p>
            </div>
        </form>
    );
};

export default NewCatForm;