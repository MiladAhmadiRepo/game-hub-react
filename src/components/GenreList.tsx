// @flow
import useGenre from "../hook/UseGenre.ts";

export const GenreList = () => {
    const {genres}=useGenre();
    return (
        <ul>
            {genres.map(item=> <li key={item.id}>{item.name} </li>)}
        </ul>
    );
};