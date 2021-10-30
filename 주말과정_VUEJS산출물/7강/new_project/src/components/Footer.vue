<template>
<div id="wrap">
    <footer id="footer">
        <address>CopyRight&copy; THEJOEN. ALL Rights Reserved.</address>

    </footer>
</div>
  
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
#wrap{
    width: 100%;
    background: #222;
    position: fixed;
    bottom: 0;
    left: 0;
}
#wrap #footer{
    width: 100%;
    height: 70px;
}
#wrap #footer address{
    font-size: 13px;
    color:#fff;
    text-align: center;
    line-height: 70px;
}

</style>