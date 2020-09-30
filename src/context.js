import React, { Component } from 'react';

const RoomContext = React.createContext();
// <RoomContext.Provider value={"hello"}>

class RoomProvider extends Component {
   state = {
           greeting: "hello",
           name: "this is from the state of Roomprider"
    }

   
    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};