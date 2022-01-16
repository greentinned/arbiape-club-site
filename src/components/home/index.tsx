import { FunctionalComponent, h, Fragment, VNode } from "preact";
import cn from "classnames";
import { Icons } from "../icons";
import WalletButton from "../wallet_button";
import RefButton from "../ref_button";
import "../../style/utils.css";
import basename from "../../utils/baseroute";
import s from "./style.css";
import Button from "../button";
import IconButton from "../icon_button";
import Icon from "../icon";
import { useState } from "preact/hooks";

const hiddenMd = "hidden-md hidden-lg hidden-xl";
const visibleMd = "hidden-xs hidden-sm";

interface MintProps {
    chainId: any;
    error: any;
    provider: any;
    account: any;
    connect: any;
    refId: any;
    class?: string;
}

const Mint: FunctionalComponent<MintProps> = (props) => {
    // TODO: add logic
    const {
        chainId,
        error,
        provider,
        account,
        connect,
        refId,
        class: className,
    } = props;
    const [amount, setAmount] = useState(1);
    return (
        <div class={cn(s.mint, className)}>
            <form class={cn(s.form)}>
                <h2 class={s.title}>switch to arbitrum</h2>
                <div class={s.counter}>
                    <IconButton
                        icon={<Icon type="minus" />}
                        onClick={() => setAmount(amount - 1)}
                        disabled={amount < 2}
                    />
                    <input
                        class={s.input}
                        type="text"
                        placeholder="amount"
                        value={amount}
                        min={1}
                        onKeyPress={(e) =>
                            !/[0-9]/.test(e.key) && e.preventDefault()
                        }
                        onInput={(e: any) => {
                            const val = parseInt(e.target.value);
                            val >= 1 && setAmount(val);
                        }}
                    />
                    <IconButton
                        icon={<Icon type="plus" />}
                        onClick={() => setAmount(amount + 1)}
                    />
                </div>
                <Button title="Connect" />
            </form>
        </div>
    );
};

const Description: FunctionalComponent<{ class?: string }> = ({
    class: className,
}) => {
    return (
        <div class={s.description}>
            <h3 class={hiddenMd}>Meet the Apes</h3>
            <p class={className}>
                AAC is a collection of 10,000 ArbiApe NFTs—unique
                digital collectibles living on the L2 Arbitrum
                blockchain. <br />
                ArbiApes are a fairly launched fork of Ethereum's
                BAYC. <br />
                They are ERC-721 tokens fully integrated and supported
                on the Arbitrum network, and will be listed on all
                major NFT marketplaces.
            </p>
        </div>
    );
};

const Features: FunctionalComponent<{
    child: VNode;
}> = (props) => {
    const { child } = props;
    return (
        <div class={s.features}>
            <div class={cn(s.featureItem, "col-sm-12", "col-md-6")}>
                <h3>Fair distribution</h3>
                <p>
                    There are no bonding curves here. Buying an
                    ArbiApe costs 0.05 ETH. There are no price tiers.
                </p>
            </div>
            <div class={cn(s.featureItem, "col-sm-12", "col-md-6")}>
                <h3>Referrals</h3>
                <p>
                    You know the drill: share your link and get 15% on
                    all minted ArbiApes: <br />
                </p>
                {child}
            </div>
        </div>
    );
};

interface HomeProps {
    account: any;
    chainId: string;
    error: any;
    provider: any;
    connect: any;
    refId: any;
}

const Home: FunctionalComponent<HomeProps> = (props) => {
    // TODO: add logic
    const { account, chainId, error, provider, connect, refId } =
        props;

    return (
        <div class="container">
            <div class="row">
                <div class={cn(s.left, "col-xs-12", "col-md-7")}>
                    <div class="about">
                        <div class={cn(s.connect, hiddenMd)}>
                            <Icons />
                            <WalletButton
                                address={account}
                                onConnect={connect}
                            />
                        </div>
                        <h1>
                            WELCOME TO THE <br />
                            ARBIAPE L2 CLUB
                        </h1>
                        <img
                            src={`${basename}/assets/images/overview.png`}
                            class={cn(s.img, hiddenMd)}
                        />
                        <Mint
                            account={account}
                            chainId={chainId}
                            error={error}
                            provider={provider}
                            connect={connect}
                            refId={refId}
                            class={hiddenMd}
                        />
                        <Description />
                        <Features
                            child={
                                <RefButton
                                    address={account}
                                    onConnect={connect}
                                />
                            }
                        />
                    </div>
                </div>
                <div class={cn(s.right, "col-xs-12", "col-md-5")}>
                    <div class={cn(s.connect, visibleMd)}>
                        <Icons />
                        <WalletButton
                            address={account}
                            onConnect={connect}
                        />
                    </div>
                    <img
                        src={`${basename}/assets/images/overview.png`}
                        class={cn(s.img, visibleMd)}
                    />
                </div>
            </div>
            <Mint
                account={account}
                chainId={chainId}
                error={error}
                provider={provider}
                connect={connect}
                refId={refId}
                class={visibleMd}
            />
        </div>
    );
};

export default Home;
