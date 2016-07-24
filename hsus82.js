(function() {
    var n = this,
        aa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ba = function(a) {
            return "number" == typeof a
        },
        ca = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        da = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ea = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b,
                    arguments)
            }
        },
        q = function(a, b, c) {
            q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? da : ea;
            return q.apply(null, arguments)
        },
        v = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        fa = Date.now || function() {
            return +new Date
        },
        w = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.T = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ua = function(a, c, f) {
                for (var h = Array(arguments.length -
                        2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
                return b.prototype[c].apply(a, h)
            }
        };
    var ga = (new Date).getTime();
    var y = function(a) {
            a = parseFloat(a);
            return isNaN(a) || 1 < a || 0 > a ? 0 : a
        },
        ha = function(a) {
            a = parseFloat(a);
            return isNaN(a) ? 0 : a
        },
        ia = function(a, b) {
            var c = parseInt(a, 10);
            return isNaN(c) ? b : c
        },
        ja = function(a, b) {
            return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
        },
        ka = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,
        la = function(a, b) {
            if (!a) return b;
            var c = a.match(ka);
            return c ? c[0] : b
        };
    var ma = ia("100", -1),
        na = ia("10", 0),
        oa = y("0"),
        pa = y("0.05"),
        qa = ia("468", 0),
        ra = ha("0.5"),
        sa = ha("3.44"),
        ta = y("0.001"),
        ua = y("0.0"),
        va = y(""),
        wa = y("0.1");
    var xa = function() {
            return "r20160719"
        },
        ya = ja("false", !1),
        za = ja("false", !1),
        Aa = ja("false", !1),
        Ba = Aa || !za;
    var Ca = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        Da = /&/g,
        Ea = /</g,
        Fa = />/g,
        Ga = /"/g,
        Ha = /'/g,
        Ia = /\x00/g,
        Ja = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        Ka = {
            "'": "\\'"
        },
        La = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Ma = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        };
    var Na = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" == typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    };
    var z;
    a: {
        var Oa = n.navigator;
        if (Oa) {
            var Pa = Oa.userAgent;
            if (Pa) {
                z = Pa;
                break a
            }
        }
        z = ""
    }
    var A = function(a) {
        return -1 != z.indexOf(a)
    };
    var Qa = function() {
            this.l = "";
            this.j = null
        },
        Ra = function(a) {
            var b = new Qa;
            b.l = a;
            b.j = 0
        };
    Ra("<!DOCTYPE html>");
    Ra("");
    Ra("<br>");
    var B = function(a) {
        B[" "](a);
        return a
    };
    B[" "] = function() {};
    var Sa = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        B(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        D = function(a, b) {
            return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
        },
        Ua = function(a, b) {
            if (!(1E-4 > Math.random())) {
                var c = Math.random();
                if (c < b) return c = Ta(window), a[Math.floor(c * a.length)]
            }
            return null
        },
        Ta = function(a) {
            try {
                var b = new Uint32Array(1);
                a.crypto.getRandomValues(b);
                return b[0] / 65536 / 65536
            } catch (c) {
                return Math.random()
            }
        },
        Va = function(a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a,
                c) && b.call(void 0, a[c], c, a)
        },
        Wa = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Xa = /^([0-9.]+)px$/,
        Ya = /^(-?[0-9.]{1,30})$/,
        Za = function(a) {
            return Ya.test(a) && (a = Number(a), !isNaN(a)) ? a : null
        },
        $a = function(a) {
            return (a = Xa.exec(a)) ? +a[1] : null
        };
    var ab = function(a, b) {
            this.j = a;
            this.l = b
        },
        bb = function(a, b, c) {
            this.url = a;
            this.j = b;
            this.J = !!c;
            this.depth = ba(void 0) ? void 0 : null
        };
    var cb = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    };
    var db = function(a, b, c, d, e) {
            this.w = c || 4E3;
            this.m = a || "&";
            this.A = b || ",$";
            this.s = void 0 !== d ? d : "trn";
            this.C = e || null;
            this.v = !1;
            this.l = {};
            this.B = 0;
            this.j = []
        },
        eb = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        F = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = eb(c, d)
        },
        hb = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = fb(a) - d.length - 0;
            if (0 > e) return "";
            a.j.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.j.length; f++)
                for (var h = a.j[f], k = a.l[h], g = 0; g < k.length; g++) {
                    if (!e) {
                        d = null == d ? h : d;
                        break
                    }
                    var l = gb(k[g], a.m, a.A);
                    if (l) {
                        l = c + l;
                        if (e >= l.length) {
                            e -= l.length;
                            b += l;
                            c = a.m;
                            break
                        } else a.v && (c = e, l[c - 1] == a.m && --c, b += l.substr(0, c), c = a.m, e = 0);
                        d = null == d ? h : d
                    }
                }
            f = "";
            a.s && null != d && (f = c + a.s + "=" + (a.C || d));
            return b + f + ""
        },
        fb = function(a) {
            if (!a.s) return a.w;
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return a.w - a.s.length - b - a.m.length - 1
        },
        gb = function(a, b, c, d, e) {
            var f = [];
            Va(a, function(a, k) {
                var g = ib(a, b, c, d, e);
                g && f.push(k + "=" + g)
            });
            return f.join(b)
        },
        ib = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], h = 0; h < a.length; h++) f.push(ib(a[h], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(gb(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    var kb = function(a, b, c, d, e, f) {
            try {
                var h;
                c instanceof db ? h = c : (h = new db, Va(c, function(a, b) {
                    var c = h,
                        d = c.B++,
                        e = eb(b, a);
                    c.j.push(d);
                    c.l[d] = e
                }));
                if ((d ? a.m : Math.random()) < (e || a.j)) {
                    var k = hb(h, a.l, a.s, a.v + b + "&");
                    "undefined" === typeof f ? jb(k) : jb(k, f)
                }
            } catch (g) {}
        },
        jb = function(a, b) {
            n.google_image_requests || (n.google_image_requests = []);
            var c = n.document.createElement("img");
            if (b) {
                var d = function(a) {
                    b(a);
                    a = d;
                    c.removeEventListener ? c.removeEventListener("load", a, !1) : c.detachEvent && c.detachEvent("onload", a);
                    a = d;
                    c.removeEventListener ?
                        c.removeEventListener("error", a, !1) : c.detachEvent && c.detachEvent("onerror", a)
                };
                cb(c, "load", d);
                cb(c, "error", d)
            }
            c.src = a;
            n.google_image_requests.push(c)
        };
    var lb = function(a, b, c) {
            this.v = a;
            this.A = b;
            this.m = c;
            this.l = null;
            this.w = this.j;
            this.s = !1
        },
        mb = function(a, b, c) {
            this.message = a;
            this.j = b || "";
            this.l = c || -1
        },
        ob = function(a, b, c, d, e, f) {
            var h;
            try {
                h = c()
            } catch (l) {
                var k = a.m;
                try {
                    var g = nb(l),
                        k = (f || a.w).call(a, b, g, void 0, d)
                } catch (m) {
                    a.j("pAR", m)
                }
                if (!k) throw l;
            } finally {
                if (e) try {
                    e()
                } catch (l) {}
            }
            return h
        },
        H = function(a, b, c) {
            var d = G;
            return function() {
                for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                return ob(d, a, function() {
                    return b.apply(void 0, e)
                }, void 0, c)
            }
        };
    lb.prototype.j = function(a, b, c, d, e) {
        try {
            var f = e || this.A,
                h = new db;
            h.v = !0;
            F(h, 1, "context", a);
            b instanceof mb || (b = nb(b));
            F(h, 2, "msg", b.message.substring(0, 512));
            b.j && F(h, 3, "file", b.j);
            0 < b.l && F(h, 4, "line", b.l.toString());
            b = {};
            if (this.l) try {
                this.l(b)
            } catch (u) {}
            if (d) try {
                d(b)
            } catch (u) {}
            d = [b];
            h.j.push(5);
            h.l[5] = d;
            var k;
            e = n;
            d = [];
            var g, l = null;
            do {
                b = e;
                Sa(b) ? (g = b.location.href, l = b.document && b.document.referrer || null) : (g = l, l = null);
                d.push(new bb(g || "", b));
                try {
                    e = b.parent
                } catch (u) {
                    e = null
                }
            } while (e && b != e);
            g = 0;
            for (var m =
                    d.length - 1; g <= m; ++g) d[g].depth = m - g;
            b = n;
            if (b.location && b.location.ancestorOrigins && b.location.ancestorOrigins.length == d.length - 1)
                for (g = 1; g < d.length; ++g) {
                    var x = d[g];
                    x.url || (x.url = b.location.ancestorOrigins[g - 1] || "", x.J = !0)
                }
            for (var C = new bb(n.location.href, n, !1), r = d.length - 1, m = r; 0 <= m; --m) {
                var p = d[m];
                if (p.url && !p.J) {
                    C = p;
                    break
                }
            }
            var p = null,
                t = d.length && d[r].url;
            0 != C.depth && t && (p = d[r]);
            k = new ab(C, p);
            k.l && F(h, 6, "top", k.l.url || "");
            F(h, 7, "url", k.j.url || "");
            kb(this.v, f, h, this.s, c)
        } catch (u) {
            try {
                kb(this.v, f, {
                    context: "ecmserr",
                    rctx: a,
                    msg: pb(u),
                    url: k.j.url
                }, this.s, c)
            } catch (E) {}
        }
        return this.m
    };
    var nb = function(a) {
            return new mb(pb(a), a.fileName, a.lineNumber)
        },
        pb = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        };
    var qb = A("Opera"),
        I = A("Trident") || A("MSIE"),
        rb = A("Edge"),
        J = A("Gecko") && !(-1 != z.toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        sb = -1 != z.toLowerCase().indexOf("webkit") && !A("Edge"),
        tb = function() {
            var a = n.document;
            return a ? a.documentMode : void 0
        },
        ub;
    a: {
        var vb = "",
            wb = function() {
                var a = z;
                if (J) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (rb) return /Edge\/([\d\.]+)/.exec(a);
                if (I) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (sb) return /WebKit\/(\S+)/.exec(a);
                if (qb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();wb && (vb = wb ? wb[1] : "");
        if (I) {
            var xb = tb();
            if (null != xb && xb > parseFloat(vb)) {
                ub = String(xb);
                break a
            }
        }
        ub = vb
    }
    var yb = ub,
        zb = {},
        Ab = function(a) {
            if (!zb[a]) {
                for (var b = 0, c = Ca(String(yb)).split("."), d = Ca(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var h = c[f] || "",
                        k = d[f] || "",
                        g = RegExp("(\\d*)(\\D*)", "g"),
                        l = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var m = g.exec(h) || ["", "", ""],
                            x = l.exec(k) || ["", "", ""];
                        if (0 == m[0].length && 0 == x[0].length) break;
                        b = La(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == x[1].length ? 0 : parseInt(x[1], 10)) || La(0 == m[2].length, 0 == x[2].length) || La(m[2], x[2])
                    } while (0 == b)
                }
                zb[a] = 0 <= b
            }
        },
        Bb = n.document,
        Cb = Bb && I ? tb() || ("CSS1Compat" == Bb.compatMode ? parseInt(yb, 10) : 5) : void 0;
    var Db;
    if (!(Db = !J && !I)) {
        var Eb;
        if (Eb = I) Eb = 9 <= Number(Cb);
        Db = Eb
    }
    Db || J && Ab("1.9.1");
    I && Ab("9");
    var Fb = document,
        K = window;
    var Gb = Object.prototype.hasOwnProperty,
        Hb = function(a, b) {
            for (var c in a) Gb.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Ib = function(a) {
            return !(!a || !a.call) && "function" === typeof a
        },
        Jb = function(a, b) {
            for (var c = 1, d = arguments.length; c < d; ++c) a.push(arguments[c])
        },
        L = function(a, b) {
            if (a.indexOf) {
                var c = a.indexOf(b);
                return 0 < c || 0 === c
            }
            for (c = 0; c < a.length; c++)
                if (a[c] === b) return !0;
            return !1
        },
        Kb = function(a) {
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
        },
        Lb = /(^| )adsbygoogle($| )/,
        Mb = {
            "http://googleads.g.doubleclick.net": !0,
            "http://pagead2.googlesyndication.com": !0,
            "https://googleads.g.doubleclick.net": !0,
            "https://pagead2.googlesyndication.com": !0
        },
        Nb = /\.google\.com(:\d+)?$/,
        Ob = function(a) {
            a = ya && a.google_top_window || a.top;
            return Sa(a) ? a : null
        };
    var Pb, G;
    Pb = new function() {
        this.l = "http:" === K.location.protocol ? "http:" : "https:";
        this.s = "pagead2.googlesyndication.com";
        this.v = "/pagead/gen_204?id=";
        this.j = .01;
        this.m = Math.random()
    };
    G = new lb(Pb, "jserror", !0);
    var Rb = function() {
            var a = [Qb];
            G.l = function(b) {
                Na(a, function(a) {
                    a(b)
                })
            }
        },
        Sb = function(a, b, c, d) {
            ob(G, a, c, d, void 0, b)
        },
        Tb = G.j;
    var Ub = function(a, b) {
        this.l = a < b ? a : b;
        this.j = a < b ? b : a
    };
    Ub.prototype.clone = function() {
        return new Ub(this.l, this.j)
    };
    var Vb = function() {
        var a;
        try {
            a = parseInt(K.localStorage.getItem("google_experiment_mod"), 10)
        } catch (b) {
            return null
        }
        if (0 <= a && 1E3 > a) return a;
        a = Math.floor(1E3 * Ta(K));
        try {
            return K.localStorage.setItem("google_experiment_mod", "" + a), a
        } catch (b) {
            return null
        }
    };
    var Wb = null,
        Xb = function() {
            if (!Wb) {
                for (var a = window, b = a, c = 0; a && a != a.parent;)
                    if (a = a.parent, c++, Sa(a)) b = a;
                    else break;
                Wb = b
            }
            return Wb
        };
    var Yb = {
            u: "10573511",
            o: "10573512"
        },
        Zb = {
            u: "10573507",
            o: "10573508"
        },
        $b = {
            u: "10573695",
            o: "10573696"
        },
        ac = {
            u: "10583695",
            o: "10583696"
        },
        M = {
            aa: {},
            ta: {
                u: "453848102",
                o: "453848103"
            },
            ma: {
                u: "24819308",
                o: "24819309",
                X: "24819320",
                ea: "24819321"
            },
            ka: {
                u: "24819330",
                o: "24819331"
            },
            la: {
                u: "108809120",
                fa: "108809121"
            },
            ha: {
                u: "86724438",
                o: "86724439"
            },
            D: {
                u: "10573597",
                o: "10573598"
            },
            H: {
                u: "10573581",
                o: "10573582"
            },
            pa: {
                u: "10573605",
                o: "10573606"
            },
            ca: {
                u: "26835105",
                o: "26835106"
            },
            ga: {
                u: "35923720",
                o: "35923721"
            },
            F: {
                u: "35923760",
                o: "35923761"
            },
            G: {
                u: "20040000",
                o: "20040001"
            },
            Z: {
                u: "20040016",
                o: "20040017"
            },
            na: {
                u: "19188000",
                o: "19188001"
            },
            $: {
                U: "314159230",
                ja: "314159231"
            },
            ia: {
                qa: "27285692",
                sa: "27285712",
                ra: "27285713"
            },
            oa: {
                u: "27415010",
                o: "27415011"
            },
            W: {
                u: "618018082",
                V: "618018083",
                Y: "618018084"
            },
            da: {
                u: "29222103",
                ba: "29222104"
            }
        };
    var bc = function(a, b, c) {
            Sb("files::getSrc", Tb, function() {
                if ("https:" == K.location.protocol && "http" == c) throw c = "https", Error("Requested url " + a + b);
            });
            return [c, "://", a, b].join("")
        },
        cc = function(a, b, c) {
            c || (c = Ba ? "https" : "http");
            return bc(a, b, c)
        };
    var dc = function() {},
        fc = function(a, b, c) {
            switch (typeof b) {
                case "string":
                    ec(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "undefined":
                    c.push("null");
                    break;
                case "object":
                    if (null == b) {
                        c.push("null");
                        break
                    }
                    if (b instanceof Array || void 0 != b.length && b.splice) {
                        var d = b.length;
                        c.push("[");
                        for (var e = "", f = 0; f < d; f++) c.push(e), fc(a, b[f], c), e = ",";
                        c.push("]");
                        break
                    }
                    c.push("{");
                    d = "";
                    for (e in b) b.hasOwnProperty(e) && (f = b[e], "function" != typeof f &&
                        (c.push(d), ec(e, c), c.push(":"), fc(a, f, c), d = ","));
                    c.push("}");
                    break;
                case "function":
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        },
        gc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        hc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        ec = function(a, b) {
            b.push('"');
            b.push(a.replace(hc, function(a) {
                if (a in gc) return gc[a];
                var b = a.charCodeAt(0),
                    e = "\\u";
                16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
                return gc[a] =
                    e + b.toString(16)
            }));
            b.push('"')
        };
    var ic = A("Safari") && !((A("Chrome") || A("CriOS")) && !A("Edge") || A("Coast") || A("Opera") || A("Edge") || A("Silk") || A("Android")) && !(A("iPhone") && !A("iPod") && !A("iPad") || A("iPad") || A("iPod"));
    var jc = null,
        kc = J || sb && !ic || qb || "function" == typeof n.btoa,
        lc = function(a) {
            var b;
            if (kc) b = n.btoa(a);
            else {
                b = [];
                for (var c = 0, d = 0; d < a.length; d++) {
                    for (var e = a.charCodeAt(d); 255 < e;) b[c++] = e & 255, e >>= 8;
                    b[c++] = e
                }
                if (!jc)
                    for (jc = {}, a = 0; 65 > a; a++) jc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
                a = jc;
                c = [];
                for (d = 0; d < b.length; d += 3) {
                    var f = b[d],
                        h = (e = d + 1 < b.length) ? b[d + 1] : 0,
                        k = d + 2 < b.length,
                        g = k ? b[d + 2] : 0,
                        l = f >> 2,
                        f = (f & 3) << 4 | h >> 4,
                        h = (h & 15) << 2 | g >> 6,
                        g = g & 63;
                    k || (g = 64, e || (h = 64));
                    c.push(a[l], a[f], a[h],
                        a[g])
                }
                b = c.join("")
            }
            return b
        };
    var mc = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0
        },
        nc = function(a) {
            try {
                if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                    var b, c, d = function() {
                        return this
                    };
                    null != Object.prototype.toJSON && (b = Object.prototype.toJSON, Object.prototype.toJSON = d);
                    null != Array.prototype.toJSON && (c = Array.prototype.toJSON, Array.prototype.toJSON = d);
                    var e = lc(encodeURIComponent(window.JSON.stringify(a)));
                    b && (Object.prototype.toJSON = b);
                    c && (Array.prototype.toJSON = c);
                    return e
                }
            } catch (f) {
                G.j("sblob",
                    f, void 0, void 0)
            }
            return ""
        },
        oc = function(a) {
            a.google_page_url && (a.google_page_url = String(a.google_page_url));
            var b = [];
            Hb(a, function(a, d) {
                if (null != a) {
                    var e;
                    try {
                        var f = [];
                        fc(new dc, a, f);
                        e = f.join("")
                    } catch (h) {}
                    e && (e = e.replace(/\//g, "\\$&"), Jb(b, d, "=", e, ";"))
                }
            });
            return b.join("")
        };
    var pc = function(a) {
        return eval("(" + a + ")")
    };
    var N = function() {},
        qc = "function" == typeof Uint8Array,
        O = function(a, b, c) {
            a.j = null;
            b || (b = []);
            a.A = void 0;
            a.s = -1;
            a.l = b;
            a: {
                if (a.l.length) {
                    b = a.l.length - 1;
                    var d = a.l[b];
                    if (d && "object" == typeof d && "array" != aa(d) && !(qc && d instanceof Uint8Array)) {
                        a.v = b - a.s;
                        a.m = d;
                        break a
                    }
                }
                a.v = Number.MAX_VALUE
            }
            a.w = {};
            if (c)
                for (b = 0; b < c.length; b++) d = c[b], d < a.v ? (d += a.s, a.l[d] = a.l[d] || rc) : a.m[d] = a.m[d] || rc
        },
        rc = [],
        P = function(a, b) {
            if (b < a.v) {
                var c = b + a.s,
                    d = a.l[c];
                return d === rc ? a.l[c] = [] : d
            }
            d = a.m[b];
            return d === rc ? a.m[b] = [] : d
        },
        sc = function(a,
            b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                var d = P(a, c);
                d && (a.j[c] = new b(d))
            }
            return a.j[c]
        },
        tc = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                for (var d = P(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.j[c] = e
            }
            b = a.j[c];
            b == rc && (b = a.j[c] = []);
            return b
        },
        uc = function(a) {
            if (a.j)
                for (var b in a.j) {
                    var c = a.j[b];
                    if ("array" == aa(c))
                        for (var d = 0; d < c.length; d++) c[d] && uc(c[d]);
                    else c && uc(c)
                }
        };
    N.prototype.toString = function() {
        uc(this);
        return this.l.toString()
    };
    var wc = function(a) {
        O(this, a, vc)
    };
    w(wc, N);
    var vc = [4],
        xc = function(a) {
            O(this, a, null)
        };
    w(xc, N);
    var yc = function(a) {
        O(this, a, null)
    };
    w(yc, N);
    yc.prototype.setProperty = function(a) {
        1 < this.v ? this.l[1 + this.s] = a : this.m[1] = a
    };
    var zc = function(a) {
        O(this, a, null)
    };
    w(zc, N);
    var Bc = function(a) {
        O(this, a, Ac)
    };
    w(Bc, N);
    var Ac = [6, 7];
    var Dc = function(a) {
        O(this, a, Cc)
    };
    w(Dc, N);
    var Cc = [1, 2, 5],
        Ec = function(a) {
            O(this, a, null)
        };
    w(Ec, N);
    var Fc = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4
    };
    var Q = function(a) {
        a = a.document;
        return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
    };
    var Gc = function(a) {
        var b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
            if (!c[b[d]]) return !1;
        return !0
    };
    var Hc = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Ma(d.R);
            a[e] = d.value
        }
    };
    var Ic = function(a, b) {
        var c = a.length;
        if (null != c)
            for (var d = 0; d < c; d++) b.call(void 0, a[d], d)
    };
    var Jc = function(a, b, c, d) {
            this.s = a;
            this.l = b;
            this.m = c;
            this.j = d
        },
        Kc = function(a, b) {
            if (null == a.j) return b;
            switch (a.j) {
                case 1:
                    return b.slice(1);
                case 2:
                    return b.slice(0, b.length - 1);
                case 3:
                    return b.slice(1, b.length - 1);
                case 0:
                    return b;
                default:
                    throw Error("Unknown ignore mode: " + a.j);
            }
        },
        Mc = function(a) {
            var b = [];
            Ic(a.getElementsByTagName("p"), function(a) {
                100 <= Lc(a) && b.push(a)
            });
            return b
        },
        Lc = function(a) {
            if (3 == a.nodeType) return a.length;
            if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
            var b = 0;
            Ic(a.childNodes, function(a) {
                b +=
                    Lc(a)
            });
            return b
        },
        Nc = function(a) {
            return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
        };
    var Oc = {
            1: 1,
            2: 2,
            3: 3,
            0: 0
        },
        Pc = function(a) {
            return null != a ? Oc[a] : a
        },
        Qc = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = P(a[c], 1),
                    e = P(a[c], 2);
                if (d && null != e) {
                    var f = {};
                    f.R = d;
                    f.value = e;
                    b.push(f)
                }
            }
            return b
        },
        Rc = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        };
    var Sc = function(a, b) {
            if (!a) return !1;
            var c = D(a, b);
            if (!c) return !1;
            c = c.cssFloat || c.styleFloat;
            return "left" == c || "right" == c
        },
        Tc = function(a) {
            for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
            return a ? a : null
        },
        Uc = function(a) {
            return !!a.nextSibling || !!a.parentNode && Uc(a.parentNode)
        };
    var Wc = function() {
            this.l = new Vc(this);
            this.j = 0
        },
        Xc = function(a) {
            if (0 != a.j) throw Error("Already resolved/rejected.");
        },
        Vc = function(a) {
            this.j = a
        };
    Vc.prototype.then = function(a, b) {
        if (this.l) throw Error("Then functions already set.");
        this.l = a;
        this.m = b;
        Yc(this)
    };
    var Yc = function(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.s);
                break;
            case 2:
                a.m && a.m(a.j.m);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };
    var Zc = function(a) {
            this.exception = a
        },
        $c = function(a, b, c, d) {
            this.m = a;
            this.l = b;
            this.v = c;
            this.j = d
        };
    $c.prototype.s = function() {
        try {
            switch (this.m.document.readyState) {
                case "complete":
                case "interactive":
                    ad(this.l, !0);
                    bd(this);
                    break;
                default:
                    var a = this.l;
                    ad(a, !1);
                    a.j ? bd(this) : this.m.setTimeout(q(this.s, this), this.v)
            }
        } catch (b) {
            bd(this, b)
        }
    };
    var bd = function(a, b) {
        try {
            var c = a.j,
                d = new Zc(b);
            Xc(c);
            c.j = 1;
            c.s = d;
            Yc(c.l)
        } catch (e) {
            c = a.j, Xc(c), c.j = 2, c.m = e, Yc(c.l)
        }
    };
    var cd = function(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        kb(Pb, "ama", b, !0, .01, void 0)
    };
    var dd = function(a, b) {
            this.l = n;
            this.s = a;
            this.m = b;
            this.j = !1
        },
        ad = function(a, b) {
            if (!a.j)
                for (var c = tc(a.m, Bc, 1), d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = sc(e, zc, 4);
                    if (f && 2 == P(f, 1) && ed(a, e, b)) {
                        a.j = !0;
                        (window.google_ama_state = window.google_ama_state || {}).placement = d;
                        break
                    }
                }
        },
        ed = function(a, b, c) {
            var d = sc(b, wc, 1);
            if (!d) return !1;
            var e;
            e = P(d, 7);
            if (P(d, 1) || P(d, 3) || 0 < P(d, 4).length) {
                var f = P(d, 3),
                    h = P(d, 1),
                    k = P(d, 4);
                e = P(d, 2);
                var g = P(d, 5),
                    l = Pc(P(d, 6)),
                    m = "";
                h && (m += h);
                f && (m += "#" + Nc(f));
                if (k)
                    for (f = 0; f < k.length; f++) m += "." + Nc(k[f]);
                e = (k = m) ? new Jc(k, e, g, l) : null
            } else e = e ? new Jc(e, P(d, 2), P(d, 5), Pc(P(d, 6))) : null;
            if (!e) return !1;
            g = [];
            try {
                g = a.l.document.querySelectorAll(e.s)
            } catch (Yd) {}
            if (g.length) {
                l = g.length;
                if (0 < l) {
                    k = Array(l);
                    for (m = 0; m < l; m++) k[m] = g[m];
                    g = k
                } else g = [];
                ba(e.l) && (l = e.l, 0 > l && (l += g.length), g = 0 <= l && l < g.length ? [g[l]] : []);
                if (ba(e.m)) {
                    l = [];
                    for (k = 0; k < g.length; k++) m = Mc(g[k]), f = e.m, 0 > f && (f += m.length), 0 <= f && f < m.length && l.push(m[f]);
                    g = l
                }
                e = g = Kc(e, g)
            } else e = [];
            if (0 == e.length) return !1;
            e = e[0];
            g = P(d, 2);
            d = P(b, 2);
            d = Rc[d];
            d = void 0 !== d ?
                d : null;
            if (!(l = null == d)) {
                a: {
                    l = a.l;
                    if (null != g) switch (d) {
                        case 0:
                            g = Sc(Tc(e), l);
                            break a;
                        case 3:
                            g = Sc(e, l);
                            break a;
                        case 2:
                            g = e.lastChild;
                            g = Sc(g ? 1 == g.nodeType ? g : Tc(g) : null, l);
                            break a
                    }
                    g = !1
                }
                if (c = !g && !(!c && 2 == d && !Uc(e))) c = 1 == d || 2 == d ? e : e.parentNode,
                c = !(c && ("INS" != c.tagName || !Gc(c)) && 0 >= c.offsetWidth);l = !c
            }
            if (l) return !1;
            c = sc(b, xc, 3);
            g = tc(b, yc, 6);
            b = tc(b, yc, 7);
            var x, C, r, p, t;
            c && (x = P(c, 1), C = P(c, 2), r = !!P(c, 3));
            g && (p = Qc(g));
            b && (t = Qc(b));
            a: {
                b = a.l;a = a.s;c = ["ama-quickstart"];l = b.document;g = l.createElement("div");k = g.style;
                k.textAlign = "center";k.width = "100%";k.height = "auto";k.clear = r ? "both" : "none";p && Hc(k, p);r = l.createElement("ins");p = r.style;p.display = "block";p.margin = "auto";p.backgroundColor = "transparent";x && (p.marginTop = x);C && (p.marginBottom = C);t && Hc(p, t);g.appendChild(r);g.className = "googlepublisherpluginad";r.className = "adsbygoogle";r.setAttribute("data-ad-client", a);r.setAttribute("data-ad-format", "auto");r.setAttribute("data-tag-origin", "pso");c.length && r.setAttribute("data-ad-channel", c.join("+"));
                try {
                    switch (d) {
                        case 0:
                            e.parentNode &&
                                e.parentNode.insertBefore(g, e);
                            break;
                        case 3:
                            var u = e.parentNode;
                            if (u) {
                                var E = e.nextSibling;
                                if (E && E.parentNode != u)
                                    for (; E && 8 == E.nodeType;) E = E.nextSibling;
                                u.insertBefore(g, E)
                            }
                            break;
                        case 1:
                            e.insertBefore(g, e.firstChild);
                            break;
                        case 2:
                            e.appendChild(g)
                    }
                    "INS" == e.tagName && Gc(e) && (e.style.display = "block");
                    (b.adsbygoogle = b.adsbygoogle || []).push({})
                } catch (Yd) {
                    g.parentNode && g.parentNode.removeChild(g);
                    x = !1;
                    break a
                }
                x = !0
            }
            return x ? !0 : !1
        };
    var fd = function(a) {
            cd(a, {
                atf: 1
            })
        },
        gd = function(a, b) {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            cd(a, {
                atf: 0
            })
        };
    var hd = function() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.wasReactiveAdCreated = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledByReactiveTag = {};
            this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.debugCard = null;
            this.debugCardRequested = !1;
            this.interstitialJSRefactorExperiment = 0;
            this.messageValidationEnabled = this.vignetteNmoScaledExperimentAndEligible =
                this.vignetteNmoScaledExperiment = this.floatingNmoOrientationExperimentAndEligible = this.floatingNmoOrientationExperiment = this.floatingNmoScaledExperimentAndEligible = this.floatingNmoScaledExperiment = !1;
            this.grappleTagStatusService = null
        },
        id = function(a) {
            a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new hd);
            return a.google_reactive_ads_global_state
        };
    var jd = function(a) {
        a = id(a);
        return !!a && a.vignetteNmoScaledExperimentAndEligible
    };
    var kd = new function() {
        this.j = new Ub(100, 199)
    };
    var ld = function(a) {
            return (a = a.google_ad_modifications) ? a.eids || [] : []
        },
        R = function(a) {
            return (a = a.google_ad_modifications) ? a.loeids || [] : []
        },
        md = function(a, b, c) {
            if (!a) return null;
            for (var d = 0; d < a.length; ++d)
                if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
            return null
        };
    var nd = function(a, b, c) {
            return K.location && K.location.hash == "#google_plle_" + c ? c : Ua([b, c], a)
        },
        od = function(a, b, c, d) {
            a = a.google_active_plles = a.google_active_plles || [];
            L(R(b), c) || L(ld(b), c) ? a.push(c) : (L(R(b), d) || L(ld(b), d)) && a.push(d)
        };
    var pd = function(a) {
            this.j = a;
            a.google_iframe_oncopy || (a.google_iframe_oncopy = {
                handlers: {},
                upd: q(this.s, this)
            });
            this.m = a.google_iframe_oncopy
        },
        qd;
    var S = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    /[\x00&<>"']/.test(S) && (-1 != S.indexOf("&") && (S = S.replace(Da, "&amp;")), -1 != S.indexOf("<") && (S = S.replace(Ea, "&lt;")), -1 != S.indexOf(">") && (S = S.replace(Fa, "&gt;")), -1 != S.indexOf('"') && (S = S.replace(Ga, "&quot;")), -1 != S.indexOf("'") && (S = S.replace(Ha, "&#39;")), -1 != S.indexOf("\x00") && (S = S.replace(Ia, "&#0;")));
    qd = S;
    pd.prototype.set = function(a, b) {
        this.m.handlers[a] = b;
        this.j.addEventListener && this.j.addEventListener("load", q(this.l, this, a), !1)
    };
    pd.prototype.l = function(a) {
        a = this.j.document.getElementById(a);
        try {
            var b = a.contentWindow.document;
            if (a.onload && b && (!b.body || !b.body.firstChild)) a.onload()
        } catch (c) {}
    };
    pd.prototype.s = function(a, b) {
        var c = rd("rx", a),
            d;
        a: {
            if (a && (d = a.match("dt=([^&]+)")) && 2 == d.length) {
                d = d[1];
                break a
            }
            d = ""
        }
        d = (new Date).getTime() - d;
        c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= d ? "M" : 0 <= d ? d : "-M"));
        this.set(b, c);
        return c
    };
    var rd = function(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    };
    var sd = function(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    J || sb || I && Ab(11);
    var td = !1,
        ud = function(a, b, c) {
            var d = ["<iframe"],
                e;
            for (e in a) a.hasOwnProperty(e) && Jb(d, e + "=" + a[e]);
            e = "left:0;position:absolute;top:0;";
            td && (e = e + "width:" + b + "px;height:" + c + "px;");
            d.push('style="' + e + '"');
            d.push("></iframe>");
            a = a.id;
            b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
            return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
        };
    var vd = null;
    var wd = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };
    var xd, T = function(a) {
            this.s = [];
            this.l = a || window;
            this.j = 0;
            this.m = null;
            this.B = 0
        },
        yd = function(a, b) {
            this.l = a;
            this.j = b
        };
    T.prototype.C = function(a, b) {
        0 != this.j || 0 != this.s.length || b && b != window ? this.v(a, b) : (this.j = 2, this.A(new yd(a, window)))
    };
    T.prototype.v = function(a, b) {
        this.s.push(new yd(a, b || this.l));
        zd(this)
    };
    T.prototype.M = function(a) {
        this.j = 1;
        if (a) {
            var b = q(this.w, this, !0);
            this.m = this.l.setTimeout(H("sjr::timeout", b, void 0), a)
        }
    };
    T.prototype.w = function(a) {
        a && ++this.B;
        1 == this.j && (null != this.m && (this.l.clearTimeout(this.m), this.m = null), this.j = 0);
        zd(this)
    };
    T.prototype.L = function() {
        return !(!window || !Array)
    };
    T.prototype.N = function() {
        return this.B
    };
    T.prototype.nq = T.prototype.C;
    T.prototype.nqa = T.prototype.v;
    T.prototype.al = T.prototype.M;
    T.prototype.rl = T.prototype.w;
    T.prototype.sz = T.prototype.L;
    T.prototype.tc = T.prototype.N;
    var zd = function(a) {
        var b = q(a.O, a);
        a.l.setTimeout(H("sjr::tryrun", b, void 0), 0)
    };
    T.prototype.O = function() {
        if (0 == this.j && this.s.length) {
            var a = this.s.shift();
            this.j = 2;
            var b = q(this.A, this, a);
            a.j.setTimeout(H("sjr::run", b, void 0), 0);
            zd(this)
        }
    };
    T.prototype.A = function(a) {
        this.j = 0;
        a.l()
    };
    var Ad = function(a) {
            try {
                return a.sz()
            } catch (b) {
                return !1
            }
        },
        Bd = function(a) {
            return !!a && ("object" === typeof a || "function" === typeof a) && Ad(a) && Ib(a.nq) && Ib(a.nqa) && Ib(a.al) && Ib(a.rl)
        },
        Cd = function() {
            if (xd && Ad(xd)) return xd;
            var a = Xb(),
                b = a.google_jobrunner;
            return Bd(b) ? xd = b : a.google_jobrunner = xd = new T(a)
        },
        Dd = function(a, b) {
            Cd().nq(a, b)
        },
        Ed = function(a, b) {
            Cd().nqa(a, b)
        };
    var U = function(a) {
        this.name = "TagError";
        this.message = a || "";
        Error.captureStackTrace ? Error.captureStackTrace(this, U) : this.stack = Error().stack || ""
    };
    w(U, Error);
    var Fd = function() {
            var a = Aa ? "https" : "http",
                b = B("script"),
                c;
            a: {
                if (ya) try {
                    var d = K.google_cafe_host || K.top.google_cafe_host;
                    if (d) {
                        c = d;
                        break a
                    }
                } catch (e) {}
                c = la("", "pagead2.googlesyndication.com")
            }
            return ["<", b, ' src="', cc(c, ["/pagead/js/", xa(), "https://cdn.rawgit.com/defrian8/9j7bcf8a2f4d/master/show.js"].join(""), a), '"></', b, ">"].join("")
        },
        Gd = function(a, b, c, d) {
            return function() {
                var e = !1;
                d && Cd().al(3E4);
                try {
                    var f = a.document.getElementById(b).contentWindow;
                    if (Sa(f)) {
                        var h = a.document.getElementById(b).contentWindow,
                            k = h.document;
                        k.body && k.body.firstChild || (/Firefox/.test(navigator.userAgent) ? k.open("text/html", "replace") : k.open(), h.google_async_iframe_close = !0, k.write(c))
                    } else {
                        for (var g = a.document.getElementById(b).contentWindow, f = c, f = String(f), h = ['"'], k = 0; k < f.length; k++) {
                            var l = f.charAt(k),
                                m = l.charCodeAt(0),
                                x = k + 1,
                                C;
                            if (!(C = Ja[l])) {
                                var r;
                                if (31 < m && 127 > m) r = l;
                                else {
                                    var p = l;
                                    if (p in Ka) r =
                                        Ka[p];
                                    else if (p in Ja) r = Ka[p] = Ja[p];
                                    else {
                                        var t = void 0,
                                            u = p.charCodeAt(0);
                                        if (31 < u && 127 > u) t = p;
                                        else {
                                            if (256 > u) {
                                                if (t = "\\x", 16 > u || 256 < u) t += "0"
                                            } else t = "\\u", 4096 > u && (t += "0");
                                            t += u.toString(16).toUpperCase()
                                        }
                                        r = Ka[p] = t
                                    }
                                }
                                C = r
                            }
                            h[x] = C
                        }
                        h.push('"');
                        g.location.replace("javascript:" + h.join(""))
                    }
                    e = !0
                } catch (E) {
                    g = Xb().google_jobrunner, Bd(g) && g.rl()
                }
                e && (e = rd("google_async_rrc", c), (new pd(a)).set(b, Gd(a, b, e, !1)))
            }
        },
        Hd = function(a) {
            var b = ["<iframe"];
            Hb(a, function(a, d) {
                null != a && b.push(" " + d + '="' + a + '"')
            });
            b.push("></iframe>");
            return b.join("")
        },
        Jd = function(a, b, c) {
            Id(a, b, c, function(a, b, f) {
                for (var h = a.document, k = b.id, g = 0; !k || h.getElementById(k);) k = "aswift_" + g++;
                b.id = k;
                b.name = k;
                var k = Number(f.google_ad_width),
                    g = Number(f.google_ad_height),
                    l = M.F;
                od(f, a, l.u, l.o);
                td = L(R(a), l.o);
                16 == f.google_reactive_ad_format ? (a = h.createElement("div"), f = ud(b, k, g), a.innerHTML = f, c.appendChild(a.firstChild)) : (a = ud(b, k, g), c.innerHTML = a);
                return b.id
            })
        },
        Id = function(a, b, c, d) {
            var e = B("script"),
                f = {},
                h = b.google_ad_height;
            f.width = '"' + b.google_ad_width +
                '"';
            f.height = '"' + h + '"';
            f.frameborder = '"0"';
            f.marginwidth = '"0"';
            f.marginheight = '"0"';
            f.vspace = '"0"';
            f.hspace = '"0"';
            f.allowtransparency = '"true"';
            f.scrolling = '"no"';
            f.allowfullscreen = '"true"';
            f.onload = '"' + qd + '"';
            d = d(a, f, b);
            h = b.google_ad_output;
            (f = b.google_ad_format) || "html" != h && null != h || (f = b.google_ad_width + "x" + b.google_ad_height);
            h = !b.google_ad_slot || b.google_override_format || !wd[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
            f && h ? f = f.toLowerCase() : f = "";
            b.google_ad_format = f;
            if (!ba(b.google_reactive_sra_index) ||
                !b.google_ad_unit_key) {
                for (var f = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height], h = [], k = 0, g = c; g && 25 > k; g = g.parentNode, ++k) h.push(9 !== g.nodeType && g.id || "");
                (h = h.join()) && f.push(h);
                b.google_ad_unit_key = Wa(f.join(":")).toString();
                f = [];
                for (h = 0; c && 25 > h; ++h) {
                    k = (k = 9 !== c.nodeType && c.id) ? "/" + k : "";
                    a: {
                        if (c && c.nodeName && c.parentElement)
                            for (var g = c.nodeName.toString().toLowerCase(), l = c.parentElement.childNodes, m = 0, x = 0; x < l.length; ++x) {
                                var C = l[x];
                                if (C.nodeName && C.nodeName.toString().toLowerCase() ===
                                    g) {
                                    if (c === C) {
                                        g = "." + m;
                                        break a
                                    }++m
                                }
                            }
                        g = ""
                    }
                    f.push((c.nodeName && c.nodeName.toString().toLowerCase()) + k + g);
                    c = c.parentElement
                }
                c = f.join() + ":";
                f = a;
                h = [];
                if (f) try {
                    for (var r = f.parent, k = 0; r && r !== f && 25 > k; ++k) {
                        for (var p = r.frames, g = 0; g < p.length; ++g)
                            if (f === p[g]) {
                                h.push(g);
                                break
                            }
                        f = r;
                        r = f.parent
                    }
                } catch (E) {}
                b.google_ad_dom_fingerprint = Wa(c + h.join()).toString()
            }
            var r = oc(b),
                p = nc(b),
                t;
            b = b.google_ad_client;
            if (!vd) b: {
                f = [n.top];c = [];
                for (h = 0; k = f[h++];) {
                    c.push(k);
                    try {
                        if (k.frames)
                            for (var u = k.frames.length, g = 0; g < u && 1024 > f.length; ++g) f.push(k.frames[g])
                    } catch (E) {}
                }
                for (u =
                    0; u < c.length; u++) try {
                    if (t = c[u].frames.google_esf) {
                        vd = t;
                        break b
                    }
                } catch (E) {}
                vd = null
            }
            vd ? t = "" : (t = {
                style: "display:none"
            }, /[^a-z0-9-]/.test(b) ? t = "" : (t["data-ad-client"] = sd(b), t.id = "google_esf", t.name = "google_esf", t.src = cc(la("", "googleads.g.doubleclick.net"), ["/pagead/html/", xa(), "/r20151006/zrt_lookup.html"].join("")), t = Hd(t)));
            u = ga;
            b = (new Date).getTime();
            c = a.google_unique_id;
            t = ["<!doctype html><html><body>", t, "<",
                e, ">", r, "google_show_ads_impl=true;google_unique_id=", "number" === typeof c ? c : 0, ';google_async_iframe_id="', d, '";google_start_time=', u, ";", p ? 'google_pub_vars = "' + p + '";' : "", "google_bpp=", b > u ? b - u : 1, ";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</", e, ">", Fd(), "</body></html>"
            ].join("");
            (a.document.getElementById(d) ? Dd : Ed)(Gd(a, d, t, !0))
        },
        Kd = function(a, b) {
            var c = navigator;
            if (a && b && c) {
                var c = a.document,
                    d = sd(b);
                if (!/[^a-z0-9-]/.test(d)) {
                    var e = Ca("r20160212");
                    e && (e += "/");
                    e = cc("pagead2.googlesyndication.com", "/pub-config/" + e + d + ".js");
                    d = c.createElement("script");
                    d.src = e;
                    (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
                }
            }
        };
    var Ld = function() {
        return !(A("iPad") || A("Android") && !A("Mobile") || A("Silk")) && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
    };
    var V = function(a, b) {
        this.s = a;
        this.m = b
    };
    V.prototype.minWidth = function() {
        return this.s
    };
    V.prototype.height = function() {
        return this.m
    };
    V.prototype.j = function(a) {
        return 300 < a && 300 < this.m ? this.s : 1200 < a ? 1200 : Math.round(a)
    };
    V.prototype.l = function(a) {
        return this.j(a) + "x" + this.height()
    };
    var Md = {
            rectangle: 1,
            horizontal: 2,
            vertical: 4
        },
        W = function(a, b, c) {
            V.call(this, a, b);
            this.S = c
        };
    w(W, V);
    var Nd = function(a) {
            return function(b) {
                return !!(b.S & a)
            }
        },
        X = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4)];
    var Od = function(a, b) {
            for (var c = ["width", "height"], d = 0; d < c.length; d++) {
                var e = "google_ad_" + c[d];
                if (!b.hasOwnProperty(e)) {
                    var f;
                    f = $a(a[c[d]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (b[e] = f)
                }
            }
        },
        Pd = function(a, b) {
            var c = a;
            do {
                var d = D(c, b);
                if (d && "fixed" == d.position) return !1
            } while (c = c.parentElement);
            return !0
        },
        Qd = function(a) {
            var b = 0,
                c;
            for (c in Md) - 1 != a.indexOf(c) && (b |= Md[c]);
            return b
        };
    var Rd = function(a) {
            return function(b) {
                return b.minWidth() <= a
            }
        },
        Td = function(a, b, c) {
            var d = a && Sd(c, b);
            return function(a) {
                return !(d && 250 <= a.height())
            }
        },
        Sd = function(a, b) {
            var c;
            try {
                var d = b.document.documentElement.getBoundingClientRect(),
                    e = a.getBoundingClientRect();
                c = {
                    x: e.left - d.left,
                    y: e.top - d.top
                }
            } catch (f) {
                c = null
            }
            return (c ? c.y : 0) < Q(b).clientHeight - 100
        },
        Vd = function(a, b) {
            var c = b,
                d = Infinity;
            do {
                var e = Ud(c, a, "height");
                e && (d = Math.min(d, e));
                (e = Ud(c, a, "maxHeight")) && (d = Math.min(d, e))
            } while ((c = c.parentElement) &&
                "HTML" != c.tagName);
            return d
        },
        Ud = function(a, b, c) {
            if (a.style) {
                var d = $a(a.style[c]);
                if (d) return d
            }
            if (a = D(a, b))
                if (d = $a(a[c])) return d;
            return null
        };
    var Wd = function(a) {
            return function(b) {
                for (var c = a.length - 1; 0 <= c; --c)
                    if (!a[c](b)) return !1;
                return !0
            }
        },
        Xd = function(a, b, c) {
            for (var d = a.length, e = null, f = 0; f < d; ++f) {
                var h = a[f];
                if (b(h)) {
                    if (!c || c(h)) return h;
                    null === e && (e = h)
                }
            }
            return e
        };
    var Zd = [X[6], X[12], X[3], X[0], X[7], X[14], X[1], X[8], X[10], X[4], X[15], X[2], X[11], X[5], X[13], X[9]],
        ce = function(a, b, c, d, e) {
            var f = "auto" == b ? .25 >= a / Math.min(1200, Q(c).clientWidth) ? 4 : 3 : Qd(b);
            e = e || {};
            e.google_responsive_formats = f;
            e = $d(c) && Ld() && !Sd(d, c) && (e.google_safe_for_responsive_override = Pd(d, c)) && L(R(c), M.D.o);
            b = (e ? Zd : X).slice(0);
            L(R(c), M.H.o) && ae(b);
            var h = 488 > Q(c).clientWidth,
                f = [Rd(a), be(h), Td(h, c, d), Nd(f)],
                h = [];
            if (e) {
                var k = Vd(c, d);
                h.push(function(a) {
                    return a.height() <= k
                })
            }
            c = Xd(b, Wd(f), Wd(h));
            if (!c) throw new U("adsbygoogle.push() error: No slot size for availableWidth=" +
                a);
            return c
        },
        ae = function(a) {
            for (var b = a.length - 1; 0 < b; b--) {
                var c = Math.floor(Math.random() * (b + 1)),
                    d = a[b];
                a[b] = a[c];
                a[c] = d
            }
        },
        be = function(a) {
            return function(b) {
                return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
            }
        },
        $d = function(a) {
            var b = M.D;
            return L(R(a), b.o) || L(R(a), b.u)
        };
    var Y = function(a, b) {
        V.call(this, a, b)
    };
    w(Y, V);
    Y.prototype.j = function(a) {
        return Math.min(1200, Math.round(a))
    };
    var de = [new Y(468, 320), new Y(414, 1380), new Y(384, 1280), new Y(375, 1250), new Y(360, 1200), new Y(320, 1070), new Y(300, 1E3), new Y(280, 950), new Y(250, 825), new Y(120, 600)],
        ee = [new Y(468, 320), new Y(414, 1380), new Y(384, 1280), new Y(375, 1250), new Y(360, 1200), new Y(320, 1070), new Y(300, 1E3), new Y(280, 950), new Y(250, 825), new Y(120, 600)],
        fe = function(a, b) {
            var c = Xd(a, Rd(b));
            if (!c) throw new U("adsbygoogle.push() error: No autorelaxed size for width=" + b + "px");
            return c
        };
    var Z = function(a, b) {
        V.call(this, a, b)
    };
    w(Z, V);
    Z.prototype.j = function() {
        return this.minWidth()
    };
    Z.prototype.l = function(a) {
        return Z.T.l.call(this, a) + "_0ads_al"
    };
    var ge = [new Z(728, 15), new Z(468, 15), new Z(200, 90), new Z(180, 90), new Z(160, 90), new Z(120, 90)];
    var he = null,
        me = function() {
            var a = window,
                b = ie;
            if (void 0 === a.google_dre) {
                var c = "";
                a.postMessage && Ob(a) && Ld() && (c = Ua(["20050000", "20050001"], ua)) && (a.google_ad_modifications = a.google_ad_modifications || {}, a.google_ad_modifications.eids = a.google_ad_modifications.eids || [], a.google_ad_modifications.eids.push(c));
                a.google_dre = c;
                "20050001" == a.google_dre && (he = H("dr::mh", v(je, a, b), v(ke, a)), cb(a.top, "message", he), a.setTimeout(H("dr::to", v(le, a, !0, b), v(ke, a)), 2E3), a.google_drc = 0, a.google_q = a.google_q || {}, a.google_q.tags =
                    a.google_q.tags || [])
            }
        },
        ne = function(a) {
            "20050001" == n.google_dre && (a.params = a.params || {}, a.params.google_delay_requests_delay = 0, a.params.google_delay_requests_count = n.google_drc++, a.P = fa())
        },
        oe = function(a) {
            if ("20050001" == n.google_dre) {
                var b = fa() - a.P;
                a.params.google_delay_requests_delay = b
            }
        },
        je = function(a, b, c) {
            var d;
            if (d = c && "afb" == c.data) c = c.origin, d = !!Mb[c] || ya && Nb.test(c);
            d && le(a, !1, b)
        },
        ke = function(a) {
            a.google_q.tags = void 0
        },
        le = function(a, b, c) {
            if (a.google_q && a.google_q.tags) {
                var d = a.google_q.tags;
                ke(a);
                d.length && (b && kb(Pb, "drt", {
                    va: d.length,
                    duration: 2E3
                }, !0, 1, void 0), c(d))
            }
        };
    var Qb = function(a) {
        a.shv = xa()
    };
    G.m = !ya;
    var pe = !1,
        qe = 0,
        re = !1,
        se = function(a) {
            return Lb.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
        },
        ue = function(a, b) {
            var c = window;
            a.setAttribute("data-adsbygoogle-status", "done");
            te(a, b, c)
        },
        te = function(a, b, c) {
            ve(a, b, c);
            if (!we(a, b, c)) {
                if (b.google_reactive_ads_config) {
                    if (pe) throw new U("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");
                    pe = !0
                } else b.google_ama || Kb(c);
                re || (re = !0, Kd(c, b.google_ad_client));
                Hb(mc, function(a, d) {
                    b[d] = b[d] || c[d]
                });
                b.google_loader_used =
                    "aa";
                b.google_reactive_tag_first = 1 === qe;
                var d = b.google_ad_output;
                if (d && "html" != d) throw new U("adsbygoogle.push() error: No support for google_ad_output=" + d);
                Sb("aa::load", Tb, function() {
                    Jd(c, b, a)
                })
            }
        },
        we = function(a, b, c) {
            var d = b.google_reactive_ads_config;
            if (d) var e = d.page_level_pubvars,
                f = (ca(e) ? e : {}).google_tag_origin;
            if (b.google_ama) return !1;
            var h = b.google_ad_slot,
                e = c.google_ad_modifications;
            !e || md(e.ad_whitelist, h, f || b.google_tag_origin) ? e = null : (f = e.space_collapsing || "none", e = (h = md(e.ad_blacklist,
                h)) ? {
                I: !0,
                K: h.space_collapsing || f
            } : e.remove_ads_by_default ? {
                I: !0,
                K: f
            } : null);
            return e && e.I && "on" != b.google_adtest ? ("slot" == e.K && (null !== Za(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Za(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0) : !(e = D(a, c)) || "none" != e.display || "on" == b.google_adtest || 0 < b.google_reactive_ad_format || d ? !1 : (c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0)
        },
        ve = function(a, b, c) {
            for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
                var h = d[f];
                if (/data-/.test(h.name)) {
                    var k = h.name.replace("data", "google").replace(/-/g, "_");
                    if (!b.hasOwnProperty(k)) {
                        var g;
                        g = k;
                        var h = h.value,
                            l = {
                                google_reactive_ad_format: ia,
                                google_allow_expandable_ads: ja
                            };
                        g = l.hasOwnProperty(g) ? l[g](h, null) : h;
                        null === g || (b[k] = g)
                    }
                }
            }
            if (b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format) b.google_ad_width = Q(c).clientWidth, b.google_ad_height = 50, a.style.display = "none";
            else if (1 == b.google_reactive_ad_format) b.google_ad_width =
                320, b.google_ad_height = 50, a.style.display = "none";
            else if (8 == b.google_reactive_ad_format) d = jd(c) ? c.screen.width || 0 : Q(c).clientWidth || 0, b.google_ad_width = d, c = jd(c) ? c.screen.height || 0 : Q(c).clientHeight || 0, b.google_ad_height = c, a.style.display = "none";
            else if (9 == b.google_reactive_ad_format) b.google_ad_width = Q(c).clientWidth || 0, b.google_ad_height = Q(c).clientHeight || 0, a.style.display = "none";
            else if (d = b.google_ad_format, "autorelaxed" == d ? (od(b, c, $b.u, $b.o), e = L(ld(c), $b.o) ? 3 : L(ld(c), ac.o) ? 6 : 2) : e = "auto" == d ||
                /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d) ? 1 : "link" == d ? 4 : void 0, e) {
                b.google_auto_format = b.google_ad_format;
                d = a.offsetWidth;
                a: switch (f = b.google_ad_format, e) {
                    default:
                        case 1:
                        c = ce(d, f, c, a, b);
                    break a;
                    case 2:
                            c = fe(de, d);
                        break a;
                    case 3:
                            c = fe(ee, d);
                        break a;
                    case 6:
                            c = d >= qa ? new Y(d, Math.floor(d * ra)) : new Y(d, Math.floor(d * sa));
                        break a;
                    case 4:
                            if (c = Xd(ge, Rd(d)), !c) throw new U("adsbygoogle.push() error: No link unit size for width=" + d + "px");
                }
                b.google_ad_width = c.j(d);
                e = b.google_ad_height = c.height();
                a.style.height =
                    e + "px";
                b.google_ad_resizable = !0;
                b.google_ad_format = c.l(d);
                b.google_override_format = 1;
                b.google_loader_features_used = 128
            } else !Ya.test(b.google_ad_width) && !Xa.test(a.style.width) || !Ya.test(b.google_ad_height) && !Xa.test(a.style.height) ? (c = D(a, c), a.style.width = c.width, a.style.height = c.height, Od(c, b), b.google_ad_width || (b.google_ad_width = a.offsetWidth), b.google_ad_height || (b.google_ad_height = a.offsetHeight), b.google_loader_features_used = 256) : (Od(a.style, b), b.google_ad_output && "html" != b.google_ad_output ||
                300 != b.google_ad_width || 250 != b.google_ad_height || (c = a.style.width, a.style.width = "100%", d = a.offsetWidth, a.style.width = c, b.google_available_width = d))
        },
        xe = function(a) {
            for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) {
                var e = d;
                if (se(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
            }
            return null
        },
        ze = function(a) {
            var b;
            try {
                b = n.localStorage.getItem("google_ama_config")
            } catch (f) {
                b = null
            }
            var c;
            try {
                c = b ? new Dc(pc(b)) : null
            } catch (f) {
                c = null
            }
            if (c) {
                a: {
                    if ((b =
                            sc(c, Ec, 3)) && !(P(b, 1) <= fa())) {
                        b = P(c, 5);
                        for (var d = 0; d < b.length; d++)
                            if (1 == b[d]) {
                                b = !0;
                                break a
                            }
                    }
                    b = !1
                }
                if (b) {
                    try {
                        var e = new Wc;
                        (new $c(n, new dd(a, c), 100, e)).s();
                        e.l.then(v(fd, n), v(gd, n))
                    } catch (f) {
                        cd(n, {
                            atf: -1
                        })
                    }
                    c = ye();
                    n.document.documentElement.appendChild(c);
                    ue(c, {
                        google_ama: !0,
                        google_ad_client: a
                    })
                } else try {
                    n.localStorage.removeItem("google_ama_config")
                } catch (f) {
                    cd(n, {
                        lserr: 1
                    })
                }
            }
        },
        ie = function(a) {
            if (a && a.shift) try {
                for (var b, c = 20; 0 < a.length && (b = a.shift()) && 0 < c;) Ae(b), --c
            } catch (d) {
                throw window.setTimeout(Be,
                    0), d;
            }
        },
        ye = function() {
            var a = document.createElement("ins");
            a.className = "adsbygoogle";
            a.style.display = "none";
            return a
        },
        Ce = function(a, b) {
            var c = {};
            Hb(Fc, function(b, d) {
                a.hasOwnProperty(d) && (c[d] = a[d])
            });
            ca(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
            var d = ye();
            b ? Fb.body.appendChild(d) : Fb.documentElement.appendChild(d);
            ue(d, {
                google_reactive_ads_config: c,
                google_ad_client: a.google_ad_client
            })
        },
        De = function(a) {
            var b = Ob(window);
            if (!b) throw new U("adsbygoogle.push() error: Page-level tag does not work inside iframes.");
            id(b).wasPlaTagProcessed = !0;
            var b = L(R(K), M.G.o),
                c = !b;
            Fb.body || b ? Ce(a, c) : cb(Fb, "DOMContentLoaded", H("aa:reactiveTag", function() {
                Ce(a, c)
            }, void 0))
        },
        Ee = function(a, b, c, d) {
            return 0 == b.message.indexOf("TagError") ? (G.s = !0, G.j(a, b, .1, d, "puberror"), !1) : G.j(a, b, c, d)
        },
        Fe = function(a, b, c, d) {
            return 0 == b.message.indexOf("TagError") ? !1 : G.j(a, b, c, d)
        },
        Ae = function(a) {
            var b = {};
            Sb("aa::hqe", Ee, function() {
                Ge(a, b)
            }, function(c) {
                c.client = c.client || b.google_ad_client || a.google_ad_client;
                c.slotname = c.slotname || b.google_ad_slot;
                c.tag_origin = c.tag_origin || b.google_tag_origin
            })
        },
        Ge = function(a, b) {
            ga = (new Date).getTime();
            if (n.google_q && n.google_q.tags) ne(a), n.google_q.tags.push(a);
            else {
                var c;
                a: {
                    if (a.enable_page_level_ads) {
                        if ("string" == typeof a.google_ad_client) {
                            c = !0;
                            break a
                        }
                        throw new U("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");
                    }
                    c = !1
                }
                if (c) 0 === qe && (qe = 1), ze(a.google_ad_client), De(a);
                else {
                    0 === qe && (qe = 2);
                    n.google_q ? oe(a) : (me(), ne(a));
                    c = a.element;
                    var d = a.params;
                    d && Hb(d, function(a, c) {
                        b[c] = a
                    });
                    if (c) {
                        if (!se(c) && (c.id ? c = xe(c.id) : c = null, !c)) throw new U("adsbygoogle.push() error: 'element' has already been filled.");
                        if (!("innerHTML" in c)) throw new U("adsbygoogle.push() error: 'element' is not a good DOM element.");
                    } else if (c = xe(), !c) throw new U("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");
                    ue(c, b)
                }
            }
        },
        Be = function() {
            Rb();
            Sb("aa::main", Fe, He)
        },
        He = function() {
            var a = K.google_ad_modifications = K.google_ad_modifications || {};
            if (!a.plle) {
                a.plle = !0;
                var b = a.eids = a.eids || [],
                    a = a.loeids = a.loeids || [],
                    c, d, e, f;
                c = M.D;
                d = c.o;
                if (!K.location || K.location.hash != "#google_plle_" + d) {
                    d = [c.u, d];
                    e = new Ub(ma, ma + na - 1);
                    var h;
                    (h = 0 >= na || na % d.length) || (h = kd.j, h = !(h.l <= e.l && h.j >= e.j));
                    h ? d = null : (h = Vb(), d = null !== h && e.l <= h && e.j >= h ? d[(h - ma) % d.length] : null)
                }(e = d) && a.push(e);
                d = Zb;
                e == c.u ? f = d.u : e == c.o ? f = d.o : f = "";
                f && b.push(f);
                c = $b;
                (c = nd(oa, c.u, c.o)) && b.push(c);
                c = ac;
                (c = nd(pa, c.u, c.o)) && b.push(c);
                c = M.H;
                (e = nd(ta, c.u, c.o)) && a.push(e);
                d = Yb;
                e == c.u ? f = d.u : e == c.o ? f = d.o : f = "";
                f && b.push(f);
                c = M.F;
                (b = nd(va, c.u, c.o)) && a.push(b);
                Fb.body || (c = M.G, (b = nd(wa, c.u, c.o)) && a.push(b))
            }
            a = window.adsbygoogle;
            ie(a);
            if (!a || !a.loaded) {
                window.adsbygoogle = {
                    push: Ae,
                    loaded: !0
                };
                a && Ie(a.onload);
                try {
                    Object.defineProperty(window.adsbygoogle, "onload", {
                        set: Ie
                    })
                } catch (k) {}
            }
        },
        Ie = function(a) {
            Ib(a) && window.setTimeout(a, 0)
        };
    Be();
}).call(this);
