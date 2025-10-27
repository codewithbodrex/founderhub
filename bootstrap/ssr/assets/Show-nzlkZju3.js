import { mergeProps, unref, withCtx, createTextVNode, useSSRContext, computed, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { Link, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Navbar-DmIFRQXd.js";
import { _ as _sfc_main$6 } from "./Footer-D_h-pvsH.js";
const _sfc_main$4 = {
  __name: "CourseHeader",
  __ssrInlineRender: true,
  props: {
    course: { type: Object, required: true }
  },
  setup(__props) {
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
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white border-b" }, _attrs))}><div class="mx-auto max-w-screen-xl px-6 lg:px-8 py-6"><nav class="text-sm text-gray-500 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: "hover:text-gray-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Course`);
          } else {
            return [
              createTextVNode("Course")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>/</span><span class="text-gray-900 font-medium">${ssrInterpolate((_a = __props.course) == null ? void 0 : _a.title)}</span></nav><div class="mt-3"><h1 class="text-xl sm:text-2xl font-semibold text-gray-900">${ssrInterpolate((_b = __props.course) == null ? void 0 : _b.title)}</h1><div class="mt-2 flex items-center gap-3 text-sm text-gray-600"><span class="${ssrRenderClass(["inline-flex items-center rounded px-2 py-0.5 text-[10px] font-semibold", catColor((_c = __props.course) == null ? void 0 : _c.category)])}">${ssrInterpolate((_d = __props.course) == null ? void 0 : _d.category)}</span><span class="inline-flex items-center gap-1"><svg class="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"></path></svg><span class="font-medium text-gray-800">${ssrInterpolate((((_e = __props.course) == null ? void 0 : _e.rating) ?? 0).toFixed(1))}</span><span class="text-gray-400">• ${ssrInterpolate(((_f = __props.course) == null ? void 0 : _f.students) ?? 0)} students</span></span></div></div></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/course/CourseHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "CourseDetail",
  __ssrInlineRender: true,
  props: {
    course: { type: Object, required: true }
  },
  setup(__props) {
    var _a, _b, _c;
    const props = __props;
    const learnItems = (((_a = props.course) == null ? void 0 : _a.whatYouLearn) ?? []).slice(0, 6);
    const overall = Number(((_b = props.course) == null ? void 0 : _b.rating) ?? 0);
    const fmtRating = (r) => Number.isFinite(Number(r)) ? Number(r).toFixed(1) : "0.0";
    const realBreakdown = ((_c = props.course) == null ? void 0 : _c.rating_breakdown) ?? { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    const realTotal = Object.values(realBreakdown).reduce((a, b) => a + (Number(b) || 0), 0);
    const dummyBreakdownPct = { 5: 60, 4: 25, 3: 10, 2: 3, 1: 2 };
    const useDummy = realTotal === 0;
    const percent = (stars) => {
      if (useDummy) return dummyBreakdownPct[stars] || 0;
      const n = Number((realBreakdown == null ? void 0 : realBreakdown[stars]) ?? 0);
      return Math.round(n / realTotal * 100);
    };
    const fullStars = Math.floor(overall);
    const isFull = (idx) => idx <= fullStars;
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d, _e, _f;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-white ring-1 ring-gray-200" }, _attrs))}><div class="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-gray-100"><img${ssrRenderAttr("src", ((_a2 = props.course) == null ? void 0 : _a2.hero) ?? ((_b2 = props.course) == null ? void 0 : _b2.thumbnail))} class="h-full w-full object-cover" alt=""></div><div class="p-6 sm:p-8"><div><h3 class="text-base font-semibold text-gray-900">Description</h3><p class="mt-2 text-gray-700 leading-7">${ssrInterpolate(((_c2 = props.course) == null ? void 0 : _c2.description) ?? "Deskripsi kursus akan tampil di sini. Tulis overview manfaat, siapa pengajar, dan hasil belajar yang diharapkan.")}</p></div><div class="mt-6"><h3 class="text-base font-semibold text-gray-900">What you will learn in this course</h3><div class="mt-3 rounded-xl ring-1 ring-gray-200 p-4 sm:p-5 grid sm:grid-cols-2 gap-2">`);
      if (unref(learnItems).length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(learnItems), (w, i) => {
          _push(`<div class="flex items-start gap-3 text-gray-800"><svg class="h-5 w-5 text-emerald-600 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg><span class="text-sm">${ssrInterpolate(w)}</span></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<p class="text-sm text-gray-500">Belum ada poin pembelajaran.</p>`);
      }
      _push(`</div></div><div class="mt-6"><h3 class="text-base font-semibold text-gray-900">Who this course is for</h3><p class="mt-2 text-gray-700 text-sm leading-7">${ssrInterpolate(((_d = props.course) == null ? void 0 : _d.audience) ?? "Mahasiswa, pekerja, dan calon founder yang ingin mempelajari dasar-dasar kewirausahaan dan pengembangan produk.")}</p></div><div class="mt-6"><div class="flex items-center justify-between"><h3 class="text-base font-semibold text-gray-900">Curriculum</h3><div class="text-xs text-gray-500">${ssrInterpolate(((_e = props.course) == null ? void 0 : _e.lessons_count) ?? 1)} lessons • ${ssrInterpolate(((_f = props.course) == null ? void 0 : _f.duration) ?? "1h")}</div></div><div class="mt-3 divide-y divide-gray-200 rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden"><details open class="group"><summary class="flex items-center justify-between px-4 py-3 cursor-pointer select-none"><span class="font-medium text-sm text-gray-900">Getting Started</span><svg class="h-4 w-4 text-gray-500 group-open:rotate-180 transition" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"></path></svg></summary><ul class="text-sm"><li class="flex items-center justify-between px-4 py-3 hover:bg-gray-50"><div class="flex items-center gap-3"><svg class="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Welcome &amp; Course Overview</span></div><span class="text-gray-500">06:20</span></li><li class="flex items-center justify-between px-4 py-3 hover:bg-gray-50"><div class="flex items-center gap-3"><svg class="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Entrepreneurial Mindset</span></div><span class="text-gray-500">11:45</span></li></ul></details></div></div><div class="mt-6"><h3 class="text-base font-semibold text-gray-900">Course Rating</h3><div class="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4"><div class="rounded-xl ring-1 ring-gray-200 p-4 text-center"><div class="text-3xl font-bold text-gray-900">${ssrInterpolate(fmtRating(unref(overall)))}</div><div class="mt-2 flex items-center justify-center gap-1"><!--[-->`);
      ssrRenderList(5, (n) => {
        _push(`<!--[-->`);
        if (isFull(n)) {
          _push(`<svg class="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"></path></svg>`);
        } else {
          _push(`<svg class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"></path></svg>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><div class="mt-2 text-xs text-gray-500">${ssrInterpolate(useDummy ? "0 reviews" : unref(realTotal) + " reviews")}</div></div><div class="sm:col-span-2 rounded-xl ring-1 ring-gray-200 p-4"><!--[-->`);
      ssrRenderList([5, 4, 3, 2, 1], (i) => {
        _push(`<div class="flex items-center gap-2 py-1.5"><span class="w-20 text-xs text-gray-600">${ssrInterpolate(i)} Star Rating</span><div class="h-2 rounded bg-gray-100 flex-1 overflow-hidden"><div class="h-full bg-yellow-400" style="${ssrRenderStyle({ width: percent(i) + "%" })}"></div></div><span class="w-10 text-xs text-gray-500">${ssrInterpolate(percent(i))}%</span></div>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-6"><h3 class="text-base font-semibold text-gray-900">Students Feedback</h3><div class="mt-3 text-sm text-gray-500">Belum ada ulasan.</div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/course/CourseDetail.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const dummyId = 1;
const _sfc_main$2 = {
  __name: "CourseSidebarCard",
  __ssrInlineRender: true,
  props: {
    course: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const idMap = {
      "becoming-entrepreneur": 1,
      "marketing-fundamentals": 2
    };
    const effectiveId = computed(
      () => {
        var _a, _b;
        return ((_a = props.course) == null ? void 0 : _a.id) ?? idMap[(_b = props.course) == null ? void 0 : _b.slug] ?? dummyId;
      }
    );
    const startHref = computed(
      () => effectiveId.value ? `/courses/${effectiveId.value}/learn` : null
    );
    const detailHref = computed(
      () => {
        var _a;
        return ((_a = props.course) == null ? void 0 : _a.slug) ? `/courses/${props.course.slug}` : "#";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3 rounded-xl border bg-white p-4" }, _attrs))}>`);
      if (startHref.value) {
        _push(ssrRenderComponent(unref(Link), {
          href: startHref.value,
          class: "btn btn-primary w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Mulai Belajar `);
            } else {
              return [
                createTextVNode(" Mulai Belajar ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<button class="btn btn-primary w-full opacity-50 cursor-not-allowed"> Mulai Belajar </button>`);
      }
      _push(ssrRenderComponent(unref(Link), {
        href: detailHref.value,
        class: "btn btn-ghost w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat Detail `);
          } else {
            return [
              createTextVNode(" Lihat Detail ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/course/CourseSidebarCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CourseRelated",
  __ssrInlineRender: true,
  props: {
    items: { type: Array, default: () => [] },
    browseLink: { type: String, default: "#" }
  },
  setup(__props) {
    const props = __props;
    const topFive = computed(() => (props.items || []).slice(0, 5));
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
    const fmtRating = (r) => Number.isFinite(Number(r)) ? Number(r).toFixed(1) : "0.0";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="flex items-center justify-between"><h2 class="text-lg font-semibold text-gray-900">Related Courses</h2>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.browseLink,
        class: "inline-flex items-center gap-1 text-sm font-semibold text-pink-600 hover:text-pink-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All <span aria-hidden="true"${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(" View All "),
              createVNode("span", { "aria-hidden": "true" }, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"><!--[-->`);
      ssrRenderList(topFive.value, (c) => {
        _push(`<article class="rounded-xl bg-white ring-1 ring-gray-200"><div class="aspect-[16/9] rounded-t-xl overflow-hidden bg-gray-100"><img${ssrRenderAttr("src", c.thumbnail)}${ssrRenderAttr("alt", c.title)} class="h-full w-full object-cover"></div><div class="px-4 pt-3 pb-4"><div class="flex items-center justify-between text-[10px]"><span class="${ssrRenderClass(["inline-flex items-center rounded px-2 py-0.5 font-semibold tracking-wide", catColor(c.category)])}">${ssrInterpolate(c.category)}</span><span class="text-pink-600 font-semibold">${ssrInterpolate(c.price ?? "FREE")}</span></div><h3 class="mt-2 text-sm font-semibold text-gray-900 line-clamp-2 min-h-[3.25rem]">${ssrInterpolate(c.title)}</h3><div class="mt-3 border-t border-gray-200 pt-3 flex items-center justify-between text-xs text-gray-500"><span class="inline-flex items-center gap-1"><svg class="h-3.5 w-3.5 text-amber-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2.75l2.12 4.3 4.75.69-3.43 3.35.81 4.71L10 13.88l-4.25 2.22.81-4.71L3.13 7.74l4.75-.69L10 2.75z"></path></svg><span class="text-gray-700">${ssrInterpolate(fmtRating(c == null ? void 0 : c.rating))}</span></span><span>${ssrInterpolate((c == null ? void 0 : c.students) ?? 0)} students</span></div></div></article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/course/CourseRelated.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    course: { type: Object, required: true },
    related: { type: Array, default: () => [] }
  },
  setup(__props) {
    const props = __props;
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
    computed(() => {
      var _a, _b;
      return ((_b = (_a = usePage().props) == null ? void 0 : _a.auth) == null ? void 0 : _b.user) ?? null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        course: props.course
      }, null, _parent));
      _push(`<div class="mx-auto max-w-screen-xl px-6 lg:px-8 py-8"><div class="grid grid-cols-1 lg:grid-cols-12 gap-6"><div class="lg:col-span-8">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        course: props.course
      }, null, _parent));
      _push(`</div><aside class="lg:col-span-4">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        course: props.course,
        "start-link": `/courses/${props.course.id}/learn`,
        "detail-link": `/courses/${props.course.slug}`
      }, null, _parent));
      _push(`</aside></div><div class="mt-10 lg:mt-14">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        items: props.related,
        "browse-link": r("courses.index")
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
