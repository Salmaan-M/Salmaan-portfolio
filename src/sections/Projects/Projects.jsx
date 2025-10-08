import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import superchat from '../../assets/superchat.png';
import weatherapp from '../../assets/weatherapp.png';
import todolist from '../../assets/todolist.png';

// Placeholder images for new projects (update these image paths as needed)
import firstContrib from '../../assets/firstContrib.png';
import portfolio from '../../assets/portfolio.png';
import mainRepo from '../../assets/mainRepo.png';
import mlops from '../../assets/mlops.png';
import apple from '../../assets/apple.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
return (
<section id='projects' className={styles.container}>
<h1 className='sectionTitle'>Projects</h1>
<div className={styles.projectsContainer}>
<ProjectCard src={viberr} link="https://github.com/Salmaan-M/ebookstore" h3="Ebookstore" p="Ebookstore website for buying and reading books online" />
<ProjectCard src={superchat} link="https://github.com/Salmaan-M/superchat" h3="SuperChat" p="Real-time chat application for seamless communication" />
<ProjectCard src={weatherapp} link="https://github.com/Salmaan-M/weather-app" h3="Weather App" p="Live weather forecasts and climate information" />
<ProjectCard src={todolist} link="https://github.com/Salmaan-M/my-todo-app" h3="Todo App" p="Task management app to organize your daily activities" />
<ProjectCard src={firstContrib} link="https://github.com/Salmaan-M/first-contributions" h3="First Contributions" p="Helping beginners contribute to open source projects" />
<ProjectCard src={portfolio} link="https://github.com/Salmaan-M/Salmaan-portfolio" h3="Portfolio" p="Personal portfolio showcasing my skills and projects" />
<ProjectCard src={mainRepo} link="https://github.com/Salmaan-M/Salmaan-M" h3="Main Repository" p="Primary repository containing various utilities and code" />
<ProjectCard src={mlops} link="https://github.com/Salmaan-M/MLOps" h3="MLOps" p="Machine learning operations projects and pipelines" />
<ProjectCard src={apple} link="https://github.com/Salmaan-M/apple" h3="Apple" p="Project related to Apple technologies and apps" />
</div>
</section>
);
}
export default Projects;
