const path = require("path");
const {processCSVFile} =require("./processCSVFile")
const FILE_DIRECTORY = process.env.FILE_DIRECTORY ;

const calculate = async (req, res) => {
    const { file, product } = req.body;
    const filePath = path.join(FILE_DIRECTORY, file);
    const extension = path.extname(file);

    try {
        const { isValid, parsedData } = await processCSVFile(filePath);
        if (isValid) {
            let sum = 0;
            for (let i = 0; i < parsedData.length; i++) {
                if (parsedData[i].product === product) {
                    sum += Number(parsedData[i].amount);
                }
            } 
            if (extension === '.yml' && sum === 0) {
                return res.send({file,
                    error: "Input file not in CSV format."
                });
            }
            res.status(200).send({ file,sum});
        }
       else {
            res.status(400).send({ file,
                error: "Input file not in CSV format."
            });
        }
    } catch (err) {
        res.status(500).send({ error: 'Error checking CSV format.' });
    }
};
module.exports = { calculate };