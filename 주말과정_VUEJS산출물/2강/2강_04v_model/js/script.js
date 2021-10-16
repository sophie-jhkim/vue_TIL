new Vue({
    el:'#section1',
    data :{
        title: '뷰 생성과 탬플릿',
        subject:'v-model 사용자 입력값 실시간 전달',
        t1: true, 
        t2: true,
        text:'',
        outUrl:'',
        outChk:[], //체크박스는 여러개를 선택할 수 있기때문에 배열처리한다
        outRadio:'',
        boxAni:false
    },
    methods:{ 
        familyFn : function(){
            window.open(this.outUrl, "새창열기(창이름)", 'width=500, height=400, top=0, left=0') //새창열기 _self
            // location.href = this.outUrl //창이동 _new
        },

        boxAniFn : function(){
            this.boxAni = true;
        }

    }
});

