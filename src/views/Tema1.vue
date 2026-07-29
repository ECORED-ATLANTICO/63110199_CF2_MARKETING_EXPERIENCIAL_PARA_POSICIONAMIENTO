<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Proveedores de experiencia
    
    .bg-full-width.bg-fondo-interno
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8 
            p Los proveedores de experiencia representan los elementos estratégicos mediante los cuales las marcas diseñan, comunican y ejecutan experiencias significativas para el consumidor. 
            .tarjeta.bg-fondo-6.h-100.p-4
              p.mb-0 Este capítulo permite comprender cómo diferentes factores influyen en la construcción de dichas experiencias, su desarrollo se abordará desde una perspectiva aplicada, analizando cada proveedor y su impacto en la percepción del cliente, mediante ejemplos empresariales que evidencian su relevancia en el <em>marketing</em> experiencial actual.
        
        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Comunicación
        
        p La comunicación en el <em>marketing</em> experiencial constituye un proveedor fundamental para la construcción de experiencias, ya que permite transmitir mensajes que influyen en la percepción del consumidor, a diferencia del enfoque tradicional, la comunicación no se limita a informar, sino que busca generar interacción y conexión emocional, utilizando distintos canales y formatos que potencien la experiencia de marca.

        .row.justify-content-center.align-items-center.mb-3
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-9
            .bg-fondo-7.tarjeta.px-5.py-4
              p.mb-0 La comunicación debe ser coherente con la identidad de la marca y adaptarse a los diferentes puntos de contacto del cliente, esto implica integrar mensajes en medios físicos y digitales, garantizando consistencia en el tono, el contenido y la intención comunicativa, una comunicación efectiva no solo informa, sino que también construye significado y fortalece la relación con el consumidor.
    

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-fondo-3.tarjeta.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0.order-lg-2
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/2.png", data-aos="zoom-in")
            .col-lg.order-lg-1.p-4.p-xl-0
              p.mb-0(data-aos="fade-right") <b>Ejemplo aplicado</b>. Nike utiliza campañas que no solo promocionan productos, sino que comunican valores como superación y motivación, generando experiencias que trascienden lo funcional. Esto demuestra que la comunicación, cuando se diseña estratégicamente, se convierte en un elemento clave para influir en el comportamiento del consumidor y en su conexión con la marca.
    
    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h3.mb-0.pe-4.ps-2 Rol de la comunicación en el <em>marketing</em> experiencial
    
    img(src="@/assets/curso/tema1/3.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La comunicación es el eje que conecta a la marca con el consumidor y da sentido a cada experiencia. A través de mensajes claros, coherentes y orientados al cliente, favorece la construcción de relaciones duraderas y fortalece el valor de la marca. La comunicación transforma cada interacción en una oportunidad para generar experiencias significativas.
    
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Comunicación informativa")
            p La comunicación informativa transmite de forma clara los atributos, beneficios y características de los productos o servicios. Su propósito es brindar información relevante que facilite la comprensión de la propuesta de valor y apoye la toma de decisiones del consumidor.
            .row.justify-content-center.align-items-center
              .col-lg-9.mb-3.mb-lg-0
                h5 Elementos clave
                .row
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Calidad.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Diseño.
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Funcionalidad.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Beneficios.
                h5 Idea clave
                p.mb-0 Una comunicación clara y oportuna facilita decisiones de compra fundamentadas.
              .col-md-6.col-lg-3
                figure
                  img(src="@/assets/curso/tema1/4.png")
          div(titulo="Comunicación emocional")
            p La comunicación emocional crea vínculos afectivos entre la marca y el consumidor mediante mensajes que despiertan emociones, reflejan valores y generan experiencias memorables. Esta conexión fortalece la recordación, la confianza y la fidelización.
            .row.justify-content-center.align-items-center
              .col-lg-9.order-lg-2.mb-3.mb-lg-0
                h5 Elementos clave
                .row
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Conexión emocional.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Identificación con la marca.
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Recordación.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Fidelización.
                h5 Idea clave
                p.mb-0 Las emociones fortalecen el vínculo entre la marca y el consumidor y favorecen relaciones duraderas.
              .col-md-6.col-lg-3.order-lg-1
                figure
                  img(src="@/assets/curso/tema1/5.png")
          div(titulo="Comunicación interactiva")
            p La comunicación interactiva promueve la participación del consumidor mediante espacios de diálogo e intercambio. La interacción fortalece el compromiso del cliente, permite conocer sus necesidades y lo convierte en un participante activo de la experiencia de marca.
            .row.justify-content-center.align-items-center
              .col-lg-9.mb-3.mb-lg-0
                h5 Elementos clave
                .row
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Participación.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Diálogo.
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Retroalimentación.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Interacción.
                h5 Idea clave
                p.mb-0 La participación activa del consumidor enriquece la experiencia y fortalece la relación con la marca.
              .col-md-6.col-lg-3
                figure
                  img(src="@/assets/curso/tema1/6.png")
          div(titulo="Comunicación estratégica")
            p La comunicación estratégica asegura la coherencia entre los mensajes, los canales y la experiencia que ofrece la marca. Esta alineación fortalece la identidad corporativa, genera confianza y contribuye al posicionamiento de la organización.
            .row.justify-content-center.align-items-center
              .col-lg-9.order-lg-2.mb-3.mb-lg-0
                h5 Elementos clave
                .row
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Mensaje coherente.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Canales integrados.
                  .col-lg-6
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Experiencia consistente.
                      li.mb-3.d-flex
                        i.fas.fa-caret-right.bg-color-5
                        | Valor para el cliente.
                h5 Idea clave
                p.mb-0 La coherencia en la comunicación fortalece la identidad de la marca y genera confianza en el consumidor.
              .col-md-6.col-lg-3.order-lg-1
                figure
                  img(src="@/assets/curso/tema1/7.png")
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Identidad de marca
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8 
        p La identidad de marca representa el conjunto de elementos visuales, simbólicos y conceptuales que definen cómo una organización desea ser percibida por el consumidor. En el <em>marketing</em> experiencial, la identidad no solo se comunica, sino que se vive a través de cada interacción, convirtiéndose en un proveedor clave de la experiencia.
        .tarjeta.bg-fondo-6.h-100.p-4
          p.mb-0 La identidad de marca debe mantenerse coherente en todos los puntos de contacto, asegurando que los valores, el estilo y el mensaje sean consistentes, esta coherencia permite que el consumidor reconozca la marca y construya una percepción clara, lo cual es fundamental para generar confianza y diferenciación en el mercado.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-fondo-3.tarjeta.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0.order-lg-2
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/2.png", data-aos="zoom-in")
            .col-lg.order-lg-1.p-4.p-xl-0
              p.mb-0(data-aos="fade-right") <b>Ejemplo aplicado</b>. Apple, cuya identidad minimalista y enfocada en la innovación se refleja en sus productos, tiendas y comunicación, esta coherencia permite que la experiencia del cliente sea consistente, fortaleciendo el posicionamiento de la marca y generando una conexión emocional duradera.
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Componentes de la identidad de marca
        .tabla-a.color-acento-contenido.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-6
                th Elemento
                th Descripción
                th Ejemplo aplicado
            tbody
              tr.bg-color-sintesis
                td.text-bold Visual
                td Conjunto de elementos gráficos como colores, logotipo y diseño que permiten identificar la marca y generar reconocimiento inmediato en el consumidor.
                td Una marca utiliza colores específicos y un logo consistente en todos sus puntos de contacto para facilitar el reconocimiento inmediato del cliente.
              tr.bg-color-white
                td.text-bold Conceptual
                td Define los valores, propósito y esencia de la marca, orientando su identidad y permitiendo construir una propuesta significativa para el consumidor.
                td Una marca sostenible comunica valores ecológicos y compromiso ambiental en todas sus acciones, reforzando su propósito ante los consumidores.
              tr.bg-color-sintesis
                td.text-bold Comunicativo
                td Hace referencia al tono, estilo y forma en que la marca se expresa, garantizando coherencia en todos los mensajes dirigidos al consumidor.
                td Una marca juvenil utiliza lenguaje cercano y dinámico en redes sociales para conectar con su público objetivo de manera efectiva.
              tr.bg-color-white
                td.text-bold Experiencial
                td Representa la forma en que el cliente vive la marca a través de interacciones, generando percepciones que influyen en su relación.
                td Una tienda ofrece atención personalizada y ambientación coherente con la marca, generando una experiencia positiva que fortalece la relación con el cliente.
    
    .row.justify-content-center
      .col-lg-10        
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Clave estratégica
              p.mb-0(data-aos="fade-right") La identidad de marca debe experimentarse en cada punto de contacto, no solo comunicarse.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Producto

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-1.px-5.py-4
              p.mb-0 El producto en el <em>marketing</em> experiencial trasciende su función básica para convertirse en un generador de experiencias significativas, no se limita a satisfacer una necesidad funcional, sino que incorpora atributos sensoriales, emocionales y simbólicos que influyen en la percepción del consumidor, de esta manera, el producto se integra como un elemento activo dentro de la experiencia de marca.
       
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              p.mb-0(data-aos="fade-right") El diseño del producto debe considerar aspectos como la estética, la usabilidad, la interacción y la capacidad de generar sensaciones positivas en el usuario, esto implica pensar el producto como parte de una experiencia integral, donde cada característica contribuye a la construcción del valor percibido y al posicionamiento de la marca en el mercado.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")

    
    .bg-fondo-5.tarjeta.px-5.py-4.mb-5
      p.mb-0 Starbucks, sus productos no solo cumplen una función de consumo, sino que están diseñados para generar una experiencia a través de su presentación, personalización y ritual de consumo, esto demuestra cómo el producto puede convertirse en un elemento diferenciador dentro del <em>marketing</em> experiencial.

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h3.mb-0.pe-4.ps-2 Rol del producto en el <em>marketing</em> experiencial
    
    .row.mb-5.justify-content-center
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Funcional
          p.text-center Satisfacer necesidades básicas del cliente mediante atributos útiles y prácticos.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Sensorial
          p.text-center Generar estímulos a los sentidos que enriquecen la experiencia del cliente.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Emocional
          p.text-center Crear conexión afectiva con el cliente a través de experiencias significativas.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.bg-color-7.p-5.h-100
          .tarjeta-numerada__numero.bg-color-8
            .h2 4
          p.text-center 
            b Simbólico
          p.text-center Representar valores y significados que fortalecen la identidad de la marca.

    .row.justify-content-center
      .col-lg-10
        .bg-fondo-3.tarjeta.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0.order-lg-2
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/3.png", data-aos="zoom-in")
            .col-lg.order-lg-1.p-4.p-xl-0
              h5 Pregunta de aplicación
              p.mb-0(data-aos="fade-right") Analice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje.
              p.mb-0 ¿Cómo puede una empresa transformar su producto en una experiencia memorable para el cliente?
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Empleados

    .row.mb-3.justify-content-center.align-items-center
      .col-md-8.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-10
        p(data-aos="fade-right") Los empleados constituyen un proveedor esencial de experiencia, ya que representan el punto de contacto directo entre la marca y el consumidor, su comportamiento, actitud y forma de interacción influyen significativamente en la percepción del cliente, convirtiéndose en un factor determinante en la calidad de la experiencia.
        p.mb-0 Es fundamental que los empleados estén alineados con los valores y la identidad de la marca, actuando como embajadores de esta, esto implica procesos de formación, cultura organizacional sólida y una comunicación interna coherente que permita transmitir la experiencia deseada al cliente en cada interacción.
    
    .bg-fondo-5.tarjeta.px-5.py-4.mb-5
      p.mb-0 Un ejemplo claro es Disney, donde los empleados están entrenados para ofrecer experiencias memorables, cuidando cada detalle en la atención al cliente, esto demuestra cómo el factor humano es clave para generar experiencias diferenciadoras y fortalecer la relación con el consumidor.

    .row.justify-content-center
      .col-lg-10        
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Clave estratégica
              p.mb-0(data-aos="fade-right") Los empleados no solo prestan un servicio, construyen la experiencia del cliente.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
    
    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Entorno digital
    
    .bloque-texto-g.color-primario.bg-color-9.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El entorno digital se ha consolidado como un proveedor clave de experiencias en el <em>marketing</em> experiencial, al permitir la interacción constante entre la marca y el consumidor a través de plataformas tecnológicas, este entorno no solo facilita el acceso a la información, sino que también posibilita la creación de experiencias dinámicas, personalizadas y participativas que influyen en la percepción del cliente.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-fondo-4.tarjeta.px-5.py-4
          p.mb-0 El entorno digital debe diseñarse considerando la usabilidad, la interactividad y la coherencia con la identidad de la marca, esto implica integrar elementos como interfaces intuitivas, contenido relevante y herramientas de personalización que permitan al usuario vivir una experiencia fluida y significativa en cada punto de contacto digital.
    
    .row.justify-content-center.mb-3
      .col-lg-10
        .tarjeta.bg-color-10.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img.d-none.d-md-block(src="@/assets/curso/common/4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-3 Concepto de entorno digital
                  p.mb-0 Lo invitamos a consultar el siguiente recurso educativo para fortalecer sus conocimientos. Éste presenta el concepto de entorno digital dentro del contexto del <em>marketing</em>.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=CwqginzSkeU " target="_blank")
                    span Ir al video
                    i.fas.fa-file-download
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-fondo-3.tarjeta.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0.order-lg-2
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/3.png", data-aos="zoom-in")
            .col-lg.order-lg-1.p-4.p-xl-0
              h5 Pregunta de aplicación
              p.mb-0(data-aos="fade-right") Analice la siguiente pregunta a partir de los conceptos estudiados y de su experiencia. Utilice este espacio como una oportunidad para reflexionar sobre su aprendizaje.
              p.mb-0 ¿Cómo puede una empresa mejorar la experiencia del cliente en entornos digitales?
    
    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 <em>Cobranding</em>
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8 
        p El <em>cobranding</em> es una estrategia mediante la cual dos o más marcas se asocian para crear una experiencia conjunta que potencie el valor percibido por el consumidor, en el <em>marketing</em> experiencial, esta práctica permite combinar fortalezas, generar nuevas propuestas y ofrecer experiencias diferenciadas que enriquecen la interacción con el cliente.
        .tarjeta.bg-fondo-6.h-100.p-4
          p.mb-0 El <em>cobranding</em> debe basarse en la coherencia entre las marcas participantes, asegurando que compartan valores, público objetivo y objetivos comunes, esta alineación es fundamental para evitar contradicciones en la experiencia y garantizar que el resultado sea percibido como auténtico y relevante por el consumidor.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-fondo-3.tarjeta.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0.order-lg-2
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/2.png", data-aos="zoom-in")
            .col-lg.order-lg-1.p-4.p-xl-0
              p.mb-0(data-aos="fade-right") <b>Ejemplo aplicado</b>. Alianza entre Nike y Apple, quienes desarrollaron la plataforma Nike+, integrando tecnología y deporte para crear experiencias personalizadas de entrenamiento. Esta colaboración permitió medir el rendimiento del usuario y generar una experiencia interactiva, fortaleciendo la conexión emocional y la fidelización del consumidor.
    
    .row.justify-content-center
      .col-lg-10        
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Clave estratégica
              p.mb-0(data-aos="fade-right") El <em>cobranding</em> debe generar experiencias coherentes y complementarias entre marcas.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
    
    separador
    
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7 Punto de venta
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8 
        p El punto de venta constituye un proveedor clave de experiencia en el <em>marketing</em> experiencial, ya que es el espacio donde el consumidor interactúa directamente con la marca, el producto y el entorno, este lugar no solo cumple una función comercial, sino que se convierte en un escenario donde se construyen percepciones, emociones y decisiones de compra. 
        .tarjeta.bg-fondo-1.h-100.p-4
          p.mb-0 El punto de venta debe diseñarse como un entorno experiencial que integre elementos sensoriales, visuales y de interacción, aspectos como la distribución del espacio, la iluminación, la ambientación y la disposición del producto influyen en la experiencia del cliente, favoreciendo su permanencia y aumentando la probabilidad de compra.
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Rol del punto de venta en la experiencia
        .tabla-a.color-acento-contenido.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-6
                th Aspecto
                th Función
                th Ejemplo aplicado
            tbody
              tr.bg-color-sintesis
                td.text-bold Espacio
                td El espacio físico actúa como escenario donde el cliente interactúa con la marca, influyendo en su percepción y comportamiento durante la compra.
                td Una tienda organiza espacios abiertos que facilitan el recorrido del cliente, permitiendo interacción libre con productos y mayor permanencia en el punto.
              tr.bg-color-white
                td.text-bold Diseño
                td El diseño del punto de venta organiza elementos visuales y funcionales que guían al cliente, facilitando la comprensión del entorno y experiencia.
                td Una tienda utiliza señalización clara y distribución estratégica para guiar al cliente hacia productos clave, mejorando su experiencia de compra.
              tr.bg-color-sintesis
                td.text-bold Ambientación
                td La ambientación integra estímulos como iluminación, música y aromas que generan emociones, influyendo en la experiencia y percepción del cliente durante la compra.
                td Una tienda incorpora música suave y aromas agradables para generar una atmósfera que invite al cliente a permanecer más tiempo.
              tr.bg-color-white
                td.text-bold Interacción
                td La interacción permite al cliente relacionarse directamente con el producto, facilitando su evaluación, generando confianza y favoreciendo la decisión de compra final.
                td Una tienda permite a los clientes probar productos antes de comprarlos, generando confianza y facilitando la decisión de compra.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.order-lg-1
        .row.bg-fondo-podcast.tarjeta.px-5.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-4 Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer la temática relacionada con la gestión estratégica de experiencias.
            
            TarjetaAudio.color-primario.bg-color-white.mb-3(
              texto="Gestión estratégica de experiencias"
              tiempo
              :audio="require('../assets/curso/podcast/podcast1.mp3')"
            )
    
    .row.justify-content-center
      .col-lg-10        
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Frase de reflexión
              p.mb-0(data-aos="fade-right") “La forma en que se construyen las experiencias refleja el compromiso de la organización con la coherencia, el respeto y la integridad hacia el cliente.”
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
