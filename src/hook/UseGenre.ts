import useData from "./UseData.ts";
import {Game} from "./UseGames.ts";

export interface Genre {
    id :number
    name : string
}


const UseGenres = () => useData<Game>('/genres');
export default UseGenres