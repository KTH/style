!(function () {
  var e = {
      695: function (e, t, n) {
        /*!
         * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e, t, n, r) {
          "use strict";
          const i = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            o = i(e),
            s = i(n),
            a = i(r),
            u = "5.2.3";
          class l extends a.default {
            constructor(e, n) {
              super(),
                (e = t.getElement(e)) &&
                  ((this._element = e),
                  (this._config = this._getConfig(n)),
                  o.default.set(
                    this._element,
                    this.constructor.DATA_KEY,
                    this,
                  ));
            }
            dispose() {
              o.default.remove(this._element, this.constructor.DATA_KEY),
                s.default.off(this._element, this.constructor.EVENT_KEY);
              for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
            }
            _queueCallback(e, n, r = !0) {
              t.executeAfterTransition(e, n, r);
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e, this._element)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            static getInstance(e) {
              return o.default.get(t.getElement(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
              return (
                this.getInstance(e) ||
                new this(e, "object" == typeof t ? t : null)
              );
            }
            static get VERSION() {
              return u;
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(e) {
              return `${e}${this.EVENT_KEY}`;
            }
          }
          return l;
        })(n(493), n(72), n(286), n(705));
      },
      493: function (e) {
        /*!
         * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function () {
          "use strict";
          const e = new Map();
          return {
            set(t, n, r) {
              e.has(t) || e.set(t, new Map());
              const i = e.get(t);
              i.has(n) || 0 === i.size
                ? i.set(n, r)
                : console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(i.keys())[0]
                    }.`,
                  );
            },
            get(t, n) {
              return (e.has(t) && e.get(t).get(n)) || null;
            },
            remove(t, n) {
              if (!e.has(t)) return;
              const r = e.get(t);
              r.delete(n), 0 === r.size && e.delete(t);
            },
          };
        })();
      },
      286: function (e, t, n) {
        /*!
         * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e) {
          "use strict";
          const t = /[^.]*(?=\..*)\.|.*/,
            n = /\..*/,
            r = /::\d+$/,
            i = {};
          let o = 1;
          const s = { mouseenter: "mouseover", mouseleave: "mouseout" },
            a = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function u(e, t) {
            return (t && `${t}::${o++}`) || e.uidEvent || o++;
          }
          function l(e) {
            const t = u(e);
            return (e.uidEvent = t), (i[t] = i[t] || {}), i[t];
          }
          function c(e, t) {
            return function n(r) {
              return (
                b(r, { delegateTarget: e }),
                n.oneOff && y.off(e, r.type, t),
                t.apply(e, [r])
              );
            };
          }
          function f(e, t, n) {
            return function r(i) {
              const o = e.querySelectorAll(t);
              for (let { target: s } = i; s && s !== this; s = s.parentNode)
                for (const a of o)
                  if (a === s)
                    return (
                      b(i, { delegateTarget: s }),
                      r.oneOff && y.off(e, i.type, t, n),
                      n.apply(s, [i])
                    );
            };
          }
          function d(e, t, n = null) {
            return Object.values(e).find(
              (e) => e.callable === t && e.delegationSelector === n,
            );
          }
          function p(e, t, n) {
            const r = "string" == typeof t,
              i = r ? n : t || n;
            let o = v(e);
            return a.has(o) || (o = e), [r, i, o];
          }
          function h(e, n, r, i, o) {
            if ("string" != typeof n || !e) return;
            let [a, h, g] = p(n, r, i);
            if (n in s) {
              const e = (e) =>
                function (t) {
                  if (
                    !t.relatedTarget ||
                    (t.relatedTarget !== t.delegateTarget &&
                      !t.delegateTarget.contains(t.relatedTarget))
                  )
                    return e.call(this, t);
                };
              h = e(h);
            }
            const m = l(e),
              v = m[g] || (m[g] = {}),
              y = d(v, h, a ? r : null);
            if (y) return void (y.oneOff = y.oneOff && o);
            const b = u(h, n.replace(t, "")),
              x = a ? f(e, r, h) : c(e, h);
            (x.delegationSelector = a ? r : null),
              (x.callable = h),
              (x.oneOff = o),
              (x.uidEvent = b),
              (v[b] = x),
              e.addEventListener(g, x, a);
          }
          function g(e, t, n, r, i) {
            const o = d(t[n], r, i);
            o &&
              (e.removeEventListener(n, o, Boolean(i)),
              delete t[n][o.uidEvent]);
          }
          function m(e, t, n, r) {
            const i = t[n] || {};
            for (const o of Object.keys(i))
              if (o.includes(r)) {
                const r = i[o];
                g(e, t, n, r.callable, r.delegationSelector);
              }
          }
          function v(e) {
            return (e = e.replace(n, "")), s[e] || e;
          }
          const y = {
            on(e, t, n, r) {
              h(e, t, n, r, !1);
            },
            one(e, t, n, r) {
              h(e, t, n, r, !0);
            },
            off(e, t, n, i) {
              if ("string" != typeof t || !e) return;
              const [o, s, a] = p(t, n, i),
                u = a !== t,
                c = l(e),
                f = c[a] || {},
                d = t.startsWith(".");
              if (void 0 === s) {
                if (d) for (const n of Object.keys(c)) m(e, c, n, t.slice(1));
                for (const n of Object.keys(f)) {
                  const i = n.replace(r, "");
                  if (!u || t.includes(i)) {
                    const t = f[n];
                    g(e, c, a, t.callable, t.delegationSelector);
                  }
                }
              } else {
                if (!Object.keys(f).length) return;
                g(e, c, a, s, o ? n : null);
              }
            },
            trigger(t, n, r) {
              if ("string" != typeof n || !t) return null;
              const i = e.getjQuery();
              let o = null,
                s = !0,
                a = !0,
                u = !1;
              n !== v(n) &&
                i &&
                ((o = i.Event(n, r)),
                i(t).trigger(o),
                (s = !o.isPropagationStopped()),
                (a = !o.isImmediatePropagationStopped()),
                (u = o.isDefaultPrevented()));
              let l = new Event(n, { bubbles: s, cancelable: !0 });
              return (
                (l = b(l, r)),
                u && l.preventDefault(),
                a && t.dispatchEvent(l),
                l.defaultPrevented && o && o.preventDefault(),
                l
              );
            },
          };
          function b(e, t) {
            for (const [n, r] of Object.entries(t || {}))
              try {
                e[n] = r;
              } catch (t) {
                Object.defineProperty(e, n, {
                  configurable: !0,
                  get() {
                    return r;
                  },
                });
              }
            return e;
          }
          return y;
        })(n(72));
      },
      175: function (e) {
        /*!
         * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function () {
          "use strict";
          function e(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
              return JSON.parse(decodeURIComponent(e));
            } catch (t) {
              return e;
            }
          }
          function t(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
          }
          return {
            setDataAttribute(e, n, r) {
              e.setAttribute(`data-bs-${t(n)}`, r);
            },
            removeDataAttribute(e, n) {
              e.removeAttribute(`data-bs-${t(n)}`);
            },
            getDataAttributes(t) {
              if (!t) return {};
              const n = {},
                r = Object.keys(t.dataset).filter(
                  (e) => e.startsWith("bs") && !e.startsWith("bsConfig"),
                );
              for (const i of r) {
                let r = i.replace(/^bs/, "");
                (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
                  (n[r] = e(t.dataset[i]));
              }
              return n;
            },
            getDataAttribute(n, r) {
              return e(n.getAttribute(`data-bs-${t(r)}`));
            },
          };
        })();
      },
      737: function (e, t, n) {
        /*!
         * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e) {
          "use strict";
          return {
            find(e, t = document.documentElement) {
              return [].concat(
                ...Element.prototype.querySelectorAll.call(t, e),
              );
            },
            findOne(e, t = document.documentElement) {
              return Element.prototype.querySelector.call(t, e);
            },
            children(e, t) {
              return [].concat(...e.children).filter((e) => e.matches(t));
            },
            parents(e, t) {
              const n = [];
              let r = e.parentNode.closest(t);
              for (; r; ) n.push(r), (r = r.parentNode.closest(t));
              return n;
            },
            prev(e, t) {
              let n = e.previousElementSibling;
              for (; n; ) {
                if (n.matches(t)) return [n];
                n = n.previousElementSibling;
              }
              return [];
            },
            next(e, t) {
              let n = e.nextElementSibling;
              for (; n; ) {
                if (n.matches(t)) return [n];
                n = n.nextElementSibling;
              }
              return [];
            },
            focusableChildren(t) {
              const n = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]',
              ]
                .map((e) => `${e}:not([tabindex^="-"])`)
                .join(",");
              return this.find(n, t).filter(
                (t) => !e.isDisabled(t) && e.isVisible(t),
              );
            },
          };
        })(n(72));
      },
      424: function (e, t, n) {
        /*!
         * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e, t, n, r, i, o, s, a) {
          "use strict";
          const u = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            l = u(t),
            c = u(n),
            f = u(r),
            d = u(i),
            p = u(o),
            h = u(s),
            g = "modal",
            m = ".bs.modal",
            v = "Escape",
            y = `hide${m}`,
            b = `hidePrevented${m}`,
            x = `hidden${m}`,
            w = `show${m}`,
            T = `shown${m}`,
            E = `resize${m}`,
            C = `click.dismiss${m}`,
            A = `mousedown.dismiss${m}`,
            _ = `keydown.dismiss${m}`,
            S = `click${m}.data-api`,
            k = "modal-open",
            D = "fade",
            N = "show",
            j = "modal-static",
            L = ".modal.show",
            q = ".modal-dialog",
            O = ".modal-body",
            M = '[data-bs-toggle="modal"]',
            H = { backdrop: !0, focus: !0, keyboard: !0 },
            P = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class R extends d.default {
            constructor(e, t) {
              super(e, t),
                (this._dialog = c.default.findOne(q, this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new f.default()),
                this._addEventListeners();
            }
            static get Default() {
              return H;
            }
            static get DefaultType() {
              return P;
            }
            static get NAME() {
              return g;
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                this._isTransitioning ||
                l.default.trigger(this._element, w, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(k),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (l.default.trigger(this._element, y).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(N),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated(),
                  )));
            }
            dispose() {
              for (const e of [window, this._dialog]) l.default.off(e, m);
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new p.default({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new h.default({ trapElement: this._element });
            }
            _showElement(t) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const n = c.default.findOne(O, this._dialog);
              n && (n.scrollTop = 0),
                e.reflow(this._element),
                this._element.classList.add(N);
              const r = () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  l.default.trigger(this._element, T, { relatedTarget: t });
              };
              this._queueCallback(r, this._dialog, this._isAnimated());
            }
            _addEventListeners() {
              l.default.on(this._element, _, (e) => {
                if (e.key === v)
                  return this._config.keyboard
                    ? (e.preventDefault(), void this.hide())
                    : void this._triggerBackdropTransition();
              }),
                l.default.on(window, E, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                l.default.on(this._element, A, (e) => {
                  l.default.one(this._element, C, (t) => {
                    this._element === e.target &&
                      this._element === t.target &&
                      ("static" !== this._config.backdrop
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition());
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(k),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    l.default.trigger(this._element, x);
                });
            }
            _isAnimated() {
              return this._element.classList.contains(D);
            }
            _triggerBackdropTransition() {
              if (l.default.trigger(this._element, b).defaultPrevented) return;
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._element.style.overflowY;
              "hidden" === t ||
                this._element.classList.contains(j) ||
                (e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(j),
                this._queueCallback(() => {
                  this._element.classList.remove(j),
                    this._queueCallback(() => {
                      this._element.style.overflowY = t;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const t =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                n = this._scrollBar.getWidth(),
                r = n > 0;
              if (r && !t) {
                const t = e.isRTL() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${n}px`;
              }
              if (!r && t) {
                const t = e.isRTL() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${n}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
              return this.each(function () {
                const n = R.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === n[e])
                    throw new TypeError(`No method named "${e}"`);
                  n[e](t);
                }
              });
            }
          }
          return (
            l.default.on(document, S, M, function (t) {
              const n = e.getElementFromSelector(this);
              ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                l.default.one(n, w, (t) => {
                  t.defaultPrevented ||
                    l.default.one(n, x, () => {
                      e.isVisible(this) && this.focus();
                    });
                });
              const r = c.default.findOne(L);
              r && R.getInstance(r).hide(),
                R.getOrCreateInstance(n).toggle(this);
            }),
            a.enableDismissTrigger(R),
            e.defineJQueryPlugin(R),
            R
          );
        })(n(72), n(286), n(737), n(810), n(695), n(358), n(744), n(127));
      },
      358: function (e, t, n) {
        /*!
         * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e, t, n) {
          "use strict";
          const r = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            i = r(e),
            o = r(n),
            s = "backdrop",
            a = "fade",
            u = "show",
            l = `mousedown.bs.${s}`,
            c = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            f = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class d extends o.default {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return c;
            }
            static get DefaultType() {
              return f;
            }
            static get NAME() {
              return s;
            }
            show(e) {
              if (!this._config.isVisible) return void t.execute(e);
              this._append();
              const n = this._getElement();
              this._config.isAnimated && t.reflow(n),
                n.classList.add(u),
                this._emulateAnimation(() => {
                  t.execute(e);
                });
            }
            hide(e) {
              this._config.isVisible
                ? (this._getElement().classList.remove(u),
                  this._emulateAnimation(() => {
                    this.dispose(), t.execute(e);
                  }))
                : t.execute(e);
            }
            dispose() {
              this._isAppended &&
                (i.default.off(this._element, l),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                  this._config.isAnimated && e.classList.add(a),
                  (this._element = e);
              }
              return this._element;
            }
            _configAfterMerge(e) {
              return (e.rootElement = t.getElement(e.rootElement)), e;
            }
            _append() {
              if (this._isAppended) return;
              const e = this._getElement();
              this._config.rootElement.append(e),
                i.default.on(e, l, () => {
                  t.execute(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(e) {
              t.executeAfterTransition(
                e,
                this._getElement(),
                this._config.isAnimated,
              );
            }
          }
          return d;
        })(n(286), n(72), n(705));
      },
      127: function (e, t, n) {
        /*!
         * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        !(function (e, t, n) {
          "use strict";
          const r = ((e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e })(
              t,
            ),
            i = (e, t = "hide") => {
              const i = `click.dismiss${e.EVENT_KEY}`,
                o = e.NAME;
              r.default.on(
                document,
                i,
                `[data-bs-dismiss="${o}"]`,
                function (r) {
                  if (
                    (["A", "AREA"].includes(this.tagName) && r.preventDefault(),
                    n.isDisabled(this))
                  )
                    return;
                  const i =
                    n.getElementFromSelector(this) || this.closest(`.${o}`);
                  e.getOrCreateInstance(i)[t]();
                },
              );
            };
          (e.enableDismissTrigger = i),
            Object.defineProperties(e, {
              __esModule: { value: !0 },
              [Symbol.toStringTag]: { value: "Module" },
            });
        })(t, n(286), n(72));
      },
      705: function (e, t, n) {
        /*!
         * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e, t) {
          "use strict";
          const n = ((e) =>
            e && "object" == typeof e && "default" in e ? e : { default: e })(
            t,
          );
          class r {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!',
              );
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return e;
            }
            _mergeConfigObj(t, r) {
              const i = e.isElement(r)
                ? n.default.getDataAttribute(r, "config")
                : {};
              return {
                ...this.constructor.Default,
                ...("object" == typeof i ? i : {}),
                ...(e.isElement(r) ? n.default.getDataAttributes(r) : {}),
                ...("object" == typeof t ? t : {}),
              };
            }
            _typeCheckConfig(t, n = this.constructor.DefaultType) {
              for (const r of Object.keys(n)) {
                const i = n[r],
                  o = t[r],
                  s = e.isElement(o) ? "element" : e.toType(o);
                if (!new RegExp(i).test(s))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`,
                  );
              }
            }
          }
          return r;
        })(n(72), n(175));
      },
      744: function (e, t, n) {
        /*!
         * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e, t, n) {
          "use strict";
          const r = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            i = r(e),
            o = r(t),
            s = r(n),
            a = "focustrap",
            u = ".bs.focustrap",
            l = `focusin${u}`,
            c = `keydown.tab${u}`,
            f = "Tab",
            d = "forward",
            p = "backward",
            h = { autofocus: !0, trapElement: null },
            g = { autofocus: "boolean", trapElement: "element" };
          class m extends s.default {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return h;
            }
            static get DefaultType() {
              return g;
            }
            static get NAME() {
              return a;
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                i.default.off(document, u),
                i.default.on(document, l, (e) => this._handleFocusin(e)),
                i.default.on(document, c, (e) => this._handleKeydown(e)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive &&
                ((this._isActive = !1), i.default.off(document, u));
            }
            _handleFocusin(e) {
              const { trapElement: t } = this._config;
              if (
                e.target === document ||
                e.target === t ||
                t.contains(e.target)
              )
                return;
              const n = o.default.focusableChildren(t);
              0 === n.length
                ? t.focus()
                : this._lastTabNavDirection === p
                ? n[n.length - 1].focus()
                : n[0].focus();
            }
            _handleKeydown(e) {
              e.key === f && (this._lastTabNavDirection = e.shiftKey ? p : d);
            }
          }
          return m;
        })(n(286), n(737), n(705));
      },
      72: function (e, t) {
        /*!
         * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        !(function (e) {
          "use strict";
          const t = 1e6,
            n = 1e3,
            r = "transitionend",
            i = (e) =>
              null == e
                ? `${e}`
                : Object.prototype.toString
                    .call(e)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase(),
            o = (e) => {
              do {
                e += Math.floor(Math.random() * t);
              } while (document.getElementById(e));
              return e;
            },
            s = (e) => {
              let t = e.getAttribute("data-bs-target");
              if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                n.includes("#") &&
                  !n.startsWith("#") &&
                  (n = `#${n.split("#")[1]}`),
                  (t = n && "#" !== n ? n.trim() : null);
              }
              return t;
            },
            a = (e) => {
              const t = s(e);
              return t && document.querySelector(t) ? t : null;
            },
            u = (e) => {
              const t = s(e);
              return t ? document.querySelector(t) : null;
            },
            l = (e) => {
              if (!e) return 0;
              let { transitionDuration: t, transitionDelay: r } =
                window.getComputedStyle(e);
              const i = Number.parseFloat(t),
                o = Number.parseFloat(r);
              return i || o
                ? ((t = t.split(",")[0]),
                  (r = r.split(",")[0]),
                  (Number.parseFloat(t) + Number.parseFloat(r)) * n)
                : 0;
            },
            c = (e) => {
              e.dispatchEvent(new Event(r));
            },
            f = (e) =>
              !(!e || "object" != typeof e) &&
              (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            d = (e) =>
              f(e)
                ? e.jquery
                  ? e[0]
                  : e
                : "string" == typeof e && e.length > 0
                ? document.querySelector(e)
                : null,
            p = (e) => {
              if (!f(e) || 0 === e.getClientRects().length) return !1;
              const t =
                  "visible" ===
                  getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
              if (!n) return t;
              if (n !== e) {
                const t = e.closest("summary");
                if (t && t.parentNode !== n) return !1;
                if (null === t) return !1;
              }
              return t;
            },
            h = (e) =>
              !e ||
              e.nodeType !== Node.ELEMENT_NODE ||
              !!e.classList.contains("disabled") ||
              (void 0 !== e.disabled
                ? e.disabled
                : e.hasAttribute("disabled") &&
                  "false" !== e.getAttribute("disabled")),
            g = (e) => {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
              }
              return e instanceof ShadowRoot
                ? e
                : e.parentNode
                ? g(e.parentNode)
                : null;
            },
            m = () => {},
            v = (e) => {
              e.offsetHeight;
            },
            y = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            b = [],
            x = (e) => {
              "loading" === document.readyState
                ? (b.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                      for (const e of b) e();
                    }),
                  b.push(e))
                : e();
            },
            w = () => "rtl" === document.documentElement.dir,
            T = (e) => {
              x(() => {
                const t = y();
                if (t) {
                  const n = e.NAME,
                    r = t.fn[n];
                  (t.fn[n] = e.jQueryInterface),
                    (t.fn[n].Constructor = e),
                    (t.fn[n].noConflict = () => (
                      (t.fn[n] = r), e.jQueryInterface
                    ));
                }
              });
            },
            E = (e) => {
              "function" == typeof e && e();
            },
            C = (e, t, n = !0) => {
              if (!n) return void E(e);
              const i = 5,
                o = l(t) + i;
              let s = !1;
              const a = ({ target: n }) => {
                n === t && ((s = !0), t.removeEventListener(r, a), E(e));
              };
              t.addEventListener(r, a),
                setTimeout(() => {
                  s || c(t);
                }, o);
            },
            A = (e, t, n, r) => {
              const i = e.length;
              let o = e.indexOf(t);
              return -1 === o
                ? !n && r
                  ? e[i - 1]
                  : e[0]
                : ((o += n ? 1 : -1),
                  r && (o = (o + i) % i),
                  e[Math.max(0, Math.min(o, i - 1))]);
            };
          (e.defineJQueryPlugin = T),
            (e.execute = E),
            (e.executeAfterTransition = C),
            (e.findShadowRoot = g),
            (e.getElement = d),
            (e.getElementFromSelector = u),
            (e.getNextActiveElement = A),
            (e.getSelectorFromElement = a),
            (e.getTransitionDurationFromElement = l),
            (e.getUID = o),
            (e.getjQuery = y),
            (e.isDisabled = h),
            (e.isElement = f),
            (e.isRTL = w),
            (e.isVisible = p),
            (e.noop = m),
            (e.onDOMContentLoaded = x),
            (e.reflow = v),
            (e.toType = i),
            (e.triggerTransitionEnd = c),
            Object.defineProperties(e, {
              __esModule: { value: !0 },
              [Symbol.toStringTag]: { value: "Module" },
            });
        })(t);
      },
      810: function (e, t, n) {
        /*!
         * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
         * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
         */
        e.exports = (function (e, t, n) {
          "use strict";
          const r = (e) =>
              e && "object" == typeof e && "default" in e ? e : { default: e },
            i = r(e),
            o = r(t),
            s = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            a = ".sticky-top",
            u = "padding-right",
            l = "margin-right";
          class c {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
            }
            hide() {
              const e = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, u, (t) => t + e),
                this._setElementAttributes(s, u, (t) => t + e),
                this._setElementAttributes(a, l, (t) => t - e);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, u),
                this._resetElementAttributes(s, u),
                this._resetElementAttributes(a, l);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, n) {
              const r = this.getWidth(),
                i = (e) => {
                  if (
                    e !== this._element &&
                    window.innerWidth > e.clientWidth + r
                  )
                    return;
                  this._saveInitialAttribute(e, t);
                  const i = window.getComputedStyle(e).getPropertyValue(t);
                  e.style.setProperty(t, `${n(Number.parseFloat(i))}px`);
                };
              this._applyManipulationCallback(e, i);
            }
            _saveInitialAttribute(e, t) {
              const n = e.style.getPropertyValue(t);
              n && o.default.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, t) {
              const n = (e) => {
                const n = o.default.getDataAttribute(e, t);
                null !== n
                  ? (o.default.removeDataAttribute(e, t),
                    e.style.setProperty(t, n))
                  : e.style.removeProperty(t);
              };
              this._applyManipulationCallback(e, n);
            }
            _applyManipulationCallback(e, t) {
              if (n.isElement(e)) t(e);
              else for (const n of i.default.find(e, this._element)) t(n);
            }
          }
          return c;
        })(n(737), n(175), n(72));
      },
      755: function (e, t) {
        var n;
        /*!
         * jQuery JavaScript Library v3.6.3
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright OpenJS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2022-12-20T21:28Z
         */ !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document",
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, i) {
          "use strict";
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            u = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            l = o.push,
            c = o.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            g = h.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            b = r.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              i,
              o = (n = n || b).createElement("script");
            if (((o.text = e), t))
              for (r in x)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[d.call(e)] || "object"
              : typeof e;
          }
          var E = "3.6.3",
            C = function (e, t) {
              return new C.fn.init(e, t);
            };
          function A(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (C.fn = C.prototype =
            {
              jquery: E,
              constructor: C,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = C.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return C.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  C.map(this, function (t, n) {
                    return e.call(t, n, t);
                  }),
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  }),
                );
              },
              odd: function () {
                return this.pushStack(
                  C.grep(this, function (e, t) {
                    return t % 2;
                  }),
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: l,
              sort: o.sort,
              splice: o.splice,
            }),
            (C.extend = C.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  u = arguments.length,
                  l = !1;
                for (
                  "boolean" == typeof s &&
                    ((l = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === u && ((s = this), a--);
                  a < u;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (r = e[t]),
                        "__proto__" !== t &&
                          s !== r &&
                          (l &&
                          r &&
                          (C.isPlainObject(r) || (i = Array.isArray(r)))
                            ? ((n = s[t]),
                              (o =
                                i && !Array.isArray(n)
                                  ? []
                                  : i || C.isPlainObject(n)
                                  ? n
                                  : {}),
                              (i = !1),
                              (s[t] = C.extend(l, o, r)))
                            : void 0 !== r && (s[t] = r));
                return s;
              }),
            C.extend({
              expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== d.call(e)) &&
                  (!(t = s(e)) ||
                    ("function" ==
                      typeof (n = p.call(t, "constructor") && t.constructor) &&
                      h.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (A(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (A(Object(e))
                      ? C.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                  !t(e[i], i) !== s && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  s = [];
                if (A(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return u(s);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " ",
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              },
            );
          var _ =
            /*!
             * Sizzle CSS Selector Engine v2.3.9
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2022-12-19
             */
            (function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m,
                v,
                y,
                b,
                x = "sizzle" + 1 * new Date(),
                w = e.document,
                T = 0,
                E = 0,
                C = ue(),
                A = ue(),
                _ = ue(),
                S = ue(),
                k = function (e, t) {
                  return e === t && (f = !0), 0;
                },
                D = {}.hasOwnProperty,
                N = [],
                j = N.pop,
                L = N.push,
                q = N.push,
                O = N.slice,
                M = function (e, t) {
                  for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                  return -1;
                },
                H =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R =
                  "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                $ =
                  "\\[[\\x20\\t\\r\\n\\f]*(" +
                  R +
                  ")(?:" +
                  P +
                  "*([*^$|!~]?=)" +
                  P +
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  R +
                  "))|)" +
                  P +
                  "*\\]",
                I =
                  ":(" +
                  R +
                  ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                  $ +
                  ")*)|.*)\\)|)",
                F = new RegExp(P + "+", "g"),
                W = new RegExp(
                  "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                  "g",
                ),
                B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                z = new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*",
                ),
                V = new RegExp(P + "|>"),
                U = new RegExp(I),
                X = new RegExp("^" + R + "$"),
                Y = {
                  ID: new RegExp("^#(" + R + ")"),
                  CLASS: new RegExp("^\\.(" + R + ")"),
                  TAG: new RegExp("^(" + R + "|[*])"),
                  ATTR: new RegExp("^" + $),
                  PSEUDO: new RegExp("^" + I),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                    "i",
                  ),
                  bool: new RegExp("^(?:" + H + ")$", "i"),
                  needsContext: new RegExp(
                    "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                    "i",
                  ),
                },
                Q = /HTML$/i,
                K = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp(
                  "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                  "g",
                ),
                ne = function (e, t) {
                  var n = "0x" + e.slice(1) - 65536;
                  return (
                    t ||
                    (n < 0
                      ? String.fromCharCode(n + 65536)
                      : String.fromCharCode(
                          (n >> 10) | 55296,
                          (1023 & n) | 56320,
                        ))
                  );
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function (e, t) {
                  return t
                    ? "\0" === e
                      ? "�"
                      : e.slice(0, -1) +
                        "\\" +
                        e.charCodeAt(e.length - 1).toString(16) +
                        " "
                    : "\\" + e;
                },
                oe = function () {
                  d();
                },
                se = xe(
                  function (e) {
                    return (
                      !0 === e.disabled &&
                      "fieldset" === e.nodeName.toLowerCase()
                    );
                  },
                  { dir: "parentNode", next: "legend" },
                );
              try {
                q.apply((N = O.call(w.childNodes)), w.childNodes),
                  N[w.childNodes.length].nodeType;
              } catch (e) {
                q = {
                  apply: N.length
                    ? function (e, t) {
                        L.apply(e, O.call(t));
                      }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                        e.length = n - 1;
                      },
                };
              }
              function ae(e, t, r, i) {
                var o,
                  a,
                  l,
                  c,
                  f,
                  h,
                  v,
                  y = t && t.ownerDocument,
                  w = t ? t.nodeType : 9;
                if (
                  ((r = r || []),
                  "string" != typeof e ||
                    !e ||
                    (1 !== w && 9 !== w && 11 !== w))
                )
                  return r;
                if (!i && (d(t), (t = t || p), g)) {
                  if (11 !== w && (f = Z.exec(e)))
                    if ((o = f[1])) {
                      if (9 === w) {
                        if (!(l = t.getElementById(o))) return r;
                        if (l.id === o) return r.push(l), r;
                      } else if (
                        y &&
                        (l = y.getElementById(o)) &&
                        b(t, l) &&
                        l.id === o
                      )
                        return r.push(l), r;
                    } else {
                      if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;
                      if (
                        (o = f[3]) &&
                        n.getElementsByClassName &&
                        t.getElementsByClassName
                      )
                        return q.apply(r, t.getElementsByClassName(o)), r;
                    }
                  if (
                    n.qsa &&
                    !S[e + " "] &&
                    (!m || !m.test(e)) &&
                    (1 !== w || "object" !== t.nodeName.toLowerCase())
                  ) {
                    if (
                      ((v = e), (y = t), 1 === w && (V.test(e) || z.test(e)))
                    ) {
                      for (
                        ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                          n.scope) ||
                          ((c = t.getAttribute("id"))
                            ? (c = c.replace(re, ie))
                            : t.setAttribute("id", (c = x))),
                          a = (h = s(e)).length;
                        a--;

                      )
                        h[a] = (c ? "#" + c : ":scope") + " " + be(h[a]);
                      v = h.join(",");
                    }
                    try {
                      if (
                        n.cssSupportsSelector &&
                        !CSS.supports("selector(:is(" + v + "))")
                      )
                        throw new Error();
                      return q.apply(r, y.querySelectorAll(v)), r;
                    } catch (t) {
                      S(e, !0);
                    } finally {
                      c === x && t.removeAttribute("id");
                    }
                  }
                }
                return u(e.replace(W, "$1"), t, r, i);
              }
              function ue() {
                var e = [];
                return function t(n, i) {
                  return (
                    e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    (t[n + " "] = i)
                  );
                };
              }
              function le(e) {
                return (e[x] = !0), e;
              }
              function ce(e) {
                var t = p.createElement("fieldset");
                try {
                  return !!e(t);
                } catch (e) {
                  return !1;
                } finally {
                  t.parentNode && t.parentNode.removeChild(t), (t = null);
                }
              }
              function fe(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                  r.attrHandle[n[i]] = t;
              }
              function de(e, t) {
                var n = t && e,
                  r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
              }
              function pe(e) {
                return function (t) {
                  return "input" === t.nodeName.toLowerCase() && t.type === e;
                };
              }
              function he(e) {
                return function (t) {
                  var n = t.nodeName.toLowerCase();
                  return ("input" === n || "button" === n) && t.type === e;
                };
              }
              function ge(e) {
                return function (t) {
                  return "form" in t
                    ? t.parentNode && !1 === t.disabled
                      ? "label" in t
                        ? "label" in t.parentNode
                          ? t.parentNode.disabled === e
                          : t.disabled === e
                        : t.isDisabled === e ||
                          (t.isDisabled !== !e && se(t) === e)
                      : t.disabled === e
                    : "label" in t && t.disabled === e;
                };
              }
              function me(e) {
                return le(function (t) {
                  return (
                    (t = +t),
                    le(function (n, r) {
                      for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                    })
                  );
                });
              }
              function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e;
              }
              for (t in ((n = ae.support = {}),
              (o = ae.isXML =
                function (e) {
                  var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                  return !Q.test(t || (n && n.nodeName) || "HTML");
                }),
              (d = ae.setDocument =
                function (e) {
                  var t,
                    i,
                    s = e ? e.ownerDocument || e : w;
                  return s != p && 9 === s.nodeType && s.documentElement
                    ? ((h = (p = s).documentElement),
                      (g = !o(p)),
                      w != p &&
                        (i = p.defaultView) &&
                        i.top !== i &&
                        (i.addEventListener
                          ? i.addEventListener("unload", oe, !1)
                          : i.attachEvent && i.attachEvent("onunload", oe)),
                      (n.scope = ce(function (e) {
                        return (
                          h.appendChild(e).appendChild(p.createElement("div")),
                          void 0 !== e.querySelectorAll &&
                            !e.querySelectorAll(":scope fieldset div").length
                        );
                      })),
                      (n.cssSupportsSelector = ce(function () {
                        return (
                          CSS.supports("selector(*)") &&
                          p.querySelectorAll(":is(:jqfake)") &&
                          !CSS.supports("selector(:is(*,:jqfake))")
                        );
                      })),
                      (n.attributes = ce(function (e) {
                        return (
                          (e.className = "i"), !e.getAttribute("className")
                        );
                      })),
                      (n.getElementsByTagName = ce(function (e) {
                        return (
                          e.appendChild(p.createComment("")),
                          !e.getElementsByTagName("*").length
                        );
                      })),
                      (n.getElementsByClassName = J.test(
                        p.getElementsByClassName,
                      )),
                      (n.getById = ce(function (e) {
                        return (
                          (h.appendChild(e).id = x),
                          !p.getElementsByName || !p.getElementsByName(x).length
                        );
                      })),
                      n.getById
                        ? ((r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              return e.getAttribute("id") === t;
                            };
                          }),
                          (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n = t.getElementById(e);
                              return n ? [n] : [];
                            }
                          }))
                        : ((r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                              var n =
                                void 0 !== e.getAttributeNode &&
                                e.getAttributeNode("id");
                              return n && n.value === t;
                            };
                          }),
                          (r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                              var n,
                                r,
                                i,
                                o = t.getElementById(e);
                              if (o) {
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                                for (
                                  i = t.getElementsByName(e), r = 0;
                                  (o = i[r++]);

                                )
                                  if (
                                    (n = o.getAttributeNode("id")) &&
                                    n.value === e
                                  )
                                    return [o];
                              }
                              return [];
                            }
                          })),
                      (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                            return void 0 !== t.getElementsByTagName
                              ? t.getElementsByTagName(e)
                              : n.qsa
                              ? t.querySelectorAll(e)
                              : void 0;
                          }
                        : function (e, t) {
                            var n,
                              r = [],
                              i = 0,
                              o = t.getElementsByTagName(e);
                            if ("*" === e) {
                              for (; (n = o[i++]); )
                                1 === n.nodeType && r.push(n);
                              return r;
                            }
                            return o;
                          }),
                      (r.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                          if (void 0 !== t.getElementsByClassName && g)
                            return t.getElementsByClassName(e);
                        }),
                      (v = []),
                      (m = []),
                      (n.qsa = J.test(p.querySelectorAll)) &&
                        (ce(function (e) {
                          var t;
                          (h.appendChild(e).innerHTML =
                            "<a id='" +
                            x +
                            "'></a><select id='" +
                            x +
                            "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                            e.querySelectorAll("[msallowcapture^='']").length &&
                              m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length ||
                              m.push(
                                "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + H + ")",
                              ),
                            e.querySelectorAll("[id~=" + x + "-]").length ||
                              m.push("~="),
                            (t = p.createElement("input")).setAttribute(
                              "name",
                              "",
                            ),
                            e.appendChild(t),
                            e.querySelectorAll("[name='']").length ||
                              m.push(
                                "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")",
                              ),
                            e.querySelectorAll(":checked").length ||
                              m.push(":checked"),
                            e.querySelectorAll("a#" + x + "+*").length ||
                              m.push(".#.+[+~]"),
                            e.querySelectorAll("\\\f"),
                            m.push("[\\r\\n\\f]");
                        }),
                        ce(function (e) {
                          e.innerHTML =
                            "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                          var t = p.createElement("input");
                          t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length &&
                              m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length &&
                              m.push(":enabled", ":disabled"),
                            (h.appendChild(e).disabled = !0),
                            2 !== e.querySelectorAll(":disabled").length &&
                              m.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            m.push(",.*:");
                        })),
                      (n.matchesSelector = J.test(
                        (y =
                          h.matches ||
                          h.webkitMatchesSelector ||
                          h.mozMatchesSelector ||
                          h.oMatchesSelector ||
                          h.msMatchesSelector),
                      )) &&
                        ce(function (e) {
                          (n.disconnectedMatch = y.call(e, "*")),
                            y.call(e, "[s!='']:x"),
                            v.push("!=", I);
                        }),
                      n.cssSupportsSelector || m.push(":has"),
                      (m = m.length && new RegExp(m.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = J.test(h.compareDocumentPosition)),
                      (b =
                        t || J.test(h.contains)
                          ? function (e, t) {
                              var n =
                                  (9 === e.nodeType && e.documentElement) || e,
                                r = t && t.parentNode;
                              return (
                                e === r ||
                                !(
                                  !r ||
                                  1 !== r.nodeType ||
                                  !(n.contains
                                    ? n.contains(r)
                                    : e.compareDocumentPosition &&
                                      16 & e.compareDocumentPosition(r))
                                )
                              );
                            }
                          : function (e, t) {
                              if (t)
                                for (; (t = t.parentNode); )
                                  if (t === e) return !0;
                              return !1;
                            }),
                      (k = t
                        ? function (e, t) {
                            if (e === t) return (f = !0), 0;
                            var r =
                              !e.compareDocumentPosition -
                              !t.compareDocumentPosition;
                            return (
                              r ||
                              (1 &
                                (r =
                                  (e.ownerDocument || e) ==
                                  (t.ownerDocument || t)
                                    ? e.compareDocumentPosition(t)
                                    : 1) ||
                              (!n.sortDetached &&
                                t.compareDocumentPosition(e) === r)
                                ? e == p || (e.ownerDocument == w && b(w, e))
                                  ? -1
                                  : t == p || (t.ownerDocument == w && b(w, t))
                                  ? 1
                                  : c
                                  ? M(c, e) - M(c, t)
                                  : 0
                                : 4 & r
                                ? -1
                                : 1)
                            );
                          }
                        : function (e, t) {
                            if (e === t) return (f = !0), 0;
                            var n,
                              r = 0,
                              i = e.parentNode,
                              o = t.parentNode,
                              s = [e],
                              a = [t];
                            if (!i || !o)
                              return e == p
                                ? -1
                                : t == p
                                ? 1
                                : i
                                ? -1
                                : o
                                ? 1
                                : c
                                ? M(c, e) - M(c, t)
                                : 0;
                            if (i === o) return de(e, t);
                            for (n = e; (n = n.parentNode); ) s.unshift(n);
                            for (n = t; (n = n.parentNode); ) a.unshift(n);
                            for (; s[r] === a[r]; ) r++;
                            return r
                              ? de(s[r], a[r])
                              : s[r] == w
                              ? -1
                              : a[r] == w
                              ? 1
                              : 0;
                          }),
                      p)
                    : p;
                }),
              (ae.matches = function (e, t) {
                return ae(e, null, null, t);
              }),
              (ae.matchesSelector = function (e, t) {
                if (
                  (d(e),
                  n.matchesSelector &&
                    g &&
                    !S[t + " "] &&
                    (!v || !v.test(t)) &&
                    (!m || !m.test(t)))
                )
                  try {
                    var r = y.call(e, t);
                    if (
                      r ||
                      n.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return r;
                  } catch (e) {
                    S(t, !0);
                  }
                return ae(t, p, null, [e]).length > 0;
              }),
              (ae.contains = function (e, t) {
                return (e.ownerDocument || e) != p && d(e), b(e, t);
              }),
              (ae.attr = function (e, t) {
                (e.ownerDocument || e) != p && d(e);
                var i = r.attrHandle[t.toLowerCase()],
                  o =
                    i && D.call(r.attrHandle, t.toLowerCase())
                      ? i(e, t, !g)
                      : void 0;
                return void 0 !== o
                  ? o
                  : n.attributes || !g
                  ? e.getAttribute(t)
                  : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
              }),
              (ae.escape = function (e) {
                return (e + "").replace(re, ie);
              }),
              (ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (ae.uniqueSort = function (e) {
                var t,
                  r = [],
                  i = 0,
                  o = 0;
                if (
                  ((f = !n.detectDuplicates),
                  (c = !n.sortStable && e.slice(0)),
                  e.sort(k),
                  f)
                ) {
                  for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                  for (; i--; ) e.splice(r[i], 1);
                }
                return (c = null), e;
              }),
              (i = ae.getText =
                function (e) {
                  var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                  if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                      if ("string" == typeof e.textContent)
                        return e.textContent;
                      for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                  } else for (; (t = e[r++]); ) n += i(t);
                  return n;
                }),
              (r = ae.selectors =
                {
                  cacheLength: 50,
                  createPseudo: le,
                  match: Y,
                  attrHandle: {},
                  find: {},
                  relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                  },
                  preFilter: {
                    ATTR: function (e) {
                      return (
                        (e[1] = e[1].replace(te, ne)),
                        (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                      );
                    },
                    CHILD: function (e) {
                      return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3)
                          ? (e[3] || ae.error(e[0]),
                            (e[4] = +(e[4]
                              ? e[5] + (e[6] || 1)
                              : 2 * ("even" === e[3] || "odd" === e[3]))),
                            (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                          : e[3] && ae.error(e[0]),
                        e
                      );
                    },
                    PSEUDO: function (e) {
                      var t,
                        n = !e[6] && e[2];
                      return Y.CHILD.test(e[0])
                        ? null
                        : (e[3]
                            ? (e[2] = e[4] || e[5] || "")
                            : n &&
                              U.test(n) &&
                              (t = s(n, !0)) &&
                              (t = n.indexOf(")", n.length - t) - n.length) &&
                              ((e[0] = e[0].slice(0, t)),
                              (e[2] = n.slice(0, t))),
                          e.slice(0, 3));
                    },
                  },
                  filter: {
                    TAG: function (e) {
                      var t = e.replace(te, ne).toLowerCase();
                      return "*" === e
                        ? function () {
                            return !0;
                          }
                        : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                    },
                    CLASS: function (e) {
                      var t = C[e + " "];
                      return (
                        t ||
                        ((t = new RegExp(
                          "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + P + "|$)",
                        )) &&
                          C(e, function (e) {
                            return t.test(
                              ("string" == typeof e.className && e.className) ||
                                (void 0 !== e.getAttribute &&
                                  e.getAttribute("class")) ||
                                "",
                            );
                          }))
                      );
                    },
                    ATTR: function (e, t, n) {
                      return function (r) {
                        var i = ae.attr(r, e);
                        return null == i
                          ? "!=" === t
                          : !t ||
                              ((i += ""),
                              "=" === t
                                ? i === n
                                : "!=" === t
                                ? i !== n
                                : "^=" === t
                                ? n && 0 === i.indexOf(n)
                                : "*=" === t
                                ? n && i.indexOf(n) > -1
                                : "$=" === t
                                ? n && i.slice(-n.length) === n
                                : "~=" === t
                                ? (" " + i.replace(F, " ") + " ").indexOf(n) >
                                  -1
                                : "|=" === t &&
                                  (i === n ||
                                    i.slice(0, n.length + 1) === n + "-"));
                      };
                    },
                    CHILD: function (e, t, n, r, i) {
                      var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                      return 1 === r && 0 === i
                        ? function (e) {
                            return !!e.parentNode;
                          }
                        : function (t, n, u) {
                            var l,
                              c,
                              f,
                              d,
                              p,
                              h,
                              g = o !== s ? "nextSibling" : "previousSibling",
                              m = t.parentNode,
                              v = a && t.nodeName.toLowerCase(),
                              y = !u && !a,
                              b = !1;
                            if (m) {
                              if (o) {
                                for (; g; ) {
                                  for (d = t; (d = d[g]); )
                                    if (
                                      a
                                        ? d.nodeName.toLowerCase() === v
                                        : 1 === d.nodeType
                                    )
                                      return !1;
                                  h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                              }
                              if (
                                ((h = [s ? m.firstChild : m.lastChild]), s && y)
                              ) {
                                for (
                                  b =
                                    (p =
                                      (l =
                                        (c =
                                          (f = (d = m)[x] || (d[x] = {}))[
                                            d.uniqueID
                                          ] || (f[d.uniqueID] = {}))[e] ||
                                        [])[0] === T && l[1]) && l[2],
                                    d = p && m.childNodes[p];
                                  (d =
                                    (++p && d && d[g]) ||
                                    (b = p = 0) ||
                                    h.pop());

                                )
                                  if (1 === d.nodeType && ++b && d === t) {
                                    c[e] = [T, p, b];
                                    break;
                                  }
                              } else if (
                                (y &&
                                  (b = p =
                                    (l =
                                      (c =
                                        (f = (d = t)[x] || (d[x] = {}))[
                                          d.uniqueID
                                        ] || (f[d.uniqueID] = {}))[e] ||
                                      [])[0] === T && l[1]),
                                !1 === b)
                              )
                                for (
                                  ;
                                  (d =
                                    (++p && d && d[g]) ||
                                    (b = p = 0) ||
                                    h.pop()) &&
                                  ((a
                                    ? d.nodeName.toLowerCase() !== v
                                    : 1 !== d.nodeType) ||
                                    !++b ||
                                    (y &&
                                      ((c =
                                        (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                        (f[d.uniqueID] = {}))[e] = [T, b]),
                                    d !== t));

                                );
                              return (
                                (b -= i) === r || (b % r == 0 && b / r >= 0)
                              );
                            }
                          };
                    },
                    PSEUDO: function (e, t) {
                      var n,
                        i =
                          r.pseudos[e] ||
                          r.setFilters[e.toLowerCase()] ||
                          ae.error("unsupported pseudo: " + e);
                      return i[x]
                        ? i(t)
                        : i.length > 1
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                            ? le(function (e, n) {
                                for (var r, o = i(e, t), s = o.length; s--; )
                                  e[(r = M(e, o[s]))] = !(n[r] = o[s]);
                              })
                            : function (e) {
                                return i(e, 0, n);
                              })
                        : i;
                    },
                  },
                  pseudos: {
                    not: le(function (e) {
                      var t = [],
                        n = [],
                        r = a(e.replace(W, "$1"));
                      return r[x]
                        ? le(function (e, t, n, i) {
                            for (
                              var o, s = r(e, null, i, []), a = e.length;
                              a--;

                            )
                              (o = s[a]) && (e[a] = !(t[a] = o));
                          })
                        : function (e, i, o) {
                            return (
                              (t[0] = e),
                              r(t, null, o, n),
                              (t[0] = null),
                              !n.pop()
                            );
                          };
                    }),
                    has: le(function (e) {
                      return function (t) {
                        return ae(e, t).length > 0;
                      };
                    }),
                    contains: le(function (e) {
                      return (
                        (e = e.replace(te, ne)),
                        function (t) {
                          return (t.textContent || i(t)).indexOf(e) > -1;
                        }
                      );
                    }),
                    lang: le(function (e) {
                      return (
                        X.test(e || "") || ae.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                          var n;
                          do {
                            if (
                              (n = g
                                ? t.lang
                                : t.getAttribute("xml:lang") ||
                                  t.getAttribute("lang"))
                            )
                              return (
                                (n = n.toLowerCase()) === e ||
                                0 === n.indexOf(e + "-")
                              );
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1;
                        }
                      );
                    }),
                    target: function (t) {
                      var n = e.location && e.location.hash;
                      return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                      return e === h;
                    },
                    focus: function (e) {
                      return (
                        e === p.activeElement &&
                        (!p.hasFocus || p.hasFocus()) &&
                        !!(e.type || e.href || ~e.tabIndex)
                      );
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && !!e.checked) ||
                        ("option" === t && !!e.selected)
                      );
                    },
                    selected: function (e) {
                      return (
                        e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                      );
                    },
                    empty: function (e) {
                      for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                      return !0;
                    },
                    parent: function (e) {
                      return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                      return G.test(e.nodeName);
                    },
                    input: function (e) {
                      return K.test(e.nodeName);
                    },
                    button: function (e) {
                      var t = e.nodeName.toLowerCase();
                      return (
                        ("input" === t && "button" === e.type) || "button" === t
                      );
                    },
                    text: function (e) {
                      var t;
                      return (
                        "input" === e.nodeName.toLowerCase() &&
                        "text" === e.type &&
                        (null == (t = e.getAttribute("type")) ||
                          "text" === t.toLowerCase())
                      );
                    },
                    first: me(function () {
                      return [0];
                    }),
                    last: me(function (e, t) {
                      return [t - 1];
                    }),
                    eq: me(function (e, t, n) {
                      return [n < 0 ? n + t : n];
                    }),
                    even: me(function (e, t) {
                      for (var n = 0; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    odd: me(function (e, t) {
                      for (var n = 1; n < t; n += 2) e.push(n);
                      return e;
                    }),
                    lt: me(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                        e.push(r);
                      return e;
                    }),
                    gt: me(function (e, t, n) {
                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                      return e;
                    }),
                  },
                }),
              (r.pseudos.nth = r.pseudos.eq),
              { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                r.pseudos[t] = pe(t);
              for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
              function ye() {}
              function be(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                  r += e[t].value;
                return r;
              }
              function xe(e, t, n) {
                var r = t.dir,
                  i = t.next,
                  o = i || r,
                  s = n && "parentNode" === o,
                  a = E++;
                return t.first
                  ? function (t, n, i) {
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || s) return e(t, n, i);
                      return !1;
                    }
                  : function (t, n, u) {
                      var l,
                        c,
                        f,
                        d = [T, a];
                      if (u) {
                        for (; (t = t[r]); )
                          if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                      } else
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || s)
                            if (
                              ((c =
                                (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                                (f[t.uniqueID] = {})),
                              i && i === t.nodeName.toLowerCase())
                            )
                              t = t[r] || t;
                            else {
                              if ((l = c[o]) && l[0] === T && l[1] === a)
                                return (d[2] = l[2]);
                              if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                            }
                      return !1;
                    };
              }
              function we(e) {
                return e.length > 1
                  ? function (t, n, r) {
                      for (var i = e.length; i--; )
                        if (!e[i](t, n, r)) return !1;
                      return !0;
                    }
                  : e[0];
              }
              function Te(e, t, n, r, i) {
                for (
                  var o, s = [], a = 0, u = e.length, l = null != t;
                  a < u;
                  a++
                )
                  (o = e[a]) &&
                    ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
                return s;
              }
              function Ee(e, t, n, r, i, o) {
                return (
                  r && !r[x] && (r = Ee(r)),
                  i && !i[x] && (i = Ee(i, o)),
                  le(function (o, s, a, u) {
                    var l,
                      c,
                      f,
                      d = [],
                      p = [],
                      h = s.length,
                      g =
                        o ||
                        (function (e, t, n) {
                          for (var r = 0, i = t.length; r < i; r++)
                            ae(e, t[r], n);
                          return n;
                        })(t || "*", a.nodeType ? [a] : a, []),
                      m = !e || (!o && t) ? g : Te(g, d, e, a, u),
                      v = n ? (i || (o ? e : h || r) ? [] : s) : m;
                    if ((n && n(m, v, a, u), r))
                      for (l = Te(v, p), r(l, [], a, u), c = l.length; c--; )
                        (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                    if (o) {
                      if (i || e) {
                        if (i) {
                          for (l = [], c = v.length; c--; )
                            (f = v[c]) && l.push((m[c] = f));
                          i(null, (v = []), l, u);
                        }
                        for (c = v.length; c--; )
                          (f = v[c]) &&
                            (l = i ? M(o, f) : d[c]) > -1 &&
                            (o[l] = !(s[l] = f));
                      }
                    } else
                      (v = Te(v === s ? v.splice(h, v.length) : v)),
                        i ? i(null, s, v, u) : q.apply(s, v);
                  })
                );
              }
              function Ce(e) {
                for (
                  var t,
                    n,
                    i,
                    o = e.length,
                    s = r.relative[e[0].type],
                    a = s || r.relative[" "],
                    u = s ? 1 : 0,
                    c = xe(
                      function (e) {
                        return e === t;
                      },
                      a,
                      !0,
                    ),
                    f = xe(
                      function (e) {
                        return M(t, e) > -1;
                      },
                      a,
                      !0,
                    ),
                    d = [
                      function (e, n, r) {
                        var i =
                          (!s && (r || n !== l)) ||
                          ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return (t = null), i;
                      },
                    ];
                  u < o;
                  u++
                )
                  if ((n = r.relative[e[u].type])) d = [xe(we(d), n)];
                  else {
                    if (
                      (n = r.filter[e[u].type].apply(null, e[u].matches))[x]
                    ) {
                      for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                      return Ee(
                        u > 1 && we(d),
                        u > 1 &&
                          be(
                            e
                              .slice(0, u - 1)
                              .concat({
                                value: " " === e[u - 2].type ? "*" : "",
                              }),
                          ).replace(W, "$1"),
                        n,
                        u < i && Ce(e.slice(u, i)),
                        i < o && Ce((e = e.slice(i))),
                        i < o && be(e),
                      );
                    }
                    d.push(n);
                  }
                return we(d);
              }
              return (
                (ye.prototype = r.filters = r.pseudos),
                (r.setFilters = new ye()),
                (s = ae.tokenize =
                  function (e, t) {
                    var n,
                      i,
                      o,
                      s,
                      a,
                      u,
                      l,
                      c = A[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, u = [], l = r.preFilter; a; ) {
                      for (s in ((n && !(i = B.exec(a))) ||
                        (i && (a = a.slice(i[0].length) || a),
                        u.push((o = []))),
                      (n = !1),
                      (i = z.exec(a)) &&
                        ((n = i.shift()),
                        o.push({ value: n, type: i[0].replace(W, " ") }),
                        (a = a.slice(n.length))),
                      r.filter))
                        !(i = Y[s].exec(a)) ||
                          (l[s] && !(i = l[s](i))) ||
                          ((n = i.shift()),
                          o.push({ value: n, type: s, matches: i }),
                          (a = a.slice(n.length)));
                      if (!n) break;
                    }
                    return t ? a.length : a ? ae.error(e) : A(e, u).slice(0);
                  }),
                (a = ae.compile =
                  function (e, t) {
                    var n,
                      i = [],
                      o = [],
                      a = _[e + " "];
                    if (!a) {
                      for (t || (t = s(e)), n = t.length; n--; )
                        (a = Ce(t[n]))[x] ? i.push(a) : o.push(a);
                      (a = _(
                        e,
                        (function (e, t) {
                          var n = t.length > 0,
                            i = e.length > 0,
                            o = function (o, s, a, u, c) {
                              var f,
                                h,
                                m,
                                v = 0,
                                y = "0",
                                b = o && [],
                                x = [],
                                w = l,
                                E = o || (i && r.find.TAG("*", c)),
                                C = (T += null == w ? 1 : Math.random() || 0.1),
                                A = E.length;
                              for (
                                c && (l = s == p || s || c);
                                y !== A && null != (f = E[y]);
                                y++
                              ) {
                                if (i && f) {
                                  for (
                                    h = 0,
                                      s ||
                                        f.ownerDocument == p ||
                                        (d(f), (a = !g));
                                    (m = e[h++]);

                                  )
                                    if (m(f, s || p, a)) {
                                      u.push(f);
                                      break;
                                    }
                                  c && (T = C);
                                }
                                n && ((f = !m && f) && v--, o && b.push(f));
                              }
                              if (((v += y), n && y !== v)) {
                                for (h = 0; (m = t[h++]); ) m(b, x, s, a);
                                if (o) {
                                  if (v > 0)
                                    for (; y--; )
                                      b[y] || x[y] || (x[y] = j.call(u));
                                  x = Te(x);
                                }
                                q.apply(u, x),
                                  c &&
                                    !o &&
                                    x.length > 0 &&
                                    v + t.length > 1 &&
                                    ae.uniqueSort(u);
                              }
                              return c && ((T = C), (l = w)), b;
                            };
                          return n ? le(o) : o;
                        })(o, i),
                      )),
                        (a.selector = e);
                    }
                    return a;
                  }),
                (u = ae.select =
                  function (e, t, n, i) {
                    var o,
                      u,
                      l,
                      c,
                      f,
                      d = "function" == typeof e && e,
                      p = !i && s((e = d.selector || e));
                    if (((n = n || []), 1 === p.length)) {
                      if (
                        (u = p[0] = p[0].slice(0)).length > 2 &&
                        "ID" === (l = u[0]).type &&
                        9 === t.nodeType &&
                        g &&
                        r.relative[u[1].type]
                      ) {
                        if (
                          !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                            [])[0])
                        )
                          return n;
                        d && (t = t.parentNode),
                          (e = e.slice(u.shift().value.length));
                      }
                      for (
                        o = Y.needsContext.test(e) ? 0 : u.length;
                        o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                      )
                        if (
                          (f = r.find[c]) &&
                          (i = f(
                            l.matches[0].replace(te, ne),
                            (ee.test(u[0].type) && ve(t.parentNode)) || t,
                          ))
                        ) {
                          if ((u.splice(o, 1), !(e = i.length && be(u))))
                            return q.apply(n, i), n;
                          break;
                        }
                    }
                    return (
                      (d || a(e, p))(
                        i,
                        t,
                        !g,
                        n,
                        !t || (ee.test(e) && ve(t.parentNode)) || t,
                      ),
                      n
                    );
                  }),
                (n.sortStable = x.split("").sort(k).join("") === x),
                (n.detectDuplicates = !!f),
                d(),
                (n.sortDetached = ce(function (e) {
                  return (
                    1 & e.compareDocumentPosition(p.createElement("fieldset"))
                  );
                })),
                ce(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                  );
                }) ||
                  fe("type|href|height|width", function (e, t, n) {
                    if (!n)
                      return e.getAttribute(
                        t,
                        "type" === t.toLowerCase() ? 1 : 2,
                      );
                  }),
                (n.attributes &&
                  ce(function (e) {
                    return (
                      (e.innerHTML = "<input/>"),
                      e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    );
                  })) ||
                  fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                      return e.defaultValue;
                  }),
                ce(function (e) {
                  return null == e.getAttribute("disabled");
                }) ||
                  fe(H, function (e, t, n) {
                    var r;
                    if (!n)
                      return !0 === e[t]
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                        ? r.value
                        : null;
                  }),
                ae
              );
            })(r);
          (C.find = _),
            (C.expr = _.selectors),
            (C.expr[":"] = C.expr.pseudos),
            (C.uniqueSort = C.unique = _.uniqueSort),
            (C.text = _.getText),
            (C.isXMLDoc = _.isXML),
            (C.contains = _.contains),
            (C.escapeSelector = _.escape);
          var S = function (e, t, n) {
              for (
                var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && C(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            k = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            D = C.expr.match.needsContext;
          function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var j =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e, t, n) {
            return v(t)
              ? C.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? C.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? C.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : C.filter(t, e, n);
          }
          (C.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? C.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : C.find.matches(
                    e,
                    C.grep(t, function (e) {
                      return 1 === e.nodeType;
                    }),
                  )
            );
          }),
            C.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    C(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (C.contains(i[t], this)) return !0;
                    }),
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  C.find(e, i[t], n);
                return r > 1 ? C.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(
                  this,
                  "string" == typeof e && D.test(e) ? C(e) : e || [],
                  !1,
                ).length;
              },
            });
          var q,
            O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((C.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || q), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : O.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof C ? t[0] : t),
                  C.merge(
                    this,
                    C.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : b,
                      !0,
                    ),
                  ),
                  j.test(r[1]) && C.isPlainObject(t))
                )
                  for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = b.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(C)
              : C.makeArray(e, this);
          }).prototype = C.fn),
            (q = C(b));
          var M = /^(?:parents|prev(?:Until|All))/,
            H = { children: !0, contents: !0, next: !0, prev: !0 };
          function P(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          C.fn.extend({
            has: function (e) {
              var t = C(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (C.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && C(e);
              if (!D.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && C.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(C(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e),
              );
            },
          }),
            C.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return S(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return S(e, "parentNode", n);
                },
                next: function (e) {
                  return P(e, "nextSibling");
                },
                prev: function (e) {
                  return P(e, "previousSibling");
                },
                nextAll: function (e) {
                  return S(e, "nextSibling");
                },
                prevAll: function (e) {
                  return S(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return S(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return S(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return k((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return k(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (N(e, "template") && (e = e.content || e),
                      C.merge([], e.childNodes));
                },
              },
              function (e, t) {
                C.fn[e] = function (n, r) {
                  var i = C.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = C.filter(r, i)),
                    this.length > 1 &&
                      (H[e] || C.uniqueSort(i), M.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              },
            );
          var R = /[^\x20\t\r\n\f]+/g;
          function $(e) {
            return e;
          }
          function I(e) {
            throw e;
          }
          function F(e, t, n, r) {
            var i;
            try {
              e && v((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && v((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (C.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      C.each(e.match(R) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : C.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              s = [],
              a = -1,
              u = function () {
                for (i = i || e.once, r = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        C.each(n, function (n, r) {
                          v(r)
                            ? (e.unique && l.has(r)) || o.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    C.each(arguments, function (e, t) {
                      for (var n; (n = C.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? C.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            C.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      C.Callbacks("memory"),
                      C.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      C.Callbacks("once memory"),
                      C.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  i = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return i.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return C.Deferred(function (n) {
                        C.each(t, function (t, r) {
                          var i = v(e[r[4]]) && e[r[4]];
                          o[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, i) {
                      var o = 0;
                      function s(e, t, n, i) {
                        return function () {
                          var a = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < o)) {
                                if ((r = n.apply(a, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution",
                                  );
                                (l =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  v(l)
                                    ? i
                                      ? l.call(r, s(o, t, $, i), s(o, t, I, i))
                                      : (o++,
                                        l.call(
                                          r,
                                          s(o, t, $, i),
                                          s(o, t, I, i),
                                          s(o, t, $, t.notifyWith),
                                        ))
                                    : (n !== $ && ((a = void 0), (u = [r])),
                                      (i || t.resolveWith)(a, u));
                              }
                            },
                            c = i
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    C.Deferred.exceptionHook &&
                                      C.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= o &&
                                        (n !== I && ((a = void 0), (u = [r])),
                                        t.rejectWith(a, u));
                                  }
                                };
                          e
                            ? c()
                            : (C.Deferred.getStackHook &&
                                (c.stackTrace = C.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return C.Deferred(function (r) {
                        t[0][3].add(s(0, r, v(i) ? i : $, r.notifyWith)),
                          t[1][3].add(s(0, r, v(e) ? e : $)),
                          t[2][3].add(s(0, r, v(n) ? n : I));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? C.extend(e, i) : i;
                    },
                  },
                  o = {};
                return (
                  C.each(t, function (e, r) {
                    var s = r[2],
                      a = r[5];
                    (i[r[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock,
                        ),
                      s.add(r[3].fire),
                      (o[r[0]] = function () {
                        return (
                          o[r[0] + "With"](
                            this === o ? void 0 : this,
                            arguments,
                          ),
                          this
                        );
                      }),
                      (o[r[0] + "With"] = s.fireWith);
                  }),
                  i.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = a.call(arguments),
                  o = C.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (F(e, o.done(s(n)).resolve, o.reject, !t),
                  "pending" === o.state() || v(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) F(i[n], s(n), o.reject);
                return o.promise();
              },
            });
          var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (C.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              W.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t,
              );
          }),
            (C.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var B = C.Deferred();
          function z() {
            b.removeEventListener("DOMContentLoaded", z),
              r.removeEventListener("load", z),
              C.ready();
          }
          (C.fn.ready = function (e) {
            return (
              B.then(e).catch(function (e) {
                C.readyException(e);
              }),
              this
            );
          }),
            C.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) ||
                  ((C.isReady = !0),
                  (!0 !== e && --C.readyWait > 0) || B.resolveWith(b, [C]));
              },
            }),
            (C.ready.then = B.then),
            "complete" === b.readyState ||
            ("loading" !== b.readyState && !b.documentElement.doScroll)
              ? r.setTimeout(C.ready)
              : (b.addEventListener("DOMContentLoaded", z),
                r.addEventListener("load", z));
          var V = function (e, t, n, r, i, o, s) {
              var a = 0,
                u = e.length,
                l = null == n;
              if ("object" === T(n))
                for (a in ((i = !0), n)) V(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== r &&
                ((i = !0),
                v(r) || (s = !0),
                l &&
                  (s
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(C(e), n);
                      }))),
                t)
              )
                for (; a < u; a++)
                  t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            U = /^-ms-/,
            X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function Q(e) {
            return e.replace(U, "ms-").replace(X, Y);
          }
          var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function G() {
            this.expando = C.expando + G.uid++;
          }
          (G.uid = 1),
            (G.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    K(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[Q(t)] = n;
                else for (r in t) i[Q(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Q(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Q)
                      : (t = Q(t)) in r
                      ? [t]
                      : t.match(R) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || C.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
              },
            });
          var J = new G(),
            Z = new G(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          C.extend({
            hasData: function (e) {
              return Z.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            C.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  i,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((i = Z.get(o)),
                    1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (r = s[n].name).indexOf("data-") &&
                        ((r = Q(r.slice(5))), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0);
                  }
                  return i;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : V(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = Z.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0,
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            C.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = J.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = J.access(e, t, C.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = C._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        C.dequeue(e, t);
                      },
                      o,
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: C.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            C.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? C.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = C.queue(this, e, t);
                        C._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            C.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  C.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = C.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = J.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(a));
                return a(), i.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            se = b.documentElement,
            ae = function (e) {
              return C.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          se.getRootNode &&
            (ae = function (e) {
              return (
                C.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var le = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === C.css(e, "display"))
            );
          };
          function ce(e, t, n, r) {
            var i,
              o,
              s = 20,
              a = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return C.css(e, t, "");
                  },
              u = a(),
              l = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (C.cssNumber[t] || ("px" !== l && +u)) &&
                ie.exec(C.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; s--; )
                C.style(e, t, c + l),
                  (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0),
                  (c /= o);
              (c *= 2), C.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          var fe = {};
          function de(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = fe[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = C.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (fe[r] = i),
              i)
            );
          }
          function pe(e, t) {
            for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = J.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && le(r) && (i[o] = de(r)))
                  : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
            for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          C.fn.extend({
            show: function () {
              return pe(this, !0);
            },
            hide: function () {
              return pe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? C(this).show() : C(this).hide();
                  });
            },
          });
          var he,
            ge,
            me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
            (ge = b.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            he.appendChild(ge),
            (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (m.option = !!he.lastChild);
          var be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function xe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && N(e, t)) ? C.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td),
            m.option ||
              (be.optgroup = be.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Ee(e, t, n, r, i) {
            for (
              var o,
                s,
                a,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                d = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === T(o)) C.merge(d, o.nodeType ? [o] : o);
                else if (Te.test(o)) {
                  for (
                    s = s || f.appendChild(t.createElement("div")),
                      a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                      u = be[a] || be._default,
                      s.innerHTML = u[1] + C.htmlPrefilter(o) + u[2],
                      c = u[0];
                    c--;

                  )
                    s = s.lastChild;
                  C.merge(d, s.childNodes),
                    ((s = f.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; (o = d[p++]); )
              if (r && C.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((l = ae(o)),
                (s = xe(f.appendChild(o), "script")),
                l && we(s),
                n)
              )
                for (c = 0; (o = s[c++]); ) ye.test(o.type || "") && n.push(o);
            return f;
          }
          var Ce = /^([^.]*)(?:\.(.+)|)/;
          function Ae() {
            return !0;
          }
          function _e() {
            return !1;
          }
          function Se(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return b.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function ke(e, t, n, r, i, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                ke(e, a, n, r, t[a], o);
              return e;
            }
            if (
              (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                  ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
              !1 === i)
            )
              i = _e;
            else if (!i) return e;
            return (
              1 === o &&
                ((s = i),
                (i = function (e) {
                  return C().off(e), s.apply(this, arguments);
                }),
                (i.guid = s.guid || (s.guid = C.guid++))),
              e.each(function () {
                C.event.add(this, t, i, r, n);
              })
            );
          }
          function De(e, t, n) {
            n
              ? (J.set(e, t, !1),
                C.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (C.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = a.call(arguments)),
                        J.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = J.get(this, t)) || r
                          ? J.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i && i.value
                        );
                    } else
                      o.length &&
                        (J.set(this, t, {
                          value: C.event.trigger(
                            C.extend(o[0], C.Event.prototype),
                            o.slice(1),
                            this,
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && C.event.add(e, t, Ae);
          }
          (C.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                s,
                a,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m = J.get(e);
              if (K(e))
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && C.find.matchesSelector(se, i),
                    n.guid || (n.guid = C.guid++),
                    (u = m.events) || (u = m.events = Object.create(null)),
                    (s = m.handle) ||
                      (s = m.handle =
                        function (t) {
                          return void 0 !== C && C.event.triggered !== t.type
                            ? C.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    l = (t = (t || "").match(R) || [""]).length;
                  l--;

                )
                  (p = g = (a = Ce.exec(t[l]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    p &&
                      ((f = C.event.special[p] || {}),
                      (p = (i ? f.delegateType : f.bindType) || p),
                      (f = C.event.special[p] || {}),
                      (c = C.extend(
                        {
                          type: p,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && C.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o,
                      )),
                      (d = u[p]) ||
                        (((d = u[p] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                          (e.addEventListener && e.addEventListener(p, s))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      (C.event.global[p] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                s,
                a,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m = J.hasData(e) && J.get(e);
              if (m && (u = m.events)) {
                for (l = (t = (t || "").match(R) || [""]).length; l--; )
                  if (
                    ((p = g = (a = Ce.exec(t[l]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      f = C.event.special[p] || {},
                        d =
                          u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)",
                          ),
                        s = o = d.length;
                      o--;

                    )
                      (c = d[o]),
                        (!i && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (a && !a.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (d.splice(o, 1),
                          c.selector && d.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    s &&
                      !d.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                        C.removeEvent(e, p, m.handle),
                      delete u[p]);
                  } else for (p in u) C.event.remove(e, p + t[l], n, r, !0);
                C.isEmptyObject(u) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                s,
                a = new Array(arguments.length),
                u = C.event.fix(e),
                l =
                  (J.get(this, "events") || Object.create(null))[u.type] || [],
                c = C.event.special[u.type] || {};
              for (a[0] = u, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  s = C.event.handlers.call(this, u, l), t = 0;
                  (i = s[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== o.namespace &&
                      !u.rnamespace.test(o.namespace)) ||
                      ((u.handleObj = o),
                      (u.data = o.data),
                      void 0 !==
                        (r = (
                          (C.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(i.elem, a)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                s,
                a = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < u; n++)
                      void 0 === s[(i = (r = t[n]).selector + " ")] &&
                        (s[i] = r.needsContext
                          ? C(i, this).index(l) > -1
                          : C.find(i, this, null, [l]).length),
                        s[i] && o.push(r);
                    o.length && a.push({ elem: l, handlers: o });
                  }
              return (
                (l = this),
                u < t.length && a.push({ elem: l, handlers: t.slice(u) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(C.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[C.expando] ? e : new C.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      De(t, "click", Ae),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      De(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      J.get(t, "click")) ||
                    N(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (C.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (C.Event = function (e, t) {
              if (!(this instanceof C.Event)) return new C.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ae
                      : _e),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
            }),
            (C.Event.prototype = {
              constructor: C.Event,
              isDefaultPrevented: _e,
              isPropagationStopped: _e,
              isImmediatePropagationStopped: _e,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ae),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ae),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ae),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            C.each(
              {
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
                char: !0,
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
                which: !0,
              },
              C.event.addProp,
            ),
            C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              C.event.special[e] = {
                setup: function () {
                  return De(this, e, Se), !1;
                },
                trigger: function () {
                  return De(this, e), !0;
                },
                _default: function (t) {
                  return J.get(t.target, e);
                },
                delegateType: t,
              };
            }),
            C.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                C.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      i = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (i && (i === r || C.contains(r, i))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              },
            ),
            C.fn.extend({
              on: function (e, t, n, r) {
                return ke(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return ke(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    C(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler,
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (i in e) this.off(i, t, e[i]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = _e),
                  this.each(function () {
                    C.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Ne = /<script|<style|<link/i,
            je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function qe(e, t) {
            return (
              (N(e, "table") &&
                N(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                C(e).children("tbody")[0]) ||
              e
            );
          }
          function Oe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Me(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function He(e, t) {
            var n, r, i, o, s, a;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (a = J.get(e).events))
                for (i in (J.remove(t, "handle events"), a))
                  for (n = 0, r = a[i].length; n < r; n++)
                    C.event.add(t, i, a[i][n]);
              Z.hasData(e) &&
                ((o = Z.access(e)), (s = C.extend({}, o)), Z.set(t, s));
            }
          }
          function Pe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Re(e, t, n, r) {
            t = u(t);
            var i,
              o,
              s,
              a,
              l,
              c,
              f = 0,
              d = e.length,
              p = d - 1,
              h = t[0],
              g = v(h);
            if (
              g ||
              (d > 1 && "string" == typeof h && !m.checkClone && je.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())), Re(o, t, n, r);
              });
            if (
              d &&
              ((o = (i = Ee(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (a = (s = C.map(xe(i, "script"), Oe)).length; f < d; f++)
                (l = i),
                  f !== p &&
                    ((l = C.clone(l, !0, !0)),
                    a && C.merge(s, xe(l, "script"))),
                  n.call(e[f], l, f);
              if (a)
                for (
                  c = s[s.length - 1].ownerDocument, C.map(s, Me), f = 0;
                  f < a;
                  f++
                )
                  (l = s[f]),
                    ye.test(l.type || "") &&
                      !J.access(l, "globalEval") &&
                      C.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? C._evalUrl &&
                          !l.noModule &&
                          C._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c,
                          )
                        : w(l.textContent.replace(Le, ""), l, c));
            }
            return e;
          }
          function $e(e, t, n) {
            for (
              var r, i = t ? C.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || C.cleanData(xe(r)),
                r.parentNode &&
                  (n && ae(r) && we(xe(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          C.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                s,
                a = e.cloneNode(!0),
                u = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  C.isXMLDoc(e)
                )
              )
                for (s = xe(a), r = 0, i = (o = xe(e)).length; r < i; r++)
                  Pe(o[r], s[r]);
              if (t)
                if (n)
                  for (
                    o = o || xe(e), s = s || xe(a), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    He(o[r], s[r]);
                else He(e, a);
              return (
                (s = xe(a, "script")).length > 0 &&
                  we(s, !u && xe(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = C.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (K(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? C.event.remove(n, r)
                          : C.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            C.fn.extend({
              detach: function (e) {
                return $e(this, e, !0);
              },
              remove: function (e) {
                return $e(this, e);
              },
              text: function (e) {
                return V(
                  this,
                  function (e) {
                    return void 0 === e
                      ? C.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              append: function () {
                return Re(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    qe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Re(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Re(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Re(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (C.cleanData(xe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return C.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return V(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Ne.test(e) &&
                      !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = C.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (C.cleanData(xe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length,
                );
              },
              replaceWith: function () {
                var e = [];
                return Re(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    C.inArray(this, e) < 0 &&
                      (C.cleanData(xe(this)), n && n.replaceChild(t, this));
                  },
                  e,
                );
              },
            }),
            C.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                C.fn[e] = function (e) {
                  for (
                    var n, r = [], i = C(e), o = i.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      C(i[s])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              },
            );
          var Ie = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Fe = /^--/,
            We = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var r,
                i,
                o = {};
              for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
              return r;
            },
            ze = new RegExp(oe.join("|"), "i"),
            Ve = new RegExp(
              "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
              "g",
            );
          function Ue(e, t, n) {
            var r,
              i,
              o,
              s,
              a = Fe.test(t),
              u = e.style;
            return (
              (n = n || We(e)) &&
                ((s = n.getPropertyValue(t) || n[t]),
                a && s && (s = s.replace(Ve, "$1") || void 0),
                "" !== s || ae(e) || (s = C.style(e, t)),
                !m.pixelBoxStyles() &&
                  Ie.test(s) &&
                  ze.test(t) &&
                  ((r = u.width),
                  (i = u.minWidth),
                  (o = u.maxWidth),
                  (u.minWidth = u.maxWidth = u.width = s),
                  (s = n.width),
                  (u.width = r),
                  (u.minWidth = i),
                  (u.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function Xe(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  se.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (i = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === t(c.offsetWidth / 3)),
                  se.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              i,
              o,
              s,
              a,
              u,
              l = b.createElement("div"),
              c = b.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
              C.extend(m, {
                boxSizingReliable: function () {
                  return e(), i;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, i;
                  return (
                    null == a &&
                      ((e = b.createElement("table")),
                      (t = b.createElement("tr")),
                      (n = b.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      se.appendChild(e).appendChild(t).appendChild(n),
                      (i = r.getComputedStyle(t)),
                      (a =
                        parseInt(i.height, 10) +
                          parseInt(i.borderTopWidth, 10) +
                          parseInt(i.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      se.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ye = ["Webkit", "Moz", "ms"],
            Qe = b.createElement("div").style,
            Ke = {};
          function Ge(e) {
            var t = C.cssProps[e] || Ke[e];
            return (
              t ||
              (e in Qe
                ? e
                : (Ke[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                        n--;

                      )
                        if ((e = Ye[n] + t) in Qe) return e;
                    })(e) || e))
            );
          }
          var Je = /^(none|table(?!-c[ea]).+)/,
            Ze = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            et = { letterSpacing: "0", fontWeight: "400" };
          function tt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function nt(e, t, n, r, i, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (u += C.css(e, n + oe[s], !0, i)),
                r
                  ? ("content" === n &&
                      (u -= C.css(e, "padding" + oe[s], !0, i)),
                    "margin" !== n &&
                      (u -= C.css(e, "border" + oe[s] + "Width", !0, i)))
                  : ((u += C.css(e, "padding" + oe[s], !0, i)),
                    "padding" !== n
                      ? (u += C.css(e, "border" + oe[s] + "Width", !0, i))
                      : (a += C.css(e, "border" + oe[s] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        u -
                        a -
                        0.5,
                    ),
                  ) || 0),
              u
            );
          }
          function rt(e, t, n) {
            var r = We(e),
              i =
                (!m.boxSizingReliable() || n) &&
                "border-box" === C.css(e, "boxSizing", !1, r),
              o = i,
              s = Ue(e, t, r),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ie.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!m.boxSizingReliable() && i) ||
                (!m.reliableTrDimensions() && N(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === C.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === C.css(e, "boxSizing", !1, r)),
                (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                nt(e, t, n || (i ? "border" : "content"), o, r, s) +
                "px"
            );
          }
          function it(e, t, n, r, i) {
            return new it.prototype.init(e, t, n, r, i);
          }
          C.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ue(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
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
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                  o,
                  s,
                  a = Q(t),
                  u = Fe.test(t),
                  l = e.style;
                if (
                  (u || (t = Ge(a)),
                  (s = C.cssHooks[t] || C.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                    ? i
                    : l[t];
                "string" === (o = typeof n) &&
                  (i = ie.exec(n)) &&
                  i[1] &&
                  ((n = ce(e, t, i)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      u ||
                      (n += (i && i[3]) || (C.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                s,
                a = Q(t);
              return (
                Fe.test(t) || (t = Ge(a)),
                (s = C.cssHooks[t] || C.cssHooks[a]) &&
                  "get" in s &&
                  (i = s.get(e, !0, n)),
                void 0 === i && (i = Ue(e, t, r)),
                "normal" === i && t in et && (i = et[t]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            C.each(["height", "width"], function (e, t) {
              C.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Je.test(C.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? rt(e, t, r)
                      : Be(e, Ze, function () {
                          return rt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = We(e),
                    s = !m.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                    u = r ? nt(e, t, r, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          nt(e, t, "border", !1, o) -
                          0.5,
                      )),
                    u &&
                      (i = ie.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = C.css(e, t))),
                    tt(0, n, u)
                  );
                },
              };
            }),
            (C.cssHooks.marginLeft = Xe(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ue(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            C.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (C.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        i = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                  },
                }),
                  "margin" !== e && (C.cssHooks[e + t].set = tt);
              },
            ),
            C.fn.extend({
              css: function (e, t) {
                return V(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (r = We(e), i = t.length; s < i; s++)
                        o[t[s]] = C.css(e, t[s], !1, r);
                      return o;
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1,
                );
              },
            }),
            (C.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || C.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (C.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        C.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration,
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  C.fx.step[e.prop]
                    ? C.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : C.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (C.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (C.fx = it.prototype.init),
            (C.fx.step = {});
          var ot,
            st,
            at = /^(?:toggle|show|hide)$/,
            ut = /queueHooks$/;
          function lt() {
            st &&
              (!1 === b.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(lt)
                : r.setTimeout(lt, C.fx.interval),
              C.fx.tick());
          }
          function ct() {
            return (
              r.setTimeout(function () {
                ot = void 0;
              }),
              (ot = Date.now())
            );
          }
          function ft(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function dt(e, t, n) {
            for (
              var r,
                i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                o = 0,
                s = i.length;
              o < s;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function pt(e, t, n) {
            var r,
              i,
              o = 0,
              s = pt.prefilters.length,
              a = C.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = ot || ct(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    o = 0,
                    s = l.tweens.length;
                  o < s;
                  o++
                )
                  l.tweens[o].run(r);
                return (
                  a.notifyWith(e, [l, r, n]),
                  r < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [l, 1, 0]),
                      a.resolveWith(e, [l]),
                      !1)
                );
              },
              l = a.promise({
                elem: e,
                props: C.extend({}, t),
                opts: C.extend(
                  !0,
                  { specialEasing: {}, easing: C.easing._default },
                  n,
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = C.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing,
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
                      : a.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, i, o, s;
                for (n in e)
                  if (
                    ((i = t[(r = Q(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (s = C.cssHooks[r]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              o < s;
              o++
            )
              if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
                return (
                  v(r.stop) &&
                    (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              C.map(c, dt, l),
              v(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              C.fx.timer(
                C.extend(u, { elem: e, anim: l, queue: l.opts.queue }),
              ),
              l
            );
          }
          (C.Animation = C.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, ie.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  d = this,
                  p = {},
                  h = e.style,
                  g = e.nodeType && le(e),
                  m = J.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (s = C._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  d.always(function () {
                    d.always(function () {
                      s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), at.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !m || void 0 === m[r]) continue;
                      g = !0;
                    }
                    p[r] = (m && m[r]) || C.style(e, r);
                  }
                if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = m && m.display) && (l = J.get(e, "display")),
                    "none" === (c = C.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (pe([e], !0),
                          (l = e.style.display || l),
                          (c = C.css(e, "display")),
                          pe([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === C.css(e, "float") &&
                      (u ||
                        (d.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    d.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                    u ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = J.access(e, "fxshow", { display: l })),
                      o && (m.hidden = !g),
                      g && pe([e], !0),
                      d.done(function () {
                        for (r in (g || pe([e]), J.remove(e, "fxshow"), p))
                          C.style(e, r, p[r]);
                      })),
                      (u = dt(g ? m[r] : 0, r, d)),
                      r in m ||
                        ((m[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (C.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? C.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                C.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in C.fx.speeds
                      ? (r.duration = C.fx.speeds[r.duration])
                      : (r.duration = C.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  v(r.old) && r.old.call(this),
                    r.queue && C.dequeue(this, r.queue);
                }),
                r
              );
            }),
            C.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(le)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = C.isEmptyObject(e),
                  o = C.speed(t, n, r),
                  s = function () {
                    var t = pt(this, C.extend({}, e), o);
                    (i || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = C.timers,
                      s = J.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                      for (i in s) s[i] && s[i].stop && ut.test(i) && r(s[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || C.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = C.timers,
                      s = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        C.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            C.each(["toggle", "show", "hide"], function (e, t) {
              var n = C.fn[t];
              C.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ft(t, !0), e, r, i);
              };
            }),
            C.each(
              {
                slideDown: ft("show"),
                slideUp: ft("hide"),
                slideToggle: ft("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                C.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              },
            ),
            (C.timers = []),
            (C.fx.tick = function () {
              var e,
                t = 0,
                n = C.timers;
              for (ot = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || C.fx.stop(), (ot = void 0);
            }),
            (C.fx.timer = function (e) {
              C.timers.push(e), C.fx.start();
            }),
            (C.fx.interval = 13),
            (C.fx.start = function () {
              st || ((st = !0), lt());
            }),
            (C.fx.stop = function () {
              st = null;
            }),
            (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (C.fn.delay = function (e, t) {
              return (
                (e = (C.fx && C.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var i = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(i);
                  };
                })
              );
            }),
            (function () {
              var e = b.createElement("input"),
                t = b
                  .createElement("select")
                  .appendChild(b.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = b.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var ht,
            gt = C.expr.attrHandle;
          C.fn.extend({
            attr: function (e, t) {
              return V(this, C.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                C.removeAttr(this, e);
              });
            },
          }),
            C.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? C.prop(e, t, n)
                    : ((1 === o && C.isXMLDoc(e)) ||
                        (i =
                          C.attrHooks[t.toLowerCase()] ||
                          (C.expr.match.bool.test(t) ? ht : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void C.removeAttr(e, t)
                          : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = C.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && N(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(R);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (ht = {
              set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = gt[t] || C.find.attr;
              gt[t] = function (e, t, r) {
                var i,
                  o,
                  s = t.toLowerCase();
                return (
                  r ||
                    ((o = gt[s]),
                    (gt[s] = i),
                    (i = null != n(e, t, r) ? s : null),
                    (gt[s] = o)),
                  i
                );
              };
            });
          var mt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
          function yt(e) {
            return (e.match(R) || []).join(" ");
          }
          function bt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(R)) || [];
          }
          C.fn.extend({
            prop: function (e, t) {
              return V(this, C.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[C.propFix[e] || e];
              });
            },
          }),
            C.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && C.isXMLDoc(e)) ||
                      ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                    void 0 !== n
                      ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (C.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            C.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                C.propFix[this.toLowerCase()] = this;
              },
            ),
            C.fn.extend({
              addClass: function (e) {
                var t, n, r, i, o, s;
                return v(e)
                  ? this.each(function (t) {
                      C(this).addClass(e.call(this, t, bt(this)));
                    })
                  : (t = xt(e)).length
                  ? this.each(function () {
                      if (
                        ((r = bt(this)),
                        (n = 1 === this.nodeType && " " + yt(r) + " "))
                      ) {
                        for (o = 0; o < t.length; o++)
                          (i = t[o]),
                            n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        (s = yt(n)), r !== s && this.setAttribute("class", s);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, r, i, o, s;
                return v(e)
                  ? this.each(function (t) {
                      C(this).removeClass(e.call(this, t, bt(this)));
                    })
                  : arguments.length
                  ? (t = xt(e)).length
                    ? this.each(function () {
                        if (
                          ((r = bt(this)),
                          (n = 1 === this.nodeType && " " + yt(r) + " "))
                        ) {
                          for (o = 0; o < t.length; o++)
                            for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                              n = n.replace(" " + i + " ", " ");
                          (s = yt(n)), r !== s && this.setAttribute("class", s);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  s = typeof e,
                  a = "string" === s || Array.isArray(e);
                return v(e)
                  ? this.each(function (n) {
                      C(this).toggleClass(e.call(this, n, bt(this), t), t);
                    })
                  : "boolean" == typeof t && a
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = xt(e)),
                    this.each(function () {
                      if (a)
                        for (o = C(this), i = 0; i < n.length; i++)
                          (r = n[i]),
                            o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                      else
                        (void 0 !== e && "boolean" !== s) ||
                          ((r = bt(this)) && J.set(this, "__className__", r),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              r || !1 === e
                                ? ""
                                : J.get(this, "__className__") || "",
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + yt(bt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          C.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = v(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, C(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = C.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        C.valHooks[this.type] ||
                        C.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, i, "value")) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    C.valHooks[i.type] ||
                    C.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            C.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : yt(C.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                      ) {
                        if (((t = C(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = C.makeArray(t), s = i.length;
                      s--;

                    )
                      ((r = i[s]).selected =
                        C.inArray(C.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            C.each(["radio", "checkbox"], function () {
              (C.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = C.inArray(C(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (C.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in r);
          var Tt = /^(?:focusinfocus|focusoutblur)$/,
            Et = function (e) {
              e.stopPropagation();
            };
          C.extend(C.event, {
            trigger: function (e, t, n, i) {
              var o,
                s,
                a,
                u,
                l,
                c,
                f,
                d,
                h = [n || b],
                g = p.call(e, "type") ? e.type : e,
                m = p.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((s = d = a = n = n || b),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Tt.test(g + C.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (l = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[C.expando]
                    ? e
                    : new C.Event(g, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)",
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : C.makeArray(t, [e])),
                  (f = C.event.special[g] || {}),
                  i || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!i && !f.noBubble && !y(n)) {
                  for (
                    u = f.delegateType || g,
                      Tt.test(u + g) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    h.push(s), (a = s);
                  a === (n.ownerDocument || b) &&
                    h.push(a.defaultView || a.parentWindow || r);
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                  (d = s),
                    (e.type = o > 1 ? u : f.bindType || g),
                    (c =
                      (J.get(s, "events") || Object.create(null))[e.type] &&
                      J.get(s, "handle")) && c.apply(s, t),
                    (c = l && s[l]) &&
                      c.apply &&
                      K(s) &&
                      ((e.result = c.apply(s, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  i ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !K(n) ||
                    (l &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[l]) && (n[l] = null),
                      (C.event.triggered = g),
                      e.isPropagationStopped() && d.addEventListener(g, Et),
                      n[g](),
                      e.isPropagationStopped() && d.removeEventListener(g, Et),
                      (C.event.triggered = void 0),
                      a && (n[l] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
              C.event.trigger(r, null, t);
            },
          }),
            C.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  C.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  C.event.simulate(t, e.target, C.event.fix(e));
                };
                C.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = J.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      J.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      i = J.access(r, t) - 1;
                    i
                      ? J.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), J.remove(r, t));
                  },
                };
              });
          var Ct = r.location,
            At = { guid: Date.now() },
            _t = /\?/;
          C.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                C.error(
                  "Invalid XML: " +
                    (n
                      ? C.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e),
                ),
              t
            );
          };
          var St = /\[\]$/,
            kt = /\r?\n/g,
            Dt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
          function jt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              C.each(t, function (t, i) {
                n || St.test(e)
                  ? r(e, i)
                  : jt(
                      e +
                        "[" +
                        ("object" == typeof i && null != i ? t : "") +
                        "]",
                      i,
                      n,
                      r,
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
          }
          (C.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = v(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
              C.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) jt(n, e[n], t, i);
            return r.join("&");
          }),
            C.fn.extend({
              serialize: function () {
                return C.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = C.prop(this, "elements");
                  return e ? C.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !C(this).is(":disabled") &&
                      Nt.test(this.nodeName) &&
                      !Dt.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = C(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? C.map(n, function (e) {
                          return { name: t.name, value: e.replace(kt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(kt, "\r\n") };
                  })
                  .get();
              },
            });
          var Lt = /%20/g,
            qt = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ht = /^(?:GET|HEAD)$/,
            Pt = /^\/\//,
            Rt = {},
            $t = {},
            It = "*/".concat("*"),
            Ft = b.createElement("a");
          function Wt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(R) || [];
              if (v(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Bt(e, t, n, r) {
            var i = {},
              o = e === $t;
            function s(a) {
              var u;
              return (
                (i[a] = !0),
                C.each(e[a] || [], function (e, a) {
                  var l = a(t, n, r);
                  return "string" != typeof l || o || i[l]
                    ? o
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), s(l), !1);
                }),
                u
              );
            }
            return s(t.dataTypes[0]) || (!i["*"] && s("*"));
          }
          function zt(e, t) {
            var n,
              r,
              i = C.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && C.extend(!0, e, r), e;
          }
          (Ft.href = Ct.href),
            C.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol,
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": It,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": C.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? zt(zt(e, C.ajaxSettings), t) : zt(C.ajaxSettings, e);
              },
              ajaxPrefilter: Wt(Rt),
              ajaxTransport: Wt($t),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  c,
                  f,
                  d,
                  p = C.ajaxSetup({}, t),
                  h = p.context || p,
                  g = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                  m = C.Deferred(),
                  v = C.Callbacks("once memory"),
                  y = p.statusCode || {},
                  x = {},
                  w = {},
                  T = "canceled",
                  E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!s)
                          for (s = {}; (t = Mt.exec(o)); )
                            s[t[1].toLowerCase() + " "] = (
                              s[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (p.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) E.always(e[E.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), A(0, t), this;
                    },
                  };
                if (
                  (m.promise(E),
                  (p.url = ((e || p.url || Ct.href) + "").replace(
                    Pt,
                    Ct.protocol + "//",
                  )),
                  (p.type = t.method || t.type || p.method || p.type),
                  (p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [
                    "",
                  ]),
                  null == p.crossDomain)
                ) {
                  u = b.createElement("a");
                  try {
                    (u.href = p.url),
                      (u.href = u.href),
                      (p.crossDomain =
                        Ft.protocol + "//" + Ft.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    p.crossDomain = !0;
                  }
                }
                if (
                  (p.data &&
                    p.processData &&
                    "string" != typeof p.data &&
                    (p.data = C.param(p.data, p.traditional)),
                  Bt(Rt, p, t, E),
                  l)
                )
                  return E;
                for (f in ((c = C.event && p.global) &&
                  0 == C.active++ &&
                  C.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Ht.test(p.type)),
                (i = p.url.replace(qt, "")),
                p.hasContent
                  ? p.data &&
                    p.processData &&
                    0 ===
                      (p.contentType || "").indexOf(
                        "application/x-www-form-urlencoded",
                      ) &&
                    (p.data = p.data.replace(Lt, "+"))
                  : ((d = p.url.slice(i.length)),
                    p.data &&
                      (p.processData || "string" == typeof p.data) &&
                      ((i += (_t.test(i) ? "&" : "?") + p.data), delete p.data),
                    !1 === p.cache &&
                      ((i = i.replace(Ot, "$1")),
                      (d = (_t.test(i) ? "&" : "?") + "_=" + At.guid++ + d)),
                    (p.url = i + d)),
                p.ifModified &&
                  (C.lastModified[i] &&
                    E.setRequestHeader("If-Modified-Since", C.lastModified[i]),
                  C.etag[i] && E.setRequestHeader("If-None-Match", C.etag[i])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                  t.contentType) &&
                  E.setRequestHeader("Content-Type", p.contentType),
                E.setRequestHeader(
                  "Accept",
                  p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                    ? p.accepts[p.dataTypes[0]] +
                        ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "")
                    : p.accepts["*"],
                ),
                p.headers))
                  E.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, E, p) || l))
                  return E.abort();
                if (
                  ((T = "abort"),
                  v.add(p.complete),
                  E.done(p.success),
                  E.fail(p.error),
                  (n = Bt($t, p, t, E)))
                ) {
                  if (
                    ((E.readyState = 1), c && g.trigger("ajaxSend", [E, p]), l)
                  )
                    return E;
                  p.async &&
                    p.timeout > 0 &&
                    (a = r.setTimeout(function () {
                      E.abort("timeout");
                    }, p.timeout));
                  try {
                    (l = !1), n.send(x, A);
                  } catch (e) {
                    if (l) throw e;
                    A(-1, e);
                  }
                } else A(-1, "No Transport");
                function A(e, t, s, u) {
                  var f,
                    d,
                    b,
                    x,
                    w,
                    T = t;
                  l ||
                    ((l = !0),
                    a && r.clearTimeout(a),
                    (n = void 0),
                    (o = u || ""),
                    (E.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    s &&
                      (x = (function (e, t, n) {
                        for (
                          var r, i, o, s, a = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in a)
                            if (a[i] && a[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                              o = i;
                              break;
                            }
                            s || (s = i);
                          }
                          o = o || s;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(p, E, s)),
                    !f &&
                      C.inArray("script", p.dataTypes) > -1 &&
                      C.inArray("json", p.dataTypes) < 0 &&
                      (p.converters["text script"] = function () {}),
                    (x = (function (e, t, n, r) {
                      var i,
                        o,
                        s,
                        a,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (s in e.converters)
                          l[s.toLowerCase()] = e.converters[s];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(s = l[u + " " + o] || l["* " + o]))
                              for (i in l)
                                if (
                                  (a = i.split(" "))[1] === o &&
                                  (s = l[u + " " + a[0]] || l["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = l[i])
                                    : !0 !== l[i] &&
                                      ((o = a[0]), c.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(p, x, E, f)),
                    f
                      ? (p.ifModified &&
                          ((w = E.getResponseHeader("Last-Modified")) &&
                            (C.lastModified[i] = w),
                          (w = E.getResponseHeader("etag")) && (C.etag[i] = w)),
                        204 === e || "HEAD" === p.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = x.state), (d = x.data), (f = !(b = x.error))))
                      : ((b = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (E.status = e),
                    (E.statusText = (t || T) + ""),
                    f
                      ? m.resolveWith(h, [d, T, E])
                      : m.rejectWith(h, [E, T, b]),
                    E.statusCode(y),
                    (y = void 0),
                    c &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        E,
                        p,
                        f ? d : b,
                      ]),
                    v.fireWith(h, [E, T]),
                    c &&
                      (g.trigger("ajaxComplete", [E, p]),
                      --C.active || C.event.trigger("ajaxStop")));
                }
                return E;
              },
              getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
              },
            }),
            C.each(["get", "post"], function (e, t) {
              C[t] = function (e, n, r, i) {
                return (
                  v(n) && ((i = i || r), (r = n), (n = void 0)),
                  C.ajax(
                    C.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      C.isPlainObject(e) && e,
                    ),
                  )
                );
              };
            }),
            C.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (C._evalUrl = function (e, t, n) {
              return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  C.globalEval(e, t, n);
                },
              });
            }),
            C.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      C(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = C(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  C(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      C(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (C.expr.pseudos.hidden = function (e) {
              return !C.expr.pseudos.visible(e);
            }),
            (C.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (C.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            Ut = C.ajaxSettings.xhr();
          (m.cors = !!Ut && "withCredentials" in Ut),
            (m.ajax = Ut = !!Ut),
            C.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Ut && !e.crossDomain))
                return {
                  send: function (i, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      i["X-Requested-With"] ||
                      (i["X-Requested-With"] = "XMLHttpRequest"),
                    i))
                      a.setRequestHeader(s, i[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Vt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders(),
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            C.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            C.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return C.globalEval(e), e;
                },
              },
            }),
            C.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            C.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = C("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        }),
                      )),
                      b.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Xt,
            Yt = [],
            Qt = /(=)\?(?=&|$)|\?\?/;
          C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || C.expando + "_" + At.guid++;
              return (this[e] = !0), e;
            },
          }),
            C.ajaxPrefilter("json jsonp", function (e, t, n) {
              var i,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Qt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded",
                        ) &&
                      Qt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (i = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Qt, "$1" + i))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                  (e.converters["script json"] = function () {
                    return s || C.error(i + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = r[i]),
                  (r[i] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? C(r).removeProp(i) : (r[i] = o),
                      e[i] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(i)),
                      s && v(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Xt = b.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Xt.childNodes.length)),
            (C.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((r = (t =
                          b.implementation.createHTMLDocument(
                            "",
                          )).createElement("base")).href = b.location.href),
                        t.head.appendChild(r))
                      : (t = b)),
                  (o = !n && []),
                  (i = j.exec(e))
                    ? [t.createElement(i[1])]
                    : ((i = Ee([e], t, o)),
                      o && o.length && C(o).remove(),
                      C.merge([], i.childNodes)));
              var r, i, o;
            }),
            (C.fn.load = function (e, t, n) {
              var r,
                i,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((r = yt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (i = "POST"),
                s.length > 0 &&
                  C.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          r ? C("<div>").append(C.parseHTML(e)).find(r) : e,
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        },
                    ),
                this
              );
            }),
            (C.expr.pseudos.animated = function (e) {
              return C.grep(C.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (C.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l = C.css(e, "position"),
                  c = C(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (a = c.offset()),
                  (o = C.css(e, "top")),
                  (u = C.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (o + u).indexOf("auto") > -1
                    ? ((s = (r = c.position()).top), (i = r.left))
                    : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  v(t) && (t = t.call(e, n, C.extend({}, a))),
                  null != t.top && (f.top = t.top - a.top + s),
                  null != t.left && (f.left = t.left - a.left + i),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            C.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        C.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === C.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === C.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = C(e).offset()).top += C.css(
                        e,
                        "borderTopWidth",
                        !0,
                      )),
                      (i.left += C.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - C.css(r, "marginTop", !0),
                    left: t.left - i.left - C.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === C.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            C.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                C.fn[e] = function (r) {
                  return V(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === i)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset,
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length,
                  );
                };
              },
            ),
            C.each(["top", "left"], function (e, t) {
              C.cssHooks[t] = Xe(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ue(e, t)), Ie.test(n) ? C(e).position()[t] + "px" : n
                  );
              });
            }),
            C.each({ Height: "height", Width: "width" }, function (e, t) {
              C.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  C.fn[r] = function (i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i),
                      a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return V(
                      this,
                      function (t, n, i) {
                        var o;
                        return y(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e],
                            ))
                          : void 0 === i
                          ? C.css(t, n, a)
                          : C.style(t, n, i, a);
                      },
                      t,
                      s ? i : void 0,
                      s,
                    );
                  };
                },
              );
            }),
            C.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                C.fn[t] = function (e) {
                  return this.on(t, e);
                };
              },
            ),
            C.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            C.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " ",
              ),
              function (e, t) {
                C.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              },
            );
          var Kt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (C.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (r = a.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, r.concat(a.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || C.guid++),
                i
              );
          }),
            (C.holdReady = function (e) {
              e ? C.readyWait++ : C.ready(!0);
            }),
            (C.isArray = Array.isArray),
            (C.parseJSON = JSON.parse),
            (C.nodeName = N),
            (C.isFunction = v),
            (C.isWindow = y),
            (C.camelCase = Q),
            (C.type = T),
            (C.now = Date.now),
            (C.isNumeric = function (e) {
              var t = C.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (C.trim = function (e) {
              return null == e ? "" : (e + "").replace(Kt, "$1");
            }),
            void 0 ===
              (n = function () {
                return C;
              }.apply(t, [])) || (e.exports = n);
          var Gt = r.jQuery,
            Jt = r.$;
          return (
            (C.noConflict = function (e) {
              return (
                r.$ === C && (r.$ = Jt),
                e && r.jQuery === C && (r.jQuery = Gt),
                C
              );
            }),
            void 0 === i && (r.jQuery = r.$ = C),
            C
          );
        });
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (window.jQuery = window.$ = n(755)), n(424);
})();
