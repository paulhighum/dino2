import React from "react"
import ProfileCard from "./profile-card"

const Profiles = props => {
  return props.profiles.map(p => <ProfileCard id="{p.name}" key={p.name} profile={p} handleClick={props.handleClick} />)
}

export default Profiles
