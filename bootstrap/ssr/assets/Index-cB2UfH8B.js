import { ref, onMounted, watch, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./Navbar-DmIFRQXd.js";
import { _ as _sfc_main$2 } from "./Footer-D_h-pvsH.js";
const QUESTIONS_PER_PAGE = 10;
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    // Bisa object keyed-by-role atau array flat
    questions: { type: [Object, Array], default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const step = ref(0);
    const roleOrder = ["hustler", "hacker", "hipster", "handler"];
    function normalizeToArray(q) {
      if (Array.isArray(q)) return q;
      const arr = [];
      for (const r of roleOrder) if (Array.isArray(q == null ? void 0 : q[r])) arr.push(...q[r]);
      return arr;
    }
    function shuffle(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    const allQuestions = ref([]);
    function rebuild() {
      allQuestions.value = shuffle(
        normalizeToArray(props.questions).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      );
    }
    onMounted(rebuild);
    watch(() => props.questions, rebuild, { deep: true });
    const pagesCount = computed(() => Math.ceil(allQuestions.value.length / QUESTIONS_PER_PAGE));
    const currentStart = computed(() => (step.value - 1) * QUESTIONS_PER_PAGE);
    const currentQuestions = computed(
      () => step.value === 0 ? [] : allQuestions.value.slice(currentStart.value, currentStart.value + QUESTIONS_PER_PAGE)
    );
    const form = useForm({
      name: "",
      gender: "",
      age_range: "",
      city: "",
      answers: []
      // answers[globalIndex] = 1..5
    });
    const totalQuestions = computed(() => allQuestions.value.length);
    const answeredCount = computed(() => form.answers.filter((v) => v != null).length);
    const progress = computed(() => totalQuestions.value ? Math.round(answeredCount.value / totalQuestions.value * 100) : 0);
    const identityValid = computed(
      () => {
        var _a, _b;
        return ((_a = form.name) == null ? void 0 : _a.trim()) && form.gender && form.age_range && ((_b = form.city) == null ? void 0 : _b.trim());
      }
    );
    const pageAnswered = computed(
      () => currentQuestions.value.every((_, qi) => form.answers[currentStart.value + qi] != null)
    );
    const sizes = { 5: "w-12 h-12", 4: "w-9 h-9", 3: "w-7 h-7", 2: "w-9 h-9", 1: "w-12 h-12" };
    const scaleOrder = [5, 4, 3, 2, 1];
    function circleClass(globalIdx, v) {
      const selected = form.answers[globalIdx] === v;
      const base = `rounded-full border-2 ${sizes[v]} flex items-center justify-center transition
                hover:scale-105 focus:outline-none`;
      if (v >= 4) {
        return base + (selected ? " border-emerald-600 bg-emerald-50" : " border-emerald-300");
      } else if (v === 3) {
        return base + (selected ? " border-gray-500 bg-gray-100" : " border-gray-300");
      } else {
        return base + (selected ? " border-violet-600 bg-violet-50" : " border-violet-300");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-[#fafbff] text-slate-800" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<main class="flex-1"><div class="max-w-4xl mx-auto px-4 py-10"><div class="mb-6"><div class="flex items-center justify-between text-sm text-slate-600 mb-2"><span class="font-semibold">Tes Peran 4H</span>`);
      if (totalQuestions.value) {
        _push(`<span>${ssrInterpolate(answeredCount.value)} / ${ssrInterpolate(totalQuestions.value)} terjawab · ${ssrInterpolate(progress.value)}%</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="h-2 bg-slate-200 rounded-full overflow-hidden"><div class="h-full bg-indigo-600 rounded-full transition-all" style="${ssrRenderStyle({ width: progress.value + "%" })}"></div></div></div><h1 class="text-3xl font-extrabold mb-2 text-center">Tes Peran 4H FounderHub</h1><p class="text-gray-600 mb-8 text-center"> Pilih tingkat persetujuan. Kiri = <span class="text-emerald-600 font-medium">Setuju</span>, kanan = <span class="text-violet-600 font-medium">Tidak setuju</span>, tengah = Netral. </p>`);
      if (step.value === 0) {
        _push(`<section class="bg-white shadow-lg rounded-xl p-6 space-y-6"><h2 class="text-xl font-semibold">Data Singkat</h2><div class="grid md:grid-cols-2 gap-6"><div><label class="block text-sm font-medium mb-1">Nama</label><input${ssrRenderAttr("value", unref(form).name)} class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required>`);
        if (unref(form).errors.name) {
          _push(`<div class="text-red-600 text-sm">${ssrInterpolate(unref(form).errors.name)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm font-medium mb-1">Gender</label><select class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, "") : ssrLooseEqual(unref(form).gender, "")) ? " selected" : ""}>Pilih...</option><option value="male"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, "male") : ssrLooseEqual(unref(form).gender, "male")) ? " selected" : ""}>Male</option><option value="female"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, "female") : ssrLooseEqual(unref(form).gender, "female")) ? " selected" : ""}>Female</option><option value="other"${ssrIncludeBooleanAttr(Array.isArray(unref(form).gender) ? ssrLooseContain(unref(form).gender, "other") : ssrLooseEqual(unref(form).gender, "other")) ? " selected" : ""}>Other</option></select>`);
        if (unref(form).errors.gender) {
          _push(`<div class="text-red-600 text-sm">${ssrInterpolate(unref(form).errors.gender)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm font-medium mb-1">Umur</label><select class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required><option value="" disabled${ssrIncludeBooleanAttr(Array.isArray(unref(form).age_range) ? ssrLooseContain(unref(form).age_range, "") : ssrLooseEqual(unref(form).age_range, "")) ? " selected" : ""}>Pilih...</option><option value="16-20"${ssrIncludeBooleanAttr(Array.isArray(unref(form).age_range) ? ssrLooseContain(unref(form).age_range, "16-20") : ssrLooseEqual(unref(form).age_range, "16-20")) ? " selected" : ""}>16-20</option><option value="21-25"${ssrIncludeBooleanAttr(Array.isArray(unref(form).age_range) ? ssrLooseContain(unref(form).age_range, "21-25") : ssrLooseEqual(unref(form).age_range, "21-25")) ? " selected" : ""}>21-25</option><option value="26-30"${ssrIncludeBooleanAttr(Array.isArray(unref(form).age_range) ? ssrLooseContain(unref(form).age_range, "26-30") : ssrLooseEqual(unref(form).age_range, "26-30")) ? " selected" : ""}>26-30</option><option value="&gt;=31"${ssrIncludeBooleanAttr(Array.isArray(unref(form).age_range) ? ssrLooseContain(unref(form).age_range, ">=31") : ssrLooseEqual(unref(form).age_range, ">=31")) ? " selected" : ""}>&gt;=31</option></select>`);
        if (unref(form).errors.age_range) {
          _push(`<div class="text-red-600 text-sm">${ssrInterpolate(unref(form).errors.age_range)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><label class="block text-sm font-medium mb-1">Kota/Kabupaten</label><input${ssrRenderAttr("value", unref(form).city)} class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500" required>`);
        if (unref(form).errors.city) {
          _push(`<div class="text-red-600 text-sm">${ssrInterpolate(unref(form).errors.city)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></section>`);
      } else {
        _push(`<section class="bg-white shadow-lg rounded-xl p-6">`);
        if (currentQuestions.value.length) {
          _push(`<div><!--[-->`);
          ssrRenderList(currentQuestions.value, (q, qi) => {
            _push(`<div class="py-6"><h3 class="text-lg font-semibold mb-4">${ssrInterpolate(q.text)}</h3><div class="flex items-center gap-5"><span class="text-emerald-600 text-sm font-medium mr-1">Setuju</span><div class="flex items-center gap-4"><!--[-->`);
            ssrRenderList(scaleOrder, (v) => {
              _push(`<label class="${ssrRenderClass(circleClass(currentStart.value + qi, v))}"><input type="radio" class="sr-only"${ssrRenderAttr("name", `answers[${currentStart.value + qi}]`)}${ssrRenderAttr("value", v)} required></label>`);
            });
            _push(`<!--]--></div><span class="text-violet-600 text-sm font-medium ml-1">Tidak setuju</span></div>`);
            if (qi !== currentQuestions.value.length - 1) {
              _push(`<div class="h-px bg-slate-100 mt-6"></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="text-center text-gray-500 py-10"> Belum ada pertanyaan. Jalankan <code>php artisan migrate:fresh --seed</code> dulu. </div>`);
        }
        _push(`</section>`);
      }
      _push(`<div class="mt-8 flex items-center justify-between">`);
      if (step.value > 0) {
        _push(`<button type="button" class="px-5 py-3 rounded-full border text-slate-700 hover:bg-slate-50"> Sebelumnya </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1"></div>`);
      if (step.value === 0) {
        _push(`<button type="button"${ssrIncludeBooleanAttr(!identityValid.value) ? " disabled" : ""} class="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold disabled:opacity-50"> Mulai Pertanyaan → </button>`);
      } else {
        _push(`<button type="button"${ssrIncludeBooleanAttr(!pageAnswered.value) ? " disabled" : ""} class="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold disabled:opacity-50">${ssrInterpolate(step.value < pagesCount.value ? "Berikutnya →" : "Kirim Hasil")}</button>`);
      }
      _push(`</div>`);
      if (step.value > 0) {
        _push(`<p class="mt-3 text-center text-sm text-slate-500"> Halaman ${ssrInterpolate(step.value)} dari ${ssrInterpolate(pagesCount.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/RoleTest/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
