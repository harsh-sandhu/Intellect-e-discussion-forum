import React from 'react';
import ProfileCard from '../UI/ProfileCard';
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";
//import QuestionCard from '../UI/QuestionCard';

const ProfileDisplay = (props) => {
    const { state, dispatch } = useContext(UserContext);
    return (
        <div style={{width:'100vw',overflowX:"hidden"}}>
        <ProfileCard>
            <h4 className="grey-text text-darken-1" style={{wordWrap: 'break-word',width:"80vw"}}>{state?state.name:"Not Mentioned"}</h4>
            <div className="highlight white-text teal darken-2">{state?state.branch:"Not Mentioned"} {state?state.batch:"Not Mentioned"} Batch</div>
            <hr className="red-text text-darken-1"></hr>
            <h6 className="grey-text text-darken-2"><b>About</b></h6>

            <div className="space" style={{wordWrap: 'break-word',width:"80vw"}}>{state?state.work:"Not Mentioned"}</div>
            <hr></hr>
            <h6 className="grey-text text-darken-2"><b>Intersts And Hobbies</b></h6>

            <div className="space" style={{wordWrap: 'break-word',width:"80vw"}}>{state?state.interests:"Not Mentioned"}</div>
            <hr></hr>
            <h6 className="grey-text text-darken-2"><b>Contact Info:</b></h6>

            <table className="responsive-table striped">
                <tr>
                    <td className="teal-text text-darken-3"><u>Email:   </u></td>
                    <td className="grey-text text-darken-2"><div style={{wordWrap: 'break-word',width:"80vw"}}>{state?state.email:"Not Mentioned"}</div></td>
                </tr>
                <tr>
                    <td className="teal-text text-darken-3"><u>Github:   </u></td>
                    <td className="grey-text text-darken-2"><div style={{wordWrap: 'break-word',width:"80vw"}}>{state?state.github.trim().length>0?state.github:"Not Mentioned":"Not Mentioned"}</div></td>
                </tr>
                <tr>
                    <td className="teal-text text-darken-3"><u>LinkedIn:   </u></td>
                    <td className="grey-text text-darken-2"><div style={{wordWrap: 'break-word',width:"80vw"}}>{state?state.linkedin:"Not Mentioned"}</div></td>
                </tr>
            </table>



        </ProfileCard>
        </div>
    )
}

export default ProfileDisplay;