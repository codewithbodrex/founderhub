import { ref, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, createBlock, createCommentVNode, vModelText, openBlock, toDisplayString, vModelDynamic, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./GuestLayout-Bn7udMgM.js";
import { _ as _sfc_main$2 } from "./Navbar-DmIFRQXd.js";
const _sfc_main = {
  __name: "SignUp",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      agree: false
    });
    const show1 = ref(false);
    const show2 = ref(false);
    const submit = () => {
      form.post("/register");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Create your account" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`<main class="mx-auto max-w-5xl px-6 py-10"${_scopeId}><div class="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5"${_scopeId}><div class="pointer-events-none absolute inset-0 rounded-[inherit] bg-[url(&#39;/images/auth-bg.svg&#39;)] bg-no-repeat bg-center bg-[length:150%_150%]"${_scopeId}></div><div class="pointer-events-none absolute inset-0 rounded-[inherit]"${_scopeId}></div><div class="relative"${_scopeId}><div class="mx-auto max-w-xl px-6 py-10 sm:px-10 sm:py-14"${_scopeId}><h1 class="mb-8 text-center text-2xl font-semibold tracking-tight text-gray-900"${_scopeId}> Create your account </h1><form class="space-y-6"${_scopeId}><div${_scopeId}><label for="name" class="mb-1 block text-sm text-gray-600"${_scopeId}>Full name</label><input${ssrRenderAttr("value", unref(form).name)} id="name" type="text" placeholder="Your name" class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"${_scopeId}>`);
            if (unref(form).errors.name) {
              _push2(`<p class="mt-1 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.name)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label for="email" class="mb-1 block text-sm text-gray-600"${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} id="email" type="email" autocomplete="email" placeholder="you@example.com" class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"${_scopeId}>`);
            if (unref(form).errors.email) {
              _push2(`<p class="mt-1 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid gap-6 sm:grid-cols-2"${_scopeId}><div${_scopeId}><label for="pass1" class="mb-1 block text-sm text-gray-600"${_scopeId}>Password</label><div class="relative"${_scopeId}><input${ssrRenderDynamicModel(show1.value ? "text" : "password", unref(form).password, null)}${ssrRenderAttr("type", show1.value ? "text" : "password")} id="pass1" autocomplete="new-password" placeholder="••••••••" class="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-gray-900 focus:outline-none"${_scopeId}><button type="button" class="absolute inset-y-0 right-0 grid w-10 place-items-center text-gray-500"${_scopeId}>${ssrInterpolate(show1.value ? "🙈" : "👁️‍🗨️")}</button></div>`);
            if (unref(form).errors.password) {
              _push2(`<p class="mt-1 text-xs text-rose-600"${_scopeId}>${ssrInterpolate(unref(form).errors.password)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label for="pass2" class="mb-1 block text-sm text-gray-600"${_scopeId}>Confirm password</label><div class="relative"${_scopeId}><input${ssrRenderDynamicModel(show2.value ? "text" : "password", unref(form).password_confirmation, null)}${ssrRenderAttr("type", show2.value ? "text" : "password")} id="pass2" autocomplete="new-password" placeholder="••••••••" class="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-gray-900 focus:outline-none"${_scopeId}><button type="button" class="absolute inset-y-0 right-0 grid w-10 place-items-center text-gray-500"${_scopeId}>${ssrInterpolate(show2.value ? "🙈" : "👁️‍🗨️")}</button></div></div></div><div class="flex items-center justify-between gap-4"${_scopeId}><label class="inline-flex items-start gap-2 text-sm text-gray-700"${_scopeId}><input id="agree" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).agree) ? ssrLooseContain(unref(form).agree, null) : unref(form).agree) ? " checked" : ""} class="mt-1 h-4 w-4 rounded border-gray-300"${_scopeId}><span${_scopeId}>I agree to the <a href="#" class="underline"${_scopeId}>Terms</a> and <a href="#" class="underline"${_scopeId}>Privacy</a>.</span></label><button${ssrIncludeBooleanAttr(unref(form).processing || !unref(form).agree) ? " disabled" : ""} type="submit" class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60"${_scopeId}><span${_scopeId}>Create Account</span><span${_scopeId}>→</span></button></div><div class="relative my-8"${_scopeId}><div class="absolute inset-0 flex items-center"${_scopeId}><div class="h-px w-full bg-gray-200"${_scopeId}></div></div><div class="relative flex justify-center"${_scopeId}><span class="rounded bg-white/70 px-3 text-xs text-gray-500"${_scopeId}>OR</span></div></div><div class="flex"${_scopeId}><a href="/auth/google/redirect" class="mx-auto flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm hover:bg-gray-50"${_scopeId}><img src="/images/google.svg" class="h-5 w-5" alt="Google"${_scopeId}><span${_scopeId}>Continue with Google</span></a></div><p class="text-sm text-gray-600"${_scopeId}> Already have an account? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/login",
              class: "font-medium text-gray-900 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign In`);
                } else {
                  return [
                    createTextVNode("Sign In")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></form></div></div></div></main>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Create your account" }),
              createVNode(_sfc_main$2),
              createVNode("main", { class: "mx-auto max-w-5xl px-6 py-10" }, [
                createVNode("div", { class: "relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5" }, [
                  createVNode("div", { class: "pointer-events-none absolute inset-0 rounded-[inherit] bg-[url('/images/auth-bg.svg')] bg-no-repeat bg-center bg-[length:150%_150%]" }),
                  createVNode("div", { class: "pointer-events-none absolute inset-0 rounded-[inherit]" }),
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "mx-auto max-w-xl px-6 py-10 sm:px-10 sm:py-14" }, [
                      createVNode("h1", { class: "mb-8 text-center text-2xl font-semibold tracking-tight text-gray-900" }, " Create your account "),
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "space-y-6"
                      }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "name",
                            class: "mb-1 block text-sm text-gray-600"
                          }, "Full name"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            id: "name",
                            type: "text",
                            placeholder: "Your name",
                            class: "w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).name]
                          ]),
                          unref(form).errors.name ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-xs text-rose-600"
                          }, toDisplayString(unref(form).errors.name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "email",
                            class: "mb-1 block text-sm text-gray-600"
                          }, "Email"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            id: "email",
                            type: "email",
                            autocomplete: "email",
                            placeholder: "you@example.com",
                            class: "w-full rounded-xl border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).email]
                          ]),
                          unref(form).errors.email ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-xs text-rose-600"
                          }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "grid gap-6 sm:grid-cols-2" }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "pass1",
                              class: "mb-1 block text-sm text-gray-600"
                            }, "Password"),
                            createVNode("div", { class: "relative" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                type: show1.value ? "text" : "password",
                                id: "pass1",
                                autocomplete: "new-password",
                                placeholder: "••••••••",
                                class: "w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-gray-900 focus:outline-none"
                              }, null, 8, ["onUpdate:modelValue", "type"]), [
                                [vModelDynamic, unref(form).password]
                              ]),
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => show1.value = !show1.value,
                                class: "absolute inset-y-0 right-0 grid w-10 place-items-center text-gray-500"
                              }, toDisplayString(show1.value ? "🙈" : "👁️‍🗨️"), 9, ["onClick"])
                            ]),
                            unref(form).errors.password ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-1 text-xs text-rose-600"
                            }, toDisplayString(unref(form).errors.password), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "pass2",
                              class: "mb-1 block text-sm text-gray-600"
                            }, "Confirm password"),
                            createVNode("div", { class: "relative" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                type: show2.value ? "text" : "password",
                                id: "pass2",
                                autocomplete: "new-password",
                                placeholder: "••••••••",
                                class: "w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-gray-900 focus:outline-none"
                              }, null, 8, ["onUpdate:modelValue", "type"]), [
                                [vModelDynamic, unref(form).password_confirmation]
                              ]),
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => show2.value = !show2.value,
                                class: "absolute inset-y-0 right-0 grid w-10 place-items-center text-gray-500"
                              }, toDisplayString(show2.value ? "🙈" : "👁️‍🗨️"), 9, ["onClick"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between gap-4" }, [
                          createVNode("label", { class: "inline-flex items-start gap-2 text-sm text-gray-700" }, [
                            withDirectives(createVNode("input", {
                              id: "agree",
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).agree = $event,
                              class: "mt-1 h-4 w-4 rounded border-gray-300"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).agree]
                            ]),
                            createVNode("span", null, [
                              createTextVNode("I agree to the "),
                              createVNode("a", {
                                href: "#",
                                class: "underline"
                              }, "Terms"),
                              createTextVNode(" and "),
                              createVNode("a", {
                                href: "#",
                                class: "underline"
                              }, "Privacy"),
                              createTextVNode(".")
                            ])
                          ]),
                          createVNode("button", {
                            disabled: unref(form).processing || !unref(form).agree,
                            type: "submit",
                            class: "inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-60"
                          }, [
                            createVNode("span", null, "Create Account"),
                            createVNode("span", null, "→")
                          ], 8, ["disabled"])
                        ]),
                        createVNode("div", { class: "relative my-8" }, [
                          createVNode("div", { class: "absolute inset-0 flex items-center" }, [
                            createVNode("div", { class: "h-px w-full bg-gray-200" })
                          ]),
                          createVNode("div", { class: "relative flex justify-center" }, [
                            createVNode("span", { class: "rounded bg-white/70 px-3 text-xs text-gray-500" }, "OR")
                          ])
                        ]),
                        createVNode("div", { class: "flex" }, [
                          createVNode("a", {
                            href: "/auth/google/redirect",
                            class: "mx-auto flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm hover:bg-gray-50"
                          }, [
                            createVNode("img", {
                              src: "/images/google.svg",
                              class: "h-5 w-5",
                              alt: "Google"
                            }),
                            createVNode("span", null, "Continue with Google")
                          ])
                        ]),
                        createVNode("p", { class: "text-sm text-gray-600" }, [
                          createTextVNode(" Already have an account? "),
                          createVNode(unref(Link), {
                            href: "/login",
                            class: "font-medium text-gray-900 hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Sign In")
                            ]),
                            _: 1
                          })
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/SignUp.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
