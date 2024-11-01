import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={viberr} 
          link="https://github.com/Salmaan-M/ebookstore"
          h3="Ebookstore"
          p="Ebookstore website"
        />
        <ProjectCard 
          src={freshBurger} 
          link="https://github.com/Salmaan-M/ebookstore"
          h3="Eatables"
          p="Restuarant landing page"
        />
        <ProjectCard 
          src={hipsster} 
          link="https://github.com/Salmaan-M/ebookstore"
          h3="Tic Tac Toe"
          p="Game"
        />
        <ProjectCard 
          src={fitlift} 
          link="https://github.com/Salmaan-M/ebookstore"
          h3="Fitlift"
          p="Gym website"
        />
      </div>
    </section>
  );
}

export default Projects;
