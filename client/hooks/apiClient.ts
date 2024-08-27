import request from 'superagent'

const apiPath = '/api/v1'

export async function get(stub: string) {
  const res = await request.get(apiPath + stub)
  return res.body
}
