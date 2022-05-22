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
                <Form />
            </div>
        );
    }
}

export default App;