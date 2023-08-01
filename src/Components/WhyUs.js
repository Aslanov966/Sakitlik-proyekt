import React from "react";
import "../Css-files/whyus.css";
import WhyList from "./WhyList";
import perfect from "../Images/perfect.png"
import silent from "../Images/Silence.png";
import salary from "../Images/Salary.png";
import contract from "../Images/Contract.png";

function WhyUs() {
  return (
    // <h1>Hello {props.title}</h1>
    <div className="whyus">
      <div className="container">
        <div className="whyustexts">
          <h3>Nə üçün biz?</h3>
          <p className="whyus-body">
            Biz işə yaramayan və ya məna kəsb etməyən şeyləri satmadığımız üçün
            seçildik. Biz özümüz üçün aşağıdakı materialları və həll yollarını
            müəyyən etdik:
          </p>
        </div>
      </div>

      <div className="WhyLists">
        <WhyList  img={perfect}body='Sadə və istifadəsi asan, hətta" nənələr"  üçün də' />
        <WhyList  img={silent}body='Onlar təkcə laboratoriyada deyil, həm də sahədə effektivliyini sübut etmişlər.' />
        <WhyList  img={salary}body='Təxmini "şişirmək" vəzifəsi olan lazımsız elementləri ehtiva etmir' />
        <WhyList  img={contract}body='Bütün zəmanətlər sözlə deyil, müqavilədə qeyd olunub' />

      </div>
    </div>
  );
}
export default WhyUs;
