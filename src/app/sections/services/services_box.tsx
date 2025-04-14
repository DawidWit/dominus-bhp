import style from "./services.module.scss";

interface ServicesBoxProps {
  title: React.ReactNode;
  text: string;
}

export function ServicesBox({ title, text }: ServicesBoxProps) {
  return (
    <div id={style.serviceBox}>
      <div className={style.serviceBoxTitle}>{title}</div>
      <div className={style.divider}></div>
      <div className={style.textWrapper}>
        <p className={style.serviceBoxText}>{text}</p>
      </div>
    </div>
  );
}
