(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.Parallax = f()
    }
})(function() {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function(require, module, exports) {
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            'use strict';
            var getOwnPropertySymbols = Object.getOwnPropertySymbols;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var propIsEnumerable = Object.prototype.propertyIsEnumerable;

            function toObject(val) {
                if (val === null || val === undefined) {
                    throw new TypeError('Object.assign cannot be called with null or undefined')
                }
                return Object(val)
            }

            function shouldUseNative() {
                try {
                    if (!Object.assign) {
                        return !1
                    }
                    var test1 = new String('abc');
                    test1[5] = 'de';
                    if (Object.getOwnPropertyNames(test1)[0] === '5') {
                        return !1
                    }
                    var test2 = {};
                    for (var i = 0; i < 10; i++) {
                        test2['_' + String.fromCharCode(i)] = i
                    }
                    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                        return test2[n]
                    });
                    if (order2.join('') !== '0123456789') {
                        return !1
                    }
                    var test3 = {};
                    'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
                        test3[letter] = letter
                    });
                    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                        return !1
                    }
                    return !0
                } catch (err) {
                    return !1
                }
            }
            module.exports = shouldUseNative() ? Object.assign : function(target, source) {
                var from;
                var to = toObject(target);
                var symbols;
                for (var s = 1; s < arguments.length; s++) {
                    from = Object(arguments[s]);
                    for (var key in from) {
                        if (hasOwnProperty.call(from, key)) {
                            to[key] = from[key]
                        }
                    }
                    if (getOwnPropertySymbols) {
                        symbols = getOwnPropertySymbols(from);
                        for (var i = 0; i < symbols.length; i++) {
                            if (propIsEnumerable.call(from, symbols[i])) {
                                to[symbols[i]] = from[symbols[i]]
                            }
                        }
                    }
                }
                return to
            }
        }, {}],
        2: [function(require, module, exports) {
            (function(process) {
                (function() {
                    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
                    if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
                        module.exports = function() {
                            return performance.now()
                        }
                    } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
                        module.exports = function() {
                            return (getNanoSeconds() - nodeLoadTime) / 1e6
                        };
                        hrtime = process.hrtime;
                        getNanoSeconds = function() {
                            var hr;
                            hr = hrtime();
                            return hr[0] * 1e9 + hr[1]
                        };
                        moduleLoadTime = getNanoSeconds();
                        upTime = process.uptime() * 1e9;
                        nodeLoadTime = moduleLoadTime - upTime
                    } else if (Date.now) {
                        module.exports = function() {
                            return Date.now() - loadTime
                        };
                        loadTime = Date.now()
                    } else {
                        module.exports = function() {
                            return new Date().getTime() - loadTime
                        };
                        loadTime = new Date().getTime()
                    }
                }).call(this)
            }).call(this, require('_process'))
        }, {
            "_process": 3
        }],
        3: [function(require, module, exports) {
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined')
            }

            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined')
            }(function() {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout
                    } else {
                        cachedSetTimeout = defaultSetTimout
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout
                    } else {
                        cachedClearTimeout = defaultClearTimeout
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout
                }
            }())

            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0)
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0)
                }
                try {
                    return cachedSetTimeout(fun, 0)
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0)
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0)
                    }
                }
            }

            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker)
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker)
                }
                try {
                    return cachedClearTimeout(marker)
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker)
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker)
                    }
                }
            }
            var queue = [];
            var draining = !1;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return
                }
                draining = !1;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue)
                } else {
                    queueIndex = -1
                }
                if (queue.length) {
                    drainQueue()
                }
            }

            function drainQueue() {
                if (draining) {
                    return
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run()
                        }
                    }
                    queueIndex = -1;
                    len = queue.length
                }
                currentQueue = null;
                draining = !1;
                runClearTimeout(timeout)
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i]
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue)
                }
            };

            function Item(fun, array) {
                this.fun = fun;
                this.array = array
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            };
            process.title = 'browser';
            process.browser = !0;
            process.env = {};
            process.argv = [];
            process.version = '';
            process.versions = {};

            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return []
            }
            process.binding = function(name) {
                throw new Error('process.binding is not supported')
            };
            process.cwd = function() {
                return '/'
            };
            process.chdir = function(dir) {
                throw new Error('process.chdir is not supported')
            };
            process.umask = function() {
                return 0
            }
        }, {}],
        4: [function(require, module, exports) {
            (function(global) {
                var now = require('performance-now'),
                    root = typeof window === 'undefined' ? global : window,
                    vendors = ['moz', 'webkit'],
                    suffix = 'AnimationFrame',
                    raf = root['request' + suffix],
                    caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
                for (var i = 0; !raf && i < vendors.length; i++) {
                    raf = root[vendors[i] + 'Request' + suffix]
                    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix]
                }
                if (!raf || !caf) {
                    var last = 0,
                        id = 0,
                        queue = [],
                        frameDuration = 1000 / 60
                    raf = function(callback) {
                        if (queue.length === 0) {
                            var _now = now(),
                                next = Math.max(0, frameDuration - (_now - last))
                            last = next + _now
                            setTimeout(function() {
                                var cp = queue.slice(0)
                                queue.length = 0
                                for (var i = 0; i < cp.length; i++) {
                                    if (!cp[i].cancelled) {
                                        try {
                                            cp[i].callback(last)
                                        } catch (e) {
                                            setTimeout(function() {
                                                throw e
                                            }, 0)
                                        }
                                    }
                                }
                            }, Math.round(next))
                        }
                        queue.push({
                            handle: ++id,
                            callback: callback,
                            cancelled: !1
                        })
                        return id
                    }
                    caf = function(handle) {
                        for (var i = 0; i < queue.length; i++) {
                            if (queue[i].handle === handle) {
                                queue[i].cancelled = !0
                            }
                        }
                    }
                }
                module.exports = function(fn) {
                    return raf.call(root, fn)
                }
                module.exports.cancel = function() {
                    caf.apply(root, arguments)
                }
                module.exports.polyfill = function() {
                    root.requestAnimationFrame = raf
                    root.cancelAnimationFrame = caf
                }
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
        }, {
            "performance-now": 2
        }],
        5: [function(require, module, exports) {
            'use strict';
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || !1;
                        descriptor.configurable = !0;
                        if ("value" in descriptor) descriptor.writable = !0;
                        Object.defineProperty(target, descriptor.key, descriptor)
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor
                }
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var rqAnFr = require('raf');
            var objectAssign = require('object-assign');
            var helpers = {
                propertyCache: {},
                vendors: [null, ['-webkit-', 'webkit'],
                    ['-moz-', 'Moz'],
                    ['-o-', 'O'],
                    ['-ms-', 'ms']
                ],
                clamp: function clamp(value, min, max) {
                    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value
                },
                data: function data(element, name) {
                    return helpers.deserialize(element.getAttribute('data-' + name))
                },
                deserialize: function deserialize(value) {
                    if (value === 'true') {
                        return !0
                    } else if (value === 'false') {
                        return !1
                    } else if (value === 'null') {
                        return null
                    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
                        return parseFloat(value)
                    } else {
                        return value
                    }
                },
                camelCase: function camelCase(value) {
                    return value.replace(/-+(.)?/g, function(match, character) {
                        return character ? character.toUpperCase() : ''
                    })
                },
                accelerate: function accelerate(element) {
                    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)');
                    helpers.css(element, 'transform-style', 'preserve-3d');
                    helpers.css(element, 'backface-visibility', 'hidden')
                },
                transformSupport: function transformSupport(value) {
                    var element = document.createElement('div'),
                        propertySupport = !1,
                        propertyValue = null,
                        featureSupport = !1,
                        cssProperty = null,
                        jsProperty = null;
                    for (var i = 0, l = helpers.vendors.length; i < l; i++) {
                        if (helpers.vendors[i] !== null) {
                            cssProperty = helpers.vendors[i][0] + 'transform';
                            jsProperty = helpers.vendors[i][1] + 'Transform'
                        } else {
                            cssProperty = 'transform';
                            jsProperty = 'transform'
                        }
                        if (element.style[jsProperty] !== undefined) {
                            propertySupport = !0;
                            break
                        }
                    }
                    switch (value) {
                        case '2D':
                            featureSupport = propertySupport;
                            break;
                        case '3D':
                            if (propertySupport) {
                                var body = document.body || document.createElement('body'),
                                    documentElement = document.documentElement,
                                    documentOverflow = documentElement.style.overflow,
                                    isCreatedBody = !1;
                                if (!document.body) {
                                    isCreatedBody = !0;
                                    documentElement.style.overflow = 'hidden';
                                    documentElement.appendChild(body);
                                    body.style.overflow = 'hidden';
                                    body.style.background = ''
                                }
                                body.appendChild(element);
                                element.style[jsProperty] = 'translate3d(1px,1px,1px)';
                                propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                                featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none';
                                documentElement.style.overflow = documentOverflow;
                                body.removeChild(element);
                                if (isCreatedBody) {
                                    body.removeAttribute('style');
                                    body.parentNode.removeChild(body)
                                }
                            }
                            break
                    }
                    return featureSupport
                },
                css: function css(element, property, value) {
                    var jsProperty = helpers.propertyCache[property];
                    if (!jsProperty) {
                        for (var i = 0, l = helpers.vendors.length; i < l; i++) {
                            if (helpers.vendors[i] !== null) {
                                jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property)
                            } else {
                                jsProperty = property
                            }
                            if (element.style[jsProperty] !== undefined) {
                                helpers.propertyCache[property] = jsProperty;
                                break
                            }
                        }
                    }
                    element.style[jsProperty] = value
                }
            };
            var MAGIC_NUMBER = 30,
                DEFAULTS = {
                    relativeInput: !1,
                    clipRelativeInput: !1,
                    inputElement: null,
                    hoverOnly: !1,
                    calibrationThreshold: 100,
                    calibrationDelay: 500,
                    supportDelay: 500,
                    calibrateX: !1,
                    calibrateY: !0,
                    invertX: !0,
                    invertY: !0,
                    limitX: !1,
                    limitY: !1,
                    scalarX: 10.0,
                    scalarY: 10.0,
                    frictionX: 0.1,
                    frictionY: 0.1,
                    originX: 0.5,
                    originY: 0.5,
                    pointerEvents: !1,
                    precision: 1,
                    onReady: null,
                    selector: null
                };
            var Parallax = function() {
                function Parallax(element, options) {
                    _classCallCheck(this, Parallax);
                    this.element = element;
                    var data = {
                        calibrateX: helpers.data(this.element, 'calibrate-x'),
                        calibrateY: helpers.data(this.element, 'calibrate-y'),
                        invertX: helpers.data(this.element, 'invert-x'),
                        invertY: helpers.data(this.element, 'invert-y'),
                        limitX: helpers.data(this.element, 'limit-x'),
                        limitY: helpers.data(this.element, 'limit-y'),
                        scalarX: helpers.data(this.element, 'scalar-x'),
                        scalarY: helpers.data(this.element, 'scalar-y'),
                        frictionX: helpers.data(this.element, 'friction-x'),
                        frictionY: helpers.data(this.element, 'friction-y'),
                        originX: helpers.data(this.element, 'origin-x'),
                        originY: helpers.data(this.element, 'origin-y'),
                        pointerEvents: helpers.data(this.element, 'pointer-events'),
                        precision: helpers.data(this.element, 'precision'),
                        relativeInput: helpers.data(this.element, 'relative-input'),
                        clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
                        hoverOnly: helpers.data(this.element, 'hover-only'),
                        inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
                        selector: helpers.data(this.element, 'selector')
                    };
                    for (var key in data) {
                        if (data[key] === null) {
                            delete data[key]
                        }
                    }
                    objectAssign(this, DEFAULTS, data, options);
                    if (!this.inputElement) {
                        this.inputElement = this.element
                    }
                    this.calibrationTimer = null;
                    this.calibrationFlag = !0;
                    this.enabled = !1;
                    this.depthsX = [];
                    this.depthsY = [];
                    this.raf = null;
                    this.bounds = null;
                    this.elementPositionX = 0;
                    this.elementPositionY = 0;
                    this.elementWidth = 0;
                    this.elementHeight = 0;
                    this.elementCenterX = 0;
                    this.elementCenterY = 0;
                    this.elementRangeX = 0;
                    this.elementRangeY = 0;
                    this.calibrationX = 0;
                    this.calibrationY = 0;
                    this.inputX = 0;
                    this.inputY = 0;
                    this.motionX = 0;
                    this.motionY = 0;
                    this.velocityX = 0;
                    this.velocityY = 0;
                    this.onMouseMove = this.onMouseMove.bind(this);
                    this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
                    this.onDeviceMotion = this.onDeviceMotion.bind(this);
                    this.onOrientationTimer = this.onOrientationTimer.bind(this);
                    this.onMotionTimer = this.onMotionTimer.bind(this);
                    this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
                    this.onAnimationFrame = this.onAnimationFrame.bind(this);
                    this.onWindowResize = this.onWindowResize.bind(this);
                    this.windowWidth = null;
                    this.windowHeight = null;
                    this.windowCenterX = null;
                    this.windowCenterY = null;
                    this.windowRadiusX = null;
                    this.windowRadiusY = null;
                    this.portrait = !1;
                    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
                    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop;
                    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop;
                    this.orientationStatus = 0;
                    this.motionStatus = 0;
                    this.initialise()
                }
                _createClass(Parallax, [{
                    key: 'initialise',
                    value: function initialise() {
                        if (this.transform2DSupport === undefined) {
                            this.transform2DSupport = helpers.transformSupport('2D');
                            this.transform3DSupport = helpers.transformSupport('3D')
                        }
                        if (this.transform3DSupport) {
                            helpers.accelerate(this.element)
                        }
                        var style = window.getComputedStyle(this.element);
                        if (style.getPropertyValue('position') === 'static') {
                            this.element.style.position = 'relative'
                        }
                        if (!this.pointerEvents) {
                            this.element.style.pointerEvents = 'none'
                        }
                        this.updateLayers();
                        this.updateDimensions();
                        this.enable();
                        this.queueCalibration(this.calibrationDelay)
                    }
                }, {
                    key: 'doReadyCallback',
                    value: function doReadyCallback() {
                        if (this.onReady) {
                            this.onReady()
                        }
                    }
                }, {
                    key: 'updateLayers',
                    value: function updateLayers() {
                        if (this.selector) {
                            this.layers = this.element.querySelectorAll(this.selector)
                        } else {
                            this.layers = this.element.children
                        }
                        if (!this.layers.length) {
                            console.warn('ParallaxJS: Your scene does not have any layers.')
                        }
                        this.depthsX = [];
                        this.depthsY = [];
                        for (var index = 0; index < this.layers.length; index++) {
                            var layer = this.layers[index];
                            if (this.transform3DSupport) {
                                helpers.accelerate(layer)
                            }
                            layer.style.position = index ? 'absolute' : 'relative';
                            layer.style.display = 'block';
                            layer.style.left = 0;
                            layer.style.top = 0;
                            var depth = helpers.data(layer, 'depth') || 0;
                            this.depthsX.push(helpers.data(layer, 'depth-x') || depth);
                            this.depthsY.push(helpers.data(layer, 'depth-y') || depth)
                        }
                    }
                }, {
                    key: 'updateDimensions',
                    value: function updateDimensions() {
                        this.windowWidth = window.innerWidth;
                        this.windowHeight = window.innerHeight;
                        this.windowCenterX = this.windowWidth * this.originX;
                        this.windowCenterY = this.windowHeight * this.originY;
                        this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX);
                        this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                    }
                }, {
                    key: 'updateBounds',
                    value: function updateBounds() {
                        this.bounds = this.inputElement.getBoundingClientRect();
                        this.elementPositionX = this.bounds.left;
                        this.elementPositionY = this.bounds.top;
                        this.elementWidth = this.bounds.width;
                        this.elementHeight = this.bounds.height;
                        this.elementCenterX = this.elementWidth * this.originX;
                        this.elementCenterY = this.elementHeight * this.originY;
                        this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX);
                        this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                    }
                }, {
                    key: 'queueCalibration',
                    value: function queueCalibration(delay) {
                        clearTimeout(this.calibrationTimer);
                        this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay)
                    }
                }, {
                    key: 'enable',
                    value: function enable() {
                        if (this.enabled) {
                            return
                        }
                        this.enabled = !0;
                        if (this.orientationSupport) {
                            this.portrait = !1;
                            window.addEventListener('deviceorientation', this.onDeviceOrientation);
                            this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)
                        } else if (this.motionSupport) {
                            this.portrait = !1;
                            window.addEventListener('devicemotion', this.onDeviceMotion);
                            this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)
                        } else {
                            this.calibrationX = 0;
                            this.calibrationY = 0;
                            this.portrait = !1;
                            window.addEventListener('mousemove', this.onMouseMove);
                            this.doReadyCallback()
                        }
                        window.addEventListener('resize', this.onWindowResize);
                        this.raf = rqAnFr(this.onAnimationFrame)
                    }
                }, {
                    key: 'disable',
                    value: function disable() {
                        if (!this.enabled) {
                            return
                        }
                        this.enabled = !1;
                        if (this.orientationSupport) {
                            window.removeEventListener('deviceorientation', this.onDeviceOrientation)
                        } else if (this.motionSupport) {
                            window.removeEventListener('devicemotion', this.onDeviceMotion)
                        } else {
                            window.removeEventListener('mousemove', this.onMouseMove)
                        }
                        window.removeEventListener('resize', this.onWindowResize);
                        rqAnFr.cancel(this.raf)
                    }
                }, {
                    key: 'calibrate',
                    value: function calibrate(x, y) {
                        this.calibrateX = x === undefined ? this.calibrateX : x;
                        this.calibrateY = y === undefined ? this.calibrateY : y
                    }
                }, {
                    key: 'invert',
                    value: function invert(x, y) {
                        this.invertX = x === undefined ? this.invertX : x;
                        this.invertY = y === undefined ? this.invertY : y
                    }
                }, {
                    key: 'friction',
                    value: function friction(x, y) {
                        this.frictionX = x === undefined ? this.frictionX : x;
                        this.frictionY = y === undefined ? this.frictionY : y
                    }
                }, {
                    key: 'scalar',
                    value: function scalar(x, y) {
                        this.scalarX = x === undefined ? this.scalarX : x;
                        this.scalarY = y === undefined ? this.scalarY : y
                    }
                }, {
                    key: 'limit',
                    value: function limit(x, y) {
                        this.limitX = x === undefined ? this.limitX : x;
                        this.limitY = y === undefined ? this.limitY : y
                    }
                }, {
                    key: 'origin',
                    value: function origin(x, y) {
                        this.originX = x === undefined ? this.originX : x;
                        this.originY = y === undefined ? this.originY : y
                    }
                }, {
                    key: 'setInputElement',
                    value: function setInputElement(element) {
                        this.inputElement = element;
                        this.updateDimensions()
                    }
                }, {
                    key: 'setPosition',
                    value: function setPosition(element, x, y) {
                        x = x.toFixed(this.precision) + 'px';
                        y = y.toFixed(this.precision) + 'px';
                        if (this.transform3DSupport) {
                            helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)')
                        } else if (this.transform2DSupport) {
                            helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')')
                        } else {
                            element.style.left = x;
                            element.style.top = y
                        }
                    }
                }, {
                    key: 'onOrientationTimer',
                    value: function onOrientationTimer() {
                        if (this.orientationSupport && this.orientationStatus === 0) {
                            this.disable();
                            this.orientationSupport = !1;
                            this.enable()
                        } else {
                            this.doReadyCallback()
                        }
                    }
                }, {
                    key: 'onMotionTimer',
                    value: function onMotionTimer() {
                        if (this.motionSupport && this.motionStatus === 0) {
                            this.disable();
                            this.motionSupport = !1;
                            this.enable()
                        } else {
                            this.doReadyCallback()
                        }
                    }
                }, {
                    key: 'onCalibrationTimer',
                    value: function onCalibrationTimer() {
                        this.calibrationFlag = !0
                    }
                }, {
                    key: 'onWindowResize',
                    value: function onWindowResize() {
                        this.updateDimensions()
                    }
                }, {
                    key: 'onAnimationFrame',
                    value: function onAnimationFrame() {
                        this.updateBounds();
                        var calibratedInputX = this.inputX - this.calibrationX,
                            calibratedInputY = this.inputY - this.calibrationY;
                        if (Math.abs(calibratedInputX) > this.calibrationThreshold || Math.abs(calibratedInputY) > this.calibrationThreshold) {
                            this.queueCalibration(0)
                        }
                        if (this.portrait) {
                            this.motionX = this.calibrateX ? calibratedInputY : this.inputY;
                            this.motionY = this.calibrateY ? calibratedInputX : this.inputX
                        } else {
                            this.motionX = this.calibrateX ? calibratedInputX : this.inputX;
                            this.motionY = this.calibrateY ? calibratedInputY : this.inputY
                        }
                        this.motionX *= this.elementWidth * (this.scalarX / 100);
                        this.motionY *= this.elementHeight * (this.scalarY / 100);
                        if (!isNaN(parseFloat(this.limitX))) {
                            this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX)
                        }
                        if (!isNaN(parseFloat(this.limitY))) {
                            this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY)
                        }
                        this.velocityX += (this.motionX - this.velocityX) * this.frictionX;
                        this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                        for (var index = 0; index < this.layers.length; index++) {
                            var layer = this.layers[index],
                                depthX = this.depthsX[index],
                                depthY = this.depthsY[index],
                                xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
                                yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1));
                            this.setPosition(layer, xOffset, yOffset)
                        }
                        this.raf = rqAnFr(this.onAnimationFrame)
                    }
                }, {
                    key: 'rotate',
                    value: function rotate(beta, gamma) {
                        var x = (beta || 0) / MAGIC_NUMBER,
                            y = (gamma || 0) / MAGIC_NUMBER;
                        var portrait = this.windowHeight > this.windowWidth;
                        if (this.portrait !== portrait) {
                            this.portrait = portrait;
                            this.calibrationFlag = !0
                        }
                        if (this.calibrationFlag) {
                            this.calibrationFlag = !1;
                            this.calibrationX = x;
                            this.calibrationY = y
                        }
                        this.inputX = x;
                        this.inputY = y
                    }
                }, {
                    key: 'onDeviceOrientation',
                    value: function onDeviceOrientation(event) {
                        var beta = event.beta;
                        var gamma = event.gamma;
                        if (beta !== null && gamma !== null) {
                            this.orientationStatus = 1;
                            this.rotate(beta, gamma)
                        }
                    }
                }, {
                    key: 'onDeviceMotion',
                    value: function onDeviceMotion(event) {
                        var beta = event.rotationRate.beta;
                        var gamma = event.rotationRate.gamma;
                        if (beta !== null && gamma !== null) {
                            this.motionStatus = 1;
                            this.rotate(beta, gamma)
                        }
                    }
                }, {
                    key: 'onMouseMove',
                    value: function onMouseMove(event) {
                        var clientX = event.clientX,
                            clientY = event.clientY;
                        if (this.hoverOnly && (clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth || clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight)) {
                            this.inputX = 0;
                            this.inputY = 0;
                            return
                        }
                        if (this.relativeInput) {
                            if (this.clipRelativeInput) {
                                clientX = Math.max(clientX, this.elementPositionX);
                                clientX = Math.min(clientX, this.elementPositionX + this.elementWidth);
                                clientY = Math.max(clientY, this.elementPositionY);
                                clientY = Math.min(clientY, this.elementPositionY + this.elementHeight)
                            }
                            if (this.elementRangeX && this.elementRangeY) {
                                this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX;
                                this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY
                            }
                        } else {
                            if (this.windowRadiusX && this.windowRadiusY) {
                                this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX;
                                this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY
                            }
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        this.disable();
                        clearTimeout(this.calibrationTimer);
                        clearTimeout(this.detectionTimer);
                        this.element.removeAttribute('style');
                        for (var index = 0; index < this.layers.length; index++) {
                            this.layers[index].removeAttribute('style')
                        }
                        delete this.element;
                        delete this.layers
                    }
                }, {
                    key: 'version',
                    value: function version() {
                        return '3.1.0'
                    }
                }]);
                return Parallax
            }();
            module.exports = Parallax
        }, {
            "object-assign": 1,
            "raf": 4
        }]
    }, {}, [5])(5)
})