import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    
    state = {
        services : [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "this content is waiting to be edited this content is waiting to be edited"
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: "this content is waiting to be edited this content is waiting to be edited"
            },
            {
                icon: <FaShuttleVan />,
                title: "free Shuttle",
                info: "this content is waiting to be edited this content is waiting to be edited"
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "this content is waiting to be edited this content is waiting to be edited"
            }
        ]
    }
    
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
