import React from 'react'
import '../styleSheets/PosterForm.css'
import Switch from "react-switch"

function PosterForm(props) {
    return (
        <div className="formContainer">
            <form>
                <div>
                    <label>
                        <label style={{display: "block"}}>Mode</label>
                        <Switch
                            checked={props.mode === "dark" ? true : false}
                            onChange={(event) => {
                                if (props.mode === "dark") {
                                    props.changemode("light")
                                }
                                if (props.mode === "light") {
                                    props.changemode("dark")
                                }
                            }}
                            onColor="#000000"
                            onHandleColor="grey"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
                            id="material-switch"
                        /> </label>
                </div>
                <div className={"form-group"}>
                    <label className={"form-label"}>
                        Choose Image
                    </label>
                    <input
                        className={"form-control "}
                        type="file"
                        accept="image/*"
                        name="image"
                        value={props.data.image}
                        onChange={props.handleChange}
                        placeholder="Image"
                    />
                </div>
                <div>
                    <label>Content Url</label>
                    <input
                        className={"form-control"}
                        type="url"
                        name="url"
                        value={props.data.url}
                        onChange={props.handleChange}
                        placeholder="Contest URL"
                    />
                </div>
                <br/>
                <div className={"form-group"}>
                    <label>Contest Date</label>
                    <input
                        className={"form-control"}
                        type="date"
                        name="date"
                        value={props.data.date}
                        onChange={props.handleChange}
                        placeholder={"Date"}
                    />
                </div>
                <div className={"form-group"}>
                    <label>
                        StartTime
                    </label>
                    <input
                        placeholder={"Start Time"}
                        className={"form-control"}
                        type="time"
                        name="timeFrom"
                        value={props.data.timeFrom}
                        onChange={props.handleChange}
                    />
                </div>
                <div className={"form-group"}>
                    <label>
                        End Time
                    </label>
                    <input
                        type="time"
                        name="timeTo"
                        className={"form-control"}
                        placeholder={"End Time"}
                        value={props.data.timeTo}
                        onChange={props.handleChange}
                    />
                </div>
                <br/>
                <div className={"form-group"}>
                    <label>
                        Iteration Number :
                    </label>
                    <input
                        className={"form-control"}
                        type="number"
                        name="iteration"
                        value={props.data.iteration}
                        onChange={props.handleChange}
                        placeholder="Iteration Number"
                    />
                </div>
                <div className={"form-group"}>
                    <label>
                        Contacts :
                    </label>

                    <select className={"form-control"} onChange={props.handleChange} name="contacts">
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default PosterForm