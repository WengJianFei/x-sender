!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).XSender = e()
}(this, function () {
    "use strict";
    var t, e, i, s, a, n, o, c, h, r, l, d, p, g, u, f, m, x, y, w, v, b, E, k, C, N, O, D, T, S, L, $, M, A, W, I, R,
        B, P, H, K, z, _, F, Y, j, V, G, U, Z, q, X, J, Q, tt, et, it, st = Object.defineProperty, at = t => {
            throw TypeError(t)
        }, nt = (t, e, i) => ((t, e, i) => e in t ? st(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : t[e] = i)(t, "symbol" != typeof e ? e + "" : e, i), ot = (t, e, i) => e.has(t) || at("Cannot " + i),
        ct = (t, e, i) => (ot(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
        ht = (t, e, i) => e.has(t) ? at("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i),
        rt = (t, e, i, s) => (ot(t, e, "write to private field"), s ? s.call(t, i) : e.set(t, i), i),
        lt = (t, e, i) => (ot(t, e, "access private method"), i), dt = document.createElement("style");
    dt.textContent = ':root{--chat-primary: #1890ff;--chat-disabled: #e8e8e8;--chat-highlight: #40A9FF;--chat-text: #333;--chat-text-assistant: #666;--chat-text-secondary: #ccc;--chat-text-placeholder: #bfbfbf;--chat-box: #fff;--chat-box-shadow: 1px 3px 10px 2px rgba(6, 21, 50, .2);--chat-box-mark: rgba(0, 0, 0, .5);--chat-input: #FFFFFF;--chat-input-border: #D9D9D9;--chat-input-shadow-color: rgba(24, 144, 255, .2);--chat-card: #F2F6FC;--chat-highlight-card: #E6F7FF;--chat-popover: #000;--chat-popover-text: #fff;--chat-rect-padding: 10px;--chat-before-tip-width: 0px;--chat-before-tip-top: 0px;--chat-tip-dialog-top: 0px;--chat-tip-dialog-left: 0px}@-webkit-keyframes antSpinMove{to{opacity:1}}@keyframes antSpinMove{to{opacity:1}}@-webkit-keyframes antRotate{to{transform:rotate(405deg)}}@keyframes antRotate{to{transform:rotate(405deg)}}.ant-spin{font-size:14px;line-height:1.5;list-style:none;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";position:absolute;display:none;text-align:center;vertical-align:middle;opacity:0;transition:transform .3s cubic-bezier(.78,.14,.15,.86)}.ant-spin .ant-spin-dot{position:relative;display:inline-block;font-size:20px;width:1em;height:1em}.ant-spin .ant-spin-dot-spin{transform:rotate(45deg);animation-name:antRotate;animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear}.ant-spin .ant-spin-dot-item{position:absolute;display:block;width:9px;height:9px;background-color:var(--chat-primary);border-radius:100%;transform:scale(.75);transform-origin:50% 50%;opacity:.3;animation-name:antSpinMove;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-direction:alternate}.ant-spin .ant-spin-dot-item:nth-child(1){top:0;inset-inline-start:0}.ant-spin .ant-spin-dot-item:nth-child(2){top:0;inset-inline-end:0;animation-delay:.4s}.ant-spin .ant-spin-dot-item:nth-child(3){inset-inline-end:0;bottom:0;animation-delay:.8s}.ant-spin .ant-spin-dot-item:nth-child(4){bottom:0;inset-inline-start:0;animation-delay:1.2s}.ant-spin-spinning{position:static;display:inline-block;opacity:1}.chat-area-wrap{position:relative;z-index:10;font-size:16px}.chat-area-wrap *{margin:0;padding:0;box-sizing:border-box;outline:none;text-indent:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.chat-rich-text{position:relative;width:100%;padding:var(--chat-rect-padding);margin:0;background:transparent;box-sizing:border-box;overflow-x:hidden;overflow-y:auto;font-size:16px;color:var(--chat-text);vertical-align:text-bottom;white-space:pre-wrap;word-break:break-all}.chat-rich-text.disabled{cursor:not-allowed}.chat-rich-text.disabled *{pointer-events:none}.chat-rich-text .chat-grid-wrap:first-child>*:first-child{padding-left:var(--chat-before-tip-width)}.chat-dialog-wrap{position:absolute;top:0;left:0;z-index:21;width:100%;height:0;pointer-events:none}@keyframes chat-dialog-show{0%{transform:scale(.6);opacity:.4}to{opacity:1;transform:scale(1)}}.chat-dialog-wrap .chat-mention-dialog-wrap{position:absolute;z-index:11;border-radius:4px;padding:4px;overflow:hidden;background:var(--chat-box);box-shadow:var(--chat-box-shadow);pointer-events:visible}.chat-dialog-wrap .chat-mention-dialog-wrap.chat-view-show{animation:chat-dialog-show .2s ease}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-header{padding:6px 4px;width:100%;color:var(--chat-text);font-weight:700;font-size:14px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main{min-width:180px;max-height:240px;overflow-y:auto}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item{display:flex;align-items:center;color:var(--chat-text-secondary);background:transparent;cursor:pointer;padding:4px;transition:all .3s ease;font-weight:700;font-size:14px;border-radius:4px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;margin-right:8px;border-radius:4px;overflow:hidden;background:var(--chat-primary);color:var(--chat-box);white-space:nowrap;font-size:12px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar.have-avatar{background:var(--chat-box)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar.have-avatar img{width:100%;height:100%;object-fit:cover}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar .chat-mention-dialog-item-avatar-loading{position:relative;top:2px;transform:scale(.75)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-avatar .chat-mention-dialog-item-avatar-text{position:relative;top:-1px;transform:scale(.75);font-size:12px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item .chat-mention-dialog-item-name{flex:1;white-space:nowrap;line-height:24px;overflow:hidden;text-overflow:ellipsis;padding-right:10px;font-size:14px;transition:all .3s ease;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item:hover{background:var(--chat-card);opacity:.7}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item:hover .chat-mention-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item.active{background:var(--chat-card);opacity:1}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-main .chat-mention-dialog-item.active .chat-mention-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-empty{display:flex;align-items:center;flex-direction:column;justify-content:center;padding:10px 0}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-empty .match-empty-svg{width:auto;height:40px;margin-bottom:2px}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-empty .empty-label{font-size:12px;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-mention-dialog-wrap .chat-mention-dialog-loading{display:flex;align-items:center;flex-direction:column;justify-content:center;padding:16px}.chat-dialog-wrap .chat-trigger-dialog-wrap{position:absolute;z-index:10;border-radius:4px;padding:4px;overflow:hidden;background:var(--chat-box);box-shadow:var(--chat-box-shadow);pointer-events:visible}.chat-dialog-wrap .chat-trigger-dialog-wrap.chat-view-show{animation:chat-dialog-show .2s ease}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-header{padding:6px 4px;width:100%;color:var(--chat-text);font-weight:700;font-size:14px}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main{min-width:180px;max-height:240px;overflow-y:auto}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item{display:flex;align-items:center;color:var(--chat-text-secondary);background:transparent;cursor:pointer;padding:4px;transition:all .3s ease;font-weight:700;font-size:14px;border-radius:4px}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item .chat-trigger-dialog-item-name{flex:1;white-space:nowrap;line-height:24px;overflow:hidden;text-overflow:ellipsis;padding-right:10px;font-size:14px;transition:all .3s ease;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item:hover{background:var(--chat-card);opacity:.7}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item:hover .chat-trigger-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item.active{background:var(--chat-card);opacity:1}.chat-dialog-wrap .chat-trigger-dialog-wrap .chat-trigger-dialog-main .chat-trigger-dialog-item.active .chat-trigger-dialog-item-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-select-dialog-wrap{position:fixed;z-index:21;padding:4px;border-radius:4px;box-sizing:border-box;background:var(--chat-box);box-shadow:var(--chat-box-shadow);pointer-events:visible}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-header{display:flex;align-items:center;justify-content:space-between;background:var(--chat-box);padding:6px;color:var(--chat-text);font-weight:700;font-size:14px}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search{margin-bottom:6px;display:flex;flex-direction:column;align-items:center;justify-content:center}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-input{width:calc(100% - 12px);padding:4px 10px;height:32px;font-size:14px;color:var(--chat-text);line-height:1.5;border-width:1px;border-style:solid;border-color:var(--chat-input-border);border-radius:6px;outline:none;transition:border-color .3s cubic-bezier(.645,.045,.355,1),box-shadow .3s cubic-bezier(.645,.045,.355,1);background:var(--chat-input)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-input::-moz-placeholder{color:var(--chat-text-placeholder);opacity:1}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-input:-ms-input-placeholder{color:var(--chat-text-placeholder)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-input::-webkit-input-placeholder{color:var(--chat-text-placeholder)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-input:hover{border-color:var(--chat-highlight)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-input:focus,.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-input:active{border-color:var(--chat-primary);box-shadow:0 0 0 2px var(--chat-input-shadow-color)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-empty{display:flex;align-items:center;flex-direction:column;justify-content:center;padding:10px 0}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-empty .match-empty-svg{width:auto;height:40px;margin-bottom:2px}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-search .chat-select-dialog-search-empty .empty-label{font-size:12px;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main{position:relative;z-index:3;max-height:280px;overflow-y:auto}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item{display:flex;align-items:center;min-width:180px;color:var(--chat-text-secondary);background:transparent;cursor:pointer;padding:8px;transition:all .3s ease;font-weight:700;font-size:14px;border-radius:6px;min-height:42px}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-preview{flex-shrink:0;width:42px;height:42px;border-radius:6px;margin-right:12px}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-preview.loading{display:flex;align-items:center;justify-content:center}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-preview.loading .ant-spin{position:relative;top:2px;transform:scale(.75)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-name{flex:1;transition:all .3s ease;color:var(--chat-text-secondary)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item .chat-select-dialog-check{flex-shrink:0;display:inline-block;margin-left:6px;font-size:18px;color:var(--chat-primary)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item:hover{background:var(--chat-card);opacity:.8}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-main .chat-select-dialog-item:hover .chat-select-dialog-name{color:var(--chat-primary)}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-arrow{position:absolute;z-index:2;pointer-events:none;width:16px;height:16px;overflow:hidden}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-arrow:before{box-sizing:border-box;background:var(--chat-box);position:absolute;bottom:0;inset-inline-start:0;width:16px;height:8px;-webkit-clip-path:path("M 0 8 A 4 4 0 0 0 2.828 6.828 L 6.586 3.071 A 2 2 0 0 1 9.414 3.071 L 13.172 6.828 A 4 4 0 0 0 16 8 Z");clip-path:path("M 0 8 A 4 4 0 0 0 2.828 6.828 L 6.586 3.071 A 2 2 0 0 1 9.414 3.071 L 13.172 6.828 A 4 4 0 0 0 16 8 Z");content:""}.chat-dialog-wrap .chat-select-dialog-wrap .chat-select-dialog-arrow:after{box-sizing:border-box;content:"";position:absolute;width:9px;height:9px;bottom:0;inset-inline:0;margin:auto;border-radius:0 0 2px;transform:translateY(50%) rotate(-135deg);box-shadow:var(--chat-box-shadow);z-index:0;background:transparent;opacity:.25}.chat-scroll{overflow-y:auto;overflow-x:hidden}.chat-scroll::-webkit-scrollbar{width:6px;height:6px}.chat-scroll::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #61b8b31a;background-color:#0003}.chat-scroll::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #57afbb1a;border-radius:10px;background:#ededed}.chat-placeholder-wrap{position:absolute;top:0;left:0;width:100%;margin:0;padding:var(--chat-rect-padding) var(--chat-rect-padding) var(--chat-rect-padding) calc(var(--chat-rect-padding) + var(--chat-before-tip-width));box-sizing:border-box;color:var(--chat-text-placeholder);pointer-events:none;font-style:oblique;word-break:break-all;z-index:11}.chat-write-wrap,.chat-write-input{word-break:break-all}.chat-tag-grid{word-break:break-all;white-space:pre-wrap}.chat-tag-wrap{margin:0 1px;white-space:normal}.chat-tag-mention,.chat-tag-trigger{color:var(--chat-primary)}.chat-tag-select{display:inline-block;cursor:pointer;background:var(--chat-card);color:var(--chat-primary);padding:2px 6px;border-radius:10px;margin:2px;transition:all .3s ease}.chat-tag-select svg{margin-left:4px;font-size:12px;transition:all .3s ease}.chat-tag-select:hover{color:var(--chat-highlight);background:var(--chat-highlight-card)}.chat-tag-select.active svg{transform:rotate(-180deg)}.chat-tag-input{padding:2px 6px;border-radius:4px;margin:0 2px;color:var(--chat-primary);cursor:text;background:var(--chat-card);line-height:1.8}.chat-tag-input .input-write{white-space:pre-wrap;word-break:break-all;word-wrap:break-word;padding-left:.1px}.chat-tag-input .input-tip{pointer-events:none;-webkit-user-select:none;user-select:none;opacity:.35;word-break:break-all}.chat-tag-component{white-space:normal}.chat-before-tip-wrap{position:absolute;top:0;left:0;height:0;transform:translateY(var(--chat-before-tip-top));z-index:11;padding:var(--chat-rect-padding);pointer-events:none}.chat-before-tip-wrap>*{pointer-events:visible}.chat-before-tip-wrap.tip-hover .chat-before-tip-box{background:var(--chat-card)}.chat-before-tip-wrap.tip-hover .chat-before-tip-close{opacity:1}.chat-before-tip-wrap .chat-before-tip-box{cursor:pointer;padding:2px 6px;color:var(--chat-primary);border-radius:8px;transition:background .3s ease;font-size:18px;font-weight:700}.chat-before-tip-wrap .chat-before-tip-close{position:absolute;top:4px;right:4px;width:16px;height:16px;cursor:pointer;color:#999;transition:opacity .3s ease;opacity:0}.chat-tip-dialog-wrap{position:absolute;bottom:100%;transform:translate(var(--chat-tip-dialog-left),var(--chat-tip-dialog-top));pointer-events:none}.chat-tip-dialog-wrap>*{pointer-events:visible}.chat-tip-dialog-wrap .chat-tip-dialog-main{display:flex;align-items:center;color:var(--chat-popover-text);font-size:13px;padding:8px 10px;background:var(--chat-popover);border-radius:8px}.chat-tip-dialog-wrap .chat-tip-dialog-main .chat-tip-dialog-code{margin-left:4px;opacity:.7;font-size:12px}.chat-tip-dialog-wrap .chat-tip-dialog-arrow{position:absolute;width:10px;height:10px;bottom:-5px;left:50%;transform:translate(-50%) rotate(-45deg);overflow:hidden;background:var(--chat-popover);z-index:2}\n/*$vite$:1*/', document.head.appendChild(dt);
    const pt = '<div class="ant-spin ant-spin-spinning" aria-live="polite" aria-busy="true"><span class="ant-spin-dot ant-spin-dot-spin"><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i></span></div>',
        gt = '<svg class="match-empty-svg" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fill-rule="nonzero" stroke="#d9d9d9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path></g></g></svg>',
        ut = {
            device: "auto",
            autoFocus: !0,
            placeholder: "",
            maxLength: -1,
            keyboardWrapFun: t => t.ctrlKey && ["Enter"].includes(t.key),
            keyboardSendFun: t => !t.ctrlKey && ["Enter"].includes(t.key)
        }, ft = {
            dialogTitle: "群成员",
            callEvery: !0,
            everyText: "所有人",
            asyncMatch: void 0,
            emptyText: "暂无数据",
            options: []
        }, mt = {
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
        }, xt = {
            tipTemplate: '<div class="chat-before-tip-box">{{text}}</div><div class="chat-before-tip-close"><svg focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" fill-rule="evenodd" viewBox="64 64 896 896"><path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path></svg></div>',
            dialogTemplate: '<div class="chat-tip-dialog-main"><span>{{dialogText}}</span><span class="chat-tip-dialog-code">ESC</span></div><div class="chat-tip-dialog-arrow"></div>',
            closeNames: ["chat-before-tip-box", "chat-before-tip-close"],
            offsetTop: 0
        }, yt = "data-set-empty", wt = "data-set-richType", vt = "richGrid", bt = "richMark", Et = "richWrite",
        kt = "richMention", Ct = "richTrigger", Nt = "richSelect", Ot = "richInput", Dt = "richCustom",
        Tt = "richComponent", St = "application/chat-nodes", Lt = "\ufeff", $t = (t, e, i = !1) => {
            let s;
            return function (...a) {
                const n = this, o = i && !s;
                clearTimeout(s), s = setTimeout(() => {
                    s = null, i || t.apply(n, a)
                }, e), o && t.apply(n, a)
            }
        }, Mt = (t, e) => {
            let i;
            return function (...s) {
                const a = this;
                i || (t.apply(a, s), i = !0, setTimeout(function () {
                    i = !1
                }, e))
            }
        }, At = t => null != t, Wt = (t, e) => t.replace(/{{(\w+)}}/g, (t, i) => void 0 !== e[i] ? e[i] : t);

    function It(t) {
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

    const Rt = t => {
        const e = ["address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tfoot", "ul"],
            i = new RegExp(`<(${e.join("|")})([^>]*?)>`, "gi"), s = new RegExp(`</(${e.join("|")})>`, "gi");
        let a = t.replace(i, (t, e, i) => {
            let s = "", a = "";
            if (i) {
                const t = i.match(/style\s*=\s*["']([^"']*)["']/i);
                if (t) {
                    const e = t[1];
                    s = e.match(/display\s*:/i) ? `style="${e.replace(/display\s*:.*?;/gi, "display:block;")}"` : `style="display:block;${e}"`, a = i.replace(/style\s*=\s*["']([^"']*)["']/i, "").trim()
                } else s = 'style="display:block"', a = i.trim()
            } else s = 'style="display:block"';
            return `<span ${[a, s].filter(Boolean).join(" ")}>`.replace(/\s+/g, " ").replace(/ >/, ">")
        });
        return a = a.replace(s, "</span>"), a
    };

    function Bt(t, e) {
        switch (e) {
            case"text-jump":
                return "Tab" === t.key || "Tab" === t.code;
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

    function Pt(t, e, i) {
        const s = e.split(/\s+/), a = t.split("").map((t, i) => {
            let a = s[i] || "";
            return "" === e && "" === a && (a = t), {
                char: t,
                pinyin: a.toLowerCase(),
                initial: a ? a[0].toLowerCase() : ""
            }
        }), n = (t => {
            const e = [];
            let i = "";
            for (const s of t) /[a-zA-Z]/.test(s) ? i += s.toLowerCase() : (i && (e.push({
                type: "pinyin",
                value: i
            }), i = ""), e.push({type: "char", value: s}));
            return i && e.push({type: "pinyin", value: i}), e
        })(i), o = a.length, c = n.length, h = Array.from({length: o + 1}, () => Array(c + 1).fill(!1));
        h[0][0] = !0;
        for (let r = 0; r <= o; r++) for (let t = 0; t <= c; t++) if (h[r][t] && t < c) {
            const e = n[t];
            for (let i = r; i < o; i++) {
                const s = a[i];
                if ("char" === e.type) s.char === e.value && (h[i + 1][t + 1] = !0); else {
                    const n = s.pinyin.toLowerCase(), c = s.initial, r = e.value;
                    if (r === c) h[i + 1][t + 1] = !0; else if (r === n) h[i + 1][t + 1] = !0; else if (Ht(r, n)) h[i + 1][t + 1] = !0; else for (let e = 2; e <= o - i; e++) {
                        const s = a.slice(i, i + e), n = s.map(t => t.pinyin.toLowerCase()).join(""),
                            o = s.map(t => t.initial).join("");
                        if (r === n || r === o || Ht(r, n)) {
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

    function Ht(t, e) {
        let i = 0, s = 0;
        for (; i < t.length && s < e.length;) t[i] === e[s] && i++, s++;
        return i === t.length
    }

    function Kt(t, e = !0, i = "block") {
        t && (t.className = t.className.replace(/ chat-view-show| chat-view-hidden/g, ""), e ? (t.style.display = i, t.className += " chat-view-show") : (t.className += " chat-view-hidden", t.style.display = "none"))
    }

    function zt(t) {
        return t && t.classList.contains("chat-view-show")
    }

    class _t {
        constructor(n, o) {
            ht(this, e), nt(this, "chatElement"), nt(this, "bus"), nt(this, "dialog"), nt(this, "activeMention", null), nt(this, "title", ""), nt(this, "callEvery", !0), nt(this, "everyText", ""), nt(this, "emptyText", ""), nt(this, "options", []), nt(this, "asyncMatch"), nt(this, "matchKey", 0), ht(this, t, []), this.dialog = document.createElement("div"), this.chatElement = n, this.bus = this.chatElement.chat.bus, lt(this, e, i).call(this), lt(this, e, s).call(this), lt(this, e, a).call(this), this.updateConfig(o)
        }

        updateConfig(t) {
            this.asyncMatch = t.asyncMatch, this.title = t.dialogTitle, this.emptyText = t.emptyText, this.everyText = t.everyText, this.callEvery = !this.asyncMatch && t.callEvery, this.options = this.asyncMatch ? [] : t.options, this.updateRender()
        }

        updateRender() {
            this.dialog.children[0].textContent = this.title, this.dialog.children[2].innerHTML = `${gt}<span class="empty-label">${this.emptyText}</span>`;
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
            e.setAttribute("data-id", t.id), e.setAttribute("data-name", t.name), e.classList.add("chat-mention-dialog-item"), Kt(e, !0, "flex");
            const i = document.createElement("div");
            if (i.classList.add("chat-mention-dialog-item-avatar"), t.avatar) {
                i.classList.add("have-avatar");
                const e = document.createElement("div");
                e.classList.add("chat-mention-dialog-item-avatar-loading"), e.innerHTML = pt, i.appendChild(e);
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
                    s = i.node.textContent.slice(0, i.offset).lastIndexOf("@"), a = i.offset - s;
                this.bus.emit("insertMention", {
                    id: e.getAttribute("data-id"),
                    name: e.getAttribute("data-name"),
                    del: a > 0 ? a : 0
                }), this.closeDialog()
            }), e
        }

        openDialog(t) {
            if (zt(this.dialog) || this.bus.emit("closeDialog"), this.asyncMatch) {
                this.options = [], this.updateRender();
                const t = this.dialog.children[2], e = this.dialog.children[3];
                Kt(t, !1), Kt(e, !0, "flex"), Kt(this.dialog), this.moveDialog(), this.bus.emit("switchDisabledState", !0)
            } else if (this.options.length > 0) {
                const e = this.dialog.children[1];
                let i;
                e.scrollTop = 0;
                const s = (t || this.pinyinMatchDialog()).map(t => t.id);
                Array.from(e.children, t => {
                    const e = t.getAttribute("data-id");
                    s.includes(e) ? (Kt(t, !0, "flex"), i || (i = t)) : Kt(t, !1)
                }), this.switchActiveMention(i || e.children[0]), Kt(this.dialog), this.moveDialog(), this.bus.emit("switchDisabledState", !0)
            }
        }

        closeDialog() {
            zt(this.dialog) && (Kt(this.dialog, !1), this.switchActiveMention(), this.bus.emit("switchDisabledState", !1))
        }

        moveDialog() {
            const t = this.chatElement.chat.getSelection().getRangeAt(0).getBoundingClientRect(),
                e = this.chatElement.dialogRoot.getBoundingClientRect();
            let i = "0", s = "100%", a = t.x - e.x, n = e.y - t.y;
            const {clientWidth: o, clientHeight: c} = this.dialog;
            t.x > window.innerWidth - o - 30 && (a = t.x - o - e.x - 16, i = "100%"), t.y < c && (n -= c, s = "0"), this.dialog.style.transform = "translate(0, 0)", this.dialog.style.transformOrigin = `${i} ${s}`, this.dialog.style.left = a + 6 + "px", this.dialog.style.bottom = `${n}px`, this.dialog.style.opacity = "1"
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
            const a = this.pinyinMatchDialog(s);
            a.length > 0 ? this.openDialog(a) : this.closeDialog()
        }

        pinyinMatchDialog(t) {
            return t ? this.options.filter(e => Pt(e.name, e.pinyin || "", t)) : this.callEvery ? [{
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
                Kt(s, !0, "flex"), t.scrollTop = 0, Kt(e, 0 === this.options.length, "flex"), Kt(s, !1), this.switchActiveMention(t.children[0]), this.moveDialog()
            }
        }

        destroy() {
            this.bus.offKeyEvent("MentionDialog"), this.dialog.parentElement && this.dialog.parentElement.removeChild(this.dialog), ct(this, t).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    t = new WeakMap, e = new WeakSet, i = function () {
        const t = "MentionDialog";
        this.bus.on(t, "closeDialog", () => {
            this.closeDialog()
        }), this.bus.on(t, "moveActiveMention", Mt(this.moveActiveMention, 120).bind(this)), this.bus.on(t, "matchDialog", $t(this.matchDialog, 200).bind(this)), this.bus.on(t, "updateDialogReact", $t(() => {
            zt(this.dialog) && this.moveDialog()
        }, 200)), this.bus.on(t, "destroy", () => {
            this.destroy()
        })
    }, s = function () {
        rt(this, t, [[this.chatElement.richText, {
            keydown: t => {
                zt(this.dialog) && (Bt(t, "dialog-options") ? t.preventDefault() : Bt(t, "text-move") && this.closeDialog())
            }, keyup: t => {
                if (t.stopPropagation(), "@" === t.key || "2" === String(t.key) || Bt(t, "IME")) {
                    const t = this.chatElement.chat.getSelection(), e = t.focusNode,
                        i = this.chatElement.chat.chatEditor.findNode(e);
                    if (i && "Write" === i.type) {
                        const e = t.focusOffset;
                        "@" === i.text[e - 1] && !this.chatElement.chat.deviceInfo.isPc && this.openDialog()
                    }
                }
            }
        }], [window, {
            mousedown: () => {
                this.closeDialog()
            }, keydown: t => {
                !this.chatElement.chat.chatEditor.isComposition && zt(this.dialog) && Bt(t, "dialog-options") && (t.preventDefault(), "ArrowUp" === t.key || "ArrowUp" === t.code ? this.bus.emit("moveActiveMention", "up") : "ArrowDown" === t.key || "ArrowDown" === t.code ? this.bus.emit("moveActiveMention", "down") : "Enter" !== t.key && "Enter" !== t.code && "NumpadEnter" !== t.code || this.activeMention && this.activeMention.click())
            }
        }]]), ct(this, t).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, a = function () {
        this.dialog.classList.add("chat-mention-dialog-wrap"), this.dialog.addEventListener("mousedown", t => {
            t.stopPropagation()
        }), Kt(this.dialog, !1);
        const t = document.createDocumentFragment(), e = document.createElement("div");
        e.classList.add("chat-mention-dialog-header"), t.appendChild(e);
        const i = document.createElement("div");
        i.classList.add("chat-mention-dialog-main"), i.classList.add("chat-scroll"), t.appendChild(i);
        const s = document.createElement("div");
        s.classList.add("chat-mention-dialog-empty"), Kt(s, !1), t.appendChild(s);
        const a = document.createElement("div");
        a.classList.add("chat-mention-dialog-loading"), a.innerHTML = pt, Kt(a, !1), t.appendChild(a), this.dialog.appendChild(t), this.chatElement.dialogRoot.appendChild(this.dialog)
    };

    class Ft {
        constructor(t, e) {
            ht(this, o), nt(this, "bus"), nt(this, "chatElement"), nt(this, "dialog"), nt(this, "activeTrigger", null), nt(this, "title"), nt(this, "key"), nt(this, "options"), nt(this, "keyMap"), ht(this, n, []), this.title = e.dialogTitle, this.key = e.key, this.options = e.options, this.keyMap = e.keyMap, this.dialog = document.createElement("div"), this.chatElement = t, this.bus = this.chatElement.chat.bus, lt(this, o, c).call(this), lt(this, o, h).call(this), lt(this, o, r).call(this)
        }

        openDialog(t) {
            if (zt(this.dialog) || this.bus.emit("closeDialog"), this.options.length > 0) {
                const e = this.dialog.children[1];
                let i;
                e.scrollTop = 0;
                const s = (t || this.pinyinMatchDialog()).map(t => t.id);
                Array.from(e.children, t => {
                    const e = t.getAttribute("data-id");
                    s.includes(e) ? (Kt(t, !0, "flex"), i || (i = t)) : Kt(t, !1)
                }), this.switchActiveTrigger(i || e.children[0]), Kt(this.dialog), this.moveDialog(), this.bus.emit("switchDisabledState", !0)
            }
        }

        closeDialog() {
            zt(this.dialog) && (Kt(this.dialog, !1), this.switchActiveTrigger(), this.bus.emit("switchDisabledState", !1))
        }

        moveDialog() {
            const t = this.chatElement.chat.getSelection().getRangeAt(0).getBoundingClientRect(),
                e = this.chatElement.dialogRoot.getBoundingClientRect();
            let i = "0", s = "100%", a = t.x - e.x, n = e.y - t.y;
            const {clientWidth: o, clientHeight: c} = this.dialog;
            t.x > window.innerWidth - o - 30 && (a = t.x - o - e.x - 16, i = "100%"), t.y < c && (n -= c, s = "0"), this.dialog.style.transform = "translate(0, 0)", this.dialog.style.transformOrigin = `${i} ${s}`, this.dialog.style.left = a + 6 + "px", this.dialog.style.bottom = `${n}px`, this.dialog.style.opacity = "1"
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
            const s = e.slice(i + 1), a = this.pinyinMatchDialog(s);
            a.length > 0 ? this.openDialog(a) : this.closeDialog()
        }

        pinyinMatchDialog(t) {
            return t ? this.options.filter(e => Pt(e.name, e.pinyin || "", t)) : this.options
        }

        destroy() {
            const t = "TriggerDialog-" + this.key;
            this.bus.offKeyEvent(t), this.dialog.parentElement && this.dialog.parentElement.removeChild(this.dialog), ct(this, n).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    n = new WeakMap, o = new WeakSet, c = function () {
        const t = "TriggerDialog-" + this.key;
        this.bus.on(t, "closeDialog", () => {
            this.closeDialog()
        }), this.bus.on(t, "moveActiveTrigger", Mt(this.moveActiveTrigger, 120).bind(this)), this.bus.on(t, "matchDialog", $t(this.matchDialog, 200).bind(this)), this.bus.on(t, "updateDialogReact", $t(() => {
            zt(this.dialog) && this.moveDialog()
        }, 200)), this.bus.on(t, "destroy", () => {
            this.destroy()
        })
    }, h = function () {
        rt(this, n, [[this.chatElement.richText, {
            keydown: t => {
                zt(this.dialog) && (Bt(t, "dialog-options") ? t.preventDefault() : Bt(t, "text-move") && this.closeDialog())
            }, keyup: t => {
                if (t.stopPropagation(), this.keyMap.includes(String(t.key)) || Bt(t, "IME")) {
                    const t = this.chatElement.chat.getSelection(), e = t.focusNode,
                        i = this.chatElement.chat.chatEditor.findNode(e);
                    if (i && "Write" === i.type) {
                        const e = t.focusOffset;
                        i.text[e - 1] === this.key && !this.chatElement.chat.deviceInfo.isPc && this.openDialog()
                    }
                }
            }
        }], [window, {
            mousedown: () => {
                this.closeDialog()
            }, keydown: t => {
                !this.chatElement.chat.chatEditor.isComposition && zt(this.dialog) && Bt(t, "dialog-options") && (t.preventDefault(), "ArrowUp" === t.key || "ArrowUp" === t.code ? this.bus.emit("moveActiveTrigger", "up") : "ArrowDown" === t.key || "ArrowDown" === t.code ? this.bus.emit("moveActiveTrigger", "down") : "Enter" !== t.key && "Enter" !== t.code && "NumpadEnter" !== t.code || this.activeTrigger && this.activeTrigger.click())
            }
        }]]), ct(this, n).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, r = function () {
        this.dialog.classList.add("chat-trigger-dialog-wrap"), this.dialog.addEventListener("mousedown", t => {
            t.stopPropagation()
        }), Kt(this.dialog, !1);
        const t = document.createDocumentFragment(), e = document.createElement("div");
        e.classList.add("chat-trigger-dialog-header"), e.textContent = this.title, t.appendChild(e);
        const i = document.createElement("div");
        i.classList.add("chat-trigger-dialog-main"), i.classList.add("chat-scroll"), t.appendChild(i);
        const s = document.createDocumentFragment();
        this.options.forEach(t => {
            const e = document.createElement("div");
            e.setAttribute("data-id", t.id), e.setAttribute("data-name", t.name), e.classList.add("chat-trigger-dialog-item"), Kt(e, !0, "flex");
            const i = document.createElement("div");
            i.classList.add("chat-trigger-dialog-item-name"), i.textContent = t.name, e.appendChild(i), e.addEventListener("click", t => {
                t.stopPropagation();
                const i = this.chatElement.chat.chatEditor.markCursorWrite,
                    s = i.node.textContent.slice(0, i.offset).lastIndexOf(this.key), a = i.offset - s;
                this.bus.emit("insertTrigger", {
                    id: e.getAttribute("data-id"),
                    name: e.getAttribute("data-name"),
                    key: this.key,
                    del: a > 0 ? a : 0
                }), this.closeDialog()
            }), s.appendChild(e)
        }), i.appendChild(s), this.dialog.appendChild(t), this.chatElement.dialogRoot.appendChild(this.dialog)
    };

    class Yt {
        constructor(t, e) {
            ht(this, d), nt(this, "chatElement"), nt(this, "bus"), nt(this, "dialog"), nt(this, "title", ""), nt(this, "key", ""), nt(this, "multiple", !1), nt(this, "emptyText", ""), nt(this, "showSearch", !1), nt(this, "placeholder", ""), nt(this, "searchEmptyText", ""), nt(this, "options", []), nt(this, "selectNode", null), ht(this, l, []), this.dialog = document.createElement("div"), this.chatElement = t, this.bus = this.chatElement.chat.bus, this.title = e.dialogTitle, this.key = e.key, this.multiple = e.multiple || !1, this.emptyText = e.emptyText || "请选择标签选项", this.placeholder = e.placeholder || "请输入关键字查询", this.searchEmptyText = e.searchEmptyText || "暂无查询结果", this.showSearch = e.showSearch || !1, this.options = e.options, lt(this, d, p).call(this), lt(this, d, g).call(this), lt(this, d, u).call(this)
        }

        openDialog(t) {
            if (zt(this.dialog) || this.bus.emit("closeDialog"), this.selectNode = t, !this.selectNode) return;
            if (this.showSearch) {
                const t = this.dialog.children[1];
                t.children[0].value = "", Kt(t.children[1], !1)
            }
            Kt(this.dialog);
            const e = this.dialog.children[this.showSearch ? 2 : 1], i = e.children;
            let s = 0, a = !1, n = 0;
            if ("Select" === this.selectNode.type) {
                const t = this.selectNode.id, o = (t || "").split(",");
                this.selectNode.$el.children[0].classList.add("active"), Array.from(i, e => {
                    Kt(e, !0, "flex");
                    const i = e.lastChild,
                        c = o.length > 0 ? o.some(t => String(t) === e.getAttribute("data-id")) : String(t) === String(e.getAttribute("data-id"));
                    c && (n = e.clientHeight, a = !0), c || a || (s += e.clientHeight), Kt(i, c)
                });
                const c = s - e.clientHeight / 2 + n / 2;
                e.scrollTop = a && c > 0 ? c : 0
            } else e.scrollTop = 0, Array.from(i, t => {
                Kt(t, !0, "flex");
                Kt(t.lastChild, !1)
            });
            this.bus.emit("switchDisabledState", !0), this.moveDialog()
        }

        closeDialog() {
            if (zt(this.dialog)) {
                if (Kt(this.dialog, !1), this.selectNode && "Select" === this.selectNode.type) {
                    this.selectNode.$el.children[0].classList.remove("active")
                }
                this.bus.emit("switchDisabledState", !1), this.selectNode = null
            }
        }

        moveDialog() {
            if (!this.selectNode) return;
            const t = this.selectNode.$el.getClientRects()[0], e = this.dialog.children[this.showSearch ? 3 : 2];
            let i = this.dialog.clientHeight + 16;
            if (i > t.y ? (i = -(t.height + 16), e.style.top = "-16px", e.style.bottom = "auto", e.style.transform = "rotate(0deg)") : (e.style.transform = "rotate(180deg)", e.style.bottom = "-16px", e.style.top = "auto"), window.innerWidth - t.x < this.dialog.clientWidth) {
                const i = this.dialog.clientWidth - (window.innerWidth - t.x) - 10;
                this.dialog.style.left = "auto", this.dialog.style.right = "10px", e.style.left = "auto", e.style.right = i - 16 + "px"
            } else this.dialog.style.left = t.x + "px", this.dialog.style.right = "auto", e.style.left = "16px", e.style.right = "auto";
            this.dialog.style.top = t.y + "px", this.dialog.style.transform = `translateY(${-i}px)`
        }

        destroy() {
            const t = "SelectDialog-" + this.key;
            this.bus.offKeyEvent(t), this.dialog.parentElement && this.dialog.parentElement.removeChild(this.dialog), ct(this, l).forEach(t => {
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
        rt(this, l, [[window, {
            mousedown: () => {
                this.closeDialog()
            }
        }]]), ct(this, l).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, u = function () {
        this.dialog.classList.add("chat-select-dialog-wrap"), this.dialog.addEventListener("mousedown", t => {
            t.stopPropagation()
        }), Kt(this.dialog, !1);
        const t = document.createDocumentFragment(), e = document.createElement("div");
        e.classList.add("chat-select-dialog-header");
        const i = document.createElement("span");
        if (i.textContent = this.title, e.appendChild(i), t.appendChild(e), this.showSearch) {
            const e = document.createElement("div");
            e.classList.add("chat-select-dialog-search");
            const i = document.createElement("input");
            i.classList.add("chat-select-dialog-search-input"), i.setAttribute("placeholder", this.placeholder), i.addEventListener("input", $t(t => {
                t.stopPropagation();
                const e = t.target.value || "", i = this.dialog.children[1].children[1],
                    s = this.dialog.children[2].children;
                let a = !0;
                Array.from(s, t => {
                    const i = t.getAttribute("data-name") || "";
                    "" === e || -1 !== i.indexOf(e) ? (a = !1, Kt(t, !0, "flex")) : Kt(t, !1)
                }), Kt(i, a, "flex"), this.moveDialog()
            }, 200).bind(this)), e.appendChild(i);
            const s = document.createElement("div");
            s.classList.add("chat-select-dialog-search-empty"), s.innerHTML = `${gt}<span class="empty-label">${this.searchEmptyText}</span>`, Kt(s, !1), e.appendChild(s), t.appendChild(e)
        }
        const s = document.createElement("div");
        s.classList.add("chat-select-dialog-main"), s.classList.add("chat-scroll");
        const a = document.createDocumentFragment();
        this.options.forEach(t => {
            const e = document.createElement("div");
            if (e.classList.add("chat-select-dialog-item"), e.setAttribute("data-id", t.id), e.setAttribute("data-name", t.name), t.preview) {
                const i = document.createElement("div");
                i.classList.add("chat-select-dialog-preview"), i.classList.add("loading"), i.innerHTML = pt, e.appendChild(i);
                const s = new Image;
                s.classList.add("chat-select-dialog-preview"), s.src = String(t.preview), s.onload = () => {
                    e.insertBefore(s, i), e.removeChild(i)
                }
            }
            const i = document.createElement("span");
            i.classList.add("chat-select-dialog-name"), i.textContent = t.name, e.appendChild(i);
            const s = document.createElement("span");
            s.classList.add("chat-select-dialog-check"), s.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9.218 17.41 19.83 6.796a.99.99 0 1 1 1.389 1.415c-3.545 3.425-4.251 4.105-11.419 11.074a.997.997 0 0 1-1.375.018c-1.924-1.801-3.709-3.568-5.573-5.43a.999.999 0 0 1 1.414-1.413z"></path></svg>', Kt(s, !1), e.appendChild(s), e.addEventListener("click", t => {
                if (t.stopPropagation(), this.selectNode && "Select" === this.selectNode.type) if (this.multiple) {
                    Kt(e.lastChild, !zt(e.lastChild));
                    const t = e.parentElement.querySelectorAll(".chat-select-dialog-check.chat-view-show");
                    if (0 === t.length) this.selectNode.updateTag({id: null, name: this.emptyText}); else {
                        let e = "", i = "";
                        Array.from(t, t => {
                            const s = t.parentElement;
                            e += `${s.getAttribute("data-id")},`, i += `${s.getAttribute("data-name")}、`
                        }), this.selectNode.updateTag({id: e.slice(0, -1), name: i.slice(0, -1)})
                    }
                } else {
                    const t = e.getAttribute("data-id"), i = e.getAttribute("data-name");
                    this.selectNode.updateTag({id: t, name: i}), this.closeDialog()
                } else {
                    const t = e.getAttribute("data-id"), i = e.getAttribute("data-name");
                    this.bus.emit("insertSelect", {...this.selectNode || {}, id: t, name: i}), this.closeDialog()
                }
            }), a.appendChild(e)
        }), s.appendChild(a), t.appendChild(s);
        const n = document.createElement("div");
        n.classList.add("chat-select-dialog-arrow"), t.appendChild(n), this.dialog.appendChild(t), this.chatElement.dialogRoot.appendChild(this.dialog)
    };

    class jt {
        constructor(t, e) {
            ht(this, m), nt(this, "chatElement"), nt(this, "bus"), nt(this, "tip"), nt(this, "dialog"), nt(this, "config", {}), ht(this, f, []), this.chatElement = t, this.bus = this.chatElement.chat.bus, this.tip = document.createElement("div"), this.dialog = document.createElement("div"), lt(this, m, x).call(this), lt(this, m, y).call(this), lt(this, m, w).call(this), this.updateConfig(e)
        }

        updateConfig(t) {
            this.config = t, this.tip.innerHTML = t.tipTemplate || "", this.dialog.innerHTML = t.dialogTemplate || ""
        }

        openTip(t) {
            this.tip.innerHTML = Wt(this.tip.innerHTML, t), this.dialog.innerHTML = Wt(this.dialog.innerHTML, t), Kt(this.tip);
            (this.config.closeNames || []).forEach(t => {
                const e = this.tip.querySelector(`.${t}`);
                e && e.addEventListener("click", () => {
                    this.closeTip()
                })
            }), this.tip.onmouseenter = () => {
                Kt(this.dialog), this.tip.classList.add("tip-hover");
                const t = this.tip.children[0], e = t.offsetWidth / 2 + t.offsetLeft,
                    i = this.dialog.children[0].clientWidth / 2;
                this.chatElement.container.style.setProperty("--chat-tip-dialog-left", e - i + "px");
                const s = Number(this.chatElement.container.style.getPropertyValue("--chat-before-tip-top").replace("px", ""));
                this.chatElement.container.style.setProperty("--chat-tip-dialog-top", s - this.chatElement.rollBox.scrollTop + "px")
            }, this.tip.onmouseleave = () => {
                Kt(this.dialog, !1), this.tip.classList.remove("tip-hover")
            };
            const e = this.tip.children[0].clientWidth;
            this.chatElement.container.style.setProperty("--chat-before-tip-width", `${e + Number(t.offset || 4)}px`), this.bus.emit("focus", "mark"), lt(this, m, v).call(this), this.bus.emit("tipState", !0)
        }

        closeTip() {
            zt(this.tip) && (this.chatElement.container.style.setProperty("--chat-before-tip-width", "0px"), this.chatElement.container.style.setProperty("--chat-before-tip-top", "0px"), this.chatElement.container.style.setProperty("--chat-tip-dialog-left", "0px"), Kt(this.tip, !1), Kt(this.dialog, !1), this.tip.classList.remove("tip-hover"), this.bus.emit("focus", "mark"), this.tip.innerHTML = this.config.tipTemplate || "", this.dialog.innerHTML = this.config.dialogTemplate || "", this.bus.emit("tipState", !1))
        }

        destroy() {
            this.bus.offKeyEvent("BeforeTip"), ct(this, f).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }
    }

    f = new WeakMap, m = new WeakSet, x = function () {
        const t = "BeforeTip";
        this.bus.on(t, "destroy", () => {
            this.destroy()
        }), this.bus.on(t, "openTip", t => {
            this.openTip(t)
        }), this.bus.on(t, "closeTip", () => {
            this.closeTip()
        }), this.bus.on(t, "editorChange", () => {
            lt(this, m, v).call(this)
        })
    }, y = function () {
        rt(this, f, [[window, {
            resize: () => {
                lt(this, m, v).call(this)
            }, keydown: t => {
                "Escape" === t.key && this.closeTip()
            }
        }]]), ct(this, f).forEach(t => {
            const e = t[0], i = t[1];
            for (const s in i) e.addEventListener(s, i[s])
        })
    }, w = function () {
        this.tip.classList.add("chat-before-tip-wrap"), this.dialog.classList.add("chat-tip-dialog-wrap"), this.chatElement.rollBox.appendChild(this.tip), this.chatElement.dialogRoot.appendChild(this.dialog), Kt(this.tip, !1), Kt(this.dialog, !1)
    }, v = function () {
        if (!zt(this.tip)) return;
        const t = this.chatElement.chat.chatEditor.NODES[0].children[0], e = this.tip.children[0],
            i = t.$el.getBoundingClientRect(), s = e.getBoundingClientRect(),
            a = Number(this.chatElement.container.style.getPropertyValue("--chat-before-tip-top").replace("px", "")),
            n = i.y + this.chatElement.chat.chatEditor.NODE_HEIGHT / 2 - (s.y + s.height / 2) + a;
        this.chatElement.container.style.setProperty("--chat-before-tip-top", `${n + (this.config.offsetTop || 0)}px`)
    };

    class Vt {
        constructor(t, e) {
            ht(this, b), nt(this, "chat"), nt(this, "container"), nt(this, "rollBox"), nt(this, "richText"), nt(this, "placeholder"), nt(this, "dialogRoot"), nt(this, "mentionDialog"), nt(this, "triggerDialogs"), nt(this, "selectDialogs"), nt(this, "beforeTip"), this.chat = e, this.container = t, this.rollBox = document.createElement("div"), this.richText = document.createElement("div"), this.placeholder = document.createElement("div"), this.dialogRoot = document.createElement("div"), lt(this, b, E).call(this), lt(this, b, k).call(this), lt(this, b, C).call(this), lt(this, b, N).call(this)
        }

        updatePlaceholder(t) {
            this.placeholder.textContent = t
        }

        updateChatStyle(t) {
            Object.assign(this.rollBox.style, t)
        }

        createMentionDialog() {
            this.mentionDialog ? this.mentionDialog.updateConfig(this.chat.options.mentionConfig) : this.mentionDialog = new _t(this, this.chat.options.mentionConfig)
        }

        createTriggerDialog() {
            this.triggerDialogs ? (this.triggerDialogs.forEach(t => {
                t.destroy()
            }), this.triggerDialogs = []) : this.triggerDialogs = [], this.chat.options.triggerConfig.forEach(t => {
                this.triggerDialogs.push(new Ft(this, t))
            })
        }

        createSelectDialog() {
            this.selectDialogs ? (this.selectDialogs.forEach(t => {
                t.destroy()
            }), this.selectDialogs = []) : this.selectDialogs = [], this.chat.options.selectConfig.forEach(t => {
                this.selectDialogs.push(new Yt(this, t))
            })
        }

        createBeforeTip() {
            this.beforeTip ? this.beforeTip.updateConfig(this.chat.options.tipConfig) : this.beforeTip = new jt(this, this.chat.options.tipConfig)
        }

        destroy() {
            this.chat.bus.offKeyEvent("ChatElement"), this.rollBox.parentElement && this.rollBox.parentElement.removeChild(this.rollBox), this.placeholder.parentElement && this.placeholder.parentElement.removeChild(this.placeholder), this.dialogRoot.parentElement && this.dialogRoot.parentElement.removeChild(this.dialogRoot)
        }
    }

    b = new WeakSet, E = function () {
        const t = "ChatElement";
        this.chat.bus.on(t, "editorChange", () => {
            lt(this, b, O).call(this)
        }), this.chat.bus.on(t, "destroy", () => {
            this.destroy()
        })
    }, k = function () {
        this.container.classList.add("chat-area-wrap"), this.rollBox.classList.add("chat-rich-text"), this.rollBox.classList.add("chat-scroll"), this.richText.setAttribute(wt, "richWrap"), this.richText.setAttribute("contenteditable", "true"), this.rollBox.appendChild(this.richText), this.container.appendChild(this.rollBox)
    }, C = function () {
        this.placeholder.classList.add("chat-placeholder-wrap"), Kt(this.placeholder), this.container.appendChild(this.placeholder)
    }, N = function () {
        this.dialogRoot.classList.add("chat-dialog-wrap"), this.container.appendChild(this.dialogRoot)
    }, O = function () {
        if (this.chat.chatEditor.isComposition) return Kt(this.placeholder, !1);
        const t = this.chat.chatEditor.NODES;
        return t.length > 1 || t[0].children.length > 1 || t[0].children[0].text.length > 0 ? Kt(this.placeholder, !1) : void Kt(this.placeholder, !0)
    };

    class Gt {
        constructor(t) {
            nt(this, "$el", null), nt(this, "type", ""), this.type = t
        }

        mount({parentElm: t, beforeElm: e, afterElm: i, targetElm: s}) {
            s && (i ? i.nextElementSibling ? t.insertBefore(s, i.nextElementSibling) : t.appendChild(s) : e ? t.insertBefore(s, e) : t.appendChild(s))
        }
    }

    D = new WeakSet, T = function (t, ...e) {
        this.context.context.bus.emit(t, ...e)
    };
    let Ut = class t extends Gt {
        constructor(t, e) {
            super(e.type), ht(this, D), nt(this, "context"), nt(this, "text", ""), nt(this, "VOID_KEY", Lt), this.context = t, this.text = String(e.text || ""), this.render(e)
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
            i.setStart(e, t), i.setEnd(e, t), s.removeAllRanges(), s.addRange(i), lt(this, D, T).call(this, "cursorChange", {
                node: e,
                offset: t,
                type: "Write",
                instance: this
            })
        }

        updateNode() {
            const t = this.$el.children[0], e = t.childNodes[0], i = e.textContent || "";
            if (this.text = i.replace(new RegExp(this.VOID_KEY, "ig"), "") || "", t.setAttribute(yt, String(!Boolean(this.text))), Boolean(this.text)) {
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
            const e = t.anchorOffset, i = t.focusOffset, s = e > i, a = s ? i : e, n = s ? e : i,
                o = this.text.slice(0, a), c = this.text.slice(n);
            this.text = o + c, this.syncNode(), this.focus(a)
        }

        updateContext(t) {
            this.context = t
        }

        syncNode() {
            const t = this.$el.children[0].childNodes[0];
            Boolean(this.text) ? t.textContent = this.text : t.textContent = this.VOID_KEY, this.ruleBRTag()
        }

        splitNode(e, i, s = "", a = "") {
            const n = !Boolean(this.text), o = n ? "" : this.text.slice(0, e), c = n ? "" : this.text.slice(e);
            this.text = i ? o.slice(0, -i) : o, this.text = this.text + s;
            const h = this.context.children.indexOf(this),
                r = new t(this.context, {type: "Write", text: a + c, afterElm: this.$el});
            this.context.children.splice(h + 1, 0, r), this.syncNode(), this.updateNode(), r.updateNode(), r.focus(a.length > 0 ? a.length : void 0)
        }

        backspace(t) {
            const e = t.anchorOffset;
            if (t.isCollapsed) {
                if (0 === e || 1 === e && !Boolean(this.text)) {
                    const t = this.context.children.indexOf(this), e = this.context.context.NODES.indexOf(this.context);
                    if (0 === t) {
                        if (0 === e) return void lt(this, D, T).call(this, "closeTip");
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
                const i = t.focusOffset, s = e > i, a = s ? i : e, n = s ? e : i, o = this.text.slice(0, a),
                    c = this.text.slice(n);
                this.text = o + c, this.syncNode(), this.focus(a)
            }
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(wt, bt), e.classList.add("chat-write-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-write-input"), i.setAttribute(wt, Et), i.setAttribute(yt, String(!Boolean(this.text))), i.appendChild(document.createTextNode(Boolean(this.text) ? this.text : this.VOID_KEY)), e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    };

    class Zt extends Gt {
        constructor(t, e) {
            super(t), nt(this, "context"), this.context = e
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

    class qt extends Zt {
        constructor(t, e) {
            super(e.type, t), nt(this, "id", ""), nt(this, "name", ""), this.id = e.id, this.name = e.name, this.render(e)
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(wt, kt), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-tag-mention"), i.textContent = "@" + this.name, e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    class Xt extends Zt {
        constructor(t, e) {
            super(e.type, t), nt(this, "id", ""), nt(this, "name", ""), nt(this, "key", ""), this.id = e.id, this.name = e.name, this.key = e.key, this.render(e)
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(wt, Ct), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-tag-trigger"), i.textContent = this.key + this.name, e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    class Jt extends Zt {
        constructor(t, e) {
            super(e.type, t), ht(this, S), nt(this, "id", ""), nt(this, "name", ""), nt(this, "key", ""), this.id = e.id, this.name = e.name, this.key = e.key, this.render(e)
        }

        updateTag({id: t, name: e}) {
            this.id = t, this.name = e;
            this.$el.children[0].children[0].textContent = e, this.focus(), lt(this, S, L).call(this, "richTextChange")
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(wt, Nt), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
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

    class Qt extends Gt {
        constructor(t, e) {
            super(e.type), ht(this, $), nt(this, "context"), nt(this, "text", ""), nt(this, "placeholder", ""), nt(this, "key", ""), nt(this, "VOID_KEY", Lt), nt(this, "WRAP_KEY", "​\n​"), this.context = t, this.text = (e.text || "").replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.placeholder = String(e.placeholder || "placeholder"), this.key = e.key, this.render(e)
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
            if (this.text = s.replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), Kt(e, !Boolean(this.text), "inline-block"), Boolean(this.text)) {
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
                let a;
                switch (i) {
                    case 1:
                        a = e - i - 2;
                        break;
                    case 2:
                        a = e - i - 1;
                        break;
                    case 3:
                        a = e - i;
                        break;
                    default:
                        a = e - 1
                }
                const n = s.slice(0, a), o = s.slice(e);
                this.text = (n + o).replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.syncNode(), this.focus(a)
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
                let a, n, o;
                switch (s) {
                    case 1:
                        a = 2, n = 1, o = e + 1;
                        break;
                    case 2:
                        a = 1, n = 2, o = e - 1;
                        break;
                    case 3:
                        a = 0, n = 3, o = e;
                        break;
                    default:
                        a = 0, n = 1, o = e
                }
                const c = t.slice(0, e - a), h = t.slice(e + n);
                this.text = (c + h).replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.syncNode(), this.focus(o)
            } else this.deleteRangeNode({
                anchorInstance: this,
                anchorOffset: e,
                focusInstance: this,
                focusOffset: t.focusOffset
            })
        }

        deleteRangeNode(t) {
            const e = t.anchorOffset, i = t.focusOffset, s = e > i;
            let a = s ? i : e, n = s ? e : i;
            const o = this.$el.children[0].children[0].childNodes[0], c = o.textContent || "",
                h = this.getWrapOffset(o, a, "right"), r = this.getWrapOffset(o, n - 1, "left"), l = c.slice(0, a + h),
                d = c.slice(n + r);
            this.text = (l + d).replace(new RegExp(`${this.WRAP_KEY[0]}|${this.VOID_KEY}`, "ig"), ""), this.syncNode(), this.focus(a)
        }

        focus(t) {
            const e = this.$el.children[0].children[0].childNodes[0];
            t || 0 === t ? -1 === t && (t = e.textContent === this.VOID_KEY ? 1 : e.textContent.length) : t = e.textContent === this.VOID_KEY ? 1 : 0;
            const i = new Range, s = this.context.context.chat.getSelection();
            i.setStart(e, t), i.setEnd(e, t), s.removeAllRanges(), s.addRange(i), lt(this, $, M).call(this, "cursorChange", {
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
                const i = this.$el.children[0].children[0].textContent || "", s = i.slice(0, t), a = i.slice(t);
                this.text = s + e + a, this.syncNode(), this.focus(s.length + e.length)
            } else this.text = e, this.syncNode(), this.focus(e.length)
        }

        fixWrapKey(t) {
            return t.replace(new RegExp(this.WRAP_KEY[0], "ig"), "").replace(new RegExp(this.WRAP_KEY[1], "ig"), this.WRAP_KEY)
        }

        getWrapOffset(t, e, i = "left") {
            const s = "left" === i ? t.textContent[e - 1] : t.textContent[e];
            if (s === this.WRAP_KEY[0]) {
                return ("left" === i ? t.textContent[e - 2] : t.textContent[e + 1]) === this.WRAP_KEY[1] ? 3 : 1
            }
            return s === this.WRAP_KEY[1] ? 2 : 0
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(wt, Ot), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap");
            const i = document.createElement("span");
            i.classList.add("chat-tag-input");
            const s = document.createElement("span");
            s.classList.add("input-write"), s.setAttribute("contenteditable", "true"), s.textContent = Boolean(this.text) ? this.fixWrapKey(this.text) : this.VOID_KEY, i.appendChild(s);
            const a = document.createElement("span");
            a.classList.add("input-tip"), a.textContent = `[${this.placeholder}]`, i.appendChild(a), Boolean(this.text) && Kt(a, !1), e.addEventListener("click", () => {
                Boolean(this.text) || this.focus()
            }), e.appendChild(i), this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    $ = new WeakSet, M = function (t, ...e) {
        this.context.context.bus.emit(t, ...e)
    };

    class te extends Zt {
        constructor(t, e) {
            super(e.type, t), nt(this, "html", ""), this.html = e.html, this.render(e)
        }

        render(t) {
            const e = document.createElement("span");
            this.$el = e, e.setAttribute(wt, Dt), e.setAttribute("contenteditable", "false"), e.classList.add("chat-tag-wrap"), e.innerHTML = this.html, this.mount({
                parentElm: (null == t ? void 0 : t.parentElm) || this.context.$el,
                targetElm: this.$el, ...t || {}
            })
        }
    }

    class ee extends Gt {
        constructor(t, e, i) {
            super("Grid"), nt(this, "children", []), nt(this, "context"), this.context = t, this.render(e, i)
        }

        getAnalyzeChildren(t) {
            if (!t || 0 === t.length) return [{type: "Write", text: ""}];
            const e = [];
            t.forEach((i, s) => {
                if (s === t.length - 1) return;
                const a = s + 1;
                if ("Write" === i.type && "Write" === t[a].type) {
                    let t = a - e.length;
                    e.push(t)
                }
            }), e.forEach(e => {
                const i = t[e];
                t[e - 1].text += i.text, t.splice(e, 1)
            });
            const i = [];
            return t.forEach((e, s) => {
                if (s === t.length - 1) return;
                const a = s + 1;
                if ("Write" !== e.type && "Write" !== t[a].type) {
                    let t = a + i.length;
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
                a = Boolean(t.text) ? t.text.slice(0, e) : "", n = Boolean(t.text) ? t.text.slice(e) : "";
            t.text = a;
            const o = this.children.slice(0, s + 1), c = this.children.slice(s + 1);
            this.children = o;
            const h = new ee(this.context, [], {afterElm: this.$el});
            this.context.NODES.splice(i + 1, 0, h);
            const r = h.children[0];
            r.text = n, h.children.push(...c);
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
            const a = t.text || "", n = e.text || "", o = s ? n.length : a.length;
            t.text = s ? n + a : a + n, t.syncNode(), e.deleteNode(), i && t.focus(Boolean(t.text) ? o : 1)
        }

        splitWriteNode(t, e) {
            const i = this.children.indexOf(t), s = Boolean(t.text) ? t.text.slice(0, e) : "",
                a = Boolean(t.text) ? t.text.slice(e) : "";
            t.text = s, t.syncNode();
            const n = new Ut(this, {type: "Write", text: a, afterElm: t.$el});
            this.children.splice(i + 1, 0, n)
        }

        deleteRangeNode(t) {
            const e = t.anchorInstance, i = t.focusInstance;
            if (e === i) return void e.deleteRangeNode(t);
            const s = this.children.indexOf(e) > this.children.indexOf(i);
            "Write" === e.type && this.splitWriteNode(e, t.anchorOffset), "Write" === i.type && this.splitWriteNode(i, t.focusOffset);
            const a = this.children.indexOf(e), n = this.children.indexOf(i);
            let o = (s ? n : a) + 1;
            const c = s ? a : n;
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
            this.$el = i, i.className = "chat-grid-wrap", i.setAttribute(wt, vt), this.renderChildren(t, !1), this.mount({
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
                        e = new Ut(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Mention":
                        e = new qt(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Trigger":
                        e = new Xt(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Select":
                        e = new Jt(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Input":
                        e = new Qt(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    case"Custom":
                        e = new te(this, {...t, parentElm: s}), this.children.push(e);
                        break;
                    default:
                        const i = this.context.components[t.type];
                        i && (e = new i({
                            type: t.type,
                            data: t.data,
                            context: this,
                            config: {parentElm: s}
                        }), this.children.push(e))
                }
            }), this.$el.appendChild(s);
            const a = this.children[this.children.length - 1];
            a.ruleBRTag(), e && (a.focus(-1), this.emit("richTextChange"))
        }
    }

    class ie {
        constructor(t) {
            ht(this, I), nt(this, "$el"), nt(this, "bus"), nt(this, "chat"), nt(this, "isComposition", !1), nt(this, "textLength", 0), ht(this, A, !1), nt(this, "NODES", []), nt(this, "NODE_HEIGHT", 24), nt(this, "IME_MODEL", !1), nt(this, "FIX_MODEL", !1), ht(this, W, []), nt(this, "components", {}), nt(this, "markCursorWrite", {
                node: null,
                offset: 0,
                instance: null
            }), nt(this, "markCursorInput", {
                node: null,
                offset: 0,
                instance: null
            }), nt(this, "markLastType", "Write"), nt(this, "undoHistory", []), nt(this, "redoHistory", []), nt(this, "historyLoading", !1), this.chat = t, this.bus = t.bus, this.$el = t.chatElement.richText, lt(this, I, R).call(this), lt(this, I, B).call(this), this.initEditor()
        }

        initEditor() {
            this.$el.innerHTML = "", this.NODES = [new ee(this)], this.markLastType = "Write", this.NODE_HEIGHT = this.NODES[0].$el.getBoundingClientRect().height, this.undoHistory = [{
                nodes: this.compileNodes(this.NODES),
                gridIndex: this.NODES.length - 1,
                childIndex: 0,
                offset: 1,
                type: "Write"
            }], this.redoHistory = [], this.chat.options.autoFocus && this.chat.nextTick(() => {
                this.focusLast()
            });
            const t = this.NODES[this.NODES.length - 1], e = t.children[t.children.length - 1];
            lt(this, I, G).call(this, {
                node: e.$el.children[0].childNodes[0],
                offset: Boolean(e.text) ? e.text.length : 1,
                type: "Write",
                instance: e
            })
        }

        async fixEditor(t) {
            this.$el.innerHTML = "", t || (t = this.compileNodes(this.NODES)), this.NODES = t.map(t => new ee(this, t)), this.focusLast(), await lt(this, I, V).call(this)
        }

        deleteRangeNode(t) {
            let e = t.anchorInstance, i = t.focusInstance;
            "Grid" === e.type && (e = e.children[0], t.anchorOffset = Boolean(e.text) ? 0 : 1), "Grid" === i.type && (i = i.children[0], t.focusInstance = Boolean(i.text) ? 0 : 1);
            const s = e.context, a = i.context, n = this.NODES.indexOf(s), o = this.NODES.indexOf(a), c = n > o,
                h = c ? o : n, r = c ? n : o;
            this.NODES.slice(h + 1, r).forEach(t => {
                t.deleteNode()
            });
            const l = c ? a : s, d = c ? s : a, p = l.children[l.children.length - 1], g = d.children[0];
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
            const s = t, a = s.getAttribute ? s.getAttribute(wt) : "";
            if (a === Et) {
                const t = s.parentElement, e = t.parentElement, i = Array.prototype.indexOf.call(e.children, t),
                    a = Array.prototype.indexOf.call(this.$el.children, e);
                return this.NODES[a].children[i]
            }
            if (a === bt) {
                const t = s, e = t.parentElement, i = Array.prototype.indexOf.call(e.children, t),
                    a = Array.prototype.indexOf.call(this.$el.children, e);
                return this.NODES[a].children[i]
            }
            if (a === kt || a === Ct || a === Nt || a === Ot || a === Dt || a === Tt) {
                const t = s, e = t.parentElement, i = Array.prototype.indexOf.call(e.children, t),
                    a = Array.prototype.indexOf.call(this.$el.children, e);
                return this.NODES[a].children[i]
            }
            if (a === vt) {
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
                a = i.$el.children[0].childNodes[0], n = s.$el.children[0].childNodes[0];
            e.setStart(a, Boolean(i.text) ? 0 : 1), e.setEnd(n, Boolean(s.text) ? s.text.length : 1), t.removeAllRanges(), t.addRange(e)
        }

        cursorMove(t, e) {
            const i = e || this.chat.getSelection(), s = t < 0;
            if (!i.isCollapsed) {
                const t = this.findNode(i.anchorNode), e = this.findNode(i.focusNode);
                if (!t || !e) return;
                let a, n, o = !1;
                if (t === e) o = i.anchorOffset > i.focusOffset; else if (t.context === e.context) {
                    o = t.context.children.indexOf(t) > e.context.children.indexOf(e)
                } else {
                    o = this.NODES.indexOf(t.context) > this.NODES.indexOf(e.context)
                }
                return s ? (a = o ? i.focusOffset : i.anchorOffset, n = o ? e : t) : (a = o ? i.anchorOffset : i.focusOffset, n = o ? t : e), "Write" === n.type || "Input" === n.type ? n.focus(a) : n.focus(o), void this.cursorView()
            }
            const a = i.focusNode, n = this.findNode(a);
            let o = 0;
            if (!n) return;
            if ("Write" === n.type) {
                const e = i.focusOffset, a = s ? n.text.slice(0, e) : n.text.slice(e);
                if (a.length >= Math.abs(t)) return n.focus(e + t), void this.cursorView();
                o += a.length
            } else if ("Input" === n.type) {
                const e = i.focusOffset, a = n.$el.children[0].children[0].childNodes[0],
                    c = (s ? a.textContent.slice(0, e) : a.textContent.slice(e)).replace(new RegExp(`${n.VOID_KEY}|${n.WRAP_KEY[0]}`, "ig"), "");
                if (c.length >= Math.abs(t)) {
                    const i = n.getWrapOffset(a, s ? e + t + 1 : e + t - 1, s ? "left" : "right");
                    return i ? s ? n.focus(e + t - i + 1) : n.focus(e + t + i - 1) : n.focus(e + t), void this.cursorView()
                }
                o += c.length
            }
            const c = n.context.children.indexOf(n);
            if (s) {
                if (0 === c) {
                    const e = this.NODES.indexOf(n.context);
                    if (0 === e) return void n.focus();
                    const i = this.NODES[e - 1], s = i.children[i.children.length - 1],
                        a = s.$el.children[0].childNodes[0];
                    return o += 1, void this.cursorMove(-(Math.abs(t) - o), {
                        focusNode: a,
                        focusOffset: Boolean(s.text) ? s.text.length : 1,
                        isCollapsed: !0
                    })
                }
                const e = n.context.children[c - 1];
                let i, s;
                o += 1, "Input" === e.type ? (i = e, s = i.$el.children[0].children[0].childNodes[0]) : "Write" === e.type ? (i = e, s = i.$el.children[0].childNodes[0]) : (i = n.context.children[c - 2], s = i.$el.children[0].childNodes[0]);
                const a = "Input" === e.type ? i.fixWrapKey(i.text) : i.text;
                this.cursorMove(-(Math.abs(t) - o), {
                    focusNode: s,
                    focusOffset: Boolean(a) ? a.length : 1,
                    isCollapsed: !0
                })
            } else {
                if (c === n.context.children.length - 1) {
                    const e = this.NODES.indexOf(n.context);
                    if (e === this.NODES.length - 1) return void n.focus(-1);
                    const i = this.NODES[e + 1].children[0], s = i.$el.children[0].childNodes[0];
                    return o += 1, void this.cursorMove(t - o, {
                        focusNode: s,
                        focusOffset: Boolean(i.text) ? 0 : 1,
                        isCollapsed: !0
                    })
                }
                const e = n.context.children[c + 1];
                let i, s;
                o += 1, "Input" === e.type ? (i = e, s = i.$el.children[0].children[0].childNodes[0]) : "Write" === e.type ? (i = e, s = i.$el.children[0].childNodes[0]) : (i = n.context.children[c + 2], s = i.$el.children[0].childNodes[0]), this.cursorMove(t - o, {
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
                            i.push({type: "Custom", html: t.html});
                            break;
                        default:
                            this.components[t.type] && i.push({type: t.type, data: t.data})
                    }
                }), e.push(i)
            }), e
        }

        async insertText(t) {
            const e = t.replace(new RegExp(`${Lt}`, "ig"), "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n").map(t => [{
                type: "Write",
                text: t
            }]);
            await this.insertNodes(e)
        }

        async insertNodes(t) {
            const {instance: e, offset: i} = this.markCursorWrite;
            if (!e) return;
            const s = e, a = s.context, n = this.NODES.indexOf(a);
            a.splitNode(s, i);
            let o = a.$el, c = null, h = null;
            t.forEach((e, i) => {
                const s = new ee(this, e, {afterElm: o});
                o = s.$el, 0 === i ? c = s : i === t.length - 1 && (h = s), this.NODES.splice(n + i + 1, 0, s)
            }), c && c.mergeNode(), h ? h.mergeNode(!0) : a.mergeNode(!0), await lt(this, I, V).call(this)
        }

        async insertInputText(t) {
            const {instance: e, offset: i} = this.markCursorInput;
            if (!e) return;
            const s = e, a = t.replace(new RegExp(`${Lt}`, "ig"), "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            s.setText(i, a), await lt(this, I, V).call(this)
        }

        splitWrite(t) {
            const {instance: e, offset: i} = this.markCursorWrite;
            if (!e) return null;
            const s = e, a = s.context, n = a.children.indexOf(s);
            return s.splitNode(i, t.del, t.beforeText, t.afterText), {index: n, write: s, grid: a}
        }

        async insertMention(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: a} = e,
                n = new qt(a, {type: "Mention", id: t.id, name: t.name, afterElm: s.$el});
            a.children.splice(i + 1, 0, n), await lt(this, I, V).call(this)
        }

        async insertTrigger(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: a} = e,
                n = new Xt(a, {type: "Trigger", id: t.id, name: t.name, key: t.key, afterElm: s.$el});
            a.children.splice(i + 1, 0, n), await lt(this, I, V).call(this)
        }

        async insertSelect(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: a} = e,
                n = new Jt(a, {type: "Select", id: t.id, name: t.name, key: t.key, afterElm: s.$el});
            a.children.splice(i + 1, 0, n), await lt(this, I, V).call(this)
        }

        async insertInput(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: a} = e,
                n = new Qt(a, {type: "Input", text: t.text, placeholder: t.placeholder, key: t.key, afterElm: s.$el});
            a.children.splice(i + 1, 0, n), n.focus(-1), await lt(this, I, V).call(this)
        }

        async insertCustom(t) {
            const e = this.splitWrite(t);
            if (!e) return;
            const {index: i, write: s, grid: a} = e, n = new te(a, {type: "Custom", html: t.html, afterElm: s.$el});
            a.children.splice(i + 1, 0, n), await lt(this, I, V).call(this)
        }

        async reset(t) {
            if (this.$el.innerHTML = "", this.NODES = t.chatNode.map(t => new ee(this, t)), t.clearHistory) {
                const t = this.NODES[this.NODES.length - 1], e = t.children[t.children.length - 1];
                this.undoHistory = [{
                    nodes: this.compileNodes(this.NODES),
                    gridIndex: this.NODES.length - 1,
                    childIndex: t.children.length - 1,
                    offset: Boolean(e.text) ? e.text.length : 1,
                    type: "Write"
                }], this.redoHistory = []
            }
            this.markLastType = "Write", await this.chat.nextTick(), this.focusLast(), await lt(this, I, V).call(this, !t.clearHistory)
        }

        destroy() {
            this.bus.offKeyEvent("ChatEditor"), ct(this, W).forEach(t => {
                const e = t[0], i = t[1];
                for (const s in i) e.removeEventListener(s, i[s])
            })
        }

        useComponent(t, e) {
            this.components[t] = e
        }

        async insertComponent(t, e) {
            const i = this.components[t];
            if (!i) return;
            const s = this.splitWrite({type: t, data: e, del: 0});
            if (!s) return;
            const {index: a, write: n, grid: o} = s,
                c = new i({type: t, data: e, context: o, config: {afterElm: n.$el}});
            o.children.splice(a + 1, 0, c), await lt(this, I, V).call(this)
        }
    }

    A = new WeakMap, W = new WeakMap, I = new WeakSet, R = function () {
        const t = "ChatEditor";
        this.bus.on(t, "richTextChange", async t => {
            await lt(this, I, V).call(this), t && t()
        }), this.bus.on(t, "richTextDelete", async (t, e) => {
            await lt(this, I, P).call(this, t), e && e()
        }), this.bus.on(t, "cursorChange", t => {
            lt(this, I, G).call(this, t)
        }), this.bus.on(t, "lineBreak", async t => {
            await lt(this, I, H).call(this), t && t()
        }), this.bus.on(t, "undo", async t => {
            await lt(this, I, F).call(this), t && t()
        }), this.bus.on(t, "redo", async t => {
            await lt(this, I, Y).call(this), t && t()
        }), this.bus.on(t, "recordHistory", $t(lt(this, I, _), 200).bind(this)), this.bus.on(t, "ruleMaxLength", () => {
            lt(this, I, U).call(this)
        }), this.bus.on(t, "switchDisabledState", t => {
            rt(this, A, t)
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
        rt(this, W, [[this.$el, {
            keydown: t => {
                if (this.isComposition = t.isComposing, this.chat.deviceInfo.isPc || !Bt(t, "IME")) {
                    if (!this.IME_MODEL) if (this.isComposition || !Bt(t, "text-backspace") && !Bt(t, "text-delete")) this.chat.options.keyboardWrapFun(t) || !this.chat.deviceInfo.isPc && "Enter" === t.key ? (t.preventDefault(), t.stopPropagation(), lt(this, I, H).call(this)) : !ct(this, A) && this.chat.options.keyboardSendFun(t) ? (t.preventDefault(), t.stopPropagation(), this.isComposition || this.bus.emit("send")) : Bt(t, "text-select-all") ? (t.preventDefault(), t.stopPropagation(), this.selectAll()) : Bt(t, "text-move") ? (t.preventDefault(), t.stopPropagation(), this.isComposition || this.cursorMove("ArrowLeft" === t.key || "ArrowLeft" === t.code ? -1 : 1)) : Bt(t, "text-undo") ? (t.preventDefault(), t.stopPropagation(), lt(this, I, F).call(this)) : Bt(t, "text-redo") ? (t.preventDefault(), t.stopPropagation(), lt(this, I, Y).call(this)) : Bt(t, "text-jump") && (t.preventDefault(), t.stopPropagation(), t.shiftKey ? this.chat.jumpPrev() : this.chat.jumpNext()); else {
                        t.preventDefault(), t.stopPropagation();
                        const e = Bt(t, "text-delete");
                        lt(this, I, P).call(this, e)
                    }
                } else this.IME_MODEL = !0
            }, beforeinput: async t => {
                if (!this.IME_MODEL || !["insertParagraph", "deleteContentBackward"].includes(t.inputType)) return;
                t.preventDefault(), t.stopPropagation();
                const e = this.chat.getSelection();
                let i = this.findNode(e.focusNode), s = e.focusOffset;
                if (i || (i = this.findNode(this.markCursorWrite.node), s = this.markCursorWrite.offset), !i) return;
                "Grid" === i.type && (i = i.children[0]), this.FIX_MODEL = !0;
                const a = i, n = this.NODES.indexOf(a.context), o = a.context.children.indexOf(a),
                    c = this.compileNodes(this.NODES);
                this.chat.nextTick(async () => {
                    this.$el.innerHTML = "", this.NODES = c.map(t => new ee(this, t));
                    this.NODES[n].children[o].focus(s), "insertParagraph" === t.inputType ? await lt(this, I, H).call(this) : "deleteContentBackward" === t.inputType && await lt(this, I, P).call(this), this.IME_MODEL = !1, this.FIX_MODEL = !1
                })
            }, input: () => {
                this.FIX_MODEL || (this.IME_MODEL = !1, lt(this, I, V).call(this))
            }, copy: t => {
                t.stopPropagation(), t.preventDefault(), lt(this, I, K).call(this, t)
            }, cut: t => {
                t.stopPropagation(), t.preventDefault(), lt(this, I, K).call(this, t), lt(this, I, P).call(this)
            }, paste: t => {
                t.stopPropagation(), t.preventDefault(), lt(this, I, z).call(this, t)
            }, blur: () => {
                lt(this, I, G).call(this)
            }, focus: () => {
                lt(this, I, G).call(this)
            }, click: () => {
                this.chat.nextTick(() => {
                    lt(this, I, G).call(this)
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
                (Bt(t, "text-undo") || Bt(t, "text-redo")) && (t.preventDefault(), t.stopPropagation())
            }
        }]]);
        const t = ["blur"];
        ct(this, W).forEach(e => {
            const i = e[0], s = e[1];
            for (const a in s) i.addEventListener(a, s[a], -1 !== t.indexOf(a))
        })
    }, P = async function (t = !1) {
        const e = this.chat.getSelection(), i = e.anchorNode, s = e.focusNode;
        let a = this.findNode(i), n = this.findNode(s);
        if (a && n) {
            if (a === n) t ? a.delete(e) : a.backspace(e); else if (a.context === n.context) {
                a.context.deleteRangeNode({
                    anchorInstance: a,
                    anchorOffset: e.anchorOffset,
                    focusInstance: n,
                    focusOffset: e.focusOffset
                })
            } else this.deleteRangeNode({
                anchorInstance: a,
                anchorOffset: e.anchorOffset,
                focusInstance: n,
                focusOffset: e.focusOffset
            });
            await lt(this, I, V).call(this)
        }
    }, H = async function () {
        if (this.isComposition) return;
        let t = this.chat.getSelection();
        t.isCollapsed || await lt(this, I, P).call(this), t = this.chat.getSelection();
        const e = t.focusNode, i = this.findNode(e);
        if (i) {
            if ("Write" === i.type) {
                i.context.splitNode(i, t.focusOffset)
            } else "Input" === i.type && i.setText(t.focusOffset, "\n");
            await lt(this, I, V).call(this)
        }
    }, K = function (t) {
        const e = this.chat.getSelection(), i = t.clipboardData;
        if (e.isCollapsed || e.rangeCount <= 0) return;
        const s = e.toString().replace(/\n\n/g, "\n") || "";
        i.setData("text/plain", s);
        let a = this.findNode(e.anchorNode), n = this.findNode(e.focusNode), o = e.anchorOffset, c = e.focusOffset;
        if (!a || !n) return;
        if ("Grid" === a.type && (a = a.children[0], o = Boolean(a.text) ? 0 : 1), "Grid" === n.type && (n = n.children[0], c = Boolean(n.text) ? 0 : 1), a === n) return;
        const h = a.context, r = n.context;
        if (h === r) {
            const t = h.children.indexOf(a), e = r.children.indexOf(n), s = t > e, l = s ? e : t, d = s ? t : e,
                p = h.children.slice(l + 1, d), g = {...s ? n : a}, u = {...s ? a : n}, f = s ? c : o, m = s ? o : c;
            "Write" === g.type && (g.text = g.text.slice(f)), "Write" === u.type && (u.text = u.text.slice(0, m)), p.unshift(g), p.push(u);
            const x = {type: "Grid", children: p}, y = this.compileNodes([x]);
            return void i.setData(St, JSON.stringify(y))
        }
        const l = a.context, d = n.context, p = this.NODES.indexOf(l), g = this.NODES.indexOf(d);
        let u, f, m, x, y, w, v, b;
        p > g ? (u = d, f = l, m = n, x = a, y = g, w = p, v = c, b = o) : (u = l, f = d, m = a, x = n, y = p, w = g, v = o, b = c);
        const E = u.children.indexOf(m),
            k = this.compileNodes([{type: "Gird", children: u.children.filter((t, e) => e > E)}]);
        "Write" === m.type ? k[0].unshift({
            type: "Write",
            text: Boolean(m.text) ? m.text.slice(v) : ""
        }) : k[0].unshift({...this.compileNodes([{type: "Gird", children: [m]}])[0][0]});
        const C = f.children.indexOf(x),
            N = this.compileNodes([{type: "Gird", children: f.children.filter((t, e) => e < C)}]);
        "Write" === x.type ? N[0].push({
            type: "Write",
            text: Boolean(x.text) ? x.text.slice(0, b) : ""
        }) : N[0].push({...this.compileNodes([{type: "Gird", children: [x]}])[0][0]});
        const O = this.compileNodes(this.NODES.slice(y + 1, w));
        O.unshift(k[0]), O.push(N[0]), i.setData(St, JSON.stringify(O))
    }, z = async function (t) {
        const e = t.clipboardData, i = e.getData("text/plain");
        if (!i) return;
        if ("Input" === this.markLastType) return void this.insertInputText(i);
        const s = e.getData(St) || "";
        let a = [];
        try {
            a = JSON.parse(s)
        } catch (n) {
        }
        this.chat.getSelection().isCollapsed || await lt(this, I, P).call(this), a && a.length > 0 ? this.insertNodes(a) : this.insertText(i)
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
        this.redoHistory.push(t), this.undoHistory.pop(), await lt(this, I, j).call(this, e)
    }, Y = async function () {
        if (this.historyLoading || this.redoHistory.length <= 0) return;
        const t = this.redoHistory[this.redoHistory.length - 1];
        this.redoHistory.pop(), this.undoHistory.push(t), await lt(this, I, j).call(this, t)
    }, j = async function (t) {
        this.historyLoading = !0, this.$el.innerHTML = "", this.NODES = t.nodes.map(t => new ee(this, t));
        this.NODES[t.gridIndex].children[t.childIndex].focus(t.offset), await lt(this, I, V).call(this, !1), this.historyLoading = !1
    }, V = async function (t = !0) {
        const e = this.chat.getSelection(), i = e.focusNode, s = this.findNode(i);
        return s && lt(this, I, G).call(this, {
            type: s.type,
            node: s.$el.children[0].childNodes[0],
            offset: e.focusOffset,
            instance: s
        }), await this.chat.nextTick(), this.isComposition || (null == s || s.updateNode(), lt(this, I, U).call(this), this.chat.deviceInfo.isPc && t && !this.historyLoading && this.bus.emit("recordHistory")), s && this.cursorView(), this.bus.emit("editorChange"), s && "Write" === s.type && this.bus.emit(this.isComposition ? "updateDialogReact" : "matchDialog"), !0
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
            let a = 0;
            a = s > 0 && 1 === t.children.length && 0 === t.children[0].text.length ? 1 : t.$el.textContent.replace(new RegExp(Lt, "ig"), "").length, i.push(a), e += a
        }), e > t) {
            const s = e - t;
            let a = 0, n = 0;
            for (let t = i.length - 1; t >= 0; t--) if (a += i[t], a >= s) {
                n = t;
                break
            }
            this.NODES.slice(n + 1).forEach(t => {
                t.deleteNode()
            });
            let o = a - s;
            const c = this.NODES[n];
            if (0 === o && n > 0) {
                c.deleteNode();
                const e = this.NODES[n - 1];
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

    class se {
        constructor() {
            ht(this, Z), ht(this, q), rt(this, Z, Object.create(null)), rt(this, q, Object.create(null))
        }

        on(t, e, i) {
            ct(this, Z)[e] || (ct(this, Z)[e] = Object.create(null)), ct(this, q)[t] || (ct(this, q)[t] = []), ct(this, q)[t].push(e), ct(this, Z)[e][t] = i
        }

        emit(...t) {
            const e = t[0], i = t.slice(1), s = ct(this, Z)[e];
            if (s) for (const a in s) s[a](...i)
        }

        off(t, e) {
            for (const i in ct(this, Z)[e]) i + "" == t + "" && delete ct(this, Z)[e][t];
            0 === Object.keys(ct(this, Z)[e]).length && delete ct(this, Z)[e]
        }

        offKeyEvent(t) {
            (ct(this, q)[t] || []).forEach(e => {
                this.off(t, e)
            }), delete ct(this, q)[t]
        }
    }

    Z = new WeakMap, q = new WeakMap;
    X = new WeakMap, J = new WeakSet, Q = function (t, ...e) {
        this.context.context.bus.emit(t, ...e)
    }, tt = function (t, e = "") {
        Array.from(t.children, (t, i) => {
            const s = String("" === e ? i : e + "-" + i);
            t.children && t.children.length > 0 && lt(this, J, tt).call(this, t, s);
            const a = t, n = a.dataset || {};
            if (n) {
                n.update && (ct(this, X)[s] = a, a.removeAttribute("data-update"), delete n.update);
                for (const t in n) {
                    const e = n[t];
                    a.addEventListener(t, t => {
                        const i = this[e](t);
                        i instanceof Promise ? i.then(() => {
                            lt(this, J, et).call(this)
                        }) : lt(this, J, et).call(this)
                    }), a.removeAttribute("data-" + t)
                }
            }
        })
    }, et = function () {
        const t = document.createElement("span");
        t.innerHTML = this.render();
        for (let e in ct(this, X)) {
            const i = e.split("-");
            ct(this, X)[e].innerHTML = lt(this, J, it).call(this, t, i)
        }
    }, it = function (t, e) {
        return 1 === e.length ? t.children[Number(e[0])].innerHTML : lt(this, J, it).call(this, t.children[Number(e[0])], e.slice(1))
    };

    class ae {
        constructor(t, e) {
            switch (nt(this, "options"), nt(this, "deviceInfo", function () {
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
                    s = t.includes("linux") && !t.includes("android"), a = t.includes("android"),
                    n = /iphone|ipad|ipod/.test(t), o = t.includes("iphone"),
                    c = t.includes("ipad") || t.includes("macintosh") && navigator.maxTouchPoints > 1,
                    h = t.includes("micromessenger"),
                    r = c || a && !/mobile/.test(t) || t.includes("firefox") && t.includes("tablet") || t.includes("playbook"),
                    l = o && !r || a && /mobile/.test(t) || t.includes("windows phone");
                return {
                    isTablet: r,
                    isPhone: l,
                    isAndroid: a,
                    isIOS: n,
                    isPc: !l && !r && (e || i || s),
                    isIPhone: o,
                    isIPad: c,
                    isWindows: e,
                    isMacOS: i,
                    isLinux: s,
                    isWechat: h,
                    isMobile: l || r
                }
            }()), nt(this, "chatElement"), nt(this, "chatEditor"), nt(this, "bus"), this.options = Object.assign({}, ut, e || {}, {mentionConfig: void 0}), this.deviceInfo.isTablet && (this.deviceInfo.isPc = !1), this.options.device) {
                case"pc":
                    this.deviceInfo.isPc = !0;
                    break;
                case"h5":
                    this.deviceInfo.isPc = !1
            }
            this.bus = new se, this.chatElement = new Vt(t, this), this.chatEditor = new ie(this), this.updateConfig(e)
        }

        updateConfig(t) {
            At(t.placeholder) && this.chatElement.updatePlaceholder(t.placeholder), At(t.chatStyle) && this.chatElement.updateChatStyle(t.chatStyle), At(t.maxLength) && (this.options.maxLength = t.maxLength <= 0 ? -1 : t.maxLength, this.bus.emit("ruleMaxLength")), At(t.keyboardWrapFun) && (this.options.keyboardWrapFun = t.keyboardWrapFun), At(t.keyboardSendFun) && (this.options.keyboardSendFun = t.keyboardSendFun), At(t.mentionConfig) && (this.options.mentionConfig = Object.assign({}, this.options.mentionConfig || ft, t.mentionConfig), this.chatElement.createMentionDialog()), At(t.triggerConfig) && (this.options.triggerConfig = t.triggerConfig.map(t => (t.keyMap || (t.keyMap = mt[t.key] || []), t)), this.chatElement.createTriggerDialog()), At(t.selectConfig) && (this.options.selectConfig = t.selectConfig, this.chatElement.createSelectDialog()), At(t.tipConfig) && (this.options.tipConfig = Object.assign({}, xt, t.tipConfig), this.chatElement.createBeforeTip())
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

        getModel() {
            return this.chatEditor.compileNodes(this.chatEditor.NODES)
        }

        getHtml(t) {
            const e = Object.assign({}, {saveTagData: !1, identifyLink: !1}, t || {}),
                i = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g,
                s = this.getModel();
            let a = "", n = "";
            return s.forEach((t, s) => {
                let o = '<p class="chat-tag-grid">';
                t.forEach((t, a) => {
                    let c = "<span ";
                    switch (t.type) {
                        case"Mention":
                            c += 'class="chat-tag-mention"', e.saveTagData && (c += ` data-id="${t.id}"`), c += `>@${It(t.name)}`;
                            break;
                        case"Trigger":
                            c += 'class="chat-tag-trigger"', e.saveTagData && (c += ` data-id="${t.id}" data-key=${t.key}`), c += `>${t.key}${It(t.name)}`;
                            break;
                        case"Select":
                            c += 'class="chat-tag-select"', e.saveTagData && (c += ` data-id="${t.id}" data-key=${t.key}`), c += `>${It(t.name)}`;
                            break;
                        case"Input":
                            c += 'class="chat-tag-input"', e.saveTagData && (c += ` data-placeholder="${t.placeholder}" data-key=${t.key}`), c += `>${It(t.text || t.placeholder)}`;
                            break;
                        case"Custom":
                            c += 'class="chat-tag-custom"', c += `>${t.html}`;
                            break;
                        case"Write":
                            c += 'class="chat-tag-write"', n = It(t.text), e.identifyLink ? c += `>${n.replace(i, t => `<a class="chat-tag-link" href="${t}" target="_blank">${t}</a>`)}` : c += `>${n}`;
                            break;
                        default:
                            const o = this.chatEditor.NODES[s].children[a];
                            if (c += 'class="chat-tag-component"', e.saveTagData) {
                                for (const t in o.data) c += ` data-${t}="${o.data[t]}"`;
                                c += ` data-type="${o.type}"`
                            }
                            c += `>${o.$el.innerHTML}`
                    }
                    c += "</span>", o += c
                }), o += "</p>", a += o
            }), a
        }

        getText() {
            let t = "";
            return this.getModel().forEach((e, i) => {
                0 !== i && (t += "\n"), e.forEach((e, s) => {
                    switch (e.type) {
                        case"Write":
                            t += e.text;
                            break;
                        case"Input":
                            t += e.text || `[${e.placeholder}]`;
                            break;
                        default:
                            t += this.chatEditor.NODES[i].children[s].$el.textContent || ""
                    }
                })
            }), t.replace(new RegExp(`${Lt}|${"​\n​"[0]}`, "ig"), "")
        }

        getTagData() {
            const t = {mention: [], trigger: {}, select: {}, input: {}},
                e = {mention: new Map, trigger: {}, select: {}};
            return this.getModel().forEach(i => {
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
                            e.select[i.key] || (e.select[i.key] = new Map), i.id && i.id.split(",").length > 0 ? i.id.split(",").forEach((t, s) => {
                                e.select[i.key].set(t, {id: t, name: i.name.split("、")[s]})
                            }) : e.select[i.key].set(i.id, {id: i.id, name: i.name});
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
            await this.chatEditor.insertCustom({html: `<span style="display: inline-block;">${Rt(t)}</span>`})
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
                        const a = i;
                        "Trigger" !== a.type || a.key !== t || e && !e.includes(a.id) || s.push(a)
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
                        const a = i;
                        "Select" !== a.type || a.key !== t || e && !e.includes(a.id) || s.push(a)
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
                            e.push({type: "Custom", html: i.innerHTML});
                            break;
                        case"chat-tag-component":
                            const t = i.dataset.type, s = i.dataset;
                            "type" in s && delete s.type, e.push({type: t, data: s})
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

        jumpPrev(t = "end") {
            this.bus.emit("cursorChange");
            const e = "Write" === this.chatEditor.markLastType ? this.chatEditor.markCursorWrite.instance : this.chatEditor.markCursorInput.instance,
                i = e.context, s = i.children.indexOf(e),
                a = [...i.children.slice(0, s)].reverse().find(t => "Write" === t.type || "Input" === t.type);
            if (a) return void a.focus("start" === t ? 0 : -1);
            const n = i.context.NODES.indexOf(i);
            let o;
            [...this.chatEditor.NODES.slice(0, n)].reverse().some(t => [...t.children].reverse().some(t => {
                if ("Write" === t.type || "Input" === t.type) return o = t, !0
            })), o ? o.focus("start" === t ? 0 : -1) : this.focus("first")
        }

        jumpNext(t = "end") {
            this.bus.emit("cursorChange");
            const e = "Write" === this.chatEditor.markLastType ? this.chatEditor.markCursorWrite.instance : this.chatEditor.markCursorInput.instance,
                i = e.context, s = i.children.indexOf(e),
                a = i.children.slice(s + 1).find(t => "Write" === t.type || "Input" === t.type);
            if (a) return void a.focus("start" === t ? 0 : -1);
            const n = i.context.NODES.indexOf(i);
            let o;
            this.chatEditor.NODES.slice(n + 1).some(t => t.children.some(t => {
                if ("Write" === t.type || "Input" === t.type) return o = t, !0
            })), o ? o.focus("start" === t ? 0 : -1) : this.focus("last")
        }

        move(t) {
            this.chatEditor.focusMark(), 0 !== t && this.chatEditor.cursorMove(t)
        }

        backspace(t) {
            return new Promise(e => {
                if (this.chatEditor.focusMark(), 0 === t) return e();
                if (-1 === t || 1 === t) return void this.bus.emit("richTextDelete", t > 0, e);
                const i = this.getSelection(), s = i.focusNode, a = i.focusOffset;
                this.chatEditor.cursorMove(t);
                const n = this.getSelection(), o = n.focusNode, c = n.focusOffset, h = new Range, r = t < 0;
                r ? (h.setStart(o, c), h.setEnd(s, a)) : (h.setStart(s, a), h.setEnd(o, c)), n.removeAllRanges(), n.addRange(h), this.bus.emit("richTextDelete", !r, e)
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

        useComponent(t, e) {
            this.chatEditor.useComponent(t, e)
        }

        async setComponent(t, e) {
            await this.chatEditor.insertComponent(t, e)
        }
    }

    return nt(ae, "version", "1.2.6"), nt(ae, "Component", class extends Zt {
        constructor(t) {
            var e;
            super(t.type, t.context), ht(this, J), nt(this, "data", {}), ht(this, X, {}), this.data = t.data || {}, this.$el = document.createElement("span"), this.$el.setAttribute(wt, Tt), this.$el.setAttribute("contenteditable", "false"), this.$el.classList.add("chat-tag-wrap"), this.$el.innerHTML = this.render(), lt(this, J, tt).call(this, this.$el), this.mount({
                parentElm: (null == (e = t.config) ? void 0 : e.parentElm) || this.context.$el,
                targetElm: this.$el, ...t.config || {}
            })
        }

        remove() {
            this.deleteRelevanceNode(), lt(this, J, Q).call(this, "richTextChange")
        }

        render() {
            return "undefined"
        }
    }), ae
});
