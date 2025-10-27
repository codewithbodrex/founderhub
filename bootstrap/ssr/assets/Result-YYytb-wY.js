import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./Navbar-DmIFRQXd.js";
import { _ as _sfc_main$2 } from "./Footer-D_h-pvsH.js";
const _sfc_main = {
  __name: "Result",
  __ssrInlineRender: true,
  props: {
    name: String,
    gender: String,
    age_range: String,
    city: String,
    score: Object,
    percent: Object,
    dominant_role: String
  },
  setup(__props) {
    const rows = [
      ["Hustler", "hustler"],
      ["Hacker", "hacker"],
      ["Hipster", "hipster"],
      ["Handler", "handler"]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-[#fafbff] text-slate-800" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="max-w-2xl mx-auto p-6"><h1 class="text-2xl font-bold mb-1">Hasil Tes Peran</h1><p class="text-gray-600 mb-4">Data tersimpan sementara di browser ini. Login/daftar untuk menyimpan ke profil.</p><div class="bg-white shadow rounded p-4 mb-4"><h2 class="font-semibold mb-2">Ringkasan</h2><ul class="text-sm text-gray-700 grid md:grid-cols-2 gap-x-6"><li><strong>Nama:</strong> ${ssrInterpolate(__props.name)}</li><li><strong>Gender:</strong> ${ssrInterpolate(((_a = __props.gender) == null ? void 0 : _a.charAt(0).toUpperCase()) + ((_b = __props.gender) == null ? void 0 : _b.slice(1)))}</li><li><strong>Umur:</strong> ${ssrInterpolate(__props.age_range)}</li><li><strong>Kota:</strong> ${ssrInterpolate(__props.city)}</li></ul></div><div class="bg-white shadow rounded p-4 mb-6"><h2 class="font-semibold mb-3">Skor &amp; Persentase</h2><table class="w-full text-sm"><thead><tr class="text-left border-b"><th class="py-2">Role</th><th>Skor (maks 50)</th><th>%</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(rows, ([label, key]) => {
        var _a2, _b2;
        _push(`<tr class="border-b last:border-0"><td class="py-2">${ssrInterpolate(label)}</td><td>${ssrInterpolate((_a2 = __props.score) == null ? void 0 : _a2[key])}</td><td>${ssrInterpolate((_b2 = __props.percent) == null ? void 0 : _b2[key])}%</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="bg-indigo-50 border border-indigo-200 rounded p-4 mb-6"><p class="mb-1">Peran dominan kamu:</p><p class="text-2xl font-extrabold">${ssrInterpolate(((_c = __props.dominant_role) == null ? void 0 : _c.charAt(0).toUpperCase()) + ((_d = __props.dominant_role) == null ? void 0 : _d.slice(1)))}</p></div><div class="flex gap-3">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "bg-indigo-600 text-white px-4 py-2 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login untuk simpan`);
          } else {
            return [
              createTextVNode("Login untuk simpan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register"),
        class: "bg-white border px-4 py-2 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Daftar`);
          } else {
            return [
              createTextVNode("Daftar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/RoleTest/Result.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
