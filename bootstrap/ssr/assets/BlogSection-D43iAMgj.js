import { mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$4 = {
  __name: "FounderRoles",
  __ssrInlineRender: true,
  setup(__props) {
    const roles = [
      { name: "Hustler", bgColor: "bg-[#D8ECFF]", iconSrc: "/images/hustler-icon.svg" },
      { name: "Hipster", bgColor: "bg-[#EBEBFF]", iconSrc: "/images/hipster-icon.svg" },
      { name: "Hacker", bgColor: "bg-[#FFF0F0]", iconSrc: "/images/hacker-icon.svg" },
      { name: "Handler", bgColor: "bg-[#FFF2E5]", iconSrc: "/images/handler-icon.svg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-12" }, _attrs))}><div class="lg:w-7/12 bg-gradient-to-br from-[#55AEFF] to-[#6F69F7] rounded-3xl lg:rounded-none px-8 py-10 sm:px-12 text-white z-0"><div class="lg:w-3/4"><h2 class="text-2xl font-bold tracking-tight sm:text-3xl"> Setiap Founder Punya Peran. <br> Which Founder Role Fits You Best? </h2><p class="mt-4 text-lg text-indigo-100"> Cari tahu role-mu dan dapatkan jalur belajar yang sesuai. </p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("role-test.index"),
        class: "mt-8 inline-block bg-white text-red-500 font-semibold px-6 py-3 shadow-md hover:bg-gray-100 hover:-translate-y-1 transition-transform duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ikuti Tes FounderPath <span aria-hidden="true"${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(" Ikuti Tes FounderPath "),
              createVNode("span", { "aria-hidden": "true" }, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:w-1/2 z-10"><div class="grid grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(roles, (role) => {
        _push(`<a href="#" class="${ssrRenderClass(["block p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer", role.bgColor])}"><div class="flex items-center gap-4"><div class="p-1"><img${ssrRenderAttr("src", role.iconSrc)}${ssrRenderAttr("alt", role.name + " icon")} class="w-12 h-12"></div><h3 class="font-semibold text-gray-800">${ssrInterpolate(role.name)}</h3></div></a>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FounderRoles.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "TopicCategories",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [
      { name: "Startup & Business Fundamentals", bgColor: "bg-[#E1F7E3]", iconSrc: "/images/startup-icon.svg" },
      { name: "Operation & Productivity", bgColor: "bg-[#EBEBFF]", iconSrc: "/images/operation-icon.svg" },
      { name: "Finance & Accounting", bgColor: "bg-[#FFF2E5]", iconSrc: "/images/finance-icon.svg" },
      { name: "IT & Software", courseCount: "22,649 Courses", bgColor: "bg-[#FFF0F0", iconSrc: "/images/it-icon.svg" },
      { name: "Digital Marketing & Growth", bgColor: "bg-[#EBEBFF]", iconSrc: "/images/digital-icon.svg" },
      { name: "Creative & Design", bgColor: "bg-[#FFF2E5]", iconSrc: "/images/creative-icon.svg" },
      { name: "Office Productivity", bgColor: "bg-[#D8ECFF]", iconSrc: "/images/office-icon.svg" },
      { name: "Personal Development", isSpecial: false, bgColor: "bg-white", iconSrc: "/images/personal-icon.svg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gray-50/50 py-16 sm:py-20" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="text-center"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Top Topic Categories </h2></div><div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<a href="#" class="${ssrRenderClass(["block p-3 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1", category.bgColor])}"><div class="flex items-center gap-4"><div class="bg-white rounded-md"><img${ssrRenderAttr("src", category.iconSrc)}${ssrRenderAttr("alt", category.name + " icon")} class="w-12 h-12"></div><div><p class="font-semibold text-gray-800 text-sm leading-tight">${ssrInterpolate(category.name)}</p>`);
        if (category.courseCount) {
          _push(`<p class="text-xs text-gray-500 mt-1">${ssrInterpolate(category.courseCount)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></a>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-center"><p class="text-sm text-gray-600"> We have more category &amp; subcategory. <a href="#" class="font-semibold text-red-500 hover:text-red-600"> Browse All <span aria-hidden="true">→</span></a></p></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TopicCategories.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-gray-50/50 from-40% to-white to-40% pt-6 pb-24" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 bg-white border border-gray-200/80 rounded-2xl"><div class="text-center mb-12"><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Our Feature Courses </h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"><div class="flex flex-col sm:flex-row"><div class="sm:w-2/5"><img src="/images/course-1.svg" alt="Find Your Role, Build Your Future" class="w-full h-full object-cover"></div><div class="sm:w-3/5 p-5 flex flex-col justify-between"><div><div class="flex justify-between items-center"><p class="text-xs font-semibold text-gray-800 bg-gray-100 px-2 py-1 rounded whitespace-nowrap"> FUNDAMENTAL </p><div class="text-right"><span class="font-bold text-gray-900">Free</span><span class="text-sm text-gray-400 line-through ml-1">Rp89.000</span></div></div><h3 class="mt-3 font-bold text-gray-900 leading-tight">Find Your Role, Build Your Future</h3><div class="mt-3 flex items-center gap-2"><img src="/images/instructor-avatar.svg" alt="instructor" class="w-6 h-6 rounded-full"><span class="text-sm text-gray-600">Kevin Gilbert</span></div></div><div class="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600"><div class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-red-500"><path d="M3 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5ZM8.5 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-10ZM14 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-15Z"></path></svg><span>Beginner</span></div><div class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.5.5 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.5.5 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd"></path></svg><span>2 hour</span></div></div></div></div></div><div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"><div class="flex flex-col sm:flex-row"><div class="sm:w-2/5"><img src="/images/course-2.svg" alt="Startup Fundamentals" class="w-full h-full object-cover"></div><div class="sm:w-3/5 p-5 flex flex-col justify-between"><div><div class="flex justify-between items-center"><p class="text-[10px] font-semibold text-red-600 bg-red-100/60 px-2 py-1 rounded whitespace-nowrap"> STARTUP &amp; BUSINESS FUNDAMENTAL </p><div class="text-right whitespace-nowrap"><span class="font-bold text-gray-900">Free</span><span class="text-sm text-gray-400 line-through ml-1">Rp96.000</span></div></div><h3 class="mt-3 font-bold text-gray-900 leading-tight">Startup Fundamentals - From Idea to MVP</h3><div class="mt-3 flex items-center gap-2"><img src="/images/instructor-avatar.svg" alt="instructor" class="w-6 h-6 rounded-full"><span class="text-sm text-gray-600">Kevin Gilbert</span></div></div><div class="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600"><div class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-red-500"><path d="M3 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5ZM8.5 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-10ZM14 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-15Z"></path></svg><span>Beginner</span></div><div class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.5.5 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.5.5 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd"></path></svg><span>2 hour</span></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FeatureCourses.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FeatureCourses = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "MentorCta",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      { number: "1", text: "Daftar sebagai mentor atau instruktur", bgColor: "bg-indigo-100/60", textColor: "text-indigo-800" },
      { number: "2", text: "Lengkapi & sesuaikan profilmu", bgColor: "bg-red-100/60", textColor: "text-red-800" },
      { number: "3", text: "Buat konten atau sesi pembelajaran", bgColor: "bg-rose-100/60", textColor: "text-rose-800" },
      { number: "4", text: "Mulai menginspirasi founder muda", bgColor: "bg-green-100/60", textColor: "text-green-800" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#F5F7FA] py-24" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"><div class="relative bg-gradient-to-r from-[#FF395A] to-[#FFC25F] rounded-2xl px-8 md:px-12 py-8 overflow-hidden"><div class="relative z-10 sm:w-4/5"><h2 class="text-3xl font-bold text-white leading-tight"> Bangun Generasi Founder Muda Bersama </h2><p class="mt-4 text-white/90"> Bagikan pengalaman, ilmu, dan insight-mu untuk menumbuhkan wirausaha muda Indonesia. </p><div class="mt-8"><a href="#" class="inline-block bg-white text-[#FF395A] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 hover:-translatey-1 transition-transform duration-300"> Daftar Jadi Mentor <span aria-hidden="true">→</span></a></div></div><div class="absolute bottom-0 right-0 h-full w-1/2"><img src="/images/mentor-woman.svg" alt="Become a Mentor" class="absolute bottom-0 right-0 h-[95%] w-auto object-contain"></div></div><div class="bg-white rounded-2xl px-8 md:px-12 py-8"><h3 class="text-2xl font-bold text-gray-900"> Langkah Menjadi Mentor </h3><div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(steps, (step) => {
        _push(`<div class="flex items-start gap-4"><div class="${ssrRenderClass(["flex-shrink-0 w-10 h-10 flex items-center justify-center font-bold rounded-lg", step.bgColor, step.textColor])}">${ssrInterpolate(step.number)}</div><p class="text-gray-700">${ssrInterpolate(step.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MentorCta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "BlogSection",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = [
      {
        imageUrl: "/images/blog-1.svg",
        date: "5 Sept 2025",
        title: "Cara Menemukan Role Founder-mu: Hustler, Hacker, Hipster, atau Handler?",
        excerpt: "Setiap founder punya peran unik. Kenali kekuatanmu dan temukan jalur belajar yang sesuai untuk bangun startup impianmu.",
        href: "#"
      },
      {
        imageUrl: "/images/blog-2.svg",
        date: "10 Sept 2025",
        title: "5 Langkah Validasi Ide Startup Sebelum Bikin Produk",
        excerpt: "Banyak startup gagal karena membangun produk yang tidak dibutuhkan pasar. Pelajari metode validasi sederhana agar ide bisnismu lebih tepat sasaran.",
        href: "#"
      },
      {
        imageUrl: "/images/blog-3.svg",
        date: "15 Sept 2025",
        title: "Teknologi untuk Startup: Tools Gratis yang Wajib Kamu Coba",
        excerpt: "Dari manajemen tim, pemasaran, hingga desain—temukan berbagai tools gratis yang dapat membantu founder mempercepat pertumbuhan startup.",
        href: "#"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white py-24" }, _attrs))}><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between"><div><h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Founder Insights: Blog, Berita, &amp; Event </h2><p class="mt-2 text-lg text-gray-600"> Dapatkan inspirasi, strategi, dan cerita terbaru seputar startup, bisnis, dan perjalanan founder muda Indonesia. </p></div><div class="mt-4 sm:mt-0 flex-shrink-0"><a href="#" class="text-sm font-semibold text-gray-900 hover:text-indigo-500"> Lihat Semua <span aria-hidden="true">→</span></a></div></div><div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(posts, (post) => {
        _push(`<article class="flex flex-col items-start justify-between"><div class="relative w-full"><img${ssrRenderAttr("src", post.imageUrl)}${ssrRenderAttr("alt", post.title)} class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"><div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div></div><div class="max-w-xl"><div class="mt-8 flex items-center gap-x-4 text-xs"><time${ssrRenderAttr("datetime", post.date)} class="text-gray-500">${ssrInterpolate(post.date)}</time></div><div class="group relative"><h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"><a${ssrRenderAttr("href", post.href)}><span class="absolute inset-0"></span> ${ssrInterpolate(post.title)}</a></h3><p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">${ssrInterpolate(post.excerpt)}</p></div><div class="mt-6"><a${ssrRenderAttr("href", post.href)} class="text-sm font-semibold text-gray-900 hover:text-indigo-500"> Selengkapnya <span aria-hidden="true">→</span></a></div></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BlogSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  FeatureCourses as F,
  _sfc_main$4 as _,
  _sfc_main$3 as a,
  _sfc_main$1 as b,
  _sfc_main as c
};
