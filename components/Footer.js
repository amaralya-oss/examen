app.component('site-footer',{
    template: `
            <footer class="footer" id="site-footer">

            <div class="footer__container">

                <div class="footer__brand">
                    <div class="footer__logo"><a href="#">ecotracker</a></div>
                    <p class="footer__description">
                        Ecotracker convierte residuos orgánicos en vida, ayudándote a reducir tu impacto ambiental desde
                        casa.
                    </p>
                </div>

                <div class="footer__app">
                    <h4 class="footer__heading">App Ecotracker</h4>
                    <p class="footer__text">
                        Controla tu compost desde cualquier lugar: recibe alertas, recomendaciones y seguimiento en
                        tiempo real.
                    </p>
                    <p class="footer__text"><strong>Disponible próximamente</strong></p>
                </div>

                <div class="footer__links">
                    <h4 class="footer__heading">Secciones</h4>
                    <ul class="footer__list">
                        <li class="footer__list-item"><a class="footer__link" href="#about">Quiénes somos</a></li>
                        <li class="footer__list-item"><a class="footer__link" href="#how-it-works">Cómo funciona</a>
                        </li>
                        <li class="footer__list-item"><a class="footer__link" href="#catalog">Tienda</a></li>
                        <li class="footer__list-item"><a class="footer__link" href="#contact">Contacto</a></li>
                    </ul>
                </div>

                <div class="footer__contact">
                    <h4 class="footer__heading">Contacto</h4>
                    <p class="footer__text">Email: contacto@ecotracker.cl</p>
                    <p class="footer__text">Santiago, Chile</p>
                </div>

            </div>

            <div class="footer__bottom">
                <p>Cambios y devoluciones · Términos y condiciones · Política de privacidad</p>
                <p>© 2026 Ecotracker — Todos los derechos reservados</p>
            </div>

        </footer>
        `
})