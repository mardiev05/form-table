import React, { Component } from "react";

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: ["Shakhzod", "Saidafsal", "Ali", "Akhmadjon", "Bobur", "Doniyor"]
        }
    }








    render() {
        const { data, deleteUser, display } = this.props
        // const names = ["Saidafsal", "ali", "vali", "gani"]
        return <div>
            {/* <h1>Array={names[Math.floor(Math.random() * names.length)]}</h1> */}
            {/* <h1>Array={this.state.names[Math.floor(Math.random() * this.state.names.length)]}</h1> */}

            <table className={display !== "showEl" && "hidden"}>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <th>{item.fullName}</th>
                            <th>{item.email}</th>
                            <th>{item.phone}</th>
                            <th>
                                <button className="delete" onClick={() => deleteUser(item.id)}>Delete</button>
                            </th>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>;
    }
}
