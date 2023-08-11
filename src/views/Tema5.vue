<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Reportes y resultados de la calidad del agua
    
    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
        )(title="Imágen decorativa")
        .bloque-texto-g__texto.p-4
          p.mb-0 La última fase de verificación es reportar y analizar los resultados de la supervisión de los sistemas de agua, siempre se debe seguir el conducto regular dependiendo de la entidad a la cual uno haga parte, reportar con veracidad los datos influirá en las medidas preventivas y correctivas necesarias para el sistema objeto de supervisión. 

    separador
    #t_5_1.titulo-segundo.color-acento-botones
       h2 5.1 Reglamento técnico del sector de agua potable y saneamiento básico

    p En Colombia, la Comisión de Regulación de Agua Potable y Saneamiento Básico- CRA amparada bajo los lineamientos de la ley 142 de 1994 solicitó en su momento al Ministerio de Desarrollo Económico (en la actualidad Ministerio de Vivienda, Ciudad y Territorio) expedir los lineamientos y demás requisitos técnicos para el diseño y operación de sistemas en la prestación de servicios de agua potable y saneamiento básico en el territorio nacional. Bajo tal requerimiento se expidió la Resolución 1096 de 2000 “por la cual se adopta el Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico –RAS” y los ajustes contemplados bajo la Resolución 330 de 2017. En relación con los parámetros para el suministro de agua para consumo humano, el título A (aspectos generales de los sistemas de agua potable y saneamiento básico) define aspectos importantes como:

    .row.justify-content-center.align-items-center
      .col-lg-7.col-xs-12
        ul.lista-ul--color.fa-ul2
            li
              i.fas.fa-check-circle
              P.mb-0 La determinación del nivel de complejidad del sistema.
              
            hr

            li
              i.fas.fa-check-circle
              P.mb-0 Requisitos técnicos obligatorios: dotación neta, capacidad de la fuente de abastecimiento, caudal de diseño, periodo de diseño del sistema, especificaciones de la red de tuberías, mantenimiento de equipos, entre otros.

            hr

            li
              i.fas.fa-check-circle
              P.mb-0 Sistema de potabilización: requisitos mínimos, descripción de procesos y calidad del agua potable.
      .col-lg-5.col-xs-12
        figure
          img(src='@/assets/curso/temas/tema5/img2.png', alt='Imágen decorativa')

    .row.justify-content-center.align-items-center.mt-5
      p La Resolución 330 (2017) actualiza aspectos relacionados con el Reglamento técnico para el sector de Agua potable y Saneamiento básico, inicialmente expedidos por la resolución 1096 de 2000, enmarcados en el capítulo 3 para sistemas de potabilización de agua:

      .col-lg-5.col-xs-12
        figure
          img(src='@/assets/curso/temas/tema5/img3.png', alt='Imágen decorativa')

      .col-lg-7.col-xs-12.mt-3
        ol.lista-ol--cuadro.lista-ol--separador.fa-ul2
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Consideraciones técnicas generales de los sistemas de potabilización (ejemplo: caudal de diseño y ubicación de la planta) (p.59).
          
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Caracterización y tratabilidad del agua cruda (ejemplo: determinación <i>in situ</i> de temperatura, pH y conductividad y en laboratorio, dureza, alcalinidad, nitratos, cloruros, color, pH, turbiedad, entre otros) (pp. 61- 62).

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Tecnologías y procesos unitarios seleccionados de acuerdo con la contaminación presente en la fuente de abastecimiento sea esta superficial o subterránea (ejemplo: parámetros de referencia para diseño de aireadores tipo bandejas) (p. 66).

          li 
            .lista-ol--cuadro__vineta
              span 4
            | Gestión de subproductos del proceso de potabilización (ejemplo: caracterización, evacuación, tratamiento y disposición final de lodos) (pp. 76-78).

          li 
            .lista-ol--cuadro__vineta
              span 5
            | Instalaciones complementarias para sistemas de potabilización (p. 79).

          li 
            .lista-ol--cuadro__vineta
              span 6
            | Puesta en marcha, operación y mantenimiento (pp. 59-62, 66, 76- 80).

    separador
    #t_5_2.titulo-segundo.color-acento-botones
       h2 5.2 Normativa: calidad del agua para consumo humano

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema5/img4.png', alt='Imágen decorativa')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p En la actualidad el marco normativo frente a la calidad del agua potable está enmarcado en el Decreto 1575 (2007) por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano y la Resolución 2115 (2007) por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.


      p.mt-5
        <b>La primera</b> establece las entidades responsables para el control y vigilancia de la calidad del agua, los instrumentos y procesos para realizar dicha vigilancia, entre otras disposiciones. <b>La segunda</b> define las características físico-químicas y microbiológicas del agua, así como los instrumentos para garantizar la calidad de la misma, por ejemplo: el <b style="color: #3076B6; font-weight: 400">Índice de Riesgo de la Calidad del Agua</b> para consumo humano -IRCA y el Índice de Riesgo municipal por Abastecimiento de Agua para consumo –Irabam. 

    .row.justify-content-center.align-items-center.bg-1-tema-5
      .col-lg-4.col-xs-12
        figure.mb-3
          img(src='@/assets/curso/temas/tema5/img5.png', alt='Imágen decorativa')

      .col-lg-8
        p Adicionalmente, se establece el número de muestras y la frecuencia para realizar el control de la calidad de acuerdo con la población atendida.  En consecuencia, está la Resolución 82 (2009) por medio de la cual se adoptan unos formularios para la práctica de visitas de inspección sanitaria a los sistemas de suministro de agua para consumo humano.

    separador
    #t_5_3.titulo-segundo.color-acento-botones
       h2 5.3 Indicadores de calidad del agua e interpretación de resultados

    p El IRCA determina en el marco de la Resolución 2115 (2007) en su capítulo IV (artículos 14, 15 y 16) el puntaje de riesgo asociado a parámetros físico-químicos y microbiológicos de acuerdo con los análisis efectuados en las muestras de agua, que sobrepasen los valores máximos admitidos según la misma norma, otorgando un puntaje de 0 cuando cumple y 100 cuando no cumple ninguno de estos. 

    p Los puntajes de riesgo más altos están establecidos cuantitativamente así:

    .row.justify-content-center.align-items-center
      .col-lg-8.col-xs-10
        figure
          img(src='@/assets/curso/temas/tema5/img6.svg', alt='Imagen muestra 2 columnas con puntajes de riesgo en calidad de agua:<br>Escherichia Coli 100 puntos<br>Coliformes Totales 15 puntos<br>Color Aparente  6 puntos<br>COT, Aluminio (Al3+), Nitritos) 3 puntos<br>pH, Hierro Total 1.5 puntos')

    .row.justify-content-center.align-items-center.bg-2-tema-5-color.mt-5.p-4
      p La determinación del % IRCA por muestra se lleva a cabo realizando la sumatoria de los puntajes a parámetros no aceptables, dividido la sumatoria de los puntajes de riesgo a todas las características analizadas. 

      .row.justify-content-center.align-items-center
        .col-lg-6.col-xs-10
          figure
            img(src='@/assets/curso/temas/tema5/img7.svg', alt='Imágen decorativa')

      p.mt-5 La determinación del % IRCA mensual se lleva a cabo realizando la sumatoria de los IRCAs de cada muestra mensual sobre el número total de muestras mensuales analizadas de acuerdo con la Resolución 2115 (2007) se determinará con la siguiente fórmula: 

      .row.justify-content-center.align-items-center
        .col-lg-6.col-xs-10
          figure
            img(src='@/assets/curso/temas/tema5/img8.svg', alt='Imágen decorativa')


    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-azul.p-4
        .row.justify-content-center.align-items-center
          .col-4.col-lg-2
            figure.mb-3
              img(src='@/assets/curso/temas/tema5/img9.svg', alt='Imágen decorativa').img12-tm2
          
          .col-lg-10
            p.mb-0 El nivel de riesgo para la salud se establece de acuerdo con los % IRCA mensuales y por muestra (Tabla 4) si los resultados arrojan una clasificación IRCA del 90% es inviable sanitariamente el agua suministrada, por ejemplo. Lo ideal es que el nivel de riesgo no sobrepase un 5% de clasificación IRCA para catalogarlo sin riesgo y que sea apta para consumo humano.  A continuación, se describen las acciones a realizar para cualquiera de los casos (p. 10).


    .row.justify-content-center.align-items-center.mt-5
      .titulo-sexto.color-adicional-2.mb-3
        h5 Tabla 4.
        span Clasificación IRCA.

      .tabla-a.color-adicional-2 
        table
          <thead style="background-color: #00BCD4">
              th.text-white Clasificación IRCA (%)
              th.text-white Nivel de riesgo
              th.text-white IRCA por muestra (notificaciones que adelantará la autoridad sanitaria de manera inmediata)
              th.text-white IRCA mensual(acciones)
          </thead>
            

          tbody
            <tr style="background-color: #F6F6F6">
              td.text-center 80.1 - 100
              td.text-center INVIABLE SANITARIAMENTE
              td Informar a la persona prestadora, al COVE, Alcalde, Gobernador, SSPD, MPS, INS, MAVDT, Contraloría General y Procuraduría General.
              td Agua no apta para consumo humano, gestión directa de acuerdo a su competencia de la persona prestadora, alcaldes, gobernadores y entidades del orden nacional.
            </tr>

            tr
              td.text-center 35.1 - 80
              td.text-center ALTO
              td Informar a la persona prestadora, COVE, Alcalde, Gobernador y a la SSPD.
              td Agua no apta para consumo humano, gestión directa de acuerdo a su competencia de la persona prestadora y de los alcaldes y gobernadores respectivos.
            <tr style="background-color: #F6F6F6">
              td.text-center 14.1 - 35
              td.text-center MEDIO
              td Informar a la persona prestadora, COVER, Alcalde y Gobernador.
              td Agua no apta para consumo humano, gestión directa de la persona prestadora.
            </tr>
            tr
              td.text-center 5.1 - 14
              td.text-center BAJO
              td Informar a la persona prestadora y al COVE.
              td Agua no apta para consumo humano, susceptible de mejoramiento.
            <tr style="background-color: #F6F6F6">
              td.text-center 0 - 5
              td.text-center SIN RIESGO
              td Continuar el control y la vigilancia.
              td Agua apta para consumo humano. Continuar la vigilancia.
            </tr>

    .row.justify-content-center.align-items-center.mt-5
      p A través de la plataforma Sivicap (Sistema de Información para la Vigilancia de la Calidad del Agua para Consumo Humano) del INS que está en funcionamiento desde el año 2012, la autoridad sanitaria remitirá la información de los IRCA en lo relativo a los sistemas de abastecimiento de su jurisdicción. 

      .col-lg-8.mt-5
        .cajon.color-acento-botones.p-4
          p.mb-0 De acuerdo con los reportes arrojados por dicha plataforma en Colombia (febrero de 2019) de un total de muestras procesadas de 2.068 el 70.7% estuvieron catalogadas “sin riesgo”, 0.8 % como nivel bajo, 7.6 % riesgo medio, 15 % riesgo alto y 5.9 % catalogadas como inviable sanitariamente (INS, 2019. p. 3)  

</template>

<script>
export default {
  name: 'Tema5',
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
