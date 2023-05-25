const fakeAuthProvider = {
  isAuthenticated: false,
  roles: ["user"],
  signin() {
    fakeAuthProvider.isAuthenticated = true
  },
  signout() {
    fakeAuthProvider.isAuthenticated = false
  },
}

export { fakeAuthProvider }
