import { FunctionalComponent as FC, h } from "preact";
import { useState } from "preact/hooks";
import copyToCb from "copy-to-clipboard";
import { addressToReferralCode } from "../../utils";
import Button from "../button";

interface RefButtonProps {
    address?: string;
    onConnect?(): void;
}

const RefButton: FC<RefButtonProps> = (props) => {
    const { address, onConnect } = props;
    const [isCopied, setCopied] = useState(false);
    const refCode = addressToReferralCode(address);
    const link = `${window.location.href}/?ref=${refCode}`;

    const copy = () => {
        copyToCb(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <Button
            title={
                address
                    ? isCopied
                        ? "Copied"
                        : "Copy link"
                    : "Connect"
            }
            size="s"
            onClick={address ? copy : onConnect}
        />
    );
};

export default RefButton;
