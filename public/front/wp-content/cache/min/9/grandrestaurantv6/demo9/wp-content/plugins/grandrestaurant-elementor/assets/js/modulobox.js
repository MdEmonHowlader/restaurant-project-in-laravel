(function() {
    var win = window,
        lastTime = 0;
    win.requestAnimationFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame;
    if (!win.requestAnimationFrame) {
        win.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime(),
                timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                id = setTimeout(callback, timeToCall);
            lastTime = currTime + timeToCall;
            return id
        }
    }
    if (!win.cancelAnimationFrame) {
        win.cancelAnimationFrame = function(id) {
            clearTimeout(id)
        }
    }
}());
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('themeone-utils/utils', factory)
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        root.ThemeoneUtils = factory()
    }
}(this, function() {
    "use strict";
    var utils = {};
    var Console = window.console;
    utils.error = function(message) {
        if (typeof Console !== 'undefined') {
            Console.error(message)
        }
    };
    utils.extend = function(options, defaults) {
        if (options) {
            if (typeof options !== 'object') {
                this.error('Custom options must be an object')
            } else {
                for (var prop in defaults) {
                    if (defaults.hasOwnProperty(prop) && options.hasOwnProperty(prop)) {
                        defaults[prop] = options[prop]
                    }
                }
            }
        }
        return defaults
    };
    utils.prop = function(prop) {
        var el = this.createEl(),
            prefixes = ['', 'Webkit', 'Moz', 'ms', 'O'];
        for (var p = 0, pl = prefixes.length; p < pl; p++) {
            var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
            if (el.style[prefixedProp] !== undefined) {
                return prefixedProp
            }
        }
        return ''
    };
    utils.cloneObject = function(obj) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr]
            }
        }
        return copy
    };
    utils.createEl = function(tag, classes) {
        var el = document.createElement(tag || 'div');
        if (classes) {
            el.className = classes
        }
        return el
    };
    utils.camelize = function(string) {
        return string.replace(/-([a-z])/g, function(g) {
            return g[1].toUpperCase()
        })
    };
    utils.handleEvents = function(_this, el, event, fn, isBind) {
        if (typeof this.event_handlers !== 'object') {
            this.event_handlers = {}
        }
        if (!this.event_handlers[fn]) {
            this.event_handlers[fn] = _this[fn].bind(_this)
        }
        isBind = isBind === undefined ? !0 : !!isBind;
        var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
        event.forEach(function(ev) {
            el[bindMethod](ev, this.event_handlers[fn], !1)
        }.bind(this))
    };
    utils.dispatchEvent = function(_this, namespace, type, event, args) {
        type += namespace ? '.' + namespace : '';
        var emitArgs = event ? [event].concat(args) : [args];
        _this.emitEvent(type, emitArgs)
    };
    utils.throttle = function(func, delay) {
        var timestamp = null,
            limit = delay;
        return function() {
            var self = this,
                args = arguments,
                now = Date.now();
            if (!timestamp || now - timestamp >= limit) {
                timestamp = now;
                func.apply(self, args)
            }
        }
    };
    utils.modulo = function(length, index) {
        return (length + (index % length)) % length
    };
    utils.classReg = function(className) {
        return new RegExp('(^|\\s+)' + className + '(\\s+|$)')
    };
    utils.hasClass = function(el, className) {
        return !!el.className.match(this.classReg(className))
    };
    utils.addClass = function(el, className) {
        if (!this.hasClass(el, className)) {
            el.className += (el.className ? ' ' : '') + className
        }
    };
    utils.removeClass = function(el, className) {
        if (this.hasClass(el, className)) {
            el.className = el.className.replace(this.classReg(className), ' ').replace(/\s+$/, '')
        }
    };
    utils.translate = function(el, x, y, s) {
        var scale = s ? ' scale(' + s + ',' + s + ')' : '';
        el.style[this.browser.trans] = (this.browser.gpu) ? 'translate3d(' + (x || 0) + 'px, ' + (y || 0) + 'px, 0)' + scale : 'translate(' + (x || 0) + 'px, ' + (y || 0) + 'px)' + scale
    };
    utils.browser = {
        trans: utils.prop('transform'),
        gpu: utils.prop('perspective') ? !0 : !1
    };
    return utils
}));
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('themeone-event/event', factory)
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        root.ThemeoneEvent = factory()
    }
}(typeof window !== 'undefined' ? window : this, function() {
    "use strict";
    var EvEmitter = function() {},
        proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return null
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) === -1) {
            listeners.push(listener)
        }
        return this
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return null
        }
        var index = listeners.indexOf(listener);
        if (index !== -1) {
            listeners.splice(index, 1)
        }
        return this
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return null
        }
        var i = 0,
            listener = listeners[i];
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        while (listener) {
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener]
            }
            listener.apply(this, args);
            i += isOnce ? 0 : 1;
            listener = listeners[i]
        }
        return this
    };
    return EvEmitter
}));
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('themeone-animate/animate', ['themeone-utils/utils', 'themeone-event/event'], factory)
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('themeone-utils'), require('themeone-event'))
    } else {
        root.ThemeoneAnimate = factory(root.ThemeoneUtils, root.ThemeoneEvent)
    }
}(this, function(utils, EvEmitter) {
    'use strict';
    var Animate = function(element, positions, friction, attraction) {
        this.element = element;
        this.defaults = positions;
        this.forces = {
            friction: friction || 0.28,
            attraction: attraction || 0.028
        };
        this.resetAnimate()
    };
    var proto = Animate.prototype = Object.create(EvEmitter.prototype);
    proto.updateDrag = function(obj) {
        this.move = !0;
        this.drag = obj
    };
    proto.releaseDrag = function() {
        this.move = !1
    };
    proto.animateTo = function(obj) {
        this.attraction = obj
    };
    proto.startAnimate = function() {
        this.move = !0;
        this.settle = !1;
        this.restingFrames = 0;
        if (!this.RAF) {
            this.animate()
        }
    };
    proto.stopAnimate = function() {
        this.move = !1;
        this.restingFrames = 0;
        if (this.RAF) {
            cancelAnimationFrame(this.RAF);
            this.RAF = !1
        }
        this.start = utils.cloneObject(this.position);
        this.velocity = {
            x: 0,
            y: 0,
            s: 0
        }
    };
    proto.resetAnimate = function() {
        this.stopAnimate();
        this.settle = !0;
        this.drag = utils.cloneObject(this.defaults);
        this.start = utils.cloneObject(this.defaults);
        this.resting = utils.cloneObject(this.defaults);
        this.position = utils.cloneObject(this.defaults);
        this.attraction = utils.cloneObject(this.defaults)
    };
    proto.animate = function() {
        var loop = (function() {
            if (typeof this.position !== 'undefined') {
                var previous = utils.cloneObject(this.position);
                this.applyDragForce();
                this.applyAttractionForce();
                utils.dispatchEvent(this, 'toanimate', 'render', this);
                this.integratePhysics();
                this.getRestingPosition();
                this.render(100);
                this.RAF = requestAnimationFrame(loop);
                this.checkSettle(previous)
            }
        }).bind(this);
        this.RAF = requestAnimationFrame(loop)
    };
    proto.integratePhysics = function() {
        for (var k in this.position) {
            if (typeof this.position[k] !== 'undefined') {
                this.position[k] += this.velocity[k];
                this.position[k] = (k === 's') ? Math.max(0.1, this.position[k]) : this.position[k];
                this.velocity[k] *= this.getFrictionFactor()
            }
        }
    };
    proto.applyDragForce = function() {
        if (this.move) {
            for (var k in this.drag) {
                if (typeof this.drag[k] !== 'undefined') {
                    var dragVelocity = this.drag[k] - this.position[k];
                    var dragForce = dragVelocity - this.velocity[k];
                    this.applyForce(k, dragForce)
                }
            }
        }
    };
    proto.applyAttractionForce = function() {
        if (!this.move) {
            for (var k in this.attraction) {
                if (typeof this.attraction[k] !== 'undefined') {
                    var distance = this.attraction[k] - this.position[k];
                    var force = distance * this.forces.attraction;
                    this.applyForce(k, force)
                }
            }
        }
    };
    proto.getRestingPosition = function() {
        for (var k in this.position) {
            if (typeof this.position[k] !== 'undefined') {
                this.resting[k] = this.position[k] + this.velocity[k] / (1 - this.getFrictionFactor())
            }
        }
    };
    proto.applyForce = function(direction, force) {
        this.velocity[direction] += force
    };
    proto.getFrictionFactor = function() {
        return 1 - this.forces.friction
    };
    proto.roundValues = function(values, round) {
        for (var k in values) {
            if (typeof values[k] !== 'undefined') {
                round = k === 's' ? round * 100 : round;
                values[k] = Math.round(values[k] * round) / round
            }
        }
    };
    proto.checkSettle = function(previous) {
        if (!this.move) {
            var count = 0;
            for (var k in this.position) {
                if (typeof this.position[k] !== 'undefined') {
                    var round = k === 's' ? 10000 : 100;
                    if (Math.round(this.position[k] * round) === Math.round(previous[k] * round)) {
                        count++;
                        if (count === Object.keys(this.position).length) {
                            this.restingFrames++
                        }
                    }
                }
            }
        }
        if (this.restingFrames > 2) {
            this.stopAnimate();
            this.render(this.position.s > 1 ? 10 : 1);
            this.settle = !0;
            if (JSON.stringify(this.start) !== JSON.stringify(this.position)) {
                utils.dispatchEvent(this, 'toanimate', 'settle', this)
            }
        }
    };
    proto.render = function(round) {
        this.roundValues(this.position, round);
        utils.translate(this.element, this.position.x, this.position.y, this.position.s)
    };
    return Animate
}));
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['themeone-utils/utils', 'themeone-event/event', 'themeone-animate/animate'], factory)
    } else if (typeof exports === 'object' && module.exports) {
        module.exports = factory(require('themeone-utils'), require('themeone-event'), require('themeone-animate'))
    } else {
        root.ModuloBox = factory(root.ThemeoneUtils, root.ThemeoneEvent, root.ThemeoneAnimate)
    }
}(this, function(utils, EvEmitter, Animate) {
    'use strict';
    var version = '1.3.0';
    var GUID = 0;
    var instances = {};
    var expando = 'mobx' + (version + Math.random()).replace(/\D/g, '');
    var cache = {
        uid: 0
    };
    var defaults = {
        mediaSelector: '.mobx',
        threshold: 5,
        attraction: {
            slider: 0.055,
            slide: 0.018,
            thumbs: 0.016
        },
        friction: {
            slider: 0.62,
            slide: 0.18,
            thumbs: 0.22
        },
        rightToLeft: !1,
        loop: 3,
        preload: 1,
        unload: !1,
        timeToIdle: 4000,
        history: !1,
        mouseWheel: !0,
        contextMenu: !0,
        scrollBar: !0,
        fadeIfSettle: !1,
        controls: ['close'],
        prevNext: !0,
        prevNextTouch: !1,
        counterMessage: '[index] / [total]',
        caption: !0,
        autoCaption: !1,
        captionSmallDevice: !0,
        thumbnails: !0,
        thumbnailsNav: 'basic',
        thumbnailSizes: {
            1920: {
                width: 110,
                height: 80,
                gutter: 10
            },
            1280: {
                width: 90,
                height: 65,
                gutter: 10
            },
            680: {
                width: 70,
                height: 50,
                gutter: 8
            },
            480: {
                width: 60,
                height: 44,
                gutter: 5
            }
        },
        spacing: 0.1,
        smartResize: !0,
        overflow: !1,
        loadError: 'Sorry, an error occured while loading the content...',
        noContent: 'Sorry, no content was found!',
        prevNextKey: !0,
        scrollToNav: !1,
        scrollSensitivity: 15,
        zoomTo: 'auto',
        minZoom: 1.2,
        maxZoom: 4,
        doubleTapToZoom: !0,
        scrollToZoom: !1,
        pinchToZoom: !0,
        escapeToClose: !0,
        scrollToClose: !1,
        pinchToClose: !0,
        dragToClose: !0,
        tapToClose: !0,
        shareButtons: ['facebook', 'googleplus', 'twitter', 'pinterest', 'linkedin', 'reddit'],
        shareText: 'Share on',
        sharedUrl: 'deeplink',
        slideShowInterval: 4000,
        slideShowAutoPlay: !1,
        slideShowAutoStop: !1,
        countTimer: !0,
        countTimerBg: 'rgba(255,255,255,0.25)',
        countTimerColor: 'rgba(255,255,255,0.75)',
        mediaelement: !1,
        videoRatio: 16 / 9,
        videoMaxWidth: 1180,
        videoAutoPlay: !1,
        videoThumbnail: !1
    };
    var ModuloBox = function(options) {
        this.options = utils.extend(options, defaults);
        this.setVar()
    };
    var proto = ModuloBox.prototype = Object.create(EvEmitter.prototype);
    proto.init = function() {
        if (this.GUID) {
            return instances[this.GUID]
        }
        this.GUID = ++GUID;
        instances[this.GUID] = this;
        this.createDOM();
        this.setAnimation();
        this.getGalleries();
        this.openFromQuery()
    };
    proto.setVar = function() {
        var win = window,
            doc = document,
            nav = navigator;
        this.pre = 'mobx';
        this.gesture = {};
        this.buttons = {};
        this.slider = {};
        this.slides = {};
        this.cells = {};
        this.states = {};
        this.pointers = [];
        this.expando = expando;
        this.cache = cache;
        this.dragEvents = this.detectPointerEvents();
        this.browser = {
            touchDevice: ('ontouchstart' in win) || (nav.maxTouchPoints > 0) || (nav.msMaxTouchPoints > 0),
            pushState: 'history' in win && 'pushState' in history,
            fullScreen: this.detectFullScreen(),
            mouseWheel: 'onwheel' in doc.createElement('div') ? 'wheel' : doc.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll'
        };
        this.iframeVideo = this.iframeVideo();
        this.socialMedia = this.socialMedia()
    };
    proto.detectPointerEvents = function() {
        var nav = navigator;
        if (nav.pointerEnabled) {
            return {
                start: ['pointerdown'],
                move: ['pointermove'],
                end: ['pointerup', 'pointercancel']
            }
        }
        if (nav.msPointerEnabled) {
            return {
                start: ['MSPointerDown'],
                move: ['MSPointerMove'],
                end: ['MSPointerUp', 'MSPointerCancel']
            }
        }
        return {
            start: ['mousedown', 'touchstart'],
            move: ['mousemove', 'touchmove'],
            end: ['mouseup', 'mouseleave', 'touchend', 'touchcancel']
        }
    };
    proto.detectFullScreen = function() {
        var fullScreen = ['fullscreenEnabled', 'webkitFullscreenEnabled', 'mozFullScreenEnabled', 'msFullscreenEnabled'];
        for (var i = 0, l = fullScreen.length; i < l; i++) {
            if (document[fullScreen[i]]) {
                return {
                    element: ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'][i],
                    request: ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'][i],
                    change: ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'][i],
                    exit: ['exitFullscreen', 'webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen'][i]
                }
            }
        }
        var controls = this.options.controls,
            index = controls.indexOf('fullScreen');
        if (index > -1) {
            controls.splice(index, 1)
        }
        return null
    };
    proto.iframeVideo = function() {
        return {
            youtube: {
                reg: /(?:www\.)?youtu\.?be(?:\.com)?\/?.*?(?:watch|embed)?(?:.*v=|v\/|watch%3Fv%3D|\/)([\w\-_]+)&?/i,
                url: 'https://www.youtube.com/embed/[ID]?enablejsapi=1&rel=0&autoplay=1',
                share: 'https://www.youtube.com/watch?v=[ID]',
                poster: 'https://img.youtube.com/vi/[ID]/maxresdefault.jpg',
                thumb: 'https://img.youtube.com/vi/[ID]/default.jpg',
                play: {
                    event: 'command',
                    func: 'playVideo'
                },
                pause: {
                    event: 'command',
                    func: 'pauseVideo'
                }
            },
            vimeo: {
                reg: /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/)?(\d+)(?:[a-zA-Z0-9_\-]+)?/i,
                url: 'https://player.vimeo.com/video/[ID]?autoplay=1&api=1',
                share: 'https://vimeo.com/[ID]',
                poster: 'https://vimeo.com/api/v2/video/[ID].json',
                play: {
                    event: 'command',
                    method: 'play'
                },
                pause: {
                    event: 'command',
                    method: 'pause'
                }
            },
            dailymotion: {
                reg: /(?:www\.)?(?:dailymotion\.com(?:\/embed)(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=(?:[a-zA-Z0-9_\-]+))?/i,
                url: 'https://dailymotion.com/embed/video/[ID]?autoplay=1&api=postMessage',
                share: 'https://www.dailymotion.com/video/[ID]',
                poster: 'https://www.dailymotion.com/thumbnail/video/[ID]',
                thumb: 'https://www.dailymotion.com/thumbnail/video/[ID]',
                play: 'play',
                pause: 'pause'
            },
            wistia: {
                reg: /(?:www\.)?(?:wistia\.(?:com|net)|wi\.st)\/(?:(?:m|medias|projects)|embed\/(?:iframe|playlists))\/([a-zA-Z0-9_\-]+)/i,
                url: 'https://fast.wistia.net/embed/iframe/[ID]?version=3&enablejsapi=1&html5=1&autoplay=1',
                share: 'https://fast.wistia.net/embed/iframe/[ID]',
                poster: 'https://fast.wistia.com/oembed?url=https://home.wistia.com/medias/[ID].json',
                play: {
                    event: 'cmd',
                    method: 'play'
                },
                pause: {
                    event: 'cmd',
                    method: 'pause'
                }
            }
        }
    };
    proto.socialMedia = function() {
        return {
            facebook: 'https://www.facebook.com/sharer/sharer.php?u=[url]',
            googleplus: 'https://plus.google.com/share?url=[url]',
            twitter: 'https://twitter.com/intent/tweet?text=[text]&url=[url]',
            pinterest: 'https://www.pinterest.com/pin/create/button/?url=[url]&media=[image]&description=[text]',
            linkedin: 'https://www.linkedin.com/shareArticle?url=[url]&mini=true&title=[text]',
            reddit: 'https://www.reddit.com/submit?url=[url]&title=[text]',
            stumbleupon: 'https://www.stumbleupon.com/badge?url=[url]&title=[text]',
            tumblr: 'https://www.tumblr.com/share?v=3&u=[url]&t=[text]',
            blogger: 'https://www.blogger.com/blog_this.pyra?t&u=[url]&n=[text]',
            buffer: 'https://bufferapp.com/add?url=[url]title=[text]',
            digg: 'https://digg.com/submit?url=[url]&title=[text]',
            evernote: 'https://www.evernote.com/clip.action?url=[url]&title=[text]'
        }
    };
    proto.createDOM = function() {
        this.DOM = {};
        var elements = ['holder', 'overlay', 'slider', 'item', 'item-inner', 'ui', 'top-bar', 'bottom-bar', 'share-tooltip', 'counter', 'caption', 'caption-inner', 'thumbs-holder', 'thumbs-inner'];
        for (var i = 0; i < elements.length; i++) {
            this.DOM[utils.camelize(elements[i])] = utils.createEl('div', this.pre + '-' + elements[i])
        }
        this.appendDOM(this.DOM)
    };
    proto.appendDOM = function(dom) {
        var opt = this.options;
        dom.holder.appendChild(dom.overlay);
        dom.holder.appendChild(dom.slider);
        dom.holder.appendChild(dom.ui);
        for (var i = 0; i < 5; i++) {
            var slide = dom.item.cloneNode(!0);
            slide.appendChild(dom.itemInner.cloneNode(!0));
            dom.slider.appendChild(slide);
            this.slides[i] = slide
        }
        this.slides.length = dom.slider.children.length;
        this.createUI(dom, opt);
        dom.holder.setAttribute('tabindex', -1);
        dom.holder.setAttribute('aria-hidden', !0);
        this.DOM.comment = document.createComment(' ModuloBox (v' + version + ') by Themeone ');
        document.body.appendChild(this.DOM.comment);
        utils.dispatchEvent(this, 'modulobox', 'beforeAppendDOM', dom);
        document.body.appendChild(dom.holder);
        dom.topBar.height = dom.topBar.clientHeight
    };
    proto.createUI = function(dom, opt) {
        var shareIndex = opt.controls.indexOf('share');
        if (shareIndex > -1) {
            var buttons = opt.shareButtons,
                i = buttons.length;
            while (i--) {
                if (!this.socialMedia.hasOwnProperty(buttons[i])) {
                    buttons.splice(i, 1)
                }
            }
            if (buttons.length) {
                dom.ui.appendChild(dom.shareTooltip);
                if (opt.shareText) {
                    dom.shareTooltip.appendChild(utils.createEl('span')).textContent = opt.shareText
                }
                this.createButtons(buttons, dom.shareTooltip, 'shareOn')
            } else {
                opt.controls.splice(shareIndex, 1)
            }
        }
        if (opt.controls.length || opt.counterMessage) {
            var slideShow = opt.controls.indexOf('play');
            dom.ui.appendChild(dom.topBar);
            if (opt.counterMessage) {
                dom.topBar.appendChild(dom.counter)
            }
            if (opt.slideShowInterval < 1 && slideShow > -1) {
                opt.controls.splice(slideShow, 1)
            }
            if (opt.countTimer && slideShow > -1) {
                var timer = this.DOM.timer = utils.createEl('canvas', this.pre + '-timer');
                timer.setAttribute('width', 48);
                timer.setAttribute('height', 48);
                dom.topBar.appendChild(timer)
            }
            if (opt.controls.length) {
                var controls = opt.controls.slice();
                this.createButtons(controls.reverse(), dom.topBar)
            }
        }
        if (opt.caption || opt.thumbnails) {
            dom.ui.appendChild(dom.bottomBar);
            if (opt.caption) {
                dom.bottomBar.appendChild(dom.caption).appendChild(dom.captionInner)
            }
            if (opt.thumbnails) {
                dom.bottomBar.appendChild(dom.thumbsHolder).appendChild(dom.thumbsInner)
            }
        }
        if (opt.prevNext) {
            this.createButtons(['prev', 'next'], dom.ui)
        }
    };
    proto.createButtons = function(buttons, dom, event) {
        var length = buttons.length;
        for (var i = 0; i < length; i++) {
            var type = buttons[i];
            this.buttons[type] = utils.createEl('BUTTON', this.pre + '-' + type.toLowerCase());
            dom.appendChild(this.buttons[type]);
            if ((type && typeof this[type] === 'function') || event) {
                this.buttons[type].event = event ? event : type;
                this.buttons[type].action = type;
                if (event === 'shareOn') {
                    this.buttons[type].setAttribute('title', type.charAt(0).toUpperCase() + type.slice(1))
                }
            }
        }
    };
    proto.getGalleries = function() {
        this.galleries = {};
        var selectors = this.options.mediaSelector,
            sources = '';
        if (!selectors) {
            return !1
        }
        try {
            sources = document.querySelectorAll(selectors)
        } catch (error) {
            utils.error('Your current mediaSelector is not a valid selector: "' + selectors + '"')
        }
        for (var i = 0, l = sources.length; i < l; i++) {
            var source = sources[i],
                media = {};
            media.src = source.tagName === 'A' ? source.getAttribute('href') : null;
            media.src = source.tagName === 'IMG' ? source.currentSrc || source.src : media.src;
            media.src = source.getAttribute('data-src') || media.src;
            if (media.src) {
                this.getMediaAtts(source, media);
                this.setMediaType(media);
                if (media.type) {
                    this.getMediaThumb(source, media);
                    this.getVideoThumb(media);
                    this.getMediaCaption(source, media);
                    this.setMediaCaption(media);
                    var gallery = this.setGalleryName(source);
                    this.setGalleryFeatures(gallery, media);
                    media.index = gallery.length;
                    gallery.push(media);
                    this.setMediaEvent(source, gallery.name, media.index)
                }
            }
        }
        utils.dispatchEvent(this, 'modulobox', 'updateGalleries', this.galleries)
    };
    proto.addMedia = function(name, media) {
        if (!media || typeof media !== 'object') {
            utils.error('No media was found to addMedia() in a gallery');
            return !1
        }
        name = name === '' ? 1 : name;
        var gallery = this.galleries[name];
        gallery = !gallery ? (this.galleries[name] = []) : gallery;
        gallery.name = name;
        var length = media.length;
        for (var i = 0; i < length; i++) {
            var item = utils.cloneObject(media[i]);
            if (item.src) {
                this.setMediaType(item);
                this.getVideoThumb(item);
                this.setMediaCaption(item);
                this.setGalleryFeatures(gallery, item);
                item.index = gallery.length;
                gallery.push(item)
            }
        }
    };
    proto.setMediaType = function(media) {
        if (['image', 'video', 'iframe', 'HTML'].indexOf(media.type) > -1) {
            return
        }
        media.type = null;
        var source = media.src ? media.src : null;
        var extension = (source.split(/[?#]/)[0] || source).substr((~-source.lastIndexOf('.') >>> 0) + 2);
        if (/(jpg|jpeg|png|bmp|gif|tif|tiff|jfi|jfif|exif|svg)/i.test(extension) || ['external.xx.fbcdn', 'drscdn.500px.org'].indexOf(source) > -1) {
            media.type = 'image';
            media.src = this.getSrc(source)
        } else if (/(mp4|webm|ogv)/i.test(extension)) {
            media.type = 'video';
            media.format = 'html5'
        } else {
            var stream = this.iframeVideo;
            for (var type in stream) {
                if (stream.hasOwnProperty(type)) {
                    var regs = source.match(stream[type].reg);
                    if (regs && regs[1]) {
                        var object = stream[type];
                        media.type = 'video';
                        media.format = type;
                        media.share = object.share.replace('[ID]', regs[1]);
                        media.src = object.url.replace('[ID]', regs[1]);
                        media.pause = object.pause;
                        media.play = object.play;
                        if (this.options.videoThumbnail) {
                            media.poster = !media.poster && object.poster ? object.poster.replace('[ID]', regs[1]) : media.poster;
                            media.thumb = !media.thumb && object.poster ? object.poster.replace('[ID]', regs[1]) : media.thumb
                        }
                        break
                    }
                }
            }
        }
    };
    proto.getSrc = function(source) {
        var srcset = (source || '').split(/,/),
            length = srcset.length,
            width = 0;
        if (length <= 1) {
            return source
        }
        for (var i = 0; i < length; i++) {
            var parts = srcset[i].replace(/\s+/g, ' ').trim().split(/ /),
                value = parseFloat(parts[1]) || 0,
                unit = parts[1] ? parts[1].slice(-1) : null;
            if ((unit === 'w' && screen.width >= value && value > width) || !value || i === 0) {
                width = value;
                source = parts[0]
            }
        }
        return source
    };
    proto.getMediaAtts = function(source, media) {
        var auto = this.options.autoCaption,
            data = this.getAttr(source),
            img = source.firstElementChild;
        img = source.tagName !== 'IMG' && img && img.tagName === 'IMG' ? img : source;
        media.type = !media.type ? data.type || source.getAttribute('data-type') : media.type;
        media.title = data.title || source.getAttribute('data-title') || (auto ? img.title : null);
        media.desc = data.desc || source.getAttribute('data-desc') || (auto ? img.alt : null);
        media.thumb = data.thumb || source.getAttribute('data-thumb');
        media.poster = this.getSrc(data.poster || source.getAttribute('data-poster'));
        media.width = data.width || source.getAttribute('data-width');
        media.height = data.height || source.getAttribute('data-height');
        if (media.title === media.desc) {
            media.desc = null
        }
    };
    proto.getMediaThumb = function(source, media) {
        var thumbnail = source.getElementsByTagName('img');
        if (!media.thumb && thumbnail[0]) {
            media.thumb = thumbnail[0].src
        }
    };
    proto.getVideoThumb = function(media) {
        if (!this.options.videoThumbnail || media.type !== 'video' || media.format === 'html5') {
            return
        }
        var hasPoster = media.poster && media.poster.indexOf('.json') > -1,
            hasThumb = media.thumb && media.thumb.indexOf('.json') > -1;
        if (hasPoster || hasThumb) {
            var uri = hasPoster ? media.poster : media.thumb,
                xhr = new XMLHttpRequest();
            xhr.onload = function(event) {
                var response = event.target.responseText;
                response = JSON.parse(response);
                response = response.hasOwnProperty(0) ? response[0] : response;
                if (response) {
                    media.poster = response.thumbnail_large || response.thumbnail_url;
                    if (media.dom) {
                        media.dom.style.backgroundImage = 'url("' + media.poster + '")'
                    }
                    if (hasThumb) {
                        var thumb = response.thumbnail_small || response.thumbnail_url;
                        if (typeof media.thumb === 'object') {
                            media.thumb.style.backgroundImage = 'url("' + thumb + '")'
                        } else {
                            media.thumb = thumb
                        }
                    }
                }
            }.bind(this);
            xhr.open('GET', encodeURI(uri), !0);
            setTimeout(function() {
                xhr.send()
            }, 0)
        }
    };
    proto.getMediaCaption = function(source, media) {
        var next = source.nextElementSibling;
        if (next && next.tagName === 'FIGCAPTION') {
            var caption = next.innerHTML;
            if (!media.title) {
                media.title = caption
            } else if (!media.desc) {
                media.desc = caption
            }
        }
    };
    proto.setMediaCaption = function(media) {
        media.title = media.title ? '<div class="' + this.pre + '-title">' + media.title.trim() + '</div>' : '';
        media.desc = media.desc ? '<div class="' + this.pre + '-desc">' + media.desc.trim() + '</div>' : '';
        media.caption = media.title + media.desc
    };
    proto.getGalleryName = function(source) {
        var parent = source,
            node = 0;
        while (parent && node < 2) {
            parent = parent.parentNode;
            if (parent && parent.tagName === 'FIGURE' && parent.parentNode) {
                return parent.parentNode.getAttribute('id')
            }
            node++
        }
    };
    proto.setGalleryName = function(source) {
        var data = this.getAttr(source);
        var name = data.rel || source.getAttribute('data-rel');
        name = !name ? this.getGalleryName(source) : name;
        name = !name ? Object.keys(this.galleries).length + 1 : name;
        var gallery = this.galleries[name];
        gallery = !gallery ? (this.galleries[name] = []) : gallery;
        gallery.name = name;
        return gallery
    };
    proto.setGalleryFeatures = function(gallery, media) {
        if (!gallery.zoom && media.type === 'image') {
            gallery.zoom = !0
        }
        if (!gallery.download && (media.type === 'image' || media.format === 'html5')) {
            gallery.download = !0
        }
    };
    proto.setMediaEvent = function(source, name, index) {
        if (source.mobxListener) {
            source.removeEventListener('click', source.mobxListener, !1)
        }
        source.mobxListener = this.open.bind(this, name, index);
        source.addEventListener('click', source.mobxListener, !1)
    };
    proto.open = function(name, index, event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation()
        }
        if (!this.GUID) {
            return !1
        }
        if (!this.galleries.hasOwnProperty(name)) {
            utils.error('This gallery name : "' + name + '", does not exist!');
            return !1
        }
        if (!this.galleries[name].length) {
            utils.error('Sorry, no media was found for the current gallery.');
            return !1
        }
        if (!this.galleries[name][index]) {
            utils.error('Sorry, no media was found for the current media index: ' + index);
            return !1
        }
        utils.dispatchEvent(this, 'modulobox', 'beforeOpen', name, index);
        this.slides.index = index;
        this.gallery = this.galleries[name];
        this.gallery.name = name;
        this.gallery.index = index;
        this.gallery.loaded = !1;
        this.removeContent();
        this.wrapAround();
        this.hideScrollBar();
        this.setSlider();
        this.setThumbs();
        this.setCaption();
        this.setMedia(this.options.preload);
        this.updateMediaInfo();
        this.replaceState();
        this.setControls();
        this.bindEvents(!0);
        this.show();
        if (this.options.videoAutoPlay) {
            this.appendVideo()
        }
        if (this.options.slideShowAutoPlay && this.options.controls.indexOf('play') > -1 && (!this.options.videoAutoPlay || this.galleries[name][index].type !== 'video')) {
            this.startSlideShow()
        }
        this.states.zoom = !1;
        this.states.open = !0
    };
    proto.openFromQuery = function() {
        var query = this.getQueryString(window.location.search);
        if (query.hasOwnProperty('guid') && query.hasOwnProperty('mid')) {
            var open = this.open(decodeURIComponent(query.guid), decodeURIComponent(query.mid) - 1);
            if (open === !1) {
                this.replaceState(!0)
            }
        }
    };
    proto.show = function() {
        var holder = this.DOM.holder,
            method = this.options.rightToLeft ? 'add' : 'remove';
        holder.setAttribute('aria-hidden', !1);
        utils.removeClass(holder, this.pre + '-idle');
        utils.removeClass(holder, this.pre + '-panzoom');
        utils.removeClass(holder, this.pre + '-will-close');
        utils[method + 'Class'](holder, this.pre + '-rtl');
        utils.addClass(holder, this.pre + '-open')
    };
    proto.close = function(event) {
        if (event) {
            event.preventDefault()
        }
        var holder = this.DOM.holder,
            gallery = this.gallery,
            index = gallery ? gallery.index : 'undefined',
            name = gallery ? gallery.name : 'undefined';
        utils.dispatchEvent(this, 'modulobox', 'beforeClose', name, index);
        if (this.states.fullScreen) {
            this.exitFullScreen();
            utils.removeClass(holder, this.pre + '-fullscreen')
        }
        this.share();
        this.stopSlideShow();
        this.pauseVideo();
        this.bindEvents(!1);
        this.replaceState(!0);
        this.hideScrollBar();
        holder.setAttribute('aria-hidden', !0);
        utils.removeClass(holder, this.pre + '-open');
        this.states.open = !1
    };
    proto.setControls = function() {
        var gallery = this.gallery,
            options = this.options,
            buttons = this.buttons;
        if (this.DOM.counter) {
            this.DOM.counter.style.display = (gallery.initialLength > 1) ? '' : 'none'
        }
        if (options.controls.indexOf('play') > -1) {
            buttons.play.style.display = (gallery.initialLength > 1) ? '' : 'none'
        }
        if (options.controls.indexOf('zoom') > -1) {
            buttons.zoom.style.display = !gallery.zoom ? 'none' : ''
        }
        if (options.controls.indexOf('download') > -1) {
            buttons.download.style.display = !gallery.download ? 'none' : ''
        }
        this.setPrevNextButtons()
    };
    proto.setPrevNextButtons = function() {
        if (this.options.prevNext) {
            var hide = this.slider.width < 680 && this.browser.touchDevice && !this.options.prevNextTouch;
            this.buttons.prev.style.display = this.buttons.next.style.display = (this.gallery.length > 1 && !hide) ? '' : 'none'
        }
    };
    proto.setCaption = function() {
        this.states.caption = !(!this.options.captionSmallDevice && (this.slider.width <= 480 || this.slider.height <= 480));
        this.DOM.caption.style.display = this.states.caption ? '' : 'none'
    };
    proto.hideScrollBar = function() {
        if (!this.options.scrollBar) {
            var open = this.states.open,
                scrollBar = open === 'undefined' || !open ? !0 : !1;
            document.body.style.overflow = document.documentElement.style.overflow = scrollBar ? 'hidden' : ''
        }
    };
    proto.bindEvents = function(bind) {
        var win = window,
            doc = document,
            opt = this.options,
            holder = this.DOM.holder,
            buttons = this.buttons,
            scrollMethod;
        for (var type in buttons) {
            if (buttons.hasOwnProperty(type)) {
                var DOM = (type !== 'share') ? buttons[type] : win;
                utils.handleEvents(this, DOM, ['click', 'touchend'], buttons[type].event, bind)
            }
        }
        utils.handleEvents(this, holder, this.dragEvents.start, 'touchStart', bind);
        utils.handleEvents(this, win, ['keydown'], 'keyDown', bind);
        utils.handleEvents(this, win, ['resize', 'orientationchange'], 'resize', bind);
        utils.handleEvents(this, holder, ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'otransitionend', 'MSTransitionEnd'], 'opened');
        utils.handleEvents(this, holder, ['touchend'], 'disableZoom', bind);
        if (this.browser.fullScreen) {
            utils.handleEvents(this, doc, [this.browser.fullScreen.change], 'toggleFullScreen', bind)
        }
        if (opt.history) {
            utils.handleEvents(this, win, ['mouseout'], 'mouseOut', bind)
        }
        if (opt.timeToIdle > 0) {
            utils.handleEvents(this, holder, ['mousemove'], 'mouseMove', bind)
        }
        if (!opt.contextMenu) {
            utils.handleEvents(this, holder, ['contextmenu'], 'contextMenu', bind)
        }
        if (!opt.mouseWheel) {
            this.disableScroll(bind)
        }
        if (opt.scrollToZoom) {
            scrollMethod = 'scrollToZoom'
        } else if (opt.scrollToNav) {
            scrollMethod = 'scrollToNav'
        } else if (opt.scrollToClose) {
            scrollMethod = 'scrollToClose'
        }
        if (scrollMethod) {
            utils.handleEvents(this, holder, [this.browser.mouseWheel], scrollMethod, bind)
        }
    };
    proto.opened = function(event) {
        if (event.propertyName === 'visibility' && event.target === this.DOM.holder) {
            var name = this.gallery.name,
                index = this.gallery.index;
            if (!this.states.open) {
                this.removeContent();
                utils.dispatchEvent(this, 'modulobox', 'afterClose', name, index)
            } else {
                utils.dispatchEvent(this, 'modulobox', 'afterOpen', name, index)
            }
        }
    };
    proto.mouseOut = function(event) {
        var e = event ? event : window.event,
            from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName === 'HTML') {
            this.replaceState()
        }
    };
    proto.mouseMove = function() {
        var holder = this.DOM.holder,
            idleClass = this.pre + '-idle';
        clearTimeout(this.states.idle);
        this.states.idle = setTimeout(function() {
            if (!utils.hasClass(holder, this.pre + '-open-tooltip')) {
                utils.addClass(holder, idleClass)
            }
        }.bind(this), this.options.timeToIdle);
        utils.removeClass(holder, idleClass)
    };
    proto.contextMenu = function(event) {
        var target = event.target,
            tagName = target.tagName,
            className = target.className;
        if (tagName === 'IMG' || tagName === 'VIDEO' || className.indexOf(this.pre + '-video') > -1 || className.indexOf(this.pre + '-thumb-bg') > -1 || className === this.pre + '-thumb') {
            event.preventDefault()
        }
    };
    proto.disableScroll = function(bind) {
        var doc = document,
            win = window;
        var prevent = function(e) {
            if (!this.isEl(e)) {
                return
            }
            e = e || win.event;
            if (e.preventDefault) {
                e.preventDefault();
                e.returnValue = !1;
                return !1
            }
        };
        win.onwheel = win.ontouchmove = win.onmousewheel = doc.onmousewheel = doc.onmousewheel = bind ? prevent.bind(this) : null
    };
    proto.scrollToZoom = function(event) {
        if (!this.isEl(event)) {
            return
        }
        var data = this.normalizeWheel(event);
        if (data && data.deltaY) {
            var cell = this.getCell(),
                scale = cell.attraction.s || cell.position.s;
            scale = Math.min(this.options.maxZoom, Math.max(1, scale - Math.abs(data.deltaY) / data.deltaY));
            this.stopSlideShow();
            this.zoomTo(event.clientX, event.clientY, Math.round(scale * 10) / 10)
        }
    };
    proto.scrollToNav = function(event) {
        if (!this.isEl(event)) {
            return
        }
        var data = this.normalizeWheel(event);
        if (data && data.delta) {
            this[data.delta * this.isRTL() < 0 ? 'prev' : 'next']()
        }
    };
    proto.scrollToClose = function(event) {
        if (!this.isEl(event)) {
            return
        }
        event.preventDefault();
        this.close()
    };
    proto.disableZoom = function(event) {
        var node = event.target;
        while (node) {
            if (['VIDEO', 'INPUT', 'A'].indexOf(node.tagName) > -1) {
                return
            }
            node = node.parentElement
        }
        event.preventDefault()
    };
    proto.resize = function(event) {
        this.DOM.topBar.height = this.DOM.topBar.clientHeight;
        this.share();
        this.setSlider();
        this.setThumbsPosition();
        this.setCaption();
        this.resizeMedia();
        this.updateMediaInfo();
        this.setPrevNextButtons();
        this.states.zoom = !1;
        utils.removeClass(this.DOM.holder, this.pre + '-panzoom');
        utils.dispatchEvent(this, 'modulobox', 'resize', event)
    };
    proto.resizeMedia = function() {
        var slides = this.slides;
        for (var i = 0; i < slides.length; i++) {
            if (!this.gallery) {
                break
            }
            var media = this.gallery[slides[i].media];
            if (media && ((media.dom && media.dom.loaded) || (media.dom && ['video', 'iframe', 'HTML'].indexOf(media.type) > -1))) {
                this.setMediaSize(media, slides[i])
            }
        }
    };
    proto.isEl = function(event) {
        var name = event.target.className;
        name = typeof name === 'string' ? name : name.baseVal;
        return name.indexOf(this.pre) > -1
    };
    proto.isZoomable = function() {
        var media = this.getMedia(),
            zoom = !1;
        if (media.type === 'image' && media.dom && media.dom.size && media.dom.size.scale > 1) {
            zoom = !0
        }
        this.DOM.holder.setAttribute('data-zoom', zoom);
        return zoom
    };
    proto.isDownloadable = function() {
        var media = this.getMedia(),
            download = !0;
        if (media.type !== 'image' && media.format !== 'html5') {
            download = !1
        }
        this.DOM.holder.setAttribute('data-download', download);
        return download
    };
    proto.isRTL = function() {
        return this.options.rightToLeft ? -1 : 1
    };
    proto.addAttr = function(el, attrs) {
        var cacheID;
        if (typeof el[this.expando] === 'undefined') {
            cacheID = this.cache.uid++;
            el[this.expando] = cacheID;
            this.cache[cacheID] = {}
        } else {
            cacheID = el[this.expando]
        }
        for (var attr in attrs) {
            if (attrs.hasOwnProperty(attr)) {
                this.cache[cacheID][attr] = attrs[attr]
            }
        }
    };
    proto.getAttr = function(el) {
        return this.cache[el[this.expando]] || {}
    };
    proto.getThumbHeight = function() {
        var thumb = this.thumbs;
        return thumb.height > 0 && thumb.width > 0 ? thumb.height + Math.min(10, thumb.gutter) * 2 : 0
    };
    proto.getMedia = function() {
        var gallery = this.gallery;
        return gallery ? gallery[gallery.index] : null
    };
    proto.getCell = function() {
        var slides = this.slides,
            index = utils.modulo(slides.length, slides.index);
        return this.cells[index]
    };
    proto.removeContent = function() {
        for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides[i];
            this.unloadMedia(slide);
            this.removeMedia(slide);
            slide.index = slide.media = null
        }
        this.removeMedia(this.DOM.thumbsHolder)
    };
    proto.getQueryString = function(search) {
        var params = {};
        search.substr(1).split('&').forEach(function(param) {
            param = param.split('=');
            params[decodeURIComponent(param[0])] = param.length > 1 ? decodeURIComponent(param[1]) : ''
        });
        return params
    };
    proto.setQueryString = function(key) {
        var search = window.location.search,
            query = this.getQueryString(search);
        search = decodeURI(search);
        for (var prop in key) {
            if (key.hasOwnProperty(prop)) {
                var replace = encodeURIComponent(key[prop]);
                if (query.hasOwnProperty(prop)) {
                    var value = query[prop];
                    if (!replace) {
                        search = search.replace('&' + prop + '=' + value, '');
                        search = search.replace(prop + '=' + value, '')
                    } else {
                        search = search.replace(prop + '=' + value, prop + '=' + replace)
                    }
                } else {
                    if (replace) {
                        search = search + (!search ? '?' : '&') + prop + '=' + replace
                    } else {
                        search = search.replace(prop + '=', '')
                    }
                }
            }
        }
        var base = [location.protocol, '//', location.host, location.pathname].join('');
        search = !search.substr(1) ? search.substr(1) : search;
        return encodeURI(base + search)
    };
    proto.replaceState = function(remove) {
        if ((this.options.history || remove) && this.browser.pushState && !this.states.push) {
            var prevData = window.history.state,
                data = {
                    guid: !remove ? this.gallery.name : '',
                    mid: !remove ? utils.modulo(this.gallery.initialLength, this.gallery.index) + 1 : ''
                };
            if (!prevData || prevData.mid !== data.mid) {
                var search = this.setQueryString(data);
                try {
                    window.history.replaceState(data, '', search)
                } catch (error) {
                    this.options.history = !1;
                    utils.error('SecurityError: A history state object with origin \'null\' cannot be created. Please run the script on a server.')
                }
            }
        }
        this.states.push = !1
    };
    proto.normalizeWheel = function(event) {
        var ev = event || window.event,
            data = null,
            deltaX, deltaY, delta;
        event.preventDefault();
        if ('detail' in ev) {
            deltaY = ev.detail * -1
        }
        if ('wheelDelta' in ev) {
            deltaY = ev.wheelDelta * -1
        }
        if ('wheelDeltaY' in ev) {
            deltaY = ev.wheelDeltaY * -1
        }
        if ('wheelDeltaX' in ev) {
            deltaX = ev.wheelDeltaX * -1
        }
        if ('deltaY' in ev) {
            deltaY = ev.deltaY
        }
        if ('deltaX' in ev) {
            deltaX = ev.deltaX * -1
        }
        if (ev.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40
        } else if (ev.deltaMode === 2) {
            deltaX *= 100;
            deltaY *= 100
        }
        delta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;
        delta = Math.min(100, Math.max(-100, delta));
        if (Math.abs(delta) < this.options.scrollSensitivity) {
            this.states.prevDelta = delta;
            return data
        }
        var time = +new Date();
        if (Math.abs(delta) > Math.abs(this.states.prevDelta) || time - this.states.prevScroll > 60) {
            data = {
                'deltaX': deltaX,
                'deltaY': deltaY,
                'delta': delta
            }
        }
        this.states.prevDelta = delta;
        this.states.prevScroll = time;
        return data
    };
    proto.share = function(event) {
        if (event && event.target.tagName === 'VIDEO') {
            return
        }
        var holder = this.DOM.holder,
            className = this.pre + '-open-tooltip',
            element = event ? event.target.className : null,
            method = utils.hasClass(holder, className) ? 'remove' : 'add';
        if ((method === 'remove' && (element !== this.pre + '-share' || !event)) || element === this.pre + '-share') {
            if (method === 'add') {
                this.setShareTooltip()
            }
            utils[method + 'Class'](holder, className)
        }
    };
    proto.shareOn = function(event) {
        var type = event.target.action,
            gallery = this.gallery,
            media = this.getMedia(),
            image = media.type === 'image' ? media.src : media.poster,
            url = this.socialMedia[type],
            uri;
        if (url) {
            if (this.options.sharedUrl === 'page') {
                uri = [location.protocol, '//', location.host, location.pathname].join('')
            } else if (this.options.sharedUrl === 'deeplink' || ['iframe', 'HTML'].indexOf(media.type) > -1) {
                uri = this.setQueryString({
                    guid: gallery.name,
                    mid: gallery.index + 1
                })
            } else {
                uri = media.src.replace(/\s/g, '').split(',')[0];
                if (media.type === 'video' && media.format !== 'html5') {
                    uri = media.share
                }
            }
            var link = utils.createEl('a');
            link.href = image;
            image = link.href;
            link.href = uri;
            uri = link.href;
            var tmp = utils.createEl('div');
            tmp.innerHTML = media.caption;
            var text = (tmp.textContent || tmp.innerText).replace(/\s+/g, ' ').trim() || '';
            url = url.replace('[url]', encodeURIComponent(uri)).replace('[image]', encodeURIComponent(image)).replace('[text]', encodeURIComponent(text || document.title));
            if (url) {
                var left = Math.round(window.screenX + (window.outerWidth - 626) / 2),
                    top = Math.round(window.screenY + (window.outerHeight - 436) / 2);
                window.open(url, this.pre + '_share', 'status=0,resizable=1,location=1,toolbar=0,width=626,height=436,top=' + top + ',left=' + left)
            }
        } else {
            utils.error('This social share media does not exist')
        }
        return !1
    };
    proto.setShareTooltip = function() {
        if (this.options.controls.indexOf('share') > -1) {
            var attribute = 'right',
                tooltip = this.DOM.shareTooltip,
                width = tooltip.clientWidth,
                button = this.buttons.share.getBoundingClientRect(),
                position = button.left - width + button.width / 2 + 20;
            if (position < 0) {
                attribute = 'left';
                position = button.left + button.width / 2 - 20
            }
            tooltip.setAttribute('data-position', attribute);
            tooltip.style.top = this.DOM.topBar.height + 6 + 'px';
            tooltip.style.left = position + 'px'
        }
    };
    proto.download = function() {
        if (!this.isDownloadable()) {
            return !1
        }
        var media = this.getMedia(),
            url = media.src.replace(/\s/g, '').split(',')[0],
            link = document.createElement('a');
        link.href = url;
        link.download = new Date().getTime();
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    };
    proto.fullScreen = function() {
        var fullScreenElement = this.browser.fullScreen.element;
        if (!document[fullScreenElement]) {
            this.requestFullScreen()
        } else {
            this.exitFullScreen()
        }
    };
    proto.toggleFullScreen = function() {
        var holder = this.DOM.holder,
            fullScreenElement = document[this.browser.fullScreen.element];
        if (!fullScreenElement) {
            this.share();
            this.states.fullScreen = !1;
            utils.removeClass(holder, this.pre + '-fullscreen')
        } else if (fullScreenElement === holder) {
            this.setShareTooltip();
            this.states.fullScreen = !0;
            utils.addClass(holder, this.pre + '-fullscreen')
        }
        this.videoFullScreen()
    };
    proto.requestFullScreen = function() {
        var request = this.browser.fullScreen.request;
        if (document.documentElement[request]) {
            this.DOM.holder[request]()
        }
    };
    proto.exitFullScreen = function() {
        var exit = this.browser.fullScreen.exit;
        if (document[exit]) {
            document[exit]()
        }
    };
    proto.play = function() {
        if (this.states.play) {
            this.stopSlideShow()
        } else {
            this.startSlideShow()
        }
    };
    proto.startSlideShow = function() {
        var start = 0,
            gallery = this.gallery,
            options = this.options,
            loop = this.states.loop,
            autoStop = options.slideShowAutoStop,
            cycle = Math.max(120, options.slideShowInterval),
            count = options.countTimer,
            canvas = count && this.DOM.timer ? this.DOM.timer.getContext('2d') : null;
        var countDown = (function(now) {
            now = !now ? +new Date() : now;
            start = !start ? now : start;
            if (!loop || autoStop) {
                if (gallery.index === gallery.initialLength - 1) {
                    this.stopSlideShow();
                    return
                }
            }
            if (count && canvas) {
                var percent = Math.min(1, (now - start + cycle) / cycle - 1),
                    radians = percent * 360 * (Math.PI / 180);
                canvas.clearRect(0, 0, 48, 48);
                this.timerProgress(canvas, options.countTimerBg, 100);
                this.timerProgress(canvas, options.countTimerColor, radians)
            }
            if (now >= start + cycle) {
                start = now;
                this.slideTo(this.slides.index + 1, !0)
            }
            this.timer = requestAnimationFrame(countDown)
        }).bind(this);
        utils.addClass(this.DOM.holder, this.pre + '-autoplay');
        this.states.play = !0;
        this.timer = requestAnimationFrame(countDown)
    };
    proto.stopSlideShow = function() {
        cancelAnimationFrame(this.timer);
        utils.removeClass(this.DOM.holder, this.pre + '-autoplay');
        this.states.play = !1
    };
    proto.timerProgress = function(canvas, color, end) {
        var start = 1.5 * Math.PI;
        canvas.strokeStyle = color;
        canvas.lineWidth = 5;
        canvas.beginPath();
        canvas.arc(24, 24, 18, start, start + end, !1);
        canvas.stroke()
    };
    proto.appendVideo = function() {
        var media = this.getMedia();
        if (media.type !== 'video') {
            return
        }
        utils.addClass(media.dom, this.pre + '-loading');
        utils.removeClass(media.dom, this.pre + '-playing');
        if (!media.video) {
            if (media.format === 'html5') {
                media.video = utils.createEl('video');
                media.video.setAttribute('controls', '');
                media.video.setAttribute('autoplay', '');
                var urls = media.src.replace(/\s/g, '').split(',');
                for (var i = 0; i < urls.length; i++) {
                    var frag = document.createDocumentFragment(),
                        source = utils.createEl('source'),
                        type = (/^.+\.([^.]+)$/).exec(urls[i]);
                    if (type && ['mp4', 'webm', 'ogv'].indexOf(type[1]) > -1) {
                        source.src = urls[i];
                        source.setAttribute('type', 'video/' + (type[1] === 'ogv' ? 'ogg' : type[1]));
                        frag.appendChild(source)
                    }
                    media.video.appendChild(frag)
                }
            } else if (media.format) {
                media.video = utils.createEl('iframe');
                media.video.src = media.src;
                media.video.setAttribute('frameborder', 0);
                media.video.setAttribute('allowfullscreen', '')
            }
            media.video.setAttribute('width', '100%');
            media.video.setAttribute('height', '100%')
        }
        if (!media.dom.firstChild) {
            media.dom.appendChild(media.video);
            if (media.format !== 'html5') {
                media.video.loaded = !1
            }
        }
        this.playVideo(media)
    };
    proto.onVideoLoaded = function(media) {
        media.video.loaded = !0;
        utils.removeClass(media.dom, this.pre + '-loading');
        utils.addClass(media.dom, this.pre + '-playing');
        this.cloneVideo(media)
    };
    proto.cloneVideo = function(media) {
        if (this.states.loop && media.format === 'html5') {
            var gallery = this.gallery,
                length = gallery.length,
                initial = gallery.initialLength,
                current = utils.modulo(initial, media.index);
            for (var i = 0; i < length; i++) {
                var index = utils.modulo(initial, gallery[i].index);
                if (index === current && gallery[i].index !== media.index) {
                    gallery[i].video = media.video
                }
            }
        }
    };
    proto.videoFullScreen = function() {
        var media = this.getMedia(),
            fullScreen = this.states.fullScreen;
        if (media.type === 'video' && media.format !== 'html5' && media.video) {
            media.video[fullScreen ? 'removeAttribute' : 'setAttribute']('allowfullscreen', '')
        }
    };
    proto.playVideo = function(media) {
        if (media.video.loaded) {
            media.video.getClientRects();
            utils.removeClass(media.dom, this.pre + '-loading');
            utils.addClass(media.dom, this.pre + '-playing');
            if (media.format !== 'html5') {
                if (media.play) {
                    var message = typeof media.play === 'object' ? JSON.stringify(media.play) : String(media.play);
                    media.video.contentWindow.postMessage(message, '*')
                }
            } else if (!media.video.error) {
                if (typeof MediaElementPlayer === 'function' && typeof jQuery !== 'undefined' && this.options.mediaelement) {
                    var mejs = (media.video.tagName === 'VIDEO') ? media.video : media.video.getElementsByTagName('video')[0];
                    if (mejs.player) {
                        mejs.player.setControlsSize()
                    }
                    mejs.play()
                } else {
                    media.video.play()
                }
            }
        } else {
            var _this = this;
            if (typeof jQuery !== 'undefined' && typeof MediaElementPlayer === 'function' && !media.play && this.options.mediaelement && !media.video.player) {
                MediaElementPlayer(media.video, {
                    features: ['playpause', 'stop', 'current', 'progress', 'duration', 'volume', 'fullscreen'],
                    videoVolume: 'horizontal',
                    startVolume: 0.8,
                    keyActions: !1,
                    enableKeyboard: !1,
                    iPadUseNativeControls: !0,
                    iPhoneUseNativeControls: !0,
                    AndroidUseNativeControls: !0,
                    success: function(mejs) {
                        mejs.addEventListener('loadeddata', function() {
                            media.video = media.dom.lastChild;
                            if (media.video) {
                                var offScreen = media.video.previousSibling;
                                if (offScreen && offScreen.parentNode) {
                                    offScreen.parentNode.removeChild(offScreen)
                                }
                                _this.onVideoLoaded(media)
                            }
                        }, media, !1)
                    },
                    error: function() {
                        _this.onVideoLoaded(media)
                    }
                })
            } else if (!media.video.onload) {
                media.video.onload = media.video.onerror = media.video.onloadedmetadata = function() {
                    if (media.dom.firstChild) {
                        _this.onVideoLoaded(media);
                        _this.videoFullScreen()
                    }
                };
                media.video.src = media.src.replace(/\s/g, '').split(',')[0]
            }
        }
    };
    proto.pauseVideo = function() {
        var media = this.getMedia();
        if (media && media.type === 'video' && media.video) {
            utils.removeClass(media.dom, this.pre + '-playing');
            if (!media.video.loaded) {
                media.dom.innerHTML = '';
                utils.removeClass(media.dom, this.pre + '-loading');
                return
            }
            if (media.format === 'html5') {
                if (typeof MediaElementPlayer === 'function' && typeof jQuery !== 'undefined' && this.options.mediaelement) {
                    var mejs = (media.video.tagName === 'VIDEO') ? media.video : media.video.getElementsByTagName('video')[0];
                    mejs.pause()
                } else {
                    media.video.pause()
                }
            } else {
                if (media.pause && media.format !== 'dailymotion') {
                    var message = typeof media.pause === 'object' ? JSON.stringify(media.pause) : String(media.pause);
                    media.video.contentWindow.postMessage(message, '*')
                } else {
                    media.dom.innerHTML = '';
                    media.video = null
                }
            }
        }
    };
    proto.insertMedia = function(media_index, slide_index) {
        var media = this.gallery[media_index];
        if (!media) {
            return
        }
        if (typeof media.index === 'undefined') {
            media.index = this.gallery.indexOf(media)
        }
        this.buildMedia(media);
        this.appendMedia(media, slide_index);
        this.loadMedia(media, slide_index)
    };
    proto.buildMedia = function(media) {
        if (typeof media.dom === 'undefined') {
            switch (media.type) {
                case 'image':
                    media.dom = utils.createEl('img', this.pre + '-img');
                    media.dom.src = media.src;
                    break;
                case 'video':
                    media.dom = utils.createEl('div', this.pre + '-video');
                    if (media.poster) {
                        media.dom.style.backgroundImage = 'url("' + media.poster + '")'
                    } else {
                        media.dom.loaded = !0
                    }
                    break;
                case 'iframe':
                    media.dom = utils.createEl('iframe', this.pre + '-iframe');
                    media.dom.setAttribute('allowfullscreen', '');
                    media.dom.setAttribute('frameborder', 0);
                    media.dom.src = media.src;
                    break;
                case 'HTML':
                    var element = media.src;
                    var content = document.querySelector(element);
                    media.dom = utils.createEl('div', this.pre + '-html');
                    media.dom.appendChild(utils.createEl('div', this.pre + '-html-inner'));
                    media.dom.firstChild.innerHTML = content ? content.innerHTML : null;
                    media.src = content ? content : '';
                    media.dom.loaded = !0;
                    break
            }
            if (!media.type || !media.src) {
                media.dom = utils.createEl('div', this.pre + '-error');
                media.dom.textContent = this.options.noContent;
                media.dom.loaded = !0;
                media.dom.error = !0;
                utils.dispatchEvent(this, 'modulobox', 'noContent', this.gallery.name, parseInt(media.index, 10))
            }
        }
    };
    proto.appendMedia = function(media, slide_index) {
        var slide = this.slides[slide_index],
            holder = slide.firstChild,
            loader;
        if (!holder.childElementCount) {
            var fragment = document.createDocumentFragment();
            loader = utils.createEl('div', this.pre + '-loader');
            fragment.appendChild(loader);
            fragment.appendChild(media.dom);
            holder.appendChild(fragment)
        } else {
            var oldMedia = holder.lastChild;
            loader = holder.firstChild;
            loader.style.visibility = '';
            if (media.dom !== oldMedia) {
                var method = holder.childElementCount === 1 ? 'appendChild' : 'replaceChild';
                holder[method](media.dom, oldMedia)
            }
        }
        slide.media = media.index
    };
    proto.loadMedia = function(media, slide_index) {
        if (media.dom.loaded) {
            this.showMedia(media, slide_index);
            return
        }
        var _this = this,
            dom = media.type === 'iframe' ? media.dom : media.dom.img = new Image();
        var onComplete = function() {
            if (!media.dom.error) {
                utils.dispatchEvent(_this, 'modulobox', 'loadComplete', _this.gallery.name, parseInt(media.index, 10))
            }
            media.dom.loaded = media.type !== 'iframe' ? !0 : !1;
            _this.showMedia(media, slide_index)
        };
        dom.onload = onComplete;
        dom.onerror = function(e) {
            if (media.type !== 'video') {
                media.dom = utils.createEl('p', _this.pre + '-error');
                media.dom.textContent = _this.options.loadError;
                media.dom.error = !0;
                _this.appendMedia(media, slide_index)
            }
            utils.dispatchEvent(_this, 'modulobox', 'loadError', _this.gallery.name, parseInt(media.index, 10));
            onComplete()
        };
        dom.src = (media.type === 'video') ? media.poster : media.src
    };
    proto.unloadMedia = function(slide) {
        if (!this.gallery) {
            return
        }
        var index = slide.media,
            media = this.gallery[index];
        if (!media || !media.dom) {
            return
        }
        if (this.options.unload && media.type === 'image' && !media.dom.loaded && !media.dom.complete && !media.dom.naturalWidth) {
            media.dom.onload = null;
            media.dom.onerror = null;
            media.dom.src = '';
            if (media.dom.img) {
                media.dom.img.onload = null;
                media.dom.img.onerror = null;
                media.dom.img.src = '';
                delete media.dom.img
            }
            delete media.dom
        } else if (media.type === 'video' && media.format !== 'html5' && media.dom.firstChild) {
            media.video = null;
            media.dom.removeChild(media.dom.firstChild)
        }
    };
    proto.removeMedia = function(holder) {
        var content = holder.firstChild;
        if (!content) {
            return
        }
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
    };
    proto.showMedia = function(media, slide_index) {
        var slider = this.slider;
        if (this.options.fadeIfSettle && !slider.settle && !media.dom.revealed) {
            return
        }
        var slide = this.slides[slide_index],
            gallery = this.gallery,
            holder = slide.firstChild,
            loader = holder.firstChild,
            preload = this.options.preload;
        this.setMediaSize(media, slide);
        if (media.index === gallery.index) {
            this.isZoomable()
        }
        utils.addClass(media.dom, this.pre + '-media-loaded');
        media.dom.revealed = !0;
        if (slide.media === media.index) {
            loader.style.visibility = 'hidden';
            gallery.loaded += 1;
            if (gallery.loaded === preload && preload < 4) {
                this.setMedia(preload + 2)
            }
        }
        if (media.type === 'iframe') {
            media.dom.loaded = !1
        }
    };
    proto.setMediaSize = function(media, slide) {
        var object = media.dom,
            slider = this.slider,
            viewport = object.viewport,
            thumbs = this.getThumbHeight();
        if (object.error) {
            return
        }
        if (!viewport || viewport.width !== slider.width || viewport.height !== slider.height - thumbs) {
            this.getCaptionHeight(media, slide);
            this.getMediaSize(media, slide);
            this.fitMediaSize(media, slide);
            this.setMediaOffset(media, slide)
        }
        var style = object.style;
        style.width = object.size.width + 'px';
        style.height = object.size.height + 'px';
        style.left = object.offset.left + 'px';
        style.top = object.offset.top + 'px'
    };
    proto.getCaptionHeight = function(media, slide) {
        var caption = this.DOM.captionInner,
            topBar = this.DOM.topBar.height,
            content = caption.innerHTML,
            thumbs = this.getThumbHeight();
        if (this.options.caption && this.states.caption && media.caption) {
            caption.innerHTML = media.caption;
            caption.height = Math.max(topBar, parseInt(caption.clientHeight, 10)) || topBar;
            caption.innerHTML = content
        } else {
            caption.height = thumbs ? 0 : topBar
        }
        slide.width = this.slider.width;
        slide.height = this.slider.height - topBar - caption.height - thumbs
    };
    proto.getMediaSize = function(media, slide) {
        var size = media.dom.size = {};
        switch (media.type) {
            case 'image':
                size.width = media.dom.naturalWidth;
                size.height = media.dom.naturalHeight;
                break;
            case 'video':
                size.width = this.options.videoMaxWidth;
                size.height = size.width / this.options.videoRatio;
                break;
            case 'iframe':
                size.width = media.width ? media.width : slide.width > 680 ? slide.width * 0.8 : slide.width;
                size.height = media.height ? media.height : slide.height;
                break;
            case 'HTML':
                size.width = media.width ? media.width : slide.width;
                size.height = media.height ? media.height : slide.height;
                break
        }
    };
    proto.fitMediaSize = function(media, slide) {
        var slider = this.slider,
            options = this.options,
            zoom = options.zoomTo,
            size = media.dom.size,
            ratio = size.width / size.height,
            thumbs = this.getThumbHeight(),
            smallDevice = slider.width <= 480 || slider.height <= 680,
            canOverflow = ['video', 'iframe', 'HTML'].indexOf(media.type) < 0,
            smartResize = options.smartResize && smallDevice,
            width, height;
        var viewports = [slide.height];
        if ((smartResize || options.overflow) && canOverflow) {
            viewports.unshift(slider.height - thumbs)
        }
        viewports.forEach(function(viewport) {
            if (!height || height < slider.height - thumbs) {
                width = Math.min(size.width, ratio * viewport);
                width = width > slide.width ? slide.width : Math.round(width);
                height = Math.ceil(1 / ratio * width);
                height = height % viewport < 2 ? viewport : height
            }
        });
        var scale = Number((size.width / width).toFixed(3));
        zoom = zoom === 'auto' ? scale : zoom;
        media.dom.size = {
            width: width,
            height: height,
            scale: scale >= options.minZoom ? Math.min(options.maxZoom, zoom) : 1
        }
    };
    proto.setMediaOffset = function(media, slide) {
        var size = media.dom.size,
            slider = this.slider,
            topBar = this.DOM.topBar.height,
            thumbs = this.getThumbHeight(),
            fromTop = 0;
        if (size.height <= slide.height) {
            fromTop = topBar + (slide.height - size.height) * 0.5
        }
        media.dom.offset = {
            top: fromTop < 0 ? 0 : Math.round(fromTop),
            left: Math.round((slide.width - size.width) * 0.5)
        };
        media.dom.viewport = {
            width: slider.width,
            height: slider.height - thumbs
        }
    };
    proto.mediaViewport = function(scale) {
        var media = this.getMedia();
        if (!media.dom || !media.dom.size) {
            return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        }
        var size = media.dom.size,
            offset = media.dom.offset,
            height = this.slider.height,
            width = this.slider.width,
            hGap = (height - size.height) * 0.5,
            vGap = offset.top * 2 - hGap,
            cGap = (hGap - vGap) * 0.5,
            sGap = cGap * scale - cGap * 2 - vGap,
            left = size.width / 2 * (scale - 1) - offset.left,
            top = size.height * scale <= height ? cGap * scale : -size.height / 2 * (scale - 1) + height - size.height + sGap,
            bottom = size.height * scale <= height ? cGap * scale : size.height / 2 * (scale - 1) + sGap;
        return {
            top: scale <= 1 ? 0 : Math.round(top),
            bottom: scale <= 1 ? 0 : Math.round(bottom),
            left: size.width * scale < width ? 0 : Math.round(left),
            right: size.width * scale < width ? 0 : Math.round(-left)
        }
    };
    proto.setMedia = function(number) {
        var gallery = this.gallery,
            slides = this.slides,
            loop = this.states.loop,
            RTL = this.isRTL(),
            index = Math.round(-RTL * this.slider.position.x / slides.width),
            length = gallery.initialLength - 1,
            adjust = 0,
            toLoad = [],
            i;
        if (!number && !gallery.loaded) {
            number = 0;
            for (i = 0; i < slides.length; i++) {
                if (slides[i].firstChild.childElementCount) {
                    number++
                }
            }
            number += 2;
            gallery.loaded = this.options.preload
        }
        switch (number) {
            case 0:
            case 1:
                toLoad = [0];
                break;
            case 2:
            case 3:
                toLoad = [-1, 0, 1];
                break;
            default:
                number = 5;
                toLoad = [-2, -1, 0, 1, 2]
        }
        if (!loop) {
            var maxMedia = index + toLoad[number - 1],
                minMedia = index + toLoad[0];
            adjust = (minMedia < 0) ? -minMedia : 0;
            adjust = (maxMedia > length) ? length - maxMedia : adjust
        }
        toLoad = toLoad.map(function(i) {
            return utils.modulo(gallery.length, i + adjust + index)
        });
        for (i = 0; i < slides.length; i++) {
            var slide = slides[i],
                media_index = utils.modulo(gallery.length, slide.index);
            if (!loop && slide.index > media_index) {
                continue
            }
            if (toLoad.indexOf(media_index) > -1 && slide.media !== media_index) {
                this.unloadMedia(slide);
                this.insertMedia(media_index, i)
            }
        }
    };
    proto.updateMediaInfo = function() {
        var slides = this.slides,
            gallery = this.gallery;
        gallery.index = utils.modulo(gallery.length, slides.index);
        this.isZoomable();
        this.isDownloadable();
        this.updateCounter();
        this.updateCaption();
        this.updateThumbs();
        utils.dispatchEvent(this, 'modulobox', 'updateMedia', this.getMedia())
    };
    proto.setThumbs = function() {
        var gallery = this.gallery,
            thumbs = this.thumbs,
            length = gallery.initialLength,
            thumbnails = this.options.thumbnails,
            thumbsHolder = this.DOM.thumbsHolder;
        if (!thumbnails || length < 2) {
            this.DOM.caption.style.bottom = 0;
            thumbsHolder.style.visibility = 'hidden';
            thumbsHolder.style.height = 0;
            thumbs.height = thumbs.gutter = 0;
            return
        }
        var sizes = this.options.thumbnailSizes,
            screenW = Math.max(window.innerWidth, Math.max(screen.width, screen.height)),
            thumbNb = 0,
            i;
        var widths = Object.keys(sizes).sort(function(a, b) {
            return a - b
        });
        for (i = 0; i < widths.length; i++) {
            var size = widths[i],
                width = i === widths.length - 1 ? screenW : Math.min(screenW, size),
                number = Math.ceil(width / (sizes[size].width + sizes[size].gutter) * 2);
            if (isFinite(number) && number > thumbNb) {
                thumbNb = number
            }
            if (size >= screenW) {
                break
            }
        }
        var fragment = document.createDocumentFragment();
        length = length > 50 ? Math.min(thumbNb, length) : length;
        for (i = 0; i < length; i++) {
            var thumb = utils.createEl('div', this.pre + '-thumb');
            fragment.appendChild(thumb)
        }
        this.DOM.thumbsInner.appendChild(fragment);
        this.setThumbsPosition()
    };
    proto.thumbClick = function(event) {
        var target = event.target;
        if (!utils.hasClass(target, this.pre + '-thumb')) {
            target = target.parentNode
        }
        if (parseInt(target.index, 10) >= 0) {
            this.slideTo(target.index)
        }
    };
    proto.loadThumb = function(thumb, index) {
        var media = this.gallery[index],
            src;
        if (!media.thumb || typeof media.thumb !== 'object') {
            src = media.thumb;
            media.thumb = utils.createEl('div', this.pre + '-thumb-bg');
            media.thumb.style.backgroundImage = src && src.indexOf('.json') < 0 ? 'url(' + src + ')' : null;
            if (media.type === 'video') {
                utils.addClass(media.thumb, this.pre + '-thumb-video');
                utils.addClass(media.thumb, this.pre + '-thumb-loaded')
            }
        }
        var method = thumb.firstChild ? 'replaceChild' : 'appendChild';
        thumb[method](media.thumb, thumb.firstChild);
        thumb.media = index;
        if (src) {
            var dom = new Image();
            dom.onload = function() {
                utils.addClass(media.thumb, this.pre + '-thumb-loaded')
            }.bind(this);
            dom.src = src
        }
    };
    proto.updateThumbs = function() {
        var gallery = this.gallery;
        if (!this.options.thumbnails || gallery.initialLength < 2) {
            return
        }
        var thumbs = this.thumbs,
            position = this.getThumbPosition(thumbs);
        thumbs.stopAnimate();
        if (position === thumbs.position.x) {
            this.shiftThumbs(thumbs);
            return
        }
        if (Math.abs(position - thumbs.position.x) > 50 * thumbs.size) {
            this.DOM.thumbsHolder.style.visibility = 'hidden';
            thumbs.position.x = position;
            utils.translate(this.DOM.thumbsInner, position, 0);
            this.renderThumbs(thumbs);
            this.DOM.thumbsHolder.style.visibility = ''
        } else {
            thumbs.startAnimate();
            thumbs.releaseDrag();
            thumbs.animateTo({
                x: position
            })
        }
    };
    proto.updateCaption = function() {
        if (this.options.caption) {
            var media = this.getMedia(),
                content = media.caption ? media.caption : '',
                caption = this.DOM.captionInner;
            if (caption.innerHTML !== content) {
                caption.innerHTML = content
            }
        }
    };
    proto.updateCounter = function() {
        if (this.options.counterMessage) {
            var gallery = this.gallery,
                length = gallery.initialLength,
                index = utils.modulo(length, gallery.index),
                message = this.options.counterMessage,
                content = message.replace('[index]', index + 1).replace('[total]', length),
                counter = this.DOM.counter;
            if (counter.textContent !== content) {
                counter.textContent = content
            }
        }
    };
    proto.wrapAround = function() {
        var loop = this.options.loop,
            gallery = this.gallery,
            length = gallery.length;
        if (!gallery.initialLength) {
            gallery.initialLength = length
        }
        this.states.loop = loop && loop <= length ? !0 : !1;
        if (this.states.loop && length < this.slides.length) {
            var add = Math.ceil(this.slides.length / length) * length - length;
            for (var i = 0; i < add; i++) {
                var index = length + i;
                gallery[index] = utils.cloneObject(gallery[utils.modulo(length, i)]);
                gallery[index].index = index
            }
        }
    };
    proto.setSlider = function() {
        var slider = this.slider,
            slides = this.slides;
        this.setSizes(slider, slides);
        this.setSliderPosition(slider, slides);
        this.setSlidesPositions(slides);
        this.DOM.overlay.style.opacity = 1
    };
    proto.setSizes = function(slider, slides) {
        slider.width = document.body.clientWidth;
        slider.height = window.innerHeight;
        slides.width = slider.width + Math.round(slider.width * this.options.spacing)
    };
    proto.setSlidesPositions = function(slides) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].position = null;
            this.setCellPosition(i)
        }
        this.shiftSlides()
    };
    proto.setThumbsPosition = function() {
        if (!this.options.thumbnails || this.gallery.initialLength < 2) {
            return
        }
        var thumbs = this.thumbs,
            slider = this.slider,
            holder = this.DOM.thumbsHolder,
            inner = this.DOM.thumbsInner,
            sizes = this.options.thumbnailSizes,
            RTL = this.options.rightToLeft,
            widths = Object.keys(sizes).sort(function(a, b) {
                return b - a
            }),
            width = Math.max.apply(null, widths),
            browser = window.innerWidth,
            size;
        for (var i = 0; i < widths.length; i++) {
            size = Number(widths[i]);
            if (browser <= size) {
                width = size
            }
        }
        thumbs.width = Number(sizes[width].width);
        thumbs.gutter = Number(sizes[width].gutter);
        thumbs.height = Number(sizes[width].height);
        thumbs.size = thumbs.width + thumbs.gutter;
        thumbs.length = this.gallery.initialLength;
        var totalWidth = thumbs.length * thumbs.size;
        thumbs.bound = {
            left: 0,
            right: totalWidth > slider.width ? slider.width - totalWidth : 0
        };
        if (RTL) {
            thumbs.bound.right = totalWidth > slider.width ? slider.width - thumbs.size : totalWidth - thumbs.size;
            thumbs.bound.left = totalWidth - thumbs.size
        }
        if (this.options.thumbnailsNav === 'centered') {
            thumbs.bound = {
                left: totalWidth > slider.width ? Math.floor(slider.width * 0.5 - thumbs.size * 0.5) : Math.floor(totalWidth * 0.5 - thumbs.size * 0.5),
                right: totalWidth > slider.width ? Math.ceil(slider.width * 0.5 - totalWidth + thumbs.size * 0.5) : -Math.ceil(totalWidth * 0.5 - thumbs.size * 0.5)
            };
            if (RTL) {
                thumbs.bound.right = thumbs.bound.left;
                thumbs.bound.left = thumbs.bound.left + totalWidth - thumbs.size
            }
        }
        thumbs.resetAnimate();
        var position = this.getThumbPosition(thumbs);
        thumbs.position.x = position;
        utils.translate(inner, position, 0);
        var hasHeight = this.getThumbHeight();
        holder.style.visibility = hasHeight ? '' : 'hidden';
        holder.style.height = hasHeight ? hasHeight + 'px' : '';
        inner.style.height = hasHeight ? thumbs.height + Math.min(10, thumbs.gutter) + 'px' : '';
        inner.style.width = thumbs.length * thumbs.size + 'px';
        inner.style.right = totalWidth > slider.width && RTL ? 'auto' : ''
    };
    proto.getThumbPosition = function(thumbs) {
        var slider = this.slider,
            gallery = this.gallery,
            thumbNav = this.options.thumbnailsNav,
            RTL = this.isRTL(),
            left = RTL < 0 ? 'right' : 'left',
            index = utils.modulo(gallery.initialLength, gallery.index),
            centered = slider.width * 0.5 - thumbs.size * 0.5,
            position = thumbs.bound[left] - index * thumbs.size * RTL;
        position = !thumbs.bound[left] ? position + centered : position + (RTL < 0 && thumbNav !== 'centered' ? -centered : 0);
        return Math.max(thumbs.bound.right, Math.min(thumbs.bound.left, position))
    };
    proto.setCellPosition = function(index) {
        var cell = this.cells[index];
        cell.resetAnimate();
        utils.translate(this.slides[index].children[0], 0, 0, 1)
    };
    proto.setSliderPosition = function(slider, slides) {
        var RTL = this.options.rightToLeft,
            posX = -slides.index * slides.width;
        posX = RTL ? -posX : posX;
        slider.resetAnimate();
        slider.position.x = slider.attraction.x = posX;
        slider.bound = {
            left: 0,
            right: -(this.gallery.length - 1) * slides.width
        };
        if (RTL) {
            slider.bound.left = -slider.bound.right;
            slider.bound.right = 0
        }
        utils.translate(this.DOM.slider, posX, 0)
    };
    proto.setAnimation = function() {
        var slider = this.DOM.slider,
            friction = this.options.friction,
            attraction = this.options.attraction;
        this.slider = new Animate(slider, {
            x: 0,
            y: 0
        }, Math.min(Math.max(friction.slider, 0), 1), Math.min(Math.max(attraction.slider, 0), 1));
        this.slider.on('settle.toanimate', this.settleSider.bind(this));
        this.slider.on('render.toanimate', this.renderSlider.bind(this));
        var slides = slider.children,
            length = slides.length;
        for (var i = 0; i < length; i++) {
            this.cells[i] = new Animate(slides[i].children[0], {
                x: 0,
                y: 0,
                s: 1
            }, Math.min(Math.max(friction.slide, 0), 1), Math.min(Math.max(attraction.slide, 0), 1));
            this.cells[i].on('settle.toanimate', this.settleCell.bind(this));
            this.cells[i].on('render.toanimate', this.renderCell.bind(this))
        }
        this.thumbs = new Animate(this.DOM.thumbsInner, {
            x: 0
        }, Math.min(Math.max(friction.thumbs, 0), 1), Math.min(Math.max(attraction.thumbs, 0), 1));
        this.thumbs.on('settle.toanimate', this.settleThumbs.bind(this));
        this.thumbs.on('render.toanimate', this.renderThumbs.bind(this))
    };
    proto.settleSider = function(slider) {
        var media;
        utils.dispatchEvent(this, 'modulobox', 'sliderSettled', slider.position);
        if (this.states.open) {
            this.setMedia();
            this.replaceState()
        }
        if (this.options.fadeIfSettle) {
            var slides = this.slides;
            for (var i = 0; i < slides.length; i++) {
                var index = slides[i].media;
                media = this.gallery[index];
                if (media.dom.loaded) {
                    this.showMedia(media, i)
                }
            }
        }
    };
    proto.settleCell = function(cell) {
        var gesture = this.gesture;
        if (gesture.closeBy) {
            utils.dispatchEvent(this, 'modulobox', 'panYSettled', null, cell.position)
        }
        if ((gesture.closeBy && gesture.canClose === !1) || !gesture.closeBy) {
            utils.dispatchEvent(this, 'modulobox', 'panZoomSettled', null, cell.position)
        }
    };
    proto.settleThumbs = function(thumbs) {
        utils.dispatchEvent(this, 'modulobox', 'thumbsSettled', null, thumbs.position)
    };
    proto.renderSlider = function(slider) {
        this.shiftSlides();
        var RTL = this.isRTL(),
            length = this.gallery.initialLength,
            indexPos = -RTL * slider.position.x / this.slides.width,
            moduloPos = utils.modulo(length, indexPos),
            progress = (moduloPos > length - 0.5 ? 0 : moduloPos) / (length - 1);
        utils.dispatchEvent(this, 'modulobox', 'sliderProgress', null, Math.min(1, Math.max(0, progress)))
    };
    proto.renderCell = function(cell) {
        this.willClose(cell);
        var progress;
        if (this.gesture.type === 'panY' || this.gesture.closeBy || (this.gesture.type === 'dragSlider' && cell.position.y !== 0)) {
            progress = 1 - Math.abs(cell.position.y) / (this.slider.height * 0.5);
            utils.dispatchEvent(this, 'modulobox', 'panYProgress', null, progress)
        }
        if (this.gesture.type !== 'panY' && cell.position.s !== 1) {
            progress = cell.position.s;
            utils.dispatchEvent(this, 'modulobox', 'panZoomProgress', null, progress)
        }
    };
    proto.renderThumbs = function(thumbs) {
        this.shiftThumbs(thumbs);
        var progress = thumbs.bound.left !== thumbs.bound.right ? (thumbs.bound.left - thumbs.position.x) / (thumbs.bound.left - thumbs.bound.right) : 0;
        utils.dispatchEvent(this, 'modulobox', 'thumbsProgress', null, progress)
    };
    proto.touchStart = function(event) {
        var element = event.target,
            tagName = element.tagName,
            className = element.className;
        if (event.which !== 3 && element !== this.buttons.play) {
            this.stopSlideShow()
        }
        if (event.which === 3 || !this.isEl(event) || ['BUTTON', 'VIDEO', 'INPUT', 'A'].indexOf(tagName) > -1) {
            return
        }
        if (tagName === 'IMG' && this.gallery.length > 1) {
            utils.addClass(this.DOM.holder, this.pre + '-dragging')
        }
        event.preventDefault();
        if (utils.hasClass(this.DOM.holder, this.pre + '-open-tooltip')) {
            return
        }
        if (!this.pointers.length) {
            this.gesture.canClose = undefined;
            utils.handleEvents(this, window, this.dragEvents.move, 'touchMove');
            utils.handleEvents(this, window, this.dragEvents.end, 'touchEnd')
        }
        this.addPointer(event);
        if (className.indexOf('-thumb') < 0) {
            this.slider.stopAnimate();
            var cell = this.getCell();
            if (Math.round(cell.position.s * 100) / 100 !== 1 || this.pointers.length === 2 || this.gesture.closeBy) {
                cell.stopAnimate()
            }
        } else {
            this.thumbs.stopAnimate()
        }
        this.gestures('start')
    };
    proto.touchMove = function(event) {
        this.updatePointer(event);
        var gesture = this.gesture;
        var pointerNb = this.pointers.length;
        var isSettle = this.isSliderSettle();
        this.switchPointers();
        this.gestures('move');
        if (gesture.type) {
            this[gesture.type](event);
            utils.dispatchEvent(this, 'modulobox', gesture.type + 'Move', event, gesture);
            gesture.move = !0
        } else if ((pointerNb === 2 && isSettle) || Math.abs(gesture.dx) > this.options.threshold || Math.abs(gesture.dy) > this.options.threshold) {
            gesture.sx += gesture.dx;
            gesture.sy += gesture.dy;
            gesture.canZoom = this.isZoomable();
            gesture.closeBy = !1;
            gesture.type = Math.abs(gesture.dx) < Math.abs(gesture.dy) / 2 ? !1 : 'dragSlider';
            gesture.type = this.options.dragToClose && !gesture.type && isSettle ? 'panY' : gesture.type;
            gesture.type = (this.options.pinchToZoom || this.states.zoom) && gesture.canZoom && isSettle && (pointerNb === 2 || this.states.zoom) ? 'panZoom' : gesture.type;
            gesture.type = this.options.pinchToClose && gesture.scale < 1 && isSettle && pointerNb === 2 ? 'panZoom' : gesture.type;
            gesture.type = event.target.className.indexOf('-thumb') > -1 ? 'dragThumbs' : gesture.type;
            if (gesture.type === 'dragSlider') {
                this.setMedia()
            }
            if (['dragSlider', 'dragThumbs'].indexOf(gesture.type) > -1) {
                var cell = this.getCell();
                cell.startAnimate();
                cell.releaseDrag();
                cell.animateTo({
                    x: 0,
                    y: 0,
                    s: 1
                })
            }
            if (gesture.type !== 'dragSlider') {
                var slider = this.slider,
                    slides = this.slides;
                var RTL = this.isRTL();
                if (-RTL * slider.position.x !== slides.index * slides.width) {
                    slider.startAnimate();
                    slider.releaseDrag()
                }
            }
            if (gesture.type) {
                this.pauseVideo();
                utils.dispatchEvent(this, 'modulobox', gesture.type + 'Start', event, gesture);
                if (this.gallery.length > 1 || gesture.type !== 'dragSlider') {
                    utils.addClass(this.DOM.holder, this.pre + '-dragging')
                }
            }
        }
    };
    proto.touchEnd = function(event) {
        this.deletePointer(event);
        if (!this.pointers.length) {
            utils.removeClass(this.DOM.holder, this.pre + '-dragging');
            utils.handleEvents(this, window, this.dragEvents.move, 'touchMove', !1);
            utils.handleEvents(this, window, this.dragEvents.end, 'touchEnd', !1);
            if (this.isSliderSettle()) {
                var className = event.target.className;
                if (utils.hasClass(event.target, this.pre + '-video')) {
                    this.appendVideo()
                } else if (this.options.tapToClose && !this.states.zoom && (className === this.pre + '-item-inner' || className === this.pre + '-top-bar') && Math.abs(this.gesture.dx) < this.options.threshold) {
                    this.close();
                    return
                }
                if (event.target.tagName === 'IMG') {
                    this.doubleTap(event)
                }
            }
            if (this.options.thumbnails && !this.gesture.move) {
                this.thumbClick(event)
            }
            var gestureEnd = this.gesture.type + 'End';
            if (this.gesture.type && typeof this[gestureEnd] === 'function') {
                this[gestureEnd](event);
                utils.dispatchEvent(this, 'modulobox', gestureEnd, event, this.gesture)
            }
            this.gesture.type = this.gesture.move = !1;
            if (!this.states.open) {
                return
            }
            var cell = this.getCell();
            if (!cell.settle) {
                cell.startAnimate();
                cell.releaseDrag()
            }
            var slider = this.slider;
            if (!slider.settle) {
                slider.startAnimate();
                slider.releaseDrag()
            }
        }
    };
    proto.switchPointers = function() {
        if (this.gesture.type === 'panZoom' && this.pointers.length === 1 && this.gesture.distance !== 0) {
            var moving = this.getCell();
            moving.stopAnimate();
            moving.startAnimate();
            this.gesture.move = !1;
            this.gestures('start');
            this.gestures('move')
        }
    };
    proto.doubleTap = function(event) {
        event.preventDefault();
        var touches = this.mapPointer(event),
            clientX = touches[0].clientX,
            clientY = touches[0].clientY;
        if (typeof this.tap !== 'undefined' && +new Date() - this.tap.delay < 350 && Math.abs(this.tap.deltaX - clientX) < 30 && Math.abs(this.tap.deltaY - clientY) < 30) {
            if (this.states.tapIdle) {
                clearTimeout(this.states.tapIdle)
            }
            if (this.options.doubleTapToZoom) {
                this.zoomTo(clientX, clientY)
            }
            this.tap = undefined
        } else {
            if (this.browser.touchDevice && this.options.timeToIdle && !this.states.idle) {
                this.states.tapIdle = setTimeout(function() {
                    var method = !utils.hasClass(this.DOM.holder, this.pre + '-idle') ? 'add' : 'remove';
                    utils[method + 'Class'](this.DOM.holder, this.pre + '-idle')
                }.bind(this), 350)
            }
            this.tap = {
                delay: +new Date(),
                deltaX: touches[0].clientX,
                deltaY: touches[0].clientY
            }
        }
    };
    proto.isSliderSettle = function() {
        if (this.gesture.type) {
            return !1
        }
        var RTL = this.isRTL(),
            slides = this.slides,
            width = slides.width,
            toSettle = Math.abs(RTL * this.slider.position.x + slides.index * width) / width * 100;
        return toSettle <= 3 ? !0 : !1
    };
    proto.mapPointer = function(event) {
        return event.touches ? event.changedTouches : [event]
    };
    proto.addPointer = function(event) {
        var pointers = this.mapPointer(event);
        for (var i = 0; i < pointers.length; i++) {
            if (this.pointers.length < 2 && ['dragSlider', 'panY', 'dragThumbs'].indexOf(this.gesture.type) === -1) {
                var ev = pointers[i],
                    id = ev.pointerId !== undefined ? ev.pointerId : ev.identifier;
                if (!this.getPointer(id)) {
                    this.pointers[this.pointers.length] = {
                        id: id,
                        x: Math.round(ev.clientX),
                        y: Math.round(ev.clientY)
                    }
                }
            }
        }
    };
    proto.updatePointer = function(event) {
        var pointers = this.mapPointer(event);
        for (var i = 0; i < pointers.length; i++) {
            var ev = pointers[i],
                id = ev.pointerId !== undefined ? ev.pointerId : ev.identifier,
                pt = this.getPointer(id);
            if (pt) {
                pt.x = Math.round(ev.clientX);
                pt.y = Math.round(ev.clientY)
            }
        }
    };
    proto.deletePointer = function(event) {
        var pointers = this.mapPointer(event);
        for (var i = 0; i < pointers.length; i++) {
            var ev = pointers[i],
                id = ev.pointerId !== undefined ? ev.pointerId : ev.identifier;
            for (var p = 0; p < this.pointers.length; p++) {
                if (this.pointers[p].id === id) {
                    this.pointers.splice(p, 1)
                }
            }
        }
    };
    proto.getPointer = function(id) {
        for (var k in this.pointers) {
            if (this.pointers[k].id === id) {
                return this.pointers[k]
            }
        }
        return null
    };
    proto.gestures = function(type) {
        var g = this.gesture,
            pointers = this.pointers,
            distance;
        if (!pointers.length) {
            return
        }
        g.direction = g.x ? pointers[0].x > g.x ? 1 : -1 : 0;
        g.x = pointers[0].x;
        g.y = pointers[0].y;
        if (pointers.length === 2) {
            var x2 = pointers[1].x,
                y2 = pointers[1].y;
            distance = this.getDistance([g.x, g.y], [x2, y2]);
            g.x = g.x - (g.x - x2) / 2;
            g.y = g.y - (g.y - y2) / 2
        }
        if (type === 'start') {
            g.dx = 0;
            g.dy = 0;
            g.sx = g.x;
            g.sy = g.y;
            g.distance = distance ? distance : 0
        } else {
            g.dx = g.x - g.sx;
            g.dy = g.y - g.sy;
            g.scale = distance && g.distance ? distance / g.distance : 1
        }
    };
    proto.getDistance = function(p1, p2) {
        var x = p2[0] - p1[0],
            y = p2[1] - p1[1];
        return Math.sqrt((x * x) + (y * y))
    };
    proto.panY = function() {
        var moving = this.getCell();
        moving.startAnimate();
        moving.updateDrag({
            x: moving.position.x,
            y: moving.start.y + this.gesture.dy,
            s: moving.position.s
        })
    };
    proto.panYEnd = function() {
        var posY = 0,
            moving = this.getCell(),
            height = this.slider.height,
            resting = moving.resting.y;
        if (1 - Math.abs(resting) / (height * 0.5) < 0.8) {
            posY = Math.abs(resting) < height * 0.5 ? Math.abs(resting) / resting * height * 0.5 : resting;
            this.close();
            moving.animateTo({
                x: 0,
                y: posY,
                s: posY ? moving.resting.s : 1
            });
            moving.startAnimate();
            moving.releaseDrag()
        }
    };
    proto.panZoom = function() {
        var moving = this.getCell(),
            gesture = this.gesture,
            bound = this.mediaViewport(moving.position.s),
            minZoom = this.options.pinchToClose && gesture.canClose ? 0.1 : 0.6,
            scale = Math.min(this.options.maxZoom * 1.5, Math.max(minZoom, moving.start.s * gesture.scale)),
            posX = moving.start.x + gesture.dx,
            posY = moving.start.y + gesture.dy,
            centerX = gesture.sx - this.slider.width * 0.5,
            centerY = gesture.sy - this.slider.height * 0.5;
        if (!gesture.canZoom || (!this.options.pinchToZoom && !this.states.zoom)) {
            scale = Math.min(1, scale)
        }
        if (!this.options.pinchToZoom && this.states.zoom) {
            scale = moving.position.s
        }
        if (!gesture.move && this.pointers.length === 1) {
            moving.start.x += posX > bound.left ? posX - bound.left : posX < bound.right ? posX - bound.right : 0;
            moving.start.y += posY > bound.bottom ? posY - bound.bottom : posY < bound.top ? posY - bound.top : 0
        }
        posX = gesture.dx + centerX + (moving.start.x - centerX) * (scale / moving.start.s);
        posY = gesture.dy + centerY + (moving.start.y - centerY) * (scale / moving.start.s);
        if (this.pointers.length === 1) {
            posX = posX > bound.left ? (posX + bound.left) * 0.5 : posX < bound.right ? (posX + bound.right) * 0.5 : posX;
            posY = posY > bound.bottom ? (posY + bound.bottom) * 0.5 : posY < bound.top ? (posY + bound.top) * 0.5 : posY
        }
        moving.startAnimate();
        moving.updateDrag({
            x: posX,
            y: posY,
            s: scale
        });
        this.updateZoom(scale)
    };
    proto.panZoomEnd = function() {
        var moving = this.getCell(),
            gesture = this.gesture,
            scale = moving.resting.s > this.options.maxZoom ? this.options.maxZoom : moving.resting.s < 1 ? 1 : moving.resting.s,
            bound = this.mediaViewport(scale),
            posX, posY;
        if (Math.round(moving.resting.s * 10) / 10 > this.options.maxZoom) {
            var centerX = gesture.distance ? gesture.sx - this.slider.width * 0.5 : 0;
            var centerY = gesture.distance ? gesture.sy - this.slider.height * 0.5 : 0;
            posX = gesture.dx + centerX + (moving.start.x - centerX) * (scale / moving.start.s);
            posY = gesture.dy + centerY + (moving.start.y - centerY) * (scale / moving.start.s);
            posX = posX > bound.left ? bound.left : posX < bound.right ? bound.right : posX;
            posY = posY > bound.bottom ? bound.bottom : posY < bound.top ? bound.top : posY
        } else {
            posX = moving.resting.x > bound.left ? bound.left : moving.resting.x < bound.right ? bound.right : undefined;
            posY = moving.resting.y > bound.bottom ? bound.bottom : moving.resting.y < bound.top ? bound.top : undefined
        }
        if (this.options.pinchToClose && moving.resting.s < 0.8 && gesture.canClose) {
            scale = moving.resting.s < 0.3 ? moving.resting.s : 0.15;
            posX = moving.resting.x;
            posY = moving.resting.y;
            this.close()
        }
        moving.animateTo({
            x: posX,
            y: posY,
            s: scale !== moving.resting.s ? scale : undefined
        });
        moving.startAnimate();
        moving.releaseDrag();
        this.updateZoom(moving.resting.s)
    };
    proto.dragThumbs = function() {
        var moving = this.thumbs,
            bound = moving.bound,
            posX = moving.start.x + this.gesture.dx;
        if (!this.gesture.move) {
            moving.start.x += posX > bound.left ? posX - bound.left : posX < bound.right ? posX - bound.right : 0;
            posX = moving.start.x + this.gesture.dx
        }
        posX = posX > bound.left ? (posX + bound.left) * 0.5 : posX < bound.right ? (posX + bound.right) * 0.5 : posX;
        moving.startAnimate();
        moving.attraction.x = undefined;
        moving.updateDrag({
            x: posX
        })
    };
    proto.dragThumbsEnd = function() {
        var moving = this.thumbs,
            bound = moving.bound,
            posX = moving.resting.x;
        posX = posX > bound.left ? bound.left : posX < bound.right ? bound.right : posX;
        if (posX !== moving.resting.x) {
            moving.animateTo({
                x: posX
            })
        }
        moving.startAnimate();
        moving.releaseDrag()
    };
    proto.dragSlider = function() {
        if (this.gallery.length === 1) {
            return
        }
        var moving = this.slider,
            posX = moving.start.x + this.gesture.dx;
        if (!this.states.loop) {
            var bound = moving.bound;
            if (!this.gesture.move) {
                moving.start.x += posX > bound.left ? posX - bound.left : posX < bound.right ? posX - bound.right : 0;
                posX = moving.start.x + this.gesture.dx
            }
            posX = posX > bound.left ? (posX + bound.left) * 0.5 : posX < bound.right ? (posX + bound.right) * 0.5 : posX
        }
        moving.startAnimate();
        moving.updateDrag({
            x: posX
        })
    };
    proto.dragSliderEnd = function() {
        if (this.gallery.length === 1) {
            return
        }
        var moving = this.slider,
            slides = this.slides,
            oldIndex = slides.index,
            RTL = this.isRTL(),
            restingX = moving.resting.x,
            positionX = moving.position.x;
        this.getRestingIndex(positionX, restingX);
        if (oldIndex !== slides.index) {
            this.updateMediaInfo()
        }
        this.slider.animateTo({
            x: -RTL * slides.index * slides.width,
            y: undefined,
            s: undefined
        });
        moving.startAnimate();
        moving.releaseDrag()
    };
    proto.getRestingIndex = function(positionX, restingX) {
        var direction = this.gesture.direction,
            gallery = this.gallery,
            slides = this.slides,
            deltaX = this.gesture.dx,
            RTL = this.isRTL(),
            index = Math.round(-RTL * positionX / slides.width),
            moved = Math.abs(restingX - positionX);
        if (Math.abs(deltaX) < slides.width * 0.5 && moved) {
            if (deltaX > 0 && direction > 0) {
                index -= 1 * RTL
            } else if (deltaX < 0 && direction < 0) {
                index += 1 * RTL
            }
        }
        var gap = Math.max(-1, Math.min(1, index - slides.index));
        if (!this.states.loop && ((gallery.index + gap < 0) || (gallery.index + gap > gallery.length - 1))) {
            return
        }
        slides.index += gap
    };
    proto.shiftSlides = function() {
        var slides = this.slides,
            gallery = this.gallery,
            loop = this.states.loop,
            RTL = this.isRTL(),
            from = RTL * Math.round(-this.slider.position.x / slides.width) - 2,
            to = from + 5;
        if (!loop && to > gallery.initialLength - 1) {
            from = gallery.initialLength - 5;
            to = from + 5
        }
        if (!loop && from < 0) {
            from = 0;
            to = 5
        }
        for (var i = from; i < to; i++) {
            var position = RTL * i * slides.width,
                slide_index = utils.modulo(slides.length, i),
                slide = slides[slide_index];
            if (slide.index !== i || slide.position !== position) {
                slide.index = i;
                slide.position = position;
                slide.style.left = position + 'px'
            }
        }
        if (this.states.open) {
            this.setMedia(3)
        }
    };
    proto.shiftThumbs = function(thumbs) {
        var child = this.DOM.thumbsInner.children,
            slider = this.slider,
            gallery = this.gallery,
            RTL = this.isRTL(),
            length = child.length,
            index = utils.modulo(gallery.initialLength, gallery.index),
            width = thumbs.size * (length) * 0.5,
            center = Math.round((-RTL * thumbs.position.x + RTL * width * 0.5) / thumbs.size),
            from = Math.max(0, center - Math.floor(length / 2)),
            to = from + length;
        var tolerance = slider.width * 0.5,
            boundLeft = thumbs.position.x + tolerance,
            boundRight = thumbs.position.x - slider.width - tolerance;
        if (to > gallery.initialLength) {
            to = gallery.initialLength;
            from = to - length
        }
        if (to === gallery.initialLength - 1 && from - to < length) {
            from = gallery.initialLength - length
        }
        for (var i = from; i < to; i++) {
            var thumb = child[utils.modulo(length, i)],
                position = RTL * i * thumbs.size + thumbs.gutter * 0.5,
                className = this.pre + '-active-thumb',
                isActive = utils.hasClass(thumb, className);
            if (thumb.index !== i || thumb.position !== position) {
                thumb.index = i;
                thumb.position = position;
                thumb.style.left = position + 'px'
            }
            this.setThumbSize(thumb, thumbs);
            if (-thumb.position <= boundLeft && -thumb.position >= boundRight && thumb.media !== i) {
                this.loadThumb(thumb, i)
            }
            if (isActive && index !== i) {
                utils.removeClass(thumb, className)
            } else if (!isActive && index === i) {
                utils.addClass(thumb, className)
            }
        }
    };
    proto.setThumbSize = function(thumb, thumbs) {
        if (thumb.width !== thumbs.width || thumb.height !== thumbs.height || thumb.gutter !== thumbs.gutter) {
            thumb.width = thumbs.width;
            thumb.height = thumbs.height;
            thumb.gutter = thumbs.gutter;
            thumb.style.width = thumbs.width + 'px';
            thumb.style.height = thumbs.height + 'px'
        }
    };
    proto.willClose = function(cell) {
        var opacity = this.DOM.overlay.style.opacity,
            canClose = this.gesture.canClose,
            gestureType = this.gesture.type,
            gestureClose = this.gesture.closeBy,
            pinchToClose = gestureType === 'panZoom' || gestureClose === 'panZoom',
            dragYToClose = gestureType === 'panY' || gestureClose === 'panY';
        if (cell.position.s > 1.1 && typeof canClose === 'undefined') {
            this.gesture.canClose = !1
        } else if (cell.position.s < 1 && typeof canClose === 'undefined') {
            this.gesture.canClose = !0
        }
        if (this.options.pinchToClose && pinchToClose && this.gesture.canClose) {
            opacity = cell.position.s;
            this.gesture.closeBy = 'panZoom'
        } else if (dragYToClose) {
            opacity = 1 - Math.abs(cell.position.y) / (this.slider.height * 0.5);
            this.gesture.closeBy = 'panY'
        } else if (opacity && opacity < 1) {
            opacity = 1;
            this.gesture.closeBy = !1
        }
        opacity = !opacity ? 1 : Math.max(0, Math.min(1, opacity));
        var method = opacity <= 0.8 || !opacity ? 'add' : 'remove';
        utils[method + 'Class'](this.DOM.holder, this.pre + '-will-close');
        this.DOM.overlay.style.opacity = opacity
    };
    proto.prev = utils.throttle(function() {
        if (!this.gesture.move) {
            this.slideTo(this.slides.index - 1 * this.isRTL())
        }
    }, 120);
    proto.next = utils.throttle(function() {
        if (!this.gesture.move) {
            this.slideTo(this.slides.index + 1 * this.isRTL())
        }
    }, 120);
    proto.slideTo = function(to, slideShow) {
        var slides = this.slides,
            gallery = this.gallery,
            holder = this.DOM.slider,
            RTL = this.isRTL(),
            length = gallery.initialLength,
            moduloTo = utils.modulo(length, to),
            moduloFrom = utils.modulo(length, gallery.index),
            slideBy = moduloTo - moduloFrom,
            fromEnds = length - Math.abs(slideBy);
        if (!this.states.loop && (to < 0 || to > this.gallery.initialLength - 1)) {
            return
        }
        if (this.states.loop && fromEnds < 3 && fromEnds * 2 < length) {
            slideBy = slideBy < 0 ? fromEnds : -fromEnds
        }
        if (moduloTo === to) {
            to = slides.index + slideBy
        }
        slideBy = to - slides.index;
        if (!slideBy) {
            return
        }
        if (this.states.zoom) {
            this.zoom()
        }
        this.pauseVideo();
        this.share();
        if (!slideShow) {
            this.stopSlideShow()
        }
        slides.index = to;
        var slider = this.slider;
        if (Math.abs(slideBy) > 2) {
            utils.addClass(holder, this.pre + '-hide');
            this.setSliderPosition(slider, slides);
            this.setSlidesPositions(slides);
            var moveBy = RTL * slides.width * Math.min(2, Math.abs(slideBy)) * Math.abs(slideBy) / slideBy;
            slider.position.x = slider.attraction.x = slider.position.x + moveBy;
            utils.translate(holder, slider.position.x, 0);
            holder.getClientRects()
        }
        this.updateMediaInfo();
        utils.removeClass(holder, this.pre + '-hide');
        slider.startAnimate();
        slider.releaseDrag();
        slider.animateTo({
            x: -RTL * to * slides.width,
            y: 0,
            s: undefined
        })
    };
    proto.keyDown = function(event) {
        var key = event.keyCode,
            opt = this.options;
        if (opt.prevNextKey) {
            if (key === 37) {
                this.prev(event)
            } else if (key === 39) {
                this.next(event)
            }
        }
        if (key === 27 && opt.escapeToClose) {
            this.close()
        }
        if (!opt.mouseWheel && [32, 33, 34, 35, 36, 38, 40].indexOf(key) > -1) {
            event.preventDefault();
            return !1
        }
    };
    proto.zoom = function() {
        this.zoomTo()
    };
    proto.zoomTo = function(x, y, scale) {
        if (!this.isSliderSettle() || (!this.isZoomable() && scale > 1)) {
            return
        }
        this.gesture.closeBy = !1;
        var media = this.getMedia();
        scale = scale ? scale : this.states.zoom ? 1 : media.dom.size.scale;
        var cell = this.getCell(),
            bound = this.mediaViewport(scale),
            centX = x ? x - this.slider.width * 0.5 : 0,
            centY = y ? y - this.slider.height * 0.5 : 0,
            PosX = scale > 1 ? Math.ceil(centX + (cell.position.x - centX) * (scale / cell.position.s)) : 0,
            PosY = scale > 1 ? Math.ceil(centY + (cell.position.y - centY) * (scale / cell.position.s)) : 0;
        cell.startAnimate();
        cell.releaseDrag();
        cell.animateTo({
            x: PosX > bound.left ? bound.left : PosX < bound.right ? bound.right : PosX,
            y: PosY > bound.bottom ? bound.bottom : PosY < bound.top ? bound.top : PosY,
            s: scale
        });
        this.updateZoom(scale)
    };
    proto.updateZoom = function(scale) {
        this.states.zoom = scale > 1 ? !0 : !1;
        utils[this.states.zoom ? 'addClass' : 'removeClass'](this.DOM.holder, this.pre + '-panzoom')
    };
    proto.destroy = function() {
        if (!this.GUID) {
            return
        }
        if (this.states.open) {
            this.close()
        }
        var selectors = this.options.mediaSelector,
            sources = '';
        try {
            sources = document.querySelectorAll(selectors)
        } catch (error) {}
        for (var i = 0, l = sources.length; i < l; i++) {
            var source = sources[i];
            if (source.mobxListener) {
                source.removeEventListener('click', source.mobxListener, !1)
            }
        }
        this.bindEvents(!1);
        this.slider.resetAnimate();
        for (i = 0; i < this.slides.length; i++) {
            this.cells[i].resetAnimate()
        }
        if (this.thumbs) {
            this.thumbs.resetAnimate()
        }
        this.DOM.holder.parentNode.removeChild(this.DOM.holder);
        this.DOM.comment.parentNode.removeChild(this.DOM.comment);
        delete instances[this.GUID];
        delete this.GUID
    };
    if (typeof jQuery !== 'undefined') {
        (function($) {
            $.ModuloBox = function(options) {
                return new ModuloBox(options)
            }
        })(jQuery)
    }
    return ModuloBox
}))