window.onload = () => {
  const neuronalNetwork = new brain.NeuralNetwork();

  const data = [
    { input: { "fiebre": 1, "tos": 1, "dolorCabeza": 1, 'escalofrios': 1, 'estornudos': 1, 'dolorGarganta': 1}, output: { "gripe": 1 } },
    { input: { "fiebre": 1, "tos": 1, "dificultadRespiratoria": 1, 'fatiga': 1, 'perdidaOlfato': 1}, output: { "COVID-19": 1 } },
    { input: { "dolorCabeza": 1, "sensibilidadLuz": 1, "nauseas": 1, 'vomito': 1, 'fatiga': 1}, output: { "migrana": 1 } },
    { input: { "sedExcesiva": 1, "hambreExcesiva": 1, "orinaFrecuente": 1, 'malAliento': 1, 'cicatrizacionLenta': 1 }, output: { "diabetes": 1 } },
    { input: { "dolorCabeza": 1, "dificultadRespiratoria": 1, "dolorPecho": 1, 'ansiedad': 1, 'mareos': 1}, output: { "hipertension": 1 } },
    { input: { "tos": 1, "dificultadRespiratoria": 1, "sibilancias": 1, 'fatiga': 1, 'desmayos': 1 }, output: { "asma": 1 } },
    { input: { "dolorArticulaciones": 1, "rigidezArticulaciones": 1, "inflamacionArticulaciones": 1, 'enrojecimiento': 1 }, output: { "artritis": 1 } },
    { input: { "perdidaMemoria": 1, "confusion": 1, "dificultadHablar": 1 }, output: { "enfermedadDeAlzheimer": 1 } },
    { input: { "bultoSenos": 1, "cambioTamañoSenos": 1, "dolorSenos": 1 }, output: { "cancerDeMama": 1 } },
    { input: { "tos": 1, "dolorPecho": 1, "perdidaPeso": 1 }, output: { "cancerDePulmon": 1 } },
  ];

  let lista_preguntas = [
    ['¿Tienes fiebre superior a 38 grados?', 'gripe', 'COVID-19'],
    ['¿Tienes tos seca?', 'gripe', 'COVID-19', 'asma', 'cancerDePulmon'],
    ['¿Tienes dolor de cabeza?', 'gripe', 'migrana', 'hipertension'],
    ['¿Tienes escalofríos?', 'gripe'],
    ['¿Tienes estornudos?', 'gripe'],
    ['¿Tienes dolor de garganta?', 'gripe'],
    ['¿Tienes dificultad para respirar?', 'COVID-19', 'hipertension', 'asma'],
    ['¿Tienes fatiga?', 'COVID-19', 'migrana', 'asma'],
    ['¿Tienes pérdida de olfato?', 'COVID-19'],
    ['¿Tienes sensibilidad a la luz?', 'migrana'],
    ['¿Tienes náuseas?', 'migrana'],
    ['¿Tienes vómito?', 'migrana'],
    ['¿Tienes sed excesiva?', 'diabetes'],
    ['¿Tienes hambre excesiva?', 'diabetes'],
    ['¿Orinas frecuentemente?', 'diabetes'],
    ['¿Tienes mal aliento?', 'diabetes'],
    ['¿Tienes cicatrización lenta?', 'diabetes'],
    ['¿Tienes dolor de pecho?', 'hipertension', 'cancerDePulmon'],
    ['¿Tienes ansiedad?', 'hipertension'],
    ['¿Tienes mareos?', 'hipertension'],
    ['¿Tienes sibilancias?', 'asma'],
    ['¿Tienes desmayos?', 'asma'],
    ['¿Tienes dolor en las articulaciones?', 'artritis'],
    ['¿Tienes rigidez en las articulaciones?', 'artritis'],
    ['¿Tienes inflamación en las articulaciones?', 'artritis'],
    ['¿Tienes enrojecimiento en las articulaciones?', 'artritis'],
    ['¿Tienes pérdida de memoria?', 'enfermedadDeAlzheimer'],
    ['¿Tienes confusión?', 'enfermedadDeAlzheimer'],
    ['¿Tienes dificultad para hablar?', 'enfermedadDeAlzheimer'],
    ['¿Tienes bultos en los senos?', 'cancerDeMama'],
    ['¿Tienes cambios en el tamaño de los senos?', 'cancerDeMama'],
    ['¿Tienes dolor en los senos?', 'cancerDeMama'],
    ['¿Tienes pérdida de peso?', 'cancerDePulmon'],
  ]

  neuronalNetwork.train(data);

  const btnExecute = document.getElementById('execute');
  btnExecute.addEventListener('click', () => {

    let results = neuronalNetwork.run({"fiebre": 1, "tos": 1, "dolorCabeza": 1, 'escalofrios': 1, 'estornudos': 1, 'dolorGarganta': 1});
    let threshold = 0.09; // puedes ajustar este valor según tus necesidades
    let diseases = [];
    for (let disease in results) {
      if (results[disease] > threshold) {
        diseases.push(disease);
      }
    }
    document.getElementById('result').textContent = diseases.join(', ');
  });
}

