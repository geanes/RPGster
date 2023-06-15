import { w as writable$1 } from "./index.js";
import { t as get_store_value, c as create_ssr_component, s as setContext, e as escape, l as compute_slots, b as createEventDispatcher, p as getContext, g as subscribe, d as add_attribute } from "./index2.js";
import { p as page } from "./stores.js";
const themeSkeleton = "";
const skeleton = "";
const app = "";
const storeHighlightJs = writable$1(void 0);
const storePopup = writable$1(void 0);
function drawerService() {
  const { subscribe: subscribe2, set, update } = writable$1({});
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
const drawerStore = drawerService();
const stores$1 = /* @__PURE__ */ new WeakMap();
const factories = /* @__PURE__ */ new Map();
const createOrRetrieve = (key) => {
  const p = get_store_value(page);
  let scopedStores = stores$1.get(p);
  if (!scopedStores) {
    scopedStores = /* @__PURE__ */ new Map();
    stores$1.set(p, scopedStores);
  }
  let store = scopedStores.get(key);
  if (!store) {
    store = factories.get(key)();
    scopedStores.set(key, store);
  }
  return store;
};
const writable = (value, start) => {
  const key = Symbol();
  factories.set(key, () => writable$1(value, start));
  return {
    subscribe: (run, invalidate) => createOrRetrieve(key).subscribe(run, invalidate),
    set: (value2) => createOrRetrieve(key).set(value2),
    update: (updater) => createOrRetrieve(key).update(updater)
  };
};
function modalService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const modalStore = modalService();
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function handleAutoHide(toast) {
  if (toast.autohide === true) {
    return setTimeout(() => {
      toastStore.close(toast.id);
    }, toast.timeout);
  }
}
function toastService() {
  const { subscribe: subscribe2, set, update } = writable$1([]);
  return {
    subscribe: subscribe2,
    /** Add a new toast to the queue. */
    trigger: (toast) => update((tStore) => {
      const id = randomUUID();
      if (toast && toast.callback)
        toast.callback({ id, status: "queued" });
      const tMerged = { ...toastDefaults, ...toast, id };
      tMerged.timeoutId = handleAutoHide(tMerged);
      tStore.push(tMerged);
      return tStore;
    }),
    /** Remove first toast in queue */
    close: (id) => update((tStore) => {
      if (tStore.length > 0) {
        const index = tStore.findIndex((t) => t.id === id);
        const selectedToast = tStore[index];
        if (selectedToast) {
          if (selectedToast.callback)
            selectedToast.callback({ id, status: "closed" });
          if (selectedToast.timeoutId)
            clearTimeout(selectedToast.timeoutId);
          tStore.splice(index, 1);
        }
      }
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
const toastStore = toastService();
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable$1(initialValue, (set2) => {
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { autocollapse = false } = $$props;
  let { duration = 200 } = $$props;
  let { width = "w-full" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { disabled = false } = $$props;
  let { padding = "py-2 px-4" } = $$props;
  let { hover = "hover:bg-primary-hover-token" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { caretOpen = "rotate-180" } = $$props;
  let { caretClosed = "" } = $$props;
  let { regionControl = "" } = $$props;
  let { regionPanel = "space-y-4" } = $$props;
  let { regionCaret = "" } = $$props;
  const active = writable$1(null);
  setContext("active", active);
  setContext("autocollapse", autocollapse);
  setContext("duration", duration);
  setContext("disabled", disabled);
  setContext("padding", padding);
  setContext("hover", hover);
  setContext("rounded", rounded);
  setContext("caretOpen", caretOpen);
  setContext("caretClosed", caretClosed);
  setContext("regionControl", regionControl);
  setContext("regionPanel", regionPanel);
  setContext("regionCaret", regionCaret);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  classesBase = `${width} ${spacing} ${$$props.class ?? ""}`;
  return `

<div class="${"accordion " + escape(classesBase, true)}" data-testid="accordion">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "";
const cControl = "text-left w-full flex items-center space-x-4";
const cControlCaret = "fill-current w-3 transition-transform duration-[200ms]";
const cPanel = "";
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openState;
  let classesBase;
  let classesControl;
  let classesCaretState;
  let classesControlCaret;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let $active, $$unsubscribe_active;
  const dispatch = createEventDispatcher();
  let { open = false } = $$props;
  let { id = String(Math.random()) } = $$props;
  let { autocollapse = getContext("autocollapse") } = $$props;
  let { active = getContext("active") } = $$props;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  let { duration = getContext("duration") } = $$props;
  let { disabled = getContext("disabled") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { caretOpen = getContext("caretOpen") } = $$props;
  let { caretClosed = getContext("caretClosed") } = $$props;
  let { regionControl = getContext("regionControl") } = $$props;
  let { regionPanel = getContext("regionPanel") } = $$props;
  let { regionCaret = getContext("regionCaret") } = $$props;
  function setActive(event) {
    if (autocollapse === true) {
      active.set(id);
    } else {
      open = !open;
    }
    onToggle(event);
  }
  function onToggle(event) {
    const currentOpenState = autocollapse ? $active === id : open;
    dispatch("toggle", {
      event,
      id: `accordion-control-${id}`,
      open: currentOpenState,
      autocollapse
    });
  }
  if (autocollapse && open)
    setActive();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.autocollapse === void 0 && $$bindings.autocollapse && autocollapse !== void 0)
    $$bindings.autocollapse(autocollapse);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.caretOpen === void 0 && $$bindings.caretOpen && caretOpen !== void 0)
    $$bindings.caretOpen(caretOpen);
  if ($$props.caretClosed === void 0 && $$bindings.caretClosed && caretClosed !== void 0)
    $$bindings.caretClosed(caretClosed);
  if ($$props.regionControl === void 0 && $$bindings.regionControl && regionControl !== void 0)
    $$bindings.regionControl(regionControl);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.regionCaret === void 0 && $$bindings.regionCaret && regionCaret !== void 0)
    $$bindings.regionCaret(regionCaret);
  {
    if (open && autocollapse)
      setActive();
  }
  openState = autocollapse ? $active === id : open;
  classesBase = `${cBase} ${$$props.class ?? ""}`;
  classesControl = `${cControl} ${padding} ${hover} ${rounded} ${regionControl}`;
  classesCaretState = openState ? caretOpen : caretClosed;
  classesControlCaret = `${cControlCaret} ${regionCaret} ${classesCaretState}`;
  classesPanel = `${cPanel} ${padding} ${rounded} ${regionPanel}`;
  $$unsubscribe_active();
  return `

<div class="${"accordion-item " + escape(classesBase, true)}" data-testid="accordion-item">
	<button type="button" class="${"accordion-control " + escape(classesControl, true)}" id="${"accordion-control-" + escape(id, true)}"${add_attribute("aria-expanded", openState, 0)} aria-controls="${"accordion-panel-" + escape(id, true)}" ${disabled ? "disabled" : ""}>
		${$$slots.lead ? `<div class="accordion-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="accordion-summary flex-1">${slots.summary ? slots.summary({}) : `(summary)`}</div>
		
		<div class="${"accordion-summary-caret " + escape(classesControlCaret, true)}">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg></div></button>
	
	${openState ? `<div class="${"accordion-panel " + escape(classesPanel, true)}" id="${"accordion-panel-" + escape(id, true)}" role="region"${add_attribute("aria-hidden", !openState, 0)} aria-labelledby="${"accordion-control-" + escape(id, true)}">${slots.content ? slots.content({}) : `(content)`}</div>` : ``}</div>`;
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const convertHexColor = (hexColor) => {
  hexColor = hexColor.replace(/^#/, "");
  hexColor = hexColor.toLowerCase();
  return hexColor === "000000" ? "transparent" : hexColor;
};
const toTitleCase = (str) => {
  str = str.replace(/_/g, " ");
  const words = str.split(/(?=[A-Z])/);
  const firstWord = words[0][0].toUpperCase() + words[0].slice(1);
  const restOfWords = words.slice(1).join(" ");
  return `${firstWord} ${restOfWords}`;
};
const inList = (list, id) => {
  const listIds = list.map((i) => i.id);
  const qty = listIds.filter((i) => i === id).length;
  return { in: listIds.includes(id), qty };
};
const modify = writable(false);
const currentMetadata = writable({
  campaign: "New Campaign"
});
const currentState = writable({
  carryWeight: 0,
  skillPoints: 0,
  featTokens: 0,
  money: 0
});
const currentAvatar = writable({
  link: "",
  eyes: "#000000",
  hair: "#000000",
  skin: "#FDA23A",
  bgColor: "#000000",
  customSeed: ""
});
const currentAttributes = writable({
  name: "",
  race: "",
  class: "",
  level: 1,
  xp: 0,
  alignment: "",
  deity: "",
  size: "",
  sizeMod: 0,
  age: 20,
  gender: "",
  height: "",
  weight: ""
});
const currentHealth = writable({
  maxHP: 0,
  currentHP: 0,
  dmgBuff: 0,
  dmgNonLethal: 0
});
const currentAbilities = writable({
  str: {
    score: 10,
    mod: 0,
    scoreTemp: 0,
    modTemp: 0,
    temp: false
  },
  dex: {
    score: 10,
    mod: 0,
    scoreTemp: 0,
    modTemp: 0,
    temp: false
  },
  con: {
    score: 10,
    mod: 0,
    scoreTemp: 0,
    modTemp: 0,
    temp: false
  },
  int: {
    score: 10,
    mod: 0,
    scoreTemp: 0,
    modTemp: 0,
    temp: false
  },
  wis: {
    score: 10,
    mod: 0,
    scoreTemp: 0,
    modTemp: 0,
    temp: false
  },
  cha: {
    score: 10,
    mod: 0,
    scoreTemp: 0,
    modTemp: 0,
    temp: false
  }
});
const currentSaves = writable({
  fortTotal: null,
  fortBase: 0,
  fortMagicMod: 0,
  fortMiscMod: 0,
  fortTempMod: 0,
  fortTemp: false,
  reflexTotal: null,
  reflexBase: 0,
  reflexMagicMod: 0,
  reflexMiscMod: 0,
  reflexTempMod: 0,
  reflexTemp: false,
  willTotal: null,
  willBase: 0,
  willMagicMod: 0,
  willMiscMod: 0,
  willTempMod: 0,
  willTemp: false
});
const currentAttack = writable({
  bab: 0,
  spellResist: 0,
  grappleTotal: null,
  grappleMiscMod: 0
});
const currentMisc = writable({
  speed: 30,
  speedTempValue: 30,
  speedTemp: false,
  initTotal: null,
  initMiscMod: 0,
  acTotal: null,
  acBase: 10,
  armorBonus: 0,
  shieldBonus: 0,
  naturalArmor: 0,
  deflectMod: 0,
  acMiscMod: 0,
  touch: 0,
  flatFooted: 0,
  maxHP: 0,
  dmgReduction: 0
});
const currentSkills = writable({
  skills: [],
  userSkills: []
});
const currentFeats = writable({
  feats: [],
  userFeats: []
});
const currentGear = writable({
  armor: [],
  userArmor: [],
  weapons: [],
  userWeapons: [],
  equipment: [],
  userEquipment: []
});
const currentSpells = writable({
  spells: [],
  userSpells: []
});
export {
  Accordion as A,
  currentAbilities as a,
  currentFeats as b,
  currentSkills as c,
  drawerStore as d,
  AccordionItem as e,
  currentGear as f,
  currentSpells as g,
  currentMisc as h,
  inList as i,
  currentAttack as j,
  currentSaves as k,
  currentHealth as l,
  modalStore as m,
  currentAttributes as n,
  currentAvatar as o,
  currentState as p,
  currentMetadata as q,
  storePopup as r,
  storeHighlightJs as s,
  toTitleCase as t,
  convertHexColor as u,
  modify as v
};
