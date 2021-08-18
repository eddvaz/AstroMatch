import React, { useEffect, useState } from "react";
import ChooseButtons from "./chooseButtons";
import ProfileCard from "./profileCard";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

function Profiles() {
  
  const [profileToChoose, setProfileToChoose] = useState(undefined)

  const getProfiles = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/edivaldo-vaz-munoz/person")
    .then(response => {
      setProfileToChoose(response.data.profile)
    })
  }

  const chooseProfile = (choice) => {
    const body = {
      choice: choice,
      id:profileToChoose.id
    }
    setProfileToChoose(undefined)

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/edivaldo-vaz-munoz/choose-person", body)
    .then(response => {
      getProfiles()
    })
  }

  useEffect(() => {
    getProfiles()
  }, [])

  const onClickReject = () => {
    chooseProfile(false)
  }
  
  const onClickAccept = () => {
    chooseProfile(true)
  }
    
  return(
    <div>
      {profileToChoose ? 
        (<>
          <ProfileCard profile={profileToChoose}/>
          <ChooseButtons 
            onClickReject={onClickReject} 
            onClickAccept={onClickAccept}
          />
        </>) : <LinearProgress/>
      }
    </div>
  )
}

export default Profiles;

