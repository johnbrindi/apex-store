import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'data', 'products.json')
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const products = JSON.parse(rawData)
        return NextResponse.json({ products })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const newProduct = await req.json()
        const filePath = path.join(process.cwd(), 'data', 'products.json')
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const products = JSON.parse(rawData)

        // Ensure it has an ID
        if (!newProduct.id) {
            newProduct.id = `prod-${Date.now()}`
        }

        // Add boilerplate fields if missing
        newProduct.created_at = newProduct.created_at || new Date().toISOString()
        newProduct.updated_at = new Date().toISOString()

        products.unshift(newProduct)

        fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
        return NextResponse.json({ success: true, product: newProduct })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
