<?PHP
//HTML 웹폼에서 보내온 데이터 요청 request
    $name = $_POST['name'];
    $job = $_POST['job'];
    $addr = $_POST['addr'];

//데이터베이스 

 $arr = Array(  //배열 생성
    "이름" => $name,
    "직업" => $job,
    "주소" => $addr
 ); 

 //인코딩                    한글 깨지지 않게 설정
 $json = json_encode($arr, JSON_UNESCAPED_UNICODE);

 //만들어진 제이슨 데이터를 파일으로 만들어라
 $file = file_put_contents('./data/form_list.json', $json);
 echo $json;


?>