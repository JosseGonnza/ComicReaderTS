import swaggerJSDoc from "swagger-jsdoc";
import path from "node:path";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UserComic API Molona',
            version: '1.0.0'
        },
    },
    apis:[`${path.join(__dirname, './router/*')}`]
}

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;