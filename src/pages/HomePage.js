import React, { useEffect, useState } from "react";
import HomeHero from "../components/HomeHero/HomeHero";
import FooterBrowserPage from "../components/FooterBrowserPage/FooterBrowserPage";
import Lane from "../components/Lane/Lane";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesResultsAsync } from "../redux/movies/movies.actions";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesResultsAsync());
  }, [dispatch]);

  const allMoviesSelector = useSelector((state) => state.movies.allMovies);

  console.log("allMoviesSelector " , allMoviesSelector)

  return (
    <>
      <HomeHero
        setIsVideoPlaying={setIsVideoPlaying}
        isVideoPlaying={isVideoPlaying}
      />
      {allMoviesSelector?.map((movieSet) => {
        return (
          <Lane
            laneTitle={movieSet.genre}
            movies={movieSet.movies}
            trailer={movieSet.trailer}
            key={uuidv4()}
            setIsVideoPlaying={setIsVideoPlaying}
            isVideoPlaying={isVideoPlaying}
          />
        );
      })}
      <FooterBrowserPage />
    </>
  );
};

export default HomePage;
