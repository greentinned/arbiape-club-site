import { FunctionalComponent as FC, h } from "preact";
import Button from "../button";

interface MintButtonProps {
    address?: string;
    price?: number;
    disabled?: boolean;
    onMint?(): void;
    onConnect?(): void;
    class?: string;
}

const MintButton: FC<MintButtonProps> = (props) => {
    const {
        address,
        price,
        disabled,
        onMint,
        onConnect,
        class: className,
    } = props;
    return (
        <Button
            class={className}
            title={
                address
                    ? `Mint (${price ? price.toFixed(2) : "—"} eth)`
                    : "Connect"
            }
            disabled={disabled}
            onClick={
                !disabled ? (address ? onMint : onConnect) : undefined
            }
        />
    );
};

export default MintButton;
