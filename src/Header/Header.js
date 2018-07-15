import React from 'react';

const Header = (props) => {
    return (
        <section className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-centered is-size-1">{props.author}</h1>
                    <h2 className="subtitle has-text-centered has-text-grey-light">
                        Slow Motion > No Motion
                    </h2>
                </div>
            </div>
        </section>
    )
};

export default Header;