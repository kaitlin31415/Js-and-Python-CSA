import React from 'react'
class ChildComponent extends React.Component {

    sendMessage=()=>{
        const {websocket} = this.props // websocket instance passed as props to the child component.

        try {
            websocket.send("Hello Server") //send data to the server
        } catch (error) {
            console.log(error) // catch error
        }
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ChildComponent;