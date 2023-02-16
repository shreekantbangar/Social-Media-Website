import React,{useState} from 'react'

const SideBar = () => {
    const [state, setstate] = useState ([
        {id:1, image:"/images/Shreekant.jpg", name: "Web Devoloper"},
        {id:2, image:"/images/Shreekant1.jpg", name: "Machine Learning"},
        {id:3, image:"/images/Shreekant2.jpg", name: "Artificial Intelligence"},
        {id:4, image:"/images/Sonali.jpg", name: "IOS Devoloper"},
        {id:5, image:"/images/ketan.jpg", name: "Blockchain Technology"},
        
    ]);
  return (
    <div className='sidebar'>
       {state.map(info =>(
        <div className="sidebar__list" key={info.id}>
            <div className="sidebar__list-img">
                <img src= {info.image} alt="group image" />
            </div>
            <div className="sidebar__list-name">
                {info.name}
            </div>
        </div>
       ))}
        
    </div>
  )
}

export default SideBar