import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function SideBar() {
    return(
        <>
            <div className={styles.sidebar}>
                <Logo />
                <AppNav />

                {/* Muốn trang con hiển thị ở đâu thì thêm Outlet ở đó */}
                <Outlet />

                <footer className={styles.footer}>
                    <p className={styles.copyRight}>
                        &copy; Copyright {new Date().getFullYear()} by LamFullStack Inc.
                    </p>
                </footer>

            </div>
        </>
    )
}
export default SideBar;