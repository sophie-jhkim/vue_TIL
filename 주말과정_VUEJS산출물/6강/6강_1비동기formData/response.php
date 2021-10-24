<?PHP
//HTML 웹폼에서 보내온 데이터 요청 request
    $name = $_POST['name'];
    $job = $_POST['job'];
    $addr = $_POST['addr'];

//데이터베이스 

$txt = '';
$txt = $name.';';//기존에 자바스크립트에서 +로 변수와 문자열을 연결해준것처럼 php 에서는 .으로 연결해준다
$txt .= $job.';';
$txt .= $addr; 


// 응답 response
echo json_encode($txt);


?>