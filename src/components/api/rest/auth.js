import { makeRequest } from '../requests'
import env from '../../../../env'

export const getAccessTokenByPersonalCode = (code, clientId = env.clientId, clientSecret = env.clientSecret) => makeRequest({
  url: 'https://webdev-api.loftschool.com/github',
  method: 'post',
  data: {
    clientId,
    clientSecret,
    code
  }
})

export const sendUserToAuthPage = () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'
  const ghAuthUrl = `${githubAuthApi}?client_id=${env.clientId}&scope=repo%20user`
  window.location.href = ghAuthUrl
}
