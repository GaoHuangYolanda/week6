/**
 * Created by Administrator on 2016/10/17 0017.
 */
//��һ��
function plusone(n){//����һ��������Ϊplusone��������Ϊn�ĺ���

    var sum=0;//����һ�������ұ�����ʼֵΪ0

    for(i=1;i<=n;i++){//ѭ�����

        sum=sum+i;
    }
    return sum;//����sum
}


//�ڶ���
function plustwo(n){//����һ��������Ϊplustwo��������Ϊn�ĺ���

    var sum2= 0,i;//����һ������sum2�ұ�����ʼֵΪ0,����һ������i

    if(i%2==0){//��������ж�i�Ƿ�Ϊż��
        for(i=1;i<=n;i++){//ѭ�����
            sum2=i+sum2;
        }
    }
    return sum2;//����sum2
}


//������
function square(height,width){//����һ��������Ϊsquare��������Ϊheight��width�ĺ���

    var data=new Array();//����һ��������data

    data[0]=(height+width)*2;//�����鸳ֵ
    data[1]=height*width;

    return data;//��������data
}