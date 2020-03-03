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
        $('.class').show();
        showInputs();
    });

    let classText, valueText, nameText, placeholderText, button, input, textarea, radio, checkbox, inputType;
    const buttonRemove = `<button class="remove button end">-</button>` + `<br class="end">`;

    function getInputsName() {
        function checkNameValue(className) {
            return ($(`.${className}_text`).val());
        }

        classText = checkNameValue('class');
        valueText = checkNameValue('value');
        nameText = checkNameValue('name');
        placeholderText = checkNameValue('placeholder');
    }

    function getInputTypeValue() {
        inputType = $("input:radio:checked").val();
    }

    function getInputForAdd() {
        getInputsName();

        button = `<button class="${classText}_button">${nameText}</button>`
            + buttonRemove;

        input = `<label class="${classText}_label">` +
            `${nameText}<input class="${classText}_input" type="text" placeholder="${placeholderText}">` +
            `</label>`
            + buttonRemove;

        textarea = `<label class="${classText}_label">` +
            `<textarea name="${nameText}" id="${classText}" cols=20" rows="1" placeholder="${placeholderText}">` +
            `</textarea></label>`
            + buttonRemove;

        radio = `<label class="${classText}_label">` +
            `<input class="${classText}_radio" type="radio" name="${nameText}">${valueText}</label>`
            + buttonRemove;

        checkbox = `<label class="${classText}_label">` +
            `<input class="${classText}_checkbox" type="checkbox" name="${nameText}">${valueText}</label>`
            + buttonRemove;
    }

    function addInput() {
        getInputsName();
        getInputTypeValue();
        let resultFolder = `#results`;

        switch (inputType) {
            case 'Button':
                nameText !== '' && classText !== '' ? $(resultFolder).append(button) : alert ('Заполните все поля');
                // nameText === '' && classText === '' ? alert ('Заполните все поля') : $(resultFolder).append(button);
                break;
            case 'Input':
                nameText !== '' && placeholderText !== '' && classText !== '' ? $(resultFolder).append(input)
                    : alert ('Заполните все поля');
                break;
            case 'Textarea':
                nameText !== '' && placeholderText !== '' && classText !== '' ? $(resultFolder).append(textarea)
                    : alert ('Заполните все поля');
                break;
            case 'Radio':
                nameText !== '' && valueText !== '' && classText !== '' ? $(resultFolder).append(radio)
                    : alert ('Заполните все поля');
                break;
            case 'Checkbox':
                nameText !== '' && valueText !== '' && classText !== '' ? $(resultFolder).append(checkbox)
                    : alert ('Заполните все поля');
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
    });

    $(document).on("click", ".remove", function () {
        $(this).prev().remove();
        $(this).next().remove();
        $(this).remove();
    });
});


