$(document).ready(function () {

    $(".names_label").hide();


    function clearInputsFopdrs() {
        $(".names_label").hide();
        $('.names_input').val(``);
    }

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

    /** Click on label */
    $('.radio-check').click(function () {
        clearInputsFopdrs();
        showInputs();
    });

    let valueText, nameText, placeholderText, button, input, textarea, radio, checkbox, inputType;
    const buttonRemove = `<button class="remove button end">-</button>` + `<br class="end">`;

    function getInputsName() {
        function checkNameValue(className) {
            return ($(`.${className}_text`).val());
        }

        valueText = checkNameValue('value');
        nameText = checkNameValue('name');
        placeholderText = checkNameValue('placeholder');
    }

    function getInputTypeValue() {
        inputType = $("input:radio:checked").val();
    }

    function getInputForAdd() {
        getInputsName();

        button = `<button>${nameText}</button>` + buttonRemove;

        input = `<label>` +
            `${nameText}<input type="text" placeholder="${placeholderText}">`
            + buttonRemove;

        textarea = `<label>` +
            `<textarea name="${nameText}" cols=20" rows="1" placeholder="${placeholderText}">` +
            `</textarea></label>`
            + buttonRemove;

        radio = `<label>` +
            `<input type="radio" name="${nameText}">${valueText}</label>`
            + buttonRemove;

        checkbox = `<label>` +
            `<input type="checkbox" name="${nameText}">${valueText}</label>`
            + buttonRemove;
    }

    function removeError() {
        $('.error').remove();
    }

    function error() {
        removeError();
        $('.names_input:invalid').after('<span class="error">заполните поле</span>');
    };


    function addInput() {
        removeError();
        getInputsName();
        getInputTypeValue();

        let resultFolder = `#results`;

        switch (inputType) {
            case 'Button':
                nameText !== '' ? $(resultFolder).append(button) : error();
                break;
            case 'Input':
                nameText !== '' && placeholderText !== '' ? $(resultFolder).append(input)
                    : error();
                break;
            case 'Textarea':
                nameText !== '' && placeholderText !== '' ? $(resultFolder).append(textarea)
                    : error();
                break;
            case 'Radio':
                nameText !== '' && valueText !== '' ? $(resultFolder).append(radio)
                    : error();
                break;
            case 'Checkbox':
                nameText !== '' && valueText !== '' ? $(resultFolder).append(checkbox)
                    : error();
                break;
            default:
                alert ('Заполните все поля');
        }
    }

    $('.add').click(function () {
        getInputForAdd();
        addInput();
    });

    $('.generate').click(function () {
        $('.results').clone().appendTo(".clone");
        $(document).find(".clone .end").remove();
        let resultCode = $('.clone .results').html();
        let resultForm = '<form class="form">' + resultCode + '<button class="submit" type="submit">Submit</button>' +
            '</form>';
        $('#html').val(resultForm);
        $(`.clone .results`).remove();
    });

    $('.reset').click(function () {
        clearInputsFopdrs();
        $('.results').html(``);
        $('#html').val(``);
        $("input:radio").prop('checked', false);
        $('.error').remove();
    });

    $(document).on("click", ".remove", function () {
        $(this).prev().remove();
        $(this).next().remove();
        $(this).remove();
    });
});


