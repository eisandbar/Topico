export const ensureAuthenticated = (req, res, next) => {
        if(req.isAuthenticated){
            res.json(JSON.stringify({loggedIn : true}))
        } else {
            res.json(JSON.stringify({loggedIn : false}))
        }
        next()
    }