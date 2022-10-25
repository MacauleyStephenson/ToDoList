/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*:where(:not(html, iframe, canvas, img, svg, video, dialog):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\na,\nbutton {\n  cursor: revert;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ninput,\ntextarea {\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\ntextarea {\n  white-space: revert;\n}\n\nmeter {\n  -webkit-appearance: revert;\n  appearance: revert;\n}\n\n::placeholder {\n  color: unset;\n}\n\n:where([hidden]) {\n  display: none;\n}\n\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  line-break: after-white-space;\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n:root {\n  --header-bg-clr: var(--clr-primary);\n  --footer-bg-clr: var(--clr-primary);\n  --sidebar-bg-clr: var(--clr-neutral-200);\n  --body-bg-clr: var(--clr-white);\n  --transition-time: 400ms;\n  --fnt-sz-default: var(--size-4);\n  --fnt-wt-default: 400;\n  --fnt-clr-default: var(--clr-black);\n  --clr-white: var(--clr-neutral-100);\n  --clr-black: var(--clr-neutral-800);\n  --default-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  font-size: 62.5%;\n  --fnt-fam-default: \"Roboto\", sans-serif;\n  --fnt-wt-thin: 300;\n  --fnt-wt-reg: 400;\n  --fnt-wt-bold: 700;\n  --fnt-wt-heavy: 900;\n  --clr-primary: hsl(350deg, 89%, 60%);\n  --clr-primary-light: hsl(351deg, 95%, 71%);\n  --clr-primary-dark: hsl(347deg, 77%, 50%);\n  --clr-primary-xlight: hsl(353deg, 96%, 90%);\n  --clr-green-regular: hsl(160deg, 84%, 39%);\n  --clr-green-light: hsl(158deg, 64%, 52%);\n  --clr-green-dark: hsl(161deg, 94%, 30%);\n  --clr-red-regular: hsl(350deg, 89%, 60%);\n  --clr-red-light: hsl(351deg, 95%, 71%);\n  --clr-red-dark: hsl(347deg, 77%, 50%);\n  --clr-orange-regular: hsl(25deg, 95%, 53%);\n  --clr-orange-dark: hsl(21deg, 90%, 48%);\n  --clr-orange-light: hsl(27deg, 96%, 61%);\n  --clr-white: var(--clr-neutral-100);\n  --clr-black: var(--clr-neutral-800);\n  --clr-neutral-50: hsl(0deg, 0%, 98%);\n  --clr-neutral-100: hsl(0deg, 0%, 96%);\n  --clr-neutral-200: hsl(0deg, 0%, 90%);\n  --clr-neutral-300: hsl(0deg, 0%, 83%);\n  --clr-neutral-400: hsl(0deg, 0%, 64%);\n  --clr-neutral-500: hsl(0deg, 0%, 45%);\n  --clr-neutral-600: hsl(0deg, 0%, 32%);\n  --clr-neutral-700: hsl(0deg, 0%, 25%);\n  --clr-neutral-800: hsl(0deg, 0%, 15%);\n  --clr-neutral-900: hsl(0deg, 0%, 9%);\n  --size-1: 0.4rem;\n  --size-2: 0.8rem;\n  --size-3: 1.2rem;\n  --size-4: 1.6rem;\n  --size-5: 2rem;\n  --size-6: 2.4rem;\n  --size-8: 3.2rem;\n  --size-52: 20.8rem;\n  --size-72: 28.8rem;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  background: var(--body-bg-clr);\n  min-height: 100vh;\n  font-family: var(--fnt-fam-default);\n  font-size: var(--fnt-sz-default);\n  font-weight: var(--fnt-wt-default);\n  color: var(--fnt-clr-default);\n}\n\n.brand {\n  font-size: var(--size-5);\n  font-weight: var(--fnt-wt-bold);\n  flex: 1;\n}\n\n.icon {\n  fill: currentColor;\n  transition-duration: var(--transition-time);\n}\n.icon:hover {\n  transform: scale(1.25);\n}\n.icon-6 {\n  width: var(--size-6);\n  aspect-ratio: 1;\n}\n.icon-5 {\n  width: var(--size-5);\n  aspect-ratio: 1;\n}\n.icon-4 {\n  width: var(--size-4);\n  aspect-ratio: 1;\n}\n.icon-3 {\n  width: var(--size-3);\n  aspect-ratio: 1;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--header-bg-clr);\n  color: var(--clr-white);\n  gap: 0.5rem;\n  padding-inline: var(--size-3);\n  padding-block: var(--size-2);\n}\n\nmain {\n  display: flex;\n  position: relative;\n}\n\n.tasks-container-main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n  padding: var(--size-6);\n  width: 100%;\n}\n.tasks-container-sub {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--size-3);\n  border-bottom: 1px solid var(--clr-black);\n  margin-bottom: var(--size-4);\n  padding-bottom: var(--size-2);\n  width: 100%;\n}\n.tasks-container-top-bar {\n  position: relative;\n}\n\n.filter-list {\n  position: absolute;\n  z-index: 90;\n  top: var(--size-8);\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n  background-color: var(--clr-neutral-50);\n  box-shadow: var(--default-shadow);\n  border-radius: var(--size-1);\n  padding: var(--size-4);\n  width: var(--size-52);\n}\n.filter-list-item {\n  display: flex;\n  align-items: center;\n  gap: var(--size-2);\n  padding: var(--size-1);\n  color: var(--clr-black);\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n}\n.filter-list-item:hover {\n  background: var(--clr-primary-xlight);\n}\n\n.tasks-wrapper {\n  width: 100%;\n}\n.tasks-heading {\n  font-weight: bold;\n  flex: 1;\n  font-size: var(--size-6);\n}\n.tasks-list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\n.tasks-notask-text {\n  text-align: center;\n  font-weight: var(--fnt-wt-thin);\n  font-size: var(--size-6);\n}\n.tasks-complete {\n  background: var(--clr-green-light);\n  color: var(--clr-white);\n}\n.tasks-list-item {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  grid-template-areas: \"check details\";\n  border-bottom: 1px solid #cccccc;\n  border-radius: var(--size-2);\n  overflow: hidden;\n  transition-duration: 600ms;\n}\n.tasks-list-item:hover {\n  box-shadow: inset -1000px 0 0 0 rgba(0, 0, 0, 0.03);\n}\n.tasks-list-item-checkbox {\n  grid-area: check;\n  margin-block: auto;\n  margin-inline: var(--size-4);\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-items: center;\n}\n.tasks-list-item-checkbox::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--clr-green-regular);\n}\n.tasks-list-item-checkbox:checked::before {\n  transform: scale(1);\n}\n.tasks-list-item-checkbox-complete {\n  border-color: var(--clr-green-regular);\n}\n.tasks-list-item-title {\n  font-size: var(--size-4);\n  grid-area: title;\n}\n.tasks-list-item-buttons-wrapper {\n  grid-area: buttons;\n  display: flex;\n  gap: var(--size-2);\n  justify-content: flex-start;\n}\n@media only screen and (min-width: 40em) {\n  .tasks-list-item-buttons-wrapper {\n    justify-content: flex-end;\n  }\n}\n.tasks-list-item-date {\n  grid-area: date;\n  display: flex;\n  gap: var(--size-2);\n  align-items: center;\n}\n.tasks-list-item-date--overdue {\n  color: var(--clr-red-regular);\n}\n.tasks-list-item-project {\n  grid-area: project;\n  display: flex;\n  gap: var(--size-2);\n  align-items: center;\n  text-transform: uppercase;\n}\n.tasks-list-item-description {\n  margin-top: var(--size-4);\n  font-size: var(--size-4);\n  font-weight: var(--fnt-wt-thin);\n}\n.tasks-list-item-complete {\n  text-decoration: line-through;\n  transition-duration: var(--transition-time);\n}\n.tasks-details {\n  grid-area: details;\n  padding: var(--size-4);\n}\n.tasks-summary {\n  display: grid;\n  grid-template-columns: 1fr max-content;\n  grid-template-rows: repeat(2, max-content);\n  grid-template-areas: \"title\" \"date\" \"project\" \"buttons\";\n  gap: var(--size-4);\n  font-weight: var(--fnt-wt-thin);\n  font-size: var(--size-3);\n  transition-duration: var(--transition-time);\n}\n@media only screen and (min-width: 40em) {\n  .tasks-summary {\n    grid-template-areas: \"title buttons\" \"date project\";\n    gap: var(--size-2);\n  }\n}\n\ndetails[open] > summary {\n  border-bottom: 1px solid #cccccc;\n  padding-bottom: var(--size-4);\n}\n\n.priority-high {\n  border-left: var(--size-2) solid var(--clr-red-regular);\n}\n.priority-medium {\n  border-left: var(--size-2) solid var(--clr-orange-regular);\n}\n.priority-low {\n  border-left: var(--size-2) solid var(--clr-green-regular);\n}\n\ninput[type=radio]:not(:checked) + label {\n  opacity: 0.3;\n}\n\ninput:has(:not(:placeholder-shown)):not(:valid) {\n  outline: 2px solid var(--clr-primary);\n}\n\nfooter {\n  padding: var(--size-4);\n  text-align: center;\n  background: var(--footer-bg-clr);\n  color: var(--clr-white);\n  font-size: var(--size-3);\n}\n\n.btn {\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.btn-burger {\n  padding-inline: var(--size-4);\n}\n@media only screen and (min-width: 64em) {\n  .btn-burger {\n    display: none;\n  }\n}\n.btn-icon-only {\n  display: grid;\n  place-items: center;\n}\n.btn-new-project {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--size-1);\n  padding-block: var(--size-3);\n  padding-inline: var(--size-2);\n  width: 100%;\n  background: var(--clr-green-regular);\n  color: var(--clr-black);\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n  font-size: var(--size-3);\n}\n.btn-toggle-projects {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--size-2);\n  padding: var(--size-3);\n  border-radius: var(--size-1);\n  background: var(--clr-primary);\n  color: var(--clr-white);\n  font-size: var(--size-3);\n  transition-duration: var(--transition-time);\n}\n.btn-toggle-projects-text {\n  flex: 1;\n  text-align: center;\n}\n.btn-toggle-projects:hover {\n  background: var(--clr-primary-dark);\n}\n.btn-new-task {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-block: var(--size-3);\n  padding-inline: var(--size-4);\n  border: 1px solid var(--clr-black);\n  color: var(--clr-black);\n  text-transform: uppercase;\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n  font-size: var(--size-3);\n}\n.btn-new-task:hover {\n  background: var(--clr-green-regular);\n  color: var(--clr-white);\n}\n.btn-tasklist {\n  padding: var(--size-1);\n  border-radius: 9999rem;\n}\n.btn-tasklist:hover {\n  transform: scale(1.25);\n}\n.btn-form {\n  padding-inline: var(--size-4);\n  padding-block: var(--size-2);\n  border-radius: var(--size-1);\n}\n.btn-project-delete {\n  border-radius: 9999rem;\n  padding: var(--size-1);\n  color: var(--clr-black);\n}\n.btn-project-delete:hover {\n  background: var(--clr-red-regular);\n  color: var(--clr-white);\n}\n.btn--red {\n  background: var(--clr-red-regular);\n  color: var(--clr-white);\n}\n.btn--red:hover {\n  background: var(--clr-red-dark);\n}\n.btn--orange {\n  background: var(--clr-orange-regular);\n  color: var(--clr-white);\n}\n.btn--orange:hover {\n  background: var(--clr-orange-dark);\n}\n.btn--green {\n  background: var(--clr-green-regular);\n  color: var(--clr-white);\n}\n.btn--green:hover {\n  background: var(--clr-green-dark);\n}\n\n.sidebar {\n  position: static;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  gap: var(--size-2);\n  background: var(--sidebar-bg-clr);\n  color: var(--clr-black);\n  height: 100%;\n  width: var(--size-72);\n  padding: var(--size-6);\n  transition-duration: 600ms;\n  z-index: 100;\n}\n@media only screen and (max-width: 63.9875em) {\n  .sidebar {\n    position: absolute;\n    transform: translateX(-100%);\n  }\n}\n.sidebar-hidden {\n  transform: translateX(0);\n}\n\n.projects-list {\n  display: flex;\n  flex-direction: column;\n  padding-top: var(--size-2);\n}\n.projects-item {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: var(--size-3);\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n  padding-inline: var(--size-3);\n  padding-block: var(--size-3);\n}\n.projects-item:hover {\n  box-shadow: inset 250px 0 0 0 var(--clr-primary-xlight);\n}\n\n.modal {\n  padding: 0;\n  width: min(76.8rem, 90vw);\n  background: var(--clr-white);\n  border: none;\n  box-shadow: var(--default-shadow);\n  border-radius: var(--size-1);\n}\n.modal:backdrop {\n  background: var(--clr-black);\n  opacity: 0.9;\n}\n.modal-header {\n  padding: var(--size-4);\n  background: vaR(--clr-primary);\n  font-weight: bold;\n  color: var(--clr-white);\n  font-size: var(--size-5);\n}\n.modal-form {\n  display: grid;\n  padding: var(--size-4);\n  gap: var(--size-3);\n  grid-template-areas: \"title\" \"desc\" \"prio\" \"project\" \"date\" \"buttons\";\n}\n@media only screen and (min-width: 64em) {\n  .modal-form {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-areas: \"title title\" \"desc desc\" \"prio project\" \"date date\" \"buttons buttons\";\n  }\n}\n.modal-form-item-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--size-3);\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.modal-button-wrapper {\n  grid-area: buttons;\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--size-2);\n}\n.modal-input {\n  padding: var(--size-2);\n  width: 100%;\n}\n.modal-label {\n  font-weight: var(--fnt-wt-thin);\n  text-transform: uppercase;\n  font-size: var(--size-3);\n}\n.modal-radio {\n  width: 0;\n  aspect-ratio: 1;\n  display: none;\n}\n.modal-radio-label {\n  width: max-content;\n  padding: var(--size-2);\n  border-radius: var(--size-1);\n}\n.modal-radio-wrapper {\n  display: flex;\n  gap: var(--size-1);\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.modal-task-title {\n  grid-area: title;\n}\n.modal-task-date {\n  grid-area: date;\n}\n.modal-task-project {\n  grid-area: project;\n}\n.modal-task-desc {\n  grid-area: desc;\n  padding: var(--size-2);\n}\n.modal-task-prio {\n  grid-area: prio;\n}\n.modal-project-title {\n  grid-area: title;\n}\n\nselect,\ninput[type=date] {\n  border: 1px solid var(--clr-neutral-300);\n}\n\n::placeholder {\n  color: var(--clr-neutral-400);\n}\n\n.warning {\n  margin: var(--size-4);\n  padding: var(--size-2);\n  outline: 2px dotted var(--clr-primary);\n  font-size: var(--size-3);\n  color: var(--clr-primary);\n  font-weight: var(--fnt-wt-thin);\n}\n\n.invalid {\n  outline: 2px solid var(--clr-primary);\n}\n\ndialog > p[data-label=form-warning]:empty {\n  display: none;\n}\n\ninput,\nselect {\n  border-radius: var(--size-1);\n}\n\ninput:has(:not(:placeholder-shown):not(:valid)) {\n  outline: 1px solid var(--clr-primary-light);\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.container-sm {\n  max-width: 64rem;\n}\n.container-md {\n  max-width: 76.8rem;\n}\n.container-lg {\n  max-width: 102.4rem;\n}\n.container-xl {\n  max-width: 128rem;\n}\n.container-2xl {\n  max-width: 153.6rem;\n}", "",{"version":3,"sources":["webpack://./src/sass-modules/base/_reset.scss","webpack://./src/styles.scss","webpack://./src/sass-modules/base/_base.scss","webpack://./src/sass-modules/base/_typography.scss","webpack://./src/sass-modules/base/_icons.scss","webpack://./src/sass-modules/layout/_header.scss","webpack://./src/sass-modules/layout/_main.scss","webpack://./src/sass-modules/abstracts/_responsive.scss","webpack://./src/sass-modules/layout/_footer.scss","webpack://./src/sass-modules/components/_buttons.scss","webpack://./src/sass-modules/components/_sidebar.scss","webpack://./src/sass-modules/components/_modal.scss","webpack://./src/sass-modules/base/_utility.scss"],"names":[],"mappings":"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","sourcesContent":["// ///////////////////////////////////////////////////////\n//\n// CSS Reset by elad v 1.7.2 with edits by Leon Lonsdale\n// https://github.com/elad2412/the-new-css-reset\n//\n// ///////////////////////////////////////////////////////\n\n// Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n// - The \"symbol *\" part is to solve Firefox SVG sprite bug\n\n*:where(:not(html, iframe, canvas, img, svg, video, dialog):not(svg *, symbol\n      *)) {\n  all: unset;\n  display: revert;\n}\n\n// Preferred box-sizing value\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n// Reapply the pointer cursor for anchor tags\na,\nbutton {\n  cursor: revert;\n}\n\n// Remove list styles (bullets/numbers)\nol,\nul,\nmenu {\n  list-style: none;\n}\n\n// For images to not be able to exceed their container\nimg {\n  max-width: 100%;\n}\n\n// removes spacing between cells in tables\ntable {\n  border-collapse: collapse;\n}\n\n// Safari - solving issue when using user-select:none on the <body> text input doesn't working\ninput,\ntextarea {\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\n// revert the 'white-space' property for textarea elements on Safari\ntextarea {\n  white-space: revert;\n}\n\n//  minimum style to allow to style meter element\nmeter {\n  -webkit-appearance: revert;\n  appearance: revert;\n}\n\n// reset default text opacity of input placeholder\n::placeholder {\n  color: unset;\n}\n\n// fix the feature of 'hidden' attribute.\n//   display:revert; revert to element instead of attribute\n:where([hidden]) {\n  display: none;\n}\n\n// revert for bug in Chromium browsers\n//    - fix for the content editable attribute will work properly.\n//    - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element\n:where([contenteditable]:not([contenteditable='false'])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  line-break: after-white-space;\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\n// apply back the draggable feature - exist only in Chromium and Safari\n:where([draggable='true']) {\n  -webkit-user-drag: element;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n*:where(:not(html, iframe, canvas, img, svg, video, dialog):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\na,\nbutton {\n  cursor: revert;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ninput,\ntextarea {\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\ntextarea {\n  white-space: revert;\n}\n\nmeter {\n  -webkit-appearance: revert;\n  appearance: revert;\n}\n\n::placeholder {\n  color: unset;\n}\n\n:where([hidden]) {\n  display: none;\n}\n\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  line-break: after-white-space;\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n:root {\n  --header-bg-clr: var(--clr-primary);\n  --footer-bg-clr: var(--clr-primary);\n  --sidebar-bg-clr: var(--clr-neutral-200);\n  --body-bg-clr: var(--clr-white);\n  --transition-time: 400ms;\n  --fnt-sz-default: var(--size-4);\n  --fnt-wt-default: 400;\n  --fnt-clr-default: var(--clr-black);\n  --clr-white: var(--clr-neutral-100);\n  --clr-black: var(--clr-neutral-800);\n  --default-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  font-size: 62.5%;\n  --fnt-fam-default: \"Roboto\", sans-serif;\n  --fnt-wt-thin: 300;\n  --fnt-wt-reg: 400;\n  --fnt-wt-bold: 700;\n  --fnt-wt-heavy: 900;\n  --clr-primary: hsl(350deg, 89%, 60%);\n  --clr-primary-light: hsl(351deg, 95%, 71%);\n  --clr-primary-dark: hsl(347deg, 77%, 50%);\n  --clr-primary-xlight: hsl(353deg, 96%, 90%);\n  --clr-green-regular: hsl(160deg, 84%, 39%);\n  --clr-green-light: hsl(158deg, 64%, 52%);\n  --clr-green-dark: hsl(161deg, 94%, 30%);\n  --clr-red-regular: hsl(350deg, 89%, 60%);\n  --clr-red-light: hsl(351deg, 95%, 71%);\n  --clr-red-dark: hsl(347deg, 77%, 50%);\n  --clr-orange-regular: hsl(25deg, 95%, 53%);\n  --clr-orange-dark: hsl(21deg, 90%, 48%);\n  --clr-orange-light: hsl(27deg, 96%, 61%);\n  --clr-white: var(--clr-neutral-100);\n  --clr-black: var(--clr-neutral-800);\n  --clr-neutral-50: hsl(0deg, 0%, 98%);\n  --clr-neutral-100: hsl(0deg, 0%, 96%);\n  --clr-neutral-200: hsl(0deg, 0%, 90%);\n  --clr-neutral-300: hsl(0deg, 0%, 83%);\n  --clr-neutral-400: hsl(0deg, 0%, 64%);\n  --clr-neutral-500: hsl(0deg, 0%, 45%);\n  --clr-neutral-600: hsl(0deg, 0%, 32%);\n  --clr-neutral-700: hsl(0deg, 0%, 25%);\n  --clr-neutral-800: hsl(0deg, 0%, 15%);\n  --clr-neutral-900: hsl(0deg, 0%, 9%);\n  --size-1: 0.4rem;\n  --size-2: 0.8rem;\n  --size-3: 1.2rem;\n  --size-4: 1.6rem;\n  --size-5: 2rem;\n  --size-6: 2.4rem;\n  --size-8: 3.2rem;\n  --size-52: 20.8rem;\n  --size-72: 28.8rem;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  background: var(--body-bg-clr);\n  min-height: 100vh;\n  font-family: var(--fnt-fam-default);\n  font-size: var(--fnt-sz-default);\n  font-weight: var(--fnt-wt-default);\n  color: var(--fnt-clr-default);\n}\n\n.brand {\n  font-size: var(--size-5);\n  font-weight: var(--fnt-wt-bold);\n  flex: 1;\n}\n\n.icon {\n  fill: currentColor;\n  transition-duration: var(--transition-time);\n}\n.icon:hover {\n  transform: scale(1.25);\n}\n.icon-6 {\n  width: var(--size-6);\n  aspect-ratio: 1;\n}\n.icon-5 {\n  width: var(--size-5);\n  aspect-ratio: 1;\n}\n.icon-4 {\n  width: var(--size-4);\n  aspect-ratio: 1;\n}\n.icon-3 {\n  width: var(--size-3);\n  aspect-ratio: 1;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--header-bg-clr);\n  color: var(--clr-white);\n  gap: 0.5rem;\n  padding-inline: var(--size-3);\n  padding-block: var(--size-2);\n}\n\nmain {\n  display: flex;\n  position: relative;\n}\n\n.tasks-container-main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n  padding: var(--size-6);\n  width: 100%;\n}\n.tasks-container-sub {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--size-3);\n  border-bottom: 1px solid var(--clr-black);\n  margin-bottom: var(--size-4);\n  padding-bottom: var(--size-2);\n  width: 100%;\n}\n.tasks-container-top-bar {\n  position: relative;\n}\n\n.filter-list {\n  position: absolute;\n  z-index: 90;\n  top: var(--size-8);\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n  background-color: var(--clr-neutral-50);\n  box-shadow: var(--default-shadow);\n  border-radius: var(--size-1);\n  padding: var(--size-4);\n  width: var(--size-52);\n}\n.filter-list-item {\n  display: flex;\n  align-items: center;\n  gap: var(--size-2);\n  padding: var(--size-1);\n  color: var(--clr-black);\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n}\n.filter-list-item:hover {\n  background: var(--clr-primary-xlight);\n}\n\n.tasks-wrapper {\n  width: 100%;\n}\n.tasks-heading {\n  font-weight: bold;\n  flex: 1;\n  font-size: var(--size-6);\n}\n.tasks-list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n}\n.tasks-notask-text {\n  text-align: center;\n  font-weight: var(--fnt-wt-thin);\n  font-size: var(--size-6);\n}\n.tasks-complete {\n  background: var(--clr-green-light);\n  color: var(--clr-white);\n}\n.tasks-list-item {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  grid-template-areas: \"check details\";\n  border-bottom: 1px solid #cccccc;\n  border-radius: var(--size-2);\n  overflow: hidden;\n  transition-duration: 600ms;\n}\n.tasks-list-item:hover {\n  box-shadow: inset -1000px 0 0 0 rgba(0, 0, 0, 0.03);\n}\n.tasks-list-item-checkbox {\n  grid-area: check;\n  margin-block: auto;\n  margin-inline: var(--size-4);\n  font: inherit;\n  color: currentColor;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 0.15em;\n  transform: translateY(-0.075em);\n  display: grid;\n  place-items: center;\n}\n.tasks-list-item-checkbox::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--clr-green-regular);\n}\n.tasks-list-item-checkbox:checked::before {\n  transform: scale(1);\n}\n.tasks-list-item-checkbox-complete {\n  border-color: var(--clr-green-regular);\n}\n.tasks-list-item-title {\n  font-size: var(--size-4);\n  grid-area: title;\n}\n.tasks-list-item-buttons-wrapper {\n  grid-area: buttons;\n  display: flex;\n  gap: var(--size-2);\n  justify-content: flex-start;\n}\n@media only screen and (min-width: 40em) {\n  .tasks-list-item-buttons-wrapper {\n    justify-content: flex-end;\n  }\n}\n.tasks-list-item-date {\n  grid-area: date;\n  display: flex;\n  gap: var(--size-2);\n  align-items: center;\n}\n.tasks-list-item-date--overdue {\n  color: var(--clr-red-regular);\n}\n.tasks-list-item-project {\n  grid-area: project;\n  display: flex;\n  gap: var(--size-2);\n  align-items: center;\n  text-transform: uppercase;\n}\n.tasks-list-item-description {\n  margin-top: var(--size-4);\n  font-size: var(--size-4);\n  font-weight: var(--fnt-wt-thin);\n}\n.tasks-list-item-complete {\n  text-decoration: line-through;\n  transition-duration: var(--transition-time);\n}\n.tasks-details {\n  grid-area: details;\n  padding: var(--size-4);\n}\n.tasks-summary {\n  display: grid;\n  grid-template-columns: 1fr max-content;\n  grid-template-rows: repeat(2, max-content);\n  grid-template-areas: \"title\" \"date\" \"project\" \"buttons\";\n  gap: var(--size-4);\n  font-weight: var(--fnt-wt-thin);\n  font-size: var(--size-3);\n  transition-duration: var(--transition-time);\n}\n@media only screen and (min-width: 40em) {\n  .tasks-summary {\n    grid-template-areas: \"title buttons\" \"date project\";\n    gap: var(--size-2);\n  }\n}\n\ndetails[open] > summary {\n  border-bottom: 1px solid #cccccc;\n  padding-bottom: var(--size-4);\n}\n\n.priority-high {\n  border-left: var(--size-2) solid var(--clr-red-regular);\n}\n.priority-medium {\n  border-left: var(--size-2) solid var(--clr-orange-regular);\n}\n.priority-low {\n  border-left: var(--size-2) solid var(--clr-green-regular);\n}\n\ninput[type=radio]:not(:checked) + label {\n  opacity: 0.3;\n}\n\ninput:has(:not(:placeholder-shown)):not(:valid) {\n  outline: 2px solid var(--clr-primary);\n}\n\nfooter {\n  padding: var(--size-4);\n  text-align: center;\n  background: var(--footer-bg-clr);\n  color: var(--clr-white);\n  font-size: var(--size-3);\n}\n\n.btn {\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.btn-burger {\n  padding-inline: var(--size-4);\n}\n@media only screen and (min-width: 64em) {\n  .btn-burger {\n    display: none;\n  }\n}\n.btn-icon-only {\n  display: grid;\n  place-items: center;\n}\n.btn-new-project {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: var(--size-1);\n  padding-block: var(--size-3);\n  padding-inline: var(--size-2);\n  width: 100%;\n  background: var(--clr-green-regular);\n  color: var(--clr-black);\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n  font-size: var(--size-3);\n}\n.btn-toggle-projects {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: var(--size-2);\n  padding: var(--size-3);\n  border-radius: var(--size-1);\n  background: var(--clr-primary);\n  color: var(--clr-white);\n  font-size: var(--size-3);\n  transition-duration: var(--transition-time);\n}\n.btn-toggle-projects-text {\n  flex: 1;\n  text-align: center;\n}\n.btn-toggle-projects:hover {\n  background: var(--clr-primary-dark);\n}\n.btn-new-task {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-block: var(--size-3);\n  padding-inline: var(--size-4);\n  border: 1px solid var(--clr-black);\n  color: var(--clr-black);\n  text-transform: uppercase;\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n  font-size: var(--size-3);\n}\n.btn-new-task:hover {\n  background: var(--clr-green-regular);\n  color: var(--clr-white);\n}\n.btn-tasklist {\n  padding: var(--size-1);\n  border-radius: 9999rem;\n}\n.btn-tasklist:hover {\n  transform: scale(1.25);\n}\n.btn-form {\n  padding-inline: var(--size-4);\n  padding-block: var(--size-2);\n  border-radius: var(--size-1);\n}\n.btn-project-delete {\n  border-radius: 9999rem;\n  padding: var(--size-1);\n  color: var(--clr-black);\n}\n.btn-project-delete:hover {\n  background: var(--clr-red-regular);\n  color: var(--clr-white);\n}\n.btn--red {\n  background: var(--clr-red-regular);\n  color: var(--clr-white);\n}\n.btn--red:hover {\n  background: var(--clr-red-dark);\n}\n.btn--orange {\n  background: var(--clr-orange-regular);\n  color: var(--clr-white);\n}\n.btn--orange:hover {\n  background: var(--clr-orange-dark);\n}\n.btn--green {\n  background: var(--clr-green-regular);\n  color: var(--clr-white);\n}\n.btn--green:hover {\n  background: var(--clr-green-dark);\n}\n\n.sidebar {\n  position: static;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  gap: var(--size-2);\n  background: var(--sidebar-bg-clr);\n  color: var(--clr-black);\n  height: 100%;\n  width: var(--size-72);\n  padding: var(--size-6);\n  transition-duration: 600ms;\n  z-index: 100;\n}\n@media only screen and (max-width: 63.9875em) {\n  .sidebar {\n    position: absolute;\n    transform: translateX(-100%);\n  }\n}\n.sidebar-hidden {\n  transform: translateX(0);\n}\n\n.projects-list {\n  display: flex;\n  flex-direction: column;\n  padding-top: var(--size-2);\n}\n.projects-item {\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: var(--size-3);\n  border-radius: var(--size-1);\n  transition-duration: var(--transition-time);\n  padding-inline: var(--size-3);\n  padding-block: var(--size-3);\n}\n.projects-item:hover {\n  box-shadow: inset 250px 0 0 0 var(--clr-primary-xlight);\n}\n\n.modal {\n  padding: 0;\n  width: min(76.8rem, 90vw);\n  background: var(--clr-white);\n  border: none;\n  box-shadow: var(--default-shadow);\n  border-radius: var(--size-1);\n}\n.modal:backdrop {\n  background: var(--clr-black);\n  opacity: 0.9;\n}\n.modal-header {\n  padding: var(--size-4);\n  background: vaR(--clr-primary);\n  font-weight: bold;\n  color: var(--clr-white);\n  font-size: var(--size-5);\n}\n.modal-form {\n  display: grid;\n  padding: var(--size-4);\n  gap: var(--size-3);\n  grid-template-areas: \"title\" \"desc\" \"prio\" \"project\" \"date\" \"buttons\";\n}\n@media only screen and (min-width: 64em) {\n  .modal-form {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-areas: \"title title\" \"desc desc\" \"prio project\" \"date date\" \"buttons buttons\";\n  }\n}\n.modal-form-item-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: var(--size-3);\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.modal-button-wrapper {\n  grid-area: buttons;\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--size-2);\n}\n.modal-input {\n  padding: var(--size-2);\n  width: 100%;\n}\n.modal-label {\n  font-weight: var(--fnt-wt-thin);\n  text-transform: uppercase;\n  font-size: var(--size-3);\n}\n.modal-radio {\n  width: 0;\n  aspect-ratio: 1;\n  display: none;\n}\n.modal-radio-label {\n  width: max-content;\n  padding: var(--size-2);\n  border-radius: var(--size-1);\n}\n.modal-radio-wrapper {\n  display: flex;\n  gap: var(--size-1);\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.modal-task-title {\n  grid-area: title;\n}\n.modal-task-date {\n  grid-area: date;\n}\n.modal-task-project {\n  grid-area: project;\n}\n.modal-task-desc {\n  grid-area: desc;\n  padding: var(--size-2);\n}\n.modal-task-prio {\n  grid-area: prio;\n}\n.modal-project-title {\n  grid-area: title;\n}\n\nselect,\ninput[type=date] {\n  border: 1px solid var(--clr-neutral-300);\n}\n\n::placeholder {\n  color: var(--clr-neutral-400);\n}\n\n.warning {\n  margin: var(--size-4);\n  padding: var(--size-2);\n  outline: 2px dotted var(--clr-primary);\n  font-size: var(--size-3);\n  color: var(--clr-primary);\n  font-weight: var(--fnt-wt-thin);\n}\n\n.invalid {\n  outline: 2px solid var(--clr-primary);\n}\n\ndialog > p[data-label=form-warning]:empty {\n  display: none;\n}\n\ninput,\nselect {\n  border-radius: var(--size-1);\n}\n\ninput:has(:not(:placeholder-shown):not(:valid)) {\n  outline: 1px solid var(--clr-primary-light);\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.hidden {\n  display: none;\n}\n\n.container-sm {\n  max-width: 64rem;\n}\n.container-md {\n  max-width: 76.8rem;\n}\n.container-lg {\n  max-width: 102.4rem;\n}\n.container-xl {\n  max-width: 128rem;\n}\n.container-2xl {\n  max-width: 153.6rem;\n}","@use '../abstracts/' as a;\n\n:root {\n  // control\n  --header-bg-clr: var(--clr-primary);\n  --footer-bg-clr: var(--clr-primary);\n  --sidebar-bg-clr: var(--clr-neutral-200);\n  --body-bg-clr: var(--clr-white);\n  --transition-time: 400ms;\n  --fnt-sz-default: var(--size-4);\n  --fnt-wt-default: 400;\n  --fnt-clr-default: var(--clr-black);\n  --clr-white: var(--clr-neutral-100);\n  --clr-black: var(--clr-neutral-800);\n  --default-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n\n  // Set 1 rem = 10px\n  font-size: 62.5%;\n\n  --fnt-fam-default: 'Roboto', sans-serif;\n  --fnt-wt-thin: 300;\n  --fnt-wt-reg: 400;\n  --fnt-wt-bold: 700;\n  --fnt-wt-heavy: 900;\n\n  // Colours\n  --clr-primary: #{a.$rose-500};\n  --clr-primary-light: #{a.$rose-400};\n  --clr-primary-dark: #{a.$rose-600};\n  --clr-primary-xlight: #{a.$rose-200};\n  --clr-green-regular: #{a.$emerald-500};\n  --clr-green-light: #{a.$emerald-400};\n  --clr-green-dark: #{a.$emerald-600};\n  --clr-red-regular: #{a.$rose-500};\n  --clr-red-light: #{a.$rose-400};\n  --clr-red-dark: #{a.$rose-600};\n  --clr-orange-regular: #{a.$orange-500};\n  --clr-orange-dark: #{a.$orange-600};\n  --clr-orange-light: #{a.$orange-400};\n  --clr-white: var(--clr-neutral-100);\n  --clr-black: var(--clr-neutral-800);\n  --clr-neutral-50: #{a.$neutral-50};\n  --clr-neutral-100: #{a.$neutral-100};\n  --clr-neutral-200: #{a.$neutral-200};\n  --clr-neutral-300: #{a.$neutral-300};\n  --clr-neutral-400: #{a.$neutral-400};\n  --clr-neutral-500: #{a.$neutral-500};\n  --clr-neutral-600: #{a.$neutral-600};\n  --clr-neutral-700: #{a.$neutral-700};\n  --clr-neutral-800: #{a.$neutral-800};\n  --clr-neutral-900: #{a.$neutral-900};\n\n  // Sizing\n  --size-1: #{a.$size-1};\n  --size-2: #{a.$size-2};\n  --size-3: #{a.$size-3};\n  --size-4: #{a.$size-4};\n  --size-5: #{a.$size-5};\n  --size-6: #{a.$size-6};\n  --size-8: #{a.$size-8};\n  --size-52: #{a.$size-52};\n  --size-72: #{a.$size-72};\n}\n\nbody {\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  background: var(--body-bg-clr);\n  min-height: 100vh;\n  font-family: var(--fnt-fam-default);\n  font-size: var(--fnt-sz-default);\n  font-weight: var(--fnt-wt-default);\n  color: var(--fnt-clr-default);\n}\n","@use '../abstracts/' as a;\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n.brand {\n  font-size: var(--size-5);\n  font-weight: var(--fnt-wt-bold);\n  flex: 1;\n}\n",".icon {\n  fill: currentColor;\n  transition-duration: var(--transition-time);\n  &:hover {\n    transform: scale(1.25);\n  }\n  &-6 {\n    width: var(--size-6);\n    aspect-ratio: 1;\n  }\n  &-5 {\n    width: var(--size-5);\n    aspect-ratio: 1;\n  }\n  &-4 {\n    width: var(--size-4);\n    aspect-ratio: 1;\n  }\n  &-3 {\n    width: var(--size-3);\n    aspect-ratio: 1;\n  }\n}\n","@use '../abstracts/' as a;\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--header-bg-clr);\n  color: var(--clr-white);\n  gap: 0.5rem;\n  padding-inline: var(--size-3);\n  padding-block: var(--size-2);\n}\n","@use '../abstracts/' as a;\n\nmain {\n  display: flex;\n  position: relative;\n}\n\n.tasks-container {\n  &-main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-inline: auto;\n    padding: var(--size-6);\n    width: 100%;\n  }\n  &-sub {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--size-3);\n    border-bottom: 1px solid var(--clr-black);\n    margin-bottom: var(--size-4);\n    padding-bottom: var(--size-2);\n    width: 100%;\n  }\n  &-top-bar {\n    position: relative;\n  }\n}\n\n.filter-list {\n  position: absolute;\n  z-index: 90;\n  top: var(--size-8);\n  display: flex;\n  flex-direction: column;\n  gap: var(--size-2);\n  background-color: var(--clr-neutral-50);\n  box-shadow: var(--default-shadow);\n  border-radius: var(--size-1);\n  padding: var(--size-4);\n  width: var(--size-52);\n  &-item {\n    display: flex;\n    align-items: center;\n    gap: var(--size-2);\n    padding: var(--size-1);\n    color: var(--clr-black);\n    border-radius: var(--size-1);\n    transition-duration: var(--transition-time);\n\n    &:hover {\n      background: var(--clr-primary-xlight);\n    }\n  }\n}\n\n.tasks {\n  &-wrapper {\n    width: 100%;\n  }\n  &-heading {\n    font-weight: bold;\n    flex: 1;\n    font-size: var(--size-6);\n  }\n  &-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: var(--size-2);\n  }\n  &-notask-text {\n    text-align: center;\n    font-weight: var(--fnt-wt-thin);\n    font-size: var(--size-6);\n  }\n  &-complete {\n    background: var(--clr-green-light);\n    color: var(--clr-white);\n  }\n  &-list-item {\n    display: grid;\n    grid-template-columns: max-content 1fr;\n    grid-template-areas: 'check details';\n    border-bottom: 1px solid #cccccc;\n    border-radius: var(--size-2);\n    overflow: hidden;\n    transition-duration: 600ms;\n    &:hover {\n      box-shadow: inset -1000px 0 0 0 rgba(0, 0, 0, 0.03);\n    }\n\n    &-checkbox {\n      grid-area: check;\n      margin-block: auto;\n      margin-inline: var(--size-4);\n      font: inherit;\n      color: currentColor;\n      width: 1.15em;\n      height: 1.15em;\n      border: 0.15em solid currentColor;\n      border-radius: 0.15em;\n      transform: translateY(-0.075em);\n      display: grid;\n      place-items: center;\n      &::before {\n        content: '';\n        width: 0.65em;\n        height: 0.65em;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        box-shadow: inset 1em 1em var(--clr-green-regular);\n      }\n      &:checked::before {\n        transform: scale(1);\n      }\n      &-complete {\n        border-color: var(--clr-green-regular);\n      }\n    }\n    &-title {\n      font-size: var(--size-4);\n      grid-area: title;\n    }\n    &-buttons-wrapper {\n      grid-area: buttons;\n      display: flex;\n      gap: var(--size-2);\n      justify-content: flex-start;\n\n      @include a.breakpoint(sm, min) {\n        justify-content: flex-end;\n      }\n    }\n    &-date {\n      grid-area: date;\n      display: flex;\n      gap: var(--size-2);\n      align-items: center;\n      &--overdue {\n        color: var(--clr-red-regular);\n      }\n    }\n    &-project {\n      grid-area: project;\n      display: flex;\n      gap: var(--size-2);\n      align-items: center;\n      text-transform: uppercase;\n    }\n    &-description {\n      margin-top: var(--size-4);\n      font-size: var(--size-4);\n      font-weight: var(--fnt-wt-thin);\n    }\n\n    &-complete {\n      text-decoration: line-through;\n      transition-duration: var(--transition-time);\n    }\n  }\n  &-details {\n    grid-area: details;\n\n    padding: var(--size-4);\n  }\n  &-summary {\n    display: grid;\n    grid-template-columns: 1fr max-content;\n    grid-template-rows: repeat(2, max-content);\n    grid-template-areas: 'title' 'date' 'project' 'buttons';\n    gap: var(--size-4);\n    font-weight: var(--fnt-wt-thin);\n    font-size: var(--size-3);\n    transition-duration: var(--transition-time);\n\n    @include a.breakpoint(sm, min) {\n      grid-template-areas: 'title buttons' 'date project';\n      gap: var(--size-2);\n    }\n  }\n}\n\ndetails[open] > summary {\n  border-bottom: 1px solid #cccccc;\n  padding-bottom: var(--size-4);\n}\n.priority {\n  &-high {\n    border-left: var(--size-2) solid var(--clr-red-regular);\n  }\n  &-medium {\n    border-left: var(--size-2) solid var(--clr-orange-regular);\n  }\n  &-low {\n    border-left: var(--size-2) solid var(--clr-green-regular);\n  }\n}\n\n// /* label:has(input[type='radio']:not(:checked)) {\n//   opacity: 0.3;\n// } */\n\ninput[type='radio']:not(:checked) + label {\n  opacity: 0.3;\n}\n\ninput:has(:not(:placeholder-shown)):not(:valid) {\n  outline: 2px solid var(--clr-primary);\n}\n","// ///////////////////////////////////\n// Responsive.scss\n// Media Query & Clamp Mixins & Functions\n// version 1.1  01/07/2022\n// @LeonLonsdale\n// ///////////////////////////////////\n\n@use 'sass:math';\n\n// Edit these viewport breakpoints to your needs (in pixels).\n// do not include units - this will break math\n\n$xs: 375;\n$sm: 640;\n$md: 768;\n$lg: 1024;\n$xl: 1200;\n$xxl: 1201;\n\n// Media Query mixin utilises the ‘em’ unit and clamp utilises ‘rem’\n\n@function convertPX($px, $type) {\n  @if $type==em {\n    $toem: math.div($px, 16);\n    @return $toem * 1em;\n  } @else if $type==rem {\n    $torem: math.div($px, 10);\n    @return $torem;\n  }\n}\n\n// Perform some pixel conversions and map results\n\n$breakpoints: (\n  'xs': (\n    'min': convertPX($xs, em),\n    'max': convertPX($xs - 0.2, em),\n    'range': convertPX($sm - 0.2, em),\n    'rem': convertPX($xs, rem),\n  ),\n  'sm': (\n    'min': convertPX($sm, em),\n    'max': convertPX($sm - 0.2, em),\n    'range': convertPX($md - 0.2, em),\n    'rem': convertPX($sm, rem),\n  ),\n  'md': (\n    'min': convertPX($md, em),\n    'max': convertPX($md - 0.2, em),\n    'range': convertPX($lg - 0.2, em),\n    'rem': convertPX($md, rem),\n  ),\n  'lg': (\n    'min': convertPX($lg, em),\n    'max': convertPX($lg - 0.2, em),\n    'range': convertPX($xl - 0.2, em),\n    'rem': convertPX($lg, rem),\n  ),\n  'xl': (\n    'min': convertPX($xl, em),\n    'max': convertPX($xl - 0.2, em),\n    'range': convertPX($xxl - 0.2, em),\n    'rem': convertPX($xl, rem),\n  ),\n  'xxl': (\n    'min': convertPX($xxl, em),\n    'max': convertPX($xxl - 0.2, em),\n    'rem': convertPX($xxl, rem),\n  ),\n);\n\n// Insert a media query, either custom or from breakpoint map\n\n@mixin breakpoint($breakpoint, $type: 'min') {\n  // check map for breakpoint key\n  @if map-has-key($breakpoints, $breakpoint) {\n    $breakpoint-val: map-get($breakpoints, $breakpoint);\n    $breakpoint-min: map-get($breakpoint-val, 'min');\n    $breakpoint-max: map-get($breakpoint-val, 'max');\n    $breakpoint-range: map-get($breakpoint-val, 'range');\n\n    // obtain correct result and insert media query\n\n    @if $type== 'min' {\n      @media only screen and (min-width: $breakpoint-min) {\n        @content;\n      }\n    } @else if $type== 'max' {\n      @media only screen and (max-width: $breakpoint-max) {\n        @content;\n      }\n    } @else {\n      @if $breakpoint== 'xxl' {\n        @media only screen and (min-width: $breakpoint-min) {\n          @content;\n        }\n      } @else {\n        @media only screen and (min-width: $breakpoint-min) and (max-width: $breakpoint-range) {\n          @content;\n        }\n      }\n    }\n  }\n\n  // Insert media query based on custom breakpoint (not mapped)\n\n  @else {\n    @if $type== 'min' {\n      @media only screen and (min-width: convertPX($breakpoint, em)) {\n        @content;\n      }\n    } @else {\n      @media only screen and (max-width: convertPX($breakpoint, em)) {\n        @content;\n      }\n    }\n  }\n}\n\n// Insert a clamp for any css property that accepts it\n\n@mixin getclamp($property, $minsize, $maxsize, $minwidth: xs, $maxwidth: xxl) {\n  @if map-has-key($breakpoints, $minwidth) {\n    @if map-has-key($breakpoints, $maxwidth) {\n      $minwidth-values: map-get($breakpoints, $minwidth);\n      $maxwidth-values: map-get($breakpoints, $maxwidth);\n      $minw: map-get($minwidth-values, rem);\n      $maxw: map-get($maxwidth-values, rem);\n      // imagine items plotted on line graph and calculatae slope\n      $slope: math.div(($maxsize - $minsize), ($maxw - $minw));\n      // calculate where line intersects Y axis\n      $yint: (0 - $minw) * $slope + $minsize;\n      // output result\n      #{$property}: clamp(\n        $minsize * 1rem,\n        ($yint * 1rem) + ($slope * 100vw),\n        $maxsize * 1rem\n      );\n    } @else {\n      $minwidth-values: map-get($breakpoints, $minwidth);\n      $minw: map-get($minwidth-values, rem);\n      $maxw: convertPX($maxwidth, rem);\n\n      $slope: math.div(($maxsize - $minsize), ($maxw - $minw));\n\n      $yint: (0 - $minw) * $slope + $minsize;\n\n      #{$property}: clamp(\n        $minsize * 1rem,\n        ($yint * 1rem) + ($slope * 100vw),\n        $maxsize * 1rem\n      );\n    }\n  } @else {\n    $minw: convertPX($minwidth, rem);\n    $maxw: convertPX($maxwidth, rem);\n\n    $slope: math.div(($maxsize - $minsize), ($maxw - $minw));\n\n    $yint: (0 - $minw) * $slope + $minsize;\n\n    #{$property}: clamp(\n      $minsize * 1rem,\n      ($yint * 1rem) + ($slope * 100vw),\n      $maxsize * 1rem\n    );\n  }\n}\n\n// calculate and output a clamp inline\n\n@function insertClamp($minsize, $maxsize, $minwidth, $maxwidth) {\n  @if map-has-key($breakpoints, $minwidth) {\n    @if map-has-key($breakpoints, $maxwidth) {\n      $minwidth-values: map-get($breakpoints, $minwidth);\n      $maxwidth-values: map-get($breakpoints, $maxwidth);\n      $minw: map-get($minwidth-values, rem);\n      $maxw: map-get($maxwidth-values, rem);\n\n      $slope: math.div(($maxsize - $minsize), ($maxw - $minw));\n\n      $yint: (0 - $minw) * $slope + $minsize;\n\n      // declare additional variables so that output is more readable\n      $clampmin: $minsize * 1rem;\n      $clampgrow1: $yint * 1rem;\n      $clampgrow2: $slope * 100vw;\n      $clampmax: $maxsize * 1rem;\n\n      @return clamp(\n        #{$clampmin},\n        #{$clampgrow1} + #{$clampgrow2},\n        #{$clampmax}\n      );\n    } @else {\n      $minwidth-values: map-get($breakpoints, $minwidth);\n      $minw: map-get($minwidth-values, rem);\n      $maxw: convertPX($maxwidth, rem);\n\n      $slope: math.div(($maxsize - $minsize), ($maxw - $minw));\n\n      $yint: (0 - $minw) * $slope + $minsize;\n\n      $clampmin: $minsize * 1rem;\n      $clampgrow1: $yint * 1rem;\n      $clampgrow2: $slope * 100vw;\n      $clampmax: $maxsize * 1rem;\n\n      @return clamp(\n        #{$clampmin},\n        #{$clampgrow1} + #{$clampgrow2},\n        #{$clampmax}\n      );\n    }\n  } @else {\n    $minw: convertPX($minwidth, rem);\n    $maxw: convertPX($maxwidth, rem);\n\n    $slope: math.div(($maxsize - $minsize), ($maxw - $minw));\n\n    $yint: (0 - $minw) * $slope + $minsize;\n\n    $clampmin: $minsize * 1rem;\n    $clampgrow1: $yint * 1rem;\n    $clampgrow2: $slope * 100vw;\n    $clampmax: $maxsize * 1rem;\n\n    @return clamp(#{$clampmin}, #{$clampgrow1} + #{$clampgrow2}, #{$clampmax});\n  }\n}\n","@use '../abstracts/' as a;\n\nfooter {\n  padding: var(--size-4);\n  text-align: center;\n  background: var(--footer-bg-clr);\n  color: var(--clr-white);\n  font-size: var(--size-3);\n}\n","@use '../abstracts/' as a;\n\n.btn {\n  cursor: pointer;\n  text-transform: uppercase;\n  &-burger {\n    padding-inline: var(--size-4);\n\n    @include a.breakpoint(lg, min) {\n      display: none;\n    }\n  }\n  &-icon-only {\n    display: grid;\n    place-items: center;\n  }\n  &-new-project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: var(--size-1);\n    padding-block: var(--size-3);\n    padding-inline: var(--size-2);\n    width: 100%;\n    background: var(--clr-green-regular);\n    color: var(--clr-black);\n    border-radius: var(--size-1);\n    transition-duration: var(--transition-time);\n    font-size: var(--size-3);\n  }\n  &-toggle-projects {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: var(--size-2);\n    padding: var(--size-3);\n    border-radius: var(--size-1);\n    background: var(--clr-primary);\n    color: var(--clr-white);\n    font-size: var(--size-3);\n    transition-duration: var(--transition-time);\n    &-text {\n      flex: 1;\n      text-align: center;\n    }\n    &:hover {\n      background: var(--clr-primary-dark);\n    }\n  }\n  &-new-task {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-block: var(--size-3);\n    padding-inline: var(--size-4);\n    border: 1px solid var(--clr-black);\n    color: var(--clr-black);\n    text-transform: uppercase;\n    border-radius: var(--size-1);\n    transition-duration: var(--transition-time);\n    font-size: var(--size-3);\n    &:hover {\n      background: var(--clr-green-regular);\n      color: var(--clr-white);\n    }\n  }\n  &-tasklist {\n    padding: var(--size-1);\n    border-radius: 9999rem;\n    &:hover {\n      transform: scale(1.25);\n    }\n  }\n  &-form {\n    padding-inline: var(--size-4);\n    padding-block: var(--size-2);\n    border-radius: var(--size-1);\n  }\n  &-project-delete {\n    border-radius: 9999rem;\n    padding: var(--size-1);\n    color: var(--clr-black);\n    &:hover {\n      background: var(--clr-red-regular);\n      color: var(--clr-white);\n    }\n  }\n  &--red {\n    background: var(--clr-red-regular);\n    color: var(--clr-white);\n    &:hover {\n      background: var(--clr-red-dark);\n    }\n  }\n  &--orange {\n    background: var(--clr-orange-regular);\n    color: var(--clr-white);\n    &:hover {\n      background: var(--clr-orange-dark);\n    }\n  }\n  &--green {\n    background: var(--clr-green-regular);\n    color: var(--clr-white);\n    &:hover {\n      background: var(--clr-green-dark);\n    }\n  }\n}\n","@use '../abstracts/' as a;\n.sidebar {\n  position: static;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  gap: var(--size-2);\n  background: var(--sidebar-bg-clr);\n  color: var(--clr-black);\n  height: 100%;\n  width: var(--size-72);\n  padding: var(--size-6);\n\n  transition-duration: 600ms;\n  z-index: 100;\n\n  @include a.breakpoint(lg, max) {\n    position: absolute;\n    transform: translateX(-100%);\n  }\n  &-hidden {\n    transform: translateX(0);\n  }\n}\n\n.projects {\n  &-list {\n    display: flex;\n    flex-direction: column;\n    padding-top: var(--size-2);\n  }\n  &-item {\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: var(--size-3);\n    border-radius: var(--size-1);\n    transition-duration: var(--transition-time);\n    padding-inline: var(--size-3);\n    padding-block: var(--size-3);\n\n    &:hover {\n      box-shadow: inset 250px 0 0 0 var(--clr-primary-xlight);\n    }\n  }\n}\n","@use '../abstracts/' as a;\n\n.modal {\n  padding: 0;\n  width: min(76.8rem, 90vw);\n  background: var(--clr-white);\n  border: none;\n  box-shadow: var(--default-shadow);\n  border-radius: var(--size-1);\n  &:backdrop {\n    background: var(--clr-black);\n    opacity: 0.9;\n  }\n  &-header {\n    padding: var(--size-4);\n    background: vaR(--clr-primary);\n    font-weight: bold;\n    color: var(--clr-white);\n    font-size: var(--size-5);\n  }\n  &-form {\n    display: grid;\n    padding: var(--size-4);\n    gap: var(--size-3);\n\n    grid-template-areas: 'title' 'desc' 'prio' 'project' 'date' 'buttons';\n\n    @include a.breakpoint(lg, min) {\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-areas: 'title title' 'desc desc' 'prio project' 'date date' 'buttons buttons';\n    }\n\n    &-item-wrapper {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      gap: var(--size-3);\n      align-items: flex-start;\n      flex-wrap: wrap;\n    }\n  }\n  &-button-wrapper {\n    grid-area: buttons;\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--size-2);\n  }\n  &-input {\n    padding: var(--size-2);\n    width: 100%;\n  }\n  &-label {\n    font-weight: var(--fnt-wt-thin);\n    text-transform: uppercase;\n    font-size: var(--size-3);\n  }\n  &-radio {\n    width: 0;\n    aspect-ratio: 1;\n    display: none;\n    &-label {\n      width: max-content;\n      padding: var(--size-2);\n      border-radius: var(--size-1);\n    }\n    &-wrapper {\n      display: flex;\n      gap: var(--size-1);\n      justify-content: flex-start;\n      align-items: center;\n      flex-wrap: wrap;\n    }\n  }\n  &-task {\n    &-title {\n      grid-area: title;\n    }\n    &-date {\n      grid-area: date;\n    }\n    &-project {\n      grid-area: project;\n    }\n    &-desc {\n      grid-area: desc;\n      padding: var(--size-2);\n    }\n    &-prio {\n      grid-area: prio;\n    }\n  }\n  &-project {\n    &-title {\n      grid-area: title;\n    }\n  }\n}\nselect,\ninput[type='date'] {\n  border: 1px solid var(--clr-neutral-300);\n}\n::placeholder {\n  color: var(--clr-neutral-400);\n}\n\n.warning {\n  margin: var(--size-4);\n  padding: var(--size-2);\n  outline: 2px dotted var(--clr-primary);\n  font-size: var(--size-3);\n  color: var(--clr-primary);\n  font-weight: var(--fnt-wt-thin);\n}\n.invalid {\n  outline: 2px solid var(--clr-primary);\n}\n\ndialog > p[data-label='form-warning']:empty {\n  display: none;\n}\n\n// form:invalid #submit {\n//   opacity: 0.3;\n//   pointer-events: none;\n// }\ninput,\nselect {\n  border-radius: var(--size-1);\n}\n\n// input:not(:placeholder-shown):not(:valid) {\n//   outline: 1px solid var(--clr-primary-light);\n// }\n\n// input:not(:placeholder-shown):not(:valid) {\n//   outline: 1px solid var(--clr-primary-light);\n// }\n\ninput:has(:not(:placeholder-shown):not(:valid)) {\n  outline: 1px solid var(--clr-primary-light);\n}\n",".visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.hidden {\n  display: none;\n}\n\n.container {\n  &-sm {\n    max-width: 64rem;\n  }\n  &-md {\n    max-width: 76.8rem;\n  }\n  &-lg {\n    max-width: 102.4rem;\n  }\n  &-xl {\n    max-width: 128rem;\n  }\n  &-2xl {\n    max-width: 153.6rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model)
/* harmony export */ });
'use: strict';

// ######################[ MODEL ]####################

class Model {
	constructor() {
		this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
		this.projects = JSON.parse(localStorage.getItem('projects')) || [
			{ id: 1, name: 'uncategorised' },
		];
	}

	// eslint-disable-next-line no-underscore-dangle
	get _projects() {
		return this.projects;
	}

	getTaskToEdit(id) {
		const edittask = this.tasks.filter((task) => task.id === id);
		return edittask;
	}

	static compare = (a, b) => {
		if (a.complete > b.complete) return 1;
		if (a.complete < b.complete) return -1;
		return 0;
	};

	filterTaskList(filter) {
		let tasks;
		if (filter === 'all') {
			tasks = this.tasks;
		} else if (filter === 'today') {
			const today = new Date().toDateString();
			tasks = this.tasks.filter(
				(task) => new Date(task.duedate).toDateString() === today
			);
		} else if (filter === 'upcoming') {
			const today = new Date().toDateString();
			tasks = this.tasks.filter(
				(task) => new Date(task.duedate).toDateString() > today
			);
		} else if (filter === 'overdue') {
			const today = new Date().toDateString();
			tasks = this.tasks.filter(
				(task) =>
					today > new Date(task.duedate).toDateString() && !task.complete
			);
		} else if (filter === 'High' || filter === 'Medium' || filter === 'Low') {
			tasks = this.tasks.filter((task) => task.priority === filter);
		} else {
			tasks = this.tasks.filter((task) => task.project === filter);
		}
		tasks.sort(this.compare);
		this.onTaskChange(tasks);
	}

	eventOnTaskChange(handler) {
		this.onTaskChange = handler;
	}

	eventOnProjectChange(handler) {
		this.onProjectChange = handler;
	}

	commitTaskChange(tasks) {
		this.onTaskChange(tasks);
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	commitProjectChange(projects) {
		this.onProjectChange(projects);
		localStorage.setItem('projects', JSON.stringify(projects));
	}

	updateLists(details, type) {
		if (type === 'task') {
			this.addTask(details);
		} else if (type === 'project') {
			this.addProject(details);
		} else if (type === 'edit') {
			this.editTask(details);
		}
	}

	addTask(newTask) {
		const task = {
			id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
			task: newTask.title,
			description: newTask.description,
			duedate: newTask.date,
			priority: newTask.priority,
			project: newTask.project,
			complete: false,
		};
		this.tasks.push(task);
		this.commitTaskChange(this.tasks);
	}

	editTask(editedTask) {
		this.tasks = this.tasks.map((task) =>
			task.id === editedTask.id
				? {
					id: task.id,
					task: editedTask.title,
					description: editedTask.description,
					duedate: editedTask.date,
					priority: editedTask.priority,
					project: editedTask.project,
					complete: task.complete,
				}
				: task
		);
		this.commitTaskChange(this.tasks);
	}

	deleteTask(id) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
		this.commitTaskChange(this.tasks);
	}

	completeTask(id) {
		this.tasks = this.tasks.map((task) =>
			task.id === id
				? {
					id: task.id,
					task: task.task,
					description: task.description,
					duedate: task.duedate,
					priority: task.priority,
					project: task.project,
					complete: !task.complete,
				}
				: task
		);
		this.tasks.sort(this.compare);
		this.commitTaskChange(this.tasks);
	}

	addProject(newProject) {
		const project = {
			id:
				this.projects.length > 0
					? this.projects[this.projects.length - 1].id + 1
					: 1,
			name: newProject,
		};
		this.projects.push(project);
		this.commitProjectChange(this.projects);
	}

	deleteProject(id) {
		const [toDelete] = this.projects.filter((project) => project.id === id);
		this.tasks = this.tasks.map((task) =>
			task.project === toDelete.name
				? {
					id: task.id,
					task: task.task,
					description: task.description,
					duedate: task.duedate,
					priority: task.priority,
					project: 'uncategorised',
					complete: task.complete,
				}
				: task
		);
		this.projects = this.projects.filter((project) => project.id !== id);
		this.commitTaskChange(this.tasks);
		this.commitProjectChange(this.projects);
		this.filterTaskList('all');
	}
}

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _assets_sprite_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sprite.svg */ "./src/assets/sprite.svg");
'use: strict';



// ######################[ VIEW ]####################

class View {
	static createEle(...args) {
		const [ele, ...styles] = args;
		const element = document.createElement(ele);
		styles.forEach((style) => element.classList.add(style));
		return element;
	}

	static createSVG(...args) {
		const [icon, ...styles] = args;
		const w3ns = 'http://www.w3.org/2000/svg';
		const svg = document.createElementNS(w3ns, 'svg');
		const use = document.createElementNS(w3ns, 'use');
		use.setAttribute('href', `${_assets_sprite_svg__WEBPACK_IMPORTED_MODULE_0__}#icon-${icon}`);
		styles.forEach((style) => svg.classList.add(style));
		svg.append(use);
		return svg;
	}

	static findEle(selector) {
		const element = document.querySelector(selector);
		return element;
	}

	static findEles(selector) {
		const element = document.querySelectorAll(selector);
		return element;
	}

	static capitalise(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	static clear = (target) => {
		while (target.firstElementChild) target.firstElementChild.remove();
	};

	constructor() {
		this.header = View.findEle('header');
		this.navContainer = View.findEle('[data-label="nav-container"]');
		this.sidebar = View.findEle('[data-label="nav-list"]');
		this.burgerBtn = View.findEle('[data-label="toggle-navigation"]');

		// ########## [ NEW BUTTONS ]
		this.newProjectBtn = View.findEle('[data-label="add-project-btn"]');
		this.newTaskBtn = View.findEle('[data-label="add-task-btn"]');

		// ########## [ TASK LIST ]
		this.labelTaskListHeading = View.findEle('[data-label="task-list-title"]');
		this.taskList = View.findEle('[data-label="task-list"]');
		this.filterBtn = View.findEle('[data-label="filter-button"]');
		this.filterList = View.findEle('[data-label="filter-list"]');

		// ########## [ PROJECT LIST ]
		this.projectBtn = View.findEle('[data-label="projects-button"]');
		this.projectList = View.findEle('[data-label="project-list"]');

		// ##########[ MODAL ]
		this.modalTitle = View.findEle('[data-label="modal-title"]');
		this.modal = View.findEle('[data-label="modal"]');
		this.form = View.findEle('[data-label="modal-task-form"]');
		this.warning = View.findEle('[data-label="form-warning"]');
	}

	// #################### [ FORM EVALUATION ] ##################

	taskDetails() {
		const title = View.findEle('[data-label="modal-task-title"]');
		const date = View.findEle('[data-label="modal-task-date"]');
		const project = View.findEle('[data-label="modal-task-project"]');
		const priorities = View.findEles('input[name="priority"]');
		const description = View.findEle('[data-label="modal-task-description"]');
		let details;
		let selectedPriority;
		priorities.forEach((priority) => {
			if (priority.checked) {
				selectedPriority = priority.value;
			}
		});
		let warning;
		if (!title.value && !date.value) {
			warning = 'Title and due date are required!';
			title.classList.add('invalid');
			date.classList.add('invalid');
		} else if (!title.value) {
			warning = 'Title is required!';
			title.classList.add('invalid');
			date.classList.remove('invalid');
		} else if (!date.value) {
			warning = 'Date is required!';
			title.classList.remove('invalid');
			date.classList.add('invalid');
		} else if (new Date().toISOString() > new Date(date.value).toISOString()) {
			warning = 'Date cannot be in the past!';
			title.classList.remove('invalid');
			date.classList.add('invalid');
		}
		if (warning) {
			this.warning.textContent = warning;
		} else {
			this.warning.textContent = '';
			details = {
				title: title.value,
				description: description.value || 'No description',
				date: date.value,
				priority: selectedPriority || 'Low',
				project: project.value,
			};
		}
		return details;
	}

	projectDetails() {
		const projectTitle = View.findEle('[data-label="project-title"]');
		let warning;
		if (!projectTitle.value) {
			warning = 'Project title is required';
			projectTitle.classList.add('invalid');
		} else {
			const projects = this.getProjects();
			projects.forEach((project) => {
				if (project.name === projectTitle.value) {
					warning = 'Project already exists. Choose another name';
					projectTitle.classList.add('invalid');
				}
			});
		}
		if (warning) {
			this.warning.textContent = warning;
		} else {
			this.warning.textContent = '';
		}
		return projectTitle.value;
	}

	// ####################[ DOM TOGGLES ] ##################
	eventToggleNav = () =>
		this.burgerBtn.addEventListener('click', this.toggleNav);

	eventToggleFilter = () =>
		this.filterBtn.addEventListener('click', this.toggleFilter);

	eventToggleProjects = () =>
		this.projectBtn.addEventListener('click', this.toggleProjects);

	toggleNav = () => this.navContainer.classList.toggle('sidebar-hidden');

	toggleFilter = () => this.filterList.classList.toggle('hidden');

	toggleProjects = () => {
		const expandedIcon = View.findEle('[data-label="expand-icon"]');
		if (this.projectList.hasAttribute('data-visible')) {
			this.projectBtn.setAttribute('aria-expanded', false);
			expandedIcon.setAttribute('href', `${_assets_sprite_svg__WEBPACK_IMPORTED_MODULE_0__}#icon-expand`);
		} else {
			this.projectBtn.setAttribute('aria-expanded', true);
			expandedIcon.setAttribute('href', `${_assets_sprite_svg__WEBPACK_IMPORTED_MODULE_0__}#icon-shrink`);
		}
		this.projectList.classList.toggle('hidden');
		this.projectList.toggleAttribute('data-visible');
	};

	// ################## [ DOM INJECTION ] ##################
	displayTasks(tasks) {
		View.clear(this.taskList);
		if (!tasks.length) {
			const message = View.createEle('p', 'tasks-notask-text');
			message.textContent = 'No tasks, go take a walk';
			this.taskList.append(message);
		} else {
			tasks.forEach((task) => {
				const alarmIcon = View.createSVG('alarm', 'icon', 'icon-4');
				const labelIcon = View.createSVG('label', 'icon', 'icon-4');
				const deleteIcon = View.createSVG('delete', 'icon', 'icon-5');
				const editIcon = View.createSVG('edit', 'icon', 'icon-5');
				const taskElement = View.createEle('li', 'tasks-list-item');
				taskElement.dataset.taskid = task.id;
				const detailsElement = View.createEle('details', 'tasks-details');
				const summaryElement = View.createEle('summary', 'tasks-summary');
				if (task.priority === 'High')
					taskElement.classList.add('priority-high');
				if (task.priority === 'Medium')
					taskElement.classList.add('priority-medium');
				if (task.priority === 'Low') taskElement.classList.add('priority-low');
				const taskText = View.createEle('span', 'tasks-list-item-title');
				taskText.textContent = task.task;
				const descriptionText = View.createEle(
					'p',
					'tasks-list-item-description'
				);
				descriptionText.textContent = task.description;
				const taskDate = View.createEle('span', 'tasks-list-item-date');
				if (new Date().toISOString() > new Date(task.duedate).toISOString()) {
					const days = Math.round(
						Math.abs(
							(new Date() - new Date(task.duedate)) / (1000 * 60 * 60 * 24)
						)
					);
					taskDate.textContent = `${days} ${days > 1 ? 'days' : 'day'} overdue`;
					if (!task.complete)
						taskDate.classList.add('tasks-list-item-date--overdue');
				} else if (
					new Date().toDateString() === new Date(task.duedate).toDateString()
				) {
					taskDate.textContent = 'Today!';
				} else {
					const days = Math.round(
						Math.abs(
							(new Date(task.duedate) - new Date()) / (1000 * 60 * 60 * 24)
						)
					);
					if (days === 0) {
						taskDate.textContent = 'Due tomorrow';
					} else {
						taskDate.textContent = task.duedate;
					}
				}
				taskDate.prepend(alarmIcon);
				const taskProject = View.createEle('span', 'tasks-list-item-project');
				taskProject.textContent = task.project;
				taskProject.prepend(labelIcon);
				const checkbox = View.createEle('input', 'tasks-list-item-checkbox');
				checkbox.type = 'checkbox';
				const buttonWrapper = View.createEle(
					'div',
					'tasks-list-item-buttons-wrapper'
				);
				const deleteButton = View.createEle(
					'button',
					'btn',
					'btn-icon-only',
					'btn-tasklist',
					'btn--red'
				);
				deleteButton.append(deleteIcon);
				deleteButton.dataset.label = 'delete-button';
				const editButton = View.createEle(
					'button',
					'btn',
					'btn-icon-only',
					'btn-tasklist',
					'btn--orange'
				);
				editButton.append(editIcon);
				editButton.dataset.label = 'edit-button';
				buttonWrapper.append(editButton, deleteButton);
				if (task.complete) {
					taskElement.classList.add('tasks-complete');
					checkbox.checked = true;
					checkbox.classList.add('tasks-list-item-checkbox-complete');
					taskText.classList.add('tasks-list-item-complete');
					taskDate.textContent = 'Complete';
				}
				summaryElement.append(taskText, buttonWrapper, taskDate, taskProject);
				detailsElement.append(summaryElement, descriptionText);
				taskElement.append(checkbox, detailsElement);
				this.taskList.append(taskElement);
			});
		}
	}

	buildModal = (type, dataArr) => {
		View.clear(this.form);
		const buttonContainer = View.createEle('div', 'modal-button-wrapper');
		buttonContainer.dataset.label = 'form-button-container';
		const closeButton = View.createEle('button', 'btn', 'btn-form', 'btn--red');
		closeButton.dataset.label = 'close-modal';
		closeButton.id = 'close-modal';
		closeButton.textContent = 'Cancel';
		closeButton.type = 'button';
		const submitButton = View.createEle(
			'button',
			'btn',
			'btn-form',
			'btn--green'
		);
		submitButton.type = 'submit';
		submitButton.dataset.label = 'submit';
		submitButton.id = 'submit';
		submitButton.textContent = 'Submit';
		submitButton.dataset.subtype = type;
		if (type === 'task' || type === 'edit') {
			this.modalTitle.textContent = type === 'task' ? 'New Task' : 'Edit Task';
			const taskTitleInput = View.createEle(
				'input',
				'modal-input',
				'modal-task-title'
			);
			taskTitleInput.dataset.label = 'modal-task-title';
			taskTitleInput.type = 'text';
			taskTitleInput.id = 'modal-task-title';
			taskTitleInput.placeholder = 'Task title';
			const taskDescription = View.createEle('textarea', 'modal-task-desc');
			taskDescription.placeholder = 'Task description...';
			taskDescription.dataset.label = 'modal-task-description';
			taskDescription.setAttribute('rows', '6');
			const dateWrapper = View.createEle(
				'fieldset',
				'modal-form-item-wrapper',
				'modal-task-date'
			);
			const taskDueDateInputLabel = View.createEle('label', 'modal-label');
			taskDueDateInputLabel.textContent = 'Due';
			taskDueDateInputLabel.for = 'modal-task-date';
			const taskDueDateInput = View.createEle('input', 'modal-input');
			taskDueDateInput.dataset.label = 'modal-task-date';
			taskDueDateInput.type = 'date';
			taskDueDateInput.id = 'modal-task-date';
			taskDueDateInput.placeholder = 'Due date...';
			dateWrapper.append(taskDueDateInputLabel, taskDueDateInput);
			const projectWrapper = View.createEle(
				'fieldset',
				'modal-form-item-wrapper'
			);
			const taskProjectInputLabel = View.createEle('label', 'modal-label');
			taskProjectInputLabel.textContent = 'Project';
			taskProjectInputLabel.for = 'modal-project-select';
			const taskProjectInput = View.createEle(
				'select',
				'modal-input',
				'modal-task-project'
			);
			taskProjectInput.dataset.label = 'modal-task-project';
			taskProjectInput.id = 'modal-project-select';
			projectWrapper.append(taskProjectInputLabel, taskProjectInput);
			const projects = this.getProjects();
			projects.forEach((project) => {
				const option = View.createEle('option');
				option.value = project.name;
				option.textContent = project.name;
				taskProjectInput.append(option);
				if (this.labelTaskListHeading.textContent === project.name) {
					taskProjectInput.value = project.name;
				}
			});
			const priorityWrapper = View.createEle(
				'fieldset',
				'modal-form-item-wrapper',
				'modal-task-prio'
			);
			const priorityBox = View.createEle('div', 'modal-radio-wrapper');
			const priorityLabel = View.createEle('p', 'modal-label');
			priorityLabel.textContent = 'Priority';
			const labelHighPrio = View.createEle(
				'label',
				'btn',
				'btn-form',
				'btn--red'
			);
			labelHighPrio.setAttribute('for', 'highPrio');
			labelHighPrio.textContent = 'High';
			const radioHighPrio = View.createEle('input', 'modal-radio');
			radioHighPrio.id = 'highPrio';
			radioHighPrio.type = 'radio';
			radioHighPrio.name = 'priority';
			radioHighPrio.value = 'High';
			const labelMediumPrio = View.createEle(
				'label',
				'btn',
				'btn-form',
				'btn--orange'
			);
			labelMediumPrio.setAttribute('for', 'mediumPrio');
			labelMediumPrio.textContent = 'Medium';
			const radioMediumPrio = View.createEle('input', 'modal-radio');
			radioMediumPrio.id = 'mediumPrio';
			radioMediumPrio.type = 'radio';
			radioMediumPrio.name = 'priority';
			radioMediumPrio.value = 'Medium';
			const labelLowPrio = View.createEle(
				'label',
				'btn',
				'btn-form',
				'btn--green'
			);
			labelLowPrio.setAttribute('for', 'lowPrio');
			labelLowPrio.textContent = 'Low';
			const radioLowPrio = View.createEle('input', 'modal-radio');
			radioLowPrio.id = 'lowPrio';
			radioLowPrio.type = 'radio';
			radioLowPrio.name = 'priority';
			radioLowPrio.value = 'Low';
			priorityBox.append(
				radioHighPrio,
				labelHighPrio,
				radioMediumPrio,
				labelMediumPrio,
				radioLowPrio,
				labelLowPrio
			);
			priorityWrapper.append(priorityLabel, priorityBox);
			if (type === 'edit') {
				const [data] = dataArr;
				taskTitleInput.value = data.task;
				taskDueDateInput.value = data.duedate;
				taskProjectInput.value = data.project;
				taskDescription.value = data.description;
				submitButton.dataset.taskid = data.id;
				if (data.priority === 'High') radioHighPrio.checked = true;
				if (data.priority === 'Medium') radioMediumPrio.checked = true;
				if (data.priority === 'Low') radioLowPrio.checked = true;
			}
			this.form.prepend(
				taskTitleInput,
				taskDescription,
				priorityWrapper,
				projectWrapper,
				dateWrapper
			);
		} else if (type === 'project') {
			this.modalTitle.textContent = 'New Project';
			const projectTitle = View.createEle(
				'input',
				'modal-input',
				'modal-project-title'
			);
			projectTitle.dataset.label = 'project-title';
			projectTitle.type = 'text';
			projectTitle.id = 'project-title';
			projectTitle.placeholder = 'Project title...';
			this.form.append(projectTitle);
		}
		buttonContainer.append(closeButton, submitButton);
		this.form.append(buttonContainer);
		this.modal.showModal();
	};

	displayProjects(projects) {
		View.clear(this.projectList);
		projects.forEach((project) => {
			const projectElement = View.createEle('li', 'projects-item');
			const projectName = View.createEle('p');
			projectName.textContent = project.name;
			projectElement.dataset.projectid = project.id;
			projectElement.dataset.label = 'filter';
			projectElement.dataset.filter = project.name;
			projectElement.append(projectName);
			if (project.id > 1) {
				projectElement.dataset.projecttype = 'custom';
				const deleteButton = View.createEle(
					'button',
					'btn',
					'btn-icon-only',
					'btn-project-delete'
				);
				deleteButton.dataset.label = 'delete-button';
				const deleteIcon = View.createSVG('close', 'icon', 'icon-3');
				deleteButton.append(deleteIcon);
				projectElement.append(deleteButton);
			}
			this.projectList.append(projectElement);
		});
	}
	// ###############[ EVENTS ]###############

	eventCloseModal() {
		this.form.addEventListener('click', (e) => {
			const { target } = e;
			if (target.dataset.label === 'close-modal') {
				View.clear(this.form);
				this.modal.close();
				this.warning.textContent = '';
			}
		});
	}

	eventNewTask() {
		this.newTaskBtn.addEventListener('click', () => {
			this.buildModal('task');
		});
	}

	eventNewProject() {
		this.newProjectBtn.addEventListener('click', () => {
			this.buildModal('project');
		});
	}

	eventUpdateLists(handler) {
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			const type = e.submitter.dataset.subtype;
			if (type === 'task') {
				if (this.taskDetails()) {
					handler(this.taskDetails(), type);
					this.modal.close();
				}
			} else if (type === 'project') {
				if (this.projectDetails()) {
					handler(this.projectDetails(), type);
					this.modal.close();
				}
			} else if (type === 'edit') {
				if (this.taskDetails()) {
					const task = this.taskDetails();
					task.id = Number(e.submitter.dataset.taskid);
					handler(task, type);
					this.modal.close();
				}
			}
		});
	}

	eventClickToEditTask(handler) {
		this.taskList.addEventListener('click', (e) => {
			const { target } = e;
			if (target.closest('button')?.dataset.label === 'edit-button') {
				const id = Number(target.closest('li').dataset.taskid);
				const task = handler(id);
				this.buildModal('edit', task);
			}
		});
	}

	eventDeleteTask(handler) {
		this.taskList.addEventListener('click', (e) => {
			const { target } = e;
			if (target.closest('button')?.dataset.label === 'delete-button') {
				const id = Number(target.closest('li').dataset.taskid);
				handler(id);
			}
		});
	}

	eventCompleteTask(handler) {
		this.taskList.addEventListener('change', (e) => {
			if (e.target.type === 'checkbox') {
				const id = Number(e.target.parentElement.dataset.taskid);
				handler(id);
			}
		});
	}

	eventDeleteProject(handler) {
		this.projectList.addEventListener('click', (e) => {
			const button = e.target.closest('button');
			if (button?.dataset.label === 'delete-button') {
				e.stopImmediatePropagation();
				const id = button.closest('li').dataset.projectid;
				handler(Number(id));
				this.labelTaskListHeading.textContent = 'All';
			}
		});
	}

	eventFilter(handler) {
		this.filterList.addEventListener('click', (e) => {
			if (e.target.closest('li')?.dataset.label === 'filter') {
				const { filter } = e.target.closest('li').dataset;
				this.labelTaskListHeading.textContent = View.capitalise(filter);
				handler(filter);
				this.toggleFilter();
			}
		});
		this.projectList.addEventListener('click', (e) => {
			e.stopPropagation();
			if (e.target.closest('li').dataset?.label === 'filter') {
				const { filter } = e.target.closest('li').dataset;
				this.labelTaskListHeading.textContent = View.capitalise(filter);
				handler(filter);
			}
		});
	}
}

/***/ }),

/***/ "./src/assets/sprite.svg":
/*!*******************************!*\
  !*** ./src/assets/sprite.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2f35f7fc324cd7b58fd.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.js");
'use: strict';

// ####################[ IMPORTS ]####################





// ###################[ CONTROLLER ]##################
// Connects user input & logic with display
// @param : model
// @param : view
// ###################################################

class Controller {
	constructor(model, view) {
		this.view = view;
		this.model = model;
		this.view.eventUpdateLists(this.handleUpdateLists);
		this.view.eventDeleteTask(this.handleDeleteTask);
		this.view.eventCompleteTask(this.handleCompleteTask);
		this.view.eventDeleteProject(this.handleDeleteProject);
		this.view.eventClickToEditTask(this.handleGetEditTask);
		this.view.getProjects = this.handleProjectsRequest;
		this.model.eventOnTaskChange(this.onTaskChange);
		this.onTaskChange(this.model.tasks);
		this.model.eventOnProjectChange(this.onProjectChange);
		this.onProjectChange(this.model.projects);
		this.view.eventToggleNav();
		this.view.eventToggleFilter();
		this.view.eventCloseModal();
		this.view.eventNewProject();
		this.view.eventNewTask();
		this.view.eventFilter(this.handleFilterTasks);
		this.view.eventToggleProjects();

		this.filter = 'all';
	}

	onTaskChange = (tasks) => this.view.displayTasks(tasks);

	onProjectChange = (projects) => this.view.displayProjects(projects);

	handleProjectsRequest = () => this.model._projects;

	handleUpdateLists = (item, type) => this.model.updateLists(item, type);

	handleGetEditTask = (id) => this.model.getTaskToEdit(id);

	handleEditTask = (id) => this.model.editTask(id);

	handleDeleteTask = (id) => this.model.deleteTask(id);

	handleCompleteTask = (id) => this.model.completeTask(id);

	handleAddProject = (project) => this.model.addProject(project);

	handleDeleteProject = (id) => this.model.deleteProject(id);

	handleFilterTasks = (filter) => this.model.filterTaskList(filter);
}

// eslint-disable-next-line no-unused-vars
const taskinator = new Controller(new _model__WEBPACK_IMPORTED_MODULE_1__["default"](), new _view__WEBPACK_IMPORTED_MODULE_2__["default"]());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0tBO0FBQ0E7QUFDeUM7QUFDekM7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsK0NBQU0sQ0FBQyxRQUFRLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLCtDQUFNLENBQUM7QUFDL0MsSUFBSTtBQUNKO0FBQ0Esd0NBQXdDLCtDQUFNLENBQUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE1BQU0sRUFBRSwyQkFBMkI7QUFDbEU7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ3pqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBRXVCO0FBQ0s7QUFDRjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDhDQUFLLFFBQVEsNkNBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3M/MGRmOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqOndoZXJlKDpub3QoaHRtbCwgaWZyYW1lLCBjYW52YXMsIGltZywgc3ZnLCB2aWRlbywgZGlhbG9nKTpub3Qoc3ZnICosIHN5bWJvbCAqKSkge1xcbiAgYWxsOiB1bnNldDtcXG4gIGRpc3BsYXk6IHJldmVydDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYSxcXG5idXR0b24ge1xcbiAgY3Vyc29yOiByZXZlcnQ7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aGl0ZS1zcGFjZTogcmV2ZXJ0O1xcbn1cXG5cXG5tZXRlciB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJldmVydDtcXG4gIGFwcGVhcmFuY2U6IHJldmVydDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdW5zZXQ7XFxufVxcblxcbjp3aGVyZShbaGlkZGVuXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOndoZXJlKFtjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPWZhbHNlXSkpIHtcXG4gIC1tb3otdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICAtd2Via2l0LXVzZXItbW9kaWZ5OiByZWFkLXdyaXRlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIC13ZWJraXQtbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxuICBsaW5lLWJyZWFrOiBhZnRlci13aGl0ZS1zcGFjZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG59XFxuXFxuOndoZXJlKFtkcmFnZ2FibGU9dHJ1ZV0pIHtcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhlYWRlci1iZy1jbHI6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIC0tZm9vdGVyLWJnLWNscjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgLS1zaWRlYmFyLWJnLWNscjogdmFyKC0tY2xyLW5ldXRyYWwtMjAwKTtcXG4gIC0tYm9keS1iZy1jbHI6IHZhcigtLWNsci13aGl0ZSk7XFxuICAtLXRyYW5zaXRpb24tdGltZTogNDAwbXM7XFxuICAtLWZudC1zei1kZWZhdWx0OiB2YXIoLS1zaXplLTQpO1xcbiAgLS1mbnQtd3QtZGVmYXVsdDogNDAwO1xcbiAgLS1mbnQtY2xyLWRlZmF1bHQ6IHZhcigtLWNsci1ibGFjayk7XFxuICAtLWNsci13aGl0ZTogdmFyKC0tY2xyLW5ldXRyYWwtMTAwKTtcXG4gIC0tY2xyLWJsYWNrOiB2YXIoLS1jbHItbmV1dHJhbC04MDApO1xcbiAgLS1kZWZhdWx0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLWZudC1mYW0tZGVmYXVsdDogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWZudC13dC10aGluOiAzMDA7XFxuICAtLWZudC13dC1yZWc6IDQwMDtcXG4gIC0tZm50LXd0LWJvbGQ6IDcwMDtcXG4gIC0tZm50LXd0LWhlYXZ5OiA5MDA7XFxuICAtLWNsci1wcmltYXJ5OiBoc2woMzUwZGVnLCA4OSUsIDYwJSk7XFxuICAtLWNsci1wcmltYXJ5LWxpZ2h0OiBoc2woMzUxZGVnLCA5NSUsIDcxJSk7XFxuICAtLWNsci1wcmltYXJ5LWRhcms6IGhzbCgzNDdkZWcsIDc3JSwgNTAlKTtcXG4gIC0tY2xyLXByaW1hcnkteGxpZ2h0OiBoc2woMzUzZGVnLCA5NiUsIDkwJSk7XFxuICAtLWNsci1ncmVlbi1yZWd1bGFyOiBoc2woMTYwZGVnLCA4NCUsIDM5JSk7XFxuICAtLWNsci1ncmVlbi1saWdodDogaHNsKDE1OGRlZywgNjQlLCA1MiUpO1xcbiAgLS1jbHItZ3JlZW4tZGFyazogaHNsKDE2MWRlZywgOTQlLCAzMCUpO1xcbiAgLS1jbHItcmVkLXJlZ3VsYXI6IGhzbCgzNTBkZWcsIDg5JSwgNjAlKTtcXG4gIC0tY2xyLXJlZC1saWdodDogaHNsKDM1MWRlZywgOTUlLCA3MSUpO1xcbiAgLS1jbHItcmVkLWRhcms6IGhzbCgzNDdkZWcsIDc3JSwgNTAlKTtcXG4gIC0tY2xyLW9yYW5nZS1yZWd1bGFyOiBoc2woMjVkZWcsIDk1JSwgNTMlKTtcXG4gIC0tY2xyLW9yYW5nZS1kYXJrOiBoc2woMjFkZWcsIDkwJSwgNDglKTtcXG4gIC0tY2xyLW9yYW5nZS1saWdodDogaHNsKDI3ZGVnLCA5NiUsIDYxJSk7XFxuICAtLWNsci13aGl0ZTogdmFyKC0tY2xyLW5ldXRyYWwtMTAwKTtcXG4gIC0tY2xyLWJsYWNrOiB2YXIoLS1jbHItbmV1dHJhbC04MDApO1xcbiAgLS1jbHItbmV1dHJhbC01MDogaHNsKDBkZWcsIDAlLCA5OCUpO1xcbiAgLS1jbHItbmV1dHJhbC0xMDA6IGhzbCgwZGVnLCAwJSwgOTYlKTtcXG4gIC0tY2xyLW5ldXRyYWwtMjAwOiBoc2woMGRlZywgMCUsIDkwJSk7XFxuICAtLWNsci1uZXV0cmFsLTMwMDogaHNsKDBkZWcsIDAlLCA4MyUpO1xcbiAgLS1jbHItbmV1dHJhbC00MDA6IGhzbCgwZGVnLCAwJSwgNjQlKTtcXG4gIC0tY2xyLW5ldXRyYWwtNTAwOiBoc2woMGRlZywgMCUsIDQ1JSk7XFxuICAtLWNsci1uZXV0cmFsLTYwMDogaHNsKDBkZWcsIDAlLCAzMiUpO1xcbiAgLS1jbHItbmV1dHJhbC03MDA6IGhzbCgwZGVnLCAwJSwgMjUlKTtcXG4gIC0tY2xyLW5ldXRyYWwtODAwOiBoc2woMGRlZywgMCUsIDE1JSk7XFxuICAtLWNsci1uZXV0cmFsLTkwMDogaHNsKDBkZWcsIDAlLCA5JSk7XFxuICAtLXNpemUtMTogMC40cmVtO1xcbiAgLS1zaXplLTI6IDAuOHJlbTtcXG4gIC0tc2l6ZS0zOiAxLjJyZW07XFxuICAtLXNpemUtNDogMS42cmVtO1xcbiAgLS1zaXplLTU6IDJyZW07XFxuICAtLXNpemUtNjogMi40cmVtO1xcbiAgLS1zaXplLTg6IDMuMnJlbTtcXG4gIC0tc2l6ZS01MjogMjAuOHJlbTtcXG4gIC0tc2l6ZS03MjogMjguOHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJnLWNscik7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mbnQtZmFtLWRlZmF1bHQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mbnQtc3otZGVmYXVsdCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm50LXd0LWRlZmF1bHQpO1xcbiAgY29sb3I6IHZhcigtLWZudC1jbHItZGVmYXVsdCk7XFxufVxcblxcbi5icmFuZCB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm50LXd0LWJvbGQpO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmljb24ge1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG59XFxuLmljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG59XFxuLmljb24tNiB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS02KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuLmljb24tNSB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS01KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuLmljb24tNCB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS00KTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuLmljb24tMyB7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS0zKTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWJnLWNscik7XFxuICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMyk7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTIpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrcy1jb250YWluZXItbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS02KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFza3MtY29udGFpbmVyLXN1YiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc2l6ZS0zKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jbHItYmxhY2spO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2l6ZS00KTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLTIpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50YXNrcy1jb250YWluZXItdG9wLWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5maWx0ZXItbGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5MDtcXG4gIHRvcDogdmFyKC0tc2l6ZS04KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwtNTApO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNCk7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS01Mik7XFxufVxcbi5maWx0ZXItbGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxufVxcbi5maWx0ZXItbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5LXhsaWdodCk7XFxufVxcblxcbi50YXNrcy13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFza3MtaGVhZGluZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZsZXg6IDE7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNik7XFxufVxcbi50YXNrcy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxufVxcbi50YXNrcy1ub3Rhc2stdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm50LXd0LXRoaW4pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTYpO1xcbn1cXG4udGFza3MtY29tcGxldGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyZWVuLWxpZ2h0KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG4udGFza3MtbGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVjayBkZXRhaWxzXFxcIjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0yKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA2MDBtcztcXG59XFxuLnRhc2tzLWxpc3QtaXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAtMTAwMHB4IDAgMCAwIHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxufVxcbi50YXNrcy1saXN0LWl0ZW0tY2hlY2tib3gge1xcbiAgZ3JpZC1hcmVhOiBjaGVjaztcXG4gIG1hcmdpbi1ibG9jazogYXV0bztcXG4gIG1hcmdpbi1pbmxpbmU6IHZhcigtLXNpemUtNCk7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIHdpZHRoOiAxLjE1ZW07XFxuICBoZWlnaHQ6IDEuMTVlbTtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNzVlbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbS1jaGVja2JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbn1cXG4udGFza3MtbGlzdC1pdGVtLWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4udGFza3MtbGlzdC1pdGVtLWNoZWNrYm94LWNvbXBsZXRlIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbn1cXG4udGFza3MtbGlzdC1pdGVtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS00KTtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcbi50YXNrcy1saXN0LWl0ZW0tYnV0dG9ucy13cmFwcGVyIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgLnRhc2tzLWxpc3QtaXRlbS1idXR0b25zLXdyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG4udGFza3MtbGlzdC1pdGVtLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrcy1saXN0LWl0ZW0tZGF0ZS0tb3ZlcmR1ZSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLXJlZC1yZWd1bGFyKTtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbS1wcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zaXplLTQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC10aGluKTtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbS1jb21wbGV0ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxufVxcbi50YXNrcy1kZXRhaWxzIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlscztcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNCk7XFxufVxcbi50YXNrcy1zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZVxcXCIgXFxcImRhdGVcXFwiIFxcXCJwcm9qZWN0XFxcIiBcXFwiYnV0dG9uc1xcXCI7XFxuICBnYXA6IHZhcigtLXNpemUtNCk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm50LXd0LXRoaW4pO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAudGFza3Mtc3VtbWFyeSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSBidXR0b25zXFxcIiBcXFwiZGF0ZSBwcm9qZWN0XFxcIjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgfVxcbn1cXG5cXG5kZXRhaWxzW29wZW5dID4gc3VtbWFyeSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zaXplLTQpO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZS0yKSBzb2xpZCB2YXIoLS1jbHItcmVkLXJlZ3VsYXIpO1xcbn1cXG4ucHJpb3JpdHktbWVkaXVtIHtcXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1zaXplLTIpIHNvbGlkIHZhcigtLWNsci1vcmFuZ2UtcmVndWxhcik7XFxufVxcbi5wcmlvcml0eS1sb3cge1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpemUtMikgc29saWQgdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG5pbnB1dDpoYXMoOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pKTpub3QoOnZhbGlkKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS00KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWZvb3Rlci1iZy1jbHIpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmJ0bi1idXJnZXIge1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtNCk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLmJ0bi1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uYnRuLWljb24tb25seSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmJ0bi1uZXctcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTEpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0zKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JlZW4tcmVndWxhcik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbn1cXG4uYnRuLXRvZ2dsZS1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbn1cXG4uYnRuLXRvZ2dsZS1wcm9qZWN0cy10ZXh0IHtcXG4gIGZsZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5idG4tdG9nZ2xlLXByb2plY3RzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5LWRhcmspO1xcbn1cXG4uYnRuLW5ldy10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTMpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItYmxhY2spO1xcbiAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XFxufVxcbi5idG4tbmV3LXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxufVxcbi5idG4tdGFza2xpc3Qge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlyZW07XFxufVxcbi5idG4tdGFza2xpc3Q6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG59XFxuLmJ0bi1mb3JtIHtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxufVxcbi5idG4tcHJvamVjdC1kZWxldGUge1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXJlbTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG59XFxuLmJ0bi1wcm9qZWN0LWRlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcmVkLXJlZ3VsYXIpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxufVxcbi5idG4tLXJlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcmVkLXJlZ3VsYXIpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxufVxcbi5idG4tLXJlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcmVkLWRhcmspO1xcbn1cXG4uYnRuLS1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLW9yYW5nZS1yZWd1bGFyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG4uYnRuLS1vcmFuZ2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLW9yYW5nZS1kYXJrKTtcXG59XFxuLmJ0bi0tZ3JlZW4ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxufVxcbi5idG4tLWdyZWVuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmVlbi1kYXJrKTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJnLWNscik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLTcyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNik7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA2MDBtcztcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45ODc1ZW0pIHtcXG4gIC5zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgfVxcbn1cXG4uc2lkZWJhci1oaWRkZW4ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zaXplLTIpO1xcbn1cXG4ucHJvamVjdHMtaXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtMyk7XFxuICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zaXplLTMpO1xcbn1cXG4ucHJvamVjdHMtaXRlbTpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAyNTBweCAwIDAgMCB2YXIoLS1jbHItcHJpbWFyeS14bGlnaHQpO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiBtaW4oNzYuOHJlbSwgOTB2dyk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG59XFxuLm1vZGFsOmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ibGFjayk7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcbi5tb2RhbC1oZWFkZXIge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS00KTtcXG4gIGJhY2tncm91bmQ6IHZhUigtLWNsci1wcmltYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNSk7XFxufVxcbi5tb2RhbC1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlXFxcIiBcXFwiZGVzY1xcXCIgXFxcInByaW9cXFwiIFxcXCJwcm9qZWN0XFxcIiBcXFwiZGF0ZVxcXCIgXFxcImJ1dHRvbnNcXFwiO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcXG4gIC5tb2RhbC1mb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlXFxcIiBcXFwiZGVzYyBkZXNjXFxcIiBcXFwicHJpbyBwcm9qZWN0XFxcIiBcXFwiZGF0ZSBkYXRlXFxcIiBcXFwiYnV0dG9ucyBidXR0b25zXFxcIjtcXG4gIH1cXG59XFxuLm1vZGFsLWZvcm0taXRlbS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm1vZGFsLWJ1dHRvbi13cmFwcGVyIHtcXG4gIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbn1cXG4ubW9kYWwtaW5wdXQge1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwtbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC10aGluKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XFxufVxcbi5tb2RhbC1yYWRpbyB7XFxuICB3aWR0aDogMDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tb2RhbC1yYWRpby1sYWJlbCB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG59XFxuLm1vZGFsLXJhZGlvLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0xKTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tb2RhbC10YXNrLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcbi5tb2RhbC10YXNrLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbn1cXG4ubW9kYWwtdGFzay1wcm9qZWN0IHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdDtcXG59XFxuLm1vZGFsLXRhc2stZGVzYyB7XFxuICBncmlkLWFyZWE6IGRlc2M7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIpO1xcbn1cXG4ubW9kYWwtdGFzay1wcmlvIHtcXG4gIGdyaWQtYXJlYTogcHJpbztcXG59XFxuLm1vZGFsLXByb2plY3QtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuc2VsZWN0LFxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLW5ldXRyYWwtMzAwKTtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwtNDAwKTtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgbWFyZ2luOiB2YXIoLS1zaXplLTQpO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mbnQtd3QtdGhpbik7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbmRpYWxvZyA+IHBbZGF0YS1sYWJlbD1mb3JtLXdhcm5pbmddOmVtcHR5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbn1cXG5cXG5pbnB1dDpoYXMoOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOm5vdCg6dmFsaWQpKSB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4udmlzdWFsbHktaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lci1zbSB7XFxuICBtYXgtd2lkdGg6IDY0cmVtO1xcbn1cXG4uY29udGFpbmVyLW1kIHtcXG4gIG1heC13aWR0aDogNzYuOHJlbTtcXG59XFxuLmNvbnRhaW5lci1sZyB7XFxuICBtYXgtd2lkdGg6IDEwMi40cmVtO1xcbn1cXG4uY29udGFpbmVyLXhsIHtcXG4gIG1heC13aWR0aDogMTI4cmVtO1xcbn1cXG4uY29udGFpbmVyLTJ4bCB7XFxuICBtYXgtd2lkdGg6IDE1My42cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy1tb2R1bGVzL2Jhc2UvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MtbW9kdWxlcy9iYXNlL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzLW1vZHVsZXMvYmFzZS9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy1tb2R1bGVzL2Jhc2UvX2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzLW1vZHVsZXMvbGF5b3V0L19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MtbW9kdWxlcy9sYXlvdXQvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MtbW9kdWxlcy9hYnN0cmFjdHMvX3Jlc3BvbnNpdmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MtbW9kdWxlcy9sYXlvdXQvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy1tb2R1bGVzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MtbW9kdWxlcy9jb21wb25lbnRzL19zaWRlYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzLW1vZHVsZXMvY29tcG9uZW50cy9fbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MtbW9kdWxlcy9iYXNlL191dGlsaXR5LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBVUE7RUFFRSxVQUFBO0VBQ0EsZUFBQTtBQ1RGOztBRGFBOzs7RUFHRSxzQkFBQTtBQ1ZGOztBRGNBOztFQUVFLGNBQUE7QUNYRjs7QURlQTs7O0VBR0UsZ0JBQUE7QUNaRjs7QURnQkE7RUFDRSxlQUFBO0FDYkY7O0FEaUJBO0VBQ0UseUJBQUE7QUNkRjs7QURrQkE7O0VBRUUseUJBQUE7RUFDQSxpQkFBQTtBQ2ZGOztBRG1CQTtFQUNFLG1CQUFBO0FDaEJGOztBRG9CQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUNqQkY7O0FEcUJBO0VBQ0UsWUFBQTtBQ2xCRjs7QUR1QkE7RUFDRSxhQUFBO0FDcEJGOztBRDBCQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDdkJGOztBRDJCQTtFQUNFLDBCQUFBO0FDeEJGOztBQ2hFQTtFQUVFLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxt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Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuLy9cXG4vLyBDU1MgUmVzZXQgYnkgZWxhZCB2IDEuNy4yIHdpdGggZWRpdHMgYnkgTGVvbiBMb25zZGFsZVxcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGFkMjQxMi90aGUtbmV3LWNzcy1yZXNldFxcbi8vXFxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcbi8vIFJlbW92ZSBhbGwgdGhlIHN0eWxlcyBvZiB0aGUgXFxcIlVzZXItQWdlbnQtU3R5bGVzaGVldFxcXCIsIGV4Y2VwdCBmb3IgdGhlICdkaXNwbGF5JyBwcm9wZXJ0eVxcbi8vIC0gVGhlIFxcXCJzeW1ib2wgKlxcXCIgcGFydCBpcyB0byBzb2x2ZSBGaXJlZm94IFNWRyBzcHJpdGUgYnVnXFxuXFxuKjp3aGVyZSg6bm90KGh0bWwsIGlmcmFtZSwgY2FudmFzLCBpbWcsIHN2ZywgdmlkZW8sIGRpYWxvZyk6bm90KHN2ZyAqLCBzeW1ib2xcXG4gICAgICAqKSkge1xcbiAgYWxsOiB1bnNldDtcXG4gIGRpc3BsYXk6IHJldmVydDtcXG59XFxuXFxuLy8gUHJlZmVycmVkIGJveC1zaXppbmcgdmFsdWVcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vLyBSZWFwcGx5IHRoZSBwb2ludGVyIGN1cnNvciBmb3IgYW5jaG9yIHRhZ3NcXG5hLFxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHJldmVydDtcXG59XFxuXFxuLy8gUmVtb3ZlIGxpc3Qgc3R5bGVzIChidWxsZXRzL251bWJlcnMpXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vLyBGb3IgaW1hZ2VzIHRvIG5vdCBiZSBhYmxlIHRvIGV4Y2VlZCB0aGVpciBjb250YWluZXJcXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vLyByZW1vdmVzIHNwYWNpbmcgYmV0d2VlbiBjZWxscyBpbiB0YWJsZXNcXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vLyBTYWZhcmkgLSBzb2x2aW5nIGlzc3VlIHdoZW4gdXNpbmcgdXNlci1zZWxlY3Q6bm9uZSBvbiB0aGUgPGJvZHk+IHRleHQgaW5wdXQgZG9lc24ndCB3b3JraW5nXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG4vLyByZXZlcnQgdGhlICd3aGl0ZS1zcGFjZScgcHJvcGVydHkgZm9yIHRleHRhcmVhIGVsZW1lbnRzIG9uIFNhZmFyaVxcbnRleHRhcmVhIHtcXG4gIHdoaXRlLXNwYWNlOiByZXZlcnQ7XFxufVxcblxcbi8vICBtaW5pbXVtIHN0eWxlIHRvIGFsbG93IHRvIHN0eWxlIG1ldGVyIGVsZW1lbnRcXG5tZXRlciB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJldmVydDtcXG4gIGFwcGVhcmFuY2U6IHJldmVydDtcXG59XFxuXFxuLy8gcmVzZXQgZGVmYXVsdCB0ZXh0IG9wYWNpdHkgb2YgaW5wdXQgcGxhY2Vob2xkZXJcXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB1bnNldDtcXG59XFxuXFxuLy8gZml4IHRoZSBmZWF0dXJlIG9mICdoaWRkZW4nIGF0dHJpYnV0ZS5cXG4vLyAgIGRpc3BsYXk6cmV2ZXJ0OyByZXZlcnQgdG8gZWxlbWVudCBpbnN0ZWFkIG9mIGF0dHJpYnV0ZVxcbjp3aGVyZShbaGlkZGVuXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLy8gcmV2ZXJ0IGZvciBidWcgaW4gQ2hyb21pdW0gYnJvd3NlcnNcXG4vLyAgICAtIGZpeCBmb3IgdGhlIGNvbnRlbnQgZWRpdGFibGUgYXR0cmlidXRlIHdpbGwgd29yayBwcm9wZXJseS5cXG4vLyAgICAtIHdlYmtpdC11c2VyLXNlbGVjdDogYXV0bzsgYWRkZWQgZm9yIFNhZmFyaSBpbiBjYXNlIG9mIHVzaW5nIHVzZXItc2VsZWN0Om5vbmUgb24gd3JhcHBlciBlbGVtZW50XFxuOndoZXJlKFtjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPSdmYWxzZSddKSkge1xcbiAgLW1vei11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gIC13ZWJraXQtdXNlci1tb2RpZnk6IHJlYWQtd3JpdGU7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgLXdlYmtpdC1saW5lLWJyZWFrOiBhZnRlci13aGl0ZS1zcGFjZTtcXG4gIGxpbmUtYnJlYWs6IGFmdGVyLXdoaXRlLXNwYWNlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcXG4gIHVzZXItc2VsZWN0OiBhdXRvO1xcbn1cXG5cXG4vLyBhcHBseSBiYWNrIHRoZSBkcmFnZ2FibGUgZmVhdHVyZSAtIGV4aXN0IG9ubHkgaW4gQ2hyb21pdW0gYW5kIFNhZmFyaVxcbjp3aGVyZShbZHJhZ2dhYmxlPSd0cnVlJ10pIHtcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBlbGVtZW50O1xcbn1cXG5cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuKjp3aGVyZSg6bm90KGh0bWwsIGlmcmFtZSwgY2FudmFzLCBpbWcsIHN2ZywgdmlkZW8sIGRpYWxvZyk6bm90KHN2ZyAqLCBzeW1ib2wgKikpIHtcXG4gIGFsbDogdW5zZXQ7XFxuICBkaXNwbGF5OiByZXZlcnQ7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmEsXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcmV2ZXJ0O1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IGF1dG87XFxuICB1c2VyLXNlbGVjdDogYXV0bztcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2hpdGUtc3BhY2U6IHJldmVydDtcXG59XFxuXFxubWV0ZXIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiByZXZlcnQ7XFxuICBhcHBlYXJhbmNlOiByZXZlcnQ7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHVuc2V0O1xcbn1cXG5cXG46d2hlcmUoW2hpZGRlbl0pIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjp3aGVyZShbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1mYWxzZV0pKSB7XFxuICAtbW96LXVzZXItbW9kaWZ5OiByZWFkLXdyaXRlO1xcbiAgLXdlYmtpdC11c2VyLW1vZGlmeTogcmVhZC13cml0ZTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAtd2Via2l0LWxpbmUtYnJlYWs6IGFmdGVyLXdoaXRlLXNwYWNlO1xcbiAgbGluZS1icmVhazogYWZ0ZXItd2hpdGUtc3BhY2U7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xcbiAgdXNlci1zZWxlY3Q6IGF1dG87XFxufVxcblxcbjp3aGVyZShbZHJhZ2dhYmxlPXRydWVdKSB7XFxuICAtd2Via2l0LXVzZXItZHJhZzogZWxlbWVudDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1oZWFkZXItYmctY2xyOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICAtLWZvb3Rlci1iZy1jbHI6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIC0tc2lkZWJhci1iZy1jbHI6IHZhcigtLWNsci1uZXV0cmFsLTIwMCk7XFxuICAtLWJvZHktYmctY2xyOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgLS10cmFuc2l0aW9uLXRpbWU6IDQwMG1zO1xcbiAgLS1mbnQtc3otZGVmYXVsdDogdmFyKC0tc2l6ZS00KTtcXG4gIC0tZm50LXd0LWRlZmF1bHQ6IDQwMDtcXG4gIC0tZm50LWNsci1kZWZhdWx0OiB2YXIoLS1jbHItYmxhY2spO1xcbiAgLS1jbHItd2hpdGU6IHZhcigtLWNsci1uZXV0cmFsLTEwMCk7XFxuICAtLWNsci1ibGFjazogdmFyKC0tY2xyLW5ldXRyYWwtODAwKTtcXG4gIC0tZGVmYXVsdC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLS1mbnQtZmFtLWRlZmF1bHQ6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1mbnQtd3QtdGhpbjogMzAwO1xcbiAgLS1mbnQtd3QtcmVnOiA0MDA7XFxuICAtLWZudC13dC1ib2xkOiA3MDA7XFxuICAtLWZudC13dC1oZWF2eTogOTAwO1xcbiAgLS1jbHItcHJpbWFyeTogaHNsKDM1MGRlZywgODklLCA2MCUpO1xcbiAgLS1jbHItcHJpbWFyeS1saWdodDogaHNsKDM1MWRlZywgOTUlLCA3MSUpO1xcbiAgLS1jbHItcHJpbWFyeS1kYXJrOiBoc2woMzQ3ZGVnLCA3NyUsIDUwJSk7XFxuICAtLWNsci1wcmltYXJ5LXhsaWdodDogaHNsKDM1M2RlZywgOTYlLCA5MCUpO1xcbiAgLS1jbHItZ3JlZW4tcmVndWxhcjogaHNsKDE2MGRlZywgODQlLCAzOSUpO1xcbiAgLS1jbHItZ3JlZW4tbGlnaHQ6IGhzbCgxNThkZWcsIDY0JSwgNTIlKTtcXG4gIC0tY2xyLWdyZWVuLWRhcms6IGhzbCgxNjFkZWcsIDk0JSwgMzAlKTtcXG4gIC0tY2xyLXJlZC1yZWd1bGFyOiBoc2woMzUwZGVnLCA4OSUsIDYwJSk7XFxuICAtLWNsci1yZWQtbGlnaHQ6IGhzbCgzNTFkZWcsIDk1JSwgNzElKTtcXG4gIC0tY2xyLXJlZC1kYXJrOiBoc2woMzQ3ZGVnLCA3NyUsIDUwJSk7XFxuICAtLWNsci1vcmFuZ2UtcmVndWxhcjogaHNsKDI1ZGVnLCA5NSUsIDUzJSk7XFxuICAtLWNsci1vcmFuZ2UtZGFyazogaHNsKDIxZGVnLCA5MCUsIDQ4JSk7XFxuICAtLWNsci1vcmFuZ2UtbGlnaHQ6IGhzbCgyN2RlZywgOTYlLCA2MSUpO1xcbiAgLS1jbHItd2hpdGU6IHZhcigtLWNsci1uZXV0cmFsLTEwMCk7XFxuICAtLWNsci1ibGFjazogdmFyKC0tY2xyLW5ldXRyYWwtODAwKTtcXG4gIC0tY2xyLW5ldXRyYWwtNTA6IGhzbCgwZGVnLCAwJSwgOTglKTtcXG4gIC0tY2xyLW5ldXRyYWwtMTAwOiBoc2woMGRlZywgMCUsIDk2JSk7XFxuICAtLWNsci1uZXV0cmFsLTIwMDogaHNsKDBkZWcsIDAlLCA5MCUpO1xcbiAgLS1jbHItbmV1dHJhbC0zMDA6IGhzbCgwZGVnLCAwJSwgODMlKTtcXG4gIC0tY2xyLW5ldXRyYWwtNDAwOiBoc2woMGRlZywgMCUsIDY0JSk7XFxuICAtLWNsci1uZXV0cmFsLTUwMDogaHNsKDBkZWcsIDAlLCA0NSUpO1xcbiAgLS1jbHItbmV1dHJhbC02MDA6IGhzbCgwZGVnLCAwJSwgMzIlKTtcXG4gIC0tY2xyLW5ldXRyYWwtNzAwOiBoc2woMGRlZywgMCUsIDI1JSk7XFxuICAtLWNsci1uZXV0cmFsLTgwMDogaHNsKDBkZWcsIDAlLCAxNSUpO1xcbiAgLS1jbHItbmV1dHJhbC05MDA6IGhzbCgwZGVnLCAwJSwgOSUpO1xcbiAgLS1zaXplLTE6IDAuNHJlbTtcXG4gIC0tc2l6ZS0yOiAwLjhyZW07XFxuICAtLXNpemUtMzogMS4ycmVtO1xcbiAgLS1zaXplLTQ6IDEuNnJlbTtcXG4gIC0tc2l6ZS01OiAycmVtO1xcbiAgLS1zaXplLTY6IDIuNHJlbTtcXG4gIC0tc2l6ZS04OiAzLjJyZW07XFxuICAtLXNpemUtNTI6IDIwLjhyZW07XFxuICAtLXNpemUtNzI6IDI4LjhyZW07XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZy1jbHIpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm50LWZhbS1kZWZhdWx0KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm50LXN6LWRlZmF1bHQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC1kZWZhdWx0KTtcXG4gIGNvbG9yOiB2YXIoLS1mbnQtY2xyLWRlZmF1bHQpO1xcbn1cXG5cXG4uYnJhbmQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC1ib2xkKTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5pY29uIHtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxufVxcbi5pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxufVxcbi5pY29uLTYge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNik7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxufVxcbi5pY29uLTUge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNSk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxufVxcbi5pY29uLTQge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNCk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxufVxcbi5pY29uLTMge1xcbiAgd2lkdGg6IHZhcigtLXNpemUtMyk7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iZy1jbHIpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTMpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNik7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRhc2tzLWNvbnRhaW5lci1zdWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2xyLWJsYWNrKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNpemUtNCk7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS0yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFza3MtY29udGFpbmVyLXRvcC1iYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmlsdGVyLWxpc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTA7XFxuICB0b3A6IHZhcigtLXNpemUtOCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZXV0cmFsLTUwKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbiAgd2lkdGg6IHZhcigtLXNpemUtNTIpO1xcbn1cXG4uZmlsdGVyLWxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbn1cXG4uZmlsdGVyLWxpc3QtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeS14bGlnaHQpO1xcbn1cXG5cXG4udGFza3Mtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnRhc2tzLWhlYWRpbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmbGV4OiAxO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTYpO1xcbn1cXG4udGFza3MtbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbn1cXG4udGFza3Mtbm90YXNrLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC10aGluKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS02KTtcXG59XFxuLnRhc2tzLWNvbXBsZXRlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmVlbi1saWdodCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2sgZGV0YWlsc1xcXCI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNjAwbXM7XFxufVxcbi50YXNrcy1saXN0LWl0ZW06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTEwMDBweCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbn1cXG4udGFza3MtbGlzdC1pdGVtLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogY2hlY2s7XFxuICBtYXJnaW4tYmxvY2s6IGF1dG87XFxuICBtYXJnaW4taW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDc1ZW0pO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YXNrcy1saXN0LWl0ZW0tY2hlY2tib3g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjY1ZW07XFxuICBoZWlnaHQ6IDAuNjVlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtIHZhcigtLWNsci1ncmVlbi1yZWd1bGFyKTtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbS1jaGVja2JveDpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbS1jaGVja2JveC1jb21wbGV0ZSB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNsci1ncmVlbi1yZWd1bGFyKTtcXG59XFxuLnRhc2tzLWxpc3QtaXRlbS10aXRsZSB7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtNCk7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG4udGFza3MtbGlzdC1pdGVtLWJ1dHRvbnMtd3JhcHBlciB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gIC50YXNrcy1saXN0LWl0ZW0tYnV0dG9ucy13cmFwcGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIH1cXG59XFxuLnRhc2tzLWxpc3QtaXRlbS1kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFza3MtbGlzdC1pdGVtLWRhdGUtLW92ZXJkdWUge1xcbiAgY29sb3I6IHZhcigtLWNsci1yZWQtcmVndWxhcik7XFxufVxcbi50YXNrcy1saXN0LWl0ZW0tcHJvamVjdCB7XFxuICBncmlkLWFyZWE6IHByb2plY3Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi50YXNrcy1saXN0LWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS00KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS00KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mbnQtd3QtdGhpbik7XFxufVxcbi50YXNrcy1saXN0LWl0ZW0tY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbn1cXG4udGFza3MtZGV0YWlscyB7XFxuICBncmlkLWFyZWE6IGRldGFpbHM7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbn1cXG4udGFza3Mtc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGVcXFwiIFxcXCJkYXRlXFxcIiBcXFwicHJvamVjdFxcXCIgXFxcImJ1dHRvbnNcXFwiO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC10aGluKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zaXRpb24tdGltZSk7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgLnRhc2tzLXN1bW1hcnkge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGUgYnV0dG9uc1xcXCIgXFxcImRhdGUgcHJvamVjdFxcXCI7XFxuICAgIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gIH1cXG59XFxuXFxuZGV0YWlsc1tvcGVuXSA+IHN1bW1hcnkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS00KTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLXNpemUtMikgc29saWQgdmFyKC0tY2xyLXJlZC1yZWd1bGFyKTtcXG59XFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZS0yKSBzb2xpZCB2YXIoLS1jbHItb3JhbmdlLXJlZ3VsYXIpO1xcbn1cXG4ucHJpb3JpdHktbG93IHtcXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1zaXplLTIpIHNvbGlkIHZhcigtLWNsci1ncmVlbi1yZWd1bGFyKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuXFxuaW5wdXQ6aGFzKDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSk6bm90KDp2YWxpZCkge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmctY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5idG4tYnVyZ2VyIHtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcXG4gIC5idG4tYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLmJ0bi1pY29uLW9ubHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5idG4tbmV3LXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc2l6ZS0xKTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMyk7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbiAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG59XFxuLmJ0bi10b2dnbGUtcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTMpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG59XFxuLmJ0bi10b2dnbGUtcHJvamVjdHMtdGV4dCB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYnRuLXRvZ2dsZS1wcm9qZWN0czpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeS1kYXJrKTtcXG59XFxuLmJ0bi1uZXctdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0zKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWJsYWNrKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbn1cXG4uYnRuLW5ldy10YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmVlbi1yZWd1bGFyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG4uYnRuLXRhc2tsaXN0IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMSk7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cmVtO1xcbn1cXG4uYnRuLXRhc2tsaXN0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxufVxcbi5idG4tZm9ybSB7XFxuICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS00KTtcXG4gIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbn1cXG4uYnRuLXByb2plY3QtZGVsZXRlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlyZW07XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpO1xcbiAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XFxufVxcbi5idG4tcHJvamVjdC1kZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXJlZC1yZWd1bGFyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG4uYnRuLS1yZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXJlZC1yZWd1bGFyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG4uYnRuLS1yZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXJlZC1kYXJrKTtcXG59XFxuLmJ0bi0tb3JhbmdlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1vcmFuZ2UtcmVndWxhcik7XFxuICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG59XFxuLmJ0bi0tb3JhbmdlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1vcmFuZ2UtZGFyayk7XFxufVxcbi5idG4tLWdyZWVuIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmVlbi1yZWd1bGFyKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG4uYnRuLS1ncmVlbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JlZW4tZGFyayk7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iZy1jbHIpO1xcbiAgY29sb3I6IHZhcigtLWNsci1ibGFjayk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS03Mik7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTYpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNjAwbXM7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTg3NWVtKSB7XFxuICAuc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG59XFxuLnNpZGViYXItaGlkZGVuIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogdmFyKC0tc2l6ZS0yKTtcXG59XFxuLnByb2plY3RzLWl0ZW0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTMpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0zKTtcXG59XFxuLnByb2plY3RzLWl0ZW06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMjUwcHggMCAwIDAgdmFyKC0tY2xyLXByaW1hcnkteGxpZ2h0KTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogbWluKDc2LjhyZW0sIDkwdncpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxufVxcbi5tb2RhbDpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYmxhY2spO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNCk7XFxuICBiYWNrZ3JvdW5kOiB2YVIoLS1jbHItcHJpbWFyeSk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xcbn1cXG4ubW9kYWwtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS00KTtcXG4gIGdhcDogdmFyKC0tc2l6ZS0zKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZVxcXCIgXFxcImRlc2NcXFwiIFxcXCJwcmlvXFxcIiBcXFwicHJvamVjdFxcXCIgXFxcImRhdGVcXFwiIFxcXCJidXR0b25zXFxcIjtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAubW9kYWwtZm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSB0aXRsZVxcXCIgXFxcImRlc2MgZGVzY1xcXCIgXFxcInByaW8gcHJvamVjdFxcXCIgXFxcImRhdGUgZGF0ZVxcXCIgXFxcImJ1dHRvbnMgYnV0dG9uc1xcXCI7XFxuICB9XFxufVxcbi5tb2RhbC1mb3JtLWl0ZW0td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tb2RhbC1idXR0b24td3JhcHBlciB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbnM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG59XFxuLm1vZGFsLWlucHV0IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMik7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsLWxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mbnQtd3QtdGhpbik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbn1cXG4ubW9kYWwtcmFkaW8ge1xcbiAgd2lkdGg6IDA7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubW9kYWwtcmFkaW8tbGFiZWwge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxufVxcbi5tb2RhbC1yYWRpby13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IHZhcigtLXNpemUtMSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubW9kYWwtdGFzay10aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG4ubW9kYWwtdGFzay1kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG59XFxuLm1vZGFsLXRhc2stcHJvamVjdCB7XFxuICBncmlkLWFyZWE6IHByb2plY3Q7XFxufVxcbi5tb2RhbC10YXNrLWRlc2Mge1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG59XFxuLm1vZGFsLXRhc2stcHJpbyB7XFxuICBncmlkLWFyZWE6IHByaW87XFxufVxcbi5tb2RhbC1wcm9qZWN0LXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcbnNlbGVjdCxcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1uZXV0cmFsLTMwMCk7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsLTQwMCk7XFxufVxcblxcbi53YXJuaW5nIHtcXG4gIG1hcmdpbjogdmFyKC0tc2l6ZS00KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtMik7XFxuICBvdXRsaW5lOiAycHggZG90dGVkIHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm50LXd0LXRoaW4pO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5kaWFsb2cgPiBwW2RhdGEtbGFiZWw9Zm9ybS13YXJuaW5nXTplbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG59XFxuXFxuaW5wdXQ6aGFzKDpub3QoOnBsYWNlaG9sZGVyLXNob3duKTpub3QoOnZhbGlkKSkge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLnZpc3VhbGx5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXItc20ge1xcbiAgbWF4LXdpZHRoOiA2NHJlbTtcXG59XFxuLmNvbnRhaW5lci1tZCB7XFxuICBtYXgtd2lkdGg6IDc2LjhyZW07XFxufVxcbi5jb250YWluZXItbGcge1xcbiAgbWF4LXdpZHRoOiAxMDIuNHJlbTtcXG59XFxuLmNvbnRhaW5lci14bCB7XFxuICBtYXgtd2lkdGg6IDEyOHJlbTtcXG59XFxuLmNvbnRhaW5lci0yeGwge1xcbiAgbWF4LXdpZHRoOiAxNTMuNnJlbTtcXG59XCIsXCJAdXNlICcuLi9hYnN0cmFjdHMvJyBhcyBhO1xcblxcbjpyb290IHtcXG4gIC8vIGNvbnRyb2xcXG4gIC0taGVhZGVyLWJnLWNscjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgLS1mb290ZXItYmctY2xyOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICAtLXNpZGViYXItYmctY2xyOiB2YXIoLS1jbHItbmV1dHJhbC0yMDApO1xcbiAgLS1ib2R5LWJnLWNscjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gIC0tdHJhbnNpdGlvbi10aW1lOiA0MDBtcztcXG4gIC0tZm50LXN6LWRlZmF1bHQ6IHZhcigtLXNpemUtNCk7XFxuICAtLWZudC13dC1kZWZhdWx0OiA0MDA7XFxuICAtLWZudC1jbHItZGVmYXVsdDogdmFyKC0tY2xyLWJsYWNrKTtcXG4gIC0tY2xyLXdoaXRlOiB2YXIoLS1jbHItbmV1dHJhbC0xMDApO1xcbiAgLS1jbHItYmxhY2s6IHZhcigtLWNsci1uZXV0cmFsLTgwMCk7XFxuICAtLWRlZmF1bHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xcblxcbiAgLy8gU2V0IDEgcmVtID0gMTBweFxcbiAgZm9udC1zaXplOiA2Mi41JTtcXG5cXG4gIC0tZm50LWZhbS1kZWZhdWx0OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIC0tZm50LXd0LXRoaW46IDMwMDtcXG4gIC0tZm50LXd0LXJlZzogNDAwO1xcbiAgLS1mbnQtd3QtYm9sZDogNzAwO1xcbiAgLS1mbnQtd3QtaGVhdnk6IDkwMDtcXG5cXG4gIC8vIENvbG91cnNcXG4gIC0tY2xyLXByaW1hcnk6ICN7YS4kcm9zZS01MDB9O1xcbiAgLS1jbHItcHJpbWFyeS1saWdodDogI3thLiRyb3NlLTQwMH07XFxuICAtLWNsci1wcmltYXJ5LWRhcms6ICN7YS4kcm9zZS02MDB9O1xcbiAgLS1jbHItcHJpbWFyeS14bGlnaHQ6ICN7YS4kcm9zZS0yMDB9O1xcbiAgLS1jbHItZ3JlZW4tcmVndWxhcjogI3thLiRlbWVyYWxkLTUwMH07XFxuICAtLWNsci1ncmVlbi1saWdodDogI3thLiRlbWVyYWxkLTQwMH07XFxuICAtLWNsci1ncmVlbi1kYXJrOiAje2EuJGVtZXJhbGQtNjAwfTtcXG4gIC0tY2xyLXJlZC1yZWd1bGFyOiAje2EuJHJvc2UtNTAwfTtcXG4gIC0tY2xyLXJlZC1saWdodDogI3thLiRyb3NlLTQwMH07XFxuICAtLWNsci1yZWQtZGFyazogI3thLiRyb3NlLTYwMH07XFxuICAtLWNsci1vcmFuZ2UtcmVndWxhcjogI3thLiRvcmFuZ2UtNTAwfTtcXG4gIC0tY2xyLW9yYW5nZS1kYXJrOiAje2EuJG9yYW5nZS02MDB9O1xcbiAgLS1jbHItb3JhbmdlLWxpZ2h0OiAje2EuJG9yYW5nZS00MDB9O1xcbiAgLS1jbHItd2hpdGU6IHZhcigtLWNsci1uZXV0cmFsLTEwMCk7XFxuICAtLWNsci1ibGFjazogdmFyKC0tY2xyLW5ldXRyYWwtODAwKTtcXG4gIC0tY2xyLW5ldXRyYWwtNTA6ICN7YS4kbmV1dHJhbC01MH07XFxuICAtLWNsci1uZXV0cmFsLTEwMDogI3thLiRuZXV0cmFsLTEwMH07XFxuICAtLWNsci1uZXV0cmFsLTIwMDogI3thLiRuZXV0cmFsLTIwMH07XFxuICAtLWNsci1uZXV0cmFsLTMwMDogI3thLiRuZXV0cmFsLTMwMH07XFxuICAtLWNsci1uZXV0cmFsLTQwMDogI3thLiRuZXV0cmFsLTQwMH07XFxuICAtLWNsci1uZXV0cmFsLTUwMDogI3thLiRuZXV0cmFsLTUwMH07XFxuICAtLWNsci1uZXV0cmFsLTYwMDogI3thLiRuZXV0cmFsLTYwMH07XFxuICAtLWNsci1uZXV0cmFsLTcwMDogI3thLiRuZXV0cmFsLTcwMH07XFxuICAtLWNsci1uZXV0cmFsLTgwMDogI3thLiRuZXV0cmFsLTgwMH07XFxuICAtLWNsci1uZXV0cmFsLTkwMDogI3thLiRuZXV0cmFsLTkwMH07XFxuXFxuICAvLyBTaXppbmdcXG4gIC0tc2l6ZS0xOiAje2EuJHNpemUtMX07XFxuICAtLXNpemUtMjogI3thLiRzaXplLTJ9O1xcbiAgLS1zaXplLTM6ICN7YS4kc2l6ZS0zfTtcXG4gIC0tc2l6ZS00OiAje2EuJHNpemUtNH07XFxuICAtLXNpemUtNTogI3thLiRzaXplLTV9O1xcbiAgLS1zaXplLTY6ICN7YS4kc2l6ZS02fTtcXG4gIC0tc2l6ZS04OiAje2EuJHNpemUtOH07XFxuICAtLXNpemUtNTI6ICN7YS4kc2l6ZS01Mn07XFxuICAtLXNpemUtNzI6ICN7YS4kc2l6ZS03Mn07XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1iZy1jbHIpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm50LWZhbS1kZWZhdWx0KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm50LXN6LWRlZmF1bHQpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC1kZWZhdWx0KTtcXG4gIGNvbG9yOiB2YXIoLS1mbnQtY2xyLWRlZmF1bHQpO1xcbn1cXG5cIixcIkB1c2UgJy4uL2Fic3RyYWN0cy8nIGFzIGE7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4uYnJhbmQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC1ib2xkKTtcXG4gIGZsZXg6IDE7XFxufVxcblwiLFwiLmljb24ge1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG4gICY6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbiAgfVxcbiAgJi02IHtcXG4gICAgd2lkdGg6IHZhcigtLXNpemUtNik7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gIH1cXG4gICYtNSB7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplLTUpO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICB9XFxuICAmLTQge1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZS00KTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgfVxcbiAgJi0zIHtcXG4gICAgd2lkdGg6IHZhcigtLXNpemUtMyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gIH1cXG59XFxuXCIsXCJAdXNlICcuLi9hYnN0cmFjdHMvJyBhcyBhO1xcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1iZy1jbHIpO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTMpO1xcbiAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0yKTtcXG59XFxuXCIsXCJAdXNlICcuLi9hYnN0cmFjdHMvJyBhcyBhO1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICAmLW1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zaXplLTYpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICYtc3ViIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNpemUtMyk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jbHItYmxhY2spO1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zaXplLTQpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2l6ZS0yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAmLXRvcC1iYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxufVxcblxcbi5maWx0ZXItbGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5MDtcXG4gIHRvcDogdmFyKC0tc2l6ZS04KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwtNTApO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNCk7XFxuICB3aWR0aDogdmFyKC0tc2l6ZS01Mik7XFxuICAmLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNpemUtMik7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNpemUtMSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeS14bGlnaHQpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi50YXNrcyB7XFxuICAmLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICYtaGVhZGluZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IHZhcigtLXNpemUtNik7XFxuICB9XFxuICAmLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgfVxcbiAgJi1ub3Rhc2stdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC10aGluKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTYpO1xcbiAgfVxcbiAgJi1jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmVlbi1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgfVxcbiAgJi1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2NoZWNrIGRldGFpbHMnO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0yKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNjAwbXM7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xMDAwcHggMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG4gICAgfVxcblxcbiAgICAmLWNoZWNrYm94IHtcXG4gICAgICBncmlkLWFyZWE6IGNoZWNrO1xcbiAgICAgIG1hcmdpbi1ibG9jazogYXV0bztcXG4gICAgICBtYXJnaW4taW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICAgICB3aWR0aDogMS4xNWVtO1xcbiAgICAgIGhlaWdodDogMS4xNWVtO1xcbiAgICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA3NWVtKTtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgd2lkdGg6IDAuNjVlbTtcXG4gICAgICAgIGhlaWdodDogMC42NWVtO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbiAgICAgIH1cXG4gICAgICAmOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgIH1cXG4gICAgICAmLWNvbXBsZXRlIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmLXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IHZhcigtLXNpemUtNCk7XFxuICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgfVxcbiAgICAmLWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXG4gICAgICBAaW5jbHVkZSBhLmJyZWFrcG9pbnQoc20sIG1pbikge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgJi1kYXRlIHtcXG4gICAgICBncmlkLWFyZWE6IGRhdGU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IHZhcigtLXNpemUtMik7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAmLS1vdmVyZHVlIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jbHItcmVkLXJlZ3VsYXIpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmLXByb2plY3Qge1xcbiAgICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG4gICAgJi1kZXNjcmlwdGlvbiB7XFxuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc2l6ZS00KTtcXG4gICAgICBmb250LXNpemU6IHZhcigtLXNpemUtNCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC10aGluKTtcXG4gICAgfVxcblxcbiAgICAmLWNvbXBsZXRlIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbiAgICB9XFxuICB9XFxuICAmLWRldGFpbHMge1xcbiAgICBncmlkLWFyZWE6IGRldGFpbHM7XFxuXFxuICAgIHBhZGRpbmc6IHZhcigtLXNpemUtNCk7XFxuICB9XFxuICAmLXN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUnICdkYXRlJyAncHJvamVjdCcgJ2J1dHRvbnMnO1xcbiAgICBnYXA6IHZhcigtLXNpemUtNCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mbnQtd3QtdGhpbik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG5cXG4gICAgQGluY2x1ZGUgYS5icmVha3BvaW50KHNtLCBtaW4pIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgYnV0dG9ucycgJ2RhdGUgcHJvamVjdCc7XFxuICAgICAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbmRldGFpbHNbb3Blbl0gPiBzdW1tYXJ5IHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNpemUtNCk7XFxufVxcbi5wcmlvcml0eSB7XFxuICAmLWhpZ2gge1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZS0yKSBzb2xpZCB2YXIoLS1jbHItcmVkLXJlZ3VsYXIpO1xcbiAgfVxcbiAgJi1tZWRpdW0ge1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZS0yKSBzb2xpZCB2YXIoLS1jbHItb3JhbmdlLXJlZ3VsYXIpO1xcbiAgfVxcbiAgJi1sb3cge1xcbiAgICBib3JkZXItbGVmdDogdmFyKC0tc2l6ZS0yKSBzb2xpZCB2YXIoLS1jbHItZ3JlZW4tcmVndWxhcik7XFxuICB9XFxufVxcblxcbi8vIC8qIGxhYmVsOmhhcyhpbnB1dFt0eXBlPSdyYWRpbyddOm5vdCg6Y2hlY2tlZCkpIHtcXG4vLyAgIG9wYWNpdHk6IDAuMztcXG4vLyB9ICovXFxuXFxuaW5wdXRbdHlwZT0ncmFkaW8nXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG5pbnB1dDpoYXMoOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pKTpub3QoOnZhbGlkKSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cIixcIi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuLy8gUmVzcG9uc2l2ZS5zY3NzXFxuLy8gTWVkaWEgUXVlcnkgJiBDbGFtcCBNaXhpbnMgJiBGdW5jdGlvbnNcXG4vLyB2ZXJzaW9uIDEuMSAgMDEvMDcvMjAyMlxcbi8vIEBMZW9uTG9uc2RhbGVcXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcbkB1c2UgJ3Nhc3M6bWF0aCc7XFxuXFxuLy8gRWRpdCB0aGVzZSB2aWV3cG9ydCBicmVha3BvaW50cyB0byB5b3VyIG5lZWRzIChpbiBwaXhlbHMpLlxcbi8vIGRvIG5vdCBpbmNsdWRlIHVuaXRzIC0gdGhpcyB3aWxsIGJyZWFrIG1hdGhcXG5cXG4keHM6IDM3NTtcXG4kc206IDY0MDtcXG4kbWQ6IDc2ODtcXG4kbGc6IDEwMjQ7XFxuJHhsOiAxMjAwO1xcbiR4eGw6IDEyMDE7XFxuXFxuLy8gTWVkaWEgUXVlcnkgbWl4aW4gdXRpbGlzZXMgdGhlIOKAmGVt4oCZIHVuaXQgYW5kIGNsYW1wIHV0aWxpc2VzIOKAmHJlbeKAmVxcblxcbkBmdW5jdGlvbiBjb252ZXJ0UFgoJHB4LCAkdHlwZSkge1xcbiAgQGlmICR0eXBlPT1lbSB7XFxuICAgICR0b2VtOiBtYXRoLmRpdigkcHgsIDE2KTtcXG4gICAgQHJldHVybiAkdG9lbSAqIDFlbTtcXG4gIH0gQGVsc2UgaWYgJHR5cGU9PXJlbSB7XFxuICAgICR0b3JlbTogbWF0aC5kaXYoJHB4LCAxMCk7XFxuICAgIEByZXR1cm4gJHRvcmVtO1xcbiAgfVxcbn1cXG5cXG4vLyBQZXJmb3JtIHNvbWUgcGl4ZWwgY29udmVyc2lvbnMgYW5kIG1hcCByZXN1bHRzXFxuXFxuJGJyZWFrcG9pbnRzOiAoXFxuICAneHMnOiAoXFxuICAgICdtaW4nOiBjb252ZXJ0UFgoJHhzLCBlbSksXFxuICAgICdtYXgnOiBjb252ZXJ0UFgoJHhzIC0gMC4yLCBlbSksXFxuICAgICdyYW5nZSc6IGNvbnZlcnRQWCgkc20gLSAwLjIsIGVtKSxcXG4gICAgJ3JlbSc6IGNvbnZlcnRQWCgkeHMsIHJlbSksXFxuICApLFxcbiAgJ3NtJzogKFxcbiAgICAnbWluJzogY29udmVydFBYKCRzbSwgZW0pLFxcbiAgICAnbWF4JzogY29udmVydFBYKCRzbSAtIDAuMiwgZW0pLFxcbiAgICAncmFuZ2UnOiBjb252ZXJ0UFgoJG1kIC0gMC4yLCBlbSksXFxuICAgICdyZW0nOiBjb252ZXJ0UFgoJHNtLCByZW0pLFxcbiAgKSxcXG4gICdtZCc6IChcXG4gICAgJ21pbic6IGNvbnZlcnRQWCgkbWQsIGVtKSxcXG4gICAgJ21heCc6IGNvbnZlcnRQWCgkbWQgLSAwLjIsIGVtKSxcXG4gICAgJ3JhbmdlJzogY29udmVydFBYKCRsZyAtIDAuMiwgZW0pLFxcbiAgICAncmVtJzogY29udmVydFBYKCRtZCwgcmVtKSxcXG4gICksXFxuICAnbGcnOiAoXFxuICAgICdtaW4nOiBjb252ZXJ0UFgoJGxnLCBlbSksXFxuICAgICdtYXgnOiBjb252ZXJ0UFgoJGxnIC0gMC4yLCBlbSksXFxuICAgICdyYW5nZSc6IGNvbnZlcnRQWCgkeGwgLSAwLjIsIGVtKSxcXG4gICAgJ3JlbSc6IGNvbnZlcnRQWCgkbGcsIHJlbSksXFxuICApLFxcbiAgJ3hsJzogKFxcbiAgICAnbWluJzogY29udmVydFBYKCR4bCwgZW0pLFxcbiAgICAnbWF4JzogY29udmVydFBYKCR4bCAtIDAuMiwgZW0pLFxcbiAgICAncmFuZ2UnOiBjb252ZXJ0UFgoJHh4bCAtIDAuMiwgZW0pLFxcbiAgICAncmVtJzogY29udmVydFBYKCR4bCwgcmVtKSxcXG4gICksXFxuICAneHhsJzogKFxcbiAgICAnbWluJzogY29udmVydFBYKCR4eGwsIGVtKSxcXG4gICAgJ21heCc6IGNvbnZlcnRQWCgkeHhsIC0gMC4yLCBlbSksXFxuICAgICdyZW0nOiBjb252ZXJ0UFgoJHh4bCwgcmVtKSxcXG4gICksXFxuKTtcXG5cXG4vLyBJbnNlcnQgYSBtZWRpYSBxdWVyeSwgZWl0aGVyIGN1c3RvbSBvciBmcm9tIGJyZWFrcG9pbnQgbWFwXFxuXFxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQsICR0eXBlOiAnbWluJykge1xcbiAgLy8gY2hlY2sgbWFwIGZvciBicmVha3BvaW50IGtleVxcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcXG4gICAgJGJyZWFrcG9pbnQtdmFsOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xcbiAgICAkYnJlYWtwb2ludC1taW46IG1hcC1nZXQoJGJyZWFrcG9pbnQtdmFsLCAnbWluJyk7XFxuICAgICRicmVha3BvaW50LW1heDogbWFwLWdldCgkYnJlYWtwb2ludC12YWwsICdtYXgnKTtcXG4gICAgJGJyZWFrcG9pbnQtcmFuZ2U6IG1hcC1nZXQoJGJyZWFrcG9pbnQtdmFsLCAncmFuZ2UnKTtcXG5cXG4gICAgLy8gb2J0YWluIGNvcnJlY3QgcmVzdWx0IGFuZCBpbnNlcnQgbWVkaWEgcXVlcnlcXG5cXG4gICAgQGlmICR0eXBlPT0gJ21pbicge1xcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWluKSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgICB9XFxuICAgIH0gQGVsc2UgaWYgJHR5cGU9PSAnbWF4JyB7XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1tYXgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICAgIH1cXG4gICAgfSBAZWxzZSB7XFxuICAgICAgQGlmICRicmVha3BvaW50PT0gJ3h4bCcge1xcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1taW4pIHtcXG4gICAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgICB9XFxuICAgICAgfSBAZWxzZSB7XFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVha3BvaW50LW1pbikgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LXJhbmdlKSB7XFxuICAgICAgICAgIEBjb250ZW50O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gSW5zZXJ0IG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGN1c3RvbSBicmVha3BvaW50IChub3QgbWFwcGVkKVxcblxcbiAgQGVsc2Uge1xcbiAgICBAaWYgJHR5cGU9PSAnbWluJyB7XFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBjb252ZXJ0UFgoJGJyZWFrcG9pbnQsIGVtKSkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgICAgfVxcbiAgICB9IEBlbHNlIHtcXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IGNvbnZlcnRQWCgkYnJlYWtwb2ludCwgZW0pKSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gSW5zZXJ0IGEgY2xhbXAgZm9yIGFueSBjc3MgcHJvcGVydHkgdGhhdCBhY2NlcHRzIGl0XFxuXFxuQG1peGluIGdldGNsYW1wKCRwcm9wZXJ0eSwgJG1pbnNpemUsICRtYXhzaXplLCAkbWlud2lkdGg6IHhzLCAkbWF4d2lkdGg6IHh4bCkge1xcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJG1pbndpZHRoKSB7XFxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRtYXh3aWR0aCkge1xcbiAgICAgICRtaW53aWR0aC12YWx1ZXM6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbWlud2lkdGgpO1xcbiAgICAgICRtYXh3aWR0aC12YWx1ZXM6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbWF4d2lkdGgpO1xcbiAgICAgICRtaW53OiBtYXAtZ2V0KCRtaW53aWR0aC12YWx1ZXMsIHJlbSk7XFxuICAgICAgJG1heHc6IG1hcC1nZXQoJG1heHdpZHRoLXZhbHVlcywgcmVtKTtcXG4gICAgICAvLyBpbWFnaW5lIGl0ZW1zIHBsb3R0ZWQgb24gbGluZSBncmFwaCBhbmQgY2FsY3VsYXRhZSBzbG9wZVxcbiAgICAgICRzbG9wZTogbWF0aC5kaXYoKCRtYXhzaXplIC0gJG1pbnNpemUpLCAoJG1heHcgLSAkbWludykpO1xcbiAgICAgIC8vIGNhbGN1bGF0ZSB3aGVyZSBsaW5lIGludGVyc2VjdHMgWSBheGlzXFxuICAgICAgJHlpbnQ6ICgwIC0gJG1pbncpICogJHNsb3BlICsgJG1pbnNpemU7XFxuICAgICAgLy8gb3V0cHV0IHJlc3VsdFxcbiAgICAgICN7JHByb3BlcnR5fTogY2xhbXAoXFxuICAgICAgICAkbWluc2l6ZSAqIDFyZW0sXFxuICAgICAgICAoJHlpbnQgKiAxcmVtKSArICgkc2xvcGUgKiAxMDB2dyksXFxuICAgICAgICAkbWF4c2l6ZSAqIDFyZW1cXG4gICAgICApO1xcbiAgICB9IEBlbHNlIHtcXG4gICAgICAkbWlud2lkdGgtdmFsdWVzOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG1pbndpZHRoKTtcXG4gICAgICAkbWludzogbWFwLWdldCgkbWlud2lkdGgtdmFsdWVzLCByZW0pO1xcbiAgICAgICRtYXh3OiBjb252ZXJ0UFgoJG1heHdpZHRoLCByZW0pO1xcblxcbiAgICAgICRzbG9wZTogbWF0aC5kaXYoKCRtYXhzaXplIC0gJG1pbnNpemUpLCAoJG1heHcgLSAkbWludykpO1xcblxcbiAgICAgICR5aW50OiAoMCAtICRtaW53KSAqICRzbG9wZSArICRtaW5zaXplO1xcblxcbiAgICAgICN7JHByb3BlcnR5fTogY2xhbXAoXFxuICAgICAgICAkbWluc2l6ZSAqIDFyZW0sXFxuICAgICAgICAoJHlpbnQgKiAxcmVtKSArICgkc2xvcGUgKiAxMDB2dyksXFxuICAgICAgICAkbWF4c2l6ZSAqIDFyZW1cXG4gICAgICApO1xcbiAgICB9XFxuICB9IEBlbHNlIHtcXG4gICAgJG1pbnc6IGNvbnZlcnRQWCgkbWlud2lkdGgsIHJlbSk7XFxuICAgICRtYXh3OiBjb252ZXJ0UFgoJG1heHdpZHRoLCByZW0pO1xcblxcbiAgICAkc2xvcGU6IG1hdGguZGl2KCgkbWF4c2l6ZSAtICRtaW5zaXplKSwgKCRtYXh3IC0gJG1pbncpKTtcXG5cXG4gICAgJHlpbnQ6ICgwIC0gJG1pbncpICogJHNsb3BlICsgJG1pbnNpemU7XFxuXFxuICAgICN7JHByb3BlcnR5fTogY2xhbXAoXFxuICAgICAgJG1pbnNpemUgKiAxcmVtLFxcbiAgICAgICgkeWludCAqIDFyZW0pICsgKCRzbG9wZSAqIDEwMHZ3KSxcXG4gICAgICAkbWF4c2l6ZSAqIDFyZW1cXG4gICAgKTtcXG4gIH1cXG59XFxuXFxuLy8gY2FsY3VsYXRlIGFuZCBvdXRwdXQgYSBjbGFtcCBpbmxpbmVcXG5cXG5AZnVuY3Rpb24gaW5zZXJ0Q2xhbXAoJG1pbnNpemUsICRtYXhzaXplLCAkbWlud2lkdGgsICRtYXh3aWR0aCkge1xcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJG1pbndpZHRoKSB7XFxuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRtYXh3aWR0aCkge1xcbiAgICAgICRtaW53aWR0aC12YWx1ZXM6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbWlud2lkdGgpO1xcbiAgICAgICRtYXh3aWR0aC12YWx1ZXM6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbWF4d2lkdGgpO1xcbiAgICAgICRtaW53OiBtYXAtZ2V0KCRtaW53aWR0aC12YWx1ZXMsIHJlbSk7XFxuICAgICAgJG1heHc6IG1hcC1nZXQoJG1heHdpZHRoLXZhbHVlcywgcmVtKTtcXG5cXG4gICAgICAkc2xvcGU6IG1hdGguZGl2KCgkbWF4c2l6ZSAtICRtaW5zaXplKSwgKCRtYXh3IC0gJG1pbncpKTtcXG5cXG4gICAgICAkeWludDogKDAgLSAkbWludykgKiAkc2xvcGUgKyAkbWluc2l6ZTtcXG5cXG4gICAgICAvLyBkZWNsYXJlIGFkZGl0aW9uYWwgdmFyaWFibGVzIHNvIHRoYXQgb3V0cHV0IGlzIG1vcmUgcmVhZGFibGVcXG4gICAgICAkY2xhbXBtaW46ICRtaW5zaXplICogMXJlbTtcXG4gICAgICAkY2xhbXBncm93MTogJHlpbnQgKiAxcmVtO1xcbiAgICAgICRjbGFtcGdyb3cyOiAkc2xvcGUgKiAxMDB2dztcXG4gICAgICAkY2xhbXBtYXg6ICRtYXhzaXplICogMXJlbTtcXG5cXG4gICAgICBAcmV0dXJuIGNsYW1wKFxcbiAgICAgICAgI3skY2xhbXBtaW59LFxcbiAgICAgICAgI3skY2xhbXBncm93MX0gKyAjeyRjbGFtcGdyb3cyfSxcXG4gICAgICAgICN7JGNsYW1wbWF4fVxcbiAgICAgICk7XFxuICAgIH0gQGVsc2Uge1xcbiAgICAgICRtaW53aWR0aC12YWx1ZXM6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbWlud2lkdGgpO1xcbiAgICAgICRtaW53OiBtYXAtZ2V0KCRtaW53aWR0aC12YWx1ZXMsIHJlbSk7XFxuICAgICAgJG1heHc6IGNvbnZlcnRQWCgkbWF4d2lkdGgsIHJlbSk7XFxuXFxuICAgICAgJHNsb3BlOiBtYXRoLmRpdigoJG1heHNpemUgLSAkbWluc2l6ZSksICgkbWF4dyAtICRtaW53KSk7XFxuXFxuICAgICAgJHlpbnQ6ICgwIC0gJG1pbncpICogJHNsb3BlICsgJG1pbnNpemU7XFxuXFxuICAgICAgJGNsYW1wbWluOiAkbWluc2l6ZSAqIDFyZW07XFxuICAgICAgJGNsYW1wZ3JvdzE6ICR5aW50ICogMXJlbTtcXG4gICAgICAkY2xhbXBncm93MjogJHNsb3BlICogMTAwdnc7XFxuICAgICAgJGNsYW1wbWF4OiAkbWF4c2l6ZSAqIDFyZW07XFxuXFxuICAgICAgQHJldHVybiBjbGFtcChcXG4gICAgICAgICN7JGNsYW1wbWlufSxcXG4gICAgICAgICN7JGNsYW1wZ3JvdzF9ICsgI3skY2xhbXBncm93Mn0sXFxuICAgICAgICAjeyRjbGFtcG1heH1cXG4gICAgICApO1xcbiAgICB9XFxuICB9IEBlbHNlIHtcXG4gICAgJG1pbnc6IGNvbnZlcnRQWCgkbWlud2lkdGgsIHJlbSk7XFxuICAgICRtYXh3OiBjb252ZXJ0UFgoJG1heHdpZHRoLCByZW0pO1xcblxcbiAgICAkc2xvcGU6IG1hdGguZGl2KCgkbWF4c2l6ZSAtICRtaW5zaXplKSwgKCRtYXh3IC0gJG1pbncpKTtcXG5cXG4gICAgJHlpbnQ6ICgwIC0gJG1pbncpICogJHNsb3BlICsgJG1pbnNpemU7XFxuXFxuICAgICRjbGFtcG1pbjogJG1pbnNpemUgKiAxcmVtO1xcbiAgICAkY2xhbXBncm93MTogJHlpbnQgKiAxcmVtO1xcbiAgICAkY2xhbXBncm93MjogJHNsb3BlICogMTAwdnc7XFxuICAgICRjbGFtcG1heDogJG1heHNpemUgKiAxcmVtO1xcblxcbiAgICBAcmV0dXJuIGNsYW1wKCN7JGNsYW1wbWlufSwgI3skY2xhbXBncm93MX0gKyAjeyRjbGFtcGdyb3cyfSwgI3skY2xhbXBtYXh9KTtcXG4gIH1cXG59XFxuXCIsXCJAdXNlICcuLi9hYnN0cmFjdHMvJyBhcyBhO1xcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJnLWNscik7XFxuICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG59XFxuXCIsXCJAdXNlICcuLi9hYnN0cmFjdHMvJyBhcyBhO1xcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICYtYnVyZ2VyIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXNpemUtNCk7XFxuXFxuICAgIEBpbmNsdWRlIGEuYnJlYWtwb2ludChsZywgbWluKSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbiAgJi1pY29uLW9ubHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgJi1uZXctcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNpemUtMSk7XFxuICAgIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMyk7XFxuICAgIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWdyZWVuLXJlZ3VsYXIpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgfVxcbiAgJi10b2dnbGUtcHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc2l6ZS0yKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc2l6ZS0zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbiAgICAmLXRleHQge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5LWRhcmspO1xcbiAgICB9XFxuICB9XFxuICAmLW5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYmxvY2s6IHZhcigtLXNpemUtMyk7XFxuICAgIHBhZGRpbmctaW5saW5lOiB2YXIoLS1zaXplLTQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItYmxhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1lKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JlZW4tcmVndWxhcik7XFxuICAgICAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICAgIH1cXG4gIH1cXG4gICYtdGFza2xpc3Qge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cmVtO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbiAgICB9XFxuICB9XFxuICAmLWZvcm0ge1xcbiAgICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS00KTtcXG4gICAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2l6ZS0xKTtcXG4gIH1cXG4gICYtcHJvamVjdC1kZWxldGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cmVtO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zaXplLTEpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXJlZC1yZWd1bGFyKTtcXG4gICAgICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gICAgfVxcbiAgfVxcbiAgJi0tcmVkIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXJlZC1yZWd1bGFyKTtcXG4gICAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1yZWQtZGFyayk7XFxuICAgIH1cXG4gIH1cXG4gICYtLW9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1vcmFuZ2UtcmVndWxhcik7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItb3JhbmdlLWRhcmspO1xcbiAgICB9XFxuICB9XFxuICAmLS1ncmVlbiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmVlbi1yZWd1bGFyKTtcXG4gICAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmVlbi1kYXJrKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkB1c2UgJy4uL2Fic3RyYWN0cy8nIGFzIGE7XFxuLnNpZGViYXIge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBnYXA6IHZhcigtLXNpemUtMik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJnLWNscik7XFxuICBjb2xvcjogdmFyKC0tY2xyLWJsYWNrKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiB2YXIoLS1zaXplLTcyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNpemUtNik7XFxuXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA2MDBtcztcXG4gIHotaW5kZXg6IDEwMDtcXG5cXG4gIEBpbmNsdWRlIGEuYnJlYWtwb2ludChsZywgbWF4KSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gIH1cXG4gICYtaGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgJi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNpemUtMik7XFxuICB9XFxuICAmLWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTMpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWUpO1xcbiAgICBwYWRkaW5nLWlubGluZTogdmFyKC0tc2l6ZS0zKTtcXG4gICAgcGFkZGluZy1ibG9jazogdmFyKC0tc2l6ZS0zKTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMjUwcHggMCAwIDAgdmFyKC0tY2xyLXByaW1hcnkteGxpZ2h0KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkB1c2UgJy4uL2Fic3RyYWN0cy8nIGFzIGE7XFxuXFxuLm1vZGFsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogbWluKDc2LjhyZW0sIDkwdncpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtc2hhZG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxuICAmOmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWJsYWNrKTtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgfVxcbiAgJi1oZWFkZXIge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zaXplLTQpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YVIoLS1jbHItcHJpbWFyeSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1zaXplLTUpO1xcbiAgfVxcbiAgJi1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogdmFyKC0tc2l6ZS00KTtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUnICdkZXNjJyAncHJpbycgJ3Byb2plY3QnICdkYXRlJyAnYnV0dG9ucyc7XFxuXFxuICAgIEBpbmNsdWRlIGEuYnJlYWtwb2ludChsZywgbWluKSB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgdGl0bGUnICdkZXNjIGRlc2MnICdwcmlvIHByb2plY3QnICdkYXRlIGRhdGUnICdidXR0b25zIGJ1dHRvbnMnO1xcbiAgICB9XFxuXFxuICAgICYtaXRlbS13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZ2FwOiB2YXIoLS1zaXplLTMpO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcbiAgfVxcbiAgJi1idXR0b24td3JhcHBlciB7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOiB2YXIoLS1zaXplLTIpO1xcbiAgfVxcbiAgJi1pbnB1dCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNpemUtMik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgJi1sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mbnQtd3QtdGhpbik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc2l6ZS0zKTtcXG4gIH1cXG4gICYtcmFkaW8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAmLWxhYmVsIHtcXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgcGFkZGluZzogdmFyKC0tc2l6ZS0yKTtcXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zaXplLTEpO1xcbiAgICB9XFxuICAgICYtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IHZhcigtLXNpemUtMSk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuICB9XFxuICAmLXRhc2sge1xcbiAgICAmLXRpdGxlIHtcXG4gICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICB9XFxuICAgICYtZGF0ZSB7XFxuICAgICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICB9XFxuICAgICYtcHJvamVjdCB7XFxuICAgICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcbiAgICB9XFxuICAgICYtZGVzYyB7XFxuICAgICAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNpemUtMik7XFxuICAgIH1cXG4gICAgJi1wcmlvIHtcXG4gICAgICBncmlkLWFyZWE6IHByaW87XFxuICAgIH1cXG4gIH1cXG4gICYtcHJvamVjdCB7XFxuICAgICYtdGl0bGUge1xcbiAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIH1cXG4gIH1cXG59XFxuc2VsZWN0LFxcbmlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItbmV1dHJhbC0zMDApO1xcbn1cXG46OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbC00MDApO1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBtYXJnaW46IHZhcigtLXNpemUtNCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zaXplLTIpO1xcbiAgb3V0bGluZTogMnB4IGRvdHRlZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBmb250LXNpemU6IHZhcigtLXNpemUtMyk7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZudC13dC10aGluKTtcXG59XFxuLmludmFsaWQge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuZGlhbG9nID4gcFtkYXRhLWxhYmVsPSdmb3JtLXdhcm5pbmcnXTplbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vLyBmb3JtOmludmFsaWQgI3N1Ym1pdCB7XFxuLy8gICBvcGFjaXR5OiAwLjM7XFxuLy8gICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4vLyB9XFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNpemUtMSk7XFxufVxcblxcbi8vIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pOm5vdCg6dmFsaWQpIHtcXG4vLyAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeS1saWdodCk7XFxuLy8gfVxcblxcbi8vIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pOm5vdCg6dmFsaWQpIHtcXG4vLyAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeS1saWdodCk7XFxuLy8gfVxcblxcbmlucHV0Omhhcyg6bm90KDpwbGFjZWhvbGRlci1zaG93bik6bm90KDp2YWxpZCkpIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeS1saWdodCk7XFxufVxcblwiLFwiLnZpc3VhbGx5LWhpZGRlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgJi1zbSB7XFxuICAgIG1heC13aWR0aDogNjRyZW07XFxuICB9XFxuICAmLW1kIHtcXG4gICAgbWF4LXdpZHRoOiA3Ni44cmVtO1xcbiAgfVxcbiAgJi1sZyB7XFxuICAgIG1heC13aWR0aDogMTAyLjRyZW07XFxuICB9XFxuICAmLXhsIHtcXG4gICAgbWF4LXdpZHRoOiAxMjhyZW07XFxuICB9XFxuICAmLTJ4bCB7XFxuICAgIG1heC13aWR0aDogMTUzLjZyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlOiBzdHJpY3QnO1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1sgTU9ERUwgXSMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XHJcblx0XHR0aGlzLnByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW1xyXG5cdFx0XHR7IGlkOiAxLCBuYW1lOiAndW5jYXRlZ29yaXNlZCcgfSxcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcclxuXHRnZXQgX3Byb2plY3RzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvamVjdHM7XHJcblx0fVxyXG5cclxuXHRnZXRUYXNrVG9FZGl0KGlkKSB7XHJcblx0XHRjb25zdCBlZGl0dGFzayA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcblx0XHRyZXR1cm4gZWRpdHRhc2s7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY29tcGFyZSA9IChhLCBiKSA9PiB7XHJcblx0XHRpZiAoYS5jb21wbGV0ZSA+IGIuY29tcGxldGUpIHJldHVybiAxO1xyXG5cdFx0aWYgKGEuY29tcGxldGUgPCBiLmNvbXBsZXRlKSByZXR1cm4gLTE7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUYXNrTGlzdChmaWx0ZXIpIHtcclxuXHRcdGxldCB0YXNrcztcclxuXHRcdGlmIChmaWx0ZXIgPT09ICdhbGwnKSB7XHJcblx0XHRcdHRhc2tzID0gdGhpcy50YXNrcztcclxuXHRcdH0gZWxzZSBpZiAoZmlsdGVyID09PSAndG9kYXknKSB7XHJcblx0XHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuXHRcdFx0dGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcihcclxuXHRcdFx0XHQodGFzaykgPT4gbmV3IERhdGUodGFzay5kdWVkYXRlKS50b0RhdGVTdHJpbmcoKSA9PT0gdG9kYXlcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSBpZiAoZmlsdGVyID09PSAndXBjb21pbmcnKSB7XHJcblx0XHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuXHRcdFx0dGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcihcclxuXHRcdFx0XHQodGFzaykgPT4gbmV3IERhdGUodGFzay5kdWVkYXRlKS50b0RhdGVTdHJpbmcoKSA+IHRvZGF5XHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ292ZXJkdWUnKSB7XHJcblx0XHRcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKTtcclxuXHRcdFx0dGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcihcclxuXHRcdFx0XHQodGFzaykgPT5cclxuXHRcdFx0XHRcdHRvZGF5ID4gbmV3IERhdGUodGFzay5kdWVkYXRlKS50b0RhdGVTdHJpbmcoKSAmJiAhdGFzay5jb21wbGV0ZVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIGlmIChmaWx0ZXIgPT09ICdIaWdoJyB8fCBmaWx0ZXIgPT09ICdNZWRpdW0nIHx8IGZpbHRlciA9PT0gJ0xvdycpIHtcclxuXHRcdFx0dGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcmlvcml0eSA9PT0gZmlsdGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJvamVjdCA9PT0gZmlsdGVyKTtcclxuXHRcdH1cclxuXHRcdHRhc2tzLnNvcnQodGhpcy5jb21wYXJlKTtcclxuXHRcdHRoaXMub25UYXNrQ2hhbmdlKHRhc2tzKTtcclxuXHR9XHJcblxyXG5cdGV2ZW50T25UYXNrQ2hhbmdlKGhhbmRsZXIpIHtcclxuXHRcdHRoaXMub25UYXNrQ2hhbmdlID0gaGFuZGxlcjtcclxuXHR9XHJcblxyXG5cdGV2ZW50T25Qcm9qZWN0Q2hhbmdlKGhhbmRsZXIpIHtcclxuXHRcdHRoaXMub25Qcm9qZWN0Q2hhbmdlID0gaGFuZGxlcjtcclxuXHR9XHJcblxyXG5cdGNvbW1pdFRhc2tDaGFuZ2UodGFza3MpIHtcclxuXHRcdHRoaXMub25UYXNrQ2hhbmdlKHRhc2tzKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcblx0fVxyXG5cclxuXHRjb21taXRQcm9qZWN0Q2hhbmdlKHByb2plY3RzKSB7XHJcblx0XHR0aGlzLm9uUHJvamVjdENoYW5nZShwcm9qZWN0cyk7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTGlzdHMoZGV0YWlscywgdHlwZSkge1xyXG5cdFx0aWYgKHR5cGUgPT09ICd0YXNrJykge1xyXG5cdFx0XHR0aGlzLmFkZFRhc2soZGV0YWlscyk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xyXG5cdFx0XHR0aGlzLmFkZFByb2plY3QoZGV0YWlscyk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09ICdlZGl0Jykge1xyXG5cdFx0XHR0aGlzLmVkaXRUYXNrKGRldGFpbHMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkVGFzayhuZXdUYXNrKSB7XHJcblx0XHRjb25zdCB0YXNrID0ge1xyXG5cdFx0XHRpZDogdGhpcy50YXNrcy5sZW5ndGggPiAwID8gdGhpcy50YXNrc1t0aGlzLnRhc2tzLmxlbmd0aCAtIDFdLmlkICsgMSA6IDEsXHJcblx0XHRcdHRhc2s6IG5ld1Rhc2sudGl0bGUsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBuZXdUYXNrLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRkdWVkYXRlOiBuZXdUYXNrLmRhdGUsXHJcblx0XHRcdHByaW9yaXR5OiBuZXdUYXNrLnByaW9yaXR5LFxyXG5cdFx0XHRwcm9qZWN0OiBuZXdUYXNrLnByb2plY3QsXHJcblx0XHRcdGNvbXBsZXRlOiBmYWxzZSxcclxuXHRcdH07XHJcblx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcblx0XHR0aGlzLmNvbW1pdFRhc2tDaGFuZ2UodGhpcy50YXNrcyk7XHJcblx0fVxyXG5cclxuXHRlZGl0VGFzayhlZGl0ZWRUYXNrKSB7XHJcblx0XHR0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5tYXAoKHRhc2spID0+XHJcblx0XHRcdHRhc2suaWQgPT09IGVkaXRlZFRhc2suaWRcclxuXHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdGlkOiB0YXNrLmlkLFxyXG5cdFx0XHRcdFx0dGFzazogZWRpdGVkVGFzay50aXRsZSxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBlZGl0ZWRUYXNrLmRlc2NyaXB0aW9uLFxyXG5cdFx0XHRcdFx0ZHVlZGF0ZTogZWRpdGVkVGFzay5kYXRlLFxyXG5cdFx0XHRcdFx0cHJpb3JpdHk6IGVkaXRlZFRhc2sucHJpb3JpdHksXHJcblx0XHRcdFx0XHRwcm9qZWN0OiBlZGl0ZWRUYXNrLnByb2plY3QsXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogdGFzay5jb21wbGV0ZSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0OiB0YXNrXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5jb21taXRUYXNrQ2hhbmdlKHRoaXMudGFza3MpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlVGFzayhpZCkge1xyXG5cdFx0dGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCk7XHJcblx0XHR0aGlzLmNvbW1pdFRhc2tDaGFuZ2UodGhpcy50YXNrcyk7XHJcblx0fVxyXG5cclxuXHRjb21wbGV0ZVRhc2soaWQpIHtcclxuXHRcdHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLm1hcCgodGFzaykgPT5cclxuXHRcdFx0dGFzay5pZCA9PT0gaWRcclxuXHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdGlkOiB0YXNrLmlkLFxyXG5cdFx0XHRcdFx0dGFzazogdGFzay50YXNrLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0XHRkdWVkYXRlOiB0YXNrLmR1ZWRhdGUsXHJcblx0XHRcdFx0XHRwcmlvcml0eTogdGFzay5wcmlvcml0eSxcclxuXHRcdFx0XHRcdHByb2plY3Q6IHRhc2sucHJvamVjdCxcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiAhdGFzay5jb21wbGV0ZSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0OiB0YXNrXHJcblx0XHQpO1xyXG5cdFx0dGhpcy50YXNrcy5zb3J0KHRoaXMuY29tcGFyZSk7XHJcblx0XHR0aGlzLmNvbW1pdFRhc2tDaGFuZ2UodGhpcy50YXNrcyk7XHJcblx0fVxyXG5cclxuXHRhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcclxuXHRcdGNvbnN0IHByb2plY3QgPSB7XHJcblx0XHRcdGlkOlxyXG5cdFx0XHRcdHRoaXMucHJvamVjdHMubGVuZ3RoID4gMFxyXG5cdFx0XHRcdFx0PyB0aGlzLnByb2plY3RzW3RoaXMucHJvamVjdHMubGVuZ3RoIC0gMV0uaWQgKyAxXHJcblx0XHRcdFx0XHQ6IDEsXHJcblx0XHRcdG5hbWU6IG5ld1Byb2plY3QsXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG5cdFx0dGhpcy5jb21taXRQcm9qZWN0Q2hhbmdlKHRoaXMucHJvamVjdHMpO1xyXG5cdH1cclxuXHJcblx0ZGVsZXRlUHJvamVjdChpZCkge1xyXG5cdFx0Y29uc3QgW3RvRGVsZXRlXSA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XHJcblx0XHR0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5tYXAoKHRhc2spID0+XHJcblx0XHRcdHRhc2sucHJvamVjdCA9PT0gdG9EZWxldGUubmFtZVxyXG5cdFx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0aWQ6IHRhc2suaWQsXHJcblx0XHRcdFx0XHR0YXNrOiB0YXNrLnRhc2ssXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcclxuXHRcdFx0XHRcdGR1ZWRhdGU6IHRhc2suZHVlZGF0ZSxcclxuXHRcdFx0XHRcdHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxyXG5cdFx0XHRcdFx0cHJvamVjdDogJ3VuY2F0ZWdvcmlzZWQnLFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6IHRhc2suY29tcGxldGUsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDogdGFza1xyXG5cdFx0KTtcclxuXHRcdHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gaWQpO1xyXG5cdFx0dGhpcy5jb21taXRUYXNrQ2hhbmdlKHRoaXMudGFza3MpO1xyXG5cdFx0dGhpcy5jb21taXRQcm9qZWN0Q2hhbmdlKHRoaXMucHJvamVjdHMpO1xyXG5cdFx0dGhpcy5maWx0ZXJUYXNrTGlzdCgnYWxsJyk7XHJcblx0fVxyXG59IiwiJ3VzZTogc3RyaWN0JztcclxuXHJcbmltcG9ydCBzcHJpdGUgZnJvbSAnLi9hc3NldHMvc3ByaXRlLnN2Zyc7XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjWyBWSUVXIF0jIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XHJcblx0c3RhdGljIGNyZWF0ZUVsZSguLi5hcmdzKSB7XHJcblx0XHRjb25zdCBbZWxlLCAuLi5zdHlsZXNdID0gYXJncztcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcblx0XHRzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZSkpO1xyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlU1ZHKC4uLmFyZ3MpIHtcclxuXHRcdGNvbnN0IFtpY29uLCAuLi5zdHlsZXNdID0gYXJncztcclxuXHRcdGNvbnN0IHczbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG5cdFx0Y29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHczbnMsICdzdmcnKTtcclxuXHRcdGNvbnN0IHVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh3M25zLCAndXNlJyk7XHJcblx0XHR1c2Uuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7c3ByaXRlfSNpY29uLSR7aWNvbn1gKTtcclxuXHRcdHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4gc3ZnLmNsYXNzTGlzdC5hZGQoc3R5bGUpKTtcclxuXHRcdHN2Zy5hcHBlbmQodXNlKTtcclxuXHRcdHJldHVybiBzdmc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZmluZEVsZShzZWxlY3Rvcikge1xyXG5cdFx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZmluZEVsZXMoc2VsZWN0b3IpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcdHJldHVybiBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNhcGl0YWxpc2Uoc3RyKSB7XHJcblx0XHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNsZWFyID0gKHRhcmdldCkgPT4ge1xyXG5cdFx0d2hpbGUgKHRhcmdldC5maXJzdEVsZW1lbnRDaGlsZCkgdGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5oZWFkZXIgPSBWaWV3LmZpbmRFbGUoJ2hlYWRlcicpO1xyXG5cdFx0dGhpcy5uYXZDb250YWluZXIgPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwibmF2LWNvbnRhaW5lclwiXScpO1xyXG5cdFx0dGhpcy5zaWRlYmFyID0gVmlldy5maW5kRWxlKCdbZGF0YS1sYWJlbD1cIm5hdi1saXN0XCJdJyk7XHJcblx0XHR0aGlzLmJ1cmdlckJ0biA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJ0b2dnbGUtbmF2aWdhdGlvblwiXScpO1xyXG5cclxuXHRcdC8vICMjIyMjIyMjIyMgWyBORVcgQlVUVE9OUyBdXHJcblx0XHR0aGlzLm5ld1Byb2plY3RCdG4gPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwiYWRkLXByb2plY3QtYnRuXCJdJyk7XHJcblx0XHR0aGlzLm5ld1Rhc2tCdG4gPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwiYWRkLXRhc2stYnRuXCJdJyk7XHJcblxyXG5cdFx0Ly8gIyMjIyMjIyMjIyBbIFRBU0sgTElTVCBdXHJcblx0XHR0aGlzLmxhYmVsVGFza0xpc3RIZWFkaW5nID0gVmlldy5maW5kRWxlKCdbZGF0YS1sYWJlbD1cInRhc2stbGlzdC10aXRsZVwiXScpO1xyXG5cdFx0dGhpcy50YXNrTGlzdCA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJ0YXNrLWxpc3RcIl0nKTtcclxuXHRcdHRoaXMuZmlsdGVyQnRuID0gVmlldy5maW5kRWxlKCdbZGF0YS1sYWJlbD1cImZpbHRlci1idXR0b25cIl0nKTtcclxuXHRcdHRoaXMuZmlsdGVyTGlzdCA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJmaWx0ZXItbGlzdFwiXScpO1xyXG5cclxuXHRcdC8vICMjIyMjIyMjIyMgWyBQUk9KRUNUIExJU1QgXVxyXG5cdFx0dGhpcy5wcm9qZWN0QnRuID0gVmlldy5maW5kRWxlKCdbZGF0YS1sYWJlbD1cInByb2plY3RzLWJ1dHRvblwiXScpO1xyXG5cdFx0dGhpcy5wcm9qZWN0TGlzdCA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJwcm9qZWN0LWxpc3RcIl0nKTtcclxuXHJcblx0XHQvLyAjIyMjIyMjIyMjWyBNT0RBTCBdXHJcblx0XHR0aGlzLm1vZGFsVGl0bGUgPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwibW9kYWwtdGl0bGVcIl0nKTtcclxuXHRcdHRoaXMubW9kYWwgPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwibW9kYWxcIl0nKTtcclxuXHRcdHRoaXMuZm9ybSA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJtb2RhbC10YXNrLWZvcm1cIl0nKTtcclxuXHRcdHRoaXMud2FybmluZyA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJmb3JtLXdhcm5pbmdcIl0nKTtcclxuXHR9XHJcblxyXG5cdC8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIFsgRk9STSBFVkFMVUFUSU9OIF0gIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5cdHRhc2tEZXRhaWxzKCkge1xyXG5cdFx0Y29uc3QgdGl0bGUgPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwibW9kYWwtdGFzay10aXRsZVwiXScpO1xyXG5cdFx0Y29uc3QgZGF0ZSA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJtb2RhbC10YXNrLWRhdGVcIl0nKTtcclxuXHRcdGNvbnN0IHByb2plY3QgPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwibW9kYWwtdGFzay1wcm9qZWN0XCJdJyk7XHJcblx0XHRjb25zdCBwcmlvcml0aWVzID0gVmlldy5maW5kRWxlcygnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdJyk7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJtb2RhbC10YXNrLWRlc2NyaXB0aW9uXCJdJyk7XHJcblx0XHRsZXQgZGV0YWlscztcclxuXHRcdGxldCBzZWxlY3RlZFByaW9yaXR5O1xyXG5cdFx0cHJpb3JpdGllcy5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xyXG5cdFx0XHRpZiAocHJpb3JpdHkuY2hlY2tlZCkge1xyXG5cdFx0XHRcdHNlbGVjdGVkUHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRsZXQgd2FybmluZztcclxuXHRcdGlmICghdGl0bGUudmFsdWUgJiYgIWRhdGUudmFsdWUpIHtcclxuXHRcdFx0d2FybmluZyA9ICdUaXRsZSBhbmQgZHVlIGRhdGUgYXJlIHJlcXVpcmVkISc7XHJcblx0XHRcdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcclxuXHRcdFx0ZGF0ZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcblx0XHR9IGVsc2UgaWYgKCF0aXRsZS52YWx1ZSkge1xyXG5cdFx0XHR3YXJuaW5nID0gJ1RpdGxlIGlzIHJlcXVpcmVkISc7XHJcblx0XHRcdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcclxuXHRcdFx0ZGF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XHJcblx0XHR9IGVsc2UgaWYgKCFkYXRlLnZhbHVlKSB7XHJcblx0XHRcdHdhcm5pbmcgPSAnRGF0ZSBpcyByZXF1aXJlZCEnO1xyXG5cdFx0XHR0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XHJcblx0XHRcdGRhdGUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG5cdFx0fSBlbHNlIGlmIChuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgPiBuZXcgRGF0ZShkYXRlLnZhbHVlKS50b0lTT1N0cmluZygpKSB7XHJcblx0XHRcdHdhcm5pbmcgPSAnRGF0ZSBjYW5ub3QgYmUgaW4gdGhlIHBhc3QhJztcclxuXHRcdFx0dGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xyXG5cdFx0XHRkYXRlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcclxuXHRcdH1cclxuXHRcdGlmICh3YXJuaW5nKSB7XHJcblx0XHRcdHRoaXMud2FybmluZy50ZXh0Q29udGVudCA9IHdhcm5pbmc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLndhcm5pbmcudGV4dENvbnRlbnQgPSAnJztcclxuXHRcdFx0ZGV0YWlscyA9IHtcclxuXHRcdFx0XHR0aXRsZTogdGl0bGUudmFsdWUsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlIHx8ICdObyBkZXNjcmlwdGlvbicsXHJcblx0XHRcdFx0ZGF0ZTogZGF0ZS52YWx1ZSxcclxuXHRcdFx0XHRwcmlvcml0eTogc2VsZWN0ZWRQcmlvcml0eSB8fCAnTG93JyxcclxuXHRcdFx0XHRwcm9qZWN0OiBwcm9qZWN0LnZhbHVlLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRldGFpbHM7XHJcblx0fVxyXG5cclxuXHRwcm9qZWN0RGV0YWlscygpIHtcclxuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IFZpZXcuZmluZEVsZSgnW2RhdGEtbGFiZWw9XCJwcm9qZWN0LXRpdGxlXCJdJyk7XHJcblx0XHRsZXQgd2FybmluZztcclxuXHRcdGlmICghcHJvamVjdFRpdGxlLnZhbHVlKSB7XHJcblx0XHRcdHdhcm5pbmcgPSAnUHJvamVjdCB0aXRsZSBpcyByZXF1aXJlZCc7XHJcblx0XHRcdHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHMoKTtcclxuXHRcdFx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHRcdGlmIChwcm9qZWN0Lm5hbWUgPT09IHByb2plY3RUaXRsZS52YWx1ZSkge1xyXG5cdFx0XHRcdFx0d2FybmluZyA9ICdQcm9qZWN0IGFscmVhZHkgZXhpc3RzLiBDaG9vc2UgYW5vdGhlciBuYW1lJztcclxuXHRcdFx0XHRcdHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmICh3YXJuaW5nKSB7XHJcblx0XHRcdHRoaXMud2FybmluZy50ZXh0Q29udGVudCA9IHdhcm5pbmc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLndhcm5pbmcudGV4dENvbnRlbnQgPSAnJztcclxuXHRcdH1cclxuXHRcdHJldHVybiBwcm9qZWN0VGl0bGUudmFsdWU7XHJcblx0fVxyXG5cclxuXHQvLyAjIyMjIyMjIyMjIyMjIyMjIyMjI1sgRE9NIFRPR0dMRVMgXSAjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHRldmVudFRvZ2dsZU5hdiA9ICgpID0+XHJcblx0XHR0aGlzLmJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTmF2KTtcclxuXHJcblx0ZXZlbnRUb2dnbGVGaWx0ZXIgPSAoKSA9PlxyXG5cdFx0dGhpcy5maWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUZpbHRlcik7XHJcblxyXG5cdGV2ZW50VG9nZ2xlUHJvamVjdHMgPSAoKSA9PlxyXG5cdFx0dGhpcy5wcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQcm9qZWN0cyk7XHJcblxyXG5cdHRvZ2dsZU5hdiA9ICgpID0+IHRoaXMubmF2Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3NpZGViYXItaGlkZGVuJyk7XHJcblxyXG5cdHRvZ2dsZUZpbHRlciA9ICgpID0+IHRoaXMuZmlsdGVyTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuXHJcblx0dG9nZ2xlUHJvamVjdHMgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBleHBhbmRlZEljb24gPSBWaWV3LmZpbmRFbGUoJ1tkYXRhLWxhYmVsPVwiZXhwYW5kLWljb25cIl0nKTtcclxuXHRcdGlmICh0aGlzLnByb2plY3RMaXN0Lmhhc0F0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJykpIHtcclxuXHRcdFx0dGhpcy5wcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuXHRcdFx0ZXhwYW5kZWRJY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke3Nwcml0ZX0jaWNvbi1leHBhbmRgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcclxuXHRcdFx0ZXhwYW5kZWRJY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke3Nwcml0ZX0jaWNvbi1zaHJpbmtgKTtcclxuXHRcdH1cclxuXHRcdHRoaXMucHJvamVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcblx0XHR0aGlzLnByb2plY3RMaXN0LnRvZ2dsZUF0dHJpYnV0ZSgnZGF0YS12aXNpYmxlJyk7XHJcblx0fTtcclxuXHJcblx0Ly8gIyMjIyMjIyMjIyMjIyMjIyMjIFsgRE9NIElOSkVDVElPTiBdICMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cdGRpc3BsYXlUYXNrcyh0YXNrcykge1xyXG5cdFx0Vmlldy5jbGVhcih0aGlzLnRhc2tMaXN0KTtcclxuXHRcdGlmICghdGFza3MubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IG1lc3NhZ2UgPSBWaWV3LmNyZWF0ZUVsZSgncCcsICd0YXNrcy1ub3Rhc2stdGV4dCcpO1xyXG5cdFx0XHRtZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIHRhc2tzLCBnbyB0YWtlIGEgd2Fsayc7XHJcblx0XHRcdHRoaXMudGFza0xpc3QuYXBwZW5kKG1lc3NhZ2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFsYXJtSWNvbiA9IFZpZXcuY3JlYXRlU1ZHKCdhbGFybScsICdpY29uJywgJ2ljb24tNCcpO1xyXG5cdFx0XHRcdGNvbnN0IGxhYmVsSWNvbiA9IFZpZXcuY3JlYXRlU1ZHKCdsYWJlbCcsICdpY29uJywgJ2ljb24tNCcpO1xyXG5cdFx0XHRcdGNvbnN0IGRlbGV0ZUljb24gPSBWaWV3LmNyZWF0ZVNWRygnZGVsZXRlJywgJ2ljb24nLCAnaWNvbi01Jyk7XHJcblx0XHRcdFx0Y29uc3QgZWRpdEljb24gPSBWaWV3LmNyZWF0ZVNWRygnZWRpdCcsICdpY29uJywgJ2ljb24tNScpO1xyXG5cdFx0XHRcdGNvbnN0IHRhc2tFbGVtZW50ID0gVmlldy5jcmVhdGVFbGUoJ2xpJywgJ3Rhc2tzLWxpc3QtaXRlbScpO1xyXG5cdFx0XHRcdHRhc2tFbGVtZW50LmRhdGFzZXQudGFza2lkID0gdGFzay5pZDtcclxuXHRcdFx0XHRjb25zdCBkZXRhaWxzRWxlbWVudCA9IFZpZXcuY3JlYXRlRWxlKCdkZXRhaWxzJywgJ3Rhc2tzLWRldGFpbHMnKTtcclxuXHRcdFx0XHRjb25zdCBzdW1tYXJ5RWxlbWVudCA9IFZpZXcuY3JlYXRlRWxlKCdzdW1tYXJ5JywgJ3Rhc2tzLXN1bW1hcnknKTtcclxuXHRcdFx0XHRpZiAodGFzay5wcmlvcml0eSA9PT0gJ0hpZ2gnKVxyXG5cdFx0XHRcdFx0dGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktaGlnaCcpO1xyXG5cdFx0XHRcdGlmICh0YXNrLnByaW9yaXR5ID09PSAnTWVkaXVtJylcclxuXHRcdFx0XHRcdHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LW1lZGl1bScpO1xyXG5cdFx0XHRcdGlmICh0YXNrLnByaW9yaXR5ID09PSAnTG93JykgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbG93Jyk7XHJcblx0XHRcdFx0Y29uc3QgdGFza1RleHQgPSBWaWV3LmNyZWF0ZUVsZSgnc3BhbicsICd0YXNrcy1saXN0LWl0ZW0tdGl0bGUnKTtcclxuXHRcdFx0XHR0YXNrVGV4dC50ZXh0Q29udGVudCA9IHRhc2sudGFzaztcclxuXHRcdFx0XHRjb25zdCBkZXNjcmlwdGlvblRleHQgPSBWaWV3LmNyZWF0ZUVsZShcclxuXHRcdFx0XHRcdCdwJyxcclxuXHRcdFx0XHRcdCd0YXNrcy1saXN0LWl0ZW0tZGVzY3JpcHRpb24nXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRkZXNjcmlwdGlvblRleHQudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG5cdFx0XHRcdGNvbnN0IHRhc2tEYXRlID0gVmlldy5jcmVhdGVFbGUoJ3NwYW4nLCAndGFza3MtbGlzdC1pdGVtLWRhdGUnKTtcclxuXHRcdFx0XHRpZiAobmV3IERhdGUoKS50b0lTT1N0cmluZygpID4gbmV3IERhdGUodGFzay5kdWVkYXRlKS50b0lTT1N0cmluZygpKSB7XHJcblx0XHRcdFx0XHRjb25zdCBkYXlzID0gTWF0aC5yb3VuZChcclxuXHRcdFx0XHRcdFx0TWF0aC5hYnMoXHJcblx0XHRcdFx0XHRcdFx0KG5ldyBEYXRlKCkgLSBuZXcgRGF0ZSh0YXNrLmR1ZWRhdGUpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSBgJHtkYXlzfSAke2RheXMgPiAxID8gJ2RheXMnIDogJ2RheSd9IG92ZXJkdWVgO1xyXG5cdFx0XHRcdFx0aWYgKCF0YXNrLmNvbXBsZXRlKVxyXG5cdFx0XHRcdFx0XHR0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrcy1saXN0LWl0ZW0tZGF0ZS0tb3ZlcmR1ZScpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoXHJcblx0XHRcdFx0XHRuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpID09PSBuZXcgRGF0ZSh0YXNrLmR1ZWRhdGUpLnRvRGF0ZVN0cmluZygpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9ICdUb2RheSEnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb25zdCBkYXlzID0gTWF0aC5yb3VuZChcclxuXHRcdFx0XHRcdFx0TWF0aC5hYnMoXHJcblx0XHRcdFx0XHRcdFx0KG5ldyBEYXRlKHRhc2suZHVlZGF0ZSkgLSBuZXcgRGF0ZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0aWYgKGRheXMgPT09IDApIHtcclxuXHRcdFx0XHRcdFx0dGFza0RhdGUudGV4dENvbnRlbnQgPSAnRHVlIHRvbW9ycm93JztcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRhc2tEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVkYXRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0YXNrRGF0ZS5wcmVwZW5kKGFsYXJtSWNvbik7XHJcblx0XHRcdFx0Y29uc3QgdGFza1Byb2plY3QgPSBWaWV3LmNyZWF0ZUVsZSgnc3BhbicsICd0YXNrcy1saXN0LWl0ZW0tcHJvamVjdCcpO1xyXG5cdFx0XHRcdHRhc2tQcm9qZWN0LnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0O1xyXG5cdFx0XHRcdHRhc2tQcm9qZWN0LnByZXBlbmQobGFiZWxJY29uKTtcclxuXHRcdFx0XHRjb25zdCBjaGVja2JveCA9IFZpZXcuY3JlYXRlRWxlKCdpbnB1dCcsICd0YXNrcy1saXN0LWl0ZW0tY2hlY2tib3gnKTtcclxuXHRcdFx0XHRjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuXHRcdFx0XHRjb25zdCBidXR0b25XcmFwcGVyID0gVmlldy5jcmVhdGVFbGUoXHJcblx0XHRcdFx0XHQnZGl2JyxcclxuXHRcdFx0XHRcdCd0YXNrcy1saXN0LWl0ZW0tYnV0dG9ucy13cmFwcGVyJ1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gVmlldy5jcmVhdGVFbGUoXHJcblx0XHRcdFx0XHQnYnV0dG9uJyxcclxuXHRcdFx0XHRcdCdidG4nLFxyXG5cdFx0XHRcdFx0J2J0bi1pY29uLW9ubHknLFxyXG5cdFx0XHRcdFx0J2J0bi10YXNrbGlzdCcsXHJcblx0XHRcdFx0XHQnYnRuLS1yZWQnXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRkZWxldGVCdXR0b24uYXBwZW5kKGRlbGV0ZUljb24pO1xyXG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LmxhYmVsID0gJ2RlbGV0ZS1idXR0b24nO1xyXG5cdFx0XHRcdGNvbnN0IGVkaXRCdXR0b24gPSBWaWV3LmNyZWF0ZUVsZShcclxuXHRcdFx0XHRcdCdidXR0b24nLFxyXG5cdFx0XHRcdFx0J2J0bicsXHJcblx0XHRcdFx0XHQnYnRuLWljb24tb25seScsXHJcblx0XHRcdFx0XHQnYnRuLXRhc2tsaXN0JyxcclxuXHRcdFx0XHRcdCdidG4tLW9yYW5nZSdcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGVkaXRCdXR0b24uYXBwZW5kKGVkaXRJY29uKTtcclxuXHRcdFx0XHRlZGl0QnV0dG9uLmRhdGFzZXQubGFiZWwgPSAnZWRpdC1idXR0b24nO1xyXG5cdFx0XHRcdGJ1dHRvbldyYXBwZXIuYXBwZW5kKGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XHJcblx0XHRcdFx0aWYgKHRhc2suY29tcGxldGUpIHtcclxuXHRcdFx0XHRcdHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWNvbXBsZXRlJyk7XHJcblx0XHRcdFx0XHRjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzLWxpc3QtaXRlbS1jaGVja2JveC1jb21wbGV0ZScpO1xyXG5cdFx0XHRcdFx0dGFza1RleHQuY2xhc3NMaXN0LmFkZCgndGFza3MtbGlzdC1pdGVtLWNvbXBsZXRlJyk7XHJcblx0XHRcdFx0XHR0YXNrRGF0ZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHN1bW1hcnlFbGVtZW50LmFwcGVuZCh0YXNrVGV4dCwgYnV0dG9uV3JhcHBlciwgdGFza0RhdGUsIHRhc2tQcm9qZWN0KTtcclxuXHRcdFx0XHRkZXRhaWxzRWxlbWVudC5hcHBlbmQoc3VtbWFyeUVsZW1lbnQsIGRlc2NyaXB0aW9uVGV4dCk7XHJcblx0XHRcdFx0dGFza0VsZW1lbnQuYXBwZW5kKGNoZWNrYm94LCBkZXRhaWxzRWxlbWVudCk7XHJcblx0XHRcdFx0dGhpcy50YXNrTGlzdC5hcHBlbmQodGFza0VsZW1lbnQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGJ1aWxkTW9kYWwgPSAodHlwZSwgZGF0YUFycikgPT4ge1xyXG5cdFx0Vmlldy5jbGVhcih0aGlzLmZvcm0pO1xyXG5cdFx0Y29uc3QgYnV0dG9uQ29udGFpbmVyID0gVmlldy5jcmVhdGVFbGUoJ2RpdicsICdtb2RhbC1idXR0b24td3JhcHBlcicpO1xyXG5cdFx0YnV0dG9uQ29udGFpbmVyLmRhdGFzZXQubGFiZWwgPSAnZm9ybS1idXR0b24tY29udGFpbmVyJztcclxuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gVmlldy5jcmVhdGVFbGUoJ2J1dHRvbicsICdidG4nLCAnYnRuLWZvcm0nLCAnYnRuLS1yZWQnKTtcclxuXHRcdGNsb3NlQnV0dG9uLmRhdGFzZXQubGFiZWwgPSAnY2xvc2UtbW9kYWwnO1xyXG5cdFx0Y2xvc2VCdXR0b24uaWQgPSAnY2xvc2UtbW9kYWwnO1xyXG5cdFx0Y2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuXHRcdGNsb3NlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuXHRcdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IFZpZXcuY3JlYXRlRWxlKFxyXG5cdFx0XHQnYnV0dG9uJyxcclxuXHRcdFx0J2J0bicsXHJcblx0XHRcdCdidG4tZm9ybScsXHJcblx0XHRcdCdidG4tLWdyZWVuJ1xyXG5cdFx0KTtcclxuXHRcdHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcblx0XHRzdWJtaXRCdXR0b24uZGF0YXNldC5sYWJlbCA9ICdzdWJtaXQnO1xyXG5cdFx0c3VibWl0QnV0dG9uLmlkID0gJ3N1Ym1pdCc7XHJcblx0XHRzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuXHRcdHN1Ym1pdEJ1dHRvbi5kYXRhc2V0LnN1YnR5cGUgPSB0eXBlO1xyXG5cdFx0aWYgKHR5cGUgPT09ICd0YXNrJyB8fCB0eXBlID09PSAnZWRpdCcpIHtcclxuXHRcdFx0dGhpcy5tb2RhbFRpdGxlLnRleHRDb250ZW50ID0gdHlwZSA9PT0gJ3Rhc2snID8gJ05ldyBUYXNrJyA6ICdFZGl0IFRhc2snO1xyXG5cdFx0XHRjb25zdCB0YXNrVGl0bGVJbnB1dCA9IFZpZXcuY3JlYXRlRWxlKFxyXG5cdFx0XHRcdCdpbnB1dCcsXHJcblx0XHRcdFx0J21vZGFsLWlucHV0JyxcclxuXHRcdFx0XHQnbW9kYWwtdGFzay10aXRsZSdcclxuXHRcdFx0KTtcclxuXHRcdFx0dGFza1RpdGxlSW5wdXQuZGF0YXNldC5sYWJlbCA9ICdtb2RhbC10YXNrLXRpdGxlJztcclxuXHRcdFx0dGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuXHRcdFx0dGFza1RpdGxlSW5wdXQuaWQgPSAnbW9kYWwtdGFzay10aXRsZSc7XHJcblx0XHRcdHRhc2tUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgdGl0bGUnO1xyXG5cdFx0XHRjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBWaWV3LmNyZWF0ZUVsZSgndGV4dGFyZWEnLCAnbW9kYWwtdGFzay1kZXNjJyk7XHJcblx0XHRcdHRhc2tEZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9ICdUYXNrIGRlc2NyaXB0aW9uLi4uJztcclxuXHRcdFx0dGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQubGFiZWwgPSAnbW9kYWwtdGFzay1kZXNjcmlwdGlvbic7XHJcblx0XHRcdHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNicpO1xyXG5cdFx0XHRjb25zdCBkYXRlV3JhcHBlciA9IFZpZXcuY3JlYXRlRWxlKFxyXG5cdFx0XHRcdCdmaWVsZHNldCcsXHJcblx0XHRcdFx0J21vZGFsLWZvcm0taXRlbS13cmFwcGVyJyxcclxuXHRcdFx0XHQnbW9kYWwtdGFzay1kYXRlJ1xyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCB0YXNrRHVlRGF0ZUlucHV0TGFiZWwgPSBWaWV3LmNyZWF0ZUVsZSgnbGFiZWwnLCAnbW9kYWwtbGFiZWwnKTtcclxuXHRcdFx0dGFza0R1ZURhdGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSc7XHJcblx0XHRcdHRhc2tEdWVEYXRlSW5wdXRMYWJlbC5mb3IgPSAnbW9kYWwtdGFzay1kYXRlJztcclxuXHRcdFx0Y29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IFZpZXcuY3JlYXRlRWxlKCdpbnB1dCcsICdtb2RhbC1pbnB1dCcpO1xyXG5cdFx0XHR0YXNrRHVlRGF0ZUlucHV0LmRhdGFzZXQubGFiZWwgPSAnbW9kYWwtdGFzay1kYXRlJztcclxuXHRcdFx0dGFza0R1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG5cdFx0XHR0YXNrRHVlRGF0ZUlucHV0LmlkID0gJ21vZGFsLXRhc2stZGF0ZSc7XHJcblx0XHRcdHRhc2tEdWVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnRHVlIGRhdGUuLi4nO1xyXG5cdFx0XHRkYXRlV3JhcHBlci5hcHBlbmQodGFza0R1ZURhdGVJbnB1dExhYmVsLCB0YXNrRHVlRGF0ZUlucHV0KTtcclxuXHRcdFx0Y29uc3QgcHJvamVjdFdyYXBwZXIgPSBWaWV3LmNyZWF0ZUVsZShcclxuXHRcdFx0XHQnZmllbGRzZXQnLFxyXG5cdFx0XHRcdCdtb2RhbC1mb3JtLWl0ZW0td3JhcHBlcidcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgdGFza1Byb2plY3RJbnB1dExhYmVsID0gVmlldy5jcmVhdGVFbGUoJ2xhYmVsJywgJ21vZGFsLWxhYmVsJyk7XHJcblx0XHRcdHRhc2tQcm9qZWN0SW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcclxuXHRcdFx0dGFza1Byb2plY3RJbnB1dExhYmVsLmZvciA9ICdtb2RhbC1wcm9qZWN0LXNlbGVjdCc7XHJcblx0XHRcdGNvbnN0IHRhc2tQcm9qZWN0SW5wdXQgPSBWaWV3LmNyZWF0ZUVsZShcclxuXHRcdFx0XHQnc2VsZWN0JyxcclxuXHRcdFx0XHQnbW9kYWwtaW5wdXQnLFxyXG5cdFx0XHRcdCdtb2RhbC10YXNrLXByb2plY3QnXHJcblx0XHRcdCk7XHJcblx0XHRcdHRhc2tQcm9qZWN0SW5wdXQuZGF0YXNldC5sYWJlbCA9ICdtb2RhbC10YXNrLXByb2plY3QnO1xyXG5cdFx0XHR0YXNrUHJvamVjdElucHV0LmlkID0gJ21vZGFsLXByb2plY3Qtc2VsZWN0JztcclxuXHRcdFx0cHJvamVjdFdyYXBwZXIuYXBwZW5kKHRhc2tQcm9qZWN0SW5wdXRMYWJlbCwgdGFza1Byb2plY3RJbnB1dCk7XHJcblx0XHRcdGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG5cdFx0XHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcblx0XHRcdFx0Y29uc3Qgb3B0aW9uID0gVmlldy5jcmVhdGVFbGUoJ29wdGlvbicpO1xyXG5cdFx0XHRcdG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcclxuXHRcdFx0XHRvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcblx0XHRcdFx0dGFza1Byb2plY3RJbnB1dC5hcHBlbmQob3B0aW9uKTtcclxuXHRcdFx0XHRpZiAodGhpcy5sYWJlbFRhc2tMaXN0SGVhZGluZy50ZXh0Q29udGVudCA9PT0gcHJvamVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR0YXNrUHJvamVjdElucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnN0IHByaW9yaXR5V3JhcHBlciA9IFZpZXcuY3JlYXRlRWxlKFxyXG5cdFx0XHRcdCdmaWVsZHNldCcsXHJcblx0XHRcdFx0J21vZGFsLWZvcm0taXRlbS13cmFwcGVyJyxcclxuXHRcdFx0XHQnbW9kYWwtdGFzay1wcmlvJ1xyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBwcmlvcml0eUJveCA9IFZpZXcuY3JlYXRlRWxlKCdkaXYnLCAnbW9kYWwtcmFkaW8td3JhcHBlcicpO1xyXG5cdFx0XHRjb25zdCBwcmlvcml0eUxhYmVsID0gVmlldy5jcmVhdGVFbGUoJ3AnLCAnbW9kYWwtbGFiZWwnKTtcclxuXHRcdFx0cHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XHJcblx0XHRcdGNvbnN0IGxhYmVsSGlnaFByaW8gPSBWaWV3LmNyZWF0ZUVsZShcclxuXHRcdFx0XHQnbGFiZWwnLFxyXG5cdFx0XHRcdCdidG4nLFxyXG5cdFx0XHRcdCdidG4tZm9ybScsXHJcblx0XHRcdFx0J2J0bi0tcmVkJ1xyXG5cdFx0XHQpO1xyXG5cdFx0XHRsYWJlbEhpZ2hQcmlvLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2hpZ2hQcmlvJyk7XHJcblx0XHRcdGxhYmVsSGlnaFByaW8udGV4dENvbnRlbnQgPSAnSGlnaCc7XHJcblx0XHRcdGNvbnN0IHJhZGlvSGlnaFByaW8gPSBWaWV3LmNyZWF0ZUVsZSgnaW5wdXQnLCAnbW9kYWwtcmFkaW8nKTtcclxuXHRcdFx0cmFkaW9IaWdoUHJpby5pZCA9ICdoaWdoUHJpbyc7XHJcblx0XHRcdHJhZGlvSGlnaFByaW8udHlwZSA9ICdyYWRpbyc7XHJcblx0XHRcdHJhZGlvSGlnaFByaW8ubmFtZSA9ICdwcmlvcml0eSc7XHJcblx0XHRcdHJhZGlvSGlnaFByaW8udmFsdWUgPSAnSGlnaCc7XHJcblx0XHRcdGNvbnN0IGxhYmVsTWVkaXVtUHJpbyA9IFZpZXcuY3JlYXRlRWxlKFxyXG5cdFx0XHRcdCdsYWJlbCcsXHJcblx0XHRcdFx0J2J0bicsXHJcblx0XHRcdFx0J2J0bi1mb3JtJyxcclxuXHRcdFx0XHQnYnRuLS1vcmFuZ2UnXHJcblx0XHRcdCk7XHJcblx0XHRcdGxhYmVsTWVkaXVtUHJpby5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZWRpdW1QcmlvJyk7XHJcblx0XHRcdGxhYmVsTWVkaXVtUHJpby50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xyXG5cdFx0XHRjb25zdCByYWRpb01lZGl1bVByaW8gPSBWaWV3LmNyZWF0ZUVsZSgnaW5wdXQnLCAnbW9kYWwtcmFkaW8nKTtcclxuXHRcdFx0cmFkaW9NZWRpdW1QcmlvLmlkID0gJ21lZGl1bVByaW8nO1xyXG5cdFx0XHRyYWRpb01lZGl1bVByaW8udHlwZSA9ICdyYWRpbyc7XHJcblx0XHRcdHJhZGlvTWVkaXVtUHJpby5uYW1lID0gJ3ByaW9yaXR5JztcclxuXHRcdFx0cmFkaW9NZWRpdW1QcmlvLnZhbHVlID0gJ01lZGl1bSc7XHJcblx0XHRcdGNvbnN0IGxhYmVsTG93UHJpbyA9IFZpZXcuY3JlYXRlRWxlKFxyXG5cdFx0XHRcdCdsYWJlbCcsXHJcblx0XHRcdFx0J2J0bicsXHJcblx0XHRcdFx0J2J0bi1mb3JtJyxcclxuXHRcdFx0XHQnYnRuLS1ncmVlbidcclxuXHRcdFx0KTtcclxuXHRcdFx0bGFiZWxMb3dQcmlvLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xvd1ByaW8nKTtcclxuXHRcdFx0bGFiZWxMb3dQcmlvLnRleHRDb250ZW50ID0gJ0xvdyc7XHJcblx0XHRcdGNvbnN0IHJhZGlvTG93UHJpbyA9IFZpZXcuY3JlYXRlRWxlKCdpbnB1dCcsICdtb2RhbC1yYWRpbycpO1xyXG5cdFx0XHRyYWRpb0xvd1ByaW8uaWQgPSAnbG93UHJpbyc7XHJcblx0XHRcdHJhZGlvTG93UHJpby50eXBlID0gJ3JhZGlvJztcclxuXHRcdFx0cmFkaW9Mb3dQcmlvLm5hbWUgPSAncHJpb3JpdHknO1xyXG5cdFx0XHRyYWRpb0xvd1ByaW8udmFsdWUgPSAnTG93JztcclxuXHRcdFx0cHJpb3JpdHlCb3guYXBwZW5kKFxyXG5cdFx0XHRcdHJhZGlvSGlnaFByaW8sXHJcblx0XHRcdFx0bGFiZWxIaWdoUHJpbyxcclxuXHRcdFx0XHRyYWRpb01lZGl1bVByaW8sXHJcblx0XHRcdFx0bGFiZWxNZWRpdW1QcmlvLFxyXG5cdFx0XHRcdHJhZGlvTG93UHJpbyxcclxuXHRcdFx0XHRsYWJlbExvd1ByaW9cclxuXHRcdFx0KTtcclxuXHRcdFx0cHJpb3JpdHlXcmFwcGVyLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eUJveCk7XHJcblx0XHRcdGlmICh0eXBlID09PSAnZWRpdCcpIHtcclxuXHRcdFx0XHRjb25zdCBbZGF0YV0gPSBkYXRhQXJyO1xyXG5cdFx0XHRcdHRhc2tUaXRsZUlucHV0LnZhbHVlID0gZGF0YS50YXNrO1xyXG5cdFx0XHRcdHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBkYXRhLmR1ZWRhdGU7XHJcblx0XHRcdFx0dGFza1Byb2plY3RJbnB1dC52YWx1ZSA9IGRhdGEucHJvamVjdDtcclxuXHRcdFx0XHR0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBkYXRhLmRlc2NyaXB0aW9uO1xyXG5cdFx0XHRcdHN1Ym1pdEJ1dHRvbi5kYXRhc2V0LnRhc2tpZCA9IGRhdGEuaWQ7XHJcblx0XHRcdFx0aWYgKGRhdGEucHJpb3JpdHkgPT09ICdIaWdoJykgcmFkaW9IaWdoUHJpby5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoZGF0YS5wcmlvcml0eSA9PT0gJ01lZGl1bScpIHJhZGlvTWVkaXVtUHJpby5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoZGF0YS5wcmlvcml0eSA9PT0gJ0xvdycpIHJhZGlvTG93UHJpby5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmZvcm0ucHJlcGVuZChcclxuXHRcdFx0XHR0YXNrVGl0bGVJbnB1dCxcclxuXHRcdFx0XHR0YXNrRGVzY3JpcHRpb24sXHJcblx0XHRcdFx0cHJpb3JpdHlXcmFwcGVyLFxyXG5cdFx0XHRcdHByb2plY3RXcmFwcGVyLFxyXG5cdFx0XHRcdGRhdGVXcmFwcGVyXHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xyXG5cdFx0XHR0aGlzLm1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPSBWaWV3LmNyZWF0ZUVsZShcclxuXHRcdFx0XHQnaW5wdXQnLFxyXG5cdFx0XHRcdCdtb2RhbC1pbnB1dCcsXHJcblx0XHRcdFx0J21vZGFsLXByb2plY3QtdGl0bGUnXHJcblx0XHRcdCk7XHJcblx0XHRcdHByb2plY3RUaXRsZS5kYXRhc2V0LmxhYmVsID0gJ3Byb2plY3QtdGl0bGUnO1xyXG5cdFx0XHRwcm9qZWN0VGl0bGUudHlwZSA9ICd0ZXh0JztcclxuXHRcdFx0cHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3QtdGl0bGUnO1xyXG5cdFx0XHRwcm9qZWN0VGl0bGUucGxhY2Vob2xkZXIgPSAnUHJvamVjdCB0aXRsZS4uLic7XHJcblx0XHRcdHRoaXMuZm9ybS5hcHBlbmQocHJvamVjdFRpdGxlKTtcclxuXHRcdH1cclxuXHRcdGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoY2xvc2VCdXR0b24sIHN1Ym1pdEJ1dHRvbik7XHJcblx0XHR0aGlzLmZvcm0uYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcik7XHJcblx0XHR0aGlzLm1vZGFsLnNob3dNb2RhbCgpO1xyXG5cdH07XHJcblxyXG5cdGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cykge1xyXG5cdFx0Vmlldy5jbGVhcih0aGlzLnByb2plY3RMaXN0KTtcclxuXHRcdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvamVjdEVsZW1lbnQgPSBWaWV3LmNyZWF0ZUVsZSgnbGknLCAncHJvamVjdHMtaXRlbScpO1xyXG5cdFx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IFZpZXcuY3JlYXRlRWxlKCdwJyk7XHJcblx0XHRcdHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cdFx0XHRwcm9qZWN0RWxlbWVudC5kYXRhc2V0LnByb2plY3RpZCA9IHByb2plY3QuaWQ7XHJcblx0XHRcdHByb2plY3RFbGVtZW50LmRhdGFzZXQubGFiZWwgPSAnZmlsdGVyJztcclxuXHRcdFx0cHJvamVjdEVsZW1lbnQuZGF0YXNldC5maWx0ZXIgPSBwcm9qZWN0Lm5hbWU7XHJcblx0XHRcdHByb2plY3RFbGVtZW50LmFwcGVuZChwcm9qZWN0TmFtZSk7XHJcblx0XHRcdGlmIChwcm9qZWN0LmlkID4gMSkge1xyXG5cdFx0XHRcdHByb2plY3RFbGVtZW50LmRhdGFzZXQucHJvamVjdHR5cGUgPSAnY3VzdG9tJztcclxuXHRcdFx0XHRjb25zdCBkZWxldGVCdXR0b24gPSBWaWV3LmNyZWF0ZUVsZShcclxuXHRcdFx0XHRcdCdidXR0b24nLFxyXG5cdFx0XHRcdFx0J2J0bicsXHJcblx0XHRcdFx0XHQnYnRuLWljb24tb25seScsXHJcblx0XHRcdFx0XHQnYnRuLXByb2plY3QtZGVsZXRlJ1xyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0ZGVsZXRlQnV0dG9uLmRhdGFzZXQubGFiZWwgPSAnZGVsZXRlLWJ1dHRvbic7XHJcblx0XHRcdFx0Y29uc3QgZGVsZXRlSWNvbiA9IFZpZXcuY3JlYXRlU1ZHKCdjbG9zZScsICdpY29uJywgJ2ljb24tMycpO1xyXG5cdFx0XHRcdGRlbGV0ZUJ1dHRvbi5hcHBlbmQoZGVsZXRlSWNvbik7XHJcblx0XHRcdFx0cHJvamVjdEVsZW1lbnQuYXBwZW5kKGRlbGV0ZUJ1dHRvbik7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdEVsZW1lbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8vICMjIyMjIyMjIyMjIyMjI1sgRVZFTlRTIF0jIyMjIyMjIyMjIyMjIyNcclxuXHJcblx0ZXZlbnRDbG9zZU1vZGFsKCkge1xyXG5cdFx0dGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgeyB0YXJnZXQgfSA9IGU7XHJcblx0XHRcdGlmICh0YXJnZXQuZGF0YXNldC5sYWJlbCA9PT0gJ2Nsb3NlLW1vZGFsJykge1xyXG5cdFx0XHRcdFZpZXcuY2xlYXIodGhpcy5mb3JtKTtcclxuXHRcdFx0XHR0aGlzLm1vZGFsLmNsb3NlKCk7XHJcblx0XHRcdFx0dGhpcy53YXJuaW5nLnRleHRDb250ZW50ID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZXZlbnROZXdUYXNrKCkge1xyXG5cdFx0dGhpcy5uZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmJ1aWxkTW9kYWwoJ3Rhc2snKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZXZlbnROZXdQcm9qZWN0KCkge1xyXG5cdFx0dGhpcy5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmJ1aWxkTW9kYWwoJ3Byb2plY3QnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZXZlbnRVcGRhdGVMaXN0cyhoYW5kbGVyKSB7XHJcblx0XHR0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCB0eXBlID0gZS5zdWJtaXR0ZXIuZGF0YXNldC5zdWJ0eXBlO1xyXG5cdFx0XHRpZiAodHlwZSA9PT0gJ3Rhc2snKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudGFza0RldGFpbHMoKSkge1xyXG5cdFx0XHRcdFx0aGFuZGxlcih0aGlzLnRhc2tEZXRhaWxzKCksIHR5cGUpO1xyXG5cdFx0XHRcdFx0dGhpcy5tb2RhbC5jbG9zZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5wcm9qZWN0RGV0YWlscygpKSB7XHJcblx0XHRcdFx0XHRoYW5kbGVyKHRoaXMucHJvamVjdERldGFpbHMoKSwgdHlwZSk7XHJcblx0XHRcdFx0XHR0aGlzLm1vZGFsLmNsb3NlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09ICdlZGl0Jykge1xyXG5cdFx0XHRcdGlmICh0aGlzLnRhc2tEZXRhaWxzKCkpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRhc2sgPSB0aGlzLnRhc2tEZXRhaWxzKCk7XHJcblx0XHRcdFx0XHR0YXNrLmlkID0gTnVtYmVyKGUuc3VibWl0dGVyLmRhdGFzZXQudGFza2lkKTtcclxuXHRcdFx0XHRcdGhhbmRsZXIodGFzaywgdHlwZSk7XHJcblx0XHRcdFx0XHR0aGlzLm1vZGFsLmNsb3NlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGV2ZW50Q2xpY2tUb0VkaXRUYXNrKGhhbmRsZXIpIHtcclxuXHRcdHRoaXMudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHRhcmdldCB9ID0gZTtcclxuXHRcdFx0aWYgKHRhcmdldC5jbG9zZXN0KCdidXR0b24nKT8uZGF0YXNldC5sYWJlbCA9PT0gJ2VkaXQtYnV0dG9uJykge1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gTnVtYmVyKHRhcmdldC5jbG9zZXN0KCdsaScpLmRhdGFzZXQudGFza2lkKTtcclxuXHRcdFx0XHRjb25zdCB0YXNrID0gaGFuZGxlcihpZCk7XHJcblx0XHRcdFx0dGhpcy5idWlsZE1vZGFsKCdlZGl0JywgdGFzayk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZXZlbnREZWxldGVUYXNrKGhhbmRsZXIpIHtcclxuXHRcdHRoaXMudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHRhcmdldCB9ID0gZTtcclxuXHRcdFx0aWYgKHRhcmdldC5jbG9zZXN0KCdidXR0b24nKT8uZGF0YXNldC5sYWJlbCA9PT0gJ2RlbGV0ZS1idXR0b24nKSB7XHJcblx0XHRcdFx0Y29uc3QgaWQgPSBOdW1iZXIodGFyZ2V0LmNsb3Nlc3QoJ2xpJykuZGF0YXNldC50YXNraWQpO1xyXG5cdFx0XHRcdGhhbmRsZXIoaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGV2ZW50Q29tcGxldGVUYXNrKGhhbmRsZXIpIHtcclxuXHRcdHRoaXMudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRjb25zdCBpZCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFza2lkKTtcclxuXHRcdFx0XHRoYW5kbGVyKGlkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRldmVudERlbGV0ZVByb2plY3QoaGFuZGxlcikge1xyXG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xyXG5cdFx0XHRpZiAoYnV0dG9uPy5kYXRhc2V0LmxhYmVsID09PSAnZGVsZXRlLWJ1dHRvbicpIHtcclxuXHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdGNvbnN0IGlkID0gYnV0dG9uLmNsb3Nlc3QoJ2xpJykuZGF0YXNldC5wcm9qZWN0aWQ7XHJcblx0XHRcdFx0aGFuZGxlcihOdW1iZXIoaWQpKTtcclxuXHRcdFx0XHR0aGlzLmxhYmVsVGFza0xpc3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ0FsbCc7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZXZlbnRGaWx0ZXIoaGFuZGxlcikge1xyXG5cdFx0dGhpcy5maWx0ZXJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk/LmRhdGFzZXQubGFiZWwgPT09ICdmaWx0ZXInKSB7XHJcblx0XHRcdFx0Y29uc3QgeyBmaWx0ZXIgfSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuZGF0YXNldDtcclxuXHRcdFx0XHR0aGlzLmxhYmVsVGFza0xpc3RIZWFkaW5nLnRleHRDb250ZW50ID0gVmlldy5jYXBpdGFsaXNlKGZpbHRlcik7XHJcblx0XHRcdFx0aGFuZGxlcihmaWx0ZXIpO1xyXG5cdFx0XHRcdHRoaXMudG9nZ2xlRmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KCdsaScpLmRhdGFzZXQ/LmxhYmVsID09PSAnZmlsdGVyJykge1xyXG5cdFx0XHRcdGNvbnN0IHsgZmlsdGVyIH0gPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpLmRhdGFzZXQ7XHJcblx0XHRcdFx0dGhpcy5sYWJlbFRhc2tMaXN0SGVhZGluZy50ZXh0Q29udGVudCA9IFZpZXcuY2FwaXRhbGlzZShmaWx0ZXIpO1xyXG5cdFx0XHRcdGhhbmRsZXIoZmlsdGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIid1c2U6IHN0cmljdCc7XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjWyBJTVBPUlRTIF0jIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3JztcblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjI1sgQ09OVFJPTExFUiBdIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyBDb25uZWN0cyB1c2VyIGlucHV0ICYgbG9naWMgd2l0aCBkaXNwbGF5XG4vLyBAcGFyYW0gOiBtb2RlbFxuLy8gQHBhcmFtIDogdmlld1xuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3Rvcihtb2RlbCwgdmlldykge1xuXHRcdHRoaXMudmlldyA9IHZpZXc7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsO1xuXHRcdHRoaXMudmlldy5ldmVudFVwZGF0ZUxpc3RzKHRoaXMuaGFuZGxlVXBkYXRlTGlzdHMpO1xuXHRcdHRoaXMudmlldy5ldmVudERlbGV0ZVRhc2sodGhpcy5oYW5kbGVEZWxldGVUYXNrKTtcblx0XHR0aGlzLnZpZXcuZXZlbnRDb21wbGV0ZVRhc2sodGhpcy5oYW5kbGVDb21wbGV0ZVRhc2spO1xuXHRcdHRoaXMudmlldy5ldmVudERlbGV0ZVByb2plY3QodGhpcy5oYW5kbGVEZWxldGVQcm9qZWN0KTtcblx0XHR0aGlzLnZpZXcuZXZlbnRDbGlja1RvRWRpdFRhc2sodGhpcy5oYW5kbGVHZXRFZGl0VGFzayk7XG5cdFx0dGhpcy52aWV3LmdldFByb2plY3RzID0gdGhpcy5oYW5kbGVQcm9qZWN0c1JlcXVlc3Q7XG5cdFx0dGhpcy5tb2RlbC5ldmVudE9uVGFza0NoYW5nZSh0aGlzLm9uVGFza0NoYW5nZSk7XG5cdFx0dGhpcy5vblRhc2tDaGFuZ2UodGhpcy5tb2RlbC50YXNrcyk7XG5cdFx0dGhpcy5tb2RlbC5ldmVudE9uUHJvamVjdENoYW5nZSh0aGlzLm9uUHJvamVjdENoYW5nZSk7XG5cdFx0dGhpcy5vblByb2plY3RDaGFuZ2UodGhpcy5tb2RlbC5wcm9qZWN0cyk7XG5cdFx0dGhpcy52aWV3LmV2ZW50VG9nZ2xlTmF2KCk7XG5cdFx0dGhpcy52aWV3LmV2ZW50VG9nZ2xlRmlsdGVyKCk7XG5cdFx0dGhpcy52aWV3LmV2ZW50Q2xvc2VNb2RhbCgpO1xuXHRcdHRoaXMudmlldy5ldmVudE5ld1Byb2plY3QoKTtcblx0XHR0aGlzLnZpZXcuZXZlbnROZXdUYXNrKCk7XG5cdFx0dGhpcy52aWV3LmV2ZW50RmlsdGVyKHRoaXMuaGFuZGxlRmlsdGVyVGFza3MpO1xuXHRcdHRoaXMudmlldy5ldmVudFRvZ2dsZVByb2plY3RzKCk7XG5cblx0XHR0aGlzLmZpbHRlciA9ICdhbGwnO1xuXHR9XG5cblx0b25UYXNrQ2hhbmdlID0gKHRhc2tzKSA9PiB0aGlzLnZpZXcuZGlzcGxheVRhc2tzKHRhc2tzKTtcblxuXHRvblByb2plY3RDaGFuZ2UgPSAocHJvamVjdHMpID0+IHRoaXMudmlldy5kaXNwbGF5UHJvamVjdHMocHJvamVjdHMpO1xuXG5cdGhhbmRsZVByb2plY3RzUmVxdWVzdCA9ICgpID0+IHRoaXMubW9kZWwuX3Byb2plY3RzO1xuXG5cdGhhbmRsZVVwZGF0ZUxpc3RzID0gKGl0ZW0sIHR5cGUpID0+IHRoaXMubW9kZWwudXBkYXRlTGlzdHMoaXRlbSwgdHlwZSk7XG5cblx0aGFuZGxlR2V0RWRpdFRhc2sgPSAoaWQpID0+IHRoaXMubW9kZWwuZ2V0VGFza1RvRWRpdChpZCk7XG5cblx0aGFuZGxlRWRpdFRhc2sgPSAoaWQpID0+IHRoaXMubW9kZWwuZWRpdFRhc2soaWQpO1xuXG5cdGhhbmRsZURlbGV0ZVRhc2sgPSAoaWQpID0+IHRoaXMubW9kZWwuZGVsZXRlVGFzayhpZCk7XG5cblx0aGFuZGxlQ29tcGxldGVUYXNrID0gKGlkKSA9PiB0aGlzLm1vZGVsLmNvbXBsZXRlVGFzayhpZCk7XG5cblx0aGFuZGxlQWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB0aGlzLm1vZGVsLmFkZFByb2plY3QocHJvamVjdCk7XG5cblx0aGFuZGxlRGVsZXRlUHJvamVjdCA9IChpZCkgPT4gdGhpcy5tb2RlbC5kZWxldGVQcm9qZWN0KGlkKTtcblxuXHRoYW5kbGVGaWx0ZXJUYXNrcyA9IChmaWx0ZXIpID0+IHRoaXMubW9kZWwuZmlsdGVyVGFza0xpc3QoZmlsdGVyKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCB0YXNraW5hdG9yID0gbmV3IENvbnRyb2xsZXIobmV3IE1vZGVsKCksIG5ldyBWaWV3KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9