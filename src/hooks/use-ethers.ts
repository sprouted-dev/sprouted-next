import {
  Signer,
  BrowserProvider,
  getDefaultProvider,
  Provider,
  JsonRpcSigner,
  Network,
} from "ethers";
import { useState } from "react";

const DEFAULT_NETWORK = "0x1";

async function getSigner(
  provider: BrowserProvider
): Promise<[JsonRpcSigner, string, Network]> {
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  const network = await provider.getNetwork();
  return [signer, address, network];
}

export function useEthers() {
  const [provider, setProvider] = useState<BrowserProvider>();
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [network, setNetwork] = useState<Network>();
  const [address, setAddress] = useState<string>();

  if (typeof window !== "undefined" && window.ethereum !== null) {
    if (!provider) {
      const p = new BrowserProvider(window.ethereum);
      setProvider(p);
      getSigner(p).then(([_signer, _address, _network]) => {
        setSigner(_signer);
        setAddress(_address);
        setNetwork(_network);
      });
    }
  }

  return { provider, signer, network, address };
}
