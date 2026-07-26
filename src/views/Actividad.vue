<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conceptos en <em>marketing</em> experiencial',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, principios y aplicaciones del <em>marketing</em> experiencial mediante la identificación de afirmaciones verdaderas o falsas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué proveedor fortalece principalmente interacción mediante mensajes coherentes entre marca y consumidor continuamente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comunicación estratégica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Cobranding</em> comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto funcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué componente define valores, propósito y esencia de la marca estratégicamente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identidad conceptual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Identidad experiencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identidad comunicativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué rol cumple el producto mediante estímulos sensoriales en experiencias memorables comerciales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir interacción comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir comunicación estratégica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Enriquecer la experiencia mediante estímulos sensoriales significativos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar procesos de fidelización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué proveedor transforma valores corporativos mediante interacción directa entre empleados y consumidores diariamente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Cobranding</em> estratégico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entorno digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empleados de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué estrategia permite integrar dos marcas para crear experiencias conjuntas diferenciadas estratégicamente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Cobranding</em> estratégico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Storytelling</em> corporativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Matriz experiencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dominio experiencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué herramienta organiza sistemáticamente elementos estratégicos durante diseño de experiencias memorables para consumidores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Storytelling</em> corporativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Matriz experiencial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Cobranding</em> comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identidad visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué principio involucra activamente clientes fortaleciendo experiencias significativas durante interacción con marcas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inmersión experiencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Participación activa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Conexión emocional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Absorción cognitiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué dimensión representa integración profunda del consumidor dentro experiencias?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Participación pasiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Absorción experiencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inmersión experiencial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Conexión estratégica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué aplicación utiliza dominios experienciales para fortalecer interacción durante eventos comerciales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión contable empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Control financiero institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesos administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eventos experienciales organizados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué técnica <em>storytelling</em> busca involucrar consumidores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Storydoing</em> experiencial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Narrativa conceptual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comunicación funcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué característica <em>storytelling</em> fortalece credibilidad mediante historias coherentes con identidad organizacional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Narrativa emocional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autenticidad comunicativa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Storydoing</em> estratégico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Participación experiencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué elemento del <em>storytelling</em> representa el protagonista principal dentro de la narrativa experiencial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conflicto narrativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personaje principal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolución estratégica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contexto comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué objetivo de los indicadores evalúa la percepción del cliente sobre experiencias organizacionales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fidelización comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interacción digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ninguna de las anteriores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de indicador mide el cumplimiento de objetivos en estrategias experienciales organizacionales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indicador experiencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Indicador resultado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Indicador eficiencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indicador eficacia.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué proceso transforma los datos obtenidos en decisiones estratégicas para la organización?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interpretación de indicadores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Storytelling</em> corporativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseño experiencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Participación inmersiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué aspecto del punto de venta fortalece la percepción del cliente durante la experiencia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambientación musical permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseño del espacio comercial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Cobranding</em> promocional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Storydoing</em> experiencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué componente de la identidad de marca fortalece el reconocimiento de la organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identidad comunicativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identidad experiencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identidad visual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Identidad conceptual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué entorno facilita experiencias personalizadas mediante plataformas digitales para los consumidores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Punto de venta físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Espacio administrativo interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entorno digital corporativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Centro logístico empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué componente de la matriz experiencial organiza la experiencia durante el recorrido del cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Punto de contacto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dominio experiencial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Indicador estratégico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Momento de interacción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué beneficio estratégico aporta interpretar indicadores para mejorar la toma de decisiones organizacionales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Optimizar estrategias mediante análisis continuo del comportamiento y experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar procesos permanentes de evaluación comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente acciones de posicionamiento empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir interacción entre organización y consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
