import style from "./section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  backgroundColor: String
}

export function Section({ children, backgroundColor }: SectionProps) {
  return <section className={style.section} style={{background: `${backgroundColor}`}}>{children}</section>;
}
