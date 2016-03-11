//Higher Order Components (replaces Mixins)
import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponenet => class extends React.Component {
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0}
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log('mixin will mount');
  }
  render(){
    return <InnerComponenet
      update={this.update}
      {...this.state}
      {...this.props} />
  }
  componentDidMount(){
    console.log('mixin mounted');
  }
}

const Button = (props) => <button
                            onClick={props.update}>
                            {props.txt} - {props.val}
                          </button>

const Label = (props) => <label
                            onMouseMove={props.update}>
                            {props.txt} - {props.val}
                          </label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {

  render(){
    return(
      <div>
        <h1>Higher Order Components</h1>
        <ButtonMixed txt="Button"/>
        <LabelMixed txt="Label"/>
      </div>
    );
  }
}

export default App
