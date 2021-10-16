new Vue({
    el:'#section1',
    data :{
        title: '뷰 생성과 탬플릿',
        subject:'GALLERY IMAGES',
        t1: true, //클래스 속성 적용
        t2: true,
        imgGap:'0 10px' //스타일 속성
    },
    methods:{ //메소드(함수)
        popupClick: function(){
            // alert('클릭 이벤트')
            this.imgGap = '0';
        },
        gapClick: function(){
            this.imgGap = '0 10px'
        }
    }
});

// function popupFn(){
//     alert('바닐라 alert')
// }