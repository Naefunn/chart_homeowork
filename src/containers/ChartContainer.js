import React, { useEffect, useState } from "react";
import ChartList from "../components/ChartList";


const ChartContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSongs] = useState(null)



    useEffect(() => {
        getSongs()
    }, []);

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(respond => respond.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    const onSongClick = (song) => {
        setSelectedSongs(song)
    }


    return (
        <div className="main-cvontainer">
            <ChartList songs={songs} onSongClick={onSongClick}/>
        </div>
    )


}

export default ChartContainer;