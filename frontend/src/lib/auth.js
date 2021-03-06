export const setToken = token => {
  window.localStorage.setItem('token', token)
}
export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const logout = () => {
  localStorage.removeItem('token')
}


export const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(window.atob(parts[1]))

}


export const isOwner = id => {

  const userId = getPayload().sub
  console.log('is owner from token', userId)
  console.log('is owner from argument', id)
  return userId === id
}

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}