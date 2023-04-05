
import React, { useState } from 'react';
import './navbar.css'
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setIsOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Blog', path: '/blog' },
        { id: 5, name: 'Blog Post', path: '/blog/:postId' },
        { id: 6, name: 'Products', path: '/products' },
        { id: 7, name: 'Product', path: '/products/:productId' }
    ];

    return (
        <nav className='bg-purple-400'>
            <div className='md:hidden' onClick={() => setIsOpen(!open)}>
                <span>{open === true ? <Bars3Icon className="h-6 w-6 text-blue-500" /> : <XMarkIcon className="h-6 w-6 text-blue-500" />}</span>


            </div>
            <ul className={`md:flex absolute md:static bg-purple-400 duration-500 ${open ? 'top-6': '-top-48'}`}>
                {
                    routes.map(route => <Link key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;