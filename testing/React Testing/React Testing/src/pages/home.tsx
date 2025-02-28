import Styles from './home.module.css';
import Header from '../components/header';

const imageUrl = new URL('../assets/Image.JPG', import.meta.url).toString(); // Resolving image path

function Home() {
    return (
        <>
            <div className={Styles.container}>
                <img 
                    src={imageUrl} 
                    alt="Home Background" 
                    className={Styles.image} 
                />
                <Header /> {/* Header will now be below the image */}
                <h1 className={Styles.title}>Home</h1>
            </div>
        </>
    );
}

export default Home;
