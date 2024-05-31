import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: process.env.REACT_APP_DYNAMIC_ENVIRONMENT_ID,
      walletConnectors: [
        EthereumWalletConnectors,
        ZeroDevSmartWalletConnectors,
      ],
    }}
  >
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;
