function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function isRemotePath(src) {
  return /^(?:http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}
function removeBase(path, base) {
  if (path.startsWith(base)) {
    return path.slice(removeTrailingForwardSlash(base).length);
  }
  return path;
}

export { removeBase as a, appendForwardSlash as b, isRemotePath as i, prependForwardSlash as p, removeTrailingForwardSlash as r };
