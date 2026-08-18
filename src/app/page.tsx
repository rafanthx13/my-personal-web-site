import Image from "next/image";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { education, experience, projects, skillGroups, socialLinks } from "@/data/portfolio";
import { asset } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  const sharedProps = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "size-5 shrink-0 fill-current",
  };

  switch (label) {
    case "GitHub":
      return (
        <svg {...sharedProps}>
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.17-3.35-1.17-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.33 1.08 2.9.82.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.5c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.67-4.55 4.92.36.31.68.9.68 1.82v2.7c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...sharedProps}>
          <path d="M5.37 3.2a2.17 2.17 0 1 1 0 4.34 2.17 2.17 0 0 1 0-4.34ZM3.5 8.97h3.74V20.5H3.5V8.97ZM9.58 8.97h3.58v1.58h.05c.5-.94 1.72-1.94 3.54-1.94 3.79 0 4.49 2.49 4.49 5.73v6.16H17.5v-5.46c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.89v5.55H9.84V8.97h-.26Z" />
        </svg>
      );
    case "Kaggle":
      return (
        <svg {...sharedProps}>
          <path d="M7 3h3.25v7.16L16.04 3H20l-6.7 8.35L20.46 21h-4.1l-6.11-8.48V21H7V3Z" />
        </svg>
      );
    default:
      return <span aria-hidden="true" className="font-mono text-xl font-bold leading-none">@</span>;
  }
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={filled ? "size-3 fill-teal-300 text-teal-300" : "size-3 fill-slate-700 text-slate-700"}>
      <path d="m10 1.6 2.6 5.28 5.82.85-4.21 4.1.99 5.79L10 14.88l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.6Z" />
    </svg>
  );
}

function TimelineColumn({
  id,
  label,
  items,
}: {
  id: string;
  label: string;
  items: typeof education;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <div className="mb-8 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/10" />
        <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-300">{label}</h3>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <div className="relative space-y-5 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-white/10">
        {items.map((item) => (
          <article key={`${item.period}-${item.title}`} className="relative rounded-2xl border border-white/8 bg-white/[0.035] p-6 pl-16 transition hover:border-teal-300/30 hover:bg-white/[0.055]">
            <div className="absolute left-3 top-6 grid size-10 place-items-center rounded-full border border-white/10 bg-slate-900">
              <Image src={item.logo} alt="" width={26} height={26} className="max-h-6 w-auto object-contain" />
            </div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-300">{item.period}</p>
            <h4 className="mt-3 text-lg font-bold text-white">{item.title}</h4>
            <p className="mt-1 text-sm text-slate-300">{item.organization}</p>
            <p className="mt-1 text-xs text-slate-500">{item.location}</p>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
              {item.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-300/70" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section id="inicio" className="relative flex min-h-screen scroll-mt-20 items-center border-b border-white/8 px-5 pb-20 pt-32 sm:px-8">
          <div className="hero-grid pointer-events-none absolute inset-0 opacity-35" />
          <div className="pointer-events-none absolute left-[58%] top-36 size-[34rem] rounded-full bg-teal-400/10 blur-[120px]" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-teal-300/20 bg-teal-300/5 px-4 py-2">
                <span className="size-2 rounded-full bg-teal-300 shadow-[0_0_16px_#5eead4]" />
                <span className="font-mono text-xs uppercase tracking-widest text-teal-200">Tecnologia, software e dados</span>
              </div>
              <p className="mb-4 text-lg font-medium text-slate-300">Olá, eu sou Rafael Assis.</p>
              <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.065em] text-white sm:text-7xl xl:text-[5.6rem]">
                Construo soluções entre <span className="text-teal-300">sistemas</span> e dados.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Cientista da Computação e analista de sistemas com experiência em desenvolvimento full-stack, integrações e projetos orientados a dados.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200" href="#projetos">
                  Conheça meu trabalho <ArrowIcon />
                </a>
                <a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-white/35" href="#contato">
                  Entre em contato
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mr-0">
              <div className="absolute -inset-4 rotate-3 rounded-[2rem] border border-teal-300/15" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-black/30">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-slate-800">
                  <Image src={asset("/images/rafael-assis.png")} alt="Rafael Assis" fill priority sizes="(max-width: 1024px) 90vw, 420px" className="object-cover object-center" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Perfil profissional</p>
                    <p className="mt-2 text-xl font-bold text-white">Full-stack · Dados · Sistemas</p>
                    <p className="mt-1 text-sm text-slate-300">Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 border-b border-white/8 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <SectionHeading eyebrow="Sobre mim" title="Curiosidade técnica com visão de produto." />
            <div>
              <div className="space-y-6 text-lg leading-8 text-slate-300">
                <p>
                  Sou bacharel em Ciência da Computação pela UFU. Minha trajetória começou no desenvolvimento de software e ganhou uma forte conexão com dados durante a iniciação científica e o trabalho de conclusão de curso.
                </p>
                <p>
                  Gosto de investigar problemas, entender o contexto e construir soluções úteis — da interface e das APIs até bancos de dados, análises e pipelines.
                </p>
                <p>
                  Hoje, reúno experiência em sistemas web e interesse contínuo por engenharia e ciência de dados para atuar em projetos que exigem pensamento analítico e execução técnica.
                </p>
              </div>
              <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-3">
                {[
                  ["Formação", "Ciência da Computação"],
                  ["Experiência", "Sistemas full-stack"],
                  ["Interesse", "Produtos orientados a dados"],
                ].map(([term, value]) => (
                  <div key={term} className="bg-slate-950 p-5">
                    <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-teal-300">{term}</dt>
                    <dd className="mt-2 text-sm font-semibold leading-6 text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="competencias" className="scroll-mt-20 border-b border-white/8 bg-slate-900/35 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Competências"
              title="Conhecimento que atravessa toda a solução."
              description="Tecnologias e práticas que uso no dia a dia, organizadas pelas áreas em que atuo. As estrelas indicam meu nível de domínio em cada uma."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <article key={group.title} className="group flex min-h-[26rem] flex-col rounded-2xl border border-white/8 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-teal-300/35">
                  <span className="font-mono text-xs font-bold text-teal-300">{group.number}</span>
                  <h3 className="mt-12 text-2xl font-bold tracking-tight text-white">{group.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{group.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                    {[...group.skills].sort((first, second) => Number(Boolean(second.highlighted)) - Number(Boolean(first.highlighted))).map((skill) => (
                      <li key={skill.name} className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${skill.highlighted ? "border-white bg-white/5 font-semibold text-white" : "border-white/10 text-slate-300"}`} aria-label={`${skill.name}: ${skill.level} de 5 estrelas`}>
                        <span>{skill.name}</span>
                        <span className="flex gap-0.5" title={`${skill.level} de 5 estrelas`}>
                          {Array.from({ length: 5 }, (_, index) => <StarIcon key={index} filled={index < skill.level} />)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trajetoria" className="scroll-mt-20 border-b border-white/8 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Trajetória"
              title="Formação e experiência contam a mesma história."
              description="Do primeiro contato com programação à construção de sistemas e projetos de dados."
              align="center"
            />
            <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-8">
              <TimelineColumn id="experiencia" label="Experiência profissional" items={experience} />
              <TimelineColumn id="educacao" label="Formação acadêmica" items={education} />
            </div>
          </div>
        </section>

        <section id="projetos" className="scroll-mt-20 border-b border-white/8 bg-slate-900/35 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Projetos selecionados"
                title="Da exploração à entrega."
                description="Alguns projetos que desenvolvi para praticar, testar ideias e resolver problemas reais."
              />
              <a className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-teal-300 hover:text-teal-200" href="https://github.com/rafanthx13" target="_blank" rel="noreferrer">
                Ver GitHub <ArrowIcon />
              </a>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-2xl border border-white/8 bg-slate-950"
                >
                  <a
                    aria-label={`Ver detalhes do projeto ${project.title}`}
                    className="group relative block aspect-[16/10] overflow-hidden bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal-300"
                    href={`/projetos/${project.slug}/`}
                  >
                    <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur">
                      {project.category}
                    </span>
                    <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-teal-300 text-slate-950 transition group-hover:rotate-[-8deg]">
                      <ArrowIcon />
                    </span>
                  </a>
                  <div className="p-6">
                    <p className="font-mono text-[0.65rem] font-bold tracking-wider text-slate-500">PROJETO / 0{index + 1}</p>
                    <h3 className="mt-3 text-xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 min-h-18 text-sm leading-6 text-slate-400">{project.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="text-xs text-teal-200/80">#{tag.replaceAll(" ", "-")}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-teal-300/15 bg-teal-300 px-6 py-14 text-slate-950 sm:px-12 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full border-[60px] border-slate-950/5" />
            <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em]">Contato</p>
                <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black tracking-[-0.05em] sm:text-6xl">Vamos conversar sobre tecnologia, dados ou uma boa ideia?</h2>
                <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800" href="mailto:rafaassis15@gmail.com">
                  Enviar um e-mail <ArrowIcon />
                </a>
              </div>
              <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-950/15 sm:grid-cols-2 lg:grid-cols-1">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className="group flex items-center justify-between gap-4 bg-teal-300 px-4 py-3 transition hover:bg-teal-200">
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-950 text-teal-300 transition group-hover:scale-105">
                        <SocialIcon label={link.label} />
                      </span>
                      <span>
                      <span className="block text-xs font-bold uppercase tracking-wider">{link.label}</span>
                      <span className="mt-1 block text-sm text-slate-700">{link.handle}</span>
                      </span>
                    </span>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rafael Morais de Assis</p>
          <p>Construído com Next.js e Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
