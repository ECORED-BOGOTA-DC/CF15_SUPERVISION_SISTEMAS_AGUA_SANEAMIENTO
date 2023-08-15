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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        download: 'downloads/921200_CF15_DU.pdf',
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
        'IDEAM (2006). Conductividad eléctrica por el método electrométrico en aguas.',
      tipo: 'Ensayo laboratorio',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Conductividad+El%C3%A9ctrica.pdf/f25e2275-39b2-4381-8a35-97c23d7e8af4',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'IDEAM. (2007). Turbiedad por nefelometría en el equipo turbiquant 3000 T.',
      tipo: 'Ensayo laboratorio',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Turbiedad+por+Nefelometr%C3%ADa..pdf/fc92342e-8bba-4098-9310-56461c6a6dbc',
    },
    {
      tema: 'Análisis físico químico',
      referencia:
        'IDEAM. (2007). Sulfatos en agua por el método nefelométrico.',
      tipo: 'Ensayo laboratorio',
      link:
        'http://www.ideam.gov.co/documents/14691/38155/Sulfato+en+agua+por+Nefelometr%C3%ADa.pdf/f65867a2-079f-420c-9067-b1c4c3139e89',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Rótulo de reactivos.',
      tipo: 'Documento',
      link:
        'https://drive.google.com/file/d/12O67cTVrygyM8RtXHImN0rIsI6qV7zuQ/view',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2006).  Estandarización de métodos analíticos.',
      tipo: 'Documento',
      link:
        'http://www.ideam.gov.co/documents/14691/38152/Estandarizacion_metodos_analaticos.pdf/934bd941-dd47-4501-8507-d2721ef4f316',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Control de preparación de soluciones.',
      tipo: 'Documento',
      link:
        'https://drive.google.com/file/d/14BdfuIj99zq5gZL_BJ9kGi6vXszS2ao9/view?usp=sharing',
    },
    {
      tema: 'Protocolo de laboratorio',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Formato captura de datos en campo para agua superficial para aforo y toma de muestras de agua residual industrial.',
      tipo: 'Documento',
      link:
        'https://ecored-bogota-dc.github.io/CF15_SUPERVISION_SISTEMAS_AGUA_SANEAMIENTO/downloads/anexos/FORMATO_CAPTURA_DATOS_EN_CAMPO_AFORO_Y_TOMA_MUESTRAS%20AGUA_RESIDUAL_INDUSTRIAL.doc',
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
      termino: 'Análisis básicos',
      significado:
        'es el procedimiento que se efectúa para determinar turbiedad, color aparente, pH, cloro residual libre o residual de desinfectante usado, coliformes totales y <i>Escherichia coli</i>. Resolución 2115 (2007)',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas. Resolución 2115 (2007)',
    },
    {
      termino: 'Análisis microbiológico del agua',
      significado:
        'son los procedimientos de laboratorio que se efectúan a una muestra de agua para consumo humano para evaluar la presencia o ausencia, tipo y cantidad de microorganismos. Resolución 2115 (2007)',
    },
    {
      termino: 'Bacteria',
      significado:
        'grupo de organismos microscópicos unicelulares, rígidos carentes de clorofila, que desempeñan una serie de procesos de tratamiento que incluyen oxidación biológica, fermentaciones, digestión, nitrificación y desnitrificación. Resolución 1096 (2000)',
    },
    {
      termino: 'Calidad del agua',
      significado:
        'es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua, con el contenido de las normas que regulan la materia. Decreto 1575 (2007)',
    },
    {
      termino: 'Coliformes',
      significado:
        'bacterias Gram Negativas en forma bacilar que fermentan la lactosa a temperatura de 35 a 37ºC, produciendo ácido y gas (CO2) en un plazo de 24 a 48 horas. Se clasifican como aerobias o anaerobias facultativas, son oxidasa negativa, no forman esporas y presentan actividad enzimática de la β galactosidasa. Es un indicador de contaminación microbiológica del agua para consumo humano. Resolución 2115 (2007)',
    },
    {
      termino: 'Concentración',
      significado:
        'es la concentración de una sustancia, elemento o compuesto en un líquido, la  relación  existente entre su peso y el volumen del líquido que lo contiene. Resolución 1096 (2000)',
    },
    {
      termino: 'Ensayo de jarras',
      significado:
        'ensayo de laboratorio que simula las condiciones en que se realizan los procesos de oxidación química, coagulación, floculación y sedimentación en la planta. Resolución 1096 (2000)',
    },
    {
      termino: '<i>Escherichia coli (E -coli)</i>',
      significado:
        'bacilo aerobio Gram Negativo no esporulado que se caracteriza por tener enzimas específicas como la β galactosidasa y β glucoronidasa. Es el indicador microbiológico preciso de contaminación fecal en el agua para consumo humano. Resolución 2115 (2007)',
    },
    {
      termino: 'Laboratorio de análisis del agua para consumo humano',
      significado:
        'es el establecimiento público o privado, donde se realizan los procedimientos de análisis de las características físicas, químicas y microbiológicas del agua para consumo humano, el cual debe cumplir con los requisitos previstos en el presente decreto. Decreto 1575 (2007)',
    },
    {
      termino: 'pH óptimo',
      significado:
        'valor de pH que produce la máxima eficiencia en un proceso determinado. Resolución 1096 (2000)',
    },
    {
      termino: 'Valor aceptable',
      significado:
        'es el establecido para la concentración de un componente o sustancia, que garantiza que el agua para consumo humano no representa riesgos conocidos a la salud. Resolución 2115 (2007)',
    },
  ],
  referencias: [
    {
      referencia:
        'Cogollo, J. (2011). Clarificación de aguas usando coagulantes polimerizados: caso del hidroxicloruro de aluminio. Dyna. Vol. 78. Núm. 165. Universidad Nacional de Colombia. Medellín, Colombia.',
      link: '',
    },
    {
      referencia:
        'Comisión Estatal del Agua de Jalisco (CEA Jalisco). (2013). Operación y mantenimiento de Plantas de Tratamiento de Aguas Residuales con el proceso de lodos activados.',
      link:
        'https://www.aguasresiduales.info/revista/libros/operacion-y-mantenimiento-de-plantas-de-tratamiento-de-aguas-residuales-con-el-proceso-de-lodos-activados-tomo-i',
    },
    {
      referencia:
        'Deloya Martínez, A. (2006). Métodos de análisis físicos y espectrofotométricos para el análisis de aguas residuales Tecnología en Marcha. Vol. 19-2. ',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2006). Conductividad eléctrica por el método electrométrico en aguas.',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Control de preparación de soluciones.',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2004). Determinación de oxígeno disuelto por el método yodométrico modificación de azida.',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2007). Dureza Total en Agua con EDTA por Volumetría.   ',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2006).  Estandarización de métodos analíticos.',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). (2018). Formato captura de datos en campo para agua superficial para aforo y toma de muestras de agua residual industrial.',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM). 2018. Instructivo de ensayo. Determinación de turbidez por nefelometría. SM 2130B.   ',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2019). Boletín de Vigilancia de la Calidad del Agua para Consumo Humano. Despacho Dirección Redes en Salud Pública.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2015). Lineamiento para la implementación de la resolución 1619 de 2015 del Ministerio de salud y protección social.',
      link: '',
    },
    {
      referencia:
        'Marcó, L., Azario, R., Metzler, C y Garcia, M. (2004). La turbidez como indicador básico de calidad de aguas potabilizadoras a partir de fuentes superficiales. Hig. Sanid. Ambiente. ',
      link: '',
    },
    {
      referencia:
        'Martínez, M. y Osorio, A. (2018). Validación de un método para el análisis de color real en agua. Revista Facultad de Ciencias, 7(1) ,143-155. DOI.',
      link: '',
    },
    {
      referencia:
        'McFarland, M. y Dozier, M. (s.f.) Problemas del agua potable: El hierro y el manganeso.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2015). Orientaciones para la construcción en los establecimientos educativos del manual de normas de seguridad en el laboratorio de química y de física.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Manual de verificación de estándares de calidad en salud pública para laboratorios de análisis de agua para consumo humano, estanques de piscina, estructuras similares y superficie de piscina.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social e Instituto Nacional de Salud (INS). (2016). Grupo Salud Ambiental. Calidad de Agua. Enfermedades Vehiculizadas por Agua e Índice de Riesgo de la Calidad del Agua en Colombia Bogotá D.C. ISBN: 978-958-13-0174-4:1.',
      link: '',
    },
    {
      referencia:
        'Orellana, J. (2005). Características del agua potable. Unidad Temática N.º 3. Ingeniería Sanitaria- UTN - FRRO. ',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2020). Fichas internacionales de seguridad química.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud - OPS y Centro Panamericano de Ingeniería Sanitaria y Ciencias del Ambiente - Cepis. (2002). <i>Operación y mantenimiento de plantas de tratamiento de agua. Manual de capacitación de operadores.</i> OPS y Cepis.',
      link: '',
    },
    {
      referencia:
        'Pérez, J. (1997). Ensayo modificado de jarras para la selección de parámetros de diseño de floculación y sedimentación. Avances en recursos hidráulicos. Número 4.',
      link: '',
    },
    {
      referencia:
        'Reutelshöfer, T. (2015). Guía de operación y mantenimiento de lagunas de oxidación en plantas de tratamiento de aguas residuales.',
      link: '',
    },
    {
      referencia:
        'Resolución 2115 de junio de 2007. [Ministerio de la Protección Social y Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Bogotá. Colombia.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, C. 2008. Uso y control del proceso de coagulación en plantas de tratamiento de agua potable.',
      link: '',
    },
    {
      referencia:
        'Rodriguez, J. (2009). Parámetros fisicoquímicos de dureza total  en calcio y magnesio, pH, conductividad  y temperatura del agua potable analizados en conjunto con las  Asociaciones Administradoras del Acueducto (Asadas), de cada distrito de Grecia, cantón de  Alajuela.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2011). Práctica de laboratorio determinación de nitratos. Centro de Gestión Industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2014). Práctica de laboratorio determinación de nitritos. Centro de Gestión Industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2014). Práctica de laboratorio determinación de sólidos suspendidos totales, volátiles y fijos. Centro de Gestión Industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2014). Práctica de laboratorio determinación de potenciometría. Centro de Gestión Industrial (CGI).',
      link: '',
    },
    {
      referencia:
        'Solís-Castro, Y; Zúñiga-Zúñiga, L; Mora-Alvarado, D. (s.f.) La conductividad como parámetro predictivo de la dureza del agua en pozos y nacientes de Costa Rica. Tecnología en Marcha. Vol. 31-1. Enero-marzo 2018.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Centro de gestión industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor Ambiental',
          centro: 'Centro de gestión industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cardenas',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de diseño y meteorología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia  Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gloria Lida Alzáte Suarez',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
