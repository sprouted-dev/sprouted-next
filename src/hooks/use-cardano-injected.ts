import { useCallback, useState } from "react";

export function useCardanoInjected() {
  const [api, setApi] = useState<unknown>();
  const [addresses, setAddresses] = useState<string[]>([]);
  const [balance, setBalance] = useState<string>("");
  const [rewardAddresses, setRewardAddresses] = useState<string[]>([]);

  const connect = useCallback(async () => {
    if (typeof window !== "undefined" && window.cardano) {
      try {
        const resp = await window.cardano.nami.enable();
        setApi(resp);
        const [usedAddresses, rewardAddresses, balance] = await Promise.all([
          resp.getUsedAddresses(),
          resp.getRewardAddresses(),
          resp.getBalance(),
        ]);
        setAddresses(usedAddresses);
        setRewardAddresses(rewardAddresses);
        setBalance(balance);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return {
    connect,
    api,
    addresses,
    balance,
    rewardAddresses,
  };
}
