import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function Header() {
  return (
    <div className="header">
         <div className="header__left">
           <img src="https://media-private.canva.com/MFW8E/MAE9wtMFW8E/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20220412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220412T193425Z&X-Amz-Expires=68957&X-Amz-Signature=ae0e2f703a9360abb86f42a80d8bd17d6d55049eaae24ec165275bf9f5cafd8b&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2013%20Apr%202022%2014%3A43%3A42%20GMT"
           alt=""
           />
           <div className="header__input">
             <SearchIcon />
             <input placeholder='Search my book' type="text" />
           </div>
         </div>
         <div className="header__center">
           <div className="header__option header__option--active">
             <HomeIcon fontSize="large" />
           </div>
           <div className="header__option">
             <FlagIcon fontSize="large" />
           </div>
           <div className="header__option">
             <SubscriptionsOutlinedIcon fontSize="large" />
           </div>
           <div className="header__option">
             <StorefrontOutlinedIcon fontSize="large" />
           </div>
           <div className="header__option">
             <SupervisedUserCircleIcon fontSize="large" />
           </div>
         </div>
         <div className="header__right">
           <div className="header__info">
             <Avatar />
             <h4>Sapph</h4>
           </div>
           <IconButton>
             <AddIcon />
           </IconButton>
           
           <IconButton>
             <ForumIcon />
           </IconButton>
           <IconButton>
             <NotificationsActiveIcon />
           </IconButton>
           <IconButton>
             <ExpandMoreIcon />
           </IconButton>
         </div>

    </div>
  )
}

export default Header