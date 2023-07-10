<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Relación de la calidad del agua y la salud de la población

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-5(data-aos="fade-up-right")
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='alt')

      .col-lg-7
        p A continuación, se conocerá el montaje de un ensayo de laboratorio conocido como titulación. Consiste en una bureta sujeta a un soporte universal, el cual va agregando una solución (a la cual se le pretende determinar la concentración) a un Erlenmeyer que tiene una sustancia estandarizada y un indicador colorimétrico. La práctica se desarrolla hasta que el indicador cambie de color.  

        p La titulación es solo uno de los ensayos en el procesamiento de las muestras de agua en el laboratorio. Estos ensayos permiten identificar los parámetros fisicoquímicos y microbiológicos, para tomar acciones concretas por los entes territoriales a los sistemas de suministro, con el fin de garantizar el acceso al agua potable en condiciones de calidad.

    .row.mb-5
      p Algunas enfermedades presentes en las comunidades están relacionadas con el recurso hídrico derivadas de condiciones como: 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul--color.lista-ul--separador.fa-ul2
          li
            i.fas.fa-check-circle.color-vineta1
            | La deficiencia en los sistemas de suministro.
          li
            i.fas.fa-check-circle.color-vineta1
            | Baja calidad o escasez de esta.
          li
            i.fas.fa-check-circle.color-vineta1
            | Falta de saneamiento básico. 
          li
            i.fas.fa-check-circle.color-vineta1
            | Falta de contacto de las personas con aguas de tipo recreativo. 
          li

        p Estas condiciones pueden generar enfermedades como el cólera, hepatitis A, fiebre tifoidea y leptospirosis, entre otras, las cuales son transmitidas por el agua. En otras ocasiones están originadas por el agua como la amebiasis, algunas de tipo vectorial (hábitat acuático permanente o transitorio del agente etiológico) como la malaria y el dengue o por falta de agua como la dermatitis (Ministerio de Salud y Protección Social e Instituto Nacional de Salud). (INS, 2016).  

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img2.svg', alt='alt')      


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
