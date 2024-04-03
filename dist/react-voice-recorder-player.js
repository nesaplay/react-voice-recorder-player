(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".voice-recorder_waveformcontainer{border-top-left-radius:inherit;border-top-right-radius:inherit;background-color:#efefef96;background-image:-webkit-linear-gradient(top,rgb(243,242,242),white)}.voice-recorder_defaultcontainer{align-items:center;display:flex;height:100%;padding:0 15px;width:100%}.voice-recorder_defaultcontainer p{font-style:italic}.voice-recorder_recordcontainer{height:100%;margin:0 20px}.voice-recorder_recordcontainer canvas{height:100%;width:100%}.voice-recorder_playbackcontainer{height:100%;margin:0 20px}.voice-recorder_playbackcontainer #playback,.voice-recorder_playbackcontainer audio{display:none}.voice-recorder_playbackcontainer canvas{width:100%;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer{position:relative;height:100%}.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .progressbar,.voice-recorder_playbackcontainer .voice-recorder_canvascontainer .waveformgraph-played-graph{position:absolute;left:0}.voice-recorder_controlscontainer{align-items:center;background-color:#efefef;border-top:1px solid #d8d5d5;border-bottom-left-radius:10px;border-bottom-right-radius:10px;display:flex;justify-content:flex-start;padding:0 15px}.voice-recorder_controlscontainer .voice-recorder_controls{align-items:center;display:flex;height:100%;width:100%}.voice-recorder_controlscontainer .voice-recorder_controlgeneric{all:unset;background:none;border:none;height:70%;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:disabled{pointer-events:none;opacity:.5}.voice-recorder_controlscontainer .voice-recorder_controlgeneric:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_controlgeneric svg{height:auto;width:65%;transition:all .1s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_controlgeneric>svg:hover{cursor:pointer;opacity:.8}.voice-recorder_controlscontainer .voice-recorder_control{align-items:center;aspect-ratio:1;background:rgba(128,128,128,.1607843137);background-image:-webkit-linear-gradient(283deg,rgba(236,236,236,.83) 50%,#dbdbdb 65%);border:1px solid #d8d5d5;border-radius:100%;box-shadow:0 0 8px #d2d2d2;display:flex;justify-content:center;margin-right:10px;position:relative;transition:all .2s ease-in-out}.voice-recorder_controlscontainer .voice-recorder_stopcontainer{align-items:center;background-color:#bebcbc29;border-radius:50px;display:flex;font-size:small;height:100%;justify-content:space-between;padding:0}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_stopwatch{margin-right:10px}.voice-recorder_controlscontainer .voice-recorder_stopcontainer .voice-recorder_control{height:100%}.voice-recorder_controlscontainer .voice-recorder_showblinking{animation:blinker 2s ease-in-out infinite}@keyframes blinker{50%{opacity:.5}}.voice-recorder_controlscontainer .voice-recorder_download{align-items:center;display:flex;height:100%;margin-left:auto}.voice-recorder_maincontainer{aspect-ratio:3/1;border:0px solid #d8d5d5;border-radius:10px;box-shadow:0 4px 8px #cecbcb;display:grid;grid-template-rows:2fr 1fr;margin:10px 30px;width:400px;color:#717171;font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}.voice-recorder_maincontainer canvas{image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}@media (max-width: 600px){.voice-recorder_maincontainer{aspect-ratio:auto;margin:0;width:100%;height:150px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as B from "react";
import He, { createContext as _r, useState as _e, useContext as Tr, useRef as pe, useEffect as ve } from "react";
var Kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Ye = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function Qr() {
  if (sr)
    return Se;
  sr = 1;
  var r = He, c = Symbol.for("react.element"), m = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(i, n, t) {
    var d, o = {}, l = null, h = null;
    t !== void 0 && (l = "" + t), n.key !== void 0 && (l = "" + n.key), n.ref !== void 0 && (h = n.ref);
    for (d in n)
      a.call(n, d) && !s.hasOwnProperty(d) && (o[d] = n[d]);
    if (i && i.defaultProps)
      for (d in n = i.defaultProps, n)
        o[d] === void 0 && (o[d] = n[d]);
    return { $$typeof: c, type: i, key: l, ref: h, props: o, _owner: u.current };
  }
  return Se.Fragment = m, Se.jsx = f, Se.jsxs = f, Se;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr;
function et() {
  return lr || (lr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = He, c = Symbol.for("react.element"), m = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), i = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), t = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = Symbol.iterator, g = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var v = b && e[b] || e[g];
      return typeof v == "function" ? v : null;
    }
    var R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var v = arguments.length, w = new Array(v > 1 ? v - 1 : 0), j = 1; j < v; j++)
          w[j - 1] = arguments[j];
        S("error", e, w);
      }
    }
    function S(e, v, w) {
      {
        var j = R.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (v += "%s", w = w.concat([Y]));
        var X = w.map(function(W) {
          return String(W);
        });
        X.unshift("Warning: " + v), Function.prototype.apply.call(console[e], console, X);
      }
    }
    var x = !1, p = !1, q = !1, G = !1, re = !1, C;
    C = Symbol.for("react.module.reference");
    function A(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === s || re || e === u || e === t || e === d || G || e === h || x || p || q || typeof e == "object" && e !== null && (e.$$typeof === l || e.$$typeof === o || e.$$typeof === f || e.$$typeof === i || e.$$typeof === n || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === C || e.getModuleId !== void 0));
    }
    function z(e, v, w) {
      var j = e.displayName;
      if (j)
        return j;
      var Y = v.displayName || v.name || "";
      return Y !== "" ? w + "(" + Y + ")" : w;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case m:
          return "Portal";
        case s:
          return "Profiler";
        case u:
          return "StrictMode";
        case t:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var v = e;
            return K(v) + ".Consumer";
          case f:
            var w = e;
            return K(w._context) + ".Provider";
          case n:
            return z(e, e.render, "ForwardRef");
          case o:
            var j = e.displayName || null;
            return j !== null ? j : L(e.type) || "Memo";
          case l: {
            var Y = e, X = Y._payload, W = Y._init;
            try {
              return L(W(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, oe = 0, Q, te, se, le, y, E, k;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function P() {
      {
        if (oe === 0) {
          Q = console.log, te = console.info, se = console.warn, le = console.error, y = console.group, E = console.groupCollapsed, k = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        oe++;
      }
    }
    function F() {
      {
        if (oe--, oe === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, e, {
              value: Q
            }),
            info: Z({}, e, {
              value: te
            }),
            warn: Z({}, e, {
              value: se
            }),
            error: Z({}, e, {
              value: le
            }),
            group: Z({}, e, {
              value: y
            }),
            groupCollapsed: Z({}, e, {
              value: E
            }),
            groupEnd: Z({}, e, {
              value: k
            })
          });
        }
        oe < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = R.ReactCurrentDispatcher, D;
    function $(e, v, w) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (Y) {
            var j = Y.stack.trim().match(/\n( *(at )?)/);
            D = j && j[1] || "";
          }
        return `
` + D + e;
      }
    }
    var V = !1, U;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      U = new ue();
    }
    function _(e, v) {
      if (!e || V)
        return "";
      {
        var w = U.get(e);
        if (w !== void 0)
          return w;
      }
      var j;
      V = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = M.current, M.current = null, P();
      try {
        if (v) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (ye) {
              j = ye;
            }
            Reflect.construct(e, [], W);
          } else {
            try {
              W.call();
            } catch (ye) {
              j = ye;
            }
            e.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            j = ye;
          }
          e();
        }
      } catch (ye) {
        if (ye && j && typeof ye.stack == "string") {
          for (var N = ye.stack.split(`
`), ce = j.stack.split(`
`), ne = N.length - 1, ae = ce.length - 1; ne >= 1 && ae >= 0 && N[ne] !== ce[ae]; )
            ae--;
          for (; ne >= 1 && ae >= 0; ne--, ae--)
            if (N[ne] !== ce[ae]) {
              if (ne !== 1 || ae !== 1)
                do
                  if (ne--, ae--, ae < 0 || N[ne] !== ce[ae]) {
                    var de = `
` + N[ne].replace(" at new ", " at ");
                    return e.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, de), de;
                  }
                while (ne >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        V = !1, M.current = X, F(), Error.prepareStackTrace = Y;
      }
      var Ee = e ? e.displayName || e.name : "", cr = Ee ? $(Ee) : "";
      return typeof e == "function" && U.set(e, cr), cr;
    }
    function fe(e, v, w) {
      return _(e, !1);
    }
    function be(e) {
      var v = e.prototype;
      return !!(v && v.isReactComponent);
    }
    function he(e, v, w) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _(e, be(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case t:
          return $("Suspense");
        case d:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            return fe(e.render);
          case o:
            return he(e.type, v, w);
          case l: {
            var j = e, Y = j._payload, X = j._init;
            try {
              return he(X(Y), v, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Xe = {}, Ke = R.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var v = e._owner, w = he(e.type, e._source, v ? v.type : null);
        Ke.setExtraStackFrame(w);
      } else
        Ke.setExtraStackFrame(null);
    }
    function Ar(e, v, w, j, Y) {
      {
        var X = Function.call.bind(Pe);
        for (var W in e)
          if (X(e, W)) {
            var N = void 0;
            try {
              if (typeof e[W] != "function") {
                var ce = Error((j || "React class") + ": " + w + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              N = e[W](v, W, j, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              N = ne;
            }
            N && !(N instanceof Error) && (Oe(Y), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", w, W, typeof N), Oe(null)), N instanceof Error && !(N.message in Xe) && (Xe[N.message] = !0, Oe(Y), O("Failed %s type: %s", w, N.message), Oe(null));
          }
      }
    }
    var jr = Array.isArray;
    function Me(e) {
      return jr(e);
    }
    function Ir(e) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, w = v && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return w;
      }
    }
    function Mr(e) {
      try {
        return Ze(e), !1;
      } catch {
        return !0;
      }
    }
    function Ze(e) {
      return "" + e;
    }
    function Qe(e) {
      if (Mr(e))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ir(e)), Ze(e);
    }
    var Te = R.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, De;
    De = {};
    function Fr(e) {
      if (Pe.call(e, "ref")) {
        var v = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function $r(e) {
      if (Pe.call(e, "key")) {
        var v = Object.getOwnPropertyDescriptor(e, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Lr(e, v) {
      if (typeof e.ref == "string" && Te.current && v && Te.current.stateNode !== v) {
        var w = L(Te.current.type);
        De[w] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(Te.current.type), e.ref), De[w] = !0);
      }
    }
    function Br(e, v) {
      {
        var w = function() {
          er || (er = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Ur(e, v) {
      {
        var w = function() {
          rr || (rr = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        w.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Vr = function(e, v, w, j, Y, X, W) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: v,
        ref: w,
        props: W,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Nr(e, v, w, j, Y) {
      {
        var X, W = {}, N = null, ce = null;
        w !== void 0 && (Qe(w), N = "" + w), $r(v) && (Qe(v.key), N = "" + v.key), Fr(v) && (ce = v.ref, Lr(v, Y));
        for (X in v)
          Pe.call(v, X) && !Dr.hasOwnProperty(X) && (W[X] = v[X]);
        if (e && e.defaultProps) {
          var ne = e.defaultProps;
          for (X in ne)
            W[X] === void 0 && (W[X] = ne[X]);
        }
        if (N || ce) {
          var ae = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          N && Br(W, ae), ce && Ur(W, ae);
        }
        return Vr(e, N, ce, Y, j, Te.current, W);
      }
    }
    var Fe = R.ReactCurrentOwner, tr = R.ReactDebugCurrentFrame;
    function we(e) {
      if (e) {
        var v = e._owner, w = he(e.type, e._source, v ? v.type : null);
        tr.setExtraStackFrame(w);
      } else
        tr.setExtraStackFrame(null);
    }
    var $e;
    $e = !1;
    function Le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function nr() {
      {
        if (Fe.current) {
          var e = L(Fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Wr(e) {
      {
        if (e !== void 0) {
          var v = e.fileName.replace(/^.*[\\\/]/, ""), w = e.lineNumber;
          return `

Check your code at ` + v + ":" + w + ".";
        }
        return "";
      }
    }
    var or = {};
    function qr(e) {
      {
        var v = nr();
        if (!v) {
          var w = typeof e == "string" ? e : e.displayName || e.name;
          w && (v = `

Check the top-level render call using <` + w + ">.");
        }
        return v;
      }
    }
    function ar(e, v) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var w = qr(v);
        if (or[w])
          return;
        or[w] = !0;
        var j = "";
        e && e._owner && e._owner !== Fe.current && (j = " It was passed a child from " + L(e._owner.type) + "."), we(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, j), we(null);
      }
    }
    function ir(e, v) {
      {
        if (typeof e != "object")
          return;
        if (Me(e))
          for (var w = 0; w < e.length; w++) {
            var j = e[w];
            Le(j) && ar(j, v);
          }
        else if (Le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var Y = T(e);
          if (typeof Y == "function" && Y !== e.entries)
            for (var X = Y.call(e), W; !(W = X.next()).done; )
              Le(W.value) && ar(W.value, v);
        }
      }
    }
    function Yr(e) {
      {
        var v = e.type;
        if (v == null || typeof v == "string")
          return;
        var w;
        if (typeof v == "function")
          w = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === n || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === o))
          w = v.propTypes;
        else
          return;
        if (w) {
          var j = L(v);
          Ar(w, e.props, "prop", j, e);
        } else if (v.PropTypes !== void 0 && !$e) {
          $e = !0;
          var Y = L(v);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gr(e) {
      {
        for (var v = Object.keys(e.props), w = 0; w < v.length; w++) {
          var j = v[w];
          if (j !== "children" && j !== "key") {
            we(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), we(null);
            break;
          }
        }
        e.ref !== null && (we(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function ur(e, v, w, j, Y, X) {
      {
        var W = A(e);
        if (!W) {
          var N = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Wr(Y);
          ce ? N += ce : N += nr();
          var ne;
          e === null ? ne = "null" : Me(e) ? ne = "array" : e !== void 0 && e.$$typeof === c ? (ne = "<" + (L(e.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, N);
        }
        var ae = Nr(e, v, w, Y, X);
        if (ae == null)
          return ae;
        if (W) {
          var de = v.children;
          if (de !== void 0)
            if (j)
              if (Me(de)) {
                for (var Ee = 0; Ee < de.length; Ee++)
                  ir(de[Ee], e);
                Object.freeze && Object.freeze(de);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(de, e);
        }
        return e === a ? Gr(ae) : Yr(ae), ae;
      }
    }
    function zr(e, v, w) {
      return ur(e, v, w, !0);
    }
    function Hr(e, v, w) {
      return ur(e, v, w, !1);
    }
    var Jr = Hr, Xr = zr;
    Re.Fragment = a, Re.jsx = Jr, Re.jsxs = Xr;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ye.exports = Qr() : Ye.exports = et();
var Sr = Ye.exports;
const ee = Sr.jsx, me = Sr.jsxs;
let ke;
const rt = new Uint8Array(16);
function tt() {
  if (!ke && (ke = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ke))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ke(rt);
}
const ie = [];
for (let r = 0; r < 256; ++r)
  ie.push((r + 256).toString(16).slice(1));
function nt(r, c = 0) {
  return ie[r[c + 0]] + ie[r[c + 1]] + ie[r[c + 2]] + ie[r[c + 3]] + "-" + ie[r[c + 4]] + ie[r[c + 5]] + "-" + ie[r[c + 6]] + ie[r[c + 7]] + "-" + ie[r[c + 8]] + ie[r[c + 9]] + "-" + ie[r[c + 10]] + ie[r[c + 11]] + ie[r[c + 12]] + ie[r[c + 13]] + ie[r[c + 14]] + ie[r[c + 15]];
}
const ot = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), fr = {
  randomUUID: ot
};
function at(r, c, m) {
  if (fr.randomUUID && !c && !r)
    return fr.randomUUID();
  r = r || {};
  const a = r.random || (r.rng || tt)();
  if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, c) {
    m = m || 0;
    for (let u = 0; u < 16; ++u)
      c[m + u] = a[u];
    return c;
  }
  return nt(a);
}
var Ge = { exports: {} }, Ae = { exports: {} }, H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dr;
function it() {
  if (dr)
    return H;
  dr = 1;
  var r = typeof Symbol == "function" && Symbol.for, c = r ? Symbol.for("react.element") : 60103, m = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, u = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, f = r ? Symbol.for("react.provider") : 60109, i = r ? Symbol.for("react.context") : 60110, n = r ? Symbol.for("react.async_mode") : 60111, t = r ? Symbol.for("react.concurrent_mode") : 60111, d = r ? Symbol.for("react.forward_ref") : 60112, o = r ? Symbol.for("react.suspense") : 60113, l = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, b = r ? Symbol.for("react.lazy") : 60116, g = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, R = r ? Symbol.for("react.responder") : 60118, O = r ? Symbol.for("react.scope") : 60119;
  function S(p) {
    if (typeof p == "object" && p !== null) {
      var q = p.$$typeof;
      switch (q) {
        case c:
          switch (p = p.type, p) {
            case n:
            case t:
            case a:
            case s:
            case u:
            case o:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case i:
                case d:
                case b:
                case h:
                case f:
                  return p;
                default:
                  return q;
              }
          }
        case m:
          return q;
      }
    }
  }
  function x(p) {
    return S(p) === t;
  }
  return H.AsyncMode = n, H.ConcurrentMode = t, H.ContextConsumer = i, H.ContextProvider = f, H.Element = c, H.ForwardRef = d, H.Fragment = a, H.Lazy = b, H.Memo = h, H.Portal = m, H.Profiler = s, H.StrictMode = u, H.Suspense = o, H.isAsyncMode = function(p) {
    return x(p) || S(p) === n;
  }, H.isConcurrentMode = x, H.isContextConsumer = function(p) {
    return S(p) === i;
  }, H.isContextProvider = function(p) {
    return S(p) === f;
  }, H.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }, H.isForwardRef = function(p) {
    return S(p) === d;
  }, H.isFragment = function(p) {
    return S(p) === a;
  }, H.isLazy = function(p) {
    return S(p) === b;
  }, H.isMemo = function(p) {
    return S(p) === h;
  }, H.isPortal = function(p) {
    return S(p) === m;
  }, H.isProfiler = function(p) {
    return S(p) === s;
  }, H.isStrictMode = function(p) {
    return S(p) === u;
  }, H.isSuspense = function(p) {
    return S(p) === o;
  }, H.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === a || p === t || p === s || p === u || p === o || p === l || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === h || p.$$typeof === f || p.$$typeof === i || p.$$typeof === d || p.$$typeof === T || p.$$typeof === R || p.$$typeof === O || p.$$typeof === g);
  }, H.typeOf = S, H;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr;
function ut() {
  return pr || (pr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, c = r ? Symbol.for("react.element") : 60103, m = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, u = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, f = r ? Symbol.for("react.provider") : 60109, i = r ? Symbol.for("react.context") : 60110, n = r ? Symbol.for("react.async_mode") : 60111, t = r ? Symbol.for("react.concurrent_mode") : 60111, d = r ? Symbol.for("react.forward_ref") : 60112, o = r ? Symbol.for("react.suspense") : 60113, l = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, b = r ? Symbol.for("react.lazy") : 60116, g = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, R = r ? Symbol.for("react.responder") : 60118, O = r ? Symbol.for("react.scope") : 60119;
    function S(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === a || _ === t || _ === s || _ === u || _ === o || _ === l || typeof _ == "object" && _ !== null && (_.$$typeof === b || _.$$typeof === h || _.$$typeof === f || _.$$typeof === i || _.$$typeof === d || _.$$typeof === T || _.$$typeof === R || _.$$typeof === O || _.$$typeof === g);
    }
    function x(_) {
      if (typeof _ == "object" && _ !== null) {
        var fe = _.$$typeof;
        switch (fe) {
          case c:
            var be = _.type;
            switch (be) {
              case n:
              case t:
              case a:
              case s:
              case u:
              case o:
                return be;
              default:
                var he = be && be.$$typeof;
                switch (he) {
                  case i:
                  case d:
                  case b:
                  case h:
                  case f:
                    return he;
                  default:
                    return fe;
                }
            }
          case m:
            return fe;
        }
      }
    }
    var p = n, q = t, G = i, re = f, C = c, A = d, z = a, K = b, L = h, Z = m, oe = s, Q = u, te = o, se = !1;
    function le(_) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(_) || x(_) === n;
    }
    function y(_) {
      return x(_) === t;
    }
    function E(_) {
      return x(_) === i;
    }
    function k(_) {
      return x(_) === f;
    }
    function I(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === c;
    }
    function P(_) {
      return x(_) === d;
    }
    function F(_) {
      return x(_) === a;
    }
    function M(_) {
      return x(_) === b;
    }
    function D(_) {
      return x(_) === h;
    }
    function $(_) {
      return x(_) === m;
    }
    function V(_) {
      return x(_) === s;
    }
    function U(_) {
      return x(_) === u;
    }
    function ue(_) {
      return x(_) === o;
    }
    J.AsyncMode = p, J.ConcurrentMode = q, J.ContextConsumer = G, J.ContextProvider = re, J.Element = C, J.ForwardRef = A, J.Fragment = z, J.Lazy = K, J.Memo = L, J.Portal = Z, J.Profiler = oe, J.StrictMode = Q, J.Suspense = te, J.isAsyncMode = le, J.isConcurrentMode = y, J.isContextConsumer = E, J.isContextProvider = k, J.isElement = I, J.isForwardRef = P, J.isFragment = F, J.isLazy = M, J.isMemo = D, J.isPortal = $, J.isProfiler = V, J.isStrictMode = U, J.isSuspense = ue, J.isValidElementType = S, J.typeOf = x;
  }()), J;
}
var vr;
function Rr() {
  return vr || (vr = 1, process.env.NODE_ENV === "production" ? Ae.exports = it() : Ae.exports = ut()), Ae.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Be, yr;
function ct() {
  if (yr)
    return Be;
  yr = 1;
  var r = Object.getOwnPropertySymbols, c = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
  function a(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var f = {}, i = 0; i < 10; i++)
        f["_" + String.fromCharCode(i)] = i;
      var n = Object.getOwnPropertyNames(f).map(function(d) {
        return f[d];
      });
      if (n.join("") !== "0123456789")
        return !1;
      var t = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        t[d] = d;
      }), Object.keys(Object.assign({}, t)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Be = u() ? Object.assign : function(s, f) {
    for (var i, n = a(s), t, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var o in i)
        c.call(i, o) && (n[o] = i[o]);
      if (r) {
        t = r(i);
        for (var l = 0; l < t.length; l++)
          m.call(i, t[l]) && (n[t[l]] = i[t[l]]);
      }
    }
    return n;
  }, Be;
}
var Ue, gr;
function Je() {
  if (gr)
    return Ue;
  gr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ue = r, Ue;
}
var Ve, hr;
function xr() {
  return hr || (hr = 1, Ve = Function.call.bind(Object.prototype.hasOwnProperty)), Ve;
}
var Ne, mr;
function st() {
  if (mr)
    return Ne;
  mr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var c = Je(), m = {}, a = xr();
    r = function(s) {
      var f = "Warning: " + s;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function u(s, f, i, n, t) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (a(s, d)) {
          var o;
          try {
            if (typeof s[d] != "function") {
              var l = Error(
                (n || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw l.name = "Invariant Violation", l;
            }
            o = s[d](f, d, n, i, null, c);
          } catch (b) {
            o = b;
          }
          if (o && !(o instanceof Error) && r(
            (n || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof o + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), o instanceof Error && !(o.message in m)) {
            m[o.message] = !0;
            var h = t ? t() : "";
            r(
              "Failed " + i + " type: " + o.message + (h ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (m = {});
  }, Ne = u, Ne;
}
var We, br;
function lt() {
  if (br)
    return We;
  br = 1;
  var r = Rr(), c = ct(), m = Je(), a = xr(), u = st(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(i) {
    var n = "Warning: " + i;
    typeof console < "u" && console.error(n);
    try {
      throw new Error(n);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return We = function(i, n) {
    var t = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function o(y) {
      var E = y && (t && y[t] || y[d]);
      if (typeof E == "function")
        return E;
    }
    var l = "<<anonymous>>", h = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: O(),
      arrayOf: S,
      element: x(),
      elementType: p(),
      instanceOf: q,
      node: A(),
      objectOf: re,
      oneOf: G,
      oneOfType: C,
      shape: K,
      exact: L
    };
    function b(y, E) {
      return y === E ? y !== 0 || 1 / y === 1 / E : y !== y && E !== E;
    }
    function g(y, E) {
      this.message = y, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function T(y) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, k = 0;
      function I(F, M, D, $, V, U, ue) {
        if ($ = $ || l, U = U || D, ue !== m) {
          if (n) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = $ + ":" + D;
            !E[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + U + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[fe] = !0, k++);
          }
        }
        return M[D] == null ? F ? M[D] === null ? new g("The " + V + " `" + U + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new g("The " + V + " `" + U + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : y(M, D, $, V, U);
      }
      var P = I.bind(null, !1);
      return P.isRequired = I.bind(null, !0), P;
    }
    function R(y) {
      function E(k, I, P, F, M, D) {
        var $ = k[I], V = Q($);
        if (V !== y) {
          var U = te($);
          return new g(
            "Invalid " + F + " `" + M + "` of type " + ("`" + U + "` supplied to `" + P + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return T(E);
    }
    function O() {
      return T(f);
    }
    function S(y) {
      function E(k, I, P, F, M) {
        if (typeof y != "function")
          return new g("Property `" + M + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var D = k[I];
        if (!Array.isArray(D)) {
          var $ = Q(D);
          return new g("Invalid " + F + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected an array."));
        }
        for (var V = 0; V < D.length; V++) {
          var U = y(D, V, P, F, M + "[" + V + "]", m);
          if (U instanceof Error)
            return U;
        }
        return null;
      }
      return T(E);
    }
    function x() {
      function y(E, k, I, P, F) {
        var M = E[k];
        if (!i(M)) {
          var D = Q(M);
          return new g("Invalid " + P + " `" + F + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return T(y);
    }
    function p() {
      function y(E, k, I, P, F) {
        var M = E[k];
        if (!r.isValidElementType(M)) {
          var D = Q(M);
          return new g("Invalid " + P + " `" + F + "` of type " + ("`" + D + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return T(y);
    }
    function q(y) {
      function E(k, I, P, F, M) {
        if (!(k[I] instanceof y)) {
          var D = y.name || l, $ = le(k[I]);
          return new g("Invalid " + F + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return T(E);
    }
    function G(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), f;
      function E(k, I, P, F, M) {
        for (var D = k[I], $ = 0; $ < y.length; $++)
          if (b(D, y[$]))
            return null;
        var V = JSON.stringify(y, function(ue, _) {
          var fe = te(_);
          return fe === "symbol" ? String(_) : _;
        });
        return new g("Invalid " + F + " `" + M + "` of value `" + String(D) + "` " + ("supplied to `" + P + "`, expected one of " + V + "."));
      }
      return T(E);
    }
    function re(y) {
      function E(k, I, P, F, M) {
        if (typeof y != "function")
          return new g("Property `" + M + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var D = k[I], $ = Q(D);
        if ($ !== "object")
          return new g("Invalid " + F + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + P + "`, expected an object."));
        for (var V in D)
          if (a(D, V)) {
            var U = y(D, V, P, F, M + "." + V, m);
            if (U instanceof Error)
              return U;
          }
        return null;
      }
      return T(E);
    }
    function C(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var E = 0; E < y.length; E++) {
        var k = y[E];
        if (typeof k != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(k) + " at index " + E + "."
          ), f;
      }
      function I(P, F, M, D, $) {
        for (var V = [], U = 0; U < y.length; U++) {
          var ue = y[U], _ = ue(P, F, M, D, $, m);
          if (_ == null)
            return null;
          _.data && a(_.data, "expectedType") && V.push(_.data.expectedType);
        }
        var fe = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new g("Invalid " + D + " `" + $ + "` supplied to " + ("`" + M + "`" + fe + "."));
      }
      return T(I);
    }
    function A() {
      function y(E, k, I, P, F) {
        return Z(E[k]) ? null : new g("Invalid " + P + " `" + F + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return T(y);
    }
    function z(y, E, k, I, P) {
      return new g(
        (y || "React class") + ": " + E + " type `" + k + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function K(y) {
      function E(k, I, P, F, M) {
        var D = k[I], $ = Q(D);
        if ($ !== "object")
          return new g("Invalid " + F + " `" + M + "` of type `" + $ + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var V in y) {
          var U = y[V];
          if (typeof U != "function")
            return z(P, F, M, V, te(U));
          var ue = U(D, V, P, F, M + "." + V, m);
          if (ue)
            return ue;
        }
        return null;
      }
      return T(E);
    }
    function L(y) {
      function E(k, I, P, F, M) {
        var D = k[I], $ = Q(D);
        if ($ !== "object")
          return new g("Invalid " + F + " `" + M + "` of type `" + $ + "` " + ("supplied to `" + P + "`, expected `object`."));
        var V = c({}, k[I], y);
        for (var U in V) {
          var ue = y[U];
          if (a(y, U) && typeof ue != "function")
            return z(P, F, M, U, te(ue));
          if (!ue)
            return new g(
              "Invalid " + F + " `" + M + "` key `" + U + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(k[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var _ = ue(D, U, P, F, M + "." + U, m);
          if (_)
            return _;
        }
        return null;
      }
      return T(E);
    }
    function Z(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(Z);
          if (y === null || i(y))
            return !0;
          var E = o(y);
          if (E) {
            var k = E.call(y), I;
            if (E !== y.entries) {
              for (; !(I = k.next()).done; )
                if (!Z(I.value))
                  return !1;
            } else
              for (; !(I = k.next()).done; ) {
                var P = I.value;
                if (P && !Z(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(y, E) {
      return y === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function Q(y) {
      var E = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : oe(E, y) ? "symbol" : E;
    }
    function te(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var E = Q(y);
      if (E === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function se(y) {
      var E = te(y);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function le(y) {
      return !y.constructor || !y.constructor.name ? l : y.constructor.name;
    }
    return h.checkPropTypes = u, h.resetWarningCache = u.resetWarningCache, h.PropTypes = h, h;
  }, We;
}
var qe, wr;
function ft() {
  if (wr)
    return qe;
  wr = 1;
  var r = Je();
  function c() {
  }
  function m() {
  }
  return m.resetWarningCache = c, qe = function() {
    function a(f, i, n, t, d, o) {
      if (o !== r) {
        var l = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw l.name = "Invariant Violation", l;
      }
    }
    a.isRequired = a;
    function u() {
      return a;
    }
    var s = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: u,
      element: a,
      elementType: a,
      instanceOf: u,
      node: a,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: m,
      resetWarningCache: c
    };
    return s.PropTypes = s, s;
  }, qe;
}
if (process.env.NODE_ENV !== "production") {
  var dt = Rr(), pt = !0;
  Ge.exports = lt()(dt.isElement, pt);
} else
  Ge.exports = ft()();
var vt = Ge.exports;
const xe = /* @__PURE__ */ Zr(vt), Cr = _r({
  audioStatus: "",
  audioRecording: void 0,
  updateAudioStatus: () => {
  },
  updateAudioRecording: () => {
  }
});
function yt({ children: r }) {
  const [c, m] = _e(""), [a, u] = _e(), i = {
    audioStatus: c,
    audioRecording: a,
    updateAudioStatus: (n) => m(n),
    updateAudioRecording: (n) => u(n)
  };
  return /* @__PURE__ */ ee(Cr.Provider, { value: i, children: r });
}
function Ce() {
  const r = Tr(Cr);
  if (r === void 0)
    throw new Error("useAudio must be used within a AudioProvider");
  return r;
}
const Pr = _r({
  mainContainerStyle: {},
  controllerContainerStyle: {},
  controllerStyle: {},
  waveContainerStyle: {},
  graphColor: "#000",
  graphShaded: !1,
  height: "inherit",
  width: "inherit",
  downloadable: !1,
  onAudioDownload: () => {
  },
  onRecordingStart: () => {
  },
  onRecordingEnd: () => {
  },
  onPlayStart: () => {
  },
  onPlayEnd: () => {
  },
  onRecordingPause: () => {
  },
  onPlayPause: () => {
  },
  rootElementId: ""
});
function gt({ userPropsValue: r, children: c }) {
  return /* @__PURE__ */ ee(Pr.Provider, { value: r, children: c });
}
function Ie() {
  const r = Tr(Pr);
  if (r === void 0)
    throw new Error("useUserProps must be used within a UserPropsProvider");
  return r;
}
const ht = (r, c) => {
  if (!r.length)
    return null;
  const m = [];
  return r.forEach((a) => {
    const u = c == null ? void 0 : c.getElementsByClassName(a);
    return u != null && u.length && m.push(u[0]), u;
  }), m.length ? m : null;
}, mt = (r) => {
  r && r.forEach((c) => {
    c.remove();
  });
}, bt = (r) => r.map((m) => {
  const a = document.createElement("canvas");
  return a.className = m, a;
}), wt = (r, c) => {
  r.forEach((m) => {
    const a = m.getContext("2d");
    a && (a.clearRect(0, 0, m.width, m.height), a.clearRect(0, 0, m.width, m.height), m.width = ((c == null ? void 0 : c.clientWidth) ?? 1) * devicePixelRatio, m.height = ((c == null ? void 0 : c.clientHeight) ?? 1) * devicePixelRatio, a == null || a.scale(devicePixelRatio, devicePixelRatio));
  });
}, Et = (r, c) => {
  r.forEach((m) => {
    m.style.width = (c == null ? void 0 : c.clientWidth) + "px", m.style.height = (c == null ? void 0 : c.clientHeight) + "px";
  });
}, _t = (r, c) => {
  r.forEach((m) => {
    c == null || c.appendChild(m);
  });
}, Or = (r, c, m) => {
  try {
    const u = document.getElementById(r).querySelector(m), s = ht(c, u);
    mt(s);
    const f = bt(c);
    return wt(f, u), Et(f, u), _t(f, u), f;
  } catch (a) {
    return console.error("Error in setUpCanvas: ", a), null;
  }
}, je = { solid: "rgb(54, 54, 54)", faded: "rgb(210, 209, 208)" }, Tt = (r, c, m) => {
  const a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
  if (!a)
    return je;
  const u = parseInt(a[1], 16), s = parseInt(a[2], 16), f = parseInt(a[3], 16);
  if (c && m) {
    const i = Math.round(u * c / 100), n = Math.round(s * c / 100), t = Math.round(f * c / 100);
    return {
      solid: `rgb(${i}, ${n}, ${t})`,
      faded: `rgb(${i}, ${n}, ${t}, 0.5)`
    };
  }
  return {
    solid: `rgb(${u}, ${s}, ${f})`,
    faded: `rgb(${u}, ${s}, ${f}, 0.5)`
  };
}, St = (r) => {
  const c = new Option().style;
  return c.color = r, c.color == r;
}, Rt = (r) => {
  const c = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    "indianred ": "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  return typeof c[r.toLowerCase()] < "u" ? c[r.toLowerCase()] : "#000";
}, ze = (r, c, m) => {
  try {
    if (!r || !St(r))
      return je;
    const a = Rt(r);
    return Tt(a, c, m);
  } catch {
    return je;
  }
};
const xt = 100, Er = 2;
function Ct() {
  const { audioStatus: r = "", updateAudioRecording: c } = Ce(), { graphColor: m, graphShaded: a, rootElementId: u, onRecordingEnd: s } = Ie(), [f, i] = _e(0), n = pe(null), t = pe({}), d = pe(r);
  ve(() => {
    var g, T, R, O, S, x, p, q, G, re, C, A;
    d.current = r, r === "recording" && (((T = (g = t == null ? void 0 : t.current) == null ? void 0 : g.audioContext) == null ? void 0 : T.state) === "suspended" ? (t.current.audioContext.resume().then(h), (O = (R = t.current) == null ? void 0 : R.mediaRecorder) == null || O.resume()) : (x = (S = t == null ? void 0 : t.current) == null ? void 0 : S.audioContext) != null && x.state || navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(l)), r === "stopped" && ((q = (p = t == null ? void 0 : t.current) == null ? void 0 : p.mediaRecorder) == null || q.stop()), r === "paused_recording" && ((re = (G = t == null ? void 0 : t.current) == null ? void 0 : G.audioContext) == null || re.suspend(), (A = (C = t == null ? void 0 : t.current) == null ? void 0 : C.mediaRecorder) == null || A.pause());
  }, [r]), ve(() => {
    o(), window.addEventListener("resize", o);
  }, []);
  const o = () => {
    const g = Or(u, ["waveformgraph-record"], ".voice-recorder_recordcontainer");
    g && (n.current = g[0]);
  }, l = (g) => {
    var T;
    try {
      const R = window.AudioContext || (window == null ? void 0 : window.webkitAudioContext), O = new R();
      t.current.audioContext = O;
      const S = O.createMediaStreamSource(g);
      t.current.analyserNode = O.createAnalyser(), S.connect((T = t == null ? void 0 : t.current) == null ? void 0 : T.analyserNode), t.current.analyserNode.fftSize = 128;
      const x = t.current.analyserNode.frequencyBinCount, p = new Float32Array(x);
      t.current.dataArray = p;
      const q = new MediaRecorder(g);
      t.current.mediaRecorder = q, q.start(), q.addEventListener("dataavailable", async (G) => {
        const re = await G.data.arrayBuffer(), C = await O.decodeAudioData(re), A = { blob: G.data, duration: C.duration, graphData: t.current.graphData ?? [] };
        s == null || s(G.data), c(A);
      }), q.addEventListener("stop", () => {
        g.getTracks().forEach((G) => G.stop()), S.disconnect(), O.close();
      }), h();
    } catch (R) {
      console.log("error", R);
    }
  }, h = () => {
    var R, O, S, x, p, q, G, re, C, A, z;
    const g = (R = n == null ? void 0 : n.current) == null ? void 0 : R.getContext("2d");
    if (d.current !== "recording")
      return null;
    g == null || g.clearRect(0, 0, ((O = n == null ? void 0 : n.current) == null ? void 0 : O.width) ?? 1, ((S = n == null ? void 0 : n.current) == null ? void 0 : S.height) ?? 1);
    let T = -1 / 0;
    if (Number(performance.now()) > f) {
      if (i(Number(performance.now() / xt)), !((x = t == null ? void 0 : t.current) != null && x.dataArray))
        return null;
      (G = (p = t == null ? void 0 : t.current) == null ? void 0 : p.analyserNode) == null || G.getFloatTimeDomainData((q = t == null ? void 0 : t.current) == null ? void 0 : q.dataArray), T = Math.max(0, ...((re = t == null ? void 0 : t.current) == null ? void 0 : re.dataArray) ?? []);
      const K = Math.max(1, Math.floor(T * 550));
      t.current.graphData === void 0 && (t.current.graphData = []), (z = t.current) == null || z.graphData.push({
        x: ((C = n == null ? void 0 : n.current) == null ? void 0 : C.offsetWidth) ?? 1,
        y: (((A = n == null ? void 0 : n.current) == null ? void 0 : A.offsetHeight) ?? 1) / 2 - K / 2,
        height: K,
        width: Er
      });
    }
    b(), requestAnimationFrame(h);
  }, b = () => {
    var T, R, O, S;
    const g = (T = n == null ? void 0 : n.current) == null ? void 0 : T.getContext("2d");
    if (!g || !((R = t.current) != null && R.graphData))
      return null;
    for (let x = 0; x < ((O = t.current) == null ? void 0 : O.graphData.length); x++) {
      const p = (S = t.current) == null ? void 0 : S.graphData[x];
      p && (g.fillStyle = ze(m, p.height, a).solid, g == null || g.fillRect(p.x, p.y, p.width, p.height), p.x = p.x - Er);
    }
  };
  return /* @__PURE__ */ ee("div", { className: "voice-recorder_recordcontainer" });
}
const Pt = 0.06;
function Ot() {
  const [r, c] = _e([]), { audioRecording: m, audioStatus: a, updateAudioStatus: u } = Ce(), { graphColor: s, graphShaded: f, rootElementId: i, onPlayEnd: n } = Ie(), t = pe(null), d = pe(null), o = pe(null), l = pe(null), h = pe(), { blob: b, duration: g = 0, graphData: T = [] } = m || {}, R = pe(T);
  ve(() => {
    window.addEventListener("resize", G);
  }, []), ve(() => {
    b && (a === "playing_requested" ? p() : a === "playing" ? re() : a === "paused_playing" ? (x(), clearInterval(h.current)) : a === "stopped" && clearInterval(h.current));
  }, [a]), ve(() => {
    R.current = T;
    try {
      T.length && G();
    } catch (C) {
      console.log("error", C);
    }
  }, [T]);
  const O = (C) => {
    var z, K, L;
    const A = (z = C == null ? void 0 : C.current) == null ? void 0 : z.getContext("2d");
    A == null || A.clearRect(0, 0, ((K = C == null ? void 0 : C.current) == null ? void 0 : K.width) ?? 1, ((L = C == null ? void 0 : C.current) == null ? void 0 : L.height) ?? 1);
  }, S = () => {
    const C = Or(
      i,
      [
        "waveformgraph-unplayed-graph",
        "waveformgraph-played-graph",
        "progressbar"
      ],
      ".voice-recorder_canvascontainer"
    );
    t.current = C == null ? void 0 : C.find((A) => A.className === "waveformgraph-unplayed-graph"), d.current = C == null ? void 0 : C.find((A) => A.className === "waveformgraph-played-graph"), o.current = C == null ? void 0 : C.find((A) => A.className === "progressbar");
  }, x = () => {
    var C;
    return (C = l == null ? void 0 : l.current) == null ? void 0 : C.pause();
  }, p = () => {
    const A = document.getElementById(i).querySelector("#playback_audio");
    if (A.autoplay = !0, A.readyState !== 4) {
      const z = window.URL.createObjectURL(new Blob([b], { type: "audio/mpeg" }));
      A.src = z, A.onloadeddata = () => {
        A.play(), u("playing");
      };
    } else
      A.paused ? (A.play(), u("playing")) : (A.currentTime = 0, A.play(), u("playing"));
    A.onended = () => {
      b && (n == null || n(b)), u("stopped");
    };
  }, q = () => {
    var z;
    const C = [];
    if (!(R != null && R.current.length))
      return C;
    const A = (((z = t == null ? void 0 : t.current) == null ? void 0 : z.offsetWidth) ?? 1) / (R == null ? void 0 : R.current.length);
    return R == null || R.current.forEach((K, L) => {
      var oe;
      const Z = ((oe = C[L - 1]) == null ? void 0 : oe.x) || 0;
      C.push({
        ...K,
        x: Z + A,
        width: A
      });
    }), c(C), C;
  }, G = () => {
    var A;
    S();
    const C = (A = t == null ? void 0 : t.current) == null ? void 0 : A.getContext("2d");
    if (C) {
      const z = q();
      for (let K = 0; K < z.length; K++) {
        const L = z[K];
        C.fillStyle = ze(s, L.height, f).faded, C.fillRect(L.x, L.y, L.width, L.height);
      }
    }
  }, re = () => {
    var le, y, E;
    (((le = l == null ? void 0 : l.current) == null ? void 0 : le.currentTime) ?? 1) > 0 || O(d);
    const A = Math.abs(g - Pt), z = T.length, K = A / z * 1e3;
    let L = 0, Z, oe;
    const Q = (y = o == null ? void 0 : o.current) == null ? void 0 : y.getContext("2d"), te = (E = d == null ? void 0 : d.current) == null ? void 0 : E.getContext("2d");
    function se() {
      var I, P, F, M, D, $, V;
      if (!te || !Q || (L = Math.round(z * ((((I = l == null ? void 0 : l.current) == null ? void 0 : I.currentTime) ?? 1) / A)), oe === ((P = l == null ? void 0 : l.current) == null ? void 0 : P.currentTime) || Z === L))
        return;
      if (oe = (F = l == null ? void 0 : l.current) == null ? void 0 : F.currentTime, Z = L, L >= z) {
        clearInterval(h.current);
        return;
      }
      const k = r[L];
      te.fillStyle = ze(s, k.height, f).solid, te == null || te.fillRect(k.x, k.y, k.width, k.height), +k.x.toFixed(3) < (((M = o == null ? void 0 : o.current) == null ? void 0 : M.offsetWidth) ?? 1) && (Q == null || Q.clearRect(0, 0, ((D = o == null ? void 0 : o.current) == null ? void 0 : D.width) ?? 1, (($ = o == null ? void 0 : o.current) == null ? void 0 : $.height) ?? 1), Q == null || Q.fillRect(k.x, 0, 1, ((V = o == null ? void 0 : o.current) == null ? void 0 : V.offsetHeight) ?? 1));
    }
    se(), h.current = setInterval(se, K);
  };
  return /* @__PURE__ */ me("div", { className: "voice-recorder_playbackcontainer", children: [
    /* @__PURE__ */ ee("audio", { ref: l, controls: !0, id: "playback_audio", children: /* @__PURE__ */ ee("track", { src: "captions.vtt", kind: "captions", srcLang: "en", label: "English" }) }),
    /* @__PURE__ */ ee("div", { className: "voice-recorder_canvascontainer" })
  ] });
}
function kt() {
  const { audioStatus: r } = Ce(), { waveContainerStyle: c } = Ie(), [m, a] = _e("");
  return ve(() => {
    a(r === "playing" || r === "playing_requested" || r === "paused_playing" || r === "stopped" ? "playing" : "recording");
  }, [r]), /* @__PURE__ */ me("div", { className: "voice-recorder_waveformcontainer", style: c, children: [
    m === "playing" ? /* @__PURE__ */ ee(Ot, {}) : null,
    m === "recording" ? /* @__PURE__ */ ee(Ct, {}) : null
  ] });
}
const At = (r) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "-40 -25 600 600", xmlns: "http://www.w3.org/2000/svg", fill: "#000000", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { fill: "#000000", d: "M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z" }))), jt = (r) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-3 -2 20.804 20.804", xmlSpace: "preserve", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("g", { id: "c98_play" }, /* @__PURE__ */ B.createElement("path", { d: "M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313 c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04 c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z" })), /* @__PURE__ */ B.createElement("g", { id: "Capa_1_78_" })))), It = (r) => /* @__PURE__ */ B.createElement("svg", { className: "voice-recorder-icon", width: "100px", height: "100px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", fill: "#000000", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("title", null, "microphone-filled"), /* @__PURE__ */ B.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ B.createElement("g", { id: "icon", fill: "#000000", transform: "translate(85.333333, 42.666667)" }, /* @__PURE__ */ B.createElement("path", { d: "M42.6666667,170.666667 C42.6666667,183.68 47.1466667,298.666667 170.666667,298.666667 C294.186667,298.666667 298.666667,183.68 298.666667,170.666667 L298.666667,170.666667 L341.333333,170.666667 C341.333333,226.346667 309.333333,328.96 192,341.333333 L192,341.333333 L192,426.666667 L149.333333,426.666667 L149.333333,341.333333 C32,328.96 1.42108547e-14,226.346667 1.42108547e-14,170.666667 L1.42108547e-14,170.666667 Z M170.666667,7.10542736e-15 C211.903928,7.10542736e-15 245.333333,33.4294053 245.333333,74.6666667 L245.333333,74.6666667 L245.333333,181.333333 C245.333333,222.570595 211.903928,256 170.666667,256 C150.863835,256 131.872077,248.133356 117.86936,234.13064 C103.866644,220.127923 96,201.136165 96,181.333333 L96,181.333333 L96,74.6666667 C96,33.4294053 129.429405,7.10542736e-15 170.666667,7.10542736e-15 Z", id: "voice" }))))), Mt = (r) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", height: "100px", width: "100px", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "-35 -35 590 590", enableBackground: "new 0 0 512 512", xmlSpace: "preserve", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M512,192V21.3l-64.9,64.9C400.3,33.4,332.2,0,256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c70.7,0,134.7-28.6,181-75 l-45.3-45.2C357,426.5,309,448,256,448c-106,0-192-85.9-192-192c0-106.1,86-192,192-192c58.5,0,110.4,26.5,145.5,67.8L341.3,192H512 z" }))), Dt = (r) => /* @__PURE__ */ B.createElement("svg", { fill: "#000000", viewBox: "-15 -15 525 525", xmlSpace: "preserve", width: "70px", height: "70px", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("polygon", { points: "360.352,232.334 324.344,203.803 267.969,274.968 267.969,0 222.031,0 222.031,274.968 165.656,203.803 129.648,232.334 245,377.923 " }), /* @__PURE__ */ B.createElement("rect", { x: 58.02, y: 444.063, width: 373.96, height: 45.938 }))));
var kr = { exports: {} };
(function(r, c) {
  (function(m, a) {
    r.exports = a(He);
  })(typeof self < "u" ? self : Kr, function(m) {
    return function(a) {
      var u = {};
      function s(f) {
        if (u[f])
          return u[f].exports;
        var i = u[f] = { i: f, l: !1, exports: {} };
        return a[f].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
      }
      return s.m = a, s.c = u, s.d = function(f, i, n) {
        s.o(f, i) || Object.defineProperty(f, i, { enumerable: !0, get: n });
      }, s.r = function(f) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
      }, s.t = function(f, i) {
        if (1 & i && (f = s(f)), 8 & i || 4 & i && typeof f == "object" && f && f.__esModule)
          return f;
        var n = /* @__PURE__ */ Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: f }), 2 & i && typeof f != "string")
          for (var t in f)
            s.d(n, t, function(d) {
              return f[d];
            }.bind(null, t));
        return n;
      }, s.n = function(f) {
        var i = f && f.__esModule ? function() {
          return f.default;
        } : function() {
          return f;
        };
        return s.d(i, "a", i), i;
      }, s.o = function(f, i) {
        return Object.prototype.hasOwnProperty.call(f, i);
      }, s.p = "", s(s.s = 3);
    }([function(a, u) {
      a.exports = m;
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.Validate = u.Time = void 0;
      var f = n(s(5)), i = n(s(6));
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      u.Time = f.default, u.Validate = i.default;
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.useInterval = void 0;
      var f = function(i) {
        return i && i.__esModule ? i : { default: i };
      }(s(7));
      u.useInterval = f.default;
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.useTime = u.useStopwatch = u.useTimer = void 0;
      var f = Object.assign || function(l) {
        for (var h = 1; h < arguments.length; h++) {
          var b = arguments[h];
          for (var g in b)
            Object.prototype.hasOwnProperty.call(b, g) && (l[g] = b[g]);
        }
        return l;
      };
      u.default = function(l) {
        if ((0, i.useEffect)(function() {
          console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead");
        }, []), l.expiryTimestamp) {
          var h = (0, n.default)(l);
          return f({}, h, { startTimer: h.start, stopTimer: h.pause, resetTimer: function() {
          } });
        }
        var b = (0, t.default)(l);
        return f({}, b, { startTimer: b.start, stopTimer: b.pause, resetTimer: b.reset });
      };
      var i = s(0), n = o(s(4)), t = o(s(8)), d = o(s(9));
      function o(l) {
        return l && l.__esModule ? l : { default: l };
      }
      u.useTimer = n.default, u.useStopwatch = t.default, u.useTime = d.default;
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var f = Object.assign || function(h) {
        for (var b = 1; b < arguments.length; b++) {
          var g = arguments[b];
          for (var T in g)
            Object.prototype.hasOwnProperty.call(g, T) && (h[T] = g[T]);
        }
        return h;
      }, i = function() {
        return function(h, b) {
          if (Array.isArray(h))
            return h;
          if (Symbol.iterator in Object(h))
            return function(g, T) {
              var R = [], O = !0, S = !1, x = void 0;
              try {
                for (var p, q = g[Symbol.iterator](); !(O = (p = q.next()).done) && (R.push(p.value), !T || R.length !== T); O = !0)
                  ;
              } catch (G) {
                S = !0, x = G;
              } finally {
                try {
                  !O && q.return && q.return();
                } finally {
                  if (S)
                    throw x;
                }
              }
              return R;
            }(h, b);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(h) {
        var b = h.expiryTimestamp, g = h.onExpire, T = h.autoStart, R = T === void 0 || T, O = (0, n.useState)(b), S = i(O, 2), x = S[0], p = S[1], q = (0, n.useState)(t.Time.getSecondsFromExpiry(x)), G = i(q, 2), re = G[0], C = G[1], A = (0, n.useState)(R), z = i(A, 2), K = z[0], L = z[1], Z = (0, n.useState)(R), oe = i(Z, 2), Q = oe[0], te = oe[1], se = (0, n.useState)(l(x)), le = i(se, 2), y = le[0], E = le[1];
        function k(P) {
          var F = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
          E(l(P)), te(F), L(F), p(P), C(t.Time.getSecondsFromExpiry(P));
        }
        function I() {
          var P = /* @__PURE__ */ new Date();
          P.setMilliseconds(P.getMilliseconds() + 1e3 * re), k(P);
        }
        return (0, d.useInterval)(function() {
          y !== o && E(o);
          var P = t.Time.getSecondsFromExpiry(x);
          C(P), P <= 0 && (t.Validate.onExpire(g) && g(), L(!1), E(null));
        }, K ? y : null), f({}, t.Time.getTimeFromSeconds(re), { start: function() {
          Q ? (C(t.Time.getSecondsFromExpiry(x)), L(!0)) : I();
        }, pause: function() {
          L(!1);
        }, resume: I, restart: k, isRunning: K });
      };
      var n = s(0), t = s(1), d = s(2), o = 1e3;
      function l(h) {
        if (!t.Validate.expiryTimestamp(h))
          return null;
        var b = t.Time.getSecondsFromExpiry(h), g = Math.floor(1e3 * (b - Math.floor(b)));
        return g > 0 ? g : o;
      }
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var f = function() {
        function n(t, d) {
          for (var o = 0; o < d.length; o++) {
            var l = d[o];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(t, l.key, l);
          }
        }
        return function(t, d, o) {
          return d && n(t.prototype, d), o && n(t, o), t;
        };
      }(), i = function() {
        function n() {
          (function(t, d) {
            if (!(t instanceof d))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
        }
        return f(n, null, [{ key: "getTimeFromSeconds", value: function(t) {
          var d = Math.ceil(t), o = Math.floor(d / 86400), l = Math.floor(d % 86400 / 3600), h = Math.floor(d % 3600 / 60);
          return { seconds: Math.floor(d % 60), minutes: h, hours: l, days: o };
        } }, { key: "getSecondsFromExpiry", value: function(t, d) {
          var o = t - (/* @__PURE__ */ new Date()).getTime();
          if (o > 0) {
            var l = o / 1e3;
            return d ? Math.round(l) : l;
          }
          return 0;
        } }, { key: "getSecondsFromPrevTime", value: function(t, d) {
          var o = (/* @__PURE__ */ new Date()).getTime() - t;
          if (o > 0) {
            var l = o / 1e3;
            return d ? Math.round(l) : l;
          }
          return 0;
        } }, { key: "getSecondsFromTimeNow", value: function() {
          var t = /* @__PURE__ */ new Date();
          return t.getTime() / 1e3 - 60 * t.getTimezoneOffset();
        } }, { key: "getFormattedTimeFromSeconds", value: function(t, d) {
          var o = n.getTimeFromSeconds(t), l = o.seconds, h = o.minutes, b = o.hours, g = "", T = b;
          return d === "12-hour" && (g = b >= 12 ? "pm" : "am", T = b % 12), { seconds: l, minutes: h, hours: T, ampm: g };
        } }]), n;
      }();
      u.default = i;
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var f = function() {
        function n(t, d) {
          for (var o = 0; o < d.length; o++) {
            var l = d[o];
            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(t, l.key, l);
          }
        }
        return function(t, d, o) {
          return d && n(t.prototype, d), o && n(t, o), t;
        };
      }(), i = function() {
        function n() {
          (function(t, d) {
            if (!(t instanceof d))
              throw new TypeError("Cannot call a class as a function");
          })(this, n);
        }
        return f(n, null, [{ key: "expiryTimestamp", value: function(t) {
          var d = new Date(t).getTime() > 0;
          return d || console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings", t), d;
        } }, { key: "onExpire", value: function(t) {
          var d = t && typeof t == "function";
          return t && !d && console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function", t), d;
        } }]), n;
      }();
      u.default = i;
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 }), u.default = function(i, n) {
        var t = (0, f.useRef)();
        (0, f.useEffect)(function() {
          t.current = i;
        }), (0, f.useEffect)(function() {
          if (!n)
            return function() {
            };
          var d = setInterval(function() {
            t.current && t.current();
          }, n);
          return function() {
            return clearInterval(d);
          };
        }, [n]);
      };
      var f = s(0);
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var f = Object.assign || function(o) {
        for (var l = 1; l < arguments.length; l++) {
          var h = arguments[l];
          for (var b in h)
            Object.prototype.hasOwnProperty.call(h, b) && (o[b] = h[b]);
        }
        return o;
      }, i = function() {
        return function(o, l) {
          if (Array.isArray(o))
            return o;
          if (Symbol.iterator in Object(o))
            return function(h, b) {
              var g = [], T = !0, R = !1, O = void 0;
              try {
                for (var S, x = h[Symbol.iterator](); !(T = (S = x.next()).done) && (g.push(S.value), !b || g.length !== b); T = !0)
                  ;
              } catch (p) {
                R = !0, O = p;
              } finally {
                try {
                  !T && x.return && x.return();
                } finally {
                  if (R)
                    throw O;
                }
              }
              return g;
            }(o, l);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(o) {
        var l = o.autoStart, h = o.offsetTimestamp, b = (0, n.useState)(t.Time.getSecondsFromExpiry(h, !0) || 0), g = i(b, 2), T = g[0], R = g[1], O = (0, n.useState)(/* @__PURE__ */ new Date()), S = i(O, 2), x = S[0], p = S[1], q = (0, n.useState)(T + t.Time.getSecondsFromPrevTime(x || 0, !0)), G = i(q, 2), re = G[0], C = G[1], A = (0, n.useState)(l), z = i(A, 2), K = z[0], L = z[1];
        return (0, d.useInterval)(function() {
          C(T + t.Time.getSecondsFromPrevTime(x, !0));
        }, K ? 1e3 : null), f({}, t.Time.getTimeFromSeconds(re), { start: function() {
          var Z = /* @__PURE__ */ new Date();
          p(Z), L(!0), C(T + t.Time.getSecondsFromPrevTime(Z, !0));
        }, pause: function() {
          R(re), L(!1);
        }, reset: function() {
          var Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, oe = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], Q = t.Time.getSecondsFromExpiry(Z, !0) || 0, te = /* @__PURE__ */ new Date();
          p(te), R(Q), L(oe), C(Q + t.Time.getSecondsFromPrevTime(te, !0));
        }, isRunning: K });
      };
      var n = s(0), t = s(1), d = s(2);
    }, function(a, u, s) {
      Object.defineProperty(u, "__esModule", { value: !0 });
      var f = Object.assign || function(o) {
        for (var l = 1; l < arguments.length; l++) {
          var h = arguments[l];
          for (var b in h)
            Object.prototype.hasOwnProperty.call(h, b) && (o[b] = h[b]);
        }
        return o;
      }, i = function() {
        return function(o, l) {
          if (Array.isArray(o))
            return o;
          if (Symbol.iterator in Object(o))
            return function(h, b) {
              var g = [], T = !0, R = !1, O = void 0;
              try {
                for (var S, x = h[Symbol.iterator](); !(T = (S = x.next()).done) && (g.push(S.value), !b || g.length !== b); T = !0)
                  ;
              } catch (p) {
                R = !0, O = p;
              } finally {
                try {
                  !T && x.return && x.return();
                } finally {
                  if (R)
                    throw O;
                }
              }
              return g;
            }(o, l);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
      u.default = function(o) {
        var l = o.format, h = (0, n.useState)(t.Time.getSecondsFromTimeNow()), b = i(h, 2), g = b[0], T = b[1];
        return (0, d.useInterval)(function() {
          T(t.Time.getSecondsFromTimeNow());
        }, 1e3), f({}, t.Time.getFormattedTimeFromSeconds(g, l));
      };
      var n = s(0), t = s(1), d = s(2);
    }]);
  });
})(kr);
var Ft = kr.exports;
const $t = (r) => /* @__PURE__ */ B.createElement("svg", { width: "100px", height: "100px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: 0 }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ B.createElement("g", { id: "SVGRepo_iconCarrier" }, /* @__PURE__ */ B.createElement("path", { d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z", fill: "#000000" })));
function Lt() {
  const { audioStatus: r } = Ce(), {
    seconds: c,
    minutes: m,
    hours: a,
    start: u,
    pause: s,
    reset: f
  } = Ft.useStopwatch({ autoStart: !1 });
  ve(() => {
    r === "recording" ? u() : r === "paused_playing" || r === "paused_recording" || r === "stopped" ? s() : f();
  }, [r]);
  const i = (n) => n.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: !1 });
  return /* @__PURE__ */ me("div", { className: `voice-recorder_stopcontainer ${r === "paused_recording" ? "voice-recorder_showblinking" : ""}`, children: [
    /* @__PURE__ */ ee("div", { className: "voice-recorder_control", children: /* @__PURE__ */ ee($t, {}) }),
    /* @__PURE__ */ me("div", { className: "voice-recorder_stopwatch", children: [
      a ? /* @__PURE__ */ ee("span", { children: a }) : null,
      /* @__PURE__ */ ee("span", { children: i(m) }),
      ":",
      /* @__PURE__ */ ee("span", { children: i(c) })
    ] })
  ] });
}
const ge = {
  showRecordBtn: !1,
  showPlayBtn: !1,
  showPauseBtn: !1,
  showStopBtn: !1,
  showRedoBtn: !1
};
function Bt() {
  const r = pe(null), { audioStatus: c, updateAudioStatus: m, audioRecording: a } = Ce(), {
    controllerContainerStyle: u,
    controllerStyle: s,
    downloadable: f = !0,
    onAudioDownload: i,
    onRecordingStart: n,
    onPlayStart: t,
    onRecordingPause: d,
    onPlayPause: o,
    rootElementId: l
  } = Ie(), [h, b] = _e(ge), g = ({ svg: S, disabled: x, status: p, onClick: q, applyCircularStyles: G = !0, display: re = !0 }) => !p || !re ? null : /* @__PURE__ */ ee("button", { onClick: q, disabled: x, className: `${G ? "voice-recorder_control" : ""} voice-recorder_controlgeneric`, style: s, children: S }), T = (S) => () => {
    m(S);
  }, R = () => {
    navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(T("recording")).catch(() => alert("Please allow acccess to your microphone to continue."));
  }, O = () => {
    const { blob: S = "" } = a || {};
    if (!S || !r.current)
      return null;
    const x = URL.createObjectURL(S);
    r.current.href = x, r.current.download = "audio.wav", r.current.click();
  };
  return ve(() => {
    const S = document.getElementById(l);
    if (S) {
      const x = S.querySelector(".voice-recorder_controlscontainer");
      if (S && x) {
        const { height: p } = S.getBoundingClientRect();
        x.style.height = `${p / 3}px`;
      }
    }
  }, []), ve(() => {
    if (a) {
      const { blob: S = "" } = a || {};
      if (!S || !i)
        return;
      i(S);
    }
  }, [a]), ve(() => {
    switch (c) {
      case "":
        b({
          ...ge,
          showRecordBtn: !0
        });
        break;
      case "recording": {
        n == null || n(), b({
          ...ge,
          showPauseBtn: !0,
          showStopBtn: !0
        });
        break;
      }
      case "paused_recording": {
        d == null || d(), b({
          ...ge,
          showStopBtn: !0,
          showRecordBtn: !0
        });
        break;
      }
      case "paused_playing": {
        o == null || o(), b({
          ...ge,
          showPlayBtn: !0,
          showPauseBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "playing": {
        t == null || t(), b({
          ...ge,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      case "stopped": {
        b({
          ...ge,
          showPauseBtn: !0,
          showPlayBtn: !0,
          showRedoBtn: !0
        });
        break;
      }
      default:
        b(ge);
    }
  }, [c]), /* @__PURE__ */ me("div", { className: "voice-recorder_controlscontainer", style: u, children: [
    /* @__PURE__ */ me("div", { className: "voice-recorder_controls", children: [
      g({
        svg: /* @__PURE__ */ ee(It, {}),
        disabled: !1,
        status: h.showRecordBtn,
        onClick: R
      }),
      g({
        svg: /* @__PURE__ */ ee(At, {}),
        disabled: c === "stopped" || c === "paused_recording" || c === "paused_playing",
        status: h.showPauseBtn,
        onClick: T(
          c === "recording" ? "paused_recording" : "paused_playing"
        )
      }),
      g({
        svg: /* @__PURE__ */ ee(jt, {}),
        disabled: !1,
        status: h.showPlayBtn,
        onClick: T("playing_requested")
      }),
      g({
        svg: /* @__PURE__ */ ee(Lt, {}),
        disabled: !1,
        status: h.showStopBtn,
        onClick: T("stopped"),
        applyCircularStyles: !1
      }),
      g({
        svg: /* @__PURE__ */ ee(Mt, {}),
        disabled: !1,
        status: h.showRedoBtn,
        onClick: T("")
      }),
      /* @__PURE__ */ ee("div", { className: "voice-recorder_download", children: g({
        svg: /* @__PURE__ */ ee(Dt, {}),
        disabled: !1,
        status: h.showRedoBtn,
        onClick: O,
        display: f
      }) })
    ] }),
    /* @__PURE__ */ ee("a", { ref: r, download: !0, style: { display: "none" }, className: "voice-recorder_downloadfile" })
  ] });
}
const Ut = (r) => {
  const {
    mainContainerStyle: c,
    height: m,
    width: a,
    ...u
  } = r, s = at(), f = {
    ...c,
    height: m,
    width: a
  }, i = `voice-recorder-${s}`;
  return /* @__PURE__ */ ee(yt, { children: /* @__PURE__ */ ee(gt, { userPropsValue: { ...u, rootElementId: i }, children: /* @__PURE__ */ me("div", { id: i, className: "voice-recorder_maincontainer", style: f, children: [
    /* @__PURE__ */ ee(kt, {}),
    /* @__PURE__ */ ee(Bt, {})
  ] }) }) });
};
Ut.propTypes = {
  mainContainerStyle: xe.object,
  height: xe.string || xe.number,
  width: xe.string || xe.number
};
export {
  Ut as VoiceRecorder
};
