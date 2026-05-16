import {
  Container,
  Carousel,
  Alert,
  Spinner,
  CarouselItem,
} from "react-bootstrap";

import { useEffect, useState } from "react";
import { getSongs } from "../files/functions";
import { useDispatch } from "react-redux";

const Middle = () => {
  const [songs, setSongs] = useState([]);

  const [error, setError] = useState(false);
  const [erMes, setErMes] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getData = async function () {
    try {
      const data = await getSongs("blues");
      setSongs(data.data);
      setError(false);
      setLoading(false);
    } catch (er) {
      setLoading(false);
      setError(true);
      setErMes(er.toString());
    }
  };

  const handleClick = function (song) {
    dispatch({
      type: "GET_AUDIO",
      payload: song.preview,
    });
    dispatch({
      type: "GET_TITLE",
      payload: song.title,
    });
    dispatch({
      type: "GET_COVER",
      payload: song.album.cover_big,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="mt-5">
      <h4 className="text-white">Nuovi episodi radio</h4>
      {error && (
        <Alert variant="danger" className="text-center">
          {erMes}
        </Alert>
      )}
      {loading && (
        <div className="text-center pt-3">
          <Spinner />
        </div>
      )}
      {!error && !loading && (
        <>
          <Carousel controls={false} className="d-none d-lg-flex" id="midCar">
            <Carousel.Item>
              <div className="d-flex big-car">
                {songs.slice(0, 5).map((s) => {
                  return (
                    <div key={s.title}>
                      <div>
                        <img
                          src={s.album.cover_big}
                          className=" mx-1 flex-grow-1 "
                          onClick={() => {
                            handleClick(s);
                          }}
                        />
                      </div>
                      <p className="text-white ms-1  text-break">
                        {s.title_short}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          </Carousel>
          <Carousel
            controls={false}
            slide={true}
            className="d-lg-none"
            id="smCar"
          >
            <CarouselItem>
              <div className="d-flex big-car">
                {songs.slice(0, 3).map((s) => {
                  return (
                    <div key={s.title}>
                      <div>
                        <img
                          src={s.album.cover_big}
                          className=" mx-1 flex-grow-1 "
                          onClick={() => {
                            handleClick(s);
                          }}
                        />
                      </div>
                      <p className="text-white ms-1  text-break">
                        {s.title_short}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="d-flex big-car">
                {songs.slice(3, 6).map((s) => {
                  return (
                    <div key={s.title}>
                      <div>
                        <img
                          src={s.album.cover_big}
                          className=" mx-1 flex-grow-1 "
                          onClick={() => {
                            handleClick(s);
                          }}
                        />
                      </div>
                      <p className="text-white ms-1  text-break">
                        {s.title_short}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CarouselItem>
          </Carousel>
        </>
      )}
    </Container>
  );
};

export default Middle;
