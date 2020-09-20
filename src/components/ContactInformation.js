import React from 'react'

function ContactInformation(props){
	return (
		<div>
			<label>
					<input
						id = {props.data.id+"s"}
						type = "text"
						name = "student"
						value = {props.data.student}
						placeholder = "Name"
						onChange = {props.contactAdd}
					/> 
				</label>
			<label>
					<input
						id = {props.data.id+"c"}
						type = "text"
						name = "contact" 
						value = {props.data.contact}
						placeholder = "Contact"
						onChange = {props.contactAdd}
					/> 
				</label>
		</div>
	)
}

export default ContactInformation;