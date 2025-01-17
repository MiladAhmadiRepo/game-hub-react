import {Navbar} from "./components/navbar.tsx";
import {GameGrid} from "./components/GameGrid.tsx";


function App() {

    document.documentElement.classList.add('dark');
    return (
        //change to dark    bg-primary dark:bg-primary-dark
        <div className=" bg-primary dark:bg-primary-dark    grid grid-cols-1 md:grid-cols-2  ">
            {/*First Row with 1 Column (Hidden on Tablet and Smaller Screens) */}
            <div className=" md:block md:col-span-2 hidden " id="nav"><Navbar></Navbar></div>
            {/* Second Row with 2 Columns*/}
            <div className="  dark:text-primary   text-primary-dark " id="aside">Aside</div>
            <div className=" dark:text-primary   text-primary-dark " id="mian"><GameGrid></GameGrid></div>

        </div>

    )
}

export default App
