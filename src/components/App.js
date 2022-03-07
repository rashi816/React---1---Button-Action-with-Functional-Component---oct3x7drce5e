import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	     this.state = {
              para: ""
    };
	};
	changePara() {
    this.setState({
      para:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  }

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				 <paragraph id="para">{this.state.para}</paragraph>
                                 <button id="click" onClick={() => this.changePara()}>click</button>
    		</div>
    	);
    }
}


export default App;
