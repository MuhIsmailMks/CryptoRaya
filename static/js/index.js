function Ng(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: ()=>r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const o of i)
            if (o.type === "childList")
                for (const a of o.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function np(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var rp = {
    exports: {}
}
  , Ca = {}
  , ip = {
    exports: {}
}
  , D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji = Symbol.for("react.element")
  , Lg = Symbol.for("react.portal")
  , Rg = Symbol.for("react.fragment")
  , Og = Symbol.for("react.strict_mode")
  , jg = Symbol.for("react.profiler")
  , Mg = Symbol.for("react.provider")
  , _g = Symbol.for("react.context")
  , Ig = Symbol.for("react.forward_ref")
  , Vg = Symbol.for("react.suspense")
  , Dg = Symbol.for("react.memo")
  , Fg = Symbol.for("react.lazy")
  , nf = Symbol.iterator;
function zg(e) {
    return e === null || typeof e != "object" ? null : (e = nf && e[nf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var op = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , ap = Object.assign
  , sp = {};
function Pr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sp,
    this.updater = n || op
}
Pr.prototype.isReactComponent = {};
Pr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Pr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function lp() {}
lp.prototype = Pr.prototype;
function yu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sp,
    this.updater = n || op
}
var wu = yu.prototype = new lp;
wu.constructor = yu;
ap(wu, Pr.prototype);
wu.isPureReactComponent = !0;
var rf = Array.isArray
  , up = Object.prototype.hasOwnProperty
  , xu = {
    current: null
}
  , cp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function fp(e, t, n) {
    var r, i = {}, o = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            up.call(t, r) && !cp.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        i.children = n;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: ji,
        type: e,
        key: o,
        ref: a,
        props: i,
        _owner: xu.current
    }
}
function Bg(e, t) {
    return {
        $$typeof: ji,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Su(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ji
}
function Ug(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var of = /\/+/g;
function es(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ug("" + e.key) : t.toString(36)
}
function Co(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (o) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ji:
            case Lg:
                a = !0
            }
        }
    if (a)
        return a = e,
        i = i(a),
        e = r === "" ? "." + es(a, 0) : r,
        rf(i) ? (n = "",
        e != null && (n = e.replace(of, "$&/") + "/"),
        Co(i, t, n, "", function(u) {
            return u
        })) : i != null && (Su(i) && (i = Bg(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(of, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    rf(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var l = r + es(o, s);
            a += Co(o, t, n, l, i)
        }
    else if (l = zg(e),
    typeof l == "function")
        for (e = l.call(e),
        s = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + es(o, s++),
            a += Co(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Yi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Co(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function $g(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ee = {
    current: null
}
  , Po = {
    transition: null
}
  , Wg = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Po,
    ReactCurrentOwner: xu
};
function dp() {
    throw Error("act(...) is not supported in production builds of React.")
}
D.Children = {
    map: Yi,
    forEach: function(e, t, n) {
        Yi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Yi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Yi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Su(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
D.Component = Pr;
D.Fragment = Rg;
D.Profiler = jg;
D.PureComponent = yu;
D.StrictMode = Og;
D.Suspense = Vg;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wg;
D.act = dp;
D.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ap({}, e.props)
      , i = e.key
      , o = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        a = xu.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            up.call(t, l) && !cp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: ji,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: a
    }
}
;
D.createContext = function(e) {
    return e = {
        $$typeof: _g,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Mg,
        _context: e
    },
    e.Consumer = e
}
;
D.createElement = fp;
D.createFactory = function(e) {
    var t = fp.bind(null, e);
    return t.type = e,
    t
}
;
D.createRef = function() {
    return {
        current: null
    }
}
;
D.forwardRef = function(e) {
    return {
        $$typeof: Ig,
        render: e
    }
}
;
D.isValidElement = Su;
D.lazy = function(e) {
    return {
        $$typeof: Fg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: $g
    }
}
;
D.memo = function(e, t) {
    return {
        $$typeof: Dg,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
D.startTransition = function(e) {
    var t = Po.transition;
    Po.transition = {};
    try {
        e()
    } finally {
        Po.transition = t
    }
}
;
D.unstable_act = dp;
D.useCallback = function(e, t) {
    return Ee.current.useCallback(e, t)
}
;
D.useContext = function(e) {
    return Ee.current.useContext(e)
}
;
D.useDebugValue = function() {}
;
D.useDeferredValue = function(e) {
    return Ee.current.useDeferredValue(e)
}
;
D.useEffect = function(e, t) {
    return Ee.current.useEffect(e, t)
}
;
D.useId = function() {
    return Ee.current.useId()
}
;
D.useImperativeHandle = function(e, t, n) {
    return Ee.current.useImperativeHandle(e, t, n)
}
;
D.useInsertionEffect = function(e, t) {
    return Ee.current.useInsertionEffect(e, t)
}
;
D.useLayoutEffect = function(e, t) {
    return Ee.current.useLayoutEffect(e, t)
}
;
D.useMemo = function(e, t) {
    return Ee.current.useMemo(e, t)
}
;
D.useReducer = function(e, t, n) {
    return Ee.current.useReducer(e, t, n)
}
;
D.useRef = function(e) {
    return Ee.current.useRef(e)
}
;
D.useState = function(e) {
    return Ee.current.useState(e)
}
;
D.useSyncExternalStore = function(e, t, n) {
    return Ee.current.useSyncExternalStore(e, t, n)
}
;
D.useTransition = function() {
    return Ee.current.useTransition()
}
;
D.version = "18.3.1";
ip.exports = D;
var P = ip.exports;
const Pa = np(P)
  , Hg = Ng({
    __proto__: null,
    default: Pa
}, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kg = P
  , Yg = Symbol.for("react.element")
  , Gg = Symbol.for("react.fragment")
  , Qg = Object.prototype.hasOwnProperty
  , Xg = Kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Zg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function hp(e, t, n) {
    var r, i = {}, o = null, a = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        Qg.call(t, r) && !Zg.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Yg,
        type: e,
        key: o,
        ref: a,
        props: i,
        _owner: Xg.current
    }
}
Ca.Fragment = Gg;
Ca.jsx = hp;
Ca.jsxs = hp;
rp.exports = Ca;
var w = rp.exports
  , Ks = {}
  , pp = {
    exports: {}
}
  , ze = {}
  , mp = {
    exports: {}
}
  , vp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(A, _) {
        var I = A.length;
        A.push(_);
        e: for (; 0 < I; ) {
            var te = I - 1 >>> 1
              , ue = A[te];
            if (0 < i(ue, _))
                A[te] = _,
                A[I] = ue,
                I = te;
            else
                break e
        }
    }
    function n(A) {
        return A.length === 0 ? null : A[0]
    }
    function r(A) {
        if (A.length === 0)
            return null;
        var _ = A[0]
          , I = A.pop();
        if (I !== _) {
            A[0] = I;
            e: for (var te = 0, ue = A.length, Hi = ue >>> 1; te < Hi; ) {
                var pn = 2 * (te + 1) - 1
                  , Ja = A[pn]
                  , mn = pn + 1
                  , Ki = A[mn];
                if (0 > i(Ja, I))
                    mn < ue && 0 > i(Ki, Ja) ? (A[te] = Ki,
                    A[mn] = I,
                    te = mn) : (A[te] = Ja,
                    A[pn] = I,
                    te = pn);
                else if (mn < ue && 0 > i(Ki, I))
                    A[te] = Ki,
                    A[mn] = I,
                    te = mn;
                else
                    break e
            }
        }
        return _
    }
    function i(A, _) {
        var I = A.sortIndex - _.sortIndex;
        return I !== 0 ? I : A.id - _.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var a = Date
          , s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , v = !1
      , g = !1
      , y = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(A) {
        for (var _ = n(u); _ !== null; ) {
            if (_.callback === null)
                r(u);
            else if (_.startTime <= A)
                r(u),
                _.sortIndex = _.expirationTime,
                t(l, _);
            else
                break;
            _ = n(u)
        }
    }
    function x(A) {
        if (y = !1,
        m(A),
        !g)
            if (n(l) !== null)
                g = !0,
                Me(k);
            else {
                var _ = n(u);
                _ !== null && hn(x, _.startTime - A)
            }
    }
    function k(A, _) {
        g = !1,
        y && (y = !1,
        p(T),
        T = -1),
        v = !0;
        var I = d;
        try {
            for (m(_),
            f = n(l); f !== null && (!(f.expirationTime > _) || A && !le()); ) {
                var te = f.callback;
                if (typeof te == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var ue = te(f.expirationTime <= _);
                    _ = e.unstable_now(),
                    typeof ue == "function" ? f.callback = ue : f === n(l) && r(l),
                    m(_)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var Hi = !0;
            else {
                var pn = n(u);
                pn !== null && hn(x, pn.startTime - _),
                Hi = !1
            }
            return Hi
        } finally {
            f = null,
            d = I,
            v = !1
        }
    }
    var E = !1
      , b = null
      , T = -1
      , M = 5
      , O = -1;
    function le() {
        return !(e.unstable_now() - O < M)
    }
    function Ot() {
        if (b !== null) {
            var A = e.unstable_now();
            O = A;
            var _ = !0;
            try {
                _ = b(!0, A)
            } finally {
                _ ? dn() : (E = !1,
                b = null)
            }
        } else
            E = !1
    }
    var dn;
    if (typeof h == "function")
        dn = function() {
            h(Ot)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Nr = new MessageChannel
          , de = Nr.port2;
        Nr.port1.onmessage = Ot,
        dn = function() {
            de.postMessage(null)
        }
    } else
        dn = function() {
            S(Ot, 0)
        }
        ;
    function Me(A) {
        b = A,
        E || (E = !0,
        dn())
    }
    function hn(A, _) {
        T = S(function() {
            A(e.unstable_now())
        }, _)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(A) {
        A.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || v || (g = !0,
        Me(k))
    }
    ,
    e.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < A ? Math.floor(1e3 / A) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(A) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var _ = 3;
            break;
        default:
            _ = d
        }
        var I = d;
        d = _;
        try {
            return A()
        } finally {
            d = I
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(A, _) {
        switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            A = 3
        }
        var I = d;
        d = A;
        try {
            return _()
        } finally {
            d = I
        }
    }
    ,
    e.unstable_scheduleCallback = function(A, _, I) {
        var te = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay,
        I = typeof I == "number" && 0 < I ? te + I : te) : I = te,
        A) {
        case 1:
            var ue = -1;
            break;
        case 2:
            ue = 250;
            break;
        case 5:
            ue = 1073741823;
            break;
        case 4:
            ue = 1e4;
            break;
        default:
            ue = 5e3
        }
        return ue = I + ue,
        A = {
            id: c++,
            callback: _,
            priorityLevel: A,
            startTime: I,
            expirationTime: ue,
            sortIndex: -1
        },
        I > te ? (A.sortIndex = I,
        t(u, A),
        n(l) === null && A === n(u) && (y ? (p(T),
        T = -1) : y = !0,
        hn(x, I - te))) : (A.sortIndex = ue,
        t(l, A),
        g || v || (g = !0,
        Me(k))),
        A
    }
    ,
    e.unstable_shouldYield = le,
    e.unstable_wrapCallback = function(A) {
        var _ = d;
        return function() {
            var I = d;
            d = _;
            try {
                return A.apply(this, arguments)
            } finally {
                d = I
            }
        }
    }
}
)(vp);
mp.exports = vp;
var qg = mp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg = P
  , De = qg;
function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var gp = new Set
  , ai = {};
function Vn(e, t) {
    mr(e, t),
    mr(e + "Capture", t)
}
function mr(e, t) {
    for (ai[e] = t,
    e = 0; e < t.length; e++)
        gp.add(t[e])
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ys = Object.prototype.hasOwnProperty
  , ey = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , af = {}
  , sf = {};
function ty(e) {
    return Ys.call(sf, e) ? !0 : Ys.call(af, e) ? !1 : ey.test(e) ? sf[e] = !0 : (af[e] = !0,
    !1)
}
function ny(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function ry(e, t, n, r) {
    if (t === null || typeof t > "u" || ny(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function be(e, t, n, r, i, o, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = a
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ve[e] = new be(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ve[t] = new be(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ve[e] = new be(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ve[e] = new be(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ve[e] = new be(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ve[e] = new be(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ve[e] = new be(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ve[e] = new be(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ve[e] = new be(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ku = /[\-:]([a-z])/g;
function Cu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ku, Cu);
    ve[t] = new be(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ku, Cu);
    ve[t] = new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ku, Cu);
    ve[t] = new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ve[e] = new be(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ve.xlinkHref = new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ve[e] = new be(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Pu(e, t, n, r) {
    var i = ve.hasOwnProperty(t) ? ve[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ry(t, n, i, r) && (n = null),
    r || i === null ? ty(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Lt = Jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Gi = Symbol.for("react.element")
  , Un = Symbol.for("react.portal")
  , $n = Symbol.for("react.fragment")
  , Tu = Symbol.for("react.strict_mode")
  , Gs = Symbol.for("react.profiler")
  , yp = Symbol.for("react.provider")
  , wp = Symbol.for("react.context")
  , Eu = Symbol.for("react.forward_ref")
  , Qs = Symbol.for("react.suspense")
  , Xs = Symbol.for("react.suspense_list")
  , bu = Symbol.for("react.memo")
  , It = Symbol.for("react.lazy")
  , xp = Symbol.for("react.offscreen")
  , lf = Symbol.iterator;
function Lr(e) {
    return e === null || typeof e != "object" ? null : (e = lf && e[lf] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var q = Object.assign, ts;
function Fr(e) {
    if (ts === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ts = t && t[1] || ""
        }
    return `
` + ts + e
}
var ns = !1;
function rs(e, t) {
    if (!e || ns)
        return "";
    ns = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), a = i.length - 1, s = o.length - 1; 1 <= a && 0 <= s && i[a] !== o[s]; )
                s--;
            for (; 1 <= a && 0 <= s; a--,
            s--)
                if (i[a] !== o[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if (a--,
                            s--,
                            0 > s || i[a] !== o[s]) {
                                var l = `
` + i[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        ns = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Fr(e) : ""
}
function iy(e) {
    switch (e.tag) {
    case 5:
        return Fr(e.type);
    case 16:
        return Fr("Lazy");
    case 13:
        return Fr("Suspense");
    case 19:
        return Fr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = rs(e.type, !1),
        e;
    case 11:
        return e = rs(e.type.render, !1),
        e;
    case 1:
        return e = rs(e.type, !0),
        e;
    default:
        return ""
    }
}
function Zs(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case $n:
        return "Fragment";
    case Un:
        return "Portal";
    case Gs:
        return "Profiler";
    case Tu:
        return "StrictMode";
    case Qs:
        return "Suspense";
    case Xs:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case wp:
            return (e.displayName || "Context") + ".Consumer";
        case yp:
            return (e._context.displayName || "Context") + ".Provider";
        case Eu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case bu:
            return t = e.displayName || null,
            t !== null ? t : Zs(e.type) || "Memo";
        case It:
            t = e._payload,
            e = e._init;
            try {
                return Zs(e(t))
            } catch {}
        }
    return null
}
function oy(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Zs(t);
    case 8:
        return t === Tu ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function en(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Sp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function ay(e) {
    var t = Sp(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(a) {
                r = "" + a,
                o.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Qi(e) {
    e._valueTracker || (e._valueTracker = ay(e))
}
function kp(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Sp(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function zo(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function qs(e, t) {
    var n = t.checked;
    return q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function uf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = en(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Cp(e, t) {
    t = t.checked,
    t != null && Pu(e, "checked", t, !1)
}
function Js(e, t) {
    Cp(e, t);
    var n = en(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? el(e, t.type, n) : t.hasOwnProperty("defaultValue") && el(e, t.type, en(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function cf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function el(e, t, n) {
    (t !== "number" || zo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var zr = Array.isArray;
function sr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + en(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function tl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(C(91));
    return q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ff(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(C(92));
            if (zr(n)) {
                if (1 < n.length)
                    throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: en(n)
    }
}
function Pp(e, t) {
    var n = en(t.value)
      , r = en(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function df(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Tp(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function nl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Xi, Ep = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Xi = Xi || document.createElement("div"),
        Xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Xi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function si(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , sy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hr).forEach(function(e) {
    sy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Hr[t] = Hr[e]
    })
});
function bp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hr.hasOwnProperty(e) && Hr[e] ? ("" + t).trim() : t + "px"
}
function Ap(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = bp(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var ly = q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function rl(e, t) {
    if (t) {
        if (ly[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(C(62))
    }
}
function il(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ol = null;
function Au(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var al = null
  , lr = null
  , ur = null;
function hf(e) {
    if (e = Ii(e)) {
        if (typeof al != "function")
            throw Error(C(280));
        var t = e.stateNode;
        t && (t = Na(t),
        al(e.stateNode, e.type, t))
    }
}
function Np(e) {
    lr ? ur ? ur.push(e) : ur = [e] : lr = e
}
function Lp() {
    if (lr) {
        var e = lr
          , t = ur;
        if (ur = lr = null,
        hf(e),
        t)
            for (e = 0; e < t.length; e++)
                hf(t[e])
    }
}
function Rp(e, t) {
    return e(t)
}
function Op() {}
var is = !1;
function jp(e, t, n) {
    if (is)
        return e(t, n);
    is = !0;
    try {
        return Rp(e, t, n)
    } finally {
        is = !1,
        (lr !== null || ur !== null) && (Op(),
        Lp())
    }
}
function li(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Na(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(C(231, t, typeof n));
    return n
}
var sl = !1;
if (kt)
    try {
        var Rr = {};
        Object.defineProperty(Rr, "passive", {
            get: function() {
                sl = !0
            }
        }),
        window.addEventListener("test", Rr, Rr),
        window.removeEventListener("test", Rr, Rr)
    } catch {
        sl = !1
    }
function uy(e, t, n, r, i, o, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Kr = !1
  , Bo = null
  , Uo = !1
  , ll = null
  , cy = {
    onError: function(e) {
        Kr = !0,
        Bo = e
    }
};
function fy(e, t, n, r, i, o, a, s, l) {
    Kr = !1,
    Bo = null,
    uy.apply(cy, arguments)
}
function dy(e, t, n, r, i, o, a, s, l) {
    if (fy.apply(this, arguments),
    Kr) {
        if (Kr) {
            var u = Bo;
            Kr = !1,
            Bo = null
        } else
            throw Error(C(198));
        Uo || (Uo = !0,
        ll = u)
    }
}
function Dn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Mp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function pf(e) {
    if (Dn(e) !== e)
        throw Error(C(188))
}
function hy(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Dn(e),
        t === null)
            throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return pf(i),
                    e;
                if (o === r)
                    return pf(i),
                    t;
                o = o.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var a = !1, s = i.child; s; ) {
                if (s === n) {
                    a = !0,
                    n = i,
                    r = o;
                    break
                }
                if (s === r) {
                    a = !0,
                    r = i,
                    n = o;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        a = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (s === r) {
                        a = !0,
                        r = o,
                        n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!a)
                    throw Error(C(189))
            }
        }
        if (n.alternate !== r)
            throw Error(C(190))
    }
    if (n.tag !== 3)
        throw Error(C(188));
    return n.stateNode.current === n ? e : t
}
function _p(e) {
    return e = hy(e),
    e !== null ? Ip(e) : null
}
function Ip(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ip(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Vp = De.unstable_scheduleCallback
  , mf = De.unstable_cancelCallback
  , py = De.unstable_shouldYield
  , my = De.unstable_requestPaint
  , re = De.unstable_now
  , vy = De.unstable_getCurrentPriorityLevel
  , Nu = De.unstable_ImmediatePriority
  , Dp = De.unstable_UserBlockingPriority
  , $o = De.unstable_NormalPriority
  , gy = De.unstable_LowPriority
  , Fp = De.unstable_IdlePriority
  , Ta = null
  , ct = null;
function yy(e) {
    if (ct && typeof ct.onCommitFiberRoot == "function")
        try {
            ct.onCommitFiberRoot(Ta, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var nt = Math.clz32 ? Math.clz32 : Sy
  , wy = Math.log
  , xy = Math.LN2;
function Sy(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (wy(e) / xy | 0) | 0
}
var Zi = 64
  , qi = 4194304;
function Br(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Wo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var s = a & ~i;
        s !== 0 ? r = Br(s) : (o &= a,
        o !== 0 && (r = Br(o)))
    } else
        a = n & ~i,
        a !== 0 ? r = Br(a) : o !== 0 && (r = Br(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - nt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function ky(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Cy(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var a = 31 - nt(o)
          , s = 1 << a
          , l = i[a];
        l === -1 ? (!(s & n) || s & r) && (i[a] = ky(s, t)) : l <= t && (e.expiredLanes |= s),
        o &= ~s
    }
}
function ul(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function zp() {
    var e = Zi;
    return Zi <<= 1,
    !(Zi & 4194240) && (Zi = 64),
    e
}
function os(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Mi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - nt(t),
    e[t] = n
}
function Py(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - nt(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Lu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - nt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var B = 0;
function Bp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Up, Ru, $p, Wp, Hp, cl = !1, Ji = [], Wt = null, Ht = null, Kt = null, ui = new Map, ci = new Map, Ft = [], Ty = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vf(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Wt = null;
        break;
    case "dragenter":
    case "dragleave":
        Ht = null;
        break;
    case "mouseover":
    case "mouseout":
        Kt = null;
        break;
    case "pointerover":
    case "pointerout":
        ui.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ci.delete(t.pointerId)
    }
}
function Or(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = Ii(t),
    t !== null && Ru(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Ey(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Wt = Or(Wt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Ht = Or(Ht, e, t, n, r, i),
        !0;
    case "mouseover":
        return Kt = Or(Kt, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return ui.set(o, Or(ui.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        ci.set(o, Or(ci.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Kp(e) {
    var t = Sn(e.target);
    if (t !== null) {
        var n = Dn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Mp(n),
                t !== null) {
                    e.blockedOn = t,
                    Hp(e.priority, function() {
                        $p(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function To(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ol = r,
            n.target.dispatchEvent(r),
            ol = null
        } else
            return t = Ii(n),
            t !== null && Ru(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function gf(e, t, n) {
    To(e) && n.delete(t)
}
function by() {
    cl = !1,
    Wt !== null && To(Wt) && (Wt = null),
    Ht !== null && To(Ht) && (Ht = null),
    Kt !== null && To(Kt) && (Kt = null),
    ui.forEach(gf),
    ci.forEach(gf)
}
function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    cl || (cl = !0,
    De.unstable_scheduleCallback(De.unstable_NormalPriority, by)))
}
function fi(e) {
    function t(i) {
        return jr(i, e)
    }
    if (0 < Ji.length) {
        jr(Ji[0], e);
        for (var n = 1; n < Ji.length; n++) {
            var r = Ji[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Wt !== null && jr(Wt, e),
    Ht !== null && jr(Ht, e),
    Kt !== null && jr(Kt, e),
    ui.forEach(t),
    ci.forEach(t),
    n = 0; n < Ft.length; n++)
        r = Ft[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ft.length && (n = Ft[0],
    n.blockedOn === null); )
        Kp(n),
        n.blockedOn === null && Ft.shift()
}
var cr = Lt.ReactCurrentBatchConfig
  , Ho = !0;
function Ay(e, t, n, r) {
    var i = B
      , o = cr.transition;
    cr.transition = null;
    try {
        B = 1,
        Ou(e, t, n, r)
    } finally {
        B = i,
        cr.transition = o
    }
}
function Ny(e, t, n, r) {
    var i = B
      , o = cr.transition;
    cr.transition = null;
    try {
        B = 4,
        Ou(e, t, n, r)
    } finally {
        B = i,
        cr.transition = o
    }
}
function Ou(e, t, n, r) {
    if (Ho) {
        var i = fl(e, t, n, r);
        if (i === null)
            ms(e, t, r, Ko, n),
            vf(e, r);
        else if (Ey(i, e, t, n, r))
            r.stopPropagation();
        else if (vf(e, r),
        t & 4 && -1 < Ty.indexOf(e)) {
            for (; i !== null; ) {
                var o = Ii(i);
                if (o !== null && Up(o),
                o = fl(e, t, n, r),
                o === null && ms(e, t, r, Ko, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            ms(e, t, r, null, n)
    }
}
var Ko = null;
function fl(e, t, n, r) {
    if (Ko = null,
    e = Au(r),
    e = Sn(e),
    e !== null)
        if (t = Dn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Mp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ko = e,
    null
}
function Yp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (vy()) {
        case Nu:
            return 1;
        case Dp:
            return 4;
        case $o:
        case gy:
            return 16;
        case Fp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Bt = null
  , ju = null
  , Eo = null;
function Gp() {
    if (Eo)
        return Eo;
    var e, t = ju, n = t.length, r, i = "value"in Bt ? Bt.value : Bt.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === i[o - r]; r++)
        ;
    return Eo = i.slice(e, 1 < r ? 1 - r : void 0)
}
function bo(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function eo() {
    return !0
}
function yf() {
    return !1
}
function Be(e) {
    function t(n, r, i, o, a) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = a,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? eo : yf,
        this.isPropagationStopped = yf,
        this
    }
    return q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = eo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = eo)
        },
        persist: function() {},
        isPersistent: eo
    }),
    t
}
var Tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Mu = Be(Tr), _i = q({}, Tr, {
    view: 0,
    detail: 0
}), Ly = Be(_i), as, ss, Mr, Ea = q({}, _i, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _u,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Mr && (Mr && e.type === "mousemove" ? (as = e.screenX - Mr.screenX,
        ss = e.screenY - Mr.screenY) : ss = as = 0,
        Mr = e),
        as)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ss
    }
}), wf = Be(Ea), Ry = q({}, Ea, {
    dataTransfer: 0
}), Oy = Be(Ry), jy = q({}, _i, {
    relatedTarget: 0
}), ls = Be(jy), My = q({}, Tr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), _y = Be(My), Iy = q({}, Tr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Vy = Be(Iy), Dy = q({}, Tr, {
    data: 0
}), xf = Be(Dy), Fy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, zy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, By = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Uy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = By[e]) ? !!t[e] : !1
}
function _u() {
    return Uy
}
var $y = q({}, _i, {
    key: function(e) {
        if (e.key) {
            var t = Fy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = bo(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _u,
    charCode: function(e) {
        return e.type === "keypress" ? bo(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Wy = Be($y)
  , Hy = q({}, Ea, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Sf = Be(Hy)
  , Ky = q({}, _i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _u
})
  , Yy = Be(Ky)
  , Gy = q({}, Tr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Qy = Be(Gy)
  , Xy = q({}, Ea, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Zy = Be(Xy)
  , qy = [9, 13, 27, 32]
  , Iu = kt && "CompositionEvent"in window
  , Yr = null;
kt && "documentMode"in document && (Yr = document.documentMode);
var Jy = kt && "TextEvent"in window && !Yr
  , Qp = kt && (!Iu || Yr && 8 < Yr && 11 >= Yr)
  , kf = " "
  , Cf = !1;
function Xp(e, t) {
    switch (e) {
    case "keyup":
        return qy.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Zp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Wn = !1;
function e1(e, t) {
    switch (e) {
    case "compositionend":
        return Zp(t);
    case "keypress":
        return t.which !== 32 ? null : (Cf = !0,
        kf);
    case "textInput":
        return e = t.data,
        e === kf && Cf ? null : e;
    default:
        return null
    }
}
function t1(e, t) {
    if (Wn)
        return e === "compositionend" || !Iu && Xp(e, t) ? (e = Gp(),
        Eo = ju = Bt = null,
        Wn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Qp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var n1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Pf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!n1[e.type] : t === "textarea"
}
function qp(e, t, n, r) {
    Np(r),
    t = Yo(t, "onChange"),
    0 < t.length && (n = new Mu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Gr = null
  , di = null;
function r1(e) {
    um(e, 0)
}
function ba(e) {
    var t = Yn(e);
    if (kp(t))
        return e
}
function i1(e, t) {
    if (e === "change")
        return t
}
var Jp = !1;
if (kt) {
    var us;
    if (kt) {
        var cs = "oninput"in document;
        if (!cs) {
            var Tf = document.createElement("div");
            Tf.setAttribute("oninput", "return;"),
            cs = typeof Tf.oninput == "function"
        }
        us = cs
    } else
        us = !1;
    Jp = us && (!document.documentMode || 9 < document.documentMode)
}
function Ef() {
    Gr && (Gr.detachEvent("onpropertychange", em),
    di = Gr = null)
}
function em(e) {
    if (e.propertyName === "value" && ba(di)) {
        var t = [];
        qp(t, di, e, Au(e)),
        jp(r1, t)
    }
}
function o1(e, t, n) {
    e === "focusin" ? (Ef(),
    Gr = t,
    di = n,
    Gr.attachEvent("onpropertychange", em)) : e === "focusout" && Ef()
}
function a1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ba(di)
}
function s1(e, t) {
    if (e === "click")
        return ba(t)
}
function l1(e, t) {
    if (e === "input" || e === "change")
        return ba(t)
}
function u1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var it = typeof Object.is == "function" ? Object.is : u1;
function hi(e, t) {
    if (it(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ys.call(t, i) || !it(e[i], t[i]))
            return !1
    }
    return !0
}
function bf(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Af(e, t) {
    var n = bf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = bf(n)
    }
}
function tm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function nm() {
    for (var e = window, t = zo(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = zo(e.document)
    }
    return t
}
function Vu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function c1(e) {
    var t = nm()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && tm(n.ownerDocument.documentElement, n)) {
        if (r !== null && Vu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Af(n, o);
                var a = Af(n, r);
                i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var f1 = kt && "documentMode"in document && 11 >= document.documentMode
  , Hn = null
  , dl = null
  , Qr = null
  , hl = !1;
function Nf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hl || Hn == null || Hn !== zo(r) || (r = Hn,
    "selectionStart"in r && Vu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Qr && hi(Qr, r) || (Qr = r,
    r = Yo(dl, "onSelect"),
    0 < r.length && (t = new Mu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Hn)))
}
function to(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Kn = {
    animationend: to("Animation", "AnimationEnd"),
    animationiteration: to("Animation", "AnimationIteration"),
    animationstart: to("Animation", "AnimationStart"),
    transitionend: to("Transition", "TransitionEnd")
}
  , fs = {}
  , rm = {};
kt && (rm = document.createElement("div").style,
"AnimationEvent"in window || (delete Kn.animationend.animation,
delete Kn.animationiteration.animation,
delete Kn.animationstart.animation),
"TransitionEvent"in window || delete Kn.transitionend.transition);
function Aa(e) {
    if (fs[e])
        return fs[e];
    if (!Kn[e])
        return e;
    var t = Kn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in rm)
            return fs[e] = t[n];
    return e
}
var im = Aa("animationend")
  , om = Aa("animationiteration")
  , am = Aa("animationstart")
  , sm = Aa("transitionend")
  , lm = new Map
  , Lf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ln(e, t) {
    lm.set(e, t),
    Vn(t, [e])
}
for (var ds = 0; ds < Lf.length; ds++) {
    var hs = Lf[ds]
      , d1 = hs.toLowerCase()
      , h1 = hs[0].toUpperCase() + hs.slice(1);
    ln(d1, "on" + h1)
}
ln(im, "onAnimationEnd");
ln(om, "onAnimationIteration");
ln(am, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(sm, "onTransitionEnd");
mr("onMouseEnter", ["mouseout", "mouseover"]);
mr("onMouseLeave", ["mouseout", "mouseover"]);
mr("onPointerEnter", ["pointerout", "pointerover"]);
mr("onPointerLeave", ["pointerout", "pointerover"]);
Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , p1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
function Rf(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    dy(r, t, void 0, e),
    e.currentTarget = null
}
function um(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var s = r[a]
                      , l = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    Rf(i, s, u),
                    o = l
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (s = r[a],
                    l = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    Rf(i, s, u),
                    o = l
                }
        }
    }
    if (Uo)
        throw e = ll,
        Uo = !1,
        ll = null,
        e
}
function W(e, t) {
    var n = t[yl];
    n === void 0 && (n = t[yl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (cm(t, e, 2, !1),
    n.add(r))
}
function ps(e, t, n) {
    var r = 0;
    t && (r |= 4),
    cm(n, e, r, t)
}
var no = "_reactListening" + Math.random().toString(36).slice(2);
function pi(e) {
    if (!e[no]) {
        e[no] = !0,
        gp.forEach(function(n) {
            n !== "selectionchange" && (p1.has(n) || ps(n, !1, e),
            ps(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[no] || (t[no] = !0,
        ps("selectionchange", !1, t))
    }
}
function cm(e, t, n, r) {
    switch (Yp(t)) {
    case 1:
        var i = Ay;
        break;
    case 4:
        i = Ny;
        break;
    default:
        i = Ou
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !sl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function ms(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var s = r.stateNode.containerInfo;
                if (s === i || s.nodeType === 8 && s.parentNode === i)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        a = a.return
                    }
                for (; s !== null; ) {
                    if (a = Sn(s),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        r = o = a;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    jp(function() {
        var u = o
          , c = Au(n)
          , f = [];
        e: {
            var d = lm.get(e);
            if (d !== void 0) {
                var v = Mu
                  , g = e;
                switch (e) {
                case "keypress":
                    if (bo(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = Wy;
                    break;
                case "focusin":
                    g = "focus",
                    v = ls;
                    break;
                case "focusout":
                    g = "blur",
                    v = ls;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = ls;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = wf;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = Oy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Yy;
                    break;
                case im:
                case om:
                case am:
                    v = _y;
                    break;
                case sm:
                    v = Qy;
                    break;
                case "scroll":
                    v = Ly;
                    break;
                case "wheel":
                    v = Zy;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = Vy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = Sf
                }
                var y = (t & 4) !== 0
                  , S = !y && e === "scroll"
                  , p = y ? d !== null ? d + "Capture" : null : d;
                y = [];
                for (var h = u, m; h !== null; ) {
                    m = h;
                    var x = m.stateNode;
                    if (m.tag === 5 && x !== null && (m = x,
                    p !== null && (x = li(h, p),
                    x != null && y.push(mi(h, x, m)))),
                    S)
                        break;
                    h = h.return
                }
                0 < y.length && (d = new v(d,g,null,n,c),
                f.push({
                    event: d,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                v = e === "mouseout" || e === "pointerout",
                d && n !== ol && (g = n.relatedTarget || n.fromElement) && (Sn(g) || g[Ct]))
                    break e;
                if ((v || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                v ? (g = n.relatedTarget || n.toElement,
                v = u,
                g = g ? Sn(g) : null,
                g !== null && (S = Dn(g),
                g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null,
                g = u),
                v !== g)) {
                    if (y = wf,
                    x = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = Sf,
                    x = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    S = v == null ? d : Yn(v),
                    m = g == null ? d : Yn(g),
                    d = new y(x,h + "leave",v,n,c),
                    d.target = S,
                    d.relatedTarget = m,
                    x = null,
                    Sn(c) === u && (y = new y(p,h + "enter",g,n,c),
                    y.target = m,
                    y.relatedTarget = S,
                    x = y),
                    S = x,
                    v && g)
                        t: {
                            for (y = v,
                            p = g,
                            h = 0,
                            m = y; m; m = zn(m))
                                h++;
                            for (m = 0,
                            x = p; x; x = zn(x))
                                m++;
                            for (; 0 < h - m; )
                                y = zn(y),
                                h--;
                            for (; 0 < m - h; )
                                p = zn(p),
                                m--;
                            for (; h--; ) {
                                if (y === p || p !== null && y === p.alternate)
                                    break t;
                                y = zn(y),
                                p = zn(p)
                            }
                            y = null
                        }
                    else
                        y = null;
                    v !== null && Of(f, d, v, y, !1),
                    g !== null && S !== null && Of(f, S, g, y, !0)
                }
            }
            e: {
                if (d = u ? Yn(u) : window,
                v = d.nodeName && d.nodeName.toLowerCase(),
                v === "select" || v === "input" && d.type === "file")
                    var k = i1;
                else if (Pf(d))
                    if (Jp)
                        k = l1;
                    else {
                        k = a1;
                        var E = o1
                    }
                else
                    (v = d.nodeName) && v.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = s1);
                if (k && (k = k(e, u))) {
                    qp(f, k, n, c);
                    break e
                }
                E && E(e, d, u),
                e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && el(d, "number", d.value)
            }
            switch (E = u ? Yn(u) : window,
            e) {
            case "focusin":
                (Pf(E) || E.contentEditable === "true") && (Hn = E,
                dl = u,
                Qr = null);
                break;
            case "focusout":
                Qr = dl = Hn = null;
                break;
            case "mousedown":
                hl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                hl = !1,
                Nf(f, n, c);
                break;
            case "selectionchange":
                if (f1)
                    break;
            case "keydown":
            case "keyup":
                Nf(f, n, c)
            }
            var b;
            if (Iu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                Wn ? Xp(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (Qp && n.locale !== "ko" && (Wn || T !== "onCompositionStart" ? T === "onCompositionEnd" && Wn && (b = Gp()) : (Bt = c,
            ju = "value"in Bt ? Bt.value : Bt.textContent,
            Wn = !0)),
            E = Yo(u, T),
            0 < E.length && (T = new xf(T,e,null,n,c),
            f.push({
                event: T,
                listeners: E
            }),
            b ? T.data = b : (b = Zp(n),
            b !== null && (T.data = b)))),
            (b = Jy ? e1(e, n) : t1(e, n)) && (u = Yo(u, "onBeforeInput"),
            0 < u.length && (c = new xf("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = b))
        }
        um(f, t)
    })
}
function mi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Yo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = li(e, n),
        o != null && r.unshift(mi(e, o, i)),
        o = li(e, t),
        o != null && r.push(mi(e, o, i))),
        e = e.return
    }
    return r
}
function zn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Of(e, t, n, r, i) {
    for (var o = t._reactName, a = []; n !== null && n !== r; ) {
        var s = n
          , l = s.alternate
          , u = s.stateNode;
        if (l !== null && l === r)
            break;
        s.tag === 5 && u !== null && (s = u,
        i ? (l = li(n, o),
        l != null && a.unshift(mi(n, l, s))) : i || (l = li(n, o),
        l != null && a.push(mi(n, l, s)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var m1 = /\r\n?/g
  , v1 = /\u0000|\uFFFD/g;
function jf(e) {
    return (typeof e == "string" ? e : "" + e).replace(m1, `
`).replace(v1, "")
}
function ro(e, t, n) {
    if (t = jf(t),
    jf(e) !== t && n)
        throw Error(C(425))
}
function Go() {}
var pl = null
  , ml = null;
function vl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var gl = typeof setTimeout == "function" ? setTimeout : void 0
  , g1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Mf = typeof Promise == "function" ? Promise : void 0
  , y1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mf < "u" ? function(e) {
    return Mf.resolve(null).then(e).catch(w1)
}
: gl;
function w1(e) {
    setTimeout(function() {
        throw e
    })
}
function vs(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    fi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    fi(t)
}
function Yt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function _f(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Er = Math.random().toString(36).slice(2)
  , lt = "__reactFiber$" + Er
  , vi = "__reactProps$" + Er
  , Ct = "__reactContainer$" + Er
  , yl = "__reactEvents$" + Er
  , x1 = "__reactListeners$" + Er
  , S1 = "__reactHandles$" + Er;
function Sn(e) {
    var t = e[lt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ct] || n[lt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = _f(e); e !== null; ) {
                    if (n = e[lt])
                        return n;
                    e = _f(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Ii(e) {
    return e = e[lt] || e[Ct],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Yn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(C(33))
}
function Na(e) {
    return e[vi] || null
}
var wl = []
  , Gn = -1;
function un(e) {
    return {
        current: e
    }
}
function K(e) {
    0 > Gn || (e.current = wl[Gn],
    wl[Gn] = null,
    Gn--)
}
function $(e, t) {
    Gn++,
    wl[Gn] = e.current,
    e.current = t
}
var tn = {}
  , Ce = un(tn)
  , Le = un(!1)
  , Ln = tn;
function vr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return tn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Re(e) {
    return e = e.childContextTypes,
    e != null
}
function Qo() {
    K(Le),
    K(Ce)
}
function If(e, t, n) {
    if (Ce.current !== tn)
        throw Error(C(168));
    $(Ce, t),
    $(Le, n)
}
function fm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(C(108, oy(e) || "Unknown", i));
    return q({}, n, r)
}
function Xo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn,
    Ln = Ce.current,
    $(Ce, e),
    $(Le, Le.current),
    !0
}
function Vf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(C(169));
    n ? (e = fm(e, t, Ln),
    r.__reactInternalMemoizedMergedChildContext = e,
    K(Le),
    K(Ce),
    $(Ce, e)) : K(Le),
    $(Le, n)
}
var pt = null
  , La = !1
  , gs = !1;
function dm(e) {
    pt === null ? pt = [e] : pt.push(e)
}
function k1(e) {
    La = !0,
    dm(e)
}
function cn() {
    if (!gs && pt !== null) {
        gs = !0;
        var e = 0
          , t = B;
        try {
            var n = pt;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            pt = null,
            La = !1
        } catch (i) {
            throw pt !== null && (pt = pt.slice(e + 1)),
            Vp(Nu, cn),
            i
        } finally {
            B = t,
            gs = !1
        }
    }
    return null
}
var Qn = []
  , Xn = 0
  , Zo = null
  , qo = 0
  , He = []
  , Ke = 0
  , Rn = null
  , mt = 1
  , vt = "";
function gn(e, t) {
    Qn[Xn++] = qo,
    Qn[Xn++] = Zo,
    Zo = e,
    qo = t
}
function hm(e, t, n) {
    He[Ke++] = mt,
    He[Ke++] = vt,
    He[Ke++] = Rn,
    Rn = e;
    var r = mt;
    e = vt;
    var i = 32 - nt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - nt(t) + i;
    if (30 < o) {
        var a = i - i % 5;
        o = (r & (1 << a) - 1).toString(32),
        r >>= a,
        i -= a,
        mt = 1 << 32 - nt(t) + i | n << i | r,
        vt = o + e
    } else
        mt = 1 << o | n << i | r,
        vt = e
}
function Du(e) {
    e.return !== null && (gn(e, 1),
    hm(e, 1, 0))
}
function Fu(e) {
    for (; e === Zo; )
        Zo = Qn[--Xn],
        Qn[Xn] = null,
        qo = Qn[--Xn],
        Qn[Xn] = null;
    for (; e === Rn; )
        Rn = He[--Ke],
        He[Ke] = null,
        vt = He[--Ke],
        He[Ke] = null,
        mt = He[--Ke],
        He[Ke] = null
}
var Ve = null
  , Ie = null
  , G = !1
  , et = null;
function pm(e, t) {
    var n = Ye(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Df(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ve = e,
        Ie = Yt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ve = e,
        Ie = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Rn !== null ? {
            id: mt,
            overflow: vt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ye(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ve = e,
        Ie = null,
        !0) : !1;
    default:
        return !1
    }
}
function xl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Sl(e) {
    if (G) {
        var t = Ie;
        if (t) {
            var n = t;
            if (!Df(e, t)) {
                if (xl(e))
                    throw Error(C(418));
                t = Yt(n.nextSibling);
                var r = Ve;
                t && Df(e, t) ? pm(r, n) : (e.flags = e.flags & -4097 | 2,
                G = !1,
                Ve = e)
            }
        } else {
            if (xl(e))
                throw Error(C(418));
            e.flags = e.flags & -4097 | 2,
            G = !1,
            Ve = e
        }
    }
}
function Ff(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ve = e
}
function io(e) {
    if (e !== Ve)
        return !1;
    if (!G)
        return Ff(e),
        G = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !vl(e.type, e.memoizedProps)),
    t && (t = Ie)) {
        if (xl(e))
            throw mm(),
            Error(C(418));
        for (; t; )
            pm(e, t),
            t = Yt(t.nextSibling)
    }
    if (Ff(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(C(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ie = Yt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ie = null
        }
    } else
        Ie = Ve ? Yt(e.stateNode.nextSibling) : null;
    return !0
}
function mm() {
    for (var e = Ie; e; )
        e = Yt(e.nextSibling)
}
function gr() {
    Ie = Ve = null,
    G = !1
}
function zu(e) {
    et === null ? et = [e] : et.push(e)
}
var C1 = Lt.ReactCurrentBatchConfig;
function _r(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(C(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(C(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
                var s = i.refs;
                a === null ? delete s[o] : s[o] = a
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(C(284));
        if (!n._owner)
            throw Error(C(290, e))
    }
    return e
}
function oo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function zf(e) {
    var t = e._init;
    return t(e._payload)
}
function vm(e) {
    function t(p, h) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [h],
            p.flags |= 16) : m.push(h)
        }
    }
    function n(p, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(p, h),
            h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function i(p, h) {
        return p = Zt(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function o(p, h, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < h ? (p.flags |= 2,
        h) : m) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function a(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function s(p, h, m, x) {
        return h === null || h.tag !== 6 ? (h = Ps(m, p.mode, x),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function l(p, h, m, x) {
        var k = m.type;
        return k === $n ? c(p, h, m.props.children, x, m.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === It && zf(k) === h.type) ? (x = i(h, m.props),
        x.ref = _r(p, h, m),
        x.return = p,
        x) : (x = Mo(m.type, m.key, m.props, null, p.mode, x),
        x.ref = _r(p, h, m),
        x.return = p,
        x)
    }
    function u(p, h, m, x) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Ts(m, p.mode, x),
        h.return = p,
        h) : (h = i(h, m.children || []),
        h.return = p,
        h)
    }
    function c(p, h, m, x, k) {
        return h === null || h.tag !== 7 ? (h = An(m, p.mode, x, k),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function f(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Ps("" + h, p.mode, m),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Gi:
                return m = Mo(h.type, h.key, h.props, null, p.mode, m),
                m.ref = _r(p, null, h),
                m.return = p,
                m;
            case Un:
                return h = Ts(h, p.mode, m),
                h.return = p,
                h;
            case It:
                var x = h._init;
                return f(p, x(h._payload), m)
            }
            if (zr(h) || Lr(h))
                return h = An(h, p.mode, m, null),
                h.return = p,
                h;
            oo(p, h)
        }
        return null
    }
    function d(p, h, m, x) {
        var k = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return k !== null ? null : s(p, h, "" + m, x);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Gi:
                return m.key === k ? l(p, h, m, x) : null;
            case Un:
                return m.key === k ? u(p, h, m, x) : null;
            case It:
                return k = m._init,
                d(p, h, k(m._payload), x)
            }
            if (zr(m) || Lr(m))
                return k !== null ? null : c(p, h, m, x, null);
            oo(p, m)
        }
        return null
    }
    function v(p, h, m, x, k) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return p = p.get(m) || null,
            s(h, p, "" + x, k);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Gi:
                return p = p.get(x.key === null ? m : x.key) || null,
                l(h, p, x, k);
            case Un:
                return p = p.get(x.key === null ? m : x.key) || null,
                u(h, p, x, k);
            case It:
                var E = x._init;
                return v(p, h, m, E(x._payload), k)
            }
            if (zr(x) || Lr(x))
                return p = p.get(m) || null,
                c(h, p, x, k, null);
            oo(h, x)
        }
        return null
    }
    function g(p, h, m, x) {
        for (var k = null, E = null, b = h, T = h = 0, M = null; b !== null && T < m.length; T++) {
            b.index > T ? (M = b,
            b = null) : M = b.sibling;
            var O = d(p, b, m[T], x);
            if (O === null) {
                b === null && (b = M);
                break
            }
            e && b && O.alternate === null && t(p, b),
            h = o(O, h, T),
            E === null ? k = O : E.sibling = O,
            E = O,
            b = M
        }
        if (T === m.length)
            return n(p, b),
            G && gn(p, T),
            k;
        if (b === null) {
            for (; T < m.length; T++)
                b = f(p, m[T], x),
                b !== null && (h = o(b, h, T),
                E === null ? k = b : E.sibling = b,
                E = b);
            return G && gn(p, T),
            k
        }
        for (b = r(p, b); T < m.length; T++)
            M = v(b, p, T, m[T], x),
            M !== null && (e && M.alternate !== null && b.delete(M.key === null ? T : M.key),
            h = o(M, h, T),
            E === null ? k = M : E.sibling = M,
            E = M);
        return e && b.forEach(function(le) {
            return t(p, le)
        }),
        G && gn(p, T),
        k
    }
    function y(p, h, m, x) {
        var k = Lr(m);
        if (typeof k != "function")
            throw Error(C(150));
        if (m = k.call(m),
        m == null)
            throw Error(C(151));
        for (var E = k = null, b = h, T = h = 0, M = null, O = m.next(); b !== null && !O.done; T++,
        O = m.next()) {
            b.index > T ? (M = b,
            b = null) : M = b.sibling;
            var le = d(p, b, O.value, x);
            if (le === null) {
                b === null && (b = M);
                break
            }
            e && b && le.alternate === null && t(p, b),
            h = o(le, h, T),
            E === null ? k = le : E.sibling = le,
            E = le,
            b = M
        }
        if (O.done)
            return n(p, b),
            G && gn(p, T),
            k;
        if (b === null) {
            for (; !O.done; T++,
            O = m.next())
                O = f(p, O.value, x),
                O !== null && (h = o(O, h, T),
                E === null ? k = O : E.sibling = O,
                E = O);
            return G && gn(p, T),
            k
        }
        for (b = r(p, b); !O.done; T++,
        O = m.next())
            O = v(b, p, T, O.value, x),
            O !== null && (e && O.alternate !== null && b.delete(O.key === null ? T : O.key),
            h = o(O, h, T),
            E === null ? k = O : E.sibling = O,
            E = O);
        return e && b.forEach(function(Ot) {
            return t(p, Ot)
        }),
        G && gn(p, T),
        k
    }
    function S(p, h, m, x) {
        if (typeof m == "object" && m !== null && m.type === $n && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Gi:
                e: {
                    for (var k = m.key, E = h; E !== null; ) {
                        if (E.key === k) {
                            if (k = m.type,
                            k === $n) {
                                if (E.tag === 7) {
                                    n(p, E.sibling),
                                    h = i(E, m.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === It && zf(k) === E.type) {
                                n(p, E.sibling),
                                h = i(E, m.props),
                                h.ref = _r(p, E, m),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, E);
                            break
                        } else
                            t(p, E);
                        E = E.sibling
                    }
                    m.type === $n ? (h = An(m.props.children, p.mode, x, m.key),
                    h.return = p,
                    p = h) : (x = Mo(m.type, m.key, m.props, null, p.mode, x),
                    x.ref = _r(p, h, m),
                    x.return = p,
                    p = x)
                }
                return a(p);
            case Un:
                e: {
                    for (E = m.key; h !== null; ) {
                        if (h.key === E)
                            if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(p, h.sibling),
                                h = i(h, m.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            t(p, h);
                        h = h.sibling
                    }
                    h = Ts(m, p.mode, x),
                    h.return = p,
                    p = h
                }
                return a(p);
            case It:
                return E = m._init,
                S(p, h, E(m._payload), x)
            }
            if (zr(m))
                return g(p, h, m, x);
            if (Lr(m))
                return y(p, h, m, x);
            oo(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = i(h, m),
        h.return = p,
        p = h) : (n(p, h),
        h = Ps(m, p.mode, x),
        h.return = p,
        p = h),
        a(p)) : n(p, h)
    }
    return S
}
var yr = vm(!0)
  , gm = vm(!1)
  , Jo = un(null)
  , ea = null
  , Zn = null
  , Bu = null;
function Uu() {
    Bu = Zn = ea = null
}
function $u(e) {
    var t = Jo.current;
    K(Jo),
    e._currentValue = t
}
function kl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function fr(e, t) {
    ea = e,
    Bu = Zn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0),
    e.firstContext = null)
}
function Qe(e) {
    var t = e._currentValue;
    if (Bu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Zn === null) {
            if (ea === null)
                throw Error(C(308));
            Zn = e,
            ea.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Zn = Zn.next = e;
    return t
}
var kn = null;
function Wu(e) {
    kn === null ? kn = [e] : kn.push(e)
}
function ym(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Wu(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Pt(e, r)
}
function Pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Vt = !1;
function Hu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function wm(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function yt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Gt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Pt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Wu(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Pt(e, n)
}
function Ao(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Lu(e, n)
    }
}
function Bf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = a : o = o.next = a,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ta(e, t, n, r) {
    var i = e.updateQueue;
    Vt = !1;
    var o = i.firstBaseUpdate
      , a = i.lastBaseUpdate
      , s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var l = s
          , u = l.next;
        l.next = null,
        a === null ? o = u : a.next = u,
        a = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        s = c.lastBaseUpdate,
        s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u,
        c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        a = 0,
        c = u = l = null,
        s = o;
        do {
            var d = s.lane
              , v = s.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: v,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var g = e
                      , y = s;
                    switch (d = t,
                    v = n,
                    y.tag) {
                    case 1:
                        if (g = y.payload,
                        typeof g == "function") {
                            f = g.call(v, f, d);
                            break e
                        }
                        f = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = y.payload,
                        d = typeof g == "function" ? g.call(v, f, d) : g,
                        d == null)
                            break e;
                        f = q({}, f, d);
                        break e;
                    case 2:
                        Vt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [s] : d.push(s))
            } else
                v = {
                    eventTime: v,
                    lane: d,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                c === null ? (u = c = v,
                l = f) : c = c.next = v,
                a |= d;
            if (s = s.next,
            s === null) {
                if (s = i.shared.pending,
                s === null)
                    break;
                d = s,
                s = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                a |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        jn |= a,
        e.lanes = a,
        e.memoizedState = f
    }
}
function Uf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(C(191, i));
                i.call(r)
            }
        }
}
var Vi = {}
  , ft = un(Vi)
  , gi = un(Vi)
  , yi = un(Vi);
function Cn(e) {
    if (e === Vi)
        throw Error(C(174));
    return e
}
function Ku(e, t) {
    switch ($(yi, t),
    $(gi, e),
    $(ft, Vi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : nl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = nl(t, e)
    }
    K(ft),
    $(ft, t)
}
function wr() {
    K(ft),
    K(gi),
    K(yi)
}
function xm(e) {
    Cn(yi.current);
    var t = Cn(ft.current)
      , n = nl(t, e.type);
    t !== n && ($(gi, e),
    $(ft, n))
}
function Yu(e) {
    gi.current === e && (K(ft),
    K(gi))
}
var Q = un(0);
function na(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ys = [];
function Gu() {
    for (var e = 0; e < ys.length; e++)
        ys[e]._workInProgressVersionPrimary = null;
    ys.length = 0
}
var No = Lt.ReactCurrentDispatcher
  , ws = Lt.ReactCurrentBatchConfig
  , On = 0
  , Z = null
  , oe = null
  , ce = null
  , ra = !1
  , Xr = !1
  , wi = 0
  , P1 = 0;
function ge() {
    throw Error(C(321))
}
function Qu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!it(e[n], t[n]))
            return !1;
    return !0
}
function Xu(e, t, n, r, i, o) {
    if (On = o,
    Z = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    No.current = e === null || e.memoizedState === null ? A1 : N1,
    e = n(r, i),
    Xr) {
        o = 0;
        do {
            if (Xr = !1,
            wi = 0,
            25 <= o)
                throw Error(C(301));
            o += 1,
            ce = oe = null,
            t.updateQueue = null,
            No.current = L1,
            e = n(r, i)
        } while (Xr)
    }
    if (No.current = ia,
    t = oe !== null && oe.next !== null,
    On = 0,
    ce = oe = Z = null,
    ra = !1,
    t)
        throw Error(C(300));
    return e
}
function Zu() {
    var e = wi !== 0;
    return wi = 0,
    e
}
function at() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ce === null ? Z.memoizedState = ce = e : ce = ce.next = e,
    ce
}
function Xe() {
    if (oe === null) {
        var e = Z.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = oe.next;
    var t = ce === null ? Z.memoizedState : ce.next;
    if (t !== null)
        ce = t,
        oe = e;
    else {
        if (e === null)
            throw Error(C(310));
        oe = e,
        e = {
            memoizedState: oe.memoizedState,
            baseState: oe.baseState,
            baseQueue: oe.baseQueue,
            queue: oe.queue,
            next: null
        },
        ce === null ? Z.memoizedState = ce = e : ce = ce.next = e
    }
    return ce
}
function xi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function xs(e) {
    var t = Xe()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = oe
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var a = i.next;
            i.next = o.next,
            o.next = a
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var s = a = null
          , l = null
          , u = o;
        do {
            var c = u.lane;
            if ((On & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = f,
                a = r) : l = l.next = f,
                Z.lanes |= c,
                jn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? a = r : l.next = s,
        it(r, t.memoizedState) || (Ne = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            Z.lanes |= o,
            jn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ss(e) {
    var t = Xe()
      , n = t.queue;
    if (n === null)
        throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var a = i = i.next;
        do
            o = e(o, a.action),
            a = a.next;
        while (a !== i);
        it(o, t.memoizedState) || (Ne = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Sm() {}
function km(e, t) {
    var n = Z
      , r = Xe()
      , i = t()
      , o = !it(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Ne = !0),
    r = r.queue,
    qu(Tm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || ce !== null && ce.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Si(9, Pm.bind(null, n, r, i, t), void 0, null),
        fe === null)
            throw Error(C(349));
        On & 30 || Cm(n, t, i)
    }
    return i
}
function Cm(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Pm(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Em(t) && bm(e)
}
function Tm(e, t, n) {
    return n(function() {
        Em(t) && bm(e)
    })
}
function Em(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !it(e, n)
    } catch {
        return !0
    }
}
function bm(e) {
    var t = Pt(e, 1);
    t !== null && rt(t, e, 1, -1)
}
function $f(e) {
    var t = at();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xi,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = b1.bind(null, Z, e),
    [t.memoizedState, e]
}
function Si(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Z.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Z.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Am() {
    return Xe().memoizedState
}
function Lo(e, t, n, r) {
    var i = at();
    Z.flags |= e,
    i.memoizedState = Si(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ra(e, t, n, r) {
    var i = Xe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (oe !== null) {
        var a = oe.memoizedState;
        if (o = a.destroy,
        r !== null && Qu(r, a.deps)) {
            i.memoizedState = Si(t, n, o, r);
            return
        }
    }
    Z.flags |= e,
    i.memoizedState = Si(1 | t, n, o, r)
}
function Wf(e, t) {
    return Lo(8390656, 8, e, t)
}
function qu(e, t) {
    return Ra(2048, 8, e, t)
}
function Nm(e, t) {
    return Ra(4, 2, e, t)
}
function Lm(e, t) {
    return Ra(4, 4, e, t)
}
function Rm(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Om(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ra(4, 4, Rm.bind(null, t, e), n)
}
function Ju() {}
function jm(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Mm(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function _m(e, t, n) {
    return On & 21 ? (it(n, t) || (n = zp(),
    Z.lanes |= n,
    jn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ne = !0),
    e.memoizedState = n)
}
function T1(e, t) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ws.transition;
    ws.transition = {};
    try {
        e(!1),
        t()
    } finally {
        B = n,
        ws.transition = r
    }
}
function Im() {
    return Xe().memoizedState
}
function E1(e, t, n) {
    var r = Xt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Vm(e))
        Dm(t, n);
    else if (n = ym(e, t, n, r),
    n !== null) {
        var i = Te();
        rt(n, e, r, i),
        Fm(n, t, r)
    }
}
function b1(e, t, n) {
    var r = Xt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Vm(e))
        Dm(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var a = t.lastRenderedState
                  , s = o(a, n);
                if (i.hasEagerState = !0,
                i.eagerState = s,
                it(s, a)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Wu(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = ym(e, t, i, r),
        n !== null && (i = Te(),
        rt(n, e, r, i),
        Fm(n, t, r))
    }
}
function Vm(e) {
    var t = e.alternate;
    return e === Z || t !== null && t === Z
}
function Dm(e, t) {
    Xr = ra = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Fm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Lu(e, n)
    }
}
var ia = {
    readContext: Qe,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1
}
  , A1 = {
    readContext: Qe,
    useCallback: function(e, t) {
        return at().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Qe,
    useEffect: Wf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Lo(4194308, 4, Rm.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Lo(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Lo(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = at();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = at();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = E1.bind(null, Z, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = at();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: $f,
    useDebugValue: Ju,
    useDeferredValue: function(e) {
        return at().memoizedState = e
    },
    useTransition: function() {
        var e = $f(!1)
          , t = e[0];
        return e = T1.bind(null, e[1]),
        at().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Z
          , i = at();
        if (G) {
            if (n === void 0)
                throw Error(C(407));
            n = n()
        } else {
            if (n = t(),
            fe === null)
                throw Error(C(349));
            On & 30 || Cm(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Wf(Tm.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Si(9, Pm.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = at()
          , t = fe.identifierPrefix;
        if (G) {
            var n = vt
              , r = mt;
            n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = wi++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = P1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , N1 = {
    readContext: Qe,
    useCallback: jm,
    useContext: Qe,
    useEffect: qu,
    useImperativeHandle: Om,
    useInsertionEffect: Nm,
    useLayoutEffect: Lm,
    useMemo: Mm,
    useReducer: xs,
    useRef: Am,
    useState: function() {
        return xs(xi)
    },
    useDebugValue: Ju,
    useDeferredValue: function(e) {
        var t = Xe();
        return _m(t, oe.memoizedState, e)
    },
    useTransition: function() {
        var e = xs(xi)[0]
          , t = Xe().memoizedState;
        return [e, t]
    },
    useMutableSource: Sm,
    useSyncExternalStore: km,
    useId: Im,
    unstable_isNewReconciler: !1
}
  , L1 = {
    readContext: Qe,
    useCallback: jm,
    useContext: Qe,
    useEffect: qu,
    useImperativeHandle: Om,
    useInsertionEffect: Nm,
    useLayoutEffect: Lm,
    useMemo: Mm,
    useReducer: Ss,
    useRef: Am,
    useState: function() {
        return Ss(xi)
    },
    useDebugValue: Ju,
    useDeferredValue: function(e) {
        var t = Xe();
        return oe === null ? t.memoizedState = e : _m(t, oe.memoizedState, e)
    },
    useTransition: function() {
        var e = Ss(xi)[0]
          , t = Xe().memoizedState;
        return [e, t]
    },
    useMutableSource: Sm,
    useSyncExternalStore: km,
    useId: Im,
    unstable_isNewReconciler: !1
};
function qe(e, t) {
    if (e && e.defaultProps) {
        t = q({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Cl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Oa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Dn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te()
          , i = Xt(e)
          , o = yt(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Gt(e, o, i),
        t !== null && (rt(t, e, i, r),
        Ao(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Te()
          , i = Xt(e)
          , o = yt(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Gt(e, o, i),
        t !== null && (rt(t, e, i, r),
        Ao(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Te()
          , r = Xt(e)
          , i = yt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Gt(e, i, r),
        t !== null && (rt(t, e, r, n),
        Ao(t, e, r))
    }
};
function Hf(e, t, n, r, i, o, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !hi(n, r) || !hi(i, o) : !0
}
function zm(e, t, n) {
    var r = !1
      , i = tn
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Qe(o) : (i = Re(t) ? Ln : Ce.current,
    r = t.contextTypes,
    o = (r = r != null) ? vr(e, i) : tn),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Oa,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Kf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oa.enqueueReplaceState(t, t.state, null)
}
function Pl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Hu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Qe(o) : (o = Re(t) ? Ln : Ce.current,
    i.context = vr(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Cl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Oa.enqueueReplaceState(i, i.state, null),
    ta(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function xr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += iy(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ks(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Tl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var R1 = typeof WeakMap == "function" ? WeakMap : Map;
function Bm(e, t, n) {
    n = yt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        aa || (aa = !0,
        _l = r),
        Tl(e, t)
    }
    ,
    n
}
function Um(e, t, n) {
    n = yt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Tl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Tl(e, t),
        typeof r != "function" && (Qt === null ? Qt = new Set([this]) : Qt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function Yf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new R1;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = H1.bind(null, e, t, n),
    t.then(e, e))
}
function Gf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Qf(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1),
    t.tag = 2,
    Gt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var O1 = Lt.ReactCurrentOwner
  , Ne = !1;
function Pe(e, t, n, r) {
    t.child = e === null ? gm(t, null, n, r) : yr(t, e.child, n, r)
}
function Xf(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return fr(t, i),
    r = Xu(e, t, n, r, o, i),
    n = Zu(),
    e !== null && !Ne ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Tt(e, t, i)) : (G && n && Du(t),
    t.flags |= 1,
    Pe(e, t, r, i),
    t.child)
}
function Zf(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !sc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        $m(e, t, o, r, i)) : (e = Mo(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var a = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : hi,
        n(a, r) && e.ref === t.ref)
            return Tt(e, t, i)
    }
    return t.flags |= 1,
    e = Zt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function $m(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (hi(o, r) && e.ref === t.ref)
            if (Ne = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Ne = !0);
            else
                return t.lanes = e.lanes,
                Tt(e, t, i)
    }
    return El(e, t, n, r, i)
}
function Wm(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            $(Jn, _e),
            _e |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                $(Jn, _e),
                _e |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            $(Jn, _e),
            _e |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        $(Jn, _e),
        _e |= r;
    return Pe(e, t, i, n),
    t.child
}
function Hm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function El(e, t, n, r, i) {
    var o = Re(n) ? Ln : Ce.current;
    return o = vr(t, o),
    fr(t, i),
    n = Xu(e, t, n, r, o, i),
    r = Zu(),
    e !== null && !Ne ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Tt(e, t, i)) : (G && r && Du(t),
    t.flags |= 1,
    Pe(e, t, n, i),
    t.child)
}
function qf(e, t, n, r, i) {
    if (Re(n)) {
        var o = !0;
        Xo(t)
    } else
        o = !1;
    if (fr(t, i),
    t.stateNode === null)
        Ro(e, t),
        zm(t, n, r),
        Pl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , s = t.memoizedProps;
        a.props = s;
        var l = a.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Qe(u) : (u = Re(n) ? Ln : Ce.current,
        u = vr(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && Kf(t, a, r, u),
        Vt = !1;
        var d = t.memoizedState;
        a.state = d,
        ta(t, r, a, i),
        l = t.memoizedState,
        s !== r || d !== l || Le.current || Vt ? (typeof c == "function" && (Cl(t, n, c, r),
        l = t.memoizedState),
        (s = Vt || Hf(t, n, s, r, d, l, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        a.props = r,
        a.state = l,
        a.context = u,
        r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        wm(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : qe(t.type, s),
        a.props = u,
        f = t.pendingProps,
        d = a.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Qe(l) : (l = Re(n) ? Ln : Ce.current,
        l = vr(t, l));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== f || d !== l) && Kf(t, a, r, l),
        Vt = !1,
        d = t.memoizedState,
        a.state = d,
        ta(t, r, a, i);
        var g = t.memoizedState;
        s !== f || d !== g || Le.current || Vt ? (typeof v == "function" && (Cl(t, n, v, r),
        g = t.memoizedState),
        (u = Vt || Hf(t, n, u, r, d, g, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, g, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, g, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        a.props = r,
        a.state = g,
        a.context = l,
        r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return bl(e, t, n, r, o, i)
}
function bl(e, t, n, r, i, o) {
    Hm(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return i && Vf(t, n, !1),
        Tt(e, t, o);
    r = t.stateNode,
    O1.current = t;
    var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = yr(t, e.child, null, o),
    t.child = yr(t, null, s, o)) : Pe(e, t, s, o),
    t.memoizedState = r.state,
    i && Vf(t, n, !0),
    t.child
}
function Km(e) {
    var t = e.stateNode;
    t.pendingContext ? If(e, t.pendingContext, t.pendingContext !== t.context) : t.context && If(e, t.context, !1),
    Ku(e, t.containerInfo)
}
function Jf(e, t, n, r, i) {
    return gr(),
    zu(i),
    t.flags |= 256,
    Pe(e, t, n, r),
    t.child
}
var Al = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Nl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ym(e, t, n) {
    var r = t.pendingProps, i = Q.current, o = !1, a = (t.flags & 128) !== 0, s;
    if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    $(Q, i & 1),
    e === null)
        return Sl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = a) : o = _a(a, r, 0, null),
        e = An(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Nl(n),
        t.memoizedState = Al,
        e) : ec(t, a));
    if (i = e.memoizedState,
    i !== null && (s = i.dehydrated,
    s !== null))
        return j1(e, t, a, r, s, i, n);
    if (o) {
        o = r.fallback,
        a = t.mode,
        i = e.child,
        s = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Zt(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        s !== null ? o = Zt(s, o) : (o = An(o, a, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        a = e.child.memoizedState,
        a = a === null ? Nl(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        o.memoizedState = a,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Al,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Zt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ec(e, t) {
    return t = _a({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ao(e, t, n, r) {
    return r !== null && zu(r),
    yr(t, e.child, null, n),
    e = ec(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function j1(e, t, n, r, i, o, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ks(Error(C(422))),
        ao(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = _a({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = An(o, i, a, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && yr(t, e.child, null, a),
        t.child.memoizedState = Nl(a),
        t.memoizedState = Al,
        o);
    if (!(t.mode & 1))
        return ao(e, t, a, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        o = Error(C(419)),
        r = ks(o, r, void 0),
        ao(e, t, a, r)
    }
    if (s = (a & e.childLanes) !== 0,
    Ne || s) {
        if (r = fe,
        r !== null) {
            switch (a & -a) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | a) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Pt(e, i),
            rt(r, e, i, -1))
        }
        return ac(),
        r = ks(Error(C(421))),
        ao(e, t, a, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = K1.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Ie = Yt(i.nextSibling),
    Ve = t,
    G = !0,
    et = null,
    e !== null && (He[Ke++] = mt,
    He[Ke++] = vt,
    He[Ke++] = Rn,
    mt = e.id,
    vt = e.overflow,
    Rn = t),
    t = ec(t, r.children),
    t.flags |= 4096,
    t)
}
function ed(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    kl(e.return, t, n)
}
function Cs(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Gm(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Pe(e, t, r.children, n),
    r = Q.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ed(e, n, t);
                else if (e.tag === 19)
                    ed(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if ($(Q, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && na(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Cs(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && na(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Cs(t, !0, n, null, o);
            break;
        case "together":
            Cs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ro(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    jn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Zt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Zt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function M1(e, t, n) {
    switch (t.tag) {
    case 3:
        Km(t),
        gr();
        break;
    case 5:
        xm(t);
        break;
    case 1:
        Re(t.type) && Xo(t);
        break;
    case 4:
        Ku(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        $(Jo, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? ($(Q, Q.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ym(e, t, n) : ($(Q, Q.current & 1),
            e = Tt(e, t, n),
            e !== null ? e.sibling : null);
        $(Q, Q.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Gm(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        $(Q, Q.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Wm(e, t, n)
    }
    return Tt(e, t, n)
}
var Qm, Ll, Xm, Zm;
Qm = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ll = function() {}
;
Xm = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Cn(ft.current);
        var o = null;
        switch (n) {
        case "input":
            i = qs(e, i),
            r = qs(e, r),
            o = [];
            break;
        case "select":
            i = q({}, i, {
                value: void 0
            }),
            r = q({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = tl(e, i),
            r = tl(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Go)
        }
        rl(n, r);
        var a;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var s = i[u];
                    for (a in s)
                        s.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ai.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (s = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}),
                            n[a] = l[a])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    s = s ? s.__html : void 0,
                    l != null && s !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ai.hasOwnProperty(u) ? (l != null && u === "onScroll" && W("scroll", e),
                    o || s === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Zm = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Ir(e, t) {
    if (!G)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function _1(e, t, n) {
    var r = t.pendingProps;
    switch (Fu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ye(t),
        null;
    case 1:
        return Re(t.type) && Qo(),
        ye(t),
        null;
    case 3:
        return r = t.stateNode,
        wr(),
        K(Le),
        K(Ce),
        Gu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (io(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        et !== null && (Dl(et),
        et = null))),
        Ll(e, t),
        ye(t),
        null;
    case 5:
        Yu(t);
        var i = Cn(yi.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Xm(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(C(166));
                return ye(t),
                null
            }
            if (e = Cn(ft.current),
            io(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[lt] = t,
                r[vi] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    W("cancel", r),
                    W("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    W("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Ur.length; i++)
                        W(Ur[i], r);
                    break;
                case "source":
                    W("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    W("error", r),
                    W("load", r);
                    break;
                case "details":
                    W("toggle", r);
                    break;
                case "input":
                    uf(r, o),
                    W("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    W("invalid", r);
                    break;
                case "textarea":
                    ff(r, o),
                    W("invalid", r)
                }
                rl(n, o),
                i = null;
                for (var a in o)
                    if (o.hasOwnProperty(a)) {
                        var s = o[a];
                        a === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && ro(r.textContent, s, e),
                        i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && ro(r.textContent, s, e),
                        i = ["children", "" + s]) : ai.hasOwnProperty(a) && s != null && a === "onScroll" && W("scroll", r)
                    }
                switch (n) {
                case "input":
                    Qi(r),
                    cf(r, o, !0);
                    break;
                case "textarea":
                    Qi(r),
                    df(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Go)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Tp(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[lt] = t,
                e[vi] = r,
                Qm(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = il(n, r),
                    n) {
                    case "dialog":
                        W("cancel", e),
                        W("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        W("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Ur.length; i++)
                            W(Ur[i], e);
                        i = r;
                        break;
                    case "source":
                        W("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        W("error", e),
                        W("load", e),
                        i = r;
                        break;
                    case "details":
                        W("toggle", e),
                        i = r;
                        break;
                    case "input":
                        uf(e, r),
                        i = qs(e, r),
                        W("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = q({}, r, {
                            value: void 0
                        }),
                        W("invalid", e);
                        break;
                    case "textarea":
                        ff(e, r),
                        i = tl(e, r),
                        W("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    rl(n, i),
                    s = i;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "style" ? Ap(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Ep(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && si(e, l) : typeof l == "number" && si(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ai.hasOwnProperty(o) ? l != null && o === "onScroll" && W("scroll", e) : l != null && Pu(e, o, l, a))
                        }
                    switch (n) {
                    case "input":
                        Qi(e),
                        cf(e, r, !1);
                        break;
                    case "textarea":
                        Qi(e),
                        df(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + en(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? sr(e, !!r.multiple, o, !1) : r.defaultValue != null && sr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Go)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ye(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Zm(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(C(166));
            if (n = Cn(yi.current),
            Cn(ft.current),
            io(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[lt] = t,
                (o = r.nodeValue !== n) && (e = Ve,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ro(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ro(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[lt] = t,
                t.stateNode = r
        }
        return ye(t),
        null;
    case 13:
        if (K(Q),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (G && Ie !== null && t.mode & 1 && !(t.flags & 128))
                mm(),
                gr(),
                t.flags |= 98560,
                o = !1;
            else if (o = io(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(C(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(C(317));
                    o[lt] = t
                } else
                    gr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ye(t),
                o = !1
            } else
                et !== null && (Dl(et),
                et = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Q.current & 1 ? ae === 0 && (ae = 3) : ac())),
        t.updateQueue !== null && (t.flags |= 4),
        ye(t),
        null);
    case 4:
        return wr(),
        Ll(e, t),
        e === null && pi(t.stateNode.containerInfo),
        ye(t),
        null;
    case 10:
        return $u(t.type._context),
        ye(t),
        null;
    case 17:
        return Re(t.type) && Qo(),
        ye(t),
        null;
    case 19:
        if (K(Q),
        o = t.memoizedState,
        o === null)
            return ye(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = o.rendering,
        a === null)
            if (r)
                Ir(o, !1);
            else {
                if (ae !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = na(e),
                        a !== null) {
                            for (t.flags |= 128,
                            Ir(o, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                a = o.alternate,
                                a === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = a.childLanes,
                                o.lanes = a.lanes,
                                o.child = a.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = a.memoizedProps,
                                o.memoizedState = a.memoizedState,
                                o.updateQueue = a.updateQueue,
                                o.type = a.type,
                                e = a.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return $(Q, Q.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && re() > Sr && (t.flags |= 128,
                r = !0,
                Ir(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = na(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Ir(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !a.alternate && !G)
                        return ye(t),
                        null
                } else
                    2 * re() - o.renderingStartTime > Sr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Ir(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = o.last,
            n !== null ? n.sibling = a : t.child = a,
            o.last = a)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = re(),
        t.sibling = null,
        n = Q.current,
        $(Q, r ? n & 1 | 2 : n & 1),
        t) : (ye(t),
        null);
    case 22:
    case 23:
        return oc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? _e & 1073741824 && (ye(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(C(156, t.tag))
}
function I1(e, t) {
    switch (Fu(t),
    t.tag) {
    case 1:
        return Re(t.type) && Qo(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return wr(),
        K(Le),
        K(Ce),
        Gu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Yu(t),
        null;
    case 13:
        if (K(Q),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(C(340));
            gr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return K(Q),
        null;
    case 4:
        return wr(),
        null;
    case 10:
        return $u(t.type._context),
        null;
    case 22:
    case 23:
        return oc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var so = !1
  , xe = !1
  , V1 = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function qn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                J(e, t, r)
            }
        else
            n.current = null
}
function Rl(e, t, n) {
    try {
        n()
    } catch (r) {
        J(e, t, r)
    }
}
var td = !1;
function D1(e, t) {
    if (pl = Ho,
    e = nm(),
    Vu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , s = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var v; f !== n || i !== 0 && f.nodeType !== 3 || (s = a + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (l = a + r),
                        f.nodeType === 3 && (a += f.nodeValue.length),
                        (v = f.firstChild) !== null; )
                            d = f,
                            f = v;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (s = a),
                            d === o && ++c === r && (l = a),
                            (v = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = v
                    }
                    n = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ml = {
        focusedElem: e,
        selectionRange: n
    },
    Ho = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var y = g.memoizedProps
                                  , S = g.memoizedState
                                  , p = t.stateNode
                                  , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : qe(t.type, y), S);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                        }
                } catch (x) {
                    J(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return g = td,
    td = !1,
    g
}
function Zr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Rl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function ja(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ol(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function qm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    qm(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[lt],
    delete t[vi],
    delete t[yl],
    delete t[x1],
    delete t[S1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Jm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function nd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Jm(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function jl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Go));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (jl(e, t, n),
        e = e.sibling; e !== null; )
            jl(e, t, n),
            e = e.sibling
}
function Ml(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ml(e, t, n),
        e = e.sibling; e !== null; )
            Ml(e, t, n),
            e = e.sibling
}
var he = null
  , Je = !1;
function jt(e, t, n) {
    for (n = n.child; n !== null; )
        e0(e, t, n),
        n = n.sibling
}
function e0(e, t, n) {
    if (ct && typeof ct.onCommitFiberUnmount == "function")
        try {
            ct.onCommitFiberUnmount(Ta, n)
        } catch {}
    switch (n.tag) {
    case 5:
        xe || qn(n, t);
    case 6:
        var r = he
          , i = Je;
        he = null,
        jt(e, t, n),
        he = r,
        Je = i,
        he !== null && (Je ? (e = he,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
        break;
    case 18:
        he !== null && (Je ? (e = he,
        n = n.stateNode,
        e.nodeType === 8 ? vs(e.parentNode, n) : e.nodeType === 1 && vs(e, n),
        fi(e)) : vs(he, n.stateNode));
        break;
    case 4:
        r = he,
        i = Je,
        he = n.stateNode.containerInfo,
        Je = !0,
        jt(e, t, n),
        he = r,
        Je = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!xe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , a = o.destroy;
                o = o.tag,
                a !== void 0 && (o & 2 || o & 4) && Rl(n, t, a),
                i = i.next
            } while (i !== r)
        }
        jt(e, t, n);
        break;
    case 1:
        if (!xe && (qn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                J(n, t, s)
            }
        jt(e, t, n);
        break;
    case 21:
        jt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null,
        jt(e, t, n),
        xe = r) : jt(e, t, n);
        break;
    default:
        jt(e, t, n)
    }
}
function rd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new V1),
        t.forEach(function(r) {
            var i = Y1.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , a = t
                  , s = a;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        he = s.stateNode,
                        Je = !1;
                        break e;
                    case 3:
                        he = s.stateNode.containerInfo,
                        Je = !0;
                        break e;
                    case 4:
                        he = s.stateNode.containerInfo,
                        Je = !0;
                        break e
                    }
                    s = s.return
                }
                if (he === null)
                    throw Error(C(160));
                e0(o, a, i),
                he = null,
                Je = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                J(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            t0(t, e),
            t = t.sibling
}
function t0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ze(t, e),
        ot(e),
        r & 4) {
            try {
                Zr(3, e, e.return),
                ja(3, e)
            } catch (y) {
                J(e, e.return, y)
            }
            try {
                Zr(5, e, e.return)
            } catch (y) {
                J(e, e.return, y)
            }
        }
        break;
    case 1:
        Ze(t, e),
        ot(e),
        r & 512 && n !== null && qn(n, n.return);
        break;
    case 5:
        if (Ze(t, e),
        ot(e),
        r & 512 && n !== null && qn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                si(i, "")
            } catch (y) {
                J(e, e.return, y)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , a = n !== null ? n.memoizedProps : o
              , s = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && Cp(i, o),
                    il(s, a);
                    var u = il(s, o);
                    for (a = 0; a < l.length; a += 2) {
                        var c = l[a]
                          , f = l[a + 1];
                        c === "style" ? Ap(i, f) : c === "dangerouslySetInnerHTML" ? Ep(i, f) : c === "children" ? si(i, f) : Pu(i, c, f, u)
                    }
                    switch (s) {
                    case "input":
                        Js(i, o);
                        break;
                    case "textarea":
                        Pp(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var v = o.value;
                        v != null ? sr(i, !!o.multiple, v, !1) : d !== !!o.multiple && (o.defaultValue != null ? sr(i, !!o.multiple, o.defaultValue, !0) : sr(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[vi] = o
                } catch (y) {
                    J(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Ze(t, e),
        ot(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(C(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (y) {
                J(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Ze(t, e),
        ot(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                fi(t.containerInfo)
            } catch (y) {
                J(e, e.return, y)
            }
        break;
    case 4:
        Ze(t, e),
        ot(e);
        break;
    case 13:
        Ze(t, e),
        ot(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (rc = re())),
        r & 4 && rd(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (xe = (u = xe) || c,
        Ze(t, e),
        xe = u) : Ze(t, e),
        ot(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (L = e,
                c = e.child; c !== null; ) {
                    for (f = L = c; L !== null; ) {
                        switch (d = L,
                        v = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Zr(4, d, d.return);
                            break;
                        case 1:
                            qn(d, d.return);
                            var g = d.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (y) {
                                    J(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            qn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                od(f);
                                continue
                            }
                        }
                        v !== null ? (v.return = d,
                        L = v) : od(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = f.stateNode,
                            l = f.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            s.style.display = bp("display", a))
                        } catch (y) {
                            J(e, e.return, y)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (y) {
                            J(e, e.return, y)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Ze(t, e),
        ot(e),
        r & 4 && rd(e);
        break;
    case 21:
        break;
    default:
        Ze(t, e),
        ot(e)
    }
}
function ot(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Jm(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (si(i, ""),
                r.flags &= -33);
                var o = nd(e);
                Ml(e, o, i);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , s = nd(e);
                jl(e, s, a);
                break;
            default:
                throw Error(C(161))
            }
        } catch (l) {
            J(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function F1(e, t, n) {
    L = e,
    n0(e)
}
function n0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var i = L
          , o = i.child;
        if (i.tag === 22 && r) {
            var a = i.memoizedState !== null || so;
            if (!a) {
                var s = i.alternate
                  , l = s !== null && s.memoizedState !== null || xe;
                s = so;
                var u = xe;
                if (so = a,
                (xe = l) && !u)
                    for (L = i; L !== null; )
                        a = L,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? ad(i) : l !== null ? (l.return = a,
                        L = l) : ad(i);
                for (; o !== null; )
                    L = o,
                    n0(o),
                    o = o.sibling;
                L = i,
                so = s,
                xe = u
            }
            id(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            L = o) : id(e)
    }
}
function id(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        xe || ja(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !xe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Uf(t, o, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Uf(t, a, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && fi(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(C(163))
                    }
                xe || t.flags & 512 && Ol(t)
            } catch (d) {
                J(t, t.return, d)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function od(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function ad(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ja(4, t)
                } catch (l) {
                    J(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        J(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    Ol(t)
                } catch (l) {
                    J(t, o, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Ol(t)
                } catch (l) {
                    J(t, a, l)
                }
            }
        } catch (l) {
            J(t, t.return, l)
        }
        if (t === e) {
            L = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            L = s;
            break
        }
        L = t.return
    }
}
var z1 = Math.ceil
  , oa = Lt.ReactCurrentDispatcher
  , tc = Lt.ReactCurrentOwner
  , Ge = Lt.ReactCurrentBatchConfig
  , z = 0
  , fe = null
  , ie = null
  , me = 0
  , _e = 0
  , Jn = un(0)
  , ae = 0
  , ki = null
  , jn = 0
  , Ma = 0
  , nc = 0
  , qr = null
  , Ae = null
  , rc = 0
  , Sr = 1 / 0
  , ht = null
  , aa = !1
  , _l = null
  , Qt = null
  , lo = !1
  , Ut = null
  , sa = 0
  , Jr = 0
  , Il = null
  , Oo = -1
  , jo = 0;
function Te() {
    return z & 6 ? re() : Oo !== -1 ? Oo : Oo = re()
}
function Xt(e) {
    return e.mode & 1 ? z & 2 && me !== 0 ? me & -me : C1.transition !== null ? (jo === 0 && (jo = zp()),
    jo) : (e = B,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Yp(e.type)),
    e) : 1
}
function rt(e, t, n, r) {
    if (50 < Jr)
        throw Jr = 0,
        Il = null,
        Error(C(185));
    Mi(e, n, r),
    (!(z & 2) || e !== fe) && (e === fe && (!(z & 2) && (Ma |= n),
    ae === 4 && zt(e, me)),
    Oe(e, r),
    n === 1 && z === 0 && !(t.mode & 1) && (Sr = re() + 500,
    La && cn()))
}
function Oe(e, t) {
    var n = e.callbackNode;
    Cy(e, t);
    var r = Wo(e, e === fe ? me : 0);
    if (r === 0)
        n !== null && mf(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && mf(n),
        t === 1)
            e.tag === 0 ? k1(sd.bind(null, e)) : dm(sd.bind(null, e)),
            y1(function() {
                !(z & 6) && cn()
            }),
            n = null;
        else {
            switch (Bp(r)) {
            case 1:
                n = Nu;
                break;
            case 4:
                n = Dp;
                break;
            case 16:
                n = $o;
                break;
            case 536870912:
                n = Fp;
                break;
            default:
                n = $o
            }
            n = c0(n, r0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function r0(e, t) {
    if (Oo = -1,
    jo = 0,
    z & 6)
        throw Error(C(327));
    var n = e.callbackNode;
    if (dr() && e.callbackNode !== n)
        return null;
    var r = Wo(e, e === fe ? me : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = la(e, r);
    else {
        t = r;
        var i = z;
        z |= 2;
        var o = o0();
        (fe !== e || me !== t) && (ht = null,
        Sr = re() + 500,
        bn(e, t));
        do
            try {
                $1();
                break
            } catch (s) {
                i0(e, s)
            }
        while (!0);
        Uu(),
        oa.current = o,
        z = i,
        ie !== null ? t = 0 : (fe = null,
        me = 0,
        t = ae)
    }
    if (t !== 0) {
        if (t === 2 && (i = ul(e),
        i !== 0 && (r = i,
        t = Vl(e, i))),
        t === 1)
            throw n = ki,
            bn(e, 0),
            zt(e, r),
            Oe(e, re()),
            n;
        if (t === 6)
            zt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !B1(i) && (t = la(e, r),
            t === 2 && (o = ul(e),
            o !== 0 && (r = o,
            t = Vl(e, o))),
            t === 1))
                throw n = ki,
                bn(e, 0),
                zt(e, r),
                Oe(e, re()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(C(345));
            case 2:
                yn(e, Ae, ht);
                break;
            case 3:
                if (zt(e, r),
                (r & 130023424) === r && (t = rc + 500 - re(),
                10 < t)) {
                    if (Wo(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Te(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = gl(yn.bind(null, e, Ae, ht), t);
                    break
                }
                yn(e, Ae, ht);
                break;
            case 4:
                if (zt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var a = 31 - nt(r);
                    o = 1 << a,
                    a = t[a],
                    a > i && (i = a),
                    r &= ~o
                }
                if (r = i,
                r = re() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * z1(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = gl(yn.bind(null, e, Ae, ht), r);
                    break
                }
                yn(e, Ae, ht);
                break;
            case 5:
                yn(e, Ae, ht);
                break;
            default:
                throw Error(C(329))
            }
        }
    }
    return Oe(e, re()),
    e.callbackNode === n ? r0.bind(null, e) : null
}
function Vl(e, t) {
    var n = qr;
    return e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
    e = la(e, t),
    e !== 2 && (t = Ae,
    Ae = n,
    t !== null && Dl(t)),
    e
}
function Dl(e) {
    Ae === null ? Ae = e : Ae.push.apply(Ae, e)
}
function B1(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!it(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function zt(e, t) {
    for (t &= ~nc,
    t &= ~Ma,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - nt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function sd(e) {
    if (z & 6)
        throw Error(C(327));
    dr();
    var t = Wo(e, 0);
    if (!(t & 1))
        return Oe(e, re()),
        null;
    var n = la(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ul(e);
        r !== 0 && (t = r,
        n = Vl(e, r))
    }
    if (n === 1)
        throw n = ki,
        bn(e, 0),
        zt(e, t),
        Oe(e, re()),
        n;
    if (n === 6)
        throw Error(C(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    yn(e, Ae, ht),
    Oe(e, re()),
    null
}
function ic(e, t) {
    var n = z;
    z |= 1;
    try {
        return e(t)
    } finally {
        z = n,
        z === 0 && (Sr = re() + 500,
        La && cn())
    }
}
function Mn(e) {
    Ut !== null && Ut.tag === 0 && !(z & 6) && dr();
    var t = z;
    z |= 1;
    var n = Ge.transition
      , r = B;
    try {
        if (Ge.transition = null,
        B = 1,
        e)
            return e()
    } finally {
        B = r,
        Ge.transition = n,
        z = t,
        !(z & 6) && cn()
    }
}
function oc() {
    _e = Jn.current,
    K(Jn)
}
function bn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    g1(n)),
    ie !== null)
        for (n = ie.return; n !== null; ) {
            var r = n;
            switch (Fu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Qo();
                break;
            case 3:
                wr(),
                K(Le),
                K(Ce),
                Gu();
                break;
            case 5:
                Yu(r);
                break;
            case 4:
                wr();
                break;
            case 13:
                K(Q);
                break;
            case 19:
                K(Q);
                break;
            case 10:
                $u(r.type._context);
                break;
            case 22:
            case 23:
                oc()
            }
            n = n.return
        }
    if (fe = e,
    ie = e = Zt(e.current, null),
    me = _e = t,
    ae = 0,
    ki = null,
    nc = Ma = jn = 0,
    Ae = qr = null,
    kn !== null) {
        for (t = 0; t < kn.length; t++)
            if (n = kn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var a = o.next;
                    o.next = i,
                    r.next = a
                }
                n.pending = r
            }
        kn = null
    }
    return e
}
function i0(e, t) {
    do {
        var n = ie;
        try {
            if (Uu(),
            No.current = ia,
            ra) {
                for (var r = Z.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                ra = !1
            }
            if (On = 0,
            ce = oe = Z = null,
            Xr = !1,
            wi = 0,
            tc.current = null,
            n === null || n.return === null) {
                ae = 1,
                ki = t,
                ie = null;
                break
            }
            e: {
                var o = e
                  , a = n.return
                  , s = n
                  , l = t;
                if (t = me,
                s.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = s
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var v = Gf(a);
                    if (v !== null) {
                        v.flags &= -257,
                        Qf(v, a, s, o, t),
                        v.mode & 1 && Yf(o, u, t),
                        t = v,
                        l = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Yf(o, u, t),
                            ac();
                            break e
                        }
                        l = Error(C(426))
                    }
                } else if (G && s.mode & 1) {
                    var S = Gf(a);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        Qf(S, a, s, o, t),
                        zu(xr(l, s));
                        break e
                    }
                }
                o = l = xr(l, s),
                ae !== 4 && (ae = 2),
                qr === null ? qr = [o] : qr.push(o),
                o = a;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var p = Bm(o, l, t);
                        Bf(o, p);
                        break e;
                    case 1:
                        s = l;
                        var h = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Qt === null || !Qt.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var x = Um(o, s, t);
                            Bf(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            s0(n)
        } catch (k) {
            t = k,
            ie === n && n !== null && (ie = n = n.return);
            continue
        }
        break
    } while (!0)
}
function o0() {
    var e = oa.current;
    return oa.current = ia,
    e === null ? ia : e
}
function ac() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    fe === null || !(jn & 268435455) && !(Ma & 268435455) || zt(fe, me)
}
function la(e, t) {
    var n = z;
    z |= 2;
    var r = o0();
    (fe !== e || me !== t) && (ht = null,
    bn(e, t));
    do
        try {
            U1();
            break
        } catch (i) {
            i0(e, i)
        }
    while (!0);
    if (Uu(),
    z = n,
    oa.current = r,
    ie !== null)
        throw Error(C(261));
    return fe = null,
    me = 0,
    ae
}
function U1() {
    for (; ie !== null; )
        a0(ie)
}
function $1() {
    for (; ie !== null && !py(); )
        a0(ie)
}
function a0(e) {
    var t = u0(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps,
    t === null ? s0(e) : ie = t,
    tc.current = null
}
function s0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = I1(n, t),
            n !== null) {
                n.flags &= 32767,
                ie = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ae = 6,
                ie = null;
                return
            }
        } else if (n = _1(n, t, _e),
        n !== null) {
            ie = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ie = t;
            return
        }
        ie = t = e
    } while (t !== null);
    ae === 0 && (ae = 5)
}
function yn(e, t, n) {
    var r = B
      , i = Ge.transition;
    try {
        Ge.transition = null,
        B = 1,
        W1(e, t, n, r)
    } finally {
        Ge.transition = i,
        B = r
    }
    return null
}
function W1(e, t, n, r) {
    do
        dr();
    while (Ut !== null);
    if (z & 6)
        throw Error(C(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(C(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Py(e, o),
    e === fe && (ie = fe = null,
    me = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || lo || (lo = !0,
    c0($o, function() {
        return dr(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Ge.transition,
        Ge.transition = null;
        var a = B;
        B = 1;
        var s = z;
        z |= 4,
        tc.current = null,
        D1(e, n),
        t0(n, e),
        c1(ml),
        Ho = !!pl,
        ml = pl = null,
        e.current = n,
        F1(n),
        my(),
        z = s,
        B = a,
        Ge.transition = o
    } else
        e.current = n;
    if (lo && (lo = !1,
    Ut = e,
    sa = i),
    o = e.pendingLanes,
    o === 0 && (Qt = null),
    yy(n.stateNode),
    Oe(e, re()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (aa)
        throw aa = !1,
        e = _l,
        _l = null,
        e;
    return sa & 1 && e.tag !== 0 && dr(),
    o = e.pendingLanes,
    o & 1 ? e === Il ? Jr++ : (Jr = 0,
    Il = e) : Jr = 0,
    cn(),
    null
}
function dr() {
    if (Ut !== null) {
        var e = Bp(sa)
          , t = Ge.transition
          , n = B;
        try {
            if (Ge.transition = null,
            B = 16 > e ? 16 : e,
            Ut === null)
                var r = !1;
            else {
                if (e = Ut,
                Ut = null,
                sa = 0,
                z & 6)
                    throw Error(C(331));
                var i = z;
                for (z |= 4,
                L = e.current; L !== null; ) {
                    var o = L
                      , a = o.child;
                    if (L.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (L = u; L !== null; ) {
                                    var c = L;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            c = L;
                                            var d = c.sibling
                                              , v = c.return;
                                            if (qm(c),
                                            c === u) {
                                                L = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = v,
                                                L = d;
                                                break
                                            }
                                            L = v
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var y = g.child;
                                if (y !== null) {
                                    g.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null,
                                        y = S
                                    } while (y !== null)
                                }
                            }
                            L = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && a !== null)
                        a.return = o,
                        L = a;
                    else
                        e: for (; L !== null; ) {
                            if (o = L,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Zr(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                L = p;
                                break e
                            }
                            L = o.return
                        }
                }
                var h = e.current;
                for (L = h; L !== null; ) {
                    a = L;
                    var m = a.child;
                    if (a.subtreeFlags & 2064 && m !== null)
                        m.return = a,
                        L = m;
                    else
                        e: for (a = h; L !== null; ) {
                            if (s = L,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ja(9, s)
                                    }
                                } catch (k) {
                                    J(s, s.return, k)
                                }
                            if (s === a) {
                                L = null;
                                break e
                            }
                            var x = s.sibling;
                            if (x !== null) {
                                x.return = s.return,
                                L = x;
                                break e
                            }
                            L = s.return
                        }
                }
                if (z = i,
                cn(),
                ct && typeof ct.onPostCommitFiberRoot == "function")
                    try {
                        ct.onPostCommitFiberRoot(Ta, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            B = n,
            Ge.transition = t
        }
    }
    return !1
}
function ld(e, t, n) {
    t = xr(n, t),
    t = Bm(e, t, 1),
    e = Gt(e, t, 1),
    t = Te(),
    e !== null && (Mi(e, 1, t),
    Oe(e, t))
}
function J(e, t, n) {
    if (e.tag === 3)
        ld(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ld(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qt === null || !Qt.has(r))) {
                    e = xr(n, e),
                    e = Um(t, e, 1),
                    t = Gt(t, e, 1),
                    e = Te(),
                    t !== null && (Mi(t, 1, e),
                    Oe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function H1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Te(),
    e.pingedLanes |= e.suspendedLanes & n,
    fe === e && (me & n) === n && (ae === 4 || ae === 3 && (me & 130023424) === me && 500 > re() - rc ? bn(e, 0) : nc |= n),
    Oe(e, t)
}
function l0(e, t) {
    t === 0 && (e.mode & 1 ? (t = qi,
    qi <<= 1,
    !(qi & 130023424) && (qi = 4194304)) : t = 1);
    var n = Te();
    e = Pt(e, t),
    e !== null && (Mi(e, t, n),
    Oe(e, n))
}
function K1(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    l0(e, n)
}
function Y1(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(C(314))
    }
    r !== null && r.delete(t),
    l0(e, n)
}
var u0;
u0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Le.current)
            Ne = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ne = !1,
                M1(e, t, n);
            Ne = !!(e.flags & 131072)
        }
    else
        Ne = !1,
        G && t.flags & 1048576 && hm(t, qo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ro(e, t),
        e = t.pendingProps;
        var i = vr(t, Ce.current);
        fr(t, n),
        i = Xu(null, t, r, e, i, n);
        var o = Zu();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Re(r) ? (o = !0,
        Xo(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Hu(t),
        i.updater = Oa,
        t.stateNode = i,
        i._reactInternals = t,
        Pl(t, r, e, n),
        t = bl(null, t, r, !0, o, n)) : (t.tag = 0,
        G && o && Du(t),
        Pe(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ro(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Q1(r),
            e = qe(r, e),
            i) {
            case 0:
                t = El(null, t, r, e, n);
                break e;
            case 1:
                t = qf(null, t, r, e, n);
                break e;
            case 11:
                t = Xf(null, t, r, e, n);
                break e;
            case 14:
                t = Zf(null, t, r, qe(r.type, e), n);
                break e
            }
            throw Error(C(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : qe(r, i),
        El(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : qe(r, i),
        qf(e, t, r, i, n);
    case 3:
        e: {
            if (Km(t),
            e === null)
                throw Error(C(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            wm(e, t),
            ta(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = xr(Error(C(423)), t),
                    t = Jf(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = xr(Error(C(424)), t),
                    t = Jf(e, t, r, n, i);
                    break e
                } else
                    for (Ie = Yt(t.stateNode.containerInfo.firstChild),
                    Ve = t,
                    G = !0,
                    et = null,
                    n = gm(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (gr(),
                r === i) {
                    t = Tt(e, t, n);
                    break e
                }
                Pe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return xm(t),
        e === null && Sl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        a = i.children,
        vl(r, i) ? a = null : o !== null && vl(r, o) && (t.flags |= 32),
        Hm(e, t),
        Pe(e, t, a, n),
        t.child;
    case 6:
        return e === null && Sl(t),
        null;
    case 13:
        return Ym(e, t, n);
    case 4:
        return Ku(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = yr(t, null, r, n) : Pe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : qe(r, i),
        Xf(e, t, r, i, n);
    case 7:
        return Pe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Pe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Pe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            a = i.value,
            $(Jo, r._currentValue),
            r._currentValue = a,
            o !== null)
                if (it(o.value, a)) {
                    if (o.children === i.children && !Le.current) {
                        t = Tt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var s = o.dependencies;
                        if (s !== null) {
                            a = o.child;
                            for (var l = s.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = yt(-1, n & -n),
                                        l.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    kl(o.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            a = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (a = o.return,
                            a === null)
                                throw Error(C(341));
                            a.lanes |= n,
                            s = a.alternate,
                            s !== null && (s.lanes |= n),
                            kl(a, n, t),
                            a = o.sibling
                        } else
                            a = o.child;
                        if (a !== null)
                            a.return = o;
                        else
                            for (a = o; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (o = a.sibling,
                                o !== null) {
                                    o.return = a.return,
                                    a = o;
                                    break
                                }
                                a = a.return
                            }
                        o = a
                    }
            Pe(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        fr(t, n),
        i = Qe(i),
        r = r(i),
        t.flags |= 1,
        Pe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = qe(r, t.pendingProps),
        i = qe(r.type, i),
        Zf(e, t, r, i, n);
    case 15:
        return $m(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : qe(r, i),
        Ro(e, t),
        t.tag = 1,
        Re(r) ? (e = !0,
        Xo(t)) : e = !1,
        fr(t, n),
        zm(t, r, i),
        Pl(t, r, i, n),
        bl(null, t, r, !0, e, n);
    case 19:
        return Gm(e, t, n);
    case 22:
        return Wm(e, t, n)
    }
    throw Error(C(156, t.tag))
}
;
function c0(e, t) {
    return Vp(e, t)
}
function G1(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ye(e, t, n, r) {
    return new G1(e,t,n,r)
}
function sc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Q1(e) {
    if (typeof e == "function")
        return sc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Eu)
            return 11;
        if (e === bu)
            return 14
    }
    return 2
}
function Zt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ye(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Mo(e, t, n, r, i, o) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        sc(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case $n:
            return An(n.children, i, o, t);
        case Tu:
            a = 8,
            i |= 8;
            break;
        case Gs:
            return e = Ye(12, n, t, i | 2),
            e.elementType = Gs,
            e.lanes = o,
            e;
        case Qs:
            return e = Ye(13, n, t, i),
            e.elementType = Qs,
            e.lanes = o,
            e;
        case Xs:
            return e = Ye(19, n, t, i),
            e.elementType = Xs,
            e.lanes = o,
            e;
        case xp:
            return _a(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case yp:
                    a = 10;
                    break e;
                case wp:
                    a = 9;
                    break e;
                case Eu:
                    a = 11;
                    break e;
                case bu:
                    a = 14;
                    break e;
                case It:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(C(130, e == null ? e : typeof e, ""))
        }
    return t = Ye(a, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function An(e, t, n, r) {
    return e = Ye(7, e, r, t),
    e.lanes = n,
    e
}
function _a(e, t, n, r) {
    return e = Ye(22, e, r, t),
    e.elementType = xp,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ps(e, t, n) {
    return e = Ye(6, e, null, t),
    e.lanes = n,
    e
}
function Ts(e, t, n) {
    return t = Ye(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function X1(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = os(0),
    this.expirationTimes = os(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = os(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function lc(e, t, n, r, i, o, a, s, l) {
    return e = new X1(e,t,n,s,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Ye(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Hu(o),
    e
}
function Z1(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Un,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function f0(e) {
    if (!e)
        return tn;
    e = e._reactInternals;
    e: {
        if (Dn(e) !== e || e.tag !== 1)
            throw Error(C(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Re(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Re(n))
            return fm(e, n, t)
    }
    return t
}
function d0(e, t, n, r, i, o, a, s, l) {
    return e = lc(n, r, !0, e, i, o, a, s, l),
    e.context = f0(null),
    n = e.current,
    r = Te(),
    i = Xt(n),
    o = yt(r, i),
    o.callback = t ?? null,
    Gt(n, o, i),
    e.current.lanes = i,
    Mi(e, i, r),
    Oe(e, r),
    e
}
function Ia(e, t, n, r) {
    var i = t.current
      , o = Te()
      , a = Xt(i);
    return n = f0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = yt(o, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Gt(i, t, a),
    e !== null && (rt(e, i, a, o),
    Ao(e, i, a)),
    a
}
function ua(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ud(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function uc(e, t) {
    ud(e, t),
    (e = e.alternate) && ud(e, t)
}
function q1() {
    return null
}
var h0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function cc(e) {
    this._internalRoot = e
}
Va.prototype.render = cc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(C(409));
    Ia(e, t, null, null)
}
;
Va.prototype.unmount = cc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Mn(function() {
            Ia(null, e, null, null)
        }),
        t[Ct] = null
    }
}
;
function Va(e) {
    this._internalRoot = e
}
Va.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Wp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++)
            ;
        Ft.splice(n, 0, e),
        n === 0 && Kp(e)
    }
}
;
function fc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Da(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function cd() {}
function J1(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = ua(a);
                o.call(u)
            }
        }
        var a = d0(t, r, e, 0, null, !1, !1, "", cd);
        return e._reactRootContainer = a,
        e[Ct] = a.current,
        pi(e.nodeType === 8 ? e.parentNode : e),
        Mn(),
        a
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = ua(l);
            s.call(u)
        }
    }
    var l = lc(e, 0, !1, null, null, !1, !1, "", cd);
    return e._reactRootContainer = l,
    e[Ct] = l.current,
    pi(e.nodeType === 8 ? e.parentNode : e),
    Mn(function() {
        Ia(t, l, n, r)
    }),
    l
}
function Fa(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var a = o;
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var l = ua(a);
                s.call(l)
            }
        }
        Ia(t, a, e, i)
    } else
        a = J1(n, t, e, i, r);
    return ua(a)
}
Up = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Br(t.pendingLanes);
            n !== 0 && (Lu(t, n | 1),
            Oe(t, re()),
            !(z & 6) && (Sr = re() + 500,
            cn()))
        }
        break;
    case 13:
        Mn(function() {
            var r = Pt(e, 1);
            if (r !== null) {
                var i = Te();
                rt(r, e, 1, i)
            }
        }),
        uc(e, 1)
    }
}
;
Ru = function(e) {
    if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
            var n = Te();
            rt(t, e, 134217728, n)
        }
        uc(e, 134217728)
    }
}
;
$p = function(e) {
    if (e.tag === 13) {
        var t = Xt(e)
          , n = Pt(e, t);
        if (n !== null) {
            var r = Te();
            rt(n, e, t, r)
        }
        uc(e, t)
    }
}
;
Wp = function() {
    return B
}
;
Hp = function(e, t) {
    var n = B;
    try {
        return B = e,
        t()
    } finally {
        B = n
    }
}
;
al = function(e, t, n) {
    switch (t) {
    case "input":
        if (Js(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Na(r);
                    if (!i)
                        throw Error(C(90));
                    kp(r),
                    Js(r, i)
                }
            }
        }
        break;
    case "textarea":
        Pp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && sr(e, !!n.multiple, t, !1)
    }
}
;
Rp = ic;
Op = Mn;
var e2 = {
    usingClientEntryPoint: !1,
    Events: [Ii, Yn, Na, Np, Lp, ic]
}
  , Vr = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , t2 = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = _p(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || q1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uo.isDisabled && uo.supportsFiber)
        try {
            Ta = uo.inject(t2),
            ct = uo
        } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e2;
ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!fc(t))
        throw Error(C(200));
    return Z1(e, t, null, n)
}
;
ze.createRoot = function(e, t) {
    if (!fc(e))
        throw Error(C(299));
    var n = !1
      , r = ""
      , i = h0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = lc(e, 1, !1, null, null, n, !1, r, i),
    e[Ct] = t.current,
    pi(e.nodeType === 8 ? e.parentNode : e),
    new cc(t)
}
;
ze.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","),
        Error(C(268, e)));
    return e = _p(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ze.flushSync = function(e) {
    return Mn(e)
}
;
ze.hydrate = function(e, t, n) {
    if (!Da(t))
        throw Error(C(200));
    return Fa(null, e, t, !0, n)
}
;
ze.hydrateRoot = function(e, t, n) {
    if (!fc(e))
        throw Error(C(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , a = h0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = d0(t, null, e, 1, n ?? null, i, !1, o, a),
    e[Ct] = t.current,
    pi(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Va(t)
}
;
ze.render = function(e, t, n) {
    if (!Da(t))
        throw Error(C(200));
    return Fa(null, e, t, !1, n)
}
;
ze.unmountComponentAtNode = function(e) {
    if (!Da(e))
        throw Error(C(40));
    return e._reactRootContainer ? (Mn(function() {
        Fa(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ct] = null
        })
    }),
    !0) : !1
}
;
ze.unstable_batchedUpdates = ic;
ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Da(n))
        throw Error(C(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(C(38));
    return Fa(e, t, n, !1, r)
}
;
ze.version = "18.3.1-next-f1338f8080-20240426";
function p0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)
        } catch (e) {
            console.error(e)
        }
}
p0(),
pp.exports = ze;
var n2 = pp.exports
  , fd = n2;
Ks.createRoot = fd.createRoot,
Ks.hydrateRoot = fd.hydrateRoot;
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ca() {
    return ca = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ca.apply(this, arguments)
}
var $t;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)($t || ($t = {}));
const dd = "popstate";
function r2(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: o, search: a, hash: s} = r.location;
        return Fl("", {
            pathname: o,
            search: a,
            hash: s
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : v0(i)
    }
    return o2(t, n, null, e)
}
function je(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function m0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function i2() {
    return Math.random().toString(36).substr(2, 8)
}
function hd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Fl(e, t, n, r) {
    return n === void 0 && (n = null),
    ca({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? za(t) : t, {
        state: n,
        key: t && t.key || r || i2()
    })
}
function v0(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function za(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function o2(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , a = i.history
      , s = $t.Pop
      , l = null
      , u = c();
    u == null && (u = 0,
    a.replaceState(ca({}, a.state, {
        idx: u
    }), ""));
    function c() {
        return (a.state || {
            idx: null
        }).idx
    }
    function f() {
        s = $t.Pop;
        let S = c()
          , p = S == null ? null : S - u;
        u = S,
        l && l({
            action: s,
            location: y.location,
            delta: p
        })
    }
    function d(S, p) {
        s = $t.Push;
        let h = Fl(y.location, S, p);
        u = c() + 1;
        let m = hd(h, u)
          , x = y.createHref(h);
        try {
            a.pushState(m, "", x)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError")
                throw k;
            i.location.assign(x)
        }
        o && l && l({
            action: s,
            location: y.location,
            delta: 1
        })
    }
    function v(S, p) {
        s = $t.Replace;
        let h = Fl(y.location, S, p);
        u = c();
        let m = hd(h, u)
          , x = y.createHref(h);
        a.replaceState(m, "", x),
        o && l && l({
            action: s,
            location: y.location,
            delta: 0
        })
    }
    function g(S) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
          , h = typeof S == "string" ? S : v0(S);
        return h = h.replace(/ $/, "%20"),
        je(p, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,p)
    }
    let y = {
        get action() {
            return s
        },
        get location() {
            return e(i, a)
        },
        listen(S) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(dd, f),
            l = S,
            ()=>{
                i.removeEventListener(dd, f),
                l = null
            }
        },
        createHref(S) {
            return t(i, S)
        },
        createURL: g,
        encodeLocation(S) {
            let p = g(S);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: d,
        replace: v,
        go(S) {
            return a.go(S)
        }
    };
    return y
}
var pd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(pd || (pd = {}));
function a2(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? za(t) : t
      , i = w0(r.pathname || "/", n);
    if (i == null)
        return null;
    let o = g0(e);
    s2(o);
    let a = null;
    for (let s = 0; a == null && s < o.length; ++s) {
        let l = w2(i);
        a = v2(o[s], l)
    }
    return a
}
function g0(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o,a,s)=>{
        let l = {
            relativePath: s === void 0 ? o.path || "" : s,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: a,
            route: o
        };
        l.relativePath.startsWith("/") && (je(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = hr([r, l.relativePath])
          , c = n.concat(l);
        o.children && o.children.length > 0 && (je(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        g0(o.children, t, c, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: p2(u, o.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach((o,a)=>{
        var s;
        if (o.path === "" || !((s = o.path) != null && s.includes("?")))
            i(o, a);
        else
            for (let l of y0(o.path))
                i(o, a, l)
    }
    ),
    t
}
function y0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let a = y0(r.join("/"))
      , s = [];
    return s.push(...a.map(l=>l === "" ? o : [o, l].join("/"))),
    i && s.push(...a),
    s.map(l=>e.startsWith("/") && l === "" ? "/" : l)
}
function s2(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : m2(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const l2 = /^:[\w-]+$/
  , u2 = 3
  , c2 = 2
  , f2 = 1
  , d2 = 10
  , h2 = -2
  , md = e=>e === "*";
function p2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(md) && (r += h2),
    t && (r += c2),
    n.filter(i=>!md(i)).reduce((i,o)=>i + (l2.test(o) ? u2 : o === "" ? f2 : d2), r)
}
function m2(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,i)=>r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function v2(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , i = "/"
      , o = [];
    for (let a = 0; a < n.length; ++a) {
        let s = n[a]
          , l = a === n.length - 1
          , u = i === "/" ? t : t.slice(i.length) || "/"
          , c = g2({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: l
        }, u);
        if (!c)
            return null;
        Object.assign(r, c.params);
        let f = s.route;
        o.push({
            params: r,
            pathname: hr([i, c.pathname]),
            pathnameBase: x2(hr([i, c.pathnameBase])),
            route: f
        }),
        c.pathnameBase !== "/" && (i = hr([i, c.pathnameBase]))
    }
    return o
}
function g2(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = y2(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , a = o.replace(/(.)\/+$/, "$1")
      , s = i.slice(1);
    return {
        params: r.reduce((u,c,f)=>{
            let {paramName: d, isOptional: v} = c;
            if (d === "*") {
                let y = s[f] || "";
                a = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const g = s[f];
            return v && !g ? u[d] = void 0 : u[d] = (g || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: a,
        pattern: e
    }
}
function y2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    m0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a,s,l)=>(r.push({
        paramName: s,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function w2(e) {
    try {
        return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return m0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function w0(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const hr = e=>e.join("/").replace(/\/\/+/g, "/")
  , x2 = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/");
function S2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const x0 = ["post", "put", "patch", "delete"];
new Set(x0);
const k2 = ["get", ...x0];
new Set(k2);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fa() {
    return fa = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fa.apply(this, arguments)
}
const C2 = P.createContext(null)
  , P2 = P.createContext(null)
  , S0 = P.createContext(null)
  , Ba = P.createContext(null)
  , Ua = P.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , k0 = P.createContext(null);
function dc() {
    return P.useContext(Ba) != null
}
function T2() {
    return dc() || je(!1),
    P.useContext(Ba).location
}
function E2(e, t) {
    return b2(e, t)
}
function b2(e, t, n, r) {
    dc() || je(!1);
    let {navigator: i} = P.useContext(S0)
      , {matches: o} = P.useContext(Ua)
      , a = o[o.length - 1]
      , s = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = T2(), c;
    if (t) {
        var f;
        let S = typeof t == "string" ? za(t) : t;
        l === "/" || (f = S.pathname) != null && f.startsWith(l) || je(!1),
        c = S
    } else
        c = u;
    let d = c.pathname || "/"
      , v = d;
    if (l !== "/") {
        let S = l.replace(/^\//, "").split("/");
        v = "/" + d.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let g = a2(e, {
        pathname: v
    })
      , y = O2(g && g.map(S=>Object.assign({}, S, {
        params: Object.assign({}, s, S.params),
        pathname: hr([l, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
        pathnameBase: S.pathnameBase === "/" ? l : hr([l, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
    })), o, n, r);
    return t && y ? P.createElement(Ba.Provider, {
        value: {
            location: fa({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: $t.Pop
        }
    }, y) : y
}
function A2() {
    let e = I2()
      , t = S2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return P.createElement(P.Fragment, null, P.createElement("h2", null, "Unexpected Application Error!"), P.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? P.createElement("pre", {
        style: i
    }, n) : null, null)
}
const N2 = P.createElement(A2, null);
class L2 extends P.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? P.createElement(Ua.Provider, {
            value: this.props.routeContext
        }, P.createElement(k0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function R2(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = P.useContext(C2);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Ua.Provider, {
        value: t
    }, r)
}
function O2(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if ((o = n) != null && o.errors)
            e = n.matches;
        else
            return null
    }
    let a = e
      , s = (i = n) == null ? void 0 : i.errors;
    if (s != null) {
        let c = a.findIndex(f=>f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0);
        c >= 0 || je(!1),
        a = a.slice(0, Math.min(a.length, c + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < a.length; c++) {
            let f = a[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
            f.route.id) {
                let {loaderData: d, errors: v} = n
                  , g = f.route.loader && d[f.route.id] === void 0 && (!v || v[f.route.id] === void 0);
                if (f.route.lazy || g) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight((c,f,d)=>{
        let v, g = !1, y = null, S = null;
        n && (v = s && f.route.id ? s[f.route.id] : void 0,
        y = f.route.errorElement || N2,
        l && (u < 0 && d === 0 ? (g = !0,
        S = null) : u === d && (g = !0,
        S = f.route.hydrateFallbackElement || null)));
        let p = t.concat(a.slice(0, d + 1))
          , h = ()=>{
            let m;
            return v ? m = y : g ? m = S : f.route.Component ? m = P.createElement(f.route.Component, null) : f.route.element ? m = f.route.element : m = c,
            P.createElement(R2, {
                match: f,
                routeContext: {
                    outlet: c,
                    matches: p,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0) ? P.createElement(L2, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: v,
            children: h(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var zl = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(zl || {});
function j2(e) {
    let t = P.useContext(P2);
    return t || je(!1),
    t
}
function M2(e) {
    let t = P.useContext(Ua);
    return t || je(!1),
    t
}
function _2(e) {
    let t = M2()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || je(!1),
    n.route.id
}
function I2() {
    var e;
    let t = P.useContext(k0)
      , n = j2(zl.UseRouteError)
      , r = _2(zl.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function C0(e) {
    je(!1)
}
function V2(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=$t.Pop, navigator: o, static: a=!1, future: s} = e;
    dc() && je(!1);
    let l = t.replace(/^\/*/, "/")
      , u = P.useMemo(()=>({
        basename: l,
        navigator: o,
        static: a,
        future: fa({
            v7_relativeSplatPath: !1
        }, s)
    }), [l, s, o, a]);
    typeof r == "string" && (r = za(r));
    let {pathname: c="/", search: f="", hash: d="", state: v=null, key: g="default"} = r
      , y = P.useMemo(()=>{
        let S = w0(c, l);
        return S == null ? null : {
            location: {
                pathname: S,
                search: f,
                hash: d,
                state: v,
                key: g
            },
            navigationType: i
        }
    }
    , [l, c, f, d, v, g, i]);
    return y == null ? null : P.createElement(S0.Provider, {
        value: u
    }, P.createElement(Ba.Provider, {
        children: n,
        value: y
    }))
}
function D2(e) {
    let {children: t, location: n} = e;
    return E2(Bl(t), n)
}
new Promise(()=>{}
);
function Bl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return P.Children.forEach(e, (r,i)=>{
        if (!P.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === P.Fragment) {
            n.push.apply(n, Bl(r.props.children, o));
            return
        }
        r.type !== C0 && je(!1),
        !r.props.index || !r.props.children || je(!1);
        let a = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (a.children = Bl(r.props.children, o)),
        n.push(a)
    }
    ),
    n
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const F2 = "6";
try {
    window.__reactRouterVersion = F2
} catch {}
const z2 = "startTransition"
  , vd = Hg[z2];
function B2(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , o = P.useRef();
    o.current == null && (o.current = r2({
        window: i,
        v5Compat: !0
    }));
    let a = o.current
      , [s,l] = P.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = r || {}
      , c = P.useCallback(f=>{
        u && vd ? vd(()=>l(f)) : l(f)
    }
    , [l, u]);
    return P.useLayoutEffect(()=>a.listen(c), [a, c]),
    P.createElement(V2, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: a,
        future: r
    })
}
var gd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(gd || (gd = {}));
var yd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(yd || (yd = {}));
function wd(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wd(Object(n), !0).forEach(function(r) {
            se(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wd(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function da(e) {
    "@babel/helpers - typeof";
    return da = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    da(e)
}
function U2(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function $2(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function W2(e, t, n) {
    return t && $2(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function se(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function hc(e, t) {
    return K2(e) || G2(e, t) || P0(e, t) || X2()
}
function Di(e) {
    return H2(e) || Y2(e) || P0(e) || Q2()
}
function H2(e) {
    if (Array.isArray(e))
        return Ul(e)
}
function K2(e) {
    if (Array.isArray(e))
        return e
}
function Y2(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function G2(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r = [], i = !0, o = !1, a, s;
        try {
            for (n = n.call(e); !(i = (a = n.next()).done) && (r.push(a.value),
            !(t && r.length === t)); i = !0)
                ;
        } catch (l) {
            o = !0,
            s = l
        } finally {
            try {
                !i && n.return != null && n.return()
            } finally {
                if (o)
                    throw s
            }
        }
        return r
    }
}
function P0(e, t) {
    if (e) {
        if (typeof e == "string")
            return Ul(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Ul(e, t)
    }
}
function Ul(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Q2() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function X2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var xd = function() {}
  , pc = {}
  , T0 = {}
  , E0 = null
  , b0 = {
    mark: xd,
    measure: xd
};
try {
    typeof window < "u" && (pc = window),
    typeof document < "u" && (T0 = document),
    typeof MutationObserver < "u" && (E0 = MutationObserver),
    typeof performance < "u" && (b0 = performance)
} catch {}
var Z2 = pc.navigator || {}
  , Sd = Z2.userAgent
  , kd = Sd === void 0 ? "" : Sd
  , nn = pc
  , Y = T0
  , Cd = E0
  , co = b0;
nn.document;
var Rt = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", A0 = ~kd.indexOf("MSIE") || ~kd.indexOf("Trident/"), fo, ho, po, mo, vo, Et = "___FONT_AWESOME___", $l = 16, N0 = "fa", L0 = "svg-inline--fa", _n = "data-fa-i2svg", Wl = "data-fa-pseudo-element", q2 = "data-fa-pseudo-element-pending", mc = "data-prefix", vc = "data-icon", Pd = "fontawesome-i2svg", J2 = "async", ew = ["HTML", "HEAD", "STYLE", "SCRIPT"], R0 = function() {
    try {
        return !0
    } catch {
        return !1
    }
}(), H = "classic", ee = "sharp", gc = [H, ee];
function Fi(e) {
    return new Proxy(e,{
        get: function(n, r) {
            return r in n ? n[r] : n[H]
        }
    })
}
var Ci = Fi((fo = {},
se(fo, H, {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands",
    fak: "kit",
    fakd: "kit",
    "fa-kit": "kit",
    "fa-kit-duotone": "kit"
}),
se(fo, ee, {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
}),
fo))
  , Pi = Fi((ho = {},
se(ho, H, {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab",
    kit: "fak"
}),
se(ho, ee, {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
}),
ho))
  , Ti = Fi((po = {},
se(po, H, {
    fab: "fa-brands",
    fad: "fa-duotone",
    fak: "fa-kit",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
}),
se(po, ee, {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
}),
po))
  , tw = Fi((mo = {},
se(mo, H, {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-kit": "fak",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
}),
se(mo, ee, {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
}),
mo))
  , nw = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/
  , O0 = "fa-layers-text"
  , rw = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i
  , iw = Fi((vo = {},
se(vo, H, {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
}),
se(vo, ee, {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
}),
vo))
  , j0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , ow = j0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  , aw = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
  , Pn = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , Ei = new Set;
Object.keys(Pi[H]).map(Ei.add.bind(Ei));
Object.keys(Pi[ee]).map(Ei.add.bind(Ei));
var sw = [].concat(gc, Di(Ei), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Pn.GROUP, Pn.SWAP_OPACITY, Pn.PRIMARY, Pn.SECONDARY]).concat(j0.map(function(e) {
    return "".concat(e, "x")
})).concat(ow.map(function(e) {
    return "w-".concat(e)
}))
  , ei = nn.FontAwesomeConfig || {};
function lw(e) {
    var t = Y.querySelector("script[" + e + "]");
    if (t)
        return t.getAttribute(e)
}
function uw(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
if (Y && typeof Y.querySelector == "function") {
    var cw = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
    cw.forEach(function(e) {
        var t = hc(e, 2)
          , n = t[0]
          , r = t[1]
          , i = uw(lw(n));
        i != null && (ei[r] = i)
    })
}
var M0 = {
    styleDefault: "solid",
    familyDefault: "classic",
    cssPrefix: N0,
    replacementClass: L0,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
ei.familyPrefix && (ei.cssPrefix = ei.familyPrefix);
var kr = N(N({}, M0), ei);
kr.autoReplaceSvg || (kr.observeMutations = !1);
var R = {};
Object.keys(M0).forEach(function(e) {
    Object.defineProperty(R, e, {
        enumerable: !0,
        set: function(n) {
            kr[e] = n,
            ti.forEach(function(r) {
                return r(R)
            })
        },
        get: function() {
            return kr[e]
        }
    })
});
Object.defineProperty(R, "familyPrefix", {
    enumerable: !0,
    set: function(t) {
        kr.cssPrefix = t,
        ti.forEach(function(n) {
            return n(R)
        })
    },
    get: function() {
        return kr.cssPrefix
    }
});
nn.FontAwesomeConfig = R;
var ti = [];
function fw(e) {
    return ti.push(e),
    function() {
        ti.splice(ti.indexOf(e), 1)
    }
}
var Mt = $l
  , ut = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function dw(e) {
    if (!(!e || !Rt)) {
        var t = Y.createElement("style");
        t.setAttribute("type", "text/css"),
        t.innerHTML = e;
        for (var n = Y.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
            var o = n[i]
              , a = (o.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(a) > -1 && (r = o)
        }
        return Y.head.insertBefore(t, r),
        e
    }
}
var hw = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function bi() {
    for (var e = 12, t = ""; e-- > 0; )
        t += hw[Math.random() * 62 | 0];
    return t
}
function br(e) {
    for (var t = [], n = (e || []).length >>> 0; n--; )
        t[n] = e[n];
    return t
}
function yc(e) {
    return e.classList ? br(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
        return t
    })
}
function _0(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function pw(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + "".concat(n, '="').concat(_0(e[n]), '" ')
    }, "").trim()
}
function $a(e) {
    return Object.keys(e || {}).reduce(function(t, n) {
        return t + "".concat(n, ": ").concat(e[n].trim(), ";")
    }, "")
}
function wc(e) {
    return e.size !== ut.size || e.x !== ut.x || e.y !== ut.y || e.rotate !== ut.rotate || e.flipX || e.flipY
}
function mw(e) {
    var t = e.transform
      , n = e.containerWidth
      , r = e.iconWidth
      , i = {
        transform: "translate(".concat(n / 2, " 256)")
    }
      , o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") ")
      , a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
      , s = "rotate(".concat(t.rotate, " 0 0)")
      , l = {
        transform: "".concat(o, " ").concat(a, " ").concat(s)
    }
      , u = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
    };
    return {
        outer: i,
        inner: l,
        path: u
    }
}
function vw(e) {
    var t = e.transform
      , n = e.width
      , r = n === void 0 ? $l : n
      , i = e.height
      , o = i === void 0 ? $l : i
      , a = e.startCentered
      , s = a === void 0 ? !1 : a
      , l = "";
    return s && A0 ? l += "translate(".concat(t.x / Mt - r / 2, "em, ").concat(t.y / Mt - o / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / Mt, "em), calc(-50% + ").concat(t.y / Mt, "em)) ") : l += "translate(".concat(t.x / Mt, "em, ").concat(t.y / Mt, "em) "),
    l += "scale(".concat(t.size / Mt * (t.flipX ? -1 : 1), ", ").concat(t.size / Mt * (t.flipY ? -1 : 1), ") "),
    l += "rotate(".concat(t.rotate, "deg) "),
    l
}
var gw = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function I0() {
    var e = N0
      , t = L0
      , n = R.cssPrefix
      , r = R.replacementClass
      , i = gw;
    if (n !== e || r !== t) {
        var o = new RegExp("\\.".concat(e, "\\-"),"g")
          , a = new RegExp("\\--".concat(e, "\\-"),"g")
          , s = new RegExp("\\.".concat(t),"g");
        i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r))
    }
    return i
}
var Td = !1;
function Es() {
    R.autoAddCss && !Td && (dw(I0()),
    Td = !0)
}
var yw = {
    mixout: function() {
        return {
            dom: {
                css: I0,
                insertCss: Es
            }
        }
    },
    hooks: function() {
        return {
            beforeDOMElementCreation: function() {
                Es()
            },
            beforeI2svg: function() {
                Es()
            }
        }
    }
}
  , bt = nn || {};
bt[Et] || (bt[Et] = {});
bt[Et].styles || (bt[Et].styles = {});
bt[Et].hooks || (bt[Et].hooks = {});
bt[Et].shims || (bt[Et].shims = []);
var tt = bt[Et]
  , V0 = []
  , ww = function e() {
    Y.removeEventListener("DOMContentLoaded", e),
    ha = 1,
    V0.map(function(t) {
        return t()
    })
}
  , ha = !1;
Rt && (ha = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState),
ha || Y.addEventListener("DOMContentLoaded", ww));
function xw(e) {
    Rt && (ha ? setTimeout(e, 0) : V0.push(e))
}
function zi(e) {
    var t = e.tag
      , n = e.attributes
      , r = n === void 0 ? {} : n
      , i = e.children
      , o = i === void 0 ? [] : i;
    return typeof e == "string" ? _0(e) : "<".concat(t, " ").concat(pw(r), ">").concat(o.map(zi).join(""), "</").concat(t, ">")
}
function Ed(e, t, n) {
    if (e && e[t] && e[t][n])
        return {
            prefix: t,
            iconName: n,
            icon: e[t][n]
        }
}
var bs = function(t, n, r, i) {
    var o = Object.keys(t), a = o.length, s = n, l, u, c;
    for (r === void 0 ? (l = 1,
    c = t[o[0]]) : (l = 0,
    c = r); l < a; l++)
        u = o[l],
        c = s(c, t[u], u, t);
    return c
};
function Sw(e) {
    for (var t = [], n = 0, r = e.length; n < r; ) {
        var i = e.charCodeAt(n++);
        if (i >= 55296 && i <= 56319 && n < r) {
            var o = e.charCodeAt(n++);
            (o & 64512) == 56320 ? t.push(((i & 1023) << 10) + (o & 1023) + 65536) : (t.push(i),
            n--)
        } else
            t.push(i)
    }
    return t
}
function Hl(e) {
    var t = Sw(e);
    return t.length === 1 ? t[0].toString(16) : null
}
function kw(e, t) {
    var n = e.length, r = e.charCodeAt(t), i;
    return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1),
    i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r
}
function bd(e) {
    return Object.keys(e).reduce(function(t, n) {
        var r = e[n]
          , i = !!r.icon;
        return i ? t[r.iconName] = r.icon : t[n] = r,
        t
    }, {})
}
function Kl(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , r = n.skipHooks
      , i = r === void 0 ? !1 : r
      , o = bd(t);
    typeof tt.hooks.addPack == "function" && !i ? tt.hooks.addPack(e, bd(t)) : tt.styles[e] = N(N({}, tt.styles[e] || {}), o),
    e === "fas" && Kl("fa", t)
}
var go, yo, wo, er = tt.styles, Cw = tt.shims, Pw = (go = {},
se(go, H, Object.values(Ti[H])),
se(go, ee, Object.values(Ti[ee])),
go), xc = null, D0 = {}, F0 = {}, z0 = {}, B0 = {}, U0 = {}, Tw = (yo = {},
se(yo, H, Object.keys(Ci[H])),
se(yo, ee, Object.keys(Ci[ee])),
yo);
function Ew(e) {
    return ~sw.indexOf(e)
}
function bw(e, t) {
    var n = t.split("-")
      , r = n[0]
      , i = n.slice(1).join("-");
    return r === e && i !== "" && !Ew(i) ? i : null
}
var $0 = function() {
    var t = function(o) {
        return bs(er, function(a, s, l) {
            return a[l] = bs(s, o, {}),
            a
        }, {})
    };
    D0 = t(function(i, o, a) {
        if (o[3] && (i[o[3]] = a),
        o[2]) {
            var s = o[2].filter(function(l) {
                return typeof l == "number"
            });
            s.forEach(function(l) {
                i[l.toString(16)] = a
            })
        }
        return i
    }),
    F0 = t(function(i, o, a) {
        if (i[a] = a,
        o[2]) {
            var s = o[2].filter(function(l) {
                return typeof l == "string"
            });
            s.forEach(function(l) {
                i[l] = a
            })
        }
        return i
    }),
    U0 = t(function(i, o, a) {
        var s = o[2];
        return i[a] = a,
        s.forEach(function(l) {
            i[l] = a
        }),
        i
    });
    var n = "far"in er || R.autoFetchSvg
      , r = bs(Cw, function(i, o) {
        var a = o[0]
          , s = o[1]
          , l = o[2];
        return s === "far" && !n && (s = "fas"),
        typeof a == "string" && (i.names[a] = {
            prefix: s,
            iconName: l
        }),
        typeof a == "number" && (i.unicodes[a.toString(16)] = {
            prefix: s,
            iconName: l
        }),
        i
    }, {
        names: {},
        unicodes: {}
    });
    z0 = r.names,
    B0 = r.unicodes,
    xc = Wa(R.styleDefault, {
        family: R.familyDefault
    })
};
fw(function(e) {
    xc = Wa(e.styleDefault, {
        family: R.familyDefault
    })
});
$0();
function Sc(e, t) {
    return (D0[e] || {})[t]
}
function Aw(e, t) {
    return (F0[e] || {})[t]
}
function Tn(e, t) {
    return (U0[e] || {})[t]
}
function W0(e) {
    return z0[e] || {
        prefix: null,
        iconName: null
    }
}
function Nw(e) {
    var t = B0[e]
      , n = Sc("fas", e);
    return t || (n ? {
        prefix: "fas",
        iconName: n
    } : null) || {
        prefix: null,
        iconName: null
    }
}
function rn() {
    return xc
}
var kc = function() {
    return {
        prefix: null,
        iconName: null,
        rest: []
    }
};
function Wa(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = t.family
      , r = n === void 0 ? H : n
      , i = Ci[r][e]
      , o = Pi[r][e] || Pi[r][i]
      , a = e in tt.styles ? e : null;
    return o || a || null
}
var Ad = (wo = {},
se(wo, H, Object.keys(Ti[H])),
se(wo, ee, Object.keys(Ti[ee])),
wo);
function Ha(e) {
    var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, i = r === void 0 ? !1 : r, o = (t = {},
    se(t, H, "".concat(R.cssPrefix, "-").concat(H)),
    se(t, ee, "".concat(R.cssPrefix, "-").concat(ee)),
    t), a = null, s = H;
    (e.includes(o[H]) || e.some(function(u) {
        return Ad[H].includes(u)
    })) && (s = H),
    (e.includes(o[ee]) || e.some(function(u) {
        return Ad[ee].includes(u)
    })) && (s = ee);
    var l = e.reduce(function(u, c) {
        var f = bw(R.cssPrefix, c);
        if (er[c] ? (c = Pw[s].includes(c) ? tw[s][c] : c,
        a = c,
        u.prefix = c) : Tw[s].indexOf(c) > -1 ? (a = c,
        u.prefix = Wa(c, {
            family: s
        })) : f ? u.iconName = f : c !== R.replacementClass && c !== o[H] && c !== o[ee] && u.rest.push(c),
        !i && u.prefix && u.iconName) {
            var d = a === "fa" ? W0(u.iconName) : {}
              , v = Tn(u.prefix, u.iconName);
            d.prefix && (a = null),
            u.iconName = d.iconName || v || u.iconName,
            u.prefix = d.prefix || u.prefix,
            u.prefix === "far" && !er.far && er.fas && !R.autoFetchSvg && (u.prefix = "fas")
        }
        return u
    }, kc());
    return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
    !l.prefix && s === ee && (er.fass || R.autoFetchSvg) && (l.prefix = "fass",
    l.iconName = Tn(l.prefix, l.iconName) || l.iconName),
    (l.prefix === "fa" || a === "fa") && (l.prefix = rn() || "fas"),
    l
}
var Lw = function() {
    function e() {
        U2(this, e),
        this.definitions = {}
    }
    return W2(e, [{
        key: "add",
        value: function() {
            for (var n = this, r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                i[o] = arguments[o];
            var a = i.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function(s) {
                n.definitions[s] = N(N({}, n.definitions[s] || {}), a[s]),
                Kl(s, a[s]);
                var l = Ti[H][s];
                l && Kl(l, a[s]),
                $0()
            })
        }
    }, {
        key: "reset",
        value: function() {
            this.definitions = {}
        }
    }, {
        key: "_pullDefinitions",
        value: function(n, r) {
            var i = r.prefix && r.iconName && r.icon ? {
                0: r
            } : r;
            return Object.keys(i).map(function(o) {
                var a = i[o]
                  , s = a.prefix
                  , l = a.iconName
                  , u = a.icon
                  , c = u[2];
                n[s] || (n[s] = {}),
                c.length > 0 && c.forEach(function(f) {
                    typeof f == "string" && (n[s][f] = u)
                }),
                n[s][l] = u
            }),
            n
        }
    }]),
    e
}()
  , Nd = []
  , tr = {}
  , pr = {}
  , Rw = Object.keys(pr);
function Ow(e, t) {
    var n = t.mixoutsTo;
    return Nd = e,
    tr = {},
    Object.keys(pr).forEach(function(r) {
        Rw.indexOf(r) === -1 && delete pr[r]
    }),
    Nd.forEach(function(r) {
        var i = r.mixout ? r.mixout() : {};
        if (Object.keys(i).forEach(function(a) {
            typeof i[a] == "function" && (n[a] = i[a]),
            da(i[a]) === "object" && Object.keys(i[a]).forEach(function(s) {
                n[a] || (n[a] = {}),
                n[a][s] = i[a][s]
            })
        }),
        r.hooks) {
            var o = r.hooks();
            Object.keys(o).forEach(function(a) {
                tr[a] || (tr[a] = []),
                tr[a].push(o[a])
            })
        }
        r.provides && r.provides(pr)
    }),
    n
}
function Yl(e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
        r[i - 2] = arguments[i];
    var o = tr[e] || [];
    return o.forEach(function(a) {
        t = a.apply(null, [t].concat(r))
    }),
    t
}
function In(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    var i = tr[e] || [];
    i.forEach(function(o) {
        o.apply(null, n)
    })
}
function At() {
    var e = arguments[0]
      , t = Array.prototype.slice.call(arguments, 1);
    return pr[e] ? pr[e].apply(null, t) : void 0
}
function Gl(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    var t = e.iconName
      , n = e.prefix || rn();
    if (t)
        return t = Tn(n, t) || t,
        Ed(H0.definitions, n, t) || Ed(tt.styles, n, t)
}
var H0 = new Lw
  , jw = function() {
    R.autoReplaceSvg = !1,
    R.observeMutations = !1,
    In("noAuto")
}
  , Mw = {
    i2svg: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return Rt ? (In("beforeI2svg", t),
        At("pseudoElements2svg", t),
        At("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.")
    },
    watch: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , n = t.autoReplaceSvgRoot;
        R.autoReplaceSvg === !1 && (R.autoReplaceSvg = !0),
        R.observeMutations = !0,
        xw(function() {
            Iw({
                autoReplaceSvgRoot: n
            }),
            In("watch", t)
        })
    }
}
  , _w = {
    icon: function(t) {
        if (t === null)
            return null;
        if (da(t) === "object" && t.prefix && t.iconName)
            return {
                prefix: t.prefix,
                iconName: Tn(t.prefix, t.iconName) || t.iconName
            };
        if (Array.isArray(t) && t.length === 2) {
            var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1]
              , r = Wa(t[0]);
            return {
                prefix: r,
                iconName: Tn(r, n) || n
            }
        }
        if (typeof t == "string" && (t.indexOf("".concat(R.cssPrefix, "-")) > -1 || t.match(nw))) {
            var i = Ha(t.split(" "), {
                skipLookups: !0
            });
            return {
                prefix: i.prefix || rn(),
                iconName: Tn(i.prefix, i.iconName) || i.iconName
            }
        }
        if (typeof t == "string") {
            var o = rn();
            return {
                prefix: o,
                iconName: Tn(o, t) || t
            }
        }
    }
}
  , Ue = {
    noAuto: jw,
    config: R,
    dom: Mw,
    parse: _w,
    library: H0,
    findIconDefinition: Gl,
    toHtml: zi
}
  , Iw = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , n = t.autoReplaceSvgRoot
      , r = n === void 0 ? Y : n;
    (Object.keys(tt.styles).length > 0 || R.autoFetchSvg) && Rt && R.autoReplaceSvg && Ue.dom.i2svg({
        node: r
    })
};
function Ka(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }),
    Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map(function(r) {
                return zi(r)
            })
        }
    }),
    Object.defineProperty(e, "node", {
        get: function() {
            if (Rt) {
                var r = Y.createElement("div");
                return r.innerHTML = e.html,
                r.children
            }
        }
    }),
    e
}
function Vw(e) {
    var t = e.children
      , n = e.main
      , r = e.mask
      , i = e.attributes
      , o = e.styles
      , a = e.transform;
    if (wc(a) && n.found && !r.found) {
        var s = n.width
          , l = n.height
          , u = {
            x: s / l / 2,
            y: .5
        };
        i.style = $a(N(N({}, o), {}, {
            "transform-origin": "".concat(u.x + a.x / 16, "em ").concat(u.y + a.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: i,
        children: t
    }]
}
function Dw(e) {
    var t = e.prefix
      , n = e.iconName
      , r = e.children
      , i = e.attributes
      , o = e.symbol
      , a = o === !0 ? "".concat(t, "-").concat(R.cssPrefix, "-").concat(n) : o;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: N(N({}, i), {}, {
                id: a
            }),
            children: r
        }]
    }]
}
function Cc(e) {
    var t = e.icons
      , n = t.main
      , r = t.mask
      , i = e.prefix
      , o = e.iconName
      , a = e.transform
      , s = e.symbol
      , l = e.title
      , u = e.maskId
      , c = e.titleId
      , f = e.extra
      , d = e.watchable
      , v = d === void 0 ? !1 : d
      , g = r.found ? r : n
      , y = g.width
      , S = g.height
      , p = i === "fak"
      , h = [R.replacementClass, o ? "".concat(R.cssPrefix, "-").concat(o) : ""].filter(function(M) {
        return f.classes.indexOf(M) === -1
    }).filter(function(M) {
        return M !== "" || !!M
    }).concat(f.classes).join(" ")
      , m = {
        children: [],
        attributes: N(N({}, f.attributes), {}, {
            "data-prefix": i,
            "data-icon": o,
            class: h,
            role: f.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(y, " ").concat(S)
        })
    }
      , x = p && !~f.classes.indexOf("fa-fw") ? {
        width: "".concat(y / S * 16 * .0625, "em")
    } : {};
    v && (m.attributes[_n] = ""),
    l && (m.children.push({
        tag: "title",
        attributes: {
            id: m.attributes["aria-labelledby"] || "title-".concat(c || bi())
        },
        children: [l]
    }),
    delete m.attributes.title);
    var k = N(N({}, m), {}, {
        prefix: i,
        iconName: o,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: s,
        styles: N(N({}, x), f.styles)
    })
      , E = r.found && n.found ? At("generateAbstractMask", k) || {
        children: [],
        attributes: {}
    } : At("generateAbstractIcon", k) || {
        children: [],
        attributes: {}
    }
      , b = E.children
      , T = E.attributes;
    return k.children = b,
    k.attributes = T,
    s ? Dw(k) : Vw(k)
}
function Ld(e) {
    var t = e.content
      , n = e.width
      , r = e.height
      , i = e.transform
      , o = e.title
      , a = e.extra
      , s = e.watchable
      , l = s === void 0 ? !1 : s
      , u = N(N(N({}, a.attributes), o ? {
        title: o
    } : {}), {}, {
        class: a.classes.join(" ")
    });
    l && (u[_n] = "");
    var c = N({}, a.styles);
    wc(i) && (c.transform = vw({
        transform: i,
        startCentered: !0,
        width: n,
        height: r
    }),
    c["-webkit-transform"] = c.transform);
    var f = $a(c);
    f.length > 0 && (u.style = f);
    var d = [];
    return d.push({
        tag: "span",
        attributes: u,
        children: [t]
    }),
    o && d.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [o]
    }),
    d
}
function Fw(e) {
    var t = e.content
      , n = e.title
      , r = e.extra
      , i = N(N(N({}, r.attributes), n ? {
        title: n
    } : {}), {}, {
        class: r.classes.join(" ")
    })
      , o = $a(r.styles);
    o.length > 0 && (i.style = o);
    var a = [];
    return a.push({
        tag: "span",
        attributes: i,
        children: [t]
    }),
    n && a.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [n]
    }),
    a
}
var As = tt.styles;
function Ql(e) {
    var t = e[0]
      , n = e[1]
      , r = e.slice(4)
      , i = hc(r, 1)
      , o = i[0]
      , a = null;
    return Array.isArray(o) ? a = {
        tag: "g",
        attributes: {
            class: "".concat(R.cssPrefix, "-").concat(Pn.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(R.cssPrefix, "-").concat(Pn.SECONDARY),
                fill: "currentColor",
                d: o[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(R.cssPrefix, "-").concat(Pn.PRIMARY),
                fill: "currentColor",
                d: o[1]
            }
        }]
    } : a = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: o
        }
    },
    {
        found: !0,
        width: t,
        height: n,
        icon: a
    }
}
var zw = {
    found: !1,
    width: 512,
    height: 512
};
function Bw(e, t) {
    !R0 && !R.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}
function Xl(e, t) {
    var n = t;
    return t === "fa" && R.styleDefault !== null && (t = rn()),
    new Promise(function(r, i) {
        if (At("missingIconAbstract"),
        n === "fa") {
            var o = W0(e) || {};
            e = o.iconName || e,
            t = o.prefix || t
        }
        if (e && t && As[t] && As[t][e]) {
            var a = As[t][e];
            return r(Ql(a))
        }
        Bw(e, t),
        r(N(N({}, zw), {}, {
            icon: R.showMissingIcons && e ? At("missingIconAbstract") || {} : {}
        }))
    }
    )
}
var Rd = function() {}
  , Zl = R.measurePerformance && co && co.mark && co.measure ? co : {
    mark: Rd,
    measure: Rd
}
  , $r = 'FA "6.5.2"'
  , Uw = function(t) {
    return Zl.mark("".concat($r, " ").concat(t, " begins")),
    function() {
        return K0(t)
    }
}
  , K0 = function(t) {
    Zl.mark("".concat($r, " ").concat(t, " ends")),
    Zl.measure("".concat($r, " ").concat(t), "".concat($r, " ").concat(t, " begins"), "".concat($r, " ").concat(t, " ends"))
}
  , Pc = {
    begin: Uw,
    end: K0
}
  , _o = function() {};
function Od(e) {
    var t = e.getAttribute ? e.getAttribute(_n) : null;
    return typeof t == "string"
}
function $w(e) {
    var t = e.getAttribute ? e.getAttribute(mc) : null
      , n = e.getAttribute ? e.getAttribute(vc) : null;
    return t && n
}
function Ww(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(R.replacementClass)
}
function Hw() {
    if (R.autoReplaceSvg === !0)
        return Io.replace;
    var e = Io[R.autoReplaceSvg];
    return e || Io.replace
}
function Kw(e) {
    return Y.createElementNS("http://www.w3.org/2000/svg", e)
}
function Yw(e) {
    return Y.createElement(e)
}
function Y0(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = t.ceFn
      , r = n === void 0 ? e.tag === "svg" ? Kw : Yw : n;
    if (typeof e == "string")
        return Y.createTextNode(e);
    var i = r(e.tag);
    Object.keys(e.attributes || []).forEach(function(a) {
        i.setAttribute(a, e.attributes[a])
    });
    var o = e.children || [];
    return o.forEach(function(a) {
        i.appendChild(Y0(a, {
            ceFn: r
        }))
    }),
    i
}
function Gw(e) {
    var t = " ".concat(e.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "),
    t
}
var Io = {
    replace: function(t) {
        var n = t[0];
        if (n.parentNode)
            if (t[1].forEach(function(i) {
                n.parentNode.insertBefore(Y0(i), n)
            }),
            n.getAttribute(_n) === null && R.keepOriginalSource) {
                var r = Y.createComment(Gw(n));
                n.parentNode.replaceChild(r, n)
            } else
                n.remove()
    },
    nest: function(t) {
        var n = t[0]
          , r = t[1];
        if (~yc(n).indexOf(R.replacementClass))
            return Io.replace(t);
        var i = new RegExp("".concat(R.cssPrefix, "-.*"));
        if (delete r[0].attributes.id,
        r[0].attributes.class) {
            var o = r[0].attributes.class.split(" ").reduce(function(s, l) {
                return l === R.replacementClass || l.match(i) ? s.toSvg.push(l) : s.toNode.push(l),
                s
            }, {
                toNode: [],
                toSvg: []
            });
            r[0].attributes.class = o.toSvg.join(" "),
            o.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", o.toNode.join(" "))
        }
        var a = r.map(function(s) {
            return zi(s)
        }).join(`
`);
        n.setAttribute(_n, ""),
        n.innerHTML = a
    }
};
function jd(e) {
    e()
}
function G0(e, t) {
    var n = typeof t == "function" ? t : _o;
    if (e.length === 0)
        n();
    else {
        var r = jd;
        R.mutateApproach === J2 && (r = nn.requestAnimationFrame || jd),
        r(function() {
            var i = Hw()
              , o = Pc.begin("mutate");
            e.map(i),
            o(),
            n()
        })
    }
}
var Tc = !1;
function Q0() {
    Tc = !0
}
function ql() {
    Tc = !1
}
var pa = null;
function Md(e) {
    if (Cd && R.observeMutations) {
        var t = e.treeCallback
          , n = t === void 0 ? _o : t
          , r = e.nodeCallback
          , i = r === void 0 ? _o : r
          , o = e.pseudoElementsCallback
          , a = o === void 0 ? _o : o
          , s = e.observeMutationsRoot
          , l = s === void 0 ? Y : s;
        pa = new Cd(function(u) {
            if (!Tc) {
                var c = rn();
                br(u).forEach(function(f) {
                    if (f.type === "childList" && f.addedNodes.length > 0 && !Od(f.addedNodes[0]) && (R.searchPseudoElements && a(f.target),
                    n(f.target)),
                    f.type === "attributes" && f.target.parentNode && R.searchPseudoElements && a(f.target.parentNode),
                    f.type === "attributes" && Od(f.target) && ~aw.indexOf(f.attributeName))
                        if (f.attributeName === "class" && $w(f.target)) {
                            var d = Ha(yc(f.target))
                              , v = d.prefix
                              , g = d.iconName;
                            f.target.setAttribute(mc, v || c),
                            g && f.target.setAttribute(vc, g)
                        } else
                            Ww(f.target) && i(f.target)
                })
            }
        }
        ),
        Rt && pa.observe(l, {
            childList: !0,
            attributes: !0,
            characterData: !0,
            subtree: !0
        })
    }
}
function Qw() {
    pa && pa.disconnect()
}
function Xw(e) {
    var t = e.getAttribute("style")
      , n = [];
    return t && (n = t.split(";").reduce(function(r, i) {
        var o = i.split(":")
          , a = o[0]
          , s = o.slice(1);
        return a && s.length > 0 && (r[a] = s.join(":").trim()),
        r
    }, {})),
    n
}
function Zw(e) {
    var t = e.getAttribute("data-prefix")
      , n = e.getAttribute("data-icon")
      , r = e.innerText !== void 0 ? e.innerText.trim() : ""
      , i = Ha(yc(e));
    return i.prefix || (i.prefix = rn()),
    t && n && (i.prefix = t,
    i.iconName = n),
    i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Aw(i.prefix, e.innerText) || Sc(i.prefix, Hl(e.innerText))),
    !i.iconName && R.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)),
    i
}
function qw(e) {
    var t = br(e.attributes).reduce(function(i, o) {
        return i.name !== "class" && i.name !== "style" && (i[o.name] = o.value),
        i
    }, {})
      , n = e.getAttribute("title")
      , r = e.getAttribute("data-fa-title-id");
    return R.autoA11y && (n ? t["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(r || bi()) : (t["aria-hidden"] = "true",
    t.focusable = "false")),
    t
}
function Jw() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: ut,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}
function _d(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
    }
      , n = Zw(e)
      , r = n.iconName
      , i = n.prefix
      , o = n.rest
      , a = qw(e)
      , s = Yl("parseNodeAttributes", {}, e)
      , l = t.styleParser ? Xw(e) : [];
    return N({
        iconName: r,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: i,
        transform: ut,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: o,
            styles: l,
            attributes: a
        }
    }, s)
}
var ex = tt.styles;
function X0(e) {
    var t = R.autoReplaceSvg === "nest" ? _d(e, {
        styleParser: !1
    }) : _d(e);
    return ~t.extra.classes.indexOf(O0) ? At("generateLayersText", e, t) : At("generateSvgReplacementMutation", e, t)
}
var on = new Set;
gc.map(function(e) {
    on.add("fa-".concat(e))
});
Object.keys(Ci[H]).map(on.add.bind(on));
Object.keys(Ci[ee]).map(on.add.bind(on));
on = Di(on);
function Id(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!Rt)
        return Promise.resolve();
    var n = Y.documentElement.classList
      , r = function(f) {
        return n.add("".concat(Pd, "-").concat(f))
    }
      , i = function(f) {
        return n.remove("".concat(Pd, "-").concat(f))
    }
      , o = R.autoFetchSvg ? on : gc.map(function(c) {
        return "fa-".concat(c)
    }).concat(Object.keys(ex));
    o.includes("fa") || o.push("fa");
    var a = [".".concat(O0, ":not([").concat(_n, "])")].concat(o.map(function(c) {
        return ".".concat(c, ":not([").concat(_n, "])")
    })).join(", ");
    if (a.length === 0)
        return Promise.resolve();
    var s = [];
    try {
        s = br(e.querySelectorAll(a))
    } catch {}
    if (s.length > 0)
        r("pending"),
        i("complete");
    else
        return Promise.resolve();
    var l = Pc.begin("onTree")
      , u = s.reduce(function(c, f) {
        try {
            var d = X0(f);
            d && c.push(d)
        } catch (v) {
            R0 || v.name === "MissingIcon" && console.error(v)
        }
        return c
    }, []);
    return new Promise(function(c, f) {
        Promise.all(u).then(function(d) {
            G0(d, function() {
                r("active"),
                r("complete"),
                i("pending"),
                typeof t == "function" && t(),
                l(),
                c()
            })
        }).catch(function(d) {
            l(),
            f(d)
        })
    }
    )
}
function tx(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    X0(e).then(function(n) {
        n && G0([n], t)
    })
}
function nx(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , r = (t || {}).icon ? t : Gl(t || {})
          , i = n.mask;
        return i && (i = (i || {}).icon ? i : Gl(i || {})),
        e(r, N(N({}, n), {}, {
            mask: i
        }))
    }
}
var rx = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = n.transform
      , i = r === void 0 ? ut : r
      , o = n.symbol
      , a = o === void 0 ? !1 : o
      , s = n.mask
      , l = s === void 0 ? null : s
      , u = n.maskId
      , c = u === void 0 ? null : u
      , f = n.title
      , d = f === void 0 ? null : f
      , v = n.titleId
      , g = v === void 0 ? null : v
      , y = n.classes
      , S = y === void 0 ? [] : y
      , p = n.attributes
      , h = p === void 0 ? {} : p
      , m = n.styles
      , x = m === void 0 ? {} : m;
    if (t) {
        var k = t.prefix
          , E = t.iconName
          , b = t.icon;
        return Ka(N({
            type: "icon"
        }, t), function() {
            return In("beforeDOMElementCreation", {
                iconDefinition: t,
                params: n
            }),
            R.autoA11y && (d ? h["aria-labelledby"] = "".concat(R.replacementClass, "-title-").concat(g || bi()) : (h["aria-hidden"] = "true",
            h.focusable = "false")),
            Cc({
                icons: {
                    main: Ql(b),
                    mask: l ? Ql(l.icon) : {
                        found: !1,
                        width: null,
                        height: null,
                        icon: {}
                    }
                },
                prefix: k,
                iconName: E,
                transform: N(N({}, ut), i),
                symbol: a,
                title: d,
                maskId: c,
                titleId: g,
                extra: {
                    attributes: h,
                    styles: x,
                    classes: S
                }
            })
        })
    }
}
  , ix = {
    mixout: function() {
        return {
            icon: nx(rx)
        }
    },
    hooks: function() {
        return {
            mutationObserverCallbacks: function(n) {
                return n.treeCallback = Id,
                n.nodeCallback = tx,
                n
            }
        }
    },
    provides: function(t) {
        t.i2svg = function(n) {
            var r = n.node
              , i = r === void 0 ? Y : r
              , o = n.callback
              , a = o === void 0 ? function() {}
            : o;
            return Id(i, a)
        }
        ,
        t.generateSvgReplacementMutation = function(n, r) {
            var i = r.iconName
              , o = r.title
              , a = r.titleId
              , s = r.prefix
              , l = r.transform
              , u = r.symbol
              , c = r.mask
              , f = r.maskId
              , d = r.extra;
            return new Promise(function(v, g) {
                Promise.all([Xl(i, s), c.iconName ? Xl(c.iconName, c.prefix) : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {}
                })]).then(function(y) {
                    var S = hc(y, 2)
                      , p = S[0]
                      , h = S[1];
                    v([n, Cc({
                        icons: {
                            main: p,
                            mask: h
                        },
                        prefix: s,
                        iconName: i,
                        transform: l,
                        symbol: u,
                        maskId: f,
                        title: o,
                        titleId: a,
                        extra: d,
                        watchable: !0
                    })])
                }).catch(g)
            }
            )
        }
        ,
        t.generateAbstractIcon = function(n) {
            var r = n.children
              , i = n.attributes
              , o = n.main
              , a = n.transform
              , s = n.styles
              , l = $a(s);
            l.length > 0 && (i.style = l);
            var u;
            return wc(a) && (u = At("generateAbstractTransformGrouping", {
                main: o,
                transform: a,
                containerWidth: o.width,
                iconWidth: o.width
            })),
            r.push(u || o.icon),
            {
                children: r,
                attributes: i
            }
        }
    }
}
  , ox = {
    mixout: function() {
        return {
            layer: function(n) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.classes
                  , o = i === void 0 ? [] : i;
                return Ka({
                    type: "layer"
                }, function() {
                    In("beforeDOMElementCreation", {
                        assembler: n,
                        params: r
                    });
                    var a = [];
                    return n(function(s) {
                        Array.isArray(s) ? s.map(function(l) {
                            a = a.concat(l.abstract)
                        }) : a = a.concat(s.abstract)
                    }),
                    [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(R.cssPrefix, "-layers")].concat(Di(o)).join(" ")
                        },
                        children: a
                    }]
                })
            }
        }
    }
}
  , ax = {
    mixout: function() {
        return {
            counter: function(n) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.title
                  , o = i === void 0 ? null : i
                  , a = r.classes
                  , s = a === void 0 ? [] : a
                  , l = r.attributes
                  , u = l === void 0 ? {} : l
                  , c = r.styles
                  , f = c === void 0 ? {} : c;
                return Ka({
                    type: "counter",
                    content: n
                }, function() {
                    return In("beforeDOMElementCreation", {
                        content: n,
                        params: r
                    }),
                    Fw({
                        content: n.toString(),
                        title: o,
                        extra: {
                            attributes: u,
                            styles: f,
                            classes: ["".concat(R.cssPrefix, "-layers-counter")].concat(Di(s))
                        }
                    })
                })
            }
        }
    }
}
  , sx = {
    mixout: function() {
        return {
            text: function(n) {
                var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                  , i = r.transform
                  , o = i === void 0 ? ut : i
                  , a = r.title
                  , s = a === void 0 ? null : a
                  , l = r.classes
                  , u = l === void 0 ? [] : l
                  , c = r.attributes
                  , f = c === void 0 ? {} : c
                  , d = r.styles
                  , v = d === void 0 ? {} : d;
                return Ka({
                    type: "text",
                    content: n
                }, function() {
                    return In("beforeDOMElementCreation", {
                        content: n,
                        params: r
                    }),
                    Ld({
                        content: n,
                        transform: N(N({}, ut), o),
                        title: s,
                        extra: {
                            attributes: f,
                            styles: v,
                            classes: ["".concat(R.cssPrefix, "-layers-text")].concat(Di(u))
                        }
                    })
                })
            }
        }
    },
    provides: function(t) {
        t.generateLayersText = function(n, r) {
            var i = r.title
              , o = r.transform
              , a = r.extra
              , s = null
              , l = null;
            if (A0) {
                var u = parseInt(getComputedStyle(n).fontSize, 10)
                  , c = n.getBoundingClientRect();
                s = c.width / u,
                l = c.height / u
            }
            return R.autoA11y && !i && (a.attributes["aria-hidden"] = "true"),
            Promise.resolve([n, Ld({
                content: n.innerHTML,
                width: s,
                height: l,
                transform: o,
                title: i,
                extra: a,
                watchable: !0
            })])
        }
    }
}
  , lx = new RegExp('"',"ug")
  , Vd = [1105920, 1112319];
function ux(e) {
    var t = e.replace(lx, "")
      , n = kw(t, 0)
      , r = n >= Vd[0] && n <= Vd[1]
      , i = t.length === 2 ? t[0] === t[1] : !1;
    return {
        value: Hl(i ? t[0] : t),
        isSecondary: r || i
    }
}
function Dd(e, t) {
    var n = "".concat(q2).concat(t.replace(":", "-"));
    return new Promise(function(r, i) {
        if (e.getAttribute(n) !== null)
            return r();
        var o = br(e.children)
          , a = o.filter(function(b) {
            return b.getAttribute(Wl) === t
        })[0]
          , s = nn.getComputedStyle(e, t)
          , l = s.getPropertyValue("font-family").match(rw)
          , u = s.getPropertyValue("font-weight")
          , c = s.getPropertyValue("content");
        if (a && !l)
            return e.removeChild(a),
            r();
        if (l && c !== "none" && c !== "") {
            var f = s.getPropertyValue("content")
              , d = ~["Sharp"].indexOf(l[2]) ? ee : H
              , v = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? Pi[d][l[2].toLowerCase()] : iw[d][u]
              , g = ux(f)
              , y = g.value
              , S = g.isSecondary
              , p = l[0].startsWith("FontAwesome")
              , h = Sc(v, y)
              , m = h;
            if (p) {
                var x = Nw(y);
                x.iconName && x.prefix && (h = x.iconName,
                v = x.prefix)
            }
            if (h && !S && (!a || a.getAttribute(mc) !== v || a.getAttribute(vc) !== m)) {
                e.setAttribute(n, m),
                a && e.removeChild(a);
                var k = Jw()
                  , E = k.extra;
                E.attributes[Wl] = t,
                Xl(h, v).then(function(b) {
                    var T = Cc(N(N({}, k), {}, {
                        icons: {
                            main: b,
                            mask: kc()
                        },
                        prefix: v,
                        iconName: m,
                        extra: E,
                        watchable: !0
                    }))
                      , M = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
                    t === "::before" ? e.insertBefore(M, e.firstChild) : e.appendChild(M),
                    M.outerHTML = T.map(function(O) {
                        return zi(O)
                    }).join(`
`),
                    e.removeAttribute(n),
                    r()
                }).catch(i)
            } else
                r()
        } else
            r()
    }
    )
}
function cx(e) {
    return Promise.all([Dd(e, "::before"), Dd(e, "::after")])
}
function fx(e) {
    return e.parentNode !== document.head && !~ew.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Wl) && (!e.parentNode || e.parentNode.tagName !== "svg")
}
function Fd(e) {
    if (Rt)
        return new Promise(function(t, n) {
            var r = br(e.querySelectorAll("*")).filter(fx).map(cx)
              , i = Pc.begin("searchPseudoElements");
            Q0(),
            Promise.all(r).then(function() {
                i(),
                ql(),
                t()
            }).catch(function() {
                i(),
                ql(),
                n()
            })
        }
        )
}
var dx = {
    hooks: function() {
        return {
            mutationObserverCallbacks: function(n) {
                return n.pseudoElementsCallback = Fd,
                n
            }
        }
    },
    provides: function(t) {
        t.pseudoElements2svg = function(n) {
            var r = n.node
              , i = r === void 0 ? Y : r;
            R.searchPseudoElements && Fd(i)
        }
    }
}
  , zd = !1
  , hx = {
    mixout: function() {
        return {
            dom: {
                unwatch: function() {
                    Q0(),
                    zd = !0
                }
            }
        }
    },
    hooks: function() {
        return {
            bootstrap: function() {
                Md(Yl("mutationObserverCallbacks", {}))
            },
            noAuto: function() {
                Qw()
            },
            watch: function(n) {
                var r = n.observeMutationsRoot;
                zd ? ql() : Md(Yl("mutationObserverCallbacks", {
                    observeMutationsRoot: r
                }))
            }
        }
    }
}
  , Bd = function(t) {
    var n = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
    };
    return t.toLowerCase().split(" ").reduce(function(r, i) {
        var o = i.toLowerCase().split("-")
          , a = o[0]
          , s = o.slice(1).join("-");
        if (a && s === "h")
            return r.flipX = !0,
            r;
        if (a && s === "v")
            return r.flipY = !0,
            r;
        if (s = parseFloat(s),
        isNaN(s))
            return r;
        switch (a) {
        case "grow":
            r.size = r.size + s;
            break;
        case "shrink":
            r.size = r.size - s;
            break;
        case "left":
            r.x = r.x - s;
            break;
        case "right":
            r.x = r.x + s;
            break;
        case "up":
            r.y = r.y - s;
            break;
        case "down":
            r.y = r.y + s;
            break;
        case "rotate":
            r.rotate = r.rotate + s;
            break
        }
        return r
    }, n)
}
  , px = {
    mixout: function() {
        return {
            parse: {
                transform: function(n) {
                    return Bd(n)
                }
            }
        }
    },
    hooks: function() {
        return {
            parseNodeAttributes: function(n, r) {
                var i = r.getAttribute("data-fa-transform");
                return i && (n.transform = Bd(i)),
                n
            }
        }
    },
    provides: function(t) {
        t.generateAbstractTransformGrouping = function(n) {
            var r = n.main
              , i = n.transform
              , o = n.containerWidth
              , a = n.iconWidth
              , s = {
                transform: "translate(".concat(o / 2, " 256)")
            }
              , l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") ")
              , u = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") ")
              , c = "rotate(".concat(i.rotate, " 0 0)")
              , f = {
                transform: "".concat(l, " ").concat(u, " ").concat(c)
            }
              , d = {
                transform: "translate(".concat(a / 2 * -1, " -256)")
            }
              , v = {
                outer: s,
                inner: f,
                path: d
            };
            return {
                tag: "g",
                attributes: N({}, v.outer),
                children: [{
                    tag: "g",
                    attributes: N({}, v.inner),
                    children: [{
                        tag: r.icon.tag,
                        children: r.icon.children,
                        attributes: N(N({}, r.icon.attributes), v.path)
                    }]
                }]
            }
        }
    }
}
  , Ns = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function Ud(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
    e
}
function mx(e) {
    return e.tag === "g" ? e.children : [e]
}
var vx = {
    hooks: function() {
        return {
            parseNodeAttributes: function(n, r) {
                var i = r.getAttribute("data-fa-mask")
                  , o = i ? Ha(i.split(" ").map(function(a) {
                    return a.trim()
                })) : kc();
                return o.prefix || (o.prefix = rn()),
                n.mask = o,
                n.maskId = r.getAttribute("data-fa-mask-id"),
                n
            }
        }
    },
    provides: function(t) {
        t.generateAbstractMask = function(n) {
            var r = n.children
              , i = n.attributes
              , o = n.main
              , a = n.mask
              , s = n.maskId
              , l = n.transform
              , u = o.width
              , c = o.icon
              , f = a.width
              , d = a.icon
              , v = mw({
                transform: l,
                containerWidth: f,
                iconWidth: u
            })
              , g = {
                tag: "rect",
                attributes: N(N({}, Ns), {}, {
                    fill: "white"
                })
            }
              , y = c.children ? {
                children: c.children.map(Ud)
            } : {}
              , S = {
                tag: "g",
                attributes: N({}, v.inner),
                children: [Ud(N({
                    tag: c.tag,
                    attributes: N(N({}, c.attributes), v.path)
                }, y))]
            }
              , p = {
                tag: "g",
                attributes: N({}, v.outer),
                children: [S]
            }
              , h = "mask-".concat(s || bi())
              , m = "clip-".concat(s || bi())
              , x = {
                tag: "mask",
                attributes: N(N({}, Ns), {}, {
                    id: h,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [g, p]
            }
              , k = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: m
                    },
                    children: mx(d)
                }, x]
            };
            return r.push(k, {
                tag: "rect",
                attributes: N({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(m, ")"),
                    mask: "url(#".concat(h, ")")
                }, Ns)
            }),
            {
                children: r,
                attributes: i
            }
        }
    }
}
  , gx = {
    provides: function(t) {
        var n = !1;
        nn.matchMedia && (n = nn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        t.missingIconAbstract = function() {
            var r = []
              , i = {
                fill: "currentColor"
            }
              , o = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            };
            r.push({
                tag: "path",
                attributes: N(N({}, i), {}, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            });
            var a = N(N({}, o), {}, {
                attributeName: "opacity"
            })
              , s = {
                tag: "circle",
                attributes: N(N({}, i), {}, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: []
            };
            return n || s.children.push({
                tag: "animate",
                attributes: N(N({}, o), {}, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: N(N({}, a), {}, {
                    values: "1;0;1;1;0;1;"
                })
            }),
            r.push(s),
            r.push({
                tag: "path",
                attributes: N(N({}, i), {}, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: n ? [] : [{
                    tag: "animate",
                    attributes: N(N({}, a), {}, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }),
            n || r.push({
                tag: "path",
                attributes: N(N({}, i), {}, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: N(N({}, a), {}, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }),
            {
                tag: "g",
                attributes: {
                    class: "missing"
                },
                children: r
            }
        }
    }
}
  , yx = {
    hooks: function() {
        return {
            parseNodeAttributes: function(n, r) {
                var i = r.getAttribute("data-fa-symbol")
                  , o = i === null ? !1 : i === "" ? !0 : i;
                return n.symbol = o,
                n
            }
        }
    }
}
  , wx = [yw, ix, ox, ax, sx, dx, hx, px, vx, gx, yx];
Ow(wx, {
    mixoutsTo: Ue
});
Ue.noAuto;
Ue.config;
Ue.library;
Ue.dom;
var Jl = Ue.parse;
Ue.findIconDefinition;
Ue.toHtml;
var xx = Ue.icon;
Ue.layer;
Ue.text;
Ue.counter;
var Z0 = {
    exports: {}
}
  , Sx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , kx = Sx
  , Cx = kx;
function q0() {}
function J0() {}
J0.resetWarningCache = q0;
var Px = function() {
    function e(r, i, o, a, s, l) {
        if (l !== Cx) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: J0,
        resetWarningCache: q0
    };
    return n.PropTypes = n,
    n
};
Z0.exports = Px();
var Tx = Z0.exports;
const V = np(Tx);
function $d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function st(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? $d(Object(n), !0).forEach(function(r) {
            nr(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $d(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function ma(e) {
    "@babel/helpers - typeof";
    return ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ma(e)
}
function nr(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Ex(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function bx(e, t) {
    if (e == null)
        return {};
    var n = Ex(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function eu(e) {
    return Ax(e) || Nx(e) || Lx(e) || Rx()
}
function Ax(e) {
    if (Array.isArray(e))
        return tu(e)
}
function Nx(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function Lx(e, t) {
    if (e) {
        if (typeof e == "string")
            return tu(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return tu(e, t)
    }
}
function tu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Rx() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Ox(e) {
    var t, n = e.beat, r = e.fade, i = e.beatFade, o = e.bounce, a = e.shake, s = e.flash, l = e.spin, u = e.spinPulse, c = e.spinReverse, f = e.pulse, d = e.fixedWidth, v = e.inverse, g = e.border, y = e.listItem, S = e.flip, p = e.size, h = e.rotation, m = e.pull, x = (t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": o,
        "fa-shake": a,
        "fa-flash": s,
        "fa-spin": l,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": f,
        "fa-fw": d,
        "fa-inverse": v,
        "fa-border": g,
        "fa-li": y,
        "fa-flip": S === !0,
        "fa-flip-horizontal": S === "horizontal" || S === "both",
        "fa-flip-vertical": S === "vertical" || S === "both"
    },
    nr(t, "fa-".concat(p), typeof p < "u" && p !== null),
    nr(t, "fa-rotate-".concat(h), typeof h < "u" && h !== null && h !== 0),
    nr(t, "fa-pull-".concat(m), typeof m < "u" && m !== null),
    nr(t, "fa-swap-opacity", e.swapOpacity),
    t);
    return Object.keys(x).map(function(k) {
        return x[k] ? k : null
    }).filter(function(k) {
        return k
    })
}
function jx(e) {
    return e = e - 0,
    e === e
}
function ev(e) {
    return jx(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
        return n ? n.toUpperCase() : ""
    }),
    e.substr(0, 1).toLowerCase() + e.substr(1))
}
var Mx = ["style"];
function _x(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function Ix(e) {
    return e.split(";").map(function(t) {
        return t.trim()
    }).filter(function(t) {
        return t
    }).reduce(function(t, n) {
        var r = n.indexOf(":")
          , i = ev(n.slice(0, r))
          , o = n.slice(r + 1).trim();
        return i.startsWith("webkit") ? t[_x(i)] = o : t[i] = o,
        t
    }, {})
}
function tv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof t == "string")
        return t;
    var r = (t.children || []).map(function(l) {
        return tv(e, l)
    })
      , i = Object.keys(t.attributes || {}).reduce(function(l, u) {
        var c = t.attributes[u];
        switch (u) {
        case "class":
            l.attrs.className = c,
            delete t.attributes.class;
            break;
        case "style":
            l.attrs.style = Ix(c);
            break;
        default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? l.attrs[u.toLowerCase()] = c : l.attrs[ev(u)] = c
        }
        return l
    }, {
        attrs: {}
    })
      , o = n.style
      , a = o === void 0 ? {} : o
      , s = bx(n, Mx);
    return i.attrs.style = st(st({}, i.attrs.style), a),
    e.apply(void 0, [t.tag, st(st({}, i.attrs), s)].concat(eu(r)))
}
var nv = !1;
try {
    nv = !0
} catch {}
function Vx() {
    if (!nv && console && typeof console.error == "function") {
        var e;
        (e = console).error.apply(e, arguments)
    }
}
function Wd(e) {
    if (e && ma(e) === "object" && e.prefix && e.iconName && e.icon)
        return e;
    if (Jl.icon)
        return Jl.icon(e);
    if (e === null)
        return null;
    if (e && ma(e) === "object" && e.prefix && e.iconName)
        return e;
    if (Array.isArray(e) && e.length === 2)
        return {
            prefix: e[0],
            iconName: e[1]
        };
    if (typeof e == "string")
        return {
            prefix: "fas",
            iconName: e
        }
}
function Ls(e, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? nr({}, e, t) : {}
}
var Hd = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1
}
  , Ec = Pa.forwardRef(function(e, t) {
    var n = st(st({}, Hd), e)
      , r = n.icon
      , i = n.mask
      , o = n.symbol
      , a = n.className
      , s = n.title
      , l = n.titleId
      , u = n.maskId
      , c = Wd(r)
      , f = Ls("classes", [].concat(eu(Ox(n)), eu((a || "").split(" "))))
      , d = Ls("transform", typeof n.transform == "string" ? Jl.transform(n.transform) : n.transform)
      , v = Ls("mask", Wd(i))
      , g = xx(c, st(st(st(st({}, f), d), v), {}, {
        symbol: o,
        title: s,
        titleId: l,
        maskId: u
    }));
    if (!g)
        return Vx("Could not find icon", c),
        null;
    var y = g.abstract
      , S = {
        ref: t
    };
    return Object.keys(n).forEach(function(p) {
        Hd.hasOwnProperty(p) || (S[p] = n[p])
    }),
    Dx(y[0], S)
});
Ec.displayName = "FontAwesomeIcon";
Ec.propTypes = {
    beat: V.bool,
    border: V.bool,
    beatFade: V.bool,
    bounce: V.bool,
    className: V.string,
    fade: V.bool,
    flash: V.bool,
    mask: V.oneOfType([V.object, V.array, V.string]),
    maskId: V.string,
    fixedWidth: V.bool,
    inverse: V.bool,
    flip: V.oneOf([!0, !1, "horizontal", "vertical", "both"]),
    icon: V.oneOfType([V.object, V.array, V.string]),
    listItem: V.bool,
    pull: V.oneOf(["right", "left"]),
    pulse: V.bool,
    rotation: V.oneOf([0, 90, 180, 270]),
    shake: V.bool,
    size: V.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
    spin: V.bool,
    spinPulse: V.bool,
    spinReverse: V.bool,
    symbol: V.oneOfType([V.bool, V.string]),
    title: V.string,
    titleId: V.string,
    transform: V.oneOfType([V.string, V.object]),
    swapOpacity: V.bool
};
var Dx = tv.bind(null, Pa.createElement)
  , Fx = {
    prefix: "fas",
    iconName: "chevron-down",
    icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
};
const Kd = "/assets/logo-wide-7Gi-2v26.svg"
  , zx = "/assets/main-home-2-BxzsthO_.gif"
  , Yd = "data:image/svg+xml,%3csvg%20width='1020'%20height='1'%20viewBox='0%200%201020%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='-4.37114e-08'%20y1='0.5'%20x2='1020'%20y2='0.499911'%20stroke='url(%23paint0_linear_175_487)'%20stroke-dasharray='6%206'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_175_487'%20x1='4.37114e-08'%20y1='1.5'%20x2='1020'%20y2='1.49991'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.539523'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
  , Rs = "/assets/demo-loop-2-BchwXtUD.gif"
  , Bx = "/assets/atoms-DBGePYBV.gif"
  , Os = "/assets/diamond-2-DxFW4dIj.gif"
  , Ux = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.9824%2026.7188L17.6106%2013.0589L17.6266%2013.0717L26.0767%203.28125H23.2529L16.3693%2011.25L10.9028%203.28125H3.49708L12.2465%2016.0345L12.2455%2016.0334L3.01758%2026.7188H5.84136L13.4943%2017.853L19.5767%2026.7188H26.9824ZM9.78398%205.41192L22.9332%2024.5881H20.6955L7.53565%205.41192H9.78398Z'%20fill='white'/%3e%3c/svg%3e"
  , $x = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_175_370)'%3e%3cpath%20d='M30%2015C30%2018.9782%2028.4196%2022.7936%2025.6066%2025.6066C22.7936%2028.4196%2018.9782%2030%2015%2030C11.0218%2030%207.20644%2028.4196%204.3934%2025.6066C1.58035%2022.7936%200%2018.9782%200%2015C0%2011.0218%201.58035%207.20644%204.3934%204.3934C7.20644%201.58035%2011.0218%200%2015%200C18.9782%200%2022.7936%201.58035%2025.6066%204.3934C28.4196%207.20644%2030%2011.0218%2030%2015ZM15.5381%2011.0738C14.0781%2011.6813%2011.1619%2012.9375%206.78938%2014.8425C6.08063%2015.1237%205.70875%2015.4%205.67375%2015.6712C5.6175%2016.1269%206.18938%2016.3069%206.9675%2016.5525L7.29563%2016.6556C8.06063%2016.905%209.09188%2017.1956%209.62625%2017.2069C10.1137%2017.2194%2010.6562%2017.0194%2011.2537%2016.6069C15.34%2013.8494%2017.4488%2012.4556%2017.58%2012.4256C17.6737%2012.4031%2017.805%2012.3769%2017.8913%2012.4556C17.9775%2012.5344%2017.97%2012.6806%2017.9606%2012.72C17.9044%2012.9619%2015.66%2015.0469%2014.4994%2016.1269C14.1375%2016.4644%2013.8806%2016.7025%2013.8281%2016.7569C13.7126%2016.8751%2013.595%2016.9913%2013.4756%2017.1056C12.7631%2017.7919%2012.2306%2018.3056%2013.5037%2019.1456C14.1169%2019.5506%2014.6081%2019.8825%2015.0975%2020.2162C15.63%2020.58%2016.1625%2020.9419%2016.8525%2021.3956C17.0275%2021.5106%2017.1963%2021.6275%2017.3588%2021.7463C17.9794%2022.1887%2018.54%2022.5863%2019.2281%2022.5225C19.6294%2022.485%2020.0438%2022.11%2020.2537%2020.985C20.7506%2018.3281%2021.7275%2012.5737%2021.9525%2010.2019C21.9666%2010.0047%2021.9585%209.80658%2021.9281%209.61125C21.9099%209.45376%2021.8337%209.30871%2021.7144%209.20438C21.5435%209.08707%2021.3403%209.0261%2021.1331%209.03C20.5706%209.03938%2019.7025%209.34125%2015.5381%2011.0738Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_175_370'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
  , Wx = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%202.5C13.3585%202.5%2011.733%202.82332%2010.2165%203.45151C8.69989%204.07969%207.3219%205.00043%206.16117%206.16117C3.81696%208.50537%202.5%2011.6848%202.5%2015C2.5%2020.525%206.0875%2025.2125%2011.05%2026.875C11.675%2026.975%2011.875%2026.5875%2011.875%2026.25V24.1375C8.4125%2024.8875%207.675%2022.4625%207.675%2022.4625C7.1%2021.0125%206.2875%2020.625%206.2875%2020.625C5.15%2019.85%206.375%2019.875%206.375%2019.875C7.625%2019.9625%208.2875%2021.1625%208.2875%2021.1625C9.375%2023.0625%2011.2125%2022.5%2011.925%2022.2C12.0375%2021.3875%2012.3625%2020.8375%2012.7125%2020.525C9.9375%2020.2125%207.025%2019.1375%207.025%2014.375C7.025%2012.9875%207.5%2011.875%208.3125%2010.9875C8.1875%2010.675%207.75%209.375%208.4375%207.6875C8.4375%207.6875%209.4875%207.35%2011.875%208.9625C12.8625%208.6875%2013.9375%208.55%2015%208.55C16.0625%208.55%2017.1375%208.6875%2018.125%208.9625C20.5125%207.35%2021.5625%207.6875%2021.5625%207.6875C22.25%209.375%2021.8125%2010.675%2021.6875%2010.9875C22.5%2011.875%2022.975%2012.9875%2022.975%2014.375C22.975%2019.15%2020.05%2020.2%2017.2625%2020.5125C17.7125%2020.9%2018.125%2021.6625%2018.125%2022.825V26.25C18.125%2026.5875%2018.325%2026.9875%2018.9625%2026.875C23.925%2025.2%2027.5%2020.525%2027.5%2015C27.5%2013.3585%2027.1767%2011.733%2026.5485%2010.2165C25.9203%208.69989%2024.9996%207.3219%2023.8388%206.16117C22.6781%205.00043%2021.3001%204.07969%2019.7835%203.45151C18.267%202.82332%2016.6415%202.5%2015%202.5Z'%20fill='white'/%3e%3c/svg%3e"
  , Hx = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.354%202.75852C12.9486%202.68845%2013.5477%202.84551%2014.0314%203.19828C14.5151%203.55104%2014.8477%204.07348%2014.9627%204.66102L14.994%204.86977L15.0002%204.99977V13.7498C15.0003%2014.0559%2015.1127%2014.3514%2015.3161%2014.5802C15.5196%2014.809%2015.7999%2014.9552%2016.104%2014.991L16.2502%2014.9998H24.7502C25.4133%2014.9998%2026.0492%2015.2632%2026.518%2015.732C26.9868%2016.2008%2027.2502%2016.8367%2027.2502%2017.4998C27.2502%2017.5949%2027.2393%2017.6896%2027.2177%2017.7823C26.7175%2019.9406%2025.6526%2021.9272%2024.1321%2023.5386C22.6116%2025.15%2020.6901%2026.3283%2018.5644%2026.9529C16.4387%2027.5775%2014.1852%2027.6259%2012.0347%2027.0931C9.88418%2026.5604%207.91389%2025.4656%206.32561%2023.921C4.73733%2022.3763%203.58813%2020.4373%202.9957%2018.3024C2.40327%2016.1675%202.3889%2013.9136%202.95405%2011.7713C3.51921%209.62908%204.64359%207.67553%206.21205%206.11075C7.7805%204.54596%209.73667%203.42616%2011.8802%202.86602L12.2177%202.78227L12.354%202.75852Z'%20fill='white'/%3e%3cpath%20d='M17.5%204.37509V11.2501C17.5%2011.5816%2017.6317%2011.8996%2017.8661%2012.134C18.1005%2012.3684%2018.4185%2012.5001%2018.75%2012.5001H25.625C25.8248%2012.5%2026.0217%2012.4521%2026.1991%2012.3603C26.3766%2012.2684%2026.5294%2012.1354%2026.6449%2011.9724C26.7603%2011.8093%2026.835%2011.6209%2026.8626%2011.423C26.8903%2011.2252%2026.8701%2011.0236%2026.8038%2010.8351C26.1829%209.07176%2025.1745%207.47013%2023.8527%206.14814C22.5309%204.82614%2020.9295%203.81745%2019.1663%203.19634C18.9777%203.12976%2018.776%203.10938%2018.5779%203.1369C18.3799%203.16443%2018.1913%203.23906%2018.0281%203.35453C17.8649%203.47001%2017.7317%203.62295%2017.6398%203.80053C17.5479%203.97811%2017.5%204.17515%2017.5%204.37509Z'%20fill='white'/%3e%3c/svg%3e"
  , Kx = "data:image/svg+xml,%3csvg%20width='44'%20height='37'%20viewBox='0%200%2044%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='43'%20height='36'%20rx='3.5'%20stroke='white'%20stroke-dasharray='4%204'/%3e%3cpath%20d='M14.2498%2012.4585H20.2915C20.612%2012.4585%2020.9193%2012.5858%2021.1459%2012.8124C21.3725%2013.039%2021.4998%2013.3464%2021.4998%2013.6668C21.4998%2013.9873%2021.3725%2014.2946%2021.1459%2014.5213C20.9193%2014.7479%2020.612%2014.8752%2020.2915%2014.8752H14.2498C13.9294%2014.8752%2013.622%2014.7479%2013.3954%2014.5213C13.1688%2014.2946%2013.0415%2013.9873%2013.0415%2013.6668C13.0415%2013.3464%2013.1688%2013.039%2013.3954%2012.8124C13.622%2012.5858%2013.9294%2012.4585%2014.2498%2012.4585ZM22.7082%2022.1252H28.7498C29.0703%2022.1252%2029.3777%2022.2525%2029.6043%2022.4791C29.8309%2022.7057%2029.9582%2023.013%2029.9582%2023.3335C29.9582%2023.654%2029.8309%2023.9613%2029.6043%2024.1879C29.3777%2024.4145%2029.0703%2024.5418%2028.7498%2024.5418H22.7082C22.3877%2024.5418%2022.0804%2024.4145%2021.8538%2024.1879C21.6271%2023.9613%2021.4998%2023.654%2021.4998%2023.3335C21.4998%2023.013%2021.6271%2022.7057%2021.8538%2022.4791C22.0804%2022.2525%2022.3877%2022.1252%2022.7082%2022.1252ZM14.2498%2017.2918H28.7498C29.0703%2017.2918%2029.3777%2017.4191%2029.6043%2017.6457C29.8309%2017.8723%2029.9582%2018.1797%2029.9582%2018.5002C29.9582%2018.8206%2029.8309%2019.128%2029.6043%2019.3546C29.3777%2019.5812%2029.0703%2019.7085%2028.7498%2019.7085H14.2498C13.9294%2019.7085%2013.622%2019.5812%2013.3954%2019.3546C13.1688%2019.128%2013.0415%2018.8206%2013.0415%2018.5002C13.0415%2018.1797%2013.1688%2017.8723%2013.3954%2017.6457C13.622%2017.4191%2013.9294%2017.2918%2014.2498%2017.2918Z'%20fill='white'/%3e%3c/svg%3e"
  , Yx = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='10'%20stroke='%23fff'%20stroke-width='1.5'/%3e%3cpath%20d='M14.5%209.50002L9.5%2014.5M9.49998%209.5L14.5%2014.5'%20stroke='%23fff'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e"
  , Bn = "data:image/svg+xml,%3csvg%20width='1'%20height='152'%20viewBox='0%200%201%20152'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='0.5'%20y1='2.18557e-08'%20x2='0.499993'%20y2='152'%20stroke='white'%20stroke-dasharray='6%206'/%3e%3c/svg%3e"
  , rv = P.createContext({
    transformPagePoint: e=>e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Ya = P.createContext({})
  , bc = P.createContext(null)
  , Ac = typeof document < "u"
  , iv = Ac ? P.useLayoutEffect : P.useEffect
  , ov = P.createContext({
    strict: !1
})
  , Nc = e=>e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Gx = "framerAppearId"
  , av = "data-" + Nc(Gx)
  , Qx = {
    skipAnimations: !1,
    useManualTiming: !1
};
class Gd {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function Xx(e) {
    let t = new Gd
      , n = new Gd
      , r = 0
      , i = !1
      , o = !1;
    const a = new WeakSet
      , s = {
        schedule: (l,u=!1,c=!1)=>{
            const f = c && i
              , d = f ? t : n;
            return u && a.add(l),
            d.add(l) && f && i && (r = t.order.length),
            l
        }
        ,
        cancel: l=>{
            n.remove(l),
            a.delete(l)
        }
        ,
        process: l=>{
            if (i) {
                o = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = t.order[u];
                    a.has(c) && (s.schedule(c),
                    e()),
                    c(l)
                }
            i = !1,
            o && (o = !1,
            s.process(l))
        }
    };
    return s
}
const xo = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Zx = 40;
function sv(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = xo.reduce((f,d)=>(f[d] = Xx(()=>n = !0),
    f), {})
      , a = f=>{
        o[f].process(i)
    }
      , s = ()=>{
        const f = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Zx), 1),
        i.timestamp = f,
        i.isProcessing = !0,
        xo.forEach(a),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(s))
    }
      , l = ()=>{
        n = !0,
        r = !0,
        i.isProcessing || e(s)
    }
    ;
    return {
        schedule: xo.reduce((f,d)=>{
            const v = o[d];
            return f[d] = (g,y=!1,S=!1)=>(n || l(),
            v.schedule(g, y, S)),
            f
        }
        , {}),
        cancel: f=>xo.forEach(d=>o[d].cancel(f)),
        state: i,
        steps: o
    }
}
const {schedule: Lc, cancel: mC} = sv(queueMicrotask, !1);
function qx(e, t, n, r) {
    const {visualElement: i} = P.useContext(Ya)
      , o = P.useContext(ov)
      , a = P.useContext(bc)
      , s = P.useContext(rv).reducedMotion
      , l = P.useRef();
    r = r || o.renderer,
    !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s
    }));
    const u = l.current;
    P.useInsertionEffect(()=>{
        u && u.update(n, a)
    }
    );
    const c = P.useRef(!!(n[av] && !window.HandoffComplete));
    return iv(()=>{
        u && (Lc.render(u.render),
        c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    P.useEffect(()=>{
        u && (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && (c.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    u
}
function rr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Jx(e, t, n) {
    return P.useCallback(r=>{
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : rr(n) && (n.current = r))
    }
    , [t])
}
function Ai(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Ga(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Rc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Oc = ["initial", ...Rc];
function Qa(e) {
    return Ga(e.animate) || Oc.some(t=>Ai(e[t]))
}
function lv(e) {
    return !!(Qa(e) || e.variants)
}
function eS(e, t) {
    if (Qa(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Ai(n) ? n : void 0,
            animate: Ai(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function tS(e) {
    const {initial: t, animate: n} = eS(e, P.useContext(Ya));
    return P.useMemo(()=>({
        initial: t,
        animate: n
    }), [Qd(t), Qd(n)])
}
function Qd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Xd = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Ni = {};
for (const e in Xd)
    Ni[e] = {
        isEnabled: t=>Xd[e].some(n=>!!t[n])
    };
function nS(e) {
    for (const t in e)
        Ni[t] = {
            ...Ni[t],
            ...e[t]
        }
}
const uv = P.createContext({})
  , cv = P.createContext({})
  , rS = Symbol.for("motionComponentSymbol");
function iS({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && nS(e);
    function o(s, l) {
        let u;
        const c = {
            ...P.useContext(rv),
            ...s,
            layoutId: oS(s)
        }
          , {isStatic: f} = c
          , d = tS(s)
          , v = r(s, f);
        if (!f && Ac) {
            d.visualElement = qx(i, v, c, t);
            const g = P.useContext(cv)
              , y = P.useContext(ov).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, y, e, g))
        }
        return w.jsxs(Ya.Provider, {
            value: d,
            children: [u && d.visualElement ? w.jsx(u, {
                visualElement: d.visualElement,
                ...c
            }) : null, n(i, s, Jx(v, d.visualElement, l), v, f, d.visualElement)]
        })
    }
    const a = P.forwardRef(o);
    return a[rS] = i,
    a
}
function oS({layoutId: e}) {
    const t = P.useContext(uv).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function aS(e) {
    function t(r, i={}) {
        return iS(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r,i)=>(n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
const sS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function jc(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(sS.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const va = {};
function lS(e) {
    Object.assign(va, e)
}
const Bi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Fn = new Set(Bi);
function fv(e, {layout: t, layoutId: n}) {
    return Fn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!va[e] || e === "opacity")
}
const Se = e=>!!(e && e.getVelocity)
  , uS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , cS = Bi.length;
function fS(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let o = "";
    for (let a = 0; a < cS; a++) {
        const s = Bi[a];
        if (e[s] !== void 0) {
            const l = uS[s] || s;
            o += `${l}(${e[s]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"),
    o = o.trim(),
    i ? o = i(e, r ? "" : o) : n && r && (o = "none"),
    o
}
const dv = e=>t=>typeof t == "string" && t.startsWith(e)
  , hv = dv("--")
  , dS = dv("var(--")
  , Mc = e=>dS(e) ? hS.test(e.split("/*")[0].trim()) : !1
  , hS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , pS = (e,t)=>t && typeof e == "number" ? t.transform(e) : e
  , an = (e,t,n)=>n > t ? t : n < e ? e : n
  , Ar = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , ni = {
    ...Ar,
    transform: e=>an(0, 1, e)
}
  , So = {
    ...Ar,
    default: 1
}
  , ri = e=>Math.round(e * 1e5) / 1e5
  , _c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
  , mS = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
  , vS = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Ui(e) {
    return typeof e == "string"
}
const $i = e=>({
    test: t=>Ui(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , _t = $i("deg")
  , dt = $i("%")
  , j = $i("px")
  , gS = $i("vh")
  , yS = $i("vw")
  , Zd = {
    ...dt,
    parse: e=>dt.parse(e) / 100,
    transform: e=>dt.transform(e * 100)
}
  , qd = {
    ...Ar,
    transform: Math.round
}
  , pv = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    radius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    size: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    rotate: _t,
    rotateX: _t,
    rotateY: _t,
    rotateZ: _t,
    scale: So,
    scaleX: So,
    scaleY: So,
    scaleZ: So,
    skew: _t,
    skewX: _t,
    skewY: _t,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: ni,
    originX: Zd,
    originY: Zd,
    originZ: j,
    zIndex: qd,
    backgroundPositionX: j,
    backgroundPositionY: j,
    fillOpacity: ni,
    strokeOpacity: ni,
    numOctaves: qd
};
function Ic(e, t, n, r) {
    const {style: i, vars: o, transform: a, transformOrigin: s} = e;
    let l = !1
      , u = !1
      , c = !0;
    for (const f in t) {
        const d = t[f];
        if (hv(f)) {
            o[f] = d;
            continue
        }
        const v = pv[f]
          , g = pS(d, v);
        if (Fn.has(f)) {
            if (l = !0,
            a[f] = g,
            !c)
                continue;
            d !== (v.default || 0) && (c = !1)
        } else
            f.startsWith("origin") ? (u = !0,
            s[f] = g) : i[f] = g
    }
    if (t.transform || (l || r ? i.transform = fS(e.transform, n, c, r) : i.transform && (i.transform = "none")),
    u) {
        const {originX: f="50%", originY: d="50%", originZ: v=0} = s;
        i.transformOrigin = `${f} ${d} ${v}`
    }
}
const Vc = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function mv(e, t, n) {
    for (const r in t)
        !Se(t[r]) && !fv(r, n) && (e[r] = t[r])
}
function wS({transformTemplate: e}, t, n) {
    return P.useMemo(()=>{
        const r = Vc();
        return Ic(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function xS(e, t, n) {
    const r = e.style || {}
      , i = {};
    return mv(i, r, e),
    Object.assign(i, wS(e, t, n)),
    i
}
function SS(e, t, n) {
    const r = {}
      , i = xS(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const kS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function ga(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || kS.has(e)
}
let vv = e=>!ga(e);
function CS(e) {
    e && (vv = t=>t.startsWith("on") ? !ga(t) : e(t))
}
try {
    CS(require("@emotion/is-prop-valid").default)
} catch {}
function PS(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (vv(i) || n === !0 && ga(i) || !t && !ga(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Jd(e, t, n) {
    return typeof e == "string" ? e : j.transform(t + n * e)
}
function TS(e, t, n) {
    const r = Jd(t, e.x, e.width)
      , i = Jd(n, e.y, e.height);
    return `${r} ${i}`
}
const ES = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , bS = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function AS(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? ES : bS;
    e[o.offset] = j.transform(-r);
    const a = j.transform(t)
      , s = j.transform(n);
    e[o.array] = `${a} ${s}`
}
function Dc(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: a, pathSpacing: s=1, pathOffset: l=0, ...u}, c, f, d) {
    if (Ic(e, u, c, d),
    f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: v, style: g, dimensions: y} = e;
    v.transform && (y && (g.transform = v.transform),
    delete v.transform),
    y && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = TS(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (v.x = t),
    n !== void 0 && (v.y = n),
    r !== void 0 && (v.scale = r),
    a !== void 0 && AS(v, a, s, l, !1)
}
const gv = ()=>({
    ...Vc(),
    attrs: {}
})
  , Fc = e=>typeof e == "string" && e.toLowerCase() === "svg";
function NS(e, t, n, r) {
    const i = P.useMemo(()=>{
        const o = gv();
        return Dc(o, t, {
            enableHardwareAcceleration: !1
        }, Fc(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        mv(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function LS(e=!1) {
    return (n,r,i,{latestValues: o},a)=>{
        const l = (jc(n) ? NS : SS)(r, o, a, n)
          , u = PS(r, typeof n == "string", e)
          , c = n !== P.Fragment ? {
            ...u,
            ...l,
            ref: i
        } : {}
          , {children: f} = r
          , d = P.useMemo(()=>Se(f) ? f.get() : f, [f]);
        return P.createElement(n, {
            ...c,
            children: d
        })
    }
}
function yv(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const wv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function xv(e, t, n, r) {
    yv(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(wv.has(i) ? i : Nc(i), t.attrs[i])
}
function zc(e, t, n) {
    var r;
    const {style: i} = e
      , o = {};
    for (const a in i)
        (Se(i[a]) || t.style && Se(t.style[a]) || fv(a, e) || ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[a] = i[a]);
    return o
}
function Sv(e, t, n) {
    const r = zc(e, t, n);
    for (const i in e)
        if (Se(e[i]) || Se(t[i])) {
            const o = Bi.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
function eh(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n,r)=>{
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function Bc(e, t, n, r) {
    if (typeof t == "function") {
        const [i,o] = eh(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,o] = eh(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
function kv(e) {
    const t = P.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const nu = e=>Array.isArray(e)
  , RS = e=>!!(e && typeof e == "object" && e.mix && e.toValue)
  , OS = e=>nu(e) ? e[e.length - 1] || 0 : e;
function Vo(e) {
    const t = Se(e) ? e.get() : e;
    return RS(t) ? t.toValue() : t
}
function jS({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, o) {
    const a = {
        latestValues: MS(r, i, o, e),
        renderState: t()
    };
    return n && (a.mount = s=>n(r, s, a)),
    a
}
const Cv = e=>(t,n)=>{
    const r = P.useContext(Ya)
      , i = P.useContext(bc)
      , o = ()=>jS(e, t, r, i);
    return n ? o() : kv(o)
}
;
function MS(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const d in o)
        i[d] = Vo(o[d]);
    let {initial: a, animate: s} = e;
    const l = Qa(e)
      , u = lv(e);
    t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial),
    s === void 0 && (s = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || a === !1;
    const f = c ? s : a;
    return f && typeof f != "boolean" && !Ga(f) && (Array.isArray(f) ? f : [f]).forEach(v=>{
        const g = Bc(e, v);
        if (!g)
            return;
        const {transitionEnd: y, transition: S, ...p} = g;
        for (const h in p) {
            let m = p[h];
            if (Array.isArray(m)) {
                const x = c ? m.length - 1 : 0;
                m = m[x]
            }
            m !== null && (i[h] = m)
        }
        for (const h in y)
            i[h] = y[h]
    }
    ),
    i
}
const ke = e=>e
  , {schedule: U, cancel: Nt, state: pe, steps: js} = sv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ke, !0)
  , _S = {
    useVisualState: Cv({
        scrapeMotionValuesFromProps: Sv,
        createRenderState: gv,
        onMount: (e,t,{renderState: n, latestValues: r})=>{
            U.read(()=>{
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            U.render(()=>{
                Dc(n, r, {
                    enableHardwareAcceleration: !1
                }, Fc(t.tagName), e.transformTemplate),
                xv(t, n)
            }
            )
        }
    })
}
  , IS = {
    useVisualState: Cv({
        scrapeMotionValuesFromProps: zc,
        createRenderState: Vc
    })
};
function VS(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...jc(e) ? _S : IS,
        preloadedFeatures: n,
        useRender: LS(t),
        createVisualElement: r,
        Component: e
    }
}
function gt(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n)
}
const Pv = e=>e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Xa(e, t="page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const DS = e=>t=>Pv(t) && e(t, Xa(t));
function wt(e, t, n, r) {
    return gt(e, t, DS(n), r)
}
const FS = (e,t)=>n=>t(e(n))
  , xt = (...e)=>e.reduce(FS);
function Tv(e) {
    let t = null;
    return ()=>{
        const n = ()=>{
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const th = Tv("dragHorizontal")
  , nh = Tv("dragVertical");
function Ev(e) {
    let t = !1;
    if (e === "y")
        t = nh();
    else if (e === "x")
        t = th();
    else {
        const n = th()
          , r = nh();
        n && r ? t = ()=>{
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function bv() {
    const e = Ev(!0);
    return e ? (e(),
    !1) : !0
}
class fn {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function rh(e, t) {
    const n = t ? "pointerenter" : "pointerleave"
      , r = t ? "onHoverStart" : "onHoverEnd"
      , i = (o,a)=>{
        if (o.pointerType === "touch" || bv())
            return;
        const s = e.getProps();
        e.animationState && s.whileHover && e.animationState.setActive("whileHover", t);
        const l = s[r];
        l && U.postRender(()=>l(o, a))
    }
    ;
    return wt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class zS extends fn {
    mount() {
        this.unmount = xt(rh(this.node, !0), rh(this.node, !1))
    }
    unmount() {}
}
class BS extends fn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = xt(gt(this.node.current, "focus", ()=>this.onFocus()), gt(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
const Av = (e,t)=>t ? e === t ? !0 : Av(e, t.parentElement) : !1;
function Ms(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Xa(n))
}
class US extends fn {
    constructor() {
        super(...arguments),
        this.removeStartListeners = ke,
        this.removeEndListeners = ke,
        this.removeAccessibleListeners = ke,
        this.startPointerPress = (t,n)=>{
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , o = wt(window, "pointerup", (s,l)=>{
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c, globalTapTarget: f} = this.node.getProps()
                  , d = !f && !Av(this.node.current, s.target) ? c : u;
                d && U.update(()=>d(s, l))
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , a = wt(window, "pointercancel", (s,l)=>this.cancelPress(s, l), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = xt(o, a),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = ()=>{
            const t = o=>{
                if (o.key !== "Enter" || this.isPressing)
                    return;
                const a = s=>{
                    s.key !== "Enter" || !this.checkPressEnd() || Ms("up", (l,u)=>{
                        const {onTap: c} = this.node.getProps();
                        c && U.postRender(()=>c(l, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = gt(this.node.current, "keyup", a),
                Ms("down", (s,l)=>{
                    this.startPress(s, l)
                }
                )
            }
              , n = gt(this.node.current, "keydown", t)
              , r = ()=>{
                this.isPressing && Ms("cancel", (o,a)=>this.cancelPress(o, a))
            }
              , i = gt(this.node.current, "blur", r);
            this.removeAccessibleListeners = xt(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && U.postRender(()=>r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !bv()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && U.postRender(()=>r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = wt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = gt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = xt(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const ru = new WeakMap
  , _s = new WeakMap
  , $S = e=>{
    const t = ru.get(e.target);
    t && t(e)
}
  , WS = e=>{
    e.forEach($S)
}
;
function HS({root: e, ...t}) {
    const n = e || document;
    _s.has(n) || _s.set(n, {});
    const r = _s.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(WS,{
        root: e,
        ...t
    })),
    r[i]
}
function KS(e, t, n) {
    const r = HS(t);
    return ru.set(e, n),
    r.observe(e),
    ()=>{
        ru.delete(e),
        r.unobserve(e)
    }
}
const YS = {
    some: 0,
    all: 1
};
class GS extends fn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , a = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : YS[i]
        }
          , s = l=>{
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(l)
        }
        ;
        return KS(this.node.current, a, s)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(QS(t, n)) && this.startObserver()
    }
    unmount() {}
}
function QS({viewport: e={}}, {viewport: t={}}={}) {
    return n=>e[n] !== t[n]
}
const XS = {
    inView: {
        Feature: GS
    },
    tap: {
        Feature: US
    },
    focus: {
        Feature: BS
    },
    hover: {
        Feature: zS
    }
};
function Nv(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Za(e, t, n) {
    const r = e.getProps();
    return Bc(r, t, n !== void 0 ? n : r.custom, e)
}
const qt = e=>e * 1e3
  , St = e=>e / 1e3
  , ZS = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , qS = e=>({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , JS = {
    type: "keyframes",
    duration: .8
}
  , ek = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , tk = (e,{keyframes: t})=>t.length > 2 ? JS : Fn.has(e) ? e.startsWith("scale") ? qS(t[1]) : ZS : ek;
function nk({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: a, repeatDelay: s, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function Uc(e, t) {
    return e[t] || e.default || e
}
const rk = e=>e !== null;
function qa(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(rk)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
let Do;
function ik() {
    Do = void 0
}
const Jt = {
    now: ()=>(Do === void 0 && Jt.set(pe.isProcessing || Qx.useManualTiming ? pe.timestamp : performance.now()),
    Do),
    set: e=>{
        Do = e,
        queueMicrotask(ik)
    }
}
  , Lv = e=>/^0[^.\s]+$/u.test(e);
function ok(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Lv(e) : !0
}
let iu = ke;
const Rv = e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , ak = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function sk(e) {
    const t = ak.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function Ov(e, t, n=1) {
    const [r,i] = sk(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const a = o.trim();
        return Rv(a) ? parseFloat(a) : a
    }
    return Mc(i) ? Ov(i, t, n + 1) : i
}
const lk = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , ih = e=>e === Ar || e === j
  , oh = (e,t)=>parseFloat(e.split(", ")[t])
  , ah = (e,t)=>(n,{transform: r})=>{
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return oh(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? oh(o[1], e) : 0
    }
}
  , uk = new Set(["x", "y", "z"])
  , ck = Bi.filter(e=>!uk.has(e));
function fk(e) {
    const t = [];
    return ck.forEach(n=>{
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Cr = {
    width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e,{top: t})=>parseFloat(t),
    left: (e,{left: t})=>parseFloat(t),
    bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
    right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
    x: ah(4, 13),
    y: ah(5, 14)
};
Cr.translateX = Cr.x;
Cr.translateY = Cr.y;
const jv = e=>t=>t.test(e)
  , dk = {
    test: e=>e === "auto",
    parse: e=>e
}
  , Mv = [Ar, j, dt, _t, yS, gS, dk]
  , sh = e=>Mv.find(jv(e))
  , Nn = new Set;
let ou = !1
  , au = !1;
function _v() {
    if (au) {
        const e = Array.from(Nn).filter(r=>r.needsMeasurement)
          , t = new Set(e.map(r=>r.element))
          , n = new Map;
        t.forEach(r=>{
            const i = fk(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r=>r.measureInitialState()),
        t.forEach(r=>{
            r.render();
            const i = n.get(r);
            i && i.forEach(([o,a])=>{
                var s;
                (s = r.getValue(o)) === null || s === void 0 || s.set(a)
            }
            )
        }
        ),
        e.forEach(r=>r.measureEndState()),
        e.forEach(r=>{
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    au = !1,
    ou = !1,
    Nn.forEach(e=>e.complete()),
    Nn.clear()
}
function Iv() {
    Nn.forEach(e=>{
        e.readKeyframes(),
        e.needsMeasurement && (au = !0)
    }
    )
}
function hk() {
    Iv(),
    _v()
}
class $c {
    constructor(t, n, r, i, o, a=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = o,
        this.isAsync = a
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (Nn.add(this),
        ou || (ou = !0,
        U.read(Iv),
        U.resolveKeyframes(_v))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const a = i == null ? void 0 : i.get()
                      , s = t[t.length - 1];
                    if (a !== void 0)
                        t[0] = a;
                    else if (r && n) {
                        const l = r.readValue(n, s);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = s),
                    i && a === void 0 && i.set(t[0])
                } else
                    t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Nn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        Nn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Wc = (e,t)=>n=>!!(Ui(n) && vS.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Vv = (e,t,n)=>r=>{
    if (!Ui(r))
        return r;
    const [i,o,a,s] = r.match(_c);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(a),
        alpha: s !== void 0 ? parseFloat(s) : 1
    }
}
  , pk = e=>an(0, 255, e)
  , Is = {
    ...Ar,
    transform: e=>Math.round(pk(e))
}
  , En = {
    test: Wc("rgb", "red"),
    parse: Vv("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + Is.transform(e) + ", " + Is.transform(t) + ", " + Is.transform(n) + ", " + ri(ni.transform(r)) + ")"
};
function mk(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const su = {
    test: Wc("#"),
    parse: mk,
    transform: En.transform
}
  , ir = {
    test: Wc("hsl", "hue"),
    parse: Vv("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + dt.transform(ri(t)) + ", " + dt.transform(ri(n)) + ", " + ri(ni.transform(r)) + ")"
}
  , we = {
    test: e=>En.test(e) || su.test(e) || ir.test(e),
    parse: e=>En.test(e) ? En.parse(e) : ir.test(e) ? ir.parse(e) : su.parse(e),
    transform: e=>Ui(e) ? e : e.hasOwnProperty("red") ? En.transform(e) : ir.transform(e)
};
function vk(e) {
    var t, n;
    return isNaN(e) && Ui(e) && (((t = e.match(_c)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(mS)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Dv = "number"
  , Fv = "color"
  , gk = "var"
  , yk = "var("
  , lh = "${}"
  , wk = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Li(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const s = t.replace(wk, l=>(we.test(l) ? (r.color.push(o),
    i.push(Fv),
    n.push(we.parse(l))) : l.startsWith(yk) ? (r.var.push(o),
    i.push(gk),
    n.push(l)) : (r.number.push(o),
    i.push(Dv),
    n.push(parseFloat(l))),
    ++o,
    lh)).split(lh);
    return {
        values: n,
        split: s,
        indexes: r,
        types: i
    }
}
function zv(e) {
    return Li(e).values
}
function Bv(e) {
    const {split: t, types: n} = Li(e)
      , r = t.length;
    return i=>{
        let o = "";
        for (let a = 0; a < r; a++)
            if (o += t[a],
            i[a] !== void 0) {
                const s = n[a];
                s === Dv ? o += ri(i[a]) : s === Fv ? o += we.transform(i[a]) : o += i[a]
            }
        return o
    }
}
const xk = e=>typeof e == "number" ? 0 : e;
function Sk(e) {
    const t = zv(e);
    return Bv(e)(t.map(xk))
}
const sn = {
    test: vk,
    parse: zv,
    createTransformer: Bv,
    getAnimatableNone: Sk
}
  , kk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ck(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(_c) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = kk.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const Pk = /\b([a-z-]*)\(.*?\)/gu
  , lu = {
    ...sn,
    getAnimatableNone: e=>{
        const t = e.match(Pk);
        return t ? t.map(Ck).join(" ") : e
    }
}
  , Tk = {
    ...pv,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: lu,
    WebkitFilter: lu
}
  , Hc = e=>Tk[e];
function Uv(e, t) {
    let n = Hc(e);
    return n !== lu && (n = sn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Ek = new Set(["auto", "none", "0"]);
function bk(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const o = e[r];
        typeof o == "string" && !Ek.has(o) && Li(o).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const o of t)
            e[o] = Uv(n, i)
}
class $v extends $c {
    constructor(t, n, r, i) {
        super(t, n, r, i, i == null ? void 0 : i.owner, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(),
            Mc(u))) {
                const c = Ov(u, n.current);
                c !== void 0 && (t[l] = c),
                l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !lk.has(r) || t.length !== 2)
            return;
        const [i,o] = t
          , a = sh(i)
          , s = sh(o);
        if (a !== s)
            if (ih(a) && ih(s))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            ok(t[i]) && r.push(i);
        r.length && bk(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Cr[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n.current)
            return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const a = i.length - 1
          , s = i[a];
        i[a] = Cr[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l,u])=>{
            n.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Wv(e) {
    let t;
    return ()=>(t === void 0 && (t = e()),
    t)
}
const uh = (e,t)=>t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (sn.test(e) || e === "0") && !e.startsWith("url("));
function Ak(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function Nk(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
      , a = uh(i, t)
      , s = uh(o, t);
    return !a || !s ? !1 : Ak(e) || n === "spring" && r
}
class Hv {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: a="loop", ...s}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: a,
            ...s
        },
        this.updateFinishedPromise()
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && hk(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: o, delay: a, onComplete: s, onUpdate: l, isGenerator: u} = this.options;
        if (!u && !Nk(t, r, i, o))
            if (a)
                this.options.duration = 0;
            else {
                l == null || l(qa(t, this.options, n)),
                s == null || s(),
                this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t=>{
            this.resolveFinishedPromise = t
        }
        )
    }
}
function Kv(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Lk = 5;
function Yv(e, t, n) {
    const r = Math.max(t - Lk, 0);
    return Kv(n - e(r), t - r)
}
const Vs = .001
  , Rk = .01
  , Ok = 10
  , jk = .05
  , Mk = 1;
function _k({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, o, a = 1 - t;
    a = an(jk, Mk, a),
    e = an(Rk, Ok, St(e)),
    a < 1 ? (i = u=>{
        const c = u * a
          , f = c * e
          , d = c - n
          , v = uu(u, a)
          , g = Math.exp(-f);
        return Vs - d / v * g
    }
    ,
    o = u=>{
        const f = u * a * e
          , d = f * n + n
          , v = Math.pow(a, 2) * Math.pow(u, 2) * e
          , g = Math.exp(-f)
          , y = uu(Math.pow(u, 2), a);
        return (-i(u) + Vs > 0 ? -1 : 1) * ((d - v) * g) / y
    }
    ) : (i = u=>{
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -Vs + c * f
    }
    ,
    o = u=>{
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const s = 5 / e
      , l = Vk(i, o, s);
    if (e = qt(e),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: a * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const Ik = 12;
function Vk(e, t, n) {
    let r = n;
    for (let i = 1; i < Ik; i++)
        r = r - e(r) / t(r);
    return r
}
function uu(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Dk = ["duration", "bounce"]
  , Fk = ["stiffness", "damping", "mass"];
function ch(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function zk(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!ch(e, Fk) && ch(e, Dk)) {
        const n = _k(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Gv({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const i = e[0]
      , o = e[e.length - 1]
      , a = {
        done: !1,
        value: i
    }
      , {stiffness: s, damping: l, mass: u, duration: c, velocity: f, isResolvedFromDuration: d} = zk({
        ...r,
        velocity: -St(r.velocity || 0)
    })
      , v = f || 0
      , g = l / (2 * Math.sqrt(s * u))
      , y = o - i
      , S = St(Math.sqrt(s / u))
      , p = Math.abs(y) < 5;
    n || (n = p ? .01 : 2),
    t || (t = p ? .005 : .5);
    let h;
    if (g < 1) {
        const m = uu(S, g);
        h = x=>{
            const k = Math.exp(-g * S * x);
            return o - k * ((v + g * S * y) / m * Math.sin(m * x) + y * Math.cos(m * x))
        }
    } else if (g === 1)
        h = m=>o - Math.exp(-S * m) * (y + (v + S * y) * m);
    else {
        const m = S * Math.sqrt(g * g - 1);
        h = x=>{
            const k = Math.exp(-g * S * x)
              , E = Math.min(m * x, 300);
            return o - k * ((v + g * S * y) * Math.sinh(E) + m * y * Math.cosh(E)) / m
        }
    }
    return {
        calculatedDuration: d && c || null,
        next: m=>{
            const x = h(m);
            if (d)
                a.done = m >= c;
            else {
                let k = v;
                m !== 0 && (g < 1 ? k = Yv(h, m, x) : k = 0);
                const E = Math.abs(k) <= n
                  , b = Math.abs(o - x) <= t;
                a.done = E && b
            }
            return a.value = a.done ? o : x,
            a
        }
    }
}
function fh({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: a, min: s, max: l, restDelta: u=.5, restSpeed: c}) {
    const f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , v = T=>s !== void 0 && T < s || l !== void 0 && T > l
      , g = T=>s === void 0 ? l : l === void 0 || Math.abs(s - T) < Math.abs(l - T) ? s : l;
    let y = n * t;
    const S = f + y
      , p = a === void 0 ? S : a(S);
    p !== S && (y = p - f);
    const h = T=>-y * Math.exp(-T / r)
      , m = T=>p + h(T)
      , x = T=>{
        const M = h(T)
          , O = m(T);
        d.done = Math.abs(M) <= u,
        d.value = d.done ? p : O
    }
    ;
    let k, E;
    const b = T=>{
        v(d.value) && (k = T,
        E = Gv({
            keyframes: [d.value, g(d.value)],
            velocity: Yv(m, T, d.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return b(0),
    {
        calculatedDuration: null,
        next: T=>{
            let M = !1;
            return !E && k === void 0 && (M = !0,
            x(T),
            b(T)),
            k !== void 0 && T >= k ? E.next(T - k) : (!M && x(T),
            d)
        }
    }
}
const Qv = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Bk = 1e-7
  , Uk = 12;
function $k(e, t, n, r, i) {
    let o, a, s = 0;
    do
        a = t + (n - t) / 2,
        o = Qv(a, r, i) - e,
        o > 0 ? n = a : t = a;
    while (Math.abs(o) > Bk && ++s < Uk);
    return a
}
function Wi(e, t, n, r) {
    if (e === t && n === r)
        return ke;
    const i = o=>$k(o, 0, 1, e, n);
    return o=>o === 0 || o === 1 ? o : Qv(i(o), t, r)
}
const Wk = Wi(.42, 0, 1, 1)
  , Hk = Wi(0, 0, .58, 1)
  , Xv = Wi(.42, 0, .58, 1)
  , Kk = e=>Array.isArray(e) && typeof e[0] != "number"
  , Zv = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , qv = e=>t=>1 - e(1 - t)
  , Kc = e=>1 - Math.sin(Math.acos(e))
  , Jv = qv(Kc)
  , Yk = Zv(Kc)
  , eg = Wi(.33, 1.53, .69, .99)
  , Yc = qv(eg)
  , Gk = Zv(Yc)
  , Qk = e=>(e *= 2) < 1 ? .5 * Yc(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , dh = {
    linear: ke,
    easeIn: Wk,
    easeInOut: Xv,
    easeOut: Hk,
    circIn: Kc,
    circInOut: Yk,
    circOut: Jv,
    backIn: Yc,
    backInOut: Gk,
    backOut: eg,
    anticipate: Qk
}
  , hh = e=>{
    if (Array.isArray(e)) {
        iu(e.length === 4);
        const [t,n,r,i] = e;
        return Wi(t, n, r, i)
    } else if (typeof e == "string")
        return iu(dh[e] !== void 0),
        dh[e];
    return e
}
  , Ri = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , X = (e,t,n)=>e + (t - e) * n;
function Ds(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Xk({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , a = 0;
    if (!t)
        i = o = a = n;
    else {
        const s = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - s;
        i = Ds(l, s, e + 1 / 3),
        o = Ds(l, s, e),
        a = Ds(l, s, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(a * 255),
        alpha: r
    }
}
function ya(e, t) {
    return n=>n > 0 ? t : e
}
const Fs = (e,t,n)=>{
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , Zk = [su, En, ir]
  , qk = e=>Zk.find(t=>t.test(e));
function ph(e) {
    const t = qk(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === ir && (n = Xk(n)),
    n
}
const mh = (e,t)=>{
    const n = ph(e)
      , r = ph(t);
    if (!n || !r)
        return ya(e, t);
    const i = {
        ...n
    };
    return o=>(i.red = Fs(n.red, r.red, o),
    i.green = Fs(n.green, r.green, o),
    i.blue = Fs(n.blue, r.blue, o),
    i.alpha = X(n.alpha, r.alpha, o),
    En.transform(i))
}
  , cu = new Set(["none", "hidden"]);
function Jk(e, t) {
    return cu.has(e) ? n=>n <= 0 ? e : t : n=>n >= 1 ? t : e
}
function e5(e, t) {
    return n=>X(e, t, n)
}
function Gc(e) {
    return typeof e == "number" ? e5 : typeof e == "string" ? Mc(e) ? ya : we.test(e) ? mh : r5 : Array.isArray(e) ? tg : typeof e == "object" ? we.test(e) ? mh : t5 : ya
}
function tg(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map((o,a)=>Gc(o)(o, t[a]));
    return o=>{
        for (let a = 0; a < r; a++)
            n[a] = i[a](o);
        return n
    }
}
function t5(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Gc(e[i])(e[i], t[i]));
    return i=>{
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function n5(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const a = t.types[o]
          , s = e.indexes[a][i[a]]
          , l = (n = e.values[s]) !== null && n !== void 0 ? n : 0;
        r[o] = l,
        i[a]++
    }
    return r
}
const r5 = (e,t)=>{
    const n = sn.createTransformer(t)
      , r = Li(e)
      , i = Li(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? cu.has(e) && !i.values.length || cu.has(t) && !r.values.length ? Jk(e, t) : xt(tg(n5(r, i), i.values), n) : ya(e, t)
}
;
function ng(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? X(e, t, n) : Gc(e)(e, t)
}
function i5(e, t, n) {
    const r = []
      , i = n || ng
      , o = e.length - 1;
    for (let a = 0; a < o; a++) {
        let s = i(e[a], e[a + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[a] || ke : t;
            s = xt(l, s)
        }
        r.push(s)
    }
    return r
}
function o5(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (iu(o === t.length),
    o === 1)
        return ()=>t[0];
    if (o === 2 && e[0] === e[1])
        return ()=>t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = i5(t, r, i)
      , s = a.length
      , l = u=>{
        let c = 0;
        if (s > 1)
            for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                ;
        const f = Ri(e[c], e[c + 1], u);
        return a[c](f)
    }
    ;
    return n ? u=>l(an(e[0], e[o - 1], u)) : l
}
function a5(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Ri(0, t, r);
        e.push(X(n, 1, i))
    }
}
function s5(e) {
    const t = [0];
    return a5(t, e.length - 1),
    t
}
function l5(e, t) {
    return e.map(n=>n * t)
}
function u5(e, t) {
    return e.map(()=>t || Xv).splice(0, e.length - 1)
}
function wa({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = Kk(r) ? r.map(hh) : hh(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , a = l5(n && n.length === t.length ? n : s5(t), e)
      , s = o5(a, t, {
        ease: Array.isArray(i) ? i : u5(t, i)
    });
    return {
        calculatedDuration: e,
        next: l=>(o.value = s(l),
        o.done = l >= e,
        o)
    }
}
const vh = 2e4;
function c5(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < vh; )
        t += n,
        r = e.next(t);
    return t >= vh ? 1 / 0 : t
}
const f5 = e=>{
    const t = ({timestamp: n})=>e(n);
    return {
        start: ()=>U.update(t, !0),
        stop: ()=>Nt(t),
        now: ()=>pe.isProcessing ? pe.timestamp : Jt.now()
    }
}
  , d5 = {
    decay: fh,
    inertia: fh,
    tween: wa,
    keyframes: wa,
    spring: Gv
}
  , h5 = e=>e / 100;
class Qc extends Hv {
    constructor({KeyframeResolver: t=$c, ...n}) {
        super(n),
        this.holdTime = null,
        this.startTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.state = "idle",
        this.stop = ()=>{
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: s} = this.options;
            s && s()
        }
        ;
        const {name: r, motionValue: i, keyframes: o} = this.options
          , a = (s,l)=>this.onKeyframesResolved(s, l);
        r && i && i.owner ? this.resolver = i.owner.resolveKeyframes(o, a, r, i) : this.resolver = new t(o,a,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o, velocity: a=0} = this.options
          , s = d5[n] || wa;
        let l, u;
        s !== wa && typeof t[0] != "number" && (l = xt(h5, ng(t[0], t[1])),
        t = [0, 100]);
        const c = s({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = s({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -a
        })),
        c.calculatedDuration === null && (c.calculatedDuration = c5(c));
        const {calculatedDuration: f} = c
          , d = f + i
          , v = d * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: f,
            resolvedDuration: d,
            totalDuration: v
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: T} = this.options;
            return {
                done: !0,
                value: T[T.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: a, mapPercentToKeyframes: s, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f} = r;
        if (this.startTime === null)
            return o.next(0);
        const {delay: d, repeat: v, repeatType: g, repeatDelay: y, onUpdate: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , h = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let m = this.currentTime
          , x = o;
        if (v) {
            const T = Math.min(this.currentTime, c) / f;
            let M = Math.floor(T)
              , O = T % 1;
            !O && T >= 1 && (O = 1),
            O === 1 && M--,
            M = Math.min(M, v + 1),
            !!(M % 2) && (g === "reverse" ? (O = 1 - O,
            y && (O -= y / f)) : g === "mirror" && (x = a)),
            m = an(0, 1, O) * f
        }
        const k = h ? {
            done: !1,
            value: l[0]
        } : x.next(m);
        s && (k.value = s(k.value));
        let {done: E} = k;
        !h && u !== null && (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return b && i !== void 0 && (k.value = qa(l, this.options, i)),
        S && S(k.value),
        b && this.finish(),
        k
    }
    get duration() {
        const {resolved: t} = this;
        return t ? St(t.calculatedDuration) : 0
    }
    get time() {
        return St(this.currentTime)
    }
    set time(t) {
        t = qt(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = St(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=f5, onPlay: n} = this.options;
        this.driver || (this.driver = t(i=>this.tick(i))),
        n && n();
        const r = this.driver.now();
        this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const rg = e=>Array.isArray(e) && typeof e[0] == "number";
function ig(e) {
    return !!(!e || typeof e == "string" && e in Xc || rg(e) || Array.isArray(e) && e.every(ig))
}
const Wr = ([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Xc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Wr([0, .65, .55, 1]),
    circOut: Wr([.55, 0, 1, .45]),
    backIn: Wr([.31, .01, .66, -.59]),
    backOut: Wr([.33, 1.53, .69, .99])
};
function p5(e) {
    return og(e) || Xc.easeOut
}
function og(e) {
    if (e)
        return rg(e) ? Wr(e) : Array.isArray(e) ? e.map(p5) : Xc[e]
}
function m5(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: a="loop", ease: s, times: l}={}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = og(s);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: a === "reverse" ? "alternate" : "normal"
    })
}
const v5 = Wv(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
  , g5 = new Set(["opacity", "clipPath", "filter", "transform"])
  , xa = 10
  , y5 = 2e4;
function w5(e) {
    return e.type === "spring" || e.name === "backgroundColor" || !ig(e.ease)
}
function x5(e, t) {
    const n = new Qc({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < y5; )
        r = n.sample(o),
        i.push(r.value),
        o += xa;
    return {
        times: void 0,
        keyframes: i,
        duration: o - xa,
        ease: "linear"
    }
}
class gh extends Hv {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, keyframes: i} = this.options;
        this.resolver = new $v(i,(o,a)=>this.onKeyframesResolved(o, a),n,r),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {duration: i=300, times: o, ease: a, type: s, motionValue: l, name: u} = this.options;
        if (!(!((r = l.owner) === null || r === void 0) && r.current))
            return !1;
        if (w5(this.options)) {
            const {onComplete: f, onUpdate: d, motionValue: v, ...g} = this.options
              , y = x5(t, g);
            t = y.keyframes,
            t.length === 1 && (t[1] = t[0]),
            i = y.duration,
            o = y.times,
            a = y.ease,
            s = "keyframes"
        }
        const c = m5(l.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: o,
            ease: a
        });
        return c.startTime = Jt.now(),
        this.pendingTimeline ? (c.timeline = this.pendingTimeline,
        this.pendingTimeline = void 0) : c.onfinish = ()=>{
            const {onComplete: f} = this.options;
            l.set(qa(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: i,
            times: o,
            type: s,
            ease: a,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return St(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return St(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = qt(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return ke;
            const {animation: r} = n;
            r.timeline = t,
            r.onfinish = null
        }
        return ke
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: o, ease: a, times: s} = t;
        if (!(n.playState === "idle" || n.playState === "finished")) {
            if (this.time) {
                const {motionValue: l, onUpdate: u, onComplete: c, ...f} = this.options
                  , d = new Qc({
                    ...f,
                    keyframes: r,
                    duration: i,
                    type: o,
                    ease: a,
                    times: s,
                    isGenerator: !0
                })
                  , v = qt(this.time);
                l.setWithVelocity(d.sample(v - xa).value, d.sample(v).value, xa)
            }
            this.cancel()
        }
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: a, type: s} = t;
        return v5() && r && g5.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && a !== 0 && s !== "inertia"
    }
}
function S5(e, t) {
    let n;
    const r = ()=>{
        const {currentTime: i} = t
          , a = (i === null ? 0 : i.value) / 100;
        n !== a && e(a),
        n = a
    }
    ;
    return U.update(r, !0),
    ()=>Nt(r)
}
const k5 = Wv(()=>window.ScrollTimeline !== void 0);
class C5 {
    constructor(t) {
        this.stop = ()=>this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t) {
        const n = this.animations.map(r=>{
            if (k5() && r.attachTimeline)
                r.attachTimeline(t);
            else
                return r.pause(),
                S5(i=>{
                    r.time = r.duration * i
                }
                , t)
        }
        );
        return ()=>{
            n.forEach((r,i)=>{
                r && r(),
                this.animations[i].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n=>n[t]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
const Zc = (e,t,n,r={},i,o)=>a=>{
    const s = Uc(r, e) || {}
      , l = s.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - qt(l);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...s,
        delay: -u,
        onUpdate: d=>{
            t.set(d),
            s.onUpdate && s.onUpdate(d)
        }
        ,
        onComplete: ()=>{
            a(),
            s.onComplete && s.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    nk(s) || (c = {
        ...c,
        ...tk(e, c)
    }),
    c.duration && (c.duration = qt(c.duration)),
    c.repeatDelay && (c.repeatDelay = qt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
    c.delay === 0 && (f = !0)),
    f && !o && t.get() !== void 0) {
        const d = qa(c.keyframes, s);
        if (d !== void 0)
            return U.update(()=>{
                c.onUpdate(d),
                c.onComplete()
            }
            ),
            new C5([])
    }
    return !o && gh.supports(c) ? new gh(c) : new Qc(c)
}
;
function Sa(e) {
    return !!(Se(e) && e.add)
}
function qc(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Jc(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class ef {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return qc(this.subscriptions, t),
        ()=>Jc(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const a = this.subscriptions[o];
                    a && a(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const yh = 30
  , P5 = e=>!isNaN(parseFloat(e));
class T5 {
    constructor(t, n={}) {
        this.version = "11.2.10",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r,i=!0)=>{
            const o = Jt.now();
            this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = Jt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = P5(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new ef);
        const r = this.events[t].add(n);
        return t === "change" ? ()=>{
            r(),
            U.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Jt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > yh)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, yh);
        return Kv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Oi(e, t) {
    return new T5(e,t)
}
function E5(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Oi(n))
}
function tf(e, t) {
    const n = Za(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const a in o) {
        const s = OS(o[a]);
        E5(e, a, s)
    }
}
function ag(e) {
    return e.getProps()[av]
}
function b5({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function sg(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: a=e.getDefaultTransition(), transitionEnd: s, ...l} = t;
    const u = e.getValue("willChange");
    r && (a = r);
    const c = []
      , f = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
        const v = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null)
          , g = l[d];
        if (g === void 0 || f && b5(f, d))
            continue;
        const y = {
            delay: n,
            elapsed: 0,
            ...Uc(a || {}, d)
        };
        let S = !1;
        if (window.HandoffAppearAnimations) {
            const h = ag(e);
            if (h) {
                const m = window.HandoffAppearAnimations(h, d, v, U);
                m !== null && (y.elapsed = m,
                S = !0)
            }
        }
        v.start(Zc(d, v, g, e.shouldReduceMotion && Fn.has(d) ? {
            type: !1
        } : y, e, S));
        const p = v.animation;
        p && (Sa(u) && (u.add(d),
        p.then(()=>u.remove(d))),
        c.push(p))
    }
    return s && Promise.all(c).then(()=>{
        U.update(()=>{
            s && tf(e, s)
        }
        )
    }
    ),
    c
}
function fu(e, t, n={}) {
    var r;
    const i = Za(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const a = i ? ()=>Promise.all(sg(e, i, n)) : ()=>Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (u=0)=>{
        const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = o;
        return A5(e, t, c + u, f, d, n)
    }
    : ()=>Promise.resolve()
      , {when: l} = o;
    if (l) {
        const [u,c] = l === "beforeChildren" ? [a, s] : [s, a];
        return u().then(()=>c())
    } else
        return Promise.all([a(), s(n.delay)])
}
function A5(e, t, n=0, r=0, i=1, o) {
    const a = []
      , s = (e.variantChildren.size - 1) * r
      , l = i === 1 ? (u=0)=>u * r : (u=0)=>s - u * r;
    return Array.from(e.variantChildren).sort(N5).forEach((u,c)=>{
        u.notify("AnimationStart", t),
        a.push(fu(u, t, {
            ...o,
            delay: n + l(c)
        }).then(()=>u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(a)
}
function N5(e, t) {
    return e.sortNodePosition(t)
}
function lg(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o=>fu(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = fu(e, t, n);
    else {
        const i = typeof t == "function" ? Za(e, t, n.custom) : t;
        r = Promise.all(sg(e, i, n))
    }
    return r.then(()=>{
        U.postRender(()=>{
            e.notify("AnimationComplete", t)
        }
        )
    }
    )
}
const L5 = [...Rc].reverse()
  , R5 = Rc.length;
function O5(e) {
    return t=>Promise.all(t.map(({animation: n, options: r})=>lg(e, n, r)))
}
function j5(e) {
    let t = O5(e);
    const n = _5();
    let r = !0;
    const i = l=>(u,c)=>{
        var f;
        const d = Za(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: v, transitionEnd: g, ...y} = d;
            u = {
                ...u,
                ...y,
                ...g
            }
        }
        return u
    }
    ;
    function o(l) {
        t = l(e)
    }
    function a(l) {
        const u = e.getProps()
          , c = e.getVariantContext(!0) || {}
          , f = []
          , d = new Set;
        let v = {}
          , g = 1 / 0;
        for (let S = 0; S < R5; S++) {
            const p = L5[S]
              , h = n[p]
              , m = u[p] !== void 0 ? u[p] : c[p]
              , x = Ai(m)
              , k = p === l ? h.isActive : null;
            k === !1 && (g = S);
            let E = m === c[p] && m !== u[p] && x;
            if (E && r && e.manuallyAnimateOnMount && (E = !1),
            h.protectedKeys = {
                ...v
            },
            !h.isActive && k === null || !m && !h.prevProp || Ga(m) || typeof m == "boolean")
                continue;
            let T = M5(h.prevProp, m) || p === l && h.isActive && !E && x || S > g && x
              , M = !1;
            const O = Array.isArray(m) ? m : [m];
            let le = O.reduce(i(p), {});
            k === !1 && (le = {});
            const {prevResolvedValues: Ot={}} = h
              , dn = {
                ...Ot,
                ...le
            }
              , Nr = de=>{
                T = !0,
                d.has(de) && (M = !0,
                d.delete(de)),
                h.needsAnimating[de] = !0;
                const Me = e.getValue(de);
                Me && (Me.liveStyle = !1)
            }
            ;
            for (const de in dn) {
                const Me = le[de]
                  , hn = Ot[de];
                if (v.hasOwnProperty(de))
                    continue;
                let A = !1;
                nu(Me) && nu(hn) ? A = !Nv(Me, hn) : A = Me !== hn,
                A ? Me != null ? Nr(de) : d.add(de) : Me !== void 0 && d.has(de) ? Nr(de) : h.protectedKeys[de] = !0
            }
            h.prevProp = m,
            h.prevResolvedValues = le,
            h.isActive && (v = {
                ...v,
                ...le
            }),
            r && e.blockInitialAnimation && (T = !1),
            T && (!E || M) && f.push(...O.map(de=>({
                animation: de,
                options: {
                    type: p
                }
            })))
        }
        if (d.size) {
            const S = {};
            d.forEach(p=>{
                const h = e.getBaseTarget(p)
                  , m = e.getValue(p);
                m && (m.liveStyle = !0),
                S[p] = h ?? null
            }
            ),
            f.push({
                animation: S
            })
        }
        let y = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (y = !1),
        r = !1,
        y ? t(f) : Promise.resolve()
    }
    function s(l, u) {
        var c;
        if (n[l].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(d=>{
            var v;
            return (v = d.animationState) === null || v === void 0 ? void 0 : v.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const f = a(l);
        for (const d in n)
            n[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: a,
        setActive: s,
        setAnimateFunction: o,
        getState: ()=>n
    }
}
function M5(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Nv(t, e) : !1
}
function vn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function _5() {
    return {
        animate: vn(!0),
        whileInView: vn(),
        whileHover: vn(),
        whileTap: vn(),
        whileDrag: vn(),
        whileFocus: vn(),
        exit: vn()
    }
}
class I5 extends fn {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = j5(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        Ga(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let V5 = 0;
class D5 extends fn {
    constructor() {
        super(...arguments),
        this.id = V5++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(()=>n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const F5 = {
    animation: {
        Feature: I5
    },
    exit: {
        Feature: D5
    }
}
  , wh = (e,t)=>Math.abs(e - t);
function z5(e, t) {
    const n = wh(e.x, t.x)
      , r = wh(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class ug {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Bs(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , v = z5(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !v)
                return;
            const {point: g} = f
              , {timestamp: y} = pe;
            this.history.push({
                ...g,
                timestamp: y
            });
            const {onStart: S, onMove: p} = this.handlers;
            d || (S && S(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f,d)=>{
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = zs(d, this.transformPagePoint),
            U.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f,d)=>{
            this.end();
            const {onEnd: v, onSessionEnd: g, resumeAnimation: y} = this.handlers;
            if (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = Bs(f.type === "pointercancel" ? this.lastMoveEventInfo : zs(d, this.transformPagePoint), this.history);
            this.startEvent && v && v(f, S),
            g && g(f, S)
        }
        ,
        !Pv(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const a = Xa(t)
          , s = zs(a, this.transformPagePoint)
          , {point: l} = s
          , {timestamp: u} = pe;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Bs(s, this.history)),
        this.removeListeners = xt(wt(this.contextWindow, "pointermove", this.handlePointerMove), wt(this.contextWindow, "pointerup", this.handlePointerUp), wt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Nt(this.updatePoint)
    }
}
function zs(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function xh(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Bs({point: e}, t) {
    return {
        point: e,
        delta: xh(e, cg(t)),
        offset: xh(e, B5(t)),
        velocity: U5(t, .1)
    }
}
function B5(e) {
    return e[0]
}
function cg(e) {
    return e[e.length - 1]
}
function U5(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = cg(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > qt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = St(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const a = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return a.x === 1 / 0 && (a.x = 0),
    a.y === 1 / 0 && (a.y = 0),
    a
}
function Fe(e) {
    return e.max - e.min
}
function du(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function Sh(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = X(t.min, t.max, e.origin),
    e.scale = Fe(n) / Fe(t),
    (du(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = X(n.min, n.max, e.origin) - e.originPoint,
    (du(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function ii(e, t, n, r) {
    Sh(e.x, t.x, n.x, r ? r.originX : void 0),
    Sh(e.y, t.y, n.y, r ? r.originY : void 0)
}
function kh(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Fe(t)
}
function $5(e, t, n) {
    kh(e.x, t.x, n.x),
    kh(e.y, t.y, n.y)
}
function Ch(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Fe(t)
}
function oi(e, t, n) {
    Ch(e.x, t.x, n.x),
    Ch(e.y, t.y, n.y)
}
function W5(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? X(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? X(n, e, r.max) : Math.min(e, n)),
    e
}
function Ph(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function H5(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Ph(e.x, n, i),
        y: Ph(e.y, t, r)
    }
}
function Th(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function K5(e, t) {
    return {
        x: Th(e.x, t.x),
        y: Th(e.y, t.y)
    }
}
function Y5(e, t) {
    let n = .5;
    const r = Fe(e)
      , i = Fe(t);
    return i > r ? n = Ri(t.min, t.max - r, e.min) : r > i && (n = Ri(e.min, e.max - i, t.min)),
    an(0, 1, n)
}
function G5(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const hu = .35;
function Q5(e=hu) {
    return e === !1 ? e = 0 : e === !0 && (e = hu),
    {
        x: Eh(e, "left", "right"),
        y: Eh(e, "top", "bottom")
    }
}
function Eh(e, t, n) {
    return {
        min: bh(e, t),
        max: bh(e, n)
    }
}
function bh(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Ah = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , or = ()=>({
    x: Ah(),
    y: Ah()
})
  , Nh = ()=>({
    min: 0,
    max: 0
})
  , ne = ()=>({
    x: Nh(),
    y: Nh()
});
function We(e) {
    return [e("x"), e("y")]
}
function fg({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function X5({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function Z5(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Us(e) {
    return e === void 0 || e === 1
}
function pu({scale: e, scaleX: t, scaleY: n}) {
    return !Us(e) || !Us(t) || !Us(n)
}
function wn(e) {
    return pu(e) || dg(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function dg(e) {
    return Lh(e.x) || Lh(e.y)
}
function Lh(e) {
    return e && e !== "0%"
}
function ka(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Rh(e, t, n, r, i) {
    return i !== void 0 && (e = ka(e, i, r)),
    ka(e, n, r) + t
}
function mu(e, t=0, n=1, r, i) {
    e.min = Rh(e.min, t, n, r, i),
    e.max = Rh(e.max, t, n, r, i)
}
function hg(e, {x: t, y: n}) {
    mu(e.x, t.translate, t.scale, t.originPoint),
    mu(e.y, n.translate, n.scale, n.originPoint)
}
function q5(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, a;
    for (let s = 0; s < i; s++) {
        o = n[s],
        a = o.projectionDelta;
        const l = o.instance;
        l && l.style && l.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && ar(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        a && (t.x *= a.x.scale,
        t.y *= a.y.scale,
        hg(e, a)),
        r && wn(o.latestValues) && ar(e, o.latestValues))
    }
    t.x = Oh(t.x),
    t.y = Oh(t.y)
}
function Oh(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function Dt(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function jh(e, t, [n,r,i]) {
    const o = t[i] !== void 0 ? t[i] : .5
      , a = X(e.min, e.max, o);
    mu(e, t[n], t[r], a, t.scale)
}
const J5 = ["x", "scaleX", "originX"]
  , e3 = ["y", "scaleY", "originY"];
function ar(e, t) {
    jh(e.x, t, J5),
    jh(e.y, t, e3)
}
function pg(e, t) {
    return fg(Z5(e.getBoundingClientRect(), t))
}
function t3(e, t, n) {
    const r = pg(e, n)
      , {scroll: i} = t;
    return i && (Dt(r.x, i.offset.x),
    Dt(r.y, i.offset.y)),
    r
}
const mg = ({current: e})=>e ? e.ownerDocument.defaultView : null
  , n3 = new WeakMap;
class r3 {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ne(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c=>{
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Xa(c, "page").point)
        }
          , o = (c,f)=>{
            const {drag: d, dragPropagation: v, onDragStart: g} = this.getProps();
            if (d && !v && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = Ev(d),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            We(S=>{
                let p = this.getAxisMotionValue(S).get() || 0;
                if (dt.test(p)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const m = h.layout.layoutBox[S];
                        m && (p = Fe(m) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[S] = p
            }
            ),
            g && U.postRender(()=>g(c, f));
            const {animationState: y} = this.visualElement;
            y && y.setActive("whileDrag", !0)
        }
          , a = (c,f)=>{
            const {dragPropagation: d, dragDirectionLock: v, onDirectionLock: g, onDrag: y} = this.getProps();
            if (!d && !this.openGlobalLock)
                return;
            const {offset: S} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = i3(S),
                this.currentDirection !== null && g && g(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, S),
            this.updateAxis("y", f.point, S),
            this.visualElement.render(),
            y && y(c, f)
        }
          , s = (c,f)=>this.stop(c, f)
          , l = ()=>We(c=>{
            var f;
            return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new ug(t,{
            onSessionStart: i,
            onStart: o,
            onMove: a,
            onSessionEnd: s,
            resumeAnimation: l
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: mg(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && U.postRender(()=>o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !ko(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let a = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (a = W5(a, this.constraints[t], this.elastic[t])),
        o.set(a)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , o = this.constraints;
        n && rr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = H5(i.layoutBox, n) : this.constraints = !1,
        this.elastic = Q5(r),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && We(a=>{
            this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = G5(i.layoutBox[a], this.constraints[a]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !rr(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = t3(r, i.root, this.visualElement.getTransformPagePoint());
        let a = K5(i.layout.layoutBox, o);
        if (n) {
            const s = n(X5(a));
            this.hasMutatedConstraints = !!s,
            s && (a = fg(s))
        }
        return a
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: a, onDragTransitionEnd: s} = this.getProps()
          , l = this.constraints || {}
          , u = We(c=>{
            if (!ko(c, n, this.currentDirection))
                return;
            let f = l && l[c] || {};
            a && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , v = i ? 40 : 1e7
              , g = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: d,
                bounceDamping: v,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...f
            };
            return this.startAxisValueAnimation(c, g)
        }
        );
        return Promise.all(u).then(s)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Zc(t, r, 0, n, this.visualElement))
    }
    stopAnimation() {
        We(t=>this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        We(t=>{
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        We(n=>{
            const {drag: r} = this.getProps();
            if (!ko(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: a, max: s} = i.layout.layoutBox[n];
                o.set(t[n] - X(a, s, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!rr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        We(a=>{
            const s = this.getAxisMotionValue(a);
            if (s && this.constraints !== !1) {
                const l = s.get();
                i[a] = Y5({
                    min: l,
                    max: l
                }, this.constraints[a])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        We(a=>{
            if (!ko(a, t, null))
                return;
            const s = this.getAxisMotionValue(a)
              , {min: l, max: u} = this.constraints[a];
            s.set(X(l, u, i[a]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        n3.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = wt(t, "pointerdown", l=>{
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(l)
        }
        )
          , r = ()=>{
            const {dragConstraints: l} = this.getProps();
            rr(l) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const a = gt(window, "resize", ()=>this.scalePositionWithinConstraints())
          , s = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u})=>{
            this.isDragging && u && (We(c=>{
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += l[c].translate,
                f.set(f.get() + l[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            a(),
            n(),
            o(),
            s && s()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: a=hu, dragMomentum: s=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: a,
            dragMomentum: s
        }
    }
}
function ko(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function i3(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class o3 extends fn {
    constructor(t) {
        super(t),
        this.removeGroupControls = ke,
        this.removeListeners = ke,
        this.controls = new r3(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ke
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Mh = e=>(t,n)=>{
    e && U.postRender(()=>e(t, n))
}
;
class a3 extends fn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ke
    }
    onPointerDown(t) {
        this.session = new ug(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: mg(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Mh(t),
            onStart: Mh(n),
            onMove: r,
            onEnd: (o,a)=>{
                delete this.session,
                i && U.postRender(()=>i(o, a))
            }
        }
    }
    mount() {
        this.removePointerDownListener = wt(this.node.current, "pointerdown", t=>this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function s3() {
    const e = P.useContext(bc);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = P.useId();
    return P.useEffect(()=>r(i), []),
    !t && n ? [!1, ()=>n && n(i)] : [!0]
}
const Fo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function _h(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Dr = {
    correct: (e,t)=>{
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (j.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = _h(e, t.target.x)
          , r = _h(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , l3 = {
    correct: (e,{treeScale: t, projectionDelta: n})=>{
        const r = e
          , i = sn.parse(e);
        if (i.length > 5)
            return r;
        const o = sn.createTransformer(e)
          , a = typeof i[0] != "number" ? 1 : 0
          , s = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + a] /= s,
        i[1 + a] /= l;
        const u = X(s, l, .5);
        return typeof i[2 + a] == "number" && (i[2 + a] /= u),
        typeof i[3 + a] == "number" && (i[3 + a] /= u),
        o(i)
    }
};
class u3 extends P.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        lS(c3),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        Fo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , a = r.projection;
        return a && (a.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? a.promote() : a.relegate() || U.postRender(()=>{
            const s = a.getStack();
            (!s || !s.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        Lc.postRender(()=>{
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function vg(e) {
    const [t,n] = s3()
      , r = P.useContext(uv);
    return w.jsx(u3, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: P.useContext(cv),
        isPresent: t,
        safeToRemove: n
    })
}
const c3 = {
    borderRadius: {
        ...Dr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Dr,
    borderTopRightRadius: Dr,
    borderBottomLeftRadius: Dr,
    borderBottomRightRadius: Dr,
    boxShadow: l3
}
  , gg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , f3 = gg.length
  , Ih = e=>typeof e == "string" ? parseFloat(e) : e
  , Vh = e=>typeof e == "number" || j.test(e);
function d3(e, t, n, r, i, o) {
    i ? (e.opacity = X(0, n.opacity !== void 0 ? n.opacity : 1, h3(r)),
    e.opacityExit = X(t.opacity !== void 0 ? t.opacity : 1, 0, p3(r))) : o && (e.opacity = X(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let a = 0; a < f3; a++) {
        const s = `border${gg[a]}Radius`;
        let l = Dh(t, s)
          , u = Dh(n, s);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Vh(l) === Vh(u) ? (e[s] = Math.max(X(Ih(l), Ih(u), r), 0),
        (dt.test(u) || dt.test(l)) && (e[s] += "%")) : e[s] = u
    }
    (t.rotate || n.rotate) && (e.rotate = X(t.rotate || 0, n.rotate || 0, r))
}
function Dh(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const h3 = yg(0, .5, Jv)
  , p3 = yg(.5, .95, ke);
function yg(e, t, n) {
    return r=>r < e ? 0 : r > t ? 1 : n(Ri(e, t, r))
}
function Fh(e, t) {
    e.min = t.min,
    e.max = t.max
}
function $e(e, t) {
    Fh(e.x, t.x),
    Fh(e.y, t.y)
}
function zh(e, t, n, r, i) {
    return e -= t,
    e = ka(e, 1 / n, r),
    i !== void 0 && (e = ka(e, 1 / i, r)),
    e
}
function m3(e, t=0, n=1, r=.5, i, o=e, a=e) {
    if (dt.test(t) && (t = parseFloat(t),
    t = X(a.min, a.max, t / 100) - a.min),
    typeof t != "number")
        return;
    let s = X(o.min, o.max, r);
    e === o && (s -= t),
    e.min = zh(e.min, t, n, s, i),
    e.max = zh(e.max, t, n, s, i)
}
function Bh(e, t, [n,r,i], o, a) {
    m3(e, t[n], t[r], t[i], t.scale, o, a)
}
const v3 = ["x", "scaleX", "originX"]
  , g3 = ["y", "scaleY", "originY"];
function Uh(e, t, n, r) {
    Bh(e.x, t, v3, n ? n.x : void 0, r ? r.x : void 0),
    Bh(e.y, t, g3, n ? n.y : void 0, r ? r.y : void 0)
}
function $h(e) {
    return e.translate === 0 && e.scale === 1
}
function wg(e) {
    return $h(e.x) && $h(e.y)
}
function y3(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function xg(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function Wh(e) {
    return Fe(e.x) / Fe(e.y)
}
class w3 {
    constructor() {
        this.members = []
    }
    add(t) {
        qc(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Jc(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i=>t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t=>{
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t=>{
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Hh(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , a = (n == null ? void 0 : n.z) || 0;
    if ((i || o || a) && (r = `translate3d(${i}px, ${o}px, ${a}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: v, skewY: g} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        v && (r += `skewX(${v}deg) `),
        g && (r += `skewY(${g}deg) `)
    }
    const s = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`),
    r || "none"
}
const x3 = (e,t)=>e.depth - t.depth;
class S3 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        qc(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Jc(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(x3),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function k3(e, t) {
    const n = Jt.now()
      , r = ({timestamp: i})=>{
        const o = i - n;
        o >= t && (Nt(r),
        e(o - t))
    }
    ;
    return U.read(r, !0),
    ()=>Nt(r)
}
function C3(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function P3(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function T3(e, t, n) {
    const r = Se(e) ? e : Oi(e);
    return r.start(Zc("", r, t, n)),
    r.animation
}
const $s = ["", "X", "Y", "Z"]
  , E3 = {
    visibility: "hidden"
}
  , Kh = 1e3;
let b3 = 0;
const xn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Ws(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function Sg(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return !1;
    const {visualElement: t} = e.options;
    return t ? ag(t) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? Sg(e.parent) : !1 : !1
}
function kg({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(a={}, s=t == null ? void 0 : t()) {
            this.id = b3++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                this.projectionUpdateScheduled = !1,
                xn.totalNodes = xn.resolvedTargetDeltas = xn.recalculatedProjection = 0,
                this.nodes.forEach(L3),
                this.nodes.forEach(_3),
                this.nodes.forEach(I3),
                this.nodes.forEach(R3),
                C3(xn)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = a,
            this.root = s ? s.root || s : this,
            this.path = s ? [...s.path, s] : [],
            this.parent = s,
            this.depth = s ? s.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new S3)
        }
        addEventListener(a, s) {
            return this.eventHandlers.has(a) || this.eventHandlers.set(a, new ef),
            this.eventHandlers.get(a).add(s)
        }
        notifyListeners(a, ...s) {
            const l = this.eventHandlers.get(a);
            l && l.notify(...s)
        }
        hasListeners(a) {
            return this.eventHandlers.has(a)
        }
        mount(a, s=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = P3(a),
            this.instance = a;
            const {layoutId: l, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(a),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            s && (u || l) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const d = ()=>this.root.updateBlockedByResize = !1;
                e(a, ()=>{
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = k3(d, 250),
                    Fo.hasAnimatedSinceResize && (Fo.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Gh))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: v, layout: g})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const y = this.options.transition || c.getDefaultTransition() || B3
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: p} = c.getProps()
                  , h = !this.targetLayout || !xg(this.targetLayout, g) || v
                  , m = !d && v;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, m);
                    const x = {
                        ...Uc(y, "layout"),
                        onPlay: S,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0,
                    x.type = !1),
                    this.startAnimation(x)
                } else
                    d || Gh(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const a = this.getStack();
            a && a.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Nt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(V3),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: a} = this.options;
            return a && a.getProps().transformTemplate
        }
        willUpdate(a=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.HandoffCancelAllAnimations && Sg(this) && window.HandoffCancelAllAnimations(),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: s, layout: l} = this.options;
            if (s === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            a && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Yh);
                return
            }
            this.isUpdating || this.nodes.forEach(j3),
            this.isUpdating = !1,
            this.nodes.forEach(M3),
            this.nodes.forEach(A3),
            this.nodes.forEach(N3),
            this.clearAllSnapshots();
            const s = Jt.now();
            pe.delta = an(0, 1e3 / 60, s - pe.timestamp),
            pe.timestamp = s,
            pe.isProcessing = !0,
            js.update.process(pe),
            js.preRender.process(pe),
            js.render.process(pe),
            pe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Lc.read(()=>this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(O3),
            this.sharedNodes.forEach(D3)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            U.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            U.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const a = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ne(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: s} = this.options;
            s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0)
        }
        updateScroll(a="measure") {
            let s = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1),
            s && (this.scroll = {
                animationId: this.root.animationId,
                phase: a,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const a = this.isLayoutDirty || this.shouldResetTransform
              , s = this.projectionDelta && !wg(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            a && (s || wn(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(a=!0) {
            const s = this.measurePageBox();
            let l = this.removeElementScroll(s);
            return a && (l = this.removeTransform(l)),
            U3(l),
            {
                animationId: this.root.animationId,
                measuredBox: s,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: a} = this.options;
            if (!a)
                return ne();
            const s = a.measureViewportBox()
              , {scroll: l} = this.root;
            return l && (Dt(s.x, l.offset.x),
            Dt(s.y, l.offset.y)),
            s
        }
        removeElementScroll(a) {
            const s = ne();
            $e(s, a);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l]
                  , {scroll: c, options: f} = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        $e(s, a);
                        const {scroll: d} = this.root;
                        d && (Dt(s.x, -d.offset.x),
                        Dt(s.y, -d.offset.y))
                    }
                    Dt(s.x, c.offset.x),
                    Dt(s.y, c.offset.y)
                }
            }
            return s
        }
        applyTransform(a, s=!1) {
            const l = ne();
            $e(l, a);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !s && c.options.layoutScroll && c.scroll && c !== c.root && ar(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                wn(c.latestValues) && ar(l, c.latestValues)
            }
            return wn(this.latestValues) && ar(l, this.latestValues),
            l
        }
        removeTransform(a) {
            const s = ne();
            $e(s, a);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !wn(u.latestValues))
                    continue;
                pu(u.latestValues) && u.updateSnapshot();
                const c = ne()
                  , f = u.measurePageBox();
                $e(c, f),
                Uh(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return wn(this.latestValues) && Uh(s, this.latestValues),
            s
        }
        setTargetDelta(a) {
            this.targetDelta = a,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(a) {
            this.options = {
                ...this.options,
                ...a,
                crossfade: a.crossfade !== void 0 ? a.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== pe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(a=!1) {
            var s;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(a || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = pe.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const v = this.getClosestProjectingParent();
                    v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ne(),
                    this.relativeTargetOrigin = ne(),
                    oi(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox),
                    $e(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ne(),
                    this.targetWithTransforms = ne()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    $5(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : $e(this.target, this.layout.layoutBox),
                    hg(this.target, this.targetDelta)) : $e(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const v = this.getClosestProjectingParent();
                        v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ne(),
                        this.relativeTargetOrigin = ne(),
                        oi(this.relativeTargetOrigin, this.target, v.target),
                        $e(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    xn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || pu(this.parent.latestValues) || dg(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var a;
            const s = this.getLead()
              , l = !!this.resumingFrom || this !== s;
            let u = !0;
            if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (u = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === pe.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            $e(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , v = this.treeScale.y;
            q5(this.layoutCorrected, this.treeScale, this.path, l),
            s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox,
            s.targetWithTransforms = ne());
            const {target: g} = s;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = or(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = or(),
            this.projectionDeltaWithTransform = or());
            const y = this.projectionTransform;
            ii(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
            this.projectionTransform = Hh(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== y || this.treeScale.x !== d || this.treeScale.y !== v) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", g)),
            xn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(a=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            a) {
                const s = this.getStack();
                s && s.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(a, s=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = or();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !s;
            const d = ne()
              , v = l ? l.source : void 0
              , g = this.layout ? this.layout.source : void 0
              , y = v !== g
              , S = this.getStack()
              , p = !S || S.members.length <= 1
              , h = !!(y && !p && this.options.crossfade === !0 && !this.path.some(z3));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = x=>{
                const k = x / 1e3;
                Qh(f.x, a.x, k),
                Qh(f.y, a.y, k),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (oi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                F3(this.relativeTarget, this.relativeTargetOrigin, d, k),
                m && y3(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = ne()),
                $e(m, this.relativeTarget)),
                y && (this.animationValues = c,
                d3(c, u, this.latestValues, k, h, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = k
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(a) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Nt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = U.update(()=>{
                Fo.hasAnimatedSinceResize = !0,
                this.currentAnimation = T3(0, Kh, {
                    ...a,
                    onUpdate: s=>{
                        this.mixTargetDelta(s),
                        a.onUpdate && a.onUpdate(s)
                    }
                    ,
                    onComplete: ()=>{
                        a.onComplete && a.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const a = this.getStack();
            a && a.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Kh),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const a = this.getLead();
            let {targetWithTransforms: s, target: l, layout: u, latestValues: c} = a;
            if (!(!s || !l || !u)) {
                if (this !== a && this.layout && u && Cg(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || ne();
                    const f = Fe(this.layout.layoutBox.x);
                    l.x.min = a.target.x.min,
                    l.x.max = l.x.min + f;
                    const d = Fe(this.layout.layoutBox.y);
                    l.y.min = a.target.y.min,
                    l.y.max = l.y.min + d
                }
                $e(s, l),
                ar(s, c),
                ii(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
            }
        }
        registerSharedNode(a, s) {
            this.sharedNodes.has(a) || this.sharedNodes.set(a, new w3),
            this.sharedNodes.get(a).add(s);
            const u = s.options.initialPromotionConfig;
            s.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(s) : void 0
            })
        }
        isLead() {
            const a = this.getStack();
            return a ? a.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: s} = this.options;
            return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: s} = this.options;
            return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: a} = this.options;
            if (a)
                return this.root.sharedNodes.get(a)
        }
        promote({needsReset: a, transition: s, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            a && (this.projectionDelta = void 0,
            this.needsReset = !0),
            s && this.setOptions({
                transition: s
            })
        }
        relegate() {
            const a = this.getStack();
            return a ? a.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: a} = this.options;
            if (!a)
                return;
            let s = !1;
            const {latestValues: l} = a;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (s = !0),
            !s)
                return;
            const u = {};
            l.z && Ws("z", a, u, this.animationValues);
            for (let c = 0; c < $s.length; c++)
                Ws(`rotate${$s[c]}`, a, u, this.animationValues),
                Ws(`skew${$s[c]}`, a, u, this.animationValues);
            a.render();
            for (const c in u)
                a.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            a.scheduleRender()
        }
        getProjectionStyles(a) {
            var s, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return E3;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = Vo(a == null ? void 0 : a.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                y.pointerEvents = Vo(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !wn(this.latestValues) && (y.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                y
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = Hh(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: v, y: g} = this.projectionDelta;
            u.transformOrigin = `${v.origin * 100}% ${g.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (l = (s = d.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const y in va) {
                if (d[y] === void 0)
                    continue;
                const {correct: S, applyTo: p} = va[y]
                  , h = u.transform === "none" ? d[y] : S(d[y], f);
                if (p) {
                    const m = p.length;
                    for (let x = 0; x < m; x++)
                        u[p[x]] = h
                } else
                    u[y] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? Vo(a == null ? void 0 : a.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(a=>{
                var s;
                return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop()
            }
            ),
            this.root.nodes.forEach(Yh),
            this.root.sharedNodes.clear()
        }
    }
}
function A3(e) {
    e.updateLayout()
}
function N3(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , a = n.source !== e.layout.source;
        o === "size" ? We(f=>{
            const d = a ? n.measuredBox[f] : n.layoutBox[f]
              , v = Fe(d);
            d.min = r[f].min,
            d.max = d.min + v
        }
        ) : Cg(o, n.layoutBox, r) && We(f=>{
            const d = a ? n.measuredBox[f] : n.layoutBox[f]
              , v = Fe(r[f]);
            d.max = d.min + v,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + v)
        }
        );
        const s = or();
        ii(s, r, n.layoutBox);
        const l = or();
        a ? ii(l, e.applyTransform(i, !0), n.measuredBox) : ii(l, r, n.layoutBox);
        const u = !wg(s);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: v} = f;
                if (d && v) {
                    const g = ne();
                    oi(g, n.layoutBox, d.layoutBox);
                    const y = ne();
                    oi(y, r, v.layoutBox),
                    xg(g, y) || (c = !0),
                    f.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = g,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: s,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function L3(e) {
    xn.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function R3(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function O3(e) {
    e.clearSnapshot()
}
function Yh(e) {
    e.clearMeasurements()
}
function j3(e) {
    e.isLayoutDirty = !1
}
function M3(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Gh(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function _3(e) {
    e.resolveTargetDelta()
}
function I3(e) {
    e.calcProjection()
}
function V3(e) {
    e.resetSkewAndRotation()
}
function D3(e) {
    e.removeLeadSnapshot()
}
function Qh(e, t, n) {
    e.translate = X(t.translate, 0, n),
    e.scale = X(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Xh(e, t, n, r) {
    e.min = X(t.min, n.min, r),
    e.max = X(t.max, n.max, r)
}
function F3(e, t, n, r) {
    Xh(e.x, t.x, n.x, r),
    Xh(e.y, t.y, n.y, r)
}
function z3(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const B3 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Zh = e=>typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , qh = Zh("applewebkit/") && !Zh("chrome/") ? Math.round : ke;
function Jh(e) {
    e.min = qh(e.min),
    e.max = qh(e.max)
}
function U3(e) {
    Jh(e.x),
    Jh(e.y)
}
function Cg(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !du(Wh(t), Wh(n), .2)
}
const $3 = kg({
    attachResizeListener: (e,t)=>gt(e, "resize", t),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , Hs = {
    current: void 0
}
  , Pg = kg({
    measureScroll: e=>({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: ()=>{
        if (!Hs.current) {
            const e = new $3({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Hs.current = e
        }
        return Hs.current
    }
    ,
    resetTransform: (e,t)=>{
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e=>window.getComputedStyle(e).position === "fixed"
})
  , W3 = {
    pan: {
        Feature: a3
    },
    drag: {
        Feature: o3,
        ProjectionNode: Pg,
        MeasureLayout: vg
    }
}
  , vu = {
    current: null
}
  , Tg = {
    current: !1
};
function H3() {
    if (Tg.current = !0,
    !!Ac)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = ()=>vu.current = e.matches;
            e.addListener(t),
            t()
        } else
            vu.current = !1
}
function K3(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const o = t[i]
          , a = n[i];
        if (Se(o))
            e.addValue(i, o),
            Sa(r) && r.add(i);
        else if (Se(a))
            e.addValue(i, Oi(o, {
                owner: e
            })),
            Sa(r) && r.remove(i);
        else if (a !== o)
            if (e.hasValue(i)) {
                const s = e.getValue(i);
                s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o)
            } else {
                const s = e.getStaticValue(i);
                e.addValue(i, Oi(s !== void 0 ? s : o, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const ep = new WeakMap
  , Y3 = [...Mv, we, sn]
  , G3 = e=>Y3.find(jv(e))
  , Eg = Object.keys(Ni)
  , Q3 = Eg.length
  , tp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , X3 = Oc.length;
function bg(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : bg(e.parent)
}
class Z3 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: a}, s={}) {
        this.resolveKeyframes = (d,v,g,y)=>new this.KeyframeResolver(d,v,g,y,this),
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = $c,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = ()=>U.render(this.render, !1, !0);
        const {latestValues: l, renderState: u} = a;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = s,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = Qa(n),
        this.isVariantNode = lv(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: c, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const d in f) {
            const v = f[d];
            l[d] !== void 0 && Se(v) && (v.set(l[d], !1),
            Sa(c) && c.add(d))
        }
    }
    mount(t) {
        this.current = t,
        ep.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n,r)=>this.bindToMotionValue(r, n)),
        Tg.current || H3(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : vu.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        ep.delete(this.current),
        this.projection && this.projection.unmount(),
        Nt(this.notifyUpdate),
        Nt(this.render),
        this.valueSubscriptions.forEach(n=>n()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features)
            (t = this.features[n]) === null || t === void 0 || t.unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = Fn.has(t)
          , i = n.on("change", a=>{
            this.latestValues[t] = a,
            this.props.onUpdate && U.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, ()=>{
            i(),
            o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, i, o) {
        let a, s;
        for (let l = 0; l < Q3; l++) {
            const u = Eg[l]
              , {isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: v} = Ni[u];
            d && (a = d),
            c(n) && (!this.features[u] && f && (this.features[u] = new f(this)),
            v && (s = v))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && a) {
            const {layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: d, layoutRoot: v} = n;
            this.projection = new a(this.latestValues,n["data-framer-portal-id"] ? void 0 : bg(this.parent)),
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || f && rr(f),
                visualElement: this,
                scheduleRender: ()=>this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: o,
                layoutScroll: d,
                layoutRoot: v
            })
        }
        return s
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < tp.length; r++) {
            const i = tp[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , a = t[o];
            a && (this.propEventSubscriptions[i] = this.on(i, a))
        }
        this.prevMotionValues = K3(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < X3; r++) {
            const i = Oc[r]
              , o = this.props[i];
            (Ai(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            ()=>n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Oi(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Rv(i) || Lv(i)) ? i = parseFloat(i) : !G3(i) && sn.test(n) && (i = Uv(t, n)),
        this.setBaseTarget(t, Se(i) ? i.get() : i)),
        Se(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const a = Bc(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            a && (i = a[t])
        }
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Se(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new ef),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Ag extends Z3 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = $v
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
}
function q3(e) {
    return window.getComputedStyle(e)
}
class J3 extends Ag {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (Fn.has(n)) {
            const r = Hc(n);
            return r && r.default || 0
        } else {
            const r = q3(t)
              , i = (hv(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return pg(t, n)
    }
    build(t, n, r, i) {
        Ic(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return zc(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Se(t) && (this.childSubscription = t.on("change", n=>{
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, i) {
        yv(t, n, r, i)
    }
}
class eC extends Ag {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Fn.has(n)) {
            const r = Hc(n);
            return r && r.default || 0
        }
        return n = wv.has(n) ? n : Nc(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ne()
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Sv(t, n, r)
    }
    build(t, n, r, i) {
        Dc(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        xv(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Fc(t.tagName),
        super.mount(t)
    }
}
const tC = (e,t)=>jc(e) ? new eC(t,{
    enableHardwareAcceleration: !1
}) : new J3(t,{
    allowProjection: e !== P.Fragment,
    enableHardwareAcceleration: !0
})
  , nC = {
    layout: {
        ProjectionNode: Pg,
        MeasureLayout: vg
    }
}
  , rC = {
    ...F5,
    ...XS,
    ...W3,
    ...nC
}
  , F = aS((e,t)=>VS(e, t, rC, tC));
function iC(e, t, n) {
    return typeof e == "string" ? e = document.querySelectorAll(e) : e instanceof Element && (e = [e]),
    Array.from(e || [])
}
function oC(e) {
    e.values.forEach(t=>t.stop())
}
function gu(e, t) {
    [...t].reverse().forEach(r=>{
        const i = e.getVariant(r);
        i && tf(e, i),
        e.variantChildren && e.variantChildren.forEach(o=>{
            gu(o, t)
        }
        )
    }
    )
}
function aC(e, t) {
    if (Array.isArray(t))
        return gu(e, t);
    if (typeof t == "string")
        return gu(e, [t]);
    tf(e, t)
}
function sC() {
    const e = new Set
      , t = {
        subscribe(n) {
            return e.add(n),
            ()=>void e.delete(n)
        },
        start(n, r) {
            const i = [];
            return e.forEach(o=>{
                i.push(lg(o, n, {
                    transitionOverride: r
                }))
            }
            ),
            Promise.all(i)
        },
        set(n) {
            return e.forEach(r=>{
                aC(r, n)
            }
            )
        },
        stop() {
            e.forEach(n=>{
                oC(n)
            }
            )
        },
        mount() {
            return ()=>{
                t.stop()
            }
        }
    };
    return t
}
function lC() {
    const e = kv(sC);
    return iv(e.mount, []),
    e
}
const uC = lC
  , cC = {
    some: 0,
    all: 1
};
function fC(e, t, {root: n, margin: r, amount: i="some"}={}) {
    const o = iC(e)
      , a = new WeakMap
      , s = u=>{
        u.forEach(c=>{
            const f = a.get(c.target);
            if (c.isIntersecting !== !!f)
                if (c.isIntersecting) {
                    const d = t(c);
                    typeof d == "function" ? a.set(c.target, d) : l.unobserve(c.target)
                } else
                    f && (f(c),
                    a.delete(c.target))
        }
        )
    }
      , l = new IntersectionObserver(s,{
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : cC[i]
    });
    return o.forEach(u=>l.observe(u)),
    ()=>l.disconnect()
}
function dC(e, {root: t, margin: n, amount: r, once: i=!1}={}) {
    const [o,a] = P.useState(!1);
    return P.useEffect(()=>{
        if (!e.current || i && o)
            return;
        const s = ()=>(a(!0),
        i ? void 0 : ()=>a(!1))
          , l = {
            root: t && t.current || void 0,
            margin: n,
            amount: r
        };
        return fC(e.current, s, l)
    }
    , [t, e, n, i, r]),
    o
}
const hC = ()=>{
    const [e,t] = P.useState(!1)
      , [n,r] = P.useState(!1)
      , i = P.useRef(null)
      , o = P.useRef(null)
      , a = dC(o, {
        once: !0
    })
      , s = uC();
    P.useEffect(()=>{
        const u = c=>{
            i.current && !i.current.contains(c.target) && r(!1)
        }
        ;
        return document.addEventListener("mousedown", u),
        ()=>{
            document.removeEventListener("mousedown", u)
        }
    }
    , [i]),
    P.useEffect(()=>{
        a && (async()=>{
            await s.start("visible"),
            s.start({
                y: [0],
                transition: {
                    duration: 1
                }
            })
        }
        )()
    }
    , [a, s]);
    const l = ()=>{
        r(!n)
    }
    ;
    return w.jsxs("div", {
        ref: o,
        children: [w.jsxs(F.header, {
            initial: "hidden",
            animate: s,
            variants: {
                hidden: {
                    opacity: 0,
                    y: -100
                },
                visible: {
                    opacity: 1,
                    y: 0
                }
            },
            transition: {
                duration: 1,
                delay: .8
            },
            className: "d-flex justify-content-center align-items-center",
            children: [w.jsx("img", {
                src: Kd,
                alt: "logo",
                className: "me-3 cursor-pointer"
            }), w.jsxs("div", {
                className: `outer-links d-flex align-items-center ${e ? "show" : ""}`,
                children: [w.jsx("span", {
                    onClick: ()=>t(!1),
                    children: w.jsx("a", {
                        href: "#home",
                        children: "Home"
                    })
                }), w.jsx("span", {
                    onClick: ()=>t(!1),
                    children: w.jsx("a", {
                        href: "#about",
                        children: "About"
                    })
                }), w.jsx("span", {
                    onClick: ()=>t(!1),
                    children: w.jsx("a", {
                        href: "#tech",
                        children: "Technology"
                    })
                }), w.jsx("span", {
                    onClick: ()=>t(!1),
                    children: w.jsx("a", {
                        href: "#validators",
                        children: "Validators"
                    })
                }), w.jsx("span", {
                    onClick: ()=>t(!1),
                    children: w.jsx("a", {
                        href: "#roadMap",
                        children: "Roadmap"
                    })
                }), w.jsxs("div", {
                    style: {
                        position: "relative"
                    },
                    children: [w.jsxs("button", {
                        onClick: l,
                        className: "white-btn ms-3",
                        children: ["Whitepaper", w.jsx("span", {
                            style: {
                                marginLeft: "20px",
                                border: "none"
                            },
                            children: w.jsx(Ec, {
                                icon: Fx
                            })
                        })]
                    }), n && w.jsxs("div", {
                        ref: i,
                        className: "dropdown-menu ms-3",
                        children: [w.jsx("a", {
                            href: "https://drive.google.com/file/d/1ctwwrnOnRMxqoymP8yeO3qlu2vUTHOfK/view",
                            target: "_blank",
                            children: "Whitepaper "
                        }), w.jsx("a", {
                            href: "https://drive.google.com/file/d/1_P7pXOfPpdbNcCurlZp8YwNceNtF3z_e/view?usp=sharing",
                            target: "_blank",
                            children: "Supplement Whitepaper "
                        })]
                    })]
                }), w.jsx("img", {
                    src: Yx,
                    alt: "close",
                    className: "close",
                    onClick: ()=>t(!1)
                })]
            }), w.jsx("img", {
                src: Kx,
                alt: "mobileMenu",
                className: "mobile-menu",
                onClick: ()=>t(!0)
            })]
        }), w.jsxs("div", {
            className: "inner-container",
            children: [w.jsxs("section", {
                className: "home",
                id: "home",
                children: [w.jsx(F.div, {
                    initial: "hidden",
                    animate: s,
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 50
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    },
                    transition: {
                        duration: 1,
                        delay: 0
                    },
                    className: "main-title",
                    children: "A Quantum Secure & AI Enabled Privacy Layer 1"
                }), w.jsx(F.div, {
                    initial: "hidden",
                    animate: s,
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 50
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    },
                    transition: {
                        duration: 1,
                        delay: .5
                    },
                    className: "sub-title",
                    children: "Secure and private transactions through advanced cryptographic techniques"
                }), w.jsxs(F.div, {
                    initial: "hidden",
                    animate: s,
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 50
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    },
                    transition: {
                        duration: 1,
                        delay: .8
                    },
                    className: "d-flex justify-content-center align-items-center gap-3",
                    children: [w.jsx("a", {
                        href: "https://quantumcloakscan.io/",
                        target: "_blank",
                        className: "customBtn",
                        children: "Testnet"
                    }), w.jsx("a", {
                        href: "https://drive.google.com/file/d/1ctwwrnOnRMxqoymP8yeO3qlu2vUTHOfK/view",
                        target: "_blank",
                        className: "customBtn",
                        children: "WhitePaper"
                    })]
                }), w.jsx(F.img, {
                    initial: "hidden",
                    animate: s,
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 0
                        },
                        visible: {
                            opacity: 1,
                            y: 0
                        }
                    },
                    transition: {
                        duration: 1,
                        delay: 1
                    },
                    src: zx,
                    alt: "mainHome",
                    className: "main-home-img"
                })]
            }), w.jsxs("section", {
                className: "paradigm text-center",
                id: "about",
                children: [w.jsx("img", {
                    className: "w-100 horizontal-line",
                    src: Yd,
                    alt: "horizontalLine"
                }), w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        x: "0"
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "main-title",
                    children: "A New Paradigm"
                }), w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        x: "-50%"
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 2
                    },
                    viewport: {
                        once: !0
                    },
                    className: "sub-title",
                    children: "Quantum Cloak is a Layer 1 blockchain designed to provide the highest level of security and privacy. Utilizing advanced cryptographic techniques, Quantum Cloak addresses the challenges brought by quantum computing and the growing need for privacy in decentralized systems. Our goal is straightforward: develop a secure, scalable, and privacy-focused blockchain that enables individuals and businesses to conduct digital transactions with complete assurance."
                }), w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        x: "50%"
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "sub-title",
                    children: "Quantum Cloak incorporates technologies such as quantum-resistant cryptography, zk-SNARKs, and Fully Homomorphic Encryption (FHE) to provide unmatched security and privacy. Our Quantum Secure Proof of Stake (QsPOS) consensus mechanism combines effectiveness with strong security."
                }), w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        x: "50%"
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "sub-title",
                    children: "CA : 0x22c158a3f3ea3419176c083aa11eb593e94965dc"
                }), w.jsx("img", {
                    className: "w-100 horizontal-line",
                    src: Yd,
                    alt: "horizontalLine"
                })]
            }), w.jsxs("section", {
                className: "qtc-stack",
                id: "tech",
                children: [w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "main-title",
                    children: "QTC Tech Stack"
                }), w.jsxs("div", {
                    className: "box",
                    children: [w.jsx(F.img, {
                        initial: {
                            opacity: 0,
                            scale: .5
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        src: Rs,
                        alt: "loopBlock",
                        className: "img-loop"
                    }), w.jsx(F.div, {
                        initial: {
                            opacity: 0,
                            x: 150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        className: "box-title",
                        children: "Quantum-Resistant Cryptography"
                    }), w.jsx(F.div, {
                        initial: {
                            opacity: 0,
                            x: 150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        className: "sub-title",
                        children: "Quantum Cloak uses lattice-based cryptographic algorithms like the Shortest Vector Problem (SVP) and Learning With Errors (LWE) to protect against quantum computing attacks. These algorithms are too complex for classical and quantum computers to solve, ensuring strong protection for our network’s transactions and data."
                    })]
                }), w.jsxs("div", {
                    className: "box right",
                    children: [w.jsx(F.img, {
                        initial: {
                            opacity: 0,
                            scale: .5
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        src: Rs,
                        alt: "loopBlock",
                        className: "img-loop"
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: -150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        className: "box-title",
                        children: ["Privacy-Preserving ", w.jsx("br", {}), " Techniques"]
                    }), w.jsx(F.div, {
                        initial: {
                            opacity: 0,
                            x: -150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        className: "sub-title",
                        children: "• zk-SNARKs: These cryptographic proofs validate transactions without revealing underlying data, ensuring privacy and security on the blockchain."
                    }), w.jsx(F.div, {
                        initial: {
                            opacity: 0,
                            x: -150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        className: "sub-title mt-4",
                        children: "• Fully Homomorphic Encryption (FHE): FHE allows computations on encrypted data without needing to decrypt it, keeping user data confidential during processing."
                    })]
                }), w.jsxs("div", {
                    className: "box",
                    children: [w.jsx(F.img, {
                        initial: {
                            opacity: 0,
                            scale: .5
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        src: Rs,
                        alt: "loopBlock",
                        className: "img-loop"
                    }), w.jsx(F.div, {
                        initial: {
                            opacity: 0,
                            x: 150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        className: "box-title",
                        children: "Quantum Secure Proof of Stake (QsPOS)"
                    }), w.jsx(F.div, {
                        initial: {
                            opacity: 0,
                            x: 150
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        className: "sub-title",
                        children: "Our QsPOS consensus mechanism boosts security and efficiency by requiring validators to stake QTC tokens. It maintains network integrity with a fair validator selection process, efficient block proposal and validation, and penalties for malicious behavior"
                    })]
                })]
            }), w.jsxs("section", {
                className: "cloak",
                children: [w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1,
                        delay: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "main-title",
                    children: "The settlement layer of the future"
                }), w.jsxs("div", {
                    className: "d-grid",
                    children: [w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "-100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        viewport: {
                            once: !0
                        },
                        className: "card-box",
                        children: [w.jsx("div", {
                            className: "title",
                            children: "[1] Unmatched Security"
                        }), w.jsx("div", {
                            className: "content",
                            children: "Our use of quantum-resistant cryptography ensures that Quantum Cloak remains secure against future quantum threats. By implementing lattice-based algorithms, we provide a level of security that is designed to withstand even the most advanced quantum attacks."
                        })]
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        viewport: {
                            once: !0
                        },
                        className: "card-box",
                        children: [w.jsx("div", {
                            className: "title",
                            children: "[2] Advanced Privacy"
                        }), w.jsx("div", {
                            className: "content",
                            children: "Quantum Cloak prioritizes user privacy through the integration of zk-SNARKs and FHE. These technologies enable private transactions and computations, ensuring that sensitive information is never exposed."
                        })]
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "-100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        viewport: {
                            once: !0
                        },
                        className: "card-box",
                        children: [w.jsx("div", {
                            className: "title",
                            children: "[3] Innovative Consensus Mechanism"
                        }), w.jsx("div", {
                            className: "content",
                            children: "Our Quantum Secure Proof of Stake (QsPOS) consensus mechanism combines the best aspects of Proof of Stake with enhanced security features, making our network both efficient and robust against attacks."
                        })]
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1.5
                        },
                        viewport: {
                            once: !0
                        },
                        className: "card-box",
                        children: [w.jsx("div", {
                            className: "title",
                            children: "[4] Comprehensive Tokenomics"
                        }), w.jsx("div", {
                            className: "content",
                            children: "Our tokenomics model is designed to ensure the sustainable growth of the Quantum Cloak ecosystem. With a focus on rewarding validators, supporting development, and engaging the community, we aim to build a thriving and resilient network."
                        })]
                    })]
                }), w.jsxs(F.div, {
                    initial: {
                        opacity: 0,
                        y: "100%"
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "card-box last",
                    children: [w.jsx("div", {
                        className: "title",
                        children: "[5] Future-Proof Technology"
                    }), w.jsx("div", {
                        className: "content",
                        children: "Quantum Cloak is designed with the future in mind. Our roadmap includes the integration of AI-driven anomaly detection and optimization, ensuring that our blockchain remains at the forefront of technological innovation."
                    })]
                })]
            }), w.jsx(F.section, {
                initial: {
                    opacity: 0,
                    scale: .5
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: 1
                },
                viewport: {
                    once: !0
                },
                className: "validator",
                id: "validators",
                children: w.jsxs("div", {
                    className: "row align-items-center",
                    children: [w.jsx("div", {
                        className: "col-md-12 col-lg-7",
                        children: w.jsxs("div", {
                            className: "max-w-validator",
                            children: [w.jsx("div", {
                                className: "main-title",
                                children: "Become a Validator"
                            }), w.jsx("div", {
                                className: "sub-title",
                                children: "Run a master node and earn rewards by participating in securing the network. Help us maintain decentralization and network integrity."
                            }), w.jsx("button", {
                                className: "black-btn",
                                children: "Join Now"
                            })]
                        })
                    }), w.jsx("div", {
                        className: "col-md-12 col-lg-5",
                        children: w.jsx("div", {
                            className: "text-center text-lg-end",
                            children: w.jsx("img", {
                                src: Bx,
                                alt: "atoms",
                                className: "img-fluid"
                            })
                        })
                    })]
                })
            }), w.jsxs("section", {
                className: "road-map",
                id: "roadMap",
                children: [w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1
                    },
                    viewport: {
                        once: !0
                    },
                    className: "main-title",
                    children: "Our Roadmap"
                }), w.jsx(F.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 1,
                        delay: .3
                    },
                    viewport: {
                        once: !0
                    },
                    className: "sub-title",
                    children: "We are a driven team, committed to adaptability and experimentation. This is the ethos of the development and achievements of Quantum Cloak as we progress through the milestones outlined in our roadmap"
                }), w.jsxs("div", {
                    className: "border-box border-top-0 border-start-0 top-card pt-md-0",
                    children: [w.jsx("div", {
                        className: "triangle-outer top d-block d-md-none",
                        children: w.jsx("img", {
                            src: Os,
                            alt: "triangle",
                            className: "triangle-img"
                        })
                    }), w.jsx("div", {
                        className: "text-center d-block d-md-none my-5",
                        children: w.jsx("img", {
                            src: Bn,
                            alt: "verticalLine"
                        })
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "-100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        children: [w.jsx("div", {
                            className: "title",
                            children: "Research and Development"
                        }), w.jsxs("div", {
                            className: "content",
                            children: [w.jsx("div", {
                                children: "- Research quantum-resistant cryptographic algorithms."
                            }), w.jsx("div", {
                                children: "- Design the Quantum Secure Proof of Stake (QsPOS) consensus mechanism."
                            }), w.jsx("div", {
                                children: "- Develop the initial protocol architecture with zk-SNARKs."
                            }), w.jsx("div", {
                                children: "- Implement smart contracts for the privacy stablecoin (USDQ)."
                            }), w.jsx("div", {
                                children: "- Develop and deploy the bridge for wQTC."
                            }), w.jsx("div", {
                                children: "- Conduct internal security audits and peer reviews."
                            })]
                        })]
                    }), w.jsx("div", {
                        className: "triangle-outer top top d-none d-md-block",
                        children: w.jsx("img", {
                            src: Os,
                            alt: "triangle",
                            className: "triangle-img"
                        })
                    })]
                }), w.jsxs("div", {
                    className: "border-box border-top-0 border-end-0",
                    children: [w.jsx("div", {
                        className: "text-center d-block d-md-none my-5",
                        children: w.jsx("img", {
                            src: Bn,
                            alt: "verticalLine"
                        })
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        children: [w.jsx("div", {
                            className: "title",
                            children: "Testnet Launch"
                        }), w.jsxs("div", {
                            className: "content",
                            children: [w.jsx("div", {
                                children: "- Launch the testnet with a limited number of validators."
                            }), w.jsx("div", {
                                children: "- Test the QsPOS consensus mechanism and privacy-preserving transactions."
                            }), w.jsx("div", {
                                children: "- Add the initial liquidity pool on Ethereum for wQTC."
                            }), w.jsx("div", {
                                children: "- Refine the bridge for wQTC to QTC mainnet tokens."
                            }), w.jsx("div", {
                                children: "- Engage the developer community to resolve bugs."
                            })]
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "border-box border-top-0 border-start-0",
                    children: [w.jsx("div", {
                        className: "text-center d-block d-md-none my-5",
                        children: w.jsx("img", {
                            src: Bn,
                            alt: "verticalLine"
                        })
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "-100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        children: [w.jsx("div", {
                            className: "title",
                            children: "Mainnet Launch"
                        }), w.jsxs("div", {
                            className: "content",
                            children: [w.jsx("div", {
                                children: "- Transition from testnet to mainnet."
                            }), w.jsx("div", {
                                children: "- Enable staking and delegated staking functionalities."
                            }), w.jsx("div", {
                                children: "- Launch the privacy stablecoin (USDQ)."
                            }), w.jsx("div", {
                                children: "- Conduct third-party security audits."
                            })]
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "border-box border-top-0 border-end-0",
                    children: [w.jsx("div", {
                        className: "text-center d-block d-md-none my-5",
                        children: w.jsx("img", {
                            src: Bn,
                            alt: "verticalLine"
                        })
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        children: [w.jsx("div", {
                            className: "title",
                            children: "Ecosystem Expansion"
                        }), w.jsxs("div", {
                            className: "content",
                            children: [w.jsx("div", {
                                children: "- Develop and deploy decentralized applications (Dapps)."
                            }), w.jsx("div", {
                                children: "- Introduce sharding techniques for scalability."
                            }), w.jsx("div", {
                                children: "- Launch Layer 2 solutions to reduce on-chain congestion."
                            }), w.jsx("div", {
                                children: "- Expand the validator network and increase decentralization."
                            }), w.jsx("div", {
                                children: "- Implement additional privacy-preserving features."
                            })]
                        })]
                    })]
                }), w.jsxs("div", {
                    className: "border-box border-top-0 border-start-0 border-bottom-0 pb-md-0",
                    children: [w.jsx("div", {
                        className: "text-center d-block d-md-none my-5",
                        children: w.jsx("img", {
                            src: Bn,
                            alt: "verticalLine"
                        })
                    }), w.jsxs(F.div, {
                        initial: {
                            opacity: 0,
                            x: "-100%"
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1,
                            delay: .3
                        },
                        viewport: {
                            once: !0
                        },
                        children: [w.jsx("div", {
                            className: "title",
                            children: "Long-Term Growth"
                        }), w.jsxs("div", {
                            className: "content",
                            children: [w.jsx("div", {
                                children: "- Regularly update the protocol with advancements in cryptography and blockchain."
                            }), w.jsx("div", {
                                children: "- Enhance governance for more inclusive decision-making."
                            }), w.jsx("div", {
                                children: "- Expand partnerships with other projects and institutions."
                            }), w.jsx("div", {
                                children: "- Engage the community through educational initiatives and hackathons."
                            }), w.jsx("div", {
                                children: "- Monitor regulatory compliance and adapt to evolving standards."
                            })]
                        })]
                    }), w.jsx("div", {
                        className: "text-center d-block d-md-none my-5",
                        children: w.jsx("img", {
                            src: Bn,
                            alt: "verticalLine"
                        })
                    }), w.jsx("div", {
                        className: "triangle-outer",
                        children: w.jsx("img", {
                            src: Os,
                            alt: "triangle",
                            className: "triangle-img"
                        })
                    })]
                })]
            })]
        }), w.jsx("footer", {
            children: w.jsxs(F.div, {
                initial: {
                    opacity: 0,
                    y: "0%"
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1,
                    delay: .3
                },
                viewport: {
                    once: !0
                },
                children: [w.jsx("img", {
                    src: Kd,
                    alt: "logo",
                    className: "logo cursor-pointer"
                }), w.jsxs("div", {
                    className: "d-flex justify-content-center align-items-center gpa-4",
                    children: [w.jsx("a", {
                        href: "https://t.me/Quantum_Cloak",
                        children: w.jsx("img", {
                            className: "cursor-pointer",
                            src: $x,
                            alt: "telegram",
                            href: ""
                        })
                    }), w.jsx("a", {
                        href: "https://x.com/QTCloak",
                        children: w.jsx("img", {
                            className: "cursor-pointer",
                            src: Ux,
                            alt: "xTwitter"
                        })
                    }), w.jsx("a", {
                        href: "https://github.com/Quantum-Cloak",
                        children: w.jsx("img", {
                            className: "cursor-pointer",
                            src: Wx,
                            alt: "github"
                        })
                    }), w.jsx("img", {
                        className: "cursor-pointer",
                        src: Hx,
                        alt: "pieChart"
                    })]
                })]
            })
        })]
    })
}
;
function pC() {
    return P.useState(0),
    w.jsx(w.Fragment, {
        children: w.jsx(D2, {
            children: w.jsx(C0, {
                path: "/",
                element: w.jsx(hC, {})
            })
        })
    })
}
Ks.createRoot(document.getElementById("root")).render(w.jsx(Pa.StrictMode, {
    children: w.jsx(B2, {
        children: w.jsx(pC, {})
    })
}));
