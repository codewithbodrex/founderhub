import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./Navbar-DmIFRQXd.js";
import { _ as _sfc_main$2 } from "./Footer-D_h-pvsH.js";
const _sfc_main = {
  __name: "StartLearningPage",
  __ssrInlineRender: true,
  props: {
    course: { type: Object, required: true }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const sections = ((_a = props.course) == null ? void 0 : _a.sections) ?? [];
    const allLectures = sections.flatMap((s) => s.lectures ?? []);
    const currentLecture = ref(allLectures[0] || null);
    const courseTitle = computed(() => {
      var _a2;
      return ((_a2 = props.course) == null ? void 0 : _a2.title) || "Course";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-[#fafbff] text-slate-800" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main class="flex-1"><div class="max-w-6xl mx-auto px-4 pt-6"><div class="mb-4 flex items-center justify-between text-sm text-slate-600"><span class="font-semibold">${ssrInterpolate(courseTitle.value)}</span></div></div><div class="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-12 gap-6"><aside class="col-span-12 md:col-span-4 lg:col-span-3 bg-white rounded-xl shadow-sm border"><div class="p-4 border-b"><p class="text-xs uppercase text-slate-500">Contents</p></div><div><!--[-->`);
      ssrRenderList(unref(sections), (sec) => {
        _push(`<div class="px-4 py-3"><p class="text-xs font-semibold text-slate-600 mb-2">${ssrInterpolate(sec.title)}</p><ul class="space-y-1"><!--[-->`);
        ssrRenderList(sec.lectures, (lec) => {
          var _a3;
          _push(`<li class="${ssrRenderClass([{ "bg-indigo-50 ring-1 ring-indigo-200": lec.id === ((_a3 = currentLecture.value) == null ? void 0 : _a3.id) }, "px-3 py-2 rounded cursor-pointer hover:bg-slate-50"])}"><span class="truncate">${ssrInterpolate(lec.title)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></aside><section class="col-span-12 md:col-span-8 lg:col-span-9"><div class="bg-black rounded-xl overflow-hidden shadow"><div class="relative pt-[56.25%]">`);
      if (currentLecture.value) {
        _push(`<video${ssrRenderAttr("src", `/lectures/${currentLecture.value.id}/stream`)} controls controlsList="nodownload noremoteplayback" disablePictureInPicture class="absolute inset-0 w-full h-full"></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-3"><h1 class="text-xl font-bold">${ssrInterpolate((_a2 = currentLecture.value) == null ? void 0 : _a2.title)}</h1><button type="button" class="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-slate-700 hover:bg-slate-50" aria-label="Go back" title="Back"> ← Back </button></div></section></div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Courses/StartLearningPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
