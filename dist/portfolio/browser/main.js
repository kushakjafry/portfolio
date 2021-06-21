(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/scroll.service */ "uPsD");



class AboutComponent {
    constructor(scrollService) {
        this.scrollService = scrollService;
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 55, vars: 0, consts: [[1, "row", "about-row"], ["data-aos", "fade-right", "data-aos-duration", "1000", "data-aos-anchor-placement", "center-bottom", 1, "col", "col-12", "col-md-4", "d-none", "d-md-block", "profile-image"], [1, "col", "d-none", "d-md-block", "col-md-2"], [1, "col", "col-12", "col-md-6", "about-me"], [1, "bold-text", "d-none", "d-md-block"], ["data-aos", "zoom-out", 1, "pt-3", "text-center", "text-md-left", "pl-5", "pr-5"], ["data-aos", "fade-up", 1, "text-left", "text-center", "text-md-left", "pl-5", "pr-5", "mt-5", "text-muted", "introduction"], ["data-aos", "fade-up", 1, "resume", "mt-4", "text-center", "pl-5", "pr-5", "text-md-left"], ["href", "../../assets/resume/KushakJafry Resume.pdf", "target", "_blank"], ["data-aos", "fade-up", 1, "social-btn", "pl-5", "pr-5", "mt-4", "text-center", "text-md-left"], ["href", "https://github.com/kushakjafry", "target", "_blank", 1, "btn"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 144 144", "width", "144px", "height", "144px", 1, "github"], ["id", "alpha", "filterUnits", "objectBoundingBox", "x", "0%", "y", "0%", "width", "100%", "height", "100%"], ["type", "matrix", "in", "SourceGraphic", "values", "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"], ["id", "mask0"], ["filter", "url(#alpha)"], ["x", "0", "y", "0", "width", "144", "height", "144", 2, "fill", "rgb(0%, 0%, 0%)", "fill-opacity", "0.05", "stroke", "none"], ["id", "image17473253", "width", "144", "height", "144", 0, "xlink", "href", "data:image/png;base64,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"], ["id", "mask1"], ["x", "0", "y", "0", "width", "144", "height", "144", 2, "fill", "rgb(0%, 0%, 0%)", "fill-opacity", "0.07", "stroke", "none"], ["id", "image17473256", "width", "144", "height", "144", 0, "xlink", "href", "data:image/png;base64,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"], ["id", "surface17473249"], ["d", "M 72 12 C 38.863281 12 12 38.863281 12 72 C 12 98.660156 29.402344 121.234375 53.460938 129.046875 L 90.539062 129.046875 C 114.597656 121.234375 132 98.660156 132 72 C 132 38.863281 105.136719 12 72 12 Z M 72 12 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(18.431373%, 53.725493%, 98.823529%)", "fill-opacity", "1"], [0, "xlink", "href", "#image17473253", "mask", "url(#mask0)"], [0, "xlink", "href", "#image17473256", "mask", "url(#mask1)"], ["d", "M 110.230469 70.003906 C 110.230469 63.070312 107.886719 57.324219 103.882812 52.816406 C 104.316406 51.84375 104.769531 50.535156 104.992188 48.890625 C 105.511719 45.140625 104.902344 42.890625 104.386719 40.6875 C 103.867188 38.488281 103.261719 36.9375 103.261719 36.9375 C 103.261719 36.9375 100.492188 36.65625 98.152344 37.453125 C 95.808594 38.253906 93.792969 38.863281 90.886719 40.597656 C 89.527344 41.40625 88.15625 42.292969 87.074219 43.015625 C 82.445312 41.730469 77.355469 41.070312 72 41.070312 C 66.597656 41.070312 61.460938 41.734375 56.800781 43.027344 C 55.714844 42.304688 54.335938 41.410156 52.96875 40.59375 C 50.0625 38.859375 48.046875 38.25 45.703125 37.453125 C 43.359375 36.652344 40.59375 36.9375 40.59375 36.9375 C 40.59375 36.9375 39.984375 38.484375 39.46875 40.6875 C 38.953125 42.886719 38.34375 45.136719 38.859375 48.886719 C 39.089844 50.574219 39.558594 51.90625 40.003906 52.886719 C 36.074219 57.367188 33.769531 63.078125 33.769531 70 C 33.769531 87.949219 43.46875 96.140625 61.132812 98.304688 C 59.074219 100.480469 57.691406 103.273438 57.226562 106.378906 C 56.0625 106.886719 54.726562 107.367188 53.4375 107.558594 C 50.128906 108.058594 46.625 107.558594 44.941406 106.558594 C 43.253906 105.5625 41.253906 103.3125 39.753906 101.121094 C 38.488281 99.273438 36.660156 97.128906 35.003906 96.371094 C 32.816406 95.371094 30.691406 94.996094 29.503906 95.183594 C 28.316406 95.371094 27.757812 96.246094 28.003906 96.871094 C 28.253906 97.496094 29.441406 98.4375 30.691406 99.121094 C 31.945312 99.808594 33.882812 101.683594 35.007812 103.496094 C 36.261719 105.519531 36.507812 106.6875 37.570312 108.996094 C 38.316406 110.621094 40.871094 112.652344 42.691406 113.746094 C 44.257812 114.683594 47.378906 115.21875 50.757812 115.371094 C 51.925781 115.425781 54.679688 115.082031 57.007812 114.753906 L 57.007812 126.003906 C 57.007812 127.921875 55.25 129.378906 53.433594 129.042969 C 59.269531 131.003906 65.5 132 72 132 C 78.496094 132 84.730469 131.003906 90.570312 129.046875 C 88.753906 129.382812 87 127.921875 87 126.007812 L 87 108.59375 C 87 104.605469 85.417969 101.003906 82.882812 98.320312 C 100.417969 96.214844 110.230469 88.214844 110.230469 70.003906 Z M 33.71875 98.179688 C 33.253906 97.945312 33.007812 97.507812 33.160156 97.195312 C 33.316406 96.886719 33.820312 96.832031 34.285156 97.066406 C 34.746094 97.304688 34.996094 97.742188 34.839844 98.050781 C 34.683594 98.359375 34.179688 98.417969 33.71875 98.179688 Z M 37.351562 100.445312 C 37.109375 100.710938 36.589844 100.625 36.1875 100.261719 C 35.785156 99.894531 35.65625 99.382812 35.898438 99.117188 C 36.140625 98.851562 36.664062 98.9375 37.066406 99.304688 C 37.46875 99.667969 37.597656 100.183594 37.351562 100.445312 Z M 39.613281 104.195312 C 39.308594 104.410156 38.789062 104.210938 38.457031 103.746094 C 38.125 103.28125 38.101562 102.726562 38.410156 102.511719 C 38.714844 102.292969 39.234375 102.496094 39.566406 102.960938 C 39.898438 103.425781 39.921875 103.980469 39.613281 104.195312 Z M 42.863281 107.019531 C 42.65625 107.355469 42.070312 107.371094 41.554688 107.054688 C 41.035156 106.738281 40.785156 106.210938 40.992188 105.875 C 41.199219 105.539062 41.785156 105.523438 42.304688 105.839844 C 42.820312 106.15625 43.070312 106.683594 42.863281 107.019531 Z M 45.9375 109.78125 C 45.296875 109.703125 44.824219 109.304688 44.878906 108.890625 C 44.929688 108.476562 45.488281 108.207031 46.125 108.285156 C 46.765625 108.363281 47.238281 108.761719 47.183594 109.175781 C 47.132812 109.585938 46.574219 109.859375 45.9375 109.78125 Z M 50.890625 110.5 C 50.207031 110.460938 49.675781 110.070312 49.703125 109.632812 C 49.730469 109.195312 50.304688 108.867188 50.984375 108.90625 C 51.664062 108.945312 52.195312 109.335938 52.171875 109.773438 C 52.144531 110.214844 51.570312 110.539062 50.890625 110.5 Z M 55.5625 110.03125 C 54.835938 110.03125 54.25 109.652344 54.25 109.1875 C 54.25 108.722656 54.835938 108.34375 55.5625 108.34375 C 56.289062 108.34375 56.878906 108.722656 56.878906 109.1875 C 56.878906 109.652344 56.285156 110.03125 55.5625 110.03125 Z M 55.5625 110.03125 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%, 100%, 100%)", "fill-opacity", "1"], ["href", "https://www.linkedin.com/in/kushak-jafry-95087a19b/", "target", "_blank", 1, "btn"], ["enable-background", "new 0 0 24 24", "height", "512", "viewBox", "0 0 24 24", "width", "512", "xmlns", "http://www.w3.org/2000/svg", 1, "linked-in"], ["fill", "#0077b5"], ["d", "m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"], ["d", "m.396 7.977h4.976v16.023h-4.976z"], ["d", "m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"], ["href", "https://twitter.com/KushakJafry", "target", "_blank", 1, "btn"], ["src", "../../assets/svg/twitter.svg", "alt", ""], ["data-aos", "fade-up", 1, "hire_me", "mt-4", "pl-5", "pr-5", "text-center", "text-md-left"], [1, "btn", "btn-outline-primary", 2, "cursor", "pointer", 3, "click"], [1, "mt-4"], [1, "text-muted"], ["href", "mailto:kushakjafry@gmail.com"], ["href", "tel:+917872626285"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Hi I'm Kushak Jafry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " A full stack web developer skilled in MEAN stack(Angular, Express, Nodejs and MongoDB). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Checkout My Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "filter", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "feColorMatrix", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mask", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "image", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mask", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "image", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "use", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "use", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_41_listener() { return ctx.scrollService.scrollIntoView("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "HIRE ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "OR Contact me here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " kushakjafry@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " +917872626285");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-row[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n.about-row[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/2.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.about-row[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n}\n.about-row[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .bold-text[_ngcontent-%COMP%] {\n  font-size: 10em;\n  position: absolute;\n  top: -80px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-weight: 700 !important;\n  color: rgba(255, 255, 255, 0.08);\n  text-transform: uppercase;\n}\n.about-row[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.8em;\n}\n.about-row[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .resume[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2f89fc;\n  text-decoration: none;\n}\n.about-row[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .hire_me[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 15px;\n  border-radius: 0 !important;\n  letter-spacing: 1px;\n  padding: 15px 25px;\n  font-weight: 600;\n  transition: all 0.3s ease 0s;\n  width: -webkit-max-content;\n  width: max-content;\n  background-color: transparent;\n  color: #2f89fc;\n  border: 2px solid #2f89fc;\n}\n.about-row[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .hire_me[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color: white;\n  border: 2px solid white;\n  transition: color 0.3s ease 0s, background-color 0.3s ease 0s;\n  -ms-transition: color 0.3s ease 0s, background-color 0.3s ease 0s;\n  -webkit-transition: color 0.3s ease 0s, background-color 0.3s ease 0s;\n}\n.about-row[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .hire_me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #2f89fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjtBQUNFO0VBQ0UsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFDSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBRU47QUFBSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQ007RUFDRSxjQzlCTztFRCtCUCxxQkFBQTtBQUNSO0FBR007RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRFI7QUFFUTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDZEQUFBO0VBQ0EsaUVBQUE7RUFDQSxxRUFBQTtBQUFWO0FBSVE7RUFDRSxxQkFBQTtFQUNBLGNDMURLO0FEd0RmIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xyXG4uYWJvdXQtcm93IHtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC5wcm9maWxlLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzLzIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5hYm91dC1tZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYm9sZC10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMGVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTgwcHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLmludHJvZHVjdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gICAgfVxyXG4gICAgLnJlc3VtZSB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkYmx1ZS1wcmltYXJ5O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhpcmVfbWUge1xyXG4gICAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogIzJmODlmYztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMmY4OWZjO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UgMHMsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlIDBzO1xyXG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSAwcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UgMHM7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSAwcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UgMHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICRibHVlLXByaW1hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRibHVlLXByaW1hcnk6ICMyZjg5ZmM7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
            }]
    }], function () { return [{ type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_1__["ScrollService"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! t-writer.js */ "Wgzd");
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scroll.service */ "uPsD");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/service.component */ "MzDm");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.component */ "84zG");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contactus/contactus.component */ "sOoW");











class HomeComponent {
    constructor(platformId, scrollService) {
        this.platformId = platformId;
        this.scrollService = scrollService;
        this.options = {
            path: '/assets/animations/18123-developer.json',
        };
    }
    animationCreated(animationItem) {
        console.log(animationItem);
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            const target = document.querySelector('.tw');
            const writer = new t_writer_js__WEBPACK_IMPORTED_MODULE_1__(target, {
                loop: true,
                typeColor: '#2f89fc',
                cursorColor: '#2f89fc',
                typeSpeed: 200,
                deleteSpeed: 100,
            });
            writer.strings(2000, 'Website', 'App').start();
            this.scrollService.home = document.querySelector('html');
            this.scrollService.portfolios = document.querySelector('#portfolioSec');
            this.scrollService.services = document.querySelector('#servicesSec');
            this.scrollService.about = document.querySelector('#aboutSec');
            this.scrollService.contact = document.querySelector('#contactSec');
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_3__["ScrollService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 1, consts: [["id", "homeSec", 1, "hero-section"], ["data-aos", "fade-left", "data-aos-offset", "0", 1, "lottie-animation", "d-none", "d-lg-block"], [3, "options", "animationCreated"], ["data-aos", "fade-right", 1, "h5", "text-muted", "text-center", "mb-3", 2, "letter-spacing", "4px", "text-transform", "uppercase"], ["data-aos", "fade-right", "data-aos-duration", "1000", 1, "tw", "h1", "text-center", "text-sm-left", 2, "font-weight", "bold", "letter-spacing", "4px"], ["data-aos", "fade-up", 1, "h5", "text-center", "mt-3", "d-none", "d-sm-block", "sub-heading"], [1, "learn-more", "mt-5", 2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "circle"], ["data-aos", "fade-right", "data-aos-delay", "300", 1, "icon", "arrow"], ["data-aos", "fade-up", "data-aos-delay", "600", 1, "button-text"], ["id", "portfolioSec", 1, "portfolio-section"], ["id", "servicesSec", 1, "services-section"], ["id", "aboutSec", 1, "about-section"], ["id", "contactSec", 1, "contactus-section"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ng-lottie", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationCreated", function HomeComponent_Template_ng_lottie_animationCreated_2_listener($event) { return ctx.animationCreated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Turn Your Concept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Into A Working ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Full Stack Web Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_10_listener() { return ctx.scrollService.scrollIntoView("portfolios"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View My Works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-contactus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
    } }, directives: [ngx_lottie__WEBPACK_IMPORTED_MODULE_4__["LottieComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_8__["ContactusComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.hero-section[_ngcontent-%COMP%]   .sub-heading[_ngcontent-%COMP%] {\n  color: #2f89fc;\n  letter-spacing: 4px;\n}\n\n.hero-section[_ngcontent-%COMP%]   .lottie-animation[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 50%;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  outline: none;\n  border: 0;\n  letter-spacing: 1px;\n  vertical-align: middle;\n  text-decoration: none;\n  background: transparent;\n  padding: 0;\n  font-size: inherit;\n  font-family: inherit;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a.learn-more[_ngcontent-%COMP%] {\n  width: 15rem;\n  height: auto;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: relative;\n  display: block;\n  margin: 0;\n  width: 3rem;\n  height: 3rem;\n  background: #2f89fc;\n  border-radius: 1.625rem;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background: white;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  left: 0.625rem;\n  width: 1.125rem;\n  height: 0.125rem;\n  background: none;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a.learn-more[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  top: -0.25rem;\n  right: 0.0625rem;\n  width: 0.625rem;\n  height: 0.625rem;\n  border-top: 0.125rem solid #fff;\n  border-right: 0.125rem solid #fff;\n  transform: rotate(45deg);\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a.learn-more[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.75rem 0;\n  margin: 0 0 0 1.85rem;\n  color: #2f89fc;\n  font-weight: 700;\n  line-height: 1.6;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%]   .icon.arrow[_ngcontent-%COMP%] {\n  background: white;\n  transform: translate(1rem, 0);\n}\n\n.hero-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%] {\n  color: white;\n}\n\n@media only screen and (min-width: 576px) {\n  .hero-section[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n\n.scroll-down[_ngcontent-%COMP%] {\n  bottom: 10px;\n  position: absolute;\n  padding-top: 80px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: white;\n  text-decoration: none;\n  opacity: 0.7;\n}\n\n.scroll-down[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.scroll-down[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transform: rotate(-45deg);\n  animation: sdb07 2s infinite;\n  opacity: 0;\n  box-sizing: border-box;\n}\n\n.scroll-down[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1) {\n  animation-delay: 0s;\n}\n\n.scroll-down[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 16px;\n  animation-delay: 0.15s;\n}\n\n.scroll-down[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  top: 32px;\n  animation-delay: 0.3s;\n}\n\n@keyframes sdb07 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.about-section[_ngcontent-%COMP%] {\n  padding-top: 7em;\n  min-height: 100vh;\n  margin-top: 170px;\n  padding-bottom: 7em;\n}\n\n.services-section[_ngcontent-%COMP%] {\n  padding-top: 7em;\n  min-height: 100vh;\n  padding-bottom: 7em;\n}\n\n.portfolio-section[_ngcontent-%COMP%] {\n  padding-bottom: 7em;\n  padding-top: 7em;\n  min-height: 100vh;\n}\n\n.contactus-section[_ngcontent-%COMP%] {\n  padding-top: 7em;\n  padding-bottom: 7em;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxGOztBQU1FO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBSko7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUpKOztBQU9JO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFMTjs7QUFNTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSlI7O0FBS1E7RUF6Q04scURBQUE7RUEyQ1Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhWOztBQUlVO0VBbERSLHFEQUFBO0VBb0RVLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGWjs7QUFHWTtFQXpEVixxREFBQTtFQTJEWSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEZDs7QUFFYztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQUFoQjs7QUFLUTtFQTdFTixxREFBQTtFQStFUSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSFY7O0FBT1E7RUFDRSxXQUFBO0FBTFY7O0FBT1k7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FBTGQ7O0FBU1E7RUFDRSxZQUFBO0FBUFY7O0FBYUE7RUFDRTtJQUNFLHVCQUFBO0VBVkY7QUFDRjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVZGOztBQVdFO0VBQ0UsWUFBQTtBQVRKOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBRUEseUJBQUE7RUFFQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVdBO0VBRUUsbUJBQUE7QUFSRjs7QUFVQTtFQUNFLFNBQUE7RUFFQSxzQkFBQTtBQVBGOztBQVNBO0VBQ0UsU0FBQTtFQUVBLHFCQUFBO0FBTkY7O0FBbUJBO0VBQ0U7SUFDRSxVQUFBO0VBTEY7RUFPQTtJQUNFLFVBQUE7RUFMRjtFQU9BO0lBQ0UsVUFBQTtFQUxGO0FBQ0Y7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUxGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gdHJhbnNpdGlvbihcclxuICAkcHJvcGVydHk6IGFsbCxcclxuICAkZHVyYXRpb246IDAuNDVzLFxyXG4gICRlYXNlOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4wNzYsIDEpXHJcbikge1xyXG4gIHRyYW5zaXRpb246ICRwcm9wZXJ0eSAkZHVyYXRpb24gJGVhc2U7XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5oZXJvLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAuc3ViLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMyZjg5ZmM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gIH1cclxuICAubG90dGllLWFuaW1hdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIGRpdiB7XHJcbiAgICBhIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAmLmxlYXJuLW1vcmUge1xyXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCwgMC40NXMsIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjA3NiwgMSkpO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyZjg5ZmM7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjYyNXJlbTtcclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4wNzYsIDEpKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgJi5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDAuNDVzLCBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4wNzYsIDEpKTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwLjYyNXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4xMjVyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLjEyNXJlbTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLjA2MjVyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC4xMjVyZW0gc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMC4xMjVyZW0gc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi10ZXh0IHtcclxuICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAwLjQ1cywgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMDc2LCAxKSk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIDEuODVyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzJmODlmYztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgJi5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXJlbSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi10ZXh0IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5oZXJvLXNlY3Rpb24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcbi5zY3JvbGwtZG93biB7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG4uc2Nyb2xsLWRvd24gc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNkYjA3IDJzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogc2RiMDcgMnMgaW5maW5pdGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5zY3JvbGwtZG93biBzcGFuOm50aC1vZi10eXBlKDEpIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG4uc2Nyb2xsLWRvd24gc3BhbjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgdG9wOiAxNnB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuMTVzO1xyXG59XHJcbi5zY3JvbGwtZG93biBzcGFuOm50aC1vZi10eXBlKDMpIHtcclxuICB0b3A6IDMycHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzZGIwNyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzZGIwNyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuLmFib3V0LXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOiA3ZW07XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLXRvcDogMTcwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDdlbTtcclxufVxyXG4uc2VydmljZXMtc2VjdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDdlbTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogN2VtO1xyXG59XHJcbi5wb3J0Zm9saW8tc2VjdGlvbiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDdlbTtcclxuICBwYWRkaW5nLXRvcDogN2VtO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb250YWN0dXMtc2VjdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDdlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogN2VtO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_3__["ScrollService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IBKv":
/*!****************************************************************!*\
  !*** ./src/app/single-portfolio/single-portfolio.component.ts ***!
  \****************************************************************/
/*! exports provided: SinglePortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePortfolioComponent", function() { return SinglePortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");







function SinglePortfolioComponent_div_0_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.portfolio.github_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "../../assets/svg/icons8-github.svg");
} }
function SinglePortfolioComponent_div_0_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.portfolio.project_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SinglePortfolioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SinglePortfolioComponent_div_0_a_7_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SinglePortfolioComponent_div_0_a_8_Template, 3, 1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate2"]("background-image: url('/assets/uploads/", ctx_r0.portfolio.name, "/", ctx_r0.portfolio.main_image.url, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", ctx_r0.routeChanged ? "500" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.portfolio.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-aos-delay", ctx_r0.routeChanged ? "500" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.portfolio.github_link !== "private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.portfolio.project_link !== "private");
} }
function SinglePortfolioComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.portfolio.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class SinglePortfolioComponent {
    constructor(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.portfolio = null;
        this.routeChanged = false;
    }
    ngOnInit() {
        if (this.projectService.getProjects) {
            this.route.params.subscribe((params) => {
                this.routeChanged = true;
                this.portfolio = this.projectService.getProjects.find((portfolio) => portfolio.name === params['id']);
            });
        }
        if (!this.portfolio) {
            this.route.params
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
                return this.projectService.getPortfolio(params['id']);
            }))
                .subscribe((portfolio) => {
                this.portfolio = portfolio;
            }, (err) => {
                this.errMess = err;
            });
        }
    }
}
SinglePortfolioComponent.ɵfac = function SinglePortfolioComponent_Factory(t) { return new (t || SinglePortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SinglePortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SinglePortfolioComponent, selectors: [["app-single-portfolio"]], decls: 6, vars: 2, consts: [["class", "full-page_image", 3, "style", 4, "ngIf"], ["data-aos", "fade-up", 1, "row", "portfolio-details"], [1, "col", "col-12"], ["class", "col col-12", "style", "color: #beb9b9; font-size: 16.5px", 3, "innerHTML", 4, "ngIf"], [1, "full-page_image"], [1, "portfolio-heading"], ["data-aos", "fade-up", 1, "h1", "text-center"], ["data-aos", "fade-up", 1, "text-center"], [1, "links"], ["target", "blank", "class", "btn project-link github-link", 3, "href", 4, "ngIf"], ["target", "blank", 1, "btn", "project-link", "github-link", 3, "href"], [3, "inlineSVG"], [1, "btn", "btn-primary"], [1, "col", "col-12", 2, "color", "#beb9b9", "font-size", "16.5px", 3, "innerHTML"]], template: function SinglePortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SinglePortfolioComponent_div_0_Template, 9, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About The Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SinglePortfolioComponent_div_5_Template, 1, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolio);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGDirective"]], styles: [".full-page_image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  background-color: #121212a2;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-blend-mode: overlay;\n}\n.full-page_image[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n.full-page_image[_ngcontent-%COMP%]   .portfolio-heading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\n.full-page_image[_ngcontent-%COMP%]   .portfolio-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #f33a3a;\n}\n.portfolio-details[_ngcontent-%COMP%] {\n  margin-top: 100vh;\n  padding-top: 4em;\n  padding-bottom: 6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpbmdsZS1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUVKO0FBREk7RUFDRSxjQUFBO0FBR047QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGIiwiZmlsZSI6InNpbmdsZS1wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1wYWdlX2ltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyYTI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XHJcbiAgLmxpbmtzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAucG9ydGZvbGlvLWhlYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGg1IHtcclxuICAgICAgY29sb3I6IHJnYigyNDMsIDU4LCA1OCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wb3J0Zm9saW8tZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMTAwdmg7XHJcbiAgcGFkZGluZy10b3A6IDRlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNmVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinglePortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-portfolio',
                templateUrl: './single-portfolio.component.html',
                styleUrls: ['./single-portfolio.component.scss'],
            }]
    }], function () { return [{ type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "MzDm":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceComponent.ɵfac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(); };
ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], decls: 41, vars: 0, consts: [[1, "main-row", "row", "text-center"], [1, "col", "col-12", "mb-5", "pb-5"], ["data-aos", "zoom-out", 1, "h6", "sub-heading", "text-muted"], ["data-aos", "zoom-out", 1, "h1", "main-heading"], [1, "col", "col-12"], [1, "row"], ["data-aos", "fade-up", 1, "col", "col-12", "col-lg-4", "d-flex", "align-self-stretch"], [1, "media", "block-6", "services", "p-3", "py-4", "d-block", "text-center"], [1, "icon", "mb-3"], ["src", "../../assets/svg/iconfinder-icon.svg", "alt", ""], [1, "media-body"], [1, "heading"], ["data-aos", "fade-up", "data-aos-offset", "100", 1, "col", "col-12", "col-lg-4", "d-flex", "align-self-stretch"], ["src", "../../assets/svg/iconfinder-icon (1).svg", "alt", ""], ["data-aos", "fade-up", "data-aos-offset", "200", 1, "col", "col-12", "col-lg-4", "d-flex", "align-self-stretch"], [1, "icon", "mb-4"], ["src", "../../assets/svg/iconfinder-icon (3).svg", "alt", ""], [1, "media-body", "mt-3"]], template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What I do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "HTML/CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Responsive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Web Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Angular/React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "NodeJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Desktop Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Web Scraping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Electron/Puppeteer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".block-6[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 100px;\n}\n.block-6[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n.block-6[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUFFO0VBQ0UsaUJBQUE7QUFFSjtBQUVFO0VBQ0UsV0FBQTtBQUFKIiwiZmlsZSI6InNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2stNiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgaDUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service',
                templateUrl: './service.component.html',
                styleUrls: ['./service.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NLgP":
/*!******************************************************!*\
  !*** ./src/app/services/process-http-msg.service.ts ***!
  \******************************************************/
/*! exports provided: ProcessHttpMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHttpMsgService", function() { return ProcessHttpMsgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ProcessHttpMsgService {
    constructor() { }
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    }
}
ProcessHttpMsgService.ɵfac = function ProcessHttpMsgService_Factory(t) { return new (t || ProcessHttpMsgService)(); };
ProcessHttpMsgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessHttpMsgService, factory: ProcessHttpMsgService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessHttpMsgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/app.animation */ "gQL+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["scrollbar"];
const _c1 = ["header"];
class AppComponent {
    constructor(renderer, meta, platformId) {
        this.renderer = renderer;
        this.meta = meta;
        this.platformId = platformId;
        this.title = 'portfolio';
        this.meta.addTag({
            name: 'description',
            content: 'Hi I am Kushak Jafry. A full stack web developer skilled in MEAN stack(Angular, Express, Nodejs and MongoDB). Contact Me at kushakjafry@gmail.com',
        });
        this.meta.addTag({ name: 'author', content: 'Kushak Jafry' });
        this.meta.addTag({
            name: 'keywords',
            content: 'Portfolio, Personal Portfolio, Angular',
        });
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
                duration: 500,
            });
        }
    }
    onScroll($event) {
        this.renderer.addClass(this.header.nativeElement, 'scrolled');
        this.renderer.setStyle(this.scrollBar.nativeElement, 'width', `${(window.pageYOffset /
            (document.body.scrollHeight - window.innerHeight)) *
            100}%`);
        if (window.pageYOffset === 0) {
            this.renderer.removeClass(this.header.nativeElement, 'scrolled');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 8, vars: 1, consts: [[1, "scroll-bar"], ["scrollbar", ""], ["header", ""], [1, "container", "main-page"], ["o", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routeAnimations", _r2 && _r2.activatedRouteData && _r2.activatedRouteData["animation"]);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\n  padding: 2em 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9;\n  margin: 0 auto;\n  position: fixed;\n  transition: all 0.5s;\n}\n\n.main-page[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding-top: 6em;\n  padding-bottom: 6em;\n}\n\n.scroll-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  border-radius: 0px 5px 5px 0px;\n  width: 0%;\n  height: 5px;\n  background-image: linear-gradient(to right, #2f89fc, #9ac5fd);\n}\n\nheader.scrolled[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  background-color: #0e0e0e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUFHRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFibGVzXCI7XHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZzogMmVtIDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcbi5tYWluLXBhZ2Uge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZy10b3A6IDZlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNmVtO1xyXG59XHJcbi5zY3JvbGwtYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwMHB4IDVweCA1cHggMDBweDtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkYmx1ZS1wcmltYXJ5LCAjOWFjNWZkKTtcclxufVxyXG5oZWFkZXIuc2Nyb2xsZWQge1xyXG4gIHBhZGRpbmc6IDFlbSAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTBlMGU7XHJcbn1cclxuIl19 */"], data: { animation: [_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["slideInAnimation"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }]; }, { scrollBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['scrollbar']
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['header']
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactus/contactus.component */ "sOoW");
/* harmony import */ var _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/process-http-msg.service */ "NLgP");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/project.service */ "c3AT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/baseUrl */ "hmTX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _single_portfolio_single_portfolio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./single-portfolio/single-portfolio.component */ "IBKv");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lottie-web */ "lPHp");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");
























function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_18___default.a;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_11__["ProcessHttpMsgService"],
        _services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
        { provide: 'baseURL', useValue: _shared_baseUrl__WEBPACK_IMPORTED_MODULE_14__["baseURL"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_17__["LottieModule"].forRoot({ player: playerFactory }),
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_19__["InlineSVGModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"],
        _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
        _single_portfolio_single_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["SinglePortfolioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_17__["LottieModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_19__["InlineSVGModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _service_service_component__WEBPACK_IMPORTED_MODULE_8__["ServiceComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"],
                    _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
                    _single_portfolio_single_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["SinglePortfolioComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    ngx_lottie__WEBPACK_IMPORTED_MODULE_17__["LottieModule"].forRoot({ player: playerFactory }),
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_19__["InlineSVGModule"].forRoot(),
                ],
                providers: [
                    _services_process_http_msg_service__WEBPACK_IMPORTED_MODULE_11__["ProcessHttpMsgService"],
                    _services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
                    { provide: 'baseURL', useValue: _shared_baseUrl__WEBPACK_IMPORTED_MODULE_14__["baseURL"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "c3AT":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/baseUrl */ "hmTX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-http-msg.service */ "NLgP");






class ProjectService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    getPortfolios() {
        return this.http
            .get(_shared_baseUrl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + 'projects')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getPortfolio(id) {
        return this.http
            .get(_shared_baseUrl__WEBPACK_IMPORTED_MODULE_2__["baseURL"] + `projects/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    get getProjects() {
        return this.projects;
    }
    set setProjects(projects) {
        this.projects = projects;
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHttpMsgService"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _process_http_msg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHttpMsgService"] }]; }, null); })();


/***/ }),

/***/ "gQL+":
/*!*********************************************!*\
  !*** ./src/app/animations/app.animation.ts ***!
  \*********************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Contact => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), {
            optional: true,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
            ], { optional: true }),
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'translateY(100%)',
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                opacity: 1,
            }),
        ]),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' })),
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: 1,
                zIndex: 11,
                transform: 'translateY(0)',
            }),
        ]),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' })),
        ]),
    ]),
]);


/***/ }),

/***/ "hmTX":
/*!***********************************!*\
  !*** ./src/app/shared/baseUrl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
const baseURL = '/api/';


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/scroll.service */ "uPsD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["fullMenu"];
const _c1 = ["navlink"];
const _c2 = function () { return ["/"]; };
function NavbarComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function NavbarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.hideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kushak Jafry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.linkClicked("home"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.linkClicked("portfolios"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.linkClicked("services"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.linkClicked("about"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.linkClicked("contact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.hideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " .cls-1 { fill: none; stroke: #000000; stroke-miterlimit: 10; stroke-width: 5; } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Asset 12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "line", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(renderer, router, scrollService, platformId) {
        this.renderer = renderer;
        this.router = router;
        this.scrollService = scrollService;
        this.platformId = platformId;
        this.visibleMenu = true;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url.includes('/portfolio/')) {
                    this.visibleMenu = false;
                }
                else {
                    this.visibleMenu = true;
                }
            }
        });
    }
    ngAfterViewInit() {
        var _a;
        this.renderer.setStyle((_a = this.fullMenu) === null || _a === void 0 ? void 0 : _a.nativeElement, 'display', 'none');
    }
    showNav() {
        var _a, _b;
        this.renderer.addClass((_a = this.fullMenu) === null || _a === void 0 ? void 0 : _a.nativeElement, 'show');
        this.renderer.setStyle((_b = this.fullMenu) === null || _b === void 0 ? void 0 : _b.nativeElement, 'display', 'flex');
        console.log(this.pageMenu);
        this.navLinksAnimationListener = this.renderer.listen(this.fullMenu.nativeElement, 'animationend', () => {
            this.pageMenu.forEach((link, index) => {
                this.renderer.setStyle(link.nativeElement, 'animation', `slideIn 1s ${index / 7}s`);
                let newLinkListner = this.renderer.listen(link.nativeElement, 'animationend', () => {
                    this.renderer.addClass(link.nativeElement, 'show');
                    if (newLinkListner) {
                        newLinkListner();
                    }
                });
            });
            this.navLinksAnimationListener();
        });
    }
    hideNav() {
        var _a, _b;
        this.renderer.removeClass((_a = this.fullMenu) === null || _a === void 0 ? void 0 : _a.nativeElement, 'show');
        this.pageMenu.forEach((link) => {
            this.renderer.removeClass(link.nativeElement, 'show');
        });
        this.navAnimationListener = this.renderer.listen((_b = this.fullMenu) === null || _b === void 0 ? void 0 : _b.nativeElement, 'animationend', () => {
            var _a;
            this.renderer.setStyle((_a = this.fullMenu) === null || _a === void 0 ? void 0 : _a.nativeElement, 'display', 'none');
            this.navAnimationListener();
        });
    }
    linkClicked(el) {
        this.scrollService.scrollIntoView(el);
        this.hideNav();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fullMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pageMenu = _t);
    } }, decls: 11, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col", "col-12"], [1, "nav"], ["data-aos", "fade-down", 1, "navbar-brand"], ["routerLink", ""], ["data-aos", "fade-down", 1, "home-button"], ["routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], ["class", "navbar-icon", "data-aos", "fade-down", 3, "click", 4, "ngIf"], ["class", "full-menu", 4, "ngIf"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["data-aos", "fade-down", 1, "navbar-icon", 3, "click"], [1, "full-menu"], ["fullMenu", ""], [1, "container-fluid"], [1, "page-menu"], ["pageMenu", ""], ["navlink", ""], ["routerLink", "/", "routerLinkActive", "active-link", 1, "h3", "mb-3", "d-inline-block", "nav_link_brand", 3, "click"], [1, "nav_link", 3, "click"], ["href", "http://", "target", "_blank"], ["src", "", "alt", ""], [1, "nav-close", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 51.71 52.7"], ["id", "Layer_2", "data-name", "Layer 2"], ["id", "Layer_1-2", "data-name", "Layer 1"], ["x1", "1.36", "y1", "1.35", "x2", "50.36", "y2", "50.35", 1, "cls-1"], ["x1", "0.36", "y1", "52.35", "x2", "51.36", "y2", "0.35", 1, "cls-1"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kushak Jafry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_a_8_Template, 2, 2, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_div_9_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_div_10_Template, 49, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.visibleMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visibleMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visibleMenu);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  color: white;\n  text-decoration: none;\n}\n.nav[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n}\n.nav[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 30px;\n  background-color: white;\n  height: 2.5px;\n  transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.nav[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.nav[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(-100%);\n}\n.nav[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(100%);\n}\n.nav[_ngcontent-%COMP%]   .home-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  padding: 10px 15px;\n  text-decoration: none !important;\n  color: white;\n  font-size: 14px;\n  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.nav[_ngcontent-%COMP%]   .home-button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  text-decoration: none;\n  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.full-menu[_ngcontent-%COMP%] {\n  width: 75vw;\n  height: 100vh;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.45);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  -webkit-clip-path: polygon(29% 0, 100% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(29% 0, 100% 0, 100% 100%, 0% 100%);\n  animation: hideNav 0.5s;\n}\n.full-menu[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.full-menu[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.full-menu[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  opacity: 0;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%]   li.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav_link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  color: black;\n  text-decoration: none;\n  font-size: 25px;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav_link[_ngcontent-%COMP%]::after {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  content: \"\";\n  width: 0%;\n  height: 2px;\n  background-color: black;\n  transition: width 0.3s ease-in;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav_link.active-link[_ngcontent-%COMP%] {\n  color: #2f89fc;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav_link.active-link[_ngcontent-%COMP%]::after {\n  all: initial;\n}\n.full-menu[_ngcontent-%COMP%]   .page-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav_link[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.full-menu[_ngcontent-%COMP%]   .nav-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  display: flex;\n  flex-direction: column;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n.full-menu[_ngcontent-%COMP%]   .nav-close[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.full-menu[_ngcontent-%COMP%]   .nav-close[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: transparent;\n}\n@media only screen and (min-width: 768px) {\n  .full-menu[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}\n.nav_link_brand[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n.full-menu.show[_ngcontent-%COMP%] {\n  display: flex;\n  animation: showNav 0.5s;\n}\n@keyframes showNav {\n  0% {\n    transform: translateX(50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n@keyframes hideNav {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(50%);\n    opacity: 0;\n  }\n}\n@keyframes slideIn {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDTjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsOERBQUE7QUFDTjtBQUFNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFFTTtFQUNFLDRCQUFBO0FBQVI7QUFFTTtFQUNFLDJCQUFBO0FBQVI7QUFLSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseURBQUE7QUFITjtBQU1NO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5REFBQTtBQUpSO0FBU0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0RBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSw2REFBQTtVQUFBLHFEQUFBO0VBQ0EsdUJBQUE7QUFORjtBQU9FO0VBQ0UsWUFBQTtBQUxKO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFLTTtFQUNFLFlBQUE7QUFIUjtBQU9FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFMSjtBQU1JO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBSk47QUFLTTtFQUNFLFVBQUE7QUFIUjtBQUtNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSFI7QUFJUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBRlY7QUFJUTtFQUNFLGNBQUE7QUFGVjtBQUdVO0VBQ0UsWUFBQTtBQURaO0FBS1U7RUFDRSxXQUFBO0FBSFo7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFQSjtBQVFJO0VBQ0UsdUJBQUE7QUFOTjtBQU9NO0VBQ0UsNkJBQUE7QUFMUjtBQVVBO0VBQ0U7SUFDRSxXQUFBO0VBUEY7QUFDRjtBQVNBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQVBGO0FBVUE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVBGO0VBU0E7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFQRjtBQUNGO0FBU0E7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQVBGO0VBU0E7SUFDRSwwQkFBQTtJQUNBLFVBQUE7RUFQRjtBQUNGO0FBU0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQVBGO0VBU0E7SUFDRSx5QkFBQTtJQUNBLFVBQUE7RUFQRjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMi41cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ob21lLWJ1dHRvbiB7XHJcbiAgICBhIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZ1bGwtbWVudSB7XHJcbiAgd2lkdGg6IDc1dnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcclxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4zNyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDI5JSAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgYW5pbWF0aW9uOiBoaWRlTmF2IDAuNXM7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAucm93IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAuY29sIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnBhZ2UtbWVudSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAubmF2X2xpbmsge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlLWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6IHJnYig0NywgMTM3LCAyNTIpO1xyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBhbGw6IGluaXRpYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5hdi1jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuZnVsbC1tZW51IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gIH1cclxufVxyXG4ubmF2X2xpbmtfYnJhbmQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mdWxsLW1lbnUuc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbmltYXRpb246IHNob3dOYXYgMC41cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93TmF2IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaGlkZU5hdiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { fullMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fullMenu']
        }], pageMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['navlink']
        }] }); })();


/***/ }),

/***/ "sOoW":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/baseUrl */ "hmTX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-inline-svg */ "e8Ap");








function ContactusComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function ContactusComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.messageSent, " ");
} }
const _c0 = function (a0) { return { "contact-me_spinner-shown": a0 }; };
const _c1 = function (a0) { return { "form-hidden": a0 }; };
const _c2 = function () { return { class: "github" }; };
const _c3 = function () { return { class: "linked-in" }; };
class ContactusComponent {
    constructor(http, builder) {
        this.http = http;
        this.builder = builder;
        this.spinnerShow = false;
        this.messageSent = '';
        this.error = '';
    }
    ngOnInit() {
        this.FormData = this.builder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    onSubmit(FormData) {
        this.spinnerShow = true;
        this.http.post(_shared_baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseURL"] + 'messages', FormData).subscribe((message) => {
            this.spinnerShow = false;
            this.messageSent = 'Message was Sent';
            this.FormData.reset();
        }, (err) => {
            this.spinnerShow = false;
            this.error = 'Message was Not Sent';
            this.FormData.reset();
        });
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 52, vars: 26, consts: [[1, "row", "contact-row"], [1, "col", "col-12", "mb-5", "pb-5"], ["data-aos", "fade-up", 1, "h6", "sub-heading", "text-muted", "text-center"], ["data-aos", "fade-up", 1, "h1", "main-heading", "text-center"], [1, "col", "col-12"], [1, "row"], [1, "col", "col-12", "col-sm-6", "contact-details"], ["data-aos", "fade-right"], [1, "text-muted"], ["href", "mailto:kushakjafry@gmail.com"], ["href", "tel:+917872626285"], [1, "col", "col-12", "col-sm-6", "text-center"], ["style", "color: rgb(168, 11, 11)", 4, "ngIf"], ["style", "color: rgb(20, 167, 20)", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "loadingio-spinner-rolling-66d5xngzi2", "contact-me_spinner", 3, "ngClass"], [1, "ldio-0u03igrkzr0j"], ["data-aos", "fade-left", 1, "form__group", "field", 3, "ngClass"], ["type", "input", "placeholder", "Name", "name", "name", "id", "name", "formControlName", "name", "required", "", 1, "form__field"], ["for", "name", 1, "form__label"], ["type", "input", "placeholder", "Email", "name", "email", "id", "email", "formControlName", "email", "required", "", 1, "form__field"], ["for", "email", 1, "form__label"], ["type", "input", "placeholder", "message", "name", "message", "id", "message", "rows", "3", "formControlName", "message", "required", "", 1, "form__field"], ["for", "message", 1, "form__label"], ["data-aos", "fade-up", "type", "submit", 1, "btn", "btn-primary", "btn-lg", "mt-4", 3, "ngClass", "disabled"], [1, "row", "mt-5"], ["data-aos", "fade-up", 1, "social-btn", "pl-5", "pr-5", "mt-4", "text-center"], ["href", "https://github.com/kushakjafry", "target", "_blank", 1, "btn"], [3, "inlineSVG", "setSVGAttributes"], ["href", "https://www.linkedin.com/in/kushak-jafry-95087a19b/", "target", "_blank", 1, "btn"], ["href", "https://twitter.com/KushakJafry", "target", "_blank", 1, "btn"], [3, "inlineSVG"], ["data-aos", "fade-up", 1, "col", "col-12", "text-center"], [2, "color", "rgb(168, 11, 11)"], [2, "color", "rgb(20, 167, 20)"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Have Any Idea Or Concept ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " kushakjafry@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " +917872626285");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactusComponent_p_20_Template, 2, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactusComponent_p_21_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactusComponent_Template_form_ngSubmit_22_listener() { return ctx.onSubmit(ctx.FormData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Copyright \u00A92021 All rights reserved | Kushak Jafry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.FormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.spinnerShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.spinnerShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.spinnerShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.spinnerShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.spinnerShow))("disabled", !ctx.FormData.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "../../assets/svg/icons8-github.svg")("setSVGAttributes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "../../assets/svg/linkedin.svg")("setSVGAttributes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "../../assets/svg/twitter.svg");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGDirective"]], styles: ["form[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.contact-me_spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -60%);\n  z-index: -100;\n  opacity: 0;\n  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.contact-me_spinner-shown[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 1;\n  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.form__group[_ngcontent-%COMP%] {\n  opacity: 1;\n  z-index: 0;\n  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n  width: 100%;\n}\n\n.form__field[_ngcontent-%COMP%] {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid #9b9b9b;\n  outline: 0;\n  font-size: 1.3rem;\n  color: #fff;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n}\n\n.form__field[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]:placeholder-shown    ~ .form__label[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n\n.form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #9b9b9b;\n}\n\n.form__field[_ngcontent-%COMP%]:focus {\n  padding-bottom: 6px;\n  font-weight: 700;\n  border-width: 3px;\n  border-image: linear-gradient(to right, #2f89fc, #9ac5fd);\n  border-image-slice: 1;\n}\n\n.form__field[_ngcontent-%COMP%]:focus    ~ .form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #2f89fc;\n  font-weight: 700;\n}\n\n\n\n.form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid {\n  box-shadow: none;\n}\n\n.contact-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.form-hidden[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n  z-index: -100 !important;\n  transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  cursor: default !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlEQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlEQUFBO0FBREY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FuQ007RUFvQ04sY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0F4REs7QUF1RFA7O0FBSUE7RUFVRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5REFBQTtFQUNBLHFCQUFBO0FBVkY7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FyRU07RUFzRU4sZ0JBQUE7QUFLSjs7QUFHQSxnQkFBQTs7QUFFRTtFQUVFLGdCQUFBO0FBRko7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBSUk7RUFDRSxxQkFBQTtBQUZOOztBQU1BO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUFIRiIsImZpbGUiOiJjb250YWN0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogIzJmODlmYztcclxuJHNlY29uZGFyeTogIzlhYzVmZDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JheTogIzliOWI5YjtcclxuZm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250YWN0LW1lX3NwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSk7XHJcbiAgei1pbmRleDogLTEwMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxufVxyXG4uY29udGFjdC1tZV9zcGlubmVyLXNob3duIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG59XHJcbi5mb3JtX19ncm91cCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTVweCAwIDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybV9fZmllbGQge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGdyYXk7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIHBhZGRpbmc6IDdweCAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAmOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm1fX2xhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAkZ3JheTtcclxufVxyXG5cclxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcclxuICB+IC5mb3JtX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRwcmltYXJ5LCAkc2Vjb25kYXJ5KTtcclxuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XHJcbn1cclxuLyogcmVzZXQgaW5wdXQgKi9cclxuLmZvcm1fX2ZpZWxkIHtcclxuICAmOnJlcXVpcmVkLFxyXG4gICY6aW52YWxpZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG4uY29udGFjdC1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwIHtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mb3JtLWhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IC0xMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus',
                templateUrl: './contactus.component.html',
                styleUrls: ['./contactus.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "uPsD":
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/*! exports provided: ScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollService {
    constructor() { }
    scrollIntoView(el) {
        const elem = this[el];
        elem.scrollIntoView({ behavior: 'smooth' });
    }
}
ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(); };
ScrollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _single_portfolio_single_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-portfolio/single-portfolio.component */ "IBKv");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { animation: 'Home' } },
    {
        path: 'portfolio/:id',
        component: _single_portfolio_single_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["SinglePortfolioComponent"],
        data: { animation: 'About' },
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                scrollPositionRestoration: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled',
                        scrollPositionRestoration: 'enabled',
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch((err) => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/project.service */ "c3AT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function PortfolioComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
const _c0 = function (a1) { return ["portfolio", a1]; };
function PortfolioComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", "/assets/uploads/" + project_r1.name + "/" + project_r1.main_image.url, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, project_r1.name));
} }
function PortfolioComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
function PortfolioComponent_div_7_div_4_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Live Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.project_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_div_7_div_4_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Github Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.github_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioComponent_div_7_div_4_a_7_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PortfolioComponent_div_7_div_4_a_8_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.small_description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.project_link !== "private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.github_link !== "private");
} }
function PortfolioComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", "/assets/uploads/" + project_r1.name + "/" + project_r1.main_image.url, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, project_r1.name));
} }
function PortfolioComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
function PortfolioComponent_div_7_div_7_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Live Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.project_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_div_7_div_7_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Github Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.github_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PortfolioComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioComponent_div_7_div_7_a_7_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PortfolioComponent_div_7_div_7_a_8_Template, 2, 1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.small_description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.project_link !== "private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r1.github_link !== "private");
} }
function PortfolioComponent_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} }
function PortfolioComponent_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", "/assets/uploads/" + project_r1.name + "/" + project_r1.main_image.url, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, project_r1.name));
} }
function PortfolioComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioComponent_div_7_div_1_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioComponent_div_7_div_2_Template, 2, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_div_7_div_3_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_div_7_div_4_Template, 9, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_div_7_div_5_Template, 2, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PortfolioComponent_div_7_div_6_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioComponent_div_7_div_7_Template, 9, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PortfolioComponent_div_7_div_8_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PortfolioComponent_div_7_div_9_Template, 2, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 % 2 == 1);
} }
class PortfolioComponent {
    constructor(projectService, baseURL) {
        this.projectService = projectService;
        this.baseURL = baseURL;
        this.projects = [];
        this.errMess = '';
    }
    ngOnInit() {
        if (this.projectService.getProjects) {
            this.projects = this.projectService.getProjects;
        }
        else {
            this.projectService.getPortfolios().subscribe((projects) => {
                this.projectService.setProjects = projects;
                this.projects = projects;
            }, (errmess) => (this.errMess = errmess));
        }
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('baseURL')); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 8, vars: 1, consts: [[1, "main-row", "row", "text-center"], [1, "col", "col-12", "mb-5", "pb-5"], ["data-aos", "fade-down", 1, "h6", "sub-heading", "text-muted"], ["data-aos", "zoom-out", "data-aos-duration", "1000", 1, "h1", "main-heading"], [1, "col", "col-12"], ["class", "row projects", 4, "ngFor", "ngForOf"], [1, "row", "projects"], ["class", "col col-12 col-sm-1 mt-sm-5 mb-sm-5", 4, "ngIf"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", "class", "col col-12 col-sm-4 project-image mt-sm-5 mb-sm-5", 3, "style", 4, "ngIf"], ["data-aos", "fade-left", "data-aos-anchor-placement", "center-bottom", "class", "col col-12 col-sm-6 text-md-left pt-5 pb-5 text-center text-sm-left mt-sm-5 mb-sm-5", 4, "ngIf"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", "class", "col col-12 col-sm-4 d-block d-sm-none project-image mt-sm-5 mb-sm-5", 3, "style", 4, "ngIf"], ["data-aos", "fade-right", "data-aos-anchor-placement", "center-bottom", "class", "col col-12 col-sm-6 text-md-left pt-5 pb-5 text-center text-sm-left mt-sm-5 mb-sm-5", 4, "ngIf"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", "class", "col col-12 col-sm-4 d-none d-sm-block project-image mt-sm-5 mb-sm-5", 3, "style", 4, "ngIf"], [1, "col", "col-12", "col-sm-1", "mt-sm-5", "mb-sm-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", 1, "col", "col-12", "col-sm-4", "project-image", "mt-sm-5", "mb-sm-5"], [1, "portfolio_link", 3, "routerLink"], ["data-aos", "fade-left", "data-aos-anchor-placement", "center-bottom", 1, "col", "col-12", "col-sm-6", "text-md-left", "pt-5", "pb-5", "text-center", "text-sm-left", "mt-sm-5", "mb-sm-5"], [1, "sub-heading", "text-muted"], [1, "mt-4", "mb-5"], [1, "text-muted", "mt-3", "mb-3"], ["target", "blank", 3, "href", 4, "ngIf"], ["target", "blank", 3, "href"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", 1, "col", "col-12", "col-sm-4", "d-block", "d-sm-none", "project-image", "mt-sm-5", "mb-sm-5"], ["data-aos", "fade-right", "data-aos-anchor-placement", "center-bottom", 1, "col", "col-12", "col-sm-6", "text-md-left", "pt-5", "pb-5", "text-center", "text-sm-left", "mt-sm-5", "mb-sm-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", 1, "col", "col-12", "col-sm-4", "d-none", "d-sm-block", "project-image", "mt-sm-5", "mb-sm-5"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Checkout a few of my works ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioComponent_div_7_Template, 10, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".projects[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n  height: 510px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media only screen and (max-width: 576px) {\n  .projects[_ngcontent-%COMP%]   .project-image[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n\n.portfolio_link[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUVJO0lBQ0UsYUFBQTtFQURKO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFGRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMge1xyXG4gIC5wcm9qZWN0LWltYWdlIHtcclxuICAgIGhlaWdodDogNTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5wcm9qZWN0cyB7XHJcbiAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wb3J0Zm9saW9fbGluayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss'],
            }]
    }], function () { return [{ type: _services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['baseURL']
            }] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map