// Components/Connect
import { h } from "preact";
import cn from "classnames";
import s from "../Mint/style.css";

export default function({ account, connect, class: className }) {
    if (!account)
        return (
            <button
                type="button"
                class={cn(s.buttonMint, className)}
                onClick={connect}
            >
                Connect
            </button>
        );

    return (
        <button class={cn(s.buttonMint, className)}>
            {account.substring(0, 4)}...{account.substring(account.length - 4)}
        </button>
    );
}

// Components/Home
import { h } from "preact";
import { useState } from "preact/hooks";
import copyToC from "copy-to-clipboard";
import cn from "classnames";

import Connect from "../Connect";
import Mint from "../Mint";
import Roadmap from '../Roadmap'

import { accountToReferralCode } from "../Refs/utils";

import s from "./style.css";
import sU from "../utils.css";

function RefsButton({ account, connect }) {
    const [isCopied, setCopied] = useState(false);

    const code = accountToReferralCode(account);
    const link = `${window.location.href}/?ref=${code}`;

    function copy() {
        copyToC(link);
        setCopied(true);

        setTimeout(() => setCopied(false), 1000);
    }

    if (account) {
        return (
            <button type="button" class={s.refButton} onClick={copy}>
                {isCopied ? "Copied" : "Copy link"}
            </button>
        );
    }

    return <Connect connect={connect} class={s.button} />;
}

const DiscordIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
    >
        <g id="surface182580846">
            <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 19.980469 5.167969 C 18.070312 3.632812 15.046875 3.371094 14.917969 3.363281 C 14.71875 3.34375 14.527344 3.457031 14.441406 3.644531 C 14.4375 3.65625 14.371094 3.804688 14.296875 4.042969 C 15.5625 4.257812 17.113281 4.6875 18.515625 5.558594 C 18.742188 5.695312 18.8125 5.992188 18.671875 6.21875 C 18.582031 6.367188 18.425781 6.445312 18.265625 6.445312 C 18.179688 6.445312 18.089844 6.421875 18.011719 6.375 C 15.597656 4.875 12.582031 4.800781 12 4.800781 C 11.417969 4.800781 8.402344 4.875 5.988281 6.375 C 5.765625 6.515625 5.46875 6.445312 5.328125 6.21875 C 5.1875 5.992188 5.257812 5.699219 5.484375 5.558594 C 6.886719 4.6875 8.4375 4.257812 9.703125 4.042969 C 9.628906 3.804688 9.5625 3.65625 9.558594 3.644531 C 9.472656 3.457031 9.285156 3.339844 9.082031 3.363281 C 8.953125 3.371094 5.929688 3.632812 3.992188 5.191406 C 2.984375 6.125 0.960938 11.59375 0.960938 16.320312 C 0.960938 16.40625 0.984375 16.484375 1.023438 16.558594 C 2.417969 19.011719 6.226562 19.652344 7.09375 19.679688 C 7.097656 19.679688 7.105469 19.679688 7.109375 19.679688 C 7.265625 19.679688 7.40625 19.605469 7.5 19.484375 L 8.375 18.277344 C 6.007812 17.664062 4.796875 16.625 4.730469 16.5625 C 4.53125 16.390625 4.511719 16.085938 4.6875 15.886719 C 4.863281 15.6875 5.164062 15.667969 5.363281 15.84375 C 5.390625 15.871094 7.621094 17.761719 12 17.761719 C 16.386719 17.761719 18.613281 15.863281 18.636719 15.84375 C 18.835938 15.671875 19.136719 15.6875 19.3125 15.890625 C 19.488281 16.085938 19.46875 16.390625 19.269531 16.5625 C 19.203125 16.625 17.992188 17.664062 15.625 18.277344 L 16.5 19.484375 C 16.59375 19.605469 16.734375 19.679688 16.890625 19.679688 C 16.894531 19.679688 16.902344 19.679688 16.90625 19.679688 C 17.773438 19.652344 21.582031 19.011719 22.976562 16.558594 C 23.015625 16.484375 23.039062 16.40625 23.039062 16.320312 C 23.039062 11.59375 21.015625 6.125 19.980469 5.167969 Z M 8.878906 14.398438 C 7.953125 14.398438 7.199219 13.542969 7.199219 12.480469 C 7.199219 11.417969 7.953125 10.558594 8.878906 10.558594 C 9.808594 10.558594 10.558594 11.417969 10.558594 12.480469 C 10.558594 13.542969 9.808594 14.398438 8.878906 14.398438 Z M 15.121094 14.398438 C 14.191406 14.398438 13.441406 13.542969 13.441406 12.480469 C 13.441406 11.417969 14.191406 10.558594 15.121094 10.558594 C 16.046875 10.558594 16.800781 11.417969 16.800781 12.480469 C 16.800781 13.542969 16.046875 14.398438 15.121094 14.398438 Z M 15.121094 14.398438 "
            />
        </g>
    </svg>
);

const TwitterIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
    >
        <g id="surface182783005">
            <path
                style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                d="M 24.03125 5.011719 C 23.144531 5.402344 22.191406 5.667969 21.191406 5.789062 C 22.214844 5.175781 22.996094 4.210938 23.363281 3.058594 C 22.410156 3.621094 21.351562 4.03125 20.230469 4.253906 C 19.328125 3.292969 18.046875 2.695312 16.628906 2.695312 C 13.902344 2.695312 11.691406 4.90625 11.691406 7.632812 C 11.691406 8.015625 11.734375 8.394531 11.820312 8.757812 C 7.71875 8.550781 4.082031 6.585938 1.644531 3.597656 C 1.21875 4.328125 0.980469 5.175781 0.980469 6.082031 C 0.980469 7.792969 1.847656 9.304688 3.175781 10.191406 C 2.363281 10.164062 1.601562 9.941406 0.9375 9.570312 C 0.9375 9.59375 0.9375 9.613281 0.9375 9.632812 C 0.9375 12.027344 2.640625 14.019531 4.894531 14.476562 C 4.484375 14.585938 4.046875 14.648438 3.597656 14.648438 C 3.277344 14.648438 2.96875 14.617188 2.667969 14.558594 C 3.296875 16.515625 5.117188 17.949219 7.277344 17.988281 C 5.589844 19.3125 3.460938 20.097656 1.148438 20.097656 C 0.75 20.097656 0.355469 20.074219 -0.0273438 20.027344 C 2.15625 21.429688 4.75 22.246094 7.539062 22.246094 C 16.617188 22.246094 21.582031 14.726562 21.582031 8.203125 C 21.582031 7.992188 21.574219 7.777344 21.566406 7.566406 C 22.53125 6.871094 23.367188 6 24.03125 5.011719 Z M 24.03125 5.011719 "
            />
        </g>
    </svg>
);

const Description = ({ class: className }) => {
    return (
        <p class={className}>
            AAC is a collection of 10,000 ArbiApe NFTs—unique digital collectibles
            living on the L2 Arbitrum blockchain. <br />
            ArbiApes are a fairly launched fork of Ethereum's BAYC. <br />
            They are ERC-721 tokens fully integrated and supported on the Arbitrum
            network, and will be listed on all major NFT marketplaces.
        </p>
    );
};

const Img = ({ class: className }) => (
    <img src="/assets/overview.png" class={cn(s.img, className)} />
);

const Icons = ({ class: className }) => (
    <div class={cn(s.icons, className)}>
        <a href="https://twitter.com/ArbiApeClub" target="_blank">
            <TwitterIcon />
        </a>
        <a href="https://discord.gg/ha4cqFgktD" target="_blank">
            <DiscordIcon />
        </a>
    </div>
);

export default function({ account, chainId, error, provider, connect, refId }) {
    return (
        <div>
            <div class="container">
                <div class="hero">
                    <div class="row">
                        <div class="col-xs-12 col-md-7">
                            <div class="about">
                                <Icons class={sU.hiddenMd} />
                                <Connect
                                    account={account}
                                    connect={connect}
                                    class={sU.hiddenMd}
                                />
                                <h1 class={s.heading}>
                                    WELCOME TO THE <br />
                                    ARBIAPE L2 CLUB
                                </h1>
                                <Img class={sU.hiddenMd} />
                                <Mint
                                    account={account}
                                    chainId={chainId}
                                    error={error}
                                    provider={provider}
                                    connect={connect}
                                    refId={refId}
                                    class={sU.hiddenMd}
                                />

                                <h2 class={cn(s.smallHeading, sU.hiddenMd)}>MEET THE APES</h2>
                                <Description />

                                <div class={s.features}>
                                    <div>
                                        <h2 class={s.smallHeading}>FAIR DISTRIBUTION</h2>
                                        <p class={s.smallText}>
                                            There are no bonding curves here. Buying an ArbiApe costs
                                            0.05 ETH. There are no price tiers.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 class={s.smallHeading}>REFERRALS</h2>
                                        <p class={s.smallText}>
                                            You know the drill: share your link and get 15% on all
                                            minted ArbiApes:
                                            <br />
                                            <RefsButton account={account} connect={connect} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-5">
                            <div class={s.social}>
                                <div class={sU.visibleMd}>
                                    <Connect
                                        account={account}
                                        connect={connect}
                                    />
                                </div>
                                <Icons class={sU.visibleMd} />
                                <Img class={sU.visibleMd} />
                            </div>
                        </div>
                    </div>
                </div>

                <Mint
                    account={account}
                    chainId={chainId}
                    error={error}
                    provider={provider}
                    connect={connect}
                    refId={refId}
                    class={sU.visibleMd}
                />

                <Roadmap />
            </div>
        </div>
    );
}

// Components/Mint
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import cn from "classnames";

import Web3 from "web3";
import BigNumber from "bignumber.js";

import nftAbi from "../../abis/ArbiApeClubERC721.json";
import mintAbi from "../../abis/ArbiApeClub.json";

import { referralCodeToAccount } from "../Refs/utils";
import Connect from "../Connect";
import s from "./style.css";
import sU from "../utils.css";

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

function addMainnetNetwork(provider) {
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

export default function({
    chainId,
    error,
    provider,
    account,
    connect,
    refId,
    class: className,
}) {
    const [price, setPrice] = useState(0);
    const [counter, setCounter] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mineIds, setMine] = useState([]);

    const web3 = new Web3(provider || rpc);
    const Nft = new web3.eth.Contract(nftAbi, nftAddress);
    const Mint = new web3.eth.Contract(mintAbi, mintAddress);

    const refAccount = refId ? referralCodeToAccount(refId) : defaultRef;

    const correctChainId = chainId && mainChainIds.includes(chainId);

    async function retrievePublicData() {
        const pr = await Mint.methods.price().call();
        const maxSupply = await Nft.methods.maxSupply().call();
        const totalSupply = await Nft.methods.totalSupply().call();

        setCounter(maxSupply - totalSupply);
        setPrice(web3.utils.fromWei(pr));

        if (account) {
            const ids = await Nft.methods.getOwnerNFTs(account).call();
            const idsToJson = ids.map((id) => ({ id }));

            setMine(idsToJson);
        }
    }

    useEffect(
        async function() {
            const id = setInterval(retrievePublicData, 10000);
            retrievePublicData();

            return () => clearInterval(id);
        },
        [account]
    );

    async function mint(e) {
        e.preventDefault();

        const value = new BigNumber(web3.utils.toWei(price)).multipliedBy(
            Number(quantity)
        );

        await Mint.methods
            .mint(refAccount)
            .send({ from: account, value, gas: 1300000 + 2000000 * quantity });
    }

    return (
        <div class={className}>
            <div class={s.wrapper}>
                <form class={s.form} onSubmit={mint}>
                    {!correctChainId && (
                        <p class={s.heading}>
                            <button onClick={() => addMainnetNetwork(provider)}>
                                Switch
                            </button>{" "}
                            to Arbitrum
                        </p>
                    )}

                    {correctChainId && (
                        <>
                            <p class={s.heading}>MINT AN APE</p>
                            <p class={cn(s.heading, sU.hiddenOnlyMd)}>
                                {counter || "-"} remaining
                            </p>
                        </>
                    )}
                    <div>
                        <input
                            type="number"
                            class={s.quantityInput}
                            placeholder="quantity"
                            value={quantity}
                            onInput={(e) => setQuantity(e.target.value)}
                        />
                        {account && (
                            <button type="submit" class={s.buttonMint}>
                                Mint (
                                {price && quantity ? (price * quantity).toFixed(2) : "0.00"}{" "}
                                ETH)
                            </button>
                        )}

                        {!account && <Connect class={s.buttonMint} connect={connect} />}
                    </div>
                </form>

                {/* {error && error == 4001 && (
        <p class="alert">Transaction denied, try again.</p>
      )} */}

                {/* <ul id="mine">
        {mineIds.map(({ image, id }) => (
          <li>
            <img src={image} alt={`Mixmoji #${id}`} /> 
            <h4>Mixmoji #{id}</h4>
          </li>
        ))}
      </ul> */}
            </div>
            <div>
                {account && (
                    <>
                        {mineIds.length > 0 && (
                            <p class="owning">
                                You own <strong>{mineIds.length}</strong> ArbiApes
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

// Components/Refs
const getMap = (legend, shift) => {
    return legend.reduce((charsMap, currentChar, charIndex) => {
        const copy = { ...charsMap };
        let ind = (charIndex + shift) % legend.length;
        if (ind < 0) {
            ind += legend.length;
        }
        copy[currentChar] = legend[ind];
        return copy;
    }, {});
};
const crypt = (str, shift = 13) => {
    const legend = "abcdefghijklmnopqrstuvwxyz".split("");

    const map = getMap(legend, shift);

    return str
        .toLowerCase()
        .split("")
        .map((char) => map[char] || char)
        .join("");
};

export function accountToReferralCode(account) {
    if (account) {
        const substring = account.substring(2);

        return crypt(substring);
    }

    return undefined;
}

export function referralCodeToAccount(code) {
    if (code) return `0x${crypt(code)}`;

    return undefined;
}

// Components/Roadmap
import { h } from "preact";
import cn from "classnames";
import s from "./style.css";

import war from "./images/war-on-glitches.png";
import sweeper from "./images/the-floor-sweeper.png";
import games from "./images/ape-games.png";

export default function() {
    return (
        <div>
            <header class={s.header}>
                <h1 class={s.heading}>Roadmap</h1>
                <p>
                    This roadmap outlines our goals and where we want to take ArbiApeClub.
                    We have a lot of ideas and concepts that we are working on. It may
                    evolve over time and hopefully become even better! Be believe that
                    ArbiApeClub is capable of bringing Arbitrum NFTs into something more
                    than mere 500x500 images!
                </p>
            </header>

            <div class={cn("row", s.war)}>
                <div class="col-lg-7">
                    <h2>War on glitches</h2>
                    <p>
                        As the minting has begun, we have encountered some problems with our
                        scripts, as a result images of several Apes were affected by
                        glitches. To fix that, we succeeded in creating a brand new script,
                        that managed to remove most of the glitches. To ensure that every
                        single Ape image is perfect, as it should be, we have started the
                        process of manual checks.
                    </p>
                </div>
                <div class="col-lg-5">
                    <img src={war} class={s.img} />
                </div>
            </div>
            <div class={cn("row", s.giveaways)}>
                <div class="col-lg-10 col-lg-offset-2">
                    <h2>Giveaways</h2>
                    <p>
                        We, Apes, believe that everyone should be able to own an Ape. Thus,
                        we propose to make a giveaway for each 100 apes minted, a total of
                        whopping 100 Apes. We have successfully partnered with the biggest
                        names of Arbitrum NFT scene, beginning to spread the Ape word to
                        masses. Check the giveaway channel on our Discord server and follow
                        our twitter to never miss a new chance!{" "}
                    </p>
                    <p>
                        “Every man an Ape, so there would be no such thing as a man or woman
                        who did not have the necessities of life, who would not be dependent
                        upon the whims and caprices and ipsi dixit of the financial martyrs
                        for a living!”
                    </p>
                </div>
            </div>
            <div class={cn("col-lg-9 col-lg-offset-3", s.marketing)}>
                <h2>Marketing</h2>
                <p>
                    We reserve all of the funds received from initial minting for
                    marketing, including large shills, influencers, collaborations with
                    other similar NFT projects and banners, as well as cross-chain
                    promotion.
                </p>
            </div>

            <div class={s.marketplace}>
                <h2>Marketplace</h2>
                <p>
                    We have successfully achieved an agreement on an exclusive listing
                    with an upcoming marketplace currently being developed by the
                    ArbiPunks team. The marketplace is set to be launched by the end of
                    September! We, Apes, believe that this marketplace is capable of
                    becoming a new Opensea for Arbitrum users.
                </p>
            </div>

            <div class={cn("col-lg-9 col-lg-offset-3", s.innovation)}>
                <h2>Innovation</h2>
                <p>
                    First ever open-source NFT buyback & burn mechanism (“The floor
                    sweeper”) — we dedicate a portion of sales of up to 10% to a buyback
                    fund that will execute buyback & burn transactions weekly, starting
                    with the lower end. this way, instead of limiting the initial supply
                    of apes, we will reduce it gradually and let the community choose
                    which apes get to stay & accrue the value.
                </p>
                <img src={sweeper} class={s.img} />
            </div>

            <div class={s.club}>
                <h2>Ape club</h2>
                <p>
                    As it stands from the name, we believe that a jpeg is almost worthless
                    by itself, we believe that an NFT has to have some utility. Our
                    journey will start with a creation of our Ape Club, which will unite
                    all Ape holders. Members of our secret club would be eligible to take
                    a role in the future of the ArbiApeClub, making ArbiApeClub a fully
                    community driven project. Apes ask, we do it!
                </p>
            </div>

            <div class={cn("col-lg-8 col-lg-offset-4", s.games)}>
                <h2>Ape games</h2>
                <p>
                    We have tried to keep this a secret, but we failed. All the rumours
                    were right, we are indeed making an exclusive Ape game. This project
                    combines your favourite Ape avatars with party-like experience!
                </p>
            </div>
            <div class="col-lg-8 col-lg-offset-2">
                <img src={games} class={s.img} />
            </div>
        </div>
    );
}

// Components/App.js
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import qs from "qs";
import detectEthereumProvider from "@metamask/detect-provider";

import usePersistedStore from "../persistedStore/use";

import Home from "./Home";

export default function() {
    const [account, setAccount] = usePersistedStore("account", "");
    const [chainId, setChainId] = usePersistedStore("chainId", "");
    const [error, setError] = useState(null);
    const [provider, setProvider] = usePersistedStore("provider", 0);
    const { ref: refId } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
    });

    function onAccountsChanged(accounts = []) {
        setAccount(accounts[0] || "");
    }

    function onChainChanged(id) {
        setChainId(id);
    }

    useEffect(async function() {
        setProvider(await detectEthereumProvider());
    }, []);

    useEffect(
        function() {
            if (provider) {
                provider.on("accountsChanged", onAccountsChanged);
                provider.on("chainChanged", onChainChanged);

                return function() {
                    provider.removeListener("accountsChanged", onAccountsChanged);
                    provider.removeListener("chainChanged", onChainChanged);
                };
            }
        },
        [provider]
    );

    useEffect(
        async function() {
            if (provider) {
                const cId = await provider.request({ method: "eth_chainId" });

                onChainChanged(cId);
            }
        },
        [provider]
    );

    async function connect(e) {
        if (provider)
            onAccountsChanged(
                await provider.request({ method: "eth_requestAccounts" })
            );
    }

    return (
        <Home
            account={account}
            chainId={chainId}
            error={error}
            provider={provider}
            connect={connect}
            refId={refId}
        />
    );
}

// persistedStore/dataPersist.ts
import isDifferent from "./isDifferent";

const persistance: {
    [persistanceKey: string]: { callbacks: Function[]; value: any };
} = {};

export interface PersistedCallback {
    unsubscribe: () => void;
    emit: (value: any) => void;
}

export function dataPersist(
    key: string,
    callback: Function,
    initialValue?: any
): PersistedCallback {
    if (!persistance[key]) {
        persistance[key] = { callbacks: [], value: initialValue };
    }

    persistance[key].callbacks.push(callback);

    return {
        unsubscribe(): void {
            const callbacks = persistance[key].callbacks;
            const index = callbacks.indexOf(callback);

            if (index !== -1) {
                callbacks.splice(index, 1);
            }
        },

        emit(value: any): void {
            if (isDifferent(value, persistance[key].value)) {
                persistance[key].value = value;

                let iterator = persistance[key].callbacks.length;

                while (iterator--) {
                    const cb = persistance[key].callbacks[iterator];

                    if (cb !== callback) {
                        cb(value);
                    }
                }
            }
        },
    };
}

// persistedStore/isDifferent
// Compares any two values of any kind and tells you if they're different
export default function isDifferent(value: any, other: any): boolean {
    // Values are of differing types
    if (typeof value !== typeof other) {
        return true;
    }

    // Values are not objects or arrays (primitives)
    if (typeof value !== "object") {
        return value !== other;
    }

    // Values are both arrays
    if (value instanceof Array && other instanceof Array) {
        // Values are arrays of different length
        if (value.length !== other.length) {
            return true;
        }

        // Comparing array values
        let iterator = value.length;

        while (iterator--) {
            if (isDifferent(value[iterator], other[iterator])) {
                return true;
            }
        }
    }
    // One of the values is an array but the other isn't
    else if (
        (value instanceof Array && !(other instanceof Array)) ||
        (other instanceof Array && !(value instanceof Array))
    ) {
        return true;
    }

    // Both are objects
    const keysValue = Object.keys(value);
    const keysOther = Object.keys(other);

    // They have a different amount of keys
    if (keysValue.length !== keysOther.length) {
        return true;
    }

    // Checking they have the same keys
    let iterator = keysValue.length;

    while (iterator--) {
        const key = keysValue[iterator];

        if (keysOther.includes(key)) {
            return true;
        }

        // Comparing key values
        if (isDifferent(value[key], other[key])) {
            return true;
        }
    }

    return false;
}

// persistedStore/storage

/* eslint-disable no-empty */
export default {
    get(key: string, initialValue?: any): any {
        if (!("localStorage" in window)) {
            return initialValue;
        }

        try {
            const value = localStorage.getItem(key);

            return value ? JSON.parse(value) : initialValue;
        } catch (e) {
            return initialValue;
        }
    },

    set(key: string, value: any): void {
        if (!("localStorage" in window)) {
            return;
        }

        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { }
    },
};

// persistedStore/use

// Preact
import { useRef, useState, useEffect } from "preact/hooks";

import { useEventListener } from "./useEventListener";

import { dataPersist, PersistedCallback } from "./dataPersist";
import isDifferent from "./isDifferent";
import storage from "./storage";

export default function usePersistedStore<T>(key: string, initialValue: T) {
    const globalState = useRef<PersistedCallback | null>(null);

    const [storeState, setStoreState] = useState(() =>
        storage.get(key, initialValue)
    );

    // Automatically update store state on storage events
    useEventListener("storage", (event: StorageEvent) => {
        if (event.key === key && event.newValue) {
            try {
                const newStoreState = JSON.parse(event.newValue);

                if (isDifferent(newStoreState, storeState)) {
                    setStoreState(newStoreState);
                }
            } catch (e) {
                console.error(e);
            }
        }
    });

    useEffect(() => {
        // Subscribe to global persistance changes on mount
        globalState.current = dataPersist(key, setStoreState, initialValue);

        return (): void => globalState.current?.unsubscribe();
    }, []);

    useEffect(() => {
        storage.set(key, storeState);

        // Tell everybody else this store state has changed
        // (so they can update via their subscription)
        globalState.current?.emit(storeState);
    }, [storeState]);

    return [storeState, setStoreState];
}

// persistedStore/useEventListener

// Preact
import { useRef, useEffect } from "preact/hooks";

export function useEventListener(
    eventName: string,
    eventHandler: (event?: any) => void,
    element = global,
    options: any = {}
): void {
    const cachedEventHandler = useRef(eventHandler);
    const { capture, passive, once } = options;

    // Keep track of event handler method changes
    useEffect(() => {
        cachedEventHandler.current = eventHandler;
    }, [eventHandler]);

    // Keep track of event name, element, and event option
    // changes
    useEffect(() => {
        if (!(element && element.addEventListener)) {
            return;
        }

        const eventListener = (event: Event): void =>
            cachedEventHandler.current(event);

        const options = { capture, passive, once };

        element.addEventListener(eventName, eventListener, options);

        return (): void =>
            element.removeEventListener(eventName, eventListener, options);
    }, [eventName, element, capture, passive, once]);
}



