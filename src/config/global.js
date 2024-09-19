export default {
  global: {
    componenteFormativo: 'Oferta y demanda del turismo rural',
    descripcionCurso:
      'Este componente formativo aborda el turismo rural, destacando la importancia de identificar las posibilidades y recursos de una región para su desarrollo. Se analizan las características de la demanda, motivaciones turísticas, actividades, alojamientos rurales y servicios, promoviendo la interacción con la naturaleza y la cultura local. La calidad y la comercialización también son aspectos clave del turismo rural. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Características de la demanda del turismo rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La motivación turística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Recursos y atractivos turísticos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Las actividades turísticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Actividades en el espacio rural',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Otros servicios',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Características de la demanda del turismo rural ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Demanda turística.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZrbFFS2ustA  ',
    },
    {
      tema: 'La motivación turística ',
      referencia:
        '<em>Welcome to</em> el Mundo. (2023). Guía Definitiva para viajar por COLOMBIA 🌴 Presupuesto, Qué visitar y más!.  [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2yMhjHURW5A  ',
    },
    {
      tema: 'Recursos y atractivos turísticos ',
      referencia:
        'Bluecinante. (2020). G¿Qué es un RECURSO TURÍSTICO? ¿Qué TIPOS existen?  [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=j2OgWK-67TI  ',
    },
    {
      tema: 'Las actividades turísticas ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023) Características de actividades turísticas.  [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qx4_okMBCMM  ',
    },
  ],
  glosario: [
    {
      termino: 'Alojamiento',
      significado:
        'lugar donde los turistas se hospedan durante su estancia en un destino. ',
    },
    {
      termino: 'Atractivos',
      significado:
        'elementos naturales, culturales o sociales que motivan la visita de turistas. ',
    },
    {
      termino: 'Calidad',
      significado:
        'grado de satisfacción del cliente con los servicios y productos ofrecidos. ',
    },
    {
      termino: 'Comercialización',
      significado:
        'proceso de distribución y venta de productos turísticos al mercado. ',
    },
    {
      termino: 'Demanda',
      significado:
        'la necesidad o deseo de los consumidores por un producto o servicio turístico. ',
    },
    {
      termino: 'Motivación',
      significado:
        'razones o incentivos que impulsan a las personas a viajar. ',
    },
    {
      termino: 'Norma ISO 9000',
      significado:
        'estándar internacional que define criterios de calidad para productos y servicios. ',
    },
    {
      termino: 'Promoción',
      significado:
        'estrategias utilizadas para dar a conocer y atraer clientes hacia un producto turístico. ',
    },
    {
      termino: 'Segmentación',
      significado:
        'división del mercado en grupos más específicos con características similares. ',
    },
    {
      termino: 'Turismo rural',
      significado:
        'actividad turística que se desarrolla en espacios rurales, enfocada en la naturaleza y la cultura local. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Acuña, A. (1991). <em>Manual Didáctico de Actividades de Naturaleza</em>. Sevilla: Editorial Wanceulen.',
      link: '',
    },
    {
      referencia:
        'Bote, V. (1992). <em>Turismo en Espacio Rural. Rehabilitación del patrimonio sociocultural y de la economía local</em>. 2ª edición. Madrid: Editorial Popular. ',
      link: '',
    },
    {
      referencia:
        'García, B. (2003). <em>Marketing de Turismo rural</em>. Madrid: Ediciones Pirámide. ',
      link: '',
    },
    {
      referencia:
        'García, S. & Restrepo, T. (2004). <em>Técnico Apuntes sobre Turismo</em>. Medellín: Comfenalco. Corantioquia. ',
      link: '',
    },
    {
      referencia:
        'Greciet, P. et al. (1994). <em>Turismo rural</em>. Ministerio de Agricultura, Pesca y Alimentación. Madrid. ',
      link: '',
    },
    {
      referencia:
        'Restrepo, T. (2004). <em>La gestión local del turismo en el corredor turístico de La Fé-Guatapé, Oriente Antioqueño</em>. SENA Regional Antioquia-Chocó. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Julio Hernán Beltrán Peñuela ',
          cargo: 'Experto temático  ',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres ',
          cargo: 'Diseñador de contenidos digitales s',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
