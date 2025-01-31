import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(phone, id) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const Payload = { phone: phone, id: id };
  let token = await new SignJWT(Payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secret);
  return token;
}
// verify token
export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
