export default {
  global: {
    Name: 'Estrategia experiencial',
    Description:
      'Este componente aborda los elementos estratégicos del <em>marketing</em> experiencial, incluyendo proveedores de experiencia, matriz experiencial, dominios de experiencia, <em>storytelling</em> e indicadores de gestión, permitiendo al aprendiz diseñar, implementar y evaluar experiencias coherentes que influyen en la percepción, el comportamiento y la relación del consumidor con la marca en diferentes contextos organizacionales.',
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
        titulo: 'Proveedores de experiencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Comunicación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Identidad de marca',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Producto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Empleados',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Entorno digital',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '<em>Cobranding</em>',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Punto de venta',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Matriz experiencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Dominios de experiencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Dimensiones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aplicaciones',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Storytelling</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Características',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Elementos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Indicadores de gestión de mercadeo en el <em>marketing</em> experiencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Objetivos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Clases',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Interpretación',
            hash: 't_5_4',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63110199_CF02_DU.zip',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<em>Cobranding</em>',
      significado:
        'Estrategia de colaboración entre dos o más marcas para desarrollar una propuesta de valor o una experiencia conjunta para el consumidor.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso mediante el cual la marca transmite mensajes para informar, interactuar y fortalecer la relación con el consumidor.',
    },
    {
      termino: 'Conexión emocional',
      significado:
        'Vínculo afectivo que desarrolla el consumidor con una marca a partir de experiencias significativas y memorables.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Persona que adquiere o utiliza un producto o servicio y vive la experiencia propuesta por una marca.',
    },
    {
      termino: 'Dominios de experiencia',
      significado:
        'Dimensiones que explican cómo el consumidor participa, interpreta y vive la experiencia ofrecida por una marca.',
    },
    {
      termino: 'Empleados',
      significado:
        'Colaboradores que representan a la organización y contribuyen directamente a la construcción de experiencias positivas para el cliente.',
    },
    {
      termino: 'Entorno digital',
      significado:
        'Espacio virtual donde las organizaciones interactúan con los consumidores mediante plataformas y herramientas tecnológicas.',
    },
    {
      termino: 'Estimulación sensorial',
      significado:
        'Aplicación de estímulos visuales, auditivos, táctiles, olfativos o gustativos para enriquecer la experiencia del consumidor.',
    },
    {
      termino: 'Experiencia de cliente',
      significado:
        'Conjunto de percepciones, emociones e interacciones que experimenta el consumidor durante su relación con una marca.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Estrategia orientada a fortalecer la permanencia y preferencia del cliente mediante experiencias satisfactorias y de valor.',
    },
    {
      termino: 'Identidad de marca',
      significado:
        'Conjunto de elementos visuales, conceptuales y comunicativos que diferencian y representan una organización.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'Medida utilizada para evaluar el desempeño y los resultados de las estrategias implementadas.',
    },
    {
      termino: 'Inmersión',
      significado:
        'Nivel de involucramiento del consumidor en una experiencia, caracterizado por una participación profunda y significativa.',
    },
    {
      termino: 'Interacción',
      significado:
        'Relación que se establece entre el consumidor y la marca a través de diferentes canales y puntos de contacto.',
    },
    {
      termino: '<em>Marketing</em> experiencial',
      significado:
        'Estrategia de <em>marketing</em> orientada a diseñar experiencias memorables que fortalezcan la relación entre el consumidor y la marca.',
    },
    {
      termino: '<em>Marketing</em> sensorial',
      significado:
        'Estrategia que utiliza estímulos dirigidos a los sentidos para influir en la percepción y la experiencia del consumidor.',
    },
    {
      termino: 'Matriz experiencial',
      significado:
        'Herramienta que organiza y analiza los elementos que intervienen en la construcción de la experiencia del cliente.',
    },
    {
      termino: 'Narrativa de marca',
      significado:
        'Historia estructurada que comunica la identidad, los valores y el propósito de una organización para fortalecer la relación con el consumidor.',
    },
    {
      termino: 'Participación',
      significado:
        'Nivel de involucramiento del consumidor durante las experiencias propuestas por una organización.',
    },
    {
      termino: 'Percepción',
      significado:
        'Interpretación que realiza el consumidor sobre una marca a partir de las experiencias vividas.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Lugar que ocupa una marca en la mente del consumidor frente a sus competidores.',
    },
    {
      termino: 'Producto',
      significado:
        'Bien o servicio que satisface una necesidad y contribuye a generar experiencias de valor para el cliente.',
    },
    {
      termino: 'Proveedor de experiencia',
      significado:
        'Elemento estratégico que influye en el diseño, desarrollo y comunicación de experiencias para el consumidor.',
    },
    {
      termino: 'Punto de contacto',
      significado:
        'Momento, canal o espacio donde el consumidor interactúa con la marca durante su recorrido como cliente.',
    },
    {
      termino: '<em>Storytelling</em>',
      significado:
        'Técnica de comunicación que utiliza historias para transmitir mensajes, generar emociones y fortalecer la conexión con la marca.',
    },
    {
      termino: 'Valor percibido',
      significado:
        'Evaluación que realiza el consumidor sobre los beneficios recibidos en relación con sus expectativas y experiencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Sigüenza, J. F. (2024). <em>Los segmentos del marketing: análisis, definición y tipos</em>. RAE-IC, Revista de la Asociación Española de Investigación de la Comunicación, 11(21).',
      link:
        'https://rodin.uca.es/bitstream/handle/10498/31668/Segmentacio_n%20de%20mercado.pdf?sequence=4',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). <em>Segmentación, mercado meta y posicionamiento</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Niño Sierra, D. F. (s.f.). <em>Fidelización del cliente</em>. Fundación Universitaria de la Cámara de Comercio de Bogotá UNIEMPRESARIAL.',
      link:
        'https://bibliotecadigital.ccb.org.co/server/api/core/bitstreams/a4b5d64d-a649-4170-8d61-6b8b400e6dbd/content',
    },
    {
      referencia:
        'Solomon, M. R. (2018). <em>Comportamiento del consumidor: Comprando, poseyendo y siendo</em> (12ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México. (2020). <em>El entorno del marketing</em>. UNAM.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Rios ',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico   ',
        },
        {
          nombre: 'María Fernanda Morales Angulo ',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico   ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero ',
          cargo: 'Diseñador de contenidos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Nelson Iván Vera Briceño ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda  ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Jonathan Adié Villafañe ',
          cargo: 'Validador y vinculador de recursos educativos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz ',
          cargo: 'Validador y vinculador de recursos educativos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
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
}
