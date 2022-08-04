import React from "react";
import ChartItem from "./ChartItem";

const ChartList = ({songs, onSongClick}) => {

    const songItems = songs.map((song, index) => {
        return <ChartItem song={song} key={index} onSongClick={onSongClick}/>
    })

    return (
        <div>
            <ol>
                {songItems}
            </ol>
        </div>
    )
}

export default ChartList;