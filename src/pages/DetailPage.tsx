import React, { useState, useEffect } from "react";
import UserComment from "../components/userComment";
import DetailHeader from "../components/DetailHeader";
import "../styles/detailPageStyle.scss";

type ResponseData = {
  id: number;
  picturePath: string;
  firstName: string;
  lastName: string;
  comment: string;
  likes: number;
  commentsNum: number;
};

const DetailPage: React.FC<{}> = () => {
  const [data, setData] = useState<ResponseData[] | undefined>([]);

  const api_url: string | undefined = `${process.env.REACT_APP_API_URL}/users`;

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
      <DetailHeader />

      <div className="comments-container">
        {data?.map((element) => (
          <UserComment
            id={element.id}
            picturePath={element.picturePath}
            firstName={element.firstName}
            lastName={element.lastName}
            comment={element.comment}
            likes={element.likes}
            commentsNum={element.commentsNum}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
