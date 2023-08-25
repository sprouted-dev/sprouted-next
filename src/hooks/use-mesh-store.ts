import { BrowserWallet } from "@meshsdk/core";
import { useCallback, useState } from "react";

const INITIAL_STATE = {
  walletName: "",
  walletInstance: {} as BrowserWallet,
};

export const useMeshStore = () => {
  const [error, setError] = useState<unknown>(undefined);

  const [connectingWallet, setConnectingWallet] = useState<boolean>(false);

  const [connectedWalletInstance, setConnectedWalletInstance] =
    useState<BrowserWallet>(INITIAL_STATE.walletInstance);

  const [connectedWalletName, setConnectedWalletName] = useState<string>(
    INITIAL_STATE.walletName
  );

  const connectWallet = useCallback(async (walletName: string) => {
    setConnectingWallet(true);

    try {
      const walletInstance = await BrowserWallet.enable(walletName);
      setConnectedWalletInstance(walletInstance);
      setConnectedWalletName(walletName);
      setError(undefined);
    } catch (error) {
      setError(error);
      console.error(error);
    }

    setConnectingWallet(false);
  }, []);

  const disconnect = useCallback(() => {
    setConnectedWalletName(INITIAL_STATE.walletName);
    setConnectedWalletInstance(INITIAL_STATE.walletInstance);
  }, []);

  return {
    hasConnectedWallet: INITIAL_STATE.walletName !== connectedWalletName,
    connectedWalletInstance,
    connectedWalletName,
    connectingWallet,
    connectWallet,
    disconnect,
    error,
  };
};
