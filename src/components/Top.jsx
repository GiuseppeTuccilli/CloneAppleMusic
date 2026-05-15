import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import unoA from "../../assets/images/1a.png";
import unoB from "../../assets/images/1b.png";
import unoC from "../../assets/images/1c.png";
import { useEffect, useState } from "react";
import { getSongs } from "../files/functions";
import { useNavigate } from "react-router-dom";

const Top = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);
  const [erMes, seterMes] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getData = async function () {
    try {
      const data = await getSongs("funk");
      setSongs(data.data);
      setError(false);
      setLoading(false);
      console.log(data.data);
    } catch (er) {
      setError(true);
      seterMes(er.toString());
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = function (artist) {
    window.scrollTo(0, -document.body.scrollHeight);
    navigate("/" + artist.name);
  };

  return (
    <>
      {!loading && !error && (
        <Container className="mt-3" id="topContainer">
          <h1 className="text-white">Novità</h1>
          <hr className="bg-white" />
          <Carousel controls={false} className="d-none d-lg-flex">
            <Carousel.Item>
              <div className="d-flex big-car">
                <div className="d-flex flex-column w-50">
                  <p className="text-white mb-1">Nuova stazione radio</p>
                  <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                    Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
                  </p>
                  <img
                    src={songs[0].artist.picture_big}
                    className=" mx-1 flex-grow-1 "
                    onClick={() => {
                      handleClick(songs[0].artist);
                    }}
                  />
                </div>
                <div className="d-flex flex-column w-50">
                  <p className="text-white mb-1">Nuova stazione radio</p>
                  <p className="text-white fw-bold  pe-2 mb-auto  flex-grow-1">
                    Nuova casa della musica latina
                  </p>

                  <img
                    src={songs[1].artist.picture_big}
                    className=" mx-1 flex-grow-1"
                    onClick={() => {
                      handleClick(songs[1].artist);
                    }}
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex big-car">
                <div className="d-flex flex-column w-50">
                  <p className="text-white mb-1">Nuova stazione radio</p>
                  <p className="text-white fw-bold pe-2 mb-auto  flex-grow-1">
                    Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
                  </p>

                  <img
                    src={songs[2].artist.picture_big}
                    className=" mx-1 flex-grow-1"
                    onClick={() => {
                      handleClick(songs[2].artist);
                    }}
                  />
                </div>
                <div className="d-flex flex-column w-50">
                  <p className="text-white mb-1">Nuova stazione radio</p>
                  <p className="text-white fw-bold  pe-2 mb-auto  flex-grow-1">
                    Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
                  </p>

                  <img
                    src={songs[0].artist.picture_big}
                    className=" mx-1 flex-grow-1"
                    onClick={() => {
                      handleClick(songs[0].artist);
                    }}
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <Carousel className=" d-lg-none " controls={false}>
            <Carousel.Item>
              <div className="d-flex big-car">
                <div className="d-flex flex-column w-100">
                  <p className="text-white mb-1">Nuova stazione radio</p>
                  <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                    Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
                  </p>

                  <img
                    src={songs[0].artist.picture_big}
                    className=" mx-1 flex-grow-1 "
                    onClick={() => {
                      handleClick(songs[0].artist);
                    }}
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex big-car">
                <div className="d-flex flex-column w-100">
                  <p className="text-white mb-1">Nuova stazione radio</p>
                  <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                    Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
                  </p>

                  <img
                    src={songs[1].artist.picture_big}
                    className=" mx-1 flex-grow-1 "
                    onClick={() => {
                      handleClick(songs[1].artist);
                    }}
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex big-car">
                <div className="d-flex flex-column -100">
                  <p className="text-white mb-1">Nuova stazione radio</p>
                  <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                    Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
                  </p>

                  <img
                    src={songs[2].artist.picture_big}
                    className=" mx-1 flex-grow-1 "
                    onClick={() => {
                      handleClick(songs[2].artist);
                    }}
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      )}
    </>
  );
};

export default Top;
