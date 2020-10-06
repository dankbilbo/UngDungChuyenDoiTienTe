function exchange()
{
    var amount  = document.getElementById("amount").value;
    var currencyFrom = document.getElementById("currencyFrom").value;
    var currencyTo = document.getElementById("currencyTo").value;
    var rate;
    switch (currencyFrom)
    {   case "vietnamdong" :
        switch (currencyTo)
        {
            case "vietnamdong" :
                rate = 1;
                break;
            case  "dollar" :
                rate = 1 / 23000;
                break;
            case "canadadollar" :
                rate = 1 / 17000;
                break;
            case "yen" :
                rate = 1 / 220;
                break;
        }
        break;

        case "dollar" :
        switch (currencyTo)
        {
            case "dollar" :
                rate = 1;
                break;
            case "vietnamdong" :
                rate = 23000;
                break;
            case "canadadollar" :
                rate = 1.4;
                break;
            case "yen" :
                rate = 110;
                break;
        }
        break;

        case "canadadollar" :
        switch (currencyTo)
        {
            case "canadadollar" :
                rate = 1;
                break;
            case "vietnamdong" :
                rate = 17000;
                break;
            case "yen" :
                rate = 80;
                break;
            case "dollar" :
                rate = 1 / 1.4;
                break;
        }
        break;

        case "yen" :
        switch (currencyTo)
        {
            case "yen" :
            rate = 1;
            break;
            case "vietnamdong" :
            rate = 220;
            break;
            case "dollar" :
            rate = 1 / 110;
            break;
            case "canadadollar" :
            rate = 1 / 80;
            break;
        }
        break;
    }
    var result = rate * amount;
    document.getElementById("convert").innerHTML = "Result : " + result.toString();
}