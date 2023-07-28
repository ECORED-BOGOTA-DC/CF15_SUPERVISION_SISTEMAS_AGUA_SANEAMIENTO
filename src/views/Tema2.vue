<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Protocolo del laboratorio

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img1.svg', alt='Imágen decorativa')        

      .col-lg-8
        p El análisis de una muestra de agua bajo los protocolos establecidos por las autoridades competentes está relacionado con la aplicación del marco normativo aplicable para tal fin: Ley 9 (1979), Ley 715 (2001), Decreto 2323 (2006), Decreto 1575 (2007), Decreto 2774 (2012), Decreto 2078 (2012), Resolución 1619 (2015) y Decreto Único Reglamentario Sector Salud 780 (2016).

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-amarilla.p-3.mb-4
        .row.justify-content-center.align-items-center
          .col-10.col-lg-5
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imágen decorativa').img2-tm2
          
          .col-lg-7
            p Bajo el entendido que el Ministerio de Salud y Protección Social (MSPS), autoriza a los laboratorios que han cumplido los estándares definidos por el Instituto Nacional de Salud (INS), en coordinación con el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (Invima). Una vez se realiza la verificación para el desarrollo de actividades relacionadas con el análisis físico-químico y microbiológico del agua, se incorpora a la Red Nacional de Laboratorios (RNL) Dichos laboratorios pueden ser de carácter privado o público; por ejemplo, los laboratorios pueden ser de propiedad de las empresas prestadoras de servicios públicos o contratados por estas para el análisis de sus muestras y así ofrecer sus servicios a los entes territoriales. 

            .row.justify-content-center
              .col-lg-7
              .col-10.col-lg-5
                TarjetaAudio.color-acento-botones.mb-3(
                  texto=""
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='Muestra Diagrama de El análisis fisico-quimico y microbiológico del agua donde intervienes los siguientes actores: MSPS<br>Invima<br>Autorización de laboratorios<br>INS<br>Verificación<br>Análisis físico-químico y microbiológico del agua<br>RNL<br>Carácter<br>Público<br>Privado<br>Ofrecer sus servicios<br>Entes territoriales')


    separador
    #t_2_1.titulo-segundo.color-acento-botones
       h2 2.1 Criterios de calidad de un laboratorio

    .row.mb-5
      p Los criterios de calidad para la operación de laboratorios, de acuerdo con los lineamientos del Instituto Nacional de Salud (INS) (2015), con el fin de dar cumplimiento a la resolución 1619 (2015), establecen los siguientes aspectos sometidos a evaluación:

    .row.justify-content-center.align-items-center.mb-5
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imágen decorativa')

        .tarjeta.color-acento-contenido.p-3(x="9%" y="32%" numero="1")
          p.text-center.mb-0 Organización y gestión administrativa.

        .tarjeta.color-acento-contenido.p-3(x="24%" y="50%" numero="2")
          p.text-center.mb-0 Talento humano.

        .tarjeta.color-acento-contenido.p-3(x="44%" y="45%" numero="3")
          p.text-center.mb-0 Referencia y contra referencia (trazabilidad de las muestras en sus diferentes etapas).
        
        .tarjeta.color-acento-contenido.p-3(x="65%" y="43%" numero="4")
          p.text-center.mb-0 Proceso prioritario.

        .tarjeta.color-acento-contenido.p-3(x="74%" y="55%" numero="5")
          p.text-center.mb-0 Bioseguridad y manejo de residuos.

        .tarjeta.color-acento-contenido.p-3(x="89%" y="47%" numero="6")
          p.text-center.mb-0 Infraestructura y dotación.

    .row.mb-5
      p Para efectos de las condiciones requeridas en términos de infraestructura y dotación el INS (2015), establece:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador.fa-ul2
          li
            .lista-ol--cuadro__vineta.color-vineta2
              span 1
            | Instalaciones eléctricas, sanitarias y condiciones de iluminación apropiadas para la ejecución de actividades.
          li 
            .lista-ol--cuadro__vineta.color-vineta2
              span 2
            | Disposición de áreas destinadas para materiales/reactivos, lavado de material, almacenamiento de insumos y reactivos y documentación.
          li 
            .lista-ol--cuadro__vineta.color-vineta2
              span 3
            | Dotación y equipamiento suficiente.
          li 
            .lista-ol--cuadro__vineta.color-vineta2
              span 4
            | Procedimientos definidos para la manipulación, limpieza y uso de los equipos.
          li 
            .lista-ol--cuadro__vineta.color-vineta2
              span 5
            | Hojas de vida caracterización de los equipos e historial de mantenimiento.
          li 
            .lista-ol--cuadro__vineta.color-vineta2
              span 6
            | Plan de operaciones de confirmación metrológica (pp. 4 - 5)
      
      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imágen decorativa')      

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imágen decorativa')      

      .col-lg-7
        p Es importante considerar normas de calidad en los laboratorios debido a que aquí se obtienen datos de variables ambientales en suelo, agua, aire, entre otras; los cuales permitirán la toma de decisiones a las personas naturales, jurídicas, instituciones y entes territoriales. En Colombia el Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam) es el ente encargado de la acreditación de los laboratorios que realizan muestreos y análisis ambientales. Esto en el marco de la Norma Técnica Colombiana (NTC) 17025 (2005), que establece los requisitos generales relativos a la competencia de los laboratorios de ensayo y calibración.


    separador
    #t_2_2.titulo-segundo.color-acento-botones
       h2 2.2 Pautas de seguridad

    .row.mb-5
      p De acuerdo con la Comisión Estatal del Agua de Jalisco (CEA,2013). Algunas consideraciones de seguridad en el laboratorio son:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imágen decorativa')       

      .col-lg-8
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Paso 1")
            p Evitar ingresar alimentos y fumar.

          .row(numero="2" titulo="Paso 2")
            p Conservar las instalaciones en orden y limpieza.

          .row(numero="3" titulo="Paso 3")
            p Limpiar toda la cristalería utilizada.

          .row(numero="4" titulo="Paso 4")
            p No obstruir salidas ni equipos de emergencias.

          .row(numero="5" titulo="Paso 5")
            p Evitar el contacto de sustancias químicas con la piel. 

          .row(numero="6" titulo="Paso 6")
            p Manipular las sustancias químicas de acuerdo con las especificaciones otorgadas por el fabricante en las fichas de seguridad (p.30)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Las buenas prácticas de laboratorio están definidas como pasos, procedimientos y prácticas establecidas por organismos como la #[i Food and Drug Administration] (FDA) las cuales permiten garantizar calidad analítica e integridad en datos obtenidos (INS, 2011, p. 20) junto con el manejo adecuado de las sustancias químicas utilizadas en dichos ensayos o procedimientos.

        p En Colombia, el marco normativo por el cual se adopta el Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA) y se dictan otras disposiciones en materia de seguridad química, es el Decreto 1496, (2018). Dicho sistema unifica criterios para la clasificación y etiquetado de productos químicos y sus respectivos peligros tanto físicos, para la salud y para el medio ambiente. Las herramientas del SGA son fichas de seguridad y etiquetas donde es posible identificar los pictogramas y tener información para actuar en un momento de contingencia o emergencia. Por ello siempre deben ser consultadas tanto las fichas como las hojas de seguridad del producto.

      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Imágen decorativa')        

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Etiquetas de uso en el laboratorio

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img9.svg', alt='Imágen decorativa')      

      .col-lg-8
        p Aparte de los elementos como la ficha de seguridad, las etiquetas y las hojas de seguridad de los insumos químicos utilizados en el laboratorio, existen unas etiquetas particulares de uso de cada laboratorio. Estas etiquetas son la forma de identificar las sustancias o reactivos que se han preparado en el laboratorio y que se van a usar para los diferentes procedimientos (bien sea el procesamiento de una muestra) o realizar un ensayo en específico.

    .row.mb-5
      p Como ejemplo de esta etiqueta se evidencia en la figura 1, la utilizada por el laboratorio ambiental del Centro de Gestión Industrial (CGI)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-adicional-2.mb-5
          h5 Figura 1 <i style="font-weight: 400">Formato etiqueta</i>

        figure
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='Muestra tabla ejemplo de formato de etiqueta para reactivos preparados en laboratorio. Incluye nombre del producto, peligrosidad, instructor responsable, fecha preparación, fecha vencimietno')

    .row.mb-5
      p En este caso la etiqueta se usa en forma de rótulo, el cual debe estar en el recipiente que sea plenamente identificado y que garantice que el uso de este no afectará la legibilidad. Al iniciar la preparación de sustancias en un laboratorio, siempre se debe etiquetar las soluciones creadas, al igual que guardar registros de lo realizado. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")(title="Imágen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Formato rótulo de reactivos
                  p.texto-blanco.mb-4 Como ejemplo de un formato de rótulo reactivo, lo puedes descargar.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/FORMATO_RÓTULO_DE_REACTIVOS.xlsx')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")(title="Imágen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Formato preparación de soluciones
                  p.texto-blanco Como ejemplo de un formato de registro de la preparación de soluciones en un laboratorio, lo puedes descargar.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/FORMATO_PREPARACIÓN_DE_SOLUCIONES.xls')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.mb-0 Es importante aclarar que estos documentos son ejemplos, que usualmente se pueden adaptar para otros laboratorios, sin embargo, siempre se debe indagar por los formatos usados en la entidad la cual sea responsable de las actividades de supervisión.

    .row.bg1-tema2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Otros documentos

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imágen decorativa')

      .col-lg-8
        p En las actividades de supervisión de sistemas de agua, bien sea de agua superficial, residual o de seguimiento de la efectividad de las etapas de tratamiento dentro de una planta, se debe garantizar que junto con la ejecución adecuada de la toma de la muestra se registre la información de esta que permite tomar decisiones. 

        p Como ejemplo de un formato de captura de datos en campo para agua superficial y un formato de captura de datos en campo para aforo y toma de muestras agua residual industrial, en el material complementario se encuentra el siguiente enlace:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg",alt="Imágen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Formato captura de datos en campo aforo y toma muestras agua residual
                  p.texto-blanco Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/FORMATO_CAPTURA_DATOS_EN_CAMPO_AFORO_Y_TOMA_MUESTRAS AGUA_RESIDUAL_INDUSTRIAL.doc')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg",alt="Imágen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Formato captura de datos en campo para agua superficial 
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/FORMATO_CAPTURA_DE_DATOS_EN_CAMPO_PARA_AGUA_SUPERFICIAL.docx')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul.p-4
        .row.justify-content-center.align-items-center
          .col-4.col-lg-2
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='Imágen decorativa').img12-tm2
          
          .col-lg-10
            p.mb-0 Aparte de los documentos requeridos donde se especifique la información pertinente a la muestra, el recipiente donde se tome la muestra y los elementos de refrigeración deben tener sus debidos rotulados con el fin de garantizar la cadena de custodia de la muestra.

    separador
    #t_2_3.titulo-segundo.color-acento-botones
       h2 2.3 Instrumentación básica para análisis de agua

    .row.mb-5
      p Para el correcto desarrollo de actividades relacionadas con el análisis de agua en un laboratorio se debe garantizar condiciones en términos de equipamiento, infraestructura y dotación, como las que se describen a continuación en el video animado:

    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="flip-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/lj_kOsU0EuY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5
      p De acuerdo con la resolución 2115 (2007), en su artículo 18 la dotación mínima de un laboratorio en una planta de tratamiento deberá contar con los equipos y reactivos con el fin de realizar ensayos de jarras, demanda de cloro, y medición de parámetros de pH, color y turbiedad. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.mb-0 Las consideraciones frente a los equipos que se deben tener en las plantas de tratamiento las cuales pueden variar en relación con el nivel de complejidad y capacidad financiera son de acuerdo con la Organización Panamericana de la Salud (OPS) y Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente (Cepis) (2002).

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li
            i.fas.fa-check-circle
            | Turbidímetro nefelométrico. 
          li
            i.fas.fa-check-circle
            | Caja de agitadores magnéticos y barra de recuperación. 
          li
            i.fas.fa-check-circle
            | Equipo de medición de color.
          li
            i.fas.fa-check-circle
            | Medidor de pH con sus respectivos electrodos.
          li
            i.fas.fa-check-circle
            | Agitador magnético con base de porcelana.
          li
            i.fas.fa-check-circle
            | Soporte con base de porcelana y prensa de buretas para titulación; una centrífuga.
          li
            i.fas.fa-check-circle
            | Un recipiente de polipropileno de 10 litros con tapa y llave para almacenar agua destilada.
          li
            i.fas.fa-check-circle
            | Un destilador de agua pequeño.
          li
            i.fas.fa-check-circle
            | Tres recolectores de muestra de polietileno con brazos de 3,7 m.
          li
            i.fas.fa-check-circle
            | Una balanza de hasta 2.000 g con una precisión de 0,05 %.
          li
            i.fas.fa-check-circle
            | Un agitador múltiple (seis paletas) para pruebas de jarras con velocidad máxima de 100 revoluciones por minuto en los tipos analógicos y 300 revoluciones por minuto en los modelos digitales; se debe incluir base iluminada y juegos de jarras de dos litros.

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Imágen decorativa')      

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img14.svg', alt='Imágen decorativa')

      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li
            i.fas.fa-check-circle
            | Dos descartadores de pipetas.
          li
            i.fas.fa-check-circle
            | Dos frascos lavadores de 500 ml. 
          li
            i.fas.fa-check-circle
            | Dos buretas de 50 ml.
          li
            i.fas.fa-check-circle
            | Una docena de Erlenmeyer de vidrio de 125 y 250 ml. Una docena de vasos de precipitación de vidrio de 50, 125 y 250 ml.
          li
            i.fas.fa-check-circle
            | Dos frascos volumétricos de 100, 500 y 1.000 ml.
          li
            i.fas.fa-check-circle
            | Dos conos Imhoff con sus soportes.
          li
            i.fas.fa-check-circle
            | Termómetros.
          li
            i.fas.fa-check-circle
            | Mecheros.
          li
            i.fas.fa-check-circle
            | Dos vasos de precipitación de plástico de cuatro litros.
          li
            i.fas.fa-check-circle
            | Dos pipetas volumétricas de 5, 10, 25, 50 y 100 ml.
          li
            i.fas.fa-check-circle
            | Cuatro pipetas de Mohr de 2,5 y 10 ml (p.567 y 568).

    .row.mb-5
      p En relación con las técnicas de verificación y calibración de equipos, el CEPIS y OPS (2004), recomienda en los laboratorios realizar registro e inventario de los materiales y equipos destinados para el tratamiento y procesamiento de muestras. Algunas consideraciones son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li
            i.fas.fa-check-circle
            | Descripción del equipo.
          li
            i.fas.fa-check-circle
            | Nombre del fabricante.
          li
            i.fas.fa-check-circle
            | Copia las instrucciones otorgadas por el fabricante.
          li
            i.fas.fa-check-circle
            | Registro de reparaciones.
          li
            i.fas.fa-check-circle
            | Registro de mantenimiento y calibraciones (p.23).

      .col-10.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img15.svg', alt='Imágen decorativa')


    separador
    #t_2_4.titulo-segundo.color-acento-botones
       h2 2.4 Fichas internacionales de seguridad química

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img16.svg', alt='Imágen decorativa')
      
      .col-lg-8
        p La identificación de las fichas técnicas de los reactivos se constituye en un elemento importante, para el desarrollo de actividades bajo condiciones seguras, teniendo en cuenta la naturaleza y características de los insumos a emplear. 

        p De acuerdo con la Organización Mundial de la Salud (OMS) (2020) las Fichas Internacionales de Seguridad Química (FISC) proporcionan información relacionada con riesgos inherentes frente a la manipulación de las sustancias químicas y otras especificaciones, tales como precauciones, manejos frente a primeros auxilios, almacenamiento y otras consideraciones como etiquetado, empaque y transporte.

        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 Con el fin de ampliar la información sobre las fichas de seguridad de una sustancia química, lo invitamos a consultar en el material complementario, el documento “Fichas internacionales de seguridad química”.

        p Las hojas de Seguridad para Materiales (MSDS Material Safety Data Sheet, en inglés) que cobijan sustancias químicas, materias primas, productos e intermedios y permiten conocer la peligrosidad de una sustancia y su adecuada, manipulación son realizadas conforme a la Norma Técnica Colombiana (NTC) 2010 (1998). Para ampliar más esta información se invita a consultarla en la base de datos del SENA. Descargar la norma del siguiente enlace:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.bgDescarga.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img-descarga.svg")(title="Imágen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-3.texto-blanco Norma técnica Colombiana NTC 4435 
                  p.texto-blanco.mb-4 Para conocer más, le invitamos a consultar el documento.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/anexos/NTC4435_1998.pdf')" target="_blank")
                    span.texto-negro Descargar
                    i.fas.fa-file-download.texto-negro


    separador
    #t_2_5.titulo-segundo.color-acento-botones
       h2 2.5 Sustancias químicas usadas en los procesos de tratamiento del agua

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema2/img17.png', alt='Imágen decorativa')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p Diferentes sustancias químicas pueden ser utilizadas en el tratamiento de aguas, estas pueden ser agregadas tanto en etapas iniciales como en etapas finales de una PTAP.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img18.svg', alt='Imágen decorativa')      

      .col-lg-8
        p Las sustancias químicas más comunes, utilizadas en los procesos de tratamiento de agua son los coagulantes, definidos como aquellas que facilitan el aglutinamiento de partículas finas formando otras más grandes y pesadas, según el RAS en su título A (p. A.92) Algunas son sulfato de aluminio (Al2 (SO4)3) cloruro férrico (FeCl3) sulfato ferroso (FeSO4) sulfato férrico (Fe2 (SO4)3) y policloruro de aluminio (Comisión Estatal del Agua de Jalisco.  2013. p. 119)

        p De acuerdo con la OPS y el Cepis (2002), una vez el agua está en las últimas etapas de la PTAP se le suele agregar otro tipo de sustancias químicas para lograr su potabilización, en este caso se utilizan desinfectantes que son sustancias capaces de destruir microorganismos. Los más utilizados son cloro gaseoso (Figura 2) envasado en cilindros de acero al 99%, hipoclorito de sodio (NaClO) en solución o liquido al 10%, hipoclorito de calcio (Ca (ClO)2) granulado o en polvo al 70% y cloruro de calcio (CaCl2) al 25%.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .titulo-sexto.color-adicional-2.mb-5
          h5 Figura 2 <i style="font-weight: 400">Cilindro de cloro gaseoso</i>

        figure
          img(src='@/assets/curso/temas/tema2/img19.svg', alt='muestra foto de cilindro de cloro gaseoso')

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul.p-4
        .row.justify-content-center.align-items-center
          .col-4.col-lg-2
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/img20.svg', alt='Imágen decorativa').img12-tm2
          
          .col-lg-10
            p.mb-0 #[b En la red de distribución] según el RAS (2010, título B), se utiliza cloro (Cl) o hipoclorito de sodio (NaClO) a una concentración de 50 p.p.m.#[b En los tanques de almacenamiento] se deben usar “compuestos clorados llenando el tanque con una concentración de 50 p.p.m. de cloro en el agua y una duración mínima de 24 horas de contacto” (RAS, 2000, título A, pp. 52-53).

    .row.mb-5
      p Otros productos químicos y sus nombres comerciales se relacionan en la tabla a continuación: 

    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-adicional-2.mb-5
          h5 Tabla 1 <i style="font-weight: 400">Sustancias químicas usadas en el tratamiento de agua</i>

        .tabla-a.color-adicional-2.mb-5
          table(alt="Describe en cuatro columnas el nombre del compuesto, la fórmula, el nombre y el titulo (puereza)")
            thead
              tr.texto-blanco.color-tabla
                th Nombre del compuesto
                th Fórmula
                th Nombre comercial
                th Titulo (pureza)
            tbody
              tr
                td.text-center Sulfato de aluminio
                td.text-center Al#[sub 2](SO#[sub 4])#[sub 3].18H#[sub 2]0
                td.text-center Alumbre de filtro
                td.text-center 15-22% . Al#[sub 2]O#[sub 3]

              <tr style="background-color: #F6F6F6">
                td.text-center Hidróxido de calcio
                td.text-center Ca(OH)#[sub 2]
                td.text-center cal hidratada o extinta
                td.text-center 63-73% . CaO
              </tr>

              tr
                td.text-center Óxido de calcio
                td.text-center CaO
                td.text-center cal virgen
                td.text-center 75-99

              <tr style="background-color: #F6F6F6">
                td.text-center Carbonato de sodio
                td.text-center Na#[sub 2]CO#[sub 3]
                td.text-center barrilla
                td.text-center 99,4% Na#[sub 2]CO#[sub 3]
              </tr>

              tr
                td.text-center Cloro
                td.text-center Cl#[sub 2]
                td.text-center Cloro gaseoso
                td.text-center 99,8% Cl#[sub 2]

              <tr style="background-color: #F6F6F6">
                td.text-center Hipoclorito de sodio
                td.text-center NaOCl
                td.text-center Hipoclorito
                td.text-center 12-15% Cl#[sub 2]
              </tr>

              tr
                td.text-center Cal clorada
                td.text-center CaO.2CaOCl#[sub 2].3H#[sub 2]O
                td.text-center Cloruro de cal
                td.text-center 25-37% Cl#[sub 2]
                
              <tr style="background-color: #F6F6F6">
                td.text-center Fluoruro de sodio
                td.text-center NaF
                td.text-center Fluoruro
                td.text-center 90-95% NaF
              </tr>

              tr
                td.text-center Sílice fluoruro de sodio
                td.text-center Na#[sub 2]SiF#[sub 5]
                td.text-center Fluosilicato
                td.text-center 99% Na#[sub 2]SiF#[sub 6]

              <tr style="background-color: #F6F6F6">
                td.text-center Carbono
                td.text-center C
                td.text-center Carbón activo
                td.text-center
              </tr>

              tr
                td.text-center Hidróxido de sodio
                td.text-center NaOH
                td.text-center Soda cáustica
                td.text-center 98% NaOH
                
              <tr style="background-color: #F6F6F6">
                td.text-center Sulfato de cobre
                td.text-center CuSO#[sub 4]5H#[sub 2]O
                td.text-center Sulfato de cobre
                td.text-center
              </tr>

              tr
                td.text-center Sulfato de amonio
                td.text-center (NH#[sub 4])#[sub 2]SO#[sub 4]
                td.text-center Sulfato de amonio
                td.text-center 

              <tr style="background-color: #F6F6F6">
                td.text-center Sulfato de hierro II
                td.text-center FeSO#[sub 4].7H#[sub 2]O
                td.text-center Sulfato ferroso verde
                td.text-center 100%
              </tr>

              tr
                td.text-center Ácido sulfúrico
                td.text-center H#[sub 2]SO#[sub 4]
                td.text-center Ácido sulfúrico
                td.text-center 77,67% H#[sub 2]SO#[sub 4]
                
              <tr style="background-color: #F6F6F6">
                td.text-center Ácido clorhídrico
                td.text-center HCl
                td.text-center Ácido muriático
                td.text-center 27,92% ACl
              </tr>

              tr
                td.text-center Sulfato de hierro III
                td.text-center Fe#[sub 2](SO#[sub 4])#[sub 3]
                td.text-center Ferricloc
                td.text-center 60%

              <tr style="background-color: #F6F6F6">
                td.text-center Cloruro de hierro III
                td.text-center FeCl#[sub 3]6h#[sub 2]O
                td.text-center Cloruro férrico
                td.text-center 60% FeCl#[sub 3]
              </tr>


          figcaption.mt-3 
            p.mb-0 #[b Nota:] Tomado de OPS/ CEPIS. 2002. Operación y mantenimiento de plantas de tratamiento de agua. Manual de capacitación de operadores [Tabla]. p. 529

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 En algunos casos, cuando el agua tiene características ácidas es necesario utilizar productos químicos alcalinizantes utilizados para efectos de corrección de pH, los más utilizados con este fin son la cal dolomita (CaO) carbonato de sodio (Na2CO3) silicato de sodio (Na₂SiO3) hidróxido de calcio (Ca(OH)₂) (OPS/ Cepis. 2002. p. 527) y soda cáustica (NaOH).

    .row.mb-5
      p Sin importar la sustancia que se agregue se debe tener en cuenta, que se llevan a cabo una serie de reacciones químicas que cumplen con relaciones estequiométricas, debido a que estas relaciones son constantes, es importante conocer la cantidad de producto químico que se utiliza y su concentración.

      p El comportamiento de las sustancias químicas utilizadas en los procesos de coagulación y desinfección está relacionado con parámetros como la temperatura y el pH del agua tratada.  Algunas reacciones en el tratamiento de agua son:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img21.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta--gris
            .p-3
              h5 Coagulación con sulfato de aluminio (OPS/ CEPIS. 2002. p. 425)
              figure
                img(src='@/assets/curso/temas/tema2/img21-1.svg', alt='Imágen decorativa')

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img22.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta--gris
            .p-3
              h5 Coagulación con hipoclorito de sodio
              figure
                img(src='@/assets/curso/temas/tema2/img22-1.svg', alt='Imágen decorativa')

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img23.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta--gris
            .p-3
              h5 Coagulación con hipoclorito de calcio:
              figure
                img(src='@/assets/curso/temas/tema2/img23-1.svg', alt='Imágen decorativa')

      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img24.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta--gris
            .p-3
              h5 Desinfección con cloro gaseoso
              figure
                img(src='@/assets/curso/temas/tema2/img24-1.svg', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img25.svg', alt='Imágen decorativa')
      
      .col-lg-7
        h4 ¿Y qué se necesita en el laboratorio y planta de tratamiento para efectuar estas reacciones?

        p Para la dosificación de los coagulantes en los ensayos de jarras, donde se determina la dosis óptima en el agua cruda, se requieren instrumentos y materiales como:

        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li
            i.fas.fa-check-circle
            | Un reloj o cronómetro.
          li
            i.fas.fa-check-circle
            | Una probeta de 1000 ml.
          li
            i.fas.fa-check-circle
            | Balanza de precisión de 0.1 gr. a 100 gr.
          li
            i.fas.fa-check-circle
            | Espátulas.
          li
            i.fas.fa-check-circle
            | 6 jeringas desechables de 10 ml.
          li
            i.fas.fa-check-circle
            | 2 pipetas graduadas de 10 ml.
          li
            i.fas.fa-check-circle
            | 2 matraces aforados de 1.000 ml.
          li
            i.fas.fa-check-circle
            | Equipo de jarras.

    .row.mb-5
      p Una vez se determina la dosis óptima, en las plantas de tratamiento, la dosificación del coagulante puede ser por vía húmeda o por vía seca en los dosificadores (Figura 3)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .titulo-sexto.color-adicional-2.mb-5
          h5 Figura 3 <i style="font-weight: 400">Dosificador coagulante en planta de tratamiento</i> 

        figure
          img(src='@/assets/curso/temas/tema2/img26.svg', alt='Muestra foto de un dosificador coagulante en planta de tratamiento')

    .row.mb-5
      p Los dosificadores según la  OPS y Cepis. (2002), pueden ser tanto volumétricos como gravimétricos con faja transportadora, por ejemplo, volumétricos de tornillo giratorio (Figura 4) o para desinfectantes como el cloro son de tipo gaseoso, los cuales pueden ser directos con regulación en la sodificación por rotámetro o de solución al vacío.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        .titulo-sexto.color-adicional-2.mb-5
          h5 Figura 4 <i style="font-weight: 400">Dosificador de tornillo giratorio</i>   

        figure
          img(src='@/assets/curso/temas/tema2/img27.svg', alt='Muestra, dosificador de tornillo giratorio y sus compontes: motor, tornillo giratorio, cámara de solución, tolva, sistema de alimentación, nivel de solución, mezclador.')

    separador
    #t_2_6.titulo-segundo.color-acento-botones
       h2 2.6 Estandarización de las soluciones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img28.svg', alt='Imágen decorativa').img28-tm2

      .col-lg-6
        .tarjeta.tarjeta-gris.p-3
          p.mb-0 Cuando se habla de estandarización de soluciones se hace referencia al proceso mediante el cual se conoce exactamente la concentración de una sustancia. Debido a que, al adicionar productos químicos en el tratamiento de las aguas, se generan reacciones químicas con una estequiometría definida, se hace necesario conocer esta concentración para definir la cantidad de producto a utilizar y no tener al final del proceso parámetros por encima de los límites máximos permisibles por falta de productos químicos, pero tampoco generar sobre costos por excesos de estos.

    .row.mb-5
      p La preparación de las soluciones va a influir dentro de los resultados obtenidos en el procesamiento de las muestras, así como en el uso de la PTAP, por lo cual se recomienda pesaje de la disolución antes y después del uso dado, debido a que, por efectos de la volatilización la concentración de esta puede ser mayor, sobre todo cuando se trata de sustancias de tipo orgánico. Adicionalmente se recomienda sustancias preservantes que permitan la conservación de la disolución en caso de que se requiera y el uso de material volumétrico debidamente aforado (INS, 2011).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.mb-0 La medición de las soluciones puede ser de dos tipos: medidas de porcentaje, por ejemplo, porcentaje en peso; o medidas de concentración gramos por litro, por ejemplo (OPS y Cepis. 2002).

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul.p-4
        .row.justify-content-center.align-items-center
          .col-4.col-lg-2
            figure.mb-3
              img(src='@/assets/curso/temas/tema2/img29.svg', alt='Imágen decorativa').img12-tm2
          
          .col-lg-10
            p.mb-0 La concentración de una solución, se define como la cantidad de soluto en una determinada cantidad de solvente. Estas pueden encontrarse en forma saturada, sobresaturadas, diluidas o concentradas. Las unidades físicas para expresar la concentración se definen a continuación: (Sánchez, J; Calderón Z y García M. s.f. pp. 70, 76, 77, 78)

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img30.svg', alt='Imágen decorativa')
      
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="1. Porcentaje peso a peso (%p/p).")
            p Gramos de soluto en 100 gramos de solución.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema2/img31.svg', alt='Imágen decorativa')

          .row(titulo="2. Porcentaje peso a peso (%p/v).")
            p Gramos de soluto en 100 mL de solución.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema2/img33.svg', alt='Imágen decorativa')

          .row(titulo="3. Porcentaje volumen a volumen (%v/v).")
            p Volumen de soluto en 100 ml de solución.
            .col-lg-8
              figure
                img(src='@/assets/curso/temas/tema2/img33.svg', alt='Imágen decorativa')

          .row(titulo="4. Partes por millón (ppm). ")
            p Se utiliza para expresar soluciones muy diluidas, como gramos de soluto en un millón de partes de solución. 
            .col-lg-8
              figure.mb-3
                img(src='@/assets/curso/temas/tema2/img34.svg', alt='Imágen decorativa')

              figure
                img(src='@/assets/curso/temas/tema2/img35.svg', alt='Imágen decorativa')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
