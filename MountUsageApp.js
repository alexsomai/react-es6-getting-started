import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import Checkbox from 'material-ui/lib/checkbox';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
class App extends React.Component {

  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  componentWillMount(){
    this.setState({m: 2})
  }

  update(){
    this.setState({val: this.state.val + 1});
  }

  componentDidMount(){
    this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount(){
    clearInterval(this.inc);
  }

  render () {
      console.log('rendering');
      return (
        <button onClick={this.update}>
          {this.state.val * this.state.m}
        </button>)
  }
}

class Wrapper extends React.Component {

  constructor(){
    super();
  }

  mount(){
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render () {
    return (
      <div>
        <h1>Mount Usage</h1>
        <Checkbox label="Simple" />
        <RaisedButton primary={true} color="primary" label="Mount" onClick={this.mount.bind(this)}/>
        <RaisedButton secondary={true} label="Unmount" onClick={this.unmount.bind(this)}/>
        <div id='a'></div>
      </div>
    );
  }
}

export default Wrapper
