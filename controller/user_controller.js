const userService = require('../servies/user_servies');

class UserController {
    async register(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const users = await userService.getAllUsers();
            console.log("api hite hit");
           res.status(200).json(users);

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getOne(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const user = await userService.deleteUser(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllUserWithPagination(req, res) {          
        try {
            const { page = 1, limit = 10 } = req.body;
            const users = await userService.getAllUsersWithPagination(page, limit);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();