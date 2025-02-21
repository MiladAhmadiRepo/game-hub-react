// @flow
import {ReactNode} from "react";

type Props = {
    children:ReactNode
};
export const GameCardContainer = ({children}: Props) => {
    return (
        <div className=" max-w-sm m-5 rounded-sm shadow-sm dark:bg-gray-800
          bg-gray-100 animate-pulsedark:border-gray-700">
            {children}
        </div>
    );
};