function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Check if it is businnes hour or not
   * @title IsBusinessTime
   * @category Time
   * @author Ronaldo Richieri
   */
  const isbusinesstime = async (name, value) => {
    const moment = require('moment')
    moment.locale('pt-br')

    var feriados = []
    //Natal
    feriados.push('2021-12-25')
    feriados.push('2021-12-31')
    feriados.push('2022-01-01')
    //feriados.push('2021-10-20')
    //feriados.push('2021-10-19')

    var now = new Date()
    var nowmm = moment(now) // this is a moment object
    const dia = nowmm.format('dddd')
    const data = nowmm.format('YYYY-MM-DD')
    console.log(`Feriados ${feriados.length}`)
    for (var i = 0; i < feriados.length; i++) {
      console.log(`${data} ? ${feriados[i]}`)
      if (data == feriados[i]) {
        console.log('Feriado')
        temp.Expediente = 'N'
        return
      }
    }

    const hora = nowmm.format('H')

    switch (dia) {
      case 'Sábado':
      case 'Domingo':
        console.log('Não útil')
        temp.Expediente = 'N'
        return
        break
      default:
        console.log(`Dia útil`)
        // verifica horário
        if (hora <= 8 || hora >= 17) {
          console.log('Fora do horário comercial')
          temp.Expediente = 'N'
          return
        } else {
          temp.Expediente = 'S'
          return
        }
    }
    //console.log('horário de atendimento')
  }

  return isbusinesstime(args.name, args.value)

  /** Your code ends here */
}
