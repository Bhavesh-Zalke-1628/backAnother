import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const adminSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    profile: {
        public_id: {
            type: String
        },
        secure_url: {
            type: String
        }
    },
    department: {
        type: String
    },
    class: {
        type: String
    }
})

adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next()
})

adminSchema.methods.generateToken = async function () {
    return jwt.sign(
        {
            id: this._id,
            email: this.email,
            name: this.name
        },
        process.env.SECRET,
        {
            expiresIn: '24h'
        }
    )
}

adminSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


const Admin = new model('Admin', adminSchema)

export default Admin;
