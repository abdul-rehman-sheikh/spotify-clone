import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { getTokenFromResponse } from "./spotify";
import { useDataLayerValue } from './DataLayer'

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption Icon={HomeIcon} title="Search" />
            <SidebarOption Icon={SearchIcon} title="Your Library" />
            <SidebarOption Icon={LibraryMusicIcon} title="Home" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlists) => (
                <SidebarOption title={playlists.name} />
            ))}
        </div>
    )
}

export default Sidebar