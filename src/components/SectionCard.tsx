type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <article className="mix-surface mix-pillar-card h-full p-6">
      <h3 className="mix-card-title">{title}</h3>
      <p className="mix-copy mt-3 mb-0 text-sm sm:text-base">{children}</p>
    </article>
  );
}
