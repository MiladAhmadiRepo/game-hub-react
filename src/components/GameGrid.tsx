// @flow
import * as React from 'react';
import UseGames from '../hook/UseGames.ts';


export function GameGrid() {
    const {games, error} = UseGames();

    return (
        <>
            {error && <text>{error}</text>}
            <ul>{games.map((gameItem) => {
                return <li key={gameItem.id}>{gameItem.name}</li>
            })}</ul>
        </>
    );
};