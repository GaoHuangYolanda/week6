/**
 * Created by Administrator on 2016/10/20.
 */
//��һ��
function sum(n){
    var sum=0;
    for(var i=1;i<=n;i++){
        sum+=i;
    }
    return sum;

}
//�ڶ���
function sum2(n){
    var sum=0;
    for(var i=0;i<=n;i+2){
        sum+=i;
    }
    return sum2;
}
//������
function rectangle(height,width){
    var data=new Array();
    data[0]=2*(height*width);
    date[1]=height*width;
    return data;
}