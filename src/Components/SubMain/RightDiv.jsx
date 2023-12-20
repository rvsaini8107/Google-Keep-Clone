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
const RightDiv = () => {
  const [getData, setGetData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [themeColor, setThemeColor] = useState("");
  const emObj = () => {
    setTitle("");
    setDescription("");
    setThemeColor("");
  };
  // const [taskObj,setTaskObj] = useState({
  //   title:"",
  //   description:"",
  //   themeColor:"",
  // })
  const temp = [{"title":"r","description":"s","themeColor":""},{"title":"r","description":"s","themeColor":""},{"title":"ram","description":"shiva","themeColor":""},{"title":"shiva","description":"shiva shiva","themeColor":""},{"title":"skldfj;sdjlfkasjij;","description":"Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.","themeColor":""},{"title":"sdfasdf","description":"Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.Please be aware that while these APIs are suitable for demo purposes, they might not provide real or up-to-date product information. Ensure that you comply with the terms of use of any API you decide to use for your project.","themeColor":""}];
  localStorage.setItem("taskArr", JSON.stringify(temp))
  const onSubmitTaskHandler = () => {
    // console.log(title,description,themeColor,taskObj)
    // setTaskObj({
    //   title:title,
    //   description:description,
    //   themeColor:themeColor,
    // })
    const taskObj = {
      title: title,
      description: description,
      themeColor: themeColor,
    };
    // console.log(title,description,themeColor,taskObj)
    
    const storedArray = JSON.parse(localStorage.getItem("taskArr")) || [];
    const updatedArray = [...storedArray, taskObj];
    if (localStorage.setItem("taskArr", JSON.stringify(updatedArray))) {
      emObj();
      setGetData(updatedArray);
      console.log("submit in localStorage");
    } else {
      console.log("data Not store in localStorage");
    }
    emObj();
  };
  // load Data from loacalstorage
  useEffect(() => {
    if (localStorage.getItem("taskArr"))
      setGetData(JSON.parse(localStorage.getItem("taskArr")).reverse());
  }, [getData]);

  const styleIcons = { fontSize: "18px", color: "#5f6368" };
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
                <div
                  className="inputbox_bottom_box inputbox_bottom_box_3"
                  onClick={(e) => {
                    setThemeColor("yellow");
                  }}
                >
                  <IoColorPaletteOutline style={styleIcons} />
                </div>
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
                <div className="btn_close_input_div">Close</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_bottom">
          <div className="main_box_task">
            {/* map all data */}
            {getData &&
              getData.map((item, id) => (
                <div className="box_task" key={id}>
                  <div className="item-info">
                    <div className="title_div_show">{item.title}</div>
                    <div className="description_div_show">{item.description}</div>
                  </div>
                  
                  <div className="items_of_option">
                    <div
                      className="inputbox_bottom_box inputbox_bottom_box_3"
                      onClick={(e) => {
                        setThemeColor("yellow");
                      }}
                    >
                      <IoColorPaletteOutline style={styleIcons} />
                    </div>
                    <div className="inputbox_bottom_box inputbox_bottom_box_4">
                      <MdOutlineModeEdit style={styleIcons} />
                    </div>
                    <div className="inputbox_bottom_box inputbox_bottom_box_5">
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
