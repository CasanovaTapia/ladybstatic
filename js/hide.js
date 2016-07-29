// Did you know section
$(function()
{

$(".button").click(function()
{
var button_id = $(this).attr("id");

//Add Record button
if(button_id=="goFrnKnow")
{
$("#engKnow").slideUp("slow");
$("#frnKnow").slideDown("slow");
}

//Cancel button
else if(button_id=="goEngKnow")
{
$("#frnKnow").slideUp("slow");
$("#engKnow").slideDown("slow");
}

// save button
else
{
// insert record
// more details Submit form with jQuery
}

return false;
});
});
// END Did you know section


// Director's statement
$(function()
{

$(".button").click(function()
{
var button_id = $(this).attr("id");

//Add Record button
if(button_id=="goFrnDir")
{
$("#engDir").slideUp("slow");
$("#frnDir").slideDown("slow");
}

//Cancel button
else if(button_id=="goEngDir")
{
$("#frnDir").slideUp("slow");
$("#engDir").slideDown("slow");
}

// save button
else
{
// insert record
// more details Submit form with jQuery
}

return false;
});
});
// END Director's statement
