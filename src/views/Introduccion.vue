<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.order-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-1.px-5.py-4
              p.mb-0 El componente formativo aborda el <em>marketing</em> experiencial desde una perspectiva estratégica, enfocándose en la comprensión de los elementos que permiten diseñar, gestionar y evaluar experiencias significativas para el consumidor. 
       
        .bg-fondo-7.tarjeta.px-4
          .row.justify-content-center.align-items-center
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/1.png", data-aos="zoom-in")
            .col-lg.p-4.p-lg-0
              p.mb-0(data-aos="fade-right") Este componente es fundamental en la formación del aprendiz, ya que fortalece su capacidad para interpretar el comportamiento del cliente y desarrollar propuestas de valor centradas en la experiencia.
            .col-auto.mb-lg-0
              figure
                img.d-none.d-lg-flex(src="@/assets/curso/common/5.svg", data-aos="zoom-in")

    
    .bg-fondo-5.tarjeta.px-5.py-4
      p.mb-0 Su desarrollo se llevará a cabo mediante el análisis de proveedores de experiencia, la aplicación de matrices experienciales, la comprensión de los dominios de interacción, el uso del <em>storytelling</em> y la interpretación de indicadores de gestión. A través de ejemplos aplicados y herramientas prácticas, el aprendiz podrá integrar estos conocimientos para diseñar estrategias coherentes que impacten la percepción, el posicionamiento y la fidelización del consumidor.
         
</template>

<script>
export default {
  name: 'Introduccion',
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
