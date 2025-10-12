import projectsImages from '../assets/prosimg/pros1.png';
import projectsImages2 from '../assets/prosimg/pros2.png';
import projectsImages3 from '../assets/prosimg/pros3.png';
import projectsImages4 from '../assets/prosimg/pros4.png';
import projectsImages5 from '../assets/prosimg/pros5.png';
import projectsImages6 from '../assets/prosimg/pros6.png';
import './Projects.css';

function Projects() {
    return (
        <div className="container mt-5 text white">
            <h1 className="text-center mb-4" style={{ color: '#0d6efd' }}>My Projects</h1>
            <div className="row">

                {/* Darkness Takeover */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-white h-100">
                        <img src={projectsImages2} alt='Darkness Takeover' className='card-img-top project-img' />
                        <div className="card-body">
                            <h5 className="card-title">Darkness Takeover</h5>
                            <p className="card-text">
                                A psychological horror game where players navigate a dark maze, with a monster lurking in the shadows.
                                Released 25, July 2025 on Steam. Developed by Unity Engine & C#. <a href='https://store.steampowered.com/app/3865470/Darkness_Takeover/' target="_blank" rel="noopener noreferrer" className="text-primary">View on Steam</a>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>

                {/* PMU Schedule Maker */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-white h-100">
                        <img src={projectsImages} alt='PMU Schedule Maker' className='card-img-top project-img' />
                        <div className="card-body">
                            <h5 className="card-title">PMU Schedule Maker</h5>
                            <p className="card-text">
                                A client-side application made for Web Programming course at PMU.
                                It allows students to create and manage their schedules efficiently.
                                Built with HTML, CSS, and JavaScript.
                            </p>
                        </div>
                    </div>
                </div>

                {/* My-Portfolio */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-white h-100">
                        <img src={projectsImages3} alt='My Portfolio' className='card-img-top project-img' />
                        <div className="card-body">
                            <h5 className="card-title">My Portfolio</h5>
                            <p className="card-text">
                                This portfolio website showcases my projects, skills, certifications and experiences.
                                Built with React + Vite, Bootstrap, and custom CSS.
                            </p>
                        </div>
                    </div>
                </div>
                {/* GPA Calculator */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-white h-100">
                        <img src={projectsImages4} alt='GPA Calculator' className='card-img-top project-img' />
                        <div className="card-body">
                            <h5 className="card-title">GPA Calculator</h5>
                            <p className="card-text">
                                A simple GPA calculator that allows students to calculate their GPA based on their grades.
                                Built with React, Vite, and Bootstrap. <a href="https://gpa-calc-dev.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary">View Project</a>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/* High Resolution Clock */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-white h-100">
                        <img src={projectsImages5} alt='High Resolution Clock' className='card-img-top project-img' />
                        <div className="card-body">
                            <h5 className="card-title">High Resolution Clock</h5>
                            <p className="card-text">
                                A high-resolution digital clock application that displays the current time with precision including micro & nano seconds developed by Java & JavaFX for Windows. 
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/* Full-Stack MERN To-Do-List */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-dark text-white h-100">
                        <img src={projectsImages6} alt='To-Do-List Web App' className='card-img-top project-img' />
                        <div className="card-body">
                            <h5 className="card-title">To-Do-List Web App</h5>
                            <p className="card-text">
                                 To-Do-List Web App that allow users to create accounts, add tasks, and manage them. 
                                 This project was my first experience with Back-End development using Node.js and Express.js, along with MongoDB for database management. 
                                 This marks my first Full-Stack Development project using the MERN Stack.   
                                 <a href="https://to-do-list-dev8.netlify.app" target="_blank" rel="noopener noreferrer" className="text-primary">View Project</a>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/* Add more projects as needed */}
            </div>
        </div>
    );
}
export default Projects;
// This code defines a Projects component that displays two projects: Darkness Takeover and PMU Schedule Maker.
