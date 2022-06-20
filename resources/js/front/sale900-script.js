/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object),
        y = {}, m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }, x = function (e) {
            return null != e && e === e.window
        }, E = C.document, c = {type: !0, src: !0, nonce: !0, noModule: !0};

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    var f = "3.6.0", S = function (e, t) {
        return new S.fn.init(e, t)
    };

    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    S.fn = S.prototype = {
        jquery: f, constructor: S, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return S.each(this, e)
        }, map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        }, odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e, t, n) {
            b(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        }, guid: 1, support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0,
            r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) {
                return e === t && (l = !0), 0
            }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, oe = function () {
                T()
            }, ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {dir: "parentNode", next: "legend"});
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        for (e in d = se.support = {}, i = se.isXML = function (e) {
            var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), d.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ce(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
            }), ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, j = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }), C
        }, se.matches = function (e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
            if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
                N(t, !0)
            }
            return 0 < se(t, C, null, [e]).length
        }, se.contains = function (e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t)
        }, se.attr = function (e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function (e) {
            return (e + "").replace(re, ie)
        }, se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = se.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else while (t = e[r++]) n += o(t);
            return n
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [k, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: le(function (e) {
                    var r = [], i = [], s = f(e.replace($, "$1"));
                    return s[S] ? le(function (e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: le(function (t) {
                    return function (e) {
                        return 0 < se(t, e).length
                    }
                }), contains: le(function (t) {
                    return t = t.replace(te, ne), function (e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }), lang: le(function (n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return J.test(e.nodeName)
                }, input: function (e) {
                    return Q.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ve(function () {
                    return [0]
                }), last: ve(function (e, t) {
                    return [t - 1]
                }), eq: ve(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: ve(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: ve(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: ve(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

        function me() {
        }

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                return e === i
            }, a, !0), l = be(function (e) {
                return -1 < P(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                }
                c.push(t)
            }
            return we(c)
        }

        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++]) if (s(o, t || C, n)) {
                                r.push(o);
                                break
                            }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e)
        }
        return r
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }

    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    S.fn.extend({
        has: function (e) {
            var t = S(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return h(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        }, next: function (e) {
            return O(e, "nextSibling")
        }, prev: function (e) {
            return O(e, "previousSibling")
        }, nextAll: function (e) {
            return h(e, "nextSibling")
        }, prevAll: function (e) {
            return h(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function () {
            for (a = a || r.once, o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
            }
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
        }, f = {
            add: function () {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    S.each(e, function (e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), t && !i && c()), this
            }, remove: function () {
                return S.each(arguments, function (e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                }), this
            }, has: function (e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return a = u = [], s = t = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return a = u = [], t || i || (s = t = ""), this
            }, locked: function () {
                return !!a
            }, fireWith: function (e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, "catch": function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                }, s = {};
            return S.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }

    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(S(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, _ = /^-ms-/, z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }

    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }

    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
            } catch (e) {
            }
            Q.set(e, t, n)
        } else n = void 0;
        return n
    }

    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        }, data: function (e, t, n) {
            return Q.access(e, t, n)
        }, removeData: function (e, t) {
            Q.remove(e, t)
        }, _data: function (e, t, n) {
            return Y.access(e, t, n)
        }, _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) {
            return S.contains(e.ownerDocument, e)
        }, oe = {composed: !0};
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }

    S.fn.extend({
        show: function () {
            return le(this, !0)
        }, hide: function () {
            return le(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }

    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {
            }
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1, handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }

    S.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        }, special: {
            load: {noBubble: !0}, click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                }, trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                }, _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Se(this, e, Ce), !1
            }, trigger: function () {
                return Se(this, e), !0
            }, _default: function () {
                return !0
            }, delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return Ee(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    S.extend({
        htmlPrefilter: function (e) {
            return e
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]); else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        }, cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0
                }
                n[Q.expando] && (n[Q.expando] = void 0)
            }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        }, remove: function (e) {
            return Oe(this, e)
        }, text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        }, prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        }, html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return He(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, Me = function (e, t, n) {
        var r, i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.call(e), t) e.style[i] = o[i];
        return r
    }, Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    !function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), s
            }, scrollboxSize: function () {
                return e(), i
            }, reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1), n = Be.length;
            while (n--) if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }

    var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/,
        Ve = {position: "absolute", visibility: "hidden", display: "block"},
        Ge = {letterSpacing: "0", fontWeight: "400"};

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i,
            a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }

    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
                    return Je(e, u, n)
                })
            }, set: function (e, t, n) {
                var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {specialEasing: {}, easing: S.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || at(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (!function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], rt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || S.style(e, r)
            }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
            })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () {
                var e = lt(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0, n = S.timers;
        for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        et || (et = !0, ot())
    }, S.fx.stop = function () {
        et = null
    }, S.fx.speeds = {slow: 600, fast: 200, _default: 400}, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }

    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                a = 0;
                while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = ht(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                a = 0;
                while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                i !== (s = ht(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (t = S(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {type: e, isSimulated: !0});
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location, wt = {guid: Date.now()}, Tt = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
        }
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }

    S.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {name: t.name, value: e.replace(Et, "\r\n")}
                }) : {name: t.name, value: n.replace(Et, "\r\n")}
            }).get()
        }
    });
    var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");

    function It(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {}, u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }

    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(),
                b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {
                }), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {
                }
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var Bt = {0: 200, 1223: 204}, $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({Height: "height", Width: "width"}, function (a, s) {
        S.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Vt = C.jQuery, Gt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function (i) {
    "use strict";
    var e = window.Slick || {};
    (e = function () {
        var e = 0;
        return function (t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({height: e}, i.options.speed)
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: e}, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({top: e}, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({animStart: s.currentLeft}).animate({animStart: e}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function () {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function () {
        var e = this, t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function () {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function (i) {
        var e = this, t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function () {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function () {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function () {
        var i = this, e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function () {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function () {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case"previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case"next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case"index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function (i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) {
            if (i < e[o]) {
                i = t;
                break
            }
            t = e[o]
        }
        return i
    }, e.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function () {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function (i) {
        var e = this, t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}), t.$slides.eq(i).animate({opacity: 1}, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function () {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, e.prototype.getDotCount = function () {
        var i = this, e = 0, t = 0, o = 0;
        if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function (i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function () {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function () {
        return this
    }, e.prototype.getSlideCount = function () {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({data: {message: "index", index: parseInt(i)}}, e)
    }, e.prototype.init = function (e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function () {
        var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + s})
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];
            i(this).attr({role: "presentation"}), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function (i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img");
                r.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }

        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function () {
        var i = this;
        i.setPosition(), i.$slideTrack.css({opacity: 1}), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, e.prototype.orientationChange = function () {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function (e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {currentSlide: t}), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function () {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
            }
            s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function () {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function (i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function () {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({padding: "0px " + i.options.centerPadding}) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({padding: i.options.centerPadding + " 0px"})), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function () {
        var e, t = this;
        t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0})
        }), t.$slides.eq(t.currentSlide).css({zIndex: t.options.zIndex - 1, opacity: 1})
    }, e.prototype.setHeight = function () {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e
        }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else {
            for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(s[t])
        }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function () {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function () {
        var i = this, e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function (i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function () {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function (e) {
        var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function (i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o)
        }) : a.postSlide(o)); else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function () {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function () {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function (i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case"left":
                case"down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function (i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case"start":
                e.swipeStart(i);
                break;
            case"move":
                e.swipeMove(i);
                break;
            case"end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function (i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function (i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function () {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function (i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function () {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function () {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function () {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function () {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++) if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});

/*!
 * Vue.js v2.6.12
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Vue = t()
}(this, function () {
    "use strict";
    var e = Object.freeze({});

    function t(e) {
        return null == e
    }

    function n(e) {
        return null != e
    }

    function r(e) {
        return !0 === e
    }

    function i(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
    }

    function o(e) {
        return null !== e && "object" == typeof e
    }

    var a = Object.prototype.toString;

    function s(e) {
        return "[object Object]" === a.call(e)
    }

    function c(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e)
    }

    function u(e) {
        return n(e) && "function" == typeof e.then && "function" == typeof e.catch
    }

    function l(e) {
        return null == e ? "" : Array.isArray(e) || s(e) && e.toString === a ? JSON.stringify(e, null, 2) : String(e)
    }

    function f(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }

    function p(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return t ? function (e) {
            return n[e.toLowerCase()]
        } : function (e) {
            return n[e]
        }
    }

    var d = p("slot,component", !0), v = p("key,ref,slot,slot-scope,is");

    function h(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1)
        }
    }

    var m = Object.prototype.hasOwnProperty;

    function y(e, t) {
        return m.call(e, t)
    }

    function g(e) {
        var t = Object.create(null);
        return function (n) {
            return t[n] || (t[n] = e(n))
        }
    }

    var _ = /-(\w)/g, b = g(function (e) {
        return e.replace(_, function (e, t) {
            return t ? t.toUpperCase() : ""
        })
    }), $ = g(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }), w = /\B([A-Z])/g, C = g(function (e) {
        return e.replace(w, "-$1").toLowerCase()
    });
    var x = Function.prototype.bind ? function (e, t) {
        return e.bind(t)
    } : function (e, t) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
        }

        return n._length = e.length, n
    };

    function k(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--;) r[n] = e[n + t];
        return r
    }

    function A(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function O(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && A(t, e[n]);
        return t
    }

    function S(e, t, n) {
    }

    var T = function (e, t, n) {
        return !1
    }, E = function (e) {
        return e
    };

    function N(e, t) {
        if (e === t) return !0;
        var n = o(e), r = o(t);
        if (!n || !r) return !n && !r && String(e) === String(t);
        try {
            var i = Array.isArray(e), a = Array.isArray(t);
            if (i && a) return e.length === t.length && e.every(function (e, n) {
                return N(e, t[n])
            });
            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
            if (i || a) return !1;
            var s = Object.keys(e), c = Object.keys(t);
            return s.length === c.length && s.every(function (n) {
                return N(e[n], t[n])
            })
        } catch (e) {
            return !1
        }
    }

    function j(e, t) {
        for (var n = 0; n < e.length; n++) if (N(e[n], t)) return n;
        return -1
    }

    function D(e) {
        var t = !1;
        return function () {
            t || (t = !0, e.apply(this, arguments))
        }
    }

    var L = "data-server-rendered", M = ["component", "directive", "filter"],
        I = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        F = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: T,
            isReservedAttr: T,
            isUnknownElement: T,
            getTagNamespace: S,
            parsePlatformTagName: E,
            mustUseProp: T,
            async: !0,
            _lifecycleHooks: I
        },
        P = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

    function R(e, t, n, r) {
        Object.defineProperty(e, t, {value: n, enumerable: !!r, writable: !0, configurable: !0})
    }

    var H = new RegExp("[^" + P.source + ".$_\\d]");
    var B, U = "__proto__" in {}, z = "undefined" != typeof window,
        V = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        K = V && WXEnvironment.platform.toLowerCase(), J = z && window.navigator.userAgent.toLowerCase(),
        q = J && /msie|trident/.test(J), W = J && J.indexOf("msie 9.0") > 0, Z = J && J.indexOf("edge/") > 0,
        G = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === K),
        X = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)), Y = {}.watch,
        Q = !1;
    if (z) try {
        var ee = {};
        Object.defineProperty(ee, "passive", {
            get: function () {
                Q = !0
            }
        }), window.addEventListener("test-passive", null, ee)
    } catch (e) {
    }
    var te = function () {
        return void 0 === B && (B = !z && !V && "undefined" != typeof global && (global.process && "server" === global.process.env.VUE_ENV)), B
    }, ne = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

    function re(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }

    var ie, oe = "undefined" != typeof Symbol && re(Symbol) && "undefined" != typeof Reflect && re(Reflect.ownKeys);
    ie = "undefined" != typeof Set && re(Set) ? Set : function () {
        function e() {
            this.set = Object.create(null)
        }

        return e.prototype.has = function (e) {
            return !0 === this.set[e]
        }, e.prototype.add = function (e) {
            this.set[e] = !0
        }, e.prototype.clear = function () {
            this.set = Object.create(null)
        }, e
    }();
    var ae = S, se = 0, ce = function () {
        this.id = se++, this.subs = []
    };
    ce.prototype.addSub = function (e) {
        this.subs.push(e)
    }, ce.prototype.removeSub = function (e) {
        h(this.subs, e)
    }, ce.prototype.depend = function () {
        ce.target && ce.target.addDep(this)
    }, ce.prototype.notify = function () {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
    }, ce.target = null;
    var ue = [];

    function le(e) {
        ue.push(e), ce.target = e
    }

    function fe() {
        ue.pop(), ce.target = ue[ue.length - 1]
    }

    var pe = function (e, t, n, r, i, o, a, s) {
        this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
    }, de = {child: {configurable: !0}};
    de.child.get = function () {
        return this.componentInstance
    }, Object.defineProperties(pe.prototype, de);
    var ve = function (e) {
        void 0 === e && (e = "");
        var t = new pe;
        return t.text = e, t.isComment = !0, t
    };

    function he(e) {
        return new pe(void 0, void 0, void 0, String(e))
    }

    function me(e) {
        var t = new pe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
    }

    var ye = Array.prototype, ge = Object.create(ye);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
        var t = ye[e];
        R(ge, e, function () {
            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            var i, o = t.apply(this, n), a = this.__ob__;
            switch (e) {
                case"push":
                case"unshift":
                    i = n;
                    break;
                case"splice":
                    i = n.slice(2)
            }
            return i && a.observeArray(i), a.dep.notify(), o
        })
    });
    var _e = Object.getOwnPropertyNames(ge), be = !0;

    function $e(e) {
        be = e
    }

    var we = function (e) {
        var t;
        this.value = e, this.dep = new ce, this.vmCount = 0, R(e, "__ob__", this), Array.isArray(e) ? (U ? (t = ge, e.__proto__ = t) : function (e, t, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                R(e, o, t[o])
            }
        }(e, ge, _e), this.observeArray(e)) : this.walk(e)
    };

    function Ce(e, t) {
        var n;
        if (o(e) && !(e instanceof pe)) return y(e, "__ob__") && e.__ob__ instanceof we ? n = e.__ob__ : be && !te() && (Array.isArray(e) || s(e)) && Object.isExtensible(e) && !e._isVue && (n = new we(e)), t && n && n.vmCount++, n
    }

    function xe(e, t, n, r, i) {
        var o = new ce, a = Object.getOwnPropertyDescriptor(e, t);
        if (!a || !1 !== a.configurable) {
            var s = a && a.get, c = a && a.set;
            s && !c || 2 !== arguments.length || (n = e[t]);
            var u = !i && Ce(n);
            Object.defineProperty(e, t, {
                enumerable: !0, configurable: !0, get: function () {
                    var t = s ? s.call(e) : n;
                    return ce.target && (o.depend(), u && (u.dep.depend(), Array.isArray(t) && function e(t) {
                        for (var n = void 0, r = 0, i = t.length; r < i; r++) (n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n)
                    }(t))), t
                }, set: function (t) {
                    var r = s ? s.call(e) : n;
                    t === r || t != t && r != r || s && !c || (c ? c.call(e, t) : n = t, u = !i && Ce(t), o.notify())
                }
            })
        }
    }

    function ke(e, t, n) {
        if (Array.isArray(e) && c(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (xe(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
    }

    function Ae(e, t) {
        if (Array.isArray(e) && c(t)) e.splice(t, 1); else {
            var n = e.__ob__;
            e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify())
        }
    }

    we.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) xe(e, t[n])
    }, we.prototype.observeArray = function (e) {
        for (var t = 0, n = e.length; t < n; t++) Ce(e[t])
    };
    var Oe = F.optionMergeStrategies;

    function Se(e, t) {
        if (!t) return e;
        for (var n, r, i, o = oe ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], y(e, n) ? r !== i && s(r) && s(i) && Se(r, i) : ke(e, n, i));
        return e
    }

    function Te(e, t, n) {
        return n ? function () {
            var r = "function" == typeof t ? t.call(n, n) : t, i = "function" == typeof e ? e.call(n, n) : e;
            return r ? Se(r, i) : i
        } : t ? e ? function () {
            return Se("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
        } : t : e
    }

    function Ee(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function (e) {
            for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(n) : n
    }

    function Ne(e, t, n, r) {
        var i = Object.create(e || null);
        return t ? A(i, t) : i
    }

    Oe.data = function (e, t, n) {
        return n ? Te(e, t, n) : t && "function" != typeof t ? e : Te(e, t)
    }, I.forEach(function (e) {
        Oe[e] = Ee
    }), M.forEach(function (e) {
        Oe[e + "s"] = Ne
    }), Oe.watch = function (e, t, n, r) {
        if (e === Y && (e = void 0), t === Y && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var i = {};
        for (var o in A(i, e), t) {
            var a = i[o], s = t[o];
            a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
        }
        return i
    }, Oe.props = Oe.methods = Oe.inject = Oe.computed = function (e, t, n, r) {
        if (!e) return t;
        var i = Object.create(null);
        return A(i, e), t && A(i, t), i
    }, Oe.provide = Te;
    var je = function (e, t) {
        return void 0 === t ? e : t
    };

    function De(e, t, n) {
        if ("function" == typeof t && (t = t.options), function (e, t) {
            var n = e.props;
            if (n) {
                var r, i, o = {};
                if (Array.isArray(n)) for (r = n.length; r--;) "string" == typeof (i = n[r]) && (o[b(i)] = {type: null}); else if (s(n)) for (var a in n) i = n[a], o[b(a)] = s(i) ? i : {type: i};
                e.props = o
            }
        }(t), function (e, t) {
            var n = e.inject;
            if (n) {
                var r = e.inject = {};
                if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = {from: n[i]}; else if (s(n)) for (var o in n) {
                    var a = n[o];
                    r[o] = s(a) ? A({from: o}, a) : {from: a}
                }
            }
        }(t), function (e) {
            var t = e.directives;
            if (t) for (var n in t) {
                var r = t[n];
                "function" == typeof r && (t[n] = {bind: r, update: r})
            }
        }(t), !t._base && (t.extends && (e = De(e, t.extends, n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) e = De(e, t.mixins[r], n);
        var o, a = {};
        for (o in e) c(o);
        for (o in t) y(e, o) || c(o);

        function c(r) {
            var i = Oe[r] || je;
            a[r] = i(e[r], t[r], n, r)
        }

        return a
    }

    function Le(e, t, n, r) {
        if ("string" == typeof n) {
            var i = e[t];
            if (y(i, n)) return i[n];
            var o = b(n);
            if (y(i, o)) return i[o];
            var a = $(o);
            return y(i, a) ? i[a] : i[n] || i[o] || i[a]
        }
    }

    function Me(e, t, n, r) {
        var i = t[e], o = !y(n, e), a = n[e], s = Pe(Boolean, i.type);
        if (s > -1) if (o && !y(i, "default")) a = !1; else if ("" === a || a === C(e)) {
            var c = Pe(String, i.type);
            (c < 0 || s < c) && (a = !0)
        }
        if (void 0 === a) {
            a = function (e, t, n) {
                if (!y(t, "default")) return;
                var r = t.default;
                if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
                return "function" == typeof r && "Function" !== Ie(t.type) ? r.call(e) : r
            }(r, i, e);
            var u = be;
            $e(!0), Ce(a), $e(u)
        }
        return a
    }

    function Ie(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : ""
    }

    function Fe(e, t) {
        return Ie(e) === Ie(t)
    }

    function Pe(e, t) {
        if (!Array.isArray(t)) return Fe(t, e) ? 0 : -1;
        for (var n = 0, r = t.length; n < r; n++) if (Fe(t[n], e)) return n;
        return -1
    }

    function Re(e, t, n) {
        le();
        try {
            if (t) for (var r = t; r = r.$parent;) {
                var i = r.$options.errorCaptured;
                if (i) for (var o = 0; o < i.length; o++) try {
                    if (!1 === i[o].call(r, e, t, n)) return
                } catch (e) {
                    Be(e, r, "errorCaptured hook")
                }
            }
            Be(e, t, n)
        } finally {
            fe()
        }
    }

    function He(e, t, n, r, i) {
        var o;
        try {
            (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && u(o) && !o._handled && (o.catch(function (e) {
                return Re(e, r, i + " (Promise/async)")
            }), o._handled = !0)
        } catch (e) {
            Re(e, r, i)
        }
        return o
    }

    function Be(e, t, n) {
        if (F.errorHandler) try {
            return F.errorHandler.call(null, e, t, n)
        } catch (t) {
            t !== e && Ue(t, null, "config.errorHandler")
        }
        Ue(e, t, n)
    }

    function Ue(e, t, n) {
        if (!z && !V || "undefined" == typeof console) throw e;
        console.error(e)
    }

    var ze, Ve = !1, Ke = [], Je = !1;

    function qe() {
        Je = !1;
        var e = Ke.slice(0);
        Ke.length = 0;
        for (var t = 0; t < e.length; t++) e[t]()
    }

    if ("undefined" != typeof Promise && re(Promise)) {
        var We = Promise.resolve();
        ze = function () {
            We.then(qe), G && setTimeout(S)
        }, Ve = !0
    } else if (q || "undefined" == typeof MutationObserver || !re(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ze = "undefined" != typeof setImmediate && re(setImmediate) ? function () {
        setImmediate(qe)
    } : function () {
        setTimeout(qe, 0)
    }; else {
        var Ze = 1, Ge = new MutationObserver(qe), Xe = document.createTextNode(String(Ze));
        Ge.observe(Xe, {characterData: !0}), ze = function () {
            Ze = (Ze + 1) % 2, Xe.data = String(Ze)
        }, Ve = !0
    }

    function Ye(e, t) {
        var n;
        if (Ke.push(function () {
            if (e) try {
                e.call(t)
            } catch (e) {
                Re(e, t, "nextTick")
            } else n && n(t)
        }), Je || (Je = !0, ze()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
            n = e
        })
    }

    var Qe = new ie;

    function et(e) {
        !function e(t, n) {
            var r, i;
            var a = Array.isArray(t);
            if (!a && !o(t) || Object.isFrozen(t) || t instanceof pe) return;
            if (t.__ob__) {
                var s = t.__ob__.dep.id;
                if (n.has(s)) return;
                n.add(s)
            }
            if (a) for (r = t.length; r--;) e(t[r], n); else for (i = Object.keys(t), r = i.length; r--;) e(t[i[r]], n)
        }(e, Qe), Qe.clear()
    }

    var tt = g(function (e) {
        var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0),
            r = "!" === (e = n ? e.slice(1) : e).charAt(0);
        return {name: e = r ? e.slice(1) : e, once: n, capture: r, passive: t}
    });

    function nt(e, t) {
        function n() {
            var e = arguments, r = n.fns;
            if (!Array.isArray(r)) return He(r, null, arguments, t, "v-on handler");
            for (var i = r.slice(), o = 0; o < i.length; o++) He(i[o], null, e, t, "v-on handler")
        }

        return n.fns = e, n
    }

    function rt(e, n, i, o, a, s) {
        var c, u, l, f;
        for (c in e) u = e[c], l = n[c], f = tt(c), t(u) || (t(l) ? (t(u.fns) && (u = e[c] = nt(u, s)), r(f.once) && (u = e[c] = a(f.name, u, f.capture)), i(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u, e[c] = l));
        for (c in n) t(e[c]) && o((f = tt(c)).name, n[c], f.capture)
    }

    function it(e, i, o) {
        var a;
        e instanceof pe && (e = e.data.hook || (e.data.hook = {}));
        var s = e[i];

        function c() {
            o.apply(this, arguments), h(a.fns, c)
        }

        t(s) ? a = nt([c]) : n(s.fns) && r(s.merged) ? (a = s).fns.push(c) : a = nt([s, c]), a.merged = !0, e[i] = a
    }

    function ot(e, t, r, i, o) {
        if (n(t)) {
            if (y(t, r)) return e[r] = t[r], o || delete t[r], !0;
            if (y(t, i)) return e[r] = t[i], o || delete t[i], !0
        }
        return !1
    }

    function at(e) {
        return i(e) ? [he(e)] : Array.isArray(e) ? function e(o, a) {
            var s = [];
            var c, u, l, f;
            for (c = 0; c < o.length; c++) t(u = o[c]) || "boolean" == typeof u || (l = s.length - 1, f = s[l], Array.isArray(u) ? u.length > 0 && (st((u = e(u, (a || "") + "_" + c))[0]) && st(f) && (s[l] = he(f.text + u[0].text), u.shift()), s.push.apply(s, u)) : i(u) ? st(f) ? s[l] = he(f.text + u) : "" !== u && s.push(he(u)) : st(u) && st(f) ? s[l] = he(f.text + u.text) : (r(o._isVList) && n(u.tag) && t(u.key) && n(a) && (u.key = "__vlist" + a + "_" + c + "__"), s.push(u)));
            return s
        }(e) : void 0
    }

    function st(e) {
        return n(e) && n(e.text) && !1 === e.isComment
    }

    function ct(e, t) {
        if (e) {
            for (var n = Object.create(null), r = oe ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
                var o = r[i];
                if ("__ob__" !== o) {
                    for (var a = e[o].from, s = t; s;) {
                        if (s._provided && y(s._provided, a)) {
                            n[o] = s._provided[a];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s && "default" in e[o]) {
                        var c = e[o].default;
                        n[o] = "function" == typeof c ? c.call(t) : c
                    }
                }
            }
            return n
        }
    }

    function ut(e, t) {
        if (!e || !e.length) return {};
        for (var n = {}, r = 0, i = e.length; r < i; r++) {
            var o = e[r], a = o.data;
            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot) (n.default || (n.default = [])).push(o); else {
                var s = a.slot, c = n[s] || (n[s] = []);
                "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o)
            }
        }
        for (var u in n) n[u].every(lt) && delete n[u];
        return n
    }

    function lt(e) {
        return e.isComment && !e.asyncFactory || " " === e.text
    }

    function ft(t, n, r) {
        var i, o = Object.keys(n).length > 0, a = t ? !!t.$stable : !o, s = t && t.$key;
        if (t) {
            if (t._normalized) return t._normalized;
            if (a && r && r !== e && s === r.$key && !o && !r.$hasNormal) return r;
            for (var c in i = {}, t) t[c] && "$" !== c[0] && (i[c] = pt(n, c, t[c]))
        } else i = {};
        for (var u in n) u in i || (i[u] = dt(n, u));
        return t && Object.isExtensible(t) && (t._normalized = i), R(i, "$stable", a), R(i, "$key", s), R(i, "$hasNormal", o), i
    }

    function pt(e, t, n) {
        var r = function () {
            var e = arguments.length ? n.apply(null, arguments) : n({});
            return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : at(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
        };
        return n.proxy && Object.defineProperty(e, t, {get: r, enumerable: !0, configurable: !0}), r
    }

    function dt(e, t) {
        return function () {
            return e[t]
        }
    }

    function vt(e, t) {
        var r, i, a, s, c;
        if (Array.isArray(e) || "string" == typeof e) for (r = new Array(e.length), i = 0, a = e.length; i < a; i++) r[i] = t(e[i], i); else if ("number" == typeof e) for (r = new Array(e), i = 0; i < e; i++) r[i] = t(i + 1, i); else if (o(e)) if (oe && e[Symbol.iterator]) {
            r = [];
            for (var u = e[Symbol.iterator](), l = u.next(); !l.done;) r.push(t(l.value, r.length)), l = u.next()
        } else for (s = Object.keys(e), r = new Array(s.length), i = 0, a = s.length; i < a; i++) c = s[i], r[i] = t(e[c], c, i);
        return n(r) || (r = []), r._isVList = !0, r
    }

    function ht(e, t, n, r) {
        var i, o = this.$scopedSlots[e];
        o ? (n = n || {}, r && (n = A(A({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
        var a = n && n.slot;
        return a ? this.$createElement("template", {slot: a}, i) : i
    }

    function mt(e) {
        return Le(this.$options, "filters", e) || E
    }

    function yt(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
    }

    function gt(e, t, n, r, i) {
        var o = F.keyCodes[t] || n;
        return i && r && !F.keyCodes[t] ? yt(i, r) : o ? yt(o, e) : r ? C(r) !== t : void 0
    }

    function _t(e, t, n, r, i) {
        if (n) if (o(n)) {
            var a;
            Array.isArray(n) && (n = O(n));
            var s = function (o) {
                if ("class" === o || "style" === o || v(o)) a = e; else {
                    var s = e.attrs && e.attrs.type;
                    a = r || F.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                }
                var c = b(o), u = C(o);
                c in a || u in a || (a[o] = n[o], i && ((e.on || (e.on = {}))["update:" + o] = function (e) {
                    n[o] = e
                }))
            };
            for (var c in n) s(c)
        } else ;
        return e
    }

    function bt(e, t) {
        var n = this._staticTrees || (this._staticTrees = []), r = n[e];
        return r && !t ? r : (wt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
    }

    function $t(e, t, n) {
        return wt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
    }

    function wt(e, t, n) {
        if (Array.isArray(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Ct(e[r], t + "_" + r, n); else Ct(e, t, n)
    }

    function Ct(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n
    }

    function xt(e, t) {
        if (t) if (s(t)) {
            var n = e.on = e.on ? A({}, e.on) : {};
            for (var r in t) {
                var i = n[r], o = t[r];
                n[r] = i ? [].concat(i, o) : o
            }
        } else ;
        return e
    }

    function kt(e, t, n, r) {
        t = t || {$stable: !n};
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            Array.isArray(o) ? kt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn)
        }
        return r && (t.$key = r), t
    }

    function At(e, t) {
        for (var n = 0; n < t.length; n += 2) {
            var r = t[n];
            "string" == typeof r && r && (e[t[n]] = t[n + 1])
        }
        return e
    }

    function Ot(e, t) {
        return "string" == typeof e ? t + e : e
    }

    function St(e) {
        e._o = $t, e._n = f, e._s = l, e._l = vt, e._t = ht, e._q = N, e._i = j, e._m = bt, e._f = mt, e._k = gt, e._b = _t, e._v = he, e._e = ve, e._u = kt, e._g = xt, e._d = At, e._p = Ot
    }

    function Tt(t, n, i, o, a) {
        var s, c = this, u = a.options;
        y(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
        var l = r(u._compiled), f = !l;
        this.data = t, this.props = n, this.children = i, this.parent = o, this.listeners = t.on || e, this.injections = ct(u.inject, o), this.slots = function () {
            return c.$slots || ft(t.scopedSlots, c.$slots = ut(i, o)), c.$slots
        }, Object.defineProperty(this, "scopedSlots", {
            enumerable: !0, get: function () {
                return ft(t.scopedSlots, this.slots())
            }
        }), l && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = ft(t.scopedSlots, this.$slots)), u._scopeId ? this._c = function (e, t, n, r) {
            var i = Pt(s, e, t, n, r, f);
            return i && !Array.isArray(i) && (i.fnScopeId = u._scopeId, i.fnContext = o), i
        } : this._c = function (e, t, n, r) {
            return Pt(s, e, t, n, r, f)
        }
    }

    function Et(e, t, n, r, i) {
        var o = me(e);
        return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o
    }

    function Nt(e, t) {
        for (var n in t) e[b(n)] = t[n]
    }

    St(Tt.prototype);
    var jt = {
        init: function (e, t) {
            if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                var r = e;
                jt.prepatch(r, r)
            } else {
                (e.componentInstance = function (e, t) {
                    var r = {_isComponent: !0, _parentVnode: e, parent: t}, i = e.data.inlineTemplate;
                    n(i) && (r.render = i.render, r.staticRenderFns = i.staticRenderFns);
                    return new e.componentOptions.Ctor(r)
                }(e, Wt)).$mount(t ? e.elm : void 0, t)
            }
        }, prepatch: function (t, n) {
            var r = n.componentOptions;
            !function (t, n, r, i, o) {
                var a = i.data.scopedSlots, s = t.$scopedSlots,
                    c = !!(a && !a.$stable || s !== e && !s.$stable || a && t.$scopedSlots.$key !== a.$key),
                    u = !!(o || t.$options._renderChildren || c);
                t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i);
                if (t.$options._renderChildren = o, t.$attrs = i.data.attrs || e, t.$listeners = r || e, n && t.$options.props) {
                    $e(!1);
                    for (var l = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
                        var d = f[p], v = t.$options.props;
                        l[d] = Me(d, v, n, t)
                    }
                    $e(!0), t.$options.propsData = n
                }
                r = r || e;
                var h = t.$options._parentListeners;
                t.$options._parentListeners = r, qt(t, r, h), u && (t.$slots = ut(o, i.context), t.$forceUpdate())
            }(n.componentInstance = t.componentInstance, r.propsData, r.listeners, n, r.children)
        }, insert: function (e) {
            var t, n = e.context, r = e.componentInstance;
            r._isMounted || (r._isMounted = !0, Yt(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, en.push(t)) : Xt(r, !0))
        }, destroy: function (e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                if (n && (t._directInactive = !0, Gt(t))) return;
                if (!t._inactive) {
                    t._inactive = !0;
                    for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                    Yt(t, "deactivated")
                }
            }(t, !0) : t.$destroy())
        }
    }, Dt = Object.keys(jt);

    function Lt(i, a, s, c, l) {
        if (!t(i)) {
            var f = s.$options._base;
            if (o(i) && (i = f.extend(i)), "function" == typeof i) {
                var p;
                if (t(i.cid) && void 0 === (i = function (e, i) {
                    if (r(e.error) && n(e.errorComp)) return e.errorComp;
                    if (n(e.resolved)) return e.resolved;
                    var a = Ht;
                    a && n(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a);
                    if (r(e.loading) && n(e.loadingComp)) return e.loadingComp;
                    if (a && !n(e.owners)) {
                        var s = e.owners = [a], c = !0, l = null, f = null;
                        a.$on("hook:destroyed", function () {
                            return h(s, a)
                        });
                        var p = function (e) {
                            for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                            e && (s.length = 0, null !== l && (clearTimeout(l), l = null), null !== f && (clearTimeout(f), f = null))
                        }, d = D(function (t) {
                            e.resolved = Bt(t, i), c ? s.length = 0 : p(!0)
                        }), v = D(function (t) {
                            n(e.errorComp) && (e.error = !0, p(!0))
                        }), m = e(d, v);
                        return o(m) && (u(m) ? t(e.resolved) && m.then(d, v) : u(m.component) && (m.component.then(d, v), n(m.error) && (e.errorComp = Bt(m.error, i)), n(m.loading) && (e.loadingComp = Bt(m.loading, i), 0 === m.delay ? e.loading = !0 : l = setTimeout(function () {
                            l = null, t(e.resolved) && t(e.error) && (e.loading = !0, p(!1))
                        }, m.delay || 200)), n(m.timeout) && (f = setTimeout(function () {
                            f = null, t(e.resolved) && v(null)
                        }, m.timeout)))), c = !1, e.loading ? e.loadingComp : e.resolved
                    }
                }(p = i, f))) return function (e, t, n, r, i) {
                    var o = ve();
                    return o.asyncFactory = e, o.asyncMeta = {data: t, context: n, children: r, tag: i}, o
                }(p, a, s, c, l);
                a = a || {}, $n(i), n(a.model) && function (e, t) {
                    var r = e.model && e.model.prop || "value", i = e.model && e.model.event || "input";
                    (t.attrs || (t.attrs = {}))[r] = t.model.value;
                    var o = t.on || (t.on = {}), a = o[i], s = t.model.callback;
                    n(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[i] = [s].concat(a)) : o[i] = s
                }(i.options, a);
                var d = function (e, r, i) {
                    var o = r.options.props;
                    if (!t(o)) {
                        var a = {}, s = e.attrs, c = e.props;
                        if (n(s) || n(c)) for (var u in o) {
                            var l = C(u);
                            ot(a, c, u, l, !0) || ot(a, s, u, l, !1)
                        }
                        return a
                    }
                }(a, i);
                if (r(i.options.functional)) return function (t, r, i, o, a) {
                    var s = t.options, c = {}, u = s.props;
                    if (n(u)) for (var l in u) c[l] = Me(l, u, r || e); else n(i.attrs) && Nt(c, i.attrs), n(i.props) && Nt(c, i.props);
                    var f = new Tt(i, c, a, o, t), p = s.render.call(null, f._c, f);
                    if (p instanceof pe) return Et(p, i, f.parent, s);
                    if (Array.isArray(p)) {
                        for (var d = at(p) || [], v = new Array(d.length), h = 0; h < d.length; h++) v[h] = Et(d[h], i, f.parent, s);
                        return v
                    }
                }(i, d, a, s, c);
                var v = a.on;
                if (a.on = a.nativeOn, r(i.options.abstract)) {
                    var m = a.slot;
                    a = {}, m && (a.slot = m)
                }
                !function (e) {
                    for (var t = e.hook || (e.hook = {}), n = 0; n < Dt.length; n++) {
                        var r = Dt[n], i = t[r], o = jt[r];
                        i === o || i && i._merged || (t[r] = i ? Mt(o, i) : o)
                    }
                }(a);
                var y = i.options.name || l;
                return new pe("vue-component-" + i.cid + (y ? "-" + y : ""), a, void 0, void 0, void 0, s, {
                    Ctor: i,
                    propsData: d,
                    listeners: v,
                    tag: l,
                    children: c
                }, p)
            }
        }
    }

    function Mt(e, t) {
        var n = function (n, r) {
            e(n, r), t(n, r)
        };
        return n._merged = !0, n
    }

    var It = 1, Ft = 2;

    function Pt(e, a, s, c, u, l) {
        return (Array.isArray(s) || i(s)) && (u = c, c = s, s = void 0), r(l) && (u = Ft), function (e, i, a, s, c) {
            if (n(a) && n(a.__ob__)) return ve();
            n(a) && n(a.is) && (i = a.is);
            if (!i) return ve();
            Array.isArray(s) && "function" == typeof s[0] && ((a = a || {}).scopedSlots = {default: s[0]}, s.length = 0);
            c === Ft ? s = at(s) : c === It && (s = function (e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e
            }(s));
            var u, l;
            if ("string" == typeof i) {
                var f;
                l = e.$vnode && e.$vnode.ns || F.getTagNamespace(i), u = F.isReservedTag(i) ? new pe(F.parsePlatformTagName(i), a, s, void 0, void 0, e) : a && a.pre || !n(f = Le(e.$options, "components", i)) ? new pe(i, a, s, void 0, void 0, e) : Lt(f, a, e, s, i)
            } else u = Lt(i, a, e, s);
            return Array.isArray(u) ? u : n(u) ? (n(l) && function e(i, o, a) {
                i.ns = o;
                "foreignObject" === i.tag && (o = void 0, a = !0);
                if (n(i.children)) for (var s = 0, c = i.children.length; s < c; s++) {
                    var u = i.children[s];
                    n(u.tag) && (t(u.ns) || r(a) && "svg" !== u.tag) && e(u, o, a)
                }
            }(u, l), n(a) && function (e) {
                o(e.style) && et(e.style);
                o(e.class) && et(e.class)
            }(a), u) : ve()
        }(e, a, s, c, u)
    }

    var Rt, Ht = null;

    function Bt(e, t) {
        return (e.__esModule || oe && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e
    }

    function Ut(e) {
        return e.isComment && e.asyncFactory
    }

    function zt(e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if (n(r) && (n(r.componentOptions) || Ut(r))) return r
        }
    }

    function Vt(e, t) {
        Rt.$on(e, t)
    }

    function Kt(e, t) {
        Rt.$off(e, t)
    }

    function Jt(e, t) {
        var n = Rt;
        return function r() {
            null !== t.apply(null, arguments) && n.$off(e, r)
        }
    }

    function qt(e, t, n) {
        Rt = e, rt(t, n || {}, Vt, Kt, Jt, e), Rt = void 0
    }

    var Wt = null;

    function Zt(e) {
        var t = Wt;
        return Wt = e, function () {
            Wt = t
        }
    }

    function Gt(e) {
        for (; e && (e = e.$parent);) if (e._inactive) return !0;
        return !1
    }

    function Xt(e, t) {
        if (t) {
            if (e._directInactive = !1, Gt(e)) return
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) Xt(e.$children[n]);
            Yt(e, "activated")
        }
    }

    function Yt(e, t) {
        le();
        var n = e.$options[t], r = t + " hook";
        if (n) for (var i = 0, o = n.length; i < o; i++) He(n[i], e, null, e, r);
        e._hasHookEvent && e.$emit("hook:" + t), fe()
    }

    var Qt = [], en = [], tn = {}, nn = !1, rn = !1, on = 0;
    var an = 0, sn = Date.now;
    if (z && !q) {
        var cn = window.performance;
        cn && "function" == typeof cn.now && sn() > document.createEvent("Event").timeStamp && (sn = function () {
            return cn.now()
        })
    }

    function un() {
        var e, t;
        for (an = sn(), rn = !0, Qt.sort(function (e, t) {
            return e.id - t.id
        }), on = 0; on < Qt.length; on++) (e = Qt[on]).before && e.before(), t = e.id, tn[t] = null, e.run();
        var n = en.slice(), r = Qt.slice();
        on = Qt.length = en.length = 0, tn = {}, nn = rn = !1, function (e) {
            for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Xt(e[t], !0)
        }(n), function (e) {
            var t = e.length;
            for (; t--;) {
                var n = e[t], r = n.vm;
                r._watcher === n && r._isMounted && !r._isDestroyed && Yt(r, "updated")
            }
        }(r), ne && F.devtools && ne.emit("flush")
    }

    var ln = 0, fn = function (e, t, n, r, i) {
        this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++ln, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ie, this.newDepIds = new ie, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
            if (!H.test(e)) {
                var t = e.split(".");
                return function (e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]]
                    }
                    return e
                }
            }
        }(t), this.getter || (this.getter = S)), this.value = this.lazy ? void 0 : this.get()
    };
    fn.prototype.get = function () {
        var e;
        le(this);
        var t = this.vm;
        try {
            e = this.getter.call(t, t)
        } catch (e) {
            if (!this.user) throw e;
            Re(e, t, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && et(e), fe(), this.cleanupDeps()
        }
        return e
    }, fn.prototype.addDep = function (e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
    }, fn.prototype.cleanupDeps = function () {
        for (var e = this.deps.length; e--;) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
    }, fn.prototype.update = function () {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
            var t = e.id;
            if (null == tn[t]) {
                if (tn[t] = !0, rn) {
                    for (var n = Qt.length - 1; n > on && Qt[n].id > e.id;) n--;
                    Qt.splice(n + 1, 0, e)
                } else Qt.push(e);
                nn || (nn = !0, Ye(un))
            }
        }(this)
    }, fn.prototype.run = function () {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || o(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) try {
                    this.cb.call(this.vm, e, t)
                } catch (e) {
                    Re(e, this.vm, 'callback for watcher "' + this.expression + '"')
                } else this.cb.call(this.vm, e, t)
            }
        }
    }, fn.prototype.evaluate = function () {
        this.value = this.get(), this.dirty = !1
    }, fn.prototype.depend = function () {
        for (var e = this.deps.length; e--;) this.deps[e].depend()
    }, fn.prototype.teardown = function () {
        if (this.active) {
            this.vm._isBeingDestroyed || h(this.vm._watchers, this);
            for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
            this.active = !1
        }
    };
    var pn = {enumerable: !0, configurable: !0, get: S, set: S};

    function dn(e, t, n) {
        pn.get = function () {
            return this[t][n]
        }, pn.set = function (e) {
            this[t][n] = e
        }, Object.defineProperty(e, n, pn)
    }

    function vn(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && function (e, t) {
            var n = e.$options.propsData || {}, r = e._props = {}, i = e.$options._propKeys = [];
            e.$parent && $e(!1);
            var o = function (o) {
                i.push(o);
                var a = Me(o, t, n, e);
                xe(r, o, a), o in e || dn(e, "_props", o)
            };
            for (var a in t) o(a);
            $e(!0)
        }(e, t.props), t.methods && function (e, t) {
            e.$options.props;
            for (var n in t) e[n] = "function" != typeof t[n] ? S : x(t[n], e)
        }(e, t.methods), t.data ? function (e) {
            var t = e.$options.data;
            s(t = e._data = "function" == typeof t ? function (e, t) {
                le();
                try {
                    return e.call(t, t)
                } catch (e) {
                    return Re(e, t, "data()"), {}
                } finally {
                    fe()
                }
            }(t, e) : t || {}) || (t = {});
            var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length);
            for (; i--;) {
                var o = n[i];
                r && y(r, o) || (a = void 0, 36 !== (a = (o + "").charCodeAt(0)) && 95 !== a && dn(e, "_data", o))
            }
            var a;
            Ce(t, !0)
        }(e) : Ce(e._data = {}, !0), t.computed && function (e, t) {
            var n = e._computedWatchers = Object.create(null), r = te();
            for (var i in t) {
                var o = t[i], a = "function" == typeof o ? o : o.get;
                r || (n[i] = new fn(e, a || S, S, hn)), i in e || mn(e, i, o)
            }
        }(e, t.computed), t.watch && t.watch !== Y && function (e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r)) for (var i = 0; i < r.length; i++) _n(e, n, r[i]); else _n(e, n, r)
            }
        }(e, t.watch)
    }

    var hn = {lazy: !0};

    function mn(e, t, n) {
        var r = !te();
        "function" == typeof n ? (pn.get = r ? yn(t) : gn(n), pn.set = S) : (pn.get = n.get ? r && !1 !== n.cache ? yn(t) : gn(n.get) : S, pn.set = n.set || S), Object.defineProperty(e, t, pn)
    }

    function yn(e) {
        return function () {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value
        }
    }

    function gn(e) {
        return function () {
            return e.call(this, this)
        }
    }

    function _n(e, t, n, r) {
        return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
    }

    var bn = 0;

    function $n(e) {
        var t = e.options;
        if (e.super) {
            var n = $n(e.super);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var r = function (e) {
                    var t, n = e.options, r = e.sealedOptions;
                    for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
                    return t
                }(e);
                r && A(e.extendOptions, r), (t = e.options = De(n, e.extendOptions)).name && (t.components[t.name] = e)
            }
        }
        return t
    }

    function wn(e) {
        this._init(e)
    }

    function Cn(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function (e) {
            e = e || {};
            var n = this, r = n.cid, i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];
            var o = e.name || n.options.name, a = function (e) {
                this._init(e)
            };
            return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = De(n.options, e), a.super = n, a.options.props && function (e) {
                var t = e.options.props;
                for (var n in t) dn(e.prototype, "_props", n)
            }(a), a.options.computed && function (e) {
                var t = e.options.computed;
                for (var n in t) mn(e.prototype, n, t[n])
            }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, M.forEach(function (e) {
                a[e] = n[e]
            }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = A({}, a.options), i[r] = a, a
        }
    }

    function xn(e) {
        return e && (e.Ctor.options.name || e.tag)
    }

    function kn(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, "[object RegExp]" === a.call(n) && e.test(t));
        var n
    }

    function An(e, t) {
        var n = e.cache, r = e.keys, i = e._vnode;
        for (var o in n) {
            var a = n[o];
            if (a) {
                var s = xn(a.componentOptions);
                s && !t(s) && On(n, o, r, i)
            }
        }
    }

    function On(e, t, n, r) {
        var i = e[t];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, h(n, t)
    }

    !function (t) {
        t.prototype._init = function (t) {
            var n = this;
            n._uid = bn++, n._isVue = !0, t && t._isComponent ? function (e, t) {
                var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
                n.parent = t.parent, n._parentVnode = r;
                var i = r.componentOptions;
                n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
            }(n, t) : n.$options = De($n(n.constructor), t || {}, n), n._renderProxy = n, n._self = n, function (e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (; n.$options.abstract && n.$parent;) n = n.$parent;
                    n.$children.push(e)
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
            }(n), function (e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && qt(e, t)
            }(n), function (t) {
                t._vnode = null, t._staticTrees = null;
                var n = t.$options, r = t.$vnode = n._parentVnode, i = r && r.context;
                t.$slots = ut(n._renderChildren, i), t.$scopedSlots = e, t._c = function (e, n, r, i) {
                    return Pt(t, e, n, r, i, !1)
                }, t.$createElement = function (e, n, r, i) {
                    return Pt(t, e, n, r, i, !0)
                };
                var o = r && r.data;
                xe(t, "$attrs", o && o.attrs || e, null, !0), xe(t, "$listeners", n._parentListeners || e, null, !0)
            }(n), Yt(n, "beforeCreate"), function (e) {
                var t = ct(e.$options.inject, e);
                t && ($e(!1), Object.keys(t).forEach(function (n) {
                    xe(e, n, t[n])
                }), $e(!0))
            }(n), vn(n), function (e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t)
            }(n), Yt(n, "created"), n.$options.el && n.$mount(n.$options.el)
        }
    }(wn), function (e) {
        var t = {
            get: function () {
                return this._data
            }
        }, n = {
            get: function () {
                return this._props
            }
        };
        Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = ke, e.prototype.$delete = Ae, e.prototype.$watch = function (e, t, n) {
            if (s(t)) return _n(this, e, t, n);
            (n = n || {}).user = !0;
            var r = new fn(this, e, t, n);
            if (n.immediate) try {
                t.call(this, r.value)
            } catch (e) {
                Re(e, this, 'callback for immediate watcher "' + r.expression + '"')
            }
            return function () {
                r.teardown()
            }
        }
    }(wn), function (e) {
        var t = /^hook:/;
        e.prototype.$on = function (e, n) {
            var r = this;
            if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) r.$on(e[i], n); else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
            return r
        }, e.prototype.$once = function (e, t) {
            var n = this;

            function r() {
                n.$off(e, r), t.apply(n, arguments)
            }

            return r.fn = t, n.$on(e, r), n
        }, e.prototype.$off = function (e, t) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(e)) {
                for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
                return n
            }
            var o, a = n._events[e];
            if (!a) return n;
            if (!t) return n._events[e] = null, n;
            for (var s = a.length; s--;) if ((o = a[s]) === t || o.fn === t) {
                a.splice(s, 1);
                break
            }
            return n
        }, e.prototype.$emit = function (e) {
            var t = this._events[e];
            if (t) {
                t = t.length > 1 ? k(t) : t;
                for (var n = k(arguments, 1), r = 'event handler for "' + e + '"', i = 0, o = t.length; i < o; i++) He(t[i], this, n, this, r)
            }
            return this
        }
    }(wn), function (e) {
        e.prototype._update = function (e, t) {
            var n = this, r = n.$el, i = n._vnode, o = Zt(n);
            n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }, e.prototype.$forceUpdate = function () {
            this._watcher && this._watcher.update()
        }, e.prototype.$destroy = function () {
            var e = this;
            if (!e._isBeingDestroyed) {
                Yt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || h(t.$children, e), e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Yt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
            }
        }
    }(wn), function (e) {
        St(e.prototype), e.prototype.$nextTick = function (e) {
            return Ye(e, this)
        }, e.prototype._render = function () {
            var e, t = this, n = t.$options, r = n.render, i = n._parentVnode;
            i && (t.$scopedSlots = ft(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
            try {
                Ht = t, e = r.call(t._renderProxy, t.$createElement)
            } catch (n) {
                Re(n, t, "render"), e = t._vnode
            } finally {
                Ht = null
            }
            return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof pe || (e = ve()), e.parent = i, e
        }
    }(wn);
    var Sn = [String, RegExp, Array], Tn = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {include: Sn, exclude: Sn, max: [String, Number]},
            created: function () {
                this.cache = Object.create(null), this.keys = []
            },
            destroyed: function () {
                for (var e in this.cache) On(this.cache, e, this.keys)
            },
            mounted: function () {
                var e = this;
                this.$watch("include", function (t) {
                    An(e, function (e) {
                        return kn(t, e)
                    })
                }), this.$watch("exclude", function (t) {
                    An(e, function (e) {
                        return !kn(t, e)
                    })
                })
            },
            render: function () {
                var e = this.$slots.default, t = zt(e), n = t && t.componentOptions;
                if (n) {
                    var r = xn(n), i = this.include, o = this.exclude;
                    if (i && (!r || !kn(i, r)) || o && r && kn(o, r)) return t;
                    var a = this.cache, s = this.keys,
                        c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                    a[c] ? (t.componentInstance = a[c].componentInstance, h(s, c), s.push(c)) : (a[c] = t, s.push(c), this.max && s.length > parseInt(this.max) && On(a, s[0], s, this._vnode)), t.data.keepAlive = !0
                }
                return t || e && e[0]
            }
        }
    };
    !function (e) {
        var t = {
            get: function () {
                return F
            }
        };
        Object.defineProperty(e, "config", t), e.util = {
            warn: ae,
            extend: A,
            mergeOptions: De,
            defineReactive: xe
        }, e.set = ke, e.delete = Ae, e.nextTick = Ye, e.observable = function (e) {
            return Ce(e), e
        }, e.options = Object.create(null), M.forEach(function (t) {
            e.options[t + "s"] = Object.create(null)
        }), e.options._base = e, A(e.options.components, Tn), function (e) {
            e.use = function (e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                var n = k(arguments, 1);
                return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
            }
        }(e), function (e) {
            e.mixin = function (e) {
                return this.options = De(this.options, e), this
            }
        }(e), Cn(e), function (e) {
            M.forEach(function (t) {
                e[t] = function (e, n) {
                    return n ? ("component" === t && s(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                }
            })
        }(e)
    }(wn), Object.defineProperty(wn.prototype, "$isServer", {get: te}), Object.defineProperty(wn.prototype, "$ssrContext", {
        get: function () {
            return this.$vnode && this.$vnode.ssrContext
        }
    }), Object.defineProperty(wn, "FunctionalRenderContext", {value: Tt}), wn.version = "2.6.12";
    var En = p("style,class"), Nn = p("input,textarea,option,select,progress"), jn = function (e, t, n) {
            return "value" === n && Nn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }, Dn = p("contenteditable,draggable,spellcheck"), Ln = p("events,caret,typing,plaintext-only"),
        Mn = function (e, t) {
            return Hn(t) || "false" === t ? "false" : "contenteditable" === e && Ln(t) ? t : "true"
        },
        In = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        Fn = "http://www.w3.org/1999/xlink", Pn = function (e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        }, Rn = function (e) {
            return Pn(e) ? e.slice(6, e.length) : ""
        }, Hn = function (e) {
            return null == e || !1 === e
        };

    function Bn(e) {
        for (var t = e.data, r = e, i = e; n(i.componentInstance);) (i = i.componentInstance._vnode) && i.data && (t = Un(i.data, t));
        for (; n(r = r.parent);) r && r.data && (t = Un(t, r.data));
        return function (e, t) {
            if (n(e) || n(t)) return zn(e, Vn(t));
            return ""
        }(t.staticClass, t.class)
    }

    function Un(e, t) {
        return {staticClass: zn(e.staticClass, t.staticClass), class: n(e.class) ? [e.class, t.class] : t.class}
    }

    function zn(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }

    function Vn(e) {
        return Array.isArray(e) ? function (e) {
            for (var t, r = "", i = 0, o = e.length; i < o; i++) n(t = Vn(e[i])) && "" !== t && (r && (r += " "), r += t);
            return r
        }(e) : o(e) ? function (e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), t += n);
            return t
        }(e) : "string" == typeof e ? e : ""
    }

    var Kn = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
        Jn = p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        qn = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        Wn = function (e) {
            return Jn(e) || qn(e)
        };

    function Zn(e) {
        return qn(e) ? "svg" : "math" === e ? "math" : void 0
    }

    var Gn = Object.create(null);
    var Xn = p("text,number,password,search,email,tel,url");

    function Yn(e) {
        if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t || document.createElement("div")
        }
        return e
    }

    var Qn = Object.freeze({
        createElement: function (e, t) {
            var n = document.createElement(e);
            return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
        }, createElementNS: function (e, t) {
            return document.createElementNS(Kn[e], t)
        }, createTextNode: function (e) {
            return document.createTextNode(e)
        }, createComment: function (e) {
            return document.createComment(e)
        }, insertBefore: function (e, t, n) {
            e.insertBefore(t, n)
        }, removeChild: function (e, t) {
            e.removeChild(t)
        }, appendChild: function (e, t) {
            e.appendChild(t)
        }, parentNode: function (e) {
            return e.parentNode
        }, nextSibling: function (e) {
            return e.nextSibling
        }, tagName: function (e) {
            return e.tagName
        }, setTextContent: function (e, t) {
            e.textContent = t
        }, setStyleScope: function (e, t) {
            e.setAttribute(t, "")
        }
    }), er = {
        create: function (e, t) {
            tr(t)
        }, update: function (e, t) {
            e.data.ref !== t.data.ref && (tr(e, !0), tr(t))
        }, destroy: function (e) {
            tr(e, !0)
        }
    };

    function tr(e, t) {
        var r = e.data.ref;
        if (n(r)) {
            var i = e.context, o = e.componentInstance || e.elm, a = i.$refs;
            t ? Array.isArray(a[r]) ? h(a[r], o) : a[r] === o && (a[r] = void 0) : e.data.refInFor ? Array.isArray(a[r]) ? a[r].indexOf(o) < 0 && a[r].push(o) : a[r] = [o] : a[r] = o
        }
    }

    var nr = new pe("", {}, []), rr = ["create", "activate", "update", "remove", "destroy"];

    function ir(e, i) {
        return e.key === i.key && (e.tag === i.tag && e.isComment === i.isComment && n(e.data) === n(i.data) && function (e, t) {
            if ("input" !== e.tag) return !0;
            var r, i = n(r = e.data) && n(r = r.attrs) && r.type, o = n(r = t.data) && n(r = r.attrs) && r.type;
            return i === o || Xn(i) && Xn(o)
        }(e, i) || r(e.isAsyncPlaceholder) && e.asyncFactory === i.asyncFactory && t(i.asyncFactory.error))
    }

    function or(e, t, r) {
        var i, o, a = {};
        for (i = t; i <= r; ++i) n(o = e[i].key) && (a[o] = i);
        return a
    }

    var ar = {
        create: sr, update: sr, destroy: function (e) {
            sr(e, nr)
        }
    };

    function sr(e, t) {
        (e.data.directives || t.data.directives) && function (e, t) {
            var n, r, i, o = e === nr, a = t === nr, s = ur(e.data.directives, e.context),
                c = ur(t.data.directives, t.context), u = [], l = [];
            for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, fr(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (fr(i, "bind", t, e), i.def && i.def.inserted && u.push(i));
            if (u.length) {
                var f = function () {
                    for (var n = 0; n < u.length; n++) fr(u[n], "inserted", t, e)
                };
                o ? it(t, "insert", f) : f()
            }
            l.length && it(t, "postpatch", function () {
                for (var n = 0; n < l.length; n++) fr(l[n], "componentUpdated", t, e)
            });
            if (!o) for (n in s) c[n] || fr(s[n], "unbind", e, e, a)
        }(e, t)
    }

    var cr = Object.create(null);

    function ur(e, t) {
        var n, r, i = Object.create(null);
        if (!e) return i;
        for (n = 0; n < e.length; n++) (r = e[n]).modifiers || (r.modifiers = cr), i[lr(r)] = r, r.def = Le(t.$options, "directives", r.name);
        return i
    }

    function lr(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }

    function fr(e, t, n, r, i) {
        var o = e.def && e.def[t];
        if (o) try {
            o(n.elm, e, n, r, i)
        } catch (r) {
            Re(r, n.context, "directive " + e.name + " " + t + " hook")
        }
    }

    var pr = [er, ar];

    function dr(e, r) {
        var i = r.componentOptions;
        if (!(n(i) && !1 === i.Ctor.options.inheritAttrs || t(e.data.attrs) && t(r.data.attrs))) {
            var o, a, s = r.elm, c = e.data.attrs || {}, u = r.data.attrs || {};
            for (o in n(u.__ob__) && (u = r.data.attrs = A({}, u)), u) a = u[o], c[o] !== a && vr(s, o, a);
            for (o in (q || Z) && u.value !== c.value && vr(s, "value", u.value), c) t(u[o]) && (Pn(o) ? s.removeAttributeNS(Fn, Rn(o)) : Dn(o) || s.removeAttribute(o))
        }
    }

    function vr(e, t, n) {
        e.tagName.indexOf("-") > -1 ? hr(e, t, n) : In(t) ? Hn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Dn(t) ? e.setAttribute(t, Mn(t, n)) : Pn(t) ? Hn(n) ? e.removeAttributeNS(Fn, Rn(t)) : e.setAttributeNS(Fn, t, n) : hr(e, t, n)
    }

    function hr(e, t, n) {
        if (Hn(n)) e.removeAttribute(t); else {
            if (q && !W && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                var r = function (t) {
                    t.stopImmediatePropagation(), e.removeEventListener("input", r)
                };
                e.addEventListener("input", r), e.__ieph = !0
            }
            e.setAttribute(t, n)
        }
    }

    var mr = {create: dr, update: dr};

    function yr(e, r) {
        var i = r.elm, o = r.data, a = e.data;
        if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
            var s = Bn(r), c = i._transitionClasses;
            n(c) && (s = zn(s, Vn(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
        }
    }

    var gr, _r, br, $r, wr, Cr, xr = {create: yr, update: yr}, kr = /[\w).+\-_$\]]/;

    function Ar(e) {
        var t, n, r, i, o, a = !1, s = !1, c = !1, u = !1, l = 0, f = 0, p = 0, d = 0;
        for (r = 0; r < e.length; r++) if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1); else if (s) 34 === t && 92 !== n && (s = !1); else if (c) 96 === t && 92 !== n && (c = !1); else if (u) 47 === t && 92 !== n && (u = !1); else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || l || f || p) {
            switch (t) {
                case 34:
                    s = !0;
                    break;
                case 39:
                    a = !0;
                    break;
                case 96:
                    c = !0;
                    break;
                case 40:
                    p++;
                    break;
                case 41:
                    p--;
                    break;
                case 91:
                    f++;
                    break;
                case 93:
                    f--;
                    break;
                case 123:
                    l++;
                    break;
                case 125:
                    l--
            }
            if (47 === t) {
                for (var v = r - 1, h = void 0; v >= 0 && " " === (h = e.charAt(v)); v--) ;
                h && kr.test(h) || (u = !0)
            }
        } else void 0 === i ? (d = r + 1, i = e.slice(0, r).trim()) : m();

        function m() {
            (o || (o = [])).push(e.slice(d, r).trim()), d = r + 1
        }

        if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== d && m(), o) for (r = 0; r < o.length; r++) i = Or(i, o[r]);
        return i
    }

    function Or(e, t) {
        var n = t.indexOf("(");
        if (n < 0) return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n), i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i)
    }

    function Sr(e, t) {
        console.error("[Vue compiler]: " + e)
    }

    function Tr(e, t) {
        return e ? e.map(function (e) {
            return e[t]
        }).filter(function (e) {
            return e
        }) : []
    }

    function Er(e, t, n, r, i) {
        (e.props || (e.props = [])).push(Rr({name: t, value: n, dynamic: i}, r)), e.plain = !1
    }

    function Nr(e, t, n, r, i) {
        (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Rr({
            name: t,
            value: n,
            dynamic: i
        }, r)), e.plain = !1
    }

    function jr(e, t, n, r) {
        e.attrsMap[t] = n, e.attrsList.push(Rr({name: t, value: n}, r))
    }

    function Dr(e, t, n, r, i, o, a, s) {
        (e.directives || (e.directives = [])).push(Rr({
            name: t,
            rawName: n,
            value: r,
            arg: i,
            isDynamicArg: o,
            modifiers: a
        }, s)), e.plain = !1
    }

    function Lr(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t
    }

    function Mr(t, n, r, i, o, a, s, c) {
        var u;
        (i = i || e).right ? c ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete i.right) : i.middle && (c ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), i.capture && (delete i.capture, n = Lr("!", n, c)), i.once && (delete i.once, n = Lr("~", n, c)), i.passive && (delete i.passive, n = Lr("&", n, c)), i.native ? (delete i.native, u = t.nativeEvents || (t.nativeEvents = {})) : u = t.events || (t.events = {});
        var l = Rr({value: r.trim(), dynamic: c}, s);
        i !== e && (l.modifiers = i);
        var f = u[n];
        Array.isArray(f) ? o ? f.unshift(l) : f.push(l) : u[n] = f ? o ? [l, f] : [f, l] : l, t.plain = !1
    }

    function Ir(e, t, n) {
        var r = Fr(e, ":" + t) || Fr(e, "v-bind:" + t);
        if (null != r) return Ar(r);
        if (!1 !== n) {
            var i = Fr(e, t);
            if (null != i) return JSON.stringify(i)
        }
    }

    function Fr(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, o = 0, a = i.length; o < a; o++) if (i[o].name === t) {
            i.splice(o, 1);
            break
        }
        return n && delete e.attrsMap[t], r
    }

    function Pr(e, t) {
        for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            if (t.test(o.name)) return n.splice(r, 1), o
        }
    }

    function Rr(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
    }

    function Hr(e, t, n) {
        var r = n || {}, i = r.number, o = "$$v";
        r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
        var a = Br(t, o);
        e.model = {value: "(" + t + ")", expression: JSON.stringify(t), callback: "function ($$v) {" + a + "}"}
    }

    function Br(e, t) {
        var n = function (e) {
            if (e = e.trim(), gr = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < gr - 1) return ($r = e.lastIndexOf(".")) > -1 ? {
                exp: e.slice(0, $r),
                key: '"' + e.slice($r + 1) + '"'
            } : {exp: e, key: null};
            _r = e, $r = wr = Cr = 0;
            for (; !zr();) Vr(br = Ur()) ? Jr(br) : 91 === br && Kr(br);
            return {exp: e.slice(0, wr), key: e.slice(wr + 1, Cr)}
        }(e);
        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
    }

    function Ur() {
        return _r.charCodeAt(++$r)
    }

    function zr() {
        return $r >= gr
    }

    function Vr(e) {
        return 34 === e || 39 === e
    }

    function Kr(e) {
        var t = 1;
        for (wr = $r; !zr();) if (Vr(e = Ur())) Jr(e); else if (91 === e && t++, 93 === e && t--, 0 === t) {
            Cr = $r;
            break
        }
    }

    function Jr(e) {
        for (var t = e; !zr() && (e = Ur()) !== t;) ;
    }

    var qr, Wr = "__r", Zr = "__c";

    function Gr(e, t, n) {
        var r = qr;
        return function i() {
            null !== t.apply(null, arguments) && Qr(e, i, n, r)
        }
    }

    var Xr = Ve && !(X && Number(X[1]) <= 53);

    function Yr(e, t, n, r) {
        if (Xr) {
            var i = an, o = t;
            t = o._wrapper = function (e) {
                if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments)
            }
        }
        qr.addEventListener(e, t, Q ? {capture: n, passive: r} : n)
    }

    function Qr(e, t, n, r) {
        (r || qr).removeEventListener(e, t._wrapper || t, n)
    }

    function ei(e, r) {
        if (!t(e.data.on) || !t(r.data.on)) {
            var i = r.data.on || {}, o = e.data.on || {};
            qr = r.elm, function (e) {
                if (n(e[Wr])) {
                    var t = q ? "change" : "input";
                    e[t] = [].concat(e[Wr], e[t] || []), delete e[Wr]
                }
                n(e[Zr]) && (e.change = [].concat(e[Zr], e.change || []), delete e[Zr])
            }(i), rt(i, o, Yr, Qr, Gr, r.context), qr = void 0
        }
    }

    var ti, ni = {create: ei, update: ei};

    function ri(e, r) {
        if (!t(e.data.domProps) || !t(r.data.domProps)) {
            var i, o, a = r.elm, s = e.data.domProps || {}, c = r.data.domProps || {};
            for (i in n(c.__ob__) && (c = r.data.domProps = A({}, c)), s) i in c || (a[i] = "");
            for (i in c) {
                if (o = c[i], "textContent" === i || "innerHTML" === i) {
                    if (r.children && (r.children.length = 0), o === s[i]) continue;
                    1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                }
                if ("value" === i && "PROGRESS" !== a.tagName) {
                    a._value = o;
                    var u = t(o) ? "" : String(o);
                    ii(a, u) && (a.value = u)
                } else if ("innerHTML" === i && qn(a.tagName) && t(a.innerHTML)) {
                    (ti = ti || document.createElement("div")).innerHTML = "<svg>" + o + "</svg>";
                    for (var l = ti.firstChild; a.firstChild;) a.removeChild(a.firstChild);
                    for (; l.firstChild;) a.appendChild(l.firstChild)
                } else if (o !== s[i]) try {
                    a[i] = o
                } catch (e) {
                }
            }
        }
    }

    function ii(e, t) {
        return !e.composing && ("OPTION" === e.tagName || function (e, t) {
            var n = !0;
            try {
                n = document.activeElement !== e
            } catch (e) {
            }
            return n && e.value !== t
        }(e, t) || function (e, t) {
            var r = e.value, i = e._vModifiers;
            if (n(i)) {
                if (i.number) return f(r) !== f(t);
                if (i.trim) return r.trim() !== t.trim()
            }
            return r !== t
        }(e, t))
    }

    var oi = {create: ri, update: ri}, ai = g(function (e) {
        var t = {}, n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach(function (e) {
            if (e) {
                var r = e.split(n);
                r.length > 1 && (t[r[0].trim()] = r[1].trim())
            }
        }), t
    });

    function si(e) {
        var t = ci(e.style);
        return e.staticStyle ? A(e.staticStyle, t) : t
    }

    function ci(e) {
        return Array.isArray(e) ? O(e) : "string" == typeof e ? ai(e) : e
    }

    var ui, li = /^--/, fi = /\s*!important$/, pi = function (e, t, n) {
        if (li.test(t)) e.style.setProperty(t, n); else if (fi.test(n)) e.style.setProperty(C(t), n.replace(fi, ""), "important"); else {
            var r = vi(t);
            if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) e.style[r] = n[i]; else e.style[r] = n
        }
    }, di = ["Webkit", "Moz", "ms"], vi = g(function (e) {
        if (ui = ui || document.createElement("div").style, "filter" !== (e = b(e)) && e in ui) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < di.length; n++) {
            var r = di[n] + t;
            if (r in ui) return r
        }
    });

    function hi(e, r) {
        var i = r.data, o = e.data;
        if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
            var a, s, c = r.elm, u = o.staticStyle, l = o.normalizedStyle || o.style || {}, f = u || l,
                p = ci(r.data.style) || {};
            r.data.normalizedStyle = n(p.__ob__) ? A({}, p) : p;
            var d = function (e, t) {
                var n, r = {};
                if (t) for (var i = e; i.componentInstance;) (i = i.componentInstance._vnode) && i.data && (n = si(i.data)) && A(r, n);
                (n = si(e.data)) && A(r, n);
                for (var o = e; o = o.parent;) o.data && (n = si(o.data)) && A(r, n);
                return r
            }(r, !0);
            for (s in f) t(d[s]) && pi(c, s, "");
            for (s in d) (a = d[s]) !== f[s] && pi(c, s, null == a ? "" : a)
        }
    }

    var mi = {create: hi, update: hi}, yi = /\s+/;

    function gi(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function (t) {
            return e.classList.add(t)
        }) : e.classList.add(t); else {
            var n = " " + (e.getAttribute("class") || "") + " ";
            n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
        }
    }

    function _i(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function (t) {
            return e.classList.remove(t)
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class"); else {
            for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
            (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
        }
    }

    function bi(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return !1 !== e.css && A(t, $i(e.name || "v")), A(t, e), t
            }
            return "string" == typeof e ? $i(e) : void 0
        }
    }

    var $i = g(function (e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        }), wi = z && !W, Ci = "transition", xi = "animation", ki = "transition", Ai = "transitionend", Oi = "animation",
        Si = "animationend";
    wi && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ki = "WebkitTransition", Ai = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Oi = "WebkitAnimation", Si = "webkitAnimationEnd"));
    var Ti = z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
        return e()
    };

    function Ei(e) {
        Ti(function () {
            Ti(e)
        })
    }

    function Ni(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), gi(e, t))
    }

    function ji(e, t) {
        e._transitionClasses && h(e._transitionClasses, t), _i(e, t)
    }

    function Di(e, t, n) {
        var r = Mi(e, t), i = r.type, o = r.timeout, a = r.propCount;
        if (!i) return n();
        var s = i === Ci ? Ai : Si, c = 0, u = function () {
            e.removeEventListener(s, l), n()
        }, l = function (t) {
            t.target === e && ++c >= a && u()
        };
        setTimeout(function () {
            c < a && u()
        }, o + 1), e.addEventListener(s, l)
    }

    var Li = /\b(transform|all)(,|$)/;

    function Mi(e, t) {
        var n, r = window.getComputedStyle(e), i = (r[ki + "Delay"] || "").split(", "),
            o = (r[ki + "Duration"] || "").split(", "), a = Ii(i, o), s = (r[Oi + "Delay"] || "").split(", "),
            c = (r[Oi + "Duration"] || "").split(", "), u = Ii(s, c), l = 0, f = 0;
        return t === Ci ? a > 0 && (n = Ci, l = a, f = o.length) : t === xi ? u > 0 && (n = xi, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? Ci : xi : null) ? n === Ci ? o.length : c.length : 0, {
            type: n,
            timeout: l,
            propCount: f,
            hasTransform: n === Ci && Li.test(r[ki + "Property"])
        }
    }

    function Ii(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max.apply(null, t.map(function (t, n) {
            return Fi(t) + Fi(e[n])
        }))
    }

    function Fi(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."))
    }

    function Pi(e, r) {
        var i = e.elm;
        n(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
        var a = bi(e.data.transition);
        if (!t(a) && !n(i._enterCb) && 1 === i.nodeType) {
            for (var s = a.css, c = a.type, u = a.enterClass, l = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, b = a.beforeAppear, $ = a.appear, w = a.afterAppear, C = a.appearCancelled, x = a.duration, k = Wt, A = Wt.$vnode; A && A.parent;) k = A.context, A = A.parent;
            var O = !k._isMounted || !e.isRootInsert;
            if (!O || $ || "" === $) {
                var S = O && d ? d : u, T = O && h ? h : p, E = O && v ? v : l, N = O && b || m,
                    j = O && "function" == typeof $ ? $ : y, L = O && w || g, M = O && C || _,
                    I = f(o(x) ? x.enter : x), F = !1 !== s && !W, P = Bi(j), R = i._enterCb = D(function () {
                        F && (ji(i, E), ji(i, T)), R.cancelled ? (F && ji(i, S), M && M(i)) : L && L(i), i._enterCb = null
                    });
                e.data.show || it(e, "insert", function () {
                    var t = i.parentNode, n = t && t._pending && t._pending[e.key];
                    n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), j && j(i, R)
                }), N && N(i), F && (Ni(i, S), Ni(i, T), Ei(function () {
                    ji(i, S), R.cancelled || (Ni(i, E), P || (Hi(I) ? setTimeout(R, I) : Di(i, c, R)))
                })), e.data.show && (r && r(), j && j(i, R)), F || P || R()
            }
        }
    }

    function Ri(e, r) {
        var i = e.elm;
        n(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
        var a = bi(e.data.transition);
        if (t(a) || 1 !== i.nodeType) return r();
        if (!n(i._leaveCb)) {
            var s = a.css, c = a.type, u = a.leaveClass, l = a.leaveToClass, p = a.leaveActiveClass, d = a.beforeLeave,
                v = a.leave, h = a.afterLeave, m = a.leaveCancelled, y = a.delayLeave, g = a.duration,
                _ = !1 !== s && !W, b = Bi(v), $ = f(o(g) ? g.leave : g), w = i._leaveCb = D(function () {
                    i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (ji(i, l), ji(i, p)), w.cancelled ? (_ && ji(i, u), m && m(i)) : (r(), h && h(i)), i._leaveCb = null
                });
            y ? y(C) : C()
        }

        function C() {
            w.cancelled || (!e.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), d && d(i), _ && (Ni(i, u), Ni(i, p), Ei(function () {
                ji(i, u), w.cancelled || (Ni(i, l), b || (Hi($) ? setTimeout(w, $) : Di(i, c, w)))
            })), v && v(i, w), _ || b || w())
        }
    }

    function Hi(e) {
        return "number" == typeof e && !isNaN(e)
    }

    function Bi(e) {
        if (t(e)) return !1;
        var r = e.fns;
        return n(r) ? Bi(Array.isArray(r) ? r[0] : r) : (e._length || e.length) > 1
    }

    function Ui(e, t) {
        !0 !== t.data.show && Pi(t)
    }

    var zi = function (e) {
        var o, a, s = {}, c = e.modules, u = e.nodeOps;
        for (o = 0; o < rr.length; ++o) for (s[rr[o]] = [], a = 0; a < c.length; ++a) n(c[a][rr[o]]) && s[rr[o]].push(c[a][rr[o]]);

        function l(e) {
            var t = u.parentNode(e);
            n(t) && u.removeChild(t, e)
        }

        function f(e, t, i, o, a, c, l) {
            if (n(e.elm) && n(c) && (e = c[l] = me(e)), e.isRootInsert = !a, !function (e, t, i, o) {
                var a = e.data;
                if (n(a)) {
                    var c = n(e.componentInstance) && a.keepAlive;
                    if (n(a = a.hook) && n(a = a.init) && a(e, !1), n(e.componentInstance)) return d(e, t), v(i, e.elm, o), r(c) && function (e, t, r, i) {
                        for (var o, a = e; a.componentInstance;) if (a = a.componentInstance._vnode, n(o = a.data) && n(o = o.transition)) {
                            for (o = 0; o < s.activate.length; ++o) s.activate[o](nr, a);
                            t.push(a);
                            break
                        }
                        v(r, e.elm, i)
                    }(e, t, i, o), !0
                }
            }(e, t, i, o)) {
                var f = e.data, p = e.children, m = e.tag;
                n(m) ? (e.elm = e.ns ? u.createElementNS(e.ns, m) : u.createElement(m, e), g(e), h(e, p, t), n(f) && y(e, t), v(i, e.elm, o)) : r(e.isComment) ? (e.elm = u.createComment(e.text), v(i, e.elm, o)) : (e.elm = u.createTextNode(e.text), v(i, e.elm, o))
            }
        }

        function d(e, t) {
            n(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (y(e, t), g(e)) : (tr(e), t.push(e))
        }

        function v(e, t, r) {
            n(e) && (n(r) ? u.parentNode(r) === e && u.insertBefore(e, t, r) : u.appendChild(e, t))
        }

        function h(e, t, n) {
            if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) f(t[r], n, e.elm, null, !0, t, r); else i(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)))
        }

        function m(e) {
            for (; e.componentInstance;) e = e.componentInstance._vnode;
            return n(e.tag)
        }

        function y(e, t) {
            for (var r = 0; r < s.create.length; ++r) s.create[r](nr, e);
            n(o = e.data.hook) && (n(o.create) && o.create(nr, e), n(o.insert) && t.push(e))
        }

        function g(e) {
            var t;
            if (n(t = e.fnScopeId)) u.setStyleScope(e.elm, t); else for (var r = e; r;) n(t = r.context) && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t), r = r.parent;
            n(t = Wt) && t !== e.context && t !== e.fnContext && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t)
        }

        function _(e, t, n, r, i, o) {
            for (; r <= i; ++r) f(n[r], o, e, t, !1, n, r)
        }

        function b(e) {
            var t, r, i = e.data;
            if (n(i)) for (n(t = i.hook) && n(t = t.destroy) && t(e), t = 0; t < s.destroy.length; ++t) s.destroy[t](e);
            if (n(t = e.children)) for (r = 0; r < e.children.length; ++r) b(e.children[r])
        }

        function $(e, t, r) {
            for (; t <= r; ++t) {
                var i = e[t];
                n(i) && (n(i.tag) ? (w(i), b(i)) : l(i.elm))
            }
        }

        function w(e, t) {
            if (n(t) || n(e.data)) {
                var r, i = s.remove.length + 1;
                for (n(t) ? t.listeners += i : t = function (e, t) {
                    function n() {
                        0 == --n.listeners && l(e)
                    }

                    return n.listeners = t, n
                }(e.elm, i), n(r = e.componentInstance) && n(r = r._vnode) && n(r.data) && w(r, t), r = 0; r < s.remove.length; ++r) s.remove[r](e, t);
                n(r = e.data.hook) && n(r = r.remove) ? r(e, t) : t()
            } else l(e.elm)
        }

        function C(e, t, r, i) {
            for (var o = r; o < i; o++) {
                var a = t[o];
                if (n(a) && ir(e, a)) return o
            }
        }

        function x(e, i, o, a, c, l) {
            if (e !== i) {
                n(i.elm) && n(a) && (i = a[c] = me(i));
                var p = i.elm = e.elm;
                if (r(e.isAsyncPlaceholder)) n(i.asyncFactory.resolved) ? O(e.elm, i, o) : i.isAsyncPlaceholder = !0; else if (r(i.isStatic) && r(e.isStatic) && i.key === e.key && (r(i.isCloned) || r(i.isOnce))) i.componentInstance = e.componentInstance; else {
                    var d, v = i.data;
                    n(v) && n(d = v.hook) && n(d = d.prepatch) && d(e, i);
                    var h = e.children, y = i.children;
                    if (n(v) && m(i)) {
                        for (d = 0; d < s.update.length; ++d) s.update[d](e, i);
                        n(d = v.hook) && n(d = d.update) && d(e, i)
                    }
                    t(i.text) ? n(h) && n(y) ? h !== y && function (e, r, i, o, a) {
                        for (var s, c, l, p = 0, d = 0, v = r.length - 1, h = r[0], m = r[v], y = i.length - 1, g = i[0], b = i[y], w = !a; p <= v && d <= y;) t(h) ? h = r[++p] : t(m) ? m = r[--v] : ir(h, g) ? (x(h, g, o, i, d), h = r[++p], g = i[++d]) : ir(m, b) ? (x(m, b, o, i, y), m = r[--v], b = i[--y]) : ir(h, b) ? (x(h, b, o, i, y), w && u.insertBefore(e, h.elm, u.nextSibling(m.elm)), h = r[++p], b = i[--y]) : ir(m, g) ? (x(m, g, o, i, d), w && u.insertBefore(e, m.elm, h.elm), m = r[--v], g = i[++d]) : (t(s) && (s = or(r, p, v)), t(c = n(g.key) ? s[g.key] : C(g, r, p, v)) ? f(g, o, e, h.elm, !1, i, d) : ir(l = r[c], g) ? (x(l, g, o, i, d), r[c] = void 0, w && u.insertBefore(e, l.elm, h.elm)) : f(g, o, e, h.elm, !1, i, d), g = i[++d]);
                        p > v ? _(e, t(i[y + 1]) ? null : i[y + 1].elm, i, d, y, o) : d > y && $(r, p, v)
                    }(p, h, y, o, l) : n(y) ? (n(e.text) && u.setTextContent(p, ""), _(p, null, y, 0, y.length - 1, o)) : n(h) ? $(h, 0, h.length - 1) : n(e.text) && u.setTextContent(p, "") : e.text !== i.text && u.setTextContent(p, i.text), n(v) && n(d = v.hook) && n(d = d.postpatch) && d(e, i)
                }
            }
        }

        function k(e, t, i) {
            if (r(i) && n(e.parent)) e.parent.data.pendingInsert = t; else for (var o = 0; o < t.length; ++o) t[o].data.hook.insert(t[o])
        }

        var A = p("attrs,class,staticClass,staticStyle,key");

        function O(e, t, i, o) {
            var a, s = t.tag, c = t.data, u = t.children;
            if (o = o || c && c.pre, t.elm = e, r(t.isComment) && n(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
            if (n(c) && (n(a = c.hook) && n(a = a.init) && a(t, !0), n(a = t.componentInstance))) return d(t, i), !0;
            if (n(s)) {
                if (n(u)) if (e.hasChildNodes()) if (n(a = c) && n(a = a.domProps) && n(a = a.innerHTML)) {
                    if (a !== e.innerHTML) return !1
                } else {
                    for (var l = !0, f = e.firstChild, p = 0; p < u.length; p++) {
                        if (!f || !O(f, u[p], i, o)) {
                            l = !1;
                            break
                        }
                        f = f.nextSibling
                    }
                    if (!l || f) return !1
                } else h(t, u, i);
                if (n(c)) {
                    var v = !1;
                    for (var m in c) if (!A(m)) {
                        v = !0, y(t, i);
                        break
                    }
                    !v && c.class && et(c.class)
                }
            } else e.data !== t.text && (e.data = t.text);
            return !0
        }

        return function (e, i, o, a) {
            if (!t(i)) {
                var c, l = !1, p = [];
                if (t(e)) l = !0, f(i, p); else {
                    var d = n(e.nodeType);
                    if (!d && ir(e, i)) x(e, i, p, null, null, a); else {
                        if (d) {
                            if (1 === e.nodeType && e.hasAttribute(L) && (e.removeAttribute(L), o = !0), r(o) && O(e, i, p)) return k(i, p, !0), e;
                            c = e, e = new pe(u.tagName(c).toLowerCase(), {}, [], void 0, c)
                        }
                        var v = e.elm, h = u.parentNode(v);
                        if (f(i, p, v._leaveCb ? null : h, u.nextSibling(v)), n(i.parent)) for (var y = i.parent, g = m(i); y;) {
                            for (var _ = 0; _ < s.destroy.length; ++_) s.destroy[_](y);
                            if (y.elm = i.elm, g) {
                                for (var w = 0; w < s.create.length; ++w) s.create[w](nr, y);
                                var C = y.data.hook.insert;
                                if (C.merged) for (var A = 1; A < C.fns.length; A++) C.fns[A]()
                            } else tr(y);
                            y = y.parent
                        }
                        n(h) ? $([e], 0, 0) : n(e.tag) && b(e)
                    }
                }
                return k(i, p, l), i.elm
            }
            n(e) && b(e)
        }
    }({
        nodeOps: Qn, modules: [mr, xr, ni, oi, mi, z ? {
            create: Ui, activate: Ui, remove: function (e, t) {
                !0 !== e.data.show ? Ri(e, t) : t()
            }
        } : {}].concat(pr)
    });
    W && document.addEventListener("selectionchange", function () {
        var e = document.activeElement;
        e && e.vmodel && Xi(e, "input")
    });
    var Vi = {
        inserted: function (e, t, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? it(n, "postpatch", function () {
                Vi.componentUpdated(e, t, n)
            }) : Ki(e, t, n.context), e._vOptions = [].map.call(e.options, Wi)) : ("textarea" === n.tag || Xn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Zi), e.addEventListener("compositionend", Gi), e.addEventListener("change", Gi), W && (e.vmodel = !0)))
        }, componentUpdated: function (e, t, n) {
            if ("select" === n.tag) {
                Ki(e, t, n.context);
                var r = e._vOptions, i = e._vOptions = [].map.call(e.options, Wi);
                if (i.some(function (e, t) {
                    return !N(e, r[t])
                })) (e.multiple ? t.value.some(function (e) {
                    return qi(e, i)
                }) : t.value !== t.oldValue && qi(t.value, i)) && Xi(e, "change")
            }
        }
    };

    function Ki(e, t, n) {
        Ji(e, t, n), (q || Z) && setTimeout(function () {
            Ji(e, t, n)
        }, 0)
    }

    function Ji(e, t, n) {
        var r = t.value, i = e.multiple;
        if (!i || Array.isArray(r)) {
            for (var o, a, s = 0, c = e.options.length; s < c; s++) if (a = e.options[s], i) o = j(r, Wi(a)) > -1, a.selected !== o && (a.selected = o); else if (N(Wi(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
            i || (e.selectedIndex = -1)
        }
    }

    function qi(e, t) {
        return t.every(function (t) {
            return !N(t, e)
        })
    }

    function Wi(e) {
        return "_value" in e ? e._value : e.value
    }

    function Zi(e) {
        e.target.composing = !0
    }

    function Gi(e) {
        e.target.composing && (e.target.composing = !1, Xi(e.target, "input"))
    }

    function Xi(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function Yi(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : Yi(e.componentInstance._vnode)
    }

    var Qi = {
        model: Vi, show: {
            bind: function (e, t, n) {
                var r = t.value, i = (n = Yi(n)).data && n.data.transition,
                    o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                r && i ? (n.data.show = !0, Pi(n, function () {
                    e.style.display = o
                })) : e.style.display = r ? o : "none"
            }, update: function (e, t, n) {
                var r = t.value;
                !r != !t.oldValue && ((n = Yi(n)).data && n.data.transition ? (n.data.show = !0, r ? Pi(n, function () {
                    e.style.display = e.__vOriginalDisplay
                }) : Ri(n, function () {
                    e.style.display = "none"
                })) : e.style.display = r ? e.__vOriginalDisplay : "none")
            }, unbind: function (e, t, n, r, i) {
                i || (e.style.display = e.__vOriginalDisplay)
            }
        }
    }, eo = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    };

    function to(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? to(zt(t.children)) : e
    }

    function no(e) {
        var t = {}, n = e.$options;
        for (var r in n.propsData) t[r] = e[r];
        var i = n._parentListeners;
        for (var o in i) t[b(o)] = i[o];
        return t
    }

    function ro(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {props: t.componentOptions.propsData})
    }

    var io = function (e) {
        return e.tag || Ut(e)
    }, oo = function (e) {
        return "show" === e.name
    }, ao = {
        name: "transition", props: eo, abstract: !0, render: function (e) {
            var t = this, n = this.$slots.default;
            if (n && (n = n.filter(io)).length) {
                var r = this.mode, o = n[0];
                if (function (e) {
                    for (; e = e.parent;) if (e.data.transition) return !0
                }(this.$vnode)) return o;
                var a = to(o);
                if (!a) return o;
                if (this._leaving) return ro(e, o);
                var s = "__transition-" + this._uid + "-";
                a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : i(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                var c = (a.data || (a.data = {})).transition = no(this), u = this._vnode, l = to(u);
                if (a.data.directives && a.data.directives.some(oo) && (a.data.show = !0), l && l.data && !function (e, t) {
                    return t.key === e.key && t.tag === e.tag
                }(a, l) && !Ut(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                    var f = l.data.transition = A({}, c);
                    if ("out-in" === r) return this._leaving = !0, it(f, "afterLeave", function () {
                        t._leaving = !1, t.$forceUpdate()
                    }), ro(e, o);
                    if ("in-out" === r) {
                        if (Ut(a)) return u;
                        var p, d = function () {
                            p()
                        };
                        it(c, "afterEnter", d), it(c, "enterCancelled", d), it(f, "delayLeave", function (e) {
                            p = e
                        })
                    }
                }
                return o
            }
        }
    }, so = A({tag: String, moveClass: String}, eo);

    function co(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
    }

    function uo(e) {
        e.data.newPos = e.elm.getBoundingClientRect()
    }

    function lo(e) {
        var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, i = t.top - n.top;
        if (r || i) {
            e.data.moved = !0;
            var o = e.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
        }
    }

    delete so.mode;
    var fo = {
        Transition: ao, TransitionGroup: {
            props: so, beforeMount: function () {
                var e = this, t = this._update;
                this._update = function (n, r) {
                    var i = Zt(e);
                    e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r)
                }
            }, render: function (e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = no(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a)
                }
                if (r) {
                    for (var u = [], l = [], f = 0; f < r.length; f++) {
                        var p = r[f];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p)
                    }
                    this.kept = e(t, null, u), this.removed = l
                }
                return e(t, null, o)
            }, updated: function () {
                var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(co), e.forEach(uo), e.forEach(lo), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
                    if (e.data.moved) {
                        var n = e.elm, r = n.style;
                        Ni(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ai, n._moveCb = function e(r) {
                            r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ai, e), n._moveCb = null, ji(n, t))
                        })
                    }
                }))
            }, methods: {
                hasMove: function (e, t) {
                    if (!wi) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function (e) {
                        _i(n, e)
                    }), gi(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = Mi(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        }
    };
    wn.config.mustUseProp = jn, wn.config.isReservedTag = Wn, wn.config.isReservedAttr = En, wn.config.getTagNamespace = Zn, wn.config.isUnknownElement = function (e) {
        if (!z) return !0;
        if (Wn(e)) return !1;
        if (e = e.toLowerCase(), null != Gn[e]) return Gn[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? Gn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Gn[e] = /HTMLUnknownElement/.test(t.toString())
    }, A(wn.options.directives, Qi), A(wn.options.components, fo), wn.prototype.__patch__ = z ? zi : S, wn.prototype.$mount = function (e, t) {
        return function (e, t, n) {
            var r;
            return e.$el = t, e.$options.render || (e.$options.render = ve), Yt(e, "beforeMount"), r = function () {
                e._update(e._render(), n)
            }, new fn(e, r, S, {
                before: function () {
                    e._isMounted && !e._isDestroyed && Yt(e, "beforeUpdate")
                }
            }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Yt(e, "mounted")), e
        }(this, e = e && z ? Yn(e) : void 0, t)
    }, z && setTimeout(function () {
        F.devtools && ne && ne.emit("init", wn)
    }, 0);
    var po = /\{\{((?:.|\r?\n)+?)\}\}/g, vo = /[-.*+?^${}()|[\]\/\\]/g, ho = g(function (e) {
        var t = e[0].replace(vo, "\\$&"), n = e[1].replace(vo, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
    });
    var mo = {
        staticKeys: ["staticClass"], transformNode: function (e, t) {
            t.warn;
            var n = Fr(e, "class");
            n && (e.staticClass = JSON.stringify(n));
            var r = Ir(e, "class", !1);
            r && (e.classBinding = r)
        }, genData: function (e) {
            var t = "";
            return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
        }
    };
    var yo, go = {
            staticKeys: ["staticStyle"], transformNode: function (e, t) {
                t.warn;
                var n = Fr(e, "style");
                n && (e.staticStyle = JSON.stringify(ai(n)));
                var r = Ir(e, "style", !1);
                r && (e.styleBinding = r)
            }, genData: function (e) {
                var t = "";
                return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
            }
        }, _o = function (e) {
            return (yo = yo || document.createElement("div")).innerHTML = e, yo.textContent
        }, bo = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        $o = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        wo = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        Co = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        xo = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        ko = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + P.source + "]*", Ao = "((?:" + ko + "\\:)?" + ko + ")",
        Oo = new RegExp("^<" + Ao), So = /^\s*(\/?)>/, To = new RegExp("^<\\/" + Ao + "[^>]*>"),
        Eo = /^<!DOCTYPE [^>]+>/i, No = /^<!\--/, jo = /^<!\[/, Do = p("script,style,textarea", !0), Lo = {},
        Mo = {"&lt;": "<", "&gt;": ">", "&quot;": '"', "&amp;": "&", "&#10;": "\n", "&#9;": "\t", "&#39;": "'"},
        Io = /&(?:lt|gt|quot|amp|#39);/g, Fo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, Po = p("pre,textarea", !0),
        Ro = function (e, t) {
            return e && Po(e) && "\n" === t[0]
        };

    function Ho(e, t) {
        var n = t ? Fo : Io;
        return e.replace(n, function (e) {
            return Mo[e]
        })
    }

    var Bo, Uo, zo, Vo, Ko, Jo, qo, Wo, Zo = /^@|^v-on:/, Go = /^v-|^@|^:|^#/,
        Xo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Yo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Qo = /^\(|\)$/g,
        ea = /^\[.*\]$/, ta = /:(.*)$/, na = /^:|^\.|^v-bind:/, ra = /\.[^.\]]+(?=[^\]]*$)/g, ia = /^v-slot(:|$)|^#/,
        oa = /[\r\n]/, aa = /\s+/g, sa = g(_o), ca = "_empty_";

    function ua(e, t, n) {
        return {type: 1, tag: e, attrsList: t, attrsMap: ma(t), rawAttrsMap: {}, parent: n, children: []}
    }

    function la(e, t) {
        Bo = t.warn || Sr, Jo = t.isPreTag || T, qo = t.mustUseProp || T, Wo = t.getTagNamespace || T;
        t.isReservedTag;
        zo = Tr(t.modules, "transformNode"), Vo = Tr(t.modules, "preTransformNode"), Ko = Tr(t.modules, "postTransformNode"), Uo = t.delimiters;
        var n, r, i = [], o = !1 !== t.preserveWhitespace, a = t.whitespace, s = !1, c = !1;

        function u(e) {
            if (l(e), s || e.processed || (e = fa(e, t)), i.length || e === n || n.if && (e.elseif || e.else) && da(n, {
                exp: e.elseif,
                block: e
            }), r && !e.forbidden) if (e.elseif || e.else) a = e, (u = function (e) {
                var t = e.length;
                for (; t--;) {
                    if (1 === e[t].type) return e[t];
                    e.pop()
                }
            }(r.children)) && u.if && da(u, {exp: a.elseif, block: a}); else {
                if (e.slotScope) {
                    var o = e.slotTarget || '"default"';
                    (r.scopedSlots || (r.scopedSlots = {}))[o] = e
                }
                r.children.push(e), e.parent = r
            }
            var a, u;
            e.children = e.children.filter(function (e) {
                return !e.slotScope
            }), l(e), e.pre && (s = !1), Jo(e.tag) && (c = !1);
            for (var f = 0; f < Ko.length; f++) Ko[f](e, t)
        }

        function l(e) {
            if (!c) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
        }

        return function (e, t) {
            for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || T, s = t.canBeLeftOpenTag || T, c = 0; e;) {
                if (n = e, r && Do(r)) {
                    var u = 0, l = r.toLowerCase(),
                        f = Lo[l] || (Lo[l] = new RegExp("([\\s\\S]*?)(</" + l + "[^>]*>)", "i")),
                        p = e.replace(f, function (e, n, r) {
                            return u = r.length, Do(l) || "noscript" === l || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Ro(l, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
                        });
                    c += e.length - p.length, e = p, A(l, c - u, c)
                } else {
                    var d = e.indexOf("<");
                    if (0 === d) {
                        if (No.test(e)) {
                            var v = e.indexOf("--\x3e");
                            if (v >= 0) {
                                t.shouldKeepComment && t.comment(e.substring(4, v), c, c + v + 3), C(v + 3);
                                continue
                            }
                        }
                        if (jo.test(e)) {
                            var h = e.indexOf("]>");
                            if (h >= 0) {
                                C(h + 2);
                                continue
                            }
                        }
                        var m = e.match(Eo);
                        if (m) {
                            C(m[0].length);
                            continue
                        }
                        var y = e.match(To);
                        if (y) {
                            var g = c;
                            C(y[0].length), A(y[1], g, c);
                            continue
                        }
                        var _ = x();
                        if (_) {
                            k(_), Ro(_.tagName, e) && C(1);
                            continue
                        }
                    }
                    var b = void 0, $ = void 0, w = void 0;
                    if (d >= 0) {
                        for ($ = e.slice(d); !(To.test($) || Oo.test($) || No.test($) || jo.test($) || (w = $.indexOf("<", 1)) < 0);) d += w, $ = e.slice(d);
                        b = e.substring(0, d)
                    }
                    d < 0 && (b = e), b && C(b.length), t.chars && b && t.chars(b, c - b.length, c)
                }
                if (e === n) {
                    t.chars && t.chars(e);
                    break
                }
            }

            function C(t) {
                c += t, e = e.substring(t)
            }

            function x() {
                var t = e.match(Oo);
                if (t) {
                    var n, r, i = {tagName: t[1], attrs: [], start: c};
                    for (C(t[0].length); !(n = e.match(So)) && (r = e.match(xo) || e.match(Co));) r.start = c, C(r[0].length), r.end = c, i.attrs.push(r);
                    if (n) return i.unarySlash = n[1], C(n[0].length), i.end = c, i
                }
            }

            function k(e) {
                var n = e.tagName, c = e.unarySlash;
                o && ("p" === r && wo(n) && A(r), s(n) && r === n && A(n));
                for (var u = a(n) || !!c, l = e.attrs.length, f = new Array(l), p = 0; p < l; p++) {
                    var d = e.attrs[p], v = d[3] || d[4] || d[5] || "",
                        h = "a" === n && "href" === d[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                    f[p] = {name: d[1], value: Ho(v, h)}
                }
                u || (i.push({
                    tag: n,
                    lowerCasedTag: n.toLowerCase(),
                    attrs: f,
                    start: e.start,
                    end: e.end
                }), r = n), t.start && t.start(n, f, u, e.start, e.end)
            }

            function A(e, n, o) {
                var a, s;
                if (null == n && (n = c), null == o && (o = c), e) for (s = e.toLowerCase(), a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--) ; else a = 0;
                if (a >= 0) {
                    for (var u = i.length - 1; u >= a; u--) t.end && t.end(i[u].tag, n, o);
                    i.length = a, r = a && i[a - 1].tag
                } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o))
            }

            A()
        }(e, {
            warn: Bo,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function (e, o, a, l, f) {
                var p = r && r.ns || Wo(e);
                q && "svg" === p && (o = function (e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var r = e[n];
                        ya.test(r.name) || (r.name = r.name.replace(ga, ""), t.push(r))
                    }
                    return t
                }(o));
                var d, v = ua(e, o, r);
                p && (v.ns = p), "style" !== (d = v).tag && ("script" !== d.tag || d.attrsMap.type && "text/javascript" !== d.attrsMap.type) || te() || (v.forbidden = !0);
                for (var h = 0; h < Vo.length; h++) v = Vo[h](v, t) || v;
                s || (!function (e) {
                    null != Fr(e, "v-pre") && (e.pre = !0)
                }(v), v.pre && (s = !0)), Jo(v.tag) && (c = !0), s ? function (e) {
                    var t = e.attrsList, n = t.length;
                    if (n) for (var r = e.attrs = new Array(n), i = 0; i < n; i++) r[i] = {
                        name: t[i].name,
                        value: JSON.stringify(t[i].value)
                    }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end); else e.pre || (e.plain = !0)
                }(v) : v.processed || (pa(v), function (e) {
                    var t = Fr(e, "v-if");
                    if (t) e.if = t, da(e, {exp: t, block: e}); else {
                        null != Fr(e, "v-else") && (e.else = !0);
                        var n = Fr(e, "v-else-if");
                        n && (e.elseif = n)
                    }
                }(v), function (e) {
                    null != Fr(e, "v-once") && (e.once = !0)
                }(v)), n || (n = v), a ? u(v) : (r = v, i.push(v))
            },
            end: function (e, t, n) {
                var o = i[i.length - 1];
                i.length -= 1, r = i[i.length - 1], u(o)
            },
            chars: function (e, t, n) {
                if (r && (!q || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                    var i, u, l, f = r.children;
                    if (e = c || e.trim() ? "script" === (i = r).tag || "style" === i.tag ? e : sa(e) : f.length ? a ? "condense" === a && oa.test(e) ? "" : " " : o ? " " : "" : "") c || "condense" !== a || (e = e.replace(aa, " ")), !s && " " !== e && (u = function (e, t) {
                        var n = t ? ho(t) : po;
                        if (n.test(e)) {
                            for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
                                (i = r.index) > c && (s.push(o = e.slice(c, i)), a.push(JSON.stringify(o)));
                                var u = Ar(r[1].trim());
                                a.push("_s(" + u + ")"), s.push({"@binding": u}), c = i + r[0].length
                            }
                            return c < e.length && (s.push(o = e.slice(c)), a.push(JSON.stringify(o))), {
                                expression: a.join("+"),
                                tokens: s
                            }
                        }
                    }(e, Uo)) ? l = {
                        type: 2,
                        expression: u.expression,
                        tokens: u.tokens,
                        text: e
                    } : " " === e && f.length && " " === f[f.length - 1].text || (l = {
                        type: 3,
                        text: e
                    }), l && f.push(l)
                }
            },
            comment: function (e, t, n) {
                if (r) {
                    var i = {type: 3, text: e, isComment: !0};
                    r.children.push(i)
                }
            }
        }), n
    }

    function fa(e, t) {
        var n, r;
        (r = Ir(n = e, "key")) && (n.key = r), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
            var t = Ir(e, "ref");
            t && (e.ref = t, e.refInFor = function (e) {
                var t = e;
                for (; t;) {
                    if (void 0 !== t.for) return !0;
                    t = t.parent
                }
                return !1
            }(e))
        }(e), function (e) {
            var t;
            "template" === e.tag ? (t = Fr(e, "scope"), e.slotScope = t || Fr(e, "slot-scope")) : (t = Fr(e, "slot-scope")) && (e.slotScope = t);
            var n = Ir(e, "slot");
            n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Nr(e, "slot", n, function (e, t) {
                return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
            }(e, "slot")));
            if ("template" === e.tag) {
                var r = Pr(e, ia);
                if (r) {
                    var i = va(r), o = i.name, a = i.dynamic;
                    e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || ca
                }
            } else {
                var s = Pr(e, ia);
                if (s) {
                    var c = e.scopedSlots || (e.scopedSlots = {}), u = va(s), l = u.name, f = u.dynamic,
                        p = c[l] = ua("template", [], e);
                    p.slotTarget = l, p.slotTargetDynamic = f, p.children = e.children.filter(function (e) {
                        if (!e.slotScope) return e.parent = p, !0
                    }), p.slotScope = s.value || ca, e.children = [], e.plain = !1
                }
            }
        }(e), function (e) {
            "slot" === e.tag && (e.slotName = Ir(e, "name"))
        }(e), function (e) {
            var t;
            (t = Ir(e, "is")) && (e.component = t);
            null != Fr(e, "inline-template") && (e.inlineTemplate = !0)
        }(e);
        for (var i = 0; i < zo.length; i++) e = zo[i](e, t) || e;
        return function (e) {
            var t, n, r, i, o, a, s, c, u = e.attrsList;
            for (t = 0, n = u.length; t < n; t++) if (r = i = u[t].name, o = u[t].value, Go.test(r)) if (e.hasBindings = !0, (a = ha(r.replace(Go, ""))) && (r = r.replace(ra, "")), na.test(r)) r = r.replace(na, ""), o = Ar(o), (c = ea.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !c && "innerHtml" === (r = b(r)) && (r = "innerHTML"), a.camel && !c && (r = b(r)), a.sync && (s = Br(o, "$event"), c ? Mr(e, '"update:"+(' + r + ")", s, null, !1, 0, u[t], !0) : (Mr(e, "update:" + b(r), s, null, !1, 0, u[t]), C(r) !== b(r) && Mr(e, "update:" + C(r), s, null, !1, 0, u[t])))), a && a.prop || !e.component && qo(e.tag, e.attrsMap.type, r) ? Er(e, r, o, u[t], c) : Nr(e, r, o, u[t], c); else if (Zo.test(r)) r = r.replace(Zo, ""), (c = ea.test(r)) && (r = r.slice(1, -1)), Mr(e, r, o, a, !1, 0, u[t], c); else {
                var l = (r = r.replace(Go, "")).match(ta), f = l && l[1];
                c = !1, f && (r = r.slice(0, -(f.length + 1)), ea.test(f) && (f = f.slice(1, -1), c = !0)), Dr(e, r, i, o, f, c, a, u[t])
            } else Nr(e, r, JSON.stringify(o), u[t]), !e.component && "muted" === r && qo(e.tag, e.attrsMap.type, r) && Er(e, r, "true", u[t])
        }(e), e
    }

    function pa(e) {
        var t;
        if (t = Fr(e, "v-for")) {
            var n = function (e) {
                var t = e.match(Xo);
                if (!t) return;
                var n = {};
                n.for = t[2].trim();
                var r = t[1].trim().replace(Qo, ""), i = r.match(Yo);
                i ? (n.alias = r.replace(Yo, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
                return n
            }(t);
            n && A(e, n)
        }
    }

    function da(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
    }

    function va(e) {
        var t = e.name.replace(ia, "");
        return t || "#" !== e.name[0] && (t = "default"), ea.test(t) ? {
            name: t.slice(1, -1),
            dynamic: !0
        } : {name: '"' + t + '"', dynamic: !1}
    }

    function ha(e) {
        var t = e.match(ra);
        if (t) {
            var n = {};
            return t.forEach(function (e) {
                n[e.slice(1)] = !0
            }), n
        }
    }

    function ma(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
        return t
    }

    var ya = /^xmlns:NS\d+/, ga = /^NS\d+:/;

    function _a(e) {
        return ua(e.tag, e.attrsList.slice(), e.parent)
    }

    var ba = [mo, go, {
        preTransformNode: function (e, t) {
            if ("input" === e.tag) {
                var n, r = e.attrsMap;
                if (!r["v-model"]) return;
                if ((r[":type"] || r["v-bind:type"]) && (n = Ir(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
                    var i = Fr(e, "v-if", !0), o = i ? "&&(" + i + ")" : "", a = null != Fr(e, "v-else", !0),
                        s = Fr(e, "v-else-if", !0), c = _a(e);
                    pa(c), jr(c, "type", "checkbox"), fa(c, t), c.processed = !0, c.if = "(" + n + ")==='checkbox'" + o, da(c, {
                        exp: c.if,
                        block: c
                    });
                    var u = _a(e);
                    Fr(u, "v-for", !0), jr(u, "type", "radio"), fa(u, t), da(c, {
                        exp: "(" + n + ")==='radio'" + o,
                        block: u
                    });
                    var l = _a(e);
                    return Fr(l, "v-for", !0), jr(l, ":type", n), fa(l, t), da(c, {
                        exp: i,
                        block: l
                    }), a ? c.else = !0 : s && (c.elseif = s), c
                }
            }
        }
    }];
    var $a, wa, Ca = {
        expectHTML: !0,
        modules: ba,
        directives: {
            model: function (e, t, n) {
                var r = t.value, i = t.modifiers, o = e.tag, a = e.attrsMap.type;
                if (e.component) return Hr(e, r, i), !1;
                if ("select" === o) !function (e, t, n) {
                    var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                    r = r + " " + Br(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Mr(e, "change", r, null, !0)
                }(e, r, i); else if ("input" === o && "checkbox" === a) !function (e, t, n) {
                    var r = n && n.number, i = Ir(e, "value") || "null", o = Ir(e, "true-value") || "true",
                        a = Ir(e, "false-value") || "false";
                    Er(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Mr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Br(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Br(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Br(t, "$$c") + "}", null, !0)
                }(e, r, i); else if ("input" === o && "radio" === a) !function (e, t, n) {
                    var r = n && n.number, i = Ir(e, "value") || "null";
                    Er(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Mr(e, "change", Br(t, i), null, !0)
                }(e, r, i); else if ("input" === o || "textarea" === o) !function (e, t, n) {
                    var r = e.attrsMap.type, i = n || {}, o = i.lazy, a = i.number, s = i.trim, c = !o && "range" !== r,
                        u = o ? "change" : "range" === r ? Wr : "input", l = "$event.target.value";
                    s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
                    var f = Br(t, l);
                    c && (f = "if($event.target.composing)return;" + f), Er(e, "value", "(" + t + ")"), Mr(e, u, f, null, !0), (s || a) && Mr(e, "blur", "$forceUpdate()")
                }(e, r, i); else if (!F.isReservedTag(o)) return Hr(e, r, i), !1;
                return !0
            }, text: function (e, t) {
                t.value && Er(e, "textContent", "_s(" + t.value + ")", t)
            }, html: function (e, t) {
                t.value && Er(e, "innerHTML", "_s(" + t.value + ")", t)
            }
        },
        isPreTag: function (e) {
            return "pre" === e
        },
        isUnaryTag: bo,
        mustUseProp: jn,
        canBeLeftOpenTag: $o,
        isReservedTag: Wn,
        getTagNamespace: Zn,
        staticKeys: function (e) {
            return e.reduce(function (e, t) {
                return e.concat(t.staticKeys || [])
            }, []).join(",")
        }(ba)
    }, xa = g(function (e) {
        return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
    });

    function ka(e, t) {
        e && ($a = xa(t.staticKeys || ""), wa = t.isReservedTag || T, function e(t) {
            t.static = function (e) {
                if (2 === e.type) return !1;
                if (3 === e.type) return !0;
                return !(!e.pre && (e.hasBindings || e.if || e.for || d(e.tag) || !wa(e.tag) || function (e) {
                    for (; e.parent;) {
                        if ("template" !== (e = e.parent).tag) return !1;
                        if (e.for) return !0
                    }
                    return !1
                }(e) || !Object.keys(e).every($a)))
            }(t);
            if (1 === t.type) {
                if (!wa(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
                for (var n = 0, r = t.children.length; n < r; n++) {
                    var i = t.children[n];
                    e(i), i.static || (t.static = !1)
                }
                if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) {
                    var s = t.ifConditions[o].block;
                    e(s), s.static || (t.static = !1)
                }
            }
        }(e), function e(t, n) {
            if (1 === t.type) {
                if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);
                if (t.staticRoot = !1, t.children) for (var r = 0, i = t.children.length; r < i; r++) e(t.children[r], n || !!t.for);
                if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) e(t.ifConditions[o].block, n)
            }
        }(e, !1))
    }

    var Aa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/, Oa = /\([^)]*?\);*$/,
        Sa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Ta = {esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46]}, Ea = {
            esc: ["Esc", "Escape"],
            tab: "Tab",
            enter: "Enter",
            space: [" ", "Spacebar"],
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            delete: ["Backspace", "Delete", "Del"]
        }, Na = function (e) {
            return "if(" + e + ")return null;"
        }, ja = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: Na("$event.target !== $event.currentTarget"),
            ctrl: Na("!$event.ctrlKey"),
            shift: Na("!$event.shiftKey"),
            alt: Na("!$event.altKey"),
            meta: Na("!$event.metaKey"),
            left: Na("'button' in $event && $event.button !== 0"),
            middle: Na("'button' in $event && $event.button !== 1"),
            right: Na("'button' in $event && $event.button !== 2")
        };

    function Da(e, t) {
        var n = t ? "nativeOn:" : "on:", r = "", i = "";
        for (var o in e) {
            var a = La(e[o]);
            e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ","
        }
        return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
    }

    function La(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map(function (e) {
            return La(e)
        }).join(",") + "]";
        var t = Sa.test(e.value), n = Aa.test(e.value), r = Sa.test(e.value.replace(Oa, ""));
        if (e.modifiers) {
            var i = "", o = "", a = [];
            for (var s in e.modifiers) if (ja[s]) o += ja[s], Ta[s] && a.push(s); else if ("exact" === s) {
                var c = e.modifiers;
                o += Na(["ctrl", "shift", "alt", "meta"].filter(function (e) {
                    return !c[e]
                }).map(function (e) {
                    return "$event." + e + "Key"
                }).join("||"))
            } else a.push(s);
            return a.length && (i += function (e) {
                return "if(!$event.type.indexOf('key')&&" + e.map(Ma).join("&&") + ")return null;"
            }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
        }
        return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
    }

    function Ma(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = Ta[e], r = Ea[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
    }

    var Ia = {
        on: function (e, t) {
            e.wrapListeners = function (e) {
                return "_g(" + e + "," + t.value + ")"
            }
        }, bind: function (e, t) {
            e.wrapData = function (n) {
                return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
            }
        }, cloak: S
    }, Fa = function (e) {
        this.options = e, this.warn = e.warn || Sr, this.transforms = Tr(e.modules, "transformCode"), this.dataGenFns = Tr(e.modules, "genData"), this.directives = A(A({}, Ia), e.directives);
        var t = e.isReservedTag || T;
        this.maybeComponent = function (e) {
            return !!e.component || !t(e.tag)
        }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
    };

    function Pa(e, t) {
        var n = new Fa(t);
        return {render: "with(this){return " + (e ? Ra(e, n) : '_c("div")') + "}", staticRenderFns: n.staticRenderFns}
    }

    function Ra(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ha(e, t);
        if (e.once && !e.onceProcessed) return Ba(e, t);
        if (e.for && !e.forProcessed) return za(e, t);
        if (e.if && !e.ifProcessed) return Ua(e, t);
        if ("template" !== e.tag || e.slotTarget || t.pre) {
            if ("slot" === e.tag) return function (e, t) {
                var n = e.slotName || '"default"', r = qa(e, t), i = "_t(" + n + (r ? "," + r : ""),
                    o = e.attrs || e.dynamicAttrs ? Ga((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
                        return {name: b(e.name), value: e.value, dynamic: e.dynamic}
                    })) : null, a = e.attrsMap["v-bind"];
                !o && !a || r || (i += ",null");
                o && (i += "," + o);
                a && (i += (o ? "" : ",null") + "," + a);
                return i + ")"
            }(e, t);
            var n;
            if (e.component) n = function (e, t, n) {
                var r = t.inlineTemplate ? null : qa(t, n, !0);
                return "_c(" + e + "," + Va(t, n) + (r ? "," + r : "") + ")"
            }(e.component, e, t); else {
                var r;
                (!e.plain || e.pre && t.maybeComponent(e)) && (r = Va(e, t));
                var i = e.inlineTemplate ? null : qa(e, t, !0);
                n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
            }
            for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
            return n
        }
        return qa(e, t) || "void 0"
    }

    function Ha(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ra(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }

    function Ba(e, t) {
        if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Ua(e, t);
        if (e.staticInFor) {
            for (var n = "", r = e.parent; r;) {
                if (r.for) {
                    n = r.key;
                    break
                }
                r = r.parent
            }
            return n ? "_o(" + Ra(e, t) + "," + t.onceId++ + "," + n + ")" : Ra(e, t)
        }
        return Ha(e, t)
    }

    function Ua(e, t, n, r) {
        return e.ifProcessed = !0, function e(t, n, r, i) {
            if (!t.length) return i || "_e()";
            var o = t.shift();
            return o.exp ? "(" + o.exp + ")?" + a(o.block) + ":" + e(t, n, r, i) : "" + a(o.block);

            function a(e) {
                return r ? r(e, n) : e.once ? Ba(e, n) : Ra(e, n)
            }
        }(e.ifConditions.slice(), t, n, r)
    }

    function za(e, t, n, r) {
        var i = e.for, o = e.alias, a = e.iterator1 ? "," + e.iterator1 : "", s = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Ra)(e, t) + "})"
    }

    function Va(e, t) {
        var n = "{", r = function (e, t) {
            var n = e.directives;
            if (!n) return;
            var r, i, o, a, s = "directives:[", c = !1;
            for (r = 0, i = n.length; r < i; r++) {
                o = n[r], a = !0;
                var u = t.directives[o.name];
                u && (a = !!u(e, o, t.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},")
            }
            if (c) return s.slice(0, -1) + "]"
        }(e, t);
        r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
        for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
        if (e.attrs && (n += "attrs:" + Ga(e.attrs) + ","), e.props && (n += "domProps:" + Ga(e.props) + ","), e.events && (n += Da(e.events, !1) + ","), e.nativeEvents && (n += Da(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
            var r = e.for || Object.keys(t).some(function (e) {
                var n = t[e];
                return n.slotTargetDynamic || n.if || n.for || Ka(n)
            }), i = !!e.if;
            if (!r) for (var o = e.parent; o;) {
                if (o.slotScope && o.slotScope !== ca || o.for) {
                    r = !0;
                    break
                }
                o.if && (i = !0), o = o.parent
            }
            var a = Object.keys(t).map(function (e) {
                return Ja(t[e], n)
            }).join(",");
            return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function (e) {
                var t = 5381, n = e.length;
                for (; n;) t = 33 * t ^ e.charCodeAt(--n);
                return t >>> 0
            }(a) : "") + ")"
        }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
            var o = function (e, t) {
                var n = e.children[0];
                if (n && 1 === n.type) {
                    var r = Pa(n, t.options);
                    return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
                        return "function(){" + e + "}"
                    }).join(",") + "]}"
                }
            }(e, t);
            o && (n += o + ",")
        }
        return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Ga(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
    }

    function Ka(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(Ka))
    }

    function Ja(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e.if && !e.ifProcessed && !n) return Ua(e, t, Ja, "null");
        if (e.for && !e.forProcessed) return za(e, t, Ja);
        var r = e.slotScope === ca ? "" : String(e.slotScope),
            i = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if + ")?" + (qa(e, t) || "undefined") + ":undefined" : qa(e, t) || "undefined" : Ra(e, t)) + "}",
            o = r ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}"
    }

    function qa(e, t, n, r, i) {
        var o = e.children;
        if (o.length) {
            var a = o[0];
            if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
                var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
                return "" + (r || Ra)(a, t) + s
            }
            var c = n ? function (e, t) {
                for (var n = 0, r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (1 === i.type) {
                        if (Wa(i) || i.ifConditions && i.ifConditions.some(function (e) {
                            return Wa(e.block)
                        })) {
                            n = 2;
                            break
                        }
                        (t(i) || i.ifConditions && i.ifConditions.some(function (e) {
                            return t(e.block)
                        })) && (n = 1)
                    }
                }
                return n
            }(o, t.maybeComponent) : 0, u = i || Za;
            return "[" + o.map(function (e) {
                return u(e, t)
            }).join(",") + "]" + (c ? "," + c : "")
        }
    }

    function Wa(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
    }

    function Za(e, t) {
        return 1 === e.type ? Ra(e, t) : 3 === e.type && e.isComment ? (r = e, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Xa(JSON.stringify(n.text))) + ")";
        var n, r
    }

    function Ga(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
            var i = e[r], o = Xa(i.value);
            i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ","
        }
        return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
    }

    function Xa(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }

    new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");

    function Ya(e, t) {
        try {
            return new Function(e)
        } catch (n) {
            return t.push({err: n, code: e}), S
        }
    }

    function Qa(e) {
        var t = Object.create(null);
        return function (n, r, i) {
            (r = A({}, r)).warn;
            delete r.warn;
            var o = r.delimiters ? String(r.delimiters) + n : n;
            if (t[o]) return t[o];
            var a = e(n, r), s = {}, c = [];
            return s.render = Ya(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function (e) {
                return Ya(e, c)
            }), t[o] = s
        }
    }

    var es, ts, ns = (es = function (e, t) {
        var n = la(e.trim(), t);
        !1 !== t.optimize && ka(n, t);
        var r = Pa(n, t);
        return {ast: n, render: r.render, staticRenderFns: r.staticRenderFns}
    }, function (e) {
        function t(t, n) {
            var r = Object.create(e), i = [], o = [];
            if (n) for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = A(Object.create(e.directives || null), n.directives)), n) "modules" !== a && "directives" !== a && (r[a] = n[a]);
            r.warn = function (e, t, n) {
                (n ? o : i).push(e)
            };
            var s = es(t.trim(), r);
            return s.errors = i, s.tips = o, s
        }

        return {compile: t, compileToFunctions: Qa(t)}
    })(Ca), rs = (ns.compile, ns.compileToFunctions);

    function is(e) {
        return (ts = ts || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ts.innerHTML.indexOf("&#10;") > 0
    }

    var os = !!z && is(!1), as = !!z && is(!0), ss = g(function (e) {
        var t = Yn(e);
        return t && t.innerHTML
    }), cs = wn.prototype.$mount;
    return wn.prototype.$mount = function (e, t) {
        if ((e = e && Yn(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r) if ("string" == typeof r) "#" === r.charAt(0) && (r = ss(r)); else {
                if (!r.nodeType) return this;
                r = r.innerHTML
            } else e && (r = function (e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)), t.innerHTML
            }(e));
            if (r) {
                var i = rs(r, {
                    outputSourceRange: !1,
                    shouldDecodeNewlines: os,
                    shouldDecodeNewlinesForHref: as,
                    delimiters: n.delimiters,
                    comments: n.comments
                }, this), o = i.render, a = i.staticRenderFns;
                n.render = o, n.staticRenderFns = a
            }
        }
        return cs.call(this, e, t)
    }, wn.compile = rs, wn
});

//Vue Spinner
;!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.VueSpinner = e() : t.VueSpinner = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var a = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var a = i(75), r = n(a), o = i(72), s = n(o), l = i(69), d = n(l), p = i(77), f = n(p), c = i(67), u = n(c),
            v = i(82), m = n(v), y = i(78), b = n(y), h = i(71), g = n(h), x = i(74), S = n(x), k = i(81), w = n(k),
            D = i(79), Y = n(D), z = i(80), _ = n(z), R = i(73), L = n(R), M = i(76), X = n(M), B = i(68), C = n(B),
            j = i(70), O = n(j), F = {
                PulseLoader: r.default,
                GridLoader: s.default,
                ClipLoader: d.default,
                RiseLoader: f.default,
                BeatLoader: u.default,
                SyncLoader: m.default,
                RotateLoader: b.default,
                FadeLoader: g.default,
                PacmanLoader: S.default,
                SquareLoader: w.default,
                ScaleLoader: Y.default,
                SkewLoader: _.default,
                MoonLoader: L.default,
                RingLoader: X.default,
                BounceLoader: C.default,
                DotLoader: O.default
            };
        t.exports = F
    }, function (t, e) {
        t.exports = function () {
            var t = [];
            return t.toString = function () {
                for (var t = [], e = 0; e < this.length; e++) {
                    var i = this[e];
                    i[2] ? t.push("@media " + i[2] + "{" + i[1] + "}") : t.push(i[1])
                }
                return t.join("")
            }, t.i = function (e, i) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var n = {}, a = 0; a < this.length; a++) {
                    var r = this[a][0];
                    "number" == typeof r && (n[r] = !0)
                }
                for (a = 0; a < e.length; a++) {
                    var o = e[a];
                    "number" == typeof o[0] && n[o[0]] || (i && !o[2] ? o[2] = i : i && (o[2] = "(" + o[2] + ") and (" + i + ")"), t.push(o))
                }
            }, t
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], a = u[n.id];
                if (a) {
                    a.refs++;
                    for (var r = 0; r < a.parts.length; r++) a.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) a.parts.push(d(n.parts[r], e))
                } else {
                    for (var o = [], r = 0; r < n.parts.length; r++) o.push(d(n.parts[r], e));
                    u[n.id] = {id: n.id, refs: 1, parts: o}
                }
            }
        }

        function a(t) {
            for (var e = [], i = {}, n = 0; n < t.length; n++) {
                var a = t[n], r = a[0], o = a[1], s = a[2], l = a[3], d = {css: o, media: s, sourceMap: l};
                i[r] ? i[r].parts.push(d) : e.push(i[r] = {id: r, parts: [d]})
            }
            return e
        }

        function r(t, e) {
            var i = y(), n = g[g.length - 1];
            if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), g.push(e); else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                i.appendChild(e)
            }
        }

        function o(t) {
            t.parentNode.removeChild(t);
            var e = g.indexOf(t);
            e >= 0 && g.splice(e, 1)
        }

        function s(t) {
            var e = document.createElement("style");
            return e.type = "text/css", r(t, e), e
        }

        function l(t) {
            var e = document.createElement("link");
            return e.rel = "stylesheet", r(t, e), e
        }

        function d(t, e) {
            var i, n, a;
            if (e.singleton) {
                var r = h++;
                i = b || (b = s(e)), n = p.bind(null, i, r, !1), a = p.bind(null, i, r, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = l(e), n = c.bind(null, i), a = function () {
                o(i), i.href && URL.revokeObjectURL(i.href)
            }) : (i = s(e), n = f.bind(null, i), a = function () {
                o(i)
            });
            return n(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else a()
            }
        }

        function p(t, e, i, n) {
            var a = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = x(e, a); else {
                var r = document.createTextNode(a), o = t.childNodes;
                o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(r, o[e]) : t.appendChild(r)
            }
        }

        function f(t, e) {
            var i = e.css, n = e.media;
            if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(i))
            }
        }

        function c(t, e) {
            var i = e.css, n = e.sourceMap;
            n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
            var a = new Blob([i], {type: "text/css"}), r = t.href;
            t.href = URL.createObjectURL(a), r && URL.revokeObjectURL(r)
        }

        var u = {}, v = function (t) {
            var e;
            return function () {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e
            }
        }, m = v(function () {
            return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
        }), y = v(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), b = null, h = 0, g = [];
        t.exports = function (t, e) {
            e = e || {}, "undefined" == typeof e.singleton && (e.singleton = m()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var i = a(t);
            return n(i, e), function (t) {
                for (var r = [], o = 0; o < i.length; o++) {
                    var s = i[o], l = u[s.id];
                    l.refs--, r.push(l)
                }
                if (t) {
                    var d = a(t);
                    n(d, e)
                }
                for (var o = 0; o < r.length; o++) {
                    var l = r[o];
                    if (0 === l.refs) {
                        for (var p = 0; p < l.parts.length; p++) l.parts[p]();
                        delete u[l.id]
                    }
                }
            }
        };
        var x = function () {
            var t = [];
            return function (e, i) {
                return t[e] = i, t.filter(Boolean).join("\n")
            }
        }()
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "BeatLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "15px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        height: this.size,
                        width: this.size,
                        margin: this.margin,
                        borderRadius: this.radius
                    }
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "BounceLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "60px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        height: this.size,
                        width: this.size,
                        borderRadius: this.radius,
                        opacity: .6,
                        position: "absolute",
                        top: 0,
                        left: 0
                    }
                }
            },
            computed: {
                spinnerBasicStyle: function () {
                    return {height: this.size, width: this.size, position: "relative"}
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "ClipLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "35px"},
                radius: {type: String, default: "100%"}
            },
            computed: {
                spinnerStyle: function () {
                    return {
                        height: this.size,
                        width: this.size,
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderColor: this.color + " " + this.color + " transparent",
                        borderRadius: this.radius,
                        background: "transparent"
                    }
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "DotLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "60px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            computed: {
                spinnerStyle: function () {
                    return {
                        backgroundColor: this.color,
                        height: parseFloat(this.size) / 2 + "px",
                        width: parseFloat(this.size) / 2 + "px",
                        borderRadius: this.radius
                    }
                }, spinnerBasicStyle: function () {
                    return {height: this.size, width: this.size, position: "relative"}
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "FadeLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                height: {type: String, default: "15px"},
                width: {type: String, default: "5px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "20px"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        height: this.height,
                        width: this.width,
                        margin: this.margin,
                        borderRadius: this.radius
                    }
                }
            },
            computed: {
                ngRadius: function () {
                    return "-" + this.radius
                }, quarter: function () {
                    return parseFloat(this.radius) / 2 + parseFloat(this.radius) / 5.5 + "px"
                }, ngQuarter: function () {
                    return "-" + this.quarter
                }, animationStyle1: function () {
                    return {top: this.radius, left: 0, animationDelay: "0.12s"}
                }, animationStyle2: function () {
                    return {top: this.quarter, left: this.quarter, animationDelay: "0.24s", transform: "rotate(-45deg)"}
                }, animationStyle3: function () {
                    return {top: 0, left: this.radius, animationDelay: "0.36s", transform: "rotate(90deg)"}
                }, animationStyle4: function () {
                    return {
                        top: this.ngQuarter,
                        left: this.quarter,
                        animationDelay: "0.48s",
                        transform: "rotate(45deg)"
                    }
                }, animationStyle5: function () {
                    return {top: this.ngRadius, left: 0, animationDelay: "0.60s"}
                }, animationStyle6: function () {
                    return {
                        top: this.ngQuarter,
                        left: this.ngQuarter,
                        animationDelay: "0.72s",
                        transform: "rotate(-45deg)"
                    }
                }, animationStyle7: function () {
                    return {top: 0, left: this.ngRadius, animationDelay: "0.84s", transform: "rotate(90deg)"}
                }, animationStyle8: function () {
                    return {
                        top: this.quarter,
                        left: this.ngQuarter,
                        animationDelay: "0.96s",
                        transform: "rotate(45deg)"
                    }
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "GridLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "15px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        width: this.size,
                        height: this.size,
                        margin: this.margin,
                        borderRadius: this.radius
                    }
                }
            },
            computed: {
                animationStyle: function () {
                    return {
                        animationName: "v-gridStretchDelay",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "ease",
                        animationFillMode: "both",
                        display: "inline-block"
                    }
                }, animationStyle1: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle2: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle3: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle4: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle5: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle6: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle7: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle8: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, animationStyle9: function () {
                    return {animationDelay: this.delay(), animationDuration: this.duration()}
                }, containerStyle: function () {
                    return {width: 3 * parseFloat(this.size) + 6 * parseFloat(this.margin) + "px", fontSize: 0}
                }
            },
            methods: {
                random: function (t) {
                    return Math.random() * t
                }, delay: function () {
                    return this.random(100) / 100 - .2 + "s"
                }, duration: function () {
                    return this.random(100) / 100 + .6 + "s"
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "MoonLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "60px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {spinnerStyle: {height: this.size, width: this.size, borderRadius: this.radius}}
            },
            computed: {
                moonSize: function () {
                    return parseFloat(this.size) / 7
                }, spinnerMoonStyle: function () {
                    return {height: this.moonSize + "px", width: this.moonSize + "px", borderRadius: this.radius}
                }, animationStyle2: function () {
                    return {top: parseFloat(this.size) / 2 - this.moonSize / 2 + "px", backgroundColor: this.color}
                }, animationStyle3: function () {
                    return {border: this.moonSize + "px solid " + this.color}
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "PacmanLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "25px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerDelay2: {animationDelay: "0.25s"},
                    spinnerDelay3: {animationDelay: "0.50s"},
                    spinnerDelay4: {animationDelay: "0.75s"},
                    spinnerDelay5: {animationDelay: "1s"}
                }
            },
            computed: {
                spinnerStyle: function () {
                    return {
                        backgroundColor: this.color,
                        width: this.size,
                        height: this.size,
                        margin: this.margin,
                        borderRadius: this.radius
                    }
                }, border1: function () {
                    return this.size + " solid transparent"
                }, border2: function () {
                    return this.size + " solid " + this.color
                }, spinnerStyle1: function () {
                    return {
                        width: 0,
                        height: 0,
                        borderTop: this.border2,
                        borderRight: this.border1,
                        borderBottom: this.border2,
                        borderLeft: this.border2,
                        borderRadius: this.size
                    }
                }, animationStyle: function () {
                    return {
                        width: "10px",
                        height: "10px",
                        transform: "translate(0, " + -parseFloat(this.size) / 4 + "px)",
                        position: "absolute",
                        top: "25px",
                        left: "100px",
                        animationName: "v-pacmanStretchDelay",
                        animationDuration: "1s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "linear",
                        animationFillMode: "both"
                    }
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "PulseLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "15px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        width: this.size,
                        height: this.size,
                        margin: this.margin,
                        borderRadius: this.radius,
                        display: "inline-block",
                        animationName: "v-pulseStretchDelay",
                        animationDuration: "0.75s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
                        animationFillMode: "both"
                    },
                    spinnerDelay1: {animationDelay: "0.12s"},
                    spinnerDelay2: {animationDelay: "0.24s"},
                    spinnerDelay3: {animationDelay: "0.36s"}
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "RingLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "60px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            computed: {
                spinnerStyle: function () {
                    return {
                        height: this.size,
                        width: this.size,
                        border: parseFloat(this.size) / 10 + "px solid" + this.color,
                        opacity: .4,
                        borderRadius: this.radius
                    }
                }, spinnerBasicStyle: function () {
                    return {height: this.size, width: this.size, position: "relative"}
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "RiseLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "15px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        height: this.size,
                        width: this.size,
                        margin: this.margin,
                        borderRadius: this.radius
                    }
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "RotateLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "15px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        height: this.size,
                        width: this.size,
                        margin: this.margin,
                        borderRadius: this.radius
                    }
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "ScaleLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                height: {type: String, default: "35px"},
                width: {type: String, default: "4px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "2px"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        height: this.height,
                        width: this.width,
                        margin: this.margin,
                        borderRadius: this.radius,
                        display: "inline-block",
                        animationName: "v-scaleStretchDelay",
                        animationDuration: "1s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
                        animationFillMode: "both"
                    },
                    spinnerDelay1: {animationDelay: "0.1s"},
                    spinnerDelay2: {animationDelay: "0.2s"},
                    spinnerDelay3: {animationDelay: "0.3s"},
                    spinnerDelay4: {animationDelay: "0.4s"},
                    spinnerDelay5: {animationDelay: "0.5s"}
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "SkewLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "20px"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        height: 0,
                        width: 0,
                        borderLeft: this.size + " solid transparent",
                        borderRight: this.size + " solid transparent",
                        borderBottom: this.size + " solid " + this.color
                    }
                }
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "SquareLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "50px"}
            },
            data: function () {
                return {spinnerStyle: {backgroundColor: this.color, height: this.size, width: this.size}}
            }
        }
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
            name: "SyncLoader",
            props: {
                loading: {type: Boolean, default: !0},
                color: {type: String, default: "#5dc596"},
                size: {type: String, default: "15px"},
                margin: {type: String, default: "2px"},
                radius: {type: String, default: "100%"}
            },
            data: function () {
                return {
                    spinnerStyle: {
                        backgroundColor: this.color,
                        height: this.size,
                        width: this.size,
                        margin: this.margin,
                        borderRadius: this.radius,
                        display: "inline-block",
                        animationName: "v-syncStretchDelay",
                        animationDuration: "0.6s",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "ease-in-out",
                        animationFillMode: "both"
                    },
                    spinnerDelay1: {animationDelay: "0.07s"},
                    spinnerDelay2: {animationDelay: "0.14s"},
                    spinnerDelay3: {animationDelay: "0.21s"}
                }
            }
        }
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner .v-rotate1{-webkit-animation:v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);animation:v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block;position:relative}.v-spinner .v-rotate2{opacity:.8;position:absolute;top:0;left:-28px}.v-spinner .v-rotate3{opacity:.8;position:absolute;top:0;left:25px}@-webkit-keyframes v-rotateStretchDelay{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes v-rotateStretchDelay{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner .v-moon1{position:relative}.v-spinner .v-moon1,.v-spinner .v-moon2{-webkit-animation:v-moonStretchDelay .6s 0s infinite linear;animation:v-moonStretchDelay .6s 0s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.v-spinner .v-moon2{opacity:.8;position:absolute}.v-spinner .v-moon3{opacity:.1}@-webkit-keyframes v-moonStretchDelay{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes v-moonStretchDelay{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner{text-align:center}@-webkit-keyframes v-pacmanStretchDelay{75%{-webkit-opacity:.7;opacity:.7}to{-webkit-transform:translate(-100px,-6.25px);transform:translate(-100px,-6.25px)}}@keyframes v-pacmanStretchDelay{75%{-webkit-opacity:.7;opacity:.7}to{-webkit-transform:translate(-100px,-6.25px);transform:translate(-100px,-6.25px)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner .v-beat{-webkit-animation:v-beatStretchDelay .7s infinite linear;animation:v-beatStretchDelay .7s infinite linear;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}.v-spinner .v-beat-odd{-webkit-animation-delay:0s;animation-delay:0s}.v-spinner .v-beat-even{-webkit-animation-delay:.35s;animation-delay:.35s}@-webkit-keyframes v-beatStretchDelay{50%{-webkit-transform:scale(.75);transform:scale(.75);-webkit-opacity:.2;opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}}@keyframes v-beatStretchDelay{50%{-webkit-transform:scale(.75);transform:scale(.75);-webkit-opacity:.2;opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, '.v-spinner .v-dot1{-webkit-animation:v-dotRotate 2s 0s infinite linear;animation:v-dotRotate 2s 0s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.v-spinner .v-dot2{-webkit-animation:v-dotBounce 2s 0s infinite linear;animation:v-dotBounce 2s 0s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:"absolute";top:0;bottom:auto}.v-spinner .v-dot3{-webkit-animation:v-dotBounce 2s -1s infinite linear;animation:v-dotBounce 2s -1s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;position:"absolute";top:auto;bottom:0}@-webkit-keyframes v-dotRotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes v-dotRotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes v-dotBounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes v-dotBounce{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}', ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, "@-webkit-keyframes v-pulseStretchDelay{0%,80%{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);-webkit-opacity:.7;opacity:.7}}@keyframes v-pulseStretchDelay{0%,80%{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}45%{-webkit-transform:scale(.1);transform:scale(.1);-webkit-opacity:.7;opacity:.7}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, "@-webkit-keyframes v-syncStretchDelay{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes v-syncStretchDelay{33%{-webkit-transform:translateY(10px);transform:translateY(10px)}66%{-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner .v-fade{-webkit-animation:v-fadeStretchDelay 1.2s infinite ease-in-out;animation:v-fadeStretchDelay 1.2s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both;position:absolute}@-webkit-keyframes v-fadeStretchDelay{50%{-webkit-opacity:.3;opacity:.3}to{-webkit-opacity:1;opacity:1}}@keyframes v-fadeStretchDelay{50%{-webkit-opacity:.3;opacity:.3}to{-webkit-opacity:1;opacity:1}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner .v-ring2{-webkit-animation:v-ringRightRotate 2s 0s infinite linear;animation:v-ringRightRotate 2s 0s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.v-spinner .v-ring2,.v-spinner .v-ring3{-webkit-perspective:800px;perspective:800px;position:absolute;top:0;left:0}.v-spinner .v-ring3{-webkit-animation:v-ringLeftRotate 2s 0s infinite linear;animation:v-ringLeftRotate 2s 0s infinite linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes v-ringRightRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg) rotate(0deg);transform:rotateX(0deg) rotateY(0deg) rotate(0deg)}to{-webkit-transform:rotateX(180deg) rotateY(1turn) rotate(1turn);transform:rotateX(180deg) rotateY(1turn) rotate(1turn)}}@keyframes v-ringRightRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg) rotate(0deg);transform:rotateX(0deg) rotateY(0deg) rotate(0deg)}to{-webkit-transform:rotateX(180deg) rotateY(1turn) rotate(1turn);transform:rotateX(180deg) rotateY(1turn) rotate(1turn)}}@-webkit-keyframes v-ringLeftRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg) rotate(0deg);transform:rotateX(0deg) rotateY(0deg) rotate(0deg)}to{-webkit-transform:rotateX(1turn) rotateY(180deg) rotate(1turn);transform:rotateX(1turn) rotateY(180deg) rotate(1turn)}}@keyframes v-ringLeftRotate{0%{-webkit-transform:rotateX(0deg) rotateY(0deg) rotate(0deg);transform:rotateX(0deg) rotateY(0deg) rotate(0deg)}to{-webkit-transform:rotateX(1turn) rotateY(180deg) rotate(1turn);transform:rotateX(1turn) rotateY(180deg) rotate(1turn)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner .v-bounce2{-webkit-animation:v-bounceStretchDelay 2s 1s infinite ease-in-out;animation:v-bounceStretchDelay 2s 1s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.v-spinner .v-bounce3{-webkit-animation:v-bounceStretchDelay 2s 0s infinite ease-in-out;animation:v-bounceStretchDelay 2s 0s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes v-bounceStretchDelay{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes v-bounceStretchDelay{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner{text-align:center}.v-spinner .v-square{-webkit-animation:v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);animation:v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-perspective:100px;perspective:100px;display:inline-block}@-webkit-keyframes v-squareDelay{25%{-webkit-transform:rotateX(180deg) rotateY(0);transform:rotateX(180deg) rotateY(0)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0) rotateY(180deg);transform:rotateX(0) rotateY(180deg)}to{-webkit-transform:rotateX(0) rotateY(0);transform:rotateX(0) rotateY(0)}}@keyframes v-squareDelay{25%{-webkit-transform:rotateX(180deg) rotateY(0);transform:rotateX(180deg) rotateY(0)}50%{-webkit-transform:rotateX(180deg) rotateY(180deg);transform:rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:rotateX(0) rotateY(180deg);transform:rotateX(0) rotateY(180deg)}to{-webkit-transform:rotateX(0) rotateY(0);transform:rotateX(0) rotateY(0)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner{text-align:center}.v-spinner .v-rise-odd{-webkit-animation:v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);animation:v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}.v-spinner .v-rise-even{-webkit-animation:v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);animation:v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}@-webkit-keyframes v-riseOddDelay{25{-webkit-transform:translateY(30px);transform:translateY(30px)}0%{-webkit-transform:scale(.4);transform:scale(.4)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-30px);transform:translateY(-30px)}to{-webkit-transform:translateY(0) scale(.75);transform:translateY(0) scale(.75)}}@keyframes v-riseOddDelay{25{-webkit-transform:translateY(30px);transform:translateY(30px)}0%{-webkit-transform:scale(.4);transform:scale(.4)}50%{-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-30px);transform:translateY(-30px)}to{-webkit-transform:translateY(0) scale(.75);transform:translateY(0) scale(.75)}}@-webkit-keyframes v-riseEvenDelay{25{-webkit-transform:translateY(-30px);transform:translateY(-30px)}0%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(.4);transform:scale(.4)}75%{-webkit-transform:translateY(30px);transform:translateY(30px)}to{-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes v-riseEvenDelay{25{-webkit-transform:translateY(-30px);transform:translateY(-30px)}0%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(.4);transform:scale(.4)}75%{-webkit-transform:translateY(30px);transform:translateY(30px)}to{-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner{text-align:center}.v-spinner .v-clip{-webkit-animation:v-clipDelay .75s 0s infinite linear;animation:v-clipDelay .75s 0s infinite linear;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}@-webkit-keyframes v-clipDelay{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.8);transform:rotate(180deg) scale(.8)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}@keyframes v-clipDelay{0%{-webkit-transform:rotate(0deg) scale(1);transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(180deg) scale(.8);transform:rotate(180deg) scale(.8)}to{-webkit-transform:rotate(1turn) scale(1);transform:rotate(1turn) scale(1)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, "@-webkit-keyframes v-gridStretchDelay{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-opacity:.7;opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}}@keyframes v-gridStretchDelay{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-opacity:.7;opacity:.7}to{-webkit-transform:scale(1);transform:scale(1);-webkit-opacity:1;opacity:1}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner{text-align:center}.v-spinner .v-skew{-webkit-animation:v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);animation:v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block}@-webkit-keyframes v-skewDelay{25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}to{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}}@keyframes v-skewDelay{25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}to{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}}", ""])
    }, function (t, e, i) {
        e = t.exports = i(1)(), e.push([t.id, ".v-spinner{text-align:center}@-webkit-keyframes v-scaleStretchDelay{0%{-webkit-animation-name:inherit;-webkit-animation-duration:inherit;-webkit-animation-iteration-count:inherit;-webkit-animation-direction:inherit}to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@keyframes v-scaleStretchDelay{0%{-webkit-animation-name:inherit;-webkit-animation-duration:inherit;-webkit-animation-iteration-count:inherit;-webkit-animation-direction:inherit}to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}", ""])
    }, function (t, e, i) {
        var n = i(19);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(20);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(21);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(22);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(23);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(24);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(25);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(26);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(27);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(28);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(29);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(30);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(31);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(32);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals);
    }, function (t, e, i) {
        var n = i(33);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(34);
        "string" == typeof n && (n = [[t.id, n, ""]]);
        i(2)(n, {});
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-beat v-beat-odd" v-bind:style=spinnerStyle> </div><div class="v-beat v-beat-even" v-bind:style=spinnerStyle> </div><div class="v-beat v-beat-odd" v-bind:style=spinnerStyle> </div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-bounce v-bounce1" v-bind:style=spinnerBasicStyle> <div class="v-bounce v-bounce2" v-bind:style=spinnerStyle> </div><div class="v-bounce v-bounce3" v-bind:style=spinnerStyle> </div></div> </div> '
    }, function (t, e) {
        t.exports = " <div class=v-spinner v-show=loading> <div class=v-clip v-bind:style=spinnerStyle> </div> </div> "
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-dot v-dot1" v-bind:style=spinnerBasicStyle> <div class="v-dot v-dot2" v-bind:style=spinnerStyle> </div><div class="v-dot v-dot3" v-bind:style=spinnerStyle> </div></div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-bind:style="{position: \'relative\', fontSize: 0}" v-show=loading> <div class="v-fade v-fade1" v-bind:style=[spinnerStyle,animationStyle1]> </div><div class="v-fade v-fade2" v-bind:style=[spinnerStyle,animationStyle2]> </div><div class="v-fade v-fade3" v-bind:style=[spinnerStyle,animationStyle3]> </div><div class="v-fade v-fade4" v-bind:style=[spinnerStyle,animationStyle4]> </div><div class="v-fade v-fade5" v-bind:style=[spinnerStyle,animationStyle5]> </div><div class="v-fade v-fade6" v-bind:style=[spinnerStyle,animationStyle6]> </div><div class="v-fade v-fade7" v-bind:style=[spinnerStyle,animationStyle7]> </div><div class="v-fade v-fade8" v-bind:style=[spinnerStyle,animationStyle8]> </div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-bind:style=containerStyle v-show=loading> <div class="v-grid v-grid1" v-bind:style=[spinnerStyle,animationStyle,animationStyle1]> </div><div class="v-grid v-grid2" v-bind:style=[spinnerStyle,animationStyle,animationStyle2]> </div><div class="v-grid v-grid3" v-bind:style=[spinnerStyle,animationStyle,animationStyle3]> </div><div class="v-grid v-grid4" v-bind:style=[spinnerStyle,animationStyle,animationStyle4]> </div><div class="v-grid v-grid5" v-bind:style=[spinnerStyle,animationStyle,animationStyle5]> </div><div class="v-grid v-grid6" v-bind:style=[spinnerStyle,animationStyle,animationStyle6]> </div><div class="v-grid v-grid7" v-bind:style=[spinnerStyle,animationStyle,animationStyle7]> </div><div class="v-grid v-grid8" v-bind:style=[spinnerStyle,animationStyle,animationStyle8]> </div><div class="v-grid v-grid9" v-bind:style=[spinnerStyle,animationStyle,animationStyle9]> </div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-moon v-moon1" v-bind:style=spinnerStyle> <div class="v-moon v-moon2" v-bind:style=[spinnerMoonStyle,animationStyle2]> </div><div class="v-moon v-moon3" v-bind:style=[spinnerStyle,animationStyle3]> </div></div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-bind:style="{position: \'relative\', fontSize: 0}" v-show=loading> <div class="v-pacman v-pacman1" v-bind:style=spinnerStyle1> </div><div class="v-pacman v-pacman2" v-bind:style=[spinnerStyle,animationStyle,spinnerDelay2]> </div><div class="v-pacman v-pacman3" v-bind:style=[spinnerStyle,animationStyle,spinnerDelay3]> </div><div class="v-pacman v-pacman4" v-bind:style=[spinnerStyle,animationStyle,spinnerDelay4]> </div><div class="v-pacman v-pacman5" v-bind:style=[spinnerStyle,animationStyle,spinnerDelay5]> </div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-pulse v-pulse1" v-bind:style=[spinnerStyle,spinnerDelay1]> </div><div class="v-pulse v-pulse2" v-bind:style=[spinnerStyle,spinnerDelay2]> </div><div class="v-pulse v-pulse3" v-bind:style=[spinnerStyle,spinnerDelay3]> </div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-ring v-ring1" v-bind:style=spinnerBasicStyle> <div class="v-ring v-ring2" v-bind:style=spinnerStyle> </div><div class="v-ring v-ring3" v-bind:style=spinnerStyle> </div></div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-rise v-rise-odd" v-bind:style=spinnerStyle> </div><div class="v-rise v-rise-even" v-bind:style=spinnerStyle> </div><div class="v-rise v-rise-odd" v-bind:style=spinnerStyle> </div><div class="v-rise v-rise-even" v-bind:style=spinnerStyle> </div><div class="v-rise v-rise-odd" v-bind:style=spinnerStyle> </div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-rotate v-rotate1" v-bind:style=spinnerStyle> <div class="v-rotate v-rotate2" v-bind:style=spinnerStyle> </div><div class="v-rotate v-rotate3" v-bind:style=spinnerStyle> </div></div> </div> '
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-scale v-scale1" v-bind:style=[spinnerStyle,spinnerDelay1]> </div><div class="v-scale v-scale2" v-bind:style=[spinnerStyle,spinnerDelay2]> </div><div class="v-scale v-scale3" v-bind:style=[spinnerStyle,spinnerDelay3]> </div><div class="v-scale v-scale4" v-bind:style=[spinnerStyle,spinnerDelay4]> </div><div class="v-scale v-scale5" v-bind:style=[spinnerStyle,spinnerDelay5]> </div> </div> '
    }, function (t, e) {
        t.exports = " <div class=v-spinner v-show=loading> <div class=v-skew v-bind:style=spinnerStyle> </div> </div> "
    }, function (t, e) {
        t.exports = " <div class=v-spinner v-show=loading> <div class=v-square v-bind:style=spinnerStyle> </div> </div> "
    }, function (t, e) {
        t.exports = ' <div class=v-spinner v-show=loading> <div class="v-sync v-sync1" v-bind:style=[spinnerStyle,spinnerDelay1]> </div><div class="v-sync v-sync2" v-bind:style=[spinnerStyle,spinnerDelay2]> </div><div class="v-sync v-sync3" v-bind:style=[spinnerStyle,spinnerDelay3]> </div> </div> '
    }, function (t, e, i) {
        var n, a;
        i(38), n = i(3), a = i(51), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(44), n = i(4), a = i(52), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(47), n = i(5), a = i(53), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(39), n = i(6), a = i(54), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(42), n = i(7), a = i(55), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(48), n = i(8), a = i(56), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(36), n = i(9), a = i(57), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(37), n = i(10), a = i(58), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(40), n = i(11), a = i(59), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(43), n = i(12), a = i(60), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(46), n = i(13), a = i(61), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(35), n = i(14), a = i(62), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(50), n = i(15), a = i(63), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(49), n = i(16), a = i(64), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(45), n = i(17), a = i(65), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }, function (t, e, i) {
        var n, a;
        i(41), n = i(18), a = i(66), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports.default), a && (("function" == typeof t.exports ? t.exports.options : t.exports).template = a)
    }])
});

var ScaleLoader = VueSpinner.ScaleLoader

Vue.use(VueMask.VueMaskPlugin);

// Or as a directive
Vue.directive('mask', VueMask.VueMaskDirective);

var app = new Vue({
    el: '.sale900-app',
    components: {
        ScaleLoader,
    },
    data: {
        showAccordion1: true,
        showAccordion2: false,
        showAccordion3: false,
        orderLoading: false,
        intervalId: false,
        openSuggestions: false,
        loginForReferrals: false,
        addressResults: [],
        excludes: {
            dish: [],
            meatAndFish: [],
            garnishes: [],
            vegetables: [],
            allergy: [],
        },
        excludesParams: {
            dish: [
                'Омлеты',
                'Запеканка',
                'Суп',
                'Каши',
                'Сэндвичи',
                'Йогурт с гранулой',
            ],
            meatAndFish: [
                'Говядина',
                'Свинина',
                'Кролик',
                'Рыба',
                'Морепродукты',
                'Ветчина',
            ],
            garnishes: [
                'Греча',
                'Спагетти',
                'Томатные спагетти',
                'Гречневые спагетти',
                'Нут',
                'Булгур',
                'Кус-кус',
                'Стручковая фасоль',
                'Макароны',
            ],
            vegetables: [
                'Грибы',
                'Брокколи',
                'Цветная капуста',
                'Картофель кабачки',
                'Баклажан',
                'Сельдерей',
            ],
            allergy: [
                'Мёд',
                'Шоколад',
                'Творог натуральный',
                'Творожные продукты',
                'Арахис',
                'Орех грецкий',
                'Орех мускатный',
            ],
        },
        excludesInfo: {
            price: 0,
            count: 0,
            inDishes: 0,
        },
        sendCodeAgainTimer: 32,
        currentWeekDays: [],
        daysArray: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysArrayMobile: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        thisWeekProducts: [],
        changingOrderIndex: 0,
        currentDay: 1,
        orderTotalPrice: 4750,
        orderTotalPriceNotSale: 5000,
        orderTotalBonus: 142,
        choosedRation: "m",
        addAnotherOrderValues: {
            timeToEat: 5,
            timeToEatOld: 5,
            choosedRation: "m",
            chosenWeek: 1,
            deshesPerDay: 5,
            choosedRationOld: "m",
            chosenWeekOld: 1,
            deshesPerDayOld: 5,
            dishesPrise: 950,
            dishesPriseOld: 950,
            totalPriseFirstOld: 4750,
            totalPriseFirst: 4750,
            bonus: 142,
            deliveryText: '2 доставки на 5 дней питания',
            bonusOld: 142,
            weekMore: false,
        },
        cart: [
            {
                choosedRation: "m",
                timeToEat: 5,
                timeToEatOld: 5,
                chosenWeek: 1,
                deshesPerDay: 5,
                choosedRationOld: "m",
                chosenWeekOld: 1,
                deshesPerDayOld: 5,
                dishesPrise: 950,
                dishesPriseOld: 950,
                totalPriseFirstOld: 4750,
                totalPriseFirst: 4750,
                totalPriseFirstNotSale: 5000,
                dishesPriseNotSale: 1000,
                bonus: 142,
                deliveryText: '2 доставки на 5 дней питания',
                bonusOld: 142,
                weekMore: false,
            }
        ],
        submitFormRequiredFields: {
            name: false,
            addressStreet: false,
        },
        userData: {
            name: '',
            email: '',
            addressFlat: '',
            addressStreet: '',
            addressPorch: '',
            addressFloor: '',
            addressIntercom: '',
            addressFlat2: '',
            addressStreet2: '',
            addressPorch2: '',
            addressFloor2: '',
            addressIntercom2: '',
            commentForOrder2: '',
            selectedAddress: 1,
            phone: '',
            balance: 0,
            smsCode: '',
            paymentMethod: 'cashPayment',
            commentForOrder: '',
            useBalance: false,
            usePromoCode: false,
            promoCodeMoreBonuses: false,
            promoCodeMoreBonusesByPercent: false,
            promoCodeMoreBonusesPercent: 0,
            promoCodeMoreBonusesCost: 0,
            promoCode: '',
            bonusTypeIsBalance: true,
            loggedIn: false,
            promoCodeState: '',
            promoCodeUsingText: '',
            promoCodeSaleCost: null,
            promoCodeType: '',
        },
        firstTry: false,
        wrongSmsCode: false,
        userRes: false,
        menuRes: false,
        wrongCodeErrorMessage: '',
        promoCodeExistsInRoute: false,
    },
    created() {
        this.getMenu();
        this.getUser();
        let weekStart = moment.tz('Europe/Moscow');
        this.currentDay = moment.tz('Europe/Moscow').day();
        for (let i = 0; i < 7; i++) {
            let dayOfWeek = moment.tz(weekStart, 'Europe/Moscow').add(i, 'days').day();
            let date = moment.tz(weekStart, 'Europe/Moscow').add(i, 'days').format("D");
            this.currentWeekDays.push(
                {
                    currentWeekDayNumber: dayOfWeek,
                    currentWeekDateNumber: date,
                }
            );
        }
    },
    mounted() {
        let params = (new URL(document.location)).searchParams;
        let program = params.get("program");
        let days = params.get("days");
        let chosenWeek = params.get("chosenWeek");
        let ref = params.get("ref");
        if (program == 's' || program == 'm' || program == 'l') {
            this.cart[0].choosedRation = program;
            this.choosedRation = program;
        }
        if (days == '7' || days == '5') {
            this.cart[0].timeToEat = parseInt(days);
        }
        if (chosenWeek == '1' || chosenWeek == '2' || chosenWeek == '4') {
            this.cart[0].chosenWeek = parseInt(chosenWeek);
        } else if (chosenWeek == 'trial') {
            this.cart[0].chosenWeek = 22;
        }
        if (ref) {
            this.promoCodeExistsInRoute = true;
            this.userData.promoCode = ref;
        }
        this.checkValues(0, this.cart[0].choosedRation, this.cart[0].timeToEat, this.cart[0].chosenWeek);
        this.cartSum();
        this.setValueForAddress();
        window.addEventListener("scroll", this.onScroll)
        let localStorageExcludes = localStorage.getItem('excludes')
        if (localStorageExcludes) {
            let storageValues = JSON.parse(localStorageExcludes);
            if (storageValues.meatAndFish) {
                this.$set(this.excludes, 'meatAndFish', storageValues.meatAndFish)
            }
            if (storageValues.dish) {
                this.$set(this.excludes, 'dish', storageValues.dish)
            }
            if (storageValues.garnishes) {
                this.$set(this.excludes, 'garnishes', storageValues.garnishes)
            }
            if (storageValues.vegetables) {
                this.$set(this.excludes, 'vegetables', storageValues.vegetables)
            }
            if (storageValues.allergy) {
                this.$set(this.excludes, 'allergy', storageValues.allergy)
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
    methods: {
        setValueForAddress() {
            new Autocomplete("search", {
                selectFirst: true,
                howManyCharacters: 2,
                onSearch: ({currentValue}) => {
                    const api = `https://nominatim.openstreetmap.org/search?&format=geojson&limit=5&addressdetails=1&accept-language=ru&q=${encodeURI(
                        currentValue
                    )}`;
                    /**
                     * Promise
                     */
                    return new Promise((resolve) => {
                        fetch(api)
                            .then((response) => response.json())
                            .then((data) => {
                                resolve(data.features);
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    });
                },
                onResults: ({currentValue, matches, template}) => {
                    const regex = new RegExp(currentValue, "gi");
                    return matches === 0
                        ? template
                        : matches
                            .map((element) => {
                                let addressShow = '';
                                if (element.properties.address.city) {
                                    addressShow = element.properties.address.city;
                                }
                                if (element.properties.address.road) {
                                    if (addressShow) {
                                        addressShow += ', ' + element.properties.address.road;
                                    } else {
                                        addressShow = element.properties.address.road;
                                    }
                                }
                                if (element.properties.address.house_number) {
                                    if (addressShow) {
                                        addressShow += ', ' + element.properties.address.house_number;
                                    } else {
                                        addressShow = element.properties.address.house_number;
                                    }
                                }
                                if (!addressShow) {
                                    return;
                                }

                                return `
                                  <li class="loupe">
                                    <p>
                                      ${addressShow.replace(
                                    regex,
                                    (str) => `<b>${str}</b>`
                                )}
                                    </p>
                                  </li> `;
                            })
                            .join("");
                },
                onSubmit: ({object}) => {
                    var variable = 'addressStreet';
                    if (this.userData.selectedAddress == 2) {
                        variable = 'addressStreet2';
                    }
                    let searchingValue = document.getElementById("search").value
                    this.$set(this.userData, variable, searchingValue)
                },
                noResults: ({currentValue, template}) =>
                    template(`<li>Такой адрес не найдено :(</li>`),
            });
        },
        calculateExcludesInfo() {
            this.excludesInfo = {
                price: 0,
                count: 0,
                inDishes: 0,
            }
            this.excludesInfo.count = this.excludes.meatAndFish.length + this.excludes.dish.length + this.excludes.vegetables.length + this.excludes.garnishes.length + this.excludes.allergy.length;
            for (let i = 0; i < this.cart.length; i++) {
                var inDishes = 0;
                if (this.cart[i].chosenWeek == 22) {
                    inDishes = 1;
                } else {
                    if (this.cart[i].timeToEat == 5) {
                        inDishes = (2 * this.cart[i].chosenWeek);
                    } else {
                        inDishes = (3 * this.cart[i].chosenWeek);
                    }
                }
                this.excludesInfo.inDishes += inDishes * this.excludesInfo.count;
                this.excludesInfo.price = this.excludesInfo.inDishes * 100;
            }
        },
        searchAddressByKeyword(address) {
            axios({
                method: "get",
                url: "/api/search-address",
                params: {
                    searchAddressKeyword: address
                }
            }).then(response => {
                if (response.data.success) {
                    this.addressResults = response.data.results;
                }
            })
        },
        onScroll(e) {
            this.windowTop = window.top.scrollY
            if (this.windowTop > 250) {
                document.getElementById('scrollToTopButton').classList.add('open-scroll-button');
            } else {
                document.getElementById('scrollToTopButton').classList.remove('open-scroll-button');
            }
        },
        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        },
        sendCodeAgain() {
            axios({
                method: "get",
                url: "/login/get-sms",
                params: {
                    phone: this.userData.phone
                }
            }).then(response => {
                if (response.data.getCodeSms) {
                    this.sendCodeAgainTimer = 60;
                    this.timerForSmsCode();
                }
            })
        },
        timerForSmsCode() {
            this.intervalId = setInterval(function () {
                this.incrementTime()
            }.bind(this), 1000);
        },
        incrementTime() {
            if (this.sendCodeAgainTimer) {
                this.sendCodeAgainTimer = parseInt(this.sendCodeAgainTimer) - 1;
            }
        },
        modalAction(id, closeId, open = true) {
            let width = screen.width;
            if (open) {
                document.getElementById('scrollToTopButton').style['z-index'] = 0;
                if (document.getElementsByClassName('wrap_bbe8')[0]) {
                    document.getElementsByClassName('wrap_bbe8')[0].style['z-index'] = 0;
                }
                document.getElementById(id).classList.add("_open");
                if (closeId) {
                    document.getElementById(closeId).classList.remove("_open");
                }
            } else {
                document.getElementById('scrollToTopButton').style['z-index'] = 1000000;
                if (document.getElementsByClassName('wrap_bbe8')[0]) {
                    document.getElementsByClassName('wrap_bbe8')[0].style['z-index'] = 2147483647;
                }
                document.getElementById(id).classList.remove("_open");
            }
            if (id == 'popap-sms' || id == 'personal-area-sms') {
                this.timerForSmsCode();
            }
        },
        callBack() {
            axios({
                method: "post",
                url: "/api/callback",
                params: {
                    phone: this.userData.phone
                }
            }).then(response => {
                if (response.data.success) {
                    ym(44931988, 'reachGoal', 'backcall')
                    gtag('event', 'Обратный звонок', {'event_category': 'callback', 'event_action': 'click'})
                }
            });
            this.modalAction('sucess-popap', 'ringMe');
        },
        fastOrder() {
            axios({
                method: "post",
                url: "/api/fast-order",
                params: {
                    phone: this.userData.phone
                }
            });
            ym(44931988, 'reachGoal', 'fastorder')
            gtag('event', 'Быстрый заказ', {'event_category': 'fastOrder', 'event_action': 'submit'})
            window.location = '/gratitude'
        },
        getCodeSmsMethod(openId, closedId) {
            this.modalAction(openId, closedId);
            axios({
                method: "get",
                url: "/login/get-sms",
                params: {
                    phone: this.userData.phone
                }
            })
        },
        checkSmsCodeLength(personalArea = false) {
            this.wrongSmsCode = false;
            if (this.userData.smsCode.trim().length === 4 && this.firstTry === false) {
                this.codeTryInput(personalArea);
            }
        },
        codeTryInput(personalArea = false) {
            this.firstTry = true;
            this.wrongSmsCode = false;
            axios({
                method: "get",
                url: "/login/auth",
                params: {
                    phone: this.userData.phone,
                    password: this.userData.smsCode
                }
            }).then(response => {
                if (response.data.success) {
                    ym(44931988, 'reachGoal', 'lk');
                    gtag('event', 'Вход в личный кабинет', {'event_category': 'lk', 'event_action': 'submit'});
                    if (personalArea) {
                        if (this.userData.loginForReferrals) {
                            window.location = '/personal-area/referrals';
                        } else {
                            window.location = '/personal-area';
                        }
                    } else {
                        this.getUser();
                        document.getElementById('smsCodeInput').blur();
                        this.modalAction('ordering-popap', 'popap-sms');
                        if (this.promoCodeExistsInRoute) {
                            this.userData.usePromoCode = true;
                            this.userData.bonusTypeIsBalance = false;
                            this.checkPromoCode();
                        }
                    }
                } else {
                    this.wrongCodeErrorMessage = response.data.errorMessage;
                    this.wrongSmsCode = true;
                }
            });
        },
        addAnotherOrder() {
            this.cart.push(this.addAnotherOrderValues)
            this.addAnotherOrderValues = Object.assign({}, this.addAnotherOrderValues, {
                choosedRation: "m",
                choosedRationOld: "m",
                timeToEat: 5,
                timeToEatOld: 5,
                chosenWeek: 1,
                chosenWeekOld: 1,
                deshesPerDay: 5,
                deshesPerDayOld: 5,
                dishesPrise: 950,
                dishesPriseOld: 950,
                totalPriseFirst: 4750,
                totalPriseFirstOld: 4750,
                bonus: 142,
                deliveryText: '2 доставки на 5 дней питания',
                bonusOld: 142,
                weekMore: false,
            })
            this.cartSum();
        },
        getMenu() {
            axios({
                method: "post",
                url: "/api/get-simple-menu"
            }).then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    this.thisWeekProducts.push(response.data[i]);
                }
                setTimeout(function () {
                    this.productsPerDay(this.currentDay, this.choosedRation);
                }.bind(this), 350)
                this.menuRes = true;
            })
        },
        productsPerDay(day, choosedRation) {
            if (!day) {
                day = 7;
            }
            this.productsPerDayArray = [];
            let currentWeekProducts = [];
            currentWeekProducts = this.thisWeekProducts;
            this.productsPerDayArray = currentWeekProducts.filter(function (el) {
                return el.weekDay == day && el.racion == choosedRation
            });
            this.productsPerDayArray.sort((a, b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0));

            if (document.getElementsByClassName('sample_menu_menu')[0].classList.contains('slick-initialized')) {
                $('.sample_menu_menu').slick('slickRemove', null, null, true);
            }
            this.productsPerDayArray.forEach((value, index) => {
                index++;
                $('.sample_menu_menu').slick('slickAdd', ' <div\n' +
                    '                :key="prod.dishID"\n' +
                    '                class="lunch">\n' +
                    '                <img src="' + value.url + '" class="border_radius lunch_image">\n' +
                    // '                <div class="country_flag">\n' +
                    // '                     <img src="' + value.flag + '">\n' +
                    // '                </div>\n' +
                    '                <div class="lunch_time">\n' +
                    '                    №' + index + ' <span class="opsty_4">' + value.kcal + ' Ккал Б' + value.proteins + ' Ж' + value.fats + ' У' + value.carbs + '</span>\n' +
                    '                </div>\n' +
                    '                <div class="mame_dish">' + value.name + '</div>\n' +
                    '                <div class="info_box"><div class="info_box__hover_box"><button class="btn_info">i</button><div class="info_box__text">' + value.description + '</div></div></div>\n' +
                    '                <div><button class="rating_button"><svg style="padding-right: 3px" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M12.5798 4.57767L8.68268 3.98457L6.94055 0.28611C6.89297 0.184848 6.81469 0.102875 6.71799 0.0530477C6.47547 -0.0723237 6.18077 0.0321525 6.05951 0.28611L4.31738 3.98457L0.420236 4.57767C0.312792 4.59374 0.214557 4.64679 0.139346 4.72715C0.0484205 4.82502 -0.00168366 4.95668 4.32016e-05 5.09321C0.00177006 5.22974 0.0551867 5.35996 0.148556 5.45527L2.96819 8.33399L2.30204 12.3989C2.28642 12.4935 2.29641 12.5907 2.33088 12.6796C2.36536 12.7686 2.42293 12.8456 2.49708 12.902C2.57123 12.9584 2.65898 12.9919 2.75039 12.9987C2.8418 13.0055 2.9332 12.9854 3.01424 12.9406L6.50003 11.0214L9.98582 12.9406C10.081 12.9936 10.1915 13.0113 10.2974 12.992C10.5645 12.9438 10.7441 12.6786 10.698 12.3989L10.0319 8.33399L12.8515 5.45527C12.9283 5.37651 12.9789 5.27364 12.9943 5.16113C13.0357 4.87985 12.8484 4.61946 12.5798 4.57767Z" fill="#EB6300"/>\n' + '</svg>\nОценить блюдо</button></div>\n' +
                    '            </div>');
            });
        },
        changeOrder(index) {
            this.modalAction('chenge-order', false);
            this.changingOrderIndex = index;
            this.cart[index].choosedRationOld = this.cart[index].choosedRation;
            this.cart[index].chosenWeekOld = this.cart[index].chosenWeek;
            this.cart[index].dishesPriseOld = this.cart[index].dishesPrise;
            this.cart[index].timeToEatOld = this.cart[index].timeToEat;
            this.cart[index].deshesPerDayOld = this.cart[index].deshesPerDay;
            this.cart[index].totalPriseFirstOld = this.cart[index].totalPriseFirst;
            this.cart[index].bonusOld = this.cart[index].bonus;
        },
        dishesCount(index) {
            if (this.cart[index].choosedRation == "m") {
                this.cart[index].deshesPerDay = 5;
            } else if (this.cart[index].choosedRation == "s") {
                this.cart[index].deshesPerDay = 4;
            } else {
                this.cart[index].deshesPerDay = 6;
            }
        },
        dishesCountAnotherOrder() {
            if (this.addAnotherOrderValues.choosedRation == "m") {
                this.addAnotherOrderValues.deshesPerDay = 5;
            } else if (this.addAnotherOrderValues.choosedRation == "s") {
                this.addAnotherOrderValues.deshesPerDay = 4;
            } else {
                this.addAnotherOrderValues.deshesPerDay = 6;
            }
        },
        submitOrder() {
            this.orderLoading = true;
            if (!this.userData.name) {
                if (!this.userData.name) {
                    this.$set(this.submitFormRequiredFields, 'name', true)
                }
                this.orderLoading = false;
                document.getElementById('checkoutForm').scrollIntoView();
            } else if (!this.userData.addressStreet && this.userData.selectedAddress == '1') {
                if (!this.userData.addressStreet) {
                    this.$set(this.submitFormRequiredFields, 'addressStreet', true)
                }
                this.orderLoading = false;
                document.getElementById('checkoutForm').scrollIntoView();
            } else if (!this.userData.addressStreet2 && this.userData.selectedAddress == '2') {
                if (!this.userData.addressStreet2) {
                    this.$set(this.submitFormRequiredFields, 'addressStreet', true)
                }
                this.orderLoading = false;
                document.getElementById('checkoutForm').scrollIntoView();
            } else {
                axios.post('/api/add-order/order-to-crm', {
                    cart: this.cart,
                    userData: this.userData,
                    orderTotalBonus: this.orderTotalBonus,
                    excludes: this.excludes,
                    excludesPrice: this.excludesInfo.price,
                    salePrice: 900,
                    fromSalePage: true,
                }).then(response => {
                    if (response.data.success) {
                        this.orderLoading = false;
                        if (this.userData.paymentMethod === 'onlinePayment') {
                            var widget = new cp.CloudPayments();
                            widget.charge(
                                {
                                    publicId: "pk_04cfb23d929e1e339d5804a593b80", //id из личного кабинета
                                    description: "Оплата заказа #" + response.data.order, //назначение
                                    amount: response.data.totalPrice, //сумма
                                    currency: "RUB", //валюта
                                    invoiceId: response.data.order, //номер заказа  (необязательно)
                                    accountId: this.userData.phone, //идентификатор плательщика (необязательно)
                                    data: {},
                                    skin: "modern"
                                },
                                options => {
                                    console.log('test1');
                                    axios({
                                        method: "post",
                                        url: "/api/add-order/update-lead",
                                        params: {
                                            orderId: res.order,
                                            orderPrice: response.data.totalPrice
                                        }
                                    }).then(response => {
                                        //если успешно оплачен картой
                                        console.log('teststst222')
                                        window.location = '/gratitude'
                                    });
                                },
                                function (reason, options) {
                                    console.log(reason);
                                    console.log(options);
                                    //если не удалось оплатить картой
                                });
                        } else {
                            window.location = '/gratitude'
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        cartSum() {
            let totalSum = 0;
            let bonusSum = 0;
            for (let i = 0; i < this.cart.length; i++) {
                totalSum += this.cart[i]["totalPriseFirst"];
                bonusSum += this.cart[i]["bonus"];
            }
            this.orderTotalPrice = totalSum;
            this.orderTotalBonus = bonusSum;
            this.calculateExcludesInfo()
        },
        deleteFromCart(index) {
            if (this.cart.length > 1) {
                this.cart.splice(index, 1);
                this.cartSum();
            }
        },
        checkValues(index, choosedRation, timeToEat, chosenWeek, forCart = true) {
            if (choosedRation == 's' && timeToEat == 5 && chosenWeek == 1) {
                this.forCheckValues(index, 4, 900, 4500, 135, 0, 950, '2 доставки на 5 дней питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 5 && chosenWeek == 2) {
                this.forCheckValues(index, 4, 865, 8650, 259, 9000, 900, '4 доставки на 10 дней питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 5 && chosenWeek == 3) {
                this.forCheckValues(index, 4, 844, 12660, 379, 0, 900, '6 доставок на 15 дней питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 5 && chosenWeek == 4) {
                this.forCheckValues(index, 4, 720, 18000, 539, 19000, 950, '10 доставок на 25 дней питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 5 && chosenWeek == 22) {
                this.forCheckValues(index, 4, 990, 1980, 79, 0, 1200, '1 доставка на 2 дня питания', forCart, true);
            } else if (choosedRation == 's' && timeToEat == 7 && chosenWeek == 1) {
                this.forCheckValues(index, 4, 900, 6300, 189, 0, 950, '3 доставки на 7 дней питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 7 && chosenWeek == 2) {
                this.forCheckValues(index, 4, 865, 12100, 363, 12600, 900, '6 доставок на 14 дней питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 7 && chosenWeek == 3) {
                this.forCheckValues(index, 4, 844, 17730, 531, 0, 900, '9 доставок на 21 день питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 7 && chosenWeek == 4) {
                this.forCheckValues(index, 4, 720, 25200, 755, 26600, 950, '15 доставок на 35 дней питания', forCart);
            } else if (choosedRation == 's' && timeToEat == 7 && chosenWeek == 22) {
                this.forCheckValues(index, 4, 990, 1980, 79, 0, 1200, '1 доставка на 2 дня питания', forCart, true);
            } else if (choosedRation == 'm' && timeToEat == 5 && chosenWeek == 1) {
                this.forCheckValues(index, 5, 950, 4750, 142, 0, 1000, '2 доставки на 5 дней питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 5 && chosenWeek == 2) {
                this.forCheckValues(index, 5, 905, 9050, 271, 9500, 950, '4 доставки на 10 дней питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 5 && chosenWeek == 3) {
                this.forCheckValues(index, 5, 866, 12990, 389, 0, 950, '6 доставок на 15 дней питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 5 && chosenWeek == 4) {
                this.forCheckValues(index, 5, 760, 19000, 569, 20000, 1000, '10 доставок на 25 дней питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 5 && chosenWeek == 22) {
                this.forCheckValues(index, 5, 1090, 2180, 87, 0, 1400, '1 доставка на 2 дня питания', forCart, true);
            } else if (choosedRation == 'm' && timeToEat == 7 && chosenWeek == 1) {
                this.forCheckValues(index, 5, 950, 6650, 199, 0, 1000, '3 доставки на 7 дней питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 7 && chosenWeek == 2) {
                this.forCheckValues(index, 5, 905, 12670, 380, 13300, 950, '6 доставок на 14 дней питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 7 && chosenWeek == 3) {
                this.forCheckValues(index, 5, 866, 18200, 546, 0, 950, '9 доставок на 21 день питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 7 && chosenWeek == 4) {
                this.forCheckValues(index, 5, 760, 26600, 797, 28000, 1000, '15 доставок на 35 дней питания', forCart);
            } else if (choosedRation == 'm' && timeToEat == 7 && chosenWeek == 22) {
                this.forCheckValues(index, 5, 1090, 2180, 87, 0, 1400, '1 доставка на 2 дня питания', forCart, true);
            } else if (choosedRation == 'l' && timeToEat == 5 && chosenWeek == 1) {
                this.forCheckValues(index, 6, 990, 4950, 148, 0, 1050, '2 доставки на 5 дней питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 5 && chosenWeek == 2) {
                this.forCheckValues(index, 6, 946, 9460, 283, 10000, 1000, '4 доставки на 10 дней питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 5 && chosenWeek == 3) {
                this.forCheckValues(index, 6, 911, 13665, 409, 0, 1000, '6 доставок на 15 дней питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 5 && chosenWeek == 4) {
                this.forCheckValues(index, 6, 799, 19800, 599, 21000, 1050, '10 доставок на 25 дней питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 5 && chosenWeek == 22) {
                this.forCheckValues(index, 6, 1190, 2380, 95, 0, 1600, '1 доставка на 2 дня питания', forCart, true);
            } else if (choosedRation == 'l' && timeToEat == 7 && chosenWeek == 1) {
                this.forCheckValues(index, 6, 990, 6930, 207, 0, 1050, '3 доставки на 7 дней питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 7 && chosenWeek == 2) {
                this.forCheckValues(index, 6, 946, 13250, 397, 14000, 1000, '6 доставок на 14 дней питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 7 && chosenWeek == 3) {
                this.forCheckValues(index, 6, 911, 19150, 574, 0, 1000, '9 доставок на 21 день питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 7 && chosenWeek == 4) {
                this.forCheckValues(index, 6, 799, 27990, 839, 29400, 1050, '15 доставок на 35 дней питания', forCart);
            } else if (choosedRation == 'l' && timeToEat == 7 && chosenWeek == 22) {
                this.forCheckValues(index, 6, 1190, 2380, 95, 0, 1600, '1 доставка на 2 дня питания', forCart, true);
            }
        },
        forCheckValues(index, deshesPerDay, dishesPrise, totalPriseFirst, bonus, totalPriseFirstNotSale, dishesPriseNotSale, deliveryText, forCart = true, trialOrder = false) {
            if (forCart) {
                this.cart[index].deshesPerDay = deshesPerDay;
                this.cart[index].dishesPrise = dishesPrise;
                this.cart[index].totalPriseFirst = totalPriseFirst;
                this.cart[index].dishesPriseNotSale = dishesPriseNotSale;
                this.cart[index].totalPriseFirstNotSale = totalPriseFirstNotSale;
                this.cart[index].bonus = bonus;
                this.cart[index].deliveryText = deliveryText;
                if (this.cart[index].chosenWeek === 4) {
                    this.cart[index].weekMore = true;
                }
                if (!trialOrder) {
                    this.cartSum();
                } else {
                    this.calculateExcludesInfo();
                }
            } else {
                this.addAnotherOrderValues.deshesPerDay = deshesPerDay;
                this.addAnotherOrderValues.dishesPrise = dishesPrise;
                this.addAnotherOrderValues.totalPriseFirst = totalPriseFirst;
                this.addAnotherOrderValues.bonus = bonus;
                this.addAnotherOrderValues.deliveryText = deliveryText;
                if (this.addAnotherOrderValues.chosenWeek === 4) {
                    this.addAnotherOrderValues.weekMore = true;
                }
            }
        },
        getUser() {
            axios({
                method: "get",
                url: "/api/get-user",
            }).then(response => {
                if (response.data) {
                    this.$set(this.userData, 'loggedIn', true)
                    this.$set(this.userData, 'phone', response.data.phone ? response.data.phone : '')
                    this.$set(this.userData, 'name', response.data.name ? response.data.name : '')
                    this.$set(this.userData, 'addressFlat', response.data.flat ? response.data.flat : '')
                    this.$set(this.userData, 'addressStreet', response.data.address ? response.data.address : '')
                    this.$set(this.userData, 'addressPorch', response.data.porch ? response.data.porch : '')
                    this.$set(this.userData, 'addressFloor', response.data.floor ? response.data.floor : '')
                    this.$set(this.userData, 'addressIntercom', response.data.intercom ? response.data.intercom : '')
                    this.$set(this.userData, 'commentForOrder', response.data.commentForOrder ? response.data.commentForOrder : '')
                    this.$set(this.userData, 'addressStreet2', response.data.address2 ? response.data.address2 : '')
                    this.$set(this.userData, 'addressFlat2', response.data.flat2 ? response.data.flat2 : '')
                    this.$set(this.userData, 'addressPorch2', response.data.porch2 ? response.data.porch2 : '')
                    this.$set(this.userData, 'addressFloor2', response.data.floor2 ? response.data.floor2 : '')
                    this.$set(this.userData, 'addressIntercom2', response.data.intercom2 ? response.data.intercom2 : '')
                    this.$set(this.userData, 'commentForOrder2', response.data.commentForOrder2 ? response.data.commentForOrder2 : '')
                    this.$set(this.userData, 'balance', response.data.balance ? response.data.balance : 0)
                    this.$set(this.userData, 'email', response.data.email ? response.data.email : '')
                }
                this.userRes = true;
            });
        },
        checkPromoCode() {
            this.userData.promoCodeMoreBonuses = false
            this.userData.promoCodeMoreBonusesByPercent = false
            this.userData.promoCodeMoreBonusesCost = 0
            this.userData.promoCodeMoreBonusesPercent = 0
            this.userData.promoCodeState = ''
            this.userData.promoCodeUsingText = ''
            this.userData.promoCodeSaleCost = null
            this.userData.promoCodeType = ''
            this.orderLoading = true;
            axios.post('/api/check-promo-code', {
                promoCode: this.userData.promoCode,
                cart: this.cart
            }).then(response => {
                this.userData.promoCodeState = response.data.successfullyFound;
                this.userData.promoCodeUsingText = response.data.promoCodeUsingText;
                this.userData.promoCodeSaleCost = response.data.promoCodeSaleCost;
                this.userData.promoCodeType = response.data.promoCodeType;
                if (response.data.moreBonuses) {
                    this.userData.promoCodeMoreBonuses = response.data.moreBonuses;
                    this.userData.promoCodeMoreBonusesCost = response.data.moreBonusesCost;
                }
                if (response.data.moreBonusesByPercent) {
                    this.userData.promoCodeMoreBonusesByPercent = response.data.moreBonusesByPercent;
                    this.userData.promoCodeMoreBonusesPercent = response.data.moreBonusesPercent;
                }
                this.orderLoading = false;
            })
        }
    },
    computed: {},
    watch: {
        choosedRation: function () {
            this.productsPerDay(this.currentDay, this.choosedRation);
        },
        currentDay: function () {
            this.productsPerDay(this.currentDay, this.choosedRation);
        },
        sendCodeAgainTimer: function (val) {
            if (!val) {
                clearInterval(this.intervalId);
                this.intervalId = false;
            }
        },
        menuRes: function () {
            if (this.menuRes && this.userRes) {
                310 < screen.availWidth ? (document.body.classList.add("loaded_hiding"), window.setTimeout(function () {
                    document.body.classList.add("loaded"), document.body.classList.remove("loaded_hiding")
                }, 500)) : (document.body.classList.add("loaded"), document.body.classList.remove("loaded_hiding"))
            }
        },
        userRes: function () {
            if (this.menuRes && this.userRes) {
                310 < screen.availWidth ? (document.body.classList.add("loaded_hiding"), window.setTimeout(function () {
                    document.body.classList.add("loaded"), document.body.classList.remove("loaded_hiding")
                }, 500)) : (document.body.classList.add("loaded"), document.body.classList.remove("loaded_hiding"))
            }
        },
        excludes: {
            handler(newValue, oldValue) {
                localStorage.setItem('excludes', JSON.stringify(this.excludes))
                this.calculateExcludesInfo()
            },
            deep: true
        }
    }
});

/*функция для аккордиона*/
$('.contentBx').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active')
    } else {
        $('.contentBx.active').removeClass('active');
        $(this).toggleClass('active');
    }
});
//==================//

//--------------------------------//
$('.regular_questions_kind_btn').click(function () {
    $('.regular_questions_kind_btn').removeClass('active_btn');
    $(this).toggleClass('active_btn');
});

/*определение ширины страницы*/
windowWidth = document.documentElement.clientWidth;
windowZoom2 = (windowWidth / 375).toFixed(3);
windowZoom = (windowWidth / 1440).toFixed(3);

if (windowWidth <= 1500 && windowWidth >= 800) {
    $('.wrapper').css("zoom", windowZoom);
} else {
    $('.wrapper').css("zoom", 1);
}
;
if (windowWidth <= 555 && windowWidth >= 250) {
    $('.wrapper').css("zoom", windowZoom2);
    document.getElementsByName("addres-name").placeholder = "Придумай название адресу";
} else {
    document.getElementsByName("addres-name").placeholder = "Придумай название адресу, например «Дом»";
}
window.onresize = function () {
    windowWidth = document.documentElement.clientWidth;
    windowZoom = (windowWidth / 1440).toFixed(3);
    windowZoom2 = (windowWidth / 375).toFixed(3);
    /*условие для использования зум*/
    if (windowWidth <= 1500 && windowWidth >= 800) {
        $('.wrapper').css("zoom", windowZoom);
    } else {
        $('.wrapper').css("zoom", 1);
    }

    //зум на мобмльный

    if (windowWidth <= 555 && windowWidth >= 250) {
        $('.wrapper').css("zoom", windowZoom2);
        document.getElementsByName("addres-name").placeholder = "Придумай название адресу";
    } else {
        document.getElementsByName("addres-name").placeholder = "Придумай название адресу, например «Дом»";
    }

    // /*серый бекгроунд*/
    // if (windowWidth <= 1440) {
    //   $('.grey_bground').css("width", windowWidth);
    //   $('.grey_bground_2').css("width", windowWidth);
    // };
};
//================================================//

/*lasy load*/
const lazyImages = document.querySelectorAll('img[data-src]')
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if (img.dataset.src) {
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck()
        }
    });
}

document.addEventListener("DOMContentLoaded", lazyScrollCheck);

function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        item => item
    );
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
        }
        delete lazyImagesPositions[imgIndex];
    }
};
//=====================//

/*переключение темы*/
$('.switchMode').click(function () {
    $('.switchMode').toggleClass('active');
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "/css/light-mode.css") {
        theme.href = "/css/dark-mode.css";
    } else {
        theme.href = "/css/light-mode.css";
    }
    let townIcon = document.querySelectorAll('.town_icon');
    for (let i = 0; i < townIcon.length; i++) {
        if (townIcon[i].getAttribute("src") == "/img/Ellipse1.svg")
            townIcon[i].src = "/img/Ellipse1Wh.svg";
        else
            townIcon[i].src = "/img/Ellipse1.svg";
    }
});

//---------------------------//

/*прозрачность в слайдах */
$('.cooks').on('click', '.slick-next', function () {
    if ($(this).hasClass('slick-disabled')) {
        $('.opacity-block').css("display", "none");
    } else {
        $('.opacity-block').css("display", "block");
    }
});


$('.cooks').on('click', '.slick-prev', function () {
    let nextSlide = $(this).parent().find('.slick-next');
    if (nextSlide.hasClass('slick-disabled')) {
        $('.opacity-block').css("display", "none");
    } else {
        $('.opacity-block').css("display", "block");
    }
});


$('.advantages_block2_imgs_slider').on('click', '.slick-next', function () {
    if ($(this).hasClass('slick-disabled')) {
        $('.opacity-block_2').css("display", "none");
    } else {
        $('.opacity-block_2').css("display", "block");
    }
});


$('.advantages_block2_imgs_slider').on('click', '.slick-prev', function () {
    let nextSlide = $(this).parent().find('.slick-next');

    if (nextSlide.hasClass('slick-disabled')) {
        $('.opacity-block_2').css("display", "none");
    } else {
        $('.opacity-block_2').css("display", "block");
    }
});


$('.advantages_block2_imgs_slider').on('click', '.slick-dots', function () {
    let nextSlide = $(this).parent().find('.slick-next');

    if (nextSlide.hasClass('slick-disabled')) {
        $('.opacity-block_2').css("display", "none");
    } else {
        $('.opacity-block_2').css("display", "block");
    }
});

$('.cooks').on('click', '.slick-dots', function () {
    let nextSlide = $(this).parent().find('.slick-next');

    if (nextSlide.hasClass('slick-disabled')) {
        $('.opacity-block').css("display", "none");
    } else {
        $('.opacity-block').css("display", "block");
    }
});

//----------------------------------//

//header
const headerElement = document.querySelector('.header__menu');
const cssFile = document.getElementById("cssFile").getAttribute("href");

const callback = function (enatries, observer) {
    headerElement.classList.add('_scroll');
}
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);

//-----------------------//

$('._burger-btn').click(function () {
    $('._burger-btn').toggleClass('_active');
    $('.burger-menu').toggleClass('_active');
    $('._phone').toggleClass('_hidden');
    $('body').toggleClass('_lock');
});
/*axios v0.21.1 | (c) 2020 by Matt Zabriskie*/
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.axios = t() : e.axios = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        e.exports = n(1)
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            var t = new i(e), n = s(i.prototype.request, t);
            return o.extend(n, i.prototype, t), o.extend(n, t), n
        }

        var o = n(2), s = n(3), i = n(4), a = n(22), u = n(10), c = r(u);
        c.Axios = i, c.create = function (e) {
            return r(a(c.defaults, e))
        }, c.Cancel = n(23), c.CancelToken = n(24), c.isCancel = n(9), c.all = function (e) {
            return Promise.all(e)
        }, c.spread = n(25), c.isAxiosError = n(26), e.exports = c, e.exports.default = c
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return "[object Array]" === R.call(e)
        }

        function o(e) {
            return "undefined" == typeof e
        }

        function s(e) {
            return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function i(e) {
            return "[object ArrayBuffer]" === R.call(e)
        }

        function a(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }

        function u(e) {
            var t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }

        function c(e) {
            return "string" == typeof e
        }

        function f(e) {
            return "number" == typeof e
        }

        function p(e) {
            return null !== e && "object" == typeof e
        }

        function d(e) {
            if ("[object Object]" !== R.call(e)) return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }

        function l(e) {
            return "[object Date]" === R.call(e)
        }

        function h(e) {
            return "[object File]" === R.call(e)
        }

        function m(e) {
            return "[object Blob]" === R.call(e)
        }

        function y(e) {
            return "[object Function]" === R.call(e)
        }

        function g(e) {
            return p(e) && y(e.pipe)
        }

        function v(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }

        function x(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }

        function w() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }

        function b(e, t) {
            if (null !== e && "undefined" != typeof e) if ("object" != typeof e && (e = [e]), r(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e)
        }

        function E() {
            function e(e, n) {
                d(t[n]) && d(e) ? t[n] = E(t[n], e) : d(e) ? t[n] = E({}, e) : r(e) ? t[n] = e.slice() : t[n] = e
            }

            for (var t = {}, n = 0, o = arguments.length; n < o; n++) b(arguments[n], e);
            return t
        }

        function j(e, t, n) {
            return b(t, function (t, r) {
                n && "function" == typeof t ? e[r] = S(t, n) : e[r] = t
            }), e
        }

        function C(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
        }

        var S = n(3), R = Object.prototype.toString;
        e.exports = {
            isArray: r,
            isArrayBuffer: i,
            isBuffer: s,
            isFormData: a,
            isArrayBufferView: u,
            isString: c,
            isNumber: f,
            isObject: p,
            isPlainObject: d,
            isUndefined: o,
            isDate: l,
            isFile: h,
            isBlob: m,
            isFunction: y,
            isStream: g,
            isURLSearchParams: v,
            isStandardBrowserEnv: w,
            forEach: b,
            merge: E,
            extend: j,
            trim: x,
            stripBOM: C
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            this.defaults = e, this.interceptors = {request: new i, response: new i}
        }

        var o = n(2), s = n(5), i = n(6), a = n(7), u = n(22);
        r.prototype.request = function (e) {
            "string" == typeof e ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = u(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [a, void 0], n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, r.prototype.getUri = function (e) {
            return e = u(this.defaults, e), s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }, o.forEach(["delete", "get", "head", "options"], function (e) {
            r.prototype[e] = function (t, n) {
                return this.request(u(n || {}, {method: e, url: t, data: (n || {}).data}))
            }
        }), o.forEach(["post", "put", "patch"], function (e) {
            r.prototype[e] = function (t, n, r) {
                return this.request(u(r || {}, {method: e, url: t, data: n}))
            }
        }), e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }

        var o = n(2);
        e.exports = function (e, t, n) {
            if (!t) return e;
            var s;
            if (n) s = n(t); else if (o.isURLSearchParams(t)) s = t.toString(); else {
                var i = [];
                o.forEach(t, function (e, t) {
                    null !== e && "undefined" != typeof e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function (e) {
                        o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), i.push(r(t) + "=" + r(e))
                    }))
                }), s = i.join("&")
            }
            if (s) {
                var a = e.indexOf("#");
                a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
            }
            return e
        }
    }, function (e, t, n) {
        "use strict";

        function r() {
            this.handlers = []
        }

        var o = n(2);
        r.prototype.use = function (e, t) {
            return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
        }, r.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, r.prototype.forEach = function (e) {
            o.forEach(this.handlers, function (t) {
                null !== t && e(t)
            })
        }, e.exports = r
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }

        var o = n(2), s = n(8), i = n(9), a = n(10);
        e.exports = function (e) {
            r(e), e.headers = e.headers || {}, e.data = s(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                delete e.headers[t]
            });
            var t = e.adapter || a.adapter;
            return t(e).then(function (t) {
                return r(e), t.data = s(t.data, t.headers, e.transformResponse), t
            }, function (t) {
                return i(t) || (r(e), t && t.response && (t.response.data = s(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function (e, t, n) {
            return r.forEach(n, function (n) {
                e = n(e, t)
            }), e
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            !s.isUndefined(e) && s.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        function o() {
            var e;
            return "undefined" != typeof XMLHttpRequest ? e = n(12) : "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) && (e = n(12)), e
        }

        var s = n(2), i = n(11), a = {"Content-Type": "application/x-www-form-urlencoded"}, u = {
            adapter: o(),
            transformRequest: [function (e, t) {
                return i(t, "Accept"), i(t, "Content-Type"), s.isFormData(e) || s.isArrayBuffer(e) || s.isBuffer(e) || s.isStream(e) || s.isFile(e) || s.isBlob(e) ? e : s.isArrayBufferView(e) ? e.buffer : s.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : s.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300
            }
        };
        u.headers = {common: {Accept: "application/json, text/plain, */*"}}, s.forEach(["delete", "get", "head"], function (e) {
            u.headers[e] = {}
        }), s.forEach(["post", "put", "patch"], function (e) {
            u.headers[e] = s.merge(a)
        }), e.exports = u
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function (e, t) {
            r.forEach(e, function (n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2), o = n(13), s = n(16), i = n(5), a = n(17), u = n(20), c = n(21), f = n(14);
        e.exports = function (e) {
            return new Promise(function (t, n) {
                var p = e.data, d = e.headers;
                r.isFormData(p) && delete d["Content-Type"];
                var l = new XMLHttpRequest;
                if (e.auth) {
                    var h = e.auth.username || "",
                        m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    d.Authorization = "Basic " + btoa(h + ":" + m)
                }
                var y = a(e.baseURL, e.url);
                if (l.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l.onreadystatechange = function () {
                    if (l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders" in l ? u(l.getAllResponseHeaders()) : null,
                            s = e.responseType && "text" !== e.responseType ? l.response : l.responseText, i = {
                                data: s,
                                status: l.status,
                                statusText: l.statusText,
                                headers: r,
                                config: e,
                                request: l
                            };
                        o(t, n, i), l = null
                    }
                }, l.onabort = function () {
                    l && (n(f("Request aborted", e, "ECONNABORTED", l)), l = null)
                }, l.onerror = function () {
                    n(f("Network Error", e, null, l)), l = null
                }, l.ontimeout = function () {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(f(t, e, "ECONNABORTED", l)), l = null
                }, r.isStandardBrowserEnv()) {
                    var g = (e.withCredentials || c(y)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : void 0;
                    g && (d[e.xsrfHeaderName] = g)
                }
                if ("setRequestHeader" in l && r.forEach(d, function (e, t) {
                    "undefined" == typeof p && "content-type" === t.toLowerCase() ? delete d[t] : l.setRequestHeader(t, e)
                }), r.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), e.responseType) try {
                    l.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                    l && (l.abort(), n(e), l = null)
                }), p || (p = null), l.send(p)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(14);
        e.exports = function (e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(15);
        e.exports = function (e, t, n, o, s) {
            var i = new Error(e);
            return r(i, t, n, o, s)
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function () {
            return {
                write: function (e, t, n, o, s, i) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(s) && a.push("domain=" + s), i === !0 && a.push("secure"), document.cookie = a.join("; ")
                }, read: function (e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                }, remove: function (e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            }
        }() : function () {
            return {
                write: function () {
                }, read: function () {
                    return null
                }, remove: function () {
                }
            }
        }()
    }, function (e, t, n) {
        "use strict";
        var r = n(18), o = n(19);
        e.exports = function (e, t) {
            return e && !r(t) ? o(e, t) : t
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function (e) {
            var t, n, s, i = {};
            return e ? (r.forEach(e.split("\n"), function (e) {
                if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) {
                    if (i[t] && o.indexOf(t) >= 0) return;
                    "set-cookie" === t ? i[t] = (i[t] ? i[t] : []).concat([n]) : i[t] = i[t] ? i[t] + ", " + n : n
                }
            }), i) : i
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = r.isStandardBrowserEnv() ? function () {
            function e(e) {
                var t = e;
                return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
                    href: o.href,
                    protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                    host: o.host,
                    search: o.search ? o.search.replace(/^\?/, "") : "",
                    hash: o.hash ? o.hash.replace(/^#/, "") : "",
                    hostname: o.hostname,
                    port: o.port,
                    pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                }
            }

            var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
            return t = e(window.location.href), function (n) {
                var o = r.isString(n) ? e(n) : n;
                return o.protocol === t.protocol && o.host === t.host
            }
        }() : function () {
            return function () {
                return !0
            }
        }()
    }, function (e, t, n) {
        "use strict";
        var r = n(2);
        e.exports = function (e, t) {
            function n(e, t) {
                return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
            }

            function o(o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (s[o] = n(void 0, e[o])) : s[o] = n(e[o], t[o])
            }

            t = t || {};
            var s = {}, i = ["url", "method", "data"], a = ["headers", "auth", "proxy", "params"],
                u = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                c = ["validateStatus"];
            r.forEach(i, function (e) {
                r.isUndefined(t[e]) || (s[e] = n(void 0, t[e]))
            }), r.forEach(a, o), r.forEach(u, function (o) {
                r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (s[o] = n(void 0, e[o])) : s[o] = n(void 0, t[o])
            }), r.forEach(c, function (r) {
                r in t ? s[r] = n(e[r], t[r]) : r in e && (s[r] = n(void 0, e[r]))
            });
            var f = i.concat(a).concat(u).concat(c), p = Object.keys(e).concat(Object.keys(t)).filter(function (e) {
                return f.indexOf(e) === -1
            });
            return r.forEach(p, o), s
        }
    }, function (e, t) {
        "use strict";

        function n(e) {
            this.message = e
        }

        n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, n.prototype.__CANCEL__ = !0, e.exports = n
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function (e) {
                t = e
            });
            var n = this;
            e(function (e) {
                n.reason || (n.reason = new o(e), t(n.reason))
            })
        }

        var o = n(23);
        r.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, r.source = function () {
            var e, t = new r(function (t) {
                e = t
            });
            return {token: t, cancel: e}
        }, e.exports = r
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t)
            }
        }
    }, function (e, t) {
        "use strict";
        e.exports = function (e) {
            return "object" == typeof e && e.isAxiosError === !0
        }
    }])
});

const popapLinks = document.querySelectorAll(".popap-link");
const popapSubmits = document.querySelectorAll(".popap-submit");
const body = document.querySelector("body");

let unlock = true;

const timeout = 800;

if (popapLinks.length > 0) {
    for (let i = popapLinks.length - 1; i >= 0; i--) {
        const popapLink = popapLinks[i];
        popapLink.addEventListener("click", function (e) {
            const popapName = popapLink.getAttribute('href').replace('#', '');
            const currentPopap = document.getElementById(popapName);
            popapOpen(currentPopap);
            body.classList.add('_lock');
            e.preventDefault();
        });
    }
}

if (popapSubmits.length > 0) {
    for (let i = popapSubmits.length - 1; i >= 0; i--) {
        const popapSubmit = popapSubmits[i];
        popapSubmit.addEventListener("click", function (e) {
            const popapName = popapSubmit.getAttribute('href').replace('#', '');
            const currentPopap = document.getElementById(popapName);
            popapOpen(currentPopap);
            body.classList.add('_lock');
            if (popapName == "ordering-popap") {
                currentPopap.classList.add('_open');
            }
        });
    }
}

const popapCloseIcon = document.querySelectorAll('.close-popup');
if (popapCloseIcon.length > 0) {
    for (let i = popapCloseIcon.length - 1; i >= 0; i--) {
        const el = popapCloseIcon[i];
        el.addEventListener('click', function (e) {
            el.closest('.popap').classList.remove('_open');
            popapClose(el.closest('.popap'));
            if ($('._burger-btn').hasClass('_active')) {
                body.classList.add('_lock');
            }
            e.preventDefault();
        });
    }
}

function popapOpen(currentPopap) {
    if (currentPopap && unlock) {
        const popapActive = document.querySelector('.popap.open');
        if (popapActive) {
            popapClose(popapActive, false);
        }
        currentPopap.classList.add('open');
        currentPopap.addEventListener('click', function (e) {
            if (!e.target.closest('.popap__content')) {
                popapClose(e.target.closest('.popap'));
            }
        });
    }
}

function popapClose(popapActive, doUnlock = true) {
    if (unlock) {
        popapActive.classList.remove('open');
        body.classList.remove('_lock');
        if (document.querySelector("#ordering-popap").classList.contains("_open")) {
            body.classList.add('_lock');
        } else {
            body.classList.remove('_lock');
        }
    }
}

let popaps = document.querySelectorAll('.popap');

setTimeout(addTransition(), 800);

function addTransition() {
    for (var i = popaps.length - 1; i >= 0; i--) {
        popaps[i].style.transition = "all 0.5s";
    }
}

let orderingForm = document.forms.orderingForm.elements;

if (orderingForm) {
    for (let i = orderingForm.length - 1; i >= 0; i--) {
        orderingForm[i].addEventListener('input', function () {
            let el = orderingForm[i];
            el.addEventListener('blur', function () {
                el.value = el.value.trim();
            })
            if (el.value.trim().length > 0) {
                el.classList.add('_filled');
            } else {
                el.classList.remove('_filled');
            }
        });
    }
}
/* slider */
$(document).ready(function () {
    $('.main_title_slider').slick({
        slidesToShow: 1,
        speed: 500,
        easing: 'ease',
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        dots: true,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        touchMove: false,
        touchThreshold: 20,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 556,
                settings: {}
            }
        ]
    });
    $('.sample_menu_menu').slick({
        arrows: true,
        slidesToShow: 4.2,
        speed: 900,
        easing: 'ease',
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        touchThreshold: 20,
        swipeToSlide: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 556,
                settings: {
                    arrows: true,
                    waitForAnimate: true,
                    slidesToShow: 1.5,
                    adaptiveHeight: true,
                    speed: 500,
                    touchMove: true,
                    swipeToSlide: true,
                }
            }]
    });
    $('.cooks').slick({
        arrows: true,
        slidesToShow: 6.2,
        speed: 1000,
        easing: 'ease',
        adaptiveHeight: true,
        slidesToScroll: 6,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        touchThreshold: 20,
        responsive: [
            {
                breakpoint: 556,
                settings: {
                    arrows: false,
                    slidesToShow: 2.7,
                    adaptiveHeight: true,
                    dots: false,
                    slidesToScroll: 1,
                    speed: 500,
                    waitForAnimate: true,
                    touchMove: true,
                    swipeToSlide: true,
                    autoplaySpeed: 4000,
                }
            }]
    });
    $('.advantages_block2_imgs_slider').slick({
        arrows: true,
        slidesToShow: 3.2,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 3500,
        adaptiveHeight: true,
        slidesToScroll: 3,
        dots: true,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        infinite: true,
        pauseOnFocus: false,
        touchThreshold: 20,
        touchMove: true,
        responsive: [
            {
                breakpoint: 556,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1.37,
                    swipeToSlide: true,
                    autoplaySpeed: 4000,
                }
            }]
    });
    $('.kitchen_slider').slick({
        slidesToShow: 1,
        speed: 1500,
        easing: 'ease',
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        infinite: true,
        pauseOnFocus: false,
        arrows: true,
        touchThreshold: 20,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 556,
                settings: {
                    arrows: false,
                    swipeToSlide: true,
                    touchMove: true,
                    infinite: true,
                    speed: 1000,
                    autoplaySpeed: 4000,
                }
            }]
    });
});
