import { FunctionalComponent as FC, h } from "preact";
import cn from "classnames";
import s from "./style.css";

export interface IconProps {
    type: "minus" | "plus" | "twitter" | "discord";
    size?: "m" | "l";
}

const Icon: FC<IconProps> = (props) => {
    const { type, size = "m" } = props;

    return <div className={cn(s.icon, s[type], s[size])} />;
};

export default Icon;
