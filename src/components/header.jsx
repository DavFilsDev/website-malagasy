import '../styles/header.css';
import logo from '../assets/img/logo.png';
import { useEffect } from 'react';

const Header = () => {

    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('.header');
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#santatra">Santatra</a></li>
            <li className="dropdown">
              <a href="#faritany" className="dropbtn">Faritany</a>
              <div className="dropdown-content">
                <a href="#menu1">Antsiranana</a>
                <a href="#menu2">Mahajanga</a>
                <a href="#menu3">Toamasina</a>
                <a href="#menu4">Antananarivo</a>
                <a href="#menu5">Fianarantsoa</a>
                <a href="#menu6">Toliara</a>
              </div>
            </li>
            <li><a href="#sary">Sary</a></li>
            <li><a href="#laharana">Laharana</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;
