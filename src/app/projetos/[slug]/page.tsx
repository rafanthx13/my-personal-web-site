import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = findProject((await params).slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = findProject((await params).slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header homeHref="/" navigationPrefix="/" />
      <main className="overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pb-32">
        <article className="mx-auto max-w-5xl">
          <Link href="/#projetos" className="inline-flex items-center gap-2 text-sm font-bold text-teal-300 transition hover:text-teal-200">
            <span aria-hidden="true">←</span> Voltar para projetos
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-teal-300">{project.category}</p>
              <h1 className="mt-5 text-balance text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">{project.title}</h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200">
                {project.externalLinkLabel} <ArrowIcon />
              </a>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <Image src={project.image} alt={project.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            </div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-white/8 bg-slate-900/35 p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-300">O desafio</p>
              <p className="mt-5 leading-7 text-slate-300">{project.challenge}</p>
            </section>
            <section className="rounded-2xl border border-white/8 bg-slate-900/35 p-7">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Como foi feito</p>
              <p className="mt-5 leading-7 text-slate-300">{project.solution}</p>
            </section>
          </div>

          <section className="mt-5 rounded-2xl border border-white/8 bg-slate-900/35 p-7 sm:p-9">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Tecnologias</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => <li key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-200">{tag}</li>)}
            </ul>
          </section>

          <section className="mt-5 rounded-2xl border border-white/8 bg-slate-900/35 p-7 sm:p-9">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Resultados e aprendizados</p>
            <ul className="mt-6 space-y-4">
              {project.results.map((result) => (
                <li key={result} className="flex gap-3 leading-7 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-300" />{result}</li>
              ))}
            </ul>
          </section>

          {project.gallery && project.gallery.length > 0 && (
            <section className="mt-16">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Galeria</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {project.gallery.map((image) => (
                  <div key={image.src} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8 bg-slate-900">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
