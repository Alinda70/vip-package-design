import express from 'express';

const router = express.Router();

let userBalances = {
    'kelly70': 1767934.50,
};

let transactionHistory: Array<{ from: string; to: string; amount: number; date: string }> = [];

router.post('/transfer', (req, res) => {
    const { from, to, amount } = req.body;

    if (userBalances[from] >= amount) {
        userBalances[from] -= amount;
        userBalances[to] = (userBalances[to] || 0) + amount;

        transactionHistory.push({
            from,
            to,
            amount,
            date: new Date().toISOString(),
        });

        return res.status(200).send({ message: 'Transfer successful', newBalance: userBalances[from] });
    } else {
        return res.status(400).send({ message: 'Insufficient funds' });
    }
});

router.get('/balance', (req, res) => {
    const { user } = req.query;

    if (userBalances[user]) {
        return res.status(200).send({ balance: userBalances[user] });
    } else {
        return res.status(404).send({ message: 'User not found' });
    }
});

router.get('/history', (req, res) => {
    return res.status(200).send({ history: transactionHistory });
});

export const performTransfer = (from: string, to: string, amount: number) => {
    // Logic to perform transfer.
};

export const getUserBalance = (user: string) => {
    return userBalances[user] || 0;
};

export default router;