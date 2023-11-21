import "./BottomNavbarItem.scss";
import React, { useEffect, useRef } from "react";
const BottomNavbarItem = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const items = nav.querySelectorAll(".nav-item");
    const indicator = nav.querySelector(".nav-indicator");

    function handleIndicator(el) {
      items.forEach((item) => {
        item.classList.remove("is-active");
        item.style.color = null; // Remueve el estilo inline
      });

      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.backgroundColor = el.getAttribute("active-color");

      el.classList.add("is-active");
      el.style.color = el.getAttribute("active-color");
    }

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto de los enlaces
        handleIndicator(e.target);
      });
      if (item.classList.contains("is-active")) {
        handleIndicator(item);
      }
    });

    // Limpiar los event listeners al desmontar el componente
    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", handleIndicator);
      });
    };
  }, []);

  return (
    <>
      <nav className="nav" ref={navRef}>
        <a href="#" className="nav-item is-active" active-color="blue">
          Home
        </a>
        <a href="#" className="nav-item" active-color="blue">
          About
        </a>
        <a href="#" className="nav-item" active-color="blue">
          Testimonials
        </a>
        <a href="#" className="nav-item" active-color="blue">
          Blog
        </a>
        <a href="#" className="nav-item" active-color="blue">
          Contact
        </a>
        <span className="nav-indicator"></span>
      </nav>
    </>
  );
};

export default BottomNavbarItem;
