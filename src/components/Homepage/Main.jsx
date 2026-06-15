import styles from './Main.module.css';
import PorkInstein from '../PorkInstein.jsx';
import DishCarousel from '../Products/DishCarousel.jsx';

const heroBannerSection = <>
    <section className={`${styles.heroBanner}`}>

        <picture>
            <img src="/images/hero-banner.jpg" alt="La Scienza della Porchetta - Esperimenti di Gusto" className={`${styles.heroImage}`} />
        </picture>
        <div className={`${styles.heroContent}`}>
            <p className={`${styles.contentFirst}`}>Al Pork-edotto creiamo panini che</p>
            <p className={`${styles.contentSecond}`}>sfidano le leggi della fisica!</p>
            <p className={`${styles.contentThird}`}>(e della dieta!)</p>
        </div>

    </section>
</>
    ;

function Main() {

    return (
        <>
            {heroBannerSection}
            <main>
                <div className='d-flex flex-wrap'>
                    <DishCarousel
                        title="In evidenza"
                        endpoint="/products?sortBy=rating&limit=5"
                    />

                    <DishCarousel
                        title="Ultimi piatti"
                        endpoint="/products?sortBy=recent&limit=5"
                    />

                    <DishCarousel
                        title="Dal Professore"
                        endpoint="/products?category=Chimica&limit=5"
                    />
                </div>
                <PorkInstein />
            </main>
        </>
    );
}

export default Main;