import { NextResponse } from "next/server";
import User from "../../../lib/models/user";
import connectMongoDB from "../../../lib/mongodb";
import { headers } from "next/headers";
import { CreateToken } from "@/utility/JWTtokenHelper";

// login

export const POST = async (req, res) => {
  try {
    // Parse request body as JSON
    const data = await req.json();

    // Connect to MongoDB
    await connectMongoDB();

    // Find user by phone number
    const user = await User.findOne({
      phone: data.phone,
      password: data.password,
    });

    if (!user) {
      // User not found
      return NextResponse.json({
        status: "error",
        code: "404",
        message: "User not found",
      });
    } else {
      let token = await CreateToken(user["phone"], user["id"]);
      let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/`;
      return NextResponse.json(
        { status: "success", message: "Login Success", data: token, user },
        { status: 200, headers: { "set-cookie": cookieString } }
      );
    }

    // User found, return success response with user data
  } catch (error) {
    // Handle any errors that occur

    return NextResponse.json({
      status: "error",
      code: "500",
      message: "Internal server error",
    });
  }
};

// export const POST = async (req, res) => {
//   try {
//     const data = await req.json();
//     await connectMongoDB();
//     const exiting = await User.findOne({ phone: data?.phone });
//     if (exiting) {
//       return NextResponse.json({
//         status: "fail",
//         code: "400",
//         message: "user already exists",
//       });
//     }

//     await User.create(data);
//     return NextResponse.json({
//       status: "success",
//       code: "200",
//       message: "user created successfully",
//       data: data,
//     });
//   } catch (e) {
//     return NextResponse.json({
//       status: "fail",
//       code: "400",
//       message: e.message,
//     });
//   }
// };

export const GET = async (req, res) => {
  try {
    let headerList = headers();
    let id = headerList.get("id");

    await connectMongoDB();
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({
        status: "fail",
        code: "400",
        message: "user not found",
      });
    } else {
      return NextResponse.json({
        status: "success",
        code: "200",
        data: user,
      });
    }
  } catch (e) {
    return NextResponse.json({
      status: "fail",
      code: "400",
      message: e.message,
    });
  }
};
