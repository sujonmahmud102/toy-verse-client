import React from 'react';
import g1 from '../../assets/gallery/g1.jpg';
import g2 from '../../assets/gallery/g2.jpg';
import g3 from '../../assets/gallery/g3.jpg';
import g4 from '../../assets/gallery/g4.jpg';
import g5 from '../../assets/gallery/g5.jpg';
import g6 from '../../assets/gallery/g6.jpg';

const photos = [g1, g2, g3, g4, g5, g6];

const PhotoGallery = () => {
    return (
        <div className='my-10 px-16 bg-[#fb6b47]'>
            <h1 className='text-white text-7xl font-semibold text-center p-8 '>
                Photo Gallery
            </h1>
            <div className='grid md:grid-cols-3 gap-8 mx-auto p-10'>
                {
                    photos.map(photo => <div>
                        <img className='w-3/4 rounded-lg hover:brightness-50 transition duration-700' src={photo} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default PhotoGallery;