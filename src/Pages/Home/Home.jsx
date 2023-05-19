import React from 'react';
import HomeBanner from './HomeBanner';
import PhotoGallery from './PhotoGallery';
import ShopCategory from './ShopCategory';

const Home = () => {
    return (
        <main>
            <HomeBanner></HomeBanner>
            <PhotoGallery></PhotoGallery>
            <ShopCategory></ShopCategory>
        </main>
    );
};

export default Home;