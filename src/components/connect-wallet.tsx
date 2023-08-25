"use client";

/* import { useOnboard } from "@/hooks/use-onboard"; */
import { useEthers } from "@/hooks/use-ethers";
import { useCardanoInjected } from "@/hooks/use-cardano-injected";
// import { useMeshStore } from "@/hooks/use-mesh-store";
//import { useEffect } from "react";

export default function ConnectWallet() {
  // const { wallet, connect, connecting } = useOnboard();
  const { address, network } = useEthers();
  const { connect, api } = useCardanoInjected();
  /* const { connectWallet, connectedWalletInstance, connectingWallet } =
    useMeshStore(); */

  /* useEffect(() => {
    if (connectedWalletInstance) {
      console.log("connectedWalletInstance", connectedWalletInstance);
    }
  }, [connectedWalletInstance]); */

  //console.log(address, network);
  const handleClick = () => {
    connect().then((wallet) => console.log(wallet));
  };
  return (
    <button
      className="mr-8 rounded-md bg-lime-600 px-4 py-1 text-white"
      onClick={handleClick}
    >
      Connect Wallet
    </button>
  );
}
