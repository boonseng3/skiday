import React,{ Component } from "react";
import { Link } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'

class Menu extends Component {
    constructor({props}){
        super(props)
    }
    render() {
      return (
        <nav className="menu">
               <Link to="/" activeclassname="selected">
                   <HomeIcon />
               </Link>
               <Link to="/add-day" activeclassname="selected">
                   <AddDayIcon />
               </Link>
               <Link to="/list-days" activeclassname="selected">
                   <ListDaysIcon />
               </Link>
           </nav>
      );
    }
  }
  export default Menu;
