import React, { Component } from 'react';
import {RoomContext} from '../context';

export default class FeatureRooms extends Component {
    static contextType = RoomContext;

    render() {
        const value = this.context;
        console.log(value);
        //{greeting: "hello", name: "this is from the state of Roomprider"}

        //const {name, greeting} = this.context;
        
        return (
            <div>
                Hello {value.name}
            </div>
        )
    }
}
