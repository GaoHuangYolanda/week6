/**
 * Created by ëë on 2016/10/18.
 */

//������Ȼ����Ӻ���
function qiuhe(n){
    var sum = 0;
    for (var i = 1;i <= n;i++) {
        sum = sum + i
    }
    console.log(sum)

}
qiuhe(8000)

//����ż���ۼ���ͺ���
function oushu(n){
    var sum = 0
    for (var i = 0; i <= n;i++ ){
        if(i % 2 == 0){
            sum = sum + i
        }
        console.log(sum);
    }
}
oushu(800)

//��������ܳ�������ļ���
function zhouchang(height,width){
    var height;
    var width;
    zhouchang  = (height + width )*2;
    console.log(zhouchang );
}
function mianji(height,width){
    var height;
    var width;
    mianji  = height * width;
    console.log(mianji )
}

zhouchang(20,30)
mianji (40,50)


var data=new Array();

data[0]=zhouchang;
data[1]=mianji;

document.write("���ε��ܳ�Ϊ��"+data[0]+"<br>");
document.write("���ε����Ϊ��"+data[1]+"<br>");