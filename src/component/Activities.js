import React from 'react';
import { useState} from 'react';
import "../css/Activities.css";

const statusKeys = {
    0: "Đang thực hiện",
    1: "Đang lên kế hoạch",
    2: "Đang Trì hoãn",
    3: "Đã hoàn thành",
    4: "Đã hủy"
}

function ShowActivity({act, count}){
    return(
        <tr>
            <td>{count}</td>
            <td>{act.name}</td>
            <td>{act.content}</td>
            <td>{act.creator}</td>
            <td>{act.date}</td>
            <td className={"status"+act.status}>{statusKeys[act.status]}</td>
        </tr>
    )
}

function ShowActivities({activities}){
    const TableFields=[
        "STT", "Tên hoạt động", "Nội dung hoạt động", "Người tạo", "Ngày tạo", "Trạng thái"
    ]
    return(
        <div id="container-show">
            <div id="searchForm">
                <form>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='Tìm kiếm hoạt động' id="searchActivities"></input>
                </form>
                <div id="searchForm__result"></div>
            </div>
            <table>
                <thead>
                    <tr>
                        {TableFields.map((field, index)=>(<th key={index}>{field}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {activities.map((e, index) => (<ShowActivity key={index} act={e} count={index}></ShowActivity>))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">Tổng số hoạt động: {activities.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

function UpdateActivities(){
    const description=[
        {
            icon: "fa-star",
            text: "Hãy lựa chọn một trong các mục sau đây để thiết lập hình thức thao tác với dữ liệu."
        },
        {
            icon: "fa-star",
            text: "Các hình thức được hỗ trợ: Thêm, Xóa, Chỉnh Sửa."
        },
        {
            icon: "fa-heart",
            text: "Chúc bạn có thời gian trải nghiệm vui vẻ!"
        }
    ]

    const optionBtns=[
        {
            id: "update-add",
            description: "Thêm"
        },
        {
            id: "update-change",
            description: "Chỉnh Sửa"
        },
        {
            id: "update-remove",
            description: "Xóa"
        }
    ]
    return(
        <div id="container-update">
            <div id="update-block" className="box_shadow">
                <div id="updateOptions" className="update-block__part">
                    <div id="update-description">
                        <h3>LỰA CHỌN HÌNH THỨC <i className="fa-solid fa-wand-magic-sparkles"></i></h3>
                        {description.map(({icon, text}, index) => <p key={index}><i className={"fa-solid "+icon}></i> {text}</p>)}
                    </div>
                    {optionBtns.map(({id, description}, index)=><button key={index} id={id} className='active'>{description}</button>)}
                </div>
                <div id="updateForm" className="update-block__part">
                    <form id="update-addform">
                        <label className="updateForm__label" htmlFor='inputName'>
                            <span>Hoạt động</span>
                            <input placeholder='Tên hoạt động' id="inputName"></input>
                        </label>
                        
                        <label className="updateForm__label" htmlFor='inputContent'>
                            <span>Nội dung</span>
                            <input placeholder="Nội dung" id="inputContent"></input>
                        </label>
                        
                        <label className="updateForm__label" htmlFor='inputCreator'>
                            <span>Người đăng</span>
                            <input placeholder='Tên người đăng' id="inputCreator"></input>
                        </label>
                        
                        <label className="updateForm__label" htmlFor='inputDate'>
                            <span>Ngày đăng</span>
                            <input type="date" id="inputDate"></input>
                        </label>
                        
                        <label className="updateForm__label" htmlFor='inputStatus'>
                            <span>Trạng thái</span>
                            <div id="inputStatus">
                                <select name="inputStatus" id="inputStatus_select">
                                    <option value="dangthuchien">Đang thực hiện</option>
                                    <option value="danglenkehoach">Đang lên kế hoạch</option>
                                    <option value="dangtrihoan">Đang trì hoãn</option>
                                    <option value="dahoanthanh">Đã hoàn thành</option>
                                    <option value="dahuy">Đã hủy</option>
                                </select>
                            </div>
                        </label>
                        <button type="submit" className="active">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Activities({activities}){
    const [option, setOption] = useState("showBtn");
    const handleChangeOption = (id) => {
        setOption(id);
    }

    return(
        <div id="Activities">
            <div id="Header">
                <h1>HOẠT ĐỘNG CỦA GROUP</h1>
                <div id="Header__option">
                    <button id="showBtn" className="active" onClick={()=>handleChangeOption("showBtn")} style={{ opacity: option === "showBtn" ? 1 : 0.5}}>Xem</button>
                    <button id="updateBtn" className="active" onClick={()=>handleChangeOption("updateBtn")} style={{ opacity: option === "updateBtn" ? 1 : 0.5}}>Cập nhật</button>
                </div>
            </div>
            <div id="container">
                <ShowActivities activities={activities}></ShowActivities>
                <UpdateActivities></UpdateActivities>
            </div>
        </div>
    )
}

export default Activities;