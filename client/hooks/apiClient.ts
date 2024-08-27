import request from 'superagent'

const apiPath = '/api/v1'

export async function get(stub: string) {
  const res = await request.get(apiPath + stub)
  return res.body
}

export async function post(stub: string) {
  const res = await request.post(apiPath + stub)
  return res.body
}

export async function patch(stub: string) {
  const res = await request.patch(apiPath + stub)
  return res.body
}
