$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [
  {
    "date": "2017-01-01",
    "sales": 384.74,
    "custdonations": 48.5,
    "ourdonations": 48.75
  },
  {
    "date": "2017-01-02",
    "sales": 394.54,
    "custdonations": 8.6,
    "ourdonations": 7.9
  },
  {
    "date": "2017-01-03",
    "sales": 373.51,
    "custdonations": 7.61,
    "ourdonations": 2.83
  },
  {
    "date": "2017-01-04",
    "sales": 348.32,
    "custdonations": 8.29,
    "ourdonations": 3.32
  },
  {
    "date": "2017-01-05",
    "sales": 341.08,
    "custdonations": 13.05,
    "ourdonations": 1.45
  },
  {
    "date": "2017-01-06",
    "sales": 325.27,
    "custdonations": 1.35,
    "ourdonations": 0.03
  },
  {
    "date": "2017-01-07",
    "sales": 481.39,
    "custdonations": 6.16,
    "ourdonations": 6.89
  },
  {
    "date": "2017-01-08",
    "sales": 360.77,
    "custdonations": 23.01,
    "ourdonations": 13.64
  },
  {
    "date": "2017-01-09",
    "sales": 375.11,
    "custdonations": 38.28,
    "ourdonations": 15.23
  },
  {
    "date": "2017-01-10",
    "sales": 462.52,
    "custdonations": 18.73,
    "ourdonations": 11.02
  },
  {
    "date": "2017-01-11",
    "sales": 418.83,
    "custdonations": 6.97,
    "ourdonations": 3.34
  },
  {
    "date": "2017-01-12",
    "sales": 465.51,
    "custdonations": 44.68,
    "ourdonations": 23.09
  },
  {
    "date": "2017-01-13",
    "sales": 416.24,
    "custdonations": 1.62,
    "ourdonations": 0.28
  },
  {
    "date": "2017-01-14",
    "sales": 464.5,
    "custdonations": 29.69,
    "ourdonations": 6.52
  },
  {
    "date": "2017-01-15",
    "sales": 477.99,
    "custdonations": 22.82,
    "ourdonations": 10.22
  },
  {
    "date": "2017-01-16",
    "sales": 393.87,
    "custdonations": 12.14,
    "ourdonations": 12.56
  },
  {
    "date": "2017-01-17",
    "sales": 402.79,
    "custdonations": 29.53,
    "ourdonations": 1.2
  },
  {
    "date": "2017-01-18",
    "sales": 317.75,
    "custdonations": 21.04,
    "ourdonations": 20.06
  },
  {
    "date": "2017-01-19",
    "sales": 428.31,
    "custdonations": 5.99,
    "ourdonations": 3.06
  },
  {
    "date": "2017-01-20",
    "sales": 385.32,
    "custdonations": 4.86,
    "ourdonations": 2.03
  },
  {
    "date": "2017-01-21",
    "sales": 397.52,
    "custdonations": 27.75,
    "ourdonations": 21.77
  },
  {
    "date": "2017-01-22",
    "sales": 454.7,
    "custdonations": 32.37,
    "ourdonations": 0.87
  },
  {
    "date": "2017-01-23",
    "sales": 478.35,
    "custdonations": 18.89,
    "ourdonations": 6.98
  },
  {
    "date": "2017-01-24",
    "sales": 418.05,
    "custdonations": 27.26,
    "ourdonations": 27.85
  },
  {
    "date": "2017-01-25",
    "sales": 475.03,
    "custdonations": 4.22,
    "ourdonations": 2.65
  },
  {
    "date": "2017-01-26",
    "sales": 453.26,
    "custdonations": 20.7,
    "ourdonations": 0.08
  },
  {
    "date": "2017-01-27",
    "sales": 324.78,
    "custdonations": 45.31,
    "ourdonations": 24.05
  },
  {
    "date": "2017-01-28",
    "sales": 384.96,
    "custdonations": 14.93,
    "ourdonations": 11.76
  },
  {
    "date": "2017-01-29",
    "sales": 408.02,
    "custdonations": 25.27,
    "ourdonations": 18.68
  },
  {
    "date": "2017-01-30",
    "sales": 413.08,
    "custdonations": 9.3,
    "ourdonations": 7.74
  },
  {
    "date": "2017-01-31",
    "sales": 300.65,
    "custdonations": 7.73,
    "ourdonations": 7.48
  }],
  xkey: 'date',
        ykeys: ['sales', 'custdonations', 'ourdonations'],
        labels: ['Gross Sales', 'Customer Donations', 'Matching Donations'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'gross-payment-method-chart',
        data: [{
            label: "Cash",
            value: 65.57
        }, {
            label: "Debit",
            value: 104.32
        }, {
            label: "MasterCard",
            value: 53.25
        }, {
            label: "Visa",
            value: 62.78
        }, {
            label: "Amex",
            value: 46.23
        }],
        resize: true
    });

    Morris.Donut({
        element: 'donation-payment-method-chart',
        data: [{
            label: "Cash",
            value: 13.00
        }, {
            label: "Debit",
            value: 23.50
        }, {
            label: "MasterCard",
            value: 17.20
        }, {
            label: "Visa",
            value: 20.75
        }, {
            label: "Amex",
            value: 10.00
        }],
        resize: true
    });
});
