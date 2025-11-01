export const authMe = (req, res) => {
    return res.sendStatus(200).json({ message: "OK" })
};

export default authMe;