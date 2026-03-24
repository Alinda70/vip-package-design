import { Router } from 'express';

const router = Router();

// Mock user data
let users = [];

// GET all users
router.get('/', (req, res) => {
    // Authorization check
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json(users);
});

// POST create new user
router.post('/', (req, res) => {
    // Authorization check
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

export default router;