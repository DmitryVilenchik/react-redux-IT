import React, {useEffect, useState} from "react";
import s from './Profileinfo.module.css';


const ProfileStatusWithHooks=(props)=>{
    let [editMode, setEditMode]=useState(false);
    let [status, setStatus]=useState(props.status);

    useEffect(()=> {
        setStatus(props.status);
    },[props.status]);

    //let stateWithSetState=useState(true);
    //let editMode=stateWithSetState[0];
    //let setEditMode=stateWithSetState[1];

    const activateEditMode=()=>{
        setEditMode(true);
    }
    const deactivateEditMode=()=> {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChainge=(e)=> {
        setStatus(e.currentTarget.value);
    }
        return (
            <div>
                    { !editMode &&
                <div>
                    <span onClick={activateEditMode}>{props.status || "--------"}</span>
                </div>
                    }
                    {editMode &&
                <div>
                    <input onChange={onStatusChainge}
                           autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
                    }
            </div>
        );

}
export default ProfileStatusWithHooks;
