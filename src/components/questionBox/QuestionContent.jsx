import Intro from '../intro/Intro';
import End from '../end/End';
import Question from '../question/Question';
import PropTypes from 'prop-types';

const QuestionContent = ({level, setLevel}) => {
    const nextLevel = () => {
        setLevel(level + 1);
    }

    switch (level) {
        case 0:
            return <Intro days={100} onSubmit={setLevel}/>
        case 1:
            return <Question 
                        key={level}
                        questionNo={level} 
                        questionText="우리가 사귀기 시작한 날은?"
                        checkAnswer={(a) => {
                            if (a.month && a.day && a.month === 5 && a.day === 27)
                            {
                                nextLevel()
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
                        answerType="date"
                    />
        case 2:
            return <Question 
                        key={level}
                        questionNo={level} 
                        questionText="우리가 처음 만났던 레스토랑 이름은?"
                        hintText="(영어로 5글자 + 3글자)"
                        checkAnswer={(a) => {
                            console.log(a);
                            if (a.firstText && a.secondText && a.firstText.toLowerCase() === "tokyo" && a.secondText.toLowerCase() === "bay")
                            {
                                nextLevel()
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
                        answerType="text"
                    />
        case 3:
            return <Question 
                        key={level}
                        questionNo={level} 
                        questionText="우리가 처음 같이 여행 갔던 곳은?"
                        hintText="(영어로 6글자 P 시작!)"
                        checkAnswer={(a) => {
                            console.log(a);
                            if (a.text && a.text.toLowerCase() === "paihia")
                            {
                                nextLevel()
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
                        answerType="singleText"
                        answerSetting={{
                            maxLength: 6
                        }}
                    />
        case 4:
            return <Question 
                        key={level}
                        questionNo={level} 
                        questionText="우리가 50일날 간 식당 이름은?"
                        hintText="(영어로 6글자 Mr. MXXXXX)"
                        checkAnswer={(a) => {
                            console.log(a);
                            if (a.text && a.text.toLowerCase() === "morris")
                            {
                                nextLevel()
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
                        answerType="singleText"
                        answerSetting={{
                            maxLength: 6,
                            preText: "Mr."
                        }}
                    />
        case 5:
            return <Question 
                        key={level}
                        questionNo={level} 
                        questionText="재영이가 수민이에게 처음으로 선물해준 목걸이 모양은?"
                        hintText="(한글 2글자)"
                        checkAnswer={(a) => {
                            console.log(a);
                            if (a.text && a.text.toLowerCase() === "하트")
                            {
                                nextLevel()
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
                        answerType="singleText"
                        answerSetting={{
                            maxLength: 2,
                            inputWidth: 32
                        }}
                    />        
        case 6:
            return <Question 
                        key={level}
                        questionNo={level} 
                        questionText="재영이의 생일은?"
                        checkAnswer={(a) => {
                            if (a.month && a.day && a.month === 8 && a.day === 11)
                            {
                                nextLevel()
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
                        answerType="date"
                    />
        default:
            return <End days={100} onSubmit={setLevel}/>
    }
}

QuestionContent.propTypes = {
    level: PropTypes.number,
    setLevel: PropTypes.func
}

export default QuestionContent;