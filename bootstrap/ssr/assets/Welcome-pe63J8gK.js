import { mergeProps, useSSRContext, withCtx, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./GuestLayout-Bn7udMgM.js";
import { _ as _sfc_main$3 } from "./Navbar-DmIFRQXd.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$4, a as _sfc_main$5, F as FeatureCourses, b as _sfc_main$6, c as _sfc_main$7 } from "./BlogSection-D43iAMgj.js";
import { _ as _sfc_main$8 } from "./Footer-D_h-pvsH.js";
import { Head } from "@inertiajs/vue3";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative bg-white" }, _attrs))}><div class="px-6 lg:px-8"><div class="relative rounded-3xl overflow-hidden" style="${ssrRenderStyle({ "background-image": "url('/images/HeroSection.svg')", "background-size": "cover", "background-position": "center", "background-repeat": "no-repeat" })}"><div class="relative flex items-center aspect-[1661/544] sm:aspect-video lg:aspect-[3.05/1] px-8 sm:px-16 lg:px-24"><div class="max-w-lg text-left"><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"> Temukan Peranmu, Bangun Startup Impianmu </h1><p class="mt-6 text-base leading-relaxed text-gray-800"> Pelajari skill penting, temukan peranmu (Hustler, Hacker, Hipster, Handler), dan bangun bisnis berdampak dengan mentor berpengalaman. </p><div class="mt-10 flex items-center gap-x-6"><a href="/dashboard" class="rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"> Mulai Belajar </a><a href="#" class="text-sm font-semibold leading-6 text-gray-900 group"> Lihat Alur Belajar <span aria-hidden="true" class="ml-1 transition-transform group-hover:translate-x-1">→</span></a></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "FounderHub - Bangun Startup Impianmu" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`<main class="mx-auto max-w-screen-xl px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(HeroSection, null, null, _parent2, _scopeId));
            _push2(`</main><section class="mx-auto max-w-6xl px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</section>`);
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(FeatureCourses, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "FounderHub - Bangun Startup Impianmu" }),
              createVNode(_sfc_main$3),
              createVNode("main", { class: "mx-auto max-w-screen-xl px-6 lg:px-8" }, [
                createVNode(HeroSection)
              ]),
              createVNode("section", { class: "mx-auto max-w-6xl px-6 lg:px-8" }, [
                createVNode(_sfc_main$4)
              ]),
              createVNode(_sfc_main$5),
              createVNode(FeatureCourses),
              createVNode(_sfc_main$6),
              createVNode(_sfc_main$7),
              createVNode(_sfc_main$8)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
