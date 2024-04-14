var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Linking } from "react-native";
import { defaultConfig } from "./utils/constants";
import { CallbackMsgType } from "./utils/enum";
// atob and btoa are available in the context of the browser,
// and that's why it works there, not primarily in react native
import { encode as btoa, decode as atob } from "base-64";
import { objectToQueryParams } from "./utils/helper";
// https://github.com/sideway/joi/issues/2141#issuecomment-558429490
import 'text-encoding-polyfill';
import InAppBrowser from "react-native-inappbrowser-reborn";
import { URLSearchParams, URL } from "whatwg-url";
if (typeof BigInt === "undefined")
    global.BigInt = require("big-integer");
var TorusSolanaSdk = /** @class */ (function () {
    function TorusSolanaSdk(config) {
        this.config = defaultConfig;
        this._resultCallback = function (event, type) {
            console.error("CALLBACK NOT REGISTERED");
        };
        if (config) {
            this.config = config;
        }
    }
    TorusSolanaSdk.prototype.login = function () {
        this.openUrl("login");
    };
    TorusSolanaSdk.prototype.logout = function () {
        this.openUrl("logout");
    };
    TorusSolanaSdk.prototype.getUserInfo = function () {
        this.openUrl("user_info");
    };
    TorusSolanaSdk.prototype.setProvider = function (providerConfig) {
        this.openUrl("set_provider", providerConfig);
    };
    TorusSolanaSdk.prototype.getProviderState = function () {
        this.openUrl("get_provider_state");
    };
    TorusSolanaSdk.prototype.walletGetProviderState = function () {
        this.openUrl("wallet_get_provider_state");
    };
    TorusSolanaSdk.prototype.topup = function (payload) {
        this.openUrl("topup", payload);
    };
    TorusSolanaSdk.prototype.signTransaction = function (serializedTransaction) {
        this.openUrl("sign_transaction", serializedTransaction);
    };
    TorusSolanaSdk.prototype.signAllTransactions = function (serializedTransactions) {
        this.openUrl("sign_all_transactions", serializedTransactions);
    };
    TorusSolanaSdk.prototype.signMessage = function (message) {
        this.openUrl("sign_message", message);
    };
    TorusSolanaSdk.prototype.sendTransaction = function (serializedTransaction) {
        this.openUrl("send_transaction", serializedTransaction);
    };
    TorusSolanaSdk.prototype.getGaslessPublicKey = function () {
        this.openUrl("get_gasless_public_key");
    };
    TorusSolanaSdk.prototype.listNft = function () {
        this.openUrl("nft_list");
    };
    TorusSolanaSdk.prototype.sendSpl = function (transactionData) {
        this.openUrl("spl_transfer", transactionData);
    };
    TorusSolanaSdk.prototype.sendNft = function (transactionData) {
        this.openUrl("nft_transfer", transactionData);
    };
    TorusSolanaSdk.prototype.iframeStatus = function (iframeData) {
        this.openUrl("iframe_status", iframeData);
    };
    TorusSolanaSdk.prototype.openUrl = function (method, data) {
        return __awaiter(this, void 0, void 0, function () {
            var baseURL, params, queryParams, encodedParams, useParams, resolvePath, url, response, url_1, e_1, e_linking_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._resultCallback) {
                            throw new Error('CALLBACK NOT REGISTERED');
                        }
                        baseURL = "".concat(this.config.base_url, "/redirectflow");
                        params = {};
                        switch (method) {
                            case "set_provider":
                                params = __assign({}, data);
                                break;
                            case "iframe_status":
                                params = __assign({}, data);
                                break;
                            case "topup":
                                params = {
                                    params: {
                                        selectedAddress: data.selectedAddress,
                                    },
                                    provider: data.provider,
                                };
                                break;
                            case "send_transaction":
                                params = {
                                    message: data,
                                };
                                break;
                            case "sign_transaction":
                                params = {
                                    message: data,
                                };
                                break;
                            case "sign_all_transactions":
                                params = {
                                    message: data,
                                };
                                break;
                            case "sign_message":
                                params = {
                                    data: data,
                                };
                                break;
                            case "spl_transfer":
                                params = __assign({}, data);
                                break;
                            case "nft_transfer":
                                params = __assign({}, data);
                                break;
                            default:
                        }
                        queryParams = {};
                        queryParams["method"] = method;
                        encodedParams = btoa(JSON.stringify(params));
                        useParams = true;
                        if ((typeof params === "object" && Object.keys(params).length === 0) ||
                            (Array.isArray(params) && params.length === 0)) {
                            useParams = false;
                        }
                        resolvePath = "".concat(this.config.deeplink_schema, "://redirect-handle");
                        url = "".concat(baseURL, "?").concat(objectToQueryParams(queryParams), "&resolveRoute=").concat(resolvePath).concat(useParams ? "#params=" + encodedParams : "");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 11]);
                        return [4 /*yield*/, InAppBrowser.isAvailable()];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 5];
                        // close any existing sessions in background - https://github.com/proyecto26/react-native-inappbrowser/issues/254
                        return [4 /*yield*/, InAppBrowser.closeAuth()];
                    case 3:
                        // close any existing sessions in background - https://github.com/proyecto26/react-native-inappbrowser/issues/254
                        _a.sent();
                        return [4 /*yield*/, InAppBrowser.openAuth(url, resolvePath, {
                                ephemeralWebSession: false,
                                showTitle: false,
                                enableUrlBarHiding: true,
                                enableDefaultShare: false
                            })];
                    case 4:
                        response = _a.sent();
                        // parse the response, send data back to app
                        if (response.type === 'success' && response.url) {
                            url_1 = new URL(response.url);
                            this._resultCallback({
                                result: atob("".concat(new URLSearchParams(url_1.search).get("result"))) || "",
                                method: new URLSearchParams(url_1.search).get("method"),
                            }, CallbackMsgType.SUCCESS);
                            return [2 /*return*/];
                        }
                        else if (response.type === 'cancel' || response.type === 'dismiss') {
                            this._resultCallback(response, CallbackMsgType.CANCEL);
                            return [2 /*return*/];
                        }
                        this._resultCallback(undefined, CallbackMsgType.ERROR);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                    case 6:
                        e_1 = _a.sent();
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 9, , 10]);
                        console.error("DOING FALLBACK", e_1);
                        // in app browser fails, try the default browser
                        return [4 /*yield*/, Linking.openURL(url).catch(function (e) { return _this._resultCallback("Error opening URL: ".concat(JSON.stringify(e)), CallbackMsgType.ERROR); })];
                    case 8:
                        // in app browser fails, try the default browser
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_linking_1 = _a.sent();
                        // if default browser fails too, return error.
                        this._resultCallback("Error opening URL: ".concat(JSON.stringify(e_linking_1)), CallbackMsgType.ERROR);
                        return [3 /*break*/, 10];
                    case 10: return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    TorusSolanaSdk.prototype.onResult = function (linkingObject, callback) {
        this._resultCallback = callback;
        linkingObject.addEventListener("url", function (resultUrl) {
            var url = new URL(resultUrl.url);
            callback({
                result: atob("".concat(new URLSearchParams(url.search).get("result"))) || "",
                method: new URLSearchParams(url.search).get("method"),
            }, CallbackMsgType.SUCCESS);
        });
    };
    return TorusSolanaSdk;
}());
export default TorusSolanaSdk;
