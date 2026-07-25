<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Storytelling
    
    .bg-full-width.bg-fondo-interno
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-9.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La matriz experiencial constituye una herramienta estratégica que permite estructurar y analizar las experiencias generadas por las marcas en el consumidor. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-fondo-4.tarjeta.px-5.py-4
              p.mb-0 Este capítulo aborda su importancia en el diseño del marketing experiencial, permitiendo comprender cómo se organizan sus componentes. Su desarrollo se realizará desde un enfoque aplicado, integrando elementos conceptuales y prácticos que faciliten la construcción de experiencias coherentes, relevantes y alineadas con los objetivos estratégicos de posicionamiento de marca.

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Concepto
    
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
          .col-lg-8 
            p El storytelling en marketing se define como la construcción de relatos que permiten a las marcas comunicar su propósito, valores y propuesta de valor de manera significativa, a diferencia de la comunicación tradicional, el storytelling se centra en generar conexión emocional, utilizando historias que faciliten la identificación del consumidor con la marca. 
            .tarjeta.bg-fondo-6.h-100.p-4
              p.mb-0 El storytelling permite estructurar mensajes que trascienden lo informativo, convirtiéndose en experiencias narrativas que influyen en la percepción del consumidor, estas narrativas facilitan la recordación y fortalecen el posicionamiento, al generar vínculos emocionales que permanecen en el tiempo.

        .row.justify-content-center.mb-3
          .col-lg-10
            .tarjeta.bg-color-10.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-auto
                  img.d-none.d-md-block(src="@/assets/curso/common/4.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-3 ¿Qué es y cómo hacer un storytelling?
                      p.mb-0 Lo invitamos a consultar el siguiente recurso educativo que lo ayudará a profundizar el concepto de Srorytelling y la importancia que tiene esta herramienta dentro del marketing. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=77TAn3GuKSg " target="_blank")
                        span Ir al video
                        i.fas.fa-file-download
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Técnicas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-1.px-5.py-4
              p.mb-0 Las técnicas de storytelling corresponden a los recursos utilizados para construir y comunicar historias de manera efectiva en el marketing experiencial, estas técnicas incluyen la narrativa emocional, el uso de testimonios, el storytelling transmedia y el storydoing, permitiendo generar experiencias que van más allá del mensaje y se convierten en vivencias para el consumidor.
       
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              p.mb-0(data-aos="fade-right") Las técnicas permiten adaptar la narrativa al canal, al público y al contexto, asegurando que la historia sea relevante y genere impacto, esto implica seleccionar la forma adecuada de contar la historia para maximizar la conexión emocional y la recordación.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Técnicas de storytelling
        .tabla-a.color-acento-contenido.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-6
                th Técnica
                th Función
                th Ejemplo aplicado
            tbody
              tr.bg-color-sintesis
                td.text-bold Narrativa emocional
                td La narrativa emocional utiliza historias que despiertan sentimientos en el consumidor, generando conexión afectiva y fortaleciendo la recordación de la marca en tiempo.
                td Una marca cuenta historias de superación personal que conectan emocionalmente con el consumidor y fortalecen su vínculo con la marca.
              tr.bg-color-white
                td.text-bold Testimonios
                td Los testimonios presentan experiencias reales de clientes, aumentando la credibilidad de la marca y generando confianza en otros consumidores durante su decisión.
                td Una empresa comparte experiencias reales de clientes satisfechos en redes sociales, generando confianza en nuevos consumidores interesados en adquirir el producto.
              tr.bg-color-sintesis
                td.text-bold <em>Storydoing</em>
                td El <em>storydoing</em> consiste en hacer que el cliente viva la historia de la marca mediante experiencias directas que generan conexión y recordación significativa.
                td Una marca organiza eventos donde los clientes viven la experiencia del producto, participando activamente en actividades que reflejan los valores de la marca.
              tr.bg-color-white
                td.text-bold Transmedia
                td El <em>storytelling</em> transmedia expande la historia a través de múltiples canales, permitiendo que el consumidor interactúe con la narrativa en diferentes plataformas.
                td Una marca desarrolla una historia en redes sociales, videos y eventos, permitiendo al cliente seguir y participar en la narrativa en distintos canales.

    .row.justify-content-center
      .col-lg-10
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Clave estratégica
              p.mb-0(data-aos="fade-right") Las técnicas narrativas permiten construir historias que generan conexión y recordación.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Características
    
    p Las características del storytelling en marketing experiencial se centran en su capacidad de generar conexión emocional, transmitir mensajes significativos y facilitar la recordación de la marca, estas características permiten que las historias no solo comuniquen información, sino que construyan experiencias que impactan al consumidor de manera profunda.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
      .col-lg-9
        .bg-fondo-4.tarjeta.px-5.py-4
          p.mb-0 El storytelling se caracteriza por ser coherente, auténtico y relevante para el público objetivo, esto implica que las historias deben alinearse con la identidad de la marca y responder a las expectativas del consumidor, garantizando una narrativa creíble y significativa.
    
    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h3.mb-0.pe-4.ps-2 Características del storytelling
    
    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/7.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Dimensión emocional
              p El storytelling busca generar una conexión emocional entre la marca y el consumidor mediante historias que despiertan sentimientos, transmiten experiencias y favorecen la identificación con el mensaje. Una narrativa emocional fortalece la recordación y hace que la experiencia sea más significativa.
              h5 Idea clave
              p Las emociones convierten una historia en una experiencia memorable para el consumidor.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/8.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Dimensión coherente
              p Un storytelling efectivo mantiene coherencia entre la historia, la identidad, los valores y el propósito de la marca. Cada mensaje debe transmitir una narrativa consistente en todos los puntos de contacto, fortaleciendo la confianza y el reconocimiento por parte del consumidor.
              h5 Idea clave
              p La coherencia fortalece la identidad de la marca y genera confianza en el consumidor.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/9.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Dimensión auténtica
              p El storytelling debe construirse a partir de historias reales o situaciones que reflejen la esencia de la marca. La autenticidad favorece la credibilidad, fortalece la relación con el consumidor y contribuye a establecer vínculos basados en la confianza.
              h5 Idea clave
              p Las historias auténticas fortalecen la credibilidad y la conexión con la marca.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/10.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Dimensión relevante
              p La historia debe responder a los intereses, necesidades y contexto del público objetivo. Cuando el contenido resulta pertinente para el consumidor, aumenta su capacidad para captar la atención, generar identificación y favorecer una comunicación más efectiva.
              h5 Idea clave
              p Una historia relevante conecta con el consumidor porque responde a sus intereses y necesidades.
    
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
              p.mb-0 ¿Qué características debe tener una historia para conectar con el consumidor?
    
    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Elementos
    
    p.mb-5 Para desarrollar una historia efectiva, es importante incluir los siguientes elementos narrativos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-2
        SlyderF(columnas="col-12 col-lg-6").p-4
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema4/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Personajes
            p.text-center Son el eje central de la historia y representan valores con los que la audiencia se identifica.
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema4/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Trama
            p.text-center Secuencia de eventos que construyen la historia y generan interés.
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema4/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Conflicto
            p.text-center Problema que da sentido a la narrativa y permite captar la atención.
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema4/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Mensaje
            p.text-center Idea clave que se busca transmitir.
      .col-md-8.col-lg-4.order-lg-1
        figure
          img(src='@/assets/curso/tema4/11.png', alt='Descripción de la13imagen')
    
    p.mb-5 Veamos dos ejemplos para ilustrar la aplicación de estos elementos:

    .row.mb-5.align-items-center.justify-content-center
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Ejemplo 1. Storytelling emocional (marca de café)")
            p María es una emprendedora que inicia cada día antes del amanecer para sacar adelante su pequeño negocio. Entre el cansancio y las responsabilidades, encuentra en su taza de café un momento de pausa que le permite reconectar consigo misma y tomar fuerzas para continuar. Cada sorbo se convierte en un ritual que no solo despierta su cuerpo, sino también su determinación.
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in")
              .col-lg-8
                p Un día, mientras atiende su tienda, un cliente le comenta cómo ese mismo café le recuerda a su hogar y a su familia. María comprende entonces que no está vendiendo solo una bebida, sino momentos, recuerdos y emociones compartidas. La marca de café se posiciona, así como un acompañante en la vida diaria, conectando con historias reales y significativas.
                p.mb-0(data-aos="fade-right") Este relato permite a la marca construir una conexión emocional con el consumidor, mostrando que el producto trasciende su función básica y se convierte en parte de experiencias personales, fortaleciendo la recordación y la fidelización.
          div(titulo="Ejemplo 2. Storytelling experiencial (marca de tecnología)")
            p Carlos siempre ha tenido dificultad para organizar su tiempo entre el trabajo, el estudio y su vida personal. A pesar de sus esfuerzos, siente que no logra cumplir con todas sus responsabilidades, lo que le genera frustración constante. En medio de esta situación, descubre una aplicación que le permite gestionar sus actividades de manera sencilla e intuitiva.
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
              .col-lg-8
                p A medida que comienza a utilizarla, Carlos no solo mejora su organización, sino que recupera tiempo para compartir con su familia y dedicarlo a sus intereses personales. La aplicación deja de ser una herramienta funcional para convertirse en un facilitador de bienestar y equilibrio en su vida diaria.
                p.mb-0(data-aos="fade-right") La marca, a través de esta historia, no comunica características técnicas, sino una transformación en la vida del usuario. Esto permite generar una experiencia significativa, donde el consumidor se identifica con el problema y valora la solución desde una perspectiva emocional y práctica.

    .row.justify-content-center
      .col-lg-10
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Frase de reflexión 
              p.mb-0(data-aos="fade-right") Contar historias con coherencia y autenticidad refleja integridad en la forma en que una marca se relaciona con las personas.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")



</template>

<script>
export default {
  name: 'Tema4',
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
