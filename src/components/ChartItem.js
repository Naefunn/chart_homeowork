import React from "react";

const ChartItem = ({song, onSongClick}) => {
    const handleClick = () => {
        onSongClick(song);
    }
    return <li onClick={handleClick}>Artist: {song["im:artist"].label} Title: {song["im:name"].label}</li>
}

export default ChartItem;