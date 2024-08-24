document.addEventListener('DOMContentLoaded', function () {
    const datetimePicker = document.getElementById('datetime-picker');
    const formatSelector = document.getElementById('format-selector');
    const timestampResult = document.getElementById('timestamp-result');

    function generateTimestamp() {
        const date = new Date(datetimePicker.value);
        const format = formatSelector.value;

        if (!date.getTime()) {
            timestampResult.textContent = 'Please select a valid date and time.';
            return;
        }

        const unixTimestamp = Math.floor(date.getTime() / 1000);
        let formattedTimestamp;

        switch (format) {
            case 'd':
                formattedTimestamp = `<t:${unixTimestamp}:d>`;
                break;
            case 'D':
                formattedTimestamp = `<t:${unixTimestamp}:D>`;
                break;
            case 't':
                formattedTimestamp = `<t:${unixTimestamp}:t>`;
                break;
            case 'T':
                formattedTimestamp = `<t:${unixTimestamp}:T>`;
                break;
            case 'f':
                formattedTimestamp = `<t:${unixTimestamp}:f>`;
                break;
            case 'F':
                formattedTimestamp = `<t:${unixTimestamp}:F>`;
                break;
            default:
                formattedTimestamp = 'Invalid format selected.';
                break;
        }

        timestampResult.innerHTML = formattedTimestamp;
    }

    datetimePicker.addEventListener('change', generateTimestamp);
    formatSelector.addEventListener('change', generateTimestamp);
});
