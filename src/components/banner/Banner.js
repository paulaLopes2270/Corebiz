import React from 'react'

//imagens
import BannerImg from '../../assets/banner/Banner.svg'
import BannerMobile from '../../assets/banner/BannerMobile.svg'

//estilo
import { BannerComponent } from './Style'

export function Banner() {
  return (
    <BannerComponent>
      <picture>
        <source media='(min-width: 651px)' srcSet={BannerImg} />
        <source media='(max-width: 650px)' srcSet={BannerMobile} />
        <img src={BannerImg} alt='banner'></img>
      </picture>
    </BannerComponent>
  )
}