import { FunctionalComponent, h, Fragment, VNode } from "preact";
import cn from "classnames";
import { Icons } from "../icons";
import WalletButton from "../wallet_button";
import RefButton from "../ref_button";
import "../../style/utils.css";
import s from "./style.css";
import Button from "../button";

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
    return (
        <div class={cn(s.mint, className)}>
            <form class={cn(s.form)}>
                <h2>switch to arbitrum</h2>
                <input
                    type="number"
                    class={s.input}
                    placeholder="quantity"
                    value={0}
                // onInput={(e) => setQuantity(e.target.value)}
                />
                <Button title="Connect" />
            </form>
        </div>
    );
};

const Description: FunctionalComponent<{ class?: string }> = ({
    class: className,
}) => {
    return (
        <>
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
        </>
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
                            src="/assets/images/overview.png"
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
                        src="/assets/images/overview.png"
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
            <div class={s.roadmap}>
                <div class="hero">Roadmap</div>
                <p>
                    This roadmap outlines our goals and where we want
                    to take ArbiApeClub. We have a lot of ideas and
                    concepts that we are working on. It may evolve
                    over time and hopefully become even better! Be
                    believe that ArbiApeClub is capable of bringing
                    Arbitrum NFTs into something more than mere
                    500x500 images!
                </p>
                <div class={cn("row", s.roadmapItem, s.glitches)}>
                    <div class="col-lg-8">
                        <h1>War on glitches</h1>
                        <p>
                            As the minting has begun, we have
                            encountered some problems with our
                            scripts, as a result images of several
                            Apes were affected by glitches. To fix
                            that, we succeeded in creating a brand new
                            script, that managed to remove most of the
                            glitches. To ensure that every single Ape
                            image is perfect, as it should be, we have
                            started the process of manual checks.
                        </p>
                    </div>
                    <div class="col-lg-4">
                        <img
                            src="/assets/images/glitches.png"
                            class={s.img}
                        />
                    </div>
                </div>
                <div class={cn("row", s.roadmapItem, s.giveaways)}>
                    <div class="col-lg-10 col-lg-offset-2">
                        <h1>Giveaways</h1>
                        <p>
                            We, Apes, believe that everyone should be
                            able to own an Ape. Thus, we propose to
                            make a giveaway for each 100 apes minted,
                            a total of whopping 100 Apes. We have
                            successfully partnered with the biggest
                            names of Arbitrum NFT scene, beginning to
                            spread the Ape word to masses. Check the
                            giveaway channel on our Discord server and
                            follow our twitter to never miss a new
                            chance!
                        </p>
                        <p>
                            “Every man an Ape, so there would be no
                            such thing as a man or woman who did not
                            have the necessities of life, who would
                            not be dependent upon the whims and
                            caprices and ipsi dixit of the financial
                            martyrs for a living!”
                        </p>
                    </div>
                </div>
                <div class={cn("row", s.roadmapItem, s.marketing)}>
                    <div class="col-lg-9 col-lg-offset-3">
                        <h1>Marketing</h1>
                        <p>
                            We reserve all of the funds received from
                            initial minting for marketing, including
                            large shills, influencers, collaborations
                            with other similar NFT projects and
                            banners, as well as cross-chain promotion.
                        </p>
                    </div>
                </div>
                <div class={cn("row", s.roadmapItem, s.marketplace)}>
                    <div class="col-lg-10">
                        <h1>Marketplace</h1>
                        <p>
                            We have successfully achieved an agreement
                            on an exclusive listing with an upcoming
                            marketplace currently being developed by
                            the ArbiPunks team. The marketplace is set
                            to be launched by the end of September!
                            We, Apes, believe that this marketplace is
                            capable of becoming a new Opensea for
                            Arbitrum users.
                        </p>
                    </div>
                </div>
                <div class={cn("row", s.roadmapItem, s.innovation)}>
                    <div class="col-lg-9 col-lg-offset-3">
                        <h1>Innovation</h1>
                        <p>
                            First ever open-source NFT buyback & burn
                            mechanism (“The floor sweeper”) — we
                            dedicate a portion of sales of up to 10%
                            to a buyback fund that will execute
                            buyback & burn transactions weekly,
                            starting with the lower end. this way,
                            instead of limiting the initial supply of
                            apes, we will reduce it gradually and let
                            the community choose which apes get to
                            stay & accrue the value.
                        </p>
                        <img
                            src="/assets/images/sweeper.png"
                            class={s.img}
                        />
                    </div>
                </div>
                <div class={cn("row", s.roadmapItem, s.apeclub)}>
                    <div class="col-lg-10">
                        <h1>Ape club</h1>
                        <p>
                            As it stands from the name, we believe
                            that a jpeg is almost worthless by itself,
                            we believe that an NFT has to have some
                            utility. Our journey will start with a
                            creation of our Ape Club, which will unite
                            all Ape holders. Members of our secret
                            club would be eligible to take a role in
                            the future of the ArbiApeClub, making
                            ArbiApeClub a fully community driven
                            project. Apes ask, we do it!
                        </p>
                    </div>
                </div>
                <div class={cn("row", s.roadmapItem)}>
                    <div class="col-lg-8 col-lg-offset-4">
                        <h1>Ape games</h1>
                        <p>
                            We have tried to keep this a secret, but
                            we failed. All the rumours were right, we
                            are indeed making an exclusive Ape game.
                            This project combines your favourite Ape
                            avatars with party-like experience!
                        </p>
                    </div>

                    <div class="col-lg-8 col-lg-offset-2">
                        <img
                            src="/assets/images/apegames.png"
                            class={s.img}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
