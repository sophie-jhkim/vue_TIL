<template>
<div id="wrap">
    <header id="header">
    <h1>Daily To do</h1>
    <p>header component</p>
    </header>
</div>
  
</template>

<script>
export default {
    name:'Header',

}
</script>

<style scoped>
#wrap{ 
    width: 100%;
    background: #64ffda;
    position: fixed;
    top:0;
    left:0;
    }
#wrap #header{
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ddd;
    text-align: center;
}
#wrap #header h1{
    font-size: 25px;
    color:#000;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 50px;
}
#wrap #header p{
    font-size: 15px;
    color:#aaa;
    font-weight: 500;
    line-height: 30px;
}

</style>