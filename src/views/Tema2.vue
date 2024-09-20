<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Las actividades turísticas
    
    .cont_2_1.p-4.ps-lg-5(data-aos="zoom-in")
      .row
        .col-lg-8.order-2.order-lg-1(style="place-self:center;")
          .bg-white.p-4.p-xl-5
            p.mb-0 Es esencial diferenciar entre las actividades que se realizan dentro de los alojamientos rurales y aquellas que se desarrollan fuera o en los alrededores. En muchos casos, estas actividades involucran la participación activa del turista, mientras que en otros, se adopta una actitud más contemplativa. Un aspecto clave en el turismo rural son las actividades dentro de los alojamientos rurales, ya que un turista no viaja únicamente para descansar; el alojamiento debe estar preparado para ofrecer una variedad de experiencias.
        .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(style="place-self:center;")
          figure.m-auto.col-8.col-md-5.col-lg-7
            img(src="@/assets/curso/tema2/1.png")
    
    p.mt-4(data-aos="fade-right") Las actividades dentro de los alojamientos rurales son: 
    
    .cont_2_2
      .col-xl-11.m-auto
        .row
          .col-lg-3.mb-4.mb-lg-0(data-aos="fade-up" style="place-self:center;")
            figure.m-auto.col-8.col-md-4.col-lg-12
              img(src="@/assets/curso/tema2/3.svg")
          .col-lg-9(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 p-4")
              .tarjeta.cont_2_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/5.svg" style="max-width:100px;display:inline;")
                  h5.mt-3.text-center Participación en actividades de la finca 
                  ul.lista-ul.mt-3
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Ordeño de vacas. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Arreo de ganado. 
              .tarjeta.cont_2_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/6.svg" style="max-width:100px;display:inline;")
                  h5.mt-3.text-center Actividades recreativas 
                  ul.lista-ul.mt-3
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Juegos tradicionales del medio rural. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Juegos de mesa. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Lectura. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Degustación de productos propios de la finca. 
              .tarjeta.cont_2_3.p-4
                .pb-4.ps-3.pe-3
                  figure.text-center
                    img(src="@/assets/curso/tema2/7.svg" style="max-width:100px;display:inline;")
                  h5.mt-3.text-center Actividades culturales y educativas 
                  ul.lista-ul.mt-3
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Cursos y exposiciones. 
                    li.d-flex
                      i.fas.fa-check-circle(style="color:#946CB1;")
                      span Participación en talleres y actividades relacionadas con la vida rural. 
      
      p.mt-4(data-aos="fade-right") Las actividades en el entorno del alojamiento son: 

      .row.justify-content-center.mt-4
        .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema2/8.png")
            .crd_hover_txt--body
              h5.mb-3.text-white Recreativo-deportivas 
              ul.lista-ul.mb-0
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Áreas de baño y actividades náuticas. 
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span #[strong Senderismo:] paseos a pie por rutas naturales. 
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span #[strong Turismo ecuestre:] paseos a caballo. 
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span #[strong Cicloturismo:] paseos en bicicleta. 
                li.d-flex.text-start.mb-0
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span #[strong Deportes aéreos:] parapente, rappel, vuelos en ultraligeros. 
        .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema2/9.png")
            .crd_hover_txt--body
              h5.mb-3.text-white Animación sociocultural 
              ul.lista-ul.mb-0
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Bailes y concursos deportivos. 
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Conferencias y exposiciones. 
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Cursos de cocina tradicional y talleres de expresión artística, como la cerámica. 
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Representaciones teatrales y visitas a artesanos locales. 
                li.d-flex.text-start.mb-0
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Rutas temáticas sobre patrimonio artístico y arquitectónico rural. 
        .col-xl-4.col-lg-4.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left" @mouseover="indicadorTarjetaFlip = false")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema2/10.png")
            .crd_hover_txt--body
              h5.mb-3.text-white Turismo educativo 
              ul.lista-ul.mb-0
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Visitas a centros de interpretación y aulas en la naturaleza. 
                li.d-flex.text-start.mb-1
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Rutas ecológicas, gastronómicas, y arquitectónicas o histórico-artísticas. 
                li.d-flex.text-start.mb-0
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Visitas a pequeñas industrias agroalimentarias y otras pequeñas industrias locales, como productoras de quesos, vino, mermeladas, y más. 
    
    p.mt-4(data-aos="fade-right") El turismo rural debe ser interactivo, permitiendo y potenciando el contacto del turista con el paisaje natural y cultural del destino.

    Separador

    .titulo-segundo(data-aos="flip-up")
      h3#t_2_1 2.1	Actividades en el espacio rural
    
    .row
      .col-lg-4.pe-lg-0(data-aos="fade-right")
        .h-100.d-flex.flex-wrap.align-items-end(style="background-color:#FAF4FF;")
          figure.col-7.col-md-6.col-lg-12.mx-auto
            img(src="@/assets/curso/tema2/11.svg")
      .col-lg-5.mb-4.mb-lg-0.ps-lg-0(data-aos="zoom-in")
        .p-4.h-100.d-flex.align-content-center.flex-wrap(style="background-color:#E9DECF;")
          p.mb-0 La vida al aire libre se ha convertido en una necesidad esencial para el hombre moderno, permitiéndole reconectar con la naturaleza y escapar temporalmente de las presiones de la vida urbana. Esta conexión con la naturaleza permite al ser humano conocerse mejor a sí mismo y a los demás, en un ambiente donde la falsedad y el orgullo quedan atrás. Este fenómeno ha impulsado un interés creciente en actividades al aire libre, ya sea por motivos deportivos, recreativos o lúdicos, especialmente en períodos de vacaciones y fines de semana.
      .col-lg-3(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/12.png")
    
    p.mt-4(data-aos="fade-up") La clasificación y evaluación de actividades en la naturaleza implica categorizar diversas experiencias al aire libre según su tipo, impacto ambiental y nivel de dificultad, para posteriormente valorar su sostenibilidad, seguridad y contribución al bienestar de los participantes.

    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/13.svg")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Identificación de actividades ")
            .col-lg-7.mb-4.mb-lg-0
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Es fundamental que municipios, regiones o empresas de turismo rural identifiquen, cataloguen y definan las actividades que pueden realizarse en su territorio.  
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Incluso lugares sin un atractivo turístico de renombre pueden consolidarse como destinos atractivos mediante las actividades que ofrecen a los turistas.
            .col-lg-5 
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/14.png")
          .row.col-xl-11.m-auto(titulo="Competitividad del destino")
            .col-lg-7.mb-4.mb-lg-0
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span La competitividad de un destino turístico depende del uso y la interacción que el turista tenga con el lugar.  
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Es esencial que los promotores de turismo rural dispongan de los medios necesarios para la práctica de estas actividades. 
            .col-lg-5 
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/15.png")
          .row.col-xl-11.m-auto(titulo="Consolidación de imagen turística ")
            .col-lg-7.mb-4.mb-lg-0
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span Con el tiempo, regiones, municipios o promotores pueden identificarse con una actividad turística específica, fortaleciendo su imagen como destinos turísticos.  
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span La elección del tipo de actividad y sus características debe estar alineada con el segmento de mercado al que se dirige. 
            .col-lg-5 
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/16.png")
    
    p.mt-4(data-aos="fade-up") La planificación y adecuación de espacios consiste en diseñar y adaptar entornos físicos para maximizar su funcionalidad, accesibilidad y seguridad, asegurando que cumplan con los requisitos específicos de las actividades que se desarrollarán en ellos, al tiempo que se preserva el entorno natural o construido.

    TabsA.color-acento-botones.mt-4
      .tarjeta.color-acento-botones.p-4(titulo="Análisis de espacios" style="background-color:#E3EAE2;")
        h5(style="color:#12263F;") Análisis de espacios 
        p(style="color:#12263F;") Al inventariar las actividades turísticas, es crucial analizar los espacios disponibles, su adecuación, señalización, seguridad y riesgo. 
      .tarjeta.color-acento-botones.p-4(titulo="Equipamiento y personal" style="background-color:#E3EAE2;")
        h5(style="color:#12263F;") Equipamiento y personal 
        p(style="color:#12263F;") Se deben evaluar las condiciones necesarias para el desarrollo de las actividades, incluyendo el equipamiento disponible y necesario, así como la disponibilidad de personal capacitado y experto para acompañar a los turistas. 
      .tarjeta.color-acento-botones.p-4(titulo="Equipamiento y personal" style="background-color:#E3EAE2;")
        h5(style="color:#12263F;") Equipamiento y personal 
        p(style="color:#12263F;") Estas evaluaciones permitirán definir las inversiones prioritarias para satisfacer los requerimientos básicos de las actividades, especialmente aquellas que demandan una planificación y adecuación física rigurosa debido a la fragilidad de los espacios y la necesidad de infraestructura y equipamiento especializado. 
    
    .cont_2_4.mt-4.pt-1
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/14.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 El alojamiento rural
      
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p Los espacios rurales ofrecen grandes posibilidades para el alojamiento. Existen fincas de recreo en alquiler por días y temporadas largas, fincas con alquiler de habitaciones, fincas productoras que ofrecen alojamiento y participación en las actividades propias, y casas o ranchos de campesinos que pueden ofrecer alojamiento, venta de productos y cursos sobre su producción. Una de las ventajas del turismo rural es la reutilización o el reciclaje de viviendas declaradas patrimonio histórico o que, sin serlo, pueden adecuarse, habilitarse y/o restaurarse, preferiblemente conservando su arquitectura tradicional, que es uno de los aspectos que los turistas rurales buscan en la prestación del servicio de alojamiento.
          .p-4.mt-4.bg-white(style="border:2px #769671 solid;border-radius:14px;")
            p.mb-0 La primera opción será evaluar las posibilidades y la disposición de la población local con propiedades para vincularse al turismo y recibir ingresos complementarios por este aspecto. La construcción de nuevos hoteles en el medio rural debería ser la última opción, ya que no es sencillo, implica una gran inversión y no está al alcance de los pobladores. Según los principios del turismo sostenible y la filosofía del turismo rural, la población local debe vincularse y gestionar, en lo posible, el mayor número de servicios y empresas de turismo rural.
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/18.png")
      
      .row.mt-4
        .col-lg-5(data-aos="fade-right" style="place-self:center;")
          figure.d-none.d-lg-block
            img(src="@/assets/curso/tema2/19.png")
        .col-lg-7(data-aos="fade-left")
          p Cuando se planifique el alojamiento, los requisitos clave en la prestación de este servicio en el espacio rural son:
          ul.lista-ul.mb-0
            li.mb-1
              i.fas.fa-check-circle(style="color:#946CB1;")
              span La ubicación del alojamiento.
            li.mb-1
              i.fas.fa-check-circle(style="color:#946CB1;")
              span La interacción del alojamiento con los recursos naturales y culturales del entorno.
            li.mb-1
              i.fas.fa-check-circle(style="color:#946CB1;")
              span El tipo de construcción, preferiblemente con una arquitectura tradicional de la región.
            li.mb-1
              i.fas.fa-check-circle(style="color:#946CB1;")
              span Las diferentes alternativas de acceso al alojamiento.
            li.mb-1
              i.fas.fa-check-circle(style="color:#946CB1;")
              span El paisaje que ofrece.
            li.mb-1
              i.fas.fa-check-circle(style="color:#946CB1;")
              span Los servicios ofrecidos, como alimentación completa o sin alimentación.
            li.mb-0
              i.fas.fa-check-circle(style="color:#946CB1;")
              span Las actividades que puede practicar el visitante.
      
      .row.mt-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-up")
          .h-100.d-flex.align-content-center.flex-wrap.p-4(style="background-color:#F6E5C2;border-radius:14px;")
            p.mb-0 Es esencial preservar el diseño original de los alojamientos rurales, ya que este es uno de los aspectos más valorados por los turistas que buscan una experiencia auténtica. La conservación o realce de elementos arquitectónicos como vigas expuestas, tejas de barro cocido y colores tradicionales son cruciales. Estos detalles dependerán de la región, la cultura, la historia y la arquitectura típica del lugar. 
        .col-lg-7
          .row  
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/20.svg")
            .col-md(data-aos="fade-up" style="place-self:end;")
              figure.mb-3
                img(src="@/assets/curso/tema2/21.svg" style="max-width:70px;")
              p.mb-0 Por ejemplo, la arquitectura en el departamento del Chocó es muy diferente de la de los Llanos, el Eje Cafetero o el Archipiélago de San Andrés y Providencia.
      
      p.mt-4(data-aos="fade-right") Un alojamiento rural nunca tendrá las mismas características que uno urbano. Debe cuidar ciertos detalles y resaltar aspectos propios de la región, como el uso de productos y materiales típicos de la vida rural tradicional. Este tipo de alojamiento debe ser un lugar apacible, agradable y destinado al descanso, ofreciendo la posibilidad de realizar actividades propias del campo y la región visitada.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/14.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Elementos clave en los alojamientos rurales
    
    p(data-aos="fade-left") Los alojamientos rurales destacan por su autenticidad, conexión con la naturaleza, sostenibilidad, comodidad y oferta de gastronomía local. Algunas características son:

    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/22.svg")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Habitaciones diferentes")
            .col-lg-7.mb-4.mb-lg-0
              p Las habitaciones deben diferenciarse de las de un hotel tradicional.  
              p por ejemplo:
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span #[strong Decoración con elementos naturales:] flores naturales de la región.  
                li.d-flex
                  i.fas.fa-check-circle(style="color:#946CB1;")
                  span #[strong Textiles tradicionales:] sobrecamas de retazos de tela o hechas a mano en crochet, preferiblemente realizadas por mujeres de la población local. 
            .col-lg-5 
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/23.png")
          .row.col-xl-11.m-auto(titulo="Atención personalizada")
            .col-lg-7.mb-4.mb-lg-0
              p La atención en estos alojamientos debe ser personalizada, con un trato familiar entre los propietarios y los turistas. 
            .col-lg-5 
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/24.png")
          .row.col-xl-11.m-auto(titulo="Narración de historias y conocimiento local")
            .col-lg-7.mb-4.mb-lg-0
              p Es fundamental que los propietarios o administradores conozcan bien la región, permitiéndoles ofrecer a los turistas excursiones, visitas, y sugerencias de lugares para comprar productos autóctonos. 
            .col-lg-5 
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/25.png")
          .row.col-xl-11.m-auto(titulo="Cuidado de jardines exteriores")
            .col-lg-7.mb-4.mb-lg-0
              p El mantenimiento de jardines exteriores es crucial para crear un ambiente agradable y acogedor. 
            .col-lg-5 
              figure.m-auto.col-9.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/26.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h3#t_2_2 2.2 Otros servicios      
    
    .cont_2_5
      .row
        .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 #[strong Dentro de los servicios se pueden identificar dos tipos:] básicos y complementarios. Los servicios básicos son aquellos imprescindibles que cubren las necesidades fundamentales de cualquier individuo; sin ellos, el turismo no sería posible. Los servicios complementarios, en cambio, dependen del grado de madurez de los destinos y no son esenciales para el turismo, pero agregan valor al destino y a la oferta turística.
        .col-lg(data-aos="fade-left")
          figure.m-auto.col-10.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/28.svg")

      p.mt-4(data-aos="fade-up") A continuación, se puede conocer la clasificación de estos servicios.

      .col-xl-11.m-auto.mt-4
        SlyderF(columnas="col-lg-4 p-4")
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/30.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Medios de Transporte.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Carreteras y vías de acceso.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Alquiler de fincas.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/31.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Básicos.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Infraestructura.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Energía.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/32.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Alojamiento.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Alquiler de fincas o casas rurales.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/33.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Complementario.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Alimentación en alojamiento rural.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/34.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Información y otros.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Oficinas de turismo con información sobre: señalización, acueducto y alcantarillado.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/36.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Alquiler de habitaciones en fincas o casas de familia (finca hoteles y granjas).
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Posadas, #[em camping], turísticas, rurales.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/37.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Restaurantes.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Estaderos.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Bares.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/38.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Centrales de reserva.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Puntos de información turística.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Guías e informadores turísticos.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Agencia de viajes.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/39.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Terminales de transportes.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Parqueaderos.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/40.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Telecomunicaciones.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Seguridad.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/41.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Hoteles rurales.
              p.mt-3.text-center
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/42.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Servicio de transporte público.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Seguridad.
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Salud.
          .tarjeta.cont_2_6.p-4
            .pb-4
              figure.text-center
                img(src="@/assets/curso/tema2/43.svg" style="max-width:100px;display:inline;")
              ul.lista-ul.d-block.mt-2.mb-0
                li.d-block.mb-0.d-flex
                  i.lista-ul__vineta
                  span Comercio, bancos, lugares de compra.

      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/14.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 Tipos de servicios turísticos
    
      p(data-aos="fade-left") En cuanto a los servicios de alimentación ofrecidos en este tipo de turismo, es muy característico y se recomienda la utilización de productos propios o de la tierra, como plantas aromáticas, miel, leche, quesos, mermeladas o dulces tradicionales, y frutas de la región.

      .row.mt-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-up")
          .h-100.d-flex.align-content-center.flex-wrap.p-4(style="background-color:#EED7FE;border-radius:14px;")
            p.mb-0 Un aspecto clave para fomentar la gastronomía local es la elaboración y edición de libros de recetas, la organización de cursos de cocina tradicional, y la realización de exposiciones, ferias, y jornadas gastronómicas en los establecimientos de la región. Estas actividades no solo preservan y difunden las tradiciones culinarias, sino que también atraen a turistas interesados en la cultura local.
        .col-lg-7
          .row  
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-12
                img(src="@/assets/curso/tema2/44.svg")
            .col-md(data-aos="fade-up")
              figure.mb-3
                img(src="@/assets/curso/tema2/45.svg" style="max-width:70px;")
              p.mb-0 Las rutas alimentarias son recorridos turísticos diseñados para promocionar y valorizar los alimentos regionales como parte del patrimonio cultural. Estos alimentos son productos representativos de cada tierra y clima, que expresan las tradiciones y culturas de los pueblos.
    
    p.mt-4(data-aos="fade-right") Los objetivos son:

    .cont_2_7.mt-4
      .col-xl-10.m-auto
        .row
          .col-lg-8
            .row.justify-content-center
              .col-md.mb-4.mb-md-0
                .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip2 = false" data-aos="zoom-in")
                  .indicador--hover(v-if="indicadorTarjetaFlip2")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.d-flex(:style="{'background-image': `url(${require('@/assets/curso/tema2/47.png')})`}")
                      h5.m-auto.p-3.text-center(style="max-width:fit-content;background-color:#E9BD68;") Promoción de #[br] alimentos tradicionales
                    .tarjeta-flip__contenido.p-4.p-xl-5.cont_flip_contenido
                      h5.mt-5.mb-4 Promoción de alimentos tradicionales
                      p.mb-5 Posicionar los alimentos locales en el mercado turístico y valorarlos como una expresión cultural.
              .col-md.mb-4.mb-md-0
                .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip2 = false" data-aos="zoom-in")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img.d-flex(:style="{'background-image': `url(${require('@/assets/curso/tema2/49.png')})`}")
                      h5.m-auto.p-3.text-center(style="max-width:fit-content;background-color:#E9BD68;") Fomento de #[br] la identidad territorial
                    .tarjeta-flip__contenido.p-4.p-xl-5.cont_flip_contenido
                      h5.mt-5.mb-4 Fomento de la identidad territorial
                      p.mb-5 Los alimentos incluidos en las rutas deben ser aquellos con mayor arraigo y una fuerte identidad territorial.
          .col-lg-4.p-relative.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/50.png")
      
      p.mt-5(data-aos="fade-right") Algunos ejemplos son:
    
    .col-xl-10.m-auto.mt-4
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100(style="background-color:#FBF2E0;border-radius:40px 40px 20px 20px;")
            figure
              img(src="@/assets/curso/tema2/51.png")
            h5.text-white.m-auto.p-1.ps-2.pe-2(style="background-color:#8804C3;max-width:fit-content;position:relative;top:-20px;") Europa
            .p-4.p-lg-5.pb-2.pt-lg-2
              p.mb-0 Las rutas alimentarias han sido ampliamente difundidas y exitosas.
            figure.text-end.p-2.pt-0
              img(src="@/assets/curso/tema2/52.svg" style="max-width:70px;display:inline;")
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100(style="background-color:#FBF2E0;border-radius:40px 40px 20px 20px;")
            figure
              img(src="@/assets/curso/tema2/53.png")
            h5.text-white.m-auto.p-1.ps-2.pe-2(style="background-color:#8804C3;max-width:fit-content;position:relative;top:-20px;") América Latina
            .p-4.p-lg-5.pb-2.pt-lg-2
              p.mb-0 Argentina destaca como uno de los países que más ha trabajado en el desarrollo y promoción de rutas alimentarias.
            figure.text-end.p-2.pt-0
              img(src="@/assets/curso/tema2/52.svg" style="max-width:70px;display:inline;")
    
    p.mt-4(data-aos="fade-right") Estas iniciativas permiten no solo preservar y difundir el patrimonio gastronómico de una región, sino también integrar la cultura alimentaria en la experiencia turística, enriqueciendo la oferta y fortaleciendo la identidad local.
                
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/14.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 Calidad en el turismo rural
    
    p(data-aos="fade-left") La oferta de turismo rural, las actividades, los alojamientos, y los servicios deben ser caracterizados por una calidad distintiva, reflejada en sellos de garantía que aseguren la plena satisfacción del cliente.

    TabsB.color-acento-botones.mt-4
      .py-4.py-md-5(titulo="Norma ISO 9000" :icono="require('@/assets/curso/tema2/55.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            h5 Norma ISO 9000 
            p Define la calidad como la capacidad de un bien o servicio para cumplir con las especificaciones de una norma, ya sea voluntaria o regulatoria. Describe la calidad como la capacidad de un bien o servicio para satisfacer las expectativas explícitas e implícitas de un cliente. 
          .col-lg-4
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/56.png')
      .py-4.py-md-5(titulo="Percepción del cliente" :icono="require('@/assets/curso/tema2/57.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            h5 Percepción del cliente 
            p La calidad también puede ser concebida como la percepción del cliente, es decir, la diferencia entre lo que se entrega y lo que se recibe o percibe por parte del cliente. 
          .col-lg-4
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/58.png')
      .py-4.py-md-5(titulo="Medición de la calidad" :icono="require('@/assets/curso/tema2/59.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            h5 Medición de la calidad 
            p En el turismo rural, la calidad se puede medir a través de encuestas de satisfacción que evalúan si se cumplen las expectativas del cliente. Se recomienda la adopción de normas voluntarias que promuevan la asociación de empresarios para establecer sistemas de calidad adaptados. 
          .col-lg-4
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/60.png')
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/14.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[em Marketing] de turismo rural
    
    p(data-aos="fade-left") El #[em marketing] del turismo rural se sustenta en seis elementos clave: producto, precio, canales de distribución, promoción, relaciones públicas, y publicaciones.

    TabsA.color-acento-botones.mt-4
      .tarjeta.color-acento-botones.p-4(titulo="Producto" style="background-color:#E3EAE2;")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5(style="color:#12263F;") Producto
            p(style="color:#12263F;") Incluye atractivos, actividades, servicios de alojamiento y alimentación, y la calidad de la experiencia turística ofrecida.
          .col-lg-5
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/61.png")
      .tarjeta.color-acento-botones.p-4(titulo="Precio" style="background-color:#E3EAE2;")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5(style="color:#12263F;") Precio
            p(style="color:#12263F;") Estrategias clave incluyen precios diferenciales, competitivos, psicológicos, por líneas de productos, y para productos nuevos, adaptados a las características del mercado objetivo y la oferta turística. 
          .col-lg-5
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/62.png")
      .tarjeta.color-acento-botones.p-4(titulo="Canales de distribución" style="background-color:#E3EAE2;")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5(style="color:#12263F;") Canales de distribución
            p(style="color:#12263F;") Comprenden la utilización de centrales de reserva, asociaciones de turismo rural, y el aprovechamiento de la tecnología para la gestión y distribución de servicios turísticos. 
          .col-lg-5
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/63.png")
      .tarjeta.color-acento-botones.p-4(titulo="Promoción" style="background-color:#E3EAE2;")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5(style="color:#12263F;") Promoción
            p(style="color:#12263F;") Incluye diversas herramientas y estrategias como publicidad, boca a boca, relaciones públicas, promoción cooperativa, el uso de Internet, y la participación en ferias turísticas para aumentar la visibilidad y atraer a más turistas. 
          .col-lg-5
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/64.png")
      .tarjeta.color-acento-botones.p-4(titulo="Publicaciones" style="background-color:#E3EAE2;")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5(style="color:#12263F;") Publicaciones
            p(style="color:#12263F;") Herramientas de difusión como guías turísticas y de servicios, mapas, planos, rutas turísticas, folletos, publicaciones especializadas como revistas de turismo rural, y reportajes de televisión, que ayudan a informar y atraer a los visitantes potenciales al destino rural. 
          .col-lg-5
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/65.png")






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaFlip2: true,
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
