import "./rtipcomp.css";
import RtipImage from '../../images/movenet_demo.gif';

export default function RtipComp() {
  return (
    <div className="widgetLg">
      <img src={RtipImage} className="rtipImgSrc" alt="rtipImgSrcAlt"></img>
    </div>
  );
}
