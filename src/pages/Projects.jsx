import projectsImages from '../assets/projectsImages/p1.png';
import projectsImages2 from '../assets/projectsImages/p3.png';
import projectsImages3 from '../assets/projectsImages/p4.png';
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
                                Launching July 2025. Game is currently in development by Unity Engine & C#.
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
                {/* Add more projects as needed */}
            </div>
        </div>
    );
}
export default Projects;
// This code defines a Projects component that displays two projects: Darkness Takeover and PMU Schedule Maker.
