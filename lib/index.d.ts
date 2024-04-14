import { ProviderConfig, TorusSolanaConfig } from "./interface";
import { CallbackMsgType } from "./utils/enum";
import 'text-encoding-polyfill';
export default class TorusSolanaSdk {
    private config;
    constructor(config?: TorusSolanaConfig);
    private _resultCallback;
    login(): void;
    logout(): void;
    getUserInfo(): void;
    setProvider(providerConfig: ProviderConfig): void;
    getProviderState(): void;
    walletGetProviderState(): void;
    topup(payload: {
        selectedAddress: string;
        provider: string;
    }): void;
    signTransaction(serializedTransaction: string): void;
    signAllTransactions(serializedTransactions: string[]): void;
    signMessage(message: Uint8Array): void;
    sendTransaction(serializedTransaction: string): void;
    getGaslessPublicKey(): void;
    listNft(): void;
    sendSpl(transactionData: {
        mint_add: string;
        receiver_add: string;
        amount: number;
    }): void;
    sendNft(transactionData: {
        mint_add: string;
        receiver_add: string;
    }): void;
    iframeStatus(iframeData: {
        isFullScreen: boolean;
        rid: string;
    }): void;
    private openUrl;
    onResult(linkingObject: any, callback: (event: any, type?: CallbackMsgType) => void): void;
}
