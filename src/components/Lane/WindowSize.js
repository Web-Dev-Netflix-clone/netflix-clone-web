import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    length: undefined,
    itemHeight: undefined,
    itemWidth: undefined,
  });
  useEffect(() => {
    function setLaneLength() {
      return window.innerWidth < 500 ? 2
        : window.innerWidth < 800 ? 3
        : window.innerWidth < 1100 ? 4
        : window.innerWidth < 1400 ? 5
        : 6;
    }
    function setLaneItemWidth() {
      return window.innerWidth < 500 ? 45
        : window.innerWidth < 800 ? 30
        : window.innerWidth < 1100 ? 22.5
        : window.innerWidth < 1400 ? 18
        : 15;
    }
    function setLaneItemHeight() {
      return window.innerWidth < 500 ? 27
        : window.innerWidth < 800 ? 18
        : window.innerWidth < 1100 ? 13.5
        : window.innerWidth < 1400 ? 10.8
        : 9;
    }
    function setModalDistance() {
      return window.innerWidth < 500 ? 46
        : window.innerWidth < 800 ? 31
        : window.innerWidth < 1100 ? 23
        : window.innerWidth < 1400 ? 19
        : 16;
    }
    // const startIndex = setLaneLength()
      function handleResize() {
      setWindowSize({
        length: setLaneLength(),
        itemHeight: setLaneItemHeight(),
        itemWidth: setLaneItemWidth(),
        modalDistance: setModalDistance(),
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
