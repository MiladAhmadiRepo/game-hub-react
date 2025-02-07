import {Game} from "../hook/UseGames.ts";
import {PlatformIconList} from "./PlatformIconList.tsx";

type Props = {
    game: Game;
};

export function GameCard({game}: Props) {
    return (
        <div
            className="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg " src={game.background_image} alt=""/>
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h5>
            </div>
            <div className="p-5">
                <PlatformIconList platforms={game.parent_platforms.map((p)=>p.platform)}>
                </PlatformIconList>



            </div>
        </div>
    );
};