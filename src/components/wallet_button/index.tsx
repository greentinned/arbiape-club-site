import { FunctionalComponent as FC, h } from "preact";
import Button from "../button";

const fmtAddress = (addr: string) =>
    `${addr.slice(0, 5)}...${addr.slice(-4)}`;

interface WalletButtonProps {
    address?: string;
    onConnect?(): void;
    class?: string;
}

const WalletButton: FC<WalletButtonProps> = (props) => {
    const { address, onConnect, class: className } = props;
    return (
        <Button
            class={className}
            title={address ? fmtAddress(address) : "Connect"}
            onClick={address ? undefined : onConnect}
        />
    );
};

export default WalletButton;
