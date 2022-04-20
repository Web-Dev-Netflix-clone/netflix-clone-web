import "./HomeHero.scss";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from "gsap";
import TextTruncate from "react-text-truncate";
import { movieInfoModalToggle, fetchSingleMovie } from "../../redux/movies/movies.actions";
import { IconInfo } from "../Icons/IconInfo";
import ButtonMute from '../ButtonMute/ButtonMute'
import { IconPlayBlack } from "../Icons/IconPlayBlack";
import { IconKijkWijzer16 } from "../Icons/IconKijkWijzer16";
import FilmInfoModal from "../FilmInfoModal/FilmInfoModal";
import FilmInfoModalVideo from "../FilmInfoModalVideo/FilmInfoModalVideo";
import billboardHeroTitle from "../../assets/hero-img/billboard-title.webp";

const HomeHero = ({ setIsVideoPlaying, isVideoPlaying, mute, setMute }) => {
  const element = useRef();
  const timeline = useRef();
  const selector = gsap.utils.selector(element);
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movies.heroMovie);
  const isModalOpen = useSelector((state) => state.movies.movieInfoModal);

  useEffect(() => {
    timeline.current = gsap
      .timeline()
      .add("start")
      .to(
        selector(".title-wrapper"),
        {
          duration: 2,
          delay: 25,
          ease: "power4.out",
          yPercent: "30",
          scale: 0.8,
          transformOrigin: "left bottom",
        },
        "start"
      )
      .to(
        selector(".info-wrapper"),
        {
          opacity: 0,
          delay: 25,
          ease: "power4",
        },
        "start"
      );
  }, [selector]);

  return (
    <div className='home-hero'>
      <div className='home-hero-row'>
        <div className='home-hero-container' ref={element}>
          <div className='home-hero-trailer-wrapper'>
            <div className='home-hero-motion-background'>
              {isVideoPlaying ? (
                <FilmInfoModalVideo
                  youtubeId={movieData?.trailer.substr(32) + "&mute=1"}
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original${movieData?.imageHR}`}
                  className="home-hero-trailer"
                  alt="movie"
                />
              )}
              <div className="trailer-overlay overlay"></div>
              <div className="home-hero-overlay overlay"></div>
            </div>
            <div className='home-hero-button-component'>
              <div className='home-hero-volume-button-wrapper'>
                <button className='home-hero-volume-button'>
                <ButtonMute
                setMute={setMute}
                mute={mute}
                />
                </button>
              </div>
              <div className="home-hero-maturity-rating">
                <IconKijkWijzer16 />
              </div>
            </div>
          </div>
          <div className="home-hero-fill-container">
            <div className="home-hero-info">
              <div className="logo-and-text">
                <div className="title-wrapper">
                  {/* <h2>{movie?.title || movie?.name || movie?.original_name}</h2> */}
                  <img
                    src={billboardHeroTitle}
                    alt="Abstract: The Art of Design"
                  />
                </div>
                <div className="info-wrapper">
                  <TextTruncate line={3} text={movieData?.desc} />
                </div>
                <div className="button-wrapper">
                  <button className="home-hero-button home-hero-play-button has-icon">
                    <div className="home-hero-button-icon">
                      <IconPlayBlack />
                    </div>
                    <div className="breadcrumb"></div>
                    <span className="home-hero-button-text">Play</span>
                  </button>
                  <button
                    className="home-hero-button home-hero-info-button has-icon"
                    onClick={() => {
                      dispatch(fetchSingleMovie(movieData));
                      dispatch(movieInfoModalToggle(!isModalOpen));
                      setIsVideoPlaying(false);
                    }}
                  >
                    <div className="home-hero-button-icon">
                      <IconInfo />
                    </div>
                    <div className="breadcrumb"></div>
                    <span className="home-hero-button-text">More Info</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FilmInfoModal
          setIsVideoPlaying={setIsVideoPlaying}
          isVideoPlaying={isVideoPlaying}
        />
      </div>
    </div>
  );
};

export default HomeHero;
