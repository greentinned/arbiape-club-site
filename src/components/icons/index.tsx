import cn from "classnames";
import { FunctionalComponent, h } from "preact";
import Icon from "../icon";
import s from "./style.css";

interface IconsProps {
    class?: string
}

export const Icons: FunctionalComponent<IconsProps> = (props) => {
    const { class: className } = props;

    return <div class={cn(s.icons, className)}>
        <a href="https://twitter.com/ArbiApeClub" target="_blank">
            <Icon type="twitter" size="l" />
        </a>
        <a href="https://discord.gg/ha4cqFgktD" target="_blank">
            <Icon type="discord" size="l" />
        </a>
    </div>
};
