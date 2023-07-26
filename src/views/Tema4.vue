<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis microbiológico

    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema4/img1.png', alt='Imágen decorativa')
      
      .col-lg-11
        .tarjeta.bgtarjeta.p-4
          p Un aspecto importante que requiere supervisión es la parte microbiológica del agua, garantizar que sus condiciones sean acordes. Además, son los procedimientos de laboratorio que se efectúan a una muestra de agua para consumo humano para evaluar la presencia o ausencia, tipo y cantidad de microorganismos. Resolución 2115 (2007).

    separador
    #t_4_1.titulo-segundo.color-acento-botones
       h2 4.1. Tipos de microorganismos

    p La microbiología hablando en sentido etimológico, viene del griego «μικρος» mikros "pequeño", «βιος» bios, "vida" y «-λογία» -logía, tratado, estudio, ciencia; se encarga del estudio de los microorganismos que solo son visibles a través del microscopio, sean estos eucariotas o procariotas (Acevedo, R; Severiche, C. y Castillo M. 2013. p. 7).

    .row.justify-content-center.align-items-center.mt-5
      TabsB.color-primario
        .py-4.py-md-5(titulo="Bacterias" :icono="require('@/assets/curso/temas/tema4/img2.svg')")(title="Imágen decorativa")
          .row
            .col-md-6.mb-4.mb-md-0
              p Son microorganismos procariotas unicelulares y su reproducción es por fisión binaria. El tamaño puede oscilar entre 0.5 y 3 μm, y la morfología determinada por su pared celular puede ser según Pírez, M y   Mota, M.  (s.f.) en su libro morfología y estructura bacteriana: <b style="color: #3076B6; font-weight: 400">cocos, diplococo, cocos en cadenas, cocos en racimos, cocos en tétradas, cocobacilos, bacilos, bacilos bordes redondeados, bacilos bordes rectos, bacilos fusiformes, bacilos curvos, espiroquetas</b> (pp. 23 - 24).
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img6.png', alt='Imágen decorativa')
        .py-4.py-md-5(titulo="Virus" :icono="require('@/assets/curso/temas/tema4/img3.svg')")(title="Imágen decorativa")
          .row
            .col-md-6.mb-4.mb-md-0
              p Los virus son entes biológicos con material genético que puede ser ARN o ADN y necesitan de una célula hospedadora para replicar su material genético a través de la infección. El material genético se encuentra protegido por una cápside proteica y la replicación viral ocurre en las siguientes etapas: 

              ol.lista-ol--cuadro.lista-ol.fa-ul2
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Adsorción o fijación.
                
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Penetración o entrada.

                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Descapsidación o desnudamiento.
                
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Síntesis de proteínas y replicación del genoma.

                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Maduración o ensamblaje.
                
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Liberación o egreso (Negroni, M y González, M.  2017. pp. 71 - 73).

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img7.png', alt='Imágen decorativa')

        .py-4.py-md-5(titulo="Protozoos" :icono="require('@/assets/curso/temas/tema4/img4.svg')")(title="Imágen decorativa")
          .row
            .col-md-6.mb-4.mb-md-0
              p Los protozoarios son organismos unicelulares eucarióticos con tamaños que oscilan entre 3 y 100 μm, son móviles, sin pared celular y se alimentan de otros organismos, lo cual puede otorgarles características parásitas como sucede con <i>Entamoeba histolytica</i> causante de la amibiasis, una enfermedad causada por el agua.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img8.png', alt='Imágen decorativa')

        .py-4.py-md-5(titulo="Hongos" :icono="require('@/assets/curso/temas/tema4/img5.svg')")(title="Imágen decorativa")
          .row
            .col-md-6.mb-4.mb-md-0
              p Son organismos eucarióticos, sin pigmentos fotosintéticos, de naturaleza heterótrofa, pluricelular o unicelular e inmóvil (p.47) Un ejemplo de este tipo de organismos son las levaduras utilizadas en procesos biotecnológicos fermentativos como el procesamiento de pan.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img9.png', alt='Imágen decorativa')

    separador
    #t_4_2.titulo-segundo.color-acento-botones
       h2 4.2. Técnicas de esterilización de vidriería, ambiente y equipos de laboratorio microbiológico

    p En el laboratorio para análisis microbiológico se conocen dos técnicas para la eliminación completa de microorganismos o control de su presencia: 

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img10.png", alt="Imágen decorativa")
          .crd_hover_txt--body.text-white.text-center
            h4.mb-3 Esterilización 
            p.mb-0 Consiste en someter material de vidrio, a 121 °C por 15 minutos en <b>autoclave</b> conocido como calor húmedo o también calor seco mediante horno a 150 a 180 °C durante 2 horas o flameado en mechero.  

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt2(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img11.png", alt="Imágen decorativa")
          .crd_hover_txt--body.text-white.text-center
            h4.mb-3 Desinfección 
            p.mb-0 La desinfección solo limita su presencia, pero no garantiza una eliminación completa y se realiza a través de <b>sustancias químicas</b> como el hipoclorito de sodio (Aquiahuatl, M y Pérez, M. 2004. p.13)

    .row.justify-content-center.align-items-center.mt-3
      p De acuerdo con lo establecido por el INS (2011) los recipientes y equipos de muestreo de agua destinados para el análisis microbiológico, deben cumplir con una esterilización por vía húmeda en autoclave (20 minutos a 121 °C) o seca en horno (1 hora a 180 °C) previamente al lavado.

    separador
    #t_4_3.titulo-segundo.color-acento-botones
       h2 4.3. Preparación de medios de cultivo para análisis microbiológico de aguas

    .row.justify-content-center.align-items-center
      .col-lg-8.col-xs-12
        p Los medios de cultivo son creados de manera artificial en el laboratorio, teniendo en cuenta las especificaciones para cada género y/o especie de microorganismos, con relación a sus requerimientos nutricionales. Los macronutrientes son C, H, O, N, P, S, K, Ca, Fe y Na; y los micronutrientes son Cr, Co, Cu, Mn, Mo, Ni, Se, W, V, Zn. 
      
        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 Para el análisis microbiológico los medios de cultivo pueden dividirse en sintéticos y complejos según (Apella, M y Araujo, P. s.f.).  Se invita a ver la siguiente figura.

      .col-lg-4.col-xs-12
        figure
          img(src='@/assets/curso/temas/tema4/img12.png', alt='Imágen decorativa')


    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6.col-xs-10
        .titulo-sexto.color-adicional-2.mb-3
          h5 Figura 9.
          span Division análisis microbiológico 

        figure
          img(src='@/assets/curso/temas/tema4/img13.svg', alt='Diagrama división análisis microbiológico, muestra Medios de cultivo que son los Sintéticos y complejos y se encuentran según finalidad,  con Enriquecidos, Selectivos, Diferenciales Selectivos-diferenciales y Electivos')

        
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-9.col-xs-10
        .cajon.color-acento-botones.p-4.mt-5
          p.mb-0 Una vez preparados los medios de cultivo para el análisis microbiológico es necesario, realizar una esterilización y también es conveniente tener precauciones al momento de la manipulación para evitar la contaminación del medio y la alteración del resultado. Se aconseja utilizar el material de laboratorio como las asas previamente esterilizadas, así como al momento de realizar la siembra hacerlo cerca al mechero como se muestra a continuación (Figura 10) (Bonilla M, Pajares, P, Vigueras, J, Sigala, J, Le Borgne, S. 2016. 

    .row.justify-content-center.align-items-center.mt-5
      .titulo-sexto.color-adicional-2.mb-3
        h5 Figura 10.
        span Siembra cerca al merchero.
      figure
        img(src='@/assets/curso/temas/tema4/img14.svg', alt='Muestra pasos en la siembra cerca al mechero, inicia Flamear el asa, retirar el tapón, introducir parte estéril, volver a flamear y tapar el tubo.')

    separador
    #t_4_4.titulo-segundo.color-acento-botones
       h2 4.4  Técnicas y protocolos de análisis microbiológico de aguas

    p Algunas de las técnicas más utilizadas en laboratorio para el análisis microbiológico del agua son la coloración simple de frotis y la siembra en medios de cultivo. Veamos la descripción de estas:

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xs-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.tarjeta-1.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema4/img15.svg', alt='Texto que describa la imagen')
              
            h2.text-center Coloración simple de frotis 
            p.text-center Consiste en la tinción de la pared celular de los microorganismos extendidos en la placa (portaobjetos) previamente fijados, con el fin de determinar de manera más clara en el microscopio su estructura, forma y tamaño. Las tinciones pueden ser simples, diferencial o específicas (López L; Hernández, M; Colín, C; Ortega, S; Cerón, G; Franco, R. 2014. p.11) Algunos colorantes son el azul de lactofenol, fucsina, azul de metileno, entre otros. 

          
          .col-md.tarjeta.tarjeta-2.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema4/img16.svg', alt='Texto que describa la imagen')
              
            h2.text-center Siembra en medios de cultivo
            p.text-center Los microorganismos pueden ser inoculados en medios líquidos (caldos) o sólidos (agar) los cuales contarán con las condiciones necesarias para favorecer su desarrollo y su crecimiento. Estas siembras permiten conocer características específicas de los microorganismos como actividad bioquímica, morfología, sensibilidad a algunas sustancias, entre otros, bajo técnicas de aislamiento como la siembra por estría cruzada en agar nutritivo o en tubos inclinados con caldos nutritivos (Aquiahuatl, M y Pérez, M. 2004. pp.37 - 38)


    

</template>

<script>
export default {
  name: 'Tema4',
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
