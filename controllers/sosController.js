const SOSRecord  = require('../models/sosRecords');
const Admin = require('../models/adminSchema');
class sosController{
    // Add a new SOS record
    addSOSRecord = async (req, res) => {
        try {
            // Update admin collection with sos and sos_id
        const sosRecord = new SOSRecord({
            coordinates: req.body.coordinates,
            sos_type: req.body.sos_type,
            current_address: req.body.current_address,
            user_id: req.body.user_id,
            status: true
        });

        const savedSOSRecord = await sosRecord.save();
        const admin = await Admin.findOneAndUpdate({user_id:req.body.user_id}, {
            sos: true,
          }, { new: true });
          if (!admin) {
            return res.status(404).json({ error: 'Admin document not found' });
          }
        return res.status(200).json({ message: 'SOS record added successfully' });
        } catch (err) {
        return res.status(400).json({ message: 'Server error while adding SOS record' });
        }
    }
    // Get all SOS records
    getAllSOSRecordsc= async (req, res) => {
        try {
        const sosRecords = await SOSRecord.find();
        return res.status(200).json(sosRecords);
        } catch (err) {
        return res.status(400).json({ message: 'Server error while fetching SOS records' });
        }
    }
}

module.exports = new sosController();