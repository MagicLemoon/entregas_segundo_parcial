const app = Vue.createApp({
  data() {
    return {
      gustarVideojuegos: '', // Respuesta a si le gustan los videojuegos
      aniosJugando: 0, // Número de años jugando
      experiencia: '', // Texto de la experiencia jugando
      nuevoVideojuego: '', // Videojuego que el usuario escribe
      videojuegos: [], // Lista de videojuegos que el usuario añade
      mostrar: false, // Para mostrar u ocultar los resultados
     nombre: '',
     
    

    
    };
  },
  methods: {
  
    agregarVideojuego() {
      // Agregar un nuevo videojuego a la lista si no está vacío
      if (this.nuevoVideojuego.trim() !== '') {
        this.videojuegos.push(this.nuevoVideojuego);
        this.nuevoVideojuego = ''; // Limpiar el campo de entrada
      }
    },
    quitarVideojuego(index) {
      // Quitar un videojuego de la lista
      if (this.videojuegos.length > 0) {
        this.videojuegos.splice(index, 1);
      }
    },
 
    mostrarResultados() {
      this.mostrar = true; // Mostrar los resultados cuando se hace clic en el botón
    }
  }
});

// Montar la aplicación en el div con id="app"
app.mount('#app');
