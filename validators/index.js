exports.createPostValidator = (req, res, next) =>{
    //title validation
    req.check('title', "Write a title").notEmpty();
    req.check('title', "Title must be between 4 to 150 charactres").isLength({
        min: 4,
        max: 150
    });

    //body validation
    req.check('title', "Write a body").notEmpty();
    req.check('title', "Title must be between 4 to 2000 charactres").isLength({
        min: 4,
        max: 2000
    });

    //check for error
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if(errors){
        const firstError = errors.map((error)=> error.msg)[0];
        return res.status(400).json({error: firstError});
    }

    //proceed to next middleware
    next();

}