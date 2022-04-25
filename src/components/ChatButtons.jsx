
import './styles/ChatButton.css';
import PersonIcon from '@mui/icons-material/Person';
import {StarRateRounded,FavoriteRounded,FlashOnRounded, ReplayRounded,CloseRounded} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
function ChatButtons() {
  return (
    <div className="chatButtons">
        <IconButton className="chatButtons__firstIcon">
    <ReplayRounded  fontSize="large"/>  
          </IconButton>
    <IconButton className="chatButtons__secondIcon">
          <CloseRounded fontSize="large"/>  
     </IconButton>
    <IconButton className="chatButtons__thirdIcon">
    <StarRateRounded  fontSize="large"/>  
          </IconButton>
   <IconButton  className="chatButtons__fourthIcon">
            < FavoriteRounded fontSize="large"/>  
   </IconButton>
   <IconButton className="chatButtons__fifthIcon">
           <FlashOnRounded fontSize="large"/>  
   </IconButton>
          
    </div>
  );
}

export default ChatButtons;
