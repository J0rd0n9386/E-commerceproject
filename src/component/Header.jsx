// import React from 'react'
// import logo from '../imagesforweb/VERA_logo.png'
// import cartIcon from "../imagesforweb/cart_icon.png";
// import { NavLink } from 'react-router-dom';
// export const Header = () => {
//     return (
//         <div>
//             <header>
//                 <div className='flex items-center gap-50 px-6 py-4'>
//                     <img className='w-38 h-18' src={logo} alt="Vera logo" />

//                     <nav>
//                         <ul className='flex gap-10'>
//                             <li><NavLink to="/" className={({ isActive }) => isActive ? "Active" : ""}>Home</NavLink></li>
//                             <li><NavLink to="/AboutUs" className={({ isActive }) => isActive ? "Active" : ""}>AboutUs</NavLink></li>
//                             <li><NavLink to="/ContactUs" className={({ isActive }) => isActive ? "Active" : ""}>ContactUs</NavLink></li>
//                             <li><NavLink to="/Products" className={({ isActive }) => isActive ? "Active" : ""}>Products</NavLink></li>
//                         </ul>
//                     </nav>
//                     <Addtocart/>

//                 </div>
//                 <div>

//                 </div>
//             </header>


//         </div>
//     )
// }
// export default Header

import React from 'react'
import logo from '../imagesforweb/VERA_logo.png'

import { NavLink } from 'react-router-dom';
import Addtocart from '../Pages/Cart';
const Header = () => {
    return (
        <header style={{
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '0.5px solid rgba(245,158,11,0.2)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
        }}>
            <div className='flex items-center justify-between px-10 py-3'>

                <NavLink to="/">
                    <img className='h-12 w-auto object-contain' src={logo} alt="Vera logo" />
                </NavLink>

                <nav>
                    <ul className='flex items-center gap-10'>
                        {[
                            { to: "/", label: "Home" },
                            { to: "/AboutUs", label: "About-Us" },
                            { to: "/Products", label: "Products" },
                            { to: "/ContactUs", label: "Contact-Us" },
                        ].map((item, i) => (
                            <li key={i} style={{ listStyle: 'none' }}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-link'}
                                >
                                    {item.label.toUpperCase()}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <NavLink to="/Products" style={{
                        fontSize: '11px',
                        letterSpacing: '0.2em',
                        color: '#000',
                        background: '#f59e0b',
                        padding: '8px 20px',
                        borderRadius: '999px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                    }}>
                        SHOP NOW
                    </NavLink>

                    <div style={{ position: 'relative', cursor: 'pointer' }}>
                      <Addtocart/>
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            background: '#f59e0b',
                            color: '#000',
                            fontSize: '9px',
                            fontWeight: '700',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>0</span>
                    </div>
                </div>

            </div>

            <style>{`
                .nav-link {
                    color: #9ca3af;
                    font-size: 11px;
                    letter-spacing: 0.2em;
                    font-weight: 500;
                    text-decoration: none;
                    padding-bottom: 4px;
                    border-bottom: 1px solid transparent;
                    transition: all 0.3s ease;
                }
                .nav-link:hover {
                    color: #ffffff;
                    border-bottom: 1px solid #6b7280;
                }
                .nav-active {
                    color: #f59e0b;
                    font-size: 11px;
                    letter-spacing: 0.2em;
                    font-weight: 600;
                    text-decoration: none;
                    padding-bottom: 4px;
                    border-bottom: 1px solid #f59e0b;
                }
            `}</style>
        </header>
    )
}

export default Header