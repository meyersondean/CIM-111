$(document).ready(function () {
    var stepsDone = 0;
    $("input").on("click", function () {
        var input = $(this).next('label');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    });
    $(document).ready(function () {
        $("button").click(function () {
            $(".gif").toggle();
            if ($("button").html() == "Show Gif") {
                $("button").html("Hide Gif");
            } else $("button").html("Show Gif");
        });
    });
    $(".direction").on({
        mouseover: function () {
            $(this).css("background-color", "lightblue");
        },

        mouseleave: function () {
            $(this).css("background-color", "#FAF7F2");
        }
    });


})
