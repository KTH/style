!(function () {
  var e,
    t,
    n = {
      94: function (e) {
        e.exports = {
          shortNames: ["en"],
          longNameSe: "Engelska",
          longNameEn: "English",
          messages: {
            error_not_found: "Sorry, we can't find your requested page",
            error_generic:
              "Something went wrong on the server, please try again later.",
            error_status_code: "Status code:",
            error_400_head_title: "400 Bad request",
            error_400_description: "The request was not on the correct format.",
            error_400_title: "Bad request",
            error_400_text:
              "The request was not on the correct format. Make sure the request is on the correct format and try again.",
            error_401_head_title: "401 Unauthorized",
            error_401_description:
              "The request has not been applied because it lacks valid authentication credentials for the target resource.",
            error_401_title: "Unauthorized",
            error_401_text:
              "The request has not been applied because it lacks valid authentication credentials for the target resource.",
            error_403_head_title: "403 Forbidden",
            error_403_description: "You are not allowed to see this page.",
            error_403_title: "Forbidden",
            error_403_text: "You are not allowed to see this page.",
            error_404_head_title: "404 Not found",
            error_404_description: "The page could not be found",
            error_404_title: "The page could not be found",
            error_404_text_1:
              "Unfortunately, this web address does not lead to a page on KTH's website. The page has probably been deleted or moved.",
            error_404_text_2:
              "If you have entered the address by hand, please check that it is entered correctly.",
            error_404_link_text_1: "KTH's start page",
            error_404_link_1: "https://www.kth.se/en",
            error_404_link_text_2: "Contact KTH",
            error_404_link_2: "https://www.kth.se/en/om/kontakt",
            error_404_link_text_3: "Search KTH's website",
            error_404_link_3: "https://www.kth.se/search",
            error_500_head_title: "500 Internal server error",
            error_500_description:
              "The server encountered an unexpected error. Please try again later.",
            error_500_title: "Internal server error",
            error_500_text:
              "The server encountered an unexpected. Please try again later.",
          },
        };
      },
      477: function (e) {
        e.exports = {
          shortNames: ["sv", "se"],
          longNameSe: "Svenska",
          longNameEn: "Swedish",
          messages: {
            error_not_found: "Tyvärr kunde vi inte hitta sidan du söker",
            error_generic:
              "Något gick fel på servern, var god försök igen senare",
            error_status_code: "Statuskod:",
            error_400_head_title: "400 Felaktig förfrågan",
            error_400_description: "Förfrågan var inte på rätt format.",
            error_400_title: "Felaktig förfrågan",
            error_400_text:
              "Förfrågan var inte på rätt format. Vänligen kontrollera att förfrågan är på rätt format och försök igen.",
            error_401_head_title: "401 Ej auktoriserad",
            error_401_description:
              "Giltiga autentiseringsuppgifter saknas för denna sida.",
            error_401_title: "Ej auktoriserad",
            error_401_text:
              "Giltiga autentiseringsuppgifter saknas för denna sida.",
            error_403_head_title: "403 Nekad åtkomst",
            error_403_description:
              "Du har inte tillräckliga rättigheter för att komma åt denna sida.",
            error_403_title: "Nekad åtkomst",
            error_403_text:
              "Du har inte tillräckliga rättigheter för att komma åt denna sida.",
            error_404_head_title: "404 Tyvärr hittade vi inte sidan du söker",
            error_404_description: "Tyvärr hittade vi inte sidan du söker",
            error_404_title: "Tyvärr hittade vi inte sidan du söker",
            error_404_text_1:
              "Den angivna webbadressen leder tyvärr inte till en sida på KTH:s webbplats. Troligtvis har sidan tagits bort eller flyttats.",
            error_404_text_2:
              "Om du har skrivit in adressen för hand ber vi dig att kontrollera att den är korrekt inmatad.",
            error_404_link_text_1: "KTH:s startsida",
            error_404_link_1: "https://www.kth.se",
            error_404_link_text_2: "Kontakta KTH",
            error_404_link_2: "https://www.kth.se/om/kontakt",
            error_404_link_text_3: "Sök på KTH:s webbplats",
            error_404_link_3: "https://www.kth.se/search",
            error_500_head_title: "Internt serverfel",
            error_500_description:
              "Något gick fel på servern, var god försök igen senare.",
            error_500_title: "Internt serverfel",
            error_500_text:
              "Något gick fel på servern, var god försök igen senare.",
          },
        };
      },
      750: function (e, t, n) {
        "use strict";
        var r = n(416);
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  r(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }
        var i = n(668),
          o = n(94),
          s = n(477),
          u = n(533),
          c = n(767);
        (c.messages = l(l({}, c.messages), s.messages)),
          (u.messages = l(l({}, u.messages), o.messages)),
          i.messages.push(u, c),
          (e.exports = i);
      },
      533: function (e) {
        e.exports = {
          shortNames: ["en"],
          longNameSe: "Engelska",
          longNameEn: "English",
          messages: {
            date_format_short: "%d-%b-%Y",
            service_name: "Node application name",
            example_message_key: "This is an english translation of a label",
            button_label_example: "Click me to send data to server!",
            field_text_example: "Data to be sent to API",
            field_label_get_example:
              "My modelData(Response from api call GET): ",
            field_label_post_example:
              "My modelData(Response from api call POST): ",
            lang_block_id: "1.77273",
            locale_text: "KTH in English",
            site_name: "KTH style",
            host_name: "KTH",
            page_kth_style_index: "Start",
            page_kth_style_colors: "Colors",
            page_kth_style_icons: "Icons",
            page_kth_style_buttons: "Buttons",
            section_basics: "Basic style",
            section_components: "Components",
            "section_setup-guide": "Setup guide for developers",
            button_mobile_menu_label: "Open/close the mobile menu",
            mobile_menu_aria_label: "Mobile menu",
            modal_close_button_label: "Close",
            skip_to_main_content: "Skip to main content",
            back_to_top_label: "To page top",
          },
        };
      },
      767: function (e) {
        e.exports = {
          shortNames: ["sv", "se"],
          longNameSe: "Svenska",
          longNameEn: "Swedish",
          messages: {
            date_format_short: "%Y-%m-%d",
            service_name: "Node-applikationsnamn",
            example_message_key: "Här är en svensk översättning på en label",
            button_label_example:
              "Klicka här för att skicka data till servern!",
            field_text_example: "Data att skicka till API",
            field_label_get_example:
              "Min datamodell(Svar från api anrop GET): ",
            field_label_post_example:
              "Min datamodell(Svar från api anrop POST): ",
            lang_block_id: "1.272446",
            locale_text: "KTH på svenska",
            site_name: "KTH style",
            host_name: "KTH",
            page_kth_style_index: "Start",
            page_kth_style_colors: "Colors",
            page_kth_style_icons: "Icons",
            page_kth_style_buttons: "Buttons",
            section_basics: "Basics",
            section_components: "Components",
            "section_setup-guide": "Setup guide",
            button_mobile_menu_label: "Open/close mobile menu",
            mobile_menu_aria_label: "Mobile menu",
            modal_close_button_label: "Close",
            skip_to_main_content: "Skip to main content",
            back_to_top_label: "To page top",
          },
        };
      },
      544: function (e, t, n) {
        var r = n(416),
          a = n(861),
          l = n(698);
        function i(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          return null != e && "object" === l(e);
        }
        function s(e) {
          return null == e || "object" !== l(e);
        }
        e.exports = {
          isObject: o,
          isNoObject: s,
          ensureObject: function (e, t) {
            if (s(e)) return {};
            if (s(t) || "string" != typeof t.path || "" === t.path) return e;
            for (
              var n = t.path, r = e, a = n.split("."), l = 0;
              l < a.length;
              l++
            ) {
              var i = a[l];
              if (s(r) || "" === i) return {};
              r = r[i];
            }
            return o(r) ? r : {};
          },
          expectObject: function (e, t) {
            if (o(e)) return e;
            if (!o(t)) return null;
            var n = t.failResult;
            if (n instanceof Error) throw n;
            return void 0 === n ? null : n;
          },
          findInObject: function (e) {
            var t = e.object,
              n = e.path,
              r = e.failResult,
              a = void 0 === r ? null : r,
              l = e.expectObject,
              i = void 0 !== l && l,
              o = function () {
                if (a instanceof Error) throw a;
                return a;
              };
            if (void 0 === t || "string" != typeof n) return o();
            if ("" === n) return i && s(t) ? o() : t;
            for (var u = t, c = n.split("."), d = 0; d < c.length; d++) {
              var f = c[d];
              if ("" === f) return o();
              if (s(u)) return i ? o() : void 0;
              u = u[f];
            }
            return i && s(u) ? o() : u;
          },
          setInObject: function (e) {
            var t = e.object,
              n = e.path,
              l = e.newValue,
              u = e.copySubObjectsOnPath,
              c = void 0 !== u && u,
              d = function (e) {
                return /^\d+$/.test(e) && parseInt(e, 10) <= 1e3;
              },
              f = function (e) {
                var t = e.currSubObject,
                  n = e.propertyPath,
                  s = e.currPathIndex,
                  u = n[s];
                if (d(u) && !1 === Array.isArray(t))
                  throw new Error(
                    "invalid path given (can't use numeric property name with a non-array)",
                  );
                if (Array.isArray(t) && !1 === d(u))
                  throw new Error(
                    "invalid path given (can't use non-numeric property name with an array)",
                  );
                var f = n[s + 1];
                if (null == f)
                  return void 0 === l ? delete t[u] : (t[u] = l), null;
                var m = t[u];
                if (null == m) return (t[u] = d(f) ? [] : {}), t[u];
                if (o(m))
                  return (
                    c &&
                      (t[u] = Array.isArray(m)
                        ? a(m)
                        : (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? i(Object(n), !0).forEach(function (t) {
                                    r(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n),
                                  )
                                : i(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t),
                                    );
                                  });
                            }
                            return e;
                          })({}, m)),
                    t[u]
                  );
                throw new Error(
                  "invalid path given (can't step into non-object)",
                );
              };
            try {
              if (s(t)) throw new Error('missing or invalid argument "object"');
              if ("string" != typeof n || "" === n)
                throw new Error('missing or invalid argument "path"');
              var m = n.split(".");
              if (
                0 === m.length ||
                m.some(function (e) {
                  return "" === e;
                })
              )
                throw new Error('invalid argument "path"');
              for (var p = t, h = 0; h < m.length; h++)
                p = f({ currSubObject: p, propertyPath: m, currPathIndex: h });
            } catch (e) {
              throw (
                ((e.message = "setInObject() failed - ".concat(e.message)), e)
              );
            }
          },
        };
      },
      668: function (e) {
        const t = [],
          n = "sv";
        function r(e = "sv") {
          if (e)
            for (const n in t)
              for (const r in t[n].shortNames)
                if (
                  "string" == typeof t[n].shortNames[r] &&
                  t[n].shortNames[r].toLowerCase() === e.toLowerCase()
                )
                  return t[n];
        }
        function a(e) {
          if ("undefined" == typeof document) return "";
          const t = e + "=",
            n = document.cookie.split(";");
          for (let e = 0; e < n.length; e++) {
            let r = n[e];
            for (; " " === r.charAt(0); ) r = r.substring(1);
            if (0 === r.indexOf(t)) return r.substring(t.length, r.length);
          }
          return "";
        }
        e.exports = {
          getLanguageByShortname: r,
          DEFAULT_LANG: n,
          messages: t,
          message: function (e, t) {
            const l = t || a("language") || n;
            if (!e) return "";
            const i = r(l) || r(n);
            return void 0 === i.messages[e]
              ? "KEY " + e + " FOR LANGUAGE " + i.longNameEn + " DOES NOT EXIST"
              : i.messages[e];
          },
          isSwedish: function () {
            const e = a("language");
            return "sv" === e || "" === e;
          },
          isEnglish: function () {
            return "en" === a("language");
          },
        };
      },
      448: function (e, t, n) {
        "use strict";
        /**
         * @license React
         * react-dom.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = n(294),
          a = n(840);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          m = {},
          p = {};
        function h(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(m, e) &&
                      (f.test(e) ? (p[e] = !0) : ((m[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          w = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          O = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          j = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function A(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          D = Object.assign;
        function z(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var F = !1;
        function B(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var a = t.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case w:
              return "Fragment";
            case _:
              return "Portal";
            case S:
              return "Profiler";
            case x:
              return "StrictMode";
            case T:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case j:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (e) {}
            }
          return null;
        }
        function V(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return U(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
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
              if ("function" == typeof t)
                return t.displayName || t.name || null;
              if ("string" == typeof t) return t;
          }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function W(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function le(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var me = {
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
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (me.hasOwnProperty(e) && me[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(me).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (me[t] = me[e]);
          });
        });
        var ge = D(
          { menuitem: !0 },
          {
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
            wbr: !0,
          },
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
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
              return !0;
          }
        }
        var Ee = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          we = null,
          xe = null;
        function Se(e) {
          if ((e = ba(e))) {
            if ("function" != typeof _e) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = ka(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          we ? (xe ? xe.push(e) : (xe = [e])) : (we = e);
        }
        function Ce() {
          if (we) {
            var e = we,
              t = xe;
            if (((xe = we = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Te() {}
        var Pe = !1;
        function je(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (Pe = !1), (null !== we || null !== xe) && (Te(), Ce());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (ce) {
            Le = !1;
          }
        function Ae(e, t, n, r, a, l, i, o, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var Me = !1,
          De = null,
          ze = !1,
          Fe = null,
          Be = {
            onError: function (e) {
              (Me = !0), (De = e);
            },
          };
        function He(e, t, n, r, a, l, i, o, s) {
          (Me = !1), (De = null), Ae.apply(Be, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ke(e) {
          if (Ue(e) !== e) throw Error(l(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ke(a), e;
                    if (i === r) return Ke(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? We(e)
            : null;
        }
        function We(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = We(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function mt(e, t) {
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
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ut;
          return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function Et(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          _t,
          wt,
          xt,
          St,
          Nt = !1,
          Ct = [],
          Ot = null,
          Tt = null,
          Pt = null,
          jt = new Map(),
          Rt = new Map(),
          Lt = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ot = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      wt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && _t(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Ee = r), n.target.dispatchEvent(r), (Ee = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Bt() {
          (Nt = !1),
            null !== Ot && zt(Ot) && (Ot = null),
            null !== Tt && zt(Tt) && (Tt = null),
            null !== Pt && zt(Pt) && (Pt = null),
            jt.forEach(Ft),
            Rt.forEach(Ft);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ut(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Ct.length) {
            Ht(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && Ht(Ot, e),
              null !== Tt && Ht(Tt, e),
              null !== Pt && Ht(Pt, e),
              jt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Lt.shift();
        }
        var Vt = E.ReactCurrentBatchConfig,
          Kt = !0;
        function $t(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function Wt(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          if (Kt) {
            var a = Gt(e, t, n, r);
            if (null === a) Kr(e, t, r, Qt, n), At(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ot = Mt(Ot, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Tt = Mt(Tt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return jt.set(l, Mt(jt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Rt.set(l, Mt(Rt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && kt(l),
                  null === (l = Gt(e, t, n, r)) && Kr(e, t, r, Qt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Kr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Gt(e, t, n, r) {
          if (((Qt = null), null !== (e = ya((e = ke(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Yt(e) {
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
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = D({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          mn = D({}, dn, {
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
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          pn = an(mn),
          hn = an(D({}, mn, { dataTransfer: 0 })),
          vn = an(D({}, dn, { relatedTarget: 0 })),
          gn = an(
            D({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = D({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          En = an(D({}, un, { data: 0 })),
          kn = {
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
            MozPrintableKey: "Unidentified",
          },
          _n = {
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
            224: "Meta",
          },
          wn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = wn[e]) && !!t[e];
        }
        function Sn() {
          return xn;
        }
        var Nn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _n[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(Nn),
          On = an(
            D({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Tn = an(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            }),
          ),
          Pn = an(
            D({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          jn = D({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(jn),
          Ln = [9, 13, 27, 32],
          In = c && "CompositionEvent" in window,
          An = null;
        c && "documentMode" in document && (An = document.documentMode);
        var Mn = c && "TextEvent" in window && !An,
          Dn = c && (!In || (An && 8 < An && 11 >= An)),
          zn = String.fromCharCode(32),
          Fn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Vn = {
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
          week: !0,
        };
        function Kn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ne(r),
            0 < (t = Wr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          qn = null;
        function Qn(e) {
          zr(e, 0);
        }
        function Gn(e) {
          if (q(Ea(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var Jn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" == typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Xn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Wn && (Wn.detachEvent("onpropertychange", nr), (qn = Wn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            $n(t, qn, e, ke(e)), je(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Wn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(qn);
        }
        function lr(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var or =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function mr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && mr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" == typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function Er(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== Q(r) ||
            ("selectionStart" in (r = vr) && mr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Wr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var _r = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          wr = {},
          xr = {};
        function Sr(e) {
          if (wr[e]) return wr[e];
          if (!_r[e]) return e;
          var t,
            n = _r[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (wr[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          "TransitionEvent" in window || delete _r.transitionend.transition);
        var Nr = Sr("animationend"),
          Cr = Sr("animationiteration"),
          Or = Sr("animationstart"),
          Tr = Sr("transitionend"),
          Pr = new Map(),
          jr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Rr(e, t) {
          Pr.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < jr.length; Lr++) {
          var Ir = jr[Lr];
          Rr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        Rr(Nr, "onAnimationEnd"),
          Rr(Cr, "onAnimationIteration"),
          Rr(Or, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Tr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar),
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, s, u) {
              if ((He.apply(this, arguments), Me)) {
                if (!Me) throw Error(l(198));
                var c = De;
                (Me = !1), (De = null), ze || ((ze = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    u = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Dr(a, o, u), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (u = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, o, u), (l = s);
                }
            }
          }
          if (ze) throw ((e = Fe), (ze = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Wt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Kr(e, t, n, r, a) {
          var l = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = l,
              a = ke(n),
              i = [];
            e: {
              var o = Pr.get(e);
              if (void 0 !== o) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Tn;
                    break;
                  case Nr:
                  case Cr:
                  case Or:
                    s = gn;
                    break;
                  case Tr:
                    s = Pn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = On;
                }
                var c = 0 != (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var m, p = r; null !== p; ) {
                  var h = (m = p).stateNode;
                  if (
                    (5 === m.tag &&
                      null !== h &&
                      ((m = h),
                      null !== f &&
                        null != (h = Re(p, f)) &&
                        c.push($r(p, h, m))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((o = new s(o, u, null, n, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === Ee ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[pa])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = pn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = On),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == s ? o : Ea(s)),
                  (m = null == u ? o : Ea(u)),
                  ((o = new c(h, p + "leave", s, n, a)).target = d),
                  (o.relatedTarget = m),
                  (h = null),
                  ya(a) === r &&
                    (((c = new c(f, p + "enter", u, n, a)).target = m),
                    (c.relatedTarget = d),
                    (h = c)),
                  (d = h),
                  s && u)
                )
                  e: {
                    for (f = u, p = 0, m = c = s; m; m = qr(m)) p++;
                    for (m = 0, h = f; h; h = qr(h)) m++;
                    for (; 0 < p - m; ) (c = qr(c)), p--;
                    for (; 0 < m - p; ) (f = qr(f)), m--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = qr(c)), (f = qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Qr(i, o, s, c, !1),
                  null !== u && null !== d && Qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? Ea(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var v = Yn;
              else if (Kn(o))
                if (Xn) v = ir;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? $n(i, v, n, a)
                  : (g && g(e, o, r),
                    "focusout" === e &&
                      (g = o._wrapperState) &&
                      g.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (g = r ? Ea(r) : window),
                e)
              ) {
                case "focusin":
                  (Kn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), Er(i, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  Er(i, n, a);
              }
              var y;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (g = Wr(r, b)).length &&
                  ((b = new En(b, e, null, n, a)),
                  i.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!In && Bn(e, t))
                          ? ((e = en()), (Zt = Jt = Xt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Wr(r, "onBeforeInput")).length &&
                  ((a = new En("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            zr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Wr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Re(e, n)) && r.unshift($r(e, l, a)),
              null != (l = Re(e, t)) && r.push($r(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              u = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== u &&
              ((o = u),
              a
                ? null != (s = Re(n, l)) && i.unshift($r(n, s, o))
                : a || (null != (s = Re(n, l)) && i.push($r(n, s, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Jr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" == typeof setTimeout ? setTimeout : void 0,
          aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
          la = "function" == typeof Promise ? Promise : void 0,
          ia =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          ma = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pa] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[pa]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Ea(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function ka(e) {
          return e[ma] || null;
        }
        var _a = [],
          wa = -1;
        function xa(e) {
          return { current: e };
        }
        function Sa(e) {
          0 > wa || ((e.current = _a[wa]), (_a[wa] = null), wa--);
        }
        function Na(e, t) {
          wa++, (_a[wa] = e.current), (e.current = t);
        }
        var Ca = {},
          Oa = xa(Ca),
          Ta = xa(!1),
          Pa = Ca;
        function ja(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ra(e) {
          return null != (e = e.childContextTypes);
        }
        function La() {
          Sa(Ta), Sa(Oa);
        }
        function Ia(e, t, n) {
          if (Oa.current !== Ca) throw Error(l(168));
          Na(Oa, t), Na(Ta, n);
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, V(e) || "Unknown", a));
          return D({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Pa = Oa.current),
            Na(Oa, e),
            Na(Ta, Ta.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Aa(e, t, Pa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Sa(Ta),
              Sa(Oa),
              Na(Oa, e))
            : Sa(Ta),
            Na(Ta, n);
        }
        var za = null,
          Fa = !1,
          Ba = !1;
        function Ha(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Ua() {
          if (!Ba && null !== za) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Fa = !1);
            } catch (t) {
              throw (null !== za && (za = za.slice(e + 1)), qe(Ze, Ua), t);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Va = [],
          Ka = 0,
          $a = null,
          Wa = 0,
          qa = [],
          Qa = 0,
          Ga = null,
          Ya = 1,
          Xa = "";
        function Ja(e, t) {
          (Va[Ka++] = Wa), (Va[Ka++] = $a), ($a = e), (Wa = t);
        }
        function Za(e, t, n) {
          (qa[Qa++] = Ya), (qa[Qa++] = Xa), (qa[Qa++] = Ga), (Ga = e);
          var r = Ya;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = l + e);
          } else (Ya = (1 << l) | (n << a) | r), (Xa = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function tl(e) {
          for (; e === $a; )
            ($a = Va[--Ka]), (Va[Ka] = null), (Wa = Va[--Ka]), (Va[Ka] = null);
          for (; e === Ga; )
            (Ga = qa[--Qa]),
              (qa[Qa] = null),
              (Xa = qa[--Qa]),
              (qa[Qa] = null),
              (Ya = qa[--Qa]),
              (qa[Qa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = ju(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = ju(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ua(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function ml() {
          (rl = nl = null), (al = !1);
        }
        function pl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var hl = E.ReactCurrentBatchConfig;
        function vl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gl = xa(null),
          yl = null,
          bl = null,
          El = null;
        function kl() {
          El = bl = yl = null;
        }
        function _l(e) {
          var t = gl.current;
          Sa(gl), (e._currentValue = t);
        }
        function wl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xl(e, t) {
          (yl = e),
            (El = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Eo = !0), (e.firstContext = null));
        }
        function Sl(e) {
          var t = e._currentValue;
          if (El !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Nl = null;
        function Cl(e) {
          null === Nl ? (Nl = [e]) : Nl.push(e);
        }
        function Ol(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Cl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Tl(e, r)
          );
        }
        function Tl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Pl = !1;
        function jl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Rl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ll(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Il(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & Os))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Tl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Cl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Tl(e, n)
          );
        }
        function Al(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ml(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Dl(e, t, n, r) {
          var a = e.updateQueue;
          Pl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              u = s.next;
            (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, c = u = s = null, o = l; ; ) {
              var f = o.lane,
                m = o.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: m,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    h = o;
                  switch (((f = t), (m = n), h.tag)) {
                    case 1:
                      if ("function" == typeof (p = h.payload)) {
                        d = p.call(m, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (f =
                          "function" == typeof (p = h.payload)
                            ? p.call(m, d, f)
                            : p)
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      Pl = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (m = {
                  eventTime: m,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((u = c = m), (s = d)) : (c = c.next = m),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Ms |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function zl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" != typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Fl = new r.Component().refs;
        function Bl(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Hl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Ll(r, a);
            (l.payload = t),
              null != n && (l.callback = n),
              null !== (t = Il(e, l, a)) && (nu(t, e, a, r), Al(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Ll(r, a);
            (l.tag = 1),
              (l.payload = t),
              null != n && (l.callback = n),
              null !== (t = Il(e, l, a)) && (nu(t, e, a, r), Al(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ll(n, r);
            (a.tag = 2),
              null != t && (a.callback = t),
              null !== (t = Il(e, a, r)) && (nu(t, e, r, n), Al(t, e, r));
          },
        };
        function Ul(e, t, n, r, a, l, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function Vl(e, t, n) {
          var r = !1,
            a = Ca,
            l = t.contextType;
          return (
            "object" == typeof l && null !== l
              ? (l = Sl(l))
              : ((a = Ra(t) ? Pa : Oa.current),
                (l = (r = null != (r = t.contextTypes)) ? ja(e, a) : Ca)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Hl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Kl(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
        }
        function $l(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Fl), jl(e);
          var l = t.contextType;
          "object" == typeof l && null !== l
            ? (a.context = Sl(l))
            : ((l = Ra(t) ? Pa : Oa.current), (a.context = ja(e, l))),
            (a.state = e.memoizedState),
            "function" == typeof (l = t.getDerivedStateFromProps) &&
              (Bl(e, t, l, n), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Hl.enqueueReplaceState(a, a.state, null),
              Dl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Wl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Fl && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" != typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function Ql(e) {
          return (0, e._init)(e._payload);
        }
        function Gl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Du(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === w
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" == typeof l &&
                    null !== l &&
                    l.$$typeof === R &&
                    Ql(l) === t.type))
              ? (((r = a(t, n.props)).ref = Wl(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = Wl(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = zu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = Du("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = Wl(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = zu(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              ql(e, t);
            }
            return null;
          }
          function m(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case _:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return m(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== a ? null : d(e, t, n, r, null);
              ql(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case _:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case R:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || A(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              ql(t, r);
            }
            return null;
          }
          function h(a, l, o, s) {
            for (
              var u = null, c = null, d = l, h = (l = 0), v = null;
              null !== d && h < o.length;
              h++
            ) {
              d.index > h ? ((v = d), (d = null)) : (v = d.sibling);
              var g = m(a, d, o[h], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (l = i(g, l, h)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (h === o.length) return n(a, d), al && Ja(a, h), u;
            if (null === d) {
              for (; h < o.length; h++)
                null !== (d = f(a, o[h], s)) &&
                  ((l = i(d, l, h)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Ja(a, h), u;
            }
            for (d = r(a, d); h < o.length; h++)
              null !== (v = p(d, a, h, o[h], s)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? h : v.key),
                (l = i(v, l, h)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, h),
              u
            );
          }
          function v(a, o, s, u) {
            var c = A(s);
            if ("function" != typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), h = o, v = (o = 0), g = null, y = s.next();
              null !== h && !y.done;
              v++, y = s.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
              var b = m(a, h, y.value, u);
              if (null === b) {
                null === h && (h = g);
                break;
              }
              e && h && null === b.alternate && t(a, h),
                (o = i(b, o, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (h = g);
            }
            if (y.done) return n(a, h), al && Ja(a, v), c;
            if (null === h) {
              for (; !y.done; v++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((o = i(y, o, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Ja(a, v), c;
            }
            for (h = r(a, h); !y.done; v++, y = s.next())
              null !== (y = p(h, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (o = i(y, o, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, v),
              c
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" == typeof i &&
                null !== i &&
                i.type === w &&
                null === i.key &&
                (i = i.props.children),
              "object" == typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var u = i.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === w) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" == typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            Ql(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = Wl(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === w
                      ? (((l = Au(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = Iu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = Wl(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case _:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = zu(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case R:
                  return e(r, l, (c = i._init)(i._payload), s);
              }
              if (te(i)) return h(r, l, i, s);
              if (A(i)) return v(r, l, i, s);
              ql(r, i);
            }
            return ("string" == typeof i && "" !== i) || "number" == typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Du(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var Yl = Gl(!0),
          Xl = Gl(!1),
          Jl = {},
          Zl = xa(Jl),
          ei = xa(Jl),
          ti = xa(Jl);
        function ni(e) {
          if (e === Jl) throw Error(l(174));
          return e;
        }
        function ri(e, t) {
          switch ((Na(ti, t), Na(ei, e), Na(Zl, Jl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          Sa(Zl), Na(Zl, t);
        }
        function ai() {
          Sa(Zl), Sa(ei), Sa(ti);
        }
        function li(e) {
          ni(ti.current);
          var t = ni(Zl.current),
            n = se(t, e.type);
          t !== n && (Na(ei, e), Na(Zl, n));
        }
        function ii(e) {
          ei.current === e && (Sa(Zl), Sa(ei));
        }
        var oi = xa(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ui = [];
        function ci() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var di = E.ReactCurrentDispatcher,
          fi = E.ReactCurrentBatchConfig,
          mi = 0,
          pi = null,
          hi = null,
          vi = null,
          gi = !1,
          yi = !1,
          bi = 0,
          Ei = 0;
        function ki() {
          throw Error(l(321));
        }
        function _i(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function wi(e, t, n, r, a, i) {
          if (
            ((mi = i),
            (pi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? io : oo),
            (e = n(r, a)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (bi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (vi = hi = null),
                (t.updateQueue = null),
                (di.current = so),
                (e = n(r, a));
            } while (yi);
          }
          if (
            ((di.current = lo),
            (t = null !== hi && null !== hi.next),
            (mi = 0),
            (vi = hi = pi = null),
            (gi = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function xi() {
          var e = 0 !== bi;
          return (bi = 0), e;
        }
        function Si() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vi ? (pi.memoizedState = vi = e) : (vi = vi.next = e), vi
          );
        }
        function Ni() {
          if (null === hi) {
            var e = pi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hi.next;
          var t = null === vi ? pi.memoizedState : vi.next;
          if (null !== t) (vi = t), (hi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (hi = e).memoizedState,
              baseState: hi.baseState,
              baseQueue: hi.baseQueue,
              queue: hi.queue,
              next: null,
            }),
              null === vi ? (pi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ci(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Oi(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = hi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((mi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                  (pi.lanes |= d),
                  (Ms |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (o = r) : (u.next = s),
              or(r, t.memoizedState) || (Eo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (pi.lanes |= i), (Ms |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ti(e) {
          var t = Ni(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (Eo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Pi() {}
        function ji(e, t) {
          var n = pi,
            r = Ni(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (Eo = !0)),
            (r = r.queue),
            Vi(Ii.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              zi(9, Li.bind(null, n, r, a, t), void 0, null),
              null === Ts)
            )
              throw Error(l(349));
            0 != (30 & mi) || Ri(n, t, a);
          }
          return a;
        }
        function Ri(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = pi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (pi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Li(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ai(t) && Mi(e);
        }
        function Ii(e, t, n) {
          return n(function () {
            Ai(t) && Mi(e);
          });
        }
        function Ai(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Mi(e) {
          var t = Tl(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Di(e) {
          var t = Si();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ci,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, pi, e)),
            [t.memoizedState, e]
          );
        }
        function zi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = pi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (pi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fi() {
          return Ni().memoizedState;
        }
        function Bi(e, t, n, r) {
          var a = Si();
          (pi.flags |= e),
            (a.memoizedState = zi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var a = Ni();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== hi) {
            var i = hi.memoizedState;
            if (((l = i.destroy), null !== r && _i(r, i.deps)))
              return void (a.memoizedState = zi(t, n, l, r));
          }
          (pi.flags |= e), (a.memoizedState = zi(1 | t, n, l, r));
        }
        function Ui(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function Vi(e, t) {
          return Hi(2048, 8, e, t);
        }
        function Ki(e, t) {
          return Hi(4, 2, e, t);
        }
        function $i(e, t) {
          return Hi(4, 4, e, t);
        }
        function Wi(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Hi(4, 4, Wi.bind(null, t, e), n)
          );
        }
        function Qi() {}
        function Gi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _i(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Yi(e, t) {
          var n = Ni();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _i(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 == (21 & mi)
            ? (e.baseState && ((e.baseState = !1), (Eo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = ht()), (pi.lanes |= n), (Ms |= n), (e.baseState = !0)),
              t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fi.transition;
          fi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (fi.transition = r);
          }
        }
        function Zi() {
          return Ni().memoizedState;
        }
        function eo(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = Ol(e, t, n, r))) {
            nu(n, e, r, eu()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Cl(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (e) {}
            null !== (n = Ol(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === pi || (null !== t && t === pi);
        }
        function ro(e, t) {
          yi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var lo = {
            readContext: Sl,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: Sl,
            useCallback: function (e, t) {
              return (Si().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Sl,
            useEffect: Ui,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Bi(4194308, 4, Wi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Si();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Si();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, pi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Si().memoizedState = e);
            },
            useState: Di,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return (Si().memoizedState = e);
            },
            useTransition: function () {
              var e = Di(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (Si().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = pi,
                a = Si();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ts)) throw Error(l(349));
                0 != (30 & mi) || Ri(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Ui(Ii.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                zi(9, Li.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Si(),
                t = Ts.identifierPrefix;
              if (al) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = bi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Ei++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Sl,
            useCallback: Gi,
            useContext: Sl,
            useEffect: Vi,
            useImperativeHandle: qi,
            useInsertionEffect: Ki,
            useLayoutEffect: $i,
            useMemo: Yi,
            useReducer: Oi,
            useRef: Fi,
            useState: function () {
              return Oi(Ci);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return Xi(Ni(), hi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Ci)[0], Ni().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: ji,
            useId: Zi,
            unstable_isNewReconciler: !1,
          },
          so = {
            readContext: Sl,
            useCallback: Gi,
            useContext: Sl,
            useEffect: Vi,
            useImperativeHandle: qi,
            useInsertionEffect: Ki,
            useLayoutEffect: $i,
            useMemo: Yi,
            useReducer: Ti,
            useRef: Fi,
            useState: function () {
              return Ti(Ci);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              var t = Ni();
              return null === hi
                ? (t.memoizedState = e)
                : Xi(t, hi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Ci)[0], Ni().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: ji,
            useId: Zi,
            unstable_isNewReconciler: !1,
          };
        function uo(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fo(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var mo = "function" == typeof WeakMap ? WeakMap : Map;
        function po(e, t, n) {
          ((n = Ll(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Ks || ((Ks = !0), ($s = r)), fo(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = Ll(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fo(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" == typeof l.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  "function" != typeof r &&
                    (null === Ws ? (Ws = new Set([this])) : Ws.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vo(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new mo();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Su.bind(null, e, t, n)), t.then(e, e));
        }
        function go(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yo(e, t, n, r, a) {
          return 0 == (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ll(-1, 1)).tag = 2), Il(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bo = E.ReactCurrentOwner,
          Eo = !1;
        function ko(e, t, n, r) {
          t.child = null === e ? Xl(t, null, n, r) : Yl(t, e.child, n, r);
        }
        function _o(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            xl(t, a),
            (r = wi(e, t, n, r, l, a)),
            (n = xi()),
            null === e || Eo
              ? (al && n && el(t), (t.flags |= 1), ko(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ko(e, t, a))
          );
        }
        function wo(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" != typeof l ||
              Ru(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), xo(e, t, l, r, a));
          }
          if (((l = e.child), 0 == (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Ko(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((Eo = !1), (t.pendingProps = r = l), 0 == (e.lanes & a)))
                return (t.lanes = e.lanes), Ko(e, t, a);
              0 != (131072 & e.flags) && (Eo = !0);
            }
          }
          return Co(e, t, n, r, a);
        }
        function So(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Ls, Rs),
                (Rs |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Ls, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Na(Ls, Rs),
                (Rs |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Ls, Rs),
              (Rs |= r);
          return ko(e, t, a, n), t.child;
        }
        function No(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Co(e, t, n, r, a) {
          var l = Ra(n) ? Pa : Oa.current;
          return (
            (l = ja(t, l)),
            xl(t, a),
            (n = wi(e, t, n, r, l, a)),
            (r = xi()),
            null === e || Eo
              ? (al && r && el(t), (t.flags |= 1), ko(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ko(e, t, a))
          );
        }
        function Oo(e, t, n, r, a) {
          if (Ra(n)) {
            var l = !0;
            Ma(t);
          } else l = !1;
          if ((xl(t, a), null === t.stateNode))
            Vo(e, t), Vl(t, n, r), $l(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var s = i.context,
              u = n.contextType;
            "object" == typeof u && null !== u
              ? (u = Sl(u))
              : (u = ja(t, (u = Ra(n) ? Pa : Oa.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== u) && Kl(t, i, r, u)),
              (Pl = !1);
            var f = t.memoizedState;
            (i.state = f),
              Dl(t, r, i, a),
              (s = t.memoizedState),
              o !== r || f !== s || Ta.current || Pl
                ? ("function" == typeof c &&
                    (Bl(t, n, c, r), (s = t.memoizedState)),
                  (o = Pl || Ul(t, n, o, r, f, s, u))
                    ? (d ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = o))
                : ("function" == typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Rl(e, t),
              (o = t.memoizedProps),
              (u = t.type === t.elementType ? o : vl(t.type, o)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" == typeof (s = n.contextType) && null !== s
                ? (s = Sl(s))
                : (s = ja(t, (s = Ra(n) ? Pa : Oa.current)));
            var m = n.getDerivedStateFromProps;
            (c =
              "function" == typeof m ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && Kl(t, i, r, s)),
              (Pl = !1),
              (f = t.memoizedState),
              (i.state = f),
              Dl(t, r, i, a);
            var p = t.memoizedState;
            o !== d || f !== p || Ta.current || Pl
              ? ("function" == typeof m &&
                  (Bl(t, n, m, r), (p = t.memoizedState)),
                (u = Pl || Ul(t, n, u, r, f, p, s) || !1)
                  ? (c ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, p, s),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (i.props = r),
                (i.state = p),
                (i.context = s),
                (r = u))
              : ("function" != typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return To(e, t, n, r, l, a);
        }
        function To(e, t, n, r, a, l) {
          No(e, t);
          var i = 0 != (128 & t.flags);
          if (!r && !i) return a && Da(t, n, !1), Ko(e, t, l);
          (r = t.stateNode), (bo.current = t);
          var o =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Yl(t, e.child, null, l)),
                (t.child = Yl(t, null, o, l)))
              : ko(e, t, o, l),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function Po(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ia(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ia(0, t.context, !1),
            ri(e, t.containerInfo);
        }
        function jo(e, t, n, r, a) {
          return ml(), pl(a), (t.flags |= 256), ko(e, t, n, r), t.child;
        }
        var Ro,
          Lo,
          Io,
          Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Do(e, t, n) {
          var r,
            a = t.pendingProps,
            i = oi.current,
            o = !1,
            s = 0 != (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Na(oi, 1 & i),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 == (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Mu(s, a, 0, null)),
                      (e = Au(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Mo(n)),
                      (t.memoizedState = Ao),
                      e)
                    : zo(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fo(e, t, o, (r = co(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Mu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null,
                    )),
                    ((i = Au(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 != (1 & t.mode) && Yl(t, e.child, null, o),
                    (t.child.memoizedState = Mo(o)),
                    (t.memoizedState = Ao),
                    i);
              if (0 == (1 & t.mode)) return Fo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fo(e, t, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 != (o & e.childLanes)), Eo || s)) {
                if (null !== (r = Ts)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Tl(e, a), nu(r, e, a, -1));
                }
                return hu(), Fo(e, t, o, (r = co(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Qa++] = Ya),
                    (qa[Qa++] = Xa),
                    (qa[Qa++] = Ga),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  ((t = zo(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 == (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Lu(r, o))
                : ((o = Au(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Mo(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ao),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Lu(o, { mode: "visible", children: a.children })),
            0 == (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function zo(e, t) {
          return (
            ((t = Mu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Fo(e, t, n, r) {
          return (
            null !== r && pl(r),
            Yl(t, e.child, null, n),
            ((e = zo(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bo(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), wl(e.return, t, n);
        }
        function Ho(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Uo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((ko(e, t, r.children, n), 0 != (2 & (r = oi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, n, t);
                else if (19 === e.tag) Bo(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(oi, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ho(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ho(t, !0, n, null, l);
                break;
              case "together":
                Ho(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vo(e, t) {
          0 == (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ko(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ms |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $o(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Wo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
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
              return Wo(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), Wo(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Sa(Ta),
                Sa(Oa),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (iu(ll), (ll = null)))),
                Wo(t),
                null
              );
            case 5:
              ii(t);
              var a = ni(ti.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Lo(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Wo(t), null;
                }
                if (((e = ni(Zl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[ma] = i), (e = 0 != (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ar.length; a++) Fr(Ar[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Fr("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" == typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" == typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : o.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      W(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      W(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[ma] = r),
                    Ro(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ar.length; a++) Fr(Ar[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === i
                          ? "string" == typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" == typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Fr("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        W(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        W(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + K(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof a.onClick && (e.onclick = Zr);
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
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Wo(t), null;
            case 6:
              if (e && null != t.stateNode) Io(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = ni(ti.current)), ni(Zl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 != (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Wo(t), null;
            case 13:
              if (
                (Sa(oi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 != (1 & t.mode) &&
                  0 == (128 & t.flags)
                )
                  fl(), ml(), (t.flags |= 98560), (i = !1);
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = t;
                  } else
                    ml(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Wo(t), (i = !1);
                } else null !== ll && (iu(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 != (1 & t.mode) &&
                      (null === e || 0 != (1 & oi.current)
                        ? 0 === Is && (Is = 3)
                        : hu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Wo(t),
                  null);
            case 4:
              return (
                ai(), null === e && Ur(t.stateNode.containerInfo), Wo(t), null
              );
            case 10:
              return _l(t.type._context), Wo(t), null;
            case 19:
              if ((Sa(oi), null === (i = t.memoizedState))) return Wo(t), null;
              if (((r = 0 != (128 & t.flags)), null === (s = i.rendering)))
                if (r) $o(i, !1);
                else {
                  if (0 !== Is || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = si(e))) {
                        for (
                          t.flags |= 128,
                            $o(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(oi, (1 & oi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    $o(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $o(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return Wo(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $o(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = oi.current),
                  Na(oi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Wo(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                  ? 0 != (1073741824 & Rs) &&
                    (Wo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Wo(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Qo(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Sa(Ta),
                Sa(Oa),
                ci(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ii(t), null;
            case 13:
              if (
                (Sa(oi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                ml();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sa(oi), null;
            case 4:
              return ai(), null;
            case 10:
              return _l(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ro = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Lo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ni(Zl.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          s[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" != typeof u && "number" != typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Io = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Go = !1,
          Yo = !1,
          Xo = "function" == typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function Zo(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                xu(e, t, n);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (n) {
            xu(e, t, n);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && es(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
          }
        }
        function ls(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ls(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[ma],
              delete t[ha],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function os(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ms(e, t, n), (n = n.sibling);
        }
        function ms(e, t, n) {
          if (lt && "function" == typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Yo || Zo(n, t);
            case 6:
              var r = cs,
                a = ds;
              (cs = null),
                fs(e, t, n),
                (ds = a),
                null !== (cs = r) &&
                  (ds
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (ds
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = ds),
                (cs = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (cs = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yo &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 != (2 & l) || 0 != (4 & l)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Yo &&
                (Zo(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  xu(n, t, e);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yo = (r = Yo) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Yo = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function ps(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xo()),
              t.forEach(function (t) {
                var r = Ou.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function hs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(l(160));
                ms(i, o, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (e) {
                xu(a, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hs(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (t) {
                  xu(e, e.return, t);
                }
                try {
                  ns(5, e, e.return);
                } catch (t) {
                  xu(e, e.return, t);
                }
              }
              break;
            case 1:
              hs(t, e), gs(e), 512 & r && null !== n && Zo(n, n.return);
              break;
            case 5:
              if (
                (hs(t, e),
                gs(e),
                512 & r && null !== n && Zo(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (t) {
                  xu(e, e.return, t);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      be(s, o);
                    var c = be(s, i);
                    for (o = 0; o < u.length; o += 2) {
                      var d = u[o],
                        f = u[o + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var m = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        null != p
                          ? ne(a, !!i.multiple, p, !1)
                          : m !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[ma] = i;
                  } catch (t) {
                    xu(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((hs(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (t) {
                  xu(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (hs(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (t) {
                  xu(e, e.return, t);
                }
              break;
            case 4:
            default:
              hs(t, e), gs(e);
              break;
            case 13:
              hs(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Xe())),
                4 & r && ps(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yo = (c = Yo) || d), hs(t, e), (Yo = c))
                  : hs(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                )
                  for (Jo = e, d = e.child; null !== d; ) {
                    for (f = Jo = d; null !== Jo; ) {
                      switch (((p = (m = Jo).child), m.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, m, m.return);
                          break;
                        case 1:
                          Zo(m, m.return);
                          var h = m.stateNode;
                          if ("function" == typeof h.componentWillUnmount) {
                            (r = m), (n = m.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (e) {
                              xu(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          Zo(m, m.return);
                          break;
                        case 22:
                          if (null !== m.memoizedState) {
                            ks(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = m), (Jo = p)) : ks(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" == typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                null != (u = f.memoizedProps.style) &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = he("display", o)));
                      } catch (t) {
                        xu(e, e.return, t);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (t) {
                        xu(e, e.return, t);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              hs(t, e), gs(e), 4 & r && ps(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    us(e, os(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, os(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (t) {
              xu(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Jo = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 != (1 & e.mode); null !== Jo; ) {
            var a = Jo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Go;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Yo;
                o = Go;
                var u = Yo;
                if (((Go = i), (Yo = s) && !u))
                  for (Jo = a; null !== Jo; )
                    (s = (i = Jo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? _s(a)
                        : null !== s
                        ? ((s.return = i), (Jo = s))
                        : _s(a);
                for (; null !== l; ) (Jo = l), bs(l, t, n), (l = l.sibling);
                (Jo = a), (Go = o), (Yo = u);
              }
              Es(e);
            } else
              0 != (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Jo = l))
                : Es(e);
          }
        }
        function Es(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yo)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && zl(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        zl(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Yo || (512 & t.flags && as(t));
              } catch (e) {
                xu(t, t.return, e);
              }
            }
            if (t === e) {
              Jo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (t === e) {
              Jo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function _s(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (e) {
                    xu(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      xu(t, a, e);
                    }
                  }
                  var l = t.return;
                  try {
                    as(t);
                  } catch (e) {
                    xu(t, l, e);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (e) {
                    xu(t, i, e);
                  }
              }
            } catch (e) {
              xu(t, t.return, e);
            }
            if (t === e) {
              Jo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Jo = o);
              break;
            }
            Jo = t.return;
          }
        }
        var ws,
          xs = Math.ceil,
          Ss = E.ReactCurrentDispatcher,
          Ns = E.ReactCurrentOwner,
          Cs = E.ReactCurrentBatchConfig,
          Os = 0,
          Ts = null,
          Ps = null,
          js = 0,
          Rs = 0,
          Ls = xa(0),
          Is = 0,
          As = null,
          Ms = 0,
          Ds = 0,
          zs = 0,
          Fs = null,
          Bs = null,
          Hs = 0,
          Us = 1 / 0,
          Vs = null,
          Ks = !1,
          $s = null,
          Ws = null,
          qs = !1,
          Qs = null,
          Gs = 0,
          Ys = 0,
          Xs = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 != (6 & Os) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function tu(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & Os) && 0 !== js
            ? js & -js
            : null !== hl.transition
            ? (0 === Zs && (Zs = ht()), Zs)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ys) throw ((Ys = 0), (Xs = null), Error(l(185)));
          gt(e, n, r),
            (0 != (2 & Os) && e === Ts) ||
              (e === Ts && (0 == (2 & Os) && (Ds |= n), 4 === Is && ou(e, js)),
              ru(e, r),
              1 === n &&
                0 === Os &&
                0 == (1 & t.mode) &&
                ((Us = Xe() + 500), Fa && Ua()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 != (o & n) && 0 == (o & r)) || (a[i] = mt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = ft(e, e === Ts ? js : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ha(e);
                  })(su.bind(null, e))
                : Ha(su.bind(null, e)),
                ia(function () {
                  0 == (6 & Os) && Ua();
                }),
                (n = null);
            else {
              switch (Et(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 != (6 & Os))) throw Error(l(327));
          var n = e.callbackNode;
          if (_u() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ts ? js : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = Os;
            Os |= 2;
            var i = pu();
            for (
              (Ts === e && js === t) ||
              ((Vs = null), (Us = Xe() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (t) {
                mu(e, t);
              }
            kl(),
              (Ss.current = i),
              (Os = a),
              null !== Ps ? (t = 0) : ((Ts = null), (js = 0), (t = Is));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = As), fu(e, 0), ou(e, r), ru(e, Xe()), n);
            if (6 === t) ou(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vu(e, r)) &&
                    0 !== (i = pt(e)) &&
                    ((r = i), (t = lu(e, i))),
                  1 === t))
              )
                throw ((n = As), fu(e, 0), ou(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  ku(e, Bs, Vs);
                  break;
                case 3:
                  if (
                    (ou(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ku.bind(null, e, Bs, Vs), t);
                    break;
                  }
                  ku(e, Bs, Vs);
                  break;
                case 4:
                  if ((ou(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xs(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ku.bind(null, e, Bs, Vs), r);
                    break;
                  }
                  ku(e, Bs, Vs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Bs), (Bs = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function ou(e, t) {
          for (
            t &= ~zs,
              t &= ~Ds,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 != (6 & Os)) throw Error(l(327));
          _u();
          var t = ft(e, 0);
          if (0 == (1 & t)) return ru(e, Xe()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = As), fu(e, 0), ou(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Bs, Vs),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = Os;
          Os |= 1;
          try {
            return e(t);
          } finally {
            0 === (Os = n) && ((Us = Xe() + 500), Fa && Ua());
          }
        }
        function cu(e) {
          null !== Qs && 0 === Qs.tag && 0 == (6 & Os) && _u();
          var t = Os;
          Os |= 1;
          var n = Cs.transition,
            r = bt;
          try {
            if (((Cs.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cs.transition = n), 0 == (6 & (Os = t)) && Ua();
          }
        }
        function du() {
          (Rs = Ls.current), Sa(Ls);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ps))
            for (n = Ps.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && La();
                  break;
                case 3:
                  ai(), Sa(Ta), Sa(Oa), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Sa(oi);
                  break;
                case 10:
                  _l(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ts = e),
            (Ps = e = Lu(e.current, null)),
            (js = Rs = t),
            (Is = 0),
            (As = null),
            (zs = Ds = Ms = 0),
            (Bs = Fs = null),
            null !== Nl)
          ) {
            for (t = 0; t < Nl.length; t++)
              if (null !== (r = (n = Nl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Nl = null;
          }
          return e;
        }
        function mu(e, t) {
          for (;;) {
            var n = Ps;
            try {
              if ((kl(), (di.current = lo), gi)) {
                for (var r = pi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((mi = 0),
                (vi = hi = pi = null),
                (yi = !1),
                (bi = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (Is = 1), (As = t), (Ps = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = js),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var m = d.alternate;
                    m
                      ? ((d.updateQueue = m.updateQueue),
                        (d.memoizedState = m.memoizedState),
                        (d.lanes = m.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = go(o);
                  if (null !== p) {
                    (p.flags &= -257),
                      yo(p, o, s, 0, t),
                      1 & p.mode && vo(i, c, t),
                      (u = c);
                    var h = (t = p).updateQueue;
                    if (null === h) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else h.add(u);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    vo(i, c, t), hu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var g = go(o);
                  if (null !== g) {
                    0 == (65536 & g.flags) && (g.flags |= 256),
                      yo(g, o, s, 0, t),
                      pl(uo(u, s));
                    break e;
                  }
                }
                (i = u = uo(u, s)),
                  4 !== Is && (Is = 2),
                  null === Fs ? (Fs = [i]) : Fs.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ml(i, po(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 == (128 & i.flags) &&
                        ("function" == typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" == typeof b.componentDidCatch &&
                            (null === Ws || !Ws.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ml(i, ho(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Eu(n);
            } catch (e) {
              (t = e), Ps === n && null !== n && (Ps = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = Ss.current;
          return (Ss.current = lo), null === e ? lo : e;
        }
        function hu() {
          (0 !== Is && 3 !== Is && 2 !== Is) || (Is = 4),
            null === Ts ||
              (0 == (268435455 & Ms) && 0 == (268435455 & Ds)) ||
              ou(Ts, js);
        }
        function vu(e, t) {
          var n = Os;
          Os |= 2;
          var r = pu();
          for ((Ts === e && js === t) || ((Vs = null), fu(e, t)); ; )
            try {
              gu();
              break;
            } catch (t) {
              mu(e, t);
            }
          if ((kl(), (Os = n), (Ss.current = r), null !== Ps))
            throw Error(l(261));
          return (Ts = null), (js = 0), Is;
        }
        function gu() {
          for (; null !== Ps; ) bu(Ps);
        }
        function yu() {
          for (; null !== Ps && !Ge(); ) bu(Ps);
        }
        function bu(e) {
          var t = ws(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps),
            null === t ? Eu(e) : (Ps = t),
            (Ns.current = null);
        }
        function Eu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (32768 & t.flags))) {
              if (null !== (n = qo(n, t, Rs))) return void (Ps = n);
            } else {
              if (null !== (n = Qo(n, t)))
                return (n.flags &= 32767), void (Ps = n);
              if (null === e) return (Is = 6), void (Ps = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ps = t);
            Ps = t = e;
          } while (null !== t);
          0 === Is && (Is = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            a = Cs.transition;
          try {
            (Cs.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  _u();
                } while (null !== Qs);
                if (0 != (6 & Os)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === Ts && ((Ps = Ts = null), (js = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                    qs ||
                    ((qs = !0),
                    Tu(tt, function () {
                      return _u(), null;
                    })),
                  (i = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Cs.transition), (Cs.transition = null);
                  var o = bt;
                  bt = 1;
                  var s = Os;
                  (Os |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = Kt), mr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                m = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (m = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (m === n && ++c === a && (s = o),
                                    m === i && ++d === r && (u = o),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  m = (f = m).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Kt = !1,
                          Jo = t;
                        null !== Jo;

                      )
                        if (
                          ((e = (t = Jo).child),
                          0 != (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jo = e);
                        else
                          for (; null !== Jo; ) {
                            t = Jo;
                            try {
                              var h = t.alternate;
                              if (0 != (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var v = h.memoizedProps,
                                        g = h.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : vl(t.type, v),
                                          g,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var E = t.stateNode.containerInfo;
                                    1 === E.nodeType
                                      ? (E.textContent = "")
                                      : 9 === E.nodeType &&
                                        E.documentElement &&
                                        E.removeChild(E.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (e) {
                              xu(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jo = e);
                              break;
                            }
                            Jo = t.return;
                          }
                      (h = ts), (ts = !1);
                    })(e, n),
                    vs(n, e),
                    pr(ta),
                    (Kt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ye(),
                    (Os = s),
                    (bt = o),
                    (Cs.transition = i);
                } else e.current = n;
                if (
                  (qs && ((qs = !1), (Qs = e), (Gs = a)),
                  0 === (i = e.pendingLanes) && (Ws = null),
                  (function (e) {
                    if (lt && "function" == typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 == (128 & e.current.flags),
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  ru(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Ks) throw ((Ks = !1), (e = $s), ($s = null), e);
                0 != (1 & Gs) && 0 !== e.tag && _u(),
                  0 != (1 & (i = e.pendingLanes))
                    ? e === Xs
                      ? Ys++
                      : ((Ys = 0), (Xs = e))
                    : (Ys = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (Cs.transition = a), (bt = r);
          }
          return null;
        }
        function _u() {
          if (null !== Qs) {
            var e = Et(Gs),
              t = Cs.transition,
              n = bt;
            try {
              if (((Cs.transition = null), (bt = 16 > e ? 16 : e), null === Qs))
                var r = !1;
              else {
                if (((e = Qs), (Qs = null), (Gs = 0), 0 != (6 & Os)))
                  throw Error(l(331));
                var a = Os;
                for (Os |= 4, Jo = e.current; null !== Jo; ) {
                  var i = Jo,
                    o = i.child;
                  if (0 != (16 & Jo.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jo = c; null !== Jo; ) {
                          var d = Jo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jo = f);
                          else
                            for (; null !== Jo; ) {
                              var m = (d = Jo).sibling,
                                p = d.return;
                              if ((ls(d), d === c)) {
                                Jo = null;
                                break;
                              }
                              if (null !== m) {
                                (m.return = p), (Jo = m);
                                break;
                              }
                              Jo = p;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var v = h.child;
                        if (null !== v) {
                          h.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Jo = i;
                    }
                  }
                  if (0 != (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Jo = o);
                  else
                    e: for (; null !== Jo; ) {
                      if (0 != (2048 & (i = Jo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jo = y);
                        break e;
                      }
                      Jo = i.return;
                    }
                }
                var b = e.current;
                for (Jo = b; null !== Jo; ) {
                  var E = (o = Jo).child;
                  if (0 != (2064 & o.subtreeFlags) && null !== E)
                    (E.return = o), (Jo = E);
                  else
                    e: for (o = b; null !== Jo; ) {
                      if (0 != (2048 & (s = Jo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (e) {
                          xu(s, s.return, e);
                        }
                      if (s === o) {
                        Jo = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Jo = k);
                        break e;
                      }
                      Jo = s.return;
                    }
                }
                if (
                  ((Os = a),
                  Ua(),
                  lt && "function" == typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cs.transition = t);
            }
          }
          return !1;
        }
        function wu(e, t, n) {
          (e = Il(e, (t = po(0, (t = uo(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function xu(e, t, n) {
          if (3 === e.tag) wu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                wu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Ws || !Ws.has(r)))
                ) {
                  (t = Il(t, (e = ho(t, (e = uo(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Su(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ts === e &&
              (js & n) === n &&
              (4 === Is ||
              (3 === Is && (130023424 & js) === js && 500 > Xe() - Hs)
                ? fu(e, 0)
                : (zs |= n)),
            ru(e, t);
        }
        function Nu(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Tl(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function Cu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nu(e, n);
        }
        function Ou(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Nu(e, n);
        }
        function Tu(e, t) {
          return qe(e, t);
        }
        function Pu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function ju(e, t, n, r) {
          return new Pu(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = ju(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), "function" == typeof e)) Ru(e) && (o = 1);
          else if ("string" == typeof e) o = 5;
          else
            e: switch (e) {
              case w:
                return Au(n.children, a, i, t);
              case x:
                (o = 8), (a |= 8);
                break;
              case S:
                return (
                  ((e = ju(12, n, t, 2 | a)).elementType = S), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = ju(13, n, t, a)).elementType = T), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = ju(19, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case L:
                return Mu(n, a, i, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      o = 10;
                      break e;
                    case C:
                      o = 9;
                      break e;
                    case O:
                      o = 11;
                      break e;
                    case j:
                      o = 14;
                      break e;
                    case R:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = ju(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = ju(7, e, r, t)).lanes = n), e;
        }
        function Mu(e, t, n, r) {
          return (
            ((e = ju(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Du(e, t, n) {
          return ((e = ju(6, e, null, t)).lanes = n), e;
        }
        function zu(e, t, n) {
          return (
            ((t = ju(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, a, l, i, o, s) {
          return (
            (e = new Fu(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = ju(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            jl(l),
            e
          );
        }
        function Hu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: _,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Uu(e) {
          if (!e) return Ca;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return Aa(e, n, t);
          }
          return t;
        }
        function Vu(e, t, n, r, a, l, i, o, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, l, 0, o, s)).context = Uu(null)),
            (n = e.current),
            ((l = Ll((r = eu()), (a = tu(n)))).callback = null != t ? t : null),
            Il(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Ku(e, t, n, r) {
          var a = t.current,
            l = eu(),
            i = tu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ll(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Il(a, t, i)) && (nu(e, a, i, l), Al(e, a, i)),
            i
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qu(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        ws = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current) Eo = !0;
            else {
              if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                  (Eo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Po(t), ml();
                        break;
                      case 5:
                        li(t);
                        break;
                      case 1:
                        Ra(t.type) && Ma(t);
                        break;
                      case 4:
                        ri(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(gl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(oi, 1 & oi.current), (t.flags |= 128), null)
                            : 0 != (n & t.child.childLanes)
                            ? Do(e, t, n)
                            : (Na(oi, 1 & oi.current),
                              null !== (e = Ko(e, t, n)) ? e.sibling : null);
                        Na(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
                        ) {
                          if (r) return Uo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(oi, oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), So(e, t, n);
                    }
                    return Ko(e, t, n);
                  })(e, t, n)
                );
              Eo = 0 != (131072 & e.flags);
            }
          else (Eo = !1), al && 0 != (1048576 & t.flags) && Za(t, Wa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vo(e, t), (e = t.pendingProps);
              var a = ja(t, Oa.current);
              xl(t, n), (a = wi(null, t, r, e, a, n));
              var i = xi();
              return (
                (t.flags |= 1),
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((i = !0), Ma(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    jl(t),
                    (a.updater = Hl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $l(t, r, e, n),
                    (t = To(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    ko(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vo(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Ru(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Co(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Oo(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _o(null, t, r, e, n);
                    break e;
                  case 14:
                    t = wo(null, t, r, vl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Co(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Oo(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 3:
              e: {
                if ((Po(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Rl(e, t),
                  Dl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = jo(e, t, r, n, (a = uo(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = jo(e, t, r, n, (a = uo(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Xl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ml(), r === a)) {
                    t = Ko(e, t, n);
                    break e;
                  }
                  ko(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                li(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                No(e, t),
                ko(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Do(e, t, n);
            case 4:
              return (
                ri(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Yl(t, null, r, n)) : ko(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _o(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 7:
              return ko(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ko(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Na(gl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Ta.current) {
                      t = Ko(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Ll(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              wl(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          wl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                ko(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                xl(t, n),
                (r = r((a = Sl(a)))),
                (t.flags |= 1),
                ko(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = vl((r = t.type), t.pendingProps)),
                wo(e, t, r, (a = vl(r.type, a)), n)
              );
            case 15:
              return xo(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vl(r, a)),
                Vo(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Ma(t)) : (e = !1),
                xl(t, n),
                Vl(t, r, a),
                $l(t, r, a, n),
                To(null, t, r, !0, e, n)
              );
            case 19:
              return Uo(e, t, n);
            case 22:
              return So(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Qu =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" == typeof a) {
              var o = a;
              a = function () {
                var e = $u(i);
                o.call(e);
              };
            }
            Ku(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" == typeof r) {
                  var l = r;
                  r = function () {
                    var e = $u(i);
                    l.call(e);
                  };
                }
                var i = Vu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[pa] = i.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" == typeof r) {
                var o = r;
                r = function () {
                  var e = $u(s);
                  o.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[pa] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Ku(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return $u(i);
        }
        (Yu.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Ku(e, t, null, null);
          }),
          (Yu.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Ku(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Xe()),
                    0 == (6 & Os) && ((Us = Xe() + 500), Ua()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Tl(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  qu(e, 1);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = Tl(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              qu(e, 134217728);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Tl(e, t);
              if (null !== n) nu(n, e, t, eu());
              qu(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (St = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(l(90));
                      q(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = uu),
          (Te = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, Ea, ka, Ne, Ce, uu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: E.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(l(200));
            return Hu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Qu;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              o = Qu;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[pa] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pa] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      745: function (e, t, n) {
        "use strict";
        var r = n(935);
        r.createRoot, (t.a = r.hydrateRoot);
      },
      935: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      408: function (e, t) {
        "use strict";
        /**
         * @license React
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          m = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || p);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var E = (b.prototype = new y());
        (E.constructor = b), h(E, g.prototype), (E.isPureReactComponent = !0);
        var k = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          w = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              _.call(t, a) && !x.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: w.current,
          };
        }
        function N(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function O(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + O(s, 0) : l),
              k(i)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  T(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + O((o = e[u]), u);
              s += T(o, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (m && e[m]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), u = 0; !(o = e.next()).done; )
              s += T((o = o.value), t, a, (c = l + O(o, u++)), i);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return s;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          I = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: w,
          };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = h({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = w.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                _.call(t, u) &&
                  !x.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      294: function (e, t, n) {
        "use strict";
        e.exports = n(408);
      },
      53: function (e, t) {
        "use strict";
        /**
         * @license React
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                u = o + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(u < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          m = 3,
          p = !1,
          h = !1,
          v = !1,
          g = "function" == typeof setTimeout ? setTimeout : null,
          y = "function" == typeof clearTimeout ? clearTimeout : null,
          b = "undefined" != typeof setImmediate ? setImmediate : null;
        function E(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((v = !1), E(e), !h))
            if (null !== r(u)) (h = !0), L(_);
            else {
              var t = r(c);
              null !== t && I(k, t.startTime - e);
            }
        }
        function _(e, n) {
          (h = !1), v && ((v = !1), y(N), (N = -1)), (p = !0);
          var l = m;
          try {
            for (
              E(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !T()));

            ) {
              var i = f.callback;
              if ("function" == typeof i) {
                (f.callback = null), (m = f.priorityLevel);
                var o = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof o
                    ? (f.callback = o)
                    : f === r(u) && a(u),
                  E(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && I(k, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (m = l), (p = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var w,
          x = !1,
          S = null,
          N = -1,
          C = 5,
          O = -1;
        function T() {
          return !(t.unstable_now() - O < C);
        }
        function P() {
          if (null !== S) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? w() : ((x = !1), (S = null));
            }
          } else x = !1;
        }
        if ("function" == typeof b)
          w = function () {
            b(P);
          };
        else if ("undefined" != typeof MessageChannel) {
          var j = new MessageChannel(),
            R = j.port2;
          (j.port1.onmessage = P),
            (w = function () {
              R.postMessage(null);
            });
        } else
          w = function () {
            g(P, 0);
          };
        function L(e) {
          (S = e), x || ((x = !0), w());
        }
        function I(e, n) {
          N = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || p || ((h = !0), L(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = m;
            }
            var n = m;
            m = t;
            try {
              return e();
            } finally {
              m = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = m;
            m = e;
            try {
              return t();
            } finally {
              m = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" == typeof l && null !== l
                ? (l = "number" == typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (y(N), (N = -1)) : (v = !0), I(k, l - i)))
                : ((e.sortIndex = o), n(u, e), h || p || ((h = !0), L(_))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = m;
            return function () {
              var n = m;
              m = t;
              try {
                return e.apply(this, arguments);
              } finally {
                m = n;
              }
            };
          });
      },
      840: function (e, t, n) {
        "use strict";
        e.exports = n(53);
      },
      897: function (e) {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      405: function (e, t, n) {
        var r = n(897);
        (e.exports = function (e) {
          if (Array.isArray(e)) return r(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      416: function (e, t, n) {
        var r = n(62);
        (e.exports = function (e, t, n) {
          return (
            (t = r(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      498: function (e) {
        (e.exports = function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      281: function (e) {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      861: function (e, t, n) {
        var r = n(405),
          a = n(498),
          l = n(116),
          i = n(281);
        (e.exports = function (e) {
          return r(e) || a(e) || l(e) || i();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      36: function (e, t, n) {
        var r = n(698).default;
        (e.exports = function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(e, t || "default");
            if ("object" !== r(a)) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      62: function (e, t, n) {
        var r = n(698).default,
          a = n(36);
        (e.exports = function (e) {
          var t = a(e, "string");
          return "symbol" === r(t) ? t : String(t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      698: function (e) {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      116: function (e, t, n) {
        var r = n(897);
        (e.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? r(e, t)
                : void 0
            );
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
    },
    r = {};
  function a(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var l = (r[e] = { exports: {} });
    return n[e](l, l.exports, a), l.exports;
  }
  (a.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return a.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (a.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var l = Object.create(null);
      a.r(l);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & r && n; "object" == typeof o && !~e.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach(function (e) {
          i[e] = function () {
            return n[e];
          };
        });
      return (
        (i.default = function () {
          return n;
        }),
        a.d(l, i),
        l
      );
    }),
    (a.d = function (e, t) {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      var e,
        t = a(745),
        n = a(294),
        r = a.t(n, 2);
      /**
       * @remix-run/router v1.3.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      const i = "popstate";
      function o(e, t) {
        if (!1 === e || null == e) throw new Error(t);
      }
      function s(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (e) {}
        }
      }
      function u(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function c(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          l(
            {
              pathname: "string" == typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" == typeof t ? f(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function d(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function f(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function m(t, n, r, a) {
        void 0 === a && (a = {});
        let { window: f = document.defaultView, v5Compat: m = !1 } = a,
          p = f.history,
          h = e.Pop,
          v = null,
          g = y();
        function y() {
          return (p.state || { idx: null }).idx;
        }
        function b() {
          let t = e.Pop,
            n = y();
          if (null != n) {
            let e = n - g;
            (h = t),
              (g = n),
              v && v({ action: h, location: k.location, delta: e });
          } else
            s(
              !1,
              "You are trying to block a POP navigation to a location that was not created by @remix-run/router. The block will fail silently in production, but in general you should do all navigation with the router (instead of using window.history.pushState directly) to avoid this situation.",
            );
        }
        function E(e) {
          let t =
              "null" !== f.location.origin
                ? f.location.origin
                : f.location.href,
            n = "string" == typeof e ? e : d(e);
          return (
            o(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), p.replaceState(l({}, p.state, { idx: g }), ""));
        let k = {
          get action() {
            return h;
          },
          get location() {
            return t(f, p);
          },
          listen(e) {
            if (v)
              throw new Error("A history only accepts one active listener");
            return (
              f.addEventListener(i, b),
              (v = e),
              () => {
                f.removeEventListener(i, b), (v = null);
              }
            );
          },
          createHref(e) {
            return n(f, e);
          },
          createURL: E,
          encodeLocation(e) {
            let t = E(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            h = e.Push;
            let a = c(k.location, t, n);
            r && r(a, t), (g = y() + 1);
            let l = u(a, g),
              i = k.createHref(a);
            try {
              p.pushState(l, "", i);
            } catch (e) {
              f.location.assign(i);
            }
            m && v && v({ action: h, location: k.location, delta: 1 });
          },
          replace: function (t, n) {
            h = e.Replace;
            let a = c(k.location, t, n);
            r && r(a, t), (g = y());
            let l = u(a, g),
              i = k.createHref(a);
            p.replaceState(l, "", i),
              m && v && v({ action: h, location: k.location, delta: 0 });
          },
          go(e) {
            return p.go(e);
          },
        };
        return k;
      }
      var p;
      function h(e, t, n) {
        void 0 === n && (n = "/");
        let r = x(("string" == typeof t ? f(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = v(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  return e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n])
                    ? e[e.length - 1] - t[t.length - 1]
                    : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(a);
        let l = null;
        for (let e = 0; null == l && e < a.length; ++e) l = k(a[e], w(r));
        return l;
      }
      function v(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, l) => {
          let i = {
            relativePath: void 0 === l ? e.path || "" : l,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (o(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let s = T([r, i.relativePath]),
            u = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (o(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".',
            ),
            v(e.children, t, u, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: E(s, e.index), routesMeta: u });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let n of g(e.path)) a(e, t, n);
            else a(e, t);
          }),
          t
        );
      }
      function g(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          l = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [l, ""] : [l];
        let i = g(r.join("/")),
          o = [];
        return (
          o.push(...i.map((e) => ("" === e ? l : [l, e].join("/")))),
          a && o.push(...i),
          o.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(p || (p = {}));
      const y = /^:\w+$/,
        b = (e) => "*" === e;
      function E(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(b) && (r += -2),
          t && (r += 2),
          n
            .filter((e) => !b(e))
            .reduce((e, t) => e + (y.test(t) ? 3 : "" === t ? 1 : 10), r)
        );
      }
      function k(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          l = [];
        for (let e = 0; e < n.length; ++e) {
          let i = n[e],
            o = e === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            u = _(
              { path: i.relativePath, caseSensitive: i.caseSensitive, end: o },
              s,
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = i.route;
          l.push({
            params: r,
            pathname: T([a, u.pathname]),
            pathnameBase: P(T([a, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (a = T([a, u.pathnameBase]));
        }
        return l;
      }
      function _(e, t) {
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            S(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, (e, t) => (r.push(t), "/([^\\/]+)"));
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let l = a[0],
          i = l.replace(/(.)\/+$/, "$1"),
          o = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            if ("*" === t) {
              let e = o[n] || "";
              i = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    S(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ").",
                    ),
                    e
                  );
                }
              })(o[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: i,
          pattern: e,
        };
      }
      function w(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            S(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function x(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function S(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (e) {}
        }
      }
      function N(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function C(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
      }
      function O(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" == typeof e
            ? (a = f(e))
            : ((a = l({}, e)),
              o(
                !a.pathname || !a.pathname.includes("?"),
                N("?", "pathname", "search", a),
              ),
              o(
                !a.pathname || !a.pathname.includes("#"),
                N("#", "pathname", "hash", a),
              ),
              o(
                !a.search || !a.search.includes("#"),
                N("#", "search", "hash", a),
              ));
        let i,
          s = "" === e || "" === a.pathname,
          u = s ? "/" : a.pathname;
        if (r || null == u) i = n;
        else {
          let e = t.length - 1;
          if (u.startsWith("..")) {
            let t = u.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          i = e >= 0 ? t[e] : "/";
        }
        let c = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" == typeof e ? f(e) : e,
              l = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: l, search: j(r), hash: R(a) };
          })(a, i),
          d = u && "/" !== u && u.endsWith("/"),
          m = (s || "." === u) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!d && !m) || (c.pathname += "/"), c;
      }
      const T = (e) => e.join("/").replace(/\/\/+/g, "/"),
        P = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        j = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        R = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      class L extends Error {}
      class I {
        constructor(e, t, n, r) {
          void 0 === r && (r = !1),
            (this.status = e),
            (this.statusText = t || ""),
            (this.internal = r),
            n instanceof Error
              ? ((this.data = n.toString()), (this.error = n))
              : (this.data = n);
        }
      }
      function A(e) {
        return e instanceof I;
      }
      const M = ["post", "put", "patch", "delete"],
        D = (new Set(M), ["get", ...M]);
      new Set(D),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" != typeof window &&
          void 0 !== window.document &&
          window.document.createElement;
      Symbol("deferred");
      /**
       * React Router v6.7.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function z() {
        return (
          (z = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          z.apply(this, arguments)
        );
      }
      const F =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        { useState: B, useEffect: H, useLayoutEffect: U, useDebugValue: V } = r;
      function K(e) {
        const t = e.getSnapshot,
          n = e.value;
        try {
          const e = t();
          return !F(n, e);
        } catch (e) {
          return !0;
        }
      }
      "undefined" == typeof window ||
        void 0 === window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      const $ = n.createContext(null);
      const W = n.createContext(null);
      const q = n.createContext(null);
      const Q = n.createContext(null);
      const G = n.createContext({ outlet: null, matches: [] });
      const Y = n.createContext(null);
      function X() {
        return null != n.useContext(Q);
      }
      function J() {
        return X() || o(!1), n.useContext(Q).location;
      }
      function Z() {
        X() || o(!1);
        let { basename: e, navigator: t } = n.useContext(q),
          { matches: r } = n.useContext(G),
          { pathname: a } = J(),
          l = JSON.stringify(C(r).map((e) => e.pathnameBase)),
          i = n.useRef(!1);
        return (
          n.useEffect(() => {
            i.current = !0;
          }),
          n.useCallback(
            function (n, r) {
              if ((void 0 === r && (r = {}), !i.current)) return;
              if ("number" == typeof n) return void t.go(n);
              let o = O(n, JSON.parse(l), a, "path" === r.relative);
              "/" !== e &&
                (o.pathname = "/" === o.pathname ? e : T([e, o.pathname])),
                (r.replace ? t.replace : t.push)(o, r.state, r);
            },
            [e, t, l, a],
          )
        );
      }
      function ee() {
        let { matches: e } = n.useContext(G),
          t = e[e.length - 1];
        return t ? t.params : {};
      }
      function te(e, t) {
        let { relative: r } = void 0 === t ? {} : t,
          { matches: a } = n.useContext(G),
          { pathname: l } = J(),
          i = JSON.stringify(C(a).map((e) => e.pathnameBase));
        return n.useMemo(
          () => O(e, JSON.parse(i), l, "path" === r),
          [e, i, l, r],
        );
      }
      function ne() {
        let e = (function () {
            var e;
            let t = n.useContext(Y),
              r = se(oe.UseRouteError),
              a = ue(oe.UseRouteError);
            if (t) return t;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          t = A(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          l = { padding: "0.5rem", backgroundColor: a },
          i = { padding: "2px 4px", backgroundColor: a };
        return n.createElement(
          n.Fragment,
          null,
          n.createElement("h2", null, "Unhandled Thrown Error!"),
          n.createElement("h3", { style: { fontStyle: "italic" } }, t),
          r ? n.createElement("pre", { style: l }, r) : null,
          n.createElement("p", null, "💿 Hey developer 👋"),
          n.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own ",
            n.createElement("code", { style: i }, "errorElement"),
            " props on ",
            n.createElement("code", { style: i }, "<Route>"),
          ),
        );
      }
      class re extends n.Component {
        constructor(e) {
          super(e), (this.state = { location: e.location, error: e.error });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location
            ? { error: e.error, location: e.location }
            : { error: e.error || t.error, location: t.location };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t,
          );
        }
        render() {
          return this.state.error
            ? n.createElement(
                G.Provider,
                { value: this.props.routeContext },
                n.createElement(Y.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function ae(e) {
        let { routeContext: t, match: r, children: a } = e,
          l = n.useContext($);
        return (
          l &&
            l.static &&
            l.staticContext &&
            r.route.errorElement &&
            (l.staticContext._deepestRenderedBoundaryId = r.route.id),
          n.createElement(G.Provider, { value: t }, a)
        );
      }
      function le(e, t, r) {
        if ((void 0 === t && (t = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        let a = e,
          l = null == r ? void 0 : r.errors;
        if (null != l) {
          let e = a.findIndex(
            (e) => e.route.id && (null == l ? void 0 : l[e.route.id]),
          );
          e >= 0 || o(!1), (a = a.slice(0, Math.min(a.length, e + 1)));
        }
        return a.reduceRight((e, i, o) => {
          let s = i.route.id ? (null == l ? void 0 : l[i.route.id]) : null,
            u = r ? i.route.errorElement || n.createElement(ne, null) : null,
            c = t.concat(a.slice(0, o + 1)),
            d = () =>
              n.createElement(
                ae,
                { match: i, routeContext: { outlet: e, matches: c } },
                s ? u : void 0 !== i.route.element ? i.route.element : e,
              );
          return r && (i.route.errorElement || 0 === o)
            ? n.createElement(re, {
                location: r.location,
                component: u,
                error: s,
                children: d(),
                routeContext: { outlet: null, matches: c },
              })
            : d();
        }, null);
      }
      var ie, oe;
      function se(e) {
        let t = n.useContext(W);
        return t || o(!1), t;
      }
      function ue(e) {
        let t = (function (e) {
            let t = n.useContext(G);
            return t || o(!1), t;
          })(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || o(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(ie || (ie = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(oe || (oe = {}));
      function ce(e) {
        o(!1);
      }
      function de(t) {
        let {
          basename: r = "/",
          children: a = null,
          location: l,
          navigationType: i = e.Pop,
          navigator: s,
          static: u = !1,
        } = t;
        X() && o(!1);
        let c = r.replace(/^\/*/, "/"),
          d = n.useMemo(
            () => ({ basename: c, navigator: s, static: u }),
            [c, s, u],
          );
        "string" == typeof l && (l = f(l));
        let {
            pathname: m = "/",
            search: p = "",
            hash: h = "",
            state: v = null,
            key: g = "default",
          } = l,
          y = n.useMemo(() => {
            let e = x(m, c);
            return null == e
              ? null
              : { pathname: e, search: p, hash: h, state: v, key: g };
          }, [c, m, p, h, v, g]);
        return null == y
          ? null
          : n.createElement(
              q.Provider,
              { value: d },
              n.createElement(Q.Provider, {
                children: a,
                value: { location: y, navigationType: i },
              }),
            );
      }
      function fe(t) {
        let { children: r, location: a } = t,
          l = n.useContext($);
        return (function (t, r) {
          X() || o(!1);
          let { navigator: a } = n.useContext(q),
            l = n.useContext(W),
            { matches: i } = n.useContext(G),
            s = i[i.length - 1],
            u = s ? s.params : {},
            c = (s && s.pathname, s ? s.pathnameBase : "/");
          s && s.route;
          let d,
            m = J();
          if (r) {
            var p;
            let e = "string" == typeof r ? f(r) : r;
            "/" === c ||
              (null == (p = e.pathname) ? void 0 : p.startsWith(c)) ||
              o(!1),
              (d = e);
          } else d = m;
          let v = d.pathname || "/",
            g = h(t, { pathname: "/" === c ? v : v.slice(c.length) || "/" }),
            y = le(
              g &&
                g.map((e) =>
                  Object.assign({}, e, {
                    params: Object.assign({}, u, e.params),
                    pathname: T([
                      c,
                      a.encodeLocation
                        ? a.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : T([
                            c,
                            a.encodeLocation
                              ? a.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  }),
                ),
              i,
              l || void 0,
            );
          return r && y
            ? n.createElement(
                Q.Provider,
                {
                  value: {
                    location: z(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      d,
                    ),
                    navigationType: e.Pop,
                  },
                },
                y,
              )
            : y;
        })(l && !r ? l.router.routes : he(r), a);
      }
      var me;
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(me || (me = {}));
      new Promise(() => {});
      class pe extends n.Component {
        constructor(e) {
          super(e), (this.state = { error: null });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          console.error(
            "<Await> caught the following error during render",
            e,
            t,
          );
        }
        render() {
          let { children: e, errorElement: t, resolve: n } = this.props,
            r = null,
            a = me.pending;
          if (n instanceof Promise)
            if (this.state.error) {
              me.error;
              let e = this.state.error;
              Promise.reject().catch(() => {}),
                Object.defineProperty(r, "_tracked", { get: () => !0 }),
                Object.defineProperty(r, "_error", { get: () => e });
            } else
              n._tracked
                ? (n,
                  void 0 !== r._error
                    ? me.error
                    : void 0 !== r._data
                    ? me.success
                    : me.pending)
                : (me.pending,
                  Object.defineProperty(n, "_tracked", { get: () => !0 }),
                  n.then(
                    (e) => Object.defineProperty(n, "_data", { get: () => e }),
                    (e) => Object.defineProperty(n, "_error", { get: () => e }),
                  ));
          else
            me.success,
              Promise.resolve(),
              Object.defineProperty(r, "_tracked", { get: () => !0 }),
              Object.defineProperty(r, "_data", { get: () => n });
          if (a === me.error && r._error instanceof AbortedDeferredError)
            throw neverSettledPromise;
          if (a === me.error && !t) throw r._error;
          if (a === me.error)
            return React.createElement(AwaitContext.Provider, {
              value: r,
              children: t,
            });
          if (a === me.success)
            return React.createElement(AwaitContext.Provider, {
              value: r,
              children: e,
            });
          throw r;
        }
      }
      function he(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return (
          n.Children.forEach(e, (e, a) => {
            if (!n.isValidElement(e)) return;
            if (e.type === n.Fragment)
              return void r.push.apply(r, he(e.props.children, t));
            e.type !== ce && o(!1), e.props.index && e.props.children && o(!1);
            let l = [...t, a],
              i = {
                id: e.props.id || l.join("-"),
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                index: e.props.index,
                path: e.props.path,
                loader: e.props.loader,
                action: e.props.action,
                errorElement: e.props.errorElement,
                hasErrorBoundary: null != e.props.errorElement,
                shouldRevalidate: e.props.shouldRevalidate,
                handle: e.props.handle,
              };
            e.props.children && (i.children = he(e.props.children, l)),
              r.push(i);
          }),
          r
        );
      }
      /**
       * React Router DOM v6.7.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
      function ve() {
        return (
          (ve = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ve.apply(this, arguments)
        );
      }
      function ge(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      const ye = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        be = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Ee(e) {
        let { basename: t, children: r, window: a } = e,
          l = n.useRef();
        var i;
        null == l.current &&
          (l.current =
            (void 0 === (i = { window: a, v5Compat: !0 }) && (i = {}),
            m(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return c(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default",
                );
              },
              function (e, t) {
                return "string" == typeof t ? t : d(t);
              },
              null,
              i,
            )));
        let o = l.current,
          [s, u] = n.useState({ action: o.action, location: o.location });
        return (
          n.useLayoutEffect(() => o.listen(u), [o]),
          n.createElement(de, {
            basename: t,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: o,
          })
        );
      }
      const ke = n.forwardRef(function (e, t) {
        let {
            onClick: r,
            relative: a,
            reloadDocument: l,
            replace: i,
            state: s,
            target: u,
            to: c,
            preventScrollReset: f,
          } = e,
          m = ge(e, ye),
          p = (function (e, t) {
            let { relative: r } = void 0 === t ? {} : t;
            X() || o(!1);
            let { basename: a, navigator: l } = n.useContext(q),
              { hash: i, pathname: s, search: u } = te(e, { relative: r }),
              c = s;
            return (
              "/" !== a && (c = "/" === s ? a : T([a, s])),
              l.createHref({ pathname: c, search: u, hash: i })
            );
          })(c, { relative: a }),
          h = (function (e, t) {
            let {
                target: r,
                replace: a,
                state: l,
                preventScrollReset: i,
                relative: o,
              } = void 0 === t ? {} : t,
              s = Z(),
              u = J(),
              c = te(e, { relative: o });
            return n.useCallback(
              (t) => {
                if (
                  (function (e, t) {
                    return !(
                      0 !== e.button ||
                      (t && "_self" !== t) ||
                      (function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(t, r)
                ) {
                  t.preventDefault();
                  let n = void 0 !== a ? a : d(u) === d(c);
                  s(e, {
                    replace: n,
                    state: l,
                    preventScrollReset: i,
                    relative: o,
                  });
                }
              },
              [u, s, c, a, l, r, e, i, o],
            );
          })(c, {
            replace: i,
            state: s,
            target: u,
            preventScrollReset: f,
            relative: a,
          });
        return n.createElement(
          "a",
          ve({}, m, {
            href: p,
            onClick: l
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || h(e);
                },
            ref: t,
            target: u,
          }),
        );
      });
      const _e = n.forwardRef(function (e, t) {
        let {
            "aria-current": r = "page",
            caseSensitive: a = !1,
            className: l = "",
            end: i = !1,
            style: o,
            to: s,
            children: u,
          } = e,
          c = ge(e, be),
          d = te(s, { relative: c.relative }),
          f = J(),
          m = n.useContext(W),
          { navigator: p } = n.useContext(q),
          h = p.encodeLocation ? p.encodeLocation(d).pathname : d.pathname,
          v = f.pathname,
          g =
            m && m.navigation && m.navigation.location
              ? m.navigation.location.pathname
              : null;
        a ||
          ((v = v.toLowerCase()),
          (g = g ? g.toLowerCase() : null),
          (h = h.toLowerCase()));
        let y,
          b = v === h || (!i && v.startsWith(h) && "/" === v.charAt(h.length)),
          E =
            null != g &&
            (g === h || (!i && g.startsWith(h) && "/" === g.charAt(h.length))),
          k = b ? r : void 0;
        y =
          "function" == typeof l
            ? l({ isActive: b, isPending: E })
            : [l, b ? "active" : null, E ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        let _ = "function" == typeof o ? o({ isActive: b, isPending: E }) : o;
        return n.createElement(
          ke,
          ve({}, c, {
            "aria-current": k,
            className: y,
            ref: t,
            style: _,
            to: s,
          }),
          "function" == typeof u ? u({ isActive: b, isPending: E }) : u,
        );
      });
      var we, xe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(we || (we = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(xe || (xe = {}));
      function Se(e) {
        return (
          (Se =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Se(e)
        );
      }
      function Ne(e) {
        var t = (function (e, t) {
          if ("object" !== Se(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Se(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === Se(t) ? t : String(t);
      }
      function Ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, Ne(r.key), r);
        }
      }
      function Oe(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          "number" == typeof e
            ? "[MobX] minified error nr: " +
              e +
              (n.length ? " " + n.map(String).join(",") : "") +
              ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + e,
        );
      }
      var Te = {};
      function Pe() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== a.g
          ? a.g
          : "undefined" != typeof self
          ? self
          : Te;
      }
      var je = Object.assign,
        Re = Object.getOwnPropertyDescriptor,
        Le = Object.defineProperty,
        Ie = Object.prototype,
        Ae = [];
      Object.freeze(Ae);
      var Me = {};
      Object.freeze(Me);
      var De = "undefined" != typeof Proxy,
        ze = Object.toString();
      function Fe() {
        De || Oe("Proxy not available");
      }
      function Be(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var He = function () {};
      function Ue(e) {
        return "function" == typeof e;
      }
      function Ve(e) {
        switch (typeof e) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function Ke(e) {
        return null !== e && "object" == typeof e;
      }
      function $e(e) {
        if (!Ke(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n.toString() === ze;
      }
      function We(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function qe(e, t, n) {
        Le(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
      }
      function Qe(e, t, n) {
        Le(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
      }
      function Ge(e, t) {
        var n = "isMobX" + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return Ke(e) && !0 === e[n];
          }
        );
      }
      function Ye(e) {
        return e instanceof Map;
      }
      function Xe(e) {
        return e instanceof Set;
      }
      var Je = void 0 !== Object.getOwnPropertySymbols;
      var Ze =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : Je
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e),
              );
            }
          : Object.getOwnPropertyNames;
      function et(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function tt(e, t) {
        return Ie.hasOwnProperty.call(e, t);
      }
      var nt =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            Ze(e).forEach(function (n) {
              t[n] = Re(e, n);
            }),
            t
          );
        };
      function rt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function at(e, t, n) {
        return (
          t && rt(e.prototype, t),
          n && rt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function lt() {
        return (
          (lt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          lt.apply(this, arguments)
        );
      }
      function it(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          ot(e, t);
      }
      function ot(e, t) {
        return (
          (ot =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          ot(e, t)
        );
      }
      function st(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function ut(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ct(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ut(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ut(e, t)
                  : void 0
              );
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      var dt = Symbol("mobx-stored-annotations");
      function ft(e) {
        return Object.assign(function (t, n) {
          mt(t, n, e);
        }, e);
      }
      function mt(e, t, n) {
        tt(e, dt) || qe(e, dt, lt({}, e[dt])),
          (function (e) {
            return e.annotationType_ === kt;
          })(n) || (e[dt][t] = n);
      }
      var pt = Symbol("mobx administration"),
        ht = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation_ = !1),
              (this.isBeingObserved_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = hn.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = e);
          }
          var t = e.prototype;
          return (
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.reportObserved = function () {
              return Bn(this);
            }),
            (t.reportChanged = function () {
              zn(), Hn(this), Fn();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        vt = Ge("Atom", ht);
      function gt(e, t, n) {
        void 0 === t && (t = He), void 0 === n && (n = He);
        var r,
          a = new ht(e);
        return t !== He && ur(or, a, t, r), n !== He && sr(a, n), a;
      }
      var yt = {
        identity: function (e, t) {
          return e === t;
        },
        structural: function (e, t) {
          return Ca(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
            ? 0 !== e || 1 / e == 1 / t
            : e != e && t != t;
        },
        shallow: function (e, t) {
          return Ca(e, t, 1);
        },
      };
      function bt(e, t, n) {
        return wr(e)
          ? e
          : Array.isArray(e)
          ? Xt.array(e, { name: n })
          : $e(e)
          ? Xt.object(e, void 0, { name: n })
          : Ye(e)
          ? Xt.map(e, { name: n })
          : Xe(e)
          ? Xt.set(e, { name: n })
          : "function" != typeof e || rr(e) || kr(e)
          ? e
          : We(e)
          ? br(e)
          : nr(n, e);
      }
      function Et(e) {
        return e;
      }
      var kt = "override";
      function _t(e, t) {
        return { annotationType_: e, options_: t, make_: wt, extend_: xt };
      }
      function wt(e, t, n, r) {
        var a;
        if (null != (a = this.options_) && a.bound)
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (rr(n.value)) return 1;
        var l = St(e, this, t, n, !1);
        return Le(r, t, l), 2;
      }
      function xt(e, t, n, r) {
        var a = St(e, this, t, n);
        return e.defineProperty_(t, a, r);
      }
      function St(e, t, n, r, a) {
        var l, i, o, s, u, c, d, f;
        void 0 === a && (a = In.safeDescriptors),
          (f = r),
          t.annotationType_,
          f.value;
        var m,
          p = r.value;
        null != (l = t.options_) &&
          l.bound &&
          (p = p.bind(null != (m = e.proxy_) ? m : e.target_));
        return {
          value: sn(
            null != (i = null == (o = t.options_) ? void 0 : o.name)
              ? i
              : n.toString(),
            p,
            null != (s = null == (u = t.options_) ? void 0 : u.autoAction) && s,
            null != (c = t.options_) && c.bound
              ? null != (d = e.proxy_)
                ? d
                : e.target_
              : void 0,
          ),
          configurable: !a || e.isPlainObject_,
          enumerable: !1,
          writable: !a,
        };
      }
      function Nt(e, t) {
        return { annotationType_: e, options_: t, make_: Ct, extend_: Ot };
      }
      function Ct(e, t, n, r) {
        var a;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (
          null != (a = this.options_) &&
          a.bound &&
          (!tt(e.target_, t) || !kr(e.target_[t])) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (kr(n.value)) return 1;
        var l = Tt(e, this, t, n, !1, !1);
        return Le(r, t, l), 2;
      }
      function Ot(e, t, n, r) {
        var a,
          l = Tt(e, this, t, n, null == (a = this.options_) ? void 0 : a.bound);
        return e.defineProperty_(t, l, r);
      }
      function Tt(e, t, n, r, a, l) {
        var i;
        void 0 === l && (l = In.safeDescriptors),
          (i = r),
          t.annotationType_,
          i.value;
        var o,
          s = r.value;
        (kr(s) || (s = br(s)), a) &&
          ((s = s.bind(null != (o = e.proxy_) ? o : e.target_)).isMobXFlow =
            !0);
        return {
          value: s,
          configurable: !l || e.isPlainObject_,
          enumerable: !1,
          writable: !l,
        };
      }
      function Pt(e, t) {
        return { annotationType_: e, options_: t, make_: jt, extend_: Rt };
      }
      function jt(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function Rt(e, t, n, r) {
        return (
          (function (e, t, n, r) {
            t.annotationType_, r.get;
            0;
          })(0, this, 0, n),
          e.defineComputedProperty_(
            t,
            lt({}, this.options_, { get: n.get, set: n.set }),
            r,
          )
        );
      }
      function Lt(e, t) {
        return { annotationType_: e, options_: t, make_: It, extend_: At };
      }
      function It(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function At(e, t, n, r) {
        var a, l;
        return (
          (function (e, t, n, r) {
            t.annotationType_;
            0;
          })(0, this),
          e.defineObservableProperty_(
            t,
            n.value,
            null != (a = null == (l = this.options_) ? void 0 : l.enhancer)
              ? a
              : bt,
            r,
          )
        );
      }
      var Mt = Dt();
      function Dt(e) {
        return { annotationType_: "true", options_: e, make_: zt, extend_: Ft };
      }
      function zt(e, t, n, r) {
        var a, l, i, o;
        if (n.get) return tn.make_(e, t, n, r);
        if (n.set) {
          var s = sn(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !In.safeDescriptors || e.isPlainObject_,
                set: s,
              })
              ? 0
              : 2
            : (Le(r, t, { configurable: !0, set: s }), 2);
        }
        if (r !== e.target_ && "function" == typeof n.value)
          return We(n.value)
            ? (null != (o = this.options_) && o.autoBind ? br.bound : br).make_(
                e,
                t,
                n,
                r,
              )
            : (null != (i = this.options_) && i.autoBind ? nr.bound : nr).make_(
                e,
                t,
                n,
                r,
              );
        var u,
          c =
            !1 === (null == (a = this.options_) ? void 0 : a.deep)
              ? Xt.ref
              : Xt;
        "function" == typeof n.value &&
          null != (l = this.options_) &&
          l.autoBind &&
          (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
        return c.make_(e, t, n, r);
      }
      function Ft(e, t, n, r) {
        var a, l, i;
        if (n.get) return tn.extend_(e, t, n, r);
        if (n.set)
          return e.defineProperty_(
            t,
            {
              configurable: !In.safeDescriptors || e.isPlainObject_,
              set: sn(t.toString(), n.set),
            },
            r,
          );
        "function" == typeof n.value &&
          null != (a = this.options_) &&
          a.autoBind &&
          (n.value = n.value.bind(null != (i = e.proxy_) ? i : e.target_));
        return (
          !1 === (null == (l = this.options_) ? void 0 : l.deep) ? Xt.ref : Xt
        ).extend_(e, t, n, r);
      }
      var Bt = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function Ht(e) {
        return e || Bt;
      }
      Object.freeze(Bt);
      var Ut = Lt("observable"),
        Vt = Lt("observable.ref", { enhancer: Et }),
        Kt = Lt("observable.shallow", {
          enhancer: function (e, t, n) {
            return null == e || ca(e) || qr(e) || ea(e) || ra(e)
              ? e
              : Array.isArray(e)
              ? Xt.array(e, { name: n, deep: !1 })
              : $e(e)
              ? Xt.object(e, void 0, { name: n, deep: !1 })
              : Ye(e)
              ? Xt.map(e, { name: n, deep: !1 })
              : Xe(e)
              ? Xt.set(e, { name: n, deep: !1 })
              : void 0;
          },
        }),
        $t = Lt("observable.struct", {
          enhancer: function (e, t) {
            return Ca(e, t) ? t : e;
          },
        }),
        Wt = ft(Ut);
      function qt(e) {
        return !0 === e.deep
          ? bt
          : !1 === e.deep
          ? Et
          : (t = e.defaultDecorator) &&
            null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
          ? n
          : bt;
        var t, n, r;
      }
      function Qt(e, t, n) {
        if (!Ve(t))
          return wr(e)
            ? e
            : $e(e)
            ? Xt.object(e, t, n)
            : Array.isArray(e)
            ? Xt.array(e, t)
            : Ye(e)
            ? Xt.map(e, t)
            : Xe(e)
            ? Xt.set(e, t)
            : "object" == typeof e && null !== e
            ? e
            : Xt.box(e, t);
        mt(e, t, Ut);
      }
      Object.assign(Qt, Wt);
      var Gt,
        Yt,
        Xt = je(Qt, {
          box: function (e, t) {
            var n = Ht(t);
            return new pn(e, qt(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = Ht(t);
            return (!1 === In.useProxies || !1 === n.proxy ? _a : zr)(
              e,
              qt(n),
              n.name,
            );
          },
          map: function (e, t) {
            var n = Ht(t);
            return new Zr(e, qt(n), n.name);
          },
          set: function (e, t) {
            var n = Ht(t);
            return new na(e, qt(n), n.name);
          },
          object: function (e, t, n) {
            return fr(
              !1 === In.useProxies || !1 === (null == n ? void 0 : n.proxy)
                ? oa({}, n)
                : (function (e, t) {
                    var n, r;
                    return (
                      Fe(),
                      (e = oa(e, t)),
                      null != (r = (n = e[pt]).proxy_)
                        ? r
                        : (n.proxy_ = new Proxy(e, Cr))
                    );
                  })({}, n),
              e,
              t,
            );
          },
          ref: ft(Vt),
          shallow: ft(Kt),
          deep: Wt,
          struct: ft($t),
        }),
        Jt = "computed",
        Zt = Pt(Jt),
        en = Pt("computed.struct", { equals: yt.structural }),
        tn = function (e, t) {
          if (Ve(t)) return mt(e, t, Zt);
          if ($e(e)) return ft(Pt(Jt, e));
          var n = $e(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ""), new gn(n);
        };
      Object.assign(tn, Zt), (tn.struct = ft(en));
      var nn,
        rn = 0,
        an = 1,
        ln =
          null !=
            (Gt =
              null == (Yt = Re(function () {}, "name"))
                ? void 0
                : Yt.configurable) && Gt,
        on = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function sn(e, t, n, r) {
        function a() {
          return un(e, n, t, r || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (a.isMobxAction = !0),
          ln && ((on.value = e), Object.defineProperty(a, "name", on)),
          a
        );
      }
      function un(e, t, n, r, a) {
        var l = (function (e, t, n, r) {
          var a = !1,
            l = 0;
          0;
          var i = In.trackingDerivation,
            o = !t || !i;
          zn();
          var s = In.allowStateChanges;
          o && (Nn(), (s = dn(!0)));
          var u = On(!0),
            c = {
              runAsAction_: o,
              prevDerivation_: i,
              prevAllowStateChanges_: s,
              prevAllowStateReads_: u,
              notifySpy_: a,
              startTime_: l,
              actionId_: an++,
              parentActionId_: rn,
            };
          return (rn = c.actionId_), c;
        })(0, t);
        try {
          return n.apply(r, a);
        } catch (e) {
          throw ((l.error_ = e), e);
        } finally {
          !(function (e) {
            rn !== e.actionId_ && Oe(30);
            (rn = e.parentActionId_),
              void 0 !== e.error_ && (In.suppressReactionErrors = !0);
            fn(e.prevAllowStateChanges_),
              Tn(e.prevAllowStateReads_),
              Fn(),
              e.runAsAction_ && Cn(e.prevDerivation_);
            0;
            In.suppressReactionErrors = !1;
          })(l);
        }
      }
      function cn(e, t) {
        var n = dn(e);
        try {
          return t();
        } finally {
          fn(n);
        }
      }
      function dn(e) {
        var t = In.allowStateChanges;
        return (In.allowStateChanges = e), t;
      }
      function fn(e) {
        In.allowStateChanges = e;
      }
      nn = Symbol.toPrimitive;
      var mn,
        pn = (function (e) {
          function t(t, n, r, a, l) {
            var i;
            return (
              void 0 === r && (r = "ObservableValue"),
              void 0 === a && (a = !0),
              void 0 === l && (l = yt.default),
              ((i = e.call(this, r) || this).enhancer = void 0),
              (i.name_ = void 0),
              (i.equals = void 0),
              (i.hasUnreportedChange_ = !1),
              (i.interceptors_ = void 0),
              (i.changeListeners_ = void 0),
              (i.value_ = void 0),
              (i.dehancer = void 0),
              (i.enhancer = n),
              (i.name_ = r),
              (i.equals = l),
              (i.value_ = n(t, void 0, r)),
              i
            );
          }
          it(t, e);
          var n = t.prototype;
          return (
            (n.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
              this.value_;
              if ((e = this.prepareNewValue_(e)) !== In.UNCHANGED) {
                0, this.setNewValue_(e);
              }
            }),
            (n.prepareNewValue_ = function (e) {
              if ((_n(this), Or(this))) {
                var t = Pr(this, { object: this, type: Ar, newValue: e });
                if (!t) return In.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value_, this.name_)),
                this.equals(this.value_, e) ? In.UNCHANGED : e
              );
            }),
            (n.setNewValue_ = function (e) {
              var t = this.value_;
              (this.value_ = e),
                this.reportChanged(),
                jr(this) &&
                  Lr(this, {
                    type: Ar,
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (n.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (n.intercept_ = function (e) {
              return Tr(this, e);
            }),
            (n.observe_ = function (e, t) {
              return (
                t &&
                  e({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: Ar,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                Rr(this, e)
              );
            }),
            (n.raw = function () {
              return this.value_;
            }),
            (n.toJSON = function () {
              return this.get();
            }),
            (n.toString = function () {
              return this.name_ + "[" + this.value_ + "]";
            }),
            (n.valueOf = function () {
              return et(this.get());
            }),
            (n[nn] = function () {
              return this.valueOf();
            }),
            t
          );
        })(ht);
      mn = Symbol.toPrimitive;
      var hn,
        vn,
        gn = (function () {
          function e(e) {
            (this.dependenciesState_ = hn.NOT_TRACKING_),
              (this.observing_ = []),
              (this.newObserving_ = null),
              (this.isBeingObserved_ = !1),
              (this.isPendingUnobservation_ = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.runId_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = hn.UP_TO_DATE_),
              (this.unboundDepsCount_ = 0),
              (this.value_ = new bn(null)),
              (this.name_ = void 0),
              (this.triggeredBy_ = void 0),
              (this.isComputing_ = !1),
              (this.isRunningSetter_ = !1),
              (this.derivation = void 0),
              (this.setter_ = void 0),
              (this.isTracing_ = vn.NONE),
              (this.scope_ = void 0),
              (this.equals_ = void 0),
              (this.requiresReaction_ = void 0),
              (this.keepAlive_ = void 0),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              e.get || Oe(31),
              (this.derivation = e.get),
              (this.name_ = e.name || "ComputedValue"),
              e.set && (this.setter_ = sn("ComputedValue-setter", e.set)),
              (this.equals_ =
                e.equals ||
                (e.compareStructural || e.struct ? yt.structural : yt.default)),
              (this.scope_ = e.context),
              (this.requiresReaction_ = e.requiresReaction),
              (this.keepAlive_ = !!e.keepAlive);
          }
          var t = e.prototype;
          return (
            (t.onBecomeStale_ = function () {
              !(function (e) {
                if (e.lowestObserverState_ !== hn.UP_TO_DATE_) return;
                (e.lowestObserverState_ = hn.POSSIBLY_STALE_),
                  e.observers_.forEach(function (e) {
                    e.dependenciesState_ === hn.UP_TO_DATE_ &&
                      ((e.dependenciesState_ = hn.POSSIBLY_STALE_),
                      e.onBecomeStale_());
                  });
              })(this);
            }),
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.get = function () {
              if (
                (this.isComputing_ && Oe(32, this.name_, this.derivation),
                0 !== In.inBatch ||
                  0 !== this.observers_.size ||
                  this.keepAlive_)
              ) {
                if ((Bn(this), kn(this))) {
                  var e = In.trackingContext;
                  this.keepAlive_ && !e && (In.trackingContext = this),
                    this.trackAndCompute() &&
                      (function (e) {
                        if (e.lowestObserverState_ === hn.STALE_) return;
                        (e.lowestObserverState_ = hn.STALE_),
                          e.observers_.forEach(function (t) {
                            t.dependenciesState_ === hn.POSSIBLY_STALE_
                              ? (t.dependenciesState_ = hn.STALE_)
                              : t.dependenciesState_ === hn.UP_TO_DATE_ &&
                                (e.lowestObserverState_ = hn.UP_TO_DATE_);
                          });
                      })(this),
                    (In.trackingContext = e);
                }
              } else
                kn(this) &&
                  (this.warnAboutUntrackedRead_(),
                  zn(),
                  (this.value_ = this.computeValue_(!1)),
                  Fn());
              var t = this.value_;
              if (En(t)) throw t.cause;
              return t;
            }),
            (t.set = function (e) {
              if (this.setter_) {
                this.isRunningSetter_ && Oe(33, this.name_),
                  (this.isRunningSetter_ = !0);
                try {
                  this.setter_.call(this.scope_, e);
                } finally {
                  this.isRunningSetter_ = !1;
                }
              } else Oe(34, this.name_);
            }),
            (t.trackAndCompute = function () {
              var e = this.value_,
                t = this.dependenciesState_ === hn.NOT_TRACKING_,
                n = this.computeValue_(!0),
                r = t || En(e) || En(n) || !this.equals_(e, n);
              return r && (this.value_ = n), r;
            }),
            (t.computeValue_ = function (e) {
              this.isComputing_ = !0;
              var t,
                n = dn(!1);
              if (e) t = wn(this, this.derivation, this.scope_);
              else if (!0 === In.disableErrorBoundaries)
                t = this.derivation.call(this.scope_);
              else
                try {
                  t = this.derivation.call(this.scope_);
                } catch (e) {
                  t = new bn(e);
                }
              return fn(n), (this.isComputing_ = !1), t;
            }),
            (t.suspend_ = function () {
              this.keepAlive_ || (xn(this), (this.value_ = void 0));
            }),
            (t.observe_ = function (e, t) {
              var n = this,
                r = !0,
                a = void 0;
              return ar(function () {
                var l = n.get();
                if (!r || t) {
                  var i = Nn();
                  e({
                    observableKind: "computed",
                    debugObjectName: n.name_,
                    type: Ar,
                    object: n,
                    newValue: l,
                    oldValue: a,
                  }),
                    Cn(i);
                }
                (r = !1), (a = l);
              });
            }),
            (t.warnAboutUntrackedRead_ = function () {}),
            (t.toString = function () {
              return this.name_ + "[" + this.derivation.toString() + "]";
            }),
            (t.valueOf = function () {
              return et(this.get());
            }),
            (t[mn] = function () {
              return this.valueOf();
            }),
            e
          );
        })(),
        yn = Ge("ComputedValue", gn);
      !(function (e) {
        (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (e[(e.STALE_ = 2)] = "STALE_");
      })(hn || (hn = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(vn || (vn = {}));
      var bn = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function En(e) {
        return e instanceof bn;
      }
      function kn(e) {
        switch (e.dependenciesState_) {
          case hn.UP_TO_DATE_:
            return !1;
          case hn.NOT_TRACKING_:
          case hn.STALE_:
            return !0;
          case hn.POSSIBLY_STALE_:
            for (
              var t = On(!0), n = Nn(), r = e.observing_, a = r.length, l = 0;
              l < a;
              l++
            ) {
              var i = r[l];
              if (yn(i)) {
                if (In.disableErrorBoundaries) i.get();
                else
                  try {
                    i.get();
                  } catch (e) {
                    return Cn(n), Tn(t), !0;
                  }
                if (e.dependenciesState_ === hn.STALE_) return Cn(n), Tn(t), !0;
              }
            }
            return Pn(e), Cn(n), Tn(t), !1;
        }
      }
      function _n(e) {}
      function wn(e, t, n) {
        var r = On(!0);
        Pn(e),
          (e.newObserving_ = new Array(e.observing_.length + 100)),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++In.runId);
        var a,
          l = In.trackingDerivation;
        if (
          ((In.trackingDerivation = e),
          In.inBatch++,
          !0 === In.disableErrorBoundaries)
        )
          a = t.call(n);
        else
          try {
            a = t.call(n);
          } catch (e) {
            a = new bn(e);
          }
        return (
          In.inBatch--,
          (In.trackingDerivation = l),
          (function (e) {
            for (
              var t = e.observing_,
                n = (e.observing_ = e.newObserving_),
                r = hn.UP_TO_DATE_,
                a = 0,
                l = e.unboundDepsCount_,
                i = 0;
              i < l;
              i++
            ) {
              var o = n[i];
              0 === o.diffValue_ &&
                ((o.diffValue_ = 1), a !== i && (n[a] = o), a++),
                o.dependenciesState_ > r && (r = o.dependenciesState_);
            }
            (n.length = a), (e.newObserving_ = null), (l = t.length);
            for (; l--; ) {
              var s = t[l];
              0 === s.diffValue_ && Mn(s, e), (s.diffValue_ = 0);
            }
            for (; a--; ) {
              var u = n[a];
              1 === u.diffValue_ && ((u.diffValue_ = 0), An(u, e));
            }
            r !== hn.UP_TO_DATE_ &&
              ((e.dependenciesState_ = r), e.onBecomeStale_());
          })(e),
          Tn(r),
          a
        );
      }
      function xn(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--; ) Mn(t[n], e);
        e.dependenciesState_ = hn.NOT_TRACKING_;
      }
      function Sn(e) {
        var t = Nn();
        try {
          return e();
        } finally {
          Cn(t);
        }
      }
      function Nn() {
        var e = In.trackingDerivation;
        return (In.trackingDerivation = null), e;
      }
      function Cn(e) {
        In.trackingDerivation = e;
      }
      function On(e) {
        var t = In.allowStateReads;
        return (In.allowStateReads = e), t;
      }
      function Tn(e) {
        In.allowStateReads = e;
      }
      function Pn(e) {
        if (e.dependenciesState_ !== hn.UP_TO_DATE_) {
          e.dependenciesState_ = hn.UP_TO_DATE_;
          for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = hn.UP_TO_DATE_;
        }
      }
      var jn = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        Rn = !0,
        Ln = !1,
        In = (function () {
          var e = Pe();
          return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Rn = !1),
            e.__mobxGlobals &&
              e.__mobxGlobals.version !== new jn().version &&
              (Rn = !1),
            Rn
              ? e.__mobxGlobals
                ? ((e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals)
                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new jn()))
              : (setTimeout(function () {
                  Ln || Oe(35);
                }, 1),
                new jn())
          );
        })();
      function An(e, t) {
        e.observers_.add(t),
          e.lowestObserverState_ > t.dependenciesState_ &&
            (e.lowestObserverState_ = t.dependenciesState_);
      }
      function Mn(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && Dn(e);
      }
      function Dn(e) {
        !1 === e.isPendingUnobservation_ &&
          ((e.isPendingUnobservation_ = !0), In.pendingUnobservations.push(e));
      }
      function zn() {
        In.inBatch++;
      }
      function Fn() {
        if (0 == --In.inBatch) {
          Kn();
          for (var e = In.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation_ = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
                n instanceof gn && n.suspend_());
          }
          In.pendingUnobservations = [];
        }
      }
      function Bn(e) {
        var t = In.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved_ &&
                In.trackingContext &&
                ((e.isBeingObserved_ = !0), e.onBO())),
            e.isBeingObserved_)
          : (0 === e.observers_.size && In.inBatch > 0 && Dn(e), !1);
      }
      function Hn(e) {
        e.lowestObserverState_ !== hn.STALE_ &&
          ((e.lowestObserverState_ = hn.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === hn.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = hn.STALE_);
          }));
      }
      var Un = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = "Reaction"),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = hn.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = vn.NONE),
            (this.name_ = e),
            (this.onInvalidate_ = t),
            (this.errorHandler_ = n),
            (this.requiresObservable_ = r);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (t.schedule_ = function () {
            this.isScheduled_ ||
              ((this.isScheduled_ = !0), In.pendingReactions.push(this), Kn());
          }),
          (t.isScheduled = function () {
            return this.isScheduled_;
          }),
          (t.runReaction_ = function () {
            if (!this.isDisposed_) {
              zn(), (this.isScheduled_ = !1);
              var e = In.trackingContext;
              if (((In.trackingContext = this), kn(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (e) {
                  this.reportExceptionInDerivation_(e);
                }
              }
              (In.trackingContext = e), Fn();
            }
          }),
          (t.track = function (e) {
            if (!this.isDisposed_) {
              zn();
              0, (this.isRunning_ = !0);
              var t = In.trackingContext;
              In.trackingContext = this;
              var n = wn(this, e, void 0);
              (In.trackingContext = t),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && xn(this),
                En(n) && this.reportExceptionInDerivation_(n.cause),
                Fn();
            }
          }),
          (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
              if (In.disableErrorBoundaries) throw e;
              var n = "[mobx] uncaught error in '" + this + "'";
              In.suppressReactionErrors || console.error(n, e),
                In.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }
          }),
          (t.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0),
              this.isRunning_ || (zn(), xn(this), Fn()));
          }),
          (t.getDisposer_ = function () {
            var e = this.dispose.bind(this);
            return (e[pt] = this), e;
          }),
          (t.toString = function () {
            return "Reaction[" + this.name_ + "]";
          }),
          (t.trace = function (e) {
            void 0 === e && (e = !1),
              (function () {
                Oe("trace() is not available in production builds");
                for (
                  var e = !1, t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                "boolean" == typeof n[n.length - 1] && (e = n.pop());
                var a = xr(n);
                if (!a)
                  return Oe(
                    "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly",
                  );
                a.isTracing_ === vn.NONE &&
                  console.log("[mobx.trace] '" + a.name_ + "' tracing enabled");
                a.isTracing_ = e ? vn.BREAK : vn.LOG;
              })(this, e);
          }),
          e
        );
      })();
      var Vn = function (e) {
        return e();
      };
      function Kn() {
        In.inBatch > 0 || In.isRunningReactions || Vn($n);
      }
      function $n() {
        In.isRunningReactions = !0;
        for (var e = In.pendingReactions, t = 0; e.length > 0; ) {
          100 == ++t &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, a = n.length; r < a; r++)
            n[r].runReaction_();
        }
        In.isRunningReactions = !1;
      }
      var Wn = Ge("Reaction", Un);
      var qn = "action",
        Qn = "autoAction",
        Gn = "<unnamed action>",
        Yn = _t(qn),
        Xn = _t("action.bound", { bound: !0 }),
        Jn = _t(Qn, { autoAction: !0 }),
        Zn = _t("autoAction.bound", { autoAction: !0, bound: !0 });
      function er(e) {
        return function (t, n) {
          return Ue(t)
            ? sn(t.name || Gn, t, e)
            : Ue(n)
            ? sn(t, n, e)
            : Ve(n)
            ? mt(t, n, e ? Jn : Yn)
            : Ve(t)
            ? ft(_t(e ? Qn : qn, { name: t, autoAction: e }))
            : void 0;
        };
      }
      var tr = er(!1);
      Object.assign(tr, Yn);
      var nr = er(!0);
      function rr(e) {
        return Ue(e) && !0 === e.isMobxAction;
      }
      function ar(e, t) {
        var n, r;
        void 0 === t && (t = Me);
        var a,
          l = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
        if (!t.scheduler && !t.delay)
          a = new Un(
            l,
            function () {
              this.track(s);
            },
            t.onError,
            t.requiresObservable,
          );
        else {
          var i = ir(t),
            o = !1;
          a = new Un(
            l,
            function () {
              o ||
                ((o = !0),
                i(function () {
                  (o = !1), a.isDisposed_ || a.track(s);
                }));
            },
            t.onError,
            t.requiresObservable,
          );
        }
        function s() {
          e(a);
        }
        return a.schedule_(), a.getDisposer_();
      }
      Object.assign(nr, Jn), (tr.bound = ft(Xn)), (nr.bound = ft(Zn));
      var lr = function (e) {
        return e();
      };
      function ir(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
          ? function (t) {
              return setTimeout(t, e.delay);
            }
          : lr;
      }
      var or = "onBO";
      function sr(e, t, n) {
        return ur("onBUO", e, t, n);
      }
      function ur(e, t, n, r) {
        var a = "function" == typeof r ? wa(t, n) : wa(t),
          l = Ue(r) ? r : n,
          i = e + "L";
        return (
          a[i] ? a[i].add(l) : (a[i] = new Set([l])),
          function () {
            var e = a[i];
            e && (e.delete(l), 0 === e.size && delete a[i]);
          }
        );
      }
      var cr = "always";
      function dr(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((In.pendingReactions.length ||
                In.inBatch ||
                In.isRunningReactions) &&
                Oe(36),
              (Ln = !0),
              Rn)
            ) {
              var e = Pe();
              0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (In = new jn());
            }
          })();
        var t,
          n,
          r = e.useProxies,
          a = e.enforceActions;
        if (
          (void 0 !== r &&
            (In.useProxies =
              r === cr || ("never" !== r && "undefined" != typeof Proxy)),
          "ifavailable" === r && (In.verifyProxies = !0),
          void 0 !== a)
        ) {
          var l = a === cr ? cr : "observed" === a;
          (In.enforceActions = l),
            (In.allowStateChanges = !0 !== l && l !== cr);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (In[t] = !!e[t]);
        }),
          (In.allowStateReads = !In.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = Vn),
            (Vn = function (e) {
              return t(function () {
                return n(e);
              });
            }));
      }
      function fr(e, t, n, r) {
        var a = nt(t),
          l = oa(e, r)[pt];
        zn();
        try {
          Ze(a).forEach(function (e) {
            l.extend_(e, a[e], !n || !(e in n) || n[e]);
          });
        } finally {
          Fn();
        }
        return e;
      }
      function mr(e, t) {
        return pr(wa(e, t));
      }
      function pr(e) {
        var t,
          n = { name: e.name_ };
        return (
          e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(
              pr,
            )),
          n
        );
      }
      var hr = 0;
      function vr() {
        this.message = "FLOW_CANCELLED";
      }
      vr.prototype = Object.create(Error.prototype);
      var gr = Nt("flow"),
        yr = Nt("flow.bound", { bound: !0 }),
        br = Object.assign(function (e, t) {
          if (Ve(t)) return mt(e, t, gr);
          var n = e,
            r = n.name || "<unnamed flow>",
            a = function () {
              var e,
                t = this,
                a = arguments,
                l = ++hr,
                i = tr(r + " - runid: " + l + " - init", n).apply(t, a),
                o = void 0,
                s = new Promise(function (t, n) {
                  var a = 0;
                  function s(e) {
                    var t;
                    o = void 0;
                    try {
                      t = tr(
                        r + " - runid: " + l + " - yield " + a++,
                        i.next,
                      ).call(i, e);
                    } catch (e) {
                      return n(e);
                    }
                    c(t);
                  }
                  function u(e) {
                    var t;
                    o = void 0;
                    try {
                      t = tr(
                        r + " - runid: " + l + " - yield " + a++,
                        i.throw,
                      ).call(i, e);
                    } catch (e) {
                      return n(e);
                    }
                    c(t);
                  }
                  function c(e) {
                    if (!Ue(null == e ? void 0 : e.then))
                      return e.done
                        ? t(e.value)
                        : (o = Promise.resolve(e.value)).then(s, u);
                    e.then(c, n);
                  }
                  (e = n), s(void 0);
                });
              return (
                (s.cancel = tr(r + " - runid: " + l + " - cancel", function () {
                  try {
                    o && Er(o);
                    var t = i.return(void 0),
                      n = Promise.resolve(t.value);
                    n.then(He, He), Er(n), e(new vr());
                  } catch (t) {
                    e(t);
                  }
                })),
                s
              );
            };
          return (a.isMobXFlow = !0), a;
        }, gr);
      function Er(e) {
        Ue(e.cancel) && e.cancel();
      }
      function kr(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
      }
      function _r(e, t) {
        return (
          !!e &&
          (void 0 !== t
            ? !!ca(e) && e[pt].values_.has(t)
            : ca(e) || !!e[pt] || vt(e) || Wn(e) || yn(e))
        );
      }
      function wr(e) {
        return _r(e);
      }
      function xr(e) {
        switch (e.length) {
          case 0:
            return In.trackingDerivation;
          case 1:
            return wa(e[0]);
          case 2:
            return wa(e[0], e[1]);
        }
      }
      function Sr(e, t) {
        void 0 === t && (t = void 0), zn();
        try {
          return e.apply(t);
        } finally {
          Fn();
        }
      }
      function Nr(e) {
        return e[pt];
      }
      br.bound = ft(yr);
      var Cr = {
        has: function (e, t) {
          return Nr(e).has_(t);
        },
        get: function (e, t) {
          return Nr(e).get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!Ve(t) && (null == (r = Nr(e).set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!Ve(t) && (null == (n = Nr(e).delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = Nr(e).defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return Nr(e).ownKeys_();
        },
        preventExtensions: function (e) {
          Oe(13);
        },
      };
      function Or(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function Tr(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          Be(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function Pr(e, t) {
        var n = Nn();
        try {
          for (
            var r = [].concat(e.interceptors_ || []), a = 0, l = r.length;
            a < l && ((t = r[a](t)) && !t.type && Oe(14), t);
            a++
          );
          return t;
        } finally {
          Cn(n);
        }
      }
      function jr(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function Rr(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          Be(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function Lr(e, t) {
        var n = Nn(),
          r = e.changeListeners_;
        if (r) {
          for (var a = 0, l = (r = r.slice()).length; a < l; a++) r[a](t);
          Cn(n);
        }
      }
      var Ir = "splice",
        Ar = "update",
        Mr = {
          get: function (e, t) {
            var n = e[pt];
            return t === pt
              ? n
              : "length" === t
              ? n.getArrayLength_()
              : "string" != typeof t || isNaN(t)
              ? tt(Fr, t)
                ? Fr[t]
                : e[t]
              : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[pt];
            return (
              "length" === t && r.setArrayLength_(n),
              "symbol" == typeof t || isNaN(t)
                ? (e[t] = n)
                : r.set_(parseInt(t), n),
              !0
            );
          },
          preventExtensions: function () {
            Oe(15);
          },
        },
        Dr = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "ObservableArray"),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = n),
              (this.legacyMode_ = r),
              (this.atom_ = new ht(e)),
              (this.enhancer_ = function (e, n) {
                return t(e, n, "ObservableArray[..]");
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return Tr(this, e);
            }),
            (t.observe_ = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                Rr(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ("number" != typeof e || isNaN(e) || e < 0) &&
                Oe("Out of range: " + e);
              var t = this.values_.length;
              if (e !== t)
                if (e > t) {
                  for (var n = new Array(e - t), r = 0; r < e - t; r++)
                    n[r] = void 0;
                  this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && Oe(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && ka(e + t + 1);
            }),
            (t.spliceWithArray_ = function (e, t, n) {
              var r = this;
              this.atom_;
              var a = this.values_.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > a
                  ? (e = a)
                  : e < 0 && (e = Math.max(0, a + e)),
                (t =
                  1 === arguments.length
                    ? a - e
                    : null == t
                    ? 0
                    : Math.max(0, Math.min(t, a - e))),
                void 0 === n && (n = Ae),
                Or(this))
              ) {
                var l = Pr(this, {
                  object: this.proxy_,
                  type: Ir,
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!l) return Ae;
                (t = l.removedCount), (n = l.added);
              }
              if (
                ((n =
                  0 === n.length
                    ? n
                    : n.map(function (e) {
                        return r.enhancer_(e, void 0);
                      })),
                this.legacyMode_)
              ) {
                var i = n.length - t;
                this.updateArrayLength_(a, i);
              }
              var o = this.spliceItemsIntoValues_(e, t, n);
              return (
                (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, o),
                this.dehanceValues_(o)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
              var r;
              if (n.length < 1e4)
                return (r = this.values_).splice.apply(r, [e, t].concat(n));
              var a = this.values_.slice(e, e + t),
                l = this.values_.slice(e + t);
              this.values_.length += n.length - t;
              for (var i = 0; i < n.length; i++) this.values_[e + i] = n[i];
              for (var o = 0; o < l.length; o++)
                this.values_[e + n.length + o] = l[o];
              return a;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                a = jr(this),
                l =
                  a || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: Ar,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), a && Lr(this, l);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                a = jr(this),
                l =
                  a || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: Ir,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), a && Lr(this, l);
            }),
            (t.get_ = function (e) {
              if (!(this.legacyMode_ && e >= this.values_.length))
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[e])
                );
              console.warn("[mobx] Out of bounds read: " + e);
            }),
            (t.set_ = function (e, t) {
              var n = this.values_;
              if (
                (this.legacyMode_ && e > n.length && Oe(17, e, n.length),
                e < n.length)
              ) {
                this.atom_;
                var r = n[e];
                if (Or(this)) {
                  var a = Pr(this, {
                    type: Ar,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!a) return;
                  t = a.newValue;
                }
                (t = this.enhancer_(t, r)) !== r &&
                  ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r));
              } else {
                for (
                  var l = new Array(e + 1 - n.length), i = 0;
                  i < l.length - 1;
                  i++
                )
                  l[i] = void 0;
                (l[l.length - 1] = t), this.spliceWithArray_(n.length, 0, l);
              }
            }),
            e
          );
        })();
      function zr(e, t, n, r) {
        void 0 === n && (n = "ObservableArray"), void 0 === r && (r = !1), Fe();
        var a = new Dr(n, t, r, !1);
        Qe(a.values_, pt, a);
        var l = new Proxy(a.values_, Mr);
        if (((a.proxy_ = l), e && e.length)) {
          var i = dn(!0);
          a.spliceWithArray_(0, 0, e), fn(i);
        }
        return l;
      }
      var Fr = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[pt];
          return t.spliceWithArray_(0, t.values_.length, e);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
            a < n;
            a++
          )
            r[a - 2] = arguments[a];
          var l = this[pt];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return l.spliceWithArray_(e);
            case 2:
              return l.spliceWithArray_(e, t);
          }
          return l.spliceWithArray_(e, t, r);
        },
        spliceWithArray: function (e, t, n) {
          return this[pt].spliceWithArray_(e, t, n);
        },
        push: function () {
          for (
            var e = this[pt], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[pt].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var e = this[pt], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(0, 0, n), e.values_.length;
        },
        reverse: function () {
          return (
            In.trackingDerivation && Oe(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          In.trackingDerivation && Oe(37, "sort");
          var e = this.slice();
          return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function (e) {
          var t = this[pt],
            n = t.dehanceValues_(t.values_).indexOf(e);
          return n > -1 && (this.splice(n, 1), !0);
        },
      };
      function Br(e, t) {
        "function" == typeof Array.prototype[e] && (Fr[e] = t(e));
      }
      function Hr(e) {
        return function () {
          var t = this[pt];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function Ur(e) {
        return function (t, n) {
          var r = this,
            a = this[pt];
          return (
            a.atom_.reportObserved(),
            a.dehanceValues_(a.values_)[e](function (e, a) {
              return t.call(n, e, a, r);
            })
          );
        };
      }
      function Vr(e) {
        return function () {
          var t = this,
            n = this[pt];
          n.atom_.reportObserved();
          var r = n.dehanceValues_(n.values_),
            a = arguments[0];
          return (
            (arguments[0] = function (e, n, r) {
              return a(e, n, r, t);
            }),
            r[e].apply(r, arguments)
          );
        };
      }
      Br("concat", Hr),
        Br("flat", Hr),
        Br("includes", Hr),
        Br("indexOf", Hr),
        Br("join", Hr),
        Br("lastIndexOf", Hr),
        Br("slice", Hr),
        Br("toString", Hr),
        Br("toLocaleString", Hr),
        Br("every", Ur),
        Br("filter", Ur),
        Br("find", Ur),
        Br("findIndex", Ur),
        Br("flatMap", Ur),
        Br("forEach", Ur),
        Br("map", Ur),
        Br("some", Ur),
        Br("reduce", Vr),
        Br("reduceRight", Vr);
      var Kr,
        $r,
        Wr = Ge("ObservableArrayAdministration", Dr);
      function qr(e) {
        return Ke(e) && Wr(e[pt]);
      }
      var Qr = {},
        Gr = "add",
        Yr = "delete";
      (Kr = Symbol.iterator), ($r = Symbol.toStringTag);
      var Xr,
        Jr,
        Zr = (function () {
          function e(e, t, n) {
            var r = this;
            void 0 === t && (t = bt),
              void 0 === n && (n = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[pt] = Qr),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              Ue(Map) || Oe(18),
              (this.keysAtom_ = gt("ObservableMap.keys()")),
              (this.data_ = new Map()),
              (this.hasMap_ = new Map()),
              cn(!0, function () {
                r.merge(e);
              });
          }
          var t = e.prototype;
          return (
            (t.has_ = function (e) {
              return this.data_.has(e);
            }),
            (t.has = function (e) {
              var t = this;
              if (!In.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new pn(
                  this.has_(e),
                  Et,
                  "ObservableMap.key?",
                  !1,
                ));
                this.hasMap_.set(e, r),
                  sr(r, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (Or(this)) {
                var r = Pr(this, {
                  type: n ? Ar : Gr,
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                (this.keysAtom_, Or(this)) &&
                !Pr(this, { type: Yr, object: this, name: e })
              )
                return !1;
              if (this.has_(e)) {
                var n = jr(this),
                  r = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: Yr,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  Sr(function () {
                    var n;
                    t.keysAtom_.reportChanged(),
                      null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  n && Lr(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if ((t = n.prepareNewValue_(t)) !== In.UNCHANGED) {
                var r = jr(this),
                  a = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: Ar,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), r && Lr(this, a);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              this.keysAtom_,
                Sr(function () {
                  var r,
                    a = new pn(t, n.enhancer_, "ObservableMap.key", !1);
                  n.data_.set(e, a),
                    (t = a.value_),
                    null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                    n.keysAtom_.reportChanged();
                });
              var r = jr(this),
                a = r
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: Gr,
                      object: this,
                      name: e,
                      newValue: t,
                    }
                  : null;
              r && Lr(this, a);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return Pa({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    a = n.value;
                  return { done: r, value: r ? void 0 : e.get(a) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return Pa({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    a = n.value;
                  return { done: r, value: r ? void 0 : [a, e.get(a)] };
                },
              });
            }),
            (t[Kr] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var n, r = ct(this); !(n = r()).done; ) {
                var a = n.value,
                  l = a[0],
                  i = a[1];
                e.call(t, i, l, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                ea(e) && (e = new Map(e)),
                Sr(function () {
                  $e(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!Je) return t;
                        var n = Object.getOwnPropertySymbols(e);
                        return n.length
                          ? [].concat(
                              t,
                              n.filter(function (t) {
                                return Ie.propertyIsEnumerable.call(e, t);
                              }),
                            )
                          : t;
                      })(e).forEach(function (n) {
                        return t.set(n, e[n]);
                      })
                    : Array.isArray(e)
                    ? e.forEach(function (e) {
                        var n = e[0],
                          r = e[1];
                        return t.set(n, r);
                      })
                    : Ye(e)
                    ? (e.constructor !== Map && Oe(19, e),
                      e.forEach(function (e, n) {
                        return t.set(n, e);
                      }))
                    : null != e && Oe(20, e);
                }),
                this
              );
            }),
            (t.clear = function () {
              var e = this;
              Sr(function () {
                Sn(function () {
                  for (var t, n = ct(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                Sr(function () {
                  for (
                    var n,
                      r = (function (e) {
                        if (Ye(e) || ea(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if ($e(e)) {
                          var t = new Map();
                          for (var n in e) t.set(n, e[n]);
                          return t;
                        }
                        return Oe(21, e);
                      })(e),
                      a = new Map(),
                      l = !1,
                      i = ct(t.data_.keys());
                    !(n = i()).done;

                  ) {
                    var o = n.value;
                    if (!r.has(o))
                      if (t.delete(o)) l = !0;
                      else {
                        var s = t.data_.get(o);
                        a.set(o, s);
                      }
                  }
                  for (var u, c = ct(r.entries()); !(u = c()).done; ) {
                    var d = u.value,
                      f = d[0],
                      m = d[1],
                      p = t.data_.has(f);
                    if ((t.set(f, m), t.data_.has(f))) {
                      var h = t.data_.get(f);
                      a.set(f, h), p || (l = !0);
                    }
                  }
                  if (!l)
                    if (t.data_.size !== a.size) t.keysAtom_.reportChanged();
                    else
                      for (
                        var v = t.data_.keys(),
                          g = a.keys(),
                          y = v.next(),
                          b = g.next();
                        !y.done;

                      ) {
                        if (y.value !== b.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (y = v.next()), (b = g.next());
                      }
                  t.data_ = a;
                }),
                this
              );
            }),
            (t.toString = function () {
              return "[object ObservableMap]";
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
              return Rr(this, e);
            }),
            (t.intercept_ = function (e) {
              return Tr(this, e);
            }),
            at(e, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: $r,
                get: function () {
                  return "Map";
                },
              },
            ]),
            e
          );
        })(),
        ea = Ge("ObservableMap", Zr);
      var ta = {};
      (Xr = Symbol.iterator), (Jr = Symbol.toStringTag);
      var na = (function () {
          function e(e, t, n) {
            void 0 === t && (t = bt),
              void 0 === n && (n = "ObservableSet"),
              (this.name_ = void 0),
              (this[pt] = ta),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = n),
              Ue(Set) || Oe(22),
              (this.atom_ = gt(this.name_)),
              (this.enhancer_ = function (e, r) {
                return t(e, r, n);
              }),
              e && this.replace(e);
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              Sr(function () {
                Sn(function () {
                  for (var t, n = ct(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = ct(this); !(n = r()).done; ) {
                var a = n.value;
                e.call(t, a, a, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if (
                (this.atom_, Or(this)) &&
                !Pr(this, { type: Gr, object: this, newValue: e })
              )
                return this;
              if (!this.has(e)) {
                Sr(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = !1,
                  r = jr(this),
                  a = r
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Gr,
                        object: this,
                        newValue: e,
                      }
                    : null;
                n, r && Lr(this, a);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                Or(this) &&
                !Pr(this, { type: Yr, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var n = jr(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Yr,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  Sr(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  n && Lr(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.has = function (e) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(e))
              );
            }),
            (t.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                n = Array.from(this.values());
              return Pa({
                next: function () {
                  var r = e;
                  return (
                    (e += 1),
                    r < n.length
                      ? { value: [t[r], n[r]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (t.keys = function () {
              return this.values();
            }),
            (t.values = function () {
              this.atom_.reportObserved();
              var e = this,
                t = 0,
                n = Array.from(this.data_.values());
              return Pa({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                ra(e) && (e = new Set(e)),
                Sr(function () {
                  Array.isArray(e) || Xe(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : null != e && Oe("Cannot initialize set from " + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return Rr(this, e);
            }),
            (t.intercept_ = function (e) {
              return Tr(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return "[object ObservableSet]";
            }),
            (t[Xr] = function () {
              return this.values();
            }),
            at(e, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Jr,
                get: function () {
                  return "Set";
                },
              },
            ]),
            e
          );
        })(),
        ra = Ge("ObservableSet", na),
        aa = Object.create(null),
        la = "remove",
        ia = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              void 0 === r && (r = Mt),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = e),
              (this.values_ = t),
              (this.name_ = n),
              (this.defaultAnnotation_ = r),
              (this.keysAtom_ = new ht("ObservableObject.keys")),
              (this.isPlainObject_ = $e(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof gn) return n.set(t), !0;
              if (Or(this)) {
                var r = Pr(this, {
                  type: Ar,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if ((t = n.prepareNewValue_(t)) !== In.UNCHANGED) {
                var a = jr(this),
                  l = a
                    ? {
                        type: Ar,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), a && Lr(this, l);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                In.trackingDerivation && !tt(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, n) {
              return (
                void 0 === n && (n = !1),
                tt(this.target_, e)
                  ? this.values_.has(e)
                    ? this.setObservablePropValue_(e, t)
                    : n
                    ? Reflect.set(this.target_, e, t)
                    : ((this.target_[e] = t), !0)
                  : this.extend_(
                      e,
                      {
                        value: t,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      n,
                    )
              );
            }),
            (t.has_ = function (e) {
              if (!In.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new pn(
                    e in this.target_,
                    Et,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if ((fa(this, t, e), !(e in this.target_))) {
                  var n;
                  if (null != (n = this.target_[dt]) && n[e]) return;
                  Oe(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for (var r = this.target_; r && r !== Ie; ) {
                  var a = Re(r, e);
                  if (a) {
                    var l = t.make_(this, e, a, r);
                    if (0 === l) return;
                    if (1 === l) break;
                  }
                  r = Object.getPrototypeOf(r);
                }
                da(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, n, r) {
              if (
                (void 0 === r && (r = !1),
                !0 === n && (n = this.defaultAnnotation_),
                !1 === n)
              )
                return this.defineProperty_(e, t, r);
              fa(this, n, e);
              var a = n.extend_(this, e, t, r);
              return a && da(this, n, e), a;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                zn();
                var r = this.delete_(e);
                if (!r) return r;
                if (Or(this)) {
                  var a = Pr(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Gr,
                    newValue: t.value,
                  });
                  if (!a) return null;
                  var l = a.newValue;
                  t.value !== l && (t = lt({}, t, { value: l }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else Le(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                Fn();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1);
              try {
                zn();
                var a = this.delete_(e);
                if (!a) return a;
                if (Or(this)) {
                  var l = Pr(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Gr,
                    newValue: t,
                  });
                  if (!l) return null;
                  t = l.newValue;
                }
                var i = ua(e),
                  o = {
                    configurable: !In.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: i.get,
                    set: i.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else Le(this.target_, e, o);
                var s = new pn(t, n, "ObservableObject.key", !1);
                this.values_.set(e, s),
                  this.notifyPropertyAddition_(e, s.value_);
              } finally {
                Fn();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1);
              try {
                zn();
                var r = this.delete_(e);
                if (!r) return r;
                if (Or(this))
                  if (
                    !Pr(this, {
                      object: this.proxy_ || this.target_,
                      name: e,
                      type: Gr,
                      newValue: void 0,
                    })
                  )
                    return null;
                t.name || (t.name = "ObservableObject.key"),
                  (t.context = this.proxy_ || this.target_);
                var a = ua(e),
                  l = {
                    configurable: !In.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: a.get,
                    set: a.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, l)) return !1;
                } else Le(this.target_, e, l);
                this.values_.set(e, new gn(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                Fn();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if ((void 0 === t && (t = !1), !tt(this.target_, e))) return !0;
              if (
                Or(this) &&
                !Pr(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: la,
                })
              )
                return null;
              try {
                var n, r;
                zn();
                var a,
                  l = jr(this),
                  i = this.values_.get(e),
                  o = void 0;
                if (!i && l)
                  o = null == (a = Re(this.target_, e)) ? void 0 : a.value;
                if (t) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (i &&
                    (this.values_.delete(e),
                    i instanceof pn && (o = i.value_),
                    Hn(i)),
                  this.keysAtom_.reportChanged(),
                  null == (n = this.pendingKeys_) ||
                    null == (r = n.get(e)) ||
                    r.set(e in this.target_),
                  l)
                ) {
                  var s = {
                    type: la,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: o,
                    name: e,
                  };
                  0, l && Lr(this, s);
                }
              } finally {
                Fn();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return Rr(this, e);
            }),
            (t.intercept_ = function (e) {
              return Tr(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r,
                a = jr(this);
              if (a) {
                var l = a
                  ? {
                      type: Gr,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: e,
                      newValue: t,
                    }
                  : null;
                0, a && Lr(this, l);
              }
              null == (n = this.pendingKeys_) ||
                null == (r = n.get(e)) ||
                r.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), Ze(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function oa(e, t) {
        var n;
        if (tt(e, pt)) return e;
        var r =
            null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
          a = new ia(
            e,
            new Map(),
            String(r),
            (function (e) {
              var t;
              return e
                ? null != (t = e.defaultDecorator)
                  ? t
                  : Dt(e)
                : void 0;
            })(t),
          );
        return qe(e, pt, a), e;
      }
      var sa = Ge("ObservableObjectAdministration", ia);
      function ua(e) {
        return (
          aa[e] ||
          (aa[e] = {
            get: function () {
              return this[pt].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[pt].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function ca(e) {
        return !!Ke(e) && sa(e[pt]);
      }
      function da(e, t, n) {
        var r;
        null == (r = e.target_[dt]) || delete r[n];
      }
      function fa(e, t, n) {}
      var ma,
        pa,
        ha = ba(0),
        va = 0,
        ga = function () {};
      (ma = ga),
        (pa = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(ma.prototype, pa)
          : void 0 !== ma.prototype.__proto__
          ? (ma.prototype.__proto__ = pa)
          : (ma.prototype = pa);
      var ya = (function (e, t, n) {
        function r(t, n, r, a) {
          var l;
          void 0 === r && (r = "ObservableArray"),
            void 0 === a && (a = !1),
            (l = e.call(this) || this);
          var i = new Dr(r, n, a, !0);
          if (((i.proxy_ = st(l)), Qe(st(l), pt, i), t && t.length)) {
            var o = dn(!0);
            l.spliceWithArray(0, 0, t), fn(o);
          }
          return Object.defineProperty(st(l), "0", ha), l;
        }
        it(r, e);
        var a = r.prototype;
        return (
          (a.concat = function () {
            this[pt].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return qr(e) ? e.slice() : e;
              }),
            );
          }),
          (a[n] = function () {
            var e = this,
              t = 0;
            return Pa({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          at(r, [
            {
              key: "length",
              get: function () {
                return this[pt].getArrayLength_();
              },
              set: function (e) {
                this[pt].setArrayLength_(e);
              },
            },
            {
              key: t,
              get: function () {
                return "Array";
              },
            },
          ]),
          r
        );
      })(ga, Symbol.toStringTag, Symbol.iterator);
      function ba(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[pt].get_(e);
          },
          set: function (t) {
            this[pt].set_(e, t);
          },
        };
      }
      function Ea(e) {
        Le(ya.prototype, "" + e, ba(e));
      }
      function ka(e) {
        if (e > va) {
          for (var t = va; t < e + 100; t++) Ea(t);
          va = e;
        }
      }
      function _a(e, t, n) {
        return new ya(e, t, n);
      }
      function wa(e, t) {
        if ("object" == typeof e && null !== e) {
          if (qr(e)) return void 0 !== t && Oe(23), e[pt].atom_;
          if (ra(e)) return e[pt];
          if (ea(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || Oe(25, t, Sa(e)), n;
          }
          if (ca(e)) {
            if (!t) return Oe(26);
            var r = e[pt].values_.get(t);
            return r || Oe(27, t, Sa(e)), r;
          }
          if (vt(e) || yn(e) || Wn(e)) return e;
        } else if (Ue(e) && Wn(e[pt])) return e[pt];
        Oe(28);
      }
      function xa(e, t) {
        return (
          e || Oe(29),
          void 0 !== t
            ? xa(wa(e, t))
            : vt(e) || yn(e) || Wn(e) || ea(e) || ra(e)
            ? e
            : e[pt]
            ? e[pt]
            : void Oe(24, e)
        );
      }
      function Sa(e, t) {
        var n;
        if (void 0 !== t) n = wa(e, t);
        else {
          if (rr(e)) return e.name;
          n = ca(e) || ea(e) || ra(e) ? xa(e) : wa(e);
        }
        return n.name_;
      }
      Object.entries(Fr).forEach(function (e) {
        var t = e[0],
          n = e[1];
        "concat" !== t && qe(ya.prototype, t, n);
      }),
        ka(1e3);
      var Na = Ie.toString;
      function Ca(e, t, n) {
        return void 0 === n && (n = -1), Oa(e, t, n);
      }
      function Oa(e, t, n, r, a) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var l = typeof e;
        if ("function" !== l && "object" !== l && "object" != typeof t)
          return !1;
        var i = Na.call(e);
        if (i !== Na.call(t)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            );
          case "[object Map]":
          case "[object Set]":
            n >= 0 && n++;
        }
        (e = Ta(e)), (t = Ta(t));
        var o = "[object Array]" === i;
        if (!o) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var s = e.constructor,
            u = t.constructor;
          if (
            s !== u &&
            !(Ue(s) && s instanceof s && Ue(u) && u instanceof u) &&
            "constructor" in e &&
            "constructor" in t
          )
            return !1;
        }
        if (0 === n) return !1;
        n < 0 && (n = -1), (a = a || []);
        for (var c = (r = r || []).length; c--; )
          if (r[c] === e) return a[c] === t;
        if ((r.push(e), a.push(t), o)) {
          if ((c = e.length) !== t.length) return !1;
          for (; c--; ) if (!Oa(e[c], t[c], n - 1, r, a)) return !1;
        } else {
          var d,
            f = Object.keys(e);
          if (((c = f.length), Object.keys(t).length !== c)) return !1;
          for (; c--; )
            if (!tt(t, (d = f[c])) || !Oa(e[d], t[d], n - 1, r, a)) return !1;
        }
        return r.pop(), a.pop(), !0;
      }
      function Ta(e) {
        return qr(e)
          ? e.slice()
          : Ye(e) || ea(e) || Xe(e) || ra(e)
          ? Array.from(e.entries())
          : e;
      }
      function Pa(e) {
        return (e[Symbol.iterator] = ja), e;
      }
      function ja() {
        return this;
      }
      if (
        (["Symbol", "Map", "Set"].forEach(function (e) {
          void 0 === Pe()[e] &&
            Oe(
              "MobX requires global '" + e + "' to be available or polyfilled",
            );
        }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
              return (
                console.warn("[mobx.spy] Is a no-op in production builds"),
                function () {}
              );
            },
            extras: { getDebugName: Sa },
            $mobx: pt,
          }),
        !n.useState)
      )
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (
        !function (e, t, n) {
          var r = oa(e, n)[pt];
          zn();
          try {
            0,
              null != t ||
                (t = (function (e) {
                  return tt(e, dt) || qe(e, dt, lt({}, e[dt])), e[dt];
                })(e)),
              Ze(t).forEach(function (e) {
                return r.make_(e, t[e]);
              });
          } finally {
            Fn();
          }
          return e;
        }
      )
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
      var Ra = a(935);
      function La(e) {
        e();
      }
      function Ia(e) {
        return mr(e);
      }
      var Aa =
        "undefined" == typeof FinalizationRegistry
          ? void 0
          : FinalizationRegistry;
      function Ma(e) {
        return {
          reaction: e,
          mounted: !1,
          changedBeforeMount: !1,
          cleanAt: Date.now() + Da,
        };
      }
      var Da = 1e4;
      var za = function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      };
      var Fa = Aa
          ? (function (e) {
              var t = new Map(),
                n = 1,
                r = new e(function (e) {
                  var n = t.get(e);
                  n && (n.reaction.dispose(), t.delete(e));
                });
              return {
                addReactionToTrack: function (e, a, l) {
                  var i = n++;
                  return (
                    r.register(l, i, e),
                    (e.current = Ma(a)),
                    (e.current.finalizationRegistryCleanupToken = i),
                    t.set(i, e.current),
                    e.current
                  );
                },
                recordReactionAsCommitted: function (e) {
                  r.unregister(e),
                    e.current &&
                      e.current.finalizationRegistryCleanupToken &&
                      t.delete(e.current.finalizationRegistryCleanupToken);
                },
                forceCleanupTimerToRunNowForTests: function () {},
                resetCleanupScheduleForTests: function () {},
              };
            })(Aa)
          : (function () {
              var e,
                t = new Set();
              function n() {
                void 0 === e && (e = setTimeout(r, 1e4));
              }
              function r() {
                e = void 0;
                var r = Date.now();
                t.forEach(function (e) {
                  var n = e.current;
                  n &&
                    r >= n.cleanAt &&
                    (n.reaction.dispose(), (e.current = null), t.delete(e));
                }),
                  t.size > 0 && n();
              }
              return {
                addReactionToTrack: function (e, r, a) {
                  var l;
                  return (e.current = Ma(r)), (l = e), t.add(l), n(), e.current;
                },
                recordReactionAsCommitted: function (e) {
                  t.delete(e);
                },
                forceCleanupTimerToRunNowForTests: function () {
                  e && (clearTimeout(e), r());
                },
                resetCleanupScheduleForTests: function () {
                  var n, r;
                  if (t.size > 0) {
                    try {
                      for (var a = za(t), l = a.next(); !l.done; l = a.next()) {
                        var i = l.value,
                          o = i.current;
                        o && (o.reaction.dispose(), (i.current = null));
                      }
                    } catch (e) {
                      n = { error: e };
                    } finally {
                      try {
                        l && !l.done && (r = a.return) && r.call(a);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                    t.clear();
                  }
                  e && (clearTimeout(e), (e = void 0));
                },
              };
            })(),
        Ba = Fa.addReactionToTrack,
        Ha = Fa.recordReactionAsCommitted,
        Ua =
          (Fa.resetCleanupScheduleForTests,
          Fa.forceCleanupTimerToRunNowForTests,
          !1);
      function Va() {
        return Ua;
      }
      var Ka = function (e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          a,
          l = n.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = l.next()).done; )
            i.push(r.value);
        } catch (e) {
          a = { error: e };
        } finally {
          try {
            r && !r.done && (n = l.return) && n.call(l);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      };
      function $a(e) {
        return "observer".concat(e);
      }
      var Wa = function () {};
      function qa() {
        return new Wa();
      }
      function Qa(e, t) {
        if ((void 0 === t && (t = "observed"), Va())) return e();
        var r = Ka(n.useState(qa), 1)[0],
          a = Ka(n.useState(), 2)[1],
          l = function () {
            return a([]);
          },
          i = n.useRef(null);
        if (!i.current)
          var o = new Un($a(t), function () {
              s.mounted ? l() : (s.changedBeforeMount = !0);
            }),
            s = Ba(i, o, r);
        var u,
          c,
          d = i.current.reaction;
        if (
          (n.useDebugValue(d, Ia),
          n.useEffect(function () {
            return (
              Ha(i),
              i.current
                ? ((i.current.mounted = !0),
                  i.current.changedBeforeMount &&
                    ((i.current.changedBeforeMount = !1), l()))
                : ((i.current = {
                    reaction: new Un($a(t), function () {
                      l();
                    }),
                    mounted: !0,
                    changedBeforeMount: !1,
                    cleanAt: 1 / 0,
                  }),
                  l()),
              function () {
                i.current.reaction.dispose(), (i.current = null);
              }
            );
          }, []),
          d.track(function () {
            try {
              u = e();
            } catch (e) {
              c = e;
            }
          }),
          c)
        )
          throw c;
        return u;
      }
      var Ga = "function" == typeof Symbol && Symbol.for,
        Ya = Ga
          ? Symbol.for("react.forward_ref")
          : "function" == typeof n.forwardRef &&
            (0, n.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        Xa = Ga
          ? Symbol.for("react.memo")
          : "function" == typeof n.memo &&
            (0, n.memo)(function (e) {
              return null;
            }).$$typeof;
      function Ja(e, t) {
        var r;
        if (Xa && e.$$typeof === Xa)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        if (Va()) return e;
        var a =
            null !== (r = null == t ? void 0 : t.forwardRef) &&
            void 0 !== r &&
            r,
          l = e,
          i = e.displayName || e.name;
        if (
          Ya &&
          e.$$typeof === Ya &&
          ((a = !0), "function" != typeof (l = e.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var o,
          s,
          u = function (e, t) {
            return Qa(function () {
              return l(e, t);
            }, i);
          };
        return (
          "" !== i && (u.displayName = i),
          e.contextTypes && (u.contextTypes = e.contextTypes),
          a && (u = (0, n.forwardRef)(u)),
          (u = (0, n.memo)(u)),
          (o = e),
          (s = u),
          Object.keys(o).forEach(function (e) {
            Za[e] ||
              Object.defineProperty(
                s,
                e,
                Object.getOwnPropertyDescriptor(o, e),
              );
          }),
          u
        );
      }
      var Za = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
      function el(e, t) {
        return (0, n.useState)(function () {
          return Xt(e(), t, { autoBind: !0 });
        })[0];
      }
      !(function (e) {
        e || (e = La), dr({ reactionScheduler: e });
      })(Ra.unstable_batchedUpdates);
      var tl = { managerInstances: {} };
      function nl(e, t) {
        var r = (function () {
            var e = (function () {
              function e(t, n) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this._id = t),
                  (this._initCallback = n),
                  (this._initialized = !1),
                  (this._reactContext = null),
                  (this._ReactContextProvider = null),
                  (this._mobxStore = null);
              }
              var t, r, a;
              return (
                (t = e),
                (r = [
                  {
                    key: "getId",
                    value: function () {
                      return this._id;
                    },
                  },
                  {
                    key: "_initIfNeeded",
                    value: function () {
                      return (
                        this._initialized ||
                          ((this._reactContext = n.createContext(null)),
                          (this._ReactContextProvider =
                            this._reactContext.Provider),
                          (this._mobxStore = el(this._initCallback)),
                          (this._initialized = !0)),
                        this
                      );
                    },
                  },
                  {
                    key: "_reset",
                    value: function (e) {
                      return this._initCallback === e
                        ? this
                        : ((this._initCallback = e),
                          this._initialized
                            ? ((this._mobxStore = el(this._initCallback)), this)
                            : (this._initIfNeeded(), this));
                    },
                  },
                  {
                    key: "getProviderComponentAndValue",
                    value: function () {
                      return (
                        this._initIfNeeded(),
                        {
                          Provider: this._ReactContextProvider,
                          value: this._mobxStore,
                        }
                      );
                    },
                  },
                  {
                    key: "getContextHook",
                    value: function () {
                      return (
                        this._initIfNeeded(), n.useContext(this._reactContext)
                      );
                    },
                  },
                ]),
                r && Ce(t.prototype, r),
                a && Ce(t, a),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e
              );
            })();
            return e;
          })(),
          a = tl.managerInstances[e];
        return null == a
          ? ((tl.managerInstances[e] = new r(e, t)), tl.managerInstances[e])
          : (a._reset(t), a);
      }
      function rl(e) {
        return tl.managerInstances[e] || null;
      }
      var al = function (e) {
        var t = e.initCallback,
          r = e.storeId,
          a = e.children,
          l = nl(r || "default", t).getProviderComponentAndValue(),
          i = l.Provider,
          o = l.value;
        return n.createElement(i, { value: o }, a);
      };
      function ll(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function il(e, t) {
        if (e) {
          if ("string" == typeof e) return ll(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? ll(e, t)
              : void 0
          );
        }
      }
      function ol(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ll(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          il(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var sl = a(544).isNoObject,
        ul = function () {
          function e(e) {
            if (!Array.isArray(e) || e.some(sl))
              throw new Error(
                "setBasicBreadcrumbs() failed - invalid argument, expected object[]",
              );
            if (
              e.some(function (e) {
                var n = e.label,
                  r = e.url;
                return !1 === t(n) || !1 === t(r);
              })
            )
              throw new Error(
                "setBasicBreadcrumbs() failed - invalid argument, expected array of { label, url }",
              );
            this.basicBreadcrumbs = ol(e);
          }
          function t(e) {
            return "string" == typeof e && "strig" !== e;
          }
          return {
            language: null,
            browserConfig: {},
            paths: {},
            basicBreadcrumbs: [{ label: "KTH", url: "https://www.kth.se" }],
            setBasicBreadcrumbs: e,
            createBasicBreadcrumbs: function (e) {
              var n = e.hostLabel,
                r = e.hostUrl,
                a = e.baseLabel,
                l = e.baseUrl,
                i = [];
              t(n) && t(r)
                ? i.push({ label: n, url: r })
                : (console.warn(
                    "createBasicBreadcrumbs() did not get hostLabel and hostUrl, defaulting to www.kth.se and KTH",
                  ),
                  i.push({ label: "KTH", url: "https://www.kth.se" })),
                t(a) && t(l) && i.push({ label: a, url: l }),
                this.setBasicBreadcrumbs(i);
            },
            setLanguage: tr(function (e) {
              this.language = e;
            }),
            setBrowserConfig: tr(function (e) {
              this.browserConfig = e;
            }),
            setPaths: tr(function (e) {
              this.paths = e;
            }),
            setBreadcrumbs: tr(function (t) {
              e(t);
            }),
          };
        };
      var cl = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "default",
          t = rl(e),
          n = null == t;
        if (n) {
          var r = ul();
          return r;
        }
        return t.getContextHook();
      };
      var dl = 0;
      var fl = {};
      function ml(e) {
        return (
          fl[e] ||
            (fl[e] = (function (e) {
              if ("function" == typeof Symbol) return Symbol(e);
              var t = "__$mobx-react " + e + " (" + dl + ")";
              return dl++, t;
            })(e)),
          fl[e]
        );
      }
      function pl(e, t) {
        if (hl(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var a = 0; a < n.length; a++)
          if (!Object.hasOwnProperty.call(t, n[a]) || !hl(e[n[a]], t[n[a]]))
            return !1;
        return !0;
      }
      function hl(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function vl(e, t, n) {
        Object.hasOwnProperty.call(e, t)
          ? (e[t] = n)
          : Object.defineProperty(e, t, {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: n,
            });
      }
      var gl = ml("patchMixins"),
        yl = ml("patchedDefinition");
      function bl(e, t) {
        for (
          var n = this,
            r = arguments.length,
            a = new Array(r > 2 ? r - 2 : 0),
            l = 2;
          l < r;
          l++
        )
          a[l - 2] = arguments[l];
        t.locks++;
        try {
          var i;
          return null != e && (i = e.apply(this, a)), i;
        } finally {
          t.locks--,
            0 === t.locks &&
              t.methods.forEach(function (e) {
                e.apply(n, a);
              });
        }
      }
      function El(e, t) {
        return function () {
          for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          bl.call.apply(bl, [this, e, t].concat(r));
        };
      }
      function kl(e, t, n) {
        var r = (function (e, t) {
          var n = (e[gl] = e[gl] || {}),
            r = (n[t] = n[t] || {});
          return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
        })(e, t);
        r.methods.indexOf(n) < 0 && r.methods.push(n);
        var a = Object.getOwnPropertyDescriptor(e, t);
        if (!a || !a[yl]) {
          var l = e[t],
            i = _l(e, t, a ? a.enumerable : void 0, r, l);
          Object.defineProperty(e, t, i);
        }
      }
      function _l(e, t, n, r, a) {
        var l,
          i = El(a, r);
        return (
          ((l = {})[yl] = !0),
          (l.get = function () {
            return i;
          }),
          (l.set = function (a) {
            if (this === e) i = El(a, r);
            else {
              var l = _l(this, t, n, r, a);
              Object.defineProperty(this, t, l);
            }
          }),
          (l.configurable = !0),
          (l.enumerable = n),
          l
        );
      }
      var wl = pt || "$mobx",
        xl = ml("isMobXReactObserver"),
        Sl = ml("isUnmounted"),
        Nl = ml("skipRender"),
        Cl = ml("isForcingUpdate");
      function Ol(e) {
        var t = e.prototype;
        if (e[xl]) {
          var r = Tl(t);
          console.warn(
            "The provided component class (" +
              r +
              ")\n                has already been declared as an observer component.",
          );
        } else e[xl] = !0;
        if (t.componentWillReact)
          throw new Error(
            "The componentWillReact life-cycle event is no longer supported",
          );
        if (e.__proto__ !== n.PureComponent)
          if (t.shouldComponentUpdate) {
            if (t.shouldComponentUpdate !== jl)
              throw new Error(
                "It is not allowed to use shouldComponentUpdate in observer based components.",
              );
          } else t.shouldComponentUpdate = jl;
        Rl(t, "props"), Rl(t, "state"), e.contextType && Rl(t, "context");
        var a = t.render;
        if ("function" != typeof a) {
          var l = Tl(t);
          throw new Error(
            "[mobx-react] class component (" +
              l +
              ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
          );
        }
        return (
          (t.render = function () {
            return (this.render = Va() ? a : Pl.call(this, a)), this.render();
          }),
          kl(t, "componentDidMount", function () {
            (this[Sl] = !1),
              this.render[wl] || n.Component.prototype.forceUpdate.call(this);
          }),
          kl(t, "componentWillUnmount", function () {
            if (!Va()) {
              var e = this.render[wl];
              if (e) e.dispose(), (this.render[wl] = null);
              else {
                var t = Tl(this);
                console.warn(
                  "The reactive render of an observer class component (" +
                    t +
                    ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.",
                );
              }
              this[Sl] = !0;
            }
          }),
          e
        );
      }
      function Tl(e) {
        return (
          e.displayName ||
          e.name ||
          (e.constructor &&
            (e.constructor.displayName || e.constructor.name)) ||
          "<component>"
        );
      }
      function Pl(e) {
        var t = this;
        vl(this, Nl, !1), vl(this, Cl, !1);
        var r = Tl(this),
          a = e.bind(this),
          l = !1;
        return function e() {
          var i;
          l = !1;
          var o =
              null != (i = e[wl])
                ? i
                : (e[wl] = (function () {
                    var e = new Un(r + ".render()", function () {
                      if (!l && ((l = !0), !0 !== t[Sl])) {
                        var r = !0;
                        try {
                          vl(t, Cl, !0),
                            t[Nl] || n.Component.prototype.forceUpdate.call(t),
                            (r = !1);
                        } finally {
                          vl(t, Cl, !1),
                            r && (e.dispose(), (t.render[wl] = null));
                        }
                      }
                    });
                    return (e.reactComponent = t), e;
                  })()),
            s = void 0,
            u = void 0;
          if (
            (o.track(function () {
              try {
                u = cn(!1, a);
              } catch (e) {
                s = e;
              }
            }),
            s)
          )
            throw s;
          return u;
        };
      }
      function jl(e, t) {
        return (
          Va() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== t || !pl(this.props, e)
        );
      }
      function Rl(e, t) {
        var n = ml("reactProp_" + t + "_valueHolder"),
          r = ml("reactProp_" + t + "_atomHolder");
        function a() {
          return this[r] || vl(this, r, gt("reactive " + t)), this[r];
        }
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var e = !1;
            return (
              On && Tn && (e = On(!0)),
              a.call(this).reportObserved(),
              On && Tn && Tn(e),
              this[n]
            );
          },
          set: function (e) {
            this[Cl] || pl(this[n], e)
              ? vl(this, n, e)
              : (vl(this, n, e),
                vl(this, Nl, !0),
                a.call(this).reportChanged(),
                vl(this, Nl, !1));
          },
        });
      }
      function Ll(e) {
        return (
          !0 === e.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
            ),
          Object.prototype.isPrototypeOf.call(n.Component, e) ||
          Object.prototype.isPrototypeOf.call(n.PureComponent, e)
            ? Ol(e)
            : Ja(e)
        );
      }
      if (!n.Component)
        throw new Error("mobx-react requires React to be available");
      if (!Xt) throw new Error("mobx-react requires mobx to be available");
      var Il = a(750),
        Al = a.n(Il);
      function Ml(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l,
                i,
                o = [],
                s = !0,
                u = !1;
              try {
                if (((l = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = l.call(n)).done) &&
                    (o.push(r.value), o.length !== t);
                    s = !0
                  );
              } catch (e) {
                (u = !0), (a = e);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          il(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var Dl = function () {
          var e = Ml((0, n.useState)(!1), 2),
            t = e[0],
            r = e[1],
            a = (0, n.useRef)(null),
            l = function () {
              return r(!0);
            },
            i = function () {
              return r(!1);
            };
          return (
            (0, n.useEffect)(
              function () {
                var e = a.current;
                if (e)
                  return (
                    e.addEventListener("mouseover", l),
                    e.addEventListener("mouseout", i),
                    function () {
                      e.removeEventListener("mouseover", l),
                        e.removeEventListener("mouseout", i);
                    }
                  );
              },
              [a.current],
            ),
            [a, t]
          );
        },
        zl = function (e) {
          var t = e.snippet,
            r = Ml((0, n.useState)(!1), 2),
            a = r[0],
            l = r[1],
            i = Ml(Dl(), 2),
            o = i[0],
            s = i[1];
          if (!t) return null;
          var u = function () {
            return n.createElement(
              "div",
              { className: "tooltip bs-tooltip-bottom code-snippet__tooltip" },
              n.createElement("div", { className: "arrow" }),
              n.createElement(
                "div",
                { className: "tooltip-inner" },
                a ? "Copied!" : "Copy to clipboard",
              ),
            );
          };
          return (
            !s && a && l(!1),
            n.createElement(
              "div",
              { className: "code-snippet" },
              n.createElement(
                "div",
                { className: "code-snippet__container" },
                n.createElement(
                  "pre",
                  null,
                  n.createElement("code", { className: "language-html" }, t),
                ),
                n.createElement(
                  "div",
                  { className: "code-snippet__btn-container", ref: o },
                  n.createElement(
                    "button",
                    {
                      type: "button",
                      className: "btn",
                      onClick: function () {
                        (document.oncopy = function (e) {
                          var n = t.replace(/^\$/g, "");
                          e.clipboardData.setData("text/plain", n),
                            e.preventDefault(),
                            (document.oncopy = void 0);
                        }),
                          document.execCommand("copy"),
                          l(!0);
                      },
                    },
                    "Copy",
                  ),
                  s ? n.createElement(u, null) : null,
                ),
              ),
            )
          );
        },
        Fl = function (e) {
          var t = e.type,
            r = e.disabled,
            a = e.children,
            l = e.block,
            i = e.icon,
            o = l
              ? "btn btn-".concat(t).concat(i ? " " + i : "", " btn-block")
              : "btn btn-".concat(t).concat(i ? " " + i : "");
          return n.createElement(
            "button",
            { type: "button", className: o, disabled: r },
            a,
          );
        },
        Bl = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Buttons"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of buttons in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/knappar-och-\nlankar-1.952154",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "div",
              { className: "itemContainer" },
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Primary button"),
                n.createElement(Fl, { type: "primary" }, "Primary"),
                n.createElement(zl, {
                  snippet: '<button class="btn btn-primary">Primary</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Ok button"),
                n.createElement(Fl, { type: "success" }, "Save"),
                n.createElement(zl, {
                  snippet: '<button class="btn btn-success">Save</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Secondary button"),
                n.createElement(Fl, { type: "secondary" }, "Secondary"),
                n.createElement(zl, {
                  snippet:
                    '<button class="btn btn-secondary">Secondary</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Danger button"),
                n.createElement(Fl, { type: "danger" }, "Delete"),
                n.createElement(zl, {
                  snippet: '<button class="btn btn-danger">Delete</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Go-to button"),
                n.createElement(Fl, { type: "primary", icon: "next" }, "Go to"),
                n.createElement(zl, {
                  snippet:
                    ' <button type="button" class="btn btn-primary next">Go to</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Previous button"),
                n.createElement(
                  Fl,
                  { type: "secondary", icon: "back" },
                  "Previous",
                ),
                n.createElement(zl, {
                  snippet:
                    '<button class="btn btn-secondary back">Previous</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Next button"),
                n.createElement(Fl, { type: "success", icon: "next" }, "Next"),
                n.createElement(zl, {
                  snippet: '<button class="btn btn-success next">Next</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Disabled button"),
                n.createElement(
                  Fl,
                  { type: "primary", disabled: !0 },
                  "Primary button",
                ),
                n.createElement(zl, {
                  snippet:
                    '<button class="btn btn-primary" disabled>Disabled button</button>',
                }),
              ),
              n.createElement(
                "div",
                null,
                n.createElement("h2", null, "Block level buttons"),
                n.createElement(
                  Fl,
                  { type: "primary", block: !0 },
                  "Block level button",
                ),
                n.createElement(zl, {
                  snippet:
                    '<button class="btn btn-primary btn-block">Block level button</button>',
                }),
                n.createElement(
                  Fl,
                  { type: "secondary", block: !0 },
                  "Block level button",
                ),
                n.createElement(zl, {
                  snippet:
                    '<button class="btn btn-secondary btn-block">Block level button</button>',
                }),
              ),
            ),
          );
        },
        Hl = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Bl, null));
        }),
        Ul = function () {
          return n.createElement(
            "table",
            { className: "table" },
            n.createElement("caption", null, "Optional Table Caption"),
            n.createElement(
              "thead",
              null,
              n.createElement(
                "tr",
                null,
                n.createElement("th", { scope: "col" }, "#"),
                n.createElement("th", { scope: "col" }, "Col 1"),
                n.createElement("th", { scope: "col" }, "Col 2"),
                n.createElement("th", { scope: "col" }, "Col 3"),
              ),
            ),
            n.createElement(
              "tbody",
              null,
              n.createElement(
                "tr",
                null,
                n.createElement("th", { scope: "row" }, "1"),
                n.createElement("td", null, "Lorem ipsum"),
                n.createElement("td", null, "Dolor sit amet"),
                n.createElement("td", null, "Consectetur adipiscing elit"),
              ),
              n.createElement(
                "tr",
                null,
                n.createElement("th", { scope: "row" }, "2"),
                n.createElement("td", null, "Lorem ipsum"),
                n.createElement("td", null, "Dolor sit amet"),
                n.createElement("td", null, "Consectetur adipiscing elit"),
              ),
              n.createElement(
                "tr",
                null,
                n.createElement("th", { scope: "row" }, "3"),
                n.createElement("td", null, "Lorem ipsum"),
                n.createElement("td", null, "Dolor sit amet"),
                n.createElement("td", null, "Consectetur adipiscing elit"),
              ),
            ),
          );
        },
        Vl = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Tabeller"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of tables in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/tabeller-1.1005514",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(Ul, null),
            n.createElement(zl, {
              snippet:
                '<table class="table">\n  <caption>Optional Table Caption</caption>\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">Col 1</th>\n      <th scope="col">Col 2</th>\n      <th scope="col">Col 3</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Lorem ipsum</td>\n      <td>Dolor sit amet</td>\n      <td>Consectetur adipiscing elit</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Lorem ipsum</td>\n      <td>Dolor sit amet</td>\n      <td>Consectetur adipiscing elit</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td>Lorem ipsum</td>\n      <td>Dolor sit amet</td>\n      <td>Consectetur adipiscing elit</td>\n    </tr>\n  </tbody>\n</table>',
            }),
          );
        },
        Kl = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Vl, null));
        }),
        $l = function (e) {
          var t = e.code,
            r = e.displayName,
            a = { backgroundColor: t };
          return n.createElement(
            "div",
            { className: "itemBox" },
            n.createElement("div", { className: "colorBox", style: a }),
            n.createElement("div", null, r),
            n.createElement("div", null, t),
          );
        },
        Wl = function () {
          var e = [
              { displayName: "$grey", code: "#65656c" },
              { displayName: "$blue", code: "#007fae" },
              { displayName: "$green", code: "#62922e" },
              { displayName: "$pink", code: "#d02f80" },
            ].map(function (e) {
              return n.createElement($l, {
                displayName: e.displayName,
                key: e.displayName,
                code: e.code,
              });
            }),
            t = [
              { displayName: "$white", code: "#fff" },
              { displayName: "$lightGrey", code: "#f6f6f6" },
            ].map(function (e) {
              return n.createElement($l, {
                displayName: e.displayName,
                key: e.displayName,
                code: e.code,
              });
            }),
            r = [
              { displayName: "$infoYellow", code: "#fcf8e3" },
              { displayName: "$infoYellowIcon", code: "#fab919" },
            ].map(function (e) {
              return n.createElement($l, {
                displayName: e.displayName,
                key: e.displayName,
                code: e.code,
              });
            }),
            a = [{ displayName: "$infoGreen", code: "#dff0d8" }].map(
              function (e) {
                return n.createElement($l, {
                  displayName: e.displayName,
                  key: e.displayName,
                  code: e.code,
                });
              },
            ),
            l = [
              { displayName: "$infoRed", code: "#f2dede" },
              { displayName: "$red", code: "#d4351c" },
            ].map(function (e) {
              return n.createElement($l, {
                displayName: e.displayName,
                key: e.displayName,
                code: e.code,
              });
            }),
            i = [
              { displayName: "$blueHover", code: "#006388" },
              { displayName: "$greenHover", code: "#4e7425" },
              { displayName: "$redHover", code: "#b52c17" },
            ].map(function (e) {
              return n.createElement($l, {
                displayName: e.displayName,
                key: e.displayName,
                code: e.code,
              });
            }),
            o = [
              { displayName: "$black", code: "#000" },
              { displayName: "$white", code: "#fff" },
              { displayName: "$linkBlue", code: "#006cb7" },
            ].map(function (e) {
              return n.createElement($l, {
                displayName: e.displayName,
                key: e.displayName,
                code: e.code,
              });
            }),
            s = [
              { displayName: "$borderGrey", code: "#d4d4d4" },
              { displayName: "$grey", code: "#65656c" },
            ].map(function (e) {
              return n.createElement($l, {
                displayName: e.displayName,
                key: e.displayName,
                code: e.code,
              });
            });
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Colors"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of colors in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/farger-\n1.952147",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement("h2", null, "Dark background"),
            n.createElement("div", { className: "gridItemContainer" }, e),
            n.createElement("h2", null, "Light background"),
            n.createElement("div", { className: "gridItemContainer" }, t),
            n.createElement("h2", null, "Information and alert"),
            n.createElement("div", { className: "gridItemContainer" }, r),
            n.createElement("h2", null, "Success"),
            n.createElement("div", { className: "gridItemContainer" }, a),
            n.createElement("h2", null, "Error"),
            n.createElement("div", { className: "gridItemContainer" }, l),
            n.createElement("h2", null, "Hover"),
            n.createElement("div", { className: "gridItemContainer" }, i),
            n.createElement("h2", null, "Text"),
            n.createElement("div", { className: "gridItemContainer" }, o),
            n.createElement("h2", null, "Border"),
            n.createElement("div", { className: "gridItemContainer" }, s),
          );
        },
        ql = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Wl, null));
        }),
        Ql = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Icons"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of icons in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/ikoner-\n1.962665",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Alerts, Information"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/error-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/error-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/success-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/success-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/information-black.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/information-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/open-modal-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/open-modal-blue.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Navigation, search"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/search-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/search-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/arrow-next-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-next-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-next-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/arrow-back-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-back-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-back-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/arrow-expand-black.svg",
                      alt: "",
                      height: "14",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-expand-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-expand-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-expand-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/arrow-collapse-black.svg",
                      alt: "",
                      width: "14",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-collapse-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-collapse-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-collapse-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/arrow-up-down-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-up-down-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-up-down-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/arrow-maximize-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-maximize-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/arrow-minimize-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/arrow-minimize-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/menu-black.svg",
                      alt: "",
                      width: "32",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/menu-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/link-black.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/link-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/link-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/open-window-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/open-window-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/open-window-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/open-window-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/close-black.svg",
                      alt: "",
                      width: "14",
                      height: "14",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/close-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/close-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/back-to-top-blue.svg",
                      alt: "",
                      width: "42",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/back-to-top-blue.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Table"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    { className: "whiteIconCell" },
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/sort-ascending-white.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/sort-ascending-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    { className: "whiteIconCell" },
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/sort-descending-white.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/sort-descending-white.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Pagination"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/page-first-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/page-first-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/gallery-back-black.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/gallery-back-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/gallery-next-black.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/gallery-next-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/gallery-active-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/gallery-active-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/gallery-passive-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/gallery-passive-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/page-last-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/page-last-black.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Media"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/gallery-pause-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/gallery-pause-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/gallery-play-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/gallery-play-black.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Document, files"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/folder-blue.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/folder-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/folder-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/file-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/file-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/file-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/text-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/text-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/text-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/image-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/image-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/image-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/audio-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/audio-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/audio-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/video-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/video-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/video-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/code-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/code-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/code-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/download-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/download-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/download-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/upload-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/upload-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/upload-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/doc-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/doc-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/doc-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/xls-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/xls-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/xls-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/ppt-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/ppt-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/ppt-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/pdf-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/pdf-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/pdf-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/compressed-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/compressed-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/compressed-white.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Language"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/language-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/language-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/language-white.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Edit, form"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/edit-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/edit-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/delete-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/delete-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/copy-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/copy-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/calculate-blue.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/calculate-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/settings-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/settings-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/print-blue.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/print-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/favorite-active-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/favorite-active-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/favorite-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/favorite-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/date-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/date-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/date-blue.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/date-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/asterisk-black.svg",
                      alt: "",
                      height: "10",
                      width: "10",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/asterisk-black.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/eye-black.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/eye-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/eye-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/eye-off-black.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/eye-off-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/eye-off-blue.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Social, users"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/thumb-up-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/thumb-up-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/thumb-down-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/thumb-down-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/quote-black.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/quote-black.svg)",
                    ),
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/quote-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    { className: "whiteIconCell" },
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/notification-white.svg",
                      alt: "",
                      height: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/notification-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    { className: "whiteIconCell" },
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/message-white.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/message-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    { className: "whiteIconCell" },
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/email-white.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/email-white.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/user-management-blue.svg",
                      alt: "",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/user-management-blue.svg)",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(
              "table",
              { className: "table iconsTable" },
              n.createElement("caption", null, "Other"),
              n.createElement(
                "thead",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement("th", { scope: "col" }, "Icon"),
                  n.createElement("th", { scope: "col" }, "Path"),
                ),
              ),
              n.createElement(
                "tbody",
                null,
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/scale-blue.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/scale-blue.svg)",
                    ),
                  ),
                ),
                n.createElement(
                  "tr",
                  null,
                  n.createElement(
                    "td",
                    null,
                    n.createElement("img", {
                      src: "/style/static/kth-style/img/kth-style/icons/check-black.svg",
                      alt: "",
                      height: "20",
                      width: "20",
                    }),
                  ),
                  n.createElement(
                    "td",
                    null,
                    n.createElement(
                      "pre",
                      null,
                      "url(/style/static/kth-style/img/kth-style/icons/check-black.svg)",
                    ),
                  ),
                ),
              ),
            ),
          );
        },
        Gl = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Ql, null));
        }),
        Yl = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Structure and layout"),
            n.createElement(
              "p",
              null,
              "See the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/struktur-och-layout",
                },
                "KTH Style guide",
              ),
              " ",
              "for guidance on how different parts of the pages should look like and what they should contain.",
            ),
            n.createElement(
              "p",
              null,
              "The guidelines help you set a proper page layout and structure your content. Here you will find specified size of margins and columns, concept for navigation, responsive behavior, and other overall basics on styling web aplications at KTH.",
            ),
            n.createElement(
              "p",
              null,
              "And do not miss the parts that concern the elements required for the pages to be accessible!",
            ),
          );
        },
        Xl = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Yl, null));
        }),
        Jl = function (e) {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Typography"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of different text formats in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/rubriker-och-\nbrodtext-1.952152",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "p",
              null,
              "The Sass mixins which is listed below is only needed if you want the styling on a different element than the element here. For example: ",
              n.createElement("code", null, "p { @include t4; }"),
              " will give the paragraph element the h4 styling. Mixins could also be used instead of the class names below. No classes nor mixins is required for standard elements like h1,h2,h3,h4 and p. Just for some variants of these.",
            ),
            n.createElement("h2", null, "Headings"),
            n.createElement(
              "div",
              { className: "itemContainer" },
              n.createElement(
                "div",
                { className: "itemBox typographyItem border" },
                n.createElement("h1", { className: "t1" }, "H1 heading"),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    "<h1></h1>",
                  ),
                ),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "Sass: "),
                  n.createElement("code", null, "h1 ", "{ @include t1; }"),
                ),
              ),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border" },
                n.createElement(
                  "header",
                  { role: "presentation" },
                  n.createElement(
                    "h1",
                    {
                      id: "page-heading",
                      "aria-labelledby": "page-heading page-sub-heading",
                    },
                    "Headline",
                  ),
                  n.createElement(
                    "p",
                    { id: "page-sub-heading", "aria-hidden": "true" },
                    "Subheading that clarifies the main heading",
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<header role="presentation">\n  <h1 id="page-heading" aria-labelledby="page-heading page-sub-heading">Headline</h1>\n  <p id="page-sub-heading" aria-hidden="true">Sub headline</p>\n</header>',
                }),
              ),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border no-top-pad" },
                n.createElement("h2", { className: "t2" }, "H2 heading"),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    "<h2></h2>",
                  ),
                ),
              ),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border" },
                n.createElement("h2", { className: "t24" }, "H2 sub block"),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    "<h2></h2>",
                  ),
                ),
              ),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border no-top-pad" },
                n.createElement("h3", { className: "t3" }, "H3 heading"),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    "<h3></h3>",
                  ),
                ),
              ),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border no-top-pad" },
                n.createElement("h4", { className: "t4" }, "H4 heading"),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    "<h4></h4>",
                  ),
                ),
              ),
              n.createElement("h2", { className: "t2" }, "Paragraphs"),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border" },
                n.createElement(
                  "div",
                  { className: "paragraphs" },
                  n.createElement(
                    "p",
                    null,
                    "P body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  ),
                ),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    '<div class="paragraphs"><p></p></div>',
                  ),
                ),
              ),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border" },
                n.createElement(
                  "p",
                  { className: "t11" },
                  "P short text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    "<p></p>",
                  ),
                ),
              ),
              n.createElement(
                "div",
                { className: "itemBox typographyItem border" },
                n.createElement(
                  "p",
                  { className: "lead" },
                  "P lead text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ),
                n.createElement(
                  "p",
                  null,
                  n.createElement("strong", null, "HTML: "),
                  n.createElement(
                    "code",
                    { className: "language-html" },
                    '<p class="lead"></p>',
                  ),
                ),
              ),
            ),
          );
        },
        Zl = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Jl, null));
        }),
        ei = function (e) {
          var t = e.title,
            r = e.className,
            a = e.children,
            l = e.color;
          return n.createElement(
            "details",
            null,
            n.createElement(
              "summary",
              { className: "".concat(l || "blue").concat(r ? " " + r : "") },
              t,
            ),
            a,
          );
        },
        ti = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Collapse"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of collapse elements in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/collapse-\n1.963801",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "p",
              null,
              "Collapse elements show / hides an area with content. Here do we show three examples, one based on a react component and the other two are based on native HTML.",
            ),
            n.createElement("h2", null, "Collapse based on a React component"),
            n.createElement(
              "p",
              null,
              "This example is based on a React component. The component takes the following properties: title, className, children and color.",
            ),
            n.createElement(
              ei,
              { title: "Collapse example (React)" },
              n.createElement(
                "p",
                null,
                "This is some text inside the collapse element",
              ),
            ),
            n.createElement(zl, {
              snippet:
                '<details>\n  <summary class="blue">Collapse example (React)</summary>\n  <p>This is some text inside the collapse element</p>\n</details>',
            }),
            n.createElement("h2", null, "Collapse example blue (Native HTML)"),
            n.createElement(
              "details",
              null,
              n.createElement(
                "summary",
                { className: "blue" },
                "Collapse example blue (Native HTML)",
              ),
              n.createElement(
                "ul",
                { className: "link-list" },
                n.createElement(
                  "li",
                  null,
                  n.createElement(
                    "a",
                    { href: "https://www.kth.se" },
                    "This is a link in a list",
                  ),
                ),
                n.createElement(
                  "li",
                  null,
                  n.createElement(
                    "a",
                    { href: "https://www.kth.se" },
                    "This is a link in a list",
                  ),
                ),
                n.createElement(
                  "li",
                  null,
                  n.createElement(
                    "a",
                    { href: "https://www.kth.se" },
                    "This is a link in a list",
                  ),
                ),
                n.createElement(
                  "li",
                  null,
                  n.createElement(
                    "a",
                    { href: "https://www.kth.se" },
                    "This is a link in a list",
                  ),
                ),
              ),
              n.createElement(
                "p",
                null,
                "This is some text inside the collapse element",
              ),
            ),
            n.createElement(zl, {
              snippet:
                '<details>\n  <summary class="blue">Collapse example (Native HTML)</summary>\n  <p>This is some text inside the collapse element</p>\n</details>',
            }),
            n.createElement("h2", null, "Collapse example white (Native HTML)"),
            n.createElement(
              "details",
              null,
              n.createElement(
                "summary",
                { className: "white" },
                "Collapse example white (Native HTML)",
              ),
              n.createElement(
                "p",
                null,
                "This is some text inside the collapse element",
              ),
            ),
            n.createElement(zl, {
              snippet:
                '<details>\n  <summary class="white">Collapse example (Native HTML)</summary>\n  <p>This is some text inside the collapse element</p>\n</details>',
            }),
          );
        },
        ni = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(ti, null));
        }),
        ri = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Forms"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of forms and their elements in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/formular-\n1.952156",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "div",
              { className: "itemContainer" },
              n.createElement(
                "div",
                { className: "form" },
                n.createElement("h2", null, "Form controls"),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleInputText1",
                      },
                      "Text input",
                    ),
                    n.createElement("input", {
                      type: "text",
                      className: "form-control",
                      id: "exampleInputText1",
                    }),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="yourElementId">Text input</label>\n    <input type="text" class="form-control" id="yourElementId"></input>\n  </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleInputNumber",
                      },
                      "Number input",
                    ),
                    n.createElement("input", {
                      type: "number",
                      className: "form-control",
                      id: "exampleInputNumber",
                    }),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleInputNumber">Number input</label>\n    <input type="number" class="form-control" id="exampleInputNumber"></input>\n  </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleInputDate",
                      },
                      "Date input",
                    ),
                    n.createElement("input", {
                      type: "date",
                      className: "form-control",
                      id: "exampleInputDate",
                    }),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleInputDate">Dte input</label>\n    <input type="date" class="form-control" id="exampleInputDate"></input>\n  </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleInputPassword1",
                      },
                      "Password",
                    ),
                    n.createElement("input", {
                      type: "password",
                      className: "form-control",
                      id: "exampleInputPassword1",
                      placeholder: "Password",
                    }),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleInputPassword1">Password</label>\n    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>\n  </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleFormControlInput1",
                      },
                      "Email address",
                    ),
                    n.createElement("input", {
                      type: "email",
                      className: "form-control",
                      id: "exampleFormControlInput1",
                      placeholder: "name@example.com",
                    }),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="yourElementId">Email address</label>\n    <input type="email" class="form-control" id="yourElementId" placeholder="name@example.com"></input>\n  </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleFormControlSelect1",
                      },
                      "Select",
                    ),
                    n.createElement(
                      "select",
                      {
                        defaultValue: "undefined",
                        className: "form-select",
                        id: "exampleFormControlSelect1",
                        "aria-label": "Välj något",
                      },
                      n.createElement(
                        "option",
                        { value: "undefined" },
                        "Välj...",
                      ),
                      n.createElement("option", null, "1"),
                      n.createElement("option", null, "2"),
                      n.createElement("option", null, "3"),
                    ),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleFormControlSelect1">Example select</label>\n    <select class="form-select" id="exampleFormControlSelect1" aria-label="Välj något">\n      <option selected>Välj...</option>\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n  </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleFormControlTextarea1",
                      },
                      "Textarea",
                    ),
                    n.createElement("textarea", {
                      className: "form-control",
                      id: "exampleFormControlTextarea1",
                      rows: "3",
                    }),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="yourElementId">Example textarea</label>\n    <textarea class="form-control" id="yourElementId" rows="3"></textarea>\n  </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleFormControlCheckboxes",
                      },
                      "Checkboxes",
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "checkbox",
                        className: "form-check-input",
                        id: "exampleCheck1",
                      }),
                      n.createElement(
                        "label",
                        {
                          className: "form-control-label",
                          htmlFor: "exampleCheck1",
                        },
                        "Check me out",
                      ),
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "checkbox",
                        className: "form-check-input",
                        id: "exampleCheck2",
                      }),
                      n.createElement(
                        "label",
                        {
                          className: "form-control-label",
                          htmlFor: "exampleCheck2",
                        },
                        "Check me out",
                      ),
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "checkbox",
                        className: "form-check-input",
                        id: "exampleCheck3",
                      }),
                      n.createElement(
                        "label",
                        {
                          className: "form-control-label",
                          htmlFor: "exampleCheck3",
                        },
                        "Check me out",
                      ),
                    ),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n    <div className="form-group">\n      <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">\n        Checkboxes\n      </label>\n      <div class="form-check form-group">\n        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>\n        <label class="form-control-label" for="exampleCheck1">Check me out</label>\n      </div>\n      <div class="form-check form-group">\n        <input type="checkbox" class="form-check-input" id="exampleCheck2"></input>\n        <label class="form-control-label" for="exampleCheck2">Check me out</label>\n      </div>\n      <div class="form-check form-group">\n        <input type="checkbox" class="form-check-input" id="exampleCheck3"></input>\n        <label class="form-control-label" for="exampleCheck3">Check me out</label>\n      </div>\n    </div>\n</form>',
                }),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "div",
                    { className: "form-group" },
                    n.createElement(
                      "label",
                      {
                        className: "form-control-label",
                        htmlFor: "exampleFormControlRadioButtons",
                      },
                      "Radio buttons",
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "radio",
                        className: "form-check-input",
                        name: "example2",
                        value: "Option 1",
                        id: "exampleRadios1",
                      }),
                      n.createElement(
                        "label",
                        {
                          className: "form-control-label",
                          htmlFor: "exampleRadios1",
                        },
                        "Option 1",
                      ),
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "radio",
                        className: "form-check-input",
                        name: "example2",
                        value: "Option 2",
                        id: "exampleRadios2",
                      }),
                      n.createElement(
                        "label",
                        {
                          className: "form-control-label",
                          htmlFor: "exampleRadios2",
                        },
                        "Option 2",
                      ),
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "radio",
                        className: "form-check-input",
                        name: "example2",
                        value: "Option 3",
                        id: "exampleRadios3",
                      }),
                      n.createElement(
                        "label",
                        {
                          className: "form-control-label",
                          htmlFor: "exampleRadios3",
                        },
                        "Option 3",
                      ),
                    ),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <div className="form-group">\n    <label className="form-control-label" htmlFor="exampleFormControlRadioButtons">\n      Radio buttons\n    </label>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example2" value="Option 1" id="exampleRadios1"/>\n      <label class="form-control-label" for="exampleRadios1">Option 1</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example2" value="Option 2" id="exampleRadios2"/>\n      <label class="form-control-label" for="exampleRadios2">Option 2</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example2" value="Option 3" id="exampleRadios3"/>\n      <label class="form-control-label" for="exampleRadios3">Option 3</label>\n    </div>\n  </div>\n</form>',
                }),
                n.createElement(
                  "h2",
                  null,
                  "Group related elements with fieldset and legend tags",
                ),
                n.createElement(
                  "form",
                  null,
                  n.createElement(
                    "fieldset",
                    null,
                    n.createElement(
                      "legend",
                      null,
                      "Choose one of the following options",
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "radio",
                        className: "form-check-input",
                        name: "example3",
                        value: "Option 1",
                        id: "radio1",
                      }),
                      n.createElement(
                        "label",
                        { className: "form-control-label", htmlFor: "radio1" },
                        "Option 1",
                      ),
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "radio",
                        className: "form-check-input",
                        name: "example3",
                        value: "Option 2",
                        id: "radio2",
                      }),
                      n.createElement(
                        "label",
                        { className: "form-control-label", htmlFor: "radio2" },
                        "Option 2",
                      ),
                    ),
                    n.createElement(
                      "div",
                      { className: "form-check form-group" },
                      n.createElement("input", {
                        type: "radio",
                        className: "form-check-input",
                        name: "example3",
                        value: "Option 3",
                        id: "radio3",
                      }),
                      n.createElement(
                        "label",
                        { className: "form-control-label", htmlFor: "radio3" },
                        "Option 3",
                      ),
                    ),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<form>\n  <fieldset>\n    <legend>Choose one of the following options</legend>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example3" value="Option 1" id="radio1"/>\n      <label class="form-control-label" for="radio1">Option 1</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example3" value="Option 2" id="radio2"/>\n      <label class="form-control-label" for="radio2">Option 2</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example3" value="Option 3" id="radio3"/>\n      <label class="form-control-label" for="radio3">Option 3</label>\n    </div>\n  </fieldset>\n</form>',
                }),
              ),
            ),
          );
        },
        ai = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(ri, null));
        }),
        li = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "How to use KTH Style in your project"),
            n.createElement("h2", null, "General description"),
            n.createElement(
              "p",
              null,
              "The ",
              n.createElement(
                "a",
                { href: "https://www.npmjs.com/package/kth-style" },
                "kth-style package",
              ),
              " is a npm package with resources for projects that should follow the look and feel of the KTH design. Below is a description of what the package contains and how to retrieve it from NPM.",
            ),
            n.createElement(
              "h3",
              null,
              "The structure and contents of the package",
            ),
            "The distribution folder has the structure shown below and contains css, image, javascript and scss resources which can be used in the parent project.",
            n.createElement(zl, {
              snippet:
                "kth-style\n  |-- dist\n    |-- css\n    |--img\n    |--js\n    |--kth-style-scss.zip",
            }),
            n.createElement(
              "p",
              null,
              "To download the kth-style package from npmjs.org you need to install the Node Package Manager (NPM). Instructions on how to do that can be found on this page:",
              " ",
              n.createElement(
                "a",
                { href: "https://www.npmjs.com/get-npm" },
                "https://www.npmjs.com/get-npm",
              ),
            ),
            n.createElement(
              "p",
              null,
              "When you have that installed, run the following command in your project root. This will create a folder named node_modules/kth-style.",
            ),
            n.createElement(zl, { snippet: "$ npm i -S kth-style" }),
            n.createElement(
              "h3",
              null,
              "Linking to static resouces from the kth-style package",
            ),
            n.createElement(
              "p",
              null,
              "If you just want to reference resources in the node_modules/kth-style package. Eg. from scss files.",
            ),
            n.createElement(zl, {
              snippet:
                "@import '../../node_modules/kth-style/public/sass/variables/fonts';",
            }),
            n.createElement(zl, {
              snippet:
                "background-image: url(../../node_modules/kth-style/dist/img/kth-style/icons/arrow-back-black.svg);",
            }),
            n.createElement(
              "h3",
              null,
              "Use the scss resources as part of your project's local transpilation",
            ),
            n.createElement(
              "p",
              null,
              "If you want to use the scss resources in your local project just import them in your scss files so you can use all the colors and other variables directly in your own styling.",
            ),
            n.createElement("h2", null, "Use in Node.js projects"),
            n.createElement(
              "p",
              null,
              "To use KTH-style in a Node.JS project you can look at the node template project",
              " ",
              n.createElement(
                "a",
                { href: "https://github.com/KTH/node-web" },
                "node-web",
              ),
              " or any of the projects that are based on node-web for reference.",
            ),
            n.createElement("p", null, "Install kth-style by typing:"),
            n.createElement(zl, { snippet: "$ npm i -S kth-style" }),
            n.createElement(
              "p",
              null,
              "This will add the kth-style package to your dependencies in you package.json file and into the node_modules folder.",
            ),
            n.createElement("h3", null, "Serving static files"),
            n.createElement(
              "h4",
              null,
              "If '@kth/server' module is used as a server",
            ),
            n.createElement("p", null, "In file server/server.js:"),
            n.createElement(zl, {
              snippet:
                "const path = require('path')\nconst express = require('express')\nconst server = require('@kth/server')\n\n// Now read the server config etc.\nconst config = require('./configuration').server\n\nserver.use(config.proxyPrefixPath.uri + '/static/kth-style', express.static('./node_modules/kth-style/dist'))",
            }),
            n.createElement("h4", null, "If 'express' module is used"),
            n.createElement("p", null, "In file server/server.js:"),
            n.createElement(zl, {
              snippet:
                "const path = require('path')\nconst express = require('express')\nconst app = express()\n\n// Now read the server config etc.\nconst config = require('./configuration').server\n\napp.use(config.proxyPrefixPath.uri +'/kth-style', express.static(path.join(__dirname, '../node_modules/kth-style/dist')))",
            }),
            n.createElement("h3", null, "Linking to stylesheet"),
            n.createElement(
              "p",
              null,
              "Then link to the KTH-bootstrap stylesheet in /dist directory, e.g.:",
            ),
            n.createElement(zl, {
              snippet:
                "<link rel='stylesheet' href='/style/static/kth-style/css/kth-bootstrap.css'/>",
            }),
            n.createElement(
              "p",
              null,
              "Remember to place the import above your own project stylesheet imports to be able to override necessary elements.",
            ),
          );
        },
        ii = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(li, null));
        }),
        oi = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Alerts"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of alerts in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/alerts-och-\ntooltips-1.952153",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "div",
              { className: "alert alert-success", role: "alert" },
              "This is a success alert—check it out!",
            ),
            n.createElement(
              "div",
              { className: "alert alert-danger", role: "alert" },
              "This is a danger alert—check it out!",
            ),
            n.createElement(
              "div",
              { className: "alert alert-info", role: "alert" },
              "This is a info alert—check it out!",
            ),
            n.createElement(zl, {
              snippet:
                '<div class="alert alert-success" role="alert">\n  This is a success alert—check it out!\n</div>\n\n<div class="alert alert-danger" role="alert">\n  This is a danger alert—check it out!\n</div>\n\n<div class="alert alert-info" role="alert">\n  This is a info alert—check it out!\n</div>',
            }),
          );
        },
        si = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(oi, null));
        }),
        ui = function (e) {
          var t = e.items,
            r = e.defaultTab;
          if (!t || 0 === t.length) return null;
          var a = void 0 !== t[r] ? r : 0,
            l = Ml((0, n.useState)(a), 2),
            i = l[0],
            o = l[1],
            s = function (e) {
              var t = e.list;
              return n.createElement(
                "div",
                { className: "tab-bar-container row" },
                n.createElement(
                  "div",
                  { className: "col" },
                  n.createElement(
                    "ul",
                    { className: "nav nav-tabs", role: "tablist" },
                    t.map(function (e, t) {
                      var r = "nav-link ".concat(t === i ? "active show" : "");
                      return e.tab
                        ? n.createElement(
                            "li",
                            {
                              key: t,
                              className: "nav-item",
                              role: "presentation",
                            },
                            n.createElement(
                              "button",
                              {
                                type: "button",
                                className: r,
                                role: "tab",
                                onClick: function (e) {
                                  return (function (e, t) {
                                    e.preventDefault(), o(t);
                                  })(e, t);
                                },
                              },
                              e.tab,
                            ),
                          )
                        : null;
                    }),
                  ),
                ),
              );
            },
            u = function (e) {
              var t = e.list;
              return t[i] && !t[i].content
                ? null
                : n.createElement(
                    "div",
                    { className: "tab-content" },
                    t.map(function (e, t) {
                      var r = "tab-pane fade ".concat(
                        t === i ? "active show" : "",
                      );
                      return n.createElement(
                        "div",
                        { key: t, className: r, role: "tabpanel" },
                        n.createElement(
                          "div",
                          { className: "tab-container" },
                          e.content,
                        ),
                      );
                    }),
                  );
            };
          return n.createElement(
            "div",
            { className: "Tabs" },
            n.createElement(s, { list: t }),
            n.createElement(u, { list: t }),
          );
        },
        ci = function (e) {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Tabs"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of tabs in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/tabbar-\n1.963802",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "div",
              { className: "itemContainer" },
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement(ui, {
                  items: [
                    { tab: "Tab1", content: "Lorem Ipsum" },
                    { tab: "Tab2", content: "Lorem Ipsum 2" },
                    { tab: "Tab3", content: "Lorem Ipsum 3" },
                  ],
                  defaultTab: 0,
                }),
                n.createElement(zl, {
                  snippet:
                    '<div class="tab-bar-container row">\n  <div class="col">\n    <ul class="nav nav-tabs" id="myTab" role="tablist">\n      <li class="nav-item">\n        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class="tab-content" id="myTabContent">\n  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>\n  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>\n  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>\n</div>',
                }),
              ),
            ),
          );
        },
        di = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(ci, null));
        }),
        fi = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Links"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of links in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/knappar-och-\nlankar-1.952154",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "div",
              { className: "itemContainer" },
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement("a", { href: "#" }, "Link"),
                n.createElement(zl, { snippet: '<a href="#">Link</a>' }),
              ),
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement(
                  "a",
                  {
                    href: "#",
                    target: "_blank",
                    title: "Link text - opens in new tab",
                    className: "external-link",
                  },
                  "New tab link",
                ),
                n.createElement(zl, {
                  snippet:
                    '<a href="#" target="_blank" class="external-link">External link</a>',
                }),
              ),
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement(
                  "button",
                  { type: "button", href: "#", className: "btn btn-link" },
                  "Button link",
                ),
                n.createElement(zl, {
                  snippet:
                    '<button href="#" class="btn btn-link">Button link</button>',
                }),
              ),
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement(
                  "a",
                  { className: "link-back", href: "#" },
                  "Back link",
                ),
                n.createElement(zl, {
                  snippet: '<a class="link-back" href="#">Back link</a>',
                }),
              ),
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement(
                  "a",
                  { className: "link-to", href: "#" },
                  "Link to",
                ),
                n.createElement(zl, {
                  snippet: '<a class="link-to" href="#">Link</a>',
                }),
              ),
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement(
                  "a",
                  {
                    className: "pdf-link",
                    href: "#",
                    title: "Document opens in new tab",
                  },
                  "Pdf link",
                ),
                n.createElement(
                  "p",
                  null,
                  "Check icons page for other document icons.",
                ),
                n.createElement(zl, {
                  snippet: '<a class="pdf-link" href="#">Link</a>',
                }),
              ),
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement(
                  "a",
                  {
                    className: "pdf-post-link",
                    target: "_blank",
                    href: "#",
                    title: "Document opens in new tab",
                  },
                  "Pdf link",
                ),
                n.createElement(
                  "p",
                  null,
                  "Check icons page for other document icons.",
                ),
                n.createElement(zl, {
                  snippet: '<a class="pdf-post-link" href="#">Link</a>',
                }),
              ),
            ),
          );
        },
        mi = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(fi, null));
        }),
        pi = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Lists"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of lists in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/listor-1.1005498",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "div",
              { className: "itemContainer" },
              n.createElement(
                "div",
                { className: "itemBox" },
                n.createElement("h2", null, "Ordered list"),
                n.createElement(
                  "ol",
                  null,
                  n.createElement("li", null, "First item"),
                  n.createElement("li", null, "Second item"),
                  n.createElement("li", null, "Third item"),
                ),
                n.createElement(zl, {
                  snippet:
                    "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ol>",
                }),
                n.createElement("h2", null, "Unordered list"),
                n.createElement(
                  "ul",
                  null,
                  n.createElement("li", null, "First item"),
                  n.createElement("li", null, "Second item"),
                  n.createElement("li", null, "Third item"),
                ),
                n.createElement(zl, {
                  snippet:
                    "<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>",
                }),
                n.createElement("h2", null, "Link list"),
                n.createElement(
                  "ul",
                  { className: "link-list" },
                  n.createElement(
                    "li",
                    null,
                    n.createElement(
                      "a",
                      { href: "https://www.kth.se" },
                      "This is a link in a list",
                    ),
                  ),
                  n.createElement(
                    "li",
                    null,
                    n.createElement(
                      "a",
                      { href: "https://www.kth.se" },
                      "This is a link in a list",
                    ),
                  ),
                  n.createElement(
                    "li",
                    null,
                    n.createElement(
                      "a",
                      { href: "https://www.kth.se" },
                      "This is a link in a list",
                    ),
                  ),
                  n.createElement(
                    "li",
                    null,
                    n.createElement(
                      "a",
                      { href: "https://www.kth.se" },
                      "This is a link in a list",
                    ),
                  ),
                ),
                n.createElement(zl, {
                  snippet:
                    '<ul class="link-list">\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n</ul>',
                }),
              ),
            ),
          );
        },
        hi = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(pi, null));
        }),
        vi = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement(
              "h1",
              null,
              "Guidelines for usability and accessibility",
            ),
            n.createElement(
              "p",
              null,
              "First of all. When KTH Style is implemented you also need to know when and how its components should be used. For this you have to consult the KTH Style guide. It is recommended that you start with the page",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/design-av-app-\nutifran-kth-style-1.1002797",
                },
                "Design av app utifrån KTH Style",
              ),
              " ",
              "and then look further into the guidelines for the specific components. (Information in Swedish on the KTH Intranet.)",
            ),
          );
        },
        gi = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(vi, null));
        }),
        yi = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Separators"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of separators in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/struktur-och-layout/sidans-struktur-1.1006152",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement("h2", null, "Separator example"),
            n.createElement(
              "p",
              null,
              "Below is an example of a separator (gray line) used for separating content in some cases.",
            ),
            n.createElement("div", { className: "separator gray" }),
            n.createElement(zl, {
              snippet: '<div className="separator gray" />',
            }),
          );
        },
        bi = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(yi, null));
        }),
        Ei = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Navigation"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of navigation and the principle behind them in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/navigation-\n1.952155",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "p",
              null,
              "Navigation is based on several menus in different contexts. Below you will find examples of these menus. ",
            ),
            n.createElement("h2", null, "Main navigation"),
            n.createElement(
              "p",
              null,
              'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Sub menu" or "Undermeny"',
            ),
            n.createElement(zl, {
              snippet:
                '<nav id="mainMenu" class="col navbar navbar-expand-lg navbar-light" aria-label="Sub menu">\n  <div class="collapse navbar-collapse" id="navbarNav">\n      <ul class="nav">\n        <li class="parentLink"><a href="/">KTH</a></li>\n    </ul>\n    <ul class="nav nav-ancestor">\n      <li><span class="nav-item ancestor">Aktuellt</span></li>\n      </ul>\n      <ul class="nav nav-list">\n        <li class="nav-item leaf"><a class="nav-link" href="/aktuellt/nyheter">Nyheter</a></li>\n        <li class="nav-item node"><a class="nav-link" href="/aktuellt/nyhetsteman">Aktuella nyhetsteman</a></li>\n        <li class="nav-item node"><a class="nav-link" href="/aktuellt/kalender">KTH-kalendern</a></li>\n      </ul>\n    </div>\n  </nav>',
            }),
            n.createElement("h2", null, "Secondary menu"),
            n.createElement(
              "p",
              null,
              "This menu is preferably imported to the application you are building via",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://github.com/KTH/kth-node-cortina-block",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "external-link",
                },
                "kth-node-cortina-block",
              ),
              " ",
              "or similar functionality to keep the navigation in the header consistent throughout the sites.",
            ),
            n.createElement(
              "p",
              null,
              'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Secondary top menu" or "Sekundär toppmeny"',
            ),
            n.createElement(zl, {
              snippet:
                '<nav aria-label="Secondary top menu">\n  <ul>\n    <li><a href="/student">Student</a>\n    </li><li><a href="/alumni">Alumn</a>\n    </li><li><a href="https://intra.kth.se/">Anställd</a>\n    </li><li><a href="https://www.kth.se/en" hreflang="en-UK">International website</a></li>\n  </ul>\n</nav>',
            }),
            n.createElement("h2", null, "Mega menu"),
            n.createElement(
              "p",
              null,
              "This menu is also preferably imported to the application you are building via",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://github.com/KTH/kth-node-cortina-block",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "external-link",
                },
                "kth-node-cortina-block",
              ),
              " ",
              "or similar functionality to keep the navigation in the header consistent throughout the sites.",
            ),
            n.createElement(
              "p",
              null,
              'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Primary top menu" or "Primär toppmeny"',
            ),
            n.createElement("h2", null, "Mobile menu"),
            n.createElement(
              "p",
              null,
              "The mobile meny is visible with its hamburger icon when the width of the screen is 992px or less. On that breakpoint the menu is build up with javascript (menues.js) that combines the the menus depending on which menus are available on the current page.",
            ),
            n.createElement(zl, {
              snippet:
                '<div id="mobileMenuWrapper">\n  <button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n  <nav id="mobileMenu" aria-label="Mobilmeny" class="block navbar navbar-expand-lg navbar-light">\n    <div id="mobileMenuContent" class="navbar-collapse collapse">\n      <ul id="mobileMenuList" class="menu navbar-nav mr-auto"></ul>\n    </div>\n  </nav>\n</div>',
            }),
            n.createElement("h2", null, "Breadcrumbs"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of breadcrumbs in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/navigation-\n1.952155",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement(
              "p",
              null,
              "Breadcrumbs help the user to navigate up and down in the structure. This component is places above the main content on most of our regular pages.",
            ),
            n.createElement(
              "p",
              null,
              'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Breadcrumbs" or "Brödsmulor"',
            ),
            n.createElement(
              "nav",
              { id: "breadcrumbs", "aria-label": "Breadcrumbs" },
              n.createElement(
                "ol",
                { className: "breadcrumb" },
                n.createElement(
                  "li",
                  { className: "breadcrumb-item" },
                  n.createElement("a", { href: "#" }, "Home"),
                ),
                n.createElement(
                  "li",
                  { className: "breadcrumb-item" },
                  n.createElement("a", { href: "#" }, "Library"),
                ),
              ),
            ),
            n.createElement(zl, {
              snippet:
                '<nav id="breadcrumbs" aria-label="Breadcrumbs">\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item">\n      <a href="#">Home</a>\n    </li>\n    <li class="breadcrumb-item">\n      <a href="#">Library</a>\n    </li>\n  </ol>\n</nav>',
            }),
            n.createElement("h2", null, "Skip to main content"),
            n.createElement(
              "p",
              null,
              'The "skip to main content navigation is a link used ...". Its link text should be language specific ',
            ),
            n.createElement(zl, {
              snippet:
                '<a class="skipToMainContent" href="#mainContent" tabindex="1">Skip to main content</a>',
            }),
          );
        },
        ki = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Ei, null));
        }),
        _i = function (e) {
          var t = (0, n.useRef)(),
            r = (0, n.useRef)(),
            a = e.isOpen,
            l = e.closeModal,
            i = e.lang,
            o = e.children,
            s = e.title;
          function u(e) {
            t.current.contains(e.target) || l();
          }
          (0, n.useEffect)(function () {
            function e(e) {
              var t = c.get(e.keyCode);
              return t && t(e);
            }
            return (
              a &&
                (r.current.focus(),
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", u)),
              function () {
                document.removeEventListener("keydown", e),
                  document.removeEventListener("mousedown", u);
              }
            );
          });
          var c = new Map([
            [
              27,
              function (e) {
                27 === e.keyCode && l();
              },
            ],
            [
              9,
              function (e) {
                var n = t.current.querySelectorAll(
                    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
                  ),
                  r = n[0],
                  a = n[n.length - 1];
                if (!e.shiftKey && document.activeElement !== r)
                  return r.focus(), e.preventDefault();
                e.shiftKey &&
                  document.activeElement !== a &&
                  (a.focus(), e.preventDefault());
              },
            ],
          ]);
          if ("undefined" != typeof window) {
            var d = document.body;
            (d.style.overflowY = a ? "hidden" : "scroll"),
              a
                ? d.classList.add("modal-open")
                : d.classList.remove("modal-open");
          }
          var f = { display: a ? "block" : "none" };
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              {
                className: "modal fade ".concat(a ? "show" : ""),
                style: f,
                id: "feedbackModal",
                tabIndex: "-1",
                role: "dialog",
                "aria-labelledby": "feedbackModalLabel",
                "aria-hidden": "true",
              },
              n.createElement(
                "div",
                {
                  className: "modal-dialog modal-mg",
                  role: "document",
                  ref: t,
                },
                n.createElement(
                  "div",
                  { className: "modal-content" },
                  n.createElement(
                    "div",
                    { className: "modal-header" },
                    n.createElement(
                      "button",
                      {
                        type: "button",
                        className: "close",
                        "aria-label": Al().message(
                          "modal_close_button_label",
                          i,
                        ),
                        onClick: l,
                      },
                      n.createElement("span", { "aria-hidden": "true" }, "×"),
                    ),
                    n.createElement("h3", null, s),
                  ),
                  n.createElement("div", { className: "modal-body" }, o),
                  n.createElement(
                    "div",
                    { className: "modal-footer" },
                    n.createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-secondary",
                        "aria-label": Al().message(
                          "modal_close_button_label",
                          i,
                        ),
                        onClick: l,
                        ref: r,
                      },
                      Al().message("modal_close_button_label", i),
                    ),
                  ),
                ),
              ),
            ),
            a &&
              n.createElement("div", {
                className: "modal-backdrop fade ".concat(a ? "show" : ""),
              }),
          );
        },
        wi = function () {
          var e = Ml((0, n.useState)(!1), 2),
            t = e[0],
            r = e[1];
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Modals"),
            n.createElement(
              "p",
              null,
              "Read the guidelines for the use of modals in the",
              " ",
              n.createElement(
                "a",
                {
                  href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/modaler-\n1.952157",
                },
                "KTH Style guide",
              ),
              " ",
              "at the KTH Intranet (Information in Swedish).",
            ),
            n.createElement("h2", null, "Modals based on React"),
            n.createElement(
              "p",
              null,
              "This modal is based on a React component and require React.",
            ),
            n.createElement(
              "p",
              null,
              "Open modal by klicking the information icon:",
              " ",
              n.createElement("button", {
                onClick: function () {
                  r(!0);
                },
                type: "button",
                className: "info-modal",
                "aria-label": "Open modal",
              }),
            ),
            n.createElement(
              _i,
              {
                isOpen: t,
                closeModal: function () {
                  r(!1);
                },
                lang: "sv",
                title: "Titel",
              },
              n.createElement(
                "p",
                null,
                "This is content in a React based modal.",
              ),
            ),
            n.createElement(zl, {
              snippet:
                '<button onClick={openModal} type="button" class="info-modal"  aria-label="Open modal" />\n<Modal isOpen={isOpen} closeModal={closeModal} lang={lang} title="Title">\n  <p>This is content in a react based modal..</p>\n</Modal>',
            }),
            n.createElement("h2", null, "Modal based on Bootstrap"),
            n.createElement(
              "p",
              null,
              "This modal is based on Bootstrap and require Bootstrap CSS and JS in the project.",
            ),
            n.createElement(
              "p",
              null,
              "Open modal by klicking the information icon:",
              " ",
              n.createElement("button", {
                type: "button",
                className: "info-modal",
                "aria-label": "Open modal",
                "data-bs-toggle": "modal",
                "data-bs-target": "#exampleModal",
              }),
            ),
            n.createElement(
              "div",
              {
                className: "modal fade",
                id: "exampleModal",
                tabIndex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
              },
              n.createElement(
                "div",
                { className: "modal-dialog", role: "document" },
                n.createElement(
                  "div",
                  { className: "modal-content" },
                  n.createElement(
                    "div",
                    { className: "modal-header" },
                    n.createElement(
                      "h3",
                      { className: "modal-title", id: "exampleModalLabel" },
                      "Title",
                    ),
                    n.createElement("button", {
                      type: "button",
                      className: "btn-close",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close",
                    }),
                  ),
                  n.createElement(
                    "div",
                    { className: "modal-body" },
                    "This is content in a modal based on Bootstrap.",
                  ),
                  n.createElement(
                    "div",
                    { className: "modal-footer" },
                    n.createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-secondary",
                        "data-bs-dismiss": "modal",
                      },
                      "Close",
                    ),
                  ),
                ),
              ),
            ),
            n.createElement(zl, {
              snippet:
                '<button type="button" class="info-modal" aria-label="Open modal" data-bs-toggle="modal" data-bs-target="#exampleModal" />\n\n<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h3 class="modal-title" id="exampleModalLabel">Title</h3>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">This is content in a modal based on Bootstrap.</div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>',
            }),
          );
        },
        xi = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(wi, null));
        }),
        Si = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "How to get html blocks from Cortina"),
            n.createElement(
              "p",
              null,
              'To make your new application to look and behave as a "KTH application" you need a base html structure to apply stylesheets on. You can grab that from the source of www.kth.se due to the fact that it is relativly static but when it comes to the elements (so called blocks) in the header and footer like menus, search widget etc. you need to use the Cortina API to get the html blocks.',
            ),
            n.createElement("h2", null, "NodeJS based applications"),
            n.createElement(
              "p",
              null,
              "If your application is based on NodeJS, you can use the",
              " ",
              n.createElement(
                "a",
                {
                  href: "https://github.com/KTH/kth-node-cortina-block",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "external-link",
                },
                "kth-node-cortina-block",
              ),
              " ",
              "package to retrive the html blocks you need. Look at the documentation of the package to see how it works.",
            ),
            n.createElement(
              "p",
              null,
              "The header code in a Node application looks something like this:",
            ),
            n.createElement(zl, {
              snippet:
                '\x3c!--indexOff: all--\x3e\n<header>\n  <div class="container-fluid">\n    <div class="container">\n      \n      <div class="header-container__top">\n        {{{blocks.image}}} {{{blocks.title}}}\n        <div id="mobileMenuWrapper">\n          <button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </button>\n          <nav id="mobileMenu" class="block navbar navbar-expand-lg navbar-light">\n            <div id="mobileMenuContent" class="navbar-collapse collapse">\n              <ul id="mobileMenuList" class="menu navbar-nav mr-auto"></ul>\n            </div>\n          </nav>\n        </div>\n        {{{blocks.secondaryMenu}}}\n      </div>\n      <div class="header-container__bottom">{{{blocks.megaMenu}}} {{{blocks.search}}}</div>\n    </div>\n  </div>\n  <div id="gradientBorder"></div>\n\n  <div class="container articleNavigation">\n    <div class="row justify-content-between">\n      {{breadcrumbs breadcrumbsPath lang}}\n    </div>\n  </div>\n\n</header>\n\x3c!--indexOn: all--\x3e',
            }),
            n.createElement("h2", null, "Other applications"),
            n.createElement(
              "p",
              null,
              "If your app is based on some other language you can retrieve the html blocks via the Cortina API directly. Eg.",
              " ",
              n.createElement(
                "a",
                { href: "https://www.kth.se/cm/1.260060" },
                "https://www.kth.se/cm/1.260060",
              ),
              " will give you the site name of the start page.",
            ),
            n.createElement(
              "p",
              null,
              "The Cortina API gives you the html of the given content id the the content id can bee seen in the kth-node-cortina-block pakage or directly in the sourse code of www.kth.se.",
            ),
            n.createElement(zl, {
              snippet:
                '<h1 class="block siteName" data-cid="1.260060">\n  <a href="/">Välkommen till KTH</a>\n</h1>',
            }),
          );
        },
        Ni = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Si, null));
        }),
        Ci = function () {
          return n.createElement(
            "main",
            { id: "mainContent", className: "mainContent" },
            n.createElement("h1", null, "Deprecated"),
            n.createElement(
              "p",
              null,
              "This page contains information regarding what's deprecated and will be removed i future versions in KTH Styel. E.g what we should stop use or change for other components or code.",
            ),
            n.createElement(
              "p",
              null,
              "The deprecated code will work until the next major release of KTH Style is released. We will also inform each team at the IT department in advance. By doing this we will get a controlled phase out of parts that should not be used any more.",
            ),
            n.createElement("h2", null, "Major release 8.0.0"),
            n.createElement(
              "p",
              null,
              "A new icon set has been added and the old set has been removed. All icons now resides in: /public/img/kth-style/icons",
            ),
            n.createElement("h2", null, "Major release 7.0.0"),
            n.createElement(
              "p",
              null,
              "A dedicated folder for fonts have been added to dist folder. And the font files have no longer build hash as part of the filename. The above change does not require any change of client application code unless the font files are addressed directly by the client application.",
            ),
            n.createElement("h2", null, "Major release 6.0.0"),
            n.createElement(
              "p",
              null,
              "This major will include the following chages which include breaking changes and requires an overview or action.",
            ),
            n.createElement(
              "ul",
              { className: "deprecatedList" },
              n.createElement(
                "li",
                null,
                "Collapse with button or achor tags will not be supported as . Styling for these variants is phased out and is replaces by styling for details and summary tags instead. Example code can be seen here::",
                " ",
                n.createElement(
                  "a",
                  {
                    href: "/style/components/collapse",
                    alt: "Exempel på Collapse-komponent",
                  },
                  "Collapse componet exemple",
                ),
              ),
              n.createElement(
                "li",
                null,
                "The following icons are phased out from KTH Style:",
                n.createElement(
                  "ul",
                  null,
                  n.createElement("li", null, "back-link-pill.svg"),
                  n.createElement("li", null, "back-link.svg"),
                  n.createElement("li", null, "white-arrow.svg"),
                  n.createElement("li", null, "clock_grey_25.svg"),
                  n.createElement("li", null, "clock_grey_50.svg"),
                  n.createElement("li", null, "clock_grey_100.svg"),
                  n.createElement("li", null, "Clock_three_quarter.svg"),
                  n.createElement("li", null, "canvas.svg"),
                  n.createElement("li", null, "icon-from-canvas-blue.svg"),
                  n.createElement("li", null, "pill-back-white.svg"),
                  n.createElement("li", null, "pill-back.svg"),
                  n.createElement("li", null, "select-arrow.png"),
                ),
              ),
            ),
          );
        },
        Oi = Ll(function () {
          return n.createElement(n.Fragment, null, n.createElement(Ci, null));
        }),
        Ti = Ll(function () {
          var e = ee(),
            t = e.section ? e.section : "/",
            r = J().pathname;
          (0, n.useEffect)(
            function () {
              window.stickyMainMenu && window.stickyMainMenu();
            },
            [r],
          );
          var a = function (t) {
              var r = t.children.map(function (t, r) {
                var a = e.page || 0 !== r ? "" : " active";
                return n.createElement(
                  "li",
                  { key: r, className: "nav-item leaf" },
                  n.createElement(
                    _e,
                    { className: "nav-link".concat(a), to: t.url },
                    t.title,
                  ),
                );
              });
              return n.createElement(
                "ul",
                { id: "leftmenu-div-1", className: "nav nav-list" },
                r,
              );
            },
            l = function (e) {
              var r = e.navItem,
                l = r.title,
                i = r.url,
                o = r.children,
                s = "/".concat(t) === i,
                u = "nav-item "
                  .concat(o ? "node expandable" : "leaf", " ")
                  .concat(s ? "selected expanded" : "");
              return n.createElement(
                "li",
                { className: u },
                n.createElement(
                  _e,
                  { className: "nav-link", to: i, end: "/" === i },
                  l,
                ),
                s && o && n.createElement(a, null, o),
              );
            };
          return n.createElement(
            "nav",
            {
              id: "mainMenu",
              "aria-label": "Sub menu",
              className: "col navbar navbar-expand-lg navbar-light",
            },
            n.createElement(
              "div",
              { className: "collapse navbar-collapse", id: "navbarNav" },
              n.createElement(
                "ul",
                { className: "nav" },
                n.createElement(
                  "li",
                  { className: "parentLink" },
                  n.createElement("a", { href: "/" }, "KTH"),
                ),
              ),
              n.createElement(
                "ul",
                { className: "nav nav-ancestor" },
                n.createElement(
                  "li",
                  null,
                  n.createElement(
                    "span",
                    { className: "nav-item ancestor" },
                    "KTH Style",
                  ),
                ),
              ),
              n.createElement(
                "ul",
                { className: "nav nav-list expandable" },
                n.createElement(l, {
                  navItem: { title: "About KTH Style", url: "/" },
                }),
                n.createElement(l, {
                  navItem: {
                    title: "Basics",
                    url: "/basics",
                    children: [
                      { title: "Colors", url: "/basics/colors" },
                      { title: "Icons", url: "/basics/icons" },
                      { title: "Separators", url: "/basics/separators" },
                      { title: "Structure and layout", url: "/basics/spacing" },
                      { title: "Typography", url: "/basics/typography" },
                    ],
                  },
                }),
                n.createElement(l, {
                  navItem: {
                    title: "Components",
                    url: "/components",
                    children: [
                      { title: "Alerts", url: "/components/alerts" },
                      { title: "Buttons", url: "/components/buttons" },
                      { title: "Collapse", url: "/components/collapse" },
                      { title: "Form", url: "/components/forms" },
                      { title: "Links", url: "/components/links" },
                      { title: "Lists", url: "/components/lists" },
                      { title: "Modals", url: "/components/modals" },
                      { title: "Navigation", url: "/components/navigation" },
                      { title: "Tables", url: "/components/tables" },
                      { title: "Tabs", url: "/components/tabs" },
                    ],
                  },
                }),
                n.createElement(l, {
                  navItem: {
                    title: "Setup guide",
                    url: "/setup-guide",
                    children: [
                      { title: "Guidlines", url: "/setup-guide/guidlines" },
                      {
                        title: "How to use kth-style in your project",
                        url: "/setup-guide/setup",
                      },
                      {
                        title: "How to fetch html blocks from Cortina",
                        url: "/setup-guide/cortina-blocks",
                      },
                      {
                        title: "Deprecated style / code",
                        url: "/setup-guide/deprecations",
                      },
                    ],
                  },
                }),
              ),
            ),
          );
        }),
        Pi = a(544).isNoObject;
      var ji = function (e) {
        var t = cl(),
          r = e.items || [],
          a = t.basicBreadcrumbs,
          l = t.language;
        if (
          ((function (e) {
            if (!Array.isArray(e) || e.some(Pi))
              throw new Error(
                '<Breadcrumbs/> failed - invalid prop "items", expected object[]',
              );
            if (
              e.some(function (e) {
                var t = e.label,
                  n = e.url;
                return (
                  "string" != typeof t ||
                  "" === t ||
                  "string" != typeof n ||
                  "" === n
                );
              })
            )
              throw new Error(
                '<Breadcrumbs/> failed - invalid prop "items", expected array of { label, url }',
              );
          })(r),
          0 === a.length && 0 === r.length)
        )
          return null;
        var i = function (e, t) {
            var r = e.url,
              a = e.label;
            return n.createElement(
              "li",
              { key: t, className: "breadcrumb-item" },
              n.createElement("a", { href: r }, a),
            );
          },
          o = "sv" === l ? "Brödsmulor" : "Breadcrumbs";
        return n.createElement(
          "div",
          { className: "container articleNavigation" },
          n.createElement(
            "nav",
            { id: "breadcrumbs", "aria-label": o },
            n.createElement(
              "ol",
              { className: "breadcrumb" },
              a.map(i),
              r.map(i),
            ),
          ),
        );
      };
      function Ri() {
        var e = J().pathname;
        return (
          (0, n.useEffect)(
            function () {
              window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
            },
            [e],
          ),
          null
        );
      }
      Ll(Li);
      function Li() {
        var e = cl().browserConfig.proxyPrefixPath,
          t = ee().section,
          r = [];
        t &&
          (r = [
            {
              label: t ? Al().message("section_".concat(t)) : "",
              url: "".concat(e.uri, "/").concat(t),
            },
          ]);
        var a = (function () {
          var e = ee(),
            t = e.section,
            r = e.page;
          switch (t) {
            case "basics":
              switch (r) {
                case "colors":
                default:
                  return n.createElement(ql, null);
                case "icons":
                  return n.createElement(Gl, null);
                case "spacing":
                  return n.createElement(Xl, null);
                case "separators":
                  return n.createElement(bi, null);
                case "typography":
                  return n.createElement(Zl, null);
              }
            case "components":
              switch (r) {
                case "alerts":
                default:
                  return n.createElement(si, null);
                case "forms":
                  return n.createElement(ai, null);
                case "collapse":
                  return n.createElement(ni, null);
                case "buttons":
                  return n.createElement(Hl, null);
                case "links":
                  return n.createElement(mi, null);
                case "lists":
                  return n.createElement(hi, null);
                case "tables":
                  return n.createElement(Kl, null);
                case "tabs":
                  return n.createElement(di, null);
                case "modals":
                  return n.createElement(xi, null);
                case "navigation":
                  return n.createElement(ki, null);
              }
            case "setup-guide":
              switch (r) {
                case "guidelines":
                default:
                  return n.createElement(gi, null);
                case "setup":
                  return n.createElement(ii, null);
                case "cortina-blocks":
                  return n.createElement(Ni, null);
                case "deprecations":
                  return n.createElement(Oi, null);
              }
            default:
              return n.createElement(
                "main",
                { id: "mainContent", className: "mainContent" },
                n.createElement(Ii, null),
              );
          }
        })();
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(Ri, null),
          n.createElement(ji, { items: r }),
          n.createElement(Ti, null),
          a,
        );
      }
      function Ii() {
        return n.createElement(
          n.Fragment,
          null,
          n.createElement("h1", null, "About KTH Style"),
          n.createElement(
            "p",
            { className: "lead" },
            "KTH Style is a tool for bringing proper design and UX proof elements to web applications at KTH. The purpose of KTH Style is to accelerate development, create consistency between applications and facilitate the work with usability and accessibility.",
          ),
          n.createElement(
            "p",
            null,
            "This website (of course based on KTH Style) presents the look of basic form elements and specific components with code examples, and provides technical guidance on how to implement KTH Style in your application.",
          ),
          n.createElement(
            "p",
            null,
            "Instructions for how KTH Style is technically implemented are described in the section",
            " ",
            n.createElement(
              "a",
              { href: "https://app.kth.se/style/setup-guide" },
              "Setup guide",
            ),
          ),
          n.createElement(
            "p",
            null,
            "The content of KTH Style is accompanied by the KTH Style guide. As a developer you need to understand which component to use, when they apply and how they should be used. You also need an overall understanding about usability and accessibility to make the right design decision for your app.",
          ),
          n.createElement(
            "p",
            null,
            "The ",
            n.createElement(
              "a",
              {
                href: "https://intra.kth.se/administration/kommunikation/webb/style",
              },
              "KTH Style guide",
            ),
            " is found at KTH Intranet (Information in Swedish).",
          ),
        );
      }
      function Ai(e) {
        return n.createElement(
          al,
          {
            initCallback: function () {
              return e;
            },
          },
          n.createElement(
            fe,
            null,
            n.createElement(ce, {
              path: "/",
              element: n.createElement(Li, null),
            }),
            n.createElement(
              ce,
              { path: ":section", element: n.createElement(Li, null) },
              n.createElement(ce, {
                path: ":page",
                element: n.createElement(Li, null),
              }),
            ),
          ),
        );
      }
      !(function () {
        if ("undefined" == typeof window) return;
        var e = window.config.proxyPrefixPath.uri,
          r = ul();
        !(function (e) {
          if ("undefined" == typeof window)
            return (
              console.error(
                "uncompressStoreInPlaceFromDocument(): Expected to be run on client side",
              ),
              e
            );
          var t = window.__compressedApplicationStore__;
          if (null == t || "string" != typeof t) return e;
          var n = JSON.parse(decodeURIComponent(t));
          null != n && "object" === Se(n)
            ? Object.keys(n).forEach(function (t) {
                e[t] = n[t];
              })
            : console.error("uncompress(): Invalid store data");
        })(r);
        var a = n.createElement(Ee, { basename: e }, Ai(r)),
          l = document.getElementById("app");
        (0, t.a)(l, a);
      })();
    })();
})();
