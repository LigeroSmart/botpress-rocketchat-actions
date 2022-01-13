function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * @title Get Telephone
   * @category Channel Rocket.Chat
   * @author Marco Tulio Oliveira
   * @param {string} parametro - parâmetro da sessão aqui
   */
  const myAction = async parametro => {
    const userId = event.target
    const botId = event.botId
    const idSessao = parametro
    console.log(idSessao)
    temp.telefone = idSessao.split(':55')[1].split('@')[0]
    console.log(temp)
  }

  return myAction(args.parametro)

  /** Your code ends here */
}
