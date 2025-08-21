import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets//instagram-white.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import { useTheme } from '../../common/ThemeContext';
function Hero() {
   const { theme,toggleTheme } = useTheme();

   const themeIcon =theme === 'light'? sun : moon;
   const instagramIcon =theme === 'light'? instagramLight : instagramDark;
   const githubIcon =theme === 'light'? githubLight : githubDark;
   const linkedinIcon =theme === 'light'? linkedinLight: linkedinDark;


  return <section id="hero" className={styles.container}>

    <div className={styles.colorModeContainer}><img  className={styles.hero} 
    src={heroImg} alt="Profile pic " />
    <img className={styles.colorMode}
    src={themeIcon} alt='Color Mode icon'
    onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
      <h1>Salmaan M</h1>
      <h2>Software Developer</h2>
      <span>
        <a href="https://instagram.com/itz.salmaan_/" target='blank'>
        <img src={instagramIcon} alt='instagram icon'/>
        </a>

        <a href="https://github.com/Salmaan-M/" target='blank'>
        <img src={githubIcon} alt='Github icom'/>
        </a>

        <a href="https://www.linkedin.com/in/salmaan-m/" target='blank'>
        <img src={linkedinIcon} alt='Linkedin icom'/>
        </a>
        
      </span>
      <p className={styles.description}>
        With a passion for developing software products</p>
      <a 
  href="https://drive.google.com/uc?export=download&id=1R4wFMjo0Lnad4boIR1C9US0XH90m11Ul" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className='hover'>
    Resume
  </button>
</a>

    </div>

  </section> 
}

export default Hero;
