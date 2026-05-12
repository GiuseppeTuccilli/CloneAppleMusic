import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import unoA from "../../assets/images/1a.png";
import unoB from "../../assets/images/1b.png";
import unoC from "../../assets/images/1c.png";

const Top = () => {
  return (
    <Container className="mt-5" id="topContainer">
      <div id="topSpace"></div>
      <h1 className="text-white">Novità</h1>
      <hr className="bg-white" />
      <Carousel controls={false} className="d-none d-lg-flex">
        <Carousel.Item>
          <div className="d-flex big-car">
            <div className="d-flex flex-column">
              <p className="text-white mb-1">Nuova stazione radio</p>
              <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
              </p>
              <img src={unoA} className=" mx-1 flex-grow-1 " />
            </div>
            <div className="d-flex flex-column">
              <p className="text-white mb-1">Nuova stazione radio</p>
              <p className="text-white fw-bold  pe-2 mb-auto  flex-grow-1">
                Nuova casa della musica latina
              </p>

              <img src={unoB} className=" mx-1 flex-grow-1" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex big-car">
            <div className="d-flex flex-column">
              <p className="text-white mb-1">Nuova stazione radio</p>
              <p className="text-white fw-bold pe-2 mb-auto  flex-grow-1">
                Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
              </p>

              <img src={unoC} className=" mx-1 flex-grow-1" />
            </div>
            <div className="d-flex flex-column">
              <p className="text-white mb-1">Nuova stazione radio</p>
              <p className="text-white fw-bold  pe-2 mb-auto  flex-grow-1">
                Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
              </p>

              <img src={unoA} className=" mx-1 flex-grow-1" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <Carousel className=" d-lg-none " controls={false}>
        <Carousel.Item>
          <div className="d-flex big-car">
            <div className="d-flex flex-column">
              <p className="text-white mb-1">Nuova stazione radio</p>
              <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
              </p>

              <img src={unoA} className=" mx-1 flex-grow-1 " />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex big-car">
            <div className="d-flex flex-column">
              <p className="text-white mb-1">Nuova stazione radio</p>
              <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
              </p>

              <img src={unoB} className=" mx-1 flex-grow-1 " />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex big-car">
            <div className="d-flex flex-column">
              <p className="text-white mb-1">Nuova stazione radio</p>
              <p className="text-white fw-bold pe-2 mb-auto flex-grow-1">
                Rilassati, al resto pensiamo noi, ascolta Apple Music Chill
              </p>

              <img src={unoC} className=" mx-1 flex-grow-1 " />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Top;
