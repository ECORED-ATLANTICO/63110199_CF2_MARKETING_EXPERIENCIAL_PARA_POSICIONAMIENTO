<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Dominios de experiencia
    
    .bg-full-width.bg-fondo-interno
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-8 
            p Los dominios de experiencia permiten comprender las diferentes dimensiones en las que el consumidor interactúa con la marca, configurando percepciones y vivencias significativas. 
            .tarjeta.bg-fondo-6.h-100.p-4
              p.mb-0 Este capítulo aborda su importancia en el <em>marketing</em> experiencial, facilitando el análisis de cómo se estructuran dichas experiencias, su desarrollo se realizará desde un enfoque conceptual y aplicado, integrando principios y dimensiones que permiten diseñar experiencias coherentes, relevantes y alineadas con el comportamiento del consumidor.

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Concepto
        
        img(src="@/assets/curso/tema3/2.png", alt="Imagen decorativa")
        
        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10(data-aos="fade-up")
            p.banner-text Los dominios de experiencia se refieren a las distintas formas en que una experiencia puede ser percibida y vivida por el consumidor, integrando niveles de participación y conexión emocional, estos dominios permiten clasificar las experiencias según su naturaleza, facilitando su diseño y análisis dentro del <em>marketing</em> experiencial.
        
        .row.justify-content-center.mb-3
          .col-lg-10
            .tarjeta.bg-color-10.p-4.mb-5
              .row.justify-content-around.align-items-center
                .col-auto
                  img.d-none.d-md-block(src="@/assets/curso/common/4.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4.mb-3 Economía de la experiencia
                      p.mb-0 Lo invitamos a consultar el siguiente recurso educativo para profundizar sobre la economía de la experiencia. En él se evidencia cómo las experiencias pueden variar según el nivel de participación del consumidor y su conexión emocional, elementos fundamentales para su diseño y análisis en el <em>marketing</em> experiencial.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=1vbo3ukK_UE  " target="_blank")
                        span Ir al video
                        i.fas.fa-file-download
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Comprender los dominios de experiencia permite a las empresas identificar cómo interactúa el cliente con la marca, ya sea de forma pasiva o activa, y cómo esta interacción influye en su percepción. Esto facilita la creación de experiencias más relevantes y alineadas con las expectativas del consumidor.
        .bg-fondo-3.tarjeta.ps-lg-5
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0.order-lg-2
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/6.png", data-aos="zoom-in")
            .col-lg.order-lg-1.p-4.p-xl-0
              p.mb-0(data-aos="fade-right") <b>Caso aplicado</b>. Un parque temático diseña experiencias donde el cliente observa espectáculos, participa en actividades y se involucra emocionalmente, integrando diferentes dominios de experiencia.

    .bg-title.p-3.rounded-5.pe-5.mb-5(data-aos="fade-down-right")
      h3.mb-0.pe-4.ps-2 Dominios de la experiencia en el <em>marketing</em> experiencial
    
    .bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/4.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Participación: el inicio de la experiencia
              p La participación corresponde al nivel de interacción del consumidor con la marca, sus productos, servicios o entornos. A través de este dominio, el cliente deja de ser un observador y asume un papel activo en la construcción de la experiencia, mediante acciones como explorar, interactuar, opinar o participar en diferentes puntos de contacto.
              h5 Idea clave
              p La experiencia comienza cuando el consumidor participa activamente en su interacción con la marca.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/5.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Experiencia: la vivencia del cliente
              p La experiencia comprende el conjunto de sensaciones, acciones y momentos que el consumidor vive durante su interacción con la marca. Cada contacto aporta elementos que enriquecen la vivencia y contribuyen a generar una experiencia significativa y diferenciadora.
              h5 Idea clave
              p Cada interacción aporta a la construcción de una experiencia memorable.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/6.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Conexión: el fortalecimiento del vínculo
              p Las experiencias positivas favorecen la construcción de una conexión emocional entre el consumidor y la marca. Este vínculo se fundamenta en la confianza, la afinidad y el significado que el cliente atribuye a la experiencia, fortaleciendo la relación a largo plazo.
              h5 Idea clave
              p Las experiencias significativas fortalecen la conexión emocional con la marca.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema3/7.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Percepción: la construcción del significado
              p La percepción corresponde al significado que el consumidor construye a partir de la experiencia vivida. Esta interpretación está influenciada por sus expectativas, emociones, conocimientos y contexto, y determina la imagen que forma sobre la marca y sus futuras decisiones de compra.
              h5 Idea clave
              p La percepción es el resultado de cómo el consumidor interpreta la experiencia que ha vivido.
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-right") La participación, la experiencia, la conexión y la percepción actúan de manera integrada para construir experiencias significativas que generan valor para el cliente y la marca. La gestión estratégica de estos dominios fortalece la relación con el consumidor, incrementa la satisfacción, favorece el posicionamiento y contribuye a la fidelización a largo plazo.    
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Clave estratégica
              p.mb-0(data-aos="fade-right") Comprender los dominios permite diseñar experiencias más completas y significativas.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Principios
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-9  
        .tarjeta.bg-fondo-6.h-100.p-4
          p.mb-0 Los principios de los dominios de experiencia se orientan a la forma en que las experiencias deben diseñarse para generar valor en el consumidor, estos principios incluyen la participación, la inmersión y la conexión emocional, elementos que permiten construir experiencias más profundas y significativas.
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Principios de los dominios de experiencia
        .tabla-a.color-acento-contenido.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-6
                th Principio
                th Función
                th Ejemplo aplicado
            tbody
              tr.bg-color-sintesis
                td.text-bold Participación
                td La participación implica involucrar activamente al cliente en la experiencia, permitiendo que interactúe con la marca y se convierta en protagonista del proceso.
                td Una marca invita a los clientes a personalizar productos en tienda, permitiendo que participen activamente en la construcción de su experiencia.
              tr.bg-color-white
                td.text-bold Inmersión
                td La inmersión permite que el cliente se integre completamente en la experiencia, generando una vivencia profunda que capta su atención y permanencia.
                td Un parque temático crea escenarios envolventes donde el cliente se siente parte de la historia, viviendo una experiencia completamente inmersiva.
              tr.bg-color-sintesis
                td.text-bold Conexión
                td La conexión busca generar un vínculo emocional entre el cliente y la marca, fortaleciendo la relación y favoreciendo la recordación en el tiempo.
                td Una marca desarrolla campañas emocionales que conectan con experiencias personales del consumidor, fortaleciendo su relación con la marca.
              tr.bg-color-white
                td.text-bold Interacción
                td La interacción permite que el cliente establezca una relación activa con la marca, facilitando el intercambio de acciones que enriquecen la experiencia.
                td Una aplicación permite al usuario interactuar con contenidos personalizados, generando una experiencia dinámica y adaptada a sus preferencias.
    
    .row.justify-content-center.mb-3
      .col-lg-10
        .bg-fondo-4.tarjeta.px-5.py-4
          p.mb-0 Estos principios permiten guiar el diseño de experiencias que involucren al consumidor de manera integral, asegurando que cada interacción contribuya a la construcción de valor, la correcta aplicación de estos principios facilita la diferenciación y fortalece el posicionamiento de la marca.
    
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
              p.mb-0 ¿Cómo puede una marca generar experiencias inmersivas para sus clientes?
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Dimensiones
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-9.order-1.col-lg-3.mb-3
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-1.px-5.py-4
              p.mb-0 Las dimensiones de los dominios de experiencia hacen referencia a las formas en que el consumidor se involucra con la experiencia, considerando niveles de participación y conexión. Estas dimensiones permiten analizar cómo el cliente interactúa con la marca, ya sea de manera pasiva o activa, y cómo esta interacción influye en su percepción y comportamiento. 
       
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              p.mb-0(data-aos="fade-right") Las dimensiones se estructuran en torno a la participación del cliente y el tipo de conexión que establece con la experiencia, esto permite diseñar experiencias que pueden ir desde la observación hasta la inmersión total, adaptándose a diferentes perfiles de consumidores y contextos de mercado.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")

    .bg-fondo-5.tarjeta.px-5.py-4.mb-5
      p.mb-0 Un ejemplo aplicado se encuentra en Universal Studios, donde los visitantes pueden observar espectáculos o participar activamente en atracciones inmersivas, integrando diferentes dimensiones de experiencia.
    

    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.mb-3.mb-lg-0
        SlyderF(columnas="col-12 col-xl-6").p-3.p-lg-4
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Consumidor
            p.text-center <b>Eje de la experiencia</b>: el consumidor ocupa el centro del <em>marketing</em> experiencial, ya que cada interacción, estímulo y punto de contacto influye en la forma en que vive, interpreta y recuerda la experiencia. Las dimensiones de la experiencia permiten comprender los diferentes niveles de participación y relación que pueden generarse entre la marca y el cliente.
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Participación pasiva
            p.text-center <b>Observación</b>: en esta dimensión, el consumidor observa la experiencia sin intervenir directamente en ella. Aunque su participación es limitada, recibe información y estímulos que influyen en la percepción de la marca y en la construcción de la experiencia.
            p.text-center <b>Idea clave</b>: el consumidor participa principalmente como observador de la experiencia.
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Participación activa
            p.text-center <b>Interacción</b>: el consumidor interviene de manera directa en la experiencia mediante acciones, decisiones o actividades propuestas por la marca. Su participación favorece un mayor nivel de compromiso y fortalece el vínculo con la organización.
            p.text-center <b>Idea clave</b>: la interacción convierte al consumidor en protagonista de la experiencia.
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Absorción
            p.text-center <b>Atención</b>: la absorción ocurre cuando el consumidor dirige su atención hacia la experiencia sin integrarse completamente a ella. La información, los contenidos y los estímulos captan su interés y favorecen la construcción de significado.
            p.text-center <b>Idea clave</b>: la atención permite al consumidor comprender y valorar la experiencia.
          .bg-fondo-carrus.tarjeta.p-4.h-100.box-shadow
            img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Inmersión
            p.text-center <b>Experiencia profunda</b>: la inmersión representa el mayor nivel de involucramiento del consumidor con la experiencia. En esta dimensión, participa activamente y establece una conexión emocional que favorece la recordación, el aprendizaje y la fidelización.
            p.text-center <b>Idea clave</b>: La inmersión genera experiencias memorables y fortalece la relación con la marca.

      .col-md-8.col-lg-3.order-1
        figure
          img(src='@/assets/curso/tema3/12.png', alt='Descripción de la13imagen')

    .row.justify-content-center.mb-3
      .col-lg-10
        .bg-fondo-6.tarjeta.px-5.py-4
          p.mb-0 Las dimensiones de la experiencia permiten comprender los diferentes niveles de participación e involucramiento del consumidor durante su relación con la marca. Su aplicación facilita el diseño de estrategias orientadas a crear experiencias relevantes, memorables y coherentes con las expectativas del cliente, fortaleciendo el valor de la relación entre ambas partes.
    
    .row.justify-content-center
      .col-lg-10
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Clave estratégica
              p.mb-0(data-aos="fade-right") Las dimensiones permiten adaptar la experiencia al nivel de participación del consumidor.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Aplicaciones
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
      .col-lg-8 
        p Las aplicaciones de los dominios de experiencia permiten llevar los conceptos y principios a contextos reales, facilitando el diseño de estrategias orientadas a generar experiencias significativas, estas aplicaciones se evidencian en diferentes sectores, donde las marcas utilizan los dominios para influir en la percepción y el comportamiento del consumidor. 
        .tarjeta.bg-fondo-6.h-100.p-4
          p.mb-0 Las aplicaciones permiten adaptar los dominios de experiencia a diferentes entornos, como el entretenimiento, el <em>retail</em> o los servicios digitales, esto implica diseñar experiencias que respondan a las características del público objetivo, integrando participación, inmersión y conexión emocional. Veamos dos ejemplos:
    
    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-md-10.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/19.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Aplicación en <em>retail</em> (tienda de moda)
            p.mb-0 Una marca de ropa diseña su punto de venta integrando diferentes dominios de experiencia. En la zona de exhibición, el cliente participa de manera pasiva observando las colecciones (absorción), mientras que en los probadores interactivos puede experimentar activamente con los productos (inmersión). Además, se incorporan estímulos sensoriales como iluminación y música que generan conexión emocional. Esta integración permite influir en la percepción del cliente, mejorar su experiencia y favorecer la decisión de compra.
    
      .col-xl-5.col-lg-6.col-md-10.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/20.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Aplicación en entorno digital (plataforma de <em>streaming</em>)
            p.mb-0 Una plataforma digital estructura la experiencia del usuario a partir de los dominios de experiencia, combinando participación mediante la selección de contenidos, con momentos de absorción durante la visualización. A través de algoritmos personalizados, se genera una conexión emocional al ofrecer contenido alineado con los intereses del usuario. Esta aplicación permite adaptar la experiencia al comportamiento del consumidor, incrementando su permanencia, satisfacción y fidelización dentro de la plataforma.

    .row.justify-content-center
      .col-lg-10
        .bg-fondo-7.tarjeta.px-4
          .row.mb-5.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              h5 Frase de reflexión
              p.mb-0(data-aos="fade-right") Diseñar experiencias significativas implica comprender al otro con respeto, empatía y coherencia en cada interacción.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")

</template>

<script>
export default {
  name: 'Tema3',
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
