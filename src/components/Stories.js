import React from "react";

const Stories = () => {
    const [state, setstate] = React.useState([
        {id:1, image:"/images/Shreekant.jpg", name: "Shreekant Bangar"},
        {id:2, image:"/images/ketan.jpg", name: "Ketan Vekhande"},
        {id:3, image:"/images/Sonali.jpg", name: "Sonali Bangar"},
        {id:4, image:"/images/Shreekant2.jpg", name: "Shreekant Bangar"},
    ])
  return (
    <div className="stories">
      {state.map(story=>(
        <div className="stories__col" key={story.id}>
        <div className="stories__body">
          <img src={story.image} alt="stories" />
          <div className="stories__body-overlay">
            <div className="stories__body-overlay-img">
              <img src={story.image} alt="" />
            </div>
            <div className="stories__body-name">{story.name}</div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Stories;
