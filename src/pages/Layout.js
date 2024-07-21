import { Outlet, Link } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import logo from "../assets/pro-logo.png"
import slider from "../assets/slider.png"
import footer from "../assets/footer.jpg"

const Layout = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [menuVisible, setMenuVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if(currentScrollPos > prevScrollPos){
            setMenuVisible(false)
        }else{
            setMenuVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })

  return (
    <>
        <header className={`header-home ${menuVisible ? '' : 'hidden'}`}> 
            <div className="flex header-logo">
                <img src={logo} alt="Logo" className="logo-pro"/>
                <img src={slider} alt="Slider" className="logo-slider"/>
            </div>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Career</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
            </nav>
        </header>
      

      <Outlet />

      <footer><img src={footer} alt="Footer" /></footer>
    </>
  )
};

export default Layout;