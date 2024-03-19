import './App.css';
import { useState } from 'react';

// Build a simple React.js form | React Form Validation
const MyForm = () => {
  const [form, setForm] = useState({});

  const updateForm = (e, fieldName) => {
      setForm({
        ...form,
        [fieldName]: fieldName === 'age' ? Number(e.target.value) : e.target.value
      });

      e.target.setCustomValidity('');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    // rest of actions
  }

  return (
    <div className="container">
      <div className="myFormText">My form</div>
       <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="name">
            <input
              type="text"
              className="myInput"
              name="name"
              onInvalid={ (e) => {
                e.target.setCustomValidity('Please insert your name.');
              }}
              id="name"
              value={ form.name || '' }
              onChange={ (e) => updateForm(e, 'name') }
              required={ true }
              placeholder="Add your name"
            />
        </label>
        <label htmlFor="age">
            <input
              type="number"
              className="myInput"
              onInvalid={ (e) => {
                e.target.setCustomValidity('Please insert your age.');
              }}
              value={ form.age || '' }
              onChange={ (e) => updateForm(e, 'age') }
              name="age"
              id="age"
              required={ true }
              placeholder="Add your age"
            />
        </label>
        <label htmlFor="description">
            <textarea
              type="text"
              value={ form.description || '' }
              className="myInput"
              onInvalid={ (e) => {
                e.target.setCustomValidity('Please insert your description.');
              }}
              name="description"
              onChange={ (e) => updateForm(e, 'description') }
              id="description"
              rows={ 10 }
              required={ true }
              placeholder="Add your description"
            />
        </label>
        <button type="submit" className="myButton">
          Submit
        </button>
       </form>
    </div>
  );
}

export default MyForm;
