import React from "react";
import { AppBarContainer, Img, ButtonList, BackButton } from "./styles"
import logo1 from "../../Images/logo1.jpeg"
import PeopleIcon from '@material-ui/icons/People';
import KeyboardBackspaceTwoToneIcon from '@material-ui/icons/KeyboardBackspaceTwoTone';



function AppBar(props) {
  return(
    <AppBarContainer>
      <BackButton onClick={props.goToProfiles}><KeyboardBackspaceTwoToneIcon/></BackButton>
      <Img src={logo1}/>
      <ButtonList onClick={props.goToMatches}><PeopleIcon/></ButtonList> 
    </AppBarContainer>
  )
}
export default AppBar;
