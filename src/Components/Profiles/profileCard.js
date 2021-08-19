import React from "react";
import {CardContainer, ProfileImg, ProfileInfo, ProfileName, ProfileBio } from "./styles"

function ProfileCard(props) {
  const profile = props.profile
  return(
    <CardContainer>
      <ProfileImg src={profile.photo}/>
      <ProfileInfo>
        <ProfileName>{profile.name}, {profile.age}</ProfileName>
        <ProfileBio>{profile.bio}</ProfileBio>
      </ProfileInfo>
    </CardContainer>
  )
}
export default ProfileCard;
