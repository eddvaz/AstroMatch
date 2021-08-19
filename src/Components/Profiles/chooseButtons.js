import React from "react";
import {ButtonsContainer, Button} from "./styles"
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotInterestedIcon from '@material-ui/icons/NotInterested';



function ChooseButtons(props) {
  

  return(
    <ButtonsContainer>
      <Button onClick={props.onClickReject}><NotInterestedIcon style={{fontSize: 60}}/></Button>
      <Button onClick={props.onClickAccept}><FavoriteIcon style={{fontSize: 60}}/></Button>
    </ButtonsContainer>
  )
}
export default ChooseButtons;
