/*************************************

长相思 3.85
time:2023.10.8
赏析 学习 没办法解锁 

*/

var objc = JSON.parse($response.body);

    objc = {
  "code": 200,
  "data": {
    "id": 3792531,
    "vip_expire": "2123-08-25 12:22:45",
    "qq_name": "如梦吟、",
    "phone": "16619941010",
    "head": "https://github.com/2023djash/blog-img/raw/main/CKMC8966.png",
    "had_vip": true,
    "wx_name": "如梦吟、",
    "vip_type": "lifetime",
    "location": "HN省",
    "birthday": "1994年11月24日",
    "hometown": "",
    "is_device_user": false,
    "border": "https:\/\/d.nanxiani.cn\/poetry\/avatar_border\/vip4_v1.pag",
    "email": "",
    "name": "如梦吟、",
    "gender": 1
  },
  "msg": "ok",
  "server": "2",
  "t": "2023-10-08 20:02:26"
}

$done({body : JSON.stringify(objc)});