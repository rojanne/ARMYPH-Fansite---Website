var members = [
    {
        "stageName": "RM (아르엠)",
        "birthName": "Kim Nam Joon (김남준)",
        "position": "Leader, Main Rapper",
        "birthday": "September 12, 1994",
        "zodiac": "Virgo",
        "Height": "181 cm (5’11”)",
        "Weight": "76 kg (167 lbs)",
        "blood": "A",
        "mbti": "ENTP (his previous results were ENFP and INFP)"
    },
    {
        "stageName": "Jin (진)",
        "birthName": "Kim Seok Jin (김석진)",
        "Position": "Sub Vocalist, Visual",
        "birthday": "December 4, 1992",
        "zodiac": "Sagittarius",
        "Height": "179 cm (5’10.4″)",
        "Weight": "61 kg (134 lbs)",
        "blood": "O",
        "mbti": "INTP"
    },
    {
        "stageName": "Suga (슈가)",
        "birthName": "Min Yoon Gi (민윤기)",
        "Position": "Lead Rapper",
        "birthday": "March 9, 1993",
        "zodiac": "Pisces",
        "Height": "174 cm (5’8.5″)",
        "Weight": "63 kg (138 lbs)",
        "blood": "O",
        "mbti": "ISTP (His previous results were INFP->INTP)"
    },
    {
        "stageName": "J-Hope (제이홉)",
        "birthName": "Jung Ho Seok (정호석)",
        "Position": "Main Dancer, Sub Rapper, Sub Vocalist",
        "birthday": "February 18, 1994",
        "zodiac": "Aquarius",
        "Height": "177 cm (5’10”)",
        "Weight": "65 kg (143 lbs)",
        "blood": "A",
        "mbti": "INFJ (His previous result was ESFJ)"
    },
    {
        "stageName": "Jimin (지민)",
        "birthName": "Park Ji Min (박지민)",
        "Position": "Main Dancer, Lead Vocalist",
        "birthday": "October 13, 1995",
        "zodiac": "Libra",
        "Height": "174 cm (5’8.5″)",
        "Weight": "58.6 kg (129 lbs)",
        "blood": "A",
        "mbti": "ESTP (His previous result was ENFJ)"
    },
    {
        "stageName": "V (뷔)",
        "birthName": "Kim Tae Hyung (김태형)",
        "Position": "Lead Dancer, Sub Vocalist, Visual",
        "birthday": "December 30, 1995",
        "zodiac": "Capricorn",
        "Height": "179 cm (5’10.4″)",
        "Weight": "64 kg (141 lbs)",
        "blood": "AB",
        "mbti": "INFP-T (His previous result was ENFP)"
    },
    {
        "stageName": "Jungkook (정국)",
        "birthName": "Jeon Jung Kook (전정국)",
        "Position": "Main Vocalist, Lead Dancer, Sub Rapper, Center, Maknae",
        "birthday": "September 1, 1997",
        "zodiac": "Virgo",
        "Height": "179 cm (5’10”)",
        "Weight": "71 kg (156 lbs)",
        "blood": "A",
        "mbti": "INTP-T (His previous result was ISFP-T)"
    },
]

let rm = document.getElementById("namjoon");
let jin = document.getElementById("jin");
let suga = document.getElementById("suga");
let jhope = document.getElementById("jhope");
let jimin = document.getElementById("jimin");
let v = document.getElementById("v");
let jk = document.getElementById("jk");

var mems = [rm, jin, suga, jhope, jimin, v, jk];
var stringHTML = '';
for (i = 0; i < mems.length; i++) {
    stringHTML =`
    <div class = "details">
        <br>
        Stage-name:  ${members[i].stageName}<br><br>
        Birth-name:  ${members[i].birthName}<br><br>
        Position:  ${members[i].Position}<br><br>
        Birthday:  ${members[i].birthday}<br><br>
        Zodiac Sign:  ${members[i].zodiac}<br><br>
        Height:  ${members[i].Height}<br><br>
        Weight:  ${members[i].Weight}<br><br>
        Blood Type:  ${members[i].blood}<br><br>
        MBTI Type:  ${members[i].mbti}<br><br>
    </div>
    `;
    mems[i].innerHTML = stringHTML;
}