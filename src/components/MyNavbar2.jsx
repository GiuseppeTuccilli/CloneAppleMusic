import { Form, Button, ProgressBar } from "react-bootstrap";
import apple from "../../assets/logos/apple-white.svg";
import music from "../../assets/logos/music-white.svg";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

const MyNavbar2 = () => {
  const audio = useSelector((state) => {
    return state.audioA.audio;
  });

  const isPlaying = useSelector((state) => {
    return state.audioA.isplaying;
  });

  const songsArray = useSelector((state) => {
    return state.nuove.nuove;
  });
  const [search, setSearch] = useState("");

  const [isFirstRender, setIsFirsoRender] = useState(true);
  const [currentTime, setCurentTime] = useState(0);
  const [repeate, setRepeate] = useState(false);
  const [randomTrack, setRandomtrack] = useState(false);
  const [duration, setDuration] = useState(0);
  const [durationString, setDurationString] = useState("--:--");
  const [currentString, setCurrentString] = useState("--:--");

  const navigate = useNavigate();

  let audioRef = useRef();

  const dispatch = useDispatch();

  const playBtn = useRef();
  const pauseBtn = useRef();
  const vol = useRef();
  const seekRef = useRef();

  const handleEnded = () => {
    if (repeate) {
      if (isPlaying) {
        audioRef.current.play();
        audioRef.volume = vol.current.value;
      } else {
        dispatch({
          type: "IS_PLAYING",
        });
        audioRef.current.play();
        audioRef.volume = vol.current.value;
      }
    } else if (randomTrack) {
      let j = 0;
      for (let i = 0; i < songsArray.length; i++) {
        if (songsArray[i].preview === audio) {
          j = i;
        }
      }
      let randomIndex = Math.floor(Math.random() * songsArray.length);
      if (randomIndex === j && randomIndex === songsArray.length - 1) {
        randomIndex = randomIndex - 1;
      } else if (randomIndex === j) {
        randomIndex = randomIndex + 1;
      }
      dispatch({
        type: "GET_AUDIO",
        payload: songsArray[randomIndex].preview,
      });
    } else {
      return;
    }
  };

  const handleCurrentString = (cur) => {
    let min = 0;
    let sec = 0;
    let curInt = Math.floor(cur);
    min = Math.floor(curInt / 60);
    sec = curInt - min * 60;
    let minStr = "";
    let secStr = "";
    if (min < 10) {
      minStr = "0" + min;
    } else {
      minStr = min;
    }
    if (sec < 10) {
      secStr = "0" + sec;
    } else {
      secStr = sec;
    }
    setCurrentString(minStr + ":" + secStr);
  };

  const handleDurString = (dur) => {
    let min = 0;
    let sec = 0;
    let durInt = Math.ceil(dur);
    min = Math.floor(durInt / 60);
    sec = durInt - min * 60;
    let minStr = "";
    let secStr = "";
    if (min < 10) {
      minStr = "0" + min;
    } else {
      minStr = min;
    }
    if (sec < 10) {
      secStr = "0" + sec;
    } else {
      secStr = sec;
    }
    setDurationString(minStr + ":" + secStr);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirsoRender(false);
      return;
    }
    if (isPlaying) {
      audioRef.current.play();
      audioRef.volume = vol.current.value;
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirsoRender(false);

      return;
    }

    const handleMetaData = () => {
      seekRef.current.min = 0;
      seekRef.current.max = audioRef.current.duration;
      setDuration(audioRef.current.duration);
      handleDurString(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurentTime(audioRef.current.currentTime);
      handleCurrentString(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("loadedmetadata", handleMetaData);

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    if (isPlaying) {
      audioRef.current.play();
      audioRef.volume = vol.current.value;
    } else {
      dispatch({
        type: "IS_PLAYING",
      });
      audioRef.current.play();
      audioRef.volume = vol.current.value;
    }

    return () => {
      audioRef.current.removeEventListener("loadedmetadata", handleMetaData);
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audio]);

  const playPause = function () {
    if (audio === "") {
      return;
    }
    if (!isPlaying) {
      dispatch({
        type: "IS_PLAYING",
      });
    } else {
      dispatch({
        type: "NOT_PLAYING",
      });
    }
  };

  const forward = function () {
    if (audio === "") {
      return;
    }

    let j = null;
    for (let i = 0; i < songsArray.length; i++) {
      if (songsArray[i].preview === audio) {
        j = i;
      }
    }

    if (j === null) {
      return;
    }
    if (j === songsArray.length - 1) {
      dispatch({
        type: "GET_AUDIO",
        payload: songsArray[0].preview,
      });
    } else {
      dispatch({
        type: "GET_AUDIO",
        payload: songsArray[j + 1].preview,
      });
    }
  };

  const backward = function () {
    if (audio === "") {
      return;
    }

    let j = null;
    for (let i = 0; i < songsArray.length; i++) {
      if (songsArray[i].preview === audio) {
        j = i;
      }
    }
    if (j === null) {
      return;
    }

    if (j === 0) {
      dispatch({
        type: "GET_AUDIO",
        payload: songsArray[songsArray.length - 1].preview,
      });
    } else {
      dispatch({
        type: "GET_AUDIO",
        payload: songsArray[j - 1].preview,
      });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary position-fixed z-2"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler text-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={music} className="d-lg-none" />
        <Button id="accMob" className="d-flex d-lg-none text-danger fw-bold">
          Accedi
        </Button>
        <div
          id="player"
          className="d-lg-flex flex-column h-100 align-content-center"
        >
          <div id="insidePlayer">
            <Button
              onClick={() => {
                if (randomTrack) {
                  setRandomtrack(false);
                } else {
                  setRandomtrack(true);
                  setRepeate(false);
                }
              }}
              className={randomTrack ? "bg-white" : ""}
            >
              <i className="bi bi-shuffle"></i>
            </Button>
            <Button
              onClick={() => {
                backward();
              }}
            >
              <i className="bi bi-skip-backward-fill"></i>
            </Button>
            <audio
              src={audio !== "" ? audio : null}
              ref={audioRef}
              onEnded={handleEnded}
            ></audio>
            <Button
              className="fs-1"
              onClick={() => {
                playPause();
              }}
            >
              {!isPlaying ? (
                <i className={"bi  d-flex bi-play-fill"} ref={playBtn}></i>
              ) : (
                <i className="bi bi-pause-fill d-flex " ref={pauseBtn}></i>
              )}
            </Button>
            <Button
              onClick={() => {
                forward();
              }}
            >
              <i className="bi bi-skip-forward-fill"></i>
            </Button>
            <Button
              onClick={() => {
                if (repeate) {
                  setRepeate(false);
                } else {
                  setRepeate(true);
                  setRandomtrack(false);
                }
              }}
              className={repeate ? "bg-white" : ""}
            >
              <i className="bi bi-repeat"></i>
            </Button>
          </div>
          <div className="w-100 d-flex flex-column">
            <div className="d-none d-lg-flex justify-content-between">
              <p className="m-0 text-secondary time">{currentString}</p>
              <p className="m-0 text-secondary time">{durationString}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between w-100">
              <Form.Range
                id="seek"
                className="vol  "
                ref={seekRef}
                value={currentTime}
                onChange={(e) => {
                  setCurentTime(parseFloat(e.target.value));
                  if (audioRef.current) {
                    audioRef.current.currentTime = parseFloat(e.target.value);
                  }
                }}
              />{" "}
            </div>
          </div>
        </div>

        <div
          className="collapse navbar-collapse justify-content-evenly"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none "></ul>

          <div
            className="bg-grigio d-none d-flex align-items-center justify-content-evenly"
            style={{ height: "4em" }}
          ></div>

          <div
            id="centralLogo"
            className="d-none d-lg-flex align-items-center"
            style={{ height: "3em" }}
          >
            <img src={apple} />
          </div>

          <div id="range" className="d-none d-lg-flex align-items-center">
            <Form.Range
              id="vol"
              className="vol"
              style={{ width: "6em" }}
              ref={vol}
              onChange={(e) => {
                audioRef.current.volume = e.target.value / 100;
              }}
            />
          </div>

          <div className="d-none d-lg-flex align-items-center">
            <Button variant="danger">
              <i className="bi bi-person-fill" style={{ height: "2em" }}></i>
              Accedi
            </Button>
          </div>

          <Form
            className="d-flex position-relative mx-1 d-lg-none"
            onSubmit={() => {
              navigate("/" + search);
            }}
          >
            <Button
              id="search-btn"
              variant="outline-danger"
              className="border-border-1 border-white"
              type="submit"
            >
              <i className="bi bi-search d-flex me-0 "></i>
            </Button>
            <Form.Control
              id="cerca"
              type="search"
              placeholder="cerca"
              className="me-2 my-4  bg-neroChiaro"
              aria-label="Search"
              style={{ height: "1.8em", borderLeft: "0" }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </Form>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar2;
