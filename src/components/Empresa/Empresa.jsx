import { BannerADN } from "../Banners/BannerADN";
import "./Empresa.css"


export function Empresa() {



    return (
            
        <>
            <BannerADN/>


            
            <section className="empresa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6008214098274!2d-58.38620718255615!3d-34.5889657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb8ca3bb6739%3A0xdbc926a67facd781!2sLouis%20Vuitton!5e0!3m2!1ses-419!2sar!4v1660516388128!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                <div className="card local">
                    <img src="/images/Local.jpg" className="card-img-top" alt="LOCAL"/>
                    <div className="card-body">
                        <p className="card-text">
                            Ubicados en pleno barrio de Recoleta, somos los mayores importadores de ropa de Lujo de Buenos Aires.  
                        </p>
                    </div>
                    <div class="card-footer">
                        Próximamente locales en Mendoza y Córdoba
                    </div>
                </div>
            </section>
        </>
    )
}