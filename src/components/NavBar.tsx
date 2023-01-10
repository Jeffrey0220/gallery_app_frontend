import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "../styles/navStyle.scss";

const HomePage: React.FunctionComponent<{}> = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <nav>
      <div className="headBar">
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

      <div className="videos-photos">
        <div className="videos">VIDEOS</div>
        <div className="photos">PHOTOS</div>
      </div>
    </nav>
  );
};

export default HomePage;
