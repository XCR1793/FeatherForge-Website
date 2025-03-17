import Styles from './PageHome.module.css';
import Header from '../components/header';

const imageUrl = new URL('../assets/Home Image.png', import.meta.url).toString(); // Resolving image path

function Home() {
    return (
        <>
            <div className={Styles.container}>
                <img 
                    src={imageUrl} 
                    className={Styles.image} 
                    alt="Background" 
                />
                <div className={Styles.projecttext}>
                    <div className={Styles.projecttitle}>Synth Head</div>
                    <div className={Styles.projectdesc}>
                        To create an open source suit which can be worn by an individual and customised to their will. It also must be constructed in such a way that an average human could build it within a reasonable budget and time. The suit must be modular whilst remaining safe for the user to operate. The software must be easy to configure for any individual and has capability to modify without reflashing its firmware. This is a compilation of the best features of ARCOS
                    </div>
                </div>
                <Header/>
            </div>
        </>
    );
}

export default Home;
