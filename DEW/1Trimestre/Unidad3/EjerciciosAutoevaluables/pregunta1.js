function combinarEquipos(array1,array2){
  const equiposCombinados = [...array1, ...array2];

  const equiposUnicos = [...new Set(equiposCombinados)];

  equiposUnicos.sort();

  return equiposUnicos;
}