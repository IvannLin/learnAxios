import axios from 'axios'
export function request(config) {
    //第一种封装方式
    // axios({
    //     url:config
    // }).then(res=>{
    //     success(res);
    //
    // }).catch(err=>{
    //     fail(err)
    // })

    //第二种方式
    //axios.defaults.baseURL='http://localhost:9999/student/student';
    // axios(config.url).then(
    //     res=>{
    //         config.success(res);
    //     }
    // ).catch(err=>{
    //     config.fail(err);
    // })


    //第三种方式
    // let instance = axios.create({
    //     baseURL: 'https://localhost:9999/student/student',
    //     timeout: 1000,
    // });
    // return new Promise((resolve, reject) =>{
    //     instance(config).then(res=>{
    //         resolve(res);
    //     }).catch(err=>{
    //         reject(err);
    //     })
    // })

    //第四种方式
    let instance = axios.create({
            baseURL: 'https://localhost:9999/student/student',
            timeout: 1000,
        });
    return instance(config);
}