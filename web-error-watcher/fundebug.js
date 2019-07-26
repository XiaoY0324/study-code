module.exports = function(a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return a[d].call(e.exports, e, e.exports, b),
        e.l = !0,
        e.exports
    }
    var c = {};
    return b.m = a,
    b.c = c,
    b.i = function(a) {
        return a
    },
    b.d = function(a, c, d) {
        b.o(a, c) || Object.defineProperty(a, c, {
            configurable: !1,
            enumerable: !0,
            get: d
        })
    },
    b.n = function(a) {
        var c = a && a.__esModule ?
        function() {
            return a.
        default
        }:
        function() {
            return a
        };
        return b.d(c, "a", c),
        c
    },
    b.o = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    },
    b.p = "",
    b(b.s = 18)
} ([function(a, b, c) {
    "use strict";
    function d(a, b, c) {
        function d() {
            var d = c();
            return Object.defineProperty(a, b, {
                configurable: !0,
                enumerable: !0,
                value: d
            }),
            d
        }
        Object.defineProperty(a, b, {
            configurable: !0,
            enumerable: !0,
            get: d
        })
    }
    function e(a) {
        return a.toString()
    }
    var f = c(13),
    g = c(14).EventEmitter;
    d(a.exports, "bufferConcat",
    function() {
        return f.concat || c(8)
    }),
    d(a.exports, "callSiteToString",
    function() {
        function a(a, b) {
            return b
        }
        var b = Error.stackTraceLimit,
        d = {},
        f = Error.prepareStackTrace;
        Error.prepareStackTrace = a,
        Error.stackTraceLimit = 2,
        Error.captureStackTrace(d);
        var g = d.stack.slice();
        return Error.prepareStackTrace = f,
        Error.stackTraceLimit = b,
        g[0].toString ? e: c(9)
    }),
    d(a.exports, "eventListenerCount",
    function() {
        return g.listenerCount || c(10)
    })
},
function(a, b, c) {
    var d = c(16),
    e = {
        releaseStage: process.env.NODE_ENV || "production",
        notifierVersion: "0.2.0",
        server: {
            hostname: d.hostname(),
            platform: d.platform(),
            release: d.release(),
            nodeVersion: process.version
        }
    };
    e.configure = function(a) {
        a && a && (a.apikey && (e.apikey = a.apikey), a.hasOwnProperty("silent") && (e.silent = a.silent), a.appVersion && (e.appVersion = a.appVersion), a.releaseStage && (e.releaseStage = a.releaseStage), a.user && (e.user = a.user), a.metaData && (e.metaData = a.metaData), "number" == typeof a.httpTimeout && (e.httpTimeout = a.httpTimeout))
    },
    a.exports = e
},
function(a, b) {
    a.exports = function(a) {
        return function(b, c, d, e) {
            d._fundebug_reported = !0,
            a.notifyError(b, {
                req: {
                    method: c.method,
                    ip: c.ip,
                    protocol: c.protocol,
                    hostname: c.hostname,
                    path: c.path,
                    port: c.socket.localPort
                },
                res: {
                    statusCode: d.statusCode,
                    statusMessage: d.statusMessage
                },
                type: "expressError"
            }),
            e(b)
        }
    }
},
function(a, b, c) {
    var d = c(12);
    a.exports = function(a, b) {
        function c(c) {
            return "number" == typeof a.httpTimeout && c > a.httpTimeout || "number" == typeof b.httpTimeout && c > b.httpTimeout
        }
        return function() {
            return d(function(b, d, e) {
                d._fundebug_reported || c(e) && a.notifyError(new Error("http timeout"), {
                    req: {
                        method: b.method,
                        ip: b.ip,
                        protocol: b.protocol,
                        hostname: b.hostname,
                        path: b.path,
                        port: b.socket.localPort
                    },
                    res: {
                        statusCode: d.statusCode,
                        statusMessage: d.statusMessage,
                        elapsedTime: e
                    },
                    type: "expressError"
                })
            })
        }
    }
},
function(a, b) {
    a.exports = function(a) {
        return function(b, c) { (c || 200 !== b.raw.res.statusCode) && (c || (c = {
                name: b.raw.res.statusCode,
                message: b.raw.res.statusMessage
            }), a.notifyError(c, {
                req: {
                    method: b.method,
                    ip: b.info.remoteAddress,
                    protocol: b.connection.info.protocol,
                    hostname: b.info.hostname,
                    path: b.path,
                    port: b.connection.info.port
                },
                res: {
                    statusCode: b.raw.res.statusCode,
                    statusMessage: b.raw.res.statusMessage
                },
                type: "hapiError"
            }))
        }
    }
},
function(a, b) {
    a.exports = function(a) {
        return function(b, c) {
            a.notifyError(b, {
                req: {
                    method: c.request.method,
                    ip: c.request.ip,
                    protocol: c.request.protocol,
                    hostname: c.request.hostname,
                    path: c.request.path,
                    port: c.request.socket.localPort
                },
                res: {
                    statusCode: c.response.status,
                    statusMessage: c.response.message
                },
                type: "koaError"
            })
        }
    }
},
function(a, b, c) {
    function d(a, b) {
        delete a.silent;
        var c = JSON.stringify(a),
        d = {
            hostname: "fundebug.com",
            port: 443,
            path: "/nodejs/",
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "Content-Length": Buffer.byteLength(c, "utf8")
            }
        },
        f = e.request(d,
        function(a) {
            if (b) return 200 === a.statusCode ? b(null, a.body) : b(new Error(a.body))
        });
        f.on("error",
        function(a) {
            if (b) return b(a)
        }),
        f.write(c),
        f.end()
    }
    var e = c(15);
    a.exports = d
},
function(module, exports, __webpack_require__) {
    function containsNamespace(a, b) {
        var c = a.split(/[ ,]+/);
        b = String(b).toLowerCase();
        for (var d = 0; d < c.length; d++) if ((a = c[d]) && ("*" === a || a.toLowerCase() === b)) return ! 0;
        return ! 1
    }
    function convertDataDescriptorToAccessor(a, b, c) {
        var d = Object.getOwnPropertyDescriptor(a, b),
        e = d.value;
        return d.get = function() {
            return e
        },
        d.writable && (d.set = function(a) {
            return e = a
        }),
        delete d.value,
        delete d.writable,
        Object.defineProperty(a, b, d),
        d
    }
    function createArgumentsString(a) {
        for (var b = "",
        c = 0; c < a; c++) b += ", arg" + c;
        return b.substr(2)
    }
    function createStackString(a) {
        var b = this.name + ": " + this.namespace;
        this.message && (b += " deprecated " + this.message);
        for (var c = 0; c < a.length; c++) b += "\n    at " + callSiteToString(a[c]);
        return b
    }
    function depd(a) {
        function b(a) {
            log.call(b, a)
        }
        if (!a) throw new TypeError("argument namespace is required");
        var c = getStack(),
        d = callSiteLocation(c[1]),
        e = d[0];
        return b._file = e,
        b._ignored = isignored(a),
        b._namespace = a,
        b._traced = istraced(a),
        b._warned = Object.create(null),
        b.
        function = wrapfunction,
        b.property = wrapproperty,
        b
    }
    function isignored(a) {
        return !! process.noDeprecation || containsNamespace(process.env.NO_DEPRECATION || "", a)
    }
    function istraced(a) {
        return !! process.traceDeprecation || containsNamespace(process.env.TRACE_DEPRECATION || "", a)
    }
    function log(a, b) {
        var c = 0 !== eventListenerCount(process, "deprecation");
        if (c || !this._ignored) {
            var d, e, f, g = 0,
            h = !1,
            i = getStack(),
            j = this._file;
            for (b ? (f = callSiteLocation(i[1]), f.name = b.name, j = f[0]) : (g = 2, b = callSiteLocation(i[g]), f = b); g < i.length; g++) if (d = callSiteLocation(i[g]), (e = d[0]) === j) h = !0;
            else if (e === this._file) j = this._file;
            else if (h) break;
            var k = d ? b.join(":") + "__" + d.join(":") : void 0;
            if (! (void 0 !== k && k in this._warned)) {
                if (this._warned[k] = !0, a || (a = defaultMessage(f !== b && f.name ? f: b)), c) {
                    var l = DeprecationError(this._namespace, a, i.slice(g));
                    return void process.emit("deprecation", l)
                }
                var m = process.stderr.isTTY ? formatColor: formatPlain,
                n = m.call(this, a, d, i.slice(g));
                process.stderr.write(n + "\n", "utf8")
            }
        }
    }
    function callSiteLocation(a) {
        var b = a.getFileName() || "<anonymous>",
        c = a.getLineNumber(),
        d = a.getColumnNumber();
        a.isEval() && (b = a.getEvalOrigin() + ", " + b);
        var e = [b, c, d];
        return e.callSite = a,
        e.name = a.getFunctionName(),
        e
    }
    function defaultMessage(a) {
        var b = a.callSite,
        c = a.name;
        c || (c = "<anonymous@" + formatLocation(a) + ">");
        var d = b.getThis(),
        e = d && b.getTypeName();
        return "Object" === e && (e = void 0),
        "Function" === e && (e = d.name || e),
        e && b.getMethodName() ? e + "." + c: c
    }
    function formatPlain(a, b, c) {
        var d = (new Date).toUTCString(),
        e = d + " " + this._namespace + " deprecated " + a;
        if (this._traced) {
            for (var f = 0; f < c.length; f++) e += "\n    at " + callSiteToString(c[f]);
            return e
        }
        return b && (e += " at " + formatLocation(b)),
        e
    }
    function formatColor(a, b, c) {
        var d = "[36;1m" + this._namespace + "[22;39m [33;1mdeprecated[22;39m [0m" + a + "[39m";
        if (this._traced) {
            for (var e = 0; e < c.length; e++) d += "\n    [36mat " + callSiteToString(c[e]) + "[39m";
            return d
        }
        return b && (d += " [36m" + formatLocation(b) + "[39m"),
        d
    }
    function formatLocation(a) {
        return relative(basePath, a[0]) + ":" + a[1] + ":" + a[2]
    }
    function getStack() {
        var a = Error.stackTraceLimit,
        b = {},
        c = Error.prepareStackTrace;
        Error.prepareStackTrace = prepareObjectStackTrace,
        Error.stackTraceLimit = Math.max(10, a),
        Error.captureStackTrace(b);
        var d = b.stack.slice(1);
        return Error.prepareStackTrace = c,
        Error.stackTraceLimit = a,
        d
    }
    function prepareObjectStackTrace(a, b) {
        return b
    }
    function wrapfunction(fn, message) {
        if ("function" != typeof fn) throw new TypeError("argument fn must be a function");
        var args = createArgumentsString(fn.length),
        deprecate = this,
        stack = getStack(),
        site = callSiteLocation(stack[1]);
        site.name = fn.name;
        var deprecatedfn = eval("(function (" + args + ') {\n"use strict"\nlog.call(deprecate, message, site)\nreturn fn.apply(this, arguments)\n})');
        return deprecatedfn
    }
    function wrapproperty(a, b, c) {
        if (!a || "object" != typeof a && "function" != typeof a) throw new TypeError("argument obj must be object");
        var d = Object.getOwnPropertyDescriptor(a, b);
        if (!d) throw new TypeError("must call property on owner object");
        if (!d.configurable) throw new TypeError("property must be configurable");
        var e = this,
        f = getStack(),
        g = callSiteLocation(f[1]);
        g.name = b,
        "value" in d && (d = convertDataDescriptorToAccessor(a, b, c));
        var h = d.get,
        i = d.set;
        "function" == typeof h && (d.get = function() {
            return log.call(e, c, g),
            h.apply(this, arguments)
        }),
        "function" == typeof i && (d.set = function() {
            return log.call(e, c, g),
            i.apply(this, arguments)
        }),
        Object.defineProperty(a, b, d)
    }
    function DeprecationError(a, b, c) {
        var d, e = new Error;
        return Object.defineProperty(e, "constructor", {
            value: DeprecationError
        }),
        Object.defineProperty(e, "message", {
            configurable: !0,
            enumerable: !1,
            value: b,
            writable: !0
        }),
        Object.defineProperty(e, "name", {
            enumerable: !1,
            configurable: !0,
            value: "DeprecationError",
            writable: !0
        }),
        Object.defineProperty(e, "namespace", {
            configurable: !0,
            enumerable: !1,
            value: a,
            writable: !0
        }),
        Object.defineProperty(e, "stack", {
            configurable: !0,
            enumerable: !1,
            get: function() {
                return void 0 !== d ? d: d = createStackString.call(this, c)
            },
            set: function(a) {
                d = a
            }
        }),
        e
    }
    var callSiteToString = __webpack_require__(0).callSiteToString,
    eventListenerCount = __webpack_require__(0).eventListenerCount,
    relative = __webpack_require__(17).relative;
    module.exports = depd;
    var basePath = process.cwd()
},
function(a, b, c) {
    "use strict";
    function d(a) {
        for (var b = 0,
        c = 0,
        d = a.length; c < d; c++) b += a[c].length;
        for (var e = new Buffer(b), f = 0, c = 0, d = a.length; c < d; c++) a[c].copy(e, f),
        f += a[c].length;
        return e
    }
    a.exports = d
},
function(a, b, c) {
    "use strict";
    function d(a) {
        var b, c = "";
        if (a.isNative() ? c = "native": a.isEval() ? (b = a.getScriptNameOrSourceURL()) || (c = a.getEvalOrigin()) : b = a.getFileName(), b) {
            c += b;
            var d = a.getLineNumber();
            if (null != d) {
                c += ":" + d;
                var e = a.getColumnNumber();
                e && (c += ":" + e)
            }
        }
        return c || "unknown source"
    }
    function e(a) {
        var b = !0,
        c = d(a),
        e = a.getFunctionName(),
        g = a.isConstructor(),
        h = !(a.isToplevel() || g),
        i = "";
        if (h) {
            var j = a.getMethodName(),
            k = f(a);
            e ? (k && 0 !== e.indexOf(k) && (i += k + "."), i += e, j && e.lastIndexOf("." + j) !== e.length - j.length - 1 && (i += " [as " + j + "]")) : i += k + "." + (j || "<anonymous>")
        } else g ? i += "new " + (e || "<anonymous>") : e ? i += e: (b = !1, i += c);
        return b && (i += " (" + c + ")"),
        i
    }
    function f(a) {
        var b = a.receiver;
        return b.constructor && b.constructor.name || null
    }
    a.exports = e
},
function(a, b, c) {
    "use strict";
    function d(a, b) {
        return a.listeners(b).length
    }
    a.exports = d
},
function(a, b, c) {
    "use strict";
    function d(a, b) {
        var c = !1;
        return function(d) {
            var e = h.apply(this, arguments);
            return c || (c = !0, b.call(this), "number" == typeof e[0] && this.statusCode !== e[0] && (e[0] = this.statusCode, e.length = 1)),
            a.apply(this, e)
        }
    }
    function e(a, b) {
        if (!a) throw new TypeError("argument res is required");
        if ("function" != typeof b) throw new TypeError("argument listener must be a function");
        a.writeHead = d(a.writeHead, b)
    }
    function f(a, b) {
        for (var c = 0; c < b.length; c++) a.setHeader(b[c][0], b[c][1])
    }
    function g(a, b) {
        for (var c = Object.keys(b), d = 0; d < c.length; d++) {
            var e = c[d];
            e && a.setHeader(e, b[e])
        }
    }
    function h(a) {
        var b = arguments.length,
        c = b > 1 && "string" == typeof arguments[1] ? 2 : 1,
        d = b >= c + 1 ? arguments[c] : void 0;
        this.statusCode = a,
        Array.isArray(d) ? f(this, d) : d && g(this, d);
        for (var e = new Array(Math.min(b, c)), h = 0; h < e.length; h++) e[h] = arguments[h];
        return e
    }
    a.exports = e
},
function(a, b, c) {
    "use strict";
    function d(a) {
        var b = a || {};
        "number" == typeof a && (f("number argument: use {digits: " + JSON.stringify(a) + "} instead"), b = {
            digits: a
        });
        var c = "function" != typeof b ? e(b) : b;
        return function(a, b, d) {
            var e = process.hrtime();
            g(b,
            function() {
                var d = process.hrtime(e);
                c(a, b, 1e3 * d[0] + 1e-6 * d[1])
            }),
            d()
        }
    }
    function e(a) {
        var b = void 0 !== a.digits ? a.digits: 3,
        c = a.header || "X-Response-Time",
        d = void 0 === a.suffix || Boolean(a.suffix);
        return function(a, e, f) {
            if (!e.getHeader(c)) {
                var g = f.toFixed(b);
                d && (g += "ms"),
                e.setHeader(c, g)
            }
        }
    }
    var f = c(7)("response-time"),
    g = c(11);
    a.exports = d
},
function(a, b) {
    a.exports = require("buffer")
},
function(a, b) {
    a.exports = require("events")
},
function(a, b) {
    a.exports = require("https")
},
function(a, b) {
    a.exports = require("os")
},
function(a, b) {
    a.exports = require("path")
},
function(a, b, c) {
    function d(a, b, c) {
        var d = {};
        return d.name = a.name,
        d.message = a.message,
        d.stacktrace = a.stack,
        d.notifierVersion = b.notifierVersion,
        d.server = b.server,
        d.apikey = g.apikey || b.apikey,
        d.silent = g.silent || b.silent || !1,
        d.appVersion = g.appVersion || b.appVersion,
        d.releaseStage = g.releaseStage || b.releaseStage,
        d.user = g.user || b.user,
        d.metaData = g.metaData || b.metaData,
        d.httpTimeout = g.httpTimeout || b.httpTimeout,
        d.severity = c.severity || "error",
        c && (c.req && (d.req = c.req), c.res && (d.res = c.res), c.type && (d.type = c.type), c.user && (d.user = c.user), c.metaData && (d.metaData = c.metaData)),
        d
    }
    var e = c(1),
    f = c(6),
    g = {},
    h = c(2),
    i = c(3),
    j = c(4),
    k = c(5);
    process.on("uncaughtException",
    function(a) {
        g.notifyError(a, {
            type: "uncaughtError"
        },
        function() {
            process.exit(1)
        })
    }),
    process.on("unhandledRejection",
    function(a) {
        g.notifyError(a, {
            type: "uncaughtError"
        })
    });
    var l = {
        logError: function(a) {}
    };
    g.config = e.configure,
    g.notifyError = function(a, b, c) {
        console.log(a),
        "function" == typeof b && (c = b, b = {}),
        b || (b = {}),
        b.type || (b.type = "caughtError");
        var g = d(a, e, b); ! g.silent && g.apikey && f(g, c)
    },
    g.notify = function(a, b, c, g) {
        if (a) {
            "object" == typeof b ? (g = c, c = b, b = null) : "function" == typeof b && (g = b, c = {},
            b = null),
            "function" == typeof c && (g = c, c = {}),
            c || (c = {}),
            c.type = "notification",
            c.severity = "info";
            var h = d({
                name: a,
                message: b
            },
            e, c); ! h.silent && h.apikey && f(h, g)
        }
    },
    g.ExpressErrorHandler = h(g),
    g.ExpressTimeoutHandler = i(g, e),
    g.HapiErrorHandler = j(g),
    g.KoaErrorHandler = k(g),
    a.exports = g
}]);