import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import "../styles/navStyle.scss";
import "../styles/detailHeaderStyle.scss";

type ResponseDetailData = {
  id: number;
  videoPath: string;
  name: string;
  author: string;
  spot: string;
  time: string;
  likes: number;
  commentsNum: number;
};

const DetailHeader: React.FC<{}> = () => {
  const [detailData, setDetailData] = useState<
    ResponseDetailData | undefined
  >();

  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const api_d_url: string | undefined = `${process.env.REACT_APP_API_URL}/api`;

  const fetchDetailData = async () => {
    const result = await fetch(api_d_url as string);
    const detailDatas: ResponseDetailData[] = await result.json();
    setDetailData(detailDatas[0]);
    console.log(setDetailData);
  };

  useEffect(() => {
    fetchDetailData();
  }, []);
  return (
    <div>
      <div
        className="detail-header"
        style={{
          backgroundImage: `linear-gradient(0deg ,rgba(92,72,168,0.9),rgba(92,72,168,0.9)),url(${`data:image/jpeg;base64,${
            detailData ? detailData.videoPath : null
          }`})`,
          backgroundPosition: "center",
          backgroundSize: "conver",
        }}
      >
        <div className="detailHeadBar">
          <div className="hamburger-menu">
            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
            {isOpen && (
              <div className="links">
                <Link to="/" className="home">
                  Gallery
                </Link>

                <Link to="/detail" className="detail">
                  Detail
                </Link>
              </div>
            )}
          </div>
          <div className="title">GELLARY</div>
          <div className="more-icon">
            <MoreVertIcon />
          </div>
        </div>

        <div className="detail-info-1">
          <div className="name">
            <p>{detailData ? detailData.name : "Photo Name"}</p>
          </div>
          <div className="detail-info-2">
            <div className="detail-info-3">
              <div className="detail-info-4">
                <div className="author">
                  By: {detailData ? detailData.author : "Author Name"}
                </div>
                <div className="spot">
                  At: {detailData ? detailData.spot : "Somewhere"}
                </div>
              </div>
              <div className="time">
                At: {detailData ? detailData.time : "00:00:00"}
              </div>
            </div>
            <div className="header-icons">
              <div className="likes">
                <FavoriteIcon className="l-icon" />
                {detailData ? detailData.likes / 1000 : 0}K
              </div>
              <div className="commentsNum">
                <ChatBubbleIcon className="c-icon" />
                {detailData ? detailData.commentsNum / 1000 : 0}K
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="color-overlay"></div>
    </div>
  );
};

export default DetailHeader;
