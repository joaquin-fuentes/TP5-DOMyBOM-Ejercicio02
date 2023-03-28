/*
link de enunciados
https://docs.google.com/document/d/1kA4muGGnCnD0am3vBB4h7VYamCSH1eB_znUmMKPC2w8/edit

 Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, dni, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada 
y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:


esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona,
 permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, 
 es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

 */

 class Persona {
    constructor(nombre, edad,dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;  
    }

    mostrarGeneracion() {
        let generacion = '';
        let rasgo = '';

        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = 'Silent Generation (Los niños de la posguerra)';
            rasgo = 'Austeridad';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);

        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = 'Baby Boom';
            rasgo = 'Ambición';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = 'Generación X';
            rasgo = 'Obsesión por el éxito';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = 'Generación Y';
            rasgo = 'Frustración';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = 'Generación Z';
            rasgo = 'Irreverencia';
            document.write(`Generación: ${generacion}`);
            document.write(`<br>`);
            document.write(`Rasgo: ${rasgo}`);
        } else {
            document.write("No se puede determinar la generacion de la persona, ingrese otro año de nacimiento.")
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(` <br> ${this.nombre} SI es mayor de edad.`);
        } else {
            document.write(`<br> ${this.nombre} NO es mayor de edad.`);
        }
    }

    mostrarDatos() {
        document.write(`Nombre: ${this.nombre} <br> Edad: ${this.edad} años <br> dni: ${this.dni} <br> Sexo: ${this.sexo} <br> Peso: ${this.peso} Kg <br> Altura: ${this.altura} metros <br> Año de nacimiento: ${this.anioNacimiento} <br>`);
    }

}

let persona = new Persona ( "Joaquin Fuentes", 29, 27423893, "M", 95, 1.78, 1994);

persona.mostrarDatos();
persona.mostrarGeneracion();
persona.esMayorDeEdad();