type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <span className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-teal-300">{eyebrow}</span>
      <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{description}</p>}
    </div>
  );
}

