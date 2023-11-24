import { useState, useEffect, useRef } from "react";
import "./BottomNavbar.scss";
import { data } from "./data"
import {
    SellIcon, FinanceIcon, ShopIcon,
    ChatIcon,
    MoreIcon
} from "../assets/icons";


const BottomNavbar = () => {
    const [active, setActive] = useState("");
    const [currenData, setCurrenData] = useState(data[active] ? data[active].options : []);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);
    const bottomContentRef = useRef<HTMLDivElement>(null);

    const selectOption = (option: string) => {
        if (option === active) {
            setDrawerOpen(false);
            setActive("");
        } else {
            setActive(option);
            setCurrenData(data[option].options);
            setDrawerOpen(true);
        }
    }

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

    const handleDrawerOptionClick = () => {
        setDrawerOpen(false);
        setActive("");
    };

    const handleClickOutside = (event: any) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target) &&
            bottomContentRef.current && !bottomContentRef.current.contains(event.target)) {
            setDrawerOpen(false);
            setActive("");
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className={`container ${drawerOpen ? 'fullPage' : ''}`}>

            <div className={`${drawerOpen ? 'blur-background' : ''}`}></div>
            <div className={`content ${drawerOpen ? 'open' : ''}`}>
                <div ref={drawerRef} className={`drawer ${drawerOpen ? 'expanded' : 'collapsed'} ${currenData.length ? `list-of-${currenData.length}` : ""} `}>
                    {
                        currenData.map((option) => (
                            // <div key={option.text} className={`drawer-option option-${index + 1}`} onClick={() => handleDrawerOptionClick()}>
                            <div key={option.text} className="drawer-option" onClick={() => handleDrawerOptionClick()}>
                                <div className="drawer-option-circle">
                                    <option.icon />
                                </div>
                                <span className="drawer-option-text">{boldText(option.text)}</span>
                            </div>

                        ))
                    }
                </div>
                <div ref={bottomContentRef} className={`bottom_container ${drawerOpen ? 'withBorder' : ''}`}>
                        <div className={`nav-item  ${active === "sell" && 'active'}`} onClick={() => selectOption("sell")}>
                            <SellIcon />
                            <span>Sell/Trade</span>
                        </div>
                        <div className={`nav-item  ${active === "finance" ? 'active' : ''}`} onClick={() => selectOption("finance")}>
                            <FinanceIcon />
                            <span>Finance</span>
                        </div>
                        <div className={`nav-item  ${active === "shop" ? 'active' : ''}`} onClick={() => selectOption("shop")}>
                            <ShopIcon />
                            <span>Shop</span>
                        </div>
                        <div className={`nav-item  ${active === "chat" ? 'active' : ''}`} onClick={() => selectOption("chat")}>
                            <ChatIcon />
                            <span>Chat</span>
                        </div>
                        <div className={`nav-item  ${active === "more" ? 'active' : ''}`} onClick={() => selectOption("more")}>
                            <MoreIcon />
                            <span>More</span>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default BottomNavbar