// const Models = require('../../../models');
// const server = require('../../../server');

// const option1 = {
//   method: 'GET',
//   url: '/forms/display',
// };

// describe('Test for displayForm Response when there are forms in the table', () => {
//   beforeAll(done => Models.forms.destroy({ truncate: true })
//     .then(() => Models.forms.create({
//       formtitle: 'Test Ques',
//     }).then(() => done())));

//   test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
//     expect(resp.result.code).toBe(200);
//     testdone();
//   }));

//   afterAll(done => Models.forms.destroy({ truncate: true })
//     .then(() => done()));
// });

// describe('Test for displayForm Response when there are no forms in the database', () => {
//   beforeAll(done => Models.forms.destroy({ truncate: true })
//     .then(() => done()));

//   test('Responds with 200 code', testdone => server.inject(option1, (resp) => {
//     expect(resp.result.code).toBe(200);
//     testdone();
//   }));
// });
