import React, { Component } from "react";
import Modal from "react-modal";
import Table from './Table'
import "./form.css"
// import videoBg from "./vid/nature.mp4"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class formTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appear: "showEl",
            id: 7,
            userList: [
                {
                    id: 0,
                    fullName: "Shakhzod M",
                    email: "Example@gmail.com",
                    phone: 123456789
                }, {
                    id: 1,
                    fullName: 'Jenny Chan',
                    email: 'jenny.chan@email.com',
                    phone: 123456770
                },
                {
                    id: 2,
                    fullName: 'Jessica warren',
                    email: 'jessica.warren@email.com',
                    phone: 123456771
                },
                {
                    id: 3,
                    fullName: 'Tony Frank',
                    email: 'tony.frank@email.com',
                    phone: 123456772

                },
                {
                    id: 4,
                    fullName: 'Jeremy Clark',
                    email: 'jeremy.clark@email.com',
                    phone: 123456773

                },
                {
                    id: 5,
                    fullName: 'Raymond Edwards',
                    email: 'raymon.edwards@email.com',
                    phone: 123456774

                },
                {
                    id: 6,
                    fullName: 'Shakhzod Mardiev',
                    email: 'mardiev2125@email.com',
                    phone: 12345678977

                },
            ]
        }
    }



    inputHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
        console.log(name, value)
    }

    deletHandler = (id) => {
        const filterd = this.state.userList.filter(item => item.id !== id)
        this.setState({
            userList: filterd
        })
    }

    saveData = (e) => {
        e.preventDefault()
        const { fullName, email, phone, id, userList } = this.state
        const newUser = {
            fullName,
            email,
            phone,
            id
        }
        // const unShiftUser = this.state.userList
        // unShiftUser.unshift(newUser)
        this.setState({
            userList: [newUser, ...userList],
            id: id + 1
        })
        this.formAppear("showEl")
        e.target.reset()
    }




    formAppear = (value) => {
        this.setState({
            appear: value
        })
    }





    render() {
        const { appear, userList } = this.state;

        return (
            <div>

                <div className="video__cont">
                    <video src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/49_20HQOeijh9fog1/videoblocks-19122_r8vpa82td__d9232c9df915f4211b6cacf935cd2df7__P360.mp4" autoPlay loop muted />

                </div>
                <div className={appear !== "showEl" && "form__cont"}>
                    <form className={appear !== "showEl" ? "show " : "hidden"} onSubmit={this.saveData}>
                        <p className="closeBtn" onClick={() => this.formAppear("showEl")}>X</p>
                        <div className="input">
                            <label htmlFor="fullName">Full Name</label>
                            <input id="fullName" type="text" name="fullName" onChange={this.inputHandler} placeholder="Enter Your Full Name" required />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" type="email" name="email" onChange={this.inputHandler} placeholder="Enter Your Email Address" required />
                        </div>
                        <div className="input">
                            <label htmlFor="phone">Phone Number</label>
                            <input id="phone" type="text" name="phone" onChange={this.inputHandler} placeholder="Enter Your Phone Number" required />
                        </div>
                        <button type="submit">Sumbit</button>
                    </form>
                </div>

                <Table data={userList} display={appear} deleteUser={this.deletHandler} />
                <div className="btns">
                    <button className={appear !== "showEl" ? "hidden" : "addBtn"} onClick={() => this.formAppear(true)}>Add User</button>
                </div>
            </div>

        )
    }
}
