/*************************************

长相思 3.85
time:2023.10.8
赏析 学习 没办法解锁 
[rewrite_local]

[mitm]
hostname = poetry.nanxiani.cn

*/

var objc = JSON.parse($response.body);

    objc = {
  "code": 200,
  "data": {
    "id": 3792531,
    "vip_expire": "2123-08-25 12:22:45",
    "qq_name": "Rain",
    "phone": "18888888888",
    "head": "https://github.com/2023djash/blog-img/raw/main/CKMC8966.png",
    "had_vip": true,
    "wx_name": "Rain",
    "vip_type": "lifetime",
    "location": "TG省",
    "birthday": "1999年10 月10 日",
    "hometown": "",
    "is_device_user": false,
    "border": "https:\/\/d.nanxiani.cn\/poetry\/avatar_border\/vip4_v1.pag",
    "email": "",
    "name": "Rain",
    "gender": 1
  },
  "msg": "ok",
  "server": "2",
  "t": "2023-10-08 20:02:26"
}

$done({body : JSON.stringify(objc)});
