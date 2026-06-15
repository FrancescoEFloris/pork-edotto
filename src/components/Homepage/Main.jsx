import LastProducts from './LastProducts.jsx';
import styles from './Main.module.css';
import PorkInstein from '../PorkInstein.jsx';
import RandomProducts from '../Products/RandomProducts.jsx';


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
                    <RandomProducts title="In evidenza" />
                    <LastProducts />
                    <RandomProducts title="Dal professore" />
                </div>
                <PorkInstein />
            </main>
        </>
    );
}

export default Main;