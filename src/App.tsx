import {Navbar} from "./components/navbar.tsx";
import {GameGrid} from "./components/GameGrid.tsx";
import {GenreList} from "./components/GenreList.tsx";

function  App() {
    return (
        <div className=" bg-primary dark:bg-primary-dark    grid grid-cols-6 md:grid-cols-12  ">
            {/*First Row with 1 Column (Hidden on Tablet and Smaller Screens) */}
            <div className=" md:block col-span-6 md:col-span-12  " id="nav"><Navbar></Navbar></div>
            {/* Second Row with 2 Columns*/}
            <div className=" ml-3 col-span-1 md:col-span-2 lg:block  dark:text-primary   text-primary-dark  hidden  " id="aside">
                <GenreList ></GenreList>
            </div>
            <div className="col-span-5 md:col-span-10  dark:text-primary   text-primary-dark  " id="mian">
                <GameGrid></GameGrid></div>
        </div>
    )
}

export default App
