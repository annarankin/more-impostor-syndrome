(async () => {
  const actionsClient = require('@actions/http-client')
  const client = new actionsClient.HttpClient()
  const res = await client.getJson('https://api.github.com/repos/annarankin/more-impostor-syndrome', {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'annarankin'
  })
  console.log(res)
})()