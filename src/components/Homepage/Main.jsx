import LastProducts from './LastProducts.jsx';
import styles from './Main.module.css';
import PorkInstein from '../PorkInstein.jsx';


const heroBannerSection = <>
    <section className={`${styles.heroBanner}`}>

        <picture>
            <img src="/images/hero-banner.jpg" alt="La Scienza della Porchetta - Esperimenti di Gusto" className={`${styles.heroImage}`} />
        </picture>
        <div className={`${styles.heroContent}`}>
        </div>

    </section>
</>
    ;

function Main() {

    return (
        <>
            {heroBannerSection}
            <main>

                <LastProducts />
                <PorkInstein />
            </main>
        </>
    );
}

export default Main;