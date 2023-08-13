import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useParams,} from "react-router-dom";
import "./watch.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Watch() {
  
  // let location = useLocation();
  // console.log(location);
  // const movie = location.state.movie;
  // const location = useLocation();
  // console.log(location);
  // const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);
  // const movie = JSON.parse(queryParams.get("movie"));
  // console.log(movie);
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState({});
  const axiosInstance=axios.create({baseURL:process.enc.REACT_APP_API_URL,});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axiosInstance.get(`/movies/find/${id}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, [id]);
  console.log(movie);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.trailer} />
    </div>
  );
}
