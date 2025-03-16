const csvParser = require("csv-parser");
const fs = require("fs");

const expectedColumns = ['product', 'amount'];
console.log("hello")
const processCSVFile = async (filePath) => {
    let parsedData = [];
    let isValid = true;

    const validateRow = (row) => {
        const rowKeys = Object.keys(row);

        // Validate column structure and ensure no spaces in product/amount fields 
        const hasValidColumns = rowKeys.length === expectedColumns.length && expectedColumns.every(col => rowKeys.includes(col));
        const hasNoSpaces = row.product && row.amount && !/\s/.test(row.product) && !/\s/.test(row.amount);

        if (!hasValidColumns || !hasNoSpaces) {
            isValid = false;
        }

        parsedData.push(row);
    };

    try {
        await new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on("data", validateRow)
                .on("end", () => resolve())
                .on("error", reject);
        });

        return { isValid, parsedData };
    } catch (error) {
        return { isValid: false, parsedData: [] };
    }
};

module.exports = { processCSVFile };
