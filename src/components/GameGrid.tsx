// @flow
import UseGames from '../hook/UseGames.ts';
import {GameCard} from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {GameCardContainer} from "./GameCardContainer.tsx";


export function GameGrid() {
    const {data, error, isLoading} = UseGames();
    const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10];
    return (
        <>
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-1 md:gap-1 lg:gap-1 xl:gap-1">
                {
                    isLoading && skeletons.map((skeleton) => {
                        return <GameCardContainer> <GameCardSkeleton key={skeleton}></GameCardSkeleton></GameCardContainer>;
                    })
                }
            </div>
            { error && <text>{error}</text>}
            <div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-1 md:gap-1 lg:gap-1 xl:gap-1">
                {data.map((gameItem) => {
                    return <GameCardContainer><GameCard game={gameItem}></GameCard></GameCardContainer>
                })}
            </div>
        </>
    );
};
