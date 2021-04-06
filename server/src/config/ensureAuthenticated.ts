export const ensureAuthenticated = (req: any, res: any, next: any) => {
    if (req.isAuthenticated) {
        res.json(JSON.stringify({
            loggedIn: true,
            username: req.user.username
        }))
    } else {
        res.json(JSON.stringify({ loggedIn: false }))
    }
    next()
}