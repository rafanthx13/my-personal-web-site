import { navigation } from "@/data/portfolio";
import { asset } from "@/lib/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a className="group flex items-center gap-3" href="#inicio" aria-label="Ir para o início">
          <span className="grid size-9 place-items-center rounded-full bg-teal-300 text-sm font-black text-slate-950 transition-transform group-hover:rotate-6">
            RA
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">Rafael Assis</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} className="text-sm text-slate-300 transition-colors hover:text-teal-300" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-teal-300 hover:text-teal-300 sm:inline-flex"
            href={asset("/documents/curriculo-rafael-assis.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            Currículo
          </a>
          <details className="group lg:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-white/15 text-white [&::-webkit-details-marker]:hidden">
              <span className="text-xl leading-none group-open:hidden">≡</span>
              <span className="hidden text-xl leading-none group-open:block">×</span>
              <span className="sr-only">Menu de navegação</span>
            </summary>
            <nav className="fixed inset-x-0 top-18 border-y border-white/8 bg-slate-950 px-5 py-5 shadow-2xl" aria-label="Navegação móvel">
              <div className="mx-auto flex max-w-7xl flex-col">
                {navigation.map((item) => (
                  <a key={item.href} className="border-b border-white/6 py-3 text-base text-slate-200 last:border-0" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
