import { FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import detectEthereumProvider from "@metamask/detect-provider";
import qs from "qs";
import usePersistedStore from "../hooks/usePersistedStore";
import Home from "./home";

const App: FunctionalComponent = () => {
    const [account, setAccount] = usePersistedStore("address", "");
    const [chainId, setChainId] = usePersistedStore("chainId", "");
    const [provider, setProvider] = usePersistedStore("provider", 0);
    const [error, setError] = useState(null);

    const { ref: refId } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
    });

    function onAccountsChanged(accounts = []) {
        setAccount(accounts[0] || "");
    }

    function onChainChanged(id: string) {
        setChainId(id);
    }

    async function connect(_: any) {
        if (provider) {
            onAccountsChanged(
                await provider.request({
                    method: "eth_requestAccounts",
                })
            );
        }
    }

    useEffect(function() {
        const _setProvider = async () => {
            const provider = await detectEthereumProvider();
            console.log(provider);
            setProvider(provider);
        };
        _setProvider();
    }, []);

    useEffect(
        function() {
            if (provider) {
                provider.on("accountsChanged", onAccountsChanged);
                provider.on("chainChanged", onChainChanged);

                return function() {
                    provider.removeListener(
                        "accountsChanged",
                        onAccountsChanged
                    );
                    provider.removeListener(
                        "chainChanged",
                        onChainChanged
                    );
                };
            }
        },
        [provider]
    );

    useEffect(
        function() {
            const setupProvider = async () => {
                if (provider) {
                    const cId = await provider.request({
                        method: "eth_chainId",
                    });
                    console.log(cId);
                    onChainChanged(cId);
                }
            };
            setupProvider();
        },
        [provider]
    );

    return (
        <div id="preact_root">
            <Home
                account={account}
                chainId={chainId}
                error={error}
                provider={provider}
                connect={connect}
                refId={refId}
            />
        </div>
    );
};

export default App;
