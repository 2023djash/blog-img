/*******************************

脚本功能：mg中文版——解锁次数
软件版本：1.3.1
脚本作者：彭于晏💞
更新时间：2023-10-06
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️

*******************************/

var body = $response.body.replace(/msg_count_limit":\d+/g,'msg_count_limit":1')
.replace(/task_num":\d+/g,'task_num":888888888')
.replace(/timestamp":\d+/g,'timestamp":2999999999')
.replace(/use_num":\d/g,'use_num":99999999999')
$done({ body });
