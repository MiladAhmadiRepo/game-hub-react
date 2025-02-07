// @flow
import UseGames from '../hook/UseGames.ts';
import {GameCard} from "./GameCard.tsx";


export function GameGrid() {
    const {games, error} = UseGames();
    return (
        <>
            {error && <text>{error}</text>}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            sm:gap-1 md:gap-1 lg:gap-1 xl:gap-1">
                {games.map((gameItem) => {
                    return <GameCard game={gameItem} ></GameCard>
                })}
            </div>
        </>
    );
};