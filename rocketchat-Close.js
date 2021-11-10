function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
    /** Your code starts below */
  
    /* You must provid the Botpress App Webhook from Rocketchat */
    const rocketWebhook = 'http://rocketchat:3000/api/apps/public/6a8e6b6c-7a25-47c9-94e8-5af5075981ad/incoming'
  
    const axios = require('axios')
  
    /**
     * @title Close a chat session
     * @category Channel Rocket.Chat
     * @author LigeroSmart https://ligerosmart.com
     */
    const callApi = async () => {
      // Preparing the closing message. Uncomment lines 16-21 if you want to use.
      //const message = {
      //  type: 'text',
      //  text: 'Digite o texto de encerramento aqui.',
      //  // Markdown enables rich content, for example links or bold text. Otherwise, content will be displayed as-is
      //  markdown: true
      //}
  
      // Send the message to the user (note the array, since you can send multiple payloads in the same reply). Uncomment line 24 if you want to use.
      //await bp.events.replyToEvent(event, [message])
      const RoomIdAndVisitorToken = event.target.split(':')
  
      // Transfer user
      const { data } = await axios.post(rocketWebhook, {
        sessionId: RoomIdAndVisitorToken[0],
        action: 'close-chat'
      })
    }
  
    // Actions are async, so make sure to return a promise
    return callApi()
  
    /** Your code ends here */
  }  