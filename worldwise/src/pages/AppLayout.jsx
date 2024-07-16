import SideBar from "../components/SiderBar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout() {
    return(
        <>
        <div className={styles.app}>
            <SideBar/>
            <Map />
            <User />
        </div>
        </>
    )
}
export default AppLayout;