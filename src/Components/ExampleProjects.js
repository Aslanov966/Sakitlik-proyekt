import React from 'react'
import projectexample from "../Images/projectexamplefirst.jpg"
import "../Css-files/exampleproject.css"
function ExampleProjects() {
  return (
    <div className="example-projects">
      <div className="container">
        <div className="project-texts">
          <div className="project-heads">
           <p className="project-head">Layihə nümunələri</p>
            <p className="project-name">г. Зеленоград, ЖК Мелодия Леса, д.1</p>
          </div>
          <div className="problem">
            <p className="problema-head">
             Проблема:
            </p>
            <p className="problem-body">
             В феврале 2018 года в нашу компанию обратился клиент с проблемами
              посторонних шумов, которые проникали из квартиры соседа за стеной.
            </p>
          </div>
          <div className="rabota">
            <p className="rabota-head">
             Отзыв клиента о работе Шумовнет:
            </p>
            <p className="rabota-body">
              Благодарим компанию Шумовнет за решение нашей проблемы, связанной 
              с громкими шумами от соседа. В какой-то момент нам казалось, что мы зря
               потратили деньги, но специалисты компании довели дело до конца, для нас
              это самый высокий показатель в плане отношения с клиентами, большое спасибо.
            </p>
          </div>  
          <div className="button">
           <button>Sifariş göndər</button>
          </div>            
        </div>
        <div className="project-images">
            <img src={projectexample} alt="" />
        </div>

      </div>
    </div>
  )
}

export default ExampleProjects
