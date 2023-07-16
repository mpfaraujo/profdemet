import prisma from "@/lib/prisma";
import {  NextResponse } from "next/server"

export async function GET(request:Request){

 const profs = await prisma.professor.findMany()

 return NextResponse.json(profs)

}