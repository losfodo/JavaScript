const schedule = require('node-schedule')//faz require do schedule

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {//executa 5 em 5 segundos a 12 horas *ignora o dia do mes * 2executa na terça feira ou 0domingo 1segunda...
    console.log('Executando Tarefa 1!', new Date().getSeconds())//saida executar 5 em 5 segundos a tarefa
})

setTimeout(function () {//setTimeout:temporaliaador de tempo
    tarefa1.cancel()//cancelando tarefa de pois de 20 segundos
    console.log('Cancelando Tarefa 1!')
}, 20000)//20 segundos

// setImmediate:faz setout com os valores no zero
// setInterval:dispara de tempos em tempos

const regra = new schedule.RecurrenceRule()//regra 
regra.dayOfWeek = [new schedule.Range(1, 5)]//(1segunda a sexta5)
regra.hour = 12//regra hora 12 horas
regra.second = 30//sempre q der 30 ele executa essa regra

const tarefa2 = schedule.scheduleJob(regra, function () {//scheduleJob execurta tempo em tempos
    console.log('Executando Tarefa 2!', new Date().getSeconds())//saida tarefa 2 em 30n segundos
})

/*temporarizador de horarios agendamento... */