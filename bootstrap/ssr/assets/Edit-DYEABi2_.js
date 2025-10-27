import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Navbar-DmIFRQXd.js";
import { _ as _sfc_main$2 } from "./Footer-D_h-pvsH.js";
import { usePage, useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: { type: Object, required: true },
    flash: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    usePage();
    const form = useForm({
      name: props.user.name ?? "",
      email: props.user.email ?? "",
      avatar: null
    });
    const preview = ref(props.user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(props.user.name || "U")}&background=EBF1FF&color=1F2937`);
    const roleLabel = computed(() => props.user.role ? props.user.role.charAt(0).toUpperCase() + props.user.role.slice(1) : "Belum ditentukan");
    const roleClass = computed(() => {
      switch (props.user.role) {
        case "hustler":
          return "bg-violet-100 text-violet-800 border-violet-200";
        case "hacker":
          return "bg-blue-100 text-blue-800 border-blue-200";
        case "hipster":
          return "bg-emerald-100 text-emerald-800 border-emerald-200";
        case "handler":
          return "bg-amber-100 text-amber-800 border-amber-200";
        default:
          return "bg-gray-100 text-gray-700 border-gray-200";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-[#fafbff]" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main class="flex-1"><div class="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8"><aside class="md:col-span-1"><div class="bg-white rounded-xl shadow p-6 text-center"><img${ssrRenderAttr("src", preview.value)} alt="Avatar" class="h-32 w-32 rounded-full object-cover mx-auto ring-2 ring-white shadow"><div class="mt-4"><span class="${ssrRenderClass([roleClass.value, "inline-flex items-center px-3 py-1 rounded-full border text-sm font-semibold"])}">${ssrInterpolate(roleLabel.value)}</span></div><div class="mt-6"><label class="inline-flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border hover:bg-gray-50"><input type="file" class="sr-only" accept="image/*"><svg class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 118 0m-4-9l-3 3m3-3l3 3M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z"></path></svg><span>Ubah Avatar</span></label><p class="text-xs text-gray-500 mt-2">PNG/JPG maks 2MB.</p>`);
      if (unref(form).errors.avatar) {
        _push(`<div class="text-red-600 text-sm mt-2">${ssrInterpolate(unref(form).errors.avatar)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></aside><section class="md:col-span-2"><div class="bg-white rounded-xl shadow p-6 space-y-6"><header class="flex items-center justify-between"><h1 class="text-xl font-semibold">Profil</h1>`);
      if ((_a = __props.flash) == null ? void 0 : _a.success) {
        _push(`<div class="text-sm px-3 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">${ssrInterpolate(__props.flash.success)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="grid md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium mb-1">Nama</label><input${ssrRenderAttr("value", unref(form).name)} class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500">`);
      if (unref(form).errors.name) {
        _push(`<div class="text-red-600 text-sm">${ssrInterpolate(unref(form).errors.name)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="block text-sm font-medium mb-1">Email</label><input type="email"${ssrRenderAttr("value", unref(form).email)} class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500">`);
      if (unref(form).errors.email) {
        _push(`<div class="text-red-600 text-sm">${ssrInterpolate(unref(form).errors.email)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="flex items-center justify-end gap-3"><button type="button"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow disabled:opacity-50">${ssrInterpolate(unref(form).processing ? "Menyimpan..." : "Simpan Perubahan")}</button></div></div></section></div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
