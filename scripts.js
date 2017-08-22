$(function() {

    $.ajax({
        type: 'GET',
        url: 'https://quip-todos.herokuapp.com/get_todos?email=example@gmail.com',
        success: function(data) {
            $.each(data, function(index, item) {
                $('#myList').append('<li><input type="checkbox"><label>' + data[index].text + '</label></li>');
            });
        },
        error: function() {
            console.log('Error loading data');
        }
    });

    $('#add').on('click', function() {
        var $currText = $('#current-text').val();
        $('#myList').prepend('<li><input type="checkbox"><label>' + $currText + '</label></li>');
        $('#current-text').val('');

        var newToDoItem = {
            email: 'example@gmail.com',
            text: 'currText',
        };

        var completed = {
            email: 'example@gmail.com',
            completed: 'true',
        };


        $.ajax({
            method: 'POST',
            url: 'https://quip-todos.herokuapp.com/add_todo',
            // data: JSON.stringify({email: 'email', text: $('#current-text').val()
        //  }),
            data: newToDoItem,
            success: function(newToDo) {
            },
            error: function() {
                console.log('Error saving data');
            }
        });
    });

    $("input[type=checkbox]").change(function() {
        if (this.checked) {

            console.log('checked');

            $.ajax({
                method: 'POST',
                url: 'https://quip-todos.herokuapp.com/mark_completed',
                /* data: JSON.stringify({email: 'example', text: $('#current-text').val()
                }), */

                data: completed,
                success: function(completed) {
                    console.log(completed);
                },
                error: function() {
                    console.log('Error saving data');
                }
            });

        }
    });

});
