import React, { useEffect, useState } from "react";
import {
  BsList,
  BsBell,
  MdOutlineModeEdit,
  RiInboxArchiveLine,
  RiDeleteBin6Line,
  MdOutlineLightbulb,
  IoSearch,
  IoSettingsOutline,
  CiGrid2H,
  IoGridOutline,
  CgMenuGridO,
  IoRefresh,
  HiOutlinePaintBrush,
  MdOutlineImage,
  BiUndo,
  BiRedo,
  HiDotsVertical,
  IoIosPersonAdd,
  MdPushPin,
  IoMdClose,
  FaCircleCheck,
  IoColorPaletteOutline,
} from "./../../Components/IconImport.js";
const RightDiv = ({search}) => {
  const [getData, setGetData] = useState([]);
  const [call,setCall] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [themeColor, setThemeColor] = useState("");
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  
  const [deleteId, setDeleteId] = useState("");
  const emObj = (thisTitle="",thisDec="",thisTheme="") => {
    setTitle(thisTitle);
    setDescription(thisDec);
    setThemeColor(thisTheme);
  };
  // const [taskObj,setTaskObj] = useState({
  //   title:"",
  //   description:"",
  //   themeColor:"",
  // })
  const temp = [{"title":"r","description":"s","themeColor":""},{"title":"r","description":"s",
  "themeColor":""},{"title":"ram","description":"shiva","themeColor":""},
  {"title":"shiva",  "description":"shiva shiva","themeColor":""},
  {"title":"skldfj;sdjlfkasjij;","description":"Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.","themeColor":""},
  {"title":"sdfasdf","description":"Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.","themeColor":""}
];
  // localStorage.setItem("taskArr", JSON.stringify(temp))
  const onSubmitTaskHandler = () => {
    if(title==="" && description==="") return;
    const taskObj = {
      title: title,
      description: description,
      themeColor: themeColor,
    };
    
    
    const storedArray = JSON.parse(localStorage.getItem("taskArr")) || [];
    const updatedArray = [...storedArray, taskObj];
    console.log(title,description,themeColor,taskObj,updatedArray)
    localStorage.setItem("taskArr", JSON.stringify(updatedArray))
   
    setGetData(updatedArray);
    emObj();
    setCall(updatedArray)
  };
  // load Data from loacalstorage
  useEffect(() => {
    if (localStorage.getItem("taskArr"))
      setGetData(JSON.parse(localStorage.getItem("taskArr")).reverse());
  }, [call]);
  // search 
  useEffect(() => {
    if (localStorage.getItem("taskArr")){
      
  
      const rowData = JSON.parse(localStorage.getItem("taskArr")).reverse().filter(item=>item.title.toLowerCase().includes(search) || 
      item.description.toLowerCase().includes(search))
      console.log("sort ",rowData)
       setGetData(rowData);
    }
  }, [search]);
  
  const styleIcons = { fontSize: "18px", color: "#5f6368" };

// remove
function remove(id,alertBox=false){
  if(alertBox){
    
    setShowDeletePopup(true)
    
  }
  
 
  const storedArray = JSON.parse(localStorage.getItem("taskArr"))||[]
  storedArray.reverse().splice(id,1)
  storedArray.reverse()
  localStorage.setItem("taskArr", JSON.stringify(storedArray))
  setCall(storedArray)

} 
// edit
function edit(id,item){
  console.log(id,item,"item")
  emObj(item.title,item.description,item.themeColor)
  remove(id)
  
}
const deleteFun =(id)=>{
  setShowDeletePopup(true)
  setDeleteId(id)
}
const handleConfirmDelete = () => {
 
  console.log(`Deleting item `);
  // console.log(remove)
  remove(deleteId)
  setShowDeletePopup(false);
};
const handleCancelDelete = () => {
  // Hide the popup without deleting anything
  setShowDeletePopup(false);
  
};

  return (
    <div className="main-right-div">
      <div className="Sub_main-right-div">
        <div className="right_top">
          <div className="inputBox">
            <div className="inputboxandpin">
              <input
                type="text"
                className="Input_text input_title"
                placeholder="Title"
                name=""
                id=""
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
              <MdPushPin
                className="not_drop"
                style={{ fontSize: "21px", color: "#5f6368" }}
              />
            </div>

            <textarea
              name=""
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              className="Input_text input_description"
              placeholder="Take a note..."
              id=""
              cols="30"
              rows="2"
            ></textarea>
            <div className="div_showItems">
              <div className="items_of_input">
                <div className="inputbox_bottom_box inputbox_bottom_box_1">
                  <BsBell style={styleIcons} />
                </div>
                <div className="inputbox_bottom_box inputbox_bottom_box_2">
                  <IoIosPersonAdd style={styleIcons} />
                </div>
                <input type="color"
                  className="inputbox_bottom_box inputbox_bottom_box_3"
                  onClick={(e) => {
                    setThemeColor(e.target.value);
                  }}
                />
                  
                
                <div className="inputbox_bottom_box inputbox_bottom_box_4">
                  <MdOutlineImage style={styleIcons} />
                </div>
                <div className="inputbox_bottom_box inputbox_bottom_box_5">
                  <RiInboxArchiveLine style={styleIcons} />
                </div>
                <div className="inputbox_bottom_box inputbox_bottom_box_6">
                  <HiDotsVertical style={styleIcons} />
                </div>
                <div className="inputbox_bottom_box inputbox_bottom_box_7">
                  <BiUndo style={styleIcons} />
                </div>
                <div className="inputbox_bottom_box inputbox_bottom_box_8">
                  <BiRedo style={styleIcons} />
                </div>
              </div>
              <div
                className="Close_btn_input"
                onClick={() => onSubmitTaskHandler()}
              >
                <div className="btn_close_input_div">Add Task</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_bottom">
          <div className="main_box_task">
          {showDeletePopup && 
          <div className="delete-popup">
            <p>Are you sure you want to delete ?</p>
            <button onClick={handleConfirmDelete}>Confirm Delete</button>
            <button onClick={handleCancelDelete}>Cancel</button>
          </div>}


            {/* map all data */}
            {getData &&
              getData.map((item, id) => (
                <div className="box_task" style={{backgroundColor:item.themeColor}}  key={id}
                onDoubleClick={()=>edit(id,item)}
                >
                  <div className="item-info">
                    <div className="title_div_show">{item.title}</div>
                    <div className="description_div_show">{item.description}</div>
                  </div>
                  
                  <div className="items_of_option">
                    {/* <div
                      className="inputbox_bottom_boxx inputbox_bottom_box_3"
                      onClick={(e) => {
                        setThemeColor("yellow");
                      }}
                    >
                      <IoColorPaletteOutline style={styleIcons} />
                    </div> */}
                    <div className="inputbox_bottom_boxx inputbox_bottom_box_4"
                    onClick={()=>edit(id,item)}
                    >
                      <MdOutlineModeEdit style={styleIcons} />
                    </div>
                    <div className="inputbox_bottom_boxx inputbox_bottom_box_5"
                    onClick={()=>deleteFun(id)}
                    >
                      <RiDeleteBin6Line style={styleIcons} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDiv;
