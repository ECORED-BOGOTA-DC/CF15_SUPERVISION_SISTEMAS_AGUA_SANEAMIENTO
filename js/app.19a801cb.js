(function(e){function a(a){for(var i,n,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],i=!0,n=1;n<o.length;n++){var c=o[n];0!==r[c]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"0a28f08f","chunk-0206bfa0":"049e2db5","chunk-0c047e41":"f6eae9e9","chunk-13a6037e":"a8aa697e","chunk-18f95272":"42134f14","chunk-25b302c8":"ae2708f6","chunk-26fc7596":"46354772","chunk-2c06842c":"0dc55578","chunk-2d0c5615":"56ab507b","chunk-2d0e96ec":"4f8a7593","chunk-2d208d90":"db548348","chunk-2d21d0e2":"447c9ad9","chunk-2d22c123":"a3515b26","chunk-2d2747e2":"79be545f","chunk-2e80bb9a":"82ddeeb5","chunk-319206de":"5cc62088","chunk-32334cb6":"cb2e0855","chunk-36769079":"66aa00cb","chunk-3c57cd7b":"07a65773","chunk-4cdd78c0":"de715ca5","chunk-4f2d402a":"38063bc1","chunk-515a8379":"7366077d","chunk-53ccb27e":"5731057a","chunk-55d286b8":"f1f0b5bd","chunk-59974754":"fec9dd94","chunk-60cbc06b":"c4c1ca78","chunk-659152b8":"823b6bba","chunk-6e1e538a":"c4eee319","chunk-766a929b":"c5c0333c","chunk-c796899c":"4918e9f6","chunk-e8a7823a":"cac34dc4","chunk-f2df7d2c":"58b34177","chunk-fde47172":"ad1cdf34",comple:"1f4d0ff0",creditos:"c99c84cd",glosario:"10920790",intro:"f4552426",referencias:"c6a77c0a",sintesis:"6130c54e",tema1:"37001bf6",tema2:"7b3eed88",tema3:"039139c6",tema4:"202b98cf",tema5:"5fd286b2"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};n[e]?a.push(n[e]):0!==n[e]&&o[e]&&a.push(n[e]=new Promise((function(a,o){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"8f9cd922","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"35f9f09d","chunk-60cbc06b":"d3a83979","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"5eb299c6","chunk-766a929b":"cc043ef5","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===i||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete n[e],m.parentNode.removeChild(m),o(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,o){i=r[e]=[a,o]}));a.push(i[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(o,i,function(a){return e[a]}.bind(null,i));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("68f3"),n=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=o("2877"),d=Object(s["a"])(c,n,r,!1,null,null,null),l=d.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema5").then(o.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,h=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Análisis e interpretación de muestras",descripcionCurso:"La aplicación de protocolos para el análisis a las muestras de agua, de acuerdo con los procedimientos técnicos y la normativa vigente, permite generar resultados y datos que podrán ser procesados e interpretados para el control sobre los procesos, con el fin de dar cumplimiento a la legislación vigente y garantizar el suministro de agua en condiciones de calidad. ",imagenBannerPrincipal:o("9128"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("71f8")},{clases:["banner-principal-decorativo-2"],imagen:o("8f04")},{clases:["banner-principal-decorativo-3"],imagen:o("7d72")},{clases:["banner-principal-decorativo-4"],imagen:o("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Relación de la calidad del agua y la salud de la población",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Protocolo del laboratorio",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Criterios de calidad en un laboratorio",hash:"t_2_1"},{numero:"2.2",titulo:"Pautas de seguridad",hash:"t_2_2"},{numero:"2.3",titulo:"Instrumentación básica para análisis de agua",hash:"t_2_3"},{numero:"2.4",titulo:"Fichas internacionales de seguridad química",hash:"t_2_4"},{numero:"2.5",titulo:"Sustancias químicas usadas en los procesos de tratamiento del agua",hash:"t_2_5"},{numero:"2.6",titulo:"Estandarización de las soluciones",hash:"t_2_6"}]},{nombreRuta:"tema3",numero:"3",titulo:"Análisis físico químico",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Características fisicoquímicas del agua",hash:"t_3_1"},{numero:"3.2",titulo:"Ensayo de jarras",hash:"t_3_2"},{numero:"3.3",titulo:"Métodos estandarizados para parámetros físicos, químicos y microbiológicos",hash:"t_3_3"},{numero:"3.4",titulo:"Preparación de muestras, procedimientos y mediciones",hash:"t_3_4"},{numero:"3.5",titulo:"Curva de calibración",hash:"t_3_5"}]},{nombreRuta:"tema4",numero:"4",titulo:"Análisis microbiológico",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Tipos de microorganismos",hash:"t_4_1"},{numero:"4.2",titulo:"Técnicas de esterilización de vidriería, ambiente y equipos de laboratorio microbiológico",hash:"t_4_2"},{numero:"4.3",titulo:"Preparación de medios de cultivo para análisis microbiológico de aguas",hash:"t_4_3"},{numero:"4.4",titulo:"Técnicas y protocolos de análisis microbiológico de aguas",hash:"t_4_4"}]},{nombreRuta:"tema5",numero:"5",titulo:"Reportes y resultados de la calidad del agua",desarrolloContenidos:!0,subMenu:[{numero:"5.1",titulo:"Reglamento técnico del sector de agua potable y saneamiento básico",hash:"t_5_1"},{numero:"5.2",titulo:"Normativa: calidad del agua para consumo humano.",hash:"t_5_2"},{numero:"5.3",titulo:"Indicadores de calidad del agua e interpretación de resultados",hash:"t_5_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/921200_CF15_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Análisis físico químico",referencia:"IDEAM (2006). Conductividad eléctrica por el método electrométrico en aguas.",tipo:"Ensayo laboratorio",link:"http://www.ideam.gov.co/documents/14691/38155/Conductividad+El%C3%A9ctrica.pdf/f25e2275-39b2-4381-8a35-97c23d7e8af4"},{tema:"Análisis físico químico",referencia:"IDEAM. (2007). Turbiedad por nefelometría en el equipo turbiquant 3000 T.",tipo:"Ensayo laboratorio",link:"http://www.ideam.gov.co/documents/14691/38155/Turbiedad+por+Nefelometr%C3%ADa..pdf/fc92342e-8bba-4098-9310-56461c6a6dbc"},{tema:"Análisis físico químico",referencia:"IDEAM. (2007). Sulfatos en agua por el método nefelométrico.",tipo:"Ensayo laboratorio",link:"http://www.ideam.gov.co/documents/14691/38155/Sulfato+en+agua+por+Nefelometr%C3%ADa.pdf/f65867a2-079f-420c-9067-b1c4c3139e89"},{tema:"Protocolo de laboratorio",referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Rótulo de reactivos.",tipo:"Documento",link:"https://drive.google.com/file/d/12O67cTVrygyM8RtXHImN0rIsI6qV7zuQ/view"},{tema:"Protocolo de laboratorio",referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2006).  Estandarización de métodos analíticos.",tipo:"Documento",link:"http://www.ideam.gov.co/documents/14691/38152/Estandarizacion_metodos_analaticos.pdf/934bd941-dd47-4501-8507-d2721ef4f316"},{tema:"Protocolo de laboratorio",referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Control de preparación de soluciones.",tipo:"Documento",link:"https://drive.google.com/file/d/14BdfuIj99zq5gZL_BJ9kGi6vXszS2ao9/view?usp=sharing"},{tema:"Protocolo de laboratorio",referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Formato captura de datos en campo para agua superficial para aforo y toma de muestras de agua residual industrial.",tipo:"Documento",link:"https://ecored-bogota-dc.github.io/CF15_SUPERVISION_SISTEMAS_AGUA_SANEAMIENTO/downloads/anexos/FORMATO_CAPTURA_DATOS_EN_CAMPO_AFORO_Y_TOMA_MUESTRAS%20AGUA_RESIDUAL_INDUSTRIAL.doc"},{tema:"Análisis físico químico",referencia:"Servicio Nacional de Aprendizaje (SENA). 2014. Práctica de laboratorio determinación de sólidos suspendidos totales, volátiles y fijos. Centro de Gestión Industrial (CGI).",tipo:"Ensayo laboratorio",link:"https://drive.google.com/file/d/18EadN71JFWz8vd3KHqWR_mF8IdFOkGfE/view?usp=sharing"},{tema:"Análisis físico químico",referencia:"Servicio Nacional de Aprendizaje (SENA). 2014. Práctica de laboratorio determinación de nitritos. Centro de Gestión Industrial (CGI).",tipo:"Ensayo laboratorio",link:"https://drive.google.com/file/d/15dNUmPHPqmRSRxdkPZ9W1n0V-gaSY_39/view?usp=sharing"},{tema:"Análisis físico químico",referencia:"Servicio Nacional de Aprendizaje (SENA). 2011. Práctica de laboratorio determinación de nitratos. Centro de Gestión Industrial (CGI).",tipo:"Ensayo laboratorio",link:"https://drive.google.com/file/d/1BoBDJxD1MBPsquMj7gWUCTmT77wF94Vb/view?usp=sharing"},{tema:"Análisis físico químico",referencia:"Servicio Nacional de Aprendizaje (SENA). 2017. Práctica de laboratorio determinación de cloruros en agua. Centro de Gestión Industrial (CGI).",tipo:"Ensayo laboratorio",link:"https://drive.google.com/file/d/1qk-_OURUo9lDzX6Br4-JX39t9eyHqjzL/view?usp=sharing"},{tema:"Análisis físico químico",referencia:"Servicio Nacional de Aprendizaje (SENA). 2014. Práctica de laboratorio Determinación de potenciometría. Centro de Gestión Industrial (CGI).",tipo:"Ensayo laboratorio",link:"https://drive.google.com/file/d/1_jo-LA2wCLChdpwvcJrrnhdMYQ-XUT13/view?usp=sharing"}],glosario:[{termino:"Análisis básicos",significado:"es el procedimiento que se efectúa para determinar turbiedad, color aparente, pH, cloro residual libre o residual de desinfectante usado, coliformes totales y <i>Escherichia coli</i>. Resolución 2115 (2007)"},{termino:"Análisis físico y químico del agua",significado:"son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas. Resolución 2115 (2007)"},{termino:"Análisis microbiológico del agua",significado:"son los procedimientos de laboratorio que se efectúan a una muestra de agua para consumo humano para evaluar la presencia o ausencia, tipo y cantidad de microorganismos. Resolución 2115 (2007)"},{termino:"Bacteria",significado:"grupo de organismos microscópicos unicelulares, rígidos carentes de clorofila, que desempeñan una serie de procesos de tratamiento que incluyen oxidación biológica, fermentaciones, digestión, nitrificación y desnitrificación. Resolución 1096 (2000)"},{termino:"Calidad del agua",significado:"es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia. Decreto 1575 (2007)"},{termino:"Coliformes",significado:"bacterias Gram Negativas en forma bacilar que fermentan la lactosa a temperatura de 35 a 37ºC, produciendo ácido y gas (CO2) en un plazo de 24 a 48 horas. Se clasifican como aerobias o anaerobias facultativas, son oxidasa negativa, no forman esporas y presentan actividad enzimática de la β galactosidasa. Es un indicador de contaminación microbiológica del agua para consumo humano. Resolución 2115 (2007)"},{termino:"Concentración",significado:"es la concentración de una sustancia, elemento o compuesto en un líquido, la  relación  existente entre su peso y el volumen del líquido que lo contiene. Resolución 1096 (2000)"},{termino:"Ensayo de jarras",significado:"ensayo de laboratorio que simula las condiciones en que se realizan los procesos de oxidación química, coagulación, floculación y sedimentación en la planta. Resolución 1096 (2000)"},{termino:"<i>Escherichia coli (E -coli)</i>",significado:"bacilo aerobio Gram Negativo no esporulado que se caracteriza por tener enzimas específicas como la β galactosidasa y β glucoronidasa. Es el indicador microbiológico preciso de contaminación fecal en el agua para consumo humano. Resolución 2115 (2007)"},{termino:"Laboratorio de análisis del agua para consumo humano",significado:"es el establecimiento público o privado, donde se realizan los procedimientos de análisis de las características físicas, químicas y microbiológicas del agua para consumo humano, el cual debe cumplir con los requisitos previstos en el presente decreto. Decreto 1575 (2007)"},{termino:"pH óptimo",significado:"valor de pH que produce la máxima eficiencia en un proceso determinado. Resolución 1096 (2000)"},{termino:"Valor aceptable",significado:"es el establecido para la concentración de un componente o sustancia, que garantiza que el agua para consumo humano no representa riesgos conocidos a la salud. Resolución 2115 (2007)"}],referencias:[{referencia:"Cogollo, J. (2011). Clarificación de aguas usando coagulantes polimerizados: caso del hidroxicloruro de aluminio. Dyna. Vol. 78. Núm. 165. Universidad Nacional de Colombia. Medellín, Colombia.",link:""},{referencia:"Comisión Estatal del Agua de Jalisco (CEA Jalisco). (2013). Operación y mantenimiento de Plantas de Tratamiento de Aguas Residuales con el proceso de lodos activados.",link:"https://www.aguasresiduales.info/revista/libros/operacion-y-mantenimiento-de-plantas-de-tratamiento-de-aguas-residuales-con-el-proceso-de-lodos-activados-tomo-i"},{referencia:"Deloya Martínez, A. (2006). Métodos de análisis físicos y espectrofotométricos para el análisis de aguas residuales Tecnología en Marcha. Vol. 19-2. ",link:""},{referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2006). Conductividad eléctrica por el método electrométrico en aguas.",link:""},{referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Control de preparación de soluciones.",link:""},{referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2004). Determinación de oxígeno disuelto por el método yodométrico modificación de azida.",link:""},{referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2007). Dureza Total en Agua con EDTA por Volumetría.   ",link:""},{referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2006).  Estandarización de métodos analíticos.",link:""},{referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Formato captura de datos en campo para agua superficial para aforo y toma de muestras de agua residual industrial.",link:""},{referencia:"Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). 2018. Instructivo de ensayo. Determinación de turbidez por nefelometría. SM 2130B.   ",link:""},{referencia:"Instituto Nacional de Salud. (2019). Boletín de Vigilancia de la Calidad del Agua para Consumo Humano. Despacho Dirección Redes en Salud Pública.",link:""},{referencia:"Instituto Nacional de Salud (INS). (2015). Lineamiento para la implementación de la resolución 1619 de 2015 del Ministerio de salud y protección social.",link:""},{referencia:"Marcó, L., Azario, R., Metzler, C y Garcia, M. (2004). La turbidez como indicador básico de calidad de aguas potabilizadoras a partir de fuentes superficiales. Hig. Sanid. Ambiente. ",link:""},{referencia:"Martínez, M. y Osorio, A. (2018). Validación de un método para el análisis de color real en agua. Revista Facultad de Ciencias, 7(1) ,143-155. DOI.",link:""},{referencia:"McFarland, M. y Dozier, M. (s.f.) Problemas del agua potable: El hierro y el manganeso.",link:""},{referencia:"Ministerio de Educación Nacional. (2015). Orientaciones para la construcción en los establecimientos educativos del manual de normas de seguridad en el laboratorio de química y de física.",link:""},{referencia:"Ministerio de Salud y Protección Social. (s.f.). Manual de verificación de estándares de calidad en salud pública para laboratorios de análisis de agua para consumo humano, estanques de piscina, estructuras similares y superficie de piscina.",link:""},{referencia:"Ministerio de Salud y Protección Social e Instituto Nacional de Salud (INS). (2016). Grupo Salud Ambiental. Calidad de Agua. Enfermedades Vehiculizadas por Agua e Índice de Riesgo de la Calidad del Agua en Colombia Bogotá D.C. ISBN: 978-958-13-0174-4:1.",link:""},{referencia:"Orellana, J. (2005). Características del agua potable. Unidad Temática N.º 3. Ingeniería Sanitaria- UTN - FRRO. ",link:""},{referencia:"Organización Mundial de la Salud (OMS). (2020). Fichas internacionales de seguridad química.",link:""},{referencia:"Organización Panamericana de la Salud - OPS y Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente - Cepis. (2002). <i>Operación y mantenimiento de plantas de tratamiento de agua. Manual de capacitación de operadores.</i> OPS y Cepis.",link:""},{referencia:"Pérez, J. (1997). Ensayo modificado de jarras para la selección de parámetros de diseño de floculación y sedimentación. Avances en recursos hidráulicos. Número 4.",link:""},{referencia:"Reutelshöfer, T. (2015). Guía de operación y mantenimiento de lagunas de oxidación en plantas de tratamiento de aguas residuales.",link:""},{referencia:"Resolución 2115 de junio de 2007. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Bogotá. Colombia.",link:""},{referencia:"Rodríguez, C. 2008. Uso y control del proceso de coagulación en plantas de tratamiento de agua potable.",link:""},{referencia:"Rodriguez, J. (2009). Parámetros fisicoquímicos de dureza total  en calcio y magnesio, pH, conductividad  y temperatura del agua potable analizados en conjunto con las  Asociaciones Administradoras del Acueducto (Asadas), de cada distrito de Grecia, cantón de  Alajuela.",link:""},{referencia:"Servicio Nacional de Aprendizaje (SENA). (2011). Práctica de laboratorio determinación de nitratos. Centro de Gestión Industrial (CGI).",link:""},{referencia:"Servicio Nacional de Aprendizaje (SENA). (2014). Práctica de laboratorio determinación de nitritos. Centro de Gestión Industrial (CGI).",link:""},{referencia:"Servicio Nacional de Aprendizaje (SENA). (2014). Práctica de laboratorio determinación de sólidos suspendidos totales, volátiles y fijos. Centro de Gestión Industrial (CGI).",link:""},{referencia:"Servicio Nacional de Aprendizaje (SENA). (2014). Práctica de laboratorio determinación de potenciometría. Centro de Gestión Industrial (CGI).",link:""},{referencia:"Solís-Castro, Y; Zúñiga-Zúñiga, L; Mora-Alvarado, D. (s.f.) La conductividad como parámetro predictivo de la dureza del agua en pozos y nacientes de Costa Rica. Tecnología en Marcha. Vol. 31-1. Enero-marzo 2018.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Xiomara Becerra Aldana",cargo:"Instructora Ambiental",centro:"Centro de gestión industrial - Regional Distrito Capital"},{nombre:"Jesús Ricardo Arias Munevar",cargo:"Instructor Ambiental",centro:"Centro de gestión industrial - Regional Distrito Capital"},{nombre:"Silvia Milena Sequeda Cardenas",cargo:"Diseñador Instruccional",centro:"Centro de diseño y meteorología - Regional Distrito Capital"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador Instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora Metodológica y Pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Sandra Patricia  Hoyos Sepúlveda",cargo:"Corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gloria Lida Alzáte Suarez",cargo:"Adecuación instruccional - 2023",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Metodología para la formación virtual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Yazmin Rocio Figueroa Pacheco",cargo:"Diseñador web",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Manuel Felipe Echavarria Orozco",cargo:"Desarrollador Fullstack",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y producción audiovisual",centro:"Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de contenidos inclusivos y accesibles",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de recursos educativos digitales",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"},{nombre:"Leyson Fabian Castaño Pérez",cargo:"Validación de recursos educativos digitales",centro:"Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;var C=o("9224");i["a"].prototype.$package=C,new i["a"]({router:b,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-1.58b20594.svg"},"7d72":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-3.f7d51794.svg"},"8f04":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-2.b3bfab88.svg"},9128:function(e,a,o){e.exports=o.p+"img/banner-princiapal.b3fcde70.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.5b1b5c88.png"},f53d:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-4.2555eecb.svg"}});
//# sourceMappingURL=app.19a801cb.js.map