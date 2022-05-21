import React, { Component } from 'react';
import Form from "./form/formTable"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    clk = () => {
        console.log("hey")
    }



    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Form />
            </div>
        );
    }
}

export default App;