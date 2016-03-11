import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {increasing: false}
  }

  componentWillReceiveProps(nextProps){
    this.setState({increasing: nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.val % 5 === 0;
  }

  update(){
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('number')
    );
  }

  render(){
    console.log(this.state.increasing)
    return (
      <div>
        <h1>Updating</h1>
        <button onClick={this.update}>
          {this.props.val}
        </button>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
  }

}

class Wrapper extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    ReactDOM.render(<App />, document.getElementById('number'));
  }

  render(){
    return (
      <div id='number'/>
    )
  }
}

App.defaultProps = { val: 0 }

export default Wrapper
