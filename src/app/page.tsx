import Image from "next/image";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { education, experience, projects, skillGroups, socialLinks } from "@/data/portfolio";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
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
                  <Image src="/images/rafael-assis.png" alt="Rafael Assis" fill priority sizes="(max-width: 1024px) 90vw, 420px" className="object-cover object-center" />
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
              description="As habilidades do site anterior foram reorganizadas por domínio para mostrar não apenas ferramentas, mas onde cada conhecimento gera valor."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <article key={group.title} className="group flex min-h-[26rem] flex-col rounded-2xl border border-white/8 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-teal-300/35">
                  <span className="font-mono text-xs font-bold text-teal-300">{group.number}</span>
                  <h3 className="mt-12 text-2xl font-bold tracking-tight text-white">{group.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{group.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                    {group.skills.map((skill) => (
                      <li key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300">
                        {skill}
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
                description="Uma seleção do acervo anterior, agora apresentada em uma estrutura de dados reutilizável e pronta para receber novos estudos de caso."
              />
              <a className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-teal-300 hover:text-teal-200" href="https://github.com/rafanthx13" target="_blank" rel="noreferrer">
                Ver GitHub <ArrowIcon />
              </a>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <a
                  key={project.title}
                  className="group overflow-hidden rounded-2xl border border-white/8 bg-slate-950 transition hover:-translate-y-1 hover:border-teal-300/35"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                    <Image src={project.image} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-white backdrop-blur">
                      {project.category}
                    </span>
                    <span className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full bg-teal-300 text-slate-950 transition group-hover:rotate-[-8deg]">
                      <ArrowIcon />
                    </span>
                  </div>
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
                </a>
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
                  <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className="group flex items-center justify-between bg-teal-300 px-4 py-3 transition hover:bg-teal-200">
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider">{link.label}</span>
                      <span className="mt-1 block text-sm text-slate-700">{link.handle}</span>
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

