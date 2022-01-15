import { FunctionalComponent as FC, h } from "preact";
import cn from "classnames";
import s from "./style.css";

interface ButtonProps {
    title: string;
    size?: 's' | 'm';
    class?: string;
    onClick?(): void;
}

const Button: FC<ButtonProps> = (props) => {
    const { title, size = 'm', onClick, class: className } = props;

    return (
        <button
            type="button"
            class={cn(s.button, s[size], className)}
            onClick={onClick}
        >
            <div class={s.title}>
                {title}
            </div>
        </button>
    );
};

export default Button;
