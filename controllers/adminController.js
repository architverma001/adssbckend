const Admin = require('../models/adminSchema');

class adminController {

    // Add a new admin
    addAdmin = async (req, res) => {
        try {
        const admin = new Admin(
            {
            user_id: req.body.user_id,
            password: req.body.password,
        }
        );
    
        const savedAdmin = await admin.save();
        return res.status(200).json({ message: 'Admin added successfully' });
        } catch (err) {
        return res.status(400).json({ message: 'Server error while adding admin' });
        }
    }
    // Get all admins
    
    // Get admin by ID
    getAdminById = async (req, res) => {
        try {
        const admin = await Admin.findOne({ user_id: req.query.user_id });
        return res.status(200).json(admin);
        } catch (err) {
        return res.status(400).json({ message: 'Server error while fetching admin' });
        }
    }
    // Update admin by ID
    updateAdminFalse = async (req, res) => {
        try {
        // find by user_id and update sos value 
        const updatedAdmin = await Admin.findOneAndUpdate({ user_id: req.query.user_id }, {
            sos: false,
        }, { new: true });
        return res.status(200).json({ message: 'Admin updated successfully' });
        } catch (err) {
        return res.status(400).json({ message: 'Server error while updating admin' });
        }
    }
    // Delete admin by ID
    deleteAdminById = async (req, res) => {
        try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'Admin deleted successfully' });
        } catch (err) {
        return res.status(400).json({ message: 'Server error while deleting admin' });
        }
    }
}

module.exports = new adminController();