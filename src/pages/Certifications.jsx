import cert1 from "../assets/carsimg/cars1.png";
import cert2 from "../assets/carsimg/cars2.png";
import cert3 from "../assets/carsimg/cars3.png";
import cert4 from "../assets/carsimg/cars4.png";
import cert5 from "../assets/carsimg/cars5.png";
import cert6 from "../assets/carsimg/cars6.png";
import cert7 from "../assets/carsimg/cars7.png";

function Certifications() {
    return (
       <div className="container mt-5 text white">
                   <h1 className="text-center mb-4" style={{ color: '#0d6efd' }}>My Certifications</h1>
                   <div className="row">
       
                       {/* HTML Essentials */}
                       <div className="col-md-6 mb-4">
                           <div className="card bg-dark text-white h-100">
                               <img src={cert1} alt='HTML Essentials' className='card-img-top project-img' />
                               <div className="card-body">
                                   <h5 className="card-title">HTML Essentials</h5>
                                   <p className="card-text">
                                        A comprehensive course covering the fundamentals of HTML, including structure, elements, and best practices.
                                   </p>
                               </div>
                           </div>
                       </div>
       
                       {/* CSS Essentials */}
                       <div className="col-md-6 mb-4">
                           <div className="card bg-dark text-white h-100">
                               <img src={cert2} alt='CSS Essentials' className='card-img-top project-img' />
                               <div className="card-body">
                                   <h5 className="card-title">CSS Essentials</h5>
                                   <p className="card-text">
                                        A comprehensive course covering the fundamentals of CSS, including styling, layout, and responsive design.
                                   </p>
                               </div>
                           </div>
                       </div>
       
                       {/* JavaScript Essentials 1 */}
                       <div className="col-md-6 mb-4">
                           <div className="card bg-dark text-white h-100">
                               <img src={cert3} alt='JavaScript Essentials 1' className='card-img-top project-img' />
                               <div className="card-body">
                                   <h5 className="card-title">JavaScript Essentials 1</h5>
                                   <p className="card-text">
                                        A comprehensive course covering the fundamentals of JavaScript, including syntax, data types, and control structures.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* JavaScript Essentials 2 */}
                       <div className="col-md-6 mb-4">
                           <div className="card bg-dark text-white h-100">
                               <img src={cert4} alt='JavaScript Essentials 2' className='card-img-top project-img' />
                               <div className="card-body">
                                   <h5 className="card-title">JavaScript Essentials 2</h5>
                                   <p className="card-text">
                                        A continuation of JavaScript Essentials 1, focusing on advanced topics like functions, objects, and asynchronous programming.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* UI/UX */}
                       <div className="col-md-6 mb-4">
                           <div className="card bg-dark text-white h-100">
                               <img src={cert5} alt='UI/UX' className='card-img-top project-img' />
                               <div className="card-body">
                                   <h5 className="card-title">UI/UX</h5>
                                   <p className="card-text">
                                        A workshop focused on user interface and user experience design principles, covering topics like usability, accessibility, and design thinking.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Java Foundations */}
                       <div className="col-md-6 mb-4">
                           <div className="card bg-dark text-white h-100">
                               <img src={cert6} alt='Java Foundations' className='card-img-top project-img' />
                               <div className="card-body">
                                   <h5 className="card-title">Java Foundations</h5>
                                   <p className="card-text">
                                        A foundational course in Java programming, covering basic syntax, object-oriented programming concepts, and core libraries.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Six Rules of Web Dev */}
                       <div className="col-md-6 mb-4">
                           <div className="card bg-dark text-white h-100">
                               <img src={cert7} alt='Six Rules of Web Dev' className='card-img-top project-img' />
                               <div className="card-body">
                                   <h5 className="card-title">Six Rules of Web Dev</h5>
                                   <p className="card-text">
                                        A workshop that covers six essential principles for effective web development, including performance optimization, security, and maintainability.
                                   </p>
                               </div>
                           </div>
                       </div>
                       {/* Add more certifications as needed */}
                   </div>
               </div>
    );
}
export default Certifications;
// This code defines a Certifications component that displays a list of certifications with images.
