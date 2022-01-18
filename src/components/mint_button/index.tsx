import { FunctionalComponent as FC, h } from "preact";
import Button from "../button";

interface MintButtonProps {
    address?: string;
    price?: number;
    onMint?(): void;
    onConnect?(): void;
    class?: string;
}

const MintButton: FC<MintButtonProps> = (props) => {
    const {
        address,
        price,
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
            onClick={address ? onMint : onConnect}
        />
    );
};

export default MintButton;
