const submitInput = document.getElementById('submitInput');
let august2022 = [{
    date: 6, day: 'Saturday', versus: 'Morpeth Town',
    ground: 'Thunderdome', referee: 'Ross Geller',
    goalSFC: ['Bing', 'Tribbiani'],
    goalOther: ['Green'],
},
{
    date: 13, day: 'Saturday', versus: 'Scarborough AFC',
    ground: 'The Flamingo Land Stadium', referee: 'Frank-N-Furter',
    goalSFC: ['Bing'],
    goalOther: ['Geller', 'Buffay', 'Gunther'],
},
{
    date: 20, day: 'Saturday', versus: 'Brackley',
    ground: 'St James Park', referee: 'Ross Geller',
    goalSFC: ['Bing', 'Tribbiani', 'Bing'],
    goalOther: [''],
},
{
    date: 27, day: 'Saturday', versus: 'Kidderminster',
    ground: 'Thunderdome', referee: 'Joan of Arc',
    goalSFC: ['Tribbiani', 'Tribbiani'],
    goalOther: ['Jack', 'Judy'],
},]

let seasonResults = {
    year2022: [
        {august: [
            {
                date: 6, day: 'Saturday', versus: 'Morpeth Town',
                ground: 'Thunderdome', referee: 'Ross Geller',
                goalSFC: ['Bing', 'Tribbiani'],
                goalOther: ['Green']
            },
            {
                date: 20, day: 'Saturday', versus: 'Scarborough AFC',
                ground: 'The Flamingo Land Stadium', referee: 'Frank-N-Furter',
                goalSFC: ['Bing'],
                goalOther: ['Geller', 'Buffay', 'Gunther'],
            }
            ],
            september: [
                {
                    date: 10, day: 'Saturday', versus: 'Brackley',
                    ground: 'St James Park', referee: 'Ross Geller',
                    goalSFC: ['Bing', 'Tribbiani', 'Bing'],
                    goalOther: [''],
                },
                {
                    date: 27, day: 'Saturday', versus: 'Kidderminster',
                    ground: 'Thunderdome', referee: 'Joan of Arc',
                    goalSFC: ['Tribbiani', 'Tribbiani'],
                    goalOther: ['Jack', 'Judy'],
                }
            ],
        },         
        ]
}




console.log(seasonResults.year2022[0].august[0])

// let augustHome = august2022.filter(august => august.ground === 'Thunderdome');
// let augustAway = august2022.filter(august => august.ground != 'Thunderdome');




// const fixtureSection = document.getElementById('fixtureSection');



// const result = august2022.filter(august => august.ground === 'Thunderdome').map(inner => Object.values(inner)[0]);
// console.log(result)

// submitInput.addEventListener('click', () => {
//     let printDate = document.createElement('p');
//     let printDateText = document.createTextNode(`${typeof result}${result}`);
//     printDate.appendChild(printDateText);
//     fixtureSection.appendChild(printDate);
// });

// console.log(typeof august2022[0], august2022[1]);