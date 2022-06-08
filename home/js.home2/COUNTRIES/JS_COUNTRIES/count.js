
        var countries={Belarus:'Minsk', Russia:'Moscow', Italy:'Rome'};

        function input() {
            var countryM = prompt('Введите название страны');
            var capital = prompt('Введите название столицы');
            countries[countryM] = capital;
            console.log(countries);
        }

        function information() {
            var country = prompt('Введите название страны на английском с заглавной буквы');
            if (country in countries){
                alert('Столица: ' + countries[country])
            }
            else {
                alert('Нет данных об этой стране')
            }
        }

        function allCountries() {
            for (var key in countries)
            console.log (key + ' - ' + countries[key])
        }

        function del() {
            var country = prompt ('Введите название страны на английском с заглавной буквы');
            delete countries[country];
            console.log(countries);
        }       
