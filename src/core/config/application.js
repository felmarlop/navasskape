const {
  VUE_APP_BASE_PATH = '',
  VUE_APP_TITLE = ''
} = process.env

const APP_BASE_PATH = VUE_APP_BASE_PATH
const APP_TITLE = VUE_APP_TITLE

const QUOTES = [
  {
    q: '<< Sé el cambio que quieres ver en el mundo >>',
    author: 'Mahatma Gandhi'
  },
  {
    q: '<< Cree que puedes hacerlo y ya estarás a medio camino >>',
    author: 'Theodore Roosevelt '
  },
  {
    q: '<< Salta y aparecerá la red >>',
    author: 'Julia Cameron'
  },
  {
    q: '<< Si quieres una cualidad, actúa como si ya la tuvieras >>',
    author: 'Williams James'
  },
  {
    q: '<< No podemos cambiar nada hasta que lo aceptemos. La condena no libera, oprime >>',
    author: 'Carl Jung'
  },
  {
    q: '<< Las únicas personas normales son las que no conoces muy bien >>',
    author: 'Alfred Adler'
  },
  {
    q: '<< Se trata de cómo conduces, no de hacia dónde vas >>',
    author: 'Noam Shpancer'
  },
  {
    q: '<< Ninguna relación importante sobrevive si la confianza se pierde por completo >>',
    author: 'Paul Ekman'
  },
  {
    q: '<< La inteligencia es lo que usas cuando no sabes qué hacer >>',
    author: 'Jean Piaget'
  },
  {
    q: '<< La mente es como un paracaídas, solo funciona si se abre >>',
    author: 'Frank Zappa'
  },
  {
    q: '<< La verdadera sabiduría está en reconocer la propia ignorancia >>',
    author: 'Sócrates'
  },
  {
    q: '<< Las personas sólo cambiamos de verdad cuando nos damos cuenta de las consecuencias de no hacerlo >>',
    author: 'Mario Alonso Puig'
  },
  {
    q: '<< Aquellos que no creen en la magia jamás la encontrarán >>',
    author: 'Roald Dahl'
  },
  {
    q: '<< Un optimista ve en cada peligro una oportunidad >>',
    author: 'Winston Churchill'
  },
  {
    q: '<< La vida no consiste en encontrarte, sino en crearte >>',
    author: 'Anónimo'
  },
  {
    q: '<< Para que alguien te tome en serio, primero te tienes que tomar en serio tú >>',
    author: 'Mario Alonso Puig'
  },
  {
    q: '<< Consulta no a tus miedos, sino a tus sueños >>',
    author: 'Juan XXIII'
  },
  {
    q: '<< No se ve bien sino con el corazón. Lo esencial es invisible a los ojos >>',
    author: 'El principito, Antoine de Saint-Exupéry'
  },
  {
    q: '<< Si quieres vivir una vida feliz, átala a una meta, no a una persona o un objeto >>',
    author: 'Albert Einstein'
  },
  {
    q: '<< La felicidad no depende de lo que tienes o de quién eres. Depende únicamente de lo que piensas >>',
    author: 'Dale Carnegie'
  },
  {
    q: '<< La gratitud es el mejor antídoto contra la tristeza y la frustración >>',
    author: 'Martin Seligman'
  },
  {
    q: '<< La mente que se abre a una nueva idea jamás volverá a su tamaño original >>',
    author: 'Albert Einstein'
  },
  {
    q: '<< El que conoce a los demás es inteligente; el que se conoce a sí mismo es sabio >>',
    author: 'Lao Tse'
  },
  {
    q: '<< La vida es lo que te pasa mientras estás ocupado haciendo otros planes >>',
    author: 'John Lennon'
  },
  {
    q: '<< No puedes cambiar el viento, pero puedes ajustar las velas de tu barco >>',
    author: 'Proverbio chino'
  },
  {
    q: '<< La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello >>',
    author: 'Charles R. Swindoll'
  },
  {
    q: '<< El optimismo es la fe que conduce al logro >>',
    author: 'Helen Keller'
  },
  {
    q: '<< No podemos resolver problemas pensando de la misma manera que cuando los creamos >>',
    author: 'Albert Einstein'
  },
  {
    q: '<< La mente lo es todo. En lo que piensas, te conviertes >>',
    author: 'Buda'
  },
  {
    q: '<< La única forma de hacer un gran trabajo es amar lo que haces >>',
    author: 'Steve Jobs'
  },
  {
    q: '<< La mayor parte de nuestras inseguridades no son reales, son aprendidas >>',
    author: 'Mario Alonso Puig'
  },
  {
    q: '<< Eres aquello que haces, no aquello que dices que harás >>',
    author: 'Carl Jung'
  },
  {
    q: '<< La forma de hablarnos a nosotros mismos afecta tremendamente a nuestra manera de relacionarnos con el mundo >>',
    author: 'Mario Alonso Puig'
  }
]

const INTERVAL_TIME = 15000
const LOADING_TIMEOUT = 5000

export { APP_BASE_PATH, APP_TITLE, INTERVAL_TIME, LOADING_TIMEOUT, QUOTES }
