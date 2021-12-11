import "./rtip.css"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import Sidebar from "../../components/sidebar/Sidebar"
import RtipComp from "../../components/rtipcomp/RtipComp"

export default function Rtip() {
    return (
        <>
        <Sidebar/>
        <div className="home">
            <RtipComp/>
            <div className="homeWidgets">
                <WidgetLg/>
            </div>
        </div>
        </>
    )
}
