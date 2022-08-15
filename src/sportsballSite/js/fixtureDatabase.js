const homePageTrigger = document.getElementById('fixturesLinkHomePage');
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
    'Tinsel Town FC', 'Thunderdome', 'Ross Geller',
    ['Bing 34', 'Tribbiani 45+1'], ['Cruise 87']
);
const matchDay2 = new matchdayResults (
    2022, 'August', 20, 'Saturday',
    'Old York Utd', 'Central Perk Stadium', 'Frank-N-Furter',
    ['Bing 22'], ['Geller 31', 'Buffay 67', 'Gunther 76']
)
const matchDay3 = new matchdayResults (
    2022, 'September', 10, 'Saturday',
    'Riverside', 'St James Park', 'Ross Geller',
    ['Bing 19', 'Tribbiani 85', 'Bing 90+3'], []
);
const matchDay4 = new matchdayResults (
    2022, 'September', 27, 'Saturday',
    'United Utd', 'Thunderdome', 'Joan of Arc',
    ['Tribbiani 65', 'Tribbiani 68'], ['Jack 32', 'Judy 48']
)

// Variables
var seasonResults = [matchDay1, matchDay2, matchDay3, matchDay4];
var scorerPara = document.createElement('p'),
clone;
var matches = -1;

// Filters
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
        var homeTeamClass = `sportsballFC`;
        var homeTeamScore = `${seasonResults[matches].goalSFC.length}`;
        var homeTeamScorers = document.createElement('div');
        homeTeamScorers.classList.add('teamScorers', 'homeTeamScorers')
        seasonResults[matches].goalSFC.forEach(function (scorer, index) {
            clone = scorerPara.cloneNode();
            clone.textContent = scorer;
            clone.classList.add(`scorer${index}`, 'scorer')
            homeTeamScorers.appendChild(clone);
        })
        var awayTeam = `${seasonResults[matches].versus}`;
        var awayTeamClass = awayTeam.toLowerCase();
        awayTeamClass = awayTeamClass.replace(/\s+/g, '');
        var awayTeamScore = `${seasonResults[matches].goalOther.length}`;
        var awayTeamScorers = document.createElement('div');
        awayTeamScorers.classList.add('teamScorers', 'awayTeamScorers')
        seasonResults[matches].goalOther.forEach(function (scorer, index) {
            clone = scorerPara.cloneNode();
            clone.textContent = scorer;
            clone.classList.add(`scorer${index}`, 'scorer')
            awayTeamScorers.appendChild(clone);
        })
    } else {
        var homeTeam = `${seasonResults[matches].versus}`;
        var homeTeamClass = homeTeam.toLowerCase();
        homeTeamClass = homeTeamClass.replace(/\s+/g, '');
        var homeTeamScore = `${seasonResults[matches].goalOther.length}`;
        var homeTeamScorers = document.createElement('div');
        homeTeamScorers.classList.add('teamScorers', 'homeTeamScorers')
        seasonResults[matches].goalOther.forEach(function (scorer, index) {
            clone = scorerPara.cloneNode();
            clone.textContent = scorer;
            clone.classList.add(`scorer${index}`, 'scorer')
            homeTeamScorers.appendChild(clone);
        })        
        var awayTeam = `Sportsball FC`;
        var awayTeamClass = `sportsballFC`;
        var awayTeamScore = `${seasonResults[matches].goalSFC.length}`;
        var awayTeamScorers = document.createElement('div');
        awayTeamScorers.classList.add('teamScorers', 'awayTeamScorers')
        seasonResults[matches].goalSFC.forEach(function (scorer, index) {
            clone = scorerPara.cloneNode();
            clone.textContent = scorer;
            clone.classList.add(`scorer${index}`, 'scorer')
            awayTeamScorers.appendChild(clone);
        })
    }

    let resultContainer = document.createElement('div');
    let gameInfoDiv = document.createElement('div');
    let gameInfoGround = document.createElement('p');
    let gameInfoDate = document.createElement('p');
    let homeTeamDiv = document.createElement('div');
    let homeTeamPara = document.createElement('p');
    let homeTeamImg = document.createElement('div');
    let awayTeamDiv = document.createElement('div');
    let awayTeamPara = document.createElement('p');
    let awayTeamImg = document.createElement('div');
    let homeTeamScorePara = document.createElement('p');
    let awayTeamScorePara = document.createElement('p');
    let teamsFlex = document.createElement('div');

    resultContainer.classList.add('resultContainer');
    gameInfoDiv.classList.add('gameInfoFlex');
    gameInfoGround.classList.add('gameInfoGround');
    gameInfoDate.classList.add('gameInfoDate');
    homeTeamDiv.classList.add('homeTeamContainer');
    homeTeamImg.classList.add('teamImg', 'homeTeamImg', `${homeTeamClass}Img`);
    homeTeamPara.classList.add('teamName', 'homeTeam', `${homeTeamClass}`);
    awayTeamDiv.classList.add('awayTeamContainer');
    awayTeamImg.classList.add('teamImg', 'awayTeamImg', `${awayTeamClass}Img`);
    awayTeamPara.classList.add('teamName', 'awayTeam', `${awayTeamClass}`);
    homeTeamScorePara.classList.add('teamScore', 'homeTeam');
    awayTeamScorePara.classList.add('teamScore', 'awayTeam');
    teamsFlex.classList.add('teamsFlex');

    gameInfoGround.textContent = `${ground}`;
    gameInfoDate.textContent = `${date}`;
    homeTeamPara.textContent = `${homeTeam}`;
    awayTeamPara.textContent = `${awayTeam}`;
    homeTeamScorePara.textContent = `${homeTeamScore}`;
    awayTeamScorePara.textContent = `${awayTeamScore}`;

    gameInfoDiv.appendChild(gameInfoGround);
    gameInfoDiv.appendChild(gameInfoDate);
    homeTeamDiv.appendChild(homeTeamImg);
    homeTeamDiv.appendChild(homeTeamPara);
    homeTeamDiv.appendChild(homeTeamScorePara);
    homeTeamDiv.appendChild(homeTeamScorers);
    teamsFlex.appendChild(homeTeamDiv);
    awayTeamDiv.appendChild(awayTeamImg);
    awayTeamDiv.appendChild(awayTeamPara);
    awayTeamDiv.appendChild(awayTeamScorePara);
    awayTeamDiv.appendChild(awayTeamScorers);
    teamsFlex.appendChild(awayTeamDiv);
    resultContainer.appendChild(gameInfoDiv);
    resultContainer.appendChild(teamsFlex);
    textSection.appendChild(resultContainer);
}

function blankPage() {
    if (textSection.childElementCount > 0) {
        while (textSection.lastElementChild) {
            textSection.removeChild(textSection.lastElementChild)
        }
    }
}

monthFilterAugust();