import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AutoCompleteInput from '../../common/AutoCompleteInput';
import './style.css';

const StartForm = () => (
	<Fragment>
		<AutoCompleteInput />
	</Fragment>
);

StartForm.propTypes = {};

StartForm.defaultProps = {};

export default StartForm;
