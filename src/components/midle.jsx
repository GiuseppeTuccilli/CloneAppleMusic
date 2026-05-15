import { Container, Carousel, Alert, Spinner } from "react-bootstrap";
import dueA from "../../assets/images/2a.png";
import dueB from "../../assets/images/2b.png";
import dueC from "../../assets/images/2c.png";
import dueD from "../../assets/images/2d.png";
import dueE from "../../assets/images/2e.png";
import dueF from "../../assets/images/2f.png";
import { useEffect, useState } from "react";
import { getSongs } from "../files/functions";

const Middle = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(false);
  const [erMes, setErMes] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async function () {
    try {
      const data = await getSongs("blues");
      setSongs(data.data);
      setError(false);
      setLoading(false);
      console.log(data.data);
    } catch (er) {
      setLoading(false);
      setError(true);
      setErMes(er.toString());
    }
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
                {() => {
                  const ar = [];
                  for (let i = 0; i < 6; i++) {
                    const boj = {};
                  }
                }}
                {/*      <div className="d-flex flex-column">
                  <img src={songs[0].album.cover_big} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueB} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueC} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueD} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueE} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueF} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>*/}
              </div>
            </Carousel.Item>
          </Carousel>
          <Carousel
            controls={false}
            slide={true}
            className="d-lg-none"
            id="smCar"
          >
            <Carousel.Item>
              <div className="d-flex big-car">
                <div className="d-flex flex-column">
                  <img src={dueA} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueB} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueC} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex big-car">
                <div className="d-flex flex-column">
                  <img src={dueE} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueF} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
                <div className="d-flex flex-column">
                  <img src={dueA} className=" mx-1 flex-grow-1 " />
                  <p className="text-white ms-1">Prologo con Abuelo</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </>
      )}
    </Container>
  );
};

export default Middle;
