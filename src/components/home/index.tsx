import { FunctionalComponent, h, VNode, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import cn from "classnames";
import Web3 from "web3";
import BigNumber from "bignumber.js";
import basename from "../../utils/route";
import "../../style/utils.css";
import s from "./style.css";
import { Icons } from "../icons";
import Icon from "../icon";
import IconButton from "../icon_button";
import WalletButton from "../wallet_button";
import RefButton from "../ref_button";
import MintButton from "../mint_button";
import {
    NFT_CONTRACT_ABI,
    MINT_CONTRACT_ABI,
} from "../../data/chain_info";

const hiddenMd = "hidden-md hidden-lg hidden-xl";
const visibleMd = "hidden-xs hidden-sm";

// dev
// const rpc = "https://rinkeby.arbitrum.io/rpc";
// const mintAddress = "0x6c933164bc8F752B885Fd8B105Ea1F34f83a88c8";
// const nftAddress = "0xC1C87A24A77EafE1fa2E8009DCAF8cFfEB6C9cC7";
// const defaultRef = "0x6c933164bc8F752B885Fd8B105Ea1F34f83a88c8";
// const mainChainIds = [421611, "0x66eeb"];

// prod
const rpc = "https://arb1.arbitrum.io/rpc";
const mintAddress = "0xfaA928BDAdD0Ee68827fBA6e321efDA650923da0";
const nftAddress = "0xaf730246e5d2c32985f47425aeecc46f5b0a94a5";
const defaultRef = "0xcb7114e364bEA59dDeEfdFA4B869787D4318A3aF";
const mainChainIds = [42161, "0xa4b1"];

function addMainnetNetwork(provider: any) {
    provider.request({
        method: "wallet_addEthereumChain",
        params: [
            {
                chainId: "0xa4b1",
                chainName: "Arbitrum One",
                nativeCurrency: {
                    name: "Ethereum",
                    symbol: "AETH",
                    decimals: 18,
                },
                rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                blockExplorerUrls: ["https://arbiscan.io"],
            },
        ],
    });
}

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
    const {
        chainId,
        error,
        provider,
        account,
        connect,
        refId,
        class: className,
    } = props;

    const [price, setPrice] = useState("");
    const [counter, setCounter] = useState(0);
    const [mineIds, setMine] = useState([]);
    const [amount, setAmount] = useState(1);

    const web3 = new Web3(provider || rpc);
    const Nft = new web3.eth.Contract(
        NFT_CONTRACT_ABI as any,
        nftAddress
    );
    const Mint = new web3.eth.Contract(
        MINT_CONTRACT_ABI as any,
        mintAddress
    );
    const refAccount = refId
        ? referralCodeToAccount(refId)
        : defaultRef;
    const correctChainId = chainId && mainChainIds.includes(chainId);

    async function retrievePublicData() {
        const pr = await Mint.methods.price().call();
        const maxSupply = await Nft.methods.maxSupply().call();
        const totalSupply = await Nft.methods.totalSupply().call();

        setCounter(maxSupply - totalSupply);
        setPrice(web3.utils.fromWei(pr));

        if (account) {
            const ids = await Nft.methods
                .getOwnerNFTs(account)
                .call();
            const idsToJson = ids.map((id: any) => ({ id }));

            setMine(idsToJson);
        }
    }

    async function mint() {
        // e.preventDefault();

        const value = new BigNumber(
            web3.utils.toWei(price)
        ).multipliedBy(Number(amount));

        await Mint.methods.mint(refAccount).send({
            from: account,
            value,
            gas: 1300000 + 2000000 * amount,
        });
    }

    useEffect(() => {
        console.log("SET INTERVAL");
        const id = setInterval(retrievePublicData, 10000);
        retrievePublicData();

        return () => clearInterval(id);
    }, [account]);

    return (
        <div class={cn(s.mint, className)}>
            <div class={cn(s.form)}>
                {!correctChainId ? (
                    <h2 class={s.title}>
                        <span
                            class={s.link}
                            onClick={() => addMainnetNetwork(provider)}
                        >
                            switch
                        </span>
                        <span>to arbitrum</span>
                    </h2>
                ) : (
                    <h2 class={s.title}>
                        Mint an ape
                        <br />
                        {counter || "—"} remaining
                    </h2>
                )}
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
                <MintButton
                    address={account}
                    price={amount * parseFloat(price)}
                    onMint={async () => await mint()}
                    onConnect={connect}
                />
            </div>
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
function referralCodeToAccount(refId: any) {
    throw new Error("Function not implemented.");
}
