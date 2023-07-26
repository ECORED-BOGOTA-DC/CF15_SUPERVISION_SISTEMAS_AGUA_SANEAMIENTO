<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A manera de síntesis para un correcto análisis e interpretación de muestras es importante aclarar los conceptos de protocolos de laboratorio, el análisis físico químico, análisis microbiológico y reporte de resultados para verificar la calidad del agua. Sabiendo esto y para una breve revisión de los temas vistos, puede observar el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama con síntesis análisis e interpretación de los conceptos de protocolos de laboratorio, el análisis físico químico, análisis microbiológico y reporte de resultados para verificar la calidad del agua.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
