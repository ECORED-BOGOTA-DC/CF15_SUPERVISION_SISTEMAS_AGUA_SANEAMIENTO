export default {
  global: {
    componenteFormativo: 'Análisis e interpretación de muestras',
    descripcionCurso:
      'La aplicación de protocolos para el análisis a las muestras de agua, de acuerdo con los procedimientos técnicos y la normativa vigente, permite generar resultados y datos que podrán ser procesados e interpretados para el control sobre los procesos, con el fin de dar cumplimiento a la legislación vigente y garantizar el suministro de agua en condiciones de calidad. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Relación de la calidad del agua y la salud de la población',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Protocolo del laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de calidad en un laboratorio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Pautas de seguridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Instrumentación básica para análisis de agua',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Fichas internacionales de seguridad química',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Sustancias químicas usadas en los procesos de tratamiento del agua',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Estandarización de las soluciones',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis físico químico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características fisicoquímicas del agua',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ensayo de jarras',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Métodos estandarizados para parámetros físicos, químicos y microbiológicos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Preparación de muestras, procedimientos y mediciones',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Curva de calibración',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis microbiológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de microorganismos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Técnicas de esterilización de vidriería, ambiente y equipos de laboratorio microbiológico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Preparación de medios de cultivo para análisis microbiológico de aguas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Técnicas y protocolos de análisis microbiológico de aguas',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Reportes y resultados de la calidad del agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Reglamento técnico del sector de agua potable y saneamiento básico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Normativa: calidad del agua para consumo humano.',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Indicadores de calidad del agua e interpretación de resultados',
            hash: 't_5_3',
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
      tema: 'Análisis físico químico',
      referencia:
        'Ideam (2006). Conductividad eléctrica por el método electrométrico en aguas.',
      tipo: 'Ensayo laboratorio',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Conductividad+El%C3%A9ctrica.pdf/f25e2275-39b2-4381-8a35-97c23d7e8af4',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Ideam. (2007). Turbiedad por nefelometría en el equipo turbiquant 3000 T.',
      tipo: 'Ensayo laboratorio',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Turbiedad+por+Nefelometr%C3%ADa..pdf/fc92342e-8bba-4098-9310-56461c6a6dbc',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Ideam. (2007). Sulfatos en agua por el método nefelométrico.',
      tipo: 'Ensayo laboratorio',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Sulfato+en+agua+por+Nefelometr%C3%ADa.pdf/f65867a2-079f-420c-9067-b1c4c3139e89',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam). (2018). Rótulo de reactivos.',
      tipo: 'Documento',
      link:
        'https://drive.google.com/file/d/12O67cTVrygyM8RtXHImN0rIsI6qV7zuQ/view?usp=sharing',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam). (2006).  Estandarización de métodos analíticos.',
      tipo: 'Documento',
      link:
        'http://www.ideam.gov.co/documents/14691/38152/Estandarizacion_metodos_analaticos.pdf/934bd941-dd47-4501-8507-d2721ef4f316',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam). (2018). Control de preparación de soluciones.',
      tipo: 'Documento',
      link:
        'https://drive.google.com/file/d/14BdfuIj99zq5gZL_BJ9kGi6vXszS2ao9/view?usp=sharing',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam). (2018). Formato captura de datos en campo para agua superficial para aforo y toma de muestras de agua residual industrial.',
      tipo: 'Documento',
      link:
        'http://sgi.ideam.gov.co/ca/servicios-laboratorio-aeronautica-pronosticos-y-redes',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Organización Mundial de la Salud (OMS). (2020). Fichas internacionales de seguridad química.',
      tipo: 'Ficha',
      link:
        'https://www.who.int/ipcs/publications/icsc/icsc_leaflet_es.pdf?ua=1',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2014. Práctica de laboratorio determinación de sólidos suspendidos totales, volátiles y fijos. Centro de Gestión Industrial (CGI).',
      tipo: 'Ensayo laboratorio',
      link:
        'https://drive.google.com/file/d/18EadN71JFWz8vd3KHqWR_mF8IdFOkGfE/view?usp=sharing',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2014. Práctica de laboratorio determinación de nitritos. Centro de Gestión Industrial (CGI).',
      tipo: 'Ensayo laboratorio',
      link:
        'https://drive.google.com/file/d/15dNUmPHPqmRSRxdkPZ9W1n0V-gaSY_39/view?usp=sharing',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2011. Práctica de laboratorio determinación de nitratos. Centro de Gestión Industrial (CGI).',
      tipo: 'Ensayo laboratorio',
      link:
        'https://drive.google.com/file/d/1BoBDJxD1MBPsquMj7gWUCTmT77wF94Vb/view?usp=sharing',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2017. Práctica de laboratorio determinación de cloruros en agua. Centro de Gestión Industrial (CGI).',
      tipo: 'Ensayo laboratorio',
      link:
        'https://drive.google.com/file/d/1qk-_OURUo9lDzX6Br4-JX39t9eyHqjzL/view?usp=sharing',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). 2014. Práctica de laboratorio Determinación de potenciometría. Centro de Gestión Industrial (CGI).',
      tipo: 'Ensayo laboratorio',
      link:
        'https://drive.google.com/file/d/1_jo-LA2wCLChdpwvcJrrnhdMYQ-XUT13/view?usp=sharing',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: '<em>Término con extranjerismo</em>',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
