import User from '../model/user.js';
import bcrypt from 'bcryptjs';

export const signUp = async(req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(405).json({message: "Parameter Missing!"});
        }

        const hash = await bcrypt.hash(password, 12);

        const user = await User.create({
            username,
            password: hash
        });

        delete user._doc.password;
        return res.status(200).json({message: "Account Created", data: user});
    } catch(err) {
        return res.status(404).json({message: error.message});
    }
}

export const signIn = async(req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password) {
            return res.status(422).json({message: "Parameter Missing!"});
        }

        const user = await User.findOne({username: username});

        if (!user) {
            return res.status(403).json({message: 'Invalid Username or Password!'});
        }

        const matched = await bcrypt.compare(password, user.password);

        if (!matched) {
            return res.status(403).json({message: 'Invalid Username or Password!'});
        }

        delete user._doc.password;
        return res.status(200).json({message: "Login Successfully", data: user});

    } catch(error) {
        return res.status(404).json({message: error.message});
    }
}