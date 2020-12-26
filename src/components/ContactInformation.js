import React from 'react'

function ContactInformation(props) {
    return (
        <div>
            <form>
                <label>Contact Details</label>
                <div className={"col-auto"} style={{margin: "5px"}}>
                    <input
                        className={"form-control"}
                        id={props.data.id + "s"}
                        type="text"
                        name="student"
                        value={props.data.student}
                        placeholder="Name"
                        onChange={props.contactAdd}
                    />
                </div>
                <div className={"col-auto"} style={{margin: "5px"}}>
                    <input
                        className={"form-control"}
                        id={props.data.id + "c"}
                        type="text"
                        name="contact"
                        value={props.data.contact}
                        placeholder="Contact"
                        onChange={props.contactAdd}
                    />
                </div>
            </form>
        </div>
    )
}

export default ContactInformation;