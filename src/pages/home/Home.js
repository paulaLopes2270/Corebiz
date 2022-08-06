import React from 'react';

//componetes
import { Header } from '../../components/header/Header';
import { Banner } from '../../components/banner/Banner';
import { Products } from '../../components/products/Products'
import { NewsPosts } from '../../components/newsPosts/NewsPosts';

export function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Products />
            <NewsPosts />
        </>

    );
}

