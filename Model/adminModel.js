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
    },
    profile: {
        public_id: {
            type: String,
        },
        secure_url: {
            type: String
        }
    },
    details: {
        department: {
            type: String,
            required: true
        },
        clas: {
            type: String,
            required: true
        }
    }
})

adminScheama.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    const admin = this
    console.log(admin.password)
    admin.password = await bcrypt.hash(admin.password, 10)
})

adminScheama.methods.generateJwtToken = async function () {
    return jwt.sign({ id: this._id, email: this.email }, process.env.SECRET, { expiresIn: '24h' })
}


adminScheama.methods.comparedPassword = async function (password) {
    try {
        return bcrypt.compare(password, this.password)
    } catch (error) {
        console.log(' Error occured in comparing the password >', error)
    }
}

const Admin = model('Admins', adminScheama);
export default Admin;