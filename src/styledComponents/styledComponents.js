import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const NetflixInput = styled(InputBase)`
	z-index: ;
	background: #fff;
	padding: 25.5px;
	height: 30px;
	border-radius: 5px;
	margin-top: -2px;
`;

const widths = {
	fullWidth: '100%',
	medium: '260px',
	small: '160px',
};

export const NetflixButton = styled.button`
	background-color: ${props => (props.color == 'gray' ? 'gray' : 'red')};
	z-index: 15;
	color: #fff;
	border-radius: ${({ radius }) => radius && '5px'};
	text-transform: inherit;
	padding: 15px;
	font-size: 1.1rem;
	border: none;
	outline: none;
	cursor: pointer;
	width: ${({ wide }) => widths[wide] || '160px'};
`;
