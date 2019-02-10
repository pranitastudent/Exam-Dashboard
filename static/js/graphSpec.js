//Tests to see if the data set is working
describe('Data test', function(){
  it('Shows data is there', function(){
    expect("data/StudentsPerformance.csv").toBeDefined();
  })
});
