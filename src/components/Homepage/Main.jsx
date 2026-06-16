import { useState } from 'react';
import styles from './Main.module.css';
import PorkInstein from '../PorkInstein.jsx';
import DishCarousel from '../Products/DishCarousel.jsx';

const heroBannerSection = (
    <>
        <section className={`${styles.heroBanner}`}>
            <picture>
                <img src="/images/hero-banner.jpg" alt="La Scienza della Porchetta - Esperimenti di Gusto" className={`${styles.heroImage}`} />
                <img src="/images/hero-banner-sm.png" alt="La Scienza della Porchetta - Esperimenti di Gusto" className={`${styles.heroImageSm}`} />
            </picture>
            <div className={`${styles.heroContent}`}>
                <p className={`${styles.contentFirst}`}>Al Pork-edotto creiamo panini che</p>
                <p className={`${styles.contentSecond}`}>sfidano le leggi della fisica!</p>
                <p className={`${styles.contentThird}`}>(e della dieta!)</p>
            </div>
        </section>
    </>
);

function Main() {
    const [activeCarousel, setActiveCarousel] = useState('evidenza');

    return (
        <>

            {heroBannerSection}
            <div className="d-flex justify-content-center my-4">
            </div>
            <main>
                <div className="d-flex justify-content-center my-5 gap-3">
                    <label className={`${styles.mySelectBtn} btn`}>
                        <input
                            type="radio"
                            className="btn-check"
                            checked={activeCarousel === 'evidenza'}
                            onChange={() => setActiveCarousel('evidenza')}
                        />
                        In evidenza
                    </label>
                    <label className={`${styles.mySelectBtn} btn`}>
                        <input
                            type="radio"
                            className="btn-check"
                            checked={activeCarousel === 'recenti'}
                            onChange={() => setActiveCarousel('recenti')}
                        />
                        Ultimi piatti
                    </label>
                    <label className={`${styles.mySelectBtn} btn`}>
                        <input
                            type="radio"
                            className="btn-check"
                            checked={activeCarousel === 'professore'}
                            onChange={() => setActiveCarousel('professore')}
                        />
                        Dal Professore
                    </label>
                </div>

                <div className='d-flex flex-wrap w-100'>
                    <div className={activeCarousel === 'evidenza' ? 'd-block w-100' : 'd-none'}>
                        <DishCarousel
                            title="In evidenza"
                            endpoint="/products?sortBy=rating&limit=5"
                        />
                    </div>
                    <div className={activeCarousel === 'recenti' ? 'd-block w-100' : 'd-none'}>
                        <DishCarousel
                            title="Ultimi piatti"
                            endpoint="/products?sortBy=recent&limit=5"
                        />
                    </div>
                    <div className={activeCarousel === 'professore' ? 'd-block w-100' : 'd-none'}>
                        <DishCarousel
                            title="Dal Professore"
                            endpoint="/products?category=Chimica&limit=5"
                        />
                    </div>
                </div>
                <PorkInstein />
            </main>
        </>
    );
}

export default Main;