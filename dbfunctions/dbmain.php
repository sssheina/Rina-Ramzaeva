<?php

const DB_RETURN_CODE_OK = 0;
const DB_RETURN_CODE_CONNECTION_FAILED = 1;
//define(DB_RETURN_CODE_OK, 0);
//define(DB_RETURN_CODE_CONNECTION_FAILED, 1);


function getNextRecordNumber(){
    $servername = "localhost";
    $database = "u788686832_main_db";
    $username = "u788686832_ekaterina_ramz";
    $password = "Lm0O=aiu9/Q^";
    $retval = 0;
 
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    
    if (!$conn) {
        throw new Exception("Cannot connect to the database");
    }    
    else {
        
        //Get the last record number
        $sql = "SELECT LastRecordNumber FROM LastRecordNumber";
        
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $row = $result->fetch_assoc();
            
            $retval = $row["LastRecordNumber"];
        } else {
            throw new Exception("No data returned.");
        }
        
        //Advance to the new record number
        $retval++;
        
        //Store the new record number
        $sql = "UPDATE LastRecordNumber SET LastRecordNumber = $retval";
        
         if($conn->query($sql) === TRUE){
             mysqli_close($conn);
             return $retval;
         } else {
            throw new Exception("Cannot update the database");
         }
        
    }
}


?>