<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-9
        p El componente formativo Estrategia experiencial ofrece al aprendiz herramientas conceptuales y aplicadas para comprender cómo se diseñan y gestionan las experiencias en el <em>marketing</em> moderno. A través del análisis de proveedores de experiencia, matrices experienciales y dominios de interacción, se fortalece la capacidad para estructurar experiencias coherentes que respondan a las necesidades del consumidor y a los objetivos estratégicos de la organización en entornos competitivos.
        .bg-fondo-1.tarjeta.px-5.py-4
          p.mb-0 Asimismo, el componente integra el uso del <em>storytelling</em> como recurso para generar conexión emocional, junto con la aplicación de indicadores de gestión que permiten medir el impacto de las estrategias implementadas. Esta integración facilita la toma de decisiones informadas, orientadas a la mejora continua de la experiencia del cliente, contribuyendo al fortalecimiento del posicionamiento y la fidelización en diferentes contextos empresariales actuales.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La ilustración muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Estrategia experiencial”, el cual se organiza en cinco unidades. Inicia con el capítulo uno abordando la temática de proveedores de experiencia, allí se abordan los conceptos de comunicación, identidad de marca, producto, empleados, entorno digital, <em>cobranding</em> y punto de venta. El capítulo dos, aborda matriz experiencial, en donde se ve concepto, elementos y características. El capítulo tres desarrolla dominios de experiencia, abordando las temáticas de conceptos, principios, dimensiones y aplicaciones. El capítulo cuatro desarrolla la temática de <em>Storytelling</em>, abordando su concepto, técnicas, características y elementos. El componente cierra con el capítulo de indicadores de gestión de mercadeo en el <em>marketing</em> experiencial, allí se aborda su concepto, objetivos, clases, y concluye con interpretación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
