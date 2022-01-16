import { FunctionalComponent as FC, h, VNode } from "preact";
import cn from "classnames";
import Button from "../button";
import { IconProps } from "../icon";
import s from "./style.css";

interface IconButtonProps {
    icon: VNode<IconProps> | VNode<IconProps>[];
    disabled?: boolean;
    onClick?(): void;
}

const IconButton: FC<IconButtonProps> = (props) => {
    const { icon, disabled, onClick } = props;
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            class={s.iconButton}
        >
            {icon as VNode<any>}
        </Button>
    );
};

export default IconButton;
