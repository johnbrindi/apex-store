import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const id = params.id
        const updates = await req.json()
        const filePath = path.join(process.cwd(), 'data', 'products.json')
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const products = JSON.parse(rawData)

        const index = products.findIndex((p: any) => p.id === id)
        if (index === -1) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 })
        }

        products[index] = { ...products[index], ...updates, updated_at: new Date().toISOString() }

        fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
        return NextResponse.json({ success: true, product: products[index] })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const id = params.id
        const filePath = path.join(process.cwd(), 'data', 'products.json')
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const products = JSON.parse(rawData)

        const newProducts = products.filter((p: any) => p.id !== id)

        if (newProducts.length === products.length) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 })
        }

        fs.writeFileSync(filePath, JSON.stringify(newProducts, null, 2))
        return NextResponse.json({ success: true })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
