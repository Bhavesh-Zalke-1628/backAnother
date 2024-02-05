const adminDetails = async (req, res, next) => {
    const { department, clas } = req.body
    // console.log(id)
    // const {}
    console.log(department, clas)
    try {
        if (!department || !clas) {
            return next(new Apperror("All fields are requrired", 400))
        }
        res.status(200).json({
            success: true,
            msg: "Admin details"
        })
    } catch (error) {
        console.log(error)
    }
}


export {
    adminDetails
}