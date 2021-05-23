require('dotenv').config();

const PORT = process.env.PORT || 3000;
// how to write penAPI Specification: https://apihandyman.io/writing-openapi-swagger-specification-tutorial-part-1-introduction/
module.exports = {
  swagger: '2.0',
  info: {
    description: 'Tasktify API',
    version: '1.0.0',
    title: 'Tasktify API',
    termsOfService: 'http://swagger.io/terms/',
    contact: { email: 'josejavierpaez@hotmail.com' },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: `localhost:${PORT}`,
  basePath: '/api/v1',
  tags: [
    {
      name: 'health',
      description: 'see api health status',
      externalDocs: { description: 'Find out more', url: 'http://swagger.io' },
    },
  ],
  schemes: ['http'],
  paths: {
    '/health': {
      get: {
        tags: ['health'],
        summary: 'see API health status',
        description: '',
        operationId: 'getHealth',
        consumes: ['application/json'],
        produces: ['application/json'],
        responses: { 200: { description: 'API is health' } },
      },
    },
  },
};
