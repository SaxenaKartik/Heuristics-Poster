import React from 'react'
import '../styleSheets/PosterForm.css'

function PosterForm(props){
	return (
		<div className = "formContainer">
			<div className="segment">
				<h2>Details</h2>
			</div>
			<form>
				<label>
					<input
						type = "file"
						accept = "image/*"
						name = "image" 
						value = {props.data.image}
						onChange = {props.handleChange}
						placeholder = "Image"
					/> 
				</label>
				<br/>
				<label>
					<input 
						type = "url"
						name = "url"
						value = {props.data.url}
						onChange = {props.handleChange}
						placeholder = "Contest URL"
					/> 
				</label>
				<br/>
				<label>
					<input 
						type = "date"
						name = "date"
						value = {props.data.date}
						onChange = {props.handleChange}
					/>
				</label>
				<br/>
				<label>
					<input 
						type = "time"
						name = "timeFrom"
						value = {props.data.timeFrom}
						onChange = {props.handleChange}
					/>
				</label>
				<label>
					<input 
						type = "time"
						name = "timeTo"
						value = {props.data.timeTo}
						onChange = {props.handleChange}
					/>
				</label>
				<br/>
				<label>
					<input 
						type = "number"
						name = "iteration"
						value = {props.data.iteration}
						onChange = {props.handleChange}
						placeholder = "Iteration Number"
					/>
				</label>
				<br/>
				<label>
					Contacts : 
					<select onChange = {props.handleChange} name = "contacts">
						<option value = {0}>0</option>
						<option value = {1}>1</option>
						<option value = {2}>2</option> 
						<option value = {3}>3</option> 
						<option value = {4}>4</option>  
					</select>
				</label>
				<br/>
			</form>
		</div>
	)
}

export default PosterForm