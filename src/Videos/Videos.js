import React from 'react';
import Video from './Video/Video'

const Videos = (props) => {
    const videos = props.videos;
    const videoItems = videos.map((video) =>
        <Video key={video.guid} 
        info={video} />
    );
    
    return (
        <div className="section">
            <div className="columns">
                {videoItems}
            </div>
        </div>
        
    )
}

export default Videos