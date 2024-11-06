import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        // Get the request body
        const body = await request.json()

        // Forward the request to your API
        const response = await fetch('https://helpdesk.qodeinvest.com/api/v1/ticket', {
            method: 'POST',
            headers: {
                'Authorization': 'bearer J9V49RIOFS3WN2VPYHHKR3WS8UT8VUJMMJPIXSK5OXK6CLMHPNHGYNJL0ZSC7VNC',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        // Get the response data
        const data = await response.json()

        // Return the response
        return NextResponse.json(data, { status: response.status })
    } catch (error) {
        // Handle errors
        return NextResponse.json(
            { error: 'Failed to raise ticket' },
            { status: 500 }
        )
    }
}

// Optionally handle OPTIONS requests for CORS
export async function OPTIONS(request) {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}