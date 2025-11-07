export const authMe = (req, res) => {
    return res.status(200).json(req.user);
};

export default authMe;