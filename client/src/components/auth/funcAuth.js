/* 
    Template functions for signin/ signout
*/

export const funcAuth = {
    isAuthenticated: false,
    signin(cb) {
      funcAuth.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      funcAuth.isAuthenticated = false
      setTimeout(cb, 100)
    }
}

