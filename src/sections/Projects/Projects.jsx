import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import superchat from '../../assets/superchat.png'
import weatherapp from '../../assets/weatherapp.png';
import todolist from '../../assets/todolist.png'
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
          src={superchat} 
          link="https://github.com/Salmaan-M/superchat"
          h3="SuperChat"
          p="Chat Application"
        />
        <ProjectCard 
          src={weatherapp} 
          link="https://github.com/Salmaan-M/weather-app"
          h3="Weather App"
          p="Weather forecast"
        />
        <ProjectCard 
          src={todolist} 
          link="https://github.com/Salmaan-M/my-todo-app"
          h3="Todo App"
          p="Todo Application"
        />
      </div>
    </section>
  );
}

export default Projects;
