import React from 'react';
import "../css/Introduce.css";
import HTMLReactParser from 'html-react-parser';

const Introduces = [
    {
        title: "LỊCH SỬ HÌNH THÀNH",
        description: [
            "Thành lập tháng 2 năm 2024.",
            "<b>AE TỔ 5</b> được thành lập nhằm mục đích <b>học tập, nghiên cứu, trao đổi, hỗ trợ lẫn nhau</b> giữa các thành viên.",
            "Nơi cưu mang những con người bất hạnh bị xã hội tư bản ruồng bỏ.",
            'Là một bộ phận của <b title="Tập thể lớp 12.11 thuộc trường THPT Huỳnh Văn Nghệ, năm học 2023-2024">tập thể lớp 12.11 (2023-2024 HVN)</b>.'
        ]
    },
    {
        title: "MỤC TIÊU HƯỚNG ĐẾN",
        description: [
            "Các thành viên thuộc <b>AE TỔ 5</b> luôn ra sức học hỏi tìm tòi phát huy sức mạnh tập thể.",
            "Hướng đến mục tiêu công bằng, bình đẳng, <b>lật đổ tư bản</b>.",
            "Yêu Tổ quốc, yêu đồng bào, tự hào dân tộc, tự tin chiến thắng."
        ]
    }
]

function Introduce(){
    return(
        <div id="Introduce">
            <h1 id="page-title"><i className="fa-regular fa-star"></i>  INTRODUCING GROUP  <i className="fa-regular fa-star"></i></h1>
            <div id="body">
            {Introduces.map(({title, description}) => (
                <div key={"IntroduceElements-"+title} className="body-element">
                    <h2 className="element-title">{title}</h2>
                    <div className="element-description">
                    {description.map((text, index) => (<p key={`IntroduceElementChildrens-${index}`} className="element-description__line">-{HTMLReactParser(text)}</p>))}
                    </div>
                </div>
            ))}
            </div>    
        </div>
    )
}

export default Introduce;