import LastProducts from './LastProducts.jsx';
import styles from './Main.module.css';


const heroBannerSection = <>
    <section className={`${styles.heroBanner}`}>

        <picture>
            <img src="src\public\images\hero-banner.jpg" alt="La Scienza della Porchetta - Esperimenti di Gusto" className={`${styles.heroImage}`} />
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
            </main>
        </>
    );
}

export default Main;


// {`${styles.navigateBtn}`}