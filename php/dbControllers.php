<?php 
require_once '../php/config.php'; 

switch ($_GET['action']) {
	case 'get_request' :
        get_request();
		break;
};

function get_request() {
    $sql = '
        SELECT *
        FROM requests
    ';

	$result = mysql_query($sql);
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
    // print_r(json_encode($data));
    return json_encode($data);  
};
?>