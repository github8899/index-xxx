$(function () {
	$("#span1").click(function () {
    	$("#box1").find("#ul1").stop().slideToggle(1000)
	});
	$("#ul1").on("click","li",function () {
	    var con=$(this).text()
	    var inp=$("#input1")
	    inp.val(parseInt(con))
	    $("#box1").find("#ul1").stop().slideToggle(1000)
	})
	$("#span2").click(function () {
	    $("#box2").find("#ul2").stop().slideToggle(1000)
	});
	$("#ul2").on("click","li",function () {
	    var con=$(this).text()
	    var inp=$("#input2")
	    inp.val(parseInt(con))
	    $("#box2").find("#ul2").stop().slideToggle(1000)
	})
})
