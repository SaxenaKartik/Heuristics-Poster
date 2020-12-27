import React, {useState, createRef} from 'react'
import PosterForm from './PosterForm'
import Poster from './Poster'
import ContactInformation from './ContactInformation'
import {exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG} from "react-component-export-image";

function PosterContainer() {
    let [image, setImage] = useState("")
    let [file, setFile] = useState("")
    let [url, setURL] = useState("")
    let [qr, setQR] = useState("")
    let [date, setDate] = useState("")
    let [dateString, setDateString] = useState("")
    let [timeFrom, setTimeFrom] = useState("")
    let [timeTo, setTimeTo] = useState("")
    let [iteration, setIteration] = useState("")
    let [contacts, setContacts] = useState("")
    let [contactList, setContactList] = useState([])
    let [mode,setMode] = useState("light")


    async function handleChange(event) {
        let {name, value, files} = event.target
        if (name === "image") {
            setImage(() => value)
            setFile(() => URL.createObjectURL(files[0]))
        }
        if (name === "url") {
            setURL(() => value)
            if ((!value && !qr) || value) {
                try {
                    let response = await fetch('https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=' + value.toString(), {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    setQR(() => response.url)
                } catch (err) {
                    alert("QR Code" + err)
                }
            }
            // console.log(response.url)
        }
        if (name === "date") {
            var date = new Date(value)
            date = date.toDateString()
            setDateString(() => date)
            setDate(() => value)
        }
        if (name === "timeFrom") {
            setTimeFrom(() => value)
        }
        if (name === "timeTo") {
            setTimeTo(() => value)
        }
        if (name === "iteration") {
            setIteration(() => value)
        }
        if (name === "contacts") {
            setContacts(() => value)
            var i;
            var contactsNum = []
            for (i = 0; i < value; i++) {
                var obj = {"id": "", 'student': "", 'contact': ""}
                obj.id = i
                contactsNum.push(obj)
            }
            setContactList(() => contactsNum)
            // console.log(value)
        }
    }

    function contactAdd(event) {
        const {id, value} = event.target
        setContactList((prevState) => {
            const updatedContacts = prevState.map(c => {
                // console.log(c)
                if (c.id.toString(10) + "s" === id.toString(10)) {
                    return {
                        ...c,
                        student: value
                    }
                } else if (c.id.toString(10) + "c" === id.toString(10)) {
                    return {
                        ...c,
                        contact: value
                    }
                }
                return c
            })
            return updatedContacts
        })
    }

    const data = {
        'image': image,
        'file': file,
        'url': url,
        'date': date,
        'dateString': dateString,
        'timeFrom': timeFrom,
        'timeTo': timeTo,
        'iteration': iteration,
        'contacts': contacts,
        'qr': qr,
        'contactList': contactList
    }
    const ComponentToPrint = React.forwardRef((props, ref) => (
        <div ref={ref}>
            <Poster mode={mode} data={props.data} handleChange={props.handleChange}/>
        </div>
    ));

    const ref = createRef();
    const buttonStyle = {marginRight: "10px", color: "white", backgroundColor: "black"};
    const contactInfoList = contactList.map(item => <ContactInformation key={item.id} data={item}
                                                                        contactAdd={contactAdd}/>)
    return (
        <div className={"container"}>
            <div className={"main"}>
                <div  className={"poster"}>
                    <ComponentToPrint ref={ref} data={data} handleChange={handleChange} />
                </div>
                <div className="row">
                    <div style={{fontFamily: "monospace", padding: "1rem"}}>
                        <div
                            style={{
                                margin: "0 auto",
                                width: "500px",
                                padding: "2rem",
                                boxShadow: "5px 5px 10px 5px #888888",
                                borderRadius: "1rem"
                            }} className={"form-grpup"}>
                            <div className={"modal-header"}>
                                <h3>Enter Details</h3>
                            </div>
                            <br/>
                            <PosterForm data={data} handleChange={handleChange} mode={mode} changemode={setMode}/>
                            {contactInfoList}

                            <div className={"modal-footer"} style={{textAlign: "center"}}>
                                <button className={"btn btn-dark"} style={buttonStyle}
                                        onClick={() => exportComponentAsJPEG(ref, data.iteration ? data.iteration : "poster")}>Generate
                                    JPEG
                                </button>
                                <button className={"btn btn-dark"} style={buttonStyle}
                                        onClick={() => exportComponentAsPNG(ref, data.iteration ? data.iteration : "poster")}>Generate
                                    PNG
                                </button>
                                <button className={"btn btn-dark"} style={buttonStyle}
                                        onClick={() => exportComponentAsPDF(ref, data.iteration ? data.iteration : "poster")}>Generate
                                    PDF
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PosterContainer