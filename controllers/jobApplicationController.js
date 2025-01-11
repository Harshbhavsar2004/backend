import JobApplication from '../models/JobApplication.js';

const submitApplication = async (req, res) => {
    const { applicantName, email, phone, address } = req.body;
    console.log(req.body);
    

    if (!applicantName || !email || !phone || !address) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        const newJobApplication = new JobApplication({
            name: applicantName,
            email,
            phone,
            address,
        });

        await newJobApplication.save();
        res.status(201).json({
            message: "Application submitted successfully",
            data: newJobApplication,
        });
    } catch (error) {
        console.error("Failed to submit application:", error);
        res.status(500).json({ message: "Failed to submit application", error: error.message });
    }
};

const getJobApplications = async (req, res) => {
    try {
        const applications = await JobApplication.find();
        res.status(200).json(applications);
    } catch (error) {
        console.error("Error fetching applications:", error);
        res.status(500).json({ message: "Failed to fetch applications", error: error.message });
    }
};

export { submitApplication , getJobApplications}; 