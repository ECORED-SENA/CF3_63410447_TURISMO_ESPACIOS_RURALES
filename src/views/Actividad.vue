<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Explorando el turismo rural .',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar  los conceptos clave del turismo rural, incluyendo las características de la demanda, la oferta turística, las actividades, el alojamiento y las estrategias de marketing. ',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el perfil general de los turistas rurales? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Profesionales de entre 25 y 45 años que buscan tranquilidad y autenticidad. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Personas mayores de 60 años que buscan turismo cultural. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Jóvenes estudiantes interesados en deportes extremos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Familias con niños pequeños que buscan parques temáticos. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué buscan principalmente los turistas rurales? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Tranquilidad, contacto con la naturaleza y autenticidad. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Experiencias de lujo y sofisticación. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actividades nocturnas y entretenimiento urbano. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acceso a tecnología de punta y centros comerciales. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué elementos componen la oferta de turismo rural? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Atractivos culturales, transporte público, y tiendas de lujo. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Atractivos, actividades y servicios como alojamiento y alimentación. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo servicios de alojamiento y actividades deportivas. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente atractivos culturales y naturales. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una característica clave de los alojamientos rurales? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Arquitectura tradicional y diseño interior que refleja la cultura local. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Edificios modernos y minimalistas. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hoteles urbanos de gran altura. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centros comerciales integrados. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué es lo más importante para garantizar la calidad en el turismo rural? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cumplir con normas de calidad y asegurar la satisfacción del cliente. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ofrecer precios bajos sin considerar la experiencia del cliente. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Construir grandes infraestructuras turísticas. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promover exclusivamente productos locales. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una estrategia efectiva de comercialización en turismo rural? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar canales de distribución, promoción, y relaciones públicas. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Depender únicamente del boca a boca. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ofrecer solo folletos informativos en las ciudades. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de tecnología y redes sociales. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué tipo de actividades se fomentan en el turismo rural? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo actividades deportivas extremas. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actividades respetuosas con el medio ambiente y vinculadas al entorno natural y cultural. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente visitas a centros comerciales. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Actividades nocturnas y fiestas masivas. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes no es un tipo de servicio en el turismo rural? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Servicios básicos. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Servicios complementarios. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servicios de entretenimiento nocturno urbano. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Servicios de alimentación local. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de turistas tienden a utilizar alojamientos rurales comerciales? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aquellos que no tienen vínculos previos con el espacio rural. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Personas que poseen fincas en la región. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Familias que visitan parques temáticos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Turistas que buscan grandes cadenas hoteleras. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué ventaja ofrece el turismo rural en términos de alojamiento? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Construcción de nuevos hoteles modernos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reutilización o reciclaje de viviendas con valor histórico o cultural. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo de hoteles de lujo. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusiva oferta de alojamiento en la ciudad. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
