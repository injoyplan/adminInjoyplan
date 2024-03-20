class PalabrasService {
    private arrayPalabras: string[];
  
    constructor() {
      this.arrayPalabras = ['manzana', 'banana', 'pera', 'uva', 'sandía'];
    }
  
    buscarPalabra(palabra: string): boolean {
      return this.arrayPalabras.includes(palabra);
    }
  }