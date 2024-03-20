import React from "react";

function Table({fields=null, listDatas=null, children=null}){
    return(
        <table>
            <thead>
                <tr>{fields.map((field, index) => <th key={index}>{field}</th>)}</tr>
            </thead>
            <tbody>
                {listDatas.map((datas, index) => <tr key={index}>{datas.map((data, index)=><td key={index}>{data}</td>)}</tr>)}
            </tbody>
            {children}
        </table>
    )
}

export {Table}