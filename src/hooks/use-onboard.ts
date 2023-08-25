import { init, useConnectWallet } from "@web3-onboard/react";
import { InitOptions } from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import ledgerModule from "@web3-onboard/ledger";
import { ethers } from "ethers";

const { INFURA_API_KEY } = process.env;
const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;
const OPTIMISM_RPC_URL = `https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}`;
const injected = injectedModule();
const ledger = ledgerModule();
const opts: InitOptions = {
  wallets: [injected, ledger],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Mainnet",
      rpcUrl: MAINNET_RPC_URL,
    },
    {
      id: "0xA",
      token: "OETH",
      label: "Optimism",
      rpcUrl: OPTIMISM_RPC_URL,
    },
  ],
  connect: {
    autoConnectLastWallet: true,
  },
  appMetadata: {
    name: "Sprouted",
    icon: "/assets/sprouts.svg",
    logo: "/assets/sprouted-logo.svg",
    description: "Sprouted Bags is a crypo currency portfolio tracker.",
  },
  theme: "dark",
};

init(opts);

export function useOnboard() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  let provider;
  let signer;

  if (wallet) {
    provider = new ethers.BrowserProvider(wallet.provider);
    signer = provider.getSigner();
  }
  return {
    wallet,
    connecting,
    connect,
    disconnect,
    provider,
    signer,
  };
}
