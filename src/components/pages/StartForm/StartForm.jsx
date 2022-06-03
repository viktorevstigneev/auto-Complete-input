import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import AutoCompleteInput from '../../common/AutoCompleteInput';

import './style.css';

const StartForm = () => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (value) => {
		setInputValue(value);
	};

	const suggestionValue = (value) => value.field1;

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		evt.stopPropagation();
		const formData = new FormData(evt.target);
		console.log('formData: ', ...formData);
	};

	return (
		<form className="main" method="POST" onSubmit={handleFormSubmit}>
			<h1 className="main__title">Test form</h1>
			<AutoCompleteInput
				data={[
					{ field1: 'value1.1 value1.1 value1.1 value1.1', field2: 'value1.2' },
					{ field1: 'value2.1 value2.1 value2.1 value2.1', field2: 'value2.2' },
				]}
				value={inputValue}
				onChange={handleChange}
				suggestionValue={suggestionValue}
				placeHolder="Type something"
				name="read"
				hasClearButton={true} // true/false
				filterType="" // start/end/middle/all
			/>
			<button className="main__button" type="submit">
				Get form data
			</button>
		</form>
		
	);
};

StartForm.propTypes = {};

StartForm.defaultProps = {};

export default StartForm;
