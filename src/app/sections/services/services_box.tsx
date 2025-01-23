import style from "./services.module.scss";

interface ServicesBoxProps {
    title: React.ReactNode;
    text: String
  }

export function ServicesBox({title, text}: ServicesBoxProps) {
    return <div id={style.serviceBox}>
        {title}
        <div style={{width:"100%",height:"1px",background:"white", margin: "10px 0" }}></div>
        <p style={{color:"white", textAlign:"center"}}>{text}</p>
    </div>
}