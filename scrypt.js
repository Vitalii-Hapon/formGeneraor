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
            default: $(".names_label").hide();
        }

    });

    function generate_code() {

        let input_type = $("input:radio:checked").val();
        let class_name = $('.class_text').val();
        let value = $('.value_text').val() === '' ? 'value' : $('.value_text').val() ;
        let name = $('.name_text').val();
        let placeholder = $('.placeholder_text').val();

        let button = `<form>`+
            `<button class="${class_name}">${name}</button>`+
            `</form>`;
        let input = `<form><label class="${class_name}">${name}<input class="${class_name}_input" type="text" placeholder="${placeholder}"></label></form>`;
        let textarea = `<form><textarea name="${class_name}" id="${class_name}_textarea" cols=100" rows="100" placeholder="${placeholder}"></textarea></form>`;
        let radio = `<form><label class="${class_name}"><input class="${class_name}_radio" type="radio" name="${name}">${value}</label></form>`;
        let checkbox = `<form><label class="${class_name}"><input class="${class_name}_checkbox" type="checkbox" name="${name}">${value}</label></form>`;

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

});
