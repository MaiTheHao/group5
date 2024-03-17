import React from 'react';
import { useState } from 'react';
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
                                <th>STT</th>
                                <th>Tên hoạt động</th>
                                <th>Nội dung hoạt động</th>
                                <th>Người đề xuất</th>
                                <th>Ngày đề xuất</th>
                                <th>Trạng thái</th>
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
                <div id="container-update">
                    <div id="update-block">
                        <div id="updateOptions">
                            <div id="update-description">
                                <h3>LỰA CHỌN HÌNH THỨC <i className="fa-solid fa-wand-magic-sparkles"></i></h3>
                                <p><i className="fa-solid fa-star"></i> Hãy lữa chọn một trong các mục sau đây để thiết lập hình thức thao tác với dữ liệu.</p>
                                <p><i className="fa-solid fa-star"></i> Các hình thức được hỗ trợ: Thêm, Xóa, Chỉnh Sửa.</p>
                                <p><i className="fa-solid fa-heart"></i> Chúc bạn có thời gian trải nghiệm vui vẻ!</p>
                            </div>
                            <button id="update-add">Thêm</button>
                            <button id="update-remove">Xóa</button>
                            <button id="update-change">Chỉnh Sửa</button>
                        </div>
                        <div id="updateForm">
                            <form id="form1">
                                <label className="updateForm__label" htmlFor='inputName'>
                                    Hoạt động
                                    <input placeholder='Tên hoạt động' id="inputName"></input>
                                </label>
                                
                                <label className="updateForm__label" htmlFor='inputContent'>
                                    Nội dung
                                    <input placeholder="Nội dung" id="inputContent"></input>
                                </label>
                                
                                <label className="updateForm__label" htmlFor='inputCreator'>
                                    Người đăng
                                    <input placeholder='Tên người đăng' id="inputCreator"></input>
                                </label>
                                
                                <label className="updateForm__label" htmlFor='inputDate'>
                                    Ngày đăng
                                    <input type="date" id="inputDate"></input>
                                </label>
                                
                                <label className="updateForm__label">
                                    Trạng thái
                                    <div>
                                        <input type="radio" id="status1" name="inputStatus__option" value="dangthuchien"/>
                                        <label htmlFor="status1">Đang thực hiện</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="status2" name="inputStatus__option" value="danglenkehoach"/>
                                        <label htmlFor="status2">Đang lên kế hoạch</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="status3" name="inputStatus__option" value="dangtrihoan"/>
                                        <label htmlFor="status3">Đang trì hoãn</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="status4" name="inputStatus__option" value="dahoanthanh"/>
                                        <label htmlFor="status4">Đã hoàn thành</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="status5" name="inputStatus__option" value="dahuy"/>
                                        <label htmlFor="status5">Đã hủy</label>
                                    </div>
                                </label>
                                <button type="submit">SUBMIT</button>
                            </form>
                            <form id="form2">

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities;