<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.cont_sintesis.p-4
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta  los componentes del turismo rural, dividido en demanda y oferta. En la demanda, se abordan aspectos como el perfil del turista, sus motivaciones y la segmentación del mercado. En la oferta, se destacan los elementos clave como el alojamiento rural, la calidad en el turismo rural, el marketing y la comercialización, y otros servicios, con subcategorías que incluyen atractivos naturales, servicios de alojamiento, normas de calidad, estrategias de marketing, y servicios complementarios.")
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
