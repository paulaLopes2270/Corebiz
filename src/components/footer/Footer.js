import EmailImg from "../../assets/footer/email.svg"
import PhoneImg from "../../assets/footer/phone.svg"
import Corebiz from "../../assets/footer/corebiz.svg"
import Vtex from "../../assets/footer/vtex.svg"

import { FooterComponent, Localization, Contact, Partners } from "./Style"

export const Footer = () => {
    return (
      <FooterComponent>
        <div className='centralizer'>
          <Localization>
            <h3>Localização</h3>
            <hr />
            <div>
              <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
              <p>Alphavile SP</p>
              <p>brasil@corebiz.ag</p>
              <p>+55 11 3090 1039</p>
            </div>
          </Localization>
          <Contact>
            <button>
              <img src={EmailImg} alt='Entre em contato' />
              <span>Entre em contato</span>
            </button>
            <button>
              <img src={PhoneImg} alt='Fale com nosso consultor' />
              <span>Fale com nosso consultor oline</span>
            </button>
          </Contact>
          <Partners>
            <img src={Corebiz} alt='Create by Corebiz' />
            <img src={Vtex} alt='Powered by Vtex' />
          </Partners>
        </div>
      </FooterComponent>
    )
  }
  