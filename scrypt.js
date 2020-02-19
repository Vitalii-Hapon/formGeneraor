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
                $('.name, .placeholder').show();
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

    function getNameValue(className) {
        if ($(`.${className}_text`).val() === '') {
            return (`${className}`);
        } else {
            return ($(`.${className}_text`).val());
        }
    }

    function generateCode() {

        let inputType = $("input:radio:checked").val();
        let classText = getNameValue('class');
        let valueText = getNameValue('value');
        let nameText = getNameValue('name');
        let placeholderText = getNameValue('placeholder');

        let button = `<button class="${classText}_button">${nameText}</button>`;
        let input = `<form><label class="${classText}_label">${nameText}<input class="${classText}_input" type="text" placeholder="${placeholderText}"></label></form>`;
        let textarea = `<form><textarea name="${nameText}" id="${classText}" cols=100" rows="100" placeholder="${placeholderText}"></textarea></form>`;
        let radio = `<form><label class="${classText}_label"><input class="${classText}_radio" type="radio" name="${nameText}">${valueText}</label></form>`;
        let checkbox = `<form><label class="${classText}_label"><input class="${classText}_checkbox" type="checkbox" name="${nameText}">${valueText}</label></form>`;

        switch (inputType) {
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
            default: $('#html').val('');
        }
    }

    $('.generate').click(generateCode);
});
