import React from 'react'
import "../Css-files/havequestions.css"
function HaveQuestions() {
  return (
    <div className="havequestions">
        <div className="container">
            <div className="questions-texts">
                <p className="question-head">Suallarınız var?</p>
                <p className="question-body">Formu doldurun. <br /> Yaxın zamanda sizinlə əlaqə saxlayacağıq.</p>
            </div>
            <div className="questions-form">
                <form action="">
                    <input type="text" name="" id="" placeholder='Adınız və Soyadınız'/>
                    <input type="email"placeholder='Email ünvanı' />
                    <input type="number" name="" id="" placeholder='Əlaqə nömrəsi' />
                    <input type="text" placeholder='Mesajınız' />
                </form>
                <button>Göndər</button>
            </div>
        </div>
    </div>
  )
}

export default HaveQuestions
