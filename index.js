$(document).ready(function(){
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + ' <button class="btn btn-success">Done</button> <button class="btn btn-danger">Trash</button> </li>');
        $(this).val('');
    });

    $('ul').on('click','.btn-danger', function() {
        $(this).parent('li').fadeOut(500);
    });

    $('ul').on('click','.btn-success', function() {
        $(this).parent('li').toggleClass('checked');
    });
});