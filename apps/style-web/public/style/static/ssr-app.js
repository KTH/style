(() => {
  var e,
    t,
    n = {
      94: (e) => {
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
      477: (e) => {
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
      599: (e, t, n) => {
        "use strict";
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
        function r() {
          return (
            (r = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            r.apply(this, arguments)
          );
        }
        var a;
        n.r(t),
          n.d(t, {
            AbortedDeferredError: () => B,
            Action: () => a,
            ErrorResponse: () => K,
            IDLE_BLOCKER: () => te,
            IDLE_FETCHER: () => ee,
            IDLE_NAVIGATION: () => Z,
            UNSAFE_DEFERRED_SYMBOL: () => le,
            UNSAFE_DeferredData: () => H,
            UNSAFE_convertRoutesToDataRoutes: () => v,
            UNSAFE_getPathContributingMatches: () => D,
            createBrowserHistory: () => i,
            createHashHistory: () => s,
            createMemoryHistory: () => o,
            createPath: () => h,
            createRouter: () => ae,
            createStaticHandler: () => oe,
            defer: () => V,
            generatePath: () => x,
            getStaticContextFromError: () => ie,
            getToPathname: () => L,
            invariant: () => u,
            isRouteErrorResponse: () => q,
            joinPaths: () => I,
            json: () => z,
            matchPath: () => C,
            matchRoutes: () => y,
            normalizePathname: () => A,
            parsePath: () => p,
            redirect: () => $,
            resolvePath: () => R,
            resolveTo: () => M,
            stripBasename: () => N,
            warning: () => P,
          }),
          (function (e) {
            (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
          })(a || (a = {}));
        const l = "popstate";
        function o(e) {
          void 0 === e && (e = {});
          let t,
            {
              initialEntries: n = ["/"],
              initialIndex: r,
              v5Compat: l = !1,
            } = e;
          t = n.map((e, t) =>
            m(
              e,
              "string" == typeof e ? null : e.state,
              0 === t ? "default" : void 0,
            ),
          );
          let o = u(null == r ? t.length - 1 : r),
            i = a.Pop,
            s = null;
          function u(e) {
            return Math.min(Math.max(e, 0), t.length - 1);
          }
          function d() {
            return t[o];
          }
          function m(e, n, r) {
            void 0 === n && (n = null);
            let a = f(t ? d().pathname : "/", e, n, r);
            return (
              c(
                "/" === a.pathname.charAt(0),
                "relative pathnames are not supported in memory history: " +
                  JSON.stringify(e),
              ),
              a
            );
          }
          function g(e) {
            return "string" == typeof e ? e : h(e);
          }
          return {
            get index() {
              return o;
            },
            get action() {
              return i;
            },
            get location() {
              return d();
            },
            createHref: g,
            createURL: (e) => new URL(g(e), "http://localhost"),
            encodeLocation(e) {
              let t = "string" == typeof e ? p(e) : e;
              return {
                pathname: t.pathname || "",
                search: t.search || "",
                hash: t.hash || "",
              };
            },
            push(e, n) {
              i = a.Push;
              let r = m(e, n);
              (o += 1),
                t.splice(o, t.length, r),
                l && s && s({ action: i, location: r, delta: 1 });
            },
            replace(e, n) {
              i = a.Replace;
              let r = m(e, n);
              (t[o] = r), l && s && s({ action: i, location: r, delta: 0 });
            },
            go(e) {
              i = a.Pop;
              let n = u(o + e),
                r = t[n];
              (o = n), s && s({ action: i, location: r, delta: e });
            },
            listen: (e) => (
              (s = e),
              () => {
                s = null;
              }
            ),
          };
        }
        function i(e) {
          return (
            void 0 === e && (e = {}),
            m(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return f(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default",
                );
              },
              function (e, t) {
                return "string" == typeof t ? t : h(t);
              },
              null,
              e,
            )
          );
        }
        function s(e) {
          return (
            void 0 === e && (e = {}),
            m(
              function (e, t) {
                let {
                  pathname: n = "/",
                  search: r = "",
                  hash: a = "",
                } = p(e.location.hash.substr(1));
                return f(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default",
                );
              },
              function (e, t) {
                let n = e.document.querySelector("base"),
                  r = "";
                if (n && n.getAttribute("href")) {
                  let t = e.location.href,
                    n = t.indexOf("#");
                  r = -1 === n ? t : t.slice(0, n);
                }
                return r + "#" + ("string" == typeof t ? t : h(t));
              },
              function (e, t) {
                c(
                  "/" === e.pathname.charAt(0),
                  "relative pathnames are not supported in hash history.push(" +
                    JSON.stringify(t) +
                    ")",
                );
              },
              e,
            )
          );
        }
        function u(e, t) {
          if (!1 === e || null == e) throw new Error(t);
        }
        function c(e, t) {
          if (!e) {
            "undefined" != typeof console && console.warn(t);
            try {
              throw new Error(t);
            } catch (e) {}
          }
        }
        function d(e, t) {
          return { usr: e.state, key: e.key, idx: t };
        }
        function f(e, t, n, a) {
          return (
            void 0 === n && (n = null),
            r(
              {
                pathname: "string" == typeof e ? e : e.pathname,
                search: "",
                hash: "",
              },
              "string" == typeof t ? p(t) : t,
              {
                state: n,
                key:
                  (t && t.key) || a || Math.random().toString(36).substr(2, 8),
              },
            )
          );
        }
        function h(e) {
          let { pathname: t = "/", search: n = "", hash: r = "" } = e;
          return (
            n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
            r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
            t
          );
        }
        function p(e) {
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
        function m(e, t, n, o) {
          void 0 === o && (o = {});
          let { window: i = document.defaultView, v5Compat: s = !1 } = o,
            p = i.history,
            m = a.Pop,
            g = null,
            v = y();
          function y() {
            return (p.state || { idx: null }).idx;
          }
          function b() {
            let e = a.Pop,
              t = y();
            if (null != t) {
              let n = t - v;
              (m = e),
                (v = t),
                g && g({ action: m, location: E.location, delta: n });
            } else
              c(
                !1,
                "You are trying to block a POP navigation to a location that was not created by @remix-run/router. The block will fail silently in production, but in general you should do all navigation with the router (instead of using window.history.pushState directly) to avoid this situation.",
              );
          }
          function k(e) {
            let t =
                "null" !== i.location.origin
                  ? i.location.origin
                  : i.location.href,
              n = "string" == typeof e ? e : h(e);
            return (
              u(
                t,
                "No window.location.(origin|href) available to create URL for href: " +
                  n,
              ),
              new URL(n, t)
            );
          }
          null == v &&
            ((v = 0), p.replaceState(r({}, p.state, { idx: v }), ""));
          let E = {
            get action() {
              return m;
            },
            get location() {
              return e(i, p);
            },
            listen(e) {
              if (g)
                throw new Error("A history only accepts one active listener");
              return (
                i.addEventListener(l, b),
                (g = e),
                () => {
                  i.removeEventListener(l, b), (g = null);
                }
              );
            },
            createHref: (e) => t(i, e),
            createURL: k,
            encodeLocation(e) {
              let t = k(e);
              return { pathname: t.pathname, search: t.search, hash: t.hash };
            },
            push: function (e, t) {
              m = a.Push;
              let r = f(E.location, e, t);
              n && n(r, e), (v = y() + 1);
              let l = d(r, v),
                o = E.createHref(r);
              try {
                p.pushState(l, "", o);
              } catch (e) {
                i.location.assign(o);
              }
              s && g && g({ action: m, location: E.location, delta: 1 });
            },
            replace: function (e, t) {
              m = a.Replace;
              let r = f(E.location, e, t);
              n && n(r, e), (v = y());
              let l = d(r, v),
                o = E.createHref(r);
              p.replaceState(l, "", o),
                s && g && g({ action: m, location: E.location, delta: 0 });
            },
            go: (e) => p.go(e),
          };
          return E;
        }
        var g;
        function v(e, t, n) {
          return (
            void 0 === t && (t = []),
            void 0 === n && (n = new Set()),
            e.map((e, a) => {
              let l = [...t, a],
                o = "string" == typeof e.id ? e.id : l.join("-");
              if (
                (u(
                  !0 !== e.index || !e.children,
                  "Cannot specify children on an index route",
                ),
                u(
                  !n.has(o),
                  'Found a route id collision on id "' +
                    o +
                    "\".  Route id's must be globally unique within Data Router usages",
                ),
                n.add(o),
                (function (e) {
                  return !0 === e.index;
                })(e))
              ) {
                return r({}, e, { id: o });
              }
              return r({}, e, {
                id: o,
                children: e.children ? v(e.children, l, n) : void 0,
              });
            })
          );
        }
        function y(e, t, n) {
          void 0 === n && (n = "/");
          let r = N(("string" == typeof t ? p(t) : t).pathname || "/", n);
          if (null == r) return null;
          let a = b(e);
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
          for (let e = 0; null == l && e < a.length; ++e) l = S(a[e], T(r));
          return l;
        }
        function b(e, t, n, r) {
          void 0 === t && (t = []),
            void 0 === n && (n = []),
            void 0 === r && (r = "");
          let a = (e, a, l) => {
            let o = {
              relativePath: void 0 === l ? e.path || "" : l,
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            o.relativePath.startsWith("/") &&
              (u(
                o.relativePath.startsWith(r),
                'Absolute route path "' +
                  o.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
              ),
              (o.relativePath = o.relativePath.slice(r.length)));
            let i = I([r, o.relativePath]),
              s = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (u(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  i +
                  '".',
              ),
              b(e.children, t, s, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: _(i, e.index), routesMeta: s });
          };
          return (
            e.forEach((e, t) => {
              var n;
              if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                for (let n of k(e.path)) a(e, t, n);
              else a(e, t);
            }),
            t
          );
        }
        function k(e) {
          let t = e.split("/");
          if (0 === t.length) return [];
          let [n, ...r] = t,
            a = n.endsWith("?"),
            l = n.replace(/\?$/, "");
          if (0 === r.length) return a ? [l, ""] : [l];
          let o = k(r.join("/")),
            i = [];
          return (
            i.push(...o.map((e) => ("" === e ? l : [l, e].join("/")))),
            a && i.push(...o),
            i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
          );
        }
        !(function (e) {
          (e.data = "data"),
            (e.deferred = "deferred"),
            (e.redirect = "redirect"),
            (e.error = "error");
        })(g || (g = {}));
        const E = /^:\w+$/,
          w = (e) => "*" === e;
        function _(e, t) {
          let n = e.split("/"),
            r = n.length;
          return (
            n.some(w) && (r += -2),
            t && (r += 2),
            n
              .filter((e) => !w(e))
              .reduce((e, t) => e + (E.test(t) ? 3 : "" === t ? 1 : 10), r)
          );
        }
        function S(e, t) {
          let { routesMeta: n } = e,
            r = {},
            a = "/",
            l = [];
          for (let e = 0; e < n.length; ++e) {
            let o = n[e],
              i = e === n.length - 1,
              s = "/" === a ? t : t.slice(a.length) || "/",
              u = C(
                {
                  path: o.relativePath,
                  caseSensitive: o.caseSensitive,
                  end: i,
                },
                s,
              );
            if (!u) return null;
            Object.assign(r, u.params);
            let c = o.route;
            l.push({
              params: r,
              pathname: I([a, u.pathname]),
              pathnameBase: A(I([a, u.pathnameBase])),
              route: c,
            }),
              "/" !== u.pathnameBase && (a = I([a, u.pathnameBase]));
          }
          return l;
        }
        function x(e, t) {
          void 0 === t && (t = {});
          let n = e;
          return (
            n.endsWith("*") &&
              "*" !== n &&
              !n.endsWith("/*") &&
              (P(
                !1,
                'Route path "' +
                  n +
                  '" will be treated as if it were "' +
                  n.replace(/\*$/, "/*") +
                  '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                  n.replace(/\*$/, "/*") +
                  '".',
              ),
              (n = n.replace(/\*$/, "/*"))),
            n
              .replace(/^:(\w+)(\??)/g, (e, n, r) => {
                let a = t[n];
                return "?" === r
                  ? null == a
                    ? ""
                    : a
                  : (null == a && u(!1, 'Missing ":' + n + '" param'), a);
              })
              .replace(/\/:(\w+)(\??)/g, (e, n, r) => {
                let a = t[n];
                return "?" === r
                  ? null == a
                    ? ""
                    : "/" + a
                  : (null == a && u(!1, 'Missing ":' + n + '" param'), "/" + a);
              })
              .replace(/\?/g, "")
              .replace(/(\/?)\*/, (e, n, r, a) =>
                null == t["*"] ? ("/*" === a ? "/" : "") : "" + n + t["*"],
              )
          );
        }
        function C(e, t) {
          "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
          let [n, r] = (function (e, t, n) {
              void 0 === t && (t = !1);
              void 0 === n && (n = !0);
              P(
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
                  (a +=
                    "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : n
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
              return [new RegExp(a, t ? void 0 : "i"), r];
            })(e.path, e.caseSensitive, e.end),
            a = t.match(n);
          if (!a) return null;
          let l = a[0],
            o = l.replace(/(.)\/+$/, "$1"),
            i = a.slice(1);
          return {
            params: r.reduce((e, t, n) => {
              if ("*" === t) {
                let e = i[n] || "";
                o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
              }
              return (
                (e[t] = (function (e, t) {
                  try {
                    return decodeURIComponent(e);
                  } catch (n) {
                    return (
                      P(
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
                })(i[n] || "", t)),
                e
              );
            }, {}),
            pathname: l,
            pathnameBase: o,
            pattern: e,
          };
        }
        function T(e) {
          try {
            return decodeURI(e);
          } catch (t) {
            return (
              P(
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
        function N(e, t) {
          if ("/" === t) return e;
          if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
          let n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
          return r && "/" !== r ? null : e.slice(n) || "/";
        }
        function P(e, t) {
          if (!e) {
            "undefined" != typeof console && console.warn(t);
            try {
              throw new Error(t);
            } catch (e) {}
          }
        }
        function R(e, t) {
          void 0 === t && (t = "/");
          let {
              pathname: n,
              search: r = "",
              hash: a = "",
            } = "string" == typeof e ? p(e) : e,
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
          return { pathname: l, search: F(r), hash: j(a) };
        }
        function O(e, t, n, r) {
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
        function D(e) {
          return e.filter(
            (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
          );
        }
        function M(e, t, n, a) {
          let l;
          void 0 === a && (a = !1),
            "string" == typeof e
              ? (l = p(e))
              : ((l = r({}, e)),
                u(
                  !l.pathname || !l.pathname.includes("?"),
                  O("?", "pathname", "search", l),
                ),
                u(
                  !l.pathname || !l.pathname.includes("#"),
                  O("#", "pathname", "hash", l),
                ),
                u(
                  !l.search || !l.search.includes("#"),
                  O("#", "search", "hash", l),
                ));
          let o,
            i = "" === e || "" === l.pathname,
            s = i ? "/" : l.pathname;
          if (a || null == s) o = n;
          else {
            let e = t.length - 1;
            if (s.startsWith("..")) {
              let t = s.split("/");
              for (; ".." === t[0]; ) t.shift(), (e -= 1);
              l.pathname = t.join("/");
            }
            o = e >= 0 ? t[e] : "/";
          }
          let c = R(l, o),
            d = s && "/" !== s && s.endsWith("/"),
            f = (i || "." === s) && n.endsWith("/");
          return (
            c.pathname.endsWith("/") || (!d && !f) || (c.pathname += "/"), c
          );
        }
        function L(e) {
          return "" === e || "" === e.pathname
            ? "/"
            : "string" == typeof e
            ? p(e).pathname
            : e.pathname;
        }
        const I = (e) => e.join("/").replace(/\/\/+/g, "/"),
          A = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
          F = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
          j = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : ""),
          z = function (e, t) {
            void 0 === t && (t = {});
            let n = "number" == typeof t ? { status: t } : t,
              a = new Headers(n.headers);
            return (
              a.has("Content-Type") ||
                a.set("Content-Type", "application/json; charset=utf-8"),
              new Response(JSON.stringify(e), r({}, n, { headers: a }))
            );
          };
        class B extends Error {}
        class H {
          constructor(e, t) {
            let n;
            (this.pendingKeysSet = new Set()),
              (this.subscribers = new Set()),
              (this.deferredKeys = []),
              u(
                e && "object" == typeof e && !Array.isArray(e),
                "defer() only accepts plain objects",
              ),
              (this.abortPromise = new Promise((e, t) => (n = t))),
              (this.controller = new AbortController());
            let r = () => n(new B("Deferred data aborted"));
            (this.unlistenAbortSignal = () =>
              this.controller.signal.removeEventListener("abort", r)),
              this.controller.signal.addEventListener("abort", r),
              (this.data = Object.entries(e).reduce((e, t) => {
                let [n, r] = t;
                return Object.assign(e, { [n]: this.trackPromise(n, r) });
              }, {})),
              (this.init = t);
          }
          trackPromise(e, t) {
            if (!(t instanceof Promise)) return t;
            this.deferredKeys.push(e), this.pendingKeysSet.add(e);
            let n = Promise.race([t, this.abortPromise]).then(
              (t) => this.onSettle(n, e, null, t),
              (t) => this.onSettle(n, e, t),
            );
            return (
              n.catch(() => {}),
              Object.defineProperty(n, "_tracked", { get: () => !0 }),
              n
            );
          }
          onSettle(e, t, n, r) {
            return this.controller.signal.aborted && n instanceof B
              ? (this.unlistenAbortSignal(),
                Object.defineProperty(e, "_error", { get: () => n }),
                Promise.reject(n))
              : (this.pendingKeysSet.delete(t),
                this.done && this.unlistenAbortSignal(),
                n
                  ? (Object.defineProperty(e, "_error", { get: () => n }),
                    this.emit(!1, t),
                    Promise.reject(n))
                  : (Object.defineProperty(e, "_data", { get: () => r }),
                    this.emit(!1, t),
                    r));
          }
          emit(e, t) {
            this.subscribers.forEach((n) => n(e, t));
          }
          subscribe(e) {
            return this.subscribers.add(e), () => this.subscribers.delete(e);
          }
          cancel() {
            this.controller.abort(),
              this.pendingKeysSet.forEach((e, t) =>
                this.pendingKeysSet.delete(t),
              ),
              this.emit(!0);
          }
          async resolveData(e) {
            let t = !1;
            if (!this.done) {
              let n = () => this.cancel();
              e.addEventListener("abort", n),
                (t = await new Promise((t) => {
                  this.subscribe((r) => {
                    e.removeEventListener("abort", n), (r || this.done) && t(r);
                  });
                }));
            }
            return t;
          }
          get done() {
            return 0 === this.pendingKeysSet.size;
          }
          get unwrappedData() {
            return (
              u(
                null !== this.data && this.done,
                "Can only unwrap data on initialized and settled deferreds",
              ),
              Object.entries(this.data).reduce((e, t) => {
                let [n, r] = t;
                return Object.assign(e, { [n]: U(r) });
              }, {})
            );
          }
          get pendingKeys() {
            return Array.from(this.pendingKeysSet);
          }
        }
        function U(e) {
          if (
            !(function (e) {
              return e instanceof Promise && !0 === e._tracked;
            })(e)
          )
            return e;
          if (e._error) throw e._error;
          return e._data;
        }
        const V = function (e, t) {
            return (
              void 0 === t && (t = {}),
              new H(e, "number" == typeof t ? { status: t } : t)
            );
          },
          $ = function (e, t) {
            void 0 === t && (t = 302);
            let n = t;
            "number" == typeof n
              ? (n = { status: n })
              : void 0 === n.status && (n.status = 302);
            let a = new Headers(n.headers);
            return (
              a.set("Location", e), new Response(null, r({}, n, { headers: a }))
            );
          };
        class K {
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
        function q(e) {
          return e instanceof K;
        }
        const W = ["post", "put", "patch", "delete"],
          G = new Set(W),
          Q = ["get", ...W],
          Y = new Set(Q),
          X = new Set([301, 302, 303, 307, 308]),
          J = new Set([307, 308]),
          Z = {
            state: "idle",
            location: void 0,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          },
          ee = {
            state: "idle",
            data: void 0,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          },
          te = {
            state: "unblocked",
            proceed: void 0,
            reset: void 0,
            location: void 0,
          },
          ne =
            "undefined" != typeof window &&
            void 0 !== window.document &&
            void 0 !== window.document.createElement,
          re = !ne;
        function ae(e) {
          u(
            e.routes.length > 0,
            "You must provide a non-empty routes array to createRouter",
          );
          let t = v(e.routes),
            n = null,
            l = new Set(),
            o = null,
            i = null,
            s = null,
            c = null != e.hydrationData,
            d = y(t, e.history.location, e.basename),
            h = null;
          if (null == d) {
            let n = Ee(404, { pathname: e.history.location.pathname }),
              { matches: r, route: a } = ke(t);
            (d = r), (h = { [a.id]: n });
          }
          let p,
            m,
            b = !d.some((e) => e.route.loader) || null != e.hydrationData,
            k = {
              historyAction: e.history.action,
              location: e.history.location,
              matches: d,
              initialized: b,
              navigation: Z,
              restoreScrollPosition: null == e.hydrationData && null,
              preventScrollReset: !1,
              revalidation: "idle",
              loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
              actionData:
                (e.hydrationData && e.hydrationData.actionData) || null,
              errors: (e.hydrationData && e.hydrationData.errors) || h,
              fetchers: new Map(),
              blockers: new Map(),
            },
            E = a.Pop,
            w = !1,
            _ = !1,
            S = !1,
            x = [],
            C = [],
            T = new Map(),
            N = 0,
            R = -1,
            O = new Map(),
            D = new Set(),
            M = new Map(),
            L = new Map(),
            I = null,
            A = new Map(),
            F = !1;
          function j(e) {
            (k = r({}, k, e)), l.forEach((e) => e(k));
          }
          function z(t, n) {
            var l, o;
            let i,
              s =
                null != k.actionData &&
                null != k.navigation.formMethod &&
                Re(k.navigation.formMethod) &&
                "loading" === k.navigation.state &&
                !0 !== (null == (l = t.state) ? void 0 : l._isRedirect);
            i = n.actionData
              ? Object.keys(n.actionData).length > 0
                ? n.actionData
                : null
              : s
              ? k.actionData
              : null;
            let u = n.loaderData
              ? ye(k.loaderData, n.loaderData, n.matches || [], n.errors)
              : k.loaderData;
            for (let [e] of A) Y(e);
            let c =
              !0 === w ||
              (null != k.navigation.formMethod &&
                Re(k.navigation.formMethod) &&
                !0 !== (null == (o = t.state) ? void 0 : o._isRedirect));
            j(
              r({}, n, {
                actionData: i,
                loaderData: u,
                historyAction: E,
                location: t,
                initialized: !0,
                navigation: Z,
                revalidation: "idle",
                restoreScrollPosition: oe(t, n.matches || k.matches),
                preventScrollReset: c,
                blockers: new Map(k.blockers),
              }),
            ),
              _ ||
                E === a.Pop ||
                (E === a.Push
                  ? e.history.push(t, t.state)
                  : E === a.Replace && e.history.replace(t, t.state)),
              (E = a.Pop),
              (w = !1),
              (_ = !1),
              (S = !1),
              (x = []),
              (C = []);
          }
          async function B(n, l, c) {
            m && m.abort(),
              (m = null),
              (E = n),
              (_ = !0 === (c && c.startUninterruptedRevalidation)),
              (function (e, t) {
                if (o && i && s) {
                  let n = t.map((e) => Le(e, k.loaderData)),
                    r = i(e, n) || e.key;
                  o[r] = s();
                }
              })(k.location, k.matches),
              (w = !0 === (c && c.preventScrollReset));
            let d = c && c.overrideNavigation,
              f = y(t, l, e.basename);
            if (!f) {
              let e = Ee(404, { pathname: l.pathname }),
                { matches: n, route: r } = ke(t);
              return (
                le(),
                void z(l, { matches: n, loaderData: {}, errors: { [r.id]: e } })
              );
            }
            if (
              ((h = k.location),
              (v = l),
              h.pathname === v.pathname &&
                h.search === v.search &&
                h.hash !== v.hash)
            )
              return void z(l, { matches: f });
            var h, v;
            m = new AbortController();
            let b,
              P,
              O = pe(e.history, l, m.signal, c && c.submission);
            if (c && c.pendingError) P = { [be(f).route.id]: c.pendingError };
            else if (c && c.submission && Re(c.submission.formMethod)) {
              let e = await (async function (e, t, n, l, o) {
                let i;
                $(),
                  j({ navigation: r({ state: "submitting", location: t }, n) });
                let s = Ie(l, t);
                if (s.route.action) {
                  if (
                    ((i = await he("action", e, s, l, p.basename)),
                    e.signal.aborted)
                  )
                    return { shortCircuited: !0 };
                } else
                  i = {
                    type: g.error,
                    error: Ee(405, {
                      method: e.method,
                      pathname: t.pathname,
                      routeId: s.route.id,
                    }),
                  };
                if (Ce(i)) {
                  let e;
                  return (
                    (e =
                      o && null != o.replace
                        ? o.replace
                        : i.location ===
                          k.location.pathname + k.location.search),
                    await U(k, i, { submission: n, replace: e }),
                    { shortCircuited: !0 }
                  );
                }
                if (xe(i)) {
                  let e = be(l, s.route.id);
                  return (
                    !0 !== (o && o.replace) && (E = a.Push),
                    {
                      pendingActionData: {},
                      pendingActionError: { [e.route.id]: i.error },
                    }
                  );
                }
                if (Se(i)) throw Ee(400, { type: "defer-action" });
                return { pendingActionData: { [s.route.id]: i.data } };
              })(O, l, c.submission, f, { replace: c.replace });
              if (e.shortCircuited) return;
              (b = e.pendingActionData),
                (P = e.pendingActionError),
                (d = r({ state: "loading", location: l }, c.submission)),
                (O = new Request(O.url, { signal: O.signal }));
            }
            let {
              shortCircuited: I,
              loaderData: A,
              errors: F,
            } = await (async function (t, n, a, l, o, i, s, c) {
              let d = l;
              if (!d) {
                d = r(
                  {
                    state: "loading",
                    location: n,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                  },
                  o,
                );
              }
              let f =
                  o ||
                  (d.formMethod && d.formAction && d.formData && d.formEncType
                    ? {
                        formMethod: d.formMethod,
                        formAction: d.formAction,
                        formData: d.formData,
                        formEncType: d.formEncType,
                      }
                    : void 0),
                [h, p] = ce(e.history, k, a, f, n, S, x, C, s, c, M);
              if (
                (le(
                  (e) =>
                    !(a && a.some((t) => t.route.id === e)) ||
                    (h && h.some((t) => t.route.id === e)),
                ),
                0 === h.length && 0 === p.length)
              )
                return (
                  z(
                    n,
                    r(
                      { matches: a, loaderData: {}, errors: c || null },
                      s ? { actionData: s } : {},
                    ),
                  ),
                  { shortCircuited: !0 }
                );
              if (!_) {
                p.forEach((e) => {
                  let [t] = e,
                    n = k.fetchers.get(t),
                    r = {
                      state: "loading",
                      data: n && n.data,
                      formMethod: void 0,
                      formAction: void 0,
                      formEncType: void 0,
                      formData: void 0,
                      " _hasFetcherDoneAnything ": !0,
                    };
                  k.fetchers.set(t, r);
                });
                let e = s || k.actionData;
                j(
                  r(
                    { navigation: d },
                    e
                      ? 0 === Object.keys(e).length
                        ? { actionData: null }
                        : { actionData: e }
                      : {},
                    p.length > 0 ? { fetchers: new Map(k.fetchers) } : {},
                  ),
                );
              }
              (R = ++N),
                p.forEach((e) => {
                  let [t] = e;
                  return T.set(t, m);
                });
              let {
                results: g,
                loaderResults: v,
                fetcherResults: y,
              } = await V(k.matches, a, h, p, t);
              if (t.signal.aborted) return { shortCircuited: !0 };
              p.forEach((e) => {
                let [t] = e;
                return T.delete(t);
              });
              let b = we(g);
              if (b)
                return await U(k, b, { replace: i }), { shortCircuited: !0 };
              let { loaderData: E, errors: w } = ve(k, a, h, v, c, p, y, L);
              L.forEach((e, t) => {
                e.subscribe((n) => {
                  (n || e.done) && L.delete(t);
                });
              }),
                (function () {
                  let e = [];
                  for (let t of D) {
                    let n = k.fetchers.get(t);
                    u(n, "Expected fetcher: " + t),
                      "loading" === n.state && (D.delete(t), e.push(t));
                  }
                  G(e);
                })();
              let P = Q(R);
              return r(
                { loaderData: E, errors: w },
                P || p.length > 0 ? { fetchers: new Map(k.fetchers) } : {},
              );
            })(O, l, f, d, c && c.submission, c && c.replace, b, P);
            I ||
              ((m = null),
              z(
                l,
                r({ matches: f }, b ? { actionData: b } : {}, {
                  loaderData: A,
                  errors: F,
                }),
              ));
          }
          function H(e) {
            return k.fetchers.get(e) || ee;
          }
          async function U(t, n, l) {
            var o;
            let {
              submission: i,
              replace: s,
              isFetchActionRedirect: c,
            } = void 0 === l ? {} : l;
            n.revalidate && (S = !0);
            let d = f(
              t.location,
              n.location,
              r({ _isRedirect: !0 }, c ? { _isFetchActionRedirect: !0 } : {}),
            );
            if (
              (u(d, "Expected a location on the redirect navigation"),
              ne && void 0 !== (null == (o = window) ? void 0 : o.location))
            ) {
              let t = e.history.createURL(n.location).origin;
              if (window.location.origin !== t)
                return void (s
                  ? window.location.replace(n.location)
                  : window.location.assign(n.location));
            }
            m = null;
            let h = !0 === s ? a.Replace : a.Push,
              {
                formMethod: p,
                formAction: g,
                formEncType: v,
                formData: y,
              } = t.navigation;
            !i &&
              p &&
              g &&
              y &&
              v &&
              (i = {
                formMethod: p,
                formAction: g,
                formEncType: v,
                formData: y,
              }),
              J.has(n.status) && i && Re(i.formMethod)
                ? await B(h, d, {
                    submission: r({}, i, { formAction: n.location }),
                    preventScrollReset: w,
                  })
                : await B(h, d, {
                    overrideNavigation: {
                      state: "loading",
                      location: d,
                      formMethod: i ? i.formMethod : void 0,
                      formAction: i ? i.formAction : void 0,
                      formEncType: i ? i.formEncType : void 0,
                      formData: i ? i.formData : void 0,
                    },
                    preventScrollReset: w,
                  });
          }
          async function V(t, n, r, a, l) {
            let o = await Promise.all([
                ...r.map((e) => he("loader", l, e, n, p.basename)),
                ...a.map((t) => {
                  let [, n, r, a] = t;
                  return he(
                    "loader",
                    pe(e.history, n, l.signal),
                    r,
                    a,
                    p.basename,
                  );
                }),
              ]),
              i = o.slice(0, r.length),
              s = o.slice(r.length);
            return (
              await Promise.all([
                Oe(t, r, i, l.signal, !1, k.loaderData),
                Oe(
                  t,
                  a.map((e) => {
                    let [, , t] = e;
                    return t;
                  }),
                  s,
                  l.signal,
                  !0,
                ),
              ]),
              { results: o, loaderResults: i, fetcherResults: s }
            );
          }
          function $() {
            (S = !0),
              x.push(...le()),
              M.forEach((e, t) => {
                T.has(t) && (C.push(t), W(t));
              });
          }
          function K(e, t, n) {
            let r = be(k.matches, t);
            q(e),
              j({ errors: { [r.route.id]: n }, fetchers: new Map(k.fetchers) });
          }
          function q(e) {
            T.has(e) && W(e),
              M.delete(e),
              O.delete(e),
              D.delete(e),
              k.fetchers.delete(e);
          }
          function W(e) {
            let t = T.get(e);
            u(t, "Expected fetch controller: " + e), t.abort(), T.delete(e);
          }
          function G(e) {
            for (let t of e) {
              let e = {
                state: "idle",
                data: H(t).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
              };
              k.fetchers.set(t, e);
            }
          }
          function Q(e) {
            let t = [];
            for (let [n, r] of O)
              if (r < e) {
                let e = k.fetchers.get(n);
                u(e, "Expected fetcher: " + n),
                  "loading" === e.state && (W(n), O.delete(n), t.push(n));
              }
            return G(t), t.length > 0;
          }
          function Y(e) {
            k.blockers.delete(e), A.delete(e), I === e && (I = null);
          }
          function X(e, t) {
            let n = k.blockers.get(e) || te;
            u(
              ("unblocked" === n.state && "blocked" === t.state) ||
                ("blocked" === n.state && "blocked" === t.state) ||
                ("blocked" === n.state && "proceeding" === t.state) ||
                ("blocked" === n.state && "unblocked" === t.state) ||
                ("proceeding" === n.state && "unblocked" === t.state),
              "Invalid blocker state transition: " + n.state + " -> " + t.state,
            ),
              k.blockers.set(e, t),
              j({ blockers: new Map(k.blockers) });
          }
          function ae(e) {
            let { currentLocation: t, nextLocation: n, historyAction: r } = e;
            if (null == I) return;
            let a = A.get(I);
            u(a, "Could not find a function for the active blocker");
            let l = k.blockers.get(I);
            return l && "proceeding" === l.state
              ? void 0
              : a({ currentLocation: t, nextLocation: n, historyAction: r })
              ? I
              : void 0;
          }
          function le(e) {
            let t = [];
            return (
              L.forEach((n, r) => {
                (e && !e(r)) || (n.cancel(), t.push(r), L.delete(r));
              }),
              t
            );
          }
          function oe(e, t) {
            if (o && i && s) {
              let n = t.map((e) => Le(e, k.loaderData)),
                r = i(e, n) || e.key,
                a = o[r];
              if ("number" == typeof a) return a;
            }
            return null;
          }
          return (
            (p = {
              get basename() {
                return e.basename;
              },
              get state() {
                return k;
              },
              get routes() {
                return t;
              },
              initialize: function () {
                return (
                  (n = e.history.listen((t) => {
                    let { action: n, location: r, delta: a } = t;
                    if (F) return void (F = !1);
                    let l = ae({
                      currentLocation: k.location,
                      nextLocation: r,
                      historyAction: n,
                    });
                    return l
                      ? ((F = !0),
                        e.history.go(-1 * a),
                        void X(l, {
                          state: "blocked",
                          location: r,
                          proceed() {
                            X(l, {
                              state: "proceeding",
                              proceed: void 0,
                              reset: void 0,
                              location: r,
                            }),
                              e.history.go(a);
                          },
                          reset() {
                            Y(l), j({ blockers: new Map(p.state.blockers) });
                          },
                        }))
                      : B(n, r);
                  })),
                  k.initialized || B(a.Pop, k.location),
                  p
                );
              },
              subscribe: function (e) {
                return l.add(e), () => l.delete(e);
              },
              enableScrollRestoration: function (e, t, n) {
                if (
                  ((o = e),
                  (s = t),
                  (i = n || ((e) => e.key)),
                  !c && k.navigation === Z)
                ) {
                  c = !0;
                  let e = oe(k.location, k.matches);
                  null != e && j({ restoreScrollPosition: e });
                }
                return () => {
                  (o = null), (s = null), (i = null);
                };
              },
              navigate: async function t(n, l) {
                if ("number" == typeof n) return void e.history.go(n);
                let { path: o, submission: i, error: s } = se(n, l),
                  u = k.location,
                  c = f(k.location, o, l && l.state);
                c = r({}, c, e.history.encodeLocation(c));
                let d = l && null != l.replace ? l.replace : void 0,
                  h = a.Push;
                !0 === d
                  ? (h = a.Replace)
                  : !1 === d ||
                    (null != i &&
                      Re(i.formMethod) &&
                      i.formAction ===
                        k.location.pathname + k.location.search &&
                      (h = a.Replace));
                let p =
                    l && "preventScrollReset" in l
                      ? !0 === l.preventScrollReset
                      : void 0,
                  m = ae({
                    currentLocation: u,
                    nextLocation: c,
                    historyAction: h,
                  });
                if (!m)
                  return await B(h, c, {
                    submission: i,
                    pendingError: s,
                    preventScrollReset: p,
                    replace: l && l.replace,
                  });
                X(m, {
                  state: "blocked",
                  location: c,
                  proceed() {
                    X(m, {
                      state: "proceeding",
                      proceed: void 0,
                      reset: void 0,
                      location: c,
                    }),
                      t(n, l);
                  },
                  reset() {
                    Y(m), j({ blockers: new Map(k.blockers) });
                  },
                });
              },
              fetch: function (n, a, l, o) {
                if (re)
                  throw new Error(
                    "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
                  );
                T.has(n) && W(n);
                let i = y(t, l, e.basename);
                if (!i) return void K(n, a, Ee(404, { pathname: l }));
                let { path: s, submission: c } = se(l, o, !0),
                  d = Ie(i, s);
                c && Re(c.formMethod)
                  ? (async function (n, a, l, o, i, s) {
                      if (($(), M.delete(n), !o.route.action)) {
                        let e = Ee(405, {
                          method: s.formMethod,
                          pathname: l,
                          routeId: a,
                        });
                        return void K(n, a, e);
                      }
                      let c = k.fetchers.get(n),
                        d = r({ state: "submitting" }, s, {
                          data: c && c.data,
                          " _hasFetcherDoneAnything ": !0,
                        });
                      k.fetchers.set(n, d),
                        j({ fetchers: new Map(k.fetchers) });
                      let f = new AbortController(),
                        h = pe(e.history, l, f.signal, s);
                      T.set(n, f);
                      let g = await he("action", h, o, i, p.basename);
                      if (h.signal.aborted)
                        return void (T.get(n) === f && T.delete(n));
                      if (Ce(g)) {
                        T.delete(n), D.add(n);
                        let e = r({ state: "loading" }, s, {
                          data: void 0,
                          " _hasFetcherDoneAnything ": !0,
                        });
                        return (
                          k.fetchers.set(n, e),
                          j({ fetchers: new Map(k.fetchers) }),
                          U(k, g, { isFetchActionRedirect: !0 })
                        );
                      }
                      if (xe(g)) return void K(n, a, g.error);
                      if (Se(g)) throw Ee(400, { type: "defer-action" });
                      let v = k.navigation.location || k.location,
                        b = pe(e.history, v, f.signal),
                        w =
                          "idle" !== k.navigation.state
                            ? y(t, k.navigation.location, e.basename)
                            : k.matches;
                      u(w, "Didn't find any matches after fetcher action");
                      let _ = ++N;
                      O.set(n, _);
                      let P = r({ state: "loading", data: g.data }, s, {
                        " _hasFetcherDoneAnything ": !0,
                      });
                      k.fetchers.set(n, P);
                      let [I, A] = ce(
                        e.history,
                        k,
                        w,
                        s,
                        v,
                        S,
                        x,
                        C,
                        { [o.route.id]: g.data },
                        void 0,
                        M,
                      );
                      A.filter((e) => {
                        let [t] = e;
                        return t !== n;
                      }).forEach((e) => {
                        let [t] = e,
                          n = k.fetchers.get(t),
                          r = {
                            state: "loading",
                            data: n && n.data,
                            formMethod: void 0,
                            formAction: void 0,
                            formEncType: void 0,
                            formData: void 0,
                            " _hasFetcherDoneAnything ": !0,
                          };
                        k.fetchers.set(t, r), T.set(t, f);
                      }),
                        j({ fetchers: new Map(k.fetchers) });
                      let {
                        results: F,
                        loaderResults: B,
                        fetcherResults: H,
                      } = await V(k.matches, w, I, A, b);
                      if (f.signal.aborted) return;
                      O.delete(n),
                        T.delete(n),
                        A.forEach((e) => {
                          let [t] = e;
                          return T.delete(t);
                        });
                      let q = we(F);
                      if (q) return U(k, q);
                      let { loaderData: W, errors: G } = ve(
                          k,
                          k.matches,
                          I,
                          B,
                          void 0,
                          A,
                          H,
                          L,
                        ),
                        Y = {
                          state: "idle",
                          data: g.data,
                          formMethod: void 0,
                          formAction: void 0,
                          formEncType: void 0,
                          formData: void 0,
                          " _hasFetcherDoneAnything ": !0,
                        };
                      k.fetchers.set(n, Y);
                      let X = Q(_);
                      "loading" === k.navigation.state && _ > R
                        ? (u(E, "Expected pending action"),
                          m && m.abort(),
                          z(k.navigation.location, {
                            matches: w,
                            loaderData: W,
                            errors: G,
                            fetchers: new Map(k.fetchers),
                          }))
                        : (j(
                            r(
                              {
                                errors: G,
                                loaderData: ye(k.loaderData, W, w, G),
                              },
                              X ? { fetchers: new Map(k.fetchers) } : {},
                            ),
                          ),
                          (S = !1));
                    })(n, a, s, d, i, c)
                  : (M.set(n, [s, d, i]),
                    (async function (t, n, a, l, o, i) {
                      let s = k.fetchers.get(t),
                        c = r(
                          {
                            state: "loading",
                            formMethod: void 0,
                            formAction: void 0,
                            formEncType: void 0,
                            formData: void 0,
                          },
                          i,
                          {
                            data: s && s.data,
                            " _hasFetcherDoneAnything ": !0,
                          },
                        );
                      k.fetchers.set(t, c),
                        j({ fetchers: new Map(k.fetchers) });
                      let d = new AbortController(),
                        f = pe(e.history, a, d.signal);
                      T.set(t, d);
                      let h = await he("loader", f, l, o, p.basename);
                      Se(h) && (h = (await De(h, f.signal, !0)) || h);
                      T.get(t) === d && T.delete(t);
                      if (f.signal.aborted) return;
                      if (Ce(h)) return void (await U(k, h));
                      if (xe(h)) {
                        let e = be(k.matches, n);
                        return (
                          k.fetchers.delete(t),
                          void j({
                            fetchers: new Map(k.fetchers),
                            errors: { [e.route.id]: h.error },
                          })
                        );
                      }
                      u(!Se(h), "Unhandled fetcher deferred data");
                      let m = {
                        state: "idle",
                        data: h.data,
                        formMethod: void 0,
                        formAction: void 0,
                        formEncType: void 0,
                        formData: void 0,
                        " _hasFetcherDoneAnything ": !0,
                      };
                      k.fetchers.set(t, m),
                        j({ fetchers: new Map(k.fetchers) });
                    })(n, a, s, d, i, c));
              },
              revalidate: function () {
                $(),
                  j({ revalidation: "loading" }),
                  "submitting" !== k.navigation.state &&
                    ("idle" !== k.navigation.state
                      ? B(E || k.historyAction, k.navigation.location, {
                          overrideNavigation: k.navigation,
                        })
                      : B(k.historyAction, k.location, {
                          startUninterruptedRevalidation: !0,
                        }));
              },
              createHref: (t) => e.history.createHref(t),
              encodeLocation: (t) => e.history.encodeLocation(t),
              getFetcher: H,
              deleteFetcher: q,
              dispose: function () {
                n && n(),
                  l.clear(),
                  m && m.abort(),
                  k.fetchers.forEach((e, t) => q(t)),
                  k.blockers.forEach((e, t) => Y(t));
              },
              getBlocker: function (e, t) {
                let n = k.blockers.get(e) || te;
                return (
                  A.get(e) !== t &&
                    (A.set(e, t),
                    null == I
                      ? (I = e)
                      : e !== I &&
                        P(!1, "A router only supports one blocker at a time")),
                  n
                );
              },
              deleteBlocker: Y,
              _internalFetchControllers: T,
              _internalActiveDeferreds: L,
            }),
            p
          );
        }
        const le = Symbol("deferred");
        function oe(e, t) {
          u(
            e.length > 0,
            "You must provide a non-empty routes array to createStaticHandler",
          );
          let n = v(e),
            a = (t ? t.basename : null) || "/";
          async function l(e, t, n, l, i) {
            u(
              e.signal,
              "query()/queryRoute() requests must contain an AbortController signal",
            );
            try {
              if (Re(e.method.toLowerCase())) {
                let s = await (async function (e, t, n, l, i) {
                  let s;
                  if (n.route.action) {
                    if (
                      ((s = await he("action", e, n, t, a, !0, i, l)),
                      e.signal.aborted)
                    ) {
                      throw new Error(
                        (i ? "queryRoute" : "query") + "() call aborted",
                      );
                    }
                  } else {
                    let t = Ee(405, {
                      method: e.method,
                      pathname: new URL(e.url).pathname,
                      routeId: n.route.id,
                    });
                    if (i) throw t;
                    s = { type: g.error, error: t };
                  }
                  if (Ce(s))
                    throw new Response(null, {
                      status: s.status,
                      headers: { Location: s.location },
                    });
                  if (Se(s)) {
                    let e = Ee(400, { type: "defer-action" });
                    if (i) throw e;
                    s = { type: g.error, error: e };
                  }
                  if (i) {
                    if (xe(s)) throw s.error;
                    return {
                      matches: [n],
                      loaderData: {},
                      actionData: { [n.route.id]: s.data },
                      errors: null,
                      statusCode: 200,
                      loaderHeaders: {},
                      actionHeaders: {},
                      activeDeferreds: null,
                    };
                  }
                  if (xe(s)) {
                    let a = be(t, n.route.id);
                    return r(
                      {},
                      await o(e, t, l, void 0, { [a.route.id]: s.error }),
                      {
                        statusCode: q(s.error) ? s.error.status : 500,
                        actionData: null,
                        actionHeaders: r(
                          {},
                          s.headers ? { [n.route.id]: s.headers } : {},
                        ),
                      },
                    );
                  }
                  let u = new Request(e.url, {
                    headers: e.headers,
                    redirect: e.redirect,
                    signal: e.signal,
                  });
                  return r(
                    {},
                    await o(u, t, l),
                    s.statusCode ? { statusCode: s.statusCode } : {},
                    {
                      actionData: { [n.route.id]: s.data },
                      actionHeaders: r(
                        {},
                        s.headers ? { [n.route.id]: s.headers } : {},
                      ),
                    },
                  );
                })(e, n, i || Ie(n, t), l, null != i);
                return s;
              }
              let s = await o(e, n, l, i);
              return Te(s)
                ? s
                : r({}, s, { actionData: null, actionHeaders: {} });
            } catch (e) {
              if ((s = e) && Te(s.response) && (s.type === g.data || g.error)) {
                if (e.type === g.error && !Ne(e.response)) throw e.response;
                return e.response;
              }
              if (Ne(e)) return e;
              throw e;
            }
            var s;
          }
          async function o(e, t, n, l, o) {
            let i = null != l;
            if (i && (null == l || !l.route.loader))
              throw Ee(400, {
                method: e.method,
                pathname: new URL(e.url).pathname,
                routeId: null == l ? void 0 : l.route.id,
              });
            let s = (l ? [l] : ue(t, Object.keys(o || {})[0])).filter(
              (e) => e.route.loader,
            );
            if (0 === s.length)
              return {
                matches: t,
                loaderData: t.reduce(
                  (e, t) => Object.assign(e, { [t.route.id]: null }),
                  {},
                ),
                errors: o || null,
                statusCode: 200,
                loaderHeaders: {},
                activeDeferreds: null,
              };
            let u = await Promise.all([
              ...s.map((r) => he("loader", e, r, t, a, !0, i, n)),
            ]);
            if (e.signal.aborted) {
              throw new Error((i ? "queryRoute" : "query") + "() call aborted");
            }
            let c = new Map(),
              d = ge(t, s, u, o, c),
              f = new Set(s.map((e) => e.route.id));
            return (
              t.forEach((e) => {
                f.has(e.route.id) || (d.loaderData[e.route.id] = null);
              }),
              r({}, d, {
                matches: t,
                activeDeferreds:
                  c.size > 0 ? Object.fromEntries(c.entries()) : null,
              })
            );
          }
          return {
            dataRoutes: n,
            query: async function (e, t) {
              let { requestContext: o } = void 0 === t ? {} : t,
                i = new URL(e.url),
                s = e.method.toLowerCase(),
                u = f("", h(i), null, "default"),
                c = y(n, u, a);
              if (!Pe(s) && "head" !== s) {
                let e = Ee(405, { method: s }),
                  { matches: t, route: r } = ke(n);
                return {
                  basename: a,
                  location: u,
                  matches: t,
                  loaderData: {},
                  actionData: null,
                  errors: { [r.id]: e },
                  statusCode: e.status,
                  loaderHeaders: {},
                  actionHeaders: {},
                  activeDeferreds: null,
                };
              }
              if (!c) {
                let e = Ee(404, { pathname: u.pathname }),
                  { matches: t, route: r } = ke(n);
                return {
                  basename: a,
                  location: u,
                  matches: t,
                  loaderData: {},
                  actionData: null,
                  errors: { [r.id]: e },
                  statusCode: e.status,
                  loaderHeaders: {},
                  actionHeaders: {},
                  activeDeferreds: null,
                };
              }
              let d = await l(e, u, c, o);
              return Te(d) ? d : r({ location: u, basename: a }, d);
            },
            queryRoute: async function (e, t) {
              let { routeId: r, requestContext: o } = void 0 === t ? {} : t,
                i = new URL(e.url),
                s = e.method.toLowerCase(),
                u = f("", h(i), null, "default"),
                c = y(n, u, a);
              if (!Pe(s) && "head" !== s && "options" !== s)
                throw Ee(405, { method: s });
              if (!c) throw Ee(404, { pathname: u.pathname });
              let d = r ? c.find((e) => e.route.id === r) : Ie(c, u);
              if (r && !d) throw Ee(403, { pathname: u.pathname, routeId: r });
              if (!d) throw Ee(404, { pathname: u.pathname });
              let p = await l(e, u, c, o, d);
              if (Te(p)) return p;
              let m = p.errors ? Object.values(p.errors)[0] : void 0;
              if (void 0 !== m) throw m;
              if (p.actionData) return Object.values(p.actionData)[0];
              if (p.loaderData) {
                var g;
                let e = Object.values(p.loaderData)[0];
                return (
                  null != (g = p.activeDeferreds) &&
                    g[d.route.id] &&
                    (e[le] = p.activeDeferreds[d.route.id]),
                  e
                );
              }
            },
          };
        }
        function ie(e, t, n) {
          return r({}, t, {
            statusCode: 500,
            errors: { [t._deepestRenderedBoundaryId || e[0].id]: n },
          });
        }
        function se(e, t, n) {
          void 0 === n && (n = !1);
          let r,
            a = "string" == typeof e ? e : h(e);
          if (
            !t ||
            !(function (e) {
              return null != e && "formData" in e;
            })(t)
          )
            return { path: a };
          if (t.formMethod && !Pe(t.formMethod))
            return { path: a, error: Ee(405, { method: t.formMethod }) };
          if (
            t.formData &&
            ((r = {
              formMethod: t.formMethod || "get",
              formAction: _e(a),
              formEncType:
                (t && t.formEncType) || "application/x-www-form-urlencoded",
              formData: t.formData,
            }),
            Re(r.formMethod))
          )
            return { path: a, submission: r };
          let l = p(a);
          try {
            let e = me(t.formData);
            n && l.search && Me(l.search) && e.append("index", ""),
              (l.search = "?" + e);
          } catch (e) {
            return { path: a, error: Ee(400) };
          }
          return { path: h(l), submission: r };
        }
        function ue(e, t) {
          let n = e;
          if (t) {
            let r = e.findIndex((e) => e.route.id === t);
            r >= 0 && (n = e.slice(0, r));
          }
          return n;
        }
        function ce(e, t, n, r, a, l, o, i, s, u, c) {
          let d = u ? Object.values(u)[0] : s ? Object.values(s)[0] : void 0,
            f = ue(n, u ? Object.keys(u)[0] : void 0).filter(
              (n, i) =>
                null != n.route.loader &&
                ((function (e, t, n) {
                  let r = !t || n.route.id !== t.route.id,
                    a = void 0 === e[n.route.id];
                  return r || a;
                })(t.loaderData, t.matches[i], n) ||
                  o.some((e) => e === n.route.id) ||
                  fe(e, t.location, t.matches[i], r, a, n, l, d)),
            ),
            h = [];
          return (
            c &&
              c.forEach((t, n) => {
                let [a, o, s] = t;
                if (i.includes(n)) h.push([n, a, o, s]);
                else if (l) {
                  fe(e, a, o, r, a, o, l, d) && h.push([n, a, o, s]);
                }
              }),
            [f, h]
          );
        }
        function de(e, t) {
          let n = e.route.path;
          return (
            e.pathname !== t.pathname ||
            (n && n.endsWith("*") && e.params["*"] !== t.params["*"])
          );
        }
        function fe(e, t, n, a, l, o, i, s) {
          let u = e.createURL(t),
            c = n.params,
            d = e.createURL(l),
            f = o.params,
            h =
              de(n, o) ||
              u.toString() === d.toString() ||
              u.search !== d.search ||
              i;
          if (o.route.shouldRevalidate) {
            let e = o.route.shouldRevalidate(
              r(
                { currentUrl: u, currentParams: c, nextUrl: d, nextParams: f },
                a,
                { actionResult: s, defaultShouldRevalidate: h },
              ),
            );
            if ("boolean" == typeof e) return e;
          }
          return h;
        }
        async function he(e, t, n, r, a, l, o, i) {
          let s, c, d;
          void 0 === a && (a = "/"),
            void 0 === l && (l = !1),
            void 0 === o && (o = !1);
          let f = new Promise((e, t) => (d = t)),
            p = () => d();
          t.signal.addEventListener("abort", p);
          try {
            let r = n.route[e];
            u(
              r,
              "Could not find the " +
                e +
                ' to run on the "' +
                n.route.id +
                '" route',
            ),
              (c = await Promise.race([
                r({ request: t, params: n.params, context: i }),
                f,
              ])),
              u(
                void 0 !== c,
                "You defined " +
                  ("action" === e ? "an action" : "a loader") +
                  ' for route "' +
                  n.route.id +
                  "\" but didn't return anything from your `" +
                  e +
                  "` function. Please return a value or `null`.",
              );
          } catch (e) {
            (s = g.error), (c = e);
          } finally {
            t.signal.removeEventListener("abort", p);
          }
          if (Te(c)) {
            let e,
              i = c.status;
            if (X.has(i)) {
              let e = c.headers.get("Location");
              if (
                (u(
                  e,
                  "Redirects returned/thrown from loaders/actions must have a Location header",
                ),
                /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(e))
              ) {
                if (!l) {
                  let n = new URL(t.url),
                    r = e.startsWith("//")
                      ? new URL(n.protocol + e)
                      : new URL(e);
                  r.origin === n.origin && (e = r.pathname + r.search + r.hash);
                }
              } else {
                let l = M(
                  e,
                  D(r.slice(0, r.indexOf(n) + 1)).map((e) => e.pathnameBase),
                  new URL(t.url).pathname,
                );
                if ((u(h(l), "Unable to resolve redirect location: " + e), a)) {
                  let e = l.pathname;
                  l.pathname = "/" === e ? a : I([a, e]);
                }
                e = h(l);
              }
              if (l) throw (c.headers.set("Location", e), c);
              return {
                type: g.redirect,
                status: i,
                location: e,
                revalidate: null !== c.headers.get("X-Remix-Revalidate"),
              };
            }
            if (o) throw { type: s || g.data, response: c };
            let d = c.headers.get("Content-Type");
            return (
              (e =
                d && /\bapplication\/json\b/.test(d)
                  ? await c.json()
                  : await c.text()),
              s === g.error
                ? {
                    type: s,
                    error: new K(i, c.statusText, e),
                    headers: c.headers,
                  }
                : {
                    type: g.data,
                    data: e,
                    statusCode: c.status,
                    headers: c.headers,
                  }
            );
          }
          return s === g.error
            ? { type: s, error: c }
            : c instanceof H
            ? { type: g.deferred, deferredData: c }
            : { type: g.data, data: c };
        }
        function pe(e, t, n, r) {
          let a = e.createURL(_e(t)).toString(),
            l = { signal: n };
          if (r && Re(r.formMethod)) {
            let { formMethod: e, formEncType: t, formData: n } = r;
            (l.method = e.toUpperCase()),
              (l.body = "application/x-www-form-urlencoded" === t ? me(n) : n);
          }
          return new Request(a, l);
        }
        function me(e) {
          let t = new URLSearchParams();
          for (let [n, r] of e.entries())
            u(
              "string" == typeof r,
              'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.',
            ),
              t.append(n, r);
          return t;
        }
        function ge(e, t, n, r, a) {
          let l,
            o = {},
            i = null,
            s = !1,
            c = {};
          return (
            n.forEach((n, d) => {
              let f = t[d].route.id;
              if (
                (u(
                  !Ce(n),
                  "Cannot handle redirect results in processLoaderData",
                ),
                xe(n))
              ) {
                let t = be(e, f),
                  a = n.error;
                r && ((a = Object.values(r)[0]), (r = void 0)),
                  (i = i || {}),
                  null == i[t.route.id] && (i[t.route.id] = a),
                  (o[f] = void 0),
                  s || ((s = !0), (l = q(n.error) ? n.error.status : 500)),
                  n.headers && (c[f] = n.headers);
              } else
                Se(n)
                  ? (a.set(f, n.deferredData), (o[f] = n.deferredData.data))
                  : (o[f] = n.data),
                  null == n.statusCode ||
                    200 === n.statusCode ||
                    s ||
                    (l = n.statusCode),
                  n.headers && (c[f] = n.headers);
            }),
            r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
            { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: c }
          );
        }
        function ve(e, t, n, a, l, o, i, s) {
          let { loaderData: c, errors: d } = ge(t, n, a, l, s);
          for (let t = 0; t < o.length; t++) {
            let [n, , a] = o[t];
            u(
              void 0 !== i && void 0 !== i[t],
              "Did not find corresponding fetcher result",
            );
            let l = i[t];
            if (xe(l)) {
              let t = be(e.matches, a.route.id);
              (d && d[t.route.id]) || (d = r({}, d, { [t.route.id]: l.error })),
                e.fetchers.delete(n);
            } else if (Ce(l)) u(!1, "Unhandled fetcher revalidation redirect");
            else if (Se(l)) u(!1, "Unhandled fetcher deferred data");
            else {
              let t = {
                state: "idle",
                data: l.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
              };
              e.fetchers.set(n, t);
            }
          }
          return { loaderData: c, errors: d };
        }
        function ye(e, t, n, a) {
          let l = r({}, t);
          for (let r of n) {
            let n = r.route.id;
            if (
              (t.hasOwnProperty(n)
                ? void 0 !== t[n] && (l[n] = t[n])
                : void 0 !== e[n] && (l[n] = e[n]),
              a && a.hasOwnProperty(n))
            )
              break;
          }
          return l;
        }
        function be(e, t) {
          return (
            (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
              .reverse()
              .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
          );
        }
        function ke(e) {
          let t = e.find((e) => e.index || !e.path || "/" === e.path) || {
            id: "__shim-error-route__",
          };
          return {
            matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
            route: t,
          };
        }
        function Ee(e, t) {
          let {
              pathname: n,
              routeId: r,
              method: a,
              type: l,
            } = void 0 === t ? {} : t,
            o = "Unknown Server Error",
            i = "Unknown @remix-run/router error";
          return (
            400 === e
              ? ((o = "Bad Request"),
                (i =
                  a && n && r
                    ? "You made a " +
                      a +
                      ' request to "' +
                      n +
                      '" but did not provide a `loader` for route "' +
                      r +
                      '", so there is no way to handle the request.'
                    : "defer-action" === l
                    ? "defer() is not supported in actions"
                    : "Cannot submit binary form data using GET"))
              : 403 === e
              ? ((o = "Forbidden"),
                (i = 'Route "' + r + '" does not match URL "' + n + '"'))
              : 404 === e
              ? ((o = "Not Found"), (i = 'No route matches URL "' + n + '"'))
              : 405 === e &&
                ((o = "Method Not Allowed"),
                a && n && r
                  ? (i =
                      "You made a " +
                      a.toUpperCase() +
                      ' request to "' +
                      n +
                      '" but did not provide an `action` for route "' +
                      r +
                      '", so there is no way to handle the request.')
                  : a &&
                    (i = 'Invalid request method "' + a.toUpperCase() + '"')),
            new K(e || 500, o, new Error(i), !0)
          );
        }
        function we(e) {
          for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (Ce(n)) return n;
          }
        }
        function _e(e) {
          return h(r({}, "string" == typeof e ? p(e) : e, { hash: "" }));
        }
        function Se(e) {
          return e.type === g.deferred;
        }
        function xe(e) {
          return e.type === g.error;
        }
        function Ce(e) {
          return (e && e.type) === g.redirect;
        }
        function Te(e) {
          return (
            null != e &&
            "number" == typeof e.status &&
            "string" == typeof e.statusText &&
            "object" == typeof e.headers &&
            void 0 !== e.body
          );
        }
        function Ne(e) {
          if (!Te(e)) return !1;
          let t = e.status,
            n = e.headers.get("Location");
          return t >= 300 && t <= 399 && null != n;
        }
        function Pe(e) {
          return Y.has(e);
        }
        function Re(e) {
          return G.has(e);
        }
        async function Oe(e, t, n, r, a, l) {
          for (let o = 0; o < n.length; o++) {
            let i = n[o],
              s = t[o],
              u = e.find((e) => e.route.id === s.route.id),
              c = null != u && !de(u, s) && void 0 !== (l && l[s.route.id]);
            Se(i) &&
              (a || c) &&
              (await De(i, r, a).then((e) => {
                e && (n[o] = e || n[o]);
              }));
          }
        }
        async function De(e, t, n) {
          if (
            (void 0 === n && (n = !1), !(await e.deferredData.resolveData(t)))
          ) {
            if (n)
              try {
                return { type: g.data, data: e.deferredData.unwrappedData };
              } catch (e) {
                return { type: g.error, error: e };
              }
            return { type: g.data, data: e.deferredData.data };
          }
        }
        function Me(e) {
          return new URLSearchParams(e).getAll("index").some((e) => "" === e);
        }
        function Le(e, t) {
          let { route: n, pathname: r, params: a } = e;
          return {
            id: n.id,
            pathname: r,
            params: a,
            data: t[n.id],
            handle: n.handle,
          };
        }
        function Ie(e, t) {
          let n = "string" == typeof t ? p(t).search : t.search;
          if (e[e.length - 1].route.index && Me(n || ""))
            return e[e.length - 1];
          let r = D(e);
          return r[r.length - 1];
        }
      },
      750: (e, t, n) => {
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
        var o = n(668),
          i = n(94),
          s = n(477),
          u = n(533),
          c = n(767);
        (c.messages = l(l({}, c.messages), s.messages)),
          (u.messages = l(l({}, u.messages), i.messages)),
          o.messages.push(u, c),
          (e.exports = o);
      },
      533: (e) => {
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
      767: (e) => {
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
      544: (e, t, n) => {
        var r = n(416),
          a = n(861),
          l = n(698);
        function o(e, t) {
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
        function i(e) {
          return null != e && "object" === l(e);
        }
        function s(e) {
          return null == e || "object" !== l(e);
        }
        e.exports = {
          isObject: i,
          isNoObject: s,
          ensureObject: function (e, t) {
            if (s(e)) return {};
            if (s(t) || "string" != typeof t.path || "" === t.path) return e;
            for (
              var n = t.path, r = e, a = n.split("."), l = 0;
              l < a.length;
              l++
            ) {
              var o = a[l];
              if (s(r) || "" === o) return {};
              r = r[o];
            }
            return i(r) ? r : {};
          },
          expectObject: function (e, t) {
            if (i(e)) return e;
            if (!i(t)) return null;
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
              o = void 0 !== l && l,
              i = function () {
                if (a instanceof Error) throw a;
                return a;
              };
            if (void 0 === t || "string" != typeof n) return i();
            if ("" === n) return o && s(t) ? i() : t;
            for (var u = t, c = n.split("."), d = 0; d < c.length; d++) {
              var f = c[d];
              if ("" === f) return i();
              if (s(u)) return o ? i() : void 0;
              u = u[f];
            }
            return o && s(u) ? i() : u;
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
                var h = t[u];
                if (null == h) return (t[u] = d(f) ? [] : {}), t[u];
                if (i(h))
                  return (
                    c &&
                      (t[u] = Array.isArray(h)
                        ? a(h)
                        : (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? o(Object(n), !0).forEach(function (t) {
                                    r(e, t, n[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                    e,
                                    Object.getOwnPropertyDescriptors(n),
                                  )
                                : o(Object(n)).forEach(function (t) {
                                    Object.defineProperty(
                                      e,
                                      t,
                                      Object.getOwnPropertyDescriptor(n, t),
                                    );
                                  });
                            }
                            return e;
                          })({}, h)),
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
              var h = n.split(".");
              if (
                0 === h.length ||
                h.some(function (e) {
                  return "" === e;
                })
              )
                throw new Error('invalid argument "path"');
              for (var p = t, m = 0; m < h.length; m++)
                p = f({ currSubObject: p, propertyPath: h, currPathIndex: m });
            } catch (e) {
              throw (
                ((e.message = "setInObject() failed - ".concat(e.message)), e)
              );
            }
          },
        };
      },
      668: (e) => {
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
            const o = r(l) || r(n);
            return void 0 === o.messages[e]
              ? "KEY " + e + " FOR LANGUAGE " + o.longNameEn + " DOES NOT EXIST"
              : o.messages[e];
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
      675: (e, t, n) => {
        "use strict";
        /**
         * @license React
         * react-dom-server-legacy.node.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = n(294),
          a = n(781),
          l = Object.prototype.hasOwnProperty,
          o =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          i = {},
          s = {};
        function u(e) {
          return (
            !!l.call(s, e) ||
            (!l.call(i, e) && (o.test(e) ? (s[e] = !0) : ((i[e] = !0), !1)))
          );
        }
        function c(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var d = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            d[e] = new c(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            d[t] = new c(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              d[e] = new c(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            d[e] = new c(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              d[e] = new c(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            d[e] = new c(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            d[e] = new c(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            d[e] = new c(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            d[e] = new c(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var f = /[\-:]([a-z])/g;
        function h(e) {
          return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(f, h);
            d[t] = new c(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(f, h);
              d[t] = new c(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(f, h);
            d[t] = new c(
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
            d[e] = new c(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (d.xlinkHref = new c(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            d[e] = new c(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var p = {
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
          m = ["Webkit", "ms", "Moz", "O"];
        Object.keys(p).forEach(function (e) {
          m.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (p[t] = p[e]);
          });
        });
        var g = /["'&<>]/;
        function v(e) {
          if ("boolean" == typeof e || "number" == typeof e) return "" + e;
          e = "" + e;
          var t = g.exec(e);
          if (t) {
            var n,
              r = "",
              a = 0;
            for (n = t.index; n < e.length; n++) {
              switch (e.charCodeAt(n)) {
                case 34:
                  t = "&quot;";
                  break;
                case 38:
                  t = "&amp;";
                  break;
                case 39:
                  t = "&#x27;";
                  break;
                case 60:
                  t = "&lt;";
                  break;
                case 62:
                  t = "&gt;";
                  break;
                default:
                  continue;
              }
              a !== n && (r += e.substring(a, n)), (a = n + 1), (r += t);
            }
            e = a !== n ? r + e.substring(a, n) : r;
          }
          return e;
        }
        var y = /([A-Z])/g,
          b = /^ms-/,
          k = Array.isArray;
        function E(e, t) {
          return { insertionMode: e, selectedValue: t };
        }
        var w = new Map();
        function _(e, t, n) {
          if ("object" != typeof n)
            throw Error(
              "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
            );
          for (var r in ((t = !0), n))
            if (l.call(n, r)) {
              var a = n[r];
              if (null != a && "boolean" != typeof a && "" !== a) {
                if (0 === r.indexOf("--")) {
                  var o = v(r);
                  a = v(("" + a).trim());
                } else {
                  o = r;
                  var i = w.get(o);
                  void 0 !== i ||
                    ((i = v(
                      o.replace(y, "-$1").toLowerCase().replace(b, "-ms-"),
                    )),
                    w.set(o, i)),
                    (o = i),
                    (a =
                      "number" == typeof a
                        ? 0 === a || l.call(p, r)
                          ? "" + a
                          : a + "px"
                        : v(("" + a).trim()));
                }
                t
                  ? ((t = !1), e.push(' style="', o, ":", a))
                  : e.push(";", o, ":", a);
              }
            }
          t || e.push('"');
        }
        function S(e, t, n, r) {
          switch (n) {
            case "style":
              return void _(e, t, r);
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (
            !(2 < n.length) ||
            ("o" !== n[0] && "O" !== n[0]) ||
            ("n" !== n[1] && "N" !== n[1])
          )
            if (null !== (t = d.hasOwnProperty(n) ? d[n] : null)) {
              switch (typeof r) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  if (!t.acceptsBooleans) return;
              }
              switch (((n = t.attributeName), t.type)) {
                case 3:
                  r && e.push(" ", n, '=""');
                  break;
                case 4:
                  !0 === r
                    ? e.push(" ", n, '=""')
                    : !1 !== r && e.push(" ", n, '="', v(r), '"');
                  break;
                case 5:
                  isNaN(r) || e.push(" ", n, '="', v(r), '"');
                  break;
                case 6:
                  !isNaN(r) && 1 <= r && e.push(" ", n, '="', v(r), '"');
                  break;
                default:
                  t.sanitizeURL && (r = "" + r),
                    e.push(" ", n, '="', v(r), '"');
              }
            } else if (u(n)) {
              switch (typeof r) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  if (
                    "data-" !== (t = n.toLowerCase().slice(0, 5)) &&
                    "aria-" !== t
                  )
                    return;
              }
              e.push(" ", n, '="', v(r), '"');
            }
        }
        function x(e, t, n) {
          if (null != t) {
            if (null != n)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
              );
            if ("object" != typeof t || !("__html" in t))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.",
              );
            null != (t = t.__html) && e.push("" + t);
          }
        }
        function C(e, t, n, r) {
          e.push(P(n));
          var a,
            o = (n = null);
          for (a in t)
            if (l.call(t, a)) {
              var i = t[a];
              if (null != i)
                switch (a) {
                  case "children":
                    n = i;
                    break;
                  case "dangerouslySetInnerHTML":
                    o = i;
                    break;
                  default:
                    S(e, r, a, i);
                }
            }
          return (
            e.push(">"),
            x(e, o, n),
            "string" == typeof n ? (e.push(v(n)), null) : n
          );
        }
        var T = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
          N = new Map();
        function P(e) {
          var t = N.get(e);
          if (void 0 === t) {
            if (!T.test(e)) throw Error("Invalid tag: " + e);
            (t = "<" + e), N.set(e, t);
          }
          return t;
        }
        function R(e, t, n, a, o) {
          switch (t) {
            case "select":
              e.push(P("select"));
              var i = null,
                s = null;
              for (h in n)
                if (l.call(n, h)) {
                  var c = n[h];
                  if (null != c)
                    switch (h) {
                      case "children":
                        i = c;
                        break;
                      case "dangerouslySetInnerHTML":
                        s = c;
                        break;
                      case "defaultValue":
                      case "value":
                        break;
                      default:
                        S(e, a, h, c);
                    }
                }
              return e.push(">"), x(e, s, i), i;
            case "option":
              (s = o.selectedValue), e.push(P("option"));
              var d = (c = null),
                f = null,
                h = null;
              for (i in n)
                if (l.call(n, i)) {
                  var p = n[i];
                  if (null != p)
                    switch (i) {
                      case "children":
                        c = p;
                        break;
                      case "selected":
                        f = p;
                        break;
                      case "dangerouslySetInnerHTML":
                        h = p;
                        break;
                      case "value":
                        d = p;
                      default:
                        S(e, a, i, p);
                    }
                }
              if (null != s)
                if (
                  ((n =
                    null !== d
                      ? "" + d
                      : (function (e) {
                          var t = "";
                          return (
                            r.Children.forEach(e, function (e) {
                              null != e && (t += e);
                            }),
                            t
                          );
                        })(c)),
                  k(s))
                ) {
                  for (a = 0; a < s.length; a++)
                    if ("" + s[a] === n) {
                      e.push(' selected=""');
                      break;
                    }
                } else "" + s === n && e.push(' selected=""');
              else f && e.push(' selected=""');
              return e.push(">"), x(e, h, c), c;
            case "textarea":
              for (c in (e.push(P("textarea")), (h = s = i = null), n))
                if (l.call(n, c) && null != (d = n[c]))
                  switch (c) {
                    case "children":
                      h = d;
                      break;
                    case "value":
                      i = d;
                      break;
                    case "defaultValue":
                      s = d;
                      break;
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "`dangerouslySetInnerHTML` does not make sense on <textarea>.",
                      );
                    default:
                      S(e, a, c, d);
                  }
              if (
                (null === i && null !== s && (i = s), e.push(">"), null != h)
              ) {
                if (null != i)
                  throw Error(
                    "If you supply `defaultValue` on a <textarea>, do not pass children.",
                  );
                if (k(h) && 1 < h.length)
                  throw Error("<textarea> can only have at most one child.");
                i = "" + h;
              }
              return (
                "string" == typeof i && "\n" === i[0] && e.push("\n"),
                null !== i && e.push(v("" + i)),
                null
              );
            case "input":
              for (s in (e.push(P("input")), (d = h = c = i = null), n))
                if (l.call(n, s) && null != (f = n[s]))
                  switch (s) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.",
                      );
                    case "defaultChecked":
                      d = f;
                      break;
                    case "defaultValue":
                      c = f;
                      break;
                    case "checked":
                      h = f;
                      break;
                    case "value":
                      i = f;
                      break;
                    default:
                      S(e, a, s, f);
                  }
              return (
                null !== h
                  ? S(e, a, "checked", h)
                  : null !== d && S(e, a, "checked", d),
                null !== i
                  ? S(e, a, "value", i)
                  : null !== c && S(e, a, "value", c),
                e.push("/>"),
                null
              );
            case "menuitem":
              for (var m in (e.push(P("menuitem")), n))
                if (l.call(n, m) && null != (i = n[m]))
                  switch (m) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "menuitems cannot have `children` nor `dangerouslySetInnerHTML`.",
                      );
                    default:
                      S(e, a, m, i);
                  }
              return e.push(">"), null;
            case "title":
              for (p in (e.push(P("title")), (i = null), n))
                if (l.call(n, p) && null != (s = n[p]))
                  switch (p) {
                    case "children":
                      i = s;
                      break;
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "`dangerouslySetInnerHTML` does not make sense on <title>.",
                      );
                    default:
                      S(e, a, p, s);
                  }
              return e.push(">"), i;
            case "listing":
            case "pre":
              for (d in (e.push(P(t)), (s = i = null), n))
                if (l.call(n, d) && null != (c = n[d]))
                  switch (d) {
                    case "children":
                      i = c;
                      break;
                    case "dangerouslySetInnerHTML":
                      s = c;
                      break;
                    default:
                      S(e, a, d, c);
                  }
              if ((e.push(">"), null != s)) {
                if (null != i)
                  throw Error(
                    "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
                  );
                if ("object" != typeof s || !("__html" in s))
                  throw Error(
                    "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.",
                  );
                null != (n = s.__html) &&
                  ("string" == typeof n && 0 < n.length && "\n" === n[0]
                    ? e.push("\n", n)
                    : e.push("" + n));
              }
              return "string" == typeof i && "\n" === i[0] && e.push("\n"), i;
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              for (var g in (e.push(P(t)), n))
                if (l.call(n, g) && null != (i = n[g]))
                  switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        t +
                          " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.",
                      );
                    default:
                      S(e, a, g, i);
                  }
              return e.push("/>"), null;
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return C(e, n, t, a);
            case "html":
              return (
                0 === o.insertionMode && e.push("<!DOCTYPE html>"),
                C(e, n, t, a)
              );
            default:
              if (-1 === t.indexOf("-") && "string" != typeof n.is)
                return C(e, n, t, a);
              for (f in (e.push(P(t)), (s = i = null), n))
                if (l.call(n, f) && null != (c = n[f]))
                  switch (f) {
                    case "children":
                      i = c;
                      break;
                    case "dangerouslySetInnerHTML":
                      s = c;
                      break;
                    case "style":
                      _(e, a, c);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                      break;
                    default:
                      u(f) &&
                        "function" != typeof c &&
                        "symbol" != typeof c &&
                        e.push(" ", f, '="', v(c), '"');
                  }
              return e.push(">"), x(e, s, i), i;
          }
        }
        function O(e, t, n) {
          if ((e.push('\x3c!--$?--\x3e<template id="'), null === n))
            throw Error(
              "An ID must have been assigned before we can complete the boundary.",
            );
          return e.push(n), e.push('"></template>');
        }
        var D = /[<\u2028\u2029]/g;
        function M(e) {
          return JSON.stringify(e).replace(D, function (e) {
            switch (e) {
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default:
                throw Error(
                  "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React",
                );
            }
          });
        }
        function L(e, t) {
          return {
            bootstrapChunks: [],
            startInlineScript: "<script>",
            placeholderPrefix: (t = void 0 === t ? "" : t) + "P:",
            segmentPrefix: t + "S:",
            boundaryPrefix: t + "B:",
            idPrefix: t,
            nextSuspenseID: 0,
            sentCompleteSegmentFunction: !1,
            sentCompleteBoundaryFunction: !1,
            sentClientRenderFunction: !1,
            generateStaticMarkup: e,
          };
        }
        function I(e, t, n, r) {
          return n.generateStaticMarkup
            ? (e.push(v(t)), !1)
            : ("" === t
                ? (e = r)
                : (r && e.push("\x3c!-- --\x3e"), e.push(v(t)), (e = !0)),
              e);
        }
        var A = Object.assign,
          F = Symbol.for("react.element"),
          j = Symbol.for("react.portal"),
          z = Symbol.for("react.fragment"),
          B = Symbol.for("react.strict_mode"),
          H = Symbol.for("react.profiler"),
          U = Symbol.for("react.provider"),
          V = Symbol.for("react.context"),
          $ = Symbol.for("react.forward_ref"),
          K = Symbol.for("react.suspense"),
          q = Symbol.for("react.suspense_list"),
          W = Symbol.for("react.memo"),
          G = Symbol.for("react.lazy"),
          Q = Symbol.for("react.scope"),
          Y = Symbol.for("react.debug_trace_mode"),
          X = Symbol.for("react.legacy_hidden"),
          J = Symbol.for("react.default_value"),
          Z = Symbol.iterator;
        function ee(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case z:
              return "Fragment";
            case j:
              return "Portal";
            case H:
              return "Profiler";
            case B:
              return "StrictMode";
            case K:
              return "Suspense";
            case q:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case V:
                return (e.displayName || "Context") + ".Consumer";
              case U:
                return (e._context.displayName || "Context") + ".Provider";
              case $:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case W:
                return null !== (t = e.displayName || null)
                  ? t
                  : ee(e.type) || "Memo";
              case G:
                (t = e._payload), (e = e._init);
                try {
                  return ee(e(t));
                } catch (e) {}
            }
          return null;
        }
        var te = {};
        function ne(e, t) {
          if (!(e = e.contextTypes)) return te;
          var n,
            r = {};
          for (n in e) r[n] = t[n];
          return r;
        }
        var re = null;
        function ae(e, t) {
          if (e !== t) {
            (e.context._currentValue2 = e.parentValue), (e = e.parent);
            var n = t.parent;
            if (null === e) {
              if (null !== n)
                throw Error(
                  "The stacks must reach the root at the same time. This is a bug in React.",
                );
            } else {
              if (null === n)
                throw Error(
                  "The stacks must reach the root at the same time. This is a bug in React.",
                );
              ae(e, n);
            }
            t.context._currentValue2 = t.value;
          }
        }
        function le(e) {
          (e.context._currentValue2 = e.parentValue),
            null !== (e = e.parent) && le(e);
        }
        function oe(e) {
          var t = e.parent;
          null !== t && oe(t), (e.context._currentValue2 = e.value);
        }
        function ie(e, t) {
          if (
            ((e.context._currentValue2 = e.parentValue),
            null === (e = e.parent))
          )
            throw Error(
              "The depth must equal at least at zero before reaching the root. This is a bug in React.",
            );
          e.depth === t.depth ? ae(e, t) : ie(e, t);
        }
        function se(e, t) {
          var n = t.parent;
          if (null === n)
            throw Error(
              "The depth must equal at least at zero before reaching the root. This is a bug in React.",
            );
          e.depth === n.depth ? ae(e, n) : se(e, n),
            (t.context._currentValue2 = t.value);
        }
        function ue(e) {
          var t = re;
          t !== e &&
            (null === t
              ? oe(e)
              : null === e
              ? le(t)
              : t.depth === e.depth
              ? ae(t, e)
              : t.depth > e.depth
              ? ie(t, e)
              : se(t, e),
            (re = e));
        }
        var ce = {
          isMounted: function () {
            return !1;
          },
          enqueueSetState: function (e, t) {
            null !== (e = e._reactInternals).queue && e.queue.push(t);
          },
          enqueueReplaceState: function (e, t) {
            ((e = e._reactInternals).replace = !0), (e.queue = [t]);
          },
          enqueueForceUpdate: function () {},
        };
        function de(e, t, n, r) {
          var a = void 0 !== e.state ? e.state : null;
          (e.updater = ce), (e.props = n), (e.state = a);
          var l = { queue: [], replace: !1 };
          e._reactInternals = l;
          var o = t.contextType;
          if (
            ((e.context =
              "object" == typeof o && null !== o ? o._currentValue2 : r),
            "function" == typeof (o = t.getDerivedStateFromProps) &&
              ((a = null == (o = o(n, a)) ? a : A({}, a, o)), (e.state = a)),
            "function" != typeof t.getDerivedStateFromProps &&
              "function" != typeof e.getSnapshotBeforeUpdate &&
              ("function" == typeof e.UNSAFE_componentWillMount ||
                "function" == typeof e.componentWillMount))
          )
            if (
              ((t = e.state),
              "function" == typeof e.componentWillMount &&
                e.componentWillMount(),
              "function" == typeof e.UNSAFE_componentWillMount &&
                e.UNSAFE_componentWillMount(),
              t !== e.state && ce.enqueueReplaceState(e, e.state, null),
              null !== l.queue && 0 < l.queue.length)
            )
              if (
                ((t = l.queue),
                (o = l.replace),
                (l.queue = null),
                (l.replace = !1),
                o && 1 === t.length)
              )
                e.state = t[0];
              else {
                for (
                  l = o ? t[0] : e.state, a = !0, o = o ? 1 : 0;
                  o < t.length;
                  o++
                ) {
                  var i = t[o];
                  null !=
                    (i = "function" == typeof i ? i.call(e, l, n, r) : i) &&
                    (a ? ((a = !1), (l = A({}, l, i))) : A(l, i));
                }
                e.state = l;
              }
            else l.queue = null;
        }
        var fe = { id: 1, overflow: "" };
        function he(e, t, n) {
          var r = e.id;
          e = e.overflow;
          var a = 32 - pe(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - pe(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            return (
              (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              { id: (1 << (32 - pe(t) + a)) | (n << a) | r, overflow: l + e }
            );
          }
          return { id: (1 << l) | (n << a) | r, overflow: e };
        }
        var pe = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((me(e) / ge) | 0)) | 0;
              },
          me = Math.log,
          ge = Math.LN2;
        var ve =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          ye = null,
          be = null,
          ke = null,
          Ee = null,
          we = !1,
          _e = !1,
          Se = 0,
          xe = null,
          Ce = 0;
        function Te() {
          if (null === ye)
            throw Error(
              "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.",
            );
          return ye;
        }
        function Ne() {
          if (0 < Ce)
            throw Error("Rendered more hooks than during the previous render");
          return { memoizedState: null, queue: null, next: null };
        }
        function Pe() {
          return (
            null === Ee
              ? null === ke
                ? ((we = !1), (ke = Ee = Ne()))
                : ((we = !0), (Ee = ke))
              : null === Ee.next
              ? ((we = !1), (Ee = Ee.next = Ne()))
              : ((we = !0), (Ee = Ee.next)),
            Ee
          );
        }
        function Re() {
          (be = ye = null), (_e = !1), (ke = null), (Ce = 0), (Ee = xe = null);
        }
        function Oe(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function De(e, t, n) {
          if (((ye = Te()), (Ee = Pe()), we)) {
            var r = Ee.queue;
            if (((t = r.dispatch), null !== xe && void 0 !== (n = xe.get(r)))) {
              xe.delete(r), (r = Ee.memoizedState);
              do {
                (r = e(r, n.action)), (n = n.next);
              } while (null !== n);
              return (Ee.memoizedState = r), [r, t];
            }
            return [Ee.memoizedState, t];
          }
          return (
            (e =
              e === Oe
                ? "function" == typeof t
                  ? t()
                  : t
                : void 0 !== n
                ? n(t)
                : t),
            (Ee.memoizedState = e),
            (e = (e = Ee.queue = { last: null, dispatch: null }).dispatch =
              Le.bind(null, ye, e)),
            [Ee.memoizedState, e]
          );
        }
        function Me(e, t) {
          if (
            ((ye = Te()), (t = void 0 === t ? null : t), null !== (Ee = Pe()))
          ) {
            var n = Ee.memoizedState;
            if (null !== n && null !== t) {
              var r = n[1];
              e: if (null === r) r = !1;
              else {
                for (var a = 0; a < r.length && a < t.length; a++)
                  if (!ve(t[a], r[a])) {
                    r = !1;
                    break e;
                  }
                r = !0;
              }
              if (r) return n[0];
            }
          }
          return (e = e()), (Ee.memoizedState = [e, t]), e;
        }
        function Le(e, t, n) {
          if (25 <= Ce)
            throw Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop.",
            );
          if (e === ye)
            if (
              ((_e = !0),
              (e = { action: n, next: null }),
              null === xe && (xe = new Map()),
              void 0 === (n = xe.get(t)))
            )
              xe.set(t, e);
            else {
              for (t = n; null !== t.next; ) t = t.next;
              t.next = e;
            }
        }
        function Ie() {
          throw Error(
            "startTransition cannot be called during server rendering.",
          );
        }
        function Ae() {}
        var Fe = {
            readContext: function (e) {
              return e._currentValue2;
            },
            useContext: function (e) {
              return Te(), e._currentValue2;
            },
            useMemo: Me,
            useReducer: De,
            useRef: function (e) {
              ye = Te();
              var t = (Ee = Pe()).memoizedState;
              return null === t
                ? ((e = { current: e }), (Ee.memoizedState = e))
                : t;
            },
            useState: function (e) {
              return De(Oe, e);
            },
            useInsertionEffect: Ae,
            useLayoutEffect: function () {},
            useCallback: function (e, t) {
              return Me(function () {
                return e;
              }, t);
            },
            useImperativeHandle: Ae,
            useEffect: Ae,
            useDebugValue: Ae,
            useDeferredValue: function (e) {
              return Te(), e;
            },
            useTransition: function () {
              return Te(), [!1, Ie];
            },
            useId: function () {
              var e = be.treeContext,
                t = e.overflow;
              e = ((e = e.id) & ~(1 << (32 - pe(e) - 1))).toString(32) + t;
              var n = je;
              if (null === n)
                throw Error(
                  "Invalid hook call. Hooks can only be called inside of the body of a function component.",
                );
              return (
                (t = Se++),
                (e = ":" + n.idPrefix + "R" + e),
                0 < t && (e += "H" + t.toString(32)),
                e + ":"
              );
            },
            useMutableSource: function (e, t) {
              return Te(), t(e._source);
            },
            useSyncExternalStore: function (e, t, n) {
              if (void 0 === n)
                throw Error(
                  "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.",
                );
              return n();
            },
          },
          je = null,
          ze =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentDispatcher;
        function Be(e) {
          return console.error(e), null;
        }
        function He() {}
        function Ue(e, t, n, r, a, l, o, i, s) {
          var u = [],
            c = new Set();
          return (
            ((n = $e(
              (t = {
                destination: null,
                responseState: t,
                progressiveChunkSize: void 0 === r ? 12800 : r,
                status: 0,
                fatalError: null,
                nextSegmentId: 0,
                allPendingTasks: 0,
                pendingRootTasks: 0,
                completedRootSegment: null,
                abortableTasks: c,
                pingedTasks: u,
                clientRenderedBoundaries: [],
                completedBoundaries: [],
                partialBoundaries: [],
                onError: void 0 === a ? Be : a,
                onAllReady: void 0 === l ? He : l,
                onShellReady: void 0 === o ? He : o,
                onShellError: void 0 === i ? He : i,
                onFatalError: void 0 === s ? He : s,
              }),
              0,
              null,
              n,
              !1,
              !1,
            )).parentFlushed = !0),
            (e = Ve(t, e, null, n, c, te, null, fe)),
            u.push(e),
            t
          );
        }
        function Ve(e, t, n, r, a, l, o, i) {
          e.allPendingTasks++,
            null === n ? e.pendingRootTasks++ : n.pendingTasks++;
          var s = {
            node: t,
            ping: function () {
              var t = e.pingedTasks;
              t.push(s), 1 === t.length && at(e);
            },
            blockedBoundary: n,
            blockedSegment: r,
            abortSet: a,
            legacyContext: l,
            context: o,
            treeContext: i,
          };
          return a.add(s), s;
        }
        function $e(e, t, n, r, a, l) {
          return {
            status: 0,
            id: -1,
            index: t,
            parentFlushed: !1,
            chunks: [],
            children: [],
            formatContext: r,
            boundary: n,
            lastPushedText: a,
            textEmbedded: l,
          };
        }
        function Ke(e, t) {
          if (null != (e = e.onError(t)) && "string" != typeof e)
            throw Error(
              'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
                typeof e +
                '" instead',
            );
          return e;
        }
        function qe(e, t) {
          var n = e.onShellError;
          n(t),
            (n = e.onFatalError)(t),
            null !== e.destination
              ? ((e.status = 2), e.destination.destroy(t))
              : ((e.status = 1), (e.fatalError = t));
        }
        function We(e, t, n, r, a) {
          for (ye = {}, be = t, Se = 0, e = n(r, a); _e; )
            (_e = !1), (Se = 0), (Ce += 1), (Ee = null), (e = n(r, a));
          return Re(), e;
        }
        function Ge(e, t, n, r) {
          var a = n.render(),
            l = r.childContextTypes;
          if (null != l) {
            var o = t.legacyContext;
            if ("function" != typeof n.getChildContext) r = o;
            else {
              for (var i in (n = n.getChildContext()))
                if (!(i in l))
                  throw Error(
                    (ee(r) || "Unknown") +
                      '.getChildContext(): key "' +
                      i +
                      '" is not defined in childContextTypes.',
                  );
              r = A({}, o, n);
            }
            (t.legacyContext = r), Xe(e, t, a), (t.legacyContext = o);
          } else Xe(e, t, a);
        }
        function Qe(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function Ye(e, t, n, r, a) {
          if ("function" == typeof n)
            if (n.prototype && n.prototype.isReactComponent) {
              a = ne(n, t.legacyContext);
              var l = n.contextType;
              de(
                (l = new n(
                  r,
                  "object" == typeof l && null !== l ? l._currentValue2 : a,
                )),
                n,
                r,
                a,
              ),
                Ge(e, t, l, n);
            } else {
              a = We(e, t, n, r, (l = ne(n, t.legacyContext)));
              var o = 0 !== Se;
              if (
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
              )
                de(a, n, r, l), Ge(e, t, a, n);
              else if (o) {
                (r = t.treeContext), (t.treeContext = he(r, 1, 0));
                try {
                  Xe(e, t, a);
                } finally {
                  t.treeContext = r;
                }
              } else Xe(e, t, a);
            }
          else {
            if ("string" != typeof n) {
              switch (n) {
                case X:
                case Y:
                case B:
                case H:
                case z:
                case q:
                  return void Xe(e, t, r.children);
                case Q:
                  throw Error(
                    "ReactDOMServer does not yet support scope components.",
                  );
                case K:
                  e: {
                    (n = t.blockedBoundary),
                      (a = t.blockedSegment),
                      (l = r.fallback),
                      (r = r.children);
                    var i = {
                        id: null,
                        rootSegmentID: -1,
                        parentFlushed: !1,
                        pendingTasks: 0,
                        forceClientRender: !1,
                        completedSegments: [],
                        byteSize: 0,
                        fallbackAbortableTasks: (o = new Set()),
                        errorDigest: null,
                      },
                      s = $e(0, a.chunks.length, i, a.formatContext, !1, !1);
                    a.children.push(s), (a.lastPushedText = !1);
                    var u = $e(0, 0, null, a.formatContext, !1, !1);
                    (u.parentFlushed = !0),
                      (t.blockedBoundary = i),
                      (t.blockedSegment = u);
                    try {
                      if (
                        (Ze(e, t, r),
                        e.responseState.generateStaticMarkup ||
                          (u.lastPushedText &&
                            u.textEmbedded &&
                            u.chunks.push("\x3c!-- --\x3e")),
                        (u.status = 1),
                        nt(i, u),
                        0 === i.pendingTasks)
                      )
                        break e;
                    } catch (t) {
                      (u.status = 4),
                        (i.forceClientRender = !0),
                        (i.errorDigest = Ke(e, t));
                    } finally {
                      (t.blockedBoundary = n), (t.blockedSegment = a);
                    }
                    (t = Ve(
                      e,
                      l,
                      n,
                      s,
                      o,
                      t.legacyContext,
                      t.context,
                      t.treeContext,
                    )),
                      e.pingedTasks.push(t);
                  }
                  return;
              }
              if ("object" == typeof n && null !== n)
                switch (n.$$typeof) {
                  case $:
                    if (((r = We(e, t, n.render, r, a)), 0 !== Se)) {
                      (n = t.treeContext), (t.treeContext = he(n, 1, 0));
                      try {
                        Xe(e, t, r);
                      } finally {
                        t.treeContext = n;
                      }
                    } else Xe(e, t, r);
                    return;
                  case W:
                    return void Ye(e, t, (n = n.type), (r = Qe(n, r)), a);
                  case U:
                    if (
                      ((a = r.children),
                      (n = n._context),
                      (r = r.value),
                      (l = n._currentValue2),
                      (n._currentValue2 = r),
                      (re = r =
                        {
                          parent: (o = re),
                          depth: null === o ? 0 : o.depth + 1,
                          context: n,
                          parentValue: l,
                          value: r,
                        }),
                      (t.context = r),
                      Xe(e, t, a),
                      null === (e = re))
                    )
                      throw Error(
                        "Tried to pop a Context at the root of the app. This is a bug in React.",
                      );
                    return (
                      (r = e.parentValue),
                      (e.context._currentValue2 =
                        r === J ? e.context._defaultValue : r),
                      (e = re = e.parent),
                      void (t.context = e)
                    );
                  case V:
                    return void Xe(
                      e,
                      t,
                      (r = (r = r.children)(n._currentValue2)),
                    );
                  case G:
                    return void Ye(
                      e,
                      t,
                      (n = (a = n._init)(n._payload)),
                      (r = Qe(n, r)),
                      void 0,
                    );
                }
              throw Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
                  (null == n ? n : typeof n) +
                  ".",
              );
            }
            switch (
              ((l = R(
                (a = t.blockedSegment).chunks,
                n,
                r,
                e.responseState,
                a.formatContext,
              )),
              (a.lastPushedText = !1),
              (o = a.formatContext),
              (a.formatContext = (function (e, t, n) {
                switch (t) {
                  case "select":
                    return E(1, null != n.value ? n.value : n.defaultValue);
                  case "svg":
                    return E(2, null);
                  case "math":
                    return E(3, null);
                  case "foreignObject":
                    return E(1, null);
                  case "table":
                    return E(4, null);
                  case "thead":
                  case "tbody":
                  case "tfoot":
                    return E(5, null);
                  case "colgroup":
                    return E(7, null);
                  case "tr":
                    return E(6, null);
                }
                return 4 <= e.insertionMode || 0 === e.insertionMode
                  ? E(1, null)
                  : e;
              })(o, n, r)),
              Ze(e, t, l),
              (a.formatContext = o),
              n)
            ) {
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break;
              default:
                a.chunks.push("</", n, ">");
            }
            a.lastPushedText = !1;
          }
        }
        function Xe(e, t, n) {
          if (((t.node = n), "object" == typeof n && null !== n)) {
            switch (n.$$typeof) {
              case F:
                return void Ye(e, t, n.type, n.props, n.ref);
              case j:
                throw Error(
                  "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.",
                );
              case G:
                var r = n._init;
                return void Xe(e, t, (n = r(n._payload)));
            }
            if (k(n)) return void Je(e, t, n);
            if (
              (null === n || "object" != typeof n
                ? (r = null)
                : (r =
                    "function" == typeof (r = (Z && n[Z]) || n["@@iterator"])
                      ? r
                      : null),
              r && (r = r.call(n)))
            ) {
              if (!(n = r.next()).done) {
                var a = [];
                do {
                  a.push(n.value), (n = r.next());
                } while (!n.done);
                Je(e, t, a);
              }
              return;
            }
            throw (
              ((e = Object.prototype.toString.call(n)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === e
                    ? "object with keys {" + Object.keys(n).join(", ") + "}"
                    : e) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          }
          "string" == typeof n
            ? ((r = t.blockedSegment).lastPushedText = I(
                t.blockedSegment.chunks,
                n,
                e.responseState,
                r.lastPushedText,
              ))
            : "number" == typeof n &&
              ((r = t.blockedSegment).lastPushedText = I(
                t.blockedSegment.chunks,
                "" + n,
                e.responseState,
                r.lastPushedText,
              ));
        }
        function Je(e, t, n) {
          for (var r = n.length, a = 0; a < r; a++) {
            var l = t.treeContext;
            t.treeContext = he(l, r, a);
            try {
              Ze(e, t, n[a]);
            } finally {
              t.treeContext = l;
            }
          }
        }
        function Ze(e, t, n) {
          var r = t.blockedSegment.formatContext,
            a = t.legacyContext,
            l = t.context;
          try {
            return Xe(e, t, n);
          } catch (s) {
            if (
              (Re(),
              "object" != typeof s || null === s || "function" != typeof s.then)
            )
              throw (
                ((t.blockedSegment.formatContext = r),
                (t.legacyContext = a),
                (t.context = l),
                ue(l),
                s)
              );
            n = s;
            var o = t.blockedSegment,
              i = $e(
                0,
                o.chunks.length,
                null,
                o.formatContext,
                o.lastPushedText,
                !0,
              );
            o.children.push(i),
              (o.lastPushedText = !1),
              (e = Ve(
                e,
                t.node,
                t.blockedBoundary,
                i,
                t.abortSet,
                t.legacyContext,
                t.context,
                t.treeContext,
              ).ping),
              n.then(e, e),
              (t.blockedSegment.formatContext = r),
              (t.legacyContext = a),
              (t.context = l),
              ue(l);
          }
        }
        function et(e) {
          var t = e.blockedBoundary;
          ((e = e.blockedSegment).status = 3), rt(this, t, e);
        }
        function tt(e, t, n) {
          var r = e.blockedBoundary;
          (e.blockedSegment.status = 3),
            null === r
              ? (t.allPendingTasks--,
                2 !== t.status &&
                  ((t.status = 2),
                  null !== t.destination && t.destination.push(null)))
              : (r.pendingTasks--,
                r.forceClientRender ||
                  ((r.forceClientRender = !0),
                  (r.errorDigest = t.onError(
                    void 0 === n
                      ? Error(
                          "The render was aborted by the server without a reason.",
                        )
                      : n,
                  )),
                  r.parentFlushed && t.clientRenderedBoundaries.push(r)),
                r.fallbackAbortableTasks.forEach(function (e) {
                  return tt(e, t, n);
                }),
                r.fallbackAbortableTasks.clear(),
                t.allPendingTasks--,
                0 === t.allPendingTasks && (e = t.onAllReady)());
        }
        function nt(e, t) {
          if (
            0 === t.chunks.length &&
            1 === t.children.length &&
            null === t.children[0].boundary
          ) {
            var n = t.children[0];
            (n.id = t.id), (n.parentFlushed = !0), 1 === n.status && nt(e, n);
          } else e.completedSegments.push(t);
        }
        function rt(e, t, n) {
          if (null === t) {
            if (n.parentFlushed) {
              if (null !== e.completedRootSegment)
                throw Error(
                  "There can only be one root segment. This is a bug in React.",
                );
              e.completedRootSegment = n;
            }
            e.pendingRootTasks--,
              0 === e.pendingRootTasks &&
                ((e.onShellError = He), (t = e.onShellReady)());
          } else
            t.pendingTasks--,
              t.forceClientRender ||
                (0 === t.pendingTasks
                  ? (n.parentFlushed && 1 === n.status && nt(t, n),
                    t.parentFlushed && e.completedBoundaries.push(t),
                    t.fallbackAbortableTasks.forEach(et, e),
                    t.fallbackAbortableTasks.clear())
                  : n.parentFlushed &&
                    1 === n.status &&
                    (nt(t, n),
                    1 === t.completedSegments.length &&
                      t.parentFlushed &&
                      e.partialBoundaries.push(t)));
          e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)();
        }
        function at(e) {
          if (2 !== e.status) {
            var t = re,
              n = ze.current;
            ze.current = Fe;
            var r = je;
            je = e.responseState;
            try {
              var a,
                l = e.pingedTasks;
              for (a = 0; a < l.length; a++) {
                var o = l[a],
                  i = e,
                  s = o.blockedSegment;
                if (0 === s.status) {
                  ue(o.context);
                  try {
                    Xe(i, o, o.node),
                      i.responseState.generateStaticMarkup ||
                        (s.lastPushedText &&
                          s.textEmbedded &&
                          s.chunks.push("\x3c!-- --\x3e")),
                      o.abortSet.delete(o),
                      (s.status = 1),
                      rt(i, o.blockedBoundary, s);
                  } catch (e) {
                    if (
                      (Re(),
                      "object" == typeof e &&
                        null !== e &&
                        "function" == typeof e.then)
                    ) {
                      var u = o.ping;
                      e.then(u, u);
                    } else {
                      o.abortSet.delete(o), (s.status = 4);
                      var c = o.blockedBoundary,
                        d = e,
                        f = Ke(i, d);
                      if (
                        (null === c
                          ? qe(i, d)
                          : (c.pendingTasks--,
                            c.forceClientRender ||
                              ((c.forceClientRender = !0),
                              (c.errorDigest = f),
                              c.parentFlushed &&
                                i.clientRenderedBoundaries.push(c))),
                        i.allPendingTasks--,
                        0 === i.allPendingTasks)
                      )
                        (0, i.onAllReady)();
                    }
                  }
                }
              }
              l.splice(0, a), null !== e.destination && ct(e, e.destination);
            } catch (t) {
              Ke(e, t), qe(e, t);
            } finally {
              (je = r), (ze.current = n), n === Fe && ue(t);
            }
          }
        }
        function lt(e, t, n) {
          switch (((n.parentFlushed = !0), n.status)) {
            case 0:
              var r = (n.id = e.nextSegmentId++);
              return (
                (n.lastPushedText = !1),
                (n.textEmbedded = !1),
                (e = e.responseState),
                t.push('<template id="'),
                t.push(e.placeholderPrefix),
                (e = r.toString(16)),
                t.push(e),
                t.push('"></template>')
              );
            case 1:
              n.status = 2;
              var a = !0;
              r = n.chunks;
              var l = 0;
              n = n.children;
              for (var o = 0; o < n.length; o++) {
                for (a = n[o]; l < a.index; l++) t.push(r[l]);
                a = ot(e, t, a);
              }
              for (; l < r.length - 1; l++) t.push(r[l]);
              return l < r.length && (a = t.push(r[l])), a;
            default:
              throw Error(
                "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.",
              );
          }
        }
        function ot(e, t, n) {
          var r = n.boundary;
          if (null === r) return lt(e, t, n);
          if (((r.parentFlushed = !0), r.forceClientRender))
            return (
              e.responseState.generateStaticMarkup ||
                ((r = r.errorDigest),
                t.push("\x3c!--$!--\x3e"),
                t.push("<template"),
                r &&
                  (t.push(' data-dgst="'), (r = v(r)), t.push(r), t.push('"')),
                t.push("></template>")),
              lt(e, t, n),
              (e =
                !!e.responseState.generateStaticMarkup ||
                t.push("\x3c!--/$--\x3e"))
            );
          if (0 < r.pendingTasks) {
            (r.rootSegmentID = e.nextSegmentId++),
              0 < r.completedSegments.length && e.partialBoundaries.push(r);
            var a = e.responseState,
              l = a.nextSuspenseID++;
            return (
              (a = a.boundaryPrefix + l.toString(16)),
              (r = r.id = a),
              O(t, e.responseState, r),
              lt(e, t, n),
              t.push("\x3c!--/$--\x3e")
            );
          }
          if (r.byteSize > e.progressiveChunkSize)
            return (
              (r.rootSegmentID = e.nextSegmentId++),
              e.completedBoundaries.push(r),
              O(t, e.responseState, r.id),
              lt(e, t, n),
              t.push("\x3c!--/$--\x3e")
            );
          if (
            (e.responseState.generateStaticMarkup || t.push("\x3c!--$--\x3e"),
            1 !== (n = r.completedSegments).length)
          )
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React.",
            );
          return (
            ot(e, t, n[0]),
            (e =
              !!e.responseState.generateStaticMarkup ||
              t.push("\x3c!--/$--\x3e"))
          );
        }
        function it(e, t, n) {
          return (
            (function (e, t, n, r) {
              switch (n.insertionMode) {
                case 0:
                case 1:
                  return (
                    e.push('<div hidden id="'),
                    e.push(t.segmentPrefix),
                    (t = r.toString(16)),
                    e.push(t),
                    e.push('">')
                  );
                case 2:
                  return (
                    e.push('<svg aria-hidden="true" style="display:none" id="'),
                    e.push(t.segmentPrefix),
                    (t = r.toString(16)),
                    e.push(t),
                    e.push('">')
                  );
                case 3:
                  return (
                    e.push(
                      '<math aria-hidden="true" style="display:none" id="',
                    ),
                    e.push(t.segmentPrefix),
                    (t = r.toString(16)),
                    e.push(t),
                    e.push('">')
                  );
                case 4:
                  return (
                    e.push('<table hidden id="'),
                    e.push(t.segmentPrefix),
                    (t = r.toString(16)),
                    e.push(t),
                    e.push('">')
                  );
                case 5:
                  return (
                    e.push('<table hidden><tbody id="'),
                    e.push(t.segmentPrefix),
                    (t = r.toString(16)),
                    e.push(t),
                    e.push('">')
                  );
                case 6:
                  return (
                    e.push('<table hidden><tr id="'),
                    e.push(t.segmentPrefix),
                    (t = r.toString(16)),
                    e.push(t),
                    e.push('">')
                  );
                case 7:
                  return (
                    e.push('<table hidden><colgroup id="'),
                    e.push(t.segmentPrefix),
                    (t = r.toString(16)),
                    e.push(t),
                    e.push('">')
                  );
                default:
                  throw Error(
                    "Unknown insertion mode. This is a bug in React.",
                  );
              }
            })(t, e.responseState, n.formatContext, n.id),
            ot(e, t, n),
            (function (e, t) {
              switch (t.insertionMode) {
                case 0:
                case 1:
                  return e.push("</div>");
                case 2:
                  return e.push("</svg>");
                case 3:
                  return e.push("</math>");
                case 4:
                  return e.push("</table>");
                case 5:
                  return e.push("</tbody></table>");
                case 6:
                  return e.push("</tr></table>");
                case 7:
                  return e.push("</colgroup></table>");
                default:
                  throw Error(
                    "Unknown insertion mode. This is a bug in React.",
                  );
              }
            })(t, n.formatContext)
          );
        }
        function st(e, t, n) {
          for (var r = n.completedSegments, a = 0; a < r.length; a++)
            ut(e, t, n, r[a]);
          if (
            ((r.length = 0),
            (e = e.responseState),
            (r = n.id),
            (n = n.rootSegmentID),
            t.push(e.startInlineScript),
            e.sentCompleteBoundaryFunction
              ? t.push('$RC("')
              : ((e.sentCompleteBoundaryFunction = !0),
                t.push(
                  'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("',
                )),
            null === r)
          )
            throw Error(
              "An ID must have been assigned before we can complete the boundary.",
            );
          return (
            (n = n.toString(16)),
            t.push(r),
            t.push('","'),
            t.push(e.segmentPrefix),
            t.push(n),
            t.push('")</script>')
          );
        }
        function ut(e, t, n, r) {
          if (2 === r.status) return !0;
          var a = r.id;
          if (-1 === a) {
            if (-1 === (r.id = n.rootSegmentID))
              throw Error(
                "A root segment ID must have been assigned by now. This is a bug in React.",
              );
            return it(e, t, r);
          }
          return (
            it(e, t, r),
            (e = e.responseState),
            t.push(e.startInlineScript),
            e.sentCompleteSegmentFunction
              ? t.push('$RS("')
              : ((e.sentCompleteSegmentFunction = !0),
                t.push(
                  'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
                )),
            t.push(e.segmentPrefix),
            (a = a.toString(16)),
            t.push(a),
            t.push('","'),
            t.push(e.placeholderPrefix),
            t.push(a),
            t.push('")</script>')
          );
        }
        function ct(e, t) {
          try {
            var n = e.completedRootSegment;
            if (null !== n && 0 === e.pendingRootTasks) {
              ot(e, t, n), (e.completedRootSegment = null);
              var r = e.responseState.bootstrapChunks;
              for (n = 0; n < r.length - 1; n++) t.push(r[n]);
              n < r.length && t.push(r[n]);
            }
            var a,
              l = e.clientRenderedBoundaries;
            for (a = 0; a < l.length; a++) {
              var o = l[a];
              r = t;
              var i = e.responseState,
                s = o.id,
                u = o.errorDigest,
                c = o.errorMessage,
                d = o.errorComponentStack;
              if (
                (r.push(i.startInlineScript),
                i.sentClientRenderFunction
                  ? r.push('$RX("')
                  : ((i.sentClientRenderFunction = !0),
                    r.push(
                      'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("',
                    )),
                null === s)
              )
                throw Error(
                  "An ID must have been assigned before we can complete the boundary.",
                );
              if ((r.push(s), r.push('"'), u || c || d)) {
                r.push(",");
                var f = M(u || "");
                r.push(f);
              }
              if (c || d) {
                r.push(",");
                var h = M(c || "");
                r.push(h);
              }
              if (d) {
                r.push(",");
                var p = M(d);
                r.push(p);
              }
              if (!r.push(")</script>"))
                return (e.destination = null), a++, void l.splice(0, a);
            }
            l.splice(0, a);
            var m = e.completedBoundaries;
            for (a = 0; a < m.length; a++)
              if (!st(e, t, m[a]))
                return (e.destination = null), a++, void m.splice(0, a);
            m.splice(0, a);
            var g = e.partialBoundaries;
            for (a = 0; a < g.length; a++) {
              var v = g[a];
              e: {
                (l = e), (o = t);
                var y = v.completedSegments;
                for (i = 0; i < y.length; i++)
                  if (!ut(l, o, v, y[i])) {
                    i++, y.splice(0, i);
                    var b = !1;
                    break e;
                  }
                y.splice(0, i), (b = !0);
              }
              if (!b) return (e.destination = null), a++, void g.splice(0, a);
            }
            g.splice(0, a);
            var k = e.completedBoundaries;
            for (a = 0; a < k.length; a++)
              if (!st(e, t, k[a]))
                return (e.destination = null), a++, void k.splice(0, a);
            k.splice(0, a);
          } finally {
            0 === e.allPendingTasks &&
              0 === e.pingedTasks.length &&
              0 === e.clientRenderedBoundaries.length &&
              0 === e.completedBoundaries.length &&
              t.push(null);
          }
        }
        function dt(e, t) {
          if (1 === e.status) (e.status = 2), t.destroy(e.fatalError);
          else if (2 !== e.status && null === e.destination) {
            e.destination = t;
            try {
              ct(e, t);
            } catch (t) {
              Ke(e, t), qe(e, t);
            }
          }
        }
        function ft(e, t) {
          try {
            var n = e.abortableTasks;
            n.forEach(function (n) {
              return tt(n, e, t);
            }),
              n.clear(),
              null !== e.destination && ct(e, e.destination);
          } catch (t) {
            Ke(e, t), qe(e, t);
          }
        }
        function ht() {}
        function pt(e, t, n, r) {
          var a = !1,
            l = null,
            o = "",
            i = !1;
          if (
            (at(
              (e = Ue(
                e,
                L(n, t ? t.identifierPrefix : void 0),
                { insertionMode: 1, selectedValue: null },
                1 / 0,
                ht,
                void 0,
                function () {
                  i = !0;
                },
                void 0,
                void 0,
              )),
            ),
            ft(e, r),
            dt(e, {
              push: function (e) {
                return null !== e && (o += e), !0;
              },
              destroy: function (e) {
                (a = !0), (l = e);
              },
            }),
            a)
          )
            throw l;
          if (!i)
            throw Error(
              "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.",
            );
          return o;
        }
        var mt = (function (e) {
          function t() {
            var t = e.call(this, {}) || this;
            return (t.request = null), (t.startedFlowing = !1), t;
          }
          !(function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = t);
          })(t, e);
          var n = t.prototype;
          return (
            (n._destroy = function (e, t) {
              ft(this.request), t(e);
            }),
            (n._read = function () {
              this.startedFlowing && dt(this.request, this);
            }),
            t
          );
        })(a.Readable);
        function gt() {}
        function vt(e, t) {
          var n = new mt(),
            r = Ue(
              e,
              L(!1, t ? t.identifierPrefix : void 0),
              { insertionMode: 1, selectedValue: null },
              1 / 0,
              gt,
              function () {
                (n.startedFlowing = !0), dt(r, n);
              },
              void 0,
              void 0,
            );
          return (n.request = r), at(r), n;
        }
        (t.renderToNodeStream = function (e, t) {
          return vt(e, t);
        }),
          (t.renderToStaticMarkup = function (e, t) {
            return pt(
              e,
              t,
              !0,
              'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server',
            );
          }),
          (t.renderToStaticNodeStream = function (e, t) {
            return vt(e, t);
          }),
          (t.renderToString = function (e, t) {
            return pt(
              e,
              t,
              !1,
              'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server',
            );
          }),
          (t.version = "18.2.0");
      },
      798: (e, t, n) => {
        "use strict";
        /**
         * @license React
         * react-dom-server.node.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ var r = n(837),
          a = n(294),
          l = null,
          o = 0,
          i = !0;
        function s(e, t) {
          if ("string" == typeof t) {
            if (0 !== t.length)
              if (2048 < 3 * t.length)
                0 < o &&
                  (u(e, l.subarray(0, o)), (l = new Uint8Array(2048)), (o = 0)),
                  u(e, f.encode(t));
              else {
                var n = l;
                0 < o && (n = l.subarray(o));
                var r = (n = f.encodeInto(t, n)).read;
                (o += n.written),
                  r < t.length &&
                    (u(e, l),
                    (l = new Uint8Array(2048)),
                    (o = f.encodeInto(t.slice(r), l).written)),
                  2048 === o && (u(e, l), (l = new Uint8Array(2048)), (o = 0));
              }
          } else
            0 !== t.byteLength &&
              (2048 < t.byteLength
                ? (0 < o &&
                    (u(e, l.subarray(0, o)),
                    (l = new Uint8Array(2048)),
                    (o = 0)),
                  u(e, t))
                : ((n = l.length - o) < t.byteLength &&
                    (0 === n
                      ? u(e, l)
                      : (l.set(t.subarray(0, n), o),
                        (o += n),
                        u(e, l),
                        (t = t.subarray(n))),
                    (l = new Uint8Array(2048)),
                    (o = 0)),
                  l.set(t, o),
                  2048 === (o += t.byteLength) &&
                    (u(e, l), (l = new Uint8Array(2048)), (o = 0))));
        }
        function u(e, t) {
          (e = e.write(t)), (i = i && e);
        }
        function c(e, t) {
          return s(e, t), i;
        }
        function d(e) {
          l && 0 < o && e.write(l.subarray(0, o)),
            (l = null),
            (o = 0),
            (i = !0);
        }
        var f = new r.TextEncoder();
        function h(e) {
          return f.encode(e);
        }
        var p = Object.prototype.hasOwnProperty,
          m =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          g = {},
          v = {};
        function y(e) {
          return (
            !!p.call(v, e) ||
            (!p.call(g, e) && (m.test(e) ? (v[e] = !0) : ((g[e] = !0), !1)))
          );
        }
        function b(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var k = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            k[e] = new b(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            k[t] = new b(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              k[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            k[e] = new b(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              k[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            k[e] = new b(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            k[e] = new b(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            k[e] = new b(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            k[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var E = /[\-:]([a-z])/g;
        function w(e) {
          return e[1].toUpperCase();
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(E, w);
            k[t] = new b(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(E, w);
              k[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(E, w);
            k[t] = new b(
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
            k[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (k.xlinkHref = new b(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            k[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var _ = {
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
          S = ["Webkit", "ms", "Moz", "O"];
        Object.keys(_).forEach(function (e) {
          S.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_[t] = _[e]);
          });
        });
        var x = /["'&<>]/;
        function C(e) {
          if ("boolean" == typeof e || "number" == typeof e) return "" + e;
          e = "" + e;
          var t = x.exec(e);
          if (t) {
            var n,
              r = "",
              a = 0;
            for (n = t.index; n < e.length; n++) {
              switch (e.charCodeAt(n)) {
                case 34:
                  t = "&quot;";
                  break;
                case 38:
                  t = "&amp;";
                  break;
                case 39:
                  t = "&#x27;";
                  break;
                case 60:
                  t = "&lt;";
                  break;
                case 62:
                  t = "&gt;";
                  break;
                default:
                  continue;
              }
              a !== n && (r += e.substring(a, n)), (a = n + 1), (r += t);
            }
            e = a !== n ? r + e.substring(a, n) : r;
          }
          return e;
        }
        var T = /([A-Z])/g,
          N = /^ms-/,
          P = Array.isArray,
          R = h("<script>"),
          O = h("</script>"),
          D = h('<script src="'),
          M = h('<script type="module" src="'),
          L = h('" async=""></script>'),
          I = /(<\/|<)(s)(cript)/gi;
        function A(e, t, n, r) {
          return t + ("s" === n ? "\\u0073" : "\\u0053") + r;
        }
        function F(e, t) {
          return { insertionMode: e, selectedValue: t };
        }
        var j = h("\x3c!-- --\x3e");
        function z(e, t, n, r) {
          return "" === t ? r : (r && e.push(j), e.push(C(t)), !0);
        }
        var B = new Map(),
          H = h(' style="'),
          U = h(":"),
          V = h(";");
        function $(e, t, n) {
          if ("object" != typeof n)
            throw Error(
              "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
            );
          for (var r in ((t = !0), n))
            if (p.call(n, r)) {
              var a = n[r];
              if (null != a && "boolean" != typeof a && "" !== a) {
                if (0 === r.indexOf("--")) {
                  var l = C(r);
                  a = C(("" + a).trim());
                } else {
                  l = r;
                  var o = B.get(l);
                  void 0 !== o ||
                    ((o = h(
                      C(l.replace(T, "-$1").toLowerCase().replace(N, "-ms-")),
                    )),
                    B.set(l, o)),
                    (l = o),
                    (a =
                      "number" == typeof a
                        ? 0 === a || p.call(_, r)
                          ? "" + a
                          : a + "px"
                        : C(("" + a).trim()));
                }
                t ? ((t = !1), e.push(H, l, U, a)) : e.push(V, l, U, a);
              }
            }
          t || e.push(W);
        }
        var K = h(" "),
          q = h('="'),
          W = h('"'),
          G = h('=""');
        function Q(e, t, n, r) {
          switch (n) {
            case "style":
              return void $(e, t, r);
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (
            !(2 < n.length) ||
            ("o" !== n[0] && "O" !== n[0]) ||
            ("n" !== n[1] && "N" !== n[1])
          )
            if (null !== (t = k.hasOwnProperty(n) ? k[n] : null)) {
              switch (typeof r) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  if (!t.acceptsBooleans) return;
              }
              switch (((n = t.attributeName), t.type)) {
                case 3:
                  r && e.push(K, n, G);
                  break;
                case 4:
                  !0 === r
                    ? e.push(K, n, G)
                    : !1 !== r && e.push(K, n, q, C(r), W);
                  break;
                case 5:
                  isNaN(r) || e.push(K, n, q, C(r), W);
                  break;
                case 6:
                  !isNaN(r) && 1 <= r && e.push(K, n, q, C(r), W);
                  break;
                default:
                  t.sanitizeURL && (r = "" + r), e.push(K, n, q, C(r), W);
              }
            } else if (y(n)) {
              switch (typeof r) {
                case "function":
                case "symbol":
                  return;
                case "boolean":
                  if (
                    "data-" !== (t = n.toLowerCase().slice(0, 5)) &&
                    "aria-" !== t
                  )
                    return;
              }
              e.push(K, n, q, C(r), W);
            }
        }
        var Y = h(">"),
          X = h("/>");
        function J(e, t, n) {
          if (null != t) {
            if (null != n)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
              );
            if ("object" != typeof t || !("__html" in t))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.",
              );
            null != (t = t.__html) && e.push("" + t);
          }
        }
        var Z = h(' selected=""');
        function ee(e, t, n, r) {
          e.push(ae(n));
          var a,
            l = (n = null);
          for (a in t)
            if (p.call(t, a)) {
              var o = t[a];
              if (null != o)
                switch (a) {
                  case "children":
                    n = o;
                    break;
                  case "dangerouslySetInnerHTML":
                    l = o;
                    break;
                  default:
                    Q(e, r, a, o);
                }
            }
          return (
            e.push(Y),
            J(e, l, n),
            "string" == typeof n ? (e.push(C(n)), null) : n
          );
        }
        var te = h("\n"),
          ne = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
          re = new Map();
        function ae(e) {
          var t = re.get(e);
          if (void 0 === t) {
            if (!ne.test(e)) throw Error("Invalid tag: " + e);
            (t = h("<" + e)), re.set(e, t);
          }
          return t;
        }
        var le = h("<!DOCTYPE html>");
        function oe(e, t, n, r, l) {
          switch (t) {
            case "select":
              e.push(ae("select"));
              var o = null,
                i = null;
              for (d in n)
                if (p.call(n, d)) {
                  var s = n[d];
                  if (null != s)
                    switch (d) {
                      case "children":
                        o = s;
                        break;
                      case "dangerouslySetInnerHTML":
                        i = s;
                        break;
                      case "defaultValue":
                      case "value":
                        break;
                      default:
                        Q(e, r, d, s);
                    }
                }
              return e.push(Y), J(e, i, o), o;
            case "option":
              (i = l.selectedValue), e.push(ae("option"));
              var u = (s = null),
                c = null,
                d = null;
              for (o in n)
                if (p.call(n, o)) {
                  var f = n[o];
                  if (null != f)
                    switch (o) {
                      case "children":
                        s = f;
                        break;
                      case "selected":
                        c = f;
                        break;
                      case "dangerouslySetInnerHTML":
                        d = f;
                        break;
                      case "value":
                        u = f;
                      default:
                        Q(e, r, o, f);
                    }
                }
              if (null != i)
                if (
                  ((n =
                    null !== u
                      ? "" + u
                      : (function (e) {
                          var t = "";
                          return (
                            a.Children.forEach(e, function (e) {
                              null != e && (t += e);
                            }),
                            t
                          );
                        })(s)),
                  P(i))
                ) {
                  for (r = 0; r < i.length; r++)
                    if ("" + i[r] === n) {
                      e.push(Z);
                      break;
                    }
                } else "" + i === n && e.push(Z);
              else c && e.push(Z);
              return e.push(Y), J(e, d, s), s;
            case "textarea":
              for (s in (e.push(ae("textarea")), (d = i = o = null), n))
                if (p.call(n, s) && null != (u = n[s]))
                  switch (s) {
                    case "children":
                      d = u;
                      break;
                    case "value":
                      o = u;
                      break;
                    case "defaultValue":
                      i = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "`dangerouslySetInnerHTML` does not make sense on <textarea>.",
                      );
                    default:
                      Q(e, r, s, u);
                  }
              if ((null === o && null !== i && (o = i), e.push(Y), null != d)) {
                if (null != o)
                  throw Error(
                    "If you supply `defaultValue` on a <textarea>, do not pass children.",
                  );
                if (P(d) && 1 < d.length)
                  throw Error("<textarea> can only have at most one child.");
                o = "" + d;
              }
              return (
                "string" == typeof o && "\n" === o[0] && e.push(te),
                null !== o && e.push(C("" + o)),
                null
              );
            case "input":
              for (i in (e.push(ae("input")), (u = d = s = o = null), n))
                if (p.call(n, i) && null != (c = n[i]))
                  switch (i) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.",
                      );
                    case "defaultChecked":
                      u = c;
                      break;
                    case "defaultValue":
                      s = c;
                      break;
                    case "checked":
                      d = c;
                      break;
                    case "value":
                      o = c;
                      break;
                    default:
                      Q(e, r, i, c);
                  }
              return (
                null !== d
                  ? Q(e, r, "checked", d)
                  : null !== u && Q(e, r, "checked", u),
                null !== o
                  ? Q(e, r, "value", o)
                  : null !== s && Q(e, r, "value", s),
                e.push(X),
                null
              );
            case "menuitem":
              for (var h in (e.push(ae("menuitem")), n))
                if (p.call(n, h) && null != (o = n[h]))
                  switch (h) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "menuitems cannot have `children` nor `dangerouslySetInnerHTML`.",
                      );
                    default:
                      Q(e, r, h, o);
                  }
              return e.push(Y), null;
            case "title":
              for (f in (e.push(ae("title")), (o = null), n))
                if (p.call(n, f) && null != (i = n[f]))
                  switch (f) {
                    case "children":
                      o = i;
                      break;
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        "`dangerouslySetInnerHTML` does not make sense on <title>.",
                      );
                    default:
                      Q(e, r, f, i);
                  }
              return e.push(Y), o;
            case "listing":
            case "pre":
              for (u in (e.push(ae(t)), (i = o = null), n))
                if (p.call(n, u) && null != (s = n[u]))
                  switch (u) {
                    case "children":
                      o = s;
                      break;
                    case "dangerouslySetInnerHTML":
                      i = s;
                      break;
                    default:
                      Q(e, r, u, s);
                  }
              if ((e.push(Y), null != i)) {
                if (null != o)
                  throw Error(
                    "Can only set one of `children` or `props.dangerouslySetInnerHTML`.",
                  );
                if ("object" != typeof i || !("__html" in i))
                  throw Error(
                    "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.",
                  );
                null != (n = i.__html) &&
                  ("string" == typeof n && 0 < n.length && "\n" === n[0]
                    ? e.push(te, n)
                    : e.push("" + n));
              }
              return "string" == typeof o && "\n" === o[0] && e.push(te), o;
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              for (var m in (e.push(ae(t)), n))
                if (p.call(n, m) && null != (o = n[m]))
                  switch (m) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(
                        t +
                          " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.",
                      );
                    default:
                      Q(e, r, m, o);
                  }
              return e.push(X), null;
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return ee(e, n, t, r);
            case "html":
              return 0 === l.insertionMode && e.push(le), ee(e, n, t, r);
            default:
              if (-1 === t.indexOf("-") && "string" != typeof n.is)
                return ee(e, n, t, r);
              for (c in (e.push(ae(t)), (i = o = null), n))
                if (p.call(n, c) && null != (s = n[c]))
                  switch (c) {
                    case "children":
                      o = s;
                      break;
                    case "dangerouslySetInnerHTML":
                      i = s;
                      break;
                    case "style":
                      $(e, r, s);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                      break;
                    default:
                      y(c) &&
                        "function" != typeof s &&
                        "symbol" != typeof s &&
                        e.push(K, c, q, C(s), W);
                  }
              return e.push(Y), J(e, i, o), o;
          }
        }
        var ie = h("</"),
          se = h(">"),
          ue = h('<template id="'),
          ce = h('"></template>'),
          de = h("\x3c!--$--\x3e"),
          fe = h('\x3c!--$?--\x3e<template id="'),
          he = h('"></template>'),
          pe = h("\x3c!--$!--\x3e"),
          me = h("\x3c!--/$--\x3e"),
          ge = h("<template"),
          ve = h('"'),
          ye = h(' data-dgst="');
        h(' data-msg="'), h(' data-stck="');
        var be = h("></template>");
        function ke(e, t, n) {
          if ((s(e, fe), null === n))
            throw Error(
              "An ID must have been assigned before we can complete the boundary.",
            );
          return s(e, n), c(e, he);
        }
        var Ee = h('<div hidden id="'),
          we = h('">'),
          _e = h("</div>"),
          Se = h('<svg aria-hidden="true" style="display:none" id="'),
          xe = h('">'),
          Ce = h("</svg>"),
          Te = h('<math aria-hidden="true" style="display:none" id="'),
          Ne = h('">'),
          Pe = h("</math>"),
          Re = h('<table hidden id="'),
          Oe = h('">'),
          De = h("</table>"),
          Me = h('<table hidden><tbody id="'),
          Le = h('">'),
          Ie = h("</tbody></table>"),
          Ae = h('<table hidden><tr id="'),
          Fe = h('">'),
          je = h("</tr></table>"),
          ze = h('<table hidden><colgroup id="'),
          Be = h('">'),
          He = h("</colgroup></table>");
        var Ue = h(
            'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("',
          ),
          Ve = h('$RS("'),
          $e = h('","'),
          Ke = h('")</script>'),
          qe = h(
            'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("',
          ),
          We = h('$RC("'),
          Ge = h('","'),
          Qe = h('")</script>'),
          Ye = h(
            'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("',
          ),
          Xe = h('$RX("'),
          Je = h('"'),
          Ze = h(")</script>"),
          et = h(","),
          tt = /[<\u2028\u2029]/g;
        function nt(e) {
          return JSON.stringify(e).replace(tt, function (e) {
            switch (e) {
              case "<":
                return "\\u003c";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
              default:
                throw Error(
                  "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React",
                );
            }
          });
        }
        var rt = Object.assign,
          at = Symbol.for("react.element"),
          lt = Symbol.for("react.portal"),
          ot = Symbol.for("react.fragment"),
          it = Symbol.for("react.strict_mode"),
          st = Symbol.for("react.profiler"),
          ut = Symbol.for("react.provider"),
          ct = Symbol.for("react.context"),
          dt = Symbol.for("react.forward_ref"),
          ft = Symbol.for("react.suspense"),
          ht = Symbol.for("react.suspense_list"),
          pt = Symbol.for("react.memo"),
          mt = Symbol.for("react.lazy"),
          gt = Symbol.for("react.scope"),
          vt = Symbol.for("react.debug_trace_mode"),
          yt = Symbol.for("react.legacy_hidden"),
          bt = Symbol.for("react.default_value"),
          kt = Symbol.iterator;
        function Et(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case ot:
              return "Fragment";
            case lt:
              return "Portal";
            case st:
              return "Profiler";
            case it:
              return "StrictMode";
            case ft:
              return "Suspense";
            case ht:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case ct:
                return (e.displayName || "Context") + ".Consumer";
              case ut:
                return (e._context.displayName || "Context") + ".Provider";
              case dt:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case pt:
                return null !== (t = e.displayName || null)
                  ? t
                  : Et(e.type) || "Memo";
              case mt:
                (t = e._payload), (e = e._init);
                try {
                  return Et(e(t));
                } catch (e) {}
            }
          return null;
        }
        var wt = {};
        function _t(e, t) {
          if (!(e = e.contextTypes)) return wt;
          var n,
            r = {};
          for (n in e) r[n] = t[n];
          return r;
        }
        var St = null;
        function xt(e, t) {
          if (e !== t) {
            (e.context._currentValue = e.parentValue), (e = e.parent);
            var n = t.parent;
            if (null === e) {
              if (null !== n)
                throw Error(
                  "The stacks must reach the root at the same time. This is a bug in React.",
                );
            } else {
              if (null === n)
                throw Error(
                  "The stacks must reach the root at the same time. This is a bug in React.",
                );
              xt(e, n);
            }
            t.context._currentValue = t.value;
          }
        }
        function Ct(e) {
          (e.context._currentValue = e.parentValue),
            null !== (e = e.parent) && Ct(e);
        }
        function Tt(e) {
          var t = e.parent;
          null !== t && Tt(t), (e.context._currentValue = e.value);
        }
        function Nt(e, t) {
          if (
            ((e.context._currentValue = e.parentValue), null === (e = e.parent))
          )
            throw Error(
              "The depth must equal at least at zero before reaching the root. This is a bug in React.",
            );
          e.depth === t.depth ? xt(e, t) : Nt(e, t);
        }
        function Pt(e, t) {
          var n = t.parent;
          if (null === n)
            throw Error(
              "The depth must equal at least at zero before reaching the root. This is a bug in React.",
            );
          e.depth === n.depth ? xt(e, n) : Pt(e, n),
            (t.context._currentValue = t.value);
        }
        function Rt(e) {
          var t = St;
          t !== e &&
            (null === t
              ? Tt(e)
              : null === e
              ? Ct(t)
              : t.depth === e.depth
              ? xt(t, e)
              : t.depth > e.depth
              ? Nt(t, e)
              : Pt(t, e),
            (St = e));
        }
        var Ot = {
          isMounted: function () {
            return !1;
          },
          enqueueSetState: function (e, t) {
            null !== (e = e._reactInternals).queue && e.queue.push(t);
          },
          enqueueReplaceState: function (e, t) {
            ((e = e._reactInternals).replace = !0), (e.queue = [t]);
          },
          enqueueForceUpdate: function () {},
        };
        function Dt(e, t, n, r) {
          var a = void 0 !== e.state ? e.state : null;
          (e.updater = Ot), (e.props = n), (e.state = a);
          var l = { queue: [], replace: !1 };
          e._reactInternals = l;
          var o = t.contextType;
          if (
            ((e.context =
              "object" == typeof o && null !== o ? o._currentValue : r),
            "function" == typeof (o = t.getDerivedStateFromProps) &&
              ((a = null == (o = o(n, a)) ? a : rt({}, a, o)), (e.state = a)),
            "function" != typeof t.getDerivedStateFromProps &&
              "function" != typeof e.getSnapshotBeforeUpdate &&
              ("function" == typeof e.UNSAFE_componentWillMount ||
                "function" == typeof e.componentWillMount))
          )
            if (
              ((t = e.state),
              "function" == typeof e.componentWillMount &&
                e.componentWillMount(),
              "function" == typeof e.UNSAFE_componentWillMount &&
                e.UNSAFE_componentWillMount(),
              t !== e.state && Ot.enqueueReplaceState(e, e.state, null),
              null !== l.queue && 0 < l.queue.length)
            )
              if (
                ((t = l.queue),
                (o = l.replace),
                (l.queue = null),
                (l.replace = !1),
                o && 1 === t.length)
              )
                e.state = t[0];
              else {
                for (
                  l = o ? t[0] : e.state, a = !0, o = o ? 1 : 0;
                  o < t.length;
                  o++
                ) {
                  var i = t[o];
                  null !=
                    (i = "function" == typeof i ? i.call(e, l, n, r) : i) &&
                    (a ? ((a = !1), (l = rt({}, l, i))) : rt(l, i));
                }
                e.state = l;
              }
            else l.queue = null;
        }
        var Mt = { id: 1, overflow: "" };
        function Lt(e, t, n) {
          var r = e.id;
          e = e.overflow;
          var a = 32 - It(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - It(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            return (
              (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              { id: (1 << (32 - It(t) + a)) | (n << a) | r, overflow: l + e }
            );
          }
          return { id: (1 << l) | (n << a) | r, overflow: e };
        }
        var It = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((At(e) / Ft) | 0)) | 0;
              },
          At = Math.log,
          Ft = Math.LN2;
        var jt =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          zt = null,
          Bt = null,
          Ht = null,
          Ut = null,
          Vt = !1,
          $t = !1,
          Kt = 0,
          qt = null,
          Wt = 0;
        function Gt() {
          if (null === zt)
            throw Error(
              "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.",
            );
          return zt;
        }
        function Qt() {
          if (0 < Wt)
            throw Error("Rendered more hooks than during the previous render");
          return { memoizedState: null, queue: null, next: null };
        }
        function Yt() {
          return (
            null === Ut
              ? null === Ht
                ? ((Vt = !1), (Ht = Ut = Qt()))
                : ((Vt = !0), (Ut = Ht))
              : null === Ut.next
              ? ((Vt = !1), (Ut = Ut.next = Qt()))
              : ((Vt = !0), (Ut = Ut.next)),
            Ut
          );
        }
        function Xt() {
          (Bt = zt = null), ($t = !1), (Ht = null), (Wt = 0), (Ut = qt = null);
        }
        function Jt(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Zt(e, t, n) {
          if (((zt = Gt()), (Ut = Yt()), Vt)) {
            var r = Ut.queue;
            if (((t = r.dispatch), null !== qt && void 0 !== (n = qt.get(r)))) {
              qt.delete(r), (r = Ut.memoizedState);
              do {
                (r = e(r, n.action)), (n = n.next);
              } while (null !== n);
              return (Ut.memoizedState = r), [r, t];
            }
            return [Ut.memoizedState, t];
          }
          return (
            (e =
              e === Jt
                ? "function" == typeof t
                  ? t()
                  : t
                : void 0 !== n
                ? n(t)
                : t),
            (Ut.memoizedState = e),
            (e = (e = Ut.queue = { last: null, dispatch: null }).dispatch =
              tn.bind(null, zt, e)),
            [Ut.memoizedState, e]
          );
        }
        function en(e, t) {
          if (
            ((zt = Gt()), (t = void 0 === t ? null : t), null !== (Ut = Yt()))
          ) {
            var n = Ut.memoizedState;
            if (null !== n && null !== t) {
              var r = n[1];
              e: if (null === r) r = !1;
              else {
                for (var a = 0; a < r.length && a < t.length; a++)
                  if (!jt(t[a], r[a])) {
                    r = !1;
                    break e;
                  }
                r = !0;
              }
              if (r) return n[0];
            }
          }
          return (e = e()), (Ut.memoizedState = [e, t]), e;
        }
        function tn(e, t, n) {
          if (25 <= Wt)
            throw Error(
              "Too many re-renders. React limits the number of renders to prevent an infinite loop.",
            );
          if (e === zt)
            if (
              (($t = !0),
              (e = { action: n, next: null }),
              null === qt && (qt = new Map()),
              void 0 === (n = qt.get(t)))
            )
              qt.set(t, e);
            else {
              for (t = n; null !== t.next; ) t = t.next;
              t.next = e;
            }
        }
        function nn() {
          throw Error(
            "startTransition cannot be called during server rendering.",
          );
        }
        function rn() {}
        var an = {
            readContext: function (e) {
              return e._currentValue;
            },
            useContext: function (e) {
              return Gt(), e._currentValue;
            },
            useMemo: en,
            useReducer: Zt,
            useRef: function (e) {
              zt = Gt();
              var t = (Ut = Yt()).memoizedState;
              return null === t
                ? ((e = { current: e }), (Ut.memoizedState = e))
                : t;
            },
            useState: function (e) {
              return Zt(Jt, e);
            },
            useInsertionEffect: rn,
            useLayoutEffect: function () {},
            useCallback: function (e, t) {
              return en(function () {
                return e;
              }, t);
            },
            useImperativeHandle: rn,
            useEffect: rn,
            useDebugValue: rn,
            useDeferredValue: function (e) {
              return Gt(), e;
            },
            useTransition: function () {
              return Gt(), [!1, nn];
            },
            useId: function () {
              var e = Bt.treeContext,
                t = e.overflow;
              e = ((e = e.id) & ~(1 << (32 - It(e) - 1))).toString(32) + t;
              var n = ln;
              if (null === n)
                throw Error(
                  "Invalid hook call. Hooks can only be called inside of the body of a function component.",
                );
              return (
                (t = Kt++),
                (e = ":" + n.idPrefix + "R" + e),
                0 < t && (e += "H" + t.toString(32)),
                e + ":"
              );
            },
            useMutableSource: function (e, t) {
              return Gt(), t(e._source);
            },
            useSyncExternalStore: function (e, t, n) {
              if (void 0 === n)
                throw Error(
                  "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.",
                );
              return n();
            },
          },
          ln = null,
          on =
            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentDispatcher;
        function sn(e) {
          return console.error(e), null;
        }
        function un() {}
        function cn(e, t, n, r, a, l, o, i) {
          e.allPendingTasks++,
            null === n ? e.pendingRootTasks++ : n.pendingTasks++;
          var s = {
            node: t,
            ping: function () {
              return (function (e, t) {
                var n = e.pingedTasks;
                n.push(t),
                  1 === n.length &&
                    setImmediate(function () {
                      return xn(e);
                    });
              })(e, s);
            },
            blockedBoundary: n,
            blockedSegment: r,
            abortSet: a,
            legacyContext: l,
            context: o,
            treeContext: i,
          };
          return a.add(s), s;
        }
        function dn(e, t, n, r, a, l) {
          return {
            status: 0,
            id: -1,
            index: t,
            parentFlushed: !1,
            chunks: [],
            children: [],
            formatContext: r,
            boundary: n,
            lastPushedText: a,
            textEmbedded: l,
          };
        }
        function fn(e, t) {
          if (null != (e = e.onError(t)) && "string" != typeof e)
            throw Error(
              'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
                typeof e +
                '" instead',
            );
          return e;
        }
        function hn(e, t) {
          var n = e.onShellError;
          n(t),
            (n = e.onFatalError)(t),
            null !== e.destination
              ? ((e.status = 2), e.destination.destroy(t))
              : ((e.status = 1), (e.fatalError = t));
        }
        function pn(e, t, n, r, a) {
          for (zt = {}, Bt = t, Kt = 0, e = n(r, a); $t; )
            ($t = !1), (Kt = 0), (Wt += 1), (Ut = null), (e = n(r, a));
          return Xt(), e;
        }
        function mn(e, t, n, r) {
          var a = n.render(),
            l = r.childContextTypes;
          if (null != l) {
            var o = t.legacyContext;
            if ("function" != typeof n.getChildContext) r = o;
            else {
              for (var i in (n = n.getChildContext()))
                if (!(i in l))
                  throw Error(
                    (Et(r) || "Unknown") +
                      '.getChildContext(): key "' +
                      i +
                      '" is not defined in childContextTypes.',
                  );
              r = rt({}, o, n);
            }
            (t.legacyContext = r), yn(e, t, a), (t.legacyContext = o);
          } else yn(e, t, a);
        }
        function gn(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = rt({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function vn(e, t, n, r, a) {
          if ("function" == typeof n)
            if (n.prototype && n.prototype.isReactComponent) {
              a = _t(n, t.legacyContext);
              var l = n.contextType;
              Dt(
                (l = new n(
                  r,
                  "object" == typeof l && null !== l ? l._currentValue : a,
                )),
                n,
                r,
                a,
              ),
                mn(e, t, l, n);
            } else {
              a = pn(e, t, n, r, (l = _t(n, t.legacyContext)));
              var o = 0 !== Kt;
              if (
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
              )
                Dt(a, n, r, l), mn(e, t, a, n);
              else if (o) {
                (r = t.treeContext), (t.treeContext = Lt(r, 1, 0));
                try {
                  yn(e, t, a);
                } finally {
                  t.treeContext = r;
                }
              } else yn(e, t, a);
            }
          else {
            if ("string" != typeof n) {
              switch (n) {
                case yt:
                case vt:
                case it:
                case st:
                case ot:
                case ht:
                  return void yn(e, t, r.children);
                case gt:
                  throw Error(
                    "ReactDOMServer does not yet support scope components.",
                  );
                case ft:
                  e: {
                    (n = t.blockedBoundary),
                      (a = t.blockedSegment),
                      (l = r.fallback),
                      (r = r.children);
                    var i = {
                        id: null,
                        rootSegmentID: -1,
                        parentFlushed: !1,
                        pendingTasks: 0,
                        forceClientRender: !1,
                        completedSegments: [],
                        byteSize: 0,
                        fallbackAbortableTasks: (o = new Set()),
                        errorDigest: null,
                      },
                      s = dn(0, a.chunks.length, i, a.formatContext, !1, !1);
                    a.children.push(s), (a.lastPushedText = !1);
                    var u = dn(0, 0, null, a.formatContext, !1, !1);
                    (u.parentFlushed = !0),
                      (t.blockedBoundary = i),
                      (t.blockedSegment = u);
                    try {
                      if (
                        (kn(e, t, r),
                        u.lastPushedText && u.textEmbedded && u.chunks.push(j),
                        (u.status = 1),
                        _n(i, u),
                        0 === i.pendingTasks)
                      )
                        break e;
                    } catch (t) {
                      (u.status = 4),
                        (i.forceClientRender = !0),
                        (i.errorDigest = fn(e, t));
                    } finally {
                      (t.blockedBoundary = n), (t.blockedSegment = a);
                    }
                    (t = cn(
                      e,
                      l,
                      n,
                      s,
                      o,
                      t.legacyContext,
                      t.context,
                      t.treeContext,
                    )),
                      e.pingedTasks.push(t);
                  }
                  return;
              }
              if ("object" == typeof n && null !== n)
                switch (n.$$typeof) {
                  case dt:
                    if (((r = pn(e, t, n.render, r, a)), 0 !== Kt)) {
                      (n = t.treeContext), (t.treeContext = Lt(n, 1, 0));
                      try {
                        yn(e, t, r);
                      } finally {
                        t.treeContext = n;
                      }
                    } else yn(e, t, r);
                    return;
                  case pt:
                    return void vn(e, t, (n = n.type), (r = gn(n, r)), a);
                  case ut:
                    if (
                      ((a = r.children),
                      (n = n._context),
                      (r = r.value),
                      (l = n._currentValue),
                      (n._currentValue = r),
                      (St = r =
                        {
                          parent: (o = St),
                          depth: null === o ? 0 : o.depth + 1,
                          context: n,
                          parentValue: l,
                          value: r,
                        }),
                      (t.context = r),
                      yn(e, t, a),
                      null === (e = St))
                    )
                      throw Error(
                        "Tried to pop a Context at the root of the app. This is a bug in React.",
                      );
                    return (
                      (r = e.parentValue),
                      (e.context._currentValue =
                        r === bt ? e.context._defaultValue : r),
                      (e = St = e.parent),
                      void (t.context = e)
                    );
                  case ct:
                    return void yn(
                      e,
                      t,
                      (r = (r = r.children)(n._currentValue)),
                    );
                  case mt:
                    return void vn(
                      e,
                      t,
                      (n = (a = n._init)(n._payload)),
                      (r = gn(n, r)),
                      void 0,
                    );
                }
              throw Error(
                "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
                  (null == n ? n : typeof n) +
                  ".",
              );
            }
            switch (
              ((l = oe(
                (a = t.blockedSegment).chunks,
                n,
                r,
                e.responseState,
                a.formatContext,
              )),
              (a.lastPushedText = !1),
              (o = a.formatContext),
              (a.formatContext = (function (e, t, n) {
                switch (t) {
                  case "select":
                    return F(1, null != n.value ? n.value : n.defaultValue);
                  case "svg":
                    return F(2, null);
                  case "math":
                    return F(3, null);
                  case "foreignObject":
                    return F(1, null);
                  case "table":
                    return F(4, null);
                  case "thead":
                  case "tbody":
                  case "tfoot":
                    return F(5, null);
                  case "colgroup":
                    return F(7, null);
                  case "tr":
                    return F(6, null);
                }
                return 4 <= e.insertionMode || 0 === e.insertionMode
                  ? F(1, null)
                  : e;
              })(o, n, r)),
              kn(e, t, l),
              (a.formatContext = o),
              n)
            ) {
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break;
              default:
                a.chunks.push(ie, n, se);
            }
            a.lastPushedText = !1;
          }
        }
        function yn(e, t, n) {
          if (((t.node = n), "object" == typeof n && null !== n)) {
            switch (n.$$typeof) {
              case at:
                return void vn(e, t, n.type, n.props, n.ref);
              case lt:
                throw Error(
                  "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.",
                );
              case mt:
                var r = n._init;
                return void yn(e, t, (n = r(n._payload)));
            }
            if (P(n)) return void bn(e, t, n);
            if (
              (null === n || "object" != typeof n
                ? (r = null)
                : (r =
                    "function" == typeof (r = (kt && n[kt]) || n["@@iterator"])
                      ? r
                      : null),
              r && (r = r.call(n)))
            ) {
              if (!(n = r.next()).done) {
                var a = [];
                do {
                  a.push(n.value), (n = r.next());
                } while (!n.done);
                bn(e, t, a);
              }
              return;
            }
            throw (
              ((e = Object.prototype.toString.call(n)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === e
                    ? "object with keys {" + Object.keys(n).join(", ") + "}"
                    : e) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          }
          "string" == typeof n
            ? ((r = t.blockedSegment).lastPushedText = z(
                t.blockedSegment.chunks,
                n,
                e.responseState,
                r.lastPushedText,
              ))
            : "number" == typeof n &&
              ((r = t.blockedSegment).lastPushedText = z(
                t.blockedSegment.chunks,
                "" + n,
                e.responseState,
                r.lastPushedText,
              ));
        }
        function bn(e, t, n) {
          for (var r = n.length, a = 0; a < r; a++) {
            var l = t.treeContext;
            t.treeContext = Lt(l, r, a);
            try {
              kn(e, t, n[a]);
            } finally {
              t.treeContext = l;
            }
          }
        }
        function kn(e, t, n) {
          var r = t.blockedSegment.formatContext,
            a = t.legacyContext,
            l = t.context;
          try {
            return yn(e, t, n);
          } catch (s) {
            if (
              (Xt(),
              "object" != typeof s || null === s || "function" != typeof s.then)
            )
              throw (
                ((t.blockedSegment.formatContext = r),
                (t.legacyContext = a),
                (t.context = l),
                Rt(l),
                s)
              );
            n = s;
            var o = t.blockedSegment,
              i = dn(
                0,
                o.chunks.length,
                null,
                o.formatContext,
                o.lastPushedText,
                !0,
              );
            o.children.push(i),
              (o.lastPushedText = !1),
              (e = cn(
                e,
                t.node,
                t.blockedBoundary,
                i,
                t.abortSet,
                t.legacyContext,
                t.context,
                t.treeContext,
              ).ping),
              n.then(e, e),
              (t.blockedSegment.formatContext = r),
              (t.legacyContext = a),
              (t.context = l),
              Rt(l);
          }
        }
        function En(e) {
          var t = e.blockedBoundary;
          ((e = e.blockedSegment).status = 3), Sn(this, t, e);
        }
        function wn(e, t, n) {
          var r = e.blockedBoundary;
          (e.blockedSegment.status = 3),
            null === r
              ? (t.allPendingTasks--,
                2 !== t.status &&
                  ((t.status = 2),
                  null !== t.destination && t.destination.end()))
              : (r.pendingTasks--,
                r.forceClientRender ||
                  ((r.forceClientRender = !0),
                  (r.errorDigest = t.onError(
                    void 0 === n
                      ? Error(
                          "The render was aborted by the server without a reason.",
                        )
                      : n,
                  )),
                  r.parentFlushed && t.clientRenderedBoundaries.push(r)),
                r.fallbackAbortableTasks.forEach(function (e) {
                  return wn(e, t, n);
                }),
                r.fallbackAbortableTasks.clear(),
                t.allPendingTasks--,
                0 === t.allPendingTasks && (e = t.onAllReady)());
        }
        function _n(e, t) {
          if (
            0 === t.chunks.length &&
            1 === t.children.length &&
            null === t.children[0].boundary
          ) {
            var n = t.children[0];
            (n.id = t.id), (n.parentFlushed = !0), 1 === n.status && _n(e, n);
          } else e.completedSegments.push(t);
        }
        function Sn(e, t, n) {
          if (null === t) {
            if (n.parentFlushed) {
              if (null !== e.completedRootSegment)
                throw Error(
                  "There can only be one root segment. This is a bug in React.",
                );
              e.completedRootSegment = n;
            }
            e.pendingRootTasks--,
              0 === e.pendingRootTasks &&
                ((e.onShellError = un), (t = e.onShellReady)());
          } else
            t.pendingTasks--,
              t.forceClientRender ||
                (0 === t.pendingTasks
                  ? (n.parentFlushed && 1 === n.status && _n(t, n),
                    t.parentFlushed && e.completedBoundaries.push(t),
                    t.fallbackAbortableTasks.forEach(En, e),
                    t.fallbackAbortableTasks.clear())
                  : n.parentFlushed &&
                    1 === n.status &&
                    (_n(t, n),
                    1 === t.completedSegments.length &&
                      t.parentFlushed &&
                      e.partialBoundaries.push(t)));
          e.allPendingTasks--, 0 === e.allPendingTasks && (e = e.onAllReady)();
        }
        function xn(e) {
          if (2 !== e.status) {
            var t = St,
              n = on.current;
            on.current = an;
            var r = ln;
            ln = e.responseState;
            try {
              var a,
                l = e.pingedTasks;
              for (a = 0; a < l.length; a++) {
                var o = l[a],
                  i = e,
                  s = o.blockedSegment;
                if (0 === s.status) {
                  Rt(o.context);
                  try {
                    yn(i, o, o.node),
                      s.lastPushedText && s.textEmbedded && s.chunks.push(j),
                      o.abortSet.delete(o),
                      (s.status = 1),
                      Sn(i, o.blockedBoundary, s);
                  } catch (e) {
                    if (
                      (Xt(),
                      "object" == typeof e &&
                        null !== e &&
                        "function" == typeof e.then)
                    ) {
                      var u = o.ping;
                      e.then(u, u);
                    } else {
                      o.abortSet.delete(o), (s.status = 4);
                      var c = o.blockedBoundary,
                        d = e,
                        f = fn(i, d);
                      if (
                        (null === c
                          ? hn(i, d)
                          : (c.pendingTasks--,
                            c.forceClientRender ||
                              ((c.forceClientRender = !0),
                              (c.errorDigest = f),
                              c.parentFlushed &&
                                i.clientRenderedBoundaries.push(c))),
                        i.allPendingTasks--,
                        0 === i.allPendingTasks)
                      )
                        (0, i.onAllReady)();
                    }
                  }
                }
              }
              l.splice(0, a), null !== e.destination && On(e, e.destination);
            } catch (t) {
              fn(e, t), hn(e, t);
            } finally {
              (ln = r), (on.current = n), n === an && Rt(t);
            }
          }
        }
        function Cn(e, t, n) {
          switch (((n.parentFlushed = !0), n.status)) {
            case 0:
              var r = (n.id = e.nextSegmentId++);
              return (
                (n.lastPushedText = !1),
                (n.textEmbedded = !1),
                (e = e.responseState),
                s(t, ue),
                s(t, e.placeholderPrefix),
                s(t, (e = r.toString(16))),
                c(t, ce)
              );
            case 1:
              n.status = 2;
              var a = !0;
              r = n.chunks;
              var l = 0;
              n = n.children;
              for (var o = 0; o < n.length; o++) {
                for (a = n[o]; l < a.index; l++) s(t, r[l]);
                a = Tn(e, t, a);
              }
              for (; l < r.length - 1; l++) s(t, r[l]);
              return l < r.length && (a = c(t, r[l])), a;
            default:
              throw Error(
                "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.",
              );
          }
        }
        function Tn(e, t, n) {
          var r = n.boundary;
          if (null === r) return Cn(e, t, n);
          if (((r.parentFlushed = !0), r.forceClientRender))
            (r = r.errorDigest),
              c(t, pe),
              s(t, ge),
              r && (s(t, ye), s(t, C(r)), s(t, ve)),
              c(t, be),
              Cn(e, t, n);
          else if (0 < r.pendingTasks) {
            (r.rootSegmentID = e.nextSegmentId++),
              0 < r.completedSegments.length && e.partialBoundaries.push(r);
            var a = e.responseState,
              l = a.nextSuspenseID++;
            (a = h(a.boundaryPrefix + l.toString(16))),
              (r = r.id = a),
              ke(t, e.responseState, r),
              Cn(e, t, n);
          } else if (r.byteSize > e.progressiveChunkSize)
            (r.rootSegmentID = e.nextSegmentId++),
              e.completedBoundaries.push(r),
              ke(t, e.responseState, r.id),
              Cn(e, t, n);
          else {
            if ((c(t, de), 1 !== (n = r.completedSegments).length))
              throw Error(
                "A previously unvisited boundary must have exactly one root segment. This is a bug in React.",
              );
            Tn(e, t, n[0]);
          }
          return c(t, me);
        }
        function Nn(e, t, n) {
          return (
            (function (e, t, n, r) {
              switch (n.insertionMode) {
                case 0:
                case 1:
                  return (
                    s(e, Ee),
                    s(e, t.segmentPrefix),
                    s(e, r.toString(16)),
                    c(e, we)
                  );
                case 2:
                  return (
                    s(e, Se),
                    s(e, t.segmentPrefix),
                    s(e, r.toString(16)),
                    c(e, xe)
                  );
                case 3:
                  return (
                    s(e, Te),
                    s(e, t.segmentPrefix),
                    s(e, r.toString(16)),
                    c(e, Ne)
                  );
                case 4:
                  return (
                    s(e, Re),
                    s(e, t.segmentPrefix),
                    s(e, r.toString(16)),
                    c(e, Oe)
                  );
                case 5:
                  return (
                    s(e, Me),
                    s(e, t.segmentPrefix),
                    s(e, r.toString(16)),
                    c(e, Le)
                  );
                case 6:
                  return (
                    s(e, Ae),
                    s(e, t.segmentPrefix),
                    s(e, r.toString(16)),
                    c(e, Fe)
                  );
                case 7:
                  return (
                    s(e, ze),
                    s(e, t.segmentPrefix),
                    s(e, r.toString(16)),
                    c(e, Be)
                  );
                default:
                  throw Error(
                    "Unknown insertion mode. This is a bug in React.",
                  );
              }
            })(t, e.responseState, n.formatContext, n.id),
            Tn(e, t, n),
            (function (e, t) {
              switch (t.insertionMode) {
                case 0:
                case 1:
                  return c(e, _e);
                case 2:
                  return c(e, Ce);
                case 3:
                  return c(e, Pe);
                case 4:
                  return c(e, De);
                case 5:
                  return c(e, Ie);
                case 6:
                  return c(e, je);
                case 7:
                  return c(e, He);
                default:
                  throw Error(
                    "Unknown insertion mode. This is a bug in React.",
                  );
              }
            })(t, n.formatContext)
          );
        }
        function Pn(e, t, n) {
          for (var r = n.completedSegments, a = 0; a < r.length; a++)
            Rn(e, t, n, r[a]);
          if (
            ((r.length = 0),
            (e = e.responseState),
            (r = n.id),
            (n = n.rootSegmentID),
            s(t, e.startInlineScript),
            e.sentCompleteBoundaryFunction
              ? s(t, We)
              : ((e.sentCompleteBoundaryFunction = !0), s(t, qe)),
            null === r)
          )
            throw Error(
              "An ID must have been assigned before we can complete the boundary.",
            );
          return (
            (n = n.toString(16)),
            s(t, r),
            s(t, Ge),
            s(t, e.segmentPrefix),
            s(t, n),
            c(t, Qe)
          );
        }
        function Rn(e, t, n, r) {
          if (2 === r.status) return !0;
          var a = r.id;
          if (-1 === a) {
            if (-1 === (r.id = n.rootSegmentID))
              throw Error(
                "A root segment ID must have been assigned by now. This is a bug in React.",
              );
            return Nn(e, t, r);
          }
          return (
            Nn(e, t, r),
            s(t, (e = e.responseState).startInlineScript),
            e.sentCompleteSegmentFunction
              ? s(t, Ve)
              : ((e.sentCompleteSegmentFunction = !0), s(t, Ue)),
            s(t, e.segmentPrefix),
            s(t, (a = a.toString(16))),
            s(t, $e),
            s(t, e.placeholderPrefix),
            s(t, a),
            c(t, Ke)
          );
        }
        function On(e, t) {
          (l = new Uint8Array(2048)), (o = 0), (i = !0);
          try {
            var n = e.completedRootSegment;
            if (null !== n && 0 === e.pendingRootTasks) {
              Tn(e, t, n), (e.completedRootSegment = null);
              var r = e.responseState.bootstrapChunks;
              for (n = 0; n < r.length - 1; n++) s(t, r[n]);
              n < r.length && c(t, r[n]);
            }
            var a,
              u = e.clientRenderedBoundaries;
            for (a = 0; a < u.length; a++) {
              var f = u[a];
              r = t;
              var h = e.responseState,
                p = f.id,
                m = f.errorDigest,
                g = f.errorMessage,
                v = f.errorComponentStack;
              if (
                (s(r, h.startInlineScript),
                h.sentClientRenderFunction
                  ? s(r, Xe)
                  : ((h.sentClientRenderFunction = !0), s(r, Ye)),
                null === p)
              )
                throw Error(
                  "An ID must have been assigned before we can complete the boundary.",
                );
              if (
                (s(r, p),
                s(r, Je),
                (m || g || v) && (s(r, et), s(r, nt(m || ""))),
                (g || v) && (s(r, et), s(r, nt(g || ""))),
                v && (s(r, et), s(r, nt(v))),
                !c(r, Ze))
              )
                return (e.destination = null), a++, void u.splice(0, a);
            }
            u.splice(0, a);
            var y = e.completedBoundaries;
            for (a = 0; a < y.length; a++)
              if (!Pn(e, t, y[a]))
                return (e.destination = null), a++, void y.splice(0, a);
            y.splice(0, a), d(t), (l = new Uint8Array(2048)), (o = 0), (i = !0);
            var b = e.partialBoundaries;
            for (a = 0; a < b.length; a++) {
              var k = b[a];
              e: {
                (u = e), (f = t);
                var E = k.completedSegments;
                for (h = 0; h < E.length; h++)
                  if (!Rn(u, f, k, E[h])) {
                    h++, E.splice(0, h);
                    var w = !1;
                    break e;
                  }
                E.splice(0, h), (w = !0);
              }
              if (!w) return (e.destination = null), a++, void b.splice(0, a);
            }
            b.splice(0, a);
            var _ = e.completedBoundaries;
            for (a = 0; a < _.length; a++)
              if (!Pn(e, t, _[a]))
                return (e.destination = null), a++, void _.splice(0, a);
            _.splice(0, a);
          } finally {
            d(t),
              "function" == typeof t.flush && t.flush(),
              0 === e.allPendingTasks &&
                0 === e.pingedTasks.length &&
                0 === e.clientRenderedBoundaries.length &&
                0 === e.completedBoundaries.length &&
                t.end();
          }
        }
        function Dn(e, t) {
          if (1 === e.status) (e.status = 2), t.destroy(e.fatalError);
          else if (2 !== e.status && null === e.destination) {
            e.destination = t;
            try {
              On(e, t);
            } catch (t) {
              fn(e, t), hn(e, t);
            }
          }
        }
        function Mn(e, t) {
          try {
            var n = e.abortableTasks;
            n.forEach(function (n) {
              return wn(n, e, t);
            }),
              n.clear(),
              null !== e.destination && On(e, e.destination);
          } catch (t) {
            fn(e, t), hn(e, t);
          }
        }
        function Ln(e, t) {
          return function () {
            return Mn(e, t);
          };
        }
        (t.renderToPipeableStream = function (e, t) {
          var n = (function (e, t) {
              var n = t ? t.identifierPrefix : void 0,
                r = t ? t.nonce : void 0,
                a = t ? t.bootstrapScriptContent : void 0,
                l = t ? t.bootstrapScripts : void 0,
                o = t ? t.bootstrapModules : void 0;
              (n = void 0 === n ? "" : n),
                (r = void 0 === r ? R : h('<script nonce="' + C(r) + '">'));
              var i = [];
              if (
                (void 0 !== a && i.push(r, ("" + a).replace(I, A), O),
                void 0 !== l)
              )
                for (a = 0; a < l.length; a++) i.push(D, C(l[a]), L);
              if (void 0 !== o)
                for (l = 0; l < o.length; l++) i.push(M, C(o[l]), L);
              (o = {
                bootstrapChunks: i,
                startInlineScript: r,
                placeholderPrefix: h(n + "P:"),
                segmentPrefix: h(n + "S:"),
                boundaryPrefix: n + "B:",
                idPrefix: n,
                nextSuspenseID: 0,
                sentCompleteSegmentFunction: !1,
                sentCompleteBoundaryFunction: !1,
                sentClientRenderFunction: !1,
              }),
                (l = F(
                  "http://www.w3.org/2000/svg" ===
                    (l = t ? t.namespaceURI : void 0)
                    ? 2
                    : "http://www.w3.org/1998/Math/MathML" === l
                    ? 3
                    : 0,
                  null,
                )),
                (a = t ? t.progressiveChunkSize : void 0),
                (r = t ? t.onError : void 0),
                (i = t ? t.onAllReady : void 0);
              var s = t ? t.onShellReady : void 0,
                u = t ? t.onShellError : void 0;
              return (
                (t = []),
                (o = {
                  destination: null,
                  responseState: o,
                  progressiveChunkSize: void 0 === a ? 12800 : a,
                  status: 0,
                  fatalError: null,
                  nextSegmentId: 0,
                  allPendingTasks: 0,
                  pendingRootTasks: 0,
                  completedRootSegment: null,
                  abortableTasks: (n = new Set()),
                  pingedTasks: t,
                  clientRenderedBoundaries: [],
                  completedBoundaries: [],
                  partialBoundaries: [],
                  onError: void 0 === r ? sn : r,
                  onAllReady: void 0 === i ? un : i,
                  onShellReady: void 0 === s ? un : s,
                  onShellError: void 0 === u ? un : u,
                  onFatalError: un,
                }),
                ((l = dn(0, 0, null, l, !1, !1)).parentFlushed = !0),
                (e = cn(o, e, null, l, n, wt, null, Mt)),
                t.push(e),
                o
              );
            })(e, t),
            r = !1;
          return (
            (function (e) {
              setImmediate(function () {
                return xn(e);
              });
            })(n),
            {
              pipe: function (e) {
                if (r)
                  throw Error(
                    "React currently only supports piping to one writable stream.",
                  );
                return (
                  (r = !0),
                  Dn(n, e),
                  e.on(
                    "drain",
                    (function (e, t) {
                      return function () {
                        return Dn(t, e);
                      };
                    })(e, n),
                  ),
                  e.on(
                    "error",
                    Ln(
                      n,
                      Error(
                        "The destination stream errored while writing data.",
                      ),
                    ),
                  ),
                  e.on(
                    "close",
                    Ln(n, Error("The destination stream closed early.")),
                  ),
                  e
                );
              },
              abort: function (e) {
                Mn(n, e);
              },
            }
          );
        }),
          (t.version = "18.2.0");
      },
      448: (e, t, n) => {
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
        var o = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          p = {};
        function m(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
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
                    (!d.call(h, e) &&
                      (f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
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
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
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
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          E = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          D = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function I(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var A,
          F = Object.assign;
        function j(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              A = (t && t[1]) || "";
            }
          return "\n" + A + e;
        }
        var z = !1;
        function B(e, t) {
          if (!e || z) return "";
          z = !0;
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
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--;
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= i);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? j(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return j(e.type);
            case 16:
              return j("Lazy");
            case 13:
              return j("Suspense");
            case 19:
              return j("SuspenseList");
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
            case _:
              return "Fragment";
            case w:
              return "Portal";
            case x:
              return "Profiler";
            case S:
              return "StrictMode";
            case P:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case D:
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
              return t === S ? "StrictMode" : "Mode";
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
        function $(e) {
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
        function K(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? "checked" : "value",
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
        function W(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
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
        function Q(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = $(null != t.value ? t.value : n)),
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
          var n = $(t.value),
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
              ee(e, t.type, $(t.defaultValue)),
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
          ("number" === t && G(e.ownerDocument) === e) ||
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
            for (n = "" + $(n), t = null, a = 0; a < e.length; a++) {
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
          return F({}, t, {
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
          e._wrapperState = { initialValue: $(n) };
        }
        function le(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
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
            ? ie(t)
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
        var he = {
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
        function me(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (he.hasOwnProperty(e) && he[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(he).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ve = F(
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
              ve[e] &&
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
        var ke = null;
        function Ee(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          _e = null,
          Se = null;
        function xe(e) {
          if ((e = ba(e))) {
            if ("function" != typeof we) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = Ea(t)), we(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          _e ? (Se ? Se.push(e) : (Se = [e])) : (_e = e);
        }
        function Te() {
          if (_e) {
            var e = _e,
              t = Se;
            if (((Se = _e = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Pe() {}
        var Re = !1;
        function Oe(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (Re = !1), (null !== _e || null !== Se) && (Pe(), Te());
          }
        }
        function De(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Ea(n);
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
        var Me = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            Me = !1;
          }
        function Ie(e, t, n, r, a, l, o, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (e) {
            this.onError(e);
          }
        }
        var Ae = !1,
          Fe = null,
          je = !1,
          ze = null,
          Be = {
            onError: function (e) {
              (Ae = !0), (Fe = e);
            },
          };
        function He(e, t, n, r, a, l, o, i, s) {
          (Ae = !1), (Fe = null), Ie.apply(Be, arguments);
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
        function $e(e) {
          if (Ue(e) !== e) throw Error(l(188));
        }
        function Ke(e) {
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
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return $e(a), e;
                    if (o === r) return $e(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === n) {
                      (i = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (i = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (i = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (i = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var We = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
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
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
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
            o = 268435455 & n;
          if (0 !== o) {
            var i = o & ~a;
            0 !== i ? (r = dt(i)) : 0 !== (l &= o) && (r = dt(l));
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== l && (r = dt(l));
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
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function ht(e, t) {
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
        function mt() {
          var e = ut;
          return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function kt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var Et,
          wt,
          _t,
          St,
          xt,
          Ct = !1,
          Tt = [],
          Nt = null,
          Pt = null,
          Rt = null,
          Ot = new Map(),
          Dt = new Map(),
          Mt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function It(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Dt.delete(t.pointerId);
          }
        }
        function At(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      _t(n);
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
        function jt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (ke = r), n.target.dispatchEvent(r), (ke = null), t.shift();
          }
          return !0;
        }
        function zt(e, t, n) {
          jt(e) && n.delete(t);
        }
        function Bt() {
          (Ct = !1),
            null !== Nt && jt(Nt) && (Nt = null),
            null !== Pt && jt(Pt) && (Pt = null),
            null !== Rt && jt(Rt) && (Rt = null),
            Ot.forEach(zt),
            Dt.forEach(zt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ut(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Tt.length) {
            Ht(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Ht(Nt, e),
              null !== Pt && Ht(Pt, e),
              null !== Rt && Ht(Rt, e),
              Ot.forEach(t),
              Dt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Mt.shift();
        }
        var Vt = k.ReactCurrentBatchConfig,
          $t = !0;
        function Kt(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Wt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Wt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function Wt(e, t, n, r) {
          if ($t) {
            var a = Qt(e, t, n, r);
            if (null === a) $r(e, t, r, Gt, n), It(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = At(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = At(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = At(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Ot.set(l, At(Ot.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Dt.set(l, At(Dt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && Et(l),
                  null === (l = Qt(e, t, n, r)) && $r(e, t, r, Gt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else $r(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Qt(e, t, n, r) {
          if (((Gt = null), null !== (e = ya((e = Ee(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
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
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
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
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
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
            F(t.prototype, {
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
          dn = F({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          hn = F({}, dn, {
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
            getModifierState: xn,
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
          pn = an(hn),
          mn = an(F({}, hn, { dataTransfer: 0 })),
          gn = an(F({}, dn, { relatedTarget: 0 })),
          vn = an(
            F({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = F({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          kn = an(F({}, un, { data: 0 })),
          En = {
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
          wn = {
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
          _n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e];
        }
        function xn() {
          return Sn;
        }
        var Cn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = En[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
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
            getModifierState: xn,
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
          Tn = an(Cn),
          Nn = an(
            F({}, hn, {
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
          Pn = an(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            }),
          ),
          Rn = an(
            F({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          On = F({}, hn, {
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
          Dn = an(On),
          Mn = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var An = c && "TextEvent" in window && !In,
          Fn = c && (!Ln || (In && 8 < In && 11 >= In)),
          jn = String.fromCharCode(32),
          zn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
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
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          Ce(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Wn = null;
        function Gn(e) {
          jr(e, 0);
        }
        function Qn(e) {
          if (W(ka(e))) return e;
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
          qn && (qn.detachEvent("onpropertychange", nr), (Wn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Wn)) {
            var t = [];
            Kn(t, Wn, e, Ee(e)), Oe(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Wn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(Wn);
        }
        function lr(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var ir =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function sr(e, t) {
          if (ir(e, t)) return !0;
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
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1;
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
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
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
            if (null !== r && hr(n))
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
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== G(r) ||
            ("selectionStart" in (r = gr) && hr(r)
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
              0 < (r = qr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function Er(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wr = {
            animationend: Er("Animation", "AnimationEnd"),
            animationiteration: Er("Animation", "AnimationIteration"),
            animationstart: Er("Animation", "AnimationStart"),
            transitionend: Er("Transition", "TransitionEnd"),
          },
          _r = {},
          Sr = {};
        function xr(e) {
          if (_r[e]) return _r[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (_r[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          "TransitionEvent" in window || delete wr.transitionend.transition);
        var Cr = xr("animationend"),
          Tr = xr("animationiteration"),
          Nr = xr("animationstart"),
          Pr = xr("transitionend"),
          Rr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Dr(e, t) {
          Rr.set(e, t), s(t, [e]);
        }
        for (var Mr = 0; Mr < Or.length; Mr++) {
          var Lr = Or[Mr];
          Dr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Dr(Cr, "onAnimationEnd"),
          Dr(Tr, "onAnimationIteration"),
          Dr(Nr, "onAnimationStart"),
          Dr("dblclick", "onDoubleClick"),
          Dr("focusin", "onFocus"),
          Dr("focusout", "onBlur"),
          Dr(Pr, "onTransitionEnd"),
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
        var Ir =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Ar = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ir),
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, i, s, u) {
              if ((He.apply(this, arguments), Ae)) {
                if (!Ae) throw Error(l(198));
                var c = Fe;
                (Ae = !1), (Fe = null), je || ((je = !0), (ze = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function jr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Fr(a, i, u), (l = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (i = r[o]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, i, u), (l = s);
                }
            }
          }
          if (je) throw ((e = ze), (je = !1), (ze = null), e);
        }
        function zr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
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
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ar.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Kt;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Wt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Me ||
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
        function $r(e, t, n, r, a) {
          var l = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = l,
              a = Ee(n),
              o = [];
            e: {
              var i = Rr.get(e);
              if (void 0 !== i) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = gn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = gn;
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
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case Cr:
                  case Tr:
                  case Nr:
                    s = vn;
                    break;
                  case Pr:
                    s = Rn;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Dn;
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
                    s = Nn;
                }
                var c = 0 != (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== m &&
                      ((h = m),
                      null !== f &&
                        null != (m = De(p, f)) &&
                        c.push(Kr(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((i = new s(i, u, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === ke ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[pa])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
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
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == s ? i : ka(s)),
                  (h = null == u ? i : ka(u)),
                  ((i = new c(m, p + "leave", s, n, a)).target = d),
                  (i.relatedTarget = h),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, p + "enter", u, n, a)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = s; h; h = Wr(h)) p++;
                    for (h = 0, m = f; m; m = Wr(m)) h++;
                    for (; 0 < p - h; ) (c = Wr(c)), p--;
                    for (; 0 < h - p; ) (f = Wr(f)), h--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Wr(c)), (f = Wr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Gr(o, i, s, c, !1),
                  null !== u && null !== d && Gr(o, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (i = r ? ka(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var g = Yn;
              else if ($n(i))
                if (Xn) g = or;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (s = i.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Kn(o, g, n, a)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (v = r ? ka(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), kr(o, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  kr(o, n, a);
              }
              var y;
              if (Ln)
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
                (Fn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = en())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Un = !0))),
                0 < (v = qr(r, b)).length &&
                  ((b = new kn(b, e, null, n, a)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = An
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((zn = !0), jn);
                        case "textInput":
                          return (e = t.data) === jn && zn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!Ln && Bn(e, t))
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
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new kn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            jr(o, t);
          });
        }
        function Kr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = De(e, n)) && r.unshift(Kr(e, l, a)),
              null != (l = De(e, t)) && r.push(Kr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Wr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === r) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = De(n, l)) && o.unshift(Kr(n, s, i))
                : a || (null != (s = De(n, l)) && o.push(Kr(n, s, i)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Qr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(Qr, "\n")
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
          oa =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
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
          ha = "__reactProps$" + da,
          pa = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          ga = "__reactListeners$" + da,
          va = "__reactHandles$" + da;
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
        function ka(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function Ea(e) {
          return e[ha] || null;
        }
        var wa = [],
          _a = -1;
        function Sa(e) {
          return { current: e };
        }
        function xa(e) {
          0 > _a || ((e.current = wa[_a]), (wa[_a] = null), _a--);
        }
        function Ca(e, t) {
          _a++, (wa[_a] = e.current), (e.current = t);
        }
        var Ta = {},
          Na = Sa(Ta),
          Pa = Sa(!1),
          Ra = Ta;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
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
        function Da(e) {
          return null != (e = e.childContextTypes);
        }
        function Ma() {
          xa(Pa), xa(Na);
        }
        function La(e, t, n) {
          if (Na.current !== Ta) throw Error(l(168));
          Ca(Na, t), Ca(Pa, n);
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, V(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Aa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Ra = Na.current),
            Ca(Na, e),
            Ca(Pa, Pa.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ia(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xa(Pa),
              xa(Na),
              Ca(Na, e))
            : xa(Pa),
            Ca(Pa, n);
        }
        var ja = null,
          za = !1,
          Ba = !1;
        function Ha(e) {
          null === ja ? (ja = [e]) : ja.push(e);
        }
        function Ua() {
          if (!Ba && null !== ja) {
            Ba = !0;
            var e = 0,
              t = bt;
            try {
              var n = ja;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (ja = null), (za = !1);
            } catch (t) {
              throw (null !== ja && (ja = ja.slice(e + 1)), We(Ze, Ua), t);
            } finally {
              (bt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Va = [],
          $a = 0,
          Ka = null,
          qa = 0,
          Wa = [],
          Ga = 0,
          Qa = null,
          Ya = 1,
          Xa = "";
        function Ja(e, t) {
          (Va[$a++] = qa), (Va[$a++] = Ka), (Ka = e), (qa = t);
        }
        function Za(e, t, n) {
          (Wa[Ga++] = Ya), (Wa[Ga++] = Xa), (Wa[Ga++] = Qa), (Qa = e);
          var r = Ya;
          e = Xa;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ya = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Xa = l + e);
          } else (Ya = (1 << l) | (n << a) | r), (Xa = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function tl(e) {
          for (; e === Ka; )
            (Ka = Va[--$a]), (Va[$a] = null), (qa = Va[--$a]), (Va[$a] = null);
          for (; e === Qa; )
            (Qa = Wa[--Ga]),
              (Wa[Ga] = null),
              (Xa = Wa[--Ga]),
              (Wa[Ga] = null),
              (Ya = Wa[--Ga]),
              (Wa[Ga] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Ou(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function il(e, t) {
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
                ((n = null !== Qa ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ou(18, null, null, 0)).stateNode = t),
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
              if (!il(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && il(e, t)
                  ? ol(r, n)
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
            for (; t; ) ol(e, t), (t = ua(t.nextSibling));
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
        function hl() {
          (rl = nl = null), (al = !1);
        }
        function pl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = k.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = Sa(null),
          yl = null,
          bl = null,
          kl = null;
        function El() {
          kl = bl = yl = null;
        }
        function wl(e) {
          var t = vl.current;
          xa(vl), (e._currentValue = t);
        }
        function _l(e, t, n) {
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
        function Sl(e, t) {
          (yl = e),
            (kl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (ki = !0), (e.firstContext = null));
        }
        function xl(e) {
          var t = e._currentValue;
          if (kl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Cl = null;
        function Tl(e) {
          null === Cl ? (Cl = [e]) : Cl.push(e);
        }
        function Nl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Tl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Pl(e, r)
          );
        }
        function Pl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Rl = !1;
        function Ol(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Dl(e, t) {
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
        function Ml(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ll(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & Ns))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Pl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Tl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Pl(e, n)
          );
        }
        function Il(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Al(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
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
        function Fl(e, t, n, r) {
          var a = e.updateQueue;
          Rl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === o ? (l = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = u = s = null, i = l; ; ) {
              var f = i.lane,
                h = i.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    m = i;
                  switch (((f = t), (h = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (p = m.payload)) {
                        d = p.call(h, d, f);
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
                          "function" == typeof (p = m.payload)
                            ? p.call(h, d, f)
                            : p)
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      Rl = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (h = {
                  eventTime: h,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (s = d)) : (c = c.next = h),
                  (o |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
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
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (As |= o), (e.lanes = o), (e.memoizedState = d);
          }
        }
        function jl(e, t, n) {
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
        var zl = new r.Component().refs;
        function Bl(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : F({}, t, n)),
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
              l = Ml(r, a);
            (l.payload = t),
              null != n && (l.callback = n),
              null !== (t = Ll(e, l, a)) && (nu(t, e, a, r), Il(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Ml(r, a);
            (l.tag = 1),
              (l.payload = t),
              null != n && (l.callback = n),
              null !== (t = Ll(e, l, a)) && (nu(t, e, a, r), Il(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ml(n, r);
            (a.tag = 2),
              null != t && (a.callback = t),
              null !== (t = Ll(e, a, r)) && (nu(t, e, r, n), Il(t, e, r));
          },
        };
        function Ul(e, t, n, r, a, l, o) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function Vl(e, t, n) {
          var r = !1,
            a = Ta,
            l = t.contextType;
          return (
            "object" == typeof l && null !== l
              ? (l = xl(l))
              : ((a = Da(t) ? Ra : Na.current),
                (l = (r = null != (r = t.contextTypes)) ? Oa(e, a) : Ta)),
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
        function $l(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
        }
        function Kl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = zl), Ol(e);
          var l = t.contextType;
          "object" == typeof l && null !== l
            ? (a.context = xl(l))
            : ((l = Da(t) ? Ra : Na.current), (a.context = Oa(e, l))),
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
              Fl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function ql(e, t, n) {
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
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === zl && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Wl(e, t) {
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
        function Gl(e) {
          return (0, e._init)(e._payload);
        }
        function Ql(e) {
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
            return ((e = Mu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
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
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === _
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" == typeof l &&
                    null !== l &&
                    l.$$typeof === D &&
                    Gl(l) === t.type))
              ? (((r = a(t, n.props)).ref = ql(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = ql(
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
              ? (((t = ju(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case E:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = ql(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = ju(t, e.mode, n)).return = e), t;
                case D:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              Wl(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case E:
                  return n.key === a ? u(e, t, n, r) : null;
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case D:
                  return h(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== a ? null : d(e, t, n, r, null);
              Wl(e, n);
            }
            return null;
          }
          function p(e, t, n, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case E:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case D:
                  return p(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || I(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Wl(t, r);
            }
            return null;
          }
          function m(a, l, i, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = h(a, d, i[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(a, d),
                (l = o(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g);
            }
            if (m === i.length) return n(a, d), al && Ja(a, m), u;
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(a, i[m], s)) &&
                  ((l = o(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return al && Ja(a, m), u;
            }
            for (d = r(a, d); m < i.length; m++)
              null !== (g = p(d, a, m, i[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = o(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, m),
              u
            );
          }
          function g(a, i, s, u) {
            var c = I(s);
            if ("function" != typeof c) throw Error(l(150));
            if (null == (s = c.call(s))) throw Error(l(151));
            for (
              var d = (c = null), m = i, g = (i = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = h(a, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = o(b, i, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v);
            }
            if (y.done) return n(a, m), al && Ja(a, g), c;
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(a, y.value, u)) &&
                  ((i = o(y, i, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return al && Ja(a, g), c;
            }
            for (m = r(a, m); !y.done; g++, y = s.next())
              null !== (y = p(m, a, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (i = o(y, i, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, g),
              c
            );
          }
          return function e(r, l, o, s) {
            if (
              ("object" == typeof o &&
                null !== o &&
                o.type === _ &&
                null === o.key &&
                (o = o.props.children),
              "object" == typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case E:
                  e: {
                    for (var u = o.key, c = l; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" == typeof u &&
                            null !== u &&
                            u.$$typeof === D &&
                            Gl(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = ql(r, c, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === _
                      ? (((l = Iu(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = l))
                      : (((s = Lu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s,
                        )).ref = ql(r, l, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return i(r);
                case w:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = ju(o, r.mode, s)).return = r), (r = l);
                  }
                  return i(r);
                case D:
                  return e(r, l, (c = o._init)(o._payload), s);
              }
              if (te(o)) return m(r, l, o, s);
              if (I(o)) return g(r, l, o, s);
              Wl(r, o);
            }
            return ("string" == typeof o && "" !== o) || "number" == typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Fu(o, r.mode, s)).return = r), (r = l)),
                i(r))
              : n(r, l);
          };
        }
        var Yl = Ql(!0),
          Xl = Ql(!1),
          Jl = {},
          Zl = Sa(Jl),
          eo = Sa(Jl),
          to = Sa(Jl);
        function no(e) {
          if (e === Jl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ca(to, t), Ca(eo, e), Ca(Zl, Jl), (e = t.nodeType))) {
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
          xa(Zl), Ca(Zl, t);
        }
        function ao() {
          xa(Zl), xa(eo), xa(to);
        }
        function lo(e) {
          no(to.current);
          var t = no(Zl.current),
            n = se(t, e.type);
          t !== n && (Ca(eo, e), Ca(Zl, n));
        }
        function oo(e) {
          eo.current === e && (xa(Zl), xa(eo));
        }
        var io = Sa(0);
        function so(e) {
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
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = k.ReactCurrentDispatcher,
          ho = k.ReactCurrentBatchConfig,
          po = 0,
          mo = null,
          go = null,
          vo = null,
          yo = !1,
          bo = !1,
          ko = 0,
          Eo = 0;
        function wo() {
          throw Error(l(321));
        }
        function _o(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function So(e, t, n, r, a, o) {
          if (
            ((po = o),
            (mo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : si),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (ko = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (vo = go = null),
                (t.updateQueue = null),
                (fo.current = ui),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = oi),
            (t = null !== go && null !== go.next),
            (po = 0),
            (vo = go = mo = null),
            (yo = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function xo() {
          var e = 0 !== ko;
          return (ko = 0), e;
        }
        function Co() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e), vo
          );
        }
        function To() {
          if (null === go) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = go.next;
          var t = null === vo ? mo.memoizedState : vo.next;
          if (null !== t) (vo = t), (go = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (go = e).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === vo ? (mo.memoizedState = vo = e) : (vo = vo.next = e);
          }
          return vo;
        }
        function No(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Po(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = go,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var i = a.next;
              (a.next = o.next), (o.next = i);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (i = null),
              u = null,
              c = o;
            do {
              var d = c.lane;
              if ((po & d) === d)
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
                null === u ? ((s = u = f), (i = r)) : (u = u.next = f),
                  (mo.lanes |= d),
                  (As |= d);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (i = r) : (u.next = s),
              ir(r, t.memoizedState) || (ki = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (mo.lanes |= o), (As |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ro(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (i !== a);
            ir(o, t.memoizedState) || (ki = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Oo() {}
        function Do(e, t) {
          var n = mo,
            r = To(),
            a = t(),
            o = !ir(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (ki = !0)),
            (r = r.queue),
            $o(Io.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== vo && 1 & vo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              zo(9, Lo.bind(null, n, r, a, t), void 0, null),
              null === Ps)
            )
              throw Error(l(349));
            0 != (30 & po) || Mo(n, t, a);
          }
          return a;
        }
        function Mo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Lo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ao(t) && Fo(e);
        }
        function Io(e, t, n) {
          return n(function () {
            Ao(t) && Fo(e);
          });
        }
        function Ao(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Fo(e) {
          var t = Pl(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function jo(e) {
          var t = Co();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: No,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, mo, e)),
            [t.memoizedState, e]
          );
        }
        function zo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Bo() {
          return To().memoizedState;
        }
        function Ho(e, t, n, r) {
          var a = Co();
          (mo.flags |= e),
            (a.memoizedState = zo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Uo(e, t, n, r) {
          var a = To();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((l = o.destroy), null !== r && _o(r, o.deps)))
              return void (a.memoizedState = zo(t, n, l, r));
          }
          (mo.flags |= e), (a.memoizedState = zo(1 | t, n, l, r));
        }
        function Vo(e, t) {
          return Ho(8390656, 8, e, t);
        }
        function $o(e, t) {
          return Uo(2048, 8, e, t);
        }
        function Ko(e, t) {
          return Uo(4, 2, e, t);
        }
        function qo(e, t) {
          return Uo(4, 4, e, t);
        }
        function Wo(e, t) {
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
        function Go(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Uo(4, 4, Wo.bind(null, t, e), n)
          );
        }
        function Qo() {}
        function Yo(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _o(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xo(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _o(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Jo(e, t, n) {
          return 0 == (21 & po)
            ? (e.baseState && ((e.baseState = !1), (ki = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (mo.lanes |= n), (As |= n), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ho.transition;
          ho.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ho.transition = r);
          }
        }
        function ei() {
          return To().memoizedState;
        }
        function ti(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n);
          else if (null !== (n = Nl(e, t, n, r))) {
            nu(n, e, r, eu()), li(n, t, r);
          }
        }
        function ni(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ri(e)) ai(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Tl(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (e) {}
            null !== (n = Nl(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), li(n, t, r));
          }
        }
        function ri(e) {
          var t = e.alternate;
          return e === mo || (null !== t && t === mo);
        }
        function ai(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function li(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var oi = {
            readContext: xl,
            useCallback: wo,
            useContext: wo,
            useEffect: wo,
            useImperativeHandle: wo,
            useInsertionEffect: wo,
            useLayoutEffect: wo,
            useMemo: wo,
            useReducer: wo,
            useRef: wo,
            useState: wo,
            useDebugValue: wo,
            useDeferredValue: wo,
            useTransition: wo,
            useMutableSource: wo,
            useSyncExternalStore: wo,
            useId: wo,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: xl,
            useCallback: function (e, t) {
              return (Co().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: xl,
            useEffect: Vo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Ho(4194308, 4, Wo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ho(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ho(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Co();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Co();
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
                (e = e.dispatch = ti.bind(null, mo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Co().memoizedState = e);
            },
            useState: jo,
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return (Co().memoizedState = e);
            },
            useTransition: function () {
              var e = jo(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Co().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mo,
                a = Co();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(l(349));
                0 != (30 & po) || Mo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Vo(Io.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                zo(9, Lo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Co(),
                t = Ps.identifierPrefix;
              if (al) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - ot(Ya) - 1))).toString(32) + n)),
                  0 < (n = ko++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Eo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: xl,
            useCallback: Yo,
            useContext: xl,
            useEffect: $o,
            useImperativeHandle: Go,
            useInsertionEffect: Ko,
            useLayoutEffect: qo,
            useMemo: Xo,
            useReducer: Po,
            useRef: Bo,
            useState: function () {
              return Po(No);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              return Jo(To(), go.memoizedState, e);
            },
            useTransition: function () {
              return [Po(No)[0], To().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: Do,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: xl,
            useCallback: Yo,
            useContext: xl,
            useEffect: $o,
            useImperativeHandle: Go,
            useInsertionEffect: Ko,
            useLayoutEffect: qo,
            useMemo: Xo,
            useReducer: Ro,
            useRef: Bo,
            useState: function () {
              return Ro(No);
            },
            useDebugValue: Qo,
            useDeferredValue: function (e) {
              var t = To();
              return null === go
                ? (t.memoizedState = e)
                : Jo(t, go.memoizedState, e);
            },
            useTransition: function () {
              return [Ro(No)[0], To().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: Do,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
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
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var hi = "function" == typeof WeakMap ? WeakMap : Map;
        function pi(e, t, n) {
          ((n = Ml(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $s || (($s = !0), (Ks = r)), fi(0, t);
            }),
            n
          );
        }
        function mi(e, t, n) {
          (n = Ml(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fi(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" == typeof l.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  "function" != typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new hi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = xu.bind(null, e, t, n)), t.then(e, e));
        }
        function vi(e) {
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
        function yi(e, t, n, r, a) {
          return 0 == (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ml(-1, 1)).tag = 2), Ll(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bi = k.ReactCurrentOwner,
          ki = !1;
        function Ei(e, t, n, r) {
          t.child = null === e ? Xl(t, null, n, r) : Yl(t, e.child, n, r);
        }
        function wi(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            Sl(t, a),
            (r = So(e, t, n, r, l, a)),
            (n = xo()),
            null === e || ki
              ? (al && n && el(t), (t.flags |= 1), Ei(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          );
        }
        function _i(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" != typeof l ||
              Du(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Si(e, t, l, r, a));
          }
          if (((l = e.child), 0 == (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return $i(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Mu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Si(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((ki = !1), (t.pendingProps = r = l), 0 == (e.lanes & a)))
                return (t.lanes = e.lanes), $i(e, t, a);
              0 != (131072 & e.flags) && (ki = !0);
            }
          }
          return Ti(e, t, n, r, a);
        }
        function xi(e, t, n) {
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
                Ca(Ms, Ds),
                (Ds |= n);
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
                  Ca(Ms, Ds),
                  (Ds |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ca(Ms, Ds),
                (Ds |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Ms, Ds),
              (Ds |= r);
          return Ei(e, t, a, n), t.child;
        }
        function Ci(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ti(e, t, n, r, a) {
          var l = Da(n) ? Ra : Na.current;
          return (
            (l = Oa(t, l)),
            Sl(t, a),
            (n = So(e, t, n, r, l, a)),
            (r = xo()),
            null === e || ki
              ? (al && r && el(t), (t.flags |= 1), Ei(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          );
        }
        function Ni(e, t, n, r, a) {
          if (Da(n)) {
            var l = !0;
            Aa(t);
          } else l = !1;
          if ((Sl(t, a), null === t.stateNode))
            Vi(e, t), Vl(t, n, r), Kl(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps;
            o.props = i;
            var s = o.context,
              u = n.contextType;
            "object" == typeof u && null !== u
              ? (u = xl(u))
              : (u = Oa(t, (u = Da(n) ? Ra : Na.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" == typeof c ||
                "function" == typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((i !== r || s !== u) && $l(t, o, r, u)),
              (Rl = !1);
            var f = t.memoizedState;
            (o.state = f),
              Fl(t, r, o, a),
              (s = t.memoizedState),
              i !== r || f !== s || Pa.current || Rl
                ? ("function" == typeof c &&
                    (Bl(t, n, c, r), (s = t.memoizedState)),
                  (i = Rl || Ul(t, n, i, r, f, s, u))
                    ? (d ||
                        ("function" != typeof o.UNSAFE_componentWillMount &&
                          "function" != typeof o.componentWillMount) ||
                        ("function" == typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" == typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = i))
                : ("function" == typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Dl(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : gl(t.type, i)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              "object" == typeof (s = n.contextType) && null !== s
                ? (s = xl(s))
                : (s = Oa(t, (s = Da(n) ? Ra : Na.current)));
            var h = n.getDerivedStateFromProps;
            (c =
              "function" == typeof h ||
              "function" == typeof o.getSnapshotBeforeUpdate) ||
              ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
                "function" != typeof o.componentWillReceiveProps) ||
              ((i !== d || f !== s) && $l(t, o, r, s)),
              (Rl = !1),
              (f = t.memoizedState),
              (o.state = f),
              Fl(t, r, o, a);
            var p = t.memoizedState;
            i !== d || f !== p || Pa.current || Rl
              ? ("function" == typeof h &&
                  (Bl(t, n, h, r), (p = t.memoizedState)),
                (u = Rl || Ul(t, n, u, r, f, p, s) || !1)
                  ? (c ||
                      ("function" != typeof o.UNSAFE_componentWillUpdate &&
                        "function" != typeof o.componentWillUpdate) ||
                      ("function" == typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, s),
                      "function" == typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, s)),
                    "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = s),
                (r = u))
              : ("function" != typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pi(e, t, n, r, l, a);
        }
        function Pi(e, t, n, r, a, l) {
          Ci(e, t);
          var o = 0 != (128 & t.flags);
          if (!r && !o) return a && Fa(t, n, !1), $i(e, t, l);
          (r = t.stateNode), (bi.current = t);
          var i =
            o && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Yl(t, e.child, null, l)),
                (t.child = Yl(t, null, i, l)))
              : Ei(e, t, i, l),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function Ri(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Oi(e, t, n, r, a) {
          return hl(), pl(a), (t.flags |= 256), Ei(e, t, n, r), t.child;
        }
        var Di,
          Mi,
          Li,
          Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ai(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fi(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            s = 0 != (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ca(io, 1 & o),
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
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 == (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Au(s, a, 0, null)),
                      (e = Iu(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ai(n)),
                      (t.memoizedState = Ii),
                      e)
                    : ji(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), zi(e, t, i, (r = di(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Au(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null,
                    )),
                    ((o = Iu(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 != (1 & t.mode) && Yl(t, e.child, null, i),
                    (t.child.memoizedState = Ai(i)),
                    (t.memoizedState = Ii),
                    o);
              if (0 == (1 & t.mode)) return zi(e, t, i, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), zi(e, t, i, (r = di((o = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 != (i & e.childLanes)), ki || s)) {
                if (null !== (r = Ps)) {
                  switch (i & -i) {
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
                  0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Pl(e, a), nu(r, e, a, -1));
                }
                return mu(), zi(e, t, i, (r = di(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Wa[Ga++] = Ya),
                    (Wa[Ga++] = Xa),
                    (Wa[Ga++] = Qa),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Qa = t)),
                  ((t = ji(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (i) {
            (i = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 == (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Mu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = Mu(r, i))
                : ((i = Iu(i, s, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Ai(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ii),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Mu(i, { mode: "visible", children: a.children })),
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
        function ji(e, t) {
          return (
            ((t = Au(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function zi(e, t, n, r) {
          return (
            null !== r && pl(r),
            Yl(t, e.child, null, n),
            ((e = ji(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bi(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _l(e.return, t, n);
        }
        function Hi(e, t, n, r, a) {
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
        function Ui(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((Ei(e, t, r.children, n), 0 != (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bi(e, n, t);
                else if (19 === e.tag) Bi(e, n, t);
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
          if ((Ca(io, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Hi(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === so(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Hi(t, !0, n, null, l);
                break;
              case "together":
                Hi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vi(e, t) {
          0 == (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $i(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (As |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Mu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Mu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ki(e, t) {
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
        function qi(e) {
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
        function Wi(e, t, n) {
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
              return qi(t), null;
            case 1:
            case 17:
              return Da(t.type) && Ma(), qi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                xa(Pa),
                xa(Na),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (ou(ll), (ll = null)))),
                qi(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Mi(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return qi(t), null;
                }
                if (((e = no(Zl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[ha] = o), (e = 0 != (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      zr("cancel", r), zr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      zr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ir.length; a++) zr(Ir[a], r);
                      break;
                    case "source":
                      zr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      zr("error", r), zr("load", r);
                      break;
                    case "details":
                      zr("toggle", r);
                      break;
                    case "input":
                      Y(r, o), zr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        zr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), zr("invalid", r);
                  }
                  for (var s in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" == typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" == typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : i.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          zr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
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
                    (e[ha] = r),
                    Di(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        zr("cancel", e), zr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        zr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ir.length; a++) zr(Ir[a], e);
                        a = r;
                        break;
                      case "source":
                        zr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        zr("error", e), zr("load", e), (a = r);
                        break;
                      case "details":
                        zr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = Q(e, r)), zr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          zr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), zr("invalid", e);
                    }
                    for (o in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" == typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" == typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && zr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + $(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
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
              return qi(t), null;
            case 6:
              if (e && null != t.stateNode) Li(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no(Zl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 != (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return qi(t), null;
            case 13:
              if (
                (xa(io),
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
                  fl(), hl(), (t.flags |= 98560), (o = !1);
                else if (((o = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[fa] = t;
                  } else
                    hl(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qi(t), (o = !1);
                } else null !== ll && (ou(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 != (1 & t.mode) &&
                      (null === e || 0 != (1 & io.current)
                        ? 0 === Ls && (Ls = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qi(t),
                  null);
            case 4:
              return (
                ao(), null === e && Ur(t.stateNode.containerInfo), qi(t), null
              );
            case 10:
              return wl(t.type._context), qi(t), null;
            case 19:
              if ((xa(io), null === (o = t.memoizedState))) return qi(t), null;
              if (((r = 0 != (128 & t.flags)), null === (s = o.rendering)))
                if (r) Ki(o, !1);
                else {
                  if (0 !== Ls || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            Ki(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(io, (1 & io.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Xe() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ki(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ki(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return qi(t), null;
                  } else
                    2 * Xe() - o.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ki(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = io.current),
                  Ca(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qi(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                  ? 0 != (1073741824 & Ds) &&
                    (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Gi(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Da(t.type) && Ma(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                xa(Pa),
                xa(Na),
                co(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (xa(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                hl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xa(io), null;
            case 4:
              return ao(), null;
            case 10:
              return wl(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Di = function (e, t) {
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
          (Mi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Zl.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (o = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
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
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
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
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" != typeof u && "number" != typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && zr("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Li = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Qi = !1,
          Yi = !1,
          Xi = "function" == typeof WeakSet ? WeakSet : Set,
          Ji = null;
        function Zi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                Su(e, t, n);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (n) {
            Su(e, t, n);
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
              delete t[ha],
              delete t[ma],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function is(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
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
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (lt && "function" == typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Yi || Zi(n, t);
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
                !Yi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 != (2 & l) || 0 != (4 & l)) &&
                      es(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Yi &&
                (Zi(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  Su(n, t, e);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yi = (r = Yi) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Yi = r))
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
            null === n && (n = e.stateNode = new Xi()),
              t.forEach(function (t) {
                var r = Nu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  i = t,
                  s = i;
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
                hs(o, i, a), (cs = null), (ds = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (e) {
                Su(a, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (t) {
                  Su(e, e.return, t);
                }
                try {
                  ns(5, e, e.return);
                } catch (t) {
                  Su(e, e.return, t);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & r && null !== n && Zi(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & r && null !== n && Zi(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (t) {
                  Su(e, e.return, t);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      X(a, o),
                      be(s, i);
                    var c = be(s, o);
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1];
                      "style" === d
                        ? ge(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var h = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? ne(a, !!o.multiple, p, !1)
                          : h !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[ha] = o;
                  } catch (t) {
                    Su(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (t) {
                  Su(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (t) {
                  Su(e, e.return, t);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hs = Xe())),
                4 & r && ps(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yi = (c = Yi) || d), ms(t, e), (Yi = c))
                  : ms(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                )
                  for (Ji = e, d = e.child; null !== d; ) {
                    for (f = Ji = d; null !== Ji; ) {
                      switch (((p = (h = Ji).child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, h, h.return);
                          break;
                        case 1:
                          Zi(h, h.return);
                          var m = h.stateNode;
                          if ("function" == typeof m.componentWillUnmount) {
                            (r = h), (n = h.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (e) {
                              Su(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          Zi(h, h.return);
                          break;
                        case 22:
                          if (null !== h.memoizedState) {
                            Es(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = h), (Ji = p)) : Es(f);
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
                            ? "function" == typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = f.stateNode),
                              (i =
                                null != (u = f.memoizedProps.style) &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", i)));
                      } catch (t) {
                        Su(e, e.return, t);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (t) {
                        Su(e, e.return, t);
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
              ms(t, e), vs(e), 4 & r && ps(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
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
                    us(e, is(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(e, is(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (t) {
              Su(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Ji = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 != (1 & e.mode); null !== Ji; ) {
            var a = Ji,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Qi;
              if (!o) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Yi;
                i = Qi;
                var u = Yi;
                if (((Qi = o), (Yi = s) && !u))
                  for (Ji = a; null !== Ji; )
                    (s = (o = Ji).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ws(a)
                        : null !== s
                        ? ((s.return = o), (Ji = s))
                        : ws(a);
                for (; null !== l; ) (Ji = l), bs(l, t, n), (l = l.sibling);
                (Ji = a), (Qi = i), (Yi = u);
              }
              ks(e);
            } else
              0 != (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Ji = l))
                : ks(e);
          }
        }
        function ks(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yi || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && jl(t, o, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        jl(t, i, n);
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
                Yi || (512 & t.flags && as(t));
              } catch (e) {
                Su(t, t.return, e);
              }
            }
            if (t === e) {
              Ji = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function Es(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            if (t === e) {
              Ji = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ji = n);
              break;
            }
            Ji = t.return;
          }
        }
        function ws(e) {
          for (; null !== Ji; ) {
            var t = Ji;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (e) {
                    Su(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      Su(t, a, e);
                    }
                  }
                  var l = t.return;
                  try {
                    as(t);
                  } catch (e) {
                    Su(t, l, e);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    as(t);
                  } catch (e) {
                    Su(t, o, e);
                  }
              }
            } catch (e) {
              Su(t, t.return, e);
            }
            if (t === e) {
              Ji = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Ji = i);
              break;
            }
            Ji = t.return;
          }
        }
        var _s,
          Ss = Math.ceil,
          xs = k.ReactCurrentDispatcher,
          Cs = k.ReactCurrentOwner,
          Ts = k.ReactCurrentBatchConfig,
          Ns = 0,
          Ps = null,
          Rs = null,
          Os = 0,
          Ds = 0,
          Ms = Sa(0),
          Ls = 0,
          Is = null,
          As = 0,
          Fs = 0,
          js = 0,
          zs = null,
          Bs = null,
          Hs = 0,
          Us = 1 / 0,
          Vs = null,
          $s = !1,
          Ks = null,
          qs = null,
          Ws = !1,
          Gs = null,
          Qs = 0,
          Ys = 0,
          Xs = null,
          Js = -1,
          Zs = 0;
        function eu() {
          return 0 != (6 & Ns) ? Xe() : -1 !== Js ? Js : (Js = Xe());
        }
        function tu(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & Ns) && 0 !== Os
            ? Os & -Os
            : null !== ml.transition
            ? (0 === Zs && (Zs = mt()), Zs)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ys) throw ((Ys = 0), (Xs = null), Error(l(185)));
          vt(e, n, r),
            (0 != (2 & Ns) && e === Ps) ||
              (e === Ps && (0 == (2 & Ns) && (Fs |= n), 4 === Ls && iu(e, Os)),
              ru(e, r),
              1 === n &&
                0 === Ns &&
                0 == (1 & t.mode) &&
                ((Us = Xe() + 500), za && Ua()));
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
              var o = 31 - ot(l),
                i = 1 << o,
                s = a[o];
              -1 === s
                ? (0 != (i & n) && 0 == (i & r)) || (a[o] = ht(i, t))
                : s <= t && (e.expiredLanes |= i),
                (l &= ~i);
            }
          })(e, t);
          var r = ft(e, e === Ps ? Os : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (za = !0), Ha(e);
                  })(su.bind(null, e))
                : Ha(su.bind(null, e)),
                oa(function () {
                  0 == (6 & Ns) && Ua();
                }),
                (n = null);
            else {
              switch (kt(r)) {
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
              n = Pu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (Zs = 0), 0 != (6 & Ns))) throw Error(l(327));
          var n = e.callbackNode;
          if (wu() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ps ? Os : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var a = Ns;
            Ns |= 2;
            var o = pu();
            for (
              (Ps === e && Os === t) ||
              ((Vs = null), (Us = Xe() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (t) {
                hu(e, t);
              }
            El(),
              (xs.current = o),
              (Ns = a),
              null !== Rs ? (t = 0) : ((Ps = null), (Os = 0), (t = Ls));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = pt(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = Is), fu(e, 0), iu(e, r), ru(e, Xe()), n);
            if (6 === t) iu(e, r);
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
                              if (!ir(l(), a)) return !1;
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
                  (2 === (t = gu(e, r)) &&
                    0 !== (o = pt(e)) &&
                    ((r = o), (t = lu(e, o))),
                  1 === t))
              )
                throw ((n = Is), fu(e, 0), iu(e, r), ru(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  Eu(e, Bs, Vs);
                  break;
                case 3:
                  if (
                    (iu(e, r),
                    (130023424 & r) === r && 10 < (t = Hs + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(Eu.bind(null, e, Bs, Vs), t);
                    break;
                  }
                  Eu(e, Bs, Vs);
                  break;
                case 4:
                  if ((iu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r);
                    (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
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
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(Eu.bind(null, e, Bs, Vs), r);
                    break;
                  }
                  Eu(e, Bs, Vs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = zs;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Bs), (Bs = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function iu(e, t) {
          for (
            t &= ~js,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 != (6 & Ns)) throw Error(l(327));
          wu();
          var t = ft(e, 0);
          if (0 == (1 & t)) return ru(e, Xe()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = pt(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = Is), fu(e, 0), iu(e, t), ru(e, Xe()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Eu(e, Bs, Vs),
            ru(e, Xe()),
            null
          );
        }
        function uu(e, t) {
          var n = Ns;
          Ns |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ns = n) && ((Us = Xe() + 500), za && Ua());
          }
        }
        function cu(e) {
          null !== Gs && 0 === Gs.tag && 0 == (6 & Ns) && wu();
          var t = Ns;
          Ns |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 == (6 & (Ns = t)) && Ua();
          }
        }
        function du() {
          (Ds = Ms.current), xa(Ms);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Rs))
            for (n = Rs.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && Ma();
                  break;
                case 3:
                  ao(), xa(Pa), xa(Na), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  xa(io);
                  break;
                case 10:
                  wl(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Rs = e = Mu(e.current, null)),
            (Os = Ds = t),
            (Ls = 0),
            (Is = null),
            (js = Fs = As = 0),
            (Bs = zs = null),
            null !== Cl)
          ) {
            for (t = 0; t < Cl.length; t++)
              if (null !== (r = (n = Cl[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Cl = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Rs;
            try {
              if ((El(), (fo.current = oi), yo)) {
                for (var r = mo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((po = 0),
                (vo = go = mo = null),
                (bo = !1),
                (ko = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Ls = 1), (Is = t), (Rs = null);
                break;
              }
              e: {
                var o = e,
                  i = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Os),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var h = d.alternate;
                    h
                      ? ((d.updateQueue = h.updateQueue),
                        (d.memoizedState = h.memoizedState),
                        (d.lanes = h.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = vi(i);
                  if (null !== p) {
                    (p.flags &= -257),
                      yi(p, i, s, 0, t),
                      1 & p.mode && gi(o, c, t),
                      (u = c);
                    var m = (t = p).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    gi(o, c, t), mu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var v = vi(i);
                  if (null !== v) {
                    0 == (65536 & v.flags) && (v.flags |= 256),
                      yi(v, i, s, 0, t),
                      pl(ci(u, s));
                    break e;
                  }
                }
                (o = u = ci(u, s)),
                  4 !== Ls && (Ls = 2),
                  null === zs ? (zs = [o]) : zs.push(o),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Al(o, pi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 == (128 & o.flags) &&
                        ("function" == typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" == typeof b.componentDidCatch &&
                            (null === qs || !qs.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Al(o, mi(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              ku(n);
            } catch (e) {
              (t = e), Rs === n && null !== n && (Rs = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = xs.current;
          return (xs.current = oi), null === e ? oi : e;
        }
        function mu() {
          (0 !== Ls && 3 !== Ls && 2 !== Ls) || (Ls = 4),
            null === Ps ||
              (0 == (268435455 & As) && 0 == (268435455 & Fs)) ||
              iu(Ps, Os);
        }
        function gu(e, t) {
          var n = Ns;
          Ns |= 2;
          var r = pu();
          for ((Ps === e && Os === t) || ((Vs = null), fu(e, t)); ; )
            try {
              vu();
              break;
            } catch (t) {
              hu(e, t);
            }
          if ((El(), (Ns = n), (xs.current = r), null !== Rs))
            throw Error(l(261));
          return (Ps = null), (Os = 0), Ls;
        }
        function vu() {
          for (; null !== Rs; ) bu(Rs);
        }
        function yu() {
          for (; null !== Rs && !Qe(); ) bu(Rs);
        }
        function bu(e) {
          var t = _s(e.alternate, e, Ds);
          (e.memoizedProps = e.pendingProps),
            null === t ? ku(e) : (Rs = t),
            (Cs.current = null);
        }
        function ku(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (32768 & t.flags))) {
              if (null !== (n = Wi(n, t, Ds))) return void (Rs = n);
            } else {
              if (null !== (n = Gi(n, t)))
                return (n.flags &= 32767), void (Rs = n);
              if (null === e) return (Ls = 6), void (Rs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Rs = t);
            Rs = t = e;
          } while (null !== t);
          0 === Ls && (Ls = 5);
        }
        function Eu(e, t, n) {
          var r = bt,
            a = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  wu();
                } while (null !== Gs);
                if (0 != (6 & Ns)) throw Error(l(327));
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
                var o = n.lanes | n.childLanes;
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
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === Ps && ((Rs = Ps = null), (Os = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                    Ws ||
                    ((Ws = !0),
                    Pu(tt, function () {
                      return wu(), null;
                    })),
                  (o = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ts.transition), (Ts.transition = null);
                  var i = bt;
                  bt = 1;
                  var s = Ns;
                  (Ns |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ea = $t), hr((e = fr())))) {
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
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                h = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = i + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (h = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (h === n && ++c === a && (s = i),
                                    h === o && ++d === r && (u = i),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  h = (f = h).parentNode;
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
                          $t = !1,
                          Ji = t;
                        null !== Ji;

                      )
                        if (
                          ((e = (t = Ji).child),
                          0 != (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ji = e);
                        else
                          for (; null !== Ji; ) {
                            t = Ji;
                            try {
                              var m = t.alternate;
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
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var k = t.stateNode.containerInfo;
                                    1 === k.nodeType
                                      ? (k.textContent = "")
                                      : 9 === k.nodeType &&
                                        k.documentElement &&
                                        k.removeChild(k.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (e) {
                              Su(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ji = e);
                              break;
                            }
                            Ji = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    gs(n, e),
                    pr(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ye(),
                    (Ns = s),
                    (bt = i),
                    (Ts.transition = o);
                } else e.current = n;
                if (
                  (Ws && ((Ws = !1), (Gs = e), (Qs = a)),
                  0 === (o = e.pendingLanes) && (qs = null),
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
                if ($s) throw (($s = !1), (e = Ks), (Ks = null), e);
                0 != (1 & Qs) && 0 !== e.tag && wu(),
                  0 != (1 & (o = e.pendingLanes))
                    ? e === Xs
                      ? Ys++
                      : ((Ys = 0), (Xs = e))
                    : (Ys = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (Ts.transition = a), (bt = r);
          }
          return null;
        }
        function wu() {
          if (null !== Gs) {
            var e = kt(Qs),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Qs = 0), 0 != (6 & Ns)))
                  throw Error(l(331));
                var a = Ns;
                for (Ns |= 4, Ji = e.current; null !== Ji; ) {
                  var o = Ji,
                    i = o.child;
                  if (0 != (16 & Ji.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Ji = c; null !== Ji; ) {
                          var d = Ji;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, o);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ji = f);
                          else
                            for (; null !== Ji; ) {
                              var h = (d = Ji).sibling,
                                p = d.return;
                              if ((ls(d), d === c)) {
                                Ji = null;
                                break;
                              }
                              if (null !== h) {
                                (h.return = p), (Ji = h);
                                break;
                              }
                              Ji = p;
                            }
                        }
                      }
                      var m = o.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Ji = o;
                    }
                  }
                  if (0 != (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Ji = i);
                  else
                    e: for (; null !== Ji; ) {
                      if (0 != (2048 & (o = Ji).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Ji = y);
                        break e;
                      }
                      Ji = o.return;
                    }
                }
                var b = e.current;
                for (Ji = b; null !== Ji; ) {
                  var k = (i = Ji).child;
                  if (0 != (2064 & i.subtreeFlags) && null !== k)
                    (k.return = i), (Ji = k);
                  else
                    e: for (i = b; null !== Ji; ) {
                      if (0 != (2048 & (s = Ji).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (e) {
                          Su(s, s.return, e);
                        }
                      if (s === i) {
                        Ji = null;
                        break e;
                      }
                      var E = s.sibling;
                      if (null !== E) {
                        (E.return = s.return), (Ji = E);
                        break e;
                      }
                      Ji = s.return;
                    }
                }
                if (
                  ((Ns = a),
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
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function _u(e, t, n) {
          (e = Ll(e, (t = pi(0, (t = ci(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function Su(e, t, n) {
          if (3 === e.tag) _u(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _u(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = Ll(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function xu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Os & n) === n &&
              (4 === Ls ||
              (3 === Ls && (130023424 & Os) === Os && 500 > Xe() - Hs)
                ? fu(e, 0)
                : (js |= n)),
            ru(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Pl(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Nu(e, t) {
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
          null !== r && r.delete(t), Cu(e, n);
        }
        function Pu(e, t) {
          return We(e, t);
        }
        function Ru(e, t, n, r) {
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
        function Ou(e, t, n, r) {
          return new Ru(e, t, n, r);
        }
        function Du(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType =
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
        function Lu(e, t, n, r, a, o) {
          var i = 2;
          if (((r = e), "function" == typeof e)) Du(e) && (i = 1);
          else if ("string" == typeof e) i = 5;
          else
            e: switch (e) {
              case _:
                return Iu(n.children, a, o, t);
              case S:
                (i = 8), (a |= 8);
                break;
              case x:
                return (
                  ((e = Ou(12, n, t, 2 | a)).elementType = x), (e.lanes = o), e
                );
              case P:
                return (
                  ((e = Ou(13, n, t, a)).elementType = P), (e.lanes = o), e
                );
              case R:
                return (
                  ((e = Ou(19, n, t, a)).elementType = R), (e.lanes = o), e
                );
              case M:
                return Au(n, a, o, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case T:
                      i = 9;
                      break e;
                    case N:
                      i = 11;
                      break e;
                    case O:
                      i = 14;
                      break e;
                    case D:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ou(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = Ou(7, e, r, t)).lanes = n), e;
        }
        function Au(e, t, n, r) {
          return (
            ((e = Ou(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Ou(6, e, null, t)).lanes = n), e;
        }
        function ju(e, t, n) {
          return (
            ((t = Ou(
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
        function zu(e, t, n, r, a) {
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
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, a, l, o, i, s) {
          return (
            (e = new zu(e, t, n, i, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ou(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ol(l),
            e
          );
        }
        function Hu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: w,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Uu(e) {
          if (!e) return Ta;
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
                  if (Da(t.type)) {
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
            if (Da(n)) return Ia(e, n, t);
          }
          return t;
        }
        function Vu(e, t, n, r, a, l, o, i, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, l, 0, i, s)).context = Uu(null)),
            (n = e.current),
            ((l = Ml((r = eu()), (a = tu(n)))).callback = null != t ? t : null),
            Ll(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ru(e, r),
            e
          );
        }
        function $u(e, t, n, r) {
          var a = t.current,
            l = eu(),
            o = tu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ml(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ll(a, t, o)) && (nu(e, a, o, l), Il(e, a, o)),
            o
          );
        }
        function Ku(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Wu(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        _s = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) ki = !0;
            else {
              if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                  (ki = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ri(t), hl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        Da(t.type) && Aa(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 != (n & t.child.childLanes)
                            ? Fi(e, t, n)
                            : (Ca(io, 1 & io.current),
                              null !== (e = $i(e, t, n)) ? e.sibling : null);
                        Ca(io, 1 & io.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
                        ) {
                          if (r) return Ui(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(io, io.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xi(e, t, n);
                    }
                    return $i(e, t, n);
                  })(e, t, n)
                );
              ki = 0 != (131072 & e.flags);
            }
          else (ki = !1), al && 0 != (1048576 & t.flags) && Za(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vi(e, t), (e = t.pendingProps);
              var a = Oa(t, Na.current);
              Sl(t, n), (a = So(null, t, r, e, a, n));
              var o = xo();
              return (
                (t.flags |= 1),
                "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Da(r) ? ((o = !0), Aa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ol(t),
                    (a.updater = Hl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Kl(t, r, e, n),
                    (t = Pi(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    Ei(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Du(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ti(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ni(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wi(null, t, r, e, n);
                    break e;
                  case 14:
                    t = _i(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ti(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ni(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((Ri(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Dl(e, t),
                  Fl(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Oi(e, t, r, n, (a = ci(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Oi(e, t, r, n, (a = ci(Error(l(424)), t)));
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
                  if ((hl(), r === a)) {
                    t = $i(e, t, n);
                    break e;
                  }
                  Ei(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ci(e, t),
                Ei(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Fi(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Yl(t, null, r, n)) : Ei(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wi(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return Ei(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ei(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Ca(vl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !Pa.current) {
                      t = $i(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        i = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ml(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              _l(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341));
                        (i.lanes |= n),
                          null !== (s = i.alternate) && (s.lanes |= n),
                          _l(i, n, t),
                          (i = o.sibling);
                      } else i = o.child;
                      if (null !== i) i.return = o;
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (o = i.sibling)) {
                            (o.return = i.return), (i = o);
                            break;
                          }
                          i = i.return;
                        }
                      o = i;
                    }
                Ei(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Sl(t, n),
                (r = r((a = xl(a)))),
                (t.flags |= 1),
                Ei(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                _i(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return Si(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                Vi(e, t),
                (t.tag = 1),
                Da(r) ? ((e = !0), Aa(t)) : (e = !1),
                Sl(t, n),
                Vl(t, r, a),
                Kl(t, r, a, n),
                Pi(null, t, r, !0, e, n)
              );
            case 19:
              return Ui(e, t, n);
            case 22:
              return xi(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Gu =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
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
            var o = l;
            if ("function" == typeof a) {
              var i = a;
              a = function () {
                var e = Ku(o);
                i.call(e);
              };
            }
            $u(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" == typeof r) {
                  var l = r;
                  r = function () {
                    var e = Ku(o);
                    l.call(e);
                  };
                }
                var o = Vu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[pa] = o.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" == typeof r) {
                var i = r;
                r = function () {
                  var e = Ku(s);
                  i.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[pa] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  $u(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Ku(o);
        }
        (Yu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            $u(e, t, null, null);
          }),
          (Yu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  $u(null, e, null, null);
                }),
                  (t[pa] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (Et = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Xe()),
                    0 == (6 & Ns) && ((Us = Xe() + 500), Ua()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Pl(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Wu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Pl(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Wu(e, 134217728);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Pl(e, t);
              if (null !== n) nu(n, e, t, eu());
              Wu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (xt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (we = function (e, t, n) {
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
                      var a = Ea(r);
                      if (!a) throw Error(l(90));
                      W(r), J(r, a);
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
          (Ne = uu),
          (Pe = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, ka, Ea, Ce, Te, uu],
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
            currentDispatcherRef: k.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ke(e)) ? null : e.stateNode;
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
              a = Gu;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[pa] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
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
            return (e = null === (e = Ke(t)) ? null : e.stateNode);
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
              o = "",
              i = Gu;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
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
      745: (e, t, n) => {
        "use strict";
        var r = n(935);
        r.createRoot, (t.a = r.hydrateRoot);
      },
      935: (e, t, n) => {
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
      680: (e, t, n) => {
        "use strict";
        var r, a;
        (r = n(675)),
          (a = n(798)),
          (t.version = r.version),
          (t.renderToString = r.renderToString),
          (t.renderToStaticMarkup = r.renderToStaticMarkup),
          (t.renderToNodeStream = r.renderToNodeStream),
          (t.renderToStaticNodeStream = r.renderToStaticNodeStream),
          (t.renderToPipeableStream = a.renderToPipeableStream);
      },
      655: (e, t, n) => {
        "use strict";
        n.r(t),
          n.d(t, {
            AbortedDeferredError: () => l.AbortedDeferredError,
            Await: () => a.KP,
            BrowserRouter: () => k,
            Form: () => x,
            HashRouter: () => E,
            Link: () => _,
            MemoryRouter: () => a.VA,
            NavLink: () => S,
            Navigate: () => a.Fg,
            NavigationType: () => l.Action,
            Outlet: () => a.j3,
            Route: () => a.AW,
            Router: () => a.F0,
            RouterProvider: () => a.pG,
            Routes: () => a.Z5,
            ScrollRestoration: () => T,
            UNSAFE_DataRouterContext: () => a.w3,
            UNSAFE_DataRouterStateContext: () => a.FR,
            UNSAFE_LocationContext: () => a.gd,
            UNSAFE_NavigationContext: () => a.Us,
            UNSAFE_RouteContext: () => a.pW,
            UNSAFE_enhanceManualRouteObjects: () => a.DG,
            UNSAFE_useScrollRestoration: () => U,
            createBrowserRouter: () => g,
            createHashRouter: () => v,
            createMemoryRouter: () => a.bi,
            createPath: () => l.createPath,
            createRoutesFromChildren: () => a.is,
            createRoutesFromElements: () => a.i7,
            createSearchParams: () => d,
            defer: () => l.defer,
            generatePath: () => l.generatePath,
            isRouteErrorResponse: () => l.isRouteErrorResponse,
            json: () => l.json,
            matchPath: () => l.matchPath,
            matchRoutes: () => l.matchRoutes,
            parsePath: () => l.parsePath,
            redirect: () => l.redirect,
            renderMatches: () => a.Oe,
            resolvePath: () => l.resolvePath,
            unstable_HistoryRouter: () => w,
            unstable_useBlocker: () => a.aQ,
            unstable_usePrompt: () => $,
            useActionData: () => a.nA,
            useAsyncError: () => a.iG,
            useAsyncValue: () => a.qv,
            useBeforeUnload: () => V,
            useFetcher: () => j,
            useFetchers: () => z,
            useFormAction: () => A,
            useHref: () => a.oQ,
            useInRouterContext: () => a.GV,
            useLinkClickHandler: () => D,
            useLoaderData: () => a.f_,
            useLocation: () => a.TH,
            useMatch: () => a.bS,
            useMatches: () => a.SN,
            useNavigate: () => a.s0,
            useNavigation: () => a.HJ,
            useNavigationType: () => a.ur,
            useOutlet: () => a.pC,
            useOutletContext: () => a.bx,
            useParams: () => a.UO,
            useResolvedPath: () => a.WU,
            useRevalidator: () => a.xW,
            useRouteError: () => a.lk,
            useRouteLoaderData: () => a.V4,
            useRoutes: () => a.V$,
            useSearchParams: () => M,
            useSubmit: () => L,
          });
        var r = n(294),
          a = n(250),
          l = n(599);
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
        function o() {
          return (
            (o = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            o.apply(this, arguments)
          );
        }
        function i(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        }
        const s = "get",
          u = "application/x-www-form-urlencoded";
        function c(e) {
          return null != e && "string" == typeof e.tagName;
        }
        function d(e) {
          return (
            void 0 === e && (e = ""),
            new URLSearchParams(
              "string" == typeof e ||
              Array.isArray(e) ||
              e instanceof URLSearchParams
                ? e
                : Object.keys(e).reduce((t, n) => {
                    let r = e[n];
                    return t.concat(
                      Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]],
                    );
                  }, []),
            )
          );
        }
        function f(e, t, n) {
          let r, a, l, o;
          if (c((i = e)) && "form" === i.tagName.toLowerCase()) {
            let i = n.submissionTrigger;
            (r = n.method || e.getAttribute("method") || s),
              (a = n.action || e.getAttribute("action") || t),
              (l = n.encType || e.getAttribute("enctype") || u),
              (o = new FormData(e)),
              i && i.name && o.append(i.name, i.value);
          } else if (
            (function (e) {
              return c(e) && "button" === e.tagName.toLowerCase();
            })(e) ||
            ((function (e) {
              return c(e) && "input" === e.tagName.toLowerCase();
            })(e) &&
              ("submit" === e.type || "image" === e.type))
          ) {
            let i = e.form;
            if (null == i)
              throw new Error(
                'Cannot submit a <button> or <input type="submit"> without a <form>',
              );
            (r =
              n.method ||
              e.getAttribute("formmethod") ||
              i.getAttribute("method") ||
              s),
              (a =
                n.action ||
                e.getAttribute("formaction") ||
                i.getAttribute("action") ||
                t),
              (l =
                n.encType ||
                e.getAttribute("formenctype") ||
                i.getAttribute("enctype") ||
                u),
              (o = new FormData(i)),
              e.name && o.append(e.name, e.value);
          } else {
            if (c(e))
              throw new Error(
                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
              );
            if (
              ((r = n.method || s),
              (a = n.action || t),
              (l = n.encType || u),
              e instanceof FormData)
            )
              o = e;
            else if (((o = new FormData()), e instanceof URLSearchParams))
              for (let [t, n] of e) o.append(t, n);
            else if (null != e) for (let t of Object.keys(e)) o.append(t, e[t]);
          }
          var i;
          let { protocol: d, host: f } = window.location;
          return {
            url: new URL(a, d + "//" + f),
            method: r.toLowerCase(),
            encType: l,
            formData: o,
          };
        }
        const h = [
            "onClick",
            "relative",
            "reloadDocument",
            "replace",
            "state",
            "target",
            "to",
            "preventScrollReset",
          ],
          p = [
            "aria-current",
            "caseSensitive",
            "className",
            "end",
            "style",
            "to",
            "children",
          ],
          m = [
            "reloadDocument",
            "replace",
            "method",
            "action",
            "onSubmit",
            "fetcherKey",
            "routeId",
            "relative",
            "preventScrollReset",
          ];
        function g(e, t) {
          return (0, l.createRouter)({
            basename: null == t ? void 0 : t.basename,
            history: (0, l.createBrowserHistory)({
              window: null == t ? void 0 : t.window,
            }),
            hydrationData: (null == t ? void 0 : t.hydrationData) || y(),
            routes: (0, a.DG)(e),
          }).initialize();
        }
        function v(e, t) {
          return (0, l.createRouter)({
            basename: null == t ? void 0 : t.basename,
            history: (0, l.createHashHistory)({
              window: null == t ? void 0 : t.window,
            }),
            hydrationData: (null == t ? void 0 : t.hydrationData) || y(),
            routes: (0, a.DG)(e),
          }).initialize();
        }
        function y() {
          var e;
          let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
          return t && t.errors && (t = o({}, t, { errors: b(t.errors) })), t;
        }
        function b(e) {
          if (!e) return null;
          let t = Object.entries(e),
            n = {};
          for (let [e, r] of t)
            if (r && "RouteErrorResponse" === r.__type)
              n[e] = new l.ErrorResponse(
                r.status,
                r.statusText,
                r.data,
                !0 === r.internal,
              );
            else if (r && "Error" === r.__type) {
              let t = new Error(r.message);
              (t.stack = ""), (n[e] = t);
            } else n[e] = r;
          return n;
        }
        function k(e) {
          let { basename: t, children: n, window: o } = e,
            i = r.useRef();
          null == i.current &&
            (i.current = (0, l.createBrowserHistory)({
              window: o,
              v5Compat: !0,
            }));
          let s = i.current,
            [u, c] = r.useState({ action: s.action, location: s.location });
          return (
            r.useLayoutEffect(() => s.listen(c), [s]),
            r.createElement(a.F0, {
              basename: t,
              children: n,
              location: u.location,
              navigationType: u.action,
              navigator: s,
            })
          );
        }
        function E(e) {
          let { basename: t, children: n, window: o } = e,
            i = r.useRef();
          null == i.current &&
            (i.current = (0, l.createHashHistory)({ window: o, v5Compat: !0 }));
          let s = i.current,
            [u, c] = r.useState({ action: s.action, location: s.location });
          return (
            r.useLayoutEffect(() => s.listen(c), [s]),
            r.createElement(a.F0, {
              basename: t,
              children: n,
              location: u.location,
              navigationType: u.action,
              navigator: s,
            })
          );
        }
        function w(e) {
          let { basename: t, children: n, history: l } = e;
          const [o, i] = r.useState({ action: l.action, location: l.location });
          return (
            r.useLayoutEffect(() => l.listen(i), [l]),
            r.createElement(a.F0, {
              basename: t,
              children: n,
              location: o.location,
              navigationType: o.action,
              navigator: l,
            })
          );
        }
        const _ = r.forwardRef(function (e, t) {
          let {
              onClick: n,
              relative: l,
              reloadDocument: s,
              replace: u,
              state: c,
              target: d,
              to: f,
              preventScrollReset: p,
            } = e,
            m = i(e, h),
            g = (0, a.oQ)(f, { relative: l }),
            v = D(f, {
              replace: u,
              state: c,
              target: d,
              preventScrollReset: p,
              relative: l,
            });
          return r.createElement(
            "a",
            o({}, m, {
              href: g,
              onClick: s
                ? n
                : function (e) {
                    n && n(e), e.defaultPrevented || v(e);
                  },
              ref: t,
              target: d,
            }),
          );
        });
        const S = r.forwardRef(function (e, t) {
          let {
              "aria-current": n = "page",
              caseSensitive: l = !1,
              className: s = "",
              end: u = !1,
              style: c,
              to: d,
              children: f,
            } = e,
            h = i(e, p),
            m = (0, a.WU)(d, { relative: h.relative }),
            g = (0, a.TH)(),
            v = r.useContext(a.FR),
            { navigator: y } = r.useContext(a.Us),
            b = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname,
            k = g.pathname,
            E =
              v && v.navigation && v.navigation.location
                ? v.navigation.location.pathname
                : null;
          l ||
            ((k = k.toLowerCase()),
            (E = E ? E.toLowerCase() : null),
            (b = b.toLowerCase()));
          let w,
            S =
              k === b || (!u && k.startsWith(b) && "/" === k.charAt(b.length)),
            x =
              null != E &&
              (E === b ||
                (!u && E.startsWith(b) && "/" === E.charAt(b.length))),
            C = S ? n : void 0;
          w =
            "function" == typeof s
              ? s({ isActive: S, isPending: x })
              : [s, S ? "active" : null, x ? "pending" : null]
                  .filter(Boolean)
                  .join(" ");
          let T = "function" == typeof c ? c({ isActive: S, isPending: x }) : c;
          return r.createElement(
            _,
            o({}, h, {
              "aria-current": C,
              className: w,
              ref: t,
              style: T,
              to: d,
            }),
            "function" == typeof f ? f({ isActive: S, isPending: x }) : f,
          );
        });
        const x = r.forwardRef((e, t) =>
          r.createElement(C, o({}, e, { ref: t })),
        );
        const C = r.forwardRef((e, t) => {
          let {
              reloadDocument: n,
              replace: a,
              method: l = s,
              action: u,
              onSubmit: c,
              fetcherKey: d,
              routeId: f,
              relative: h,
              preventScrollReset: p,
            } = e,
            g = i(e, m),
            v = I(d, f),
            y = "get" === l.toLowerCase() ? "get" : "post",
            b = A(u, { relative: h });
          return r.createElement(
            "form",
            o(
              {
                ref: t,
                method: y,
                action: b,
                onSubmit: n
                  ? c
                  : (e) => {
                      if ((c && c(e), e.defaultPrevented)) return;
                      e.preventDefault();
                      let t = e.nativeEvent.submitter,
                        n =
                          (null == t ? void 0 : t.getAttribute("formmethod")) ||
                          l;
                      v(t || e.currentTarget, {
                        method: n,
                        replace: a,
                        relative: h,
                        preventScrollReset: p,
                      });
                    },
              },
              g,
            ),
          );
        });
        function T(e) {
          let { getKey: t, storageKey: n } = e;
          return U({ getKey: t, storageKey: n }), null;
        }
        var N, P;
        function R(e) {
          let t = r.useContext(a.w3);
          return t || (0, l.invariant)(!1), t;
        }
        function O(e) {
          let t = r.useContext(a.FR);
          return t || (0, l.invariant)(!1), t;
        }
        function D(e, t) {
          let {
              target: n,
              replace: o,
              state: i,
              preventScrollReset: s,
              relative: u,
            } = void 0 === t ? {} : t,
            c = (0, a.s0)(),
            d = (0, a.TH)(),
            f = (0, a.WU)(e, { relative: u });
          return r.useCallback(
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
                })(t, n)
              ) {
                t.preventDefault();
                let n =
                  void 0 !== o
                    ? o
                    : (0, l.createPath)(d) === (0, l.createPath)(f);
                c(e, {
                  replace: n,
                  state: i,
                  preventScrollReset: s,
                  relative: u,
                });
              }
            },
            [d, c, f, o, i, n, e, s, u],
          );
        }
        function M(e) {
          let t = r.useRef(d(e)),
            n = (0, a.TH)(),
            l = r.useMemo(
              () =>
                (function (e, t) {
                  let n = d(e);
                  for (let e of t.keys())
                    n.has(e) ||
                      t.getAll(e).forEach((t) => {
                        n.append(e, t);
                      });
                  return n;
                })(n.search, t.current),
              [n.search],
            ),
            o = (0, a.s0)(),
            i = r.useCallback(
              (e, t) => {
                const n = d("function" == typeof e ? e(l) : e);
                o("?" + n, t);
              },
              [o, l],
            );
          return [l, i];
        }
        function L() {
          return I();
        }
        function I(e, t) {
          let { router: n } = R(N.UseSubmitImpl),
            a = A();
          return r.useCallback(
            function (r, o) {
              if ((void 0 === o && (o = {}), "undefined" == typeof document))
                throw new Error(
                  "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.",
                );
              let { method: i, encType: s, formData: u, url: c } = f(r, a, o),
                d = c.pathname + c.search,
                h = {
                  replace: o.replace,
                  preventScrollReset: o.preventScrollReset,
                  formData: u,
                  formMethod: i,
                  formEncType: s,
                };
              e
                ? (null == t && (0, l.invariant)(!1), n.fetch(e, t, d, h))
                : n.navigate(d, h);
            },
            [a, n, e, t],
          );
        }
        function A(e, t) {
          let { relative: n } = void 0 === t ? {} : t,
            { basename: i } = r.useContext(a.Us),
            s = r.useContext(a.pW);
          s || (0, l.invariant)(!1);
          let [u] = s.matches.slice(-1),
            c = o({}, (0, a.WU)(e || ".", { relative: n })),
            d = (0, a.TH)();
          if (
            null == e &&
            ((c.search = d.search), (c.hash = d.hash), u.route.index)
          ) {
            let e = new URLSearchParams(c.search);
            e.delete("index"),
              (c.search = e.toString() ? "?" + e.toString() : "");
          }
          return (
            (e && "." !== e) ||
              !u.route.index ||
              (c.search = c.search
                ? c.search.replace(/^\?/, "?index&")
                : "?index"),
            "/" !== i &&
              (c.pathname =
                "/" === c.pathname ? i : (0, l.joinPaths)([i, c.pathname])),
            (0, l.createPath)(c)
          );
        }
        (function (e) {
          (e.UseScrollRestoration = "useScrollRestoration"),
            (e.UseSubmitImpl = "useSubmitImpl"),
            (e.UseFetcher = "useFetcher");
        })(N || (N = {})),
          (function (e) {
            (e.UseFetchers = "useFetchers"),
              (e.UseScrollRestoration = "useScrollRestoration");
          })(P || (P = {}));
        let F = 0;
        function j() {
          var e;
          let { router: t } = R(N.UseFetcher),
            n = r.useContext(a.pW);
          n || (0, l.invariant)(!1);
          let i =
            null == (e = n.matches[n.matches.length - 1]) ? void 0 : e.route.id;
          null == i && (0, l.invariant)(!1);
          let [s] = r.useState(() => String(++F)),
            [u] = r.useState(
              () => (
                i || (0, l.invariant)(!1),
                (function (e, t) {
                  return r.forwardRef((n, a) =>
                    r.createElement(
                      C,
                      o({}, n, { ref: a, fetcherKey: e, routeId: t }),
                    ),
                  );
                })(s, i)
              ),
            ),
            [c] = r.useState(() => (e) => {
              t || (0, l.invariant)(!1),
                i || (0, l.invariant)(!1),
                t.fetch(s, i, e);
            }),
            d = I(s, i),
            f = t.getFetcher(s),
            h = r.useMemo(
              () => o({ Form: u, submit: d, load: c }, f),
              [f, u, d, c],
            );
          return (
            r.useEffect(
              () => () => {
                t
                  ? t.deleteFetcher(s)
                  : console.warn(
                      "No fetcher available to clean up from useFetcher()",
                    );
              },
              [t, s],
            ),
            h
          );
        }
        function z() {
          return [...O(P.UseFetchers).fetchers.values()];
        }
        const B = "react-router-scroll-positions";
        let H = {};
        function U(e) {
          let { getKey: t, storageKey: n } = void 0 === e ? {} : e,
            { router: l } = R(N.UseScrollRestoration),
            { restoreScrollPosition: o, preventScrollReset: i } = O(
              P.UseScrollRestoration,
            ),
            s = (0, a.TH)(),
            u = (0, a.SN)(),
            c = (0, a.HJ)();
          r.useEffect(
            () => (
              (window.history.scrollRestoration = "manual"),
              () => {
                window.history.scrollRestoration = "auto";
              }
            ),
            [],
          ),
            V(
              r.useCallback(() => {
                if ("idle" === c.state) {
                  let e = (t ? t(s, u) : null) || s.key;
                  H[e] = window.scrollY;
                }
                sessionStorage.setItem(n || B, JSON.stringify(H)),
                  (window.history.scrollRestoration = "auto");
              }, [n, t, c.state, s, u]),
            ),
            "undefined" != typeof document &&
              (r.useLayoutEffect(() => {
                try {
                  let e = sessionStorage.getItem(n || B);
                  e && (H = JSON.parse(e));
                } catch (e) {}
              }, [n]),
              r.useLayoutEffect(() => {
                let e =
                  null == l
                    ? void 0
                    : l.enableScrollRestoration(H, () => window.scrollY, t);
                return () => e && e();
              }, [l, t]),
              r.useLayoutEffect(() => {
                if (!1 !== o)
                  if ("number" != typeof o) {
                    if (s.hash) {
                      let e = document.getElementById(s.hash.slice(1));
                      if (e) return void e.scrollIntoView();
                    }
                    !0 !== i && window.scrollTo(0, 0);
                  } else window.scrollTo(0, o);
              }, [s, o, i]));
        }
        function V(e, t) {
          let { capture: n } = t || {};
          r.useEffect(() => {
            let t = null != n ? { capture: n } : void 0;
            return (
              window.addEventListener("beforeunload", e, t),
              () => {
                window.removeEventListener("beforeunload", e, t);
              }
            );
          }, [e, n]);
        }
        function $(e) {
          let { when: t, message: n } = e,
            l = (0, a.aQ)(t);
          r.useEffect(() => {
            "blocked" !== l.state || t || l.reset();
          }, [l, t]),
            r.useEffect(() => {
              if ("blocked" === l.state) {
                window.confirm(n) ? setTimeout(l.proceed, 0) : l.reset();
              }
            }, [l, n]);
        }
      },
      886: (e, t, n) => {
        "use strict";
        var r = n(294),
          a = n(599),
          l = n(655);
        function o(e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (n) {
                if ("default" !== n) {
                  var r = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    r.get
                      ? r
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[n];
                          },
                        },
                  );
                }
              }),
            (t.default = e),
            Object.freeze(t)
          );
        }
        var i = o(r);
        function s(e) {
          if (!e) return null;
          let t = Object.entries(e),
            n = {};
          for (let [e, r] of t)
            a.isRouteErrorResponse(r)
              ? (n[e] = { ...r, __type: "RouteErrorResponse" })
              : r instanceof Error
              ? (n[e] = { message: r.message, __type: "Error" })
              : (n[e] = r);
          return n;
        }
        function u() {
          return {
            createHref: d,
            encodeLocation: f,
            push(e) {
              throw new Error(
                `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(
                  e,
                )})\` somewhere in your app.`,
              );
            },
            replace(e) {
              throw new Error(
                `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(
                  e,
                )}, { replace: true })\` somewhere in your app.`,
              );
            },
            go(e) {
              throw new Error(
                `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`,
              );
            },
            back() {
              throw new Error(
                "You cannot use navigator.back() on the server because it is a stateless environment.",
              );
            },
            forward() {
              throw new Error(
                "You cannot use navigator.forward() on the server because it is a stateless environment.",
              );
            },
          };
        }
        function c(e, t = new Map()) {
          return (
            e.forEach((e) => {
              t.set(e.id, e), e.children && c(e.children, t);
            }),
            t
          );
        }
        function d(e) {
          return "string" == typeof e ? e : l.createPath(e);
        }
        function f(e) {
          let t = "string" == typeof e ? l.parsePath(e) : e;
          return {
            pathname: t.pathname || "",
            search: t.search || "",
            hash: t.hash || "",
          };
        }
        t.gx = function ({ basename: e, children: t, location: n = "/" }) {
          "string" == typeof n && (n = l.parsePath(n));
          let r = a.Action.Pop,
            o = {
              pathname: n.pathname || "/",
              search: n.search || "",
              hash: n.hash || "",
              state: n.state || null,
              key: n.key || "default",
            },
            s = u();
          return i.createElement(l.Router, {
            basename: e,
            children: t,
            location: o,
            navigationType: r,
            navigator: s,
            static: !0,
          });
        };
      },
      250: (e, t, n) => {
        "use strict";
        var r;
        n.d(t, {
          AW: () => re,
          DG: () => he,
          F0: () => ae,
          FR: () => m,
          Fg: () => te,
          GV: () => w,
          HJ: () => U,
          KP: () => oe,
          Oe: () => fe,
          SN: () => $,
          TH: () => _,
          UO: () => R,
          Us: () => v,
          V$: () => D,
          V4: () => q,
          VA: () => ee,
          WU: () => O,
          Z5: () => le,
          aQ: () => J,
          bS: () => x,
          bi: () => pe,
          bx: () => N,
          f_: () => K,
          gd: () => y,
          i7: () => de,
          iG: () => Y,
          is: () => de,
          j3: () => ne,
          lk: () => G,
          nA: () => W,
          oQ: () => E,
          pC: () => P,
          pG: () => Z,
          pW: () => b,
          qv: () => Q,
          s0: () => C,
          ur: () => S,
          w3: () => p,
          xW: () => V,
        });
        var a = n(599),
          l = n(294);
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
        function o() {
          return (
            (o = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            o.apply(this, arguments)
          );
        }
        const i =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          {
            useState: s,
            useEffect: u,
            useLayoutEffect: c,
            useDebugValue: d,
          } = r || (r = n.t(l, 2));
        function f(e) {
          const t = e.getSnapshot,
            n = e.value;
          try {
            const e = t();
            return !i(n, e);
          } catch (e) {
            return !0;
          }
        }
        "undefined" == typeof window ||
          void 0 === window.document ||
          window.document.createElement;
        const h = ((e) => e.useSyncExternalStore)(r || (r = n.t(l, 2))),
          p = l.createContext(null);
        const m = l.createContext(null);
        const g = l.createContext(null);
        const v = l.createContext(null);
        const y = l.createContext(null);
        const b = l.createContext({ outlet: null, matches: [] });
        const k = l.createContext(null);
        function E(e, t) {
          let { relative: n } = void 0 === t ? {} : t;
          w() || (0, a.invariant)(!1);
          let { basename: r, navigator: o } = l.useContext(v),
            { hash: i, pathname: s, search: u } = O(e, { relative: n }),
            c = s;
          return (
            "/" !== r && (c = "/" === s ? r : (0, a.joinPaths)([r, s])),
            o.createHref({ pathname: c, search: u, hash: i })
          );
        }
        function w() {
          return null != l.useContext(y);
        }
        function _() {
          return w() || (0, a.invariant)(!1), l.useContext(y).location;
        }
        function S() {
          return l.useContext(y).navigationType;
        }
        function x(e) {
          w() || (0, a.invariant)(!1);
          let { pathname: t } = _();
          return l.useMemo(() => (0, a.matchPath)(e, t), [t, e]);
        }
        function C() {
          w() || (0, a.invariant)(!1);
          let { basename: e, navigator: t } = l.useContext(v),
            { matches: n } = l.useContext(b),
            { pathname: r } = _(),
            o = JSON.stringify(
              (0, a.UNSAFE_getPathContributingMatches)(n).map(
                (e) => e.pathnameBase,
              ),
            ),
            i = l.useRef(!1);
          return (
            l.useEffect(() => {
              i.current = !0;
            }),
            l.useCallback(
              function (n, l) {
                if ((void 0 === l && (l = {}), !i.current)) return;
                if ("number" == typeof n) return void t.go(n);
                let s = (0, a.resolveTo)(
                  n,
                  JSON.parse(o),
                  r,
                  "path" === l.relative,
                );
                "/" !== e &&
                  (s.pathname =
                    "/" === s.pathname ? e : (0, a.joinPaths)([e, s.pathname])),
                  (l.replace ? t.replace : t.push)(s, l.state, l);
              },
              [e, t, o, r],
            )
          );
        }
        const T = l.createContext(null);
        function N() {
          return l.useContext(T);
        }
        function P(e) {
          let t = l.useContext(b).outlet;
          return t ? l.createElement(T.Provider, { value: e }, t) : t;
        }
        function R() {
          let { matches: e } = l.useContext(b),
            t = e[e.length - 1];
          return t ? t.params : {};
        }
        function O(e, t) {
          let { relative: n } = void 0 === t ? {} : t,
            { matches: r } = l.useContext(b),
            { pathname: o } = _(),
            i = JSON.stringify(
              (0, a.UNSAFE_getPathContributingMatches)(r).map(
                (e) => e.pathnameBase,
              ),
            );
          return l.useMemo(
            () => (0, a.resolveTo)(e, JSON.parse(i), o, "path" === n),
            [e, i, o, n],
          );
        }
        function D(e, t) {
          w() || (0, a.invariant)(!1);
          let { navigator: n } = l.useContext(v),
            r = l.useContext(m),
            { matches: i } = l.useContext(b),
            s = i[i.length - 1],
            u = s ? s.params : {},
            c = (s && s.pathname, s ? s.pathnameBase : "/");
          s && s.route;
          let d,
            f = _();
          if (t) {
            var h;
            let e = "string" == typeof t ? (0, a.parsePath)(t) : t;
            "/" === c ||
              (null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
              (0, a.invariant)(!1),
              (d = e);
          } else d = f;
          let p = d.pathname || "/",
            g = "/" === c ? p : p.slice(c.length) || "/",
            k = (0, a.matchRoutes)(e, { pathname: g });
          let E = A(
            k &&
              k.map((e) =>
                Object.assign({}, e, {
                  params: Object.assign({}, u, e.params),
                  pathname: (0, a.joinPaths)([
                    c,
                    n.encodeLocation
                      ? n.encodeLocation(e.pathname).pathname
                      : e.pathname,
                  ]),
                  pathnameBase:
                    "/" === e.pathnameBase
                      ? c
                      : (0, a.joinPaths)([
                          c,
                          n.encodeLocation
                            ? n.encodeLocation(e.pathnameBase).pathname
                            : e.pathnameBase,
                        ]),
                }),
              ),
            i,
            r || void 0,
          );
          return t && E
            ? l.createElement(
                y.Provider,
                {
                  value: {
                    location: o(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      d,
                    ),
                    navigationType: a.Action.Pop,
                  },
                },
                E,
              )
            : E;
        }
        function M() {
          let e = G(),
            t = (0, a.isRouteErrorResponse)(e)
              ? e.status + " " + e.statusText
              : e instanceof Error
              ? e.message
              : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            r = "rgba(200,200,200, 0.5)",
            o = { padding: "0.5rem", backgroundColor: r },
            i = { padding: "2px 4px", backgroundColor: r };
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("h2", null, "Unhandled Thrown Error!"),
            l.createElement("h3", { style: { fontStyle: "italic" } }, t),
            n ? l.createElement("pre", { style: o }, n) : null,
            l.createElement("p", null, "💿 Hey developer 👋"),
            l.createElement(
              "p",
              null,
              "You can provide a way better UX than this when your app throws errors by providing your own ",
              l.createElement("code", { style: i }, "errorElement"),
              " props on ",
              l.createElement("code", { style: i }, "<Route>"),
            ),
          );
        }
        class L extends l.Component {
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
              ? l.createElement(
                  b.Provider,
                  { value: this.props.routeContext },
                  l.createElement(k.Provider, {
                    value: this.state.error,
                    children: this.props.component,
                  }),
                )
              : this.props.children;
          }
        }
        function I(e) {
          let { routeContext: t, match: n, children: r } = e,
            a = l.useContext(p);
          return (
            a &&
              a.static &&
              a.staticContext &&
              n.route.errorElement &&
              (a.staticContext._deepestRenderedBoundaryId = n.route.id),
            l.createElement(b.Provider, { value: t }, r)
          );
        }
        function A(e, t, n) {
          if ((void 0 === t && (t = []), null == e)) {
            if (null == n || !n.errors) return null;
            e = n.matches;
          }
          let r = e,
            o = null == n ? void 0 : n.errors;
          if (null != o) {
            let e = r.findIndex(
              (e) => e.route.id && (null == o ? void 0 : o[e.route.id]),
            );
            e >= 0 || (0, a.invariant)(!1),
              (r = r.slice(0, Math.min(r.length, e + 1)));
          }
          return r.reduceRight((e, a, i) => {
            let s = a.route.id ? (null == o ? void 0 : o[a.route.id]) : null,
              u = n ? a.route.errorElement || l.createElement(M, null) : null,
              c = t.concat(r.slice(0, i + 1)),
              d = () =>
                l.createElement(
                  I,
                  { match: a, routeContext: { outlet: e, matches: c } },
                  s ? u : void 0 !== a.route.element ? a.route.element : e,
                );
            return n && (a.route.errorElement || 0 === i)
              ? l.createElement(L, {
                  location: n.location,
                  component: u,
                  error: s,
                  children: d(),
                  routeContext: { outlet: null, matches: c },
                })
              : d();
          }, null);
        }
        var F, j;
        function z(e) {
          let t = l.useContext(p);
          return t || (0, a.invariant)(!1), t;
        }
        function B(e) {
          let t = l.useContext(m);
          return t || (0, a.invariant)(!1), t;
        }
        function H(e) {
          let t = (function (e) {
              let t = l.useContext(b);
              return t || (0, a.invariant)(!1), t;
            })(),
            n = t.matches[t.matches.length - 1];
          return n.route.id || (0, a.invariant)(!1), n.route.id;
        }
        function U() {
          return B(j.UseNavigation).navigation;
        }
        function V() {
          let e = z(F.UseRevalidator),
            t = B(j.UseRevalidator);
          return { revalidate: e.router.revalidate, state: t.revalidation };
        }
        function $() {
          let { matches: e, loaderData: t } = B(j.UseMatches);
          return l.useMemo(
            () =>
              e.map((e) => {
                let { pathname: n, params: r } = e;
                return {
                  id: e.route.id,
                  pathname: n,
                  params: r,
                  data: t[e.route.id],
                  handle: e.route.handle,
                };
              }),
            [e, t],
          );
        }
        function K() {
          let e = B(j.UseLoaderData),
            t = H(j.UseLoaderData);
          if (!e.errors || null == e.errors[t]) return e.loaderData[t];
          console.error(
            "You cannot `useLoaderData` in an errorElement (routeId: " +
              t +
              ")",
          );
        }
        function q(e) {
          return B(j.UseRouteLoaderData).loaderData[e];
        }
        function W() {
          let e = B(j.UseActionData);
          return (
            l.useContext(b) || (0, a.invariant)(!1),
            Object.values((null == e ? void 0 : e.actionData) || {})[0]
          );
        }
        function G() {
          var e;
          let t = l.useContext(k),
            n = B(j.UseRouteError),
            r = H(j.UseRouteError);
          return t || (null == (e = n.errors) ? void 0 : e[r]);
        }
        function Q() {
          let e = l.useContext(g);
          return null == e ? void 0 : e._data;
        }
        function Y() {
          let e = l.useContext(g);
          return null == e ? void 0 : e._error;
        }
        !(function (e) {
          (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
        })(F || (F = {})),
          (function (e) {
            (e.UseLoaderData = "useLoaderData"),
              (e.UseActionData = "useActionData"),
              (e.UseRouteError = "useRouteError"),
              (e.UseNavigation = "useNavigation"),
              (e.UseRouteLoaderData = "useRouteLoaderData"),
              (e.UseMatches = "useMatches"),
              (e.UseRevalidator = "useRevalidator");
          })(j || (j = {}));
        let X = "blocker-singleton";
        function J(e) {
          let { router: t } = z(F.UseBlocker),
            n = l.useCallback(
              (t) => ("function" == typeof e ? !!e(t) : !!e),
              [e],
            ),
            r = t.getBlocker(X, n);
          return l.useEffect(() => () => t.deleteBlocker(X), [t]), r;
        }
        function Z(e) {
          let { fallbackElement: t, router: n } = e,
            r = h(
              n.subscribe,
              () => n.state,
              () => n.state,
            ),
            a = l.useMemo(
              () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (e) => n.navigate(e),
                push: (e, t, r) =>
                  n.navigate(e, {
                    state: t,
                    preventScrollReset:
                      null == r ? void 0 : r.preventScrollReset,
                  }),
                replace: (e, t, r) =>
                  n.navigate(e, {
                    replace: !0,
                    state: t,
                    preventScrollReset:
                      null == r ? void 0 : r.preventScrollReset,
                  }),
              }),
              [n],
            ),
            o = n.basename || "/";
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              p.Provider,
              { value: { router: n, navigator: a, static: !1, basename: o } },
              l.createElement(
                m.Provider,
                { value: r },
                l.createElement(
                  ae,
                  {
                    basename: n.basename,
                    location: n.state.location,
                    navigationType: n.state.historyAction,
                    navigator: a,
                  },
                  n.state.initialized ? l.createElement(le, null) : t,
                ),
              ),
            ),
            null,
          );
        }
        function ee(e) {
          let {
              basename: t,
              children: n,
              initialEntries: r,
              initialIndex: o,
            } = e,
            i = l.useRef();
          null == i.current &&
            (i.current = (0, a.createMemoryHistory)({
              initialEntries: r,
              initialIndex: o,
              v5Compat: !0,
            }));
          let s = i.current,
            [u, c] = l.useState({ action: s.action, location: s.location });
          return (
            l.useLayoutEffect(() => s.listen(c), [s]),
            l.createElement(ae, {
              basename: t,
              children: n,
              location: u.location,
              navigationType: u.action,
              navigator: s,
            })
          );
        }
        function te(e) {
          let { to: t, replace: n, state: r, relative: o } = e;
          w() || (0, a.invariant)(!1);
          let i = l.useContext(m),
            s = C();
          return (
            l.useEffect(() => {
              (i && "idle" !== i.navigation.state) ||
                s(t, { replace: n, state: r, relative: o });
            }),
            null
          );
        }
        function ne(e) {
          return P(e.context);
        }
        function re(e) {
          (0, a.invariant)(!1);
        }
        function ae(e) {
          let {
            basename: t = "/",
            children: n = null,
            location: r,
            navigationType: o = a.Action.Pop,
            navigator: i,
            static: s = !1,
          } = e;
          w() && (0, a.invariant)(!1);
          let u = t.replace(/^\/*/, "/"),
            c = l.useMemo(
              () => ({ basename: u, navigator: i, static: s }),
              [u, i, s],
            );
          "string" == typeof r && (r = (0, a.parsePath)(r));
          let {
              pathname: d = "/",
              search: f = "",
              hash: h = "",
              state: p = null,
              key: m = "default",
            } = r,
            g = l.useMemo(() => {
              let e = (0, a.stripBasename)(d, u);
              return null == e
                ? null
                : { pathname: e, search: f, hash: h, state: p, key: m };
            }, [u, d, f, h, p, m]);
          return null == g
            ? null
            : l.createElement(
                v.Provider,
                { value: c },
                l.createElement(y.Provider, {
                  children: n,
                  value: { location: g, navigationType: o },
                }),
              );
        }
        function le(e) {
          let { children: t, location: n } = e,
            r = l.useContext(p);
          return D(r && !t ? r.router.routes : de(t), n);
        }
        function oe(e) {
          let { children: t, errorElement: n, resolve: r } = e;
          return l.createElement(
            ue,
            { resolve: r, errorElement: n },
            l.createElement(ce, null, t),
          );
        }
        var ie;
        !(function (e) {
          (e[(e.pending = 0)] = "pending"),
            (e[(e.success = 1)] = "success"),
            (e[(e.error = 2)] = "error");
        })(ie || (ie = {}));
        const se = new Promise(() => {});
        class ue extends l.Component {
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
              o = ie.pending;
            if (n instanceof Promise)
              if (this.state.error) {
                o = ie.error;
                let e = this.state.error;
                (r = Promise.reject().catch(() => {})),
                  Object.defineProperty(r, "_tracked", { get: () => !0 }),
                  Object.defineProperty(r, "_error", { get: () => e });
              } else
                n._tracked
                  ? ((r = n),
                    (o =
                      void 0 !== r._error
                        ? ie.error
                        : void 0 !== r._data
                        ? ie.success
                        : ie.pending))
                  : ((o = ie.pending),
                    Object.defineProperty(n, "_tracked", { get: () => !0 }),
                    (r = n.then(
                      (e) =>
                        Object.defineProperty(n, "_data", { get: () => e }),
                      (e) =>
                        Object.defineProperty(n, "_error", { get: () => e }),
                    )));
            else
              (o = ie.success),
                (r = Promise.resolve()),
                Object.defineProperty(r, "_tracked", { get: () => !0 }),
                Object.defineProperty(r, "_data", { get: () => n });
            if (o === ie.error && r._error instanceof a.AbortedDeferredError)
              throw se;
            if (o === ie.error && !t) throw r._error;
            if (o === ie.error)
              return l.createElement(g.Provider, { value: r, children: t });
            if (o === ie.success)
              return l.createElement(g.Provider, { value: r, children: e });
            throw r;
          }
        }
        function ce(e) {
          let { children: t } = e,
            n = Q(),
            r = "function" == typeof t ? t(n) : t;
          return l.createElement(l.Fragment, null, r);
        }
        function de(e, t) {
          void 0 === t && (t = []);
          let n = [];
          return (
            l.Children.forEach(e, (e, r) => {
              if (!l.isValidElement(e)) return;
              if (e.type === l.Fragment)
                return void n.push.apply(n, de(e.props.children, t));
              e.type !== re && (0, a.invariant)(!1),
                e.props.index && e.props.children && (0, a.invariant)(!1);
              let o = [...t, r],
                i = {
                  id: e.props.id || o.join("-"),
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
              e.props.children && (i.children = de(e.props.children, o)),
                n.push(i);
            }),
            n
          );
        }
        function fe(e) {
          return A(e);
        }
        function he(e) {
          return e.map((e) => {
            let t = o({}, e);
            return (
              null == t.hasErrorBoundary &&
                (t.hasErrorBoundary = null != t.errorElement),
              t.children && (t.children = he(t.children)),
              t
            );
          });
        }
        function pe(e, t) {
          return (0, a.createRouter)({
            basename: null == t ? void 0 : t.basename,
            history: (0, a.createMemoryHistory)({
              initialEntries: null == t ? void 0 : t.initialEntries,
              initialIndex: null == t ? void 0 : t.initialIndex,
            }),
            hydrationData: null == t ? void 0 : t.hydrationData,
            routes: he(e),
          }).initialize();
        }
      },
      408: (e, t) => {
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
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var k = (b.prototype = new y());
        (k.constructor = b), m(k, v.prototype), (k.isPureReactComponent = !0);
        var E = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          _ = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, a) && !S.hasOwnProperty(a) && (l[a] = t[a]);
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
            key: o,
            ref: i,
            props: l,
            _owner: _.current,
          };
        }
        function C(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function N(e, t) {
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
        function P(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
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
              (o = o((s = e))),
              (e = "" === l ? "." + N(s, 0) : l),
              E(o)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  P(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(T, "$&/") + "/") +
                        e,
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), E(e)))
            for (var u = 0; u < e.length; u++) {
              var c = l + N((i = e[u]), u);
              s += P(i, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += P((i = i.value), t, a, (c = l + N(i, u++)), o);
          else if ("object" === i)
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
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
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
        var D = { current: null },
          M = { transition: null },
          L = {
            ReactCurrentDispatcher: D,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: _,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
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
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = m({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = _.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !S.hasOwnProperty(u) &&
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
              ref: o,
              props: a,
              _owner: i,
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
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }),
          (t.useCallback = function (e, t) {
            return D.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return D.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return D.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return D.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return D.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return D.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return D.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return D.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return D.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return D.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return D.current.useRef(e);
          }),
          (t.useState = function (e) {
            return D.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return D.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return D.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      294: (e, t, n) => {
        "use strict";
        e.exports = n(408);
      },
      53: (e, t) => {
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
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > l(s, n))
                u < a && 0 > l(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[i] = n), (r = i));
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
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          v = "function" == typeof setTimeout ? setTimeout : null,
          y = "function" == typeof clearTimeout ? clearTimeout : null,
          b = "undefined" != typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function E(e) {
          if (((g = !1), k(e), !m))
            if (null !== r(u)) (m = !0), M(w);
            else {
              var t = r(c);
              null !== t && L(E, t.startTime - e);
            }
        }
        function w(e, n) {
          (m = !1), g && ((g = !1), y(C), (C = -1)), (p = !0);
          var l = h;
          try {
            for (
              k(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !P()));

            ) {
              var o = f.callback;
              if ("function" == typeof o) {
                (f.callback = null), (h = f.priorityLevel);
                var i = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof i
                    ? (f.callback = i)
                    : f === r(u) && a(u),
                  k(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && L(E, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (h = l), (p = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var _,
          S = !1,
          x = null,
          C = -1,
          T = 5,
          N = -1;
        function P() {
          return !(t.unstable_now() - N < T);
        }
        function R() {
          if (null !== x) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = x(!0, e);
            } finally {
              n ? _() : ((S = !1), (x = null));
            }
          } else S = !1;
        }
        if ("function" == typeof b)
          _ = function () {
            b(R);
          };
        else if ("undefined" != typeof MessageChannel) {
          var O = new MessageChannel(),
            D = O.port2;
          (O.port1.onmessage = R),
            (_ = function () {
              D.postMessage(null);
            });
        } else
          _ = function () {
            v(R, 0);
          };
        function M(e) {
          (x = e), S || ((S = !0), _());
        }
        function L(e, n) {
          C = v(function () {
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
            m || p || ((m = !0), M(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
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
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" == typeof l && null !== l
                ? (l = "number" == typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(C), (C = -1)) : (g = !0), L(E, l - o)))
                : ((e.sortIndex = i), n(u, e), m || p || ((m = !0), M(w))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      837: (e) => {
        "use strict";
        e.exports = require("util");
      },
      897: (e) => {
        (e.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      372: (e) => {
        (e.exports = function (e) {
          if (Array.isArray(e)) return e;
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      405: (e, t, n) => {
        var r = n(897);
        (e.exports = function (e) {
          if (Array.isArray(e)) return r(e);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      690: (e) => {
        (e.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      728: (e, t, n) => {
        var r = n(62);
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, r(a.key), a);
          }
        }
        (e.exports = function (e, t, n) {
          return (
            t && a(e.prototype, t),
            n && a(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      416: (e, t, n) => {
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
      498: (e) => {
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
      872: (e) => {
        (e.exports = function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              a,
              l,
              o,
              i = [],
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
                  (i.push(r.value), i.length !== t);
                  s = !0
                );
            } catch (e) {
              (u = !0), (a = e);
            } finally {
              try {
                if (
                  !s &&
                  null != n.return &&
                  ((o = n.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (u) throw a;
              }
            }
            return i;
          }
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      218: (e) => {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      281: (e) => {
        (e.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      424: (e, t, n) => {
        var r = n(372),
          a = n(872),
          l = n(116),
          o = n(218);
        (e.exports = function (e, t) {
          return r(e) || a(e, t) || l(e, t) || o();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      861: (e, t, n) => {
        var r = n(405),
          a = n(498),
          l = n(116),
          o = n(281);
        (e.exports = function (e) {
          return r(e) || a(e) || l(e) || o();
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      36: (e, t, n) => {
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
      62: (e, t, n) => {
        var r = n(698).default,
          a = n(36);
        (e.exports = function (e) {
          var t = a(e, "string");
          return "symbol" === r(t) ? t : String(t);
        }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      698: (e) => {
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
      116: (e, t, n) => {
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
  (a.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return a.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var l = Object.create(null);
      a.r(l);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var i = 2 & r && n; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((e) => (o[e] = () => n[e]));
      return (o.default = () => n), a.d(l, o), l;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var l = {};
  (() => {
    "use strict";
    a.r(l), a.d(l, { default: () => Tl });
    var e = a(294),
      t = a(886);
    function n(e) {
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
    var r = {};
    function o() {
      return "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : r;
    }
    var i = Object.assign,
      s = Object.getOwnPropertyDescriptor,
      u = Object.defineProperty,
      c = Object.prototype,
      d = [];
    Object.freeze(d);
    var f = {};
    Object.freeze(f);
    var h = "undefined" != typeof Proxy,
      p = Object.toString();
    function m() {
      h || n("Proxy not available");
    }
    function g(e) {
      var t = !1;
      return function () {
        if (!t) return (t = !0), e.apply(this, arguments);
      };
    }
    var v = function () {};
    function y(e) {
      return "function" == typeof e;
    }
    function b(e) {
      switch (typeof e) {
        case "string":
        case "symbol":
        case "number":
          return !0;
      }
      return !1;
    }
    function k(e) {
      return null !== e && "object" == typeof e;
    }
    function E(e) {
      if (!k(e)) return !1;
      var t = Object.getPrototypeOf(e);
      if (null == t) return !0;
      var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
      return "function" == typeof n && n.toString() === p;
    }
    function w(e) {
      var t = null == e ? void 0 : e.constructor;
      return (
        !!t &&
        ("GeneratorFunction" === t.name ||
          "GeneratorFunction" === t.displayName)
      );
    }
    function _(e, t, n) {
      u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
    }
    function S(e, t, n) {
      u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
    }
    function x(e, t) {
      var n = "isMobX" + e;
      return (
        (t.prototype[n] = !0),
        function (e) {
          return k(e) && !0 === e[n];
        }
      );
    }
    function C(e) {
      return e instanceof Map;
    }
    function T(e) {
      return e instanceof Set;
    }
    var N = void 0 !== Object.getOwnPropertySymbols;
    var P =
      "undefined" != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : N
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e),
            );
          }
        : Object.getOwnPropertyNames;
    function R(e) {
      return null === e ? null : "object" == typeof e ? "" + e : e;
    }
    function O(e, t) {
      return c.hasOwnProperty.call(e, t);
    }
    var D =
      Object.getOwnPropertyDescriptors ||
      function (e) {
        var t = {};
        return (
          P(e).forEach(function (n) {
            t[n] = s(e, n);
          }),
          t
        );
      };
    function M(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function L(e, t, n) {
      return (
        t && M(e.prototype, t),
        n && M(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function I() {
      return (
        (I =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        I.apply(this, arguments)
      );
    }
    function A(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        F(e, t);
    }
    function F(e, t) {
      return (
        (F =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        F(e, t)
      );
    }
    function j(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function z(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function B(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (n) return (n = n.call(e)).next.bind(n);
      if (
        Array.isArray(e) ||
        (n = (function (e, t) {
          if (e) {
            if ("string" == typeof e) return z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? z(e, t)
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
    var H = Symbol("mobx-stored-annotations");
    function U(e) {
      return Object.assign(function (t, n) {
        V(t, n, e);
      }, e);
    }
    function V(e, t, n) {
      O(e, H) || _(e, H, I({}, e[H])),
        (function (e) {
          return e.annotationType_ === X;
        })(n) || (e[H][t] = n);
    }
    var $ = Symbol("mobx administration"),
      K = (function () {
        function e(e) {
          void 0 === e && (e = "Atom"),
            (this.name_ = void 0),
            (this.isPendingUnobservation_ = !1),
            (this.isBeingObserved_ = !1),
            (this.observers_ = new Set()),
            (this.diffValue_ = 0),
            (this.lastAccessedBy_ = 0),
            (this.lowestObserverState_ = Ke.NOT_TRACKING_),
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
            return gt(this);
          }),
          (t.reportChanged = function () {
            pt(), vt(this), mt();
          }),
          (t.toString = function () {
            return this.name_;
          }),
          e
        );
      })(),
      q = x("Atom", K);
    function W(e, t, n) {
      void 0 === t && (t = v), void 0 === n && (n = v);
      var r,
        a = new K(e);
      return t !== v && zt(Ft, a, t, r), n !== v && jt(a, n), a;
    }
    var G = {
      identity: function (e, t) {
        return e === t;
      },
      structural: function (e, t) {
        return or(e, t);
      },
      default: function (e, t) {
        return Object.is
          ? Object.is(e, t)
          : e === t
          ? 0 !== e || 1 / e == 1 / t
          : e != e && t != t;
      },
      shallow: function (e, t) {
        return or(e, t, 1);
      },
    };
    function Q(e, t, n) {
      return Zt(e)
        ? e
        : Array.isArray(e)
        ? Te.array(e, { name: n })
        : E(e)
        ? Te.object(e, void 0, { name: n })
        : C(e)
        ? Te.map(e, { name: n })
        : T(e)
        ? Te.set(e, { name: n })
        : "function" != typeof e || Mt(e) || Xt(e)
        ? e
        : w(e)
        ? Qt(e)
        : Dt(n, e);
    }
    function Y(e) {
      return e;
    }
    var X = "override";
    function J(e, t) {
      return { annotationType_: e, options_: t, make_: Z, extend_: ee };
    }
    function Z(e, t, n, r) {
      var a;
      if (null != (a = this.options_) && a.bound)
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
      if (Mt(n.value)) return 1;
      var l = te(e, this, t, n, !1);
      return u(r, t, l), 2;
    }
    function ee(e, t, n, r) {
      var a = te(e, this, t, n);
      return e.defineProperty_(t, a, r);
    }
    function te(e, t, n, r, a) {
      var l, o, i, s, u, c, d, f;
      void 0 === a && (a = ct.safeDescriptors),
        (f = r),
        t.annotationType_,
        f.value;
      var h,
        p = r.value;
      null != (l = t.options_) &&
        l.bound &&
        (p = p.bind(null != (h = e.proxy_) ? h : e.target_));
      return {
        value: Fe(
          null != (o = null == (i = t.options_) ? void 0 : i.name)
            ? o
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
    function ne(e, t) {
      return { annotationType_: e, options_: t, make_: re, extend_: ae };
    }
    function re(e, t, n, r) {
      var a;
      if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
      if (
        null != (a = this.options_) &&
        a.bound &&
        (!O(e.target_, t) || !Xt(e.target_[t])) &&
        null === this.extend_(e, t, n, !1)
      )
        return 0;
      if (Xt(n.value)) return 1;
      var l = le(e, this, t, n, !1, !1);
      return u(r, t, l), 2;
    }
    function ae(e, t, n, r) {
      var a,
        l = le(e, this, t, n, null == (a = this.options_) ? void 0 : a.bound);
      return e.defineProperty_(t, l, r);
    }
    function le(e, t, n, r, a, l) {
      var o;
      void 0 === l && (l = ct.safeDescriptors),
        (o = r),
        t.annotationType_,
        o.value;
      var i,
        s = r.value;
      (Xt(s) || (s = Qt(s)), a) &&
        ((s = s.bind(null != (i = e.proxy_) ? i : e.target_)).isMobXFlow = !0);
      return {
        value: s,
        configurable: !l || e.isPlainObject_,
        enumerable: !1,
        writable: !l,
      };
    }
    function oe(e, t) {
      return { annotationType_: e, options_: t, make_: ie, extend_: se };
    }
    function ie(e, t, n) {
      return null === this.extend_(e, t, n, !1) ? 0 : 1;
    }
    function se(e, t, n, r) {
      return (
        (function (e, t, n, r) {
          t.annotationType_, r.get;
          0;
        })(0, this, 0, n),
        e.defineComputedProperty_(
          t,
          I({}, this.options_, { get: n.get, set: n.set }),
          r,
        )
      );
    }
    function ue(e, t) {
      return { annotationType_: e, options_: t, make_: ce, extend_: de };
    }
    function ce(e, t, n) {
      return null === this.extend_(e, t, n, !1) ? 0 : 1;
    }
    function de(e, t, n, r) {
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
            : Q,
          r,
        )
      );
    }
    var fe = he();
    function he(e) {
      return { annotationType_: "true", options_: e, make_: pe, extend_: me };
    }
    function pe(e, t, n, r) {
      var a, l, o, i;
      if (n.get) return Oe.make_(e, t, n, r);
      if (n.set) {
        var s = Fe(t.toString(), n.set);
        return r === e.target_
          ? null ===
            e.defineProperty_(t, {
              configurable: !ct.safeDescriptors || e.isPlainObject_,
              set: s,
            })
            ? 0
            : 2
          : (u(r, t, { configurable: !0, set: s }), 2);
      }
      if (r !== e.target_ && "function" == typeof n.value)
        return w(n.value)
          ? (null != (i = this.options_) && i.autoBind ? Qt.bound : Qt).make_(
              e,
              t,
              n,
              r,
            )
          : (null != (o = this.options_) && o.autoBind ? Dt.bound : Dt).make_(
              e,
              t,
              n,
              r,
            );
      var c,
        d =
          !1 === (null == (a = this.options_) ? void 0 : a.deep) ? Te.ref : Te;
      "function" == typeof n.value &&
        null != (l = this.options_) &&
        l.autoBind &&
        (n.value = n.value.bind(null != (c = e.proxy_) ? c : e.target_));
      return d.make_(e, t, n, r);
    }
    function me(e, t, n, r) {
      var a, l, o;
      if (n.get) return Oe.extend_(e, t, n, r);
      if (n.set)
        return e.defineProperty_(
          t,
          {
            configurable: !ct.safeDescriptors || e.isPlainObject_,
            set: Fe(t.toString(), n.set),
          },
          r,
        );
      "function" == typeof n.value &&
        null != (a = this.options_) &&
        a.autoBind &&
        (n.value = n.value.bind(null != (o = e.proxy_) ? o : e.target_));
      return (
        !1 === (null == (l = this.options_) ? void 0 : l.deep) ? Te.ref : Te
      ).extend_(e, t, n, r);
    }
    var ge = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
    function ve(e) {
      return e || ge;
    }
    Object.freeze(ge);
    var ye = ue("observable"),
      be = ue("observable.ref", { enhancer: Y }),
      ke = ue("observable.shallow", {
        enhancer: function (e, t, n) {
          return null == e || Vn(e) || Cn(e) || Mn(e) || An(e)
            ? e
            : Array.isArray(e)
            ? Te.array(e, { name: n, deep: !1 })
            : E(e)
            ? Te.object(e, void 0, { name: n, deep: !1 })
            : C(e)
            ? Te.map(e, { name: n, deep: !1 })
            : T(e)
            ? Te.set(e, { name: n, deep: !1 })
            : void 0;
        },
      }),
      Ee = ue("observable.struct", {
        enhancer: function (e, t) {
          return or(e, t) ? t : e;
        },
      }),
      we = U(ye);
    function _e(e) {
      return !0 === e.deep
        ? Q
        : !1 === e.deep
        ? Y
        : (t = e.defaultDecorator) &&
          null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
        ? n
        : Q;
      var t, n, r;
    }
    function Se(e, t, n) {
      if (!b(t))
        return Zt(e)
          ? e
          : E(e)
          ? Te.object(e, t, n)
          : Array.isArray(e)
          ? Te.array(e, t)
          : C(e)
          ? Te.map(e, t)
          : T(e)
          ? Te.set(e, t)
          : "object" == typeof e && null !== e
          ? e
          : Te.box(e, t);
      V(e, t, ye);
    }
    Object.assign(Se, we);
    var xe,
      Ce,
      Te = i(Se, {
        box: function (e, t) {
          var n = ve(t);
          return new Ve(e, _e(n), n.name, !0, n.equals);
        },
        array: function (e, t) {
          var n = ve(t);
          return (!1 === ct.useProxies || !1 === n.proxy ? tr : vn)(
            e,
            _e(n),
            n.name,
          );
        },
        map: function (e, t) {
          var n = ve(t);
          return new Dn(e, _e(n), n.name);
        },
        set: function (e, t) {
          var n = ve(t);
          return new In(e, _e(n), n.name);
        },
        object: function (e, t, n) {
          return Ut(
            !1 === ct.useProxies || !1 === (null == n ? void 0 : n.proxy)
              ? Bn({}, n)
              : (function (e, t) {
                  var n, r;
                  return (
                    m(),
                    (e = Bn(e, t)),
                    null != (r = (n = e[$]).proxy_)
                      ? r
                      : (n.proxy_ = new Proxy(e, ln))
                  );
                })({}, n),
            e,
            t,
          );
        },
        ref: U(be),
        shallow: U(ke),
        deep: we,
        struct: U(Ee),
      }),
      Ne = "computed",
      Pe = oe(Ne),
      Re = oe("computed.struct", { equals: G.structural }),
      Oe = function (e, t) {
        if (b(t)) return V(e, t, Pe);
        if (E(e)) return U(oe(Ne, e));
        var n = E(t) ? t : {};
        return (n.get = e), n.name || (n.name = e.name || ""), new We(n);
      };
    Object.assign(Oe, Pe), (Oe.struct = U(Re));
    var De,
      Me = 0,
      Le = 1,
      Ie =
        null !=
          (xe =
            null == (Ce = s(function () {}, "name"))
              ? void 0
              : Ce.configurable) && xe,
      Ae = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
    function Fe(e, t, n, r) {
      function a() {
        return je(e, n, t, r || this, arguments);
      }
      return (
        void 0 === n && (n = !1),
        (a.isMobxAction = !0),
        Ie && ((Ae.value = e), Object.defineProperty(a, "name", Ae)),
        a
      );
    }
    function je(e, t, r, a, l) {
      var o = (function (e, t, n, r) {
        var a = !1,
          l = 0;
        0;
        var o = ct.trackingDerivation,
          i = !t || !o;
        pt();
        var s = ct.allowStateChanges;
        i && (nt(), (s = Be(!0)));
        var u = at(!0),
          c = {
            runAsAction_: i,
            prevDerivation_: o,
            prevAllowStateChanges_: s,
            prevAllowStateReads_: u,
            notifySpy_: a,
            startTime_: l,
            actionId_: Le++,
            parentActionId_: Me,
          };
        return (Me = c.actionId_), c;
      })(0, t);
      try {
        return r.apply(a, l);
      } catch (e) {
        throw ((o.error_ = e), e);
      } finally {
        !(function (e) {
          Me !== e.actionId_ && n(30);
          (Me = e.parentActionId_),
            void 0 !== e.error_ && (ct.suppressReactionErrors = !0);
          He(e.prevAllowStateChanges_),
            lt(e.prevAllowStateReads_),
            mt(),
            e.runAsAction_ && rt(e.prevDerivation_);
          0;
          ct.suppressReactionErrors = !1;
        })(o);
      }
    }
    function ze(e, t) {
      var n = Be(e);
      try {
        return t();
      } finally {
        He(n);
      }
    }
    function Be(e) {
      var t = ct.allowStateChanges;
      return (ct.allowStateChanges = e), t;
    }
    function He(e) {
      ct.allowStateChanges = e;
    }
    De = Symbol.toPrimitive;
    var Ue,
      Ve = (function (e) {
        function t(t, n, r, a, l) {
          var o;
          return (
            void 0 === r && (r = "ObservableValue"),
            void 0 === a && (a = !0),
            void 0 === l && (l = G.default),
            ((o = e.call(this, r) || this).enhancer = void 0),
            (o.name_ = void 0),
            (o.equals = void 0),
            (o.hasUnreportedChange_ = !1),
            (o.interceptors_ = void 0),
            (o.changeListeners_ = void 0),
            (o.value_ = void 0),
            (o.dehancer = void 0),
            (o.enhancer = n),
            (o.name_ = r),
            (o.equals = l),
            (o.value_ = n(t, void 0, r)),
            o
          );
        }
        A(t, e);
        var n = t.prototype;
        return (
          (n.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (n.set = function (e) {
            this.value_;
            if ((e = this.prepareNewValue_(e)) !== ct.UNCHANGED) {
              0, this.setNewValue_(e);
            }
          }),
          (n.prepareNewValue_ = function (e) {
            if ((Je(this), on(this))) {
              var t = un(this, { object: this, type: pn, newValue: e });
              if (!t) return ct.UNCHANGED;
              e = t.newValue;
            }
            return (
              (e = this.enhancer(e, this.value_, this.name_)),
              this.equals(this.value_, e) ? ct.UNCHANGED : e
            );
          }),
          (n.setNewValue_ = function (e) {
            var t = this.value_;
            (this.value_ = e),
              this.reportChanged(),
              cn(this) &&
                fn(this, { type: pn, object: this, newValue: e, oldValue: t });
          }),
          (n.get = function () {
            return this.reportObserved(), this.dehanceValue(this.value_);
          }),
          (n.intercept_ = function (e) {
            return sn(this, e);
          }),
          (n.observe_ = function (e, t) {
            return (
              t &&
                e({
                  observableKind: "value",
                  debugObjectName: this.name_,
                  object: this,
                  type: pn,
                  newValue: this.value_,
                  oldValue: void 0,
                }),
              dn(this, e)
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
            return R(this.get());
          }),
          (n[De] = function () {
            return this.valueOf();
          }),
          t
        );
      })(K),
      $e = x("ObservableValue", Ve);
    Ue = Symbol.toPrimitive;
    var Ke,
      qe,
      We = (function () {
        function e(e) {
          (this.dependenciesState_ = Ke.NOT_TRACKING_),
            (this.observing_ = []),
            (this.newObserving_ = null),
            (this.isBeingObserved_ = !1),
            (this.isPendingUnobservation_ = !1),
            (this.observers_ = new Set()),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.lastAccessedBy_ = 0),
            (this.lowestObserverState_ = Ke.UP_TO_DATE_),
            (this.unboundDepsCount_ = 0),
            (this.value_ = new Qe(null)),
            (this.name_ = void 0),
            (this.triggeredBy_ = void 0),
            (this.isComputing_ = !1),
            (this.isRunningSetter_ = !1),
            (this.derivation = void 0),
            (this.setter_ = void 0),
            (this.isTracing_ = qe.NONE),
            (this.scope_ = void 0),
            (this.equals_ = void 0),
            (this.requiresReaction_ = void 0),
            (this.keepAlive_ = void 0),
            (this.onBOL = void 0),
            (this.onBUOL = void 0),
            e.get || n(31),
            (this.derivation = e.get),
            (this.name_ = e.name || "ComputedValue"),
            e.set && (this.setter_ = Fe("ComputedValue-setter", e.set)),
            (this.equals_ =
              e.equals ||
              (e.compareStructural || e.struct ? G.structural : G.default)),
            (this.scope_ = e.context),
            (this.requiresReaction_ = e.requiresReaction),
            (this.keepAlive_ = !!e.keepAlive);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            !(function (e) {
              if (e.lowestObserverState_ !== Ke.UP_TO_DATE_) return;
              (e.lowestObserverState_ = Ke.POSSIBLY_STALE_),
                e.observers_.forEach(function (e) {
                  e.dependenciesState_ === Ke.UP_TO_DATE_ &&
                    ((e.dependenciesState_ = Ke.POSSIBLY_STALE_),
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
              (this.isComputing_ && n(32, this.name_, this.derivation),
              0 !== ct.inBatch || 0 !== this.observers_.size || this.keepAlive_)
            ) {
              if ((gt(this), Xe(this))) {
                var e = ct.trackingContext;
                this.keepAlive_ && !e && (ct.trackingContext = this),
                  this.trackAndCompute() &&
                    (function (e) {
                      if (e.lowestObserverState_ === Ke.STALE_) return;
                      (e.lowestObserverState_ = Ke.STALE_),
                        e.observers_.forEach(function (t) {
                          t.dependenciesState_ === Ke.POSSIBLY_STALE_
                            ? (t.dependenciesState_ = Ke.STALE_)
                            : t.dependenciesState_ === Ke.UP_TO_DATE_ &&
                              (e.lowestObserverState_ = Ke.UP_TO_DATE_);
                        });
                    })(this),
                  (ct.trackingContext = e);
              }
            } else
              Xe(this) &&
                (this.warnAboutUntrackedRead_(),
                pt(),
                (this.value_ = this.computeValue_(!1)),
                mt());
            var t = this.value_;
            if (Ye(t)) throw t.cause;
            return t;
          }),
          (t.set = function (e) {
            if (this.setter_) {
              this.isRunningSetter_ && n(33, this.name_),
                (this.isRunningSetter_ = !0);
              try {
                this.setter_.call(this.scope_, e);
              } finally {
                this.isRunningSetter_ = !1;
              }
            } else n(34, this.name_);
          }),
          (t.trackAndCompute = function () {
            var e = this.value_,
              t = this.dependenciesState_ === Ke.NOT_TRACKING_,
              n = this.computeValue_(!0),
              r = t || Ye(e) || Ye(n) || !this.equals_(e, n);
            return r && (this.value_ = n), r;
          }),
          (t.computeValue_ = function (e) {
            this.isComputing_ = !0;
            var t,
              n = Be(!1);
            if (e) t = Ze(this, this.derivation, this.scope_);
            else if (!0 === ct.disableErrorBoundaries)
              t = this.derivation.call(this.scope_);
            else
              try {
                t = this.derivation.call(this.scope_);
              } catch (e) {
                t = new Qe(e);
              }
            return He(n), (this.isComputing_ = !1), t;
          }),
          (t.suspend_ = function () {
            this.keepAlive_ || (et(this), (this.value_ = void 0));
          }),
          (t.observe_ = function (e, t) {
            var n = this,
              r = !0,
              a = void 0;
            return Lt(function () {
              var l = n.get();
              if (!r || t) {
                var o = nt();
                e({
                  observableKind: "computed",
                  debugObjectName: n.name_,
                  type: pn,
                  object: n,
                  newValue: l,
                  oldValue: a,
                }),
                  rt(o);
              }
              (r = !1), (a = l);
            });
          }),
          (t.warnAboutUntrackedRead_ = function () {}),
          (t.toString = function () {
            return this.name_ + "[" + this.derivation.toString() + "]";
          }),
          (t.valueOf = function () {
            return R(this.get());
          }),
          (t[Ue] = function () {
            return this.valueOf();
          }),
          e
        );
      })(),
      Ge = x("ComputedValue", We);
    !(function (e) {
      (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
        (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
        (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
        (e[(e.STALE_ = 2)] = "STALE_");
    })(Ke || (Ke = {})),
      (function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.LOG = 1)] = "LOG"),
          (e[(e.BREAK = 2)] = "BREAK");
      })(qe || (qe = {}));
    var Qe = function (e) {
      (this.cause = void 0), (this.cause = e);
    };
    function Ye(e) {
      return e instanceof Qe;
    }
    function Xe(e) {
      switch (e.dependenciesState_) {
        case Ke.UP_TO_DATE_:
          return !1;
        case Ke.NOT_TRACKING_:
        case Ke.STALE_:
          return !0;
        case Ke.POSSIBLY_STALE_:
          for (
            var t = at(!0), n = nt(), r = e.observing_, a = r.length, l = 0;
            l < a;
            l++
          ) {
            var o = r[l];
            if (Ge(o)) {
              if (ct.disableErrorBoundaries) o.get();
              else
                try {
                  o.get();
                } catch (e) {
                  return rt(n), lt(t), !0;
                }
              if (e.dependenciesState_ === Ke.STALE_) return rt(n), lt(t), !0;
            }
          }
          return ot(e), rt(n), lt(t), !1;
      }
    }
    function Je(e) {}
    function Ze(e, t, n) {
      var r = at(!0);
      ot(e),
        (e.newObserving_ = new Array(e.observing_.length + 100)),
        (e.unboundDepsCount_ = 0),
        (e.runId_ = ++ct.runId);
      var a,
        l = ct.trackingDerivation;
      if (
        ((ct.trackingDerivation = e),
        ct.inBatch++,
        !0 === ct.disableErrorBoundaries)
      )
        a = t.call(n);
      else
        try {
          a = t.call(n);
        } catch (e) {
          a = new Qe(e);
        }
      return (
        ct.inBatch--,
        (ct.trackingDerivation = l),
        (function (e) {
          for (
            var t = e.observing_,
              n = (e.observing_ = e.newObserving_),
              r = Ke.UP_TO_DATE_,
              a = 0,
              l = e.unboundDepsCount_,
              o = 0;
            o < l;
            o++
          ) {
            var i = n[o];
            0 === i.diffValue_ &&
              ((i.diffValue_ = 1), a !== o && (n[a] = i), a++),
              i.dependenciesState_ > r && (r = i.dependenciesState_);
          }
          (n.length = a), (e.newObserving_ = null), (l = t.length);
          for (; l--; ) {
            var s = t[l];
            0 === s.diffValue_ && ft(s, e), (s.diffValue_ = 0);
          }
          for (; a--; ) {
            var u = n[a];
            1 === u.diffValue_ && ((u.diffValue_ = 0), dt(u, e));
          }
          r !== Ke.UP_TO_DATE_ &&
            ((e.dependenciesState_ = r), e.onBecomeStale_());
        })(e),
        lt(r),
        a
      );
    }
    function et(e) {
      var t = e.observing_;
      e.observing_ = [];
      for (var n = t.length; n--; ) ft(t[n], e);
      e.dependenciesState_ = Ke.NOT_TRACKING_;
    }
    function tt(e) {
      var t = nt();
      try {
        return e();
      } finally {
        rt(t);
      }
    }
    function nt() {
      var e = ct.trackingDerivation;
      return (ct.trackingDerivation = null), e;
    }
    function rt(e) {
      ct.trackingDerivation = e;
    }
    function at(e) {
      var t = ct.allowStateReads;
      return (ct.allowStateReads = e), t;
    }
    function lt(e) {
      ct.allowStateReads = e;
    }
    function ot(e) {
      if (e.dependenciesState_ !== Ke.UP_TO_DATE_) {
        e.dependenciesState_ = Ke.UP_TO_DATE_;
        for (var t = e.observing_, n = t.length; n--; )
          t[n].lowestObserverState_ = Ke.UP_TO_DATE_;
      }
    }
    var it = function () {
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
      st = !0,
      ut = !1,
      ct = (function () {
        var e = o();
        return (
          e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (st = !1),
          e.__mobxGlobals &&
            e.__mobxGlobals.version !== new it().version &&
            (st = !1),
          st
            ? e.__mobxGlobals
              ? ((e.__mobxInstanceCount += 1),
                e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                e.__mobxGlobals)
              : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new it()))
            : (setTimeout(function () {
                ut || n(35);
              }, 1),
              new it())
        );
      })();
    function dt(e, t) {
      e.observers_.add(t),
        e.lowestObserverState_ > t.dependenciesState_ &&
          (e.lowestObserverState_ = t.dependenciesState_);
    }
    function ft(e, t) {
      e.observers_.delete(t), 0 === e.observers_.size && ht(e);
    }
    function ht(e) {
      !1 === e.isPendingUnobservation_ &&
        ((e.isPendingUnobservation_ = !0), ct.pendingUnobservations.push(e));
    }
    function pt() {
      ct.inBatch++;
    }
    function mt() {
      if (0 == --ct.inBatch) {
        kt();
        for (var e = ct.pendingUnobservations, t = 0; t < e.length; t++) {
          var n = e[t];
          (n.isPendingUnobservation_ = !1),
            0 === n.observers_.size &&
              (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()),
              n instanceof We && n.suspend_());
        }
        ct.pendingUnobservations = [];
      }
    }
    function gt(e) {
      var t = ct.trackingDerivation;
      return null !== t
        ? (t.runId_ !== e.lastAccessedBy_ &&
            ((e.lastAccessedBy_ = t.runId_),
            (t.newObserving_[t.unboundDepsCount_++] = e),
            !e.isBeingObserved_ &&
              ct.trackingContext &&
              ((e.isBeingObserved_ = !0), e.onBO())),
          e.isBeingObserved_)
        : (0 === e.observers_.size && ct.inBatch > 0 && ht(e), !1);
    }
    function vt(e) {
      e.lowestObserverState_ !== Ke.STALE_ &&
        ((e.lowestObserverState_ = Ke.STALE_),
        e.observers_.forEach(function (e) {
          e.dependenciesState_ === Ke.UP_TO_DATE_ && e.onBecomeStale_(),
            (e.dependenciesState_ = Ke.STALE_);
        }));
    }
    var yt = (function () {
      function e(e, t, n, r) {
        void 0 === e && (e = "Reaction"),
          (this.name_ = void 0),
          (this.onInvalidate_ = void 0),
          (this.errorHandler_ = void 0),
          (this.requiresObservable_ = void 0),
          (this.observing_ = []),
          (this.newObserving_ = []),
          (this.dependenciesState_ = Ke.NOT_TRACKING_),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.unboundDepsCount_ = 0),
          (this.isDisposed_ = !1),
          (this.isScheduled_ = !1),
          (this.isTrackPending_ = !1),
          (this.isRunning_ = !1),
          (this.isTracing_ = qe.NONE),
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
            ((this.isScheduled_ = !0), ct.pendingReactions.push(this), kt());
        }),
        (t.isScheduled = function () {
          return this.isScheduled_;
        }),
        (t.runReaction_ = function () {
          if (!this.isDisposed_) {
            pt(), (this.isScheduled_ = !1);
            var e = ct.trackingContext;
            if (((ct.trackingContext = this), Xe(this))) {
              this.isTrackPending_ = !0;
              try {
                this.onInvalidate_();
              } catch (e) {
                this.reportExceptionInDerivation_(e);
              }
            }
            (ct.trackingContext = e), mt();
          }
        }),
        (t.track = function (e) {
          if (!this.isDisposed_) {
            pt();
            0, (this.isRunning_ = !0);
            var t = ct.trackingContext;
            ct.trackingContext = this;
            var n = Ze(this, e, void 0);
            (ct.trackingContext = t),
              (this.isRunning_ = !1),
              (this.isTrackPending_ = !1),
              this.isDisposed_ && et(this),
              Ye(n) && this.reportExceptionInDerivation_(n.cause),
              mt();
          }
        }),
        (t.reportExceptionInDerivation_ = function (e) {
          var t = this;
          if (this.errorHandler_) this.errorHandler_(e, this);
          else {
            if (ct.disableErrorBoundaries) throw e;
            var n = "[mobx] uncaught error in '" + this + "'";
            ct.suppressReactionErrors || console.error(n, e),
              ct.globalReactionErrorHandlers.forEach(function (n) {
                return n(e, t);
              });
          }
        }),
        (t.dispose = function () {
          this.isDisposed_ ||
            ((this.isDisposed_ = !0),
            this.isRunning_ || (pt(), et(this), mt()));
        }),
        (t.getDisposer_ = function () {
          var e = this.dispose.bind(this);
          return (e[$] = this), e;
        }),
        (t.toString = function () {
          return "Reaction[" + this.name_ + "]";
        }),
        (t.trace = function (e) {
          void 0 === e && (e = !1),
            (function () {
              n("trace() is not available in production builds");
              for (
                var e = !1, t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              "boolean" == typeof r[r.length - 1] && (e = r.pop());
              var l = nn(r);
              if (!l)
                return n(
                  "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly",
                );
              l.isTracing_ === qe.NONE &&
                console.log("[mobx.trace] '" + l.name_ + "' tracing enabled");
              l.isTracing_ = e ? qe.BREAK : qe.LOG;
            })(this, e);
        }),
        e
      );
    })();
    var bt = function (e) {
      return e();
    };
    function kt() {
      ct.inBatch > 0 || ct.isRunningReactions || bt(Et);
    }
    function Et() {
      ct.isRunningReactions = !0;
      for (var e = ct.pendingReactions, t = 0; e.length > 0; ) {
        100 == ++t &&
          (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
        for (var n = e.splice(0), r = 0, a = n.length; r < a; r++)
          n[r].runReaction_();
      }
      ct.isRunningReactions = !1;
    }
    var wt = x("Reaction", yt);
    var _t = "action",
      St = "autoAction",
      xt = "<unnamed action>",
      Ct = J(_t),
      Tt = J("action.bound", { bound: !0 }),
      Nt = J(St, { autoAction: !0 }),
      Pt = J("autoAction.bound", { autoAction: !0, bound: !0 });
    function Rt(e) {
      return function (t, n) {
        return y(t)
          ? Fe(t.name || xt, t, e)
          : y(n)
          ? Fe(t, n, e)
          : b(n)
          ? V(t, n, e ? Nt : Ct)
          : b(t)
          ? U(J(e ? St : _t, { name: t, autoAction: e }))
          : void 0;
      };
    }
    var Ot = Rt(!1);
    Object.assign(Ot, Ct);
    var Dt = Rt(!0);
    function Mt(e) {
      return y(e) && !0 === e.isMobxAction;
    }
    function Lt(e, t) {
      var n, r;
      void 0 === t && (t = f);
      var a,
        l = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
      if (!t.scheduler && !t.delay)
        a = new yt(
          l,
          function () {
            this.track(s);
          },
          t.onError,
          t.requiresObservable,
        );
      else {
        var o = At(t),
          i = !1;
        a = new yt(
          l,
          function () {
            i ||
              ((i = !0),
              o(function () {
                (i = !1), a.isDisposed_ || a.track(s);
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
    Object.assign(Dt, Nt), (Ot.bound = U(Tt)), (Dt.bound = U(Pt));
    var It = function (e) {
      return e();
    };
    function At(e) {
      return e.scheduler
        ? e.scheduler
        : e.delay
        ? function (t) {
            return setTimeout(t, e.delay);
          }
        : It;
    }
    var Ft = "onBO";
    function jt(e, t, n) {
      return zt("onBUO", e, t, n);
    }
    function zt(e, t, n, r) {
      var a = "function" == typeof r ? nr(t, n) : nr(t),
        l = y(r) ? r : n,
        o = e + "L";
      return (
        a[o] ? a[o].add(l) : (a[o] = new Set([l])),
        function () {
          var e = a[o];
          e && (e.delete(l), 0 === e.size && delete a[o]);
        }
      );
    }
    var Bt = "always";
    function Ht(e) {
      !0 === e.isolateGlobalState &&
        (function () {
          if (
            ((ct.pendingReactions.length ||
              ct.inBatch ||
              ct.isRunningReactions) &&
              n(36),
            (ut = !0),
            st)
          ) {
            var e = o();
            0 == --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
              (ct = new it());
          }
        })();
      var t,
        r,
        a = e.useProxies,
        l = e.enforceActions;
      if (
        (void 0 !== a &&
          (ct.useProxies =
            a === Bt || ("never" !== a && "undefined" != typeof Proxy)),
        "ifavailable" === a && (ct.verifyProxies = !0),
        void 0 !== l)
      ) {
        var i = l === Bt ? Bt : "observed" === l;
        (ct.enforceActions = i), (ct.allowStateChanges = !0 !== i && i !== Bt);
      }
      [
        "computedRequiresReaction",
        "reactionRequiresObservable",
        "observableRequiresReaction",
        "disableErrorBoundaries",
        "safeDescriptors",
      ].forEach(function (t) {
        t in e && (ct[t] = !!e[t]);
      }),
        (ct.allowStateReads = !ct.observableRequiresReaction),
        e.reactionScheduler &&
          ((t = e.reactionScheduler),
          (r = bt),
          (bt = function (e) {
            return t(function () {
              return r(e);
            });
          }));
    }
    function Ut(e, t, n, r) {
      var a = D(t),
        l = Bn(e, r)[$];
      pt();
      try {
        P(a).forEach(function (e) {
          l.extend_(e, a[e], !n || !(e in n) || n[e]);
        });
      } finally {
        mt();
      }
      return e;
    }
    function Vt(e, t) {
      return $t(nr(e, t));
    }
    function $t(e) {
      var t,
        n = { name: e.name_ };
      return (
        e.observing_ &&
          e.observing_.length > 0 &&
          (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(
            $t,
          )),
        n
      );
    }
    var Kt = 0;
    function qt() {
      this.message = "FLOW_CANCELLED";
    }
    qt.prototype = Object.create(Error.prototype);
    var Wt = ne("flow"),
      Gt = ne("flow.bound", { bound: !0 }),
      Qt = Object.assign(function (e, t) {
        if (b(t)) return V(e, t, Wt);
        var n = e,
          r = n.name || "<unnamed flow>",
          a = function () {
            var e,
              t = this,
              a = arguments,
              l = ++Kt,
              o = Ot(r + " - runid: " + l + " - init", n).apply(t, a),
              i = void 0,
              s = new Promise(function (t, n) {
                var a = 0;
                function s(e) {
                  var t;
                  i = void 0;
                  try {
                    t = Ot(
                      r + " - runid: " + l + " - yield " + a++,
                      o.next,
                    ).call(o, e);
                  } catch (e) {
                    return n(e);
                  }
                  c(t);
                }
                function u(e) {
                  var t;
                  i = void 0;
                  try {
                    t = Ot(
                      r + " - runid: " + l + " - yield " + a++,
                      o.throw,
                    ).call(o, e);
                  } catch (e) {
                    return n(e);
                  }
                  c(t);
                }
                function c(e) {
                  if (!y(null == e ? void 0 : e.then))
                    return e.done
                      ? t(e.value)
                      : (i = Promise.resolve(e.value)).then(s, u);
                  e.then(c, n);
                }
                (e = n), s(void 0);
              });
            return (
              (s.cancel = Ot(r + " - runid: " + l + " - cancel", function () {
                try {
                  i && Yt(i);
                  var t = o.return(void 0),
                    n = Promise.resolve(t.value);
                  n.then(v, v), Yt(n), e(new qt());
                } catch (t) {
                  e(t);
                }
              })),
              s
            );
          };
        return (a.isMobXFlow = !0), a;
      }, Wt);
    function Yt(e) {
      y(e.cancel) && e.cancel();
    }
    function Xt(e) {
      return !0 === (null == e ? void 0 : e.isMobXFlow);
    }
    function Jt(e, t) {
      return (
        !!e &&
        (void 0 !== t
          ? !!Vn(e) && e[$].values_.has(t)
          : Vn(e) || !!e[$] || q(e) || wt(e) || Ge(e))
      );
    }
    function Zt(e) {
      return Jt(e);
    }
    function en(e, t, n) {
      return e.set(t, n), n;
    }
    function tn(e, t) {
      if (null == e || "object" != typeof e || e instanceof Date || !Zt(e))
        return e;
      if ($e(e) || Ge(e)) return tn(e.get(), t);
      if (t.has(e)) return t.get(e);
      if (Cn(e)) {
        var r = en(t, e, new Array(e.length));
        return (
          e.forEach(function (e, n) {
            r[n] = tn(e, t);
          }),
          r
        );
      }
      if (An(e)) {
        var a = en(t, e, new Set());
        return (
          e.forEach(function (e) {
            a.add(tn(e, t));
          }),
          a
        );
      }
      if (Mn(e)) {
        var l = en(t, e, new Map());
        return (
          e.forEach(function (e, n) {
            l.set(n, tn(e, t));
          }),
          l
        );
      }
      var o = en(t, e, {});
      return (
        (function (e) {
          if (Vn(e)) return e[$].ownKeys_();
          n(38);
        })(e).forEach(function (n) {
          c.propertyIsEnumerable.call(e, n) && (o[n] = tn(e[n], t));
        }),
        o
      );
    }
    function nn(e) {
      switch (e.length) {
        case 0:
          return ct.trackingDerivation;
        case 1:
          return nr(e[0]);
        case 2:
          return nr(e[0], e[1]);
      }
    }
    function rn(e, t) {
      void 0 === t && (t = void 0), pt();
      try {
        return e.apply(t);
      } finally {
        mt();
      }
    }
    function an(e) {
      return e[$];
    }
    Qt.bound = U(Gt);
    var ln = {
      has: function (e, t) {
        return an(e).has_(t);
      },
      get: function (e, t) {
        return an(e).get_(t);
      },
      set: function (e, t, n) {
        var r;
        return !!b(t) && (null == (r = an(e).set_(t, n, !0)) || r);
      },
      deleteProperty: function (e, t) {
        var n;
        return !!b(t) && (null == (n = an(e).delete_(t, !0)) || n);
      },
      defineProperty: function (e, t, n) {
        var r;
        return null == (r = an(e).defineProperty_(t, n)) || r;
      },
      ownKeys: function (e) {
        return an(e).ownKeys_();
      },
      preventExtensions: function (e) {
        n(13);
      },
    };
    function on(e) {
      return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
    }
    function sn(e, t) {
      var n = e.interceptors_ || (e.interceptors_ = []);
      return (
        n.push(t),
        g(function () {
          var e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        })
      );
    }
    function un(e, t) {
      var r = nt();
      try {
        for (
          var a = [].concat(e.interceptors_ || []), l = 0, o = a.length;
          l < o && ((t = a[l](t)) && !t.type && n(14), t);
          l++
        );
        return t;
      } finally {
        rt(r);
      }
    }
    function cn(e) {
      return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
    }
    function dn(e, t) {
      var n = e.changeListeners_ || (e.changeListeners_ = []);
      return (
        n.push(t),
        g(function () {
          var e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        })
      );
    }
    function fn(e, t) {
      var n = nt(),
        r = e.changeListeners_;
      if (r) {
        for (var a = 0, l = (r = r.slice()).length; a < l; a++) r[a](t);
        rt(n);
      }
    }
    var hn = "splice",
      pn = "update",
      mn = {
        get: function (e, t) {
          var n = e[$];
          return t === $
            ? n
            : "length" === t
            ? n.getArrayLength_()
            : "string" != typeof t || isNaN(t)
            ? O(yn, t)
              ? yn[t]
              : e[t]
            : n.get_(parseInt(t));
        },
        set: function (e, t, n) {
          var r = e[$];
          return (
            "length" === t && r.setArrayLength_(n),
            "symbol" == typeof t || isNaN(t)
              ? (e[t] = n)
              : r.set_(parseInt(t), n),
            !0
          );
        },
        preventExtensions: function () {
          n(15);
        },
      },
      gn = (function () {
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
            (this.atom_ = new K(e)),
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
            return sn(this, e);
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
              dn(this, e)
            );
          }),
          (t.getArrayLength_ = function () {
            return this.atom_.reportObserved(), this.values_.length;
          }),
          (t.setArrayLength_ = function (e) {
            ("number" != typeof e || isNaN(e) || e < 0) &&
              n("Out of range: " + e);
            var t = this.values_.length;
            if (e !== t)
              if (e > t) {
                for (var r = new Array(e - t), a = 0; a < e - t; a++)
                  r[a] = void 0;
                this.spliceWithArray_(t, 0, r);
              } else this.spliceWithArray_(e, t - e);
          }),
          (t.updateArrayLength_ = function (e, t) {
            e !== this.lastKnownLength_ && n(16),
              (this.lastKnownLength_ += t),
              this.legacyMode_ && t > 0 && er(e + t + 1);
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
              void 0 === n && (n = d),
              on(this))
            ) {
              var l = un(this, {
                object: this.proxy_,
                type: hn,
                index: e,
                removedCount: t,
                added: n,
              });
              if (!l) return d;
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
              var o = n.length - t;
              this.updateArrayLength_(a, o);
            }
            var i = this.spliceItemsIntoValues_(e, t, n);
            return (
              (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, i),
              this.dehanceValues_(i)
            );
          }),
          (t.spliceItemsIntoValues_ = function (e, t, n) {
            var r;
            if (n.length < 1e4)
              return (r = this.values_).splice.apply(r, [e, t].concat(n));
            var a = this.values_.slice(e, e + t),
              l = this.values_.slice(e + t);
            this.values_.length += n.length - t;
            for (var o = 0; o < n.length; o++) this.values_[e + o] = n[o];
            for (var i = 0; i < l.length; i++)
              this.values_[e + n.length + i] = l[i];
            return a;
          }),
          (t.notifyArrayChildUpdate_ = function (e, t, n) {
            var r = !this.owned_ && !1,
              a = cn(this),
              l =
                a || r
                  ? {
                      observableKind: "array",
                      object: this.proxy_,
                      type: pn,
                      debugObjectName: this.atom_.name_,
                      index: e,
                      newValue: t,
                      oldValue: n,
                    }
                  : null;
            this.atom_.reportChanged(), a && fn(this, l);
          }),
          (t.notifyArraySplice_ = function (e, t, n) {
            var r = !this.owned_ && !1,
              a = cn(this),
              l =
                a || r
                  ? {
                      observableKind: "array",
                      object: this.proxy_,
                      debugObjectName: this.atom_.name_,
                      type: hn,
                      index: e,
                      removed: n,
                      added: t,
                      removedCount: n.length,
                      addedCount: t.length,
                    }
                  : null;
            this.atom_.reportChanged(), a && fn(this, l);
          }),
          (t.get_ = function (e) {
            if (!(this.legacyMode_ && e >= this.values_.length))
              return (
                this.atom_.reportObserved(), this.dehanceValue_(this.values_[e])
              );
            console.warn("[mobx] Out of bounds read: " + e);
          }),
          (t.set_ = function (e, t) {
            var r = this.values_;
            if (
              (this.legacyMode_ && e > r.length && n(17, e, r.length),
              e < r.length)
            ) {
              this.atom_;
              var a = r[e];
              if (on(this)) {
                var l = un(this, {
                  type: pn,
                  object: this.proxy_,
                  index: e,
                  newValue: t,
                });
                if (!l) return;
                t = l.newValue;
              }
              (t = this.enhancer_(t, a)) !== a &&
                ((r[e] = t), this.notifyArrayChildUpdate_(e, t, a));
            } else {
              for (
                var o = new Array(e + 1 - r.length), i = 0;
                i < o.length - 1;
                i++
              )
                o[i] = void 0;
              (o[o.length - 1] = t), this.spliceWithArray_(r.length, 0, o);
            }
          }),
          e
        );
      })();
    function vn(e, t, n, r) {
      void 0 === n && (n = "ObservableArray"), void 0 === r && (r = !1), m();
      var a = new gn(n, t, r, !1);
      S(a.values_, $, a);
      var l = new Proxy(a.values_, mn);
      if (((a.proxy_ = l), e && e.length)) {
        var o = Be(!0);
        a.spliceWithArray_(0, 0, e), He(o);
      }
      return l;
    }
    var yn = {
      clear: function () {
        return this.splice(0);
      },
      replace: function (e) {
        var t = this[$];
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
        var l = this[$];
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
        return this[$].spliceWithArray_(e, t, n);
      },
      push: function () {
        for (
          var e = this[$], t = arguments.length, n = new Array(t), r = 0;
          r < t;
          r++
        )
          n[r] = arguments[r];
        return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
      },
      pop: function () {
        return this.splice(Math.max(this[$].values_.length - 1, 0), 1)[0];
      },
      shift: function () {
        return this.splice(0, 1)[0];
      },
      unshift: function () {
        for (
          var e = this[$], t = arguments.length, n = new Array(t), r = 0;
          r < t;
          r++
        )
          n[r] = arguments[r];
        return e.spliceWithArray_(0, 0, n), e.values_.length;
      },
      reverse: function () {
        return (
          ct.trackingDerivation && n(37, "reverse"),
          this.replace(this.slice().reverse()),
          this
        );
      },
      sort: function () {
        ct.trackingDerivation && n(37, "sort");
        var e = this.slice();
        return e.sort.apply(e, arguments), this.replace(e), this;
      },
      remove: function (e) {
        var t = this[$],
          n = t.dehanceValues_(t.values_).indexOf(e);
        return n > -1 && (this.splice(n, 1), !0);
      },
    };
    function bn(e, t) {
      "function" == typeof Array.prototype[e] && (yn[e] = t(e));
    }
    function kn(e) {
      return function () {
        var t = this[$];
        t.atom_.reportObserved();
        var n = t.dehanceValues_(t.values_);
        return n[e].apply(n, arguments);
      };
    }
    function En(e) {
      return function (t, n) {
        var r = this,
          a = this[$];
        return (
          a.atom_.reportObserved(),
          a.dehanceValues_(a.values_)[e](function (e, a) {
            return t.call(n, e, a, r);
          })
        );
      };
    }
    function wn(e) {
      return function () {
        var t = this,
          n = this[$];
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
    bn("concat", kn),
      bn("flat", kn),
      bn("includes", kn),
      bn("indexOf", kn),
      bn("join", kn),
      bn("lastIndexOf", kn),
      bn("slice", kn),
      bn("toString", kn),
      bn("toLocaleString", kn),
      bn("every", En),
      bn("filter", En),
      bn("find", En),
      bn("findIndex", En),
      bn("flatMap", En),
      bn("forEach", En),
      bn("map", En),
      bn("some", En),
      bn("reduce", wn),
      bn("reduceRight", wn);
    var _n,
      Sn,
      xn = x("ObservableArrayAdministration", gn);
    function Cn(e) {
      return k(e) && xn(e[$]);
    }
    var Tn = {},
      Nn = "add",
      Pn = "delete";
    (_n = Symbol.iterator), (Sn = Symbol.toStringTag);
    var Rn,
      On,
      Dn = (function () {
        function e(e, t, r) {
          var a = this;
          void 0 === t && (t = Q),
            void 0 === r && (r = "ObservableMap"),
            (this.enhancer_ = void 0),
            (this.name_ = void 0),
            (this[$] = Tn),
            (this.data_ = void 0),
            (this.hasMap_ = void 0),
            (this.keysAtom_ = void 0),
            (this.interceptors_ = void 0),
            (this.changeListeners_ = void 0),
            (this.dehancer = void 0),
            (this.enhancer_ = t),
            (this.name_ = r),
            y(Map) || n(18),
            (this.keysAtom_ = W("ObservableMap.keys()")),
            (this.data_ = new Map()),
            (this.hasMap_ = new Map()),
            ze(!0, function () {
              a.merge(e);
            });
        }
        var t = e.prototype;
        return (
          (t.has_ = function (e) {
            return this.data_.has(e);
          }),
          (t.has = function (e) {
            var t = this;
            if (!ct.trackingDerivation) return this.has_(e);
            var n = this.hasMap_.get(e);
            if (!n) {
              var r = (n = new Ve(this.has_(e), Y, "ObservableMap.key?", !1));
              this.hasMap_.set(e, r),
                jt(r, function () {
                  return t.hasMap_.delete(e);
                });
            }
            return n.get();
          }),
          (t.set = function (e, t) {
            var n = this.has_(e);
            if (on(this)) {
              var r = un(this, {
                type: n ? pn : Nn,
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
              (this.keysAtom_, on(this)) &&
              !un(this, { type: Pn, object: this, name: e })
            )
              return !1;
            if (this.has_(e)) {
              var n = cn(this),
                r = n
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: Pn,
                      object: this,
                      oldValue: this.data_.get(e).value_,
                      name: e,
                    }
                  : null;
              return (
                rn(function () {
                  var n;
                  t.keysAtom_.reportChanged(),
                    null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                    t.data_.get(e).setNewValue_(void 0),
                    t.data_.delete(e);
                }),
                n && fn(this, r),
                !0
              );
            }
            return !1;
          }),
          (t.updateValue_ = function (e, t) {
            var n = this.data_.get(e);
            if ((t = n.prepareNewValue_(t)) !== ct.UNCHANGED) {
              var r = cn(this),
                a = r
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: pn,
                      object: this,
                      oldValue: n.value_,
                      name: e,
                      newValue: t,
                    }
                  : null;
              0, n.setNewValue_(t), r && fn(this, a);
            }
          }),
          (t.addValue_ = function (e, t) {
            var n = this;
            this.keysAtom_,
              rn(function () {
                var r,
                  a = new Ve(t, n.enhancer_, "ObservableMap.key", !1);
                n.data_.set(e, a),
                  (t = a.value_),
                  null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                  n.keysAtom_.reportChanged();
              });
            var r = cn(this),
              a = r
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: Nn,
                    object: this,
                    name: e,
                    newValue: t,
                  }
                : null;
            r && fn(this, a);
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
            return ur({
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
            return ur({
              next: function () {
                var n = t.next(),
                  r = n.done,
                  a = n.value;
                return { done: r, value: r ? void 0 : [a, e.get(a)] };
              },
            });
          }),
          (t[_n] = function () {
            return this.entries();
          }),
          (t.forEach = function (e, t) {
            for (var n, r = B(this); !(n = r()).done; ) {
              var a = n.value,
                l = a[0],
                o = a[1];
              e.call(t, o, l, this);
            }
          }),
          (t.merge = function (e) {
            var t = this;
            return (
              Mn(e) && (e = new Map(e)),
              rn(function () {
                E(e)
                  ? (function (e) {
                      var t = Object.keys(e);
                      if (!N) return t;
                      var n = Object.getOwnPropertySymbols(e);
                      return n.length
                        ? [].concat(
                            t,
                            n.filter(function (t) {
                              return c.propertyIsEnumerable.call(e, t);
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
                  : C(e)
                  ? (e.constructor !== Map && n(19, e),
                    e.forEach(function (e, n) {
                      return t.set(n, e);
                    }))
                  : null != e && n(20, e);
              }),
              this
            );
          }),
          (t.clear = function () {
            var e = this;
            rn(function () {
              tt(function () {
                for (var t, n = B(e.keys()); !(t = n()).done; ) {
                  var r = t.value;
                  e.delete(r);
                }
              });
            });
          }),
          (t.replace = function (e) {
            var t = this;
            return (
              rn(function () {
                for (
                  var r,
                    a = (function (e) {
                      if (C(e) || Mn(e)) return e;
                      if (Array.isArray(e)) return new Map(e);
                      if (E(e)) {
                        var t = new Map();
                        for (var r in e) t.set(r, e[r]);
                        return t;
                      }
                      return n(21, e);
                    })(e),
                    l = new Map(),
                    o = !1,
                    i = B(t.data_.keys());
                  !(r = i()).done;

                ) {
                  var s = r.value;
                  if (!a.has(s))
                    if (t.delete(s)) o = !0;
                    else {
                      var u = t.data_.get(s);
                      l.set(s, u);
                    }
                }
                for (var c, d = B(a.entries()); !(c = d()).done; ) {
                  var f = c.value,
                    h = f[0],
                    p = f[1],
                    m = t.data_.has(h);
                  if ((t.set(h, p), t.data_.has(h))) {
                    var g = t.data_.get(h);
                    l.set(h, g), m || (o = !0);
                  }
                }
                if (!o)
                  if (t.data_.size !== l.size) t.keysAtom_.reportChanged();
                  else
                    for (
                      var v = t.data_.keys(),
                        y = l.keys(),
                        b = v.next(),
                        k = y.next();
                      !b.done;

                    ) {
                      if (b.value !== k.value) {
                        t.keysAtom_.reportChanged();
                        break;
                      }
                      (b = v.next()), (k = y.next());
                    }
                t.data_ = l;
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
            return dn(this, e);
          }),
          (t.intercept_ = function (e) {
            return sn(this, e);
          }),
          L(e, [
            {
              key: "size",
              get: function () {
                return this.keysAtom_.reportObserved(), this.data_.size;
              },
            },
            {
              key: Sn,
              get: function () {
                return "Map";
              },
            },
          ]),
          e
        );
      })(),
      Mn = x("ObservableMap", Dn);
    var Ln = {};
    (Rn = Symbol.iterator), (On = Symbol.toStringTag);
    var In = (function () {
        function e(e, t, r) {
          void 0 === t && (t = Q),
            void 0 === r && (r = "ObservableSet"),
            (this.name_ = void 0),
            (this[$] = Ln),
            (this.data_ = new Set()),
            (this.atom_ = void 0),
            (this.changeListeners_ = void 0),
            (this.interceptors_ = void 0),
            (this.dehancer = void 0),
            (this.enhancer_ = void 0),
            (this.name_ = r),
            y(Set) || n(22),
            (this.atom_ = W(this.name_)),
            (this.enhancer_ = function (e, n) {
              return t(e, n, r);
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
            rn(function () {
              tt(function () {
                for (var t, n = B(e.data_.values()); !(t = n()).done; ) {
                  var r = t.value;
                  e.delete(r);
                }
              });
            });
          }),
          (t.forEach = function (e, t) {
            for (var n, r = B(this); !(n = r()).done; ) {
              var a = n.value;
              e.call(t, a, a, this);
            }
          }),
          (t.add = function (e) {
            var t = this;
            if (
              (this.atom_, on(this)) &&
              !un(this, { type: Nn, object: this, newValue: e })
            )
              return this;
            if (!this.has(e)) {
              rn(function () {
                t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
              });
              var n = !1,
                r = cn(this),
                a = r
                  ? {
                      observableKind: "set",
                      debugObjectName: this.name_,
                      type: Nn,
                      object: this,
                      newValue: e,
                    }
                  : null;
              n, r && fn(this, a);
            }
            return this;
          }),
          (t.delete = function (e) {
            var t = this;
            if (on(this) && !un(this, { type: Pn, object: this, oldValue: e }))
              return !1;
            if (this.has(e)) {
              var n = cn(this),
                r = n
                  ? {
                      observableKind: "set",
                      debugObjectName: this.name_,
                      type: Pn,
                      object: this,
                      oldValue: e,
                    }
                  : null;
              return (
                rn(function () {
                  t.atom_.reportChanged(), t.data_.delete(e);
                }),
                n && fn(this, r),
                !0
              );
            }
            return !1;
          }),
          (t.has = function (e) {
            return (
              this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e))
            );
          }),
          (t.entries = function () {
            var e = 0,
              t = Array.from(this.keys()),
              n = Array.from(this.values());
            return ur({
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
            return ur({
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
              An(e) && (e = new Set(e)),
              rn(function () {
                Array.isArray(e) || T(e)
                  ? (t.clear(),
                    e.forEach(function (e) {
                      return t.add(e);
                    }))
                  : null != e && n("Cannot initialize set from " + e);
              }),
              this
            );
          }),
          (t.observe_ = function (e, t) {
            return dn(this, e);
          }),
          (t.intercept_ = function (e) {
            return sn(this, e);
          }),
          (t.toJSON = function () {
            return Array.from(this);
          }),
          (t.toString = function () {
            return "[object ObservableSet]";
          }),
          (t[Rn] = function () {
            return this.values();
          }),
          L(e, [
            {
              key: "size",
              get: function () {
                return this.atom_.reportObserved(), this.data_.size;
              },
            },
            {
              key: On,
              get: function () {
                return "Set";
              },
            },
          ]),
          e
        );
      })(),
      An = x("ObservableSet", In),
      Fn = Object.create(null),
      jn = "remove",
      zn = (function () {
        function e(e, t, n, r) {
          void 0 === t && (t = new Map()),
            void 0 === r && (r = fe),
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
            (this.keysAtom_ = new K("ObservableObject.keys")),
            (this.isPlainObject_ = E(this.target_));
        }
        var t = e.prototype;
        return (
          (t.getObservablePropValue_ = function (e) {
            return this.values_.get(e).get();
          }),
          (t.setObservablePropValue_ = function (e, t) {
            var n = this.values_.get(e);
            if (n instanceof We) return n.set(t), !0;
            if (on(this)) {
              var r = un(this, {
                type: pn,
                object: this.proxy_ || this.target_,
                name: e,
                newValue: t,
              });
              if (!r) return null;
              t = r.newValue;
            }
            if ((t = n.prepareNewValue_(t)) !== ct.UNCHANGED) {
              var a = cn(this),
                l = a
                  ? {
                      type: pn,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      oldValue: n.value_,
                      name: e,
                      newValue: t,
                    }
                  : null;
              0, n.setNewValue_(t), a && fn(this, l);
            }
            return !0;
          }),
          (t.get_ = function (e) {
            return (
              ct.trackingDerivation && !O(this.target_, e) && this.has_(e),
              this.target_[e]
            );
          }),
          (t.set_ = function (e, t, n) {
            return (
              void 0 === n && (n = !1),
              O(this.target_, e)
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
            if (!ct.trackingDerivation) return e in this.target_;
            this.pendingKeys_ || (this.pendingKeys_ = new Map());
            var t = this.pendingKeys_.get(e);
            return (
              t ||
                ((t = new Ve(
                  e in this.target_,
                  Y,
                  "ObservableObject.key?",
                  !1,
                )),
                this.pendingKeys_.set(e, t)),
              t.get()
            );
          }),
          (t.make_ = function (e, t) {
            if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
              if ((Kn(this, t, e), !(e in this.target_))) {
                var r;
                if (null != (r = this.target_[H]) && r[e]) return;
                n(1, t.annotationType_, this.name_ + "." + e.toString());
              }
              for (var a = this.target_; a && a !== c; ) {
                var l = s(a, e);
                if (l) {
                  var o = t.make_(this, e, l, a);
                  if (0 === o) return;
                  if (1 === o) break;
                }
                a = Object.getPrototypeOf(a);
              }
              $n(this, t, e);
            }
          }),
          (t.extend_ = function (e, t, n, r) {
            if (
              (void 0 === r && (r = !1),
              !0 === n && (n = this.defaultAnnotation_),
              !1 === n)
            )
              return this.defineProperty_(e, t, r);
            Kn(this, n, e);
            var a = n.extend_(this, e, t, r);
            return a && $n(this, n, e), a;
          }),
          (t.defineProperty_ = function (e, t, n) {
            void 0 === n && (n = !1);
            try {
              pt();
              var r = this.delete_(e);
              if (!r) return r;
              if (on(this)) {
                var a = un(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Nn,
                  newValue: t.value,
                });
                if (!a) return null;
                var l = a.newValue;
                t.value !== l && (t = I({}, t, { value: l }));
              }
              if (n) {
                if (!Reflect.defineProperty(this.target_, e, t)) return !1;
              } else u(this.target_, e, t);
              this.notifyPropertyAddition_(e, t.value);
            } finally {
              mt();
            }
            return !0;
          }),
          (t.defineObservableProperty_ = function (e, t, n, r) {
            void 0 === r && (r = !1);
            try {
              pt();
              var a = this.delete_(e);
              if (!a) return a;
              if (on(this)) {
                var l = un(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Nn,
                  newValue: t,
                });
                if (!l) return null;
                t = l.newValue;
              }
              var o = Un(e),
                i = {
                  configurable: !ct.safeDescriptors || this.isPlainObject_,
                  enumerable: !0,
                  get: o.get,
                  set: o.set,
                };
              if (r) {
                if (!Reflect.defineProperty(this.target_, e, i)) return !1;
              } else u(this.target_, e, i);
              var s = new Ve(t, n, "ObservableObject.key", !1);
              this.values_.set(e, s), this.notifyPropertyAddition_(e, s.value_);
            } finally {
              mt();
            }
            return !0;
          }),
          (t.defineComputedProperty_ = function (e, t, n) {
            void 0 === n && (n = !1);
            try {
              pt();
              var r = this.delete_(e);
              if (!r) return r;
              if (on(this))
                if (
                  !un(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Nn,
                    newValue: void 0,
                  })
                )
                  return null;
              t.name || (t.name = "ObservableObject.key"),
                (t.context = this.proxy_ || this.target_);
              var a = Un(e),
                l = {
                  configurable: !ct.safeDescriptors || this.isPlainObject_,
                  enumerable: !1,
                  get: a.get,
                  set: a.set,
                };
              if (n) {
                if (!Reflect.defineProperty(this.target_, e, l)) return !1;
              } else u(this.target_, e, l);
              this.values_.set(e, new We(t)),
                this.notifyPropertyAddition_(e, void 0);
            } finally {
              mt();
            }
            return !0;
          }),
          (t.delete_ = function (e, t) {
            if ((void 0 === t && (t = !1), !O(this.target_, e))) return !0;
            if (
              on(this) &&
              !un(this, {
                object: this.proxy_ || this.target_,
                name: e,
                type: jn,
              })
            )
              return null;
            try {
              var n, r;
              pt();
              var a,
                l = cn(this),
                o = this.values_.get(e),
                i = void 0;
              if (!o && l)
                i = null == (a = s(this.target_, e)) ? void 0 : a.value;
              if (t) {
                if (!Reflect.deleteProperty(this.target_, e)) return !1;
              } else delete this.target_[e];
              if (
                (o &&
                  (this.values_.delete(e),
                  o instanceof Ve && (i = o.value_),
                  vt(o)),
                this.keysAtom_.reportChanged(),
                null == (n = this.pendingKeys_) ||
                  null == (r = n.get(e)) ||
                  r.set(e in this.target_),
                l)
              ) {
                var u = {
                  type: jn,
                  observableKind: "object",
                  object: this.proxy_ || this.target_,
                  debugObjectName: this.name_,
                  oldValue: i,
                  name: e,
                };
                0, l && fn(this, u);
              }
            } finally {
              mt();
            }
            return !0;
          }),
          (t.observe_ = function (e, t) {
            return dn(this, e);
          }),
          (t.intercept_ = function (e) {
            return sn(this, e);
          }),
          (t.notifyPropertyAddition_ = function (e, t) {
            var n,
              r,
              a = cn(this);
            if (a) {
              var l = a
                ? {
                    type: Nn,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    name: e,
                    newValue: t,
                  }
                : null;
              0, a && fn(this, l);
            }
            null == (n = this.pendingKeys_) ||
              null == (r = n.get(e)) ||
              r.set(!0),
              this.keysAtom_.reportChanged();
          }),
          (t.ownKeys_ = function () {
            return this.keysAtom_.reportObserved(), P(this.target_);
          }),
          (t.keys_ = function () {
            return this.keysAtom_.reportObserved(), Object.keys(this.target_);
          }),
          e
        );
      })();
    function Bn(e, t) {
      var n;
      if (O(e, $)) return e;
      var r =
          null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
        a = new zn(
          e,
          new Map(),
          String(r),
          (function (e) {
            var t;
            return e ? (null != (t = e.defaultDecorator) ? t : he(e)) : void 0;
          })(t),
        );
      return _(e, $, a), e;
    }
    var Hn = x("ObservableObjectAdministration", zn);
    function Un(e) {
      return (
        Fn[e] ||
        (Fn[e] = {
          get: function () {
            return this[$].getObservablePropValue_(e);
          },
          set: function (t) {
            return this[$].setObservablePropValue_(e, t);
          },
        })
      );
    }
    function Vn(e) {
      return !!k(e) && Hn(e[$]);
    }
    function $n(e, t, n) {
      var r;
      null == (r = e.target_[H]) || delete r[n];
    }
    function Kn(e, t, n) {}
    var qn,
      Wn,
      Gn = Jn(0),
      Qn = 0,
      Yn = function () {};
    (qn = Yn),
      (Wn = Array.prototype),
      Object.setPrototypeOf
        ? Object.setPrototypeOf(qn.prototype, Wn)
        : void 0 !== qn.prototype.__proto__
        ? (qn.prototype.__proto__ = Wn)
        : (qn.prototype = Wn);
    var Xn = (function (e, t, n) {
      function r(t, n, r, a) {
        var l;
        void 0 === r && (r = "ObservableArray"),
          void 0 === a && (a = !1),
          (l = e.call(this) || this);
        var o = new gn(r, n, a, !0);
        if (((o.proxy_ = j(l)), S(j(l), $, o), t && t.length)) {
          var i = Be(!0);
          l.spliceWithArray(0, 0, t), He(i);
        }
        return Object.defineProperty(j(l), "0", Gn), l;
      }
      A(r, e);
      var a = r.prototype;
      return (
        (a.concat = function () {
          this[$].atom_.reportObserved();
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return Array.prototype.concat.apply(
            this.slice(),
            t.map(function (e) {
              return Cn(e) ? e.slice() : e;
            }),
          );
        }),
        (a[n] = function () {
          var e = this,
            t = 0;
          return ur({
            next: function () {
              return t < e.length
                ? { value: e[t++], done: !1 }
                : { done: !0, value: void 0 };
            },
          });
        }),
        L(r, [
          {
            key: "length",
            get: function () {
              return this[$].getArrayLength_();
            },
            set: function (e) {
              this[$].setArrayLength_(e);
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
    })(Yn, Symbol.toStringTag, Symbol.iterator);
    function Jn(e) {
      return {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this[$].get_(e);
        },
        set: function (t) {
          this[$].set_(e, t);
        },
      };
    }
    function Zn(e) {
      u(Xn.prototype, "" + e, Jn(e));
    }
    function er(e) {
      if (e > Qn) {
        for (var t = Qn; t < e + 100; t++) Zn(t);
        Qn = e;
      }
    }
    function tr(e, t, n) {
      return new Xn(e, t, n);
    }
    function nr(e, t) {
      if ("object" == typeof e && null !== e) {
        if (Cn(e)) return void 0 !== t && n(23), e[$].atom_;
        if (An(e)) return e[$];
        if (Mn(e)) {
          if (void 0 === t) return e.keysAtom_;
          var r = e.data_.get(t) || e.hasMap_.get(t);
          return r || n(25, t, ar(e)), r;
        }
        if (Vn(e)) {
          if (!t) return n(26);
          var a = e[$].values_.get(t);
          return a || n(27, t, ar(e)), a;
        }
        if (q(e) || Ge(e) || wt(e)) return e;
      } else if (y(e) && wt(e[$])) return e[$];
      n(28);
    }
    function rr(e, t) {
      return (
        e || n(29),
        void 0 !== t
          ? rr(nr(e, t))
          : q(e) || Ge(e) || wt(e) || Mn(e) || An(e)
          ? e
          : e[$]
          ? e[$]
          : void n(24, e)
      );
    }
    function ar(e, t) {
      var n;
      if (void 0 !== t) n = nr(e, t);
      else {
        if (Mt(e)) return e.name;
        n = Vn(e) || Mn(e) || An(e) ? rr(e) : nr(e);
      }
      return n.name_;
    }
    Object.entries(yn).forEach(function (e) {
      var t = e[0],
        n = e[1];
      "concat" !== t && _(Xn.prototype, t, n);
    }),
      er(1e3);
    var lr = c.toString;
    function or(e, t, n) {
      return void 0 === n && (n = -1), ir(e, t, n);
    }
    function ir(e, t, n, r, a) {
      if (e === t) return 0 !== e || 1 / e == 1 / t;
      if (null == e || null == t) return !1;
      if (e != e) return t != t;
      var l = typeof e;
      if ("function" !== l && "object" !== l && "object" != typeof t) return !1;
      var o = lr.call(e);
      if (o !== lr.call(t)) return !1;
      switch (o) {
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
      (e = sr(e)), (t = sr(t));
      var i = "[object Array]" === o;
      if (!i) {
        if ("object" != typeof e || "object" != typeof t) return !1;
        var s = e.constructor,
          u = t.constructor;
        if (
          s !== u &&
          !(y(s) && s instanceof s && y(u) && u instanceof u) &&
          "constructor" in e &&
          "constructor" in t
        )
          return !1;
      }
      if (0 === n) return !1;
      n < 0 && (n = -1), (a = a || []);
      for (var c = (r = r || []).length; c--; )
        if (r[c] === e) return a[c] === t;
      if ((r.push(e), a.push(t), i)) {
        if ((c = e.length) !== t.length) return !1;
        for (; c--; ) if (!ir(e[c], t[c], n - 1, r, a)) return !1;
      } else {
        var d,
          f = Object.keys(e);
        if (((c = f.length), Object.keys(t).length !== c)) return !1;
        for (; c--; )
          if (!O(t, (d = f[c])) || !ir(e[d], t[d], n - 1, r, a)) return !1;
      }
      return r.pop(), a.pop(), !0;
    }
    function sr(e) {
      return Cn(e)
        ? e.slice()
        : C(e) || Mn(e) || T(e) || An(e)
        ? Array.from(e.entries())
        : e;
    }
    function ur(e) {
      return (e[Symbol.iterator] = cr), e;
    }
    function cr() {
      return this;
    }
    if (
      (["Symbol", "Map", "Set"].forEach(function (e) {
        void 0 === o()[e] &&
          n("MobX requires global '" + e + "' to be available or polyfilled");
      }),
      "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
        __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
          spy: function (e) {
            return (
              console.warn("[mobx.spy] Is a no-op in production builds"),
              function () {}
            );
          },
          extras: { getDebugName: ar },
          $mobx: $,
        }),
      !e.useState)
    )
      throw new Error("mobx-react-lite requires React with Hooks support");
    if (
      !function (e, t, n) {
        var r = Bn(e, n)[$];
        pt();
        try {
          0,
            null != t ||
              (t = (function (e) {
                return O(e, H) || _(e, H, I({}, e[H])), e[H];
              })(e)),
            P(t).forEach(function (e) {
              return r.make_(e, t[e]);
            });
        } finally {
          mt();
        }
        return e;
      }
    )
      throw new Error(
        "mobx-react-lite@3 requires mobx at least version 6 to be available",
      );
    var dr = a(935);
    function fr(e) {
      e();
    }
    function hr(e) {
      return Vt(e);
    }
    var pr =
      "undefined" == typeof FinalizationRegistry
        ? void 0
        : FinalizationRegistry;
    function mr(e) {
      return {
        reaction: e,
        mounted: !1,
        changedBeforeMount: !1,
        cleanAt: Date.now() + gr,
      };
    }
    var gr = 1e4;
    var vr = function (e) {
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
    var yr = pr
        ? (function (e) {
            var t = new Map(),
              n = 1,
              r = new e(function (e) {
                var n = t.get(e);
                n && (n.reaction.dispose(), t.delete(e));
              });
            return {
              addReactionToTrack: function (e, a, l) {
                var o = n++;
                return (
                  r.register(l, o, e),
                  (e.current = mr(a)),
                  (e.current.finalizationRegistryCleanupToken = o),
                  t.set(o, e.current),
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
          })(pr)
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
                return (e.current = mr(r)), (l = e), t.add(l), n(), e.current;
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
                    for (var a = vr(t), l = a.next(); !l.done; l = a.next()) {
                      var o = l.value,
                        i = o.current;
                      i && (i.reaction.dispose(), (o.current = null));
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
      br = yr.addReactionToTrack,
      kr = yr.recordReactionAsCommitted,
      Er =
        (yr.resetCleanupScheduleForTests,
        yr.forceCleanupTimerToRunNowForTests,
        !1);
    function wr() {
      return Er;
    }
    var _r = function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        a,
        l = n.call(e),
        o = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = l.next()).done; )
          o.push(r.value);
      } catch (e) {
        a = { error: e };
      } finally {
        try {
          r && !r.done && (n = l.return) && n.call(l);
        } finally {
          if (a) throw a.error;
        }
      }
      return o;
    };
    function Sr(e) {
      return "observer".concat(e);
    }
    var xr = function () {};
    function Cr() {
      return new xr();
    }
    function Tr(t, n) {
      if ((void 0 === n && (n = "observed"), wr())) return t();
      var r = _r(e.useState(Cr), 1)[0],
        a = _r(e.useState(), 2)[1],
        l = function () {
          return a([]);
        },
        o = e.useRef(null);
      if (!o.current)
        var i = new yt(Sr(n), function () {
            s.mounted ? l() : (s.changedBeforeMount = !0);
          }),
          s = br(o, i, r);
      var u,
        c,
        d = o.current.reaction;
      if (
        (e.useDebugValue(d, hr),
        e.useEffect(function () {
          return (
            kr(o),
            o.current
              ? ((o.current.mounted = !0),
                o.current.changedBeforeMount &&
                  ((o.current.changedBeforeMount = !1), l()))
              : ((o.current = {
                  reaction: new yt(Sr(n), function () {
                    l();
                  }),
                  mounted: !0,
                  changedBeforeMount: !1,
                  cleanAt: 1 / 0,
                }),
                l()),
            function () {
              o.current.reaction.dispose(), (o.current = null);
            }
          );
        }, []),
        d.track(function () {
          try {
            u = t();
          } catch (e) {
            c = e;
          }
        }),
        c)
      )
        throw c;
      return u;
    }
    var Nr = "function" == typeof Symbol && Symbol.for,
      Pr = Nr
        ? Symbol.for("react.forward_ref")
        : "function" == typeof e.forwardRef &&
          (0, e.forwardRef)(function (e) {
            return null;
          }).$$typeof,
      Rr = Nr
        ? Symbol.for("react.memo")
        : "function" == typeof e.memo &&
          (0, e.memo)(function (e) {
            return null;
          }).$$typeof;
    function Or(t, n) {
      var r;
      if (Rr && t.$$typeof === Rr)
        throw new Error(
          "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
        );
      if (wr()) return t;
      var a =
          null !== (r = null == n ? void 0 : n.forwardRef) && void 0 !== r && r,
        l = t,
        o = t.displayName || t.name;
      if (
        Pr &&
        t.$$typeof === Pr &&
        ((a = !0), "function" != typeof (l = t.render))
      )
        throw new Error(
          "[mobx-react-lite] `render` property of ForwardRef was not a function",
        );
      var i,
        s,
        u = function (e, t) {
          return Tr(function () {
            return l(e, t);
          }, o);
        };
      return (
        "" !== o && (u.displayName = o),
        t.contextTypes && (u.contextTypes = t.contextTypes),
        a && (u = (0, e.forwardRef)(u)),
        (u = (0, e.memo)(u)),
        (i = t),
        (s = u),
        Object.keys(i).forEach(function (e) {
          Dr[e] ||
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e));
        }),
        u
      );
    }
    var Dr = {
      $$typeof: !0,
      render: !0,
      compare: !0,
      type: !0,
      displayName: !0,
    };
    function Mr(t, n) {
      return (0, e.useState)(function () {
        return Te(t(), n, { autoBind: !0 });
      })[0];
    }
    !(function (e) {
      e || (e = fr), Ht({ reactionScheduler: e });
    })(dr.unstable_batchedUpdates);
    var Lr = a(680),
      Ir = a(690),
      Ar = a.n(Ir),
      Fr = a(728),
      jr = a.n(Fr),
      zr = { managerInstances: {} };
    function Br(t, n) {
      var r = (function () {
          var t = (function () {
            function t(e, n) {
              Ar()(this, t),
                (this._id = e),
                (this._initCallback = n),
                (this._initialized = !1),
                (this._reactContext = null),
                (this._ReactContextProvider = null),
                (this._mobxStore = null);
            }
            return (
              jr()(t, [
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
                        ((this._reactContext = e.createContext(null)),
                        (this._ReactContextProvider =
                          this._reactContext.Provider),
                        (this._mobxStore = Mr(this._initCallback)),
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
                          ? ((this._mobxStore = Mr(this._initCallback)), this)
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
                      this._initIfNeeded(), e.useContext(this._reactContext)
                    );
                  },
                },
              ]),
              t
            );
          })();
          return t;
        })(),
        a = zr.managerInstances[t];
      return null == a
        ? ((zr.managerInstances[t] = new r(t, n)), zr.managerInstances[t])
        : (a._reset(n), a);
    }
    function Hr(e) {
      return zr.managerInstances[e] || null;
    }
    const Ur = function (t) {
      var n = t.initCallback,
        r = t.storeId,
        a = t.children,
        l = Br(r || "default", n).getProviderComponentAndValue(),
        o = l.Provider,
        i = l.value;
      return e.createElement(o, { value: i }, a);
    };
    var Vr = a(861),
      $r = a.n(Vr),
      Kr = a(544).isNoObject;
    const qr = function () {
      function e(e) {
        if (!Array.isArray(e) || e.some(Kr))
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
        this.basicBreadcrumbs = $r()(e);
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
            o = [];
          t(n) && t(r)
            ? o.push({ label: n, url: r })
            : (console.warn(
                "createBasicBreadcrumbs() did not get hostLabel and hostUrl, defaulting to www.kth.se and KTH",
              ),
              o.push({ label: "KTH", url: "https://www.kth.se" })),
            t(a) && t(l) && o.push({ label: a, url: l }),
            this.setBasicBreadcrumbs(o);
        },
        setLanguage: Ot(function (e) {
          this.language = e;
        }),
        setBrowserConfig: Ot(function (e) {
          this.browserConfig = e;
        }),
        setPaths: Ot(function (e) {
          this.paths = e;
        }),
        setBreadcrumbs: Ot(function (t) {
          e(t);
        }),
      };
    };
    const Wr = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "default",
        t = Hr(e),
        n = null == t;
      if (n) {
        var r = qr();
        return r;
      }
      return t.getContextHook();
    };
    var Gr = a(698),
      Qr = a.n(Gr);
    function Yr(e) {
      var t = encodeURIComponent(JSON.stringify(tn(e, new Map())));
      return 'window.__compressedApplicationStore__ = "'.concat(t, '";');
    }
    var Xr = a(745),
      Jr = a(655),
      Zr = a(250),
      ea = 0;
    var ta = {};
    function na(e) {
      return (
        ta[e] ||
          (ta[e] = (function (e) {
            if ("function" == typeof Symbol) return Symbol(e);
            var t = "__$mobx-react " + e + " (" + ea + ")";
            return ea++, t;
          })(e)),
        ta[e]
      );
    }
    function ra(e, t) {
      if (aa(e, t)) return !0;
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
        if (!Object.hasOwnProperty.call(t, n[a]) || !aa(e[n[a]], t[n[a]]))
          return !1;
      return !0;
    }
    function aa(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }
    function la(e, t, n) {
      Object.hasOwnProperty.call(e, t)
        ? (e[t] = n)
        : Object.defineProperty(e, t, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: n,
          });
    }
    var oa = na("patchMixins"),
      ia = na("patchedDefinition");
    function sa(e, t) {
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
        var o;
        return null != e && (o = e.apply(this, a)), o;
      } finally {
        t.locks--,
          0 === t.locks &&
            t.methods.forEach(function (e) {
              e.apply(n, a);
            });
      }
    }
    function ua(e, t) {
      return function () {
        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        sa.call.apply(sa, [this, e, t].concat(r));
      };
    }
    function ca(e, t, n) {
      var r = (function (e, t) {
        var n = (e[oa] = e[oa] || {}),
          r = (n[t] = n[t] || {});
        return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
      })(e, t);
      r.methods.indexOf(n) < 0 && r.methods.push(n);
      var a = Object.getOwnPropertyDescriptor(e, t);
      if (!a || !a[ia]) {
        var l = e[t],
          o = da(e, t, a ? a.enumerable : void 0, r, l);
        Object.defineProperty(e, t, o);
      }
    }
    function da(e, t, n, r, a) {
      var l,
        o = ua(a, r);
      return (
        ((l = {})[ia] = !0),
        (l.get = function () {
          return o;
        }),
        (l.set = function (a) {
          if (this === e) o = ua(a, r);
          else {
            var l = da(this, t, n, r, a);
            Object.defineProperty(this, t, l);
          }
        }),
        (l.configurable = !0),
        (l.enumerable = n),
        l
      );
    }
    var fa = $ || "$mobx",
      ha = na("isMobXReactObserver"),
      pa = na("isUnmounted"),
      ma = na("skipRender"),
      ga = na("isForcingUpdate");
    function va(t) {
      var n = t.prototype;
      if (t[ha]) {
        var r = ya(n);
        console.warn(
          "The provided component class (" +
            r +
            ")\n                has already been declared as an observer component.",
        );
      } else t[ha] = !0;
      if (n.componentWillReact)
        throw new Error(
          "The componentWillReact life-cycle event is no longer supported",
        );
      if (t.__proto__ !== e.PureComponent)
        if (n.shouldComponentUpdate) {
          if (n.shouldComponentUpdate !== ka)
            throw new Error(
              "It is not allowed to use shouldComponentUpdate in observer based components.",
            );
        } else n.shouldComponentUpdate = ka;
      Ea(n, "props"), Ea(n, "state"), t.contextType && Ea(n, "context");
      var a = n.render;
      if ("function" != typeof a) {
        var l = ya(n);
        throw new Error(
          "[mobx-react] class component (" +
            l +
            ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
        );
      }
      return (
        (n.render = function () {
          return (this.render = wr() ? a : ba.call(this, a)), this.render();
        }),
        ca(n, "componentDidMount", function () {
          (this[pa] = !1),
            this.render[fa] || e.Component.prototype.forceUpdate.call(this);
        }),
        ca(n, "componentWillUnmount", function () {
          if (!wr()) {
            var e = this.render[fa];
            if (e) e.dispose(), (this.render[fa] = null);
            else {
              var t = ya(this);
              console.warn(
                "The reactive render of an observer class component (" +
                  t +
                  ")\n                was overridden after MobX attached. This may result in a memory leak if the\n                overridden reactive render was not properly disposed.",
              );
            }
            this[pa] = !0;
          }
        }),
        t
      );
    }
    function ya(e) {
      return (
        e.displayName ||
        e.name ||
        (e.constructor && (e.constructor.displayName || e.constructor.name)) ||
        "<component>"
      );
    }
    function ba(t) {
      var n = this;
      la(this, ma, !1), la(this, ga, !1);
      var r = ya(this),
        a = t.bind(this),
        l = !1;
      return function t() {
        var o;
        l = !1;
        var i =
            null != (o = t[fa])
              ? o
              : (t[fa] = (function () {
                  var t = new yt(r + ".render()", function () {
                    if (!l && ((l = !0), !0 !== n[pa])) {
                      var r = !0;
                      try {
                        la(n, ga, !0),
                          n[ma] || e.Component.prototype.forceUpdate.call(n),
                          (r = !1);
                      } finally {
                        la(n, ga, !1),
                          r && (t.dispose(), (n.render[fa] = null));
                      }
                    }
                  });
                  return (t.reactComponent = n), t;
                })()),
          s = void 0,
          u = void 0;
        if (
          (i.track(function () {
            try {
              u = ze(!1, a);
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
    function ka(e, t) {
      return (
        wr() &&
          console.warn(
            "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
          ),
        this.state !== t || !ra(this.props, e)
      );
    }
    function Ea(e, t) {
      var n = na("reactProp_" + t + "_valueHolder"),
        r = na("reactProp_" + t + "_atomHolder");
      function a() {
        return this[r] || la(this, r, W("reactive " + t)), this[r];
      }
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var e = !1;
          return (
            at && lt && (e = at(!0)),
            a.call(this).reportObserved(),
            at && lt && lt(e),
            this[n]
          );
        },
        set: function (e) {
          this[ga] || ra(this[n], e)
            ? la(this, n, e)
            : (la(this, n, e),
              la(this, ma, !0),
              a.call(this).reportChanged(),
              la(this, ma, !1));
        },
      });
    }
    function wa(t) {
      return (
        !0 === t.isMobxInjector &&
          console.warn(
            "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
          ),
        Object.prototype.isPrototypeOf.call(e.Component, t) ||
        Object.prototype.isPrototypeOf.call(e.PureComponent, t)
          ? va(t)
          : Or(t)
      );
    }
    if (!e.Component)
      throw new Error("mobx-react requires React to be available");
    if (!Te) throw new Error("mobx-react requires mobx to be available");
    var _a = a(750),
      Sa = a.n(_a),
      xa = a(424),
      Ca = a.n(xa);
    const Ta = function () {
        var t = (0, e.useState)(!1),
          n = Ca()(t, 2),
          r = n[0],
          a = n[1],
          l = (0, e.useRef)(null),
          o = function () {
            return a(!0);
          },
          i = function () {
            return a(!1);
          };
        return (
          (0, e.useEffect)(
            function () {
              var e = l.current;
              if (e)
                return (
                  e.addEventListener("mouseover", o),
                  e.addEventListener("mouseout", i),
                  function () {
                    e.removeEventListener("mouseover", o),
                      e.removeEventListener("mouseout", i);
                  }
                );
            },
            [l.current],
          ),
          [l, r]
        );
      },
      Na = function (t) {
        var n = t.snippet,
          r = (0, e.useState)(!1),
          a = Ca()(r, 2),
          l = a[0],
          o = a[1],
          i = Ta(),
          s = Ca()(i, 2),
          u = s[0],
          c = s[1];
        if (!n) return null;
        var d = function () {
          return e.createElement(
            "div",
            { className: "tooltip bs-tooltip-bottom code-snippet__tooltip" },
            e.createElement("div", { className: "arrow" }),
            e.createElement(
              "div",
              { className: "tooltip-inner" },
              l ? "Copied!" : "Copy to clipboard",
            ),
          );
        };
        return (
          !c && l && o(!1),
          e.createElement(
            "div",
            { className: "code-snippet" },
            e.createElement(
              "div",
              { className: "code-snippet__container" },
              e.createElement(
                "pre",
                null,
                e.createElement("code", { className: "language-html" }, n),
              ),
              e.createElement(
                "div",
                { className: "code-snippet__btn-container", ref: u },
                e.createElement(
                  "button",
                  {
                    type: "button",
                    className: "btn",
                    onClick: function () {
                      (document.oncopy = function (e) {
                        var t = n.replace(/^\$/g, "");
                        e.clipboardData.setData("text/plain", t),
                          e.preventDefault(),
                          (document.oncopy = void 0);
                      }),
                        document.execCommand("copy"),
                        o(!0);
                    },
                  },
                  "Copy",
                ),
                c ? e.createElement(d, null) : null,
              ),
            ),
          )
        );
      };
    var Pa = function (t) {
        var n = t.type,
          r = t.disabled,
          a = t.children,
          l = t.block,
          o = t.icon,
          i = l
            ? "btn btn-".concat(n).concat(o ? " " + o : "", " btn-block")
            : "btn btn-".concat(n).concat(o ? " " + o : "");
        return e.createElement(
          "button",
          { type: "button", className: i, disabled: r },
          a,
        );
      },
      Ra = function () {
        return e.createElement(
          "main",
          { id: "mainContent", className: "mainContent" },
          e.createElement("h1", null, "Buttons"),
          e.createElement(
            "p",
            null,
            "Read the guidelines for the use of buttons in the",
            " ",
            e.createElement(
              "a",
              {
                href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/knappar-och-\nlankar-1.952154",
              },
              "KTH Style guide",
            ),
            " ",
            "at the KTH Intranet (Information in Swedish).",
          ),
          e.createElement(
            "div",
            { className: "itemContainer" },
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Primary button"),
              e.createElement(Pa, { type: "primary" }, "Primary"),
              e.createElement(Na, {
                snippet: '<button class="btn btn-primary">Primary</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Ok button"),
              e.createElement(Pa, { type: "success" }, "Save"),
              e.createElement(Na, {
                snippet: '<button class="btn btn-success">Save</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Secondary button"),
              e.createElement(Pa, { type: "secondary" }, "Secondary"),
              e.createElement(Na, {
                snippet: '<button class="btn btn-secondary">Secondary</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Danger button"),
              e.createElement(Pa, { type: "danger" }, "Delete"),
              e.createElement(Na, {
                snippet: '<button class="btn btn-danger">Delete</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Go-to button"),
              e.createElement(Pa, { type: "primary", icon: "next" }, "Go to"),
              e.createElement(Na, {
                snippet:
                  ' <button type="button" class="btn btn-primary next">Go to</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Previous button"),
              e.createElement(
                Pa,
                { type: "secondary", icon: "back" },
                "Previous",
              ),
              e.createElement(Na, {
                snippet:
                  '<button class="btn btn-secondary back">Previous</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Next button"),
              e.createElement(Pa, { type: "success", icon: "next" }, "Next"),
              e.createElement(Na, {
                snippet: '<button class="btn btn-success next">Next</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Disabled button"),
              e.createElement(
                Pa,
                { type: "primary", disabled: !0 },
                "Primary button",
              ),
              e.createElement(Na, {
                snippet:
                  '<button class="btn btn-primary" disabled>Disabled button</button>',
              }),
            ),
            e.createElement(
              "div",
              null,
              e.createElement("h2", null, "Block level buttons"),
              e.createElement(
                Pa,
                { type: "primary", block: !0 },
                "Block level button",
              ),
              e.createElement(Na, {
                snippet:
                  '<button class="btn btn-primary btn-block">Block level button</button>',
              }),
              e.createElement(
                Pa,
                { type: "secondary", block: !0 },
                "Block level button",
              ),
              e.createElement(Na, {
                snippet:
                  '<button class="btn btn-secondary btn-block">Block level button</button>',
              }),
            ),
          ),
        );
      };
    const Oa = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(Ra, null));
    });
    var Da = function () {
        return e.createElement(
          "table",
          { className: "table" },
          e.createElement("caption", null, "Optional Table Caption"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "#"),
              e.createElement("th", { scope: "col" }, "Col 1"),
              e.createElement("th", { scope: "col" }, "Col 2"),
              e.createElement("th", { scope: "col" }, "Col 3"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "row" }, "1"),
              e.createElement("td", null, "Lorem ipsum"),
              e.createElement("td", null, "Dolor sit amet"),
              e.createElement("td", null, "Consectetur adipiscing elit"),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "row" }, "2"),
              e.createElement("td", null, "Lorem ipsum"),
              e.createElement("td", null, "Dolor sit amet"),
              e.createElement("td", null, "Consectetur adipiscing elit"),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "row" }, "3"),
              e.createElement("td", null, "Lorem ipsum"),
              e.createElement("td", null, "Dolor sit amet"),
              e.createElement("td", null, "Consectetur adipiscing elit"),
            ),
          ),
        );
      },
      Ma = function () {
        return e.createElement(
          "main",
          { id: "mainContent", className: "mainContent" },
          e.createElement("h1", null, "Tabeller"),
          e.createElement(
            "p",
            null,
            "Read the guidelines for the use of tables in the",
            " ",
            e.createElement(
              "a",
              {
                href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/tabeller-1.1005514",
              },
              "KTH Style guide",
            ),
            " ",
            "at the KTH Intranet (Information in Swedish).",
          ),
          e.createElement(Da, null),
          e.createElement(Na, {
            snippet:
              '<table class="table">\n  <caption>Optional Table Caption</caption>\n  <thead>\n    <tr>\n      <th scope="col">#</th>\n      <th scope="col">Col 1</th>\n      <th scope="col">Col 2</th>\n      <th scope="col">Col 3</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">1</th>\n      <td>Lorem ipsum</td>\n      <td>Dolor sit amet</td>\n      <td>Consectetur adipiscing elit</td>\n    </tr>\n    <tr>\n      <th scope="row">2</th>\n      <td>Lorem ipsum</td>\n      <td>Dolor sit amet</td>\n      <td>Consectetur adipiscing elit</td>\n    </tr>\n    <tr>\n      <th scope="row">3</th>\n      <td>Lorem ipsum</td>\n      <td>Dolor sit amet</td>\n      <td>Consectetur adipiscing elit</td>\n    </tr>\n  </tbody>\n</table>',
          }),
        );
      };
    const La = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(Ma, null));
    });
    var Ia = function (t) {
        var n = t.code,
          r = t.displayName,
          a = { backgroundColor: n };
        return e.createElement(
          "div",
          { className: "itemBox" },
          e.createElement("div", { className: "colorBox", style: a }),
          e.createElement("div", null, r),
          e.createElement("div", null, n),
        );
      },
      Aa = function () {
        var t = [
            { displayName: "$grey", code: "#65656c" },
            { displayName: "$blue", code: "#007fae" },
            { displayName: "$green", code: "#62922e" },
            { displayName: "$pink", code: "#d02f80" },
          ].map(function (t) {
            return e.createElement(Ia, {
              displayName: t.displayName,
              key: t.displayName,
              code: t.code,
            });
          }),
          n = [
            { displayName: "$white", code: "#fff" },
            { displayName: "$lightGrey", code: "#f6f6f6" },
          ].map(function (t) {
            return e.createElement(Ia, {
              displayName: t.displayName,
              key: t.displayName,
              code: t.code,
            });
          }),
          r = [
            { displayName: "$infoYellow", code: "#fcf8e3" },
            { displayName: "$infoYellowIcon", code: "#fab919" },
          ].map(function (t) {
            return e.createElement(Ia, {
              displayName: t.displayName,
              key: t.displayName,
              code: t.code,
            });
          }),
          a = [{ displayName: "$infoGreen", code: "#dff0d8" }].map(
            function (t) {
              return e.createElement(Ia, {
                displayName: t.displayName,
                key: t.displayName,
                code: t.code,
              });
            },
          ),
          l = [
            { displayName: "$infoRed", code: "#f2dede" },
            { displayName: "$red", code: "#d4351c" },
          ].map(function (t) {
            return e.createElement(Ia, {
              displayName: t.displayName,
              key: t.displayName,
              code: t.code,
            });
          }),
          o = [
            { displayName: "$blueHover", code: "#006388" },
            { displayName: "$greenHover", code: "#4e7425" },
            { displayName: "$redHover", code: "#b52c17" },
          ].map(function (t) {
            return e.createElement(Ia, {
              displayName: t.displayName,
              key: t.displayName,
              code: t.code,
            });
          }),
          i = [
            { displayName: "$black", code: "#000" },
            { displayName: "$white", code: "#fff" },
            { displayName: "$linkBlue", code: "#006cb7" },
          ].map(function (t) {
            return e.createElement(Ia, {
              displayName: t.displayName,
              key: t.displayName,
              code: t.code,
            });
          }),
          s = [
            { displayName: "$borderGrey", code: "#d4d4d4" },
            { displayName: "$grey", code: "#65656c" },
          ].map(function (t) {
            return e.createElement(Ia, {
              displayName: t.displayName,
              key: t.displayName,
              code: t.code,
            });
          });
        return e.createElement(
          "main",
          { id: "mainContent", className: "mainContent" },
          e.createElement("h1", null, "Colors"),
          e.createElement(
            "p",
            null,
            "Read the guidelines for the use of colors in the",
            " ",
            e.createElement(
              "a",
              {
                href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/farger-\n1.952147",
              },
              "KTH Style guide",
            ),
            " ",
            "at the KTH Intranet (Information in Swedish).",
          ),
          e.createElement("h2", null, "Dark background"),
          e.createElement("div", { className: "gridItemContainer" }, t),
          e.createElement("h2", null, "Light background"),
          e.createElement("div", { className: "gridItemContainer" }, n),
          e.createElement("h2", null, "Information and alert"),
          e.createElement("div", { className: "gridItemContainer" }, r),
          e.createElement("h2", null, "Success"),
          e.createElement("div", { className: "gridItemContainer" }, a),
          e.createElement("h2", null, "Error"),
          e.createElement("div", { className: "gridItemContainer" }, l),
          e.createElement("h2", null, "Hover"),
          e.createElement("div", { className: "gridItemContainer" }, o),
          e.createElement("h2", null, "Text"),
          e.createElement("div", { className: "gridItemContainer" }, i),
          e.createElement("h2", null, "Border"),
          e.createElement("div", { className: "gridItemContainer" }, s),
        );
      };
    const Fa = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(Aa, null));
    });
    var ja = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Icons"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of icons in the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/ikoner-\n1.962665",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Alerts, Information"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/error-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/error-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/success-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/success-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/information-black.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/information-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/open-modal-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/open-modal-blue.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Navigation, search"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/search-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/search-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/arrow-next-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-next-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-next-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/arrow-back-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-back-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-back-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/arrow-expand-black.svg",
                  alt: "",
                  height: "14",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-expand-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-expand-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-expand-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/arrow-collapse-black.svg",
                  alt: "",
                  width: "14",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-collapse-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-collapse-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-collapse-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/arrow-up-down-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-up-down-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-up-down-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/arrow-maximize-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-maximize-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/arrow-minimize-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/arrow-minimize-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/menu-black.svg",
                  alt: "",
                  width: "32",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/menu-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/link-black.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/link-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/link-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/open-window-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/open-window-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/open-window-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/open-window-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/close-black.svg",
                  alt: "",
                  width: "14",
                  height: "14",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/close-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/close-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/back-to-top-blue.svg",
                  alt: "",
                  width: "42",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/back-to-top-blue.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Table"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                { className: "whiteIconCell" },
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/sort-ascending-white.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/sort-ascending-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                { className: "whiteIconCell" },
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/sort-descending-white.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/sort-descending-white.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Pagination"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/page-first-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/page-first-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/gallery-back-black.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/gallery-back-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/gallery-next-black.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/gallery-next-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/gallery-active-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/gallery-active-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/gallery-passive-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/gallery-passive-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/page-last-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/page-last-black.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Media"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/gallery-pause-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/gallery-pause-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/gallery-play-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/gallery-play-black.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Document, files"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/folder-blue.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/folder-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/folder-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/file-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/file-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/file-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/text-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/text-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/text-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/image-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/image-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/image-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/audio-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/audio-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/audio-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/video-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/video-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/video-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/code-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/code-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/code-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/download-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/download-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/download-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/upload-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/upload-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/upload-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/doc-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/doc-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/doc-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/xls-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/xls-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/xls-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/ppt-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/ppt-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/ppt-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/pdf-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/pdf-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/pdf-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/compressed-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/compressed-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/compressed-white.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Language"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/language-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/language-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/language-white.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Edit, form"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/edit-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/edit-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/delete-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/delete-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/copy-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/copy-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/calculate-blue.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/calculate-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/settings-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/settings-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/print-blue.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/print-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/favorite-active-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/favorite-active-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/favorite-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/favorite-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/date-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/date-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/date-blue.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/date-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/asterisk-black.svg",
                  alt: "",
                  height: "10",
                  width: "10",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/asterisk-black.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/eye-black.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/eye-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/eye-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/eye-off-black.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/eye-off-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/eye-off-blue.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Social, users"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/thumb-up-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/thumb-up-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/thumb-down-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/thumb-down-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/quote-black.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/quote-black.svg)",
                ),
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/quote-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                { className: "whiteIconCell" },
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/notification-white.svg",
                  alt: "",
                  height: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/notification-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                { className: "whiteIconCell" },
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/message-white.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/message-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                { className: "whiteIconCell" },
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/email-white.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/email-white.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/user-management-blue.svg",
                  alt: "",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/user-management-blue.svg)",
                ),
              ),
            ),
          ),
        ),
        e.createElement(
          "table",
          { className: "table iconsTable" },
          e.createElement("caption", null, "Other"),
          e.createElement(
            "thead",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement("th", { scope: "col" }, "Icon"),
              e.createElement("th", { scope: "col" }, "Path"),
            ),
          ),
          e.createElement(
            "tbody",
            null,
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/scale-blue.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/scale-blue.svg)",
                ),
              ),
            ),
            e.createElement(
              "tr",
              null,
              e.createElement(
                "td",
                null,
                e.createElement("img", {
                  src: "/style/static/kth-style/img/kth-style/icons/check-black.svg",
                  alt: "",
                  height: "20",
                  width: "20",
                }),
              ),
              e.createElement(
                "td",
                null,
                e.createElement(
                  "pre",
                  null,
                  "url(/style/static/kth-style/img/kth-style/icons/check-black.svg)",
                ),
              ),
            ),
          ),
        ),
      );
    };
    const za = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(ja, null));
    });
    var Ba = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Structure and layout"),
        e.createElement(
          "p",
          null,
          "See the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/struktur-och-layout",
            },
            "KTH Style guide",
          ),
          " ",
          "for guidance on how different parts of the pages should look like and what they should contain.",
        ),
        e.createElement(
          "p",
          null,
          "The guidelines help you set a proper page layout and structure your content. Here you will find specified size of margins and columns, concept for navigation, responsive behavior, and other overall basics on styling web aplications at KTH.",
        ),
        e.createElement(
          "p",
          null,
          "And do not miss the parts that concern the elements required for the pages to be accessible!",
        ),
      );
    };
    const Ha = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(Ba, null));
    });
    var Ua = function (t) {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Typography"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of different text formats in the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/rubriker-och-\nbrodtext-1.952152",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "p",
          null,
          "The Sass mixins which is listed below is only needed if you want the styling on a different element than the element here. For example: ",
          e.createElement("code", null, "p { @include t4; }"),
          " will give the paragraph element the h4 styling. Mixins could also be used instead of the class names below. No classes nor mixins is required for standard elements like h1,h2,h3,h4 and p. Just for some variants of these.",
        ),
        e.createElement("h2", null, "Headings"),
        e.createElement(
          "div",
          { className: "itemContainer" },
          e.createElement(
            "div",
            { className: "itemBox typographyItem border" },
            e.createElement("h1", { className: "t1" }, "H1 heading"),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                "<h1></h1>",
              ),
            ),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "Sass: "),
              e.createElement("code", null, "h1 ", "{ @include t1; }"),
            ),
          ),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border" },
            e.createElement(
              "header",
              { role: "presentation" },
              e.createElement(
                "h1",
                {
                  id: "page-heading",
                  "aria-labelledby": "page-heading page-sub-heading",
                },
                "Headline",
              ),
              e.createElement(
                "p",
                { id: "page-sub-heading", "aria-hidden": "true" },
                "Subheading that clarifies the main heading",
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<header role="presentation">\n  <h1 id="page-heading" aria-labelledby="page-heading page-sub-heading">Headline</h1>\n  <p id="page-sub-heading" aria-hidden="true">Sub headline</p>\n</header>',
            }),
          ),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border no-top-pad" },
            e.createElement("h2", { className: "t2" }, "H2 heading"),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                "<h2></h2>",
              ),
            ),
          ),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border" },
            e.createElement("h2", { className: "t24" }, "H2 sub block"),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                "<h2></h2>",
              ),
            ),
          ),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border no-top-pad" },
            e.createElement("h3", { className: "t3" }, "H3 heading"),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                "<h3></h3>",
              ),
            ),
          ),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border no-top-pad" },
            e.createElement("h4", { className: "t4" }, "H4 heading"),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                "<h4></h4>",
              ),
            ),
          ),
          e.createElement("h2", { className: "t2" }, "Paragraphs"),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border" },
            e.createElement(
              "div",
              { className: "paragraphs" },
              e.createElement(
                "p",
                null,
                "P body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              ),
            ),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                '<div class="paragraphs"><p></p></div>',
              ),
            ),
          ),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border" },
            e.createElement(
              "p",
              { className: "t11" },
              "P short text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                "<p></p>",
              ),
            ),
          ),
          e.createElement(
            "div",
            { className: "itemBox typographyItem border" },
            e.createElement(
              "p",
              { className: "lead" },
              "P lead text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ),
            e.createElement(
              "p",
              null,
              e.createElement("strong", null, "HTML: "),
              e.createElement(
                "code",
                { className: "language-html" },
                '<p class="lead"></p>',
              ),
            ),
          ),
        ),
      );
    };
    const Va = wa(function () {
        return e.createElement(e.Fragment, null, e.createElement(Ua, null));
      }),
      $a = function (t) {
        var n = t.title,
          r = t.className,
          a = t.children,
          l = t.color;
        return e.createElement(
          "details",
          null,
          e.createElement(
            "summary",
            { className: "".concat(l || "blue").concat(r ? " " + r : "") },
            n,
          ),
          a,
        );
      };
    var Ka = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Collapse"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of collapse elements in the",
          " ",
          e.createElement(
            "a",
            {
              href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/collapse-\n1.963801",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "p",
          null,
          "Collapse elements show / hides an area with content. Here do we show three examples, one based on a react component and the other two are based on native HTML.",
        ),
        e.createElement("h2", null, "Collapse based on a React component"),
        e.createElement(
          "p",
          null,
          "This example is based on a React component. The component takes the following properties: title, className, children and color.",
        ),
        e.createElement(
          $a,
          { title: "Collapse example (React)" },
          e.createElement(
            "p",
            null,
            "This is some text inside the collapse element",
          ),
        ),
        e.createElement(Na, {
          snippet:
            '<details>\n  <summary class="blue">Collapse example (React)</summary>\n  <p>This is some text inside the collapse element</p>\n</details>',
        }),
        e.createElement("h2", null, "Collapse example blue (Native HTML)"),
        e.createElement(
          "details",
          null,
          e.createElement(
            "summary",
            { className: "blue" },
            "Collapse example blue (Native HTML)",
          ),
          e.createElement(
            "ul",
            { className: "link-list" },
            e.createElement(
              "li",
              null,
              e.createElement(
                "a",
                { href: "https://www.kth.se" },
                "This is a link in a list",
              ),
            ),
            e.createElement(
              "li",
              null,
              e.createElement(
                "a",
                { href: "https://www.kth.se" },
                "This is a link in a list",
              ),
            ),
            e.createElement(
              "li",
              null,
              e.createElement(
                "a",
                { href: "https://www.kth.se" },
                "This is a link in a list",
              ),
            ),
            e.createElement(
              "li",
              null,
              e.createElement(
                "a",
                { href: "https://www.kth.se" },
                "This is a link in a list",
              ),
            ),
          ),
          e.createElement(
            "p",
            null,
            "This is some text inside the collapse element",
          ),
        ),
        e.createElement(Na, {
          snippet:
            '<details>\n  <summary class="blue">Collapse example (Native HTML)</summary>\n  <p>This is some text inside the collapse element</p>\n</details>',
        }),
        e.createElement("h2", null, "Collapse example white (Native HTML)"),
        e.createElement(
          "details",
          null,
          e.createElement(
            "summary",
            { className: "white" },
            "Collapse example white (Native HTML)",
          ),
          e.createElement(
            "p",
            null,
            "This is some text inside the collapse element",
          ),
        ),
        e.createElement(Na, {
          snippet:
            '<details>\n  <summary class="white">Collapse example (Native HTML)</summary>\n  <p>This is some text inside the collapse element</p>\n</details>',
        }),
      );
    };
    const qa = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(Ka, null));
    });
    var Wa = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Forms"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of forms and their elements in the",
          " ",
          e.createElement(
            "a",
            {
              href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/formular-\n1.952156",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "div",
          { className: "itemContainer" },
          e.createElement(
            "div",
            { className: "form" },
            e.createElement("h2", null, "Form controls"),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleInputText1",
                  },
                  "Text input",
                ),
                e.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "exampleInputText1",
                }),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="yourElementId">Text input</label>\n    <input type="text" class="form-control" id="yourElementId"></input>\n  </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleInputNumber",
                  },
                  "Number input",
                ),
                e.createElement("input", {
                  type: "number",
                  className: "form-control",
                  id: "exampleInputNumber",
                }),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleInputNumber">Number input</label>\n    <input type="number" class="form-control" id="exampleInputNumber"></input>\n  </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleInputDate",
                  },
                  "Date input",
                ),
                e.createElement("input", {
                  type: "date",
                  className: "form-control",
                  id: "exampleInputDate",
                }),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleInputDate">Dte input</label>\n    <input type="date" class="form-control" id="exampleInputDate"></input>\n  </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleInputPassword1",
                  },
                  "Password",
                ),
                e.createElement("input", {
                  type: "password",
                  className: "form-control",
                  id: "exampleInputPassword1",
                  placeholder: "Password",
                }),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleInputPassword1">Password</label>\n    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>\n  </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleFormControlInput1",
                  },
                  "Email address",
                ),
                e.createElement("input", {
                  type: "email",
                  className: "form-control",
                  id: "exampleFormControlInput1",
                  placeholder: "name@example.com",
                }),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="yourElementId">Email address</label>\n    <input type="email" class="form-control" id="yourElementId" placeholder="name@example.com"></input>\n  </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleFormControlSelect1",
                  },
                  "Select",
                ),
                e.createElement(
                  "select",
                  {
                    defaultValue: "undefined",
                    className: "form-select",
                    id: "exampleFormControlSelect1",
                    "aria-label": "Välj något",
                  },
                  e.createElement("option", { value: "undefined" }, "Välj..."),
                  e.createElement("option", null, "1"),
                  e.createElement("option", null, "2"),
                  e.createElement("option", null, "3"),
                ),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="exampleFormControlSelect1">Example select</label>\n    <select class="form-select" id="exampleFormControlSelect1" aria-label="Välj något">\n      <option selected>Välj...</option>\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n    </select>\n  </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleFormControlTextarea1",
                  },
                  "Textarea",
                ),
                e.createElement("textarea", {
                  className: "form-control",
                  id: "exampleFormControlTextarea1",
                  rows: "3",
                }),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <div class="form-group">\n    <label class="form-control-label" for="yourElementId">Example textarea</label>\n    <textarea class="form-control" id="yourElementId" rows="3"></textarea>\n  </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleFormControlCheckboxes",
                  },
                  "Checkboxes",
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "checkbox",
                    className: "form-check-input",
                    id: "exampleCheck1",
                  }),
                  e.createElement(
                    "label",
                    {
                      className: "form-control-label",
                      htmlFor: "exampleCheck1",
                    },
                    "Check me out",
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "checkbox",
                    className: "form-check-input",
                    id: "exampleCheck2",
                  }),
                  e.createElement(
                    "label",
                    {
                      className: "form-control-label",
                      htmlFor: "exampleCheck2",
                    },
                    "Check me out",
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "checkbox",
                    className: "form-check-input",
                    id: "exampleCheck3",
                  }),
                  e.createElement(
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
            e.createElement(Na, {
              snippet:
                '<form>\n    <div className="form-group">\n      <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">\n        Checkboxes\n      </label>\n      <div class="form-check form-group">\n        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>\n        <label class="form-control-label" for="exampleCheck1">Check me out</label>\n      </div>\n      <div class="form-check form-group">\n        <input type="checkbox" class="form-check-input" id="exampleCheck2"></input>\n        <label class="form-control-label" for="exampleCheck2">Check me out</label>\n      </div>\n      <div class="form-check form-group">\n        <input type="checkbox" class="form-check-input" id="exampleCheck3"></input>\n        <label class="form-control-label" for="exampleCheck3">Check me out</label>\n      </div>\n    </div>\n</form>',
            }),
            e.createElement(
              "form",
              null,
              e.createElement(
                "div",
                { className: "form-group" },
                e.createElement(
                  "label",
                  {
                    className: "form-control-label",
                    htmlFor: "exampleFormControlRadioButtons",
                  },
                  "Radio buttons",
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "radio",
                    className: "form-check-input",
                    name: "example2",
                    value: "Option 1",
                    id: "exampleRadios1",
                  }),
                  e.createElement(
                    "label",
                    {
                      className: "form-control-label",
                      htmlFor: "exampleRadios1",
                    },
                    "Option 1",
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "radio",
                    className: "form-check-input",
                    name: "example2",
                    value: "Option 2",
                    id: "exampleRadios2",
                  }),
                  e.createElement(
                    "label",
                    {
                      className: "form-control-label",
                      htmlFor: "exampleRadios2",
                    },
                    "Option 2",
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "radio",
                    className: "form-check-input",
                    name: "example2",
                    value: "Option 3",
                    id: "exampleRadios3",
                  }),
                  e.createElement(
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
            e.createElement(Na, {
              snippet:
                '<form>\n  <div className="form-group">\n    <label className="form-control-label" htmlFor="exampleFormControlRadioButtons">\n      Radio buttons\n    </label>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example2" value="Option 1" id="exampleRadios1"/>\n      <label class="form-control-label" for="exampleRadios1">Option 1</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example2" value="Option 2" id="exampleRadios2"/>\n      <label class="form-control-label" for="exampleRadios2">Option 2</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example2" value="Option 3" id="exampleRadios3"/>\n      <label class="form-control-label" for="exampleRadios3">Option 3</label>\n    </div>\n  </div>\n</form>',
            }),
            e.createElement(
              "h2",
              null,
              "Group related elements with fieldset and legend tags",
            ),
            e.createElement(
              "form",
              null,
              e.createElement(
                "fieldset",
                null,
                e.createElement(
                  "legend",
                  null,
                  "Choose one of the following options",
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "radio",
                    className: "form-check-input",
                    name: "example3",
                    value: "Option 1",
                    id: "radio1",
                  }),
                  e.createElement(
                    "label",
                    { className: "form-control-label", htmlFor: "radio1" },
                    "Option 1",
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "radio",
                    className: "form-check-input",
                    name: "example3",
                    value: "Option 2",
                    id: "radio2",
                  }),
                  e.createElement(
                    "label",
                    { className: "form-control-label", htmlFor: "radio2" },
                    "Option 2",
                  ),
                ),
                e.createElement(
                  "div",
                  { className: "form-check form-group" },
                  e.createElement("input", {
                    type: "radio",
                    className: "form-check-input",
                    name: "example3",
                    value: "Option 3",
                    id: "radio3",
                  }),
                  e.createElement(
                    "label",
                    { className: "form-control-label", htmlFor: "radio3" },
                    "Option 3",
                  ),
                ),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<form>\n  <fieldset>\n    <legend>Choose one of the following options</legend>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example3" value="Option 1" id="radio1"/>\n      <label class="form-control-label" for="radio1">Option 1</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example3" value="Option 2" id="radio2"/>\n      <label class="form-control-label" for="radio2">Option 2</label>\n    </div>\n    <div class="form-check form-group">\n      <input type="radio" class="form-check-input" name="example3" value="Option 3" id="radio3"/>\n      <label class="form-control-label" for="radio3">Option 3</label>\n    </div>\n  </fieldset>\n</form>',
            }),
          ),
        ),
      );
    };
    const Ga = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(Wa, null));
    });
    var Qa = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "How to use KTH Style in your project"),
        e.createElement("h2", null, "General description"),
        e.createElement(
          "p",
          null,
          "The ",
          e.createElement(
            "a",
            { href: "https://www.npmjs.com/package/kth-style" },
            "kth-style package",
          ),
          " is a npm package with resources for projects that should follow the look and feel of the KTH design. Below is a description of what the package contains and how to retrieve it from NPM.",
        ),
        e.createElement(
          "h3",
          null,
          "The structure and contents of the package",
        ),
        "The distribution folder has the structure shown below and contains css, image, javascript and scss resources which can be used in the parent project.",
        e.createElement(Na, {
          snippet:
            "kth-style\n  |-- dist\n    |-- css\n    |--img\n    |--js\n    |--kth-style-scss.zip",
        }),
        e.createElement(
          "p",
          null,
          "To download the kth-style package from npmjs.org you need to install the Node Package Manager (NPM). Instructions on how to do that can be found on this page:",
          " ",
          e.createElement(
            "a",
            { href: "https://www.npmjs.com/get-npm" },
            "https://www.npmjs.com/get-npm",
          ),
        ),
        e.createElement(
          "p",
          null,
          "When you have that installed, run the following command in your project root. This will create a folder named node_modules/kth-style.",
        ),
        e.createElement(Na, { snippet: "$ npm i -S kth-style" }),
        e.createElement(
          "h3",
          null,
          "Linking to static resouces from the kth-style package",
        ),
        e.createElement(
          "p",
          null,
          "If you just want to reference resources in the node_modules/kth-style package. Eg. from scss files.",
        ),
        e.createElement(Na, {
          snippet:
            "@import '../../node_modules/kth-style/public/sass/variables/fonts';",
        }),
        e.createElement(Na, {
          snippet:
            "background-image: url(../../node_modules/kth-style/dist/img/kth-style/icons/arrow-back-black.svg);",
        }),
        e.createElement(
          "h3",
          null,
          "Use the scss resources as part of your project's local transpilation",
        ),
        e.createElement(
          "p",
          null,
          "If you want to use the scss resources in your local project just import them in your scss files so you can use all the colors and other variables directly in your own styling.",
        ),
        e.createElement("h2", null, "Use in Node.js projects"),
        e.createElement(
          "p",
          null,
          "To use KTH-style in a Node.JS project you can look at the node template project",
          " ",
          e.createElement(
            "a",
            { href: "https://github.com/KTH/node-web" },
            "node-web",
          ),
          " or any of the projects that are based on node-web for reference.",
        ),
        e.createElement("p", null, "Install kth-style by typing:"),
        e.createElement(Na, { snippet: "$ npm i -S kth-style" }),
        e.createElement(
          "p",
          null,
          "This will add the kth-style package to your dependencies in you package.json file and into the node_modules folder.",
        ),
        e.createElement("h3", null, "Serving static files"),
        e.createElement(
          "h4",
          null,
          "If '@kth/server' module is used as a server",
        ),
        e.createElement("p", null, "In file server/server.js:"),
        e.createElement(Na, {
          snippet:
            "const path = require('path')\nconst express = require('express')\nconst server = require('@kth/server')\n\n// Now read the server config etc.\nconst config = require('./configuration').server\n\nserver.use(config.proxyPrefixPath.uri + '/static/kth-style', express.static('./node_modules/kth-style/dist'))",
        }),
        e.createElement("h4", null, "If 'express' module is used"),
        e.createElement("p", null, "In file server/server.js:"),
        e.createElement(Na, {
          snippet:
            "const path = require('path')\nconst express = require('express')\nconst app = express()\n\n// Now read the server config etc.\nconst config = require('./configuration').server\n\napp.use(config.proxyPrefixPath.uri +'/kth-style', express.static(path.join(__dirname, '../node_modules/kth-style/dist')))",
        }),
        e.createElement("h3", null, "Linking to stylesheet"),
        e.createElement(
          "p",
          null,
          "Then link to the KTH-bootstrap stylesheet in /dist directory, e.g.:",
        ),
        e.createElement(Na, {
          snippet:
            "<link rel='stylesheet' href='/style/static/kth-style/css/kth-bootstrap.css'/>",
        }),
        e.createElement(
          "p",
          null,
          "Remember to place the import above your own project stylesheet imports to be able to override necessary elements.",
        ),
      );
    };
    const Ya = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(Qa, null));
    });
    var Xa = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Alerts"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of alerts in the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/alerts-och-\ntooltips-1.952153",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "div",
          { className: "alert alert-success", role: "alert" },
          "This is a success alert—check it out!",
        ),
        e.createElement(
          "div",
          { className: "alert alert-danger", role: "alert" },
          "This is a danger alert—check it out!",
        ),
        e.createElement(
          "div",
          { className: "alert alert-info", role: "alert" },
          "This is a info alert—check it out!",
        ),
        e.createElement(Na, {
          snippet:
            '<div class="alert alert-success" role="alert">\n  This is a success alert—check it out!\n</div>\n\n<div class="alert alert-danger" role="alert">\n  This is a danger alert—check it out!\n</div>\n\n<div class="alert alert-info" role="alert">\n  This is a info alert—check it out!\n</div>',
        }),
      );
    };
    const Ja = wa(function () {
        return e.createElement(e.Fragment, null, e.createElement(Xa, null));
      }),
      Za = function (t) {
        var n = t.items,
          r = t.defaultTab;
        if (!n || 0 === n.length) return null;
        var a = void 0 !== n[r] ? r : 0,
          l = (0, e.useState)(a),
          o = Ca()(l, 2),
          i = o[0],
          s = o[1],
          u = function (t) {
            var n = t.list;
            return e.createElement(
              "div",
              { className: "tab-bar-container row" },
              e.createElement(
                "div",
                { className: "col" },
                e.createElement(
                  "ul",
                  { className: "nav nav-tabs", role: "tablist" },
                  n.map(function (t, n) {
                    var r = "nav-link ".concat(n === i ? "active show" : "");
                    return t.tab
                      ? e.createElement(
                          "li",
                          {
                            key: n,
                            className: "nav-item",
                            role: "presentation",
                          },
                          e.createElement(
                            "button",
                            {
                              type: "button",
                              className: r,
                              role: "tab",
                              onClick: function (e) {
                                return (function (e, t) {
                                  e.preventDefault(), s(t);
                                })(e, n);
                              },
                            },
                            t.tab,
                          ),
                        )
                      : null;
                  }),
                ),
              ),
            );
          },
          c = function (t) {
            var n = t.list;
            return n[i] && !n[i].content
              ? null
              : e.createElement(
                  "div",
                  { className: "tab-content" },
                  n.map(function (t, n) {
                    var r = "tab-pane fade ".concat(
                      n === i ? "active show" : "",
                    );
                    return e.createElement(
                      "div",
                      { key: n, className: r, role: "tabpanel" },
                      e.createElement(
                        "div",
                        { className: "tab-container" },
                        t.content,
                      ),
                    );
                  }),
                );
          };
        return e.createElement(
          "div",
          { className: "Tabs" },
          e.createElement(u, { list: n }),
          e.createElement(c, { list: n }),
        );
      };
    var el = function (t) {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Tabs"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of tabs in the",
          " ",
          e.createElement(
            "a",
            {
              href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/tabbar-\n1.963802",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "div",
          { className: "itemContainer" },
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement(Za, {
              items: [
                { tab: "Tab1", content: "Lorem Ipsum" },
                { tab: "Tab2", content: "Lorem Ipsum 2" },
                { tab: "Tab3", content: "Lorem Ipsum 3" },
              ],
              defaultTab: 0,
            }),
            e.createElement(Na, {
              snippet:
                '<div class="tab-bar-container row">\n  <div class="col">\n    <ul class="nav nav-tabs" id="myTab" role="tablist">\n      <li class="nav-item">\n        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class="tab-content" id="myTabContent">\n  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>\n  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>\n  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>\n</div>',
            }),
          ),
        ),
      );
    };
    const tl = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(el, null));
    });
    var nl = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Links"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of links in the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/knappar-och-\nlankar-1.952154",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "div",
          { className: "itemContainer" },
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement("a", { href: "#" }, "Link"),
            e.createElement(Na, { snippet: '<a href="#">Link</a>' }),
          ),
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement(
              "a",
              {
                href: "#",
                target: "_blank",
                title: "Link text - opens in new tab",
                className: "external-link",
              },
              "New tab link",
            ),
            e.createElement(Na, {
              snippet:
                '<a href="#" target="_blank" class="external-link">External link</a>',
            }),
          ),
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement(
              "button",
              { type: "button", href: "#", className: "btn btn-link" },
              "Button link",
            ),
            e.createElement(Na, {
              snippet:
                '<button href="#" class="btn btn-link">Button link</button>',
            }),
          ),
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement(
              "a",
              { className: "link-back", href: "#" },
              "Back link",
            ),
            e.createElement(Na, {
              snippet: '<a class="link-back" href="#">Back link</a>',
            }),
          ),
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement(
              "a",
              { className: "link-to", href: "#" },
              "Link to",
            ),
            e.createElement(Na, {
              snippet: '<a class="link-to" href="#">Link</a>',
            }),
          ),
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement(
              "a",
              {
                className: "pdf-link",
                href: "#",
                title: "Document opens in new tab",
              },
              "Pdf link",
            ),
            e.createElement(
              "p",
              null,
              "Check icons page for other document icons.",
            ),
            e.createElement(Na, {
              snippet: '<a class="pdf-link" href="#">Link</a>',
            }),
          ),
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement(
              "a",
              {
                className: "pdf-post-link",
                target: "_blank",
                href: "#",
                title: "Document opens in new tab",
              },
              "Pdf link",
            ),
            e.createElement(
              "p",
              null,
              "Check icons page for other document icons.",
            ),
            e.createElement(Na, {
              snippet: '<a class="pdf-post-link" href="#">Link</a>',
            }),
          ),
        ),
      );
    };
    const rl = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(nl, null));
    });
    var al = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Lists"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of lists in the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/listor-1.1005498",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "div",
          { className: "itemContainer" },
          e.createElement(
            "div",
            { className: "itemBox" },
            e.createElement("h2", null, "Ordered list"),
            e.createElement(
              "ol",
              null,
              e.createElement("li", null, "First item"),
              e.createElement("li", null, "Second item"),
              e.createElement("li", null, "Third item"),
            ),
            e.createElement(Na, {
              snippet:
                "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ol>",
            }),
            e.createElement("h2", null, "Unordered list"),
            e.createElement(
              "ul",
              null,
              e.createElement("li", null, "First item"),
              e.createElement("li", null, "Second item"),
              e.createElement("li", null, "Third item"),
            ),
            e.createElement(Na, {
              snippet:
                "<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>",
            }),
            e.createElement("h2", null, "Link list"),
            e.createElement(
              "ul",
              { className: "link-list" },
              e.createElement(
                "li",
                null,
                e.createElement(
                  "a",
                  { href: "https://www.kth.se" },
                  "This is a link in a list",
                ),
              ),
              e.createElement(
                "li",
                null,
                e.createElement(
                  "a",
                  { href: "https://www.kth.se" },
                  "This is a link in a list",
                ),
              ),
              e.createElement(
                "li",
                null,
                e.createElement(
                  "a",
                  { href: "https://www.kth.se" },
                  "This is a link in a list",
                ),
              ),
              e.createElement(
                "li",
                null,
                e.createElement(
                  "a",
                  { href: "https://www.kth.se" },
                  "This is a link in a list",
                ),
              ),
            ),
            e.createElement(Na, {
              snippet:
                '<ul class="link-list">\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n  <li><a href="https://www.kth.se">This is a link in a list</a></li>\n</ul>',
            }),
          ),
        ),
      );
    };
    const ll = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(al, null));
    });
    var ol = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement(
          "h1",
          null,
          "Guidelines for usability and accessibility",
        ),
        e.createElement(
          "p",
          null,
          "First of all. When KTH Style is implemented you also need to know when and how its components should be used. For this you have to consult the KTH Style guide. It is recommended that you start with the page",
          " ",
          e.createElement(
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
    };
    const il = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(ol, null));
    });
    var sl = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Separators"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of separators in the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/struktur-och-layout/sidans-struktur-1.1006152",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement("h2", null, "Separator example"),
        e.createElement(
          "p",
          null,
          "Below is an example of a separator (gray line) used for separating content in some cases.",
        ),
        e.createElement("div", { className: "separator gray" }),
        e.createElement(Na, { snippet: '<div className="separator gray" />' }),
      );
    };
    const ul = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(sl, null));
    });
    var cl = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Navigation"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of navigation and the principle behind them in the",
          " ",
          e.createElement(
            "a",
            {
              href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/navigation-\n1.952155",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "p",
          null,
          "Navigation is based on several menus in different contexts. Below you will find examples of these menus. ",
        ),
        e.createElement("h2", null, "Main navigation"),
        e.createElement(
          "p",
          null,
          'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Sub menu" or "Undermeny"',
        ),
        e.createElement(Na, {
          snippet:
            '<nav id="mainMenu" class="col navbar navbar-expand-lg navbar-light" aria-label="Sub menu">\n  <div class="collapse navbar-collapse" id="navbarNav">\n      <ul class="nav">\n        <li class="parentLink"><a href="/">KTH</a></li>\n    </ul>\n    <ul class="nav nav-ancestor">\n      <li><span class="nav-item ancestor">Aktuellt</span></li>\n      </ul>\n      <ul class="nav nav-list">\n        <li class="nav-item leaf"><a class="nav-link" href="/aktuellt/nyheter">Nyheter</a></li>\n        <li class="nav-item node"><a class="nav-link" href="/aktuellt/nyhetsteman">Aktuella nyhetsteman</a></li>\n        <li class="nav-item node"><a class="nav-link" href="/aktuellt/kalender">KTH-kalendern</a></li>\n      </ul>\n    </div>\n  </nav>',
        }),
        e.createElement("h2", null, "Secondary menu"),
        e.createElement(
          "p",
          null,
          "This menu is preferably imported to the application you are building via",
          " ",
          e.createElement(
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
        e.createElement(
          "p",
          null,
          'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Secondary top menu" or "Sekundär toppmeny"',
        ),
        e.createElement(Na, {
          snippet:
            '<nav aria-label="Secondary top menu">\n  <ul>\n    <li><a href="/student">Student</a>\n    </li><li><a href="/alumni">Alumn</a>\n    </li><li><a href="https://intra.kth.se/">Anställd</a>\n    </li><li><a href="https://www.kth.se/en" hreflang="en-UK">International website</a></li>\n  </ul>\n</nav>',
        }),
        e.createElement("h2", null, "Mega menu"),
        e.createElement(
          "p",
          null,
          "This menu is also preferably imported to the application you are building via",
          " ",
          e.createElement(
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
        e.createElement(
          "p",
          null,
          'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Primary top menu" or "Primär toppmeny"',
        ),
        e.createElement("h2", null, "Mobile menu"),
        e.createElement(
          "p",
          null,
          "The mobile meny is visible with its hamburger icon when the width of the screen is 992px or less. On that breakpoint the menu is build up with javascript (menues.js) that combines the the menus depending on which menus are available on the current page.",
        ),
        e.createElement(Na, {
          snippet:
            '<div id="mobileMenuWrapper">\n  <button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </button>\n  <nav id="mobileMenu" aria-label="Mobilmeny" class="block navbar navbar-expand-lg navbar-light">\n    <div id="mobileMenuContent" class="navbar-collapse collapse">\n      <ul id="mobileMenuList" class="menu navbar-nav mr-auto"></ul>\n    </div>\n  </nav>\n</div>',
        }),
        e.createElement("h2", null, "Breadcrumbs"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of breadcrumbs in the",
          " ",
          e.createElement(
            "a",
            {
              href: "https://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/navigation-\n1.952155",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement(
          "p",
          null,
          "Breadcrumbs help the user to navigate up and down in the structure. This component is places above the main content on most of our regular pages.",
        ),
        e.createElement(
          "p",
          null,
          'Remember that the aria-label attribute should be based on the current language of the page. For the primary menu it should be "Breadcrumbs" or "Brödsmulor"',
        ),
        e.createElement(
          "nav",
          { id: "breadcrumbs", "aria-label": "Breadcrumbs" },
          e.createElement(
            "ol",
            { className: "breadcrumb" },
            e.createElement(
              "li",
              { className: "breadcrumb-item" },
              e.createElement("a", { href: "#" }, "Home"),
            ),
            e.createElement(
              "li",
              { className: "breadcrumb-item" },
              e.createElement("a", { href: "#" }, "Library"),
            ),
          ),
        ),
        e.createElement(Na, {
          snippet:
            '<nav id="breadcrumbs" aria-label="Breadcrumbs">\n  <ol class="breadcrumb">\n    <li class="breadcrumb-item">\n      <a href="#">Home</a>\n    </li>\n    <li class="breadcrumb-item">\n      <a href="#">Library</a>\n    </li>\n  </ol>\n</nav>',
        }),
        e.createElement("h2", null, "Skip to main content"),
        e.createElement(
          "p",
          null,
          'The "skip to main content navigation is a link used ...". Its link text should be language specific ',
        ),
        e.createElement(Na, {
          snippet:
            '<a class="skipToMainContent" href="#mainContent" tabindex="1">Skip to main content</a>',
        }),
      );
    };
    const dl = wa(function () {
        return e.createElement(e.Fragment, null, e.createElement(cl, null));
      }),
      fl = function (t) {
        var n = (0, e.useRef)(),
          r = (0, e.useRef)(),
          a = t.isOpen,
          l = t.closeModal,
          o = t.lang,
          i = t.children,
          s = t.title;
        function u(e) {
          n.current.contains(e.target) || l();
        }
        (0, e.useEffect)(function () {
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
              var t = n.current.querySelectorAll(
                  'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
                ),
                r = t[0],
                a = t[t.length - 1];
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
        return e.createElement(
          e.Fragment,
          null,
          e.createElement(
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
            e.createElement(
              "div",
              { className: "modal-dialog modal-mg", role: "document", ref: n },
              e.createElement(
                "div",
                { className: "modal-content" },
                e.createElement(
                  "div",
                  { className: "modal-header" },
                  e.createElement(
                    "button",
                    {
                      type: "button",
                      className: "close",
                      "aria-label": Sa().message("modal_close_button_label", o),
                      onClick: l,
                    },
                    e.createElement("span", { "aria-hidden": "true" }, "×"),
                  ),
                  e.createElement("h3", null, s),
                ),
                e.createElement("div", { className: "modal-body" }, i),
                e.createElement(
                  "div",
                  { className: "modal-footer" },
                  e.createElement(
                    "button",
                    {
                      type: "button",
                      className: "btn btn-secondary",
                      "aria-label": Sa().message("modal_close_button_label", o),
                      onClick: l,
                      ref: r,
                    },
                    Sa().message("modal_close_button_label", o),
                  ),
                ),
              ),
            ),
          ),
          a &&
            e.createElement("div", {
              className: "modal-backdrop fade ".concat(a ? "show" : ""),
            }),
        );
      };
    var hl = function () {
      var t = (0, e.useState)(!1),
        n = Ca()(t, 2),
        r = n[0],
        a = n[1];
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Modals"),
        e.createElement(
          "p",
          null,
          "Read the guidelines for the use of modals in the",
          " ",
          e.createElement(
            "a",
            {
              href: "\nhttps://intra.kth.se/administration/kommunikation/webb/style/riktlinjer/modaler-\n1.952157",
            },
            "KTH Style guide",
          ),
          " ",
          "at the KTH Intranet (Information in Swedish).",
        ),
        e.createElement("h2", null, "Modals based on React"),
        e.createElement(
          "p",
          null,
          "This modal is based on a React component and require React.",
        ),
        e.createElement(
          "p",
          null,
          "Open modal by klicking the information icon:",
          " ",
          e.createElement("button", {
            onClick: function () {
              a(!0);
            },
            type: "button",
            className: "info-modal",
            "aria-label": "Open modal",
          }),
        ),
        e.createElement(
          fl,
          {
            isOpen: r,
            closeModal: function () {
              a(!1);
            },
            lang: "sv",
            title: "Titel",
          },
          e.createElement("p", null, "This is content in a React based modal."),
        ),
        e.createElement(Na, {
          snippet:
            '<button onClick={openModal} type="button" class="info-modal"  aria-label="Open modal" />\n<Modal isOpen={isOpen} closeModal={closeModal} lang={lang} title="Title">\n  <p>This is content in a react based modal..</p>\n</Modal>',
        }),
        e.createElement("h2", null, "Modal based on Bootstrap"),
        e.createElement(
          "p",
          null,
          "This modal is based on Bootstrap and require Bootstrap CSS and JS in the project.",
        ),
        e.createElement(
          "p",
          null,
          "Open modal by klicking the information icon:",
          " ",
          e.createElement("button", {
            type: "button",
            className: "info-modal",
            "aria-label": "Open modal",
            "data-bs-toggle": "modal",
            "data-bs-target": "#exampleModal",
          }),
        ),
        e.createElement(
          "div",
          {
            className: "modal fade",
            id: "exampleModal",
            tabIndex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true",
          },
          e.createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            e.createElement(
              "div",
              { className: "modal-content" },
              e.createElement(
                "div",
                { className: "modal-header" },
                e.createElement(
                  "h3",
                  { className: "modal-title", id: "exampleModalLabel" },
                  "Title",
                ),
                e.createElement("button", {
                  type: "button",
                  className: "btn-close",
                  "data-bs-dismiss": "modal",
                  "aria-label": "Close",
                }),
              ),
              e.createElement(
                "div",
                { className: "modal-body" },
                "This is content in a modal based on Bootstrap.",
              ),
              e.createElement(
                "div",
                { className: "modal-footer" },
                e.createElement(
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
        e.createElement(Na, {
          snippet:
            '<button type="button" class="info-modal" aria-label="Open modal" data-bs-toggle="modal" data-bs-target="#exampleModal" />\n\n<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h3 class="modal-title" id="exampleModalLabel">Title</h3>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">This is content in a modal based on Bootstrap.</div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>',
        }),
      );
    };
    const pl = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(hl, null));
    });
    var ml = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "How to get html blocks from Cortina"),
        e.createElement(
          "p",
          null,
          'To make your new application to look and behave as a "KTH application" you need a base html structure to apply stylesheets on. You can grab that from the source of www.kth.se due to the fact that it is relativly static but when it comes to the elements (so called blocks) in the header and footer like menus, search widget etc. you need to use the Cortina API to get the html blocks.',
        ),
        e.createElement("h2", null, "NodeJS based applications"),
        e.createElement(
          "p",
          null,
          "If your application is based on NodeJS, you can use the",
          " ",
          e.createElement(
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
        e.createElement(
          "p",
          null,
          "The header code in a Node application looks something like this:",
        ),
        e.createElement(Na, {
          snippet:
            '\x3c!--indexOff: all--\x3e\n<header>\n  <div class="container-fluid">\n    <div class="container">\n      \n      <div class="header-container__top">\n        {{{blocks.image}}} {{{blocks.title}}}\n        <div id="mobileMenuWrapper">\n          <button id="nav-icon" class="navbar-toggler nav-icon" type="button" title="Öppna/stäng mobilmenyn">\n            <span></span>\n            <span></span>\n            <span></span>\n            <span></span>\n          </button>\n          <nav id="mobileMenu" class="block navbar navbar-expand-lg navbar-light">\n            <div id="mobileMenuContent" class="navbar-collapse collapse">\n              <ul id="mobileMenuList" class="menu navbar-nav mr-auto"></ul>\n            </div>\n          </nav>\n        </div>\n        {{{blocks.secondaryMenu}}}\n      </div>\n      <div class="header-container__bottom">{{{blocks.megaMenu}}} {{{blocks.search}}}</div>\n    </div>\n  </div>\n  <div id="gradientBorder"></div>\n\n  <div class="container articleNavigation">\n    <div class="row justify-content-between">\n      {{breadcrumbs breadcrumbsPath lang}}\n    </div>\n  </div>\n\n</header>\n\x3c!--indexOn: all--\x3e',
        }),
        e.createElement("h2", null, "Other applications"),
        e.createElement(
          "p",
          null,
          "If your app is based on some other language you can retrieve the html blocks via the Cortina API directly. Eg.",
          " ",
          e.createElement(
            "a",
            { href: "https://www.kth.se/cm/1.260060" },
            "https://www.kth.se/cm/1.260060",
          ),
          " will give you the site name of the start page.",
        ),
        e.createElement(
          "p",
          null,
          "The Cortina API gives you the html of the given content id the the content id can bee seen in the kth-node-cortina-block pakage or directly in the sourse code of www.kth.se.",
        ),
        e.createElement(Na, {
          snippet:
            '<h1 class="block siteName" data-cid="1.260060">\n  <a href="/">Välkommen till KTH</a>\n</h1>',
        }),
      );
    };
    const gl = wa(function () {
      return e.createElement(e.Fragment, null, e.createElement(ml, null));
    });
    var vl = function () {
      return e.createElement(
        "main",
        { id: "mainContent", className: "mainContent" },
        e.createElement("h1", null, "Deprecated"),
        e.createElement(
          "p",
          null,
          "This page contains information regarding what's deprecated and will be removed i future versions in KTH Styel. E.g what we should stop use or change for other components or code.",
        ),
        e.createElement(
          "p",
          null,
          "The deprecated code will work until the next major release of KTH Style is released. We will also inform each team at the IT department in advance. By doing this we will get a controlled phase out of parts that should not be used any more.",
        ),
        e.createElement("h2", null, "Major release 8.0.0"),
        e.createElement(
          "p",
          null,
          "A new icon set has been added and the old set has been removed. All icons now resides in: /public/img/kth-style/icons",
        ),
        e.createElement("h2", null, "Major release 7.0.0"),
        e.createElement(
          "p",
          null,
          "A dedicated folder for fonts have been added to dist folder. And the font files have no longer build hash as part of the filename. The above change does not require any change of client application code unless the font files are addressed directly by the client application.",
        ),
        e.createElement("h2", null, "Major release 6.0.0"),
        e.createElement(
          "p",
          null,
          "This major will include the following chages which include breaking changes and requires an overview or action.",
        ),
        e.createElement(
          "ul",
          { className: "deprecatedList" },
          e.createElement(
            "li",
            null,
            "Collapse with button or achor tags will not be supported as . Styling for these variants is phased out and is replaces by styling for details and summary tags instead. Example code can be seen here::",
            " ",
            e.createElement(
              "a",
              {
                href: "/style/components/collapse",
                alt: "Exempel på Collapse-komponent",
              },
              "Collapse componet exemple",
            ),
          ),
          e.createElement(
            "li",
            null,
            "The following icons are phased out from KTH Style:",
            e.createElement(
              "ul",
              null,
              e.createElement("li", null, "back-link-pill.svg"),
              e.createElement("li", null, "back-link.svg"),
              e.createElement("li", null, "white-arrow.svg"),
              e.createElement("li", null, "clock_grey_25.svg"),
              e.createElement("li", null, "clock_grey_50.svg"),
              e.createElement("li", null, "clock_grey_100.svg"),
              e.createElement("li", null, "Clock_three_quarter.svg"),
              e.createElement("li", null, "canvas.svg"),
              e.createElement("li", null, "icon-from-canvas-blue.svg"),
              e.createElement("li", null, "pill-back-white.svg"),
              e.createElement("li", null, "pill-back.svg"),
              e.createElement("li", null, "select-arrow.png"),
            ),
          ),
        ),
      );
    };
    const yl = wa(function () {
        return e.createElement(e.Fragment, null, e.createElement(vl, null));
      }),
      bl = wa(function () {
        var t = (0, Zr.UO)(),
          n = t.section ? t.section : "/",
          r = (0, Zr.TH)().pathname;
        (0, e.useEffect)(
          function () {
            window.stickyMainMenu && window.stickyMainMenu();
          },
          [r],
        );
        var a = function (n) {
            var r = n.children.map(function (n, r) {
              var a = t.page || 0 !== r ? "" : " active";
              return e.createElement(
                "li",
                { key: r, className: "nav-item leaf" },
                e.createElement(
                  Jr.NavLink,
                  { className: "nav-link".concat(a), to: n.url },
                  n.title,
                ),
              );
            });
            return e.createElement(
              "ul",
              { id: "leftmenu-div-1", className: "nav nav-list" },
              r,
            );
          },
          l = function (t) {
            var r = t.navItem,
              l = r.title,
              o = r.url,
              i = r.children,
              s = "/".concat(n) === o,
              u = "nav-item "
                .concat(i ? "node expandable" : "leaf", " ")
                .concat(s ? "selected expanded" : "");
            return e.createElement(
              "li",
              { className: u },
              e.createElement(
                Jr.NavLink,
                { className: "nav-link", to: o, end: "/" === o },
                l,
              ),
              s && i && e.createElement(a, null, i),
            );
          };
        return e.createElement(
          "nav",
          {
            id: "mainMenu",
            "aria-label": "Sub menu",
            className: "col navbar navbar-expand-lg navbar-light",
          },
          e.createElement(
            "div",
            { className: "collapse navbar-collapse", id: "navbarNav" },
            e.createElement(
              "ul",
              { className: "nav" },
              e.createElement(
                "li",
                { className: "parentLink" },
                e.createElement("a", { href: "/" }, "KTH"),
              ),
            ),
            e.createElement(
              "ul",
              { className: "nav nav-ancestor" },
              e.createElement(
                "li",
                null,
                e.createElement(
                  "span",
                  { className: "nav-item ancestor" },
                  "KTH Style",
                ),
              ),
            ),
            e.createElement(
              "ul",
              { className: "nav nav-list expandable" },
              e.createElement(l, {
                navItem: { title: "About KTH Style", url: "/" },
              }),
              e.createElement(l, {
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
              e.createElement(l, {
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
              e.createElement(l, {
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
      });
    var kl = a(544).isNoObject;
    const El = function (t) {
      var n = Wr(),
        r = t.items || [],
        a = n.basicBreadcrumbs,
        l = n.language;
      if (
        ((function (e) {
          if (!Array.isArray(e) || e.some(kl))
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
      var o = function (t, n) {
          var r = t.url,
            a = t.label;
          return e.createElement(
            "li",
            { key: n, className: "breadcrumb-item" },
            e.createElement("a", { href: r }, a),
          );
        },
        i = "sv" === l ? "Brödsmulor" : "Breadcrumbs";
      return e.createElement(
        "div",
        { className: "container articleNavigation" },
        e.createElement(
          "nav",
          { id: "breadcrumbs", "aria-label": i },
          e.createElement(
            "ol",
            { className: "breadcrumb" },
            a.map(o),
            r.map(o),
          ),
        ),
      );
    };
    function wl() {
      var t = (0, Zr.TH)().pathname;
      return (
        (0, e.useEffect)(
          function () {
            window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
          },
          [t],
        ),
        null
      );
    }
    wa(_l);
    function _l() {
      var t = Wr().browserConfig.proxyPrefixPath,
        n = (0, Zr.UO)().section,
        r = [];
      n &&
        (r = [
          {
            label: n ? Sa().message("section_".concat(n)) : "",
            url: "".concat(t.uri, "/").concat(n),
          },
        ]);
      var a = (function () {
        var t = (0, Zr.UO)(),
          n = t.section,
          r = t.page;
        switch (n) {
          case "basics":
            switch (r) {
              case "colors":
              default:
                return e.createElement(Fa, null);
              case "icons":
                return e.createElement(za, null);
              case "spacing":
                return e.createElement(Ha, null);
              case "separators":
                return e.createElement(ul, null);
              case "typography":
                return e.createElement(Va, null);
            }
          case "components":
            switch (r) {
              case "alerts":
              default:
                return e.createElement(Ja, null);
              case "forms":
                return e.createElement(Ga, null);
              case "collapse":
                return e.createElement(qa, null);
              case "buttons":
                return e.createElement(Oa, null);
              case "links":
                return e.createElement(rl, null);
              case "lists":
                return e.createElement(ll, null);
              case "tables":
                return e.createElement(La, null);
              case "tabs":
                return e.createElement(tl, null);
              case "modals":
                return e.createElement(pl, null);
              case "navigation":
                return e.createElement(dl, null);
            }
          case "setup-guide":
            switch (r) {
              case "guidelines":
              default:
                return e.createElement(il, null);
              case "setup":
                return e.createElement(Ya, null);
              case "cortina-blocks":
                return e.createElement(gl, null);
              case "deprecations":
                return e.createElement(yl, null);
            }
          default:
            return e.createElement(
              "main",
              { id: "mainContent", className: "mainContent" },
              e.createElement(Sl, null),
            );
        }
      })();
      return e.createElement(
        e.Fragment,
        null,
        e.createElement(wl, null),
        e.createElement(El, { items: r }),
        e.createElement(bl, null),
        a,
      );
    }
    function Sl() {
      return e.createElement(
        e.Fragment,
        null,
        e.createElement("h1", null, "About KTH Style"),
        e.createElement(
          "p",
          { className: "lead" },
          "KTH Style is a tool for bringing proper design and UX proof elements to web applications at KTH. The purpose of KTH Style is to accelerate development, create consistency between applications and facilitate the work with usability and accessibility.",
        ),
        e.createElement(
          "p",
          null,
          "This website (of course based on KTH Style) presents the look of basic form elements and specific components with code examples, and provides technical guidance on how to implement KTH Style in your application.",
        ),
        e.createElement(
          "p",
          null,
          "Instructions for how KTH Style is technically implemented are described in the section",
          " ",
          e.createElement(
            "a",
            { href: "https://app.kth.se/style/setup-guide" },
            "Setup guide",
          ),
        ),
        e.createElement(
          "p",
          null,
          "The content of KTH Style is accompanied by the KTH Style guide. As a developer you need to understand which component to use, when they apply and how they should be used. You also need an overall understanding about usability and accessibility to make the right design decision for your app.",
        ),
        e.createElement(
          "p",
          null,
          "The ",
          e.createElement(
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
    const xl = Cl;
    function Cl(t) {
      return e.createElement(
        Ur,
        {
          initCallback: function () {
            return t;
          },
        },
        e.createElement(
          Zr.Z5,
          null,
          e.createElement(Zr.AW, {
            path: "/",
            element: e.createElement(_l, null),
          }),
          e.createElement(
            Zr.AW,
            { path: ":section", element: e.createElement(_l, null) },
            e.createElement(Zr.AW, {
              path: ":page",
              element: e.createElement(_l, null),
            }),
          ),
        ),
      );
    }
    !(function () {
      if ("undefined" == typeof window) return;
      var t = window.config.proxyPrefixPath.uri,
        n = qr();
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
        null != n && "object" === Qr()(n)
          ? Object.keys(n).forEach(function (t) {
              e[t] = n[t];
            })
          : console.error("uncompress(): Invalid store data");
      })(n);
      var r = e.createElement(Jr.BrowserRouter, { basename: t }, Cl(n)),
        a = document.getElementById("app");
      (0, Xr.a)(a, r);
    })();
    const Tl = {
      createStore: function () {
        return qr();
      },
      getCompressedStoreCode: function (e) {
        return Yr(e);
      },
      renderStaticPage: function (n) {
        var r = n.applicationStore,
          a = n.location,
          l = n.basename;
        Er = !0;
        var o = e.createElement(t.gx, { basename: l, location: a }, xl(r));
        return Lr.renderToString(o);
      },
    };
  })(),
    (module.exports = l);
})();
