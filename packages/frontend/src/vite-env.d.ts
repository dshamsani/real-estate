/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

export {};

declare global {
  interface EthereumProvider {
    request(args: { method: string; params?: unknown[] }): Promise<unknown>;
    on?(event: string, listener: (...args: unknown[]) => void): void;
    removeListener?(event: string, listener: (...args: unknown[]) => void): void;
  }

  interface Window {
    ethereum?: EthereumProvider;
  }
}
