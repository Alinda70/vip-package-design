import { NextResponse } from 'next/server';

let userBalances: Record<string, number> = {
    'kelly70': 1767934.50,
};

let transactionHistory: Array<{ from: string; to: string; amount: number; date: string }> = [];

// POST transfer
export async function POST(request: Request) {
    try {
        const { from, to, amount } = await request.json();

        if (!from || !to || !amount) {
            return NextResponse.json(
                { message: 'Missing required fields: from, to, amount' },
                { status: 400 }
            );
        }

        if (userBalances[from] >= amount) {
            userBalances[from] -= amount;
            userBalances[to] = (userBalances[to] || 0) + amount;

            transactionHistory.push({
                from,
                to,
                amount,
                date: new Date().toISOString(),
            });

            return NextResponse.json(
                { message: 'Transfer successful', newBalance: userBalances[from] },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { message: 'Insufficient funds' },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: 'Invalid request body' },
            { status: 400 }
        );
    }
}

// GET balance
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const user = searchParams.get('user');

    if (!user) {
        return NextResponse.json(
            { message: 'User parameter is required' },
            { status: 400 }
        );
    }

    if (userBalances[user] !== undefined) {
        return NextResponse.json(
            { balance: userBalances[user] },
            { status: 200 }
        );
    } else {
        return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
        );
    }
}

// Helper functions for use in other parts of the application
export const performTransfer = (from: string, to: string, amount: number) => {
    if (userBalances[from] >= amount) {
        userBalances[from] -= amount;
        userBalances[to] = (userBalances[to] || 0) + amount;
        transactionHistory.push({
            from,
            to,
            amount,
            date: new Date().toISOString(),
        });
        return true;
    }
    return false;
};

export const getUserBalance = (user: string) => {
    return userBalances[user] || 0;
};

export const getTransactionHistory = () => {
    return transactionHistory;
};
