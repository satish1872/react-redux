import { useState } from 'react';

function Form() {
const [name, setName] = useState('');

function handleSubmit() {
	alert(`Name: ${name}`);
}
	
return (
	<div className="Form">
	<h3>Controlled Component</h3>
	<form onSubmit={handleSubmit}>
		<label>Name:</label>
		<input name="name" value={name} onChange={(e) => setName(e.target.value)} />
		<button type="submit">Submit</button>
	</form>
	</div>
);
}

export default Form;