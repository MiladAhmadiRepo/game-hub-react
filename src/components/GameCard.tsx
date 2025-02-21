import {Game} from "../hook/UseGames.ts";
import {PlatformIconList} from "./PlatformIconList.tsx";
import {CriticScore} from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

type Props = {
    game: Game;
};

export function GameCard({game}: Props) {
    return (
        <div>
            <img className="rounded-t-lg " src={getCroppedImageUrl(game.background_image)} alt=""/>
            <div className="p-5">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h5>
            </div>
            <div className="p-5 flex flex-row justify-between items-center">
                <PlatformIconList platforms={game.parent_platforms.map((p)=>p.platform)}>
                </PlatformIconList>
                <CriticScore score={game.metacritic}></CriticScore>
            </div>

        </div>
    );
};