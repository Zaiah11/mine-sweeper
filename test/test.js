var expect = require('chai').expect;
var request = require('request');

// Start the server before testing
const server = require('../../server').server;
const PORT = require('../../server').PORT;
const url = 'http://localhost:' + PORT;

describe('Mine Sweeper', () => {
    describe('/new/map endpoint', () => {
        const query = {
            url: url + '/new/map',
            body: {
                size: [12, 25]
            },
            json: true
        }
        it('should respond to a post request', (done) => {
            request.post(query, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.be.an('array')
                done();
            });
        });
    });
});

// Stop the server after testing
after(done => {
    server.close(done);
});
