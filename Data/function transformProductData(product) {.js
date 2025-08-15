function transformProductData(product) {
    const transformedProduct = {};

    for (const key in product) {
        if (Object.hasOwnProperty.call(product, key)) {
            let value = product[key];

            // Rule 3: "description" is a special property
            if (key === "description") {
                transformedProduct[key] = value;
                continue;
            }

            // Rule 1: All values must be lowercase.
            if (typeof value === 'string') {
                value = value.toLowerCase();

                // Rule 2: Values may contain only alphanumeric characters, underscores or dots.
                // All other characters must be replaced with underscores.
                value = value.replace(/[^a-z0-9_.]/g, '_');

                // Rule 5: Convert imperial units into metric (distance in meters)
                if (key === "size" && value.includes("ft")) {
                    const feetValue = parseFloat(value);
                    if (!isNaN(feetValue)) {
                        value = (feetValue * 0.3048).toFixed(2) + "m"; // Convert feet to meters, keep 2 decimal places
                    }
                }

                // Rule 4: If any value has more than 10 characters, trim it at 10 characters and add three trailing dots.
                if (value.length > 10) {
                    value = value.substring(0, 7) + "..."; // Trim to 7 + 3 dots = 10 characters total
                }
            }

            transformedProduct[key] = value;
        }
    }
    return transformedProduct;
}

// Example Usage:
const originalProduct = {"sku": "VA-43", "size": "5ft", "name": "Blue Sky", "description": "A great product!"};
const transformedProduct = transformProductData(originalProduct);
console.log(transformedProduct);