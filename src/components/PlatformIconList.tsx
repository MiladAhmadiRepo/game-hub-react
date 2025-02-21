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
        "playstation": <FaPlaystation style={styleIcon} size={20}/>,
        "xbox": <FaXbox style={styleIcon} size={20}/>,
        "pc": <FaWindows style={styleIcon} size={20}/>,
        "ios": <MdPhoneIphone style={styleIcon} size={20}/>,
        "android": <FaAndroid style={styleIcon} size={20}/>,
        "linux": <FaLinux style={styleIcon} size={20}/>,
        "nintendo": <SiNintendo style={styleIcon} size={20}/>,
        "web": <BsGlobe style={styleIcon} size={20}/>,
        "macOS": <FaApple style={styleIcon} size={20}/>
    };
    return (
        <div className="flex flex-row space-x-2   ">
            {
                platforms.map((platform) => {
                    return iconMap[platform.slug] as any
                })
            }
        </div>
    )
};