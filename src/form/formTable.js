import React, { Component } from "react";
import Modal from "react-modal";
import "./form.css"
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class formTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appear: false,
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

    saveData = (e) => {
        e.preventDefault()
        const { fullName, email, phone, id } = this.state
        const newUser = {
            fullName,
            email,
            phone,
            id
        }
        console.log(newUser)
        this.setState({
            userList: [...this.state.userList, newUser],
            id: id + 1
        })
        e.target.reset()
    }


    deletHandler = (id) => {
        const filterd = this.state.userList.filter(item => item.id !== id)
        this.setState({
            userList: filterd
        })
    }

    formAppear = (value) => {
        this.setState({
            appear: value
        })
    }





    render() {
        const { appear, userList } = this.state
        return (
            <div>
                <div className="btns">
                    <button onClick={() => this.formAppear(true)}>True</button>
                </div>






                <form className={appear ? "show" : "hidden"} onSubmit={this.saveData}>
                    <p className="closeBtn" onClick={() => this.formAppear(false)}>X</p>
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

                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(item => (
                            <tr key={item.id}>
                                <th>{item.fullName}</th>
                                <th>{item.email}</th>
                                <th>{item.phone}</th>
                                <th>
                                    <button className="delete" onClick={() => this.deletHandler(item.id)}>Delete</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        )
    }
}
