import { c as create_ssr_component, a as compute_rest_props, b as createEventDispatcher, e as escape, d as add_attribute, f as each, g as subscribe, h as spread, i as escape_object, v as validate_component, m as missing_component } from "../../chunks/index2.js";
import { s as storeHighlightJs, m as modalStore, d as drawerStore, c as currentSkills, a as currentAbilities, b as currentFeats, A as Accordion, e as AccordionItem, f as currentGear, t as toTitleCase, i as inList, g as currentSpells, h as currentMisc, j as currentAttack, k as currentSaves, l as currentHealth, n as currentAttributes, o as currentAvatar, p as currentState, q as currentMetadata } from "../../chunks/storeCharacter.js";
import "iconify-icon";
const cBase$e = "textarea cursor-pointer";
const cInterface = "space-y-4";
const cChipList = "flex flex-wrap gap-2";
const cInputField = "unstyled bg-transparent border-0 !ring-0 p-0 w-full";
const InputChip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesInvalid;
  let classesBase;
  let classesInterface;
  let classesChipList;
  let classesInputField;
  let $$restProps = compute_rest_props($$props, [
    "input",
    "name",
    "value",
    "whitelist",
    "max",
    "minlength",
    "maxlength",
    "allowUpperCase",
    "allowDuplicates",
    "validation",
    "duration",
    "required",
    "chips",
    "invalid",
    "padding",
    "rounded"
  ]);
  createEventDispatcher();
  let { input = "" } = $$props;
  let { name } = $$props;
  let { value = [] } = $$props;
  let { whitelist = [] } = $$props;
  let { max = -1 } = $$props;
  let { minlength = -1 } = $$props;
  let { maxlength = -1 } = $$props;
  let { allowUpperCase = false } = $$props;
  let { allowDuplicates = false } = $$props;
  let { validation = () => true } = $$props;
  let { duration = 150 } = $$props;
  let { required = false } = $$props;
  let { chips = "variant-filled" } = $$props;
  let { invalid = "input-error" } = $$props;
  let { padding = "p-2" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let chipValues = value.map((val) => {
    return { val, id: Math.random() };
  });
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.whitelist === void 0 && $$bindings.whitelist && whitelist !== void 0)
    $$bindings.whitelist(whitelist);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.minlength === void 0 && $$bindings.minlength && minlength !== void 0)
    $$bindings.minlength(minlength);
  if ($$props.maxlength === void 0 && $$bindings.maxlength && maxlength !== void 0)
    $$bindings.maxlength(maxlength);
  if ($$props.allowUpperCase === void 0 && $$bindings.allowUpperCase && allowUpperCase !== void 0)
    $$bindings.allowUpperCase(allowUpperCase);
  if ($$props.allowDuplicates === void 0 && $$bindings.allowDuplicates && allowDuplicates !== void 0)
    $$bindings.allowDuplicates(allowDuplicates);
  if ($$props.validation === void 0 && $$bindings.validation && validation !== void 0)
    $$bindings.validation(validation);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.chips === void 0 && $$bindings.chips && chips !== void 0)
    $$bindings.chips(chips);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  classesInvalid = "";
  classesBase = `${cBase$e} ${padding} ${rounded} ${$$props.class ?? ""} ${classesInvalid}`;
  classesInterface = `${cInterface}`;
  classesChipList = `${cChipList}`;
  classesInputField = `${cInputField}`;
  chipValues = value.map((val, i) => {
    if (chipValues[i]?.val === val)
      return chipValues[i];
    return { id: Math.random(), val };
  });
  return `<div class="${[
    "input-chip " + escape(classesBase, true),
    $$restProps.disabled ? "opacity-50" : ""
  ].join(" ").trim()}">
	<div class="h-0 overflow-hidden"><select${add_attribute("name", name, 0)} multiple ${required ? "required" : ""} tabindex="-1">${each(value, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select></div>
	
	<div class="${"input-chip-interface " + escape(classesInterface, true)}">
		<form><input type="text"${add_attribute("placeholder", $$restProps.placeholder ?? "Enter values...", 0)} class="${"input-chip-field " + escape(classesInputField, true)}" ${$$restProps.disabled ? "disabled" : ""}${add_attribute("value", input, 0)}></form>
		
		${chipValues.length ? `<div class="${"input-chip-list " + escape(classesChipList, true)}">${each(chipValues, ({ id, val }, i) => {
    return `<div><button type="button" class="${"chip " + escape(chips, true)}"><span>${escape(val)}</span>
							<span>✕</span></button>
					</div>`;
  })}</div>` : ``}</div></div>`;
});
const cBase$d = "overflow-hidden shadow";
const cHeader$d = "text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4";
const cPre = "whitespace-pre-wrap break-all p-4 pt-1";
function languageFormatter(lang) {
  if (lang === "js")
    return "javascript";
  if (lang === "ts")
    return "typescript";
  return lang;
}
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $storeHighlightJs, $$unsubscribe_storeHighlightJs;
  $$unsubscribe_storeHighlightJs = subscribe(storeHighlightJs, (value) => $storeHighlightJs = value);
  createEventDispatcher();
  let { language = "plaintext" } = $$props;
  let { code = "" } = $$props;
  let { lineNumbers = false } = $$props;
  let { background = "bg-neutral-900/90" } = $$props;
  let { blur = "" } = $$props;
  let { text = "text-sm" } = $$props;
  let { color = "text-white" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow" } = $$props;
  let { button = "btn btn-sm variant-soft !text-white" } = $$props;
  let { buttonLabel = "Copy" } = $$props;
  let { buttonCopied = "👍" } = $$props;
  let formatted = false;
  let displayCode = code;
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.lineNumbers === void 0 && $$bindings.lineNumbers && lineNumbers !== void 0)
    $$bindings.lineNumbers(lineNumbers);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.buttonLabel === void 0 && $$bindings.buttonLabel && buttonLabel !== void 0)
    $$bindings.buttonLabel(buttonLabel);
  if ($$props.buttonCopied === void 0 && $$bindings.buttonCopied && buttonCopied !== void 0)
    $$bindings.buttonCopied(buttonCopied);
  {
    if ($storeHighlightJs !== void 0) {
      displayCode = $storeHighlightJs.highlight(code, { language }).value.trim();
      formatted = true;
    }
  }
  {
    if (lineNumbers) {
      displayCode = displayCode.replace(/^/gm, () => {
        return '<span class="line"></span>	';
      });
    }
  }
  classesBase = `${cBase$d} ${background} ${blur} ${text} ${color} ${rounded} ${shadow} ${$$props.class ?? ""}`;
  $$unsubscribe_storeHighlightJs();
  return `
${language && code ? `<div class="${"codeblock " + escape(classesBase, true)}" data-testid="codeblock">
	<header class="${"codeblock-header " + escape(cHeader$d, true)}">
		<span class="codeblock-language">${escape(languageFormatter(language))}</span>
		
		<button class="${"codeblock-btn " + escape(button, true)}">${escape(buttonLabel)}</button></header>
	
	<pre class="${"codeblock-pre " + escape(cPre, true)}"><code class="${"codeblock-code language-" + escape(language, true) + " lineNumbers"}">${formatted ? `<!-- HTML_TAG_START -->${displayCode}<!-- HTML_TAG_END -->` : `${escape(code.trim())}`}</code></pre></div>` : ``}`;
});
const cBackdrop$1 = "fixed top-0 left-0 right-0 bottom-0";
const cTransitionLayer = "w-full h-full p-4 overflow-y-auto flex justify-center";
const cModal = "block";
const cModalImage = "w-full h-auto";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cPosition;
  let classesBackdrop;
  let classesTransitionLayer;
  let classesModal;
  let parent;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  createEventDispatcher();
  let { position = "items-center" } = $$props;
  let { components = {} } = $$props;
  let { duration = 150 } = $$props;
  let { flyOpacity = 0 } = $$props;
  let { flyX = 0 } = $$props;
  let { flyY = 100 } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-modal" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { zIndex = "z-[999]" } = $$props;
  let { buttonNeutral = "variant-ghost-surface" } = $$props;
  let { buttonPositive = "variant-filled" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  modalStore.subscribe((modals) => {
    if (!modals.length)
      return;
    if (modals[0].type === "prompt")
      promptValue = modals[0].value;
    buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
    currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component;
  });
  function onClose() {
    if ($modalStore[0].response)
      $modalStore[0].response(false);
    modalStore.close();
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.flyOpacity === void 0 && $$bindings.flyOpacity && flyOpacity !== void 0)
    $$bindings.flyOpacity(flyOpacity);
  if ($$props.flyX === void 0 && $$bindings.flyX && flyX !== void 0)
    $$bindings.flyX(flyX);
  if ($$props.flyY === void 0 && $$bindings.flyY && flyY !== void 0)
    $$bindings.flyY(flyY);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonNeutral === void 0 && $$bindings.buttonNeutral && buttonNeutral !== void 0)
    $$bindings.buttonNeutral(buttonNeutral);
  if ($$props.buttonPositive === void 0 && $$bindings.buttonPositive && buttonPositive !== void 0)
    $$bindings.buttonPositive(buttonPositive);
  if ($$props.buttonTextCancel === void 0 && $$bindings.buttonTextCancel && buttonTextCancel !== void 0)
    $$bindings.buttonTextCancel(buttonTextCancel);
  if ($$props.buttonTextConfirm === void 0 && $$bindings.buttonTextConfirm && buttonTextConfirm !== void 0)
    $$bindings.buttonTextConfirm(buttonTextConfirm);
  if ($$props.buttonTextSubmit === void 0 && $$bindings.buttonTextSubmit && buttonTextSubmit !== void 0)
    $$bindings.buttonTextSubmit(buttonTextSubmit);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0)
    $$bindings.regionFooter(regionFooter);
  cPosition = $modalStore[0]?.position ?? position;
  classesBackdrop = `${cBackdrop$1} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""} ${$modalStore[0]?.backdropClasses ?? ""}`;
  classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${$modalStore[0]?.modalClasses ?? ""}`;
  parent = {
    position,
    // ---
    duration,
    flyOpacity,
    flyX,
    flyY,
    // ---
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    // ---
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    // ---
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    // ---
    onClose
  };
  $$unsubscribe_modalStore();
  return `

${$modalStore.length > 0 ? `
		<div class="${"modal-backdrop " + escape(classesBackdrop, true)}" data-testid="modal-backdrop">
			<div class="${"modal-transition " + escape(classesTransitionLayer, true)}">${$modalStore[0].type !== "component" ? `
					<div class="${"modal " + escape(classesModal, true)}" data-testid="modal" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}>
						${$modalStore[0]?.title ? `<header class="${"modal-header " + escape(regionHeader, true)}"><!-- HTML_TAG_START -->${$modalStore[0].title}<!-- HTML_TAG_END --></header>` : ``}
						
						${$modalStore[0]?.body ? `<article class="${"modal-body " + escape(regionBody, true)}"><!-- HTML_TAG_START -->${$modalStore[0].body}<!-- HTML_TAG_END --></article>` : ``}
						
						${$modalStore[0]?.image && typeof $modalStore[0]?.image === "string" ? `<img class="${"modal-image " + escape(cModalImage, true)}"${add_attribute("src", $modalStore[0]?.image, 0)} alt="Modal">` : ``}
						
						${$modalStore[0].type === "alert" ? `
							<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button></footer>` : `${$modalStore[0].type === "confirm" ? `
							<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
								<button type="button" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextConfirm)}</button></footer>` : `${$modalStore[0].type === "prompt" ? `
							<form class="space-y-4"><input${spread(
    [
      { class: "modal-prompt-input input" },
      { name: "prompt" },
      { type: "text" },
      escape_object($modalStore[0].valueAttr)
    ],
    {}
  )}${add_attribute("value", promptValue, 0)}>
								<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
									<button type="submit" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextSubmit)}</button></footer></form>` : ``}`}`}</div>` : `
					
					<div class="${"modal contents " + escape($modalStore[0].modalClasses ?? "", true)}" data-testid="modal-component" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}>${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {
    default: () => {
      return `${currentComponent?.slot ? `<!-- HTML_TAG_START -->${currentComponent?.slot}<!-- HTML_TAG_END -->` : ``}`;
    }
  })}</div>`}</div></div>` : ``}`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 flex";
const cDrawer = "overflow-y-auto transition-transform";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  createEventDispatcher();
  let { position = "left" } = $$props;
  let { duration = 150 } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "backdrop-blur-xs" } = $$props;
  let { padding = "" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { zIndex = "z-40" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  const propDefaults = {
    position,
    duration,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    labelledby,
    describedby,
    regionBackdrop,
    regionDrawer
  };
  function applyPropSettings(settings) {
    position = settings.position || propDefaults.position;
    duration = settings.duration || propDefaults.duration;
    bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
    blur = settings.blur || propDefaults.blur;
    padding = settings.padding || propDefaults.padding;
    bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
    border = settings.border || propDefaults.border;
    rounded = settings.rounded || propDefaults.rounded;
    shadow = settings.shadow || propDefaults.shadow;
    width = settings.width || propDefaults.width;
    height = settings.height || propDefaults.height;
    regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
    regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
    labelledby = settings.labelledby || propDefaults.labelledby;
    describedby = settings.describedby || propDefaults.describedby;
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true)
      return;
    applyPropSettings(settings);
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0)
    $$bindings.bgBackdrop(bgBackdrop);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0)
    $$bindings.bgDrawer(bgDrawer);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0)
    $$bindings.regionDrawer(regionDrawer);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0)
    $$bindings.describedby(describedby);
  classesPosition = presets[position].alignment;
  classesWidth = width ? width : presets[position].width;
  classesHeight = height ? height : presets[position].height;
  classesRounded = rounded ? rounded : presets[position].rounded;
  classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""}`;
  classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
  $$unsubscribe_drawerStore();
  return `

${$drawerStore.open === true ? `
	<div class="${"drawer-backdrop " + escape(classesBackdrop, true)}" data-testid="drawer-backdrop"${add_attribute("this", elemBackdrop, 0)}>
		<div class="${"drawer " + escape(classesDrawer, true)}" data-testid="drawer" role="dialog" aria-modal="true"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-describedby", describedby, 0)}${add_attribute("this", elemDrawer, 0)}>
			${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const cBase$c = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$c = "text-2xl font-bold";
const cForm$c = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalNewSkill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSkills;
  let $currentAbilities, $$unsubscribe_currentAbilities;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentSkills = subscribe(currentSkills, (value) => value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => $currentAbilities = value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  const abilitiesList = Object.keys($currentAbilities);
  const newSkill = {
    id: "",
    name: "",
    ability: "",
    trained: false,
    magic: false,
    psi: false,
    synergy: [],
    ref: "",
    ranks: 0,
    miscMod: 0
  };
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentSkills();
  $$unsubscribe_currentAbilities();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase$c, true)}"><header${add_attribute("class", cHeader$c, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		<article>${escape($modalStore[0].body ?? "(body missing)")}</article>
		<form class="${"modal-form " + escape(cForm$c, true)}"><label class="label"><span>SKill Name</span>
				<input class="input" type="text" placeholder="Enter new skill name..."${add_attribute("value", newSkill.name, 0)}></label>
			<label class="label"><span>Ability</span>
				<select class="select"><option value="" selected>None</option>${each(abilitiesList, (ability) => {
    return `<option${add_attribute("value", ability, 0)}>${escape(ability.toUpperCase())}</option>`;
  })}</select></label>
			<div class="space-y-2 grid grid-cols-3 gap-4 justify-items-center"><label class="flex items-center space-x-2"><input class="checkbox" type="checkbox" checked${add_attribute("value", newSkill.trained, 0)}>
					<p>Trained</p></label>
				<label class="flex items-center space-x-2"><input class="checkbox" type="checkbox"${add_attribute("value", newSkill.magic, 0)}>
					<p>Magic</p></label>
				<label class="flex items-center space-x-2"><input class="checkbox" type="checkbox"${add_attribute("value", newSkill.psi, 0)}>
					<p>Psionic</p></label></div>
			<label class="label"><span>Reference</span>
				<input class="input" type="text" placeholder="Link to reference..."${add_attribute("value", newSkill.ref, 0)}></label>
			<div class="grid grid-cols-2 gap-4 justify-items-center"><label class="label"><span>Ranks</span>
					<input class="input text-center w-[48px] arrow-hide" type="number"${add_attribute("value", newSkill.ranks, 0)}></label>
				<label class="label"><span>Misc Modifier</span>
					<input class="input text-center w-[48px] arrow-hide" type="number"${add_attribute("value", newSkill.miscMod, 0)}></label></div></form>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
        <button class="${"btn " + escape(parent.buttonPositive, true)}">Add Skill</button></footer></div>` : ``}`;
});
const cBase$b = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$b = "text-2xl font-bold";
const cForm$b = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalNewFeat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentFeats;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentFeats = subscribe(currentFeats, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  const newFeat = {
    id: "",
    name: "",
    longText: "",
    shortText: "",
    type: "",
    prerequisites: "",
    ref: ""
  };
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentFeats();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase$b, true)}"><header${add_attribute("class", cHeader$b, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		<article>${escape($modalStore[0].body ?? "(body missing)")}</article>
		<form class="${"modal-form " + escape(cForm$b, true)}"><label class="label"><span>Feat Name</span>
				<input class="input" type="text" placeholder="Enter new feat name..."${add_attribute("value", newFeat.name, 0)}></label>
			<label class="label"><span>Short Description</span>
				<input class="input" type="text" placeholder="Summary of the feat effects..."${add_attribute("value", newFeat.shortText, 0)}></label>
			<label class="label"><span>Descripttion</span>
				<input class="input" type="text" placeholder="Describe the feat..."${add_attribute("value", newFeat.longText, 0)}></label>
			<label class="label"><span>Requires</span>
				<input class="input" type="text" placeholder="Prerequisites for the feat..."${add_attribute("value", newFeat.prerequisites, 0)}></label>
			<label class="label"><span>Reference</span>
				<input class="input" type="text" placeholder="Link to reference..."${add_attribute("value", newFeat.ref, 0)}></label></form>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
        <button class="${"btn " + escape(parent.buttonPositive, true)}">New Feat</button></footer></div>` : ``}`;
});
const cBase$a = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$a = "text-2xl font-bold";
const cForm$a = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalAddFeat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentFeats, $$unsubscribe_currentFeats;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentFeats = subscribe(currentFeats, (value) => $currentFeats = value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  $currentFeats.feats;
  const featsdata = $modalStore[0].meta?.feats;
  const featsIndex = Object.keys(featsdata);
  const feats = featsIndex.map((key) => {
    const data = featsdata[key];
    return { ...data, id: key };
  });
  const isChecked = (list, id) => {
    const listIds = list.map((feat) => feat.id);
    return listIds.includes(id);
  };
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentFeats();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$a, true)}"><header${add_attribute("class", cHeader$a, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		
		<div class="${"modal-form " + escape(cForm$a, true) + " max-h-[720px] overflow-auto"}">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${each(feats, (feat) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: feat.id }, {}, {
          content: () => {
            return `<div class="space-y-2 ml-4 pl-4 pr-6 pb-2 border-l-2 border-b-2 border-slate-500/70 rounded-sm"><p class="text-slate-100/80 text-justify">${escape(feat.longText)}</p>
								<span class="ml-4 text-xs text-slate-100/70">Requires: ${escape(feat.prerequisites)}</span></div>
						`;
          },
          summary: () => {
            return `<h3 class="text-slate-100/80">${escape(feat.name)}</h3>
							<p class="text-slate-300/70 text-sm">${escape(feat.shortText)}</p>
						`;
          },
          lead: () => {
            return `<input class="checkbox" type="checkbox" ${isChecked($currentFeats.feats, feat.id) ? "checked" : ""}${add_attribute("value", feat.id, 0)}>
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
			<button class="${"btn " + escape(parent.buttonPositive, true)}">Done</button></footer></div>` : ``}`;
});
const cBase$9 = "card p-4 w-modal shadow-xl space-y-4 overflow-auto";
const cHeader$9 = "text-2xl font-bold";
const cForm$9 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalNewArmor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentGear;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  let newArmor = {
    id: "",
    tag: "",
    note: "",
    equipped: false,
    description: {
      name: "",
      source: null,
      price: "0 gp",
      weight: 0
    },
    visible: {
      size: null,
      armorBonus: 0,
      checkPenalty: 0,
      maxDexBonus: 0,
      arcaneSpellFailure: 0,
      speed_20: "20 ft",
      speed_30: "30 ft",
      coverage: [],
      combat: {
        mediumDie: null,
        smallDie: null,
        critical: null,
        type: []
      }
    },
    hidden: { type: "" },
    inputs: {}
  };
  let coverageList = ["head", "body", "arms", "legs", "hands", "feet", "other"];
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$9, true)}"><header${add_attribute("class", cHeader$9, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		<article>${escape($modalStore[0].body ?? "(body missing)")}</article>
		<form class="${"modal-form " + escape(cForm$9, true) + " grid grid-cols-4 gap-2"}"><label class="label col-span-4"><span>Item name</span>
				<input class="input" type="text" placeholder="Name..."${add_attribute("value", newArmor.description.name, 0)}></label>
			<label class="label col-span-2"><span>Type</span>
				<select id="type" class="select variant-form-material"><option value="other" selected>Other</option><option value="armor" selected>Armor</option><option value="shield" selected>Shield</option><option value="accessory" selected>Accessory</option></select></label>
			<label class="label"><span>Price</span>
				<input class="input variant-form-material" type="text" placeholder="Enter price in gp..."${add_attribute("value", newArmor.description.price, 0)}></label>
			<label class="label"><span>Weight</span>
				<input class="input text-center arrow-hide" type="number"${add_attribute("value", newArmor.description.weight, 0)}></label>
			<label class="label"><span>Armor Bonus</span>
				<input class="input text-center arrow-hide" type="number"${add_attribute("value", newArmor.visible.armorBonus, 0)}></label>
			<label class="label"><span>Check Penalty</span>
				<input class="input text-center arrow-hide" type="number"${add_attribute("value", newArmor.visible.checkPenalty, 0)}></label>
			<label class="label"><span>Max. DEX Bonus</span>
				<input class="input text-center arrow-hide" type="number"${add_attribute("value", newArmor.visible.maxDexBonus, 0)}></label>
			<label class="label"><span>Arcane Spell Failure</span>
				<input class="input text-center arrow-hide" type="number"${add_attribute("value", newArmor.visible.arcaneSpellFailure, 0)}></label>
			<label class="label"><span>Speed 20</span>
				<input class="input variant-form-material" type="text" placeholder="Enter speed at 20 ft..."${add_attribute("value", newArmor.visible.speed_20, 0)}></label>
			<label class="label"><span>Speed 30</span>
				<input class="input variant-form-material" type="text" placeholder="Enter speed at 30 ft..."${add_attribute("value", newArmor.visible.speed_30, 0)}></label>
			${validate_component(InputChip, "InputChip").$$render(
      $$result,
      {
        name: "coverage",
        class: "col-span-2",
        whitelist: coverageList,
        placeholder: "Enter coverage area, press ENTER...",
        value: newArmor.visible.coverage
      },
      {
        value: ($$value) => {
          newArmor.visible.coverage = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			<hr class="col-span-4">
			<h3 class="col-span-4">Combat</h3>
			<label class="label"><span>Medium die</span>
				<input class="input variant-form-material" type="text" placeholder="Medium die..."${add_attribute("value", newArmor.visible.combat.mediumDie, 0)}></label>
			<label class="label"><span>Small die</span>
				<input class="input variant-form-material" type="text" placeholder="Small die..."${add_attribute("value", newArmor.visible.combat.smallDie, 0)}></label>
			<label class="label"><span>Critical</span>
				<input class="input variant-form-material" type="text" placeholder="Critical..."${add_attribute("value", newArmor.visible.combat.critical, 0)}></label>
			<label class="label"><span>Damage type</span>
				<input class="input variant-form-material" type="text" placeholder="Damage type..."${add_attribute("value", newArmor.visible.combat.type, 0)}></label></form>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
        <button class="${"btn " + escape(parent.buttonPositive, true)}" ${"disabled"}>Create Item</button></footer></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_currentGear();
  $$unsubscribe_modalStore();
  return $$rendered;
});
const cBase$8 = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$8 = "text-2xl font-bold";
const cForm$8 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalAddArmor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentGear;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  const armor = $modalStore[0].meta?.armor;
  let addList = [];
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentGear();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$8, true)}"><header${add_attribute("class", cHeader$8, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		
		<div class="${"modal-form " + escape(cForm$8, true) + " max-h-[720px] overflow-auto"}">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${each(armor, (item) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.id }, {}, {
          content: () => {
            return `<div class="grid grid-cols-3 gap-1 ml-4 border-l-2 border-b-2 border-slate-500/70 rounded-sm text-slate-100/80"><div class="space-y-2 ml-2 pl-4 pr-6 pb-2"><ul>${each(Object.keys(item.visible), (key) => {
              return `${item.visible[key] && typeof item.visible[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible[key])}</li>` : ``}`;
            })}
									</ul></div>
								<div class="space-y-2 ml-2 pl-4 pr-2 pb-2"><ul>${each(Object.keys(item.visible.combat), (key) => {
              return `${item.visible.combat[key] && typeof item.visible.combat[key] != "object" ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : `${key === "type" && item.visible.combat.type.length > 0 ? `<li>${escape(toTitleCase(key))}: ${escape(item.visible.combat[key])}</li>` : ``}`}`;
            })}</ul>
								</div></div>
						`;
          },
          summary: () => {
            return `<h3 class="text-slate-100/80">${escape(item.description.name)}</h3>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li>
								${item.visible.coverage.length > 0 ? `<li class="inline-block">(${escape(item.visible.coverage)})</li>` : ``}</ul>
						`;
          },
          lead: () => {
            return `<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="mdi:add-bold" class="inline-block"></iconify-icon></button>
							${inList(addList, item.id).in ? `<span class="inline-block text-orange-400"><strong>${escape(inList(addList, item.id).qty)}</strong></span>
								<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="fa:minus"></iconify-icon>
								</button>` : ``}
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		
		<div class="justify-between">
			<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
				<button class="${"btn " + escape(parent.buttonPositive, true)}" ${addList.length < 1 ? "disabled" : ""}>Add Items</button></footer></div></div>` : ``}`;
});
const cBase$7 = "card p-4 w-modal shadow-xl space-y-4 overflow-auto";
const cHeader$7 = "text-2xl font-bold";
const cForm$7 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalNewWeapon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentGear;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  let newWeapon = {
    id: "",
    tag: "",
    ref: "",
    note: "",
    equipped: false,
    description: {
      name: "",
      source: null,
      price: "0 gp",
      weight: 0
    },
    visible: {
      basic: {
        size: "",
        ammo: null,
        reach: null,
        range: null,
        blast: null
      },
      combat: {
        damage: { mediumDie: "", smallDie: "" },
        critical: "",
        type: []
      }
    },
    hidden: {
      hardness: null,
      hp: null,
      break: null,
      material: null,
      isExotic: false,
      isRanged: false
    },
    inputs: {}
  };
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$7, true)}"><header${add_attribute("class", cHeader$7, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		<article>${escape($modalStore[0].body ?? "(body missing)")}</article>
		<form class="${"modal-form " + escape(cForm$7, true) + " grid grid-cols-4 gap-2"}"><label class="label col-span-4"><span>Weapon name</span>
				<input class="input" type="text" placeholder="Name..."${add_attribute("value", newWeapon.description.name, 0)}></label>
			<label class="label"><span>Type</span>
				<select id="type" class="select variant-form-material"><option value="false" selected>Melee</option><option value="true" selected>Ranged</option></select></label>
			<label class="label"><span>Size</span>
				<input class="input variant-form-material" type="text" placeholder="Enter size..."${add_attribute("value", newWeapon.visible.basic.size, 0)}></label>
			<label class="label"><span>Price</span>
				<input class="input variant-form-material" type="text" placeholder="Enter price in gp..."${add_attribute("value", newWeapon.description.price, 0)}></label>
			<label class="label"><span>Weight</span>
				<input class="input text-center arrow-hide" type="number"${add_attribute("value", newWeapon.description.weight, 0)}></label>
			<label class="label col-span-2"><span>Reference</span>
				<input class="input variant-form-material" type="text" placeholder="URL or book and page number..."${add_attribute("value", newWeapon.ref, 0)}></label>
			<label class="label col-span-2"><span>Notes</span>
				<textarea name="Note"${add_attribute("id", `${newWeapon.id}Note`, 0)} class="textarea">${""}</textarea></label>
			<hr class="col-span-4">
			<h3 class="col-span-4">Combat</h3>
			<label class="label"><span>Medium die</span>
				<input class="input variant-form-material" type="text" placeholder="Medium die..."${add_attribute("value", newWeapon.visible.combat.damage.mediumDie, 0)}></label>
			<label class="label"><span>Small die</span>
				<input class="input variant-form-material" type="text" placeholder="Small die..."${add_attribute("value", newWeapon.visible.combat.damage.smallDie, 0)}></label>
			<label class="label"><span>Critical</span>
				<input class="input variant-form-material" type="text" placeholder="Critical..."${add_attribute("value", newWeapon.visible.combat.critical, 0)}></label>
			${validate_component(InputChip, "InputChip").$$render(
      $$result,
      {
        name: "damage type",
        class: "col-span-2",
        placeholder: "Enter damage type, press ENTER...",
        value: newWeapon.visible.combat.type
      },
      {
        value: ($$value) => {
          newWeapon.visible.combat.type = $$value;
          $$settled = false;
        }
      },
      {}
    )}</form>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
        <button class="${"btn " + escape(parent.buttonPositive, true)}" ${"disabled"}>Create Item</button></footer></div>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_currentGear();
  $$unsubscribe_modalStore();
  return $$rendered;
});
const cBase$6 = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$6 = "text-2xl font-bold";
const cForm$6 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalAddWeapon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentGear;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  const weapons = $modalStore[0].meta?.weapons;
  let addList = [];
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentGear();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$6, true)}"><header${add_attribute("class", cHeader$6, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		
		<div class="${"modal-form " + escape(cForm$6, true) + " max-h-[720px] overflow-auto"}">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${each(weapons, (item) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.id }, {}, {
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
            })}</ul>
								</div></div>
						`;
          },
          summary: () => {
            return `<h3 class="text-slate-100/80">${escape(item.description.name)}</h3>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li></ul>
						`;
          },
          lead: () => {
            return `<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="mdi:add-bold" class="inline-block"></iconify-icon></button>
							${inList(addList, item.id).in ? `<span class="inline-block text-orange-400"><strong>${escape(inList(addList, item.id).qty)}</strong></span>
								<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="fa:minus"></iconify-icon>
								</button>` : ``}
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		
		<div class="justify-between">
			<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
				<button class="${"btn " + escape(parent.buttonPositive, true)}" ${addList.length < 1 ? "disabled" : ""}>Add Items</button></footer></div></div>` : ``}`;
});
const cBase$5 = "card p-4 w-modal shadow-xl space-y-4 overflow-auto";
const cHeader$5 = "text-2xl font-bold";
const cForm$5 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalNewGear = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentGear;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  let newGear = {
    id: "",
    tag: "",
    ref: "",
    note: "",
    equipped: false,
    description: {
      name: "",
      source: null,
      price: "0 gp",
      weight: 0
    },
    visible: { basic: {}, combat: {} },
    hidden: { type: null },
    inputs: {}
  };
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentGear();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$5, true)}"><header${add_attribute("class", cHeader$5, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		<article>${escape($modalStore[0].body ?? "(body missing)")}</article>
		<form class="${"modal-form " + escape(cForm$5, true) + " grid grid-cols-4 gap-2"}"><label class="label col-span-4"><span>Item name</span>
				<input class="input" type="text" placeholder="Name..."${add_attribute("value", newGear.description.name, 0)}></label>
			<label class="label"><span>Price</span>
				<input class="input variant-form-material" type="text" placeholder="Enter price in gp..."${add_attribute("value", newGear.description.price, 0)}></label>
			<label class="label"><span>Weight</span>
				<input class="input text-center arrow-hide" type="number"${add_attribute("value", newGear.description.weight, 0)}></label>
			<label class="label col-span-2"><span>Reference</span>
				<input class="input variant-form-material" type="text" placeholder="URL or book and page number..."${add_attribute("value", newGear.ref, 0)}></label>
			<label class="label col-span-2"><span>Notes</span>
				<textarea name="Note"${add_attribute("id", `${newGear.id}Note`, 0)} class="textarea">${""}</textarea></label></form>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
        <button class="${"btn " + escape(parent.buttonPositive, true)}" ${"disabled"}>Create Item</button></footer></div>` : ``}`;
});
const cBase$4 = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$4 = "text-2xl font-bold";
const cForm$4 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalAddGear = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentGear;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  const gear = $modalStore[0].meta?.gear;
  let addList = [];
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentGear();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$4, true)}"><header${add_attribute("class", cHeader$4, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		
		<div class="${"modal-form " + escape(cForm$4, true) + " max-h-[720px] overflow-auto"}">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${each(gear, (item) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.id }, {}, {
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
            })}</ul>
								</div></div>
						`;
          },
          summary: () => {
            return `<h3 class="text-slate-100/80">${escape(item.description.name)}</h3>
							<ul class="text-slate-300/70 text-sm space-x-4"><li class="inline-block text-orange-400/70">${escape(item.description.price)}</li>
								<li class="inline-block">${escape(item.description.weight)} lbs.</li></ul>
						`;
          },
          lead: () => {
            return `<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="mdi:add-bold" class="inline-block"></iconify-icon></button>
							${inList(addList, item.id).in ? `<span class="inline-block text-orange-400"><strong>${escape(inList(addList, item.id).qty)}</strong></span>
								<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="fa:minus"></iconify-icon>
								</button>` : ``}
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		
		<div class="justify-between">
			<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
				<button class="${"btn " + escape(parent.buttonPositive, true)}" ${addList.length < 1 ? "disabled" : ""}>Add Items</button></footer></div></div>` : ``}`;
});
const cBase$3 = "card p-4 w-modal shadow-xl space-y-4 overflow-auto";
const cHeader$3 = "text-2xl font-bold";
const cForm$3 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalNewSpell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSpells;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentSpells = subscribe(currentSpells, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  let newSpell = {
    id: "",
    tag: "",
    ref: "",
    note: "",
    equipped: false,
    archetype: "",
    casting_time: "1 action",
    circles: "",
    class: "",
    components: "V, S, M",
    concentration: "no",
    desc: "",
    duration: "Instantaneous",
    higher_level: "",
    level: "1st-level",
    material: "",
    name: "",
    range: "0 feet",
    ritual: "no",
    school: ""
  };
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentSpells();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$3, true)}"><header${add_attribute("class", cHeader$3, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		<article>${escape($modalStore[0].body ?? "(body missing)")}</article>
		<form class="${"modal-form " + escape(cForm$3, true) + " grid grid-cols-5 gap-2"}"><label class="label col-span-5"><span>Spell name</span>
				<input class="input" type="text" placeholder="Name..."${add_attribute("value", newSpell.name, 0)}></label>
			<label class="label"><span>Casting Time</span>
				<input class="input variant-form-material" type="text" placeholder="Casting time..."${add_attribute("value", newSpell.casting_time, 0)}></label>
			<label class="label"><span>Range</span>
				<input class="input variant-form-material" type="text" placeholder="Range..."${add_attribute("value", newSpell.range, 0)}></label>
			<label class="label"><span>Duration</span>
				<input class="input variant-form-material" type="text" placeholder="Duration..."${add_attribute("value", newSpell.duration, 0)}></label>
			<label class="label"><span>Level</span>
				<input class="input variant-form-material" type="text" placeholder="Level..."${add_attribute("value", newSpell.level, 0)}></label>
			<label class="label"><span>School</span>
				<input class="input variant-form-material" type="text" placeholder="School..."${add_attribute("value", newSpell.school, 0)}></label>
			<label class="label col-span-5"><span>Description</span>
				<textarea name="Description" class="textarea" placeholder="Description...">${""}</textarea></label>
			<label class="label"><span>Classes</span>
				<input class="input variant-form-material" type="text" placeholder="Classes..."${add_attribute("value", newSpell.class, 0)}></label>
			<label class="label"><span>Concentration</span>
				<input class="input variant-form-material" type="text" placeholder="Concentration..."${add_attribute("value", newSpell.concentration, 0)}></label>
			<label class="label"><span>Ritual</span>
				<input class="input variant-form-material" type="text" placeholder="Ritual..."${add_attribute("value", newSpell.ritual, 0)}></label>
			<label class="label"><span>Components</span>
				<input class="input variant-form-material" type="text" placeholder="Components..."${add_attribute("value", newSpell.components, 0)}></label>
			<label class="label"><span>Material</span>
				<input class="input variant-form-material" type="text" placeholder="Material..."${add_attribute("value", newSpell.material, 0)}></label>
			<label class="label col-span-5"><span>Higher level</span>
				<textarea name="highereLevel" class="textarea" placeholder="Description of higher level effects...">${""}</textarea></label>
			
			<label class="label col-span-3"><span>Reference</span>
				<input class="input variant-form-material" type="text" placeholder="URL or book and page number..."${add_attribute("value", newSpell.ref, 0)}></label></form>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
        <button class="${"btn " + escape(parent.buttonPositive, true)}" ${"disabled"}>Create Spell</button></footer></div>` : ``}`;
});
const cBase$2 = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$2 = "text-2xl font-bold";
const cForm$2 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalAddSpell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSpells;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentSpells = subscribe(currentSpells, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  const spells = $modalStore[0].meta?.spells;
  let addList = [];
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentSpells();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"w-modal-wide " + escape(cBase$2, true)}"><header${add_attribute("class", cHeader$2, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		
		<div class="${"modal-form " + escape(cForm$2, true) + " max-h-[720px] overflow-auto"}">${validate_component(Accordion, "Accordion").$$render($$result, { autocollapse: true }, {}, {
    default: () => {
      return `${each(spells, (item) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { id: item.id }, {}, {
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
										<li>Referece page: <span class="pl-2 text-slate-300/70">${escape(item.page)}</span></li></ul>
								</div></div>
						`;
          },
          summary: () => {
            return `<h3 class="text-slate-100/80">${escape(item.name)}</h3>
							<ul class="text-slate-300/70 text-sm space-x-2"><li class="inline-block text-orange-400/70">${escape(item.casting_time)}</li>
								<li class="inline-block text-orange-400/70">${escape(item.range)}</li>
								<li class="inline-block text-orange-400/70">${escape(item.duration)}</li>
								<li class="inline-block">${escape(item.level)}</li>
								<li class="inline-block">${escape(item.school)}</li></ul>
						`;
          },
          lead: () => {
            return `<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="mdi:add-bold" class="inline-block"></iconify-icon></button>
							${inList(addList, item.id).in ? `<span class="inline-block text-orange-400"><strong>${escape(inList(addList, item.id).qty)}</strong></span>
								<button class="btn-icon btn-icon-sm variant-soft-surface click:variant-filled-primary"><iconify-icon icon="fa:minus"></iconify-icon>
								</button>` : ``}
						`;
          }
        })}`;
      })}`;
    }
  })}</div>
		
		<div class="justify-between">
			<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
				<button class="${"btn " + escape(parent.buttonPositive, true)}" ${addList.length < 1 ? "disabled" : ""}>Add Spells</button></footer></div></div>` : ``}`;
});
const cBase$1 = "card p-4 w-modal shadow-xl space-y-4";
const cHeader$1 = "text-2xl font-bold";
const cForm$1 = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalCharExportJson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSpells, $$unsubscribe_currentSpells;
  let $currentGear, $$unsubscribe_currentGear;
  let $currentFeats, $$unsubscribe_currentFeats;
  let $currentSkills, $$unsubscribe_currentSkills;
  let $currentMisc, $$unsubscribe_currentMisc;
  let $currentAttack, $$unsubscribe_currentAttack;
  let $currentSaves, $$unsubscribe_currentSaves;
  let $currentAbilities, $$unsubscribe_currentAbilities;
  let $currentHealth, $$unsubscribe_currentHealth;
  let $currentAttributes, $$unsubscribe_currentAttributes;
  let $currentAvatar, $$unsubscribe_currentAvatar;
  let $currentState, $$unsubscribe_currentState;
  let $currentMetadata, $$unsubscribe_currentMetadata;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentSpells = subscribe(currentSpells, (value) => $currentSpells = value);
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => $currentGear = value);
  $$unsubscribe_currentFeats = subscribe(currentFeats, (value) => $currentFeats = value);
  $$unsubscribe_currentSkills = subscribe(currentSkills, (value) => $currentSkills = value);
  $$unsubscribe_currentMisc = subscribe(currentMisc, (value) => $currentMisc = value);
  $$unsubscribe_currentAttack = subscribe(currentAttack, (value) => $currentAttack = value);
  $$unsubscribe_currentSaves = subscribe(currentSaves, (value) => $currentSaves = value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => $currentAbilities = value);
  $$unsubscribe_currentHealth = subscribe(currentHealth, (value) => $currentHealth = value);
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => $currentAttributes = value);
  $$unsubscribe_currentAvatar = subscribe(currentAvatar, (value) => $currentAvatar = value);
  $$unsubscribe_currentState = subscribe(currentState, (value) => $currentState = value);
  $$unsubscribe_currentMetadata = subscribe(currentMetadata, (value) => $currentMetadata = value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  const exportCharacterJson = () => {
    const character = {
      metadata: { ...$currentMetadata },
      state: { ...$currentState },
      avatar: { ...$currentAvatar },
      attributes: { ...$currentAttributes },
      health: { ...$currentHealth },
      abilities: { ...$currentAbilities },
      saves: { ...$currentSaves },
      attack: { ...$currentAttack },
      misc: { ...$currentMisc },
      skills: { ...$currentSkills },
      feats: { ...$currentFeats },
      gear: { ...$currentGear },
      spells: { ...$currentSpells }
    };
    return JSON.stringify(character);
  };
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentSpells();
  $$unsubscribe_currentGear();
  $$unsubscribe_currentFeats();
  $$unsubscribe_currentSkills();
  $$unsubscribe_currentMisc();
  $$unsubscribe_currentAttack();
  $$unsubscribe_currentSaves();
  $$unsubscribe_currentAbilities();
  $$unsubscribe_currentHealth();
  $$unsubscribe_currentAttributes();
  $$unsubscribe_currentAvatar();
  $$unsubscribe_currentState();
  $$unsubscribe_currentMetadata();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase$1, true)}"><header${add_attribute("class", cHeader$1, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		
		<div class="${"modal-form " + escape(cForm$1, true) + " max-h-[720px] overflow-auto"}">${validate_component(CodeBlock, "CodeBlock").$$render(
    $$result,
    {
      language: "json",
      code: `${exportCharacterJson()}`
    },
    {},
    {}
  )}</div>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonPositive, true)}">Close</button></footer></div>` : ``}`;
});
const cBase = "card p-4 w-modal shadow-xl space-y-4";
const cHeader = "text-2xl font-bold";
const cForm = "border border-surface-500 p-4 space-y-4 rounded-container-token";
const ModalCharImportJson = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentSpells;
  let $$unsubscribe_currentGear;
  let $$unsubscribe_currentFeats;
  let $$unsubscribe_currentSkills;
  let $$unsubscribe_currentMisc;
  let $$unsubscribe_currentAttack;
  let $$unsubscribe_currentSaves;
  let $$unsubscribe_currentAbilities;
  let $$unsubscribe_currentHealth;
  let $$unsubscribe_currentAttributes;
  let $$unsubscribe_currentAvatar;
  let $$unsubscribe_currentState;
  let $$unsubscribe_currentMetadata;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_currentSpells = subscribe(currentSpells, (value) => value);
  $$unsubscribe_currentGear = subscribe(currentGear, (value) => value);
  $$unsubscribe_currentFeats = subscribe(currentFeats, (value) => value);
  $$unsubscribe_currentSkills = subscribe(currentSkills, (value) => value);
  $$unsubscribe_currentMisc = subscribe(currentMisc, (value) => value);
  $$unsubscribe_currentAttack = subscribe(currentAttack, (value) => value);
  $$unsubscribe_currentSaves = subscribe(currentSaves, (value) => value);
  $$unsubscribe_currentAbilities = subscribe(currentAbilities, (value) => value);
  $$unsubscribe_currentHealth = subscribe(currentHealth, (value) => value);
  $$unsubscribe_currentAttributes = subscribe(currentAttributes, (value) => value);
  $$unsubscribe_currentAvatar = subscribe(currentAvatar, (value) => value);
  $$unsubscribe_currentState = subscribe(currentState, (value) => value);
  $$unsubscribe_currentMetadata = subscribe(currentMetadata, (value) => value);
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  let { parent } = $$props;
  if ($$props.parent === void 0 && $$bindings.parent && parent !== void 0)
    $$bindings.parent(parent);
  $$unsubscribe_currentSpells();
  $$unsubscribe_currentGear();
  $$unsubscribe_currentFeats();
  $$unsubscribe_currentSkills();
  $$unsubscribe_currentMisc();
  $$unsubscribe_currentAttack();
  $$unsubscribe_currentSaves();
  $$unsubscribe_currentAbilities();
  $$unsubscribe_currentHealth();
  $$unsubscribe_currentAttributes();
  $$unsubscribe_currentAvatar();
  $$unsubscribe_currentState();
  $$unsubscribe_currentMetadata();
  $$unsubscribe_modalStore();
  return `${$modalStore[0] ? `<div class="${"modal-example-form " + escape(cBase, true)}"><header${add_attribute("class", cHeader, 0)}>${escape($modalStore[0].title ?? "(title missing)")}</header>
		
		<div class="${"modal-form " + escape(cForm, true) + " max-h-[720px] overflow-auto"}"><textarea class="textarea" rows="20" placeholder="Character sheet JSON goes here...">${""}</textarea></div>
		
		<footer class="${"modal-footer " + escape(parent.regionFooter, true)}"><button class="${"btn " + escape(parent.buttonNeutral, true)}">Cancel</button>
			<button class="${"btn " + escape(parent.buttonPositive, true)}">Import</button></footer></div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $drawerStore, $$unsubscribe_drawerStore;
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  const modalComponentRegistry = {
    modalNewSkill: { ref: ModalNewSkill },
    modalAddFeat: { ref: ModalAddFeat },
    modalNewFeat: { ref: ModalNewFeat },
    modalAddArmor: { ref: ModalAddArmor },
    modalNewArmor: { ref: ModalNewArmor },
    modalAddWeapon: { ref: ModalAddWeapon },
    modalNewWeapon: { ref: ModalNewWeapon },
    modalNewGear: { ref: ModalNewGear },
    modalAddGear: { ref: ModalAddGear },
    modalNewSpell: { ref: ModalNewSpell },
    modalAddSpell: { ref: ModalAddSpell },
    modalExportCharJson: { ref: ModalCharExportJson },
    modalImportCharJson: { ref: ModalCharImportJson }
  };
  $$unsubscribe_drawerStore();
  return `${validate_component(Drawer, "Drawer").$$render($$result, {}, {}, {
    default: () => {
      return `${$drawerStore.id === "menuPlayer" ? `<div class="p-4"><h3 class="p-4">Player Menu</h3>
			<hr>
			<button title="Export Character JSON" class="btn btn-sm variant-soft-surface m-4">Export to JSON
			</button>
			<button title="Import Character JSON" class="btn btn-sm variant-soft-surface m-4">Import from JSON
			</button></div>` : `${$drawerStore.id === "menuGameMaster" ? `<h3>Game Master Menu</h3>` : `<p>Nothing to see here.</p>`}`}`;
    }
  })}


${validate_component(Modal, "Modal").$$render($$result, { components: modalComponentRegistry }, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
