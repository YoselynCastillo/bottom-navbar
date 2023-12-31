import React, { useState, useRef, useEffect } from "react";
import "./BottomNavbarV3.scss";
import { data, Array } from "../data";
import Notification from "./notification/Notification";

const BottomNavbarV3 = ({ drawerOpen, setDrawerOpen }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [active, setActive] = useState("");
  const [currenData, setCurrenData] = useState(
    data[active] ? data[active].options : []
  );
  // const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const bottomContentRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (itemIndex, event, option) => {
    if (option === active) {
      setDrawerOpen(false);
      setActive("");
    } else {
      setActive(option);
      setCurrenData(data[option].options);
      setDrawerOpen(true);
    }

    const width = event.target.offsetWidth;
    const left = event.target.offsetLeft;

    if (selectedItem === itemIndex) {
      setIndicatorStyle({
        ...indicatorStyle,
        transform: "translateX(-50%) scaleX(0)",
      });
      setTimeout(() => {
        if (selectedItem === itemIndex) {
          setSelectedItem(null);
          setIndicatorStyle({});
        }
      }, 200);
    } else {
      setSelectedItem(itemIndex);
      setIndicatorStyle({
        width: `${width}px`,
        left: `${left + width / 2}px`,
        transform: "translateX(-50%) scaleX(1)",
      });
    }
  };

  const handleDrawerOptionClick = () => {
    setDrawerOpen(false);
    setActive("");
    setSelectedItem(null);
    setIndicatorStyle({});
  };

  const boldText = (text: string) => {
    const primeraPalabra = text.split(" ")[0]; // Obtener la primera palabra del texto
    const restoDelTexto = text.slice(primeraPalabra.length); // Obtener el resto del texto

    return (
      <>
        <b>{primeraPalabra}</b>
        {restoDelTexto}
      </>
    );
  };

  const handleClickOutside = (event) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      bottomContentRef.current &&
      !bottomContentRef.current.contains(event.target)
    ) {
      setDrawerOpen(false);
      setActive("");
      setSelectedItem(null);
      setIndicatorStyle({});
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="containerV3">
      {drawerOpen && <div className="blur-background"></div>}
      <div
        ref={drawerRef}
        className={`drawer ${drawerOpen ? "expanded" : "collapsed"}`}
      >
        {active === "Chat" ? (
          <div className="carousel-container">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <Notification key={index}/>
            ))}
          </div>
        ) : active === "More" ? (
          <div className="skeleton-card">
            <div className="skeleton-banner">
              <div className="skeleton-box-container"></div>
            </div>
            <div className="skeleton-details">
              <div className="skeleton-detail"></div>
            </div>
          </div>
        ) : (
          currenData.map((option) => (
            <div
              key={option.text}
              className="drawer-option"
              onClick={() => handleDrawerOptionClick()}
            >
              <div className="drawer-option-circle">
                {option.icon && <option.icon />}
              </div>
              <span className="drawer-option-text">
                {boldText(option.text)}
              </span>
            </div>
          ))
        )}
      </div>
      <div className="navbar" ref={bottomContentRef}>
        <div className="nav-container">
          {Array.map((item, index) => {
            return (
              <div
                key={index}
                onClick={(e) => handleItemClick(index, e, item?.text)}
                className={`nav-item  ${active === item.text ? "active" : ""}`}
              >
                <item.icon />
                {item.text}
              </div>
            );
          })}
        </div>
        <div className="indicator" style={indicatorStyle}></div>
      </div>
    </div>
  );
};

export default BottomNavbarV3;
