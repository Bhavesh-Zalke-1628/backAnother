
import { Schema, model } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const adminScheama = new Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        select: false
    },
    profile: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String
        }
    }
})

adminScheama.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    const admin = this
    const saltValue = bcrypt.genSalt(10)
    admin.password = await bcrypt.hash(admin.password, saltValue)
})


adminScheama.methods.generateJwtToken = async function () {
    return jwt.sign(
        { id: this._id, email: this._email },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}



const Admin = model('Admins', adminScheama);
export default Admin;