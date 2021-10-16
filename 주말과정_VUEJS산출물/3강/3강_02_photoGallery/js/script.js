new Vue({
    el:'#section1',
    data :{
        title: '뷰 생성과 탬플릿',
        subject:'GALLERY IMAGES',
        t1: true, //클래스 속성 적용
        t2: true,
        imgGap:'0 10px', //스타일 속성
        //객체 배열으로 반복문 뽑기, 속성값 추출
        arrImg:[
            {imgSrc :'./img/img1.jpg', imgTitle : "image1"}, 
            {imgSrc :'./img/img2.jpg', imgTitle : "image2"}, 
            {imgSrc :'./img/img3.jpg', imgTitle : "image3"}, 
            {imgSrc :'./img/img4.jpg', imgTitle : "image4"}
        ]
        
    },
    methods:{ 
        imgClickEvent : function( param, event){

            alert(' a 링크 클릭 이벤트 '+ param)
        },


    }
});

