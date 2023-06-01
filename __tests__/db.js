//tests for database
const Cluster_test = require('../server/models/test_models/cluster_test');
const Session_test = require('../server/models/test_models/session_test');
const User_test = require('../server/models/test_models/user_test');


describe('Cluster model unit tests', () => {

  beforeAll((done) =>{
    Cluster_test.deleteMany({});
    done();
  });

  describe('sync', () => {
    it('adds valid clusters to Cluster model', () =>{
      const newCluster = {
        userId: '111',
        clusterName: 'cluster name',
        url: 'clusterurl'
      }
      const result = Cluster_test.create(newCluster);
      expect(result).not.toBeInstanceOf(Error);
    })
  });

  it('does not add invalid clusters to Cluster model', () =>{
    const newCluster = {
      userId: 2,
      clusterName: null,
      url: 22,
    }
    const result = Cluster_test.create(newCluster);
    expect(result).toBeInstanceOf(Error);
  });

})

describe('Session model unit tests', () => {

  beforeAll((done) =>{
    Session_test.deleteMany({});
    done();
  });

  describe('sync', () => {
    it('adds valid session to Session model', () =>{
      const newSession = {
        cookieId: 2
      }
      const result = Session_test.create(newSession);
      expect(result).not.toBeInstanceOf(Error);
    })
  });

  it('does not allow duplicate cookieIds', () =>{
    const newSession = {
      cookieId: 2
    }
    const addOne = Session_test.create(newSession);
    const result = Session_test.create(newSession);
    expect(result).toBeInstanceOf(Error);
  });
})


describe('User model unit tests', () => {

  beforeAll((done) =>{
    User_test.deleteMany({});
    done();
  });

  describe('sync', () => {
    it('adds user to User model', () =>{
      const newUser = {
        username: 'testingUser',
        password: 'pass'
      };
      const result = Session_test.create(newUser);
      expect(result).not.toBeInstanceOf(Error);
    })
    it('hashes user password', () =>{
      const newUser = {
        username: 'testingUser',
        password: 'pass'
      };
      const create = Session_test.create(newUser);
      const hashed = Session_test.findOne({username: 'testingUser'});
      expect(hashed).not.toEqual(newUser.password);
    });
  });
})

