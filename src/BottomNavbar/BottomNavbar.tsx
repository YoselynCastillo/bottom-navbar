import { useEffect, useState } from "react";
import "./BottomNavbar.scss";
import { data } from "./data"
import { SellIcon, BrowseIcon } from "../assets/icons";

type Props = {
    text: string;
};

const BottomNavbar = () => {
    const [active, setActive] = useState("finance")
    const [currenData, setCurrenData] = useState(data[active].options)

    const selectOption = (option: string) => {
        setActive(option)
        setCurrenData(data[option].options)
    }

    const boldText = (text : string ) => {
        const primeraPalabra = text.split(" ")[0]; // Obtener la primera palabra del texto
        const restoDelTexto = text.slice(primeraPalabra.length); // Obtener el resto del texto

        return (
            <>
                <b>{primeraPalabra}</b>
                {restoDelTexto}
            </>
        );
    };

    return (
        <div className="container">
            <div className="drawer">
                {
                    currenData.map((option) => (
                        <div key={option.text} className="drawer-option">
                            <div className="drawer-option-circle">
                                <BrowseIcon />
                            </div>
                            <span className="drawer-option-text">{boldText(option.text)}</span>
                        </div>

                    ))
                }
                {/* <div className="drawer-option">
                    <div className="drawer-option-circle">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33335 11.3334H2.66669V8.66671H9.33335V11.3334ZM9.33335 15.3334H2.66669V18H9.33335V15.3334ZM27.4534 24.6667L22.3467 19.56C21.28 20.2534 20.0267 20.6667 18.6667 20.6667C14.9867 20.6667 12 17.68 12 14C12 10.32 14.9867 7.33337 18.6667 7.33337C22.3467 7.33337 25.3334 10.32 25.3334 14C25.3334 15.36 24.92 16.6134 24.2267 17.6667L29.3334 22.7867L27.4534 24.6667ZM22.6667 14C22.6667 11.8 20.8667 10 18.6667 10C16.4667 10 14.6667 11.8 14.6667 14C14.6667 16.2 16.4667 18 18.6667 18C20.8667 18 22.6667 16.2 22.6667 14ZM2.66669 24.6667H16V22H2.66669V24.6667Z" fill="#fff" />
                        </svg>
                    </div>
                    <span className="drawer-option-text"><b>View</b> all inventory</span>
                </div>
                <div className="drawer-option">
                    <div className="drawer-option-circle">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 16C14.5333 16 13.3333 14.8 13.3333 13.3333C13.3333 11.8666 14.5333 10.6666 16 10.6666C17.4666 10.6666 18.6666 11.8666 18.6666 13.3333C18.6666 14.8 17.4666 16 16 16ZM24 13.6C24 8.75996 20.4666 5.33329 16 5.33329C11.5333 5.33329 7.99998 8.75996 7.99998 13.6C7.99998 16.72 10.6 20.8533 16 25.7866C21.4 20.8533 24 16.72 24 13.6ZM16 2.66663C21.6 2.66663 26.6666 6.95996 26.6666 13.6C26.6666 18.0266 23.1066 23.2666 16 29.3333C8.89331 23.2666 5.33331 18.0266 5.33331 13.6C5.33331 6.95996 10.4 2.66663 16 2.66663Z" fill="#FFF" />
                        </svg>

                    </div>
                    <span className="drawer-option-text"><b>Shop</b> cars near me</span>
                </div>
                <div className="drawer-option">
                    <div className="drawer-option-circle">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3333 9.33333H22.6666V12H25.3333V9.33333Z" fill="#FFF" />
                            <path d="M25.3333 14.6667H22.6666V17.3333H25.3333V14.6667Z" fill="#FFF" />
                            <path d="M25.3333 20H22.6666V22.6667H25.3333V20Z" fill="#FFF" />
                            <path d="M1.33331 14.6667V28H9.33331V21.3333H12V28H20V14.6667L10.6666 8L1.33331 14.6667ZM17.3333 25.3333H14.6666V18.6667H6.66665V25.3333H3.99998V16L10.6666 11.3333L17.3333 16V25.3333Z" fill="#FFF" />
                            <path d="M13.3333 4V6.62667L16 8.53333V6.66667H28V25.3333H22.6666V28H30.6666V4H13.3333Z" fill="#FFF" />
                        </svg>

                    </div>
                    <span className="drawer-option-text"><b>Find</b> a store</span>
                </div> */}
            </div>
            <div className="bottom_content">
                <div className={`nav-item  ${active === "sell" ? 'active' : ''}`} onClick={() => selectOption("sell")}>
                    <SellIcon />
                    <span>Sell/Trade</span>
                </div>
                <div className={`nav-item fin ${active === "finance" ? 'active' : ''}`} onClick={() => selectOption("finance")}>
                    <svg className="financeIcon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4903 10.9C10.2203 10.31 9.49025 9.7 9.49025 8.75C9.49025 7.66 10.5003 6.9 12.1903 6.9C13.9703 6.9 14.6303 7.75 14.6903 9H16.9003C16.8303 7.28 15.7803 5.7 13.6903 5.19V3H10.6903V5.16C8.75025 5.58 7.19025 6.84 7.19025 8.77C7.19025 11.08 9.10025 12.23 11.8903 12.9C14.3903 13.5 14.8903 14.38 14.8903 15.31C14.8903 16 14.4003 17.1 12.1903 17.1C10.1303 17.1 9.32025 16.18 9.21025 15H7.01025C7.13025 17.19 8.77025 18.42 10.6903 18.83V21H13.6903V18.85C15.6403 18.48 17.1903 17.35 17.1903 15.3C17.1903 12.46 14.7603 11.49 12.4903 10.9Z" fill="#2A343D" />
                    </svg>
                    <span>Finance</span>
                </div>
                <div className={`nav-item  ${active === "shop" ? 'active' : ''}`} onClick={() => selectOption("shop")}>
                    <svg className="shopIcon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.5 8.97764C5.5 6.25996 7.78805 4 10.6818 4C13.5756 4 15.8636 6.25996 15.8636 8.97764C15.8636 11.6953 13.5756 13.9553 10.6818 13.9553C7.78805 13.9553 5.5 11.6953 5.5 8.97764ZM10.6818 2C6.74733 2 3.5 5.0926 3.5 8.97764C3.5 12.8627 6.74733 15.9553 10.6818 15.9553C12.1394 15.9553 13.5026 15.5309 14.6414 14.799L21.0581 21.0037L22.4958 19.6134L16.1619 13.4887C17.2213 12.2766 17.8636 10.7055 17.8636 8.97764C17.8636 5.0926 14.6163 2 10.6818 2Z" fill="#2A343D" />
                    </svg>
                    <span>Shop</span>
                </div>
                <div className={`nav-item  ${active === "chat" ? 'active' : ''}`} onClick={() => selectOption("chat")}>
                    <svg className="chatIcon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9004 0H2.90039C1.80039 0 0.900391 0.9 0.900391 2V20L4.90039 16H18.9004C20.0004 16 20.9004 15.1 20.9004 14V2C20.9004 0.9 20.0004 0 18.9004 0ZM18.9004 14H4.90039L2.90039 16V2H18.9004V14Z" fill="#2A343D" />
                    </svg>
                    <span>Chat</span>
                </div>
                <div className={`nav-item  ${active === "more" ? 'active' : ''}`} onClick={() => selectOption("more")}>
                    <svg className="moreIcon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.30029 10C5.20029 10 4.30029 10.9 4.30029 12C4.30029 13.1 5.20029 14 6.30029 14C7.40029 14 8.30029 13.1 8.30029 12C8.30029 10.9 7.40029 10 6.30029 10ZM18.3003 10C17.2003 10 16.3003 10.9 16.3003 12C16.3003 13.1 17.2003 14 18.3003 14C19.4003 14 20.3003 13.1 20.3003 12C20.3003 10.9 19.4003 10 18.3003 10ZM12.3003 10C11.2003 10 10.3003 10.9 10.3003 12C10.3003 13.1 11.2003 14 12.3003 14C13.4003 14 14.3003 13.1 14.3003 12C14.3003 10.9 13.4003 10 12.3003 10Z" fill="#2A343D" />
                    </svg>

                    <span>More</span>
                </div>

            </div>
        </div>
    )
}

export default BottomNavbar