import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.svg';
import close from '../assets/close.svg';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../index.css'


const Nav = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (<div className=' h-[50px] md:h-[70px] flex justify-between items-center  sm:sticky top-0 z-40' >
        <div onClick={handleShow} className='md:hidden'>
            <img src={hamburger} alt="" />
        </div>
        
        <div className='md:hidden'></div>
        <div className='md:hidden'></div>

        {show && <div className='absolute left-0 bg-white w-full top-0 pt-3 pb-4 pr-6'>
            <ul className='relative flex flex-col items-center md:flex-row gap-14 pt-8 md:py-3 md:px-8 text-black'>
                <div className='absolute top-0 right-2 flex  items-center w-full' onClick={handleShow}>
                    <img src={close} alt="" className='h-7' />
                </div>
                <li className='cursor-pointer font-semibold text-xl md:text-[17px]' onClick={handleShow}><Link to={"/"}> Home</Link>

                </li>
                <li className='cursor-pointer font-semibold text-xl md:text-[17px]' onClick={handleShow}><Link to={"/about"}>About</Link>

                </li>
                <li className='cursor-pointer font-semibold text-xl md:text-[17px]' onClick={handleShow}><Link to={"/wishes"}> Wishes</Link>

                </li>
                {/* <li className='cursor-pointer font-semibold text-xl md:text-[17px]' onClick={handleShow}><NavHashLink smooth to="/#contact" className="nav-link" activeClassName="active"
                    activeStyle={{ color: 'red' }}>CONTACT US</NavHashLink>

                </li> */}
            </ul>
        </div>}

        <div className='hidden md:block'>
            <ul className=' bg-white rounded-3xl flex items-center  text-[16px]  md:flex-row gap-14 pt-8 md:py-3 md:px-8 text-black'>
                <li className='cursor-pointer'><Link to={"/"}>Home</Link>

                </li>
               
                <li className='cursor-pointer'><Link to={"/about"}>About</Link>

                </li>
                <li className='cursor-pointer'><Link to={"/wishes"}>Wishes</Link>

                </li>
               
            </ul>
        </div>
    </div>);
}

export default Nav;