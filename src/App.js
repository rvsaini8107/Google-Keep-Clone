import './App.css';
import TopNavbar from './Components/TopNavbar';
import Main from './Components/Main';
import {
  BsBell,MdOutlineModeEdit,RiInboxArchiveLine,RiDeleteBin6Line,
  MdOutlineLightbulb,IoSearch,IoSettingsOutline,CiGrid2H,
  IoGridOutline,CgMenuGridO,IoRefresh,HiOutlinePaintBrush,
  MdOutlineImage,BiUndo,HiDotsVertical,IoIosPersonAdd,
  MdPushPin,
  IoMdClose,FaCircleCheck} from "./Components/IconImport.js"
import { useState } from 'react';
function App() {
  const [search,setSearch]=useState([]);
  return (
   <>
   <TopNavbar search={search} setSearch={setSearch}/>
   <Main search={search}/>
{/* icon */}
   {/* <MdOutlineLightbulb/>
   <BsBell  />
 
   <MdOutlineModeEdit/>
   <RiInboxArchiveLine/>
   <RiDeleteBin6Line/>
   <IoSearch/>
   <IoSettingsOutline/>
   <CiGrid2H/>
   <IoGridOutline/>
   <CgMenuGridO/>
   <IoRefresh/>
   <HiOutlinePaintBrush/>
   <MdOutlineImage/>
   <BiUndo/>
   <HiDotsVertical/>
   <IoIosPersonAdd/>
   <MdPushPin/>
   <IoMdClose/>
   <FaCircleCheck/>
    */}
  
      
   </>
  );
}

export default App;
