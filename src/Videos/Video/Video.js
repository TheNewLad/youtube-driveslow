import React from 'react';

const Video = (props) => {
    const videoId = () => {
        const guid = props.info.guid;
        const id = guid.substr(guid.lastIndexOf(":") + 1);
        return id;
    };
    return (
        <div className="column is-one-third">
            <div className="card">
                <VideoHeader title={props.info.title} />
                <VideoImage id={videoId()} title={props.info.title} />
                <VideoFooter datePublished={props.info.date_published} url={props.info.url} />
            </div>
        </div>
    )
}

const VideoHeader = (props) => {
    return (
        <header className="card-header">
            <p className="card-header-title is-centered">
                {props.title}
            </p>
        </header>
    )
};

const VideoImage = (props) => {
    return (
        <div className="card-image">
            <figure className="image">
                <img src={`https://img.youtube.com/vi/${props.id}/hqdefault.jpg`} alt={props.title} />
            </figure>
        </div>
    )
};

const VideoFooter = (props) => {
    return (
        <footer className="card-footer">
            <VideoDate datePublished={props.datePublished} />
            <WatchButton url={props.url} />
        </footer>
    )
};

const VideoDate = (props) => {
    const date = new Date(props.datePublished);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <div className="card-footer-item">
            <p><span className="has-text-weight-bold">Published: </span><span className="avoidwrap">{`${dayNames[date.getDay()]} ${monthNames[date.getMonth()]} ${date.getDate()}`}</span></p>
        </div>
    )
};

const WatchButton = (props) => {
    return (
        <div className="card-footer-item">
            <a href={props.url} className="button watch-button has-text-white">
                <span className="icon">
                    <i className="fab fa-youtube" />
                </span>
                <span>Watch on YouTube</span>
            </a>
        </div>
    )
};

export default Video