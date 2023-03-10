'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ligabasket documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"' : 'data-target="#xs-components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"' : 'id="xs-components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CredencialComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CredencialComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CredencialesInternasComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CredencialesInternasComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EditarPreDeleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EditarPreDeleComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EditarPreinscripcionDelegadoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EditarPreinscripcionDelegadoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EliminarPreinscripcionDelegadoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EliminarPreinscripcionDelegadoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EliminarjugadoresComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EliminarjugadoresComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EquiposAprobadosComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EquiposAprobadosComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EquiposMenuComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EquiposMenuComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EquiposgeneralComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EquiposgeneralComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EvaluarPreinsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EvaluarPreinsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EvaluarSolicitudComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EvaluarSolicitudComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InfoEquipoGeneralComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InfoEquipoGeneralComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InfoJugadoresGeneralComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InfoJugadoresGeneralComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InformacionPreDeleComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InformacionPreDeleComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InformacionequiposComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InformacionequiposComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InformacionjugadorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InformacionjugadorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/InscripcionJugadorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InscripcionJugadorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/JugadoresgenealComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JugadoresgenealComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaEquiposComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaEquiposComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaJugadoresComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaJugadoresComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaPreinsEvaluarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaPreinsEvaluarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListaPreinscripcionDelegadoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListaPreinscripcionDelegadoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ListapreadminComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ListapreadminComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginAdminComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginAdminComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MainPageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MainPageComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MenuAdminComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MenuAdminComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MenuPreinscripcionDelegadoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MenuPreinscripcionDelegadoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MiequipoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MiequipoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ModulesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ModulesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NotfoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NotfoundComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PreinscipcionMenuComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PreinscipcionMenuComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ReactiveFormsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ReactiveFormsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegisterdelegadoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegisterdelegadoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegistrarEquipoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegistrarEquipoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SolicitudespendientesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SolicitudespendientesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TodosjugadoresComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TodosjugadoresComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VistaAdministradorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VistaAdministradorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VistaDelegadoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VistaDelegadoComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VistaErrorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VistaErrorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VistaEsperaComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VistaEsperaComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VistaPrincipalComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VistaPrincipalComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/InfogeneralequiposComponent.html\" data-type=\"entity-link\" >InfogeneralequiposComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AutenticacionService.html\" data-type=\"entity-link\" >AutenticacionService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ControlAuthService.html\" data-type=\"entity-link\" >ControlAuthService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DelegadoService.html\" data-type=\"entity-link\" >DelegadoService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ElementolistaService.html\" data-type=\"entity-link\" >ElementolistaService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/EquipoService.html\" data-type=\"entity-link\" >EquipoService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/InfoGeneralService.html\" data-type=\"entity-link\" >InfoGeneralService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/JugadorService.html\" data-type=\"entity-link\" >JugadorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PreinscripcionService.html\" data-type=\"entity-link\" >PreinscripcionService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SolicitudDelService.html\" data-type=\"entity-link\" >SolicitudDelService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TokenService.html\" data-type=\"entity-link\" >TokenService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AfterLoginService.html\" data-type=\"entity-link\" >AfterLoginService</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/BeforeLoginService.html\" data-type=\"entity-link\" >BeforeLoginService</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/DelegadoGuard.html\" data-type=\"entity-link\" >DelegadoGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/NotAdminGuard.html\" data-type=\"entity-link\" >NotAdminGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/NotDelegadoGuard.html\" data-type=\"entity-link\" >NotDelegadoGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/OnlyAdminGuard.html\" data-type=\"entity-link\" >OnlyAdminGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AngularLink.html\" data-type=\"entity-link\" >AngularLink</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CategoriaI.html\" data-type=\"entity-link\" >CategoriaI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption-1.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption-2.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption-3.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption-4.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption-5.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption-6.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CountryOption-7.html\" data-type=\"entity-link\" >CountryOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DelegadoI.html\" data-type=\"entity-link\" >DelegadoI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ElementolistaI.html\" data-type=\"entity-link\" >ElementolistaI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/EquipoI.html\" data-type=\"entity-link\" >EquipoI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/JugadorI.html\" data-type=\"entity-link\" >JugadorI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-1.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-2.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-3.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-4.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-5.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-6.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-7.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-8.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PeriodicElement-9.html\" data-type=\"entity-link\" >PeriodicElement</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PreinscripcionI.html\" data-type=\"entity-link\" >PreinscripcionI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ResponseI.html\" data-type=\"entity-link\" >ResponseI</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));