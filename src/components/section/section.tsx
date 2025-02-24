import style from "./section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  backgroundColor: string;
}

export function Section({ children, id, backgroundColor }: SectionProps) {
  return (
    <section
      id={id}
      className={style.section}
      style={{ background: backgroundColor }}
    >
      {children}
    </section>
  );
}
