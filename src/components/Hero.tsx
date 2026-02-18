export function Hero() {
    const scrollToWorkshops = () => {
        const element = document.getElementById("workshops");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="bg-surface py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">

                <h1 className="text-primary text-4xl lg:text-5xl font-bold mb-4">
                    Talleres que resuelven
                </h1>

                <p className="text-muted mb-3 max-w-2xl mx-auto uppercase tracking-wide text-sm">
                    Armonía Familiar, I.A.P.
                </p>

                <h4 className="text-primary text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
                    Encuentra orientación, acompañamiento y un espacio seguro
                </h4>

                <button
                    onClick={scrollToWorkshops}
                    className="bg-accent text-primary px-10 py-4  rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
                >
                    Ver talleres disponibles
                </button>

            </div>
        </section>
    );
}
