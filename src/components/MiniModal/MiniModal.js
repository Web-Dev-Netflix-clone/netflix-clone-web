import "./MiniModal.scss";
import MiniModalDetails from "./MiniModalDetails/MiniModalDetails";
import gsap from "gsap";
import MiniModalVideo from "../MiniModalVideo/MiniModalVideo";
import ButtonMute from "../ButtonMute/ButtonMute";
import { useState, useRef, useEffect } from "react";
import { fetchSingleMovie } from "../../redux/movies/movies.actions";
import { useDispatch } from "react-redux";

const MiniModal = ({
  setLoadMovie,
  moviePoster,
  trailer,
  rating,
  runtime,
  movie,
  keywords,
  updateZIndexRef,
  setIsVideoPlaying,
}) => {
  const dispatch = useDispatch();
  const youtubeId = trailer.substr(32);
  const movieLogoCheck = () => {
    if (movie.logo === "") {return movie.title};
    if (movie.logo !== "") {return <div className='movieLogoBig'><img src={movie.logo} /></div>};
    if (movie.logo != '') {
      return (
        <div className="movieLogoBig">
          <img src={movie.logo} />
        </div>
      );
    }
  };

  useEffect(() => {
    dispatch(fetchSingleMovie(movie));
  }, []);

  const boxRef = useRef();
  const [active, setActive] = useState(true);
  const [start, setStart] = useState(false);

  const remove = () => {
    setStart(true);
    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 2,
      delay: 4,
      ease: "power4",
      // onComplete: () => setActive(false),
    });
    // setActive(false)
  };

  if (updateZIndexRef) updateZIndexRef(999);

  return (
    <div
      className="modal"
      onMouseEnter={remove}
      onMouseLeave={() => {
        setLoadMovie(false);
      }}
    >
      <div className="top-container">
        {start && <MiniModalVideo youtubeId={youtubeId} />}
        {active && (
          <img
            ref={boxRef}
            src={moviePoster}
            alt={moviePoster}
            className="movie-poster"
          />
        )}

        <div className="overlay-items">
          <div className="video-title-wrapper">
            <div className="video-title">{movieLogoCheck()}</div>
          </div>

          <div className="volume-button-wrapper">
            <ButtonMute />
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <MiniModalDetails
          runtime={runtime}
          rating={rating}
          keywords={keywords}
          setIsVideoPlaying={setIsVideoPlaying}
        />
      </div>
    </div>
  );
};

export default MiniModal;
