import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const WEI_IN_ETH = 10n ** 18n;

const getProvider = () => (typeof window !== "undefined" ? window.ethereum : undefined);

const formatBalance = (value: string) => {
  try {
    const wei = BigInt(value);
    const whole = wei / WEI_IN_ETH;
    const remainder = (wei % WEI_IN_ETH).toString().padStart(18, "0").slice(0, 4);
    return `${whole.toString()}.${remainder}`;
  } catch {
    return "0.0000";
  }
};

const shortenAddress = (value: string) => (value.length <= 10 ? value : `${value.slice(0, 6)}...${value.slice(-4)}`);

export const useWallet = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");

  const addressRef = useRef("");

  useEffect(() => {
    addressRef.current = address;
  }, [address]);

  const updateBalance = useCallback(async (account: string) => {
    const provider = getProvider();
    if (!provider || !account) {
      return;
    }

    try {
      const result = (await provider.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      })) as string;
      setBalance(formatBalance(result));
      setError("");
    } catch {
      setError("Unable to fetch balance");
    }
  }, []);

  const handleAccountsChanged = useCallback(
    async (accounts: string[]) => {
      if (!accounts.length) {
        setAddress("");
        setBalance("");
        return;
      }

      const account = accounts[0];
      setAddress(account);
      setError("");
      await updateBalance(account);
    },
    [updateBalance]
  );

  const connect = useCallback(async () => {
    const provider = getProvider();
    if (!provider) {
      setError("Wallet extension not found");
      return;
    }

    try {
      setError("");
      setIsConnecting(true);
      const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[];
      await handleAccountsChanged(accounts);
    } catch (err) {
      const code = typeof err === "object" && err !== null && "code" in err ? (err as { code?: number }).code : undefined;
      setError(code === 4001 ? "Connection rejected" : "Unable to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  }, [handleAccountsChanged]);

  const disconnect = useCallback(() => {
    setAddress("");
    setBalance("");
    setError("");
  }, []);

  useEffect(() => {
    const provider = getProvider();
    if (!provider) {
      return;
    }

    const handleChainChanged = () => {
      if (addressRef.current) {
        updateBalance(addressRef.current);
      }
    };

    const accountsListener = (accounts: unknown) => {
      if (Array.isArray(accounts) && accounts.every((item) => typeof item === "string")) {
        handleAccountsChanged(accounts as string[]);
      } else {
        handleAccountsChanged([]);
      }
    };

    provider.on?.("accountsChanged", accountsListener);
    provider.on?.("chainChanged", handleChainChanged);

    (async () => {
      try {
        const accounts = (await provider.request({ method: "eth_accounts" })) as string[];
        await handleAccountsChanged(accounts);
      } catch (e) {
        console.error(JSON.stringify(e));
      }
    })();

    return () => {
      provider.removeListener?.("accountsChanged", accountsListener);
      provider.removeListener?.("chainChanged", handleChainChanged);
    };
  }, [handleAccountsChanged, updateBalance]);

  const formattedAddress = useMemo(() => (address ? shortenAddress(address) : ""), [address]);

  return {
    address,
    formattedAddress,
    balance,
    isConnecting,
    error,
    connect,
    disconnect,
  };
};
