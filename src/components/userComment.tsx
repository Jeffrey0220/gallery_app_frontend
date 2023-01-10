import React from "react";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SmsIcon from "@material-ui/icons/Sms";
import "../styles/commentStyle.scss";

type propsData = {
  id: number;
  picturePath: string;
  firstName: string;
  lastName: string;
  comment: string;
  likes: number;
  commentsNum: number;
};

const UserComment: React.FunctionComponent<propsData> = (props) => {
  return (
    <div className="user-comments-info">
      <div className="user-img">
        <img
          className="u-img"
          src={`data:image/jpeg;base64,${props.picturePath}`}
          alt={props.firstName}
        />
      </div>

      <div className="info">
        <div className="name">
          {props.firstName} {props.lastName}
        </div>
        <div className="comment">{props.comment}</div>
        <div className="icons">
          <div className="time">
            <WatchLaterIcon className="time-i" />
            10 minutes ago
          </div>
          <div className="likes">
            <FavoriteIcon className="likes-i" />
            {props.likes / 1000}K
          </div>
          <div className="commentNum">
            <SmsIcon className="comment-i" />
            {props.commentsNum / 1000}K
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
