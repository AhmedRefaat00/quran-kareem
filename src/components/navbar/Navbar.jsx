import ThemeToggle from '../ThemeToggle';
import style from './Navbar.module.css';
import logo from '../../assets/icons/logo.png';
import { Menu } from 'lucide-react';
import { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav className={style.navbar} dir='rtl' >
            <div className={style.logo}>
                <p>القرآن</p>
                <img src={logo} alt="logo" width={50} height={50} />
                <p>الكريم</p>

            </div>
            <ul className={`${style['nav-links']} arabic-text`}>
                <li>
                    <a href="#hero">الرئيسية</a>
                </li>
                <li>
                    <a href="#prayers">مواعيد الصلاة</a>
                </li>
                <li>
                    <a href="#azkar">الاذكار</a>
                </li>
                <li>
                    <a href="#quran">القران الكريم</a>
                </li>
                <li>
                    <a href="#footer">المصدر</a>
                </li>
            </ul>
            <div className={style.themeToggle}>
                <ThemeToggle />
            </div>

            <Menu className={style.menu} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {isMenuOpen && (
                <div className={`${style.menuItems} ${isMenuOpen ? style.open : style.close}`} >
                    <Menu className={style.close} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    <a href="#hero" onClick={() => setIsMenuOpen(false)}>الرئيسية</a>
                    <a href="#prayers" onClick={() => setIsMenuOpen(false)}>مواعيد الصلاة</a>
                    <a href="#azkar" onClick={() => setIsMenuOpen(false)}>الاذكار</a>
                    <a href="#quran" onClick={() => setIsMenuOpen(false)}>القران الكريم</a>
                    <a href="#footer" onClick={() => setIsMenuOpen(false)}>المصدر</a>

                    <ThemeToggle />
                </div>
            )}




        </nav>


    );
}

export default Navbar;