import { NextResponse } from "next/server"


export const GET=async(req:Request,res:Response)=>{

    return NextResponse.json({message:"Hellow From Server"})
}
export const POST=async()=>{

    return NextResponse.json({message:"Hellow From Server"})
}
export const PUT=async()=>{

    return NextResponse.json({message:"Hellow From Server"})
}
export const DELETE=async()=>{

    return NextResponse.json({message:"Hellow From Server"})
}
export const PATCH=async()=>{

    return NextResponse.json({message:"Hellow From Server"})
}