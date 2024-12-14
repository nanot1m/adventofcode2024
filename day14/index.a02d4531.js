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
})({"fmZhM":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8f79f1b7a02d4531";
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

},{}],"aZTvN":[function(require,module,exports,__globalThis) {
// @ts-check
var _iteratorExtensionsJs = require("../../../js/modules/iterator-extensions.js");
var _14Js = require("../../../js/solutions/14.js");
var _indexJs = require("../../../js/modules/index.js");
var _commonJs = require("../common.js");
const canvas = document.getElementById("canvas");
if (!(canvas instanceof HTMLCanvasElement)) throw new Error("no canvas");
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("no ctx");
(0, _commonJs.scaleCanvasToPixelRatio)(ctx, 100, 100);
let raf = 0;
let unsubscribe = ()=>{};
/**
 * @param {string} input
 * @param {CanvasRenderingContext2D} ctx
 */ function draw(input, ctx) {
    cancelAnimationFrame(raf);
    unsubscribe();
    const robots = (0, _14Js.parseInput)(input);
    const width = 101;
    const height = 103;
    const scale = 4 // Math.min(10, Math.max(2, 200 / width))
    ;
    (0, _commonJs.scaleCanvasToPixelRatio)(ctx, width * scale, height * scale);
    ctx.canvas.scrollIntoView({
        behavior: "smooth"
    });
    const drawRobots = (/** @type {{ pos: V.Vec2; vel: V.Vec2; }[]} */ robots)=>{
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width * scale, height * scale);
        for (const robot of robots){
            ctx.fillStyle = "green";
            ctx.fillRect(robot.pos[0] * scale, robot.pos[1] * scale, scale, scale);
        }
    };
    const timeInput = document.getElementById("time");
    const timeOutput = document.getElementById("time-output");
    if (!(timeInput instanceof HTMLInputElement)) throw new Error("no input");
    if (!(timeOutput instanceof HTMLSpanElement)) throw new Error("no output");
    let time = 0;
    const refreshRobotDisplay = function() {
        const t = parseInt(this.value);
        if (isNaN(t)) return;
        time = t;
        const newRobots = robots.map((robot)=>({
                pos: (0, _14Js.calc)(robot.pos, robot.vel, t, width, height),
                vel: robot.vel
            }));
        drawRobots(newRobots);
        const timeStr = t.toString();
        timeOutput.textContent = timeStr;
    };
    timeInput.disabled = false;
    timeInput.addEventListener("input", refreshRobotDisplay);
    unsubscribe = ()=>timeInput.removeEventListener("input", refreshRobotDisplay);
    raf = requestAnimationFrame(function render() {
        let newRobots = robots;
        for(let i = 0; i < 10; i++){
            time++;
            newRobots = robots.map((robot)=>({
                    pos: (0, _14Js.calc)(robot.pos, robot.vel, time, width, height),
                    vel: robot.vel
                }));
            const timeStr = time.toString();
            timeOutput.textContent = timeStr;
            timeInput.value = timeStr;
            if ((0, _14Js.robotsMatchesPattern)(newRobots, (0, _14Js.pattern))) {
                drawRobots(newRobots);
                return;
            }
        }
        drawRobots(newRobots);
        raf = requestAnimationFrame(render);
    });
}
const inputForm = document.getElementById("input-form");
if (!(inputForm instanceof HTMLFormElement)) throw new Error("no form");
inputForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const input = formData.get("input")?.toString() ?? "";
    draw(input.trim(), ctx);
});

},{"../../../js/solutions/14.js":"gNXSX","../../../js/modules/index.js":"Zicik","../common.js":"8wzUn","../../../js/modules/iterator-extensions.js":"8eMUF"}],"gNXSX":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useExample", ()=>useExample);
parcelHelpers.export(exports, "exampleInput", ()=>exampleInput);
parcelHelpers.export(exports, "parseInput", ()=>parseInput);
/**
 * @param {V.Vec2} pos
 * @param {V.Vec2} vel
 * @param {number} t
 * @param {number} width
 * @param {number} height
 */ parcelHelpers.export(exports, "calc", ()=>calc);
/**
 * @param {InputType} input
 */ parcelHelpers.export(exports, "part1", ()=>part1);
/**
 * @param {InputType} robots
 * @param {string} pattern
 */ parcelHelpers.export(exports, "robotsMatchesPattern", ()=>robotsMatchesPattern);
/**
 * @param {number} width
 * @param {number} height
 */ parcelHelpers.export(exports, "next", ()=>next);
parcelHelpers.export(exports, "pattern", ()=>pattern);
/**
 * @param {InputType} input
 */ parcelHelpers.export(exports, "part2", ()=>part2);
var _indexJs = require("../modules/index.js");
var _itertoolsJs = require("../modules/itertools.js");
var _map2DJs = require("../modules/map2d.js");
var _parserJs = require("../modules/parser.js");
const useExample = false;
const exampleInput = `\
p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`;
/** @typedef {ReturnType<typeof parseInput>} InputType */ const lineParser = (0, _parserJs.t).tpl`p=${"pos|vec"} v=${"vel|vec"}`;
const parseInput = (0, _parserJs.t).arr(lineParser).parse;
function calc(pos, vel, t, width, height) {
    const target = (0, _indexJs.V).add(pos, (0, _indexJs.V).scale(vel, t));
    return (0, _indexJs.V).vec((0, _indexJs.Lib).mod(target[0], width), (0, _indexJs.Lib).mod(target[1], height));
}
/**
 * @param {V.Vec2[]} positions
 * @param {number} width
 * @param {number} height
 */ function printDebug(positions, width, height, chWidth = 1) {
    const debugMap = new (0, _map2DJs.Map2d)();
    for (const pos of positions)debugMap.set(pos, (debugMap.get(pos) ?? 0) + 1);
    const str = debugMap.toString({
        topLeftPos: (0, _indexJs.V).vec(0, 0),
        botRightPos: (0, _indexJs.V).vec(width - 1, height - 1),
        valToString: (v)=>v ? "#".repeat(chWidth) : ".".repeat(chWidth)
    });
    return str;
}
function part1(input) {
    const width = 101;
    const height = 103;
    const cx = (width - 1) / 2;
    const cy = (height - 1) / 2;
    return input.values().map((r)=>calc(r.pos, r.vel, 100, width, height)).filter((p)=>(0, _indexJs.V).x(p) !== cx && (0, _indexJs.V).y(p) !== cy).groupBy((pos)=>{
        if ((0, _indexJs.V).x(pos) < cx && (0, _indexJs.V).y(pos) < cy) return 1;
        if ((0, _indexJs.V).x(pos) > cx && (0, _indexJs.V).y(pos) < cy) return 2;
        if ((0, _indexJs.V).x(pos) < cx && (0, _indexJs.V).y(pos) > cy) return 3;
        return 4;
    }).values().map((x)=>x.length).multiply();
}
/**
 * @param {string} str
 * @param {string} pattern
 */ function stringIncludesPattern(str, pattern) {
    const lines = str.split("\n");
    const patternLines = pattern.split("\n");
    const res = lines.values().windowed(patternLines.length).find((window)=>window.every((line, i)=>line.includes(patternLines[i])));
    return !!res;
}
function robotsMatchesPattern(robots, pattern) {
    const str = printDebug(robots.map((r)=>r.pos), 101, 103, 1);
    return stringIncludesPattern(str, pattern);
}
function next(width, height) {
    return (/** @type {InputType} */ r)=>r.map(({ pos, vel })=>({
                pos: calc(pos, vel, 1, width, height),
                vel
            }));
}
const pattern = `\
....#....
...###...
..#####..
.#######.
`;
function part2(input) {
    const w = 101;
    const h = 103;
    return (0, _itertoolsJs.iterate)(input, next(w, h)).takeUntil((r)=>robotsMatchesPattern(r, pattern)).count();
}

},{"../modules/index.js":"Zicik","../modules/itertools.js":"hlPOX","../modules/map2d.js":"4JAEt","../modules/parser.js":"eJ4CG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Zicik":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "V", ()=>_vecJs);
parcelHelpers.export(exports, "V3", ()=>_vec3Js);
parcelHelpers.export(exports, "Lib", ()=>_libJs);
parcelHelpers.export(exports, "Itertools", ()=>_itertoolsJs);
parcelHelpers.export(exports, "PriorityQueue", ()=>(0, _priorityQueueJs.PriorityQueue));
parcelHelpers.export(exports, "Graph", ()=>_graphJs);
parcelHelpers.export(exports, "Array2d", ()=>_array2DJs);
var _vecJs = require("./vec.js");
var _vec3Js = require("./vec3.js");
var _libJs = require("./lib.js");
var _itertoolsJs = require("./itertools.js");
var _priorityQueueJs = require("./priority-queue.js");
var _graphJs = require("./graph.js");
var _array2DJs = require("./array2d.js");

},{"./vec.js":"3tqfB","./vec3.js":"1RnTW","./lib.js":"evqQV","./itertools.js":"hlPOX","./priority-queue.js":"2eIv4","./graph.js":"hSzmA","./array2d.js":"70n2o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tqfB":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Allows compare vecs by reference, e.g. `vec(1, 2) === vec(1, 2)` will be true
 */ parcelHelpers.export(exports, "enableCachedVec", ()=>enableCachedVec);
parcelHelpers.export(exports, "vec", ()=>vec);
parcelHelpers.export(exports, "DIR_TO_VEC", ()=>DIR_TO_VEC);
parcelHelpers.export(exports, "DIRS_4", ()=>DIRS_4);
parcelHelpers.export(exports, "DIRS_8", ()=>DIRS_8);
parcelHelpers.export(exports, "DIRS_4_DIAG", ()=>DIRS_4_DIAG);
parcelHelpers.export(exports, "around", ()=>around);
parcelHelpers.export(exports, "asDir", ()=>asDir);
parcelHelpers.export(exports, "signed", ()=>signed);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "cross", ()=>cross);
parcelHelpers.export(exports, "dot", ()=>dot);
parcelHelpers.export(exports, "fromDir", ()=>fromDir);
parcelHelpers.export(exports, "zero", ()=>zero);
parcelHelpers.export(exports, "x", ()=>x);
parcelHelpers.export(exports, "y", ()=>y);
parcelHelpers.export(exports, "isVec", ()=>isVec);
parcelHelpers.export(exports, "eq", ()=>eq);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "neg", ()=>neg);
/**
 * @param {Vec2} start
 * @param {Vec2} end
 */ parcelHelpers.export(exports, "segment", ()=>segment);
parcelHelpers.export(exports, "ZERO", ()=>ZERO);
parcelHelpers.export(exports, "len", ()=>len);
parcelHelpers.export(exports, "cLen", ()=>cLen);
parcelHelpers.export(exports, "mLen", ()=>mLen);
parcelHelpers.export(exports, "inRange", ()=>inRange);
parcelHelpers.export(exports, "toString", ()=>toString);
var _indexJs = require("./index.js");
/**
 * @typedef {readonly [x: number, y: number] & {__opaque: 'StructVec2'}} Vec2
 */ /**
 * @typedef {"U" | "R"| "D" | "L"} Dir
 */ /**
 * @param {number} x
 * @param {number} y
 * @returns {Vec2}
 */ const cache = new Map();
function enableCachedVec() {
    vec = (x, y)=>(0, _indexJs.Lib).getOrUpdate(cache, `${x},${y}`, ()=>[
                x,
                y
            ]);
}
let vec = (x, y)=>/** @type {any} */ [
        x,
        y
    ];
const DIR_TO_VEC = {
    U: vec(0, -1),
    D: vec(0, 1),
    L: vec(-1, 0),
    R: vec(1, 0)
};
const DIRS_4 = [
    DIR_TO_VEC.U,
    DIR_TO_VEC.R,
    DIR_TO_VEC.D,
    DIR_TO_VEC.L
];
const DIRS_8 = [
    vec(-1, -1),
    vec(0, -1),
    vec(1, -1),
    vec(-1, 0),
    vec(1, 0),
    vec(-1, 1),
    vec(0, 1),
    vec(1, 1)
];
const DIRS_4_DIAG = [
    vec(-1, -1),
    vec(1, -1),
    vec(-1, 1),
    vec(1, 1)
];
const around = (/** @type {Vec2} */ vec, dirs = DIRS_8)=>dirs.map((d)=>add(vec, d));
const asDir = (dir)=>{
    if (dir in DIR_TO_VEC) return /** @type {Dir} */ dir;
    throw new Error(`Invalid direction: ${dir}`);
};
const signed = ([x, y])=>vec(Math.sign(x), Math.sign(y));
const add = ([x1, y1], [x2, y2])=>vec(x1 + x2, y1 + y2);
const sub = ([x1, y1], [x2, y2])=>vec(x1 - x2, y1 - y2);
const scale = ([x, y], s)=>vec(x * s, y * s);
const cross = ([x1, y1], [x2, y2])=>x1 * y2 - y1 * x2;
const dot = ([x1, y1], [x2, y2])=>x1 * x2 + y1 * y2;
const fromDir = (dir)=>DIR_TO_VEC[dir];
const zero = ()=>vec(0, 0);
const x = (vec)=>vec[0];
const y = (vec)=>vec[1];
const isVec = (arg)=>Array.isArray(arg) && arg.length === 2 && typeof arg[0] === "number" && typeof arg[1] === "number";
const eq = (vecA, vecB)=>vecA[0] === vecB[0] && vecA[1] === vecB[1];
const min = (vecA, vecB)=>vec(Math.min(vecA[0], vecB[0]), Math.min(vecA[1], vecB[1]));
const max = (vecA, vecB)=>vec(Math.max(vecA[0], vecB[0]), Math.max(vecA[1], vecB[1]));
const neg = (vecA)=>vec(-vecA[0], -vecA[1]);
function* segment(start, end) {
    const delta = sub(end, start);
    const dir = signed(delta);
    const steps = cLen(start, end);
    let pos = start;
    yield pos;
    for(let i = 0; i < steps; i++){
        pos = add(pos, dir);
        yield pos;
    }
}
const ZERO = zero();
const len = (vec)=>Math.sqrt(vec[0] ** 2 + vec[1] ** 2);
const cLen = (vecA, vecB = zero())=>Math.max(Math.abs(vecA[0] - vecB[0]), Math.abs(vecA[1] - vecB[1]));
const mLen = (vecA, vecB = zero())=>Math.abs(vecA[0] - vecB[0]) + Math.abs(vecA[1] - vecB[1]);
const inRange = (vec, min, max)=>vec[0] >= min[0] && vec[0] <= max[0] && vec[1] >= min[1] && vec[1] <= max[1];
const toString = ([x, y])=>`${x},${y}`;

},{"./index.js":"Zicik","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"1RnTW":[function(require,module,exports,__globalThis) {
// @ts-check
/**
 * @typedef {[x: number, y: number, z: number]} Vec3
 */ /**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {Vec3}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vec3", ()=>vec3);
parcelHelpers.export(exports, "x", ()=>x);
parcelHelpers.export(exports, "y", ()=>y);
parcelHelpers.export(exports, "z", ()=>z);
parcelHelpers.export(exports, "zero3", ()=>zero3);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "sub", ()=>sub);
parcelHelpers.export(exports, "rot", ()=>rot);
parcelHelpers.export(exports, "min", ()=>min);
parcelHelpers.export(exports, "max", ()=>max);
parcelHelpers.export(exports, "mLen", ()=>mLen);
/**
 *
 * @param {Vec3} start
 * @param {Vec3} end
 */ parcelHelpers.export(exports, "line", ()=>line);
parcelHelpers.export(exports, "dot", ()=>dot);
parcelHelpers.export(exports, "normalized", ()=>normalized);
parcelHelpers.export(exports, "cross", ()=>cross);
parcelHelpers.export(exports, "isZero", ()=>isZero);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "magnitudeSquared", ()=>magnitudeSquared);
const vec3 = (x, y, z)=>[
        x,
        y,
        z
    ];
const x = (vec)=>vec[0];
const y = (vec)=>vec[1];
const z = (vec)=>vec[2];
const zero3 = ()=>[
        0,
        0,
        0
    ];
const add = (vecA, vecB)=>[
        vecA[0] + vecB[0],
        vecA[1] + vecB[1],
        vecA[2] + vecB[2]
    ];
const sub = (vecA, vecB)=>[
        vecA[0] - vecB[0],
        vecA[1] - vecB[1],
        vecA[2] - vecB[2]
    ];
const rot = (vec, rot)=>{
    const [x, y, z] = vec;
    const [xRot, yRot, zRot] = rot;
    return [
        x * xRot[0] + y * xRot[1] + z * xRot[2],
        x * yRot[0] + y * yRot[1] + z * yRot[2],
        x * zRot[0] + y * zRot[1] + z * zRot[2]
    ];
};
const min = (vecA, vecB)=>[
        Math.min(vecA[0], vecB[0]),
        Math.min(vecA[1], vecB[1]),
        Math.min(vecA[2], vecB[2])
    ];
const max = (vecA, vecB)=>[
        Math.max(vecA[0], vecB[0]),
        Math.max(vecA[1], vecB[1]),
        Math.max(vecA[2], vecB[2])
    ];
const mLen = (vecA, vecB = zero3())=>Math.abs(vecA[0] - vecB[0]) + Math.abs(vecA[1] - vecB[1]) + Math.abs(vecA[2] - vecB[2]);
function* line(start, end) {
    const delta = vec3(Math.sign(end[0] - start[0]), Math.sign(end[1] - start[1]), Math.sign(end[2] - start[2]));
    let current = start;
    while(mLen(current, end) > 0){
        yield current;
        current = add(current, delta);
    }
    yield end;
}
const dot = (vecA, vecB)=>vecA[0] * vecB[0] + vecA[1] * vecB[1] + vecA[2] * vecB[2];
const normalized = (vec)=>{
    const len = Math.sqrt(dot(vec, vec));
    return [
        vec[0] / len,
        vec[1] / len,
        vec[2] / len
    ];
};
const cross = (vecA, vecB)=>[
        vecA[1] * vecB[2] - vecA[2] * vecB[1],
        vecA[2] * vecB[0] - vecA[0] * vecB[2],
        vecA[0] * vecB[1] - vecA[1] * vecB[0]
    ];
const isZero = (vec)=>vec[0] === 0 && vec[1] === 0 && vec[2] === 0;
const scale = (vec, factor)=>[
        vec[0] * factor,
        vec[1] * factor,
        vec[2] * factor
    ];
const magnitudeSquared = (vec)=>dot(vec, vec);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evqQV":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {T} x
 * @returns {T}
 * @template T
 */ parcelHelpers.export(exports, "id", ()=>id);
/**
 * @param {T[]} xs
 * @param {(arg: T) => string | number} fn
 *
 * @template T
 */ parcelHelpers.export(exports, "minBy", ()=>minBy);
/**
 * @param {T[]} xs
 * @param {(arg: T) => string | number} fn
 *
 * @template T
 */ parcelHelpers.export(exports, "maxBy", ()=>maxBy);
/**
 * @param {number[]} xs
 */ parcelHelpers.export(exports, "min", ()=>min);
/**
 * @param {number[]} xs
 */ parcelHelpers.export(exports, "max", ()=>max);
/**
 *
 * @param {T[]} xs
 * @param {T[][]} yss
 * @returns {T[][]}
 *
 * @template T
 */ parcelHelpers.export(exports, "zip", ()=>zip);
/**
 * @param {string} input
 */ parcelHelpers.export(exports, "readLines", ()=>readLines);
/**
 * @param {string} input
 */ parcelHelpers.export(exports, "readBlocks", ()=>readBlocks);
/**
 * @param {string} input
 * @returns
 */ parcelHelpers.export(exports, "readIntLines", ()=>readIntLines);
/**
 * @param {string} input
 * @param {string} [separator]
 */ parcelHelpers.export(exports, "readIntArr", ()=>readIntArr);
parcelHelpers.export(exports, "mod", ()=>mod);
/**
 *
 * @param {T} value
 * @template T
 */ parcelHelpers.export(exports, "functor", ()=>functor);
/**
 * @param {T[]} xs
 * @param {number} n
 * @template T
 */ parcelHelpers.export(exports, "cycle", ()=>cycle);
/**
 * @param {T[]} xs
 * @param {number} n
 * @template T
 */ parcelHelpers.export(exports, "at", ()=>at);
/**
 * @param {number} a
 * @param {number} b
 * @returns
 */ parcelHelpers.export(exports, "add", ()=>add);
/**
 * @param {number} a
 * @param {number} b
 * @returns
 */ parcelHelpers.export(exports, "mul", ()=>mul);
/**
 *
 * @param {number[][]} m1
 * @param {number[][]} m2
 */ parcelHelpers.export(exports, "mulMatrix", ()=>mulMatrix);
/**
 *
 * @param {Record<T, U> | Map<T, U>} map
 * @param {T} key
 * @param {() => U} getValue
 * @returns
 *
 * @template {string | number | symbol} T
 * @template U
 */ parcelHelpers.export(exports, "getOrUpdate", ()=>getOrUpdate);
/**
 *  @param {number[][]} mat1
 * @param  {...number[][]} mats
 */ parcelHelpers.export(exports, "mulMatrices", ()=>mulMatrices);
/**
 * @param {number} a
 * @param {number} b
 * @returns
 */ parcelHelpers.export(exports, "compareAsc", ()=>compareAsc);
/**
 * @param {number} a
 * @param {number} b
 * @returns
 */ parcelHelpers.export(exports, "compareDesc", ()=>compareDesc);
/**
 *
 * @param {T[]} xs
 * @param {number} i
 * @param {(arg: T) => T} fn
 *
 * @template T
 */ parcelHelpers.export(exports, "update", ()=>update);
/**
 * @param {number} x
 */ parcelHelpers.export(exports, "inc", ()=>inc);
/**
 * @param {T} xs
 * @param {number} n
 * @returns {[T, T]}
 *
 * @template {{slice(start: number, end?: number): T}} T
 */ parcelHelpers.export(exports, "splitAt", ()=>splitAt);
/**
 *
 * @param {T[][]} arr
 * @param {boolean} clockwise
 * @returns {T[][]}
 *
 * @template T
 */ parcelHelpers.export(exports, "rotate2d", ()=>rotate2d);
/**
 *
 * @param {string[]} strings
 * @param {boolean} clockwise
 */ parcelHelpers.export(exports, "rotateStrings2d", ()=>rotateStrings2d);
/**
 *
 * @param {string} str
 * @param {boolean} [clockwise]
 *
 * @returns {string}
 */ parcelHelpers.export(exports, "rotateString2d", ()=>rotateString2d);
/**
 *
 * @param  {T} args
 * @returns {T}
 *
 * @template {unknown[]} T
 */ parcelHelpers.export(exports, "tuple", ()=>tuple);
parcelHelpers.export(exports, "rotate", ()=>rotate);
/**
 * Solve a square equation of the form ax^2 + bx + c = 0
 * @param {number} a The coefficient of x^2
 * @param {number} b The coefficient of x
 * @param {number} c The constant term
 * @returns {[] | [number] | [number, number]} An array of solutions for x
 */ parcelHelpers.export(exports, "solveSquareEquation", ()=>solveSquareEquation);
/**
 * Returns the greatest common divisor of two numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */ parcelHelpers.export(exports, "gcd", ()=>gcd);
/**
 * Returns the least common multiple of two numbers
 *
 * @param {number} a
 * @param {number} b
 */ parcelHelpers.export(exports, "lcm", ()=>lcm);
/**
 * @template T
 *
 * @param {T[]} xs
 * @param {number} count
 * @param {T[][]} [result]
 * @param {T[]} [current]
 * @returns {T[][]}
 */ parcelHelpers.export(exports, "combinations", ()=>combinations);
/**
 * @template {Iterable<any>} T
 * @param {T} xs
 * @param {T} delimiters
 * @param {number} count
 *
 * @returns {T extends string ? string : T extends Iterable<infer U> ? U[] : never}
 */ parcelHelpers.export(exports, "repeatWithDelimiters", ()=>repeatWithDelimiters);
/**
 * @param {object} x
 */ parcelHelpers.export(exports, "toString", ()=>toString);
/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */ parcelHelpers.export(exports, "isInRange", ()=>isInRange);
parcelHelpers.export(exports, "identity", ()=>identity);
var _indexJs = require("./index.js");
var _itertoolsJs = require("./itertools.js");
var _vec3Js = require("./vec3.js");
function id(x) {
    return x;
}
function minBy(xs, fn) {
    return xs.reduce((a, b)=>fn(a) < fn(b) ? a : b);
}
function maxBy(xs, fn) {
    return xs.reduce((a, b)=>fn(a) > fn(b) ? a : b);
}
function min(xs) {
    return minBy(xs, id);
}
function max(xs) {
    return maxBy(xs, id);
}
function zip(xs, ...yss) {
    const minLength = minBy(yss, (ys)=>ys.length).length;
    return xs.slice(0, minLength).map((val, i)=>yss.reduce((a, arr)=>{
            a.push(arr[i]);
            return a;
        }, [
            val
        ]));
}
function readLines(input) {
    return input.split("\n");
}
function readBlocks(input) {
    return input.split("\n\n");
}
function readIntLines(input) {
    return readLines(input).map(Number);
}
function readIntArr(input, separator = ",") {
    return input.split(separator).map(Number);
}
const mod = (n, m)=>(n % m + m) % m;
function functor(value) {
    return {
        /**
		 *
		 * @param {(arg: T) => R} fn
		 * @template R
		 */ map (fn) {
            return functor(fn(value));
        },
        get () {
            return value;
        }
    };
}
function cycle(xs, n) {
    return xs.slice(n).concat(xs.slice(0, n));
}
function at(xs, n) {
    if (n < 0) n = xs.length + n;
    return xs[n];
}
function add(a, b) {
    return a + b;
}
function mul(a, b) {
    return a * b;
}
function mulMatrix(m1, m2) {
    /** @type {number[][]} */ const result = [];
    for(let i = 0; i < m1.length; i++){
        result[i] = [];
        for(let j = 0; j < m2[0].length; j++){
            let sum = 0;
            for(let k = 0; k < m1[0].length; k++)sum += m1[i][k] * m2[k][j];
            result[i][j] = sum;
        }
    }
    return result;
}
function getOrUpdate(map, key, getValue) {
    if (map instanceof Map) {
        if (!map.has(key)) map.set(key, getValue());
        return map.get(key);
    }
    if (!(key in map)) map[key] = getValue();
    return map[key];
}
function mulMatrices(mat1, ...mats) {
    return mats.reduce(mulMatrix, mat1);
}
function compareAsc(a, b) {
    return a - b;
}
function compareDesc(a, b) {
    return b - a;
}
function update(xs, i, fn) {
    return xs.slice(0, i).concat(fn(xs[i])).concat(xs.slice(i + 1));
}
function inc(x) {
    return x + 1;
}
function splitAt(xs, n) {
    return [
        xs.slice(0, n),
        xs.slice(n)
    ];
}
function rotate2d(arr, clockwise = true) {
    const height = arr.length;
    const width = (0, _itertoolsJs.it)(arr).map((line)=>line.length).max();
    const rotated = Array.from({
        length: width
    }, ()=>Array.from({
            length: height
        }));
    for(let y = 0; y < height; y++)for(let x = 0; x < width; x++){
        const value = arr[y]?.[x];
        const [i, j] = clockwise ? [
            x,
            height - y - 1
        ] : [
            width - x - 1,
            y
        ];
        rotated[i][j] = value;
    }
    return rotated;
}
function rotateStrings2d(strings, clockwise = true) {
    const rotated = rotate2d(strings.map((str)=>str.split("")), clockwise);
    return rotated.map((line)=>line.map((x)=>x ?? " ").join("").trimEnd());
}
function rotateString2d(str, clockwise = true) {
    return rotateStrings2d(str.split("\n"), clockwise).join("\n");
}
function tuple(...args) {
    return args;
}
const rotate = (/** @type {string | string[] | T[][]} */ rotatable, clockwise = true)=>{
    if (typeof rotatable === "string") return rotateString2d(rotatable, clockwise);
    if (typeof rotatable[0] === "string") return rotateStrings2d(/** @type {string[]} */ rotatable, clockwise);
    return rotate2d(/** @type {T[][]} */ rotatable, clockwise);
};
function solveSquareEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) return [] // No real solutions
    ;
    else if (discriminant === 0) {
        const x = -b / (2 * a);
        return [
            x
        ] // One real solution
        ;
    } else {
        const sqrtDiscriminant = Math.sqrt(discriminant);
        const x1 = (-b + sqrtDiscriminant) / (2 * a);
        const x2 = (-b - sqrtDiscriminant) / (2 * a);
        return [
            x1,
            x2
        ] // Two real solutions
        ;
    }
}
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}
function combinations(xs, count, result = [], current = [], start = 0) {
    if (count === 0) {
        result.push([
            ...current
        ]);
        return;
    }
    for(let i = start; i < xs.length; i++){
        current.push(xs[i]);
        combinations(xs, count - 1, result, current, i + 1);
        current.pop();
    }
    return result;
}
function repeatWithDelimiters(xs, delimiters, count) {
    /** @type {any} */ let result = typeof xs === "string" ? "" : [];
    for(let i = 0; i < count; i++){
        if (i > 0) result = result.concat(delimiters);
        result = result.concat(xs);
    }
    return result;
}
function toString(x) {
    return x.toString();
}
function isInRange(value, min, max) {
    return value >= min && value <= max;
}
const identity = (x)=>x;

},{"./index.js":"Zicik","./itertools.js":"hlPOX","./vec3.js":"1RnTW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlPOX":[function(require,module,exports,__globalThis) {
// @ts-check
/**
 *
 * @param {IteratorObject<T>} iterable
 * @returns {Iterable<T>}
 * @template T
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "it", ()=>it);
/**
 * @param {number} [start]
 * @param {number} [end]
 * @param {number} [step]
 */ parcelHelpers.export(exports, "range", ()=>range);
/**
 *
 * @param {T} x
 * @param {(arg: T, idx: number) => T} f
 *
 * @template T
 */ parcelHelpers.export(exports, "iterate", ()=>iterate);
const it = Iterator.from;
function* range(start, end, step = 1) {
    if (start === undefined) start = 0;
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if (step === undefined) step = 1;
    for(let i = start; i < end; i += step)yield i;
}
function* iterate(x, f) {
    let idx = 0;
    yield x;
    while(true){
        x = f(x, idx++);
        yield x;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2eIv4":[function(require,module,exports,__globalThis) {
// @ts-check
// https://stackoverflow.com/a/42919752
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @template T
 *
 * @implements {Iterable<T>}
 */ parcelHelpers.export(exports, "PriorityQueue", ()=>PriorityQueue);
const top = 0;
const parent = (/** @type {number} */ i)=>(i + 1 >>> 1) - 1;
const left = (/** @type {number} */ i)=>(i << 1) + 1;
const right = (/** @type {number} */ i)=>i + 1 << 1;
class PriorityQueue {
    /**
	 *
	 * @param {(a: T, b: T) => number} comparator
	 */ constructor(comparator = (a, b)=>Number(a > b)){
        /** @type {T[]} @private */ this._heap = [];
        /** @private */ this._comparator = comparator;
    }
    [Symbol.iterator]() {
        return {
            next: ()=>{
                if (this.size() > 1) return {
                    value: this.pop(),
                    done: false
                };
                return {
                    done: true,
                    value: this.pop()
                };
            }
        };
    }
    get length() {
        return this.size();
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[top];
    }
    /**
	 * @param  {T[]} values
	 * @returns
	 */ push(...values) {
        values.forEach((value)=>{
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) this._swap(top, bottom);
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    /**
	 * @param {T} value
	 */ replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }
    /**
	 * @param {number} i
	 * @param {number} j
	 * @private
	 */ _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]) < 0;
    }
    /**
	 * @param {number} i
	 * @param {number} j
	 * @private
	 */ _swap(i, j) {
        [this._heap[i], this._heap[j]] = [
            this._heap[j],
            this._heap[i]
        ];
    }
    /**
	 * @private
	 */ _siftUp() {
        let node = this.size() - 1;
        while(node > top && this._greater(node, parent(node))){
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    /**
	 * @private
	 */ _siftDown() {
        let node = top;
        while(left(node) < this.size() && this._greater(left(node), node) || right(node) < this.size() && this._greater(right(node), node)){
            let maxChild = right(node) < this.size() && this._greater(right(node), left(node)) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSzmA":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @template T
 *
 * @typedef {Object} PathItem
 * @property {number} distance
 * @property {T} value
 * @property {PathItem<T>} [parent]
 */ /**
 * @template T
 *
 * @param {(value: T, step: PathItem<T>) => Iterable<T>} getNext
 * @param {T} start
 * @param {(value: T) => unknown} [valToHash]
 *
 * @returns {IteratorObject<PathItem<T>>}
 */ parcelHelpers.export(exports, "dfs", ()=>dfs);
/**
 * @template T
 *
 * @param {(value: T, step: PathItem<T>) => Iterable<T>} getNext
 * @param {T[]} starts
 * @param {(value: T) => unknown} [valToHash]
 *
 * @returns {IteratorObject<PathItem<T>>}
 */ parcelHelpers.export(exports, "bfs", ()=>bfs);
/**
 * @template T
 *
 * @param {(value: T, step: PathItem<T>) => Iterable<T>} getNext
 * @param {(value: T) => number} getDistance
 * @param {T[]} starts
 * @param {(value: T) => unknown} [valToHash]
 */ parcelHelpers.export(exports, "dijkstra", ()=>dijkstra);
var _priorityQueueJs = require("./priority-queue.js");
function* dfs(getNext, start, valToHash) {
    const visited = new Set();
    const queue = /** @type {PathItem<T>[]} */ [
        {
            distance: 0,
            value: start,
            parent: null
        }
    ];
    if (valToHash) visited.add(valToHash(start));
    while(queue.length){
        const current = queue.pop();
        yield current;
        for (const next of getNext(current.value, current))if (valToHash) {
            const hash = valToHash(next);
            if (!visited.has(hash)) {
                visited.add(hash);
                queue.push({
                    distance: current.distance + 1,
                    value: next,
                    parent: current
                });
            }
        } else queue.push({
            distance: current.distance + 1,
            value: next,
            parent: current
        });
    }
}
function* bfs(getNext, starts, valToHash) {
    const visited = new Set();
    /** @type {PathItem<T>[]} */ const queue = [];
    for (const start of starts){
        queue.push({
            distance: 0,
            value: start,
            parent: null
        });
        if (valToHash) visited.add(valToHash(start));
    }
    while(queue.length){
        const current = queue.shift();
        yield current;
        for (const next of getNext(current.value, current))if (valToHash) {
            const hash = valToHash(next);
            if (!visited.has(hash)) {
                visited.add(hash);
                queue.push({
                    distance: current.distance + 1,
                    value: next,
                    parent: current
                });
            }
        } else queue.push({
            distance: current.distance + 1,
            value: next,
            parent: current
        });
    }
}
function* dijkstra(getNext, getDistance, starts, valToHash) {
    const visited = new Set();
    /** @type {PriorityQueue<PathItem<T>>} */ const queue = new (0, _priorityQueueJs.PriorityQueue)((a, b)=>a.distance - b.distance);
    for (const start of starts){
        queue.push({
            distance: getDistance(start),
            value: start,
            parent: null
        });
        if (valToHash) visited.add(valToHash(start));
    }
    while(queue.length){
        const current = queue.pop();
        yield current;
        for (const next of getNext(current.value, current))if (valToHash) {
            const hash = valToHash(next);
            if (!visited.has(hash)) {
                visited.add(hash);
                queue.push({
                    distance: current.distance + getDistance(next),
                    value: next,
                    parent: current
                });
            }
        } else queue.push({
            distance: current.distance + getDistance(next),
            value: next,
            parent: current
        });
    }
}

},{"./priority-queue.js":"2eIv4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70n2o":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @template T
 * @param {T[][]} xs
 * @param {'lines' | 'columns'} by
 */ parcelHelpers.export(exports, "traverse", ()=>traverse);
/**
 * @template T
 *
 * @param {T[][]} xs
 * @returns {T[][]}
 */ parcelHelpers.export(exports, "rotateCW", ()=>rotateCW);
/**
 * @template T
 *
 * @param {T[][]} xs
 * @returns {T[][]}
 */ parcelHelpers.export(exports, "rotateCCW", ()=>rotateCCW);
/**
 * @param {string} input
 * @returns {string[][]}
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * @template T
 * @param {number} width
 * @param {number} height
 * @param {(x: number, y: number) => T} getVal
 * @returns {T[][]}
 */ parcelHelpers.export(exports, "create", ()=>create);
/**
 * @template T
 * @param {T[][]} xs
 * @param {Readonly<V.Vec2>} pos
 */ parcelHelpers.export(exports, "get", ()=>get);
/**
 * @template T
 * @param {T[][]} xs
 * @param {V.Vec2} pos
 * @returns {T}
 */ parcelHelpers.export(exports, "modGet", ()=>modGet);
/**
 * @template T
 * @param {T[][]} xs
 * @param {V.Vec2} pos
 * @param {T} value
 */ parcelHelpers.export(exports, "set", ()=>set);
/**
 * @template T
 * @param {T[][]} xs
 * @param {V.Vec2} pos
 * @param {T} value
 */ parcelHelpers.export(exports, "imSet", ()=>imSet);
/**
 * @template T
 * @param {T[][]} xs
 * @returns {string}
 */ parcelHelpers.export(exports, "toString", ()=>toString);
/**
 * @template T
 * @template U
 * @param {T[][]} xs
 * @param {(v: T, pos: V.Vec2) => U} fn
 * @returns {U[][]}
 */ parcelHelpers.export(exports, "map", ()=>map);
/**
 * @template T
 * @param {T[][]} xs
 */ parcelHelpers.export(exports, "height", ()=>height);
/**
 * @template T
 * @param {T[][]} xs
 */ parcelHelpers.export(exports, "width", ()=>width);
/**
 * @template T
 * @param {T[][]} xs
 * @returns {T[][]}
 */ parcelHelpers.export(exports, "clone", ()=>clone);
/**
 * @template T
 * @param {T[][]} xs
 * @param {V.Vec2} pos
 * @returns {boolean}
 */ parcelHelpers.export(exports, "contains", ()=>contains);
/**
 * @template T
 * @param {T[][]} xs
 */ parcelHelpers.export(exports, "borders", ()=>borders);
/**
 * @template T
 * @param {T[][]} xs
 */ parcelHelpers.export(exports, "rows", ()=>rows);
/**
 * @template T
 * @param {T[][]} xs
 */ parcelHelpers.export(exports, "columns", ()=>columns);
/**
 * @template T
 * @param {T[][]} xs
 * @returns {T[][]}
 */ parcelHelpers.export(exports, "transpose", ()=>transpose);
var _indexJs = require("./index.js");
var _libJs = require("./lib.js");
function* traverse(xs, by = "lines", reverse = false) {
    const minX = 0;
    const minY = 0;
    const maxX = xs[0].length;
    const maxY = xs.length;
    if (by === "lines") {
        const y0 = reverse ? maxY - 1 : minY;
        const y1 = reverse ? minY - 1 : maxY;
        const yStep = reverse ? -1 : 1;
        const x0 = reverse ? maxX - 1 : minX;
        const x1 = reverse ? minX - 1 : maxX;
        const xStep = reverse ? -1 : 1;
        for(let y = y0; y !== y1; y += yStep)for(let x = x0; x !== x1; x += xStep)yield {
            pos: (0, _indexJs.V).vec(x, y),
            value: xs[y][x]
        };
    }
    if (by === "columns") {
        const x0 = reverse ? maxX - 1 : minX;
        const x1 = reverse ? minX - 1 : maxX;
        const xStep = reverse ? -1 : 1;
        const y0 = reverse ? maxY - 1 : minY;
        const y1 = reverse ? minY - 1 : maxY;
        const yStep = reverse ? -1 : 1;
        for(let x = x0; x !== x1; x += xStep)for(let y = y0; y !== y1; y += yStep)yield {
            pos: (0, _indexJs.V).vec(x, y),
            value: xs[y][x]
        };
    }
}
function rotateCW(xs) {
    const res = [];
    for(let y = 0; y < xs[0].length; y++){
        res.push([]);
        for(let x = 0; x < xs.length; x++)res[y].push(xs[xs.length - x - 1][y]);
    }
    return res;
}
function rotateCCW(xs) {
    const res = [];
    for(let y = 0; y < xs[0].length; y++){
        res.push([]);
        for(let x = 0; x < xs.length; x++)res[y].push(xs[x][xs[0].length - y - 1]);
    }
    return res;
}
function parse(input) {
    return input.split("\n").map((l)=>l.split(""));
}
function create(width, height, getVal) {
    const res = [];
    for(let y = 0; y < height; y++){
        res.push([]);
        for(let x = 0; x < width; x++)res[y].push(getVal(x, y));
    }
    return res;
}
function get(xs, pos) {
    return xs[pos[1]]?.[pos[0]];
}
function modGet(xs, pos) {
    return xs[(0, _libJs.mod)(pos[1], height(xs))][(0, _libJs.mod)(pos[0], width(xs))];
}
function set(xs, pos, value) {
    xs[pos[1]][pos[0]] = value;
    return xs;
}
function imSet(xs, pos, value) {
    return set(clone(xs), pos, value);
}
function toString(xs) {
    return xs.map((l)=>l.join("")).join("\n");
}
function map(xs, fn) {
    return xs.map((l, y)=>l.map((v, x)=>fn(v, (0, _indexJs.V).vec(x, y))));
}
function height(xs) {
    return xs.length;
}
function width(xs) {
    return xs[0].length;
}
function clone(xs) {
    return xs.map((l)=>l.slice());
}
function contains(xs, pos) {
    return pos[0] >= 0 && pos[1] >= 0 && pos[0] < width(xs) && pos[1] < height(xs);
}
function* borders(xs) {
    const w = width(xs);
    const h = height(xs);
    for(let x = 0; x < w; x++){
        yield {
            pos: (0, _indexJs.V).vec(x, 0),
            value: xs[0][x]
        };
        yield {
            pos: (0, _indexJs.V).vec(x, h - 1),
            value: xs[h - 1][x]
        };
    }
    for(let y = 0; y < h; y++){
        yield {
            pos: (0, _indexJs.V).vec(0, y),
            value: xs[y][0]
        };
        yield {
            pos: (0, _indexJs.V).vec(w - 1, y),
            value: xs[y][w - 1]
        };
    }
}
function rows(xs) {
    return xs;
}
function columns(xs) {
    return transpose(xs);
}
function transpose(xs) {
    const res = [];
    for(let x = 0; x < width(xs); x++){
        res.push([]);
        for(let y = 0; y < height(xs); y++)res[x].push(xs[y][x]);
    }
    return res;
}

},{"./index.js":"Zicik","./lib.js":"evqQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4JAEt":[function(require,module,exports,__globalThis) {
// @ts-check
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @template T
 *
 * @typedef {Object} PathItem
 * @property {V.Vec2} pos
 * @property {number} distance
 * @property {T} value
 * @property {PathItem<T>} [parent]
 */ /**
 *@template T
 *
 * @param {Map2d<T>} map2d
 * @param {(pos: V.Vec2, map: Map2d<T>) => IteratorObject<V.Vec2>} getNext
 * @param {V.Vec2} start
 *
 * @returns {IteratorObject<PathItem<T>>}
 */ parcelHelpers.export(exports, "dfs", ()=>dfs);
/**
 *
 * @template T
 *
 * @param {Map2d<T>} map2d
 * @param {(from: PathItem<T>, to: PathItem<T>) => boolean} canGoFromTo
 * @param {V.Vec2 | Iterable<V.Vec2>} start
 * @param {(pos: V.Vec2, map: Map2d<T>) => Iterable<V.Vec2>} getNeighbors
 */ parcelHelpers.export(exports, "bfs", ()=>bfs);
/**
 * @implements {Iterable<{pos: V.Vec2;value: T;}>}
 * @template T
 */ parcelHelpers.export(exports, "Map2d", ()=>Map2d);
/**
 * @param {T[][]} raw
 * @returns {Map2d<T>}
 * @template T
 */ parcelHelpers.export(exports, "toMap2d", ()=>toMap2d);
/**
 * @param {string} input
 */ parcelHelpers.export(exports, "parseMap2d", ()=>parseMap2d);
var _libJs = require("./lib.js");
var _vecJs = require("./vec.js");
function* dfs(map2d, getNext, start) {
    const visited = new Map2d();
    /** @type {PathItem<T>} */ let current = {
        distance: 0,
        pos: start,
        value: map2d.get(start),
        parent: null
    };
    visited.set(current.pos, true);
    while(current){
        const next = getNext(current.pos, map2d).find((pos)=>!visited.has(pos));
        if (next) {
            visited.set(next, true);
            current = {
                distance: current.distance + 1,
                pos: next,
                value: map2d.get(next),
                parent: current
            };
        } else {
            yield current;
            current = current.parent;
        }
    }
}
function* bfs(map2d, canGoFromTo, start, getNeighbors) {
    /** @type {PathItem<T>[]} */ const queue = [];
    if (_vecJs.isVec(start)) queue.push({
        distance: 0,
        pos: start,
        value: map2d.get(start),
        parent: null
    });
    else for (const pos of start)queue.push({
        distance: 0,
        pos: pos,
        value: map2d.get(pos),
        parent: null
    });
    const visited = new Set();
    while(queue.length){
        const current = queue.shift();
        const key = current.pos.join();
        if (visited.has(key)) continue;
        visited.add(key);
        yield current;
        for (const next of getNeighbors(current.pos, map2d)){
            const nextBfs = {
                distance: current.distance + 1,
                pos: next,
                value: map2d.get(next),
                parent: current
            };
            if (canGoFromTo(current, nextBfs)) queue.push(nextBfs);
        }
    }
}
class Map2d {
    /**
	 * @param {R[][]} raw
	 * @template R
	 */ static fromArray(raw) {
        /** @type {Map2d<R>} */ const map = new Map2d();
        raw.forEach((row, y)=>{
            row.forEach((value, x)=>{
                map.set(_vecJs.vec(x, y), value);
            });
        });
        return map;
    }
    /**
	 *
	 * @param {V.Vec2} pos
	 * @param {Map2d<T>} map
	 * @returns {Iterable<V.Vec2>}
	 */ #getNeighbors = (pos, map)=>_vecJs.DIRS_4.map((dir)=>_vecJs.add(pos, dir)).filter((pos)=>this.has(pos));
    /**
	 * @type {Map<number, Map<number, T>>}
	 */ #data = new Map();
    #minX = Infinity;
    #minY = Infinity;
    #maxX = -Infinity;
    #maxY = -Infinity;
    #needRecalculateBounds = false;
    get bounds() {
        if (this.#needRecalculateBounds) this.#updateBounds();
        return {
            minX: this.#minX,
            minY: this.#minY,
            maxX: this.#maxX,
            maxY: this.#maxY,
            botRight: _vecJs.vec(this.#maxX, this.#maxY),
            topLeft: _vecJs.vec(this.#minX, this.#minY)
        };
    }
    get height() {
        return this.#maxY - this.#minY + 1;
    }
    get width() {
        return this.#maxX - this.#minX + 1;
    }
    /**
	 * @param {Iterable<[V.Vec2, T]>} [data]
	 */ constructor(data = []){
        for (const [pos, value] of data)this.set(pos, value);
    }
    #updateBounds() {
        this.#data.forEach((row, y)=>{
            row.forEach((_, x)=>{
                this.#extendBounds(x, y);
            });
        });
        this.#needRecalculateBounds = false;
    }
    /**
	 * @param {number} x
	 * @param {number} y
	 */ #extendBounds(x, y) {
        this.#minX = Math.min(this.#minX, x);
        this.#minY = Math.min(this.#minY, y);
        this.#maxX = Math.max(this.#maxX, x);
        this.#maxY = Math.max(this.#maxY, y);
    }
    /**
	 * @param {V.Vec2} vec
	 * @returns {T | undefined}
	 */ get([x, y]) {
        return this.#data.get(x)?.get(y);
    }
    /**
	 * @param {V.Vec2} vec
	 * @param {T} value
	 * @returns {this}
	 */ set([x, y], value) {
        if (this.#data.has(x) === false) this.#data.set(x, new Map());
        this.#data.get(x).set(y, value);
        this.#extendBounds(x, y);
        return this;
    }
    /**
	 * @param {V.Vec2} vec
	 */ has([x, y]) {
        return this.#data.get(x)?.has(y) === true;
    }
    /**
	 * @param {(arg: T, pos: V.Vec2) => R} mapFn
	 * @returns {Map2d<R>}
	 *
	 * @template R
	 */ map(mapFn) {
        const result = new Map2d();
        for (const { pos, value } of this)result.set(pos, mapFn(value, pos));
        return result;
    }
    /**
	 *
	 * @param {(from: PathItem<T>, to: PathItem<T>) => boolean} canGoFromTo
	 * @param {V.Vec2} start
	 * @returns {Iterable<PathItem<T>>}
	 */ bfs(canGoFromTo, start) {
        return bfs(this, canGoFromTo, start, this.#getNeighbors);
    }
    /**
	 *
	 * @param {(arg: V.Vec2, map: Map2d<T>) => Iterable<V.Vec2>} getNeighbors
	 */ setGetNeighbors(getNeighbors) {
        this.#getNeighbors = getNeighbors;
        return this;
    }
    [Symbol.iterator]() {
        return toIterable(this.#data);
    }
    values() {
        return this[Symbol.iterator]();
    }
    /**
	 * @param {Object} params
	 * @param {V.Vec2} [params.topLeftPos]
	 * @param {V.Vec2} [params.botRightPos]
	 * @param {(arg: T | undefined) => J} params.valToString
	 * @returns
	 *
	 * @template J
	 */ to2dArray({ topLeftPos = _vecJs.vec(this.#minX, this.#minY), botRightPos = _vecJs.vec(this.#maxX, this.#maxY), valToString }) {
        const [minX, minY] = topLeftPos;
        const [maxX, maxY] = botRightPos;
        const result = [];
        for(let y = minY; y <= maxY; y++){
            const row = [];
            for(let x = minX; x <= maxX; x++){
                const value = this.get([
                    x,
                    y
                ]);
                row.push(valToString(value));
            }
            result.push(row);
        }
        return result;
    }
    /**
	 * @param {Object} params
	 * @param {V.Vec2} [params.topLeftPos]
	 * @param {V.Vec2} [params.botRightPos]
	 * @param {(arg: T | undefined) => string} [params.valToString]
	 * @returns
	 */ toString({ topLeftPos = _vecJs.vec(this.#minX, this.#minY), botRightPos = _vecJs.vec(this.#maxX, this.#maxY), valToString = (x)=>(x ?? ".").toString() } = {}) {
        return this.to2dArray({
            topLeftPos,
            botRightPos,
            valToString
        }).map((row)=>row.join("")).join("\n");
    }
    /**
	 *
	 * @param {V.Vec2} pos
	 * @returns {{pos: V.Vec2; value: T}[]} 4 neighbors
	 */ around4(pos) {
        return _vecJs.DIRS_4.map((dir)=>_vecJs.add(pos, dir)).filter((pos)=>this.has(pos)).map((pos)=>({
                pos,
                value: this.get(pos)
            }));
    }
    /**
	 *
	 * @param {V.Vec2} pos
	 * @returns {{pos: V.Vec2; value: T}[]} 8 neighbors
	 */ around8(pos) {
        return _vecJs.DIRS_8.map((dir)=>_vecJs.add(pos, dir)).filter((pos)=>this.has(pos)).map((pos)=>({
                pos,
                value: this.get(pos)
            }));
    }
    /**
	 * Returns all lines in the map
	 *
	 * @returns {Iterable<[y: number, {pos: V.Vec2; value: T}[]]>}
	 */ *lines() {
        for(let y = this.bounds.minY; y <= this.bounds.maxY; y++){
            const line = [];
            for(let x = this.bounds.minX; x <= this.bounds.maxX; x++)line.push({
                pos: _vecJs.vec(x, y),
                value: this.get([
                    x,
                    y
                ])
            });
            yield (0, _libJs.tuple)(y, line);
        }
    }
    /**
	 * Returns all columns in the map
	 *
	 * @returns {Iterable<[x: number, {pos: V.Vec2; value: T}[]]>}
	 */ *columns() {
        for(let x = this.bounds.minX; x <= this.bounds.maxX; x++){
            const column = [];
            for(let y = this.bounds.minY; y <= this.bounds.maxY; y++)column.push({
                pos: _vecJs.vec(x, y),
                value: this.get([
                    x,
                    y
                ])
            });
            yield (0, _libJs.tuple)(x, column);
        }
    }
    /**
	 * @returns {Map2d<T>}
	 */ clone() {
        const result = new Map2d();
        for (const { pos, value } of this)result.set(pos, value);
        return result;
    }
    /**
	 * @returns {Iterable<{pos: V.Vec2; value: T}>}
	 */ *borders() {
        for(let i = this.bounds.minX; i <= this.bounds.maxX; i++){
            let pos = _vecJs.vec(i, this.bounds.minY);
            yield {
                pos,
                value: this.get(pos)
            };
            pos = _vecJs.vec(i, this.bounds.maxY);
            yield {
                pos,
                value: this.get(pos)
            };
        }
        for(let i = this.bounds.minY; i <= this.bounds.maxY; i++){
            let pos = _vecJs.vec(this.bounds.minX, i);
            yield {
                pos,
                value: this.get(pos)
            };
            pos = _vecJs.vec(this.bounds.maxX, i);
            yield {
                pos,
                value: this.get(pos)
            };
        }
    }
}
function toMap2d(raw) {
    return Map2d.fromArray(raw);
}
function parseMap2d(input) {
    const raw = input.split("\n").map((line)=>line.split(""));
    return Map2d.fromArray(raw);
}
/**
 * @param {Map<number, Map<number, T>>} map2d
 *
 * @template T
 */ function* toIterable(map2d) {
    for (const x of map2d.keys())for (const y of map2d.get(x).keys())yield {
        pos: _vecJs.vec(x, y),
        value: map2d.get(x).get(y)
    };
}

},{"./lib.js":"evqQV","./vec.js":"3tqfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ4CG":[function(require,module,exports,__globalThis) {
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

},{"./index.js":"Zicik","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wzUn":[function(require,module,exports,__globalThis) {
// @ts-check
/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} width
 * @param {number} height
 * @param {number} [scale]
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scaleCanvasToPixelRatio", ()=>scaleCanvasToPixelRatio);
function scaleCanvasToPixelRatio(ctx, width, height, scale = 1) {
    const pixelRatio = (window.devicePixelRatio ?? 1) * scale;
    ctx.canvas.width = width * scale * pixelRatio;
    ctx.canvas.height = height * scale * pixelRatio;
    ctx.canvas.style.width = `${width * scale}px`;
    ctx.canvas.style.height = `${height * scale}px`;
    ctx.scale(pixelRatio, pixelRatio);
    return pixelRatio;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8eMUF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param {IteratorObject<number>} xs
 */ parcelHelpers.export(exports, "sum", ()=>sum);
/**
 * @param {IteratorObject<number>} xs
 */ parcelHelpers.export(exports, "multiply", ()=>multiply);
/**
 * @template T
 *
 * @param {T[]} xs
 * @param {number} count
 * @param {T[]} [current]
 * @returns {IteratorObject<T[]>}
 */ parcelHelpers.export(exports, "combinations", ()=>combinations);
var _libJs = require("./lib.js");
Iterator.prototype.first = function() {
    for (const x of this)return x;
};
/**
 * @template T
 *
 * @param {T} defaultValue
 */ Iterator.prototype.firstOrDefault = function(defaultValue) {
    for (const x of this)return x;
    return defaultValue;
};
Iterator.prototype.last = function() {
    let last;
    for (const x of this)last = x;
    return last;
};
/**
 * @param {number} n
 */ Iterator.prototype.skip = function*(n) {
    let i = 0;
    for (const x of this){
        if (i >= n) yield x;
        i++;
    }
};
/**
 * @param {number} n
 */ Iterator.prototype.groupsOf = function*(n) {
    let group = [];
    for (const x of this){
        group.push(x);
        if (group.length === n) {
            yield group;
            group = [];
        }
    }
    if (group.length > 0) yield group;
};
/**
 * @param {(val: K) => T} keyFn
 * @template T
 * @template K
 */ Iterator.prototype.groupBy = function(keyFn) {
    const map = new Map();
    for (const x of this){
        const key = keyFn(x);
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(x);
    }
    return map;
};
function sum(xs) {
    return xs.reduce((0, _libJs.add), 0);
}
Iterator.prototype.sum = function() {
    return sum(this);
};
function multiply(xs) {
    return xs.reduce((0, _libJs.mul), 1);
}
Iterator.prototype.multiply = function() {
    return multiply(this);
};
/**
 * @template T
 */ Iterator.prototype.count = function(predicate = (/** @type {T} */ x)=>true) {
    let count = 0;
    for (const x of this)if (predicate(x)) count += 1;
    return count;
};
/**
 *
 * @param {Iterable<U>} iterableB
 * @returns {IteratorObject<[T, U]>}
 *
 * @template T, U
 */ Iterator.prototype.zip = function*(iterableB) {
    const iterA = this[Symbol.iterator]();
    const iterB = iterableB[Symbol.iterator]();
    while(true){
        const { value: a, done: doneA } = iterA.next();
        const { value: b, done: doneB } = iterB.next();
        if (doneA || doneB) return;
        yield [
            a,
            b
        ];
    }
};
Iterator.prototype.indexed = function() {
    return range(Infinity).zip(this);
};
/**
 * @param {number} size
 * @returns {IteratorObject<T[]>}
 *
 * @template T
 */ Iterator.prototype.windowed = function* windowed(size) {
    const buffer = [];
    for (const x of this){
        buffer.push(x);
        if (buffer.length === size) {
            yield buffer.slice();
            buffer.shift();
        }
    }
};
/**
 * @param {(value: T) => boolean} predicate
 * @returns {number}
 * @template T
 */ Iterator.prototype.findIndex = function(predicate) {
    let i = 0;
    for (const x of this){
        if (predicate(x)) return i;
        i++;
    }
    return -1;
};
/**
 * @param {T} value
 * @returns {number}
 * @template T
 */ Iterator.prototype.indexOf = function(value) {
    return this.findIndex((x)=>x === value);
};
/**
 * @param {number} [n]
 * @returns {IteratorObject<T>}
 *
 * @template T
 */ Iterator.prototype.skipLast = function*(n = 1) {
    if (n <= 0) {
        yield* this;
        return;
    }
    const buffer = Array(n);
    let i = 0;
    for (const x of this){
        if (i >= n) yield buffer[i % n];
        buffer[i % n] = x;
        i++;
    }
};
/**
 *
 * @param {number} every
 * @param {number} [skipInitial]
 * @returns {IteratorObject<T>}
 *
 * @template T
 */ Iterator.prototype.takeEvery = function* takeEvery(every, skipInitial = 0) {
    if (every <= 0) return;
    if (skipInitial < 0) skipInitial = 0;
    for (const x of this){
        if (skipInitial === 0) {
            yield x;
            skipInitial = every;
        }
        skipInitial--;
    }
};
/**
 * @param {(value: T) => boolean} predicate
 * @returns {IteratorObject<T>}
 * @template T
 */ Iterator.prototype.takeWhile = function* takeWhile(predicate) {
    for (const x of this){
        if (!predicate(x)) return;
        yield x;
    }
};
/**
 * @param {(value: T) => boolean} predicate
 * @returns {IteratorObject<T>}
 * @template T
 */ Iterator.prototype.takeUntil = function*(predicate) {
    for (const x of this){
        if (predicate(x)) return;
        yield x;
    }
};
/**
 * @param {(arg: T) => any} [mapFn]
 * @returns {IteratorObject<T>}
 * @template T
 */ Iterator.prototype.distinct = function*(mapFn = (x)=>x) {
    const set = new Set();
    for (const x of this){
        const key = mapFn(x);
        if (!set.has(key)) {
            set.add(key);
            yield x;
        }
    }
};
Iterator.prototype.min = function() {
    let min;
    for (const x of this)if (min === undefined || x < min) min = x;
    return min;
};
Iterator.prototype.max = function() {
    let max;
    for (const x of this)if (max === undefined || x > max) max = x;
    return max;
};
/**
 * @template T
 * @param {(arg: T) => number | string} fn
 * @returns {T}
 */ Iterator.prototype.maxBy = function maxBy(fn) {
    let max;
    let maxVal;
    for (const x of this){
        const val = fn(x);
        if (max === undefined || val > maxVal) {
            max = x;
            maxVal = val;
        }
    }
    return max;
};
/**
 * @template T
 */ Iterator.prototype.countFrequencies = function() {
    return this.toMap((x)=>x, (x, map)=>(map.get(x) ?? 0) + 1);
};
function* combinations(xs, count, current = [], start = 0) {
    if (count === 0) {
        yield [
            ...current
        ];
        return;
    }
    for(let i = start; i < xs.length; i++){
        current.push(xs[i]);
        yield* combinations(xs, count - 1, current, i + 1);
        current.pop();
    }
}
Iterator.prototype.combinations = function(/** @type {number} */ count) {
    return combinations(this.toArray(), count);
};
/**
 * @param {(arg: R, acc: Map<K,V>) => K} keyFn
 * @param {(arg: R, acc: Map<K,V>) => V} valueFn
 * @returns {Map<K,V>}
 *
 * @template R
 * @template K
 * @template V
 */ Iterator.prototype.toMap = function(keyFn, valueFn) {
    /** @type {Map<K, V>} */ const map = new Map();
    for (const x of this)map.set(keyFn(x, map), valueFn(x, map));
    return map;
};
Iterator.prototype.toSet = function() {
    return new Set(this);
};
Iterator.prototype.lcm = function() {
    return this.reduce((0, _libJs.lcm), 1);
};
/**
 * @param {(x: T) => void} fn
 * @template T
 */ Iterator.prototype.tap = function*(fn) {
    for (const x of this){
        fn(x);
        yield x;
    }
};
/**
 *
 * @param {(x:Iterable<T>) => IteratorObject<U>} fn
 * @template T
 * @template U
 */ Iterator.prototype.chain = function(fn) {
    return fn(this);
};

},{"./lib.js":"evqQV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fmZhM","aZTvN"], "aZTvN", "parcelRequire94c2")

//# sourceMappingURL=index.a02d4531.js.map
