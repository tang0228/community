import Login from "../components/entry/Login.vue"
import Register from "../components/entry/Register.vue"
import Entry from "../views/Entry/Entry.vue"
import Home from "../views/Home/Home.vue"
import Person from "../components/home/Person.vue"
import PersonFee from "../components/home/PersonFee.vue"
import Message from "../components/home/Message.vue"
import UserList from "../components/admin/UserList.vue"
import FeeList from "../components/admin/FeeList.vue"
import MsgList from "../components/admin/MsgList.vue"
// import store from "../store"

// const roleRoutes = {
//     "admin": ['feeList', 'msgList', 'userList'],
//     'user': ['person', 'message', 'personFee']
// };

// const allowRoutes = roleRoutes[store.state.user.role];

let routes = [
    {
        path: '/entry',
        name: 'entry',
        component: Entry,
        redirect: '/entry/login',
        children: [{
            path: 'login',
            name: 'login',
            component: Login
        }, {
            path: 'register',
            name: 'register',
            component: Register
        }]
    }, {
        path: '/',
        name: 'home',
        component: Home,
        children: [{
            path: 'person',
            name: 'person',
            component: Person,
            meta: {
                title: '个人信息'
            }
        }, {
            path: 'personFee',
            name: 'personFee',
            component: PersonFee,
            meta: {
                title: '个人物业费'
            }
        }, {
            path: 'message',
            name: 'message',
            component: Message,
            meta: {
                title: '留言板'
            }
        }, {
            path: 'userList',
            name: 'userList',
            component: UserList,
            meta: {
                title: '业主列表'
            }
        }, {
            path: 'feeList',
            name: 'feeList',
            component: FeeList,
            meta: {
                title: '费用清单列表'
            }
        }, {
            path: 'msgList',
            name: 'msgList',
            component: MsgList,
            meta: {
                title: '留言列表'
            }
        }]
    }
];

// let allRoutes = [{
//     path: 'person',
//     name: 'person',
//     component: Person,
//     meta: {
//         title: '个人信息'
//     }
// }, {
//     path: 'personFee',
//     name: 'personFee',
//     component: PersonFee,
//     meta: {
//         title: '个人物业费'
//     }
// }, {
//     path: 'message',
//     name: 'message',
//     component: Message,
//     meta: {
//         title: '留言板'
//     }
// }, {
//     path: 'userList',
//     name: 'userList',
//     component: UserList,
//     meta: {
//         title: '业主列表'
//     }
// }, {
//     path: 'feeList',
//     name: 'feeList',
//     component: FeeList,
//     meta: {
//         title: '费用清单列表'
//     }
// }, {
//     path: 'msgList',
//     name: 'msgList',
//     component: MsgList,
//     meta: {
//         title: '留言列表'
//     }
// }];

// const newarr = allRoutes.filter(item => {
//     return allowRoutes.includes(item.name);
// })

// for (let i = 0; i < newarr.length; i++) {
//     baseRoutes[1].children.push(newarr[i]);
// }

export default routes;