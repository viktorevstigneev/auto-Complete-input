import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { EMPTY_STRING, NO_MATCHES_MESSAGE, EMPTY_FIELD_MESSAGE, MIN_ARRAY_LENGTH } from '../../../constants';
import './style.css';

const AutoCompleteInput = ({
	data,
	value,
	onChange,
	suggestionValue,
	placeHolder,
	name,
	hasClearButton,
	filterType,
	width,
	optionsBackground,
	optionsColor,
}) => {
	const [filteredData, setFilteredData] = useState([]);
	const [validationMessage, setValidationMessage] = useState('');

	const suggestionFilter = (inputString, item) => {
		const upperSuggestionValue = suggestionValue(item).toUpperCase();
		const upperInputString = inputString.toUpperCase();

		switch (filterType) {
			case 'all':
				return upperSuggestionValue.includes(upperInputString);
			case 'start':
				return upperSuggestionValue.startsWith(upperInputString);
			case 'end':
				return upperSuggestionValue.endsWith(upperInputString);
			case 'middle':
				return !upperSuggestionValue.startsWith(upperInputString) && !upperSuggestionValue.endsWith(upperInputString)
					? upperSuggestionValue.includes(upperInputString)
					: false;

			default:
				return false;
		}
	};

	const renderSuggestionList = (strainedData) =>
		strainedData &&
		strainedData.map((item) => (
			<li
				className="suggestion__item"
				style={{ background: optionsBackground, color: optionsColor }}
				key={suggestionValue(item)}
				data-name={suggestionValue(item)}
				onClick={handleSuggestionItemClick}
			>
				{suggestionValue(item)}
			</li>
		));

	const handleInputFocus = (evt) => {
		if (evt.target.value === EMPTY_STRING) {
			setValidationMessage(EMPTY_FIELD_MESSAGE);
		}
	};

	const handleSuggestionItemClick = (evt) => {
		const suggestionName = evt.target.getAttribute('data-name');
		onChange(suggestionName);
		setFilteredData(null);
	};

	const handleClearValue = (evt) => {
		evt.preventDefault();
		onChange('');
		setFilteredData(null);
		setValidationMessage('');
	};

	return (
		<div className="suggestion" style={{width}}>
			<div className="suggest__wrapper">
				<input
					className="suggestion__input"
					type="text"
					value={value}
					autoComplete="off"
					onFocus={handleInputFocus}
					onChange={(evt) => {
						evt.preventDefault();
						onChange(evt.target.value);
						const foundedMatches = data.filter(
							(item) => suggestionFilter(evt.target.value, item) && evt.target.value !== EMPTY_STRING
						);

						setFilteredData(foundedMatches);
						if (foundedMatches.length > MIN_ARRAY_LENGTH) {
							setValidationMessage('');
						} else {
							setValidationMessage(NO_MATCHES_MESSAGE);
						}
						if (evt.target.value === EMPTY_STRING) {
							setValidationMessage(EMPTY_FIELD_MESSAGE);
						}
					}}
					placeholder={placeHolder}
					name={name}
				/>
				{hasClearButton && (
					<button className="suggestion__clear" onClick={handleClearValue}>
						&times;
					</button>
				)}
			</div>

			{validationMessage && <p className="suggestion__message">{validationMessage}</p>}
			{filteredData && <ul className="suggestion__list">{renderSuggestionList(filteredData)}</ul>}
		</div>
	);
};

AutoCompleteInput.propTypes = {
	data: PropTypes.array,
	value: PropTypes.string,
	onChange: PropTypes.func,
	suggestionValue: PropTypes.func,
	placeHolder: PropTypes.string,
	name: PropTypes.string,
	hasClearButton: PropTypes.bool,
	filterType: PropTypes.string,
  with: PropTypes.string,
  optionsBackground: PropTypes.string,
  optionsColor: PropTypes.string
};

AutoCompleteInput.defaultProps = {};

export default AutoCompleteInput;
