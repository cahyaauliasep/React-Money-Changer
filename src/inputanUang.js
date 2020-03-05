import React from 'react';

export default function InputanUang(props){
	const {tukarUangOptions} = props
	return(
		<div>
			<input type="number" className="inputan-uang" />
			<select className="select-uang">
				{tukarUangOptions.map(option=> (
				<option value={option}>{option}</option>
			))}
			</select>
		</div>
	);
}