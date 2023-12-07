import { connectDB } from "config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
connectDB();

// export async function GET(request: NextRequest) {
//     return NextResponse.json({
//         message: "users/register api accessed with get method",
//     });
// }
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(reqBody.password, salt);
        reqBody.password = hashedPassword;

        //Create new user
        

    } catch (error:any) {
        return NextResponse.json({
            message: error.message
        }, {status: 500});
    }
    
}

// export async function PUT(request: NextRequest) {
//     return NextResponse.json({
//         message: "users/register api accessed with put method",
//     });
// }