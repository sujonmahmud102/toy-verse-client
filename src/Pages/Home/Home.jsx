import React from 'react';
import HomeBanner from './HomeBanner';
import PhotoGallery from './PhotoGallery';
import ShopCategory from './ShopCategory';
import useTitle from '../../hooks/useTitle';
import PopularToys from './PopularToys';
import PeopleSay from './PeopleSay';

const Home = () => {
    useTitle('Home')
    return (
        <main>
            <HomeBanner></HomeBanner>
            <PhotoGallery></PhotoGallery>
            <ShopCategory></ShopCategory>
            <PopularToys></PopularToys>
            <PeopleSay></PeopleSay>
        </main>
    );
};

export default Home;