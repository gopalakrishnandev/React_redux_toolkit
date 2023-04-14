import { createRandomSong } from "../data";
import { useDispatch } from "react-redux";
import { addSong } from "../redux-toolkit/songActionReducer";

function SongPlaylist() {
  const dispatch = useDispatch();

  // To Do:
  // Get list of songs
  const songPlaylist = [];

  const handleSongAdd = (song) => {
    //new way dispatch
    const action = addSong(song);
    dispatch(action);
    console.log(action);

    //old way dispatching
    // dispatch({
    //   type: action,
    //   payload: song,
    // });

    // To Do:
    // Add song to list of songs
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
