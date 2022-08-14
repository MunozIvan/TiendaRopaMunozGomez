import "./Footer.css"
import {Facebook,Twitter,Instagram,Github,Google,Linkedin} from "react-bootstrap-icons"


export function Footer() {
    return (
        <div className="footer">
            <footer className="text-center text-lg-start text-white" >
                <div className="container p-4 pb-0">
                <section className="">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">DISCLAIMER</h5>

                            <p>
                                Este sitio web es ficticio. Es parte de un trabajo práctico en CoderHouse. No hay ningún tipo de fin de lucro. Las imágenes e información no me pertenecen. Los links de la derecha son a modo de referencia.
                            </p>
                        </div>
            
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Nuestras sucursales</h5>

                            <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Atención al Cliente</h5>

                            <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Empresa</h5>

                            <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Link 4</a>
                            </li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Avisos Legales</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="mb-4" />

                <section className="">
                    <p className="d-flex justify-content-center align-items-center">
                        <span className="me-3">
                            Register for free
                        </span>
                        <button type="button" className="btn btn-outline-light btn-rounded">
                            Sign up!
                        </button>
                    </p>
                </section>

                <hr className="mb-4" />

                <section className="mb-4 text-center">
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com" role="button">
                        <Facebook className="fab" size={25}/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1"href="https://www.twitter.com"role="button">
                        <Twitter className="fab" size={25}/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com" role="button" >
                        <Google className="fab" size={25}/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com" role="button">
                        <Instagram className="fab" size={25}/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com" role="button">
                        <Linkedin className="fab" size={25}/>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.github.com" role="button" >
                        <Github className="fab" size={25}/>
                    </a>
                </section>
                </div>

                <div className="text-center p-3" >
                    Codeado por Iván Muñoz
                </div>
            </footer>
        </div>
        
    )
}