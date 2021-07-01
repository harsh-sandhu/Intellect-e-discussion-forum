import React from 'react';
import ProfileCard from '../UI/ProfileCard';
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
import { useParams } from "react-router-dom";
//import QuestionCard from '../UI/QuestionCard';

const UserProfileDisplay = (props) => {
    const { state, dispatch } = useContext(UserContext);
    const [profile,setProfile]= useState(null)
    const {userId}=useParams()
    useEffect(() => {
        fetch(`/user/${userId}`,{
          headers:{
              'Authorization':"Bearer "+localStorage.getItem("DisscussionForemJwt"),
              'user':localStorage.getItem("DisscussionForemUser")
          }
        }).then(res=>res.json())
        .then(result=>{
            
            setProfile(result)
        }).catch(err=>{
            console.log(err)
        })
      }, [])
    return (
        <div style={{width:'100vw',overflowX:"hidden"}}>
        <ProfileCard>
            {profile!=null?<div><h4 className="grey-text text-darken-1" style={{wordWrap: 'break-word',width:"80vw"}}>{profile.user?profile.user.name:"Not Mentioned"}</h4>
            <div className="highlight white-text teal darken-2">{profile.user?profile.user.branch:"Not Mentioned"} {profile.user?profile.user.batch:"Not Mentioned"} Batch</div>
            <hr className="red-text text-darken-1"></hr>
            <h6 className="grey-text text-darken-2"><b>About</b></h6>

            <div className="space" style={{wordWrap: 'break-word',width:"80vw"}}>{profile.user?profile.user.work:"Not Mentioned"}</div>
            <hr></hr>
            <h6 className="grey-text text-darken-2"><b>Intersts And Hobbies</b></h6>

            <div className="space" style={{wordWrap: 'break-word',width:"80vw"}}>{profile.user?profile.user.interests:"Not Mentioned"}</div>
            <hr></hr>
            <h6 className="grey-text text-darken-2"><b>Contact Info:</b></h6>

            <table className="responsive-table striped">
                <tr>
                    <td className="teal-text text-darken-3"><u>Email: </u></td>
                    <td className="grey-text text-darken-2"><div style={{wordWrap: 'break-word',width:"80vw"}}>{profile.user?profile.user.email:"Not Mentioned"}</div></td>
                </tr>
                <tr>
                    <td className="teal-text text-darken-3"><u>Github: </u></td>
                    <td className="grey-text text-darken-2"><div style={{wordWrap: 'break-word',width:"80vw"}}>{profile.user?profile.user.github:"Not Mentioned"}</div></td>
                </tr>
                <tr>
                    <td className="teal-text text-darken-3"><u>LinkedIn: </u></td>
                    <td className="grey-text text-darken-2"><div style={{wordWrap: 'break-word',width:"80vw"}}>{profile.user?profile.user.linkedin:"Not Mentioned"}</div></td>
                </tr>
            </table></div>:""}



        </ProfileCard>
        </div>
    )
}

export default UserProfileDisplay;