// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Ba88":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var stylecss = "\n /* \u6211\u662F\u4E00\u53EA\u53EF\u7231\u7684\u5C0F\u72D7*/\n#html {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #ffe600;\n}\n.main{\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n   /* \u5148\u753B\u4E00\u4E2A\u8EAB\u5B50*/\n.dog{\n    width: 20.5vmax;\n    height: 8.25vmax;\n    position: absolute;\n    border-top-right-radius: 3vmax;\n    border-top-left-radius: 3vmax;\n    border-bottom-left-radius: 5vmax;\n    background: #ff702e;\n\n}\n.dog::before{\n    content: '';\n    position: absolute;\n    right: -0.8vmax;\n    bottom: -1.3vmax;\n    width: 100%;\n    height: 1.5vmax;\n    border-radius: 50%;\n    background: rgba(28,49,48,0.1);\n    animation: shadow 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n    z-index: -5;\n}\n\n/* \u63A5\u7740\u753B\u722A\u5B50*/\n\n.paws {\n    width: 20vmax;\n    height: 6vmax;\n    display: flex;\n    position:relative ;\n    justify-content: space-between;\n    left: 9.8vmax;\n    top: 6.5vmax;\n\n}\n/* \u8FD9\u662F\u6211\u7684\u540E\u817F*/\n.back_leg{\n    position: relative;\n    z-index: 2;\n}\n.back_paw{\n    width: 2.625vmax;\n    height: 4.5vmax;\n    transform: rotate(75deg);\n    border-radius: 1.6vmax;\n    position: absolute;\n    right: 0;\n    top: -1.1vmax;\n    background: #ff8b56;\n}\n.back_top {\n    width: 3.75vmax;\n    height: 4.6vmax;\n    position: absolute;\n    right: 1.5vmax;\n    top: 0.6vmax;\n    background: #d7dbd2;\n}\n.top1{\n    border-radius: 100px 100px 0 0;\n    height: 2.3vmax;\n}\n.aside_leg{\n    position: relative;\n    z-index: -1;\n}\n.aside_top{\n    width: 3.75vmax;\n    height: 4.6vmax;\n    position: absolute;\n    background: #d7dbd2;\n    right: 24vmax;\n    z-index: -1;\n\n}\n/* \u8FD9\u662F\u6211\u7684\u524D\u817F*/\n.front_leg{\n    position: relative;\n    z-index: 2;\n}\n.front_paw{\n    width: 2.625vmax;\n    height: 4.5vmax;\n    transform: rotate(75deg);\n    border-radius: 1.6vmax;\n    position: absolute;\n    right: 0;\n    top: -1.1vmax;\n    background: #ff8b56;\n    overflow: hidden;\n}\n.front_top {\n    width: 3.75vmax;\n    height: 4.6vmax;\n    position: absolute;\n    right: 1.5vmax;\n    top: 0.6vmax;\n    background: #d7dbd2;\n}\n.top2{\n    border-radius: 100px 100px 0 0;\n    height: 2.3vmax;\n}\n/* \u6211\u7684\u5934\u51FA\u6765\u4E86*/\n.all_head{\n    position: absolute;\n    animation: head 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n.head{\n    width: 9.9vmax;\n    height:8.75vmax ;\n    border-radius: 4.05vmax 4.05vmax 3.3vmax 3.3vmax;\n    position: relative;\n    left: -3vmax;\n    background:#ff8147 ;\n    z-index: 100;\n\n}\n/* \u6211\u7684\u5634\u5DF4 */\n.snout{\n    width: 7.5vmax;\n    height: 3.75vmax;\n    border-radius: 0 3vmax  3vmax 5vmax;\n    position: relative;\n    top: 4.9vmax;\n    right: 2vmax;\n    background: #d7dbd2;\n}\n.snout::before{\n        content: '';\n        position: absolute;\n        width: 1.875vmax;\n        height: 1.125vmax;\n        border-radius: 3vmax  3vmax 4.5vmax;\n        background: #1c3130;\n         top: -0.1vmax;\n    animation: snout 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n\n/* \u8FD8\u6709\u6211\u7684\u9F3B\u5B50*/\n.nose {\n    width: 0.75vmax;\n    height: 2.4vmax;\n    border-radius: 3vmax;\n    position: absolute;\n    left: 3.5vmax;\n    top: -2vmax;\n    background: #d7dbd2;\n}\n/*\u6211\u7684\u773C\u775B\u8FD8\u4F1A\u52A8\u54E6*/\n.eyes{\n    position: relative;\n}\n.left_eye {\n    width:0.675vmax ;\n    height:0.375vmax ;\n    position: absolute;\n    top: -1.4vmax;\n    left: 2.4vmax;\n    background: #1c3130;\n    animation: eye 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n.right_eye{\n    width:0.675vmax ;\n    height:0.375vmax ;\n    position: absolute;\n    top: -1.4vmax;\n    left: 5vmax;\n    background: #1c3130;\n    animation: eye 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n\n}\n\n\n.head-ear {\n    position: absolute;\n}\n/* \u6211\u7684\u53F3\u8033\u6735\u51FA\u6765\u4E86*/\n.right_ear{\n    width: 10.5vmax;\n    height: 3.375vmax;\n    border-bottom-left-radius: 3vmax;\n    border-bottom-right-radius:3vmax ;\n    transform: rotate(-60deg);\n    position: absolute;\n    top: -10vmax;\n    left: 0;\n    background: #e26538;\n    animation: right_ear 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite;\n}\n/* \u6211\u7684\u5DE6\u8033\u6735\u51FA\u6765\u4E86*/\n.left_ear{\n    width: 10.5vmax;\n    height: 3.375vmax;\n    border-bottom-left-radius: 3vmax;\n    border-bottom-right-radius:3vmax ;\n    transform: rotate(40deg);\n    position: absolute;\n    top: -9vmax;\n    left:-5vmax;\n\n    background: #e26538;\n    animation:  left_ear 10s cubic-bezier(0.3, 0.41, 0.18, 1.01) infinite ;\n}\n\n.dog_body{\n    position: relative;\n}\n/* \u6211\u7684\u5C3E\u5DF4\u51FA\u6765\u4E86*/\n.tail{\n    width: 4.5vmax;\n    height: 1.5vmax;\n    position: absolute;\n    border-radius: 3vmax ;\n    z-index: 1;\n    left: 20vmax;\n    top: 0.8vmax;\n    background: #e96839;\n}\n@keyframes shadow {\n    0%, 10%, 20%, 26%, 28%, 30%, 84%, 100% {\n        width: 99%; }\n    5%, 15%, 22%, 24% {\n        width: 101%; }\n    34%, 81% {\n        width: 96%; } \n        }\n        /* \u6211\u7684\u5934\u8981\u5F52\u4F4D\u4E86*/\n        @keyframes head {\n    0%,10%,20%,26%,28%,90%,100%{\n        height: 8.25vmax;\n        bottom: 0;\n        transform-origin: bottom right;\n        transform: rotateZ(0);\n    }\n    5%,15%,22%,24%,30%{\n        height: 8.1vmax;\n    }\n    32%,50%{\n        height: 8.25vmax;\n    }\n    55%,60%{\n        bottom: 0.75vmax;\n        transform-origin: bottom right;\n        transform: rotateZ(0);\n    }\n    70%,80% {\n        bottom: 0.75vmax;\n        transform-origin: bottom right;\n        transform: rotateZ(10deg);\n    }\n}\n\n@keyframes snout {\n    0%, 10%, 20%, 26%, 28%, 98%, 100% {\n        width: 1.875vmax;\n    }\n    5%, 15%, 22%, 24% {\n        width: 1.8vmax; }\n    34%, 98% {\n        width: 1.275vmax; }\n}\n/* \u52A8\u52A8\u773C\u775B*/\n@keyframes eye  {\n    0%, 30% {\n        width: 0.675vmax;\n        height: 0.3vmax; }\n\n    32%, 59%, 90%, 100% {\n        width: 0.525vmax;\n        height: 0.525vmax;\n        transform: translateY(0); }\n    60%, 75% {\n        transform: translateY(-0.3vmax); }\n    80%, 85% {\n        transform: translateY(0.15vmax); }\n}\n/* \u52A8\u52A8\u8033\u6735*/\n@keyframes right_ear {\n    0%, 10%, 20%, 26%, 28% {\n        transform: rotateZ(-60deg); }\n    5%, 15%, 22%, 24% {\n        transform: rotateZ(-58deg); }\n    30%, 31% {\n        transform: rotateZ(-50deg); }\n    32% {\n        transform: rotateZ(-65deg);\n    }\n   \n}\n@keyframes left_ear {\n    0%, 10%, 20%, 26%, 28%, 82%, 100% {\n        transform: rotateZ(40deg); }\n    5%, 15%, 22%, 24% {\n        transform: rotateZ(38deg); }\n    30%, 31% {\n        transform: rotateZ(30deg); }\n    32%, 80% {\n        transform: rotateZ(50deg); }\n}\n";
var _default = stylecss;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _stylecss = _interopRequireDefault(require("./stylecss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _stylecss.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _stylecss.default.substr(0, player.n);
    player.bindEvens();
    player.play();
  },
  evens: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvens: function bindEvens() {
    for (var key in player.evens) {
      if (player.evens.hasOwnProperty(key)) {
        var value = player.evens[key]; //pause /play /slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _stylecss.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _stylecss.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _stylecss.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./stylecss":"Ba88"}]},{},["epB2"], null)
//# sourceMappingURL=main.6fd6ff2e.js.map