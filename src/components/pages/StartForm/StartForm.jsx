import React, { Fragment, useState } from 'react';

import AutoCompleteInput from '../../common/AutoCompleteInput';

import './style.css';

const StartForm = () => {
	const [inputValue, setInputValue] = useState('');
	const [formValue, setFormValue] = useState();
	console.log('formValue: ', formValue);
	const [isShowModal, setIsShowModal] = useState(false);

	const handleChange = (value) => {
		setInputValue(value);
	};

	const suggestionValue = (value) => value.city;

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		if (inputValue) {
			const formData = new FormData(evt.target);
			setFormValue(...formData);
			setIsShowModal(true);
		} else {
			alert('field is empty');
		}
	};

	return (
		<>
			{isShowModal && (
				<div className="modal">
					<h2 className="modal__title">Form successfully posted with data:</h2>
					{formValue && formValue.map((item) => <div className="modal__item">{item}</div>)}
					<button className="modal__close" onClick={() => setIsShowModal(false)}>
						Ok
					</button>
				</div>
			)}
			<form className="main" method="POST" onSubmit={handleFormSubmit}>
				<h1 className="main__title">Test form</h1>
				<AutoCompleteInput
					data={[
						{ city: 'Best', country: 'Belarus' },
						{ city: 'Baranovichi', country: 'Belarus' },
						{ city: 'Bereza', country: 'Belarus' },
						{ city: 'Grodno', country: 'Belarus' },
						{ city: 'Minsk', country: 'Belarus' },
						{ city: 'Moscow', country: 'Russia' },
					]}
					value={inputValue}
					onChange={handleChange}
					suggestionValue={suggestionValue}
					placeHolder="Type something"
					name="city"
					hasClearButton={true}
					filterType="all"
				/>
				<button className="main__button" type="submit">
					Post form data
				</button>
			</form>
		</>
	);
};

export default StartForm;
