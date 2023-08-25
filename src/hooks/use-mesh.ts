import { useMeshStore } from "./use-mesh-store";

export function useMesh() {
  const { hasConnectedWallet, connectWallet, disconnect } = useMeshStore();

  if (typeof window !== "undefined" && window.cardano) {
    connectWallet("injected");
  }

  return {
    hasConnectedWallet,
    connectWallet,
    disconnect,
  };
}
