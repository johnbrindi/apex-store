const fs = require('fs')

const filePath = './data/mock.ts'
let content = fs.readFileSync(filePath, 'utf8')

// Replace all price values between 25 and 100 with random values between 25 and 30
// Prices appear as: "price": 89.9, or "price": 52.9,
// We want to replace them with values like 25.00, 26.50, 27.90, 28.50, 29.90, 30.00

const validPrices = [25.00, 25.50, 25.99, 26.00, 26.50, 26.99, 27.00, 27.50, 27.99, 28.00, 28.50, 28.99, 29.00, 29.50, 29.99, 30.00]

let count = 0
content = content.replace(/"price": (\d+\.?\d*),/g, (match, p1) => {
    const randomPrice = validPrices[count % validPrices.length]
    count++
    return `"price": ${randomPrice},`
})

// Also update compare_at_price to be slightly higher (35-45 range) where it's not null
content = content.replace(/"compare_at_price": (\d+\.?\d*),/g, (match, p1) => {
    const comparePrice = (35 + Math.floor(Math.random() * 10) + Math.random()).toFixed(2)
    return `"compare_at_price": ${comparePrice},`
})

fs.writeFileSync(filePath, content, 'utf8')
console.log(`Updated ${count} prices in mock.ts`)
