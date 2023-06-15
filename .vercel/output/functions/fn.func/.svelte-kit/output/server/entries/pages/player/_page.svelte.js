import { j as assign, k as is_function, c as create_ssr_component, e as escape, d as add_attribute, l as compute_slots, a as compute_rest_props, h as spread, n as escape_attribute_value, i as escape_object, o as add_styles, s as setContext, p as getContext, g as subscribe, v as validate_component, q as set_store_value, f as each, r as add_classes } from "../../../chunks/index2.js";
import { l as currentHealth, o as currentAvatar, n as currentAttributes, r as storePopup, u as convertHexColor, v as modify, a as currentAbilities, j as currentAttack, k as currentSaves, h as currentMisc, c as currentSkills, b as currentFeats, A as Accordion, e as AccordionItem, f as currentGear, t as toTitleCase, g as currentSpells, p as currentState } from "../../../chunks/storeCharacter.js";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import "iconify-icon";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from_node, node, params) {
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
    const from = from_node.getBoundingClientRect();
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, node);
      return () => {
        if (counterparts.has(params.key)) {
          const other_node = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(other_node, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
const cBase$4 = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$4} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}>
	<div class="${"app-bar-row-main " + escape(classesRowMain, true)}">
		${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
		
		${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>
	
	${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
let cBase$3 = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full h-full object-cover";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "AB" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0)
    $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0)
    $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  classesBase = `${cBase$3} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `<figure class="${"avatar " + escape(classesBase, true)}" data-testid="avatar">${src ? `<img${spread(
    [
      {
        class: "avatar-image " + escape(cImage, true)
      },
      {
        style: escape_attribute_value($$props.style ?? "")
      },
      { src: escape_attribute_value(src) },
      {
        alt: escape_attribute_value($$props.alt || "")
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>` : `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", 150, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>`}</figure>`;
});
const css = {
  code: ".animIndeterminate.svelte-meqa4r{transform-origin:0% 50%;animation:svelte-meqa4r-animIndeterminate 2s infinite linear}@keyframes svelte-meqa4r-animIndeterminate{0%{transform:translateX(0) scaleX(0)}40%{transform:translateX(0) scaleX(0.4)}100%{transform:translateX(100%) scaleX(0.5)}}",
  map: null
};
const cTrack = "w-full overflow-hidden";
const cMeter = "h-full";
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fillPercent;
  let indeterminate;
  let classesIndeterminate;
  let classesTrack;
  let classesMeter;
  let { value = void 0 } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { height = "h-2" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { meter = "bg-surface-900-50-token" } = $$props;
  let { track = "bg-surface-200-700-token" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.meter === void 0 && $$bindings.meter && meter !== void 0)
    $$bindings.meter(meter);
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  $$result.css.add(css);
  fillPercent = value ? 100 * (value - min) / (max - min) : 0;
  indeterminate = value === void 0 || value < 0;
  classesIndeterminate = indeterminate ? "animIndeterminate" : "";
  classesTrack = `${cTrack} ${height} ${rounded} ${track} ${$$props.class ?? ""}`;
  classesMeter = `${cMeter} ${rounded} ${classesIndeterminate} ${meter}`;
  return `
<div class="${"progress-bar " + escape(classesTrack, true) + " svelte-meqa4r"}" data-testid="progress-bar" role="progressbar"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-valuenow", value, 0)}${add_attribute("aria-valuemin", min, 0)}${add_attribute("aria-valuemax", max - min, 0)}>
	<div class="${"progress-bar-meter " + escape(classesMeter, true) + " " + escape(classesMeter, true) + " svelte-meqa4r"}"${add_styles({
    "width": `${indeterminate ? 100 : fillPercent}%`
  })}></div>
</div>`;
});
const cBase$2 = "progress-radial relative overflow-hidden";
const cBaseTrack = "fill-transparent";
const cBaseMeter = "fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%]";
const baseSize = 512;
const ProgressRadial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$slots = compute_slots(slots);
  let { value = void 0 } = $$props;
  let { stroke = 40 } = $$props;
  let { font = 56 } = $$props;
  let { width = "w-36" } = $$props;
  let { meter = "stroke-surface-900 dark:stroke-surface-50" } = $$props;
  let { track = "stroke-surface-500/30" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { labelledby = "" } = $$props;
  const radius = baseSize / 2;
  let circumference = radius;
  let dashoffset;
  function setProgress(percent) {
    circumference = radius * 2 * Math.PI;
    dashoffset = circumference - percent / 100 * circumference;
  }
  setProgress(0);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.font === void 0 && $$bindings.font && font !== void 0)
    $$bindings.font(font);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.meter === void 0 && $$bindings.meter && meter !== void 0)
    $$bindings.meter(meter);
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$2} ${width} ${$$props.class ?? ""}`;
  return `


<figure class="${"progress-radial " + escape(classesBase, true)}" data-testid="progress-radial" role="meter"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-valuenow", value || 0, 0)}${add_attribute("aria-valuetext", value ? `${value}%` : "Indeterminate Spinner", 0)}${add_attribute("aria-valuemin", 0, 0)}${add_attribute("aria-valuemax", 100, 0)}>
	<svg viewBox="${"0 0 " + escape(baseSize, true) + " " + escape(baseSize, true)}" class="${["rounded-full", value === void 0 ? "animate-spin" : ""].join(" ").trim()}"><circle class="${"progress-radial-track " + escape(cBaseTrack, true) + " " + escape(track, true)}"${add_attribute("stroke-width", stroke, 0)}${add_attribute("r", baseSize / 2, 0)} cx="50%" cy="50%"></circle><circle class="${"progress-radial-meter " + escape(cBaseMeter, true) + " " + escape(meter, true)}"${add_attribute("stroke-width", stroke, 0)}${add_attribute("r", baseSize / 2, 0)} cx="50%" cy="50%"${add_styles({
    "stroke-dasharray": `${circumference}
			${circumference}`,
    "stroke-dashoffset": dashoffset
  })}></circle>${value != void 0 && value >= 0 && $$slots.default ? `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-weight="bold"${add_attribute("font-size", font, 0)} class="${"progress-radial-text " + escape(fill, true)}">${slots.default ? slots.default({}) : ``}</text>` : ``}</svg></figure>`;
});
const cBase$1 = "space-y-4";
const cList = "flex overflow-x-auto hide-scrollbar";
const cPanel = "";
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesList;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let { justify = "justify-start" } = $$props;
  let { border = "border-b border-surface-400-500-token" } = $$props;
  let { active = "border-b-2 border-surface-900-50-token" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { flex = "flex-none" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { rounded = "rounded-tl-container-token rounded-tr-container-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { regionList = "" } = $$props;
  let { regionPanel = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { panel = "" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("flex", flex);
  setContext("padding", padding);
  setContext("rounded", rounded);
  setContext("spacing", spacing);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.panel === void 0 && $$bindings.panel && panel !== void 0)
    $$bindings.panel(panel);
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesList = `${cList} ${justify} ${border} ${regionList}`;
  classesPanel = `${cPanel} ${regionPanel}`;
  return `<div class="${"tab-group " + escape(classesBase, true)}" data-testid="tab-group">
	<div class="${"tab-list " + escape(classesList, true)}" role="tablist"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>
	
	${$$slots.panel ? `<div class="${"tab-panel " + escape(classesPanel, true)}" role="tabpanel"${add_attribute("aria-labelledby", panel, 0)} tabindex="0">${slots.panel ? slots.panel({}) : ``}</div>` : ``}</div>`;
});
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesInterface;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "controls",
    "active",
    "hover",
    "flex",
    "padding",
    "rounded",
    "spacing"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { controls = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  selected = value === group;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  return `<label>
	<div class="${"tab " + escape(classesBase, true)}" data-testid="tab" role="tab"${add_attribute("aria-controls", controls, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("tabindex", selected ? 0 : -1, 0)}>
		<div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>
		
		<div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			<div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const CharAvatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentHealth, $$unsubscribe_currentHealth;
  let $currentAvatar, $$unsubscribe_currentAvatar;
  let $currentAttributes, $$unsubscribe_currentAttributes;
  $$unsubscribe_currentHealth = subscribe(currentHealth, (value) => $currentHealth = value);
  $$unsubscribe_currentAvatar = subscribe(currentAvatar, (value) => $currentAvatar = value);
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => $currentAttributes = value);
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  const generateAvatar = (seed = $currentAttributes.name, backgroundColor = convertHexColor($currentAvatar.bgColor), hairColor = convertHexColor($currentAvatar.hair), skinColor = convertHexColor($currentAvatar.skin)) => {
    const dbAvatar = createAvatar(avataaars, {
      seed,
      backgroundColor: [backgroundColor],
      hairColor: [hairColor],
      skinColor: [skinColor]
    });
    return dbAvatar.toDataUriSync();
  };
  let userAvatar = generateAvatar();
  let hpRing = 100;
  let ringMeter = "stroke-primary-500";
  let ringTrack = "stroke-surface-500/30";
  {
    {
      const currentAvatarSeed = !$currentAvatar.customSeed ? $currentAttributes.name : $currentAvatar.customSeed;
      userAvatar = generateAvatar(currentAvatarSeed, convertHexColor($currentAvatar.bgColor), convertHexColor($currentAvatar.hair), convertHexColor($currentAvatar.skin));
    }
  }
  {
    {
      hpRing = Math.round($currentHealth.currentHP / $currentHealth.maxHP * 100);
      if ($currentHealth.currentHP > $currentHealth.maxHP) {
        ringMeter = "stroke-secondary-500";
        ringTrack = "stroke-primary-500";
      } else if ($currentHealth.currentHP < 0) {
        ringMeter = "stroke-error-500";
      } else if (hpRing <= 25) {
        ringMeter = "stroke-warning-500";
        ringTrack = "stroke-surface-500/30";
      } else {
        ringMeter = "stroke-primary-500";
        ringTrack = "stroke-surface-500/30";
      }
    }
  }
  $$unsubscribe_currentHealth();
  $$unsubscribe_currentAvatar();
  $$unsubscribe_currentAttributes();
  return `<div class="grid grid-cols-1 grid-rows-1 absolute top-2 right-4 z-30">
	<div class="align-self-center justify-self-center row-start-1 col-start-1 z-40">${validate_component(ProgressRadial, "ProgressRadial").$$render(
    $$result,
    {
      value: hpRing,
      width: "w-28",
      meter: ringMeter,
      track: ringTrack,
      stroke: 60
    },
    {},
    {}
  )}</div>
	
	<div class="align-self-center justify-self-center row-start-1 col-start-1 p-2 z-50">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: $currentAvatar.link ? $currentAvatar.link : userAvatar,
      alt: "avatar",
      width: "w-24",
      rounded: "rounded-full",
      cursor: "cursor-pointer",
      border: "hover:border-2 border-surface-500/50",
      shadow: "shadow-2xl hover:shadow-xl"
    },
    {},
    {}
  )}</div></div>

<div class="card p-4 w-72 shadow-xl z-50" data-popup="popupAvatar"><div><ul><li><label class="label col-span-2"><span class="text-xs text-slate-50/50">Avatar Link</span>
					<input type="text" class="input variant-form-material" placeholder="Avatar link..." alt="Avatar Link"${add_attribute("value", $currentAvatar.link, 0)}></label></li>
			<li><label class="label col-span-2"><span class="text-xs text-slate-50/50">Avatar Seed</span>
					<input type="text" class="input variant-form-material" placeholder="Avatar seed..." alt="Avatar Seed"${add_attribute("value", $currentAvatar.customSeed, 0)}></label></li>
			<li><div class="grid grid-cols-4"><label class="label"><span class="text-xs text-slate-50/50">Eyes</span>
						<br>
						<input id="cEyes" class="input place-self-center" type="color" placeholder="Eyes"${add_attribute("value", $currentAvatar.eyes, 0)}></label>
					<label class="label"><span class="text-xs text-slate-50/50">Hair</span>
						<br>
						<input id="cHair" class="input" type="color" placeholder="Hair"${add_attribute("value", $currentAvatar.hair, 0)}></label>
					<label class="label"><span class="text-xs text-slate-50/50">Skin</span>
						<br>
						<input id="cSkin" class="input" type="color" placeholder="Skin"${add_attribute("value", $currentAvatar.skin, 0)}></label>
					<label class="label"><span class="text-xs text-slate-50/50">Background</span>
						<br>
						<input id="avatarBG" class="input" type="color" placeholder="Avatar Background"${add_attribute("value", $currentAvatar.bgColor, 0)}></label></div></li>
			<li><a class="anchor" href="https://www.dicebear.com/playground?style=avataaars">Design at Dicebear</a></li></ul></div>
	<div class="arrow bg-surface-100-800-token"></div></div>`;
});
const CharAbilities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modify, $$unsubscribe_modify;
  let $currentAbilities, $$unsubscribe_currentAbilities;
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => $currentAbilities = value);
  $$unsubscribe_modify();
  $$unsubscribe_currentAbilities();
  return `<section class="${["card variant-glass-surface min-w-max", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><h2 class="pb-0 p-4 text-slate-50/80">Abilities</h2>
	<div class="pt-1 p-4 space-y-2"><div class="grid grid-cols-5 grid-rows-2 gap-y-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"><span class="col-start-4 row-start-1">Temp</span>
			<span class="col-start-5 row-start-1">Temp</span>
			<span class="col-start-2 row-start-2">Score</span>
			<span class="col-start-3 row-start-2">Modifier</span>
			<span class="col-start-4 row-start-2">Score</span>
			<span class="col-start-5 row-start-2">Modifier</span></div>

		
		<div class="grid grid-cols-5 gap-2"><button id="str" title="Strength" class="${[
    "button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentAbilities.str.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">STR
			</button>
			<input id="strScore" title="Strength Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${$currentAbilities.str.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.str.score, 0)}>
			<input id="strMod" class="input variant-form-material text-center arrow-hide" title="Strength Modifier" type="number" min="-20" max="20" ${$currentAbilities.str.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.str.mod, 0)}>
			<input id="strScoreTmp" title="Temporary Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentAbilities.str.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.str.scoreTemp, 0)}>
			<input id="strModTmp" class="input variant-form-material text-center arrow-hide" title="Temporary Modifier" type="number" min="-20" max="20" ${!$currentAbilities.str.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.str.modTemp, 0)}></div>
		
		<div class="grid grid-cols-5 gap-2"><button id="dex" title="Dexterity" class="${[
    "button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentAbilities.dex.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">DEX
			</button>
			<input id="dexScore" title="Dexterity Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${$currentAbilities.dex.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.dex.score, 0)}>
			<input id="dexMod" class="input variant-form-material text-center arrow-hide" title="Dexterity Modifier" type="number" min="-20" max="20" ${$currentAbilities.dex.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.dex.mod, 0)}>
			<input id="dexScoreTmp" title="Temporary Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentAbilities.dex.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.dex.scoreTemp, 0)}>
			<input id="dexModTmp" class="input variant-form-material text-center arrow-hide" title="Temporary Modifier" type="number" min="-20" max="20" ${!$currentAbilities.dex.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.dex.modTemp, 0)}></div>
		
		<div class="grid grid-cols-5 gap-2"><button id="con" title="Constitution" class="${[
    "button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentAbilities.con.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">CON
			</button>
			<input id="conScore" title="Constitution Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${$currentAbilities.con.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.con.score, 0)}>
			<input id="conMod" class="input variant-form-material text-center arrow-hide" title="Constitution Modifier" type="number" min="-20" max="20" ${$currentAbilities.con.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.con.mod, 0)}>
			<input id="conScoreTmp" title="Temporary Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentAbilities.con.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.con.scoreTemp, 0)}>
			<input id="conModTmp" class="input variant-form-material text-center arrow-hide" title="Temporary Modifier" type="number" min="-20" max="20" ${!$currentAbilities.con.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.con.modTemp, 0)}></div>
		
		<div class="grid grid-cols-5 gap-2"><button id="int" title="Intelligence" class="${[
    "button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentAbilities.int.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">INT
			</button>
			<input id="intScore" title="Intelligence Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${$currentAbilities.int.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.int.score, 0)}>
			<input id="intMod" class="input variant-form-material text-center arrow-hide" title="Intelligence Modifier" type="number" min="-20" max="20" ${$currentAbilities.int.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.int.mod, 0)}>
			<input id="intScoreTmp" title="Temporary Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentAbilities.int.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.int.scoreTemp, 0)}>
			<input id="intModTmp" class="input variant-form-material text-center arrow-hide" title="Temporary Modifier" type="number" min="-20" max="20" ${!$currentAbilities.int.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.int.modTemp, 0)}></div>
		
		<div class="grid grid-cols-5 gap-2"><button id="wis" title="Wisdom" class="${[
    "button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentAbilities.wis.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">WIS
			</button>
			<input id="wisScore" title="Wisdom Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${$currentAbilities.wis.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.wis.score, 0)}>
			<input id="wisMod" class="input variant-form-material text-center arrow-hide" title="Wisdom Modifier" type="number" min="-20" max="20" ${$currentAbilities.wis.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.wis.mod, 0)}>
			<input id="wisScoreTmp" title="Temporary Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentAbilities.wis.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.wis.scoreTemp, 0)}>
			<input id="wisModTmp" class="input variant-form-material text-center arrow-hide" title="Temporary Modifier" type="number" min="-20" max="20" ${!$currentAbilities.wis.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.wis.modTemp, 0)}></div>
		
		<div class="grid grid-cols-5 gap-2"><button id="cha" title="Charisma" class="${[
    "button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentAbilities.cha.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">CHA
			</button>
			<input id="chaScore" title="Charisma Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${$currentAbilities.cha.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.cha.score, 0)}>
			<input id="chaMod" class="input variant-form-material text-center arrow-hide" title="Charisma Modifier" type="number" min="-20" max="20" ${$currentAbilities.cha.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.cha.mod, 0)}>
			<input id="chaScoreTmp" title="Temporary Score" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentAbilities.cha.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.cha.scoreTemp, 0)}>
			<input id="chaModTmp" class="input variant-form-material text-center arrow-hide" title="Temporary Modifier" type="number" min="-20" max="20" ${!$currentAbilities.cha.temp ? "disabled" : ""}${add_attribute("value", $currentAbilities.cha.modTemp, 0)}></div></div></section>`;
});
const CharAttack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentAttack, $$unsubscribe_currentAttack;
  let $currentAttributes, $$unsubscribe_currentAttributes;
  let $currentAbilities, $$unsubscribe_currentAbilities;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentAttack = subscribe(currentAttack, (value) => $currentAttack = value);
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => $currentAttributes = value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => $currentAbilities = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  {
    {
      let activeStrMod = $currentAbilities.str.temp ? $currentAbilities.str.modTemp : $currentAbilities.str.mod;
      set_store_value(currentAttack, $currentAttack.grappleTotal = $currentAttack.bab + activeStrMod + $currentAttributes.sizeMod + $currentAttack.grappleMiscMod, $currentAttack);
    }
  }
  $$unsubscribe_currentAttack();
  $$unsubscribe_currentAttributes();
  $$unsubscribe_currentAbilities();
  $$unsubscribe_modify();
  return `<section class="${["card min-w-max variant-glass-surface", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><h2 class="pb-0 p-4 text-slate-50/80">Attack</h2>
	<div class="pt-2 p-4 space-y-2">
		<div class="grid grid-cols-2 gap-2"><label class="label"><span class="text-xs text-slate-50/50">Base Attack Bonus</span>
				<input id="bab" ${"readonly"} class="input rounded-full font-bold text-center arrow-hide" title="Base Attack Bonus" type="number" min="-20" max="20"${add_attribute("value", $currentAttack.bab, 0)}></label>
			<label class="label"><span class="text-xs text-slate-50/50">Spell Resistance</span>
				<input id="spellResist" class="input rounded-full font-bold text-center arrow-hide" title="Spell Resistance" type="number" min="-20" max="20"${add_attribute("value", $currentAttack.spellResist, 0)}></label></div>
		<hr>
		
		<div class="grid grid-cols-7 grid-rows-2 gap-y-0 pt-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"><span class="col-start-3 row-start-2">Total</span>
			<span class="col-start-4 row-start-2">BAB</span>
			<span class="col-start-5 row-start-1">STR</span>
			<span class="col-start-5 row-start-2">Modifier</span>
			<span class="col-start-6 row-start-1">Size</span>
			<span class="col-start-6 row-start-2">Modifier</span>
			<span class="col-start-7 row-start-1">Misc</span>
			<span class="col-start-7 row-start-2">Modifier</span></div>

		<div class="grid grid-cols-7 gap-2 mt-0"><div id="grapple" title="Grapple Modifier" class="col-span-2 bg-surface-900/60 p-2 text-center rounded-sm">Grapple
			</div>
			<div id="grappleTotal" title="Grapple Modifier Total" class="bg-slate-500/40 p-2 text-center rounded-full"><p>${escape($currentAttack.grappleTotal)}</p></div>
			<div id="grappleBab" title="Base Attack Bonus" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentAttack.bab)}</p></div>
			<div id="strAbilMod" title="Strength Modifier" class="${[
    "bg-slate-500/40 p-2 text-center rounded-sm",
    $currentAbilities.str.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">${$currentAbilities.str.temp ? `<p>${escape($currentAbilities.str.modTemp)}</p>` : `<p>${escape($currentAbilities.str.mod)}</p>`}</div>
			<div id="sizeMod" title="Size Modifier" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentAttributes.sizeMod)}</p></div>
			<input id="grappleMiscMod" class="input variant-form-material text-center arrow-hide" title="Miscellaneous Modifier" type="number" min="-20" max="20"${add_attribute("value", $currentAttack.grappleMiscMod, 0)}></div></div></section>`;
});
const CharAttributes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentAttributes, $$unsubscribe_currentAttributes;
  let $currentHealth, $$unsubscribe_currentHealth;
  let $currentSaves, $$unsubscribe_currentSaves;
  let $currentAttack, $$unsubscribe_currentAttack;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => $currentAttributes = value);
  $$unsubscribe_currentHealth = subscribe(currentHealth, (value) => $currentHealth = value);
  $$unsubscribe_currentSaves = subscribe(currentSaves, (value) => $currentSaves = value);
  $$unsubscribe_currentAttack = subscribe(currentAttack, (value) => $currentAttack = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  let { levels } = $$props;
  let { races } = $$props;
  let { classes } = $$props;
  let { alignments } = $$props;
  const findLevel = (xp) => {
    let level = 0;
    for (let i = 0; i < levels.length; i++) {
      if (xp >= levels[i].min && xp <= levels[i].max) {
        level = i + 1;
        break;
      }
    }
    return level;
  };
  const sizeList = [
    "Fine",
    "Diminutive",
    "Tiny",
    "Small",
    "Medium",
    "Large",
    "Huge",
    "Gargantuan",
    "Colossal"
  ];
  const sizeModList = [8, 4, 2, 1, 0, -1, -2, -4, -8];
  const racesList = Object.keys(races).map((key, index) => {
    const race = races[key];
    return { race, index, id: key };
  });
  const classesList = Object.keys(classes).map((key, index) => {
    const chClass = classes[key];
    return { chClass, index, id: key };
  });
  const alignmentsList = Object.keys(alignments).map((key, index) => {
    const alignment = alignments[key];
    return { alignment, index, id: key };
  });
  const getBasesFromClass = (level, charClass) => {
    const llevel = `l${level}`;
    set_store_value(currentAttack, $currentAttack.bab = classes[charClass]?.levels[llevel]?.BAB ?? 0, $currentAttack);
    set_store_value(currentSaves, $currentSaves.fortBase = classes[charClass]?.levels[llevel]?.fort ?? 0, $currentSaves);
    set_store_value(currentSaves, $currentSaves.reflexBase = classes[charClass]?.levels[llevel]?.ref ?? 0, $currentSaves);
    set_store_value(currentSaves, $currentSaves.willBase = classes[charClass]?.levels[llevel]?.will ?? 0, $currentSaves);
  };
  if ($$props.levels === void 0 && $$bindings.levels && levels !== void 0)
    $$bindings.levels(levels);
  if ($$props.races === void 0 && $$bindings.races && races !== void 0)
    $$bindings.races(races);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.alignments === void 0 && $$bindings.alignments && alignments !== void 0)
    $$bindings.alignments(alignments);
  set_store_value(currentAttributes, $currentAttributes.level = findLevel($currentAttributes.xp), $currentAttributes);
  {
    {
      set_store_value(currentHealth, $currentHealth.currentHP = $currentHealth.maxHP + $currentHealth.dmgBuff, $currentHealth);
    }
  }
  {
    {
      getBasesFromClass($currentAttributes.level, $currentAttributes.class);
    }
  }
  $$unsubscribe_currentAttributes();
  $$unsubscribe_currentHealth();
  $$unsubscribe_currentSaves();
  $$unsubscribe_currentAttack();
  $$unsubscribe_modify();
  return `<section class="${[
    "card mx-auto mt-2 space-y-0 variant-glass-surface",
    $modify ? "variant-ringed-error" : ""
  ].join(" ").trim()}">
	
	<div class="p-4 space-y-2"><div class="grid grid-cols-10 gap-2"><label class="label col-span-2"><span class="text-xs text-slate-50/50">Character Name</span>
				<input id="cName" class="input variant-form-material" type="text" placeholder="Character Name"${add_attribute("value", $currentAttributes.name, 0)}></label>
			<label class="label col-span-2"><span class="text-xs text-slate-50/50">Race</span>
				<select id="cRace" class="select variant-form-material"><option value="" disabled selected>Race</option>${each(racesList, (item) => {
    return `<option${add_attribute("value", item.id, 0)}>${escape(item.race.name)}</option>`;
  })}</select></label>
			<label class="label col-span-2"><span class="text-xs text-slate-50/50">Class</span>
				<select id="cClass" class="select variant-form-material"><option value="" disabled selected>Class</option>${each(classesList, (item) => {
    return `<option${add_attribute("value", item.id, 0)}>${escape(item.chClass.name)}</option>`;
  })}</select></label>
			<label class="label"><span class="text-xs text-slate-50/50">XP</span>
				<input id="cLevel" class="input rounded-full text-center arrow-hide" title="Level" type="number" min="0" max="200000"${add_attribute("value", $currentAttributes.xp, 0)}></label>
			<label class="label"><span class="text-xs text-slate-50/50">Level</span>
				<input id="cLevel" class="input rounded-full font-bold text-center arrow-hide" title="Level" type="number" min="1" max="20"${add_attribute("value", $currentAttributes.level, 0)}></label>

			<button id="hp" title="Hit Points" class="button bg-slate-900/40 p-2 text-center rounded-full"><span>${escape($currentHealth.currentHP)} / ${escape($currentHealth.maxHP)}</span></button>
			<label class="label col-span-1"><span class="text-xs text-slate-50/50">Damage</span>
				<input id="dmgBuff" class="input variant-form-material text-center arrow-hide" title="Damage or Buff" type="number" min="-20" max="20"${add_attribute("value", $currentHealth.dmgBuff, 0)}></label></div>

		<div class="grid grid-cols-10 gap-2"><label class="label col-span-2"><span class="text-xs text-slate-50/50">Alignment</span>
				<select id="cAlignment" class="select variant-form-material"><option value="" disabled selected>Alignment</option>${each(alignmentsList, (item) => {
    return `<option${add_attribute("value", item.id, 0)}>${escape(item.alignment.name)}</option>`;
  })}</select></label>
			<label class="label col-span-2"><span class="text-xs text-slate-50/50">Deity</span>
				<input id="cDeity" class="input variant-form-material" type="text" placeholder="Deity"${add_attribute("value", $currentAttributes.deity, 0)}></label>
			<label class="label col-span-2"><span class="text-xs text-slate-50/50">Size</span>
				<select id="cSize" class="select variant-form-material">${each(sizeList, (item, index) => {
    return `<option${add_attribute("value", sizeModList[index], 0)}>${escape(item)}</option>`;
  })}</select></label>
			<label class="label col-span-1"><span class="text-xs text-slate-50/50">Height</span>
				<input id="cHeight" class="input variant-form-material" type="text" placeholder="Height"${add_attribute("value", $currentAttributes.height, 0)}></label>
			<label class="label col-span-1"><span class="text-xs text-slate-50/50">Weight</span>
				<input id="cWeight" class="input variant-form-material" type="text" placeholder="Weight"${add_attribute("value", $currentAttributes.weight, 0)}></label>
			<label class="label"><span class="text-xs text-slate-50/50">Age</span>
				<input id="cAge" class="input text-center arrow-hide" title="Age" type="number" min="0" max="1000"${add_attribute("value", $currentAttributes.age, 0)}></label>
			<label class="label col-span-1"><span class="text-xs text-slate-50/50">Gender</span>
				<input id="cGender" class="input variant-form-material" type="text" placeholder="Gender"${add_attribute("value", $currentAttributes.gender, 0)}></label></div></div></section>`;
});
const CharMisc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentMisc, $$unsubscribe_currentMisc;
  let $currentAttributes, $$unsubscribe_currentAttributes;
  let $currentAbilities, $$unsubscribe_currentAbilities;
  let $modify, $$unsubscribe_modify;
  let $currentHealth, $$unsubscribe_currentHealth;
  $$unsubscribe_currentMisc = subscribe(currentMisc, (value) => $currentMisc = value);
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => $currentAttributes = value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => $currentAbilities = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  $$unsubscribe_currentHealth = subscribe(currentHealth, (value) => $currentHealth = value);
  {
    {
      let activeDexMod = $currentAbilities.dex.temp ? $currentAbilities.dex.modTemp : $currentAbilities.dex.mod;
      set_store_value(currentMisc, $currentMisc.acTotal = $currentMisc.acBase + $currentMisc.armorBonus + $currentMisc.shieldBonus + activeDexMod + $currentAttributes.sizeMod + $currentMisc.naturalArmor + $currentMisc.deflectMod + $currentMisc.acMiscMod, $currentMisc);
      set_store_value(currentMisc, $currentMisc.touch = $currentMisc.acBase + activeDexMod + $currentAttributes.sizeMod + $currentMisc.deflectMod + $currentMisc.acMiscMod, $currentMisc);
      set_store_value(currentMisc, $currentMisc.flatFooted = $currentMisc.acBase + $currentMisc.armorBonus + $currentAttributes.sizeMod + $currentMisc.naturalArmor + $currentMisc.deflectMod + $currentMisc.acMiscMod, $currentMisc);
    }
  }
  $$unsubscribe_currentMisc();
  $$unsubscribe_currentAttributes();
  $$unsubscribe_currentAbilities();
  $$unsubscribe_modify();
  $$unsubscribe_currentHealth();
  return `<section class="${["card variant-glass-surface min-w-max", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><h2 class="pb-0 p-4 text-slate-50/80">Misc</h2>
	<div class="pt-1 p-4 space-y-2"><div class="grid grid-cols-10 grid-rows-2 gap-y-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"><span class="col-start-2 row-start-2">Speed</span>
			<span class="col-start-3 row-start-1">Temp</span>
			<span class="col-start-3 row-start-2">Speed</span>
			<span class="col-start-5 row-start-2">Touch</span>
			<span class="col-start-6 row-start-1">Flat</span>
			<span class="col-start-6 row-start-2">Footed</span>
			<span class="col-start-8 row-start-1">Non-Lethal</span>
			<span class="col-start-8 row-start-2">Damage</span>
			<span class="col-start-9 row-start-1">Damage</span>
			<span class="col-start-9 row-start-2">Reduction</span>
			<span class="col-start-10 row-start-1">Maximum</span>
			<span class="col-start-10 row-start-2">Hit Points</span></div>
		<div class="grid grid-cols-10 gap-2"><button id="speed" class="${[
    "button col-span-1 h-10 self-end bg-surface-900/60 p-0 text-center rounded-sm",
    $currentMisc.speedTemp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">Speed
			</button>
			<input id="speed" title="Speed" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="300" ${$currentMisc.speedTemp ? "disabled" : ""}${add_attribute("value", $currentMisc.speed, 0)}>
			<input id="speedTempValue" class="input variant-form-material text-center arrow-hide" title="Temporary Speed" type="number" min="-0" max="300" ${!$currentMisc.speedTemp ? "disabled" : ""}${add_attribute("value", $currentMisc.speedTempValue, 0)}>
			<div id="touch" title="Touch AC" class="col-start-5 bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentMisc.touch)}</p></div>
			<div id="flatFooted" title="Flat Footed AC" class="col-start-6 bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentMisc.flatFooted)}</p></div>
			<input id="dmgNonLethal" class="input variant-form-material col-start-8 text-center arrow-hide" title="Non-Lethal Damage" type="number" min="-0" max="300"${add_attribute("value", $currentHealth.dmgNonLethal, 0)}>
			<input id="dmgReduction" class="input variant-form-material col-start-9 text-center arrow-hide" title="Damage Reduction" type="number" min="-0" max="300"${add_attribute("value", $currentMisc.dmgReduction, 0)}>
			<input id="maxHP" class="input variant-form-material col-start-10 text-center arrow-hide" title="Maximum Hit Points" type="number" min="-0" max="300"${add_attribute("value", $currentHealth.maxHP, 0)}></div>
		<hr>
		
		<div class="grid grid-cols-10 grid-rows-2 gap-y-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"><span class="col-start-2 row-start-2"><strong>Total</strong></span>
			<span class="col-start-3 row-start-2">Base</span>
			<span class="col-start-4 row-start-1">Armor</span>
			<span class="col-start-4 row-start-2">Bonus</span>
			<span class="col-start-5 row-start-1">Shield</span>
			<span class="col-start-5 row-start-2">Bonus</span>
			<span class="col-start-6 row-start-1">DEX</span>
			<span class="col-start-6 row-start-2">Modifier</span>
			<span class="col-start-7 row-start-1">Size</span>
			<span class="col-start-7 row-start-2">Modifier</span>
			<span class="col-start-8 row-start-1">Natural</span>
			<span class="col-start-8 row-start-2">Armor</span>
			<span class="col-start-9 row-start-1">Deflection</span>
			<span class="col-start-9 row-start-2">Modifier</span>
			<span class="col-start-10 row-start-1">Misc</span>
			<span class="col-start-10 row-start-2">Modifier</span></div>
		<div class="grid grid-cols-10 gap-2"><button id="ac" title="Armor Class" class="button col-span-1 bg-surface-900/60 p-2 text-center rounded-sm">AC
			</button>
			<div id="acTotal" title="Armor Class Total" class="bg-slate-500/40 p-2 text-center rounded-full"><p>${escape($currentMisc.acTotal)}</p></div>
			<div id="acBase" title="AC Base" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentMisc.acBase)}</p></div>
			<div id="armorBonus" title="Armor Bonus" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentMisc.armorBonus)}</p></div>
			<div id="shieldBonus" title="Shield Bonus" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentMisc.shieldBonus)}</p></div>
			<div id="acAbilMod" title="Dexterity Modifier" class="${[
    "bg-slate-500/40 p-2 text-center rounded-sm",
    $currentAbilities.dex.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">${$currentAbilities.dex.temp ? `<p>${escape($currentAbilities.dex.modTemp)}</p>` : `<p>${escape($currentAbilities.dex.mod)}</p>`}</div>
			<div id="sizeMod" title="Size Modifier" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentAttributes.sizeMod)}</p></div>
			<input id="naturalArmor" title="Natural Armor" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20"${add_attribute("value", $currentMisc.naturalArmor, 0)}>
			<input id="deflectMod" title="Deflection Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20"${add_attribute("value", $currentMisc.deflectMod, 0)}>
			<input id="miscMod" title="Misc Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20"${add_attribute("value", $currentMisc.acMiscMod, 0)}></div></div></section>`;
});
const CharSaving = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSaves, $$unsubscribe_currentSaves;
  let $currentAbilities, $$unsubscribe_currentAbilities;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentSaves = subscribe(currentSaves, (value) => $currentSaves = value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => $currentAbilities = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  {
    {
      let activeConMod = $currentAbilities.conTemp ? $currentAbilities.con.modTemp : $currentAbilities.con.mod;
      let includeFortTemp = $currentSaves.fortTemp ? $currentSaves.fortTempMod : 0;
      set_store_value(currentSaves, $currentSaves.fortTotal = $currentSaves.fortBase + activeConMod + $currentSaves.fortMagicMod + $currentSaves.fortMiscMod + includeFortTemp, $currentSaves);
    }
  }
  {
    {
      let activeDexMod = $currentAbilities.dex.temp ? $currentAbilities.dex.modTemp : $currentAbilities.dex.mod;
      let includeReflexTemp = $currentSaves.reflexTemp ? $currentSaves.reflexTempMod : 0;
      set_store_value(currentSaves, $currentSaves.reflexTotal = $currentSaves.reflexBase + activeDexMod + $currentSaves.reflexMagicMod + $currentSaves.reflexMiscMod + includeReflexTemp, $currentSaves);
    }
  }
  {
    {
      let activeWisMod = $currentAbilities.wis.temp ? $currentAbilities.wis.modTemp : $currentAbilities.wis.mod;
      let includeWillTemp = $currentSaves.willTemp ? $currentSaves.willTempMod : 0;
      set_store_value(currentSaves, $currentSaves.willTotal = $currentSaves.willBase + activeWisMod + $currentSaves.willMagicMod + $currentSaves.willMiscMod + includeWillTemp, $currentSaves);
    }
  }
  $$unsubscribe_currentSaves();
  $$unsubscribe_currentAbilities();
  $$unsubscribe_modify();
  return `<section class="${["card variant-glass-surface min-w-max", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><h2 class="pb-0 p-4 text-slate-50/80">Saving Throws</h2>
	<div class="pt-1 p-4 space-y-2"><div class="grid grid-cols-8 grid-rows-2 gap-y-0 pb-0 mb-0 gap-2 align-text-bottom text-xs text-slate-50/50 tracking-tighter font-light"><span class="col-start-5 row-start-1">Ability</span>
			<span class="col-start-6 row-start-1">Magic</span>
			<span class="col-start-7 row-start-1">Misc</span>
			<span class="col-start-8 row-start-1">Temp</span>
			<span class="col-start-3 row-start-2">Total</span>
			<span class="col-start-4 row-start-1">Base</span>
			<span class="col-start-4 row-start-2">Save</span>
			<span class="col-start-5 row-start-2">Modifier</span>
			<span class="col-start-6 row-start-2">Modifier</span>
			<span class="col-start-7 row-start-2">Modifier</span>
			<span class="col-start-8 row-start-2">Modifier</span></div>
		
		<div class="grid grid-cols-8 gap-2"><button id="fort" title="Fortitude" class="${[
    "button col-span-2 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentSaves.fortTemp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">Fortitude
			</button>
			<div id="fortTotal" title="Fortitude Total" class="bg-slate-500/40 p-2 text-center rounded-full"><p>${escape($currentSaves.fortTotal)}</p></div>
			<div id="fortBase" title="Base Save" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentSaves.fortBase)}</p></div>
			<div id="fortAbilMod" title="Constitution Modifier" class="${[
    "bg-slate-500/40 p-2 text-center rounded-sm",
    $currentAbilities.con.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">${$currentAbilities.con.temp ? `<p>${escape($currentAbilities.con.modTemp)}</p>` : `<p>${escape($currentAbilities.con.mod)}</p>`}</div>
			<input id="fortMagicMod" title="Magic Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20"${add_attribute("value", $currentSaves.fortMagicMod, 0)}>
			<input id="fortMiscMod" class="input variant-form-material text-center arrow-hide" title="Miscellaneous Modifier" type="number" min="-20" max="20"${add_attribute("value", $currentSaves.fortMiscMod, 0)}>
			<input id="fortTempMod" title="Temporary Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentSaves.fortTemp ? "disabled" : ""}${add_attribute("value", $currentSaves.fortTempMod, 0)}></div>
		
		<div class="grid grid-cols-8 gap-2"><button id="reflex" title="Reflex" class="${[
    "button col-span-2 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentSaves.reflexTemp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">Reflex
			</button>
			<div id="reflexTotal" title="Reflex Total" class="bg-slate-500/40 p-2 text-center rounded-full"><p>${escape($currentSaves.reflexTotal)}</p></div>
			<div id="reflexBase" title="Base Save" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentSaves.reflexBase)}</p></div>
			<div id="reflexAbilMod" title="Dexterity Modifier" class="${[
    "bg-slate-500/40 p-2 text-center rounded-sm",
    $currentAbilities.dex.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">${$currentAbilities.dex.temp ? `<p>${escape($currentAbilities.dex.modTemp)}</p>` : `<p>${escape($currentAbilities.dex.mod)}</p>`}</div>
			<input id="reflexMagicMod" title="Magic Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20"${add_attribute("value", $currentSaves.reflexMagicMod, 0)}>
			<input id="reflexMiscMod" class="input variant-form-material text-center arrow-hide" title="Miscellaneous Modifier" type="number" min="-20" max="20"${add_attribute("value", $currentSaves.reflexMiscMod, 0)}>
			<input id="reflexTempMod" title="Temporary Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentSaves.reflexTemp ? "disabled" : ""}${add_attribute("value", $currentSaves.reflexTempMod, 0)}></div>
		
		<div class="grid grid-cols-8 gap-2"><button id="will" title="Will" class="${[
    "button col-span-2 bg-surface-900/60 p-2 text-center rounded-sm",
    $currentSaves.willTemp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">Will
			</button>
			<div id="willTotal" title="Will Total" class="bg-slate-500/40 p-2 text-center rounded-full"><p>${escape($currentSaves.willTotal)}</p></div>
			<div id="willBase" title="Base Save" class="bg-slate-500/40 p-2 text-center rounded-sm"><p>${escape($currentSaves.willBase)}</p></div>
			<div id="willAbilMod" title="Dexterity Modifier" class="${[
    "bg-slate-500/40 p-2 text-center rounded-sm",
    $currentAbilities.wis.temp ? "variant-outline-warning" : ""
  ].join(" ").trim()}">${$currentAbilities.wis.temp ? `<p>${escape($currentAbilities.wis.modTemp)}</p>` : `<p>${escape($currentAbilities.wis.mod)}</p>`}</div>
			<input id="willMagicMod" title="Magic Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20"${add_attribute("value", $currentSaves.willMagicMod, 0)}>
			<input id="willMiscMod" class="input variant-form-material text-center arrow-hide" title="Miscellaneous Modifier" type="number" min="-20" max="20"${add_attribute("value", $currentSaves.willMiscMod, 0)}>
			<input id="willTempMod" title="Temporary Modifier" class="input variant-form-material text-center arrow-hide" type="number" min="0" max="20" ${!$currentSaves.willTemp ? "disabled" : ""}${add_attribute("value", $currentSaves.willTempMod, 0)}></div></div></section>`;
});
const CharSkills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentAttributes, $$unsubscribe_currentAttributes;
  let $currentSkills, $$unsubscribe_currentSkills;
  let $currentAbilities, $$unsubscribe_currentAbilities;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => $currentAttributes = value);
  $$unsubscribe_currentSkills = subscribe(currentSkills, (value) => $currentSkills = value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => $currentAbilities = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  let { skills } = $$props;
  let { classes } = $$props;
  let cClass = $currentAttributes.class;
  let classSkills = [];
  if ($currentSkills.skills.length === 0) {
    set_store_value(
      currentSkills,
      $currentSkills.skills = skills.map((skill) => {
        return { ...skill, ranks: 0, miscMod: 0 };
      }),
      $currentSkills
    );
  }
  [...$currentSkills.skills, ...$currentSkills.userSkills];
  const currentAbilityMod = (ability, temp) => {
    if (temp) {
      return $currentAbilities[ability]["modTemp"];
    } else if (ability) {
      ability = ability.toLowerCase();
      return $currentAbilities[ability]["mod"];
    } else {
      return 0;
    }
  };
  const skillTotal = (abilityMod, ranks, misc) => {
    return abilityMod + ranks + misc;
  };
  crossfade({ duration: 1500, easing: quintOut });
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  {
    {
      cClass = $currentAttributes.class;
      classSkills = cClass ? classes[cClass].classSkills : [];
      classSkills = Object.keys(classSkills);
    }
  }
  $$unsubscribe_currentAttributes();
  $$unsubscribe_currentSkills();
  $$unsubscribe_currentAbilities();
  $$unsubscribe_modify();
  return `<div class="card variant-glass-surface"><section class="${["card mx-auto mt-2 mb-8 space-y-2", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><div class="grid grid-cols-2 p-0 m-0 gap-2"><span class="p-2 pl-4 text-slate-50/80 align-text-bottom"><h2 class="pt-2">Skills</h2></span>
			<span class="p-2 pr-4 justify-self-end"><button title="Create a new Skill" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="grommet-icons:new"></iconify-icon></button></span></div>
		<div class="flex flex-row pl-10 pb-2 border-b-[1px] border-slate-500/30 text-slate-100/50"><span class="w-full shrink">Skill name</span>
			<span class="pr-8">Ability</span>
			<span class="pl-2 pr-8">Rank</span>
			<span class="pl-2 pr-6">Misc</span>
			<span class="pl-2 pr-4">Total</span></div>
		<div class="grow max-h-[40rem] p-2 overflow-auto"><ul class="list">${each($currentSkills.skills, (item) => {
    return `<li class="text-slate-100/70 hover:text-slate-100"><span class="w-[18px]">${classSkills.includes(item.id) ? `<iconify-icon icon="tabler:circle-dot"></iconify-icon>` : `${!item.trained ? `<iconify-icon icon="material-symbols:circle"></iconify-icon>` : `<iconify-icon icon="material-symbols:circle-outline"></iconify-icon>`}`}</span>
						<span${add_attribute("id", item.id, 0)} class="${["grow", item.trained ? "italic" : ""].join(" ").trim()}"><a${add_attribute("href", item.ref ? item.ref : null, 0)} target="_blank"${add_classes((!item.ref ? "cursor-not-allowed" : "").trim())}>${escape(item.name)}</a></span>
						<span class="text-slate-100/50">${escape(item.ability ? item.ability.toUpperCase() : "")}</span>
						<span id="abilMod" title="Ability Modifier" class="${[
      "bg-surface-500/40 p-2 text-center rounded-full w-[36px]",
      (item.ability && $currentAbilities[item.ability]["temp"] ? "variant-outline-warning" : "") + " " + (!item.ability ? "invisible" : "")
    ].join(" ").trim()}">${item.ability ? `${escape(currentAbilityMod(item.ability, $currentAbilities[item.ability]["temp"]))}` : `0`}</span>
						<span><input id="sRank" class="input text-center arrow-hide read-only:border" title="Skill Rank" type="number" min="0" max="100"${add_attribute("value", item.ranks, 0)}></span>
						<span><input id="sMiscMod" class="input text-center arrow-hide read-only:border" title="Misc Modifier" type="number" min="0" max="100"${add_attribute("value", item.miscMod, 0)}></span>
						<span id="sTotal" title="Total Skill Modifier" class="bg-surface-500/70 p-2 text-center rounded-full w-[36px]"><p>${escape(skillTotal(
      item.ability ? currentAbilityMod(item.ability, $currentAbilities[item.ability]["temp"]) : 0,
      item.ranks,
      item.miscMod
    ))}</p>
						</span></li>
					<hr class="!border-t-2">`;
  })}
				${$currentSkills.userSkills.length > 0 ? `
					${each($currentSkills.userSkills, (item) => {
    return `<li class="text-slate-100/70 hover:text-slate-100"><span class="w-[18px]">${classSkills.includes(item.id) ? `<iconify-icon icon="tabler:circle-dot"></iconify-icon>` : `${!item.trained ? `<iconify-icon icon="material-symbols:circle"></iconify-icon>` : `<iconify-icon icon="material-symbols:circle-outline"></iconify-icon>`}`}</span>
							<span${add_attribute("id", item.id, 0)} class="${["grow", item.trained ? "italic" : ""].join(" ").trim()}"><a${add_attribute("href", item.ref ? item.ref : null, 0)} target="_blank"${add_classes((!item.ref ? "cursor-not-allowed" : "").trim())}>${escape(item.name)}</a>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon>
								</button></span>
							<span class="text-slate-100/50">${escape(item.ability ? item.ability.toUpperCase() : "")}</span>
							<span id="abilMod" title="Ability Modifier" class="${[
      "bg-surface-500/40 p-2 text-center rounded-full w-[36px]",
      (item.ability && $currentAbilities[item.ability]["temp"] ? "variant-outline-warning" : "") + " " + (!item.ability ? "invisible" : "")
    ].join(" ").trim()}">${item.ability ? `${escape(currentAbilityMod(item.ability, $currentAbilities[item.ability]["temp"]))}` : `0`}</span>
							<span><input id="sRank" class="input text-center arrow-hide read-only:border" title="Skill Rank" type="number" min="0" max="100"${add_attribute("value", item.ranks, 0)}></span>
							<span><input id="sMiscMod" class="input text-center arrow-hide read-only:border" title="Misc Modifier" type="number" min="0" max="100"${add_attribute("value", item.miscMod, 0)}></span>
							<span id="sTotal" title="Total Skill Modifier" class="bg-surface-500/70 p-2 text-center rounded-full w-[36px]"><p>${escape(skillTotal(
      item.ability ? currentAbilityMod(item.ability, $currentAbilities[item.ability]["temp"]) : 0,
      item.ranks,
      item.miscMod
    ))}</p>
							</span></li>
						<hr class="!border-t-2">`;
  })}` : ``}</ul></div>
		<footer class="card-footer"></footer></section></div>`;
});
const CharFeats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentFeats, $$unsubscribe_currentFeats;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentFeats = subscribe(currentFeats, (value) => $currentFeats = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  let { feats } = $$props;
  if ($$props.feats === void 0 && $$bindings.feats && feats !== void 0)
    $$bindings.feats(feats);
  $$unsubscribe_currentFeats();
  $$unsubscribe_modify();
  return `<div class="card variant-glass-surface"><section class="${["card mx-auto mt-2 mb-8 space-y-2", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><div class="grid grid-cols-2 p-0 m-0 gap-2"><span class="p-2 pl-4 text-slate-50/80 align-text-bottom"><h2 class="pt-2">Feats</h2></span>
			<span class="p-2 pr-4 justify-self-end"><button title="Add Feats" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="mdi:add-bold"></iconify-icon></button>
				<button title="Create a new Feat" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="grommet-icons:new"></iconify-icon></button></span></div>
		<div class="flex flex-row pl-10 pb-2 border-b-[1px] border-slate-500/30 text-slate-100/50"><span class="w-full shrink invisible">Character Feats</span></div>
		<div class="grow max-h-[40rem] min-h-[40rem] p-2 overflow-auto text-slate-100/70">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${$currentFeats.feats.length === 0 && $currentFeats.userFeats.length === 0 ? `<p class="min-w-max text-center">💪 Add or create feats</p>` : ``}
				${each($currentFeats.feats, (feat) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: feat.id }, {}, {
          content: () => {
            return `<div class="space-y-2 ml-8 pl-4 pr-6 pb-2 border-l-2 border-b-2 border-slate-500/70 rounded-sm"><p class="text-slate-100/80 text-justify">${escape(feat.longText)}</p>
								<span class="ml-4 text-xs text-slate-100/70">Requires: ${escape(feat.prerequisites)}</span></div>
						`;
          },
          summary: () => {
            return `<h3 class="inline-block">${escape(feat.name)}</h3>
							<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
							<p class="text-slate-300/70 text-sm">${escape(feat.shortText)}</p>
						`;
          },
          lead: () => {
            return `<span class="text-slate-100/70 w-[18px]"><iconify-icon icon="material-symbols:circle"></iconify-icon></span>
						`;
          }
        })}`;
      })}
				
				${each($currentFeats.userFeats, (feat) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: feat.id }, {}, {
          content: () => {
            return `<div class="space-y-2 ml-8 pl-4 pr-6 pb-2 border-l-2 border-b-2 border-slate-500/70 rounded-sm"><p class="text-slate-100/80 text-justify">${escape(feat.longText)}</p>
								${feat.prerequisites ? `<span class="ml-4 text-xs text-slate-100/70">Requires: ${escape(feat.prerequisites)}</span>` : `<span class="ml-4 text-xs text-slate-100/70">No prerequisites.</span>`}</div>
						`;
          },
          summary: () => {
            return `<span><h3 class="inline-block">${escape(feat.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon>
								</button></span>
							<p class="text-slate-300/70 text-sm">${escape(feat.shortText)}</p>
						`;
          },
          lead: () => {
            return `<span class="text-slate-100/70 w-[18px]"><iconify-icon icon="fa6-solid:circle-half-stroke"></iconify-icon></span>
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		<footer class="card-footer"></footer></section></div>`;
});
const CharArmor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentMisc, $$unsubscribe_currentMisc;
  let $currentGear, $$unsubscribe_currentGear;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentMisc = subscribe(currentMisc, (value) => $currentMisc = value);
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => $currentGear = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  let { armor } = $$props;
  const getTotalBonuses = (list) => {
    let armorBonus = 0;
    let shieldBonus = 0;
    let accesoryBonus = 0;
    list.forEach((item) => {
      if (item.hidden.type.toLowerCase().includes("armor") && item.equipped) {
        armorBonus += item.visible.armorBonus;
      } else if (item.hidden.type.toLowerCase().includes("shield") && item.equipped) {
        shieldBonus += item.visible.armorBonus;
      } else if (item.equipped) {
        accesoryBonus += item.visible.armorBonus;
      }
    });
    return { armorBonus, shieldBonus, accesoryBonus };
  };
  if ($$props.armor === void 0 && $$bindings.armor && armor !== void 0)
    $$bindings.armor(armor);
  {
    {
      const totalBonuses = getTotalBonuses($currentGear.armor);
      const totalUserBonuses = getTotalBonuses($currentGear.userArmor);
      set_store_value(currentMisc, $currentMisc.armorBonus = totalBonuses.armorBonus + totalUserBonuses.armorBonus, $currentMisc);
      set_store_value(currentMisc, $currentMisc.shieldBonus = totalBonuses.shieldBonus + totalUserBonuses.shieldBonus, $currentMisc);
    }
  }
  $$unsubscribe_currentMisc();
  $$unsubscribe_currentGear();
  $$unsubscribe_modify();
  return `<div class="card variant-glass-surface"><section class="${["card mx-auto mt-2 mb-8 space-y-2", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><div class="grid grid-cols-2 p-0 m-0 gap-2"><span class="p-2 pl-4 text-slate-50/80 align-text-bottom"><h2 class="pt-2">Armor</h2></span>
			<span class="p-2 pr-4 justify-self-end"><button title="Add armor" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="mdi:add-bold"></iconify-icon></button>
				<button title="New armor" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="grommet-icons:new"></iconify-icon></button></span></div>
		<hr class="slate-500/30">
		<div class="grow max-h-[42rem] min-h-[42rem] p-2 overflow-auto text-slate-100/70">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${$currentGear.armor.length === 0 && $currentGear.userArmor.length === 0 ? `<p class="min-w-max text-center">🛡️ Add or create armor</p>` : ``}
				${each($currentGear.armor, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible), (key) => {
              return `${item.visible[key] && typeof item.visible[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible[key])}</li>` : ``}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.combat), (key) => {
              return `${item.visible.combat[key] && typeof item.visible.combat[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : `${key === "type" && item.visible.combat.type.length > 0 ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : ``}`}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<span><h3 class="text-slate-100/80 inline-block">${escape(item.description.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li>
								${item.visible.coverage.length > 0 ? `<li class="inline-block">(${escape(item.visible.coverage)})</li>` : ``}</ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentGear.armor[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}
				
				${each($currentGear.userArmor, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible), (key) => {
              return `${item.visible[key] && typeof item.visible[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible[key])}</li>` : ``}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.combat), (key) => {
              return `${item.visible.combat[key] && typeof item.visible.combat[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : `${key === "type" && item.visible.combat.type.length > 0 ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : ``}`}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<iconify-icon icon="fa6-solid:circle-half-stroke" class="text-slate-100/50 text-xs mr-2"></iconify-icon>
							<span><h3 class="text-slate-100/80 inline-block">${escape(item.description.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li>
								${item.visible.coverage.length > 0 ? `<li class="inline-block">(${escape(item.visible.coverage)})</li>` : ``}</ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentGear.userArmor[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		<footer class="card-footer"></footer></section></div>`;
});
const CharWeapons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentGear, $$unsubscribe_currentGear;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => $currentGear = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  let { weapons } = $$props;
  if ($$props.weapons === void 0 && $$bindings.weapons && weapons !== void 0)
    $$bindings.weapons(weapons);
  $$unsubscribe_currentGear();
  $$unsubscribe_modify();
  return `<div class="card variant-glass-surface"><section class="${["card mx-auto mt-2 mb-8 space-y-2", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><div class="grid grid-cols-2 p-0 m-0 gap-2"><span class="p-2 pl-4 text-slate-50/80 align-text-bottom"><h2 class="pt-2">Weapons</h2></span>
			<span class="p-2 pr-4 justify-self-end"><button title="Add armor" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="mdi:add-bold"></iconify-icon></button>
				<button title="New armor" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="grommet-icons:new"></iconify-icon></button></span></div>
		<hr class="slate-500/30">
		<div class="grow max-h-[42rem] min-h-[42rem] p-2 overflow-auto text-slate-100/70">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${$currentGear.weapons.length === 0 && $currentGear.userWeapons.length === 0 ? `<p class="min-w-max text-center">⚔️ Add or create weapons</p>` : ``}
				${each($currentGear.weapons, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.basic), (key) => {
              return `${item.visible.basic[key] && typeof item.visible.basic[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.basic[key])}</li>` : ``}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.combat.damage), (key) => {
              return `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat.damage[key])}</li>`;
            })}
										${each(Object.keys(item.visible.combat), (key) => {
              return `${item.visible.combat[key] && typeof item.visible.combat[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : `${key === "type" && item.visible.combat.type.length > 0 ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : ``}`}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<span><h3 class="text-slate-100/80 inline-block">${escape(item.description.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li></ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentGear.weapons[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}
				
				${each($currentGear.userWeapons, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.basic), (key) => {
              return `${item.visible.basic[key] && typeof item.visible.basic[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.basic[key])}</li>` : ``}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.combat.damage), (key) => {
              return `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat.damage[key])}</li>`;
            })}
										${each(Object.keys(item.visible.combat), (key) => {
              return `${item.visible.combat[key] && typeof item.visible.combat[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : `${key === "type" && item.visible.combat.type.length > 0 ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : ``}`}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<iconify-icon icon="fa6-solid:circle-half-stroke" class="text-slate-100/50 text-xs mr-2"></iconify-icon>
							<span><h3 class="text-slate-100/80 inline-block">${escape(item.description.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li></ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentGear.userWeapons[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		<footer class="card-footer"></footer></section></div>`;
});
const CharEquipment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentGear, $$unsubscribe_currentGear;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => $currentGear = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  let { gear } = $$props;
  if ($$props.gear === void 0 && $$bindings.gear && gear !== void 0)
    $$bindings.gear(gear);
  $$unsubscribe_currentGear();
  $$unsubscribe_modify();
  return `<div class="card variant-glass-surface"><section class="${["card mx-auto mt-2 mb-8 space-y-2", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><div class="grid grid-cols-2 p-0 m-0 gap-2"><span class="p-2 pl-4 text-slate-50/80 align-text-bottom"><h2 class="pt-2">Equipment</h2></span>
			<span class="p-2 pr-4 justify-self-end"><button title="Add gear" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="mdi:add-bold"></iconify-icon></button>
				<button title="New gear" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="grommet-icons:new"></iconify-icon></button></span></div>
		<hr class="slate-500/30">
		<div class="grow max-h-[42rem] min-h-[42rem] p-2 overflow-auto text-slate-100/70">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${$currentGear.equipment.length === 0 && $currentGear.userEquipment.length === 0 ? `<p class="min-w-max text-center">🎒 Add or create gear</p>` : ``}
				${each($currentGear.equipment, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.basic), (key) => {
              return `${item.visible.basic[key] && typeof item.visible.basic[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.basic[key])}</li>` : ``}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.basic), (key) => {
              return `<li>${escape(toTitleCase(key))}: ${escape(item.visible.basic[key])}</li>`;
            })}
										${each(Object.keys(item.visible.combat), (key) => {
              return `${item.visible.combat[key] && typeof item.visible.combat[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : `${key === "type" && item.visible.combat.type.length > 0 ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : ``}`}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<span><h3 class="text-slate-100/80 inline-block">${escape(item.description.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li></ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentGear.equipment[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}
				
				${each($currentGear.userEquipment, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.basic), (key) => {
              return `${item.visible.basic[key] && typeof item.visible.basic[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.basic[key])}</li>` : ``}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><ul>${each(Object.keys(item.visible.basic), (key) => {
              return `<li>${escape(toTitleCase(key))}: ${escape(item.visible.basic[key])}</li>`;
            })}
										${each(Object.keys(item.visible.combat), (key) => {
              return `${item.visible.combat[key] && typeof item.visible.combat[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : `${key === "type" && item.visible.combat.type.length > 0 ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : ``}`}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<iconify-icon icon="fa6-solid:circle-half-stroke" class="text-slate-100/50 text-xs mr-2"></iconify-icon>
							<span><h3 class="text-slate-100/80 inline-block">${escape(item.description.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li></ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentGear.userEquipment[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		<footer class="card-footer"></footer></section></div>`;
});
const CharSpells = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSpells, $$unsubscribe_currentSpells;
  let $modify, $$unsubscribe_modify;
  $$unsubscribe_currentSpells = subscribe(currentSpells, (value) => $currentSpells = value);
  $$unsubscribe_modify = subscribe(modify, (value) => $modify = value);
  let { spells } = $$props;
  if ($$props.spells === void 0 && $$bindings.spells && spells !== void 0)
    $$bindings.spells(spells);
  $$unsubscribe_currentSpells();
  $$unsubscribe_modify();
  return `<div class="card variant-glass-surface"><section class="${["card mx-auto mt-2 mb-8 space-y-2", $modify ? "variant-ringed-error" : ""].join(" ").trim()}"><div class="grid grid-cols-2 p-0 m-0 gap-2"><span class="p-2 pl-4 text-slate-50/80 align-text-bottom"><h2 class="pt-2">Spells</h2></span>
			<span class="p-2 pr-4 justify-self-end"><button title="Add gear" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="mdi:add-bold"></iconify-icon></button>
				<button title="New gear" class="btn-icon btn-icon-sm variant-filled"><iconify-icon icon="grommet-icons:new"></iconify-icon></button></span></div>
		<hr class="slate-500/30">
		<div class="grow max-h-[42rem] min-h-[42rem] p-2 overflow-auto text-slate-100/70">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${$currentSpells.spells.length === 0 && $currentSpells.userSpells.length === 0 ? `<p class="min-w-max text-center">💥 Add or create spells</p>` : ``}
				${each($currentSpells.spells, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul class="list"><li>Description: <span class="ml-2 pl-2 border-l-2 text-justify text-slate-300/70 border-slate-300/50">${escape(item.desc)}
											</span></li>
										<li>Class: <span class="pl-2 text-slate-300/70">${escape(item.class)}</span></li>
										<li>Concentration: <span class="pl-2 text-slate-300/70">${escape(item.concentration)}</span></li>
										<li>Ritual: <span class="pl-2 text-slate-300/70">${escape(item.ritual)}</span></li>
										<li>Components: <span class="pl-2 text-slate-300/70">${escape(item.components)}</span></li>
										<li>Material: <span class="pl-2 text-slate-300/70">${escape(item.material)}</span></li>
										<li><span class="whitespace-nowrap">Higher level:</span><span class="ml-2 pl-2 border-l-2 text-justify text-slate-300/70 border-slate-300/50">${escape(item.higher_level)}
											</span></li>
										<li>Referece page: <span class="pl-2 text-slate-300/70">${escape(item.page)}</span></li>
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<span><h3 class="text-slate-100/80 inline-block">${escape(item.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-2"><li class="inline-block text-orange-400/70">${escape(item.casting_time)}</li>
								<li class="inline-block text-orange-400/70">${escape(item.range)}</li>
								<li class="inline-block text-orange-400/70">${escape(item.duration)}</li>
								<li class="inline-block">${escape(item.level)}</li>
								<li class="inline-block">${escape(item.school)}</li></ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentSpells.spells[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}
				
				${each($currentSpells.userSpells, (item, index) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.tag }, {}, {
          content: () => {
            return `<div class="ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 p-2"><ul class="list"><li>Description: <span class="ml-2 pl-2 border-l-2 text-justify text-slate-300/70 border-slate-300/50">${escape(item.desc)}
											</span></li>
										<li>Class: <span class="pl-2 text-slate-300/70">${escape(item.class)}</span></li>
										<li>Concentration: <span class="pl-2 text-slate-300/70">${escape(item.concentration)}</span></li>
										<li>Ritual: <span class="pl-2 text-slate-300/70">${escape(item.ritual)}</span></li>
										<li>Components: <span class="pl-2 text-slate-300/70">${escape(item.components)}</span></li>
										<li>Material: <span class="pl-2 text-slate-300/70">${escape(item.material)}</span></li>
										<li><span class="whitespace-nowrap">Higher level:</span><span class="ml-2 pl-2 border-l-2 text-justify text-slate-300/70 border-slate-300/50">${escape(item.higher_level)}
											</span></li>
										<li>Referece page: <span class="pl-2 text-slate-300/70">${escape(item.page)}</span></li>
									</ul></div>
								<div class="space-y-2 ml-2 p-2"><label class="label"><span>Note</span>
										<textarea name="Note"${add_attribute("id", `${item.id}Note`, 0)} class="textarea">${item.note || ""}</textarea></label>
								</div></div>
						`;
          },
          summary: () => {
            return `<iconify-icon icon="fa6-solid:circle-half-stroke" class="text-slate-100/50 text-xs mr-2"></iconify-icon>
							<span><h3 class="text-slate-100/80 inline-block">${escape(item.name)}</h3>
								<button class="btn m-0 pl-4 pb-0 align-baseline hover:text-error-500"><iconify-icon icon="material-symbols:delete"></iconify-icon></button>
								<span class="text-slate-100/70">${escape(item.note)}</span></span>
							<ul class="text-slate-300/70 text-sm space-x-2"><li class="inline-block text-orange-400/70">${escape(item.casting_time)}</li>
								<li class="inline-block text-orange-400/70">${escape(item.range)}</li>
								<li class="inline-block text-orange-400/70">${escape(item.duration)}</li>
								<li class="inline-block">${escape(item.level)}</li>
								<li class="inline-block">${escape(item.school)}</li></ul>
						`;
          },
          lead: () => {
            return `<input class="checkbox variant-ringed-secondary" type="checkbox" ${$currentSpells.userSpells[index].equipped ? "checked" : ""}${add_attribute("value", item.tag, 0)}>
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		<footer class="card-footer"></footer></section></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentState, $$unsubscribe_currentState;
  let $currentAttributes, $$unsubscribe_currentAttributes;
  $$unsubscribe_currentState = subscribe(currentState, (value) => $currentState = value);
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => $currentAttributes = value);
  let { data } = $$props;
  const { levels, races, alignments, skills, classes, feats, protection, weapons, equipment, spells } = data;
  const { armor, shield, accessory } = protection;
  const armorList = [...armor, ...shield, ...accessory];
  const { melee, ranged } = weapons;
  const weaponList = [...melee, ...ranged];
  const { general } = equipment.gear;
  const gearList = [...general];
  let tabSet = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(AppBar, "AppBar").$$render(
      $$result,
      {
        gridColumns: "grid-cols-3",
        slotDefault: "place-self-center",
        slotTrail: "place-content-end",
        padding: "p-1",
        background: "variant-glass-surface/0",
        shadow: "shadow-xs"
      },
      {},
      {
        trail: () => {
          return `<div class="p-0 ml-20 mr-32"><label class="space-x-0"><input type="number" class="input arrow-hide variant-ringed text-end text-orange-400/70 w-24 border-0 font-bold"${add_attribute("value", $currentState.money, 0)}>
				<span class="inline-block text-orange-400/70 p-[8px] pl-0 rounded-full font-bold">GP</span></label></div>
	`;
        },
        headline: () => {
          return `
		<div class="p-0 ml-20 mr-32">${validate_component(ProgressBar, "ProgressBar").$$render(
            $$result,
            {
              label: "XP to next level",
              meter: "bg-primary-500/50",
              value: $currentAttributes.xp,
              min: levels[$currentAttributes.level - 1].min,
              max: levels[$currentAttributes.level - 1].max
            },
            {},
            {}
          )}</div>
	`;
        },
        lead: () => {
          return `<span class="pl-2 text-slate-50/50 align-middle"><button class="btn-icon-xl hover:text-slate-100"><iconify-icon icon="mdi:hamburger-menu"></iconify-icon></button></span>
	`;
        }
      }
    )}

${validate_component(CharAvatar, "CharAvatar").$$render($$result, {}, {}, {})}

<div class="mx-auto p-4 grid grid-cols-10 gap-2"><div class="col-span-10">${validate_component(CharAttributes, "CharAttributes").$$render($$result, { levels, races, classes, alignments }, {}, {})}</div></div>

${validate_component(TabGroup, "TabGroup").$$render($$result, { justify: "justify-center" }, {}, {
      panel: () => {
        return `
		${tabSet === 0 ? `
			<div class="mx-auto p-4 grid grid-flow-col-dense grid-cols-16 grid-rows-3 gap-4 max-w-max"><div class="col-span-10">${validate_component(CharMisc, "CharMisc").$$render($$result, {}, {}, {})}</div>
				<div class="col-span-5 row-span-2 row-start-1">${validate_component(CharAbilities, "CharAbilities").$$render($$result, {}, {}, {})}</div>
				<div class="col-span-8">${validate_component(CharSaving, "CharSaving").$$render($$result, {}, {}, {})}</div>
				<div class="col-span-7">${validate_component(CharAttack, "CharAttack").$$render($$result, {}, {}, {})}</div></div>` : `${tabSet === 1 ? `<div class="mx-auto p-4 grid grid-cols-2 gap-4"><div class="col-span-1">${validate_component(CharSkills, "CharSkills").$$render($$result, { skills, classes }, {}, {})}</div>
				<div class="col-span-1">${validate_component(CharFeats, "CharFeats").$$render($$result, { feats }, {}, {})}</div></div>` : `${tabSet === 2 ? `<div class="mx-auto p-4 grid grid-cols-2 gap-4"><div class="col-span-1">${validate_component(CharArmor, "CharArmor").$$render($$result, { armor: armorList }, {}, {})}</div>
				<div class="col-span-1">${validate_component(CharWeapons, "CharWeapons").$$render($$result, { weapons: weaponList }, {}, {})}</div></div>` : `${tabSet === 3 ? `<div class="mx-auto p-4 grid grid-cols-2 gap-4"><div class="col-span-1">${validate_component(CharEquipment, "CharEquipment").$$render($$result, { gear: gearList }, {}, {})}</div></div>` : `${tabSet === 4 ? `<div class="mx-auto p-4 grid grid-cols-2 gap-4"><div class="col-span-2">${validate_component(CharSpells, "CharSpells").$$render($$result, { spells }, {}, {})}</div></div>` : ``}`}`}`}`}
	`;
      },
      default: () => {
        return `${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab1", value: 0, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Main`;
            }
          }
        )}
	${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab2", value: 1, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Skills &amp; Feats`;
            }
          }
        )}
	${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab3", value: 2, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Armor &amp; Weapons`;
            }
          }
        )}
	${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab4", value: 3, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Gear`;
            }
          }
        )}
	${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab5", value: 4, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Spells`;
            }
          }
        )}
	`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_currentState();
  $$unsubscribe_currentAttributes();
  return $$rendered;
});
export {
  Page as default
};
