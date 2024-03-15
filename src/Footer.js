import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div id="web-footer">
            <div id="footer-left">
                <p id="footer-left__about">
                    Chúng tôi là <b>tổ chức phi lợi nhuận</b>, hoạt động cùng nhau trên trang web này.
                     Mục tiêu của chúng tôi là tạo ra môi trường quen thuộc, lưu giữ kỉ niệm của các thành viên.
                </p>
                <p id="footer-left__creator">
                    Trang web này được xây dựng bởi <b>Mai Thế Hào</b>.
                </p>
            </div>
            <div id="footer-right">
                <a id="footer-left__contact" href="/"><i className="fa-solid fa-envelope"></i> Email: Group5Entertainment@gmail.com</a>
                <p id="footer-left__thank">Trân trọng cảm ơn đã ghé thăm trang web của chúng tôi.</p>
            </div>
        </div>
    )
}

export default Footer;