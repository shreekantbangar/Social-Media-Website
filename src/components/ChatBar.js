import React from "react";

const ChatBar = (props) => {
  const [state, setstate] = React.useState([
    { id: 1, image: "/images/Shreekant.jpg", name: "Shreekant Bangar" },
    { id: 2, image: "/images/ketan.jpg", name: "Ketan Vekhande" },
    { id: 3, image: "/images/Shreekant1.jpg", name: "Shreekant Bangar" },
    { id: 4, image: "/images/Sonali.jpg", name: "Sonali Bangar" },
    { id: 5, image: "/images/Pragnay.jpg", name: "Pragnay Bangar" },
    { id: 6, image: "/images/Hitesh.jpg", name: "Hitesh Humane" },
    { id: 7, image: "/images/Bharat.jpg", name: "Bharat Vishe" },
    { id: 8, image: "/images/satya.jpg", name: "Satya Nadella" },
    { id: 9, image: "/images/sundar.jpg", name: "Sundar Pichai" }
  ]);

  const openChat = user => {
  props.openChat(user);
  }

  return (
    <div className="chatBar">
      {state.map((user) => (
        <div className="chatBar__list" key={user.id} onClick = {() => openChat(user)}>
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
