import React from 'react';
import HomeBanner from './HomeBanner';
import PhotoGallery from './PhotoGallery';
import ShopCategory from './ShopCategory';
import useTitle from '../../hooks/useTitle';
import PopularToys from './PopularToys';

const Home = () => {
    useTitle('Home')
    return (
        <main>
            <HomeBanner></HomeBanner>
            <PhotoGallery></PhotoGallery>
            <ShopCategory></ShopCategory>
            <PopularToys></PopularToys>
        </main>
    );
};

export default Home;