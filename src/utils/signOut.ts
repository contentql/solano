export const signOut = async () => {
  try {
    await fetch('/api/users/logout', { method: 'POST' })
  } catch (error) {
    console.log(error)
  }
  window.location.reload()
}
