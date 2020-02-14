$(document).ready(function () {
    $(".names_label").hide();

    /** Click on label */
    $(".radio-check").click(function () {
        $(".names_label").hide();
        $(".class").show();
        $(".names_input").val(``);
        $('#html').val(``);

        switch ($(this).children('span').text()) {
            case 'Button':
                $('.name').show();
                break;
            case 'Input':
                $('.name, .placeholder').show();
                break;
            case 'Textarea':
                $('.placeholder').show();
                break;
            case 'Radio':
                $('.value, .name').show();
                break;
            case 'Checkbox':
                $('.value, .name').show();
                break;
        }

    });

    function generate_code() {

        const input_type = $("input:radio:checked").val();
        const class_name = $('.class_text').val();
        const value = $('.value_text').val();
        const name = $('.name_text').val();
        const placeholder = $('.placeholder_text').val();

        const button = `<form><button class="${class_name}">${name}</button></form>`;
        const input = `<form><label class="${class_name}">${name}<input class="${class_name}_input" type="text" placeholder="${placeholder}"></label></form>`;
        const textarea = `<form><textarea name="${class_name}" id="${class_name}_textarea" cols=100" rows="100" placeholder="${placeholder}"></textarea></form>`;
        const radio = `<form><label class="${class_name}"><input class="${class_name}_radio" type="radio" name="${name}">${value}</label></form>`;
        const checkbox = `<form><label class="${class_name}"><input class="${class_name}_checkbox" type="checkbox" name="${name}">${value}</label></form>`;

        switch (input_type) {
            case 'Button':
                $('#html').val(button);
                break;
            case 'Input':
                $('#html').val(input);
                break;
            case 'Textarea':
                $('#html').val(textarea);
                break;
            case 'Radio':
                $('#html').val(radio);
                break;
            case 'Checkbox':
                $('#html').val(checkbox);
                break;
        }
    }

    $('.generate').click(generate_code);
    $(document).keydown (function(e){
            if(e.keycode == 13) {console.log(1)}
        });
});
