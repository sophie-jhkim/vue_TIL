new Vue({
    el:'#section1',
    data :{
        title: '뷰 생성과 탬플릿',
        subject:'GALLERY IMAGES',
        t1: true, //클래스 속성 적용
        t2: true,
        imgGap:'0 10px', //스타일 속성
        imgFileName:'img1.jpg'
    },
    methods:{ 
        popupClick: function(){ //메소드(함수)
            // alert('클릭 이벤트')
            this.imgGap = '0';
        },
        gapClick: function(){
            this.imgGap = '0 10px'
        },
        imgClick : function(param, event){
            event.stopPropagation(); //자바스크립트에서 부모 요소에 적용되어있는 다른 이벤트 차단하기
            console.log(event, `매개변수 값 ${param}`)
            alert('멤버함수 즉 메소드 호출!!!')
            this.imgFileName = 'img3.jpg'
        },
        imgClickEvent : function(e){
            //e.preventDefault();//원래 a요소가 가지고 있는 클릭시 새로고침 기능을 제거
            alert(' a 링크 클릭 이벤트')
        },

    }
});

new Vue({
    el: '#popup',
    data :{
        show: true
    },
    methods :{
        parentEvent : function(event){
            //부모영역부분만 클릭했을때 적용해라. 하위자식들한테는 적용되지 않는다
            if(event.target !== event.currentTarget){
                return false;
            }else{
                // alert('부모영역 팝업 전체영역 클릭 이벤트!!!')
                this.show = false
            }
            // const btn = document.querySelector('#popup');
            // btn.classList.add('hidden')
            // if(event.target == event.currentTarget){
            //     alert('부모영역 팝업 전체영역 클릭 이벤트!!!')
            // }
        },
        btnEvent : function(e){
            e.stopPropagation();
            // alert('자식 영역 버튼 클릭 이벤트');
            this.show = false
            // const btn = document.querySelector('#popup');
            // btn.classList.add('hidden')
        }
    }

})


// function popupFn(){
//     alert('바닐라 alert')
// }