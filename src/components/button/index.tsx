import { FunctionalComponent as FC, h, VNode } from "preact";
import cn from "classnames";
import s from "./style.css";

interface ButtonProps {
    title?: string;
    size?: "s" | "m";
    disabled?: boolean;
    children?: VNode;
    class?: string;
    onClick?(): void;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        title,
        size = "m",
        disabled,
        children,
        onClick,
        class: className,
    } = props;

    return (
        <button
            type="button"
            class={cn(
                s.button,
                s[size],
                { [s.disabled]: disabled },
                className
            )}
            onClick={disabled ? undefined : onClick}
        >
            {children || <div class={s.title}>{title}</div>}
        </button>
    );
};

export default Button;
