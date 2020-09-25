import React,{useState} from 'react'

function SongList() {
   const [songs, setSongs] = useState([{title: "Fairies wear boots", artist: "Black Sabbath", id: 1},
              {title: "Starman", artist: "David Bowie", id: 2},
              {title: "Time", artist: "Pink Floyd", id: 3}])


    const addSong = () => {
        setSongs([...songs, {title: 'new song', id:4}])
    }       


    return (
        <div className="song-list">
            <ul>
                {songs.map (song => {
                    return <li key={song.id}>{song.title} - {song.artist}</li> })}
            </ul>
            <button>Add song</button>
        </div>
    )
}

export default SongList
