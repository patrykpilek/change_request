<?php 
require_once '../php/config.php'; 

switch ($_GET['action']) {
	case 'get_request' :
        get_request();
		break;
    case 'get_requestById' :
        get_requestById();
        break;
    case 'get_comment' :
        get_comment();
        break;
    case 'save_comment' :
        save_comment();
        break;
};

function get_request() {
    $sql = '
        SELECT *
        FROM requests
        ORDER BY id DESC 
    ';

	$result = mysql_query($sql);

    if (!$result) {
        echo "Could not successfully run query ($sql) from DB: " . mysql_error();
        exit;
    }

    if (mysql_num_rows($result) == 0) {
        echo "No rows found, nothing to print";
        exit;
    }

    $data = array();
    while($rows = mysql_fetch_array($result)){
        $data[] = array(
                    "id"                 => $rows['id'],
                    "client"             => $rows['client'],
                    "areaOrPlatform"     => $rows['areaOrPlatform'],
                    "description"        => $rows['description'],
                    "justification"      => $rows['justification'],
                    "implementaion"      => $rows['implementaion'],
                    "impact"             => $rows['impact'],
                    "changeDate"         => $rows['changeDate'],
                    "effortRequired"     => $rows['effortRequired'],
                    "resourcesAllocated" => $rows['resourcesAllocated'],
                    "risks"              => $rows['risks'],
                    "impactOfRisk"       => $rows['impactOfRisk'],
                    "testPlan"           => $rows['testPlan'],
                    "contingencyPlan"    => $rows['contingencyPlan'],
                    "changeOwner"        => $rows['changeOwner'],
                    "checkBy"            => $rows['checkBy'],
                    "approverEmail"      => $rows['approverEmail'],
                    "approved"           => $rows['approved']
                    );
    }
    // echo '<pre>';
    // echo print_r($data, true);
    // echo '</pre>';
    print_r(json_encode($data));
    return json_encode($data);  
};

function get_requestById(){
    $data = json_decode(file_get_contents("php://input"));
    $index = $data->id;
    $sql = "SELECT * 
            FROM requests 
            WHERE requests.id = $index";
    $result = mysql_query($sql);

    if (!$result) {
        echo "Could not successfully run query ($sql) from DB: " . mysql_error();
        exit;
    }

    if (mysql_num_rows($result) == 0) {
        echo "No rows found, nothing to print";
        exit;
    }

    while($row = mysql_fetch_assoc($result)){
        $data = array(
            "id"                 => $row['id'],
            "client"             => $row['client'],
            "areaOrPlatform"     => $row['areaOrPlatform'],
            "description"        => $row['description'],
            "justification"      => $row['justification'],
            "implementaion"      => $row['implementaion'],
            "impact"             => $row['impact'],
            "changeDate"         => $row['changeDate'],
            "effortRequired"     => $row['effortRequired'],
            "resourcesAllocated" => $row['resourcesAllocated'],
            "risks"              => $row['risks'],
            "impactOfRisk"       => $row['impactOfRisk'],
            "testPlan"           => $row['testPlan'],
            "contingencyPlan"    => $row['contingencyPlan'],
            "changeOwner"        => $row['changeOwner'],
            "checkBy"            => $row['checkBy'],
            "approverEmail"      => $row['approverEmail'],
            "approved"           => $row['approved']
            );
    }
    // echo '<pre>';
    // echo print_r($data, true);
    // echo '</pre>';
    print_r(json_encode($data));
    return json_encode($data);
}

function get_comment(){
    $data = json_decode(file_get_contents("php://input"));
    $index = $data->id;
    $sql = "SELECT com.body, com.createdOn, com.email 
            FROM requests req 
            INNER JOIN comments com ON req.id = com.request_id 
            WHERE req.id = $index 
            ORDER BY com.createdOn DESC";
    $result = mysql_query($sql);
    if (!$result) {
        echo "Could not successfully run query ($sql) from DB: " . mysql_error();
        exit;
    }

    if (mysql_num_rows($result) == 0) {
        echo "No rows found, nothing to print";
        exit;
    }
    $data = array();
    while($rows = mysql_fetch_array($result)){
        $data[] = array(
            "body"      => $rows['body'],
            "createdOn" => $rows['createdOn'],
            "email"     => $rows['email']
            );
    }
    print_r(json_encode($data));
    return json_encode($data);
};

function save_comment() {
    $data = json_decode(file_get_contents("php://input"));
     
    $body       = $data->body;
    $request_id = $data->request_id;
    $email      = $data->email;

    print_r($data);
    $qry = 'INSERT INTO comments (body,createdOn,request_id,email) 
            values ("'.$body.'",NOW(),"'.$request_id.'","'.$email.'")';
   
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "Comment Added Successfully!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } 
    else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        print_r($jsn);
    }   
};
?>