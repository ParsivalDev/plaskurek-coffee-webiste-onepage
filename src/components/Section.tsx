type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 lg:px-14">
        {title ? (
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--green-muted)]">
              {subtitle}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[color:var(--brown-900)] md:text-4xl">
              {title}
            </h2>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
