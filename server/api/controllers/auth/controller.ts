import { Request, Response } from 'express'
import axios from 'axios'
import qs from 'qs'

type Method = 'post' | 'get'

interface Options {
  method: Method
  url: string
  headers?: {}
  data?: {}
}

const tokenCallOptions: Options = {
  method: 'post',
  url:
    'https://login.microsoftonline.com/' +
    process.env.tenant +
    '/oauth2/v2.0/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify({
    grant_type: process.env.grant_type,
    client_id: process.env.client_id,
    client_secret: process.env.client_secret,
    scope: process.env.scope,
  }),
}

const getOptionsForUsersListCall = (authToken): Options => {
  return {
    method: 'get',
    url: 'https://graph.microsoft.com/v1.0/users',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
}
// export class Controller {
export default async function getUsers(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const azureResponse = await axios(tokenCallOptions)
    const usersData = await axios(
      getOptionsForUsersListCall(azureResponse.data.access_token)
    )
    return res.status(200).send(usersData.data.value)
  } catch (error) {
    console.error(new Error(error))
    res.status(404).end()
  }
}
// }

// export default new Controller()
