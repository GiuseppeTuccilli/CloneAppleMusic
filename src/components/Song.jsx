import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Col, Card, Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSongs } from "../files/functions";

const Song = () => {
  const [error, setError] = useState(false);
  const [errMes, setErrMes] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const nuove = useSelector((state) => {
    return state.nuove;
  });

  const audio = useSelector((state) => {
    return state.audioA.audio;
  });

  const params = useParams();

  useEffect(() => {
    let word = params.Search;
    if (word === undefined || word === "") {
      word = "rock";
    }

    dispatch(async (dispatch, getState) => {
      try {
        const data = await getSongs(word);
        dispatch({
          type: "GET_NUOVE",
          payload: data.data,
        });
        setError(false);
        setLoading(false);
      } catch (er) {
        setError(true);
        setErrMes(er.toString());
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {error && (
        <Alert variant="danger" className="text-center">
          {errMes}
        </Alert>
      )}
      {loading && (
        <div className="text-center">
          <Spinner variant="danger" />
        </div>
      )}
      {nuove.nuove.map((song) => {
        return (
          <Col xs={4} lg={3} key={song.id}>
            <Card
              className={
                "bg-grigio " +
                (song.preview === audio && "border border-3 border-danger")
              }
              onClick={() => {
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
              }}
            >
              <Card.Img
                variant="top"
                className="rounded-1"
                src={song.album.cover_big}
              />
              <Card.Body className="pt-1">
                <Card.Text className="text-white">
                  {" "}
                  {song.title_short}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default Song;
