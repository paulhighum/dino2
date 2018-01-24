import React from "react"
import Skills  from "./skills-list"

const ProfileCard = (props) => {

 return (
   <li>
     <div className="profile-card" id={props.profile.name} onClick={props.handleClick}>
       <header className="profile-header">
         <img src={props.profile.image} alt={props.profile.name}/>
         <h2>{props.profile.name}</h2>
       </header>
       <section className="skills-container hidden">
         <h4>Skills</h4>
         <ul className="skills-list">
            {props.profile.skills.map((s ,index) => <Skills key={index} skill={s} />)}
         </ul>
       </section>
     </div>
   </li>
 )
}

export default ProfileCard
