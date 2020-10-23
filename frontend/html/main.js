(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\desafios\renato-filho\desafio-guara-frontend-angular\src\main.ts */"zUnb");


/***/ }),

/***/ "5U92":
/*!*********************************************!*\
  !*** ./src/app/service/material.service.ts ***!
  \*********************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MaterialService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:8080/material";
    }
    getMateriais() {
        return this.http.get(this.url);
    }
    getMaterialPorId(id) {
        return this.http.get(this.url + "/" + id);
    }
    getMateriasPrimas() {
        return this.http.get(this.url + "?materiaPrima=true");
    }
    postMaterial(materialForm) {
        return this.http.post(this.url, materialForm);
    }
    putMaterial(id, materialForm) {
        return this.http.put(this.url + "/" + id, materialForm);
    }
    deleteMaterial(id) {
        return this.http.delete(this.url + "/" + id);
    }
}
MaterialService.ɵfac = function MaterialService_Factory(t) { return new (t || MaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaterialService, factory: MaterialService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "7qFv":
/*!*************************************************************************!*\
  !*** ./src/app/pages/material/material-list/material-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialListComponent", function() { return MaterialListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/mensagens.alertas.service */ "UcZe");
/* harmony import */ var src_app_utils_material_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/material-utils */ "9pSi");
/* harmony import */ var src_app_service_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/material.service */ "5U92");
/* harmony import */ var src_app_service_ordem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/ordem.service */ "qY7T");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function MaterialListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mat\u00E9ria-Prima");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Estoque");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialListComponent_ng_template_4_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const materiaPrima_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](materiaPrima_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Em estoque: ", materiaPrima_r4.quantidadeEmEstoque, "");
} }
function MaterialListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MaterialListComponent_ng_template_4_ul_6_Template, 5, 2, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialListComponent_ng_template_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const material_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.gerarOrdemDeProducao(material_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialListComponent_ng_template_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const material_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.routerPage(material_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialListComponent_ng_template_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const material_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.excluir(material_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](material_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](material_r2.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", material_r2.materiaisDeProducaoDTO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quantidade: ", material_r2.quantidadeEmEstoque, "");
} }
class MaterialListComponent {
    constructor(materialService, ordemService, router) {
        this.materialService = materialService;
        this.ordemService = ordemService;
        this.router = router;
    }
    ngOnInit() {
        this.buscarMateriais();
    }
    excluir(idMaterial) {
        src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].confirmacao('Ordem de Produção', 'Deseja realmente gerar ordem de produção para este Material?', 'warning')
            .then(result => {
            if (result.isConfirmed) {
                this.materialService.deleteMaterial(idMaterial).subscribe(sucesso => {
                    this.responseMateriais = this.responseMateriais.filter(res => res.id != idMaterial);
                    src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].sucesso("Material deletado com sucesso!");
                }, erro => {
                    src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].erro("Não foi possível deletar o registro, pode haver outros registro que dependam dele.");
                });
            }
        });
    }
    gerarOrdemDeProducao(MaterialDTO) {
        src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].confirmacao('Ordem de Produção', 'Deseja realmente gerar ordem de produção para este Material?', 'warning')
            .then(result => {
            if (result.isConfirmed) {
                const materialFormConvertido = src_app_utils_material_utils__WEBPACK_IMPORTED_MODULE_2__["MaterialUtils"].converterMaterialDTOToForm(MaterialDTO);
                const ordemProducaoForm = {
                    materialForm: materialFormConvertido
                };
                this.ordemService.postOrdem(ordemProducaoForm).subscribe(sucesso => {
                    this.buscarMateriais();
                    src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].sucesso("Ordem de Produção gerada com sucesso!");
                }, erro => {
                    src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].erro(erro.error);
                });
            }
        });
    }
    routerPage(material = null) {
        if (material !== null) {
            this.router.navigateByUrl("/material-form/" + material.id);
        }
        else {
            this.router.navigateByUrl("/material-form");
        }
    }
    buscarMateriais() {
        this.materialService.getMateriais().subscribe(res => {
            this.responseMateriais = res;
        });
    }
}
MaterialListComponent.ɵfac = function MaterialListComponent_Factory(t) { return new (t || MaterialListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ordem_service__WEBPACK_IMPORTED_MODULE_4__["OrdemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MaterialListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaterialListComponent, selectors: [["app-material-list"]], decls: 7, vars: 2, consts: [[3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "label", "Cadastrar Material", "type", "button", "pRipple", "", 1, "p-button-secondary", 3, "click"], ["pButton", "", "label", "Listar Ordens de Produ\u00E7\u00E3o", "type", "button", "pRipple", "", 1, "p-button-info", 3, "routerLink"], [4, "ngFor", "ngForOf"], ["pButton", "", "type", "button", "icon", "pi pi-directions", "title", "Ordem de Produ\u00E7\u00E3o", 1, "p-button-raised", "p-button-rounded", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-pencil", "title", "Editar", 1, "p-button-raised", "p-button-rounded", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-trash", "title", "Excluir", 1, "p-button-raised", "p-button-rounded", 3, "click"]], template: function MaterialListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Challenge Guararapes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MaterialListComponent_ng_template_3_Template, 11, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MaterialListComponent_ng_template_4_Template, 13, 4, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialListComponent_Template_button_click_5_listener() { return ctx.routerPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.responseMateriais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/ordem-list");
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_6__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["button[_ngcontent-%COMP%] {\r\n    margin: 20px 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWF0ZXJpYWwvbWF0ZXJpYWwtbGlzdC9tYXRlcmlhbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXRlcmlhbC9tYXRlcmlhbC1saXN0L21hdGVyaWFsLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-material-list',
                templateUrl: './material-list.component.html',
                styleUrls: ['./material-list.component.css']
            }]
    }], function () { return [{ type: src_app_service_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"] }, { type: src_app_service_ordem_service__WEBPACK_IMPORTED_MODULE_4__["OrdemService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "9pSi":
/*!*****************************************!*\
  !*** ./src/app/utils/material-utils.ts ***!
  \*****************************************/
/*! exports provided: MaterialUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialUtils", function() { return MaterialUtils; });
class MaterialUtils {
    static converterMaterialDTOToForm(materialDTO) {
        const materiaisJaconvertidos = this.converterListaDeMateriaisDTOToForm(materialDTO.materiaisDeProducaoDTO);
        const materialForm = {
            id: materialDTO.id,
            nome: materialDTO.nome,
            estoqueForm: {
                quantidade: materialDTO.quantidadeEmEstoque
            },
            materiaisDeProducaoForm: materiaisJaconvertidos
        };
        return materialForm;
    }
    static converterListaDeMateriaisDTOToForm(materiaisDTO) {
        let materiaisForm = [];
        if (materiaisDTO == null || materiaisDTO.length == 0) {
            return null;
        }
        materiaisDTO.forEach(element => {
            materiaisForm.push(this.converterMaterialDTOToForm(element));
        });
        return materiaisForm;
    }
}


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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'challenge-guararapes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UcZe":
/*!******************************************************!*\
  !*** ./src/app/service/mensagens.alertas.service.ts ***!
  \******************************************************/
/*! exports provided: MensagensDeAlertaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagensDeAlertaService", function() { return MensagensDeAlertaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



class MensagensDeAlertaService {
    constructor() { }
    static sucesso(subtitle) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Sucesso", subtitle, 'success');
    }
    static erro(subtitle) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Erro", subtitle, 'error');
    }
    static confirmacao(title, text, icon) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: title,
            text: text,
            showCancelButton: true,
            confirmButtonText: 'Sim',
        });
    }
}
MensagensDeAlertaService.ɵfac = function MensagensDeAlertaService_Factory(t) { return new (t || MensagensDeAlertaService)(); };
MensagensDeAlertaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MensagensDeAlertaService, factory: MensagensDeAlertaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MensagensDeAlertaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _pages_material_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/material/material-form/material-form.component */ "q9mU");
/* harmony import */ var _pages_material_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/material/material-list/material-list.component */ "7qFv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pages_ordem_producao_ordem_list_ordem_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/ordem-producao/ordem-list/ordem-list.component */ "zQqc");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_material_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_8__["MaterialFormComponent"],
        _pages_material_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_9__["MaterialListComponent"],
        _pages_ordem_producao_ordem_list_ordem_list_component__WEBPACK_IMPORTED_MODULE_13__["OrdemListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_material_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_8__["MaterialFormComponent"],
                    _pages_material_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_9__["MaterialListComponent"],
                    _pages_ordem_producao_ordem_list_ordem_list_component__WEBPACK_IMPORTED_MODULE_13__["OrdemListComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "q9mU":
/*!*************************************************************************!*\
  !*** ./src/app/pages/material/material-form/material-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: MaterialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFormComponent", function() { return MaterialFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/mensagens.alertas.service */ "UcZe");
/* harmony import */ var src_app_service_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/material.service */ "5U92");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function MaterialFormComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mat\u00E9ria-Prima");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quantidade em Estoque");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialFormComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialFormComponent_ng_template_19_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const material_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.remover(material_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const material_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](material_r4.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](material_r4.quantidadeEmEstoque);
} }
function MaterialFormComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialFormComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cadastrar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialFormComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialFormComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.atualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "200px" }; };
class MaterialFormComponent {
    constructor(materialService, route, router) {
        this.materialService = materialService;
        this.route = route;
        this.router = router;
        this.atualizandoRegistro = false;
        this.materialDoForm = {
            id: 0,
            nome: '',
            materiaisDeProducaoForm: [],
            estoqueForm: {
                quantidade: 0
            }
        };
    }
    ngOnInit() {
        this.atualizarRegistroParaEdicao();
        this.buscarMateriasPrimas();
    }
    adicionar() {
        if (this.responseMateriasPrimas.length > 0 && this.materiaPrimaSelecionada != null) {
            this.materialDoForm.materiaisDeProducaoForm.push(this.materiaPrimaSelecionada);
            this.responseMateriasPrimas = this.responseMateriasPrimas.filter(material => material.id != this.materiaPrimaSelecionada.id);
            this.materiaPrimaSelecionada = this.responseMateriasPrimas[0];
        }
    }
    remover(materialASerRemovido) {
        this.materialDoForm.materiaisDeProducaoForm = this.materialDoForm.materiaisDeProducaoForm.filter(material => material.id != materialASerRemovido.id);
        this.responseMateriasPrimas = [...this.responseMateriasPrimas, materialASerRemovido];
        this.materiaPrimaSelecionada = materialASerRemovido;
    }
    cadastrar() {
        this.materialService.postMaterial(this.materialDoForm).subscribe(sucesso => {
            this.buscarMateriasPrimas();
            this.router.navigateByUrl("/material-list");
            src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].sucesso("Registro cadastrado com sucesso.");
        }, erro => {
            src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].erro("Não foi possível cadastrar o registro.");
        });
    }
    atualizar() {
        this.materialService.putMaterial(this.materialDoForm.id, this.materialDoForm).subscribe(sucesso => {
            this.router.navigateByUrl("/material-list");
            src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].sucesso("Registro atualizado com sucesso.");
        }, erro => {
            src_app_service_mensagens_alertas_service__WEBPACK_IMPORTED_MODULE_1__["MensagensDeAlertaService"].erro("Não foi possível atualizar o registro.");
        });
    }
    buscarMateriasPrimas() {
        this.materialService.getMateriasPrimas().subscribe(res => {
            this.responseMateriasPrimas = res;
            this.materiaPrimaSelecionada = res[0];
        });
    }
    atualizarRegistroParaEdicao() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id !== null) {
            this.atualizandoRegistro = true;
            this.materialService.getMaterialPorId(id).subscribe(res => {
                this.materialDoForm.id = res.id;
                this.materialDoForm.nome = res.nome;
                this.materialDoForm.estoqueForm.quantidade = res.quantidadeEmEstoque;
                res.materiaisDeProducaoDTO.forEach(element => {
                    const materialDeProducaoForm = {
                        id: element.id,
                        nome: element.nome,
                        materiaisDeProducaoForm: null,
                        estoqueForm: {
                            quantidade: element.quantidadeEmEstoque
                        }
                    };
                    this.materialDoForm.materiaisDeProducaoForm = [...this.materialDoForm.materiaisDeProducaoForm, materialDeProducaoForm];
                });
            });
        }
    }
}
MaterialFormComponent.ɵfac = function MaterialFormComponent_Factory(t) { return new (t || MaterialFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MaterialFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaterialFormComponent, selectors: [["app-material-form"]], decls: 24, vars: 11, consts: [[1, "content"], ["for", "nome"], ["id", "nome", "type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "qtd"], ["id", "qtd", "type", "number", "pInputText", "", 3, "ngModel", "ngModelChange"], ["for", "qtd", 1, "select"], ["optionLabel", "nome", 3, "options", "ngModel", "ngModelChange"], ["pButton", "", "label", "Adicionar", "type", "button", 1, "p-button-raised", "p-button-rounded", 3, "click"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "label", "Cadastrar", "type", "button", "class", "p-button-raised p-button-secondary", 3, "click", 4, "ngIf"], ["pButton", "", "label", "Atualizar", "type", "button", "class", "p-button-raised p-button-secondary", 3, "click", 4, "ngIf"], ["pButton", "", "label", "Voltar", "type", "button", 1, "p-button-raised", "p-button-secondary", 3, "routerLink"], ["pButton", "", "label", "Excluir", "type", "button", 1, "p-button-raised", "p-button-danger", 3, "click"], ["pButton", "", "label", "Cadastrar", "type", "button", 1, "p-button-raised", "p-button-secondary", 3, "click"], ["pButton", "", "label", "Atualizar", "type", "button", 1, "p-button-raised", "p-button-secondary", 3, "click"]], template: function MaterialFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cadastro de Materiais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome do Material: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MaterialFormComponent_Template_input_ngModelChange_5_listener($event) { return ctx.materialDoForm.nome = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantidade em Estoque: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MaterialFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.materialDoForm.estoqueForm.quantidade = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mat\u00E9ria Prima para Procu\u00E7\u00E3o: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MaterialFormComponent_Template_p_dropdown_ngModelChange_13_listener($event) { return ctx.materiaPrimaSelecionada = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MaterialFormComponent_Template_button_click_14_listener() { return ctx.adicionar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mat\u00E9ria Prima do Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MaterialFormComponent_ng_template_18_Template, 7, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MaterialFormComponent_ng_template_19_Template, 7, 2, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MaterialFormComponent_button_21_Template, 1, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MaterialFormComponent_button_22_Template, 1, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.materialDoForm.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.materialDoForm.estoqueForm.quantidade);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.responseMateriasPrimas)("ngModel", ctx.materiaPrimaSelecionada);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.materialDoForm.materiaisDeProducaoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.atualizandoRegistro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.atualizandoRegistro);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/material-list");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_8__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["span[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin: 20px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 30px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 15px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n    width: 222px;\r\n    height: 30px; \r\n    line-height: 30px; \r\n}\r\n\r\nlabel.select[_ngcontent-%COMP%] {\r\n    padding: 0.3rem 0;;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWF0ZXJpYWwvbWF0ZXJpYWwtZm9ybS9tYXRlcmlhbC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWF0ZXJpYWwvbWF0ZXJpYWwtZm9ybS9tYXRlcmlhbC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMjJweDtcclxuICAgIGhlaWdodDogMzBweDsgXHJcbiAgICBsaW5lLWhlaWdodDogMzBweDsgXHJcbn1cclxuXHJcbmxhYmVsLnNlbGVjdCB7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMDs7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-material-form',
                templateUrl: './material-form.component.html',
                styleUrls: ['./material-form.component.css']
            }]
    }], function () { return [{ type: src_app_service_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "qY7T":
/*!******************************************!*\
  !*** ./src/app/service/ordem.service.ts ***!
  \******************************************/
/*! exports provided: OrdemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemService", function() { return OrdemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OrdemService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:8080/ordem";
    }
    getOrdens() {
        return this.http.get(this.url);
    }
    getOrdemPorId(id) {
        return this.http.get(this.url + "/" + id);
    }
    postOrdem(ordemPro) {
        return this.http.post(this.url, ordemPro);
    }
}
OrdemService.ɵfac = function OrdemService_Factory(t) { return new (t || OrdemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OrdemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdemService, factory: OrdemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _pages_material_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/material/material-form/material-form.component */ "q9mU");
/* harmony import */ var _pages_material_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/material/material-list/material-list.component */ "7qFv");
/* harmony import */ var _pages_ordem_producao_ordem_list_ordem_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/ordem-producao/ordem-list/ordem-list.component */ "zQqc");







const routes = [
    { path: '', component: _pages_material_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_3__["MaterialListComponent"] },
    { path: 'material-list', component: _pages_material_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_3__["MaterialListComponent"] },
    { path: 'material-form', component: _pages_material_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_2__["MaterialFormComponent"] },
    { path: 'material-form/:id', component: _pages_material_material_form_material_form_component__WEBPACK_IMPORTED_MODULE_2__["MaterialFormComponent"] },
    { path: 'ordem-list', component: _pages_ordem_producao_ordem_list_ordem_list_component__WEBPACK_IMPORTED_MODULE_4__["OrdemListComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zQqc":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ordem-producao/ordem-list/ordem-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrdemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdemListComponent", function() { return OrdemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_ordem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/ordem.service */ "qY7T");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function OrdemListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome do Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Data/Hor\u00E1rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrdemListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ordem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ordem_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ordem_r2.nomeMaterial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ordem_r2.dataOrdem);
} }
class OrdemListComponent {
    constructor(ordemService) {
        this.ordemService = ordemService;
    }
    ngOnInit() {
        this.buscarOrdens();
    }
    buscarOrdens() {
        this.ordemService.getOrdens().subscribe(res => {
            this.resOrdens = res;
        });
    }
}
OrdemListComponent.ɵfac = function OrdemListComponent_Factory(t) { return new (t || OrdemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_ordem_service__WEBPACK_IMPORTED_MODULE_1__["OrdemService"])); };
OrdemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdemListComponent, selectors: [["app-ordem-list"]], decls: 6, vars: 2, consts: [[3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["pButton", "", "label", "Voltar", "type", "button", 1, "p-button-raised", "p-button-secondary", 3, "routerLink"]], template: function OrdemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Challenge Guararapes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrdemListComponent_ng_template_3_Template, 7, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrdemListComponent_ng_template_4_Template, 7, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.resOrdens);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/material-list");
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_2__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: ["button[_ngcontent-%COMP%] {\r\n    margin: 20px 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZW0tcHJvZHVjYW8vb3JkZW0tbGlzdC9vcmRlbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlbS1wcm9kdWNhby9vcmRlbS1saXN0L29yZGVtLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDIwcHggNXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ordem-list',
                templateUrl: './ordem-list.component.html',
                styleUrls: ['./ordem-list.component.css']
            }]
    }], function () { return [{ type: src_app_service_ordem_service__WEBPACK_IMPORTED_MODULE_1__["OrdemService"] }]; }, null); })();


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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map