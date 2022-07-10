import environment from "./config";
import { connect, Contract, keyStores, WalletConnection } from "near-api-js";

const nearEnv = environment("testnet");
console.log(nearEnv);
export async function initializeContract() {
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      nearEnv
    )
  );
  window.walletConnection = new WalletConnection(near);
  window.accountId = window.walletConnection.getAccountId();
  window.contract = new Contract(
    window.walletConnection.account(),
    nearEnv.contractName,
    {
      viewMethods: ["say_hello_name", "say_hello"],
      changeMethods: [],
    }
  );
}
