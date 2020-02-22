$(document).ready(function () {

    $(".names_label").hide();

    function clearInputsFopdrs() {
        $(".names_label").hide();
        $('.names_input').val(``);
    }

    /** Click on label */
    $('.radio-check').click(function () {
        clearInputsFopdrs();
        $('.class').show();
        showInputs();
    });

    function showInputs() {
        switch ($("input:radio:checked").val()) {
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

    let classText, valueText, nameText, placeholderText, button, input, textarea, radio, checkbox;

    function getName() {
        function checkNameValue(className) {
            if ($(`.${className}_text`).val() === '') {
                return (`${className}`);
            } else {
                return ($(`.${className}_text`).val());
            }
        }

        classText = checkNameValue('class');
        valueText = checkNameValue('value');
        nameText = checkNameValue('name');
        placeholderText = checkNameValue('placeholder');

        button = `<button class="${classText}_button">${nameText}</button>`;
        input = `<label class="${classText}_label">` +
            `${nameText}<input class="${classText}_input" type="text" placeholder="${placeholderText}">` +
            `</label>`;
        textarea = `<textarea name="${nameText}" id="${classText}" cols=3" rows="3" placeholder="${placeholderText}">` +
            `</textarea>`;
        radio = `<label class="${classText}_label">` +
            `<input class="${classText}_radio" type="radio" name="${nameText}">${valueText}</label>`;
        checkbox = `<label class="${classText}_label">` +
            `<input class="${classText}_checkbox" type="checkbox" name="${nameText}">${valueText}</label>`;
    }

    function addInput() {

        let inputType = $("input:radio:checked").val();

        switch (inputType) {
            case 'Button':
                $('.form').append(button);
                break;
            case 'Input':
                $('.form').append(input);
                break;
            case 'Textarea':
                $('.form').append(textarea);
                break;
            case 'Radio':
                $('.form').append(radio);
                break;
            case 'Checkbox':
                $('.form').append(checkbox);
                break;
            default:
                $('.form').append(``);
        }
    }

    $('.add').click(function () {
        getName();
        addInput()
    });

    $('.remove').click(function () {
        $('.form').children().last().remove();
    });

    $('.generate').click(function () {
        let result = $('.results').html();
        $('#html').val(result);
    });

    $('.reset').click(function () {
        clearInputsFopdrs();
        $('.results').html(``);
        $('#html').val(``);
        $(".radio-check_input-btn:checked + .radio-check_icon-btn:before").css("display", "none")
    });

});


