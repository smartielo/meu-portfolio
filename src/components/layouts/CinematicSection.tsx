interface CinematicSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function CinematicSection({ id, className = "", children }: CinematicSectionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
