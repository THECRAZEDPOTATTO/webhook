function sendMessage() {
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/952951181045555270/ulkTPTFugmqNKTXLXjhkXRcKyQMsoDkT866X91CvWua4fc-EMFm2oGuifUeWa8fS7E0L");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "JAVASCRIPT HIT",
        avatar_url: "",
        content: "test"
      }

      request.send(JSON.stringify(params));
    }
    sendMessage()
