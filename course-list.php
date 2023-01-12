<?php
define("DB_SERVER", "localhost");
define("DB_USERNAME","root");
define("DB_PASSWORD", "");
define("DB_NAME", "db1");

$mysqli = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD,
DB_NAME);

if($mysqli === false){
 die("ERROR: Could not connect. " . $mysqli->connect_error);
}
?>

<?php
$querycourses = "SELECT * FROM courses";
$resultcourses = $mysqli->query($querycourses);
$obj = $resultcourses->fetch_object();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Course Details | Cantor College</title>
</head>
<body> 
<div class="listing">
<h1 style="text-decoration: underline;">Course Details</h1>
<table>
<tr>
<th>Course<hr></th>
<th>Course Summary<hr></th>
<th>Ucas Code<hr></th>
</tr>
<?php
while ($obj = $resultcourses -> fetch_object()) {
echo "<tr>";
echo "<td>{$obj->CourseTitle}</td>";
echo "<td>{$obj->CourseSummary}</td>";
echo "<td>{$obj->UcasCode}</td>";
echo "</tr>";
}
?>
</table>
</div>

</body>
</html>
