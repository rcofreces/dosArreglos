let nombresArreglo: (string | null)[] = new Array(2);
let númerosArreglo: number[] = new Array(3);
let índiceNombres: number;
let índiceNúmeros: number;

for (índiceNombres = 0; índiceNombres < 2; índiceNombres++) {
  nombresArreglo[índiceNombres] = prompt(
    `Ingrese el nombre que irá en la posición ${índiceNombres}`
  );
}

for (índiceNúmeros = 0; índiceNúmeros < 3; índiceNúmeros++) {
  númerosArreglo[índiceNúmeros] = Number(
    prompt(`Ingrese el número que irá en la posición ${índiceNúmeros}`)
  );
}

for (índiceNombres = 0; índiceNombres < 2; índiceNombres++) {
  console.log(
    `El nombre de la posición ${índiceNombres} es: ${nombresArreglo[índiceNombres]}`
  );
}

for (índiceNúmeros = 0; índiceNúmeros < 3; índiceNúmeros++) {
  console.log(
    `El número de la posición ${índiceNúmeros} es: ${númerosArreglo[índiceNúmeros]}`
  );
}
