import { NextResponse } from 'next/server';

// Mock user data
let users: Array<{ id: number; name: string; email: string }> = [];

// Authorization check helper
function isAuthenticated(): boolean {
    // TODO: Implement proper authentication logic
    // For now, returning true as placeholder
    return true;
}

// GET all users
export async function GET() {
    // Authorization check
    if (!isAuthenticated()) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json(users);
}

// POST create new user
export async function POST(request: Request) {
    // Authorization check
    if (!isAuthenticated()) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { name, email } = await request.json();

        if (!name || !email) {
            return NextResponse.json(
                { message: 'Name and email are required' },
                { status: 400 }
            );
        }

        const newUser = { id: users.length + 1, name, email };
        users.push(newUser);

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: 'Invalid request body' },
            { status: 400 }
        );
    }
}
