import React from "react";
import "../css/Members.css";

function ListMember({ Title, children }) {
    return (
        <div className="Members__table">
            <h2>{Title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Vai trò</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

function Member({ member: { name, job, email }, count }) {
    return (
        <tr key={count} className="Members__table__element">
            <td>{count}</td>
            <td>{name}</td>
            <td>{(email!=null) ? <a href={`mailto:${email}`} target="_blank" rel="noreferrer">{email}</a> : <p>Không có Email</p>}</td>
            <td>{job}</td>
        </tr>
    )
}

function Members({ members }) {
    return (
        <div id="Members">
            <h1 id="page-title"><i className="fa-solid fa-heart"></i> GROUP MEMBERS <i className="fa-solid fa-heart"></i></h1>
            <ListMember Title={"THÀNH PHẦN LÃNH ĐẠO"}>
                {members.filter((member) => member.lvl === "1" || member.lvl === "2").map((p, index) => (
                    <Member key={index} member={p} count={index}></Member>
                ))}
            </ListMember>
            <ListMember Title={"THÀNH PHẦN QUẢN LÍ"}>
                {members.filter((member) => member.lvl === "2").map((p, index) => (
                    (p.lvl==="2") ? <Member key={index} member={p} count={index}></Member>:false
                ))}
            </ListMember>
            <ListMember Title={"THÀNH PHẦN DÂN CƯ"}>
                {members.filter((member) => member.lvl === "3").map((p, index) => (
                    (p.lvl==="3") ? <Member key={index} member={p} count={index}></Member>:false
                ))}
            </ListMember>
        </div>
    )
}

export default Members;