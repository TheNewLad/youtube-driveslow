import React, { Component } from 'react';

class Header extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/platform.js';
        document.body.appendChild(script);
    }
    render () {
        return (
            <section className="hero is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-centered is-size-1">{this.props.author}</h1>
                        <h2 className="subtitle has-text-centered has-text-grey-light">
                            Slow Motion > No Motion
                        </h2>
                    </div>
                </div>
                <div className="hero-foot hero-foot--flex">
                    <div>
                        <span className="icon">
                            <i className="fas fa-angle-down" />
                        </span>
                        Rock With the Nation!!!
                        <span className="icon">
                            <i className="fas fa-angle-down" />
                        </span>
                    </div>
                    <div className="g-ytsubscribe" data-channelid="UC2t38_hyT_uJnZEY2gwbtBw" data-layout="full" data-count="default"></div> 
    
                </div>
            </section>
        )
    }
};

export default Header;