// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"luORH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _catgoriPage = require("./pages/catgoriPage");
var _catgoriPageDefault = parcelHelpers.interopDefault(_catgoriPage);
var _mypage = require("./pages/mypage");
var _mypageDefault = parcelHelpers.interopDefault(_mypage);
var _mapPage = require("./pages/mapPage");
var _mapPageDefault = parcelHelpers.interopDefault(_mapPage);
// root 를 가져와서 container 에 할당
const container = document.getElementById("root");
const store = {
    currentPage: 1,
    feeds: []
};
function router() {
    const routePath = location.hash;
    console.log(routePath, "routePath");
    if (routePath === "") (0, _mapPageDefault.default)(container);
    else if (routePath.indexOf("#catgoriPage") >= 0) (0, _catgoriPageDefault.default)(container);
    else if (routePath.indexOf("#mypage") >= 0) (0, _mypageDefault.default)(container);
}
window.addEventListener("hashchange", router);
router();

},{"./pages/catgoriPage":"Y76yY","./pages/mypage":"9fWWz","./pages/mapPage":"A8G98","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"Y76yY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bottomTab = require("../../component/bottomTab");
var _bottomTabDefault = parcelHelpers.interopDefault(_bottomTab);
function chatPage(container) {
    let template = `
        <h1>카테고리 페이지</h1>
        ${(0, _bottomTabDefault.default)()}

        `;
    container.innerHTML = template;
}
exports.default = chatPage;

},{"../../component/bottomTab":"lDBO8","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"lDBO8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function bottomTab() {
    return `
    <div class="navbar">
        <a href="#home">홈메뉴</a>
        <a href="#chatbot">chat</a>
        <a href="#mypage">마이페이지</a>
    </div>
    `;
}
exports.default = bottomTab;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"fD7H8":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9fWWz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bottomTab = require("../../component/bottomTab");
var _bottomTabDefault = parcelHelpers.interopDefault(_bottomTab);
function mypage(container) {
    let template = `
        <h1>마이페이지</h1>
        ${(0, _bottomTabDefault.default)()}

        `;
    container.innerHTML = template;
}
exports.default = mypage;

},{"../../component/bottomTab":"lDBO8","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8"}],"A8G98":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _busanGuJson = require("../../busan_gu.json");
var _busanGuJsonDefault = parcelHelpers.interopDefault(_busanGuJson);
var _indexJs = require("../mypage/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function mapPage(container) {
    let template = `
    <div id="map"></div>
    <button id="goToOtherPageButton">다른 페이지로 이동</button>
  `;
    container.innerHTML = template;
    initMap();
    initPolygons();
    initMarkers();
    const goToOtherPageButton = document.getElementById("goToOtherPageButton");
    goToOtherPageButton.addEventListener("click", ()=>{
        window.location.href = "../mypage/index.js" // 다른 페이지의 URL을 여기에 설정
        ;
    });
}
exports.default = mapPage;
let map;
const img_Junggu = new URL(require("14dbde281cd8182a"));
const img_Seogu = new URL(require("b439b6ef690dc1c4"));
const img_Donggu = new URL(require("ecb0a2f2871ef052"));
const img_Yeongdogu = new URL(require("768b633fbaeabbff"));
const img_Jingu = new URL(require("a3fb0773617634ea"));
const img_Dongnaegu = new URL(require("c3716a9fcd0c7cfd"));
const img_Namgu = new URL(require("b342f7d0041e4ca9"));
const img_Booku = new URL(require("4d7606fafd036255"));
const img_Haeundaegu = new URL(require("993ead1d2b34adb5"));
const img_Sahagu = new URL(require("9e0849902c3af833"));
const img_Geumjeonggu = new URL(require("dce150be3830fd1c"));
const img_Gangseogu = new URL(require("6d856085cced863"));
const img_Yeonjegu = new URL(require("cd72461360a1b16"));
const img_Suyeonggu = new URL(require("9910bd9d230963a6"));
const img_Sasanggu = new URL(require("9fb62686e4aa2dfc"));
const img_Gijanggun = new URL(require("3c250a5a2aa8dde2"));
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 35.17944,
            lng: 129.07556
        },
        zoom: 11,
        mapId: "48d8ea791651eb12"
    });
}
function initPolygons() {
    for(var i = 0; i < (0, _busanGuJsonDefault.default).features.length; i++){
        const geoObj = (0, _busanGuJsonDefault.default).features[i].geometry.coordinates[0].map((value, index)=>{
            return {
                lat: value[1],
                lng: value[0]
            };
        });
        createPolygon(geoObj);
    }
}
function createPolygon(polygonArr) {
    const polygon = new google.maps.Polygon({
        paths: polygonArr,
        strokeColor: "black",
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: "#00000000",
        fillOpacity: 0.35
    });
    polygon.setMap(map);
}
function initMarkers() {
    var jungguIcon = {
        url: img_Junggu.href,
        scaledSize: new google.maps.Size(40, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.10644444444444,
            lng: 129.0305
        },
        map: map,
        icon: jungguIcon
    });
    var seoguIcon = {
        url: img_Seogu.href,
        scaledSize: new google.maps.Size(40, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.08004472650553,
            lng: 129.01415942028981
        },
        map: map,
        icon: seoguIcon
    });
    var dongguIcon = {
        url: img_Donggu.href,
        scaledSize: new google.maps.Size(40, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.12830769230769,
            lng: 129.04597435897435
        },
        map: map,
        icon: dongguIcon
    });
    var yeongdoguIcon = {
        url: img_Yeongdogu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.073854545454545,
            lng: 129.06974545454545
        },
        map: map,
        icon: yeongdoguIcon
    });
    var jinguIcon = {
        url: img_Jingu.href,
        scaledSize: new google.maps.Size(80, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.156014492753625,
            lng: 129.0465072463768
        },
        map: map,
        icon: jinguIcon
    });
    var dongnaeguIcon = {
        url: img_Dongnaegu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.20005925925926,
            lng: 129.08222222222219
        },
        map: map,
        icon: dongnaeguIcon
    });
    var namguIcon = {
        url: img_Namgu.href,
        scaledSize: new google.maps.Size(40, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.11572580645162,
            lng: 129.09545161290322
        },
        map: map,
        icon: namguIcon
    });
    var bookuIcon = {
        url: img_Booku.href,
        scaledSize: new google.maps.Size(40, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.22001408450705,
            lng: 129.02711267605632
        },
        map: map,
        icon: bookuIcon
    });
    var haeundaeguIcon = {
        url: img_Haeundaegu.href,
        scaledSize: new google.maps.Size(80, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.17927083333334,
            lng: 129.1547604166667
        },
        map: map,
        icon: haeundaeguIcon
    });
    var sahaguIcon = {
        url: img_Sahagu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.08550000000001,
            lng: 128.98085576923074
        },
        map: map,
        icon: sahaguIcon
    });
    var geumjungguIcon = {
        url: img_Geumjeonggu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.246705882352946,
            lng: 129.09040196078433
        },
        map: map,
        icon: geumjungguIcon
    });
    var gangseoguIcon = {
        url: img_Gangseogu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.1593,
            lng: 128.933
        },
        map: map,
        icon: gangseoguIcon
    });
    var yeonjeguIcon = {
        url: img_Yeonjegu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.17546551724138,
            lng: 129.08129310344825
        },
        map: map,
        icon: yeonjeguIcon
    });
    var suyeongguIcon = {
        url: img_Suyeonggu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.15090697674418,
            lng: 129.11220930232557
        },
        map: map,
        icon: suyeongguIcon
    });
    var sasangguIcon = {
        url: img_Sasanggu.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.150968749999995,
            lng: 128.98760937499997
        },
        map: map,
        icon: sasangguIcon
    });
    var gijanggunIcon = {
        url: img_Gijanggun.href,
        scaledSize: new google.maps.Size(60, 30)
    };
    var marker = new google.maps.Marker({
        position: {
            lat: 35.29200423728813,
            lng: 129.19918644067804
        },
        map: map,
        icon: gijanggunIcon
    });
} //js에서 html 파일을 생성, 실제로 생성된건 index.html 이고 html태그들을 넣으니까

},{"../../busan_gu.json":"94gdz","14dbde281cd8182a":"h9hnr","b439b6ef690dc1c4":"4wAkN","ecb0a2f2871ef052":"7pKcc","768b633fbaeabbff":"cui2q","a3fb0773617634ea":"2JcG4","c3716a9fcd0c7cfd":"2ENoz","b342f7d0041e4ca9":"4mldW","4d7606fafd036255":"Vx0FQ","993ead1d2b34adb5":"bCgpA","9e0849902c3af833":"ifkvr","dce150be3830fd1c":"lLkrv","6d856085cced863":"brmsc","cd72461360a1b16":"94FlP","9910bd9d230963a6":"hLVrP","9fb62686e4aa2dfc":"c6fS8","3c250a5a2aa8dde2":"5lXnF","@parcel/transformer-js/src/esmodule-helpers.js":"fD7H8","../mypage/index.js":"9fWWz"}],"94gdz":[function(require,module,exports) {
module.exports = JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","id":"중구","properties":{"code":"21010","name":"중구","name_eng":"Jung-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.032,35.116],[129.038,35.112],[129.042,35.111],[129.041,35.108],[129.038,35.104],[129.038,35.098],[129.037,35.097],[129.029,35.096],[129.026,35.096],[129.024,35.1],[129.022,35.102],[129.021,35.106],[129.023,35.109],[129.024,35.109],[129.026,35.111],[129.028,35.11],[129.028,35.115],[129.032,35.116]]]}},{"type":"Feature","id":"서구","properties":{"code":"21020","name":"서구","name_eng":"Seo-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.023,35.076],[129.021,35.078],[129.018,35.077],[129.017,35.074],[129.019,35.07],[129.021,35.07],[129.021,35.066],[129.02,35.065],[129.022,35.062],[129.019,35.059],[129.018,35.058],[129.016,35.057],[129.015,35.053],[129.012,35.052],[129.008,35.063],[129.011,35.063],[129.012,35.065],[129.009,35.066],[129.006,35.071],[129.004,35.078],[129.008,35.079],[129.011,35.077],[129.012,35.08],[129.011,35.083],[129.012,35.084],[129.014,35.091],[129.014,35.094],[129.01,35.099],[129.007,35.1],[129.007,35.101],[129.01,35.106],[129.006,35.109],[129.004,35.111],[129.004,35.113],[129.002,35.114],[129.003,35.117],[128.999,35.119],[129,35.124],[129.003,35.125],[129.003,35.131],[129.003,35.134],[129.004,35.136],[128.996,35.14],[128.998,35.141],[129.002,35.141],[129.004,35.139],[129.008,35.14],[129.011,35.139],[129.013,35.137],[129.016,35.136],[129.022,35.137],[129.026,35.136],[129.026,35.133],[129.026,35.126],[129.026,35.125],[129.025,35.122],[129.025,35.118],[129.027,35.116],[129.028,35.112],[129.024,35.109],[129.023,35.109],[129.021,35.106],[129.022,35.102],[129.024,35.1],[129.026,35.096],[129.025,35.094],[129.027,35.085],[129.024,35.076],[129.023,35.076]]]}},{"type":"Feature","id":"동구","properties":{"code":"21030","name":"동구","name_eng":"Dong-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.043,35.146],[129.046,35.146],[129.048,35.144],[129.052,35.142],[129.059,35.141],[129.065,35.141],[129.066,35.139],[129.065,35.135],[129.066,35.13],[129.065,35.127],[129.056,35.118],[129.053,35.12],[129.055,35.122],[129.056,35.125],[129.055,35.126],[129.05,35.124],[129.049,35.12],[129.054,35.117],[129.053,35.116],[129.048,35.119],[129.047,35.117],[129.051,35.114],[129.05,35.113],[129.045,35.116],[129.042,35.11],[129.038,35.112],[129.032,35.117],[129.027,35.116],[129.024,35.119],[129.026,35.125],[129.026,35.126],[129.026,35.133],[129.026,35.136],[129.032,35.138],[129.035,35.138],[129.039,35.14],[129.039,35.144],[129.041,35.146],[129.043,35.146]]]}},{"type":"Feature","id":"영도구","properties":{"code":"21040","name":"영도구","name_eng":"Youngdo-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.071,35.059],[129.069,35.061],[129.065,35.061],[129.065,35.062],[129.066,35.066],[129.065,35.069],[129.063,35.07],[129.057,35.071],[129.053,35.072],[129.047,35.076],[129.045,35.078],[129.041,35.081],[129.04,35.081],[129.034,35.085],[129.034,35.089],[129.031,35.092],[129.032,35.094],[129.037,35.092],[129.036,35.095],[129.045,35.097],[129.047,35.096],[129.051,35.1],[129.055,35.101],[129.059,35.101],[129.068,35.096],[129.071,35.094],[129.079,35.085],[129.079,35.082],[129.084,35.074],[129.087,35.077],[129.093,35.08],[129.096,35.08],[129.095,35.077],[129.092,35.076],[129.091,35.074],[129.087,35.073],[129.086,35.074],[129.08,35.071],[129.082,35.07],[129.085,35.07],[129.085,35.066],[129.088,35.063],[129.091,35.061],[129.096,35.06],[129.095,35.057],[129.092,35.054],[129.092,35.051],[129.086,35.049],[129.083,35.05],[129.081,35.053],[129.082,35.056],[129.079,35.059],[129.077,35.061],[129.075,35.061],[129.071,35.059]]]}},{"type":"Feature","id":"부산진구","properties":{"code":"21050","name":"부산진구","name_eng":"Busanjin-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.065,35.177],[129.067,35.176],[129.07,35.176],[129.073,35.179],[129.075,35.179],[129.076,35.176],[129.079,35.175],[129.079,35.173],[129.082,35.171],[129.081,35.168],[129.079,35.167],[129.078,35.164],[129.081,35.16],[129.083,35.158],[129.082,35.155],[129.08,35.154],[129.079,35.151],[129.075,35.151],[129.067,35.148],[129.066,35.149],[129.063,35.149],[129.063,35.144],[129.065,35.141],[129.059,35.141],[129.052,35.142],[129.048,35.144],[129.046,35.146],[129.041,35.146],[129.039,35.144],[129.039,35.14],[129.035,35.138],[129.032,35.138],[129.026,35.136],[129.022,35.137],[129.016,35.136],[129.012,35.137],[129.016,35.143],[129.014,35.146],[129.016,35.147],[129.016,35.155],[129.011,35.159],[129.011,35.163],[129.013,35.166],[129.013,35.169],[129.011,35.171],[129.011,35.173],[129.013,35.176],[129.014,35.177],[129.017,35.18],[129.02,35.181],[129.021,35.182],[129.021,35.187],[129.026,35.192],[129.026,35.194],[129.029,35.194],[129.032,35.196],[129.034,35.198],[129.04,35.199],[129.044,35.199],[129.048,35.195],[129.048,35.19],[129.051,35.187],[129.051,35.185],[129.055,35.184],[129.06,35.184],[129.062,35.183],[129.062,35.18],[129.063,35.177],[129.065,35.177]]]}},{"type":"Feature","id":"동래구","properties":{"code":"21060","name":"동래구","name_eng":"Dongnae-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.083,35.224],[129.085,35.222],[129.087,35.222],[129.086,35.219],[129.088,35.218],[129.094,35.215],[129.095,35.215],[129.101,35.213],[129.102,35.211],[129.106,35.21],[129.107,35.211],[129.11,35.21],[129.111,35.204],[129.116,35.201],[129.115,35.198],[129.114,35.194],[129.115,35.188],[129.115,35.187],[129.115,35.184],[129.114,35.184],[129.112,35.189],[129.108,35.19],[129.106,35.19],[129.1,35.191],[129.097,35.193],[129.093,35.193],[129.087,35.194],[129.084,35.195],[129.082,35.198],[129.078,35.199],[129.074,35.198],[129.072,35.195],[129.064,35.194],[129.062,35.192],[129.057,35.193],[129.056,35.192],[129.053,35.192],[129.048,35.195],[129.044,35.199],[129.044,35.202],[129.047,35.202],[129.047,35.204],[129.05,35.207],[129.051,35.209],[129.051,35.213],[129.053,35.216],[129.056,35.218],[129.059,35.225],[129.062,35.226],[129.068,35.225],[129.074,35.225],[129.078,35.226],[129.081,35.223],[129.083,35.224]]]}},{"type":"Feature","id":"남구","properties":{"code":"21070","name":"남구","name_eng":"Nam-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.111,35.136],[129.11,35.134],[129.113,35.133],[129.116,35.133],[129.115,35.131],[129.117,35.13],[129.121,35.134],[129.122,35.132],[129.121,35.13],[129.123,35.126],[129.128,35.119],[129.127,35.113],[129.128,35.111],[129.125,35.106],[129.124,35.102],[129.123,35.099],[129.119,35.099],[129.116,35.1],[129.113,35.103],[129.11,35.101],[129.107,35.103],[129.105,35.099],[129.1,35.099],[129.099,35.097],[129.096,35.097],[129.095,35.099],[129.094,35.107],[129.093,35.109],[129.09,35.109],[129.09,35.104],[129.075,35.104],[129.067,35.108],[129.07,35.111],[129.068,35.112],[129.072,35.116],[129.074,35.117],[129.072,35.119],[129.073,35.122],[129.07,35.123],[129.069,35.122],[129.066,35.123],[129.067,35.126],[129.066,35.14],[129.063,35.143],[129.063,35.149],[129.066,35.149],[129.067,35.148],[129.075,35.151],[129.079,35.151],[129.08,35.154],[129.082,35.155],[129.082,35.157],[129.089,35.161],[129.093,35.16],[129.095,35.161],[129.099,35.155],[129.101,35.152],[129.102,35.149],[129.103,35.144],[129.102,35.143],[129.106,35.139],[129.111,35.136]]]}},{"type":"Feature","id":"북구","properties":{"code":"21080","name":"북구","name_eng":"Buk-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.047,35.274],[129.046,35.271],[129.044,35.27],[129.042,35.263],[129.038,35.262],[129.037,35.261],[129.04,35.259],[129.042,35.257],[129.047,35.257],[129.049,35.255],[129.045,35.251],[129.046,35.249],[129.046,35.247],[129.048,35.246],[129.049,35.245],[129.05,35.241],[129.049,35.239],[129.047,35.238],[129.047,35.235],[129.044,35.233],[129.044,35.231],[129.047,35.23],[129.049,35.229],[129.056,35.228],[129.06,35.23],[129.062,35.226],[129.059,35.225],[129.056,35.218],[129.053,35.216],[129.051,35.213],[129.051,35.209],[129.05,35.207],[129.047,35.204],[129.047,35.202],[129.044,35.202],[129.044,35.199],[129.04,35.199],[129.034,35.198],[129.032,35.196],[129.029,35.194],[129.026,35.194],[129.026,35.192],[129.021,35.188],[129.017,35.189],[129.011,35.189],[129.008,35.188],[129.004,35.19],[129,35.19],[129,35.192],[128.991,35.196],[128.988,35.196],[128.989,35.2],[128.987,35.202],[128.991,35.204],[128.994,35.208],[128.995,35.213],[128.997,35.225],[128.998,35.233],[128.997,35.236],[128.999,35.238],[129.002,35.245],[129.006,35.252],[129.012,35.263],[129.015,35.271],[129.013,35.274],[129.017,35.275],[129.027,35.277],[129.031,35.277],[129.035,35.276],[129.036,35.275],[129.047,35.274]]]}},{"type":"Feature","id":"해운대구","properties":{"code":"21090","name":"해운대구","name_eng":"Haeundae-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.127,35.166],[129.125,35.167],[129.125,35.168],[129.124,35.17],[129.123,35.171],[129.123,35.172],[129.121,35.173],[129.121,35.174],[129.118,35.18],[129.118,35.181],[129.115,35.187],[129.115,35.188],[129.114,35.194],[129.115,35.198],[129.116,35.201],[129.111,35.204],[129.11,35.21],[129.112,35.213],[129.116,35.213],[129.119,35.216],[129.117,35.222],[129.118,35.224],[129.121,35.226],[129.127,35.227],[129.13,35.231],[129.13,35.233],[129.131,35.235],[129.137,35.238],[129.142,35.242],[129.141,35.244],[129.144,35.247],[129.145,35.251],[129.149,35.247],[129.149,35.246],[129.156,35.244],[129.157,35.243],[129.155,35.239],[129.155,35.236],[129.161,35.234],[129.164,35.231],[129.167,35.23],[129.169,35.228],[129.169,35.225],[129.165,35.22],[129.165,35.215],[129.16,35.212],[129.16,35.21],[129.16,35.206],[129.163,35.206],[129.165,35.203],[129.17,35.201],[129.172,35.202],[129.176,35.201],[129.179,35.198],[129.183,35.198],[129.185,35.195],[129.183,35.191],[129.185,35.19],[129.188,35.189],[129.191,35.192],[129.193,35.194],[129.195,35.199],[129.199,35.2],[129.207,35.197],[129.207,35.195],[129.206,35.191],[129.207,35.185],[129.208,35.183],[129.205,35.181],[129.201,35.18],[129.197,35.176],[129.198,35.173],[129.196,35.164],[129.194,35.161],[129.187,35.159],[129.183,35.156],[129.181,35.155],[129.177,35.155],[129.174,35.157],[129.17,35.159],[129.166,35.16],[129.159,35.159],[129.155,35.157],[129.153,35.152],[129.15,35.153],[129.151,35.156],[129.149,35.157],[129.146,35.153],[129.143,35.154],[129.141,35.157],[129.142,35.159],[129.139,35.161],[129.137,35.16],[129.134,35.162],[129.128,35.166],[129.127,35.166]]]}},{"type":"Feature","id":"사하구","properties":{"code":"21100","name":"사하구","name_eng":"Saha-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[128.959,35.118],[128.962,35.12],[128.964,35.122],[128.972,35.119],[128.976,35.117],[128.98,35.117],[128.982,35.12],[128.987,35.124],[128.99,35.125],[129,35.123],[128.999,35.119],[129.003,35.117],[129.002,35.114],[129.004,35.113],[129.004,35.111],[129.006,35.109],[129.01,35.106],[129.007,35.101],[129.007,35.1],[129.01,35.099],[129.014,35.094],[129.014,35.091],[129.012,35.084],[129.011,35.083],[129.012,35.08],[129.011,35.077],[129.008,35.079],[129.004,35.078],[129.004,35.081],[129.005,35.084],[129.003,35.085],[128.997,35.083],[128.993,35.084],[128.993,35.08],[128.995,35.076],[128.994,35.074],[128.995,35.071],[128.995,35.063],[129.001,35.048],[128.995,35.045],[128.992,35.045],[128.993,35.049],[128.988,35.058],[128.985,35.06],[128.978,35.057],[128.977,35.056],[128.975,35.057],[128.973,35.057],[128.972,35.054],[128.976,35.053],[128.98,35.053],[128.983,35.052],[128.982,35.049],[128.976,35.048],[128.972,35.049],[128.97,35.047],[128.969,35.045],[128.974,35.042],[128.969,35.037],[128.968,35.037],[128.966,35.034],[128.964,35.034],[128.964,35.037],[128.967,35.04],[128.968,35.043],[128.969,35.045],[128.967,35.048],[128.958,35.051],[128.958,35.053],[128.951,35.08],[128.951,35.082],[128.951,35.085],[128.955,35.092],[128.955,35.095],[128.956,35.106],[128.956,35.107],[128.951,35.107],[128.949,35.107],[128.947,35.102],[128.947,35.099],[128.944,35.088],[128.938,35.089],[128.936,35.086],[128.934,35.087],[128.934,35.093],[128.935,35.097],[128.937,35.101],[128.936,35.105],[128.939,35.109],[128.935,35.11],[128.935,35.112],[128.938,35.114],[128.942,35.119],[128.945,35.121],[128.948,35.123],[128.951,35.129],[128.957,35.135],[128.959,35.137],[128.962,35.135],[128.961,35.131],[128.959,35.128],[128.957,35.124],[128.958,35.119],[128.959,35.118]]]}},{"type":"Feature","id":"금정구","properties":{"code":"21110","name":"금정구","name_eng":"Geumjeong-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.109,35.305],[129.114,35.303],[129.116,35.302],[129.121,35.302],[129.123,35.301],[129.13,35.298],[129.131,35.293],[129.132,35.292],[129.128,35.289],[129.126,35.283],[129.124,35.281],[129.126,35.278],[129.125,35.274],[129.122,35.271],[129.121,35.267],[129.121,35.264],[129.123,35.262],[129.126,35.262],[129.129,35.26],[129.133,35.261],[129.134,35.259],[129.138,35.261],[129.14,35.26],[129.138,35.254],[129.142,35.251],[129.145,35.251],[129.144,35.247],[129.141,35.244],[129.142,35.242],[129.137,35.238],[129.131,35.235],[129.13,35.233],[129.13,35.231],[129.127,35.227],[129.121,35.226],[129.118,35.224],[129.117,35.222],[129.119,35.216],[129.116,35.213],[129.112,35.213],[129.11,35.21],[129.107,35.211],[129.106,35.21],[129.102,35.211],[129.101,35.213],[129.095,35.215],[129.094,35.215],[129.088,35.218],[129.086,35.219],[129.087,35.222],[129.085,35.222],[129.083,35.224],[129.081,35.223],[129.078,35.226],[129.074,35.225],[129.068,35.225],[129.062,35.226],[129.06,35.23],[129.056,35.228],[129.049,35.229],[129.047,35.23],[129.044,35.231],[129.044,35.233],[129.047,35.235],[129.047,35.238],[129.049,35.239],[129.05,35.241],[129.049,35.245],[129.048,35.246],[129.046,35.247],[129.046,35.249],[129.045,35.251],[129.049,35.255],[129.047,35.257],[129.042,35.257],[129.04,35.259],[129.037,35.261],[129.038,35.262],[129.042,35.263],[129.044,35.27],[129.046,35.271],[129.047,35.274],[129.047,35.276],[129.051,35.28],[129.053,35.281],[129.054,35.283],[129.052,35.286],[129.053,35.289],[129.056,35.292],[129.058,35.295],[129.059,35.295],[129.071,35.295],[129.074,35.291],[129.075,35.291],[129.081,35.296],[129.085,35.3],[129.086,35.302],[129.091,35.303],[129.093,35.303],[129.099,35.304],[129.106,35.306],[129.109,35.305]]]}},{"type":"Feature","id":"강서구","properties":{"code":"21120","name":"강서구","name_eng":"Gangseo-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[128.829,35.09],[128.832,35.087],[128.835,35.086],[128.835,35.063],[128.833,35.061],[128.833,35.058],[128.834,35.056],[128.838,35.053],[128.842,35.054],[128.846,35.056],[128.851,35.05],[128.85,35.047],[128.85,35.043],[128.851,35.042],[128.849,35.037],[128.848,35.036],[128.844,35.033],[128.842,35.029],[128.843,35.028],[128.843,35.024],[128.838,35.02],[128.835,35.016],[128.834,35.012],[128.837,35.009],[128.84,35.008],[128.841,35.005],[128.839,35.003],[128.837,35],[128.839,34.998],[128.836,34.997],[128.833,34.993],[128.829,34.989],[128.828,34.99],[128.83,34.993],[128.83,34.996],[128.825,34.996],[128.824,34.995],[128.822,34.997],[128.822,35.002],[128.82,35.002],[128.82,35.004],[128.823,35.005],[128.824,35.007],[128.821,35.009],[128.827,35.011],[128.827,35.014],[128.824,35.017],[128.821,35.017],[128.817,35.019],[128.813,35.02],[128.811,35.022],[128.806,35.021],[128.808,35.024],[128.812,35.023],[128.815,35.025],[128.816,35.028],[128.813,35.03],[128.81,35.03],[128.808,35.031],[128.809,35.034],[128.811,35.033],[128.813,35.038],[128.812,35.041],[128.807,35.044],[128.805,35.048],[128.8,35.048],[128.798,35.051],[128.797,35.054],[128.801,35.055],[128.805,35.056],[128.808,35.059],[128.812,35.06],[128.819,35.06],[128.822,35.061],[128.824,35.064],[128.821,35.064],[128.806,35.061],[128.805,35.067],[128.832,35.071],[128.832,35.075],[128.835,35.075],[128.835,35.078],[128.812,35.078],[128.812,35.083],[128.819,35.083],[128.819,35.084],[128.822,35.084],[128.822,35.086],[128.826,35.086],[128.826,35.088],[128.829,35.09],[128.836,35.103],[128.838,35.104],[128.842,35.106],[128.843,35.109],[128.843,35.113],[128.842,35.115],[128.838,35.115],[128.837,35.118],[128.836,35.12],[128.838,35.123],[128.835,35.126],[128.835,35.129],[128.833,35.13],[128.83,35.128],[128.827,35.128],[128.827,35.13],[128.818,35.132],[128.815,35.133],[128.811,35.137],[128.807,35.139],[128.807,35.142],[128.802,35.142],[128.802,35.146],[128.798,35.151],[128.794,35.154],[128.795,35.159],[128.797,35.159],[128.801,35.158],[128.802,35.159],[128.806,35.16],[128.809,35.159],[128.812,35.16],[128.813,35.159],[128.816,35.16],[128.822,35.157],[128.823,35.156],[128.828,35.156],[128.828,35.157],[128.834,35.157],[128.836,35.159],[128.841,35.159],[128.843,35.158],[128.844,35.16],[128.844,35.162],[128.846,35.165],[128.852,35.166],[128.858,35.167],[128.86,35.168],[128.865,35.167],[128.867,35.168],[128.872,35.165],[128.872,35.163],[128.87,35.159],[128.867,35.16],[128.865,35.158],[128.872,35.15],[128.877,35.151],[128.875,35.154],[128.875,35.157],[128.875,35.159],[128.881,35.16],[128.882,35.162],[128.879,35.162],[128.878,35.164],[128.876,35.166],[128.877,35.17],[128.872,35.172],[128.873,35.174],[128.88,35.172],[128.88,35.18],[128.881,35.183],[128.876,35.188],[128.876,35.193],[128.87,35.202],[128.874,35.204],[128.879,35.21],[128.882,35.21],[128.886,35.214],[128.889,35.215],[128.897,35.213],[128.905,35.215],[128.91,35.215],[128.905,35.22],[128.909,35.223],[128.913,35.223],[128.917,35.217],[128.92,35.216],[128.929,35.22],[128.935,35.224],[128.937,35.225],[128.94,35.227],[128.944,35.228],[128.949,35.225],[128.957,35.225],[128.967,35.227],[128.974,35.227],[128.984,35.23],[128.99,35.232],[128.994,35.234],[128.997,35.236],[128.998,35.233],[128.997,35.225],[128.995,35.213],[128.994,35.208],[128.991,35.204],[128.982,35.197],[128.977,35.193],[128.97,35.191],[128.966,35.188],[128.963,35.184],[128.963,35.164],[128.961,35.154],[128.96,35.146],[128.96,35.14],[128.96,35.137],[128.957,35.135],[128.951,35.129],[128.948,35.123],[128.945,35.121],[128.942,35.119],[128.938,35.114],[128.933,35.111],[128.933,35.108],[128.931,35.105],[128.93,35.102],[128.931,35.098],[128.93,35.095],[128.926,35.095],[128.926,35.093],[128.916,35.089],[128.912,35.086],[128.912,35.08],[128.911,35.079],[128.895,35.079],[128.895,35.086],[128.898,35.095],[128.9,35.104],[128.901,35.111],[128.902,35.114],[128.905,35.116],[128.906,35.118],[128.898,35.12],[128.894,35.115],[128.893,35.112],[128.889,35.108],[128.888,35.09],[128.883,35.082],[128.884,35.08],[128.88,35.08],[128.87,35.081],[128.868,35.083],[128.838,35.083],[128.835,35.088],[128.832,35.088],[128.825,35.095],[128.825,35.096],[128.822,35.098],[128.823,35.102],[128.825,35.102],[128.832,35.103],[128.834,35.102],[128.836,35.103]]]}},{"type":"Feature","id":"연제구","properties":{"code":"21130","name":"연제구","name_eng":"Yoenje-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.067,35.176],[129.065,35.177],[129.063,35.177],[129.062,35.18],[129.062,35.183],[129.06,35.184],[129.055,35.184],[129.051,35.185],[129.051,35.187],[129.048,35.19],[129.048,35.195],[129.053,35.192],[129.056,35.192],[129.057,35.193],[129.062,35.192],[129.064,35.194],[129.072,35.195],[129.074,35.198],[129.078,35.199],[129.082,35.198],[129.084,35.195],[129.087,35.194],[129.093,35.193],[129.097,35.193],[129.1,35.191],[129.106,35.19],[129.108,35.19],[129.112,35.189],[129.114,35.184],[129.115,35.184],[129.111,35.176],[129.107,35.178],[129.106,35.18],[129.104,35.181],[129.102,35.18],[129.097,35.179],[129.097,35.177],[129.096,35.173],[129.097,35.172],[129.095,35.168],[129.092,35.165],[129.094,35.162],[129.093,35.16],[129.089,35.161],[129.086,35.159],[129.083,35.158],[129.081,35.16],[129.078,35.164],[129.079,35.167],[129.081,35.168],[129.082,35.171],[129.079,35.173],[129.079,35.175],[129.076,35.176],[129.075,35.179],[129.073,35.179],[129.07,35.176],[129.067,35.176]]]}},{"type":"Feature","id":"수영구","properties":{"code":"21140","name":"수영구","name_eng":"Suyeong-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.121,35.174],[129.121,35.173],[129.123,35.172],[129.123,35.171],[129.124,35.17],[129.125,35.168],[129.125,35.167],[129.127,35.166],[129.129,35.164],[129.135,35.157],[129.134,35.155],[129.124,35.153],[129.124,35.156],[129.12,35.154],[129.114,35.147],[129.118,35.146],[129.118,35.14],[129.116,35.139],[129.111,35.136],[129.106,35.139],[129.102,35.143],[129.103,35.144],[129.102,35.149],[129.101,35.152],[129.099,35.155],[129.095,35.161],[129.094,35.162],[129.092,35.165],[129.095,35.168],[129.097,35.172],[129.096,35.173],[129.097,35.177],[129.097,35.179],[129.102,35.18],[129.104,35.181],[129.106,35.18],[129.107,35.178],[129.111,35.176],[129.115,35.184],[129.115,35.187],[129.118,35.181],[129.118,35.18],[129.121,35.174]]]}},{"type":"Feature","id":"사상구","properties":{"code":"21150","name":"사상구","name_eng":"Sasang-gu","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[128.991,35.194],[128.995,35.194],[129,35.192],[129,35.19],[129.004,35.19],[129.008,35.188],[129.011,35.189],[129.017,35.189],[129.021,35.188],[129.021,35.182],[129.02,35.181],[129.017,35.18],[129.014,35.177],[129.013,35.176],[129.011,35.173],[129.011,35.171],[129.013,35.169],[129.013,35.166],[129.011,35.163],[129.011,35.159],[129.016,35.155],[129.016,35.147],[129.014,35.146],[129.016,35.143],[129.012,35.137],[129.011,35.139],[129.008,35.14],[129.004,35.139],[129.002,35.141],[128.998,35.141],[128.996,35.14],[129.004,35.136],[129.003,35.134],[129.003,35.131],[129.003,35.125],[129,35.123],[128.99,35.125],[128.987,35.124],[128.982,35.12],[128.98,35.117],[128.976,35.117],[128.972,35.119],[128.964,35.122],[128.962,35.12],[128.958,35.119],[128.957,35.124],[128.959,35.128],[128.961,35.131],[128.962,35.135],[128.96,35.137],[128.96,35.14],[128.96,35.146],[128.961,35.154],[128.963,35.164],[128.963,35.184],[128.966,35.188],[128.97,35.191],[128.977,35.193],[128.982,35.197],[128.988,35.201],[128.989,35.2],[128.988,35.196],[128.991,35.196],[128.991,35.194]]]}},{"type":"Feature","id":"기장군","properties":{"code":"21310","name":"기장군","name_eng":"Gijang-gun","base_year":"2013"},"geometry":{"type":"Polygon","coordinates":[[[129.288,35.321],[129.288,35.323],[129.285,35.324],[129.285,35.326],[129.282,35.327],[129.278,35.326],[129.274,35.323],[129.268,35.322],[129.264,35.319],[129.262,35.315],[129.262,35.314],[129.261,35.31],[129.258,35.306],[129.261,35.297],[129.261,35.294],[129.26,35.291],[129.257,35.289],[129.259,35.287],[129.26,35.283],[129.257,35.282],[129.256,35.281],[129.255,35.275],[129.253,35.272],[129.247,35.272],[129.246,35.272],[129.244,35.27],[129.244,35.268],[129.243,35.266],[129.24,35.265],[129.236,35.265],[129.234,35.263],[129.234,35.261],[129.235,35.258],[129.239,35.257],[129.242,35.259],[129.245,35.26],[129.245,35.258],[129.249,35.26],[129.252,35.259],[129.251,35.256],[129.252,35.252],[129.252,35.251],[129.253,35.247],[129.25,35.244],[129.248,35.246],[129.245,35.244],[129.247,35.242],[129.248,35.239],[129.243,35.237],[129.245,35.234],[129.244,35.232],[129.242,35.229],[129.241,35.229],[129.24,35.227],[129.24,35.225],[129.239,35.223],[129.236,35.22],[129.231,35.22],[129.23,35.224],[129.227,35.223],[129.229,35.218],[129.225,35.216],[129.225,35.215],[129.222,35.213],[129.223,35.21],[129.226,35.207],[129.229,35.204],[129.23,35.201],[129.23,35.198],[129.227,35.196],[129.226,35.197],[129.225,35.193],[129.223,35.19],[129.224,35.186],[129.219,35.184],[129.217,35.187],[129.213,35.186],[129.212,35.183],[129.208,35.183],[129.207,35.185],[129.206,35.191],[129.207,35.195],[129.207,35.197],[129.199,35.2],[129.195,35.199],[129.193,35.194],[129.191,35.192],[129.188,35.189],[129.185,35.19],[129.183,35.191],[129.185,35.195],[129.183,35.198],[129.179,35.198],[129.176,35.201],[129.172,35.202],[129.17,35.201],[129.165,35.203],[129.163,35.206],[129.16,35.206],[129.16,35.21],[129.16,35.212],[129.165,35.215],[129.165,35.22],[129.169,35.225],[129.169,35.228],[129.167,35.23],[129.164,35.231],[129.161,35.234],[129.155,35.236],[129.155,35.239],[129.157,35.243],[129.156,35.244],[129.149,35.246],[129.147,35.249],[129.142,35.251],[129.138,35.254],[129.14,35.26],[129.138,35.261],[129.134,35.259],[129.133,35.261],[129.129,35.26],[129.126,35.262],[129.123,35.262],[129.121,35.264],[129.121,35.267],[129.122,35.271],[129.125,35.274],[129.126,35.278],[129.124,35.281],[129.126,35.283],[129.128,35.289],[129.132,35.292],[129.131,35.293],[129.13,35.298],[129.123,35.301],[129.121,35.302],[129.116,35.302],[129.114,35.303],[129.109,35.305],[129.111,35.308],[129.112,35.31],[129.112,35.315],[129.112,35.317],[129.114,35.32],[129.119,35.323],[129.121,35.329],[129.125,35.331],[129.126,35.333],[129.124,35.338],[129.126,35.34],[129.127,35.342],[129.128,35.344],[129.127,35.346],[129.131,35.349],[129.134,35.35],[129.135,35.353],[129.133,35.356],[129.131,35.359],[129.129,35.36],[129.127,35.362],[129.123,35.363],[129.122,35.364],[129.121,35.367],[129.124,35.368],[129.128,35.368],[129.131,35.366],[129.134,35.366],[129.139,35.366],[129.14,35.365],[129.149,35.364],[129.159,35.36],[129.163,35.357],[129.166,35.355],[129.169,35.354],[129.17,35.354],[129.174,35.352],[129.178,35.352],[129.182,35.355],[129.186,35.359],[129.19,35.36],[129.193,35.361],[129.194,35.363],[129.199,35.366],[129.198,35.371],[129.199,35.376],[129.197,35.378],[129.194,35.382],[129.199,35.389],[129.204,35.386],[129.205,35.384],[129.212,35.381],[129.215,35.38],[129.219,35.379],[129.225,35.38],[129.23,35.381],[129.235,35.38],[129.237,35.384],[129.24,35.384],[129.242,35.383],[129.245,35.384],[129.247,35.383],[129.251,35.385],[129.251,35.387],[129.253,35.387],[129.256,35.385],[129.258,35.384],[129.263,35.386],[129.266,35.387],[129.266,35.384],[129.268,35.381],[129.272,35.377],[129.273,35.375],[129.277,35.371],[129.279,35.366],[129.283,35.365],[129.282,35.364],[129.281,35.356],[129.284,35.353],[129.285,35.351],[129.283,35.349],[129.284,35.346],[129.28,35.341],[129.286,35.339],[129.289,35.34],[129.291,35.338],[129.294,35.338],[129.296,35.336],[129.304,35.336],[129.302,35.334],[129.305,35.33],[129.306,35.325],[129.304,35.322],[129.3,35.322],[129.299,35.319],[129.289,35.319],[129.288,35.321]]]}}]}');

},{}],"h9hnr":[function(require,module,exports) {
module.exports = require("618f4e2e45820b81").getBundleURL("1G2bZ") + "junggu.dd73867c.webp" + "?" + Date.now();

},{"618f4e2e45820b81":"jMDco"}],"jMDco":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"4wAkN":[function(require,module,exports) {
module.exports = require("128b1e7c7ede08d9").getBundleURL("1G2bZ") + "seogu.dccc19af.webp" + "?" + Date.now();

},{"128b1e7c7ede08d9":"jMDco"}],"7pKcc":[function(require,module,exports) {
module.exports = require("3e8223c3c77e674d").getBundleURL("1G2bZ") + "donggu.38a48e65.webp" + "?" + Date.now();

},{"3e8223c3c77e674d":"jMDco"}],"cui2q":[function(require,module,exports) {
module.exports = require("18728f59edbc97be").getBundleURL("1G2bZ") + "yeongdogu.9b288982.webp" + "?" + Date.now();

},{"18728f59edbc97be":"jMDco"}],"2JcG4":[function(require,module,exports) {
module.exports = require("bb1cf8b18cced1b2").getBundleURL("1G2bZ") + "jingu.512dacbc.webp" + "?" + Date.now();

},{"bb1cf8b18cced1b2":"jMDco"}],"2ENoz":[function(require,module,exports) {
module.exports = require("68b765281c509ab2").getBundleURL("1G2bZ") + "dongnaegu.ee0f5377.webp" + "?" + Date.now();

},{"68b765281c509ab2":"jMDco"}],"4mldW":[function(require,module,exports) {
module.exports = require("7d224ca7190e2099").getBundleURL("1G2bZ") + "namgu.6a7dd518.webp" + "?" + Date.now();

},{"7d224ca7190e2099":"jMDco"}],"Vx0FQ":[function(require,module,exports) {
module.exports = require("9499335dddb378e1").getBundleURL("1G2bZ") + "booku.7456fb69.webp" + "?" + Date.now();

},{"9499335dddb378e1":"jMDco"}],"bCgpA":[function(require,module,exports) {
module.exports = require("63ab0e53940e433a").getBundleURL("1G2bZ") + "haeundaegu.f8d3bb4c.webp" + "?" + Date.now();

},{"63ab0e53940e433a":"jMDco"}],"ifkvr":[function(require,module,exports) {
module.exports = require("4bc55548f0dc5ddc").getBundleURL("1G2bZ") + "sahagu.42444d34.webp" + "?" + Date.now();

},{"4bc55548f0dc5ddc":"jMDco"}],"lLkrv":[function(require,module,exports) {
module.exports = require("959b94d1432cb51").getBundleURL("1G2bZ") + "geumjeonggu.02bd475e.webp" + "?" + Date.now();

},{"959b94d1432cb51":"jMDco"}],"brmsc":[function(require,module,exports) {
module.exports = require("a127b9dcbda03a26").getBundleURL("1G2bZ") + "gangseogu.f95babf4.webp" + "?" + Date.now();

},{"a127b9dcbda03a26":"jMDco"}],"94FlP":[function(require,module,exports) {
module.exports = require("e45e4fdec8124c96").getBundleURL("1G2bZ") + "yeonjegu.82f5ca4b.webp" + "?" + Date.now();

},{"e45e4fdec8124c96":"jMDco"}],"hLVrP":[function(require,module,exports) {
module.exports = require("59694d26309ddcc3").getBundleURL("1G2bZ") + "suyeonggu.2928f8b4.webp" + "?" + Date.now();

},{"59694d26309ddcc3":"jMDco"}],"c6fS8":[function(require,module,exports) {
module.exports = require("e8926dc17631a1d6").getBundleURL("1G2bZ") + "sasanggu.c2512bcf.webp" + "?" + Date.now();

},{"e8926dc17631a1d6":"jMDco"}],"5lXnF":[function(require,module,exports) {
module.exports = require("e9c842753404a716").getBundleURL("1G2bZ") + "gijanggun.3e0c9df7.webp" + "?" + Date.now();

},{"e9c842753404a716":"jMDco"}]},["luORH","igcvL"], "igcvL", "parcelRequireeb63")

//# sourceMappingURL=index.5baa4167.js.map
