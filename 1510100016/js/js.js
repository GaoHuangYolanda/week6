/**
 * Created by ��� on 2016/10/19.
 */
//����һ����Ȼ���ۼ���͵ĺ���
function qiuhe(n){
    var sum = 0;
    for (var i=1;i<=n;i++){
        sum = sum + 1;
    }
    console.log(sum);
}

//����һ��ż���ۼ���͵ĺ���
function qiuhe2(n){
    var sum = 0
    for (var i=1;i<=n;i++){
        if(i % 2 == 0){
            sum = sum + 1
        }
        console.log(sum);
    }
}

//����һ�������ܳ�������ļ���
function C(height,width){
    var height;
    var width;
    C  = (height + width )*2;
    console.log(zhouchang );
}
function S(height,width){
    var height;
    var width;
    S  = height * width;
    console.log(mianji )
}

C(20,30)
S (40,50)


var data=new Array();

data[0]=C;
data[1]=S;

document.write("���ε��ܳ�Ϊ��"+data[0]+"<br>");
document.write("���ε����Ϊ��"+data[1]+"<br>");