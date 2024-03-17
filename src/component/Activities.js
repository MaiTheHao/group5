import React from 'react';
import { useState } from 'react';
import "../css/Activities.css";

function ShowActivity({act, count}){
    return(
        <tr>
            <td>{count}</td>
            <td>{act.name}</td>
            <td>{act.content}</td>
            <td>{act.creator}</td>
            <td>{act.date}</td>
            <td>{act.status}</td>
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

                        </tbody>
                    </table>
                    
                </div>
                <div id="container-update">
                    <div id="update-add">
                        ADD
                    </div>
                    <div id="update-change">
                        CHANGE
                    </div>
                    <div id="update-remove">
                        REMOVE
                    </div>
                    <div id="updateForm">
                        <form>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities;