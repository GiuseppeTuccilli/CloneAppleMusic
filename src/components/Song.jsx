import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSongs } from "../files/functions";

const Song = () => {
  const dispatch = useDispatch();

  const nuove = useSelector((state) => {
    return state.nuove;
  });

  const audio = useSelector((state) => {
    return state.audioA.audio;
  });

  const searched = useSelector((state) => {
    return state.nuove.search;
  });

  const params = useParams();

  useEffect(() => {
    let word = params.Search;
    if (word === undefined || word === "") {
      word = "rock";
    }
    let searchedSongs = searched;
    console.log(searchedSongs);
    dispatch(async (dispatch, getState) => {
      try {
        const data = await getSongs(word);
        dispatch({
          type: "GET_NUOVE",
          payload: data.data,
        });
      } catch (er) {
        console.log(er.toString());
      }
    });
  }, [params.search]);

  return (
    <>
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
                  payload: song.album.title,
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
                  {song.album.title}
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
