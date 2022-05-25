const { json } = require('../node_modules/express/lib/response')
const getUsers = (request, response) => {
    const { instance } = request.params
    console.log(instance)
}
const array = new Array();

array[0] = ({
  code: 'mnt',  
  user: 'postgres',
  host: '127.0.0.1',
  database: 'wfmv3_mnt_prod',
  password: 'CIS1secret',
  port: 5423,
});

array[1] = ({
  code: 'kzt',
  user: 'postgres',
  host: '127.0.0.1',
  database: 'wfmv3_kzt_prod',
  password: 'CIS1secret',
  port: 5423,
});

module.exports = array