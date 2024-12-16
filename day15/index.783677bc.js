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
        globalObject
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
})({"lQ2LT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "83aa5a85783677bc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gdfmp":[function(require,module,exports,__globalThis) {
// @ts-check
var _iteratorExtensionsJs = require("../../../js/modules/iterator-extensions.js");
var _15Js = require("../../../js/solutions/15.js");
var _indexJs = require("../../../js/modules/index.js");
var _commonJs = require("../common.js");
const canvas = document.getElementById("canvas");
if (!(canvas instanceof HTMLCanvasElement)) throw new Error("no canvas");
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("no ctx");
const INIT_WIDTH = 300;
const INIT_HEIGHT = 300;
const INIT_SCALE = 1;
(0, _commonJs.scaleCanvasToPixelRatio)(ctx, INIT_WIDTH * INIT_SCALE, INIT_HEIGHT * INIT_SCALE);
const colors = {
    green: "#91cfa1",
    red: "#ea859a",
    yellow: "#fef59d",
    text: '#fee15b'
};
let raf = 0;
let unsubscribe = ()=>{};
/**
 * @param {string} input
 * @param {CanvasRenderingContext2D} ctx
 * @param {boolean} part2
 */ function draw(input, ctx, part2) {
    cancelAnimationFrame(raf);
    unsubscribe();
    let [map, arrows] = (0, _15Js.parseInput)(input);
    let width = window.innerWidth / 2 - 32;
    let height = width;
    if (part2) {
        map = (0, _15Js.widenMap)(map);
        width *= 2;
    }
    const mapWidth = map[0].length;
    const scale = width / mapWidth;
    (0, _commonJs.scaleCanvasToPixelRatio)(ctx, width, height);
    ctx.canvas.scrollIntoView({
        behavior: "smooth"
    });
    const drawMap = (/** @type {string[][]} */ map, /** @type {V.Vec2} */ robot)=>{
        ctx.clearRect(0, 0, width, height);
        ctx.font = `${scale}px monospace`;
        map.forEach((row, y)=>{
            row.forEach((cell, x)=>{
                ctx.fillStyle = 'white';
                ctx.fillRect(x * scale, y * scale, scale, scale);
                const padding = scale * 0.05;
                // draw floor tile
                ctx.fillStyle = colors.yellow;
                ctx.fillRect(x * scale + padding, y * scale + padding, scale - padding * 2, scale - padding * 2);
                ctx.font = `${scale}px monospace`;
                ctx.textAlign = "center";
                ctx.textBaseline = "top";
                if ((0, _indexJs.V).eq((0, _indexJs.V).vec(x, y), robot)) {
                    // draw robot emoji
                    ctx.fillStyle = colors.text;
                    ctx.fillText("\uD83E\uDD16", x * scale + scale / 2, y * scale);
                }
                if (cell === "#") {
                    // draw wall
                    ctx.fillStyle = colors.red;
                    ctx.fillRect(x * scale + padding, y * scale + padding, scale - padding * 2, scale - padding * 2);
                    ctx.fillStyle = colors.text;
                    ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2);
                }
                if (cell === "O") {
                    // draw box on the floor
                    ctx.fillStyle = colors.green;
                    ctx.fillRect(x * scale + padding, y * scale + padding, scale - padding * 2, scale - padding * 2);
                    ctx.fillStyle = colors.text;
                    ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2);
                }
                if (cell === "[") {
                    // draw box on the floor
                    ctx.fillStyle = colors.green;
                    ctx.fillRect(x * scale + padding, y * scale + padding, scale - padding, scale - padding * 2);
                    ctx.fillStyle = colors.text;
                    ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2);
                }
                if (cell === "]") {
                    // draw box on the floor
                    ctx.fillStyle = colors.green;
                    ctx.fillRect(x * scale, y * scale + padding, scale - padding, scale - padding * 2);
                    ctx.fillStyle = colors.text;
                    ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2);
                }
            });
        });
    };
    const iter = (0, _15Js.moves)(map, arrows);
    let lastDt = 0;
    raf = requestAnimationFrame(function render(dt) {
        if (dt - lastDt > 30) {
            lastDt = dt;
            const { value, done } = iter.next();
            if (done) {
                unsubscribe();
                return;
            }
            const [robot, map] = value;
            drawMap(map, robot);
        }
        raf = requestAnimationFrame(render);
    });
}
const inputForm = document.getElementById("input-form");
if (!(inputForm instanceof HTMLFormElement)) throw new Error("no form");
inputForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const input = formData.get("input")?.toString() ?? "";
    draw(input.trim(), ctx, formData.get("part2")?.toString() === "on");
});
// @ts-ignore
inputForm.querySelector("#input").textContent = `\
##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`;

},{"../../../js/modules/iterator-extensions.js":"8eMUF","../../../js/solutions/15.js":"5wz6H","../../../js/modules/index.js":"Zicik","../common.js":"8wzUn"}],"5wz6H":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useExample", ()=>useExample);
parcelHelpers.export(exports, "exampleInput", ()=>exampleInput);
parcelHelpers.export(exports, "parseInput", ()=>parseInput);
/**
 *
 * @param {string[][]} map
 * @param {V.Arrow[]} arrows
 */ parcelHelpers.export(exports, "moves", ()=>moves);
/**
 * @param {InputType} input
 */ parcelHelpers.export(exports, "part1", ()=>part1);
/**
 * @param {string[][]} map
 */ parcelHelpers.export(exports, "widenMap", ()=>widenMap);
/**
 * @param {InputType} input
 */ parcelHelpers.export(exports, "part2", ()=>part2);
var _graphJs = require("../modules/graph.js");
var _indexJs = require("../modules/index.js");
var _libJs = require("../modules/lib.js");
var _parserJs = require("../modules/parser.js");
const useExample = false;
const exampleInput = `\
##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`;
const parseInput = (0, _parserJs.t).tuple([
    (0, _indexJs.Array2d),
    (0, _parserJs.t).str().map((l)=>l.replaceAll("\n", "")).map((l)=>l.split("").map((0, _indexJs.V).asArrow))
]).parse;
const isBox = (/** @type {string} */ c)=>c === "O" || c === "[" || c === "]";
const getBoxPositions = (/** @type {string[][]} */ map, /** @type {V.Vec2} */ pos)=>(0, _indexJs.Array2d).get(map, pos) === "[" ? [
        pos,
        (0, _indexJs.V).add(pos, (0, _indexJs.V).DIR_TO_VEC.R)
    ] // []
     : (0, _indexJs.Array2d).get(map, pos) === "]" ? [
        (0, _indexJs.V).add(pos, (0, _indexJs.V).DIR_TO_VEC.L),
        pos
    ] // []
     : [
        pos
    ] // O
;
const canMove = (/** @type {string[][]} */ map, /** @type {V.Vec2} */ pos, /** @type {V.Vec2} */ dir)=>(0, _indexJs.Array2d).get(map, (0, _indexJs.V).add(pos, dir)) !== "#";
/**
 * @param {string[][]} map
 * @param {V.Vec2} pos
 * @param {V.Arrow} arrow
 */ function makeMove(map, pos, arrow) {
    const dir = (0, _indexJs.V).fromArrow(arrow);
    const targetPos = (0, _indexJs.V).add(pos, dir);
    if ((0, _indexJs.Array2d).get(map, targetPos) === "#") return pos;
    if ((0, _indexJs.Array2d).get(map, targetPos) === ".") return targetPos;
    // targetPos is a box
    const allBoxes = (0, _graphJs.dijkstra)((pos)=>getBoxPositions(map, (0, _indexJs.V).add(pos, dir)).filter((x)=>isBox((0, _indexJs.Array2d).get(map, x))), (pos)=>(0, _indexJs.V).mLen(pos, targetPos), getBoxPositions(map, targetPos), (0, _indexJs.V).toString).map((x)=>x.value).toArray().reverse();
    if (allBoxes.some((box)=>!canMove(map, box, dir))) return pos;
    for (const box of allBoxes){
        (0, _indexJs.Array2d).set(map, (0, _indexJs.V).add(box, dir), (0, _indexJs.Array2d).get(map, box));
        (0, _indexJs.Array2d).set(map, box, ".");
    }
    return targetPos;
}
function* moves(map, arrows) {
    const start = (0, _indexJs.Array2d).traverse(map).find((p)=>p.value === "@").pos;
    (0, _indexJs.Array2d).set(map, start, ".");
    let cur = start;
    yield (0, _libJs.tuple)(cur, map, "start");
    for (const arrow of arrows){
        cur = makeMove(map, cur, arrow);
        yield (0, _libJs.tuple)(cur, map, arrow);
    }
}
function part1(input) {
    const [map, arrows] = input;
    const lst = moves(map, arrows).last();
    return (0, _indexJs.Array2d).traverse(lst[1]).filter((p)=>p.value === "O").map((p)=>(0, _indexJs.V).y(p.pos) * 100 + (0, _indexJs.V).x(p.pos)).sum();
}
function widenMap(map) {
    return map.map((row)=>row.flatMap((cell)=>{
            return cell === "#" ? [
                "#",
                "#"
            ] : cell === "O" ? [
                "[",
                "]"
            ] : [
                cell,
                "."
            ];
        }));
}
function part2(input) {
    const [map, arrows] = input;
    const wideMap = widenMap(map);
    const lst = moves(wideMap, arrows).last();
    return (0, _indexJs.Array2d).traverse(lst[1]).filter((p)=>p.value === "[").map((p)=>(0, _indexJs.V).y(p.pos) * 100 + (0, _indexJs.V).x(p.pos)).sum();
}

},{"../modules/graph.js":"hSzmA","../modules/index.js":"Zicik","../modules/lib.js":"evqQV","../modules/parser.js":"eJ4CG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ4CG":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "t", ()=>t);
var _indexJs = require("./index.js");
/**
 * @param {string} strVal
 */ function tryGetSeparator(strVal) {
    const separators = [
        "\n\n",
        "\n",
        " -> ",
        ", ",
        ",",
        " - ",
        " ",
        "-"
    ];
    for (const separator of separators){
        if (strVal.includes(separator)) return separator;
    }
    return null;
}
/**
 * @template T
 *
 * @typedef {Object} ParserRegistryItem
 * @property {(input: string) => boolean} check
 * @property {(input: string, key?: string) => T} parse
 *
 */ /**
 * @template {ParserRegistryItem<unknown>} T
 *
 * @typedef {T & {withSeparator: (separator: string) => T}} WithSeparator
 */ /**
 * @template {Record<string, ParserRegistryItem<unknown>>} T
 *
 * @param {T} parsers
 * @returns {T}
 */ function registerParsers(parsers) {
    return parsers;
}
const PARSERS = registerParsers({
    int: /** @type {const} */ {
        name: "int",
        check: (key)=>key === "int",
        parse: (strVal)=>parseInt(strVal, 10)
    },
    str: /** @type {const} */ {
        name: "str",
        check: (key)=>key === "str",
        parse: (strVal)=>strVal
    },
    vec: /** @type {const} */ {
        name: "vec",
        check: (key)=>key === "vec",
        parse: (strVal)=>{
            const separator = tryGetSeparator(strVal);
            if (!separator) throw new Error(`Invalid vec: ${strVal}`);
            const [x, y] = strVal.split(separator).map(Number);
            return (0, _indexJs.V).vec(x, y);
        }
    },
    vec3: /** @type {const} */ {
        name: "vec3",
        check: (key)=>key === "vec3",
        parse: (strVal)=>{
            const separator = tryGetSeparator(strVal);
            if (!separator) throw new Error(`Invalid vec3: ${strVal}`);
            const [x, y, z] = strVal.split(separator).map(Number);
            return (0, _indexJs.V3).vec3(x, y, z);
        }
    },
    arr: /** @type {const} */ {
        name: "arr",
        check: (key)=>key.endsWith("[]"),
        parse: (strVal, key = "")=>{
            const type = key.slice(0, -2);
            const parser = getParserByType(type);
            if (!parser) throw new Error(`Invalid array type "${type}" in "${key}"`);
            const separator = tryGetSeparator(strVal) ?? ",";
            return strVal.split(separator).filter((x)=>x !== "").map((x)=>parser.parse(x.trim(), type));
        }
    },
    tuple: /** @type {const} */ {
        name: "tuple",
        check: (key)=>key.startsWith("(") && key.endsWith(")"),
        parse: (strVal, key = "")=>{
            const types = key.slice(1, -1).split(",");
            const separator = tryGetSeparator(strVal) ?? ",";
            return strVal.split(separator).map((x, i)=>{
                const parser = getParserByType(types[i]);
                if (!parser) throw new Error(`Invalid tuple type "${types[i]}" in "${key}"`);
                return parser.parse(x, types[i]);
            });
        }
    }
});
/**
 * @param {string} type
 * @returns {ParserRegistryItem<unknown> | null}
 */ function getParserByType(type) {
    for(const key in PARSERS){
        if (PARSERS[/** @type {keyof typeof PARSERS} */ key].check(type)) return PARSERS[/** @type {keyof typeof PARSERS} */ key];
    }
    return null;
}
/**
 * @template T
 *
 * @param {string} strVal
 * @param {string} type
 * @returns {T}
 */ function parse(strVal, type) {
    const parser = getParserByType(type);
    if (!parser) throw new Error(`Invalid type "${type}"`);
    return /** @type {T} */ parser.parse(strVal, type);
}
/**
 * @template T
 *
 * @typedef {Object} Parser
 * @property {(strVal: string) => T} parse
 */ const commonTypes = {
    int: ()=>mappableParser(PARSERS.int),
    str: ()=>mappableParser(PARSERS.str),
    vec: ()=>mappableParser(PARSERS.vec),
    vec3: ()=>mappableParser(PARSERS.vec3),
    /**
	 * @template T
	 *
	 * @param {Parser<T>} type
	 * @param {string | RegExp} [separator]
	 */ arr: (type, separator)=>mappableParser({
            parse: (strVal)=>{
                return strVal.split(separator ?? tryGetSeparator(strVal) ?? ",").map((x)=>x.trim()).filter((x)=>x !== "").map((x)=>type.parse(x));
            }
        }),
    /**
	 * @template {Parser<unknown>[]} T
	 *
	 * @param {import("ts-toolbelt").F.Narrow<T>} types
	 * @param {string} [separator]
	 */ tuple: (types, separator)=>mappableParser({
            /**
			 * @param {string} strVal
			 * @returns {{[K in keyof T]: T[K] extends Parser<infer U> ? U : never}}
			 */ parse: (strVal)=>{
                // @ts-ignore
                return strVal.split(separator ?? tryGetSeparator(strVal) ?? ",").map((x, i)=>types[i].parse(x));
            }
        }),
    /**
	 * @template {readonly string[]} T
	 *
	 * @param {T} values
	 */ enum: (...values)=>mappableParser({
            /**
			 * @param {string} strVal
			 * @returns {T[number]}
			 */ parse: (strVal)=>{
                // @ts-ignore
                if (!values.includes(strVal)) throw new Error(`Invalid enum value "${strVal}"`);
                return strVal;
            }
        })
};
/**
 * @template T
 * @param {Parser<T>} parser
 */ function mappableParser(parser) {
    return {
        ...parser,
        /**
		 * @template U
		 * @param {(val: T) => U} fn
		 */ map: (fn)=>mappableParser({
                ...parser,
                parse: (x)=>fn(parser.parse(x))
            })
    };
}
/**
 * @template {(string)[]} T
 *
 * @param {TemplateStringsArray} strings
 * @param {T} keys
 */ function tpl(strings, ...keys) {
    /**
	 * @param {string} input
	 * @returns {{[P in T[number] as import("./types.js").TemplateKey<P>]: import("./types.js").TemplateValue<P> }}
	 */ function parseInternal(input) {
        /** @type {Record<string, any>} */ const model = {};
        let lastIndex = 0;
        for(let i = 0; i < keys.length; i++){
            const start = strings[i].length + lastIndex;
            const end = strings[i + 1] ? input.indexOf(strings[i + 1], start) : input.length;
            const strVal = input.slice(start, end);
            const [key, type] = keys[i].split("|");
            model[key] = parse(strVal, type);
            lastIndex = end;
        }
        return /** @type {any} */ model;
    }
    return mappableParser({
        parse: parseInternal
    });
}
/**
 * @template {string} K
 * @template T
 *
 * @param {K} name
 * @param {Parser<T>} parser
 * @returns {NamedParser<K, T>}
 */ function named(name, parser) {
    return {
        ...parser,
        name
    };
}
/**
 * @template {string} K
 * @template T
 *
 * @typedef {object} NamedParser
 *
 * @property {(strVal: string) => T} parse
 * @property {K} name
 */ /**
 * @template {NamedParser<any, any>[]} T
 *
 * @param {TemplateStringsArray} strings
 * @param  {T} keys
 */ function tpl2(strings, ...keys) {
    /**
	 * @param {string} input
	 * @returns {{[P in T[number] as P['name']]: ReturnType<P['parse']> }}
	 */ function parseInternal(input) {
        /** @type {Record<string, any>} */ const model = {};
        let lastIndex = 0;
        for(let i = 0; i < keys.length; i++){
            const start = strings[i].length + lastIndex;
            const end = strings[i + 1] ? input.indexOf(strings[i + 1], start) : input.length;
            const strVal = input.slice(start, end);
            const namedParser = keys[i];
            model[namedParser.name] = namedParser.parse(strVal);
            lastIndex = end;
        }
        return /** @type {any} */ model;
    }
    return mappableParser({
        parse: parseInternal
    });
}
const t = {
    ...commonTypes,
    named,
    tpl,
    tpl2
};

},{"./index.js":"Zicik","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lQ2LT","gdfmp"], "gdfmp", "parcelRequire94c2")

//# sourceMappingURL=index.783677bc.js.map
