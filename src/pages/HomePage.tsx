import React, { useState, useEffect } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import "../styles/homePageStyle.scss";
import NavBar from "../components/NavBar";

type ResponseData = {
  id: number;
  videoPath: string;
  name: string;
  author: string;
  spot: string;
  time: string;
  likes: number;
  commentsNum: number;
};
const HomePage: React.FC<{}> = () => {
  const [data, setData] = useState<ResponseData[] | undefined>([]);

  const api_url: string | undefined = `${process.env.REACT_APP_API_URL}/api`;

  const fetchData = async () => {
    const result = await fetch(api_url as string);
    const data: ResponseData[] = await result.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="homePage-body">
        {data?.map((element) => {
          return (
            <div className="img-container">
              <img
                className="video-picture"
                src={`data:image/jpeg;base64,${element.videoPath}`}
                alt={element.name}
              />
              <PlayCircleOutlineIcon className="play-icon" />
              <ThumbUpAltIcon className="like-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
