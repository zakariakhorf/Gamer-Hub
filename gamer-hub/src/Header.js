/* eslint-disable no-octal-escape */
import React from 'react'
import gh from './gh.jpg';
import FlagIcon from '@material-ui/icons/Flag';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar , IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



import "./Header.css"
function Header() {
    return (
        <div className="header">
            <div className="header__left">

                <img src={gh} alt="gh" />

            </div>
            <div className="header__input">
                <SearchIcon />
                <input type="text" />

            </div>

            <div className="header__middle"></div>
             <div className="header__option">
               <HomeIcon fontSize="large"/>
             </div>
             <div className="header__option">
               <FlagIcon fontSize="large"/>
             </div>
             <div className="header__option">
               <SubscriptionsIcon fontSize="large"/>
             </div>
             <div className="header__option">
               <SupervisedUserCircleIcon fontSize="large"/>
             </div>
             <div className="header__option">
               <StorefrontIcon fontSize="large"/>
             </div>
 

            <div className="header__right">
                 <div className="header__info">
                     <Avatar />
                     <h4>Khorf</h4>
                 </div>
              <IconButton>
                  <AddIcon/>
              </IconButton>
              <IconButton>
                  <ForumIcon/>
              </IconButton>
              <IconButton>
                  <NotificationsActiveIcon/>
              </IconButton>
              <IconButton>
                  <ExpandMoreIcon/>
              </IconButton>

            </div>



        </div>
    )
}

export default Header
