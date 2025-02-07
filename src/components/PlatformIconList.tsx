import {Platform} from "../hook/UseGames.ts";
import {FaApple, FaWindows, FaAndroid, FaLinux, FaPlaystation, FaXbox} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";


type Props = {
    platforms: Platform[];
};

export function PlatformIconList({platforms}: Props) {
    const styleIcon  = { color: "gray"}

    const iconMap: { [key: string]: object } = {
        "playstation": <FaPlaystation style={styleIcon}/>,
        "xbox": <FaXbox style={styleIcon}/>,
        "pc": <FaWindows style={styleIcon}/>,
        "ios": <MdPhoneIphone style={styleIcon}/>,
        "android": <FaAndroid style={styleIcon}/>,
        "linux": <FaLinux style={styleIcon}/>,
        "nintendo": <SiNintendo style={styleIcon}/>,
        "web": <BsGlobe style={styleIcon}/>,
        "macOS": <FaApple style={styleIcon}/>
    };
    return (
        <div className="flex flex-row space-x-1   gray-900 ">
            {
                platforms.map((platform) => {
                    return iconMap[platform.slug] as any
                })
            }
        </div>
    )
};