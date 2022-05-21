import React, { Component } from "react";
import "./form.css"

export default class formTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [
                {
                    fullName: "Shakhzod M",
                    email: "Example@gmail.com",
                    phone: 123456789
                }
            ]
        }
    }



    inputHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(name, value)
    }

    saveData = (e) => {
        e.preventDefault()
        const { fullName, email, phone } = this.state
        const newUser = {
            fullName,
            email,
            phone
        }

        console.log(newUser)
        this.setState({
            userList: [...this.state.userList, newUser]
        })
        e.target.reset()
    }





    render() {
        const { fullName, email, phone } = this.state
        return (
            <div>
                <form onSubmit={this.saveData}>
                    <div className="input">
                        <label htmlFor="fullName">Full Name</label>
                        <input id="fullName" type="text" name="fullName" onChange={this.inputHandler} placeholder="Enter Your Full Name" />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" name="email" onChange={this.inputHandler} placeholder="Enter Your Email Address" />
                    </div>
                    <div className="input">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="text" name="phone" onChange={this.inputHandler} placeholder="Enter Your Phone Number" />
                    </div>
                    <button type="submit">Sumbit</button>
                </form>
                <p>fullName: {fullName}</p>
                <p>email: {email}</p>
                <p>phone: {phone}</p>
                <table>
                    <thead>
                        <th>
                            <tr>Full Name</tr>
                            <tr>Email</tr>
                            <tr>Phone Number</tr>
                        </th>
                    </thead>
                    <tbody>
                        {this.state.userList.map(item => (
                            <th key={item.length}>
                                <tr>{item.fullName}</tr>
                                <tr>{item.email}</tr>
                                <tr>{item.phone}</tr>
                            </th>
                        ))}
                    </tbody>
                </table>
            </div>

        )
    }
}
