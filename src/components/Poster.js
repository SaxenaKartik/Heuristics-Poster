import React from 'react'
import '../styleSheets/Poster.css'
import logo from '../images/0.png'
import logonith from '../images/nith.png'

function Poster(props){
	return(
		<div className = "book">
		    {/*<ComponentToPrint ref = {ref} data = {props.data}/>*/}
		    <div className="page" >
				<span className = "horizontal">
					<img className = "logo" src = {logo} alt = "CSEC logo"/>
					<h3 className = "CSEC">Computer Science Engineers Community</h3>
					<img className = "logonith" src = {logonith} alt = "NITH logo"/>
				</span>
				<span className = "horizontal">
					<h1 className = "Heuristics"> HEURISTICS </h1>
					<h4 className = "iteration"> #{props.data.iteration ? props.data.iteration : "Insert Iteration"} </h4>
				</span>
				<h2 className="OPC">ONLINE PROGRAMMING CONTEST</h2>
				<div className = "horizontal">
					<h4 className="date" > {props.data.dateString ? props.data.dateString : "Insert Date"} </h4>
					<span className = "space" ></span>

					<h4 className = "time" > {props.data.timeFrom ? props.data.timeFrom : "Insert Time"}&nbsp;-&nbsp;</h4>
					<h4 className = "time" > {props.data.timeTo ? props.data.timeTo : "Insert Time"}&nbsp;Hours</h4>
				</div>
				<img className ="image" src = {props.data.file} id = "image" alt="Insert Poster"/>
				<span className = "horizontal">
					<img className = "qr" src = {props.data.qr} alt = "QR Code"/>
					<span className = "vertical, link">
						<p>{props.data.url ? props.data.url : "Insert Link"}</p>
						<span className="contacts" >{	props.data.contactList.length===1 || props.data.contactList.length===2 || props.data.contactList.length===3 || props.data.contactList.length===4? 
							props.data.contactList.slice(0,2).map((item)=><div key = {item.id} className = 'contact'> &nbsp; <p>{item.student} &nbsp;:&nbsp; </p><p>{item.contact}</p></div>)
							: 
							""}
						</span>
						<hr className = {props.data.contactList.length ? 'rule' : null}/>
						<span className="contacts">{ props.data.contactList.length===3 || props.data.contactList.length===4 ? 
							props.data.contactList.slice(2,4).map((item)=><div key = {item.id} className = 'contact'> &nbsp; <p>{item.student} &nbsp;:&nbsp; </p><p>{item.contact}</p></div>)
							: 
							""}
						</span>
					</span>
				</span>
			</div>
		</div>
	)
}

export default Poster