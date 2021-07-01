import React from 'react';
import './ProfileCard.css'
const ProfileCard=(props)=>{
return <div className="card profileCard col s12 ">
    {props.children}
    </div>;
}
export default ProfileCard;