export function objectToQueryParams(obj) {
    return Object.keys(obj).map(function (key) { return "".concat(key, "=").concat(obj[key]); }).join('&');
}
