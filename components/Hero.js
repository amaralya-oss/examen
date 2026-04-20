app.component('hero', {
    template:
        `<section class="hero" id="hero">
            <video class="hero__video" autoplay muted loop playsinline>
                <source src="assets/hero.mp4" type="video/mp4">
            </video>

            <div class="hero__content">
                <h1 class="hero__title">Transforma tus residuos en vida</h1>
                <p class="hero__subtitle">Convierte tus desechos orgánicos en compost de calidad desde tu hogar, de
                    forma simple, inteligente y sostenible.
                </p>
                <div class="hero__actions">
                    <a href="#about">
                        <button class="btn btn--primary">Conocer Ecotracker</button>
                    </a>
                    <a href="#catalog">
                        <button class="btn btn--primary">Explorar tienda</button>
                    </a>
                </div>
            </div>
        </section>`
}
)