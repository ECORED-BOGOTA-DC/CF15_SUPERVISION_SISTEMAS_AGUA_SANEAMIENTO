<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mt-5
      .col-8.col-lg-4(data-aos="fade-up-right")
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='alt')  
      .col-11.col-lg-8.p-4.bg-intro(data-aos="fade-up-left")
        .row.justify-content-center.align-items-center 
          .col-10
            p Le damos la bienvenida al componente formativo denominado #[b “Análisis e interpretación de muestras”.] Que permitirá desarrollar en los participantes la habilidad para comprobar el funcionamiento de sistemas de agua para consumo humano, de acuerdo con normas técnicas que permitan aplicar protocolos de análisis e interpretación de resultados según criterios técnicos establecidos. Además, se abordarán elementos importantes en protocolos de laboratorio, análisis físico químico, análisis microbiológico, reportes y resultados en la calidad del agua. Lo invitamos a aprovechar el contenido y a explorar las actividades y recursos que se disponen para su aprendizaje.

            b Éxitos 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
