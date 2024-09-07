<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Características de la demanda del turismo rural

    .cont_1_1
      .row 
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#694D7E;border-radius:14px;")
            p.text-white.mb-0 El turismo rural se caracteriza por atraer a visitantes que buscan lugares tranquilos, no masificados, y con formas de vida tradicionales que les permitan romper con el comportamiento urbano. Este tipo de turismo no depende estrictamente de las temporadas altas y bajas, siendo común durante los fines de semana, puentes festivos, Semana Santa, y en vacaciones largas, donde se combinan estancias en espacios rurales y costeros. 
        .col-lg-7(data-aos="fade-left")
          figure.m-auto.col-9.col-md-8.col-lg-12
            img(src="@/assets/curso/tema1/2.png")
      
      .row.mt-4
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/3.png")
        .col-lg-8(data-aos="fade-up")
          p Los tipos de turistas rurales son:  
          .cont_1_2.mb-3.p-4.pb-lg-5
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/5.svg")
              .col(style="place-self:center;")
                h5 Turistas con vínculos al espacio rural
                p.mb-0 Estos visitantes suelen alojarse en casas de familiares o en viviendas propias, como fincas. Tienen un alto grado de repetición y fidelidad hacia el espacio rural visitado.
          .cont_1_2.mb-3.p-4.pb-lg-5
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema1/6.svg")
              .col(style="place-self:center;")
                h5 Turistas sin vínculos al espacio rural
                p.mb-0 Utilizan alojamientos rurales comerciales y requieren una planificación promocional específica para ser atraídos.
    
    p.mt-4(data-aos="fade-right") Las preferencias y organización del viaje son: 

    .tarjeta.cont_1_3.p-4.mt-4.p-lg-5.pb-lg-4
      SlyderA(tipo="b")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            h5 Grupo familiar
            p El turismo rural se realiza comúnmente en grupo familiar, lo que requiere que las actividades ofrecidas sean variadas y adecuadas para todas las edades y preferencias. 
          .col-lg-6(style="place-self:center;")
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/8.png')
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            h5 Medios de transporte
            p Los turistas rurales suelen utilizar su propio medio de transporte, como vehículos propios o de familiares y amigos. 
          .col-lg-6(style="place-self:center;")
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/9.png')
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
            h5 Autonomía en la planificación 
            p Los turistas rurales prefieren organizar sus viajes de manera independiente, sin utilizar agencias de viajes, aunque necesitan información detallada sobre el destino y alojamientos. 
          .col-lg-6(style="place-self:center;")
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/10.png')
    
    p.mt-5(data-aos="fade-right") Las tendencias de la demanda turística actual se encuentran enmarcadas en los siguientes factores.

    .col-xl-10.m-auto.mt-4
      .row.justify-content-center
        .col-lg-auto.col-md-8.pe-lg-0(data-aos="fade-right")
          .h-100.d-flex.align-content-center.flex-wrap(style="background-color:#FAF4FF;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src="@/assets/curso/tema1/11.svg")
        .col-lg.ps-lg-0(data-aos="fade-left")
          .p-3(style="background-color:#C8D5C6;")
            .d-flex
              i.fas.fa-check-circle(style="color:#694D7E;place-self:center;")
              span.ps-3 La supersegmentación del mercado, es decir, la división y subdivisión del mercado.
          .p-3(style="background-color:#EED7FE;")
            .d-flex
              i.fas.fa-check-circle(style="color:#694D7E;place-self:center;")
              span.ps-3 La búsqueda de unas vacaciones activas.
          .p-3(style="background-color:#C8D5C6;")
            .d-flex
              i.fas.fa-check-circle(style="color:#694D7E;place-self:center;")
              span.ps-3 La demanda exigente en cuanto a la calidad.
          .p-3(style="background-color:#EED7FE;")
            .d-flex
              i.fas.fa-check-circle(style="color:#694D7E;place-self:center;")
              span.ps-3 La mayor demanda de viajes independientes.
          .p-3(style="background-color:#C8D5C6;")
            .d-flex
              i.fas.fa-check-circle(style="color:#694D7E;place-self:center;")
              span.ps-3 La mayor capacidad económica.
          .p-3(style="background-color:#EED7FE;")
            .d-flex
              i.fas.fa-check-circle(style="color:#694D7E;place-self:center;")
              span.ps-3 La baja disposición de tiempo
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h3#t_1_1 1.1 La motivación turística
    
    p(data-aos="fade-right") Las motivaciones que llevan a las personas a viajar son diversas y dispares; por ello, sería ideal realizar estudios motivacionales que identifiquen los motivos que las impulsan a desplazarse, en este caso, a los espacios rurales y naturales.

    .cont_1_4.mt-4
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema1/13.png")
        .col-lg-7(data-aos="fade-left")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure 
                img(src="@/assets/curso/intro6.svg")
            .col(style="place-self:center;")
              p.mb-0 En el caso de esta tipología de turismo, los turistas suelen tener motivos como la tranquilidad, el reposo, el reencuentro con familiares y amigos, con su pasado, el aire puro y no contaminado, el contacto con la naturaleza, es decir, la calidad de vida que ofrece el medio rural, un aspecto muy deteriorado y perdido en la urbe.
          .p-3.bg-white.mt-4(style="border:2px #769671 solid;border-radius:14px;")
            p.mb-0 Para poder plantear una estrategia de mercadeo que genere los resultados esperados, como la compra del producto turístico real, se requiere una mayor cantidad de información sobre los turistas y, en especial, sobre su comportamiento. Por ello, es necesario obtener más información sobre los turistas y su comportamiento a través de la investigación de los mercados turísticos, para identificar las motivaciones y expectativas por segmentos de mercado.
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/14.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 Elementos que componen la oferta de turismo rural
      
      p(data-aos="fade-left") La oferta turística es la suma de atractivos y actividades más servicios como alojamiento, alimentación y servicios complementarios que, combinados, generan productos turísticos capaces de satisfacer las necesidades, motivaciones y expectativas de un segmento de mercado específico.
      p(data-aos="fade-up") Así, la oferta turística contempla:

      .row.mt-4.justify-content-center
        .col-lg-auto.d-none.d-lg-block(style="place-self:center;" data-aos="fade-down")
          figure 
            img(src="@/assets/curso/tema1/15.svg")
        .col-lg(data-aos="fade-up")
          .p-3.bg-white.m-lg-0.m-md-auto(style="border:1px #707070 solid;border-radius:11px;box-shadow:0px 0px 20px rgba(0,0,0,.2);max-width:fit-content;margin-bottom:1.5rem !important;")
            .row.justify-content-center
              .col-lg.pe-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/16.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Atractivos
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-plus.fa-3x
              .col-lg.pe-lg-0.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/17.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Actividades
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-plus.fa-3x
              .col-lg.pe-lg-0.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/18.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Servicios
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-equals.fa-3x
              .col-lg.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/19.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Producto turístico
          
          .p-3.bg-white.m-lg-0.m-md-auto(style="border:1px #707070 solid;border-radius:11px;box-shadow:0px 0px 20px rgba(0,0,0,.2);max-width:fit-content;")
            .row.justify-content-center
              .col-lg.pe-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/20.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Producto turístico
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-plus.fa-3x
              .col-lg.pe-lg-0.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/21.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Precio
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-plus.fa-3x
              .col-lg.pe-lg-0.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/22.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Canales de distribución
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-plus.fa-3x
              .col-lg.pe-lg-0.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/23.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Promoción
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-plus.fa-3x
              .col-lg.pe-lg-0.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/24.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Información
              .col-lg-auto.ps-lg-0.pe-lg-0(style="place-self:center;")
                .m-auto.text-center
                  i.fas.fa-equals.fa-3x
              .col-lg.ps-lg-0.col-md-9
                .h-100.text-center.d-flex.flex-wrap(style="background-color:#FCF8EE;align-content:space-between")
                  .pb-2.pt-4.w-100
                    figure
                      img(src="@/assets/curso/tema1/25.svg" style="max-width:80px;max-height:80px;display:inline;")
                  .p-2.w-100(style="background-color:#E9BD68;border-radius:0px 0px 7px 7px;")
                    p.mb-0 Oferta turística
    
      Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_2 1.2 Recursos y atractivos turísticos
    
    p(data-aos="fade-right") Los recursos en los espacios rurales son numerosos y variados, pero es esencial interpretar qué se entiende por recurso en el contexto turístico.

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        .p-4(style="background-color:#E3EAE2;border-radius:20px;")
          p.mb-0 Un recurso turístico se define como los factores físicos y culturales que pueden desarrollarse o aprovecharse para el turismo, constituyendo la base para el desarrollo posterior como atractivos o atracciones. Estos recursos son la materia prima de futuras atracciones turísticas.
      .col-lg-7(data-aos="fade-left" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/26.svg" style="max-width:90px;")
        p.mb-0 En otros países, al referirse a recursos, se habla de atractivos. Cada país adopta su propio enfoque sobre cómo clasificar y utilizar estos recursos. Por ejemplo:
    
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        figure.m-auto.col-md-6.col-lg-12
          img(src="@/assets/curso/tema1/27.png")
      .col-lg-9(data-aos="zoom-in")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/28.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 
            | #[strong Argentina] #[br]
            | Atractivos naturales #[br]
            | Patrimonio histórico y museos #[br]
            | Folklore y manifestaciones de la cultura tradicional #[br]
            | Realizaciones técnicas o artísticas contemporáneas #[br]
            | Acontecimientos programados y manifestaciones culturales contemporáneas
    
    p.mt-4(data-aos="fade-right") En Colombia, la clasificación de los atractivos turísticos y de los recursos (potenciales) se organiza de la siguiente manera:

    TabsC.color-acento-botones.mt-4
      .py-3.py-md-4(titulo="Recursos culturales")
        .row.p-4.pt-0.col-xl-11.m-auto
          .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/30.png')
          .col-lg-7(style="place-self:center;")
            h5 Recursos culturales
            p Incluyen las realizaciones tangibles e intangibles de una comunidad, como arquitectura, arqueología, historia, obras de arte, expresiones religiosas, folclore, y realizaciones técnico-científicas. Ejemplos: música, artesanías, gastronomía, peregrinaciones, pintura, escultura. 
      .py-3.py-md-4(titulo="Sitios naturales")
        .row.p-4.pt-0.col-xl-11.m-auto
          .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/31.png')
          .col-lg-7(style="place-self:center;")
            h5 Sitios naturales
            p Comprenden accidentes geográficos de interés turístico, como montañas, altiplanicies, llanuras, lagunas, ríos, cascadas, costas, islas, áreas de observación de fauna y flora, sitios de pesca, y parques nacionales. Ejemplos: nevados, cordilleras, volcanes, mesetas, desiertos, penínsulas, ensenadas. 
      .py-3.py-md-4(titulo="Festividades y eventos")
        .row.p-4.pt-0.col-xl-11.m-auto
          .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema1/32.png')
          .col-lg-7(style="place-self:center;")
            h5 Festividades y eventos
            p Atractivos generados por la realización de eventos con contenido actual o tradicional, donde la población es participante o espectadora. Categorías incluyen ferias, exposiciones, eventos artísticos, culturales, deportivos, aniversarios, reinados, y días de mercado. 

    p.mt-5(data-aos="fade-up") El proceso de valoración es:

    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/33.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Identificación")
            p.mb-0 Consiste en la elaboración de un inventario turístico para localizar y cuantificar los recursos y atractivos disponibles en el área rural. 
          .row.col-xl-11.m-auto(titulo="Valoración")
            p.mb-0 Involucra la evaluación del estado de conservación, la calidad del atractivo, y el grado de contaminación de los recursos identificados. 
          .row.col-xl-11.m-auto(titulo="Accesibilidad y acondicionamiento")
            p.mb-0 Análisis de las condiciones de acceso a los recursos y la identificación de necesidades de acondicionamiento para mejorar la experiencia turística. 
          .row.col-xl-11.m-auto(titulo="Aprovechamiento y potencialidad")
            p.mb-0 Determinación del grado de aprovechamiento actual y la potencialidad para desarrollar actividades turísticas, proporcionando un diagnóstico de la oferta disponible y priorizando su inclusión en la oferta turística rural. 
              

          

              
      



      
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
