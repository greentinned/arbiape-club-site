import { FunctionalComponent, h } from "preact";
import Home from "./home";

const App: FunctionalComponent = () => {
  // TODO: add logic
  const account = null;
  const chainId = "";
  const error = null;
  const provider = null;
  const connect = null;
  const refId = null;
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
