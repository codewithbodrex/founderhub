import { computed, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { usePage, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerLinks = {
      roles: [
        { name: "Hustler", href: "#" },
        { name: "Hipster", href: "#" },
        { name: "Hacker", href: "#" },
        { name: "Handler", href: "#" }
      ],
      quickLinks: [
        { name: "About Us", href: "#" },
        { name: "Program", href: "#" },
        { name: "Insight & Blog", href: "#" },
        { name: "Contact", href: "#" }
      ]
    };
    const socials = [
      { name: "Instagram", href: "#", iconSrc: "/images/instagram.svg", isSpecial: false },
      { name: "LinkedIn", href: "#", iconSrc: "/images/linkedin.svg", isSpecial: true },
      { name: "Twitter", href: "#", iconSrc: "/images/twitter.svg", isSpecial: false },
      { name: "YouTube", href: "#", iconSrc: "/images/youtube.svg", isSpecial: false }
    ];
    const user = computed(() => {
      var _a;
      return ((_a = usePage().props.auth) == null ? void 0 : _a.user) || null;
    });
    const showRegister = computed(() => !user.value);
    const hasRoute = (name) => {
      try {
        return typeof Ziggy !== "undefined" && Ziggy.routes && Object.prototype.hasOwnProperty.call(Ziggy.routes, name);
      } catch {
        return false;
      }
    };
    const r = (name, params = {}) => {
      try {
        if (hasRoute(name) && typeof route !== "undefined") return route(name, params);
      } catch {
      }
      return "#";
    };
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-white mt-24" }, _attrs))}><div class="bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('/images/footer-background.svg')" })}"><div class="max-w-7xl mx-auto px-6 lg:px-8 py-24"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"><div><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Bangun Perjalanan Founder-mu Bersama FounderHub </h2><p class="mt-4 text-lg text-gray-600"> Jelajahi jalur belajar personal yang dirancang untuk membantu kamu tumbuh sebagai wirausaha muda dan membangun startup impian. </p><div class="mt-8 flex items-center gap-x-4">`);
      if (showRegister.value) {
        _push(ssrRenderComponent(unref(Link), {
          href: r("register"),
          class: "rounded-md bg-[#18182E] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Register `);
            } else {
              return [
                createTextVNode(" Register ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("role-test.index"),
        class: "text-sm font-semibold text-gray-900 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ikuti Tes FounderPath <span class="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true"${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(" Ikuti Tes FounderPath "),
              createVNode("span", {
                class: "ml-1 transition-transform group-hover:translate-x-1",
                "aria-hidden": "true"
              }, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><p class="text-gray-600 leading-relaxed mb-8"> Kami percaya setiap founder punya peran unik: Hustler, Hacker, Hipster, Handler. FounderHub hadir untuk membantumu menemukan jalur belajar yang tepat. </p><div class="bg-[#18182E] rounded-2xl text-white px-8 md:px-12 py-10"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div class="md:col-span-2"><img src="/images/LogoFounderHubWhite.svg" alt="FounderHub Logo" class="h-8 mb-4"><p class="text-gray-400 text-sm"> Platform Edukasi Bisnis All-In-One Berbasis Personalized Learning Path </p><div class="mt-6 flex items-center gap-x-3"><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)} class="${ssrRenderClass([
          "w-9 h-9 rounded-md flex items-center justify-center transition-colors",
          social.isSpecial ? "bg-orange-500 hover:bg-orange-600" : "bg-white/10 hover:bg-white/20"
        ])}"><span class="sr-only">${ssrInterpolate(social.name)}</span><img${ssrRenderAttr("src", social.iconSrc)}${ssrRenderAttr("alt", social.name + " icon")} class="h-5 w-5"></a>`);
      });
      _push(`<!--]--></div></div><div><h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">4 Role</h3><ul class="mt-4 space-y-3"><!--[-->`);
      ssrRenderList(footerLinks.roles, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-300 hover:text-white">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3><ul class="mt-4 space-y-3"><!--[-->`);
      ssrRenderList(footerLinks.quickLinks, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-300 hover:text-white">${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div></div><div class="pb-6"><p class="text-center text-sm text-gray-500"> © ${ssrInterpolate(unref(year))} - FounderHub. All rights reserved </p></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
