import { FormEvent, ReactNode, useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1569616686652-d73a498bf0ed?auto=format&fit=crop&w=2000&q=88";
const detailImage =
  "https://images.unsplash.com/photo-1569616758526-23def508da5a?auto=format&fit=crop&w=1400&q=85";

type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "clock"
  | "gear"
  | "mail"
  | "map"
  | "menu"
  | "phone"
  | "ruler"
  | "shield"
  | "spark"
  | "tool"
  | "x";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    phone: <path d="M6.6 3.5 9 8 6.9 9.3a15 15 0 0 0 7.8 7.8L16 15l4.5 2.4-.7 3a2 2 0 0 1-2 1.6C9 21.5 2.5 15 2 6.2a2 2 0 0 1 1.6-2Z" />,
    ruler: (
      <>
        <path d="m4 18 14-14 2 2L6 20H4Z" />
        <path d="m14 8 2 2M11 11l2 2M8 14l2 2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.7 3 8 7 10 4-2 7-5.3 7-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z" />,
    tool: <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3Z" />,
    x: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`inline-flex items-center ${light ? "rounded-lg bg-white px-3 py-2 shadow-lg shadow-black/20" : ""}`}
      aria-label="Solumec, volver al inicio"
    >
      <img
        src="/logo-solumec.png"
        alt="Solumec"
        className={`h-10 w-auto object-contain ${light ? "" : "mix-blend-multiply"}`}
      />
    </a>
  );
}

const services = [
  {
    icon: "shield" as IconName,
    number: "01",
    title: "Mantenimiento preventivo",
    text: "Planes periódicos para anticipar averías, reducir paradas y prolongar la vida útil de tus equipos.",
  },
  {
    icon: "ruler" as IconName,
    number: "02",
    title: "Nivelación y geometrías",
    text: "Verificación de precisión, alineación y nivelación para recuperar el rendimiento de fábrica.",
  },
  {
    icon: "gear" as IconName,
    number: "03",
    title: "Sistemas de lubricación",
    text: "Revisión, optimización y mantenimiento de sistemas para proteger cada componente crítico.",
  },
  {
    icon: "tool" as IconName,
    number: "04",
    title: "Protecciones telescópicas",
    text: "Inspección y puesta a punto de protecciones para un entorno de trabajo fiable y seguro.",
  },
  {
    icon: "spark" as IconName,
    number: "05",
    title: "Limpieza técnica",
    text: "Limpieza de depósitos de taladrina, refrigeradores y zonas sensibles de la instalación.",
  },
  {
    icon: "clock" as IconName,
    number: "06",
    title: "Servicio adaptado",
    text: "Intervenimos en las franjas de menor actividad para no interferir en tu producción.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            {[
              ["Inicio", "#inicio"],
              ["Nosotros", "#nosotros"],
              ["Servicios", "#servicios"],
              ["Por qué Solumec", "#ventajas"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+34680214050" className="text-right">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Llámanos</span>
              <span className="text-sm font-bold text-slate-900">+34 680 214 050</span>
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Solicitar diagnóstico
              <Icon name="arrow" className="size-4" />
            </a>
          </div>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center rounded-lg border border-slate-200 text-slate-800 lg:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-5 py-5 shadow-xl lg:hidden">
            {[
              ["Inicio", "#inicio"],
              ["Nosotros", "#nosotros"],
              ["Servicios", "#servicios"],
              ["Por qué Solumec", "#ventajas"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu} className="flex items-center justify-between border-b border-slate-100 py-4 font-semibold text-slate-700">
                {label}
                <Icon name="chevron" className="size-4" />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-slate-950">
          <img src={heroImage} alt="Centro de mecanizado CNC trabajando una pieza metálica" className="absolute inset-0 size-full object-cover object-center opacity-55" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,27,.97)_0%,rgba(2,12,27,.82)_44%,rgba(2,12,27,.2)_100%)]" />
          <div className="absolute -bottom-36 -right-24 size-[520px] rounded-full border border-blue-400/20" />
          <div className="absolute -bottom-20 -right-5 size-[360px] rounded-full border border-blue-400/20" />
          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-24 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200 backdrop-blur-sm">
                <span className="size-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,.8)]" />
                Mantenimiento industrial especializado
              </div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Tu maquinaria, <span className="text-blue-400">siempre a punto.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Anticipamos los problemas antes de que detengan tu producción. Mantenimiento preventivo y soluciones mecánicas a medida para maquinaria industrial.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contacto" className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/50 transition hover:-translate-y-1 hover:bg-blue-500">
                  Solicita un diagnóstico
                  <Icon name="arrow" />
                </a>
                <a href="#servicios" className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/25 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10">
                  Ver nuestros servicios
                </a>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-slate-300">
                {["Asesoramiento 100% personalizado", "Atención en toda España", "Horarios adaptados"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="grid size-5 place-items-center rounded-full bg-blue-500/20 text-blue-300"><Icon name="check" className="size-3" /></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a href="#nosotros" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 lg:flex">
            Descubre más
            <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </a>
        </section>

        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-xl bg-white shadow-2xl shadow-slate-950/10 sm:grid-cols-3">
            {[
              ["01", "Diagnóstico experto", "Analizamos el estado real de tus equipos."],
              ["02", "Plan a medida", "Priorizamos según riesgo y producción."],
              ["03", "Máxima disponibilidad", "Reducimos imprevistos y paradas."],
            ].map(([number, title, text], index) => (
              <div key={number} className={`relative p-7 lg:p-9 ${index < 2 ? "border-b border-slate-100 sm:border-b-0 sm:border-r" : ""}`}>
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-100">{number}</span>
                <h2 className="relative text-lg font-extrabold">{title}</h2>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="nosotros" className="py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.02fr] lg:px-8">
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <img src={detailImage} alt="Detalle de precisión de maquinaria industrial" className="aspect-[4/3] size-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-7 -right-2 max-w-[240px] rounded-lg bg-blue-600 p-6 text-white shadow-xl sm:right-7">
                <Icon name="shield" className="mb-4 size-8 text-blue-200" />
                <strong className="block text-xl leading-tight">Prevenir es producir</strong>
                <span className="mt-2 block text-sm leading-relaxed text-blue-100">Convertimos el mantenimiento en una ventaja competitiva.</span>
              </div>
              <div className="absolute -left-4 -top-4 -z-10 size-28 bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-30" />
            </div>
            <div className="pt-8 lg:pl-10 lg:pt-0">
              <span className="section-label">Quiénes somos</span>
              <h2 className="section-title mt-5">Experiencia que protege tu producción</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                En Solumec somos especialistas en mantenimiento preventivo de máquina herramienta. Combinamos conocimiento técnico, inspección rigurosa y cercanía para que cada instalación trabaje con mayor precisión y seguridad.
              </p>
              <p className="mt-5 leading-relaxed text-slate-500">
                No aplicamos soluciones estándar. Estudiamos tu maquinaria, tus ritmos de producción y tus necesidades para crear un plan realmente útil.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Personal cualificado", "Diagnóstico preciso", "Respuesta flexible", "Servicio integral"].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold text-slate-700">
                    <span className="grid size-8 place-items-center rounded-full bg-blue-50 text-blue-600"><Icon name="check" className="size-4" /></span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="#contacto" className="mt-10 inline-flex items-center gap-3 font-extrabold text-blue-600 transition hover:gap-5">
                Conoce cómo podemos ayudarte <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-slate-950 py-24 text-white lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="section-label text-blue-400 before:bg-blue-400">Qué hacemos</span>
                <h2 className="section-title mt-5 text-blue-400">Un servicio integral para cada máquina</h2>
              </div>
              <p className="max-w-md leading-relaxed text-slate-400">
                Desde una inspección puntual hasta un plan preventivo completo. Actuamos donde tu instalación lo necesita.
              </p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-slate-800 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="group relative bg-slate-900 p-8 transition duration-300 hover:bg-blue-600 lg:p-10">
                  <span className="absolute right-7 top-7 text-sm font-bold text-slate-600 transition group-hover:text-blue-200">{service.number}</span>
                  <span className="grid size-12 place-items-center rounded-lg bg-blue-600/15 text-blue-400 transition group-hover:bg-white/15 group-hover:text-white">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  <h3 className="mt-7 text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 transition group-hover:text-blue-100">{service.text}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 opacity-0 transition group-hover:text-white group-hover:opacity-100">
                    Consultar <Icon name="arrow" className="size-4" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ventajas" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-label justify-center before:hidden">Por qué Solumec</span>
              <h2 className="section-title mt-5">Más que reparar. Te ayudamos a anticiparte.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">Nuestra forma de trabajar se basa en reducir la incertidumbre y darte el control sobre el estado de tus equipos.</p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {[
                ["shield", "Protegemos tu facturación", "Menos paradas imprevistas significa mayor continuidad, productividad y cumplimiento de plazos."],
                ["tool", "Conocimiento especializado", "Personal altamente cualificado y con una trayectoria consolidada en máquina herramienta."],
                ["spark", "Soluciones personalizadas", "Analizamos cada caso y proponemos solo las actuaciones que aportan valor real a tu instalación."],
              ].map(([icon, title, text], index) => (
                <article key={title} className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl lg:p-10">
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-full bg-blue-50 text-blue-600"><Icon name={icon as IconName} className="size-7" /></span>
                    <span className="text-5xl font-black text-slate-100">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold">{title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-500">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-blue-600">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.25fr_.75fr]">
            <div className="px-5 py-16 text-white lg:px-8 lg:py-20">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Tu producción no puede esperar</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">¿Quieres saber cómo está realmente tu maquinaria?</h2>
              <p className="mt-5 max-w-2xl text-lg text-blue-100">Cuéntanos tu caso y prepararemos una primera valoración sin compromiso.</p>
            </div>
            <div className="flex items-center px-5 pb-16 lg:justify-end lg:px-8 lg:pb-0">
              <a href="#contacto" className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-extrabold text-blue-700 shadow-xl transition hover:-translate-y-1">
                Hablar con un técnico <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <span className="section-label">Contacto</span>
              <h2 className="section-title mt-5">Hablemos de tu maquinaria</h2>
              <p className="mt-6 leading-relaxed text-slate-500">Estamos en Illescas, Toledo, y damos servicio a empresas industriales en toda España.</p>
              <div className="mt-10 space-y-6">
                <a href="tel:+34680214050" className="group flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"><Icon name="phone" /></span>
                  <span><small className="block text-xs font-bold uppercase tracking-widest text-slate-400">Teléfono</small><strong className="mt-1 block text-lg">+34 680 214 050</strong></span>
                </a>
                <a href="mailto:solumec@solumec.es" className="group flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"><Icon name="mail" /></span>
                  <span><small className="block text-xs font-bold uppercase tracking-widest text-slate-400">Email</small><strong className="mt-1 block text-lg">solumec@solumec.es</strong></span>
                </a>
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600"><Icon name="map" /></span>
                  <span><small className="block text-xs font-bold uppercase tracking-widest text-slate-400">Taller</small><strong className="mt-1 block text-lg">C/ Estaño, 17 · Nave Industrial</strong><span className="mt-1 block text-sm text-slate-500">45200 Illescas, Toledo</span></span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-xl bg-slate-50 p-6 shadow-sm sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">Nombre<input required name="name" className="field-input" placeholder="Tu nombre" /></label>
                <label className="field-label">Empresa<input name="company" className="field-input" placeholder="Nombre de empresa" /></label>
                <label className="field-label">Email<input required type="email" name="email" className="field-input" placeholder="tu@email.com" /></label>
                <label className="field-label">Teléfono<input required type="tel" name="phone" className="field-input" placeholder="+34 600 000 000" /></label>
                <label className="field-label sm:col-span-2">¿En qué podemos ayudarte?<textarea required name="message" rows={4} className="field-input resize-none" placeholder="Cuéntanos brevemente qué necesitas..." /></label>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-slate-400">Al enviar, aceptas nuestra política de privacidad.</p>
                <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                  Enviar consulta <Icon name="arrow" />
                </button>
              </div>
              {sent && <p role="status" className="mt-5 rounded-lg bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">Gracias. Hemos recibido tu consulta y contactaremos contigo lo antes posible.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">Soluciones mecánicas y mantenimiento preventivo para una industria más fiable, precisa y productiva.</p>
          </div>
          <div>
            <strong className="text-sm uppercase tracking-widest text-white">Navegación</strong>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <a href="#nosotros" className="hover:text-white">Nosotros</a>
              <a href="#servicios" className="hover:text-white">Servicios</a>
              <a href="#ventajas" className="hover:text-white">Por qué Solumec</a>
              <a href="#contacto" className="hover:text-white">Contacto</a>
            </div>
          </div>
          <div className="md:text-right">
            <strong className="text-sm uppercase tracking-widest text-white">Atención directa</strong>
            <a href="tel:+34680214050" className="mt-5 block text-xl font-bold text-white hover:text-blue-400">+34 680 214 050</a>
            <a href="mailto:solumec@solumec.es" className="mt-2 block text-sm hover:text-white">solumec@solumec.es</a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:justify-between lg:px-8">
            <span>© {new Date().getFullYear()} Solumec. Todos los derechos reservados.</span>
            <span>Soluciones para el mecanizado · Illescas, Toledo</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
