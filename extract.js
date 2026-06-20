const fs = require('fs')

// We will read mock.ts, evaluate it to get the products array by isolating it,
// and write it to products.json.
const content = fs.readFileSync('data/mock.ts', 'utf8')

// The products array export looks like: export const products: Product[] = [...]
// Wait, we can't easily eval TypeScript types.
// A simpler robust way: replace the TS syntax with valid JSON.
const match = content.match(/export const products:\s*Product\[\]\s*=\s*(\[[\s\S]*?\n\])\s*;?\s*(\n|$)/)

if (match && match[1]) {
    try {
        // Evaluating the JS array literal from the match. We wrap it safely
        let arrayLiteral = match[1]

        // Replace unquoted keys using regex to make it evaluatable if needed, 
        // but `eval` handles standard JS objects.
        let products = eval(`(${arrayLiteral})`)

        fs.writeFileSync('data/products.json', JSON.stringify(products, null, 2))

        // Now replace the content in mock.ts
        const newContent = content.replace(
            match[0],
            `export const products: Product[] = require('./products.json')\n\n`
        )

        fs.writeFileSync('data/mock.ts', newContent)
        console.log("Successfully extracted products to data/products.json and updated data/mock.ts")
    } catch (err) {
        console.error("Evaluation failed", err)
    }
} else {
    console.error("Could not find the products block in mock.ts")
}
