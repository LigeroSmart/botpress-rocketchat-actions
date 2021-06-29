function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  const axios = require('axios')

  /**
   * @title Transfer visitor to departament
   * @category Channel Rocket.Chat
   * @author LigeroSmart https://ligerosmart.com
   * @param {string} rocketchatHost Rocket.Chat HOST URL
   * @param {string} departmentId Department ID
   * @param {string} [transferText=] Text to be shown when transfer visitor
   */
  const callApi = async () => {
    // Prepare the message
    const message = {
      type: 'text',
      text: `${args.transferText}`,
      // Markdown enables rich content, for example links or bold text. Otherwise, content will be displayed as-is
      markdown: true
    }

    // Send the message to the user (note the array, since you can send multiple payloads in the same reply)
    await bp.events.replyToEvent(event, [message])
    const RoomIdAndVisitorToken = event.target.split(':')
    const apiURL = `${args.rocketchatHost}/api/v1/livechat/room.transfer`
    // Transfer user
    const { data } = await axios.post(apiURL, {
      rid: RoomIdAndVisitorToken[0],
      token: RoomIdAndVisitorToken[1],
      department: args.departmentId
    })

    // The first element returned is the most recent release
    //const mostRecentRelease = data[0]

    //const latestVersion = mostRecentRelease.name

    // You could also save the complete response in the session, then use it later
    //session.response = data
  }

  // Actions are async, so make sure to return a promise
  return callApi()

  /** Your code ends here */
}
