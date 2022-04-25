import "./styles/Header.css"
import PersonIcon from '@mui/icons-material/Person';
import {Forum} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
function Header() {
  return (
    <div className="header">
      <IconButton className="header__icon">
         <PersonIcon  fontSize="large" />
      </IconButton>
      <img src="https://cdn.worldvectorlogo.com/logos/tinder-icon.svg" alt="tinder icon" className="header__image" />
      <IconButton
       className="header__icon">
      <Forum
        fontSize="large"
      />
      </IconButton>
      
    </div>
  );
}

export default Header;
