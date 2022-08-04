import React from 'react';

//imagens
import Logo from '../../assets/header/Logo.png'
import Loupe from '../../assets/header/Loupe.png'
import Person from '../../assets/header/Person.svg'
import Cart from '../../assets/header/Cart.png'

//estilos
import { HeaderTag, LogoContainer, FormComponent, MyAccount, CartContainer } from './Style'


export function Header() {
    return (
        <HeaderTag>
            <div>
                <div>
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
                        {/* <span>{cart?.length ? cart.length : "0"}</span> */}
                    </CartContainer>
                </div>
            </div>
        </HeaderTag>
    );
}