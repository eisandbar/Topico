export const ensureAuthenticated = (req: any, res: any, next: any) => {
    if (req.user) {
        res.json(JSON.stringify({
            loggedIn: true,
            username: req.user.username
        }))
        return next()
    } else {
        res.json(JSON.stringify({ loggedIn: false }))
    }
}