import useData from "./UseData.ts";
export interface Platform {
    id :number
    name : string
    slug : string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform : Platform}[];
    metacritic: number;
}


const UseGames = () =>  useData<Game>('/games');
export default UseGames