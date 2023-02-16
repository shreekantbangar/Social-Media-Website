import React from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareSquare } from "react-icons/fa";

const ShowPost = () => {
  const [state, setstate] = React.useState([
    {
      id:1,
      userImg: "/images/Shreekant.jpg",
      name: "Shreekant Bangar",
      time: "2h",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatem suscipit Temporibus, voluptatem suscipit",
      postImg: "/images/india.jpg",
    },
    {
      id:2,
      userImg: "/images/Sonali.jpg",
      name: "Sonali Bangar",
      time: "2h",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatem suscipit Temporibus, voluptatem suscipit",
      postImg: "/images/food.jpg",
    },
    {
      id:3,
      userImg: "/images/ketan.jpg",
      name: "Ketan Vekhand",
      time: "2h",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatem suscipit Temporibus, voluptatem suscipit",
      postImg: "/images/supercar.jpg",
    },
    {
      id:4,
      userImg: "/images/Shreekant.jpg",
      name: "Shreekant Bangar",
      time: "2h",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatem suscipit Temporibus, voluptatem suscipit",
      postImg: "/images/webdevoloper.jpg",
    },
    {
      id:5,
      userImg: "/images/Sonali.jpg",
      name: "Sonali Bangar",
      time: "2h",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatem suscipit Temporibus, voluptatem suscipit",
      postImg: "/images/mobile.jpg",
    },
  ]);
  return (
    <div className="show">
      {state.map(post=>(
        <div className="empty" key={post.id} >
        <div className="show__header">
              <div className="show__header-img">
                  <img src={post.userImg} alt="user" />
              </div>
              <div className="show__header-name">
                  {post.name} <div className="date">{post.time}</div>
              </div>
          </div><div className="show__body">
                  <div className="show__body-text">
                      {post.text}
                  </div>
                  <div className="show__body-img">
                      <img src={post.postImg} alt="post" />
                  </div>
              </div><div className="show__reactions">
                  <span className="reactions">
                      <FaRegThumbsUp /> <span className="reactions-text">Like</span>
                  </span>
                  <span className="reactions">
                      <FaRegCommentAlt /> <span className="reactions-text">Comments</span>
                  </span>
                  <span className="reactions">
                      <FaShareSquare /> <span className="reactions-text">Share</span>
                  </span>
              </div>
              </div>
      ))}
    </div>
  );
};

export default ShowPost;
