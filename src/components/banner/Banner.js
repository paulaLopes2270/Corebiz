import React from 'react'

//imagens
import BannerImg from '../../assets/banner/Banner.svg'

//estilo
import {BannerComponent} from './Style'

export function Banner() {
    return (
        <BannerComponent>
          <picture>
            <img src={BannerImg} alt='banner'></img>
          </picture>
        </BannerComponent>
      )
}