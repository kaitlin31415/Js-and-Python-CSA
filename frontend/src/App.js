import React from 'react'
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
class App extends React.Component {

  // instance of websocket connection as a class property
  ws = new WebSocket('ws://127.0.0.1:9898/')

  componentDidMount() {
      this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
      }

      this.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      this.setState({dataFromServer: message})
      console.log(message)
      }

      this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss

      }

  }

  render(){
    return (
      <div className='App'>
        <ChildComponent websocket={this.ws} />
      </div>
      )
  }
}


export default App;
