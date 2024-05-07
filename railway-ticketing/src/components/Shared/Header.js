import en from "../../en.json"
import "./shared.css";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SvgIcon from "./SvgIcon";

export default function Header() {
    let title = en.header.title;
    let desc = en.header.desc;
    let placeholder = en.header.searchBar;
    console.log(en);
    return (
        <header>
            <div className="header">
                <div className="banner-img">

                </div>
                <div className="banner-title">
                    <h1>{title}</h1>
                    <h3>{desc}</h3>
                </div>
                <div className="search-bar">
                    <SearchIcon/>
                    <input type='search' placeholder={placeholder}></input>
                </div>
                <div className="notification">
                    <SvgIcon><NotificationsIcon fontSize="large"/></SvgIcon>
                    <SvgIcon><DarkModeIcon fontSize="large"/></SvgIcon>
                    <SvgIcon><InfoIcon fontSize="large"/></SvgIcon>
                    <SvgIcon><LogoutIcon fontSize="large"/></SvgIcon>
                </div>
                <div className="profile">
                    <AccountCircleIcon sx={{fontSize:50}}/>
                </div>
            </div>
        </header>
    )
}