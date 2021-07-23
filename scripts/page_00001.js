//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 0;
    var weight = DecodeNumber('VhKAHA7dbGM=', 946, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "What is reading? (Take out a pen and paper and write a paragaraph of what you fathom reading is)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}






