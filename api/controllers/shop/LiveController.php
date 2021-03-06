<?php

namespace app\controllers\shop;


use yii;
use yii\web\ShopController;
use app\models\shop\LiveModel;

/**
 * 仓库
 * @author  wmy
 * Class StorehouseController
 * @package app\controllers\merchant\storehouse
 */
class LiveController extends ShopController
{

    public $enableCsrfValidation = false; //禁用CSRF令牌验证，可以在基类中设置

    public function behaviors() {
        return [
            'token' => [
                'class' => 'yii\filters\ShopFilter', //调用过滤器
//                'only' => ['single'],//指定控制器应用到哪些动作
                'except' => ['list'],//指定控制器不应用到哪些动作
            ]
        ];
    }

    /**
     * 查询列表
     * @return array
     * @throws yii\db\Exception
     */
    public function actionList()
    {
        if (yii::$app->request->isGet) {
            $request = yii::$app->request; //获取 request 对象
            $params = $request->get(); //获取地址栏参数

            $model = new LiveModel();
            if (isset($params['status']) && $params['status'] == 1){
                $where['status'] = $params['status'];
                $array = $model->do_one($where);
                if ($array['status'] == 200){
                    $array['data']['goods'] = json_decode($array['data']['goods'],true);
                    $array['data']['replay'] = json_decode($array['data']['replay'],true);
                }
            }else{
                $where['limit'] = false;
                $array = $model->do_select($where);
                if ($array['status'] == 200){
                    foreach ($array['data'] as $k=>$v){
                        $array['data'][$k]['goods'] = json_decode($v['goods'],true);
                        $array['data'][$k]['replay'] = json_decode($v['replay'],true);
                    }
                }
            }
            \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
            return $array;
        } else {
            return result(500, "请求方式错误");
        }
    }

}
