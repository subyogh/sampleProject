const User = require('../model/user_model');

class UserService {
    async createUser(userData) {
        return await User.create(userData);
    }

    async getAllUsers() {
        return await User.find();
    }

    async getUserById(id) {
        return await User.findById(id);
    }

    async updateUser(id, updateData) {
        return await User.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }

    async getAllUsersWithPagination(page, limit) {
        const skip = (page - 1) * limit;
        console.log(skip)
        const users = await User.find().skip(skip).limit(limit);
        const total = await User.countDocuments();
        return {
            users,
            total,
            page,
            pages: Math.ceil(total / limit)
        };
    }
}

module.exports = new UserService();