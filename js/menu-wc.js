'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ligabasket documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"' : 'data-target="#xs-components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"' :
                                            'id="xs-components-links-module-AppModule-25667d1ee4f85ce8d02aebf2cadadeaba2ece5e7feba4d0af61195544345c0e7c64e52951c3c0354361fc1fc56d7ed713a3d0889ea62c218d49acf5dbec2f6c8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CredencialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CredencialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CredencialesInternasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CredencialesInternasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarPreDeleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarPreDeleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarPreinscripcionDelegadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarPreinscripcionDelegadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarPreinscripcionDelegadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EliminarPreinscripcionDelegadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EliminarjugadoresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EliminarjugadoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EquiposAprobadosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquiposAprobadosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EquiposMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquiposMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EquiposgeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquiposgeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvaluarPreinsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvaluarPreinsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvaluarSolicitudComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EvaluarSolicitudComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoEquipoGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoEquipoGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoJugadoresGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoJugadoresGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InformacionPreDeleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InformacionPreDeleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InformacionequiposComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InformacionequiposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InformacionjugadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InformacionjugadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InscripcionJugadorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InscripcionJugadorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JugadoresgenealComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JugadoresgenealComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaEquiposComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaEquiposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaJugadoresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaJugadoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaPreinsEvaluarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaPreinsEvaluarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaPreinscripcionDelegadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaPreinscripcionDelegadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListapreadminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListapreadminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuPreinscripcionDelegadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuPreinscripcionDelegadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiequipoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MiequipoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModulesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModulesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotfoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreinscipcionMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreinscipcionMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReactiveFormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReactiveFormsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterdelegadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterdelegadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrarEquipoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrarEquipoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SolicitudespendientesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SolicitudespendientesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodosjugadoresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodosjugadoresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VistaAdministradorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VistaAdministradorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VistaDelegadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VistaDelegadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VistaErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VistaErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VistaEsperaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VistaEsperaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VistaPrincipalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VistaPrincipalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/InfogeneralequiposComponent.html" data-type="entity-link" >InfogeneralequiposComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AutenticacionService.html" data-type="entity-link" >AutenticacionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ControlAuthService.html" data-type="entity-link" >ControlAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DelegadoService.html" data-type="entity-link" >DelegadoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElementolistaService.html" data-type="entity-link" >ElementolistaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EquipoService.html" data-type="entity-link" >EquipoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InfoGeneralService.html" data-type="entity-link" >InfoGeneralService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JugadorService.html" data-type="entity-link" >JugadorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PreinscripcionService.html" data-type="entity-link" >PreinscripcionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SolicitudDelService.html" data-type="entity-link" >SolicitudDelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AfterLoginService.html" data-type="entity-link" >AfterLoginService</a>
                            </li>
                            <li class="link">
                                <a href="guards/BeforeLoginService.html" data-type="entity-link" >BeforeLoginService</a>
                            </li>
                            <li class="link">
                                <a href="guards/DelegadoGuard.html" data-type="entity-link" >DelegadoGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NotAdminGuard.html" data-type="entity-link" >NotAdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NotDelegadoGuard.html" data-type="entity-link" >NotDelegadoGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/OnlyAdminGuard.html" data-type="entity-link" >OnlyAdminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AngularLink.html" data-type="entity-link" >AngularLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoriaI.html" data-type="entity-link" >CategoriaI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption-1.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption-2.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption-3.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption-4.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption-5.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption-6.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CountryOption-7.html" data-type="entity-link" >CountryOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DelegadoI.html" data-type="entity-link" >DelegadoI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElementolistaI.html" data-type="entity-link" >ElementolistaI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EquipoI.html" data-type="entity-link" >EquipoI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JugadorI.html" data-type="entity-link" >JugadorI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-1.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-2.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-3.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-4.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-5.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-6.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-7.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-8.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement-9.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PreinscripcionI.html" data-type="entity-link" >PreinscripcionI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseI.html" data-type="entity-link" >ResponseI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});