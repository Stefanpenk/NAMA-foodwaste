/*! For license information please see main.a333af0a.js.LICENSE.txt */
!(function () {
  var e = {
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
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
          c = {};
        function o(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (c[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, i) {
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
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
                null === t ||
                "undefined" === typeof t ||
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
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
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
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          j = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          O = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          M = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var I = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function T(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var R,
          B = Object.assign;
        function F(e) {
          if (void 0 === R)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              R = (t && t[1]) || "";
            }
          return "\n" + R + e;
        }
        var D = !1;
        function V(e, t) {
          if (!e || D) return "";
          D = !0;
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
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  c = l.length - 1;
                1 <= i && 0 <= c && a[i] !== l[c];

              )
                c--;
              for (; 1 <= i && 0 <= c; i--, c--)
                if (a[i] !== l[c]) {
                  if (1 !== i || 1 !== c)
                    do {
                      if ((i--, 0 > --c || a[i] !== l[c])) {
                        var o = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            o.includes("<anonymous>") &&
                            (o = o.replace("<anonymous>", e.displayName)),
                          o
                        );
                      }
                    } while (1 <= i && 0 <= c);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return "";
          }
        }
        function A(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case j:
              return "Portal";
            case O:
              return "Profiler";
            case S:
              return "StrictMode";
            case P:
              return "Suspense";
            case z:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case E:
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
              case M:
                return null !== (t = e.displayName || null)
                  ? t
                  : A(e.type) || "Memo";
              case _:
                (t = e._payload), (e = e._init);
                try {
                  return A(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
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
              return A(t);
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
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
        function W(e) {
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
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
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
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Z(e, t) {
          var n = t.checked;
          return B({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
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
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          Y(e, t);
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
        function G(e, t, n) {
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
          ("number" === t && X(e.ownerDocument) === e) ||
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
          return B({}, t, {
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
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ce(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function oe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ce(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          se,
          fe =
            ((se = function (e, t) {
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
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = B(
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
          }
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
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var je = null,
          ke = null,
          Se = null;
        function Oe(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof je) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = wa(t)), je(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Se;
            if (((Se = ke = null), Oe(e), t))
              for (e = 0; e < t.length; e++) Oe(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Pe() {}
        var ze = !1;
        function Me(e, t, n) {
          if (ze) return e(t, n);
          ze = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (ze = !1), (null !== ke || null !== Se) && (Pe(), Ce());
          }
        }
        function _e(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
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
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Ie = !1;
        if (s)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Ie = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (se) {
            Ie = !1;
          }
        function Te(e, t, n, r, a, l, i, c, o) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (s) {
            this.onError(s);
          }
        }
        var Re = !1,
          Be = null,
          Fe = !1,
          De = null,
          Ve = {
            onError: function (e) {
              (Re = !0), (Be = e);
            },
          };
        function He(e, t, n, r, a, l, i, c, o) {
          (Re = !1), (Be = null), Te.apply(Ve, arguments);
        }
        function Ae(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
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
          if (Ae(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ae(e))) throw Error(l(188));
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
                    if (i === n) return $e(a), e;
                    if (i === r) return $e(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var c = !1, o = a.child; o; ) {
                    if (o === n) {
                      (c = !0), (n = a), (r = i);
                      break;
                    }
                    if (o === r) {
                      (c = !0), (r = a), (n = i);
                      break;
                    }
                    o = o.sibling;
                  }
                  if (!c) {
                    for (o = i.child; o; ) {
                      if (o === n) {
                        (c = !0), (n = i), (r = a);
                        break;
                      }
                      if (o === r) {
                        (c = !0), (r = i), (n = a);
                        break;
                      }
                      o = o.sibling;
                    }
                    if (!c) throw Error(l(189));
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
        var Qe = a.unstable_scheduleCallback,
          Xe = a.unstable_cancelCallback,
          Ze = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ge = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ct(e) / ot) | 0)) | 0;
              },
          ct = Math.log,
          ot = Math.LN2;
        var ut = 64,
          st = 4194304;
        function ft(e) {
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
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var c = i & ~a;
            0 !== c ? (r = ft(c)) : 0 !== (l &= i) && (r = ft(l));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== l && (r = ft(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
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
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          jt,
          kt,
          St,
          Ot,
          Et = !1,
          Ct = [],
          Nt = null,
          Pt = null,
          zt = null,
          Mt = new Map(),
          _t = new Map(),
          It = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Tt(e, t) {
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
              zt = null;
              break;
            case "pointerover":
            case "pointerout":
              Mt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              _t.delete(t.pointerId);
          }
        }
        function Rt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && jt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Bt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ae(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Ot(e.priority, function () {
                      kt(n);
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
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && jt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Vt() {
          (Et = !1),
            null !== Nt && Ft(Nt) && (Nt = null),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== zt && Ft(zt) && (zt = null),
            Mt.forEach(Dt),
            _t.forEach(Dt);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Vt)));
        }
        function At(e) {
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
            null !== Nt && Ht(Nt, e),
              null !== Pt && Ht(Pt, e),
              null !== zt && Ht(zt, e),
              Mt.forEach(t),
              _t.forEach(t),
              n = 0;
            n < It.length;
            n++
          )
            (r = It[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < It.length && null === (n = It[0]).blockedOn; )
            Bt(n), null === n.blockedOn && It.shift();
        }
        var Ut = x.ReactCurrentBatchConfig,
          $t = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            l = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ut.transition = l);
          }
        }
        function qt(e, t, n, r) {
          var a = bt,
            l = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (Ut.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          if ($t) {
            var a = Zt(e, t, n, r);
            if (null === a) $r(e, t, r, Xt, n), Tt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = Rt(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Rt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (zt = Rt(zt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Mt.set(l, Rt(Mt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      _t.set(l, Rt(_t.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Tt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && wt(l),
                  null === (l = Zt(e, t, n, r)) && $r(e, t, r, Xt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else $r(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Zt(e, t, n, r) {
          if (((Xt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = Ae(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Kt(e) {
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
                case Ge:
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
        var Yt = null,
          Jt = null,
          Gt = null;
        function en() {
          if (Gt) return Gt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Yt ? Yt.value : Yt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Gt = a.slice(e, 1 < t ? 1 - t : void 0));
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
            B(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
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
          cn,
          on,
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
          sn = an(un),
          fn = B({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = B({}, fn, {
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
            getModifierState: On,
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
                : (e !== on &&
                    (on && "mousemove" === e.type
                      ? ((ln = e.screenX - on.screenX),
                        (cn = e.screenY - on.screenY))
                      : (cn = ln = 0),
                    (on = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : cn;
            },
          }),
          hn = an(pn),
          mn = an(B({}, pn, { dataTransfer: 0 })),
          vn = an(B({}, fn, { relatedTarget: 0 })),
          gn = an(
            B({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = B({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(B({}, un, { data: 0 })),
          wn = {
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
          jn = {
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
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function On() {
          return Sn;
        }
        var En = B({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? jn[e.keyCode] || "Unidentified"
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
            getModifierState: On,
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
          Cn = an(En),
          Nn = an(
            B({}, pn, {
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
            })
          ),
          Pn = an(
            B({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: On,
            })
          ),
          zn = an(
            B({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Mn = B({}, pn, {
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
          _n = an(Mn),
          In = [9, 13, 27, 32],
          Ln = s && "CompositionEvent" in window,
          Tn = null;
        s && "documentMode" in document && (Tn = document.documentMode);
        var Rn = s && "TextEvent" in window && !Tn,
          Bn = s && (!Ln || (Tn && 8 < Tn && 11 >= Tn)),
          Fn = String.fromCharCode(32),
          Dn = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
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
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var An = !1;
        var Un = {
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
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ee(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Qn = null;
        function Xn(e) {
          Fr(e, 0);
        }
        function Zn(e) {
          if (Q(xa(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (s) {
          var Jn;
          if (s) {
            var Gn = "oninput" in document;
            if (!Gn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Gn = "function" === typeof er.oninput);
            }
            Jn = Gn;
          } else Jn = !1;
          Yn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Qn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Zn(Qn)) {
            var t = [];
            Wn(t, Qn, e, we(e)), Me(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(Qn);
        }
        function lr(e, t) {
          if ("click" === e) return Zn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Zn(t);
        }
        var cr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function or(e, t) {
          if (cr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !cr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
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
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
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
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
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
                  (a = sr(n, l));
                var i = sr(n, r);
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
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = s && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== X(r) ||
            ("selectionStart" in (r = vr) && pr(r)
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
            (yr && or(yr, r)) ||
              ((yr = r),
              0 < (r = qr(gr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var jr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Sr = {};
        function Or(e) {
          if (kr[e]) return kr[e];
          if (!jr[e]) return e;
          var t,
            n = jr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t]);
          return e;
        }
        s &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete jr.animationend.animation,
            delete jr.animationiteration.animation,
            delete jr.animationstart.animation),
          "TransitionEvent" in window || delete jr.transitionend.transition);
        var Er = Or("animationend"),
          Cr = Or("animationiteration"),
          Nr = Or("animationstart"),
          Pr = Or("transitionend"),
          zr = new Map(),
          Mr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function _r(e, t) {
          zr.set(e, t), o(t, [e]);
        }
        for (var Ir = 0; Ir < Mr.length; Ir++) {
          var Lr = Mr[Ir];
          _r(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        _r(Er, "onAnimationEnd"),
          _r(Cr, "onAnimationIteration"),
          _r(Nr, "onAnimationStart"),
          _r("dblclick", "onDoubleClick"),
          _r("focusin", "onFocus"),
          _r("focusout", "onBlur"),
          _r(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          o(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          o(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          o("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          o(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          o(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          o(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Tr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Rr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Tr)
          );
        function Br(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, c, o, u) {
              if ((He.apply(this, arguments), Re)) {
                if (!Re) throw Error(l(198));
                var s = Be;
                (Re = !1), (Be = null), Fe || ((Fe = !0), (De = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var c = r[i],
                    o = c.instance,
                    u = c.currentTarget;
                  if (((c = c.listener), o !== l && a.isPropagationStopped()))
                    break e;
                  Br(a, c, u), (l = o);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((o = (c = r[i]).instance),
                    (u = c.currentTarget),
                    (c = c.listener),
                    o !== l && a.isPropagationStopped())
                  )
                    break e;
                  Br(a, c, u), (l = o);
                }
            }
          }
          if (Fe) throw ((e = De), (Fe = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Hr = "_reactListening" + Math.random().toString(36).slice(2);
        function Ar(e) {
          if (!e[Hr]) {
            (e[Hr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Rr.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hr] || ((t[Hr] = !0), Vr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ie ||
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
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var c = r.stateNode.containerInfo;
                if (c === a || (8 === c.nodeType && c.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var o = i.tag;
                    if (
                      (3 === o || 4 === o) &&
                      ((o = i.stateNode.containerInfo) === a ||
                        (8 === o.nodeType && o.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== c; ) {
                  if (null === (i = ya(c))) return;
                  if (5 === (o = i.tag) || 6 === o) {
                    r = l = i;
                    continue e;
                  }
                  c = c.parentNode;
                }
              }
              r = r.return;
            }
          Me(function () {
            var r = l,
              a = we(n),
              i = [];
            e: {
              var c = zr.get(e);
              if (void 0 !== c) {
                var o = sn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    o = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (o = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (o = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    o = vn;
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
                    o = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    o = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    o = Pn;
                    break;
                  case Er:
                  case Cr:
                  case Nr:
                    o = gn;
                    break;
                  case Pr:
                    o = zn;
                    break;
                  case "scroll":
                    o = dn;
                    break;
                  case "wheel":
                    o = _n;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    o = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    o = Nn;
                }
                var s = 0 !== (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== c ? c + "Capture" : null) : c;
                s = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = _e(h, d)) &&
                        s.push(Wr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < s.length &&
                  ((c = new o(c, u, null, n, a)),
                  i.push({ event: c, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((o = "mouseout" === e || "pointerout" === e),
                (!(c = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (o || c) &&
                  ((c =
                    a.window === a
                      ? a
                      : (c = a.ownerDocument)
                      ? c.defaultView || c.parentWindow
                      : window),
                  o
                    ? ((o = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (f = Ae(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((o = null), (u = r)),
                  o !== u))
              ) {
                if (
                  ((s = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Nn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == o ? c : xa(o)),
                  (p = null == u ? c : xa(u)),
                  ((c = new s(m, h + "leave", o, n, a)).target = f),
                  (c.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((s = new s(d, h + "enter", u, n, a)).target = p),
                    (s.relatedTarget = f),
                    (m = s)),
                  (f = m),
                  o && u)
                )
                  e: {
                    for (d = u, h = 0, p = s = o; p; p = Qr(p)) h++;
                    for (p = 0, m = d; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (s = Qr(s)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = Qr(s)), (d = Qr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== o && Xr(i, c, o, s, !1),
                  null !== u && null !== f && Xr(i, f, u, s, !0);
              }
              if (
                "select" ===
                  (o =
                    (c = r ? xa(r) : window).nodeName &&
                    c.nodeName.toLowerCase()) ||
                ("input" === o && "file" === c.type)
              )
                var v = Kn;
              else if ($n(c))
                if (Yn) v = ir;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (o = c.nodeName) &&
                  "input" === o.toLowerCase() &&
                  ("checkbox" === c.type || "radio" === c.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Wn(i, v, n, a)
                  : (g && g(e, c, r),
                    "focusout" === e &&
                      (g = c._wrapperState) &&
                      g.controlled &&
                      "number" === c.type &&
                      ee(c, "number", c.value)),
                (g = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(g) || "true" === g.contentEditable) &&
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
                  (br = !1), xr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, a);
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
                An
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Bn &&
                  "ko" !== n.locale &&
                  (An || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && An && (y = en())
                    : ((Jt = "value" in (Yt = a) ? Yt.value : Yt.textContent),
                      (An = !0))),
                0 < (g = qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  i.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Hn(n)) && (b.data = y))),
                (y = Rn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (An)
                        return "compositionend" === e || (!Ln && Vn(e, t))
                          ? ((e = en()), (Gt = Jt = Yt = null), (An = !1), e)
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
                          return Bn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Fr(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = _e(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = _e(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var c = n,
              o = c.alternate,
              u = c.stateNode;
            if (null !== o && o === r) break;
            5 === c.tag &&
              null !== u &&
              ((c = u),
              a
                ? null != (o = _e(n, l)) && i.unshift(Wr(n, o, c))
                : a || (null != (o = _e(n, l)) && i.push(Wr(n, o, c)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Zr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Zr, "\n")
            .replace(Kr, "");
        }
        function Jr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(l(425));
        }
        function Gr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ca);
                }
              : ra;
        function ca(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function oa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void At(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          At(t);
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
        function sa(e) {
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
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ja = [],
          ka = -1;
        function Sa(e) {
          return { current: e };
        }
        function Oa(e) {
          0 > ka || ((e.current = ja[ka]), (ja[ka] = null), ka--);
        }
        function Ea(e, t) {
          ka++, (ja[ka] = e.current), (e.current = t);
        }
        var Ca = {},
          Na = Sa(Ca),
          Pa = Sa(!1),
          za = Ca;
        function Ma(e, t) {
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
        function _a(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ia() {
          Oa(Pa), Oa(Na);
        }
        function La(e, t, n) {
          if (Na.current !== Ca) throw Error(l(168));
          Ea(Na, t), Ea(Pa, n);
        }
        function Ta(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, U(e) || "Unknown", a));
          return B({}, n, r);
        }
        function Ra(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (za = Na.current),
            Ea(Na, e),
            Ea(Pa, Pa.current),
            !0
          );
        }
        function Ba(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ta(e, t, za)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Oa(Pa),
              Oa(Na),
              Ea(Na, e))
            : Oa(Pa),
            Ea(Pa, n);
        }
        var Fa = null,
          Da = !1,
          Va = !1;
        function Ha(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Aa() {
          if (!Va && null !== Fa) {
            Va = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Da = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Qe(Ge, Aa), a);
            } finally {
              (bt = t), (Va = !1);
            }
          }
          return null;
        }
        var Ua = [],
          $a = 0,
          Wa = null,
          qa = 0,
          Qa = [],
          Xa = 0,
          Za = null,
          Ka = 1,
          Ya = "";
        function Ja(e, t) {
          (Ua[$a++] = qa), (Ua[$a++] = Wa), (Wa = e), (qa = t);
        }
        function Ga(e, t, n) {
          (Qa[Xa++] = Ka), (Qa[Xa++] = Ya), (Qa[Xa++] = Za), (Za = e);
          var r = Ka;
          e = Ya;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ka = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ya = l + e);
          } else (Ka = (1 << l) | (n << a) | r), (Ya = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Ga(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Ua[--$a]), (Ua[$a] = null), (qa = Ua[--$a]), (Ua[$a] = null);
          for (; e === Za; )
            (Za = Qa[--Xa]),
              (Qa[Xa] = null),
              (Ya = Qa[--Xa]),
              (Qa[Xa] = null),
              (Ka = Qa[--Xa]),
              (Qa[Xa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = Mu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function cl(e, t) {
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
                ((n = null !== Za ? { id: Ka, overflow: Ya } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Mu(18, null, null, 0)).stateNode = t),
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
        function ol(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!cl(e, t)) {
                if (ol(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && cl(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ol(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function sl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function fl(e) {
          if (e !== nl) return !1;
          if (!al) return sl(e), (al = !0), !1;
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
            if (ol(e)) throw (dl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ua(t.nextSibling));
          }
          if ((sl(e), 13 === e.tag)) {
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
        function dl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = x.ReactCurrentBatchConfig;
        function vl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = B({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gl = Sa(null),
          yl = null,
          bl = null,
          xl = null;
        function wl() {
          xl = bl = yl = null;
        }
        function jl(e) {
          var t = gl.current;
          Oa(gl), (e._currentValue = t);
        }
        function kl(e, t, n) {
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
            (xl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bc = !0), (e.firstContext = null));
        }
        function Ol(e) {
          var t = e._currentValue;
          if (xl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var El = null;
        function Cl(e) {
          null === El ? (El = [e]) : El.push(e);
        }
        function Nl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Cl(t))
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
        var zl = !1;
        function Ml(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function _l(e, t) {
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
        function Il(e, t) {
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
          if (((r = r.shared), 0 !== (2 & No))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Pl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Cl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Pl(e, n)
          );
        }
        function Tl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Rl(e, t) {
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
        function Bl(e, t, n, r) {
          var a = e.updateQueue;
          zl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            c = a.shared.pending;
          if (null !== c) {
            a.shared.pending = null;
            var o = c,
              u = o.next;
            (o.next = null), null === i ? (l = u) : (i.next = u), (i = o);
            var s = e.alternate;
            null !== s &&
              (c = (s = s.updateQueue).lastBaseUpdate) !== i &&
              (null === c ? (s.firstBaseUpdate = u) : (c.next = u),
              (s.lastBaseUpdate = o));
          }
          if (null !== l) {
            var f = a.baseState;
            for (i = 0, s = u = o = null, c = l; ; ) {
              var d = c.lane,
                p = c.eventTime;
              if ((r & d) === d) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: c.tag,
                      payload: c.payload,
                      callback: c.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = c;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = B({}, f, d);
                      break e;
                    case 2:
                      zl = !0;
                  }
                }
                null !== c.callback &&
                  0 !== c.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [c]) : d.push(c));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: c.tag,
                  payload: c.payload,
                  callback: c.callback,
                  next: null,
                }),
                  null === s ? ((u = s = p), (o = f)) : (s = s.next = p),
                  (i |= d);
              if (null === (c = c.next)) {
                if (null === (c = a.shared.pending)) break;
                (c = (d = c).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (o = f),
              (a.baseState = o),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Ro |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Fl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Dl = new r.Component().refs;
        function Vl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : B({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Hl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ae(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Il(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ll(e, l, a)) && (nu(t, e, a, r), Tl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Il(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ll(e, l, a)) && (nu(t, e, a, r), Tl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Il(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ll(e, a, r)) && (nu(t, e, r, n), Tl(t, e, r));
          },
        };
        function Al(e, t, n, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !or(n, r) ||
                !or(a, l);
        }
        function Ul(e, t, n) {
          var r = !1,
            a = Ca,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Ol(l))
              : ((a = _a(t) ? za : Na.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ma(e, a)
                  : Ca)),
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
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Dl), Ml(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Ol(l))
            : ((l = _a(t) ? za : Na.current), (a.context = Ma(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Vl(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Hl.enqueueReplaceState(a, a.state, null),
              Bl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
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
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Dl && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Xl(e) {
          return (0, e._init)(e._payload);
        }
        function Zl(e) {
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
            return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
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
          function c(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function o(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === _ &&
                    Xl(l) === t.type))
              ? (((r = a(t, n.props)).ref = ql(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Tu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Bu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case j:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case _:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || T(t))
                return ((t = Tu(t, e.mode, n, null)).return = e), t;
              Ql(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : o(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case j:
                  return n.key === a ? s(e, t, n, r) : null;
                case _:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || T(n)) return null !== a ? null : f(e, t, n, r, null);
              Ql(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return o(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case j:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case _:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || T(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ql(t, r);
            }
            return null;
          }
          function m(a, l, c, o) {
            for (
              var u = null, s = null, f = l, m = (l = 0), v = null;
              null !== f && m < c.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, c[m], o);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (l = i(g, l, m)),
                null === s ? (u = g) : (s.sibling = g),
                (s = g),
                (f = v);
            }
            if (m === c.length) return n(a, f), al && Ja(a, m), u;
            if (null === f) {
              for (; m < c.length; m++)
                null !== (f = d(a, c[m], o)) &&
                  ((l = i(f, l, m)),
                  null === s ? (u = f) : (s.sibling = f),
                  (s = f));
              return al && Ja(a, m), u;
            }
            for (f = r(a, f); m < c.length; m++)
              null !== (v = h(f, a, m, c[m], o)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (l = i(v, l, m)),
                null === s ? (u = v) : (s.sibling = v),
                (s = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, m),
              u
            );
          }
          function v(a, c, o, u) {
            var s = T(o);
            if ("function" !== typeof s) throw Error(l(150));
            if (null == (o = s.call(o))) throw Error(l(151));
            for (
              var f = (s = null), m = c, v = (c = 0), g = null, y = o.next();
              null !== m && !y.done;
              v++, y = o.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (c = i(b, c, v)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(a, m), al && Ja(a, v), s;
            if (null === m) {
              for (; !y.done; v++, y = o.next())
                null !== (y = d(a, y.value, u)) &&
                  ((c = i(y, c, v)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return al && Ja(a, v), s;
            }
            for (m = r(a, m); !y.done; v++, y = o.next())
              null !== (y = h(m, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (c = i(y, c, v)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, v),
              s
            );
          }
          return function e(r, l, i, o) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, s = l; null !== s; ) {
                      if (s.key === u) {
                        if ((u = i.type) === k) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((l = a(s, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          s.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === _ &&
                            Xl(u) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((l = a(s, i.props)).ref = ql(r, s, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    i.type === k
                      ? (((l = Tu(i.props.children, r.mode, o, i.key)).return =
                          r),
                        (r = l))
                      : (((o = Lu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          o
                        )).ref = ql(r, l, i)),
                        (o.return = r),
                        (r = o));
                  }
                  return c(r);
                case j:
                  e: {
                    for (s = i.key; null !== l; ) {
                      if (l.key === s) {
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
                    ((l = Fu(i, r.mode, o)).return = r), (r = l);
                  }
                  return c(r);
                case _:
                  return e(r, l, (s = i._init)(i._payload), o);
              }
              if (te(i)) return m(r, l, i, o);
              if (T(i)) return v(r, l, i, o);
              Ql(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Bu(i, r.mode, o)).return = r), (r = l)),
                c(r))
              : n(r, l);
          };
        }
        var Kl = Zl(!0),
          Yl = Zl(!1),
          Jl = {},
          Gl = Sa(Jl),
          ei = Sa(Jl),
          ti = Sa(Jl);
        function ni(e) {
          if (e === Jl) throw Error(l(174));
          return e;
        }
        function ri(e, t) {
          switch ((Ea(ti, t), Ea(ei, e), Ea(Gl, Jl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : oe(null, "");
              break;
            default:
              t = oe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Oa(Gl), Ea(Gl, t);
        }
        function ai() {
          Oa(Gl), Oa(ei), Oa(ti);
        }
        function li(e) {
          ni(ti.current);
          var t = ni(Gl.current),
            n = oe(t, e.type);
          t !== n && (Ea(ei, e), Ea(Gl, n));
        }
        function ii(e) {
          ei.current === e && (Oa(Gl), Oa(ei));
        }
        var ci = Sa(0);
        function oi(e) {
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
              if (0 !== (128 & t.flags)) return t;
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
        function si() {
          for (var e = 0; e < ui.length; e++)
            ui[e]._workInProgressVersionPrimary = null;
          ui.length = 0;
        }
        var fi = x.ReactCurrentDispatcher,
          di = x.ReactCurrentBatchConfig,
          pi = 0,
          hi = null,
          mi = null,
          vi = null,
          gi = !1,
          yi = !1,
          bi = 0,
          xi = 0;
        function wi() {
          throw Error(l(321));
        }
        function ji(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function ki(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (hi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ic : cc),
            (e = n(r, a)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (bi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (vi = mi = null),
                (t.updateQueue = null),
                (fi.current = oc),
                (e = n(r, a));
            } while (yi);
          }
          if (
            ((fi.current = lc),
            (t = null !== mi && null !== mi.next),
            (pi = 0),
            (vi = mi = hi = null),
            (gi = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function Si() {
          var e = 0 !== bi;
          return (bi = 0), e;
        }
        function Oi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vi ? (hi.memoizedState = vi = e) : (vi = vi.next = e), vi
          );
        }
        function Ei() {
          if (null === mi) {
            var e = hi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === vi ? hi.memoizedState : vi.next;
          if (null !== t) (vi = t), (mi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === vi ? (hi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ci(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ni(e) {
          var t = Ei(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var c = a.next;
              (a.next = i.next), (i.next = c);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var o = (c = null),
              u = null,
              s = i;
            do {
              var f = s.lane;
              if ((pi & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: f,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((o = u = d), (c = r)) : (u = u.next = d),
                  (hi.lanes |= f),
                  (Ro |= f);
              }
              s = s.next;
            } while (null !== s && s !== i);
            null === u ? (c = r) : (u.next = o),
              cr(r, t.memoizedState) || (bc = !0),
              (t.memoizedState = r),
              (t.baseState = c),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (hi.lanes |= i), (Ro |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Pi(e) {
          var t = Ei(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var c = (a = a.next);
            do {
              (i = e(i, c.action)), (c = c.next);
            } while (c !== a);
            cr(i, t.memoizedState) || (bc = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function zi() {}
        function Mi(e, t) {
          var n = hi,
            r = Ei(),
            a = t(),
            i = !cr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bc = !0)),
            (r = r.queue),
            Ui(Li.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fi(9, Ii.bind(null, n, r, a, t), void 0, null),
              null === Po)
            )
              throw Error(l(349));
            0 !== (30 & pi) || _i(n, t, a);
          }
          return a;
        }
        function _i(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ii(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ti(t) && Ri(e);
        }
        function Li(e, t, n) {
          return n(function () {
            Ti(t) && Ri(e);
          });
        }
        function Ti(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !cr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ri(e) {
          var t = Pl(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Bi(e) {
          var t = Oi();
          return (
            "function" === typeof e && (e = e()),
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
            (e = e.dispatch = tc.bind(null, hi, e)),
            [t.memoizedState, e]
          );
        }
        function Fi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = hi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Di() {
          return Ei().memoizedState;
        }
        function Vi(e, t, n, r) {
          var a = Oi();
          (hi.flags |= e),
            (a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Hi(e, t, n, r) {
          var a = Ei();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((l = i.destroy), null !== r && ji(r, i.deps)))
              return void (a.memoizedState = Fi(t, n, l, r));
          }
          (hi.flags |= e), (a.memoizedState = Fi(1 | t, n, l, r));
        }
        function Ai(e, t) {
          return Vi(8390656, 8, e, t);
        }
        function Ui(e, t) {
          return Hi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Hi(4, 2, e, t);
        }
        function Wi(e, t) {
          return Hi(4, 4, e, t);
        }
        function qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Hi(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Xi() {}
        function Zi(e, t) {
          var n = Ei();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ji(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ki(e, t) {
          var n = Ei();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ji(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Yi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (bc = !0)),
              (e.memoizedState = n))
            : (cr(n, t) ||
                ((n = mt()), (hi.lanes |= n), (Ro |= n), (e.baseState = !0)),
              t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = di.transition;
          di.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (di.transition = r);
          }
        }
        function Gi() {
          return Ei().memoizedState;
        }
        function ec(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            nc(e))
          )
            rc(t, n);
          else if (null !== (n = Nl(e, t, n, r))) {
            nu(n, e, r, eu()), ac(n, t, r);
          }
        }
        function tc(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (nc(e)) rc(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  c = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = c), cr(c, i))) {
                  var o = t.interleaved;
                  return (
                    null === o
                      ? ((a.next = a), Cl(t))
                      : ((a.next = o.next), (o.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Nl(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), ac(n, t, r));
          }
        }
        function nc(e) {
          var t = e.alternate;
          return e === hi || (null !== t && t === hi);
        }
        function rc(e, t) {
          yi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ac(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var lc = {
            readContext: Ol,
            useCallback: wi,
            useContext: wi,
            useEffect: wi,
            useImperativeHandle: wi,
            useInsertionEffect: wi,
            useLayoutEffect: wi,
            useMemo: wi,
            useReducer: wi,
            useRef: wi,
            useState: wi,
            useDebugValue: wi,
            useDeferredValue: wi,
            useTransition: wi,
            useMutableSource: wi,
            useSyncExternalStore: wi,
            useId: wi,
            unstable_isNewReconciler: !1,
          },
          ic = {
            readContext: Ol,
            useCallback: function (e, t) {
              return (Oi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ol,
            useEffect: Ai,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Vi(4194308, 4, qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Vi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Vi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Oi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Oi();
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
                (e = e.dispatch = ec.bind(null, hi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Oi().memoizedState = e);
            },
            useState: Bi,
            useDebugValue: Xi,
            useDeferredValue: function (e) {
              return (Oi().memoizedState = e);
            },
            useTransition: function () {
              var e = Bi(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (Oi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = hi,
                a = Oi();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Po)) throw Error(l(349));
                0 !== (30 & pi) || _i(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Ai(Li.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Fi(9, Ii.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Oi(),
                t = Po.identifierPrefix;
              if (al) {
                var n = Ya;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - it(Ka) - 1))).toString(32) + n)),
                  0 < (n = bi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          cc = {
            readContext: Ol,
            useCallback: Zi,
            useContext: Ol,
            useEffect: Ui,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: Wi,
            useMemo: Ki,
            useReducer: Ni,
            useRef: Di,
            useState: function () {
              return Ni(Ci);
            },
            useDebugValue: Xi,
            useDeferredValue: function (e) {
              return Yi(Ei(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ni(Ci)[0], Ei().memoizedState];
            },
            useMutableSource: zi,
            useSyncExternalStore: Mi,
            useId: Gi,
            unstable_isNewReconciler: !1,
          },
          oc = {
            readContext: Ol,
            useCallback: Zi,
            useContext: Ol,
            useEffect: Ui,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: Wi,
            useMemo: Ki,
            useReducer: Pi,
            useRef: Di,
            useState: function () {
              return Pi(Ci);
            },
            useDebugValue: Xi,
            useDeferredValue: function (e) {
              var t = Ei();
              return null === mi
                ? (t.memoizedState = e)
                : Yi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ci)[0], Ei().memoizedState];
            },
            useMutableSource: zi,
            useSyncExternalStore: Mi,
            useId: Gi,
            unstable_isNewReconciler: !1,
          };
        function uc(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function sc(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fc(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var dc = "function" === typeof WeakMap ? WeakMap : Map;
        function pc(e, t, n) {
          ((n = Il(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $o || (($o = !0), (Wo = r)), fc(0, t);
            }),
            n
          );
        }
        function hc(e, t, n) {
          (n = Il(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fc(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                fc(0, t),
                  "function" !== typeof r &&
                    (null === qo ? (qo = new Set([this])) : qo.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mc(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new dc();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ou.bind(null, e, t, n)), t.then(e, e));
        }
        function vc(e) {
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
        function gc(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Il(-1, 1)).tag = 2), Ll(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yc = x.ReactCurrentOwner,
          bc = !1;
        function xc(e, t, n, r) {
          t.child = null === e ? Yl(t, null, n, r) : Kl(t, e.child, n, r);
        }
        function wc(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            Sl(t, a),
            (r = ki(e, t, n, r, l, a)),
            (n = Si()),
            null === e || bc
              ? (al && n && el(t), (t.flags |= 1), xc(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Uc(e, t, a))
          );
        }
        function jc(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              _u(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), kc(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : or)(i, r) &&
              e.ref === t.ref
            )
              return Uc(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Iu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function kc(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (or(l, r) && e.ref === t.ref) {
              if (((bc = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Uc(e, t, a);
              0 !== (131072 & e.flags) && (bc = !0);
            }
          }
          return Ec(e, t, n, r, a);
        }
        function Sc(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(Io, _o),
                (_o |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(Io, _o),
                  (_o |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ea(Io, _o),
                (_o |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(Io, _o),
              (_o |= r);
          return xc(e, t, a, n), t.child;
        }
        function Oc(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ec(e, t, n, r, a) {
          var l = _a(n) ? za : Na.current;
          return (
            (l = Ma(t, l)),
            Sl(t, a),
            (n = ki(e, t, n, r, l, a)),
            (r = Si()),
            null === e || bc
              ? (al && r && el(t), (t.flags |= 1), xc(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Uc(e, t, a))
          );
        }
        function Cc(e, t, n, r, a) {
          if (_a(n)) {
            var l = !0;
            Ra(t);
          } else l = !1;
          if ((Sl(t, a), null === t.stateNode))
            Ac(e, t), Ul(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              c = t.memoizedProps;
            i.props = c;
            var o = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ol(u))
              : (u = Ma(t, (u = _a(n) ? za : Na.current)));
            var s = n.getDerivedStateFromProps,
              f =
                "function" === typeof s ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((c !== r || o !== u) && $l(t, i, r, u)),
              (zl = !1);
            var d = t.memoizedState;
            (i.state = d),
              Bl(t, r, i, a),
              (o = t.memoizedState),
              c !== r || d !== o || Pa.current || zl
                ? ("function" === typeof s &&
                    (Vl(t, n, s, r), (o = t.memoizedState)),
                  (c = zl || Al(t, n, c, r, d, o, u))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = o)),
                  (i.props = r),
                  (i.state = o),
                  (i.context = u),
                  (r = c))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              _l(e, t),
              (c = t.memoizedProps),
              (u = t.type === t.elementType ? c : vl(t.type, c)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (o = n.contextType) && null !== o
                ? (o = Ol(o))
                : (o = Ma(t, (o = _a(n) ? za : Na.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((c !== f || d !== o) && $l(t, i, r, o)),
              (zl = !1),
              (d = t.memoizedState),
              (i.state = d),
              Bl(t, r, i, a);
            var h = t.memoizedState;
            c !== f || d !== h || Pa.current || zl
              ? ("function" === typeof p &&
                  (Vl(t, n, p, r), (h = t.memoizedState)),
                (u = zl || Al(t, n, u, r, d, h, o) || !1)
                  ? (s ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, o),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, o)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (c === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (c === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = o),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (c === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (c === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nc(e, t, n, r, l, a);
        }
        function Nc(e, t, n, r, a, l) {
          Oc(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ba(t, n, !1), Uc(e, t, l);
          (r = t.stateNode), (yc.current = t);
          var c =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Kl(t, e.child, null, l)),
                (t.child = Kl(t, null, c, l)))
              : xc(e, t, c, l),
            (t.memoizedState = r.state),
            a && Ba(t, n, !0),
            t.child
          );
        }
        function Pc(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            ri(e, t.containerInfo);
        }
        function zc(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), xc(e, t, n, r), t.child;
        }
        var Mc,
          _c,
          Ic,
          Lc = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Tc(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Rc(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ci.current,
            c = !1,
            o = 0 !== (128 & t.flags);
          if (
            ((r = o) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((c = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ea(ci, 1 & i),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((o = a.children),
                  (e = a.fallback),
                  c
                    ? ((a = t.mode),
                      (c = t.child),
                      (o = { mode: "hidden", children: o }),
                      0 === (1 & a) && null !== c
                        ? ((c.childLanes = 0), (c.pendingProps = o))
                        : (c = Ru(o, a, 0, null)),
                      (e = Tu(e, a, n, null)),
                      (c.return = t),
                      (e.return = t),
                      (c.sibling = e),
                      (t.child = c),
                      (t.child.memoizedState = Tc(n)),
                      (t.memoizedState = Lc),
                      e)
                    : Bc(t, o))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, c) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fc(e, t, c, (r = sc(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Ru(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Tu(i, a, c, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Kl(t, e.child, null, c),
                    (t.child.memoizedState = Tc(c)),
                    (t.memoizedState = Lc),
                    i);
              if (0 === (1 & t.mode)) return Fc(e, t, c, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var o = r.dgst;
                return (
                  (r = o), Fc(e, t, c, (r = sc((i = Error(l(419))), r, void 0)))
                );
              }
              if (((o = 0 !== (c & e.childLanes)), bc || o)) {
                if (null !== (r = Po)) {
                  switch (c & -c) {
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
                  0 !== (a = 0 !== (a & (r.suspendedLanes | c)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Pl(e, a), nu(r, e, a, -1));
                }
                return mu(), Fc(e, t, c, (r = sc(Error(l(421)))));
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
                    ((Qa[Xa++] = Ka),
                    (Qa[Xa++] = Ya),
                    (Qa[Xa++] = Za),
                    (Ka = e.id),
                    (Ya = e.overflow),
                    (Za = t)),
                  ((t = Bc(t, r.children)).flags |= 4096),
                  t);
            })(e, t, o, a, r, i, n);
          if (c) {
            (c = a.fallback), (o = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & o) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Iu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (c = Iu(r, c))
                : ((c = Tu(c, o, n, null)).flags |= 2),
              (c.return = t),
              (a.return = t),
              (a.sibling = c),
              (t.child = a),
              (a = c),
              (c = t.child),
              (o =
                null === (o = e.child.memoizedState)
                  ? Tc(n)
                  : {
                      baseLanes: o.baseLanes | n,
                      cachePool: null,
                      transitions: o.transitions,
                    }),
              (c.memoizedState = o),
              (c.childLanes = e.childLanes & ~n),
              (t.memoizedState = Lc),
              a
            );
          }
          return (
            (e = (c = e.child).sibling),
            (a = Iu(c, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
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
        function Bc(e, t) {
          return (
            ((t = Ru(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fc(e, t, n, r) {
          return (
            null !== r && hl(r),
            Kl(t, e.child, null, n),
            ((e = Bc(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Dc(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), kl(e.return, t, n);
        }
        function Vc(e, t, n, r, a) {
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
        function Hc(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((xc(e, t, r.children, n), 0 !== (2 & (r = ci.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Dc(e, n, t);
                else if (19 === e.tag) Dc(e, n, t);
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
          if ((Ea(ci, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === oi(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Vc(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === oi(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Vc(t, !0, n, null, l);
                break;
              case "together":
                Vc(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ac(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Uc(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ro |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Iu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Iu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $c(e, t) {
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
        function Wc(e) {
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
        function qc(e, t, n) {
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
              return Wc(t), null;
            case 1:
            case 17:
              return _a(t.type) && Ia(), Wc(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Oa(Pa),
                Oa(Na),
                si(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (iu(ll), (ll = null)))),
                Wc(t),
                null
              );
            case 5:
              ii(t);
              var a = ni(ti.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                _c(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Wc(t), null;
                }
                if (((e = ni(Gl.current)), fl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Tr.length; a++) Dr(Tr[a], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      K(r, i), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Dr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Dr("invalid", r);
                  }
                  for (var o in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(o)) {
                      var u = i[o];
                      "children" === o
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : c.hasOwnProperty(o) &&
                          null != u &&
                          "onScroll" === o &&
                          Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), G(r, i, !0);
                      break;
                    case "textarea":
                      q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Gr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (o = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ce(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = o.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = o.createElement(n, { is: r.is }))
                        : ((e = o.createElement(n)),
                          "select" === n &&
                            ((o = e),
                            r.multiple
                              ? (o.multiple = !0)
                              : r.size && (o.size = r.size)))
                      : (e = o.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Mc(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((o = be(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Tr.length; a++) Dr(Tr[a], e);
                        a = r;
                        break;
                      case "source":
                        Dr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (a = r);
                        break;
                      case "details":
                        Dr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = Z(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = B({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Dr("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var s = u[i];
                        "style" === i
                          ? ve(e, s)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (s = s ? s.__html : void 0) && fe(e, s)
                          : "children" === i
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && de(e, s)
                            : "number" === typeof s && de(e, "" + s)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (c.hasOwnProperty(i)
                              ? null != s && "onScroll" === i && Dr("scroll", e)
                              : null != s && b(e, i, s, o));
                      }
                    switch (n) {
                      case "input":
                        q(e), G(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + $(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Gr);
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
              return Wc(t), null;
            case 6:
              if (e && null != t.stateNode) Ic(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = ni(ti.current)), ni(Gl.current), fl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Wc(t), null;
            case 13:
              if (
                (Oa(ci),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  dl(), pl(), (t.flags |= 98560), (i = !1);
                else if (((i = fl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[da] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Wc(t), (i = !1);
                } else null !== ll && (iu(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ci.current)
                        ? 0 === Lo && (Lo = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Wc(t),
                  null);
            case 4:
              return (
                ai(), null === e && Ar(t.stateNode.containerInfo), Wc(t), null
              );
            case 10:
              return jl(t.type._context), Wc(t), null;
            case 19:
              if ((Oa(ci), null === (i = t.memoizedState))) return Wc(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (o = i.rendering)))
                if (r) $c(i, !1);
                else {
                  if (0 !== Lo || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = oi(e))) {
                        for (
                          t.flags |= 128,
                            $c(i, !1),
                            null !== (r = o.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (o = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = o.childLanes),
                                (i.lanes = o.lanes),
                                (i.child = o.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = o.memoizedProps),
                                (i.memoizedState = o.memoizedState),
                                (i.updateQueue = o.updateQueue),
                                (i.type = o.type),
                                (e = o.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea(ci, (1 & ci.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ye() > Ao &&
                    ((t.flags |= 128),
                    (r = !0),
                    $c(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = oi(o))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $c(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !o.alternate &&
                        !al)
                    )
                      return Wc(t), null;
                  } else
                    2 * Ye() - i.renderingStartTime > Ao &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $c(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((o.sibling = t.child), (t.child = o))
                  : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o),
                    (i.last = o));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = ci.current),
                  Ea(ci, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Wc(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & _o) &&
                    (Wc(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Wc(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Qc(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                _a(t.type) && Ia(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Oa(Pa),
                Oa(Na),
                si(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ii(t), null;
            case 13:
              if (
                (Oa(ci),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Oa(ci), null;
            case 4:
              return ai(), null;
            case 10:
              return jl(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Mc = function (e, t) {
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
          (_c = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ni(Gl.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = Z(e, a)), (r = Z(e, r)), (i = []);
                  break;
                case "select":
                  (a = B({}, a, { value: void 0 })),
                    (r = B({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Gr);
              }
              for (s in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var o = a[s];
                    for (l in o)
                      o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (c.hasOwnProperty(s)
                        ? i || (i = [])
                        : (i = i || []).push(s, null));
              for (s in r) {
                var u = r[s];
                if (
                  ((o = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && u !== o && (null != u || null != o))
                )
                  if ("style" === s)
                    if (o) {
                      for (l in o)
                        !o.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          o[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(s, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((u = u ? u.__html : void 0),
                        (o = o ? o.__html : void 0),
                        null != u && o !== u && (i = i || []).push(s, u))
                      : "children" === s
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(s, "" + u)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (c.hasOwnProperty(s)
                          ? (null != u && "onScroll" === s && Dr("scroll", e),
                            i || o === u || (i = []))
                          : (i = i || []).push(s, u));
              }
              n && (i = i || []).push("style", n);
              var s = i;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (Ic = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xc = !1,
          Zc = !1,
          Kc = "function" === typeof WeakSet ? WeakSet : Set,
          Yc = null;
        function Jc(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Su(e, t, r);
              }
            else n.current = null;
        }
        function Gc(e, t, n) {
          try {
            n();
          } catch (r) {
            Su(e, t, r);
          }
        }
        var eo = !1;
        function to(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && Gc(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function no(e, t) {
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
        function ro(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ao(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ao(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
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
        function lo(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function io(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lo(e.return)) return null;
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
        function co(e, t, n) {
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
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Gr));
          else if (4 !== r && null !== (e = e.child))
            for (co(e, t, n), e = e.sibling; null !== e; )
              co(e, t, n), (e = e.sibling);
        }
        function oo(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (oo(e, t, n), e = e.sibling; null !== e; )
              oo(e, t, n), (e = e.sibling);
        }
        var uo = null,
          so = !1;
        function fo(e, t, n) {
          for (n = n.child; null !== n; ) po(e, t, n), (n = n.sibling);
        }
        function po(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (c) {}
          switch (n.tag) {
            case 5:
              Zc || Jc(n, t);
            case 6:
              var r = uo,
                a = so;
              (uo = null),
                fo(e, t, n),
                (so = a),
                null !== (uo = r) &&
                  (so
                    ? ((e = uo),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : uo.removeChild(n.stateNode));
              break;
            case 18:
              null !== uo &&
                (so
                  ? ((e = uo),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? oa(e.parentNode, n)
                      : 1 === e.nodeType && oa(e, n),
                    At(e))
                  : oa(uo, n.stateNode));
              break;
            case 4:
              (r = uo),
                (a = so),
                (uo = n.stateNode.containerInfo),
                (so = !0),
                fo(e, t, n),
                (uo = r),
                (so = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zc &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      Gc(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fo(e, t, n);
              break;
            case 1:
              if (
                !Zc &&
                (Jc(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (c) {
                  Su(n, t, c);
                }
              fo(e, t, n);
              break;
            case 21:
              fo(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zc = (r = Zc) || null !== n.memoizedState),
                  fo(e, t, n),
                  (Zc = r))
                : fo(e, t, n);
              break;
            default:
              fo(e, t, n);
          }
        }
        function ho(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Kc()),
              t.forEach(function (t) {
                var r = Nu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mo(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  c = t,
                  o = c;
                e: for (; null !== o; ) {
                  switch (o.tag) {
                    case 5:
                      (uo = o.stateNode), (so = !1);
                      break e;
                    case 3:
                    case 4:
                      (uo = o.stateNode.containerInfo), (so = !0);
                      break e;
                  }
                  o = o.return;
                }
                if (null === uo) throw Error(l(160));
                po(i, c, a), (uo = null), (so = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (s) {
                Su(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vo(t, e), (t = t.sibling);
        }
        function vo(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mo(t, e), go(e), 4 & r)) {
                try {
                  to(3, e, e.return), no(3, e);
                } catch (v) {
                  Su(e, e.return, v);
                }
                try {
                  to(5, e, e.return);
                } catch (v) {
                  Su(e, e.return, v);
                }
              }
              break;
            case 1:
              mo(t, e), go(e), 512 & r && null !== n && Jc(n, n.return);
              break;
            case 5:
              if (
                (mo(t, e),
                go(e),
                512 & r && null !== n && Jc(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  Su(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  c = null !== n ? n.memoizedProps : i,
                  o = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === o &&
                      "radio" === i.type &&
                      null != i.name &&
                      Y(a, i),
                      be(o, c);
                    var s = be(o, i);
                    for (c = 0; c < u.length; c += 2) {
                      var f = u[c],
                        d = u[c + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, s);
                    }
                    switch (o) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (v) {
                    Su(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((mo(t, e), go(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (v) {
                  Su(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (mo(t, e),
                go(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  At(t.containerInfo);
                } catch (v) {
                  Su(e, e.return, v);
                }
              break;
            case 4:
            default:
              mo(t, e), go(e);
              break;
            case 13:
              mo(t, e),
                go(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Ho = Ye())),
                4 & r && ho(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zc = (s = Zc) || f), mo(t, e), (Zc = s))
                  : mo(t, e),
                go(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !f && 0 !== (1 & e.mode))
                )
                  for (Yc = e, f = e.child; null !== f; ) {
                    for (d = Yc = f; null !== Yc; ) {
                      switch (((h = (p = Yc).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          to(4, p, p.return);
                          break;
                        case 1:
                          Jc(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Su(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          Jc(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            wo(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Yc = h)) : wo(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          s
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((o = d.stateNode),
                              (c =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (o.style.display = me("display", c)));
                      } catch (v) {
                        Su(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                      } catch (v) {
                        Su(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mo(t, e), go(e), 4 & r && ho(e);
            case 21:
          }
        }
        function go(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lo(n)) {
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
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    oo(e, io(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  co(e, io(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (c) {
              Su(e, e.return, c);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yo(e, t, n) {
          (Yc = e), bo(e, t, n);
        }
        function bo(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Yc; ) {
            var a = Yc,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Xc;
              if (!i) {
                var c = a.alternate,
                  o = (null !== c && null !== c.memoizedState) || Zc;
                c = Xc;
                var u = Zc;
                if (((Xc = i), (Zc = o) && !u))
                  for (Yc = a; null !== Yc; )
                    (o = (i = Yc).child),
                      22 === i.tag && null !== i.memoizedState
                        ? jo(a)
                        : null !== o
                        ? ((o.return = i), (Yc = o))
                        : jo(a);
                for (; null !== l; ) (Yc = l), bo(l, t, n), (l = l.sibling);
                (Yc = a), (Xc = c), (Zc = u);
              }
              xo(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Yc = l))
                : xo(e);
          }
        }
        function xo(e) {
          for (; null !== Yc; ) {
            var t = Yc;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zc || no(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zc)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Fl(t, i, r);
                      break;
                    case 3:
                      var c = t.updateQueue;
                      if (null !== c) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fl(t, c, n);
                      }
                      break;
                    case 5:
                      var o = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = o;
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
                        var s = t.alternate;
                        if (null !== s) {
                          var f = s.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && At(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Zc || (512 & t.flags && ro(t));
              } catch (p) {
                Su(t, t.return, p);
              }
            }
            if (t === e) {
              Yc = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Yc = n);
              break;
            }
            Yc = t.return;
          }
        }
        function wo(e) {
          for (; null !== Yc; ) {
            var t = Yc;
            if (t === e) {
              Yc = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Yc = n);
              break;
            }
            Yc = t.return;
          }
        }
        function jo(e) {
          for (; null !== Yc; ) {
            var t = Yc;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    no(4, t);
                  } catch (o) {
                    Su(t, n, o);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (o) {
                      Su(t, a, o);
                    }
                  }
                  var l = t.return;
                  try {
                    ro(t);
                  } catch (o) {
                    Su(t, l, o);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ro(t);
                  } catch (o) {
                    Su(t, i, o);
                  }
              }
            } catch (o) {
              Su(t, t.return, o);
            }
            if (t === e) {
              Yc = null;
              break;
            }
            var c = t.sibling;
            if (null !== c) {
              (c.return = t.return), (Yc = c);
              break;
            }
            Yc = t.return;
          }
        }
        var ko,
          So = Math.ceil,
          Oo = x.ReactCurrentDispatcher,
          Eo = x.ReactCurrentOwner,
          Co = x.ReactCurrentBatchConfig,
          No = 0,
          Po = null,
          zo = null,
          Mo = 0,
          _o = 0,
          Io = Sa(0),
          Lo = 0,
          To = null,
          Ro = 0,
          Bo = 0,
          Fo = 0,
          Do = null,
          Vo = null,
          Ho = 0,
          Ao = 1 / 0,
          Uo = null,
          $o = !1,
          Wo = null,
          qo = null,
          Qo = !1,
          Xo = null,
          Zo = 0,
          Ko = 0,
          Yo = null,
          Jo = -1,
          Go = 0;
        function eu() {
          return 0 !== (6 & No) ? Ye() : -1 !== Jo ? Jo : (Jo = Ye());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & No) && 0 !== Mo
            ? Mo & -Mo
            : null !== ml.transition
            ? (0 === Go && (Go = mt()), Go)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ko) throw ((Ko = 0), (Yo = null), Error(l(185)));
          gt(e, n, r),
            (0 !== (2 & No) && e === Po) ||
              (e === Po && (0 === (2 & No) && (Bo |= n), 4 === Lo && cu(e, Mo)),
              ru(e, r),
              1 === n &&
                0 === No &&
                0 === (1 & t.mode) &&
                ((Ao = Ye() + 500), Da && Aa()));
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
                c = 1 << i,
                o = a[i];
              -1 === o
                ? (0 !== (c & n) && 0 === (c & r)) || (a[i] = pt(c, t))
                : o <= t && (e.expiredLanes |= c),
                (l &= ~c);
            }
          })(e, t);
          var r = dt(e, e === Po ? Mo : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Ha(e);
                  })(ou.bind(null, e))
                : Ha(ou.bind(null, e)),
                ia(function () {
                  0 === (6 & No) && Aa();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Ge;
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
          if (((Jo = -1), (Go = 0), 0 !== (6 & No))) throw Error(l(327));
          var n = e.callbackNode;
          if (ju() && e.callbackNode !== n) return null;
          var r = dt(e, e === Po ? Mo : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
          else {
            t = r;
            var a = No;
            No |= 2;
            var i = hu();
            for (
              (Po === e && Mo === t) ||
              ((Uo = null), (Ao = Ye() + 500), du(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (o) {
                pu(e, o);
              }
            wl(),
              (Oo.current = i),
              (No = a),
              null !== zo ? (t = 0) : ((Po = null), (Mo = 0), (t = Lo));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = To), du(e, 0), cu(e, r), ru(e, Ye()), n);
            if (6 === t) cu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
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
                              if (!cr(l(), a)) return !1;
                            } catch (c) {
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
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = lu(e, i))),
                  1 === t))
              )
                throw ((n = To), du(e, 0), cu(e, r), ru(e, Ye()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  wu(e, Vo, Uo);
                  break;
                case 3:
                  if (
                    (cu(e, r),
                    (130023424 & r) === r && 10 < (t = Ho + 500 - Ye()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, Vo, Uo), t);
                    break;
                  }
                  wu(e, Vo, Uo);
                  break;
                case 4:
                  if ((cu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var c = 31 - it(r);
                    (i = 1 << c), (c = t[c]) > a && (a = c), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
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
                          : 1960 * So(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, Vo, Uo), r);
                    break;
                  }
                  wu(e, Vo, Uo);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Ye()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = Do;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Vo), (Vo = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Vo ? (Vo = e) : Vo.push.apply(Vo, e);
        }
        function cu(e, t) {
          for (
            t &= ~Fo,
              t &= ~Bo,
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
        function ou(e) {
          if (0 !== (6 & No)) throw Error(l(327));
          ju();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Ye()), null;
          var n = vu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = To), du(e, 0), cu(e, t), ru(e, Ye()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Vo, Uo),
            ru(e, Ye()),
            null
          );
        }
        function uu(e, t) {
          var n = No;
          No |= 1;
          try {
            return e(t);
          } finally {
            0 === (No = n) && ((Ao = Ye() + 500), Da && Aa());
          }
        }
        function su(e) {
          null !== Xo && 0 === Xo.tag && 0 === (6 & No) && ju();
          var t = No;
          No |= 1;
          var n = Co.transition,
            r = bt;
          try {
            if (((Co.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Co.transition = n), 0 === (6 & (No = t)) && Aa();
          }
        }
        function fu() {
          (_o = Io.current), Oa(Io);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== zo))
            for (n = zo.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ia();
                  break;
                case 3:
                  ai(), Oa(Pa), Oa(Na), si();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Oa(ci);
                  break;
                case 10:
                  jl(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Po = e),
            (zo = e = Iu(e.current, null)),
            (Mo = _o = t),
            (Lo = 0),
            (To = null),
            (Fo = Bo = Ro = 0),
            (Vo = Do = null),
            null !== El)
          ) {
            for (t = 0; t < El.length; t++)
              if (null !== (r = (n = El[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            El = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = zo;
            try {
              if ((wl(), (fi.current = lc), gi)) {
                for (var r = hi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((pi = 0),
                (vi = mi = hi = null),
                (yi = !1),
                (bi = 0),
                (Eo.current = null),
                null === n || null === n.return)
              ) {
                (Lo = 1), (To = t), (zo = null);
                break;
              }
              e: {
                var i = e,
                  c = n.return,
                  o = n,
                  u = t;
                if (
                  ((t = Mo),
                  (o.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var s = u,
                    f = o,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = vc(c);
                  if (null !== h) {
                    (h.flags &= -257),
                      gc(h, c, o, 0, t),
                      1 & h.mode && mc(i, s, t),
                      (u = s);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mc(i, s, t), mu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & o.mode) {
                  var g = vc(c);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      gc(g, c, o, 0, t),
                      hl(uc(u, o));
                    break e;
                  }
                }
                (i = u = uc(u, o)),
                  4 !== Lo && (Lo = 2),
                  null === Do ? (Do = [i]) : Do.push(i),
                  (i = c);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Rl(i, pc(0, u, t));
                      break e;
                    case 1:
                      o = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qo || !qo.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Rl(i, hc(i, o, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (x) {
              (t = x), zo === n && null !== n && (zo = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Oo.current;
          return (Oo.current = lc), null === e ? lc : e;
        }
        function mu() {
          (0 !== Lo && 3 !== Lo && 2 !== Lo) || (Lo = 4),
            null === Po ||
              (0 === (268435455 & Ro) && 0 === (268435455 & Bo)) ||
              cu(Po, Mo);
        }
        function vu(e, t) {
          var n = No;
          No |= 2;
          var r = hu();
          for ((Po === e && Mo === t) || ((Uo = null), du(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((wl(), (No = n), (Oo.current = r), null !== zo))
            throw Error(l(261));
          return (Po = null), (Mo = 0), Lo;
        }
        function gu() {
          for (; null !== zo; ) bu(zo);
        }
        function yu() {
          for (; null !== zo && !Ze(); ) bu(zo);
        }
        function bu(e) {
          var t = ko(e.alternate, e, _o);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (zo = t),
            (Eo.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qc(n, t, _o))) return void (zo = n);
            } else {
              if (null !== (n = Qc(n, t)))
                return (n.flags &= 32767), void (zo = n);
              if (null === e) return (Lo = 6), void (zo = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (zo = t);
            zo = t = e;
          } while (null !== t);
          0 === Lo && (Lo = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = Co.transition;
          try {
            (Co.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ju();
                } while (null !== Xo);
                if (0 !== (6 & No)) throw Error(l(327));
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
                  e === Po && ((zo = Po = null), (Mo = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qo ||
                    ((Qo = !0),
                    Pu(tt, function () {
                      return ju(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Co.transition), (Co.transition = null);
                  var c = bt;
                  bt = 1;
                  var o = No;
                  (No |= 4),
                    (Eo.current = null),
                    (function (e, t) {
                      if (((ea = $t), pr((e = dr())))) {
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
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var c = 0,
                                o = -1,
                                u = -1,
                                s = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (o = c + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = c + r),
                                    3 === d.nodeType &&
                                      (c += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++s === a && (o = c),
                                    p === i && ++f === r && (u = c),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === o || -1 === u
                                  ? null
                                  : { start: o, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Yc = t;
                        null !== Yc;

                      )
                        if (
                          ((e = (t = Yc).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Yc = e);
                        else
                          for (; null !== Yc; ) {
                            t = Yc;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
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
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : vl(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              Su(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Yc = e);
                              break;
                            }
                            Yc = t.return;
                          }
                      (m = eo), (eo = !1);
                    })(e, n),
                    vo(n, e),
                    hr(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yo(n, e, a),
                    Ke(),
                    (No = o),
                    (bt = c),
                    (Co.transition = i);
                } else e.current = n;
                if (
                  (Qo && ((Qo = !1), (Xo = e), (Zo = a)),
                  0 === (i = e.pendingLanes) && (qo = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if ($o) throw (($o = !1), (e = Wo), (Wo = null), e);
                0 !== (1 & Zo) && 0 !== e.tag && ju(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === Yo
                      ? Ko++
                      : ((Ko = 0), (Yo = e))
                    : (Ko = 0),
                  Aa();
              })(e, t, n, r);
          } finally {
            (Co.transition = a), (bt = r);
          }
          return null;
        }
        function ju() {
          if (null !== Xo) {
            var e = xt(Zo),
              t = Co.transition,
              n = bt;
            try {
              if (((Co.transition = null), (bt = 16 > e ? 16 : e), null === Xo))
                var r = !1;
              else {
                if (((e = Xo), (Xo = null), (Zo = 0), 0 !== (6 & No)))
                  throw Error(l(331));
                var a = No;
                for (No |= 4, Yc = e.current; null !== Yc; ) {
                  var i = Yc,
                    c = i.child;
                  if (0 !== (16 & Yc.flags)) {
                    var o = i.deletions;
                    if (null !== o) {
                      for (var u = 0; u < o.length; u++) {
                        var s = o[u];
                        for (Yc = s; null !== Yc; ) {
                          var f = Yc;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              to(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Yc = d);
                          else
                            for (; null !== Yc; ) {
                              var p = (f = Yc).sibling,
                                h = f.return;
                              if ((ao(f), f === s)) {
                                Yc = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Yc = p);
                                break;
                              }
                              Yc = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Yc = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== c)
                    (c.return = i), (Yc = c);
                  else
                    e: for (; null !== Yc; ) {
                      if (0 !== (2048 & (i = Yc).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            to(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Yc = y);
                        break e;
                      }
                      Yc = i.return;
                    }
                }
                var b = e.current;
                for (Yc = b; null !== Yc; ) {
                  var x = (c = Yc).child;
                  if (0 !== (2064 & c.subtreeFlags) && null !== x)
                    (x.return = c), (Yc = x);
                  else
                    e: for (c = b; null !== Yc; ) {
                      if (0 !== (2048 & (o = Yc).flags))
                        try {
                          switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                              no(9, o);
                          }
                        } catch (j) {
                          Su(o, o.return, j);
                        }
                      if (o === c) {
                        Yc = null;
                        break e;
                      }
                      var w = o.sibling;
                      if (null !== w) {
                        (w.return = o.return), (Yc = w);
                        break e;
                      }
                      Yc = o.return;
                    }
                }
                if (
                  ((No = a),
                  Aa(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (j) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Co.transition = t);
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          (e = Ll(e, (t = pc(0, (t = uc(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function Su(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qo || !qo.has(r)))
                ) {
                  (t = Ll(t, (e = hc(t, (e = uc(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ou(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Po === e &&
              (Mo & n) === n &&
              (4 === Lo ||
              (3 === Lo && (130023424 & Mo) === Mo && 500 > Ye() - Ho)
                ? du(e, 0)
                : (Fo |= n)),
            ru(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = eu();
          null !== (e = Pl(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function Cu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Eu(e, n);
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
          null !== r && r.delete(t), Eu(e, n);
        }
        function Pu(e, t) {
          return Qe(e, t);
        }
        function zu(e, t, n, r) {
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
        function Mu(e, t, n, r) {
          return new zu(e, t, n, r);
        }
        function _u(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Iu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Mu(e.tag, t, e.key, e.mode)).elementType =
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
        function Lu(e, t, n, r, a, i) {
          var c = 2;
          if (((r = e), "function" === typeof e)) _u(e) && (c = 1);
          else if ("string" === typeof e) c = 5;
          else
            e: switch (e) {
              case k:
                return Tu(n.children, a, i, t);
              case S:
                (c = 8), (a |= 8);
                break;
              case O:
                return (
                  ((e = Mu(12, n, t, 2 | a)).elementType = O), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Mu(13, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case z:
                return (
                  ((e = Mu(19, n, t, a)).elementType = z), (e.lanes = i), e
                );
              case I:
                return Ru(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      c = 10;
                      break e;
                    case C:
                      c = 9;
                      break e;
                    case N:
                      c = 11;
                      break e;
                    case M:
                      c = 14;
                      break e;
                    case _:
                      (c = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Mu(c, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Tu(e, t, n, r) {
          return ((e = Mu(7, e, r, t)).lanes = n), e;
        }
        function Ru(e, t, n, r) {
          return (
            ((e = Mu(22, e, r, t)).elementType = I),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Bu(e, t, n) {
          return ((e = Mu(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Mu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Du(e, t, n, r, a) {
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
        function Vu(e, t, n, r, a, l, i, c, o) {
          return (
            (e = new Du(e, t, n, c, o)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Mu(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ml(l),
            e
          );
        }
        function Hu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: j,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Au(e) {
          if (!e) return Ca;
          e: {
            if (Ae((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (_a(t.type)) {
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
            if (_a(n)) return Ta(e, n, t);
          }
          return t;
        }
        function Uu(e, t, n, r, a, l, i, c, o) {
          return (
            ((e = Vu(n, r, !0, e, 0, l, 0, c, o)).context = Au(null)),
            (n = e.current),
            ((l = Il((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ll(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function $u(e, t, n, r) {
          var a = t.current,
            l = eu(),
            i = tu(a);
          return (
            (n = Au(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Il(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ll(a, t, i)) && (nu(e, a, i, l), Tl(e, a, i)),
            i
          );
        }
        function Wu(e) {
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
        function Qu(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        ko = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) bc = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bc = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pc(t), pl();
                        break;
                      case 5:
                        li(t);
                        break;
                      case 1:
                        _a(t.type) && Ra(t);
                        break;
                      case 4:
                        ri(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(gl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(ci, 1 & ci.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Rc(e, t, n)
                            : (Ea(ci, 1 & ci.current),
                              null !== (e = Uc(e, t, n)) ? e.sibling : null);
                        Ea(ci, 1 & ci.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hc(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(ci, ci.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Sc(e, t, n);
                    }
                    return Uc(e, t, n);
                  })(e, t, n)
                );
              bc = 0 !== (131072 & e.flags);
            }
          else (bc = !1), al && 0 !== (1048576 & t.flags) && Ga(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ac(e, t), (e = t.pendingProps);
              var a = Ma(t, Na.current);
              Sl(t, n), (a = ki(null, t, r, e, a, n));
              var i = Si();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    _a(r) ? ((i = !0), Ra(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ml(t),
                    (a.updater = Hl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = Nc(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    xc(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ac(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return _u(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === M) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = vl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ec(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Cc(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wc(null, t, r, e, n);
                    break e;
                  case 14:
                    t = jc(null, t, r, vl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ec(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cc(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 3:
              e: {
                if ((Pc(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  _l(e, t),
                  Bl(t, r, null, n);
                var c = t.memoizedState;
                if (((r = c.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: c.cache,
                      pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                      transitions: c.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = zc(e, t, r, n, (a = uc(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = zc(e, t, r, n, (a = uc(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Yl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Uc(e, t, n);
                    break e;
                  }
                  xc(e, t, r, n);
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
                (c = a.children),
                na(r, a)
                  ? (c = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Oc(e, t),
                xc(e, t, c, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Rc(e, t, n);
            case 4:
              return (
                ri(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Kl(t, null, r, n)) : xc(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wc(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              );
            case 7:
              return xc(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xc(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (c = a.value),
                  Ea(gl, r._currentValue),
                  (r._currentValue = c),
                  null !== i)
                )
                  if (cr(i.value, c)) {
                    if (i.children === a.children && !Pa.current) {
                      t = Uc(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var o = i.dependencies;
                      if (null !== o) {
                        c = i.child;
                        for (var u = o.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Il(-1, n & -n)).tag = 2;
                              var s = i.updateQueue;
                              if (null !== s) {
                                var f = (s = s.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (s.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              kl(i.return, n, t),
                              (o.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        c = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (c = i.return)) throw Error(l(341));
                        (c.lanes |= n),
                          null !== (o = c.alternate) && (o.lanes |= n),
                          kl(c, n, t),
                          (c = i.sibling);
                      } else c = i.child;
                      if (null !== c) c.return = i;
                      else
                        for (c = i; null !== c; ) {
                          if (c === t) {
                            c = null;
                            break;
                          }
                          if (null !== (i = c.sibling)) {
                            (i.return = c.return), (c = i);
                            break;
                          }
                          c = c.return;
                        }
                      i = c;
                    }
                xc(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Sl(t, n),
                (r = r((a = Ol(a)))),
                (t.flags |= 1),
                xc(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = vl((r = t.type), t.pendingProps)),
                jc(e, t, r, (a = vl(r.type, a)), n)
              );
            case 15:
              return kc(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vl(r, a)),
                Ac(e, t),
                (t.tag = 1),
                _a(r) ? ((e = !0), Ra(t)) : (e = !1),
                Sl(t, n),
                Ul(t, r, a),
                Wl(t, r, a, n),
                Nc(null, t, r, !0, e, n)
              );
            case 19:
              return Hc(e, t, n);
            case 22:
              return Sc(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Xu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Zu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
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
        function Gu() {}
        function es(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var c = a;
              a = function () {
                var e = Wu(i);
                c.call(e);
              };
            }
            $u(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Wu(i);
                    l.call(e);
                  };
                }
                var i = Uu(t, r, e, 0, null, !1, 0, "", Gu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Ar(8 === e.nodeType ? e.parentNode : e),
                  su(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var c = r;
                r = function () {
                  var e = Wu(o);
                  c.call(e);
                };
              }
              var o = Vu(e, 0, !1, null, 0, !1, 0, "", Gu);
              return (
                (e._reactRootContainer = o),
                (e[ha] = o.current),
                Ar(8 === e.nodeType ? e.parentNode : e),
                su(function () {
                  $u(t, o, n, r);
                }),
                o
              );
            })(n, t, e, a, r);
          return Wu(i);
        }
        (Ku.prototype.render = Zu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            $u(e, t, null, null);
          }),
          (Ku.prototype.unmount = Zu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                su(function () {
                  $u(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < It.length && 0 !== t && t < It[n].priority;
                n++
              );
              It.splice(n, 0, e), 0 === n && Bt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ye()),
                    0 === (6 & No) && ((Ao = Ye() + 500), Aa()));
                }
                break;
              case 13:
                su(function () {
                  var t = Pl(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (jt = function (e) {
            if (13 === e.tag) {
              var t = Pl(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Qu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Pl(e, t);
              if (null !== n) nu(n, e, t, eu());
              Qu(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (Ot = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (je = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      Q(r), J(r, a);
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
          (Pe = su);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Ee, Ce, uu],
          },
          ns = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
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
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (lt = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Yu(t)) throw Error(l(200));
            return Hu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Yu(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Xu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Ar(8 === e.nodeType ? e.parentNode : e),
              new Zu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return su(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Yu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              c = Xu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (c = n.onRecoverableError)),
              (t = Uu(t, null, e, 1, null != n ? n : null, a, 0, i, c)),
              (e[ha] = t.current),
              Ar(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (su(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          c =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          o = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            s = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            i.call(t, r) && !o.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: s,
            props: l,
            _owner: c.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          c = Symbol.for("react.provider"),
          o = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), m(x, g.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          j = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function O(e, t, r) {
          var a,
            l = {},
            i = null,
            c = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (c = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              j.call(t, a) && !S.hasOwnProperty(a) && (l[a] = t[a]);
          var o = arguments.length - 2;
          if (1 === o) l.children = r;
          else if (1 < o) {
            for (var u = Array(o), s = 0; s < o; s++) u[s] = arguments[s + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (o = e.defaultProps)) void 0 === l[a] && (l[a] = o[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: c,
            props: l,
            _owner: k.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
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
        function P(e, t, a, l, i) {
          var c = typeof e;
          ("undefined" !== c && "boolean" !== c) || (e = null);
          var o = !1;
          if (null === e) o = !0;
          else
            switch (c) {
              case "string":
              case "number":
                o = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    o = !0;
                }
            }
          if (o)
            return (
              (i = i((o = e))),
              (e = "" === l ? "." + N(o, 0) : l),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  P(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (E(i) &&
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
                        (!i.key || (o && o.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((o = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var s = l + N((c = e[u]), u);
              o += P(c, t, a, s, i);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), u = 0; !(c = e.next()).done; )
              o += P((c = c.value), t, a, (s = l + N(c, u++)), i);
          else if ("object" === c)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return o;
        }
        function z(e, t, n) {
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
        function M(e) {
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
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ = { current: null },
          I = { transition: null },
          L = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: z,
          forEach: function (e, t, n) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              c = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (c = k.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var o = e.type.defaultProps;
              for (u in t)
                j.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== o ? o[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              o = Array(u);
              for (var s = 0; s < u; s++) o[s] = arguments[s + 2];
              a.children = o;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: c,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: o,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = O),
          (t.createFactory = function (e) {
            var t = O.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: M,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = I.transition;
            I.transition = {};
            try {
              e();
            } finally {
              I.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return _.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return _.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return _.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.current.useRef(e);
          }),
          (t.useState = function (e) {
            return _.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
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
              var c = 2 * (r + 1) - 1,
                o = e[c],
                u = c + 1,
                s = e[u];
              if (0 > l(o, n))
                u < a && 0 > l(s, o)
                  ? ((e[r] = s), (e[u] = n), (r = u))
                  : ((e[r] = o), (e[c] = n), (r = c));
              else {
                if (!(u < a && 0 > l(s, n))) break e;
                (e[r] = s), (e[u] = n), (r = u);
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
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var c = Date,
            o = c.now();
          t.unstable_now = function () {
            return c.now() - o;
          };
        }
        var u = [],
          s = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(s);
          }
        }
        function w(e) {
          if (((v = !1), x(e), !m))
            if (null !== r(u)) (m = !0), I(j);
            else {
              var t = r(s);
              null !== t && L(w, t.startTime - e);
            }
        }
        function j(e, n) {
          (m = !1), v && ((v = !1), y(E), (E = -1)), (h = !0);
          var l = p;
          try {
            for (
              x(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !P()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var c = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof c
                    ? (d.callback = c)
                    : d === r(u) && a(u),
                  x(n);
              } else a(u);
              d = r(u);
            }
            if (null !== d) var o = !0;
            else {
              var f = r(s);
              null !== f && L(w, f.startTime - n), (o = !1);
            }
            return o;
          } finally {
            (d = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          O = null,
          E = -1,
          C = 5,
          N = -1;
        function P() {
          return !(t.unstable_now() - N < C);
        }
        function z() {
          if (null !== O) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = O(!0, e);
            } finally {
              n ? k() : ((S = !1), (O = null));
            }
          } else S = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(z);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var M = new MessageChannel(),
            _ = M.port2;
          (M.port1.onmessage = z),
            (k = function () {
              _.postMessage(null);
            });
        } else
          k = function () {
            g(z, 0);
          };
        function I(e) {
          (O = e), S || ((S = !0), k());
        }
        function L(e, n) {
          E = g(function () {
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
            m || h || ((m = !0), I(j));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
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
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var c = -1;
                break;
              case 2:
                c = 250;
                break;
              case 5:
                c = 1073741823;
                break;
              case 4:
                c = 1e4;
                break;
              default:
                c = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (c = l + c),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(s, e),
                  null === r(u) &&
                    e === r(s) &&
                    (v ? (y(E), (E = -1)) : (v = !0), L(w, l - i)))
                : ((e.sortIndex = c), n(u, e), m || h || ((m = !0), I(j))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      191: function (e) {
        var t =
          "undefined" !== typeof process && process.pid
            ? process.pid.toString(36)
            : "";
        function n() {
          var e = Date.now(),
            t = n.last || e;
          return (n.last = e > t ? e : t + 1);
        }
        (e.exports = e.exports.default =
          function (e, r) {
            return (e || "") + "" + t + n().toString(36) + (r || "");
          }),
          (e.exports.process = function (e, r) {
            return (e || "") + t + n().toString(36) + (r || "");
          }),
          (e.exports.time = function (e, t) {
            return (e || "") + n().toString(36) + (t || "");
          });
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e = n(250);
      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function r(e, n) {
        if (e) {
          if ("string" === typeof e) return t(e, n);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? t(e, n)
              : void 0
          );
        }
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                l = [],
                i = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (l.push(r.value), !t || l.length !== t);
                  i = !0
                );
              } catch (o) {
                (c = !0), (a = o);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (c) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          r(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var l,
        i = n(791);
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(l || (l = {}));
      var o = function (e) {
        return e;
      };
      var u = "beforeunload",
        s = "popstate";
      function f(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function d() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function p() {
        return Math.random().toString(36).substr(2, 8);
      }
      function h(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          l = e.hash,
          i = void 0 === l ? "" : l;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function m(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      var v = (0, i.createContext)(null);
      var g = (0, i.createContext)(null);
      var y = (0, i.createContext)({ outlet: null, matches: [] });
      function b(e, t) {
        if (!e) throw new Error(t);
      }
      function x(e, t, n) {
        void 0 === n && (n = "/");
        var r = N(("string" === typeof t ? m(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = w(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var l = null, i = 0; null == l && i < a.length; ++i)
          l = O(a[i], r);
        return l;
      }
      function w(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var l = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            l.relativePath.startsWith("/") &&
              (l.relativePath.startsWith(r) || b(!1),
              (l.relativePath = l.relativePath.slice(r.length)));
            var i = P([r, l.relativePath]),
              c = n.concat(l);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && b(!1), w(e.children, t, c, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: S(i, e.index), routesMeta: c });
          }),
          t
        );
      }
      var j = /^:\w+$/,
        k = function (e) {
          return "*" === e;
        };
      function S(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(k) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !k(e);
            })
            .reduce(function (e, t) {
              return e + (j.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function O(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", l = [], i = 0;
          i < n.length;
          ++i
        ) {
          var c = n[i],
            o = i === n.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            s = E(
              { path: c.relativePath, caseSensitive: c.caseSensitive, end: o },
              u
            );
          if (!s) return null;
          Object.assign(r, s.params);
          var f = c.route;
          l.push({
            params: r,
            pathname: P([a, s.pathname]),
            pathnameBase: z(P([a, s.pathnameBase])),
            route: f,
          }),
            "/" !== s.pathnameBase && (a = P([a, s.pathnameBase]));
        }
        return l;
      }
      function E(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = a(n, 2),
          l = r[0],
          i = r[1],
          c = t.match(l);
        if (!c) return null;
        var o = c[0],
          u = o.replace(/(.)\/+$/, "$1"),
          s = c.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              u = o.slice(0, o.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return e;
                }
              })(s[n] || "")),
              e
            );
          }, {}),
          pathname: o,
          pathnameBase: u,
          pattern: e,
        };
      }
      function C(e, t, n) {
        var r,
          a = "string" === typeof e ? m(e) : e,
          l = "" === e || "" === a.pathname ? "/" : a.pathname;
        if (null == l) r = n;
        else {
          var i = t.length - 1;
          if (l.startsWith("..")) {
            for (var c = l.split("/"); ".." === c[0]; ) c.shift(), (i -= 1);
            a.pathname = c.join("/");
          }
          r = i >= 0 ? t[i] : "/";
        }
        var o = (function (e, t) {
          void 0 === t && (t = "/");
          var n = "string" === typeof e ? m(e) : e,
            r = n.pathname,
            a = n.search,
            l = void 0 === a ? "" : a,
            i = n.hash,
            c = void 0 === i ? "" : i,
            o = r
              ? r.startsWith("/")
                ? r
                : (function (e, t) {
                    var n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(r, t)
              : t;
          return { pathname: o, search: M(l), hash: _(c) };
        })(a, r);
        return (
          l &&
            "/" !== l &&
            l.endsWith("/") &&
            !o.pathname.endsWith("/") &&
            (o.pathname += "/"),
          o
        );
      }
      function N(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      var P = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        z = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        M = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        _ = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function I(e) {
        L() || b(!1);
        var t = (0, i.useContext)(v),
          n = t.basename,
          r = t.navigator,
          a = D(e),
          l = a.hash,
          c = a.pathname,
          o = a.search,
          u = c;
        if ("/" !== n) {
          var s = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? m(e).pathname
                : e.pathname;
            })(e),
            f = null != s && s.endsWith("/");
          u = "/" === c ? n + (f ? "/" : "") : P([n, c]);
        }
        return r.createHref({ pathname: u, search: o, hash: l });
      }
      function L() {
        return null != (0, i.useContext)(g);
      }
      function T() {
        return L() || b(!1), (0, i.useContext)(g).location;
      }
      function R() {
        L() || b(!1);
        var e = (0, i.useContext)(v),
          t = e.basename,
          n = e.navigator,
          r = (0, i.useContext)(y).matches,
          a = T().pathname,
          l = JSON.stringify(
            r.map(function (e) {
              return e.pathnameBase;
            })
          ),
          c = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(function () {
            c.current = !0;
          }),
          (0, i.useCallback)(
            function (e, r) {
              if ((void 0 === r && (r = {}), c.current))
                if ("number" !== typeof e) {
                  var i = C(e, JSON.parse(l), a);
                  "/" !== t && (i.pathname = P([t, i.pathname])),
                    (r.replace ? n.replace : n.push)(i, r.state);
                } else n.go(e);
            },
            [t, n, l, a]
          )
        );
      }
      var B = (0, i.createContext)(null);
      function F() {
        var e = (0, i.useContext)(y).matches,
          t = e[e.length - 1];
        return t ? t.params : {};
      }
      function D(e) {
        var t = (0, i.useContext)(y).matches,
          n = T().pathname,
          r = JSON.stringify(
            t.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, i.useMemo)(
          function () {
            return C(e, JSON.parse(r), n);
          },
          [e, r, n]
        );
      }
      function V(e, t) {
        return (
          void 0 === t && (t = []),
          null == e
            ? null
            : e.reduceRight(function (n, r, a) {
                return (0,
                i.createElement)(y.Provider, { children: void 0 !== r.route.element ? r.route.element : n, value: { outlet: n, matches: t.concat(e.slice(0, a + 1)) } });
              }, null)
        );
      }
      function H(e) {
        var t = e.to,
          n = e.replace,
          r = e.state;
        L() || b(!1);
        var a = R();
        return (
          (0, i.useEffect)(function () {
            a(t, { replace: n, state: r });
          }),
          null
        );
      }
      function A(e) {
        return (function (e) {
          var t = (0, i.useContext)(y).outlet;
          return t ? (0, i.createElement)(B.Provider, { value: e }, t) : t;
        })(e.context);
      }
      function U(e) {
        b(!1);
      }
      function $(e) {
        var t = e.basename,
          n = void 0 === t ? "/" : t,
          r = e.children,
          a = void 0 === r ? null : r,
          c = e.location,
          o = e.navigationType,
          u = void 0 === o ? l.Pop : o,
          s = e.navigator,
          f = e.static,
          d = void 0 !== f && f;
        L() && b(!1);
        var p = z(n),
          h = (0, i.useMemo)(
            function () {
              return { basename: p, navigator: s, static: d };
            },
            [p, s, d]
          );
        "string" === typeof c && (c = m(c));
        var y = c,
          x = y.pathname,
          w = void 0 === x ? "/" : x,
          j = y.search,
          k = void 0 === j ? "" : j,
          S = y.hash,
          O = void 0 === S ? "" : S,
          E = y.state,
          C = void 0 === E ? null : E,
          P = y.key,
          M = void 0 === P ? "default" : P,
          _ = (0, i.useMemo)(
            function () {
              var e = N(w, p);
              return null == e
                ? null
                : { pathname: e, search: k, hash: O, state: C, key: M };
            },
            [p, w, k, O, C, M]
          );
        return null == _
          ? null
          : (0, i.createElement)(
              v.Provider,
              { value: h },
              (0, i.createElement)(g.Provider, {
                children: a,
                value: { location: _, navigationType: u },
              })
            );
      }
      function W(e) {
        var t = e.children,
          n = e.location;
        return (function (e, t) {
          L() || b(!1);
          var n,
            r = (0, i.useContext)(y).matches,
            a = r[r.length - 1],
            l = a ? a.params : {},
            c = (a && a.pathname, a ? a.pathnameBase : "/"),
            o = (a && a.route, T());
          if (t) {
            var u,
              s = "string" === typeof t ? m(t) : t;
            "/" === c ||
              (null == (u = s.pathname) ? void 0 : u.startsWith(c)) ||
              b(!1),
              (n = s);
          } else n = o;
          var f = n.pathname || "/",
            d = x(e, { pathname: "/" === c ? f : f.slice(c.length) || "/" });
          return V(
            d &&
              d.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, l, e.params),
                  pathname: P([c, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? c : P([c, e.pathnameBase]),
                });
              }),
            r
          );
        })(q(t), n);
      }
      function q(e) {
        var t = [];
        return (
          i.Children.forEach(e, function (e) {
            if ((0, i.isValidElement)(e))
              if (e.type !== i.Fragment) {
                e.type !== U && b(!1);
                var n = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (n.children = q(e.props.children)),
                  t.push(n);
              } else t.push.apply(t, q(e.props.children));
          }),
          t
        );
      }
      function Q() {
        return (
          (Q =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Q.apply(this, arguments)
        );
      }
      function X(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var Z = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
        K = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Y(e) {
        var t = e.basename,
          n = e.children,
          r = e.window,
          v = (0, i.useRef)();
        null == v.current &&
          (v.current = (function (e) {
            void 0 === e && (e = {});
            var t = e.window,
              n = void 0 === t ? document.defaultView : t,
              r = n.history;
            function a() {
              var e = n.location,
                t = e.pathname,
                a = e.search,
                l = e.hash,
                i = r.state || {};
              return [
                i.idx,
                o({
                  pathname: t,
                  search: a,
                  hash: l,
                  state: i.usr || null,
                  key: i.key || "default",
                }),
              ];
            }
            var i = null;
            n.addEventListener(s, function () {
              if (i) w.call(i), (i = null);
              else {
                var e = l.Pop,
                  t = a(),
                  n = t[0],
                  r = t[1];
                if (w.length) {
                  if (null != n) {
                    var c = y - n;
                    c &&
                      ((i = {
                        action: e,
                        location: r,
                        retry: function () {
                          C(-1 * c);
                        },
                      }),
                      C(c));
                  }
                } else E(e);
              }
            });
            var v = l.Pop,
              g = a(),
              y = g[0],
              b = g[1],
              x = d(),
              w = d();
            function j(e) {
              return "string" === typeof e ? e : h(e);
            }
            function k(e, t) {
              return (
                void 0 === t && (t = null),
                o(
                  c(
                    { pathname: b.pathname, hash: "", search: "" },
                    "string" === typeof e ? m(e) : e,
                    { state: t, key: p() }
                  )
                )
              );
            }
            function S(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, j(e)];
            }
            function O(e, t, n) {
              return (
                !w.length || (w.call({ action: e, location: t, retry: n }), !1)
              );
            }
            function E(e) {
              v = e;
              var t = a();
              (y = t[0]), (b = t[1]), x.call({ action: v, location: b });
            }
            function C(e) {
              r.go(e);
            }
            null == y &&
              ((y = 0), r.replaceState(c({}, r.state, { idx: y }), ""));
            var N = {
              get action() {
                return v;
              },
              get location() {
                return b;
              },
              createHref: j,
              push: function e(t, a) {
                var i = l.Push,
                  c = k(t, a);
                if (
                  O(i, c, function () {
                    e(t, a);
                  })
                ) {
                  var o = S(c, y + 1),
                    u = o[0],
                    s = o[1];
                  try {
                    r.pushState(u, "", s);
                  } catch (f) {
                    n.location.assign(s);
                  }
                  E(i);
                }
              },
              replace: function e(t, n) {
                var a = l.Replace,
                  i = k(t, n);
                if (
                  O(a, i, function () {
                    e(t, n);
                  })
                ) {
                  var c = S(i, y),
                    o = c[0],
                    u = c[1];
                  r.replaceState(o, "", u), E(a);
                }
              },
              go: C,
              back: function () {
                C(-1);
              },
              forward: function () {
                C(1);
              },
              listen: function (e) {
                return x.push(e);
              },
              block: function (e) {
                var t = w.push(e);
                return (
                  1 === w.length && n.addEventListener(u, f),
                  function () {
                    t(), w.length || n.removeEventListener(u, f);
                  }
                );
              },
            };
            return N;
          })({ window: r }));
        var g = v.current,
          y = a((0, i.useState)({ action: g.action, location: g.location }), 2),
          b = y[0],
          x = y[1];
        return (
          (0, i.useLayoutEffect)(
            function () {
              return g.listen(x);
            },
            [g]
          ),
          (0, i.createElement)($, {
            basename: t,
            children: n,
            location: b.location,
            navigationType: b.action,
            navigator: g,
          })
        );
      }
      var J = (0, i.forwardRef)(function (e, t) {
        var n = e.onClick,
          r = e.reloadDocument,
          a = e.replace,
          l = void 0 !== a && a,
          c = e.state,
          o = e.target,
          u = e.to,
          s = X(e, Z),
          f = I(u),
          d = (function (e, t) {
            var n = void 0 === t ? {} : t,
              r = n.target,
              a = n.replace,
              l = n.state,
              c = R(),
              o = T(),
              u = D(e);
            return (0, i.useCallback)(
              function (t) {
                if (
                  0 === t.button &&
                  (!r || "_self" === r) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  var n = !!a || h(o) === h(u);
                  c(e, { replace: n, state: l });
                }
              },
              [o, c, u, a, l, r, e]
            );
          })(u, { replace: l, state: c, target: o });
        return (0, i.createElement)(
          "a",
          Q({}, s, {
            href: f,
            onClick: function (e) {
              n && n(e), e.defaultPrevented || r || d(e);
            },
            ref: t,
            target: o,
          })
        );
      });
      var G = (0, i.forwardRef)(function (e, t) {
        var n = e["aria-current"],
          r = void 0 === n ? "page" : n,
          a = e.caseSensitive,
          l = void 0 !== a && a,
          c = e.className,
          o = void 0 === c ? "" : c,
          u = e.end,
          s = void 0 !== u && u,
          f = e.style,
          d = e.to,
          p = e.children,
          h = X(e, K),
          m = T(),
          v = D(d),
          g = m.pathname,
          y = v.pathname;
        l || ((g = g.toLowerCase()), (y = y.toLowerCase()));
        var b,
          x = g === y || (!s && g.startsWith(y) && "/" === g.charAt(y.length)),
          w = x ? r : void 0;
        b =
          "function" === typeof o
            ? o({ isActive: x })
            : [o, x ? "active" : null].filter(Boolean).join(" ");
        var j = "function" === typeof f ? f({ isActive: x }) : f;
        return (0,
        i.createElement)(J, Q({}, h, { "aria-current": w, className: b, ref: t, style: j, to: d }), "function" === typeof p ? p({ isActive: x }) : p);
      });
      function ee(e) {
        return (
          (ee =
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
          ee(e)
        );
      }
      function te() {
        te = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          l = r.asyncIterator || "@@asyncIterator",
          i = r.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (E) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function o(e, t, n, r) {
          var a = t && t.prototype instanceof f ? t : f,
            l = Object.create(a.prototype),
            i = new k(r || []);
          return (
            (l._invoke = (function (e, t, n) {
              var r = "suspendedStart";
              return function (a, l) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === a) throw l;
                  return O();
                }
                for (n.method = a, n.arg = l; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var c = x(i, n);
                    if (c) {
                      if (c === s) continue;
                      return c;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var o = u(e, t, n);
                  if ("normal" === o.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      o.arg === s)
                    )
                      continue;
                    return { value: o.arg, done: n.done };
                  }
                  "throw" === o.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = o.arg));
                }
              };
            })(e, n, i)),
            l
          );
        }
        function u(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (E) {
            return { type: "throw", arg: E };
          }
        }
        e.wrap = o;
        var s = {};
        function f() {}
        function d() {}
        function p() {}
        var h = {};
        c(h, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          v = m && m(m(S([])));
        v && v !== t && n.call(v, a) && (h = v);
        var g = (p.prototype = f.prototype = Object.create(h));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          function r(a, l, i, c) {
            var o = u(e[a], e, l);
            if ("throw" !== o.type) {
              var s = o.arg,
                f = s.value;
              return f && "object" == ee(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      r("next", e, i, c);
                    },
                    function (e) {
                      r("throw", e, i, c);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (s.value = e), i(s);
                    },
                    function (e) {
                      return r("throw", e, i, c);
                    }
                  );
            }
            c(o.arg);
          }
          var a;
          this._invoke = function (e, n) {
            function l() {
              return new t(function (t, a) {
                r(e, n, t, a);
              });
            }
            return (a = a ? a.then(l, l) : l());
          };
        }
        function x(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)
              )
                return s;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return s;
          }
          var r = u(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), s
            );
          var a = r.arg;
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                s)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              s);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function j(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function k(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function S(e) {
          if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                l = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (l.next = l);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          c(g, "constructor", p),
          c(p, "constructor", d),
          (d.displayName = c(p, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), c(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          c(b.prototype, l, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, l) {
            void 0 === l && (l = Promise);
            var i = new b(o(t, n, r, a), l);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          c(g, i, "Generator"),
          c(g, a, function () {
            return this;
          }),
          c(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = S),
          (k.prototype = {
            constructor: k,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(j),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var l = this.tryEntries[a],
                  i = l.completion;
                if ("root" === l.tryLoc) return r("end");
                if (l.tryLoc <= this.prev) {
                  var c = n.call(l, "catchLoc"),
                    o = n.call(l, "finallyLoc");
                  if (c && o) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  } else if (c) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0);
                  } else {
                    if (!o)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var l = a;
                  break;
                }
              }
              l &&
                ("break" === e || "continue" === e) &&
                l.tryLoc <= t &&
                t <= l.finallyLoc &&
                (l = null);
              var i = l ? l.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                l
                  ? ((this.method = "next"), (this.next = l.finallyLoc), s)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                s
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), j(n), s;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    j(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                s
              );
            },
          }),
          e
        );
      }
      function ne(e, t, n, r, a, l, i) {
        try {
          var c = e[l](i),
            o = c.value;
        } catch (u) {
          return void n(u);
        }
        c.done ? t(o) : Promise.resolve(o).then(r, a);
      }
      function re(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var l = e.apply(t, n);
            function i(e) {
              ne(l, r, a, i, c, "next", e);
            }
            function c(e) {
              ne(l, r, a, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var ae = n(184),
        le = (0, i.createContext)({
          token: null,
          saveToken: function (e) {},
          removeToken: function () {},
        }),
        ie = function (e) {
          var t = e.children,
            n = a(
              (0, i.useState)(
                (function () {
                  if (localStorage.getItem("token")) {
                    var e = localStorage.getItem("token");
                    return JSON.parse(e);
                  }
                  return null;
                })()
              ),
              2
            ),
            r = n[0],
            l = n[1];
          return (0, ae.jsx)(le.Provider, {
            value: {
              token: r,
              saveToken: function (e) {
                localStorage.setItem("token", JSON.stringify(e.res)), l(e.res);
              },
              removeToken: function () {
                localStorage.getItem("token") &&
                  (localStorage.removeItem("token"), l(null));
              },
            },
            children: t,
          });
        };
      function ce() {
        return (0, i.useContext)(le);
      }
      var oe,
        ue = function (e) {
          var t = e.item,
            n = e.username,
            r = e.saveToken;
          function a() {
            return (
              (a = re(
                te().mark(function e(t, n) {
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            fetch("http://localhost:8080/delete", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ user: t, newData: n }),
                            })
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                return r(e);
                              })
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              a.apply(this, arguments)
            );
          }
          !(function (e, t) {
            a.apply(this, arguments);
          })(n, t);
        },
        se = ["title", "titleId"];
      function fe() {
        return (
          (fe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          fe.apply(this, arguments)
        );
      }
      function de(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function pe(e, t) {
        var n = e.title,
          r = e.titleId,
          a = de(e, se);
        return i.createElement(
          "svg",
          fe(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 2551.2 2551.2",
              style: { enableBackground: "new 0 0 2551.2 2551.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          oe ||
            (oe = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M1275.6,0C571.1,0,0,571.1,0,1275.6s571.1,1275.6,1275.6,1275.6s1275.6-571.1,1275.6-1275.6S1980.1,0,1275.6,0 z M1275.6,2381.1c-610.6,0-1105.5-495-1105.5-1105.5S665,170.1,1275.6,170.1s1105.5,495,1105.5,1105.5S1886.2,2381.1,1275.6,2381.1 z",
              }),
              i.createElement(
                "g",
                { transform: "matrix(0.1,0,0,-0.1,0,362)" },
                i.createElement("path", {
                  d: "M19315.8-2654.8c-353-92.6-1098.8-260.3-1654.8-370.7c-1416.5-278-1641.6-361.8-2272.6-829.6 c-895.8-666.4-1522.5-1954.9-1518-3124.3c4.4-445.7,70.6-763.5,145.7-679.6c17.7,22,79.4,150,132.4,282.4 c269.2,648.7,1050.2,1637.1,1716.6,2171.2c339.8,273.5,1023.8,542.7,1023.8,401.5c0-48.6-233.8-339.8-511.9-631 c-260.3-278-348.6-392.7-838.4-1103.3c-507.5-745.8-1169.4-2078.4-1615.1-3265.4c-432.4-1151.7-750.2-2069.6-961.9-2758 c-357.5-1178.2-679.6-2109.3-737-2127c-70.6-26.5-264.8,604.6-670.7,2171.2c-631,2453.5-900.2,3296.3-1544.5,4832 C9567.9-6639.5,8985.4-5801.1,7802.7-4517c-648.7,710.4-1570.9,1390-2127,1575.4c-361.8,123.5-392.7,61.8-119.2-242.7 c1288.5-1451.9,2034.3-2528.6,2824.2-4059.9c666.4-1301.7,1125.3-2594.7,1959.2-5560.1c211.8-759,679.6-2691.8,829.6-3442 c167.7-834.1,353-1650.3,401.5-1778.3c17.7-39.7,83.8-92.6,150-110.3c150-39.7,873.8-39.7,1028.2,0 c229.5,66.2,273.5,247.1,591.3,2330c211.8,1407.7,392.7,2250.6,754.6,3508.2c613.3,2144.6,1266.5,3715.5,1663.7,3971.5 c57.4,35.4,339.8,106,635.5,154.4c1147.3,189.7,2069.6,697.2,2722.7,1504.8c436.9,538.4,551.6,935.5,661.9,2259.3 c57.4,701.6,92.6,900.2,225.1,1319.4c83.8,273.5,141.2,520.7,132.4,551.6C20105.6-2456.2,20035-2465.1,19315.8-2654.8z",
                })
              )
            ))
        );
      }
      var he,
        me = i.forwardRef(pe),
        ve = (n.p, ["title", "titleId"]);
      function ge() {
        return (
          (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ge.apply(this, arguments)
        );
      }
      function ye(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function be(e, t) {
        var n = e.title,
          r = e.titleId,
          a = ye(e, ve);
        return i.createElement(
          "svg",
          ge(
            {
              id: "Capa_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 2551.2 2551.2",
              style: { enableBackground: "new 0 0 2551.2 2551.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          he ||
            (he = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M1275.6,0C571.1,0,0,571.1,0,1275.6s571.1,1275.6,1275.6,1275.6s1275.6-571.1,1275.6-1275.6S1980.1,0,1275.6,0 z M1275.6,2381.1c-610.6,0-1105.5-495-1105.5-1105.5S665,170.1,1275.6,170.1s1105.5,495,1105.5,1105.5S1886.2,2381.1,1275.6,2381.1 z",
              }),
              i.createElement(
                "g",
                null,
                i.createElement("path", {
                  d: "M1946.9,716.6c-256.1,210.2-469,173.6-711.5,374.6c-301.4,249.8-233,835.6-209.7,968.6 c31.6-120.3,98.2-323.2,218.2-483.7c137.9-184.7,309.6-270,375.7-312c66.1-42.2,119.3-103.7,119.3-103.7s-40.8,82.5-145,152.4 c-90.9,61.1-245,131.7-381.4,386.2c-76.7,143.4-121.4,290.7-140,377.8c42.8-31.6,94.2-66,173.7-124.9 c359.1-266,667-196.1,809-712.5c70.4-255.7,10.2-621.5,10.2-621.5S2032.9,646,1946.9,716.6z",
                }),
                i.createElement("path", {
                  d: "M635.5,583.5c-24.3,233.8-150,321.6-172,544.1c-27.3,276.5,299.6,537.9,377.6,593.4 c-44.1-76.5-111.8-212-131.4-352.8c-22.5-162,21.4-290.7,33.8-345c12.3-54.2,8.4-111.9,8.4-111.9s20.6,61.9,2.9,149.3 c-15.4,76.3-57.9,188.8,0.4,385.2c32.8,110.6,83.8,207.3,117.9,260.4c5.9-37.3,14.6-80.3,25.3-149.7 c48.4-313.4,238.6-431.9,52.5-763.4c-92.2-164.2-305-318.7-305-318.7S643.6,504.9,635.5,583.5z",
                })
              )
            ))
        );
      }
      var xe,
        we = i.forwardRef(be),
        je = (n.p, ["title", "titleId"]);
      function ke() {
        return (
          (ke = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ke.apply(this, arguments)
        );
      }
      function Se(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Oe(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Se(e, je);
        return i.createElement(
          "svg",
          ke(
            {
              id: "Capa_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 2551.2 2551.2",
              style: { enableBackground: "new 0 0 2551.2 2551.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          xe ||
            (xe = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M1651.2,1055l-0.5-1.7l-0.5-1.7l-143.8-493c-1.4-5.8-3.4-11.5-5.7-17c35.2-14.1,60.1-48.6,60.1-88.8 c0-52.9-42.8-95.7-95.7-95.7h-380c-52.9,0-95.7,42.8-95.7,95.7c0,40.2,24.9,74.8,60.1,88.8c-2.3,5.5-4.1,11.2-5.7,17l-143.8,493 l-0.5,1.7l-0.5,1.7c-27.7,119.4-25.2,215.2-23.2,292.3l0.2,6.3v563.2c0,152.9,124.4,277.3,277.3,277.3H1397 c152.9,0,277.3-124.4,277.3-277.3v-543.3c0.2-8.3,0.5-17.1,0.8-26.4C1677.4,1276.8,1680.4,1180.8,1651.2,1055z M1610.2,1372.4 v544.4c0,117.9-95.5,213.3-213.3,213.3h-243.7c-117.9,0-213.3-95.5-213.3-213.3v-563.9c-0.8-30.9-1.8-64.7-0.9-102 c1.8,0.6,3.7,1.2,5.5,1.8c6.1,2.1,44.5,12.5,45.7,12.8c6.7,1.5,78,17,141.3,5.7c108.8-19.3,204.2-80.7,301.3-129.3 c74.1-37.1,133.6-33.8,133.6-33.8c7,0.3,27.8,3.5,31.2,4.3C1618.2,1225.2,1611.6,1310.6,1610.2,1372.4z",
              }),
              i.createElement("path", {
                d: "M1275.6,0C571.1,0,0,571.1,0,1275.6s571.1,1275.6,1275.6,1275.6s1275.6-571.1,1275.6-1275.6S1980.1,0,1275.6,0 z M1275.6,2381.1c-256,0-491.5-87.3-678.9-233.3l220.1-220.1v-360.8l-402.1,402.1c-152.9-189.7-244.7-430.7-244.7-693.3 c0-610.6,495-1105.5,1105.5-1105.5c262.6,0,503.7,91.7,693.3,244.7l-340.1,340.1l76.9,263.7l0.5,1.9l0.5,1.9 c1,4.3,1.7,8.4,2.6,12.7l438.3-438.3c146.1,187.4,233.3,422.9,233.3,678.9C2381.1,1886.2,1886.2,2381.1,1275.6,2381.1z",
              })
            ))
        );
      }
      var Ee,
        Ce = i.forwardRef(Oe),
        Ne = (n.p, ["title", "titleId"]);
      function Pe() {
        return (
          (Pe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Pe.apply(this, arguments)
        );
      }
      function ze(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Me(e, t) {
        var n = e.title,
          r = e.titleId,
          a = ze(e, Ne);
        return i.createElement(
          "svg",
          Pe(
            {
              id: "Capa_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 2551.2 2551.2",
              style: { enableBackground: "new 0 0 2551.2 2551.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Ee ||
            (Ee = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M1779.1,673.5c-248.6,0-453.6,186.2-483.3,426.9V964.9c169.8-191.2,163-484.1-20.1-667.3 c-183.3,183.3-189.9,476-20.3,667.4v135.3c-29.7-240.5-234.7-426.9-483.3-426.9c0,267.8,216.1,485,483.3,487v356.3 c-29.7-240.7-234.7-426.9-483.3-426.9c0,267.8,216.1,485,483.3,487v356.3c-29.7-240.7-234.7-426.9-483.3-426.9l0,0 c0,267.7,216.1,485,483.3,487v225c0,22.3,9,35.4,20.3,35.4c11.1,0,20.1-13.1,20.1-35.4v-225c267.3-2,483.3-219.3,483.3-487l0,0 c-248.6,0-453.6,186.2-483.3,426.9v-356.3c267.3-2,483.3-219.3,483.3-487c-248.6,0-453.6,186.2-483.3,426.9v-356.3 C1563,1158.4,1779.1,941.2,1779.1,673.5z",
              }),
              i.createElement("path", {
                d: "M1275.6,0C571.1,0,0,571.1,0,1275.6s571.1,1275.6,1275.6,1275.6s1275.6-571.1,1275.6-1275.6S1980.1,0,1275.6,0 z M1275.6,2381.1c-256,0-491.5-87.3-678.9-233.3l231.4-231.4c-58.4-67.4-101.1-148.5-122.7-238.1l-290.6,290.6 c-152.9-189.7-244.7-430.7-244.7-693.3c0-610.6,495-1105.5,1105.5-1105.5c262.6,0,503.7,91.7,693.3,244.7l-158.2,158.2 c16.2-1.5,32.5-2.3,49-2.4c1.4,312.3-103.7,411.7-103.7,411.7l-3.7,9.9l395.4-395.4c146.1,187.4,233.3,422.9,233.3,678.9 C2381.1,1886.2,1886.2,2381.1,1275.6,2381.1z",
              })
            ))
        );
      }
      var _e,
        Ie = i.forwardRef(Me),
        Le = (n.p, ["title", "titleId"]);
      function Te() {
        return (
          (Te = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Te.apply(this, arguments)
        );
      }
      function Re(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Be(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Re(e, Le);
        return i.createElement(
          "svg",
          Te(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          _e ||
            (_e = i.createElement("path", {
              d: "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z",
            }))
        );
      }
      var Fe,
        De = i.forwardRef(Be),
        Ve =
          (n.p, n.p + "static/media/no-recipe-img.47cf7534cd8d294828df.webp"),
        He = function (e) {
          var t = e.item,
            n = ce(),
            r = n.token,
            a = n.saveToken,
            l = !0 === t.vegetarian ? { fill: "#A4B0A0" } : {},
            i = !0 === t.vegan ? { fill: "#A4B0A0" } : {},
            c = !0 === t.dairyFree ? { fill: "#A4B0A0" } : {},
            o = !0 === t.glutenFree ? { fill: "#A4B0A0" } : {};
          return (0, ae.jsxs)("div", {
            className: "meal-card",
            children: [
              (0, ae.jsxs)(J, {
                to: "/recipe/" + t.id,
                children: [
                  (0, ae.jsx)("h4", {
                    className: "meal-title",
                    children: t.title,
                  }),
                  (0, ae.jsxs)("p", {
                    className: "meal-time",
                    children: ["preparation time: ", t.readyInMinutes, "min"],
                  }),
                  (0, ae.jsx)("div", {
                    className: "image-container",
                    children: (0, ae.jsx)("img", {
                      src: t.image ? t.image : "".concat(Ve),
                      alt: t.title,
                    }),
                  }),
                  (0, ae.jsxs)("div", {
                    className: "icons-container",
                    children: [
                      (0, ae.jsx)(me, { style: l, className: "meal-icon" }),
                      (0, ae.jsx)(we, { style: i, className: "meal-icon" }),
                      (0, ae.jsx)(Ce, { style: c, className: "meal-icon" }),
                      (0, ae.jsx)(Ie, { style: o, className: "meal-icon" }),
                    ],
                  }),
                ],
              }),
              "/profile" === window.location.pathname
                ? (0, ae.jsx)("button", {
                    className: "delete-fav",
                    onClick: function () {
                      r && ue({ item: t, username: r.user, saveToken: a });
                    },
                    children: (0, ae.jsx)(De, {}),
                  })
                : null,
            ],
          });
        },
        Ae = n.p + "static/media/oops-page.c03e3d84159e3e914e18.webp",
        Ue = function () {
          return (0, ae.jsxs)("div", {
            className: "oops-container",
            children: [
              (0, ae.jsx)("div", {
                className: "img-container",
                style: { backgroundImage: "url(".concat(Ae, ")") },
              }),
              (0, ae.jsx)("p", {
                className: "oops-img-author",
                children: (0, ae.jsx)("a", {
                  href: "https://pl.freepik.com/darmowe-wektory/ilustracja-koncepcji-testera-oprogramowania_32044575.htm#page=4&position=20&from_view=author",
                  children: "Image by storyset on Freepik.",
                }),
              }),
              (0, ae.jsx)("h3", {
                className: "oops-header",
                children: "OOPS! SOMETHING WENT WRONG...",
              }),
              (0, ae.jsx)("p", {
                className: "oops-text",
                children: "You may also refresh the page or try again later.",
              }),
              (0, ae.jsx)("p", {
                className: "oops-text",
                children: "Brace yourself till we get the error fixed.",
              }),
            ],
          });
        },
        $e = n.p + "static/media/no-more-search.eabd6c8a1d0539c2c55c.webp",
        We = function () {
          return (0, ae.jsxs)("div", {
            className: "oops-container",
            children: [
              (0, ae.jsx)("div", {
                className: "img-container",
                style: { backgroundImage: "url(".concat($e, ")") },
              }),
              (0, ae.jsx)("p", {
                className: "oops-img-author",
                children: (0, ae.jsx)("a", {
                  href: "https://pl.freepik.com/darmowe-wektory/ilustracja-koncepcji-testera-oprogramowania_32044575.htm#page=4&position=20&from_view=author",
                  children: "Image by storyset on Freepik.",
                }),
              }),
              (0, ae.jsx)("h3", {
                className: "oops-header",
                children: "SORRY,THE SEARCH ENGINE LIMIT IS OVER FOR TODAY...",
              }),
              (0, ae.jsx)("p", {
                className: "oops-text",
                children:
                  "Since this is just a portfolio project and searching is done with spoonacular free plan there are limits in searching.",
              }),
              (0, ae.jsx)("p", {
                className: "oops-text",
                children:
                  "Probably too many people used this app today but you can still try another day.",
              }),
              (0, ae.jsx)("p", {
                className: "oops-text",
                children:
                  'Remember to clean "Local Storage" before next search.',
              }),
            ],
          });
        },
        qe = n.p + "static/media/meals-loader.5ef6724a39d8c4351200.gif",
        Qe = function () {
          return (0, ae.jsxs)("div", {
            className: "food-loader-container",
            children: [
              (0, ae.jsx)("img", {
                src: qe,
                alt: "Food loading",
                className: "food-loader-image",
              }),
              (0, ae.jsx)("p", {
                className: "food-loader-text",
                children: "Loading data...",
              }),
            ],
          });
        },
        Xe = ["title", "titleId"];
      function Ze() {
        return (
          (Ze = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ze.apply(this, arguments)
        );
      }
      function Ke(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ye(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Ke(e, Xe);
        return i.createElement(
          "svg",
          Ze(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 48 48",
              style: { enableBackground: "new 0 0 48 48" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Fe ||
            (Fe = i.createElement("path", {
              d: "M32.6,44l-20-20l20-20l2.8,2.8L18.2,24l17.2,17.2L32.6,44z",
            }))
        );
      }
      var Je,
        Ge = i.forwardRef(Ye),
        et = (n.p, ["title", "titleId"]);
      function tt() {
        return (
          (tt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          tt.apply(this, arguments)
        );
      }
      function nt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function rt(e, t) {
        var n = e.title,
          r = e.titleId,
          a = nt(e, et);
        return i.createElement(
          "svg",
          tt(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 48 48",
              style: { enableBackground: "new 0 0 48 48" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Je ||
            (Je = i.createElement("path", {
              d: "M12.6,41.2L29.8,24L12.6,6.8L15.4,4l20,20l-20,20L12.6,41.2z",
            }))
        );
      }
      var at,
        lt,
        it,
        ct = i.forwardRef(rt),
        ot =
          (n.p,
          function (e) {
            var t = e.popular,
              n = e.title,
              r = e.code,
              a = (0, i.useRef)(null);
            return (0, ae.jsxs)("section", {
              className: "card-list_section",
              children: [
                (0, ae.jsxs)("div", {
                  className: "card-list_header",
                  children: [
                    (0, ae.jsx)("h3", {
                      className: "card-list_title",
                      children: n,
                    }),
                    (0, ae.jsxs)("p", {
                      children: [
                        (0, ae.jsx)("span", {
                          onClick: function () {
                            a.current &&
                              a.current.scrollBy({
                                top: 0,
                                left: -200,
                                behavior: "smooth",
                              });
                          },
                          children: (0, ae.jsx)(Ge, {}),
                        }),
                        (0, ae.jsx)("span", {
                          onClick: function () {
                            a.current &&
                              a.current.scrollBy({
                                top: 0,
                                left: 200,
                                behavior: "smooth",
                              });
                          },
                          children: (0, ae.jsx)(ct, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, ae.jsxs)("div", {
                  className: "card-list_container",
                  ref: a,
                  children: [
                    (401 === r || 402 === r) && (0, ae.jsx)(We, {}),
                    r >= 400 && 401 !== r && 402 !== r && (0, ae.jsx)(Ue, {}),
                    r < 300 && 0 === t.length && (0, ae.jsx)(Qe, {}),
                    r < 300 &&
                      t.map(function (e) {
                        return (0, ae.jsx)(He, { item: e }, e.id);
                      }),
                  ],
                }),
              ],
            });
          }),
        ut = function () {
          return (0, ae.jsxs)("div", {
            className: "hero-container",
            children: [
              (0, ae.jsx)("video", {
                src: "/videos/HeroSectionVideo.webm",
                autoPlay: !0,
                loop: !0,
                muted: !0,
                poster:
                  "https://firebasestorage.googleapis.com/v0/b/foocoding-react-project.appspot.com/o/WebsiteImgs%2Fhero-img.webp?alt=media&token=29c495d6-d2af-4f52-bbe0-53c7a46e11b0",
              }),
              (0, ae.jsxs)("div", {
                className: "hero_text",
                children: [
                  (0, ae.jsx)("h1", { children: "DON'T THROW AWAY FOOD" }),
                  (0, ae.jsx)("h3", {
                    children: "There is plenty recipes you can use them for",
                  }),
                  (0, ae.jsx)("p", { children: "What are you waiting for?" }),
                  (0, ae.jsx)("button", {
                    className: "button-solid",
                    children: (0, ae.jsx)(J, {
                      to: "/about",
                      children: " LET'S START",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        st = function () {
          var e = a((0, i.useState)([]), 2),
            t = e[0],
            n = e[1],
            r = a((0, i.useState)([]), 2),
            l = r[0],
            c = r[1],
            o = a((0, i.useState)(0), 2),
            u = o[0],
            s = o[1],
            f = a((0, i.useState)(0), 2),
            d = f[0],
            p = f[1],
            h = (function () {
              var e = re(
                te().mark(function e() {
                  var t, r, a;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t = localStorage.getItem("popular"))) {
                            e.next = 5;
                            break;
                          }
                          n(JSON.parse(t)), (e.next = 16);
                          break;
                        case 5:
                          return (
                            (e.next = 7),
                            fetch(
                              "https://api.spoonacular.com/recipes/random?apiKey=f0039d77677947b8b23326fea1699dd4&number=9"
                            )
                          );
                        case 7:
                          if (!((r = e.sent).status >= 400)) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return", s(r.status));
                        case 10:
                          return (e.next = 12), r.json();
                        case 12:
                          (a = e.sent),
                            s(0),
                            localStorage.setItem(
                              "popular",
                              JSON.stringify(a.recipes)
                            ),
                            n(a.recipes);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            m = (function () {
              var e = re(
                te().mark(function e() {
                  var t, n, r;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(t = localStorage.getItem("deserts"))) {
                            e.next = 5;
                            break;
                          }
                          c(JSON.parse(t)), (e.next = 16);
                          break;
                        case 5:
                          return (
                            (e.next = 7),
                            fetch(
                              "https://api.spoonacular.com/recipes/random?apiKey=f0039d77677947b8b23326fea1699dd4&number=9&tags=dessert"
                            )
                          );
                        case 7:
                          if (!((n = e.sent).status >= 400)) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return", p(n.status));
                        case 10:
                          return (e.next = 12), n.json();
                        case 12:
                          (r = e.sent),
                            p(0),
                            localStorage.setItem(
                              "deserts",
                              JSON.stringify(r.recipes)
                            ),
                            c(r.recipes);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            (0, i.useEffect)(function () {
              h(), m();
            }, []),
            (0, ae.jsxs)("div", {
              className: "wrapper",
              children: [
                (0, ae.jsx)(ut, {}),
                (0, ae.jsxs)("div", {
                  className: "sections-container nav-padding",
                  children: [
                    (0, ae.jsx)(ot, {
                      popular: t,
                      title: "Popular Picks",
                      code: u,
                    }),
                    (0, ae.jsx)(ot, {
                      popular: l,
                      title: "Something Sweet",
                      code: d,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        ft = ["title", "titleId"];
      function dt() {
        return (
          (dt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          dt.apply(this, arguments)
        );
      }
      function pt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function ht(e, t) {
        var n = e.title,
          r = e.titleId,
          a = pt(e, ft);
        return i.createElement(
          "svg",
          dt(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 39 39",
              style: { enableBackground: "new 0 0 39 39" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          at ||
            (at = i.createElement(
              "style",
              { type: "text/css" },
              "\n\t.st0{fill:#A4B0A0;}\n"
            )),
          lt || (lt = i.createElement("desc", null, "Created with Sketch.")),
          it ||
            (it = i.createElement(
              "g",
              null,
              i.createElement(
                "g",
                { id: "ZeriWaste_1_" },
                i.createElement("path", {
                  className: "st0",
                  d: "M19.5,0c-8.9,0-16,7.1-16,16s7.1,16,16,16s16-7.1,16-16S28.4,0,19.5,0z M19.5,31.2c-8.3,0-15.2-6.8-15.2-15.2 S11.2,0.8,19.5,0.8S34.7,7.6,34.7,16S27.8,31.2,19.5,31.2z",
                }),
                i.createElement(
                  "g",
                  null,
                  i.createElement("path", {
                    className: "st0",
                    d: "M8.8,23.1C8.9,23.1,8.9,23.1,8.8,23.1c0.6,0.5,1.4,0.6,2.1,0.6s1.4,0,2,0c1,0.1,1.6,0.8,2.2,1.5 c0.2,0.2,0.3,0.6,0.5,0.9c0,0-0.1,0-0.1,0.1c-0.1-0.1-0.2-0.1-0.2-0.2c-0.8-0.7-1.7-1.2-2.7-1.4c-0.5,0-1-0.1-1.5-0.1 c-0.4,0-0.6-0.2-1-0.2c-0.1,0-0.1,0-0.2,0v0.1c0.3,0.1,0.5,0.2,0.8,0.3c0.6,0.1,1,0.2,1.5,0.2c1.2,0.1,2.2,0.8,3.1,1.6 c0.3,0.3,0.5,0.6,0.8,1c0.1,0.1,0.1,0.1,0.1,0.1c0.2-0.6,0.2-0.6,0-1.2c-0.1-0.6-0.6-1.1-0.9-1.4c-0.6-0.5-1.4-1-2.1-1.5 c-0.9-0.7-1.8-1.2-2.3-2.1c-0.7-1-0.9-2.1-1-3.3c-0.1-2,0.5-3.9,1.5-5.6c0.2-0.4,0.7-0.9,1-1c0,0.1,0,0,0,0 c0,0.9,0.5,1.9,1.1,2.7c0.6,0.7,1.4,1.4,2.1,2c0.7,0.7,1.4,1.3,2.1,2.1c0.7,1.1,1.1,2.3,1.1,3.6c0,1-0.2,2.2-0.6,3.2 c0,0.1,0,0.1-0.1,0.2c0,0,0,0-0.1,0.1c0-0.2-0.1-0.4,0-0.6c0-1.4-0.3-2.8-0.9-4.1c-0.5-0.8-1-1.5-1.7-2.1c-0.6-0.7-1.2-1.3-1.8-2 c-0.5-0.5-0.8-1.1-1.1-1.7c0-0.1-0.1-0.1-0.2-0.2c0,0.1,0,0.1,0,0.2c0.2,1.2,0.8,2.1,1.6,3c0.6,0.7,1.3,1.4,1.8,2.3 c0.9,1.2,1.2,2.7,1.4,4.1c0.1,1.4,0,2.1-0.2,3.5c0,0.2,0,0.4-0.1,0.7c0,0.2-0.2,0.3-0.3,0.3c-0.1,0-0.2-0.1-0.2-0.2 c-0.5-0.8-0.8-0.8-1.6-0.7c-0.4,0.1-0.8,0.1-1.2,0.2c-1.2,0.2-2.2-0.2-3.1-1.1c-0.7-0.7-1.2-1.6-1.2-2.8 C8.8,23.4,8.8,23.2,8.8,23.1z",
                  }),
                  i.createElement(
                    "g",
                    null,
                    i.createElement(
                      "g",
                      null,
                      i.createElement("path", {
                        className: "st0",
                        d: "M25.1,3.3H13.2c-0.5,0-0.8,0.3-0.8,0.8v6.7h13.4V4.1C25.8,3.7,25.5,3.3,25.1,3.3z M15,8.7 c0,0.3-0.2,0.5-0.5,0.5S14,9,14,8.7v-3c0-0.2,0.2-0.5,0.5-0.5c0.2,0,0.5,0.2,0.5,0.5V8.7z",
                      })
                    ),
                    i.createElement("path", {
                      className: "st0",
                      d: "M24.2,27.4v0.9h1.2v-1.8h-6.6c-0.1,0.3-0.2,0.7-0.3,0.8h5.7V27.4z",
                    }),
                    i.createElement(
                      "g",
                      null,
                      i.createElement("path", {
                        className: "st0",
                        d: "M12.5,11.4c0,0,0.7,1.4,1.2,1.9c0.2,0.1,0.2,0.2,0.4,0.3v-0.2c0-0.2,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v0.9 c0.4,0.3,0.7,0.6,1,0.8c0.8,0.7,1.7,1.3,2.4,2.1c0.9,1,1.4,2.4,1.5,3.8c0,0.2,0.2,2.1-0.7,4.5c-0.1,0.2-0.2,0.5-0.2,0.7h6 c0.5,0,0.8-0.3,0.8-0.8v-14H12.5L12.5,11.4z",
                      })
                    )
                  )
                )
              ),
              i.createElement(
                "g",
                null,
                i.createElement("polygon", {
                  className: "st0",
                  points:
                    "10.9,37.4 7.3,33 6.6,33 6.6,39 7.5,39 7.5,34.6 11.1,39 11.8,39 11.8,33 10.9,33  ",
                }),
                i.createElement("path", {
                  className: "st0",
                  d: "M15.4,33l-2.7,6h0.9l0.7-1.5h3.2l0.7,1.5H19l-2.7-6H15.4z M14.6,36.8l1.3-3l1.3,3H14.6z",
                }),
                i.createElement("polygon", {
                  className: "st0",
                  points:
                    "23.1,37.2 20.6,33 19.9,33 19.9,39 20.7,39 20.7,34.6 22.9,38.3 23.3,38.3 25.5,34.6 25.5,39  26.3,39 26.3,33 25.6,33  ",
                }),
                i.createElement("path", {
                  className: "st0",
                  d: "M32.6,39h0.9l-2.7-6h-0.9l-2.7,6h0.9l0.7-1.5h3.2L32.6,39z M29.1,36.8l1.3-3l1.3,3H29.1z",
                })
              )
            ))
        );
      }
      var mt,
        vt = i.forwardRef(ht),
        gt = (n.p, ["title", "titleId"]);
      function yt() {
        return (
          (yt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          yt.apply(this, arguments)
        );
      }
      function bt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function xt(e, t) {
        var n = e.title,
          r = e.titleId,
          a = bt(e, gt);
        return i.createElement(
          "svg",
          yt(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          mt ||
            (mt = i.createElement("path", {
              d: "M24.45 42v-3H39V9H24.45V6H39q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm-3.9-9.25L18.4 30.6l5.1-5.1H6v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z",
            }))
        );
      }
      var wt,
        jt = i.forwardRef(xt),
        kt = (n.p, ["title", "titleId"]);
      function St() {
        return (
          (St = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          St.apply(this, arguments)
        );
      }
      function Ot(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Et(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Ot(e, kt);
        return i.createElement(
          "svg",
          St(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          wt ||
            (wt = i.createElement("path", {
              d: "M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z",
            }))
        );
      }
      var Ct,
        Nt = i.forwardRef(Et),
        Pt = (n.p, ["title", "titleId"]);
      function zt() {
        return (
          (zt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          zt.apply(this, arguments)
        );
      }
      function Mt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function _t(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Mt(e, Pt);
        return i.createElement(
          "svg",
          zt(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Ct ||
            (Ct = i.createElement("path", {
              d: "M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z",
            }))
        );
      }
      var It,
        Lt = i.forwardRef(_t),
        Tt = (n.p, ["title", "titleId"]);
      function Rt() {
        return (
          (Rt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Rt.apply(this, arguments)
        );
      }
      function Bt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ft(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Bt(e, Tt);
        return i.createElement(
          "svg",
          Rt(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          It ||
            (It = i.createElement("path", {
              d: "M34.55 34.5q1.3 0 2.2-.95.9-.95.9-2.25t-.9-2.2q-.9-.9-2.2-.9-1.3 0-2.25.9t-.95 2.2q0 1.3.95 2.25t2.25.95Zm-.05 6.25q1.65 0 3-.7t2.3-2q-1.3-.7-2.6-1.05-1.3-.35-2.7-.35-1.4 0-2.725.35-1.325.35-2.575 1.05.95 1.3 2.275 2t3.025.7ZM24 44q-6.9-1.6-11.45-7.825Q8 29.95 8 21.9V9.95l16-6 16 6v13.5q-.7-.35-1.5-.625T37 22.45v-10.4l-13-4.8-13 4.8v9.85q0 3.8 1.225 7t3.125 5.625q1.9 2.425 4.2 4.025 2.3 1.6 4.45 2.3.3.6.9 1.35.6.75 1 1.15-.45.25-.95.375-.5.125-.95.275Zm10.65 0q-3.9 0-6.65-2.775-2.75-2.775-2.75-6.575 0-3.9 2.75-6.675t6.65-2.775q3.85 0 6.625 2.775t2.775 6.675q0 3.8-2.775 6.575Q38.5 44 34.65 44ZM24 24.05Z",
            }))
        );
      }
      var Dt,
        Vt,
        Ht = i.forwardRef(Ft),
        At = (n.p, ["title", "titleId"]);
      function Ut() {
        return (
          (Ut = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ut.apply(this, arguments)
        );
      }
      function $t(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Wt(e, t) {
        var n = e.title,
          r = e.titleId,
          a = $t(e, At);
        return i.createElement(
          "svg",
          Ut(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 50 50",
              style: { enableBackground: "new 0 0 50 50" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Dt ||
            (Dt = i.createElement("path", {
              d: "M4.2,50c-1.2,0-2.1-0.4-3-1.2C0.4,48,0,47,0,45.8V4.2C0,3,0.4,2,1.2,1.2S3,0,4.2,0h41.7c1.2,0,2.1,0.4,3,1.2 C49.6,2,50,3,50,4.2v41.7c0,1.2-0.4,2.1-1.2,3C48,49.6,47,50,45.8,50H4.2z M4.2,45.8h41.7V9.7H4.2V45.8z",
            })),
          Vt ||
            (Vt = i.createElement(
              "g",
              null,
              i.createElement("rect", {
                x: 22.6,
                y: 17.1,
                width: 4.9,
                height: 4.6,
              }),
              i.createElement("rect", {
                x: 22.6,
                y: 24.1,
                width: 4.9,
                height: 16,
              })
            ))
        );
      }
      var qt,
        Qt = i.forwardRef(Wt),
        Xt = (n.p, ["title", "titleId"]);
      function Zt() {
        return (
          (Zt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Zt.apply(this, arguments)
        );
      }
      function Kt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Yt(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Kt(e, Xt);
        return i.createElement(
          "svg",
          Zt(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 50 50",
              style: { enableBackground: "new 0 0 50 50" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          qt ||
            (qt = i.createElement("path", {
              d: "M4.2,50c-1.2,0-2.1-0.4-3-1.2C0.4,48,0,47,0,45.8V4.2C0,3,0.4,2,1.2,1.2S3,0,4.2,0h41.7c1.2,0,2.1,0.4,3,1.2 C49.6,2,50,3,50,4.2v41.7c0,1.2-0.4,2.1-1.2,3C48,49.6,47,50,45.8,50H4.2z M4.2,45.8h41.7V9.7H4.2V45.8z M11.1,24.3v-4.2h27.1v4.2 H11.1z M11.1,35.4v-4.2h16v4.2H11.1z",
            }))
        );
      }
      var Jt,
        Gt = i.forwardRef(Yt),
        en = (n.p, ["title", "titleId"]);
      function tn() {
        return (
          (tn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          tn.apply(this, arguments)
        );
      }
      function nn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function rn(e, t) {
        var n = e.title,
          r = e.titleId,
          a = nn(e, en);
        return i.createElement(
          "svg",
          tn(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 50 50",
              style: { enableBackground: "new 0 0 50 50" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Jt ||
            (Jt = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M1.6,46.1c0.2-1,0.4-1.9,0.6-2.8c1.3-4.8,4.1-8.4,7.9-11.2c2.9-2.1,6.1-3.5,9.6-4.2c0.8-0.2,1.6-0.3,2.4-0.4 c0.3,0,0.4-0.2,0.5-0.5c0.4-1.2,1.2-2,2.3-2c1.1,0,2,0.7,2.4,2c0.1,0.3,0.3,0.4,0.5,0.5c2.6,0.3,5,0.9,7.4,2c4,1.8,7.4,4.4,10,8.2 c1.6,2.5,2.7,5.2,3.1,8.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1C32.8,46.1,17.2,46.1,1.6,46.1z M23.5,29.9c-0.2,0-0.5,0-0.8,0.1 c-2.5,0.1-4.9,0.7-7.2,1.7c-2.5,1.1-4.7,2.6-6.5,4.9c-1.3,1.8-2.1,3.8-2.2,6.1c0,0.4,0.2,0.7,0.5,0.7c0.3,0,0.5-0.2,0.5-0.6 c0-0.5,0.1-1.1,0.2-1.6c0.4-2.2,1.6-4,3.2-5.5c2.1-2,4.7-3.3,7.4-4c1.8-0.5,3.6-0.7,5.4-0.7c0.3,0,0.5-0.2,0.5-0.5 c0-0.3-0.2-0.5-0.5-0.5C23.9,29.9,23.7,29.9,23.5,29.9z",
              }),
              i.createElement("path", {
                d: "M25,50c-7.8,0-15.7,0-23.5,0c-0.7,0-1.2-0.3-1.4-0.9c-0.2-0.6-0.1-1.3,0.3-1.7c0.3-0.3,0.6-0.4,1-0.4c0.2,0,0.3,0,0.5,0 c15.5,0,31,0,46.5,0c1.1,0,1.8,0.8,1.5,1.9c-0.2,0.6-0.7,1-1.3,1c-0.1,0-0.3,0-0.4,0C40.5,50,32.7,50,25,50z",
              }),
              i.createElement("path", {
                d: "M17.9,8.7c0,0.9-0.2,1.7-0.7,2.4c-0.6,0.9-0.5,1.7,0,2.7c0.9,1.6,0.9,3.2,0,4.8c-0.3,0.4-0.4,0.9-0.5,1.4 c0,0.7-0.6,1.2-1.3,1.2c-0.7,0-1.2-0.6-1.2-1.4c0-0.8,0.2-1.5,0.7-2.2c0.6-0.9,0.6-1.8,0-2.7c-1-1.6-0.9-3.2,0-4.8 c0.5-0.9,0.5-1.7,0-2.6c-1-1.6-1-3.2,0-4.8c0.3-0.4,0.4-0.9,0.5-1.4c0-0.7,0.6-1.2,1.3-1.2c0.7,0,1.2,0.6,1.2,1.3 c0,0.9-0.2,1.6-0.7,2.4c-0.6,0.9-0.5,1.7,0,2.6C17.7,7,17.9,7.8,17.9,8.7z",
              }),
              i.createElement("path", {
                d: "M23.2,19.6c0-0.7,0.2-1.4,0.6-2.1c0.6-0.9,0.6-1.8,0-2.7c-0.9-1.6-0.9-3.2,0-4.7c0.6-0.9,0.6-1.8,0-2.7 c-0.9-1.6-0.9-3.2,0-4.7c0.3-0.4,0.4-0.9,0.5-1.4c0-0.7,0.6-1.2,1.3-1.2c0.7,0,1.1,0.6,1.1,1.3c0,0.8-0.3,1.6-0.7,2.3 c-0.6,0.9-0.5,1.7,0,2.6c1,1.6,1,3.3,0,4.9c-0.5,0.9-0.5,1.7,0,2.6c1,1.6,0.9,3.2,0,4.9c-0.2,0.4-0.4,0.8-0.4,1.2 c-0.1,0.8-0.6,1.3-1.3,1.3C23.6,21,23.1,20.5,23.2,19.6z",
              }),
              i.createElement("path", {
                d: "M35.5,1.5c0,0.8-0.3,1.5-0.7,2.2c-0.5,0.8-0.5,1.6,0,2.5c1,1.6,1,3.3,0,5c-0.5,0.8-0.5,1.6,0,2.5c1,1.7,1,3.3,0,5 c-0.2,0.4-0.4,0.8-0.4,1.3c0,0.6-0.6,1.1-1.2,1.1c-0.6,0-1.2-0.5-1.2-1.2c0-0.9,0.2-1.7,0.7-2.4c0.6-0.9,0.6-1.7,0-2.7 c-1-1.6-0.9-3.3,0-4.9c0.5-0.8,0.5-1.6,0-2.5c-1-1.7-1-3.3,0-5C32.9,2.1,33,1.7,33,1.3c0.1-0.9,0.6-1.4,1.4-1.3 C35.1,0.1,35.6,0.7,35.5,1.5z",
              })
            ))
        );
      }
      var an,
        ln = i.forwardRef(rn),
        cn = (n.p, ["title", "titleId"]);
      function on() {
        return (
          (on = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          on.apply(this, arguments)
        );
      }
      function un(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function sn(e, t) {
        var n = e.title,
          r = e.titleId,
          a = un(e, cn);
        return i.createElement(
          "svg",
          on(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 50 50",
              style: { enableBackground: "new 0 0 50 50" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          an ||
            (an = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M48.2,27.3c0.1,1.8-0.2,3.5-0.7,5.1c-1.3,4.8-4.1,8.8-8.3,12c-0.3,0.2-0.5,0.4-0.9,0.2c-0.1-0.1-0.4-0.1-0.6-0.1 c-8.5,0-16.9,0-25.4,0c-0.1,0-0.3,0-0.4,0c-0.6,0.4-1,0-1.3-0.3C5,39.9,2.1,34.5,1.8,27.9c0-0.1,0-0.3,0-0.4c0-0.1,0-0.1,0-0.2 C17.2,27.3,32.7,27.3,48.2,27.3z",
              }),
              i.createElement("path", {
                d: "M35,9.2c0.7,0.5,1.2,1,1.8,1.5c0,0.1-0.1,0.2-0.1,0.3c0.4-0.4,0.8-0.8,1.2-1.2c3.1-3,6.3-5.9,9.5-8.9 c0.1-0.1,0.2-0.2,0.3-0.2c0.4-0.4,1-0.4,1.4,0c0.3,0.3,0.3,0.8-0.1,1.2c-1.2,1.2-2.4,2.3-3.7,3.5c-2.4,2.2-4.7,4.4-7,6.6 c0.4,0.4,1,0.7,1.1,1.2c0.3,0.9,0.9,1.3,1.8,1.7c1.2,0.5,1.5,1.6,1.4,2.8c0.2,0,0.4,0,0.5,0c1.1,0,1.9,0.5,2.3,1.4 c0.2,0.3,0.3,0.4,0.7,0.5c1.7,0.1,2.9,0.9,3.5,2.4c0.6,1.5,0.3,2.8-0.8,4c-0.3,0.3-0.6,0.4-1.1,0.4c-15.2,0-30.3,0-45.5,0 c-0.3,0-0.6,0-1,0.1c-0.1,0-0.2,0-0.3-0.1c-1.4-1-1.5-3.6,0-4.6c0.8-0.5,1.2-1,1.6-1.8c0.6-1.3,1.9-1.7,3.5-1.7 c-0.4-1.4-0.2-2.7,1-3.6c1.2-1,2.6-1.1,4-0.5c0.1-0.2,0.2-0.4,0.4-0.5c1-1.5,2.9-2.3,4.9-2c0.3,0,0.5,0.1,0.7-0.3 c1.3-2.2,3.9-2.9,6.4-1.7c0.1,0,0.2,0.1,0.3,0.1c1.7-2.5,4.8-2.1,6.1-0.2c0.9-0.5,1.8-0.7,2.8-0.7c0.2,0,0.4-0.2,0.5-0.4 c1.7-2.6,3.4-5.2,5.1-7.8C38.7,0.3,39,0.1,39.3,0C39.5,0,40,0.1,40.1,0.3c0.2,0.2,0.2,0.7,0.1,0.9c-0.4,0.7-0.8,1.3-1.3,2 C37.6,5.3,36.3,7.3,35,9.2z",
              }),
              i.createElement("path", {
                d: "M37.9,45.5c0,0.7,0.1,1.3,0,1.9c-0.2,1.6-1.5,2.6-3.3,2.6c-2.8,0-5.5,0-8.3,0c-3.5,0-7,0-10.5,0c-2.4,0-3.7-1.2-3.7-3.4 c0-0.4,0-0.7,0-1.1C20.7,45.5,29.3,45.5,37.9,45.5z",
              })
            ))
        );
      }
      var fn,
        dn = i.forwardRef(sn),
        pn =
          (n.p,
          function () {
            var e = ce(),
              t = e.token,
              n = e.removeToken,
              r = F();
            return (
              (0, i.useEffect)(
                function () {
                  var e = document.documentElement.style;
                  "/" === window.location.pathname
                    ? (e.setProperty("--nav-bgc", "rgba(0, 0, 0, 0.5)"),
                      e.setProperty("--nav-link-color", "#fff"),
                      e.setProperty("--nav-link-svg", "#fff"))
                    : (e.setProperty("--nav-bgc", "rgba(255, 255, 255, 0.819)"),
                      e.setProperty("--nav-link-color", "#111"),
                      e.setProperty("--nav-link-svg", "hsl(105, 9%, 66%)"));
                },
                [r]
              ),
              (0, ae.jsxs)(i.Fragment, {
                children: [
                  (0, ae.jsxs)("div", {
                    className: "navigation",
                    children: [
                      (0, ae.jsx)(G, {
                        className: "logo-container home",
                        to: "",
                        children: (0, ae.jsx)(vt, { className: "logo" }),
                      }),
                      (0, ae.jsxs)("div", {
                        className: "nav-left",
                        children: [
                          (0, ae.jsxs)(G, {
                            className: "nav-link",
                            to: "/about",
                            children: [
                              (0, ae.jsx)("span", { children: "ABOUT" }),
                              (0, ae.jsx)(Qt, { className: "nav-swap-icon" }),
                            ],
                          }),
                          (0, ae.jsxs)(G, {
                            className: "nav-link",
                            to: "/blog",
                            children: [
                              (0, ae.jsx)("span", { children: "BLOG" }),
                              (0, ae.jsx)(Gt, { className: "nav-swap-icon" }),
                            ],
                          }),
                        ],
                      }),
                      (0, ae.jsxs)("div", {
                        className: "nav-right",
                        children: [
                          (0, ae.jsxs)(G, {
                            className: "nav-link",
                            to: "/meals/breakfast",
                            children: [
                              (0, ae.jsx)("span", { children: "MEALS" }),
                              (0, ae.jsx)(ln, { className: "nav-swap-icon" }),
                            ],
                          }),
                          (0, ae.jsxs)(G, {
                            className: "nav-link",
                            to: "/cuisines/american",
                            children: [
                              (0, ae.jsx)("span", { children: "CUISINES" }),
                              (0, ae.jsx)(dn, { className: "nav-swap-icon" }),
                            ],
                          }),
                          (0, ae.jsxs)("div", {
                            className: "nav-icons-container",
                            children: [
                              t &&
                                "admin" === t.token &&
                                (0, ae.jsx)(G, {
                                  className: "nav-link different-position",
                                  to: "/admin",
                                  children: (0, ae.jsx)(Ht, {}),
                                }),
                              (0, ae.jsx)(G, {
                                className: "different-position",
                                to: "/profile",
                                children: (0, ae.jsx)(Lt, {}),
                              }),
                              t
                                ? (0, ae.jsx)("button", {
                                    className: "different-position",
                                    onClick: function () {
                                      n();
                                    },
                                    children: (0, ae.jsx)(Nt, {
                                      className: "nav-link-icon ",
                                    }),
                                  })
                                : (0, ae.jsx)(G, {
                                    className: "different-position",
                                    to: "/auth",
                                    children: (0, ae.jsx)(jt, {
                                      className: "nav-link-icon",
                                    }),
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, ae.jsx)(A, {}),
                ],
              })
            );
          }),
        hn = ["title", "titleId"];
      function mn() {
        return (
          (mn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          mn.apply(this, arguments)
        );
      }
      function vn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function gn(e, t) {
        var n = e.title,
          r = e.titleId,
          a = vn(e, hn);
        return i.createElement(
          "svg",
          mn(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 77.7 20.2",
              style: { enableBackground: "new 0 0 77.7 20.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          fn ||
            (fn = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M21.9,7.9c-0.5-1-1.2-1.7-2.2-2.1c-0.9-0.5-2-0.7-3.2-0.7c-1.4,0-2.7,0.3-3.7,0.9c-0.8,0.5-1.5,1.2-2,2V5.2H8.8v15h2v-7.9 c0-1.1,0.2-2.1,0.6-2.9c0.4-0.8,1-1.4,1.8-1.9c0.8-0.4,1.7-0.6,2.8-0.6c1.4,0,2.5,0.4,3.3,1.2c0.8,0.8,1.2,2,1.2,3.6v8.5h2v-8.7 C22.7,10,22.4,8.8,21.9,7.9z",
              }),
              i.createElement("path", {
                d: "M40.3,8.6c-0.6-1.2-1.5-2-2.6-2.7c-1.1-0.6-2.3-1-3.8-1c-1.4,0-2.6,0.3-3.8,1c-1.1,0.7-2,1.6-2.6,2.7c-0.6,1.1-1,2.5-1,3.9 s0.3,2.8,1,4s1.6,2.1,2.8,2.7s2.6,1,4.1,1c1.2,0,2.3-0.2,3.3-0.6c1-0.4,1.8-1,2.5-1.8l-1.1-1.3c-0.6,0.7-1.3,1.2-2,1.5 c-0.8,0.3-1.6,0.5-2.6,0.5c-1.2,0-2.2-0.2-3.1-0.7c-0.9-0.5-1.6-1.2-2.1-2c-0.4-0.7-0.7-1.6-0.7-2.5h12.6c0-0.1,0-0.2,0-0.3 s0-0.2,0-0.3C41.3,11,40.9,9.7,40.3,8.6z M29.3,9.4c0.5-0.9,1.1-1.5,1.9-2C32,6.9,32.9,6.7,34,6.7c1,0,2,0.2,2.8,0.7 c0.8,0.5,1.4,1.1,1.9,2c0.4,0.7,0.6,1.5,0.7,2.3H28.6C28.7,10.8,28.9,10.1,29.3,9.4z",
              }),
              i.createElement("polygon", {
                points:
                  "56.9,20.2 50.9,12.5 56.5,5.2 54.3,5.2 49.8,11.1 45.3,5.2 43,5.2 48.6,12.5 42.7,20.2 45,20.2 49.8,13.9 54.5,20.2  ",
              }),
              i.createElement("path", {
                d: "M67.4,17.7c-0.6,0.5-1.3,0.8-2.2,0.8c-0.8,0-1.5-0.2-1.9-0.7c-0.4-0.5-0.7-1.2-0.7-2v-9h4.6V5.1h-4.6V0h-2v5.1h-2.7v1.7 h2.7v9.1c0,1.4,0.4,2.5,1.1,3.2c0.8,0.8,1.8,1.1,3.3,1.1c0.6,0,1.2-0.1,1.7-0.3s1-0.4,1.4-0.8L67.4,17.7z",
              })
            ))
        );
      }
      var yn,
        bn = i.forwardRef(gn),
        xn = (n.p, ["title", "titleId"]);
      function wn() {
        return (
          (wn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          wn.apply(this, arguments)
        );
      }
      function jn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function kn(e, t) {
        var n = e.title,
          r = e.titleId,
          a = jn(e, xn);
        return i.createElement(
          "svg",
          wn(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 62.8 20.2",
              style: { enableBackground: "new 0 0 62.8 20.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          yn ||
            (yn = i.createElement(
              "g",
              null,
              i.createElement("path", { d: "M0,20.2V0h1.9v20.2H0z" }),
              i.createElement("path", {
                d: "M13.3,20.2c-1.5,0-2.8-0.3-3.9-0.9s-2-1.5-2.6-2.6s-0.9-2.3-0.9-3.7c0-1.4,0.3-2.6,0.9-3.7c0.6-1.1,1.4-1.9,2.5-2.6 c1.1-0.6,2.2-0.9,3.5-0.9c1.3,0,2.5,0.3,3.6,0.9s1.8,1.4,2.4,2.5s0.9,2.3,0.9,3.8c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3H7.3v-1.4 h11.3l-0.8,0.6c0-1-0.2-1.9-0.7-2.7c-0.4-0.8-1-1.4-1.8-1.9c-0.8-0.4-1.6-0.7-2.6-0.7c-1,0-1.8,0.2-2.6,0.7C9.4,8.5,8.8,9.1,8.3,10 c-0.4,0.8-0.6,1.7-0.6,2.8V13c0,1.1,0.2,2,0.7,2.8c0.5,0.8,1.1,1.5,2,1.9c0.9,0.5,1.8,0.7,2.9,0.7c0.9,0,1.7-0.2,2.4-0.5 c0.7-0.3,1.4-0.8,1.9-1.4l1.1,1.2c-0.6,0.8-1.4,1.3-2.4,1.7C15.5,20,14.4,20.2,13.3,20.2z",
              }),
              i.createElement("path", {
                d: "M27.2,20.2c-1.1,0-2-0.2-2.8-0.5c-0.8-0.4-1.4-0.8-1.8-1.5c-0.4-0.6-0.6-1.3-0.6-2.1c0-0.7,0.2-1.4,0.5-2 c0.4-0.6,0.9-1.1,1.7-1.5c0.8-0.4,1.9-0.6,3.2-0.6h4.9v1.4h-4.8c-1.4,0-2.3,0.2-2.8,0.7c-0.5,0.5-0.8,1.1-0.8,1.8 c0,0.8,0.3,1.5,0.9,1.9c0.6,0.5,1.5,0.7,2.6,0.7c1.1,0,2-0.2,2.8-0.7s1.4-1.2,1.7-2.1l0.4,1.3c-0.4,0.9-1,1.7-1.9,2.2 C29.6,19.9,28.5,20.2,27.2,20.2z M32,20v-3.1L32,16.4v-5.2c0-1.2-0.3-2.1-1-2.8c-0.7-0.6-1.7-1-3-1c-0.9,0-1.8,0.2-2.6,0.5 s-1.5,0.7-2.1,1.2l-0.9-1.4c0.7-0.6,1.6-1.1,2.6-1.4c1-0.3,2.1-0.5,3.2-0.5c1.8,0,3.3,0.5,4.3,1.4s1.5,2.3,1.5,4.1V20H32z",
              }),
              i.createElement("path", {
                d: "M39.1,20.2V6h1.8v3.9l-0.2-0.7c0.4-1.1,1.1-1.9,2-2.5c0.9-0.6,2.1-0.8,3.5-0.8v1.9c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0 c-1.5,0-2.7,0.5-3.5,1.4C41.4,10,41,11.3,41,13v7.2H39.1z",
              }),
              i.createElement("path", {
                d: "M56.9,5.9c1.2,0,2.2,0.2,3,0.7s1.6,1.1,2.1,2s0.7,2,0.7,3.4v8.2h-1.9v-8c0-1.5-0.4-2.6-1.1-3.4C59,8,57.9,7.6,56.6,7.6 c-1,0-1.9,0.2-2.6,0.6c-0.7,0.4-1.3,1-1.7,1.8c-0.4,0.8-0.6,1.7-0.6,2.8v7.5h-1.9V6h1.8v3.9l-0.3-0.7c0.5-1,1.2-1.8,2.2-2.4 C54.4,6.2,55.6,5.9,56.9,5.9z",
              })
            ))
        );
      }
      var Sn,
        On,
        En,
        Cn,
        Nn,
        Pn = i.forwardRef(kn),
        zn =
          (n.p,
          function (e) {
            var t = e.className,
              n = void 0 === t ? "" : t,
              r = e.to,
              a = void 0 === r ? "" : r;
            return (0, ae.jsx)("div", {
              className: "button-next ".concat(n),
              children: (0, ae.jsxs)(J, {
                to: a,
                children: [
                  (0, ae.jsx)(bn, { className: "button-next-svg" }),
                  (0, ae.jsx)(Pn, { className: "button-next-text" }),
                ],
              }),
            });
          }),
        Mn = ["title", "titleId"];
      function _n() {
        return (
          (_n = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _n.apply(this, arguments)
        );
      }
      function In(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ln(e, t) {
        var n = e.title,
          r = e.titleId,
          a = In(e, Mn);
        return i.createElement(
          "svg",
          _n(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 450.1 450",
              style: { enableBackground: "new 0 0 450.1 450" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Sn ||
            (Sn = i.createElement(
              "style",
              { type: "text/css" },
              "\n\t.st100{fill:#FFFFFF}\n"
            )),
          On || (On = i.createElement("path", { d: "M0,0v450h450.1V0H0z" })),
          En ||
            (En = i.createElement("rect", {
              x: 69.5,
              y: 174,
              className: "st100",
              width: 67.3,
              height: 202.6,
            })),
          Cn ||
            (Cn = i.createElement("path", {
              className: "st100",
              d: "M103.1,146.3L103.1,146.3h-0.4c-22.6,0-37.2-15.6-37.2-35c0-19.9,15.1-35,38.1-35s37.2,15.1,37.6,35 C141.2,130.8,126.6,146.3,103.1,146.3z",
            })),
          Nn ||
            (Nn = i.createElement("path", {
              className: "st100",
              d: "M379.6,376.6h-67.3V268.2c0-27.2-9.8-45.8-34.1-45.8c-18.6,0-29.7,12.5-34.6,24.6c-1.8,4.3-2.2,10.4-2.2,16.4 v113.1h-67.3l0,0c0,0,0.9-183.6,0-202.6h67.3v28.7c9-13.8,25-33.4,60.7-33.4c44.3,0,77.5,29,77.5,91.2L379.6,376.6L379.6,376.6z",
            }))
        );
      }
      var Tn,
        Rn = i.forwardRef(Ln),
        Bn = (n.p, ["title", "titleId"]);
      function Fn() {
        return (
          (Fn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Fn.apply(this, arguments)
        );
      }
      function Dn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Vn(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Dn(e, Bn);
        return i.createElement(
          "svg",
          Fn(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 450.1 450",
              style: { enableBackground: "new 0 0 450.1 450" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Tn ||
            (Tn = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M300.8,73.4c20.1,0,39.1,8,53.5,22.3c14.4,14.3,22.3,33.4,22.3,53.5v151.6c0,20.1-8,39.1-22.3,53.5 c-14.3,14.4-33.4,22.3-53.5,22.3H149.3c-20.1,0-39.1-8-53.5-22.3c-14.4-14.3-22.3-33.4-22.3-53.5V149.2c0-20.1,8-39.1,22.3-53.5 s33.4-22.3,53.5-22.3H300.8 M300.8,43.1H149.3c-58.4,0-106.1,47.8-106.1,106.1v151.6c0,58.4,47.8,106.1,106.1,106.1h151.6 c58.4,0,106.1-47.8,106.1-106.1V149.2C407,90.8,359.2,43.1,300.8,43.1z",
              }),
              i.createElement("path", {
                d: "M323.6,149.2c-12.6,0-22.7-10.1-22.7-22.7s10.1-22.7,22.7-22.7c12.5,0,22.7,10.1,22.7,22.7S336.1,149.2,323.6,149.2z  M225.1,164.4c33.4,0,60.6,27.2,60.6,60.6s-27.2,60.6-60.6,60.6s-60.6-27.2-60.6-60.6S191.6,164.4,225.1,164.4 M225.1,134 c-50.2,0-91,40.7-91,91s40.7,91,91,91s91-40.7,91-91S275.3,134,225.1,134z",
              })
            ))
        );
      }
      var Hn,
        An = i.forwardRef(Vn),
        Un = (n.p, ["title", "titleId"]);
      function $n() {
        return (
          ($n = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          $n.apply(this, arguments)
        );
      }
      function Wn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function qn(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Wn(e, Un);
        return i.createElement(
          "svg",
          $n(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 450.1 450",
              style: { enableBackground: "new 0 0 450.1 450" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Hn ||
            (Hn = i.createElement(
              "g",
              null,
              i.createElement(
                "g",
                null,
                i.createElement(
                  "g",
                  null,
                  i.createElement("path", {
                    d: "M350.6,268.5l-58.9-69.3l52.3-29.9c5.1-2.9,6.9-9.4,4-14.5c-2.9-5.1-9.4-6.9-14.5-4c-4.4,2.5-103.5,59.1-108.4,61.8 c-4.9-2.8-104.1-59.4-108.4-61.8c-5.1-2.9-11.6-1.1-14.5,4c-2.9,5.1-1.1,11.6,4,14.5l52.3,29.9l-58.9,69.3 c-3.8,4.5-3.3,11.2,1.2,15c4.5,3.8,11.2,3.3,15-1.2l61.5-72.3l42.5,24.3c3.3,1.9,7.3,1.9,10.6,0l42.5-24.3l61.5,72.3 c3.8,4.5,10.5,5,15,1.2C353.9,279.7,354.4,273,350.6,268.5z",
                  })
                )
              ),
              i.createElement(
                "g",
                null,
                i.createElement(
                  "g",
                  null,
                  i.createElement("path", {
                    d: "M375,100.6H75.1c-17.6,0-32,14.3-32,32v184.8c0,17.6,14.3,32,32,32H375c17.6,0,32-14.3,32-32V132.6 C407,115,392.6,100.6,375,100.6z M385.6,317.4c0,5.9-4.8,10.7-10.7,10.7H75.1c-5.9,0-10.7-4.8-10.7-10.7V132.6 c0-5.9,4.8-10.7,10.7-10.7H375c5.9,0,10.7,4.8,10.7,10.7V317.4z",
                  })
                )
              )
            ))
        );
      }
      var Qn = i.forwardRef(qn),
        Xn = (n.p, n.p + "static/media/about-bgc.8b403f9b550ab07db143.webp"),
        Zn = function () {
          return (0, ae.jsxs)("section", {
            className: "about-section",
            children: [
              (0, ae.jsx)("div", {
                className: "about-img-container",
                children: (0, ae.jsx)("img", { src: "".concat(Xn), alt: "" }),
              }),
              (0, ae.jsxs)("div", {
                className: "about-info-container nav-padding",
                children: [
                  (0, ae.jsxs)("div", {
                    className: "nama-meaning",
                    children: [
                      (0, ae.jsxs)("div", {
                        className: "nama-letter-container",
                        children: [
                          (0, ae.jsx)("p", {
                            className: "nama-letter",
                            children: "N",
                          }),
                          (0, ae.jsx)("div", { className: "nama-line" }),
                          (0, ae.jsx)("p", {
                            className: "nama-word",
                            children: "noll",
                          }),
                        ],
                      }),
                      (0, ae.jsxs)("div", {
                        className: "nama-letter-container",
                        children: [
                          (0, ae.jsx)("p", {
                            className: "nama-letter",
                            children: "A",
                          }),
                          (0, ae.jsx)("div", { className: "nama-line" }),
                          (0, ae.jsx)("p", {
                            className: "nama-word",
                            children: "avfall",
                          }),
                        ],
                      }),
                      (0, ae.jsxs)("div", {
                        className: "nama-letter-container",
                        children: [
                          (0, ae.jsx)("p", {
                            className: "nama-letter",
                            children: "MA",
                          }),
                          (0, ae.jsx)("div", { className: "nama-line" }),
                          (0, ae.jsx)("p", {
                            className: "nama-word",
                            children: "mat",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, ae.jsx)("h3", {
                    className: "about-title",
                    children: "My Mission",
                  }),
                  (0, ae.jsx)("p", {
                    className: "about-text",
                    children:
                      "My aim is to make your journey towards living a Zero Waste Lifestyle less intimidating. For me, it's not about waste jars and ultimatums.",
                  }),
                  (0, ae.jsx)("p", {
                    className: "about-text",
                    children:
                      "It's about making small changes every day that will leave a lasting impact.",
                  }),
                  (0, ae.jsx)("p", {
                    className: "about-text",
                    children:
                      "It's about making sustainable living achievable, fun, and accessible!",
                  }),
                  (0, ae.jsx)(zn, { className: "about", to: "/blog" }),
                  (0, ae.jsxs)("div", {
                    className: "about-contact-container",
                    children: [
                      (0, ae.jsx)("h3", {
                        className: "about-contact-title",
                        children: "Contact me:",
                      }),
                      (0, ae.jsx)("div", {
                        className: "about-contact",
                        children: (0, ae.jsx)("a", {
                          className: "about-icon-container",
                          href: "https://www.instagram.com/_wildtaste/",
                          target: "_blank",
                          children: (0, ae.jsx)(An, {}),
                        }),
                      }),
                      (0, ae.jsx)("div", {
                        className: "about-contact",
                        children: (0, ae.jsx)("a", {
                          className: "about-icon-container",
                          href: "https://www.linkedin.com/in/stefan-penk-276a03245/",
                          target: "_blank",
                          children: (0, ae.jsx)(Rn, { className: "color" }),
                        }),
                      }),
                      (0, ae.jsx)("div", {
                        className: "about-contact",
                        children: (0, ae.jsx)("a", {
                          className: "about-icon-container",
                          href: "mailto:stefan.penk@gmail.com",
                          children: (0, ae.jsx)(Qn, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Kn = n.p + "static/media/authentication-bgc.b08351d2f7ab7f726cad.webp",
        Yn = function () {
          var e,
            t,
            n = ce().saveToken,
            r = a((0, i.useState)(""), 2),
            l = r[0],
            c = r[1],
            o = a((0, i.useState)(""), 2),
            u = o[0],
            s = o[1],
            f = a((0, i.useState)(""), 2),
            d = f[0],
            p = f[1],
            h = R(),
            m =
              (null === (e = T().state) ||
              void 0 === e ||
              null === (t = e.from) ||
              void 0 === t
                ? void 0
                : t.pathname) || "/",
            v = (function () {
              var e = re(
                te().mark(function e(t) {
                  var r, a, i, c;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = function () {
                              return (
                                (a = re(
                                  te().mark(function e(t, n) {
                                    return te().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return e.abrupt(
                                              "return",
                                              fetch(
                                                "http://localhost:8080/login",
                                                {
                                                  method: "POST",
                                                  headers: {
                                                    "Content-Type":
                                                      "application/json",
                                                  },
                                                  body: JSON.stringify({
                                                    user: t,
                                                    password: n,
                                                  }),
                                                }
                                              ).then(function (e) {
                                                return e.json();
                                              })
                                            );
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )),
                                a.apply(this, arguments)
                              );
                            }),
                            (r = function (e, t) {
                              return a.apply(this, arguments);
                            }),
                            t.preventDefault(),
                            (e.next = 5),
                            r(l, u)
                          );
                        case 5:
                          (i = e.sent),
                            Object.keys(i).find(function (e) {
                              return "error" === e;
                            })
                              ? ((c = Object.values(i).join()), p(c))
                              : (n(i), h(m, { replace: !0 }));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, ae.jsxs)(ae.Fragment, {
            children: [
              (0, ae.jsxs)("form", {
                className: "auth-form",
                onSubmit: v,
                children: [
                  (0, ae.jsx)("input", {
                    id: "loginInput",
                    type: "email",
                    placeholder: "e-mail",
                    required: !0,
                    onChange: function (e) {
                      p(""), c(e.currentTarget.value);
                    },
                  }),
                  (0, ae.jsx)("input", {
                    id: "passwordInput",
                    type: "password",
                    placeholder: "password",
                    required: !0,
                    onChange: function (e) {
                      p(""), s(e.currentTarget.value);
                    },
                  }),
                  (0, ae.jsx)("button", {
                    className: "auth-button",
                    type: "submit",
                    children: "Submit",
                  }),
                ],
              }),
              (0, ae.jsx)("div", { className: "auth-error", children: d }),
            ],
          });
        },
        Jn = function (e) {
          var t = e.handleSwitchForms,
            n = a((0, i.useState)(""), 2),
            r = n[0],
            l = n[1],
            c = a((0, i.useState)(""), 2),
            o = c[0],
            u = c[1],
            s = a((0, i.useState)(""), 2),
            f = s[0],
            d = s[1],
            p = a((0, i.useState)(""), 2),
            h = p[0],
            m = p[1],
            v = a((0, i.useState)(""), 2),
            g = v[0],
            y = v[1];
          function b(e, t, n) {
            return x.apply(this, arguments);
          }
          function x() {
            return (
              (x = re(
                te().mark(function e(t, n, r) {
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            fetch("http://localhost:8080/register", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                user: t,
                                password: n,
                                name: r,
                              }),
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              x.apply(this, arguments)
            );
          }
          var w = (function () {
              var e = re(
                te().mark(function e(n) {
                  var a, l;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n.preventDefault(), f === h)) {
                            e.next = 6;
                            break;
                          }
                          y("different passwords"),
                            setTimeout(function () {
                              return y("");
                            }, 3e3),
                            (e.next = 13);
                          break;
                        case 6:
                          return (e.next = 8), b(r, f, o);
                        case 8:
                          (a = e.sent),
                            (l = Object.values(a).join()),
                            Object.keys(a).join(),
                            y(l),
                            setTimeout(function () {
                              t();
                            }, 1e3);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            j = function (e) {
              var t,
                n = e.currentTarget.id,
                r = e.currentTarget.value;
              switch (n) {
                case "createLoginInput":
                  l(r.toLocaleLowerCase());
                  break;
                case "createNameInput":
                  u((t = r).charAt(0).toUpperCase() + t.slice(1));
                  break;
                case "createPasswordInput":
                  d(r);
                  break;
                case "repeatPasswordInput":
                  m(r);
                  break;
                default:
                  console.log("don't know ".concat(n));
              }
            };
          return (0, ae.jsxs)(ae.Fragment, {
            children: [
              (0, ae.jsxs)("form", {
                className: "auth-form",
                onSubmit: w,
                children: [
                  (0, ae.jsx)("input", {
                    id: "createLoginInput",
                    type: "email",
                    placeholder: "e-mail",
                    required: !0,
                    onChange: j,
                  }),
                  (0, ae.jsx)("input", {
                    id: "createNameInput",
                    type: "text",
                    placeholder: "name",
                    required: !0,
                    onChange: j,
                  }),
                  (0, ae.jsx)("input", {
                    id: "createPasswordInput",
                    type: "password",
                    placeholder: "password",
                    required: !0,
                    onChange: j,
                  }),
                  (0, ae.jsx)("input", {
                    id: "repeatPasswordInput",
                    type: "password",
                    placeholder: "password",
                    required: !0,
                    onChange: j,
                  }),
                  (0, ae.jsx)("button", {
                    className: "auth-button",
                    type: "submit",
                    children: "Submit",
                  }),
                ],
              }),
              (0, ae.jsx)("div", { className: "auth-error", children: g }),
            ],
          });
        },
        Gn = function () {
          var e = a((0, i.useState)(!1), 2),
            t = e[0],
            n = e[1],
            r = function () {
              n(!t);
            };
          return (0, ae.jsxs)("section", {
            className: "section-auth",
            children: [
              (0, ae.jsxs)("div", {
                className: "auth-login-container nav-padding",
                children: [
                  (0, ae.jsx)(vt, { className: "auth-logo" }),
                  (0, ae.jsx)("h3", {
                    className: "auth-title",
                    children: t ? "Create your account" : "Welcome Back",
                  }),
                  t
                    ? (0, ae.jsx)(Jn, { handleSwitchForms: r })
                    : (0, ae.jsx)(Yn, {}),
                  (0, ae.jsxs)("div", {
                    className: "switch-container",
                    children: [
                      (0, ae.jsx)("p", {
                        className: "switch-text",
                        children: t
                          ? "Already registered?"
                          : "Don't hava an account?",
                      }),
                      (0, ae.jsx)("button", {
                        className: "switch-button auth-button",
                        onClick: r,
                        children: t ? "Sign In" : "Sign Up",
                      }),
                    ],
                  }),
                ],
              }),
              (0, ae.jsx)("div", {
                className: "auth-img-container",
                style: { backgroundImage: "url(".concat(Kn, ")") },
              }),
            ],
          });
        },
        er = (0, i.createContext)({
          meals: [],
          status: 0,
          zeroTotalResults: !1,
          setStatus: function () {},
          setZeroTotalResults: function () {},
          setMeals: function () {},
        }),
        tr = function (e) {
          var t = e.children,
            n = a((0, i.useState)([]), 2),
            r = n[0],
            l = n[1],
            c = a((0, i.useState)(0), 2),
            o = c[0],
            u = c[1],
            s = a((0, i.useState)(!1), 2),
            f = {
              meals: r,
              status: o,
              zeroTotalResults: s[0],
              setStatus: u,
              setZeroTotalResults: s[1],
              setMeals: l,
            };
          return (0, ae.jsx)(er.Provider, { value: f, children: t });
        },
        nr = function (e) {
          var t = e.meals;
          return (0, ae.jsx)("div", {
            className: "meals-list",
            children:
              t &&
              t.map(function (e) {
                return (0, ae.jsx)(He, { item: e }, e.id);
              }),
          });
        };
      function rr(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return t(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          r(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var ar = function (e) {
          var t = e.handleSubmit,
            n = e.svg,
            r = e.title,
            a = e.to;
          return (0, ae.jsxs)(G, {
            to: a,
            className: "meals-type",
            onClick: t,
            children: [
              (0, ae.jsx)(ae.Fragment, { children: n }),
              (0, ae.jsx)("span", { children: r }),
            ],
          });
        },
        lr = function (e) {
          var t = e.name,
            n = e.svg,
            r = e.className,
            a = e.setIntolerances,
            l = e.setDiets,
            c = (0, i.useRef)(null);
          return (0, ae.jsxs)("label", {
            htmlFor: t,
            className: "label-icons",
            ref: c,
            children: [
              (0, ae.jsx)("input", {
                type: "checkbox",
                name: t,
                id: t,
                className: "input-icons ".concat(r),
                onChange: function (e) {
                  var t = e.currentTarget.getAttribute("name"),
                    n = e.currentTarget.classList,
                    r = e.currentTarget.checked,
                    i = c.current.htmlFor;
                  c.current.classList.toggle(i),
                    n.contains("intolerances")
                      ? a(
                          r
                            ? function (e) {
                                return [].concat(rr(e), [t]);
                              }
                            : function (e) {
                                return e.filter(function (e) {
                                  return e !== t;
                                });
                              }
                        )
                      : n.contains("diet") &&
                        l(
                          r
                            ? function (e) {
                                return [].concat(rr(e), [t]);
                              }
                            : function (e) {
                                return e.filter(function (e) {
                                  return e !== t;
                                });
                              }
                        );
                },
              }),
              (0, ae.jsx)(ae.Fragment, { children: n }),
            ],
          });
        };
      var ir,
        cr = function (e) {
          var t = e.Button1,
            n = e.Button2,
            r = e.Button3,
            l = e.Button4,
            c = e.title1,
            o = e.title2,
            u = e.title3,
            s = e.title4,
            f = e.to1,
            d = e.to2,
            p = e.to3,
            h = e.to4,
            m = F().cuisine,
            v = F().type,
            g = (0, i.useContext)(er),
            y = g.setMeals,
            b = g.setZeroTotalResults,
            x = g.setStatus,
            w = a((0, i.useState)(""), 2),
            j = w[0],
            k = w[1],
            S = a((0, i.useState)([]), 2),
            O = S[0],
            E = S[1],
            C = a((0, i.useState)([]), 2),
            N = C[0],
            P = C[1],
            z = a((0, i.useState)([]), 2),
            M = z[0],
            _ = z[1],
            I = a((0, i.useState)(!0), 2),
            L = I[0],
            T = I[1];
          (0, i.useEffect)(
            function () {
              var e = void 0 === v ? "" : v,
                t = void 0 === m ? "" : m,
                n = (function () {
                  var e = re(
                    te().mark(function e(t, n, r, a, l) {
                      var i, c;
                      return te().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                fetch(
                                  "https://api.spoonacular.com/recipes/complexSearch?number="
                                    .concat(
                                      10,
                                      "&addRecipeInformation=true&cuisine="
                                    )
                                    .concat(n, "&diet=")
                                    .concat(a, "&type=")
                                    .concat(t, "&intolerances=")
                                    .concat(l, "&includeIngredients=")
                                    .concat(r, "&apiKey=")
                                    .concat("11e30b29cb6d47c082e3b57e8efdc467")
                                )
                              );
                            case 2:
                              if (!((i = e.sent).status >= 400)) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", x(i.status));
                            case 5:
                              return (e.next = 7), i.json();
                            case 7:
                              (c = e.sent).results && y(c.results),
                                b(0 === c.totalResults),
                                x(0);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n, r, a, l) {
                    return e.apply(this, arguments);
                  };
                })();
              n(e, t, O.join(), M.join(), N.join());
            },
            [L]
          );
          var R = function () {
            T(function (e) {
              return !e;
            });
          };
          return (0, ae.jsxs)("div", {
            className: "searchBar",
            children: [
              (0, ae.jsxs)("div", {
                className: "meals-types",
                children: [
                  (0, ae.jsx)(ar, { handleSubmit: R, svg: t, title: c, to: f }),
                  (0, ae.jsx)(ar, { handleSubmit: R, svg: n, title: o, to: d }),
                  (0, ae.jsx)(ar, { handleSubmit: R, svg: r, title: u, to: p }),
                  (0, ae.jsx)(ar, { handleSubmit: R, svg: l, title: s, to: h }),
                ],
              }),
              (0, ae.jsxs)("div", {
                className: "meals-form",
                children: [
                  (0, ae.jsxs)("div", {
                    className: "input-container",
                    children: [
                      (0, ae.jsx)("i", { className: "fa fa-search icon" }),
                      (0, ae.jsx)("form", {
                        action: "",
                        onSubmit: function (e) {
                          e.preventDefault();
                          var t = j;
                          (-1 !== O.indexOf(t) &&
                            "" !== t &&
                            "string" === typeof t) ||
                            E(function (e) {
                              return [].concat(rr(e), [t]);
                            }),
                            k("");
                        },
                        children: (0, ae.jsx)("input", {
                          type: "text",
                          className: "search-input",
                          placeholder: "Search by product",
                          value: j,
                          onChange: function (e) {
                            k(e.target.value);
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, ae.jsx)(lr, {
                    name: "vegan",
                    svg: (0, ae.jsx)(we, {}),
                    className: "diet",
                    setIntolerances: P,
                    setDiets: _,
                  }),
                  (0, ae.jsx)(lr, {
                    name: "vegetarian",
                    svg: (0, ae.jsx)(me, {}),
                    className: "diet",
                    setIntolerances: P,
                    setDiets: _,
                  }),
                  (0, ae.jsx)(lr, {
                    name: "Gluten",
                    svg: (0, ae.jsx)(Ie, {}),
                    className: "intolerances",
                    setIntolerances: P,
                    setDiets: _,
                  }),
                  (0, ae.jsx)(lr, {
                    name: "Dairy",
                    svg: (0, ae.jsx)(Ce, {}),
                    className: "intolerances",
                    setIntolerances: P,
                    setDiets: _,
                  }),
                  (0, ae.jsx)("button", {
                    className: "submit-form button-submit",
                    onClick: R,
                    children: "Submit",
                  }),
                ],
              }),
              (0, ae.jsx)("ul", {
                className: "selectedProducts",
                children: O.map(function (e) {
                  return (0, ae.jsxs)(
                    "li",
                    {
                      className: "selectedProduct",
                      children: [
                        (0, ae.jsx)("p", { children: e }),
                        (0, ae.jsx)("button", {
                          className: "selectedProduct-button",
                          onClick: function () {
                            return (function (e) {
                              var t = e;
                              E(function (e) {
                                return e.filter(function (e) {
                                  return e !== t;
                                });
                              });
                            })(e);
                          },
                          children: "X",
                        }),
                      ],
                    },
                    e
                  );
                }),
              }),
            ],
          });
        },
        or = ["title", "titleId"];
      function ur() {
        return (
          (ur = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ur.apply(this, arguments)
        );
      }
      function sr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function fr(e, t) {
        var n = e.title,
          r = e.titleId,
          a = sr(e, or);
        return i.createElement(
          "svg",
          ur(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 1515.4 1372.2",
              style: { enableBackground: "new 0 0 1515.4 1372.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          ir ||
            (ir = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M16.7,840.3c0,41.4,37.8,74.9,84.4,74.9h532.1L358,768.9H75.7C41.5,778.4,16.7,806.8,16.7,840.3z",
              }),
              i.createElement("path", {
                d: "M1509.2,840.3c0-33.5-24.8-61.9-59-71.5h-282L893.1,915.2h531.8C1471.4,915.2,1509.2,881.7,1509.2,840.3z",
              }),
              i.createElement("path", {
                d: "M1092.4,768.9H433.9C537.5,824,748.8,936.4,763.1,944.1C777.4,936.4,988.8,824,1092.4,768.9z",
              }),
              i.createElement("path", {
                d: "M1396,984.2c-213.3-0.2-426.5-0.1-639.7-0.1c-215.2,0-430.4,0.7-645.6-0.5c-55-0.3-76.3,16.9-75.7,63.9 c2.4,174.9,176.8,323.7,384.9,324.3c223,0.6,446.1,0.3,669,0c208.4-0.3,381.3-140.9,388.7-315.3 C1480.3,994.5,1469.4,984.4,1396,984.2z",
              }),
              i.createElement("path", {
                d: "M1430.9,549.6c-223.1-0.2-446.1-0.1-669.1-0.1c-227-0.1-453.9-0.3-680.8,0.1c-58.9,0.1-81.8,26.9-81,91.8 C0.8,704.1,26.5,734,83.3,734c450,0.3,900,0.3,1349.9-0.3c53.6-0.1,82.4-34.9,82.2-94.9C1515.2,577.5,1489.4,549.7,1430.9,549.6z",
              }),
              i.createElement("path", {
                d: "M1477.9,439.7c-1.4-31.8,0.7-63.7-0.4-95.4C1471.3,152.8,1299.2,0.9,1087,0.4C867.6-0.3,648.3,0.7,428.9,0 C319.2-0.4,227.5,35.8,150.8,105.5C73.8,175.4,36.9,260.7,36.1,358.1c-1.2,158.3-15.7,144,155.4,144c188-0.2,376-0.1,564-0.1 c217.3,0.1,434.7-0.7,652.1,0.6C1458.1,503,1479.9,484.8,1477.9,439.7z M408.3,283.8c0,8.2-6.4,14.8-14.2,14.8h-2.6 c-7.8,0-14.2-6.6-14.2-14.8v-35.1c0-8.1,6.4-14.8,14.2-14.8h2.6c7.8,0,14.2,6.6,14.2,14.8V283.8z M408.3,122 c0,8.2-6.4,14.8-14.2,14.8h-2.6c-7.8,0-14.2-6.6-14.2-14.8V87c0-8.1,6.4-14.8,14.2-14.8h2.6c7.8,0,14.2,6.6,14.2,14.8V122z  M563.3,186.8c0,8.2-6.3,14.8-14.1,14.8h-2.6c-7.8,0-14.2-6.6-14.2-14.8v-35.1c0-8.1,6.3-14.8,14.2-14.8h2.6 c7.8,0,14.1,6.6,14.1,14.8V186.8z M780.3,283.8c0,8.2-6.3,14.8-14.2,14.8h-2.6c-7.8,0-14.2-6.6-14.2-14.8v-35.1 c0-8.1,6.4-14.8,14.2-14.8h2.6c7.8,0,14.2,6.6,14.2,14.8V283.8z M780.3,122c0,8.2-6.3,14.8-14.2,14.8h-2.6 c-7.8,0-14.2-6.6-14.2-14.8V87c0-8.1,6.4-14.8,14.2-14.8h2.6c7.8,0,14.2,6.6,14.2,14.8V122z M966.3,186.8c0,8.2-6.3,14.8-14.2,14.8 h-2.6c-7.8,0-14.2-6.6-14.2-14.8v-35.1c0-8.1,6.4-14.8,14.2-14.8h2.6c7.8,0,14.2,6.6,14.2,14.8V186.8z M1121.3,283.8 c0,8.2-6.4,14.8-14.2,14.8h-2.6c-7.8,0-14.2-6.6-14.2-14.8v-35.1c0-8.1,6.4-14.8,14.2-14.8h2.6c7.8,0,14.2,6.6,14.2,14.8V283.8z  M1121.3,122c0,8.2-6.4,14.8-14.2,14.8h-2.6c-7.8,0-14.2-6.6-14.2-14.8V87c0-8.1,6.4-14.8,14.2-14.8h2.6c7.8,0,14.2,6.6,14.2,14.8 V122z",
              })
            ))
        );
      }
      var dr,
        pr = i.forwardRef(fr),
        hr = (n.p, ["title", "titleId"]);
      function mr() {
        return (
          (mr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          mr.apply(this, arguments)
        );
      }
      function vr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function gr(e, t) {
        var n = e.title,
          r = e.titleId,
          a = vr(e, hr);
        return i.createElement(
          "svg",
          mr(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 1515.4 1372.2",
              style: { enableBackground: "new 0 0 1515.4 1372.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          dr ||
            (dr = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M1341.5,958.5c-3.5-3.1-6.3-6.6-9.1-10.1c-2.1-2.9-4.5-6.5-6.5-10.2c-15.1-27.6-10.8-60.4,10.9-83.5l8.4-9l1.4-11.7 c7.6-63.7-74.8-237.9-282.2-425.6C857.1,220.6,664.7,146,594.3,152.9l-12.9,1.3l-9.9,7.6c-25.5,19.6-61.6,23.5-92,9.9 c-4.2-1.9-8.2-4-12.1-6.4c-3.1-2-7-4.6-10.4-7.8c-33-29.9-33-78.5,0-108.4C604.6-84.8,934.6,74,1184.2,299.9 s424.9,524.7,277.1,658.6C1428.2,988.4,1374.5,988.4,1341.5,958.5z",
              }),
              i.createElement("path", {
                d: "M1282.3,960.2l-550.5,196.9L150.9,1365C61.2,1397.1-27.4,1316.8,8,1235.6l229.6-526l217.5-498.4 c44.5,19.9,99,15.1,138.3-15c47.6-4.7,226.1,54.9,435.6,244.5c209.4,189.6,275.2,351.3,270,394.4 C1265.5,870.5,1260.3,919.9,1282.3,960.2z M657.7,362.5c-53.4-48.3-139.9-48.3-193.3,0c-53.4,48.3-53.4,126.7,0,175 c53.4,48.3,139.9,48.3,193.3,0C711.1,489.2,711.1,410.8,657.7,362.5z M246,990.8c-70.9,23.4-107.4,94.5-81.5,158.7 c25.9,64.2,104.3,97.3,175.2,73.8s107.4-94.5,81.5-158.7C395.4,1000.5,316.9,967.4,246,990.8z M832.5,797 c-70.9,23.4-107.4,94.5-81.5,158.7c25.9,64.2,104.3,97.3,175.2,73.8c70.9-23.4,107.4-94.5,81.5-158.7S903.5,773.6,832.5,797z  M1036.6,571.7c-16.4-13.2-42.1-8.3-51.3,9.7c-12.1,23.7-25.4,53.5-24.4,68.6c1.1,16.3,30.8,40.9,54.9,58.2 c16,11.5,39.6,7.1,49.2-9.3c14.3-24.6,30.7-57.9,24.5-73.2C1083.6,611.4,1058.2,589,1036.6,571.7z M663.8,810 c4.4-19.5-13-37.2-34.8-35.5c-28.7,2.2-63.9,6.6-77.9,15c-15.1,9-23.8,44.5-28.5,72c-3.1,18.3,12.9,34.6,33.4,34 c30.7-1,70.7-4.7,82.3-17.2C649.1,866.7,658,835.5,663.8,810z M618.7,1078c1.5-6.4-4.3-12.2-11.4-11.6c-9.4,0.7-21,2.2-25.6,4.9 c-4.9,2.9-7.8,14.6-9.3,23.6c-1,6,4.2,11.4,11,11.1c10.1-0.3,23.2-1.5,27-5.6C613.8,1096.6,616.8,1086.3,618.7,1078z M323.6,787.6 c-8.6-9.3-24.5-8.6-31.9,1.5c-9.8,13.2-20.9,30.1-21.8,39.3c-1,9.9,14.3,27.3,27,39.7c8.5,8.3,23.1,7.6,30.6-1.4 c11.2-13.6,24.5-32.3,22.3-42.1C347.8,815.6,334.8,799.9,323.6,787.6z M435.1,664.1c10.3-7.7,9.5-22.2-1.7-28.9 c-14.6-8.8-33.2-18.9-43.4-19.8c-10.9-0.9-30.1,13-43.9,24.5c-9.2,7.7-8.4,20.9,1.6,27.7c15,10.1,35.7,22.2,46.5,20.2 C404.2,686.1,421.5,674.3,435.1,664.1z",
              })
            ))
        );
      }
      var yr,
        br = i.forwardRef(gr),
        xr = (n.p, ["title", "titleId"]);
      function wr() {
        return (
          (wr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          wr.apply(this, arguments)
        );
      }
      function jr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function kr(e, t) {
        var n = e.title,
          r = e.titleId,
          a = jr(e, xr);
        return i.createElement(
          "svg",
          wr(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 1515.4 1372.2",
              style: { enableBackground: "new 0 0 1515.4 1372.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          yr ||
            (yr = i.createElement(
              "g",
              { id: "XMLID_806_" },
              i.createElement(
                "g",
                { id: "XMLID_624_" },
                i.createElement(
                  "g",
                  { id: "XMLID_580_" },
                  i.createElement("path", {
                    id: "XMLID_599_",
                    d: "M401.2,667.5c0,24.1,9.9,46.9,28.5,66.6c-7.2,6.6-15.3,12.8-24.4,18.5c-4.1-2.1-8.1-4.4-12-6.8 c-34.4-21.2-54.1-49.7-54.1-78.3s19.7-57.1,54.1-78.3c3.9-2.4,7.8-4.6,12-6.8c9.1,5.6,17.3,11.8,24.4,18.5 C411.1,620.6,401.2,643.4,401.2,667.5z",
                  }),
                  i.createElement("path", {
                    id: "XMLID_601_",
                    d: "M412.1,667.5c0-19.8,9.5-39.7,26.9-57c14.8,17,23.2,36.4,23.2,57c0,20.6-8.4,40.1-23.2,57 C421.6,707.2,412.1,687.3,412.1,667.5z",
                  }),
                  i.createElement("path", {
                    id: "XMLID_603_",
                    d: "M280.6,547.1c-15.6,5.7-30.1,12.6-43.3,20.7c-42.3,26-65.6,61.4-65.6,99.7c0,38.2,23.3,73.6,65.6,99.7 c13.2,8.1,27.7,15,43.3,20.7c-4.8,0.2-9.6,0.3-14.5,0.3c-13.7,0-27-0.9-39.9-2.5c-15.7-5.9-30.3-13-43.6-21.2 c-43-26.5-66.7-60.9-66.7-97c0-36.1,23.7-70.5,66.7-97c13.3-8.2,28-15.3,43.6-21.2c12.9-1.6,26.2-2.5,39.9-2.5 C271,546.8,275.9,546.9,280.6,547.1z",
                  }),
                  i.createElement("path", {
                    id: "XMLID_605_",
                    d: "M168.3,562.9C127.4,591.2,105,628,105,667.5s22.4,76.3,63.3,104.6c-58.7-20.9-98.2-59.9-98.2-104.6 C70.2,622.8,109.7,583.7,168.3,562.9z",
                  }),
                  i.createElement("path", {
                    id: "XMLID_606_",
                    d: "M182.7,667.5c0-31.3,21.5-62.5,59-85.6c22.5-13.9,49.3-24.2,78.6-30.5c8.1,1.4,16,3.2,23.7,5.2 c-13.7,5.1-26.5,11.3-38.1,18.4c-39.1,24.1-60.7,56.9-60.7,92.4c0,35.5,21.5,68.3,60.7,92.4c11.6,7.2,24.4,13.3,38.1,18.4 c-7.7,2-15.6,3.8-23.7,5.2c-29.3-6.3-56-16.6-78.6-30.5C204.2,730,182.7,698.8,182.7,667.5z",
                  }),
                  i.createElement("path", {
                    id: "XMLID_607_",
                    d: "M256.1,667.5c0-28.6,19.7-57.1,54.1-78.3c17.1-10.5,36.8-18.8,58.3-24.7c7.7,2.9,15,6.1,21.9,9.6 c-0.5,0.3-1,0.6-1.5,0.9c-39.1,24.1-60.7,56.9-60.7,92.4c0,35.5,21.5,68.3,60.7,92.4c0.5,0.3,1,0.6,1.5,0.9 c-6.9,3.5-14.2,6.7-21.9,9.6c-21.5-5.8-41.2-14.1-58.3-24.7C275.8,724.6,256.1,696.1,256.1,667.5z",
                  })
                ),
                i.createElement("path", {
                  id: "XMLID_829_",
                  d: "M43.7,1210.3l1407.4-677.6c25.8-12.4,53.8,7.6,62,44.4v0c8.2,36.8-6.6,75.9-32.8,86.6L52.1,1248.1 c-7.3,3-15-2.8-17.3-13.1l0,0C32.6,1224.7,36.5,1213.7,43.7,1210.3z",
                }),
                i.createElement(
                  "g",
                  { id: "XMLID_622_" },
                  i.createElement("path", {
                    id: "XMLID_625_",
                    d: "M153.8,1171.5c33.1,12.6,71.5,19.8,112.3,19.8c125.1,0,226.5-67.3,226.5-150.3v-44L153.8,1171.5z",
                  }),
                  i.createElement("path", {
                    id: "XMLID_639_",
                    d: "M106.4,1147.5l386.3-228.3V685H492c-9.1,77.5-106.7,138.5-225.8,138.5c-119.1,0-216.7-61-225.8-138.5 h-0.7v356C39.7,1082.6,65.2,1120.3,106.4,1147.5z",
                  })
                ),
                i.createElement("path", {
                  id: "XMLID_623_",
                  d: "M8.8,1084.5l1420-953.8c26.1-17.5,56.7-2.9,67.8,32.3h0c11.1,35.2-1.6,77.2-28.2,93.1L20.2,1120.7 c-7.4,4.4-15.8,0.1-18.9-9.7l0,0C-1.8,1101.2,1.5,1089.4,8.8,1084.5z",
                })
              )
            ))
        );
      }
      var Sr,
        Or = i.forwardRef(kr),
        Er = (n.p, ["title", "titleId"]);
      function Cr() {
        return (
          (Cr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Cr.apply(this, arguments)
        );
      }
      function Nr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Pr(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Nr(e, Er);
        return i.createElement(
          "svg",
          Cr(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 1515.4 1372.2",
              style: { enableBackground: "new 0 0 1515.4 1372.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Sr ||
            (Sr = i.createElement("path", {
              d: "M397.5,551L397.5,551z M503.2,551.1L503.2,551.1z M1453.9,0c-3.7,0-7.5,0.2-11.3,0.6l-1252,123.8c-10.4,1-18.2,9.5-17.4,19 c0.7,9,8.8,15.8,18.6,15.8c0.5,0,1.1,0,1.6-0.1l62.3-4.8c-3,6.6-6.1,13.4-9.1,20.4h0l-50.3,2.9c-10.5,0.6-18.6,8.8-18.3,18.3 c0.3,9.3,8.5,16.5,18.7,16.5c0.3,0,0.5,0,0.8,0l34.8-1.3h0v0c-15,43.1-23,90.4-7.4,140.5c11.1,35.5,33.8,71.3,53.5,102.7 c21.1,33.5,39.2,62.7,47.7,90c0.7,2.3,1.3,4.5,1.9,6.7l69.5,0.1c-0.4-2.5-0.9-5.1-1.4-7.7c-1.2-5.5-2.6-10.9-4.3-16.3 c-11.3-36.2-34.3-72.4-54.2-104.1c-20.9-33.3-38.7-62-47-88.6c-17-54.6,5.2-105.7,34.3-169.2c2.5-5.4,3.2-11.1,2.4-16.5l38.1-3h0 c-26.9,58.6-58.7,128.8-34.8,205.9c11.1,35.5,33.8,71.3,53.5,102.7c21.1,33.5,39.2,62.7,47.7,90v0c0.7,2.3,1.3,4.5,1.9,6.7l69.5,0.1 c-0.4-2.6-0.9-5.2-1.4-7.8c-1.2-5.5-2.6-10.9-4.3-16.3c-11.3-36.2-34.3-72.4-54.2-104.1v0c-20.9-33.3-38.7-62-47-88.6 c-17-54.6,5.2-105.7,34.3-169.2c3.7-8.2,3.4-16.9-0.1-24.5l53.7-4.2c-0.9,1.4-1.7,2.8-2.4,4.3c-27.3,59.6-61.7,131.6-37,210.8 c11.1,35.5,33.8,71.3,53.5,102.7c21.1,33.5,39.2,62.7,47.7,90c0.7,2.3,1.4,4.6,1.9,6.9l69.5,0.1c-0.4-2.6-0.9-5.2-1.4-7.9 c-1.2-5.5-2.6-10.9-4.3-16.3c-11.3-36.2-34.3-72.4-54.2-104.1c-20.9-33.3-38.7-62-47-88.6c-13.8-44.3-1.8-86.3,18.8-134.5 l927.4-34.8c33.2-1.2,59.8-16.3,58.7-33.5c-1-16.1-25.5-27.9-55.6-27.9c-2.2,0-4.5,0.1-6.8,0.2L547.2,157v0c1.3-9-1.8-18-8.3-24.7h0 l910.1-70.7c33.1-2.6,59-18.7,57.1-35.9C1504.5,10.5,1481.9,0,1453.9,0L1453.9,0z M617.4,551.2C617.4,551.2,617.4,551.2,617.4,551.2 L617.4,551.2z M504.7,576.8L504.7,576.8z M618.9,576.9L618.9,576.9L618.9,576.9z M330.7,576.7L330.7,576.7c0,0,0,0.1,0,0.1l-46.7,0 l-46.2,0.2v0c-0.7,0.1-1.5,0.2-2.2,0.3h0L34.2,578c-9.7,0-19,3.9-25.5,10.5c-6.5,6.7-9.6,15.6-8.5,24.5 c26.6,218,53.9,452.3,161.4,575.5c51.9,59.5,121,92.3,197,110.3c83.6,16.6,177.7,18.5,274.1,18.6v0v0c1.7,0,4.5,0,6.1,0 c95.2,0,188.1-2.1,270.5-18.7l0,0c75.1-18,143.4-50.7,194.9-109.7c107.5-123.2,134.9-357.6,161.6-575.8l0.1-0.6 c1.1-8.9-2-17.8-8.5-24.5c-6.5-6.7-15.8-10.5-25.6-10.5l-613-0.5h0c0,0,0-0.1,0-0.1l-68.3-0.1h0c0,0,0,0.1,0,0.1l-45.9,0 c0,0,0-0.1,0-0.1l-68.3-0.1l-37.5,0v0L330.7,576.7z M384.7,1327L384.7,1327c-0.7,2.7-1,5.5-1,8.3c0,20.4,18,36.9,40.2,36.9h418.3 c22.2,0,40.2-16.5,40.2-36.9c0-2.8-0.3-5.6-1-8.2h0c-6.8,4.1-15,6.6-23.8,6.6l-449,0C399.8,1333.7,391.6,1331.2,384.7,1327 L384.7,1327z M384.7,1327",
            }))
        );
      }
      var zr,
        Mr = i.forwardRef(Pr),
        _r = (n.p, n.p + "static/media/no-results.7c554759fe782d5c6787.webp"),
        Ir = function () {
          return (0, ae.jsxs)("div", {
            className: "oops-container",
            children: [
              (0, ae.jsx)("div", {
                className: "img-container",
                style: { backgroundImage: "url(".concat(_r, ")") },
              }),
              (0, ae.jsx)("p", {
                className: "oops-img-author",
                children: (0, ae.jsx)("a", {
                  href: "https://pl.freepik.com/darmowe-wektory/ilustracja-koncepcji-testera-oprogramowania_32044575.htm#page=4&position=20&from_view=author",
                  children: "Image by storyset on Freepik.",
                }),
              }),
              (0, ae.jsx)("h3", {
                className: "oops-header",
                children: "WE COULDN'T FIND ANY RESULTS...",
              }),
              (0, ae.jsx)("p", {
                className: "oops-text",
                children: "We will try to make it better next time.",
              }),
              (0, ae.jsx)("p", {
                className: "oops-text",
                children: "Please try to find another option.",
              }),
            ],
          });
        },
        Lr = function () {
          var e = (0, i.useContext)(er),
            t = e.meals,
            n = e.zeroTotalResults,
            r = e.status;
          return (0, ae.jsxs)("section", {
            className: "section-meals nav-padding",
            children: [
              (0, ae.jsx)(cr, {
                Button1: (0, ae.jsx)(pr, {}),
                Button2: (0, ae.jsx)(br, {}),
                Button3: (0, ae.jsx)(Or, {}),
                Button4: (0, ae.jsx)(Mr, {}),
                title1: "American",
                title2: "Italian",
                title3: "Japanese",
                title4: "Thai",
                to1: "/cuisines/american",
                to2: "/cuisines/italian",
                to3: "/cuisines/korean",
                to4: "/cuisines/thai",
              }),
              (401 === r || 402 === r) && (0, ae.jsx)(We, {}),
              r >= 400 && 401 !== r && 402 !== r && (0, ae.jsx)(Ue, {}),
              n && (0, ae.jsx)(Ir, {}),
              !n && 0 === t.length && r < 300 && (0, ae.jsx)(Qe, {}),
              !n && 0 !== t.length && r < 300 && (0, ae.jsx)(nr, { meals: t }),
            ],
          });
        },
        Tr = function (e) {
          var t = e.setIsModalVisible,
            n = e.message,
            r = ce().saveToken,
            l = a((0, i.useState)(""), 2),
            c = l[0],
            o = l[1],
            u = a((0, i.useState)(""), 2),
            s = u[0],
            f = u[1],
            d = a((0, i.useState)(""), 2),
            p = d[0],
            h = d[1],
            m = (function () {
              var e = re(
                te().mark(function e(n) {
                  var a, l, i, u;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (l = function () {
                              return (
                                (l = re(
                                  te().mark(function e(t, n) {
                                    return te().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return e.abrupt(
                                              "return",
                                              fetch(
                                                "http://localhost:8080/login",
                                                {
                                                  method: "POST",
                                                  headers: {
                                                    "Content-Type":
                                                      "application/json",
                                                  },
                                                  body: JSON.stringify({
                                                    user: t,
                                                    password: n,
                                                  }),
                                                }
                                              ).then(function (e) {
                                                return e.json();
                                              })
                                            );
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )),
                                l.apply(this, arguments)
                              );
                            }),
                            (a = function (e, t) {
                              return l.apply(this, arguments);
                            }),
                            n.preventDefault(),
                            (e.next = 5),
                            a(c, s)
                          );
                        case 5:
                          (i = e.sent),
                            Object.keys(i).find(function (e) {
                              return "error" === e;
                            })
                              ? ((u = Object.values(i).join()), h(u))
                              : (r(i), o(""), f(""), t(!1));
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, ae.jsx)("div", {
            onClick: function () {
              return t(!1);
            },
            className: "modal-overlay",
            children: (0, ae.jsx)("div", {
              onClick: function (e) {
                return e.stopPropagation();
              },
              children: (0, ae.jsxs)("div", {
                className: "login-modal-container",
                children: [
                  (0, ae.jsx)("div", {
                    className: "modal-close-button",
                    onClick: function () {
                      return t(!1);
                    },
                    children: (0, ae.jsx)(De, {
                      className: "modal-close-sign",
                    }),
                  }),
                  (0, ae.jsx)("h3", {
                    className: "modal-info",
                    children: "Login",
                  }),
                  (0, ae.jsx)("p", { className: "modal-message", children: n }),
                  (0, ae.jsxs)(ae.Fragment, {
                    children: [
                      (0, ae.jsxs)("form", {
                        className: "auth-form",
                        onSubmit: m,
                        children: [
                          (0, ae.jsx)("input", {
                            id: "loginInput",
                            type: "text",
                            placeholder: "username",
                            required: !0,
                            onChange: function (e) {
                              h(""), o(e.currentTarget.value);
                            },
                          }),
                          (0, ae.jsx)("input", {
                            id: "passwordInput",
                            type: "password",
                            placeholder: "password",
                            required: !0,
                            onChange: function (e) {
                              h(""), f(e.currentTarget.value);
                            },
                          }),
                          (0, ae.jsx)("button", {
                            className: "auth-button",
                            type: "submit",
                            children: "Submit",
                          }),
                        ],
                      }),
                      (0, ae.jsx)("div", {
                        className: "auth-error",
                        children: p,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Rr = ["title", "titleId"];
      function Br() {
        return (
          (Br = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Br.apply(this, arguments)
        );
      }
      function Fr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Dr(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Fr(e, Rr);
        return i.createElement(
          "svg",
          Br(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 300 300",
              style: { enableBackground: "new 0 0 300 300" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          zr ||
            (zr = i.createElement("path", {
              d: "M150,280.6l-5.3-4.4C31.3,183.9,0.5,151.3,0.5,98.5c0-44,35.2-79.2,79.2-79.2c36.1,0,56.3,20.2,70.4,36.1 c14.1-15.8,34.3-36.1,70.4-36.1c44,0,79.2,35.2,79.2,79.2c0,52.8-30.8,85.3-144.3,177.7L150,280.6z M79.6,37 c-34.3,0-61.6,27.3-61.6,61.6c0,44.9,28.1,74.8,131.9,159.2c103.8-84.4,131.9-114.3,131.9-159.2c0-34.3-27.3-61.6-61.6-61.6 c-30.8,0-47.5,18.5-60.7,33.4L150,81.8l-9.7-11.4C127.1,55.4,110.4,37,79.6,37z",
            }))
        );
      }
      var Vr,
        Hr = i.forwardRef(Dr),
        Ar =
          (n.p,
          function (e) {
            var t = e.details,
              n = e.username,
              r = e.saveToken,
              l = a((0, i.useState)(!1), 2),
              c = l[0],
              o = l[1];
            return (0, ae.jsxs)(ae.Fragment, {
              children: [
                (0, ae.jsx)("button", {
                  className: "recipe-button",
                  onClick: function () {
                    if ("no" === n) return o(!0);
                    !(function (e) {
                      var t = e.details,
                        n = e.saveToken;
                      function r() {
                        return (r = re(
                          te().mark(function e(t, r) {
                            return te().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      "return",
                                      fetch("http://localhost:8080/add", {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                          user: t,
                                          newData: r,
                                        }),
                                      })
                                        .then(function (e) {
                                          return e.json();
                                        })
                                        .then(function (e) {
                                          return n(e);
                                        })
                                    );
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )).apply(this, arguments);
                      }
                      !(function (e, t) {
                        r.apply(this, arguments);
                      })(e.username, t);
                    })({ details: t, username: n, saveToken: r });
                  },
                  children: (0, ae.jsx)(Hr, {}),
                }),
                c &&
                  (0, ae.jsx)(Tr, {
                    setIsModalVisible: o,
                    message:
                      "Please login to add this recipe to your favourite.",
                  }),
              ],
            });
          }),
        Ur = function (e) {
          var t = e.details,
            n = e.username,
            r = e.saveToken;
          return (0, ae.jsx)("button", {
            className: "recipe-button unsave-button",
            onClick: function () {
              ue({ item: t, username: n, saveToken: r });
            },
            children: (0, ae.jsx)(Hr, {}),
          });
        },
        $r = ["title", "titleId"];
      function Wr() {
        return (
          (Wr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Wr.apply(this, arguments)
        );
      }
      function qr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Qr(e, t) {
        var n = e.title,
          r = e.titleId,
          a = qr(e, $r);
        return i.createElement(
          "svg",
          Wr(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 300 300",
              style: { enableBackground: "new 0 0 300 300" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Vr ||
            (Vr = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M262.5,0h-225C16.8,0,0,17.4,0,38.7v222.6C0,282.6,16.8,300,37.5,300h225c20.7,0,37.5-17.4,37.5-38.7V38.7 C300,17.4,283.2,0,262.5,0z M281.3,261.3c0,10.7-8.4,19.3-18.8,19.3h-225c-10.3,0-18.8-8.7-18.8-19.3V38.7 c0-10.7,8.4-19.3,18.8-19.3h225c10.3,0,18.8,8.7,18.8,19.3V261.3z M242.3,67.7H57.7c-6,0-10.8,4.3-10.8,9.7s4.9,9.7,10.8,9.7h184.5 c6,0,10.8-4.3,10.8-9.7C253.1,72.1,248.3,67.7,242.3,67.7z M242.3,116.1H57.7c-6,0-10.8,4.3-10.8,9.7c0,5.3,4.9,9.7,10.8,9.7h184.5 c6,0,10.8-4.3,10.8-9.7C253.1,120.5,248.3,116.1,242.3,116.1z M242.3,164.5H57.7c-6,0-10.8,4.3-10.8,9.7s4.9,9.7,10.8,9.7h184.5 c6,0,10.8-4.3,10.8-9.7C253.1,168.8,248.3,164.5,242.3,164.5z M175,212.9H56.5c-5.3,0-9.7,4.3-9.7,9.7v0c0,5.3,4.3,9.7,9.7,9.7H175 c5.3,0,9.7-4.3,9.7-9.7v0C184.7,217.2,180.4,212.9,175,212.9z",
              })
            ))
        );
      }
      var Xr,
        Zr = i.forwardRef(Qr),
        Kr = (n.p, ["title", "titleId"]);
      function Yr() {
        return (
          (Yr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Yr.apply(this, arguments)
        );
      }
      function Jr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Gr(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Jr(e, Kr);
        return i.createElement(
          "svg",
          Yr(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 300 300",
              style: { enableBackground: "new 0 0 300 300" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Xr ||
            (Xr = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M262.5,0h-225C16.8,0,0,17.4,0,38.7v222.6C0,282.6,16.8,300,37.5,300h225c20.7,0,37.5-17.4,37.5-38.7V38.7 C300,17.4,283.2,0,262.5,0z M281.3,261.3c0,10.7-8.4,19.3-18.8,19.3h-225c-10.3,0-18.8-8.7-18.8-19.3V38.7 c0-10.7,8.4-19.3,18.8-19.3h225c10.3,0,18.8,8.7,18.8,19.3V261.3z M243.8,67.7H84.4c-5.2,0-9.4,4.3-9.4,9.7s4.2,9.7,9.4,9.7h159.4 c5.2,0,9.4-4.3,9.4-9.7C253.1,72.1,248.9,67.7,243.8,67.7z M243.8,116.1H84.4c-5.2,0-9.4,4.3-9.4,9.7c0,5.3,4.2,9.7,9.4,9.7h159.4 c5.2,0,9.4-4.3,9.4-9.7C253.1,120.5,248.9,116.1,243.8,116.1z M243.8,164.5H84.4c-5.2,0-9.4,4.3-9.4,9.7s4.2,9.7,9.4,9.7h159.4 c5.2,0,9.4-4.3,9.4-9.7C253.1,168.8,248.9,164.5,243.8,164.5z M243.8,212.9H84.4c-5.2,0-9.4,4.3-9.4,9.7c0,5.3,4.2,9.7,9.4,9.7 h159.4c5.2,0,9.4-4.3,9.4-9.7C253.1,217.2,248.9,212.9,243.8,212.9z M46.9,87.1h18.8V67.7H46.9V87.1z M46.9,135.5h18.8v-19.3H46.9 V135.5z M46.9,183.9h18.8v-19.3H46.9V183.9z M46.9,232.3h18.8v-19.3H46.9V232.3z",
              })
            ))
        );
      }
      var ea,
        ta = i.forwardRef(Gr),
        na = (n.p, ["title", "titleId"]);
      function ra() {
        return (
          (ra = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ra.apply(this, arguments)
        );
      }
      function aa(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function la(e, t) {
        var n = e.title,
          r = e.titleId,
          a = aa(e, na);
        return i.createElement(
          "svg",
          ra(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 300 300",
              style: { enableBackground: "new 0 0 300 300" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          ea ||
            (ea = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M150,0C67.2,0,0,67.2,0,150c0,82.8,67.2,150,150,150s150-67.2,150-150C300,67.2,232.8,0,150,0z M159.4,280.8v-18.3h-18.8 v18.3c-64.9-4.6-116.8-56.5-121.4-121.4h18.3v-18.8H19.2C23.8,75.8,75.8,23.8,140.6,19.2v18.3h18.8V19.2 c64.9,4.6,116.8,56.5,121.4,121.4h-18.3v18.8h18.3C276.2,224.3,224.3,276.2,159.4,280.8z M219,110.2c1.3,2.2,0.5,5.1-1.7,6.4 l-49.5,28.6c0.4,1.6,1,3.1,1,4.9c0,10.4-8.4,18.7-18.8,18.7c-10.4,0-18.8-8.4-18.8-18.7l-50.9-29.4c-4.5-2.6-6-8.3-3.4-12.8 c2.6-4.5,8.3-6,12.8-3.4l51.2,29.6c2.7-1.5,5.7-2.7,9.1-2.7c5.2,0,9.9,2.2,13.4,5.6l49.2-28.5C214.8,107.1,217.7,107.9,219,110.2z",
              })
            ))
        );
      }
      var ia,
        ca = i.forwardRef(la),
        oa = (n.p, ["title", "titleId"]);
      function ua() {
        return (
          (ua = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ua.apply(this, arguments)
        );
      }
      function sa(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function fa(e, t) {
        var n = e.title,
          r = e.titleId,
          a = sa(e, oa);
        return i.createElement(
          "svg",
          ua(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 300 300",
              style: { enableBackground: "new 0 0 300 300" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          ia ||
            (ia = i.createElement("path", {
              d: "M60.5,89.4l40,38.1l-22.4,21.3L0,74.4L78.1,0l22.4,21.3l-40,38.1h113.2c69.7,0,126.3,53.9,126.3,120.3S243.4,300,173.7,300 H31.6v-30.1h142.1c52.3,0,94.7-40.4,94.7-90.2S226,89.5,173.7,89.5H60.5V89.4z",
            }))
        );
      }
      var da,
        pa = i.forwardRef(fa),
        ha =
          (n.p,
          function (e) {
            var t = e.activeTab,
              n = e.setActiveTab,
              r = e.details,
              a = R(),
              l = ce(),
              i = l.token,
              c = l.saveToken,
              o = r.id,
              u = r.readyInMinutes,
              s = i
                ? i.recipes.find(function (e) {
                    return e.id === o;
                  })
                : void 0;
            return (0, ae.jsxs)("div", {
              className: "recipe-navigation",
              children: [
                (0, ae.jsx)("button", {
                  className: "recipe-button ".concat(
                    "instructions" === t ? "active" : ""
                  ),
                  onClick: function () {
                    n("instructions");
                  },
                  children: (0, ae.jsx)(Zr, {}),
                }),
                (0, ae.jsx)("button", {
                  className: "recipe-button ".concat(
                    "ingredients" === t ? "active" : ""
                  ),
                  onClick: function () {
                    n("ingredients");
                  },
                  children: (0, ae.jsx)(ta, {}),
                }),
                (0, ae.jsxs)("button", {
                  className: "recipe-button",
                  children: [
                    (0, ae.jsx)(ca, { className: "svg-time" }),
                    (0, ae.jsxs)("div", {
                      className: "recipe-button-time",
                      children: [
                        (0, ae.jsx)("p", { children: u }),
                        (0, ae.jsx)("p", {
                          className: "recipe-button-min",
                          children: "min",
                        }),
                      ],
                    }),
                  ],
                }),
                void 0 === s
                  ? (0, ae.jsx)(Ar, {
                      details: r,
                      username: i ? i.user : "no",
                      saveToken: c,
                    })
                  : i &&
                    (0, ae.jsx)(Ur, {
                      details: r,
                      username: i.user,
                      saveToken: c,
                    }),
                (0, ae.jsx)("button", {
                  className: "recipe-button",
                  onClick: function () {
                    a(-1);
                  },
                  children: (0, ae.jsx)(pa, {}),
                }),
              ],
            });
          }),
        ma = function () {
          var e = F(),
            t = a((0, i.useState)("instructions"), 2),
            n = t[0],
            r = t[1],
            l = a((0, i.useState)(null), 2),
            c = l[0],
            o = l[1],
            u = a((0, i.useState)(0), 2),
            s = u[0],
            f = u[1];
          return (
            (0, i.useEffect)(
              function () {
                var t = (function () {
                  var t = re(
                    te().mark(function t() {
                      var n, r;
                      return te().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                "951fa37490bb4c928435c0d4c7950238",
                                (t.next = 3),
                                fetch(
                                  "https://api.spoonacular.com/recipes/"
                                    .concat(e.search, "/information?apiKey=")
                                    .concat("951fa37490bb4c928435c0d4c7950238")
                                )
                              );
                            case 3:
                              if (!((n = t.sent).status >= 400)) {
                                t.next = 6;
                                break;
                              }
                              return t.abrupt("return", f(n.status));
                            case 6:
                              return (t.next = 8), n.json();
                            case 8:
                              (r = t.sent), f(0), o(r);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
                t();
              },
              [e.search]
            ),
            (0, ae.jsxs)("section", {
              className: "recipe-section",
              children: [
                (401 === s || 402 === s) && (0, ae.jsx)(We, {}),
                s >= 400 && 401 !== s && 402 !== s && (0, ae.jsx)(Ue, {}),
                null === c && s < 300 && (0, ae.jsx)(Qe, {}),
                null !== c &&
                  (0, ae.jsxs)("div", {
                    className: "recipe-wrapper",
                    children: [
                      (0, ae.jsx)("h4", {
                        className: "recipe-title",
                        children: c.title,
                      }),
                      (0, ae.jsx)("h5", {
                        className: "recipe-subtitle",
                        children: c.diets.join(" | "),
                      }),
                      (0, ae.jsxs)("div", {
                        className: "recipe-rest",
                        children: [
                          (0, ae.jsx)("div", {
                            className: "recipe-img-container",
                            children: (0, ae.jsx)("img", {
                              className: "recipe-img",
                              src: c.image ? c.image : "/images/noImage.jpg",
                              alt: c.title,
                            }),
                          }),
                          "ingredients" === n &&
                            (0, ae.jsxs)("div", {
                              className: "recipe-detail",
                              children: [
                                (0, ae.jsx)("h6", {
                                  className: "recipe-detail-title",
                                  children: "Ingredients",
                                }),
                                (0, ae.jsx)("ul", {
                                  className: "recipe-ingredients",
                                  children: c.extendedIngredients.map(function (
                                    e
                                  ) {
                                    return (0, ae.jsx)(
                                      "li",
                                      {
                                        className: "recipe-ingredient",
                                        children: e.original,
                                      },
                                      e.id
                                    );
                                  }),
                                }),
                              ],
                            }),
                          "instructions" === n &&
                            (0, ae.jsxs)("div", {
                              className: "recipe-detail",
                              children: [
                                (0, ae.jsx)("h6", {
                                  className: "recipe-detail-title",
                                  children: "Instruction",
                                }),
                                (0, ae.jsx)("ul", {
                                  className: "recipe-steps",
                                  children:
                                    0 === c.analyzedInstructions.length
                                      ? (0, ae.jsx)("li", {
                                          dangerouslySetInnerHTML: {
                                            __html: c.summary,
                                          },
                                        })
                                      : c.analyzedInstructions.map(function (
                                          e,
                                          t
                                        ) {
                                          return (0, ae.jsxs)(
                                            "li",
                                            {
                                              children: [
                                                (0, ae.jsx)(
                                                  "div",
                                                  {
                                                    className:
                                                      "instructionName",
                                                    children: e.name,
                                                  },
                                                  "" === e.name
                                                    ? "myid"
                                                    : e.name
                                                ),
                                                e.steps.map(function (e) {
                                                  return (0,
                                                  ae.jsx)("div", { children: e.step }, e.step);
                                                }),
                                              ],
                                            },
                                            t
                                          );
                                        }),
                                }),
                              ],
                            }),
                          (0, ae.jsx)(ha, {
                            activeTab: n,
                            setActiveTab: r,
                            details: c,
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        va = ["title", "titleId"];
      function ga() {
        return (
          (ga = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ga.apply(this, arguments)
        );
      }
      function ya(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function ba(e, t) {
        var n = e.title,
          r = e.titleId,
          a = ya(e, va);
        return i.createElement(
          "svg",
          ga(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 600 555.3",
              style: { enableBackground: "new 0 0 600 555.3" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          da ||
            (da = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M433.4,391.9c4.6-0.6,8.7-1.2,12.8-1.7c-1.4-12.8-3.8-50.5-10.7-62.7c7.3,1.3,14,2.2,20.5,3.6c22,4.7,43.3,11.9,63.8,21.2 c9.6,4.3,14.3,11.6,15,22.1c1.9,28.9,0.3,57.6-7.8,85.5c-1.9,6.6-4.3,13-7,19.3c-3.6,8.4-10.3,13.5-19.3,13.4 c-16.4-0.3-32.8-1.6-49-2.4c1.4-6.7,4.1-12.9,3.8-19.1c-0.7-16-2.7-31.9-4.2-48.3c-5,0.6-9.2,1.2-13.8,1.7c1.1,8.7,2.3,17,3.1,25.4 c0.7,7.4,2,14.9,1.3,22.2c-1.6,16.5-13.4,29.4-29.6,32.8c-27.3,5.8-54.6,11.4-82,16.7c-20.8,4-39.1-7.5-45-27.9 c-8.1-28-16.2-56.1-24.1-84.2c-3.1-10.9-6.8-21.7-8.5-32.8c-2.7-17.8,7.3-34.5,23.7-41.8c26.4-11.6,54.1-18.6,82.8-21.4 c10.8-1,21.8-1.9,32.6-1c19.7,1.6,34.2,17.1,36.4,36.9C429.7,363.5,431.6,377.4,433.4,391.9z M337.9,346.5 c-26.3-1.8-54.4,21.5-54.5,45c4.1,0.5,8.3,1,12.6,1.5c5.5-22.3,20.2-32.7,41.9-33.7C337.9,354.7,337.9,350.7,337.9,346.5z",
              }),
              i.createElement("path", {
                d: "M359.8,222.4c-9.5,8.4-21.1,10.3-32.6,13.9c0.9,4.1,1.9,8.2,3,13.2c9.6-3.1,18.9-6.2,28.8-9.4c-1.4,11.9-2.7,23.7-4.3,35.5 c-1,7.4-2.7,14.6-3.9,22c-0.4,2.7-1.5,3.7-4.3,4.1c-24.8,3.4-48.7,9.9-71.9,19.4c-13.1,5.4-23.2,13.9-29.8,26.6 c-0.7,1.4-2.2,2.6-3.6,3.4c-31,16.5-57.6,38.5-80.8,64.6c-4.2,4.7-7.6,6.1-12.8,3.6c-4.9-2.3-10-4.3-14.4-7.4 c-19.5-13.8-32.3-33-42.2-54.3c-12.6-27.3-19.6-56.1-23.8-85.7c-1.5-10.5-2.5-21-3.6-31.4c9.8,3,19.1,6.2,28.6,8.5 c26.4,6.4,53.4,8.8,80.4,10.3c34,1.8,67.9,1.3,101.8-1.7c12.2-1.1,24.4-2.8,37.4-4.3c-0.8-4.8-1.4-9.1-2-12.6 c-21.5,1.8-42.4,4.1-63.4,5.2c-35.2,1.9-70.5,1.2-105.6-2.6c-19.5-2.1-38.9-4.8-57.8-10.7c-5-1.6-9.9-3.8-14.6-6 c-2-0.9-3.6-2.6-6.4-4.7c4-2.5,7-4.8,10.4-6.3c13.7-6.1,28.3-9,43.1-11.3c55.7-8.5,111.6-8.8,167.6-3.2c20.5,2,40.9,5.1,60.6,11.8 C349.2,215,355,217.1,359.8,222.4z",
              }),
              i.createElement("path", {
                d: "M288.8,523c-2.6,1.3-4.6,2.3-6.6,3.3c-11.8,5.9-23.5,11.8-35.4,17.6c-9.7,4.8-19.1,3.3-26.9-4.1 c-19.1-18.2-32.8-40-43.6-63.8c-4-8.8-7.4-18-10.8-27.1c-3.5-9.5-1.6-17.9,5.3-25.4c18.4-19.9,38.7-37.4,61.6-51.9 c1.9-1.2,3.9-2.3,5.2-3.1c7.4,41.3,22.1,80.6,32.5,121C273.4,502.2,278,514,288.8,523z",
              }),
              i.createElement("path", {
                d: "M329.4,0.8c-0.3,3-0.6,5.9-1,9c-1.3,0-2.4,0-3.5,0c-28.9-0.9-57.3,0.6-84.4,8.2c-14.7,4.2-23.9,11.8-26.8,22.8 c-2.1,8,1.9,14.9,8.8,21.2c7.5,6.8,17.2,11.7,27.7,15.9c10,4.1,20.5,7.6,30.2,12c9.2,4.2,17.8,9,26.4,13.8c3.4,1.9,6.1,4.5,8.5,7.1 c8.8,9.4,7.3,19.2-3.9,27.3c-9.5,6.8-21.5,10.5-34.3,12.9c-15.7,3-31.6,5.5-47.4,8.3c-2.6,0.5-5.2,1.1-7.8,1.7 c-16.8,4.3-24.2,10.8-26.2,23.3c-4.2,0-8.4,0-13.7,0c0.8-3.3,1.1-6.7,2.5-9.9c4.2-9.6,13.2-16.8,26.5-20.3 c12.2-3.3,25.1-5.4,37.7-7.9c11-2.2,22.2-3.9,33.1-6.2c8-1.7,15.2-4.7,20.8-9.2c5.8-4.6,6.8-9.2,1.8-14.2c-3.9-3.9-8.5-7.7-14-10.4 c-11.8-5.8-24.2-11-36.7-16c-12.1-4.8-24.1-9.7-34.2-16.4c-9.9-6.7-17.3-14.4-19.2-24.1c-3.2-16.5,10.6-32.9,33.2-39.8 C258.3,2.3,301.5-1.9,329.4,0.8z",
              }),
              i.createElement("path", {
                d: "M420.1,59.2c-0.6-3.6-1.4-7.7-2.3-12.7c6-0.1,11.7-0.7,17.3-0.3c18.7,1.1,36.5,5.7,52.1,16.5c10.3,7.1,17.8,16.2,18.5,29.4 c0.5,9.6-2.6,18.2-8.4,25.6c-6.1,7.8-13,14.9-19.6,22.2c-4.8,5.3-10,10.3-14.4,15.9c-11.2,14.3-11.8,28.2-1.3,43.1 c4.6,6.5,10.5,12,16,17.9c5.8,6.1,12.3,11.7,17.7,18.1c11.2,13.4,13.8,30.8-3.3,50.2c-3.3-2.7-6.6-5.3-10.1-8.2 c1.6-2.5,3.3-4.8,4.7-7.2c5.8-9.8,5.5-17.3-1.7-26.1c-4.1-5-8.9-9.3-13.4-13.9c-6.5-6.8-13.7-13.1-19.4-20.6 c-15.9-21-15.4-42.6,1.2-62.9c6.4-7.8,14-14.7,20.8-22.3c4.9-5.5,10-11.1,13.9-17.4c6.8-11,4.9-21-4.9-29.5 c-11-9.4-24.3-13.8-38.4-16C437.1,59.7,428.9,59.8,420.1,59.2z",
              }),
              i.createElement("path", {
                d: "M535.4,477c10.8-29.5,14.1-59.3,13.3-90.6c23.4,14.1,44.5,28.9,50.6,57.1c2.1,9.9-1.2,17-9.8,22.3 c-9.6,5.9-20.5,7.9-31.4,9.3C550.9,476,543.6,476.3,535.4,477z",
              }),
              i.createElement("path", {
                d: "M157.7,466.5c11.6,28.9,26.2,55,47.9,78.2c-10.3,3.1-19.6,6.6-29.3,8.6c-8,1.6-16.5,2.3-24.6,1.9 c-10.6-0.6-16.6-7-18.6-17.7c-2.6-14.2,0.2-27.6,5.9-40.6C143.8,486.1,150.2,476.3,157.7,466.5z",
              }),
              i.createElement("path", {
                d: "M370.9,197.5c-3.2-3.2-6.1-6.3-9.3-9.6c1.3-1.5,2.5-3,3.8-4.5c10.4-12.6,12.1-26.4,5.8-41.4c-4.7-11-12.2-20-20.6-28.3 c-7.6-7.6-15.6-14.8-22.7-22.8c-3.9-4.4-7.1-9.8-9-15.3c-2.8-8-0.3-15.6,6.5-20.8c13-9.9,27.5-10.5,43.4-6.2 c-1.9,4.4-3.6,8.3-5.1,11.8c-6.4,0-12.5-0.3-18.5,0.1c-3,0.2-6.1,1.6-8.8,3.1c-4.9,2.6-6.2,6.6-3.3,11.5c1.8,3.2,4.3,6.1,6.9,8.7 c9.3,9.6,19,18.7,28,28.5c10.5,11.5,18.3,24.6,20.2,40.4C390.1,170.6,383.2,184.9,370.9,197.5z",
              }),
              i.createElement("path", {
                d: "M85.4,376.8c-37.7-2.5-76.8-35.3-84.2-70.4c-5-23.6,6.3-46.9,26.8-55.1c7.2-2.9,14.6-4,22.7-3.2c0.4,3.9,0.8,7.7,1.3,11.7 c-4.3,0.3-8.5,0.1-12.5,0.9c-15.2,2.8-25.2,14.1-26.7,29.6c-1.3,13.2,2.8,24.9,10.1,35.6c12.3,18.3,29.7,29.5,50.6,35.5 c3.8,1.1,6.2,2.8,7.6,6.5C82.1,371,83.9,373.8,85.4,376.8z",
              })
            ))
        );
      }
      var xa,
        wa = i.forwardRef(ba),
        ja = (n.p, ["title", "titleId"]);
      function ka() {
        return (
          (ka = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ka.apply(this, arguments)
        );
      }
      function Sa(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Oa(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Sa(e, ja);
        return i.createElement(
          "svg",
          ka(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 600 555.3",
              style: { enableBackground: "new 0 0 600 555.3" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          xa ||
            (xa = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M359.5,282.2c0-8.3,0-16.2,0-24.1c0-7.2-1.8-9-9.1-9c-20.2,0-40.4,0-60.6,0c-7.4,0-9.2,1.8-9.2,9.4c0,7.8,0,15.6,0,23.6 c-1.5,0.1-2.7,0.2-3.9,0.2c-21.9,0-43.9,0.1-65.8,0c-1.7,0-3.8-0.6-5.1-1.6c-23.3-18.8-49.2-24.2-78-15.3c-0.6,0.2-1.2,0.4-2.3,0.6 c-0.5-7.8-0.9-15.2-1.4-23.8c5.7-0.7,11.4-2.4,16.9-2c19.2,1.3,38.2,1.2,56.7-5c22.4-7.5,33.8-24.1,32.9-47.9 c-0.4-11.1-2.9-21.8-7-32.2c-1.2-3.1-3.2-5-6.6-4.9c-18.7,0.3-36.7,3.4-53,13.1c-19.3,11.4-28.4,29.4-32.5,50.6 c-0.6,2.9-0.9,5.8-1.3,8.8c-0.8,6.2-0.8,6.2-7.3,7.3c-1-5.4-1-11.1-3.1-16.1c-4.8-11.4-3.9-23.1-4-34.9c0-15.3,0-45.1,0-60.5 c0-17.5,11-28.4,28.5-28.4c116.9,0,233.9-0.1,350.8-0.1c18.1,0,28.8,10.8,28.8,28.9c0,40.2,0,94.9,0,135.2 c0,17.2-11,28.2-28.3,28.2c-43.7,0-87.5,0-131.2,0.1C363.1,282.2,361.5,282.2,359.5,282.2z",
              }),
              i.createElement("path", {
                d: "M222.7,360.5c-1.9,30.3-10.2,61.2-29.8,88.4c-4.3,5.9-9.4,11.5-14.9,16.4c-18.5,16.3-39.3,19.9-62.2,10.4 c-3.1-1.3-5.7-1.3-8.8,0c-22.5,9.4-43.1,6-61.7-9.7c-11.7-9.9-20.3-22.2-27-35.8C5.3,403.8-1.2,376,0.2,346.7 c1-21,6.9-40.5,23.3-55C43.8,273.8,67.1,269.2,93,278c2.7,0.9,4.1,2.2,4.3,5.3c0.3,5.1,2,6.8,6.9,7.1c4.8,0.4,9.7,0.5,14.5,0.3 c5.2-0.2,7.5-2.5,7.2-7.6c-0.2-3.1,1.1-4.2,3.7-5.2c36.8-14.3,77.8,6.8,89.2,45.9C222,335,223,346.3,222.7,360.5z",
              }),
              i.createElement("path", {
                d: "M304.3,421c6.2-20.8,17.8-37,36.1-48.2c16-9.8,33.8-13.8,52.4-14c24.6-0.3,49.3-0.1,73.9-0.1c1.6,0,3.2,0,4.9,0 c0-4.3,0-8.2,0-12.7c-1.4,0-2.9,0-4.3,0c-23.8,0-47.6-0.2-71.5,0.1c-25.6,0.3-49.7,5.8-70.4,21.8c-16.4,12.7-27.2,29.2-33,49.1 c-0.8,2.9-1.7,4.5-5.1,4.7c-6.3,0.4-11.4,3.7-15.6,8.4c-0.9,1-2.3,2.1-3.5,2.1c-16.7,0.1-33.4,0.1-50.7,0.1c0.7-1.7,1.2-3,1.7-4.3 c10.1-23.4,15.7-47.7,15.9-73.2c0.2-21.1-3.9-41.2-16.2-59.5c20.7,0,40.9,0,61.5,0c0,7.7,0,15.3,0,22.9c0,8.3,1.6,9.9,9.9,9.9 c20.1,0,40.1,0,60.2,0c6.7,0,8.7-2,8.7-8.6c0-8,0-16.1,0-24.6c2,0,3.6,0,5.1,0c43.2,0,86.4-0.1,129.6,0c10.6,0,20.2-2.4,28.5-9.2 c0.3-0.2,0.7-0.3,1.3-0.5c0,21,0,41.8,0,62.6c-8.5-0.7-16.9-1.4-25.6-2.1c0,4.5,0,8.5,0,12.7c5.5,0.4,11.1,0.6,16.7,1.3 c34.9,4.3,60.9,20.8,74.2,54.5c0.7,1.7,1.2,3.6,1.8,5.4c0.1,0.4,0,0.8,0,1.5C495.7,420.9,400.3,420.9,304.3,421z",
              }),
              i.createElement("path", {
                d: "M450.7,433.8c52.5,0,87.9,0,140.4-0.1c1.2,0,2.4-0.1,3.6,0c4.7,0.5,6.7,4.4,4.1,8.4c-1.2,1.8-2.7,3.5-4.4,4.6 c-15.2,10.1-14.8,14.9-33,11.9c-4.2-0.7-8.3-2.3-12.1-4.2c-15.7-7.9-31.3-8.1-47.5-1.4c-24.1,10-48.6,8.2-73.2,1.5 c-12.4-3.4-25-6.5-37.7-8.7c-16-2.8-31.7-0.2-46.4,6.6c-16.2,7.6-33.2,9.5-50.8,7.9c-9.6-0.9-13.8-4.6-14.9-12.9 c-1-7.7,4.2-13.8,12.1-13.8c20.3-0.1,40.6,0,61,0C384.8,433.9,417.8,433.9,450.7,433.8z",
              }),
              i.createElement("path", {
                d: "M417.5,485.1c12.3,9.1,21.3,8.8,36.2-1.2c5.3,6.3,12.1,9.6,20.3,9.4c8-0.2,15.4-2.5,21.5-8.3c12.4,7,25.8,8.8,39.7,7.8 c10.9-0.8,21.2-3.6,30.2-10.1c1.9-1.4,4.3-2.9,5.3-4.9c3-6.3,8.4-6.4,14.6-6.6c-0.7,1.4-1.3,2.7-2,3.9c-13.9,23.9-35.3,52-62,56.4 c-7.5,1.2-15.2,1.8-22.9,1.8c-33.6,0.2-67.3,0.1-100.9,0.1c-21.1,0-41.2-3.8-59.3-15.3c-11.2-7.2-22-34.4-26.4-44.4 c3.9-0.5,7.7-0.9,11.5-1.6c3.8-0.6,7.6-1.5,11.4-2.3c10.7,18.9,26.6,22.9,44.7,10.9c4.5,5.6,10.5,8.9,17.8,9.5 C404.5,490.8,411.2,489,417.5,485.1z",
              }),
              i.createElement("path", {
                d: "M143,228.2c-1.6-27.7,15.6-52.5,41.6-60.4c8.4-2.6,17.4-3.3,26.1-4.7c0.9-0.1,2.7,0.9,3,1.7c3.8,11.8,6,23.7,2.9,36.1 c-2.5,10-8.9,16.7-18.3,20.6c-12.8,5.4-26.2,6.7-39.9,6.7C153.4,228.2,148.3,228.2,143,228.2z",
              }),
              i.createElement("path", {
                d: "M293.5,262c17.7,0,35.2,0,53.1,0c0,17.7,0,35.3,0,53.1c-17.7,0-35.2,0-53.1,0C293.5,297.5,293.5,279.9,293.5,262z",
              }),
              i.createElement("path", {
                d: "M398.2,77.1c-4.5,0-8.3,0-12.7,0c0-5,0-9.8,0-14.6c0-16.7-11.1-27.9-27.8-28c-25.2-0.1-50.3-0.1-75.5,0 c-16.4,0.1-27.6,11.5-27.7,27.8c0,4.8,0,9.6,0,14.7c-4.3,0-8.2,0-12.4,0c-1-16.1-1.4-31.8,11.5-44.1c7.3-7,16-11,26.1-11 c26.8-0.1,53.6-0.3,80.3,0c21.4,0.3,38,17.6,38.1,39C398.2,66.2,398.1,71.5,398.2,77.1z",
              }),
              i.createElement("path", {
                d: "M448.8,472.3c-3.9,2.2-6.9,4.4-10.3,5.8c-6.4,2.5-10.2,0.9-13.8-5.1c-2.8-4.7-7.3-5.3-10.9-1.2c-3.8,4.3-8.6,5.8-14.1,5.8 c-5.6,0.1-9.5-2.5-11.8-7.6c-3.2-6.9-6.9-7.5-12.5-2.2c-5.3,5-11.3,8.4-18.9,6.4c-4.5-1.2-8.1-3.6-9.1-9c7.4-3.9,15.3-6.2,23.6-7.2 c14.9-1.8,29.1,1.9,43.3,5.5c10.7,2.8,21.4,5.1,32.2,7.6C446.9,471.4,447.3,471.7,448.8,472.3z",
              }),
              i.createElement("path", {
                d: "M495.9,468.5c11.3-3.3,21.8-9.8,34.2-7.2c3.3,0.7,6.5,1.7,9.6,2.9c6.3,2.4,12.6,5,18.8,7.5 C546,484.4,506.2,483.3,495.9,468.5z",
              }),
              i.createElement("path", {
                d: "M107.2,214c4.7,21.1,5.4,42.4,6.1,63.7c-3,1.2-4,0.3-4.3-2.6c-1.7-18.3-5.1-36.4-10.7-54c-0.7-2.1-0.4-3.3,1.5-4.2 c1.5-0.7,2.9-1.5,4.3-2.1C105,214.5,105.9,214.4,107.2,214z",
              }),
              i.createElement("path", {
                d: "M486,476.4c-8.8,7.1-19.9,5.4-23.6-3.2c6.3-0.5,12.7-1.4,19-1.4C482.9,471.8,484.4,474.8,486,476.4z",
              })
            ))
        );
      }
      var Ea,
        Ca = i.forwardRef(Oa),
        Na = (n.p, ["title", "titleId"]);
      function Pa() {
        return (
          (Pa = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Pa.apply(this, arguments)
        );
      }
      function za(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ma(e, t) {
        var n = e.title,
          r = e.titleId,
          a = za(e, Na);
        return i.createElement(
          "svg",
          Pa(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 600 555.3",
              style: { enableBackground: "new 0 0 600 555.3" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Ea ||
            (Ea = i.createElement(
              "g",
              null,
              i.createElement(
                "g",
                null,
                i.createElement("path", {
                  d: "M330,415.6c-4.8-18.5-14.9-26.4-36.7-29.5c-37.3-5.2-70,6.4-100.3,27c-2.5,1.7-4.9,3.5-7.4,5.2c-0.1,0.1-0.3,0-0.8-0.1 c-15.8-32.8-41.9-52.6-78.8-59c33-49,77.5-81.1,133.5-96.9c62.7-17.6,123.4-11.4,182.9,17.6c-17.2,5.8-32.1,13.3-44.4,26 c3.7,3.2,7.2,6.3,11,9.6c12.4-11.6,27-18.8,43.2-22.8c19.7-5,39.5-4.2,59.5-1.4c33.9,4.7,37.1,12.9,67.7-2.8 c-0.5-1.8-0.9-3.4-1.4-5.4c1-0.5,2.1-1,3.2-1.5c1-0.4,2-0.8,3.2-1.3c0-1.5-0.1-2.9,0-4.3c0.4-4.1,2.6-7.4,6.4-7.9 c3.1-0.4,7,0.5,9.6,2.2c3.2,2.1,3.9,6,2.5,9.8c-0.3,0.7-0.6,1.5-1,2.2c-2.9,5.9-1.6,9.3,4.5,12c4.5,1.9,7.1,5.7,6.6,9.9 c-0.5,4.3-2.9,7.4-7.2,8.5c-5.2,1.4-8.8-1.2-11.7-5.7c-2.1,0.6-4.2,1.3-6.5,2c-0.7-1.3-1.4-2.7-2.4-4.6 c-27.4,11.6-21.9,12.4-31.1,43c-4.2,13.8-8.4,27.6-14,40.8c-11.3,26.3-31.9,39.8-60.6,40.5c-1.1,0-2.2,0.2-3.9,0.3 c0,2.4,0,4.7,0,7c0,2.2,0,4.4,0,7.3c33.7,0.3,59-13.1,75-42.9c8.4,15,15.5,57.8,13.1,78.9c-49.4,0-98.9,0-148,0 c2.4-5.5,5.8-10.8,7.2-16.6c4.3-17.4-5.2-35.7-22-43.5c-12.5-5.8-25.7-6.3-39.1-5.2C337.8,414.5,334,415.1,330,415.6z",
                }),
                i.createElement("path", {
                  d: "M230.9,478.8c1-0.8,1.9-1.6,2.9-2.3c4.9-4,9.3-9.6,14.9-11.6c5.2-1.8,11.8,0.2,18.2,0.5c0.8-4,1.6-8.5,2.6-13.2 c-1.2-0.6-2.2-1.1-3.6-1.8c4.2-3.5,8.2-6.7,12.6-10.3c-3.1-3.9-6-7.5-9.2-11.5c-3.4,2.7-6.5,5.3-9.7,7.8 c-16.7,13.6-33.4,27.2-50.2,40.7c-1.9,1.5-4.8,2.5-7.2,2.6c-16.3,0.2-32.6,0.1-49.5,0.1c0.5-1.4,0.8-2.4,1.3-3.2 c23.3-38.5,56.1-64.4,100.3-74.8c14.6-3.4,29.3-3.2,43.8,0.4c3.5,0.9,6.9,2.3,10.1,4c5.9,3.2,7.4,7.5,5.6,14 c-2.8,10.3,0.8,13.9,11.3,11.5c13.5-3.1,27.2-4.7,41-1.9c13.7,2.8,22.1,11.8,22.7,23.9c0.6,12.9-11.9,26-24.7,26 c-42.5,0-85,0-127.4,0c-1.9,0-3.7,0-5.6,0C231,479.5,231,479.2,230.9,478.8z",
                }),
                i.createElement("path", {
                  d: "M72.9,479.9c-19.3,0-38.7-0.1-58,0.1c-3.9,0-5.4-1-6.2-5c-8.3-42.6,17.5-85.3,59.4-98c41.9-12.6,87.2,8.8,103.6,48.9 c1,2.4,0.9,3.9-1.1,5.8c-13.7,13.2-25.1,28.2-33.5,45.3c-1.3,2.7-3.2,2.9-5.7,2.9C111.9,479.8,92.4,479.9,72.9,479.9z M99.9,458.8 c0-22.4,0-44.3,0-66.4c-5,0-9.6,0-14.3,0c0,22.3,0,44.2,0,66.4C90.4,458.8,94.9,458.8,99.9,458.8z M40.3,427.6 c-2.1,4.7-4,8.9-6.1,13.5c10.7,4.9,21,9.5,31.8,14.4c2.1-4.6,4-8.9,6.1-13.5C61.3,437.1,51.1,432.5,40.3,427.6z M119.6,455.5 c10.7-4.9,21.1-9.6,31.8-14.4c-2.2-4.7-4.1-9-6.2-13.4c-10.9,4.9-21.2,9.6-31.7,14.4C115.6,446.8,117.5,451,119.6,455.5z",
                })
              ),
              i.createElement(
                "g",
                null,
                i.createElement("path", {
                  d: "M317.6,494.7c111.5,0,161.5,0,272.9,0c7.4,0,9.5,2.1,9.4,9.2c-0.1,6.1-2.2,8.2-8.3,8.3c-2.1,0-4.1,0-6.2,0 c-220.9,0-354.2,0-575.1,0c-7.8,0-10.1-1.7-10.4-7.3c-0.4-8,1.8-10.3,9.8-10.3C121.1,494.7,206.3,494.7,317.6,494.7z",
                }),
                i.createElement("path", {
                  d: "M50,527.3c165.9,0,332.4,0,500,0c-6.2,5.9-11.6,22-17.3,27c-1.1,1-3.3,0.9-5,0.9c-24.1,0-48.2,0-72.3,0 c-127.9,0-255.9,0-383.8,0.1c-3.8,0-6.7-0.8-9.2-3.7C58.4,546.9,54,531.7,50,527.3z",
                })
              ),
              i.createElement(
                "g",
                null,
                i.createElement("path", {
                  d: "M314.8,208.3c-2.9,3.5-5.9,7.2-8.8,10.8c-20.2-14.6-35.9-44.2-11.8-73.2c4.7-5.6,9.8-10.8,14.4-16.4 c9.6-11.8,8.9-20.4-2.5-30.5c-6.2-5.4-13-10.1-19.4-15.4c-9-7.4-15.4-16.3-16.7-28.3c-1-9.1,1.2-17.6,5.2-25.7 c5-10.2,15.2-22.1,25.3-29.5c3,3.7,6.1,7.4,9,10.8c-4.2,4.4-8.3,8.3-12,12.6c-5.5,6.2-10,13.1-11.9,21.4 c-1.9,8.2-0.5,15.6,5.4,21.6c4.5,4.6,9.8,8.5,14.7,12.7c5.2,4.4,10.8,8.5,15.3,13.5c11.7,13,12.4,27.9,2.3,42.1 c-3.5,4.9-7.7,9.3-11.6,13.8c-2.7,3.1-5.6,6.1-8,9.4c-8.8,12.2-8.9,24.8-0.2,37C306.7,199.7,310.7,203.6,314.8,208.3z",
                }),
                i.createElement("path", {
                  d: "M215.1,0c3.3,4,6.3,7.6,9.2,11.2c-4.4,4.6-9.1,8.5-12.6,13.3c-4.1,5.7-8.1,11.8-10.6,18.3c-3.6,9.3-1.5,18.3,5.9,25.3 c5,4.8,10.9,8.7,16.1,13.3c5.4,4.8,11.2,9.5,15.5,15.2c8.3,11.1,8.8,23.3,1.4,35.1c-3.8,6-8.8,11.2-13.2,16.7 c-3.3,4.1-7,7.8-9.8,12.2c-6.6,10-7,20.7-0.8,30.9c3.6,5.9,8.4,11,13.2,17c-2.5,3.1-5.5,6.9-8.5,10.6 c-23.3-17.4-34.4-47.7-10.6-74.8c4.8-5.5,9.9-10.7,14.4-16.5c7.9-10.1,7.3-18.3-2-27.3c-3.9-3.9-8.5-7.1-12.8-10.6 c-3.7-3-7.6-5.7-11.1-8.9c-15.2-14.1-18.3-32.5-8.7-51.5C195.9,18,204.7,8.7,215.1,0z",
                }),
                i.createElement("path", {
                  d: "M400.3,207.9c-3.2,3.9-6.1,7.6-9.1,11.2c-22.2-16.2-34.3-45.9-12.2-72.8c4.8-5.9,10.3-11.2,15-17.2 c9.1-11.2,8.5-19.6-2-29.5c-3.9-3.7-8.4-6.8-12.6-10.1c-3.5-2.8-7.1-5.4-10.3-8.4C354.3,67.6,351,50,359.6,31.4 c5.8-12.5,15-22.2,26-31.4c3.2,3.8,6.2,7.6,9.2,11.3c-4.4,4.6-9.3,8.6-12.9,13.5c-4.3,6-8.2,12.5-10.7,19.3 c-3.1,8.4-1.1,16.8,5.5,23.2c4.4,4.3,9.5,7.9,14.1,12c5.8,5.1,12.2,9.8,17.1,15.7c9.6,11.5,10.1,24.8,2.2,37.5 c-2.6,4.1-5.8,7.9-8.9,11.7c-2.1,2.6-4.5,4.9-6.7,7.4c-16.6,18.2-16,35.2,1.7,52.3C397.3,205.1,398.6,206.3,400.3,207.9z",
                })
              )
            ))
        );
      }
      var _a,
        Ia = i.forwardRef(Ma),
        La = (n.p, ["title", "titleId"]);
      function Ta() {
        return (
          (Ta = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ta.apply(this, arguments)
        );
      }
      function Ra(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ba(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Ra(e, La);
        return i.createElement(
          "svg",
          Ta(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 600 555.3",
              style: { enableBackground: "new 0 0 600 555.3" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          _a ||
            (_a = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M391,290.6c-61,38-121.2,38-182.1,0c-1,0.8-2.3,2-3.6,3.1c-30.3,25.3-64.8,32.5-102.3,19c-36.9-13.3-58.4-40.2-64.2-77.9 c-8.1-53.2,33.2-103.5,88.5-108.5c1.6-0.1,3.7,0.2,4.8,1.2c8.3,7,17.5,12.2,28.2,14.9c0.4,0.1,0.7,0.4,1.3,0.8 c-3.2,2.4-6.3,4.7-9.8,7.2c3.1,3.6,5.9,6.8,8.9,10.3c12.8-10.4,27.5-15.7,43.2-19.8c20.3-5.3,37.4-16.2,49.8-32.7 c6.6-8.7,14.7-9.5,24.2-8c2,0.3,4,1,6.3,1.6c1.7-3.9,3.3-7.7,5.1-11.9c-7.2-3.4-14.7-4.2-23.1-3.8c6.5-20.8,0.7-38.6-14.6-55.4 c11.4-2.1,21.7-4.6,32.2-5.7c73.8-7.6,138.2,36.4,160,98.3c1.4,3.9,3.8,3.1,6.6,2.8c40.7-3.5,73.1,11,95.4,43.9 c40.5,59.6,0.5,140.6-72.9,148.3c-29.1,3.1-54.7-5-77-23.3C394.4,293.5,392.6,292,391,290.6z M402.3,91.7 c-20.3-27.9-77-53.9-102.1-47c0,4.1,0,8.2,0,12.6c37.2,0.9,67.7,15.1,91.6,42.6C395.4,97.1,398.8,94.5,402.3,91.7z M237.6,246.8 c0.5,8.7,3.5,13.6,9.8,16.3c6.5,2.8,12.6,1.7,17.7-3c5.7-5.2,11.2-10.7,16.7-16.1c6.5-6.5,6.5-15.8,0.2-22 c-6.3-6.2-16.1-6.3-22.7-0.1c-5.7,5.3-11.4,10.5-16.5,16.2C240,241,238.6,244.9,237.6,246.8z M373.1,264.4 c-0.9-1.9-1.8-5.9-4.2-8.6c-5.6-6.2-11.8-12.1-18.1-17.7c-6.1-5.4-15.5-5.1-21.4,0.3c-6.2,5.6-7.2,14.8-1.6,21 c6,6.5,12.5,12.7,19.1,18.5c4.8,4.2,10.8,4.6,16.7,2C369.5,277.4,372.5,272.6,373.1,264.4z M458.7,228.1c1.9-0.9,5.9-1.9,8.7-4.2 c6.3-5.4,12.2-11.3,18-17.3c5.7-6,5.3-15.3-0.5-21.1c-5.9-5.8-15.4-6.6-21.7-1.1c-6.5,5.7-12.6,11.7-18.5,17.9 c-4.5,4.7-5.2,10.5-2.4,16.4C445,224.7,450,227.7,458.7,228.1z M333.6,154.7c0-3.9,0.1-7.7,0-11.6c-0.4-8.8-7.1-15.2-15.9-15.3 c-8.8-0.1-15.9,6.2-16.2,14.9c-0.3,7.9-0.3,15.8,0,23.6c0.3,9,7.5,15.3,16.5,15.1c8.7-0.2,15.4-6.8,15.7-15.6 C333.7,162.2,333.6,158.5,333.6,154.7z M169,228.8c4.1,0,8.3,0.1,12.4,0c8.9-0.2,15.7-7,15.7-15.5c0-8.5-6.7-15.4-15.6-15.5 c-8.1-0.2-16.3-0.2-24.4,0c-8.8,0.2-15.5,7.2-15.5,15.7c0.1,8.3,6.7,15,15.4,15.3C161,228.9,165,228.8,169,228.8z M88.1,152.5 c-25.6,16-39.6,47.9-37.3,69.4c4.2,0,8.5,0,13.1,0c0.8-24.6,11.6-44.1,31.9-58.7C93.1,159.5,90.6,156.1,88.1,152.5z M504.1,163.2 c10,7,17.7,15.3,23.3,25.5c5.7,10.3,8.3,21.3,8.6,33.1c4.7,0,9,0,13.3,0c2.7-23.2-16.4-58.2-37.6-69.2 C509.3,156,506.9,159.4,504.1,163.2z M466.1,282.1c-20.4-3.4-35-13.6-42-32.7c-4.5,1-8.6,1.9-12.8,2.8c2.6,19.9,32.6,44,52.9,42.4 C464.7,290.6,465.4,286.5,466.1,282.1z M130.1,277.1c4.7,9.6,18.9,14.1,31.3,10c-0.7-4.1-1.5-8.2-2-11c-6-1.2-11.1-2.3-16.2-3.3 c-0.6-0.1-1.4,0.1-2.1,0.3C137.5,274.3,133.9,275.7,130.1,277.1z",
              }),
              i.createElement("path", {
                d: "M321.5,555.3c-2,0-3.4,0-4.9,0c-12.6,0-25.1,0-38.2,0c-2.5-76.7-9.2-152.6-22.5-228.7c29.5,7.6,58.4,7.7,88.1,0 C330.8,402.4,324,478.5,321.5,555.3z",
              }),
              i.createElement("path", {
                d: "M264.6,555c-10.1,0-19.5,0-29.3,0c-6.5-79.4-24.3-156-56.7-229.5c5.6-2.7,11.2-5.2,16.4-8.2c5.3-3,10.4-6.6,15.1-9.7 c9.7,4.5,19.3,8.9,28.8,13.5c1.2,0.6,2.2,2.2,2.4,3.5c3.6,22.8,8,45.5,10.4,68.4c4.4,42.3,7.7,84.7,11.3,127.1 C264,531.6,264.1,543.1,264.6,555z",
              }),
              i.createElement("path", {
                d: "M421.1,326.1c-32.1,73-50,149.6-56.4,229c-9.8,0-19.2,0-28.9,0c0-4.3-0.1-8.4,0-12.5c1.8-45.5,4.9-91,10.6-136.3 c3.4-27.1,8-54.1,12.1-81.2c0.2-1.4,1.3-3.3,2.5-3.9c9.5-4.6,19.1-9,28.2-13.2C399.6,313.9,410.2,319.9,421.1,326.1z",
              }),
              i.createElement("path", {
                d: "M434.8,329.1c19,4.5,37.5,4.2,56.6-0.5c-1,1.7-1.6,2.8-2.3,3.8c-42.1,62.9-69.4,131.3-81.3,205.4 c-0.8,4.8-1.2,9.7-2.1,14.5c-0.2,1.1-1.7,2.9-2.6,2.9c-7.8,0.2-15.7,0.1-24.4,0.1C384.9,476.8,402.7,401.6,434.8,329.1z",
              }),
              i.createElement("path", {
                d: "M108.4,328.5c19.4,4.9,37.9,5.1,56.7,0.6c32,72.2,49.8,147.4,56.2,226.1c-6.6,0-12.8,0-18.9,0c-7.7,0-7.8,0-8.9-7.5 c-10.8-78.4-39.1-150.4-83.6-216.7C109.6,330.5,109.3,329.9,108.4,328.5z",
              }),
              i.createElement("path", {
                d: "M254.9,66.6c-1.7-18.9-19.3-37.7-38.6-41.3c-5.3-1-11.8-1.1-16.5,1c-5.2,2.3-10.4,3.9-15.7,4.9 c-6.1-6.9-15.2-13.1-28.2-18.7C142.1,6.6,125.2,2.4,104.8,0c-1.2,1.4-2.3,2.6-3.3,3.9c39,5.2,60.1,15.6,72.1,28.8 c-3,0.3-6,0.5-9.1,0.7c-11.9,0.8-21.5,5.9-28.8,15c-7.5,9.3-10.9,19.9-11.1,31.5c-0.2,23.7,16.8,44.4,40.9,49.8 c33.1,7.4,75.7-14.9,86.9-46C254.3,78.4,255.4,72.2,254.9,66.6z M158,75.5c-4.4,1.3-8.3,2.5-12.2,3.7c-5.2-8,0.1-22.5,10.8-28.8 c2.3,3.4,4.7,6.8,7.3,10.6C159.8,64.7,156.6,69,158,75.5z",
              }),
              i.createElement("path", {
                d: "M253,251.6c-0.3-1.6-1.2-3.4-0.7-3.9c5.4-5.5,10.9-10.8,16.5-16.1c0.5-0.5,2.2-0.2,3.1,0.3c0.4,0.2,0.4,2.1-0.1,2.6 c-5.3,5.3-10.8,10.5-16.2,15.8C255.2,250.6,254.6,250.8,253,251.6z",
              }),
              i.createElement("path", {
                d: "M340.3,247.6c1,0.6,1.9,1.1,2.6,1.7c4.8,4.6,9.7,9.2,14.4,14c0.8,0.9,0.7,2.6,1,4c-1.4-0.3-3.2-0.3-4.1-1.1 c-4.9-4.5-9.7-9.2-14.4-13.9c-0.8-0.8-1-2.2-1.1-3.3C338.6,248.6,339.6,248.1,340.3,247.6z",
              }),
              i.createElement("path", {
                d: "M475.7,196.5c-0.6,0.9-1,1.8-1.7,2.5c-4.8,4.7-9.5,9.4-14.5,13.9c-0.9,0.8-2.8,0.7-4.2,1c0.3-1.3,0.2-3.1,1.1-3.9 c4.7-4.8,9.5-9.4,14.4-14c0.8-0.7,2.2-1,3.4-1.2C474.7,194.7,475.2,195.7,475.7,196.5z",
              }),
              i.createElement("path", {
                d: "M319.6,154.6c0,3.6,0.1,7.2-0.1,10.7c-0.1,1-1.3,1.8-2.1,2.7c-0.8-0.9-2.2-1.8-2.2-2.7c-0.2-7.2-0.2-14.3,0-21.5 c0-0.9,1.4-1.8,2.1-2.8c0.7,1,2,2,2.1,3.1C319.8,147.7,319.6,151.1,319.6,154.6z",
              }),
              i.createElement("path", {
                d: "M169.5,211.2c3.5,0,7.1-0.2,10.6,0.1c1.1,0.1,2.1,1.4,3.1,2.2c-1,0.7-2,2-3,2c-7.2,0.2-14.5,0.2-21.7,0c-1,0-2-1.5-3-2.2 c1.1-0.7,2.2-1.8,3.3-1.9C162.4,211,166,211.2,169.5,211.2C169.5,211.2,169.5,211.2,169.5,211.2z",
              })
            ))
        );
      }
      var Fa,
        Da = i.forwardRef(Ba),
        Va =
          (n.p,
          function () {
            var e = (0, i.useContext)(er),
              t = e.meals,
              n = e.zeroTotalResults,
              r = e.status;
            return (0, ae.jsxs)("section", {
              className: "section-meals nav-padding",
              children: [
                (0, ae.jsx)(cr, {
                  Button1: (0, ae.jsx)(wa, {}),
                  Button2: (0, ae.jsx)(Ca, {}),
                  Button3: (0, ae.jsx)(Ia, {}),
                  Button4: (0, ae.jsx)(Da, {}),
                  title1: "Breakfast",
                  title2: "Lunch",
                  title3: "Dinner",
                  title4: "Dessert",
                  to1: "/meals/breakfast",
                  to2: "/meals/lunch",
                  to3: "/meals/dinner",
                  to4: "/meals/dessert",
                }),
                (401 === r || 402 === r) && (0, ae.jsx)(We, {}),
                r >= 400 && 401 !== r && 402 !== r && (0, ae.jsx)(Ue, {}),
                n && (0, ae.jsx)(Ir, {}),
                !n && 0 === t.length && r < 300 && (0, ae.jsx)(Qe, {}),
                !n &&
                  0 !== t.length &&
                  r < 300 &&
                  (0, ae.jsx)(nr, { meals: t }),
              ],
            });
          }),
        Ha = ["title", "titleId"];
      function Aa() {
        return (
          (Aa = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Aa.apply(this, arguments)
        );
      }
      function Ua(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function $a(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Ua(e, Ha);
        return i.createElement(
          "svg",
          Aa(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Fa ||
            (Fa = i.createElement("path", {
              d: "M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z",
            }))
        );
      }
      var Wa = i.forwardRef($a),
        qa =
          (n.p,
          function (e) {
            var t = e.token,
              n = e.saveToken,
              r = a((0, i.useState)(!1), 2),
              l = r[0],
              c = r[1],
              o = a((0, i.useState)(""), 2),
              u = o[0],
              s = o[1],
              f = t,
              d = f.profileImg,
              p = f.user;
            console.log(d);
            var h = (function () {
              var e = re(
                te().mark(function e(t) {
                  var r, a, l, i;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((r = t.target.files[0])) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (!(r.size >= 102400)) {
                            e.next = 7;
                            break;
                          }
                          return (
                            s("Image size can be maximum 100kb."),
                            setTimeout(function () {
                              return s("");
                            }, 2e3),
                            e.abrupt("return")
                          );
                        case 7:
                          return (
                            (a = new FormData()).append("file", r),
                            a.append("user", p),
                            a.append("profile_img", d),
                            (e.next = 13),
                            fetch(
                              "http://localhost:8080/changeprofilepicture",
                              {
                                method: "POST",
                                body: a,
                              }
                            )
                          );
                        case 13:
                          return (l = e.sent), (e.next = 16), l.json();
                        case 16:
                          if ("LIMIT_FILE_SIZE" !== (i = e.sent).res.code) {
                            e.next = 20;
                            break;
                          }
                          return (
                            s("Image must be max 100kb"),
                            e.abrupt(
                              "return",
                              setTimeout(function () {
                                return s("");
                              }, 4e3)
                            )
                          );
                        case 20:
                          if (!i.res.storageErrors) {
                            e.next = 23;
                            break;
                          }
                          return (
                            s(i.message),
                            e.abrupt(
                              "return",
                              setTimeout(function () {
                                return s("");
                              }, 4e3)
                            )
                          );
                        case 23:
                          n(i);
                        case 24:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return (0, ae.jsxs)(ae.Fragment, {
              children: [
                (0, ae.jsxs)("div", {
                  className: "profile-picture",
                  style: {
                    backgroundImage: "url(".concat(
                      "" === d
                        ? "https://firebasestorage.googleapis.com/v0/b/foocoding-react-project.appspot.com/o/ProfileImages%2Fno-image-profile.webp?alt=media&token=3a7b435a-117f-4d36-9166-4d9fe242926c"
                        : d,
                      ")"
                    ),
                  },
                  onMouseOver: function () {
                    c(!0);
                  },
                  onMouseOut: function () {
                    c(!1);
                  },
                  children: [
                    (0, ae.jsx)("input", {
                      type: "file",
                      accept: "image/jpeg, image/png, image/webp",
                      className: "profile-input",
                      onChange: h,
                    }),
                    l &&
                      (0, ae.jsxs)("div", {
                        className: "profile-picture-mask",
                        children: [
                          (0, ae.jsx)(Wa, {
                            className: "profile-picture-edit",
                          }),
                          (0, ae.jsx)("p", {
                            className: "profile-picture-text",
                            children: "Edit",
                          }),
                        ],
                      }),
                  ],
                }),
                (0, ae.jsx)("p", {
                  className: "profile-img-error",
                  children: u,
                }),
              ],
            });
          }),
        Qa = n.p + "static/media/no-recipes.33b4d886a45782177237.webp",
        Xa = function () {
          var e = ce(),
            t = e.removeToken,
            n = e.token,
            r = e.saveToken,
            a = n,
            l = a.name,
            i = a.user,
            c = a.recipes,
            o = R();
          return (0, ae.jsxs)("section", {
            className: "section-profile nav-padding",
            children: [
              (0, ae.jsx)("div", { className: "profile-background" }),
              (0, ae.jsxs)("div", {
                className: "profile-container",
                children: [
                  (0, ae.jsx)(qa, { token: n, saveToken: r }),
                  (0, ae.jsx)("h3", {
                    className: "profile-title",
                    children: l,
                  }),
                  (0, ae.jsx)("h4", {
                    className: "profile-subtitle",
                    children: i,
                  }),
                  (0, ae.jsx)("h5", {
                    className: "profile-fav-title",
                    children: "Your favourite recipes:",
                  }),
                  (0, ae.jsxs)("div", {
                    className: "profile-fav-recipes meals-list",
                    children: [
                      0 === c.length &&
                        (0, ae.jsx)(ae.Fragment, {
                          children: (0, ae.jsx)("div", {
                            className: "fav-recipes-no-recipes",
                            style: { backgroundImage: "url(".concat(Qa, ")") },
                            children: (0, ae.jsx)("p", {
                              children: "No favourite recipes, yet.",
                            }),
                          }),
                        }),
                      c.map(function (e) {
                        return (0, ae.jsx)(He, { item: e }, e.id);
                      }),
                    ],
                  }),
                  (0, ae.jsx)("button", {
                    className: "profile-logout-button",
                    onClick: function () {
                      t(), o("/");
                    },
                    children: "Logout",
                  }),
                ],
              }),
            ],
          });
        },
        Za = function (e) {
          var t = e.children,
            n = ce().token,
            r = T();
          return n
            ? t
            : (0, ae.jsx)(H, { to: "/auth", state: { path: r.pathname } });
        };
      function Ka() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = new Date(),
          n = t.getDate(),
          r = t.getMonth() + 1,
          a = t.getFullYear();
        return ""
          .concat(a)
          .concat(e)
          .concat(r < 10 ? "0".concat(r) : "".concat(r))
          .concat(e)
          .concat(n < 10 ? "0".concat(n) : "".concat(n));
      }
      var Ya,
        Ja = n(191),
        Ga = n.n(Ja),
        el = (function () {
          var e = re(
            te().mark(function e(t) {
              var n;
              return te().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fetch(t);
                    case 2:
                      return (n = e.sent), (e.next = 5), n.json();
                    case 5:
                      return e.abrupt("return", e.sent);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        tl = function (e, t) {
          return Date.parse(t.date) - Date.parse(e.date);
        },
        nl = {
          id: "",
          title: "",
          text: "",
          imgUrl: "",
          date: "",
          rating: [{ user: "", number: 0 }],
          author: "",
          authorImg: "",
          comments: [{ id: "", user: "", date: "", text: "", profileImg: "" }],
        },
        rl = {
          blog: [nl],
          setBlog: function (e) {},
          archive: [nl],
          setArchive: function (e) {},
        },
        al = (0, i.createContext)(rl),
        ll = function (e) {
          var t = e.children,
            n = a((0, i.useState)([nl]), 2),
            r = n[0],
            l = n[1],
            c = a((0, i.useState)([nl]), 2),
            o = c[0],
            u = c[1];
          (0, i.useEffect)(function () {
            var e = (function () {
              var e = re(
                te().mark(function e() {
                  var t;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), el("http://localhost:8080/blog");
                        case 2:
                          (t = e.sent), l(t.blog.sort(tl));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []),
            (0, i.useEffect)(function () {
              var e = (function () {
                var e = re(
                  te().mark(function e() {
                    var t;
                    return te().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              el("http://localhost:8080/archiveblogs")
                            );
                          case 2:
                            (t = e.sent), u(t.blog.sort(tl));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            }, []);
          var s = { blog: r, setBlog: l, archive: o, setArchive: u };
          return (0, ae.jsx)(al.Provider, { value: s, children: t });
        },
        il = ["title", "titleId"];
      function cl() {
        return (
          (cl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          cl.apply(this, arguments)
        );
      }
      function ol(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function ul(e, t) {
        var n = e.title,
          r = e.titleId,
          a = ol(e, il);
        return i.createElement(
          "svg",
          cl(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Ya ||
            (Ya = i.createElement("path", {
              d: "M10 44q-2.5 0-4.25-1.75T4 38V10q0-2.5 1.75-4.25T10 4h28q2.5 0 4.25 1.75T44 10v28q0 2.5-1.75 4.25T38 44Zm0-3h28q1.3 0 2.15-.875Q41 39.25 41 38V10q0-1.3-.85-2.15Q39.3 7 38 7H10q-1.25 0-2.125.85T7 10v28q0 1.25.875 2.125T10 41Zm3.2-5.5 6.8-6.8 3.65 3.6L28 26.8l6.95 8.7Zm2.8-16q-1.45 0-2.475-1.025Q12.5 17.45 12.5 16q0-1.45 1.025-2.475Q14.55 12.5 16 12.5q1.45 0 2.475 1.025Q19.5 14.55 19.5 16q0 1.45-1.025 2.475Q17.45 19.5 16 19.5Z",
            }))
        );
      }
      var sl,
        fl = i.forwardRef(ul),
        dl =
          (n.p,
          function (e) {
            var t = e.url,
              n = e.setUrl,
              r = a((0, i.useState)(""), 2),
              l = r[0],
              c = r[1];
            return (0, ae.jsxs)("div", {
              className: "file-card-container",
              children: [
                (0, ae.jsxs)("div", {
                  className: "file-card",
                  children: [
                    (0, ae.jsxs)("div", {
                      className: "file-card-form",
                      children: [
                        (0, ae.jsx)("input", {
                          id: "add-image",
                          type: "file",
                          placeholder: "add image",
                          accept: "image/jpeg, image/png, image/webp",
                          required: !0,
                          onChange: function (e) {
                            var t = e.target.files[0];
                            if (t) {
                              if (t.size >= 512e3)
                                return (
                                  c("Image size can be maximum 500kb."),
                                  void setTimeout(function () {
                                    return c("");
                                  }, 2e3)
                                );
                              var r = new FormData();
                              r.append("file", t);
                              var a = (function () {
                                var e = re(
                                  te().mark(function e(t) {
                                    var r, a, l;
                                    return te().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              fetch(
                                                "http://localhost:8080/blogpicture",
                                                { method: "POST", body: t }
                                              )
                                            );
                                          case 2:
                                            return (
                                              (r = e.sent),
                                              (e.next = 5),
                                              r.json()
                                            );
                                          case 5:
                                            if (
                                              ((a = e.sent),
                                              (l = a.res),
                                              "LIMIT_FILE_SIZE" !== a.res.code)
                                            ) {
                                              e.next = 10;
                                              break;
                                            }
                                            return (
                                              c("Image must be max 100kb"),
                                              e.abrupt(
                                                "return",
                                                setTimeout(function () {
                                                  return c("");
                                                }, 4e3)
                                              )
                                            );
                                          case 10:
                                            if (!a.res.storageErrors) {
                                              e.next = 13;
                                              break;
                                            }
                                            return (
                                              c(a.message),
                                              e.abrupt(
                                                "return",
                                                setTimeout(function () {
                                                  return c("");
                                                }, 4e3)
                                              )
                                            );
                                          case 13:
                                            n(l);
                                          case 14:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })();
                              a(r);
                            }
                          },
                        }),
                        (0, ae.jsx)("button", {
                          className: "file-button",
                          children: "Upload",
                        }),
                      ],
                    }),
                    (0, ae.jsx)("p", {
                      className: "file-main-text",
                      children: "Supported files:",
                    }),
                    (0, ae.jsx)("p", {
                      className: "file-info-text",
                      children: "PNG, JPG",
                    }),
                    (0, ae.jsx)("p", {
                      className: "file-upload-progress",
                      children: "" !== l && l,
                    }),
                  ],
                }),
                (0, ae.jsx)("div", {
                  className: "file-card-preview",
                  children: t
                    ? (0, ae.jsx)("img", {
                        src: t,
                        alt: "background image for blog article.",
                      })
                    : (0, ae.jsxs)("div", {
                        className: "image-preview",
                        children: [
                          (0, ae.jsx)("p", {
                            className: "image-preview-text",
                            children: "Image Preview",
                          }),
                          (0, ae.jsx)(fl, {}),
                        ],
                      }),
                }),
              ],
            });
          }),
        pl = function () {
          var e = (0, i.useContext)(al).setBlog,
            t = a((0, i.useState)(""), 2),
            n = t[0],
            r = t[1],
            l = a((0, i.useState)(""), 2),
            c = l[0],
            o = l[1],
            u = a((0, i.useState)(""), 2),
            s = u[0],
            f = u[1],
            d = a((0, i.useState)(""), 2),
            p = d[0],
            h = d[1],
            m = a((0, i.useState)(""), 2),
            v = m[0],
            g = m[1],
            y = a((0, i.useState)(""), 2),
            b = y[0],
            x = y[1],
            w = a((0, i.useState)([]), 2),
            j = w[0],
            k = w[1],
            S = a((0, i.useState)(""), 2),
            O = S[0],
            E = S[1];
          (0, i.useEffect)(function () {
            fetch("http://localhost:8080/getusers")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return k(e.users);
              });
          }, []);
          return (0, ae.jsxs)(ae.Fragment, {
            children: [
              0 === j.length && (0, ae.jsx)(Qe, {}),
              j.length > 0 &&
                (0, ae.jsxs)("div", {
                  className: "admin-blog-form-container",
                  children: [
                    (0, ae.jsx)("h3", {
                      className: "admin-title",
                      children: "Some thoughts to share for today?",
                    }),
                    (0, ae.jsx)("h4", {
                      className: "form-label",
                      children: "Upload background image:",
                    }),
                    (0, ae.jsx)(dl, { url: p, setUrl: h }),
                    (0, ae.jsxs)("form", {
                      className: "auth-form",
                      onSubmit: function (t) {
                        if ((t.preventDefault(), "" === p))
                          return (
                            x("You must upload image first"),
                            setTimeout(function () {
                              return x("");
                            }, 2e3)
                          );
                        var a = Ga()(),
                          l = Ka("/");
                        function i() {
                          return (
                            (i = re(
                              te().mark(function t(n, a, l, i, c, u, s) {
                                return te().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return t.abrupt(
                                          "return",
                                          fetch(
                                            "http://localhost:8080/addblog",
                                            {
                                              method: "POST",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
                                              },
                                              body: JSON.stringify({
                                                id: n,
                                                title: a,
                                                text: l,
                                                imgUrl: i,
                                                date: c,
                                                rating: [],
                                                author: u,
                                                authorImg: s,
                                                comments: [],
                                              }),
                                            }
                                          )
                                            .then(function (e) {
                                              return e.json();
                                            })
                                            .then(function (t) {
                                              return e(t.blog.sort(tl));
                                            })
                                            .then(function () {
                                              r(""), o(""), f(""), h(""), g("");
                                            })
                                        );
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            )),
                            i.apply(this, arguments)
                          );
                        }
                        !(function (e, t, n, r, a, l, c) {
                          i.apply(this, arguments);
                        })(a, n, v, p, l, c, s);
                      },
                      children: [
                        (0, ae.jsx)("h4", {
                          className: "form-label",
                          children: "Blog's title:",
                        }),
                        (0, ae.jsx)("input", {
                          id: "titleInput",
                          type: "text",
                          placeholder: "title",
                          required: !0,
                          value: n,
                          onChange: function (e) {
                            var t = e.currentTarget.value;
                            r(t);
                          },
                        }),
                        (0, ae.jsx)("h4", {
                          className: "form-label",
                          children: "Blog's author:",
                        }),
                        (0, ae.jsxs)("select", {
                          className: "form-select-author",
                          value: O,
                          onChange: function (e) {
                            var t = e.target.value;
                            if ("" !== t) {
                              E(t);
                              var n = j.find(function (e) {
                                return e.name === t;
                              });
                              o(n.name),
                                f(
                                  "" === n.profileImg
                                    ? "https://firebasestorage.googleapis.com/v0/b/foocoding-react-project.appspot.com/o/ProfileImages%2Fno-image-profile.webp?alt=media&token=3a7b435a-117f-4d36-9166-4d9fe242926c"
                                    : n.profileImg
                                );
                            }
                          },
                          required: !0,
                          placeholder: "choose author",
                          children: [
                            (0, ae.jsx)("option", {
                              value: "",
                              disabled: !0,
                              children: "Select author",
                            }),
                            j.map(function (e) {
                              var t = e.user,
                                n = e.name;
                              if ("admin" === e.token)
                                return (0, ae.jsx)(
                                  "option",
                                  { value: n, children: n },
                                  t
                                );
                            }),
                          ],
                        }),
                        (0, ae.jsx)("h4", {
                          className: "form-label",
                          children: "Blog's body:",
                        }),
                        (0, ae.jsx)("textarea", {
                          id: "textTextarea",
                          name: "textArea",
                          required: !0,
                          placeholder: "text",
                          value: v,
                          onChange: function (e) {
                            g(e.target.value);
                          },
                        }),
                        (0, ae.jsx)("button", {
                          className: "auth-button",
                          type: "submit",
                          children: "Submit",
                        }),
                      ],
                    }),
                    (0, ae.jsx)("p", {
                      className: "submit-error",
                      children: b,
                    }),
                  ],
                }),
            ],
          });
        },
        hl = ["title", "titleId"];
      function ml() {
        return (
          (ml = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ml.apply(this, arguments)
        );
      }
      function vl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function gl(e, t) {
        var n = e.title,
          r = e.titleId,
          a = vl(e, hl);
        return i.createElement(
          "svg",
          ml(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 112.2",
              style: { enableBackground: "new 0 0 100 112.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          sl ||
            (sl = i.createElement(
              "g",
              { id: "admin" },
              i.createElement("path", {
                id: "body",
                d: "M50,81.9c7.4,0,14.8-0.1,22.2,0c11.6,0.3,20.1,5.8,25.3,16.2c1.8,3.6,2.5,7.4,2.5,11.3c0,1.5-1,2.6-2.4,2.7 c-1.4,0-2.4-1-2.5-2.6c-0.5-9.7-5.1-16.7-13.9-20.9c-2.8-1.3-5.7-1.8-8.8-1.8c-14.9,0-29.9,0-44.8,0c-11.2,0-21,8.6-22.4,19.7 c-0.1,1-0.2,2-0.2,3.1c-0.1,1.5-1.1,2.6-2.5,2.6C1,112.1,0,111,0,109.4c0.2-7.3,2.7-13.7,7.8-19c5.6-5.8,12.4-8.6,20.5-8.6 C35.5,81.8,42.7,81.9,50,81.9z",
              }),
              i.createElement("path", {
                id: "face",
                d: "M80,32.3c0.2-0.3,0.3-0.7,0.3-1.1V2.5c0-1-0.6-1.9-1.5-2.3c-0.9-0.4-2-0.2-2.7,0.5L63.2,13.2L52.4,0.9 C52,0.3,51.3,0,50.7,0c-0.7,0-1.4,0.2-1.8,0.7L35.9,13.3L24.1,0.8c-0.7-0.7-1.8-1-2.7-0.6c-1,0.4-1.6,1.3-1.6,2.3v28.6 c0,0.4,0.1,0.8,0.3,1.1c-1.4,3.6-2.2,7.5-2.2,11.6c0,17.7,14.4,32.3,31.9,32.3c18,0,32.5-14.3,32.5-32.2 C82.2,39.9,81.4,35.9,80,32.3z M24.7,24.4V8.8l9.3,9.8c0.5,0.5,1.1,0.8,1.8,0.8c0.7,0,1.3-0.2,1.8-0.7L50.4,6.1l10.8,12.3 c0.5,0.5,1.1,0.8,1.8,0.9c0.7,0,1.4-0.2,1.8-0.7L75.3,8.4v16.3v3.9h-2.8H27.5h-2.8V24.4z M49.8,71.3c-14.9,0-27.1-12.4-27.1-27.3 c0-3.7,0.7-7.2,2.1-10.4h50.4c1.3,3.2,2.1,6.7,2,10.4C77.2,59.1,65,71.3,49.8,71.3z",
              })
            ))
        );
      }
      var yl,
        bl = i.forwardRef(gl),
        xl = (n.p, ["title", "titleId"]);
      function wl() {
        return (
          (wl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          wl.apply(this, arguments)
        );
      }
      function jl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function kl(e, t) {
        var n = e.title,
          r = e.titleId,
          a = jl(e, xl);
        return i.createElement(
          "svg",
          wl(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 100.3",
              style: { enableBackground: "new 0 0 100 100.3" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          yl ||
            (yl = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M50,0c17.8,0,32.2,14.5,32.2,32.2c0,17.9-14.5,32.2-32.5,32.2c-17.5,0-31.9-14.6-31.9-32.3C17.8,14.5,32.3,0,50,0z M50,5 C35,5,22.7,17.2,22.7,32.2c0,14.9,12.2,27.3,27.1,27.3c15.2,0,27.4-12.2,27.4-27.3C77.3,17.2,65,5,50,5z",
              }),
              i.createElement("path", {
                d: "M50,70.1c7.4,0,14.8-0.1,22.2,0c11.6,0.3,20.1,5.8,25.3,16.2c1.8,3.6,2.5,7.4,2.5,11.3c0,1.5-1,2.6-2.4,2.7 c-1.4,0-2.4-1-2.5-2.6C94.6,88,90,81,81.2,76.8c-2.8-1.3-5.7-1.8-8.8-1.8c-14.9,0-29.9,0-44.8,0c-11.2,0-21,8.6-22.4,19.7 c-0.1,1-0.2,2-0.2,3.1c-0.1,1.5-1.1,2.6-2.5,2.6C1,100.3,0,99.2,0,97.6c0.2-7.3,2.7-13.7,7.8-19c5.6-5.8,12.4-8.6,20.5-8.6 C35.5,70,42.7,70.1,50,70.1z",
              })
            ))
        );
      }
      var Sl,
        Ol = i.forwardRef(kl),
        El =
          (n.p,
          function () {
            var e = a((0, i.useState)([]), 2),
              t = e[0],
              n = e[1],
              r = a((0, i.useState)(""), 2),
              l = r[0],
              c = r[1],
              o = function () {
                fetch("http://localhost:8080/getusers")
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    return n(e.users);
                  });
              },
              u = (function () {
                var e = re(
                  te().mark(function e(t) {
                    var n, r;
                    return te().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = function () {
                                return (
                                  (r = re(
                                    te().mark(function e(t) {
                                      return te().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return e.abrupt(
                                                "return",
                                                fetch(
                                                  "http://localhost:8080/deleteuser",
                                                  {
                                                    method: "POST",
                                                    headers: {
                                                      "Content-Type":
                                                        "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                      user: t,
                                                    }),
                                                  }
                                                )
                                                  .then(function (e) {
                                                    return e.json();
                                                  })
                                                  .then(function (e) {
                                                    c(e.response),
                                                      setTimeout(function () {
                                                        return c("");
                                                      }, 3e3);
                                                  })
                                              );
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )),
                                  r.apply(this, arguments)
                                );
                              }),
                              (n = function (e) {
                                return r.apply(this, arguments);
                              }),
                              (e.next = 4),
                              n(t)
                            );
                          case 4:
                            o();
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              s = (function () {
                var e = re(
                  te().mark(function e(t) {
                    var n, r;
                    return te().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = function () {
                                return (
                                  (r = re(
                                    te().mark(function e(t) {
                                      return te().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return e.abrupt(
                                                "return",
                                                fetch(
                                                  "http://localhost:8080/changerank",
                                                  {
                                                    method: "POST",
                                                    headers: {
                                                      "Content-Type":
                                                        "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                      user: t,
                                                    }),
                                                  }
                                                )
                                                  .then(function (e) {
                                                    return e.json();
                                                  })
                                                  .then(function (e) {
                                                    c(e.response),
                                                      setTimeout(function () {
                                                        return c("");
                                                      }, 3e3);
                                                  })
                                              );
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )),
                                  r.apply(this, arguments)
                                );
                              }),
                              (n = function (e) {
                                return r.apply(this, arguments);
                              }),
                              (e.next = 4),
                              n(t)
                            );
                          case 4:
                            o();
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            return (
              (0, i.useEffect)(function () {
                o();
              }, []),
              (0, ae.jsxs)(ae.Fragment, {
                children: [
                  0 === t.length && (0, ae.jsx)(Qe, {}),
                  t.length > 0 &&
                    (0, ae.jsxs)("div", {
                      className: "admin-users-section",
                      children: [
                        (0, ae.jsx)("h5", {
                          className: "admin-title",
                          children: "Registered users:",
                        }),
                        (0, ae.jsx)("div", {
                          className: "admin-users-container",
                          children: t.map(function (e) {
                            var t = e.name,
                              n = e.token,
                              r = e.user;
                            return (0, ae.jsxs)(
                              "div",
                              {
                                className: "admin-users-user",
                                children: [
                                  (0, ae.jsx)("div", {
                                    className: "user-profile-container",
                                    children:
                                      "admin" === n
                                        ? (0, ae.jsx)(bl, {})
                                        : (0, ae.jsx)(Ol, {}),
                                  }),
                                  (0, ae.jsx)("h5", {
                                    className: "user-name",
                                    children: t,
                                  }),
                                  (0, ae.jsx)("p", {
                                    className: "user-username",
                                    children: r,
                                  }),
                                  (0, ae.jsx)("button", {
                                    className: "user-token",
                                    onClick: function () {
                                      return s(r);
                                    },
                                    children: "admin" === n ? "admin" : "user",
                                  }),
                                  "admin" !== n &&
                                    (0, ae.jsx)("button", {
                                      className: "delete-fav",
                                      onClick: function () {
                                        return u(r);
                                      },
                                      children: (0, ae.jsx)(De, {}),
                                    }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                        (0, ae.jsx)("p", {
                          className: "admin-users-response",
                          children: l,
                        }),
                      ],
                    }),
                ],
              })
            );
          }),
        Cl = function (e) {
          return (
            Math.round((Date.now() - Date.parse(e)) / 864e5 - 0.5) <= 3 && !0
          );
        },
        Nl = ["title", "titleId"];
      function Pl() {
        return (
          (Pl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Pl.apply(this, arguments)
        );
      }
      function zl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ml(e, t) {
        var n = e.title,
          r = e.titleId,
          a = zl(e, Nl);
        return i.createElement(
          "svg",
          Pl(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Sl ||
            (Sl = i.createElement("path", {
              d: "M24.45 42v-3H39V9H24.45V6H39q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm-3.9-9.25L18.4 30.6l5.1-5.1H6v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z",
            }))
        );
      }
      var _l,
        Il = i.forwardRef(Ml),
        Ll = (n.p, ["title", "titleId"]);
      function Tl() {
        return (
          (Tl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Tl.apply(this, arguments)
        );
      }
      function Rl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Bl(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Rl(e, Ll);
        return i.createElement(
          "svg",
          Tl(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          _l ||
            (_l = i.createElement("path", {
              d: "M22.5 31.05h3v-9.8l4 4.25 2.15-2.15-7.65-7.7-7.65 7.7 2.15 2.15 4-4.25ZM13.05 42q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-21.9 0V39Z",
            }))
        );
      }
      var Fl,
        Dl = i.forwardRef(Bl),
        Vl =
          (n.p,
          function (e) {
            var t = e.article,
              n = e.page,
              r = void 0 === n ? "0" : n,
              l = t.id,
              c = t.imgUrl,
              o = t.title,
              u = t.text,
              s = t.date,
              f = t.authorImg,
              d = t.author,
              p = (0, i.useContext)(al),
              h = p.setBlog,
              m = p.setArchive,
              v = a((0, i.useState)(""), 2),
              g = v[0],
              y = v[1],
              b = (function () {
                var e = re(
                  te().mark(function e(t) {
                    var n, r;
                    return te().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = function () {
                                return (
                                  (r = re(
                                    te().mark(function e(t) {
                                      return te().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return e.abrupt(
                                                "return",
                                                fetch(
                                                  "http://localhost:8080/restoreblog",
                                                  {
                                                    method: "POST",
                                                    headers: {
                                                      "Content-Type":
                                                        "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                      id: t,
                                                    }),
                                                  }
                                                )
                                                  .then(function (e) {
                                                    return e.json();
                                                  })
                                                  .then(function (e) {
                                                    h(e.blog.sort(tl)),
                                                      m(e.archive.sort(tl));
                                                  })
                                              );
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )),
                                  r.apply(this, arguments)
                                );
                              }),
                              (n = function (e) {
                                return r.apply(this, arguments);
                              }),
                              (e.next = 4),
                              n(t)
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              x = (function () {
                var e = re(
                  te().mark(function e(t) {
                    var n, r;
                    return te().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = function () {
                                return (
                                  (r = re(
                                    te().mark(function e(t) {
                                      return te().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return e.abrupt(
                                                "return",
                                                fetch(
                                                  "http://localhost:8080/deleteblog",
                                                  {
                                                    method: "POST",
                                                    headers: {
                                                      "Content-Type":
                                                        "application/json",
                                                    },
                                                    body: JSON.stringify({
                                                      id: t,
                                                    }),
                                                  }
                                                )
                                                  .then(function (e) {
                                                    return e.json();
                                                  })
                                                  .then(function (e) {
                                                    h(e.blog.sort(tl));
                                                  })
                                              );
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )),
                                  r.apply(this, arguments)
                                );
                              }),
                              (n = function (e) {
                                return r.apply(this, arguments);
                              }),
                              (e.next = 4),
                              n(t)
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            return (0, ae.jsxs)(
              "div",
              {
                className: "blogs-article",
                onMouseEnter: function () {
                  return (function (e) {
                    y(e);
                  })(l);
                },
                onMouseLeave: function () {
                  y("");
                },
                children: [
                  Cl(s) &&
                    (0, ae.jsx)("div", {
                      className: "article-new",
                      children: (0, ae.jsx)("p", { children: "NEW" }),
                    }),
                  (0, ae.jsx)("div", {
                    className: "article-mini-img",
                    style: { backgroundImage: "url(".concat(c, ")") },
                  }),
                  (0, ae.jsxs)("div", {
                    className: "article-mini-info",
                    children: [
                      (0, ae.jsx)("div", {
                        className: "article-mini-title",
                        children: o,
                      }),
                      (0, ae.jsx)("p", {
                        className: "article-mini-text",
                        children: u,
                      }),
                    ],
                  }),
                  (0, ae.jsxs)("div", {
                    className: "article-mini-footer",
                    children: [
                      (0, ae.jsx)("div", {
                        className: "article-mini-date",
                        children: s,
                      }),
                      (0, ae.jsxs)("div", {
                        className: "article-mini-author",
                        children: [
                          (0, ae.jsx)("div", {
                            className: "article-mini-author-img",
                            style: { backgroundImage: "url(".concat(f, ")") },
                          }),
                          (0, ae.jsx)("span", { children: d }),
                        ],
                      }),
                    ],
                  }),
                  g === l &&
                    (0, ae.jsxs)("div", {
                      className: "action-buttons-container",
                      children: [
                        (0, ae.jsx)("button", {
                          className: "action-button",
                          children: (0, ae.jsx)(J, {
                            className: "link-button",
                            to: "/article/" + l,
                            children: (0, ae.jsx)(Il, {}),
                          }),
                        }),
                        "3" === r
                          ? (0, ae.jsx)("button", {
                              className: "action-button restore",
                              onClick: function () {
                                return b(l);
                              },
                              children: (0, ae.jsx)(Dl, {}),
                            })
                          : (0, ae.jsx)("button", {
                              className: "action-button",
                              onClick: function () {
                                return x(l);
                              },
                              children: (0, ae.jsx)(De, {}),
                            }),
                      ],
                    }),
                ],
              },
              l
            );
          }),
        Hl = function (e) {
          var t = e.page,
            n = (0, i.useContext)(al).blog;
          return (0, ae.jsxs)("div", {
            className: "blogs-container",
            children: [
              (0, ae.jsx)("h5", {
                className: "admin-title",
                children: "Actual blogs:",
              }),
              (0, ae.jsx)("div", {
                className: "blogs-articles-container",
                children: n.map(function (e) {
                  return (0, ae.jsx)(Vl, { article: e, page: t }, e.id);
                }),
              }),
            ],
          });
        },
        Al = function (e) {
          var t = e.page,
            n = (0, i.useContext)(al),
            r = n.archive,
            a = n.setArchive;
          return (
            (0, i.useEffect)(function () {
              var e = (function () {
                var e = re(
                  te().mark(function e() {
                    var t;
                    return te().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              el("http://localhost:8080/archiveblogs")
                            );
                          case 2:
                            (t = e.sent).blog.sort(tl), a(t.blog);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            }, []),
            (0, ae.jsxs)("div", {
              className: "blogs-container",
              children: [
                (0, ae.jsx)("h5", {
                  className: "admin-title",
                  children: "Deleted Blogs:",
                }),
                (0, ae.jsx)("div", {
                  className: "blogs-articles-container",
                  children:
                    0 === r.length
                      ? (0, ae.jsx)("p", { children: "Archive is empty" })
                      : r.map(function (e) {
                          return (0, ae.jsx)(Vl, { article: e, page: t }, e.id);
                        }),
                }),
              ],
            })
          );
        },
        Ul = function (e) {
          var t = e.active,
            n = e.svg,
            r = e.dataPage,
            a = e.setPage;
          return (0, ae.jsx)("button", {
            className: "admin-nav-button ".concat(t),
            "data-page": r,
            onClick: function (e) {
              var t = e.currentTarget.dataset.page;
              void 0 !== t && a(t);
            },
            children: (0, ae.jsx)(ae.Fragment, { children: n }),
          });
        },
        $l = ["title", "titleId"];
      function Wl() {
        return (
          (Wl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Wl.apply(this, arguments)
        );
      }
      function ql(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ql(e, t) {
        var n = e.title,
          r = e.titleId,
          a = ql(e, $l);
        return i.createElement(
          "svg",
          Wl(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 50 50",
              style: { enableBackground: "new 0 0 50 50" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Fl ||
            (Fl = i.createElement("path", {
              d: "M0,42.6v-5.3c0-1.3,0.3-2.5,1-3.6s1.6-1.9,2.8-2.4c2.8-1.2,5.2-2.1,7.4-2.6c2.2-0.5,4.5-0.8,6.8-0.8s4.6,0.3,6.8,0.8 c2.2,0.5,4.7,1.4,7.4,2.6c1.2,0.5,2.2,1.3,2.9,2.4c0.7,1.1,1,2.3,1,3.6v5.3H0z M39.6,42.6v-5.3c0-2.4-0.6-4.3-1.8-5.9 c-1.2-1.5-2.8-2.8-4.8-3.7c2.6,0.3,5.1,0.7,7.4,1.3c2.3,0.6,4.2,1.3,5.6,2c1.2,0.7,2.2,1.6,2.9,2.7c0.7,1.1,1.1,2.2,1.1,3.6v5.3 H39.6z M18.1,24.4c-2.5,0-4.5-0.8-6.1-2.4c-1.6-1.6-2.4-3.6-2.4-6.1c0-2.5,0.8-4.5,2.4-6.1s3.6-2.4,6.1-2.4s4.5,0.8,6.1,2.4 c1.6,1.6,2.4,3.6,2.4,6.1s-0.8,4.5-2.4,6.1C22.6,23.6,20.6,24.4,18.1,24.4z M38.5,15.9c0,2.5-0.8,4.5-2.4,6.1 c-1.6,1.6-3.6,2.4-6.1,2.4c-0.4,0-0.9,0-1.4-0.1c-0.5-0.1-1-0.2-1.4-0.3c0.9-0.9,1.6-2.1,2.1-3.5c0.5-1.4,0.7-2.9,0.7-4.6 s-0.2-3.2-0.7-4.5c-0.5-1.3-1.2-2.5-2.1-3.6c0.4-0.1,0.9-0.2,1.4-0.3c0.5-0.1,1-0.1,1.4-0.1c2.5,0,4.5,0.8,6.1,2.4 C37.7,11.4,38.5,13.4,38.5,15.9z M3.4,39.2h29.4v-1.9c0-0.6-0.2-1.2-0.5-1.8c-0.4-0.6-0.8-1-1.3-1.2c-2.7-1.2-5-2-6.8-2.4 c-1.8-0.4-3.8-0.6-6-0.6s-4.2,0.2-6,0.6c-1.9,0.4-4.2,1.2-6.9,2.4c-0.5,0.2-1,0.6-1.3,1.2c-0.3,0.6-0.5,1.2-0.5,1.8V39.2z M18.1,21 c1.5,0,2.7-0.5,3.6-1.4c1-1,1.4-2.2,1.4-3.6s-0.5-2.7-1.4-3.6c-1-1-2.2-1.4-3.6-1.4s-2.7,0.5-3.6,1.4S13,14.5,13,15.9 c0,1.5,0.5,2.7,1.4,3.6C15.4,20.5,16.6,21,18.1,21z",
            }))
        );
      }
      var Xl,
        Zl = i.forwardRef(Ql),
        Kl = (n.p, ["title", "titleId"]);
      function Yl() {
        return (
          (Yl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Yl.apply(this, arguments)
        );
      }
      function Jl(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Gl(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Jl(e, Kl);
        return i.createElement(
          "svg",
          Yl(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              x: "0px",
              y: "0px",
              viewBox: "0 0 50 50",
              style: { enableBackground: "new 0 0 50 50" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Xl ||
            (Xl = i.createElement("path", {
              d: "M9,44.2c-0.9,0-1.6-0.3-2.2-1c-0.6-0.6-1-1.4-1-2.2V9c0-0.9,0.3-1.6,1-2.2c0.6-0.6,1.4-1,2.2-1h21.6L27.4,9H9v32h32V22.4 l3.2-3.2V41c0,0.9-0.3,1.6-1,2.2c-0.6,0.6-1.4,1-2.2,1H9z M34.7,6.2L37,8.5L21.8,23.6v4.6h4.5L41.6,13l2.2,2.2L27.6,31.4h-9.1v-9.1 L34.7,6.2z M43.8,15.2l-9.1-9L40,0.9C40.6,0.3,41.4,0,42.3,0s1.7,0.3,2.3,1L49,5.5C49.7,6.1,50,6.9,50,7.8c0,0.9-0.3,1.6-1,2.2 L43.8,15.2z",
            }))
        );
      }
      var ei,
        ti = i.forwardRef(Gl),
        ni = (n.p, ["title", "titleId"]);
      function ri() {
        return (
          (ri = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ri.apply(this, arguments)
        );
      }
      function ai(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function li(e, t) {
        var n = e.title,
          r = e.titleId,
          a = ai(e, ni);
        return i.createElement(
          "svg",
          ri(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          ei ||
            (ei = i.createElement("path", {
              d: "M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z",
            }))
        );
      }
      var ii,
        ci = i.forwardRef(li),
        oi =
          (n.p,
          function () {
            var e = a((0, i.useState)("1"), 2),
              t = e[0],
              n = e[1];
            return (0, ae.jsxs)("section", {
              className: "section-admin nav-padding",
              children: [
                (0, ae.jsxs)("nav", {
                  className: "admin-nav",
                  children: [
                    (0, ae.jsx)(Ul, {
                      active: "1" === t ? "active" : "",
                      svg: (0, ae.jsx)(ti, {}),
                      dataPage: "1",
                      setPage: n,
                    }),
                    (0, ae.jsx)(Ul, {
                      active: "2" === t ? "active" : "",
                      svg: (0, ae.jsx)(Gt, {}),
                      dataPage: "2",
                      setPage: n,
                    }),
                    (0, ae.jsx)(Ul, {
                      active: "3" === t ? "active" : "",
                      svg: (0, ae.jsx)(ci, {}),
                      dataPage: "3",
                      setPage: n,
                    }),
                    (0, ae.jsx)(Ul, {
                      active: "4" === t ? "active" : "",
                      svg: (0, ae.jsx)(Zl, {}),
                      dataPage: "4",
                      setPage: n,
                    }),
                  ],
                }),
                (0, ae.jsxs)("div", {
                  className: "admin-component-container",
                  children: [
                    "1" === t && (0, ae.jsx)(pl, {}),
                    "2" === t && (0, ae.jsx)(Hl, { page: t }),
                    "3" === t && (0, ae.jsx)(Al, { page: t }),
                    "4" === t && (0, ae.jsx)(El, {}),
                  ],
                }),
              ],
            });
          }),
        ui = function (e) {
          var t = e.children,
            n = ce().token,
            r = T();
          return n
            ? "admin" !== n.token
              ? (0, ae.jsx)(H, { to: "/", state: { path: r.pathname } })
              : t
            : (0, ae.jsx)(H, { to: "/", state: { path: r.pathname } });
        },
        si = function () {
          var e = (0, i.useContext)(al).blog;
          return (0, ae.jsx)("div", {
            className: "blog-articles-container",
            children:
              "" === e[0].id
                ? (0, ae.jsx)(Qe, {})
                : e.map(function (e) {
                    var t = e.id,
                      n = e.imgUrl,
                      r = e.title,
                      a = e.text,
                      l = e.date,
                      i = e.authorImg,
                      c = e.author;
                    return (0,
                    ae.jsxs)(J, { className: "blog-article", to: "/article/" + t, children: [Cl(l) && (0, ae.jsx)("div", { className: "article-new", children: (0, ae.jsx)("p", { children: "NEW" }) }), (0, ae.jsx)("div", { className: "article-mini-img", style: { backgroundImage: "url(".concat(n, ")") } }), (0, ae.jsxs)("div", { className: "article-mini-info", children: [(0, ae.jsx)("div", { className: "article-mini-title", children: r }), (0, ae.jsx)("p", { className: "article-mini-text", children: a })] }), (0, ae.jsxs)("div", { className: "article-mini-footer", children: [(0, ae.jsx)("div", { className: "article-mini-date", children: l }), (0, ae.jsxs)("div", { className: "article-mini-author", children: [(0, ae.jsx)("div", { className: "article-mini-author-img", style: { backgroundImage: "url(".concat(i, ")") } }), (0, ae.jsx)("span", { children: c })] })] })] }, t);
                  }),
          });
        },
        fi = ["title", "titleId"];
      function di() {
        return (
          (di = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          di.apply(this, arguments)
        );
      }
      function pi(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function hi(e, t) {
        var n = e.title,
          r = e.titleId,
          a = pi(e, fi);
        return i.createElement(
          "svg",
          di(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 48",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          ii ||
            (ii = i.createElement("path", {
              d: "M24 38 12 26l2.1-2.1 9.9 9.9 9.9-9.9L36 26Zm0-12.65-12-12 2.1-2.1 9.9 9.9 9.9-9.9 2.1 2.1Z",
            }))
        );
      }
      var mi,
        vi,
        gi = i.forwardRef(hi),
        yi =
          (n.p, n.p + "static/media/blog-portrait.b72ee78e4d38558255f6.webp"),
        bi = n.p + "static/media/blog-bgc.3e67ac5bd393959a180e.webp",
        xi = function () {
          return (0, ae.jsxs)("section", {
            className: "section-blog",
            children: [
              (0, ae.jsx)("div", {
                className: "blog-header-container",
                style: { backgroundImage: "url(".concat(bi, ")") },
              }),
              (0, ae.jsxs)("div", {
                className: "blog-intro-container",
                children: [
                  (0, ae.jsx)("div", {
                    className: "blog-profile-img-container",
                    children: (0, ae.jsx)("div", {
                      className: "blog-profile-img",
                      style: { backgroundImage: "url(".concat(yi, ")") },
                    }),
                  }),
                  (0, ae.jsxs)("div", {
                    className: "blog-intro-info",
                    children: [
                      (0, ae.jsx)("div", {
                        className: "blog-title",
                        children: "Zero Waste Blog",
                      }),
                      (0, ae.jsx)("div", {
                        className: "blog-subtitle",
                        children: "How to leave left footprints",
                      }),
                      (0, ae.jsx)("p", {
                        className: "blog-text",
                        children:
                          "We are lucky to be able to choose what we eat, because many people around the world don't have that same choice. Canadian households toss out about $1,300 worth of food a year, while Americans waste about $2,000 worth annually. If we add restaurants, grocery stores, farms, etc. we are wasting \u2013 $31 billion in Canada and $165 billion in the U.S.",
                      }),
                      (0, ae.jsx)("p", {
                        className: "blog-text",
                        children:
                          "Fortunately, there are many things we can do at home to reduce food waste, and there are tons of zero-waste recipes you can easily make in your kitchen with basic tools.",
                      }),
                      (0, ae.jsxs)("p", {
                        className: "blog-check",
                        children: [
                          "Wanna learn more? Check my Blog",
                          (0, ae.jsx)("span", {
                            children: (0, ae.jsx)(gi, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, ae.jsx)(si, {}),
            ],
          });
        },
        wi = ["title", "titleId"];
      function ji() {
        return (
          (ji = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ji.apply(this, arguments)
        );
      }
      function ki(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Si(e, t) {
        var n = e.title,
          r = e.titleId,
          a = ki(e, wi);
        return i.createElement(
          "svg",
          ji(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 100 19.1",
              style: { enableBackground: "new 0 0 100 19.1" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          mi || (mi = i.createElement("style", { type: "text/css" })),
          vi ||
            (vi = i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M10.9,0.5c-0.4-0.7-1.4-0.7-1.7,0L6.8,5.3C6.6,5.6,6.4,5.8,6.1,5.8L0.8,6.6C0,6.7-0.3,7.7,0.3,8.2l3.8,3.7 c0.2,0.2,0.3,0.5,0.3,0.9L3.5,18c-0.1,0.8,0.7,1.4,1.4,1l4.7-2.5c0.3-0.1,0.6-0.1,0.9,0l4.7,2.5c0.7,0.4,1.5-0.2,1.4-1l-0.9-5.2 c-0.1-0.3,0.1-0.6,0.3-0.9l3.8-3.7c0.6-0.6,0.3-1.5-0.5-1.7l-5.2-0.8c-0.3,0-0.6-0.2-0.7-0.5L10.9,0.5z",
              }),
              i.createElement("path", {
                d: "M30.9,0.5c-0.4-0.7-1.4-0.7-1.7,0l-2.3,4.7c-0.1,0.3-0.4,0.5-0.7,0.5l-5.2,0.8c-0.8,0.1-1.1,1.1-0.5,1.7 l3.8,3.7c0.2,0.2,0.3,0.5,0.3,0.9L23.5,18c-0.1,0.8,0.7,1.4,1.4,1l4.7-2.5c0.3-0.1,0.6-0.1,0.9,0l4.7,2.5c0.7,0.4,1.5-0.2,1.4-1 l-0.9-5.2c-0.1-0.3,0.1-0.6,0.3-0.9l3.8-3.7c0.6-0.6,0.3-1.5-0.5-1.7l-5.2-0.8c-0.3,0-0.6-0.2-0.7-0.5L30.9,0.5z",
              }),
              i.createElement("path", {
                d: "M50.9,0.5c-0.4-0.7-1.4-0.7-1.7,0l-2.3,4.7c-0.1,0.3-0.4,0.5-0.7,0.5l-5.2,0.8c-0.8,0.1-1.1,1.1-0.5,1.7 l3.8,3.7c0.2,0.2,0.3,0.5,0.3,0.9L43.5,18c-0.1,0.8,0.7,1.4,1.4,1l4.7-2.5c0.3-0.1,0.6-0.1,0.9,0l4.7,2.5c0.7,0.4,1.5-0.2,1.4-1 l-0.9-5.2c-0.1-0.3,0.1-0.6,0.3-0.9l3.8-3.7c0.6-0.6,0.3-1.5-0.5-1.7l-5.2-0.8c-0.3,0-0.6-0.2-0.7-0.5L50.9,0.5z",
              }),
              i.createElement("path", {
                d: "M70.9,0.5c-0.4-0.7-1.4-0.7-1.7,0l-2.3,4.7c-0.1,0.3-0.4,0.5-0.7,0.5l-5.2,0.8c-0.8,0.1-1.1,1.1-0.5,1.7 l3.8,3.7c0.2,0.2,0.3,0.5,0.3,0.9L63.5,18c-0.1,0.8,0.7,1.4,1.4,1l4.7-2.5c0.3-0.1,0.6-0.1,0.9,0l4.7,2.5c0.7,0.4,1.5-0.2,1.4-1 l-0.9-5.2c-0.1-0.3,0.1-0.6,0.3-0.9l3.8-3.7c0.6-0.6,0.3-1.5-0.5-1.7l-5.2-0.8c-0.3,0-0.6-0.2-0.7-0.5L70.9,0.5z",
              }),
              i.createElement("path", {
                d: "M90.9,0.5c-0.4-0.7-1.4-0.7-1.7,0l-2.3,4.7c-0.1,0.3-0.4,0.5-0.7,0.5l-5.2,0.8c-0.8,0.1-1.1,1.1-0.5,1.7 l3.8,3.7c0.2,0.2,0.3,0.5,0.3,0.9L83.5,18c-0.1,0.8,0.7,1.4,1.4,1l4.7-2.5c0.3-0.1,0.6-0.1,0.9,0l4.7,2.5c0.7,0.4,1.5-0.2,1.4-1 l-0.9-5.2c-0.1-0.3,0.1-0.6,0.3-0.9l3.8-3.7c0.6-0.6,0.3-1.5-0.5-1.7l-5.2-0.8c-0.3,0-0.6-0.2-0.7-0.5L90.9,0.5z",
              })
            ))
        );
      }
      var Oi,
        Ei = i.forwardRef(Si),
        Ci = (n.p, ["title", "titleId"]);
      function Ni() {
        return (
          (Ni = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ni.apply(this, arguments)
        );
      }
      function Pi(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function zi(e, t) {
        var n = e.title,
          r = e.titleId,
          a = Pi(e, Ci);
        return i.createElement(
          "svg",
          Ni(
            {
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              viewBox: "0 0 20.1 19.2",
              style: { enableBackground: "new 0 0 20.1 19.2" },
              xmlSpace: "preserve",
              ref: t,
              "aria-labelledby": r,
            },
            a
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          Oi ||
            (Oi = i.createElement("path", {
              id: "star",
              d: "M4.7,19.2c-0.3,0-0.5-0.1-0.7-0.2c-0.4-0.3-0.7-0.8-0.6-1.4l0.9-5c0-0.2-0.1-0.3-0.2-0.4L0.5,8.6 C0.1,8.3-0.1,7.8,0.1,7.3s0.6-0.9,1.1-1l5-0.8c0.1,0,0.2,0,0.3-0.3l2.3-4.5C9,0.3,9.4,0,10,0s1.1,0.3,1.3,0.7l0,0l2.4,4.5 c0.1,0.2,0.2,0.2,0.2,0.2l5,0.8c0.6,0.1,1,0.5,1.1,1s0,1-0.4,1.4L16,12.1c-0.1,0.1-0.2,0.3-0.2,0.4l0.9,5c0.1,0.6-0.2,1.1-0.6,1.4 s-1,0.3-1.4,0l-4.5-2.4c-0.1,0-0.3,0-0.5,0L5.4,19C5.2,19.1,5,19.2,4.7,19.2z",
            }))
        );
      }
      var Mi = i.forwardRef(zi),
        _i =
          (n.p,
          function (e) {
            var t = e.article,
              n = a((0, i.useState)(0), 2),
              r = n[0],
              l = n[1],
              c = a((0, i.useState)(!1), 2),
              o = c[0],
              u = c[1],
              s = (0, i.useContext)(al).setBlog,
              f = ce().token,
              d = t.author,
              p = t.date,
              h = t.authorImg,
              m = t.rating,
              v = t.id,
              g =
                f &&
                m.find(function (e) {
                  return e.user === f.user;
                }),
              y = function (e, t) {
                return e <= t ? { fill: "rgb(219, 186, 36)" } : {};
              },
              b = function () {
                if (0 === m.length || void 0 === m) return 0;
                var e =
                  m.reduce(function (e, t) {
                    return e + t.number;
                  }, 0) / m.length;
                return Math.round(100 * (e + Number.EPSILON)) / 100;
              };
            function x(e, t, n) {
              return w.apply(this, arguments);
            }
            function w() {
              return (w = re(
                te().mark(function e(t, n, r) {
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            fetch("http://localhost:8080/sendrating", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                articleId: t,
                                rating: { user: n, number: r },
                              }),
                            }).then(function (e) {
                              return e.json();
                            })
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            var j = (function () {
              var e = re(
                te().mark(function e(t) {
                  var n, r, a, l;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (f) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (n = parseInt(t.currentTarget.value, 10)),
                            (r = v),
                            (a = f.user),
                            (e.next = 7),
                            x(r, a, n)
                          );
                        case 7:
                          return (e.next = 9), el("http://localhost:8080/blog");
                        case 9:
                          (l = e.sent), s(l.blog);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            return (0, ae.jsxs)("div", {
              className: "article-info",
              children: [
                (0, ae.jsx)("div", {
                  className: "article-author-img",
                  style: { backgroundImage: "url(".concat(h, ")") },
                }),
                (0, ae.jsxs)("div", {
                  className: "article-info-text",
                  children: [
                    (0, ae.jsx)("div", {
                      className: "article-author",
                      children: d,
                    }),
                    (0, ae.jsx)("div", {
                      className: "article-date",
                      children: p,
                    }),
                  ],
                }),
                (0, ae.jsxs)("div", {
                  className: "article-score-container",
                  children: [
                    0 === b()
                      ? (0, ae.jsx)("p", {
                          className: "rateIsZero",
                          children: "Nobody has rated this article yet.",
                        })
                      : (0, ae.jsx)(ae.Fragment, {
                          children: (0, ae.jsxs)("div", {
                            children: [
                              (0, ae.jsxs)("p", {
                                className: "article-score-length",
                                children: [
                                  (0, ae.jsx)("span", { children: m.length }),
                                  1 === m.length ? "Person" : "People",
                                  " has rated this article.",
                                ],
                              }),
                              (0, ae.jsxs)("div", {
                                className: "article-score",
                                children: [
                                  (0, ae.jsx)("p", {
                                    className: "article-score-number",
                                    children: b(),
                                  }),
                                  (0, ae.jsxs)("div", {
                                    className: "article-score-stars",
                                    children: [
                                      (0, ae.jsx)("div", {
                                        className: "cover",
                                        style: (function () {
                                          var e = b();
                                          return {
                                            transform: "translate(".concat(
                                              (e / 5) * 100,
                                              "%)"
                                            ),
                                          };
                                        })(),
                                      }),
                                      (0, ae.jsx)(Ei, {}),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                    (0, ae.jsx)("div", {
                      className: "stars-container",
                      children:
                        null == f
                          ? rr(Array(5)).map(function (e, t) {
                              return (0, ae.jsx)(
                                Mi,
                                {
                                  className: "star",
                                  onClick: function () {
                                    return u(!0);
                                  },
                                },
                                t
                              );
                            })
                          : void 0 === g
                          ? rr(Array(5)).map(function (e, t) {
                              var n = t + 1;
                              return (0, ae.jsxs)(
                                "label",
                                {
                                  className: "star-container",
                                  children: [
                                    (0, ae.jsx)("input", {
                                      className: "star-input",
                                      type: "radio",
                                      name: "raiting",
                                      value: n,
                                      onClick: j,
                                    }),
                                    (0, ae.jsx)(Mi, {
                                      className: "star",
                                      style: y(n, r),
                                      onMouseEnter: function () {
                                        return l(n);
                                      },
                                      onMouseLeave: function () {
                                        return l(0);
                                      },
                                    }),
                                  ],
                                },
                                t
                              );
                            })
                          : "Your rate is already added.",
                    }),
                  ],
                }),
                o &&
                  (0, ae.jsx)(Tr, {
                    setIsModalVisible: u,
                    message: "Please login to rate this article.",
                  }),
              ],
            });
          }),
        Ii = function (e) {
          var t = e.article,
            n = ce().token,
            r = (0, i.useContext)(al).setBlog,
            l = a((0, i.useState)(!1), 2),
            c = l[0],
            o = l[1],
            u = a((0, i.useState)(""), 2),
            s = u[0],
            f = u[1],
            d = (function () {
              var e = re(
                te().mark(function e(a) {
                  var l, i, c, o, u, d, p, h;
                  return te().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((i = function () {
                              return (
                                (i = re(
                                  te().mark(function e(t, n, r, a, l) {
                                    return te().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return e.abrupt(
                                              "return",
                                              fetch(
                                                "http://localhost:8080/sendcomment",
                                                {
                                                  method: "POST",
                                                  headers: {
                                                    "Content-Type":
                                                      "application/json",
                                                  },
                                                  body: JSON.stringify({
                                                    articleId: r,
                                                    comment: {
                                                      id: t,
                                                      user: n,
                                                      date: l,
                                                      text: a,
                                                    },
                                                  }),
                                                }
                                              ).then(function (e) {
                                                return e.json();
                                              })
                                            );
                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )),
                                i.apply(this, arguments)
                              );
                            }),
                            (l = function (e, t, n, r, a) {
                              return i.apply(this, arguments);
                            }),
                            a.preventDefault(),
                            n)
                          ) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          return (
                            (c = Ga()()),
                            (o = n.user),
                            (u = void 0 === t.id ? "0" : t.id),
                            (d = s),
                            (p = Ka("/")),
                            (e.next = 12),
                            l(c, o, u, d, p)
                          );
                        case 12:
                          return (
                            (e.next = 14), el("http://localhost:8080/blog")
                          );
                        case 14:
                          (h = e.sent), r(h.blog), f("");
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, ae.jsxs)("div", {
            className: "comment-add-wrapper",
            children: [
              (0, ae.jsx)("div", {
                className: "comment-icon",
                children: (0, ae.jsx)(Ol, {}),
              }),
              (0, ae.jsxs)("form", {
                className: "comment-form",
                onSubmit: d,
                children: [
                  (0, ae.jsx)("textarea", {
                    className: "comment-write-text",
                    placeholder: "write your comment",
                    onChange: function (e) {
                      var t = e.currentTarget.value;
                      f(t);
                    },
                    value: n ? s : "login to write a comment.",
                    required: !0,
                    disabled: !n && !0,
                  }),
                  n
                    ? (0, ae.jsx)("button", {
                        className: "comment-submit-button",
                        type: "submit",
                        children: "Submit",
                      })
                    : (0, ae.jsx)("button", {
                        className: "comment-submit-button comment-login",
                        onClick: function () {
                          return o(!0);
                        },
                        children: "Login",
                      }),
                ],
              }),
              c &&
                (0, ae.jsx)(Tr, {
                  setIsModalVisible: o,
                  message: "Please login to post a comment.",
                }),
            ],
          });
        },
        Li = n.p + "static/media/no-image-profile.3953c4f1e8070f21d872.webp",
        Ti = function (e) {
          var t = e.article,
            n = ce().token,
            r = (0, i.useContext)(al).setBlog,
            l = a((0, i.useState)([]), 2),
            c = l[0],
            o = l[1];
          (0, i.useEffect)(function () {
            fetch("http://localhost:8080/getusersimg")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return o(e.users);
              });
          }, []);
          var u = (function () {
            var e = re(
              te().mark(function e(n) {
                var a, l, i, c;
                return te().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((i = function () {
                            return (
                              (i = re(
                                te().mark(function e(t, n) {
                                  return te().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return e.abrupt(
                                            "return",
                                            fetch(
                                              "http://localhost:8080/deletecomment",
                                              {
                                                method: "POST",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify({
                                                  articleId: t,
                                                  commentId: n,
                                                }),
                                              }
                                            ).then(function (e) {
                                              return e.json();
                                            })
                                          );
                                        case 1:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )),
                              i.apply(this, arguments)
                            );
                          }),
                          (l = function (e, t) {
                            return i.apply(this, arguments);
                          }),
                          void 0 !== t.id)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        return (a = t.id), (e.next = 7), l(a, n);
                      case 7:
                        return (e.next = 9), el("http://localhost:8080/blog");
                      case 9:
                        (c = e.sent), r(c.blog);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return (0, ae.jsxs)("div", {
            className: "comments-wrapper",
            children: [
              0 === t.comments.length &&
                (0, ae.jsx)("p", {
                  className: "comment-single text-align-center",
                  children: "There are no comments yet.",
                }),
              t.comments.map(function (e) {
                var t = e.user,
                  r = e.id,
                  a = e.text,
                  l = e.date,
                  i = c.find(function (e) {
                    return e.user === t;
                  });
                return (0, ae.jsxs)(
                  "div",
                  {
                    className: "comment-single",
                    children: [
                      n &&
                        t === n.user &&
                        (0, ae.jsx)("button", {
                          className: "delete-fav",
                          onClick: function () {
                            return u(r);
                          },
                          children: (0, ae.jsx)(De, {}),
                        }),
                      (0, ae.jsxs)("div", {
                        className: "comment-author",
                        children: [
                          (0, ae.jsx)("div", {
                            className: "comment-profile-img",
                            style: {
                              backgroundImage: "url(".concat(
                                i && "" !== i.profileImg ? i.profileImg : Li,
                                ")"
                              ),
                            },
                          }),
                          (0, ae.jsxs)("div", {
                            className: "comment-profile-info",
                            children: [
                              (0, ae.jsx)("p", {
                                className: "comment-user",
                                children: t,
                              }),
                              (0, ae.jsx)("h6", {
                                className: "comment-date",
                                children: l,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, ae.jsx)("div", {
                        className: "comment-text",
                        children: a,
                      }),
                    ],
                  },
                  e.id
                );
              }),
            ],
          });
        },
        Ri = function () {
          var e = F(),
            t = (0, i.useContext)(al),
            n = t.archive,
            r = t.blog,
            l = a((0, i.useState)(nl), 2),
            c = l[0],
            o = l[1],
            u = c || {},
            s = u.title,
            f = u.text,
            d = u.comments,
            p = u.imgUrl;
          return (
            (0, i.useEffect)(
              function () {
                !(function () {
                  var t = n.find(function (t) {
                      return t.id === e.id;
                    }),
                    a = r.find(function (t) {
                      return t.id === e.id;
                    });
                  void 0 !== t
                    ? o(t)
                    : void 0 === t && o(void 0 === a ? nl : a);
                })();
              },
              [r]
            ),
            (0, ae.jsxs)("section", {
              className: "section-article nav-padding",
              children: [
                !n && (0, ae.jsx)(Ue, {}),
                !r && (0, ae.jsx)(Ue, {}),
                "" === r[0].id && (0, ae.jsx)(Qe, {}),
                "" === n[0].id && (0, ae.jsx)(Qe, {}),
                (0, ae.jsx)("div", {
                  className: "article-img",
                  style: { backgroundImage: "url(".concat(p, ")") },
                }),
                (0, ae.jsxs)("div", {
                  className: "article-wrapper",
                  children: [
                    (0, ae.jsx)(_i, { article: c }),
                    (0, ae.jsx)("div", {
                      className: "article-title",
                      children: s,
                    }),
                    (0, ae.jsx)("p", {
                      className: "article-text",
                      children: f,
                    }),
                    (0, ae.jsxs)("div", {
                      className: "article-comment-section",
                      children: [
                        (0, ae.jsxs)("p", {
                          className: "comment-counter",
                          children: [
                            (0, ae.jsx)("span", { children: d.length }),
                            " Comment",
                            1 !== d.length && "s",
                            ".",
                          ],
                        }),
                        (0, ae.jsx)(Ti, { article: c }),
                        (0, ae.jsx)(Ii, { article: c }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Bi = function () {
          return (0, ae.jsx)(W, {
            children: (0, ae.jsxs)(U, {
              path: "/",
              element: (0, ae.jsx)(pn, {}),
              children: [
                (0, ae.jsx)(U, { index: !0, element: (0, ae.jsx)(st, {}) }),
                (0, ae.jsx)(U, {
                  path: "/recipe/:search",
                  element: (0, ae.jsx)(ma, {}),
                }),
                (0, ae.jsx)(U, {
                  path: "/about",
                  element: (0, ae.jsx)(Zn, {}),
                }),
                (0, ae.jsx)(U, {
                  path: "/meals/:type",
                  element: (0, ae.jsx)(Va, {}),
                }),
                (0, ae.jsx)(U, { path: "/auth", element: (0, ae.jsx)(Gn, {}) }),
                (0, ae.jsx)(U, {
                  path: "/cuisines/:cuisine",
                  element: (0, ae.jsx)(Lr, {}),
                }),
                (0, ae.jsx)(U, {
                  path: "/recipe/:id",
                  element: (0, ae.jsx)(ma, {}),
                }),
                (0, ae.jsx)(U, { path: "/blog", element: (0, ae.jsx)(xi, {}) }),
                (0, ae.jsx)(U, {
                  path: "/article/:id",
                  element: (0, ae.jsx)(Ri, {}),
                }),
                (0, ae.jsx)(U, {
                  path: "/admin",
                  element: (0, ae.jsx)(ui, { children: (0, ae.jsx)(oi, {}) }),
                }),
                (0, ae.jsx)(U, {
                  path: "/profile",
                  element: (0, ae.jsx)(Za, { children: (0, ae.jsx)(Xa, {}) }),
                }),
              ],
            }),
          });
        };
      e.createRoot(document.getElementById("root")).render(
        (0, ae.jsx)(i.StrictMode, {
          children: (0, ae.jsx)(Y, {
            children: (0, ae.jsx)(ie, {
              children: (0, ae.jsx)(ll, {
                children: (0, ae.jsx)(tr, { children: (0, ae.jsx)(Bi, {}) }),
              }),
            }),
          }),
        })
      );
    })();
})();
//# sourceMappingURL=main.a333af0a.js.map
