import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/img/marca.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'  />
        </Link>

        <div className='options'>

        <Link className='option' to='/'>
            INICIO
        </Link>
        <Link className='option' to='/shop'>
            VEHÍCULOS EN ALQUILER
        </Link>
        <Link className='option' to='/shop'>   
            CONTACTO
        </Link>

        {currentUser ? 
            (
                <div className='option' onClick={() => auth.signOut()}>
                    SALIR
                </div>
            ) : (

                <Link className='option' to='/signin'>
                    ENTRAR
                </Link>
            )
        }  

        </div>
    </div>
);

export default Header;