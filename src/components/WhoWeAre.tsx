

export function WhoWeAre() {
    return (
        <section
            id="who-we-are"
            className="py-24 lg:py-32 bg-bg"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="order-2 lg:order-1">
                        <img
                            src="/logo/logoComplete.png"
                            alt="¿Quiénes somos?"
                            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <h2 className="text-primary text-3xl lg:text-4xl font-semibold">
                            ¿Quiénes somos?
                        </h2>

                        <p className="text-muted max-w-xl">
                            Armonía Familiar, I.A.P. es una organización sin fines de lucro dedicada a brindar
                            apoyo emocional compasivo y talleres comunitarios para personas y familias.
                        </p>

                        <p className="text-muted max-w-xl">
                            Creemos que todas las personas merecen tener acceso a un entorno seguro donde
                            puedan compartir sus experiencias, aprender valiosas habilidades para la vida
                            y conectar con otras personas que comprenden su trayectoria.
                        </p>

                        <p className="text-muted max-w-xl">
                            Nuestro equipo de terapeutas capacitados y profesionales de la salud mental
                            trabajan juntos para Apoyar, Educar, Informar, Orientar y Concientizar a las
                            personas usuarias por medio de programas de desarrollo humano y herramientas
                            psicológicas con el objetivo de restaurar su integridad como seres humanos para
                            devolver su fortaleza a la familia, y vuelva a ocupar su lugar como núcleo en la sociedad.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
