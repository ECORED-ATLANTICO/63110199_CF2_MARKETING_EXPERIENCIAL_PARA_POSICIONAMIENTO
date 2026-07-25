<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Matriz experiencial
    
    .bg-full-width.bg-fondo-interno
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-9.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La matriz experiencial constituye una herramienta estratégica que permite estructurar y analizar las experiencias generadas por las marcas en el consumidor. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-fondo-4.tarjeta.px-5.py-4
              p.mb-0 Este capítulo aborda su importancia en el diseño del marketing experiencial, permitiendo comprender cómo se organizan sus componentes. Su desarrollo se realizará desde un enfoque aplicado, integrando elementos conceptuales y prácticos que faciliten la construcción de experiencias coherentes, relevantes y alineadas con los objetivos estratégicos de posicionamiento de marca.

        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Concepto

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
          .col-lg-8 
            p La matriz experiencial se define como una herramienta de análisis que permite organizar los elementos que intervienen en la construcción de la experiencia del cliente, esta matriz facilita la identificación de los factores que influyen en la percepción del consumidor, integrando aspectos emocionales, sensoriales y funcionales en un mismo esquema estratégico.
            .tarjeta.bg-fondo-6.h-100.p-4
              p.mb-0 La matriz experiencial permite visualizar cómo interactúan los diferentes componentes de la experiencia en cada punto de contacto con el cliente, esto facilita la toma de decisiones orientadas al diseño de experiencias más coherentes, alineadas con los objetivos de la marca y las expectativas del consumidor.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Elementos
    
    p Los elementos de la matriz experiencial corresponden a los componentes que permiten estructurar la experiencia del cliente, integrando factores sensoriales, emocionales, cognitivos y conductuales, estos elementos interactúan entre sí, configurando la percepción global del consumidor frente a la marca.

    .bg-full-width.bg-fondo-interno
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-9
            .bg-fondo-7.px-5.py-4.mb-3
              p.mb-0 Es fundamental identificar y gestionar cada uno de estos elementos, asegurando su coherencia y alineación con la propuesta de valor, esto implica diseñar experiencias que consideren tanto los estímulos que recibe el cliente como las respuestas que estos generan en su comportamiento. Una matriz experiencial cruza dos aspectos:
            .row
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/5.png' alt='AvatarTop')
                  .tarjeta.bg-fondo-avt.h-100
                    .p-3
                      p.mb-0 <b>Filas</b>: puntos de contacto o etapas del cliente.
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-down")
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/6.png' alt='AvatarTop')
                  .tarjeta.bg-fondo-avt.h-100
                    .p-3
                      p.mb-0 <b>Columnas</b>: elementos de la experiencia (sensorial, emocional, cognitivo, conductual).

        p Eso permite ver qué se diseña en cada momento de la experiencia.

        p.mb-5 A continuación, se presentan ejemplos de matrices experienciales que permiten visualizar su aplicación en contextos reales.

        .row.justify-content-center
          .col-lg-10
            AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-4")
              div(titulo="Ejemplo 1. Tienda de ropa (Retail)")
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 3.
                  span Matriz experiencial en punto de venta
                .tabla-a.color-acento-contenido.mb-3.tbl
                  table
                    caption Nota. SENA, (2026).
                    thead
                      tr.bg-color-6
                        th Punto de contacto
                        th Sensorial
                        th Emocional
                        th Cognitivo
                        th Conductual
                    tbody
                      tr.bg-color-sintesis
                        td.text-bold Entrada
                        td Iluminación cálida, música
                        td Curiosidad
                        td Identifica estilo de marca
                        td Ingresa a la tienda
                      tr.bg-color-white
                        td.text-bold Exhibición
                        td Colores y diseño visual
                        td Atracción
                        td Evalúa productos
                        td Se acerca
                      tr.bg-color-sintesis
                        td.text-bold Probador
                        td Texturas, comodidad
                        td Confianza
                        td Analiza ajuste
                        td Decide probar
                      tr.bg-color-white
                        td.text-bold Caja
                        td Aroma, orden
                        td Satisfacción
                        td Evalúa compra
                        td Realiza pago
                p Qué notamos aquí:
                .row.justify-content-center
                  .col-lg-4.mb-3.mb-lg-0
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-5
                        | <b>Cada fila</b> = momento real.
                  .col-lg-4.mb-3.mb-lg-0
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-5
                        | <b>Cada columna</b> = tipo de experiencia.
                  .col-lg-4.mb-3.mb-lg-0
                    ul.lista-ul--color.ms-3
                      li.mb-3.d-flex
                        i.fas.fa-circle.fa-xs.mt-2.bg-color-5
                        | <b>Resultado</b> = diseño completo de experiencia.
              div(titulo="Ejemplo 2: Plataforma digital (E-commerce)")
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 4.
                  span Matriz experiencial en entorno digital
                .tabla-a.color-acento-contenido.mb-3.tbl
                  table
                    caption Nota. SENA, (2026).
                    thead
                      tr.bg-color-6
                        th Punto de contacto
                        th Sensorial
                        th Emocional
                        th Cognitivo
                        th Conductual
                    tbody
                      tr.bg-color-sintesis
                        td.text-bold Inicio web
                        td Diseño visual limpio
                        td Confianza
                        td Entiende navegación
                        td Explora sitio
                      tr.bg-color-white
                        td.text-bold Búsqueda
                        td Interfaz intuitiva
                        td Seguridad
                        td Compara opciones
                        td Filtra productos
                      tr.bg-color-sintesis
                        td.text-bold Producto
                        td Imágenes, videos
                        td Deseo
                        td Evalúa beneficios
                        td Agrega al carrito
                      tr.bg-color-white
                        td.text-bold Pago
                        td Simplicidad visual
                        td Tranquilidad
                        td Verifica datos
                        td Finaliza compra

    .row.justify-content-center
      .col-lg-10        
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Clave estratégica
              p.mb-0(data-aos="fade-right") Los elementos de la matriz deben integrarse para generar experiencias coherentes.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Características

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-1.px-5.py-4
              p.mb-0 Las características de la matriz experiencial se orientan a su capacidad de integrar diferentes dimensiones del marketing experiencial en un solo esquema estratégico, esta herramienta se distingue por su enfoque holístico, permitiendo analizar la experiencia del cliente de manera integral, considerando factores sensoriales, emocionales, cognitivos y conductuales en conjunto. 
       
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              p.mb-0(data-aos="fade-right") La matriz experiencial se caracteriza por ser flexible, adaptable y centrada en el cliente, lo que facilita su implementación en distintos contextos organizacionales, esta flexibilidad permite a las empresas ajustar sus estrategias según las necesidades del mercado y el comportamiento del consumidor, garantizando experiencias relevantes y coherentes.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
             
    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h3.mb-0.pe-4.ps-2 Características de la matriz experiencial
    
    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/9.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Integral para una visión completa de la experiencia
              p La matriz experiencial analiza de manera integrada todos los elementos que intervienen en la experiencia del cliente. Para ello, considera los diferentes puntos de contacto, las emociones, los estímulos y las interacciones que influyen en la percepción del consumidor, facilitando una comprensión global de la experiencia.
              h5 Idea clave
              p Una visión integral permite comprender la experiencia del cliente como un proceso conectado y no como acciones aisladas.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/10.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Flexible para la adaptación al contexto
              p La matriz experiencial puede ajustarse a las características de cada organización, del mercado y de los diferentes perfiles de consumidores. Esta flexibilidad permite adaptar las estrategias a las necesidades del entorno, los cambios del mercado y las expectativas de los clientes, favoreciendo experiencias más pertinentes.
              h5 Idea clave
              p La flexibilidad facilita adaptar las estrategias a las características de cada contexto y consumidor.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/11.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Estratégica orientada a objetivos
              p La matriz experiencial organiza la información para que las acciones de marketing respondan a objetivos claramente definidos. Su aplicación facilita alinear el diseño de experiencias con el posicionamiento de la marca, la fidelización de clientes y la generación de valor para la organización.
              h5 Idea clave
              p Cada experiencia debe diseñarse con un propósito estratégico que contribuya al logro de los objetivos de la organización.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/12.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Centrada en el cliente con enfoque en necesidades
              p La matriz experiencial sitúa al cliente como eje de la estrategia, considerando sus necesidades, expectativas, emociones y comportamientos durante cada interacción con la marca. Este enfoque permite diseñar experiencias más relevantes, fortalecer la satisfacción y construir relaciones de largo plazo.
              h5 Idea clave
              p Comprender al cliente es el punto de partida para crear experiencias significativas y sostenibles.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8 
        .tarjeta.bg-fondo-6.h-100.p-4
          p.mb-0 En conjunto, estas características permiten que la matriz experiencial integre los aspectos funcionales, sensoriales y emocionales de la experiencia del cliente, facilitando el diseño de estrategias coherentes con los objetivos de la marca y las expectativas del consumidor.
    
    .row.justify-content-center
      .col-lg-10        
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Frase de reflexión
              p.mb-0(data-aos="fade-right") Diseñar experiencias coherentes implica actuar con responsabilidad, integridad y compromiso hacia las necesidades reales del cliente.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Tema2',
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
