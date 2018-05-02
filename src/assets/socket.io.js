!(function(t, e) {
    'object' == typeof exports && 'object' == typeof module ?
        (module.exports = e()) :
        'function' == typeof define && define.amd ?
        define([], e) :
        'object' == typeof exports ? (exports.io = e()) : (t.io = e());
})(this, function() {
    return (function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var o = (r[n] = { exports: {}, id: n, loaded: !1 });
            return t[n].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports;
        }
        var r = {};
        return (e.m = t), (e.c = r), (e.p = ''), e(0);
    })([
        function(t, e, r) {
            'use strict';

            function n(t, e) {
                'object' === ('undefined' == typeof t ? 'undefined' : i(t)) && ((e = t), (t = void 0)), (e = e || {});
                var r,
                    n = s(t),
                    a = n.source,
                    p = n.id,
                    f = n.path,
                    l = h[p] && f in h[p].nsps,
                    d = e.forceNew || e['force new connection'] || !1 === e.multiplex || l;
                return (
                    d ?
                    (u('ignoring socket cache for %s', a), (r = c(a, e))) :
                    (h[p] || (u('new io instance for %s', a), (h[p] = c(a, e))), (r = h[p])),
                    n.query && !e.query ? (e.query = n.query) : e && 'object' === i(e.query) && (e.query = o(e.query)),
                    r.socket(n.path, e)
                );
            }

            function o(t) {
                var e = [];
                for (var r in t) t.hasOwnProperty(r) && e.push(encodeURIComponent(r) + '=' + encodeURIComponent(t[r]));
                return e.join('&');
            }
            var i =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ?

                function(t) {
                    return typeof t;
                } :
                function(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
                        'symbol' :
                        typeof t;
                },
                s = r(1),
                a = r(7),
                c = r(17),
                u = r(3)('socket.io-client');
            t.exports = e = n;
            var h = (e.managers = {});
            (e.protocol = a.protocol), (e.connect = n), (e.Manager = r(17)), (e.Socket = r(44));
        },
        function(t, e, r) {
            (function(e) {
                'use strict';

                function n(t, r) {
                    var n = t;
                    (r = r || e.location),
                    null == t && (t = r.protocol + '//' + r.host),
                        'string' == typeof t &&
                        ('/' === t.charAt(0) && (t = '/' === t.charAt(1) ? r.protocol + t : r.host + t),
                            /^(https?|wss?):\/\//.test(t) ||
                            (i('protocol-less url %s', t), (t = 'undefined' != typeof r ? r.protocol + '//' + t : 'https://' + t)),
                            i('parse %s', t),
                            (n = o(t))),
                        n.port ||
                        (/^(http|ws)$/.test(n.protocol) ? (n.port = '80') : /^(http|ws)s$/.test(n.protocol) && (n.port = '443')),
                        (n.path = n.path || '/');
                    var s = n.host.indexOf(':') !== -1,
                        a = s ? '[' + n.host + ']' : n.host;
                    return (
                        (n.id = n.protocol + '://' + a + ':' + n.port),
                        (n.href = n.protocol + '://' + a + (r && r.port === n.port ? '' : ':' + n.port)),
                        n
                    );
                }
                var o = r(2),
                    i = r(3)('socket.io-client:url');
                t.exports = n;
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                n = [
                    'source',
                    'protocol',
                    'authority',
                    'userInfo',
                    'user',
                    'password',
                    'host',
                    'port',
                    'relative',
                    'path',
                    'directory',
                    'file',
                    'query',
                    'anchor',
                ];
            t.exports = function(t) {
                var e = t,
                    o = t.indexOf('['),
                    i = t.indexOf(']');
                o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ';') + t.substring(i, t.length));
                for (var s = r.exec(t || ''), a = {}, c = 14; c--;) a[n[c]] = s[c] || '';
                return (
                    o != -1 &&
                    i != -1 &&
                    ((a.source = e),
                        (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ':')),
                        (a.authority = a.authority
                            .replace('[', '')
                            .replace(']', '')
                            .replace(/;/g, ':')),
                        (a.ipv6uri = !0)),
                    a
                );
            };
        },
        function(t, e, r) {
            (function(n) {
                function o() {
                    return (
                        ('undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style) ||
                        (window.console && (console.firebug || (console.exception && console.table))) ||
                        (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31)
                    );
                }

                function i() {
                    var t = arguments,
                        r = this.useColors;
                    if (
                        ((t[0] =
                            (r ? '%c' : '') +
                            this.namespace +
                            (r ? ' %c' : ' ') +
                            t[0] +
                            (r ? '%c ' : ' ') +
                            '+' +
                            e.humanize(this.diff)), !r)
                    )
                        return t;
                    var n = 'color: ' + this.color;
                    t = [t[0], n, 'color: inherit'].concat(Array.prototype.slice.call(t, 1));
                    var o = 0,
                        i = 0;
                    return (
                        t[0].replace(/%[a-z%]/g, function(t) {
                            '%%' !== t && (o++, '%c' === t && (i = o));
                        }),
                        t.splice(i, 0, n),
                        t
                    );
                }

                function s() {
                    return (
                        'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                    );
                }

                function a(t) {
                    try {
                        null == t ? e.storage.removeItem('debug') : (e.storage.debug = t);
                    } catch (t) {}
                }

                function c() {
                    try {
                        return e.storage.debug;
                    } catch (t) {}
                    if ('undefined' != typeof n && 'env' in n) return n.env.DEBUG;
                }

                function u() {
                    try {
                        return window.localStorage;
                    } catch (t) {}
                }
                (e = t.exports = r(5)),
                (e.log = s),
                (e.formatArgs = i),
                (e.save = a),
                (e.load = c),
                (e.useColors = o),
                (e.storage =
                    'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : u()),
                (e.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson']),
                (e.formatters.j = function(t) {
                    try {
                        return JSON.stringify(t);
                    } catch (t) {
                        return '[UnexpectedJSONParseError]: ' + t.message;
                    }
                }),
                e.enable(c());
            }.call(e, r(4)));
        },
        function(t, e) {
            function r() {
                throw new Error('setTimeout has not been defined');
            }

            function n() {
                throw new Error('clearTimeout has not been defined');
            }

            function o(t) {
                if (h === setTimeout) return setTimeout(t, 0);
                if ((h === r || !h) && setTimeout) return (h = setTimeout), setTimeout(t, 0);
                try {
                    return h(t, 0);
                } catch (e) {
                    try {
                        return h.call(null, t, 0);
                    } catch (e) {
                        return h.call(this, t, 0);
                    }
                }
            }

            function i(t) {
                if (p === clearTimeout) return clearTimeout(t);
                if ((p === n || !p) && clearTimeout) return (p = clearTimeout), clearTimeout(t);
                try {
                    return p(t);
                } catch (e) {
                    try {
                        return p.call(null, t);
                    } catch (e) {
                        return p.call(this, t);
                    }
                }
            }

            function s() {
                y && l && ((y = !1), l.length ? (d = l.concat(d)) : (g = -1), d.length && a());
            }

            function a() {
                if (!y) {
                    var t = o(s);
                    y = !0;
                    for (var e = d.length; e;) {
                        for (l = d, d = []; ++g < e;) l && l[g].run();
                        (g = -1), (e = d.length);
                    }
                    (l = null), (y = !1), i(t);
                }
            }

            function c(t, e) {
                (this.fun = t), (this.array = e);
            }

            function u() {}
            var h,
                p,
                f = (t.exports = {});
            !(function() {
                try {
                    h = 'function' == typeof setTimeout ? setTimeout : r;
                } catch (t) {
                    h = r;
                }
                try {
                    p = 'function' == typeof clearTimeout ? clearTimeout : n;
                } catch (t) {
                    p = n;
                }
            })();
            var l,
                d = [],
                y = !1,
                g = -1;
            (f.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                d.push(new c(t, e)), 1 !== d.length || y || o(a);
            }),
            (c.prototype.run = function() {
                this.fun.apply(null, this.array);
            }),
            (f.title = 'browser'),
            (f.browser = !0),
            (f.env = {}),
            (f.argv = []),
            (f.version = ''),
            (f.versions = {}),
            (f.on = u),
            (f.addListener = u),
            (f.once = u),
            (f.off = u),
            (f.removeListener = u),
            (f.removeAllListeners = u),
            (f.emit = u),
            (f.binding = function(t) {
                throw new Error('process.binding is not supported');
            }),
            (f.cwd = function() {
                return '/';
            }),
            (f.chdir = function(t) {
                throw new Error('process.chdir is not supported');
            }),
            (f.umask = function() {
                return 0;
            });
        },
        function(t, e, r) {
            function n() {
                return e.colors[h++ % e.colors.length];
            }

            function o(t) {
                function r() {}

                function o() {
                    var t = o,
                        r = +new Date(),
                        i = r - (u || r);
                    (t.diff = i),
                    (t.prev = u),
                    (t.curr = r),
                    (u = r),
                    null == t.useColors && (t.useColors = e.useColors()),
                        null == t.color && t.useColors && (t.color = n());
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                    (s[0] = e.coerce(s[0])), 'string' != typeof s[0] && (s = ['%o'].concat(s));
                    var c = 0;
                    (s[0] = s[0].replace(/%([a-z%])/g, function(r, n) {
                        if ('%%' === r) return r;
                        c++;
                        var o = e.formatters[n];
                        if ('function' == typeof o) {
                            var i = s[c];
                            (r = o.call(t, i)), s.splice(c, 1), c--;
                        }
                        return r;
                    })),
                    (s = e.formatArgs.apply(t, s));
                    var h = o.log || e.log || console.log.bind(console);
                    h.apply(t, s);
                }
                (r.enabled = !1), (o.enabled = !0);
                var i = e.enabled(t) ? o : r;
                return (i.namespace = t), i;
            }

            function i(t) {
                e.save(t);
                for (var r = (t || '').split(/[\s,]+/), n = r.length, o = 0; o < n; o++)
                    r[o] &&
                    ((t = r[o].replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?')),
                        '-' === t[0] ? e.skips.push(new RegExp('^' + t.substr(1) + '$')) : e.names.push(new RegExp('^' + t + '$')));
            }

            function s() {
                e.enable('');
            }

            function a(t) {
                var r, n;
                for (r = 0, n = e.skips.length; r < n; r++)
                    if (e.skips[r].test(t)) return !1;
                for (r = 0, n = e.names.length; r < n; r++)
                    if (e.names[r].test(t)) return !0;
                return !1;
            }

            function c(t) {
                return t instanceof Error ? t.stack || t.message : t;
            }
            (e = t.exports = o.debug = o),
            (e.coerce = c),
            (e.disable = s),
            (e.enable = i),
            (e.enabled = a),
            (e.humanize = r(6)),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {});
            var u,
                h = 0;
        },
        function(t, e) {
            function r(t) {
                if (((t = String(t)), !(t.length > 1e4))) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                        t
                    );
                    if (e) {
                        var r = parseFloat(e[1]),
                            n = (e[2] || 'ms').toLowerCase();
                        switch (n) {
                            case 'years':
                            case 'year':
                            case 'yrs':
                            case 'yr':
                            case 'y':
                                return r * h;
                            case 'days':
                            case 'day':
                            case 'd':
                                return r * u;
                            case 'hours':
                            case 'hour':
                            case 'hrs':
                            case 'hr':
                            case 'h':
                                return r * c;
                            case 'minutes':
                            case 'minute':
                            case 'mins':
                            case 'min':
                            case 'm':
                                return r * a;
                            case 'seconds':
                            case 'second':
                            case 'secs':
                            case 'sec':
                            case 's':
                                return r * s;
                            case 'milliseconds':
                            case 'millisecond':
                            case 'msecs':
                            case 'msec':
                            case 'ms':
                                return r;
                            default:
                                return;
                        }
                    }
                }
            }

            function n(t) {
                return t >= u ?
                    Math.round(t / u) + 'd' :
                    t >= c ?
                    Math.round(t / c) + 'h' :
                    t >= a ? Math.round(t / a) + 'm' : t >= s ? Math.round(t / s) + 's' : t + 'ms';
            }

            function o(t) {
                return i(t, u, 'day') || i(t, c, 'hour') || i(t, a, 'minute') || i(t, s, 'second') || t + ' ms';
            }

            function i(t, e, r) {
                if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + ' ' + r : Math.ceil(t / e) + ' ' + r + 's';
            }
            var s = 1e3,
                a = 60 * s,
                c = 60 * a,
                u = 24 * c,
                h = 365.25 * u;
            t.exports = function(t, e) {
                e = e || {};
                var i = typeof t;
                if ('string' === i && t.length > 0) return r(t);
                if ('number' === i && isNaN(t) === !1) return e.long ? o(t) : n(t);
                throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(t));
            };
        },
        function(t, e, r) {
            function n() {}

            function o(t) {
                var r = '',
                    n = !1;
                return (
                    (r += t.type),
                    (e.BINARY_EVENT != t.type && e.BINARY_ACK != t.type) || ((r += t.attachments), (r += '-')),
                    t.nsp && '/' != t.nsp && ((n = !0), (r += t.nsp)),
                    null != t.id && (n && ((r += ','), (n = !1)), (r += t.id)),
                    null != t.data && (n && (r += ','), (r += f.stringify(t.data))),
                    p('encoded %j as %s', t, r),
                    r
                );
            }

            function i(t, e) {
                function r(t) {
                    var r = d.deconstructPacket(t),
                        n = o(r.packet),
                        i = r.buffers;
                    i.unshift(n), e(i);
                }
                d.removeBlobs(t, r);
            }

            function s() {
                this.reconstructor = null;
            }

            function a(t) {
                var r = {},
                    n = 0;
                if (((r.type = Number(t.charAt(0))), null == e.types[r.type])) return h();
                if (e.BINARY_EVENT == r.type || e.BINARY_ACK == r.type) {
                    for (var o = '';
                        '-' != t.charAt(++n) && ((o += t.charAt(n)), n != t.length););
                    if (o != Number(o) || '-' != t.charAt(n)) throw new Error('Illegal attachments');
                    r.attachments = Number(o);
                }
                if ('/' == t.charAt(n + 1))
                    for (r.nsp = ''; ++n;) {
                        var i = t.charAt(n);
                        if (',' == i) break;
                        if (((r.nsp += i), n == t.length)) break;
                    }
                else r.nsp = '/';
                var s = t.charAt(n + 1);
                if ('' !== s && Number(s) == s) {
                    for (r.id = ''; ++n;) {
                        var i = t.charAt(n);
                        if (null == i || Number(i) != i) {
                            --n;
                            break;
                        }
                        if (((r.id += t.charAt(n)), n == t.length)) break;
                    }
                    r.id = Number(r.id);
                }
                return t.charAt(++n) && (r = c(r, t.substr(n))), p('decoded %s as %j', t, r), r;
            }

            function c(t, e) {
                try {
                    t.data = f.parse(e);
                } catch (t) {
                    return h();
                }
                return t;
            }

            function u(t) {
                (this.reconPack = t), (this.buffers = []);
            }

            function h(t) {
                return { type: e.ERROR, data: 'parser error' };
            }
            var p = r(8)('socket.io-parser'),
                f = r(11),
                l = r(13),
                d = r(14),
                y = r(16);
            (e.protocol = 4),
            (e.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK']),
            (e.CONNECT = 0),
            (e.DISCONNECT = 1),
            (e.EVENT = 2),
            (e.ACK = 3),
            (e.ERROR = 4),
            (e.BINARY_EVENT = 5),
            (e.BINARY_ACK = 6),
            (e.Encoder = n),
            (e.Decoder = s),
            (n.prototype.encode = function(t, r) {
                if ((p('encoding packet %j', t), e.BINARY_EVENT == t.type || e.BINARY_ACK == t.type)) i(t, r);
                else {
                    var n = o(t);
                    r([n]);
                }
            }),
            l(s.prototype),
                (s.prototype.add = function(t) {
                    var r;
                    if ('string' == typeof t)
                        (r = a(t)),
                        e.BINARY_EVENT == r.type || e.BINARY_ACK == r.type ?
                        ((this.reconstructor = new u(r)),
                            0 === this.reconstructor.reconPack.attachments && this.emit('decoded', r)) :
                        this.emit('decoded', r);
                    else {
                        if (!y(t) && !t.base64) throw new Error('Unknown type: ' + t);
                        if (!this.reconstructor) throw new Error('got binary data when not reconstructing a packet');
                        (r = this.reconstructor.takeBinaryData(t)), r && ((this.reconstructor = null), this.emit('decoded', r));
                    }
                }),
                (s.prototype.destroy = function() {
                    this.reconstructor && this.reconstructor.finishedReconstruction();
                }),
                (u.prototype.takeBinaryData = function(t) {
                    if ((this.buffers.push(t), this.buffers.length == this.reconPack.attachments)) {
                        var e = d.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), e;
                    }
                    return null;
                }),
                (u.prototype.finishedReconstruction = function() {
                    (this.reconPack = null), (this.buffers = []);
                });
        },
        function(t, e, r) {
            function n() {
                return (
                    'WebkitAppearance' in document.documentElement.style ||
                    (window.console && (console.firebug || (console.exception && console.table))) ||
                    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31)
                );
            }

            function o() {
                var t = arguments,
                    r = this.useColors;
                if (
                    ((t[0] =
                        (r ? '%c' : '') +
                        this.namespace +
                        (r ? ' %c' : ' ') +
                        t[0] +
                        (r ? '%c ' : ' ') +
                        '+' +
                        e.humanize(this.diff)), !r)
                )
                    return t;
                var n = 'color: ' + this.color;
                t = [t[0], n, 'color: inherit'].concat(Array.prototype.slice.call(t, 1));
                var o = 0,
                    i = 0;
                return (
                    t[0].replace(/%[a-z%]/g, function(t) {
                        '%%' !== t && (o++, '%c' === t && (i = o));
                    }),
                    t.splice(i, 0, n),
                    t
                );
            }

            function i() {
                return (
                    'object' == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                );
            }

            function s(t) {
                try {
                    null == t ? e.storage.removeItem('debug') : (e.storage.debug = t);
                } catch (t) {}
            }

            function a() {
                var t;
                try {
                    t = e.storage.debug;
                } catch (t) {}
                return t;
            }

            function c() {
                try {
                    return window.localStorage;
                } catch (t) {}
            }
            (e = t.exports = r(9)),
            (e.log = i),
            (e.formatArgs = o),
            (e.save = s),
            (e.load = a),
            (e.useColors = n),
            (e.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : c()),
            (e.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson']),
            (e.formatters.j = function(t) {
                return JSON.stringify(t);
            }),
            e.enable(a());
        },
        function(t, e, r) {
            function n() {
                return e.colors[h++ % e.colors.length];
            }

            function o(t) {
                function r() {}

                function o() {
                    var t = o,
                        r = +new Date(),
                        i = r - (u || r);
                    (t.diff = i),
                    (t.prev = u),
                    (t.curr = r),
                    (u = r),
                    null == t.useColors && (t.useColors = e.useColors()),
                        null == t.color && t.useColors && (t.color = n());
                    var s = Array.prototype.slice.call(arguments);
                    (s[0] = e.coerce(s[0])), 'string' != typeof s[0] && (s = ['%o'].concat(s));
                    var a = 0;
                    (s[0] = s[0].replace(/%([a-z%])/g, function(r, n) {
                        if ('%%' === r) return r;
                        a++;
                        var o = e.formatters[n];
                        if ('function' == typeof o) {
                            var i = s[a];
                            (r = o.call(t, i)), s.splice(a, 1), a--;
                        }
                        return r;
                    })),
                    'function' == typeof e.formatArgs && (s = e.formatArgs.apply(t, s));
                    var c = o.log || e.log || console.log.bind(console);
                    c.apply(t, s);
                }
                (r.enabled = !1), (o.enabled = !0);
                var i = e.enabled(t) ? o : r;
                return (i.namespace = t), i;
            }

            function i(t) {
                e.save(t);
                for (var r = (t || '').split(/[\s,]+/), n = r.length, o = 0; o < n; o++)
                    r[o] &&
                    ((t = r[o].replace(/\*/g, '.*?')),
                        '-' === t[0] ? e.skips.push(new RegExp('^' + t.substr(1) + '$')) : e.names.push(new RegExp('^' + t + '$')));
            }

            function s() {
                e.enable('');
            }

            function a(t) {
                var r, n;
                for (r = 0, n = e.skips.length; r < n; r++)
                    if (e.skips[r].test(t)) return !1;
                for (r = 0, n = e.names.length; r < n; r++)
                    if (e.names[r].test(t)) return !0;
                return !1;
            }

            function c(t) {
                return t instanceof Error ? t.stack || t.message : t;
            }
            (e = t.exports = o),
            (e.coerce = c),
            (e.disable = s),
            (e.enable = i),
            (e.enabled = a),
            (e.humanize = r(10)),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {});
            var u,
                h = 0;
        },
        function(t, e) {
            function r(t) {
                if (((t = '' + t), !(t.length > 1e4))) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                        t
                    );
                    if (e) {
                        var r = parseFloat(e[1]),
                            n = (e[2] || 'ms').toLowerCase();
                        switch (n) {
                            case 'years':
                            case 'year':
                            case 'yrs':
                            case 'yr':
                            case 'y':
                                return r * h;
                            case 'days':
                            case 'day':
                            case 'd':
                                return r * u;
                            case 'hours':
                            case 'hour':
                            case 'hrs':
                            case 'hr':
                            case 'h':
                                return r * c;
                            case 'minutes':
                            case 'minute':
                            case 'mins':
                            case 'min':
                            case 'm':
                                return r * a;
                            case 'seconds':
                            case 'second':
                            case 'secs':
                            case 'sec':
                            case 's':
                                return r * s;
                            case 'milliseconds':
                            case 'millisecond':
                            case 'msecs':
                            case 'msec':
                            case 'ms':
                                return r;
                        }
                    }
                }
            }

            function n(t) {
                return t >= u ?
                    Math.round(t / u) + 'd' :
                    t >= c ?
                    Math.round(t / c) + 'h' :
                    t >= a ? Math.round(t / a) + 'm' : t >= s ? Math.round(t / s) + 's' : t + 'ms';
            }

            function o(t) {
                return i(t, u, 'day') || i(t, c, 'hour') || i(t, a, 'minute') || i(t, s, 'second') || t + ' ms';
            }

            function i(t, e, r) {
                if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + ' ' + r : Math.ceil(t / e) + ' ' + r + 's';
            }
            var s = 1e3,
                a = 60 * s,
                c = 60 * a,
                u = 24 * c,
                h = 365.25 * u;
            t.exports = function(t, e) {
                return (e = e || {}), 'string' == typeof t ? r(t) : e.long ? o(t) : n(t);
            };
        },
        function(t, e, r) {
            (function(t, r) {
                var n = !1;
                (function() {
                    function o(t, e) {
                        function r(t) {
                            if (r[t] !== g) return r[t];
                            var o;
                            if ('bug-string-char-index' == t) o = 'a' != 'a' [0];
                            else if ('json' == t) o = r('json-stringify') && r('json-parse');
                            else {
                                var s,
                                    a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if ('json-stringify' == t) {
                                    var c = e.stringify,
                                        h = 'function' == typeof c && b;
                                    if (h) {
                                        (s = function() {
                                            return 1;
                                        }).toJSON = s;
                                        try {
                                            h =
                                                '0' === c(0) &&
                                                '0' === c(new n()) &&
                                                '""' == c(new i()) &&
                                                c(v) === g &&
                                                c(g) === g &&
                                                c() === g &&
                                                '1' === c(s) &&
                                                '[1]' == c([s]) &&
                                                '[null]' == c([g]) &&
                                                'null' == c(null) &&
                                                '[null,null,null]' == c([g, v, null]) &&
                                                c({ a: [s, !0, !1, null, '\0\b\n\f\r\t'] }) == a &&
                                                '1' === c(null, s) &&
                                                '[\n 1,\n 2\n]' == c([1, 2], null, 1) &&
                                                '"-271821-04-20T00:00:00.000Z"' == c(new u(-864e13)) &&
                                                '"+275760-09-13T00:00:00.000Z"' == c(new u(864e13)) &&
                                                '"-000001-01-01T00:00:00.000Z"' == c(new u(-621987552e5)) &&
                                                '"1969-12-31T23:59:59.999Z"' == c(new u(-1));
                                        } catch (t) {
                                            h = !1;
                                        }
                                    }
                                    o = h;
                                }
                                if ('json-parse' == t) {
                                    var p = e.parse;
                                    if ('function' == typeof p)
                                        try {
                                            if (0 === p('0') && !p(!1)) {
                                                s = p(a);
                                                var f = 5 == s.a.length && 1 === s.a[0];
                                                if (f) {
                                                    try {
                                                        f = !p('"\t"');
                                                    } catch (t) {}
                                                    if (f)
                                                        try {
                                                            f = 1 !== p('01');
                                                        } catch (t) {}
                                                    if (f)
                                                        try {
                                                            f = 1 !== p('1.');
                                                        } catch (t) {}
                                                }
                                            }
                                        } catch (t) {
                                            f = !1;
                                        }
                                    o = f;
                                }
                            }
                            return (r[t] = !!o);
                        }
                        t || (t = c.Object()), e || (e = c.Object());
                        var n = t.Number || c.Number,
                            i = t.String || c.String,
                            a = t.Object || c.Object,
                            u = t.Date || c.Date,
                            h = t.SyntaxError || c.SyntaxError,
                            p = t.TypeError || c.TypeError,
                            f = t.Math || c.Math,
                            l = t.JSON || c.JSON;
                        'object' == typeof l && l && ((e.stringify = l.stringify), (e.parse = l.parse));
                        var d,
                            y,
                            g,
                            m = a.prototype,
                            v = m.toString,
                            b = new u(-0xc782b5b800cec);
                        try {
                            b =
                                b.getUTCFullYear() == -109252 &&
                                0 === b.getUTCMonth() &&
                                1 === b.getUTCDate() &&
                                10 == b.getUTCHours() &&
                                37 == b.getUTCMinutes() &&
                                6 == b.getUTCSeconds() &&
                                708 == b.getUTCMilliseconds();
                        } catch (t) {}
                        if (!r('json')) {
                            var w = '[object Function]',
                                k = '[object Date]',
                                x = '[object Number]',
                                A = '[object String]',
                                C = '[object Array]',
                                B = '[object Boolean]',
                                S = r('bug-string-char-index');
                            if (!b)
                                var T = f.floor,
                                    E = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    _ = function(t, e) {
                                        return (
                                            E[e] +
                                            365 * (t - 1970) +
                                            T((t - 1969 + (e = +(e > 1))) / 4) -
                                            T((t - 1901 + e) / 100) +
                                            T((t - 1601 + e) / 400)
                                        );
                                    };
                            if (
                                ((d = m.hasOwnProperty) ||
                                    (d = function(t) {
                                        var e,
                                            r = {};
                                        return (
                                            ((r.__proto__ = null), (r.__proto__ = { toString: 1 }), r).toString != v ?
                                            (d = function(t) {
                                                var e = this.__proto__,
                                                    r = t in ((this.__proto__ = null), this);
                                                return (this.__proto__ = e), r;
                                            }) :
                                            ((e = r.constructor),
                                                (d = function(t) {
                                                    var r = (this.constructor || e).prototype;
                                                    return t in this && !(t in r && this[t] === r[t]);
                                                })),
                                            (r = null),
                                            d.call(this, t)
                                        );
                                    }),
                                    (y = function(t, e) {
                                        var r,
                                            n,
                                            o,
                                            i = 0;
                                        ((r = function() {
                                            this.valueOf = 0;
                                        }).prototype.valueOf = 0),
                                        (n = new r());
                                        for (o in n) d.call(n, o) && i++;
                                        return (
                                            (r = n = null),
                                            i ?
                                            (y =
                                                2 == i ?

                                                function(t, e) {
                                                    var r,
                                                        n = {},
                                                        o = v.call(t) == w;
                                                    for (r in t)
                                                        (o && 'prototype' == r) || d.call(n, r) || !(n[r] = 1) || !d.call(t, r) || e(r);
                                                } :
                                                function(t, e) {
                                                    var r,
                                                        n,
                                                        o = v.call(t) == w;
                                                    for (r in t)
                                                        (o && 'prototype' == r) || !d.call(t, r) || (n = 'constructor' === r) || e(r);
                                                    (n || d.call(t, (r = 'constructor'))) && e(r);
                                                }) :
                                            ((n = [
                                                    'valueOf',
                                                    'toString',
                                                    'toLocaleString',
                                                    'propertyIsEnumerable',
                                                    'isPrototypeOf',
                                                    'hasOwnProperty',
                                                    'constructor',
                                                ]),
                                                (y = function(t, e) {
                                                    var r,
                                                        o,
                                                        i = v.call(t) == w,
                                                        a =
                                                        (!i &&
                                                            'function' != typeof t.constructor &&
                                                            s[typeof t.hasOwnProperty] &&
                                                            t.hasOwnProperty) ||
                                                        d;
                                                    for (r in t)(i && 'prototype' == r) || !a.call(t, r) || e(r);
                                                    for (o = n.length;
                                                        (r = n[--o]); a.call(t, r) && e(r));
                                                })),
                                            y(t, e)
                                        );
                                    }), !r('json-stringify'))
                            ) {
                                var N = { 92: '\\\\', 34: '\\"', 8: '\\b', 12: '\\f', 10: '\\n', 13: '\\r', 9: '\\t' },
                                    j = '000000',
                                    O = function(t, e) {
                                        return (j + (e || 0)).slice(-t);
                                    },
                                    P = '\\u00',
                                    R = function(t) {
                                        for (
                                            var e = '"', r = 0, n = t.length, o = !S || n > 10, i = o && (S ? t.split('') : t); r < n; r++
                                        ) {
                                            var s = t.charCodeAt(r);
                                            switch (s) {
                                                case 8:
                                                case 9:
                                                case 10:
                                                case 12:
                                                case 13:
                                                case 34:
                                                case 92:
                                                    e += N[s];
                                                    break;
                                                default:
                                                    if (s < 32) {
                                                        e += P + O(2, s.toString(16));
                                                        break;
                                                    }
                                                    e += o ? i[r] : t.charAt(r);
                                            }
                                        }
                                        return e + '"';
                                    },
                                    D = function(t, e, r, n, o, i, s) {
                                        var a, c, u, h, f, l, m, b, w, S, E, N, j, P, q, U;
                                        try {
                                            a = e[t];
                                        } catch (t) {}
                                        if ('object' == typeof a && a)
                                            if (((c = v.call(a)), c != k || d.call(a, 'toJSON')))
                                                'function' == typeof a.toJSON &&
                                                ((c != x && c != A && c != C) || d.call(a, 'toJSON')) &&
                                                (a = a.toJSON(t));
                                            else if (a > -1 / 0 && a < 1 / 0) {
                                            if (_) {
                                                for (f = T(a / 864e5), u = T(f / 365.2425) + 1970 - 1; _(u + 1, 0) <= f; u++);
                                                for (h = T((f - _(u, 0)) / 30.42); _(u, h + 1) <= f; h++);
                                                (f = 1 + f - _(u, h)),
                                                (l = (a % 864e5 + 864e5) % 864e5),
                                                (m = T(l / 36e5) % 24),
                                                (b = T(l / 6e4) % 60),
                                                (w = T(l / 1e3) % 60),
                                                (S = l % 1e3);
                                            } else
                                                (u = a.getUTCFullYear()),
                                                (h = a.getUTCMonth()),
                                                (f = a.getUTCDate()),
                                                (m = a.getUTCHours()),
                                                (b = a.getUTCMinutes()),
                                                (w = a.getUTCSeconds()),
                                                (S = a.getUTCMilliseconds());
                                            a =
                                                (u <= 0 || u >= 1e4 ? (u < 0 ? '-' : '+') + O(6, u < 0 ? -u : u) : O(4, u)) +
                                                '-' +
                                                O(2, h + 1) +
                                                '-' +
                                                O(2, f) +
                                                'T' +
                                                O(2, m) +
                                                ':' +
                                                O(2, b) +
                                                ':' +
                                                O(2, w) +
                                                '.' +
                                                O(3, S) +
                                                'Z';
                                        } else a = null;
                                        if ((r && (a = r.call(e, t, a)), null === a)) return 'null';
                                        if (((c = v.call(a)), c == B)) return '' + a;
                                        if (c == x) return a > -1 / 0 && a < 1 / 0 ? '' + a : 'null';
                                        if (c == A) return R('' + a);
                                        if ('object' == typeof a) {
                                            for (P = s.length; P--;)
                                                if (s[P] === a) throw p();
                                            if ((s.push(a), (E = []), (q = i), (i += o), c == C)) {
                                                for (j = 0, P = a.length; j < P; j++)
                                                    (N = D(j, a, r, n, o, i, s)), E.push(N === g ? 'null' : N);
                                                U = E.length ?
                                                    o ? '[\n' + i + E.join(',\n' + i) + '\n' + q + ']' : '[' + E.join(',') + ']' :
                                                    '[]';
                                            } else
                                                y(n || a, function(t) {
                                                    var e = D(t, a, r, n, o, i, s);
                                                    e !== g && E.push(R(t) + ':' + (o ? ' ' : '') + e);
                                                }),
                                                (U = E.length ?
                                                    o ? '{\n' + i + E.join(',\n' + i) + '\n' + q + '}' : '{' + E.join(',') + '}' :
                                                    '{}');
                                            return s.pop(), U;
                                        }
                                    };
                                e.stringify = function(t, e, r) {
                                    var n, o, i, a;
                                    if (s[typeof e] && e)
                                        if ((a = v.call(e)) == w) o = e;
                                        else if (a == C) {
                                        i = {};
                                        for (
                                            var c, u = 0, h = e.length; u < h; c = e[u++], a = v.call(c), (a == A || a == x) && (i[c] = 1)
                                        );
                                    }
                                    if (r)
                                        if ((a = v.call(r)) == x) {
                                            if ((r -= r % 1) > 0)
                                                for (n = '', r > 10 && (r = 10); n.length < r; n += ' ');
                                        } else a == A && (n = r.length <= 10 ? r : r.slice(0, 10));
                                    return D('', ((c = {}), (c[''] = t), c), o, i, n, '', []);
                                };
                            }
                            if (!r('json-parse')) {
                                var q,
                                    U,
                                    M = i.fromCharCode,
                                    L = { 92: '\\', 34: '"', 47: '/', 98: '\b', 116: '\t', 110: '\n', 102: '\f', 114: '\r' },
                                    I = function() {
                                        throw ((q = U = null), h());
                                    },
                                    H = function() {
                                        for (var t, e, r, n, o, i = U, s = i.length; q < s;)
                                            switch ((o = i.charCodeAt(q))) {
                                                case 9:
                                                case 10:
                                                case 13:
                                                case 32:
                                                    q++;
                                                    break;
                                                case 123:
                                                case 125:
                                                case 91:
                                                case 93:
                                                case 58:
                                                case 44:
                                                    return (t = S ? i.charAt(q) : i[q]), q++, t;
                                                case 34:
                                                    for (t = '@', q++; q < s;)
                                                        if (((o = i.charCodeAt(q)), o < 32)) I();
                                                        else if (92 == o)
                                                        switch ((o = i.charCodeAt(++q))) {
                                                            case 92:
                                                            case 34:
                                                            case 47:
                                                            case 98:
                                                            case 116:
                                                            case 110:
                                                            case 102:
                                                            case 114:
                                                                (t += L[o]), q++;
                                                                break;
                                                            case 117:
                                                                for (e = ++q, r = q + 4; q < r; q++)
                                                                    (o = i.charCodeAt(q)),
                                                                    (o >= 48 && o <= 57) || (o >= 97 && o <= 102) || (o >= 65 && o <= 70) || I();
                                                                t += M('0x' + i.slice(e, q));
                                                                break;
                                                            default:
                                                                I();
                                                        }
                                                    else {
                                                        if (34 == o) break;
                                                        for (o = i.charCodeAt(q), e = q; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++q);
                                                        t += i.slice(e, q);
                                                    }
                                                    if (34 == i.charCodeAt(q)) return q++, t;
                                                    I();
                                                default:
                                                    if (((e = q), 45 == o && ((n = !0), (o = i.charCodeAt(++q))), o >= 48 && o <= 57)) {
                                                        for (
                                                            48 == o && ((o = i.charCodeAt(q + 1)), o >= 48 && o <= 57) && I(), n = !1; q < s && ((o = i.charCodeAt(q)), o >= 48 && o <= 57); q++
                                                        );
                                                        if (46 == i.charCodeAt(q)) {
                                                            for (r = ++q; r < s && ((o = i.charCodeAt(r)), o >= 48 && o <= 57); r++);
                                                            r == q && I(), (q = r);
                                                        }
                                                        if (((o = i.charCodeAt(q)), 101 == o || 69 == o)) {
                                                            for (
                                                                o = i.charCodeAt(++q), (43 != o && 45 != o) || q++, r = q; r < s && ((o = i.charCodeAt(r)), o >= 48 && o <= 57); r++
                                                            );
                                                            r == q && I(), (q = r);
                                                        }
                                                        return +i.slice(e, q);
                                                    }
                                                    if ((n && I(), 'true' == i.slice(q, q + 4))) return (q += 4), !0;
                                                    if ('false' == i.slice(q, q + 5)) return (q += 5), !1;
                                                    if ('null' == i.slice(q, q + 4)) return (q += 4), null;
                                                    I();
                                            }
                                        return '$';
                                    },
                                    z = function(t) {
                                        var e, r;
                                        if (('$' == t && I(), 'string' == typeof t)) {
                                            if ('@' == (S ? t.charAt(0) : t[0])) return t.slice(1);
                                            if ('[' == t) {
                                                for (e = [];
                                                    (t = H()), ']' != t; r || (r = !0))
                                                    r && (',' == t ? ((t = H()), ']' == t && I()) : I()), ',' == t && I(), e.push(z(t));
                                                return e;
                                            }
                                            if ('{' == t) {
                                                for (e = {};
                                                    (t = H()), '}' != t; r || (r = !0))
                                                    r && (',' == t ? ((t = H()), '}' == t && I()) : I()),
                                                    (',' != t && 'string' == typeof t && '@' == (S ? t.charAt(0) : t[0]) && ':' == H()) || I(),
                                                    (e[t.slice(1)] = z(H()));
                                                return e;
                                            }
                                            I();
                                        }
                                        return t;
                                    },
                                    J = function(t, e, r) {
                                        var n = X(t, e, r);
                                        n === g ? delete t[e] : (t[e] = n);
                                    },
                                    X = function(t, e, r) {
                                        var n,
                                            o = t[e];
                                        if ('object' == typeof o && o)
                                            if (v.call(o) == C)
                                                for (n = o.length; n--;) J(o, n, r);
                                            else
                                                y(o, function(t) {
                                                    J(o, t, r);
                                                });
                                        return r.call(t, e, o);
                                    };
                                e.parse = function(t, e) {
                                    var r, n;
                                    return (
                                        (q = 0),
                                        (U = '' + t),
                                        (r = z(H())),
                                        '$' != H() && I(),
                                        (q = U = null),
                                        e && v.call(e) == w ? X(((n = {}), (n[''] = r), n), '', e) : r
                                    );
                                };
                            }
                        }
                        return (e.runInContext = o), e;
                    }
                    var i = 'function' == typeof n && n.amd,
                        s = { function: !0, object: !0 },
                        a = s[typeof e] && e && !e.nodeType && e,
                        c = (s[typeof window] && window) || this,
                        u = a && s[typeof t] && t && !t.nodeType && 'object' == typeof r && r;
                    if ((!u || (u.global !== u && u.window !== u && u.self !== u) || (c = u), a && !i)) o(c, a);
                    else {
                        var h = c.JSON,
                            p = c.JSON3,
                            f = !1,
                            l = o(
                                c,
                                (c.JSON3 = {
                                    noConflict: function() {
                                        return f || ((f = !0), (c.JSON = h), (c.JSON3 = p), (h = p = null)), l;
                                    },
                                })
                            );
                        c.JSON = { parse: l.parse, stringify: l.stringify };
                    }
                    i &&
                        n(function() {
                            return l;
                        });
                }.call(this));
            }.call(
                e,
                r(12)(t),
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            t.exports = function(t) {
                return (
                    t.webpackPolyfill ||
                    ((t.deprecate = function() {}), (t.paths = []), (t.children = []), (t.webpackPolyfill = 1)),
                    t
                );
            };
        },
        function(t, e) {
            function r(t) {
                if (t) return n(t);
            }

            function n(t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t;
            }
            (t.exports = r),
            (r.prototype.on = r.prototype.addEventListener = function(t, e) {
                return (
                    (this._callbacks = this._callbacks || {}), (this._callbacks[t] = this._callbacks[t] || []).push(e), this
                );
            }),
            (r.prototype.once = function(t, e) {
                function r() {
                    n.off(t, r), e.apply(this, arguments);
                }
                var n = this;
                return (this._callbacks = this._callbacks || {}), (r.fn = e), this.on(t, r), this;
            }),
            (r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(
                t,
                e
            ) {
                if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
                var r = this._callbacks[t];
                if (!r) return this;
                if (1 == arguments.length) return delete this._callbacks[t], this;
                for (var n, o = 0; o < r.length; o++)
                    if (((n = r[o]), n === e || n.fn === e)) {
                        r.splice(o, 1);
                        break;
                    }
                return this;
            }),
            (r.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    r = this._callbacks[t];
                if (r) {
                    r = r.slice(0);
                    for (var n = 0, o = r.length; n < o; ++n) r[n].apply(this, e);
                }
                return this;
            }),
            (r.prototype.listeners = function(t) {
                return (this._callbacks = this._callbacks || {}), this._callbacks[t] || [];
            }),
            (r.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length;
            });
        },
        function(t, e, r) {
            (function(t) {
                var n = r(15),
                    o = r(16);
                (e.deconstructPacket = function(t) {
                    function e(t) {
                        if (!t) return t;
                        if (o(t)) {
                            var i = { _placeholder: !0, num: r.length };
                            return r.push(t), i;
                        }
                        if (n(t)) {
                            for (var s = new Array(t.length), a = 0; a < t.length; a++) s[a] = e(t[a]);
                            return s;
                        }
                        if ('object' == typeof t && !(t instanceof Date)) {
                            var s = {};
                            for (var c in t) s[c] = e(t[c]);
                            return s;
                        }
                        return t;
                    }
                    var r = [],
                        i = t.data,
                        s = t;
                    return (s.data = e(i)), (s.attachments = r.length), { packet: s, buffers: r };
                }),
                (e.reconstructPacket = function(t, e) {
                    function r(t) {
                        if (t && t._placeholder) {
                            var o = e[t.num];
                            return o;
                        }
                        if (n(t)) {
                            for (var i = 0; i < t.length; i++) t[i] = r(t[i]);
                            return t;
                        }
                        if (t && 'object' == typeof t) {
                            for (var s in t) t[s] = r(t[s]);
                            return t;
                        }
                        return t;
                    }
                    return (t.data = r(t.data)), (t.attachments = void 0), t;
                }),
                (e.removeBlobs = function(e, r) {
                    function i(e, c, u) {
                        if (!e) return e;
                        if ((t.Blob && e instanceof Blob) || (t.File && e instanceof File)) {
                            s++;
                            var h = new FileReader();
                            (h.onload = function() {
                                u ? (u[c] = this.result) : (a = this.result), --s || r(a);
                            }),
                            h.readAsArrayBuffer(e);
                        } else if (n(e))
                            for (var p = 0; p < e.length; p++) i(e[p], p, e);
                        else if (e && 'object' == typeof e && !o(e))
                            for (var f in e) i(e[f], f, e);
                    }
                    var s = 0,
                        a = e;
                    i(a), s || r(a);
                });
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            t.exports =
                Array.isArray ||
                function(t) {
                    return '[object Array]' == Object.prototype.toString.call(t);
                };
        },
        function(t, e) {
            (function(e) {
                function r(t) {
                    return (e.Buffer && e.Buffer.isBuffer(t)) || (e.ArrayBuffer && t instanceof ArrayBuffer);
                }
                t.exports = r;
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, r) {
            'use strict';

            function n(t, e) {
                return this instanceof n ?
                    (t && 'object' === ('undefined' == typeof t ? 'undefined' : o(t)) && ((e = t), (t = void 0)),
                        (e = e || {}),
                        (e.path = e.path || '/socket.io'),
                        (this.nsps = {}),
                        (this.subs = []),
                        (this.opts = e),
                        this.reconnection(e.reconnection !== !1),
                        this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
                        this.reconnectionDelay(e.reconnectionDelay || 1e3),
                        this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
                        this.randomizationFactor(e.randomizationFactor || 0.5),
                        (this.backoff = new l({
                            min: this.reconnectionDelay(),
                            max: this.reconnectionDelayMax(),
                            jitter: this.randomizationFactor(),
                        })),
                        this.timeout(null == e.timeout ? 2e4 : e.timeout),
                        (this.readyState = 'closed'),
                        (this.uri = t),
                        (this.connecting = []),
                        (this.lastPing = null),
                        (this.encoding = !1),
                        (this.packetBuffer = []),
                        (this.encoder = new c.Encoder()),
                        (this.decoder = new c.Decoder()),
                        (this.autoConnect = e.autoConnect !== !1),
                        void(this.autoConnect && this.open())) :
                    new n(t, e);
            }
            var o =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ?

                function(t) {
                    return typeof t;
                } :
                function(t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
                        'symbol' :
                        typeof t;
                },
                i = r(18),
                s = r(44),
                a = r(35),
                c = r(7),
                u = r(46),
                h = r(47),
                p = r(3)('socket.io-client:manager'),
                f = r(42),
                l = r(48),
                d = Object.prototype.hasOwnProperty;
            (t.exports = n),
            (n.prototype.emitAll = function() {
                this.emit.apply(this, arguments);
                for (var t in this.nsps) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);
            }),
            (n.prototype.updateSocketIds = function() {
                for (var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.engine.id);
            }),
            a(n.prototype),
                (n.prototype.reconnection = function(t) {
                    return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection;
                }),
                (n.prototype.reconnectionAttempts = function(t) {
                    return arguments.length ? ((this._reconnectionAttempts = t), this) : this._reconnectionAttempts;
                }),
                (n.prototype.reconnectionDelay = function(t) {
                    return arguments.length ?
                        ((this._reconnectionDelay = t), this.backoff && this.backoff.setMin(t), this) :
                        this._reconnectionDelay;
                }),
                (n.prototype.randomizationFactor = function(t) {
                    return arguments.length ?
                        ((this._randomizationFactor = t), this.backoff && this.backoff.setJitter(t), this) :
                        this._randomizationFactor;
                }),
                (n.prototype.reconnectionDelayMax = function(t) {
                    return arguments.length ?
                        ((this._reconnectionDelayMax = t), this.backoff && this.backoff.setMax(t), this) :
                        this._reconnectionDelayMax;
                }),
                (n.prototype.timeout = function(t) {
                    return arguments.length ? ((this._timeout = t), this) : this._timeout;
                }),
                (n.prototype.maybeReconnectOnOpen = function() {
                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
                }),
                (n.prototype.open = n.prototype.connect = function(t, e) {
                    if ((p('readyState %s', this.readyState), ~this.readyState.indexOf('open'))) return this;
                    p('opening %s', this.uri), (this.engine = i(this.uri, this.opts));
                    var r = this.engine,
                        n = this;
                    (this.readyState = 'opening'), (this.skipReconnect = !1);
                    var o = u(r, 'open', function() {
                            n.onopen(), t && t();
                        }),
                        s = u(r, 'error', function(e) {
                            if ((p('connect_error'), n.cleanup(), (n.readyState = 'closed'), n.emitAll('connect_error', e), t)) {
                                var r = new Error('Connection error');
                                (r.data = e), t(r);
                            } else n.maybeReconnectOnOpen();
                        });
                    if (!1 !== this._timeout) {
                        var a = this._timeout;
                        p('connect attempt will timeout after %d', a);
                        var c = setTimeout(function() {
                            p('connect attempt timed out after %d', a),
                                o.destroy(),
                                r.close(),
                                r.emit('error', 'timeout'),
                                n.emitAll('connect_timeout', a);
                        }, a);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(c);
                            },
                        });
                    }
                    return this.subs.push(o), this.subs.push(s), this;
                }),
                (n.prototype.onopen = function() {
                    p('open'), this.cleanup(), (this.readyState = 'open'), this.emit('open');
                    var t = this.engine;
                    this.subs.push(u(t, 'data', h(this, 'ondata'))),
                        this.subs.push(u(t, 'ping', h(this, 'onping'))),
                        this.subs.push(u(t, 'pong', h(this, 'onpong'))),
                        this.subs.push(u(t, 'error', h(this, 'onerror'))),
                        this.subs.push(u(t, 'close', h(this, 'onclose'))),
                        this.subs.push(u(this.decoder, 'decoded', h(this, 'ondecoded')));
                }),
                (n.prototype.onping = function() {
                    (this.lastPing = new Date()), this.emitAll('ping');
                }),
                (n.prototype.onpong = function() {
                    this.emitAll('pong', new Date() - this.lastPing);
                }),
                (n.prototype.ondata = function(t) {
                    this.decoder.add(t);
                }),
                (n.prototype.ondecoded = function(t) {
                    this.emit('packet', t);
                }),
                (n.prototype.onerror = function(t) {
                    p('error', t), this.emitAll('error', t);
                }),
                (n.prototype.socket = function(t, e) {
                    function r() {
                        ~f(o.connecting, n) || o.connecting.push(n);
                    }
                    var n = this.nsps[t];
                    if (!n) {
                        (n = new s(this, t, e)), (this.nsps[t] = n);
                        var o = this;
                        n.on('connecting', r),
                            n.on('connect', function() {
                                n.id = o.engine.id;
                            }),
                            this.autoConnect && r();
                    }
                    return n;
                }),
                (n.prototype.destroy = function(t) {
                    var e = f(this.connecting, t);
                    ~e && this.connecting.splice(e, 1), this.connecting.length || this.close();
                }),
                (n.prototype.packet = function(t) {
                    p('writing packet %j', t);
                    var e = this;
                    t.query && 0 === t.type && (t.nsp += '?' + t.query),
                        e.encoding ?
                        e.packetBuffer.push(t) :
                        ((e.encoding = !0),
                            this.encoder.encode(t, function(r) {
                                for (var n = 0; n < r.length; n++) e.engine.write(r[n], t.options);
                                (e.encoding = !1), e.processPacketQueue();
                            }));
                }),
                (n.prototype.processPacketQueue = function() {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var t = this.packetBuffer.shift();
                        this.packet(t);
                    }
                }),
                (n.prototype.cleanup = function() {
                    p('cleanup');
                    for (var t = this.subs.length, e = 0; e < t; e++) {
                        var r = this.subs.shift();
                        r.destroy();
                    }
                    (this.packetBuffer = []), (this.encoding = !1), (this.lastPing = null), this.decoder.destroy();
                }),
                (n.prototype.close = n.prototype.disconnect = function() {
                    p('disconnect'),
                        (this.skipReconnect = !0),
                        (this.reconnecting = !1),
                        'opening' === this.readyState && this.cleanup(),
                        this.backoff.reset(),
                        (this.readyState = 'closed'),
                        this.engine && this.engine.close();
                }),
                (n.prototype.onclose = function(t) {
                    p('onclose'),
                        this.cleanup(),
                        this.backoff.reset(),
                        (this.readyState = 'closed'),
                        this.emit('close', t),
                        this._reconnection && !this.skipReconnect && this.reconnect();
                }),
                (n.prototype.reconnect = function() {
                    if (this.reconnecting || this.skipReconnect) return this;
                    var t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts)
                        p('reconnect failed'), this.backoff.reset(), this.emitAll('reconnect_failed'), (this.reconnecting = !1);
                    else {
                        var e = this.backoff.duration();
                        p('will wait %dms before reconnect attempt', e), (this.reconnecting = !0);
                        var r = setTimeout(function() {
                            t.skipReconnect ||
                                (p('attempting reconnect'),
                                    t.emitAll('reconnect_attempt', t.backoff.attempts),
                                    t.emitAll('reconnecting', t.backoff.attempts),
                                    t.skipReconnect ||
                                    t.open(function(e) {
                                        e
                                            ?
                                            (p('reconnect attempt error'),
                                                (t.reconnecting = !1),
                                                t.reconnect(),
                                                t.emitAll('reconnect_error', e.data)) :
                                            (p('reconnect success'), t.onreconnect());
                                    }));
                        }, e);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(r);
                            },
                        });
                    }
                }),
                (n.prototype.onreconnect = function() {
                    var t = this.backoff.attempts;
                    (this.reconnecting = !1), this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', t);
                });
        },
        function(t, e, r) {
            t.exports = r(19);
        },
        function(t, e, r) {
            (t.exports = r(20)), (t.exports.parser = r(27));
        },
        function(t, e, r) {
            (function(e) {
                function n(t, r) {
                    if (!(this instanceof n)) return new n(t, r);
                    (r = r || {}),
                    t && 'object' == typeof t && ((r = t), (t = null)),
                        t ?
                        ((t = h(t)),
                            (r.hostname = t.host),
                            (r.secure = 'https' === t.protocol || 'wss' === t.protocol),
                            (r.port = t.port),
                            t.query && (r.query = t.query)) :
                        r.host && (r.hostname = h(r.host).host),
                        (this.secure = null != r.secure ? r.secure : e.location && 'https:' === location.protocol),
                        r.hostname && !r.port && (r.port = this.secure ? '443' : '80'),
                        (this.agent = r.agent || !1),
                        (this.hostname = r.hostname || (e.location ? location.hostname : 'localhost')),
                        (this.port = r.port || (e.location && location.port ? location.port : this.secure ? 443 : 80)),
                        (this.query = r.query || {}),
                        'string' == typeof this.query && (this.query = f.decode(this.query)),
                        (this.upgrade = !1 !== r.upgrade),
                        (this.path = (r.path || '/engine.io').replace(/\/$/, '') + '/'),
                        (this.forceJSONP = !!r.forceJSONP),
                        (this.jsonp = !1 !== r.jsonp),
                        (this.forceBase64 = !!r.forceBase64),
                        (this.enablesXDR = !!r.enablesXDR),
                        (this.timestampParam = r.timestampParam || 't'),
                        (this.timestampRequests = r.timestampRequests),
                        (this.transports = r.transports || ['polling', 'websocket']),
                        (this.readyState = ''),
                        (this.writeBuffer = []),
                        (this.prevBufferLen = 0),
                        (this.policyPort = r.policyPort || 843),
                        (this.rememberUpgrade = r.rememberUpgrade || !1),
                        (this.binaryType = null),
                        (this.onlyBinaryUpgrades = r.onlyBinaryUpgrades),
                        (this.perMessageDeflate = !1 !== r.perMessageDeflate && (r.perMessageDeflate || {})), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                        this.perMessageDeflate &&
                        null == this.perMessageDeflate.threshold &&
                        (this.perMessageDeflate.threshold = 1024),
                        (this.pfx = r.pfx || null),
                        (this.key = r.key || null),
                        (this.passphrase = r.passphrase || null),
                        (this.cert = r.cert || null),
                        (this.ca = r.ca || null),
                        (this.ciphers = r.ciphers || null),
                        (this.rejectUnauthorized = void 0 === r.rejectUnauthorized ? null : r.rejectUnauthorized),
                        (this.forceNode = !!r.forceNode);
                    var o = 'object' == typeof e && e;
                    o.global === o &&
                        (r.extraHeaders && Object.keys(r.extraHeaders).length > 0 && (this.extraHeaders = r.extraHeaders),
                            r.localAddress && (this.localAddress = r.localAddress)),
                        (this.id = null),
                        (this.upgrades = null),
                        (this.pingInterval = null),
                        (this.pingTimeout = null),
                        (this.pingIntervalTimer = null),
                        (this.pingTimeoutTimer = null),
                        this.open();
                }

                function o(t) {
                    var e = {};
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                    return e;
                }
                var i = r(21),
                    s = r(35),
                    a = r(3)('engine.io-client:socket'),
                    c = r(42),
                    u = r(27),
                    h = r(2),
                    p = r(43),
                    f = r(36);
                (t.exports = n),
                (n.priorWebsocketSuccess = !1),
                s(n.prototype),
                    (n.protocol = u.protocol),
                    (n.Socket = n),
                    (n.Transport = r(26)),
                    (n.transports = r(21)),
                    (n.parser = r(27)),
                    (n.prototype.createTransport = function(t) {
                        a('creating transport "%s"', t);
                        var e = o(this.query);
                        (e.EIO = u.protocol), (e.transport = t), this.id && (e.sid = this.id);
                        var r = new i[t]({
                            agent: this.agent,
                            hostname: this.hostname,
                            port: this.port,
                            secure: this.secure,
                            path: this.path,
                            query: e,
                            forceJSONP: this.forceJSONP,
                            jsonp: this.jsonp,
                            forceBase64: this.forceBase64,
                            enablesXDR: this.enablesXDR,
                            timestampRequests: this.timestampRequests,
                            timestampParam: this.timestampParam,
                            policyPort: this.policyPort,
                            socket: this,
                            pfx: this.pfx,
                            key: this.key,
                            passphrase: this.passphrase,
                            cert: this.cert,
                            ca: this.ca,
                            ciphers: this.ciphers,
                            rejectUnauthorized: this.rejectUnauthorized,
                            perMessageDeflate: this.perMessageDeflate,
                            extraHeaders: this.extraHeaders,
                            forceNode: this.forceNode,
                            localAddress: this.localAddress,
                        });
                        return r;
                    }),
                    (n.prototype.open = function() {
                        var t;
                        if (this.rememberUpgrade && n.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1)
                            t = 'websocket';
                        else {
                            if (0 === this.transports.length) {
                                var e = this;
                                return void setTimeout(function() {
                                    e.emit('error', 'No transports available');
                                }, 0);
                            }
                            t = this.transports[0];
                        }
                        this.readyState = 'opening';
                        try {
                            t = this.createTransport(t);
                        } catch (t) {
                            return this.transports.shift(), void this.open();
                        }
                        t.open(), this.setTransport(t);
                    }),
                    (n.prototype.setTransport = function(t) {
                        a('setting transport %s', t.name);
                        var e = this;
                        this.transport &&
                            (a('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()),
                            (this.transport = t),
                            t
                            .on('drain', function() {
                                e.onDrain();
                            })
                            .on('packet', function(t) {
                                e.onPacket(t);
                            })
                            .on('error', function(t) {
                                e.onError(t);
                            })
                            .on('close', function() {
                                e.onClose('transport close');
                            });
                    }),
                    (n.prototype.probe = function(t) {
                        function e() {
                            if (f.onlyBinaryUpgrades) {
                                var e = !this.supportsBinary && f.transport.supportsBinary;
                                p = p || e;
                            }
                            p ||
                                (a('probe transport "%s" opened', t),
                                    h.send([{ type: 'ping', data: 'probe' }]),
                                    h.once('packet', function(e) {
                                        if (!p)
                                            if ('pong' === e.type && 'probe' === e.data) {
                                                if ((a('probe transport "%s" pong', t), (f.upgrading = !0), f.emit('upgrading', h), !h)) return;
                                                (n.priorWebsocketSuccess = 'websocket' === h.name),
                                                a('pausing current transport "%s"', f.transport.name),
                                                    f.transport.pause(function() {
                                                        p ||
                                                            ('closed' !== f.readyState &&
                                                                (a('changing transport and sending upgrade packet'),
                                                                    u(),
                                                                    f.setTransport(h),
                                                                    h.send([{ type: 'upgrade' }]),
                                                                    f.emit('upgrade', h),
                                                                    (h = null),
                                                                    (f.upgrading = !1),
                                                                    f.flush()));
                                                    });
                                            } else {
                                                a('probe transport "%s" failed', t);
                                                var r = new Error('probe error');
                                                (r.transport = h.name), f.emit('upgradeError', r);
                                            }
                                    }));
                        }

                        function r() {
                            p || ((p = !0), u(), h.close(), (h = null));
                        }

                        function o(e) {
                            var n = new Error('probe error: ' + e);
                            (n.transport = h.name),
                            r(),
                                a('probe transport "%s" failed because of error: %s', t, e),
                                f.emit('upgradeError', n);
                        }

                        function i() {
                            o('transport closed');
                        }

                        function s() {
                            o('socket closed');
                        }

                        function c(t) {
                            h && t.name !== h.name && (a('"%s" works - aborting "%s"', t.name, h.name), r());
                        }

                        function u() {
                            h.removeListener('open', e),
                                h.removeListener('error', o),
                                h.removeListener('close', i),
                                f.removeListener('close', s),
                                f.removeListener('upgrading', c);
                        }
                        a('probing transport "%s"', t);
                        var h = this.createTransport(t, { probe: 1 }),
                            p = !1,
                            f = this;
                        (n.priorWebsocketSuccess = !1),
                        h.once('open', e),
                            h.once('error', o),
                            h.once('close', i),
                            this.once('close', s),
                            this.once('upgrading', c),
                            h.open();
                    }),
                    (n.prototype.onOpen = function() {
                        if (
                            (a('socket open'),
                                (this.readyState = 'open'),
                                (n.priorWebsocketSuccess = 'websocket' === this.transport.name),
                                this.emit('open'),
                                this.flush(),
                                'open' === this.readyState && this.upgrade && this.transport.pause)
                        ) {
                            a('starting upgrade probes');
                            for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t]);
                        }
                    }),
                    (n.prototype.onPacket = function(t) {
                        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState)
                            switch ((a('socket receive: type "%s", data "%s"', t.type, t.data),
                                this.emit('packet', t),
                                this.emit('heartbeat'),
                                t.type)) {
                                case 'open':
                                    this.onHandshake(p(t.data));
                                    break;
                                case 'pong':
                                    this.setPing(), this.emit('pong');
                                    break;
                                case 'error':
                                    var e = new Error('server error');
                                    (e.code = t.data), this.onError(e);
                                    break;
                                case 'message':
                                    this.emit('data', t.data), this.emit('message', t.data);
                            }
                        else a('packet received with socket readyState "%s"', this.readyState);
                    }),
                    (n.prototype.onHandshake = function(t) {
                        this.emit('handshake', t),
                            (this.id = t.sid),
                            (this.transport.query.sid = t.sid),
                            (this.upgrades = this.filterUpgrades(t.upgrades)),
                            (this.pingInterval = t.pingInterval),
                            (this.pingTimeout = t.pingTimeout),
                            this.onOpen(),
                            'closed' !== this.readyState &&
                            (this.setPing(),
                                this.removeListener('heartbeat', this.onHeartbeat),
                                this.on('heartbeat', this.onHeartbeat));
                    }),
                    (n.prototype.onHeartbeat = function(t) {
                        clearTimeout(this.pingTimeoutTimer);
                        var e = this;
                        e.pingTimeoutTimer = setTimeout(function() {
                            'closed' !== e.readyState && e.onClose('ping timeout');
                        }, t || e.pingInterval + e.pingTimeout);
                    }),
                    (n.prototype.setPing = function() {
                        var t = this;
                        clearTimeout(t.pingIntervalTimer),
                            (t.pingIntervalTimer = setTimeout(function() {
                                a('writing ping packet - expecting pong within %sms', t.pingTimeout),
                                    t.ping(),
                                    t.onHeartbeat(t.pingTimeout);
                            }, t.pingInterval));
                    }),
                    (n.prototype.ping = function() {
                        var t = this;
                        this.sendPacket('ping', function() {
                            t.emit('ping');
                        });
                    }),
                    (n.prototype.onDrain = function() {
                        this.writeBuffer.splice(0, this.prevBufferLen),
                            (this.prevBufferLen = 0),
                            0 === this.writeBuffer.length ? this.emit('drain') : this.flush();
                    }),
                    (n.prototype.flush = function() {
                        'closed' !== this.readyState &&
                            this.transport.writable &&
                            !this.upgrading &&
                            this.writeBuffer.length &&
                            (a('flushing %d packets in socket', this.writeBuffer.length),
                                this.transport.send(this.writeBuffer),
                                (this.prevBufferLen = this.writeBuffer.length),
                                this.emit('flush'));
                    }),
                    (n.prototype.write = n.prototype.send = function(t, e, r) {
                        return this.sendPacket('message', t, e, r), this;
                    }),
                    (n.prototype.sendPacket = function(t, e, r, n) {
                        if (
                            ('function' == typeof e && ((n = e), (e = void 0)),
                                'function' == typeof r && ((n = r), (r = null)),
                                'closing' !== this.readyState && 'closed' !== this.readyState)
                        ) {
                            (r = r || {}), (r.compress = !1 !== r.compress);
                            var o = { type: t, data: e, options: r };
                            this.emit('packetCreate', o), this.writeBuffer.push(o), n && this.once('flush', n), this.flush();
                        }
                    }),
                    (n.prototype.close = function() {
                        function t() {
                            n.onClose('forced close'), a('socket closing - telling transport to close'), n.transport.close();
                        }

                        function e() {
                            n.removeListener('upgrade', e), n.removeListener('upgradeError', e), t();
                        }

                        function r() {
                            n.once('upgrade', e), n.once('upgradeError', e);
                        }
                        if ('opening' === this.readyState || 'open' === this.readyState) {
                            this.readyState = 'closing';
                            var n = this;
                            this.writeBuffer.length ?
                                this.once('drain', function() {
                                    this.upgrading ? r() : t();
                                }) :
                                this.upgrading ? r() : t();
                        }
                        return this;
                    }),
                    (n.prototype.onError = function(t) {
                        a('socket error %j', t),
                            (n.priorWebsocketSuccess = !1),
                            this.emit('error', t),
                            this.onClose('transport error', t);
                    }),
                    (n.prototype.onClose = function(t, e) {
                        if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
                            a('socket close with reason: "%s"', t);
                            var r = this;
                            clearTimeout(this.pingIntervalTimer),
                                clearTimeout(this.pingTimeoutTimer),
                                this.transport.removeAllListeners('close'),
                                this.transport.close(),
                                this.transport.removeAllListeners(),
                                (this.readyState = 'closed'),
                                (this.id = null),
                                this.emit('close', t, e),
                                (r.writeBuffer = []),
                                (r.prevBufferLen = 0);
                        }
                    }),
                    (n.prototype.filterUpgrades = function(t) {
                        for (var e = [], r = 0, n = t.length; r < n; r++) ~c(this.transports, t[r]) && e.push(t[r]);
                        return e;
                    });
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, r) {
            (function(t) {
                function n(e) {
                    var r,
                        n = !1,
                        a = !1,
                        c = !1 !== e.jsonp;
                    if (t.location) {
                        var u = 'https:' === location.protocol,
                            h = location.port;
                        h || (h = u ? 443 : 80), (n = e.hostname !== location.hostname || h !== e.port), (a = e.secure !== u);
                    }
                    if (((e.xdomain = n), (e.xscheme = a), (r = new o(e)), 'open' in r && !e.forceJSONP)) return new i(e);
                    if (!c) throw new Error('JSONP disabled');
                    return new s(e);
                }
                var o = r(22),
                    i = r(24),
                    s = r(39),
                    a = r(40);
                (e.polling = n), (e.websocket = a);
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, r) {
            (function(e) {
                var n = r(23);
                t.exports = function(t) {
                    var r = t.xdomain,
                        o = t.xscheme,
                        i = t.enablesXDR;
                    try {
                        if ('undefined' != typeof XMLHttpRequest && (!r || n)) return new XMLHttpRequest();
                    } catch (t) {}
                    try {
                        if ('undefined' != typeof XDomainRequest && !o && i) return new XDomainRequest();
                    } catch (t) {}
                    if (!r)
                        try {
                            return new e[(['Active'].concat('Object').join('X'))]('Microsoft.XMLHTTP');
                        } catch (t) {}
                };
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            try {
                t.exports = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
            } catch (e) {
                t.exports = !1;
            }
        },
        function(t, e, r) {
            (function(e) {
                function n() {}

                function o(t) {
                    if ((c.call(this, t), (this.requestTimeout = t.requestTimeout), e.location)) {
                        var r = 'https:' === location.protocol,
                            n = location.port;
                        n || (n = r ? 443 : 80),
                            (this.xd = t.hostname !== e.location.hostname || n !== t.port),
                            (this.xs = t.secure !== r);
                    } else this.extraHeaders = t.extraHeaders;
                }

                function i(t) {
                    (this.method = t.method || 'GET'),
                    (this.uri = t.uri),
                    (this.xd = !!t.xd),
                    (this.xs = !!t.xs),
                    (this.async = !1 !== t.async),
                    (this.data = void 0 !== t.data ? t.data : null),
                    (this.agent = t.agent),
                    (this.isBinary = t.isBinary),
                    (this.supportsBinary = t.supportsBinary),
                    (this.enablesXDR = t.enablesXDR),
                    (this.requestTimeout = t.requestTimeout),
                    (this.pfx = t.pfx),
                    (this.key = t.key),
                    (this.passphrase = t.passphrase),
                    (this.cert = t.cert),
                    (this.ca = t.ca),
                    (this.ciphers = t.ciphers),
                    (this.rejectUnauthorized = t.rejectUnauthorized),
                    (this.extraHeaders = t.extraHeaders),
                    this.create();
                }

                function s() {
                    for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort();
                }
                var a = r(22),
                    c = r(25),
                    u = r(35),
                    h = r(37),
                    p = r(3)('engine.io-client:polling-xhr');
                (t.exports = o),
                (t.exports.Request = i),
                h(o, c),
                    (o.prototype.supportsBinary = !0),
                    (o.prototype.request = function(t) {
                        return (
                            (t = t || {}),
                            (t.uri = this.uri()),
                            (t.xd = this.xd),
                            (t.xs = this.xs),
                            (t.agent = this.agent || !1),
                            (t.supportsBinary = this.supportsBinary),
                            (t.enablesXDR = this.enablesXDR),
                            (t.pfx = this.pfx),
                            (t.key = this.key),
                            (t.passphrase = this.passphrase),
                            (t.cert = this.cert),
                            (t.ca = this.ca),
                            (t.ciphers = this.ciphers),
                            (t.rejectUnauthorized = this.rejectUnauthorized),
                            (t.requestTimeout = this.requestTimeout),
                            (t.extraHeaders = this.extraHeaders),
                            new i(t)
                        );
                    }),
                    (o.prototype.doWrite = function(t, e) {
                        var r = 'string' != typeof t && void 0 !== t,
                            n = this.request({ method: 'POST', data: t, isBinary: r }),
                            o = this;
                        n.on('success', e),
                            n.on('error', function(t) {
                                o.onError('xhr post error', t);
                            }),
                            (this.sendXhr = n);
                    }),
                    (o.prototype.doPoll = function() {
                        p('xhr poll');
                        var t = this.request(),
                            e = this;
                        t.on('data', function(t) {
                                e.onData(t);
                            }),
                            t.on('error', function(t) {
                                e.onError('xhr poll error', t);
                            }),
                            (this.pollXhr = t);
                    }),
                    u(i.prototype),
                    (i.prototype.create = function() {
                        var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
                        (t.pfx = this.pfx),
                        (t.key = this.key),
                        (t.passphrase = this.passphrase),
                        (t.cert = this.cert),
                        (t.ca = this.ca),
                        (t.ciphers = this.ciphers),
                        (t.rejectUnauthorized = this.rejectUnauthorized);
                        var r = (this.xhr = new a(t)),
                            n = this;
                        try {
                            p('xhr open %s: %s', this.method, this.uri), r.open(this.method, this.uri, this.async);
                            try {
                                if (this.extraHeaders) {
                                    r.setDisableHeaderCheck(!0);
                                    for (var o in this.extraHeaders)
                                        this.extraHeaders.hasOwnProperty(o) && r.setRequestHeader(o, this.extraHeaders[o]);
                                }
                            } catch (t) {}
                            if ((this.supportsBinary && (r.responseType = 'arraybuffer'), 'POST' === this.method))
                                try {
                                    this.isBinary ?
                                        r.setRequestHeader('Content-type', 'application/octet-stream') :
                                        r.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                                } catch (t) {}
                            try {
                                r.setRequestHeader('Accept', '*/*');
                            } catch (t) {}
                            'withCredentials' in r && (r.withCredentials = !0),
                                this.requestTimeout && (r.timeout = this.requestTimeout),
                                this.hasXDR() ?
                                ((r.onload = function() {
                                        n.onLoad();
                                    }),
                                    (r.onerror = function() {
                                        n.onError(r.responseText);
                                    })) :
                                (r.onreadystatechange = function() {
                                    4 === r.readyState &&
                                        (200 === r.status || 1223 === r.status ?
                                            n.onLoad() :
                                            setTimeout(function() {
                                                n.onError(r.status);
                                            }, 0));
                                }),
                                p('xhr data %s', this.data),
                                r.send(this.data);
                        } catch (t) {
                            return void setTimeout(function() {
                                n.onError(t);
                            }, 0);
                        }
                        e.document && ((this.index = i.requestsCount++), (i.requests[this.index] = this));
                    }),
                    (i.prototype.onSuccess = function() {
                        this.emit('success'), this.cleanup();
                    }),
                    (i.prototype.onData = function(t) {
                        this.emit('data', t), this.onSuccess();
                    }),
                    (i.prototype.onError = function(t) {
                        this.emit('error', t), this.cleanup(!0);
                    }),
                    (i.prototype.cleanup = function(t) {
                        if ('undefined' != typeof this.xhr && null !== this.xhr) {
                            if ((this.hasXDR() ? (this.xhr.onload = this.xhr.onerror = n) : (this.xhr.onreadystatechange = n), t))
                                try {
                                    this.xhr.abort();
                                } catch (t) {}
                            e.document && delete i.requests[this.index], (this.xhr = null);
                        }
                    }),
                    (i.prototype.onLoad = function() {
                        var t;
                        try {
                            var e;
                            try {
                                e = this.xhr.getResponseHeader('Content-Type').split(';')[0];
                            } catch (t) {}
                            if ('application/octet-stream' === e) t = this.xhr.response || this.xhr.responseText;
                            else if (this.supportsBinary)
                                try {
                                    t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                                } catch (e) {
                                    for (var r = new Uint8Array(this.xhr.response), n = [], o = 0, i = r.length; o < i; o++) n.push(r[o]);
                                    t = String.fromCharCode.apply(null, n);
                                }
                            else t = this.xhr.responseText;
                        } catch (t) {
                            this.onError(t);
                        }
                        null != t && this.onData(t);
                    }),
                    (i.prototype.hasXDR = function() {
                        return 'undefined' != typeof e.XDomainRequest && !this.xs && this.enablesXDR;
                    }),
                    (i.prototype.abort = function() {
                        this.cleanup();
                    }),
                    (i.requestsCount = 0),
                    (i.requests = {}),
                    e.document &&
                    (e.attachEvent ?
                        e.attachEvent('onunload', s) :
                        e.addEventListener && e.addEventListener('beforeunload', s, !1));
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, r) {
            function n(t) {
                var e = t && t.forceBase64;
                (h && !e) || (this.supportsBinary = !1), o.call(this, t);
            }
            var o = r(26),
                i = r(36),
                s = r(27),
                a = r(37),
                c = r(38),
                u = r(3)('engine.io-client:polling');
            t.exports = n;
            var h = (function() {
                var t = r(22),
                    e = new t({ xdomain: !1 });
                return null != e.responseType;
            })();
            a(n, o),
                (n.prototype.name = 'polling'),
                (n.prototype.doOpen = function() {
                    this.poll();
                }),
                (n.prototype.pause = function(t) {
                    function e() {
                        u('paused'), (r.readyState = 'paused'), t();
                    }
                    var r = this;
                    if (((this.readyState = 'pausing'), this.polling || !this.writable)) {
                        var n = 0;
                        this.polling &&
                            (u('we are currently polling - waiting to pause'),
                                n++,
                                this.once('pollComplete', function() {
                                    u('pre-pause polling complete'), --n || e();
                                })),
                            this.writable ||
                            (u('we are currently writing - waiting to pause'),
                                n++,
                                this.once('drain', function() {
                                    u('pre-pause writing complete'), --n || e();
                                }));
                    } else e();
                }),
                (n.prototype.poll = function() {
                    u('polling'), (this.polling = !0), this.doPoll(), this.emit('poll');
                }),
                (n.prototype.onData = function(t) {
                    var e = this;
                    u('polling got data %s', t);
                    var r = function(t, r, n) {
                        return (
                            'opening' === e.readyState && e.onOpen(), 'close' === t.type ? (e.onClose(), !1) : void e.onPacket(t)
                        );
                    };
                    s.decodePayload(t, this.socket.binaryType, r),
                        'closed' !== this.readyState &&
                        ((this.polling = !1),
                            this.emit('pollComplete'),
                            'open' === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState));
                }),
                (n.prototype.doClose = function() {
                    function t() {
                        u('writing close packet'), e.write([{ type: 'close' }]);
                    }
                    var e = this;
                    'open' === this.readyState ?
                        (u('transport open - closing'), t()) :
                        (u('transport not open - deferring close'), this.once('open', t));
                }),
                (n.prototype.write = function(t) {
                    var e = this;
                    this.writable = !1;
                    var r = function() {
                        (e.writable = !0), e.emit('drain');
                    };
                    s.encodePayload(t, this.supportsBinary, function(t) {
                        e.doWrite(t, r);
                    });
                }),
                (n.prototype.uri = function() {
                    var t = this.query || {},
                        e = this.secure ? 'https' : 'http',
                        r = '';
                    !1 !== this.timestampRequests && (t[this.timestampParam] = c()),
                        this.supportsBinary || t.sid || (t.b64 = 1),
                        (t = i.encode(t)),
                        this.port &&
                        (('https' === e && 443 !== Number(this.port)) || ('http' === e && 80 !== Number(this.port))) &&
                        (r = ':' + this.port),
                        t.length && (t = '?' + t);
                    var n = this.hostname.indexOf(':') !== -1;
                    return e + '://' + (n ? '[' + this.hostname + ']' : this.hostname) + r + this.path + t;
                });
        },
        function(t, e, r) {
            function n(t) {
                (this.path = t.path),
                (this.hostname = t.hostname),
                (this.port = t.port),
                (this.secure = t.secure),
                (this.query = t.query),
                (this.timestampParam = t.timestampParam),
                (this.timestampRequests = t.timestampRequests),
                (this.readyState = ''),
                (this.agent = t.agent || !1),
                (this.socket = t.socket),
                (this.enablesXDR = t.enablesXDR),
                (this.pfx = t.pfx),
                (this.key = t.key),
                (this.passphrase = t.passphrase),
                (this.cert = t.cert),
                (this.ca = t.ca),
                (this.ciphers = t.ciphers),
                (this.rejectUnauthorized = t.rejectUnauthorized),
                (this.forceNode = t.forceNode),
                (this.extraHeaders = t.extraHeaders),
                (this.localAddress = t.localAddress);
            }
            var o = r(27),
                i = r(35);
            (t.exports = n),
            i(n.prototype),
                (n.prototype.onError = function(t, e) {
                    var r = new Error(t);
                    return (r.type = 'TransportError'), (r.description = e), this.emit('error', r), this;
                }),
                (n.prototype.open = function() {
                    return (
                        ('closed' !== this.readyState && '' !== this.readyState) || ((this.readyState = 'opening'), this.doOpen()),
                        this
                    );
                }),
                (n.prototype.close = function() {
                    return (
                        ('opening' !== this.readyState && 'open' !== this.readyState) || (this.doClose(), this.onClose()), this
                    );
                }),
                (n.prototype.send = function(t) {
                    if ('open' !== this.readyState) throw new Error('Transport not open');
                    this.write(t);
                }),
                (n.prototype.onOpen = function() {
                    (this.readyState = 'open'), (this.writable = !0), this.emit('open');
                }),
                (n.prototype.onData = function(t) {
                    var e = o.decodePacket(t, this.socket.binaryType);
                    this.onPacket(e);
                }),
                (n.prototype.onPacket = function(t) {
                    this.emit('packet', t);
                }),
                (n.prototype.onClose = function() {
                    (this.readyState = 'closed'), this.emit('close');
                });
        },
        function(t, e, r) {
            (function(t) {
                function n(t, r) {
                    var n = 'b' + e.packets[t.type] + t.data.data;
                    return r(n);
                }

                function o(t, r, n) {
                    if (!r) return e.encodeBase64Packet(t, n);
                    var o = t.data,
                        i = new Uint8Array(o),
                        s = new Uint8Array(1 + o.byteLength);
                    s[0] = v[t.type];
                    for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
                    return n(s.buffer);
                }

                function i(t, r, n) {
                    if (!r) return e.encodeBase64Packet(t, n);
                    var o = new FileReader();
                    return (
                        (o.onload = function() {
                            (t.data = o.result), e.encodePacket(t, r, !0, n);
                        }),
                        o.readAsArrayBuffer(t.data)
                    );
                }

                function s(t, r, n) {
                    if (!r) return e.encodeBase64Packet(t, n);
                    if (m) return i(t, r, n);
                    var o = new Uint8Array(1);
                    o[0] = v[t.type];
                    var s = new k([o.buffer, t.data]);
                    return n(s);
                }

                function a(t) {
                    try {
                        t = d.decode(t);
                    } catch (t) {
                        return !1;
                    }
                    return t;
                }

                function c(t, e, r) {
                    for (
                        var n = new Array(t.length),
                            o = l(t.length, r),
                            i = function(t, r, o) {
                                e(r, function(e, r) {
                                    (n[t] = r), o(e, n);
                                });
                            },
                            s = 0; s < t.length; s++
                    )
                        i(s, t[s], o);
                }
                var u,
                    h = r(28),
                    p = r(29),
                    f = r(30),
                    l = r(31),
                    d = r(32);
                t && t.ArrayBuffer && (u = r(33));
                var y = 'undefined' != typeof navigator && /Android/i.test(navigator.userAgent),
                    g = 'undefined' != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                    m = y || g;
                e.protocol = 3;
                var v = (e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 }),
                    b = h(v),
                    w = { type: 'error', data: 'parser error' },
                    k = r(34);
                (e.encodePacket = function(e, r, i, a) {
                    'function' == typeof r && ((a = r), (r = !1)), 'function' == typeof i && ((a = i), (i = null));
                    var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
                    if (t.ArrayBuffer && c instanceof ArrayBuffer) return o(e, r, a);
                    if (k && c instanceof t.Blob) return s(e, r, a);
                    if (c && c.base64) return n(e, a);
                    var u = v[e.type];
                    return void 0 !== e.data && (u += i ? d.encode(String(e.data)) : String(e.data)), a('' + u);
                }),
                (e.encodeBase64Packet = function(r, n) {
                    var o = 'b' + e.packets[r.type];
                    if (k && r.data instanceof t.Blob) {
                        var i = new FileReader();
                        return (
                            (i.onload = function() {
                                var t = i.result.split(',')[1];
                                n(o + t);
                            }),
                            i.readAsDataURL(r.data)
                        );
                    }
                    var s;
                    try {
                        s = String.fromCharCode.apply(null, new Uint8Array(r.data));
                    } catch (t) {
                        for (var a = new Uint8Array(r.data), c = new Array(a.length), u = 0; u < a.length; u++) c[u] = a[u];
                        s = String.fromCharCode.apply(null, c);
                    }
                    return (o += t.btoa(s)), n(o);
                }),
                (e.decodePacket = function(t, r, n) {
                    if (void 0 === t) return w;
                    if ('string' == typeof t) {
                        if ('b' == t.charAt(0)) return e.decodeBase64Packet(t.substr(1), r);
                        if (n && ((t = a(t)), t === !1)) return w;
                        var o = t.charAt(0);
                        return Number(o) == o && b[o] ?
                            t.length > 1 ? { type: b[o], data: t.substring(1) } : { type: b[o] } :
                            w;
                    }
                    var i = new Uint8Array(t),
                        o = i[0],
                        s = f(t, 1);
                    return k && 'blob' === r && (s = new k([s])), { type: b[o], data: s };
                }),
                (e.decodeBase64Packet = function(t, e) {
                    var r = b[t.charAt(0)];
                    if (!u) return { type: r, data: { base64: !0, data: t.substr(1) } };
                    var n = u.decode(t.substr(1));
                    return 'blob' === e && k && (n = new k([n])), { type: r, data: n };
                }),
                (e.encodePayload = function(t, r, n) {
                    function o(t) {
                        return t.length + ':' + t;
                    }

                    function i(t, n) {
                        e.encodePacket(t, !!s && r, !0, function(t) {
                            n(null, o(t));
                        });
                    }
                    'function' == typeof r && ((n = r), (r = null));
                    var s = p(t);
                    return r && s ?
                        k && !m ? e.encodePayloadAsBlob(t, n) : e.encodePayloadAsArrayBuffer(t, n) :
                        t.length ?
                        void c(t, i, function(t, e) {
                            return n(e.join(''));
                        }) :
                        n('0:');
                }),
                (e.decodePayload = function(t, r, n) {
                    if ('string' != typeof t) return e.decodePayloadAsBinary(t, r, n);
                    'function' == typeof r && ((n = r), (r = null));
                    var o;
                    if ('' == t) return n(w, 0, 1);
                    for (var i, s, a = '', c = 0, u = t.length; c < u; c++) {
                        var h = t.charAt(c);
                        if (':' != h) a += h;
                        else {
                            if ('' == a || a != (i = Number(a))) return n(w, 0, 1);
                            if (((s = t.substr(c + 1, i)), a != s.length)) return n(w, 0, 1);
                            if (s.length) {
                                if (((o = e.decodePacket(s, r, !0)), w.type == o.type && w.data == o.data)) return n(w, 0, 1);
                                var p = n(o, c + i, u);
                                if (!1 === p) return;
                            }
                            (c += i), (a = '');
                        }
                    }
                    return '' != a ? n(w, 0, 1) : void 0;
                }),
                (e.encodePayloadAsArrayBuffer = function(t, r) {
                    function n(t, r) {
                        e.encodePacket(t, !0, !0, function(t) {
                            return r(null, t);
                        });
                    }
                    return t.length ?
                        void c(t, n, function(t, e) {
                            var n = e.reduce(function(t, e) {
                                    var r;
                                    return (r = 'string' == typeof e ? e.length : e.byteLength), t + r.toString().length + r + 2;
                                }, 0),
                                o = new Uint8Array(n),
                                i = 0;
                            return (
                                e.forEach(function(t) {
                                    var e = 'string' == typeof t,
                                        r = t;
                                    if (e) {
                                        for (var n = new Uint8Array(t.length), s = 0; s < t.length; s++) n[s] = t.charCodeAt(s);
                                        r = n.buffer;
                                    }
                                    e ? (o[i++] = 0) : (o[i++] = 1);
                                    for (var a = r.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                                    o[i++] = 255;
                                    for (var n = new Uint8Array(r), s = 0; s < n.length; s++) o[i++] = n[s];
                                }),
                                r(o.buffer)
                            );
                        }) :
                        r(new ArrayBuffer(0));
                }),
                (e.encodePayloadAsBlob = function(t, r) {
                    function n(t, r) {
                        e.encodePacket(t, !0, !0, function(t) {
                            var e = new Uint8Array(1);
                            if (((e[0] = 1), 'string' == typeof t)) {
                                for (var n = new Uint8Array(t.length), o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
                                (t = n.buffer), (e[0] = 0);
                            }
                            for (
                                var i = t instanceof ArrayBuffer ? t.byteLength : t.size,
                                    s = i.toString(),
                                    a = new Uint8Array(s.length + 1),
                                    o = 0; o < s.length; o++
                            )
                                a[o] = parseInt(s[o]);
                            if (((a[s.length] = 255), k)) {
                                var c = new k([e.buffer, a.buffer, t]);
                                r(null, c);
                            }
                        });
                    }
                    c(t, n, function(t, e) {
                        return r(new k(e));
                    });
                }),
                (e.decodePayloadAsBinary = function(t, r, n) {
                    'function' == typeof r && ((n = r), (r = null));
                    for (var o = t, i = [], s = !1; o.byteLength > 0;) {
                        for (var a = new Uint8Array(o), c = 0 === a[0], u = '', h = 1; 255 != a[h]; h++) {
                            if (u.length > 310) {
                                s = !0;
                                break;
                            }
                            u += a[h];
                        }
                        if (s) return n(w, 0, 1);
                        (o = f(o, 2 + u.length)), (u = parseInt(u));
                        var p = f(o, 0, u);
                        if (c)
                            try {
                                p = String.fromCharCode.apply(null, new Uint8Array(p));
                            } catch (t) {
                                var l = new Uint8Array(p);
                                p = '';
                                for (var h = 0; h < l.length; h++) p += String.fromCharCode(l[h]);
                            }
                        i.push(p), (o = f(o, u));
                    }
                    var d = i.length;
                    i.forEach(function(t, o) {
                        n(e.decodePacket(t, r, !0), o, d);
                    });
                });
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            t.exports =
                Object.keys ||
                function(t) {
                    var e = [],
                        r = Object.prototype.hasOwnProperty;
                    for (var n in t) r.call(t, n) && e.push(n);
                    return e;
                };
        },
        function(t, e, r) {
            (function(e) {
                function n(t) {
                    function r(t) {
                        if (!t) return !1;
                        if (
                            (e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t)) ||
                            (e.ArrayBuffer && t instanceof ArrayBuffer) ||
                            (e.Blob && t instanceof Blob) ||
                            (e.File && t instanceof File)
                        )
                            return !0;
                        if (o(t)) {
                            for (var n = 0; n < t.length; n++)
                                if (r(t[n])) return !0;
                        } else if (t && 'object' == typeof t) {
                            t.toJSON && 'function' == typeof t.toJSON && (t = t.toJSON());
                            for (var i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i) && r(t[i])) return !0;
                        }
                        return !1;
                    }
                    return r(t);
                }
                var o = r(15);
                t.exports = n;
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            t.exports = function(t, e, r) {
                var n = t.byteLength;
                if (((e = e || 0), (r = r || n), t.slice)) return t.slice(e, r);
                if ((e < 0 && (e += n), r < 0 && (r += n), r > n && (r = n), e >= n || e >= r || 0 === n))
                    return new ArrayBuffer(0);
                for (var o = new Uint8Array(t), i = new Uint8Array(r - e), s = e, a = 0; s < r; s++, a++) i[a] = o[s];
                return i.buffer;
            };
        },
        function(t, e) {
            function r(t, e, r) {
                function o(t, n) {
                    if (o.count <= 0) throw new Error('after called too many times');
                    --o.count, t ? ((i = !0), e(t), (e = r)) : 0 !== o.count || i || e(null, n);
                }
                var i = !1;
                return (r = r || n), (o.count = t), 0 === t ? e() : o;
            }

            function n() {}
            t.exports = r;
        },
        function(t, e, r) {
            var n;
            (function(t, o) {
                !(function(i) {
                    function s(t) {
                        for (var e, r, n = [], o = 0, i = t.length; o < i;)
                            (e = t.charCodeAt(o++)),
                            e >= 55296 && e <= 56319 && o < i ?
                            ((r = t.charCodeAt(o++)),
                                56320 == (64512 & r) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), o--)) :
                            n.push(e);
                        return n;
                    }

                    function a(t) {
                        for (var e, r = t.length, n = -1, o = ''; ++n < r;)
                            (e = t[n]),
                            e > 65535 && ((e -= 65536), (o += b(((e >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))),
                            (o += b(e));
                        return o;
                    }

                    function c(t, e) {
                        return b(((t >> e) & 63) | 128);
                    }

                    function u(t) {
                        if (0 == (4294967168 & t)) return b(t);
                        var e = '';
                        return (
                            0 == (4294965248 & t) ?
                            (e = b(((t >> 6) & 31) | 192)) :
                            0 == (4294901760 & t) ?
                            ((e = b(((t >> 12) & 15) | 224)), (e += c(t, 6))) :
                            0 == (4292870144 & t) && ((e = b(((t >> 18) & 7) | 240)), (e += c(t, 12)), (e += c(t, 6))),
                            (e += b((63 & t) | 128))
                        );
                    }

                    function h(t) {
                        for (var e, r = s(t), n = r.length, o = -1, i = ''; ++o < n;)(e = r[o]), (i += u(e));
                        return i;
                    }

                    function p() {
                        if (v >= m) throw Error('Invalid byte index');
                        var t = 255 & g[v];
                        if ((v++, 128 == (192 & t))) return 63 & t;
                        throw Error('Invalid continuation byte');
                    }

                    function f() {
                        var t, e, r, n, o;
                        if (v > m) throw Error('Invalid byte index');
                        if (v == m) return !1;
                        if (((t = 255 & g[v]), v++, 0 == (128 & t))) return t;
                        if (192 == (224 & t)) {
                            var e = p();
                            if (((o = ((31 & t) << 6) | e), o >= 128)) return o;
                            throw Error('Invalid continuation byte');
                        }
                        if (224 == (240 & t)) {
                            if (((e = p()), (r = p()), (o = ((15 & t) << 12) | (e << 6) | r), o >= 2048)) return o;
                            throw Error('Invalid continuation byte');
                        }
                        if (
                            240 == (248 & t) &&
                            ((e = p()),
                                (r = p()),
                                (n = p()),
                                (o = ((15 & t) << 18) | (e << 12) | (r << 6) | n),
                                o >= 65536 && o <= 1114111)
                        )
                            return o;
                        throw Error('Invalid WTF-8 detected');
                    }

                    function l(t) {
                        (g = s(t)), (m = g.length), (v = 0);
                        for (var e, r = [];
                            (e = f()) !== !1;) r.push(e);
                        return a(r);
                    }
                    var d = 'object' == typeof e && e,
                        y = ('object' == typeof t && t && t.exports == d && t, 'object' == typeof o && o);
                    (y.global !== y && y.window !== y) || (i = y);
                    var g,
                        m,
                        v,
                        b = String.fromCharCode,
                        w = { version: '1.0.0', encode: h, decode: l };
                    (n = function() {
                        return w;
                    }.call(e, r, e, t)), !(void 0 !== n && (t.exports = n));
                })(this);
            }.call(
                e,
                r(12)(t),
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {
            !(function() {
                'use strict';
                for (
                    var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', r = new Uint8Array(256), n = 0; n < t.length; n++
                )
                    r[t.charCodeAt(n)] = n;
                (e.encode = function(e) {
                    var r,
                        n = new Uint8Array(e),
                        o = n.length,
                        i = '';
                    for (r = 0; r < o; r += 3)
                        (i += t[n[r] >> 2]),
                        (i += t[((3 & n[r]) << 4) | (n[r + 1] >> 4)]),
                        (i += t[((15 & n[r + 1]) << 2) | (n[r + 2] >> 6)]),
                        (i += t[63 & n[r + 2]]);
                    return (
                        o % 3 === 2 ?
                        (i = i.substring(0, i.length - 1) + '=') :
                        o % 3 === 1 && (i = i.substring(0, i.length - 2) + '=='),
                        i
                    );
                }),
                (e.decode = function(t) {
                    var e,
                        n,
                        o,
                        i,
                        s,
                        a = 0.75 * t.length,
                        c = t.length,
                        u = 0;
                    '=' === t[t.length - 1] && (a--, '=' === t[t.length - 2] && a--);
                    var h = new ArrayBuffer(a),
                        p = new Uint8Array(h);
                    for (e = 0; e < c; e += 4)
                        (n = r[t.charCodeAt(e)]),
                        (o = r[t.charCodeAt(e + 1)]),
                        (i = r[t.charCodeAt(e + 2)]),
                        (s = r[t.charCodeAt(e + 3)]),
                        (p[u++] = (n << 2) | (o >> 4)),
                        (p[u++] = ((15 & o) << 4) | (i >> 2)),
                        (p[u++] = ((3 & i) << 6) | (63 & s));
                    return h;
                });
            })();
        },
        function(t, e) {
            (function(e) {
                function r(t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        if (r.buffer instanceof ArrayBuffer) {
                            var n = r.buffer;
                            if (r.byteLength !== n.byteLength) {
                                var o = new Uint8Array(r.byteLength);
                                o.set(new Uint8Array(n, r.byteOffset, r.byteLength)), (n = o.buffer);
                            }
                            t[e] = n;
                        }
                    }
                }

                function n(t, e) {
                    e = e || {};
                    var n = new i();
                    r(t);
                    for (var o = 0; o < t.length; o++) n.append(t[o]);
                    return e.type ? n.getBlob(e.type) : n.getBlob();
                }

                function o(t, e) {
                    return r(t), new Blob(t, e || {});
                }
                var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
                    s = (function() {
                        try {
                            var t = new Blob(['hi']);
                            return 2 === t.size;
                        } catch (t) {
                            return !1;
                        }
                    })(),
                    a =
                    s &&
                    (function() {
                        try {
                            var t = new Blob([new Uint8Array([1, 2])]);
                            return 2 === t.size;
                        } catch (t) {
                            return !1;
                        }
                    })(),
                    c = i && i.prototype.append && i.prototype.getBlob;
                t.exports = (function() {
                    return s ? (a ? e.Blob : o) : c ? n : void 0;
                })();
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, r) {
            function n(t) {
                if (t) return o(t);
            }

            function o(t) {
                for (var e in n.prototype) t[e] = n.prototype[e];
                return t;
            }
            (t.exports = n),
            (n.prototype.on = n.prototype.addEventListener = function(t, e) {
                return (
                    (this._callbacks = this._callbacks || {}),
                    (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e),
                    this
                );
            }),
            (n.prototype.once = function(t, e) {
                function r() {
                    this.off(t, r), e.apply(this, arguments);
                }
                return (r.fn = e), this.on(t, r), this;
            }),
            (n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(
                t,
                e
            ) {
                if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
                var r = this._callbacks['$' + t];
                if (!r) return this;
                if (1 == arguments.length) return delete this._callbacks['$' + t], this;
                for (var n, o = 0; o < r.length; o++)
                    if (((n = r[o]), n === e || n.fn === e)) {
                        r.splice(o, 1);
                        break;
                    }
                return this;
            }),
            (n.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    r = this._callbacks['$' + t];
                if (r) {
                    r = r.slice(0);
                    for (var n = 0, o = r.length; n < o; ++n) r[n].apply(this, e);
                }
                return this;
            }),
            (n.prototype.listeners = function(t) {
                return (this._callbacks = this._callbacks || {}), this._callbacks['$' + t] || [];
            }),
            (n.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length;
            });
        },
        function(t, e) {
            (e.encode = function(t) {
                var e = '';
                for (var r in t)
                    t.hasOwnProperty(r) &&
                    (e.length && (e += '&'), (e += encodeURIComponent(r) + '=' + encodeURIComponent(t[r])));
                return e;
            }),
            (e.decode = function(t) {
                for (var e = {}, r = t.split('&'), n = 0, o = r.length; n < o; n++) {
                    var i = r[n].split('=');
                    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
                }
                return e;
            });
        },
        function(t, e) {
            t.exports = function(t, e) {
                var r = function() {};
                (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
            };
        },
        function(t, e) {
            'use strict';

            function r(t) {
                var e = '';
                do(e = s[t % a] + e), (t = Math.floor(t / a));
                while (t > 0);
                return e;
            }

            function n(t) {
                var e = 0;
                for (h = 0; h < t.length; h++) e = e * a + c[t.charAt(h)];
                return e;
            }

            function o() {
                var t = r(+new Date());
                return t !== i ? ((u = 0), (i = t)) : t + '.' + r(u++);
            }
            for (
                var i,
                    s = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
                    a = 64,
                    c = {},
                    u = 0,
                    h = 0; h < a; h++
            )
                c[s[h]] = h;
            (o.encode = r), (o.decode = n), (t.exports = o);
        },
        function(t, e, r) {
            (function(e) {
                function n() {}

                function o(t) {
                    i.call(this, t),
                        (this.query = this.query || {}),
                        a || (e.___eio || (e.___eio = []), (a = e.___eio)),
                        (this.index = a.length);
                    var r = this;
                    a.push(function(t) {
                            r.onData(t);
                        }),
                        (this.query.j = this.index),
                        e.document &&
                        e.addEventListener &&
                        e.addEventListener(
                            'beforeunload',
                            function() {
                                r.script && (r.script.onerror = n);
                            }, !1
                        );
                }
                var i = r(25),
                    s = r(37);
                t.exports = o;
                var a,
                    c = /\n/g,
                    u = /\\n/g;
                s(o, i),
                    (o.prototype.supportsBinary = !1),
                    (o.prototype.doClose = function() {
                        this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)),
                            this.form && (this.form.parentNode.removeChild(this.form), (this.form = null), (this.iframe = null)),
                            i.prototype.doClose.call(this);
                    }),
                    (o.prototype.doPoll = function() {
                        var t = this,
                            e = document.createElement('script');
                        this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)),
                            (e.async = !0),
                            (e.src = this.uri()),
                            (e.onerror = function(e) {
                                t.onError('jsonp poll error', e);
                            });
                        var r = document.getElementsByTagName('script')[0];
                        r ? r.parentNode.insertBefore(e, r) : (document.head || document.body).appendChild(e), (this.script = e);
                        var n = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
                        n &&
                            setTimeout(function() {
                                var t = document.createElement('iframe');
                                document.body.appendChild(t), document.body.removeChild(t);
                            }, 100);
                    }),
                    (o.prototype.doWrite = function(t, e) {
                        function r() {
                            n(), e();
                        }

                        function n() {
                            if (o.iframe)
                                try {
                                    o.form.removeChild(o.iframe);
                                } catch (t) {
                                    o.onError('jsonp polling iframe removal error', t);
                                }
                            try {
                                var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                                i = document.createElement(t);
                            } catch (t) {
                                (i = document.createElement('iframe')), (i.name = o.iframeId), (i.src = 'javascript:0');
                            }
                            (i.id = o.iframeId), o.form.appendChild(i), (o.iframe = i);
                        }
                        var o = this;
                        if (!this.form) {
                            var i,
                                s = document.createElement('form'),
                                a = document.createElement('textarea'),
                                h = (this.iframeId = 'eio_iframe_' + this.index);
                            (s.className = 'socketio'),
                            (s.style.position = 'absolute'),
                            (s.style.top = '-1000px'),
                            (s.style.left = '-1000px'),
                            (s.target = h),
                            (s.method = 'POST'),
                            s.setAttribute('accept-charset', 'utf-8'),
                                (a.name = 'd'),
                                s.appendChild(a),
                                document.body.appendChild(s),
                                (this.form = s),
                                (this.area = a);
                        }
                        (this.form.action = this.uri()), n(), (t = t.replace(u, '\\\n')), (this.area.value = t.replace(c, '\\n'));
                        try {
                            this.form.submit();
                        } catch (t) {}
                        this.iframe.attachEvent ?
                            (this.iframe.onreadystatechange = function() {
                                'complete' === o.iframe.readyState && r();
                            }) :
                            (this.iframe.onload = r);
                    });
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, r) {
            (function(e) {
                function n(t) {
                    var e = t && t.forceBase64;
                    e && (this.supportsBinary = !1),
                        (this.perMessageDeflate = t.perMessageDeflate),
                        (this.usingBrowserWebSocket = p && !t.forceNode),
                        this.usingBrowserWebSocket || (f = o),
                        i.call(this, t);
                }
                var o,
                    i = r(26),
                    s = r(27),
                    a = r(36),
                    c = r(37),
                    u = r(38),
                    h = r(3)('engine.io-client:websocket'),
                    p = e.WebSocket || e.MozWebSocket;
                if ('undefined' == typeof window)
                    try {
                        o = r(41);
                    } catch (t) {}
                var f = p;
                f || 'undefined' != typeof window || (f = o),
                    (t.exports = n),
                    c(n, i),
                    (n.prototype.name = 'websocket'),
                    (n.prototype.supportsBinary = !0),
                    (n.prototype.doOpen = function() {
                        if (this.check()) {
                            var t = this.uri(),
                                e = void 0,
                                r = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };
                            (r.pfx = this.pfx),
                            (r.key = this.key),
                            (r.passphrase = this.passphrase),
                            (r.cert = this.cert),
                            (r.ca = this.ca),
                            (r.ciphers = this.ciphers),
                            (r.rejectUnauthorized = this.rejectUnauthorized),
                            this.extraHeaders && (r.headers = this.extraHeaders),
                                this.localAddress && (r.localAddress = this.localAddress);
                            try {
                                this.ws = this.usingBrowserWebSocket ? new f(t) : new f(t, e, r);
                            } catch (t) {
                                return this.emit('error', t);
                            }
                            void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                                this.ws.supports && this.ws.supports.binary ?
                                ((this.supportsBinary = !0), (this.ws.binaryType = 'nodebuffer')) :
                                (this.ws.binaryType = 'arraybuffer'),
                                this.addEventListeners();
                        }
                    }),
                    (n.prototype.addEventListeners = function() {
                        var t = this;
                        (this.ws.onopen = function() {
                            t.onOpen();
                        }),
                        (this.ws.onclose = function() {
                            t.onClose();
                        }),
                        (this.ws.onmessage = function(e) {
                            t.onData(e.data);
                        }),
                        (this.ws.onerror = function(e) {
                            t.onError('websocket error', e);
                        });
                    }),
                    (n.prototype.write = function(t) {
                        function r() {
                            n.emit('flush'),
                                setTimeout(function() {
                                    (n.writable = !0), n.emit('drain');
                                }, 0);
                        }
                        var n = this;
                        this.writable = !1;
                        for (var o = t.length, i = 0, a = o; i < a; i++)
                            !(function(t) {
                                s.encodePacket(t, n.supportsBinary, function(i) {
                                    if (!n.usingBrowserWebSocket) {
                                        var s = {};
                                        if ((t.options && (s.compress = t.options.compress), n.perMessageDeflate)) {
                                            var a = 'string' == typeof i ? e.Buffer.byteLength(i) : i.length;
                                            a < n.perMessageDeflate.threshold && (s.compress = !1);
                                        }
                                    }
                                    try {
                                        n.usingBrowserWebSocket ? n.ws.send(i) : n.ws.send(i, s);
                                    } catch (t) {
                                        h('websocket closed before onclose event');
                                    }
                                    --o || r();
                                });
                            })(t[i]);
                    }),
                    (n.prototype.onClose = function() {
                        i.prototype.onClose.call(this);
                    }),
                    (n.prototype.doClose = function() {
                        'undefined' != typeof this.ws && this.ws.close();
                    }),
                    (n.prototype.uri = function() {
                        var t = this.query || {},
                            e = this.secure ? 'wss' : 'ws',
                            r = '';
                        this.port &&
                            (('wss' === e && 443 !== Number(this.port)) || ('ws' === e && 80 !== Number(this.port))) &&
                            (r = ':' + this.port),
                            this.timestampRequests && (t[this.timestampParam] = u()),
                            this.supportsBinary || (t.b64 = 1),
                            (t = a.encode(t)),
                            t.length && (t = '?' + t);
                        var n = this.hostname.indexOf(':') !== -1;
                        return e + '://' + (n ? '[' + this.hostname + ']' : this.hostname) + r + this.path + t;
                    }),
                    (n.prototype.check = function() {
                        return !(!f || ('__initialize' in f && this.name === n.prototype.name));
                    });
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e) {},
        function(t, e) {
            var r = [].indexOf;
            t.exports = function(t, e) {
                if (r) return t.indexOf(e);
                for (var n = 0; n < t.length; ++n)
                    if (t[n] === e) return n;
                return -1;
            };
        },
        function(t, e) {
            (function(e) {
                var r = /^[\],:{}\s]*$/,
                    n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    o = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    i = /(?:^|:|,)(?:\s*\[)+/g,
                    s = /^\s+/,
                    a = /\s+$/;
                t.exports = function(t) {
                    return 'string' == typeof t && t ?
                        ((t = t.replace(s, '').replace(a, '')),
                            e.JSON && JSON.parse ?
                            JSON.parse(t) :
                            r.test(
                                t
                                .replace(n, '@')
                                .replace(o, ']')
                                .replace(i, '')
                            ) ?
                            new Function('return ' + t)() :
                            void 0) :
                        null;
                };
            }.call(
                e,
                (function() {
                    return this;
                })()
            ));
        },
        function(t, e, r) {
            'use strict';

            function n(t, e, r) {
                (this.io = t),
                (this.nsp = e),
                (this.json = this),
                (this.ids = 0),
                (this.acks = {}),
                (this.receiveBuffer = []),
                (this.sendBuffer = []),
                (this.connected = !1),
                (this.disconnected = !0),
                r && r.query && (this.query = r.query),
                    this.io.autoConnect && this.open();
            }
            var o = r(7),
                i = r(35),
                s = r(45),
                a = r(46),
                c = r(47),
                u = r(3)('socket.io-client:socket'),
                h = r(29);
            t.exports = e = n;
            var p = {
                    connect: 1,
                    connect_error: 1,
                    connect_timeout: 1,
                    connecting: 1,
                    disconnect: 1,
                    error: 1,
                    reconnect: 1,
                    reconnect_attempt: 1,
                    reconnect_failed: 1,
                    reconnect_error: 1,
                    reconnecting: 1,
                    ping: 1,
                    pong: 1,
                },
                f = i.prototype.emit;
            i(n.prototype),
                (n.prototype.subEvents = function() {
                    if (!this.subs) {
                        var t = this.io;
                        this.subs = [
                            a(t, 'open', c(this, 'onopen')),
                            a(t, 'packet', c(this, 'onpacket')),
                            a(t, 'close', c(this, 'onclose')),
                        ];
                    }
                }),
                (n.prototype.open = n.prototype.connect = function() {
                    return this.connected ?
                        this :
                        (this.subEvents(),
                            this.io.open(),
                            'open' === this.io.readyState && this.onopen(),
                            this.emit('connecting'),
                            this);
                }),
                (n.prototype.send = function() {
                    var t = s(arguments);
                    return t.unshift('message'), this.emit.apply(this, t), this;
                }),
                (n.prototype.emit = function(t) {
                    if (p.hasOwnProperty(t)) return f.apply(this, arguments), this;
                    var e = s(arguments),
                        r = o.EVENT;
                    h(e) && (r = o.BINARY_EVENT);
                    var n = { type: r, data: e };
                    return (
                        (n.options = {}),
                        (n.options.compress = !this.flags || !1 !== this.flags.compress),
                        'function' == typeof e[e.length - 1] &&
                        (u('emitting packet with ack id %d', this.ids), (this.acks[this.ids] = e.pop()), (n.id = this.ids++)),
                        this.connected ? this.packet(n) : this.sendBuffer.push(n),
                        delete this.flags,
                        this
                    );
                }),
                (n.prototype.packet = function(t) {
                    (t.nsp = this.nsp), this.io.packet(t);
                }),
                (n.prototype.onopen = function() {
                    u('transport is open - connecting'),
                        '/' !== this.nsp &&
                        (this.query ? this.packet({ type: o.CONNECT, query: this.query }) : this.packet({ type: o.CONNECT }));
                }),
                (n.prototype.onclose = function(t) {
                    u('close (%s)', t),
                        (this.connected = !1),
                        (this.disconnected = !0),
                        delete this.id,
                        this.emit('disconnect', t);
                }),
                (n.prototype.onpacket = function(t) {
                    if (t.nsp === this.nsp)
                        switch (t.type) {
                            case o.CONNECT:
                                this.onconnect();
                                break;
                            case o.EVENT:
                                this.onevent(t);
                                break;
                            case o.BINARY_EVENT:
                                this.onevent(t);
                                break;
                            case o.ACK:
                                this.onack(t);
                                break;
                            case o.BINARY_ACK:
                                this.onack(t);
                                break;
                            case o.DISCONNECT:
                                this.ondisconnect();
                                break;
                            case o.ERROR:
                                this.emit('error', t.data);
                        }
                }),
                (n.prototype.onevent = function(t) {
                    var e = t.data || [];
                    u('emitting event %j', e),
                        null != t.id && (u('attaching ack callback to event'), e.push(this.ack(t.id))),
                        this.connected ? f.apply(this, e) : this.receiveBuffer.push(e);
                }),
                (n.prototype.ack = function(t) {
                    var e = this,
                        r = !1;
                    return function() {
                        if (!r) {
                            r = !0;
                            var n = s(arguments);
                            u('sending ack %j', n);
                            var i = h(n) ? o.BINARY_ACK : o.ACK;
                            e.packet({ type: i, id: t, data: n });
                        }
                    };
                }),
                (n.prototype.onack = function(t) {
                    var e = this.acks[t.id];
                    'function' == typeof e
                        ?
                        (u('calling ack %s with %j', t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) :
                        u('bad ack %s', t.id);
                }),
                (n.prototype.onconnect = function() {
                    (this.connected = !0), (this.disconnected = !1), this.emit('connect'), this.emitBuffered();
                }),
                (n.prototype.emitBuffered = function() {
                    var t;
                    for (t = 0; t < this.receiveBuffer.length; t++) f.apply(this, this.receiveBuffer[t]);
                    for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
                    this.sendBuffer = [];
                }),
                (n.prototype.ondisconnect = function() {
                    u('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect');
                }),
                (n.prototype.destroy = function() {
                    if (this.subs) {
                        for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                        this.subs = null;
                    }
                    this.io.destroy(this);
                }),
                (n.prototype.close = n.prototype.disconnect = function() {
                    return (
                        this.connected && (u('performing disconnect (%s)', this.nsp), this.packet({ type: o.DISCONNECT })),
                        this.destroy(),
                        this.connected && this.onclose('io client disconnect'),
                        this
                    );
                }),
                (n.prototype.compress = function(t) {
                    return (this.flags = this.flags || {}), (this.flags.compress = t), this;
                });
        },
        function(t, e) {
            function r(t, e) {
                var r = [];
                e = e || 0;
                for (var n = e || 0; n < t.length; n++) r[n - e] = t[n];
                return r;
            }
            t.exports = r;
        },
        function(t, e) {
            'use strict';

            function r(t, e, r) {
                return (
                    t.on(e, r), {
                        destroy: function() {
                            t.removeListener(e, r);
                        },
                    }
                );
            }
            t.exports = r;
        },
        function(t, e) {
            var r = [].slice;
            t.exports = function(t, e) {
                if (('string' == typeof e && (e = t[e]), 'function' != typeof e)) throw new Error('bind() requires a function');
                var n = r.call(arguments, 2);
                return function() {
                    return e.apply(t, n.concat(r.call(arguments)));
                };
            };
        },
        function(t, e) {
            function r(t) {
                (t = t || {}),
                (this.ms = t.min || 100),
                (this.max = t.max || 1e4),
                (this.factor = t.factor || 2),
                (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
                (this.attempts = 0);
            }
            (t.exports = r),
            (r.prototype.duration = function() {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random(),
                        r = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
                }
                return 0 | Math.min(t, this.max);
            }),
            (r.prototype.reset = function() {
                this.attempts = 0;
            }),
            (r.prototype.setMin = function(t) {
                this.ms = t;
            }),
            (r.prototype.setMax = function(t) {
                this.max = t;
            }),
            (r.prototype.setJitter = function(t) {
                this.jitter = t;
            });
        },
    ]);
});