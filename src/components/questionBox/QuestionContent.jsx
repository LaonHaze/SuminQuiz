import Intro from '../intro/Intro';
import End from '../end/End';
import Question from '../question/Question';
import PropTypes from 'prop-types';

const QuestionContent = ({level, setLevel, setProgress}) => {
    const nextLevel = () => {
        setLevel(level + 1);
        setProgress(level*100/(levels.length - 2));
    }

    const resetQuiz = () => {
        setLevel(0);
        setProgress(0);
    }

    const levels = [
        <Intro days={100} onSubmit={setLevel}/>,
        <Question 
            key={level}
            questionNo={level} 
            questionText="우리가 어떻게 만났지?"
            hintText="(영어로 6글자 B로 시작!)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "bumble")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="아니야 ㅠㅠ 우리가 만난 어플 이름!"
            answerSetting={{
                maxLength: 6,
                englishOnly: true
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="우리가 처음 만났던 레스토랑 이름은?"
            hintText="(영어로 5글자 + 3글자)"
            checkAnswer={(a, wrongHandler) => {
                if (a.firstText && a.secondText && a.firstText.toLowerCase() === "tokyo" && a.secondText.toLowerCase() === "bay")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="text"
            wrongMessage="두 글자야! 도쿄 베이 영어로!"
            answerSetting={{
                englishOnly: true
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="우리가 사귀기 시작한 날은?"
            checkAnswer={(a, wrongHandler) => {
                if (a.month && a.day && a.month === 5 && a.day === 27)
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            wrongMessage="어떻게 이걸 틀려! ㅠㅠㅠ"
            answerType="date"
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="우리가 처음 같이 여행 갔던 곳은?"
            hintText="(영어로 6글자 P로 시작!)"
            checkAnswer={(a, wrongHandler) => {
                console.log(a);
                if (a.text && a.text.toLowerCase() === "paihia")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="이건 좀 어렵나? 파이히아 영어로!"
            answerSetting={{
                maxLength: 6,
                englishOnly: true
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="우리가 50일날 간 식당 이름은?"
            hintText="(영어로 6글자 Mr. MXXXXX)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "morris")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="미스터 모리스, 담에 또가자!"
            answerSetting={{
                maxLength: 6,
                preText: "Mr.",
                englishOnly: true
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="재영이가 수민이에게 처음으로 선물해준 목걸이 모양은?"
            hintText="(한글 2글자)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "하트")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="목걸이를 다시 봐바"
            answerSetting={{
                maxLength: 2,
                inputWidth: 32,
                koreanOnly: true
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="재영이의 생일은?"
            checkAnswer={(a, wrongHandler) => {
                if (a.month && a.day && a.month === 8 && a.day === 11)
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            wrongMessage="... 연애 초반에 내 생일 기억 못해서 좀 속상했어"
            answerType="date"
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="우리가 100일 기념으로 맞춰야 하는건?"
            hintText="(한글 3글자 ㅋㅍㄹ)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "커플링")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="자기가 맞추자고 했자나!"
            answerSetting={{
                maxLength: 3,
                inputWidth: 32,
                koreanOnly: true
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="재영이폰에 저장해된 수민이 이름은?"
            hintText="(한글 2글자 ㅇㅈ)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "요정")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="쟈긴 항상 이걸로 다 빠져나가지..."
            answerSetting={{
                maxLength: 2,
                inputWidth: 32,
                koreanOnly: true,               
                postText: "님",
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="수민이가 한국에서 돌아오면 제일 먼저 재영이에게 해줘야 하는것은?"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "뽀뽀")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="틀릴수 없다"
            answerSetting={{
                maxLength: 2,
                inputWidth: 32,
                koreanOnly: true,
                presetAnswer: "뽀뽀"
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="세상에서 제일 예쁜 재영이의 여자친구 이름은?"
            hintText="(ㅎㅅㅁ)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "하수민")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="거울속에 정답이 있어!"
            answerSetting={{
                maxLength: 3,
                inputWidth: 32,
                koreanOnly: true,
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="재영이에게 제일 소중한 사람은?"
            hintText="(ㅎㅅㅁ)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "하수민")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"         
            wrongMessage="거울속에 정답이 있어!"
            answerSetting={{
                maxLength: 3,
                inputWidth: 32,
                koreanOnly: true,
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="재영이가 지금 제일 보고싶은 사람은?"
            hintText="(ㅎㅅㅁ)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "하수민")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="거울속에 정답이 있어!"
            answerSetting={{
                maxLength: 3,
                inputWidth: 32,
                koreanOnly: true,
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="재영이가 제일 사랑하는 사람은?"
            hintText="(ㅎㅅㅁ)"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "하수민")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            wrongMessage="거울속에 정답이 있어!"
            answerSetting={{
                maxLength: 3,
                inputWidth: 32,
                koreanOnly: true,
            }}
        />,
        <Question 
            key={level}
            questionNo={level} 
            questionText="사랑해"
            hintText="사랑해"
            checkAnswer={(a, wrongHandler) => {
                if (a.text && a.text.toLowerCase() === "사랑해")
                {
                    nextLevel();
                }
                else
                {
                    wrongHandler();
                }
            }}
            answerType="singleText"
            answerSetting={{
                maxLength: 3,
                inputWidth: 32,
                koreanOnly: true,
                presetAnswer: "사랑해"
            }}
        />,
        <End days={100} onSubmit={resetQuiz} />
    ]

    const getLevel = () => {
        return levels[level];
    }

    return (
        <>
            {getLevel()}
        </>
    );
}

QuestionContent.propTypes = {
    level: PropTypes.number,
    setLevel: PropTypes.func
}

export default QuestionContent;