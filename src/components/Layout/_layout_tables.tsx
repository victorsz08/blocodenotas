import { Link, Outlet } from "react-router-dom";
import style from "./header.module.css";





export default function LayoutTables() {
    return (
        <section className={style.layout_table}>
            <header>
                <Link to={"internet"}>INTERNET</Link>
                <Link to={"claro-tv"}>CLARO TV</Link>
            </header>
            <Outlet/>
        </section>
    )
}