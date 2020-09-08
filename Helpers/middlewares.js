function mustBeInteger (req, res, next) {
    const id = req.params.id

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({message: 'Check id, Integer Please!'})
    } else {
        next()
    }
}

function checkFieldPost (req, res, next) {
    const { name, gender, alias} = req.body

    if (name && gender && alias) {
        next ()
    } else{
        res.status(400).json({message:'Form field not pakem Gaess'})
    }
}

module.exports = {
    mustBeInteger,
    checkFieldPost
}