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
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html'); //通过css选择器找到这个元素

var style = document.querySelector('#style');
var string = "/*\n\u6211\u662F\u90D1\u579A\uFF0C\u521A\u5F00\u59CB\u5B66\u4E60\u524D\u7AEF.\n\u6211\u73B0\u5728\u8981\u505A\u4E00\u4E2A\u516B\u5366\u56FE\n\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n*/\n#div1{\n    border:1px solid red;\n    width:200px;\n    height:200px;\n}\n/*\n\u63A5\u4E0B\u6765\u6211\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n\u9996\u5148\uFF0C\u5C06div\u53D8\u6210\u4E00\u4E2A\u5706\n*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/*\n\u63A5\u4E0B\u6765\u5C06\u5706\u5F62\u6539\u6210\u516B\u5366\u6837\u5F0F\n\u4E00\u9ED1\u4E00\u767D\n*/\n#div1{\n    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\n\u5C06\u516B\u5366\u4E24\u5934\u53D8\u6210\u5706\u5F62\n*/\n#div1::before{\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background:radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);;\n}\n#div1::after{\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background:radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);;\n}\n";
var string2 = ''; // string = string.replace(/\n/g,'<br>');  //replace把回车变成换行br；/\n/g 正则表达式，选中所有的回车

var n = 0; // string[0].charCodeAt() 可以得到字符unicode编码
//采用递归的方式，运用setTimeout，每秒钟都会自动加1

var step = function step() {
  setTimeout(function () {
    //如果string[n]==='\n'，那么就<br>换行，否则就复制string[n]中的值
    // string2 += (string[n] === '\n' ? "<br>" : string[n])
    if (string[n] === '\n') {
      string2 += "<br>";
    } else if (string[n] === ' ') {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //JS设置页面的滚动条自动滚

    html.scrollTo(0, 99999); //JS设置页面的滚动条自动滚

    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.7d321040.js.map