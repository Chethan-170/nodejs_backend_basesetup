import { asyncHandler } from "../utils/asyncHandler.js";


const loginUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json({ message: 'ok' })
})

export { loginUser };