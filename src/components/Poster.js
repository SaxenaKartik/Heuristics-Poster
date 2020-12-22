import React from 'react'
import '../styleSheets/Poster.css'
import logo from '../images/0.png'
import logonith from '../images/nith.png'

function Poster(props) {
    return (
        <div className="book">
            <div className="page">
				<span className="horizontal">
					<img className="logo" src={logo} alt="CSEC logo"/>
					<h3 className="CSEC">Computer Science Engineers Community</h3>
					<img className="logonith" src={logonith} alt="NITH logo"/>
				</span>
                <span className="horizontal" style={{marginBottom: "20px"}}>
					<h1 className="Heuristics"> HEURISTICS </h1>
					<h4 className="iteration" style={{
                        marginTop: "10px",
                        marginLeft: "10px"
                    }}> #{props.data.iteration ? props.data.iteration : "Insert Iteration"} </h4>
				</span>
                <div>
                    <h2 className="OPC">ONLINE PROGRAMMING CONTEST</h2>
                </div>
                <div className="horizontal">
                    <h4 className="date"> {props.data.dateString ? props.data.dateString :
                        <span style={{color: "red"}}>Insert Date</span>} </h4>
                    <span className="space"></span>
                    <h4 className="time"> {props.data.timeFrom ? props.data.timeFrom :
                        <span style={{color: "red"}}>Add Start Time</span>}&nbsp;-&nbsp;</h4>
                    <h4 className="time"> {props.data.timeTo ? props.data.timeTo :
                        <span style={{color: "red"}}>Add End Time</span>}&nbsp;IST</h4>
                </div>
                <div style={{"height": "60%", "width": "90%"}}>
                    {props.data.file === "" ? <div style={{margin: "20px"}} className={"alert alert-danger"}><h1
                            style={{margin: "auto"}}>Please Select Poster</h1></div> :
                        <img className="image" src={props.data.file} id="image" alt="Insert Poster"/>}
                </div>
                <span className="horizontal">
                    <img className="qr" src={props.data.qr} alt="QR Code"/>
					<span className="vertical, link">
                        <div>
                            {props.data.url ? props.data.url : "Insert Link"}
                        </div>
                        {/*<hr className={props.data.contactList.length ? 'rule' : null}/>*/}
                        <div style={{marginTop: "10px"}}>
                            <span
                                className="contacts">{props.data.contactList.length === 1 || props.data.contactList.length === 2 || props.data.contactList.length === 3 || props.data.contactList.length === 4 ?
                                props.data.contactList.slice(0, 4).map((item) => <div
                                    key={item.id}
                                    style={{height: "20px"}}> &nbsp;
                                    <p>{item.student} &nbsp;:&nbsp; {item.contact}</p></div>)
                                :
                                ""}
                            </span>
                         </div>
					</span>
				</span>
            </div>
        </div>
    )
}

export default Poster