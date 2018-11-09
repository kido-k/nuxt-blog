import Cookies from 'universal-cookie'

export default ({ req, store }) => {
  if (ProcessingInstruction.browser) {
    return
  }
  const cookies = new Cookies(req.headers.cookie)
  const user = cookies.get('user')

  if (user && user.id) {
    const { id, likes } = user
    store.commit('setUser', { user: { id, likes } })
  }
}