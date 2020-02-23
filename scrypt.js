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
    const buttonRemove = `<button class="remove button">-</button>`;
        // + `<br class="end">`;

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

        button = `<button class="${classText}_button">${nameText}</button>` + buttonRemove;
        input = `<label class="${classText}_label">` +
            `${nameText}<input class="${classText}_input" type="text" placeholder="${placeholderText}">` +
            `</label>` + buttonRemove;
        textarea = `<label class="${classText}_label">` +
            `<textarea name="${nameText}" id="${classText}" cols=20" rows="1" placeholder="${placeholderText}">` +
            `</textarea></label>` + buttonRemove;
        radio = `<label class="${classText}_label">` +
            `<input class="${classText}_radio" type="radio" name="${nameText}">${valueText}</label>` + buttonRemove;
        checkbox = `<label class="${classText}_label">` +
            `<input class="${classText}_checkbox" type="checkbox" name="${nameText}">${valueText}</label>` + buttonRemove;
    }

    function addInput() {

        let inputType = $("input:radio:checked").val();

        switch (inputType) {
            case 'Button':
                $('#results').append(button);
                break;
            case 'Input':
                $('#results').append(input);
                break;
            case 'Textarea':
                $('#results').append(textarea);
                break;
            case 'Radio':
                $('#results').append(radio);
                break;
            case 'Checkbox':
                $('#results').append(checkbox);
                break;
            default:
                $('#results').append(``);
        }
    }

    $('.add').click(function () {
        getName();
        addInput()
    });

    $('.generate').click(function () {
        let result = `<form class="form">` + $('.results').html() + `</form>`;
        $('#html').val(result);
    });

    $('.reset').click(function () {
        clearInputsFopdrs();
        $('.results').html(``);
        $('#html').val(``);
        $("input:radio").prop('checked',false);
        // // $("input:radio").removeAttr("checked");
        // console.log($("input:radio")).val(``);
        // $('input[name=Choose]').attr('checked',false);
    });

    $(document).on("click", ".remove" , function() {
        $(this).prev().remove();
        $(this).remove();
    });
});


