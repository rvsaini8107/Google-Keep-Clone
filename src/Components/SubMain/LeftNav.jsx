import React from 'react'
import {
  BsBell,MdOutlineModeEdit,RiInboxArchiveLine,RiDeleteBin6Line,
  MdOutlineLightbulb} from "./../../Components/IconImport.js"
const LeftNav = () => {
  // const arr = [{Note:<MdOutlineLightbulb/>},{Note:<MdOutlineLightbulb/>},{Note:<MdOutlineLightbulb/>}];
  const style1 = {fontSize:"24px",color:"#5f6368"}
  const styleActive = {fontSize:"24px",color:"rgb(12, 13, 13)"}

  
  return (
    <div className='main-left-div'>
      <HelperSideBar 
       className1={"left-menu-list-1"}
       SubclassName={"left_menu_icon_1"}
       SubclassName2={"left_menu_icon_2"}
       active="onActive"
       icon={<MdOutlineLightbulb  style={styleActive}/>}
       text={"Note"}
        />
      <HelperSideBar 
       className1={"left-menu-list-1"}
       SubclassName={"left_menu_icon_1"}
       SubclassName2={"left_menu_icon_2"}
       icon={<BsBell style={style1}/>}
       text={"Reminders"}
        />
      <HelperSideBar 
       className1={"left-menu-list-1"}
       SubclassName={"left_menu_icon_1"}
       SubclassName2={"left_menu_icon_2"}
       icon={<MdOutlineModeEdit style={style1}/>}
       text={"Edit labels"}
        />
      <HelperSideBar 
       className1={"left-menu-list-1"}
       SubclassName={"left_menu_icon_1"}
       SubclassName2={"left_menu_icon_2"}
       icon={<RiInboxArchiveLine style={style1}/>}
       text={"Archive"}
        />
      <HelperSideBar 
       className1={"left-menu-list-1"}
       SubclassName={"left_menu_icon_1"}
       SubclassName2={"left_menu_icon_2"}
       icon={<RiDeleteBin6Line  style={style1}/>}
       text={"Bin"}
        />
      
    
    </div>
  )
}
const HelperSideBar = ({className1,SubclassName,SubclassName2,icon,text,active})=>{
  return(<div className={` left-menu-list left-menu-list_active left-menu-list-1 ${className1} ${active?active:"onHover"}`} >
    <div className={`left_menu_icon left_menu_icon_1 ${SubclassName}`}>{icon}</div>
    <div className={`left_menu_text left_menu_text_2 ${SubclassName2}`}>{text}</div>
  </div>
  )
} 
export default LeftNav
