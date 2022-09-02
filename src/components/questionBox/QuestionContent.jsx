import Intro from '../intro/Intro';
import End from '../end/End';
import Question from '../question/Question';
import PropTypes from 'prop-types';

const QuestionContent = ({level, setLevel}) => {
    switch (level) {
        case 0:
            return <Intro days={100} onSubmit={setLevel}/>
        case 1:
            return <Question 
                        key="1"
                        questionNo={level} 
                        questionText="우리가 사귀기 시작한 날은?"
                        checkAnswer={(a) => {
                            if (a.month && a.day && a.month === 5 && a.day === 27)
                            {
                                setLevel(2)
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
                    />
        case 2:
            return <Question 
                        key="2"
                        questionNo={level} 
                        questionText="재영이의 생일은?"
                        checkAnswer={(a) => {
                            if (a.month && a.day && a.month === 8 && a.day === 11)
                            {
                                setLevel()
                            }
                            else
                            {
                                console.log(false);
                            }
                        }}
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