const textSection = document.getElementById('fixtureSection');
const augustBtn = document.getElementById('augustBtn');
const septemberBtn = document.getElementById('septemberBtn');

// Results arrays & objects
function matchdayResults(year, month, date, day, versus, ground, referee, goalSFC, goalOther) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.day = day;  
    this.versus = versus;
    this.ground = ground;
    this.referee = referee;
    this.goalSFC = goalSFC;
    this.goalOther = goalOther;  
}

const matchDay1 = new matchdayResults (
    2022, 'August', 6, 'Saturday',
    'Morpeth Town', 'Thunderdome', 'Ross Geller',
    ['Bing', 'Tribbiani'], ['Green']
);
const matchDay2 = new matchdayResults (
    2022, 'August', 20, 'Saturday',
    'Scarborough AFC', 'The Flamingo Land Stadium', 'Frank-N-Furter',
    ['Bing'], ['Geller', 'Buffay', 'Gunther']
)
const matchDay3 = new matchdayResults (
    2022, 'September', 10, 'Saturday',
    'Brackley', 'St James Park', 'Ross Geller',
    ['Bing', 'Tribbiani', 'Bing'], []
);
const matchDay4 = new matchdayResults (
    2022, 'September', 27, 'Saturday',
    'Kidderminster', 'Thunderdome', 'Joan of Arc',
    ['Tribbiani', 'Tribbiani'], ['Jack', 'July']
)

// Filters
var augustResults = [matchDay1, matchDay2];
var septemberResults = [matchDay3, matchDay4];
var seasonResults = [matchDay1, matchDay2, matchDay3, matchDay4];

var matches = -1;

function monthFilterAugust() {
    for (let i = 0; i < seasonResults.length; i++) {
        matches++;
        if (seasonResults[i].month === 'August') {
            displayResults();
        }
    } matches = -1;
}

function monthFilterSeptember() {
    for (let i = 0; i < seasonResults.length; i++) {
        matches++;
        if (seasonResults[i].month === 'September') {
            displayResults();
        }
    } matches = -1;
}



augustBtn.addEventListener('click', () => {
    blankPage();
    monthFilterAugust();
})
septemberBtn.addEventListener('click', () => {
    blankPage();
    monthFilterSeptember();
})

function displayResults () {
    let date = `${seasonResults[matches].day} ${seasonResults[matches].month} ${seasonResults[matches].date}`;
    let ground = `${seasonResults[matches].ground}`;

    if (seasonResults[matches].ground === 'Thunderdome') {
        var homeTeam = `Sportsball FC`;
        var homeTeamScore = `${seasonResults[matches].goalSFC.length}`;
        var homeTeamScorers = `${seasonResults[matches].goalSFC}`
        var homeTeamScorers = `${seasonResults[matches].goalSFC}`;
        var awayTeam = `${seasonResults[matches].versus}`;
        var awayTeamScore = `${seasonResults[matches].goalOther.length}`;
        var awayTeamScorers = `${seasonResults[matches].goalOther}`;
    } else {
        var homeTeam = `${seasonResults[matches].versus}`;
        var homeTeamScore = `${seasonResults[matches].goalOther.length}`;
        var homeTeamScorers = `${seasonResults[matches].goalOther}`;
        var awayTeam = `Sportsball FC`;
        var awayTeamScore = `${seasonResults[matches].goalSFC.length}`;
        var awayTeamScorers = `${seasonResults[matches].goalSFC}`;
    }

    let gameInfoPara = document.createElement('p');
    let homeTeamPara = document.createElement('p');
    let awayTeamPara = document.createElement('p');
    let homeTeamScorePara = document.createElement('p');
    let awayTeamScorePara = document.createElement('p');
    let homeTeamScorersPara = document.createElement('p');
    let awayTeamScorersPara = document.createElement('p');

    gameInfoPara.classList.add('gameInfo');
    homeTeamPara.classList.add('teamName', 'homeTeam');
    awayTeamPara.classList.add('teamName', 'awayTeam');
    homeTeamScorePara.classList.add('teamScore', 'homeTeam');
    awayTeamScorePara.classList.add('teamScore', 'awayTeam');
    homeTeamScorersPara.classList.add('teamScorers', 'homeTeam');
    awayTeamScorersPara.classList.add('teamScorers', 'awayTeam');

    gameInfoPara.textContent = `${ground} ${date}`;
    homeTeamPara.textContent = `${homeTeam}`;
    awayTeamPara.textContent = `${awayTeam}`;
    homeTeamScorePara.textContent = `${homeTeamScore}`;
    awayTeamScorePara.textContent = `${awayTeamScore}`;
    homeTeamScorersPara.textContent = `${homeTeamScorers}`;
    awayTeamScorersPara.textContent = `${awayTeamScorers}`;

    textSection.appendChild(gameInfoPara);
    textSection.appendChild(homeTeamPara);
    textSection.appendChild(awayTeamPara);
    textSection.appendChild(homeTeamScorePara);
    textSection.appendChild(awayTeamScorePara);
    textSection.appendChild(homeTeamScorersPara);
    textSection.appendChild(awayTeamScorersPara);
}

function blankPage() {
    if (textSection.childElementCount > 0) {
        while (textSection.lastElementChild) {
            textSection.removeChild(textSection.lastElementChild)
        }
    }
}