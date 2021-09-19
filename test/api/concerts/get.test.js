const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const Concert = require('../../../models/concerts.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/concerts', () => {
    before(async () => {
        const testConcert = new Concert({
            _id: '5d9f1140f10a81216cfd4408',
            performer: '50cent',
            genre: 'Rap',
            price: 10,
            day: 5
        });
        await testConcert.save();

        const testConcertTwo = new Concert({
            _id: '5d9f1140f10a81216cfd4410',
            performer: 'Eminem',
            genre: 'Rap',
            price: 30,
            day: 4
        });
        await testConcertTwo.save();
    });

    it('/ should return all concerts (G-1)', async () => {
        const res = await request(server).get('/api/concerts');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(2);
    });

    it('/ should return correct concert by :id (G-2)', async () => {
        const res = await request(server).get('/api/concerts/5d9f1140f10a81216cfd4408');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
        expect(res.body.performer).to.be.equal('50cent');
    });

    it('/ should return correct concert by :performer (G-3)', async () => {
        const res = await request(server).get('/api/concerts/performer/50cent');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
        expect(res.body.genre).to.be.equal('Rap');
    });

    it('/ should return correct concert by :genre (G-4)', async () => {
        const res = await request(server).get('/api/concerts/genre/Rap');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
        expect(res.body.performer).to.be.equal('50cent');
    });

    it('/ should return correct concerts by :day (G-5)', async () => {
        const res = await request(server).get('/api/concerts/price/day/5');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
        expect(res.body.performer).to.be.equal('50cent');
    });

    it('/ should return correct concert by :price (G-6)', async () => {
        const res = await request(server).get('/api/concerts/price/4/20');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
        expect(res.body.performer).to.be.equal('50cent');
    });

    after(async () => {
        await Concert.deleteMany();
      });
}); 