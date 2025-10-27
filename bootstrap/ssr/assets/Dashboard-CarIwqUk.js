import { computed, ref, onMounted, onBeforeUnmount, mergeProps, unref, withCtx, createBlock, createTextVNode, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { usePage, Link, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Navbar-DmIFRQXd.js";
import { _ as _sfc_main$3, a as _sfc_main$4, F as FeatureCourses, b as _sfc_main$5, c as _sfc_main$6 } from "./BlogSection-D43iAMgj.js";
import { _ as _sfc_main$7 } from "./Footer-D_h-pvsH.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "HeroSectionAuthCards",
  __ssrInlineRender: true,
  setup(__props) {
    const user = computed(() => {
      var _a, _b;
      return ((_b = (_a = usePage().props) == null ? void 0 : _a.auth) == null ? void 0 : _b.user) ?? null;
    });
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
    const rawItems = [
      { id: 1, slug: "becoming-entrepreneur", title: "Becoming an Entrepreneur", category: "BUSINESS", price: "FREE", rating: 0, students: 0, level: "Beginner", duration: "1 hour", thumbnail: "/images/course/course1.svg", teacher: { name: "Future Lestari", avatar: "/images/course/teacher1.svg" }, whatYouLearn: ["Membangun Pola Pikir Wirausaha", "Menemukan Ide Bisnis yang Relevan", "Menciptakan Usaha Berkelanjutan"], discount: { percent: 100, from: "9.00" } },
      { id: 2, slug: "building-ideas-into-vision", title: "Building Ideas into Vision", category: "PRODUCT", price: "FREE", rating: 0, students: 0, level: "Beginner", duration: "1 hour", thumbnail: "/images/course/course2.svg", teacher: { name: "Future Lestari", avatar: "/images/course/teacher1.svg" }, whatYouLearn: ["Validasi ide cepat", "Menyusun visi produk", "Dasar roadmap produk"], discount: { percent: 100, from: "9.00" } },
      { id: 3, slug: "finding-the-right-customers", title: "Finding The Right Customers", category: "MARKETING", price: "FREE", rating: 1, students: 0, level: "Beginner", duration: "1 hour", thumbnail: "/images/course/course3.svg", teacher: { name: "Future Lestari", avatar: "/images/course/teacher1.svg" }, whatYouLearn: ["Riset pasar dasar", "Persona pelanggan", "Channel akuisisi"] },
      { id: 4, slug: "creating-and-managing-your-product", title: "Creating and Managing Your Product", category: "PRODUCT", price: "FREE", rating: 0, students: 0, level: "Beginner", duration: "1 hour", thumbnail: "/images/course/course4.svg", teacher: { name: "Future Lestari", avatar: "/images/course/teacher1.svg" }, whatYouLearn: ["MVP", "Prioritas fitur", "Siklus rilis"] },
      { id: 5, slug: "monetizing-your-venture", title: "Monetizing Your Venture", category: "FINANCE", price: "FREE", rating: 0, students: 0, level: "Beginner", duration: "1 hour", thumbnail: "/images/course/course5.svg", teacher: { name: "Future Lestari", avatar: "/images/course/teacher1.svg" }, whatYouLearn: ["Model bisnis", "Pricing 101", "Dasar unit economics"] }
    ];
    const items = ref(
      rawItems.map((i) => {
        var _a, _b;
        return {
          discount: { percent: ((_a = i.discount) == null ? void 0 : _a.percent) ?? null, from: ((_b = i.discount) == null ? void 0 : _b.from) ?? null },
          ...i
        };
      })
    );
    const catColor = (c) => {
      var _a;
      const m = {
        BUSINESS: "bg-orange-100  text-orange-700",
        PRODUCT: "bg-indigo-100  text-indigo-700",
        MARKETING: "bg-emerald-100 text-emerald-700",
        FINANCE: "bg-rose-100    text-rose-700"
      };
      return m[(_a = c == null ? void 0 : c.toUpperCase) == null ? void 0 : _a.call(c)] || "bg-gray-100 text-gray-700";
    };
    const openId = ref(null);
    const isOpen = (id) => openId.value === id;
    const close = () => {
      openId.value = null;
    };
    const onDocClick = (e) => {
      var _a, _b;
      if (!((_b = (_a = e.target).closest) == null ? void 0 : _b.call(_a, "[data-popover-root]"))) close();
    };
    onMounted(() => document.addEventListener("click", onDocClick));
    onBeforeUnmount(() => document.removeEventListener("click", onDocClick));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="mx-auto max-w-screen-xl px-6 lg:px-8"><div class="relative overflow-visible rounded-[28px] p-5 sm:p-6 md:p-8 lg:p-10" style="${ssrRenderStyle({ "background-image": "url('/images/hero-auth.svg')", "background-size": "cover", "background-position": "center" })}"><img src="/images/FounderHubMark.svg" class="absolute right-5 top-5 h-8 w-8 md:h-10 md:w-10 select-none pointer-events-none" alt="FH mark"><div class="mb-6 md:mb-8"><h2 class="text-xl sm:text-2xl font-semibold text-gray-900"> Welcome, <span class="text-pink-600">${ssrInterpolate(((_a = user.value) == null ? void 0 : _a.name) ?? "Founder")}</span>! </h2><p class="text-base sm:text-lg text-gray-800 mt-1">Watch recently added courses.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6"><!--[-->`);
      ssrRenderList(items.value, (c) => {
        var _a2, _b;
        _push(`<article data-popover-root class="group relative rounded-xl bg-white ring-1 ring-gray-200 shadow-sm overflow-visible"><div class="aspect-[16/9] w-full bg-gray-100 overflow-hidden rounded-t-xl">`);
        if (c.thumbnail) {
          _push(`<img${ssrRenderAttr("src", c.thumbnail)}${ssrRenderAttr("alt", c.title)} class="h-full w-full object-cover transition group-hover:scale-[1.02]">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="px-4 pt-3 pb-4"><div class="flex items-center justify-between text-xs"><span class="${ssrRenderClass(["inline-flex items-center rounded px-2 py-0.5 font-semibold text-[10px] tracking-wide", catColor(c.category)])}">${ssrInterpolate(c.category)}</span><span class="text-pink-600 font-semibold">${ssrInterpolate(c.price)}</span></div><h3 class="mt-2 text-sm font-semibold leading-6 text-gray-900 line-clamp-2 min-h-[3.25rem]">${ssrInterpolate(c.title)}</h3><div class="mt-3 border-t border-gray-200 pt-3 flex items-center justify-between text-xs text-gray-500"><span class="inline-flex items-center gap-1"><svg class="h-3.5 w-3.5 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"></path></svg><span class="text-gray-700">${ssrInterpolate(c.rating.toFixed(1))}</span></span><span>${ssrInterpolate(c.students)} students</span></div></div><div class="${ssrRenderClass([isOpen(c.id) ? "block" : "hidden", "absolute top-0 left-[calc(100%+12px)] z-30 w-[min(22rem,90vw)] rounded-xl bg-white ring-1 ring-black/10 shadow-2xl md:group-hover:block"])}"><div class="absolute left-[-8px] top-6 h-4 w-4 rotate-45 bg-white ring-1 ring-black/10"></div><div class="relative p-5"><div class="flex items-start justify-between"><span class="${ssrRenderClass(["inline-flex items-center rounded px-2 py-0.5 text-[10px] font-semibold tracking-wider", catColor(c.category)])}">${ssrInterpolate(c.category)}</span></div><h4 class="mt-2 text-base font-semibold text-gray-900">${ssrInterpolate(c.title)}</h4><div class="mt-2 flex items-center justify-between"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", (_a2 = c.teacher) == null ? void 0 : _a2.avatar)} class="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200" alt=""><div class="leading-tight"><div class="text-[12px] text-gray-500">Course by</div><div class="text-sm text-gray-900 font-medium">${ssrInterpolate((_b = c.teacher) == null ? void 0 : _b.name)}</div></div></div><div class="flex items-center gap-1 text-amber-500 text-sm"><svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"></path></svg><span class="text-gray-800">${ssrInterpolate(c.rating.toFixed(1))}</span><span class="text-gray-400">(0)</span></div></div><div class="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-700"><span class="inline-flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 12.5C12.76 12.5 15 10.26 15 7.5S12.76 2.5 10 2.5 5 4.74 5 7.5 7.24 12.5 10 12.5Z" stroke="#564FFD" stroke-width="1.5"></path><path d="M2.42 16.87C3.19 15.54 4.29 14.44 5.62 13.67 6.95 12.9 8.46 12.5 10 12.5s3.05.4 4.38 1.17c1.33.77 2.43 1.88 3.2 3.2" stroke="#564FFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(c.students)} students </span><span class="inline-flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 16.67V8.33M15 16.67V3.33M5 16.67V13.33" stroke="#E34444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(c.level)}</span><span class="inline-flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 17.5c4.14 0 7.5-3.36 7.5-7.5S14.14 2.5 10 2.5 2.5 5.86 2.5 10s3.36 7.5 7.5 7.5Z" stroke="#23BD33" stroke-width="1.5"></path><path d="M10 5.625V10h4.375" stroke="#23BD33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${ssrInterpolate(c.duration)}</span></div><div class="mt-4 flex items-center justify-between"><div class="flex items-center gap-3"><div class="text-xl font-bold text-gray-900 leading-none">${ssrInterpolate(c.price)}</div><div class="${ssrRenderClass([!c.discount.from ? "invisible" : "", "text-gray-400 line-through"])}">$ ${ssrInterpolate(c.discount.from || "0.00")}</div><span class="${ssrRenderClass([!c.discount.percent ? "invisible" : "", "px-2.5 py-1 rounded bg-rose-50 text-rose-600 text-xs font-semibold"])}">${ssrInterpolate(c.discount.percent ?? 0)}% OFF </span></div><button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-md bg-rose-50 text-rose-500 hover:bg-rose-100"><svg width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M11 17.25S1.625 12 1.625 5.625A4.88 4.88 0 0 1 5.543.845a5.62 5.62 0 0 1 5.457 2.902A5.62 5.62 0 0 1 16.457.845 4.88 4.88 0 0 1 20.375 5.625C20.375 12 11 17.25 11 17.25Z" stroke="#FF395A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div><div class="mt-4"><h5 class="text-xs font-semibold text-gray-900">WHAT YOU’LL LEARN</h5><ul class="mt-2 space-y-1.5"><!--[-->`);
        ssrRenderList(c.whatYouLearn, (w, i) => {
          _push(`<li class="flex items-start gap-2 text-sm text-gray-700"><svg class="h-4 w-4 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span>${ssrInterpolate(w)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div class="mt-4 flex flex-col gap-2">`);
        _push(ssrRenderComponent(unref(Link), {
          href: r("courses.show", { slug: c.slug }),
          class: "inline-flex items-center justify-center gap-2 rounded-md bg-[#171728] text-white px-4 py-2.5 text-sm font-semibold hover:bg-gray-900",
          onClick: () => {
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l2 12h10l2-8H6"${_scopeId}></path><circle cx="9" cy="20" r="1.5"${_scopeId}></circle><circle cx="17" cy="20" r="1.5"${_scopeId}></circle></svg> Start Learning `);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "h-4 w-4",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M3 3h2l2 12h10l2-8H6"
                  }),
                  createVNode("circle", {
                    cx: "9",
                    cy: "20",
                    r: "1.5"
                  }),
                  createVNode("circle", {
                    cx: "17",
                    cy: "20",
                    r: "1.5"
                  })
                ])),
                createTextVNode(" Start Learning ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: r("courses.show", c.slug),
          class: "inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-semibold hover:bg-gray-50",
          onClick: () => {
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Course Detail `);
            } else {
              return [
                createTextVNode(" Course Detail ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></article>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-6 sm:mt-8">`);
      _push(ssrRenderComponent(unref(Link), {
        href: r("courses.index"),
        class: "inline-flex items-center gap-2 rounded-md bg-[#171728] text-white text-sm font-semibold px-5 py-2.5 hover:bg-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browse All Course <span aria-hidden="true"${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(" Browse All Course "),
              createVNode("span", { "aria-hidden": "true" }, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeroSectionAuthCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    (_a = usePage().props.auth) == null ? void 0 : _a.user;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard | FounderHub" }, null, _parent));
      _push(`<div class="min-h-screen bg-gray-50 text-gray-900">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main class="w-full py-10"><div class="space-y-12"><section class="mx-auto max-w-screen-xl px-6 lg:px-8">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</section><section class="mx-auto max-w-6xl px-6 lg:px-8">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(FeatureCourses, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div></main></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
