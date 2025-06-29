function generateCard(bin, length) {
    var bin2 = "";
    var card = "";
    var card1_l = [];
    var card2_l = [];
    var sum = 0;
    var mod = 0;
    var check_sum = 0;

    // Replace 'x' with random digits and limit to length-1
    for (var i = 0; i < bin.length && bin2.length < length - 1; i++) {
        var char = bin[i].toLowerCase();
        if (char == "x") {
            char = Math.floor(Math.random() * 10);
        }
        bin2 += char;
    }

    // If bin2 is shorter than length-1, append random digits
    while (bin2.length < length - 1) {
        bin2 += Math.floor(Math.random() * 10);
    }

    // Convert bin2 to array of integers
    for (var i = 0; i < bin2.length; i++) {
        card1_l.push(parseInt(bin2[i]));
        card2_l.push(parseInt(bin2[i]));
    }

    // Double the value of alternate digits starting from the rightmost
    for (var i = card2_l.length - 1; i >= 0; i -= 2) {
        card2_l[i] *= 2;
        if (card2_l[i] > 9) {
            card2_l[i] -= 9;
        }
    }

    // Sum all the digits
    for (var i in card2_l) {
        sum += card2_l[i];
    }

    // Calculate the checksum
    mod = sum % 10;
    if (mod != 0) {
        check_sum = 10 - mod;
    }

    // Add the checksum to the card number
    card1_l.push(check_sum);

    // Convert the card number array to a string
    for (var i in card1_l) {
        card += card1_l[i];
    }
    return card;
}

function generateMonth() {
    var monthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    return monthList[Math.floor(Math.random() * 12)];
}

function generateYear() {
    var yearList = ["2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040"];
    return yearList[Math.floor(Math.random() * yearList.length)];
}

function generateCCV(bin) {
    var ccvLength = /^3[47]/.test(bin) ? 4 : 3; // Amex has 4-digit CVV
    var ccv = "";
    for (var i = 0; i < ccvLength; i++) {
        ccv += Math.floor(Math.random() * 10);
    }
    return ccv;
}

function generate() {
    var bin = document.getElementById("bin").value.trim();
    var ccv = document.getElementById("ccv").value.trim();
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var count = parseInt(document.getElementById("count").value.trim());
    var output = document.getElementById("output");

    if (bin == "") {
        return;
    }
    if (ccv == "") {
        ccv = "Random";
    }
    if (isNaN(count) || count <= 0) {
        count = 20;
    }

    var cardLength = 16;
    // Define length based on card type
    if (/^3[47]/.test(bin)) { // Amex
        cardLength = 15;
    } else if (/^3[0689]/.test(bin)) { // Diners Club
        cardLength = 14;
    }

    var cards = "";
    for (var i = 0; i < count; i++) {
        var generatedCard = generateCard(bin, cardLength);
        var generatedMonth = month === "Random" ? generateMonth() : month;
        var generatedYear = year === "Random" ? generateYear() : year;
        var generatedCCV = ccv === "Random" ? generateCCV(bin) : ccv;
        cards += `${generatedCard}|${generatedMonth}|${generatedYear}|${generatedCCV}\n`;
    }
    output.value = cards.trim();
}
       // Função para alternar entre os temas claro e escuro
       function toggleTheme() {
        let body = document.body;
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        let icon = document.getElementById('theme-icon');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    }

    // Função para carregar a preferência de tema do usuário
    window.onload = function() {
        let theme = localStorage.getItem('theme') || 'light';
        document.body.classList.add(theme + '-mode');
        let icon = document.getElementById('theme-icon');
        if (theme === 'dark') {
            icon.classList.add('fa-sun');
        } else {
            icon.classList.add('fa-moon');
        }
    };

    // Função para copiar o conteúdo da textarea
    function copyToClipboard() {
        let textarea = document.getElementById('output');
        textarea.select();
        textarea.setSelectionRange(0, 99999); // Para dispositivos móveis
        document.execCommand('copy');
        alert('Copied successfully!');
    }
