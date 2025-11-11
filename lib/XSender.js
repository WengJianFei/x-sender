!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).XSender = e()
}(this, function () {
    "use strict";
    var t, e, i, s, n, a, o, c, h, r, l, d, p, g, f, u, m, x, y, w, E, v, b, k, N, C, O, D, T, S, L, M, $, A, W, I, R,
        B, P, H, K, z, _, F, Y, V, j, G, U, Z, X, q = Object.defineProperty, J = t => {
            throw TypeError(t)
        }, Q = (t, e, i) => ((t, e, i) => e in t ? q(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : t[e] = i)(t, "symbol" != typeof e ? e + "" : e, i), tt = (t, e, i) => e.has(t) || J("Cannot " + i),
        et = (t, e, i) => (tt(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
        it = (t, e, i) => e.has(t) ? J("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i),
        st = (t, e, i, s) => (tt(t, e, "write to private field"), s ? s.call(t, i) : e.set(t, i), i),
        nt = (t, e, i) => (tt(t, e, "access private method"), i), at = document.createElement("style");
    at.textContent = ':root{--chat-primary: #1890ff;--chat-disabled: #e8e8e8;--chat-highlight: #40A9FF;--chat-text: #333;--chat-text-assistant: #666;--chat-text-secondary: #ccc;--chat-text-placeholder: #bfbfbf;--chat-box: #fff;--chat-box-shadow: 1px 3px 10px 2px rgba(6, 21, 50, .2);--chat-box-mark: rgba(0, 0, 0, .5);--chat-input: #F9F9F9;--chat-card: #F2F6FC;--chat-highlight-card: #E6F7FF;--chat-border: #f1f1f2;--chat-popover: #000;--chat-popover-text: #fff;--chat-rect-padding: 10px;--chat-before-tip-width: 0px;--chat-before-tip-top: 0px;--chat-tip-dialog-top: 0px;--chat-tip-dialog-left: 0px}@-webkit-keyframes antSpinMove{to{opacity:1}}@keyframes antSpinMove{to{opacity:1}}@-webkit-keyframes antRotate{to{transform:rotate(405deg)}}@keyframes antRotate{to{transform:rotate(405deg)}}.ant-spin{font-size:14px;line-height:1.5;list-style:none;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";position:absolute;display:none;text-align:center;vertical-align:middle;opacity:0;transition:transform .3s cubic-bezier(.78,.14,.15,.86)}.ant-spin .ant-spin-dot{position:relative;display:inline-block;font-size:20px;width:1em;height:1em}.ant-spin .ant-spin-dot-spin{transform:rotate(45deg);animation-name:antRotate;animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear}.ant-spin .ant-spin-dot-item{position:absolute;display:block;width:9px;height:9px;background-color:var(--chat-primary);border-radius:100%;transform:scale(.75);transform-origin:50% 50%;opacity:.3;animation-name:antSpinMove;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-direction:alternate}.ant-spin .ant-spin-dot-item:nth-child(1){top:0;inset-inline-start:0}.ant-spin .ant-spin-dot-item:nth-child(2){top:0;inset-inline-end:0;animation-delay:.4s}.ant-spin .ant-spin-dot-item:nth-child(3){inset-inline-end:0;bottom:0;animation-delay:.8s}.ant-spin .ant-spin-dot-item:nth-child(4){bottom:0;inset-inline-start:0;animation-delay:1.2s}.ant-spin-spinning{position:static;display:inline-block;opacity:1}.chat-area-wrap{position:relative;z-index:10;font-size:16px}.chat-area-wrap *{margin:0;padding:0;box-sizing:border-box;outline:none;text-indent:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.chat-rich-text{position:relative;width:100%;padding:var(--chat-rect-padding);margin:0;background:transparent;box-sizing:border-box;overflow-x:hidden;overflow-y:auto;font-size:16px;color:var(--chat-text);vertical-align:text-bottom;white-space:pre-wrap;word-break:break-all}.chat-rich-text.disabled{cursor:not-allowed}.chat-rich-text .chat-grid-wrap:first-child>*:first-child{padding-left:var(--chat-before-tip-width)}.chat-dialog-wrap{position:absolute;top:0;left:0;z-index:21;width:100%;height:0;pointer-events:none}@keyframes chat-dialog-show{0%{transform:scale(.6);opacity:.4}to{opacity:1;transform:scale(1)}}.chat-dialog-wrap .chat-mention-dialog-wrap{position:absolute;z-index:11;border-radius:4px;padding:4px;overflow:hidden;background:var(--chat-box);box-shadow:var(--chat-box-shadow);pointer-events:visible}.chat-dialog-wrap .chat-mention-dialog-wrap.chat-view-show{animation:chat-dialog-show .2s ease}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-header{padding:6px 4px;width:100%;color:var(--chat-text);font-weight:700;font-size:14px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main{min-width:180px;max-height:240px;overflow-y:auto}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item{display:flex;align-items:center;color:var(--chat-text-secondary);background:transparent;cursor:pointer;padding:4px;transition:all .3s ease;font-weight:700;font-size:14px;border-radius:4px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;margin-right:8px;border-radius:4px;overflow:hidden;background:var(--chat-primary);color:var(--chat-box);white-space:nowrap;font-size:12px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar.have-avatar{background:var(--chat-box)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar.have-avatar img{width:100%;height:100%;object-fit:cover}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar .chat-mention-dialog-item-avatar-loading{position:relative;top:2px;transform:scale(.75)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar .chat-mention-dialog-item-avatar-text{position:relative;top:-1px;transform:scale(.75);font-size:12px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-name{flex:1;white-space:nowrap;line-height:24px;overflow:hidden;text-overflow:ellipsis;padding-right:10px;font-size:14px;transition:all .3s ease;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item:hover{background:var(--chat-card);opacity:.7}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item:hover .chat-mention-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item.active{background:var(--chat-card);opacity:1}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item.active .chat-mention-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-empty{display:flex;align-items:center;flex-direction:column;justify-content:center;padding:10px 0}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-empty .match-empty-svg{width:auto;height:40px;margin-bottom:2px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-empty .empty-label{font-size:12px;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-loading{display:flex;align-items:center;flex-direction:column;justify-content:center;padding:16px}.chat-dialog-wrap .chat-trigger-dialog-wrap{position:absolute;z-index:10;border-radius:4px;padding:4px;overflow:hidden;background:var(--chat-box);box-shadow:var(--chat-box-shadow);pointer-events:visible}.chat-dialog-wrap .chat-trigger-dialog-wrap.chat-view-show{animation:chat-dialog-show .2s ease}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-header{padding:6px 4px;width:100%;color:var(--chat-text);font-weight:700;font-size:14px}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main{min-width:180px;max-height:240px;overflow-y:auto}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item{display:flex;align-items:center;color:var(--chat-text-secondary);background:transparent;cursor:pointer;padding:4px;transition:all .3s ease;font-weight:700;font-size:14px;border-radius:4px}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item .chat-trigger-dialog-item-name{flex:1;white-space:nowrap;line-height:24px;overflow:hidden;text-overflow:ellipsis;padding-right:10px;font-size:14px;transition:all .3s ease;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item:hover{background:var(--chat-card);opacity:.7}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item:hover .chat-trigger-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item.active{background:var(--chat-card);opacity:1}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item.active .chat-trigger-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-select-dialog-wrap{position:fixed;z-index:21;padding:4px;border-radius:4px;box-sizing:border-box;background:var(--chat-box);box-shadow:var(--chat-box-shadow);pointer-events:visible}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-header{display:flex;align-items:center;justify-content:space-between;background:var(--chat-box);padding:6px;color:var(--chat-text);font-weight:700;font-size:14px}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main{position:relative;z-index:3;max-height:280px;overflow-y:auto}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item{display:flex;align-items:center;min-width:180px;color:var(--chat-text-secondary);background:transparent;cursor:pointer;padding:8px;transition:all .3s ease;font-weight:700;font-size:14px;border-radius:6px;min-height:42px}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-preview{flex-shrink:0;width:42px;height:42px;border-radius:6px;margin-right:12px}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-preview.loading{display:flex;align-items:center;justify-content:center}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-preview.loading .ant-spin{position:relative;top:2px;transform:scale(.75)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-name{flex:1;transition:all .3s ease;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-check{flex-shrink:0;display:inline-block;margin-left:6px;font-size:18px;color:var(--chat-primary)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item:hover{background:var(--chat-card);opacity:.8}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item:hover .chat-select-dialog-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-arrow{position:absolute;z-index:2;pointer-events:none;width:16px;height:16px;overflow:hidden}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-arrow:before{box-sizing:border-box;background:var(--chat-box);position:absolute;bottom:0;inset-inline-start:0;width:16px;height:8px;-webkit-clip-path:path("M 0 8 A 4 4 0 0 0 2.828 6.828 L 6.586 3.071 A 2 2 0 0 1 9.414 3.071 L 13.172 6.828 A 4 4 0 0 0 16 8 Z");clip-path:path("M 0 8 A 4 4 0 0 0 2.828 6.828 L 6.586 3.071 A 2 2 0 0 1 9.414 3.071 L 13.172 6.828 A 4 4 0 0 0 16 8 Z");content:""}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-arrow:after{box-sizing:border-box;content:"";position:absolute;width:9px;height:9px;bottom:0;inset-inline:0;margin:auto;border-radius:0 0 2px;transform:translateY(50%) rotate(-135deg);box-shadow:var(--chat-box-shadow);z-index:0;background:transparent;opacity:.25}.chat-scroll{overflow-y:auto;overflow-x:hidden}.chat-scroll::-webkit-scrollbar{width:6px;height:6px}.chat-scroll::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #61b8b31a;background-color:#0003}.chat-scroll::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #57afbb1a;border-radius:10px;background:#ededed}.chat-placeholder-wrap{position:absolute;top:0;left:0;width:100%;margin:0;padding:var(--chat-rect-padding) var(--chat-rect-padding) var(--chat-rect-padding) calc(var(--chat-rect-padding) + var(--chat-before-tip-width));box-sizing:border-box;color:var(--chat-text-placeholder);pointer-events:none;font-style:oblique;word-break:break-all;z-index:11}.chat-write-wrap,.chat-write-input{word-break:break-all}.chat-tag-grid{word-break:break-all;white-space:pre-wrap}.chat-tag-wrap{margin:0 1px}.chat-tag-mention,.chat-tag-trigger{color:var(--chat-primary)}.chat-tag-select{display:inline-block;cursor:pointer;background:var(--chat-card);color:var(--chat-primary);padding:2px 6px;border-radius:10px;margin:2px;transition:all .3s ease}.chat-tag-select svg{margin-left:4px;font-size:12px;transition:all .3s ease}.chat-tag-select:hover{color:var(--chat-highlight);background:var(--chat-highlight-card)}.chat-tag-select.active svg{transform:rotate(-180deg)}.chat-tag-input{padding:2px 6px;border-radius:4px;margin:0 2px;color:var(--chat-primary);cursor:text;background:var(--chat-card);line-height:1.8}.chat-tag-input .input-write{white-space:pre-wrap;word-break:break-all;word-wrap:break-word;padding-left:.1px}.chat-tag-input .input-tip{pointer-events:none;-webkit-user-select:none;user-select:none;opacity:.35;word-break:break-all}.chat-before-tip-wrap{position:absolute;top:0;left:0;height:0;transform:translateY(var(--chat-before-tip-top));z-index:11;padding:var(--chat-rect-padding);pointer-events:none}.chat-before-tip-wrap>*{pointer-events:visible}.chat-before-tip-wrap:hover .chat-before-tip-box{background:var(--chat-card)}.chat-before-tip-wrap:hover .chat-before-tip-close{opacity:1}.chat-before-tip-wrap .chat-before-tip-box{cursor:pointer;padding:2px 6px;color:var(--chat-primary);border-radius:8px;transition:background .3s ease;font-size:18px;font-weight:700}.chat-before-tip-wrap .chat-before-tip-close{position:absolute;top:4px;right:4px;width:16px;height:16px;cursor:pointer;color:#999;transition:opacity .3s ease;opacity:0}.chat-tip-dialog-wrap{position:absolute;bottom:100%;transform:translate(var(--chat-tip-dialog-left),var(--chat-tip-dialog-top));pointer-events:none}.chat-tip-dialog-wrap>*{pointer-events:visible}.chat-tip-dialog-wrap .chat-tip-dialog-main{display:flex;align-items:center;color:var(--chat-popover-text);font-size:13px;padding:8px 10px;background:var(--chat-popover);border-radius:8px}.chat-tip-dialog-wrap .chat-tip-dialog-main .chat-tip-dialog-code{margin-left:4px;opacity:.7;font-size:12px}.chat-tip-dialog-wrap .chat-tip-dialog-arrow{position:absolute;width:10px;height:10px;bottom:-5px;left:50%;transform:translate(-50%) rotate(-45deg);overflow:hidden;background:var(--chat-popover);z-index:2}\n/*$vite$:1*/', document.head.appendChild(at);
    const ot = '<div class="ant-spin ant-spin-spinning" aria-live="polite" aria-busy="true"><span class="ant-spin-dot ant-spin-dot-spin"><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i></span></div>',
        ct = {
            device: "auto",
            autoFocus: !0,
            placeholder: "",
            maxLength: -1,
            keyboardWrapFun: t => t.ctrlKey && ["Enter"].includes(t.key),
            keyboardSendFun: t => !t.ctrlKey && ["Enter"].includes(t.key)
        }, ht = {
            dialogTitle: "群成员",
            callEvery: !0,
            everyText: "所有人",
            asyncMatch: void 0,
            emptyText: "暂无数据",
            options: []
        }, rt = {
            "`": ["`", "~"],
            "~": ["`", "~"],
            1: ["1", "!"],
            "!": ["1", "!"],
            3: ["3", "#"],
            "#": ["3", "#"],
            4: ["4", "$"],
            $: ["4", "$"],
            5: ["5", "%"],
            "%": ["5", "%"],
            6: ["6", "^"],
            "^": ["6", "^"],
            7: ["7", "&"],
            "&": ["7", "&"],
            8: ["8", "*"],
            "*": ["8", "*"],
            ";": [";", ":"],
            ":": [";", ":"],
            "/": ["/", "?"],
            "?": ["/", "?"],
            "\\": ["\\", "|"],
            "|": ["\\", "|"]
        }, lt = {
            tipTemplate: '<div class="chat-before-tip-box">{{text}}</div><div class="chat-before-tip-close"><svg focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" fill-rule="evenodd" viewBox="64 64 896 896"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path></svg></div>',
            dialogTemplate: '<div class="chat-tip-dialog-main"><span>{{dialogText}}</span><span class="chat-tip-dialog-code">ESC</span></div><div class="chat-tip-dialog-arrow"></div>',
            closeNames: ["chat-before-tip-box", "chat-before-tip-close"]
        }, dt = "data-set-empty", pt = "data-set-richType", gt = "richGrid", ft = "richMark", ut = "richWrite",
        mt = "richMention", xt = "richTrigger", yt = "richSelect", wt = "richInput", Et = "richCustom",
        vt = "application/chat-nodes", bt = "\ufeff", kt = (t, e, i = !1) => {
            let s;
            return function (...n) {
                const a = this, o = i && !s;
                clearTimeout(s), s = setTimeout(() => {
                    s = null, i || t.apply(a, n)
                }, e), o && t.apply(a, n)
            }
        }, Nt = (t, e) => {
            let i;
            return function (...s) {
                const n = this;
                i || (t.apply(n, s), i = !0, setTimeout(function () {
                    i = !1
                }, e))
            }
        }, Ct = t => null != t, Ot = (t, e) => t.replace(/{{(\w+)}}/g, (t, i) => void 0 !== e[i] ? e[i] : t);

    function Dt(t) {
        return t.replace(/[&<>"']/g, t => {
            switch (t) {
                case"&":
                    return "&amp;";
                case"<":
                    return "&lt;";
                case">":
                    return "&gt;";
                case'"':
                    return "&quot;";
                case"'":
                    return "&#039;";
                default:
                    return t
            }
        })
    }

    const Tt = t => {
        const e = ["address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tfoot", "ul"],
            i = new RegExp(`<(${e.join("|")})([^>]*?)>`, "gi"), s = new RegExp(`</(${e.join("|")})>`, "gi");
        let n = t.replace(i, (t, e, i) => {
            let s = "", n = "";
            if (i) {
                const t = i.match(/style\s*=\s*["']([^"']*)["']/i);
                if (t) {
                    const e = t[1];
                    s = e.match(/display\s*:/i) ? `style="${e.replace(/display\s*:.*?;/gi, "display:block;")}"` : `style="display:block;${e}"`, n = i.replace(/style\s*=\s*["']([^"']*)["']/i, "").trim()
                } else s = 'style="display:block"', n = i.trim()
            } else s = 'style="display:block"';
            return `<span ${[n, s].filter(Boolean).join(" ")}>`.replace(/\s+/g, " ").replace(/ >/, ">")
        });
        return n = n.replace(s, "</span>"), n
    };

    function St(t, e) {
        switch (e) {
            case"text-backspace":
                return "Backspace" === t.key || "Backspace" === t.code;
            case"text-delete":
                return "Delete" === t.code || "Delete" === t.key;
            case"text-move":
                return "ArrowLeft" === t.key || "ArrowRight" === t.key || "ArrowLeft" === t.code || "ArrowRight" === t.code;
            case"text-select-all":
                return (t.ctrlKey || t.metaKey) && ("A" === t.key || "a" === t.key || "KeyA" === t.code);
            case"text-undo":
                return (t.ctrlKey || t.metaKey) && ("Z" === t.key || "z" === t.key || "KeyZ" === t.code);
            case"text-redo":
                return (t.ctrlKey || t.metaKey) && ("Y" === t.key || "y" === t.key || "KeyY" === t.code);
            case"text-write":
                return t.isComposing || !t.ctrlKey && !t.altKey && !t.metaKey && !["Backspace", "Shift", "Tab", "CapsLock", "Control", "Meta", "Alt", "ContextMenu", "Enter", "NumpadEnter", "Escape", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Home", "End", "PageUp", "PageDown", "Insert", "Delete", "NumLock"].includes(t.key);
            case"dialog-options":
                return "ArrowUp" === t.key || "ArrowDown" === t.key || "Enter" === t.key || "ArrowUp" === t.code || "ArrowDown" === t.code || "Enter" === t.code || "NumpadEnter" === t.code;
            case"IME":
                return "Unidentified" === t.key || 229 === t.keyCode;
            default:
                return !1
        }
    }

    function Lt(t, e, i) {
        const s = e.split(/\s+/), n = t.split("").map((t, i) => {
            let n = s[i] || "";
            return "" === e && "" === n && (n = t), {
                char: t,
                pinyin: n.toLowerCase(),
                initial: n ? n[0].toLowerCase() : ""
            }
        }), a = (t => {
            const e = [];
            let i = "";
            for (const s of t) /[a-zA-Z]/.test(s) ? i += s.toLowerCase() : (i && (e.push({
                type: "pinyin",
                value: i
            }), i = ""), e.push({type: "char", value: s}));
            return i && e.push({type: "pinyin", value: i}), e
        })(i), o = n.length, c = a.length, h = Array.from({length: o + 1}, () => Array(c + 1).fill(!1));
        h[0][0] = !0;
        for (let r = 0; r <= o; r++) for (let t = 0; t <= c; t++) if (h[r][t] && t < c) {
            const e = a[t];
            for (let i = r; i < o; i++) {
                const s = n[i];
                if ("char" === e.type) s.char === e.value && (h[i + 1][t + 1] = !0); else {
                    const a = s.pinyin.toLowerCase(), c = s.initial, r = e.value;
                    if (r === c) h[i + 1][t + 1] = !0; else if (r === a) h[i + 1][t + 1] = !0; else if (Mt(r, a)) h[i + 1][t + 1] = !0; else for (let e = 2; e <= o - i; e++) {
                        const s = n.slice(i, i + e), a = s.map(t => t.pinyin.toLowerCase()).join(""),
                            o = s.map(t => t.initial).join("");
                        if (r === a || r === o || Mt(r, a)) {
                            h[i + e][t + 1] = !0;
                            break
                        }
                    }
                }
            }
        }
        for (let r = 0; r <= o; r++) if (h[r][c]) return !0;
        return !1
    }

    function Mt(t, e) {
        let i = 0, s = 0;
        for (; i < t.length && s < e.length;) t[i] === e[s] && i++, s++;
        return i === t.length
    }

    function $t(t, e = !0, i = "block") {
        t && (t.className = t.className.replace(/ chat-view-show| chat-view-hidden/g, ""), e ? (t.style.display = i, t.className += " chat-view-show") : (t.className += " chat-view-hidden", t.style.display = "none"))
    }

    function At(t) {
        return t && t.classList.contains("chat-view-show")
    }

    class Wt {
        constructor(a, o) {
            it(this, e), Q(this, "chatElement"), Q(this, "bus"), Q(this, "dialog"), Q(this, "activeMention", null), Q(this, "title", ""), Q(this, "callEvery", !0), Q(this, "everyText", ""), Q(this, "emptyText", ""), Q(this, "options", []), Q(this, "asyncMatch"), Q(this, "matchKey", 0), it(this, t, []), this.dialog = document.createElement("div"), this.chatElement = a, this.bus = this.chatElement.chat.bus, nt(this, e, i).call(this), nt(this, e, s).call(this), nt(this, e, n).call(this), this.updateConfig(o)
        }

        updateConfig(t) {
            this.asyncMatch = t.asyncMatch, this.title = t.dialogTitle, this.emptyText = t.emptyText, this.everyText = t.everyText, this.callEvery = !this.asyncMatch && t.callEvery, this.options = this.asyncMatch ? [] : t.options, this.updateRender()
        }

        updateRender() {
            this.dialog.children[0].textContent = this.title, this.dialog.children[2].innerHTML = `<svg class="match-empty-svg" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fill-rule="nonzero" stroke="#d9d9d9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path></g></g></svg><span class="empty-label">${this.emptyText}</span>`;
            const t = this.dialog.children[1];
            t.innerHTML = "";
            const e = document.createDocumentFragment();
            this.callEvery && e.appendChild(this.getRenderMention({
                id: "ALL",
                name: this.everyText
            })), this.options.forEach(t => {
                e.appendChild(this.getRenderMention(t))
            }), t.appendChild(e)
        }

        getRenderMention(t) {
            const e = document.createElement("div");
            e.setAttribute("data-id", t.id), e.setAttribute("data-name", t.name), e.classList.add("chat-mention-dialog-item"), $t(e, !0, "flex");
            const i = document.createElement("div");
            if (i.classList.add("chat-mention-dialog-item-avatar"), t.avatar) {
                i.classList.add("have-avatar");
                const e = document.createElement("div");
                e.classList.add("chat-mention-dialog-item-avatar-loading"), e.innerHTML = ot, i.appendChild(e);
                const s = new Image;
                s.alt = "", s.src = t.avatar, s.onload = () => {
                    i.removeChild(e), i.appendChild(s)
                }
            } else {
                const e = document.createElement("span");
                e.textContent = "ALL" === t.id ? "@" : t.name.slice(-2), e.classList.add("chat-mention-dialog-item-avatar-text"), i.appendChild(e)
            }
            e.appendChild(i);
            const s = document.createElement("div");
            return s.classList.add("chat-mention-dialog-item-name"), s.textContent = t.name, e.appendChild(s), e.addEventListener("click", t => {
                t.stopPropagation();
                const i = this.chatElement.chat.chatEditor.markCursorWrite,
                    s = i.node.textContent.slice(0, i.offset).lastIndexOf("@"), n = i.offset - s;
                this.bus.emit("insertMention", {
                    id: e.getAttribute("data-id"),
                    name: e.getAttribute("data-name"),
                    del: n > 0 ? n : 0
                }), this.closeDialog()
            }), e
        }

        openDialog(t) {
            if (At(this.dialog) || this.bus.emit("closeDialog"), this.asyncMatch) {
                this.options = [], this.updateRender();
                const t = this.dialog.children[2], e = this.dialog.children[3];
                $t(t, !1), $t(e, !0, "flex"), $t(this.dialog), this.moveDialog(), this.bus.emit("switchDisabledState", !0)
            } else if (this.options.length > 0) {
                const e = this.dialog.children[1];
                let i;
                e.scrollTop = 0;
                const s = (t || this.pinyinMatchDialog()).map(t => t.id);
                Array.from(e.children, t => {
                    const e = t.getAttribute("data-id");
                    s.includes(e) ? ($t(t, !0, "flex"), i || (i = t)) : $t(t, !1)
                }), this.switchActiveMention(i || e.children[0]), $t(this.dialog), this.moveDialog(), this.bus.emit("switchDisabledState", !0)
            }
        }

        closeDialog() {
            At(this.dialog) && ($t(this.dialog, !1), this.switchActiveMention(), this.bus.emit("switchDisabledState", !1))
        }

        moveDialog() {
            const t = this.chatElement.chat.getSelection().getRangeAt(0).getBoundingClientRect(),
                e = this.chatElement.dialogRoot.getBoundingClientRect();
            let i = "0", s = "100%", n = t.x - e.x, a = e.y - t.y;
            const {clientWidth: o, clientHeight: c} = this.dialog;
            t.x > window.innerWidth - o - 30 && (n = t.x - o - e.x - 16, i = "100%"), t.y < c && (a -= c, s = "0"), this.dialog.style.transform = "translate(0, 0)", this.dialog.style.transformOrigin = `${i} ${s}`, this.dialog.style.left = n + 6 + "px", this.dialog.style.bottom = `${a}px`, this.dialog.style.opacity = "1"
        }

        moveActiveMention(t) {
            const e = this.dialog.children[1],
                i = Array.prototype.filter.call(e.children, t => t.classList.contains("chat-view-show")),
                s = Array.prototype.indexOf.call(i, this.activeMention);
            "up" === t ? s > 0 ? this.switchActiveMention(i[s - 1], !0) : this.switchActiveMention(i[i.length - 1], !0) : "down" === t && (s < i.length - 1 ? this.switchActiveMention(i[s + 1], !0) : this.switchActiveMention(i[0], !0))
        }

        switchActiveMention(t, e = !1) {
            if (this.activeMention && this.activeMention.classList.remove("active"), t) {
                if (this.activeMention = t, this.activeMention.classList.add("active"), e) {
                    const t = this.dialog.children[1],
                        e = Array.prototype.filter.call(t.children, t => t.classList.contains("chat-view-show")),
                        i = this.activeMention.clientHeight,
                        s = Array.prototype.indexOf.call(e, this.activeMention) + 1 - Math.ceil(Math.floor(t.clientHeight / i) / 2);
                    t.scrollTop = s > 0 ? s * i : 0
                }
            } else this.activeMention = null
        }

        matchDialog() {
            const t = this.chatElement.chat.chatEditor.markCursorWrite, e = t.node.textContent.slice(0, t.offset),
                i = e.lastIndexOf("@");
            if (-1 === i) return void this.closeDialog();
            const s = e.slice(i + 1);
            if (this.asyncMatch) return void this.asyncMatchDialog(s);
            const n = this.pinyinMatchDialog(s);
            n.length > 0 ? this.openDialog(n) : this.closeDialog()
        }

        pinyinMatchDialog(t) {
            return t ? this.options.filter(e => Lt(e.name, e.pinyin || "", t)) : this.callEvery ? [{
                id: "ALL",
                name: this.everyText
            }, ...this.options] : this.options
        }

        async asyncMatchDialog(t = "") {
            this.matchKey++;
            const e = this.matchKey;
            if (/\s/gi.test(t)) return void this.closeDialog();
            this.openDialog();
            const i = await this.asyncMatch(t);
            if (e === this.matchKey) {
                this.options = i, this.updateRender();
                const t = this.dialog.children[1], e = this.dialog.children[2], s = this.dialog.children[3];
                $t(s, !0, "flex"), t.scrollTop = 0, $t(e, 0 === this.options.length, "flex"), $t(s, !1), this.switchActiveMention(t.children[0])
            }
        }

        destroy() {
            this.bus.offKeyEvent("MentionDialog"), this.dialog.parentElement && this.dialog.parentElement.removeChild(this.dialog), et(this, t).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    t = new WeakMap, e = new WeakSet, i = function () {
        const t = "MentionDialog";
        this.bus.on(t, "closeDialog", () => {
            this.closeDialog()
        }), this.bus.on(t, "moveActiveMention", Nt(this.moveActiveMention, 120).bind(this)), this.bus.on(t, "matchDialog", kt(this.matchDialog, 200).bind(this)), this.bus.on(t, "destroy", () => {
            this.destroy()
        })
    }, s = function () {
        st(this, t, [[this.chatElement.richText, {
            keydown: t => {
                At(this.dialog) && (St(t, "dialog-options") ? t.preventDefault() : St(t, "text-move") && this.closeDialog())
            }, keyup: t => {
                if (t.stopPropagation(), "@" === t.key || "2" === String(t.key) || St(t, "IME")) {
                    const t = this.chatElement.chat.getSelection(), e = t.focusNode,
                        i = this.chatElement.chat.chatEditor.findNode(e);
                    if (i && "Write" === i.type) {
                        const e = t.focusOffset;
                        "@" === i.text[e - 1] && !this.chatElement.chat.deviceInfo.isPc && this.openDialog()
                    }
                }
            }
        }], [window, {
            click: () => {
                this.closeDialog()
            }, keydown: t => {
                At(this.dialog) && St(t, "dialog-options") && (t.preventDefault(), "ArrowUp" === t.key || "ArrowUp" === t.code ? this.bus.emit("moveActiveMention", "up") : "ArrowDown" === t.key || "ArrowDown" === t.code ? this.bus.emit("moveActiveMention", "down") : "Enter" !== t.key && "Enter" !== t.code && "NumpadEnter" !== t.code || this.activeMention && this.activeMention.click())
            }
        }]]), et(this, t).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, n = function () {
        this.dialog.classList.add("chat-mention-dialog-wrap"), $t(this.dialog, !1);
        const t = document.createDocumentFragment(), e = document.createElement("div");
        e.classList.add("chat-mention-dialog-header"), t.appendChild(e);
        const i = document.createElement("div");
        i.classList.add("chat-mention-dialog-main"), i.classList.add("chat-scroll"), t.appendChild(i);
        const s = document.createElement("div");
        s.classList.add("chat-mention-dialog-empty"), $t(s, !1), t.appendChild(s);
        const n = document.createElement("div");
        n.classList.add("chat-mention-dialog-loading"), n.innerHTML = ot, $t(n, !1), t.appendChild(n), this.dialog.appendChild(t), this.chatElement.dialogRoot.appendChild(this.dialog)
    };

    class It {
        constructor(t, e) {
            it(this, o), Q(this, "bus"), Q(this, "chatElement"), Q(this, "dialog"), Q(this, "activeTrigger", null), Q(this, "title"), Q(this, "key"), Q(this, "options"), Q(this, "keyMap"), it(this, a, []), this.title = e.dialogTitle, this.key = e.key, this.options = e.options, this.keyMap = e.keyMap, this.dialog = document.createElement("div"), this.chatElement = t, this.bus = this.chatElement.chat.bus, nt(this, o, c).call(this), nt(this, o, h).call(this), nt(this, o, r).call(this)
        }

        openDialog(t) {
            if (At(this.dialog) || this.bus.emit("closeDialog"), this.options.length > 0) {
                const e = this.dialog.children[1];
                let i;
                e.scrollTop = 0;
                const s = (t || this.pinyinMatchDialog()).map(t => t.id);
                Array.from(e.children, t => {
                    const e = t.getAttribute("data-id");
                    s.includes(e) ? ($t(t, !0, "flex"), i || (i = t)) : $t(t, !1)
                }), this.switchActiveTrigger(i || e.children[0]), $t(this.dialog), this.moveDialog(), this.bus.emit("switchDisabledState", !0)
            }
        }

        closeDialog() {
            At(this.dialog) && ($t(this.dialog, !1), this.switchActiveTrigger(), this.bus.emit("switchDisabledState", !1))
        }

        moveDialog() {
            const t = this.chatElement.chat.getSelection().getRangeAt(0).getBoundingClientRect(),
                e = this.chatElement.dialogRoot.getBoundingClientRect();
            let i = "0", s = "100%", n = t.x - e.x, a = e.y - t.y;
            const {clientWidth: o, clientHeight: c} = this.dialog;
            t.x > window.innerWidth - o - 30 && (n = t.x - o - e.x - 16, i = "100%"), t.y < c && (a -= c, s = "0"), this.dialog.style.transform = "translate(0, 0)", this.dialog.style.transformOrigin = `${i} ${s}`, this.dialog.style.left = n + 6 + "px", this.dialog.style.bottom = `${a}px`, this.dialog.style.opacity = "1"
        }

        moveActiveTrigger(t) {
            const e = this.dialog.children[1],
                i = Array.prototype.filter.call(e.children, t => t.classList.contains("chat-view-show")),
                s = Array.prototype.indexOf.call(i, this.activeTrigger);
            "up" === t ? s > 0 ? this.switchActiveTrigger(i[s - 1], !0) : this.switchActiveTrigger(i[i.length - 1], !0) : "down" === t && (s < i.length - 1 ? this.switchActiveTrigger(i[s + 1], !0) : this.switchActiveTrigger(i[0], !0))
        }

        switchActiveTrigger(t, e = !1) {
            if (this.activeTrigger && this.activeTrigger.classList.remove("active"), t) {
                if (this.activeTrigger = t, this.activeTrigger.classList.add("active"), e) {
                    const t = this.dialog.children[1],
                        e = Array.prototype.filter.call(t.children, t => t.classList.contains("chat-view-show")),
                        i = this.activeTrigger.clientHeight,
                        s = Array.prototype.indexOf.call(e, this.activeTrigger) + 1 - Math.ceil(Math.floor(t.clientHeight / i) / 2);
                    t.scrollTop = s > 0 ? s * i : 0
                }
            } else this.activeTrigger = null
        }

        matchDialog() {
            const t = this.chatElement.chat.chatEditor.markCursorWrite, e = t.node.textContent.slice(0, t.offset),
                i = e.lastIndexOf(this.key);
            if (-1 === i) return void this.closeDialog();
            const s = e.slice(i + 1), n = this.pinyinMatchDialog(s);
            n.length > 0 ? this.openDialog(n) : this.closeDialog()
        }

        pinyinMatchDialog(t) {
            return t ? this.options.filter(e => Lt(e.name, e.pinyin || "", t)) : this.options
        }

        destroy() {
            const t = "TriggerDialog-" + this.key;
            this.bus.offKeyEvent(t), this.dialog.parentElement && this.dialog.parentElement.removeChild(this.dialog), et(this, a).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    a = new WeakMap, o = new WeakSet, c = function () {
        const t = "TriggerDialog-" + this.key;
        this.bus.on(t, "closeDialog", () => {
            this.closeDialog()
        }), this.bus.on(t, "moveActiveTrigger", Nt(this.moveActiveTrigger, 120).bind(this)), this.bus.on(t, "matchDialog", kt(this.matchDialog, 200).bind(this)), this.bus.on(t, "destroy", () => {
            this.destroy()
        })
    }, h = function () {
        st(this, a, [[this.chatElement.richText, {
            keydown: t => {
                At(this.dialog) && (St(t, "dialog-options") ? t.preventDefault() : St(t, "text-move") && this.closeDialog())
            }, keyup: t => {
                if (t.stopPropagation(), this.keyMap.includes(String(t.key)) || St(t, "IME")) {
                    const t = this.chatElement.chat.getSelection(), e = t.focusNode,
                        i = this.chatElement.chat.chatEditor.findNode(e);
                    if (i && "Write" === i.type) {
                        const e = t.focusOffset;
                        i.text[e - 1] === this.key && !this.chatElement.chat.deviceInfo.isPc && this.openDialog()
                    }
                }
            }
        }], [window, {
            click: () => {
                this.closeDialog()
            }, keydown: t => {
                At(this.dialog) && St(t, "dialog-options") && (t.preventDefault(), "ArrowUp" === t.key || "ArrowUp" === t.code ? this.bus.emit("moveActiveTrigger", "up") : "ArrowDown" === t.key || "ArrowDown" === t.code ? this.bus.emit("moveActiveTrigger", "down") : "Enter" !== t.key && "Enter" !== t.code && "NumpadEnter" !== t.code || this.activeTrigger && this.activeTrigger.click())
            }
        }]]), et(this, a).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, r = function () {
        this.dialog.classList.add("chat-trigger-dialog-wrap"), $t(this.dialog, !1);
        const t = document.createDocumentFragment(), e = document.createElement("div");
        e.classList.add("chat-trigger-dialog-header"), e.textContent = this.title, t.appendChild(e);
        const i = document.createElement("div");
        i.classList.add("chat-trigger-dialog-main"), i.classList.add("chat-scroll"), t.appendChild(i);
        const s = document.createDocumentFragment();
        this.options.forEach(t => {
            const e = document.createElement("div");
            e.setAttribute("data-id", t.id), e.setAttribute("data-name", t.name), e.classList.add("chat-trigger-dialog-item"), $t(e, !0, "flex");
            const i = document.createElement("div");
            i.classList.add("chat-trigger-dialog-item-name"), i.textContent = t.name, e.appendChild(i), e.addEventListener("click", t => {
                t.stopPropagation();
                const i = this.chatElement.chat.chatEditor.markCursorWrite,
                    s = i.node.textContent.slice(0, i.offset).lastIndexOf(this.key), n = i.offset - s;
                this.bus.emit("insertTrigger", {
                    id: e.getAttribute("data-id"),
                    name: e.getAttribute("data-name"),
                    key: this.key,
                    del: n > 0 ? n : 0
                }), this.closeDialog()
            }), s.appendChild(e)
        }), i.appendChild(s), this.dialog.appendChild(t), this.chatElement.dialogRoot.appendChild(this.dialog)
    };

    class Rt {
        constructor(t, e) {
            it(this, d), Q(this, "chatElement"), Q(this, "bus"), Q(this, "dialog"), Q(this, "title", ""), Q(this, "key", ""), Q(this, "options", []), Q(this, "selectNode", null), it(this, l, []), this.dialog = document.createElement("div"), this.chatElement = t, this.bus = this.chatElement.chat.bus, this.title = e.dialogTitle, this.key = e.key, this.options = e.options, nt(this, d, p).call(this), nt(this, d, g).call(this), nt(this, d, f).call(this)
        }

        openDialog(t) {
            if (At(this.dialog) || this.bus.emit("closeDialog"), this.selectNode = t, !this.selectNode) return;
            $t(this.dialog);
            const e = this.selectNode.$el.getClientRects()[0], i = this.dialog.children[2];
            let s = this.dialog.clientHeight + 16;
            if (s > e.y ? (s = -(e.height + 16), i.style.top = "-16px", i.style.bottom = "auto", i.style.transform = "rotate(0deg)") : (i.style.transform = "rotate(180deg)", i.style.bottom = "-16px", i.style.top = "auto"), window.innerWidth - e.x < this.dialog.clientWidth) {
                const t = this.dialog.clientWidth - (window.innerWidth - e.x) - 10;
                this.dialog.style.left = "auto", this.dialog.style.right = "10px", i.style.left = "auto", i.style.right = t - i.clientWidth / 2 + e.width / 2 + "px"
            } else this.dialog.style.left = e.x + "px", this.dialog.style.right = "auto", i.style.left = e.width / 2 - i.clientWidth / 2 + "px", i.style.right = "auto";
            this.dialog.style.top = e.y + "px", this.dialog.style.transform = `translateY(${-s}px)`;
            const n = this.dialog.children[1], a = n.children;
            let o = 0, c = !1, h = 0;
            if ("Select" === this.selectNode.type) {
                const t = this.selectNode.id;
                this.selectNode.$el.children[0].classList.add("active"), Array.from(a, e => {
                    const i = e.lastChild, s = String(t) === String(e.getAttribute("data-id"));
                    s && (h = e.clientHeight, c = !0), s || c || (o += e.clientHeight), $t(i, s)
                });
                const e = o - n.clientHeight / 2 + h / 2;
                n.scrollTop = c && e > 0 ? e : 0
            } else n.scrollTop = 0, Array.from(a, t => {
                $t(t.lastChild, !1)
            });
            this.bus.emit("switchDisabledState", !0)
        }

        closeDialog() {
            if (At(this.dialog)) {
                if ($t(this.dialog, !1), this.selectNode && "Select" === this.selectNode.type) {
                    this.selectNode.$el.children[0].classList.remove("active")
                }
                this.bus.emit("switchDisabledState", !1), this.selectNode = null
            }
        }

        destroy() {
            const t = "SelectDialog-" + this.key;
            this.bus.offKeyEvent(t), this.dialog.parentElement && this.dialog.parentElement.removeChild(this.dialog), et(this, l).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    l = new WeakMap, d = new WeakSet, p = function () {
        const t = "SelectDialog-" + this.key;
        this.bus.on(t, "activeSelect", t => {
            t.key === this.key && this.chatElement.chat.nextTick(() => {
                this.openDialog(t)
            })
        }), this.bus.on(t, "closeDialog", () => {
            this.closeDialog()
        })
    }, g = function () {
        st(this, l, [[window, {
            click: () => {
                this.closeDialog()
            }
        }]]), et(this, l).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, f = function () {
        this.dialog.classList.add("chat-select-dialog-wrap"), $t(this.dialog, !1);
        const t = document.createDocumentFragment(), e = document.createElement("div");
        e.classList.add("chat-select-dialog-header");
        const i = document.createElement("span");
        i.textContent = this.title, e.appendChild(i), t.appendChild(e);
        const s = document.createElement("div");
        s.classList.add("chat-select-dialog-main"), s.classList.add("chat-scroll");
        const n = document.createDocumentFragment();
        this.options.forEach(t => {
            const e = document.createElement("div");
            if (e.classList.add("chat-select-dialog-item"), e.setAttribute("data-id", t.id), e.setAttribute("data-name", t.name), t.preview) {
                const i = document.createElement("div");
                i.classList.add("chat-select-dialog-preview"), i.classList.add("loading"), i.innerHTML = ot, e.appendChild(i);
                const s = new Image;
                s.classList.add("chat-select-dialog-preview"), s.src = String(t.preview), s.onload = () => {
                    e.insertBefore(s, i), e.removeChild(i)
                }
            }
            const i = document.createElement("span");
            i.classList.add("chat-select-dialog-name"), i.textContent = t.name, e.appendChild(i);
            const s = document.createElement("span");
            s.classList.add("chat-select-dialog-check"), s.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9.218 17.41 19.83 6.796a.99.99 0 1 1 1.389 1.415c-3.545 3.425-4.251 4.105-11.419 11.074a.997.997 0 0 1-1.375.018c-1.924-1.801-3.709-3.568-5.573-5.43a.999.999 0 0 1 1.414-1.413z"></path></svg>', $t(s, !1), e.appendChild(s), e.addEventListener("click", t => {
                t.stopPropagation();
                const i = e.getAttribute("data-id"), s = e.getAttribute("data-name");
                this.selectNode && "Select" === this.selectNode.type ? this.selectNode.updateTag({
                    id: i,
                    name: s
                }) : this.bus.emit("insertSelect", {...this.selectNode || {}, id: i, name: s}), this.closeDialog()
            }), n.appendChild(e)
        }), s.appendChild(n), t.appendChild(s);
        const a = document.createElement("div");
        a.classList.add("chat-select-dialog-arrow"), t.appendChild(a), this.dialog.appendChild(t), this.chatElement.dialogRoot.appendChild(this.dialog)
    };

    class Bt {
        constructor(t, e) {
            it(this, m), Q(this, "chatElement"), Q(this, "bus"), Q(this, "tip"), Q(this, "dialog"), Q(this, "config", {}), it(this, u, []), this.chatElement = t, this.bus = this.chatElement.chat.bus, this.tip = document.createElement("div"), this.dialog = document.createElement("div"), nt(this, m, x).call(this), nt(this, m, y).call(this), nt(this, m, w).call(this), this.updateConfig(e)
        }

        updateConfig(t) {
            this.config = t, this.tip.innerHTML = t.tipTemplate || "", this.dialog.innerHTML = t.dialogTemplate || ""
        }

        openTip(t) {
            this.tip.innerHTML = Ot(this.tip.innerHTML, t), this.dialog.innerHTML = Ot(this.dialog.innerHTML, t), $t(this.tip);
            (this.config.closeNames || []).forEach(t => {
                const e = this.tip.querySelector(`.${t}`);
                e && e.addEventListener("click", () => {
                    this.closeTip()
                })
            }), this.tip.onmouseenter = () => {
                $t(this.dialog);
                const t = this.tip.children[0], e = t.offsetWidth / 2 + t.offsetLeft,
                    i = this.dialog.children[0].clientWidth / 2;
                this.chatElement.container.style.setProperty("--chat-tip-dialog-left", e - i + "px");
                const s = Number(this.chatElement.container.style.getPropertyValue("--chat-before-tip-top").replace("px", ""));
                this.chatElement.container.style.setProperty("--chat-tip-dialog-top", s - this.chatElement.rollBox.scrollTop + "px")
            }, this.tip.onmouseleave = () => {
                $t(this.dialog, !1)
            };
            const e = this.tip.children[0].clientWidth;
            this.chatElement.container.style.setProperty("--chat-before-tip-width", `${e + Number(t.offset || 4)}px`), this.bus.emit("focus", "mark"), nt(this, m, E).call(this), this.bus.emit("tipState", !0)
        }

        closeTip() {
            this.chatElement.container.style.setProperty("--chat-before-tip-width", "0px"), this.chatElement.container.style.setProperty("--chat-before-tip-top", "0px"), this.chatElement.container.style.setProperty("--chat-tip-dialog-left", "0px"), $t(this.tip, !1), $t(this.dialog, !1), this.bus.emit("focus", "mark"), this.tip.innerHTML = this.config.tipTemplate || "", this.dialog.innerHTML = this.config.dialogTemplate || "", this.bus.emit("tipState", !1)
        }

        destroy() {
            this.bus.offKeyEvent("BeforeTip"), et(this, u).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    u = new WeakMap, m = new WeakSet, x = function () {
        const t = "BeforeTip";
        this.bus.on(t, "destroy", () => {
            this.destroy()
        }), this.bus.on(t, "openTip", t => {
            this.openTip(t)
        }), this.bus.on(t, "closeTip", () => {
            this.closeTip()
        }), this.bus.on(t, "editorChange", () => {
            nt(this, m, E).call(this)
        })
    }, y = function () {
        st(this, u, [[window, {
            resize: () => {
                nt(this, m, E).call(this)
            }, keydown: t => {
                "Escape" === t.key && this.closeTip()
            }
        }]]), et(this, u).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, w = function () {
        this.tip.classList.add("chat-before-tip-wrap"), this.dialog.classList.add("chat-tip-dialog-wrap"), this.chatElement.rollBox.appendChild(this.tip), this.chatElement.dialogRoot.appendChild(this.dialog), $t(this.tip, !1), $t(this.dialog, !1)
    }, E = function () {
        if (!At(this.tip)) return;
        const t = this.chatElement.chat.chatEditor.NODES[0].children[0], e = this.tip.children[0],
            i = t.$el.getBoundingClientRect(), s = e.getBoundingClientRect(),
            n = Number(this.chatElement.container.style.getPropertyValue("--chat-before-tip-top").replace("px", "")),
            a = i.y + this.chatElement.chat.chatEditor.NODE_HEIGHT / 2 - (s.y + s.height / 2) + n;
        this.chatElement.container.style.setProperty("--chat-before-tip-top", `${a}px`)
    };

    class Pt {
        constructor(t, e) {
            it(this, v), Q(this, "chat"), Q(this, "container"), Q(this, "rollBox"), Q(this, "richText"), Q(this, "placeholder"), Q(this, "dialogRoot"), Q(this, "mentionDialog"), Q(this, "triggerDialogs"), Q(this, "selectDialogs"), Q(this, "beforeTip"), this.chat = e, this.container = t, this.rollBox = document.createElement("div"), this.richText = document.createElement("div"), this.placeholder = document.createElement("div"), this.dialogRoot = document.createElement("div"), nt(this, v, b).call(this), nt(this, v, k).call(this), nt(this, v, N).call(this), nt(this, v, C).call(this)
        }

        updatePlaceholder(t) {
            this.placeholder.textContent = t
        }

        updateChatStyle(t) {
            Object.assign(this.rollBox.style, t)
        }

        createMentionDialog() {
            this.mentionDialog ? this.mentionDialog.updateConfig(this.chat.options.mentionConfig) : this.mentionDialog = new Wt(this, this.chat.options.mentionConfig)
        }

        createTriggerDialog() {
            this.triggerDialogs ? (this.triggerDialogs.forEach(t => {
                t.destroy()
            }), this.triggerDialogs = []) : this.triggerDialogs = [], this.chat.options.triggerConfig.forEach(t => {
                this.triggerDialogs.push(new It(this, t))
            })
        }

        createSelectDialog() {
            this.selectDialogs ? (this.selectDialogs.forEach(t => {
                t.destroy()
            }), this.selectDialogs = []) : this.selectDialogs = [], this.chat.options.selectConfig.forEach(t => {
                this.selectDialogs.push(new Rt(this, t))
            })
        }

        createBeforeTip() {
            this.beforeTip ? this.beforeTip.updateConfig(this.chat.options.tipConfig) : this.beforeTip = new Bt(this, this.chat.options.tipConfig)
        }

        destroy() {
            this.chat.bus.offKeyEvent("ChatElement"), this.rollBox.parentElement && this.rollBox.parentElement.removeChild(this.rollBox), this.placeholder.parentElement && this.placeholder.parentElement.removeChild(this.placeholder), this.dialogRoot.parentElement && this.dialogRoot.parentElement.removeChild(this.dialogRoot)
        }
    }

    v = new WeakSet, b = function () {
        const t = "ChatElement";
        this.chat.bus.on(t, "editorChange", () => {
            nt(this, v, O).call(this)
        }), this.chat.bus.on(t, "destroy", () => {
            this.destroy()
        })
    }, k = function () {
        this.container.classList.add("chat-area-wrap"), this.rollBox.classList.add("chat-rich-text"), this.rollBox.classList.add("chat-scroll"), this.richText.setAttribute(pt, "richWrap"), this.richText.setAttribute("contenteditable", "true"), this.rollBox.appendChild(this.richText), this.container.appendChild(this.rollBox)
    }, N = function () {
        this.placeholder.classList.add("chat-placeholder-wrap"), $t(this.placeholder), this.container.appendChild(this.placeholder)
    }, C = function () {
        this.dialogRoot.classList.add("chat-dialog-wrap"), this.container.appendChild(this.dialogRoot)
    }, O = function () {
        if (this.chat.chatEditor.isComposition) return $t(this.placeholder, !1);
        const t = this.chat.chatEditor.NODES;
        return t.length > 1 || t[0].children.length > 1 || t[0].children[0].text.length > 0 ? $t(this.placeholder, !1) : void $t(this.placeholder, !0)
    };

    class Ht {
        constructor(t) {
            Q(this, "$el", null), Q(this, "type", ""), this.type = t
        }

        mount({parentElm: t, beforeElm: e, afterElm: i, targetElm: s}) {
            s && (i ? i.nextElementSibling ? t.insertBefore(s, i.nextElementSibling) : t.appendChild(s) : e ? t.insertBefore(s, e) : t.appendChild(s))
        }
    }

    D = new WeakSet, T = function (t, ...e) {
        this.context.context.bus.emit(t, ...e)
    };
    let Kt = class t extends Ht {
        constructor(t, e) {
            super(e.type), it(this, D), Q(this, "context"), Q(this, "text", ""), Q(this, "VOID_KEY", bt), this.context = t, this.text = String(e.text || ""), this.render(e)
        }

        ruleBRTag() {
            const t = this.$el.children[0];
            if (t.childNodes.length > 1) {
                const e = [];
                for (let i = 1; i < t.childNodes.length; i++) e.push(t.childNodes[i]);
                e.forEach(e => {
                    t.removeChild(e)
                })
            }
            if (!Boolean(this.text) && this.$el === this.$el.parentElement.lastElementChild) {
                const t = document.createElement("br");
                this.$el.children[0].appendChild(t)
            }
        }

        focus(t) {
            const e = this.$el.children[0].childNodes[0];
            t || 0 === t ? -1 === t && (t = e.textContent === this.VOID_KEY ? 1 : e.textContent.length) : t = e.textContent === this.VOID_KEY ? 1 : 0;
            const i = new Range, s = this.context.context.chat.getSelection();
            i.setStart(e, t), i.setEnd(e, t), s.removeAllRanges(), s.addRange(i), nt(this, D, T).call(this, "cursorChange", {
                node: e,
                offset: t,
                type: "Write",
                instance: this
            })
        }

        updateNode() {
            const t = this.$el.children[0], e = t.childNodes[0], i = e.textContent || "";
            if (this.text = i.replace(new RegExp(this.VOID_KEY, "ig"), "") || "", t.setAttribute(dt, String(!Boolean(this.text))), Boolean(this.text)) {
                if (-1 !== i.indexOf(this.VOID_KEY) && (e.textContent = this.text, this.focus(-1)), t.childNodes.length > 1) for (let s = t.childNodes.length - 1; s > 0; s--) t.removeChild(t.childNodes[s])
            } else e.textContent = this.VOID_KEY, this.ruleBRTag()
        }

        deleteNode() {
            const t = this.context.children.indexOf(this);
            this.context.children.splice(t, 1), this.context.$el.removeChild(this.$el)
        }

        deleteRelevanceNode() {
            this.deleteNode()
        }

        deleteRangeNode(t) {
            const e = t.anchorOffset, i = t.focusOffset, s = e > i, n = s ? i : e, a = s ? e : i,
                o = this.text.slice(0, n), c = this.text.slice(a);
            this.text = o + c, this.syncNode(), this.focus(n)
        }

        updateContext(t) {
            this.context = t
        }

        syncNode() {
            const t = this.$el.children[0].childNodes[0];
            Boolean(this.text) ? t.textContent = this.text : t.textContent = this.VOID_KEY, this.ruleBRTag()
        }

        splitNode(e, i, s = "", n = "") {
            const a = !Boolean(this.text), o = a ? "" : this.text.slice(0, e), c = a ? "" : this.text.slice(e);
            this.text = i ? o.slice(0, -i) : o, this.text = this.text + s;
            const h = this.context.children.indexOf(this),
                r = new t(this.context, {type: "Write", text: n + c, afterElm: this.$el});
            this.context.children.splice(h + 1, 0, r), this.syncNode(), this.updateNode(), r.updateNode(), r.focus(n.length > 0 ? n.length : void 0)
        }

        backspace(t) {
            const e = t.anchorOffset;
            if (t.isCollapsed) {
                if (0 === e || 1 === e && !Boolean(this.text)) {
                    const t = this.context.children.indexOf(this), e = this.context.context.NODES.indexOf(this.context);
                    if (0 === t) {
                        if (0 === e) return void nt(this, D, T).call(this, "closeTip");
                        return void this.context.context.NODES[e].mergeNode(!1)
                    }
                    return void this.context.context.NODES[e].children[t - 1].deleteRelevanceNode()
                }
                this.text = this.text.slice(0, e - 1) + this.text.slice(e), this.syncNode(), this.focus(e - 1)
            } else this.deleteRangeNode({
                anchorInstance: this,
                anchorOffset: e,
                focusInstance: this,
                focusOffset: t.focusOffset
            })
        }

        delete(t) {
            const e = t.anchorOffset;
            if (t.isCollapsed) if (e === this.text.length || 1 === e && !Boolean(this.text)) {
                const t = this.context.children.indexOf(this), e = this.context.context.NODES.indexOf(this.context);
                if (t === this.context.children.length - 1) {
                    if (e === this.context.context.NODES.length - 1) return;
                    return void this.context.context.NODES[e].mergeNode(!0)
                }
                this.context.context.NODES[e].children[t + 1].deleteRelevanceNode(!0)
            } else this.text = this.text.slice(0, e) + this.text.slice(e + 1), this.syncNode(), this.focus(e); else {
                const i = t.focusOffset, s = e > i, n = s ? i : e, a = s ? e : i, o = this.text.slice(0, n),
                    c = this.text.slice(a);
                this.text = o + c, this.syncNode(), this.focus(n)
            }
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(pt, ft), e.classList.add("chat-write-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-write-input"), i.setAttribute(pt, ut), i.setAttribute(dt, String(!Boolean(this.text))), i.appendChild(document.createTextNode(Boolean(this.text) ? this.text : this.VOID_KEY)), e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    };

    class zt extends Ht {
        constructor(t, e) {
            super(t), Q(this, "context"), this.context = e
        }

        deleteNode() {
            const t = this.context.children.indexOf(this);
            this.context.children.splice(t, 1), this.context.$el.removeChild(this.$el)
        }

        deleteRelevanceNode(t = !1) {
            const e = this.context.children.indexOf(this), i = this.context.children[e - 1],
                s = this.context.children[e + 1];
            this.context.children.splice(e, 1), this.context.$el.removeChild(this.$el), t ? this.context.mergeWriteNode(s, i, !0, !0) : this.context.mergeWriteNode(i, s)
        }

        deleteRangeNode() {
            this.deleteRelevanceNode()
        }

        updateContext(t) {
            this.context = t
        }

        focus(t = !1) {
            const e = this.context.children.indexOf(this), i = this.context.children[t ? e - 1 : e + 1];
            if (i) {
                const e = !Boolean(i.text);
                i.focus(t ? e ? 1 : i.text.length : e ? 1 : 0)
            }
        }

        backspace() {
            this.context.backspace()
        }

        updateNode() {
            this.context.updateNode()
        }

        delete() {
            this.context.delete()
        }
    }

    class _t extends zt {
        constructor(t, e) {
            super(e.type, t), Q(this, "id", ""), Q(this, "name", ""), this.id = e.id, this.name = e.name, this.render(e)
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(pt, mt), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-tag-mention"), i.textContent = "@" + this.name, e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    class Ft extends zt {
        constructor(t, e) {
            super(e.type, t), Q(this, "id", ""), Q(this, "name", ""), Q(this, "key", ""), this.id = e.id, this.name = e.name, this.key = e.key, this.render(e)
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(pt, xt), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-tag-trigger"), i.textContent = this.key + this.name, e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    class Yt extends zt {
        constructor(t, e) {
            super(e.type, t), it(this, S), Q(this, "id", ""), Q(this, "name", ""), Q(this, "key", ""), this.id = e.id, this.name = e.name, this.key = e.key, this.render(e)
        }

        updateTag({id: t, name: e}) {
            this.id = t, this.name = e;
            this.$el.children[0].children[0].textContent = e, this.focus(), nt(this, S, L).call(this, "richTextChange")
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(pt, yt), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-tag-select"), i.innerHTML = '<span></span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="m20.23 8.653-7.795 9.685a1.2 1.2 0 0 1-1.87 0L2.771 8.652C2.14 7.867 2.698 6.7 3.706 6.7h15.588c1.008 0 1.567 1.167.935 1.952"></path></svg>';
            i.children[0].textContent = this.name, e.appendChild(i), e.addEventListener("click", t => {
                t.stopPropagation(), this.context.context.bus.emit("activeSelect", this)
            }), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    S = new WeakSet, L = function (t, ...e) {
        this.context.context.bus.emit(t, ...e)
    };

    class Vt extends Ht {
        constructor(t, e) {
            super(e.type), it(this, M), Q(this, "context"), Q(this, "text", ""), Q(this, "placeholder", ""), Q(this, "key", ""), Q(this, "VOID_KEY", bt), Q(this, "WRAP_KEY", "​\n​"), this.context = t, this.text = (e.text || "").replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.placeholder = String(e.placeholder || "placeholder"), this.key = e.key, this.render(e)
        }

        updateContext(t) {
            this.context = t
        }

        syncNode() {
            const t = this.$el.children[0].children[0].childNodes[0];
            Boolean(this.text) ? t.textContent = this.fixWrapKey(this.text) : t.textContent = this.VOID_KEY, this.updateNode()
        }

        updateNode() {
            const t = this.$el.children[0].children[0], e = this.$el.children[0].children[1], i = t.childNodes[0],
                s = i.textContent || "";
            if (this.text = s.replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), $t(e, !Boolean(this.text), "inline-block"), Boolean(this.text)) {
                if (-1 !== s.indexOf(this.VOID_KEY)) i.textContent = this.fixWrapKey(this.text), this.focus(-1); else if (-1 !== this.text.indexOf(this.WRAP_KEY[1])) {
                    const t = this.fixWrapKey(this.text);
                    if (t !== i.textContent) {
                        let e = 0;
                        for (let s = 0; s < i.textContent.length; s++) {
                            if (i.textContent[s] !== t[s]) {
                                e = s;
                                break
                            }
                        }
                        i.textContent = t, this.focus(e + 2)
                    }
                }
            } else i.textContent = this.VOID_KEY
        }

        deleteNode() {
            const t = this.context.children.indexOf(this);
            this.context.children.splice(t, 1), this.context.$el.removeChild(this.$el)
        }

        backspace(t) {
            const e = t.anchorOffset;
            if (t.isCollapsed) if (0 === e || 1 === e && !Boolean(this.text)) if (Boolean(this.text)) {
                const t = this.context.children.indexOf(this);
                this.context.children[t - 1].focus(-1)
            } else this.deleteRelevanceTag(); else {
                const t = this.$el.children[0].children[0].childNodes[0], i = this.getWrapOffset(t, e, "left"),
                    s = t.textContent || "";
                let n = 0;
                n = i ? 1 === i ? e - i - 1 : e - i : e - 1;
                const a = s.slice(0, n), o = s.slice(e);
                this.text = (a + o).replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.syncNode(), this.focus(n)
            } else this.deleteRangeNode({
                anchorInstance: this,
                anchorOffset: e,
                focusInstance: this,
                focusOffset: t.focusOffset
            })
        }

        delete(t) {
            const e = t.anchorOffset, i = this.$el.children[0].children[0].childNodes[0],
                s = this.getWrapOffset(i, e, "right");
            if (t.isCollapsed) if (e + s === this.fixWrapKey(this.text).length || 1 === e && !Boolean(this.text)) if (Boolean(this.text)) {
                const t = this.context.children.indexOf(this);
                this.context.children[t + 1].focus()
            } else this.deleteRelevanceTag(!0); else {
                const t = i.textContent || "";
                let n = 0;
                n = s ? 1 === s ? e + s + 1 : e + s : e + 1;
                const a = t.slice(0, e), o = t.slice(n);
                this.text = (a + o).replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.syncNode(), this.focus(e)
            } else this.deleteRangeNode({
                anchorInstance: this,
                anchorOffset: e,
                focusInstance: this,
                focusOffset: t.focusOffset
            })
        }

        deleteRangeNode(t) {
            const e = t.anchorOffset, i = t.focusOffset, s = e > i;
            let n = s ? i : e, a = s ? e : i;
            const o = this.$el.children[0].children[0].childNodes[0], c = o.textContent || "",
                h = this.getWrapOffset(o, n, "right"), r = this.getWrapOffset(o, a - 1, "left"), l = c.slice(0, n + h),
                d = c.slice(a + r);
            this.text = (l + d).replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.syncNode(), this.focus(n)
        }

        focus(t) {
            const e = this.$el.children[0].children[0].childNodes[0];
            t || 0 === t ? -1 === t && (t = e.textContent === this.VOID_KEY ? 1 : e.textContent.length) : t = e.textContent === this.VOID_KEY ? 1 : 0;
            const i = new Range, s = this.context.context.chat.getSelection();
            i.setStart(e, t), i.setEnd(e, t), s.removeAllRanges(), s.addRange(i), nt(this, M, $).call(this, "cursorChange", {
                node: e,
                offset: t,
                type: "Input",
                instance: this
            })
        }

        deleteRelevanceNode(t = !1) {
            this.focus(t ? void 0 : -1)
        }

        deleteRelevanceTag(t = !1) {
            const e = this.context.children.indexOf(this), i = this.context.children[e - 1],
                s = this.context.children[e + 1];
            this.context.children.splice(e, 1), this.context.$el.removeChild(this.$el), t ? this.context.mergeWriteNode(s, i, !0, !0) : this.context.mergeWriteNode(i, s)
        }

        setText(t, e) {
            if (e = this.fixWrapKey(e), Boolean(this.text)) {
                const i = this.$el.children[0].children[0].textContent || "", s = i.slice(0, t), n = i.slice(t);
                this.text = s + e + n, this.syncNode(), this.focus(s.length + e.length)
            } else this.text = e, this.syncNode(), this.focus(e.length)
        }

        fixWrapKey(t) {
            return t.replace(new RegExp(this.WRAP_KEY[0], "ig"), "").replace(new RegExp(this.WRAP_KEY[1], "ig"), this.WRAP_KEY)
        }

        getWrapOffset(t, e, i = "left") {
            const s = "left" === i ? t.textContent[e - 1] : t.textContent[e],
                n = "left" === i ? t.textContent[e - 2] : t.textContent[e + 1];
            return s === this.WRAP_KEY[0] ? n === this.WRAP_KEY[1] ? 3 : 1 : s === this.WRAP_KEY[1] ? 2 : 0
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(pt, wt), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-tag-input");
            const s = document.createElement("span");
            s.classList.add("input-write"), s.setAttribute("contenteditable", "true"), s.textContent = Boolean(this.text) ? this.fixWrapKey(this.text) : this.VOID_KEY, i.appendChild(s);
            const n = document.createElement("span");
            n.classList.add("input-tip"), n.textContent = `[${this.placeholder}]`, i.appendChild(n), Boolean(this.text) && $t(n, !1), e.addEventListener("click", () => {
                Boolean(this.text) || this.focus()
            }), e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    M = new WeakSet, $ = function (t, ...e) {
        this.context.context.bus.emit(t, ...e)
    };

    class jt extends zt {
        constructor(t, e) {
            super(e.type, t), Q(this, "html", ""), this.html = e.html, this.render(e)
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(pt, Et), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap"), e.innerHTML = this.html, this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    class Gt extends Ht {
        constructor(t, e, i) {
            super("Grid"), Q(this, "children", []), Q(this, "context"), this.context = t, this.render(e, i)
        }

        getAnalyzeChildren(t) {
            if (!t || 0 === t.length) return [{type: "Write", text: ""}];
            const e = [];
            t.forEach((i, s) => {
                if (s === t.length - 1) return;
                const n = s + 1;
                if ("Write" === i.type && "Write" === t[n].type) {
                    let t = n - e.length;
                    e.push(t)
                }
            }), e.forEach(e => {
                const i = t[e];
                t[e - 1].text += i.text, t.splice(e, 1)
            });
            const i = [];
            return t.forEach((e, s) => {
                if (s === t.length - 1) return;
                const n = s + 1;
                if ("Write" !== e.type && "Write" !== t[n].type) {
                    let t = n + i.length;
                    i.push(t)
                }
            }), i.forEach(e => {
                t.splice(e, 0, {type: "Write", text: ""})
            }), "Write" !== t[0].type && t.unshift({
                type: "Write",
                text: ""
            }), "Write" !== t[t.length - 1].type && t.push({type: "Write", text: ""}), t
        }

        emit(t, ...e) {
            this.context.bus.emit(t, ...e)
        }

        mergeNode(t = !1) {
            const e = this.context.NODES.indexOf(this);
            if (t) {
                const t = this.context.NODES[e + 1];
                if (t) {
                    const e = this.children[this.children.length - 1], i = t.children[0];
                    this.mergeWriteNode(e, i), this.children.push(...t.children);
                    const s = document.createDocumentFragment();
                    t.children.forEach(t => {
                        t.updateContext(this), s.appendChild(t.$el)
                    }), this.$el.appendChild(s), e.ruleBRTag(), t.deleteNode()
                }
            } else {
                const t = this.context.NODES[e - 1];
                if (t) {
                    const e = t.children[t.children.length - 1], i = this.children[0];
                    this.mergeWriteNode(e, i), t.children.push(...this.children);
                    const s = document.createDocumentFragment();
                    this.children.forEach(e => {
                        e.updateContext(t), s.appendChild(e.$el)
                    }), t.$el.appendChild(s), e.ruleBRTag(), this.deleteNode()
                }
            }
        }

        splitNode(t, e = 0) {
            const i = this.context.NODES.indexOf(this), s = this.children.indexOf(t),
                n = Boolean(t.text) ? t.text.slice(0, e) : "", a = Boolean(t.text) ? t.text.slice(e) : "";
            t.text = n;
            const o = this.children.slice(0, s + 1), c = this.children.slice(s + 1);
            this.children = o;
            const h = new Gt(this.context, [], {afterElm: this.$el});
            this.context.NODES.splice(i + 1, 0, h);
            const r = h.children[0];
            r.text = a, h.children.push(...c);
            const l = document.createDocumentFragment();
            c.forEach(t => {
                t.updateContext(h), l.appendChild(t.$el)
            }), h.$el.appendChild(l), t.syncNode(), r.syncNode(), r.focus()
        }

        deleteNode() {
            this.children = [];
            const t = this.context.NODES.indexOf(this);
            this.context.NODES.splice(t, 1), this.context.$el.removeChild(this.$el)
        }

        mergeWriteNode(t, e, i = !0, s = !1) {
            const n = t.text || "", a = e.text || "", o = s ? a.length : n.length;
            t.text = s ? a + n : n + a, t.syncNode(), e.deleteNode(), i && t.focus(Boolean(t.text) ? o : 1)
        }

        splitWriteNode(t, e) {
            const i = this.children.indexOf(t), s = Boolean(t.text) ? t.text.slice(0, e) : "",
                n = Boolean(t.text) ? t.text.slice(e) : "";
            t.text = s, t.syncNode();
            const a = new Kt(this, {type: "Write", text: n, afterElm: t.$el});
            this.children.splice(i + 1, 0, a)
        }

        deleteRangeNode(t) {
            const e = t.anchorInstance, i = t.focusInstance;
            if (e === i) return void e.deleteRangeNode(t);
            const s = this.children.indexOf(e) > this.children.indexOf(i);
            "Write" === e.type && this.splitWriteNode(e, t.anchorOffset), "Write" === i.type && this.splitWriteNode(i, t.focusOffset);
            const n = this.children.indexOf(e), a = this.children.indexOf(i);
            let o = (s ? a : n) + 1;
            const c = s ? n : a;
            s && "Write" !== i.type && (o -= 1);
            const h = this.children.slice(o, c + 1), r = this.children[o - 1], l = this.children[c + 1];
            h.forEach(t => {
                t.deleteNode()
            }), this.mergeWriteNode(r, l)
        }

        updateNode() {
            this.context.fixEditor()
        }

        backspace() {
            this.context.fixEditor()
        }

        delete() {
            this.context.fixEditor()
        }

        render(t, e) {
            const i = document.createElement("p");
            this.$el = i, i.className = "chat-grid-wrap", i.setAttribute(pt, gt), this.renderChildren(t, !1), this.mount({
                parentElm: this.context.$el,
                targetElm: this.$el, ...e || {}
            })
        }

        renderChildren(t, e = !0) {
            if (!this.$el) return;
            this.children = [], this.$el.innerHTML = "";
            const i = this.getAnalyzeChildren(t), s = document.createDocumentFragment();
            i.forEach(t => {
                let e;
                switch (t.type) {
                    case"Write":
                        e = new Kt(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Mention":
                        e = new _t(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Trigger":
                        e = new Ft(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Select":
                        e = new Yt(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Input":
                        e = new Vt(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Custom":
                        e = new jt(this, {...t, parentElm: s}), this.children.push(e)
                }
            }), this.$el.appendChild(s);
            const n = this.children[this.children.length - 1];
            n.ruleBRTag(), e && (n.focus(-1), this.emit("richTextChange"))
        }
    }

    class Ut {
        constructor(t) {
            it(this, I), Q(this, "$el"), Q(this, "bus"), Q(this, "chat"), Q(this, "isComposition", !1), Q(this, "textLength", 0), it(this, A, !1), Q(this, "NODES", []), Q(this, "NODE_HEIGHT", 24), Q(this, "IME_MODEL", !1), Q(this, "FIX_MODEL", !1), it(this, W, []), Q(this, "markCursorWrite", {
                node: null,
                offset: 0,
                instance: null
            }), Q(this, "markCursorInput", {
                node: null,
                offset: 0,
                instance: null
            }), Q(this, "markLastType", "Write"), Q(this, "undoHistory", []), Q(this, "redoHistory", []), Q(this, "historyLoading", !1), this.chat = t, this.bus = t.bus, this.$el = t.chatElement.richText, nt(this, I, R).call(this), nt(this, I, B).call(this), this.initEditor()
        }

        initEditor() {
            this.$el.innerHTML = "", this.NODES = [new Gt(this)], this.markLastType = "Write", this.NODE_HEIGHT = this.NODES[0].$el.getBoundingClientRect().height, this.undoHistory = [{
                nodes: this.compileNodes(this.NODES),
                gridIndex: this.NODES.length - 1,
                childIndex: 0,
                offset: 1,
                type: "Write"
            }], this.redoHistory = [], this.chat.options.autoFocus && this.chat.nextTick(() => {
                this.focusLast()
            });
            const t = this.NODES[this.NODES.length - 1], e = t.children[t.children.length - 1];
            nt(this, I, G).call(this, {
                node: e.$el.children[0].childNodes[0],
                offset: Boolean(e.text) ? e.text.length : 1,
                type: "Write",
                instance: e
            })
        }

        async fixEditor(t) {
            this.$el.innerHTML = "", t || (t = this.compileNodes(this.NODES)), this.NODES = t.map(t => new Gt(this, t)), this.focusLast(), await nt(this, I, j).call(this)
        }

        deleteRangeNode(t) {
            let e = t.anchorInstance, i = t.focusInstance;
            "Grid" === e.type && (e = e.children[0], t.anchorOffset = Boolean(e.text) ? 0 : 1), "Grid" === i.type && (i = i.children[0], t.focusInstance = Boolean(i.text) ? 0 : 1);
            const s = e.context, n = i.context, a = this.NODES.indexOf(s), o = this.NODES.indexOf(n), c = a > o,
                h = c ? o : a, r = c ? a : o;
            this.NODES.slice(h + 1, r).forEach(t => {
                t.deleteNode()
            });
            const l = c ? n : s, d = c ? s : n, p = l.children[l.children.length - 1], g = d.children[0];
            c ? (l.deleteRangeNode({
                anchorInstance: p,
                anchorOffset: Boolean(p.text) ? p.text.length : 1,
                focusInstance: i,
                focusOffset: t.focusOffset
            }), d.deleteRangeNode({
                anchorInstance: g,
                anchorOffset: Boolean(g.text) ? 0 : 1,
                focusInstance: e,
                focusOffset: t.anchorOffset
            })) : (l.deleteRangeNode({
                anchorInstance: e,
                anchorOffset: t.anchorOffset,
                focusInstance: p,
                focusOffset: Boolean(p.text) ? p.text.length : 1
            }), d.deleteRangeNode({
                anchorInstance: i,
                anchorOffset: t.focusOffset,
                focusInstance: g,
                focusOffset: Boolean(g.text) ? 0 : 1
            })), l.mergeNode(!0)
        }

        findNode(t, e = 5, i = !0) {
            if (!t) return null;
            if (i && !this.$el.contains(t)) return null;
            if (e <= 0) return null;
            if (t.nodeType === Node.TEXT_NODE) return this.findNode(t.parentElement, e - 1);
            const s = t, n = s.getAttribute ? s.getAttribute(pt) : "";
            if (n === ut) {
                const t = s.parentElement, e = t.parentElement, i = Array.prototype.indexOf.call(e.children, t),
                    n = Array.prototype.indexOf.call(this.$el.children, e);
                return this.NODES[n].children[i]
            }
            if (n === ft) {
                const t = s, e = t.parentElement, i = Array.prototype.indexOf.call(e.children, t),
                    n = Array.prototype.indexOf.call(this.$el.children, e);
                return this.NODES[n].children[i]
            }
            if (n === mt || n === xt || n === yt || n === wt || n === Et) {
                const t = s, e = t.parentElement, i = Array.prototype.indexOf.call(e.children, t),
                    n = Array.prototype.indexOf.call(this.$el.children, e);
                return this.NODES[n].children[i]
            }
            if (n === gt) {
                const t = Array.prototype.indexOf.call(this.$el.children, s);
                return this.NODES[t]
            }
            return this.findNode(s.parentElement, e - 1, !1)
        }

        focusFirst() {
            this.NODES[0].children[0].focus(), this.cursorView()
        }

        focusMark() {
            const t = this.chat.getSelection(), e = new Range;
            switch (this.markLastType) {
                case"Write":
                    e.setStart(this.markCursorWrite.node, this.markCursorWrite.offset), e.setEnd(this.markCursorWrite.node, this.markCursorWrite.offset);
                    break;
                case"Input":
                    e.setStart(this.markCursorInput.node, this.markCursorInput.offset), e.setEnd(this.markCursorInput.node, this.markCursorInput.offset)
            }
            t.removeAllRanges(), t.addRange(e), this.cursorView()
        }

        focusLast() {
            const t = this.NODES[this.NODES.length - 1];
            t.children[t.children.length - 1].focus(-1), this.cursorView()
        }

        selectAll() {
            const t = this.chat.getSelection(), e = new Range, i = this.NODES[0].children[0],
                s = this.NODES[this.NODES.length - 1].children[this.NODES[this.NODES.length - 1].children.length - 1],
                n = i.$el.children[0].childNodes[0], a = s.$el.children[0].childNodes[0];
            e.setStart(n, Boolean(i.text) ? 0 : 1), e.setEnd(a, Boolean(s.text) ? s.text.length : 1), t.removeAllRanges(), t.addRange(e)
        }

        cursorMove(t, e) {
            const i = e || this.chat.getSelection(), s = t < 0;
            if (!i.isCollapsed) {
                const t = this.findNode(i.anchorNode), e = this.findNode(i.focusNode);
                if (!t || !e) return;
                let n, a, o = !1;
                if (t === e) o = i.anchorOffset > i.focusOffset; else if (t.context === e.context) {
                    o = t.context.children.indexOf(t) > e.context.children.indexOf(e)
                } else {
                    o = this.NODES.indexOf(t.context) > this.NODES.indexOf(e.context)
                }
                return s ? (n = o ? i.focusOffset : i.anchorOffset, a = o ? e : t) : (n = o ? i.anchorOffset : i.focusOffset, a = o ? t : e), "Write" === a.type || "Input" === a.type ? a.focus(n) : a.focus(o), void this.cursorView()
            }
            const n = i.focusNode, a = this.findNode(n);
            let o = 0;
            if (!a) return;
            if ("Write" === a.type) {
                const e = i.focusOffset, n = s ? a.text.slice(0, e) : a.text.slice(e);
                if (n.length >= Math.abs(t)) return a.focus(e + t), void this.cursorView();
                o += n.length
            } else if ("Input" === a.type) {
                const e = i.focusOffset, n = a.$el.children[0].children[0].childNodes[0],
                    c = (s ? n.textContent.slice(0, e) : n.textContent.slice(e)).replace(new RegExp(`${a.VOID_KEY}|${a.WRAP_KEY[0]}`, "ig"), "");
                if (c.length >= Math.abs(t)) {
                    const i = a.getWrapOffset(n, s ? e + t + 1 : e + t - 1, s ? "left" : "right");
                    return i ? s ? a.focus(e + t - i + 1) : a.focus(e + t + i - 1) : a.focus(e + t), void this.cursorView()
                }
                o += c.length
            }
            const c = a.context.children.indexOf(a);
            if (s) {
                if (0 === c) {
                    const e = this.NODES.indexOf(a.context);
                    if (0 === e) return void a.focus();
                    const i = this.NODES[e - 1], s = i.children[i.children.length - 1],
                        n = s.$el.children[0].childNodes[0];
                    return o += 1, void this.cursorMove(-(Math.abs(t) - o), {
                        focusNode: n,
                        focusOffset: Boolean(s.text) ? s.text.length : 1,
                        isCollapsed: !0
                    })
                }
                const e = a.context.children[c - 1];
                let i, s;
                o += 1, "Input" === e.type ? (i = e, s = i.$el.children[0].children[0].childNodes[0]) : "Write" === e.type ? (i = e, s = i.$el.children[0].childNodes[0]) : (i = a.context.children[c - 2], s = i.$el.children[0].childNodes[0]);
                const n = "Input" === e.type ? i.fixWrapKey(i.text) : i.text;
                this.cursorMove(-(Math.abs(t) - o), {
                    focusNode: s,
                    focusOffset: Boolean(n) ? n.length : 1,
                    isCollapsed: !0
                })
            } else {
                if (c === a.context.children.length - 1) {
                    const e = this.NODES.indexOf(a.context);
                    if (e === this.NODES.length - 1) return void a.focus(-1);
                    const i = this.NODES[e + 1].children[0], s = i.$el.children[0].childNodes[0];
                    return o += 1, void this.cursorMove(t - o, {
                        focusNode: s,
                        focusOffset: Boolean(i.text) ? 0 : 1,
                        isCollapsed: !0
                    })
                }
                const e = a.context.children[c + 1];
                let i, s;
                o += 1, "Input" === e.type ? (i = e, s = i.$el.children[0].children[0].childNodes[0]) : "Write" === e.type ? (i = e, s = i.$el.children[0].childNodes[0]) : (i = a.context.children[c + 2], s = i.$el.children[0].childNodes[0]), this.cursorMove(t - o, {
                    focusNode: s,
                    focusOffset: Boolean(i.text) ? 0 : 1,
                    isCollapsed: !0
                })
            }
        }

        cursorView() {
            const t = this.$el.parentElement;
            if (t.scrollHeight <= t.clientHeight) return;
            const e = this.chat.getSelection().getRangeAt(0).getClientRects()[0], i = t.getClientRects()[0],
                s = e.y - i.y;
            s < 0 ? t.scrollTop = t.scrollTop - Math.abs(s) : s + e.height > i.height && (t.scrollTop = t.scrollTop + (s + e.height - i.height))
        }

        compileNodes(t) {
            const e = [];
            return t.forEach(t => {
                const i = [];
                t.children.forEach(t => {
                    switch (t.type) {
                        case"Write":
                            i.push({type: "Write", text: t.text});
                            break;
                        case"Mention":
                            i.push({type: "Mention", id: t.id, name: t.name});
                            break;
                        case"Trigger":
                            i.push({type: "Trigger", id: t.id, name: t.name, key: t.key});
                            break;
                        case"Select":
                            i.push({type: "Select", id: t.id, name: t.name, key: t.key});
                            break;
                        case"Input":
                            i.push({type: "Input", placeholder: t.placeholder, text: t.text, key: t.key});
                            break;
                        case"Custom":
                            i.push({type: "Custom", html: t.html})
                    }
                }), e.push(i)
            }), e
        }

        async insertText(t) {
            const e = t.replace(new RegExp(`${bt}`, "ig"), "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").map(t => [{
                type: "Write",
                text: t
            }]);
            await this.insertNodes(e)
        }

        async insertNodes(t) {
            const {instance: e, offset: i} = this.markCursorWrite;
            if (!e) return;
            const s = e, n = s.context, a = this.NODES.indexOf(n);
            n.splitNode(s, i);
            let o = n.$el, c = null, h = null;
            t.forEach((e, i) => {
                const s = new Gt(this, e, {afterElm: o});
                o = s.$el, 0 === i ? c = s : i === t.length - 1 && (h = s), this.NODES.splice(a + i + 1, 0, s)
            }), c && c.mergeNode(), h ? h.mergeNode(!0) : n.mergeNode(!0), await nt(this, I, j).call(this)
        }

        async insertInputText(t) {
            const {instance: e, offset: i} = this.markCursorInput;
            if (!e) return;
            const s = e, n = t.replace(new RegExp(`${bt}`, "ig"), "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            s.setText(i, n), await nt(this, I, j).call(this)
        }

        splitWrite(t) {
            const {instance: e, offset: i} = this.markCursorWrite;
            if (!e) return null;
            const s = e, n = s.context, a = n.children.indexOf(s);
            return s.splitNode(i, t.del, t.beforeText, t.afterText), {index: a, write: s, grid: n}
        }

        async insertMention(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: n} = e,
                a = new _t(n, {type: "Mention", id: t.id, name: t.name, afterElm: s.$el});
            n.children.splice(i + 1, 0, a), await nt(this, I, j).call(this)
        }

        async insertTrigger(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: n} = e,
                a = new Ft(n, {type: "Trigger", id: t.id, name: t.name, key: t.key, afterElm: s.$el});
            n.children.splice(i + 1, 0, a), await nt(this, I, j).call(this)
        }

        async insertSelect(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: n} = e,
                a = new Yt(n, {type: "Select", id: t.id, name: t.name, key: t.key, afterElm: s.$el});
            n.children.splice(i + 1, 0, a), await nt(this, I, j).call(this)
        }

        async insertInput(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: n} = e,
                a = new Vt(n, {type: "Input", text: t.text, placeholder: t.placeholder, key: t.key, afterElm: s.$el});
            n.children.splice(i + 1, 0, a), a.focus(-1), await nt(this, I, j).call(this)
        }

        async insertCustom(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: n} = e, a = new jt(n, {type: "Custom", html: t.html, afterElm: s.$el});
            n.children.splice(i + 1, 0, a), await nt(this, I, j).call(this)
        }

        async reset(t) {
            if (this.$el.innerHTML = "", this.NODES = t.chatNode.map(t => new Gt(this, t)), t.clearHistory) {
                const t = this.NODES[this.NODES.length - 1], e = t.children[t.children.length - 1];
                this.undoHistory = [{
                    nodes: this.compileNodes(this.NODES),
                    gridIndex: this.NODES.length - 1,
                    childIndex: t.children.length - 1,
                    offset: Boolean(e.text) ? e.text.length : 1,
                    type: "Write"
                }], this.redoHistory = []
            }
            this.markLastType = "Write", await this.chat.nextTick(), this.focusLast(), await nt(this, I, j).call(this, !t.clearHistory)
        }

        destroy() {
            this.bus.offKeyEvent("ChatEditor"), et(this, W).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    A = new WeakMap, W = new WeakMap, I = new WeakSet, R = function () {
        const t = "ChatEditor";
        this.bus.on(t, "richTextChange", async t => {
            await nt(this, I, j).call(this), t && t()
        }), this.bus.on(t, "richTextDelete", async (t, e) => {
            await nt(this, I, P).call(this, t), e && e()
        }), this.bus.on(t, "cursorChange", t => {
            nt(this, I, G).call(this, t)
        }), this.bus.on(t, "lineBreak", async t => {
            await nt(this, I, H).call(this), t && t()
        }), this.bus.on(t, "undo", async t => {
            await nt(this, I, F).call(this), t && t()
        }), this.bus.on(t, "redo", async t => {
            await nt(this, I, Y).call(this), t && t()
        }), this.bus.on(t, "recordHistory", kt(nt(this, I, _), 200).bind(this)), this.bus.on(t, "ruleMaxLength", () => {
            nt(this, I, U).call(this)
        }), this.bus.on(t, "switchDisabledState", t => {
            st(this, A, t)
        }), this.bus.on(t, "insertMention", async (t, e) => {
            await this.insertMention(t), e && e()
        }), this.bus.on(t, "insertTrigger", async (t, e) => {
            await this.insertTrigger(t), e && e()
        }), this.bus.on(t, "insertSelect", async (t, e) => {
            await this.insertSelect(t), e && e()
        }), this.bus.on(t, "insertInput", async (t, e) => {
            await this.insertInput(t), e && e()
        }), this.bus.on(t, "insertCustom", async (t, e) => {
            await this.insertCustom(t), e && e()
        }), this.bus.on(t, "focus", t => {
            switch (t) {
                case"first":
                    this.focusFirst();
                    break;
                case"last":
                    this.focusLast();
                    break;
                case"mark":
                    this.focusMark()
            }
        }), this.bus.on(t, "destroy", () => {
            this.destroy()
        })
    }, B = function () {
        st(this, W, [[this.$el, {
            keydown: t => {
                if (this.isComposition = t.isComposing, this.chat.deviceInfo.isPc || !St(t, "IME")) {
                    if (!this.IME_MODEL) if (this.isComposition || !St(t, "text-backspace") && !St(t, "text-delete")) this.chat.options.keyboardWrapFun(t) || !this.chat.deviceInfo.isPc && "Enter" === t.key ? (t.preventDefault(), t.stopPropagation(), nt(this, I, H).call(this)) : !et(this, A) && this.chat.options.keyboardSendFun(t) ? (t.preventDefault(), t.stopPropagation(), this.isComposition || this.bus.emit("send")) : St(t, "text-select-all") ? (t.preventDefault(), t.stopPropagation(), this.selectAll()) : St(t, "text-move") ? (t.preventDefault(), t.stopPropagation(), this.isComposition || this.cursorMove("ArrowLeft" === t.key || "ArrowLeft" === t.code ? -1 : 1)) : St(t, "text-undo") ? (t.preventDefault(), t.stopPropagation(), nt(this, I, F).call(this)) : St(t, "text-redo") && (t.preventDefault(), t.stopPropagation(), nt(this, I, Y).call(this)); else {
                        t.preventDefault(), t.stopPropagation();
                        const e = St(t, "text-delete");
                        nt(this, I, P).call(this, e)
                    }
                } else this.IME_MODEL = !0
            }, beforeinput: async t => {
                if (!this.IME_MODEL || !["insertParagraph", "deleteContentBackward"].includes(t.inputType)) return;
                t.preventDefault(), t.stopPropagation();
                const e = this.chat.getSelection();
                let i = this.findNode(e.focusNode), s = e.focusOffset;
                if (i || (i = this.findNode(this.markCursorWrite.node), s = this.markCursorWrite.offset), !i) return;
                "Grid" === i.type && (i = i.children[0]), this.FIX_MODEL = !0;
                const n = i, a = this.NODES.indexOf(n.context), o = n.context.children.indexOf(n),
                    c = this.compileNodes(this.NODES);
                this.chat.nextTick(async () => {
                    this.$el.innerHTML = "", this.NODES = c.map(t => new Gt(this, t));
                    this.NODES[a].children[o].focus(s), "insertParagraph" === t.inputType ? await nt(this, I, H).call(this) : "deleteContentBackward" === t.inputType && await nt(this, I, P).call(this), this.IME_MODEL = !1, this.FIX_MODEL = !1
                })
            }, input: () => {
                this.FIX_MODEL || (this.IME_MODEL = !1, nt(this, I, j).call(this))
            }, copy: t => {
                t.stopPropagation(), t.preventDefault(), nt(this, I, K).call(this, t)
            }, cut: t => {
                t.stopPropagation(), t.preventDefault(), nt(this, I, K).call(this, t), nt(this, I, P).call(this)
            }, paste: t => {
                t.stopPropagation(), t.preventDefault(), nt(this, I, z).call(this, t)
            }, blur: () => {
                nt(this, I, G).call(this)
            }, focus: () => {
                nt(this, I, G).call(this)
            }, click: () => {
                this.chat.nextTick(() => {
                    nt(this, I, G).call(this)
                })
            }, compositionstart: () => {
                this.isComposition = !0
            }, compositionend: () => {
                this.isComposition = !1
            }, dragstart: t => {
                t.stopPropagation(), t.preventDefault()
            }, dragover: t => {
                t.stopPropagation(), t.preventDefault()
            }, drop: t => {
                t.stopPropagation(), t.preventDefault()
            }
        }], [window, {
            keydown: t => {
                (St(t, "text-undo") || St(t, "text-redo")) && (t.preventDefault(), t.stopPropagation())
            }
        }]]), et(this, W).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, P = async function (t = !1) {
        const e = this.chat.getSelection(), i = e.anchorNode, s = e.focusNode;
        let n = this.findNode(i), a = this.findNode(s);
        if (n && a) {
            if (n === a) t ? n.delete(e) : n.backspace(e); else if (n.context === a.context) {
                n.context.deleteRangeNode({
                    anchorInstance: n,
                    anchorOffset: e.anchorOffset,
                    focusInstance: a,
                    focusOffset: e.focusOffset
                })
            } else this.deleteRangeNode({
                anchorInstance: n,
                anchorOffset: e.anchorOffset,
                focusInstance: a,
                focusOffset: e.focusOffset
            });
            await nt(this, I, j).call(this)
        }
    }, H = async function () {
        if (this.isComposition) return;
        let t = this.chat.getSelection();
        t.isCollapsed || await nt(this, I, P).call(this), t = this.chat.getSelection();
        const e = t.focusNode, i = this.findNode(e);
        if (i) {
            if ("Write" === i.type) {
                i.context.splitNode(i, t.focusOffset)
            } else "Input" === i.type && i.setText(t.focusOffset, "\n");
            await nt(this, I, j).call(this)
        }
    }, K = function (t) {
        const e = this.chat.getSelection(), i = t.clipboardData;
        if (e.isCollapsed || e.rangeCount <= 0) return;
        const s = e.toString().replace(/\n\n/g, "\n") || "";
        i.setData("text/plain", s);
        let n = this.findNode(e.anchorNode), a = this.findNode(e.focusNode), o = e.anchorOffset, c = e.focusOffset;
        if (!n || !a) return;
        if ("Grid" === n.type && (n = n.children[0], o = Boolean(n.text) ? 0 : 1), "Grid" === a.type && (a = a.children[0], c = Boolean(a.text) ? 0 : 1), n === a) return;
        const h = n.context, r = a.context;
        if (h === r) {
            const t = h.children.indexOf(n), e = r.children.indexOf(a), s = t > e, l = s ? e : t, d = s ? t : e,
                p = h.children.slice(l + 1, d), g = {...s ? a : n}, f = {...s ? n : a}, u = s ? c : o, m = s ? o : c;
            "Write" === g.type && (g.text = g.text.slice(u)), "Write" === f.type && (f.text = f.text.slice(0, m)), p.unshift(g), p.push(f);
            const x = {type: "Grid", children: p}, y = this.compileNodes([x]);
            return void i.setData(vt, JSON.stringify(y))
        }
        const l = n.context, d = a.context, p = this.NODES.indexOf(l), g = this.NODES.indexOf(d);
        let f, u, m, x, y, w, E, v;
        p > g ? (f = d, u = l, m = a, x = n, y = g, w = p, E = c, v = o) : (f = l, u = d, m = n, x = a, y = p, w = g, E = o, v = c);
        const b = f.children.indexOf(m),
            k = this.compileNodes([{type: "Gird", children: f.children.filter((t, e) => e > b)}]);
        "Write" === m.type ? k[0].unshift({
            type: "Write",
            text: Boolean(m.text) ? m.text.slice(E) : ""
        }) : k[0].unshift({...this.compileNodes([{type: "Gird", children: [m]}])[0][0]});
        const N = u.children.indexOf(x),
            C = this.compileNodes([{type: "Gird", children: u.children.filter((t, e) => e < N)}]);
        "Write" === x.type ? C[0].push({
            type: "Write",
            text: Boolean(x.text) ? x.text.slice(0, v) : ""
        }) : C[0].push({...this.compileNodes([{type: "Gird", children: [x]}])[0][0]});
        const O = this.compileNodes(this.NODES.slice(y + 1, w));
        O.unshift(k[0]), O.push(C[0]), i.setData(vt, JSON.stringify(O))
    }, z = async function (t) {
        const e = t.clipboardData, i = e.getData("text/plain");
        if (!i) return;
        if ("Input" === this.markLastType) return void this.insertInputText(i);
        const s = e.getData(vt) || "";
        let n = [];
        try {
            n = JSON.parse(s)
        } catch (a) {
        }
        this.chat.getSelection().isCollapsed || await nt(this, I, P).call(this), n && n.length > 0 ? this.insertNodes(n) : this.insertText(i)
    }, _ = function () {
        if ("Input" === this.markLastType) {
            const {instance: t, offset: e} = this.markCursorInput;
            if (!t) return;
            const i = t, s = i.context;
            this.undoHistory.push({
                nodes: this.compileNodes(this.NODES),
                gridIndex: this.NODES.indexOf(s),
                childIndex: s.children.indexOf(i),
                offset: e,
                type: "Input"
            })
        } else {
            const {instance: t, offset: e} = this.markCursorWrite;
            if (!t) return;
            const i = t, s = i.context;
            this.undoHistory.push({
                nodes: this.compileNodes(this.NODES),
                gridIndex: this.NODES.indexOf(s),
                childIndex: s.children.indexOf(i),
                offset: e,
                type: "Write"
            })
        }
        this.undoHistory.length > 50 && this.undoHistory.shift()
    }, F = async function () {
        if (this.historyLoading || this.undoHistory.length <= 1) return;
        const t = this.undoHistory[this.undoHistory.length - 1], e = this.undoHistory[this.undoHistory.length - 2];
        this.redoHistory.push(t), this.undoHistory.pop(), await nt(this, I, V).call(this, e)
    }, Y = async function () {
        if (this.historyLoading || this.redoHistory.length <= 0) return;
        const t = this.redoHistory[this.redoHistory.length - 1];
        this.redoHistory.pop(), this.undoHistory.push(t), await nt(this, I, V).call(this, t)
    }, V = async function (t) {
        this.historyLoading = !0, this.$el.innerHTML = "", this.NODES = t.nodes.map(t => new Gt(this, t));
        this.NODES[t.gridIndex].children[t.childIndex].focus(t.offset), await nt(this, I, j).call(this, !1), this.historyLoading = !1
    }, j = async function (t = !0) {
        const e = this.chat.getSelection(), i = e.focusNode, s = this.findNode(i);
        return s && nt(this, I, G).call(this, {
            type: s.type,
            node: s.$el.children[0].childNodes[0],
            offset: e.focusOffset,
            instance: s
        }), await this.chat.nextTick(), this.isComposition || (null == s || s.updateNode(), nt(this, I, U).call(this), this.chat.deviceInfo.isPc && t && !this.historyLoading && this.bus.emit("recordHistory")), s && this.cursorView(), this.bus.emit("editorChange"), !this.isComposition && this.chat.deviceInfo.isPc && s && "Write" === s.type && this.bus.emit("matchDialog"), !0
    }, G = function (t) {
        if (!t) {
            const e = this.chat.getSelection(), i = e.focusNode, s = this.findNode(i);
            if (!s) return;
            "Write" === s.type ? t = {
                type: s.type,
                node: s.$el.children[0].childNodes[0],
                offset: e.focusOffset,
                instance: s
            } : "Input" === s.type && (t = {
                type: s.type,
                node: s.$el.children[0].children[0].childNodes[0],
                offset: e.focusOffset,
                instance: s
            })
        }
        if (t) switch (t.type) {
            case"Write":
                this.markCursorWrite.node = t.node, this.markCursorWrite.offset = t.offset, this.markCursorWrite.instance = t.instance, this.markLastType = "Write";
                break;
            case"Input":
                this.markCursorInput.node = t.node, this.markCursorInput.offset = t.offset, this.markCursorInput.instance = t.instance, this.markLastType = "Input"
        }
    }, U = function () {
        const t = this.chat.options.maxLength;
        if (-1 === t) return;
        let e = 0;
        const i = [];
        if (this.NODES.forEach((t, s) => {
            let n = 0;
            n = s > 0 && 1 === t.children.length && 0 === t.children[0].text.length ? 1 : t.$el.textContent.replace(new RegExp(bt, "ig"), "").length, i.push(n), e += n
        }), e > t) {
            const s = e - t;
            let n = 0, a = 0;
            for (let t = i.length - 1; t >= 0; t--) if (n += i[t], n >= s) {
                a = t;
                break
            }
            this.NODES.slice(a + 1).forEach(t => {
                t.deleteNode()
            });
            let o = n - s;
            const c = this.NODES[a];
            if (0 === o && a > 0) {
                c.deleteNode();
                const e = this.NODES[a - 1];
                return e.children[e.children.length - 1].focus(-1), void (this.textLength = t)
            }
            let h = null, r = 0;
            for (let t = 0; t < c.children.length; t++) {
                const e = c.children[t];
                if ("Write" === e.type ? o -= e.text.length : o -= e.$el.textContent.length, o <= 0) {
                    h = e, r = t;
                    break
                }
            }
            if (c.children.slice(r + 1).forEach(t => {
                t.deleteNode()
            }), "Write" === h.type) {
                const e = h;
                e.text = e.text.slice(0, e.text.length - Math.abs(o)), e.syncNode(), e.updateNode(), e.focus(-1), this.textLength = t
            } else {
                const e = c.children[r - 1];
                h.deleteNode(), e.ruleBRTag(), e.focus(-1), this.textLength = t - Math.abs(o)
            }
        } else this.textLength = e
    };

    class Zt {
        constructor() {
            it(this, Z), it(this, X), st(this, Z, Object.create(null)), st(this, X, Object.create(null))
        }

        on(t, e, i) {
            et(this, Z)[e] || (et(this, Z)[e] = Object.create(null)), et(this, X)[t] || (et(this, X)[t] = []), et(this, X)[t].push(e), et(this, Z)[e][t] = i
        }

        emit(...t) {
            const e = t[0], i = t.slice(1), s = et(this, Z)[e];
            if (s) for (const n in s) s[n](...i)
        }

        off(t, e) {
            for (const i in et(this, Z)[e]) if (i + "" == t + "") {
                delete et(this, Z)[e][t], "{}" === JSON.stringify(et(this, Z)[e]) && delete et(this, Z)[e];
                break
            }
        }

        offKeyEvent(t) {
            (et(this, X)[t] || []).forEach(e => {
                this.off(t, e)
            }), delete et(this, X)[t]
        }
    }

    Z = new WeakMap, X = new WeakMap;

    class Xt {
        constructor(t, e) {
            switch (Q(this, "options"), Q(this, "deviceInfo", function () {
                if ("undefined" == typeof navigator) return {
                    isTablet: !1,
                    isPhone: !1,
                    isAndroid: !1,
                    isIOS: !1,
                    isPc: !0,
                    isIPhone: !1,
                    isIPad: !1,
                    isWindows: !1,
                    isMacOS: !1,
                    isLinux: !1,
                    isWechat: !1,
                    isMobile: !1
                };
                const t = navigator.userAgent.toLowerCase(), e = t.includes("windows"), i = t.includes("macintosh"),
                    s = t.includes("linux") && !t.includes("android"), n = t.includes("android"),
                    a = /iphone|ipad|ipod/.test(t), o = t.includes("iphone"),
                    c = t.includes("ipad") || t.includes("macintosh") && navigator.maxTouchPoints > 1,
                    h = t.includes("micromessenger"),
                    r = c || n && !/mobile/.test(t) || t.includes("firefox") && t.includes("tablet") || t.includes("playbook"),
                    l = o && !r || n && /mobile/.test(t) || t.includes("windows phone");
                return {
                    isTablet: r,
                    isPhone: l,
                    isAndroid: n,
                    isIOS: a,
                    isPc: !l && !r && (e || i || s),
                    isIPhone: o,
                    isIPad: c,
                    isWindows: e,
                    isMacOS: i,
                    isLinux: s,
                    isWechat: h,
                    isMobile: l || r
                }
            }()), Q(this, "chatElement"), Q(this, "chatEditor"), Q(this, "bus"), this.options = Object.assign({}, ct, e || {}, {mentionConfig: void 0}), this.deviceInfo.isTablet && (this.deviceInfo.isPc = !1), this.options.device) {
                case"pc":
                    this.deviceInfo.isPc = !0;
                    break;
                case"h5":
                    this.deviceInfo.isPc = !1
            }
            this.bus = new Zt, this.chatElement = new Pt(t, this), this.chatEditor = new Ut(this), this.updateConfig(e)
        }

        updateConfig(t) {
            Ct(t.placeholder) && this.chatElement.updatePlaceholder(t.placeholder), Ct(t.chatStyle) && this.chatElement.updateChatStyle(t.chatStyle), Ct(t.maxLength) && (this.options.maxLength = t.maxLength <= 0 ? -1 : t.maxLength, this.bus.emit("ruleMaxLength")), Ct(t.keyboardWrapFun) && (this.options.keyboardWrapFun = t.keyboardWrapFun), Ct(t.keyboardSendFun) && (this.options.keyboardSendFun = t.keyboardSendFun), Ct(t.mentionConfig) && (this.options.mentionConfig = Object.assign({}, this.options.mentionConfig || ht, t.mentionConfig), this.chatElement.createMentionDialog()), Ct(t.triggerConfig) && (this.options.triggerConfig = t.triggerConfig.map(t => (t.keyMap || (t.keyMap = rt[t.key] || []), t)), this.chatElement.createTriggerDialog()), Ct(t.selectConfig) && (this.options.selectConfig = t.selectConfig, this.chatElement.createSelectDialog()), Ct(t.tipConfig) && (this.options.tipConfig = Object.assign({}, lt, t.tipConfig), this.chatElement.createBeforeTip())
        }

        async nextTick(t) {
            return new Promise(e => {
                requestAnimationFrame(() => {
                    if (!t) return void e();
                    const i = t();
                    i instanceof Promise ? i.then(() => {
                        e()
                    }) : e()
                })
            })
        }

        getSelection() {
            return window.getSelection()
        }

        getHtml(t) {
            const e = Object.assign({}, {saveTagData: !1, identifyLink: !1}, t || {}),
                i = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,
                s = this.chatEditor.compileNodes(this.chatEditor.NODES);
            let n = "", a = "";
            return s.forEach(t => {
                let s = '<p class="chat-tag-grid">';
                t.forEach(t => {
                    let n = "<span ";
                    switch (t.type) {
                        case"Mention":
                            n += 'class="chat-tag-mention"', e.saveTagData && (n += ` data-id="${t.id}"`), n += `>@${Dt(t.name)}`;
                            break;
                        case"Trigger":
                            n += 'class="chat-tag-trigger"', e.saveTagData && (n += ` data-id="${t.id}" data-key=${t.key}`), n += `>${t.key}${Dt(t.name)}`;
                            break;
                        case"Select":
                            n += 'class="chat-tag-select"', e.saveTagData && (n += ` data-id="${t.id}" data-key=${t.key}`), n += `>${Dt(t.name)}`;
                            break;
                        case"Input":
                            n += 'class="chat-tag-input"', e.saveTagData && (n += ` data-placeholder="${t.placeholder}" data-key=${t.key}`), n += `>${Dt(t.text || t.placeholder)}`;
                            break;
                        case"Custom":
                            n += 'class="chat-tag-custom"', n += `>${t.html}`;
                            break;
                        case"Write":
                            n += 'class="chat-tag-write"', a = Dt(t.text), e.identifyLink ? n += `>${a.replace(i, t => `<a class="chat-tag-link" href="${t}" target="_blank">${t}</a>`)}` : n += `>${a}`
                    }
                    n += "</span>", s += n
                }), s += "</p>", n += s
            }), n
        }

        getText() {
            let t = "";
            return this.chatEditor.NODES.forEach((e, i) => {
                0 !== i && (t += "\n"), t += e.$el.textContent
            }), t.replace(new RegExp(`${bt}|${"​\n​"[0]}`, "ig"), "")
        }

        getTagData() {
            const t = {mention: [], trigger: {}, select: {}, input: {}},
                e = {mention: new Map, trigger: {}, select: {}};
            return this.chatEditor.compileNodes(this.chatEditor.NODES).forEach(i => {
                i.forEach(i => {
                    switch (i.type) {
                        case"Mention":
                            e.mention.set(i.id, {id: i.id, name: i.name});
                            break;
                        case"Trigger":
                            e.trigger[i.key] || (e.trigger[i.key] = new Map), e.trigger[i.key].set(i.id, {
                                id: i.id,
                                name: i.name
                            });
                            break;
                        case"Select":
                            e.select[i.key] || (e.select[i.key] = new Map), e.select[i.key].set(i.id, {
                                id: i.id,
                                name: i.name
                            });
                            break;
                        case"Input":
                            t.input[i.key] || (t.input[i.key] = []), t.input[i.key].push({
                                text: i.text || "",
                                placeholder: i.placeholder || ""
                            })
                    }
                })
            }), t.mention = Array.from(e.mention.values()), Object.keys(e.trigger).forEach(i => {
                t.trigger[i] = Array.from(e.trigger[i].values())
            }), Object.keys(e.select).forEach(i => {
                t.select[i] = Array.from(e.select[i].values())
            }), t
        }

        setLineBreak() {
            return new Promise(t => {
                this.bus.emit("lineBreak", t)
            })
        }

        async setHtml(t) {
            await this.chatEditor.insertCustom({html: `<span style="display: inline-block;">${Tt(t)}</span>`})
        }

        async setText(t) {
            switch (this.chatEditor.markLastType) {
                case"Write":
                    await this.chatEditor.insertText(t);
                    break;
                case"Input":
                    await this.chatEditor.insertInputText(t)
            }
        }

        async setMention(t) {
            await this.chatEditor.insertMention(t)
        }

        async setTrigger(t) {
            await this.chatEditor.insertTrigger(t)
        }

        async setSelect(t) {
            await this.chatEditor.insertSelect(t)
        }

        async setInput(t) {
            await this.chatEditor.insertInput(t)
        }

        async setChatNode(t) {
            await this.chatEditor.insertNodes(t)
        }

        removeMention(t) {
            return new Promise(e => {
                const i = [];
                this.chatEditor.NODES.forEach(e => {
                    e.children.forEach(e => {
                        const s = e;
                        "Mention" !== s.type || t && !t.includes(s.id) || i.push(s)
                    })
                }), i.forEach(t => {
                    t.deleteRelevanceNode()
                }), this.bus.emit("richTextChange", e)
            })
        }

        removeTrigger(t, e) {
            return new Promise(i => {
                const s = [];
                this.chatEditor.NODES.forEach(i => {
                    i.children.forEach(i => {
                        const n = i;
                        "Trigger" !== n.type || n.key !== t || e && !e.includes(n.id) || s.push(n)
                    })
                }), s.forEach(t => {
                    t.deleteRelevanceNode()
                }), this.bus.emit("richTextChange", i)
            })
        }

        removeSelect(t, e) {
            return new Promise(i => {
                const s = [];
                this.chatEditor.NODES.forEach(i => {
                    i.children.forEach(i => {
                        const n = i;
                        "Select" !== n.type || n.key !== t || e && !e.includes(n.id) || s.push(n)
                    })
                }), s.forEach(t => {
                    t.deleteRelevanceNode()
                }), this.bus.emit("richTextChange", i)
            })
        }

        removeInput(t) {
            return new Promise(e => {
                const i = [];
                this.chatEditor.NODES.forEach(e => {
                    e.children.forEach(e => {
                        const s = e;
                        "Input" === s.type && s.key === t && i.push(s)
                    })
                }), i.forEach(t => {
                    t.deleteRelevanceTag()
                }), this.bus.emit("richTextChange", e)
            })
        }

        async reverseHtml(t, e = !1) {
            let i = document.createElement("div");
            i.innerHTML = t;
            const s = [];
            Array.from(i.children, t => {
                const e = [];
                Array.from(t.children, t => {
                    const i = t;
                    switch (i.className) {
                        case"chat-tag-write":
                            e.push({type: "Write", text: i.textContent});
                            break;
                        case"chat-tag-mention":
                            e.push({type: "Mention", id: i.dataset.id || "", name: (i.textContent || "").slice(1)});
                            break;
                        case"chat-tag-trigger":
                            e.push({
                                type: "Trigger",
                                key: i.dataset.key || "",
                                id: i.dataset.id || "",
                                name: (i.textContent || "").slice(1)
                            });
                            break;
                        case"chat-tag-select":
                            e.push({
                                type: "Select",
                                key: i.dataset.key || "",
                                id: i.dataset.id || "",
                                name: i.textContent
                            });
                            break;
                        case"chat-tag-input":
                            e.push({
                                type: "Input",
                                key: i.dataset.key || "",
                                text: i.textContent,
                                placeholder: i.dataset.placeholder || ""
                            });
                            break;
                        case"chat-tag-custom":
                            e.push({type: "Custom", html: i.innerHTML})
                    }
                }), s.push(e)
            }), e ? (this.chatEditor.focusLast(), await this.chatEditor.insertNodes(s)) : await this.chatEditor.fixEditor(s)
        }

        undo() {
            return new Promise(t => {
                this.bus.emit("undo", t)
            })
        }

        redo() {
            return new Promise(t => {
                this.bus.emit("redo", t)
            })
        }

        move(t) {
            this.chatEditor.focusMark(), 0 !== t && this.chatEditor.cursorMove(t)
        }

        backspace(t) {
            return new Promise(e => {
                if (this.chatEditor.focusMark(), 0 === t) return e();
                const i = this.getSelection(), s = i.focusNode, n = i.focusOffset;
                this.chatEditor.cursorMove(t);
                const a = this.getSelection(), o = a.focusNode, c = a.focusOffset, h = new Range, r = t < 0;
                r ? (h.setStart(o, c), h.setEnd(s, n)) : (h.setStart(s, n), h.setEnd(o, c)), a.removeAllRanges(), a.addRange(h), this.bus.emit("richTextDelete", !r, e)
            })
        }

        focus(t = "last") {
            this.bus.emit("focus", t)
        }

        disable() {
            this.chatElement.richText.setAttribute("contenteditable", "false"), this.chatElement.rollBox.classList.add("disabled")
        }

        enable() {
            this.chatElement.richText.setAttribute("contenteditable", "true"), this.chatElement.rollBox.classList.remove("disabled"), this.focus()
        }

        async reset(t) {
            const e = Object.assign({}, {clearHistory: !0, chatNode: [[{type: "Write", text: ""}]]}, t || {});
            await this.chatEditor.reset(e)
        }

        isEmpty(t = !0) {
            if (t) return 0 === this.getText().trim().length;
            const e = this.chatEditor.NODES;
            return !(e.length > 1) && (!(e[0].children.length > 1) && e[0].children[0].text.length <= 0)
        }

        destroy() {
            this.bus.emit("destroy");
            for (const t in this) delete this[t];
            Object.setPrototypeOf(this, Object.create(null))
        }

        showSelectPopup(t, e) {
            this.bus.emit("activeSelect", {key: t, $el: e})
        }

        showTip(t) {
            this.bus.emit("openTip", t)
        }

        closeTip() {
            this.bus.emit("closeTip")
        }

        getCurrentNode() {
            switch (this.chatEditor.markLastType) {
                case"Input":
                    return this.chatEditor.markCursorInput;
                case"Write":
                    return this.chatEditor.markCursorWrite
            }
        }
    }

    return Q(Xt, "version", "1.1.2"), Xt
});
