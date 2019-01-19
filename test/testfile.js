const app = require('../app.js');
var assert = require('assert');
const chai =  require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
//test case for product of two numbers
describe('Product of two numbers',function(){
    it('no parameter are passed as numbers',function(done) {
        chai.request(app).get(`/product/a1/a2`).end(function(err,res){
                expect(res).to.have.status(400);
                expect(res.text).to.equal(`Bad Request`);
                done();
                })
        })
    it('product of 2 numbers passed in arguments',function(done) {
        chai.request(app).get(`/product/5/6`).end(function(err,res){
                expect(res).to.have.status(200);
                expect(res.text).to.equal(`30`);
                done();
            })
        })
})

//test case for writes them in to the disk
describe('Writing content into the local file',function(){
    it('when no inputvalue is passed to the argument',function(done) {
        chai.request(app).get(`/fileContent`).end(function(err,res){
               expect(res).to.have.status(404);
               expect(res.text).to.equal(`Route Not Found`);
               done();
             })
        })
        it('Writing content to the local file',function(done) {
          chai.request(app).get('/fileContent/kowsalya').end(function(err,res){
              expect(res.status).to.equal(200);
              expect(res.text).to.equal(`kowsalya`);
              done();
           })
      })
});

//testcase for  first non-repeating character in the String.
describe('finding first non-repetitive characters',function(){
    it('when no stringvalue is passed to the argument ',function(done) {
        chai.request(app).get(`/stringvalue`).end(function(err,res){
               expect(res).to.have.status(404);
               expect(res.text).to.equal(`Route Not Found`);
               done();
             })
        })
    it('first non-repetitive character',function(done) {
        chai.request(app).get(`/stringvalue/asdfdfa`).end(function(err,res){
                expect(res.status).to.equal(200);
                expect(res.text).to.equal(`s`);
                done();
                })
        })
});
