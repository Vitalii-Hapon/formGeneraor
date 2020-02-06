$(document).ready(function () {
    $(".names_label").hide();

    /** Click on label */
    $(".radio-check").click(function () {
        $(".names_label").hide();
        $(".names_input").val("");
        const input_type = '.For' + $(this).children('span').text();

        $('.inputs_names').find(input_type).show();
    });

    $('.generate').click(function () {
        const input_type = $("input:radio:checked").val();
        const value = $('.value_text').val();
        const name = $('.name_text').val();
        const placeholder = $('.placeholder_text').val();

        const button = `<button class="button">${value}</button>`;
        const input = '<label class="label"><span>' + value + '</span><input class="input-text" type="text" placeholder="' + placeholder + '"></label>';
        const textarea = '<textarea name="textarea_name" id="textarea" cols=100" rows="100" placeholder="' + placeholder + '"></textarea>';
        const radio = '<label class="label"><input class="input-radio" type="radio" name="' + name + '"><span>' + value + '</span></label>';
        const checkbox = '<label class="label"><input class="input-checkbox" type="checkbox" name="' + name + '"><span>' + value + '</span></label>';

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
    });
});
