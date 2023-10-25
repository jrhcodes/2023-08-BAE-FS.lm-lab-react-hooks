import React, { useContext } from 'react';
import { styleBase } from './constants';
import { ThemeContext } from './parent';

export const Child1: React.FC = () => {
	const theme = useContext(ThemeContext);
	const themeStyle = { ...styleBase, ...theme }

	return <div style={themeStyle}>Child 1</div>;
};

export default Child1;
