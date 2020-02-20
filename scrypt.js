$(document).ready(function () {

    $(".names_label").hide();

    /** Click on label */
    $('.radio-check').click(function () {
        $('.names_label').hide();
        $('.class').show();
        $('.names_input').val(``);
        $('#html').val(``);
        showInputs();
    });

    function showInputs() {
        switch ($(".radio-check_input-btn:checked").val()) {
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
            default:
                $(".names_label").hide();
        }
    }

    function getNameValue(className) {
        if ($(`.${className}_text`).val() === '') {
            return (`${className}`);
        } else {
            return ($(`.${className}_text`).val());
        }
    }

    let classText = getNameValue('class');
    let valueText = getNameValue('value');
    let nameText = getNameValue('name');
    let placeholderText = getNameValue('placeholder');

    let button = `<button class="${classText}_button">${nameText}</button>`;
    let input = `<label class="${classText}_label">${nameText}<input class="${classText}_input" type="text" placeholder="${placeholderText}"></label>`;
    let textarea = `<textarea name="${nameText}" id="${classText}" cols=100" rows="100" placeholder="${placeholderText}"></textarea>`;
    let radio = `<label class="${classText}_label"><input class="${classText}_radio" type="radio" name="${nameText}">${valueText}</label>`;
    let checkbox = `<label class="${classText}_label"><input class="${classText}_checkbox" type="checkbox" name="${nameText}">${valueText}</label>`;

    // function generateCode() {
    //
    //     let inputType = $("input:radio:checked").val();
    //
    //     switch (inputType) {
    //         case 'Button':
    //             $('#html').val(button);
    //             break;
    //         case 'Input':
    //             $('#html').val(input);
    //             break;
    //         case 'Textarea':
    //             $('#html').val(textarea);
    //             break;
    //         case 'Radio':
    //             $('#html').val(radio);
    //             break;
    //         case 'Checkbox':
    //             $('#html').val(checkbox);
    //             break;
    //         default:
    //             $('#html').val('');
    //     }
    // }

    $('.add').click(function () {
        $('.results').append(button);
    });

    // $('.remove').click(function () {
    //     $('.results').remove();
    // });

    $('.generate').click(function () {
        let result = $('.results').html();
        $('#html').val(result);
    });

});


