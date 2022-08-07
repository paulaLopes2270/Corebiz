import React from 'react';

//imagens
import Logo from '../../assets/header/Logo.svg'
import Loupe from '../../assets/header/Loupe.svg'
import Person from '../../assets/header/Person.svg'
import Cart from '../../assets/header/Cart.svg'

//estilos
import { HeaderTag, LogoContainer, FormComponent, MyAccount, CartContainer } from './Style'

//contexto
import { useCart } from '../../context/cartContext/CartContext';
import { Hamburger } from './componets/hamburger/Hamburger';


export function Header() {
    const { cart } = useCart()
    return (
        <HeaderTag>
            <div>
                <div className='centralizer'>
                    <Hamburger />
                    <LogoContainer>
                        <img src={Logo} alt='Corebiz' />
                    </LogoContainer>
                    <FormComponent>
                        <input
                            type='text'
                            name='search'
                            placeholder='O que está procurando?'
                        />
                        <img src={Loupe} alt='Buscar' />
                    </FormComponent>
                    <MyAccount>
                        <img src={Person} alt='' />
                        <span>Minha conta</span>
                    </MyAccount>
                    <CartContainer>
                        <img src={Cart} alt='cart' />
                        <span>{cart?.length ? cart.length : "0"}</span>
                    </CartContainer>
                </div>
            </div>
        </HeaderTag>
    );
}