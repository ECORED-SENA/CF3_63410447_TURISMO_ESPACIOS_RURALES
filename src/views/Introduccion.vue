<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/intro2.svg" style="max-width:85px;")
          p.mb-0.mt-3 El turismo rural se ha convertido en una alternativa cada vez más atractiva para quienes buscan escapar de la rutina urbana y reconectarse con la naturaleza. Este tipo de turismo no solo ofrece un descanso del ajetreo de la vida moderna, sino que también permite a los viajeros sumergirse en la cultura local, disfrutando de actividades que promueven la interacción con el entorno natural y las tradiciones del lugar. 
        .col-lg-7(data-aos="fade-left")
          figure.m-auto.col-10.col-md-8.col-lg-12
            img(src="@/assets/curso/intro3.png")
      
      .row.mt-4.justify-content-center
        .col-lg-auto.mb-4.mb-lg-0.col-md-7.pe-lg-0(data-aos="fade-down")
          .d-flex.align-content-center.h-100.ps-3.pe-3(style="background-color:#A29A8F;")
            figure 
              img(src="@/assets/curso/intro4.svg")
        .col-lg.ps-lg-0(data-aos="fade-up")
          .d-flex.align-content-center.h-100.p-4.flex-wrap(style="background-color:#C8D5C6;")
            figure
              img(src="@/assets/curso/intro5.svg" style="max-width:85px;")
            p.mt-3.mb-0 Para que el turismo rural sea exitoso, es fundamental identificar y aprovechar las posibilidades y recursos que cada región ofrece. La demanda de este tipo de turismo ha mostrado un perfil particular: personas que buscan tranquilidad, autenticidad y experiencias personalizadas. Por ello, los destinos rurales deben adaptarse a estas expectativas, ofreciendo productos turísticos a medida y servicios que resalten la singularidad de su entorno.
      
      .row.mt-4
        .col-auto.d-none.d-md-block(style="palce-self:center;")
          figure 
            img(src="@/assets/curso/intro6.svg")
        .col(style="place-self:center;")
          p.mb-0 Además, la calidad en el turismo rural es un aspecto clave que debe ser garantizado a través de estándares y sellos de calidad que aseguren la satisfacción del turista. La comercialización efectiva de estos productos, apoyada por una estrategia de marketing bien diseñada, es esencial para atraer y fidelizar a los visitantes, convirtiendo los destinos rurales en opciones sostenibles y competitivas dentro del mercado turístico. 


    
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
