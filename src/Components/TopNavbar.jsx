import React from 'react'

import {
  BsList,IoSearch,IoSettingsOutline,CiGrid2H,CgMenuGridO,IoRefresh,IoMdClose} from "./../Components/IconImport.js"
import keepImg from "../assets/icons/keep_log.png"

const TopNavbar = ({search,setSearch}) => {
  const styleIcons = {fontSize:"24px",color:"#5f6368",}
  const styleIcons2 = {fontSize: "20px"}
  return (
    <div className='top-navbar'>
      <div className="navbarSub navbarSub-1 flex_rv flex_aic_rv">
        {/* logo and list button */}
        <div className="menu-list-btn btn_bg_color ">
          <BsList style={styleIcons} />
        </div>
        <div className="menu-logo-img" >
          <img src={keepImg} alt="keep" className='img-logo'/>
          <span className="keepLogoName">Keep</span>
        </div>

      </div>
      <div className="navbarSub navbarSub-2">
        {/* search input */}
        <form action="#" className="flex_rv form_search">
          <div className="search-btn"><IoSearch style={{...styleIcons,...styleIcons2}}/></div>
          <input type="text" name="" id="" placeholder='Search' className='search-box' 
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
          />
          <div className="close-search-btn" onClick={()=>setSearch("")}><IoMdClose style={styleIcons}/></div>
        </form>
      </div>
      <div className="navbarSub navbarSub-3 flex_rv">
        {/* button like setting */}
        <div className="button-icon-top-nav-group button-icon-top-nav-group-1 flex_rv flex_aic_rv">
          <div className="button-icon-top-nav btn_bg_color  button-icon-top-nav-1"><IoRefresh style={styleIcons}/></div>
          <div className="button-icon-top-nav btn_bg_color  button-icon-top-nav-2"><CiGrid2H style={styleIcons}/></div>
          <div className="button-icon-top-nav btn_bg_color  button-icon-top-nav-3"><IoSettingsOutline style={styleIcons}/></div>
        </div>
        
        <div className="button-icon-top-nav-group button-icon-top-nav-group-2 flex_rv flex_aic_rv">
          <div className="button-2icon-top-nav btn_bg_color  button-2icon-top-nav-1"><CgMenuGridO style={styleIcons}/></div>
          <div className="button-2icon-top-nav btn_bg_color button-2icon-top-nav-2">
            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" width={"40px"} alt="user" />
          </div>
          {/* <div className="button-2icon-top-nav button-2icon-top-nav-3"></div> */}
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
